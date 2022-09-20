import styles from './List.module.css';
import {useNavigate} from "react-router";


function ListElement({ id, cardName, companyNameKor, companyNameEng }) {
    const navigate = useNavigate();

    return (
        <div className={styles.cardElementZone} onClick={() => {
            navigate("/cardinfo/" + id);
        }}>
            <img
                className={styles.cardImages}
                alt={id}
                src={process.env.PUBLIC_URL + '/images/card_images/' + id + '.png'} />

            <img
                className={styles.cardCompanyImage}
                alt={companyNameKor}
                src={process.env.PUBLIC_URL + '/images/card_logo/left_aligned/' + companyNameEng + '.png'} />

            <div className={styles.cardName}>
                {cardName}
            </div>
        </div>
    )
}

export default ListElement;