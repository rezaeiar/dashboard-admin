import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addCouponType = {
    name: string,
    code: string,
    type: string,
    value: string,
    duration: Date
}

const cookies = new Cookies()

export const addCoupon = async (couponInfo: addCouponType) => {
    return await apiReq({
        method: "POST",
        url: "/coupon",
        data: couponInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}

export const getAllCoupons = async () => {
    return await apiReq({
        method: "GET",
        url: "/coupon",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}

export const deleteSingleCoupon = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/coupon/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}