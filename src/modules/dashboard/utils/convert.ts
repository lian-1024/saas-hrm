import type { DashboardInfoItem, HomeDataVO } from '../types/index'

// 转换数据
export const convertDashboardInfoList = (data: HomeDataVO): DashboardInfoItem[] => {
  const {
    employeeTotal,
    regularEmployeeTotal,
    contractSignTotal,
    toBeEmployed,
    toBeConfirmed,
    interfaceAccessTotal,
  } = data
  return [
    {
      title: 'employeeTotal',
      total: employeeTotal,
    },
    {
      title: 'regularEmployeeTotal',
      total: regularEmployeeTotal,
    },
    {
      title: 'contractSignTotal',
      total: contractSignTotal,
    },
    {
      title: 'toBeEmployed',
      total: toBeEmployed,
    },
    {
      title: 'toBeConfirmed',
      total: toBeConfirmed,
    },
    {
      title: 'interfaceAccessTotal',
      total: interfaceAccessTotal,
    },
  ]
}
