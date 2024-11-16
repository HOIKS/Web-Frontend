import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import FinishKioskContent from "../components/finish/finishKioskContent";

import * as l from "../styles/common/layoutStyle";


const FinishKioskPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <FinishKioskContent> </FinishKioskContent>
    </l.Wrapper>
  )
}

export default FinishKioskPage;