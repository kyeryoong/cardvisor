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
                <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + '/images/cardvisor_white.png'}/>
            </div>

            <div className={styles.headerButton}>
                <button onClick={() => {
                    alert("Hello");
                }}>
                    내 정보
                </button>
            </div>

        </div>
    );
}

export default Header;