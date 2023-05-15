import axios from "axios";
const BASE_URL = "http://localhost:8080";

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'CONTENT-Type': 'application/json'
    },
    withCredentials: true
});

export default axiosPrivate;