import axios from "../api/axios";

import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const useLogout = () => {
    let auth = useSelector((state) => state.auth);
    let dispatch = useDispatch();

    const logout = async () => {
        dispatch(setAuth({}));
        
        try {
            const response = await axios('/auth/signout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout;