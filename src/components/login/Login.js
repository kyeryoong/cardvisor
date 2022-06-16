import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";



function Login() {
    const navigate = useNavigate();

    const correctid = "admin";
    const correctpw = "1234";

    const [info, setInfo] = useState({
        id: "",
        pw: ""
    });

    const handleChange = (event) => {
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
            <div className={style.title}>
                Login
            </div>

            <div className={style.subTitle}>
                cardvisor에 오신것을 환영합니다!
            </div>
            
            <div className={style.line} />

            <div>
                <form>
                    <div>
                        <input type="text" className={style.inputZone} name="id" placeholder="아이디" onChange={handleChange} autoComplete="off" method="post"/>
                    </div>

                    <div>
                        <input type="password" className={style.inputZone} name="pw" placeholder="비밀번호" onChange={handleChange} autoComplete="off" method="post" />
                    </div>

                    <div>
                        <button type="submit" className={style.button} onClick={() => {
                            if (info.id === correctid && info.pw === correctpw) {
                                navigate("/main");
                            }

                            else {
                                alert("아이디와 비밀번호를 확인해주세요.")
                                navigate(-1);
                            }
                        }}>로그인</button>
                    </div>
                </form>
            </div>
            <br />          



            {/* <br /><br /><br /><br /><br /><br />
            <div className={style.temp1}>
                현재 로그인 보안 기능 X
            </div>
            <div className={style.temp2}>
                <div onClick={() => { navigate("/main"); }}>
                        <li>이곳을 CLICK 하거나</li>
                        <li>ID : admin │ PW : 1234 입력</li>
                </div>
            </div> */}
        </div>
    );
}

export default Login;