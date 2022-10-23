import ReactApexChart from 'react-apexcharts';
import styles from './Service2Analysis.module.css'

import Intro from '../../Intro';
import SelectedBrands from './SelectedBrands';



function Service2Analysis() {

    const getSum = (accumulator, curr) => accumulator + curr;

    var sumByCategories = new Array(15).fill(0);
    var percentageByCategories = new Array(15).fill(0);
    var total = 0;
    
    for (var i = 0; i < 15; i++) {
        sumByCategories[i] = SelectedBrands[i].reduce(getSum);
        total = total + sumByCategories[i];
    }
    
    for (var i = 0; i < 15; i++) {
        percentageByCategories[i] = sumByCategories[i] / total;
    }
    
    console.log(sumByCategories);
    console.log(percentageByCategories);
    console.log(SelectedBrands);
    
    
    
    var total = 0
    
    const donutData = {
        series: [sumByCategories],
        options: {
            chart: {
                type: "donut",
                fontFamily: "SDGothicNeoM"
            },
            legend: {
                show: true,
                position: "bottom",
                fontFamily: "SDGothicNeoM",
                fontSize: "2rem"
            },
            responsive: [{
                breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    donut: {
                        hollow: {
                            margin: 15,
                            size: "100%",
                            image: "../../css/images/a-icon.jpg",
                            imageWidth: 64,
                            imageHeight: 64,
                            imageClipped: false
                        },
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                fontFamily: "Poppins",
                                fontSize: "1.5rem",
                                color: "rgb(100,100,100)"
                            },
                            value: {
                                showAlways: true,
                                show: true,
                                fontSize: "2rem",
                                fontFamily: "Poppins, SDGothicNeoM",
                                fontWeight: 1000,
                                color: "rgb(0,200,200)",
                            },
                        },
                    }
                }
            },
    
            labels: ["교통", "통신", "마트", "편의점", "영화", "엔터테인먼트", "백화점", "온라인쇼핑몰", "간편결제", "카페/베이커리", "뷰티", "외식", "도서", "테마파크", "주유"],
        },
    }



    return (
        <div>
            <Intro mainText="소비 내역 분석" subText="입력하신 브랜드와 금액을 분석해드리는 화면입니다." />
            <br /><br /><br />

            {/* <div id="chart" className={styles.chart}>
                <ReactApexChart
                    options={donutData.options}
                    series={donutData.series}
                    type="donut"
                    width="800"
                />
            </div> */}

            {sumByCategories[0]}
            <br />

            {sumByCategories[1]}
            <br />

            {sumByCategories[2]}
            <br />

            {sumByCategories[3]}
            <br />

            {sumByCategories[4]}
            <br />

            {sumByCategories[5]}
            <br />

            {sumByCategories[6]}
            <br />

            {sumByCategories[7]}
            <br />

            {sumByCategories[8]}
            <br />

            {sumByCategories[9]}
            <br />

            {sumByCategories[10]}
            <br />

            {sumByCategories[11]}
            <br />

            {sumByCategories[12]}
            <br />

            {sumByCategories[13]}
            <br />

            {sumByCategories[14]}
        </div>
    )
}

export default Service2Analysis;