import { BaseAPIGET, BaseAPIPOST } from "src/shared/BaseConfig"

export const getFoodItems = () => {
    return new Promise((resolve, reject) => {
        const url = "getFoodItems"
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const deleteFoodItem = (itemId) => {
    return new Promise((resolve, reject) => {
        const url = `deleteFoodItem?itemId=${itemId}`
        const method = "DELETE"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export const addFootItem = (reqObj) => {
    return new Promise((resolve, reject) => {
        const url = `addFoodItem`
        const method = "POST"
        BaseAPIPOST(url, method, reqObj).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const updateFoodItem = (reqObj) => {
    return new Promise((resolve, reject) => {
        const url = `updateFoodItem`
        const method = "PUT"
        BaseAPIPOST(url, method, reqObj).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}