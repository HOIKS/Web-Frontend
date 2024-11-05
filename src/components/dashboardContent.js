import * as c from "../styles/common/contentStyle.js";
import * as l from "../styles/common/layoutStyle.js";
import DashBoardGraph from "../assets/imgs/dashboardMainGraph.jpg";

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
                    <div className="recentTitle">
                        <h3>최근 결제 내역</h3>
                        <p className="Time">2024년 6월 12일 15:43</p>
                    </div>
                    <div className="recentItem">
                        <h3>아메리카노</h3>
                        <p>1개</p>
                        <p>4,500원</p>
                    </div>
                    <div className="recentItem">
                        <h3>카페라떼</h3>
                        <p>2개</p>
                        <p>12,900원</p>
                    </div>
                    <div className="recentTotal">
                        <p> 총 22,500원</p>
                    </div>
                </div>

                <div className="BoxGraph graphBox">
                    <div className="graphTitle">
                        <h1> 매출 그래프</h1>
                        <div className="graphIndex">
                            <h3><span style={{'color' : '#9A4BFF'}}>●</span> 오늘 매출</h3>
                            <h3><span style={{'color' : '#D9BBFF'}}>●</span> 어제 매출</h3>
                            <h3><span style={{'color' : '#E9E9E9'}}>●</span> 지난주 매출</h3>
                        </div>
                    </div>
                    <div className="graphCanvas">
                        <img src={DashBoardGraph} />
                        <div>
                            <span>08</span>
                            <span>09</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                        </div>
                        
                    </div>
                </div>

                <div className="BoxNorm rankBox">
                    <h3>우리 매장 인기 <span>TOP 3</span></h3>
                    <div className="rankItem">
                        <img />
                        <div>
                            <h3>아메리카노</h3>
                            <p>20-30대 남성 여성 <br/> 아이스 옵션 판매율을 가장 높아요 </p>
                        </div>
                    </div>
                    <div className="rankItem">
                        <img />
                        <div>
                            <h3>아이스티</h3>
                            <p>20-30대 여성 <br/> 아이스 옵션 판매율을 가장 높아요 </p>
                        </div>
                    </div>
                    <div className="rankItem">
                        <img />
                        <div>
                            <h3>초코스무디</h3>
                            <p>10-20대 여성 <br/> 아이스 옵션 판매율을 가장 높아요 </p>
                        </div>
                    </div>
                </div>
            </c.DashboardContainer>
        </l.MainContainer>
    )
}

export default DashboardContent