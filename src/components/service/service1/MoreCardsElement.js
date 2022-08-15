import styles from './MoreCardsElement.module.css';

function rankParser(rank) {
    if (rank === "1") { return <label className={styles.moreCardRankGold}>{rank}</label> }
    else if (rank === "2") { return <label className={styles.moreCardRankSilver}>{rank}</label> }
    else if (rank === "3") { return <label className={styles.moreCardRankBronze}>{rank}</label> }
    else { return <label className={styles.moreCardRankNormal}>{rank}</label> }
}

function MoreCardsElement({ rank, id, cardName, companyName }) {
    return (
        <div className={styles.moreCardsZone} onClick={() => {
            window.open("/cardinfo/" + id);
        }}>
            {rankParser(rank)}

            <img className={styles.cardImages}
                alt="cards"
                src={process.env.PUBLIC_URL + "/images/card_images/" + id + ".png"} />

            <img
                className={styles.cardCompanyImage}
                alt="cards"
                src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + companyName + ".png"} />

            <div className={styles.cardName}>
                {cardName}
            </div>
        </div>
    );
}

export default MoreCardsElement;