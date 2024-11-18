import * as l from "../styles/common/layoutStyle";

import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import ReportContent from "../components/reportContent";

const ReportViewPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <ReportContent> </ReportContent>
    </l.Wrapper>
  )
}

export default ReportViewPage;