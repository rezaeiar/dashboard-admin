import Button from "../components/Button"
import { useTranslation } from "react-i18next"

const CustomerInfo = () => {
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
                        {t("Customer Information")}
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
                <div className="flex flex-col col-span-5 gap-y-3 lg:gap-y-4">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 xl:gap-y-6 divide-y">
                        <div className="flex justify-between">
                            <div className="flex gap-x-2 md:gap-x-5">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 bg-general-60 text-xl md:text-4xl rounded-full text-white flex items-center justify-center">
                                    M
                                </div>
                                <div className="flex flex-col gap-y-1 md:gap-y-2">
                                    <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                        Lenora Robinson
                                    </h5>
                                    <div className="flex flex-col">
                                        <span className="text-general-70 ltr:font-nunitosans-semiBold rtl:font-iransans-regular text-[10px] sm:text-xs">
                                            Ireland
                                        </span>
                                        <span className="text-general-70 ltr:font-nunitosans-semiBold rtl:font-iransans-regular text-[10px] sm:text-xs">
                                            5 Orders
                                        </span>
                                        <span className="text-general-70 ltr:font-nunitosans-semiBold rtl:font-iransans-regular text-[10px] sm:text-xs">
                                            Customer for 2 years
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-101">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-101">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-101">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-101">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5 text-general-60">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4 sm:gap-y-6 pt-4 xl:pt-6">
                            <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("Customer Notes")}
                            </h5>
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("Notes")}
                                    </label>
                                    <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 aspect-[10/2] px-4 py-2 resize-none" placeholder={t("Add notes about customer")}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 xl:gap-y-6">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Orders")}
                        </h5>
                        <table className='divide-y bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-70 child:text-start min-w-max gap-x-2'>
                                <th className="w-28 sm:w-32">{t("Order")}</th>
                                <th className="w-28 sm:w-32">{t("Date")}</th>
                                <th className="w-32 sm:w-36">{t("Order Status")}</th>
                                <th className="w-28 sm:w-32">{t("Price")}</th>
                            </tr>
                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    May 25, 3:12 PM
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("Completed")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">$29.74</td>
                            </tr>
                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    May 25, 3:12 PM
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("Pending")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">$29.74</td>
                            </tr>
                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    May 25, 3:12 PM
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("Pending")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">$29.74</td>
                            </tr>
                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    May 25, 3:12 PM
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                        {t("Pending")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">$29.74</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 divide-y">
                        <div className="flex flex-col gap-y-6">
                            <div className="flex justify-between items-center">
                                <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                    {t("Overview")}
                                </h5>
                                <span className="text-primary-100 text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Edit")}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Address")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    831 Wilhelmine Glen
                                    40583-2293
                                    South Lelastad
                                    Ireland
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Email Address")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    lenora_rob@yahoo.com
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Phone")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    636-458-4820
                                </span>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <span className="text-red-101 text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                Delete Customer
                            </span>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Tags")}
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Add Tags")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Enter tag name")} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo