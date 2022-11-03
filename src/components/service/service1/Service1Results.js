import { useNavigate } from "react-router";
import { useState } from "react";

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
    



    function BenefitElements(props) {
        return (
            <div className={styles.brandsZone}>
                <img
                    className={styles.brandImage}
                    alt="brands"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/brands_logo/" +
                        result.bestCardBenefits[props.order].brandName +
                        ".png"
                    }
                />

                <div className={styles.brandBenefitName}>
                    {result.bestCardBenefits[props.order].brandNameKor}
                </div>

                <div className={styles.brandBenefitInfo}>
                    {benefitParser(
                        result.bestCardBenefits[props.order].feeType,
                        result.bestCardBenefits[props.order].numberOne,
                        result.bestCardBenefits[props.order].numberTwo
                    )}
                </div>
            </div>
        );
    }



    function CardElements(props) {
        return (
            <div
                className={styles.moreCardsZone}
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
                    <div className={styles.backgroundZone}>
                        <div className={styles.bestCardZone}>
                            <img className={styles.bestCardImage} alt="cards" src={process.env.PUBLIC_URL + "/images/card_images/" + result.topTenCards[0].id + ".png"} />
                            <div className={styles.bestCardName}>
                                {result.topTenCards[0].name}
                            </div>

                            <div>
                                <label className={styles.bestCardType}>
                                    {typeParser(result.topTenCards[0].type)}
                                </label>

                                <img className={styles.bestCardCompanyImage} alt="cards" src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + result.topTenCards[0].company_eng + ".png"} />
                            </div>
                        </div>
                    </div>



                    <div className={styles.subText}>
                        맞춤 혜택
                    </div>

                    <div className={styles.selectedBrandsContainer}>
                        <div className={styles.selectedBrandsContainerLeft}>
                            <div className={styles.selectedBrandsContainerLeftTop}>
                                <div className={styles.selectedBrandsContainerLeftType}>
                                    포함된 혜택
                                </div>

                                <div className={styles.selectedBrandsContainerLeftValue}>
                                    {matched}
                                </div>
                            </div>

                            <div className={styles.selectedBrandsContainerLeftBottom}>
                                <div className={styles.selectedBrandsContainerLeftType}>
                                    선택한 모든 혜택
                                </div>

                                <div className={styles.selectedBrandsContainerLeftValue}>
                                    {selectedBrands.length}
                                </div>
                            </div>
                        </div>

                        <div className={styles.selectedBrandsContainerRight}>
                            <Slider
                                {...{
                                    dots: false,
                                    arrows: false,
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    speed: 3000,
                                    autoplaySpeed: 0,
                                    pauseOnHover: false,
                                }}
                            >
                                {
                                    selectedBrands.map((current) => (
                                        <div className={styles.selectedBrandsContainerRightElements}>
                                            <img
                                                className={styles.selectedBrandsImage}
                                                alt="brands"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/images/brands_logo/" +
                                                    current +
                                                    ".png"
                                                }
                                            />

                                            <div className={styles.selectedBrandsName}>
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

                    {/* {
                        selectedBrands.map((current) => (
                            <div className={styles.selectedBrandsContainerElements}>
                                <div className={styles.selectedBrandsContainerBrands}>
                                    {brandParser(current)}
                                </div>

                                <div className={styles.selectedBrandsContainerIncluded}>
                                    {cardsBrands.includes(current) ? "true" : "false"}
                                </div>
                            </div>
                        ))
                    } */}

                    <div className={styles.subText}>
                        카드 전체 혜택
                    </div>

                    {result.bestCardBenefits.map((current, index) => (
                        <BenefitElements order={index} />
                    ))}



                    <div className={styles.subText}>
                        이 카드는 어때요?
                    </div>

                    <div className={styles.moreCardsRow}>
                        <CardElements order={1} />
                        <CardElements order={2} />
                        <CardElements order={3} />
                        <CardElements order={4} />
                    </div>

                    <div className={styles.extraButtonsZone}>
                        <button className={styles.toMoreCardsButton} onClick={() => {
                            navigate("/service1/results/more");
                        }}>
                            더 많은 카드 보기
                        </button>
                        <br />
                        <br />

                        <button className={styles.goBackButton} onClick={() => {
                            navigate("/service1");
                        }}>
                            혜택 다시 선택하기
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Service1Results;