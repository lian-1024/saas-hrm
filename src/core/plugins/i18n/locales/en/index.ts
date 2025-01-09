import type { LocalMessageType } from "../zh-CN"

const en: LocalMessageType = {
  nav: {
    dashboard: 'Dashboard',
    department: 'Department',
    role: 'Role',
    permission: 'Permission',
    attendance: 'Attendance',
    employee: 'Employee',
  },
  dashboard: {
    companyName: 'Beijing Bytedance Technology Company Limited',
    employeeTotal: "Total Employees",
    regularEmployeeTotal: "Regular Employees",
    contractSignTotal: "Pending Contracts",
    toBeEmployed: "Pending Onboard",
    toBeConfirmed: "Pending Conversion",
    interfaceAccessTotal: "Total API Calls",
    quick: {
      title: "Quick Access",
      leaveApproval: "Leave Approval",
      attendance: "Attendance",
      roleManagement: "Role Management",
      salarySettings: "Salary Settings",
      addPermission: "Add Permission",
    },
    declare: {
      socialInsurance: "Social Declare Total",
      providentFund: "Housing Fund Declare Total",
      total: "Declare Total",
      declaredTotal: "Declared Total",
      declaringTotal: "Declaring Total",
      toDeclareTotal: "To Declare Total",
    },
    helpLink: {
      title: "Help Links",
      gettingStarted: "Getting Started",
      onlineHelpManual: "Online Help Manual",
      contactSupport: "Contact Support",
      addLink: "Add Link",
    },
    notification: {
      title: "Notification",
      published: "published",
    }
  },
  department: {
    operations: {
      title: "Operation",
      addChild: "Add Sub-department",
      edit: "Edit",
      delete: "Delete",
      formRules: {
        name: {
          required: "Please enter the department name",
          min: "Department name length is 2-10 characters",
        },
        code: {
          required: "Please enter the department code",
          min: "Department code length is 2-10 characters",
        },
        managerId: {
          required: "Please select the department manager",
        },
        introduce: {
          required: "Please enter the department introduction",
          max: "Department introduction is up to 100 characters",
        }
      },
      operationMessage: {
        addSuccess: "Add department successfully",
        addError: "Add department failed",
        editSuccess: "Edit department successfully",
        editError: "Edit department failed",
        deleteSuccess: "Delete department successfully",
        deleteError: "Delete department failed",
        selectDepartment: "Please select the department",
        deleteConfirmContent: "Are you sure you want to delete this department?",
        deleteConfirmTitle: "Delete department",
        confirmDelete: "Confirm delete",
        cancelDelete: "Cancel delete"
      },
      formFields: {
        name: "Department Name",
        code: "Department Code",
        managerId: "Department Manager",
        introduce: "Department Introduction"

      },
        formPlaceholder: {
          name: "Please enter department name",
          code: "Please enter department code", 
          managerId: "Please select department manager",
          introduce: "Please enter department introduction"
        }
    }
  }
}



export default en