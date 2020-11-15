import request from '@/untils/request'

export function loginSubmit(obj) {
    return request({
        url: '/api/login',
        method: 'post',
        data: obj
    })
}