import request from "@/axios"

/**
 * 使用 export function userInfo(data) 导出函数，这样可以在其他文件中使用 { userInfo } 的方式导入。
  如果使用 export default 导出，则需要在导入时使用默认导入方式，例如 import userInfo from '@/apis/personal'
 */
// export default userInfo = (data)=>{
//     return request({
//         url:'personal/userInfo',
//         method:'get',
//         params:data,        //GET 请求使用 params
//     })  
// }

// 使用 function 声明函数并导出
export function userInfo(data) {
    return request({
      url: 'personal/userInfo',
      method: 'get',
      params: data // GET 请求使用 params 而不是 data
    });
}


export const menuTree = (data) => {
  return request({
    url:'personal/menuTree',
    method:'get',
    params:data
  })
}

// 修改个人信息
export function changeProfile(data){
  return request({
    url:'personal/changeProfile',
    method:'post',
    data
  })
}

// 修改密码
export const changePsw = (data) => {
  return request({
    url: "/personal/changepsw",
    method: "post",
    data,
  });
};