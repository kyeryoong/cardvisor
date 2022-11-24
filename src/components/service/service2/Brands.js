import { useState } from 'react';
import styles from './Brands.module.css';

import SelectedBrands from './SelectedBrands';



function Brands({ brandNameKor, brandNameEng, i, j }) {
    const [cost, setCost] = useState(0);
    


    return (
        <div className={cost ? styles.containerEnable : styles.containerDisable}>
            <img
                alt={brandNameEng} className={cost ? styles.zone1Enable : styles.zone1Disable} src={process.env.PUBLIC_URL + "/images/brands_logo/" + brandNameEng + ".png"} />


            <div className={styles.zone2}>
                <div className={cost ? styles.zone21Enable : styles.zone21Disable}>
                    {brandNameKor}
                </div>

                <input className={cost ? styles.zone22Enable : styles.zone22Disable} type="number" step="10000" value={cost} required="required" placeholder="0" min="0"
                    onChange={event => {
                        setCost(event.target.value);
                        SelectedBrands[i][j] = Number(event.target.value);
                    }} />

                <div className={styles.zone23}>
                    <button className={styles.costButton} onClick={(event) => {
                        setCost((current) => Number(current) + 10000);
                        SelectedBrands[i][j] = SelectedBrands[i][j] + 10000;
                    }}>
                        1만원
                    </button>

                    <button className={styles.costButton} onClick={(event) => {
                        setCost((current) => Number(current) + 20000);
                        SelectedBrands[i][j] = SelectedBrands[i][j] + 20000;
                    }}>
                        2만원
                    </button>

                    <button className={styles.costButton} onClick={(event) => {
                        setCost((current) => Number(current) + 50000);
                        SelectedBrands[i][j] = SelectedBrands[i][j] + 50000;
                    }}>
                        5만원
                    </button>

                    <button className={styles.resetButton} onClick={(event) => {
                        setCost(0);
                        SelectedBrands[i][j] = 0;
                    }}>
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Brands;