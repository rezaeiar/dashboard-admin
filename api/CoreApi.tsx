import axios from "axios";
import Cookies from 'universal-cookie';

const apiReq = axios.create({
    baseURL: 'https://dashboard-api.liara.run/'
})

const cookies = new Cookies()

apiReq.interceptors.request.use(function (config) {
    const token = cookies.get("token");
    
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default apiReq