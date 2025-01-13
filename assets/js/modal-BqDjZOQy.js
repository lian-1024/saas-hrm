import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js";
import { Q as QSpin } from "./spin-DsTR0G8T.js";
import { u as useI18n, a as useRequest } from "./index-BRjnmkr0.js";
import { D as DepartmentService } from "./department.service-BtZcd_gd.js";
import { h as api, F as Flex, B as Button, aj as Form, al as Input, an as Select } from "./antd-vendor-NhxykF_l.js";
import { d as defineComponent, ad as mergeModels, r as ref, ae as useModel, j as computed, w as watch, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, u as unref, G as createTextVNode, af as createBaseVNode } from "./vue-vendor-DA6b90QH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-Bc78yVQl.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const ModalType = {
  addChild: "addChild",
  edit: "edit"
};
const _hoisted_1 = { class: "department-modal" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DepartmentModal"
  },
  __name: "modal",
  props: /* @__PURE__ */ mergeModels({
    type: {},
    departmentId: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["success"], ["update:open"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const departmentManagerList = ref([]);
    const openStatus = useModel(__props, "open");
    const formRef = ref();
    const formData = ref({
      name: "",
      code: "",
      managerId: 1,
      introduce: "",
      createTime: "",
      id: 0,
      managerName: "",
      pid: 0
    });
    const emits = __emit;
    const computedTitle = () => {
      return computedTitleMap[props.type].value;
    };
    const computedTitleMap = {
      [ModalType.addChild]: computed(() => t("department.operations.addChild")),
      [ModalType.edit]: computed(() => t("department.operations.edit"))
    };
    const formRules = {
      name: [
        { required: true, message: t("department.form.rules.name.required"), trigger: "blur" },
        { min: 2, max: 10, message: t("department.form.rules.name.min"), trigger: "blur" }
      ],
      code: [
        { required: true, message: t("department.form.rules.code.required"), trigger: "blur" },
        { min: 2, max: 10, message: t("department.form.rules.code.min"), trigger: "blur" }
      ],
      managerId: [
        { required: true, message: t("department.form.rules.managerId.required"), trigger: "change" }
      ],
      introduce: [
        { required: true, message: t("department.form.rules.introduce.required"), trigger: "blur" },
        { max: 100, message: t("department.form.rules.introduce.max"), trigger: "blur" }
      ]
    };
    const { run: addDepartment, loading: addLoading } = useRequest(DepartmentService.addDepartment, {
      manual: true,
      onSuccess: (data) => {
        api.success(t("department.operations.operationMessage.addSuccess"));
        emits("success");
      },
      onError: (error) => {
        api.error(t("department.operations.operationMessage.addError"));
      },
      onFinally: () => closeModal()
    });
    const { loading: getDepartmentManagerListLoading } = useRequest(
      DepartmentService.getDepartmentManagerList,
      {
        onSuccess: ({ data }) => {
          departmentManagerList.value = data.map((item) => ({
            label: item.username,
            value: item.id
          }));
        }
      }
    );
    const { run: getDepartmentDetail, loading: getDepartmentDetailLoading } = useRequest(
      DepartmentService.getDepartmentDetail,
      {
        manual: true,
        onSuccess: ({ data }) => {
          formData.value = data;
        }
      }
    );
    const { run: updateDepartment, loading: updateDepartmentLoading } = useRequest(
      DepartmentService.updateDepartment,
      {
        manual: true,
        onSuccess: (data) => {
          api.success(t("department.operations.operationMessage.editSuccess"));
          emits("success");
        },
        onError: (error) => {
          api.error(error.message || t("department.operations.operationMessage.editError"));
        },
        onFinally: () => closeModal()
      }
    );
    watch(
      () => props.departmentId,
      (newVal) => {
        if (newVal && props.type === ModalType.edit) {
          getDepartmentDetail(newVal);
        }
      }
    );
    const handleSubmit = () => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate().then(async () => {
        if (!props.departmentId)
          return api.error(t("department.operations.operationMessage.selectDepartment"));
        switch (props.type) {
          case "addChild":
            const { id, createTime, managerName, ...rest } = formData.value;
            addDepartment({
              ...rest,
              pid: props.departmentId
            });
            break;
          case "edit":
            updateDepartment(formData.value);
            break;
        }
      });
    };
    const closeModal = () => {
      var _a;
      openStatus.value = false;
      (_a = formRef.value) == null ? void 0 : _a.resetFields();
    };
    __expose({
      // 设置表单数据（用于编辑时）
      setFormData: (data) => {
        Object.assign(formData.value, data);
      }
    });
    const loading = computed(
      () => getDepartmentDetailLoading.value || getDepartmentManagerListLoading.value || updateDepartmentLoading.value || addLoading.value
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        width: 600,
        open: openStatus.value,
        onCancel: closeModal,
        title: computedTitle(),
        closable: "",
        mask: "",
        maskClosable: false
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), { justify: "center" }, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleSubmit,
                loading: unref(addLoading)
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("确定")
                ])),
                _: 1
              }, 8, ["loading"]),
              createVNode(unref(Button), { onClick: closeModal }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("取消")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(QSpin), { spinning: loading.value }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(Form), {
                  ref_key: "formRef",
                  ref: formRef,
                  layout: "vertical",
                  model: formData.value,
                  rules: formRules
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Form).Item, {
                      label: unref(t)("department.form.fields.name"),
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Input), {
                          value: formData.value.name,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
                          placeholder: unref(t)("department.form.placeholder.name"),
                          maxLength: 10,
                          "show-count": ""
                        }, null, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(unref(Form).Item, {
                      label: unref(t)("department.form.fields.code"),
                      name: "code"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Input), {
                          value: formData.value.code,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formData.value.code = $event),
                          placeholder: unref(t)("department.form.placeholder.code"),
                          maxLength: 10,
                          "show-count": ""
                        }, null, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(unref(Form).Item, {
                      label: unref(t)("department.form.fields.managerId"),
                      name: "managerId"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Select), {
                          placeholder: unref(t)("department.form.placeholder.managerId"),
                          value: formData.value.managerId,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formData.value.managerId = $event),
                          options: departmentManagerList.value
                        }, null, 8, ["placeholder", "value", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(unref(Form).Item, {
                      label: unref(t)("department.form.fields.introduce"),
                      name: "introduce"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Input).TextArea, {
                          value: formData.value.introduce,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => formData.value.introduce = $event),
                          placeholder: unref(t)("department.form.placeholder.introduce"),
                          maxLength: 100,
                          "auto-size": { minRows: 3, maxRows: 5 },
                          "show-count": ""
                        }, null, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["model"])
              ])
            ]),
            _: 1
          }, 8, ["spinning"])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
const modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e884d9b"]]);
export {
  modal as default
};
