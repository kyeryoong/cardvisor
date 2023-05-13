import React, { useEffect, useState } from 'react';
import useAuth from "./hooks/useAuth";
import { useNavigate } from 'react-router';
import styles from './HeaderTop.module.css';
import useLogout from "./hooks/useLogout";
import { useSelector, useDispatch } from 'react-redux';
import { setAuth2 } from "../store/authSlice";



function HeaderTop() {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const logout = useLogout();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    useEffect(() => {
        auth?.accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [auth])

    let auth2Data = useSelector((state) => state.auth2Data);
    let dispatch = useDispatch();
    console.log(auth2Data);

    return (
        <div className={styles.header}>
            <button onClick={() => dispatch(setAuth2(5))}>
                test
            </button>

            {
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
    );
}

export default HeaderTop;