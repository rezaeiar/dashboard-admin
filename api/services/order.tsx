import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addOrderType = {
    product_count: number,
    productId: string,
    userId: string
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