import { BaseAPIGET, BaseAPIPOST } from "src/shared/BaseConfig"

export const getDiscount = () => {
    return new Promise((resolve, reject) => {
        const url = "getDiscount"
        const method = "GET"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const updateDiscount = (StudentDiscount, StaffDiscount) => {
    return new Promise((resolve, reject) => {
        const url = `updateDiscount?StudentDiscount=${StudentDiscount}&StaffDiscount=${StaffDiscount}`
        const method = "PUT"
        BaseAPIGET(url, method).then(res => {
            if (res.status === 200) resolve(res)
            else reject(res)
        }).catch(err => {
            reject(err)
        })
    })
}