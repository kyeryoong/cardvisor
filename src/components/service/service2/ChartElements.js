import styles from './ChartElements.module.css';

function ChartElements({ color, elementKor, elementEng, value, ratioByCategories, comparison, age, gender }) {
    console.log(!isNaN(comparison))

    return (
        value !== 0

        &&

        <div className={styles.elementsContainer}>
            <div className={styles.elementsContainer1}>
                <div className={styles.elementColor} style={{ backgroundColor: color }}>
                    <img alt="icon" className={styles.elementIcon} src={process.env.PUBLIC_URL + "/images/icons/category_" + elementEng + ".png"} />
                </div>

                <div className={styles.elementName}>
                    {elementKor}
                </div>
            </div>

            <div className={styles.elementsContainer2}>
                <div className={styles.elementsContainer21}>
                    <div className={styles.elementValue1} style={{ color: color }}>
                        {value}원
                    </div>

                    <div className={styles.elementPercent1} style={{ color: color, border: String("1px solid " + color), borderRadius: "5px 0px 0px 5px" }}>
                        {(ratioByCategories * 100).toFixed(1)}%
                    </div>

                    <div className={styles.elementBar1} style={{
                        backgroundColor: color,
                        width: String(ratioByCategories * 25) + "vw"
                    }}>

                    </div>
                </div>

                <div className={styles.elementsContainer22}>
                    <div className={styles.elementValue2} style={{ color: color }}>
                        {age}대 {gender} 평균
                    </div>

                    <div className={styles.elementPercent2} style={{ color: color, border: String("1px solid " + color), borderRadius: "5px 0px 0px 5px" }}>
                        {(comparison * 100).toFixed(1)}%
                    </div>

                    <div className={styles.elementBar2} style={{
                        backgroundColor: color,
                        width: String(comparison * 25) + "vw"
                    }}>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ChartElements;