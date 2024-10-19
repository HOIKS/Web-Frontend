import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const LoginContent = () => {

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
      })

    const navigate = useNavigate();

    const handleLoginFormDataChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.
    
        try {
            const response = await Axios.post('/api/auth/login', loginFormData, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
      
            // 서버로부터 받은 accessToken을 세션 스토리지에 저장합니다.
            const { accessToken } = response.data;
            if (accessToken) {
              sessionStorage.setItem('accessToken', accessToken);
              console.log('Access token saved :', accessToken);
              navigate('/dashboard');
              
            } else {
              console.error('Access token not found in response');
            }
        } catch (error) {
            console.error('Failed to log in:', error);
        }
      };

    return (
      <l.MainContainer>
        <c.LoginContentContainer>  
            <div>
                <div className="loginSection">
                    <h2 className="loginTitle">HOIKS</h2>
                    <p className="loginSubTitle">Human-Interaction <br/>
                    Oriented Inteligent KIOSK System</p>
                </div>
                <form onSubmit={handleSubmit} className="loginSection">
                    <div className="inputSection">
                        <h3 className="inputLabel">ID</h3>
                        <input 
                            type="email"
                            name="email"
                            value={loginFormData.email}
                            onChange={handleLoginFormDataChange}
                            placeholder="아이디를 입력해주세요" 
                            className="inputInput"/> 
                    </div>
                    <div className="inputSection">
                        <h3 className="inputLabel">PW</h3> 
                        <input 
                            type="password" 
                            name="password" 
                            value={loginFormData.password}
                            onChange={handleLoginFormDataChange} 
                            placeholder="비밀번호를 입력해주세요" 
                            className="inputInput"/> 
                    </div>
                    <div className="miscSection">
                        <input className="idSaveCheck" type="checkbox"/> 
                        <p> 아이디 저장</p>
                        <div style = {{opacity : 0}}> VO </div>
                        <div style = {{opacity : 0}}> VO </div>
                        <p> 비밀번호를 잊으셨나요?</p>
                    </div>

                    <button type="submit">로그인</button>

                </form>
            </div>
        
            <div className="loginDescSection">
                <p className="loginDesc1"><span className="accentOne">로그인</span> 후 HOIKS의 <br/>
                다양한 서비스를 이용해보세요</p>
                
                <ul className="loginDesc2">
                    <li>다방면으로 매장 <span className="accentTwo">관리</span>를 할 수 있어요</li>
                    <li>빠르고 간편하게 <span className="accentTwo"> 마감</span>을 도와줘요</li>
                    <li><span className="accentTwo">보고서</span> 매장의 정보를 쉽게 알 수 있어요</li>
                </ul>
            </div>



        </c.LoginContentContainer>
      </l.MainContainer>
    )
  }
  
  export default LoginContent;