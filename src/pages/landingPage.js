import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import LandingContent from "../components/landingContent";
import * as l from "../styles/common/layoutStyle"

const LandingPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={false}> </SideBar>
      <MainHeader isLogin={false}></MainHeader>
      <LandingContent></LandingContent>
    </l.Wrapper>
  )
}

export default LandingPage;