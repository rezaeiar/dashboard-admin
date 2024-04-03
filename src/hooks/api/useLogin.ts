import { useMutation } from "react-query"
import { LoginInputs } from "../../types/api/Auth.types"
import { singIn } from "../../../api/services/auth"
import { useSaveTokenInCookies } from "../modules/useToken"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"
import { useTranslation } from "react-i18next"

const useLogin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    return useMutation(async (data: LoginInputs) => {
        return singIn(data)
            .then(res => {
                if (res.status === 201) {
                    useSaveTokenInCookies(res.data.token)
            navigate("/panel/dashboard")

                }
            })
            .catch((err) => {
                dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
            })
    })
}

export { useLogin }