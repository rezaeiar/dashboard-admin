import axios from "axios";

const apiReq = axios.create({
    baseURL: 'https://cms-app.liara.run/'
})

export default apiReq