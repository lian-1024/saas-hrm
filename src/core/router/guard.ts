import { useUserStore } from '@/core/stores'
import NProgress from 'nprogress'
import type { Router } from 'vue-router'
// 白名单路由 - 不需要登录就可以访问
const whiteList = ['/sign-in']

export const registerGlobalRouteGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    const userStore = useUserStore()
    const token = userStore.token
    console.log("user store token:", token);

    // 如果有token
    if (token) {
      if (to.path === '/sign-in') {
        // 已登录且要跳转登录页，重定向到首页
        next({ path: '/dashboard' })
      } else {
        // 已登录访问其他页面，放行
        next()
      }
    } else {
      // 未登录 判断当前路径是否包含在白名单中
      if (whiteList.includes(to.path)) {
        // 未登录可以访问白名单页面
        next()
      } else {
        // 未登录且访问非白名单页面，重定向到登录页
        next({ path: '/sign-in', query: { redirect: to.fullPath } })
      }
    }
  })


  router.afterEach(() => {
    NProgress.done()
  })
}
