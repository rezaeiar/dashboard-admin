import { useMutation } from "react-query"
import { ChangePasswordType } from "../../types/api/Password.types"
import { changePassword } from "../../../api/services/password"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { ShowChangePasswordModal } from "../../store/slices/ChangePasswordSlice"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"

const usePassword = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (passwordInfos: ChangePasswordType) => {
            return changePassword(passwordInfos)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(ShowChangePasswordModal({ visibility: false }))
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your desired password has been changed.") } }))
                    }
                })
                .catch((err) => {
                    dispatch(ShowChangePasswordModal({ visibility: false }))
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: err.response.data.message } }))
                })
        }
    })
}

export { usePassword }