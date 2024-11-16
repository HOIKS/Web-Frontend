import api from "./baseAPI";

// ---- Menu Add ---- //
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


// ---- Menu Delete ---- //
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

// ---- Menu Get(Fetch) ---- //

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

// ---- Menu Put(Edit) ---- //

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