import React, { useState } from "react"
import Button from "./Button"
import { useTranslation } from "react-i18next"
import { addCategory } from '../../api/services/category'
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query"
import SuccessModal from "./SuccessModal"

type CategoriesModalProps = {
    isShowCategoriesModal: boolean,
    setIsShowCategoriesModal: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}
const CategoriesModal = ({ isShowCategoriesModal, setIsShowCategoriesModal, refetch }: CategoriesModalProps) => {
    const { t } = useTranslation()
    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) {
            setIsShowCategoriesModal(false)
        }
    }
    const [categoryName, setCategoryName] = useState("")
    const addCategoryHandler = async () => {
        await addCategory({ name: categoryName })
            .then(res => {
                if (res.status === 201) {
                    setIsShowCategoriesModal(false)
                    refetch()
                    setIsShowSuccessModal(true)
                    setCategoryName("")
                } else {
                    alert("Not deleted")
                }
            })

    }
    const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)
    return (
        <>
            <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 ${isShowCategoriesModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
                <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                    <div className="flex justify-between items-center">
                        <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                            Add Category
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => setIsShowCategoriesModal(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Category Name")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Women Clothes")} value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                            {t("Add Products")}
                        </label>
                        <input type="text" className="border border-general-50 outline-none rounded text-xs lg:text-sm text-general-100 py-2 md:py-1.5 lg:py-2 px-4 md:px-2.5 lg:px-4 ltr:font-nunitosans-regular rtl:font-iransans-regular" placeholder={t("Choose a Product")} />
                    </div>
                    <div className="flex gap-x-6 items-center justify-end">
                        <a href="#" className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => setIsShowCategoriesModal(false)}>
                            Cancel
                        </a>
                        <Button size="small" type="primary" styles="" onSubmit={addCategoryHandler}>
                            <>
                                Create Category
                            </>
                        </Button>
                    </div>
                </div>
            </div>
            <SuccessModal isShowSuccessModal={isShowSuccessModal} setIsShowSuccessModal={setIsShowSuccessModal} />
        </>
    )
}

export default CategoriesModal