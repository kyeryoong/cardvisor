import styles from './ChartElements.module.css';

function ChartElements({ color, element, value, ratioByCategories, ratioByMaxValue, num1, num2 }) {
    return (
        value !== 0

        &&

        <div className={styles.elementsContainer}>
            <div className={styles.elementColor} style={{ backgroundColor: color }}>
            </div>

            <div className={styles.elementName}>
                {element}
            </div>

            <div className={styles.elementValueContainer} style={{ color: color }}>
                <div className={styles.elementValueContainerTop}>
                    {value}원
                </div>

                <div className={styles.elementValueContainerBottom}>
                    {num2}원
                </div>
            </div>

            <div className={styles.elementBarContainer}>
                <div className={styles.elementBarContainerTop}>
                    <div className={styles.elementValue} style={{
                        backgroundColor: color,
                        width: (String(ratioByMaxValue * 200 + 100) + "px")
                    }}>
                        {(ratioByCategories * 100).toFixed(1)} %
                    </div>
                </div>

                <div className={styles.elementBarContainerBottom}>
                    <div className={styles.elementValue} style={{
                        backgroundColor: color,
                        width: (String(num1 * 200 + 150) + "px")
                    }}>
                        {(num1 * 100).toFixed(1)} %
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartElements;