import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import DashboardContent from "../components/dashboardContent";
import LandingContent from "../components/landingContent";
import * as l from "../styles/common/layoutStyle"

const DashBoardPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <DashboardContent></DashboardContent>
    </l.Wrapper>
  )
}

export default DashBoardPage;