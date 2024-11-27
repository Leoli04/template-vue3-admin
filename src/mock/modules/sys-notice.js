export default {
    listPage:{
        url: 'sys/notice/listPage',
        method: 'get',
        response: (opts) => {
            const { pageNum, pageSize } = opts.data;
            const totalSize = 4;
            const content = pageNum * pageSize < totalSize ? `content|${pageSize}` : `content|${totalSize % pageSize}`
            return {
                code: 200,
                msg: 'success',
                data: {
                    pageNum,
                    pageSize,
                    totalSize,
                    [content]: [
                        {
                            id: "@increment",
                            'createdBy|1': ['admin1','admin2'],
                            title: "@ctitle(5,10)",
                            content: "@cparagraph(1,2)",
                            createdTime: "@date @time",
                            "publishTime|1": ["","@date @time"],
                        }
                    ]

                }
            }
        }
    },
    // 模拟新增|编辑
    operations:{
        url: 'sys/notice/(save|update|delete)',
        method: 'post',
        response: (opts) => {
            return {
                code: 200,
                msg: 'success',
                data: null
            }
        }
    },
    
}
