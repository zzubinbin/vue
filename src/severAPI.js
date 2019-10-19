import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

axios.defaults.withCredentials = true

// 测试和正式切换
const isMock = true
// 测试easy-mock基地址
const MOCK = 'http://120.27.243.49:7300/mock/5da961ee8c14ee0f50d37e78/shopData'

// 正式环境地址
const REAL = 'https://www.easy-mock.com/mock/5cd52a04c385bc03ca2648f1'

const BASEURL = isMock ? MOCK : REAL

// 返回成功编码为200
const ERR_OK_200 = 200

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    mask: false,
    message: '加载中...',
    duration: 0
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Toast.loading().clear()
  return response
}, function (error) {
  // 对响应错误做点什么
  Toast.loading().clear()
  return Promise.reject(error)
})

// 加载中

// 检查状态码
function checkStatus (res) {
  if (res.status === ERR_OK_200) {
    return res.data
  } else {
    Toast.fail({
      message: '网络错误',
      duration: 1500
    })
  }
}

// 检查返回code
function checkReload (res) {
  if (res.returnCode === '0') {
    return res
  } else {
    Toast.fail({
      message: '获取数据失败',
      duration: 1500
    })
  }
}

// 封装axios方法
export const Http = (url, type, data) => {
  if (!url || !type) return
  return axios({
    method: type,
    url: BASEURL + url,
    data: qs.stringify(data),
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(checkStatus)
}

export const sellerUrl = {
  get (url, params) {
    if (!url) return
    return axios({
      method: 'get',
      url: BASEURL + url,
      params,
      timeout: 5000
    }).then(checkStatus).then(checkReload).catch(checkReload)
  }
}

export const goodsUrl = {
  get (url, params) {
    if (!url) return
    return axios({
      method: 'get',
      url: BASEURL + url,
      params,
      timeout: 5000
    }).then(checkStatus).then(checkReload).catch(checkReload)
  }
}

export const movieUrl = {
  post (url, data) {
    if (!url) return
    return axios({
      method: 'post',
      url: BASEURL + url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkReload)
  }
}
