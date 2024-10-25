import api from "./baseAPI";

/**
 * Get all main categories from the server.
 * This function sends a GET request to '/api/admin/categories' with 'Authorization' header.
 * The response data is returned.
 * If there is an error, it is logged and re-thrown.
 */
export async function mainCategoryFetch() {
    try {
        const response = await api.get('/admin/categories', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log("[menuSetting > mainCategoryFetch] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[GET ERROR > mainCategoryFetch] :", error);
        throw error; 
    }
};

/**
 * Get all sub categories of a main category from the server.
 * This function sends a GET request to '/api/admin/sub-categories?categoryId={mainCategoryId}' with 'Authorization' header.
 * The response data is returned.
 * If there is an error, it is logged and re-thrown.
 * @param {number} mainCategoryId - The ID of the main category to get sub categories of. Defaults to 1.
 */
export async function subCategoryFetch(mainCategoryId = 1) {
    try {
        const response = await api.get(`/admin/sub-categories?categoryId=${mainCategoryId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log("[menuSetting > subCategoryFetch] Input : ", mainCategoryId);
        // console.log("[menuSetting > subCategoryFetch] Response: ", response.data);
        return response.data;
    } catch (error) {
        console.error("[GET ERROR > subCategoryFetch] :", error);
        throw error;
    }
};

/**
 * Get all menus of a sub category from the server.
 * This function sends a GET request to '/api/admin/menus?subCategoryId={subCategoryId}' with 'Authorization' header.
 * The response data is returned.
 * If there is an error, it is logged and re-thrown.
 * @param {number} subCategoryId - The ID of the sub category to get menus of. Defaults to 1.
 */
export async function menuFetch(subCategoryId = 1) {
    try {
        const response = await api.get(`/admin/menus?subCategoryId=${subCategoryId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log("[menuSetting > menuFetch] Input :", subCategoryId);
        // console.log("[menuSetting > menuFetch] Response :", response.data);
        return response.data;
    } catch (error) {
        console.error("[GET ERROR > menuFetch] :", error);
        throw error;
    }
};