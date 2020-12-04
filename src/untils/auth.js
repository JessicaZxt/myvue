import Cookie from 'js-cookie'

const key = 'Authorization'

export function setToken (token) {
    return Cookie.set(key, token)
}

export function getToken () {
    return Cookie.get(key)
}

export function removeToken () {
    return Cookie.remove(key)
}