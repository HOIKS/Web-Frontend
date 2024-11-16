import api from "./baseAPI";

// ---- Main Category Delete ---- //
export async function devicesGet(storeId) {
    const requestBody = {
        storeId: storeId
    }

    console.log("[getDevices] Input : ", requestBody);

    try { 
        const response = await api.get(
            `/admin/devices`,
            requestBody,
            {
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        console.log("[GET RESPONSE] : ", response.data);
        return response.data;
        
    } catch (error) {
        console.error("[GET ERROR > devicesGet] :", error);
        throw error;
    }
}

// ---- Main Category Add ---- //
export async function deviceAdd(name, storeId) {
    const requestBody = {
        name : name,
        storeId: storeId
    }
    console.log("[mainCategoryAdd] Input : ", requestBody);

    try { 
        const response = await api.post(
            `/admin/devices`,
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
export async function deviceEdit(deviceId, name) {
    const requestBody = {
        deviceId: deviceId,
        name: name
    }
    console.log("[subCategoryAdd] Input : ", requestBody);

    // try { 
    //     const response = await api.post(
    //         `/admin/sub-categories`,
    //         requestBody,
    //         {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     console.log("[POST RESPONSE] : ", response.data);
    //     return response.data;
        
    // } catch (error) {
    //     console.error("[POST ERROR > subCategoryAdd] :", error);
    //     throw error;
    // }
}

export async function deviceDelete(deviceId) {
    const requestBody = {
        deviceId: deviceId
    }
    console.log("[subCategoryDelete] Input : ", requestBody);

    try { 
        const response = await api.delete(
            `/admin/devices`,
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