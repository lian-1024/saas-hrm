const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/add-role-modal-Bn9Bij9y.js","assets/js/vue-vendor-DA6b90QH.js","assets/js/role.service-DKKBeOKz.js","assets/js/index-BRjnmkr0.js","assets/js/antd-vendor-NhxykF_l.js","assets/js/lodash-vendor-B6NgBDy-.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/modal.vue_vue_type_script_setup_true_lang-Bta_4zAf.js","assets/js/index-Bc78yVQl.js","assets/js/status-DAOyfLNd.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js","assets/js/give-permission-modal-CHiW8QrC.js","assets/js/permission-Be3zjhRb.js","assets/js/skeleton-BcvgInEH.js"])))=>i.map(i=>d[i]);
import { u as useI18n, a as useRequest, _ as __vitePreload } from "./index-BRjnmkr0.js";
import { d as defineComponent, r as ref, a as reactive, j as computed, o as onMounted, a1 as openBlock, a2 as createBlock, a3 as withCtx, u as unref, a7 as useCssVars, c as createVNode, G as createTextVNode, a9 as toDisplayString, a5 as createElementBlock, F as Fragment, al as createCommentVNode, ac as defineAsyncComponent } from "./vue-vendor-DA6b90QH.js";
import { Q as QSpin } from "./spin-DsTR0G8T.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { R as RoleService } from "./role.service-DKKBeOKz.js";
import { F as Flex, h as api, B as Button, a0 as Table, O as Text, al as Input, av as Textarea, S as Switch, u as Tag, aa as Link, ah as Popconfirm, aw as cloneDeep } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RolePage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "288a8ad5": `${unref(token).paddingLG}px`,
      "2af0c570": unref(token).colorBgContainer,
      "44e4e206": `${unref(token).borderRadiusLG}px`,
      "6704a834": unref(token).colorBorderSecondary
    }));
    const { t } = useI18n();
    const { token } = useAntdToken();
    const AddRoleModal = defineAsyncComponent(() => __vitePreload(() => import("./add-role-modal-Bn9Bij9y.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0));
    const GivePermissionModal = defineAsyncComponent(
      () => __vitePreload(() => import("./give-permission-modal-CHiW8QrC.js"), true ? __vite__mapDeps([11,1,12,3,4,5,6,2,7,8,13,10]) : void 0)
    );
    const canEditable = ["name", "state", "description"];
    const roleColumns = [
      {
        title: t("role.table.columns.key"),
        dataIndex: "id",
        key: "key"
      },
      {
        title: t("role.table.columns.role"),
        dataIndex: "name",
        key: "name"
      },
      {
        title: t("role.table.columns.status"),
        dataIndex: "state",
        key: "state"
      },
      {
        title: t("role.table.columns.description"),
        dataIndex: "description",
        key: "description"
      },
      {
        title: t("role.table.columns.actions"),
        key: "actions"
      }
    ];
    const permissionModalStatus = ref(false);
    const selectedRoleId = ref();
    const roleTableDataSource = ref({
      total: 0,
      rows: []
    });
    const defaultPagingQueryParams = {
      page: 1,
      pagesize: 10
    };
    const pagingQueryParams = reactive(defaultPagingQueryParams);
    const addRoleModalStatus = ref(false);
    const editableData = reactive({});
    const { run: getRoleList, loading: getRoleListLoading } = useRequest(
      () => RoleService.getRoleList(pagingQueryParams),
      {
        manual: true,
        onSuccess: ({ data }) => {
          roleTableDataSource.value = data;
        }
      }
    );
    const { run: updateRole, loading: updateRoleLoading } = useRequest(RoleService.updateRole, {
      manual: true,
      onSuccess: () => {
        api.success(t("role.table.operationMessage.editRoleSuccess"));
      },
      onError: (error) => {
        api.error(error.message || t("role.table.operationMessage.editRoleError"));
      }
    });
    const { run: deleteRoleById, loading: deleteRoleLoading } = useRequest(RoleService.deleteRoleById, {
      manual: true,
      onSuccess: () => {
        api.success(t("role.table.operationMessage.deleteRoleSuccess"));
        getRoleList();
      },
      onError: (error) => {
        api.error(error.message || t("role.table.operationMessage.deleteRoleError"));
      }
    });
    const handleGivePermission = (key) => {
      selectedRoleId.value = key;
      permissionModalStatus.value = true;
    };
    const handleEditRole = (key) => {
      editableData[key] = cloneDeep(roleTableDataSource.value.rows.filter((item) => item.id === key)[0]);
    };
    const handleSaveEditRole = async (key) => {
      const newData = editableData[key];
      updateRole(newData).then(
        () => (
          // 复制对象
          Object.assign(roleTableDataSource.value.rows.filter((item) => item.id === key)[0], newData)
        )
      ).finally(() => {
        delete editableData[key];
      });
    };
    const handleCancelEditRole = (key) => {
      delete editableData[key];
    };
    const handleDeleteRole = async (key) => {
      selectedRoleId.value = key;
      await deleteRoleById(key);
    };
    const handleChangeTablePagination = async (page, pageSize) => {
      pagingQueryParams.page = page;
      pagingQueryParams.pagesize = pageSize;
      await getRoleList(pagingQueryParams);
    };
    const tablePaginationPosition = ["bottomCenter"];
    const tablePaginationPageSizeOptions = ["5", "10", "20", "30", "40", "50"];
    const handleSwitchChange = (checked, record) => {
      editableData[record.id].state = checked ? 1 : 0;
    };
    const handleConfirmAddRole = () => {
      const totalPages = Math.ceil((roleTableDataSource.value.total + 1) / pagingQueryParams.pagesize);
      pagingQueryParams.page = totalPages;
      getRoleList(pagingQueryParams);
    };
    const roleIsEnable = computed(() => (id) => {
      var _a;
      return ((_a = editableData[id]) == null ? void 0 : _a.state) === 1;
    });
    onMounted(async () => {
      await getRoleList();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "role-wrapper",
        vertical: "",
        align: "start",
        gap: "middle"
      }, {
        default: withCtx(() => [
          createVNode(unref(Button), {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => addRoleModalStatus.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("role.table.actions.addRole")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(QSpin), {
            spinning: unref(getRoleListLoading) || unref(updateRoleLoading),
            "wrapper-class-name": "flex-1 w-full"
          }, {
            default: withCtx(() => [
              createVNode(unref(Table), {
                class: "w-full",
                pagination: {
                  position: tablePaginationPosition,
                  pageSizeOptions: tablePaginationPageSizeOptions,
                  onChange: handleChangeTablePagination,
                  total: roleTableDataSource.value.total,
                  current: pagingQueryParams.page
                },
                columns: roleColumns,
                dataSource: roleTableDataSource.value.rows,
                bordered: ""
              }, {
                headerCell: withCtx(({ title }) => [
                  createVNode(unref(Text), { type: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(title), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                bodyCell: withCtx(({ column, record, text }) => [
                  canEditable.includes(String(column.dataIndex)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    editableData[record.id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      column.key === "name" ? (openBlock(), createBlock(unref(Input), {
                        key: 0,
                        value: editableData[record.id][column.key],
                        "onUpdate:value": ($event) => editableData[record.id][column.key] = $event
                      }, null, 8, ["value", "onUpdate:value"])) : column.key === "description" ? (openBlock(), createBlock(unref(Textarea), {
                        key: 1,
                        value: editableData[record.id][column.key],
                        "onUpdate:value": ($event) => editableData[record.id][column.key] = $event
                      }, null, 8, ["value", "onUpdate:value"])) : column.key === "state" ? (openBlock(), createBlock(unref(Switch), {
                        key: 2,
                        checked: roleIsEnable.value(record.id),
                        onChange: (checked) => handleSwitchChange(checked, record)
                      }, null, 8, ["checked", "onChange"])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      column.key === "state" ? (openBlock(), createBlock(unref(Tag), {
                        key: 0,
                        color: Boolean(record.state) ? "blue" : "default"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(Boolean(record.state) ? _ctx.$t("common.enable.enable") : _ctx.$t("common.enable.disable")), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(text), 1)
                      ], 64))
                    ], 64))
                  ], 64)) : createCommentVNode("", true),
                  column.key === "actions" ? (openBlock(), createBlock(unref(Flex), {
                    key: 1,
                    gap: "small",
                    wrap: "wrap"
                  }, {
                    default: withCtx(() => [
                      !editableData[record.id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createVNode(unref(Link), {
                          onClick: ($event) => handleGivePermission(record.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("role.table.actions.givePermission")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(unref(Link), {
                          onClick: ($event) => handleEditRole(record.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("role.table.actions.edit")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(unref(Popconfirm), {
                          title: unref(t)("role.table.operationMessage.deleteConfirmTitle"),
                          onConfirm: ($event) => handleDeleteRole(record.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Link), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("role.table.actions.delete")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "onConfirm"])
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createVNode(unref(Link), {
                          onClick: ($event) => handleSaveEditRole(record.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("role.table.actions.save")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(unref(Popconfirm), {
                          title: _ctx.$t("role.table.operationMessage.cancelConfirmTitle"),
                          onConfirm: ($event) => handleCancelEditRole(record.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Link), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("role.table.actions.cancel")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["title", "onConfirm"])
                      ], 64))
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["pagination", "dataSource"])
            ]),
            _: 1
          }, 8, ["spinning"]),
          createVNode(unref(AddRoleModal), {
            onSuccess: handleConfirmAddRole,
            open: addRoleModalStatus.value,
            "onUpdate:open": _cache[1] || (_cache[1] = ($event) => addRoleModalStatus.value = $event)
          }, null, 8, ["open"]),
          createVNode(unref(GivePermissionModal), {
            "role-id": selectedRoleId.value,
            open: permissionModalStatus.value,
            "onUpdate:open": _cache[2] || (_cache[2] = ($event) => permissionModalStatus.value = $event)
          }, null, 8, ["role-id", "open"])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b48bfc6a"]]);
export {
  index as default
};
