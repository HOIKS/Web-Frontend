import * as l from "../../styles/common/layoutStyle"
import { Link } from "react-router-dom";

const LoginHeader = () => {

  return(
    <l.HeaderContainer>
          <div className="loginLink">   
              <h1><Link to="/login">로그인</Link></h1>
          </div>
      </l.HeaderContainer>
  )
}
export default LoginHeader;