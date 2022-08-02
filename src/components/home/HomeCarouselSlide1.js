import styles from "./HomeCarouselSlide1.module.css"

function HomeCarouselSlide1() {
    return (
        <div className={styles.backgroundZone}>
            <img alt="graphic" className={styles.graphic} src={process.env.PUBLIC_URL + '/images/graphics/3.png'} />

            <div className={styles.text1}>
                나에게 딱 맞는 카드를
            </div>

            <div className={styles.text2}>
                몇 번의 클릭으로 간편하게!
            </div>
        </div>
    )
}

export default HomeCarouselSlide1;