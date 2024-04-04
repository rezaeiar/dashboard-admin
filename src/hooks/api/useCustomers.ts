import { useMutation, useQuery, useQueryClient } from "react-query"
import { deleteSingleCustomer, getAllCustomers } from "../../../api/services/customer"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"

const useCustomers = () => {
    return useQuery("customers", getAllCustomers)
}

const useDeleteCustomer = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleCustomer(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired client has been successfully deleted.") } }))
                    }
                })
                .catch(() => {
                    dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your desired client could not be deleted, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customers"] })
        }
    })
}

export { useCustomers, useDeleteCustomer }