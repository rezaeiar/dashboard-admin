import apiReq from "../CoreApi";

type addCategoryType = {
    name: string,
}

export const addCategory = async (categoryInfo: addCategoryType) => {
    return await apiReq({
        method: "POST",
        url: "/category",
        data: categoryInfo,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res)
}
export const getAllCategories = async () => {
    return await apiReq({
        method: "GET",
        url: "/category",
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res.data)
}
export const getSingleCategory = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res.data)
}
export const deleteSingleCategory = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res)
}
export const changeCategoryInfo = async (id: string, name: string) => {
    return await apiReq({
        method: "PUT",
        url: `/category/${id}`,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        },
        data: { name }
    })
        .then(res => res)
}