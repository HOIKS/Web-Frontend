import Axios from "axios";

const accessToken = sessionStorage.getItem('accessToken');

export async function mainCategoryDelete() {
    try {
        const response = await Axios.get('http://hoiks.store:3000/admin/categories', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > mainCategoryDelete] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > mainCategoryDelete] :", error);
        throw error; 
    }
};

export async function subCategoryDelete() {
    try {
        const response = await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${mainCategoryId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > subCategoryDelete] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > subCategoryDelete] :", error);
        throw error;
    }
};

export async function menuDelete() {
    try {
        const response = await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${subCategoryId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[menuSetting > menuDelete] Response :", response.data);
        return response.data;
    } catch (error) {
        console.error("[menuSetting > menuDelete] :", error);
        throw error;
    }
};