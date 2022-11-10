import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';

import styles from "./GenderAge.module.css";



function GenderAge() {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    const [info, setInfo] = useState({
        gender: "",
        age: ""
    });



    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const ageArray = ["one", "two", "three", "four", "five", "six"];

    function ageParser(age) {
        for (var i = 0; i < 6; i++) {
            if (age === ageArray[i]) {
                return i;
            }
        }
    }



    useEffect(() => {
        const getMyInfo = async () => {
            try {
                const response = await axiosPrivate.get('/member/showMyInfo', {
                });
                setTimeout(() => {
                    setInfo(response.data);
                }, 0)
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getMyInfo();
    }, []);



    useEffect(() => {
        setGender(info.gender);
        setAge(ageParser(info.age));
    }, [info])



    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/password") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                <div className={styles.menuHeader}>
                    비밀번호 변경
                </div>
            </div>

            <form
                className={styles.mainContainer}
                onSubmit={(event) => {
                    event.preventDefault();

                    const getResults = async () => {
                        function ageTranslator(age) {
                            for (var i = 0; i < 6; i++) {
                                if (age === i) {
                                    return ageArray[i];
                                }
                            }
                        }

                        try {
                            const response = await axiosPrivate({
                                method: "POST",
                                url: "/member/myInfo",
                                data: {
                                    age: ageTranslator(age),
                                    gender: gender
                                }
                            });

                            alert("변경이 완료되었습니다.");
                            navigate("/mypage");
                        } catch (err) {
                            console.error(err);
                            alert("오류가 발생했습니다.");
                            navigate('/login', { state: { from: location }, replace: true });
                        }
                    }
                    getResults();
                }}>



                <div className={styles.menuContainer}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                    <div className={styles.menuHeader}>
                        성별 & 나이 변경
                    </div>
                </div>



                {
                    gender

                    &&

                    <div className={styles.genderContainer}>
                        <div className={styles.infoType}>
                            성별
                        </div>

                        <div className={styles.genderButtons}>
                            <div className={gender === "male" ? styles.buttonOn : styles.buttonOff} onClick={() => { setGender("male") }}>
                                남
                            </div>

                            <div className={gender === "female" ? styles.buttonOn : styles.buttonOff} onClick={() => { setGender("female") }}>
                                여
                            </div>
                        </div>
                    </div>
                }



                {
                    age !== null

                    &&

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
                }


                <input type="submit" className={styles.submitButton} value="변경하기" />
            </form>
        </div>
    )
}

export default GenderAge;