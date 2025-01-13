import { E as EmployeeService } from "./employee.service-Dc1yxkLR.js";
import { R as RoleService } from "./role.service-DKKBeOKz.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js";
import { Q as QSpin } from "./spin-DsTR0G8T.js";
import { u as useI18n, a as useRequest } from "./index-BRjnmkr0.js";
import { h as api, F as Flex, B as Button, $ as CheckboxGroup } from "./antd-vendor-NhxykF_l.js";
import { d as defineComponent, ad as mergeModels, ae as useModel, r as ref, k as watchEffect, j as computed, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, u as unref, G as createTextVNode, a9 as toDisplayString, af as createBaseVNode } from "./vue-vendor-DA6b90QH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-Bc78yVQl.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _hoisted_1 = { class: "modal-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RoleModal"
  },
  __name: "role-modal",
  props: /* @__PURE__ */ mergeModels({
    employeeId: {}
  }, {
    "open": { default: false },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const modalStatus = useModel(__props, "open");
    const selectedRole = ref([]);
    const roleOptions = ref([]);
    const { loading: getRoleListEnableLoading } = useRequest(RoleService.getRoleListEnable, {
      onSuccess: ({ data }) => {
        roleOptions.value = data.map((item) => ({
          value: item.id,
          label: item.name
        }));
      }
    });
    const { run: getEmployeeDetail, loading: getEmployeeDetailLoading } = useRequest(
      EmployeeService.getEmployeeDetailById,
      {
        manual: true,
        onSuccess: ({ data }) => {
          selectedRole.value = data.roleIds;
        }
      }
    );
    const { run: giveEmployeeRole, loading: giveEmployeeRoleLoading } = useRequest(
      EmployeeService.giveEmployeeRole,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("employee.roleModal.success"));
        },
        onError: (error) => {
          if (error.message) {
            api.error(error.message);
          } else {
            api.error(t("employee.roleModal.error"));
          }
        }
      }
    );
    const closeModal = () => {
      modalStatus.value = false;
    };
    const handleConfirm = async () => {
      await giveEmployeeRole({
        id: props.employeeId,
        roleIds: selectedRole.value
      });
      closeModal();
    };
    const handleCancel = () => {
      closeModal();
    };
    watchEffect(() => {
      if (props.employeeId) {
        getEmployeeDetail(props.employeeId);
      }
    });
    const loading = computed(() => getRoleListEnableLoading.value || getEmployeeDetailLoading.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        "confirm-loading": unref(giveEmployeeRoleLoading),
        width: 800,
        mask: "",
        open: modalStatus.value,
        "onUpdate:open": _cache[1] || (_cache[1] = ($event) => modalStatus.value = $event),
        title: unref(t)("employee.roleModal.title"),
        onCancel: handleCancel
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), {
            gap: "small",
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleConfirm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("employee.roleModal.confirm")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("employee.roleModal.cancel")), 1)
                ]),
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
                createVNode(unref(CheckboxGroup), {
                  value: selectedRole.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedRole.value = $event),
                  options: roleOptions.value
                }, null, 8, ["value", "options"])
              ])
            ]),
            _: 1
          }, 8, ["spinning"])
        ]),
        _: 1
      }, 8, ["confirm-loading", "open", "title"]);
    };
  }
});
const roleModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21a6f2d1"]]);
export {
  roleModal as default
};
