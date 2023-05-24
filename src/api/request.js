//axios 请求封装
import axios from "axios";

const BASE_URL = `http://localhost:9991/test-web`

const myAxios = axios.create({
    baseURL: BASE_URL,
    //timeout: 5000, //超时时间
});

myAxios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    });

export default myAxios;
