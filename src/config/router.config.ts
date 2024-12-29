import type { RouteRecordRaw } from "vue-router";

// 常量路由 后续权限动态从后端获取
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: "/dashboard",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        // 仪表盘
        path: '/dashboard',
        component: () => import("@/views/dashboard/index.vue")
      },
      {
        // 组织
        path: '/department',
        component: () => import("@/views/department/index.vue")
      },
      {
        // 角色
        path: '/role',
        component: () => import("@/views/role/index.vue")
      },
      {
        // 员工
        path: '/employee',
        component: () => import("@/views/employee/index.vue"),
      },
      {
        path: "/employee/detail/:id",
        component: () => import("@/views/employee/detail/index.vue")
      },
      {
        // 系统
        path: '/system',
        component: () => import("@/views/system/index.vue")
      },
      {
        // 权限
        path: '/permission',
        component: () => import("@/views/permission/index.vue")
      },
      {
        // 考勤
        path: '/attendance',
        component: () => import("@/views/attendance/index.vue")
      }
    ]
  }
]