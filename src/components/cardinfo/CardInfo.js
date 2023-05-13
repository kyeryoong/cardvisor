import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import Loading from "../Loading";

import { benefitParser, brandParser, typeParser, feeNameParser, feeLinkParser, cardLinkParser, cardPhoneNumberParser } from '../Parser';

import styles from './CardInfo.module.css';



function CardInfo() {
    let { card_code } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(true);
    const [cardInfo, setCardInfo] = useState({
        benefits: [{}],
        fee: [{}],
        category: [{}],
        card: [{}],
    });

    useEffect(() => {
        const getCardInfo = async () => {
            try {
                const response = await axiosPrivate.get('/card/' + card_code.toString(), {
                });
                setTimeout(() => {
                    setCardInfo(response.data);
                    setLoading(false);
                }, 500)
                // console.log(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getCardInfo();
    }, []);





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
            {
                loading

                    ?

                    <Loading message="데이터 불러오는중" />

                    :

                    (
                        <div className={styles.backgroundZone}>
                            <div className={styles.bestCardContainer}>
                                <img
                                    className={styles.bestCardImage}
                                    alt="cards"
                                    src={process.env.PUBLIC_URL + "/images/card_images/" + card_code + ".png"} />

                                <div className={styles.bestCardBottom}>
                                    <div className={styles.bestCardName}>
                                        {cardInfo.card[0].name}
                                    </div>

                                    <div className={styles.bestCardInfo}>
                                        <div className={styles.bestCardType}>
                                            {typeParser(cardInfo.card[0].type)}
                                        </div>

                                        <img
                                            className={styles.bestCardCompanyLogo}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + cardInfo.card[0].company_eng + ".png"} />
                                    </div>
                                </div>
                            </div>



                            <div className={styles.mainText}>
                                연회비
                            </div>

                            <div className={styles.feeZone}>
                                {
                                    cardInfo.fee.map(current =>
                                        <FeeElements providerName={current.provider} fee={current.pay} />
                                    )
                                }
                            </div>



                            <div className={styles.mainText}>
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

                            <div className={styles.mainText}>
                                안내 사항
                            </div>

                            <div className={styles.caution}>
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
                    )
            }
        </div>
    )
}

export default CardInfo;