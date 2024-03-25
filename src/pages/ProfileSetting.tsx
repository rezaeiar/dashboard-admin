import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useQuery } from 'react-query'
import { getMe } from '../../api/services/auth'
import Loading from '../components/Loading'

const ProfileSetting = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const { data, isLoading, isSuccess } = useQuery("admin", () => getMe())

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        if (isSuccess) {
            setFirst_name(data.first_name)
            setLast_name(data.last_name)
            setEmail(data.email)
            setUsername(data.username)
        }
    }, [isSuccess])

    const saveSettingHandler = () => {
        const newProfileInfo = {
            first_name,
            last_name,
            email,
            username
        }
        console.log(newProfileInfo);
        
    }

    if (isLoading) return <Loading />

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
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
                        {t("global settings")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" onSubmit={() => navigate(0)}>
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="" onSubmit={saveSettingHandler}>
                        <>
                            {t("Save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col gap-y-5 xl:gap-y-7">
                <ul className="border-b flex gap-x-4 sm:gap-x-8 items-center *:text-general-80 ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold pb-1 sm:pb-2 overflow-x-auto overflow-y-hidden text-sm lg:text-base">
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/profile`}
                            className={'text-primary-100 border-b border-primary-100'}
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/notifications`}
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
                        >
                            Notifications
                        </NavLink>
                    </li>
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/general`}
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
                        >
                            Panel Settings
                        </NavLink>
                    </li>
                </ul>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-general-60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path>
                                </svg>
                                <span className="text-general-80 text-sm sm:text-[10px] xl:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    or drag and drop files
                                </span>
                            </div>
                        </label>
                        <input className="w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 hidden" id="small_size" type="file" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProfileSetting