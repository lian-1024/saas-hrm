const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/table-popover-DsuV_5Sm.js","assets/js/index-BRjnmkr0.js","assets/js/vue-vendor-DA6b90QH.js","assets/js/antd-vendor-NhxykF_l.js","assets/js/lodash-vendor-B6NgBDy-.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/skeleton-BcvgInEH.js","assets/js/spin-DsTR0G8T.js","assets/js/index-Bc78yVQl.js","assets/js/department.service-BtZcd_gd.js","assets/js/vue3-count-to.esm-Ct424Pdd.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js","assets/js/modal-BZ3Ot4Gq.js","assets/js/modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js","assets/js/status-DAOyfLNd.js","assets/js/update-attendance-BtrPjA0i.js","assets/js/drawer-CMtv2oBh.js","assets/js/generate-menu-item-EqEeHg1E.js"])))=>i.map(i=>d[i]);
import { i as instance, u as useI18n, a as useRequest, _ as __vitePreload } from "./index-BRjnmkr0.js";
import { d as defineComponent, r as ref, a as reactive, w as watch, a1 as openBlock, a2 as createBlock, a3 as withCtx, u as unref, a7 as useCssVars, c as createVNode, G as createTextVNode, a9 as toDisplayString, af as createBaseVNode, a5 as createElementBlock, ah as renderList, F as Fragment, ac as defineAsyncComponent, h } from "./vue-vendor-DA6b90QH.js";
import { Q as QSkeleton } from "./skeleton-BcvgInEH.js";
import { Q as QSpin } from "./spin-DsTR0G8T.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { D as DepartmentService } from "./department.service-BtZcd_gd.js";
import { C as CountTo } from "./vue3-count-to.esm-Ct424Pdd.js";
import { F as Flex, O as Text, B as Button, Z as Title, $ as CheckboxGroup, a0 as Table, a1 as Checkbox } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const ATTENDANCE_STATUS = {
  1: { text: "正常", color: "#52c41a" },
  // 绿色
  2: { text: "旷工", color: "#ff4d4f" },
  // 红色
  3: { text: "迟到", color: "#faad14" },
  // 橙色
  4: { text: "早退", color: "#faad14" },
  5: { text: "外出", color: "#1890ff" },
  // 蓝色
  6: { text: "出差", color: "#1890ff" },
  7: { text: "年假", color: "#52c41a" },
  8: { text: "事假", color: "#faad14" },
  9: { text: "病假", color: "#faad14" },
  10: { text: "婚假", color: "#52c41a" },
  11: { text: "丧假", color: "#8c8c8c" },
  // 灰色
  12: { text: "产假", color: "#52c41a" },
  13: { text: "奖励产假", color: "#52c41a" },
  14: { text: "陪产假", color: "#52c41a" },
  15: { text: "探亲假", color: "#52c41a" },
  16: { text: "工伤假", color: "#faad14" },
  17: { text: "调休", color: "#52c41a" },
  18: { text: "产检假", color: "#52c41a" },
  19: { text: "流产假", color: "#faad14" },
  20: { text: "长期病假", color: "#faad14" },
  21: { text: "补签", color: "#1890ff" },
  22: { text: "休息", color: "#8c8c8c" },
  99: { text: "-", color: "#8c8c8c" }
};
class AttendanceService {
  static getAttendanceList(params) {
    return instance.get("/attendances", { params });
  }
  static getCompanyList() {
    return instance.get("/company/list");
  }
  static updateCompanyList(data) {
    return instance.put("/company/list", { data });
  }
  static updateAttendance(id, data) {
    return instance.put(`/attendances/${id}`, { data });
  }
  static getAttendancesAdtStatuList(userId) {
    return instance.get(`/attendances/adtStatu/list`, { params: { userId } });
  }
}
const _hoisted_1 = { class: "attendance-middle-checkbox-group" };
const _hoisted_2 = { class: "attendance-table" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AttendancePage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "1da2b90a": `${unref(token).paddingLG}px`,
      "99a89424": unref(token).colorBgContainer,
      "52544120": `${unref(token).borderRadiusLG}px`,
      "ce00044c": unref(token).colorBorderSecondary,
      "0a8336b2": `${unref(token).fontSizeLG}px`,
      "1f43d3ab": `${unref(token).fontSizeXL}px`,
      "26f77cc0": `${unref(token).padding}px`,
      "2fda0c9d": unref(token).colorBgElevated
    }));
    const TablePopover = defineAsyncComponent(
      () => __vitePreload(() => import("./table-popover-DsuV_5Sm.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0)
    );
    const SettingModal = defineAsyncComponent(
      () => __vitePreload(() => import("./modal-BZ3Ot4Gq.js"), true ? __vite__mapDeps([12,9,1,2,3,4,5,13,8,6,14,11]) : void 0)
    );
    const UpdateAttendance = defineAsyncComponent(
      () => __vitePreload(() => import("./update-attendance-BtrPjA0i.js"), true ? __vite__mapDeps([15,13,8,3,2,4,6,1,5,11,7,9,10]) : void 0)
    );
    const CompanyDrawerCompanyDrawer = defineAsyncComponent(
      () => __vitePreload(() => import("./drawer-CMtv2oBh.js").then((n) => n.d), true ? __vite__mapDeps([16,1,2,3,4,5,6,8,17,11]) : void 0)
    );
    const { token } = useAntdToken();
    const { t } = useI18n();
    const departmentOptions = ref([]);
    const selectedDepartmentIds = ref([]);
    const drawerStatus = ref(false);
    const settingModalStatus = ref(false);
    const updateModalOpenStatus = ref(false);
    const baseColumns = [
      {
        title: t("attendance.table.columns.key"),
        dataIndex: "key",
        key: "key",
        width: 80,
        fixed: "left"
      },
      {
        title: t("attendance.table.columns.username"),
        dataIndex: "username",
        key: "username",
        width: 150,
        fixed: "left"
      },
      {
        title: t("attendance.table.columns.workNumber"),
        dataIndex: "workNumber",
        key: "workNumber",
        width: 150,
        fixed: "left"
      },
      {
        title: t("attendance.table.columns.departmentName"),
        dataIndex: "departmentName",
        key: "departmentName",
        width: 150,
        fixed: "left"
      },
      {
        title: t("attendance.table.columns.mobile"),
        dataIndex: "mobile",
        key: "mobile",
        width: 150,
        fixed: "left"
      }
    ];
    const attendanceColumns = ref(baseColumns);
    const employeeDataSource = reactive({
      total: 0,
      rows: []
    });
    const attendanceInfo = reactive({
      monthOfReport: 1,
      tobeTaskCount: 0,
      dayOfMonth: 0,
      yearOfReport: 2026,
      attendanceRecord: []
    });
    const attendancePagingParams = reactive({
      page: 1,
      pagesize: 10,
      deptID: selectedDepartmentIds.value.join(",")
    });
    const updateAttendanceProps = reactive({
      day: "",
      adtStatu: 0,
      userId: 0,
      departmentId: 0
    });
    const formatTableData = (records) => {
      const { yearOfReport, monthOfReport } = attendanceInfo;
      return records.map((record) => {
        const baseInfo = {
          key: record.id,
          id: record.id,
          departmentId: record.departmentId,
          departmentName: record.departmentName,
          mobile: record.mobile,
          username: record.username,
          workNumber: record.workNumber,
          attendanceRecord: record.attendanceRecord
        };
        const attendanceData = record.attendanceRecord.reduce(
          (acc, curr) => {
            const day = parseInt(curr.day.slice(6));
            return {
              ...acc,
              [`${yearOfReport}/${monthOfReport}/${day}`]: curr.adtStatu
            };
          },
          {}
        );
        return {
          ...baseInfo,
          ...attendanceData
        };
      });
    };
    const generateDateColumns = (days) => {
      const dateColumns = [];
      const { yearOfReport, monthOfReport } = attendanceInfo;
      for (let day = 1; day <= days; day++) {
        const date = `${yearOfReport}/${monthOfReport}/${day}`;
        dateColumns.push({
          title: `${monthOfReport}/${day}`,
          dataIndex: date,
          key: date,
          width: 80,
          align: "center",
          customRender: ({ text, record }) => {
            const attendanceRecord = record.attendanceRecord.find((item) => item.day === date);
            const status = ATTENDANCE_STATUS[text];
            if (!status) return text;
            return h(TablePopover, {
              username: record.username,
              yearOfReport,
              monthOfReport,
              dayOfReport: day,
              adtStatu: text,
              adtInTime: attendanceRecord == null ? void 0 : attendanceRecord.adtInTime,
              adtOutTime: attendanceRecord == null ? void 0 : attendanceRecord.adtOutTime,
              adtInPlace: attendanceRecord == null ? void 0 : attendanceRecord.adtInPlace,
              adtOutPlace: attendanceRecord == null ? void 0 : attendanceRecord.adtOutPlace,
              onClick: () => {
                updateAttendanceProps.userId = record.id ?? 0;
                updateAttendanceProps.departmentId = record.departmentId;
                updateAttendanceProps.day = date;
                updateAttendanceProps.adtStatu = text;
                updateModalOpenStatus.value = true;
              }
            });
          }
        });
      }
      return dateColumns;
    };
    const handleChangeTablePagination = (page, pageSize) => {
      Object.assign(attendancePagingParams, { page, pagesize: pageSize });
      getAttendanceList(attendancePagingParams);
    };
    const { run: getAttendanceList, loading: getAttendanceListLoading } = useRequest(
      AttendanceService.getAttendanceList,
      {
        onSuccess: ({ data }) => {
          const {
            yearOfReport,
            monthOfReport,
            tobeTaskCount,
            data: { rows }
          } = data;
          Object.assign(attendanceInfo, {
            tobeTaskCount,
            dayOfMonth: new Date(yearOfReport, monthOfReport, 0).getDate(),
            attendanceRecord: rows,
            yearOfReport,
            monthOfReport
          });
          employeeDataSource.rows = formatTableData(rows);
          employeeDataSource.total = data.data.total;
        }
      }
    );
    const { loading: getDepartmentListLoading } = useRequest(
      DepartmentService.getCompanyDepartmentList,
      {
        onSuccess: ({ data }) => {
          departmentOptions.value = data.map((item) => ({
            label: item.name,
            value: item.id
          }));
        }
      }
    );
    watch(
      () => attendanceInfo.dayOfMonth,
      (newDays) => {
        if (newDays > 0) {
          attendanceColumns.value = [...baseColumns, ...generateDateColumns(newDays)];
        }
      }
    );
    watch(
      () => selectedDepartmentIds.value,
      () => {
        attendancePagingParams.deptID = selectedDepartmentIds.value.join(",");
        getAttendanceList(attendancePagingParams);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "attendance-wrapper h-full",
        vertical: "",
        gap: "middle"
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            justify: "space-between",
            align: "center",
            class: "attendance-top"
          }, {
            default: withCtx(() => [
              createVNode(unref(Flex), {
                vertical: "",
                align: "center",
                gap: "small"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Text), { class: "attendance-top-title" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.top.unprocessed")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(QSkeleton), {
                    paragraph: false,
                    active: "",
                    loading: unref(getAttendanceListLoading)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CountTo), {
                        "start-val": 0,
                        "end-val": attendanceInfo.tobeTaskCount,
                        duration: 3e3,
                        class: "attendance-top-total"
                      }, null, 8, ["end-val"])
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }),
              createVNode(unref(Flex), { gap: "middle" }, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    onClick: _cache[0] || (_cache[0] = ($event) => drawerStatus.value = true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.actions.clockInRange")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    type: "primary",
                    onClick: _cache[1] || (_cache[1] = ($event) => settingModalStatus.value = true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.actions.settings")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(Flex), {
            class: "attendance-middle",
            gap: "small",
            align: "flex-start"
          }, {
            default: withCtx(() => [
              createVNode(unref(Title), {
                class: "attendance-middle-label",
                level: 5
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.filter.department")) + ": ", 1)
                ]),
                _: 1
              }),
              createVNode(unref(QSkeleton), {
                active: "",
                title: false,
                loading: unref(getDepartmentListLoading),
                paragraph: {
                  rows: 2
                }
              }, {
                default: withCtx(() => [
                  createVNode(unref(CheckboxGroup), {
                    value: selectedDepartmentIds.value,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => selectedDepartmentIds.value = $event),
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(departmentOptions.value, (option) => {
                          return openBlock(), createBlock(unref(Checkbox), {
                            key: option.value.toString(),
                            value: option.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(option.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(unref(QSpin), { spinning: unref(getAttendanceListLoading) }, {
              default: withCtx(() => [
                createVNode(unref(Table), {
                  pagination: {
                    position: ["bottomCenter"],
                    pageSize: attendancePagingParams.pagesize,
                    total: employeeDataSource.total,
                    current: attendancePagingParams.page,
                    onChange: handleChangeTablePagination,
                    showTotal: (total) => unref(t)("attendance.table.pagination.total", { total })
                  },
                  columns: attendanceColumns.value,
                  "data-source": employeeDataSource.rows,
                  scroll: { x: "max-content" },
                  bordered: ""
                }, null, 8, ["pagination", "columns", "data-source"])
              ]),
              _: 1
            }, 8, ["spinning"])
          ]),
          createVNode(unref(CompanyDrawerCompanyDrawer), {
            open: drawerStatus.value,
            "onUpdate:open": _cache[3] || (_cache[3] = ($event) => drawerStatus.value = $event)
          }, null, 8, ["open"]),
          createVNode(unref(SettingModal), {
            open: settingModalStatus.value,
            "onUpdate:open": _cache[4] || (_cache[4] = ($event) => settingModalStatus.value = $event)
          }, null, 8, ["open"]),
          createVNode(unref(UpdateAttendance), {
            day: updateAttendanceProps.day,
            adtStatu: updateAttendanceProps.adtStatu,
            userId: updateAttendanceProps.userId,
            departmentId: updateAttendanceProps.departmentId,
            open: updateModalOpenStatus.value,
            "onUpdate:open": _cache[5] || (_cache[5] = ($event) => updateModalOpenStatus.value = $event),
            onUpdate: _cache[6] || (_cache[6] = ($event) => unref(getAttendanceList)(attendancePagingParams))
          }, null, 8, ["day", "adtStatu", "userId", "departmentId", "open"])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e72160cb"]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  ATTENDANCE_STATUS as A,
  AttendanceService as a,
  index$1 as i
};
