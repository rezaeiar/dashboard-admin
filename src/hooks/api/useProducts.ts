import { useMutation, useQuery, useQueryClient } from "react-query"
import { deleteSingleProduct, getAllProducts } from "../../../api/services/product"
import { useDispatch } from "react-redux"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { useTranslation } from "react-i18next"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"

const useProducts = () => {
    return useQuery("products", getAllProducts)
}

const useDeleteProduct = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleProduct(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired product has been successfully deleted.") } }))
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired Product could not be deleted, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

export { useProducts, useDeleteProduct }