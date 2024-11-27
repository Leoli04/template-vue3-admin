import {roles,users} from '../data'

export default {
    // 列表数据
    listPage:{
        url: 'sys/user/listPage',
        method: 'get',
        response: (opts) => {
            const { pageNum, pageSize,name } = opts.data;
            let set = users.map(v=>{
                const o = {...v};
                if(v.id <= 4){
                    o.password = o.name
                    o.roleName = roles.find(item=>item.name=== o.roleId).lable
                    o.ip = '@ip';
                    o.visitTime = '@date @time';
                }
                return o;
            })
            if(name){
                set = set.filter(v=>v.name === name)
            }
            const totalSize = set.length;
            const totalPage = Math.ceil(totalSize / pageSize);
            let lastIndex = pageNum * pageSize;
            if(lastIndex > totalSize){
                lastIndex = totalSize;
            }
            let resData = [];
            if(pageNum >= 1 && pageNum <= totalPage){
                resData = set.slice((pageNum-1) * pageSize, lastIndex);
            }
            return {
                code: 200,
                msg: 'success',
                data: {
                    pageNum,
                    pageSize,
                    totalSize,
                    content: resData,
                }
            }
        }
    },
    // 保存
    save: {
        url: 'sys/user/save',
        type: 'post',
        response: (opts) => {
            return {
                code: 200,
                msg: 'success',
                data: {
                    name: opts.data.name,
                    password: '@word(8,16)'
                }
            }
        }
    },
    // 修改、删除
    operations:{
        url: "sys/user/(update|delete)",
        method: "post",
        response: {
            code: 200,
        }
    },
    // 设置密码
    setPsw:{
        url: "sys/user/password",
        method: "post",
        response: (opts) => {
            return {
              code: 200,
              data: {
                name: opts.data.name,
                password: '@word(8,16)'
              }
            }
          }
    },
}