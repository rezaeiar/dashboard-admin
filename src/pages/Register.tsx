import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Button from "../components/Button"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);

    }

    const { t } = useTranslation()
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
                            {t("Email")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-100 py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Enter Email Address")} {...register("email", {
                            required: t("Email is required"), pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: t("invalid email address")
                            }
                        })} />
                        {errors.email && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.email.message}</span>}
                    </div>
                    <div className="flex flex-col w-auto sm:w-96 gap-y-1">
                        <label htmlFor="" className="text-xs sm:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Password")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-100 py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Create Password")} {...register("password", {
                            required: t("Password is required"), pattern: {
                                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                message: t("Password must be between 6 and 16 characters")
                            }
                        })} />
                        {errors.password && <span className="text-xs text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">{errors.password.message}</span>}
                    </div>
                    <input type="submit" className="capitalize bg-primary-100 text-white rounded font-nunitosans-regular rtl:font-iransans-regular h-min hover:bg-primary-80 active:bg-primary-90 disabled:bg-general-50 focus:bg-primary-100 transition-colors flex items-center gap-x-1 py-2 md:py-2 px-4 md:px-6 text-sm md:text-base justify-center cursor-pointer" value={t("Create Account")} />
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

export default Register