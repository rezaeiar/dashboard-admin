import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { NotificationLengthType } from "../types/store/Store.types"
import { useGetMe } from "../hooks/api/useGetMe"
import { useState } from "react"
import MobileSideBar from "./MobileSideBar"
import { Link } from "react-router-dom"
import NotificationCard from "./NotificationCard"
import LanguageSelection from "./LanguageSelection"
import AdminCard from "./AdminCard"

const TopBar = () => {

    const { t, i18n } = useTranslation()
    const notificationsLength = useSelector((state: NotificationLengthType) => state.notificationLength)
    const { data, isLoading, isSuccess } = useGetMe()

    const [isShowMobileSideBar, setIsShowMobileSideBar] = useState(false)

    return (
        <>
            <MobileSideBar isShowMobileSideBar={isShowMobileSideBar} setIsShowMobileSideBar={setIsShowMobileSideBar} />
            <div className='sticky top-0 w-full h-14 md:h-16 bg-white shadow flex justify-between items-center px-4 z-30 select-none'>
                <Link to={'/panel/setting/profile'} className="block md:hidden text-general-70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
                <div className="flex gap-x-6 lg:gap-x-8 grow-0 md:grow">
                    <Link to='/panel/dashboard' className='text-lg lg:text-xl flex items-center font-nunitosans-extrabold'>
                        <span className='text-primary-100'>Dash</span>
                        <span className='text-general-100'>Stack</span>
                    </Link>
                    <div className="hidden md:flex items-center font-nunitosans-regular relative text-sm text-general-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" className='h-10 w-72 lg:w-96 rounded-full border border-white focus:border-general-40 transition-colors outline-none px-10 placeholder:text-general-70 capitalize font-nunitosans-regular rtl:font-iransans-regular' placeholder={t('Search')} />
                    </div>
                </div>
                <div className="flex gap-x-6 md:gap-x-8 items-center *:shrink-0 h-full capitalize">
                    <div className="relative group hidden md:flex">
                        <div className="h-10 hidden md:flex items-center cursor-pointer">
                            <div className="h-4 w-4 bg-primary-100 absolute rounded-full text-white text-[10px] flex items-center justify-center -right-1.5 top-1">
                                {notificationsLength.value}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-general-70">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </div>
                        <NotificationCard />
                    </div>
                    <div className="relative group hidden md:flex">
                        <div className="h-10 hidden md:flex gap-x-2 items-center cursor-pointer">
                            <div className="block rounded-md overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-general-70">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>
                            </div>
                            <span className='text-general-70 text-xs lg:text-sm font-nunitosans-semiBold rtl:font-iransans-semiBold'>
                                {
                                    i18n.language === "fa"
                                        ? t('persian')
                                        : t('english')
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-70 group-hover:rotate-180 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <LanguageSelection />
                    </div>
                    {
                        isLoading &&
                        <div className="animate-pulse relative h-10 hidden md:flex gap-x-2 lg:gap-x-3 items-center">
                            <div className="hidden md:flex rounded-full bg-general-40 h-8 w-8 lg:h-9 lg:w-9 overflow-hidden items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <h4 className='bg-general-40 text-xs lg:text-sm font-nunitosans-bold rtl:font-iransans-bold h-2 w-20 rounded'>
                                </h4>
                                <span className='hidden md:block bg-general-40 text-[10px] lg:text-xs font-nunitosans-semiBold rtl:font-iransans-semiBold h-1.5 w-10 rounded'>
                                </span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-40">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    }
                    {
                        isSuccess &&
                        <div className="relative group hidden md:flex">
                            <div className="h-10 hidden md:flex gap-x-2 lg:gap-x-3 items-center cursor-pointer">
                                <div className="hidden md:flex rounded-full bg-general-40 h-8 w-8 lg:h-9 lg:w-9 overflow-hidden items-center justify-center">
                                    {
                                        data.avatar ? (
                                            <img src={data.avatar} alt="admin" className="h-full object-cover" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-60">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        )
                                    }
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <h4 className='text-general-100 text-xs lg:text-sm font-nunitosans-bold rtl:font-iransans-bold'>
                                        {
                                            `${data.first_name} ${data.last_name}`
                                        }
                                    </h4>
                                    <span className='hidden md:block text-general-60 text-[10px] lg:text-xs font-nunitosans-semiBold rtl:font-iransans-semiBold'>
                                        {
                                            t(data.roles[0])
                                        }
                                    </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-70 group-hover:rotate-180 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <AdminCard />
                        </div>
                    }
                    <div className="block md:hidden text-general-70 cursor-pointer" onClick={() => setIsShowMobileSideBar(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar