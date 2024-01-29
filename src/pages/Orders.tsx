import Button from "../components/Button"
import { useTranslation } from "react-i18next"
import FilterPopUp from "../components/FilterPopUp"

const Orders = () => {

    const { t } = useTranslation()
    return (
        <>
            <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("order lists")}
                    </h2>
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
                                {t("add order")}
                            </>
                        </Button>
                    </div>
                </div>
                <div className="border border-general-50 bg-white rounded-md flex w-auto md:w-fit text-xs sm:text-sm font-nunitosans-bold rtl:font-iransans-regular text-general-100 divide-x rtl:divide-x-reverse overflow-hidden overflow-x-auto capitalize">
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 sm:w-6 w-4 sm:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        {t("filter by")}
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        {t("date")}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        {t("order type")}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        {t("order status")}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                        {t("search")}
                    </div>
                    <div className="p-4 xl:p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors text-red-101">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        {t("reset filter")}
                    </div>
                </div>
                <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-hidden'>
                    <tr className='p-4 bg-general-30 grid grid-cols-6 text-sm font-nunitosans-extrabold text-general-100 child:text-start'>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Pending
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-red-30 text-red-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Rejected
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-4 bg-white grid grid-cols-6 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                        <td>00001</td>
                        <td>Christine Brooks</td>
                        <td>979 Immanuel Ferry Suite 526</td>
                        <td>28 May 2019</td>
                        <td>Book</td>
                        <td>
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                </table>
                <div className="text-sm flex justify-between">
                    <span className="text-general-80">
                        Showing 1-09 of 78
                    </span>
                    <div className="flex border border-general-50 divide-x rounded-md">
                        <div className="px-2 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className="px-2 py-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <FilterPopUp />
        </>
    )
}

export default Orders