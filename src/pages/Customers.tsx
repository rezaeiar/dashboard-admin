import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { getAllCustomers, deleteSingleCustomer } from "../../api/services/customer"
import { useState, useEffect } from "react"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../store/slices/successModalSlice"
import { showErrorModal } from "../store/slices/ErrorModalSlice"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import Pagination from "../components/Pagination"
import EmptyEntity from "../components/EmptyEntity"
import { getAllSetting } from "../../api/services/setting"

const Customers = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isLoading, refetch, dataUpdatedAt } = useQuery("customers", getAllCustomers)
    const { data: dataSetting, isSuccess: isSuccessSetting } = useQuery("setting", getAllSetting)

    const [allCustomers, setAllCustomers] = useState<null | { roles: String[], order_count: number, purchase_amount: number }[]>(null)

    const [selectedRole, setSelectedRole] = useState("-1")
    const [filterBy, setFilterBy] = useState("-1")
    const [serachedValue, setSearchedValue] = useState("")
    const [shown, setShown] = useState(10)
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (isSuccessSetting) setShown(dataSetting.numberDispaly)
    }, [isSuccessSetting, dataSetting])

    const changePage = (page: number) => setPage(page)
    let updatedTime = new Date(dataUpdatedAt);

    useEffect(() => {
        updatedTime = new Date(dataUpdatedAt);
    }, [dataUpdatedAt])

    useEffect(() => {
        if (data) setAllCustomers([...data])
        else setAllCustomers([])
    }, [data])

    useEffect(() => {
        setSearchedValue("")
        if (selectedRole !== "-1") {
            setAllCustomers(data)
            switch (selectedRole) {
                case "DEFAULT": {
                    const filteredData = data?.filter((customer: any) => customer.roles.includes("DEFAULT"))
                    setAllCustomers(filteredData ? filteredData : null)
                    break
                }
                case "ADMIN": {
                    const filteredData = data?.filter((customer: any) => customer.roles.includes("ADMIN"))
                    setAllCustomers(filteredData ? filteredData : null)
                }
            }
        } else {
            setAllCustomers(data)
        }
    }, [selectedRole, filterBy])

    const searchHandler = () => {
        const searchedData = data.filter((customer: any) => customer.email.includes(serachedValue) || customer.username.includes(serachedValue))
        setAllCustomers(searchedData ? searchedData : null)
    }

    const deleteCategoryHandler = (id: string) => {
        deleteSingleCustomer(id)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired client has been successfully deleted.") } }))
                    refetch()
                }
            })
            .catch((err) => {
                console.log(err);
                
                dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired client could not be deleted, please try again.") } }))
            })
    }

    const showDeleteConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete Customer"), description: t("By deleting the user, all his registered information on the site will be deleted. are you sure?") }, button: "Delete", handler: () => deleteCategoryHandler(id as string) }))
    }

    if (isLoading) return <Loading />

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100">
                    {t("Customers")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small">
                        <>
                            {t("Export")}
                        </>
                    </Button>
                    <Button type="primary" size="small" link="/panel/customers/add">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Customer")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-2 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                                <option value="-1">
                                    {t('Select Role')}
                                </option>
                                <option value="DEFAULT">{t('User')}</option>
                                <option value="ADMIN">{t('Admin')}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
                                <option value='-1'>
                                    {t('Filter by')}
                                </option>
                                <option value="ORDERS">{t("Number of orders")}</option>
                                <option value="SPENT">{t("spent")}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer" onClick={searchHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Search")} value={serachedValue} onChange={(e) => setSearchedValue(e.target.value)} />
                    </div>
                </div>
                {
                    allCustomers && !!allCustomers.length &&
                    <>
                        <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                            <thead>
                                <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-5 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 *:text-start min-w-max gap-x-2 capitalize'>
                                    <th className="w-36 sm:w-44">{t("customer")}</th>
                                    <th className="w-28 sm:w-32">{t("email")}</th>
                                    <th className="w-28 sm:w-32">{t("orders")}</th>
                                    <th className="w-28 sm:w-32">{t("spent")}</th>
                                    <th className="w-36 sm:w-44">{t("actions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterBy === "SPENT" && [...allCustomers]?.sort((a, b) => b.purchase_amount - a.purchase_amount).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((customer: any) => (
                                        <tr className='p-3 md:p-4 bg-white grid grid-cols-5 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={customer.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex items-center gap-x-3">
                                                    <div className="h-12 w-12 uppercase bg-general-60 rounded-full text-white flex items-center justify-center shrink-0">
                                                        {customer.first_name.slice(0, 1)}
                                                    </div>
                                                    <span className="line-clamp-1">
                                                        {customer.first_name} {customer.last_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {customer.email}
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{customer.order_count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">${customer.purchase_amount.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/customers/info/${customer.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(customer.id)}>
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
                                    filterBy === "ORDERS" && [...allCustomers]?.sort((a, b) => b.order_count - a.order_count).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((customer: any) => (
                                        <tr className='p-3 md:p-4 bg-white grid grid-cols-5 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={customer.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex items-center gap-x-3">
                                                    <div className="h-12 w-12 uppercase bg-general-60 rounded-full text-white flex items-center justify-center shrink-0">
                                                        {customer.first_name.slice(0, 1)}
                                                    </div>
                                                    <span className="line-clamp-1">
                                                        {customer.first_name} {customer.last_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {customer.email}
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{customer.order_count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">${customer.purchase_amount.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/customers/info/${customer.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(customer.id)}>
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
                                    filterBy === "-1" && [...allCustomers].slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((customer: any) => (
                                        <tr className='p-3 md:p-4 bg-white grid grid-cols-5 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={customer.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex items-center gap-x-3">
                                                    <div className="h-12 w-12 uppercase bg-general-60 rounded-full text-white flex items-center justify-center shrink-0">
                                                        {customer.first_name.slice(0, 1)}
                                                    </div>
                                                    <span className="line-clamp-1">
                                                        {customer.first_name} {customer.last_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {customer.email}
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{customer.order_count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">${customer.purchase_amount.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/customers/info/${customer.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(customer.id)}>
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
                        <Pagination page={page} numberOfItems={allCustomers.length} shown={shown} updatedTime={updatedTime} changePage={changePage} />
                    </>
                }
            </div>
            {
                allCustomers && !allCustomers.length &&
                <EmptyEntity title={t("Create First Customer")} type={"customers"} link="/panel/customers/add" button="Add Customer">
                    <>
                        {t("Organize all your items in stock by creating and adding them to categories.")} <br className="hidden sm:block" />
                        {t("Categories helps to find items faster for your customers.")}
                    </>
                </EmptyEntity>
            }
        </div>
    )
}

export default Customers