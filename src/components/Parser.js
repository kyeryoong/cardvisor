function brandParser(brandName) {
    if (brandName === "transport_bus") { return "버스" }
    else if (brandName === "transport_subway") { return "지하철" }
    else if (brandName === "transport_taxi") { return "택시" }
    else if (brandName === "transport_korail") { return "코레일" }
    else if (brandName === "transport_srt") { return "SRT" }
    else if (brandName === "transport_arex") { return "인천국제공항철도" }

    else if (brandName === "communication_skt") { return "SK텔레콤" }
    else if (brandName === "communication_kt") { return "KT" }
    else if (brandName === "communication_lgu") { return "LG유플러스" }
    else if (brandName === "communication_sktinternet") { return "SKT 인터넷" }
    else if (brandName === "communication_ktinternet") { return "KT olleh 인터넷" }
    else if (brandName === "communication_lguinternet") { return "LG U+ 인터넷" }
    else if (brandName === "communication_sktiptv") { return "SKT IPTV" }
    else if (brandName === "communication_ktiptv") { return "KT IPTV" }
    else if (brandName === "communication_lguiptv") { return "LG U+ IPTV" }
    else if (brandName === "communication_sktintphone") { return "SKT 인터넷전화" }
    else if (brandName === "communication_ktintphone") { return "KT 인터넷전화" }
    else if (brandName === "communication_lguintphone") { return "LG U+ 인터넷전화" }

    else if (brandName === "mart_emart") { return "이마트" }
    else if (brandName === "mart_homeplus") { return "홈플러스" }
    else if (brandName === "mart_lottemart") { return "롯데마트" }
    else if (brandName === "mart_nhhanaro") { return "농협하나로마트" }
    else if (brandName === "mart_emarttraders") { return "이마트 트레이더스" }
    else if (brandName === "mart_vicmarket") { return "VIC 마켓" }
    else if (brandName === "mart_hanaroclub") { return "하나로클럽" }
    else if (brandName === "mart_costco") { return "코스트코" }
    else if (brandName === "mart_homeplusexpress") { return "홈플러스익스프레스" }
    else if (brandName === "mart_emarteveryday") { return "이마트 에브리데이" }
    else if (brandName === "mart_gsmart") { return "GS마트" }
    else if (brandName === "mart_lottesuper") { return "롯데슈퍼" }
    else if (brandName === "mart_gsthefresh") { return "GS THE FRESH" }

    else if (brandName === "convstore_gs25") { return "GS25" }
    else if (brandName === "convstore_cu") { return "CU" }
    else if (brandName === "convstore_seveneleven") { return "세븐일레븐" }
    else if (brandName === "convstore_ministop") { return "미니스톱" }
    else if (brandName === "convstore_emart24") { return "이마트24" }

    else if (brandName === "movies_cgv") { return "CGV" }
    else if (brandName === "movies_lottecinema") { return "롯데시네마" }
    else if (brandName === "movies_megabox") { return "메가박스" }
    else if (brandName === "movies_cgvonline") { return "CGV 온라인" }
    else if (brandName === "movies_lottecinemaonline") { return "롯데시네마 온라인" }
    else if (brandName === "movies_megaboxonline") { return "메가박스 온라인" }
    else if (brandName === "movies_ticketlinkmovie") { return "티켓링크 영화" }
    else if (brandName === "movies_interparkmovie") { return "인터파크 영화" }
    else if (brandName === "movies_yes24movie") { return "YES24 영화" }
    else if (brandName === "movies_navermovie") { return "네이버영화" }
    else if (brandName === "movies_maxmovie") { return "맥스무비" }

    else if (brandName === "entertainment_netflix") { return "넷플릭스" }
    else if (brandName === "entertainment_youtubepremium") { return "유튜브 프리미엄" }
    else if (brandName === "entertainment_watcha") { return "왓챠" }
    else if (brandName === "entertainment_wavve") { return "웨이브" }
    else if (brandName === "entertainment_melon") { return "멜론" }
    else if (brandName === "entertainment_genie") { return "genie" }

    else if (brandName === "deptstore_shinsegaedept") { return "신세계백화점" }
    else if (brandName === "deptstore_lottedept") { return "롯데백화점" }
    else if (brandName === "deptstore_hyundaidept") { return "현대백화점" }
    else if (brandName === "deptstore_galleriadept") { return "갤러리아 백화점" }
    else if (brandName === "deptstore_akplazadept") { return "AK플라자 백화점" }
    else if (brandName === "deptstore_lotteyoungplaza") { return "롯데영플라자" }
    else if (brandName === "deptstore_hyundaiuplex") { return "현대백화점 U-PLEX" }
    else if (brandName === "deptstore_dcubedept") { return "디큐브백화점" }
    else if (brandName === "deptstore_newcoredept") { return "뉴코아백화점" }

    else if (brandName === "onlineshopping_11st") { return "11번가" }
    else if (brandName === "onlineshopping_gmarket") { return "G마켓" }
    else if (brandName === "onlineshopping_auction") { return "옥션" }
    else if (brandName === "onlineshopping_navershopping") { return "네이버쇼핑" }
    else if (brandName === "onlineshopping_interpark") { return "인터파크" }
    else if (brandName === "onlineshopping_gsshop") { return "GS SHOP" }
    else if (brandName === "onlineshopping_lottecom") { return "롯데닷컴" }
    else if (brandName === "onlineshopping_lotteimall") { return "롯데아이몰" }
    else if (brandName === "onlineshopping_ssgcom") { return "SSG닷컴" }
    else if (brandName === "onlineshopping_shinsegaemall") { return "신세계몰" }
    else if (brandName === "onlineshopping_akmall") { return "AK몰" }
    else if (brandName === "onlineshopping_emartmall") { return "이마트몰" }
    else if (brandName === "onlineshopping_hyundaihmall") { return "현대Hmall" }
    else if (brandName === "onlineshopping_coupang") { return "쿠팡" }
    else if (brandName === "onlineshopping_wemakeprice") { return "위메프" }
    else if (brandName === "onlineshopping_tmon") { return "티몬" }

    else if (brandName === "easypay_naverpay") { return "네이버페이" }
    else if (brandName === "easypay_kakaopay") { return "카카오페이" }
    else if (brandName === "easypay_samsungpay") { return "삼성페이" }

    else if (brandName === "cafebakery_starbucks") { return "스타벅스" }
    else if (brandName === "cafebakery_starbuckssirenorder") { return "스타벅스 사이렌오더" }
    else if (brandName === "cafebakery_twosomeplace") { return "투썸플레이스" }
    else if (brandName === "cafebakery_ediyacoffee") { return "이디야커피" }
    else if (brandName === "cafebakery_hollyscoffee") { return "할리스커피" }
    else if (brandName === "cafebakery_cafebene") { return "카페베네" }
    else if (brandName === "cafebakery_tomntoms") { return "탐앤탐스" }
    else if (brandName === "cafebakery_angelinus") { return "엔제리너스" }
    else if (brandName === "cafebakery_gongcha") { return "공차" }
    else if (brandName === "cafebakery_passcucci") { return "파스쿠찌" }
    else if (brandName === "cafebakery_coffeebean") { return "커피빈" }
    else if (brandName === "cafebakery_paulbassett") { return "폴 바셋" }
    else if (brandName === "cafebakery_baskinrobbins") { return "배스킨라빈스 31" }
    else if (brandName === "cafebakery_natuur") { return "나뚜루" }
    else if (brandName === "cafebakery_haagendazs") { return "하겐다즈" }
    else if (brandName === "cafebakery_dunkindonuts") { return "던킨도너츠" }
    else if (brandName === "cafebakery_krispykreme") { return "크리스피크림" }
    else if (brandName === "cafebakery_misterdonut") { return "미스터도넛" }
    else if (brandName === "cafebakery_smoothieking") { return "스무디킹" }
    else if (brandName === "cafebakery_parisbaguette") { return "파리바게뜨" }
    else if (brandName === "cafebakery_touslesjours") { return "뚜레쥬르" }
    else if (brandName === "cafebakery_pariscroissant") { return "파리크라상" }

    else if (brandName === "beauty_oliveyoung") { return "올리브영" }
    else if (brandName === "beauty_lalavla") { return "랄라블라" }
    else if (brandName === "beauty_lohbs") { return "롭스" }

    else if (brandName === "dining_outback") { return "아웃백스테이크하우스" }
    else if (brandName === "dining_tgif") { return "T.G.I.F" }
    else if (brandName === "dining_sevensprings") { return "세븐스프링스" }
    else if (brandName === "dining_vips") { return "VIPS" }
    else if (brandName === "dining_ashely") { return "애슐리" }
    else if (brandName === "dining_madforgarlic") { return "매드포갈릭" }
    else if (brandName === "dining_mcdonalds") { return "맥도날드" }
    else if (brandName === "dining_burgerking") { return "버거킹" }
    else if (brandName === "dining_lotteria") { return "롯데리아" }
    else if (brandName === "dining_kfc") { return "KFC" }
    else if (brandName === "dining_subway") { return "써브웨이" }
    else if (brandName === "dining_innoutburger") { return "인앤아웃버거" }
    else if (brandName === "dining_nobrandburger") { return "노브랜드버거" }
    else if (brandName === "dining_momstouch") { return "맘스터치" }
    else if (brandName === "dining_goobne") { return "굽네치킨" }
    else if (brandName === "dining_dominos") { return "도미노 피자" }
    else if (brandName === "dining_misterpizza") { return "미스터피자" }
    else if (brandName === "dining_pizzahut") { return "피자헛" }
    else if (brandName === "dining_papajohns") { return "파파존스피자" }

    else if (brandName === "books_kyobobooks") { return "교보문고" }
    else if (brandName === "books_bandinlunis") { return "반디앤루니스" }
    else if (brandName === "books_ypbooks") { return "영풍문고" }
    else if (brandName === "books_kyobobooksint") { return "인터넷 교보문고" }
    else if (brandName === "books_bandinlunisonline") { return "반디앤루니스 온라인" }
    else if (brandName === "books_ypbooksint") { return "인터넷 영풍문고" }
    else if (brandName === "books_yes24books") { return "YES24 도서" }
    else if (brandName === "books_interparkbooks") { return "인터파크 도서" }
    else if (brandName === "books_aladin") { return "알라딘" }

    else if (brandName === "themepark_lotteworld") { return "롯데월드" }
    else if (brandName === "themepark_everland") { return "에버랜드" }
    else if (brandName === "themepark_seoulland") { return "서울랜드" }
    else if (brandName === "themepark_kjworld") { return "경주월드" }
    else if (brandName === "themepark_carribeanbay") { return "캐리비안 베이" }

    else if (brandName === "fuel_gsgas") { return "GS칼텍스 휘발유" }
    else if (brandName === "fuel_skgas") { return "SK엔크린 휘발유" }
    else if (brandName === "fuel_hobgas") { return "현대오일뱅크 휘발유" }
    else if (brandName === "fuel_soilgas") { return "S-Oil 휘발유" }
    else if (brandName === "fuel_gsdis") { return "GS칼텍스 경유" }
    else if (brandName === "fuel_skdis") { return "SK엔크린 경유" }
    else if (brandName === "fuel_hobdis") { return "현대오일뱅크 경유" }
    else if (brandName === "fuel_soildis") { return "S-Oil 경유" }
    else if (brandName === "fuel_gslpg") { return "GS칼텍스 LPG" }
    else if (brandName === "fuel_sklpg") { return "SK엔크린 LPG" }
    else if (brandName === "fuel_hoblpg") { return "현대오일뱅크 LPG" }
    else if (brandName === "fuel_soillpg") { return "S-Oil LPG" }
    else if (brandName === "fuel_gspet") { return "GS칼텍스 등유" }
    else if (brandName === "fuel_skpet") { return "SK엔크린 등유" }
    else if (brandName === "fuel_hobpet") { return "현대오일뱅크 등유" }
    else if (brandName === "fuel_soilpet") { return "S-Oil 등유" }
    else if (brandName === "fuel_fuelgas") { return "주유 휘발유" }
    else if (brandName === "fuel_fueldis") { return "주유 경유" }
    else if (brandName === "fuel_fuellpg") { return "주유 LPG" }
    else if (brandName === "fuel_fuelpet") { return "주유 등유" }
}

function benefitParser(type, numberOne, numberTwo) {
    if (type === "PBD") {
        return numberOne + "% 청구 할인";
    } else if (type === "PID") {
        return numberOne + "% 즉시 할인";
    } else if (type === "PND") {
        return numberOne + "% 할인";
    } else if (type === "PCB") {
        return numberOne + "% 캐시백";
    } else if (type === "PGP") {
        return numberOne + "% 포인트/마일리지 적립";
    } else if (type === "WBD") {
        return numberOne + "원 청구 할인";
    } else if (type === "WID") {
        return numberOne + "원 즉시 할인";
    } else if (type === "WND") {
        return numberOne + "원 할인";
    } else if (type === "WCB") {
        return numberOne + "원 캐시백";
    } else if (type === "FGP") {
        return numberOne + "원당" + numberTwo + "포인트/마일리지 적립";
    } else if (type === "FBD") {
        return numberOne + "원당" + numberTwo + "원 청구 할인";
    } else if (type === "FID") {
        return numberOne + "원당" + numberTwo + "원 즉시 할인";
    } else if (type === "FND") {
        return numberOne + "원당" + numberTwo + "원 할인";
    } else if (type === "NGP") {
        return numberOne + "포인트/마일리지 적립";
    } else if (type === "LBD") {
        return "1리터당" + numberOne + "원 청구 할인";
    } else if (type === "LID") {
        return "1리터당" + numberOne + "원 즉시 할인";
    } else if (type === "LND") {
        return "1리터당" + numberOne + "원 할인";
    } else if (type === "LGP") {
        return "1리터당" + numberOne + "포인트/마일리지 적립";
    } else if (type === "LCB") {
        return "1리터당" + numberOne + "원 캐시백";
    }
}

function typeParser(type) {
    if (type === "credit\r" || type === "credit") {
        return "신용카드";
    } else if (type === "check\r" || type === "check") {
        return "체크카드";
    } else if (type === "hybrid\r" || type === "hybrid") {
        return "하이브리드 카드";
    }
}

function feeNameParser(name) {
    if (name === "amex") { return "아메리칸 익스프레스" }
    else if (name === "amexFamily") { return "아메리칸 익스프레스(가족 전용)" }
    else if (name === "amexMobile") { return "아메리칸 익스프레스(모바일 전용)" }
    else if (name === "bc") { return "BC카드" }
    else if (name === "bcGlobal") { return "BC 글로벌" }
    else if (name === "bcDomestic") { return "BC카드(국내 전용)" }
    else if (name === "jcb") { return "JCB" }
    else if (name === "jcbOneWay") { return "JCB(One Way)" }
    else if (name === "jcbGold") { return "JCB(골드)" }
    else if (name === "jcbMobile") { return "JCB(모바일 전용)" }
    else if (name === "jcbSilver") { return "JCB(실버)" }
    else if (name === "kWorld") { return "K-WORLD" }
    else if (name === "kWorldJcb") { return "K-WORLD(JCB)" }
    else if (name === "kWorldUpi") { return "K-WORLD(UPI)" }
    else if (name === "kWorldMobile") { return "K-WORLD(모바일 전용)" }
    else if (name === "master") { return "마스터카드" }
    else if (name === "masterPlatinum") { return "마스터카드(플래티넘)" }
    else if (name === "masterFamliy") { return "마스터카드(가족 전용)" }
    else if (name === "masterGold") { return "마스터카드(골드)" }
    else if (name === "masterDomestic") { return "마스터카드(국내 전용)" }
    else if (name === "masterMobile") { return "마스터카드(모바일 전용)" }
    else if (name === "masterSilver") { return "마스터카드(실버)" }
    else if (name === "masterOverseas") { return "마스터카드(해외 전용)" }
    else if (name === "oneWay") { return "One Way" }
    else if (name === "sAnd") { return "S&" }
    else if (name === "unionPay") { return "유니온페이" }
    else if (name === "unionPayDomestic") { return "유니온페이(국내 전용)" }
    else if (name === "unionPayMobile") { return "유니온페이(모바일 전용)" }
    else if (name === "upi") { return "UPI" }
    else if (name === "urs") { return "URS" }
    else if (name === "visa") { return "비자카드" }
    else if (name === "visaPlatinum") { return "비자카드(플래티넘)" }
    else if (name === "visaFamily") { return "비자카드(가족 전용)" }
    else if (name === "visaGold") { return "비자카드(골드)" }
    else if (name === "visaDomesticAndOverseas") { return "비자카드(국내외 겸용)" }
    else if (name === "visaMobile") { return "비자카드(모바일 전용)" }
    else if (name === "visaSilver") { return "비자카드(실버)" }
    else if (name === "domestic") { return "국내 전용" }
    else if (name === "domesticFamily") { return "국내 전용(가족 전용)" }
    else if (name === "domesticMobile") { return "국내 전용(모바일 전용)" }
}

function feeLinkParser(name) {
    if (name === "amex") { return "www.americanexpress.com/ko-kr/network/help" }
    else if (name === "amexFamily") { return "www.americanexpress.com/ko-kr/network/help" }
    else if (name === "amexMobile") { return "www.americanexpress.com/ko-kr/network/help" }
    else if (name === "bc") { return "www.bccard.com" }
    else if (name === "bcGlobal") { return "www.bccard.com" }
    else if (name === "bcDomestic") { return "www.bccard.com" }
    else if (name === "jcb") { return "www.kr.jcb" }
    else if (name === "jcbOneWay") { return "www.kr.jcb" }
    else if (name === "jcbGold") { return "www.kr.jcb" }
    else if (name === "jcbMobile") { return "www.kr.jcb" }
    else if (name === "jcbSilver") { return "www.kr.jcb" }
    else if (name === "kWorld") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "kWorldJcb") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "kWorldUpi") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "kWorldMobile") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "master") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterPlatinum") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterFamliy") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterGold") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterDomestic") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterMobile") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterSilver") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "masterOverseas") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
    else if (name === "oneWay") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "sAnd") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "unionPay") { return "www.unionpayintl.com/kr" }
    else if (name === "unionPayDomestic") { return "www.unionpayintl.com/kr" }
    else if (name === "unionPayMobile") { return "www.unionpayintl.com/kr" }
    else if (name === "upi") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "urs") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "visa") { return "www.visakorea.com" }
    else if (name === "visaPlatinum") { return "www.visakorea.com" }
    else if (name === "visaFamily") { return "www.visakorea.com" }
    else if (name === "visaGold") { return "www.visakorea.com" }
    else if (name === "visaDomesticAndOverseas") { return "www.visakorea.com" }
    else if (name === "visaMobile") { return "www.visakorea.com" }
    else if (name === "visaSilver") { return "www.visakorea.com" }
    else if (name === "domestic") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "domesticFamily") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
    else if (name === "domesticMobile") { return "해당 결제망은 전용 홈페이지가 존재하지 않습니다." }
}

function cardLinkParser(name) {
    if (name === "NH카드") { return "card.nonghyup.com" }
    else if (name === "국민카드") { return "card.kbcard.com" }
    else if (name === "기업카드") { return "www.ibk.co.kr/card/mainList.ibk" }
    else if (name === "대구은행") { return "www.dgb.co.kr" }
    else if (name === "롯데카드") { return "www.lottecard.co.kr" }
    else if (name === "부산은행") { return "www.busanbank.co.kr/ib20/mnu/FPM00001" }
    else if (name === "삼성카드") { return "www.samsungcard.com" }
    else if (name === "수협") { return "suhyup-bank.com" }
    else if (name === "신한카드") { return "www.shinhancard.com" }
    else if (name === "씨티카드") { return "www.citibank.co.kr" }
    else if (name === "우리카드") { return "www.wooricard.com" }
    else if (name === "케이뱅크") { return "www.kbanknow.com/ib20/mnu/FPMCRD000000" }
    else if (name === "하나카드") { return "www.hanacard.co.kr" }
    else if (name === "현대백화점") { return "www.ehyundai.com/newPortal/card/main.do" }
    else if (name === "현대카드") { return "www.hyundaicard.com" }
}

function cardPhoneNumberParser(name) {
    if (name === "NH카드") { return "1644-4000" }
    else if (name === "국민카드") { return "1588-1688" }
    else if (name === "기업카드") { return "1588-2588" }
    else if (name === "대구은행") { return "1566-5050" }
    else if (name === "롯데카드") { return "1588-8100" }
    else if (name === "부산은행") { return "1588-6200" }
    else if (name === "삼성카드") { return "1588-8700" }
    else if (name === "수협") { return "1588-1515" }
    else if (name === "신한카드") { return "1544-7000" }
    else if (name === "씨티카드") { return "1566-1000" }
    else if (name === "우리카드") { return "1588-9955" }
    else if (name === "케이뱅크") { return "1522-1155" }
    else if (name === "하나카드") { return "1800-1111" }
    else if (name === "현대백화점") { return "1588-4560" }
    else if (name === "현대카드") { return "1577-6000" }
}

export { benefitParser, brandParser, typeParser, feeNameParser, feeLinkParser, cardLinkParser, cardPhoneNumberParser };