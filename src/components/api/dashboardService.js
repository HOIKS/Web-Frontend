import api from "./baseAPI";
import theme from "../../styles/theme";
import { type } from "@testing-library/user-event/dist/type";

export class dashboardService {
    constructor(storeId) {
        this.storeId = storeId;
        this.RawData = null;
        this.Weather = null;
        this.initPromise = this.initFetch(this.storeId); // initFetch의 Promise 저장
    }

    async initFetch(storeId) {
        const requestBody = {
            storeId: storeId
        }

        try { 
            const response = await api.get(
                `/admin/dashboard`,
                requestBody,
                {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log("[DSHBD]" , response.data);
            this.RawData = response.data;
            return response.data;
            
        } catch (error) {
            console.error("[GET ERROR > dashboardFetch] :", error);
            throw error;
        }
    }

    async todayTotalSales() {
        await this.initPromise;
        return this.RawData.salesInfo.totalSalesToday;
    }

    async liveSalesGraphOptions() {
        await this.initPromise;
        const options = {
            chart: {
                id: 'LiveSales'
            },
            colors: [theme.colors.mainColor],
            legend: {
                show: false
            },
            xaxis: {
                categories: this.RawData.salesGraph.labels,
            },
            stroke : {
                curve: 'smooth',
            }
        }
        return options;
    }

    async todayTotalOrders() {
        await this.initPromise;
        return this.RawData.salesInfo.totalOrdersToday;
    }

    async recentPayments() { // TODO : JSON 내부에서 필요한 항목만 정리하기 
        await this.initPromise;
        return this.RawData.salesInfo.recentPayments[0].items;
    }

    async popularItems() {
        await this.initPromise;
        return this.RawData.popularMenuItems;
    }

    async salesGraphOptions() {
        await this.initPromise;
        const options = {
            chart: {
                id: 'Sales'
            },
            colors: [theme.colors.mainColor, theme.colors.lightColor, theme.colors.gray4],
            legend: {
                show: false
            },
            xaxis: {
                categories: this.RawData.salesGraph.labels,
            },
            yaxis :{
                labels :{
                    formatter : function (value) {
                        return value.toLocaleString();
                    }
                }
            },
            dataLabels :{
                enabled : false
            },
            stroke : {
                curve: 'smooth',
            }
        }
        return options;
    }

    async salesArrays() {
        await this.initPromise;
        const datas = [{
                name: 'Today',
                data: this.RawData.salesGraph.today.data
            },
            {
                name: 'Yesterday',
                data: this.RawData.salesGraph.yesterday.data
            },
            {
                name: 'LastWeek',
                data: this.RawData.salesGraph.lastWeekSameDay.data
            }

        ]
        return datas
    }
    
}
