import styles from './Categories.module.css';

import { useState } from 'react';



function Categories(props) {
    const [show, setShow] = useState(false);

    return (
        <summary className={styles.summaryZone}>
            <div className={styles.zone1}>
                <div className={styles.categoryName} onClick={() => {
                    setShow(!show);
                }}>
                    <img alt="icon" className={styles.icon} src={process.env.PUBLIC_URL + "/images/icons/" + props.iconName + ".png"} />
                    <label className={styles.categoryNameKor}>
                        {props.categoryNameKor}
                    </label>
                    <label className={styles.categoryNameEng}>
                        {props.categoryNameEng}
                    </label>
                </div>


            </div>

            <div className={styles.zone2}>
                <div className={styles.hideShow} onClick={() => {
                    setShow(!show);
                }}>
                    {
                        show ?
                            <img alt="arrow_up" className={styles.arrow} src={process.env.PUBLIC_URL + "/images/icons/arrow_up.png"} /> :
                            <img alt="arrow_down" className={styles.arrow} src={process.env.PUBLIC_URL + "/images/icons/arrow_down.png"} />
                    }
                </div>
            </div>
            
            <div className={styles.hrline} />
        </summary>
    )
}

export default Categories;