import styles from "./HomeCarouselSlide2.module.css"

function HomeCarouselSlide2() {
    return (
        <div className={styles.backgroundZone}>
            <div className={styles.mainZone}>
                <div className={styles.graphicZone}>
                    <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/7.png'} />
                </div>

                <div className={styles.text1}>
                    다양한 서비스 제공
                </div>
                <br />

                <div className={styles.text2}>
                    추천 / 분석 / 통계
                </div>
                <br />

                <div className={styles.text3}>
                    카드 상품 추천<br />
                    소비 패턴 분석<br />
                    소비 통계
                </div>
            </div>
        </div>
    )
}

export default HomeCarouselSlide2;