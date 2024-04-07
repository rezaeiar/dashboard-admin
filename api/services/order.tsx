import apiReq from "../CoreApi";
import { OrderPostType } from "../../src/types/api/Orders.types";

export const addOrder = async (orderInfo: OrderPostType) => {
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

export const changeOrderStatus = async (id: string, status: string) => {
    return await apiReq({
        method: "PUT",
        url: `/order/${id}/status`,
        data: { status },
    })
        .then(res => res)
}