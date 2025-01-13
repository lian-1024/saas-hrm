import { d as defineComponent, ae as mergeModels, a8 as useCssVars, u as unref, af as useModel, r as ref, w as watch, a2 as openBlock, a3 as createBlock, a4 as withCtx, ag as createBaseVNode, c as createVNode } from "./vue-vendor-C3i0i51a.js";
import { P as PermissionTree, a as PermissionService } from "./permission-DIgwFTWF.js";
import { R as RoleService } from "./role.service-u1e2vSi7.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { Q as QSkeleton } from "./skeleton-LDWoY3Lm.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { a as useRequest } from "./index-x-LQkY-F.js";
import { h as api, ac as Tree } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
const _hoisted_1 = { class: "permission-modal-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GivePermissionModal"
  },
  __name: "give-permission-modal",
  props: /* @__PURE__ */ mergeModels({
    roleId: {}
  }, {
    "open": { type: Boolean, ...{ default: false, required: true } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "ae5d4188": `${unref(token).marginLG}px`,
      "553a54a2": `${unref(token).paddingLG}px`,
      "cca96128": `${unref(token).borderRadiusLG}px`,
      "d1402fbc": unref(token).colorBgContainer
    }));
    const { token } = useAntdToken();
    const props = __props;
    const modalStatus = useModel(__props, "open");
    const permissionsTreeData = ref();
    const checkedPermissionKeys = ref([]);
    const { loading: getPermissionListLoading } = useRequest(PermissionService.getPermissionList, {
      onSuccess: ({ data }) => {
        permissionsTreeData.value = PermissionTree.convertPermissionToTree(data);
      }
    });
    const { run: getRoleDetail } = useRequest(RoleService.getRoleDetail, {
      manual: true,
      onSuccess: ({ data }) => {
        checkedPermissionKeys.value = data.permIds;
      }
    });
    const { loading: givePermissionLoading, run: givePermission } = useRequest(
      RoleService.givePermission,
      {
        manual: true,
        onSuccess: () => {
          api.success("分配权限成功");
        },
        onFinally: () => {
          modalStatus.value = false;
        }
      }
    );
    const handleConfirm = () => {
      givePermission({ id: props.roleId, permIds: checkedPermissionKeys.value });
    };
    const closeModal = () => modalStatus.value = false;
    const handleCancel = () => closeModal();
    watch(
      () => props.roleId,
      (newVal) => {
        if (newVal) {
          getRoleDetail(newVal);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        title: "分配权限",
        open: modalStatus.value,
        "confirm-loading": unref(givePermissionLoading),
        onOk: handleConfirm,
        onCancel: handleCancel,
        width: 400
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(QSkeleton), {
              loading: unref(getPermissionListLoading),
              title: false,
              paragraph: {
                rows: 8
              }
            }, {
              default: withCtx(() => [
                createVNode(unref(Tree), {
                  checkedKeys: checkedPermissionKeys.value,
                  "onUpdate:checkedKeys": _cache[0] || (_cache[0] = ($event) => checkedPermissionKeys.value = $event),
                  checkable: "",
                  "tree-data": permissionsTreeData.value
                }, null, 8, ["checkedKeys", "tree-data"])
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }, 8, ["open", "confirm-loading"]);
    };
  }
});
const givePermissionModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f65464f7"]]);
export {
  givePermissionModal as default
};
