import { setupStore } from '@/stores';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// style
import "@/styles/base.css";
import 'ant-design-vue/dist/reset.css';

const bootstrap = () => {
  const app = createApp(App)
  // 注册 pinia
  setupStore(app)
  // 使用 router 
  app.use(router)
  // 挂载
  app.mount('#app')
}


bootstrap()
