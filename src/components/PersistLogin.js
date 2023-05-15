import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";

import { useSelector } from "react-redux";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

    let auth = useSelector((state) => state.auth);


    useEffect(() => {
        async function verifyRefreshToken() {
            try {
                await refresh();
            }

            catch (error) {
                console.error(error);
            }

            finally {
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    }, [])



    return (
        isLoading

            ?

            <p>Loading ...</p>

            :

            <Outlet />
    )
}

export default PersistLogin;