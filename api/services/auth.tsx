import apiReq from "../CoreApi";
import { singUpType, singInType } from "../../src/types/Auth.types";

export const singUp = async (userInfo: singUpType) => {
    return await apiReq({
        method: "POST",
        url: "/auth/signup",
        data: userInfo
    })
        .then(res => res)
}
export const singIn = async (userInfo: singInType) => {
    return await apiReq({
        method: "POST",
        url: "/auth/signin",
        data: userInfo
    })
        .then(res => res)
}
export const getMe = async () => {
    return await apiReq({
        method: "GET",
        url: "/admin",
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res.data)
}