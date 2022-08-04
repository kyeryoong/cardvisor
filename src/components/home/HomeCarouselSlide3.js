import styles from "./HomeCarouselSlide3.module.css"

function HomeCarouselSlide3() {
    return (
        <div className={styles.backgroundZone}>
            <div className={styles.graphicRows}>
                <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/9.png'} />

                <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/8.png'} />

                <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/10.png'} />
            </div>

            <span className={styles.text1}>
                사용자 소비 패턴 분석
            </span>

            <span className={styles.text2}>
                알고리즘 기반 추천 서비스
            </span>
        </div>
    )
}

export default HomeCarouselSlide3;