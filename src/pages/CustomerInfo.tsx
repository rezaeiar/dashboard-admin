import { useParams, useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { getSingleCustomer, deleteSingleCustomer } from "../../api/services/customer"
import { useState, useEffect } from "react"
import { editCustomerInfo } from "../../api/services/customer"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../store/slices/successModalSlice"
import { showErrorModal } from "../store/slices/ErrorModalSlice"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { statusStyleGenerator } from "../utils/helpers"

const CustomerInfo = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { data, isLoading, isSuccess, refetch } = useQuery(['customer', params.id], () => getSingleCustomer(params.id as string))

    console.log(data);


    const [note, setNote] = useState('')

    useEffect(() => {
        if (isSuccess) setNote(data.note)
    }, [isSuccess])

    const deleteCategoryHandler = (id: string) => {
        deleteSingleCustomer(id)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ vissablity: true, payload: { title: t("Successful operation"), description: t("Your desired client has been successfully deleted.") } }))
                    navigate("/panel/customers")
                }
            })
            .catch(() => {
                dispatch(showErrorModal({ vissablity: true, payload: { title: t("Operation failed"), description: t("Your desired client could not be deleted, please try again.") } }))
            })
    }

    const changeCustomerInfoHandler = (id: string) => {

        const { first_name, last_name, roles, home_phone_number, phone_number, address, country, city, postal_code } = data
        const customerInfo = {
            first_name,
            last_name,
            roles,
            home_phone_number,
            phone_number,
            address,
            country,
            city,
            postal_code,
            note
        }

        editCustomerInfo(id, customerInfo)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showSuccessModal({ vissablity: true, payload: { title: t("Successful operation"), description: t("Your changes were made successfully.") } }))
                    refetch()
                }
            })
            .catch((err) => {
                console.log(err);

                dispatch(showErrorModal({ vissablity: true, payload: { title: t("Operation failed"), description: t("Your changes were not applied, please try again.") } }))
            })
    }

    const showDeleteConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ vissablity: true, payload: { title: t("Delete Customer"), description: t("By deleting the user, all his registered information on the site will be deleted. are you sure?") }, button: "Delete", handler: () => deleteCategoryHandler(id as string) }))
    }

    const showEditConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ vissablity: true, payload: { title: t("Change information"), description: t("You are changing the information of this customer, are you sure?") }, button: "Continue", handler: () => changeCustomerInfoHandler(id as string) }))
    }


    if (isLoading) return <Loading />

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => navigate(-1)}>
                            {t("Back")}
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("Customer Information")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" link="/panel/customers">
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" onSubmit={() => showEditConfirmModal(params.id as string)}>
                        <>
                            {t("Save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col md:grid gap-3 lg:gap-4 grid-cols-7">
                <div className="flex flex-col col-span-5 gap-y-3 lg:gap-y-4">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 xl:gap-y-6 divide-y">
                        <div className="flex justify-between">
                            <div className="flex gap-x-2 md:gap-x-5">
                                <div className={`h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-xl md:text-4xl rounded-full text-white flex items-center justify-center uppercase ${!!data.roles.includes("ADMIN") ? 'bg-yellow-101 shadow-md' : "bg-general-60"}`}>
                                    {data.first_name.slice(0, 1)}
                                </div>
                                <div className="flex flex-col gap-y-1 md:gap-y-2">
                                    <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold capitalize flex gap-x-1 items-center">
                                        {data.first_name} {data.last_name}
                                        {
                                            !!data.roles.includes("ADMIN") &&
                                            <span className="text-general-80 text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                                ({t("Admin")})
                                            </span>
                                        }
                                    </h5>
                                    <div className="flex flex-col">
                                        <span className="text-general-70 ltr:font-nunitosans-semiBold rtl:font-iransans-regular text-[10px] sm:text-xs">
                                            {data.country ? data.country : t("The country is not entered")}
                                        </span>
                                        <span className="text-general-70 ltr:font-nunitosans-semiBold rtl:font-iransans-regular text-[10px] sm:text-xs">
                                            5 {t("Order")}
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
                                    <textarea name="" id="" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular aspect-[10/2] resize-none" placeholder={t("Add notes about customer")} onChange={e => setNote(e.target.value)} value={note}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !!data.orders.length &&
                        <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 xl:gap-y-6">
                            <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                {t("Customer Orders")}
                            </h5>
                            <table className='divide-y bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                                <thead>
                                    <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-70 child:text-start min-w-max gap-x-2 *:text-start'>
                                        <th className="w-28 sm:w-32">{t("Order")}</th>
                                        <th className="w-28 sm:w-32">{t("Date")}</th>
                                        <th className="w-32 sm:w-36">{t("Order Status")}</th>
                                        <th className="w-28 sm:w-32">{t("Price")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.orders.map((order: any) => (
                                            <tr className='p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                                    #23534D
                                                </td>
                                                <td className="w-28 sm:w-32 shrink-0">
                                                    {order.created_at}
                                                </td>
                                                <td className="w-32 sm:w-36 shrink-0">
                                                    <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator(order.status)}`}>
                                                        {t(order.status)}
                                                    </button>
                                                </td>
                                                <td className="w-28 sm:w-32 shrink-0">
                                                    ${order.total_price.toLocaleString()}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4 divide-y">
                        <div className="flex flex-col gap-y-6">
                            <div className="flex justify-between items-center">
                                <h5 className="text-general-100 text-xs xl:text-sm ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                                    {t("Overview")}
                                </h5>
                                <Link to={`/panel/customers/edit/${params.id}`} className="text-primary-100 text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Edit")}
                                </Link>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Address")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {data.address ? data.address : t("Address not entered")}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Email Address")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {data.email}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {t("Phone")}
                                </h5>
                                <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                                    {data.phone_number ? data.phone_number : t("No phone number entered")}
                                </span>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <span className="text-red-101 text-xs lg:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => showDeleteConfirmModal(params.id as string)}>
                                {t("Delete Customer")}
                            </span>
                        </div>
                    </div>
                    {/* <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-4">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo