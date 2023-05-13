import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

import HeaderBottom from '../HeaderBottom';

import styles from "./Resign.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setAuth2 } from "../../store/authSlice";



function Resign() {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    let auth2Data = useSelector((state) => state.auth2Data);
    let dispatch = useDispatch();

    const [pwd, setPwd] = useState('');



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

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/password") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/password.png"} />

                <div className={styles.menuHeader}>
                    비밀번호 변경
                </div>
            </div>

            <div className={styles.subContainer} onClick={() => { navigate("/mypage/genderage") }}>
                <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/gender.png"} />

                <div className={styles.menuHeader}>
                    성별 & 나이 변경
                </div>
            </div>

            <form
                className={styles.mainContainer}
                onSubmit={(event) => {
                    event.preventDefault();

                    const resign = async () => {
                        try {
                            const response = await axiosPrivate({
                                method: "POST",
                                url: "/auth/resign",
                                data: {
                                    password: pwd
                                }
                            });

                            alert("회원 탈퇴가 완료되었습니다.");
                            // setAuth({});
                            dispatch(setAuth2({}));
                        } catch (err) {
                            console.error(err);
                            alert("현재 비밀번호가 올바르지 않습니다.");
                        }
                    }

                    const ok = window.confirm("회원 탈퇴를 하시겠습니까?")

                    if (ok) {
                        resign();
                    }
                }}>

                <div className={styles.menuContainer}>
                    <img alt="icon" className={styles.menuGraphic} src={process.env.PUBLIC_URL + "/images/graphics/resign.png"} />

                    <div className={styles.menuHeader}>
                        회원 탈퇴
                    </div>
                </div>

                {
                    username === "test"

                        ?

                        "이 계정은 시연 전용 계정이므로, 회원 탈퇴를 할 수 없습니다."

                        :

                        <div>
                            <div className={styles.inputContainer}>
                                <div className={styles.infoType}>
                                    비밀번호
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

                            {
                                pwd

                                    ?

                                    <input type="submit" className={styles.resignButtonEnabled} value="회원 탈퇴하기" />

                                    :

                                    <input type="submit" className={styles.resignButtonDisabled} value="회원 탈퇴하기" />
                            }
                        </div>
                }
            </form>
        </div>
    )
}

export default Resign;