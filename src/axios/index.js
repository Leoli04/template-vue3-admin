import axios from "axios";
import config from "./config";
import router from "@/router";
import { ElMessage } from "element-plus";
import i18n from "@/i18n";

const { t } = i18n.global;

// 统一api 请求

export default function request(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      timeout: config.timeout,
      headers: config.headers,
    //   method: config.method,
      withCredentials: config.withCredentials,
    });

    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        let token = localStorage.getItem('pm_token');
        //设置请求头，带上token，如果没有token，则需要跳回登录页面
        if(token){
            config.headers.token = token;
        }else{
            router.push('/login')
        }
        return config;
      },
      (error) => {
        console.log('请求失败', error);
        // 若请求超时，则提示请求超时。
        if(error.code === 'ECONNABORTED'
            && error.message.indexOf('timeout') !== -1
        ){
            ElMessage({message:'请求超时',type:'error',showClose:true})
        }
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        if(err && err.response){
            switch(err.response.status){
                case 400:
                    err.message = '请求错误';
                    break;
                case 401:
                    err.message = '未授权，请登录';
                    break;
                case 403:
                    err.message = '拒绝访问';
                    break;
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`;
                    break;
                case 408:
                    err.message = '请求超时';
                    break;
                case 500:
                    err.message = '服务器内部错误';
                    break;
                case 501:
                    err.message = '服务未实现';
                    break;
                case 502:
                    err.message = '网关错误';
                    break;
                case 503:
                    err.message = '服务不可用';
                    break;
                case 504:
                    err.message = '网关超时';
                    break;
                case 505:
                    err.message = 'HTTP版本不受支持';
                    break;
            }
        }
        console.error(err)
        if(err.message){
            ElMessage({message: err.message,type:'error',showClose:true})
        }
        return Promise.reject(err)
      }
    )

    // 处理正确返回了结果的数据

    /*
        正确返回结果时，统一返回格式为JSON，包含3个属性：code、msg和data。
        code表示成功标识，为200时表示成功，成功时通常会带回数据data，如果不是200，则为失败，
        其中-1表示正常的失败行为，-2表示登录失效，需要跳回登录页面，失败时通常会返回错误原因msg
    */
    instance(options)
    /* 
        response 统一格式：
        {
            code: 200,
            msg: '消息[string]',
            data: '返回数据[any]'
        }
        code: 200表示正常，-1表示异常，-2表示登录失效，需要跳回登录页面
    */
      .then((res) => {
        let response = res.data
        if(response.code === 200){
           resolve(response) 
        }else{
            if(response.code === -2){
                router.push('/login')
            }
            ElMessage({message:response.msg || '操作失败',type:'error',showClose:true})
            reject(response)
        }
      })
      .catch((err) => {
        reject(err)
      });
  })
}