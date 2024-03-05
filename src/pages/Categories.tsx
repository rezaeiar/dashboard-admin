import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showAddCategoryModal } from "../store/slices/AddCategoryModalSlice"
import { useQuery } from "react-query"
import { getAllCategories } from "../../api/services/category"
import Loading from "../components/Loading"
import Button from "../components/Button"
import EmptyEntity from "../components/EmptyEntity"
import CategorieCard from "../components/CategorieCard"

export type CatagoryType = {
    id: string,
    image: null,
    name: string,
    products: object[],
    visibale: boolean
}

const Categories = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isLoading } = useQuery("categories", getAllCategories)

    const AddCategoryModalHandler = () => {
        dispatch(showAddCategoryModal({ vissablity: true }))
    }

    if (isLoading) return <Loading />
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("categories")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="primary" size="small" onSubmit={() => dispatch(showAddCategoryModal({ vissablity: true }))}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Category")}
                        </>
                    </Button>
                </div>
            </div>
            {
                !data.length &&
                <EmptyEntity title={t("Create First Category")} type={"categories"} onSubmit={AddCategoryModalHandler} button="Add Category">
                    <>
                        {t("Organize all your items in stock by creating and adding them to categories.")} <br className="hidden sm:block" />
                        {t("Categories helps to find items faster for your customers.")}
                    </>
                </EmptyEntity>
            }
            {
                !!data.length &&
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                    {
                        data.map((category: CatagoryType) => (
                            <CategorieCard {...category} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Categories