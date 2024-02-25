import apiReq from "../CoreApi";

export const singUp = (userInfo) => {
    return apiReq({
        method: "post",
        url: "/auth/signup",
        data: userInfo
    })
        .then(res => console.log(res)
        )
}