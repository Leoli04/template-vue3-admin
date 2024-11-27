<template>
  <el-config-provider :local="elementLocales[locale]">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { elementLocales } from '@/i18n';

const { locale } = useI18n();

locale.value = localStorage.getItem('locale') || 'zh-cn'
</script>

<style scoped>
html, body {
  height: 100%;
}

#app {
  height: 100%;
  overflow: hidden;
}

/* 公共样式 */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cursor {
  /* 鼠标悬停在某个元素上时，鼠标指针的形状会变成一个手型 */
  cursor: pointer;
}

.txt-c {
  text-align: center;
}
.w100p {
  width: 100%;
}
</style>
