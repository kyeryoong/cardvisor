import axiosObject from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

import { useSelector } from "react-redux";


function useAxiosObject() {
    const refresh = useRefreshToken();

    let auth = useSelector((state) => state.auth);

    useEffect(() => {
        const requestInterceptor = axiosObject.interceptors.request.use(
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

        const responseInterceptor = axiosObject.interceptors.response.use(
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
                    return axiosObject(prevRequest);
                }

                else if (error?.code === "ERR_CANCELED") {
                    return Promise.resolve({ status: 499 });
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosObject.interceptors.request.eject(requestInterceptor);
            axiosObject.interceptors.response.eject(responseInterceptor);
        }
    }, [auth, refresh])

    return axiosObject;
};

export default useAxiosObject;