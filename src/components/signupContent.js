import * as c from "../styles/contents/signupStyle";
import * as l from "../styles/common/layoutStyle";

import { SendEmail, SignUp } from "./api/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUpContent = () => {

    let [signupFormData, setSignUpFormData] = useState({
        name: '',
        email: '',
        password: '',
        code: '10001000'
    })

    let [isEmailChecked, setEmailChecked] = useState(false);
    let [passwordConfirmed, setPasswordConfirmed] = useState(false);

    const navigate = useNavigate();

    const handleSignupFormDataChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({
            ...signupFormData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.

        // console.log(signupFormData);

        if(!isEmailChecked) {
            window.alert("이메일 중복 확인을 진행해주세요.");
        } else {
            try {
                const authResponse = await SignUp(signupFormData);
                console.log("Signup Success:", authResponse);
                window.alert("회원가입을 완료하었습니다. 로그인을 진행해주세요.");
                navigate('/login');
            } catch (error) {
                window.alert(error);
            }
        }
      };

    const handleCheckEmail = async () => {
        console.log(signupFormData.email);
        try {
            const emailResponse = await SendEmail(signupFormData.email);
            if (emailResponse) {
                window.alert("이메일 중복 확인을 완료하었습니다.");
                setEmailChecked(true);
            }
        } catch (error) {
            if(error.response.status === 400) {
                window.alert("이미 사용하고 있는 이메일입니다.");
            } else {
                window.alert(error);
            }
        }
    }

    const handlePasswordRecheck = (e) => {
        const value = e.target.value;
        setPasswordConfirmed(value === signupFormData.password);
    }

    return (
      <l.MainContainer>
        <c.SignUpContentContainer>  
            <div className="Titles">
                <h2>HOIKS</h2>
                <p>Human-Interaction <br/>
                Oriented Inteligent KIOSK System</p>
            </div>
            <form onSubmit={handleSubmit} className="signupForm">
                <div className="basics">
                    <p className="label"> 이름 </p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={handleSignupFormDataChange} 
                        required>

                    </input>
                </div>
                <div className="authInfo">
                    <p className="label"> 이메일 </p>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="E-mail" 
                        onChange={handleSignupFormDataChange} 
                        required>

                    </input>
                    {isEmailChecked ? (
                        <button 
                            type="button" 
                            className="emailChecked">
                            중복확인 완료
                        </button>
                    ) : (
                        <button 
                        className="checkEmailButton"
                        type="button" 
                        autoComplete="off"
                        onClick={handleCheckEmail}>
                            중복 확인
                         </button>
                    )}

                    <p className="label"> 비밀번호 </p>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        autoComplete="off" 
                        onInput={handleSignupFormDataChange} 
                        required>

                    </input>

                    <p className="label"> 비밀번호 재입력 {!passwordConfirmed && (
                        <span className="passwordNotMatch">비밀번호가 일치하지 않습니다.</span>
                    )}</p>
                    <input 
                        type="password" 
                        name="password_recheck" 
                        placeholder="Password" 
                        autoComplete="off"
                        onInput={handlePasswordRecheck} 
                        required>
                    </input>
                    

                </div>
                <div className="signupButtonWrapper">
                    <button className="signupButton" type="submit">회원가입 신청</button>
                </div>

            </form>

        </c.SignUpContentContainer>
      </l.MainContainer>
    )
  }
  
  export default SignUpContent;