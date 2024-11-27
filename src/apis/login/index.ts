import request from "@/axios"

// 登陆接口
export const login = (data: any) => {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}

// 退出登陆
export const logout = () => {
  return request({
    url: 'logout',
    method: 'post'
  })
}