import styles from '../Service.module.css';

import Brands from './Brands';
import Categories from '../Categories';
import Intro from '../../Intro';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



let jsonArr = [];

function Service2() {
    const navigate = useNavigate();

    const [sel101, setSel101] = useState(0);
    const [sel102, setSel102] = useState(0);
    const [sel103, setSel103] = useState(0);
    const [sel104, setSel104] = useState(0);
    const [sel105, setSel105] = useState(0);
    const [sel106, setSel106] = useState(0);

    const [sel201, setSel201] = useState(0);
    const [sel202, setSel202] = useState(0);
    const [sel203, setSel203] = useState(0);
    const [sel204, setSel204] = useState(0);
    const [sel205, setSel205] = useState(0);
    const [sel206, setSel206] = useState(0);
    const [sel207, setSel207] = useState(0);
    const [sel208, setSel208] = useState(0);
    const [sel209, setSel209] = useState(0);
    const [sel210, setSel210] = useState(0);
    const [sel211, setSel211] = useState(0);
    const [sel212, setSel212] = useState(0);

    const [sel301, setSel301] = useState(0);
    const [sel302, setSel302] = useState(0);
    const [sel303, setSel303] = useState(0);
    const [sel304, setSel304] = useState(0);
    const [sel305, setSel305] = useState(0);
    const [sel306, setSel306] = useState(0);
    const [sel307, setSel307] = useState(0);
    const [sel308, setSel308] = useState(0);
    const [sel309, setSel309] = useState(0);
    const [sel310, setSel310] = useState(0);
    const [sel311, setSel311] = useState(0);
    const [sel312, setSel312] = useState(0);
    const [sel313, setSel313] = useState(0);

    const [sel401, setSel401] = useState(0);
    const [sel402, setSel402] = useState(0);
    const [sel403, setSel403] = useState(0);
    const [sel404, setSel404] = useState(0);
    const [sel405, setSel405] = useState(0);

    const [sel501, setSel501] = useState(0);
    const [sel502, setSel502] = useState(0);
    const [sel503, setSel503] = useState(0);
    const [sel504, setSel504] = useState(0);
    const [sel505, setSel505] = useState(0);
    const [sel506, setSel506] = useState(0);
    const [sel507, setSel507] = useState(0);
    const [sel508, setSel508] = useState(0);
    const [sel509, setSel509] = useState(0);
    const [sel510, setSel510] = useState(0);
    const [sel511, setSel511] = useState(0);

    const [sel601, setSel601] = useState(0);
    const [sel602, setSel602] = useState(0);
    const [sel603, setSel603] = useState(0);
    const [sel604, setSel604] = useState(0);
    const [sel605, setSel605] = useState(0);
    const [sel606, setSel606] = useState(0);

    const [sel701, setSel701] = useState(0);
    const [sel702, setSel702] = useState(0);
    const [sel703, setSel703] = useState(0);
    const [sel704, setSel704] = useState(0);
    const [sel705, setSel705] = useState(0);
    const [sel706, setSel706] = useState(0);
    const [sel707, setSel707] = useState(0);
    const [sel708, setSel708] = useState(0);
    const [sel709, setSel709] = useState(0);

    const [sel801, setSel801] = useState(0);
    const [sel802, setSel802] = useState(0);
    const [sel803, setSel803] = useState(0);
    const [sel804, setSel804] = useState(0);
    const [sel805, setSel805] = useState(0);
    const [sel806, setSel806] = useState(0);
    const [sel807, setSel807] = useState(0);
    const [sel808, setSel808] = useState(0);
    const [sel809, setSel809] = useState(0);
    const [sel810, setSel810] = useState(0);
    const [sel811, setSel811] = useState(0);
    const [sel812, setSel812] = useState(0);
    const [sel813, setSel813] = useState(0);
    const [sel814, setSel814] = useState(0);
    const [sel815, setSel815] = useState(0);
    const [sel816, setSel816] = useState(0);

    const [sel901, setSel901] = useState(0);
    const [sel902, setSel902] = useState(0);
    const [sel903, setSel903] = useState(0);

    const [sel1001, setSel1001] = useState(0);
    const [sel1002, setSel1002] = useState(0);
    const [sel1003, setSel1003] = useState(0);
    const [sel1004, setSel1004] = useState(0);
    const [sel1005, setSel1005] = useState(0);
    const [sel1006, setSel1006] = useState(0);
    const [sel1007, setSel1007] = useState(0);
    const [sel1008, setSel1008] = useState(0);
    const [sel1009, setSel1009] = useState(0);
    const [sel1010, setSel1010] = useState(0);
    const [sel1011, setSel1011] = useState(0);
    const [sel1012, setSel1012] = useState(0);
    const [sel1013, setSel1013] = useState(0);
    const [sel1014, setSel1014] = useState(0);
    const [sel1015, setSel1015] = useState(0);
    const [sel1016, setSel1016] = useState(0);
    const [sel1017, setSel1017] = useState(0);
    const [sel1018, setSel1018] = useState(0);
    const [sel1019, setSel1019] = useState(0);
    const [sel1020, setSel1020] = useState(0);
    const [sel1021, setSel1021] = useState(0);

    const [sel1101, setSel1101] = useState(0);
    const [sel1102, setSel1102] = useState(0);
    const [sel1103, setSel1103] = useState(0);

    const [sel1201, setSel1201] = useState(0);
    const [sel1202, setSel1202] = useState(0);
    const [sel1203, setSel1203] = useState(0);
    const [sel1204, setSel1204] = useState(0);
    const [sel1205, setSel1205] = useState(0);
    const [sel1206, setSel1206] = useState(0);
    const [sel1207, setSel1207] = useState(0);
    const [sel1208, setSel1208] = useState(0);
    const [sel1209, setSel1209] = useState(0);
    const [sel1210, setSel1210] = useState(0);
    const [sel1211, setSel1211] = useState(0);
    const [sel1212, setSel1212] = useState(0);
    const [sel1213, setSel1213] = useState(0);
    const [sel1214, setSel1214] = useState(0);
    const [sel1215, setSel1215] = useState(0);
    const [sel1216, setSel1216] = useState(0);
    const [sel1217, setSel1217] = useState(0);
    const [sel1218, setSel1218] = useState(0);
    const [sel1219, setSel1219] = useState(0);

    const [sel1301, setSel1301] = useState(0);
    const [sel1302, setSel1302] = useState(0);
    const [sel1303, setSel1303] = useState(0);
    const [sel1304, setSel1304] = useState(0);
    const [sel1305, setSel1305] = useState(0);
    const [sel1306, setSel1306] = useState(0);
    const [sel1307, setSel1307] = useState(0);
    const [sel1308, setSel1308] = useState(0);
    const [sel1309, setSel1309] = useState(0);

    const [sel1401, setSel1401] = useState(0);
    const [sel1402, setSel1402] = useState(0);
    const [sel1403, setSel1403] = useState(0);
    const [sel1404, setSel1404] = useState(0);
    const [sel1405, setSel1405] = useState(0);

    const [sel1501, setSel1501] = useState(0);
    const [sel1502, setSel1502] = useState(0);
    const [sel1503, setSel1503] = useState(0);
    const [sel1504, setSel1504] = useState(0);
    const [sel1505, setSel1505] = useState(0);
    const [sel1506, setSel1506] = useState(0);
    const [sel1507, setSel1507] = useState(0);
    const [sel1508, setSel1508] = useState(0);
    const [sel1509, setSel1509] = useState(0);
    const [sel1510, setSel1510] = useState(0);
    const [sel1511, setSel1511] = useState(0);
    const [sel1512, setSel1512] = useState(0);
    const [sel1513, setSel1513] = useState(0);
    const [sel1514, setSel1514] = useState(0);
    const [sel1515, setSel1515] = useState(0);
    const [sel1516, setSel1516] = useState(0);
    const [sel1517, setSel1517] = useState(0);
    const [sel1518, setSel1518] = useState(0);
    const [sel1519, setSel1519] = useState(0);
    const [sel1520, setSel1520] = useState(0);




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

                <div className={styles.service2Row}>
                    <Brands brandNameKor="버스" brandNameEng="transport_bus" setSel={setSel101} />
                    <Brands brandNameKor="지하철" brandNameEng="transport_subway" setSel={setSel102} />
                    <Brands brandNameKor="택시" brandNameEng="transport_taxi" setSel={setSel103} />
                    <Brands brandNameKor="코레일" brandNameEng="transport_korail" setSel={setSel104} />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" setSel={setSel105} />
                    <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" setSel={setSel106} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="통신"
                    categoryNameEng="Communication"
                    iconName="category_communication"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="SK텔레콤" brandNameEng="communication_skt" setSel={setSel201} />
                    <Brands brandNameKor="KT" brandNameEng="communication_kt" setSel={setSel202} />
                    <Brands brandNameKor="LG유플러스" brandNameEng="communication_lgu" setSel={setSel203} />
                    <Brands brandNameKor="SKT 인터넷" brandNameEng="communication_sktinternet" setSel={setSel204} />
                    <Brands brandNameKor="KT olleh 인터넷" brandNameEng="communication_ktinternet" setSel={setSel205} />
                    <Brands brandNameKor="LG U+ 인터넷" brandNameEng="communication_lguinternet" setSel={setSel206} />
                    <Brands brandNameKor="SKT IPTV" brandNameEng="communication_sktiptv" setSel={setSel207} />
                    <Brands brandNameKor="KT IP-TV" brandNameEng="communication_ktiptv" setSel={setSel208} />
                    <Brands brandNameKor="LG U+ IPTV" brandNameEng="communication_lguiptv" setSel={setSel209} />
                    <Brands brandNameKor="SKT 인터넷전화" brandNameEng="communication_sktintphone" setSel={setSel210} />
                    <Brands brandNameKor="KT 인터넷전화" brandNameEng="communication_ktintphone" setSel={setSel211} />
                    <Brands brandNameKor="LG U+ 인터넷전화" brandNameEng="communication_lguintphone" setSel={setSel212} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="마트"
                    categoryNameEng="Mart"
                    iconName="category_mart"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="이마트" brandNameEng="mart_emart" setSel={setSel301} />
                    <Brands brandNameKor="홈플러스" brandNameEng="mart_homeplus" setSel={setSel302} />
                    <Brands brandNameKor="롯데마트" brandNameEng="mart_lottemart" setSel={setSel303} />
                    <Brands brandNameKor="농협하나로마트" brandNameEng="mart_nhhanaro" setSel={setSel304} />
                    <Brands brandNameKor="이마트 트레이더스" brandNameEng="mart_emarttraders" setSel={setSel305} />
                    <Brands brandNameKor="VIC 마켓" brandNameEng="mart_vicmarket" setSel={setSel306} />
                    <Brands brandNameKor="하나로클럽" brandNameEng="mart_hanaroclub" setSel={setSel307} />
                    <Brands brandNameKor="코스트코" brandNameEng="mart_costco" setSel={setSel308} />
                    <Brands brandNameKor="홈플러스익스프레스" brandNameEng="mart_homeplusexpress" setSel={setSel309} />
                    <Brands brandNameKor="이마트 에브리데이" brandNameEng="mart_emarteveryday" setSel={setSel310} />
                    <Brands brandNameKor="GS마트" brandNameEng="mart_gsmart" setSel={setSel311} />
                    <Brands brandNameKor="롯데슈퍼" brandNameEng="mart_lottesuper" setSel={setSel312} />
                    <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" setSel={setSel313} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="편의점"
                    categoryNameEng="Convenience Store"
                    iconName="category_convstore"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" setSel={setSel401} />
                    <Brands brandNameKor="CU" brandNameEng="convstore_cu" setSel={setSel402} />
                    <Brands brandNameKor="세븐일레븐" brandNameEng="convstore_seveneleven" setSel={setSel403} />
                    <Brands brandNameKor="미니스톱" brandNameEng="convstore_ministop" setSel={setSel404} />
                    <Brands brandNameKor="이마트24" brandNameEng="convstore_emart24" setSel={setSel405} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="영화"
                    categoryNameEng="Movies"
                    iconName="category_movies"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="CGV" brandNameEng="movies_cgv" setSel={setSel501} />
                    <Brands brandNameKor="롯데시네마" brandNameEng="movies_lottecinema" setSel={setSel502} />
                    <Brands brandNameKor="메가박스" brandNameEng="movies_megabox" setSel={setSel503} />
                    <Brands brandNameKor="CGV 온라인" brandNameEng="movies_cgvonline" setSel={setSel504} />
                    <Brands brandNameKor="롯데시네마 온라인" brandNameEng="movies_lottecinemaonline" setSel={setSel505} />
                    <Brands brandNameKor="메가박스 온라인" brandNameEng="movies_megaboxonline" setSel={setSel506} />
                    <Brands brandNameKor="티켓링크 영화" brandNameEng="movies_ticketlinkmovie" setSel={setSel507} />
                    <Brands brandNameKor="인터파크 영화" brandNameEng="movies_interparkmovie" setSel={setSel508} />
                    <Brands brandNameKor="YES24 영화" brandNameEng="movies_yes24movie" setSel={setSel509} />
                    <Brands brandNameKor="네이버영화" brandNameEng="movies_navermovie" setSel={setSel510} />
                    <Brands brandNameKor="맥스무비" brandNameEng="movies_maxmovie" setSel={setSel511} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="엔터테인먼트"
                    categoryNameEng="Entertainment"
                    iconName="category_entertainment"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="넷플릭스" brandNameEng="entertainment_netflix" setSel={setSel601} />
                    <Brands brandNameKor="유튜브 프리미엄" brandNameEng="entertainment_youtubepremium" setSel={setSel602} />
                    <Brands brandNameKor="왓챠" brandNameEng="entertainment_watcha" setSel={setSel603} />
                    <Brands brandNameKor="웨이브" brandNameEng="entertainment_wavve" setSel={setSel604} />
                    <Brands brandNameKor="멜론" brandNameEng="entertainment_melon" setSel={setSel605} />
                    <Brands brandNameKor="genie" brandNameEng="entertainment_genie" setSel={setSel606} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="백화점"
                    categoryNameEng="Department Store"
                    iconName="category_deptstore"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="신세계백화점" brandNameEng="deptstore_shinsegaedept" setSel={setSel701} />
                    <Brands brandNameKor="롯데백화점" brandNameEng="deptstore_lottedept" setSel={setSel702} />
                    <Brands brandNameKor="현대백화점" brandNameEng="deptstore_hyundaidept" setSel={setSel703} />
                    <Brands brandNameKor="갤러리아 백화점" brandNameEng="deptstore_galleriadept" setSel={setSel704} />
                    <Brands brandNameKor="AK플라자 백화점" brandNameEng="deptstore_akplazadept" setSel={setSel705} />
                    <Brands brandNameKor="롯데영플라자" brandNameEng="deptstore_lotteyoungplaza" setSel={setSel706} />
                    <Brands brandNameKor="현대백화점 U-PLEX" brandNameEng="deptstore_hyundaiuplex" setSel={setSel707} />
                    <Brands brandNameKor="디큐브백화점" brandNameEng="deptstore_dcubedept" setSel={setSel708} />
                    <Brands brandNameKor="뉴코아백화점" brandNameEng="deptstore_newcoredept" setSel={setSel709} />

                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="온라인쇼핑몰"
                    categoryNameEng="Online Shopping"
                    iconName="category_onlineshopping"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="11번가" brandNameEng="onlineshopping_11st" setSel={setSel801} />
                    <Brands brandNameKor="G마켓" brandNameEng="onlineshopping_gmarket" setSel={setSel802} />
                    <Brands brandNameKor="옥션" brandNameEng="onlineshopping_auction" setSel={setSel803} />
                    <Brands brandNameKor="네이버쇼핑" brandNameEng="onlineshopping_navershopping" setSel={setSel804} />
                    <Brands brandNameKor="인터파크" brandNameEng="onlineshopping_interpark" setSel={setSel805} />
                    <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" setSel={setSel806} />
                    <Brands brandNameKor="롯데닷컴" brandNameEng="onlineshopping_lottecom" setSel={setSel807} />
                    <Brands brandNameKor="롯데아이몰" brandNameEng="onlineshopping_lotteimall" setSel={setSel808} />
                    <Brands brandNameKor="SSG닷컴" brandNameEng="onlineshopping_ssgcom" setSel={setSel809} />
                    <Brands brandNameKor="신세계몰" brandNameEng="onlineshopping_shinsegaemall" setSel={setSel810} />
                    <Brands brandNameKor="AK몰" brandNameEng="onlineshopping_akmall" setSel={setSel811} />
                    <Brands brandNameKor="이마트몰" brandNameEng="onlineshopping_emartmall" setSel={setSel812} />
                    <Brands brandNameKor="현대Hmall" brandNameEng="onlineshopping_hyundaihmall" setSel={setSel813} />
                    <Brands brandNameKor="쿠팡" brandNameEng="onlineshopping_coupang" setSel={setSel814} />
                    <Brands brandNameKor="위메프" brandNameEng="onlineshopping_wemakeprice" setSel={setSel815} />
                    <Brands brandNameKor="티몬" brandNameEng="onlineshopping_tmon" setSel={setSel816} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="간편결제"
                    categoryNameEng="Easy Pay"
                    iconName="category_easypay"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="네이버페이" brandNameEng="easypay_naverpay" setSel={setSel901} />
                    <Brands brandNameKor="카카오페이" brandNameEng="easypay_kakaopay" setSel={setSel902} />
                    <Brands brandNameKor="삼성페이" brandNameEng="easypay_samsungpay" setSel={setSel903} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="카페/베이커리"
                    categoryNameEng="Cafe/Bakery"
                    iconName="category_cafebakery"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="스타벅스" brandNameEng="cafebakery_starbucks" setSel={setSel1001} />
                    <Brands brandNameKor="스타벅스 APP 사이렌오더" brandNameEng="cafebakery_starbuckssirenorder" setSel={setSel1002} />
                    <Brands brandNameKor="투썸플레이스" brandNameEng="cafebakery_twosomeplace" setSel={setSel1003} />
                    <Brands brandNameKor="이디야커피" brandNameEng="cafebakery_ediyacoffee" setSel={setSel1004} />
                    <Brands brandNameKor="할리스커피" brandNameEng="cafebakery_hollyscoffee" setSel={setSel1005} />
                    <Brands brandNameKor="카페베네" brandNameEng="cafebakery_cafebene" setSel={setSel1006} />
                    <Brands brandNameKor="탐앤탐스" brandNameEng="cafebakery_tomntoms" setSel={setSel1007} />
                    <Brands brandNameKor="엔제리너스" brandNameEng="cafebakery_angelinus" setSel={setSel1008} />
                    <Brands brandNameKor="공차" brandNameEng="cafebakery_gongcha" setSel={setSel1009} />
                    <Brands brandNameKor="파스쿠찌" brandNameEng="cafebakery_passcucci" setSel={setSel1010} />
                    <Brands brandNameKor="커피빈" brandNameEng="cafebakery_coffeebean" setSel={setSel1011} />
                    <Brands brandNameKor="폴 바셋" brandNameEng="cafebakery_paulbassett" setSel={setSel1012} />
                    <Brands brandNameKor="배스킨라빈스 31" brandNameEng="cafebakery_baskinrobbins" setSel={setSel1013} />
                    <Brands brandNameKor="나뚜루" brandNameEng="cafebakery_natuur" setSel={setSel1014} />
                    <Brands brandNameKor="던킨도너츠" brandNameEng="cafebakery_dunkindonuts" setSel={setSel1015} />
                    <Brands brandNameKor="크리스피크림" brandNameEng="cafebakery_krispykreme" setSel={setSel1016} />
                    <Brands brandNameKor="미스터도넛" brandNameEng="cafebakery_misterdonut" setSel={setSel1017} />
                    <Brands brandNameKor="스무디킹" brandNameEng="cafebakery_smoothieking" setSel={setSel1018} />
                    <Brands brandNameKor="파리바게뜨" brandNameEng="cafebakery_parisbaguette" setSel={setSel1019} />
                    <Brands brandNameKor="뚜레쥬르" brandNameEng="cafebakery_touslesjours" setSel={setSel1020} />
                    <Brands brandNameKor="파리크라상" brandNameEng="cafebakery_pariscroissant" setSel={setSel1021} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="뷰티"
                    categoryNameEng="Beauty"
                    iconName="category_beauty"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="올리브영" brandNameEng="beauty_oliveyoung" setSel={setSel1101} />
                    <Brands brandNameKor="랄라블라" brandNameEng="beauty_lalavla" setSel={setSel1102} />
                    <Brands brandNameKor="롭스" brandNameEng="beauty_lohbs" setSel={setSel1103} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="외식"
                    categoryNameEng="Dining"
                    iconName="category_dining"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="아웃백스테이크하우스" brandNameEng="dining_outback" setSel={setSel1201} />
                    <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" setSel={setSel1202} />
                    <Brands brandNameKor="세븐스프링스" brandNameEng="dining_sevensprings" setSel={setSel1203} />
                    <Brands brandNameKor="VIPS" brandNameEng="dining_vips" setSel={setSel1204} />
                    <Brands brandNameKor="애슐리" brandNameEng="dining_ashely" setSel={setSel1205} />
                    <Brands brandNameKor="매드포갈릭" brandNameEng="dining_madforgarlic" setSel={setSel1206} />
                    <Brands brandNameKor="맥도날드" brandNameEng="dining_mcdonalds" setSel={setSel1207} />
                    <Brands brandNameKor="버거킹" brandNameEng="dining_burgerking" setSel={setSel1208} />
                    <Brands brandNameKor="롯데리아" brandNameEng="dining_lotteria" setSel={setSel1209} />
                    <Brands brandNameKor="KFC" brandNameEng="dining_kfc" setSel={setSel1210} />
                    <Brands brandNameKor="써브웨이" brandNameEng="dining_subway" setSel={setSel1211} />
                    <Brands brandNameKor="인앤아웃버거" brandNameEng="dining_innoutburger" setSel={setSel1212} />
                    <Brands brandNameKor="노브랜드버거" brandNameEng="dining_nobrandburger" setSel={setSel1213} />
                    <Brands brandNameKor="맘스터치" brandNameEng="dining_momstouch" setSel={setSel1214} />
                    <Brands brandNameKor="굽네치킨" brandNameEng="dining_goobne" setSel={setSel1215} />
                    <Brands brandNameKor="도미노 피자" brandNameEng="dining_dominos" setSel={setSel1216} />
                    <Brands brandNameKor="미스터피자" brandNameEng="dining_misterpizza" setSel={setSel1217} />
                    <Brands brandNameKor="피자헛" brandNameEng="dining_pizzahut" setSel={setSel1218} />
                    <Brands brandNameKor="파파존스피자" brandNameEng="dining_papajohns" setSel={setSel1219} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="도서"
                    categoryNameEng="Books"
                    iconName="category_books"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="교보문고" brandNameEng="books_kyobobooks" setSel={setSel1301} />
                    <Brands brandNameKor="반디앤루니스" brandNameEng="books_bandinlunis" setSel={setSel1302} />
                    <Brands brandNameKor="영풍문고" brandNameEng="books_ypbooks" setSel={setSel1303} />
                    <Brands brandNameKor="인터넷 교보문고" brandNameEng="books_kyobobooksint" setSel={setSel1304} />
                    <Brands brandNameKor="반디앤루니스 온라인" brandNameEng="books_bandinlunisonline" setSel={setSel1305} />
                    <Brands brandNameKor="인터넷 영풍문고" brandNameEng="books_ypbooksint" setSel={setSel1306} />
                    <Brands brandNameKor="YES24 도서" brandNameEng="books_yes24books" setSel={setSel1307} />
                    <Brands brandNameKor="인터파크 도서" brandNameEng="books_interparkbooks" setSel={setSel1308} />
                    <Brands brandNameKor="알라딘" brandNameEng="books_aladin" setSel={setSel1309} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="테마파크"
                    categoryNameEng="Theme Park"
                    iconName="category_themepark"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="롯데월드" brandNameEng="themepark_lotteworld" setSel={setSel1401} />
                    <Brands brandNameKor="에버랜드" brandNameEng="themepark_everland" setSel={setSel1402} />
                    <Brands brandNameKor="서울랜드" brandNameEng="themepark_seoulland" setSel={setSel1403} />
                    <Brands brandNameKor="경주월드" brandNameEng="themepark_kjworld" setSel={setSel1404} />
                    <Brands brandNameKor="캐리비안 베이" brandNameEng="themepark_carribeanbay" setSel={setSel1405} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="주유"
                    categoryNameEng="Fuel"
                    iconName="category_fuel"
                />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="GS칼텍스 휘발유" brandNameEng="fuel_gsgas" setSel={setSel1501} />
                    <Brands brandNameKor="SK엔크린 휘발유" brandNameEng="fuel_skgas" setSel={setSel1502} />
                    <Brands brandNameKor="현대오일뱅크 휘발유" brandNameEng="fuel_hobgas" setSel={setSel1503} />
                    <Brands brandNameKor="S-Oil 휘발유" brandNameEng="fuel_soilgas" setSel={setSel1504} />
                    <Brands brandNameKor="GS칼텍스 경유" brandNameEng="fuel_gsdis" setSel={setSel1505} />
                    <Brands brandNameKor="SK엔크린 경유" brandNameEng="fuel_skdis" setSel={setSel1506} />
                    <Brands brandNameKor="현대오일뱅크 경유" brandNameEng="fuel_hobdis" setSel={setSel1507} />
                    <Brands brandNameKor="S-Oil 경유" brandNameEng="fuel_soildis" setSel={setSel1508} />
                    <Brands brandNameKor="GS칼텍스 LPG" brandNameEng="fuel_gslpg" setSel={setSel1509} />
                    <Brands brandNameKor="SK엔크린 LPG" brandNameEng="fuel_sklpg" setSel={setSel1510} />
                    <Brands brandNameKor="현대오일뱅크 LPG" brandNameEng="fuel_hoblpg" setSel={setSel1511} />
                    <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" setSel={setSel1512} />
                    <Brands brandNameKor="GS칼텍스 등유" brandNameEng="fuel_gspet" setSel={setSel1513} />
                    <Brands brandNameKor="SK엔크린 등유" brandNameEng="fuel_skpet" setSel={setSel1514} />
                    <Brands brandNameKor="현대오일뱅크 등유" brandNameEng="fuel_hobpet" setSel={setSel1515} />
                    <Brands brandNameKor="S-Oil 등유" brandNameEng="fuel_soilpet" setSel={setSel1516} />
                    <Brands brandNameKor="주유 휘발유" brandNameEng="fuel_fuelgas" setSel={setSel1517} />
                    <Brands brandNameKor="주유 경유" brandNameEng="fuel_fueldis" setSel={setSel1518} />
                    <Brands brandNameKor="주유 LPG" brandNameEng="fuel_fuellpg" setSel={setSel1519} />
                    <Brands brandNameKor="주유 등유" brandNameEng="fuel_fuelpet" setSel={setSel1520} />
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