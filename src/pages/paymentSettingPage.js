import MainHeader from "../components/common/mainHeader";
import SideBar from "../components/common/sideBar";
import PaymentSettingContent from "../components/manage/paymentSettingContent";

import * as l from "../styles/common/layoutStyle";


const PaymentSettingPage = () => {

  return (
    <l.Wrapper>
      <SideBar isLogin={true}> </SideBar>
      <MainHeader></MainHeader>
      <PaymentSettingContent></PaymentSettingContent>
    </l.Wrapper>
  )
}

export default PaymentSettingPage;