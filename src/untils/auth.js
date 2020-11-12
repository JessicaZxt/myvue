import Cookie from 'js-cookie'

const key ='Authorization'

export function setCookie(token){
    return Cookie.set(key,token)
}

export function getCookie(){
    return Cookie.get(key)
}

export function removeCookie(){
    return Cookie.remove(key)
}