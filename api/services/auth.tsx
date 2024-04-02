import apiReq from "../CoreApi";
import {LoginInputs, RegisterInputs} from '../../src/types/auth/Auth.types'

export const singUp = async (userInfo: RegisterInputs) => {
    return await apiReq({
        method: "POST",
        url: "/auth/signup",
        data: userInfo,
    })
        .then(res => res)
}
export const singIn = async (userInfo: LoginInputs) => {
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
    })
        .then(res => res.data)
}