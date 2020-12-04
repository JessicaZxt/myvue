import axios from 'axios'
import { Message } from 'view-design'
import router from '@/router/index'

const service = axios.create({
    baseURL: 'http://192.168.0.104:8081',
    timeout: 12000
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做点什么
    return Promise.reject(error)
});

// 添加响应拦截器
service.interceptors.response.use(function (res) {
    if (res.status !== 200 && res.data.status !== 200) {
        Message.error(res.data.message)
    } else {
        return res.data;
    }
}, function (error) {
    const res = error.response
    // 对响应错误做点什么
    switch (res && res.status) {
        case 401:
            Message.error('登录超时，请重新登录！')
            router.push({ path: '/login' })
            location.reload()
            break;
        case 404:
            Message.error('接口不存在！')
            break
        default:
            break;
    }
    return Promise.reject(error);
});

export default service