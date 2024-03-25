import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const ProfileSetting = () => {

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("DEFAULT")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("iran")
    const [city, setCity] = useState("")
    const [home_phone_number, setHome_phone_number] = useState("")
    const [postal_code, setPostal_code] = useState("")
    const [note, setNote] = useState("")
    
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-y-5 xl:gap-y-7">
            <div className="flex flex-col">
                <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                    {t("Profile Details")}
                </h5>
                <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                    {t("Enter your profile information")}
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
                        {t("Email Address")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("User Name")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                    {t("First Name")}
                </label>
                <label className="border cursor-pointer border-dashed bg-general-30/40 hover:bg-general-30/80 transition-all border-general-60 rounded-md flex items-center justify-center aspect-square sm:aspect-[6/2]" htmlFor="small_size">
                    <div className="flex items-center justify-center flex-col gap-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-general-60">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path>
                        </svg>
                        <span className="text-general-80 text-sm sm:text-[10px] xl:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            or drag and drop files
                        </span>
                    </div>
                </label>
                <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" />
            </div>
        </div>
    )
}

export default ProfileSetting