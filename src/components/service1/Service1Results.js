import Header from '../../Header';

import { useNavigate } from 'react-router';



function Service1Results(props) {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header headertype={props.headertype} />

            THIS PAGE IS NOT IMPLEMENTED YET!
            <br />

            <button onClick={() => {
                navigate(-1);
            }}>
                뒤로가기
            </button>
        </div>
    );
}

export default Service1Results;