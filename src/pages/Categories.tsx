import Button from "../components/Button"
import CategorieCard from "../components/CategorieCard"
import { useTranslation } from "react-i18next"
import CategoriesModal from "../components/CategoriesModal"
import { useState } from "react"
import { getAllCategories } from "../../api/services/category"
import { useQuery } from "react-query"
import EmptyEntity from "../components/EmptyEntity"
import Loading from "../components/Loading"

const Categories = () => {
    const { t } = useTranslation()
    const [isShowCategoriesModal, setIsShowCategoriesModal] = useState(false)

    const showCategoriesModalHandler = () => {
        setIsShowCategoriesModal(true)
    }
    const { data, isLoading, refetch } = useQuery("categories", getAllCategories)
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("categories")}
                    </h2>
                    <div className="flex gap-x-1 sm:gap-x-2">
                        <Button type="primary" size="small" styles="" onSubmit={() => showCategoriesModalHandler()}>
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                {t("add category")}
                            </>
                        </Button>
                    </div>
                </div>
                {
                    data && !data.length &&
                    <EmptyEntity />
                }
                {
                    data && !!data.length &&
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                        {
                            data.map((category: { id: string, name: string }) => (
                                <CategorieCard {...category} />
                            ))
                        }
                    </div>
                }
            </div>
            <CategoriesModal isShowCategoriesModal={isShowCategoriesModal} setIsShowCategoriesModal={setIsShowCategoriesModal} refetch={refetch} />
        </>
    )
}

export default Categories