import { useState } from 'react';
import style from './Brands.module.css';



function Brands(props) {
    const [cost, setCost] = useState("");

    return (
        <label>
            <div className={style.iconbox}>
                <div className={style.zone1}>
                    <img
                        alt={props.brandNameEng}
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + props.brandNameEng + '.png'} />
                </div>

                <div className={style.zone2}>
                    <div className={style.zone21}>
                        {props.brandNameKor}
                    </div>

                    <div className={style.zone22}>
                        <input type="number" step="10000" className={style.inputZone} value={cost} required="required" placeholder='0' onChange={event => {
                            setCost(event.target.value);
                            props.setSel(event.target.value);
                        }} />
                    </div>

                    <div className={style.zone23}>
                        <button className={style.costButton} onClick={() => {
                            setCost(Number(cost) + 10000);
                            props.setSel(Number(cost) + 10000);
                        }}>1만원</button>

                        <button className={style.costButton} onClick={() => {
                            setCost(Number(cost) + 20000);
                            props.setSel(Number(cost) + 20000);
                        }}>2만원</button>

                        <button className={style.costButton} onClick={() => {
                            setCost(Number(cost) + 50000);
                            props.setSel(Number(cost) + 50000);
                        }}>5만원</button>

                        <button className={style.resetButton} onClick={() => {
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