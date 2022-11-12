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
                // console.log(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getCardList();

    }, []);


    // const getCardList = () => {
    //     const accessToken = localStorage.getItem("accessToken");
    //
    //     const option = {
    //         method: "GET",
    //         url: "/card/cards",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     };
    //
    //     axios(option).then(({ data }) => {
    //         setTimeout(() => {
    //             setCards(data);
    //             setLoading(false);
    //         }, 500);
    //     });
    // };

    // useEffect(() => {
    //     fetch("/card/cards")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setTimeout(() => {
    //                 setCards(data);
    //                 setLoading(false);
    //             }, 500);
    //         });
    // }, []);



    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(15);

    const indexOfLast = currentPage * elementsPerPage;
    const indexOfFirst = indexOfLast - elementsPerPage;
    const totalPages = Math.ceil(cards?.cardAll.length / elementsPerPage);

    const [startOfPage, setStartOfPage] = useState(1);
    const [endOfPage, setEndOfPage] = useState(10);

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
            } else {
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
    const [filterCompany, setFilterCompany] = useState(null);


    return (
        <div>
            {loading ? (
                <Loading message="데이터 불러오는중" />
            ) : (
                <div>
                    <HeaderBottom mainText="전체 카드 목록" subText="모든 카드를 이곳에서 확인해보세요." />

                    <div className={styles.filterBox}>
                        <div onClick={() => { setFilterClicked(!filterClicked) }} className={styles.filterButton}>
                            <div className={styles.filterText}>
                                조건 검색
                            </div>

                            {
                                filterClicked

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
                                <div className={styles.filterZoneInside}>
                                    <div className={styles.filterHeader}>
                                        카드사
                                    </div>

                                    <div className={styles.filterZoneCompanies}>
                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/bnk.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/citi.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/dgb.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/hana.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/hyundai.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/ibk.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/kb.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/kbank.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/lotte.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/nh.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/samsung.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/sh.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/shinhan.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/thehyundai.png"} />

                                        <img
                                            className={styles.filterZoneCompaniesButton}
                                            alt="cards"
                                            src={process.env.PUBLIC_URL + "/images/card_logo/center_aligned/woori.png"} />
                                    </div>
                                </div>

                                <div className={styles.filterZoneInside}>
                                    <div className={styles.filterHeader}>
                                        카드 유형
                                    </div>

                                    <div className={styles.filterZoneCardTypeButtonsZone}>
                                        <div className={styles.filterZoneCardTypeButton}>
                                            신용 카드
                                        </div>

                                        <div className={styles.filterZoneCardTypeButton}>
                                            체크 카드
                                        </div>

                                        <div className={styles.filterZoneCardTypeButton}>
                                            하이브리드 카드
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {typeof cards.cardAll[indexOfFirst].id != "undefined" && (
                        <ListElement
                            id={cards.cardAll[indexOfFirst].id}
                            cardName={cards.cardAll[indexOfFirst].name}
                            companyNameKor={cards.cardAll[indexOfFirst].company}
                            companyNameEng={
                                cards.cardAll[indexOfFirst].company_eng
                            }
                            type={cards.cardAll[indexOfFirst].type}
                        />
                    )}

                    {typeof cards.cardAll[indexOfFirst + 1].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 1].id}
                                cardName={cards.cardAll[indexOfFirst + 1].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 1].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 1].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 1].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 2].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 2].id}
                                cardName={cards.cardAll[indexOfFirst + 2].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 2].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 2].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 2].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 3].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 3].id}
                                cardName={cards.cardAll[indexOfFirst + 3].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 3].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 3].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 3].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 4].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 4].id}
                                cardName={cards.cardAll[indexOfFirst + 4].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 4].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 4].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 4].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 5].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 5].id}
                                cardName={cards.cardAll[indexOfFirst + 5].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 5].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 5].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 5].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 6].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 6].id}
                                cardName={cards.cardAll[indexOfFirst + 6].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 6].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 6].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 6].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 7].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 7].id}
                                cardName={cards.cardAll[indexOfFirst + 7].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 7].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 7].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 7].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 8].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 8].id}
                                cardName={cards.cardAll[indexOfFirst + 8].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 8].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 8].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 8].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 9].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 9].id}
                                cardName={cards.cardAll[indexOfFirst + 9].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 9].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 9].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 9].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 10].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 10].id}
                                cardName={cards.cardAll[indexOfFirst + 10].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 10].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 10].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 10].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 11].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 11].id}
                                cardName={cards.cardAll[indexOfFirst + 11].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 11].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 11].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 11].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 12].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 12].id}
                                cardName={cards.cardAll[indexOfFirst + 12].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 12].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 12].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 12].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 13].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 13].id}
                                cardName={cards.cardAll[indexOfFirst + 13].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 13].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 13].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 13].type}
                            />
                        )}

                    {typeof cards.cardAll[indexOfFirst + 14].id !=
                        "undefined" && (
                            <ListElement
                                id={cards.cardAll[indexOfFirst + 14].id}
                                cardName={cards.cardAll[indexOfFirst + 14].name}
                                companyNameKor={
                                    cards.cardAll[indexOfFirst + 14].company
                                }
                                companyNameEng={
                                    cards.cardAll[indexOfFirst + 14].company_eng
                                }
                                type={cards.cardAll[indexOfFirst + 14].type}
                            />
                        )}
                    <br />
                    <br />
                    <br />

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
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 1}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 2}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 3}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 4}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 5}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 6}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 7}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 8}
                            maxPageNumber={27}
                            currentPageNumber={currentPage}
                        />
                        <PageButton
                            pageNumber={startOfPage + 9}
                            maxPageNumber={27}
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

                    <div>
                        <button
                            className={styles.toMainButton}
                            onClick={() => {
                                navigate("/main");
                            }}
                        >
                            홈 화면으로
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default List;
