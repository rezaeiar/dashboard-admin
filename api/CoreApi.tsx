import axios from "axios";

const apiReq = axios.create({
    baseURL: 'https://cms-app.liara.run/api/'
})

export default apiReq