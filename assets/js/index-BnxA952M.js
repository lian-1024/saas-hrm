import { d as defineComponent, a as reactive, r as ref, j as computed, o as onMounted, a2 as openBlock, a3 as createBlock, a4 as withCtx, u as unref, a8 as useCssVars, Z as useRoute, c as createVNode, a6 as createElementBlock, ag as createBaseVNode, aa as toDisplayString, G as createTextVNode } from "./vue-vendor-C3i0i51a.js";
import { u as useI18n, a as useRequest, r as router } from "./index-x-LQkY-F.js";
import { D as DepartmentService } from "./department.service-BHm1UbAi.js";
import { F as FormOfEmployment, E as EmployeeService } from "./employee.service-8UfBD8Jx.js";
import { Q as QSpin } from "./spin-DFBmYiCr.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { D as DepartmentTree } from "./department-BQT5hIqY.js";
import { h as api, aj as Form, ak as FormItem, al as Input, am as Cascader, an as Select, ao as DatePicker, ap as Upload, aq as LoadingOutlined, ar as PlusOutlined, as as Row, at as Col, B as Button, F as Flex } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "ant-upload-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "EmployeeDetailPage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "436493b0": `${unref(token).paddingLG}px`,
      "bf6a6eca": unref(token).colorBgContainer
    }));
    const { t } = useI18n();
    const { token } = useAntdToken();
    const defaultEmployee = {
      id: 1,
      workNumber: "",
      mobile: "",
      departmentId: 1,
      correctionTime: "",
      formOfEmployment: FormOfEmployment.Formal,
      staffPhoto: "",
      timeOfEntry: "",
      username: ""
    };
    const formState = reactive(defaultEmployee);
    const selectedDepartmentId = ref([]);
    const route = useRoute();
    const cascaderOptions = ref([]);
    const formLabelCol = { span: 8 };
    const formWrapperCol = { span: 16 };
    const formRules = {
      username: [
        { required: true, message: t("employee.detail.form.rules.username.required"), trigger: "blur" },
        { min: 2, max: 4, message: t("employee.detail.form.rules.username.length"), trigger: "blur" }
      ],
      mobile: [
        { required: true, message: t("employee.detail.form.rules.mobile.required"), trigger: "blur" },
        {
          pattern: /^1[3-9]\d{9}$/,
          message: t("employee.detail.form.rules.mobile.format"),
          trigger: "blur"
        }
      ],
      timeOfEntry: [
        {
          required: true,
          message: t("employee.detail.form.rules.timeOfEntry.required"),
          trigger: "change"
        },
        {
          type: "date",
          message: t("employee.detail.form.rules.timeOfEntry.format"),
          trigger: "change"
        }
      ],
      correctionTime: [
        {
          required: true,
          message: t("employee.detail.form.rules.correctionTime.required"),
          trigger: "change"
        },
        {
          type: "date",
          message: t("employee.detail.form.rules.correctionTime.format"),
          trigger: "change"
        }
      ],
      departmentId: [
        {
          required: true,
          message: t("employee.detail.form.rules.department.required"),
          trigger: "change"
        }
      ],
      formOfEmployment: [
        {
          required: true,
          message: t("employee.detail.form.rules.formOfEmployment.required"),
          trigger: "change"
        }
      ]
    };
    const formRef = ref(null);
    function getBase64(img, callback) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    }
    const fileList = ref([]);
    const uploadLoading = ref(false);
    const imageUrl = ref("");
    const handleChange = (info) => {
      if (info.file.status === "uploading") {
        uploadLoading.value = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (base64Url) => {
          imageUrl.value = base64Url;
          uploadLoading.value = false;
        });
      }
      if (info.file.status === "error") {
        uploadLoading.value = false;
        api.error("upload error");
      }
    };
    const beforeUpload = (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        api.error(t("employee.detail.upload.error.type"));
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        api.error(t("employee.detail.upload.error.size"));
      }
      return isJpgOrPng && isLt2M;
    };
    const { run: getEmployeeDetailById, loading: getEmployeeDetailByIdLoading } = useRequest(
      EmployeeService.getEmployeeDetailById,
      {
        manual: true,
        onSuccess: ({ data }) => {
          console.log(data);
          Object.assign(formState, data);
          selectedDepartmentId.value = [data.departmentId.toString()];
        }
      }
    );
    const { data: departmentList, loading: getCompanyDepartmentListLoading } = useRequest(
      DepartmentService.getCompanyDepartmentList,
      {
        onSuccess: ({ data }) => {
          console.log(data);
          cascaderOptions.value = DepartmentTree.toCascader(data);
        }
      }
    );
    const loading = computed(
      () => getEmployeeDetailByIdLoading.value || getCompanyDepartmentListLoading.value
    );
    const { run: updateEmployeeDetail, loading: updateEmployeeDetailLoading } = useRequest(
      EmployeeService.updateEmployeeDetail,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("employee.messages.updateSuccess"));
        },
        onError: (error) => {
          api.error(error.message || t("employee.messages.updateError"));
        }
      }
    );
    const { run: addEmployee, loading: addEmployeeLoading } = useRequest(EmployeeService.addEmployee, {
      manual: true,
      onSuccess: () => {
        api.success(t("employee.messages.addSuccess"));
        router.push("/employee");
      },
      onError: (error) => {
        api.error(error.message || t("employee.messages.addError"));
      }
    });
    const confirmLoading = computed(() => updateEmployeeDetailLoading.value || addEmployeeLoading.value);
    const formOfEmploymentOptions = [
      { label: t("employee.table.formalOfEmployment.formal"), value: FormOfEmployment.Formal },
      { label: t("employee.table.formalOfEmployment.informal"), value: FormOfEmployment.InFormal }
    ];
    const handleSave = () => {
      var _a;
      const selectedId = Number(selectedDepartmentId.value.slice(-1)[0]);
      formState.departmentId = selectedId;
      (_a = formRef.value) == null ? void 0 : _a.validate().then((res) => {
        if (route.params.id) {
          updateEmployeeDetail(route.params.id, {
            ...formState,
            departmentId: selectedId
          });
        } else {
          const { id, ...rest } = formState;
          addEmployee({
            ...rest,
            departmentId: selectedId
          });
        }
      });
    };
    onMounted(async () => {
      if (route.params.id) {
        await getEmployeeDetailById(route.params.id);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QSpin), { spinning: loading.value }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            class: "detail-wrapper h-full",
            justify: "star"
          }, {
            default: withCtx(() => [
              createVNode(unref(Form), {
                ref_key: "formRef",
                ref: formRef,
                rules: formRules,
                class: "detail-form",
                model: formState,
                "label-col": formLabelCol,
                "wrapper-col": formWrapperCol
              }, {
                default: withCtx(() => [
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.username"),
                    name: "username"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: formState.username,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formState.username = $event),
                        placeholder: unref(t)("employee.detail.form.placeholder.username")
                      }, null, 8, ["value", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.workNumber"),
                    name: "workNumber"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: formState.workNumber,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formState.workNumber = $event),
                        disabled: ""
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.mobile"),
                    name: "mobile"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: formState.mobile,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formState.mobile = $event),
                        disabled: !!unref(route).params.id
                      }, null, 8, ["value", "disabled"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.department"),
                    name: "departmentId"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Cascader), {
                        "display-render": ({ labels }) => labels.join("-"),
                        placeholder: unref(t)("employee.detail.form.placeholder.department"),
                        options: cascaderOptions.value,
                        value: selectedDepartmentId.value,
                        "onUpdate:value": _cache[3] || (_cache[3] = ($event) => selectedDepartmentId.value = $event)
                      }, null, 8, ["display-render", "placeholder", "options", "value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.formOfEmployment"),
                    name: "formOfEmployment"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Select), {
                        placeholder: unref(t)("employee.detail.form.placeholder.formOfEmployment"),
                        value: formState.formOfEmployment,
                        "onUpdate:value": _cache[4] || (_cache[4] = ($event) => formState.formOfEmployment = $event),
                        options: formOfEmploymentOptions
                      }, null, 8, ["placeholder", "value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.timeOfEntry"),
                    name: "timeOfEntry"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(DatePicker), {
                        "value-format": "YYYY-MM-DD",
                        value: formState.timeOfEntry,
                        "onUpdate:value": _cache[5] || (_cache[5] = ($event) => formState.timeOfEntry = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.correctionTime"),
                    name: "correctionTime"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(DatePicker), {
                        "value-format": "YYYY-MM-DD",
                        value: formState.correctionTime,
                        "onUpdate:value": _cache[6] || (_cache[6] = ($event) => formState.correctionTime = $event)
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("employee.detail.form.fields.staffPhoto"),
                    name: "staffPhoto"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Upload), {
                        "file-list": fileList.value,
                        "onUpdate:fileList": _cache[7] || (_cache[7] = ($event) => fileList.value = $event),
                        name: "avatar",
                        "list-type": "picture-card",
                        class: "avatar-uploader",
                        "show-upload-list": false,
                        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                        "before-upload": beforeUpload,
                        onChange: handleChange
                      }, {
                        default: withCtx(() => [
                          formState.staffPhoto ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            class: "w-full h-full",
                            src: formState.staffPhoto,
                            alt: "avatar"
                          }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, [
                            uploadLoading.value ? (openBlock(), createBlock(unref(LoadingOutlined), { key: 0 })) : (openBlock(), createBlock(unref(PlusOutlined), { key: 1 })),
                            createBaseVNode("div", _hoisted_3, toDisplayString(unref(t)("employee.detail.upload.text")), 1)
                          ]))
                        ]),
                        _: 1
                      }, 8, ["file-list"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(Row), null, {
                        default: withCtx(() => [
                          createVNode(unref(Col), { span: 12 }),
                          createVNode(unref(Col), null, {
                            default: withCtx(() => [
                              createVNode(unref(Button), {
                                type: "primary",
                                onClick: handleSave,
                                loading: confirmLoading.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(route).params.id ? unref(t)("employee.detail.form.buttons.update") : unref(t)("employee.detail.form.buttons.save")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading"])
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
              }, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["spinning"]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1534bec2"]]);
export {
  index as default
};
