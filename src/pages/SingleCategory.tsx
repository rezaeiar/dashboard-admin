import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { useState, useEffect, ChangeEvent } from "react"
import { getSingleCategory, changeCategoryInfo, deleteSingleCategory } from "../../api/services/category"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../store/slices/successModalSlice"
import { showErrorModal } from "../store/slices/ErrorModalSlice"
import { deleteProductFromCategory } from "../../api/services/category"
import { uploadFile } from '../../api/services/upload'
import Loading from "../components/Loading"
import Button from "../components/Button"
import CheckBox from "../components/CheckBox"

const SingleCategory = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { data, isSuccess, isLoading, refetch } = useQuery(["category", params.CategorieName], () => getSingleCategory(params.CategorieName as string))

    const [categoryName, setCategoryName] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    console.log(data);

    useEffect(() => {
        if (isSuccess) setCategoryName(data.name)
    }, [isSuccess])

    const [categoryPhoto, setCategoryPhoto] = useState("")

    const changeCategoryInfoHandler = (id: string) => {
        const categoryInfo: { name: string, image?: string } = {
            name: categoryName,
        }
        if (categoryPhoto) {
            categoryInfo.image = categoryPhoto
        }

        changeCategoryInfo(id, categoryInfo)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your changes were made successfully.") } }))
                    refetch()
                }
            })
            .catch(() => {
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your changes were not applied, please try again.") } }))
            })
    }
    const deleteCategoryHandler = (id: string) => {
        deleteSingleCategory(id)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired category has been successfully deleted.") } }))
                    navigate("/panel/categories")
                }
            })
            .catch(() => {
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired category could not be deleted, please try again.") } }))
            })
    }
    const deleteProductFromCategoryHandler = (id: string, productId: string) => {
        deleteProductFromCategory(id, productId)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired product has been successfully removed from the category.") } }))
                    refetch()
                }
            })
            .catch(() => {
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired product was not removed from the category, please try again.") } }))
            })
    }

    const showEditConfirmModal = () => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Change information"), description: t("You are changing the information of this category, are you sure?") }, button: "Continue", handler: () => changeCategoryInfoHandler(params.CategorieName as string) }))
    }
    const showDeleteConfirmModal = () => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete Category"), description: t("By deleting a category, all the products of this category will be deleted, are you sure?") }, button: "Delete", handler: () => deleteCategoryHandler(params.CategorieName as string) }))
    }
    const showDeleteProductConfirmModal = (productId: string) => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete product from category"), description: t("You are removing the product from this category, are you sure?") }, button: "Delete", handler: () => deleteProductFromCategoryHandler(params.CategorieName as string, productId) }))
    }

    const [isFileUploading, setIsFileUploading] = useState(false)
    const uploadFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsFileUploading(true)
        uploadFile(event.target)
            .then(res => {
                if (res.status === 201) {
                    setIsFileUploading(false)
                    setCategoryPhoto(res.data.url);
                }
            })
    }

    if (isLoading) return <Loading />

    return (
        <>
            <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => navigate(-1)}>
                                {t("Back")}
                            </span>
                        </div>
                        <h2 className="text-lg sm:text-2xl font-iransans-bold text-general-100 capitalize">
                            {data.name}
                        </h2>
                    </div>
                    <div className="flex gap-x-1 sm:gap-x-2">
                        <Button type="white" size="small" link="/panel/categories">
                            <>
                                {t("Cancel")}
                            </>
                        </Button>
                        <Button type="primary" size="small" disabled={isFileUploading} onSubmit={() => showEditConfirmModal()}>
                            <>
                                {t("Save")}
                                {
                                    !!isFileUploading &&
                                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-general-70" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                }

                            </>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col md:grid gap-3 lg:gap-4 grid-cols-7">
                    <div className="bg-white h-fit rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-4 xl:gap-y-6">
                        <div className="flex gap-x-2 items-center">
                            <h5 className="text-general-100 ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("products")}
                            </h5>
                            <span className="text-general-60 text-sm font-nunitosans-regular">
                                {data.products.length}
                            </span>
                        </div>
                        {
                            data.products.length ?
                                <div className="flex flex-col gap-y-3">
                                    {
                                        data.products.map((product: { name: string, id: string }) => (
                                            <div className="border border-general-50 rounded-md p-2 sm:p-3 xl:p-4 flex justify-between items-center" key={product.id}>
                                                <div className="flex gap-x-3 xl:gap-x-4 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                    </svg>
                                                    <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                                    <h6 className="text-general-100 text-xs sm:text-sm lg:text-base font-iransans-semiBold line-clamp-1">
                                                        {product.name}
                                                    </h6>
                                                </div>
                                                <div className="flex gap-x-1 sm:gap-x-3 xl:gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => showDeleteProductConfirmModal(product.id as string)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101 cursor-pointer">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div> :
                                <div className="px-3 sm:px-6 py-6 sm:py-10 bg-red-90 rounded flex flex-col gap-y-4">
                                    <h3 className="text-white ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-base sm:text-lg">
                                        {t("There are no products for this category")}
                                    </h3>
                                    <span className="text-white ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs sm:text-sm">
                                        {t("All the products that are placed in the")} <span className="font-iransans-regular">"{data.name}"</span> {t("category will be shown here.")}
                                    </span>
                                </div>
                        }
                        <Button size="small" type="white" styles="justify-center" link="/panel/products/add">
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span className="ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Add Product")}
                                </span>
                            </>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                        <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                            <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("Category Visibility")}
                            </h5>
                            <div className="flex items-center gap-x-2">
                                <CheckBox isChecked={isVisible} setIsChecked={setIsVisible} forId="Visible" />
                                <span className="text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-90">
                                    {t("visible on site")}
                                </span>
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                            <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("Category Info")}
                            </h5>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Name")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-70 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Image")}
                                </label>
                                {
                                    data.image ?
                                        <label className="border cursor-pointer border-dotted border-general-60 rounded-md flex items-center justify-center aspect-[4/3] overflow-hidden p-0.5" htmlFor="small_size">
                                            <img src={data.image} alt="" className="w-full h-full object-cover brightness-75 rounded" />
                                        </label> :
                                        <label className="border cursor-pointer border-dashed border-general-60 rounded-md flex items-center justify-center aspect-[4/3]" htmlFor="small_size">
                                            <div className="flex items-center justify-center flex-col gap-y-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-general-60">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                                </svg>
                                                <span className="text-general-70 text-sm sm:text-[10px] xl:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                                    {t("or drag and drop files")}
                                                </span>
                                            </div>
                                        </label>
                                }

                                <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" onChange={(event) => uploadFileHandler(event)} />
                            </div>
                            <div className="flex mt-5 pt-5 w-full border-t">
                                <span className="text-red-101  text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => showDeleteConfirmModal()}>
                                    {t("Delete Category")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCategory