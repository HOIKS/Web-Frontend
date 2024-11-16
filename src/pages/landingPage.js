import LoginHeader from "../components/common/loginHeader";
import SideBar from "../components/common/sideBar";
import LandingContent from "../components/landingContent";
import * as l from "../styles/common/layoutStyle"

const LandingPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={false}> </SideBar>
      <LoginHeader></LoginHeader>
      <LandingContent></LandingContent>
    </l.Wrapper>
  )
}

export default LandingPage;