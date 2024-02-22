import { useTranslation } from "react-i18next"
import Button from "./Button"

const ManagerCard = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-card group">
            <div className="relative">
                <img src="./images/a76b24c1fe0eb498ee5895e01e1557e7.png" className="w-full object-cover h-36 sm:h-48 md:h-56 lg:h-64" alt="" />
            </div>
            <div className="py-3 xl:py-5 px-5 xl:px-7 flex justify-between items-strat">
                <div className="flex flex-col">
                    <h3 className="text-general-100 text-xs lg:text-sm font-nunitosans-extrabold">
                        John Doe
                    </h3>
                    <span className="text-general-80 text-[10px] lg:text-xs font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Admin")}
                    </span>
                </div>
                <div className="flex gap-1">
                    <Button size="small" styles="!px-3" type="secondary">
                        <>
                            <span className="text-xs hidden md:block">
                                Message
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ManagerCard