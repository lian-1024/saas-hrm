import { DASHBOARD_TITLES } from '../constants/index';
import type { DashboardInfoItem, HomeDataVO } from '../types/index';

// 转换数据
export const convertDashboardInfoList = (data: HomeDataVO): DashboardInfoItem[] => {
  const { employeeTotal, regularEmployeeTotal, contractSignTotal, toBeEmployed, toBeConfirmed, interfaceAccessTotal } = data;
  return [
    {
      title: DASHBOARD_TITLES.TOTAL_EMPLOYEES,
      total: employeeTotal
    },
    {
      title: DASHBOARD_TITLES.REGULAR_EMPLOYEES,
      total: regularEmployeeTotal
    },
    {
      title: DASHBOARD_TITLES.PENDING_CONTRACTS,
      total: contractSignTotal
    },
    {
      title: DASHBOARD_TITLES.PENDING_ONBOARD,
      total: toBeEmployed
    },
    {
      title: DASHBOARD_TITLES.PENDING_CONVERSION,
      total: toBeConfirmed
    },
    {
      title: DASHBOARD_TITLES.TOTAL_API_CALLS,
      total: interfaceAccessTotal
    }
  ]
}