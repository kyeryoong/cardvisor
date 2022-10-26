import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SelectedBrands from './SelectedBrands';

import Brands from './Brands';
import Categories from '../Categories';
import HeaderBottom from '../../HeaderBottom';

import styles from './Service2.module.css';



function Service2() {
    const navigate = useNavigate();

    SelectedBrands[0] = new Array(6).fill(0);
    SelectedBrands[1] = new Array(12).fill(0);
    SelectedBrands[2] = new Array(13).fill(0);
    SelectedBrands[3] = new Array(5).fill(0);
    SelectedBrands[4] = new Array(11).fill(0);
    SelectedBrands[5] = new Array(6).fill(0);
    SelectedBrands[6] = new Array(9).fill(0);
    SelectedBrands[7] = new Array(16).fill(0);
    SelectedBrands[8] = new Array(3).fill(0);
    SelectedBrands[9] = new Array(21).fill(0);
    SelectedBrands[10] = new Array(3).fill(0);
    SelectedBrands[11] = new Array(19).fill(0);
    SelectedBrands[12] = new Array(9).fill(0);
    SelectedBrands[13] = new Array(5).fill(0);
    SelectedBrands[14] = new Array(20).fill(0); 
    


    return (
        <div>
            <HeaderBottom mainText="카드 추천 받기" subText="선호하는 브랜드의 금액을 입력해주세요." />

            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="교통"
                    categoryNameEng="Transportation"
                    iconName="category_transportation"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="버스" brandNameEng="transport_bus" i={0} j={0} />
                    <Brands brandNameKor="지하철" brandNameEng="transport_subway" i={0} j={1} />
                    <Brands brandNameKor="택시" brandNameEng="transport_taxi" i={0} j={2} />
                    <Brands brandNameKor="코레일" brandNameEng="transport_korail" i={0} j={3} />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" i={0} j={4} />
                    <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" i={0} j={5} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="통신"
                    categoryNameEng="Communication"
                    iconName="category_communication"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="SK텔레콤" brandNameEng="communication_skt" i={1} j={0} />
                    <Brands brandNameKor="KT" brandNameEng="communication_kt" i={1} j={1} />
                    <Brands brandNameKor="LG유플러스" brandNameEng="communication_lgu" i={1} j={2} />
                    <Brands brandNameKor="SKT 인터넷" brandNameEng="communication_sktinternet" i={1} j={3} />
                    <Brands brandNameKor="KT olleh 인터넷" brandNameEng="communication_ktinternet" i={1} j={4} />
                    <Brands brandNameKor="LG U+ 인터넷" brandNameEng="communication_lguinternet" i={1} j={5} />
                    <Brands brandNameKor="SKT IPTV" brandNameEng="communication_sktiptv" i={1} j={6} />
                    <Brands brandNameKor="KT IP-TV" brandNameEng="communication_ktiptv" i={1} j={7} />
                    <Brands brandNameKor="LG U+ IPTV" brandNameEng="communication_lguiptv" i={1} j={8} />
                    <Brands brandNameKor="SKT 인터넷전화" brandNameEng="communication_sktintphone" i={1} j={9} />
                    <Brands brandNameKor="KT 인터넷전화" brandNameEng="communication_ktintphone" i={1} j={10} />
                    <Brands brandNameKor="LG U+ 인터넷전화" brandNameEng="communication_lguintphone" i={1} j={11} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="마트"
                    categoryNameEng="Mart"
                    iconName="category_mart"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="이마트" brandNameEng="mart_emart" i={2} j={0} />
                    <Brands brandNameKor="홈플러스" brandNameEng="mart_homeplus" i={2} j={1} />
                    <Brands brandNameKor="롯데마트" brandNameEng="mart_lottemart" i={2} j={2} />
                    <Brands brandNameKor="농협하나로마트" brandNameEng="mart_nhhanaro" i={2} j={3} />
                    <Brands brandNameKor="이마트 트레이더스" brandNameEng="mart_emarttraders" i={2} j={4} />
                    <Brands brandNameKor="VIC 마켓" brandNameEng="mart_vicmarket" i={2} j={5} />
                    <Brands brandNameKor="하나로클럽" brandNameEng="mart_hanaroclub" i={2} j={6} />
                    <Brands brandNameKor="코스트코" brandNameEng="mart_costco" i={2} j={7} />
                    <Brands brandNameKor="홈플러스익스프레스" brandNameEng="mart_homeplusexpress" i={2} j={8} />
                    <Brands brandNameKor="이마트 에브리데이" brandNameEng="mart_emarteveryday" i={2} j={9} />
                    <Brands brandNameKor="GS마트" brandNameEng="mart_gsmart" i={2} j={10} />
                    <Brands brandNameKor="롯데슈퍼" brandNameEng="mart_lottesuper" i={2} j={11} />
                    <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" i={2} j={12} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="편의점"
                    categoryNameEng="Convenience Store"
                    iconName="category_convstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" i={3} j={0} />
                    <Brands brandNameKor="CU" brandNameEng="convstore_cu" i={3} j={1} />
                    <Brands brandNameKor="세븐일레븐" brandNameEng="convstore_seveneleven" i={3} j={2} />
                    <Brands brandNameKor="미니스톱" brandNameEng="convstore_ministop" i={3} j={3} />
                    <Brands brandNameKor="이마트24" brandNameEng="convstore_emart24" i={3} j={4} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="영화"
                    categoryNameEng="Movies"
                    iconName="category_movies"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="CGV" brandNameEng="movies_cgv" i={4} j={0} />
                    <Brands brandNameKor="롯데시네마" brandNameEng="movies_lottecinema" i={4} j={1} />
                    <Brands brandNameKor="메가박스" brandNameEng="movies_megabox" i={4} j={2} />
                    <Brands brandNameKor="CGV 온라인" brandNameEng="movies_cgvonline" i={4} j={3} />
                    <Brands brandNameKor="롯데시네마 온라인" brandNameEng="movies_lottecinemaonline" i={4} j={4} />
                    <Brands brandNameKor="메가박스 온라인" brandNameEng="movies_megaboxonline" i={4} j={5} />
                    <Brands brandNameKor="티켓링크 영화" brandNameEng="movies_ticketlinkmovie" i={4} j={6} />
                    <Brands brandNameKor="인터파크 영화" brandNameEng="movies_interparkmovie" i={4} j={7} />
                    <Brands brandNameKor="YES24 영화" brandNameEng="movies_yes24movie" i={4} j={8} />
                    <Brands brandNameKor="네이버영화" brandNameEng="movies_navermovie" i={4} j={9} />
                    <Brands brandNameKor="맥스무비" brandNameEng="movies_maxmovie" i={4} j={10} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="엔터테인먼트"
                    categoryNameEng="Entertainment"
                    iconName="category_entertainment"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="넷플릭스" brandNameEng="entertainment_netflix" i={5} j={0} />
                    <Brands brandNameKor="유튜브 프리미엄" brandNameEng="entertainment_youtubepremium" i={5} j={1} />
                    <Brands brandNameKor="왓챠" brandNameEng="entertainment_watcha" i={5} j={2} />
                    <Brands brandNameKor="웨이브" brandNameEng="entertainment_wavve" i={5} j={3} />
                    <Brands brandNameKor="멜론" brandNameEng="entertainment_melon" i={5} j={4} />
                    <Brands brandNameKor="genie" brandNameEng="entertainment_genie" i={5} j={5} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="백화점"
                    categoryNameEng="Department Store"
                    iconName="category_deptstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="신세계백화점" brandNameEng="deptstore_shinsegaedept" i={6} j={0} />
                    <Brands brandNameKor="롯데백화점" brandNameEng="deptstore_lottedept" i={6} j={1} />
                    <Brands brandNameKor="현대백화점" brandNameEng="deptstore_hyundaidept" i={6} j={2} />
                    <Brands brandNameKor="갤러리아 백화점" brandNameEng="deptstore_galleriadept" i={6} j={3} />
                    <Brands brandNameKor="AK플라자 백화점" brandNameEng="deptstore_akplazadept" i={6} j={4} />
                    <Brands brandNameKor="롯데영플라자" brandNameEng="deptstore_lotteyoungplaza" i={6} j={5} />
                    <Brands brandNameKor="현대백화점 U-PLEX" brandNameEng="deptstore_hyundaiuplex" i={6} j={6} />
                    <Brands brandNameKor="디큐브백화점" brandNameEng="deptstore_dcubedept" i={6} j={7} />
                    <Brands brandNameKor="뉴코아백화점" brandNameEng="deptstore_newcoredept" i={6} j={8} />

                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="온라인쇼핑몰"
                    categoryNameEng="Online Shopping"
                    iconName="category_onlineshopping"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="11번가" brandNameEng="onlineshopping_11st" i={7} j={0} />
                    <Brands brandNameKor="G마켓" brandNameEng="onlineshopping_gmarket" i={7} j={1} />
                    <Brands brandNameKor="옥션" brandNameEng="onlineshopping_auction" i={7} j={2} />
                    <Brands brandNameKor="네이버쇼핑" brandNameEng="onlineshopping_navershopping" i={7} j={3} />
                    <Brands brandNameKor="인터파크" brandNameEng="onlineshopping_interpark" i={7} j={4} />
                    <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" i={7} j={5} />
                    <Brands brandNameKor="롯데닷컴" brandNameEng="onlineshopping_lottecom" i={7} j={6} />
                    <Brands brandNameKor="롯데아이몰" brandNameEng="onlineshopping_lotteimall" i={7} j={7} />
                    <Brands brandNameKor="SSG닷컴" brandNameEng="onlineshopping_ssgcom" i={7} j={8} />
                    <Brands brandNameKor="신세계몰" brandNameEng="onlineshopping_shinsegaemall" i={7} j={9} />
                    <Brands brandNameKor="AK몰" brandNameEng="onlineshopping_akmall" i={7} j={10} />
                    <Brands brandNameKor="이마트몰" brandNameEng="onlineshopping_emartmall" i={7} j={11} />
                    <Brands brandNameKor="현대Hmall" brandNameEng="onlineshopping_hyundaihmall" i={7} j={12} />
                    <Brands brandNameKor="쿠팡" brandNameEng="onlineshopping_coupang" i={7} j={13} />
                    <Brands brandNameKor="위메프" brandNameEng="onlineshopping_wemakeprice" i={7} j={14} />
                    <Brands brandNameKor="티몬" brandNameEng="onlineshopping_tmon" i={7} j={15} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="간편결제"
                    categoryNameEng="Easy Pay"
                    iconName="category_easypay"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="네이버페이" brandNameEng="easypay_naverpay" i={8} j={0} />
                    <Brands brandNameKor="카카오페이" brandNameEng="easypay_kakaopay" i={8} j={1} />
                    <Brands brandNameKor="삼성페이" brandNameEng="easypay_samsungpay" i={8} j={2} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="카페/베이커리"
                    categoryNameEng="Cafe/Bakery"
                    iconName="category_cafebakery"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="스타벅스" brandNameEng="cafebakery_starbucks" i={9} j={0} />
                    <Brands brandNameKor="스타벅스 APP 사이렌오더" brandNameEng="cafebakery_starbuckssirenorder" i={9} j={1} />
                    <Brands brandNameKor="투썸플레이스" brandNameEng="cafebakery_twosomeplace" i={9} j={2} />
                    <Brands brandNameKor="이디야커피" brandNameEng="cafebakery_ediyacoffee" i={9} j={3} />
                    <Brands brandNameKor="할리스커피" brandNameEng="cafebakery_hollyscoffee" i={9} j={4} />
                    <Brands brandNameKor="카페베네" brandNameEng="cafebakery_cafebene" i={9} j={5} />
                    <Brands brandNameKor="탐앤탐스" brandNameEng="cafebakery_tomntoms" i={9} j={6} />
                    <Brands brandNameKor="엔제리너스" brandNameEng="cafebakery_angelinus" i={9} j={7} />
                    <Brands brandNameKor="공차" brandNameEng="cafebakery_gongcha" i={9} j={8} />
                    <Brands brandNameKor="파스쿠찌" brandNameEng="cafebakery_passcucci" i={9} j={9} />
                    <Brands brandNameKor="커피빈" brandNameEng="cafebakery_coffeebean" i={9} j={10} />
                    <Brands brandNameKor="폴 바셋" brandNameEng="cafebakery_paulbassett" i={9} j={11} />
                    <Brands brandNameKor="배스킨라빈스 31" brandNameEng="cafebakery_baskinrobbins" i={9} j={12} />
                    <Brands brandNameKor="나뚜루" brandNameEng="cafebakery_natuur" i={9} j={13} />
                    <Brands brandNameKor="던킨도너츠" brandNameEng="cafebakery_dunkindonuts" i={9} j={14} />
                    <Brands brandNameKor="크리스피크림" brandNameEng="cafebakery_krispykreme" i={9} j={15} />
                    <Brands brandNameKor="미스터도넛" brandNameEng="cafebakery_misterdonut" i={9} j={16} />
                    <Brands brandNameKor="스무디킹" brandNameEng="cafebakery_smoothieking" i={9} j={17} />
                    <Brands brandNameKor="파리바게뜨" brandNameEng="cafebakery_parisbaguette" i={9} j={18} />
                    <Brands brandNameKor="뚜레쥬르" brandNameEng="cafebakery_touslesjours" i={9} j={19} />
                    <Brands brandNameKor="파리크라상" brandNameEng="cafebakery_pariscroissant" i={9} j={20} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="뷰티"
                    categoryNameEng="Beauty"
                    iconName="category_beauty"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="올리브영" brandNameEng="beauty_oliveyoung" i={10} j={0} />
                    <Brands brandNameKor="랄라블라" brandNameEng="beauty_lalavla" i={10} j={1} />
                    <Brands brandNameKor="롭스" brandNameEng="beauty_lohbs" i={10} j={2} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="외식"
                    categoryNameEng="Dining"
                    iconName="category_dining"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="아웃백스테이크하우스" brandNameEng="dining_outback" i={11} j={0} />
                    <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" i={11} j={1} />
                    <Brands brandNameKor="세븐스프링스" brandNameEng="dining_sevensprings" i={11} j={2} />
                    <Brands brandNameKor="VIPS" brandNameEng="dining_vips" i={11} j={3} />
                    <Brands brandNameKor="애슐리" brandNameEng="dining_ashely" i={11} j={4} />
                    <Brands brandNameKor="매드포갈릭" brandNameEng="dining_madforgarlic" i={11} j={5} />
                    <Brands brandNameKor="맥도날드" brandNameEng="dining_mcdonalds" i={11} j={6} />
                    <Brands brandNameKor="버거킹" brandNameEng="dining_burgerking" i={11} j={7} />
                    <Brands brandNameKor="롯데리아" brandNameEng="dining_lotteria" i={11} j={8} />
                    <Brands brandNameKor="KFC" brandNameEng="dining_kfc" i={11} j={9} />
                    <Brands brandNameKor="써브웨이" brandNameEng="dining_subway" i={11} j={10} />
                    <Brands brandNameKor="인앤아웃버거" brandNameEng="dining_innoutburger" i={11} j={11} />
                    <Brands brandNameKor="노브랜드버거" brandNameEng="dining_nobrandburger" i={11} j={12} />
                    <Brands brandNameKor="맘스터치" brandNameEng="dining_momstouch" i={11} j={13} />
                    <Brands brandNameKor="굽네치킨" brandNameEng="dining_goobne" i={11} j={14} />
                    <Brands brandNameKor="도미노 피자" brandNameEng="dining_dominos" i={11} j={15} />
                    <Brands brandNameKor="미스터피자" brandNameEng="dining_misterpizza" i={11} j={16} />
                    <Brands brandNameKor="피자헛" brandNameEng="dining_pizzahut" i={11} j={17} />
                    <Brands brandNameKor="파파존스피자" brandNameEng="dining_papajohns" i={11} j={18} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="도서"
                    categoryNameEng="Books"
                    iconName="category_books"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="교보문고" brandNameEng="books_kyobobooks" i={12} j={0} />
                    <Brands brandNameKor="반디앤루니스" brandNameEng="books_bandinlunis" i={12} j={1} />
                    <Brands brandNameKor="영풍문고" brandNameEng="books_ypbooks" i={12} j={2} />
                    <Brands brandNameKor="인터넷 교보문고" brandNameEng="books_kyobobooksint" i={12} j={3} />
                    <Brands brandNameKor="반디앤루니스 온라인" brandNameEng="books_bandinlunisonline" i={12} j={4} />
                    <Brands brandNameKor="인터넷 영풍문고" brandNameEng="books_ypbooksint" i={12} j={5} />
                    <Brands brandNameKor="YES24 도서" brandNameEng="books_yes24books" i={12} j={6} />
                    <Brands brandNameKor="인터파크 도서" brandNameEng="books_interparkbooks" i={12} j={7} />
                    <Brands brandNameKor="알라딘" brandNameEng="books_aladin" i={12} j={8} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="테마파크"
                    categoryNameEng="Theme Park"
                    iconName="category_themepark"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="롯데월드" brandNameEng="themepark_lotteworld" i={13} j={0} />
                    <Brands brandNameKor="에버랜드" brandNameEng="themepark_everland" i={13} j={1} />
                    <Brands brandNameKor="서울랜드" brandNameEng="themepark_seoulland" i={13} j={2} />
                    <Brands brandNameKor="경주월드" brandNameEng="themepark_kjworld" i={13} j={3} />
                    <Brands brandNameKor="캐리비안 베이" brandNameEng="themepark_carribeanbay" i={13} j={4} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="주유"
                    categoryNameEng="Fuel"
                    iconName="category_fuel"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS칼텍스 휘발유" brandNameEng="fuel_gsgas" i={14} j={0} />
                    <Brands brandNameKor="SK엔크린 휘발유" brandNameEng="fuel_skgas" i={14} j={1} />
                    <Brands brandNameKor="현대오일뱅크 휘발유" brandNameEng="fuel_hobgas" i={14} j={2} />
                    <Brands brandNameKor="S-Oil 휘발유" brandNameEng="fuel_soilgas" i={14} j={3} />
                    <Brands brandNameKor="GS칼텍스 경유" brandNameEng="fuel_gsdis" i={14} j={4} />
                    <Brands brandNameKor="SK엔크린 경유" brandNameEng="fuel_skdis" i={14} j={5} />
                    <Brands brandNameKor="현대오일뱅크 경유" brandNameEng="fuel_hobdis" i={14} j={6} />
                    <Brands brandNameKor="S-Oil 경유" brandNameEng="fuel_soildis" i={14} j={7} />
                    <Brands brandNameKor="GS칼텍스 LPG" brandNameEng="fuel_gslpg" i={14} j={8} />
                    <Brands brandNameKor="SK엔크린 LPG" brandNameEng="fuel_sklpg" i={14} j={9} />
                    <Brands brandNameKor="현대오일뱅크 LPG" brandNameEng="fuel_hoblpg" i={14} j={10} />
                    <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" i={14} j={11} />
                    <Brands brandNameKor="GS칼텍스 등유" brandNameEng="fuel_gspet" i={14} j={12} />
                    <Brands brandNameKor="SK엔크린 등유" brandNameEng="fuel_skpet" i={14} j={13} />
                    <Brands brandNameKor="현대오일뱅크 등유" brandNameEng="fuel_hobpet" i={14} j={14} />
                    <Brands brandNameKor="S-Oil 등유" brandNameEng="fuel_soilpet" i={14} j={15} />
                    <Brands brandNameKor="주유 휘발유" brandNameEng="fuel_fuelgas" i={14} j={16} />
                    <Brands brandNameKor="주유 경유" brandNameEng="fuel_fueldis" i={14} j={17} />
                    <Brands brandNameKor="주유 LPG" brandNameEng="fuel_fuellpg" i={14} j={18} />
                    <Brands brandNameKor="주유 등유" brandNameEng="fuel_fuelpet" i={14} j={19} />
                </div>
            </details>
            <br /><br /><br />




            <button
                className={styles.sendButtonEnable}

                onClick={() => {
                    var sumByCategories = new Array(15).fill(0);
                    var checkSum = 0;

                    for (var i = 0; i < 15; i++) {
                        sumByCategories[i] = SelectedBrands[i].reduce((accumulator, curr) => accumulator + curr)
                    }

                    for (i = 0; i < 15; i++) {
                        if (sumByCategories[i] > 0) {
                            checkSum = checkSum + 1;
                        }
                    }

                    if (checkSum > 1) {
                        navigate("analysis");
                    }

                    else {
                        alert("2개 이상의 카테고리에 금액을 입력해주세요.");
                    }
                }}>
                혜택 선택 완료
            </button>
            <br /><br /><br />
        </div >
    );
}

export default Service2;