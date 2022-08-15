import Loader from "react-spinners/BarLoader";
import styles from "./Loading.module.css";



function Loading({ message }) {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingZone}>
                <Loader
                    height={7}
                    width="300px"
                    color="rgb(0, 200, 200)"
                    speedMultiplier={2}
                />
            </div>

            <div className={styles.messageText}>
                {message}
            </div>
        </div>
    )
}

export default Loading;