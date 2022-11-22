import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';
import ListElement from "./ListElement";
import Loading from "../Loading";

import styles from "./List.module.css";



function List() {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState({
        cardAll: [{}]
    });
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getCardList = async () => {
            try {
                const response = await axiosPrivate.get('/card/cards', {
                });
                setTimeout(() => {
                    setCards(response.data);
                    setLoading(false);
                }, 500)
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getCardList();

    }, []);



    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(15);

    const indexOfLast = currentPage * elementsPerPage;
    const indexOfFirst = indexOfLast - elementsPerPage;

    const [startOfPage, setStartOfPage] = useState(1);
    const [endOfPage, setEndOfPage] = useState(10);

    const [totalPages, setTotalPages] = useState(Math.ceil(cards?.cardAll.length / elementsPerPage));
    useEffect(() => {
        setTotalPages(Math.ceil(cards?.cardAll.length / elementsPerPage));
    }, [cards.cardAll])
    


    function PageButton({ pageNumber, maxPageNumber, currentPageNumber }) {
        if (pageNumber <= maxPageNumber) {
            if (pageNumber === currentPageNumber) {
                return (
                    <button
                        onClick={() => {
                            setCurrentPage(pageNumber);
                        }}
                        className={styles.pageButtonCurrentPage}
                    >
                        {pageNumber}
                    </button>
                );
            }

            else {
                return (
                    <button
                        onClick={() => {
                            setCurrentPage(pageNumber);
                        }}
                        className={styles.pageButtonNotCurrentPage}
                    >
                        {pageNumber}
                    </button>
                );
            }
        }
    }



    const [filterClicked, setFilterClicked] = useState(false);

    const [filterCompany, setFilterCompany] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [filterName, setFilterName] = useState("");

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        var temp = [];

        // 회사 O, 종류 X, 이름 X
        if (filterCompany.length !== 0 && filterType.length === 0 && filterName === "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterCompany.includes(cards.cardAll[i].company)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 X, 종류 O, 이름 X
        else if (filterCompany.length === 0 && filterType.length !== 0 && filterName === "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterType.includes(cards.cardAll[i].type)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 O, 종류 O, 이름 X
        else if (filterCompany.length !== 0 && filterType.length !== 0 && filterName === "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterCompany.includes(cards.cardAll[i].company) && filterType.includes(cards.cardAll[i].type)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 X, 종류 X, 이름 O
        else if (filterCompany.length === 0 && filterType.length === 0 && filterName !== "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (cards.cardAll[i].name.includes(filterName)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 O, 종류 X, 이름 O
        else if (filterCompany.length !== 0 && filterType.length === 0 && filterName !== "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterCompany.includes(cards.cardAll[i].company) && cards.cardAll[i].name.includes(filterName)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 X, 종류 O, 이름 O
        else if (filterCompany.length === 0 && filterType.length !== 0 && filterName !== "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterType.includes(cards.cardAll[i].type) && cards.cardAll[i].name.includes(filterName)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        // 회사 O, 종류 O, 이름 O
        else if (filterCompany.length !== 0 && filterType.length !== 0 && filterName !== "") {
            for (var i = 0; i < cards.cardAll.length; i++) {
                if (filterCompany.includes(cards.cardAll[i].company) && filterType.includes(cards.cardAll[i].type) && cards.cardAll[i].name.includes(filterName)) {
                    temp.push(cards.cardAll[i])
                }
            }

            setFiltered(temp);
            setTotalPages(Math.ceil(temp.length / elementsPerPage));
        }

        else {
            setFiltered([]);
            setTotalPages(Math.ceil(cards?.cardAll.length / elementsPerPage));
        }
    }, [filterCompany, filterType, filterName]) 



    return (
        <div>
            {
                loading

                    ?

                    <Loading message="데이터 불러오는중" />

                    :

                    <div>
                        <HeaderBottom mainText="전체 카드 목록" subText="모든 카드를 이곳에서 확인해보세요." />

                        <div className={styles.filterBox}>
                            <div onClick={() => { setFilterClicked(!filterClicked) }} className={filterClicked ? styles.filterButtonClicked : styles.filterButtonNotClicked}>
                                    조건 검색
                                
                                {
                                    !filterClicked

                                        ?

                                        <img
                                            className={styles.filterArrow}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/icons/arrow_down_blue.png"} />

                                        :

                                        <img
                                            className={styles.filterArrow}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/icons/arrow_up_blue.png"} />
                                }
                            </div>



                            {
                                filterClicked

                                &&

                                <div className={styles.filterZone}>
                                    <div className={styles.filterHeader}>
                                        카드사
                                    </div>

                                    <div className={styles.filterZoneInside}>
                                        <div className={styles.filterZoneCompanies}>
                                            <img
                                                className={filterCompany.includes("부산은행") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/bnk.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("부산은행")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "부산은행"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "부산은행"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("씨티카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/citi.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("씨티카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "씨티카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "씨티카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("대구은행") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/dgb.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("대구은행")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "대구은행"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "대구은행"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("하나카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/hana.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("하나카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "하나카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "하나카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("현대카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/hyundai.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("현대카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "현대카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "현대카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("기업카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/ibk.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("기업카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "기업카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "기업카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("국민카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/kb.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("국민카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "국민카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "국민카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("케이뱅크") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/kbank.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("케이뱅크")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "케이뱅크"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "케이뱅크"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("롯데카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/lotte.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("롯데카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "롯데카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "롯데카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("NH카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/nh.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("NH카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "NH카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "NH카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("삼성카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/samsung.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("삼성카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "삼성카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "삼성카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("수협") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/sh.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("수협")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "수협"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "수협"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("신한카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/shinhan.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("신한카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "신한카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "신한카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("현대백화점") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/thehyundai.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("현대백화점")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "현대백화점"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "현대백화점"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />

                                            <img
                                                className={filterCompany.includes("우리카드") ? styles.filterZoneCompaniesButtonClicked : styles.filterZoneCompaniesButtonNotClicked}
                                                alt="cards"
                                                src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/woori.png"}
                                                onClick={() => {
                                                    if (filterCompany.includes("우리카드")) {
                                                        setFilterCompany(filterCompany.filter((element) => element !== "우리카드"));
                                                    }

                                                    else {
                                                        setFilterCompany(prev => [...prev, "우리카드"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            />
                                        </div>
                                    </div>



                                    <div className={styles.filterHeader}>
                                        카드 유형
                                    </div>

                                    <div className={styles.filterZoneInside}>
                                        <div className={styles.filterZoneCardTypeButtonsZone}>
                                            <div className={filterType.includes("credit") ? styles.filterZoneCardTypeButtonClicked : styles.filterZoneCardTypeButtonNotClicked}
                                                onClick={() => {
                                                    if (filterType.includes("credit")) {
                                                        setFilterType(filterType.filter((element) => element !== "credit"));
                                                    }

                                                    else {
                                                        setFilterType(prev => [...prev, "credit"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            >
                                                신용 카드
                                            </div>

                                            <div className={filterType.includes("check") ? styles.filterZoneCardTypeButtonClicked : styles.filterZoneCardTypeButtonNotClicked}
                                                onClick={() => {
                                                    if (filterType.includes("check")) {
                                                        setFilterType(filterType.filter((element) => element !== "check"));
                                                    }

                                                    else {
                                                        setFilterType(prev => [...prev, "check"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            >
                                                체크 카드
                                            </div>

                                            <div className={filterType.includes("hybrid") ? styles.filterZoneCardTypeButtonClicked : styles.filterZoneCardTypeButtonNotClicked}
                                                onClick={() => {
                                                    if (filterType.includes("hybrid")) {
                                                        setFilterType(filterType.filter((element) => element !== "hybrid"));
                                                    }

                                                    else {
                                                        setFilterType(prev => [...prev, "hybrid"]);
                                                    }

                                                    setCurrentPage(1);
                                                }}
                                            >
                                                하이브리드 카드
                                            </div>
                                        </div>
                                    </div>



                                    <div className={styles.filterZoneInside}>
                                        <div className={styles.filterHeader}>
                                            카드 이름
                                        </div>

                                        <input value={filterName} className={styles.filterNameBox} onChange={(event) => {
                                            setFilterName(event.target.value);
                                            setCurrentPage(1);
                                        }} />
                                    </div>
                                </div>
                            }
                        </div>



                        {
                            filtered.length

                                ?

                                <div>
                                    {
                                        typeof filtered[indexOfFirst] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst].id}
                                            cardName={filtered[indexOfFirst].name}
                                            companyNameKor={filtered[indexOfFirst].company}
                                            companyNameEng={filtered[indexOfFirst].company_eng}
                                            type={filtered[indexOfFirst].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 1] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 1].id}
                                            cardName={filtered[indexOfFirst + 1].name}
                                            companyNameKor={filtered[indexOfFirst + 1].company}
                                            companyNameEng={filtered[indexOfFirst + 1].company_eng}
                                            type={filtered[indexOfFirst + 1].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 2] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 2].id}
                                            cardName={filtered[indexOfFirst + 2].name}
                                            companyNameKor={filtered[indexOfFirst + 2].company}
                                            companyNameEng={filtered[indexOfFirst + 2].company_eng}
                                            type={filtered[indexOfFirst + 2].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 3] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 3].id}
                                            cardName={filtered[indexOfFirst + 3].name}
                                            companyNameKor={filtered[indexOfFirst + 3].company}
                                            companyNameEng={filtered[indexOfFirst + 3].company_eng}
                                            type={filtered[indexOfFirst + 3].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 4] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 4].id}
                                            cardName={filtered[indexOfFirst + 4].name}
                                            companyNameKor={filtered[indexOfFirst + 4].company}
                                            companyNameEng={filtered[indexOfFirst + 4].company_eng}
                                            type={filtered[indexOfFirst + 4].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 5] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 5].id}
                                            cardName={filtered[indexOfFirst + 5].name}
                                            companyNameKor={filtered[indexOfFirst + 5].company}
                                            companyNameEng={filtered[indexOfFirst + 5].company_eng}
                                            type={filtered[indexOfFirst + 5].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 6] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 6].id}
                                            cardName={filtered[indexOfFirst + 6].name}
                                            companyNameKor={filtered[indexOfFirst + 6].company}
                                            companyNameEng={filtered[indexOfFirst + 6].company_eng}
                                            type={filtered[indexOfFirst + 6].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 7] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 7].id}
                                            cardName={filtered[indexOfFirst + 7].name}
                                            companyNameKor={filtered[indexOfFirst + 7].company}
                                            companyNameEng={filtered[indexOfFirst + 7].company_eng}
                                            type={filtered[indexOfFirst + 7].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 8] != "undefined"

                                        &&
                                        <ListElement
                                            id={filtered[indexOfFirst + 8].id}
                                            cardName={filtered[indexOfFirst + 8].name}
                                            companyNameKor={filtered[indexOfFirst + 8].company}
                                            companyNameEng={filtered[indexOfFirst + 8].company_eng}
                                            type={filtered[indexOfFirst + 8].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 9] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 9].id}
                                            cardName={filtered[indexOfFirst + 9].name}
                                            companyNameKor={filtered[indexOfFirst + 9].company}
                                            companyNameEng={filtered[indexOfFirst + 9].company_eng}
                                            type={filtered[indexOfFirst + 9].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 10] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 10].id}
                                            cardName={filtered[indexOfFirst + 10].name}
                                            companyNameKor={filtered[indexOfFirst + 10].company}
                                            companyNameEng={filtered[indexOfFirst + 10].company_eng}
                                            type={filtered[indexOfFirst + 10].type}
                                        />
                                    }

                                    {
                                        typeof filtered[indexOfFirst + 11] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 11].id}
                                            cardName={filtered[indexOfFirst + 11].name}
                                            companyNameKor={filtered[indexOfFirst + 11].company}
                                            companyNameEng={filtered[indexOfFirst + 11].company_eng}
                                            type={filtered[indexOfFirst + 11].type}
                                        />

                                    }

                                    {
                                        typeof filtered[indexOfFirst + 12] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 12].id}
                                            cardName={filtered[indexOfFirst + 12].name}
                                            companyNameKor={filtered[indexOfFirst + 12].company}
                                            companyNameEng={filtered[indexOfFirst + 12].company_eng}
                                            type={filtered[indexOfFirst + 12].type}
                                        />

                                    }

                                    {
                                        typeof filtered[indexOfFirst + 13] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 13].id}
                                            cardName={filtered[indexOfFirst + 13].name}
                                            companyNameKor={filtered[indexOfFirst + 13].company}
                                            companyNameEng={filtered[indexOfFirst + 13].company_eng}
                                            type={filtered[indexOfFirst + 13].type}
                                        />

                                    }

                                    {
                                        typeof filtered[indexOfFirst + 14] != "undefined"

                                        &&

                                        <ListElement
                                            id={filtered[indexOfFirst + 14].id}
                                            cardName={filtered[indexOfFirst + 14].name}
                                            companyNameKor={filtered[indexOfFirst + 14].company}
                                            companyNameEng={filtered[indexOfFirst + 14].company_eng}
                                            type={filtered[indexOfFirst + 14].type}
                                        />
                                    }
                                </div>

                                :

                                <div>
                                    {
                                        typeof cards.cardAll[indexOfFirst] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst].id}
                                            cardName={cards.cardAll[indexOfFirst].name}
                                            companyNameKor={cards.cardAll[indexOfFirst].company}
                                            companyNameEng={cards.cardAll[indexOfFirst].company_eng}
                                            type={cards.cardAll[indexOfFirst].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 1] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 1].id}
                                            cardName={cards.cardAll[indexOfFirst + 1].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 1].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 1].company_eng}
                                            type={cards.cardAll[indexOfFirst + 1].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 2] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 2].id}
                                            cardName={cards.cardAll[indexOfFirst + 2].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 2].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 2].company_eng}
                                            type={cards.cardAll[indexOfFirst + 2].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 3] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 3].id}
                                            cardName={cards.cardAll[indexOfFirst + 3].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 3].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 3].company_eng}
                                            type={cards.cardAll[indexOfFirst + 3].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 4] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 4].id}
                                            cardName={cards.cardAll[indexOfFirst + 4].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 4].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 4].company_eng}
                                            type={cards.cardAll[indexOfFirst + 4].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 5] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 5].id}
                                            cardName={cards.cardAll[indexOfFirst + 5].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 5].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 5].company_eng}
                                            type={cards.cardAll[indexOfFirst + 5].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 6] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 6].id}
                                            cardName={cards.cardAll[indexOfFirst + 6].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 6].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 6].company_eng}
                                            type={cards.cardAll[indexOfFirst + 6].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 7] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 7].id}
                                            cardName={cards.cardAll[indexOfFirst + 7].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 7].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 7].company_eng}
                                            type={cards.cardAll[indexOfFirst + 7].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 8] != "undefined"

                                        &&
                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 8].id}
                                            cardName={cards.cardAll[indexOfFirst + 8].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 8].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 8].company_eng}
                                            type={cards.cardAll[indexOfFirst + 8].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 9] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 9].id}
                                            cardName={cards.cardAll[indexOfFirst + 9].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 9].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 9].company_eng}
                                            type={cards.cardAll[indexOfFirst + 9].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 10] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 10].id}
                                            cardName={cards.cardAll[indexOfFirst + 10].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 10].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 10].company_eng}
                                            type={cards.cardAll[indexOfFirst + 10].type}
                                        />
                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 11] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 11].id}
                                            cardName={cards.cardAll[indexOfFirst + 11].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 11].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 11].company_eng}
                                            type={cards.cardAll[indexOfFirst + 11].type}
                                        />

                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 12] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 12].id}
                                            cardName={cards.cardAll[indexOfFirst + 12].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 12].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 12].company_eng}
                                            type={cards.cardAll[indexOfFirst + 12].type}
                                        />

                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 13] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 13].id}
                                            cardName={cards.cardAll[indexOfFirst + 13].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 13].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 13].company_eng}
                                            type={cards.cardAll[indexOfFirst + 13].type}
                                        />

                                    }

                                    {
                                        typeof cards.cardAll[indexOfFirst + 14] != "undefined"

                                        &&

                                        <ListElement
                                            id={cards.cardAll[indexOfFirst + 14].id}
                                            cardName={cards.cardAll[indexOfFirst + 14].name}
                                            companyNameKor={cards.cardAll[indexOfFirst + 14].company}
                                            companyNameEng={cards.cardAll[indexOfFirst + 14].company_eng}
                                            type={cards.cardAll[indexOfFirst + 14].type}
                                        />
                                    }
                                </div>
                        }
                        <br /><br /><br />

                        <div className={styles.pageButtonGroup}>
                            <button
                                className={styles.leftPageButton}
                                onClick={() => {
                                    if (startOfPage - 10 >= 1) {
                                        setStartOfPage(startOfPage - 10);
                                        setEndOfPage(endOfPage - 10);
                                    }
                                }}
                            >
                                <img
                                    alt="arrow_up"
                                    className={styles.arrow}
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/images/icons/arrow_left_blue.png"
                                    }
                                />
                            </button>

                            <PageButton
                                pageNumber={startOfPage}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 1}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 2}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 3}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 4}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 5}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 6}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 7}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 8}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />
                            <PageButton
                                pageNumber={startOfPage + 9}
                                maxPageNumber={totalPages}
                                currentPageNumber={currentPage}
                            />

                            <button
                                className={styles.rightPageButton}
                                onClick={() => {
                                    if (endOfPage <= totalPages) {
                                        setStartOfPage(startOfPage + 10);
                                        setEndOfPage(endOfPage + 10);
                                    }
                                }}
                            >
                                <img
                                    alt="arrow_up"
                                    className={styles.arrow}
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/images/icons/arrow_right_blue.png"
                                    }
                                />
                            </button>
                        </div>
                        <br /><br /><br />
                    </div>
            }
        </div>
    );
}

export default List;
