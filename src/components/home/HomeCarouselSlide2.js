import styles from "./HomeCarouselSlide2.module.css"

function HomeCarouselSlide2() {
    return (
        <div className={styles.backgroundZone}>
            <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/7.png'} />
            <br />

            <div className={styles.text1}>
                <div className={styles.text1Content}>
                    다양한 서비스 제공
                </div>
            </div>
            <br />

            <div className={styles.text2}>
                카드 추천 & 소비 패턴 분석
            </div>
            <br />
        </div>
    )
}

export default HomeCarouselSlide2;