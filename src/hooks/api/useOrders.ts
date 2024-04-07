import { useMutation, useQuery, useQueryClient } from "react-query"
import { addOrder, changeOrderStatus, getAllOrders } from "../../../api/services/order"
import { showAddOrderModal } from "../../store/slices/AddOrderModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showChangeOrderStatusModal } from "../../store/slices/ChangeOrderStatusSlice"

const useOrders = () => {
    return useQuery("orders", getAllOrders)
}

const usePostOrder = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (orderInfo: { productId: string, email: string, product_count: number }) => {
            await addOrder(orderInfo)
                .then(res => {
                    if (res.status === 201) {
                        dispatch(showAddOrderModal({ visibility: false }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired order has been added.") } }))
                    }
                })
                .catch((err) => {
                    dispatch(showAddOrderModal({ visibility: false }))
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        }
    })
}

const usePutOrder = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (orderInfo: { orderId: string, orderStatus: string }) => {
            await changeOrderStatus(orderInfo.orderId, orderInfo.orderStatus)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(showChangeOrderStatusModal({ visibility: false }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired category has been added.") } }))
                    }
                })
                .catch((err) => {
                    dispatch(showChangeOrderStatusModal({ visibility: false }))
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        }
    })
}

export { useOrders, usePostOrder, usePutOrder }