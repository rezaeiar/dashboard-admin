import { useTranslation } from "react-i18next"
import Button from "../components/Button"

const NotFound = () => {

    const { t } = useTranslation()
    return (
        <div className="relative flex items-center justify-center font-nunitosans-bold h-screen bg-gradient-to-r from-red-30 to-red-40">
            <div className="flex flex-col md:flex-row gap-y-4 rounded-2xl h-auto md:h-72 md:w-[650px] bg-white backdrop-blur shadow-xl hover:shadow-2xl transition-all items-center justify-center p-4 md:p-0 mx-4">
                <div className="h-52 w-full md:w-52 bg-gradient-to-bl transition-all from-red-101 to-red-80 rounded-2xl md:-translate-x-20 rtl:md:translate-x-20 flex items-center justify-center text-5xl font-nunitosans-extrabold text-white">
                    404
                </div>
                <div className="flex flex-col gap-y-3 md:-translate-x-14 rtl:md:translate-x-14">
                    <span className="text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("a problem!")}
                    </span>
                    <h1 className="text-xl text-general-100 ltr:font-nunitosans-bold rtl:font-iransans-bold">
                        {t("This page was not found.")}
                    </h1>
                    <p className="md:w-96 text-general-80 ltr:font-nunitosans-semiBold rtl:font-iransans-regular">
                        {t("This page was not found, please return to the main page or contact support to report a problem.")}
                    </p>
                    <Button size="small" type="destructive-secondary" styles="w-max" link="/panel">
                        <>
                            {t("Back to Panel")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFound