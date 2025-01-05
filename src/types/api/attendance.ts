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
  yearOfReport: number

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


export interface UpdateAttendanceParams {
  /**
    * 考勤状态, 1正常 2旷工 3迟到 4早退 5外出 6出差 7年假 8事假 9病假 10婚假 11丧假 12产假 13奖励产假 14陪产假 15探亲假 16工伤假 17调休
    * 18产检假 19流产假 20长期病假 21测试架 22补签
    */
  adtStatu: string;
  /**
   * 考勤日期
   */
  day: string;
  /**
   * 部门ID
   */
  departmentId: string;
  /**
   * 用户ID
   */
  userId: string;
}




export interface AttendanceAdtStatu {
  /**
   * 考勤状态, 考勤状态 1正常 2旷工 3迟到 4早退 5外出 6出差 7年假 8事假 9病假 10婚假 11丧假 12产假 13奖励产假 14陪产假 15探亲假 16工伤假
   * 17调休 18产检假 19流产假 20长期病假 21补签 22休息
   */
  adtStatu: string;
  /**
   * 考勤状态名称, 考勤状态 1正常 2旷工 3迟到 4早退 5外出 6出差 7年假 8事假 9病假 10婚假 11丧假 12产假 13奖励产假 14陪产假 15探亲假 16工伤假
   * 17调休 18产检假 19流产假 20长期病假 21补签 22休息
   */
  adtStatuName: string;
  /**
   * 部门名称
   */
  departmentName: string;

  userId: string;
}


/**
 * 考勤配置
 */
export interface AttendanceSetting {
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
  companyId: string;
  /**
   * 创建人
   */
  createBy?: null | string;
  /**
   * 创建时间
   */
  createDate?: null | string;
  /**
   * 部门ID
   */
  departmentId: string;
  /**
   * 配置ID
   */
  id: string;
  /**
   * 上午下班时间
   */
  morningEndTime: string;
  /**
   * 上午上班时间
   */
  morningStartTime: string;
  /**
   * 备注
   */
  remarks?: null | string;
  /**
   * 修改人
   */
  updateBy?: null | string;
  /**
   * 修改时间, format: date-time
   */
  updateDate?: null | string;
}


export interface UpdateAttendanceSettingParams {
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


export interface LeaveSetting {
  /**
   * 公司id
   */
  companyId: string;
  /**
   * 部门id
   */
  departmentId: string;
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


export interface UpdateLeaveSettingParams {
  /**
   * 部门ID
   */
  departmentId: string;
  /**
   * 是否开启
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
  /**
   * 请假类型名称
   */
  name: string;
}


export interface DeductionSetting {
  /**
   * 旷工天数
   */
  absenceDays: string;
  /**
   * 旷工次数上限
   */
  absenceTimesUpperLimt: string;
  /**
   * 公司id
   */
  companyId: number;
  /**
   * 扣款金额下限
   */
  dedAmonutLowerLimit: string;
  /**
   * 扣款金额上限
   */
  dedAmonutUpperLimit: string;
  /**
   * 考勤规则类型：5100，5200,5300, 51000:表示迟到扣款,
   * 52000:表示早退扣款,
   * 53000:表示旷工扣款
   */
  dedTypeCode: string;
  /**
   * 部门id
   */
  departmentId: number;
  /**
   * 罚款工资倍数
   */
  fineSalaryMultiples: string;
  /**
   * 主键id
   */
  id: number;
  /**
   * 是否旷工0不旷工1旷工
   */
  isAbsenteeism: number;
  /**
   * 是否可用 1开启 0关闭
   */
  isEnable: number;
  /**
   * 考勤规则名称
   */
  // name: string;
  /**
   * 时间段下限
   */
  periodLowerLimit: string;
  /**
   * 时间段上限
   */
  periodUpperLimit: string;
  /**
   * 次数下限
   */
  timesLowerLimit: string;
  /**
   * 次数上限
   */
  timesUpperLimit: string;
}
