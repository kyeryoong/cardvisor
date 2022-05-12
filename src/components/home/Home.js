import { useNavigate } from 'react-router';



function Home() {
    const navigate = useNavigate();

    return (
        <div>
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