import api from "./baseAPI";

// ---- Main Category Delete ---- //
export async function mainCategoryDelete(categoryId) {
    const requestBody = {
        categoryId: categoryId
    }

    console.log("[mainCategoryDelete] Input : ", categoryId);

    try { 
        const response = await api.delete(
            `/admin/categories`,
            {
            headers: {
                'Content-Type': 'application/json'
            },
            data: requestBody
        
        });
        console.log("[DELETE RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        console.error("[DELETE ERROR > mainCategoryDelete] :", error);
        throw error;
    }
}

// ---- Sub Category Delete ---- //
export async function subCategoryDelete(subCategoryId) {
    const requestBody = {
        subCategoryId: subCategoryId
    }
    console.log("[subCategoryDelete] Input : ", subCategoryId);

    try { 
        const response = await api.delete(
            `/admin/sub-categories`,
            {
            headers: {
                'Content-Type': 'application/json'
            },
            data: requestBody
        });
        console.log("[DELETE RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        console.error("[DELETE ERROR > subCategoryDelete] :", error);
        throw error;
    }
}

// ---- Main Category Add ---- //
export async function mainCategoryAdd(name, storeId) {
    const requestBody = {
        name : name,
        className: null,
        storeId: storeId
    }
    console.log("[mainCategoryAdd] Input : ", requestBody);

    try { 
        const response = await api.post(
            `/admin/categories`,
            requestBody,
            {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("[POST RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        console.error("[POST ERROR > mainCategoryAdd] :", error);
        throw error;
    }
}

// ---- Sub Category Add ---- //
export async function subCategoryAdd(name, categoryId) {
    const requestBody = {
        name : name,
        className: null,
        categoryId: categoryId
    }
    console.log("[subCategoryAdd] Input : ", requestBody);

    try { 
        const response = await api.post(
            `/admin/sub-categories`,
            requestBody,
            {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("[POST RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        console.error("[POST ERROR > subCategoryAdd] :", error);
        throw error;
    }
}