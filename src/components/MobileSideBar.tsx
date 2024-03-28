import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { SetStateAction, useEffect, Dispatch } from "react"
import { useLocation } from "react-router-dom"

type MobileSideBarProps = {
    isShowMobileSideBar: boolean,
    setIsShowMobileSideBar: Dispatch<SetStateAction<boolean>>
}

const MobileSideBar = ({ isShowMobileSideBar, setIsShowMobileSideBar }: MobileSideBarProps) => {

    const { t } = useTranslation()
    const location = useLocation()
    useEffect(() => {
        setIsShowMobileSideBar(false)
    }, [location.pathname])

    return (
        <>
            <div className={`md:hidden fixed h-screen w-full backdrop-blur-sm right-0 left-0 z-40 bg-black/10 transition-all ${isShowMobileSideBar ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setIsShowMobileSideBar(false)}></div>
            <div className={`fixed md:hidden h-full w-72 sm:w-80 left-0 bg-white shadow-sm z-50 flex flex-col gap-y-5 transition-all ${isShowMobileSideBar ? 'ltr:left-0 rtl:right-0' : "ltr:-left-72 ltr:sm:-left-80 rtl:-right-72 rtl:sm:-right-80"}`}>
                <div className="flex justify-between items-center p-4 pb-0">
                    <h1 className='text-lg lg:text-xl flex items-center font-nunitosans-extrabold cursor-default'>
                        <span className='text-primary-100'>Dash</span>
                        <span className='text-general-100'>Stack</span>
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer text-general-70" onClick={() => setIsShowMobileSideBar(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col gap-y-3 border-b pb-3">
                    <ul className='flex flex-col gap-y-1'>
                        <li className='relative' id="clickable">
                            <NavLink to={'/panel/dashboard'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <span className="">
                                        {t("dashboard")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/orders'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                    </svg>
                                    <span className="">
                                        {t("orders")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/products'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <span className="">
                                        {t("Products")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/categories'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                    </svg>
                                    <span className="">
                                        {t("Categories")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/customers'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <span className="">
                                        {t("Customers")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/coupons'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <span className="">
                                        {t("Coupons")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/inbox'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <span className="">
                                        {t("inbox")}
                                    </span>
                                </div>
                                <span className='absolute lg:static top-1 left-5 rtl:right-5 bg-red-101 lg:bg-general-100/40 text-white text-[10px] rounded-full h-4 pt-0.5 w-5 flex justify-center items-center font-iransans-semiBold'>
                                    16
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-3 border-b pb-3">
                    <span className="text-xs mx-6 text-general-60 rtl:font-iransans-semiBold">
                        {t("other information")}
                    </span>
                    <ul className='flex flex-col gap-y-1'>
                        <li className='relative'>
                            <NavLink to={'/panel/managers'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                    <span className="">
                                        {t("Managers")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to={'/panel/todolist'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                    <span className="">
                                        {t("To-Do List")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-3">
                    <span className="text-xs mx-6 text-general-60 rtl:font-iransans-semiBold">
                        {t("setting")}
                    </span>
                    <ul className='flex flex-col gap-y-1'>
                        <li className='relative'>
                            <NavLink to={'/panel/setting/'} className={({ isActive }) => {
                                return `h-10 lg:px-4 mx-4 rounded text-sm flex px-2 justify-between items-center rtl:font-iransans-semiBold transition-colors cursor-pointer ${isActive ? 'bg-primary-100 text-white before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:left-0 rtl:before:right-0 before:absolute' : 'text-general-80 hover:bg-primary-100 hover:text-white'}`
                            }}>
                                <div className="flex gap-x-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <span className="">
                                        {t("global settings")}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileSideBar