import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export const getAllManagers = async () => {
    return await apiReq({
        method: "GET",
        url: "/manager",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}