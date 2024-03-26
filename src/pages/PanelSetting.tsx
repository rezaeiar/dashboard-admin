import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'
import { editSetting, getAllSetting } from '../../api/services/setting'
import { showSuccessModal } from '../store/slices/successModalSlice'
import { useDispatch } from 'react-redux'

const PanelSetting = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isSuccess, isLoading } = useQuery("setting", getAllSetting)

    const [numberDispaly, setNumberDispaly] = useState(10)

    useEffect(() => {
        if (isSuccess) {
            setNumberDispaly(data.numberDispaly)
        }
    }, [isSuccess])

    const saveSettingHandler = () => {
        const changeSetting = {
            numberDispaly
        }

        editSetting(changeSetting)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your settings have been applied successfully.") } }))
                }
            })
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
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
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
                            {t("General Settings")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Manage your main panel settings.")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("The number of display items in the lists")}
                            </label>
                            <input type="number" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="" value={numberDispaly} onChange={e => setNumberDispaly(+e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelSetting