import styles from "./HomeCarouselSlide1.module.css"



function HomeCarouselSlide1() {
    return (
        <div className={styles.backgroundZone}>
            <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/7.png'} />

            <div className={styles.textZone}>
                <span className={styles.textGray}>
                    나에게 딱 맞는&nbsp;
                </span>

                <span className={styles.textBlue}>
                    카드
                </span>

                <span className={styles.textGray}>
                    를
                </span>
            </div>

            <div className={styles.textZone}>
                <span className={styles.textGray}>
                    몇 번의 클릭으로&nbsp;
                </span>

                <span className={styles.textBlue}>
                    간편
                </span>

                <span className={styles.textGray}>
                    하게
                </span>
            </div>
        </div>
    )
}

export default HomeCarouselSlide1;