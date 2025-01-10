import { UserOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
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
        index: 2,
        title: "nav.role",
        icon: h(UserOutlined),
      }
    }
  ]
} satisfies RouteRecordRaw