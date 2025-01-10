import { ApartmentOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'department',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/department',
      component: () => import("@/modules/department/views/index.vue"),
      meta: {
        index: 1,
        title: "nav.department",
        icon: h(ApartmentOutlined),
      }
    }
  ]
} satisfies RouteRecordRaw 