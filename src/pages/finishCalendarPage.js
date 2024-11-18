import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import FinishCalendarContent from "../components/finish/finishCalendarContent";

import * as l from "../styles/common/layoutStyle";


const FinishCalendarPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <FinishCalendarContent></FinishCalendarContent>
    </l.Wrapper>
  )
}

export default FinishCalendarPage;