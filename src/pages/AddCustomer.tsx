import Button from "../components/Button"
import { useTranslation } from "react-i18next"

const AddCustomer = () => {
    const { t } = useTranslation()
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("back")}
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("add customer")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" styles="">
                        <>
                            {t("cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="">
                        <>
                            {t("save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-md p-5 xl:p-7 col-span-5 flex flex-col gap-y-6 xl:gap-y-8 divide-y">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Information")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Most important information about the customer")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("First Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Last Name")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Email Address")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Phone Number")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Address")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Shipping address information")}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Address")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Apartment")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("City")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Country")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Choose")} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                    {t("Postal Code")}
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Phone")}
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pt-4 xl:pt-6">
                    <div className="flex flex-col">
                        <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                            {t("Customer Notes")}
                        </h5>
                        <span className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Add notes about customer")}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                                {t("Notes")}
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 aspect-[10/2] px-4 py-2 resize-none" placeholder={t("Add notes about customer")}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer