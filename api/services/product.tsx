import apiReq from "../CoreApi";

type addProductType = {
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

export const addProduct = async (productInfo: addProductType) => {
    return await apiReq({
        method: "POST",
        url: "/product",
        data: productInfo,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => res)
}