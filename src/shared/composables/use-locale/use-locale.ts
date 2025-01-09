import type { LocaleType } from "@/core/plugins/i18n"
import { createLocaleStore } from "@/core/stores/modules/locale"
import { storeToRefs } from "pinia"

export const useLocale = () => {
  const localeStore = createLocaleStore()

  const { currentLocale, antdLocale } = storeToRefs(localeStore)

  const changeLocale = (locale: LocaleType) => {
    localeStore.setLocale(locale)
  }

  return {
    currentLocale,
    antdLocale,
    changeLocale
  }
}