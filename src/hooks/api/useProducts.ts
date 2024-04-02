import { useQuery } from "react-query"
import { getAllProducts } from "../../../api/services/product"

const useProducts = () => {
    return useQuery("products", getAllProducts)
}

export { useProducts }