import Cookies from 'js-cookie'

const TokenKey = 'online_shop_token'
const Name = 'online_shop_user'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getName() {
  return Cookies.get(Name)
}
export function setName(name) {
  return Cookies.set(Name, name)
}

export function removeName() {
  return Cookies.remove(Name)
}
