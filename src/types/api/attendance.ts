import type { PagingQueryParams, PagingResponse } from './common';
export interface EmployeeAttendanceVO {
  /**
   * 考勤记录, item 类型: object
   */
  // attendanceRecord: AttendanceRecord[];
  /**
   * 部门id
   */
  departmentId: number;
  /**
   * 部门名称
   */
  departmentName: string;
  /**
   * id
   */
  id: number | null;
  /**
   * 手机
   */
  mobile: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 工号
   */
  workNumber: string;
}


export interface AttendanceSettingDTO {
  /**
   * 下午下班时间
   */
  afternoonEndTime: string;
  /**
   * 下午上班时间
   */
  afternoonStartTime: string;
  /**
   * 企业id
   */
  companyId: number;
  /**
   * 部门ID
   */
  departmentId: number;
  /**
   * 配置ID
   */
  id?: number | null;
  /**
   * 上午下班时间
   */
  morningEndTime: string;
  /**
   * 上午上班时间
   */
  morningStartTime: string;
}



export interface AskForLeaveSettingVO {
  /**
   * 公司id
   */
  companyId: number;
  /**
   * 部门id
   */
  departmentId: number;
  /**
   * 主键id
   */
  id: number;
  /**
   * 是否可用0不可用1可用
   */
  isEnable: number;
  /**
   * 请假类型, 年假 60000
   * 事假 60100
   * 病假 60200
   * 婚假  60300
   * 丧假 60400
   * 产假  60500
   * 奖励产假 60600
   * 陪产假 60700
   * 探亲假 60800
   * 工伤假 60900
   * 调休假 61000
   * 产检假 61100
   * 流产假 61200
   * 长期病假 61300
   */
  leaveType: string;
}




/**
 * 考勤数据列表
 */
export interface AttendanceList {
  /**
   * 数据
   */
  data: PagingResponse<AttendanceRow>;
  /**
   * 当前报表月份
   */
  monthOfReport: number;
  /**
   * 待处理的考勤数量
   */
  tobeTaskCount: number;
  [property: string]: any;
}


export interface AttendanceRow {
  /**
   * 考勤记录, item 类型: object
   */
  attendanceRecord: AttendanceRecord[];
  /**
   * 部门id
   */
  departmentId: number;
  /**
   * 部门名称
   */
  departmentName: string;
  /**
   * id
   */
  id: number | null;
  /**
   * 手机
   */
  mobile: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 工号
   */
  workNumber: string;
}

export interface AttendanceRecord {
  /**
   * 上班考勤时间
   */
  adtInTime: null | string;
  /**
   * 下班考勤时间
   */
  adtOutTime: null | string;
  /**
   * 考勤状态, 考勤状态 1正常 2旷工 3迟到 4早退 5外出 6出差 7年假 8事假 9病假 10婚假 11丧假 12产假 13奖励产假 14陪产假 15探亲假 16工伤假
   * 17调休 18产检假 19流产假 20长期病假 21补签 22休息
   */
  adtStatu: number;
  /**
   * 上班打卡地点
   */
  adtInPlace: string
  /**
   * 下班打卡地点
   */
  adtOutPlace: string

  /**
   * 考勤日期
   */
  day: string;
  /**
   * 部门ID
   */
  departmentId: number | null;
  /**
   * 考勤ID
   */
  id: number;
  /**
   * 用户ID
   */
  userId: number | null;
}

export interface AttendancePagingParams extends PagingQueryParams {
  deptID: string;
}


export interface CompanyVO {
  /**
   * 公司打卡地址
   */
  address: string;
  /**
   * 标识id
   */
  id: number;
  /**
   * 公司名称
   */
  name: string;
  /**
   * 公司联系电话
   */
  phone: string;
  /**
   * 经纬度-[经度, 纬度]
   */
  point: number[];
  /**
   * 公司打卡半径(单位米)
   */
  radius: number;
}


export interface UpdateCompanyParams {
  list: CompanyVO[];
}


