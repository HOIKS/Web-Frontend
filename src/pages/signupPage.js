import LoginHeader from "../components/common/loginHeader";
import SideBar from "../components/common/sideBar";
import LoginContent from "../components/loginContent";
import SignUpContent from "../components/signupContent";

import * as l from "../styles/common/layoutStyle";


const SignUpPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={false}> </SideBar>
      <LoginHeader></LoginHeader>
      <SignUpContent></SignUpContent>
    </l.Wrapper>
  )
}

export default SignUpPage;