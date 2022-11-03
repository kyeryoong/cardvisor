import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { benefitParser, brandParser, typeParser } from '../../Parser';

import styles from "./Service1Results.module.css";



function Service1Results() {
    const navigate = useNavigate();

    const [result, setResult] = useState(() => {
        const item = localStorage.getItem("serviceone");
        const parsedItem = JSON.parse(item);
        return parsedItem || {};
    });

    const selectedBrands = JSON.parse(localStorage.getItem("selectedBrands"));
    var matched = 0

    var cardsBrands = [];
    
    const [width, setWidth] = useState(window.innerWidth);
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        window.addEventListener("resize", () => { 
            setWidth(window.innerWidth); 

            if (width > 1000) {
                setSlidesToShow(4);
            }

            else if (width > 600) {
                setSlidesToShow(3);
            }

            else if (width > 400) {
                setSlidesToShow(2);
            }

            else {
                setSlidesToShow(1);
            }
        });
    });



    function BenefitElements(props) {
        return (
            <div className={styles.benefitElementsContainer}>
                <img
                    className={styles.benefitLogo}
                    alt="brands"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/brands_logo/" +
                        result.bestCardBenefits[props.order].brandName +
                        ".png"
                    }
                />

                <div className={styles.benefitInfo}>
                    <div className={styles.benefitName}>
                        {result.bestCardBenefits[props.order].brandNameKor}
                    </div>

                    <div className={styles.benefitValue}>
                        {benefitParser(
                            result.bestCardBenefits[props.order].feeType,
                            result.bestCardBenefits[props.order].numberOne,
                            result.bestCardBenefits[props.order].numberTwo
                        )}
                    </div>
                </div>
            </div>
        );
    }



    function CardElements(props) {
        return (
            <div
                className={styles.moreCardsElements}
                onClick={() => {
                    navigate("/cardinfo/" + result.topTenCards[props.order].id);
                }}
            >
                <img
                    className={styles.moreCardsImage}
                    alt="cards"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/card_images/" +
                        result.topTenCards[props.order].id +
                        ".png"
                    }
                />

                <img
                    className={styles.moreCardsCompanyImage}
                    alt="cards"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/card_logo/center_aligned/" +
                        result.topTenCards[props.order].company_eng +
                        ".png"
                    }
                />

                <div className={styles.moreCardsName}>
                    {result.topTenCards[props.order].name}
                </div>
            </div>
        );
    }

    for (var i = 0; i < result.bestCardBenefits.length; i++) {
        cardsBrands.push(result.bestCardBenefits[i].brandName);
    }

    for (i = 0; i < selectedBrands.length; i++) {
        if (cardsBrands.includes(selectedBrands[i])) {
            matched = matched + 1;
        }
    }



    return (
        <div>
            {
                <div>
                    <div className={styles.bestCardContainer}>
                        <img className={styles.bestCardImage} alt="cards" src={process.env.PUBLIC_URL + "/images/card_images/" + result.topTenCards[0].id + ".png"} />

                        <div className={styles.bestCardBottom}>
                            <div className={styles.bestCardName}>
                                {result.topTenCards[0].name}
                            </div>


                            <div className={styles.bestCardInfo}>
                                <div className={styles.bestCardType}>
                                    {typeParser(result.topTenCards[0].type)}
                                </div>

                                <img className={styles.bestCardCompanyLogo} alt="cards" src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + result.topTenCards[0].company_eng + ".png"} />
                            </div>
                        </div>
                    </div>

                    <button className={styles.goToCardInfoButton} onClick={() => {
                        navigate("/cardinfo/" + result.topTenCards[0].id)
                    }}>
                        카드 상세 정보 보기
                    </button>

                    <div className={styles.subText}>
                        맞춤 혜택
                    </div>

                    <div className={styles.selectedContainer}>
                        <div className={styles.selectedContainerLeft}>
                            <div className={styles.selectedContainerLeftTop}>
                                <div className={styles.selectedContainerLeftType}>
                                    포함된 혜택
                                </div>

                                <div className={styles.selectedContainerLeftValue}>
                                    {matched}
                                </div>
                            </div>

                            <div className={styles.selectedContainerLeftBottom}>
                                <div className={styles.selectedContainerLeftType}>
                                    선택한 모든 혜택
                                </div>

                                <div className={styles.selectedContainerLeftValue}>
                                    {selectedBrands.length}
                                </div>
                            </div>
                        </div>

                        <div className={styles.selectedContainerRight}>
                            <Slider
                                {...{
                                    dots: false,
                                    arrows: false,
                                    infinite: true,
                                    slidesToShow: slidesToShow,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    speed: 3000,
                                    autoplaySpeed: 0,
                                    pauseOnHover: false,
                                }}
                            >
                                {
                                    selectedBrands.map((current) => (
                                        <div className={styles.selectedContainerRightElements}>
                                            <img
                                                className={styles.selectedLogo}
                                                alt="brands"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/images/brands_logo/" +
                                                    current +
                                                    ".png"
                                                }
                                            />

                                            <div className={styles.selectedName}>
                                                {brandParser(current)}
                                            </div>


                                            {
                                                cardsBrands.includes(current) 
                                                
                                                && 
                                                
                                                <div className={styles.match}>
                                                    MATCH
                                                </div> 
                                            }
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>



                    <div className={styles.subText}>
                        카드 전체 혜택
                    </div>

                    {result.bestCardBenefits.map((current, index) => (
                        <BenefitElements order={index} />
                    ))}



                    <div className={styles.subText}>
                        이 카드는 어때요?
                    </div>

                    <div className={styles.moreCardsContainer}>
                        <div className={styles.moreCardsRows}>
                            <CardElements order={1} />
                            <CardElements order={2} />
                            <CardElements order={3} />
                            <CardElements order={4} />
                        </div>

                        <button className={styles.moreCardsButton} onClick={() => {
                            navigate("/service1/results/more");
                        }}>
                            더 많은 카드 보기
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Service1Results;