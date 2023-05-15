import axios from "axios";
const BASE_URL = "http://localhost:8080";


// axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'CONTENT-Type': 'application/json'
    },
    withCredentials: true
});

export default axiosInstance;