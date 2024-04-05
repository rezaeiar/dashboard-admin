import { useMutation, useQuery, useQueryClient } from "react-query"
import { getMe } from "../../../api/services/auth"
import { editProfileSetting } from "../../../api/services/setting"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { PutProfileType } from "../../types/api/Auth.types"

const useGetMe = () => {
    return useQuery("admin", () => getMe())
}

const usePutProfile = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (profileInfo: PutProfileType) => {
            await editProfileSetting(profileInfo)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your settings have been applied successfully.") } }))
                    }
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin"] })
        }
    })
}

export { useGetMe, usePutProfile }