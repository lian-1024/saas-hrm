const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/modal-BqDjZOQy.js","assets/js/modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js","assets/js/index-Bc78yVQl.js","assets/js/antd-vendor-NhxykF_l.js","assets/js/vue-vendor-DA6b90QH.js","assets/js/lodash-vendor-B6NgBDy-.js","assets/js/spin-DsTR0G8T.js","assets/js/index-BRjnmkr0.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/department.service-BtZcd_gd.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js"])))=>i.map(i=>d[i]);
import { u as useI18n, a as useRequest, d as useTheme, _ as __vitePreload } from "./index-BRjnmkr0.js";
import { d as defineComponent, s as shallowRef, r as ref, o as onMounted, a1 as openBlock, a2 as createBlock, a3 as withCtx, u as unref, a7 as useCssVars, c as createVNode, G as createTextVNode, a9 as toDisplayString, h, ac as defineAsyncComponent } from "./vue-vendor-DA6b90QH.js";
import { Q as QSkeleton } from "./skeleton-BcvgInEH.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { D as DepartmentService } from "./department.service-BtZcd_gd.js";
import { D as DepartmentTree } from "./department-BQT5hIqY.js";
import { F as Flex, h as api, ac as Tree, O as Text, H as Dropdown, M as Menu, ad as DownOutlined, ae as Modal } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DepartmentPage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "69d1a064": `${unref(token).paddingLG * 2}px`,
      "743b1625": unref(token).colorBgContainer,
      "11bb6b49": `${unref(token).borderRadiusLG}px`,
      "f3332ade": unref(token).colorBorderSecondary,
      "2b058f12": `${unref(token).paddingXXS}px`,
      "2e253117": unref(isDark) && `transparent`,
      "7051a9e0": unref(isDark) ? unref(token).colorPrimary : unref(token).colorPrimaryHover
    }));
    const DepartmentModal = defineAsyncComponent(() => __vitePreload(() => import("./modal-BqDjZOQy.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0));
    const { t } = useI18n();
    const { token } = useAntdToken();
    const departmentTree = shallowRef([]);
    const selectedDepartmentId = ref();
    const operations = [
      {
        key: "addChild",
        label: t("department.operations.addChild")
      },
      {
        key: "edit",
        label: t("department.operations.edit")
      },
      {
        key: "delete",
        label: t("department.operations.delete")
      }
    ];
    const modalOpen = ref(false);
    const modalType = ref("addChild");
    const handleOpenModal = (type, departmentId) => {
      modalOpen.value = true;
      modalType.value = type;
      selectedDepartmentId.value = departmentId;
    };
    const { loading: getListLoading, run: getCompanyDepartmentList } = useRequest(
      DepartmentService.getCompanyDepartmentList,
      {
        onSuccess: (data) => {
          departmentTree.value = DepartmentTree.toTree(data.data);
        }
      }
    );
    const handleAddSubDepartment = (key) => {
      handleOpenModal("addChild", key.toString());
    };
    const handleEditDepartment = (key) => {
      handleOpenModal("edit", key.toString());
    };
    const deleteDepartmentConfirm = ref(false);
    const { run: deleteDepartment, loading: deleteDepartmentLoading } = useRequest(
      DepartmentService.deleteDepartment,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("department.operations.operationMessage.deleteSuccess"));
          getCompanyDepartmentList();
        },
        onError: (error) => {
          api.error(error.message || t("department.operations.operationMessage.deleteError"));
        },
        onFinally: () => {
          deleteDepartmentConfirm.value = false;
        }
      }
    );
    const handleDeleteDepartment = (key) => {
      Modal.error({
        title: t("department.operations.operationMessage.deleteConfirmTitle"),
        content: t("department.operations.operationMessage.deleteConfirmContent"),
        okText: t("department.operations.operationMessage.confirmDelete"),
        closable: true,
        cancelText: t("department.operations.operationMessage.cancelDelete"),
        onOk: async () => {
          await deleteDepartment(key.toString());
          return null;
        }
      });
    };
    const operationClickMap = {
      addChild: handleAddSubDepartment,
      edit: handleEditDepartment,
      delete: handleDeleteDepartment
    };
    const handleOperationClick = (info, key) => {
      operationClickMap[info.key](key);
    };
    const { isDark } = useTheme();
    onMounted(async () => {
      await getCompanyDepartmentList();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "department-wrapper",
        justify: "center",
        align: "start"
      }, {
        default: withCtx(() => [
          createVNode(unref(QSkeleton), {
            loading: unref(getListLoading),
            active: "",
            title: false,
            paragraph: {
              rows: 16
            }
          }, {
            default: withCtx(() => [
              createVNode(unref(Tree), {
                class: "department-tree flex-1",
                "default-expand-all": "",
                draggable: "",
                "block-node": "",
                "tree-data": departmentTree.value
              }, {
                title: withCtx(({ title, managerName, key }) => [
                  createVNode(unref(Flex), {
                    class: "department-tree-item",
                    justify: "space-between"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Text), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(Flex), { gap: "middle" }, {
                        default: withCtx(() => [
                          createVNode(unref(Text), { type: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(managerName), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(Dropdown), {
                            overlay: h(unref(Menu), { items: operations, onClick: (info) => handleOperationClick(info, key) }),
                            arrow: { pointAtCenter: true }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Text), { type: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("department.operations.title")) + " ", 1),
                                  createVNode(unref(DownOutlined))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["overlay"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["tree-data"])
            ]),
            _: 1
          }, 8, ["loading"]),
          createVNode(unref(DepartmentModal), {
            open: modalOpen.value,
            "onUpdate:open": _cache[0] || (_cache[0] = ($event) => modalOpen.value = $event),
            type: modalType.value,
            "department-id": selectedDepartmentId.value,
            onSuccess: unref(getCompanyDepartmentList)
          }, null, 8, ["open", "type", "department-id", "onSuccess"])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eac30cdf"]]);
export {
  index as default
};
