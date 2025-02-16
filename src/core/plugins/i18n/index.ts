import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { SUPPORT_LOCALES_TEXT } from './constants'

const loadLocale = async (locale: string) => {
  const res = await fetch(`locales/${locale}.json`)
  return res.json()
}

const en = await loadLocale('en')
const zhCN = await loadLocale('zh-CN')

import { SUPPORT_LOCALES, type LocaleType } from './types'
// 获取浏览器语言
const language = (navigator.language || 'zh-CN').toLocaleLowerCase()

const messages = {
  'zh-CN': zhCN,
  en
}

const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: 'en',
  messages,
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}

export { i18n, SUPPORT_LOCALES, SUPPORT_LOCALES_TEXT }

export type { LocaleType }
