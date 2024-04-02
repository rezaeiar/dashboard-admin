import { useQuery } from "react-query"
import { getUserTasks } from "../../../api/services/task"

const useTasks = () => {
    return useQuery("user-tasks", getUserTasks)
}

export { useTasks }