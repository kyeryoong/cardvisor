import styles from './Service1Results.module.css';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';


function Service1Results() {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    const [cards, setCards] = useState({
        topTenCards: [{}],
        bestCardBenefits: [{}],
    });

    useEffect(() => {
        fetch("/results")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);



    function benefitParser(feeType, numberOne, numberTwo) {
        if (feeType === "PBD") { return numberOne + "% 청구 할인"; }
        else if (feeType === "PID") { return numberOne + "% 즉시 할인"; }
        else if (feeType === "PND") { return numberOne + "% 할인"; }
        else if (feeType === "PCB") { return numberOne + "% 캐시백"; }
        else if (feeType === "PGP") { return numberOne + "% 포인트/마일리지 적립"; }
        else if (feeType === "WBD") { return numberOne + "원 청구 할인"; }
        else if (feeType === "WID") { return numberOne + "원 즉시 할인"; }
        else if (feeType === "WND") { return numberOne + "원 할인"; }
        else if (feeType === "WCB") { return numberOne + "원 캐시백"; }
        else if (feeType === "FGP") { return numberOne + "원당" + numberTwo + "포인트/마일리지 적립"; }
        else if (feeType === "FBD") { return numberOne + "원당" + numberTwo + "원 청구 할인"; }
        else if (feeType === "FID") { return numberOne + "원당" + numberTwo + "원 즉시 할인"; }
        else if (feeType === "FND") { return numberOne + "원당" + numberTwo + "원 할인"; }
        else if (feeType === "NGP") { return numberOne + "포인트/마일리지 적립"; }
        else if (feeType === "LBD") { return "1리터당" + numberOne + "원 청구 할인"; }
        else if (feeType === "LID") { return "1리터당" + numberOne + "원 즉시 할인"; }
        else if (feeType === "LND") { return "1리터당" + numberOne + "원 할인"; }
        else if (feeType === "LGP") { return "1리터당" + numberOne + "포인트/마일리지 적립"; }
        else if (feeType === "LCB") { return "1리터당" + numberOne + "원 캐시백"; }
    }

    function typeParser(type) {
        if (type === "credit\r" || type === "credit") { return "신용카드" }
        else if (type === "check\r" || type === "check") { return "체크카드" }
        else if (type === "hybrid\r" || type === "hybrid") { return "하이브리드 카드" }
    }

    function BrandElements(props) {
        return (
            <div className={styles.brandsZone}>
                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + "/images/brands_logo/" + cards?.bestCardBenefits[props.order]?.brandName + ".png"} />
                </div>

                <div className={styles.brandBenefitZone}>
                    <div className={styles.brandBenefitName}>
                        {cards?.bestCardBenefits[props.order]?.brandNameKor}
                    </div>

                    <div className={styles.brandBenefitInfo}>
                        {benefitParser(cards?.bestCardBenefits[props.order]?.feeType, cards?.bestCardBenefits[props.order]?.numberOne, cards?.bestCardBenefits[props.order]?.numberTwo)}
                    </div>
                </div>
            </div>
        )
    }

    function CardElements(props) {
        return (
            <div className={styles.moreCardsZone}>
                <img
                    className={styles.moreCardsImage}
                    alt="cards"
                    src={process.env.PUBLIC_URL + "/images/card_images/" + cards?.topTenCards[props.order]?.id + ".png"} />

                <img
                    className={styles.moreCardsCompanyImage}
                    alt="cards"
                    src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/" + cards?.topTenCards[props.order]?.company_eng + ".png"} />

                <div className={styles.moreCardsName}>
                    {cards?.topTenCards[props.order]?.name}
                </div>
            </div>
        )
    }



    return (
        <div>
            <div className={styles.backgroundZone}>
                <div className={styles.bestCardZone}>
                    <img
                        className={styles.bestCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + "/images/card_images/" + cards?.topTenCards[0]?.id + ".png"} />


                    <div className={styles.bestCardName}>
                        {cards?.topTenCards[0]?.name}
                    </div>

                    <div className={styles.bestCardType}>
                        {typeParser(cards?.topTenCards[0]?.type)} &nbsp; │
                        <img
                            className={styles.bestCardCompanyImage}
                            alt="cards"
                            src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + cards?.topTenCards[0]?.company_eng + ".png"} />
                        <br /><br />
                    </div>

                    <div className={styles.bestCardButtonsZone}>
                        <button className={styles.bestCardMoreInfoButton} onClick={() => {
                            window.open("/cardinfo/" + cards?.topTenCards[0]?.id);
                        }}>
                            <span className={styles.bestCardMoreInfoButtonText}>
                                상세정보 보기
                            </span>
                        </button>

                        <button className={styles.toCardCompanyPageButton} onClick={() => {
                            window.open("https://www.banksalad.com/cards/" + cards?.topTenCards[0]?.id + "/issue");
                        }}>
                            <span className={styles.toCardCompanyPageButtonText}>
                                카드사 홈페이지
                            </span>
                        </button>

                        {/* <button className={styles.likeButton} onClick={() => {
                        setLike(!like);
                    }}> {like ? "♡" : "♥"}
                        찜하기
                    </button> */}
                    </div>
                </div>
            </div>



            <div className={styles.subText}>
                주요 맟춤 혜택
            </div>

            <div className={styles.brandsRow}>
                <BrandElements order={0} />
                <BrandElements order={1} />
                <BrandElements order={2} />
                <BrandElements order={3} />
                <BrandElements order={4} />
            </div>



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
                <br /><br />

                <button className={styles.goBackButton} onClick={() => {
                    navigate(-1);
                }}>
                    혜택 다시 선택하기
                </button>
            </div>
        </div>
    );
}

export default Service1Results;