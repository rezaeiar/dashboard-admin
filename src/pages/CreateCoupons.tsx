import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useTranslation } from "react-i18next"
import { ChangeEvent, useState } from "react"
import { usePostCoupon } from "../hooks/api/useCoupons"

const CreateCoupons = () => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [type, setType] = useState("")
    const [value, setValue] = useState("")
    const [duration, setDuration] = useState("")

    const { mutate: createCoupon } = usePostCoupon()
    const changeCouponType = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    }

    const addCouponHandler = () => {
        let date = new Date(new Date().getTime() + (86400000 * Number(duration)))
        const couponInfo = {
            name,
            code,
            type,
            value,
            duration: date
        }
        createCoupon(couponInfo)
    }

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => navigate(-1)}>
                            {t("Back")}
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("Create Coupon")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" link="/panel/coupons">
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" onSubmit={addCouponHandler}>
                        <>
                            {t("Save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-6 xl:gap-y-8 divide-y">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Coupon Information")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Code will be used by users in checkout")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Coupon Name")}
                            </label>
                            <input type="text" id="name" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="Free Shipping" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="code" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Coupon Code")}
                            </label>
                            <input type="text" id="code" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="Shipfree20" value={code} onChange={e => setCode(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Coupon Type")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Type of coupon you want to create")}
                        </span>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 lg:gap-6">
                        <li>
                            <input type="radio" onChange={event => changeCouponType(event)} id="type1" name="types" value="PRICE_DISCOUNT" className="hidden peer" />
                            <label htmlFor="type1" className="flex justify-center items-center flex-col py-3 sm:py-4 md:py-6 border sm:border-2 border-general-60 peer-checked:border-primary-100 peer-checked:bg-primary-100 hover:border-primary-100 rounded-lg gap-y-2 sm:gap-y-3 group cursor-pointer peer-checked:*:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-general-60 group-hover:text-primary-100 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <span className="text-general-60 group-hover:text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular transition-all text-xs sm:text-sm lg:text-base">
                                    {t("Fixed Discount")}
                                </span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" onChange={event => changeCouponType(event)} id="type2" name="types" value="PERCENTAGE_DISCOUNT" className="hidden peer" />
                            <label htmlFor="type2" className="flex justify-center items-center flex-col py-3 sm:py-4 md:py-6 border sm:border-2 border-general-60 peer-checked:border-primary-100 peer-checked:bg-primary-100 hover:border-primary-100 rounded-lg gap-y-2 sm:gap-y-3 group cursor-pointer peer-checked:*:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-60 group-hover:text-primary-100 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="text-general-60 group-hover:text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular transition-all text-xs sm:text-sm lg:text-base">
                                    {t("Percentage Discount")}
                                </span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" onChange={event => changeCouponType(event)} id="type3" name="types" value="FREE_SHIPPING" className="hidden peer" />
                            <label htmlFor="type3" className="flex justify-center items-center flex-col py-3 sm:py-4 md:py-6 border sm:border-2 border-general-60 peer-checked:border-primary-100 peer-checked:bg-primary-100 hover:border-primary-100 rounded-lg gap-y-2 sm:gap-y-3 group cursor-pointer peer-checked:*:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-60 group-hover:text-primary-100 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                                <span className="text-general-60 group-hover:text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular transition-all text-xs sm:text-sm lg:text-base">
                                    {t("Free Shipping")}
                                </span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" onChange={event => changeCouponType(event)} id="type4" name="types" value="PRICE_DISCOUNT" className="hidden peer" />
                            <label htmlFor="type4" className="flex justify-center items-center flex-col py-3 sm:py-4 md:py-6 border sm:border-2 border-general-60 peer-checked:border-primary-100 peer-checked:bg-primary-100 hover:border-primary-100 rounded-lg gap-y-2 sm:gap-y-3 group cursor-pointer peer-checked:*:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-60 group-hover:text-primary-100 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="text-general-60 group-hover:text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular transition-all text-xs sm:text-sm lg:text-base">
                                    {t("Price Discount")}
                                </span>
                            </label>
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="value" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Discount Value")}
                            </label>
                            <input type="text" id="value" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="30" value={value} onChange={e => setValue(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="duration" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Duration")}
                            </label>
                            <input type="text" id="duration" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder="30" value={duration} onChange={e => setDuration(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCoupons