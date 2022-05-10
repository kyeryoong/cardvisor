import React from 'react';
import styles from './Header.module.css';



function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title} onClick={() => {
                alert("홈")
            }}>
                cardvisor
            </div>

            <div className={styles.zone1}>
                <button onClick={() => {
                    alert("내 정보")
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
            </div>
        </div>
    );
}

export default Header;