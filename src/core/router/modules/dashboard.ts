import { DashboardOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
export default {
  path: '/',
  redirect: '/dashboard',
  name: 'dashboard',
  component: () => import('@/core/layouts/default.vue'),
  children: [
    {
      path: '/dashboard',
      component: () => import('@/modules/dashboard/views/index.vue'),
      meta: {
        index: 0,
        name: 'dashboard',
        title: 'nav.dashboard',
        icon: h(DashboardOutlined),
      },
    },
  ],
} satisfies RouteRecordRaw
