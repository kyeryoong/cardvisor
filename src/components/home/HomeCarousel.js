import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeCarouselSlide1 from "./HomeCarouselSlide1";
import HomeCarouselSlide2 from "./HomeCarouselSlide2";
import HomeCarouselSlide3 from "./HomeCarouselSlide3";



function HomeCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false
    };

    const carouselStyles = {
        marginTop: "-120px",
        height: "500px",
        width: "100vw"
    };

    return (
        <div style={carouselStyles}>
            <Slider {...settings}>
                <HomeCarouselSlide1 />
                <HomeCarouselSlide2 />
                <HomeCarouselSlide3 />
            </Slider>
        </div>
    );
}

export default HomeCarousel;