import axios from 'axios'
import router from '../router'
import { MessageBox, Message } from 'element-ui'

let loginUrl = '/login'
// 根据环境切换接口地址
axios.defaults.baseURL = process.env.VUE_APP_API
axios.defaults.headers = { 'X-Requested-With': 'XMLHttpRequest' }
axios.defaults.timeout = 60000

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (router.history.current.path !== loginUrl) {
      let token = window.sessionStorage.getItem('token')
      if (token == null) {
        router.replace({ path: loginUrl, query: { redirect: router.currentRoute.fullPath } })
        return false
      } else {
        config.headers['Authorization'] = 'JWT ' + token
      }
    }
    return config
  }, error => {
    Message.warning(error)
    return Promise.reject(error)
  })
// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    if (error.response !== undefined) {
      switch (error.response.status) {
        case 400:
          MessageBox.alert(error.response.data)
          break
        case 401:
          if (window.sessionStorage.getItem('out') === null) {
            window.sessionStorage.setItem('out', 1)
            MessageBox.confirm('会话已失效! 请重新登录', '提示', { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }).then(() => {
              router.replace({ path: loginUrl, query: { redirect: router.currentRoute.fullPath } })
            }).catch(action => {
              window.sessionStorage.clear()
              window.localStorage.clear()
            })
          }
          break
        case 402:
          MessageBox.confirm('登陆超时 ！', '提示', { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }).then(() => {
            router.replace({ path: loginUrl, query: { redirect: router.currentRoute.fullPath } })
          })
          break
        case 403:
          MessageBox.alert('没有权限！')
          break
        // ...忽略
        default:
          MessageBox.alert(`连接错误${error.response.status}`)
      }
      return Promise.resolve(error.response)
    }
    return Promise.resolve(error)
  })

export default {
  get(url, param) {
    if (param !== undefined) {
      Object.assign(param, { _t: (new Date()).getTime() })
    } else {
      param = { _t: (new Date()).getTime() }
    }
    return axios({ method: 'get', url, params: param })
  },
  // 不常更新的数据用这个
  getData(url, param) {
    return axios({ method: 'get', url, params: param })
  },
  post(url, param, config) {
    return axios.post(url, param, config)
  },
  put: axios.put,
  _delete: axios.delete
}