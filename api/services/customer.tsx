import apiReq from "../CoreApi";
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

export const addCustomer = (customerInfo: addCustomerType) => {
    console.log(customerInfo);
    
    return apiReq({
        method: "POST",
        url: "/user",
        data: customerInfo,
        headers: {
            "Authorization": `Bearer ${document.cookie.split('=')[1]}`
        }
    })
        .then(res => console.log(res)
        )
}