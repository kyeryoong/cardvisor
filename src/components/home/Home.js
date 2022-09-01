import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import styles from './Home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
    const navigate = useNavigate();

    const [scrollY, setScrollY] = useState(0);
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);

        if (scrollY < (window.innerHeight * 0.5)) {
            setShowOne(true);
            setShowTwo(false);
            setShowThree(false);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 0.5) && scrollY < (window.innerHeight * 1.5)) {
            setShowOne(false);
            setShowTwo(true);
            setShowThree(false);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 1.5) && scrollY < (window.innerHeight * 2.5)) {
            setShowOne(false);
            setShowTwo(false);
            setShowThree(true);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 2.5)) {
            setShowOne(false);
            setShowTwo(false);
            setShowThree(false);
            setShowFour(true);
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

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };



    return (
        <section>
            <div className={styles.container}>
                <div className={styles.pageOneBackground}>
                    <img alt="home" src={process.env.PUBLIC_URL + "/images/background.png"} />
                </div>

                <div className={styles.pageOne}>
                    <div className={showOne ? styles.pageOneShow : styles.pageOneHide}>
                        <div className={styles.pageOneText}>
                            사용자 소비 패턴 기반<br />
                            카드 추천 서비스<br />
                        </div>

                        <img alt="home" className={styles.pageOneLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_nomargin_white.png"} />

                        <div className={styles.pageOneStartZone}>
                            <div className={styles.pageOneStartText}>
                                지금 바로
                            </div>

                            <button className={styles.pageOneStartButton} onClick={() => {
                                navigate("/login");
                            }}>
                                시작하기
                            </button>
                        </div>

                        <div className={styles.pageOneScroll}>
                            자세히 보기<br />

                            <img alt="arrow" className={styles.pageOneScrollArrow} src={process.env.PUBLIC_URL + "/images/icons/arrow_down_blue.png"} />
                        </div>
                    </div>
                </div>



                <div className={styles.pageTwo}>
                    <div className={showTwo ? styles.pageTwoAppear : styles.hide}>
                        원하는 브랜드를 선택해서<br />
                        카드를 추천받을 수 있어요.
                    </div>

                    <div className={styles.pageTwoCarousel}>
                        <Slider {...settings}>
                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/1.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/2.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/3.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/4.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/5.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/6.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/7.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/8.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/9.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/10.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/11.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/12.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/13.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/14.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/15.png"} />
                        </Slider>
                    </div>
                </div>



                <div className={styles.pageThree}>
                    <div className={showThree ? styles.pageThreeAppear : styles.hide}>
                        브랜드마다 금액을 입력하면<br />
                        더 상세한 정보를 받을 수 있어요.
                    </div>

                    <img alt="home" className={showThree ? styles.pageThreeGraphicShow : styles.pageThreeGraphicHide} src={process.env.PUBLIC_URL + "/images/graphics/7.png"} />
                </div>



                <div className={styles.pageFour}>
                    <div className={showFour ? styles.pageFourAppear : styles.hide}>
                        카드 데이터 현황
                    </div>

                    <div className={styles.pageFourContainer}>
                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_card_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                카드
                            </div>

                            <div className={styles.pageFourValues}>
                                450
                                <span className={styles.pageFourGae}>개</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_company_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                카드사
                            </div>

                            <div className={styles.pageFourValues}>
                                15
                                <span className={styles.pageFourGae}>개</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_brands_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                브랜드
                            </div>

                            <div className={styles.pageFourValues}>
                                199
                                <span className={styles.pageFourGae}>개</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_benefits_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                혜택
                            </div>

                            <div className={styles.pageFourValues}>
                                6264
                                <span className={styles.pageFourGae}>개</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_payment_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                결제망
                            </div>

                            <div className={styles.pageFourValues}>
                                40
                                <span className={styles.pageFourGae}>개</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;