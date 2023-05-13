import axios from "../api/axios";
import useLogout from "./useLogout";
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const useRefreshToken = () => {
    const logout = useLogout();
    const navigate = useNavigate();

    let auth = useSelector((state) => state.auth);
    let dispatch = useDispatch();

    const refresh = async () => {

        const signOut = async () => {
            await logout();
            navigate('/login');
        }

        try{
            const response = await axios.get('/auth/refreshToken', {
                withCredentials: true
            });

            dispatch(setAuth(prev => {
                return {
                    ...prev,
                    roles: response.data.roles,
                    accessToken: response.data.access_token
                }
            }))

            return response.data.access_token;
        } catch (err) {
            console.error(err);
            signOut();
        }

    }
    return refresh;
};

export default useRefreshToken;