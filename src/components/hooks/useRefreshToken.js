import axios from "../api/axios";
import useAuth from "./useAuth";
import useLogout from "./useLogout";
import { useNavigate } from "react-router";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    const refresh = async () => {

        const signOut = async () => {
            await logout();
            // setIsLoggedIn(false);
            navigate('/login');
        }

        try{
            const response = await axios.get('/auth/refreshToken', {
                withCredentials: true
            });

            setAuth(prev => {
                return {
                    ...prev,
                    roles: response.data.roles,
                    accessToken: response.data.access_token
                }
            });
            return response.data.access_token;
        } catch (err) {
            console.error(err);
            signOut();
        }

    }
    return refresh;
};

export default useRefreshToken;