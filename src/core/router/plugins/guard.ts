import { i18n } from '@/core/plugins/i18n'
import { useUserStore } from '@/core/stores'
import useRouter from '@/shared/composables/use-router'
import { requestCancel } from '@/shared/utils/http/request/axios/request-cancel'
import { useTitle } from '@vueuse/core'
import NProgress from 'nprogress'
import type { NavigationGuardNext, RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'
import { useRoute } from 'vue-router'
// 白名单路由 - 不需要登录就可以访问
const whiteList = ['/sign-in']
const { registerRoutes, addResultRoute } = useRouter()
const pageTitle = useTitle()

const route = useRoute()
/**
 * 注册全局路由守卫
 * @param router 路由实例
 */
export const registerGlobalRouteGuard = async (router: Router) => {
  // 注册全局前置守卫
  router.beforeEach(async (to, from, next) => {
    // 开启进度条
    NProgress.start()

    // 清除所有正在进行的请求
    requestCancel.clearPending()

    // 获取用户状态
    const userStore = useUserStore()
    const { getIsRoutesGenerated } = useRouter()


    // 如果没有token,处理未认证情况
    if (!userStore.token) {
      await withSetPageTitle(to.meta.title)(handleUnauthenticated(to, next))
      return
    }

    // 如果已登录且要跳转登录页,重定向到首页
    if (to.path === '/sign-in') {
      await withSetPageTitle(to.meta.title)(() => next({ path: '/dashboard' }))
      return
    }


    // 如果路由未生成，进行路由注册
    if (!getIsRoutesGenerated()) {
      await withSetPageTitle(to.meta.title)(() => handleRouteRegistration(userStore, next, to))
      return
    }

    setPageTitle(to.meta.title)
    // 都不匹配直接放行
    next()
  })

  // 注册全局后置守卫
  router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
  })
}

const withSetPageTitle = (name: string) => (func?: any) => {
  setPageTitle(name)
  return func ? func() : null
}



const setPageTitle = (name?: string) => {
  if (!name) return

  // 设置页面标题
  const title = name.split('.').pop()
  const t = i18n.global.t
  const prefix = t('common.title.prefix')
  pageTitle.value = `${t(`common.title.${title}`)} | ${prefix}`
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
 * @param registerRoutes 注册路由方法
 */
const handleRouteRegistration = async (
  userStore: ReturnType<typeof useUserStore>,
  next: NavigationGuardNext,
  to: RouteLocationNormalizedLoadedGeneric,
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
    addResultRoute()
    next({ ...to, replace: true })
  } catch (error) {
    // 发生错误时重定向到登录页
    next('/sign-in')
  }
}