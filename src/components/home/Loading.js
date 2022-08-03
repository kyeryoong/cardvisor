import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    arrows: false,
    fade: true
};

const loadingStyles = {
    height: "fit-content",
    width: "10px",
    display: "block",
    margin: "0px auto",
    marginTop: "-12px",
    marginBottom: "12px"
};

const blueCircleStyles = {
    height: "8px",
    width: "8px",
    borderRadius: "4px",
    marginTop: "4px",
    marginBottom: "4px",
    backgroundColor: "rgb(0, 255, 0)"
};

const grayCircleStyles = {
    height: "8px",
    width: "8px",
    borderRadius: "4px",
    marginTop: "4px",
    marginBottom: "4px",
    backgroundColor: "rgb(220, 220, 220)"
};

function loadingParser(propsNumber, index) {
    if (propsNumber === index) {
        return true;
    }

    else {
        return false;
    }
}

function LoadingCircle(props) {
    return (
        <div>
            {loadingParser(props.number, 1) ? <div style={blueCircleStyles} /> : <div style={grayCircleStyles} />}
            {loadingParser(props.number, 2) ? <div style={blueCircleStyles} /> : <div style={grayCircleStyles} />}
            {loadingParser(props.number, 3) ? <div style={blueCircleStyles} /> : <div style={grayCircleStyles} />}
            {loadingParser(props.number, 4) ? <div style={blueCircleStyles} /> : <div style={grayCircleStyles} />}
        </div>
    )
}

function Loading() {
    return (
        <div style={loadingStyles}>
            <Slider {...settings}>
                <LoadingCircle number={1} />
                <LoadingCircle number={2} />
                <LoadingCircle number={3} />
                <LoadingCircle number={4} />
                <LoadingCircle number={3} />
                <LoadingCircle number={2} />
            </Slider>
        </div>
    )
}

export default Loading;