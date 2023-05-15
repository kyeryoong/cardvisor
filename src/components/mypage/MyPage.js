import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import useAxiosObject from "../hooks/useAxiosObject";

import HeaderBottom from '../HeaderBottom';

import styles from "./MyPage.module.css";



function MyPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosObject = useAxiosObject();

    const [username, setUsername] = useState("");

    useEffect(() => {
        async function getUsername() {
            try {
                const response = await axiosObject.get('/member/username', {});
                setUsername(response.data);

            } 
            
            catch (error) {
                console.error(error);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsername();
    }, []);


    
    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <div className={styles.container}>
                <div className={styles.button} onClick={() => { navigate("/mypage/password") }}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                    <div className={styles.menuHeader}>
                        비밀번호 변경
                    </div>
                </div>

                <div className={styles.button} onClick={() => { navigate("/mypage/genderage") }}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                    <div className={styles.menuHeader}>
                        성별 & 나이 변경
                    </div>
                </div>

                <div className={styles.button} onClick={() => { navigate("/mypage/resign") }}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/resign.png"} />

                    <div className={styles.menuHeader}>
                        회원 탈퇴
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;