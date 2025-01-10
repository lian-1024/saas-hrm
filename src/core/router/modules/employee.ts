import { TeamOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
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
        name: 'employee',
        index: 3,
        title: "nav.employee",
        icon: h(TeamOutlined),
      }
    },
    {
      path: "/employee/detail/:id?",
      component: () => import("@/modules/employee/views/detail/index.vue"),
      meta: {
        name: 'employeeDetail',
        title: "nav.employeeDetail",
        hidden: true,
        parentKey: 'employee'
      }
    }
  ]
} satisfies RouteRecordRaw 