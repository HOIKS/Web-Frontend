import Axios from "axios";

const accessToken = sessionStorage.getItem('accessToken');

export async function mainCategoryFetch() {
    try {
        const response = await Axios.get('http://hoiks.store:3000/admin/categories', {
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
    try {
        const response = await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${mainCategoryId}`, {
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
    try {
        const response = await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${subCategoryId}`, {
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