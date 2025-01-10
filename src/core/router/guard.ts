import { useUserStore } from '@/core/stores'
import NProgress from 'nprogress'
import type { NavigationGuardNext, RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'
import { registerRoutes } from './setup-routes'

// 白名单路由 - 不需要登录就可以访问
const whiteList = ['/sign-in']

/**
 * 注册全局路由守卫
 * @param router 路由实例
 */
export const registerGlobalRouteGuard = (router: Router) => {
  // 每次刷新页面以及跳转路由时,都会重新触发这个函数,导致动态路由失效
  // 所以需要使用一个标识来判断是否已经添加了动态路由,每次重新运行这个函数时都是false
  // 如果已经添加了动态路由,则不需要再次添加
  let isAddRoutes = false

  // 注册全局前置守卫
  router.beforeEach(async (to, from, next) => {
    // 开启进度条
    NProgress.start()
    // 获取用户状态
    const userStore = useUserStore()

    // 如果没有token,处理未认证情况
    if (!userStore.token) {
      handleUnauthenticated(to, next)
      return
    }

    // 如果已登录且要跳转登录页,重定向到首页
    if (to.path === '/sign-in') {
      next({ path: '/dashboard' })
      return
    }

    // 如果未添加动态路由,进行路由注册
    if (!isAddRoutes) {
      await handleRouteRegistration(userStore, next, to)
      isAddRoutes = true
      return
    }

    next()
  })

  // 注册全局后置守卫
  router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
  })
}

/**
 * 处理未认证的情况
 * @param to 目标路由
 * @param next 路由跳转函数
 */
const handleUnauthenticated = (to: RouteLocationNormalizedLoadedGeneric, next: NavigationGuardNext) => {
  // 如果是白名单路由,直接放行
  if (whiteList.includes(to.path)) {
    next()
  } else {
    // 否则重定向到登录页,并携带重定向地址
    next({ path: '/sign-in', query: { redirect: to.fullPath } })
  }
}

/**
 * 处理路由注册
 * @param userStore 用户状态
 * @param next 路由跳转函数
 * @param to 目标路由
 */
const handleRouteRegistration = async (
  userStore: ReturnType<typeof useUserStore>,
  next: NavigationGuardNext,
  to: RouteLocationNormalizedLoadedGeneric
) => {
  try {
    // 如果没有用户信息,先获取用户信息
    if (!userStore.userInfo) {
      const { data: { roles: { menus } } } = await userStore.getUserInfo()
      registerRoutes(menus)
    } else {
      // 否则直接使用现有用户信息注册路由
      registerRoutes(userStore.userInfo.roles.menus)
    }
    // 重新导航到目标路由
    next({ ...to, replace: true })
  } catch (error) {
    // 发生错误时重定向到登录页
    next('/sign-in')
  }
}