import { useParams, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { useSingleCustomer, usePutCustomer } from "../hooks/api/useCustomers"
import Loading from "../components/Loading"
import Button from "../components/Button"

const EditCustomer = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [username, setUsername] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [role, setRole] = useState("DEFAULT")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("iran")
    const [city, setCity] = useState("")
    const [home_phone_number, setHome_phone_number] = useState("")
    const [postal_code, setPostal_code] = useState("")
    const [note, setNote] = useState("")

    const { data, isLoading, isSuccess } = useSingleCustomer(params.id as string)
    const { mutate: editCustomer } = usePutCustomer(params.id as string)

    useEffect(() => {
        if (isSuccess) {
            setFirst_name(data.first_name)
            setLast_name(data.last_name)
            setUsername(data.username)
            setPhone_number(data.phone_number)
            setAddress(data.address)
            setCountry(data.country ? data.country : "iran")
            setCity(data.city)
            setHome_phone_number(data.home_phone_number)
            setPostal_code(data.postal_code)
            setNote(data.note)
            if (data.roles.includes("ADMIN")) {
                setRole("ADMIN")
            } else {
                setRole("DEFAULT")
            }
        }
    }, [isSuccess])

    const saveUser = () => {
        const newCustomerInfo =
        {
            first_name,
            last_name,
            username,
            phone_number,
            roles: [role],
            address,
            country,
            city,
            home_phone_number,
            postal_code, note
        }
        editCustomer(newCustomerInfo)
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
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100">
                        {t("Edit Customer Information")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" link="/panel/customers">
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="" onSubmit={() => saveUser()}>
                        <>
                            {t("Save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-6 xl:gap-y-8 divide-y">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Information")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Most important information about the customer")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("First Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={first_name} onChange={e => setFirst_name(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Last Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={last_name} onChange={e => setLast_name(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("User Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Phone Number")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={phone_number} onChange={e => setPhone_number(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Role")}
                            </label>
                            <select className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-70 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular appearance-none" value={role} onChange={e => setRole(e.target.value)}>
                                <option value='DEFAULT'>
                                    {t("User")}
                                </option>
                                <option value='ADMIN'>
                                    {t("Admin")}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Address")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Shipping address information")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Address")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={address} onChange={e => setAddress(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Country")}
                            </label>
                            <select className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-70 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular appearance-none" value={country} onChange={e => setCountry(e.target.value)}>
                                <option value='iran'>
                                    {t("Iran")}
                                </option>
                                <option value='germany'>
                                    {t("Germany")}
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("City")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={city} onChange={e => setCity(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Phone")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={""} value={home_phone_number} onChange={e => setHome_phone_number(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Postal Code")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={postal_code} onChange={e => setPostal_code(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Notes")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Add notes about customer")}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Notes")}
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular aspect-[10/2] resize-none" placeholder={t("Add notes about customer")} value={note} onChange={e => setNote(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCustomer