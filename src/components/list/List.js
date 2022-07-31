import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

import Intro from '../../Intro';

import styles from './List.module.css';



function List() {
    const navigate = useNavigate();

    const [cards, setCards] = useState({
        cardAll: [{}],
    });

    useEffect(() => {
        fetch("/cards")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const totalPages = Math.ceil((cards.cardAll.length) / 20);



    function Cards({ id, cardName, companyNameKor, companyNameEng, link }) {
        return (
            <tr key={id}>
                <td>
                    <img
                        className={styles.cardImages}
                        alt={id}
                        src={process.env.PUBLIC_URL + '/images/card_images/' + id + '.png'} />
                </td>

                <td>
                    <img
                        className={styles.cardCompanyImages}
                        alt={companyNameKor}
                        src={process.env.PUBLIC_URL + '/images/card_logo/left_aligned/' + companyNameEng + '.png'} />
                </td>

                <td className={styles.cardName}>
                    {cardName}
                </td>

                <td>
                    <button className={styles.moreCardInfoButton1} onClick={() => {
                        window.open("/cardinfo/" + id)
                    }}>
                        <img
                            className={styles.moreCardInfoImage1}
                            alt="cards"
                            src={process.env.PUBLIC_URL + "/images/icons/moreinfo.png"} />
                    </button>
                </td>

                <td>
                    <button className={styles.moreCardInfoButton2} onClick={() => {
                        window.open("https://www.banksalad.com/cards/" + id + "/issue")
                    }}>
                        <img
                            className={styles.moreCardInfoImage2}
                            alt="cards"
                            src={process.env.PUBLIC_URL + "/images/icons/gopage.png"} />
                    </button>
                </td>
            </tr>
        )
    }

    function PageButton({ pageNumber, currentPageNumber }) {
        if (pageNumber == currentPageNumber) {
            return (
                <button onClick={() => { setCurrentPage(pageNumber) }} className={styles.pageButtonCurrentPage}>
                {pageNumber}
            </button>
            )
        }

        else {
            return (
                <button onClick={() => { setCurrentPage(pageNumber) }} className={styles.pageButtonNotCurrentPage}>
                {pageNumber}
            </button>
            )
        }
    }



    return (
        <div>
            <Intro mainText="전체 카드 목록" subText="모든 카드를 이곳에서 확인해보세요!"/>
            <br /><br /><br />     

            <table>
                <tbody>
                    <Cards
                        id={cards?.cardAll[indexOfFirst]?.id}
                        cardName={cards?.cardAll[indexOfFirst]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst]?.company_eng}
                        link={cards?.cardAll[indexOfFirst]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 1]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 1]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 1]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 1]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 1]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 2]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 2]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 2]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 2]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 2]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 3]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 3]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 3]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 3]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 3]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 4]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 4]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 4]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 4]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 4]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 5]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 5]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 5]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 5]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 5]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 6]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 6]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 6]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 6]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 6]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 7]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 7]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 7]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 7]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 7]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 8]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 8]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 8]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 8]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 8]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 9]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 9]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 9]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 9]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 9]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 10]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 10]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 10]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 10]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 10]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 11]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 11]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 11]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 11]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 11]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 12]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 12]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 12]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 12]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 12]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 13]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 13]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 13]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 13]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 13]?.link}
                    />

                    <Cards
                        id={cards?.cardAll[indexOfFirst + 14]?.id}
                        cardName={cards?.cardAll[indexOfFirst + 14]?.name}
                        companyNameKor={cards?.cardAll[indexOfFirst + 14]?.company}
                        companyNameEng={cards?.cardAll[indexOfFirst + 14]?.company_eng}
                        link={cards?.cardAll[indexOfFirst + 14]?.link}
                    />
                </tbody>
            </table>
            <br /><br /><br />


            <div className={styles.pageButtonGroup}>
                <PageButton pageNumber={1} currentPageNumber={currentPage} />
                <PageButton pageNumber={2} currentPageNumber={currentPage} />
                <PageButton pageNumber={3} currentPageNumber={currentPage} />
                <PageButton pageNumber={4} currentPageNumber={currentPage} />
                <PageButton pageNumber={5} currentPageNumber={currentPage} />
                <PageButton pageNumber={6} currentPageNumber={currentPage} />
                <PageButton pageNumber={7} currentPageNumber={currentPage} />
                <PageButton pageNumber={8} currentPageNumber={currentPage} />
                <PageButton pageNumber={9} currentPageNumber={currentPage} />
                <PageButton pageNumber={10} currentPageNumber={currentPage} />
                <PageButton pageNumber={11} currentPageNumber={currentPage} />
                <PageButton pageNumber={12} currentPageNumber={currentPage} />
                <PageButton pageNumber={13} currentPageNumber={currentPage} />
                <PageButton pageNumber={14} currentPageNumber={currentPage} />
                <PageButton pageNumber={15} currentPageNumber={currentPage} />
                <PageButton pageNumber={16} currentPageNumber={currentPage} />
                <PageButton pageNumber={17} currentPageNumber={currentPage} />
                <PageButton pageNumber={18} currentPageNumber={currentPage} />
                <PageButton pageNumber={19} currentPageNumber={currentPage} />
                <PageButton pageNumber={20} currentPageNumber={currentPage} />
                <PageButton pageNumber={21} currentPageNumber={currentPage} />
                <PageButton pageNumber={22} currentPageNumber={currentPage} />
                <PageButton pageNumber={23} currentPageNumber={currentPage} />
                <PageButton pageNumber={24} currentPageNumber={currentPage} />
                <PageButton pageNumber={25} currentPageNumber={currentPage} />
                <PageButton pageNumber={26} currentPageNumber={currentPage} />
                <PageButton pageNumber={27} currentPageNumber={currentPage} />
            </div>
            <br /><br /><br />



            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate('/main');
                }}>
                    홈 화면으로
                </button>
            </div>
        </div>
    );
}

export default List;