import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: "/dashboard",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: '/dashboard',
        component: () => import("@/views/dashboard/index.vue")
      }
    ]
  }
]