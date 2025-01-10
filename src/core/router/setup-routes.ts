import router from "."
import { dynamicRoutes } from "./router.config"


/**
 * 根据权限生成路由
 * @param rules 权限规则
 * @returns 过滤后的路由
 */
const generateRoutesByRules = (rules: string[]) => {
  return dynamicRoutes.filter(route => rules.includes(route.name as string))
}

/**
 * 设置路由
 * @param rules 权限规则
 */
export const registerRoutes = (rules: string[]) => {

  // 如果没有传入权限规则，则添加所有动态路由
  const routes = generateRoutesByRules(rules)
  // 添加路由
  routes.forEach(route => {
    if (!router.hasRoute(route.name as string)) {
      router.addRoute(route)
    }
  })

}


