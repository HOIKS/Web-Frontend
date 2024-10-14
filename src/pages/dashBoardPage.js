import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import LandingContent from "../components/landingContent";
import * as l from "../styles/common/layoutStyle"

const DashBoardPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader isLogin={true}></MainHeader>
      <div>TODO</div>
    </l.Wrapper>
  )
}

export default DashBoardPage;