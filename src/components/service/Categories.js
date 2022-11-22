import { useState } from 'react';

import styles from './Categories.module.css';



function Categories(props) {
    const [clicked, setClicked] = useState(false);

    return (
        <summary className={styles.summaryZone} onClick={() => { setClicked((prev) => !prev) }}>
            <img alt="icon" className={styles.categoryIcon} src={process.env.PUBLIC_URL + "/images/icons/" + props.iconName + ".png"} />

            <div>
                <span className={styles.categoryNameKor}>
                    {props.categoryNameKor}
                </span>

                <span className={styles.categoryNameEng}>
                    {props.categoryNameEng}
                </span>
            </div>

            {
                clicked

                    ?

                    <img alt="icon" className={styles.arrowOpened} src={process.env.PUBLIC_URL + "/images/icons/arrow_up_black.png"} />

                    :

                    <img alt="icon" className={styles.arrowClosed} src={process.env.PUBLIC_URL + "/images/icons/arrow_down_blue.png"} />
            }
        </summary>
    )
}

export default Categories;