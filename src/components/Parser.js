function brandParser(brandName) {
    if (brandName === "transport_bus") {return "버스"}
    else if (brandName === "transport_subway") {return "지하철"}
    else if (brandName === "transport_taxi") {return "택시"}
    else if (brandName === "transport_korail") {return "코레일"}
    else if (brandName === "transport_srt") {return "SRT"}
    else if (brandName === "transport_arex") {return "인천국제공항철도"}

    else if (brandName === "communication_skt") {return "SK텔레콤"}
    else if (brandName === "communication_kt") {return "KT"}
    else if (brandName === "communication_lgu") {return "LG유플러스"}
    else if (brandName === "communication_sktinternet") {return "SKT 인터넷"}
    else if (brandName === "communication_ktinternet") {return "KT olleh 인터넷"}
    else if (brandName === "communication_lguinternet") {return "LG U+ 인터넷"}
    else if (brandName === "communication_sktiptv") {return "SKT IPTV"}
    else if (brandName === "communication_ktiptv") {return "KT IPTV"}
    else if (brandName === "communication_lguiptv") {return "LG U+ IPTV"}
    else if (brandName === "communication_sktintphone") {return "SKT 인터넷전화"}
    else if (brandName === "communication_ktintphone") {return "KT 인터넷전화"}
    else if (brandName === "communication_lguintphone") {return "LG U+ 인터넷전화"}

    else if (brandName === "mart_emart") {return "이마트"}
    else if (brandName === "mart_homeplus") {return "홈플러스"}
    else if (brandName === "mart_lottemart") {return "롯데마트"}
    else if (brandName === "mart_nhhanaro") {return "농협하나로마트"}
    else if (brandName === "mart_emarttraders") {return "이마트 트레이더스"}
    else if (brandName === "mart_vicmarket") {return "VIC 마켓"}
    else if (brandName === "mart_hanaroclub") {return "하나로클럽"}
    else if (brandName === "mart_costco") {return "코스트코"}
    else if (brandName === "mart_homeplusexpress") {return "홈플러스익스프레스"}
    else if (brandName === "mart_emarteveryday") {return "이마트 에브리데이"}
    else if (brandName === "mart_gsmart") {return "GS마트"}
    else if (brandName === "mart_lottesuper") {return "롯데슈퍼"}
    else if (brandName === "mart_gsthefresh") {return "GS THE FRESH"}

    else if (brandName === "convstore_gs25") {return "GS25"}
    else if (brandName === "convstore_cu") {return "CU"}
    else if (brandName === "convstore_seveneleven") {return "세븐일레븐"}
    else if (brandName === "convstore_ministop") {return "미니스톱"}
    else if (brandName === "convstore_emart24") {return "이마트24"}

    else if (brandName === "movies_cgv") {return "CGV"}
    else if (brandName === "movies_lottecinema") {return "롯데시네마"}
    else if (brandName === "movies_megabox") {return "메가박스"}
    else if (brandName === "movies_cgvonline") {return "CGV 온라인"}
    else if (brandName === "movies_lottecinemaonline") {return "롯데시네마 온라인"}
    else if (brandName === "movies_megaboxonline") {return "메가박스 온라인"}
    else if (brandName === "movies_ticketlinkmovie") {return "티켓링크 영화"}
    else if (brandName === "movies_interparkmovie") {return "인터파크 영화"}
    else if (brandName === "movies_yes24movie") {return "YES24 영화"}
    else if (brandName === "movies_navermovie") {return "네이버영화"}
    else if (brandName === "movies_maxmovie") {return "맥스무비"}

    else if (brandName === "entertainment_netflix") {return "넷플릭스"}
    else if (brandName === "entertainment_youtubepremium") {return "유튜브 프리미엄"}
    else if (brandName === "entertainment_watcha") {return "왓챠"}
    else if (brandName === "entertainment_wavve") {return "웨이브"}
    else if (brandName === "entertainment_melon") {return "멜론"}
    else if (brandName === "entertainment_genie") {return "genie"}

    else if (brandName === "deptstore_shinsegaedept") {return "신세계백화점"}
    else if (brandName === "deptstore_lottedept") {return "롯데백화점"}
    else if (brandName === "deptstore_hyundaidept") {return "현대백화점"}
    else if (brandName === "deptstore_galleriadept") {return "갤러리아 백화점"}
    else if (brandName === "deptstore_akplazadept") {return "AK플라자 백화점"}
    else if (brandName === "deptstore_lotteyoungplaza") {return "롯데영플라자"}
    else if (brandName === "deptstore_hyundaiuplex") {return "현대백화점 U-PLEX"}
    else if (brandName === "deptstore_dcubedept") {return "디큐브백화점"}
    else if (brandName === "deptstore_newcoredept") {return "뉴코아백화점"}

    else if (brandName === "onlineshopping_11st") {return "11번가"}
    else if (brandName === "onlineshopping_gmarket") {return "G마켓"}
    else if (brandName === "onlineshopping_auction") {return "옥션"}
    else if (brandName === "onlineshopping_navershopping") {return "네이버쇼핑"}
    else if (brandName === "onlineshopping_interpark") {return "인터파크"}
    else if (brandName === "onlineshopping_gsshop") {return "GS SHOP"}
    else if (brandName === "onlineshopping_lottecom") {return "롯데닷컴"}
    else if (brandName === "onlineshopping_lotteimall") {return "롯데아이몰"}
    else if (brandName === "onlineshopping_ssgcom") {return "SSG닷컴"}
    else if (brandName === "onlineshopping_shinsegaemall") {return "신세계몰"}
    else if (brandName === "onlineshopping_akmall") {return "AK몰"}
    else if (brandName === "onlineshopping_emartmall") {return "이마트몰"}
    else if (brandName === "onlineshopping_hyundaihmall") {return "현대Hmall"}
    else if (brandName === "onlineshopping_coupang") {return "쿠팡"}
    else if (brandName === "onlineshopping_wemakeprice") {return "위메프"}
    else if (brandName === "onlineshopping_tmon") {return "티몬"}

    else if (brandName === "easypay_naverpay") {return "네이버페이"}
    else if (brandName === "easypay_kakaopay") {return "카카오페이"}
    else if (brandName === "easypay_samsungpay") {return "삼성페이"}

    else if (brandName === "cafebakery_starbucks") {return "스타벅스"}
    else if (brandName === "cafebakery_starbuckssirenorder") {return "스타벅스 사이렌오더"}
    else if (brandName === "cafebakery_twosomeplace") {return "투썸플레이스"}
    else if (brandName === "cafebakery_ediyacoffee") {return "이디야커피"}
    else if (brandName === "cafebakery_hollyscoffee") {return "할리스커피"}
    else if (brandName === "cafebakery_cafebene") {return "카페베네"}
    else if (brandName === "cafebakery_tomntoms") {return "탐앤탐스"}
    else if (brandName === "cafebakery_angelinus") {return "엔제리너스"}
    else if (brandName === "cafebakery_gongcha") {return "공차"}
    else if (brandName === "cafebakery_passcucci") {return "파스쿠찌"}
    else if (brandName === "cafebakery_coffeebean") {return "커피빈"}
    else if (brandName === "cafebakery_paulbassett") {return "폴 바셋"}
    else if (brandName === "cafebakery_baskinrobbins") {return "배스킨라빈스 31"}
    else if (brandName === "cafebakery_natuur") {return "나뚜루"}
    else if (brandName === "cafebakery_haagendazs") {return "하겐다즈"}
    else if (brandName === "cafebakery_dunkindonuts") {return "던킨도너츠"}
    else if (brandName === "cafebakery_krispykreme") {return "크리스피크림"}
    else if (brandName === "cafebakery_misterdonut") {return "미스터도넛"}
    else if (brandName === "cafebakery_smoothieking") {return "스무디킹"}
    else if (brandName === "cafebakery_parisbaguette") {return "파리바게뜨"}
    else if (brandName === "cafebakery_touslesjours") {return "뚜레쥬르"}
    else if (brandName === "cafebakery_pariscroissant") {return "파리크라상"}

    else if (brandName === "beauty_oliveyoung") {return "올리브영"}
    else if (brandName === "beauty_lalavla") {return "랄라블라"}
    else if (brandName === "beauty_lohbs") {return "롭스"}

    else if (brandName === "dining_outback") {return "아웃백스테이크하우스"}
    else if (brandName === "dining_tgif") {return "T.G.I.F"}
    else if (brandName === "dining_sevensprings") {return "세븐스프링스"}
    else if (brandName === "dining_vips") {return "VIPS"}
    else if (brandName === "dining_ashely") {return "애슐리"}
    else if (brandName === "dining_madforgarlic") {return "매드포갈릭"}
    else if (brandName === "dining_mcdonalds") {return "맥도날드"}
    else if (brandName === "dining_burgerking") {return "버거킹"}
    else if (brandName === "dining_lotteria") {return "롯데리아"}
    else if (brandName === "dining_kfc") {return "KFC"}
    else if (brandName === "dining_subway") {return "써브웨이"}
    else if (brandName === "dining_innoutburger") {return "인앤아웃버거"}
    else if (brandName === "dining_nobrandburger") {return "노브랜드버거"}
    else if (brandName === "dining_momstouch") {return "맘스터치"}
    else if (brandName === "dining_goobne") {return "굽네치킨"}
    else if (brandName === "dining_dominos") {return "도미노 피자"}
    else if (brandName === "dining_misterpizza") {return "미스터피자"}
    else if (brandName === "dining_pizzahut") {return "피자헛"}
    else if (brandName === "dining_papajohns") {return "파파존스피자"}

    else if (brandName === "books_kyobobooks") {return "교보문고"}
    else if (brandName === "books_bandinlunis") {return "반디앤루니스"}
    else if (brandName === "books_ypbooks") {return "영풍문고"}
    else if (brandName === "books_kyobobooksint") {return "인터넷 교보문고"}
    else if (brandName === "books_bandinlunisonline") {return "반디앤루니스 온라인"}
    else if (brandName === "books_ypbooksint") {return "인터넷 영풍문고"}
    else if (brandName === "books_yes24books") {return "YES24 도서"}
    else if (brandName === "books_interparkbooks") {return "인터파크 도서"}
    else if (brandName === "books_aladin") {return "알라딘"}

    else if (brandName === "themepark_lotteworld") {return "롯데월드"}
    else if (brandName === "themepark_everland") {return "에버랜드"}
    else if (brandName === "themepark_seoulland") {return "서울랜드"}
    else if (brandName === "themepark_kjworld") {return "경주월드"}
    else if (brandName === "themepark_carribeanbay") {return "캐리비안 베이"}

    else if (brandName === "fuel_gsgas") {return "GS칼텍스 휘발유"}
    else if (brandName === "fuel_skgas") {return "SK엔크린 휘발유"}
    else if (brandName === "fuel_hobgas") {return "현대오일뱅크 휘발유"}
    else if (brandName === "fuel_soilgas") {return "S-Oil 휘발유"}
    else if (brandName === "fuel_gsdis") {return "GS칼텍스 경유"}
    else if (brandName === "fuel_skdis") {return "SK엔크린 경유"}
    else if (brandName === "fuel_hobdis") {return "현대오일뱅크 경유"}
    else if (brandName === "fuel_soildis") {return "S-Oil 경유"}
    else if (brandName === "fuel_gslpg") {return "GS칼텍스 LPG"}
    else if (brandName === "fuel_sklpg") {return "SK엔크린 LPG"}
    else if (brandName === "fuel_hoblpg") {return "현대오일뱅크 LPG"}
    else if (brandName === "fuel_soillpg") {return "S-Oil LPG"}
    else if (brandName === "fuel_gspet") {return "GS칼텍스 등유"}
    else if (brandName === "fuel_skpet") {return "SK엔크린 등유"}
    else if (brandName === "fuel_hobpet") {return "현대오일뱅크 등유"}
    else if (brandName === "fuel_soilpet") {return "S-Oil 등유"}
    else if (brandName === "fuel_fuelgas") {return "주유 휘발유"}
    else if (brandName === "fuel_fueldis") {return "주유 경유"}
    else if (brandName === "fuel_fuellpg") {return "주유 LPG"}
    else if (brandName === "fuel_fuelpet") {return "주유 등유"}
}

export default brandParser;