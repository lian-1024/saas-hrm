import { createPinia, type Pinia } from 'pinia'
import type { App } from 'vue'
import { registerPiniaPersistPlugin } from './plugins/persist'

let pinia: Pinia

export const setupStore = async (app: App<Element>) => {
  pinia = createPinia()
  await registerPiniaPersistPlugin(pinia)
  app.use(pinia)
  return pinia
}



export { useUserStore } from './modules/user'
export { pinia }

