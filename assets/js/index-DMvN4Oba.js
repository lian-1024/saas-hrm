const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/permission-modal-8fG0dh5s.js","assets/js/vue-vendor-C3i0i51a.js","assets/js/permission-DIgwFTWF.js","assets/js/index-x-LQkY-F.js","assets/js/antd-vendor-D4nQN1Zz.js","assets/js/lodash-vendor-DpYuFiFB.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js","assets/js/index-BheweVra.js","assets/js/spin-DFBmYiCr.js","assets/js/status-DAOyfLNd.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js"])))=>i.map(i=>d[i]);
import { u as useI18n, a as useRequest, _ as __vitePreload } from "./index-x-LQkY-F.js";
import { d as defineComponent, r as ref, o as onMounted, a2 as openBlock, a3 as createBlock, a4 as withCtx, u as unref, a8 as useCssVars, ag as createBaseVNode, c as createVNode, G as createTextVNode, aa as toDisplayString, am as createCommentVNode, ad as defineAsyncComponent, h } from "./vue-vendor-C3i0i51a.js";
import { Q as QSpin } from "./spin-DFBmYiCr.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { P as PermissionTree, a as PermissionService } from "./permission-DIgwFTWF.js";
import { F as Flex, h as api, B as Button, a0 as Table, ae as Modal, au as ExclamationCircleOutlined } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "PermissionPage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "46d9ed0e": `${unref(token).paddingLG}px`,
      "c2dfc828": unref(token).colorBgContainer,
      "1f542c3c": `${unref(token).borderRadiusLG}px`,
      "60b59650": unref(token).colorBorderSecondary
    }));
    const PermissionModal = defineAsyncComponent(() => __vitePreload(() => import("./permission-modal-8fG0dh5s.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
    const { t } = useI18n();
    const columns = [
      {
        title: t("permission.table.columns.name"),
        dataIndex: "name",
        key: "name"
      },
      {
        title: t("permission.table.columns.key"),
        dataIndex: "key",
        key: "key"
      },
      {
        title: t("permission.table.columns.description"),
        dataIndex: "description",
        key: "description"
      },
      {
        title: t("permission.table.columns.operations"),
        dataIndex: "operations",
        key: "operations",
        fixed: "right",
        width: 200
      }
    ];
    const permissionTree = ref([]);
    const permissionModalStatus = ref(false);
    const isEdit = ref(false);
    const currentSelectedPermissionId = ref();
    const { run: getPermissionList, loading: getPermissionListLoading } = useRequest(
      PermissionService.getPermissionList,
      {
        manual: true,
        onSuccess: ({ data }) => {
          permissionTree.value = PermissionTree.convertPermissionToTableTree(data);
        }
      }
    );
    const { run: deletePermissionById, loading: deletePermissionByIdLoading } = useRequest(
      PermissionService.deletePermissionById,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("permission.messages.deleteSuccess"));
          getPermissionList();
        },
        onError: (error) => {
          api.error(error.message || t("permission.messages.deleteError"));
        }
      }
    );
    const openModal = (status) => {
      isEdit.value = status;
      permissionModalStatus.value = true;
    };
    const handleAddPermission = (permissionId) => {
      currentSelectedPermissionId.value = permissionId;
      openModal(false);
    };
    const handleEditPermission = (permissionId) => {
      currentSelectedPermissionId.value = permissionId;
      openModal(true);
    };
    const handleShowConfirmDelete = (permissionId) => {
      Modal.confirm({
        content: t("permission.messages.deleteConfirm"),
        icon: h(ExclamationCircleOutlined),
        onOk: async () => {
          try {
            await deletePermissionById(permissionId);
          } finally {
            return null;
          }
        }
      });
    };
    onMounted(async () => {
      await getPermissionList();
    });
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "permission-wrapper h-full",
        vertical: "",
        gap: "middle"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(unref(Button), {
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => handleAddPermission(0))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("permission.actions.addPermission")), 1)
              ]),
              _: 1
            })
          ]),
          createVNode(unref(QSpin), { spinning: unref(getPermissionListLoading) }, {
            default: withCtx(() => [
              createVNode(unref(Table), {
                pagination: false,
                class: "permission-table",
                "data-source": permissionTree.value,
                columns,
                "default-expand-all": true,
                "indent-size": 15,
                bordered: ""
              }, {
                bodyCell: withCtx(({ column, record }) => [
                  column.key === "operations" ? (openBlock(), createBlock(unref(Flex), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(unref(Button), {
                        size: "small",
                        onClick: ($event) => handleAddPermission(record.id),
                        type: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("permission.table.actions.add")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(unref(Button), {
                        size: "small",
                        onClick: ($event) => handleEditPermission(record.id),
                        type: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("permission.table.actions.edit")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(unref(Button), {
                        size: "small",
                        onClick: ($event) => handleShowConfirmDelete(record.id),
                        type: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("permission.table.actions.delete")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data-source"])
            ]),
            _: 1
          }, 8, ["spinning"]),
          createVNode(unref(PermissionModal), {
            "permission-id": currentSelectedPermissionId.value,
            "is-edit": isEdit.value,
            open: permissionModalStatus.value,
            "onUpdate:open": _cache[1] || (_cache[1] = ($event) => permissionModalStatus.value = $event),
            "permission-tree": permissionTree.value,
            onSuccess: unref(getPermissionList)
          }, null, 8, ["permission-id", "is-edit", "open", "permission-tree", "onSuccess"])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f6db6a8"]]);
export {
  index as default
};
