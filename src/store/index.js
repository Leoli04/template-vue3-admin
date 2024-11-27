import { createStore } from "vuex";
import user from './modules/user'


export default createStore({
  state: {
    routeLoaded: false, // 菜单和路由是否加载完毕
    firstRoute: null,   // 第一个路由,用于进入主页时的redirect
    menuTree: null,     // 菜单树
  },
  mutations: {
    // 改变路由加载状态
    setRouteLoaded(state, loaded) {
      state.routeLoaded = loaded
    },
    setFirstRoute(state, route) {
      state.firstRoute = route
    },
    setMenuTree(state, data) {
      state.menuTree = data
    }
  },
  actions: {

  },
  getters: {

  },
  // 引入其他模块
  modules: {
    user

  }
})

