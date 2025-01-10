import type { RouteRecordRaw } from "vue-router";


export default {
  path: '/',
  redirect: "/dashboard",
  name: 'role',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/role',
      component: () => import("@/modules/role/views/index.vue"),
      meta: {
        title: "nav.role",
        icon: "UserOutlined",
      }
    }
  ]
} satisfies RouteRecordRaw