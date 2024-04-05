import { useMutation, useQuery, useQueryClient } from "react-query"
import { addCustomer, deleteSingleCustomer, editCustomerInfo, getAllCustomers, getSingleCustomer } from "../../../api/services/customer"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { useNavigate } from "react-router-dom"
import { CustomerPostType, CustomerType } from "../../types/api/Customers.types"
const useCustomers = () => {
    return useQuery("customers", getAllCustomers)
}

const useSingleCustomer = (id: string) => {
    return useQuery(["customer", id], () => getSingleCustomer(id))
}

const usePostCustomer = () => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (customerData: CustomerPostType) => {
            await addCustomer(customerData)
                .then(res => {
                    if (res.status === 201) {
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your customer has been successfully added to the customer list.") } }))
                        navigate("/panel/customers")
                    }
                })
                .catch(() => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your customer was not added to the customer list, please try again.") } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customers"] })
        }
    })
}

const usePutCustomer = (id: string) => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (customerData: CustomerType) => {
            await editCustomerInfo(id, customerData)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your changes were made successfully.") } }))
                    navigate("/panel/customers")
                }
            })
            .catch(() => {
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t("Your customer was not edited to the customer list, please try again.") } }))
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customers"] })
        }
    })
}

const useDeleteCustomer = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteSingleCustomer(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired client has been successfully deleted.") } }))
                        navigate('/panel/customers')
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

export { useCustomers, useSingleCustomer, usePostCustomer, usePutCustomer, useDeleteCustomer }