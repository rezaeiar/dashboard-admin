import apiReq from "../CoreApi";

type addCustomerType = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
    roles: string[],
    home_phone_number: string,
    phone_number: string
    address: string,
    country: string,
    city: string
    note: string,
    postal_code: string,
}

type editCustomerInfoType = {
    first_name: string,
    last_name: string,
    roles: string[],
    phone_number: string
    home_phone_number: string,
    address: string,
    country: string,
    city: string
    postal_code: string,
    note: string,
}

export const addCustomer = async (customerInfo: addCustomerType) => {
    return await apiReq({
        method: "POST",
        url: "/user",
        data: customerInfo,
    })
        .then(res => res)
}
export const getAllCustomers = async () => {
    return await apiReq({
        method: "GET",
        url: "/user",
    })
        .then(res => res.data)
}
export const getSingleCustomer = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/user/${id}`,
    })
        .then(res => res.data)
}
export const deleteSingleCustomer = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/user/${id}`,
    })
        .then(res => res)
}
export const editCustomerInfo = async (id: string, customerInfo: editCustomerInfoType) => {
    return await apiReq({
        method: "PUT",
        url: `/user/${id}`,
        data: customerInfo,
    })
        .then(res => res)
}