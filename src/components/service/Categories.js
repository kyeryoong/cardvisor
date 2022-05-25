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
                    {props.categoryName}
                </div>
            </div>

            <div className={styles.zone2}>
                <div className={styles.hideShow} onClick={() => {
                    setShow(!show);
                }}>
                    {show ? '▲' : '▼'}
                </div>
            </div>

            <hr />
        </summary>
    )
}

export default Categories;