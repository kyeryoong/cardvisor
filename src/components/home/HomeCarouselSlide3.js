import styles from "./HomeCarouselSlide3.module.css"

function HomeCarouselSlide3() {
    return (
        <div className={styles.backgroundZone}>
            <div className={styles.graphicZone}>
                <div className={styles.graphicRow}>
                    <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/9.png'} />

                    <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/8.png'} />

                    <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/10.png'} />
                </div>
            </div>
            <br />

            <div className={styles.text1}>
                사용자 소비 패턴 분석
            </div>
            <br />
        
            <div className={styles.text2}>
                알고리즘 기반 서비스
            </div>
            <br />
        </div>
    )
}

export default HomeCarouselSlide3;