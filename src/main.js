import { createApp, Component} from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
// 引入图标
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import 'normalize.css/normalize.css'
import './mock' // 引入 mock 配置

// 引入通用组件
import CmTable from '@/components/CmTable.vue'

// type IconComponents = { [key: string]: Component };

// const icons: IconComponents = ElIcons as IconComponents;

const app = createApp(App)
// 全局注册图标组件
for (const name in ElIcons) {
  app.component(name, ElIcons[name])
}

app.component(CmTable.name, CmTable);

app.use(router)  // 注册路由
.use(store)     // 注册状态管理
.use(i18n)     // 注册多语言
.mount('#app')
