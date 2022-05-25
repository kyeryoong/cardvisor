import { useNavigate } from 'react-router';
import styles from './Home.module.css';



function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.intro1}>
                나에게 딱 맞는 카드를<br />
                몇 번의 클릭으로 간편하게!
            </div>
            <br />

            <div className={styles.intro2}>
                cardvisor
            </div>
            <br />

            <div>
                <button className={styles.startButton} onClick={() => {
                    navigate('/login');
                }}>
                    시작하기
                </button>
            </div>
            <br /><br /><br />

            <div>
                <div className={styles.zone1}>아직 회원이 아니신가요?</div>
                <div className={styles.zone2} onClick={() => {
                    alert('준비중');
                }}>회원가입</div>
            </div>
            <br /><br />

            <div>
                <div className={styles.zone1}>Cardvisor에 대해서 자세히 알고 싶으면?</div>
                <div className={styles.zone2} onClick={() => {
                    alert('준비중');
                }}>서비스 소개</div>
            </div>
            <br />
            
            <img
                className={styles.homepageImage}
                alt='home'
                src={process.env.PUBLIC_URL + '/images/homepage.png'} />
        </div >
    );
}

export default Home;