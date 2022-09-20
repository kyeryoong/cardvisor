import axios from "axios";
const BASE_URL = "http://15.165.158.247:8080";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'CONTENT-Type': 'application/json'
    },
    withCredentials: true
});