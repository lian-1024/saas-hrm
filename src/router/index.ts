import { constantRoutes } from '@/config/router.config'
import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

// setupGlobalRouteGuard(router)
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.token
  console.log("user store token:", token);
  next()
})


export default router
