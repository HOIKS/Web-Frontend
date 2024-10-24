import Axios from "axios";

/**
 * POST /api/admin/menus
 * 
 * 
 * @param {string} menuName - 
 * @param {string} menuInfo - 
 * @param {number} menuPrice - 
 * @param {string} menuPhotoUrl - 
 * @param {number} subCategoryId - 
 * @returns {Promise<{message: string}>} - 
 * @throws {Error}
 */
export async function menuAdd(menuName, menuInfo, menuPrice, menuPhotoUrl, subCategoryId) {
    const accessToken = sessionStorage.getItem('accessToken');
    const requestBody = {
        name: menuName,
        info: menuInfo,
        price: menuPrice,
        photoURL: menuPhotoUrl,
        subCategoryId: subCategoryId,
    }
    try { 
        const response = await Axios.post(
            `/api/admin/menus`,
            requestBody,
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`,
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

/**
 * POST /api/file/uploads
 * 
 * 
 * @param {File} file - 
 * @returns {Promise<{url: string}>} - 
 * @throws {Error}
 */
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
    console.log("[POST REQUEST] : ", formData);
    console.log("[POST RESPONSE] : ", response.data);
    return response.data;
        
    } catch (error) {
            throw error;
    }
};