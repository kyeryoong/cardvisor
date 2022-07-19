import { useState } from 'react';
import styles from './Brands.module.css';



function Brands(props) {
    const [cost, setCost] = useState("");

    return (
        <label>
            <div className={styles.iconbox}>
                <div className={styles.zone1}>
                    <img
                        alt={props.brandNameEng}
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + props.brandNameEng + '.png'} />
                </div>

                <div className={styles.zone2}>
                    <div className={styles.zone21}>
                        {props.brandNameKor}
                    </div>

                    <div className={styles.zone22}>
                        <input type="number" step="10000" className={styles.inputZone} value={cost} required="required" placeholder='0' onChange={event => {
                            setCost(event.target.value);
                            props.setSel(event.target.value);
                        }} />
                    </div>

                    <div className={styles.zone23}>
                        <button className={styles.costButton} onClick={() => {
                            setCost(Number(cost) + 10000);
                            props.setSel(Number(cost) + 10000);
                        }}>1만원</button>

                        <button className={styles.costButton} onClick={() => {
                            setCost(Number(cost) + 20000);
                            props.setSel(Number(cost) + 20000);
                        }}>2만원</button>

                        <button className={styles.costButton} onClick={() => {
                            setCost(Number(cost) + 50000);
                            props.setSel(Number(cost) + 50000);
                        }}>5만원</button>

                        <button className={styles.resetButton} onClick={() => {
                            setCost("");
                            props.setSel(Number(0));
                        }}>×</button>
                    </div>
                </div>
            </div>
        </label>
    );
}

export default Brands;