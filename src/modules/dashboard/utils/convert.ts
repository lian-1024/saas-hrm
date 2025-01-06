import type { DashboardInfoItem } from '../types/index';
import type { HomeDataVO } from '../types/index';
// 转换数据
export const convertDashboardInfoList = (data: HomeDataVO): DashboardInfoItem[] => {
  return [
    {
      title: "组织总人数",
      total: data.employeeTotal
    },
    {
      title: "正式员工",
      total: data.regularEmployeeTotal
    },
    {
      title: "合同待签署",
      total: data.contractSignTotal
    },
    {
      title: "待入职",
      total: data.toBeEmployed
    },
    {
      title: "本月待转正",
      total: data.toBeConfirmed
    },
    {
      title: "接口总访问量",
      total: data.interfaceAccessTotal
    }
  ]
}