const zhCN = {
  common: {
    confirm: "确定",
    cancel: "取消",
    enable: {
      enable: "已启用",
      disable: "未启用"
    }
  },
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
    },
    form: {
      rules: {
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
      fields: {
        name: "部门名称",
        code: "部门编码",
        managerId: "部门负责人",
        introduce: "部门介绍"

      },
      placeholder: {
        name: "请输入部门名称",
        code: "请输入部门编码",
        managerId: "请选择部门负责人",
        introduce: "请输入部门介绍"
      }
    },

  },
  role: {
    table: {
      columns: {
        key: "序号",
        role: "角色",
        status: "启用",
        description: '描述',
        actions: "操作"
      },
      actions: {
        addRole: '添加角色',
        givePermission: "分配权限",
        edit: "编辑",
        save: "保存",
        cancel: "取消",
        delete: "删除",
      },
      operationMessage: {
        deleteConfirmTitle: "删除角色",
        deleteConfirmContent: "确定要删除该角色吗？",
        confirmDelete: "确定删除",
        cancelDelete: "取消删除",
        deleteRoleSuccess: "删除角色成功",
        deleteRoleError: "删除角色失败",
        addRoleSuccess: "新增角色成功",
        addRoleError: "新增角色失败",
        editRoleSuccess: "编辑角色成功",
        editRoleError: "编辑角色失败",
        cancelConfirmTitle: "确定要取消编辑吗?",

      },

    },
    form: {
      title: "新建角色",
      fields: {
        name: "角色名称",
        description: "角色描述",
        status: "启用",
      },
      placeholder: {
        name: "请输入角色名称",
        description: "请输入角色描述",
      },
      rules: {
        name: {
          required: "请输入角色名称",
        },
        description: {
          required: "请输入角色描述",
        }
      }
    }
  },
  employee: {
    table: {
      columns: {
        staffPhoto: "头像",
        username: "昵称",
        mobile: "手机号",
        workNumber: "工号",
        formOfEmployment: "聘用形式",
        departmentName: "部门",
        timeOfEntry: "入职时间",
        operations: "操作",

      },
      actions: {
        view: "查看",
        role: "角色",
        delete: "删除",
        deleteConfirm: "确定要删除吗？"
      },
      pagination: {
        total: "共 {total} 条数据"
      },
      formalOfEmployment: {
        formal: "正式",
        informal: "非正式"
      }
    },
    actions: {
      sendNotification: "群发通知",
      addEmployee: "添加员工",
      importExcel: "excel导入",
      exportExcel: "excel导出"
    },
    search: {
      placeholder: "请输入员工姓名全员搜索"
    },
    messages: {
      deleteSuccess: "删除员工成功",
      deleteError: "删除员工失败",
      updateSuccess: "更新员工成功",
      updateError: "更新员工失败",
      addSuccess: "新增员工成功",
      addError: "新增员工失败"
    },
    detail: {
      title: "员工详情",
      form: {
        fields: {
          username: "姓名",
          workNumber: "工号",
          mobile: "手机",
          department: "部门",
          formOfEmployment: "聘用形式",
          timeOfEntry: "入职时间",
          correctionTime: "转正时间",
          staffPhoto: "员工头像"
        },
        placeholder: {
          username: "请输入员工姓名全称",
          department: "请选择部门",
          formOfEmployment: "请选择聘用形式"
        },
        rules: {
          username: {
            required: "请输入员工姓名",
            length: "员工名字长度为2-4位字符"
          },
          mobile: {
            required: "请输入手机号",
            format: "手机号格式不正确"
          },
          timeOfEntry: {
            required: "请选择入职日期",
            format: "入职日期格式不正确"
          },
          correctionTime: {
            required: "请选择转正日期",
            format: "转正日期格式不正确"
          },
          department: {
            required: "请选择部门"
          },
          formOfEmployment: {
            required: "请选择聘用形式"
          }
        },
        buttons: {
          save: "保存",
          update: "更新"
        }
      },
      upload: {
        text: "上传",
        error: {
          type: "只能上传JPG文件!",
          size: "图片必须小于2MB!",
          upload: "上传失败"
        }
      }
    },
    roleModal: {
      title: "分配角色",
      success: "分配角色成功",
      error: "分配角色失败",
      confirm: "确定",
      cancel: "取消"
    },
    importModal: {
      title: "员工导入",
      downloadTemplate: "下载导入模版",
      dragText: "将文件拖到此处或",
      clickToUpload: "点击上传",
      success: "导入成功",
      error: "导入失败",
      fileType: {
        error: "只能上传 Excel 文件!"
      },
      buttons: {
        confirm: "确定",
        cancel: "取消"
      }
    }
  },
  permission: {
    table: {
      columns: {
        name: "名称",
        key: "标识",
        description: "描述",
        operations: "操作"
      },
      actions: {
        add: "添加",
        edit: "编辑",
        delete: "删除"
      }
    },
    actions: {
      addPermission: "添加权限"
    },
    modal: {
      title: {
        add: "新增权限点",
        edit: "编辑权限点"
      },
      form: {
        fields: {
          name: "权限名称",
          code: "权限标识",
          description: "权限描述",
          enable: "开启"
        },
        placeholder: {
          name: "请输入权限名称",
          code: "请输入权限标识",
          description: "请输入权限描述"
        },
        rules: {
          name: {
            required: "请输入权限名称",
            exists: "权限名称已存在",
            length: "权限名称长度应为2-50个字符"
          },
          code: {
            required: "请输入权限标识",
            exists: "权限标识已存在",
            length: "权限标识长度应为2-50个字符"
          }
        }
      },
      buttons: {
        confirm: "确定",
        cancel: "取消"
      }
    },
    messages: {
      deleteConfirm: "确认删除该数据吗?",
      deleteSuccess: "删除权限成功",
      deleteError: "删除权限失败",
      editSuccess: "编辑权限点成功",
      editError: "编辑权限点失败",
      addSuccess: "新增权限点成功",
      addError: "新增权限点失败"
    }
  }
}
export type LocalMessageType = typeof zhCN;

export default zhCN
