export interface DashboardInfoItem {
  title: string
  total: number
}


/**
 * Home data 
 */
export interface HomeDataVO {
  /**
   * 合同待签署总数
   */
  contractSignTotal: number;
  /**
   * 组织总人数
   */
  employeeTotal: number;
  /**
   * 接口总访问数
   */
  interfaceAccessTotal: number;
  /**
   * 公积金申报数据
   */
  providentFund: DashboardDeclareVO;
  /**
   * 正式员工总数
   */
  regularEmployeeTotal: number;
  /**
   * 社保申报数据
   */
  socialInsurance: DashboardDeclareVO;
  /**
   * 本月待转正人数
   */
  toBeConfirmed: number;
  /**
   * 本月待离职人数
   */
  toBeDismissed: number;
  /**
   * 待入职人数
   */
  toBeEmployed: number;
}

/**
 * 公积金申报数据
 */
export interface DashboardDeclareVO {
  /**
   * 分类
   */
  category: string;
  /**
   * 分类类型
   */
  categoryType: string;
  /**
   * 申报人数
   */
  declarationTotal: number;
  /**
   * 已申报人数
   */
  declaredTotal: number;
  /**
   * 申报中人数
   */
  declaringTotal: number;
  /**
   * 待申报人数
   */
  toDeclareTotal: number;
  /**
   * x轴
   */
  xAxis: string[];
  /**
   * y轴
   */
  yAxis: number[];
}



export interface DashboardNoticeVO {
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 消息通知内容
   */
  notice: string;
}