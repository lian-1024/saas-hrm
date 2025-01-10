import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/sign-in',
  component: () => import("@/modules/user/views/sign-in/index.vue"),
  meta: {
    hidden: true
  }
} satisfies RouteRecordRaw

