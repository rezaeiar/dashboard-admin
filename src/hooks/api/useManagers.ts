import { getAllManagers } from "../../../api/services/manager"
import { useQuery } from "react-query"

const useManagers = () => {
    return useQuery("managers", getAllManagers)
}

export { useManagers }