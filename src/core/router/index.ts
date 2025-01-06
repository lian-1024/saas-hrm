import { constantRoutes } from "@/core/router/router.config";
import { createRouter, createWebHistory } from "vue-router";
import { registerGlobalRouteGuard } from "./guard";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

registerGlobalRouteGuard(router)

export default router