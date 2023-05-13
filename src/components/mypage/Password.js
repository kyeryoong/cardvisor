import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderBottom from '../HeaderBottom';

import styles from "./Password.module.css";



const USER_REGEX = /^[A-z][A-z0-9-_]{5,23}$/;
const PWD_REGEX = /^(?=.*[A-z])(?=.*[0-9])(?=.*[!@#$%^&*~]).{8,24}$/;



function Password() {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const { setAuth } = useAuth();

    const [currentPwd, setCurrentPwd] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])



    const [username, setUsername] = useState("");

    useEffect(() => {
        const getUsername = async () => {
            try {
                const response = await axiosPrivate.get('/member/username', {});
                setUsername(response.data);

            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }


        getUsername();
    }, []);



    return (
        <div>
            <HeaderBottom mainText="내 정보" subText="개인정보를 수정할 수 있습니다." />

            <form
                className={styles.mainContainer}
                onSubmit={(event) => {
                    event.preventDefault();

                    const changePW = async () => {
                        try {
                            const response = await axiosPrivate({
                                method: "POST",
                                url: "/auth/changePW",
                                data: {
                                    oldPw: currentPwd,
                                    newPw: pwd
                                }
                            });

                            alert("비밀번호 변경이 완료되었습니다.");
                            setAuth({});
                        } catch (err) {
                            console.error(err);
                            alert("현재 비밀번호가 올바르지 않습니다.");
                        }
                    }

                    changePW();
                }}>

                <div className={styles.menuContainer}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                    <div className={styles.menuHeader}>
                        비밀번호 변경
                    </div>
                </div>

                {
                    username === "test"

                        ?

                        "이 계정은 시연 전용 계정이므로, 비밀번호를 변경할 수 없습니다."

                        :

                        <div>
                            <div className={styles.inputContainer}>
                                <div className={styles.infoType}>
                                    현재 비밀번호
                                </div>

                                <input
                                    id="currentPwd"
                                    type="password"
                                    onChange={(e) => setCurrentPwd(e.target.value)}
                                    value={currentPwd}
                                    className={styles.inputBox}
                                    required
                                />
                            </div>
                            <div className={styles.alertContainer} />



                            <div className={styles.inputContainer}>
                                <div className={styles.infoType}>
                                    변경할 비밀번호
                                </div>

                                <input
                                    id="pwd"
                                    type="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    className={styles.inputBox}
                                    required
                                />
                            </div>

                            <div className={styles.alertContainer}>
                                {
                                    !pwd &&

                                    <div><br /></div>
                                }

                                {
                                    pwd && !validPwd

                                    &&

                                    <div className={styles.messageInvalid}>
                                        <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                        알파벳, 숫자, 특수기호가 포함되어야 합니다.
                                    </div>
                                }

                                {
                                    validPwd

                                    &&

                                    <div className={styles.messageInvalid}>
                                        <FontAwesomeIcon icon={faCheck} className={styles.iconValid} />
                                        사용 가능한 비밀번호 입니다.
                                    </div>
                                }
                            </div>



                            <div className={styles.inputContainer}>
                                <div className={styles.infoType}>
                                    변경할 비밀번호 확인
                                </div>

                                <input
                                    id="matchPwd"
                                    type="password"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    className={styles.inputBox}
                                    required
                                />
                            </div>

                            <div className={styles.alertContainer}>
                                {
                                    !matchPwd

                                    &&

                                    <div><br /></div>
                                }

                                {
                                    matchPwd && !validMatch

                                    &&

                                    <div className={styles.messageInvalid}>
                                        <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                        비밀번호가 일치하지 않습니다.<br />
                                    </div>
                                }

                                {
                                    validPwd && validMatch && matchPwd

                                    &&

                                    <div className={styles.messageInvalid}>
                                        <FontAwesomeIcon icon={faCheck} className={styles.iconValid} />
                                        비밀번호가 일치합니다.<br />
                                    </div>
                                }
                            </div>

                            {
                                ((currentPwd !== "") && (pwd !== "") && (matchPwd !== "") && validPwd && validMatch)

                                    ?

                                    <input type="submit" className={styles.submitButtonEnabled} value="변경하기" />

                                    :

                                    <input type="submit" disabled={true} className={styles.submitButtonDisabled} value="변경하기" />
                            }
                        </div>
                }
            </form>

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/genderage") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                <div className={styles.menuHeader}>
                    성별 & 나이 변경
                </div>
            </div>

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/resign") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/resign.png"} />

                <div className={styles.menuHeader}>
                    회원 탈퇴
                </div>
            </div>
        </div>
    )
}

export default Password;