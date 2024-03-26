import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

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
}

const cookies = new Cookies()

export const getAllSetting = async () => {
    return await apiReq({
        method: "GET",
        url: "/setting",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}

export const editSetting = async (settingInfo: PostSettingType) => {
    return await apiReq({
        method: "PUT",
        url: `/setting/`,
        data: settingInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}

export const editProfileSetting = async (ProfileSettingInfo: PostProfileSettingType) => {
    return await apiReq({
        method: "PUT",
        url: `/setting/admin`,
        data: ProfileSettingInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}