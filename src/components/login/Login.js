import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Login.module.css";

function Login({ isLogined, setIsLogined }) {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        username: "",
        password: "",
    });

    function handleChange(event) {
        event.preventDefault();
        setInfo((info) => {
            const updated = {
                ...info,
                [event.target.name]: event.target.value,
            };

            return updated;
        });
    }

    const handleClick = () => {
        const option = {
            method: "POST",
            url: "/login",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            data: JSON.stringify(info),
        };

        axios(option).then(({ data }) => {
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("refreshToken", data.refresh_token);
            setIsLogined(true);

            return navigate("/main");
        })
            .catch((error) => {
                alert("아이디와 비밀번호를 확인해주세요");

                return navigate("/login");
            })
    };



    return (
        <div className={styles.container} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.loginZone}>
                <div className={styles.loginZoneLeft}>
                    <div className={styles.mainTitle}>LOGIN</div>

                    <div className={styles.subTitle}>
                        Cardvisor에 오신것을 환영합니다!
                    </div>

                    <form>
                        <div className={styles.inputZone}>
                            <input
                                type="text"
                                className={styles.inputBox}
                                name="username"
                                placeholder="아이디"
                                onChange={handleChange}
                                autoComplete="off"
                                method="post"
                            />
                        </div>

                        <div className={styles.inputZone}>
                            <input
                                type="password"
                                className={styles.inputBox}
                                name="password"
                                placeholder="비밀번호"
                                onChange={handleChange}
                                autoComplete="off"
                                method="post"
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.loginButton}
                            onClick={() => { handleClick(); }}
                        >
                            로그인
                        </button>
                    </form>

                    <div className={styles.registerZone}>
                        아직 회원이 아니신가요? &nbsp;&nbsp;
                        <span
                            className={styles.registerButton}
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            회원가입 하기
                        </span>
                    </div>

                    <div className={styles.findPasswordZone}>
                        비밀번호를 잊으셨나요? &nbsp;&nbsp;&nbsp;
                        <span
                            className={styles.findPasswordButton}
                            onClick={() => {
                                alert("준비중");
                            }}
                        >
                            비밀번호 찾기
                        </span>
                    </div>
                </div>

                <div className={styles.loginZoneRight}>
                    {/* <LoginCarousel /> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
