import axios from "../api/axios";

import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const useLogout = () => {
    let dispatch = useDispatch();

    const logout = async () => {
        dispatch(setAuth({}));

        try {
            await axios('/auth/signout', { withCredentials: true });
        }

        catch (error) {
            console.error(error);
        }
    }

    return logout;
}

export default useLogout;