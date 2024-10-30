import LoginHeader from "../components/common/loginHeader";
import SideBar from "../components/common/sideBar";
import LoginContent from "../components/loginContent";

import * as l from "../styles/common/layoutStyle";


const LoginPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={false}> </SideBar>
      <LoginHeader></LoginHeader>
      <LoginContent></LoginContent>
    </l.Wrapper>
  )
}

export default LoginPage;