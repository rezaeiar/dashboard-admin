import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

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

const cookies = new Cookies()

export const addProduct = async (productInfo: PostProductType) => {
    return await apiReq({
        method: "POST",
        url: "/product",
        data: productInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}

export const getAllProducts = async () => {
    return await apiReq({
        method: "GET",
        url: "/product",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}

export const getSindleProduct = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/product/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}

export const editProduct = async (id: string, productInfo: PostProductType) => {
    return await apiReq({
        method: "PUT",
        url: `/product/${id}`,
        data: productInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}

export const deleteSingleProduct = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/product/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}