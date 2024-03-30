import apiReq from "../CoreApi";

type addTaskType = {
    email: string,
    title: string,
    expire_time: Date,
}

export const addTask = async (taskInfo: addTaskType) => {
    return await apiReq({
        method: "POST",
        url: "/task",
        data: taskInfo,
    })
        .then(res => res)
}

export const getAllTasks = async () => {
    return await apiReq({
        method: "GET",
        url: "/task",
    })
        .then(res => res.data)
}

export const getUserTasks = async () => {
    return await apiReq({
        method: "GET",
        url: `/task/user-task`,
    })
        .then(res => res.data)
}

export const deleteSingleTask = async (id: string) => {
    return await apiReq({
        method: "DELETE",
        url: `/task/${id}`,
    })
        .then(res => res)
}

export const changeTaskComplated = async (id: string, complated: boolean) => {
    return await apiReq({
        method: "PUT",
        url: `/task/user-task/${id}`,
        data: {
            isComplated: complated
        }
    })
        .then(res => res)
}