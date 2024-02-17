import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Button from "../components/Button"

const Login = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-general-30 py-20">
            <div className="flex flex-col items-center py-12 px-16 bg-white rounded gap-y-10">
                <div className="flex flex-col gap-y-2">
                    <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-xl flex justify-center">
                        Sign In
                    </h3>
                    <div className="ltr:font-nunitosans-regular rtl:font-iransans-regular flex gap-1 text-sm">
                        <span className="text-general-90">
                            New to Our Product?
                        </span>
                        <Link to={'/register'} className="text-primary-100">
                            Create an Account
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-3 sm:gap-y-6">
                    <div className="flex flex-col w-96">
                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Email")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="Enter Email Address" />
                    </div>
                    <div className="flex flex-col w-96">
                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Password")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="Create Password" />
                    </div>
                    <Button size="medium" type="primary" styles="justify-center">
                        <>
                            Create
                        </>
                    </Button>
                    <div className="font-nunitosans-regular text-xs flex flex-col gap-y-1 items-center">
                        <span className="text-primary-100">
                            Forgot your password?
                        </span>
                    </div>
                    <span className="bg-general-50 h-px"></span>
                    <span className="text-general-60 text-xs flex justify-center">
                        Or sign in using:
                    </span>
                    <div className="flex flex-col gap-y-3">
                        <Button size="medium" type="white" styles="justify-center">
                            <>
                                <img src="/icons/google.svg" alt="" />
                                <span className="text-primary-100">
                                    Continue with Google
                                </span>
                            </>
                        </Button>
                        <Button size="medium" type="white" styles="justify-center">
                            <>
                                <img src="/icons/facebook.svg" alt="" />
                                <span className="text-primary-100">
                                    Continue with Facebook
                                </span>
                            </>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login