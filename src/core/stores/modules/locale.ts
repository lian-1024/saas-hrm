import type { LocaleType } from '@/core/plugins/i18n'
import { i18n, SUPPORT_LOCALES } from '@/core/plugins/i18n'
import { pinia } from '@/core/stores'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'

// antd 语言包
import type { Locale } from 'ant-design-vue/es/locale'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

// 语言包映射:
const LOCALE_MESSAGES: Record<LocaleType, {
  name: string
  antd: Locale
}> = {
  'zh-CN': {
    name: '简体中文',
    antd: zhCN
  },
  'en': {
    name: 'English',
    antd: enUS
  }
} as const

// 默认语言
const DEFAULT_LOCALE: LocaleType = 'zh-CN'
// localStorage key
const LOCALE_STORAGE_KEY = 'locale'

export const createLocaleStore = defineStore('locale', () => {
  // 当前语言
  const currentLocale = ref<LocaleType>(DEFAULT_LOCALE)

  // 获取当前语言的配置
  const localeConfig = computed(() => LOCALE_MESSAGES[currentLocale.value])

  // antd 组件库的语言包
  const antdLocale = computed(() => localeConfig.value.antd)



  // 语言选项列表
  const localeOptions = computed(() =>
    SUPPORT_LOCALES.map(locale => ({
      label: LOCALE_MESSAGES[locale].name,
      value: locale
    }))
  )



  // 切换语言
  const setLocale = (locale: LocaleType) => {
    // 检查是否支持该语言
    if (!SUPPORT_LOCALES.includes(locale)) {
      console.warn(`Locale ${locale} is not supported`)
      return
    }

    currentLocale.value = locale

    // 设置 i18n 语言
    i18n.global.locale.value = locale

    // 保存到 localStorage
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)

    // 设置 HTML lang 属性
    document.documentElement.setAttribute('lang', locale)
  }

  // 初始化语言
  const initLocale = () => {
    // 优先级: localStorage > 浏览器语言 > 默认语言
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as LocaleType

    // 获取浏览器语言
    const browserLocale = navigator.language as LocaleType

    // 获取支持的语言
    const locale = SUPPORT_LOCALES.includes(savedLocale)
      ? savedLocale
      : SUPPORT_LOCALES.includes(browserLocale)
        ? browserLocale
        : DEFAULT_LOCALE

    setLocale(locale)
  }

  return {
    currentLocale,
    antdLocale,
    setLocale,
    initLocale,
    localeOptions
  }
}, {
  persist: {
    key: LOCALE_STORAGE_KEY,
    pick: ['currentLocale']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(createLocaleStore, import.meta.hot))
}

// 解决未初始化问题
export const useLocaleStore = () => {
  return createLocaleStore(pinia)
}