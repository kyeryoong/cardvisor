import Header from '../../Header';

import { useNavigate } from 'react-router';



function Home(props) {
    const navigate = useNavigate();

    return (
        <div>
            <Header headertype={props.headertype} />

            HOMEPAGE
            <br />

            <button onClick={() => {
                navigate('/main');
            }}>
                시작하기
            </button>
        </div>
    );
}

export default Home;