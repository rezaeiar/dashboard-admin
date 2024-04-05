import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useCoupons } from "../hooks/api/useCoupons"
import { useSetting } from "../hooks/api/useSetting"
import { useDeleteCoupon } from "../hooks/api/useCoupons"
import { useState, useEffect } from "react"
import { CouponType } from "../types/api/Coupons.types"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { statusStyleGenerator } from "../utils/helpers"
import { dateGenerator } from "../utils/dateGenerator"
import Pagination from "../components/Pagination"
import EmptyEntity from "../components/EmptyEntity"

const Coupons = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isLoading, dataUpdatedAt } = useCoupons()
    const { data: dataSetting, isSuccess: isSuccessSetting } = useSetting()
    const { mutate: deleteCoupon } = useDeleteCoupon()

    const [allCoupons, setAllCoupons] = useState<null | CouponType[]>(null)
    const [selectedStatus, setSelectedStatus] = useState("-1")
    const [filterBy, setFilterBy] = useState("-1")
    const [searchedValue, setSearchedValue] = useState("")
    const [shown, setShown] = useState(10)
    const [page, setPage] = useState(1);
    let updatedTime = new Date(dataUpdatedAt);

    useEffect(() => {
        if (isSuccessSetting) setShown(dataSetting.numberDispaly)
    }, [isSuccessSetting, dataSetting])

    useEffect(() => {
        if (data) setAllCoupons([...data])
        else setAllCoupons([])
    }, [data])

    useEffect(() => {
        updatedTime = new Date(dataUpdatedAt);
    }, [dataUpdatedAt])

    useEffect(() => {
        setSearchedValue("")
        if (selectedStatus !== "-1") {
            const filteredData = data?.filter((coupon: CouponType) => coupon.status === selectedStatus)
            setAllCoupons(filteredData)
        } else {
            setAllCoupons(data)
        }
    }, [selectedStatus, filterBy])

    useEffect(() => {
        if (!searchedValue) setAllCoupons(data ? [...data] : [])
    }, [searchedValue])

    const changePage = (page: number) => setPage(page)

    const searchHandler = () => {
        const searchedData = data.filter((coupon: CouponType) => coupon.code.toLowerCase().includes(searchedValue.toLowerCase()) || coupon.name.toLowerCase().includes(searchedValue.toLowerCase()))
        setAllCoupons(searchedData ? searchedData : null)
    }

    const deleteCouponHandler = (id: string) => {
        deleteCoupon(id as string)
    }

    const showDeleteConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete Coupon"), description: t("You are deleting a coupon. are you sure?") }, button: "Delete", handler: () => deleteCouponHandler(id as string) }))
    }

    if (isLoading) return <Loading />
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100">
                    {t("Coupons")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="primary" size="small" link="/panel/coupons/create">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Coupon")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-2 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
                                <option value='-1'>
                                    {t('filter by status')}
                                </option>
                                <option value="VALID">{t("Valid")}</option>
                                <option value="INVALID">{t("Invalid")}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
                                <option value='-1'>
                                    {t('Filter by')}
                                </option>
                                <option value="USAGE">{t("usage")}</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer" onClick={searchHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 capitalize font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Search by name or discount code")} value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)} />
                    </div>
                </div>
                {
                    allCoupons && !!allCoupons.length &&
                    <>
                        <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                            <thead>
                                <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-5 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 *:text-start min-w-max gap-x-2 capitalize'>
                                    <th className="w-36 sm:w-44">{t("coupon")}</th>
                                    <th className="w-28 sm:w-32">{t("usage")}</th>
                                    <th className="w-28 sm:w-32">{t("status")}</th>
                                    <th className="w-28 sm:w-32">{t("date")}</th>
                                    <th className="w-28 sm:w-32">{t("actions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterBy === "USAGE" && [...allCoupons]?.sort((a, b) => b.usage - a.usage).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((coupon: any) => (
                                        <tr className='even:bg-general-30/30 first:border-none border-t p-3 md:p-4 bg-white grid grid-cols-5 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={coupon.id}>
                                            <td className="w-36 sm:w-44 shrink-0">
                                                <div className="flex items-center gap-x-4">
                                                    <div className={`h-10 w-10 rounded-md flex justify-center items-center text-white shrink-0 ${coupon.type === "FREE_SHIPPING" ? "bg-general-70" : "bg-primary-100"}`}>
                                                        {
                                                            coupon.type === "FREE_SHIPPING" ?
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                                </svg> :
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                                                </svg>
                                                        }
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h4 className='font-iransans-semiBold text-sm text-general-100 line-clamp-1'>
                                                            {coupon.name}
                                                        </h4>
                                                        <span className='text-general-60 text-xs'>
                                                            {coupon.code}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                                {coupon.usage} {t("item")}
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator(coupon.status === "VALID" ? "VALID" : "INVALID")}`}>
                                                    {t(coupon.status)}
                                                </button>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{dateGenerator(coupon.duration)}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <div className="p-2 w-full cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(coupon.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-101 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    filterBy === "-1" && [...allCoupons].slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((coupon: any) => (
                                        <tr className='even:bg-general-30/30 first:border-none border-t p-3 md:p-4 bg-white grid grid-cols-5 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={coupon.id}>
                                            <td className="w-36 sm:w-44 shrink-0">
                                                <div className="flex items-center gap-x-4">
                                                    <div className={`h-10 w-10 rounded-md flex justify-center items-center text-white shrink-0 ${coupon.type === "FREE_SHIPPING" ? "bg-general-70" : "bg-primary-100"}`}>
                                                        {
                                                            coupon.type === "FREE_SHIPPING" ?
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                                </svg> :
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                                                </svg>
                                                        }
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h4 className='font-iransans-semiBold text-sm text-general-100 line-clamp-1'>
                                                            {coupon.name}
                                                        </h4>
                                                        <span className='text-general-60 text-xs'>
                                                            {coupon.code}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                                {coupon.usage} {t("item")}
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator(coupon.status === "VALID" ? "VALID" : "INVALID")}`}>
                                                    {t(coupon.status)}
                                                </button>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{dateGenerator(coupon.duration)}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <div className="p-2 w-full cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(coupon.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-101 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination page={page} numberOfItems={allCoupons.length} shown={shown} updatedTime={updatedTime} changePage={changePage} />
                    </>
                }
            </div>
            {
                allCoupons && !allCoupons.length &&
                <EmptyEntity title={t("No Coupons Yet")} type={"categories"} link="/panel/coupons/create" button="Add Coupon">
                    <>
                        {t("All your next discount codes will be visible on this page.")} <br className="hidden sm:block" />
                        {t("Codes help to increase your sales, create now!")}
                    </>
                </EmptyEntity>
            }
        </div>
    )
}

export default Coupons