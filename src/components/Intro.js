import styles from './Intro.module.css';



function Intro(props) {
    return (
        <div>
            <div className={styles.mainText}>
                {props.mainText}
            </div>

            <div className={styles.subText}>
                {props.subText}
            </div>
        </div>
    )
}

export default Intro;