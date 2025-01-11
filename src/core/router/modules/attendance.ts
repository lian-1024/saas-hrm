import { CalendarOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  redirect: '/dashboard',
  name: 'attendance',
  component: () => import('@/core/layouts/default.vue'),
  children: [
    {
      path: '/attendance',
      component: () => import('@/modules/attendance/views/index.vue'),
      meta: {
        index: 5,
        name: 'attendance',
        title: 'nav.attendance',
        icon: h(CalendarOutlined),
      },
    },
  ],
} satisfies RouteRecordRaw
