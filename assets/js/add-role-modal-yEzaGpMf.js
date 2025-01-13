import { d as defineComponent, ae as mergeModels, a8 as useCssVars, u as unref, af as useModel, r as ref, a as reactive, j as computed, a2 as openBlock, a3 as createBlock, a4 as withCtx, c as createVNode, G as createTextVNode, aa as toDisplayString, ag as createBaseVNode } from "./vue-vendor-C3i0i51a.js";
import { R as RoleService } from "./role.service-u1e2vSi7.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { u as useI18n, a as useRequest } from "./index-x-LQkY-F.js";
import { E as EnableStatus } from "./status-DAOyfLNd.js";
import { h as api, F as Flex, B as Button, aj as Form, ak as FormItem, al as Input, S as Switch, av as Textarea } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
const _hoisted_1 = { class: "add-role-modal-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "add-role-modal",
  props: {
    "open": { default: false },
    "openModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["success"], ["update:open"]),
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "5341a126": `${unref(token).marginLG}px`,
      "598f0b9e": `${unref(token).paddingLG}px`,
      "4ca31246": `${unref(token).borderRadiusLG}px`,
      "1b8c1e11": unref(token).colorBgContainer
    }));
    const { t } = useI18n();
    const { token } = useAntdToken();
    const modalStatus = useModel(__props, "open");
    const emits = __emit;
    const formRef = ref();
    const formData = reactive({
      name: "",
      state: EnableStatus.DISABLED,
      description: ""
    });
    const rules = {
      name: [{ required: true, message: t("role.form.rules.name.required"), trigger: "blur" }],
      description: [
        { required: true, message: t("role.form.rules.description.required"), trigger: "blur" }
      ]
    };
    const closeModal = () => modalStatus.value = false;
    const { run: addRole, loading: addRoleLoading } = useRequest(RoleService.addRole, {
      manual: true,
      onSuccess: () => {
        api.success(t("role.table.operationMessage.addRoleSuccess"));
        emits("success");
      },
      onError: (error) => {
        api.error(error.message || t("role.table.operationMessage.addRoleError"));
      },
      onFinally: () => {
        var _a;
        (_a = formRef.value) == null ? void 0 : _a.resetFields();
        formData.state = EnableStatus.DISABLED;
        closeModal();
      }
    });
    function handleSubmit() {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate().then(async () => {
        addRole(formData);
      });
    }
    const isEnable = computed({
      get: () => Boolean(+formData.state),
      set: (newValue) => formData.state = newValue ? EnableStatus.ENABLED : EnableStatus.DISABLED
    });
    const labelCol = { span: 6 };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        open: modalStatus.value,
        "onUpdate:open": _cache[4] || (_cache[4] = ($event) => modalStatus.value = $event),
        title: _ctx.$t("role.form.title"),
        mask: "",
        closeable: true
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), {
            gap: "middle",
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleSubmit,
                loading: unref(addRoleLoading)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(unref(Button), {
                onClick: _cache[3] || (_cache[3] = ($event) => closeModal())
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(Form), {
              layout: "vertical",
              ref_key: "formRef",
              ref: formRef,
              model: formData,
              rules,
              "label-col": labelCol
            }, {
              default: withCtx(() => [
                createVNode(unref(FormItem), {
                  label: _ctx.$t("role.form.fields.name"),
                  name: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Input), {
                      value: formData.name,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                      placeholder: _ctx.$t("role.form.placeholder.name")
                    }, null, 8, ["value", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(unref(FormItem), {
                  label: _ctx.$t("role.form.fields.status")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Switch), {
                      checked: isEnable.value,
                      "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => isEnable.value = $event)
                    }, null, 8, ["checked"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(unref(FormItem), {
                  label: _ctx.$t("role.form.fields.description"),
                  name: "description"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Textarea), {
                      value: formData.description,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formData.description = $event),
                      placeholder: _ctx.$t("role.form.placeholder.description")
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
      }, 8, ["open", "title"]);
    };
  }
});
const addRoleModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6091eb86"]]);
export {
  addRoleModal as default
};
