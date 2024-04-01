import apiReq from "../CoreApi";

const form = new FormData();

export const uploadFile = async (file: any) => {
    form.set("file", file.files[0])
    return await apiReq({
        method: "POST",
        url: "/upload",
        data: form,
        headers: { "Content-Type": `multipart/form-data` },
    })
        .then(res => res)
}