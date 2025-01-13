import { d as defineComponent, ad as mergeModels, a7 as useCssVars, u as unref, ae as useModel, r as ref, w as watch, j as computed, a as reactive, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, a5 as createElementBlock, F as Fragment, ah as renderList, G as createTextVNode, a9 as toDisplayString } from "./vue-vendor-DA6b90QH.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { d as useTheme, u as useI18n, a as useRequest } from "./index-BRjnmkr0.js";
import { b as MESSAGE_LEVEL } from "./message-DvY9wwDO.js";
import { E as EmployeeService } from "./employee.service-Dc1yxkLR.js";
import { h as api, F as Flex, u as Tag, aj as Form, an as Select, al as Input } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mass-notification",
  props: /* @__PURE__ */ mergeModels({
    employees: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "48169593": `${unref(token).margin}px`,
      "24d86562": `${unref(token).padding}px`,
      "3cedef58": unref(token).colorBorder,
      "74c68384": `${unref(token).borderRadiusLG}px`
    }));
    const modalStatus = useModel(__props, "open");
    const props = __props;
    const { token } = useAntdToken();
    const { isDark } = useTheme();
    const employees = ref(props.employees);
    watch([() => props.employees, () => modalStatus.value], ([newVal, open]) => {
      if (open) {
        employees.value = convertEmployee(newVal);
      }
    });
    const convertEmployee = (employee) => {
      return employee.map((item) => ({
        id: item.id,
        username: `@${item.username}`
      }));
    };
    const handleRemoveEmployee = (id) => {
      employees.value = employees.value.filter((item) => item.id !== id);
    };
    const { t } = useI18n();
    const messageLevelOptions = computed(() => [
      {
        label: t("common.message.level.notification"),
        value: MESSAGE_LEVEL.NOTIFICATION
      },
      {
        label: t("common.message.level.tips"),
        value: MESSAGE_LEVEL.TIPS
      },
      {
        label: t("common.message.level.important"),
        value: MESSAGE_LEVEL.IMPORTANT
      },
      {
        label: t("common.message.level.urgent"),
        value: MESSAGE_LEVEL.URGENT
      }
    ]);
    const fromData = reactive({
      type: MESSAGE_LEVEL.NOTIFICATION,
      content: ""
    });
    const formRef = ref();
    const formRules = {
      type: [{ required: true, message: t("employee.massNotification.rules.messageLevel") }],
      content: [{ required: true, message: t("employee.massNotification.rules.content") }]
    };
    const closeModal = () => {
      modalStatus.value = false;
      if (formRef.value) {
        formRef.value.resetFields();
        employees.value = [];
      }
    };
    const { run: massNotification2, loading: massNotificationLoading } = useRequest(
      EmployeeService.massNotification,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("employee.messages.massNotificationSuccess"));
        },
        onError: ({ message: message2 }) => {
          message2.error(message2 || t("employee.messages.massNotificationError"));
        },
        onFinally: () => {
          closeModal();
        }
      }
    );
    const handleSubmit = async () => {
      if (!formRef.value) return;
      await formRef.value.validate().then((res) => {
        massNotification2({
          ...fromData,
          userIds: employees.value.map((item) => item.id)
        });
      });
    };
    const handleCancel = () => {
      closeModal();
    };
    const labelCol = { span: 6 };
    const wrapperCol = { span: 16 };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        title: unref(t)("employee.massNotification.title"),
        open: modalStatus.value,
        "onUpdate:open": _cache[2] || (_cache[2] = ($event) => modalStatus.value = $event),
        "confirm-loading": unref(massNotificationLoading),
        onOk: handleSubmit,
        onCancel: handleCancel,
        mask: ""
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), { vertical: "" }, {
            default: withCtx(() => [
              createVNode(unref(Flex), {
                wrap: "wrap",
                gap: "small",
                class: "mass-selected-employee"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(employees.value, (item) => {
                    return openBlock(), createBlock(unref(Tag), {
                      color: unref(isDark) ? "default" : "processing",
                      key: item.id,
                      closable: "",
                      onClose: ($event) => handleRemoveEmployee(item.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.username), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "onClose"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(Form), {
            rules: formRules,
            ref_key: "formRef",
            ref: formRef,
            model: fromData,
            "label-col": labelCol,
            "wrapper-col": wrapperCol
          }, {
            default: withCtx(() => [
              createVNode(unref(Form).Item, {
                label: unref(t)("employee.massNotification.messageLevel"),
                name: "type"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Select), {
                    value: fromData.type,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => fromData.type = $event),
                    options: messageLevelOptions.value
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(unref(Form).Item, {
                label: unref(t)("employee.massNotification.content"),
                name: "content"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Input).TextArea, {
                    value: fromData.content,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => fromData.content = $event),
                    placeholder: unref(t)("employee.massNotification.rules.content")
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["title", "open", "confirm-loading"]);
    };
  }
});
const massNotification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebf51210"]]);
export {
  massNotification as default
};
