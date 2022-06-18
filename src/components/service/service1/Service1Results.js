import styles from './Service1Results.module.css';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';


function Service1Results() {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    // 5월 31일에 추천된 카드 리스트를 받기 위해 추가한 코드들 //////
    // 33번째 줄에 {cards.cards} 를 통해 잘 받은 것을 알 수 있음
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
    /////////////////////////////////////////////////////////

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
        if (type === "credit\r") { return "신용카드" }
        else if (type === "check\r") { return "체크카드" }
        else if (type === "hybrid\r") { return "하이브리드 카드" }
    }



    return (
        <div>
            <img
                className={styles.bestCardImage}
                alt="cards"
                src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[0]?.id + '.png'} />
            <br /><br />

            <div className={styles.bestCardName}>
                {cards?.topTenCards[0]?.name}
            </div>
            <br /><br />

            <div className={styles.bestCardType}>
                {typeParser(cards?.topTenCards[0]?.type)} │
                <img
                    className={styles.bestCardCompanyImage}
                    alt="cards"
                    src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards?.topTenCards[0]?.company_eng + '.png'} />
                <br /><br />
            </div>

            <div>
                <button className={styles.moreInfoButton} onClick={() => {
                    window.open("https://www.banksalad.com/cards/" + cards?.topTenCards[0]?.id + "/issue");
                }}>
                    카드사 홈페이지
                </button>

                <button className={styles.likeButton} onClick={() => {
                    setLike(!like);
                }}> {like ? '♡ ' : '♥ '}
                    찜하기
                </button>
            </div>
            <br /><br /><br /><br /><br />

            <div className={styles.subText}>
                주요 맟춤 혜택
            </div>
            <br />

            <div className={styles.brandsRow}>
                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + cards?.bestCardBenefits[0]?.brandName + '.png'} />
                </div>

                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + cards?.bestCardBenefits[1]?.brandName + '.png'} />
                </div>

                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + cards?.bestCardBenefits[2]?.brandName + '.png'} />
                </div>

                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + cards?.bestCardBenefits[3]?.brandName + '.png'} />
                </div>

                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={process.env.PUBLIC_URL + '/images/brands_logo/' + cards?.bestCardBenefits[4]?.brandName + '.png'} />
                </div>
            </div>

            <div className={styles.brandsRow}>
                <div className={styles.brandName}>{cards?.bestCardBenefits[0]?.brandNameKor}</div>
                <div className={styles.brandName}>{cards?.bestCardBenefits[1]?.brandNameKor}</div>
                <div className={styles.brandName}>{cards?.bestCardBenefits[2]?.brandNameKor}</div>
                <div className={styles.brandName}>{cards?.bestCardBenefits[3]?.brandNameKor}</div>
                <div className={styles.brandName}>{cards?.bestCardBenefits[4]?.brandNameKor}</div>
            </div>
            
            <div className={styles.brandsRow}>
                <div className={styles.brandInfo}>{benefitParser(cards?.bestCardBenefits[0]?.feeType, cards?.bestCardBenefits[0]?.numberOne, cards?.bestCardBenefits[0]?.numberTwo)}</div>
                <div className={styles.brandInfo}>{benefitParser(cards?.bestCardBenefits[1]?.feeType, cards?.bestCardBenefits[1]?.numberOne, cards?.bestCardBenefits[1]?.numberTwo)}</div>
                <div className={styles.brandInfo}>{benefitParser(cards?.bestCardBenefits[2]?.feeType, cards?.bestCardBenefits[2]?.numberOne, cards?.bestCardBenefits[2]?.numberTwo)}</div>
                <div className={styles.brandInfo}>{benefitParser(cards?.bestCardBenefits[3]?.feeType, cards?.bestCardBenefits[3]?.numberOne, cards?.bestCardBenefits[3]?.numberTwo)}</div>
                <div className={styles.brandInfo}>{benefitParser(cards?.bestCardBenefits[4]?.feeType, cards?.bestCardBenefits[4]?.numberOne, cards?.bestCardBenefits[4]?.numberTwo)}</div>
            </div>
            <br /><br /><br /><br /><br />



            <div className={styles.subText}>
                이 카드는 어때요?
            </div>
            <br />

            <div className={styles.moreCardsRow}>
                <div>
                    <img
                        className={styles.moreCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[1]?.id + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[2]?.id + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[3]?.id + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[4]?.id + '.png'} />
                </div>
            </div>

            <div className={styles.moreCardsRow}>
                <div>
                    <img
                        className={styles.moreCardCompanyImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards?.topTenCards[1]?.company_eng + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardCompanyImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards?.topTenCards[2]?.company_eng + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardCompanyImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards?.topTenCards[3]?.company_eng + '.png'} />
                </div>

                <div>
                    <img
                        className={styles.moreCardCompanyImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards?.topTenCards[4]?.company_eng + '.png'} />
                </div>
            </div>

            <div className={styles.moreCardsRow}>
                <div className={styles.moreCardName}>{cards?.topTenCards[1]?.name}</div>
                <div className={styles.moreCardName}>{cards?.topTenCards[2]?.name}</div>
                <div className={styles.moreCardName}>{cards?.topTenCards[3]?.name}</div>
                <div className={styles.moreCardName}>{cards?.topTenCards[4]?.name}</div>
            </div>
            <br /><br /><br /><br /><br />

            <div>
                <button className={styles.toMoreCardsButton} onClick={() => {
                    navigate('/service1/results/more');
                }}>
                    더 많은 카드 보기
                </button>
            </div>

            <br />

            <div>
                <button className={styles.goBackButton} onClick={() => {
                    navigate(-1);
                }}>
                    혜택 다시 선택하기
                </button>
            </div>
        </div >
    );
}

export default Service1Results;