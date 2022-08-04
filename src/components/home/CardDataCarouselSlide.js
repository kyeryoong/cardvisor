import styles from './CardDataCarouselSlide.module.css'

function CardDataCarouselSlide(props) {
    return (
        <div className={styles.mainZone}>
            <img alt="graphic" className={styles.icon} src={process.env.PUBLIC_URL + '/images/icons/' + props.icon + '.png'} />

            <span className={styles.type}>
                {props.type}
            </span>

            <span className={styles.value}>
                {props.value}
            </span>

            <span className={styles.gae}>
                개
            </span>
        </div>
    )
}

export default CardDataCarouselSlide;