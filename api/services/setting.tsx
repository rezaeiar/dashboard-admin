import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type PostSettingType = {
    pendingOrder?: boolean,
    outOfStockProduct?: boolean,
    emptyProductList?: boolean,
    taskNotDone?: boolean,
    numberDispaly?: number
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

// export const addProduct = async (productInfo: PostProductType) => {
//     return await apiReq({
//         method: "POST",
//         url: "/product",
//         data: productInfo,
//         headers: {
//             "Authorization": `Bearer ${cookies.get("token")}`
//         }
//     })
//         .then(res => res)
// }

// export const getSindleProduct = async (id: string) => {
//     return await apiReq({
//         method: "GET",
//         url: `/product/${id}`,
//         headers: {
//             "Authorization": `Bearer ${cookies.get("token")}`
//         }
//     })
//         .then(res => res.data)
// }



// export const deleteSingleProduct = async (id: string) => {
//     return await apiReq({
//         method: "DELETE",
//         url: `/product/${id}`,
//         headers: {
//             "Authorization": `Bearer ${cookies.get("token")}`
//         }
//     })
//         .then(res => res)
// }