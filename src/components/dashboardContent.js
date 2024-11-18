import * as c from "../styles/contents/dashboardStyle.js";
import * as l from "../styles/common/layoutStyle.js";

import { useState, useEffect } from "react";
import { dashboardService } from "./api/dashboardService.js";
import { GetWeather } from "./api/weatherService.js";
import { format } from "date-fns";
import Chart from "react-apexcharts";

const DashboardContent = ({storeId = null}) => {
    const formattedDate = format(new Date(), "yyyy년 M월 d일 HH:mm");

    let [todayTotalSales, setTodayTotalSales] = useState(10000);
    let [recentPayments, setRecentPayments] = useState([]);
    let [popularItems, setPopularItems] = useState([]);

    let [graphOptions, setGraphOptions] = useState({});
    let [graphDatas, setGraphDatas] = useState([]);

    let [liveSalesGraphOption, setLiveSalesGraphOption] = useState({});
    let [liveSalesGraphDatas, setLiveSalesGraphDatas] = useState([]);
    
    let [weathers, setWeathers] = useState({});

    useEffect(() => {
       const dsbd = new dashboardService(storeId);

       dsbd.todayTotalSales().then((res) => {
           setTodayTotalSales(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.recentPayments().then((res) => {
           setRecentPayments(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.popularItems().then((res) => {
           setPopularItems(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.salesGraphOptions().then((res) => {
           setGraphOptions(res);
       }).catch((err) => {
           window.alert(err);
       })

       dsbd.salesArrays().then((res) => {
           setGraphDatas(res);
       }).catch((err) => {
           window.alert(err);
       })

       GetWeather().then((res) => {
           setWeathers(res);
       }).catch((err) => {
           window.alert(err);
       })

    }, []);


    return (
        <l.MainContainer>
            <c.DashboardContainer>
                <div className="BoxNorm weatherBox">
                    <div className="weatherTemperature">
                        <h1>{weathers.temp_now}°C</h1>
                        <p>최고 : {weathers.temp_max}°C, 최저 : {weathers.temp_min}°C</p>
                    </div>
                    <div className="weatherDesc">
                        <h3>오늘의 날씨는 <span>{weathers.weatherChar}</span> 이에요!</h3>
                        <p>화창한 오늘에 어울리는 메뉴를 추천하는 건 어때요?</p>
                    </div>
                    <img className ="weatherIcon" src={weathers.weatherIconUrl}/> 

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
                        <p> 총 9,000원</p>
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
                        <Chart options={graphOptions} series={graphDatas} type="area" width="100%" height="430px"/> 
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