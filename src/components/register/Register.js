import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Register.module.css";



function Register() {
    const navigate = useNavigate();

    const [checkedID, setCheckedID] = useState("아이디를 입력하세요.");
    const [checkedPW, setCheckedPW] = useState("비밀번호를 입력하세요.");

    const [info, setInfo] = useState({
        id: "",
        pw: "",
        pwcheck: "",
    });



    function handleChangeID(event) {
        event.preventDefault();

        setInfo(info => {
            const updated = {
                ...info,
                [event.target.name]: event.target.value
            };

            return updated;
        });
    };



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



    function checkID() {
        if (info.id.length > 4) {
            return true;
        }

        else {
            setCheckedID("아이디가 너무 짧습니다.");
            return false;
        }
    }



    function checkPW() {
        if (info.pw === info.pwcheck) {
            if (info.pw.length > 7) {
                return true;
            }

            else {
                setCheckedPW("비밀번호가 너무 짧습니다.");
                return false;
            }
        }

        else {
            if (info.pw.length > 7) {
                setCheckedPW("비밀번호가 일치하지 않습니다.");
                return false;
            }

            else {
                setCheckedPW("비밀번호가 너무 짧습니다.");
                return false;
            }
        }
    }



    
    const handleClick = () => {
        const option = {
            method: "POST",
            url: "/home/join",
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
            


            console.log(info);
            console.log("SUCCESS");
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
                                <input type="text" className={styles.inputBox} name="id" placeholder="아이디" onChange={handleChangeID} autoComplete="off" method="post" />
                            </div>

                            <div className={styles.checkedIDZone}>
                                {checkedID}
                            </div>

                            <div className={styles.inputZone}>
                                <input type="password" className={styles.inputBox} name="pw" placeholder="비밀번호" onChange={handleChangePW} autoComplete="off" method="post" />
                            </div>

                            <div className={styles.inputZone}>
                                <input type="password" className={styles.inputBox} name="pwcheck" placeholder="비밀번호 확인" onChange={handleChangePW} autoComplete="off" method="post" />
                            </div>

                            <div className={styles.checkedPWZone}>
                                {checkedPW}
                            </div>

                            <button type="submit" className={styles.registerButton} onClick={() => {
                                // if (checkID() && checkPW()) {
                                //     alert("Failed");
                                //     navigate("/login");
                                // }

                                // else {
                                //     alert("Failed");
                                //     navigate("/login");
                                // }

                                handleClick();
                            }}>
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