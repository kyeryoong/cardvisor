import React, {useEffect, useState} from 'react';
import useAuth from "./hooks/useAuth";
import { useNavigate } from 'react-router';
import styles from './Header.module.css';
import useLogout from "./hooks/useLogout";
import { isLoggedIn } from "./PersistLogin";



const Header = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const logout = useLogout();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const signOut = async () => {
        await logout();
        // setIsLoggedIn(false);
        navigate('/login');
    }

    // console.log(auth?.accessToken);

    useEffect(() => {
        auth?.accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [auth])

    // console.log(isLoggedIn);
    // console.log(auth?.accessToken);


    return (
        <div>
            <div className={styles.header}>
                {
                    // auth?.user !== undefined

                    isLoggedIn
                        ?

                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_header.png"} onClick={() => {
                            navigate("/main");
                        }} />

                        :

                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_header.png"} onClick={() => {
                            navigate("/");
                        }} />
                }

                {
                    isLoggedIn

                    &&

                    <div className={styles.button1} onClick={() => {
                        navigate("/mypage");
                    }}>
                        내 정보
                    </div>
                }

                {
                    isLoggedIn

                    &&

                    <div className={styles.button2} onClick={signOut}>
                        로그아웃
                    </div>


                }

                {
                    !isLoggedIn

                    &&

                    <div>
                    </div>
                }

                {
                    !isLoggedIn

                    &&

                    <div className={styles.button2} onClick={() => {
                        navigate("/login");
                    }}>
                        로그인
                    </div>
                }
            </div>
        </div >
    );
}

export default Header;