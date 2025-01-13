import { D as DepartmentService } from "./department.service-BHm1UbAi.js";
import { _ as _sfc_main$5 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { Q as QSkeleton } from "./skeleton-LDWoY3Lm.js";
import { i as instance, u as useI18n, a as useRequest } from "./index-x-LQkY-F.js";
import { h as api, ak as FormItem, an as Select, F as Flex, ao as DatePicker, aj as Form, as as Row, at as Col, O as Text, S as Switch, al as Input, a0 as Table, a1 as Checkbox, aD as TimePicker, aE as Tooltip, aF as InputNumber, B as Button, v as Tabs, w as TabPane } from "./antd-vendor-D4nQN1Zz.js";
import { d as defineComponent, r as ref, a as reactive, j as computed, w as watch, o as onMounted, a2 as openBlock, a3 as createBlock, a4 as withCtx, c as createVNode, u as unref, G as createTextVNode, a6 as createElementBlock, F as Fragment, ai as renderList, aa as toDisplayString, am as createCommentVNode, ag as createBaseVNode, af as useModel, a9 as resolveDynamicComponent } from "./vue-vendor-C3i0i51a.js";
import { E as EnableStatus } from "./status-DAOyfLNd.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-BheweVra.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
class AttendanceSettingService {
  static getAttendanceSettingById(departmentId) {
    return instance.get("/cfg/atte/item", { params: { departmentId } });
  }
  static updateAttendanceSetting(data) {
    return instance.put("/cfg/atte", { data });
  }
  static getLeaveSettingByDepartmentId(departmentId) {
    return instance.get("/cfg/leave/list", { params: { departmentId } });
  }
  static updateLeaveSetting(data) {
    return instance.post("/cfg/leave", { data });
  }
  static getDeductionSettingByDepartmentId(departmentId) {
    return instance.get("/cfg/ded/list", { params: { departmentId } });
  }
  static updateDeductionSetting(data) {
    return instance.post("/cfg/deduction", { data });
  }
  static getOverTimeSettingByDepartmentId(departmentId) {
    return instance.get("/cfg/extDuty/item", { params: { departmentId } });
  }
  static updateOverTimeSetting(data) {
    return instance.put("/cfg/extDuty", { data });
  }
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "TabAttendance"
  },
  __name: "attendance",
  props: {
    departmentOptions: {}
  },
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const props = __props;
    const formRules = {
      departmentId: [
        { required: true, message: t("attendance.settings.attendance.rules.selectDepartment") }
      ]
    };
    const formRef = ref();
    const selectedDepartmentId = ref(1);
    const formState = reactive({
      morningStartTime: "",
      morningEndTime: "",
      afternoonStartTime: "",
      afternoonEndTime: "",
      departmentId: selectedDepartmentId.value,
      id: 1,
      companyId: 1
    });
    const formLabelCol = { span: 4 };
    const formWrapperCol = { span: 16 };
    const { run: getAttendanceSettingById, loading: getAttendanceSettingLoading } = useRequest(
      AttendanceSettingService.getAttendanceSettingById,
      {
        manual: true,
        onSuccess: ({ data }) => {
          Object.assign(formState, data);
        },
        onError: (message2) => {
          console.log("message", message2);
        }
      }
    );
    const { run: updateAttendanceSetting } = useRequest(
      AttendanceSettingService.updateAttendanceSetting,
      {
        manual: true,
        onSuccess: () => {
          var _a;
          api.success(t("attendance.settings.attendance.messages.updateSuccess"));
          (_a = formRef.value) == null ? void 0 : _a.resetFields();
        },
        onError: (error) => {
          api.error(t("attendance.settings.attendance.messages.updateError"));
        }
      }
    );
    const validateDate = computed(() => {
      return Boolean(
        formState.morningStartTime && formState.morningEndTime && formState.afternoonStartTime && formState.afternoonEndTime
      );
    });
    watch(
      () => selectedDepartmentId.value,
      (newVal) => {
        formState.departmentId = newVal;
        getAttendanceSettingById(newVal);
      }
    );
    onMounted(() => {
      if (!props.departmentOptions) return;
      const departmentId = props.departmentOptions[0].value || 0;
      selectedDepartmentId.value = +departmentId;
      getAttendanceSettingById(selectedDepartmentId.value);
    });
    const handleSubmit = async () => {
      if (!formRef.value) return;
      if (!validateDate.value) return;
      await formRef.value.validateFields().then(() => updateAttendanceSetting({ ...formState, companyId: +formState.companyId }));
    };
    __expose({
      handleSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Form), {
        ref_key: "formRef",
        ref: formRef,
        "label-col": formLabelCol,
        model: formState,
        "wrapper-col": formWrapperCol,
        rules: formRules
      }, {
        default: withCtx(() => [
          createVNode(unref(FormItem), {
            label: unref(t)("attendance.settings.attendance.department"),
            model: formState,
            name: "departmentId"
          }, {
            default: withCtx(() => [
              createVNode(unref(Select), {
                options: _ctx.departmentOptions,
                value: selectedDepartmentId.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedDepartmentId.value = $event)
              }, null, 8, ["options", "value"])
            ]),
            _: 1
          }, 8, ["label", "model"]),
          createVNode(unref(QSkeleton), {
            title: false,
            active: "",
            loading: unref(getAttendanceSettingLoading),
            paragraph: {
              rows: 8
            }
          }, {
            default: withCtx(() => [
              createVNode(unref(FormItem), {
                label: unref(t)("attendance.settings.attendance.attendanceTime"),
                "validate-status": validateDate.value ? "success" : "error",
                help: validateDate.value ? "" : unref(t)("attendance.settings.attendance.rules.selectDate")
              }, {
                default: withCtx(() => [
                  createVNode(unref(Flex), {
                    gap: "middle",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Flex), {
                        gap: "small",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            picker: "time",
                            "value-format": "HH:mm:ss",
                            value: formState.morningStartTime,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formState.morningStartTime = $event)
                          }, null, 8, ["value"]),
                          _cache[5] || (_cache[5] = createTextVNode(" - ")),
                          createVNode(unref(DatePicker), {
                            picker: "time",
                            "value-format": "HH:mm:ss",
                            value: formState.morningEndTime,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formState.morningEndTime = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Flex), {
                        gap: "small",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            picker: "time",
                            "value-format": "HH:mm:ss",
                            value: formState.afternoonStartTime,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => formState.afternoonStartTime = $event)
                          }, null, 8, ["value"]),
                          _cache[6] || (_cache[6] = createTextVNode(" - ")),
                          createVNode(unref(DatePicker), {
                            picker: "time",
                            "value-format": "HH:mm:ss",
                            value: formState.afternoonEndTime,
                            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => formState.afternoonEndTime = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label", "validate-status", "help"])
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "TabDeduction"
  },
  __name: "deduction",
  props: {
    departmentOptions: {}
  },
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const DeductionNameMap = {
      [
        "51000"
        /* BE_LATE */
      ]: t("attendance.settings.deduction.deductionType.beLate"),
      [
        "52000"
        /* LEAVE_EARLY */
      ]: t("attendance.settings.deduction.deductionType.leaveEarly"),
      [
        "53000"
        /* ABSENTEEISM */
      ]: t("attendance.settings.deduction.deductionType.absenteeism")
    };
    const props = __props;
    const selectedDepartmentId = ref();
    const deductionSetting = ref([]);
    const { run: getDeductionSettingByDepartmentId, loading: getDeductionSettingByDepartmentLoading } = useRequest(AttendanceSettingService.getDeductionSettingByDepartmentId, {
      manual: true,
      onSuccess: ({ data }) => {
        deductionSetting.value = data;
      }
    });
    onMounted(() => {
      if (!props.departmentOptions) return;
      const departmentId = props.departmentOptions[0].value || 0;
      selectedDepartmentId.value = +departmentId;
      getDeductionSettingByDepartmentId(selectedDepartmentId.value);
    });
    const changeDeductionEnable = (checked, dedTypeCode) => deductionSetting.value.forEach(
      (item) => item.dedTypeCode === dedTypeCode && (item.isEnable = checked)
    );
    const handleSwitchChange = (checked, record) => {
      const afterStatus = checked ? EnableStatus.ENABLED : EnableStatus.DISABLED;
      changeDeductionEnable(afterStatus, record.dedTypeCode);
    };
    const deductionText = (deductionName) => DeductionNameMap[deductionName];
    const { run: updateDeductionSetting } = useRequest(
      AttendanceSettingService.updateDeductionSetting,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("attendance.settings.deduction.messages.updateSuccess"));
        },
        onError: () => {
          api.error(t("attendance.settings.deduction.messages.updateError"));
        }
      }
    );
    const handleSubmit = async () => {
      await updateDeductionSetting(deductionSetting.value);
    };
    watch(
      () => selectedDepartmentId.value,
      (newVal) => {
        getDeductionSettingByDepartmentId(newVal);
      }
    );
    __expose({
      handleSubmit
    });
    const formLabelCol = { span: 4 };
    const formWrapperCol = { span: 16 };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Form), {
        "label-col": formLabelCol,
        "wrapper-col": formWrapperCol
      }, {
        default: withCtx(() => [
          createVNode(unref(FormItem), {
            label: unref(t)("attendance.settings.deduction.department"),
            name: "departmentId"
          }, {
            default: withCtx(() => [
              createVNode(unref(Select), {
                options: _ctx.departmentOptions,
                value: selectedDepartmentId.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedDepartmentId.value = $event)
              }, null, 8, ["options", "value"])
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(unref(QSkeleton), {
            title: false,
            active: "",
            loading: unref(getDeductionSettingByDepartmentLoading),
            paragraph: {
              rows: 8
            }
          }, {
            default: withCtx(() => [
              createVNode(unref(FormItem), { class: "deduction-content" }, {
                default: withCtx(() => [
                  createVNode(unref(Flex), { vertical: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(deductionSetting.value, (item) => {
                        return openBlock(), createBlock(unref(Flex), {
                          vertical: "",
                          gap: "large",
                          key: item.id
                        }, {
                          default: withCtx(() => [
                            !Boolean(+item.isAbsenteeism) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), { span: "4" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + toDisplayString(unref(t)("attendance.settings.deduction.deduction")), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Switch), {
                                            checked: Boolean(item.isEnable),
                                            onChange: (checked) => handleSwitchChange(Boolean(checked), item)
                                          }, null, 8, ["checked", "onChange"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "8",
                                    offset: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + "≤", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.periodLowerLimit,
                                            "onUpdate:value": ($event) => item.periodLowerLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.minutes")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "14",
                                    offset: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + "≤", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.timesLowerLimit,
                                            "onUpdate:value": ($event) => item.timesLowerLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.times")) + "," + toDisplayString(unref(t)("attendance.settings.deduction.perTime")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.dedAmonutLowerLimit,
                                            "onUpdate:value": ($event) => item.dedAmonutLowerLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.yuan")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "14",
                                    offset: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + ">", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            disabled: "",
                                            class: "deduction-input",
                                            value: item.timesUpperLimit,
                                            "onUpdate:value": ($event) => item.timesUpperLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.times")) + "," + toDisplayString(unref(t)("attendance.settings.deduction.perTime")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.dedAmonutUpperLimit,
                                            "onUpdate:value": ($event) => item.dedAmonutUpperLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.yuan")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "8",
                                    offset: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + ">", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            disabled: "",
                                            class: "deduction-input",
                                            value: item.periodUpperLimit,
                                            "onUpdate:value": ($event) => item.periodUpperLimit = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.minutes")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "14",
                                    offset: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + "≤", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            disabled: "",
                                            class: "deduction-input",
                                            value: item.absenceTimesUpperLimt,
                                            "onUpdate:value": ($event) => item.absenceTimesUpperLimt = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.times")) + "," + toDisplayString(unref(t)("attendance.settings.deduction.perTime")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.absenceDays,
                                            "onUpdate:value": ($event) => item.absenceDays = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("attendance.settings.deduction.days")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), { span: "4" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + "扣款", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Switch), {
                                            checked: Boolean(item.isEnable),
                                            onChange: (checked) => handleSwitchChange(Boolean(checked), item)
                                          }, null, 8, ["checked", "onChange"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Row), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Col), {
                                    span: "10",
                                    offset: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Flex), {
                                        align: "center",
                                        gap: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deductionText(item.dedTypeCode)) + "按", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(Input), {
                                            class: "deduction-input",
                                            value: item.fineSalaryMultiples,
                                            "onUpdate:value": ($event) => item.fineSalaryMultiples = $event,
                                            type: "number"
                                          }, null, 8, ["value", "onUpdate:value"]),
                                          createVNode(unref(Text), { class: "deduction-text" }, {
                                            default: withCtx(() => _cache[1] || (_cache[1] = [
                                              createTextVNode("部工资处罚")
                                            ])),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ], 64))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      });
    };
  }
});
const TabDeduction = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2860b786"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "leave",
  props: {
    departmentOptions: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { t } = useI18n();
    const leaveTypeMap = {
      "60000": "年假",
      "60100": "事假",
      "60200": "病假",
      "60300": "婚假",
      "60400": "丧假",
      "60500": "产假",
      "60600": "奖励产假",
      "60700": "陪产假",
      "60800": "探亲假",
      "60900": "工伤假",
      "61000": "调休假",
      "61100": "产检假",
      "61200": "流产假",
      "61300": "长期病假"
    };
    const leaveTypeColumns = [
      {
        key: "leaveType"
      },
      {
        title: t("attendance.settings.leave.name"),
        dataIndex: "name",
        key: "name"
      },
      {
        title: t("attendance.settings.leave.isEnabled"),
        dataIndex: "isEnable",
        key: "isEnable"
      }
    ];
    const selectedDepartmentId = ref();
    const leaveSettingList = ref();
    const convertToLeaveSettingList = (data) => data.map(({ companyId, ...rest }) => ({
      ...rest,
      name: leaveTypeMap[rest.leaveType]
    }));
    const { run: getLeaveSettingByDepartmentId, loading: getLeaveSettingByDepartmentIdLoading } = useRequest(AttendanceSettingService.getLeaveSettingByDepartmentId, {
      manual: true,
      onSuccess: ({ data }) => {
        console.log(data);
        leaveSettingList.value = convertToLeaveSettingList(data);
      }
    });
    const handleSwitchChange = (checked, record) => {
      record.isEnable = checked ? EnableStatus.ENABLED : EnableStatus.DISABLED;
    };
    const { run: updateLeaveSetting } = useRequest(AttendanceSettingService.updateLeaveSetting, {
      manual: true,
      onSuccess: () => {
        api.success(t("attendance.settings.leave.messages.updateSuccess"));
      },
      onError: () => {
        api.error(t("attendance.settings.leave.messages.updateError"));
      }
    });
    const handleSubmit = async () => {
      console.log(leaveSettingList.value);
      await updateLeaveSetting(leaveSettingList.value);
    };
    watch(selectedDepartmentId, (newValue) => {
      getLeaveSettingByDepartmentId(newValue);
    });
    __expose({
      handleSubmit
    });
    onMounted(() => {
      if (!props.departmentOptions) return;
      const departmentId = props.departmentOptions[0].value || 0;
      selectedDepartmentId.value = +departmentId;
      getLeaveSettingByDepartmentId(selectedDepartmentId.value);
    });
    const formLabelCol = { span: 4 };
    const formWrapperCol = { span: 16 };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Form), {
          "label-col": formLabelCol,
          "wrapper-col": formWrapperCol
        }, {
          default: withCtx(() => [
            createVNode(unref(FormItem), {
              label: unref(t)("attendance.settings.leave.department"),
              name: "departmentId"
            }, {
              default: withCtx(() => [
                createVNode(unref(Select), {
                  value: selectedDepartmentId.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedDepartmentId.value = $event),
                  options: _ctx.departmentOptions
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }),
        createVNode(unref(QSkeleton), {
          title: false,
          active: "",
          loading: unref(getLeaveSettingByDepartmentIdLoading),
          paragraph: {
            rows: 8
          }
        }, {
          default: withCtx(() => [
            createVNode(unref(Table), {
              pagination: false,
              columns: leaveTypeColumns,
              "data-source": leaveSettingList.value
            }, {
              bodyCell: withCtx(({ column, record }) => [
                column.dataIndex === "isEnable" ? (openBlock(), createBlock(unref(Switch), {
                  key: 0,
                  checked: Boolean(record.isEnable),
                  onChange: (checked) => handleSwitchChange(Boolean(checked), record)
                }, null, 8, ["checked", "onChange"])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["data-source"])
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "numeric-input-title" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "TabOvertime"
  },
  __name: "overtime",
  props: {
    departmentOptions: {}
  },
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const props = __props;
    const selectedDepartmentId = ref(0);
    const convertToUpdateParams = (data) => {
      if (!data) {
        return {
          departmentId: selectedDepartmentId.value,
          isClock: 0,
          isCompensationint: 0,
          latestEffectDate: "",
          unit: "1",
          rules: []
        };
      }
      const { dayOffConfigs, extraDutyConfig, extraDutyRuleList } = data;
      return {
        departmentId: extraDutyConfig.departmentId,
        isClock: extraDutyConfig.isClock,
        isCompensationint: extraDutyConfig.isCompensationint,
        latestEffectDate: dayOffConfigs.latestEffectDate,
        unit: dayOffConfigs.unit,
        rules: extraDutyRuleList.map((rule) => ({
          departmentId: rule.departmentId,
          isEnable: rule.isEnable,
          isTimeOff: rule.isTimeOff,
          rule: rule.rule,
          ruleEndTime: rule.ruleEndTime,
          ruleStartTime: rule.ruleStartTime
        }))
      };
    };
    const formData = ref({
      departmentId: 0,
      isClock: 0,
      isCompensationint: 0,
      latestEffectDate: "",
      unit: "1",
      rules: [
        {
          departmentId: 0,
          isEnable: 0,
          isTimeOff: 0,
          rule: "Workday",
          ruleStartTime: "",
          ruleEndTime: ""
        }
      ]
    });
    const overtimeRules = computed(() => {
      var _a;
      const ruleMap = [
        t("attendance.settings.overtime.workday"),
        t("attendance.settings.overtime.restDay"),
        t("attendance.settings.overtime.holiday")
      ];
      return (_a = formData.value) == null ? void 0 : _a.rules.map((rule, index) => ({
        ...rule,
        rule: ruleMap[index]
      }));
    });
    const updateRule = (index, field, value) => {
      var _a;
      if ((_a = formData.value) == null ? void 0 : _a.rules[index]) {
        formData.value.rules[index] = {
          ...formData.value.rules[index],
          [field]: value
        };
      }
    };
    const isClockChecked = computed({
      get: () => {
        var _a;
        return Boolean((_a = formData.value) == null ? void 0 : _a.isClock);
      },
      set: (val) => {
        if (formData.value) formData.value.isClock = val ? 1 : 0;
      }
    });
    const isCompensationChecked = computed({
      get: () => {
        var _a;
        return Boolean((_a = formData.value) == null ? void 0 : _a.isCompensationint);
      },
      set: (val) => {
        if (formData.value) formData.value.isCompensationint = val ? 1 : 0;
      }
    });
    const { run: getOverTimeSetting, loading: getOverTimeSettingLoading } = useRequest(
      AttendanceSettingService.getOverTimeSettingByDepartmentId,
      {
        manual: true,
        onSuccess: ({ data }) => {
          formData.value = convertToUpdateParams(data);
        }
      }
    );
    const { run: updateOverTimeSetting } = useRequest(AttendanceSettingService.updateOverTimeSetting, {
      manual: true,
      onSuccess: () => {
        api.success(t("attendance.settings.overtime.messages.updateSuccess"));
      },
      onError: () => {
        api.error(t("attendance.settings.overtime.messages.updateError"));
      }
    });
    const handleSubmit = async () => {
      console.log(formData.value);
      await updateOverTimeSetting(formData.value);
    };
    __expose({
      handleSubmit
    });
    onMounted(() => {
      if (!props.departmentOptions) return;
      const departmentId = props.departmentOptions[0].value || 0;
      selectedDepartmentId.value = +departmentId;
      getOverTimeSetting(selectedDepartmentId.value);
    });
    const labelCol = {
      span: 4
    };
    const wrapperCol = {
      span: 16
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Form), {
        "label-col": labelCol,
        "wrapper-col": wrapperCol,
        model: formData.value,
        class: "w-full"
      }, {
        default: withCtx(() => [
          createVNode(unref(FormItem), {
            label: unref(t)("attendance.settings.overtime.department"),
            name: "departmentId"
          }, {
            default: withCtx(() => [
              createVNode(unref(Select), {
                value: selectedDepartmentId.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedDepartmentId.value = $event),
                options: _ctx.departmentOptions
              }, null, 8, ["value", "options"])
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(unref(QSkeleton), {
            active: "",
            title: false,
            loading: unref(getOverTimeSettingLoading),
            paragraph: {
              rows: 8
            }
          }, {
            default: withCtx(() => [
              createVNode(unref(FormItem), {
                label: unref(t)("attendance.settings.overtime.overtimeRules")
              }, {
                default: withCtx(() => [
                  createVNode(unref(Flex), {
                    vertical: "",
                    gap: "middle"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(overtimeRules.value, (rule, index) => {
                        return openBlock(), createBlock(unref(Flex), {
                          wrap: "wrap",
                          key: index,
                          justify: "space-between",
                          gap: "large",
                          align: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Flex), {
                              span: "12",
                              gap: "small"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Switch), {
                                  checked: Boolean(rule.isEnable),
                                  onChange: (checked) => updateRule(index, "isEnable", checked ? 1 : 0)
                                }, null, 8, ["checked", "onChange"]),
                                createVNode(unref(Text), { class: "nowrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(rule.rule), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(Flex), {
                              gap: "small",
                              align: "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Checkbox), {
                                  checked: Boolean(rule.isTimeOff),
                                  onChange: (e) => updateRule(index, "isTimeOff", e.target.checked ? 1 : 0)
                                }, null, 8, ["checked", "onChange"]),
                                createVNode(unref(Text), {
                                  disabled: Boolean(!rule.isTimeOff),
                                  class: "nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("attendance.settings.overtime.timeOff")), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled"]),
                                createVNode(unref(TimePicker), {
                                  valueFormat: "mm:ss",
                                  disabled: Boolean(!rule.isTimeOff),
                                  class: "overtime-input",
                                  value: rule.ruleStartTime,
                                  onChange: (time) => updateRule(index, "ruleStartTime", time)
                                }, null, 8, ["disabled", "value", "onChange"]),
                                createVNode(unref(TimePicker), {
                                  valueFormat: "mm:ss",
                                  disabled: Boolean(!rule.isTimeOff),
                                  class: "overtime-input",
                                  value: rule.ruleEndTime,
                                  onChange: (time) => updateRule(index, "ruleEndTime", time)
                                }, null, 8, ["disabled", "value", "onChange"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(unref(FormItem), {
                label: unref(t)("attendance.settings.overtime.clockValidation")
              }, {
                default: withCtx(() => [
                  createVNode(unref(Flex), {
                    gap: "small",
                    align: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Switch), {
                        checked: isClockChecked.value,
                        "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => isClockChecked.value = $event)
                      }, null, 8, ["checked"]),
                      createVNode(unref(Text), { class: "nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("attendance.settings.overtime.clockRequired")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(unref(FormItem), {
                label: unref(t)("attendance.settings.overtime.enableCompensation")
              }, {
                default: withCtx(() => [
                  createVNode(unref(Switch), {
                    checked: isCompensationChecked.value,
                    "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => isCompensationChecked.value = $event)
                  }, null, 8, ["checked"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(unref(FormItem), {
                label: unref(t)("attendance.settings.overtime.timeOffSettings")
              }, {
                default: withCtx(() => [
                  createVNode(unref(Flex), {
                    gap: "large",
                    vertical: "",
                    justify: "flex-start"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Flex), {
                        gap: "small",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Text), { class: "nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("attendance.settings.overtime.latestEffectiveDate")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DatePicker), {
                            valueFormat: "MM-DD",
                            class: "overtime-input",
                            value: formData.value.latestEffectDate,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => formData.value.latestEffectDate = $event)
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Flex), {
                        gap: "small",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Text), { class: "nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("attendance.settings.overtime.minimumUnit")) + ":", 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tooltip), {
                            trigger: ["hover"],
                            placement: "topLeft",
                            "overlay-class-name": "numeric-input"
                          }, {
                            title: withCtx(() => [
                              createBaseVNode("span", _hoisted_1, toDisplayString(formData.value.unit), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(unref(InputNumber), {
                                class: "overtime-input",
                                value: formData.value.unit,
                                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => formData.value.unit = $event)
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Text), { class: "nowrap flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("attendance.settings.overtime.day")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
});
const TabOvertime = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d817b9d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AttendanceSettingModal"
  },
  __name: "modal",
  props: {
    "open": { default: false },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props) {
    const modalStatus = useModel(__props, "open");
    const tabAttendanceRef = ref(null);
    const tabLeaveRef = ref(null);
    const tabDeductionRef = ref(null);
    const tabOvertimeRef = ref(null);
    const activeKey = ref("attendance");
    const { t } = useI18n();
    const tabOptions = [
      {
        key: "attendance",
        title: t("attendance.setting.tabs.attendance"),
        pane: _sfc_main$4
      },
      {
        key: "leave",
        title: t("attendance.setting.tabs.leave"),
        pane: _sfc_main$2
      },
      {
        key: "deduction",
        title: t("attendance.setting.tabs.deduction"),
        pane: TabDeduction
      },
      {
        key: "overtime",
        title: t("attendance.setting.tabs.overtime"),
        pane: TabOvertime
      }
    ];
    const departmentOptions = ref();
    const { run: getCompanyDepartmentList, loading: getCompanyDepartmentListLoading } = useRequest(
      DepartmentService.getCompanyDepartmentList,
      {
        manual: true,
        onSuccess: ({ data }) => {
          departmentOptions.value = data.map((item) => ({ label: item.name, value: item.id }));
        }
      }
    );
    const setComponentRef = (el, pane) => {
      switch (pane) {
        case "attendance":
          tabAttendanceRef.value = el;
          break;
        case "leave":
          tabLeaveRef.value = el;
          break;
        case "deduction":
          tabDeductionRef.value = el;
          break;
        case "overtime":
          tabOvertimeRef.value = el;
          break;
      }
    };
    const confirmLoading = ref(false);
    const handleConfirm = async () => {
      var _a;
      const currentTab = activeKey.value;
      const refs = {
        attendance: tabAttendanceRef,
        leave: tabLeaveRef,
        deduction: tabDeductionRef,
        overtime: tabOvertimeRef
      };
      const currentRef = refs[currentTab];
      confirmLoading.value = true;
      if ((_a = currentRef == null ? void 0 : currentRef.value) == null ? void 0 : _a.handleSubmit) {
        await currentRef.value.handleSubmit();
        modalStatus.value = false;
        confirmLoading.value = false;
      }
    };
    const handleCancel = () => {
      modalStatus.value = false;
    };
    onMounted(() => {
      getCompanyDepartmentList();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$5), {
        width: 800,
        closable: "",
        mask: "",
        open: modalStatus.value,
        "onUpdate:open": _cache[1] || (_cache[1] = ($event) => modalStatus.value = $event),
        title: unref(t)("attendance.setting.title"),
        destroyOnClose: true
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), { justify: "center" }, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                onClick: handleConfirm,
                type: "primary",
                loading: confirmLoading.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.setting.buttons.saveUpdate")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.setting.buttons.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(Tabs), {
            activeKey: activeKey.value,
            "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => activeKey.value = $event)
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(tabOptions, (pane) => {
                return createVNode(unref(TabPane), {
                  key: pane.key,
                  tab: pane.title
                }, {
                  default: withCtx(() => [
                    createVNode(unref(QSkeleton), {
                      loading: unref(getCompanyDepartmentListLoading),
                      active: "",
                      paragraph: {
                        rows: 8
                      }
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(pane.pane), {
                          departmentOptions: departmentOptions.value,
                          ref_for: true,
                          ref: (el) => setComponentRef(el, pane.key)
                        }, null, 8, ["departmentOptions"]))
                      ]),
                      _: 2
                    }, 1032, ["loading"])
                  ]),
                  _: 2
                }, 1032, ["tab"]);
              }), 64))
            ]),
            _: 1
          }, 8, ["activeKey"])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
export {
  _sfc_main as default
};
