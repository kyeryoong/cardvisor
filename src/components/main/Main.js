import Header from '../../Header';

import { useNavigate } from 'react-router';
import styles from './Main.module.css';



function Main() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />

            <button className={styles.service1Button} onClick={() => {
                navigate('/service1');
            }}>
                서비스1
            </button>

            <button className={styles.service2Button} onClick={() => {
                navigate('/service2');
            }}>
                서비스2
            </button>

            <button className={styles.listButton} onClick={() => {
                navigate('/list');
            }}>
                카드 목록
            </button>
        </div>
    );
}

export default Main;