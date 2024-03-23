import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addTaskType = {
    email: string,
    title: string,
    expire_time: string,
}

const cookies = new Cookies()

export const addTask = async (taskInfo: addTaskType) => {
    return await apiReq({
        method: "POST",
        url: "/task",
        data: taskInfo,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}

export const getAllTasks = async () => {
    return await apiReq({
        method: "GET",
        url: "/task",
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
}

export const getSingleTask = async (id: string) => {
    return await apiReq({
        method: "GET",
        url: `/task/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}
export const deleteSingleTask = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/task/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res)
}