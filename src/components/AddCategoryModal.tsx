import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useQuery } from "react-query"
import { showAddCategoryModal } from "../store/slices/AddCategoryModalSlice"
import { useState } from "react"
import { getAllCategories, addCategory } from '../../api/services/category'
import { showSuccessModal } from "../store/slices/successModalSlice"
import { showErrorModal } from "../store/slices/ErrorModalSlice"
import Button from "./Button"

type AddCategoryModalProps = {
    isShowCategoriesModal: boolean
}

const AddCategoryModal = ({ isShowCategoriesModal }: AddCategoryModalProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) dispatch(showAddCategoryModal({ visibility: false }))
    }

    const { refetch } = useQuery("categories", getAllCategories)
    const [categoryName, setCategoryName] = useState("")

    const addCategoryHandler = () => {
        addCategory({ name: categoryName })
            .then(res => {
                if (res.status === 201) {
                    dispatch(showAddCategoryModal({ visibility: false }))
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired category has been added.") } }))
                    refetch()
                } else {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired category could not be added, please try again.") } }))
                }
                setCategoryName("")
            })
    }

    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowCategoriesModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)} onKeyDown={e => e.keyCode === 13 && addCategoryHandler()}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        {t("Add Category")}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(showAddCategoryModal({ visibility: false }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Category Name")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("Women Clothes")} value={categoryName} onChange={e => setCategoryName(e.target.value)} />
                </div>
                <div className="flex gap-x-6 items-center justify-end">
                    <a href="#" className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => dispatch(showAddCategoryModal({ visibility: false }))}>
                        {t("Cancel")}
                    </a>
                    <Button size="small" type="primary" onSubmit={addCategoryHandler}>
                        <>
                            {t("Create Category")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddCategoryModal