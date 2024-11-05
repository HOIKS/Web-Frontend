import api from "./baseAPI";

export class dashboardFetch {
    constructor(storeId) {
        this.storeId = storeId;
        this.RawData = this.initFetch(null);
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
            console.log("[POST REQUEST] : ", requestBody);
            console.log("[POST RESPONSE] : ", response.data);
            return response.data;
            
        } catch (error) {
            console.error("[GET ERROR > dashboardFetch] :", error);
            throw error;
        }
    }

    todayTotalSales() {
        return this.RawData.salesInfo.todaySalesToday;

    }

    todayTotalOrders() {
        return this.RawData.salesInfo.todayOrdersToday;
    }

    recentOrders() { // TODO : JSON 내부에서 필요한 항목만 정리하기 
        const recents = this.RawData.salesInfo.recentOrders;
        return recents;
    }

    popularItems() {
        return this.RawData.popularMenuItems;
    }

    salesArrayToday() {
        return this.RawData.salesGraph.today;
    }

    salesArrayYesterday() {
        return this.RawData.salesGraph.yesterday;
    }
    salesArrayLastWeek() {
        return this.RawData.salesGraph.lastWeekSameDay;
    }
    
}
