import Button from "../components/Button"
import { useTranslation } from "react-i18next"

const Customers = () => {
    const { t } = useTranslation()
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("customers")}
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
                            {t("add customer")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="capitalize flex gap-2 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
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
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60 capitalize">
                                <option selected value='-1'>
                                    {t('filter by')}
                                </option>
                                <option value="completed">{t("price")}</option>
                                <option value="pending">{t("rating")}</option>
                                <option value="rejected">{t("inventory")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 capitalize font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("search")} />
                    </div>
                </div>
                <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                    <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-4 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 child:text-start min-w-max gap-x-2'>
                        <th className="w-36 sm:w-44">{t("customer")}</th>
                        <th className="w-28 sm:w-32">{t("location")}</th>
                        <th className="w-28 sm:w-32">{t("orders")}</th>
                        <th className="w-28 sm:w-32">{t("spent")}</th>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                            <div className="flex items-center gap-x-3">
                                <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                    M
                                </div>
                                <span>
                                    Walter Gibson
                                </span>
                            </div>
                        </td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">6</td>
                        <td className="w-28 sm:w-32 shrink-0">$200.00</td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                            <div className="flex items-center gap-x-3">
                                <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                    M
                                </div>
                                <span>
                                    Walter Gibson
                                </span>
                            </div>
                        </td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">6</td>
                        <td className="w-28 sm:w-32 shrink-0">$200.00</td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                            <div className="flex items-center gap-x-3">
                                <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                    A
                                </div>
                                <span>
                                    Walter Gibson
                                </span>
                            </div>
                        </td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">6</td>
                        <td className="w-28 sm:w-32 shrink-0">$200.00</td>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                            <div className="flex items-center gap-x-3">
                                <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                    R
                                </div>
                                <span>
                                    Walter Gibson
                                </span>
                            </div>
                        </td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">6</td>
                        <td className="w-28 sm:w-32 shrink-0">$200.00</td>
                    </tr>
                </table>
            </div>
            <div className="text-sm flex justify-between">
                <span className="text-general-80 capitalize">
                    {t("showing")} 1-09 {t("of")} 78
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

export default Customers