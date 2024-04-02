import { useTranslation } from "react-i18next"
import { changeLanguage } from "../utils/LanguageSelector"

const LanguageSelection = () => {

    const { t, i18n } = useTranslation()
    const changeLanguageHandler = changeLanguage()

    return (
        <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 flex transition-all flex-col w-max bg-white shadow-box rounded-xl absolute top-12 rtl:left-0 ltr:right-0 divide-y  border border-general-30 overflow-hidden capitalize`} >
            <div className="py-3 px-5">
                <span className='text-sm text-general-80 font-nunitosans-regular rtl:font-iransans-regular'>
                    {t('select language')}
                </span>
            </div>
            <div className="flex flex-col child-hover:bg-general-30">
                <div className="py-3 px-5 flex justify-between items-center gap-x-10 text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold hover:bg-general-30 cursor-pointer" onClick={() => changeLanguageHandler("fa")}>
                    <div className="flex items-center gap-x-2">
                        <img src="/topbar/Flag_of_Iran.svg.webp" className="h-6 lg:h-7 w-12 object-cover" alt="language" />
                        <span className="text-sm">
                            {t('persian')}
                        </span>
                    </div>
                    {
                        i18n.language === "fa" &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    }
                </div>
                <div className="py-3 px-5 flex justify-between items-center gap-x-10 text-general-90 font-nunitosans-semiBold rtl:font-iransans-semiBold hover:bg-general-30 cursor-pointer" onClick={() => changeLanguageHandler('en')}>
                    <div className="flex items-center gap-x-2">
                        <img src="/topbar/UK Flag.svg" className="h-6 lg:h-7 w-12 object-cover" alt="language" />
                        <span className="text-sm">
                            {t('english')}
                        </span>
                    </div>
                    {
                        i18n.language === "en" &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    }
                </div>
            </div>
        </div >
    )
}

export default LanguageSelection