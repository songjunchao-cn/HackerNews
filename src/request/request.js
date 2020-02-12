/**
 *
 * http配置
 *
 */

import axios from 'axios'
// import { request } from 'https'
// import store from '@/store/store'
// import { getToken } from '@/util/auth'
// 超时时间
axios.defaults.timeout = 30000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = false
// NProgress.configure({ showSpinner: false })// NProgress Configuration
// HTTP request拦截
axios.interceptors.request.use(config => {
  if (config.url.startsWith('http')) return config
  config.url = process.env.VUE_APP_URL + config.url
  // NProgress.start() // start progress bar
  return config
}, error => {
  return Promise.reject(error)
})
// HTTP response拦截
axios.interceptors.response.use(data => {
  return data
}, error => {
  if (error.code === 'ECONNABORTED' || error.message === 'Network Error') {
    console.log('网络开小差，请刷新试试~')
    return Promise.resolve(error)
  } else {
    if (error.response && error.response.status === 401) {
      console.log('身份信息已过期')
    }
  }
  return Promise.resolve(error)
})

export default axios
