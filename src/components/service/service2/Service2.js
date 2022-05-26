import styles from '../Service.module.css';

import Brands from './Brands';
import Categories from '../Categories';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



let jsonArr = [];

function Service2() {
    const navigate = useNavigate();

    const [sel1, setSel1] = useState(0);
    const [sel2, setSel2] = useState(0);
    const [sel3, setSel3] = useState(0);
    const [sel4, setSel4] = useState(0);
    const [sel5, setSel5] = useState(0);
    const [sel6, setSel6] = useState(0);

    return (
        <div>
            <h1>카드 추천 받기</h1>
            <h2>선호하는 혜택을 체크해주세요!</h2>
            <br /><br />

            <div></div>

            <details className={styles.detailsZone}>
                <Categories categoryName="교통" />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="버스" brandNameEng="transport_bus" setSel={setSel1} />
                    <Brands brandNameKor="지하철" brandNameEng="transport_subway" setSel={setSel2} />
                    <Brands brandNameKor="택시" brandNameEng="transport_taxi" setSel={setSel3} />
                    <Brands brandNameKor="코레일" brandNameEng="transport_korail" setSel={setSel4} />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" setSel={setSel5} />
                    <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" setSel={setSel6} />
                </div>
            </details>

            {sel1}<br />
            {sel2}<br />
            {sel3}<br />
            {sel4}<br />
            {sel5}<br />
            {sel6}<br />

            <div>
                {/* <Link to='/service1/results'>
                    <button className={styles.sendButton} onClick={() => {

                        for (var i = 0; i < SelectedBrands.length; i++) {
                            jsonArr[i] = { "memberId": 1, "brandName": SelectedBrands[i] }
                        }
                        getJson();
                    }}>
                        n개 혜택 선택 완료
                    </button>
                </Link> */}

                <button className={styles.sendButton} onClick={() => {
                    jsonArr = []

                    if (sel1 > 0) {jsonArr.push(["transport_bus", sel1]);}
                    if (sel2 > 0) {jsonArr.push(["transport_subway", sel2]);}
                    if (sel3 > 0) {jsonArr.push(["transport_taxi", sel3]);}
                    if (sel4 > 0) {jsonArr.push(["transport_korail", sel4]);}
                    if (sel5 > 0) {jsonArr.push(["transport_srt", sel5]);}
                    if (sel6 > 0) {jsonArr.push(["transport_arex", sel6]);}

                    alert(jsonArr.join("\n"));
                }}>
                    혜택 선택 완료
                </button>
            </div>
            <br />

            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate('/main');
                }}>
                    홈 화면으로
                </button>
            </div>
        </div >
    );
}

export default Service2;