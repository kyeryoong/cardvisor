import { useNavigate } from 'react-router';
import { useState } from 'react';
import styles from './CardInfo.module.css';

import PaySystem from './PaySystem';
import Benefit from './Benefit';



function CardInfo() {
    const navigate = useNavigate();

    const [cards, setCards] = useState({
        cardAll: [{}],
    });

    const [like, setLike] = useState(false);

    // useEffect(() => {
    //     fetch("/cards")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             setCards(data);
    //         });
    // }, []);

    return (
        <div>
            <div className={styles.cardInfoZone}>
                <div className={styles.cardInfoZone1}>
                    <div className={styles.cardImage}>
                        카드 이미지
                    </div>
                </div>

                <div className={styles.cardInfoZone2}>
                    <div className={styles.cardName}>
                        카드 이름
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
                        }}> {like ? '♡ ' : '♥ '}
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
        </div>
    );
}

export default CardInfo;