import { useState } from "react"
import Button from "../components/Button"
import { useTranslation } from "react-i18next"
const Orders = () => {
    const { t } = useTranslation()
    const products = [
        {
            id: 1,
            name: "alireza",
            address: "14 metri chamran, 225",
            date: new Date(),
            cat: "home",
            status: "COMPLETED"
        },
        {
            id: 2,
            name: "amir",
            address: "43 metri chamran, 225",
            date: new Date(),
            cat: "out",
            status: "PENDING"
        },
    ]
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
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
            <div className="flex flex-col gap-y-4">
                <div className="capitalize flex gap-2 md:gap-4 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2 md:gap-x-4">
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60 capitalize">
                                <option selected value='-1'>
                                    {t('filter by category')}
                                </option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60 capitalize">
                                <option selected value='-1'>
                                    {t('filter by status')}
                                </option>
                                <option value="completed">{t("completed")}</option>
                                <option value="pending">{t("pending")}</option>
                                <option value="rejected">{t("rejected")}</option>
                            </select>
                            <div className="w-2 h-2 absolute rtl:left-2 ltr:right-2 bg-red-101 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 capitalize font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("search")} />
                    </div>
                </div>
                <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                    <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-6 sm:text-sm text-xs font-nunitosans-extrabold text-general-100 child:text-start min-w-max gap-x-2'>
                        <th className="w-28 sm:w-32">ID</th>
                        <th className="w-28 sm:w-32">NAME</th>
                        <th className="w-28 sm:w-32">ADDRESS</th>
                        <th className="w-28 sm:w-32">DATE</th>
                        <th className="w-28 sm:w-32">TYPE</th>
                        <th className="w-28 sm:w-32">STATUS</th>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Pending
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-red-30 text-red-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Rejected
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                                Completed
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="text-sm flex justify-between">
                <span className="text-general-80">
                    Showing 1-09 of 78
                </span>
                <div className="flex border border-general-50 divide-x rounded-md">
                    <div className="px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-100 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders