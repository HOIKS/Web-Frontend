import Axios from "axios";

export async function menuPut(menuId, menuName, menuInfo, menuPrice, menuPhotoUrl, subCategoryId) {
    const accessToken = sessionStorage.getItem('accessToken');
    const data = {
        menuId : menuId,
        name : menuName,
        info : menuInfo,
        price : menuPrice,
        photoURL : menuPhotoUrl,
        subCategoryId : subCategoryId
    }

    try {
        const response = await Axios.put(
            '/api/admin/menus', 
            data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("[PUT REQUEST] : ", data);
        console.log("[PUT RESPONSE] : ", response.data);
        return response.data;
    } catch (error) {
        console.error("[PUT ERROR] :", error);
        throw error; 
    }
};