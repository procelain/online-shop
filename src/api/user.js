import request from '@/utils/request'

// 登录
export const login = params => {
  return request.post(`/login/`, params)
}

// 注册
export const register = params => {
  return request.post(`/users/`, params)
}

// 短信
export const getMessage = parmas => {
  return request.post(`/code/`, parmas)
}

// 获取用户信息
export const getUserDetail = () => {
  return request.get(`/users/1/`)
}

// 修改用户信息
export const updateUserInfo = params => {
  return request.patch(`/users/1/`, params)
}

export function logout() {
  return request({
    url: '/users/2/',
    method: 'get'
  })
}
