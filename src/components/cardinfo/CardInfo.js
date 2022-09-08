import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from "axios";

import styles from './CardInfo.module.css';



function CardInfo() {
    let { card_code } = useParams();
    const [loading, setLoading] = useState(true);
    const [cardInfo, setCardInfo] = useState({
        benefits: [{}],
        fee: [{}],
        category: [{}],
        card: [{}],
    });

    const [like, setLike] = useState(false);

    useEffect(() => {
        getCardInfo();
    }, []);


    const getCardInfo = () => {
        const accessToken = localStorage.getItem("accessToken");

        const option = {
            method: "GET",
            url: "http://localhost:8080/card/" + card_code,
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

    function benefitParser(type, numberOne, numberTwo) {
        if (type === "PBD") { return numberOne + "% 청구 할인" }
        else if (type === "PID") { return numberOne + "% 즉시 할인" }
        else if (type === "PND") { return numberOne + "% 할인" }
        else if (type === "PCB") { return numberOne + "% 캐시백" }
        else if (type === "PGP") { return numberOne + "% 포인트/마일리지 적립" }
        else if (type === "WBD") { return numberOne + "원 청구 할인" }
        else if (type === "WID") { return numberOne + "원 즉시 할인" }
        else if (type === "WND") { return numberOne + "원 할인" }
        else if (type === "WCB") { return numberOne + "원 캐시백" }
        else if (type === "FGP") { return numberOne + "원당 " + numberTwo + "포인트/마일리지 적립" }
        else if (type === "FBD") { return numberOne + "원당 " + numberTwo + "원 청구 할인" }
        else if (type === "FID") { return numberOne + "원당 " + numberTwo + "원 즉시 할인" }
        else if (type === "FND") { return numberOne + "원당 " + numberTwo + "원 할인" }
        else if (type === "NGP") { return numberOne + "포인트/마일리지 적립" }
        else if (type === "LBD") { return "1리터당 " + numberOne + "원 청구 할인" }
        else if (type === "LID") { return "1리터당 " + numberOne + "원 즉시 할인" }
        else if (type === "LND") { return "1리터당 " + numberOne + "원 할인" }
        else if (type === "LGP") { return "1리터당 " + numberOne + "포인트/마일리지 적립" }
        else if (type === "LCB") { return "1리터당 " + numberOne + "원 캐시백" }
    }

    function typeParser(type) {
        if (type === "credit\r" || type === "credit") { return "신용카드" }
        else if (type === "check\r" || type === "check") { return "체크카드" }
        else if (type === "hybrid\r" || type === "hybrid") { return "하이브리드 카드" }
    }

    function feeNameParser(name) {
        if (name === "amex") { return "아메리칸 익스프레스" }
        else if (name === "amexFamily") { return "아메리칸 익스프레스(가족 전용)" }
        else if (name === "amexMobile") { return "아메리칸 익스프레스(모바일 전용)" }
        else if (name === "bc") { return "BC카드" }
        else if (name === "bcGlobal") { return "BC 글로벌" }
        else if (name === "bcDomestic") { return "BC카드(국내 전용)" }
        else if (name === "jcb") { return "JCB" }
        else if (name === "jcbOneWay") { return "JCB(One Way)" }
        else if (name === "jcbGold") { return "JCB(골드)" }
        else if (name === "jcbMobile") { return "JCB(모바일 전용)" }
        else if (name === "jcbSilver") { return "JCB(실버)" }
        else if (name === "kWorld") { return "K-WORLD" }
        else if (name === "kWorldJcb") { return "K-WORLD(JCB)" }
        else if (name === "kWorldUpi") { return "K-WORLD(UPI)" }
        else if (name === "kWorldMobile") { return "K-WORLD(모바일 전용)" }
        else if (name === "master") { return "마스터카드" }
        else if (name === "masterPlatinum") { return "마스터카드(플래티넘)" }
        else if (name === "masterFamliy") { return "마스터카드(가족 전용)" }
        else if (name === "masterGold") { return "마스터카드(골드)" }
        else if (name === "masterDomestic") { return "마스터카드(국내 전용)" }
        else if (name === "masterMobile") { return "마스터카드(모바일 전용)" }
        else if (name === "masterSilver") { return "마스터카드(실버)" }
        else if (name === "masterOverseas") { return "마스터카드(해외 전용)" }
        else if (name === "oneWay") { return "One Way" }
        else if (name === "sAnd") { return "S&" }
        else if (name === "unionPay") { return "유니온페이" }
        else if (name === "unionPayDomestic") { return "유니온페이(국내 전용)" }
        else if (name === "unionPayMobile") { return "유니온페이(모바일 전용)" }
        else if (name === "upi") { return "UPI" }
        else if (name === "urs") { return "URS" }
        else if (name === "visa") { return "비자카드" }
        else if (name === "visaPlatinum") { return "비자카드(플래티넘)" }
        else if (name === "visaFamily") { return "비자카드(가족 전용)" }
        else if (name === "visaGold") { return "비자카드(골드)" }
        else if (name === "visaDomesticAndOverseas") { return "비자카드(국내외 겸용)" }
        else if (name === "visaMobile") { return "비자카드(모바일 전용)" }
        else if (name === "visaSilver") { return "비자카드(실버)" }
        else if (name === "domestic") { return "국내 전용" }
        else if (name === "domesticFamily") { return "국내 전용(가족 전용)" }
        else if (name === "domesticMobile") { return "국내 전용(모바일 전용)" }
    }

    function feeLinkParser(name) {
        if (name === "amex") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "amexFamily") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "amexMobile") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "bc") { return "www.bccard.com" }
        else if (name === "bcGlobal") { return "www.bccard.com" }
        else if (name === "bcDomestic") { return "www.bccard.com" }
        else if (name === "jcb") { return "www.kr.jcb" }
        else if (name === "jcbOneWay") { return "www.kr.jcb" }
        else if (name === "jcbGold") { return "www.kr.jcb" }
        else if (name === "jcbMobile") { return "www.kr.jcb" }
        else if (name === "jcbSilver") { return "www.kr.jcb" }
        else if (name === "kWorld") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "kWorldJcb") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "kWorldUpi") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "kWorldMobile") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "master") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterPlatinum") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterFamliy") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterGold") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterDomestic") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterMobile") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterSilver") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterOverseas") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "oneWay") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "sAnd") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "unionPay") { return "www.unionpayintl.com/kr" }
        else if (name === "unionPayDomestic") { return "www.unionpayintl.com/kr" }
        else if (name === "unionPayMobile") { return "www.unionpayintl.com/kr" }
        else if (name === "upi") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "urs") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "visa") { return "www.visakorea.com" }
        else if (name === "visaPlatinum") { return "www.visakorea.com" }
        else if (name === "visaFamily") { return "www.visakorea.com" }
        else if (name === "visaGold") { return "www.visakorea.com" }
        else if (name === "visaDomesticAndOverseas") { return "www.visakorea.com" }
        else if (name === "visaMobile") { return "www.visakorea.com" }
        else if (name === "visaSilver") { return "www.visakorea.com" }
        else if (name === "domestic") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "domesticFamily") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
        else if (name === "domesticMobile") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    }

    function cardLinkParser(name) {
        if (name === "NH카드") { return "card.nonghyup.com" }
        else if (name === "국민카드") { return "card.kbcard.com" }
        else if (name === "기업카드") { return "www.ibk.co.kr/card/mainList.ibk" }
        else if (name === "대구은행") { return "www.dgb.co.kr" }
        else if (name === "롯데카드") { return "www.lottecard.co.kr" }
        else if (name === "부산은행") { return "www.busanbank.co.kr/ib20/mnu/FPM00001" }
        else if (name === "삼성카드") { return "www.samsungcard.com" }
        else if (name === "수협") { return "suhyup-bank.com" }
        else if (name === "신한카드") { return "www.shinhancard.com" }
        else if (name === "씨티카드") { return "www.citibank.co.kr" }
        else if (name === "우리카드") { return "www.wooricard.com" }
        else if (name === "케이뱅크") { return "www.kbanknow.com/ib20/mnu/FPMCRD000000" }
        else if (name === "하나카드") { return "www.hanacard.co.kr" }
        else if (name === "현대백화점") { return "www.ehyundai.com/newPortal/card/main.do" }
        else if (name === "현대카드") { return "www.hyundaicard.com" }
    }

    function cardPhoneNumberParser(name) {
        if (name === "NH카드") { return "1644-4000" }
        else if (name === "국민카드") { return "1588-1688" }
        else if (name === "기업카드") { return "1588-2588" }
        else if (name === "대구은행") { return "1566-5050" }
        else if (name === "롯데카드") { return "1588-8100" }
        else if (name === "부산은행") { return "1588-6200" }
        else if (name === "삼성카드") { return "1588-8700" }
        else if (name === "수협") { return "1588-1515" }
        else if (name === "신한카드") { return "1544-7000" }
        else if (name === "씨티카드") { return "1566-1000" }
        else if (name === "우리카드") { return "1588-9955" }
        else if (name === "케이뱅크") { return "1522-1155" }
        else if (name === "하나카드") { return "1800-1111" }
        else if (name === "현대백화점") { return "1588-4560" }
        else if (name === "현대카드") { return "1577-6000" }
    }

    function FeeElements({ providerName, fee }) {
        return (
            <div className={styles.feeElements}>
                <img className={styles.feeImage}
                    alt={providerName}
                    src={process.env.PUBLIC_URL + "/images/fee_logo/left_aligned/" + providerName + ".png"} />

                <div className={styles.feeInfo}>
                    <div className={styles.feeName}>
                        {feeNameParser(providerName)}
                    </div>

                    <div className={styles.feeValue}>
                        {fee === 0 ? <span>연회비 없음</span> : <span>{fee}원</span>}
                    </div>
                </div>
            </div>
        )
    }

    function BenefitElements({ nameKor, nameEng, feeType, numberOne, numberTwo }) {
        return (
            <div className={styles.benefitElements}>
                <img
                    className={styles.benefitImage}
                    alt="brands"
                    src={process.env.PUBLIC_URL + "/images/brands_logo/" + nameEng + ".png"} />

                <label className={styles.benefitName}>
                    {nameKor}
                </label>

                <label className={styles.benefitInfo}>
                    {benefitParser(feeType, numberOne, numberTwo)}
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
                        {cardInfo.card[0].name}
                    </div>

                    <div className={styles.cardType}>
                        {typeParser(cardInfo.card[0].type)} &nbsp; │
                        <img
                            className={styles.cardCompanyImage}
                            alt="cards"
                            src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + cardInfo.card[0].company_eng + ".png"} />
                        <br /><br />
                    </div>
                </div>



                <div className={styles.mainText1}>
                    연회비
                </div>

                <div className={styles.feeZone}>
                    {
                        cardInfo.fee.map(current =>
                            <FeeElements providerName={current.provider} fee={current.pay} />
                        )
                    }
                </div>



                <div className={styles.mainText2}>
                    브랜드 및 혜택
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("transport")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            교통
                        </div>
                    }


                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "transport"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("communication")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            통신
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "communication"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("mart")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            마트
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "mart"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("convstore")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            편의점
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "convstore"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("movies")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            영화
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "movies"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("entertainment")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            엔터테인먼트
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "entertainment"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("deptstore")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            백화점
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "deptstore"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("onlineshopping")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            온라인 쇼핑몰
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "onlineshopping"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("easypay")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            간편결제
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "easypay"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("cafebakery")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            카페/베이커리
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "cafebakery"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("beauty")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            뷰티
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "beauty"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("dining")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            외식
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "dining"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("books")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            도서
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "books"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("themepark")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            테마파크
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "themepark"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.benefitsZone}>
                    {
                        cardInfo.category.includes("fuel")

                        &&

                        <div className={styles.benefitZoneCategoies}>
                            주유
                        </div>
                    }

                    <div className={styles.benefitZoneBrands}>
                        {
                            cardInfo.benefits.map(current => (
                                current.categoryName === "fuel"

                                &&

                                <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                            ))
                        }
                    </div>
                </div>

                {console.log(cardInfo.fee)}

                <div className={styles.mainText3}>
                    안내 사항
                </div>

                <div className={styles.caution}>
                    <br />
                    해당 페이지에서 안내하는 혜택은 실제 카드사에서 제공하는 혜택과 다를수 있습니다.<br />
                    혜택은 전원실적과 특정 조건 및 상황에 따라 다르게 제공되거나 제공되지 않을 수 있습니다.<br />
                    연회비는 결제사의 상황에 따라 지원이 중단되거나 변동될 수 있습니다.<br /><br />

                    해당 카드는 카드사의 상황에 따라 신규 발급 또는 가입이 중단될 수 있습니다.<br /><br />

                    카드의 상세한 정보와 자세한 안내 사항은 각 카드사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br />
                    결제사의 상세한 정보와 자세한 안내 사항은 각 결제사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br />
                    혜택 브랜드의 상세한 정보와 자세한 안내 사항은 각 브랜드사 홈페이지를 방문하거나 고객센터에 문의하시길 바랍니다.<br /><br />

                    {cardInfo.card[0].company} 홈페이지 │ <span className={styles.cautionHighlight}>{cardLinkParser(cardInfo.card[0].company)}</span><br />
                    {cardInfo.card[0].company} 고객센터 │ <span className={styles.cautionHighlight}>{cardPhoneNumberParser(cardInfo.card[0].company)}</span><br /><br />

                    {
                        cardInfo.fee.map(current => (
                            <span>
                                {feeNameParser(current.provider)} 홈페이지 │ <span className={styles.cautionHighlight}>{feeLinkParser(current.provider)}</span><br />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CardInfo;