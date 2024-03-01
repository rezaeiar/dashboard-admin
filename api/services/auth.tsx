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

export const singUp = (userInfo: singUpType) => {
    return apiReq({
        method: "POST",
        url: "/auth/signup",
        data: userInfo
    })
        .then(res => console.log(res)
        )
}
export const singIn = (userInfo: singInType) => {
    return apiReq({
        method: "POST",
        url: "/auth/signin",
        data: userInfo
    })
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