import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addCategoryType = {
    name: string,
}

const cookies = new Cookies()

export const addCategory = async (categoryInfo: addCategoryType) => {
    return await apiReq({
        method: "POST",
        url: "/category",
        data: categoryInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const getAllCategories = async () => {
    return await apiReq({
        method: "GET",
        url: "/category",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}
export const getSingleCategory = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}
export const deleteSingleCategory = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const changeCategoryInfo = async (id: string, name: string) => {
    return await apiReq({
        method: "PUT",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        },
        data: { name }
    })
        .then(res => res)
}
export const deleteProductFromCategory = async (id: string, productId: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/category/${id}/removeProduct`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        },
        data: {productId}
    })
        .then(res => res)
}