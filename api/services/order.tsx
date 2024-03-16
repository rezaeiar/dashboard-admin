import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addOrderType = {
    product_count: number,
    productId: string,
    email: string
}

const cookies = new Cookies()

export const addOrder = async (orderInfo: addOrderType) => {
    return await apiReq({
        method: "POST",
        url: "/order",
        data: orderInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const getAllOrders = async () => {
    return await apiReq({
        method: "GET",
        url: "/order",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}