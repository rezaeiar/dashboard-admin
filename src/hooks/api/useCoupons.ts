import { useMutation, useQuery, useQueryClient } from "react-query"
import { addCoupon, deleteSingleCoupon, getAllCoupons } from "../../../api/services/coupon"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { useNavigate } from "react-router-dom"
import { CouponType } from "../../types/api/Coupons.types"

const useCoupons = () => {
    return useQuery("coupons", getAllCoupons)
}

const usePostCoupon = () => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (couponInfo: CouponType) => {
            await addCoupon(couponInfo)
                .then(res => {
                    if (res.status === 201) {
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired coupon has been added.") } }))
                        navigate("/panel/coupons")
                    } else {
                        dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired coupon could not be added, please try again.") } }))
                    }
                })
                .catch((err) => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["coupons"] })
        }
    })
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

export { useCoupons, useDeleteCoupon, usePostCoupon }