import React from 'react';

import { useNavigate } from 'react-router';
import styles from './Header.module.css';



function Header() {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className={styles.title} onClick={() => {
                navigate('/');
            }}>
                cardvisor
            </div>

            {/* <div className={styles.zone1}>
                <button onClick={() => {
                    navigate('/mypage');
                }}>
                    내 정보
                </button>
            </div>

            <div className={styles.zone2}>
                <button onClick={() => {
                    alert("로그아웃")
                }}>
                    로그아웃
                </button>
            </div> */}
        </div>
    );
}

export default Header;