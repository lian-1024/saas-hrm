import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'dashboard',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/dashboard',
      component: () => import("@/modules/dashboard/views/index.vue"),
      meta: {
        title: "nav.dashboard",
        icon: "DashboardOutlined",
      }
    }
  ]
} satisfies RouteRecordRaw 