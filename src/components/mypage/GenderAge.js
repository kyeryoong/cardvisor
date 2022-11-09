import { useNavigate } from "react-router";
import { useState } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';

import styles from "./GenderAge.module.css";



function GenderAge() {
    const navigate = useNavigate();

    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);



    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/password") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                <div className={styles.menuHeader}>
                    비밀번호 변경
                </div>
            </div>

            <form className={styles.mainContainer}>
                <div className={styles.menuContainer}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                    <div className={styles.menuHeader}>
                        성별 & 나이 변경
                    </div>
                </div>

                <div className={styles.genderContainer}>
                    <div className={styles.infoType}>
                        성별
                    </div>

                    <div className={styles.genderButtons}>
                        <div className={gender === 0 ? styles.buttonOn : styles.buttonOff} onClick={() => { setGender(0) }}>
                            남
                        </div>

                        <div className={gender === 1 ? styles.buttonOn : styles.buttonOff} onClick={() => { setGender(1) }}>
                            여
                        </div>
                    </div>
                </div>

                <div className={styles.ageContainer}>
                    <div className={styles.infoType}>
                        나이
                    </div>

                    <div className={styles.ageButtons}>
                        <img alt="home" className={age !== 0 ? styles.ageButtonEnabled : styles.ageButtonDisabled} src={age !== 0 ? process.env.PUBLIC_URL + "/images/icons/arrow_left_blue.png" : process.env.PUBLIC_URL + "/images/icons/arrow_left_black.png"} onClick={() => { if (age !== 0) { setAge(age - 1); } }} />

                        <span className={styles.ageValue}>
                            {(age + 1) * 10 + "대"}
                            {age === 5 && " 이상"}
                        </span>

                        <img alt="home" className={age !== 5 ? styles.ageButtonEnabled : styles.ageButtonDisabled} src={age !== 5 ? process.env.PUBLIC_URL + "/images/icons/arrow_right_blue.png" : process.env.PUBLIC_URL + "/images/icons/arrow_right_black.png"} onClick={() => { if (age !== 5) { setAge(age + 1); } }} />
                    </div>
                </div>

                <button className={styles.submitButton}>
                    변경하기
                </button>
            </form>
        </div>
    )
}

export default GenderAge;