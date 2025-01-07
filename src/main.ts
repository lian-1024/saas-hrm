import { setupStore } from '@/core/stores';
import TlbsMap from 'tlbs-map-vue';
import { createApp } from 'vue';

import router from '@/core/router/index';
import App from './App.vue';

// style
import '@/core/plugins/dayjs';
import '@/shared/styles/index.less';
import 'ant-design-vue/dist/reset.css';
import 'nprogress/nprogress.css';

const bootstrap = async () => {
  const app = createApp(App)
  // 注册 pinia
  await setupStore(app)
  // 使用 router
  app.use(router)
  app.use(TlbsMap)
  // 挂载
  app.mount('#app')
}


bootstrap()
