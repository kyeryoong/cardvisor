import React from 'react';

import { useNavigate } from 'react-router';
import { useState } from 'react';
import styles from './Header.module.css';



function Header({ isLogined, setIsLogined }) {
    const navigate = useNavigate();


    return (
        <div>
            <div className={styles.header}>
                {
                    isLogined

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
                    isLogined

                    &&

                    <div className={styles.button1} onClick={() => { alert("준비중") }}>
                        내 정보
                    </div>
                }

                {
                    isLogined

                    &&

                    <div className={styles.button2} onClick={() => {
                        window.localStorage.removeItem("accessToken");
                        window.localStorage.removeItem("refreshToken");
                        setIsLogined(false);
                        navigate("/");
                    }}>
                        로그아웃
                    </div>


                }

                {
                    !isLogined

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