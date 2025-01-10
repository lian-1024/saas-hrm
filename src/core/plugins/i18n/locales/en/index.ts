import type { LocalMessageType } from "../zh-CN"

const en: LocalMessageType = {
  common: {
    confirm: "Confirm",
    cancel: "Cancel",
    enable: {
      enable: "Enabled",
      disable: "Disabled"
    }
  },
  nav: {
    dashboard: 'Dashboard',
    employee: 'Employee',
    employeeDetail: 'Employee Detail',
    department: 'Department',
    role: 'Role',
    permission: 'Permission',
    attendance: 'Attendance'
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

    },
    form: {
      rules: {
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
      fields: {
        name: "Department Name",
        code: "Department Code",
        managerId: "Department Manager",
        introduce: "Department Introduction"
      },
      placeholder: {
        name: "Please enter department name",
        code: "Please enter department code",
        managerId: "Please select department manager",
        introduce: "Please enter department introduction"
      }
    }
  },
  role: {
    table: {
      columns: {
        key: "No.",
        role: "Role",
        status: "Enable",
        description: 'Description',
        actions: "Operation"
      },
      actions: {
        addRole: 'Add Role',
        givePermission: "Assign Permissions",
        edit: "Edit",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
      },
      operationMessage: {
        deleteConfirmTitle: "Delete Role",
        deleteConfirmContent: "Are you sure you want to delete this role?",
        confirmDelete: "Confirm delete",
        cancelDelete: "Cancel delete",
        deleteRoleSuccess: "Delete role successfully",
        deleteRoleError: "Delete role failed",
        addRoleSuccess: "Add role successfully",
        addRoleError: "Add role failed",
        editRoleSuccess: "Edit role successfully",
        editRoleError: "Edit role failed",
        cancelConfirmTitle: "Are you sure you want to cancel the edit?",
      },

    },
    form: {
      title: "New Role",
      fields: {
        name: "Role Name",
        description: "Role Description",
        status: "Enable",
      },
      placeholder: {
        name: "Please enter role name",
        description: "Please enter role description",
      },
      rules: {
        name: {
          required: "Please enter role name",
        },
        description: {
          required: "Please enter role description",
        }
      }
    }
  },
  employee: {
    table: {
      columns: {
        staffPhoto: "Avatar",
        username: "Name",
        mobile: "Mobile",
        workNumber: "Work ID",
        formOfEmployment: "Employment Type",
        departmentName: "Department",
        timeOfEntry: "Entry Time",
        operations: "Operations"
      },
      actions: {
        view: "View",
        role: "Role",
        delete: "Delete",
        deleteConfirm: "Are you sure you want to delete?"
      },
      pagination: {
        total: "Total {total} items"
      },
      formalOfEmployment: {
        formal: "Formal",
        informal: "Informal"
      }
    },
    actions: {
      sendNotification: "Send Notification",
      addEmployee: "Add Employee",
      importExcel: "Import Excel",
      exportExcel: "Export Excel"
    },
    search: {
      placeholder: "Search employee name"
    },
    messages: {
      deleteSuccess: "Employee deleted successfully",
      deleteError: "Failed to delete employee",
      updateSuccess: "Update employee successfully",
      updateError: "Failed to update employee",
      addSuccess: "Add employee successfully",
      addError: "Failed to add employee"
    },
    detail: {
      title: "Employee Detail",
      form: {
        fields: {
          username: "Name",
          workNumber: "Work ID",
          mobile: "Mobile",
          department: "Department",
          formOfEmployment: "Employment Type",
          timeOfEntry: "Entry Time",
          correctionTime: "Correction Time",
          staffPhoto: "Photo"
        },
        placeholder: {
          username: "Please enter employee full name",
          department: "Please select department",
          formOfEmployment: "Please select employment type"
        },
        rules: {
          username: {
            required: "Please enter employee name",
            length: "Name length should be 1-4 characters"
          },
          mobile: {
            required: "Please enter mobile number",
            format: "Invalid mobile number format"
          },
          timeOfEntry: {
            required: "Please select entry time",
            format: "Invalid entry time format"
          },
          correctionTime: {
            required: "Please select correction time",
            format: "Invalid correction time format"
          },
          department: {
            required: "Please select department"
          },
          formOfEmployment: {
            required: "Please select employment type"
          }
        },
        buttons: {
          save: "Save",
          update: "Update"
        }
      },
      upload: {
        text: "Upload",
        error: {
          type: "You can only upload JPG file!",
          size: "Image must be smaller than 2MB!",
          upload: "Upload error"
        }
      }
    },
    roleModal: {
      title: "Assign Roles",
      success: "Roles assigned successfully",
      error: "Failed to assign roles",
      confirm: "Confirm",
      cancel: "Cancel"
    },
    importModal: {
      title: "Import Employees",
      downloadTemplate: "Download Template",
      dragText: "Drag file here or",
      clickToUpload: "click to upload",
      success: "Import successful",
      error: "Import failed",
      fileType: {
        error: "Only Excel files are allowed!"
      },
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      }
    }
  },
  permission: {
    table: {
      columns: {
        name: "Name",
        key: "Key",
        description: "Description",
        operations: "Operations"
      },
      actions: {
        add: "Add",
        edit: "Edit",
        delete: "Delete"
      }
    },
    actions: {
      addPermission: "Add Permission"
    },
    modal: {
      title: {
        add: "Add Permission",
        edit: "Edit Permission"
      },
      form: {
        fields: {
          name: "Permission Name",
          code: "Permission Key",
          description: "Description",
          enable: "Enable"
        },
        placeholder: {
          name: "Please enter permission name",
          code: "Please enter permission key",
          description: "Please enter permission description"
        },
        rules: {
          name: {
            required: "Please enter permission name",
            exists: "Permission name already exists",
            length: "Permission name should be 2-50 characters"
          },
          code: {
            required: "Please enter permission key",
            exists: "Permission key already exists",
            length: "Permission key should be 2-50 characters"
          }
        }
      },
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      }
    },
    messages: {
      deleteConfirm: "Are you sure you want to delete this permission?",
      deleteSuccess: "Delete permission successfully",
      deleteError: "Failed to delete permission",
      editSuccess: "Edit permission successfully",
      editError: "Failed to edit permission",
      addSuccess: "Add permission successfully",
      addError: "Failed to add permission"
    }
  },
  attendance: {
    table: {
      columns: {
        key: "No.",
        username: "Name",
        workNumber: "Work ID",
        departmentName: "Department",
        mobile: "Mobile"
      },
      pagination: {
        total: "Total {total} items"
      }
    },
    drawer: {
      title: "Clock-in Range Settings",
      radius: "Radius",
      radiusTip: "Can clock in within {distance}",
      buttons: {
        cancel: "Cancel",
        batchSave: "Batch Save"
      },
      messages: {
        updateSuccess: "Update successful",
        updateError: "Update failed"
      }
    },
    setting: {
      title: "Settings",
      tabs: {
        attendance: "Attendance Settings",
        leave: "Leave Settings",
        deduction: "Deduction Settings",
        overtime: "Overtime Settings"
      },
      buttons: {
        saveUpdate: "Save Update",
        cancel: "Cancel"
      }
    },
    updateModal: {
      title: "{date} (Actual Attendance Plan)",
      note: "Note: Abnormal status takes precedence over normal status",
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      },
      messages: {
        updateSuccess: "Update attendance status successful",
        updateError: "Update attendance status failed"
      }
    },
    popover: {
      checkInTime: "Check-in Time",
      checkOutTime: "Check-out Time",
      checkInPlace: "Check-in Place",
      checkOutPlace: "Check-out Place"
    },
    top: {
      unprocessed: "Unprocessed"
    },
    actions: {
      clockInRange: "Clock-in Range",
      settings: "Settings"
    },
    filter: {
      department: "Department"
    },
    status: {
      1: "Normal",
      2: "Absent",
      3: "Late",
      4: "Early Leave",
      5: "Out",
      6: "Business Trip",
      7: "Annual Leave",
      8: "Personal Leave",
      9: "Sick Leave",
      10: "Marriage Leave",
      11: "Bereavement Leave",
      12: "Maternity Leave",
      13: "Reward Maternity Leave",
      14: "Paternity Leave",
      15: "Home Leave",
      16: "Work Injury Leave",
      17: "Time Off",
      18: "Prenatal Leave",
      19: "Miscarriage Leave",
      20: "Long-term Sick Leave",
      21: "Supplementary Sign",
      22: "Rest",
      99: "-"
    },
    settings: {
      attendance: {
        department: "Department",
        attendanceTime: "Attendance Time",
        rules: {
          selectDepartment: "Please select department",
          selectDate: "Please select date"
        },
        messages: {
          updateSuccess: "Update attendance settings successful",
          updateError: "Update attendance settings failed"
        }
      },
      leave: {
        department: "Department",
        leaveType: "Leave Type",
        name: "Name",
        isEnabled: "Enabled",
        messages: {
          updateSuccess: "Update leave settings successful",
          updateError: "Update leave settings failed"
        }
      },
      deduction: {
        department: "Department",
        deductionType: {
          beLate: "Late",
          leaveEarly: "Early Leave",
          absenteeism: "Absent"
        },
        deduction: "Deduction",
        minutes: "Minutes",
        times: "Times",
        perTime: "Per Time",
        yuan: "Yuan",
        days: "Days",
        messages: {
          updateSuccess: "Update deduction rules successful",
          updateError: "Update deduction rules failed"
        }
      },
      overtime: {
        department: "Department",
        overtimeRules: "Overtime Rules",
        workday: "Can apply for overtime on workdays",
        restDay: "Can apply for overtime on rest days",
        holiday: "Can apply for overtime on statutory holidays",
        timeOff: "Time Off",
        clockValidation: "Clock Validation",
        clockRequired: "Clock-in required for overtime",
        enableCompensation: "Enable Compensation",
        timeOffSettings: "Time Off Settings",
        latestEffectiveDate: "Latest Effective Date: Next Year",
        minimumUnit: "Minimum Unit",
        day: "Day",
        messages: {
          updateSuccess: "Update overtime settings successful",
          updateError: "Update overtime settings failed"
        }
      }
    }
  },
  user: {
    signIn: {
      title: {
        mobile: "Mobile Login",
        qrcode: "QR Code Login"
      },
      switchType: {
        mobile: "Use QR Code Login",
        qrcode: "Use Mobile Login"
      },
      messages: {
        loginSuccess: "Login successful",
        loginError: "Login failed"
      }
    },
    mobileForm: {
      placeholder: {
        mobile: "Please enter mobile number",
        password: "Please enter password"
      },
      rules: {
        mobile: {
          required: "Please enter mobile number",
          format: "Invalid mobile number format"
        },
        password: {
          required: "Please enter password",
          minLength: "Password must be at least 6 characters"
        },
        agreement: {
          required: "Please read and agree to the User Platform Agreement"
        }
      },
      agreement: {
        text: "I have read and agree to",
        link: "User Platform Agreement"
      },
      button: {
        login: "Login"
      }
    },
    qrcodeForm: {
      tip: "Please scan QR code with mobile app",
      button: {
        refresh: "Refresh QR Code"
      }
    },
    updateModal: {
      title: {
        password: "Change Password",
        avatar: "Change Avatar"
      },
      password: {
        label: {
          old: "Old Password",
          new: "New Password",
          confirm: "Confirm Password"
        },
        placeholder: {
          old: "Please enter old password",
          new: "Please enter new password",
          confirm: "Please confirm new password"
        },
        rules: {
          old: {
            required: "Please enter old password"
          },
          new: {
            required: "Please enter new password",
            minLength: "Password must be at least 6 characters"
          },
          confirm: {
            required: "Please confirm new password",
            match: "The two passwords do not match"
          }
        },
        messages: {
          success: "Password changed successfully",
          error: "Failed to change password"
        }
      },
      avatar: {
        messages: {
          success: "Avatar uploaded successfully",
          error: "Failed to upload avatar",
          warning: "Please select an avatar first"
        }
      }
    },
    dropdown: {
      menu: {
        dashboard: "Dashboard",
        password: "Change Password",
        avatar: "Change Avatar",
        logout: "Logout"
      }
    }
  },
  result: {
    404: {
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: "Back Home"
    }
  }
}



export default en