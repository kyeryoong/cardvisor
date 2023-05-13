import axios from "../api/axios";

import { useSelector, useDispatch } from "react-redux";
import { setAuth2 } from "../../store/authSlice";

const useLogout = () => {
    let auth2Data = useSelector((state) => state.auth2Data);
    let dispatch = useDispatch();

    const logout = async () => {
        dispatch(setAuth2({}));
        
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