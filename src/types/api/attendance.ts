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
