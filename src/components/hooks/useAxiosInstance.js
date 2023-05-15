import axiosInstance from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

import { useSelector } from "react-redux";


const useAxiosInstance = () => {
    const refresh = useRefreshToken();

    let auth = useSelector((state) => state.auth);

    useEffect(() => {
        const requestIntercept = axiosInstance.interceptors.request.use(
            function (config) {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }

                return config;
            },

            function (error) {
                Promise.reject(error)
            }
        );

        const responseIntercept = axiosInstance.interceptors.response.use(
            function (response) {
                return response
            },

            async function (error) {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    console.log("refreshing token");
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosInstance(prevRequest);
                }

                else if (error?.code === "ERR_CANCELED") {
                    return Promise.resolve({ status: 499 });
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestIntercept);
            axiosInstance.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosInstance;
};

export default useAxiosInstance;
