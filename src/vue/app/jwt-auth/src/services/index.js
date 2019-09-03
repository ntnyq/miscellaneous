import axios from 'axios'
import Qs from 'qs'
import config from '../constants'
import { getToken } from '@/utils/auth'

const { baseUrl, timeout } = config.api

axios.defaults.timeout = timeout

axios.interceptors.request.use(req => {
  if (req.method === 'post') {
    req.data = Qs.stringify(req.data)
  }

  if (getToken()) {
    const token = getToken().replace(/(^\")|(\"$)/g, '')

    req.headers.Authorization = `Bearer ${token}`
  }

  return req
}, Promise.reject)

axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
      alert('请求超时了')
    }

    if (err.response.status === 401) {
      // 没权限需要登录
    }

    return Promise.reject(err)
  }
)

export const get = (path, params = {}, url = baseUrl) => {
  return axios.get(`${url}/${path}`, params)
}

export const post = (path, params = {}, url = baseUrl) => {
  return axios.post(`${url}/${path}`, params)
}
