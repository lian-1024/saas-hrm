import { KeyOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
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
        name: 'permission',
        index: 4,
        title: "nav.permission",
        icon: h(KeyOutlined),
      }
    }
  ]
} satisfies RouteRecordRaw 