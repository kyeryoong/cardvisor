import styles from "./BannerZone1.module.css"

function BannerZone1() {
    return (
        <div className={styles.mainZone}>
            <div className={styles.text1}>
                <br />
                <span className={styles.text2}>400개</span>&nbsp;카드<br />
                카드 데이터 제공<br />

                <img alt="graphic" className={styles.image2} src={process.env.PUBLIC_URL + '/images/graphics/banner_company.png'} />

                <img alt="graphic" className={styles.image1} src={process.env.PUBLIC_URL + '/images/graphics/2.png'} />
            </div>
        </div>
    )
}

export default BannerZone1;