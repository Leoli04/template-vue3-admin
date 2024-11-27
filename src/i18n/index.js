import { createI18n } from "vue-i18n";
import zhCn from "./language/zh-cn";
import en from "./language/en";
// 引入element-plus语言包
import zhCnElement from 'element-plus/es/locale/lang/zh-cn'
import enElement from 'element-plus/es/locale/lang/en'

const i18n = createI18n({
  legacy: false,    // 使用Composition API模式，必须设置为false
  locale: "zh-cn", //设置默认语言
  fallbackLocale: "zh-cn",  //设置首选语言缺少翻译时要使用的语言
  messages: {           //语言包
    "zh-cn": zhCn,
    'en': en,
  },
});

export const elementLocales ={
    en: enElement,
    'zh-cn': zhCnElement
}

export default i18n;