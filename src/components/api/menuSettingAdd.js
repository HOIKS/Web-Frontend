import Axios from "axios";

export async function menuAdd(menuName, menuInfo, menuPrice, menuPhotoUrl, subCategoryId) {
    const accessToken = sessionStorage.getItem('accessToken');
    try { 
        const response = await Axios.post(
            `/api/admin/menus`,
            {
                name: menuName,
                info: menuInfo,
                price: menuPrice,
                photoURL: menuPhotoUrl,
                subCategoryId: subCategoryId,
            },
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
    });

    return response.data;
        
    } catch (error) {
            throw error;
    }
};

export async function menuImgAdd(file) {
    const accessToken = sessionStorage.getItem('accessToken');
    const formData = new FormData();
    formData.append('file', file);

    try { 
        const response = await Axios.post(
            `/api/file/uploads`,
            formData,
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            }
    });
    return response.data;
        
    } catch (error) {
            throw error;
    }
};