import { useEffect, useState } from 'react';
import styles from './ScrollToTop.css';


function ScrollToTop() {
    const [scrollY, setScrollY] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);

        if (scrollY > 190) {
            setButtonStatus(true);
        }

        else {
            setButtonStatus(false);
        }
    }

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);
        setButtonStatus(false);
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener("scroll", handleFollow)
        }
    })

    return (
        <div className={styles.wrap}>
            <button
                className={buttonStatus ? "topButton active" : "topButton"} onClick={handleTop}>
                <div>
                    <img alt="arrow_up" className="arrow" src={process.env.PUBLIC_URL + "/images/icons/arrow_up.png"} />
                </div>
                TOP
            </button>
        </div>
    )
}

export default ScrollToTop;