import { generateMenuItem } from '@/utils/generate-menu-item';
import { ApartmentOutlined, CalendarOutlined, DashboardOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { h } from 'vue';



export const SiderMenuItem: MenuProps['items'] = [
  // 仪表盘
  generateMenuItem("/dashboard", "Dashboard", h(DashboardOutlined)),
  // 组织
  generateMenuItem("/department", "Department", h(ApartmentOutlined)),
  // 角色
  generateMenuItem("/role", "Role", h(UserOutlined)),
  // 员工
  generateMenuItem("/employee", "Employee", h(DashboardOutlined)),
  // 权限
  generateMenuItem("/permission", "Permission", h(LockOutlined)),
  // 考勤
  generateMenuItem("/attendance", "Attendance", h(CalendarOutlined)),
  // 审批
  generateMenuItem("/approval", "Approval", h(CalendarOutlined)),
  // 工资
  generateMenuItem("/salary", "Salary", h(CalendarOutlined)),
  // 社保
  generateMenuItem("/social", "Social", h(CalendarOutlined)),
]