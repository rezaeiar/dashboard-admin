import { useGetTokenFromCookies } from '../hooks/modules/useToken';
import { useNavigate, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { useLogin } from '../hooks/api/useLogin';
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginInputs } from '../types/api/Auth.types';
import Button from "../components/Button"

const Login =  () => {

    const token = useGetTokenFromCookies()
    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => token && navigate("/panel"), [])

    const { mutate: LoginHandler } = useLogin()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>()
    const onSubmit: SubmitHandler<LoginInputs> = (data) => LoginHandler(data)

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-general-30 py-0 sm:py-12 md:py-20">
            <form className="flex flex-col justify-center items-center py-12 px-6 sm:px-16 bg-white rounded gap-y-10 h-screen w-full sm:w-auto sm:h-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-2">
                    <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-xl text-center">
                        {t("Sign In")}
                    </h3>
                    <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular flex gap-1 text-sm justify-center">
                        <span className="text-general-90">
                            {t("New to Our Product?")}
                        </span>
                        <Link to={'/register'} className="text-primary-100">
                            {t("Create an Account")}
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-3 sm:gap-y-5 w-full sm:w-auto">
                    <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                        <label htmlFor="identifire" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Username Or Email")}
                        </label>
                        <input type="text" value={'admin'} id='identifire' className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Username or Email")} {...register("usernameOrEmail", {
                            required: t("Username or Email is required")
                        })} />
                        {errors.usernameOrEmail && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.usernameOrEmail.message}</span>}
                    </div>
                    <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                        <label htmlFor="password" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Password")}
                        </label>
                        <input type="password" value={'admin'} id='password' className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Enter Password")} {...register("password", {
                            required: t("Password is required"), pattern: {
                                value: /^[a-zA-Z0-9!@#$%^&*]{5,16}$/,
                                message: t("The password must be between 6 and 16 and contain English characters.")
                            }
                        })} />
                        {errors.password && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.password.message}</span>}
                    </div>
                    <Button size="medium" type="primary" styles="justify-center" submit>
                        <>
                            {t("Login to account")}
                        </>
                    </Button>
                    <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs flex flex-col gap-y-1 items-center">
                        <Link to='' className="text-primary-100">
                            {t("Forgot your password?")}
                        </Link>
                    </div>
                    <span className="bg-general-50 h-px"></span>
                    <span className="text-general-60 text-xs flex justify-center">
                        {t("Or sign in using:")}
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

export default Login