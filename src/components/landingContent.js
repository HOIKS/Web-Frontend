import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { Link } from "react-router-dom";

import LandingImage from "../assets/imgs/landingImage.png";

const LandingContent = () => {

    return (
      <l.MainContainer>
        <c.LandingContentContainer>
        <div>
            <div className="landingSection">
                <h2 className="landingTitle">HOIKS</h2>
                <p className="landingSubTitle">Human-Interaction <br/>
                Oriented Inteligent KIOSK System</p>
            </div>
            <div className="landingSection">
                <p className="landingDesc1"><span className="accentOne">로그인</span> 후 HOIKS의 <br/>
                다양한 서비스를 이용해보세요</p>
                
                <ul className="landingDesc2">
                    <li>다방면으로 매장 <span className="accentTwo">관리</span>를 할 수 있어요</li>
                    <li>빠르고 간편하게 <span className="accentTwo"> 마감</span>을 도와줘요</li>
                    <li><span className="accentTwo">보고서</span> 매장의 정보를 쉽게 알 수 있어요</li>
                </ul>
            </div>

            <div className="landingSection">
                <Link to="/login" className="gotoAuth">로그인 하러 가기 →</Link>
                <Link to="/register"className="gotoRegister">계정 가입하기</Link>
            </div>
        
        </div>
        <div>
            <img className="landingImage" src={LandingImage}/>

        </div>
        </c.LandingContentContainer>
      </l.MainContainer>
    )
  }
  
  export default LandingContent;