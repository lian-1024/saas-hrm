import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'permission',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/permission',
      component: () => import("@/modules/permission/views/index.vue"),
      meta: {
        title: "nav.permission",
        icon: "KeyOutlined",
      }
    }
  ]
} satisfies RouteRecordRaw 