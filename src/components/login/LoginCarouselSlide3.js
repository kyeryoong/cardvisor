import styles from "./LoginCarouselSlide3.module.css"

function LoginCarouselSlide3() {
    return (
        <div className={styles.mainZone}>
            <div className={styles.text1}>
                <br />
                <div className={styles.text1}>사용자 맞춤</div>
                <div className={styles.text2}>추천 알고리즘 서비스</div>
                <div className={styles.text3}>Collaborative Filtering</div>

                <img alt="graphic" className={styles.image1} src={process.env.PUBLIC_URL + '/images/graphics/4.png'} />

                <img alt="graphic" className={styles.image2} src={process.env.PUBLIC_URL + '/images/graphics/5.png'} />
            </div>
        </div>
    )
}

export default LoginCarouselSlide3;