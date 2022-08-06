import { useState } from 'react';
import styles from './Brands.module.css';



function Brands(props) {
    const [cost, setCost] = useState("");

    return (
        <label>
            <div className={styles.iconbox}>
                <div className={styles.zone1}>
                    <img
                        alt={props.brandNameEng} className={styles.zone1Image} src={process.env.PUBLIC_URL + "/images/brands_logo/" + props.brandNameEng + ".png"} />
                </div>

                <div className={styles.zone2}>
                    <div className={styles.zone21}>
                        {props.brandNameKor}
                    </div>

                    <div className={styles.zone22}>
                        <input type="number" step="10000"value={cost} required="required" placeholder="0" min="0"
                            onChange={event => {
                                setCost(event.target.value);
                                props.setSel(event.target.value);
                            }} />
                    </div>

                    <div className={styles.zone23}>
                        <button className={styles.costButton} onClick={() => {
                            setCost((current) => Number(current) + 10000);
                            props.setSel((current) => Number(current) + 10000);
                        }}>1만원</button>

                        <button className={styles.costButton} onClick={() => {
                            setCost((current) => Number(current) + 20000);
                            props.setSel((current) => Number(current) + 20000);
                        }}>2만원</button>

                        <button className={styles.costButton} onClick={() => {
                            setCost((current) => Number(current) + 50000);
                            props.setSel((current) => Number(current) + 50000);
                        }}>5만원</button>

                        <button className={styles.resetButton} onClick={() => {
                            setCost("");
                            props.setSel((current) => Number(0));
                        }}>×</button>
                    </div>
                </div>
            </div>
        </label>
    );
}

export default Brands;