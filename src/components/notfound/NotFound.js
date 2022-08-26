import { useNavigate } from 'react-router';
import styles from './NotFound.module.css';



function MyPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.mainZone}>
            <div className={styles.fourZeroFourContainer}>
                <div className={styles.four}>4</div>
                <img className={styles.deadFace}
                    alt="deadface"
                    src={process.env.PUBLIC_URL + "/images/icons/dead_blue.png"} />
                <div className={styles.four}>4</div>
            </div>

            <div className={styles.pageNotFound}>
                PAGE NOT FOUND
            </div>
            <br /><br /><br />

            <div className={styles.text}>
                죄송합니다. 요청하신 페이지를 찾을 수 없습니다.<br />
                페이지 주소를 잘못 입력하셨거나, 주소가 변경 혹은 삭제됐을 수 있습니다.<br />
                입력한 주소를 다시 확인해 주세요!
            </div>
            <br /><br /><br />

            <button className={styles.toMainButton} onClick={() => {
                navigate("/");
            }}>
                홈 화면으로
            </button>
        </div>
    );
}

export default MyPage;