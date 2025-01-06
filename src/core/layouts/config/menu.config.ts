import { generateMenuItem } from '@/shared/utils/generate-menu-item';
import { ApartmentOutlined, CalendarOutlined, DashboardOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { h } from 'vue';



export const SiderMenuItem: MenuProps['items'] = [
  // 首页
  generateMenuItem("/dashboard", "首页", h(DashboardOutlined)),
  // 组织
  generateMenuItem("/department", "组织", h(ApartmentOutlined)),
  // 角色
  generateMenuItem("/role", "角色", h(UserOutlined)),
  // 员工
  generateMenuItem("/employee", "员工", h(DashboardOutlined)),
  // 权限
  generateMenuItem("/permission", "权限", h(LockOutlined)),
  // 考勤
  generateMenuItem("/attendance", "考勤", h(CalendarOutlined)),
]