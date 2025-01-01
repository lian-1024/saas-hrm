import { createPinia } from 'pinia'
import type { App } from 'vue'
import { registerPiniaPersistPlugin } from './plugins/persist'

const pinia = createPinia()


export const setupStore = (app: App<Element>) => {
  registerPiniaPersistPlugin(pinia)
  app.use(pinia)
}



export { useUserStore } from './modules/user'
export { pinia }

