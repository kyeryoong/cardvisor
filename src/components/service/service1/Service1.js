import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import Brands from './Brands';
import SelectedBrands from './SelectedBrands';
import Categories from '../Categories';
import HeaderBottom from '../../HeaderBottom';
import brandParser from '../../Parser';



import styles from './Service1.module.css';



function Service1() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const [selNumber, setSelNumber] = useState(0);
    const [selArray, setSelArray] = useState([]);
    let jsonArr = [];

    localStorage.clear();



    function deleteAllSelected () {
        for (var i = 0; i < SelectedBrands.length; i++) {
            SelectedBrands.pop();
        }
    }



    function SelectedZone() {
        return (
            <div className={styles.selectedZone}>
                {
                    selArray.map(current => (
                        <span className={styles.selectedElements} onClick={() => {
                            if (!SelectedBrands.includes(current)) {
                                SelectedBrands.push(current);
                            }
                
                            else {
                                var index = SelectedBrands.indexOf(current);
                
                                if (index > -1) {
                                    SelectedBrands.splice(index, 1);
                                }
                            }
                
                            setSelNumber(SelectedBrands.length);
                            setSelArray(SelectedBrands);
                        }}>
                            {brandParser(current)}
                            <span className={styles.xLetter}>×</span>
                        </span>
                    ))
                }
            </div>
        )
    }



    useEffect(() => {
        deleteAllSelected();
    }, [])




    return (
        <div>
            <HeaderBottom mainText="카드 추천 받기" subText="선호하는 혜택을 체크해주세요" />

            {SelectedBrands.length !== 0 && <SelectedZone />}

            <div>
                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="교통"
                        categoryNameEng="Transportation"
                        iconName="category_transportation"
                    />


                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="버스" brandNameEng="transport_bus" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="지하철" brandNameEng="transport_subway" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="택시" brandNameEng="transport_taxi" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="코레일" brandNameEng="transport_korail" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SRT" brandNameEng="transport_srt" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="통신"
                        categoryNameEng="Communication"
                        iconName="category_communication"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="SK텔레콤" brandNameEng="communication_skt" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="KT" brandNameEng="communication_kt" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="LG유플러스" brandNameEng="communication_lgu" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SKT 인터넷" brandNameEng="communication_sktinternet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="KT olleh 인터넷" brandNameEng="communication_ktinternet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="LG U+ 인터넷" brandNameEng="communication_lguinternet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SKT IPTV" brandNameEng="communication_sktiptv" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="KT IP-TV" brandNameEng="communication_ktiptv" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="LG U+ IPTV" brandNameEng="communication_lguiptv" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SKT 인터넷전화" brandNameEng="communication_sktintphone" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="KT 인터넷전화" brandNameEng="communication_ktintphone" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="LG U+ 인터넷전화" brandNameEng="communication_lguintphone" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="마트"
                        categoryNameEng="Mart"
                        iconName="category_mart"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="이마트" brandNameEng="mart_emart" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="홈플러스" brandNameEng="mart_homeplus" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데마트" brandNameEng="mart_lottemart" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="농협하나로마트" brandNameEng="mart_nhhanaro" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="이마트 트레이더스" brandNameEng="mart_emarttraders" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="VIC 마켓" brandNameEng="mart_vicmarket" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="하나로클럽" brandNameEng="mart_hanaroclub" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="코스트코" brandNameEng="mart_costco" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="홈플러스익스프레스" brandNameEng="mart_homeplusexpress" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="이마트 에브리데이" brandNameEng="mart_emarteveryday" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS마트" brandNameEng="mart_gsmart" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데슈퍼" brandNameEng="mart_lottesuper" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="편의점"
                        categoryNameEng="Convenience Store"
                        iconName="category_convstore"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="CU" brandNameEng="convstore_cu" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="세븐일레븐" brandNameEng="convstore_seveneleven" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="미니스톱" brandNameEng="convstore_ministop" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="이마트24" brandNameEng="convstore_emart24" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="영화"
                        categoryNameEng="Movies"
                        iconName="category_movies"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="CGV" brandNameEng="movies_cgv" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데시네마" brandNameEng="movies_lottecinema" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="메가박스" brandNameEng="movies_megabox" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="CGV 온라인" brandNameEng="movies_cgvonline" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데시네마 온라인" brandNameEng="movies_lottecinemaonline" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="메가박스 온라인" brandNameEng="movies_megaboxonline" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="티켓링크 영화" brandNameEng="movies_ticketlinkmovie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인터파크 영화" brandNameEng="movies_interparkmovie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="YES24 영화" brandNameEng="movies_yes24movie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="네이버영화" brandNameEng="movies_navermovie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="맥스무비" brandNameEng="movies_maxmovie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="엔터테인먼트"
                        categoryNameEng="Entertainment"
                        iconName="category_entertainment"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="넷플릭스" brandNameEng="entertainment_netflix" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="유튜브 프리미엄" brandNameEng="entertainment_youtubepremium" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="왓챠" brandNameEng="entertainment_watcha" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="웨이브" brandNameEng="entertainment_wavve" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="멜론" brandNameEng="entertainment_melon" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="genie" brandNameEng="entertainment_genie" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="백화점"
                        categoryNameEng="Department Store"
                        iconName="category_deptstore"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="신세계백화점" brandNameEng="deptstore_shinsegaedept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데백화점" brandNameEng="deptstore_lottedept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대백화점" brandNameEng="deptstore_hyundaidept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="갤러리아 백화점" brandNameEng="deptstore_galleriadept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="AK플라자 백화점" brandNameEng="deptstore_akplazadept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데영플라자" brandNameEng="deptstore_lotteyoungplaza" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대백화점 U-PLEX" brandNameEng="deptstore_hyundaiuplex" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="디큐브백화점" brandNameEng="deptstore_dcubedept" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="뉴코아백화점" brandNameEng="deptstore_newcoredept" setSelNumber={setSelNumber} setSelArray={setSelArray} />

                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="온라인쇼핑몰"
                        categoryNameEng="Online Shopping"
                        iconName="category_onlineshopping"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="11번가" brandNameEng="onlineshopping_11st" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="G마켓" brandNameEng="onlineshopping_gmarket" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="옥션" brandNameEng="onlineshopping_auction" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="네이버쇼핑" brandNameEng="onlineshopping_navershopping" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인터파크" brandNameEng="onlineshopping_interpark" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데닷컴" brandNameEng="onlineshopping_lottecom" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데아이몰" brandNameEng="onlineshopping_lotteimall" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SSG닷컴" brandNameEng="onlineshopping_ssgcom" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="신세계몰" brandNameEng="onlineshopping_shinsegaemall" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="AK몰" brandNameEng="onlineshopping_akmall" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="이마트몰" brandNameEng="onlineshopping_emartmall" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대Hmall" brandNameEng="onlineshopping_hyundaihmall" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="쿠팡" brandNameEng="onlineshopping_coupang" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="위메프" brandNameEng="onlineshopping_wemakeprice" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="티몬" brandNameEng="onlineshopping_tmon" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="간편결제"
                        categoryNameEng="Easy Pay"
                        iconName="category_easypay"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="네이버페이" brandNameEng="easypay_naverpay" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="카카오페이" brandNameEng="easypay_kakaopay" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="삼성페이" brandNameEng="easypay_samsungpay" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="카페/베이커리"
                        categoryNameEng="Cafe/Bakery"
                        iconName="category_cafebakery"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="스타벅스" brandNameEng="cafebakery_starbucks" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="스타벅스 사이렌오더" brandNameEng="cafebakery_starbuckssirenorder" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="투썸플레이스" brandNameEng="cafebakery_twosomeplace" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="이디야커피" brandNameEng="cafebakery_ediyacoffee" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="할리스커피" brandNameEng="cafebakery_hollyscoffee" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="카페베네" brandNameEng="cafebakery_cafebene" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="탐앤탐스" brandNameEng="cafebakery_tomntoms" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="엔제리너스" brandNameEng="cafebakery_angelinus" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="공차" brandNameEng="cafebakery_gongcha" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="파스쿠찌" brandNameEng="cafebakery_passcucci" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="커피빈" brandNameEng="cafebakery_coffeebean" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="폴 바셋" brandNameEng="cafebakery_paulbassett" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="배스킨라빈스 31" brandNameEng="cafebakery_baskinrobbins" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="나뚜루" brandNameEng="cafebakery_natuur" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="던킨도너츠" brandNameEng="cafebakery_dunkindonuts" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="크리스피크림" brandNameEng="cafebakery_krispykreme" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="미스터도넛" brandNameEng="cafebakery_misterdonut" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="스무디킹" brandNameEng="cafebakery_smoothieking" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="파리바게뜨" brandNameEng="cafebakery_parisbaguette" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="뚜레쥬르" brandNameEng="cafebakery_touslesjours" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="파리크라상" brandNameEng="cafebakery_pariscroissant" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="뷰티"
                        categoryNameEng="Beauty"
                        iconName="category_beauty"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="올리브영" brandNameEng="beauty_oliveyoung" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="랄라블라" brandNameEng="beauty_lalavla" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롭스" brandNameEng="beauty_lohbs" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="외식"
                        categoryNameEng="Dining"
                        iconName="category_dining"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="아웃백스테이크하우스" brandNameEng="dining_outback" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="세븐스프링스" brandNameEng="dining_sevensprings" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="VIPS" brandNameEng="dining_vips" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="애슐리" brandNameEng="dining_ashely" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="매드포갈릭" brandNameEng="dining_madforgarlic" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="맥도날드" brandNameEng="dining_mcdonalds" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="버거킹" brandNameEng="dining_burgerking" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="롯데리아" brandNameEng="dining_lotteria" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="KFC" brandNameEng="dining_kfc" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="써브웨이" brandNameEng="dining_subway" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인앤아웃버거" brandNameEng="dining_innoutburger" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="노브랜드버거" brandNameEng="dining_nobrandburger" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="맘스터치" brandNameEng="dining_momstouch" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="굽네치킨" brandNameEng="dining_goobne" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="도미노 피자" brandNameEng="dining_dominos" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="미스터피자" brandNameEng="dining_misterpizza" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="피자헛" brandNameEng="dining_pizzahut" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="파파존스피자" brandNameEng="dining_papajohns" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="도서"
                        categoryNameEng="Books"
                        iconName="category_books"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="교보문고" brandNameEng="books_kyobobooks" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="반디앤루니스" brandNameEng="books_bandinlunis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="영풍문고" brandNameEng="books_ypbooks" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인터넷 교보문고" brandNameEng="books_kyobobooksint" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="반디앤루니스 온라인" brandNameEng="books_bandinlunisonline" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인터넷 영풍문고" brandNameEng="books_ypbooksint" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="YES24 도서" brandNameEng="books_yes24books" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="인터파크 도서" brandNameEng="books_interparkbooks" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="알라딘" brandNameEng="books_aladin" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="테마파크"
                        categoryNameEng="Theme Park"
                        iconName="category_themepark"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="롯데월드" brandNameEng="themepark_lotteworld" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="에버랜드" brandNameEng="themepark_everland" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="서울랜드" brandNameEng="themepark_seoulland" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="경주월드" brandNameEng="themepark_kjworld" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="캐리비안 베이" brandNameEng="themepark_carribeanbay" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>



                <details className={styles.detailsZone}>
                    <Categories
                        categoryNameKor="주유"
                        categoryNameEng="Fuel"
                        iconName="category_fuel"
                    />

                    <div className={styles.serviceRow}>
                        <Brands brandNameKor="GS칼텍스 휘발유" brandNameEng="fuel_gsgas" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SK엔크린 휘발유" brandNameEng="fuel_skgas" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대오일뱅크 휘발유" brandNameEng="fuel_hobgas" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="S-Oil 휘발유" brandNameEng="fuel_soilgas" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS칼텍스 경유" brandNameEng="fuel_gsdis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SK엔크린 경유" brandNameEng="fuel_skdis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대오일뱅크 경유" brandNameEng="fuel_hobdis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="S-Oil 경유" brandNameEng="fuel_soildis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS칼텍스 LPG" brandNameEng="fuel_gslpg" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SK엔크린 LPG" brandNameEng="fuel_sklpg" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대오일뱅크 LPG" brandNameEng="fuel_hoblpg" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="GS칼텍스 등유" brandNameEng="fuel_gspet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="SK엔크린 등유" brandNameEng="fuel_skpet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="현대오일뱅크 등유" brandNameEng="fuel_hobpet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="S-Oil 등유" brandNameEng="fuel_soilpet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="주유 휘발유" brandNameEng="fuel_fuelgas" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="주유 경유" brandNameEng="fuel_fueldis" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="주유 LPG" brandNameEng="fuel_fuellpg" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                        <Brands brandNameKor="주유 등유" brandNameEng="fuel_fuelpet" setSelNumber={setSelNumber} setSelArray={setSelArray} />
                    </div>
                </details>
                <br /><br /><br />

                <button className={SelectedBrands.length ? styles.sendButtonEnable : styles.sendButtonDisable} onClick={() => {
                    if (SelectedBrands.length === 0) {
                        alert("혜택을 선택해주세요");
                    }

                    else {
                        for (let i = SelectedBrands.length - 1; i >= 0; i--) {
                            jsonArr[i] = { memberId: 1, brandName: SelectedBrands[i] };
                            SelectedBrands.pop();
                        }

                        const getResults = async () => {
                            const parsedUrlEncodedData = JSON.stringify(jsonArr);

                            try {
                                const response = await axiosPrivate({
                                    method: "POST",
                                    url: "/benefit/select",
                                    data: parsedUrlEncodedData,
                                });
                                setTimeout(() => {
                                    localStorage.setItem('serviceone', JSON.stringify(response.data));
                                    navigate("/service1/results");
                                }, 100)
                            } catch (err) {
                                console.error(err);
                                navigate('/login', { state: { from: location }, replace: true });
                            }
                        }
                        getResults();
                        navigate('/loading', { state: { from: location }, replace: true });
                    }
                }}>
                    {SelectedBrands.length}개 혜택 선택 완료
                </button>
                <br /><br /><br />
            </div>
        </div>
    );
}

export default Service1;