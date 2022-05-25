import styles from '../Service.module.css';

import Brands from './Brands';
import Categories from '../Categories';

import { useNavigate } from 'react-router-dom';



function Service1() {
    const navigate = useNavigate();

    // const [sel, setSel] = useState(0);

    return (
        <div>
            <h1>카드 추천 받기</h1>
            <h2>선호하는 혜택을 체크해주세요!</h2>
            <br /><br />

            <div></div>

            <details className={styles.detailsZone}>
                <Categories categoryName="교통" />

                <div className={styles.service2Row}>
                    <Brands brandNameKor="버스" brandNameEng="transport_bus" />
                    <Brands brandNameKor="지하철" brandNameEng="transport_subway" />
                    <Brands brandNameKor="택시" brandNameEng="transport_taxi" />
                    <Brands brandNameKor="코레일" brandNameEng="transport_korail" />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" />
                    <Brands brandNameKor="인천국제공항철도" brandNameEng="transport_arex" />
                </div>
            </details>




            <div>
                {/* <Link to='/service1/results'>
                    <button className={styles.sendButton} onClick={() => {

                        for (var i = 0; i < SelectedBrands.length; i++) {
                            jsonArr[i] = { "memberId": 1, "brandName": SelectedBrands[i] }
                        }
                        getJson();
                    }}>
                        n개 혜택 선택 완료
                    </button>
                </Link> */}
            </div>
            <br />

            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate('/main');
                }}>
                    홈 화면으로
                </button>
            </div>
        </div >
    );
}

export default Service1;