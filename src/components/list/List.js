import { useNavigate } from 'react-router';
import dummy from "../database/data.json";
import styles from './List.module.css';


function List() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.introText}>
                전체 카드 목록
            </div>
            <br /><br />

            <table>
                <tbody>
                    {dummy.cards.map(cur => (
                        <tr key={cur.card_code}>
                            <td>
                                <img
                                    className={styles.cardImages}
                                    alt={cur.card_code}
                                    src={process.env.PUBLIC_URL + '/images/card_images/' + cur.card_code + '.png'} />
                            </td>

                            <td>
                                <img
                                    className={styles.cardCompanyImages}
                                    alt={cur.card_company}
                                    src={process.env.PUBLIC_URL + '/images/card_logo/left aligned/' + cur.card_company + '.png'} />
                            </td>

                            <td className={styles.cardName}>
                                {cur.card_name}
                            </td>

                            <td>
                                <button className={styles.cardInfoButton} onClick={() => {
                                    alert('준비중');
                                }}>상세정보</button>
                            </td>

                            <td>
                                <button className={styles.homepageButton} onClick={() => {
                                    window.open('https://www.banksalad.com/cards/' + cur.card_code + '/issue');
                                }}>홈페이지</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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