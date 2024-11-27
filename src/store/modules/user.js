import { userInfo } from '@/apis/personal'

const user = {
    namespaced: true,
    state: {
        token: '',//token
        userInfo: {},   // 用户基本信息
    },
    mutations: {
        // 设置token
        setToken(state, token) {
            localStorage.setItem('pm_token', token);
            state.token = token;
        },
        // 清楚token
        clearToken(state) {
            localStorage.removeItem('pm_token');
            state.token = '';
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo || {};
        },
        clearUserInfo(state) {
            state.userInfo = {};
        }
    },
    actions: {
      refreshUserInfo({ commit }) {
        userInfo().then(res => {
          commit('setUserInfo', res.data);
        })
      }
    },
    getters: {
      isLogin(state){
        // token字符串的Boolean转换
        return !!state.token || !!localStorage.getItem("pm_token");
      }
    }
  };
  
  export default user;