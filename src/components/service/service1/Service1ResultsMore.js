import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

import SelectedBrands from './SelectedBrands';
import Loading from '../../Loading';
import MoreCardsElement from './MoreCardsElement';
import Intro from '../../Intro';

import styles from "./Service1ResultsMore.module.css"



let jsonArr = [];

function Service1ResultsMore() {
    for (var i = 0; i < SelectedBrands.length; i++) {
        jsonArr[i] = { "memberId": 1, "brandName": SelectedBrands[i] }
    }

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState({
        topTenCards: [{}],
        bestCardBenefits: [{}],
    });

    useEffect(() => {
        fetch("/select", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonArr)
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                    setCards(data);
                    setLoading(false);
                }, 1000)
            });
    }, []);



    return (
        <div>
            {loading
                ?
                <Loading message="데이터 불러오는중" />
                :
                <div>
                    <Intro mainText="TOP 20 추천 카드" subText="더 많은 카드들도 확인해보세요." />
                    <br /><br /><br />

                    <MoreCardsElement rank="1" id={cards?.topTenCards[0]?.id} cardName={cards?.topTenCards[0]?.name} companyName={cards?.topTenCards[0]?.company_eng} />
                    <MoreCardsElement rank="2" id={cards?.topTenCards[1]?.id} cardName={cards?.topTenCards[1]?.name} companyName={cards?.topTenCards[1]?.company_eng} />
                    <MoreCardsElement rank="3" id={cards?.topTenCards[2]?.id} cardName={cards?.topTenCards[2]?.name} companyName={cards?.topTenCards[2]?.company_eng} />
                    <MoreCardsElement rank="4" id={cards?.topTenCards[3]?.id} cardName={cards?.topTenCards[3]?.name} companyName={cards?.topTenCards[3]?.company_eng} />
                    <MoreCardsElement rank="5" id={cards?.topTenCards[4]?.id} cardName={cards?.topTenCards[4]?.name} companyName={cards?.topTenCards[4]?.company_eng} />
                    <MoreCardsElement rank="6" id={cards?.topTenCards[5]?.id} cardName={cards?.topTenCards[5]?.name} companyName={cards?.topTenCards[5]?.company_eng} />
                    <MoreCardsElement rank="7" id={cards?.topTenCards[6]?.id} cardName={cards?.topTenCards[6]?.name} companyName={cards?.topTenCards[6]?.company_eng} />
                    <MoreCardsElement rank="8" id={cards?.topTenCards[7]?.id} cardName={cards?.topTenCards[7]?.name} companyName={cards?.topTenCards[7]?.company_eng} />
                    <MoreCardsElement rank="9" id={cards?.topTenCards[8]?.id} cardName={cards?.topTenCards[8]?.name} companyName={cards?.topTenCards[8]?.company_eng} />
                    <MoreCardsElement rank="10" id={cards?.topTenCards[9]?.id} cardName={cards?.topTenCards[9]?.name} companyName={cards?.topTenCards[9]?.company_eng} />
                    <MoreCardsElement rank="11" id={cards?.topTenCards[10]?.id} cardName={cards?.topTenCards[10]?.name} companyName={cards?.topTenCards[10]?.company_eng} />
                    <MoreCardsElement rank="12" id={cards?.topTenCards[11]?.id} cardName={cards?.topTenCards[11]?.name} companyName={cards?.topTenCards[11]?.company_eng} />
                    <MoreCardsElement rank="13" id={cards?.topTenCards[12]?.id} cardName={cards?.topTenCards[12]?.name} companyName={cards?.topTenCards[12]?.company_eng} />
                    <MoreCardsElement rank="14" id={cards?.topTenCards[13]?.id} cardName={cards?.topTenCards[13]?.name} companyName={cards?.topTenCards[13]?.company_eng} />
                    <MoreCardsElement rank="15" id={cards?.topTenCards[14]?.id} cardName={cards?.topTenCards[14]?.name} companyName={cards?.topTenCards[14]?.company_eng} />
                    <MoreCardsElement rank="16" id={cards?.topTenCards[15]?.id} cardName={cards?.topTenCards[15]?.name} companyName={cards?.topTenCards[15]?.company_eng} />
                    <MoreCardsElement rank="17" id={cards?.topTenCards[16]?.id} cardName={cards?.topTenCards[16]?.name} companyName={cards?.topTenCards[16]?.company_eng} />
                    <MoreCardsElement rank="18" id={cards?.topTenCards[17]?.id} cardName={cards?.topTenCards[17]?.name} companyName={cards?.topTenCards[17]?.company_eng} />
                    <MoreCardsElement rank="19" id={cards?.topTenCards[18]?.id} cardName={cards?.topTenCards[18]?.name} companyName={cards?.topTenCards[18]?.company_eng} />
                    <MoreCardsElement rank="20" id={cards?.topTenCards[19]?.id} cardName={cards?.topTenCards[19]?.name} companyName={cards?.topTenCards[19]?.company_eng} />

                    <button className={styles.goBackButton} onClick={() => {
                        navigate(-1);
                    }}>
                        돌아가기
                    </button>
                </div>
            }
        </div>
    );
}

export default Service1ResultsMore;