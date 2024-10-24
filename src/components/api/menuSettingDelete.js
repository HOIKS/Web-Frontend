import Axios from "axios";

export async function menuDelete(menuId) {
    const accessToken = sessionStorage.getItem('accessToken');

    const requestBody = {
        menuId : menuId
    }
    try {
        const response = await Axios.delete(
            '/api/admin/menus', 
            {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
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