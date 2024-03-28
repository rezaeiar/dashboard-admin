import { useTranslation } from "react-i18next"
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";

type AdminCardProps = {
    show: boolean,
}
const AdminCard = (props: AdminCardProps) => {

    const cookies = new Cookies()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const logOutHandler = () => {
        cookies.remove("token", { path: '/', expires: new Date(Date.now() + 86400000) })
        navigate("/login")
    }
    return (
        <div className={`${props.show ? 'visible opacity-100' : 'invisible opacity-0'} admin-card flex transition-all flex-col min-w-48 bg-white shadow-box rounded-xl absolute top-12 rtl:left-0 ltr:right-0 divide-y child-hover:bg-general-30 border border-general-30 overflow-hidden capitalize`}>
            <Link to={'/panel/setting/profile'} className="flex items-center gap-x-2 py-3 px-5 *:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('manage account')}
                </span>
            </Link>
            <div className="flex items-center gap-x-2 py-3 px-5 *:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path fillRule="evenodd" d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z" clipRule="evenodd" />
                </svg>

                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('change password')}
                </span>
            </div>
            <div className="flex items-center gap-x-2 py-3 px-5 *:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-90">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
                </svg>

                <span className="text-sm text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold">
                    {t('activity log')}
                </span>
            </div>
            <div className="flex items-center gap-x-2 py-3 px-5 *:shrink-0" onClick={logOutHandler}>
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