import { useEffect, useState } from "react";

import styles from "./HeaderBottom.module.css";



function HeaderBottom({ mainText, subText }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });



    return (
        <div>
            <div className={styles.blank} />

            <div className={scrollPosition < 10 ? styles.containerNotScrolled : styles.containerScrolled}>
                <div className={scrollPosition < 10 ? styles.mainTextNotScrolled : styles.mainTextScrolled}>
                    {mainText}
                </div>

                <div className={scrollPosition < 10 ? styles.subTextNotScrolled : styles.subTextScrolled}>
                    {subText}
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;