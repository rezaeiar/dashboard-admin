import apiReq from "../CoreApi";

type PostProductType = {
    name: string,
    description: string,
    count: number,
    price: number,
    tags: string[],
    country: string,
    weight: string,
    isDigital: boolean,
    categoryId: string
}

export const addProduct = async (productInfo: PostProductType) => {
    return await apiReq({
        method: "POST",
        url: "/product",
        data: productInfo,
    })
        .then(res => res)
}

export const getAllProducts = async () => {
    return await apiReq({
        method: "GET",
        url: "/product",
    })
        .then(res => res.data)
}

export const getSindleProduct = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/product/${id}`,
    })
        .then(res => res.data)
}

export const editProduct = async (id: string, productInfo: PostProductType) => {
    return await apiReq({
        method: "PUT",
        url: `/product/${id}`,
        data: productInfo,
    })
        .then(res => res)
}

export const deleteSingleProduct = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/product/${id}`,
    })
        .then(res => res)
}