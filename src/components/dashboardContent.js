import * as c from "../styles/common/contentStyle.js";
import * as l from "../styles/common/layoutStyle.js";

const DashboardContent = () => {


    return (
        <l.MainContainer>
            <c.DashboardContainer>
                <div className="BoxNorm weatherBox">
                    <div className="weatherTemperature">
                        <h1>26.5 °C</h1>
                        <p>최고 : 28.5 °C, 최저 : 21.0 °C</p>
                    </div>
                    <div className="weatherDesc">
                        <h3>오늘의 날씨는 <span>맑음</span> 이에요!</h3>
                        <p>화창한 오늘에 어울리는 메뉴를 추천하는 건 어때요?</p>
                    </div>
                    <div className="weatherIcon">
                        <img /> 
                    </div>
                </div> 

                <div className="BoxNorm countBox">
                    <div className="countTitle">
                        <h3>오늘 우리 매장의 실시간 매출은?</h3>
                    </div>
                    <div className="countGraph">
                        <div className="countGraphCanvas">
                            <img />
                        </div>
                        <div className="countGraphValue">
                            <p>2024년 6월 12일 15:43 기준</p>
                            <h1>4,861,300원</h1>
                        </div>
                    </div>
                </div>

                <div className="BoxNorm recentBox">
                    <div>
                        <h3>최근 결제 내역</h3>
                        <p>2024년 6월 12일 15:43</p>
                    </div>
                    <div>
                        <div>
                            <h3>아메리카노</h3>
                            <p>4,500원</p>
                        </div>
                        <div>
                            <h3>카페라떼</h3>
                            <p>5,900원</p>
                        </div>
                    </div>
                    <div>
                        <div> 총 22,500원</div>
                    </div>
                </div>

                <div className="BoxGraph graphBox">
                    <div>
                        <h1> 매출 그래프</h1>
                        <div>
                            <h3><img /> 오늘 매출</h3>
                            <h3><img /> 어제 매출</h3>
                            <h3><img /> 지난주 매출</h3>
                        </div>
                    </div>
                    <div>
                        <img />
                    </div>
                </div>

                <div className="BoxNorm rankBox">

                </div>
            </c.DashboardContainer>
        </l.MainContainer>
    )
}

export default DashboardContent