import * as c from "../../styles/contents/finishCalendarStyle.js";
import * as l from "../../styles/common/layoutStyle.js";

import CustomCalendar from "../customCalendar";
const FinishCalendarContent = () => {

    return (
        <l.MainContainer>
            <c.FinishCalendarContainer>
                <CustomCalendar />
                <div className="statusContainer">
                    <div className="statusWrapper">
                        <div className="statusTitleWrapper">
                            <p className="statusTitle">마감 후 총 잔액</p>
                            <h3 className="statusValue">4,861,300원</h3>
                        </div>
                        <div className="statusItem">
                            <div>시작금액</div>
                            <div>2,302,300원</div>
                        </div>

                        <div className="statusItem">
                            <div>현금</div>
                            <div>0원</div>
                        </div>

                        <div className="statusItem">
                            <div>키오스크</div>
                            <div>0원</div>
                        </div>

                        <div className="statusItem">
                            <div>입금</div>
                            <div>0원</div>
                        </div>
                        <div className="statusItem">
                            <div>출금</div>
                            <div>0원</div>
                        </div>
                    </div>
                    <div>
                        <button className="detailReportButton">상세보고서 보러가기</button>
                    </div>
                </div>
            </c.FinishCalendarContainer>
        </l.MainContainer>
    )
}    
  
export default FinishCalendarContent;