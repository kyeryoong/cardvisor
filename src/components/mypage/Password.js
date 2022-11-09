import { useNavigate } from "react-router";
import { useState } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';

import styles from "./Password.module.css";



function Password() {
    const navigate = useNavigate();

    const [currentPwd, setCurrentPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [matchPwd, setMatchPwd] = useState("");



    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <form className={styles.mainContainer}>
                <div className={styles.menuContainer}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                    <div className={styles.menuHeader}>
                        비밀번호 변경
                    </div>
                </div>


                <label className={styles.header}>
                    현재 비밀번호
                </label>
                <input
                    id="password"
                    type="password"
                    onChange={(e) => setCurrentPwd(e.target.value)}
                    value={currentPwd}
                    className={styles.inputBox}
                    required
                />
                <br />

                <label className={styles.header}>
                    변경할 비밀번호
                </label>
                <input
                    id="password"
                    type="password"
                    onChange={(e) => setNewPwd(e.target.value)}
                    value={newPwd}
                    className={styles.inputBox}
                    required
                />
                <br />

                <label className={styles.header}>
                    변경할 비밀번호 확인
                </label>
                <input
                    id="password"
                    type="password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    className={styles.inputBox}
                    required
                />
                <br />

                <button className={styles.submitButton}>
                    변경하기
                </button>
            </form>

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/genderage") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                <div className={styles.menuHeader}>
                    성별 & 나이 변경
                </div>
            </div>
        </div>
    )
}

export default Password;