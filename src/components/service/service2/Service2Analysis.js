import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

import useAxiosObject from "../../hooks/useAxiosObject";

import SelectedBrands from './SelectedBrands';
import HeaderBottom from '../../HeaderBottom';
import PieChart from './PieChart';
import PieChart2 from './PieChart2';
import ChartElements from './ChartElements';

import styles from './Service2Analysis.module.css';



function Service2Analysis() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosObject = useAxiosObject();



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

    const [info, setInfo] = useState({
        gender: "",
        age: ""
    });

    useEffect(() => {
        async function getMyInfo() {
            try {
                const response = await axiosObject.get('/member/showMyInfo', {});

                setTimeout(() => {
                    setInfo(response.data);
                }, 0)
            }

            catch (error) {
                console.error(error);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getMyInfo();
    }, []);

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
        async function getDonuts() {
            try {
                const response = await axiosObject.get('/benefit/donuts', {});

                setTimeout(() => {
                    setAgeGenderData(response.data);
                }, 500)
            }

            catch (error) {
                console.error(error);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getDonuts();
    }, []);

    const [toggle, setToggle] = useState(true);


    const ageArray = ["one", "two", "three", "four", "five", "six"];
    const ageText = ["10", "20", "30", "40", "50", "60"]

    function ageParser(age) {
        for (var i = 0; i < 6; i++) {
            if (age === ageArray[i]) {
                return ageText[i];
            }
        }
    }

    var comparison = new Array(15).fill(0);
    var comparsionSum = 0;
    var comparisonMax = 0;
    var comparisonByMaxValue = new Array(15).fill(0);

    for (var i = 0; i < 14; i++) {
        if (sumByCategories[i] > 0) {
            comparsionSum = comparsionSum + ageGenderData.result[i];
        }
    }

    for (i = 0; i < 14; i++) {
        if (sumByCategories[i] > 0) {
            comparison[i] = ageGenderData.result[i] / comparsionSum;
        }
    }

    for (i = 0; i < 14; i++) {
        if (comparison[i] > comparisonMax) {
            comparisonMax = comparison[i];
        }
    }

    for (i = 0; i < 14; i++) {
        comparisonByMaxValue[i] = comparison[i] / comparisonMax;
    }





    return (
        <div>
            <HeaderBottom mainText="소비 내역 분석" subText="입력하신 브랜드와 금액을 분석해드리는 화면입니다." />

            <div className={styles.chartZone}>
                <div className={styles.chartButtonZone}>
                    <button className={toggle ? styles.chartButtonLeftOn : styles.chartButtonLeftOff} onClick={() => { setToggle(true) }}>
                        나의 소비 차트
                    </button>

                    <button className={!toggle ? styles.chartButtonRightOn : styles.chartButtonRightOff} onClick={() => { setToggle(false) }}>
                        평균 연령별/성별 소비 차트
                    </button>
                </div>

                {
                    toggle

                        ?

                        <div>
                            <div className={styles.chartDescribtion}>
                                해당 차트는 내가 입력한 혜택을 보여주는 차트입니다.
                            </div>

                            <PieChart data={sumByCategories} colors={colors} />
                        </div>

                        :

                        <div>
                            <div className={styles.chartDescribtion}>
                                해당 차트는 사용자의 연령대와 성별대인
                                <br />
                                <span className={styles.chartDescribtionBold}>
                                    {ageParser(info.age)}대 {info.gender === "male" ? "남성" : "여성"}
                                </span>의 평균적인 소비 내역을 보여주는 차트입니다.
                            </div>

                            <PieChart2 data={ageGenderData.result} total={total} colors={colors} />
                        </div>
                }
            </div>

            <div className={styles.analysisZone}>
                <div className={styles.analysisZoneLeft}>
                    <div className={styles.analysisZoneHeader}>
                        총 소비 금액
                    </div>

                    <div className={styles.analysisZoneValue} style={{ color: "rgb(0, 200, 200)" }}>
                        {total}

                        <span className={styles.won}>
                            원
                        </span>
                    </div>
                </div>

                <div className={styles.analysisZoneRight}>
                    <div className={styles.analysisZoneHeader}>
                        가장 많이 소비한 카테고리
                    </div>

                    <div className={styles.analysisZoneIconBackground} style={{ backgroundColor: colors[maxIndex] }}>
                        <img
                            alt={categoriesKor[maxIndex]} className={styles.analysisZoneIcon} src={process.env.PUBLIC_URL + "/images/icons/category_" + categoriesEng[maxIndex] + ".png"} />
                    </div>

                    <div className={styles.analysisZoneCategory} style={{ color: colors[maxIndex] }}>
                        {categoriesKor[maxIndex]}
                    </div>

                    <div className={styles.analysisZoneValue} style={{ color: colors[maxIndex] }}>
                        {maxValue}

                        <span className={styles.won}>
                            원
                        </span>
                    </div>
                </div>
            </div>

            <ChartElements color={colors[0]} elementKor={categoriesKor[0]} elementEng={categoriesEng[0]} value={sumByCategories[0]} ratioByCategories={ratioByCategories[0]} ratioByMaxValue={ratioByMaxValue[0]} comparison={comparison[0]} comparisonByMaxValue={comparisonByMaxValue[0]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[1]} elementKor={categoriesKor[1]} elementEng={categoriesEng[1]} value={sumByCategories[1]} ratioByCategories={ratioByCategories[1]} ratioByMaxValue={ratioByMaxValue[1]} comparison={comparison[1]} comparisonByMaxValue={comparisonByMaxValue[1]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[2]} elementKor={categoriesKor[2]} elementEng={categoriesEng[2]} value={sumByCategories[2]} ratioByCategories={ratioByCategories[2]} ratioByMaxValue={ratioByMaxValue[2]} comparison={comparison[2]} comparisonByMaxValue={comparisonByMaxValue[2]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[3]} elementKor={categoriesKor[3]} elementEng={categoriesEng[3]} value={sumByCategories[3]} ratioByCategories={ratioByCategories[3]} ratioByMaxValue={ratioByMaxValue[3]} comparison={comparison[3]} comparisonByMaxValue={comparisonByMaxValue[3]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[4]} elementKor={categoriesKor[4]} elementEng={categoriesEng[4]} value={sumByCategories[4]} ratioByCategories={ratioByCategories[4]} ratioByMaxValue={ratioByMaxValue[4]} comparison={comparison[4]} comparisonByMaxValue={comparisonByMaxValue[4]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[5]} elementKor={categoriesKor[5]} elementEng={categoriesEng[5]} value={sumByCategories[5]} ratioByCategories={ratioByCategories[5]} ratioByMaxValue={ratioByMaxValue[5]} comparison={comparison[5]} comparisonByMaxValue={comparisonByMaxValue[5]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[6]} elementKor={categoriesKor[6]} elementEng={categoriesEng[6]} value={sumByCategories[6]} ratioByCategories={ratioByCategories[6]} ratioByMaxValue={ratioByMaxValue[6]} comparison={comparison[6]} comparisonByMaxValue={comparisonByMaxValue[6]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[7]} elementKor={categoriesKor[7]} elementEng={categoriesEng[7]} value={sumByCategories[7]} ratioByCategories={ratioByCategories[7]} ratioByMaxValue={ratioByMaxValue[7]} comparison={comparison[7]} comparisonByMaxValue={comparisonByMaxValue[7]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[8]} elementKor={categoriesKor[8]} elementEng={categoriesEng[8]} value={sumByCategories[8]} ratioByCategories={ratioByCategories[8]} ratioByMaxValue={ratioByMaxValue[8]} comparison={comparison[8]} comparisonByMaxValue={comparisonByMaxValue[8]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[9]} elementKor={categoriesKor[9]} elementEng={categoriesEng[9]} value={sumByCategories[9]} ratioByCategories={ratioByCategories[9]} ratioByMaxValue={ratioByMaxValue[9]} comparison={comparison[9]} comparisonByMaxValue={comparisonByMaxValue[9]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[10]} elementKor={categoriesKor[10]} elementEng={categoriesEng[10]} value={sumByCategories[10]} ratioByCategories={ratioByCategories[10]} ratioByMaxValue={ratioByMaxValue[10]} comparison={comparison[10]} comparisonByMaxValue={comparisonByMaxValue[10]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[11]} elementKor={categoriesKor[11]} elementEng={categoriesEng[11]} value={sumByCategories[11]} ratioByCategories={ratioByCategories[11]} ratioByMaxValue={ratioByMaxValue[11]} comparison={comparison[11]} comparisonByMaxValue={comparisonByMaxValue[11]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[12]} elementKor={categoriesKor[12]} elementEng={categoriesEng[12]} value={sumByCategories[12]} ratioByCategories={ratioByCategories[12]} ratioByMaxValue={ratioByMaxValue[12]} comparison={comparison[12]} comparisonByMaxValue={comparisonByMaxValue[12]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[13]} elementKor={categoriesKor[13]} elementEng={categoriesEng[13]} value={sumByCategories[13]} ratioByCategories={ratioByCategories[13]} ratioByMaxValue={ratioByMaxValue[13]} comparison={comparison[13]} comparisonByMaxValue={comparisonByMaxValue[13]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <ChartElements color={colors[14]} elementKor={categoriesKor[14]} elementEng={categoriesEng[14]} value={sumByCategories[14]} ratioByCategories={ratioByCategories[14]} ratioByMaxValue={ratioByMaxValue[14]} comparison={comparison[14]} comparisonByMaxValue={comparisonByMaxValue[14]} age={ageParser(info.age)} gender={info.gender === "male" ? "남성" : "여성"} />
            <br /><br /><br /><br /><br /><br />



            <div>
                <button className={styles.sendButton} onClick={() => {
                    async function getResults() {
                        const parsedUrlEncodedData = JSON.stringify(jsonArr);

                        try {
                            const response = await axiosObject({
                                method: "POST",
                                url: "/benefit/recommendTwo",
                                data: parsedUrlEncodedData,
                            });

                            setTimeout(() => {
                                localStorage.setItem('servicetwo', JSON.stringify(response.data));
                                navigate("/service2/results");
                            }, 100)
                        }

                        catch (error) {
                            console.error(error);
                            navigate('/login', { state: { from: location }, replace: true });
                        }
                    }

                    getResults();

                    localStorage.setItem('sumByCategories', JSON.stringify(sumByCategories))

                    navigate('/loading', { state: { from: location }, replace: true });
                }}>
                    카드 추천 받기
                </button>
            </div>
        </div>
    )
}

export default Service2Analysis;