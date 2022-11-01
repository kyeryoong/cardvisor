import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material'

import styles from './Main.module.css';



function CardElements({ number, name, comment }) {
    return (
        <div className={styles.cardSliderPage}>
            <div className={styles.cardSliderLeft}>
                <img alt="card" className={styles.cardSliderImage} src={process.env.PUBLIC_URL + "/images/card_images/" + number + ".png"} />
            </div>

            <div className={styles.cardSliderRight}>
                <div>
                    <div className={styles.cardSliderName}>
                        {name}
                    </div>

                    <div className={styles.cardSliderComment}>
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    )
}



function Item({ number, name }) {
    return (
        <Paper>
            <h2>{number}</h2>
            <p>{name}</p>
        </Paper>
    )
}



function Main() {
    const navigate = useNavigate();

    const [hover, setHover] = useState(false);


    return (
        <div>
            <div className={styles.containerHeader}>
                카드 추천받기
            </div>

            <div className={styles.containerTop}>
                <div className={styles.containerTopLeft}>
                    <div
                        className={styles.containerTopButton}
                        onMouseEnter={() => { setHover(1) }}
                        onMouseLeave={() => { setHover(false) }}
                        onClick={() => { navigate("/service1") }}
                    >
                        <img
                            alt="image"
                            src={process.env.PUBLIC_URL + "/images/menu_logo/1_color.png"}
                            className={hover === 1 ? styles.buttonImageWhite : styles.buttonImageColor}
                        />
                        브랜드 선택하기
                        <img alt="arrow" src={process.env.PUBLIC_URL + "/images/icons/arrow_right_black.png"} className={styles.buttonArrow} />
                    </div>

                    <div
                        className={styles.containerTopButton}
                        onMouseEnter={() => { setHover(2) }}
                        onMouseLeave={() => { setHover(false) }}
                        onClick={() => { navigate("/service2") }}
                    >
                        <img
                            alt="image"
                            src={process.env.PUBLIC_URL + "/images/menu_logo/2_color.png"}
                            className={hover === 2 ? styles.buttonImageWhite : styles.buttonImageColor}
                        />
                        금액 입력하기
                        <img alt="arrow" src={process.env.PUBLIC_URL + "/images/icons/arrow_right_black.png"} className={styles.buttonArrow} />
                    </div>

                    <div
                        className={styles.containerTopButton}
                        onMouseEnter={() => { setHover(3) }}
                        onMouseLeave={() => { setHover(false) }}
                        onClick={() => { navigate("/list") }}
                    >
                        <img
                            alt="image"
                            src={process.env.PUBLIC_URL + "/images/menu_logo/3_color.png"}
                            className={hover === 3 ? styles.buttonImageWhite : styles.buttonImageColor}
                        />
                        모든 카드 보기
                        <img alt="arrow" src={process.env.PUBLIC_URL + "/images/icons/arrow_right_black.png"} className={styles.buttonArrow} />
                    </div>
                </div>

                <div className={styles.containerTopRight}>
                    {
                        !hover

                        &&

                        <div className={styles.cardSliderContainer}>
                            <Carousel
                                autoPlay={true}
                                indicators={false}
                            >
                                <CardElements number={4073} name="현대카드M BOOST" comment="버스, 지하철, 택시 교통 혜택 제공" />
                                <CardElements number={4070} name="현대카드Z Ontact" comment="넷플릭스, 왓챠, 유튜브 프리미엄 30% 할인" />
                                <CardElements number={3511} name="가온올포인트 Check" comment="16개 카페 브랜드 포인트/마일리지 적립" />
                                <CardElements number={3790} name="쇼핑앤조이카드" comment="온라인 쇼핑몰 5000원 할인" />
                            </Carousel>
                        </div>
                    }

                    {
                        hover === 1

                        &&

                        <div className={styles.containerTopRight1}>
                            <div className={styles.containerTopRightZone}>
                                <img alt="image" src={process.env.PUBLIC_URL + "/images/menu_logo/1_filled.png"} className={styles.containerImage} />
                                <div className={styles.containerWord}>
                                    혜택과 브랜드를 빠르고 간편하게
                                </div>
                            </div>
                        </div>
                    }

                    {
                        hover === 2

                        &&

                        <div className={styles.containerTopRight2}>
                            <div className={styles.containerTopRightZone}>
                                <img alt="image" src={process.env.PUBLIC_URL + "/images/menu_logo/2_filled.png"} className={styles.containerImage} />
                                <div className={styles.containerWord}>
                                    금액을 입력하여 소비 패턴 분석
                                </div>
                            </div>
                        </div>
                    }

                    {
                        hover === 3

                        &&

                        <div className={styles.containerTopRight3}>
                            <div className={styles.containerTopRightZone}>
                                <img alt="image" src={process.env.PUBLIC_URL + "/images/menu_logo/3_filled.png"} className={styles.containerImage} />
                                <div className={styles.containerWord}>
                                    모든 카드를 한 꺼번에 보기
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className={styles.containerHeader}>
                최근 추천받은 카드
            </div>

            <div className={styles.containerBottom}>
                <div className={styles.recommendedCardElements}>
                    <div>
                        <div className={styles.recommendedCardImage}>

                        </div>

                        <div className={styles.recommendedCardName}>
                            카드 이름
                        </div>
                    </div>
                </div>

                <div className={styles.recommendedCardElements}>
                    <div>
                        <div className={styles.recommendedCardImage}>

                        </div>

                        <div className={styles.recommendedCardName}>
                            카드 이름
                        </div>
                    </div>
                </div>

                <div className={styles.recommendedCardElements}>
                    <div>
                        <div className={styles.recommendedCardImage}>

                        </div>

                        <div className={styles.recommendedCardName}>
                            카드 이름
                        </div>
                    </div>
                </div>

                <div className={styles.recommendedCardElements}>
                    <div>
                        <div className={styles.recommendedCardImage}>

                        </div>

                        <div className={styles.recommendedCardName}>
                            카드 이름
                        </div>
                    </div>
                </div>

                <div className={styles.recommendedCardElements}>
                    <div>
                        <div className={styles.recommendedCardImage}>

                        </div>

                        <div className={styles.recommendedCardName}>
                            카드 이름
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;