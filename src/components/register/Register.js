import { useState } from "react";
import { useNavigate } from "react-router-dom";

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



    return (
        <div className={styles.container}>
            <div className={styles.registerZone}>
                <div className={styles.registerZoneLeft}>
                    <div className={styles.registerText1}>
                        사용자 소비 패턴 기반<br />
                        <span className={styles.registerText2}>카드 상품</span><br />
                        <span className={styles.registerText2}>추천 서비스</span>
                    </div>

                    <img alt="graphic" className={styles.cardvisorLogo} src={process.env.PUBLIC_URL + '/images/cardvisor_white.png'} />
                </div>



                <div className={styles.registerZoneRight}>
                    <div className={styles.registerZoneRightInside}>
                        <div className={styles.mainTitle}>
                            Register
                        </div>

                        <div className={styles.subTitle}>
                            Cardvisor의 혜택을 체험해보세요!
                        </div>
                        <br />



                        <div className={styles.inputZone}>
                            <input type="text" className={styles.inputBox} name="id" placeholder="아이디" onChange={handleChangeID} autoComplete="off" method="post" />
                        </div>

                        <div className={styles.checkedIDZone}>
                            {checkedID}
                        </div>
                        <br /><br />



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
                            if (checkID() && checkPW()) {
                                navigate("/main");
                            }
                        }}>회원가입</button>
                        <br /><br /><br />
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Register;