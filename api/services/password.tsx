import apiReq from "../CoreApi";

type changePasswordType = {
    currentPassword: string,
    password: string
}

export const changePassword = async (passwordInfo: changePasswordType) => {
    return await apiReq({
        method: "PUT",
        url: "/admin/password",
        data: passwordInfo,
    })
        .then(res => res)
}