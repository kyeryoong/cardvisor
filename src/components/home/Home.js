import { useNavigate } from 'react-router';
import styles from './Home.module.css';

import HomeCarousel from './HomeCarousel';
import DatabaseInfo from './DatabaseInfo';



function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <HomeCarousel />
            <br /><br />

            <div className={styles.startText}>
                지금 바로
            </div>

            <button className={styles.startButton} onClick={() => {
                navigate("/login");
            }}>
                시작하기
            </button>
            <br /><br />

            <div className={styles.registerZone}>
                <span className={styles.registerText}>
                    아직 회원이 아니신가요? &nbsp; &nbsp;&nbsp;
                </span>

                <span className={styles.registerButton} onClick={() => {
                                navigate("/register");
                            }}>
                    회원 가입 하기
                </span>
            </div>

            <DatabaseInfo />
            <br /><br />

            <div className={styles.databaseZone}>
                <span className={styles.databaseText}>
                    카드 데이터 및 브랜드 자세히 보기 &nbsp; &nbsp;&nbsp;
                </span>

                <span className={styles.databaseButton} onClick={() => {
                                alert("준비중");
                            }}>
                    데이터 상세 보기
                </span>
            </div>
        </div >
    );
}

export default Home;