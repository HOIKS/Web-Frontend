import api from "./baseAPI";

export async function menuPut(menuId, menuName, menuInfo, menuPrice, menuPhotoUrl, subCategoryId) {
    const data = {
        menuId : menuId,
        name : menuName,
        info : menuInfo,
        price : menuPrice,
        photoURL : menuPhotoUrl,
        subCategoryId : subCategoryId
    }

    try {
        const response = await api.put(
            '/admin/menus', 
            data, {
            headers: {
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