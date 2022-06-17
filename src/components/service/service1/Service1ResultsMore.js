import styles from './Service1ResultsMore.module.css';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import MoreCards from './MoreCards';


function Service1ResultsMore() {
    const navigate = useNavigate();

    const [cards, setCards] = useState({
        topTenCards: [{}],
        bestCardBenefits: [{}],
    });

    useEffect(() => {
        fetch("/results")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);

    return (
        <div>
            <h1>TOP 20 추천 카드</h1>
            <h2>더 많은 카드들도 있으니, 확인해보세요</h2>
            <br /><br />

            <MoreCards rank="1" id={cards?.topTenCards[0]?.id} name={cards?.topTenCards[0]?.name} company={cards?.topTenCards[0]?.company_eng} />
            <MoreCards rank="2" id={cards?.topTenCards[1]?.id} name={cards?.topTenCards[1]?.name} company={cards?.topTenCards[1]?.company_eng} />
            <MoreCards rank="3" id={cards?.topTenCards[2]?.id} name={cards?.topTenCards[2]?.name} company={cards?.topTenCards[2]?.company_eng} />
            <MoreCards rank="4" id={cards?.topTenCards[3]?.id} name={cards?.topTenCards[3]?.name} company={cards?.topTenCards[3]?.company_eng} />
            <MoreCards rank="5" id={cards?.topTenCards[4]?.id} name={cards?.topTenCards[4]?.name} company={cards?.topTenCards[4]?.company_eng} />
            <MoreCards rank="6" id={cards?.topTenCards[5]?.id} name={cards?.topTenCards[5]?.name} company={cards?.topTenCards[5]?.company_eng} />
            <MoreCards rank="7" id={cards?.topTenCards[6]?.id} name={cards?.topTenCards[6]?.name} company={cards?.topTenCards[6]?.company_eng} />
            <MoreCards rank="8" id={cards?.topTenCards[7]?.id} name={cards?.topTenCards[7]?.name} company={cards?.topTenCards[7]?.company_eng} />
            <MoreCards rank="9" id={cards?.topTenCards[8]?.id} name={cards?.topTenCards[8]?.name} company={cards?.topTenCards[8]?.company_eng} />
            <MoreCards rank="10" id={cards?.topTenCards[9]?.id} name={cards?.topTenCards[9]?.name} company={cards?.topTenCards[9]?.company_eng} />
            <MoreCards rank="11" id={cards?.topTenCards[10]?.id} name={cards?.topTenCards[10]?.name} company={cards?.topTenCards[10]?.company_eng} />
            <MoreCards rank="12" id={cards?.topTenCards[11]?.id} name={cards?.topTenCards[11]?.name} company={cards?.topTenCards[11]?.company_eng} />
            <MoreCards rank="13" id={cards?.topTenCards[12]?.id} name={cards?.topTenCards[12]?.name} company={cards?.topTenCards[12]?.company_eng} />
            <MoreCards rank="14" id={cards?.topTenCards[13]?.id} name={cards?.topTenCards[13]?.name} company={cards?.topTenCards[13]?.company_eng} />
            <MoreCards rank="15" id={cards?.topTenCards[14]?.id} name={cards?.topTenCards[14]?.name} company={cards?.topTenCards[14]?.company_eng} />
            <MoreCards rank="16" id={cards?.topTenCards[15]?.id} name={cards?.topTenCards[15]?.name} company={cards?.topTenCards[15]?.company_eng} />
            <MoreCards rank="17" id={cards?.topTenCards[16]?.id} name={cards?.topTenCards[16]?.name} company={cards?.topTenCards[16]?.company_eng} />
            <MoreCards rank="18" id={cards?.topTenCards[17]?.id} name={cards?.topTenCards[17]?.name} company={cards?.topTenCards[17]?.company_eng} />
            <MoreCards rank="19" id={cards?.topTenCards[18]?.id} name={cards?.topTenCards[18]?.name} company={cards?.topTenCards[18]?.company_eng} />
            <MoreCards rank="20" id={cards?.topTenCards[19]?.id} name={cards?.topTenCards[19]?.name} company={cards?.topTenCards[19]?.company_eng} />
        </div>
    );
}

export default Service1ResultsMore;