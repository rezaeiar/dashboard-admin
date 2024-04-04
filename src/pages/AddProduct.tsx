import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState, ChangeEvent } from "react"
import { showAddCategoryModal } from "../store/slices/AddCategoryModalSlice"
import { uploadFile } from "../../api/services/upload"
import { useCategories } from "../hooks/api/useCategories"
import { usePostProduct } from "../hooks/api/useProducts"
import Button from "../components/Button"
import CheckBox from "../components/CheckBox"

const AddProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { data, isSuccess } = useCategories()
    const { mutate: addProduct } = usePostProduct()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [count, setCount] = useState("")
    const [price, setPrice] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [weight, setWeight] = useState("")
    const [country, setCountry] = useState("")
    const [isDigital, setIsDigital] = useState(false)
    const [tagName, setTagName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [multipleOptions, setMultipleOptions] = useState(false)
    const [images, setImages] = useState<string[]>([])

    const addNewTag = (keyCode: number) => {
        if (tagName.length && keyCode === 13) {
            if (!tags.includes(tagName)) {
                setTags(prevState => [...prevState, tagName])
            }
            setTagName("")
        }
    }

    const changeCategoryHandler = (e: ChangeEvent<HTMLInputElement>, categoryId: string) => {
        if (e.target.checked) setCategoryId(categoryId)
    }

    const showCategoriesModalHandler = () => {
        dispatch(showAddCategoryModal({ visibility: true }))
    }

    const createProductHandler = () => {
        const newProductInfo = {
            name,
            description,
            count: +count,
            price: +price,
            tags,
            weight,
            country,
            isDigital,
            categoryId,
            images
        }
        addProduct(newProductInfo)
    }

    const [isFileUploading, setIsFileUploading] = useState(false)
    const uploadFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsFileUploading(true)
        uploadFile(event.target)
            .then(res => {
                if (res.status === 201) {
                    setIsFileUploading(false)
                    setImages((prevState) => {
                        return [...prevState, res.data.url]
                    });
                }
            })
    }

    const removePhoto = (clickedImage: string) => {
        setImages(prevState => prevState.filter(image => image !== clickedImage))
    }

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => navigate(-1)}>
                            {t("Back")}
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("Add Product")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" link="/panel/products">
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" disabled={isFileUploading} onSubmit={createProductHandler}>
                        <>
                            {
                                !isFileUploading &&
                                t("Save")
                            }
                            {
                                !!isFileUploading &&
                                <div className="flex gap-2">
                                    {t("Save")}
                                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-general-70" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            }
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col md:grid gap-3 lg:gap-4 grid-cols-7">
                <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-6 xl:gap-y-8 divide-y">
                    <div className="flex flex-col gap-y-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("information")}
                        </h5>
                        <div className="flex flex-col gap-y-3 sm:gap-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("product name")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Summer T-Shirt")} value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("product description")}
                                </label>
                                <textarea name="" id="" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular aspect-[10/2] resize-none" onChange={e => setDescription(e.target.value)} defaultValue={description}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("images")}
                        </h5>
                        <label className="border cursor-pointer border-dashed bg-general-30/40 hover:bg-general-30/80 transition-all border-general-60 rounded-md flex items-center justify-center aspect-square sm:aspect-[6/2]" htmlFor="small_size">
                            <div className="flex items-center justify-center flex-col gap-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-general-60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                <span className="text-general-80 text-sm sm:text-[10px] xl:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("or drag and drop files")}
                                </span>
                            </div>
                        </label>
                        <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" onChange={event => uploadFileHandler(event)} />
                        <div className="flex gap-2">
                            {
                                images.map(image => (
                                    <div className="h-20 w-20 border p-2 flex items-center justify-center rounded border-general-60 cursor-pointer" key={image} onClick={() => removePhoto(image)}>
                                        <img src={image} alt="product image" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Further Information")}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("product price")}
                                </label>
                                <input type="number" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("enter price")} value={price} onChange={e => setPrice(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Count")}
                                </label>
                                <input type="number" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter the product number")} value={count} onChange={e => setCount(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("shipping")}
                        </h5>
                        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Weight")}
                                </label>
                                <input type="number" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Weight")} value={weight} onChange={e => setWeight(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Country")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Select Country")} value={country} onChange={e => setCountry(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <CheckBox isChecked={isDigital} setIsChecked={setIsDigital} forId="isDigital" />
                            <span className="text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-90">
                                {t("This is digital item")}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Different Options")}
                        </h5>
                        <div className="flex items-center gap-x-2">
                            <CheckBox isChecked={multipleOptions} setIsChecked={setMultipleOptions} forId="multiple options" />
                            <span className="text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-90">
                                {t("This product has multiple options")}
                            </span>
                        </div>
                        {
                            multipleOptions &&
                            <>
                                <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                            {t("title")}
                                        </label>
                                        <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("enter title")} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                            {t("value")}
                                        </label>
                                        <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("enter value")} />
                                    </div>
                                </div>
                                <span className="text-primary-100 text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer">
                                    {t("Create New")}
                                </span>
                            </>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Categories")}
                        </h5>
                        {
                            isSuccess &&
                            <ul>
                                {
                                    !data.length &&
                                    <span className="text-general-80 text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("There are no categories.")}
                                    </span>
                                }
                                {
                                    data.map((category: { id: string, name: string }) => (
                                        <li className="text-general-90 text-xs lg:text-sm flex items-center gap-x-2 font-iransans-regular" key={category.id}>
                                            <input type="checkbox" name={category.id} checked={category.id === categoryId ? true : false} id="" onChange={e => changeCategoryHandler(e, category.id)} />
                                            <span>{category.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                        <span className="text-primary-100 text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={showCategoriesModalHandler}>
                            {t("Create New")}
                        </span>
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Tags")}
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Add Tags")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter tag name")} value={tagName} onChange={(event) => setTagName(event.target.value)} onKeyDown={(event) => addNewTag(event.keyCode)} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {
                                tags.map(tag => (
                                    <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-[10px] lg:text-xs py-1 px-2" key={tag}>
                                        {tag}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer" onClick={() => setTags(prevState => prevState.filter(tagName => tagName !== tag))}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("SEO Settings")}
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Title")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Description")}
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular aspect-[5/2] resize-none" defaultValue={""}>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddProduct