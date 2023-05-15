import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    let auth = useSelector((state) => state.auth);

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))

            ?

            <Outlet />

            :

            (
                auth?.user

                    ?

                    <Navigate to="/unauthorized" state{...{ from: location }} replace />

                    :

                    <Navigate to="/login" state{...{ from: location }} replace />
            )
    );
}

export default RequireAuth;