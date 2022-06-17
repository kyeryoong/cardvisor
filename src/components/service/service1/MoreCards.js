import styles from './MoreCards.module.css';

function rankParser(rank) {
    if (rank == "1") { return <div className={styles.moreCardRankGold}>{rank}</div> }
    else if (rank == "2") { return <div className={styles.moreCardRankSilver}>{rank}</div> }
    else if (rank == "3") { return <div className={styles.moreCardRankBronze}>{rank}</div> }
    else  { return <div className={styles.moreCardRankNormal}>{rank}</div> }
}

function MoreCards(props) {
    return (
        <div>
            <div className={styles.moreCardZone}>
                {rankParser(props.rank)}

                <div>
                    <img className={styles.moreCardImage}
                        alt="cards"
                        src={process.env.PUBLIC_URL + '/images/card_images/' + props.id + '.png'} />
                </div>

                <div>
                <img
                    className={styles.moreCardCompanyImage}
                    alt="cards"
                    src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + props.company + '.png'} />
                </div>

                <div className={styles.moreCardName}>
                    {props.name}
                </div>

                <button className={styles.cardInfoButton} onClick={() => {
                    alert('준비중');
                }}>상세정보</button>
            </div>
            <hr />
        </div>
    );
}

export default MoreCards;