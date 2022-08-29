import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

import styles from "./Register.module.css";



function Register() {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        id: "",
        pw: "",
        pwcheck: "",
    });



    function handleChange(event) {
        event.preventDefault();

        setInfo(info => {
            const updated = {
                ...info,
                [event.target.name]: event.target.value
            };

            return updated;
        });
    };



    const handleClick = () => {
        const option = {
            method: "POST",
            url: "/register",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            data: JSON.stringify({
                nickname: info.id,
                pw: info.pw,
                gender: "female",
                date: "1999/09/09"
            }),
        };

        axios(option).then(({ data }) => {
            alert("회원가입이 완료되었습니다.")
            
            return navigate("/login");
        })
            .catch((error) => {
                alert("failed");

                return navigate("/login");
            })
    };



    return (
        <div className={styles.container}>
            <div className={styles.registerZone}>
                <div className={styles.registerZoneLeft}>

                </div>



                <div className={styles.registerZoneRight}>
                    <div className={styles.registerZoneRightInside}>
                        <div className={styles.mainTitle}>
                            REGISTER
                        </div>

                        <div className={styles.subTitle}>
                            회원가입해서 Cardvisor의 다양한 혜택을 경험해보세요.
                        </div>



                        <form>
                            <div className={styles.inputZone}>
                                <input 
                                    type="text"
                                    className={styles.inputBox}
                                    name="id" 
                                    placeholder="아이디" 
                                    onChange={handleChange} 
                                    autoComplete="off" 
                                />
                            </div>

                            <div className={styles.inputZone}>
                                <input 
                                    type="password" 
                                    className={styles.inputBox} 
                                    name="pw" 
                                    placeholder="비밀번호" 
                                    onChange={handleChange} 
                                    autoComplete="off" 
                                />
                            </div>

                            <div className={styles.inputZone}>
                                <input
                                    type="password"
                                    className={styles.inputBox}
                                    name="pwcheck"
                                    placeholder="비밀번호 확인"
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </div>

                            <button type="submit" className={styles.registerButton} onClick={handleClick}>
                                회원가입
                            </button>
                        </form>
                        <br />

                        <button className={styles.registerCancelButton} onClick={() => {
                            navigate("/login");
                        }}>
                            회원가입 취소
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;