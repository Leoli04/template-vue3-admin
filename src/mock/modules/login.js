import { users} from "../data";
/**
 * 系统登陆模拟
 */
// export function login(){
//     return {
//         url: "login",
//         method: "post",
//         response: (opts) => {
//             const name = opts.data.account;
//             if(users.find((v)=> v.name === name && v.password === opts.data.password)){
//                 return {
//                     code: 200,
//                     msg: "success",
//                     data: {
//                         token: "token_" + name,
//                         name: name,
//                         avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png"
//                     }
//                 }

//             }

//             return {
//                 code: -1,
//                 msg: "账号或密码错误"
//             }

//         }
//     }
// }

// export function logout(){
//     return {
//         url: "logout",
//         method: "post",
//         response: {
//             code: 200,
//             msg: "success",
//             data:{}
//         }
//     }
// }

export default {
    login:{
        url: "login",
        method: "post",
        response: (opts) => {
            const name = opts.data.account;
            if(users.find((v)=> v.name === name && v.password === opts.data.password)){
                return {
                    code: 200,
                    msg: "success",
                    data: {
                        token: "token@" + name,
                        name: name,
                        avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png"
                    }
                }

            }

            return {
                code: -1,
                msg: "账号或密码错误"
            }

        }
    },
    logout: {
        url: "logout",
        method: "post",
        response: {
            code: 200,
            msg: "success",
            data:{}
        }
    }
}