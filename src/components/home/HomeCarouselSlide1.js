import styles from "./HomeCarouselSlide1.module.css"



function HomeCarouselSlide1() {
    return (
        <div className={styles.backgroundZone}>
            <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/7.png'} />

            <div className={styles.textZone}>
                <span className={styles.text1}>
                    나에게 딱 맞는&nbsp;
                </span>

                <span className={styles.text2}>
                    카드
                </span>

                <span className={styles.text1}>
                    를
                </span>
            </div>

            <div className={styles.textZone}>
                <span className={styles.text1}>
                    몇 번의 클릭으로&nbsp;
                </span>

                <span className={styles.text2}>
                    간편
                </span>

                <span className={styles.text1}>
                    하게
                </span>
            </div>
        </div>
    )
}

export default HomeCarouselSlide1;