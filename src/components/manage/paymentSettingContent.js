import * as c from "../../styles/contents/paymentSettingStyle.js";
import * as l from "../../styles/common/layoutStyle.js";
import creditCardIcon from "../../assets/imgs/creditCard.png";
import couponIcon from "../../assets/imgs/coupon.png";
import menuAddImg from "../../assets/imgs/menuAdd.png";


const PaymentSettingContent = () => {
    return (
        <l.MainContainer>
            <c.PaymentSettingContainer>
                <div className="paymentSettingButtons">
                    <button>결제 수단 관리</button>
                </div>
                <div className="paymentSettingView">
                    <div className="paymentSettingItem paymentAdd">
                        <h3> 신청 </h3>
                        <img src={menuAddImg} alt="" />

                    </div>
                    <div className="paymentSettingItem">
                        <h3> 카드 </h3>
                        <img src={creditCardIcon} alt=""/>
                    </div>
                    <div className="paymentSettingItem">
                        <h3> 쿠폰 </h3>
                        <img src={couponIcon} alt=""/>
                    </div>
                </div>
            </c.PaymentSettingContainer>
        </l.MainContainer>
    )
}

export default PaymentSettingContent