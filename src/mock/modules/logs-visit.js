

export default {
    // 管理访问日志相关接口的模拟函数
    listPage:{
        url: 'logs/visit/listPage',
        method: 'get',
        response: (opts) => {
            const { pageNum, pageSize } = opts.data;
            const totalSize = 105;
            const key = pageNum * pageSize < totalSize ? `content|${pageSize}` : `content|${totalSize % pageSize}`
            return {
                code: 200,
                msg: 'success',
                data: {
                    pageNum,
                    pageSize,
                    totalSize,
                    [key]: [
                        {
                            id: "@increment",
                            createTime: "@date @time",
                            "username|1":["admin","master","visitor","@word"],
                            "status|1": ["登陆","退出"],
                            ip:"@ip",
                            duration: "@integer(0，1000)",
                        }
                    ]

                }
            }
        }
    }
}


