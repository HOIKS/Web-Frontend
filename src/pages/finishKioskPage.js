import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";

import * as l from "../styles/common/layoutStyle";


const FinishKioskPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader isLogin={true}></MainHeader>
      <div>TODO ! TODO</div>
    </l.Wrapper>
  )
}

export default FinishKioskPage;