import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';

import styles from "./MyPage.module.css";



function MyPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();

    const [username, setUsername] = useState("");

    useEffect(() => {
        const getUsername = async () => {
            try {
                const response = await axiosPrivate.get('/member/username', {});
                setUsername(response.data);

            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }


        getUsername();
    }, []);

    const [info, setInfo] = useState({
        id: "",
        pw: "",
        pwcheck: "",
    });

    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);



    function handleChangePW(event) {
        event.preventDefault();

        setInfo(info => {
            const updated = {
                ...info,
                [event.target.name]: event.target.value
            };

            return updated;
        });
    };



    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <div className={styles.container}>
                <div className={styles.button} onClick={() => {navigate("/mypage/password")}}>
                    <img alt="icon" className={styles.graphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                    <div className={styles.text}>
                        비밀번호 변경하기
                    </div>
                </div>

                <div className={styles.button} onClick={() => {navigate("/mypage/genderage")}}>
                    <img alt="icon" className={styles.graphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                    <div className={styles.text}>
                        성별 & 나이 변경하기
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;