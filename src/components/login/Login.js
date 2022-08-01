import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from './Carousel'

import styles from "./Login.module.css";



function Login() {
    const navigate = useNavigate();

    const correctid = "admin";
    const correctpw = "1234";

    const [info, setInfo] = useState({
        id: "",
        pw: ""
    });

    function handleChange (event) {
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
        <div className={styles.loginZone}>
            <div className={styles.loginZoneLeft}>
                <form className={styles.loginZoneLeftInside}>
                    <div className={styles.mainTitle}>
                        Login
                    </div>

                    <div className={styles.subTitle}>
                        Cardvisor에 오신것을 환영합니다!
                    </div>
                    <br />



                    <div className={styles.inputZone}>
                        <input type="text" className={styles.inputBox} name="id" placeholder="아이디" onChange={handleChange} autoComplete="off" method="post" />
                    </div>

                    <div className={styles.inputZone}>
                        <input type="password" className={styles.inputBox} name="pw" placeholder="비밀번호" onChange={handleChange} autoComplete="off" method="post" />
                    </div>

                    <button type="submit" className={styles.loginButton} onClick={() => {
                        if (info.id === correctid && info.pw === correctpw) {
                            navigate("/main");
                        }

                        else {
                            alert("아이디와 비밀번호를 확인해주세요.");
                        }
                    }}>로그인</button>
                    <br /><br /><br />

                    <div className={styles.registerZone}>
                        아직 회원이 아니신가요?
                        &nbsp;&nbsp;&nbsp;

                        <span className={styles.registerButton} onClick={() => {
                            navigate("/register");
                        }}>
                            회원가입 하기
                        </span>
                    </div>

                    <div className={styles.findPasswordZone}>
                        비밀번호를 잊으셨나요?
                        &nbsp;&nbsp;&nbsp;

                        <span className={styles.findPasswordButton} onClick={() => {
                            alert("준비중");
                        }}>
                            비밀번호 찾기
                        </span>
                    </div>

                </form>
            </div>



            <div className={styles.loginZoneRight}>
                <Carousel />
            </div>
        </div>
    );
}

export default Login;