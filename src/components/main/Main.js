import { useNavigate } from 'react-router';

import styles from './Main.module.css';



function Main() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.randomCardZone}>
                <div className={styles.randomCardIntro}>
                    오늘의 카드
                </div>
            </div>

            <div className={styles.buttonsZone}>
                <div className={styles.button1} onClick={() => {
                    navigate("/service1");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/1.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>카드 추천받기</div>
                        <div className={styles.subText}>혜택 선택</div>
                    </div>
                </div>

                <div className={styles.button2} onClick={() => {
                    navigate("/service2");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/2.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>카드 추천받기</div>
                        <div className={styles.subText}>금액 입력</div>
                    </div>
                </div>

                <div className={styles.button3} onClick={() => {
                    navigate("/list");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/3.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>전체 카드 목록</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;