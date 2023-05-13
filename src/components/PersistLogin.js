import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";

import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

    let auth = useSelector((state) => state.auth);
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

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

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