import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";

import * as l from "../styles/common/layoutStyle";


const ReportViewPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <div>TODO ! TODO</div>
    </l.Wrapper>
  )
}

export default ReportViewPage;