import { useNavigate } from 'react-router';
import Slider from 'react-slick';

import styles from './Main.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function CardElements({number, name, comment}) {
    const navigate = useNavigate();

    return (
        <div className={styles.cardElements}>
            <div className={styles.cardElementsHeader}>
                카드 추천
            </div>

            <div className={styles.cardElementsComment}>
                {comment}
            </div>

            <div className={styles.cardElementsName}>
                {name}
            </div>

            <img alt="card" className={styles.cardElementsImage} src={process.env.PUBLIC_URL + "/images/card_images/" + number + ".png"} />
        </div>
    )
}



function Main() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.cardZone}>
                <Slider {...{
                    dots: false,
                    arrows: false,
                    infinite: true,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                    pauseOnHover: false,
                }}>
                    <CardElements number={4073} name="현대카드M BOOST" comment="버스, 지하철, 택시 교통 혜택 제공" />

                    <CardElements number={4070} name="현대카드Z Ontact" comment="넷플릭스, 왓챠, 유튜브 프리미엄 30% 할인" />

                    <CardElements number={3511} name="가온올포인트 Check" comment="16개 카페 브랜드 포인트/마일리지 적립" />

                    <CardElements number={3790} name="쇼핑앤조이카드" comment="온라인 쇼핑몰 5000원 할인" />
                </Slider>
            </div>



            <div className={styles.buttonsZone}>
                <div className={styles.button1} onClick={() => {
                    navigate("/service1");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/1_blue.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>카드 추천받기</div>
                        <div className={styles.subText}>혜택 선택</div>
                    </div>
                </div>

                <div className={styles.button2} onClick={() => {
                    navigate("/service2");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/2_blue.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>카드 추천받기</div>
                        <div className={styles.subText}>금액 입력</div>
                    </div>
                </div>

                <div className={styles.button3} onClick={() => {
                    navigate("/list");
                }}>
                    <img alt="graphic" className={styles.buttonGraphic} src={process.env.PUBLIC_URL + '/images/menu_logo/3_blue.png'} />
                    <div className={styles.textZone}>
                        <div className={styles.mainText}>전체 카드 목록</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;