import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { getAllOrders } from "../../api/services/order"
import { useState, useEffect } from "react"
import { showAddOrderModal } from "../store/slices/AddOrderModalSlice"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { idGenerator, statusStyleGenerator } from "../utils/helpers"
import Pagination from "../components/Pagination"
import EmptyEntity from "../components/EmptyEntity"
import { Link } from "react-router-dom"
import { getAllSetting } from "../../api/services/setting"

const Orders = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isLoading, dataUpdatedAt } = useQuery("orders", getAllOrders)
    const { data: dataSetting, isSuccess: isSuccessSetting } = useQuery("setting", getAllSetting)

    const [allOrders, setAllOrders] = useState<null | { total_price: number }[]>(null)

    const [selectedStatus, setSelectedStatus] = useState("-1")
    const [filterBy, setFilterBy] = useState("-1")
    const [serachedValue, setSearchedValue] = useState("")
    const [shown, setShown] = useState(10)
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (isSuccessSetting) setShown(dataSetting.numberDispaly)
    }, [isSuccessSetting, dataSetting])

    const changePage = (page: number) => setPage(page)
    let updatedTime = new Date(dataUpdatedAt);

    const AddOrderModalHandler = () => {
        dispatch(showAddOrderModal({ visibility: true }))
    }

    useEffect(() => {
        updatedTime = new Date(dataUpdatedAt);
    }, [dataUpdatedAt])

    useEffect(() => {
        if (data) setAllOrders([...data])
        else setAllOrders([])
    }, [data])

    useEffect(() => {
        setSearchedValue("")
        if (selectedStatus !== "-1") {
            const filteredData = data?.filter((product: any) => product.status === selectedStatus)
            setAllOrders(filteredData)
        } else {
            setAllOrders(data)
        }
    }, [selectedStatus, filterBy])

    const searchHandler = () => {
        const searchedData = data.filter((product: any) => product.user.email.includes(serachedValue) || product.user.username.includes(serachedValue))
        setAllOrders(searchedData ? searchedData : null)
    }


    if (isLoading) return <Loading />

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("orders")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small">
                        <>
                            {t("Export")}
                        </>
                    </Button>
                    <Button type="primary" size="small" onSubmit={AddOrderModalHandler}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Order")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-2 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                        <div className="flex items-center relative md:w-44 shrink-0 font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
                                <option value="-1">
                                    {t('Select Status')}
                                </option>
                                <option value="COMPLETED">{t("COMPLETED")}</option>
                                <option value="PENDING">{t("PENDING")}</option>
                                <option value="REJECTED">{t("REJECTED")}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
                                <option value='-1'>
                                    {t('Filter by')}
                                </option>
                                <option value="TOTAL_PRICE">{t("Total Price")}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer" onClick={searchHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 font-iransans-regular placeholder:ltr:font-nunitosans-regular placeholder:rtl:font-iransans-regular" placeholder={t("Search by Email or Username")} value={serachedValue} onChange={(e) => setSearchedValue(e.target.value)} />
                    </div>
                </div>
                {
                    allOrders && !!allOrders.length &&
                    <>
                        <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                            <thead>
                                <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-6 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 child:text-start min-w-max gap-x-2 uppercase *:text-start'>
                                    <th className="w-28 sm:w-32">{t("id")}</th>
                                    <th className="w-28 sm:w-32">{t("client")}</th>
                                    <th className="w-28 sm:w-32">{t("address")}</th>
                                    <th className="w-28 sm:w-32">{t("product")}</th>
                                    <th className="w-28 sm:w-32">{t("date")}</th>
                                    <th className="w-28 sm:w-32">{t("status")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterBy === "TOTAL_PRICE" && [...allOrders]?.sort((a, b) => b.total_price - a.total_price).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((order: any, index) => (
                                        <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={order.id}>
                                            <td className="w-28 sm:w-32 shrink-0">{idGenerator(String(index + 1))}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{order.user.first_name} {order.user.last_name}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{order.user.address ? order.user.address : "Address not entered"}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{order.product.name}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{new Date(order.created_at).toString().slice(4, 15)}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator(order.status)}`}>
                                                    {t(order.status)}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    filterBy === "-1" && [...allOrders].slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((order: any, index) => (
                                        <tr className='p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={order.id}>
                                            <td className="w-28 sm:w-32 shrink-0">{idGenerator(String(index + 1))}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <Link to={`/panel/customers/info/${order.user.id}`} className="underline">
                                                    {order.user.first_name} {order.user.last_name}
                                                </Link>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{order.user.address ? order.user.address : "Address not entered"}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{order.product.name}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{new Date(order.created_at).toString().slice(4, 15)}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator(order.status)}`}>
                                                    {t(order.status)}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination page={page} numberOfItems={allOrders.length} shown={shown} updatedTime={updatedTime} changePage={changePage} />
                    </>
                }
            </div>
            {
                allOrders && !allOrders.length &&
                <EmptyEntity title={t("No Orders Yet")} type={"orders"} onSubmit={AddOrderModalHandler} button="Add Order">
                    <>
                        {t("All the upcoming orders from your store will be visible in this page.")} <br className="hidden sm:block" />
                        {t("You can add orders by yourself if you sell offline.")}
                    </>
                </EmptyEntity>
            }
        </div>
    )

}

export default Orders