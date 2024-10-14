import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import LoginContent from "../components/loginContent";

import * as l from "../styles/common/layoutStyle";


const LoginPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={false}> </SideBar>
      <MainHeader isLogin={false}></MainHeader>
      <LoginContent></LoginContent>
    </l.Wrapper>
  )
}

export default LoginPage;