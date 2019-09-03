/**
 * 操作cookie与username
 */
import Cookie from 'js-cookie'

const TokenKey = 'VLOGIN_TOKEN'
const UsernameKey = 'VLOGIN_USER_NAME'

export function getToken() {
  return Cookie.get(TokenKey)
}

export function setToken(token) {
  return Cookie.set(TokenKey, token)
}

export function removeToken() {
  return Cookie.remove(TokenKey)
}

export function getUsername() {
  return Cookie.get(UsernameKey)
}

export function setUsername(username) {
  return Cookie.set(UsernameKey, username)
}

export function removeUsername(username) {
  return Cookie.remove(username)
}
