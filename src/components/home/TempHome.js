import { useEffect, useState } from 'react';
import styles from './TempHome.module.css';



function TempHome() {
    const [scrollY, setScrollY] = useState(0);
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);

        if (scrollY < (window.innerHeight * 0.5 - 200)) {
            setShowOne(true);
            setShowTwo(false);
            setShowThree(false);
        }

        if (scrollY >= (window.innerHeight * 0.5 - 200)) {
            setShowOne(false);
            setShowTwo(true);
            setShowThree(false);
        }

        if (scrollY >= (window.innerHeight * 1.5 - 200)) {
            setShowOne(false);
            setShowTwo(false);
            setShowThree(true);
        }
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

    console.log(scrollY, window.innerHeight);



    return (
        <div className={styles.container}>
            <div className={styles.pageOne}>
                <div className={showOne ? styles.pageOneText : styles.hide}>
                    이 공간은<br />
                    첫번째 페이지<br />
                    공간입니다.
                </div>
            </div>

            <div className={styles.pageTwo}>
                <div className={showTwo ? styles.pageTwoText : styles.hide}>
                    이 공간은<br />
                    두번째 페이지<br />
                    공간입니다.
                </div>
            </div>

            <div className={styles.pageThree}>
                <div className={showThree ? styles.pageThreeText : styles.hide}>
                    이 공간은<br />
                    세번째 페이지<br />
                    공간입니다.
                </div>
            </div>
        </div >
    );
}

export default TempHome;