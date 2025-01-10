import type { RouteRecordRaw } from "vue-router";
import attendance from './modules/attendance';
import dashboard from './modules/dashboard';
import department from './modules/department';
import employee from './modules/employee';
import permission from './modules/permission';
import role from './modules/role';
import user from './modules/user';

// 基础路由
export const constantRoutes: RouteRecordRaw[] = [
  dashboard,
  user,
]

// 动态路由
export const dynamicRoutes: RouteRecordRaw[] = [
  attendance,
  department,
  employee,
  role,
  permission,
]

