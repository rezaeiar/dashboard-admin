import { useQuery } from "react-query"
import { getAllSetting } from "../../../api/services/setting"

const useSetting = () => {
    return useQuery("setting", getAllSetting)
}

export { useSetting }