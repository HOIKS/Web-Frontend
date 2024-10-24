import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import MenuSettingContent from "../components/manage/menuSettingContent";

import * as l from "../styles/common/layoutStyle";


const MenuSettingPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader isLogin={true}></MainHeader>
      <MenuSettingContent> </MenuSettingContent>
    </l.Wrapper>
  )
}

export default MenuSettingPage;