import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { registerGlobalRouteGuard } from "./guard";
import { constantRoutes } from "./router.config";

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = async (app: App) => {
  await registerGlobalRouteGuard(router)
  app.use(router)
}

export default router
