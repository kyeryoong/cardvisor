import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    let auth = useSelector((state) => state.auth);
    let dispatch = useDispatch();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state{...{ from: location }} replace />
                : <Navigate to="/login" state{...{ from: location }} replace />
    );
}

export default RequireAuth;