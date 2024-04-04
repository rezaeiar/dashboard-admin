import { useMutation, useQuery, useQueryClient } from "react-query"
import { changeCategoryInfo, deleteProductFromCategory, deleteSingleCategory, getAllCategories, getSingleCategory } from "../../../api/services/category"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { CategoryType } from "../../types/api/Categories.types"
import { useNavigate } from "react-router-dom"

const useCategories = () => {
    return useQuery("categories", getAllCategories)
}

const useSingeCategory = (id: string) => {
    return useQuery(["category", id], () => getSingleCategory(id))
}

const usePutCategory = (id: string) => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (categoryInfo: CategoryType) => {
            await changeCategoryInfo(id, categoryInfo)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your changes were made successfully.") } }))
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your changes were not applied, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["category", id] })
        }
    })
}

const useDeleteCategory = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleCategory(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired category has been successfully deleted.") } }))
                        navigate("/panel/categories")
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired category could not be deleted, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
        }
    })
}

const useDeleteProductFromCategory = (categoryId: string) => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (productId: string) => {
            await deleteProductFromCategory(categoryId, productId)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired product has been successfully removed from the category.") } }))
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired product was not removed from the category, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["category", categoryId] })
        }
    })
}

export { useCategories, useSingeCategory, usePutCategory, useDeleteCategory, useDeleteProductFromCategory }