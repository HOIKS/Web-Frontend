import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import KioskSetupContent from "../components/manage/kioskSetupContent";

import * as l from "../styles/common/layoutStyle";

const KioskSetupPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <KioskSetupContent></KioskSetupContent>
    </l.Wrapper>
  )
}

export default KioskSetupPage;