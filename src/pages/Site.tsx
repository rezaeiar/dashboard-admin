import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useGetTokenFromCookies } from "../hooks/modules/useToken";
import { useGetMe } from "../hooks/api/useGetMe";
import { useEffect } from "react"
import { useRemoveTokenFromCookies } from "../hooks/modules/useToken";
import Button from "../components/Button"

const Site = () => {

    const navigate = useNavigate()
    const { t } = useTranslation()
    const token = useGetTokenFromCookies()
    const { data } = useGetMe()

    useEffect(() => {
        if (data) {
            if (data.roles.includes("ADMIN")) {
                navigate("/panel/dashboard")
            }
        } else {
            if (!token) {
                navigate("/login")
            }
        }
    }, [data])

    const logOutHandler = () => {
        useRemoveTokenFromCookies()
        navigate("/login")
    }

    return (
        <div className="relative flex items-center justify-center font-nunitosans-bold h-screen bg-gradient-to-r from-green-30 to-green-40">
            <div className="flex flex-col md:flex-row gap-y-4 rounded-2xl h-auto md:h-72 md:w-[650px] bg-white backdrop-blur shadow-xl hover:shadow-2xl transition-all items-center justify-center p-4 md:p-0 mx-4">
                <div className="h-52 w-full md:w-52 bg-gradient-to-bl transition-all from-green-101 to-green-80 rounded-2xl md:-translate-x-20 rtl:md:translate-x-20 flex items-center justify-center text-5xl font-nunitosans-extrabold text-white">
                    200
                </div>
                <div className="flex flex-col gap-y-3 md:-translate-x-14 rtl:md:translate-x-14">
                    <span className="text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("a problem!")}
                    </span>
                    <h1 className="text-xl text-general-100 ltr:font-nunitosans-bold rtl:font-iransans-bold">
                        {t("You are not an admin!")}
                    </h1>
                    <p className="md:w-96 text-general-80 ltr:font-nunitosans-semiBold rtl:font-iransans-regular">
                        {t("Your login has been approved, but your role on this site is not admin; Please log out and enter as admin.")}
                    </p>
                    <Button size="small" type="secondary" styles="w-max" onSubmit={logOutHandler}>
                        <>
                            {t("Log out and go to the login page")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Site