import { constantRoutes } from '@/config/router.config'
import { createRouter, createWebHistory } from 'vue-router'
import { setupGlobalRouteGuard } from './guard'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

setupGlobalRouteGuard(router)

export default router
