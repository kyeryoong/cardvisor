import Header from '../../Header';

import { useNavigate } from 'react-router';



function List() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />

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