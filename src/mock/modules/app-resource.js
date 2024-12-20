/*
 * 资源管理模块
 */
const treeData = [
    {
      id: 37,
      createdBy: "admin",
      lastUpdateBy: "admin",
      createdTime: "@date @time",
      parentId: 0,
      lastUpdateTime: "@date @time",
      name: "monitor",
      displayName: "系统监控",
      url: "",
      type: 0,
      icon: "info",
      orderNum: 4,
      level: 0,
      children: [
        {
          id: 38,
          createdBy: null,
          lastUpdateBy: "admin",
          createdTime: "@date @time",
          parentId: 37,
          lastUpdateTime: "@date @time",
          name: "summary",
          displayName: "统计",
          url: "/monitor/summary",
          type: 1,
          icon: "warning",
          orderNum: 0,
          level: 1,
          children: [],
        },
        {
          id: 39,
          createdBy: null,
          lastUpdateBy: "admin",
          createdTime: "@date @time",
          parentId: 37,
          lastUpdateTime: "@date @time",
          name: "data",
          displayName: "数据监控",
          url: "/monitor/data",
          type: 1,
          icon: "warning",
          orderNum: 0,
          level: 1,
          children: [
            {
              id: 40,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 39,
              lastUpdateTime: "@date @time",
              name: "view",
              displayName: "查看",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
          ],
        },
        {
          id: 41,
          createdBy: "admin",
          lastUpdateBy: "admin",
          createdTime: "@date @time",
          parentId: 37,
          lastUpdateTime: "@date @time",
          name: "service",
          displayName: "服务监控",
          url: "/monitor/service",
          type: 1,
          icon: "view",
          orderNum: 1,
          level: 1,
          children: [
            {
              id: 42,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 41,
              lastUpdateTime: "@date @time",
              name: "view",
              displayName: "查看",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 43,
      createdBy: "admin",
      lastUpdateBy: "admin",
      createdTime: "@date @time",
      parentId: 0,
      lastUpdateTime: "@date @time",
      name: "job",
      displayName: "任务管理",
      url: "",
      type: 0,
      icon: "service",
      orderNum: 2,
      level: 0,
      children: [
        {
          id: 44,
          createdBy: "admin",
          createdTime: "@date @time",
          lastUpdateBy: "admin",
          parentId: 43,
          lastUpdateTime: "@date @time",
          name: "schedule",
          displayName: "定时调度",
          url: "/job/schedule",
          type: 1,
          icon: " view",
          orderNum: 0,
          level: 1,
          children: [
            {
              id: 45,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 44,
              lastUpdateTime: "@date @time",
              name: "view",
              displayName: "查看",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      createdBy: null,
      lastUpdateBy: null,
      createdTime: "@date @time",
      parentId: 0,
      lastUpdateTime: "@date @time",
      name: "metad",
      displayName: "元数据管理",
      url: null,
      type: 0,
      icon: "setting",
      orderNum: 0,
      level: 0,
      children: [
        {
          id: 22,
          createdBy: null,
          lastUpdateBy: null,
          createdTime: "@date @time",
          parentId: 1,
          lastUpdateTime: "@date @time",
          name: "dict",
          displayName: "字典管理",
          url: "/metad/dict",
          type: 1,
          icon: "edit-outline",
          orderNum: 7,
          level: 1,
          children: [
            {
              id: 23,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 22,
              lastUpdateTime: "@date @time",
              name: "view",
              displayName: "查看",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
            {
              id: 24,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 22,
              lastUpdateTime: "@date @time",
              name: "add",
              displayName: "新增",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
            {
              id: 25,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 22,
              lastUpdateTime: "@date @time",
              name: "update",
              displayName: "修改",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
            {
              id: 26,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 22,
              lastUpdateTime: "@date @time",
              name: "remove",
              displayName: "删除",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
          ],
        },
        {
          id: 27,
          createdBy: null,
          lastUpdateBy: null,
          createdTime: "@date @time",
          parentId: 1,
          lastUpdateTime: "@date @time",
          name: "database",
          displayName: "数据库管理",
          url: "/metad/database",
          type: 1,
          icon: "edit-outline",
          orderNum: 7,
          level: 1,
          children: [
            {
              id: 28,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 27,
              lastUpdateTime: "@date @time",
              name: "view",
              displayName: "查看",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
            {
              id: 29,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 27,
              lastUpdateTime: "@date @time",
              name: "add",
              displayName: "新增",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
            {
              id: 30,
              createdBy: null,
              lastUpdateBy: null,
              createdTime: "@date @time",
              parentId: 27,
              lastUpdateTime: "@date @time",
              name: "update",
              displayName: "修改",
              url: null,
              type: 2,
              icon: null,
              orderNum: null,
              level: 2,
              children: [],
            },
          ],
        },
      ],
    },
  ];


  export default {
    // 获取资源树
    listTree:{
      url: 'app/resource/listTree',
      method: 'get',
      response: () => {
          return {
              code: 200,
              msg: 'success',
              data: treeData,
          }
      }
    },
    listTreeParents: {
      url: `app/resource/listParents`,
      method: "get",
      response: () => {
        function filterTree (data) {
          const newTree = data.filter(v => v.type !== 2)
          newTree.forEach(v => v.children && (v.children = filterTree(v.children)))
          return newTree
        }
        return {
          code: 200,
          data: filterTree(JSON.parse(JSON.stringify(treeData)))
        };
      },
    },
    operations:{
      url: "app/resource/(save|update|delete)",
      method: "post",
      response: {
        code: 200,
      },
    }
  }