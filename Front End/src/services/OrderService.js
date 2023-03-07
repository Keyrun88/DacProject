import { BaseAPIGET, BaseAPIPOST } from "src/shared/BaseConfig"

export const getAllOrders = () => {
    return new Promise((resolve, reject) => {
        const url = "getAllOrders"
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export const updateOrderStatus = (orderId, status) => {
    return new Promise((resolve, reject) => {
        const url = `updateOrderStatus?orderId=${orderId}&status=${status}`
        const method = "PUT"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getOrderById = (id) => {
    return new Promise((resolve, reject) => {
        const url = `getOrderById?id=${id}`
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getOrderByUserId = (id) => {
    return new Promise((resolve, reject) => {
        const url = `getOrderByUserId?userId=${id}`
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const addOrder = (reqObj) => {
    return new Promise((resolve, reject) => {
        const url = `addOrder`
        const method = "POST"
        BaseAPIPOST(url, method, reqObj).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

