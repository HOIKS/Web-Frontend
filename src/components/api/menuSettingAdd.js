import api from "./baseAPI";

export async function menuAdd(menuName, menuInfo, menuPrice, menuPhotoUrl, subCategoryId) {

    const requestBody = {
        name: menuName,
        info: menuInfo,
        price: menuPrice,
        photoURL: menuPhotoUrl,
        subCategoryId: subCategoryId,
    }

    try { 
        const response = await api.post(
            `/admin/menus`,
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
        throw error;
    }
};

export async function menuImgAdd(file) {

    const requestBody = new FormData();
    requestBody.append('file', file);

    try { 
        const response = await api.post(`/file/uploads`,
            requestBody,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("[POST REQUEST] : ", requestBody);
        console.log("[POST RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        throw error;
    }
};