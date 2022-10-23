import styles from './Service2.module.css';

import Brands from './Brands';
import SelectedBrands from './SelectedBrands';
import Categories from '../Categories';
import Intro from '../../Intro';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Service2() {
    const navigate = useNavigate();



    return (
        <div>
            <Intro mainText="카드 추천 받기" subText="선호하는 혜택을 체크해주세요!" />
            <br /><br /><br />

            <div></div>

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
                    <Brands brandNameKor="이마트" brandNameEng="mart_emart" />
                    <Brands brandNameKor="홈플러스" brandNameEng="mart_homeplus" />
                    <Brands brandNameKor="롯데마트" brandNameEng="mart_lottemart" />
                    <Brands brandNameKor="농협하나로마트" brandNameEng="mart_nhhanaro" />
                    <Brands brandNameKor="이마트 트레이더스" brandNameEng="mart_emarttraders" />
                    <Brands brandNameKor="VIC 마켓" brandNameEng="mart_vicmarket" />
                    <Brands brandNameKor="하나로클럽" brandNameEng="mart_hanaroclub" />
                    <Brands brandNameKor="코스트코" brandNameEng="mart_costco" />
                    <Brands brandNameKor="홈플러스익스프레스" brandNameEng="mart_homeplusexpress" />
                    <Brands brandNameKor="이마트 에브리데이" brandNameEng="mart_emarteveryday" />
                    <Brands brandNameKor="GS마트" brandNameEng="mart_gsmart" />
                    <Brands brandNameKor="롯데슈퍼" brandNameEng="mart_lottesuper" />
                    <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="편의점"
                    categoryNameEng="Convenience Store"
                    iconName="category_convstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" />
                    <Brands brandNameKor="CU" brandNameEng="convstore_cu" />
                    <Brands brandNameKor="세븐일레븐" brandNameEng="convstore_seveneleven" />
                    <Brands brandNameKor="미니스톱" brandNameEng="convstore_ministop" />
                    <Brands brandNameKor="이마트24" brandNameEng="convstore_emart24" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="영화"
                    categoryNameEng="Movies"
                    iconName="category_movies"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="CGV" brandNameEng="movies_cgv" />
                    <Brands brandNameKor="롯데시네마" brandNameEng="movies_lottecinema" />
                    <Brands brandNameKor="메가박스" brandNameEng="movies_megabox" />
                    <Brands brandNameKor="CGV 온라인" brandNameEng="movies_cgvonline" />
                    <Brands brandNameKor="롯데시네마 온라인" brandNameEng="movies_lottecinemaonline" />
                    <Brands brandNameKor="메가박스 온라인" brandNameEng="movies_megaboxonline" />
                    <Brands brandNameKor="티켓링크 영화" brandNameEng="movies_ticketlinkmovie" />
                    <Brands brandNameKor="인터파크 영화" brandNameEng="movies_interparkmovie" />
                    <Brands brandNameKor="YES24 영화" brandNameEng="movies_yes24movie" />
                    <Brands brandNameKor="네이버영화" brandNameEng="movies_navermovie" />
                    <Brands brandNameKor="맥스무비" brandNameEng="movies_maxmovie" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="엔터테인먼트"
                    categoryNameEng="Entertainment"
                    iconName="category_entertainment"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="넷플릭스" brandNameEng="entertainment_netflix" />
                    <Brands brandNameKor="유튜브 프리미엄" brandNameEng="entertainment_youtubepremium" />
                    <Brands brandNameKor="왓챠" brandNameEng="entertainment_watcha" />
                    <Brands brandNameKor="웨이브" brandNameEng="entertainment_wavve" />
                    <Brands brandNameKor="멜론" brandNameEng="entertainment_melon" />
                    <Brands brandNameKor="genie" brandNameEng="entertainment_genie" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="백화점"
                    categoryNameEng="Department Store"
                    iconName="category_deptstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="신세계백화점" brandNameEng="deptstore_shinsegaedept" />
                    <Brands brandNameKor="롯데백화점" brandNameEng="deptstore_lottedept" />
                    <Brands brandNameKor="현대백화점" brandNameEng="deptstore_hyundaidept" />
                    <Brands brandNameKor="갤러리아 백화점" brandNameEng="deptstore_galleriadept" />
                    <Brands brandNameKor="AK플라자 백화점" brandNameEng="deptstore_akplazadept" />
                    <Brands brandNameKor="롯데영플라자" brandNameEng="deptstore_lotteyoungplaza" />
                    <Brands brandNameKor="현대백화점 U-PLEX" brandNameEng="deptstore_hyundaiuplex" />
                    <Brands brandNameKor="디큐브백화점" brandNameEng="deptstore_dcubedept" />
                    <Brands brandNameKor="뉴코아백화점" brandNameEng="deptstore_newcoredept" />

                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="온라인쇼핑몰"
                    categoryNameEng="Online Shopping"
                    iconName="category_onlineshopping"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="11번가" brandNameEng="onlineshopping_11st" />
                    <Brands brandNameKor="G마켓" brandNameEng="onlineshopping_gmarket" />
                    <Brands brandNameKor="옥션" brandNameEng="onlineshopping_auction" />
                    <Brands brandNameKor="네이버쇼핑" brandNameEng="onlineshopping_navershopping" />
                    <Brands brandNameKor="인터파크" brandNameEng="onlineshopping_interpark" />
                    <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" />
                    <Brands brandNameKor="롯데닷컴" brandNameEng="onlineshopping_lottecom" />
                    <Brands brandNameKor="롯데아이몰" brandNameEng="onlineshopping_lotteimall" />
                    <Brands brandNameKor="SSG닷컴" brandNameEng="onlineshopping_ssgcom" />
                    <Brands brandNameKor="신세계몰" brandNameEng="onlineshopping_shinsegaemall" />
                    <Brands brandNameKor="AK몰" brandNameEng="onlineshopping_akmall" />
                    <Brands brandNameKor="이마트몰" brandNameEng="onlineshopping_emartmall" />
                    <Brands brandNameKor="현대Hmall" brandNameEng="onlineshopping_hyundaihmall" />
                    <Brands brandNameKor="쿠팡" brandNameEng="onlineshopping_coupang" />
                    <Brands brandNameKor="위메프" brandNameEng="onlineshopping_wemakeprice" />
                    <Brands brandNameKor="티몬" brandNameEng="onlineshopping_tmon" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="간편결제"
                    categoryNameEng="Easy Pay"
                    iconName="category_easypay"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="네이버페이" brandNameEng="easypay_naverpay" />
                    <Brands brandNameKor="카카오페이" brandNameEng="easypay_kakaopay" />
                    <Brands brandNameKor="삼성페이" brandNameEng="easypay_samsungpay" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="카페/베이커리"
                    categoryNameEng="Cafe/Bakery"
                    iconName="category_cafebakery"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="스타벅스" brandNameEng="cafebakery_starbucks" />
                    <Brands brandNameKor="스타벅스 APP 사이렌오더" brandNameEng="cafebakery_starbuckssirenorder" />
                    <Brands brandNameKor="투썸플레이스" brandNameEng="cafebakery_twosomeplace" />
                    <Brands brandNameKor="이디야커피" brandNameEng="cafebakery_ediyacoffee" />
                    <Brands brandNameKor="할리스커피" brandNameEng="cafebakery_hollyscoffee" />
                    <Brands brandNameKor="카페베네" brandNameEng="cafebakery_cafebene" />
                    <Brands brandNameKor="탐앤탐스" brandNameEng="cafebakery_tomntoms" />
                    <Brands brandNameKor="엔제리너스" brandNameEng="cafebakery_angelinus" />
                    <Brands brandNameKor="공차" brandNameEng="cafebakery_gongcha" />
                    <Brands brandNameKor="파스쿠찌" brandNameEng="cafebakery_passcucci" />
                    <Brands brandNameKor="커피빈" brandNameEng="cafebakery_coffeebean" />
                    <Brands brandNameKor="폴 바셋" brandNameEng="cafebakery_paulbassett" />
                    <Brands brandNameKor="배스킨라빈스 31" brandNameEng="cafebakery_baskinrobbins" />
                    <Brands brandNameKor="나뚜루" brandNameEng="cafebakery_natuur" />
                    <Brands brandNameKor="던킨도너츠" brandNameEng="cafebakery_dunkindonuts" />
                    <Brands brandNameKor="크리스피크림" brandNameEng="cafebakery_krispykreme" />
                    <Brands brandNameKor="미스터도넛" brandNameEng="cafebakery_misterdonut" />
                    <Brands brandNameKor="스무디킹" brandNameEng="cafebakery_smoothieking" />
                    <Brands brandNameKor="파리바게뜨" brandNameEng="cafebakery_parisbaguette" />
                    <Brands brandNameKor="뚜레쥬르" brandNameEng="cafebakery_touslesjours" />
                    <Brands brandNameKor="파리크라상" brandNameEng="cafebakery_pariscroissant" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="뷰티"
                    categoryNameEng="Beauty"
                    iconName="category_beauty"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="올리브영" brandNameEng="beauty_oliveyoung" />
                    <Brands brandNameKor="랄라블라" brandNameEng="beauty_lalavla" />
                    <Brands brandNameKor="롭스" brandNameEng="beauty_lohbs" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="외식"
                    categoryNameEng="Dining"
                    iconName="category_dining"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="아웃백스테이크하우스" brandNameEng="dining_outback" />
                    <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" />
                    <Brands brandNameKor="세븐스프링스" brandNameEng="dining_sevensprings" />
                    <Brands brandNameKor="VIPS" brandNameEng="dining_vips" />
                    <Brands brandNameKor="애슐리" brandNameEng="dining_ashely" />
                    <Brands brandNameKor="매드포갈릭" brandNameEng="dining_madforgarlic" />
                    <Brands brandNameKor="맥도날드" brandNameEng="dining_mcdonalds" />
                    <Brands brandNameKor="버거킹" brandNameEng="dining_burgerking" />
                    <Brands brandNameKor="롯데리아" brandNameEng="dining_lotteria" />
                    <Brands brandNameKor="KFC" brandNameEng="dining_kfc" />
                    <Brands brandNameKor="써브웨이" brandNameEng="dining_subway" />
                    <Brands brandNameKor="인앤아웃버거" brandNameEng="dining_innoutburger" />
                    <Brands brandNameKor="노브랜드버거" brandNameEng="dining_nobrandburger" />
                    <Brands brandNameKor="맘스터치" brandNameEng="dining_momstouch" />
                    <Brands brandNameKor="굽네치킨" brandNameEng="dining_goobne" />
                    <Brands brandNameKor="도미노 피자" brandNameEng="dining_dominos" />
                    <Brands brandNameKor="미스터피자" brandNameEng="dining_misterpizza" />
                    <Brands brandNameKor="피자헛" brandNameEng="dining_pizzahut" />
                    <Brands brandNameKor="파파존스피자" brandNameEng="dining_papajohns" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="도서"
                    categoryNameEng="Books"
                    iconName="category_books"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="교보문고" brandNameEng="books_kyobobooks" />
                    <Brands brandNameKor="반디앤루니스" brandNameEng="books_bandinlunis" />
                    <Brands brandNameKor="영풍문고" brandNameEng="books_ypbooks" />
                    <Brands brandNameKor="인터넷 교보문고" brandNameEng="books_kyobobooksint" />
                    <Brands brandNameKor="반디앤루니스 온라인" brandNameEng="books_bandinlunisonline" />
                    <Brands brandNameKor="인터넷 영풍문고" brandNameEng="books_ypbooksint" />
                    <Brands brandNameKor="YES24 도서" brandNameEng="books_yes24books" />
                    <Brands brandNameKor="인터파크 도서" brandNameEng="books_interparkbooks" />
                    <Brands brandNameKor="알라딘" brandNameEng="books_aladin" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="테마파크"
                    categoryNameEng="Theme Park"
                    iconName="category_themepark"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="롯데월드" brandNameEng="themepark_lotteworld" />
                    <Brands brandNameKor="에버랜드" brandNameEng="themepark_everland" />
                    <Brands brandNameKor="서울랜드" brandNameEng="themepark_seoulland" />
                    <Brands brandNameKor="경주월드" brandNameEng="themepark_kjworld" />
                    <Brands brandNameKor="캐리비안 베이" brandNameEng="themepark_carribeanbay" />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="주유"
                    categoryNameEng="Fuel"
                    iconName="category_fuel"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS칼텍스 휘발유" brandNameEng="fuel_gsgas" />
                    <Brands brandNameKor="SK엔크린 휘발유" brandNameEng="fuel_skgas" />
                    <Brands brandNameKor="현대오일뱅크 휘발유" brandNameEng="fuel_hobgas" />
                    <Brands brandNameKor="S-Oil 휘발유" brandNameEng="fuel_soilgas"/>
                    <Brands brandNameKor="GS칼텍스 경유" brandNameEng="fuel_gsdis" />
                    <Brands brandNameKor="SK엔크린 경유" brandNameEng="fuel_skdis" />
                    <Brands brandNameKor="현대오일뱅크 경유" brandNameEng="fuel_hobdis" />
                    <Brands brandNameKor="S-Oil 경유" brandNameEng="fuel_soildis" />
                    <Brands brandNameKor="GS칼텍스 LPG" brandNameEng="fuel_gslpg" />
                    <Brands brandNameKor="SK엔크린 LPG" brandNameEng="fuel_sklpg" />
                    <Brands brandNameKor="현대오일뱅크 LPG" brandNameEng="fuel_hoblpg" />
                    <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" />
                    <Brands brandNameKor="GS칼텍스 등유" brandNameEng="fuel_gspet" />
                    <Brands brandNameKor="SK엔크린 등유" brandNameEng="fuel_skpet" />
                    <Brands brandNameKor="현대오일뱅크 등유" brandNameEng="fuel_hobpet" />
                    <Brands brandNameKor="S-Oil 등유" brandNameEng="fuel_soilpet" />
                    <Brands brandNameKor="주유 휘발유" brandNameEng="fuel_fuelgas" />
                    <Brands brandNameKor="주유 경유" brandNameEng="fuel_fueldis" />
                    <Brands brandNameKor="주유 LPG" brandNameEng="fuel_fuellpg" />
                    <Brands brandNameKor="주유 등유" brandNameEng="fuel_fuelpet" />
                </div>
            </details>
            <br /><br /><br />



            <div>
                <button className={styles.sendButton} onClick={() => {
                    navigate("analysis")
                }}>
                    혜택 선택 완료
                </button>
            </div>
            <br />

            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate("/main");
                }}>
                    홈 화면으로
                </button>
            </div>
        </div >
    );
}

export default Service2;