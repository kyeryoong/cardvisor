import Header from '../../Header';

import { useNavigate } from 'react-router';



function List(props) {
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

export default List;