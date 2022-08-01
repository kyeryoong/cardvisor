import styles from './List.module.css';

function ListElement({ id, cardName, companyNameKor, companyNameEng, link }) {
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

export default ListElement;