import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/sign-in',
  component: () => import("@/modules/user/views/sign-in/index.vue"),
  meta: {
    title: "nav.sign-in",
    hidden: true
  }
} satisfies RouteRecordRaw

