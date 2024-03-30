import apiReq from "../CoreApi";

export const getAllManagers = async () => {
    return await apiReq({
        method: "GET",
        url: "/manager",
    })
        .then(res => res.data)
}