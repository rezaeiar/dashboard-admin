import { useState } from "react"
import Button from "../components/Button"
import { useTranslation } from "react-i18next"
import CheckBox from "../components/CheckBox"

const SingleCategory = () => {
    const { t } = useTranslation()
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm">
                            Back
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        Women Clothes
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" styles="">
                        <>
                            {t("export")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("add product")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="grid gap-x-4 grid-cols-7">
                <div className="bg-white rounded-md p-7 col-span-5 flex flex-col gap-y-6">
                    <div className="flex gap-x-2 items-center">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Products
                        </h5>
                        <span className="text-general-60 text-sm font-nunitosans-regular">
                            12
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="border border-general-50 rounded-md p-4 flex justify-between items-center">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                                <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                <h6 className="text-general-100 font-nunitosans-bold">
                                    Women Striped T-Shirt
                                </h6>
                            </div>
                            <div className="flex gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                        <div className="border border-general-50 rounded-md p-4 flex justify-between items-center">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                                <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                <h6 className="text-general-100 font-nunitosans-bold">
                                    Women Striped T-Shirt
                                </h6>
                            </div>
                            <div className="flex gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                        <div className="border border-general-50 rounded-md p-4 flex justify-between items-center">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                                <img src="/images/Bitmap1.png" alt="" className="rounded" />
                                <h6 className="text-general-100 font-nunitosans-bold">
                                    Women Striped T-Shirt
                                </h6>
                            </div>
                            <div className="flex gap-x-4 text-general-70 child:cursor-pointer child:transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-101">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="border border-general-50 rounded-md text-primary-100 flex items-center justify-center p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="font-nunitosans-regular text-sm">
                            Add Product
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-7 flex flex-col">
                        <h5 className="text-general-100 text-sm font-nunitosans-extrabold">
                            Category Visibility
                        </h5>
                        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} forId="Visible" />
                    </div>
                    <div className="bg-white rounded-md p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-sm font-nunitosans-extrabold">
                            Category Visibility
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Name
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" value={'Women Clothes'} />
                        </div>
                        <div className="flex flex-col">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCategory