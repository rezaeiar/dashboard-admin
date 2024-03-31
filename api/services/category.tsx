import apiReq from "../CoreApi";

type addCategoryType = {
    name: string,
}

export const addCategory = async (categoryInfo: addCategoryType) => {
    return await apiReq({
        method: "POST",
        url: "/category",
        data: categoryInfo,
    })
        .then(res => res)
}
export const getAllCategories = async () => {
    return await apiReq({
        method: "GET",
        url: "/category",
    })
        .then(res => res.data)
}
export const getSingleCategory = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/category/${id}`,
    })
        .then(res => res.data)
}
export const deleteSingleCategory = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/category/${id}`,
    })
        .then(res => res)
}
export const changeCategoryInfo = async (id: string, categoryInfo: { image?: string, name: string }) => {
    return await apiReq({
        method: "PUT",
        url: `/category/${id}`,
        data: categoryInfo
    })
        .then(res => res)
}
export const deleteProductFromCategory = async (id: string, productId: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/category/${id}/removeProduct`,
        data: { productId }
    })
        .then(res => res)
}