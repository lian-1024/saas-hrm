import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'employee',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/employee',
      component: () => import("@/modules/employee/views/index.vue"),
      meta: {
        title: "nav.employee",
        icon: "UserOutlined",
      }
    },
    {
      path: "/employee/detail/:id?",
      component: () => import("@/modules/employee/views/detail/index.vue"),
      meta: {
        title: "menu.employee.detail",
        hidden: true
      }
    }
  ]
} satisfies RouteRecordRaw 