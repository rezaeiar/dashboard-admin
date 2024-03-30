import apiReq from "../CoreApi";

type addCouponType = {
    name: string,
    code: string,
    type: string,
    value: string,
    duration: Date
}

export const addCoupon = async (couponInfo: addCouponType) => {
    return await apiReq({
        method: "POST",
        url: "/coupon",
        data: couponInfo,
    })
        .then(res => res)
}

export const getAllCoupons = async () => {
    return await apiReq({
        method: "GET",
        url: "/coupon",
    })
        .then(res => res.data)
}

export const deleteSingleCoupon = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/coupon/${id}`,
    })
        .then(res => res)
}