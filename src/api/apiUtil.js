import axios from 'axios'
import { Toast } from 'vux'
import _ from 'lodash';

const generateApiMap = (map) => {
    let facade = {}
    _.forEach(map, function (value, key) {
        facade[key] = toMethod(value)
    })
    return facade
}

const toMethod = (options) => {
    options.method = options.method || 'post'
    return (params = {}, attachedParams, config = {}) => {
        params = _.extend(params, attachedParams)
        return sendApiInstance(options.method, options.url, params, config)
    }
}

// 创建axios实例
const createApiInstance = (config = {}) => {
    const _config = {
        withCredentials: true, // 跨域
        baseURL: 'http://192.168.1.9:8989',
        // headers: {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        //     "Access-Control-Allow-Origin":"*",
        // }
    }
    config = _.merge(_config, config)
    return axios.create(config)
}

const err_check = (code, message, data) => {
    console.log("f返回吗：" + code + "//" + message)
    if (code ==200){
        return true
    }
    return false
}

const sendApiInstance = (method, url, params, config = {}) => {
    if(!url){
        return
    }
    let instance = createApiInstance(config)

    instance.interceptors.response.use(response => {
            let {code, message, data} = response.data
          //  console.log("数据返回正常:" + JSON.stringify(response))
            if (err_check(code, message, data) && data) {
                return Promise.resolve(data)
            } else {
                return Promise.reject(data)
            }
        },
        error => {
            // Toast({
            //     message: error.response || error.message,
            //     duration: 3000
            // })
            console.log("yichang:" + JSON.stringify(error))
            return Promise.reject(error).catch(res => {
                console.log(res)
            })
        }
    )
    if (method === 'get') {
        params = {
            params: params
        }
    }

    return instance[method](url, params, config)
}

export default {
    generateApiMap
}