import { useMutation, useQuery, useQueryClient } from "react-query"
import { addProduct, deleteSingleProduct, getAllProducts } from "../../../api/services/product"
import { useDispatch } from "react-redux"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { useTranslation } from "react-i18next"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { useNavigate } from "react-router-dom"
import { ProductType } from "../../types/api/Products.types"

const useProducts = () => {
    return useQuery("products", getAllProducts)
}

const useDeleteProduct = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleProduct(id + "f")
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired product has been successfully deleted.") } }))
                    }
                })
                .catch((err) => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

const usePostProduct = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (newProductInfo: ProductType) => {
            await addProduct(newProductInfo)
                .then(res => {
                    if (res.status === 201) {
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your product has been successfully added to the product list.") } }))
                        navigate("/panel/products")
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your product was not added to the product list, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })
}

export { useProducts, useDeleteProduct, usePostProduct }