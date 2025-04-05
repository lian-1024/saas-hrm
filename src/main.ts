import { setupI18n } from '@core/plugins/i18n'
import { setupRouter } from '@core/router'
import { setupStore, useLocaleStore } from '@core/stores'
import TlbsMap from 'tlbs-map-vue'
import { createApp } from 'vue'
import App from './App.vue'
// style
import '@core/plugins/dayjs'
import '@shared/styles/index.less'
import 'ant-design-vue/dist/reset.css'
import 'nprogress/nprogress.css'
import setupDirectives from '@core/plugins/directives'
const bootstrap = async () => {
  const app = createApp(App)
  // 注册 directives
  // 注册 pinia
  await setupStore(app)
  // 注册 i18n
  await setupI18n(app)
  const localStore = useLocaleStore()
  localStore.initLocale()

  // 使用 router
  await setupRouter(app)
  await setupDirectives(app)
  app.use(TlbsMap)
  // 挂载
  app.mount('#app')
}

bootstrap()
