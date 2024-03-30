import apiReq from "../CoreApi";

type addOrderType = {
    product_count: number,
    productId: string,
    email: string
}

export const addOrder = async (orderInfo: addOrderType) => {
    return await apiReq({
        method: "POST",
        url: "/order",
        data: orderInfo,
    })
        .then(res => res)
}
export const getAllOrders = async () => {
    return await apiReq({
        method: "GET",
        url: "/order",
    })
        .then(res => res.data)
}