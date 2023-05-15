import axiosPrivate from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

import { useSelector } from "react-redux";


const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    let auth = useSelector((state) => state.auth);

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,

            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    console.log("refreshing token");
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }

                else if (error?.code === "ERR_CANCELED") {
                    return Promise.resolve({ status: 499 });
                }


                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
};

export default useAxiosPrivate;
