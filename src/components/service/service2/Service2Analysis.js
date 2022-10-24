import { useNavigate } from 'react-router-dom';

import SelectedBrands from './SelectedBrands';

import Intro from '../../Intro';
import PieChart from './PieChart';
import ChartElements from './ChartElements';

import styles from './Service2Analysis.module.css';



function Service2Analysis() {
    const navigate = useNavigate();

    const categoriesKor = ["교통", "통신", "마트", "편의점", "영화", "엔터테인먼트", "백화점", "온라인쇼핑몰", "간편결제", "카페/베이커리", "뷰티", "외식", "도서", "테마파크", "주유"]

    const categoriesEng = ["transportation", "communication", "mart", "convstore", "movies", "entertainment", "deptstore", "onlineshopping", "easypay", "cafebakery", "beauty", "dining", "books", "themepark", "fuel"]

    const colors = ["#FF355E", "#FD5B78", "#FF6037", "#FF9966", "#FF9933", "#FFCC33", "#FFFF66", "#CCFF00", "#66FF66", "#AAF0D1", "#16D0CB", "#50BFE6", "#9C27B0", "#EE34D2", "#FF00CC"]

    

    var sumByCategories = new Array(15).fill(0);
    var ratioByCategories = new Array(15).fill(0);
    var ratioByMaxValue = new Array(15).fill(0);

    var total = 0;
    var maxIndex = 0;
    var maxValue = 0;

    for (var i = 0; i < 15; i++) {
        sumByCategories[i] = SelectedBrands[i][0]
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



    return (
        <div>
            <Intro mainText="소비 내역 분석" subText="입력하신 브랜드와 금액을 분석해드리는 화면입니다." />
            <br /><br /><br />

            <div className={styles.chartZone}>
                <PieChart data={sumByCategories} />

                <div className={styles.chartZoneRight} >
                    <div className={styles.chartZoneRightTop}>
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

                    <div className={styles.chartZoneRightBottom}>
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
            </div>

            <ChartElements color="#FF355E" element={categoriesKor[0]} value={sumByCategories[0]} ratioByCategories={ratioByCategories[0]} ratioByMaxValue={ratioByMaxValue[0]} />
            <ChartElements color="#FD5B78" element={categoriesKor[1]} value={sumByCategories[1]} ratioByCategories={ratioByCategories[1]} ratioByMaxValue={ratioByMaxValue[1]} />
            <ChartElements color="#FF6037" element={categoriesKor[2]} value={sumByCategories[2]} ratioByCategories={ratioByCategories[2]} ratioByMaxValue={ratioByMaxValue[2]} />
            <ChartElements color="#FF9966" element={categoriesKor[3]} value={sumByCategories[3]} ratioByCategories={ratioByCategories[3]} ratioByMaxValue={ratioByMaxValue[3]} />
            <ChartElements color="#FF9933" element={categoriesKor[4]} value={sumByCategories[4]} ratioByCategories={ratioByCategories[4]} ratioByMaxValue={ratioByMaxValue[4]} />
            <ChartElements color="#FFCC33" element={categoriesKor[5]} value={sumByCategories[5]} ratioByCategories={ratioByCategories[5]} ratioByMaxValue={ratioByMaxValue[5]} />
            <ChartElements color="#FFFF66" element={categoriesKor[6]} value={sumByCategories[6]} ratioByCategories={ratioByCategories[6]} ratioByMaxValue={ratioByMaxValue[6]} />
            <ChartElements color="#CCFF00" element={categoriesKor[7]} value={sumByCategories[7]} ratioByCategories={ratioByCategories[7]} ratioByMaxValue={ratioByMaxValue[7]} />
            <ChartElements color="#66FF66" element={categoriesKor[8]} value={sumByCategories[8]} ratioByCategories={ratioByCategories[8]} ratioByMaxValue={ratioByMaxValue[8]} />
            <ChartElements color="#AAF0D1" element={categoriesKor[9]} value={sumByCategories[9]} ratioByCategories={ratioByCategories[9]} ratioByMaxValue={ratioByMaxValue[9]} />
            <ChartElements color="#16D0CB" element={categoriesKor[10]} value={sumByCategories[10]} ratioByCategories={ratioByCategories[10]} ratioByMaxValue={ratioByMaxValue[10]} />
            <ChartElements color="#50BFE6" element={categoriesKor[11]} value={sumByCategories[11]} ratioByCategories={ratioByCategories[11]} ratioByMaxValue={ratioByMaxValue[11]} />
            <ChartElements color="#9C27B0" element={categoriesKor[12]} value={sumByCategories[12]} ratioByCategories={ratioByCategories[12]} ratioByMaxValue={ratioByMaxValue[12]} />
            <ChartElements color="#EE34D2" element={categoriesKor[13]} value={sumByCategories[13]} ratioByCategories={ratioByCategories[13]} ratioByMaxValue={ratioByMaxValue[13]} />
            <ChartElements color="#FF00CC" element={categoriesKor[14]} value={sumByCategories[14]} ratioByCategories={ratioByCategories[14]} ratioByMaxValue={ratioByMaxValue[14]} />
            <br /><br /><br />



            <div>
                <button className={styles.sendButton} onClick={() => {
                    alert("준비중");
                }}>
                    카드 추천 받기
                </button>
            </div>
            <br />

            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate("/service2");
                }}>
                    금액 다시 입력하기
                </button>
            </div>
        </div>
    )
}

export default Service2Analysis;