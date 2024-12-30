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