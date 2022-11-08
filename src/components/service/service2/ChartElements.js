import styles from './ChartElements.module.css';

function ChartElements({ color, elementKor, elementEng, value, ratioByCategories, ratioByMaxValue, num1, num2 }) {
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
                <div className={styles.elementValue} style={{ color: color }}>
                    {value}원
                </div>


                <div className={styles.elementBar} style={{
                    backgroundColor: color,
                    width: "calc(100px + " + (String(ratioByMaxValue * 20)) + "vw)"
                }}>
                    {(ratioByCategories * 100).toFixed(1)} %
                </div>
            </div>
        </div >
    )
}

export default ChartElements;