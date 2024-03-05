import { useToken } from "../hooks/useToken"
import { useNavigate, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { singUp } from '../../api/services/auth'
import Button from "../components/Button"

type Inputs = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string
}

const Register = () => {
    const token = useToken()
    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => {
        if (token) navigate("/")
    }, [])

    const [isConfirming, setIsConfirming] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await singUp(data)
            .then(res => res)
        setIsConfirming(true)
    }

    if (!isConfirming) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-general-30 py-0 sm:py-12 md:py-20">
                <form className="flex flex-col justify-center items-center py-12 px-6 sm:px-16 bg-white rounded gap-y-10 h-screen w-full sm:w-auto sm:h-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-xl">
                            {t("Create an Account")}
                        </h3>
                        <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular flex gap-1 text-sm justify-center">
                            <span className="text-general-90">
                                {t("Have an Account?")}
                            </span>
                            <Link to={'/login'} className="text-primary-100">
                                {t("Sign In")}
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-3 sm:gap-y-5 w-full sm:w-auto">
                        <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                            <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("First Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter First Name")} {...register("first_name", {
                                required: t("First Name is required")
                            })} />
                            {errors.first_name && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.first_name.message}</span>}
                        </div>
                        <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                            <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Last Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Last Name")} {...register("last_name", {
                                required: t("Last Name is required")
                            })} />
                            {errors.last_name && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.last_name.message}</span>}
                        </div>
                        <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                            <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Email")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Email Address")} {...register("email", {
                                required: t("Email is required"), pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: t("invalid email address")
                                }
                            })} />
                            {errors.email && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.email.message}</span>}
                        </div>
                        <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                            <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("User Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Username")} {...register("username", {
                                required: t("Username is required")
                            })} />
                            {errors.username && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.username.message}</span>}
                        </div>
                        <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                            <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Password")}
                            </label>
                            <input type="password" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Password")} {...register("password", {
                                required: t("Password is required"), pattern: {
                                    value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                    message: t("The password must be between 6 and 16 and contain English characters.")
                                }
                            })} />
                            {errors.password && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.password.message}</span>}
                        </div>
                        <Button size="medium" type="primary" styles="justify-center" submit>
                            <>
                                {t("Create Account")}
                            </>
                        </Button>
                        <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs flex flex-col gap-y-1 items-center">
                            <span className="text-general-70">
                                {t("By creating account, you agree to our")}
                            </span>
                            <span className="text-primary-100">
                                {t("Terms of Service")}
                            </span>
                        </div>
                        <span className="bg-general-50 h-px"></span>
                        <span className="text-general-60 text-xs flex justify-center">
                            {t("Or create an account using:")}
                        </span>
                        <div className="flex flex-col gap-y-3">
                            <Button size="medium" type="white" styles="justify-center">
                                <>
                                    <img src="/icons/google.svg" alt="" />
                                    <span className="text-primary-100">
                                        {t("Continue With Google")}
                                    </span>
                                </>
                            </Button>
                            <Button size="medium" type="white" styles="justify-center">
                                <>
                                    <img src="/icons/facebook.svg" alt="" />
                                    <span className="text-primary-100">
                                        {t("Continue with Facebook")}
                                    </span>
                                </>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-general-30 py-0 sm:py-12 md:py-20">
            <form className="flex flex-col justify-center items-center py-12 px-6 sm:px-16 bg-white rounded gap-y-10 h-screen w-full sm:w-auto sm:h-auto">
                <div className="flex flex-col gap-y-2">
                    <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-xl flex justify-center">
                        {t("Confirm Email")}
                    </h3>
                    <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular flex gap-1 text-sm justify-center">
                        <span className="text-general-90">
                            {t("Check Your Email and Enter Confirmation Code")}
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-3 sm:gap-y-5 w-full sm:w-auto">
                    <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                        <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Confirmation Code")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Confirmation Code")} value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} />
                    </div>
                    <Button size="medium" type="primary" styles="justify-center">
                        <>
                            {t("Confirm Email")}
                        </>
                    </Button>
                    <span className="bg-general-50 h-px"></span>
                    <span className="text-general-60 text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular flex justify-center">
                        {t("Haven't received your code?")}
                    </span>
                    <div className="flex flex-col gap-y-3">
                        <Button size="medium" type="white" styles="justify-center">
                            <>
                                {t("Resend Code")}
                            </>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default Register