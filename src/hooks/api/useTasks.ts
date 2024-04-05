import { useMutation, useQuery, useQueryClient } from "react-query"
import { changeTaskComplated, deleteSingleTask, getAllTasks, getUserTasks } from "../../../api/services/task"
import { showConfirmModal } from "../../store/slices/ConfirmModalSlice"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { showErrorModal } from "../../store/slices/ErrorModalSlice"

const useTasks = () => {
    return useQuery("user-tasks", getUserTasks)
}

const useAllTasks = () => {
    return useQuery("tasks", getAllTasks)
}

const useChangeTaskComplated = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (changeTaskComplatedInfos: any) => {
            await changeTaskComplated(changeTaskComplatedInfos.id, !changeTaskComplatedInfos.isComplated)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["user-tasks"])
            queryClient.invalidateQueries(["tasks"])
        }
    })
}

const useDeleteTask = () => {

    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    return useMutation({
        mutationFn: async (id: string) => {
            return deleteSingleTask(id)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(showConfirmModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button: "Continue", handler: null }))
                    }
                })
                .catch((err) => {
                    dispatch(showErrorModal({ visibility: true, payload: { title: t("Operation failed"), description: t(err.response.data.message) } }))
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["user-tasks"])
            queryClient.invalidateQueries(["tasks"])
        }
    })
}

export { useTasks, useAllTasks, useChangeTaskComplated, useDeleteTask }