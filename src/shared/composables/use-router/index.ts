import router from '@/core/router'
import { constantRoutes, dynamicRoutes } from '@/core/router/router.config'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// 是否已生成动态路由状态
// 必须要是全局唯一的
const isRoutesGenerated = ref<boolean>(false)

const useRouter = () => {

  const setIsRoutesGenerated = (value: boolean) => {
    isRoutesGenerated.value = value
  }

  const getIsRoutesGenerated = () => {
    return isRoutesGenerated.value
  }

  /**
   * 重置路由
   */
  const resetRoutes = () => {
    const routes = router.getRoutes()
    routes.forEach(route => {
      if (route.name) {
        router.removeRoute(route.name)
      }
    })
    // 添加基础路由
    constantRoutes.forEach(route => {
      router.addRoute(route)
    })
    // 重置路由生成状态
    isRoutesGenerated.value = false

  }

  /**
   * 根据权限生成路由
   * @param rules 权限规则
   * @returns 过滤后的路由
   */
  const generateRoutesByRules = (rules: string[]) => {
    return dynamicRoutes.filter(route => rules.includes(route.name as string))
  }

  /**
   * 注册动态路由
   * @param rules 权限规则
   */
  const registerRoutes = (rules: string[]) => {

    // 如果没有传入权限规则，则添加所有动态路由
    const routes = generateRoutesByRules(rules)
    // 添加路由
    addRoutes(routes)
    // 设置路由已生成标志
    isRoutesGenerated.value = true

  }

  /**
   * 获取所有路由
   */
  const getRoutes = () => {
    return router.getRoutes()
  }

  /**
   * 添加单个路由
   * @param route 路由配置
   */
  const addRoute = (route: RouteRecordRaw) => {
    router.addRoute(route)
  }

  /**
   * 添加多个路由
   * @param routes 路由配置
   */
  const addRoutes = (routes: RouteRecordRaw[]) => {
    routes.forEach(route => {
      if (!router.hasRoute(route.name as string)) {
        router.addRoute(route)
      }
    })
  }

  /**
   * 删除单个路由
   * @param name 路由名称
   */
  const removeRoute = (name: string) => {
    router.removeRoute(name)
  }

  return {
    resetRoutes,
    registerRoutes,
    generateRoutesByRules,
    getRoutes,
    addRoute,
    addRoutes,
    removeRoute,
    setIsRoutesGenerated,
    getIsRoutesGenerated
  }
}

export default useRouter