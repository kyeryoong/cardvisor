import styles from "./LoginCarouselSlide2.module.css"

function LoginCarouselSlide2() {
    return (
        <div className={styles.mainZone}>
            <div className={styles.text1}>
                <br />
                약 <span className={styles.text2}>7,000</span>개<br />
                카드 혜택과 브랜드<br />

                <img alt="graphic" className={styles.image2} src={process.env.PUBLIC_URL + '/images/graphics/banner_benefit_2.png'} />
            </div>
        </div>
    )
}

export default LoginCarouselSlide2;