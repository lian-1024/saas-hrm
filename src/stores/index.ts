import { createPinia } from 'pinia'
import type { App } from 'vue'
import { registerPiniaPersistPlugin } from './plugins/persist'

const pinia = createPinia()

registerPiniaPersistPlugin(pinia)

export const setupStore = (app: App<Element>) => {
  app.use(pinia)
}

export { pinia }
