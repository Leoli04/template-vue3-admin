import Mock from 'mockjs'
import config from '@/axios/config'
// import { login } from './modules/login'
import loginModule from './modules/login'
import personalModule from './modules/personal'

// 获取所有模块 
// 这种写法提示Uncaught ReferenceError: require is not defined
// const moduleFiles = require.context('./modules', false, /\.js$/)
// const modules = {}
// moduleFiles.keys().forEach(fileName => {
//   let name = fileName.replace('./', '')
//   name = name.substring(0, name.length-3).replace(/-(\w)/g,(L)=>L.toUpperCase()).replace(/-/g,'')
//   modules[name] = moduleFiles(fileName)
// })

// const context = import.meta.glob('./modules/*.js', { eager: true });
// // 将模块对象转换为数组
// const modules = Object.entries(context).reduce((acc, [key, value]) => {
//   // 提取模块名称
//   const moduleName = key.match(/\.\/modules\/(.*).js$/)[1];
//   acc[moduleName] = value.default; // 假设每个模块导出一个默认对象
//   return acc;
// }, {});

const context = import.meta.glob('./modules/*.js', { eager: true });
const modules = Object.entries(context).reduce((acc, [key, value]) => {
  // 提取模块名称
  const moduleName = key.match(/\.\/modules\/(.*).js$/)[1];
  acc.push(value.default); // 假设每个模块导出一个默认对象
  return acc;
}, []);


const { baseUrl, timeout } = config
Mock.setup({
  timeout
})

/**
 * 1.开启/关闭所有模块拦截，通过openMock开关设置
 * 2.开启/关闭单个模块拦截，通过调用mock方法isopen 参数设置
 * 3.开启/关闭模块中某个请求拦截,通过函数返回对象中的 isOpen 属性设置
 */

const openMock = true



// 模拟所有模块
function mockAll(modules,isOpen = true){
  modules.forEach(module => {
        mock(module,isOpen)
    })
}

// 模拟单个模块
// function mock(moudle,isOpen = true){
//     if(isOpen){
//         // 遍历模块内的所有接口处理函数
//         for (var key in moudle){
//             ((res) => {
//                 if(res.isOpen !== false){
//                     let url = baseUrl
//                     if(!url.endsWith("/")){
//                         url = url + "/"
//                     }
//                     url = url + res.url
    
//                     Mock.mock(new RegExp(url),res.method,(opts)=>{
//                         opts.data = opts.body ? JSON.parse(opts.body) : null
//                         const resData = Mock.mock(typeof res.response === "function" ? res.response(opts) : res.response)
//                         console.log('%cmock 拦截，请求：','color:blue',opts)
//                         console.log('%cmock 拦截，响应：','color:blue',resData)
//                         return resData
//                     })
//                 }
//             })(moudle[key]() || {})
//         }
//     }
// }

function mock(module,isOpen =true){
    if (isOpen) {
        Object.keys(module).forEach(key => {
          const res = module[key];
          if (res.isOpen !== false) {
            const url = `${baseUrl}/${res.url}`;
            Mock.mock(new RegExp(url), res.method, (opts) => {
              opts.data = opts.body ? JSON.parse(opts.body) : null;
              const resData = Mock.mock(typeof res.response === 'function' ? res.response(opts) : res.response);
              console.log('%cmock 拦截，请求：', 'color:blue', opts);
              console.log('%cmock 拦截，响应：', 'color:blue', resData);
              return resData;
            });
          }
        });
      }
}


// mockAll([loginModule,personalModule],openMock)
mockAll(modules,openMock);