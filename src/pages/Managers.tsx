import { useTranslation } from "react-i18next"
import { useManagers } from "../hooks/api/useManagers"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { ManagerType } from "../types/api/Managers.types"
import ManagerCard from "../components/ManagerCard"

const Managers = () => {
    const { t } = useTranslation()
    const { data, isLoading } = useManagers()

    if (isLoading) return <Loading />
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("Managers")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="primary" size="small" link="/panel/customers/add">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Manager")}
                        </>
                    </Button>
                </div>
            </div>
            {
                !!data.length &&
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                    {
                        data.map((manager: ManagerType) => (
                            <ManagerCard {...manager} key={manager.id} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Managers