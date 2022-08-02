import styles from './DatabaseInfo.module.css'

function DatabaseInfo() {
    return (
        <div className={styles.backgroundZone}>
            <div className={styles.mainZone}>
                <div className={styles.infoZone1}>
                    카드 데이터<br />
                    현황
                </div>
                
                <div className={styles.emptySpace}>
                    &nbsp;
                </div>

                <div className={styles.infoZone2}>
                    카드<br />
                    <span className={styles.infoZoneValue}>
                        400
                    </span>
                    개
                </div>

                <div className={styles.emptySpace}>
                    &nbsp;
                </div>

                <div className={styles.infoZone2}>
                    혜택 & 브랜드<br />
                    <span className={styles.infoZoneValue}>
                        6021
                    </span>
                    개
                </div>

                <div className={styles.emptySpace}>
                    &nbsp;
                </div>

                <div className={styles.infoZone2}>
                    결제사<br />
                    <span className={styles.infoZoneValue}>
                        18
                    </span>
                    개
                </div>
            </div>
        </div>
    )
}

export default DatabaseInfo;