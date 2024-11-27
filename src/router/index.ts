import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout/index.vue';
// import PageFrame from "@/layout/index.vue";
import store from "@/store";
import { menuTree } from "@/apis/personal";

// 定义路由，让路由映射到对应的组件中(路由的名字不要设置为一样)
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
      },
      {
        path: "404",
        name: "NotFound",
        component: () => import("@/views/404.vue"),
      },
      {
        path: "personal",
        name: "Personal",
        component: () => import("@/views/personal/index.vue"),
        meta: { 
          requireAuth: true
         },
         redirect: "/personal/profile",
         children: [
          {
            path: "profile",
            name: "PersonalProfile",
            meta: { 
              requireAuth: true
             },
            component: () => import("@/views/personal/Profile.vue"),
          },
          {
            path: "changepsw",
            name: "PersonalChangePsw",
            meta: {
              requireAuth: true,
            },
            component: () => import("@/views/personal/ChangePsw.vue"),
          },
          {
            path: "message",
            name: "PersonalMessage",
            meta: { 
              requireAuth: true
             },
            component: () => import("@/views/personal/message/index.vue"),
          },
        ],
      },
      // {
      //   path: "app",
      //   name: "App",
      //   component: () => import("@/views/app/User.vue"),
      //   meta: { 
      //     requireAuth: true
      //    },
      // },
    ],
  },
  /**
   * 因为若该路由定义存在，则在动态路由未添加完成之前，访问的系统内页路由将找不到匹配路由，
   * 会直接匹配该路由定义而跳转404页面，无法达到正确跳转，所以将其抽出来，待权限路由添加完成后，
   * 再手动添加404路由。
   */
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "404",
  //   redirect: "/404",
  //   component: () => import("@/views/404.vue"),
  // },
];

const route404 = {
  path: "/:pathMatch(.*)*",
  name: "404",
  redirect: "/404",
};

// 创建路由实例，把定义的路由挂载到路由实例中
const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

// 前置导航守卫
router.beforeEach(async (to) => {
  const isLogin = store.getters["user/isLogin"]

  if(to.path === '/login'){
    if(isLogin){
      return {name:"Home"}
    }
    return true
  }

  if(to.meta.requireAuth){
    if(!isLogin){
      return {name:"Login"}
    }

  }

  await addDynamic();
   if(!to.name && hasRoute(to)){
      return {...to}
   }

   if(to.path === '/' && store.state.firstRoute){
      return store.state.firstRoute;
   }

   return true;

  // const token = localStorage.getItem("pm_token");
  // // 跳转到需要登陆的页面，但是没有登陆，调到登陆页面
  // if(to.meta.requireAuth && !token){
  //   return {name: "Login"}
  // }
  // return true;
});


function hasRoute(to){
  const item = router.getRoutes().find(item=>item.path === to.path);
  return !!item;
}


function addDynamic(){
  if(store.state.routeLoaded){
    return;
  }
  return menuTree().then(res=>{
    // 添加动态路由
    if(res.data && res.data.length){
      addDynamicRoutes(res.data);
    }
    router.addRoute(route404)
    store.commit("setRouteLoaded", true)
    store.commit("setMenuTree", res.data)
  })
}

const modules = import.meta.glob("../views/**/*.vue")

function addDynamicRoutes(data,parent){
  data.forEach((item,i) => {
    const route = {
      path: item.path,
      name: item.name,
      meta: {
        title: item.title,
        icon: item.icon
      },
      children: [],
    }

    if(parent){
      if(item.parentId !==0){
        const compParr = item.path.replace("/","").split("/");
        const l = compParr.length - 1;
        const compPath = compParr.map((v,i)=> {
          return i === l ? v.replace(/\w/,(L)=> L.toUpperCase()) + ".vue" : v;
        }).join("/");
        route.path = compParr[1];
        // 设置动态组件
        route.component = modules[`../views/${compPath}`]
        parent.children.push(route);
      }
    }else{
      if(item.children && item.children.length) {
        route.redirect = item.children[0].path;
        addDynamicRoutes(item.children, route)
      }
      // route.component = Layout;
      if(i === 0){
        store.commit('setFirstRoute', route)
      }
      router.addRoute("Home", route);
    }
    
  });

}

//// 导出路由实例
export default router;