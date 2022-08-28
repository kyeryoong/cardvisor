import { useNavigate } from "react-router";
import { useState } from "react";

import Intro from "../Intro";
import styles from "./MyPage.module.css"


function MyPage() {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        id: "",
        pw: "",
        pwcheck: "",
    });

    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);

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



    return (
        <div>
            <Intro mainText="내 정보" />
            <br /><br /><br />

            <div className={styles.container}>
                <div className={styles.infoTitle}>
                    필수 정보
                </div>



                <span className={styles.infoType}>
                    아이디
                </span>
                <span className={styles.infoValue}>
                    Username
                </span>
                <br />

                <span className={styles.infoType}>
                    비밀번호
                </span>
                <input type="password" className={styles.inputBox} name="pw" placeholder="비밀번호" onChange={handleChangePW} autoComplete="off" />
                <br />

                <span className={styles.infoType}>
                    비밀번호 확인
                </span>
                <input type="password" className={styles.inputBox} name="pw" placeholder="비밀번호 확인" onChange={handleChangePW} autoComplete="off" />
                <br /><br /><br />



                <div className={styles.infoTitle}>
                    선택 정보
                </div>

                <span className={styles.infoComment}>
                    아래의 정보를 추가로 입력해주시면, 사용자에게 더 알맞은 카드를 추천하는데 사용됩니다.
                </span>
                <br /><br />



                <span className={styles.infoType}>
                    성별
                </span>

                <button className={gender === "male" ? styles.genderButtonOn : styles.genderButtonOff} onClick={() => {
                    setGender("male");
                }}>
                    남
                </button>

                <button className={gender === "female" ? styles.genderButtonOn : styles.genderButtonOff} onClick={() => {
                    setGender("female");
                }}>
                    여
                </button>
                <br />



                <span className={styles.infoType}>
                    나이
                </span>

                <button className={age === 10 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(10);
                }}>
                    10대
                </button>

                <button className={age === 20 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(20);
                }}>
                    20대
                </button>

                <button className={age === 30 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(30);
                }}>
                    30대
                </button>

                <button className={age === 40 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(40);
                }}>
                    40대
                </button>

                <button className={age === 50 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(50);
                }}>
                    50대
                </button>

                <button className={age === 60 ? styles.ageButtonOn : styles.ageButtonOff} onClick={() => {
                    setAge(60);
                }}>
                    60대 이상
                </button>
                <br /><br /><br />
            </div>

            <div className={styles.buttonZone}>
                <button className={styles.sendButton}>
                    정보 수정하기
                </button>

                <button className={styles.toMainButton} onClick={() => {
                    navigate("/main");
                }}>
                    홈으로 가기
                </button>
            </div>
        </div>
    );
}

export default MyPage;