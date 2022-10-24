import styles from './ChartElements.module.css';

function ChartElements({ color, element, value, ratioByCategories, ratioByMaxValue }) {
    return (
        value !== 0

        &&

        <div className={styles.elementsContainer}>
            <div className={styles.elementColor} style={{ backgroundColor: color }}>
            </div>

            <div className={styles.elementName}>
                {element}
            </div>

            <div className={styles.elementValue} style={{ color: color }}>
                {value}원
            </div>

            <div className={styles.elementPercentageValue} style={{ backgroundColor: color}}>
                {(ratioByCategories * 100).toFixed(1)} %
            </div>

            <div className={styles.elementPercentageBar} style={{ backgroundColor: color, width: (String(ratioByMaxValue * 200) + "px")}}>

            </div>
        </div>
    )
}

export default ChartElements;