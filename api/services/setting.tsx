import apiReq from "../CoreApi";

type PostSettingType = {
    pendingOrder?: boolean,
    outOfStockProduct?: boolean,
    emptyProductList?: boolean,
    taskNotDone?: boolean,
    numberDispaly?: number
}

type PostProfileSettingType = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    avatar: string
}

export const getAllSetting = async () => {
    return await apiReq({
        method: "GET",
        url: "/setting",
    })
        .then(res => res.data)
}

export const editSetting = async (settingInfo: PostSettingType) => {
    return await apiReq({
        method: "PUT",
        url: `/setting/`,
        data: settingInfo,
    })
        .then(res => res)
}

export const editProfileSetting = async (ProfileSettingInfo: PostProfileSettingType) => {
    return await apiReq({
        method: "PUT",
        url: `/setting/admin`,
        data: ProfileSettingInfo,
    })
        .then(res => res)
}