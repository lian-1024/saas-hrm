import type { VNode } from "vue"
import "vue-router"
export { }

declare module "vue-router" {
  interface RouteMeta {
    title: string // 标题
    index?: number // 排序
    icon?: string | VNode // 图标
    hidden?: boolean // 是否隐藏不显示在菜单中
    parentKey?: string // 父级路由名称
  }
}