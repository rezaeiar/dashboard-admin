import apiReq from "../CoreApi";
import Cookies from 'universal-cookie';

type addTaskType = {
    email: string,
    title: string,
    expire_time: Date,
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

export const getUserTasks = async () => {
    return await apiReq({
        method: "GET",
        url: `/task/user-task`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        }
    })
        .then(res => res.data)
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

export const changeTaskComplated = async (id: string, complated: boolean) => {
    return await apiReq({
        method: "PUT",
        url: `/task/user-task/${id}`,
        headers: {
            "Authorization": `Bearer ${cookies.get("token")}`
        },
        data: {
            isComplated: complated
        }
    })
        .then(res => res)
}