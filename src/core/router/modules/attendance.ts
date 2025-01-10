import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'attendance',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/attendance',
      component: () => import("@/modules/attendance/views/index.vue"),
      meta: {
        title: "nav.attendance",
        icon: "CalendarOutlined",
      }
    }
  ]
} satisfies RouteRecordRaw 