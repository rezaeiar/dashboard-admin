import apiReq from "../CoreApi";
type singUpType = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string
}
type singInType = {
    username: string,
    password: string
}

export const singUp = (userInfo : singUpType) => {
    return apiReq({
        method: "POST",
        url: "/auth/signup",
        data: userInfo
    })
        .then(res => console.log(res)
        )
}
export const singIn = (userInfo : singInType) => {
    return apiReq({
        method: "POST",
        url: "/auth/signin",
        data: userInfo
    })
}