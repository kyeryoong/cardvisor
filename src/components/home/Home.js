import { useNavigate } from 'react-router';
import styles from './Home.module.css';



function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                나에게 딱 맞는 카드를<br />
                몇 번의 클릭으로 간편하게!
            </div>
            <br />

            <div>
                <img alt="home" className={styles.mainLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_blue.png"} />
            </div>
            <br />


            <button className={styles.startButton} onClick={() => {
                navigate("/login");
            }}>
                시작하기
            </button>
            <br /><br /><br /><br /><br />


            <div className={styles.zone1}>
                아직 회원이 아니신가요?
            </div>
            <div className={styles.zone2} onClick={() => {
                navigate("/register");
            }}>
                회원가입
            </div>
            <br /><br /><br />


            <div className={styles.zone1}>
                Cardvisor에 대해서 자세히 알고 싶으면?
            </div>
            <div className={styles.zone2} onClick={() => {
                alert("준비중");
            }}>
                서비스 소개
            </div>
            <br />

            <img
                className={styles.homepageImage}
                alt="home"
                src={process.env.PUBLIC_URL + "/images/homepage.png"} />
        </div >
    );
}

export default Home;