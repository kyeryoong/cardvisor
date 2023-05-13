import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";

import { useSelector, useDispatch } from "react-redux";
import { setAuth2 } from "../store/authSlice";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

    let auth2Data = useSelector((state) => state.auth2Data);
    let dispatch = useDispatch();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        !auth2Data?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    }, [])



    return (
        <>
            {
                isLoading
                    ? <p>Loading ...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin;