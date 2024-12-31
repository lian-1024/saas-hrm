import { setupStore } from '@/stores';
import TlbsMap from 'tlbs-map-vue';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// style
import '@/design/index.less';
import 'ant-design-vue/dist/reset.css';

import './utils/dayjs';

const bootstrap = () => {
  const app = createApp(App)
  // 注册 pinia
  setupStore(app)
  // 使用 router
  app.use(router)
  app.use(TlbsMap)
  // 挂载
  app.mount('#app')
}


bootstrap()
