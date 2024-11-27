// 统一请求配置
export default {
    method: 'post',
    // 基础url前缀
    baseUrl: 'http://localhost:3000',
    // 超时时间
    timeout: 3000,
    // 携带凭证
    withCredentials: true,
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // 返回数据类型
    dataType: 'json',
    // 跨域是否带Token
    token: true

}