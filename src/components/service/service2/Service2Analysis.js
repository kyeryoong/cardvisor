import ReactApexChart from 'react-apexcharts';
import styles from './Service2Analysis.module.css'

import Intro from '../../../Intro';

var total_transport = 10000
var total_communication = 2500
var total_mart = 3000
var total_convstore = 45000
var total_movies = 0
var total_entertainment = 0
var total_deptstore = 0
var total_onlineshopping = 0
var total_easypay = 0
var total_cafebakery = 0
var total_beauty = 0
var total_dining = 0
var total_books = 0
var total_themepark = 0
var total_fuel = 0

var total = 0

const donutData = {
    series: [
        total_transport,
        total_communication,
        total_mart,
        total_convstore,
        total_movies,
        total_entertainment,
        total_deptstore,
        total_onlineshopping,
        total_easypay,
        total_cafebakery,
        total_beauty,
        total_dining,
        total_books,
        total_themepark,
        total_fuel
    ],
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
                            fontFamily: "Poppins, SDGothicNeoM" ,
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

function Service2Analysis() {
    return (
        <div>
            <Intro mainText="소비 내역 분석" subText="입력하신 브랜드와 금액을 분석해드리는 화면입니다." />
            <br /><br /><br />

            <div id="chart" className={styles.chart}>
                <ReactApexChart
                    options={donutData.options}
                    series={donutData.series}
                    type="donut"
                    width="800"
                />
            </div>
        </div>
    )
}

export default Service2Analysis;