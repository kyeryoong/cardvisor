import styles from '../Service.module.css';

import Brands from './Brands';
import SelectedBrands from './SelectedBrands';
import Categories from '../Categories';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



let jsonArr = [];

function initArray() {
    let SelectedBrands = [];
}

function getJson() {
    let url = "http://localhost:8080/select";

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

function isSelected() {
    if (SelectedBrands.length == 0) {
        alert("혜택을 선택해주세요");

        return '/service1';
    }

    else {
        for (var i = 0; i < SelectedBrands.length; i++) {
            jsonArr[i] = { "memberId": 1, "brandName": SelectedBrands[i] }
        }
        getJson();

        return '/service1/results';
    }
}

{initArray()}

function Service1() {
    const navigate = useNavigate();

    const [sel, setSel] = useState(0);

    return (
        <div>
            

            <h1>카드 추천 받기</h1>
            <h2>선호하는 혜택을 체크해주세요!</h2>
            <br /><br />

            <div></div>

            <details className={styles.detailsZone}>
                <Categories categoryName="교통" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="버스" brandNameEng="transport_bus" setSel={setSel} />
                    <Brands brandNameKor="지하철" brandNameEng="transport_subway" setSel={setSel} />
                    <Brands brandNameKor="택시" brandNameEng="transport_taxi" setSel={setSel} />
                    <Brands brandNameKor="코레일" brandNameEng="transport_korail" setSel={setSel} />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" setSel={setSel} />
                    <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="통신" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="SK텔레콤" brandNameEng="communication_skt" setSel={setSel} />
                    <Brands brandNameKor="KT" brandNameEng="communication_kt" setSel={setSel} />
                    <Brands brandNameKor="LG유플러스" brandNameEng="communication_lgu" setSel={setSel} />
                    <Brands brandNameKor="SKT 인터넷" brandNameEng="communication_sktinternet" setSel={setSel} />
                    <Brands brandNameKor="KT olleh 인터넷" brandNameEng="communication_ktinternet" setSel={setSel} />
                    <Brands brandNameKor="LG U+ 인터넷" brandNameEng="communication_lguinternet" setSel={setSel} />
                    <Brands brandNameKor="SKT IPTV" brandNameEng="communication_sktiptv" setSel={setSel} />
                    <Brands brandNameKor="KT IP-TV" brandNameEng="communication_ktiptv" setSel={setSel} />
                    <Brands brandNameKor="LG U+ IPTV" brandNameEng="communication_lguiptv" setSel={setSel} />
                    <Brands brandNameKor="SKT 인터넷전화" brandNameEng="communication_sktintphone" setSel={setSel} />
                    <Brands brandNameKor="KT 인터넷전화" brandNameEng="communication_ktintphone" setSel={setSel} />
                    <Brands brandNameKor="LG U+ 인터넷전화" brandNameEng="communication_lguintphone" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="마트" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="이마트" brandNameEng="mart_emart" setSel={setSel} />
                    <Brands brandNameKor="홈플러스" brandNameEng="mart_homeplus" setSel={setSel} />
                    <Brands brandNameKor="롯데마트" brandNameEng="mart_lottemart" setSel={setSel} />
                    <Brands brandNameKor="농협하나로마트" brandNameEng="mart_nhhanaro" setSel={setSel} />
                    <Brands brandNameKor="이마트 트레이더스" brandNameEng="mart_emarttraders" setSel={setSel} />
                    <Brands brandNameKor="VIC 마켓" brandNameEng="mart_vicmarket" setSel={setSel} />
                    <Brands brandNameKor="하나로클럽" brandNameEng="mart_hanaroclub" setSel={setSel} />
                    <Brands brandNameKor="코스트코" brandNameEng="mart_costco" setSel={setSel} />
                    <Brands brandNameKor="홈플러스익스프레스" brandNameEng="mart_homeplusexpress" setSel={setSel} />
                    <Brands brandNameKor="이마트 에브리데이" brandNameEng="mart_emarteveryday" setSel={setSel} />
                    <Brands brandNameKor="GS마트" brandNameEng="mart_gsmart" setSel={setSel} />
                    <Brands brandNameKor="롯데슈퍼" brandNameEng="mart_lottesuper" setSel={setSel} />
                    <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="편의점" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" setSel={setSel} />
                    <Brands brandNameKor="CU" brandNameEng="convstore_cu" setSel={setSel} />
                    <Brands brandNameKor="세븐일레븐" brandNameEng="convstore_seveneleven" setSel={setSel} />
                    <Brands brandNameKor="미니스톱" brandNameEng="convstore_ministop" setSel={setSel} />
                    <Brands brandNameKor="이마트24" brandNameEng="convstore_emart24" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="영화" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="CGV" brandNameEng="movies_cgv" setSel={setSel} />
                    <Brands brandNameKor="롯데시네마" brandNameEng="movies_lottecinema" setSel={setSel} />
                    <Brands brandNameKor="메가박스" brandNameEng="movies_megabox" setSel={setSel} />
                    <Brands brandNameKor="CGV 온라인" brandNameEng="movies_cgvonline" setSel={setSel} />
                    <Brands brandNameKor="롯데시네마 온라인" brandNameEng="movies_lottecinemaonline" setSel={setSel} />
                    <Brands brandNameKor="메가박스 온라인" brandNameEng="movies_megaboxonline" setSel={setSel} />
                    <Brands brandNameKor="티켓링크 영화" brandNameEng="movies_ticketlinkmovie" setSel={setSel} />
                    <Brands brandNameKor="인터파크 영화" brandNameEng="movies_interparkmovie" setSel={setSel} />
                    <Brands brandNameKor="YES24 영화" brandNameEng="movies_yes24movie" setSel={setSel} />
                    <Brands brandNameKor="네이버영화" brandNameEng="movies_navermovie" setSel={setSel} />
                    <Brands brandNameKor="맥스무비" brandNameEng="movies_maxmovie" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="엔터테인먼트" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="넷플릭스" brandNameEng="entertainment_netflix" setSel={setSel} />
                    <Brands brandNameKor="유튜브 프리미엄" brandNameEng="entertainment_youtubepremium" setSel={setSel} />
                    <Brands brandNameKor="왓챠" brandNameEng="entertainment_watcha" setSel={setSel} />
                    <Brands brandNameKor="웨이브" brandNameEng="entertainment_wavve" setSel={setSel} />
                    <Brands brandNameKor="멜론" brandNameEng="entertainment_melon" setSel={setSel} />
                    <Brands brandNameKor="genie" brandNameEng="entertainment_genie" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="백화점" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="신세계백화점" brandNameEng="deptstore_shinsegaedept" setSel={setSel} />
                    <Brands brandNameKor="롯데백화점" brandNameEng="deptstore_lottedept" setSel={setSel} />
                    <Brands brandNameKor="현대백화점" brandNameEng="deptstore_hyundaidept" setSel={setSel} />
                    <Brands brandNameKor="갤러리아 백화점" brandNameEng="deptstore_galleriadept" setSel={setSel} />
                    <Brands brandNameKor="AK플라자 백화점" brandNameEng="deptstore_akplazadept" setSel={setSel} />
                    <Brands brandNameKor="롯데영플라자" brandNameEng="deptstore_lotteyoungplaza" setSel={setSel} />
                    <Brands brandNameKor="현대백화점 U-PLEX" brandNameEng="deptstore_hyundaiuplex" setSel={setSel} />
                    <Brands brandNameKor="디큐브백화점" brandNameEng="deptstore_dcubedept" setSel={setSel} />
                <Brands brandNameKor="뉴코아백화점" brandNameEng="deptstore_newcoredept" setSel={setSel} />

                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="온라인쇼핑몰" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="11번가" brandNameEng="onlineshopping_11st" setSel={setSel} />
                    <Brands brandNameKor="G마켓" brandNameEng="onlineshopping_gmarket" setSel={setSel} />
                    <Brands brandNameKor="옥션" brandNameEng="onlineshopping_auction" setSel={setSel} />
                    <Brands brandNameKor="네이버쇼핑" brandNameEng="onlineshopping_navershopping" setSel={setSel} />
                    <Brands brandNameKor="인터파크" brandNameEng="onlineshopping_interpark" setSel={setSel} />
                    <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" setSel={setSel} />
                    <Brands brandNameKor="롯데닷컴" brandNameEng="onlineshopping_lottecom" setSel={setSel} />
                    <Brands brandNameKor="롯데아이몰" brandNameEng="onlineshopping_lotteimall" setSel={setSel} />
                    <Brands brandNameKor="SSG닷컴" brandNameEng="onlineshopping_ssgcom" setSel={setSel} />
                    <Brands brandNameKor="신세계몰" brandNameEng="onlineshopping_shinsegaemall" setSel={setSel} />
                    <Brands brandNameKor="AK몰" brandNameEng="onlineshopping_akmall" setSel={setSel} />
                    <Brands brandNameKor="이마트몰" brandNameEng="onlineshopping_emartmall" setSel={setSel} />
                    <Brands brandNameKor="현대Hmall" brandNameEng="onlineshopping_hyundaihmall" setSel={setSel} />
                    <Brands brandNameKor="쿠팡" brandNameEng="onlineshopping_coupang" setSel={setSel} />
                    <Brands brandNameKor="위메프" brandNameEng="onlineshopping_wemakeprice" setSel={setSel} />
                    <Brands brandNameKor="티몬" brandNameEng="onlineshopping_tmon" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="간편결제" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="네이버페이" brandNameEng="easypay_naverpay" setSel={setSel} />
                    <Brands brandNameKor="카카오페이" brandNameEng="easypay_kakaopay" setSel={setSel} />
                    <Brands brandNameKor="삼성페이" brandNameEng="easypay_samsungpay" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="카페/베이커리" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="스타벅스" brandNameEng="cafebakery_starbucks" setSel={setSel} />
                    <Brands brandNameKor="스타벅스 APP 사이렌오더" brandNameEng="cafebakery_starbuckssirenorder" setSel={setSel} />
                    <Brands brandNameKor="투썸플레이스" brandNameEng="cafebakery_twosomeplace" setSel={setSel} />
                    <Brands brandNameKor="이디야커피" brandNameEng="cafebakery_ediyacoffee" setSel={setSel} />
                    <Brands brandNameKor="할리스커피" brandNameEng="cafebakery_hollyscoffee" setSel={setSel} />
                    <Brands brandNameKor="카페베네" brandNameEng="cafebakery_cafebene" setSel={setSel} />
                    <Brands brandNameKor="탐앤탐스" brandNameEng="cafebakery_tomntoms" setSel={setSel} />
                    <Brands brandNameKor="엔제리너스" brandNameEng="cafebakery_angelinus" setSel={setSel} />
                    <Brands brandNameKor="공차" brandNameEng="cafebakery_gongcha" setSel={setSel} />
                    <Brands brandNameKor="파스쿠찌" brandNameEng="cafebakery_passcucci" setSel={setSel} />
                    <Brands brandNameKor="커피빈" brandNameEng="cafebakery_coffeebean" setSel={setSel} />
                    <Brands brandNameKor="폴 바셋" brandNameEng="cafebakery_paulbassett" setSel={setSel} />
                    <Brands brandNameKor="배스킨라빈스 31" brandNameEng="cafebakery_baskinrobbins" setSel={setSel} />
                    <Brands brandNameKor="나뚜루" brandNameEng="cafebakery_natuur" setSel={setSel} />
                    <Brands brandNameKor="던킨도너츠" brandNameEng="cafebakery_dunkindonuts" setSel={setSel} />
                    <Brands brandNameKor="크리스피크림" brandNameEng="cafebakery_krispykreme" setSel={setSel} />
                    <Brands brandNameKor="미스터도넛" brandNameEng="cafebakery_misterdonut" setSel={setSel} />
                    <Brands brandNameKor="스무디킹" brandNameEng="cafebakery_smoothieking" setSel={setSel} />
                    <Brands brandNameKor="파리바게뜨" brandNameEng="cafebakery_parisbaguette" setSel={setSel} />
                    <Brands brandNameKor="뚜레쥬르" brandNameEng="cafebakery_touslesjours" setSel={setSel} />
                    <Brands brandNameKor="파리크라상" brandNameEng="cafebakery_pariscroissant" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="뷰티" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="올리브영" brandNameEng="beauty_oliveyoung" setSel={setSel} />
                    <Brands brandNameKor="랄라블라" brandNameEng="beauty_lalavla" setSel={setSel} />
                    <Brands brandNameKor="롭스" brandNameEng="beauty_lohbs" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="외식" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="아웃백스테이크하우스" brandNameEng="dining_outback" setSel={setSel} />
                    <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" setSel={setSel} />
                    <Brands brandNameKor="세븐스프링스" brandNameEng="dining_sevensprings" setSel={setSel} />
                    <Brands brandNameKor="VIPS" brandNameEng="dining_vips" setSel={setSel} />
                    <Brands brandNameKor="애슐리" brandNameEng="dining_ashely" setSel={setSel} />
                    <Brands brandNameKor="매드포갈릭" brandNameEng="dining_madforgarlic" setSel={setSel} />
                    <Brands brandNameKor="맥도날드" brandNameEng="dining_mcdonalds" setSel={setSel} />
                    <Brands brandNameKor="버거킹" brandNameEng="dining_burgerking" setSel={setSel} />
                    <Brands brandNameKor="롯데리아" brandNameEng="dining_lotteria" setSel={setSel} />
                    <Brands brandNameKor="KFC" brandNameEng="dining_kfc" setSel={setSel} />
                    <Brands brandNameKor="써브웨이" brandNameEng="dining_subway" setSel={setSel} />
                    <Brands brandNameKor="인앤아웃버거" brandNameEng="dining_innoutburger" setSel={setSel} />
                    <Brands brandNameKor="노브랜드버거" brandNameEng="dining_nobrandburger" setSel={setSel} />
                    <Brands brandNameKor="맘스터치" brandNameEng="dining_momstouch" setSel={setSel} />
                    <Brands brandNameKor="굽네치킨" brandNameEng="dining_goobne" setSel={setSel} />
                    <Brands brandNameKor="도미노 피자" brandNameEng="dining_dominos" setSel={setSel} />
                    <Brands brandNameKor="미스터피자" brandNameEng="dining_misterpizza" setSel={setSel} />
                    <Brands brandNameKor="피자헛" brandNameEng="dining_pizzahut" setSel={setSel} />
                    <Brands brandNameKor="파파존스피자" brandNameEng="dining_papajohns" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="도서" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="교보문고" brandNameEng="books_kyobobooks" setSel={setSel} />
                    <Brands brandNameKor="반디앤루니스" brandNameEng="books_bandinlunis" setSel={setSel} />
                    <Brands brandNameKor="영풍문고" brandNameEng="books_ypbooks" setSel={setSel} />
                    <Brands brandNameKor="인터넷 교보문고" brandNameEng="books_kyobobooksint" setSel={setSel} />
                    <Brands brandNameKor="반디앤루니스 온라인" brandNameEng="books_bandinlunisonline" setSel={setSel} />
                    <Brands brandNameKor="인터넷 영풍문고" brandNameEng="books_ypbooksint" setSel={setSel} />
                    <Brands brandNameKor="YES24 도서" brandNameEng="books_yes24books" setSel={setSel} />
                    <Brands brandNameKor="인터파크 도서" brandNameEng="books_interparkbooks" setSel={setSel} />
                    <Brands brandNameKor="알라딘" brandNameEng="books_aladin" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="테마파크" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="롯데월드" brandNameEng="themepark_lotteworld" setSel={setSel} />
                    <Brands brandNameKor="에버랜드" brandNameEng="themepark_everland" setSel={setSel} />
                    <Brands brandNameKor="서울랜드" brandNameEng="themepark_seoulland" setSel={setSel} />
                    <Brands brandNameKor="경주월드" brandNameEng="themepark_kjworld" setSel={setSel} />
                    <Brands brandNameKor="캐리비안 베이" brandNameEng="themepark_carribeanbay" setSel={setSel} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories categoryName="주유" />

                <div className={styles.service1Row}>
                    <Brands brandNameKor="GS칼텍스 휘발유" brandNameEng="fuel_gsgas" setSel={setSel} />
                    <Brands brandNameKor="SK엔크린 휘발유" brandNameEng="fuel_skgas" setSel={setSel} />
                    <Brands brandNameKor="현대오일뱅크 휘발유" brandNameEng="fuel_hobgas" setSel={setSel} />
                    <Brands brandNameKor="S-Oil 휘발유" brandNameEng="fuel_soilgas" setSel={setSel} />
                    <Brands brandNameKor="GS칼텍스 경유" brandNameEng="fuel_gsdis" setSel={setSel} />
                    <Brands brandNameKor="SK엔크린 경유" brandNameEng="fuel_skdis" setSel={setSel} />
                    <Brands brandNameKor="현대오일뱅크 경유" brandNameEng="fuel_hobdis" setSel={setSel} />
                    <Brands brandNameKor="S-Oil 경유" brandNameEng="fuel_soildis" setSel={setSel} />
                    <Brands brandNameKor="GS칼텍스 LPG" brandNameEng="fuel_gslpg" setSel={setSel} />
                    <Brands brandNameKor="SK엔크린 LPG" brandNameEng="fuel_sklpg" setSel={setSel} />
                    <Brands brandNameKor="현대오일뱅크 LPG" brandNameEng="fuel_hoblpg" setSel={setSel} />
                    <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" setSel={setSel} />
                    <Brands brandNameKor="GS칼텍스 등유" brandNameEng="fuel_gspet" setSel={setSel} />
                    <Brands brandNameKor="SK엔크린 등유" brandNameEng="fuel_skpet" setSel={setSel} />
                    <Brands brandNameKor="현대오일뱅크 등유" brandNameEng="fuel_hobpet" setSel={setSel} />
                    <Brands brandNameKor="S-Oil 등유" brandNameEng="fuel_soilpet" setSel={setSel} />
                    <Brands brandNameKor="주유 휘발유" brandNameEng="fuel_fuelgas" setSel={setSel} />
                    <Brands brandNameKor="주유 경유" brandNameEng="fuel_fueldis" setSel={setSel} />
                    <Brands brandNameKor="주유 LPG" brandNameEng="fuel_fuellpg" setSel={setSel} />
                    <Brands brandNameKor="주유 등유" brandNameEng="fuel_fuelpet" setSel={setSel} />
                </div>
            </details>



            <div>
                <button className={styles.sendButton} onClick={() => {
                    navigate(isSelected());
                }}>
                    {sel}개 혜택 선택 완료
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

export default Service1;