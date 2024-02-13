import Button from "../components/Button"
import { useTranslation } from "react-i18next"

const AddProduct = () => {
    const { t } = useTranslation()
    return (
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
                        {t("add product")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" styles="">
                        <>
                            {t("cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="">
                        <>
                            {t("save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col md:grid gap-3 lg:gap-4 grid-cols-7">
                <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-6 xl:gap-y-8 divide-y">
                    <div className="flex flex-col gap-y-6">
                        <h5 className="text-general-100 text-sm xl:text-base font-nunitosans-extrabold">
                            Information
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 aspect-[5/1] px-4"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base font-nunitosans-extrabold">
                            Images
                        </h5>
                        <label className="border cursor-pointer border-dashed border-general-60 rounded-md flex items-center justify-center aspect-square sm:aspect-[6/2]" htmlFor="small_size">
                            <div className="flex items-center justify-center flex-col gap-y-2">
                                <div className="py-2 sm:py-1.5 xl:py-2 px-5 sm:px-2 xl:px-5 text-xs xl:text-sm capitalize bg-white text-primary-100 rounded font-nunitosans-regular rtl:font-iransans-regular h-min hover:bg-general-30 active:bg-white disabled:bg-general-50 disabled:text-white focus:bg-white transition-colors border border-general-50 flex items-center gap-x-1">
                                    Add File
                                </div>
                                <span className="text-general-80 text-sm sm:text-[10px] xl:text-sm font-nunitosans-regular">
                                    Or drag and drop files
                                </span>
                            </div>
                        </label>
                        <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" />
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base font-nunitosans-extrabold">
                            Price
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Product Price
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Enter price" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Discount Price
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Price at Discount" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base font-nunitosans-extrabold">
                            Different Options
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Size
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Sizet" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Value
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Price at Discount" />
                            </div>
                        </div>
                        <span className="text-primary-100 text-sm font-nunitosans-regular">Create New</span>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                        <h5 className="text-general-100 text-sm xl:text-base font-nunitosans-extrabold">
                            Shipping
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Weight
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Enter Weight" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                    Country
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Select Country" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm font-nunitosans-extrabold">
                            Categories
                        </h5>
                        <ul>
                            <li className="text-general-100 text-xs lg:text-sm flex items-center gap-x-2">
                                <input type="checkbox" name="" id="" />
                                <span>Women</span>
                            </li>
                            <li className="text-general-100 text-xs lg:text-sm flex items-center gap-x-2">
                                <input type="checkbox" name="" id="" />
                                <span>Men</span>
                            </li>
                        </ul>
                        <span className="text-primary-100 text-xs lg:text-sm font-nunitosans-regular">
                            Create New
                        </span>
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm font-nunitosans-extrabold">
                            Tags
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                Add Tags
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-[10px] lg:text-xs py-1 px-2">
                                T-Shirt
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-[10px] lg:text-xs py-1 px-2">
                                Men Clothes
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-[10px] lg:text-xs py-1 px-2">
                                Summer Collection
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        {/* <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Image
                            </label>
                            <div className="border border-dashed border-general-60 rounded-md flex items-center justify-center py-12">
                                <div className="flex items-center justify-center flex-col gap-y-2">
                                    <button className="flex border border-general-50 text-xs text-primary-100 bg-white px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                                        Add File
                                    </button>
                                    <span className="text-general-80 text-sm font-nunitosans-regular">
                                        Or drag and drop files
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm font-nunitosans-extrabold">
                            SEO Settings
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 font-nunitosans-regular">
                                Description
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 aspect-[5/2] px-4">

                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct