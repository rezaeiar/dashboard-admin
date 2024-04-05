import { useMutation, useQuery, useQueryClient } from "react-query"
import { editSetting, getAllSetting } from "../../../api/services/setting"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showSuccessModal } from "../../store/slices/successModalSlice"
import { SettingType } from "../../types/api/Setting.types"

const useSetting = () => {
    return useQuery("setting", getAllSetting)
}

const usePutSetting = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (settingInfo: SettingType) => {
            await editSetting(settingInfo)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your settings have been applied successfully.") } }))
                    }
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["setting"] })
        }
    })
}

export { useSetting, usePutSetting }