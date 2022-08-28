import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from "axios";

import styles from './CardInfo.module.css';



function CardInfo() {
    let { card_code } = useParams();
    const [loading, setLoading] = useState(true);
    const [cardInfo, setCardInfo] = useState({
        benefits:[{}],
        fee:[{}],
        category:[{}],
        card:[{}],
    });

    const [like, setLike] = useState(false);

    useEffect(() => {
        getCardInfo();
    }, []);


    const getCardInfo = () => {
        const accessToken = localStorage.getItem("accessToken");

        const option = {
            method: "GET",
            url: "/card/" + card_code,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        axios(option).then(({ data }) => {
            setTimeout(() => {
                setCardInfo(data);
                setLoading(false);
            }, 500);
        });
    };

    console.log(cardInfo)

    function benefitParser(type, numberOne, numberTwo) {
        if (type === "PBD") { return numberOne + "% 청구 할인"; }
        else if (type === "PID") { return numberOne + "% 즉시 할인"; }
        else if (type === "PND") { return numberOne + "% 할인"; }
        else if (type === "PCB") { return numberOne + "% 캐시백"; }
        else if (type === "PGP") { return numberOne + "% 포인트/마일리지 적립"; }
        else if (type === "WBD") { return numberOne + "원 청구 할인"; }
        else if (type === "WID") { return numberOne + "원 즉시 할인"; }
        else if (type === "WND") { return numberOne + "원 할인"; }
        else if (type === "WCB") { return numberOne + "원 캐시백"; }
        else if (type === "FGP") { return numberOne + "원당" + numberTwo + "포인트/마일리지 적립"; }
        else if (type === "FBD") { return numberOne + "원당" + numberTwo + "원 청구 할인"; }
        else if (type === "FID") { return numberOne + "원당" + numberTwo + "원 즉시 할인"; }
        else if (type === "FND") { return numberOne + "원당" + numberTwo + "원 할인"; }
        else if (type === "NGP") { return numberOne + "포인트/마일리지 적립"; }
        else if (type === "LBD") { return "1리터당" + numberOne + "원 청구 할인"; }
        else if (type === "LID") { return "1리터당" + numberOne + "원 즉시 할인"; }
        else if (type === "LND") { return "1리터당" + numberOne + "원 할인"; }
        else if (type === "LGP") { return "1리터당" + numberOne + "포인트/마일리지 적립"; }
        else if (type === "LCB") { return "1리터당" + numberOne + "원 캐시백"; }
    }

    function typeParser(type) {
        if (type === "credit\r" || type === "credit") { return "신용카드" }
        else if (type === "check\r" || type === "check") { return "체크카드" }
        else if (type === "hybrid\r" || type === "hybrid") { return "하이브리드 카드" }
    }

    function PaySystemElements({ paySystemKor, paySystemEng, paySystemFee }) {
        return (
            <div className={styles.paySystemElements}>
                <img className={styles.paySystemImage}
                    alt={paySystemEng}
                    src={process.env.PUBLIC_URL + "/images/paysystem_logo/left_aligned/" + paySystemEng + ".png"} />

                <label className={styles.paySystemName}>
                    {paySystemKor}
                </label>

                <label className={styles.paySystemFee}>
                    {paySystemFee}원
                </label>
            </div>
        )
    }

    function BenefitElements({ brandNameKor, brandNameEng, type, numberOne, numberTwo }) {
        return (
            <div className={styles.benefitElements}>
                <img
                    className={styles.benefitImage}
                    alt="brands"
                    src={process.env.PUBLIC_URL + "/images/brands_logo/" + brandNameEng + ".png"} />

                <label className={styles.benefitName}>
                    {brandNameKor}
                </label>

                <label className={styles.benefitInfo}>
                    {benefitParser(type, numberOne, numberTwo)}
                </label>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.backgroundZone}>
                <div className={styles.cardZone}>
                    <img
                        className={styles.cardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + "/images/card_images/" + card_code + ".png"} />

                    <div className={styles.cardName}>
                        {card_code}
                    </div>

                    <div className={styles.cardType}>
                        신용카드 &nbsp; │
                        <img
                            className={styles.cardCompanyImage}
                            alt="cards"
                            src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/kb.png"} />
                        <br /><br />
                    </div>
                </div>



                <div className={styles.mainText1}>
                    연회비
                </div>

                <div className={styles.paySystemZone}>
                    <PaySystemElements paySystemKor="마스터카드" paySystemEng="ma" paySystemFee="20000" />
                    <PaySystemElements paySystemKor="마스터카드" paySystemEng="ma" paySystemFee="20000" />
                    <PaySystemElements paySystemKor="마스터카드" paySystemEng="ma" paySystemFee="20000" />
                    <PaySystemElements paySystemKor="마스터카드" paySystemEng="ma" paySystemFee="20000" />
                    <PaySystemElements paySystemKor="마스터카드" paySystemEng="ma" paySystemFee="20000" />
                </div>



                <div className={styles.mainText2}>
                    브랜드 및 혜택
                </div>

                <div className={styles.benefitsZone}>
                    <div className={styles.benefitZoneCategoies}>
                        통신
                    </div>

                    <div className={styles.benefitZoneBrands}>
                        <BenefitElements brandNameKor="SK텔레콤" brandNameEng="communication_skt" type="WCB" numberOne={1000} />
                        <BenefitElements brandNameKor="SK텔레콤" brandNameEng="communication_skt" type="WCB" numberOne={1000} />
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    <div className={styles.benefitZoneCategoies}>
                        카페 & 베이커리
                    </div>

                    <div className={styles.benefitZoneBrands}>
                        <BenefitElements brandNameKor="SK텔레콤" brandNameEng="communication_skt" type="WCB" numberOne={1000} />
                        <BenefitElements brandNameKor="SK텔레콤" brandNameEng="communication_skt" type="WCB" numberOne={1000} />
                    </div>
                </div>




                <div className={styles.mainText3}>
                    안내 사항
                </div>

                <div className={styles.caution}>
                    <br />
                    해당 페이지에서 안내하는 혜택은 실제 카드사에서 제공하는 혜택과 다를수 있습니다.<br />
                    혜택은 전원실적과 특정 조건 및 상황에 따라 다르게 제공되거나 제공되지 않을 수 있습니다.<br />
                    연회비는 결제사의 상황에 따라 지원이 중단되거나 변동될 수 있습니다.<br /><br />

                    카드사의 상황에 따라 신규 발급 또는 가입이 중단될 수 있습니다.<br /><br />

                    카드의 상세한 정보와 자세한 안내 사항은 각 카드사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br />
                    결제사의 상세한 정보와 자세한 안내 사항은 각 결제사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br /><br />

                    국민은행 홈페이지 │ <a className={styles.cautionHighlight}>www.kbstar.com</a><br />
                    국민은행 고객센터 │ <a className={styles.cautionHighlight}>1588-9999</a><br /><br />

                    VISA 홈페이지 │ <a className={styles.cautionHighlight}>ww.visakorea.com</a><br />
                    Mastercard 홈페이지 │ <a className={styles.cautionHighlight}>www.mastercard.co.kr</a><br />
                    UnionPay 홈페이지 │ <a className={styles.cautionHighlight}>www.unionpayintl.com/kr</a><br />
                </div>
            </div>
        </div>
    );
}

export default CardInfo;