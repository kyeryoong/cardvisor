import styles from './ChartElements.module.css';

function ChartElements({ color, elementKor, elementEng, value, ratioByCategories, comparison, age, gender }) {
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


                    <div className={styles.elementBar1} style={{
                        backgroundColor: color,
                        width: "calc(100px + " + (String(ratioByCategories * 20)) + "vw)"
                    }}>
                        {(ratioByCategories * 100).toFixed(1)} %
                    </div>
                </div>

                <div className={styles.elementsContainer22}>
                    <div className={styles.elementValue2} style={{ color: color }}>
                        {age}대 {gender} 평균
                    </div>

                    <div className={styles.elementBar2} style={{
                        backgroundColor: color,
                        width: "calc(100px + " + (String(comparison * 20)) + "vw)"
                    }}>
                        {(comparison * 100).toFixed(1)} %
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ChartElements;