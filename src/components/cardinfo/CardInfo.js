import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import styles from './CardInfo.module.css';

import PaySystem from './PaySystem';
import Benefit from './Benefit';



function CardInfo() {
    let { card_code } = useParams();

    const [cards, setCards] = useState({
        cardAll: [{}],
    });

    const [like, setLike] = useState(false);

    useEffect(() => {
        fetch("/cards")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);


    return (
        <div>
            <div className={styles.cardInfoZone}>
                <div className={styles.cardInfoZone1}>
                    <div>
                        <img
                            alt="cards"
                            className={styles.cardImage}
                            src={process.env.PUBLIC_URL + "/images/card_images/" + card_code + ".png"} />
                    </div>
                </div>

                <div className={styles.cardInfoZone2}>
                    <div className={styles.cardName}>
                        {/* {cards?.cardAll[cards?.cardAll.findIndex(x => x.id === Number(card_code))].name} */}

                        {card_code}
                    </div>

                    <div className={styles.cardCompanyZone}>
                        <div className={styles.cardCompanyName}>
                            카드사
                        </div>

                        <div className={styles.cardCompanySeperator}>
                            │
                        </div>

                        <div className={styles.cardCompanyLogo}>
                            카드사 로고
                        </div>
                    </div>

                    <div>
                        <button className={styles.moreInfoButton} onClick={() => {
                            alert("준비중")
                        }}>
                            상세 정보 보기
                        </button>

                        <button className={styles.likeButton} onClick={() => {
                            setLike(!like);
                        }}> {like ? "♡" : "♥"}
                            찜하기
                        </button>
                    </div>
                </div>
            </div>



            <div className={styles.categoryZone}>
                <div className={styles.categoryName}>연회비</div>
            </div>
            <hr />

            <div className={styles.paySystemRow}>
                <PaySystem paySystemName="Mastercard" paySystemAmount="20000" />
                <PaySystem paySystemName="Mastercard" paySystemAmount="20000" />
                <PaySystem paySystemName="Mastercard" paySystemAmount="20000" />
            </div>
            <br />

            <div className={styles.categoryZone}>
                <div className={styles.categoryName}>혜택</div>
            </div>
            <hr />

            <div className={styles.benefitsZone}>
                <div className={styles.zone1}>
                    교통
                </div>

                <div className={styles.zone2}>
                    <Benefit benefitNameKor="크리스피크림" benefitNameEng="cafebakery_krispykreme" benefitInfo="5% 캐시백" />
                    <Benefit benefitNameKor="크리스피크림" benefitNameEng="cafebakery_krispykreme" benefitInfo="5% 캐시백" />
                    <Benefit benefitNameKor="크리스피크림" benefitNameEng="cafebakery_krispykreme" benefitInfo="5% 캐시백" />
                    <Benefit benefitNameKor="크리스피크림" benefitNameEng="cafebakery_krispykreme" benefitInfo="5% 캐시백" />
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className={styles.categoryZone}>
                <div className={styles.categoryName}>안내사항</div>
            </div>
            <hr />

            <div className={styles.caution}>
                <br />
                해당 페이지에서 안내하는 혜택은 실제 카드사에서 제공하는 혜택과 다를수 있습니다.<br />
                혜택은 전원실적과 특정 조건 및 상황에 따라 다르게 제공되거나 제공되지 않을 수 있습니다.<br />
                연회비는 결제사의 상황에 따라 지원이 중단되거나 변동될 수 있습니다.<br /><br />

                카드사의 상황에 따라 신규 발급 또는 가입이 중단될 수 있습니다.<br /><br />

                카드의 상세한 정보와 자세한 안내 사항은 각 카드사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br />
                결제사의 상세한 정보와 자세한 안내 사항은 각 결제사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br /><br />

                우리은행 홈페이지 │ <a className={styles.cautionHighlight}>www.kbstar.com</a><br />
                우리은행 고객센터 │ <a className={styles.cautionHighlight}>1588-9999</a><br /><br />

                VISA 홈페이지 │ <a className={styles.cautionHighlight}>ww.visakorea.com</a><br />
                Mastercard 홈페이지 │ <a className={styles.cautionHighlight}>www.mastercard.co.kr</a><br />
                UnionPay 홈페이지 │ <a className={styles.cautionHighlight}>www.unionpayintl.com/kr</a><br />
            </div>
        </div>
    );
}

export default CardInfo;