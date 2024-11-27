import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/template-vue3-admin/" : "/",
  plugins: [
    vue(),  //用于支持 Vue 3 项目的编译和构建
    AutoImport({
      imports: ['vue','vue-router','vuex','vue-i18n'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]  //解析 Element Plus 的组件
    }),
  ],
  resolve: {
    alias: {
      //绝对路：使用“@”来指代src路径
      // '@': '/src',     
      // 使用相对路径: “@”来指代src路径
      '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src')
    }
  }
})
