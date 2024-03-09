import { useTranslation } from "react-i18next"
const Loading = () => {

    const { t } = useTranslation()

    return (
        <div className="bg-general-80/50 backdrop-blur-sm z-50 h-full rounded shadow-box flex flex-col items-center justify-center w-full fixed top-0 left-0">
            <h3 className="text-5xl text-general-100 ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                {t("Loading..")}
            </h3>
            <div className="rounded-md h-20 w-20 border-4 border-secondary-100 animate-spin absolute"></div>
        </div>
    )
}

export default Loading