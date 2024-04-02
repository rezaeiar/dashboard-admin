import { useQuery } from "react-query"
import { getMe } from "../../../api/services/auth"

const useGetMe = () => {
    return useQuery("admin", () => getMe())
}

export { useGetMe }