import api from "./baseAPI";

export async function menuDelete(menuId) {

    const requestBody = {
        menuId : menuId
    }

    try {
        const response = await api.delete('/admin/menus', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: requestBody
        });
        console.log("[DELETE REQUEST] : ", menuId);
        console.log("[DELETE RESPONSE] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[DELETE ERROR] :", error);
        throw error; 
    }
};