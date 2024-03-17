import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addCouponType = {
    name: string,
    coupon_code: string,
    coupon_type: string,
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