import { useEffect, useState } from "react"
import Button from "../components/Button"
import { useTranslation } from "react-i18next"
import CheckBox from "../components/CheckBox"
import { useParams } from "react-router-dom"
import { getSingleCategory } from "../../api/services/category"
import { useQuery } from "react-query"
import Loading from "../components/Loading"
import DeleteModal from "../components/DeleteModal"
import ConfirmModal from "../components/ConfirmModal"

const SingleCategory = () => {
    const { t } = useTranslation()
    const [isChecked, setIsChecked] = useState(false)
    const params = useParams()

    const { data, isSuccess, isLoading , refetch} = useQuery(["category", params.CategorieName], () => getSingleCategory(params.CategorieName as string))
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [categoryName, setCategoryName] = useState("")

    useEffect(() => {
        if (isSuccess) {
            setCategoryName(data.name)
        }
    }, [isSuccess])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("back")}
                            </span>
                        </div>
                        <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                            {data.name}
                        </h2>
                    </div>
                    <div className="flex gap-x-1 sm:gap-x-2">
                        <Button type="white" size="small" styles="">
                            <>
                                {t("cancel")}
                            </>
                        </Button>
                        <Button type="primary" size="small" styles="" onSubmit={() => setIsShowConfirmModal(true)}>
                            <>
                                {t("save")}
                            </>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col md:grid gap-3 lg:gap-4 grid-cols-7">
                    <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-4 xl:gap-y-6">
                        <div className="flex gap-x-2 items-center">
                            <h5 className="text-general-100 ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("products")}
                            </h5>
                            <span className="text-general-60 text-sm font-nunitosans-regular">
                                12
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="border border-general-50 rounded-md p-2 sm:p-3 xl:p-4 flex justify-between items-center">
                                <div className="flex gap-x-3 xl:gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                    <h6 className="text-general-100 text-xs sm:text-sm lg:text-base font-nunitosans-bold line-clamp-1">
                                        Women Striped T-Shirt
                                    </h6>
                                </div>
                                <div className="flex gap-x-1 sm:gap-x-3 xl:gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className="border border-general-50 rounded-md p-2 sm:p-3 xl:p-4 flex justify-between items-center">
                                <div className="flex gap-x-3 xl:gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                    <h6 className="text-general-100 text-xs sm:text-sm lg:text-base font-nunitosans-bold line-clamp-1">
                                        Women Striped T-Shirt
                                    </h6>
                                </div>
                                <div className="flex gap-x-1 sm:gap-x-3 xl:gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className="border border-general-50 rounded-md p-2 sm:p-3 xl:p-4 flex justify-between items-center">
                                <div className="flex gap-x-3 xl:gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                    <h6 className="text-general-100 text-xs sm:text-sm lg:text-base font-nunitosans-bold line-clamp-1">
                                        Women Striped T-Shirt
                                    </h6>
                                </div>
                                <div className="flex gap-x-1 sm:gap-x-3 xl:gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Button size="small" type="white" styles="justify-center">
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span className="ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("add product")}
                                </span>
                            </>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                        <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                            <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("category visibility")}
                            </h5>
                            <div className="flex items-center gap-x-2">
                                <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} forId="Visible" />
                                <span className="text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-90">
                                    {t("visible on site")}
                                </span>
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                            <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("category info")}
                            </h5>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("name")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("image")}
                                </label>
                                <label className="border cursor-pointer border-dashed border-general-60 rounded-md flex items-center justify-center aspect-[4/3]" htmlFor="small_size">
                                    <div className="flex items-center justify-center flex-col gap-y-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-general-60">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                        <span className="text-general-80 text-sm sm:text-[10px] xl:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                            {t("or drag and drop files")}
                                        </span>
                                    </div>
                                </label>
                                <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" />
                            </div>
                            <div className="flex mt-5 pt-5 w-full border-t">
                                <span className="text-red-101  text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => setIsShowDeleteModal(true)}>
                                    Delete Customer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteModal isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal={setIsShowDeleteModal} categoryId={params.CategorieName as string} />
            <ConfirmModal isShowConfirmModal={isShowConfirmModal} setIsShowConfirmModal={setIsShowConfirmModal} categoryId={params.CategorieName as string} categoryName={categoryName} refetch={refetch} />
        </>
    )
}

export default SingleCategory