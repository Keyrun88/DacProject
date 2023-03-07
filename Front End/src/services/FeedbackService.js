import { BaseAPIGET, BaseAPIPOST } from "src/shared/BaseConfig"

export const getFeedback = () => {
    return new Promise((resolve, reject) => {
        const url = "getFeedback"
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const addFeedback = (reqObj) => {
    return new Promise((resolve, reject) => {
        const url = "addFeedback"
        const method = "POST"
        BaseAPIPOST(url, method, reqObj).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const deleteFeedback = (id) => {
    return new Promise((resolve, reject) => {
        const url = `deleteFeedback?id=${id}`
        const method = "DELETE"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}