import React from "react";
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

    return (
        <div style={{ marginTop: "-120px", height: "500px", width: "100vw" }}>
            <Slider {...settings}>
                <div>
                    <HomeCarouselSlide1 />
                </div>

                <div>
                    <HomeCarouselSlide2 />
                </div>

                <div>
                    <HomeCarouselSlide3 />
                </div>
            </Slider>
        </div>
    );

}

export default HomeCarousel;