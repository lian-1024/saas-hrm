
const zhCN = {
  nav: {
    dashboard: '首页',
    department: '部门',
    role: '角色',
    permission: '权限',
    attendance: '考勤',
    employee: '员工',
  },
  dashboard: {
    companyName: "北京字节跳动科技有限公司",
    employeeTotal: "组织总人数",
    regularEmployeeTotal: "正式员工",
    contractSignTotal: "合同待签署",
    toBeEmployed: "待入职",
    toBeConfirmed: "待转正",
    interfaceAccessTotal: "接口总访问数",
    quick: {
      title: "快捷入口",
      leaveApproval: "假期审批",
      attendance: "考勤打卡",
      roleManagement: "角色管理",
      salarySettings: "薪资设置",
      addPermission: "添加权限",
    },
    declare: {
      socialInsurance: "社保申报人数",
      providentFund: "公积金申报人数",
      total: "申报人数",
      declaredTotal: "已申报人数",
      declaringTotal: "申报中人数",
      toDeclareTotal: "待申报人数",
    },
    helpLink: {
      title: "帮助链接",
      gettingStarted: "入门指南",
      onlineHelpManual: "在线帮助手册",
      contactSupport: "联系技术支持",
      addLink: "添加链接",
    },
    notification: {
      title: "通知公告",
      published: "发布了",
    }
  },
  department: {
    operations: {
      title: "操作",

      addChild: "添加子部门",
      edit: "编辑",
      delete: "删除",
      formRules: {
        name: {
          required: "请输入部门名称",
          min: "部门名称长度为2-10个字符",
        },
        code: {
          required: "请输入部门编码",
          min: "部门编码长度为2-10个字符",
        },
        managerId: {
          required: "请选择部门负责人",
        },
        introduce: {
          required: "请输入部门介绍",
          max: "部门介绍最多100个字符",
        }
      },
      operationMessage: {
        addSuccess: "新增部门成功",
        addError: "新增部门失败",
        editSuccess: "编辑部门成功",
        editError: "编辑部门失败",
        deleteSuccess: "删除部门成功",
        deleteError: "删除部门失败",
        selectDepartment: "请选择部门",
        deleteConfirmContent: "确定要删除该部门吗？",
        deleteConfirmTitle: "删除部门",
        confirmDelete: "确定删除",
        cancelDelete: "取消删除"
      },
      formFields: {
        name: "部门名称",
        code: "部门编码",
        managerId: "部门负责人",
        introduce: "部门介绍"

      },
      formPlaceholder: {
        name: "请输入部门名称",
        code: "请输入部门编码",
        managerId: "请选择部门负责人",
        introduce: "请输入部门介绍"
      }
    }
  }
}
export type LocalMessageType = typeof zhCN;

export default zhCN
