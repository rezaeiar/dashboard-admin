import { useQuery } from "react-query"
import { getAllOrders } from "../../../api/services/order"

const useOrders = () => {
    return useQuery("orders", getAllOrders)
}

export { useOrders }