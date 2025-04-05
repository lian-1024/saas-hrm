import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { SUPPORT_LOCALES_TEXT } from './constants'
import { SUPPORT_LOCALES, type LocaleType } from './types'

let i18n: Awaited<ReturnType<typeof initI18n>>

const loadLocale = async (locale: string) => {
  const res = await fetch(`locales/${locale}.json`)
  return res.json()
}
// 获取浏览器语言

const initI18n = async () => {
  const en = await loadLocale('en')
  const zhCN = await loadLocale('zh-CN')

  const language = (navigator.language || 'zh-CN').toLocaleLowerCase()


  const messages = {
    'zh-CN': zhCN,
    en
  }

  return createI18n({
    legacy: false,
    locale: language,
    fallbackLocale: 'en',
    messages,
  })
}


export const setupI18n = async (app: App) => {
  const i18nInstance = await initI18n()
  i18n = i18nInstance
  app.use(i18nInstance)
}

export { i18n, SUPPORT_LOCALES, SUPPORT_LOCALES_TEXT }

export type { LocaleType }
