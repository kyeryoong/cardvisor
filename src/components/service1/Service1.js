import styles from './Service1.module.css';

import Brands from './Brands';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import SelectedBrands from './SelectedBrands';



let jsonArr = [];

function getJson() {
    let url = "http://localhost:8080/select";
    //let jsonArr = new Object();
    //jsonArr = [{"memberId":1 , "brandId": 10 }, {"memberId":1 , "brandId":20 }, {"memberId":1 , "brandId":30}];

    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonArr)
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}



function Card() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <h1>카드 추천 받기</h1>
            <h2>선호하는 혜택을 체크해주세요!</h2>
            <br /><br />

            <div>
                <div className={styles.zone1}><button className={styles.categoryName} onClick={() => { setShow1(!show1); }}> 교통 </button></div>
                <div className={styles.zone2}><button className={styles.hideShow} onClick={() => { setShow1(!show1); }}> {show1 ? '▲' : '▼'}</button></div>
            </div>

            <hr />
            <div className={styles.row}>
                {show1 && <Brands name="버스" brandlogo="transport_bus" />}
                {show1 && <Brands name="지하철" brandlogo="transport_subway" />}
                {show1 && <Brands name="택시" brandlogo="transport_taxi" />}
                {show1 && <Brands name="코레일" brandlogo="transport_korail" />}
                {show1 && <Brands name="SRT" brandlogo="transport_srt" />}
                {show1 && <Brands name="인천국제공항철도" brandlogo="transport_arex" />}
            </div>
            <br />



            <div>
                <div className={styles.zone1}><button className={styles.categoryName} onClick={() => { setShow2(!show2); }}> 통신 </button></div>
                <div className={styles.zone2}><button className={styles.hideShow} onClick={() => { setShow2(!show2); }}> {show2 ? '▲' : '▼'}</button></div>
            </div>

            <hr />
            <div className={styles.row}>
                {show2 && <Brands name="SK텔레콤" brandlogo="communication_skt" />}
                {show2 && <Brands name="KT" brandlogo="communication_kt" />}
                {show2 && <Brands name="LG유플러스" brandlogo="communication_lgu" />}
                {show2 && <Brands name="KT olleh 인터넷" brandlogo="communication_kt" />}
                {show2 && <Brands name="SKT 인터넷" brandlogo="communication_skt" />}
                {show2 && <Brands name="LG U+ 인터넷" brandlogo="communication_lgu" />}
                {show2 && <Brands name="SKT IPTV" brandlogo="communication_skt" />}
                {show2 && <Brands name="KT IP-TV" brandlogo="communication_kt" />}
                {show2 && <Brands name="LG U+ IPTV" brandlogo="communication_lgu" />}
                {show2 && <Brands name="SKT 인터넷전화" brandlogo="communication_skt" />}
                {show2 && <Brands name="KT 인터넷전화" brandlogo="communication_kt" />}
                {show2 && <Brands name="LG U+ 인터넷전화" brandlogo="communication_lgu" />}
            </div>
            <br />



            <div>
                <div className={styles.zone1}><button className={styles.categoryName} onClick={() => { setShow3(!show3); }}> 마트 </button></div>
                <div className={styles.zone2}><button className={styles.hideShow} onClick={() => { setShow3(!show3); }}> {show3 ? '▲' : '▼'}</button></div>
            </div>

            <hr />
            <div className={styles.row}>
                {show3 && <Brands name="이마트" brandlogo="mart_emart" />}
                {show3 && <Brands name="홈플러스" brandlogo="mart_homeplus" />}
                {show3 && <Brands name="롯데마트" brandlogo="mart_lottemart" />}
                {show3 && <Brands name="농협하나로마트" brandlogo="mart_nhhanaro" />}
                {show3 && <Brands name="이마트 트레이더스" brandlogo="mart_emarttraders" />}
                {show3 && <Brands name="VIC 마켓" brandlogo="mart_vicmarket" />}
                {show3 && <Brands name="하나로클럽" brandlogo="mart_hanaroclub" />}
                {show3 && <Brands name="코스트코" brandlogo="mart_costco" />}
                {show3 && <Brands name="홈플러스익스프레스" brandlogo="mart_homeplusexpress" />}
                {show3 && <Brands name="이마트 에브리데이" brandlogo="mart_emarteveryday" />}
                {show3 && <Brands name="GS마트" brandlogo="mart_gsmart" />}
                {show3 && <Brands name="롯데슈퍼" brandlogo="mart_lottesuper" />}
                {show3 && <Brands name="GS THE FRESH" brandlogo="mart_gsthefresh" />}
            </div>
            <br />



            <div>
                <div className={styles.zone1}><button className={styles.categoryName} onClick={() => { setShow4(!show4); }}> 편의점 </button></div>
                <div className={styles.zone2}><button className={styles.hideShow} onClick={() => { setShow4(!show4); }}> {show4 ? '▲' : '▼'}</button></div>
            </div>

            <hr />
            <div className={styles.row}>
                {show4 && <Brands name="GS25" brandlogo="convstore_gs25" />}
                {show4 && <Brands name="CU" brandlogo="convstore_cu" />}
                {show4 && <Brands name="세븐일레븐" brandlogo="convstore_seveneleven" />}
                {show4 && <Brands name="미니스톱" brandlogo="convstore_ministop" />}
                {show4 && <Brands name="이마트24" brandlogo="convstore_emart24" />}
                {show4 && <Brands name="바이더웨이" brandlogo="convstore_buytheway" />}
            </div>
            <br /><br /><br />

            <button onClick={() => {
                alert(SelectedBrands);
            }}>전송 확인</button>


            <div>
                <Link to='/service1/results'>
                    <button className={styles.sendButton}>
                        혜택 선택 완료
                    </button>
                </Link>
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

export default Card;