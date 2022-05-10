import { Link } from 'react-router-dom';

function Results() {
    return (
        <div>
            THIS IS RESULTS

            <div>
                <Link to='/service1'>
                    <button>
                        뒤로 가기
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Results;