const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/role-modal-BEVG6cDG.js","assets/js/employee.service-8UfBD8Jx.js","assets/js/index-x-LQkY-F.js","assets/js/vue-vendor-C3i0i51a.js","assets/js/antd-vendor-D4nQN1Zz.js","assets/js/lodash-vendor-DpYuFiFB.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/role.service-u1e2vSi7.js","assets/js/modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js","assets/js/index-BheweVra.js","assets/js/spin-DFBmYiCr.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js","assets/js/import-excel-modal-2MU8joKO.js","assets/js/avatar.vue_vue_type_script_setup_true_lang-ByGzOMG-.js","assets/js/skeleton-LDWoY3Lm.js","assets/js/department.service-BHm1UbAi.js","assets/js/department-BQT5hIqY.js","assets/js/mass-notification-v_E9BXva.js","assets/js/message-DvY9wwDO.js"])))=>i.map(i=>d[i]);
import { d as useTheme, u as useI18n, a as useRequest, r as router, _ as __vitePreload } from "./index-x-LQkY-F.js";
import { d as defineComponent, s as shallowRef, a as reactive, r as ref, j as computed, al as shallowReactive, w as watch, o as onMounted, a2 as openBlock, a3 as createBlock, a4 as withCtx, u as unref, a8 as useCssVars, c as createVNode, am as createCommentVNode, G as createTextVNode, aa as toDisplayString, a6 as createElementBlock, F as Fragment, ad as defineAsyncComponent } from "./vue-vendor-C3i0i51a.js";
import { _ as _sfc_main$1 } from "./avatar.vue_vue_type_script_setup_true_lang-ByGzOMG-.js";
import { Q as QSkeleton } from "./skeleton-LDWoY3Lm.js";
import { Q as QSpin } from "./spin-DFBmYiCr.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { D as DepartmentService } from "./department.service-BHm1UbAi.js";
import { F as FormOfEmployment, E as EmployeeService } from "./employee.service-8UfBD8Jx.js";
import { D as DepartmentTree } from "./department-BQT5hIqY.js";
import { af as commonjsGlobal, j as getDefaultExportFromCjs, F as Flex, h as api, ag as InputSearch, ac as Tree, B as Button, a0 as Table, O as Text, ah as Popconfirm } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
var FileSaver_min$1 = { exports: {} };
var FileSaver_min = FileSaver_min$1.exports;
var hasRequiredFileSaver_min;
function requireFileSaver_min() {
  if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
  hasRequiredFileSaver_min = 1;
  (function(module, exports) {
    (function(a, b) {
      b();
    })(FileSaver_min, function() {
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2)) c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, module.exports = g;
    });
  })(FileSaver_min$1);
  return FileSaver_min$1.exports;
}
var FileSaver_minExports = requireFileSaver_min();
const FileSaver = /* @__PURE__ */ getDefaultExportFromCjs(FileSaver_minExports);
const actionsSize = "middle";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "EmployeePage"
  },
  __name: "index",
  setup(__props) {
    var _a, _b;
    useCssVars((_ctx) => ({
      "ab3b1baa": `${unref(token).borderRadiusLG}px`,
      "0731ff6f": unref(token).colorBorderSecondary,
      "033a90e0": `${unref(token).paddingLG}px`,
      "7f406bfa": unref(token).colorBgContainer,
      "6696f8f9": unref(isDark) && `transparent`,
      "762dfa42": unref(isDark) ? unref(token).colorPrimary : unref(token).colorPrimaryHover
    }));
    const { isDark } = useTheme();
    const { token } = useAntdToken();
    const { t } = useI18n();
    const RoleModal = defineAsyncComponent(() => __vitePreload(() => import("./role-modal-BEVG6cDG.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
    const ImportExcelModal = defineAsyncComponent(() => __vitePreload(() => import("./import-excel-modal-2MU8joKO.js"), true ? __vite__mapDeps([12,3,1,2,4,5,6,8,9,11,13,14,10,15,16]) : void 0));
    const MassNotificationModal = defineAsyncComponent(() => __vitePreload(() => import("./mass-notification-v_E9BXva.js"), true ? __vite__mapDeps([17,3,8,9,4,5,2,6,18,1,11]) : void 0));
    const departmentTree = shallowRef();
    const pagingEmployeeParams = reactive({
      departmentId: ((_b = (_a = departmentTree.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.id) ?? 1,
      keyword: "",
      page: 1,
      pagesize: 10
    });
    const importExcelModalStatus = ref(false);
    const columns = computed(() => [
      {
        title: t("employee.table.columns.staffPhoto"),
        dataIndex: "staffPhoto",
        key: "staffPhoto",
        width: 80
      },
      {
        title: t("employee.table.columns.username"),
        dataIndex: "username",
        key: "username"
      },
      {
        title: t("employee.table.columns.mobile"),
        dataIndex: "mobile",
        key: "mobile"
      },
      {
        title: t("employee.table.columns.workNumber"),
        dataIndex: "workNumber",
        key: "workNumber"
      },
      {
        title: t("employee.table.columns.formOfEmployment"),
        dataIndex: "formOfEmployment",
        key: "formOfEmployment"
      },
      {
        title: t("employee.table.columns.departmentName"),
        dataIndex: "departmentName",
        key: "departmentName"
      },
      {
        title: t("employee.table.columns.timeOfEntry"),
        dataIndex: "timeOfEntry",
        key: "timeOfEntry"
      },
      {
        title: t("employee.table.columns.operations"),
        key: "operations",
        fixed: "right",
        width: 180
      }
    ]);
    const employeeTableDataSource = shallowReactive({
      total: 0,
      rows: []
    });
    const giveRoleModalStatus = ref(false);
    const currentSelectedEmployee = ref(null);
    const tablePaginationPosition = ["bottomRight"];
    const tablePaginationPageSizeOptions = ["5", "10", "20", "30", "40", "50"];
    const openGiveRoleModal = (employeeId) => {
      giveRoleModalStatus.value = true;
      currentSelectedEmployee.value = employeeId;
    };
    const { loading: getDepartmentLoading, run: getCompanyDepartmentList } = useRequest(
      DepartmentService.getCompanyDepartmentList,
      {
        manual: true,
        onSuccess: ({ data }) => {
          departmentTree.value = DepartmentTree.toTree(data);
        }
      }
    );
    const { loading: getEmployeeListLoading, run: getEmployeeList } = useRequest(
      () => EmployeeService.getEmployeeList(pagingEmployeeParams),
      {
        manual: true,
        onSuccess: ({ data }) => {
          employeeTableDataSource.rows = data.rows.map((item) => ({ ...item, key: item.id }));
          employeeTableDataSource.total = data.total;
        }
      }
    );
    const { run: deleteEmployee } = useRequest(EmployeeService.deleteEmployee, {
      manual: true,
      onSuccess: () => {
        api.success(t("employee.messages.deleteSuccess"));
        getEmployeeList(pagingEmployeeParams);
      },
      onError: (error) => {
        if (error.message) {
          api.error(error.message);
        } else {
          api.error(t("employee.messages.deleteError"));
        }
      }
    });
    const { run: exportEmployeeList, loading: exportEmployeeListLoading } = useRequest(
      EmployeeService.exportEmployeeList,
      {
        manual: true,
        onSuccess: (res) => {
          console.log(res);
          FileSaver.saveAs(res.data, "员工列表.xlsx");
        }
      }
    );
    const handleViewEmployee = (employeeId) => {
      router.push(`/employee/detail/${employeeId}`);
    };
    const handleAddEmployee = () => {
      router.push(`/employee/detail`);
    };
    const handleSelectDepartment = (selectedKeys) => {
      pagingEmployeeParams.departmentId = Number(selectedKeys[0]);
    };
    const handleChangeTablePagination = (page, pageSize) => {
      pagingEmployeeParams.page = page;
      pagingEmployeeParams.pagesize = pageSize;
      getEmployeeList(pagingEmployeeParams);
    };
    watch(
      () => pagingEmployeeParams.departmentId,
      (newVal) => {
        getEmployeeList(pagingEmployeeParams);
      }
    );
    onMounted(async () => {
      await Promise.all([getCompanyDepartmentList(), getEmployeeList()]);
    });
    const getFormalOfEmployment = (formOfEmployment) => formalOfEmploymentMap[formOfEmployment].value;
    const formalOfEmploymentMap = {
      [FormOfEmployment.Formal]: computed(() => t("employee.table.formalOfEmployment.formal")),
      [FormOfEmployment.InFormal]: computed(() => t("employee.table.formalOfEmployment.informal"))
    };
    const selectedEmployees = ref([]);
    const tableRowSelection = ref({
      onChange(selectedRowKeys, selectedRows) {
        selectedEmployees.value = selectedRows.map((item) => ({
          id: item.id,
          username: item.username
        }));
      }
    });
    const massNotificationModalStatus = ref(false);
    const openMassNotificationModal = () => {
      selectedEmployees.value.length > 0 ? massNotificationModalStatus.value = true : api.warning(t("employee.messages.noSelectedEmployee"));
      console.log(massNotificationModalStatus.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        gap: "small",
        class: "h-full employee-wrapper"
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            vertical: "",
            class: "employee-left",
            gap: "middle"
          }, {
            default: withCtx(() => [
              createVNode(unref(InputSearch), {
                onSearch: _cache[0] || (_cache[0] = ($event) => unref(getEmployeeList)(pagingEmployeeParams)),
                placeholder: unref(t)("employee.search.placeholder"),
                value: pagingEmployeeParams.keyword,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => pagingEmployeeParams.keyword = $event)
              }, null, 8, ["placeholder", "value"]),
              createVNode(unref(QSkeleton), {
                loading: unref(getDepartmentLoading),
                active: "",
                title: false,
                paragraph: {
                  rows: 16
                }
              }, {
                default: withCtx(() => [
                  !unref(getDepartmentLoading) ? (openBlock(), createBlock(unref(Tree), {
                    key: 0,
                    class: "draggable-tree h-full",
                    draggable: "",
                    "block-node": "",
                    "tree-data": departmentTree.value,
                    "default-expand-all": "",
                    onSelect: handleSelectDepartment
                  }, null, 8, ["tree-data"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          }),
          createVNode(unref(Flex), {
            vertical: "",
            gap: "small",
            class: "flex-1 employee-right h-full"
          }, {
            default: withCtx(() => [
              createVNode(unref(Flex), {
                justify: "space-between",
                class: "employee-right-actions"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    size: actionsSize,
                    onClick: openMassNotificationModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("employee.actions.sendNotification")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Flex), { gap: "small" }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), {
                        type: "primary",
                        size: actionsSize,
                        onClick: _cache[2] || (_cache[2] = () => handleAddEmployee())
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("employee.actions.addEmployee")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), {
                        size: actionsSize,
                        onClick: _cache[3] || (_cache[3] = ($event) => importExcelModalStatus.value = true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("employee.actions.importExcel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Button), {
                        loading: unref(exportEmployeeListLoading),
                        size: actionsSize,
                        onClick: unref(exportEmployeeList)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("employee.actions.exportExcel")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(QSpin), {
                spinning: unref(getEmployeeListLoading),
                "wrapper-class-name": "flex-1 h-full"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Table), {
                    pagination: {
                      position: tablePaginationPosition,
                      pageSizeOptions: tablePaginationPageSizeOptions,
                      total: unref(employeeTableDataSource).total,
                      current: pagingEmployeeParams.page,
                      onChange: handleChangeTablePagination,
                      showTotal: (total) => unref(t)("employee.table.pagination.total", { total })
                    },
                    class: "flex-1 h-full employee-right-table",
                    columns: columns.value,
                    "data-source": unref(employeeTableDataSource).rows,
                    "row-selection": tableRowSelection.value
                  }, {
                    headerCell: withCtx(({ title }) => [
                      createVNode(unref(Text), {
                        type: "secondary",
                        level: 5,
                        class: "table-header-title"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    bodyCell: withCtx(({ column, record }) => [
                      column.key === "staffPhoto" ? (openBlock(), createBlock(unref(_sfc_main$1), {
                        key: 0,
                        src: record.staffPhoto
                      }, null, 8, ["src"])) : column.key === "formOfEmployment" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(getFormalOfEmployment(record.formOfEmployment)), 1)
                      ], 64)) : column.key === "operations" ? (openBlock(), createBlock(unref(Flex), { key: 2 }, {
                        default: withCtx(() => [
                          createVNode(unref(Button), {
                            type: "link",
                            size: "small",
                            onClick: ($event) => handleViewEmployee(record.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("employee.table.actions.view")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(unref(Button), {
                            type: "link",
                            size: "small",
                            onClick: ($event) => openGiveRoleModal(record.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("employee.table.actions.role")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(unref(Popconfirm), {
                            onConfirm: ($event) => unref(deleteEmployee)(record.key),
                            title: unref(t)("employee.table.actions.deleteConfirm")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Button), {
                                type: "link",
                                size: "small",
                                danger: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("employee.table.actions.delete")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onConfirm", "title"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["pagination", "columns", "data-source", "row-selection"])
                ]),
                _: 1
              }, 8, ["spinning"]),
              createVNode(unref(RoleModal), {
                open: giveRoleModalStatus.value,
                "onUpdate:open": _cache[4] || (_cache[4] = ($event) => giveRoleModalStatus.value = $event),
                "employee-id": currentSelectedEmployee.value
              }, null, 8, ["open", "employee-id"]),
              createVNode(unref(ImportExcelModal), {
                open: importExcelModalStatus.value,
                "onUpdate:open": _cache[5] || (_cache[5] = ($event) => importExcelModalStatus.value = $event)
              }, null, 8, ["open"]),
              createVNode(unref(MassNotificationModal), {
                open: massNotificationModalStatus.value,
                "onUpdate:open": _cache[6] || (_cache[6] = ($event) => massNotificationModalStatus.value = $event),
                employees: selectedEmployees.value
              }, null, 8, ["open", "employees"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81353ca5"]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  FileSaver as F,
  index$1 as i
};
