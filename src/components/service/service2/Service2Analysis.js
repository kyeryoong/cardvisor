import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import SelectedBrands from './SelectedBrands';
import HeaderBottom from '../../HeaderBottom';
import PieChart from './PieChart';
import PieChart2 from './PieChart2';
import ChartElements from './ChartElements';

import styles from './Service2Analysis.module.css';



function Service2Analysis() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();

    localStorage.clear();

    const categoriesKor = [
        "교통", "통신", "마트", "편의점", "영화",
        "엔터테인먼트", "백화점", "온라인쇼핑몰", "간편결제", "카페/베이커리",
        "뷰티", "외식", "도서", "테마파크", "주유"
    ]

    const categoriesEng = [
        "transportation", "communication", "mart", "convstore", "movies",
        "entertainment", "deptstore", "onlineshopping", "easypay", "cafebakery",
        "beauty", "dining", "books", "themepark", "fuel"
    ]

    const colors = [
        "#FF355E", "#FF7C80", "#996633", "#FF6037", "#FF9933",
        "#FFC000", "#92D050", "#00B050", "#90ECC2", "#16D0CB",
        "#50BFE6", "#0070C0", "#EE34D2", "#9C27B0", "#A6A6A6"
    ]



    var sumByCategories = new Array(15).fill(0);
    var ratioByCategories = new Array(15).fill(0);
    var ratioByMaxValue = new Array(15).fill(0);

    var total = 0;
    var maxIndex = 0;
    var maxValue = 0;

    var jsonArr = []

    for (var i = 0; i < 15; i++) {
        sumByCategories[i] = SelectedBrands[i].reduce((accumulator, curr) => accumulator + curr);
        total = total + sumByCategories[i];

        if (sumByCategories[i] > maxValue) {
            maxIndex = i;
            maxValue = sumByCategories[i];
        }
    }

    for (i = 0; i < 15; i++) {
        ratioByCategories[i] = sumByCategories[i] / total;
    }

    for (i = 0; i < 15; i++) {
        ratioByMaxValue[i] = sumByCategories[i] / maxValue;
    }

    for (i = 0; i < 15; i++) {
        jsonArr[i] = { memberId: 9999, categoryName: categoriesEng[i], cost: ratioByCategories[i] }
    }

    const [ageGenderData, setAgeGenderData] = useState({
        result: []
    })

    useEffect(() => {
        const getDonuts = async () => {
            try {
                const response = await axiosPrivate.get('/benefit/donuts', {
                });
                setTimeout(() => {
                    setAgeGenderData(response.data);
                }, 500)
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getDonuts();
    }, []);

    const [toggle, setToggle] = useState(true);




    return (
        <div>
            <HeaderBottom mainText="소비 내역 분석" subText="입력하신 브랜드와 금액을 분석해드리는 화면입니다." />

            <div className={styles.chartZone}>
                <div className={styles.chartButtonZone}>
                    <button className={toggle ? styles.chartButtonLeftOn : styles.chartButtonLeftOff} onClick={() => { setToggle(true) }}>
                        나의 소비 차트
                    </button>

                    <button  className={!toggle ? styles.chartButtonRightOn : styles.chartButtonRightOff} onClick={() => { setToggle(false) }}>
                        평균 연령별/성별 소비 차트
                    </button>
                </div>

                {
                    toggle

                        ?

                        <PieChart data={sumByCategories} colors={colors} />

                        :

                        <PieChart2 data={ageGenderData.result} colors={colors} />
                }
            </div>

            <div className={styles.analysisZone}>
                <div className={styles.chartZoneRight}>
                    <div className={styles.chartZoneHeader}>
                        총 소비 금액
                    </div>

                    <div className={styles.chartZoneValue} style={{ color: "rgb(0, 200, 200)" }}>
                        {total}

                        <span className={styles.won}>
                            원
                        </span>
                    </div>
                </div>

                <div className={styles.chartZoneLeft}>
                    <div className={styles.chartZoneHeader}>
                        가장 많이 소비한 카테고리
                    </div>

                    <div className={styles.chartZoneIconBackground} style={{ backgroundColor: colors[maxIndex] }}>
                        <img
                            alt={categoriesKor[maxIndex]} className={styles.chartZoneIcon} src={process.env.PUBLIC_URL + "/images/icons/category_" + categoriesEng[maxIndex] + ".png"} />
                    </div>

                    <div className={styles.chartZoneCategory} style={{ color: colors[maxIndex] }}>
                        {categoriesKor[maxIndex]}
                    </div>

                    <div className={styles.chartZoneValue} style={{ color: colors[maxIndex] }}>
                        {maxValue}

                        <span className={styles.won}>
                            원
                        </span>
                    </div>
                </div>
            </div>

            <ChartElements color={colors[0]} elementKor={categoriesKor[0]} elementEng={categoriesEng[0]} value={sumByCategories[0]} ratioByCategories={ratioByCategories[0]} ratioByMaxValue={ratioByMaxValue[0]} num1={0.12} num2={68950} />
            <ChartElements color={colors[1]} elementKor={categoriesKor[1]} elementEng={categoriesEng[1]} value={sumByCategories[1]} ratioByCategories={ratioByCategories[1]} ratioByMaxValue={ratioByMaxValue[1]} num1={0.09} num2={57910} />
            <ChartElements color={colors[2]} elementKor={categoriesKor[2]} elementEng={categoriesEng[2]} value={sumByCategories[2]} ratioByCategories={ratioByCategories[2]} ratioByMaxValue={ratioByMaxValue[2]} num1={0.0} num2={0.0} />
            <ChartElements color={colors[3]} elementKor={categoriesKor[3]} elementEng={categoriesEng[3]} value={sumByCategories[3]} ratioByCategories={ratioByCategories[3]} ratioByMaxValue={ratioByMaxValue[3]} num1={0.07} num2={38500} />
            <ChartElements color={colors[4]} elementKor={categoriesKor[4]} elementEng={categoriesEng[4]} value={sumByCategories[4]} ratioByCategories={ratioByCategories[4]} ratioByMaxValue={ratioByMaxValue[4]} num1={0.0} num2={0.0} />
            <ChartElements color={colors[5]} elementKor={categoriesKor[5]} elementEng={categoriesEng[5]} value={sumByCategories[5]} ratioByCategories={ratioByCategories[5]} ratioByMaxValue={ratioByMaxValue[5]} num1={0.0} num2={0.0} />
            <ChartElements color={colors[6]} elementKor={categoriesKor[6]} elementEng={categoriesEng[6]} value={sumByCategories[6]} ratioByCategories={ratioByCategories[6]} ratioByMaxValue={ratioByMaxValue[6]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[7]} elementKor={categoriesKor[7]} elementEng={categoriesEng[7]} value={sumByCategories[7]} ratioByCategories={ratioByCategories[7]} ratioByMaxValue={ratioByMaxValue[7]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[8]} elementKor={categoriesKor[8]} elementEng={categoriesEng[8]} value={sumByCategories[8]} ratioByCategories={ratioByCategories[8]} ratioByMaxValue={ratioByMaxValue[8]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[9]} elementKor={categoriesKor[9]} elementEng={categoriesEng[9]} value={sumByCategories[9]} ratioByCategories={ratioByCategories[9]} ratioByMaxValue={ratioByMaxValue[9]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[10]} elementKor={categoriesKor[10]} elementEng={categoriesEng[10]} value={sumByCategories[10]} ratioByCategories={ratioByCategories[10]} ratioByMaxValue={ratioByMaxValue[10]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[11]} elementKor={categoriesKor[11]} elementEng={categoriesEng[11]} value={sumByCategories[11]} ratioByCategories={ratioByCategories[11]} ratioByMaxValue={ratioByMaxValue[11]} num1={198200} num2={0.0} />
            <ChartElements color={colors[12]} elementKor={categoriesKor[12]} elementEng={categoriesEng[12]} value={sumByCategories[12]} ratioByCategories={ratioByCategories[12]} ratioByMaxValue={ratioByMaxValue[12]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[13]} elementKor={categoriesKor[13]} elementEng={categoriesEng[13]} value={sumByCategories[13]} ratioByCategories={ratioByCategories[13]} ratioByMaxValue={ratioByMaxValue[13]} num1={0.1} num2={0.0} />
            <ChartElements color={colors[14]} elementKor={categoriesKor[14]} elementEng={categoriesEng[14]} value={sumByCategories[14]} ratioByCategories={ratioByCategories[14]} ratioByMaxValue={ratioByMaxValue[14]} num1={69280} num2={0.0} />
            <br /><br /><br /><br /><br /><br />



            <div>
                <button className={styles.sendButton} onClick={() => {
                    const getResults = async () => {
                        // console.log(jsonArr);

                        const parsedUrlEncodedData = JSON.stringify(jsonArr);

                        try {
                            const response = await axiosPrivate({
                                method: "POST",
                                url: "/benefit/recommendTwo",
                                data: parsedUrlEncodedData,
                            });
                            setTimeout(() => {
                                localStorage.setItem('servicetwo', JSON.stringify(response.data));
                                navigate("/service2/results");
                            }, 100)
                        } catch (err) {
                            console.error(err);
                            navigate('/login', { state: { from: location }, replace: true });
                        }
                    }
                    getResults();
                    navigate('/loading', { state: { from: location }, replace: true });
                }}>
                    카드 추천 받기
                </button>
            </div>
        </div>
    )
}

export default Service2Analysis;