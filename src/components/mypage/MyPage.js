import { useNavigate } from 'react-router';



function MyPage() {
    const navigate = useNavigate();

    return (
        <div>
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

export default MyPage;