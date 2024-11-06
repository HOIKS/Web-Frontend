import api from "./baseAPI";

export class dashboardService {
    constructor(storeId) {
        this.storeId = storeId;
        this.RawData = null;
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
            console.log("[DSHBD]" , response.data);
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

    async salesArrayToday() {
        await this.initPromise;
        return this.RawData.salesGraph.today;
    }

    async salesArrayYesterday() {
        await this.initPromise;
        return this.RawData.salesGraph.yesterday;
    }
    async salesArrayLastWeek() {
        await this.initPromise;
        return this.RawData.salesGraph.lastWeekSameDay;
    }
    
}
