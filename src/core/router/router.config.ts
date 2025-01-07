import type { RouteRecordRaw } from "vue-router";

// 常量路由 后续权限动态从后端获取
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: "/dashboard",
    component: () => import("@/core/layouts/default.vue"),
    children: [
      {
        // 仪表盘
        path: '/dashboard',
        component: () => import("@/modules/dashboard/views/index.vue")
      },
      {
        // 组织
        path: '/department',
        component: () => import("@/modules/department/views/index.vue")
      },
      {
        // 角色
        path: '/role',
        component: () => import("@/modules/role/views/index.vue")
      },
      {
        // 员工
        path: '/employee',
        component: () => import("@/modules/employee/views/index.vue"),
      },
      {
        path: "/employee/detail/:id?",
        component: () => import("@/modules/employee/views/detail/index.vue")
      },
      {
        // 权限
        path: '/permission',
        component: () => import("@/modules/permission/views/index.vue")
      },
      {
        // 考勤
        path: '/attendance',
        component: () => import("@/modules/attendance/views/index.vue")
      },
    ]
  },
  {
    path: '/sign-in',
    component: () => import("@/modules/user/views/sign-in/index.vue")
  }
]
