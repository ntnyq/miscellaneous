import { post } from './index'

/**
 * @name 登录
 * @param {Object} params
 */
export function apiLogin(params) {
  return post('login', params)
}

/**
 * @name 退出
 * @param {Object} params
 */
export function apiLogout(params) {
  return post('logout', params)
}

/**
 * @name 注册
 * @param {Object} params
 */
export function apiRegist(params) {
  return post('regist', params)
}
