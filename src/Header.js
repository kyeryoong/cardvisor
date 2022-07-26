import React from 'react';

import { useNavigate } from 'react-router';
import { useState } from 'react';
import styles from './Header.module.css';



function Header(props) {
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                {!props.logined &&
                    <div className={styles.title} onClick={() => {
                        navigate("/");
                    }}>
                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_blue.png"} />
                    </div>
                }

                {props.logined &&
                    <div className={styles.title} onClick={() => {
                        navigate("/main");
                    }}>
                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_blue.png"} />
                    </div>
                }


                {clicked ? <img alt="button" className={styles.headerButton} src={process.env.PUBLIC_URL + "/images/icons/user_orange.png"}
                    onClick={() => {
                        clicked ? setClicked(false) : setClicked(true);
                    }} /> : <img alt="button" className={styles.headerButton} src={process.env.PUBLIC_URL + "/images/icons/user_blue.png"}
                        onClick={() => {
                            clicked ? setClicked(false) : setClicked(true);
                        }} />}

                {!props.logined && clicked &&
                    <div className={styles.headerClickedZone}>
                        <button className={styles.headerClickedZoneCloseButton} onClick={() => {
                            setClicked(false);
                        }}>
                            ×
                        </button>

                        <div className={styles.headerClickedText1}>
                            로그인을 하시면<br />
                            Cardvisor의 다양한 서비스를<br />
                            이용하실 수 있습니다.
                        </div>

                        <button className={styles.headerClickedZoneButton1} onClick={() => {
                            navigate("/login");
                            setClicked(false);
                        }}>
                            로그인
                        </button>
                    </div>
                }

                {props.logined && clicked &&
                    <div className={styles.headerClickedZone}>
                        <button className={styles.headerClickedZoneCloseButton} onClick={() => {
                            setClicked(false);
                        }}>
                            ×
                        </button>

                        <div className={styles.headerClickedText2}>
                            Username 님 환영합니다.
                        </div>

                        <button className={styles.headerClickedZoneButton2} onClick={() => {
                            alert("준비중");
                            setClicked(false);
                        }}>
                            내 정보
                        </button>

                        <button className={styles.headerClickedZoneButton1} onClick={() => {
                            navigate("/");
                            setClicked(false);
                        }}>
                            로그아웃
                        </button>
                    </div>
                }
            </div>

            <div className={styles.header2}>
            </div>
        </div>
    );
}

export default Header;