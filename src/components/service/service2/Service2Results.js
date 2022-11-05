import { useNavigate } from "react-router";
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { benefitParser, brandParser, typeParser } from '../../Parser';

import styles from "./Service2Results.module.css";



function Service2Results() {
    const navigate = useNavigate();

    const [result, setResult] = useState(() => {
        const item = localStorage.getItem("servicetwo");
        const parsedItem = JSON.parse(item);
        return parsedItem || {};
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
                            navigate("/service2/results/more");
                        }}>
                            더 많은 카드 보기
                        </button>
                    </div>

                    <button className={styles.goToCardInfoButton} onClick={() => {
                        navigate("/cardinfo/" + result.topTenCards[0].id)
                    }}>
                        카드 상세 정보 보기
                    </button>
                </div>
            }
        </div>
    );
};

export default Service2Results;