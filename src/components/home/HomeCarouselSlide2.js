import styles from "./HomeCarouselSlide2.module.css"

function HomeCarouselSlide2() {
    return (
        <div className={styles.backgroundZone}>
            <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/3.png'} />

            <span className={styles.text1}>
                다양한 서비스 제공
            </span>

            <span className={styles.text2}>
                카드 추천 & 소비 패턴 분석
            </span>
        </div>
    )
}

export default HomeCarouselSlide2;