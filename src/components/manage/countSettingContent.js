import * as c from "../../styles/common/contentStyle.js";
import * as l from "../../styles/common/layoutStyle.js";


const CountSettingContent = () => {
    const GaraData = Array.from({ length: 10 }, (_, index) => index); // [0, 1, 2, ..., 9]

    return (
        <l.MainContainer>
            <c.CountSettingContainer>
                {/* countSelectButtons */}
                <div className="countSelectButtons">
                    <div className="selectorWrapper">
                        <button className="">현재 시재</button>
                        <button>현금 정산</button>
                    </div>

                    <div className="settingWrapper">
                        <button>설정</button>
                    </div>
                </div>
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
                    <canvas>
                        그래프
                    </canvas>
                </div>
                {/* rightChart */}
                <div className="rightChart">
                    <div className="chartWrapper">
                        <h3>입출금 내역</h3>
                        <div className="tableWrapper">
                        {GaraData.map((data) => (
                            <div className="tableItem">
                                <div> 2024.07.30 </div>
                                <div> 내역 정보 </div>
                                <div> + 10,000원 </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <div>
                            <button>입금</button>
                            <button style={{ marginLeft: "2rem" }}>출금</button>
                        </div>
                        <div>
                            <button>시재 관리</button>
                        </div>
                    </div>
                </div>
                

            </c.CountSettingContainer>
        </l.MainContainer>
    )

}    
  
export default CountSettingContent;