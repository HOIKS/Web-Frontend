import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import CountSettingContent from "../components/manage/countSettingContent";

import * as l from "../styles/common/layoutStyle";


const CountSettingPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <CountSettingContent></CountSettingContent>
    </l.Wrapper>
  )
}

export default CountSettingPage;