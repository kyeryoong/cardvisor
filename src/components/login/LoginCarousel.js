import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LoginCarouselSlide1 from "./LoginCarouselSlide1";
import LoginCarouselSlide2 from "./LoginCarouselSlide2";
import LoginCarouselSlide3 from "./LoginCarouselSlide3";



function BannerCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false
    };

    return (
        <div style={{ height: "700px", width: "700px" }}>
            <Slider {...settings}>
                <div>
                    <LoginCarouselSlide1 />
                </div>

                <div>
                    <LoginCarouselSlide2 />
                </div>

                <div>
                    <LoginCarouselSlide3 />
                </div>
            </Slider>
        </div>
    );

}

export default BannerCarousel;