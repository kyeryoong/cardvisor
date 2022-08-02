import { useNavigate } from 'react-router';
import styles from './Main.module.css';



function Main() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.introText}>
                원하시는 서비스를 선택하세요.
            </div>
            <br />

            <div className={styles.backgroundZone}>
                <div className={styles.buttonsZone}>
                    <div className={styles.buttonsRow}>
                        <div className={styles.service1Button} onClick={() => {
                            navigate("/service1");
                        }}>
                            <div className={styles.mainText}>카드<br />추천받기</div>
                            <div className={styles.subText}><br />혜택 직접 선택</div>
                            <img alt="button" className={styles.buttonImage} src={process.env.PUBLIC_URL + "/images/menu_logo/service1.png"} />
                        </div>

                        <div className={styles.service2Button} onClick={() => {
                            navigate('/service2');
                        }}>
                            <div className={styles.mainText}>카드<br />추천받기</div>
                            <div className={styles.subText}><br />소비 내역 입력</div>
                            <img alt="button" className={styles.buttonImage} src={process.env.PUBLIC_URL + '/images/menu_logo/service2.png'} />
                        </div>

                        <div className={styles.listButton} onClick={() => {
                            navigate("/list");
                        }}>
                            <div className={styles.mainText}>전체<br />카드 목록<br /></div>
                            <div className={styles.subText}><br />&nbsp;</div>
                            <img alt="button" className={styles.buttonImage} src={process.env.PUBLIC_URL + "/images/menu_logo/service3.png"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;