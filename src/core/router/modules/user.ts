import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/sign-in',
  component: () => import('@/modules/user/views/sign-in/index.vue'),
  meta: {
    name: 'signIn',
    title: 'nav.signIn',
    hidden: true,
  },
} satisfies RouteRecordRaw
