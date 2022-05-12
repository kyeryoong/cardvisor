import styles from './Service1Results.module.css';

import { useNavigate } from 'react-router';



function Service1Results() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.cardName}>
                카드 이름
            </div>
            <br /><br />

            <div className={styles.cardInfo}>
                카드 종류  │  카드사 로고
            </div>
            <br /><br />

            <div>
                <button className={styles.moreInfoButton}>
                    상세 정보 보기
                </button>

                <button className={styles.likeButton}>
                    찜하기
                </button>
            </div>
            <br /><br /><br /><br /><br />



            <div className={styles.subText}>
                주요 맟춤 혜택
            </div>
            <br />

            <div className={styles.brandsRow}>
                <div className={styles.brandImage}>혜택 1</div>
                <div className={styles.brandImage}>혜택 2</div>
                <div className={styles.brandImage}>혜택 3</div>
                <div className={styles.brandImage}>혜택 4</div>
                <div className={styles.brandImage}>혜택 5</div>
            </div>

            <div className={styles.brandsRow}>
                <div className={styles.brandName}>혜택 1</div>
                <div className={styles.brandName}>혜택 2</div>
                <div className={styles.brandName}>혜택 3</div>
                <div className={styles.brandName}>혜택 4</div>
                <div className={styles.brandName}>혜택 5</div>
            </div>

            <div className={styles.brandsRow}>
                <div className={styles.brandInfo}>혜택 1</div>
                <div className={styles.brandInfo}>혜택 2</div>
                <div className={styles.brandInfo}>혜택 3</div>
                <div className={styles.brandInfo}>혜택 4</div>
                <div className={styles.brandInfo}>혜택 5</div>
            </div>
            <br /><br /><br /><br /><br />



            <div className={styles.subText}>
                이 카드는 어때요?
            </div>
            <br />

            <div className={styles.moreCardsRow}>
                <div className={styles.moreCardImage}>카드 1</div>
                <div className={styles.moreCardImage}>카드 2</div>
                <div className={styles.moreCardImage}>카드 3</div>
                <div className={styles.moreCardImage}>카드 4</div>
            </div>

            <div className={styles.moreCardsRow}>
                <div className={styles.moreCardCompanyImage}>카드 1</div>
                <div className={styles.moreCardCompanyImage}>카드 2</div>
                <div className={styles.moreCardCompanyImage}>카드 3</div>
                <div className={styles.moreCardCompanyImage}>카드 4</div>
            </div>

            <div className={styles.moreCardsRow}>
                <div className={styles.moreCardName}>카드 1</div>
                <div className={styles.moreCardName}>카드 2</div>
                <div className={styles.moreCardName}>카드 3</div>
                <div className={styles.moreCardName}>카드 4</div>
            </div>
            <br /><br /><br /><br /><br />

            <div>
                <button className={styles.toMoreCardsButton} onClick={() => {
                    navigate('/service1/cards');
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