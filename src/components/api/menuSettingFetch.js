import Axios from "axios";

export async function mainCategoryFetch() {
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken);
    try {
        const response = await Axios.get('/api/admin/categories', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > mainCategoryFetch] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > mainCategoryFetch] :", error);
        throw error; 
    }
};

export async function subCategoryFetch(mainCategoryId = 1) {
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken);
    try {
        const response = await Axios.get(`/api/admin/sub-categories?categoryId=${mainCategoryId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > subCategoryFetch] Input : ", mainCategoryId);
        console.log("[menuSetting > subCategoryFetch] Response: ", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > subCategoryFetch] :", error);
        throw error;
    }
};

export async function menuFetch(subCategoryId = 1) {
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken);
    try {
        const response = await Axios.get(`/api/admin/menus?subCategoryId=${subCategoryId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > menuFetch] Input :", subCategoryId);
        console.log("[menuSetting > menuFetch] Response :", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > menuFetch] :", error);
        throw error;
    }
};