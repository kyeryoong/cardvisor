import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardDataCarouselSlide from "./CardDataCarouselSlide";



function CardDataCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        vertical: true
    };

    const carouselStyles = {
        height: "fit-content",
        width: "100vw",
        display: "block",
        margin: "0px auto"
    };

    return (
        <div>
            <div style={carouselStyles}>
                <Slider {...settings}>
                    <div>
                        <CardDataCarouselSlide type="카드" value="450" icon="carddata_card_blue" />
                    </div>

                    <div>
                        <CardDataCarouselSlide type="카드사" value="15" icon="carddata_company_blue" />
                    </div>

                    <div>
                        <CardDataCarouselSlide type="브랜드" value="199" icon="carddata_brands_blue" />
                    </div>

                    <div>
                        <CardDataCarouselSlide type="혜택" value="6264" icon="carddata_benefits_blue" />
                    </div>

                    <div>
                        <CardDataCarouselSlide type="결제망" value="40" icon="carddata_payment_blue" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CardDataCarousel;