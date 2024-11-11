import * as c from "../styles/common/contentStyle.js";
import * as l from "../styles/common/layoutStyle.js";

import { useState, useEffect } from "react";
import { dashboardService } from "./api/dashboardService.js";
import { format } from "date-fns";
import DashBoardGraph from "../assets/imgs/dashboardMainGraph.jpg";
import Chart from "react-apexcharts";

const DashboardContent = () => {
    const formattedDate = format(new Date(), "yyyy년 M월 d일 HH:mm");

    const graphOptions = {
        chart: {
          id: 'Sales'
        },
        xaxis: {
          categories: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        }, // 16Hours
        stroke : {
            curve: 'smooth',
        }
      };

    const graphDatas = [
        {
          name: 'Today',
          data: [300, 400, 405, 500, 490, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600]
        },

        {
          name: 'Yesterday',
          data: [150, 230, 320, 440, 510, 620, 760, 830, 920, 1310, 1150, 1230, 1050, 1350, 1520, 1650]
        },

        {
          name: 'LastWeek',
          data: [140, 130, 420, 540, 610, 770, 810, 830, 900, 1210, 950, 1130, 1250, 1150, 1420, 1850]
        }
      ];


    let [todayTotalSales, setTodayTotalSales] = useState(10000);
    let [recentPayments, setRecentPayments] = useState([]);
    let [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
       const dsbd = new dashboardService(null);

       dsbd.todayTotalSales().then((res) => {
           setTodayTotalSales(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.recentPayments().then((res) => {
           setRecentPayments(res);
           console.log(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.popularItems().then((res) => {
           setPopularItems(res);
       }).catch((err) => {
           window.alert(err);
       })

    }, []);


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
                            <p>{formattedDate}</p>
                            <h1>{todayTotalSales.toLocaleString()} 원</h1>
                        </div>
                    </div>
                </div>

                <div className="BoxNorm recentBox">
                    <div className="recentTitle">
                        <h3>최근 결제 내역</h3>
                        <p className="Time">{formattedDate}</p>
                    </div>
                    {recentPayments.map((item) => (
                        <div className="recentItem" key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.quantity}개</p>
                            <p>{item.totalPrice.toLocaleString()}원</p>
                        </div>
                    ))}
                    <div className="recentTotal">
                        <p> 총 4,900원</p>
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
                        <Chart options={graphOptions} series={graphDatas} type="line" width="100%" height="430px" /> 
                    </div>
                </div>

                <div className="BoxNorm rankBox">
                    <h3 className="rankTitle">우리 매장 인기 <span>TOP 3</span></h3>

                    {popularItems.map((item) => (
                        <div className="rankItem" key={item.id}>
                            <img src={"/api/file/static/" + item.photoUrl} />
                            <div className="rankItemInfo">
                                <h3>{item.name}</h3>
                                <p>{item.description}개</p>
                            </div>
                        </div>
                    ))}
                </div>
            </c.DashboardContainer>
        </l.MainContainer>
    )
}

export default DashboardContent