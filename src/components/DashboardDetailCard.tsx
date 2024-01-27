import { useTranslation } from "react-i18next"
type DashboardDetailCardProps = {
    title: string,
    value: number,
    status: {
        type: boolean,
        value: number
    }
    icon: string
}
const DashboardDetailCard = (props: DashboardDetailCardProps) => {
    const { t } = useTranslation()

    return (
        <div className="rounded-md shadow-md border-general-50 bg-white p-3 xl:p-4 flex flex-col gap-y-4 sm:gap-y-6 capitalize">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                    <h4 className="text-general-80 rtl:font-iransans-semiBold text-base lg:text-xs xl:text-base">
                        {props.title}
                    </h4>
                    <span className="text-general-100 text-xl font-nunitosans-extrabold rtl:font-iransans-extrabold">
                        {props.value.toLocaleString()}
                    </span>
                </div>
                <img src={`./icons/${props.icon}`} className="h-12 w-12 lg:h-10 lg:w-10 xl:h-12 xl:w-12" alt="icon" />
            </div>
            <div className="flex gap-x-1 lg:gap-x-0.5 xl:gap-x-1 text-xs items-center">
                {
                    props.status.type
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 lg:w-4 lg:h-4 text-green-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 lg:w-4 lg:h-4 text-red-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                }
                {
                    props.status.type ?
                        <div className="flex gap-x-1 rtl:font-iransans-semiBold text-sm lg:text-[10px] xl:text-sm">
                            <span className="text-green-101">
                                {props.status.value}%
                            </span>
                            {t("up from yesterday")}
                        </div> :
                        <div className="flex gap-x-1 rtl:font-iransans-semiBold text-sm lg:text-[10px] xl:text-sm">
                            <span className="text-red-101">
                                {props.status.value}%
                            </span>
                            {t("down from yesterday")}
                        </div>
                }
            </div>
        </div>
    )
}

export default DashboardDetailCard