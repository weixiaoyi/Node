
import axios from 'axios'
import pathToRegexp from 'path-to-regexp'
import { stringify } from 'qs'

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})


axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})


function request(url = '', options = {}) {
  const { method = 'get', formData = false, params, query, body, ...rest } = options
  if (params) {
    const toPath = pathToRegexp.compile(url)
    url = toPath(params)
  }
  const transform = formData ? {
    transformRequest: [(data, headers) => {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
      data = stringify(data)
      return data
    }]
  } : {}
  return axios({
    ...{
      headers: {},
      method,
      params: query,
      data: body,
      url,
      baseURL: '',
    },
    ...rest,
    ...transform
  })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(url + '请求出错')
    })
}

export default request
