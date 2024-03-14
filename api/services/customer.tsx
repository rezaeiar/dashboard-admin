import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addCustomerType = {
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    phone_number: string
    password: string,
    roles: string[],
    address: string,
    country: string,
    city: string
    home_phone_number: string,
    postal_code: string,
    note: string,
}

type editCustomerInfoType = {
    first_name: string,
    last_name: string,
    roles: string[],
    home_phone_number: string,
    phone_number: string
    address: string,
    country: string,
    city: string
    postal_code: string,
    note: string,
}

const cookies = new Cookies()

export const addCustomer = async (customerInfo: addCustomerType) => {
    return await apiReq({
        method: "POST",
        url: "/user",
        data: customerInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const getAllCustomers = async () => {
    return await apiReq({
        method: "GET",
        url: "/user",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}
export const getSingleCustomer = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/user/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}
export const deleteSingleCustomer = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/user/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const editCustomerInfo = async (id: string, customerInfo: editCustomerInfoType) => {
    return await apiReq({
        method: "PUT",
        url: `/user/${id}`,
        data: customerInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}