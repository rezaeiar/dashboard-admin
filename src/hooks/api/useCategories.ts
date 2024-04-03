import { useQuery } from "react-query"
import { getAllCategories } from "../../../api/services/category"

const useCategories = () => {
    return useQuery("categories", getAllCategories)
}

export { useCategories }