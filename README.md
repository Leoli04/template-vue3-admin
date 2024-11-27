# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


## vue3管理后台项目


## 项目步骤

### 创建项目并运行

```
# 创建项目
pnpm create vite template-vue3-admin -- --template vue

# 运行
pnpm run dev

```

> 如果运行出现 ` 运行pnpm run dev提示'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件` 提示
> 检查vite是否正常安装：`pnpm list vite`,重新安装    `pnpm add vite`

### 添加项目所需依赖

```
# 安装项目路由
pnpm add vue-router@next

# 安装项目状态管理
pnpm add vuex@next

# 安装element-plus
pnpm add element-plus

# 安装开发 自动引入插件:自动导入和注册 Element Plus 组件和相关功能
pnpm add -D unplugin-auto-import unplugin-vue-components

指定引入插件还需要在vite.config.ts中配置
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
  ],
})

#  安装element图标集 ：@element-plus/icons-vue

pnpm add @element-plus/icons-vue

# 安装CSS预处理器Sass
pnpm add -D sass

# 浏览器原生样式重置Normalize.css
pnpm add --save normalize.css

# 安装国际化多语言vue-i18n
pnpm add vue-i18n

# 安装axios
pnpm add axios

# 安装mock.js
pnpm add  mockjs

```

> import { resolve } from 'path'提示： 找不到模块“path”或其相应的类型声明
> 报错原因是 TypeScript 无法找到 path 模块的类型声明文件。path 是 Node.js 的内置模块，但在某些环境中，TypeScript 无法自动识别这些模块
> 解决办法：`pnpm add -D @types/node` // -D 或 --save-dev：将包安装为开发依赖
> 安装完成后，vite.config.ts 文件无需修改，因为 @types/node 会自动为 path 模块提供类型声明。

> pnpm安装新的依赖 时 pnpm add axios 与pnpm i axios区别
> 都是安装新的依赖包，pnpm add会更新package.json 文件，pnpm i 不会。


系统主要功能模块分为三大类：应用管理(app)、系统管理(sys)和审计管理(logs)。其中应用管理模块包含用户管理(User)、机构管理(Dept)、角色管理(Role)和资源管理(Resource)4个子功能模块；系统管理包含用户管理(User)、公告管理(Notice)两个子功能模块；审计日志包含操作日志(Operation)和访问日志(Visit)两个子功能模块

 * 使用 export function userInfo(data) 导出函数，这样可以在其他文件中使用 { userInfo } 的方式导入。
  如果使用 export default 导出，则需要在导入时使用默认导入方式，例如 import userInfo from '@/apis/personal'
