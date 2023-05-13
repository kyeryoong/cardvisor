import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './HeaderTop.module.css';
import useLogout from "./hooks/useLogout";
import { useSelector } from 'react-redux';



function HeaderTop() {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    let auth = useSelector((state) => state.auth);

    return (
        <div className={styles.header}>
            {
                auth?.accessToken

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
                auth?.accessToken

                &&

                <div className={styles.button1} onClick={() => {
                    navigate("/mypage");
                }}>
                    내 정보
                </div>
            }

            {
                auth?.accessToken

                &&

                <div className={styles.button2} onClick={signOut}>
                    로그아웃
                </div>


            }

            {
                !auth?.accessToken

                &&

                <div>
                </div>
            }

            {
                !auth?.accessToken

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