import { useTranslation } from "react-i18next"
import { useNavigate, Link } from "react-router-dom";
import { useRemoveTokenFromCookies } from "../hooks/useToken";

const AdminCard = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const logOutHandler = () => {
        useRemoveTokenFromCookies()
        navigate("/login")
    }

    return (
        <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 admin-card flex transition-all flex-col min-w-48 bg-white shadow-box rounded-xl absolute top-12 rtl:left-0 ltr:right-0 divide-y child-hover:bg-general-30 border border-general-30 overflow-hidden capitalize *:cursor-pointer`}>
            <Link to={'/panel/setting/profile'} className="flex items-center gap-x-2 py-3 px-5 *:shrink-0 hover:bg-general-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('manage account')}
                </span>
            </Link>
            <div className="flex items-center gap-x-2 py-3 px-5 *:shrink-0 hover:bg-general-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path fillRule="evenodd" d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z" clipRule="evenodd" />
                </svg>

                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('change password')}
                </span>
            </div>
            <Link to='/panel/todolist' className="flex items-center gap-x-2 py-3 px-5 *:shrink-0 hover:bg-general-30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('manage tasks')}
                </span>
            </Link>
            <div className="flex items-center gap-x-2 py-3 px-5 *:shrink-0 hover:bg-general-30" onClick={logOutHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('log out')}
                </span>
            </div>
        </div >
    )
}

export default AdminCard