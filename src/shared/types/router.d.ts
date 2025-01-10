import type { VNode } from "vue"
import "vue-router"
export { }

declare module "vue-router" {
  interface RouteMeta {
    title: string
    index?: number
    icon?: string | VNode
    hidden?: boolean
  }
}