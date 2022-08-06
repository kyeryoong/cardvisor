import styles from './Categories.module.css';



function Categories(props) {
    return (
        <summary className={styles.summaryZone}>
            <img alt="icon" className={styles.categoryIcon} src={process.env.PUBLIC_URL + "/images/icons/" + props.iconName + ".png"} />
            
            <span className={styles.categoryNameKor}>
                {props.categoryNameKor}
            </span>

            <span className={styles.categoryNameEng}>
                {props.categoryNameEng}
            </span>
        </summary>
    )
}

export default Categories;