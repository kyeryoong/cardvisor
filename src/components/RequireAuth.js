import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setAuth2 } from "../store/authSlice";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    let auth2Data = useSelector((state) => state.auth2Data);
    let dispatch = useDispatch();

    return (
        auth2Data?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth2Data?.user
                ? <Navigate to="/unauthorized" state{...{ from: location }} replace />
                : <Navigate to="/login" state{...{ from: location }} replace />
    );
}

export default RequireAuth;