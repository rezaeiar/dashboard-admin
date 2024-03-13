import { useState } from "react"
import Button from "../components/Button"
import { useTranslation } from "react-i18next"
import Filters from "../components/Filters"
// import EmptyEntity from "../components/EmptyEntity"
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
    console.log(products);
    

    const [firstItemValue, setFirstItemValue] = useState("-1")
    const [secondItemValue, setSecondItemValue] = useState("-1")

    console.log(firstItemValue, secondItemValue);

    const serachHandler = (value: string) => {
        console.log(value);
    }
    const [hasOrders] = useState(true)
    if (!hasOrders) {
        return (
            <div className="py-4 h-screen sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
                <div className="flex h-auto justify-between items-center">
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("orders")}
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
                <div className="">empty</div>
                {/* <EmptyEntity /> */}
            </div>
        )
    }

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("orders")}
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
                <Filters firstitem={["Filter By Category", "laptop"]} seconditem={["Filter By Status", "completed", "pending", "rejected"]} searchSubmit={serachHandler} setFirstItemValue={setFirstItemValue} setSecondItemValue={setSecondItemValue} />
                <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                    <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-6 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 child:text-start min-w-max gap-x-2 uppercase'>
                        <th className="w-28 sm:w-32">{t("id")}</th>
                        <th className="w-28 sm:w-32">{t("client")}</th>
                        <th className="w-28 sm:w-32">{t("address")}</th>
                        <th className="w-28 sm:w-32">{t("date")}</th>
                        <th className="w-28 sm:w-32">{t("category")}</th>
                        <th className="w-28 sm:w-32">{t("status")}</th>
                    </tr>
                    <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                        <td className="w-28 sm:w-32 shrink-0">00001</td>
                        <td className="w-28 sm:w-32 shrink-0">Christine Brooks</td>
                        <td className="w-28 sm:w-32 shrink-0">979 Immanuel Ferry Suite 526</td>
                        <td className="w-28 sm:w-32 shrink-0">28 May 2019</td>
                        <td className="w-28 sm:w-32 shrink-0">Book</td>
                        <td className="w-28 sm:w-32 shrink-0">
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-yellow-30 text-yellow-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Pending")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
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
                            <button className="w-4/5 flex justify-center bg-green-30 text-green-101 text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Completed")}
                            </button>
                        </td>
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

export default Orders