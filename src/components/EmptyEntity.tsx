import Button from "./Button"
import { useTranslation } from "react-i18next"

const EmptyEntity = () => {
    const { t } = useTranslation()

    return (
        <div className='bg-white h-full rounded shadow-box flex flex-col items-center justify-center gap-y-3 md:gap-y-5 px-4 sm:px-6 md:px-8'>
            <img src="/icons/illustration.svg" alt="" />
            <h3 className="ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100">
                No Orders Yet
            </h3>
            <span className="text-general-80 ltr:font-nunitosans-regular rtl:font-iransans-regular text-center text-sm md:text-base">
                All the upcoming orders from your store will be visible in this page. <br className="hidden sm:block" />
                You can add orders by yourself if you sell offline.
            </span>
            <Button type="primary" size="small" styles="">
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {t("add order")}
                </>
            </Button>
        </div>
    )
}

export default EmptyEntity