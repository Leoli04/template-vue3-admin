import { users, menuTreeData } from "../data";

// export function userInfo(){
//   return {
//     url: "personal/menuTree",
//     method: "get",
//     response: (opts) => {
//       const token = localStorage.getItem("pm_token");
//       if(!token){
//         return {
//             code: 200,
//             msg: ''
//         }
//       }

//       const name = token.split('@')[1];
//       const info = users.find((v)=> v.name === name);
//       const role = info.roleId;

//       let treeData = [menuTreeData[2]];

//       switch(role){
//         case 'admin':
//           treeData = menuTreeData;
//           break;
//         case 'master':
//           treeData = [menuTreeData[0], menuTreeData[2]];
//           break;

//         case 'visitor':
//           treeData = [menuTreeData[2]];
//           break;
//         default:
//           break;
//       }

//       return {
//         code: 200,
//         msg: 'success',
//         data: treeData
//       }
//     }
//   }
// }

// export function menuTree(){
//   return {
//     url: "personal/menuTree",
//     method: "get",
//     response: (opts) => {
//       const token = localStorage.getItem("pm_token");
//       if(!token){
//         return {
//             code: 200,
//             msg: ''
//         }
//       }

//       const name = token.split('@')[1];
//       constinfo = users.find((v)=> v.name === name);
//     }
//   }
// }



export default {
  userInfo:{
    url: "personal/userInfo",
    method: "get",
    response: (opts) => {
      const token = localStorage.getItem("pm_token")
      if(token){
        const uinfo = {...users.find(v=>v.name === token.split("@")[1])}
        delete uinfo.password
        return {
            code: 200,
            msg: "success",
            data: {
                ...uinfo,
                'unReadCount|0-10':0
            }
        }
      }else{
        return {
            code: -2,
            msg: "请先登录"
        }
      }
    }
  },

  menuTree: {
    url: "personal/menuTree",
    method: "get",
    response: (opts) => {
      const token = localStorage.getItem("pm_token");
      if(!token){
        return {
            code: 200,
            msg: ''
        }
      }

      const name = token.split('@')[1];
      const info = users.find((v)=> v.name === name);
      const role = info.roleId;

      let treeData = [menuTreeData[2]];

      switch(role){
        case 'admin':
          treeData = menuTreeData;
          break;
        case 'master':
          treeData = [menuTreeData[0], menuTreeData[2]];
          break;

        case 'visitor':
          treeData = [menuTreeData[2]];
          break;
        default:
          break;
      }

      return {
        code: 200,
        msg: 'success',
        data: treeData
      }
    }
  },
  // 模拟修改个人信息
  changeProfile:{
    url: "personal/changeProfile",
    type: "post",
    response: {
      code: 200,
      msg: null,
    },
  },
  // 模拟修改密码
  changePsw:{
    url: "personal/changepsw",
    type: "post",
    response: {
      code: 200,
      msg: null,
    },
  }
}