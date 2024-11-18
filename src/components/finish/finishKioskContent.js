import * as c from "../../styles/contents/finishKioskStyle.js";
import * as l from "../../styles/common/layoutStyle.js";


const FinishKioskContent = () => {
    const GaraData = Array.from({ length: 10 }, (_, index) => index); // [0, 1, 2, ..., 9]

    return (
        <l.MainContainer>
            <c.FinishKioskConainer>
                {/* leftChart */}
                <div className="leftChart">
                    <h3>현재 금액</h3>
                    <h1>4,861,300원</h1>
                    <div className="statusWrapper">
                        <div className="statusItem">
                            <div>시작금액</div>
                            <div>2,302,300원</div>
                        </div>

                        <div className="statusItem">
                            <div>현금 결제</div>
                            <div>0원</div>
                        </div>

                        <div className="statusItem">
                            <div>키오스크 결제</div>
                            <div>0원</div>
                        </div>

                        <div className="statusItem">
                            <div>입금한 금액</div>
                            <div>0원</div>
                        </div>
                        <div className="statusItem">
                            <div>출금한 금액</div>
                            <div>0원</div>
                        </div>
                    </div>
                    
                </div>
                {/* rightChart */}
                <div className="rightChart">
                    <div className="chartWrapper">
                        <h3>입출금 내역</h3>
                        <div className="tableWrapper">
                        {GaraData.map((data) => (
                            <div key={data} className="tableItem">
                                <div> 2024.07.30 </div>
                                <div> 내역 정보 </div>
                                <div> + 10,000원 </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <div>
                            <button>키오스크 서비스 마감</button>
                        </div>
                    </div>
                </div>
                

            </c.FinishKioskConainer>
        </l.MainContainer>
    )
}    
  
export default FinishKioskContent;