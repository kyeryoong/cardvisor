import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerZone1 from "./BannerZone1";
import BannerZone2 from "./BannerZone2";
import BannerZone3 from "./BannerZone3";



function Carousel() {

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
                    <BannerZone1 />
                </div>

                <div>
                    <BannerZone2 />
                </div>

                <div>
                    <BannerZone3 />
                </div>
            </Slider>
        </div >
    );

}

export default Carousel;