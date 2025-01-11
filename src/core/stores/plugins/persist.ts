import type { Pinia } from 'pinia'

export const registerPiniaPersistPlugin = async (pinia: Pinia) => {
  const { createPersistedState } = await import('pinia-plugin-persistedstate')
  pinia.use(
    createPersistedState({
      // 配置全局存储key
      key: (id) => `__admin__ihrm__${id}`,
      storage: localStorage,
    }),
  )
}
