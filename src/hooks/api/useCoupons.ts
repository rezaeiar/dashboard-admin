import { useMutation, useQuery, useQueryClient } from "react-query"
import { deleteSingleCoupon, getAllCoupons } from "../../../api/services/coupon"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"

const useCoupons = () => {
    return useQuery("coupons", getAllCoupons)
}

const useDeleteCoupon = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleCoupon(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired coupon has been successfully deleted.") } }))
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired coupon could not be deleted, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["coupons"] })
        }
    })
}

export { useCoupons, useDeleteCoupon }