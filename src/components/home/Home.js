import { useNavigate } from 'react-router';
import styles from './Home.module.css';

import HomeCarousel from './HomeCarousel';
import CardDataCarousel from './CardDataCarousel';
import Loading from './Loading';


function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.mainZone}>
            <HomeCarousel />
            <br /><br />



            <div className={styles.startZone}>
                <div className={styles.startText}>
                    지금 바로
                </div>

                <button className={styles.startButton} onClick={() => {
                    navigate("/login");
                }}>
                    시작하기
                </button>
            </div>
            <br /><br />



            <div className={styles.registerZone}>
                <span className={styles.registerText}>
                    아직 회원이 아니신가요?
                </span>

                <span className={styles.registerButton} onClick={() => {
                    navigate("/register");
                }}>
                    회원가입 하기
                </span>
            </div>



            <img alt="graphic" className={styles.cardDataIcon} src={process.env.PUBLIC_URL + '/images/graphics/12.png'} />
            <Loading />

            <div className={styles.cardDataIntro}>
                카드 데이터 현황
            </div>

            <CardDataCarousel />
            <br />

            <div className={styles.cardDataZone}>
                <span className={styles.cardDataText}>
                    지원 카드 및 브랜드 자세히 보기
                </span>

                <span className={styles.cardDataButton} onClick={() => {
                    alert("준비중");
                }}>
                    데이터 상세 보기
                </span>
            </div>
        </div >
    );
}

export default Home;