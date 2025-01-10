import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import("@/modules/error/views/404.vue"),
  meta: {
    title: "nav.error.404",
    hidden: true
  }
} satisfies RouteRecordRaw 