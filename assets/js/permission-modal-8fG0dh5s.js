import { d as defineComponent, ae as mergeModels, a8 as useCssVars, u as unref, af as useModel, r as ref, a as reactive, j as computed, w as watch, a2 as openBlock, a3 as createBlock, a4 as withCtx, c as createVNode, G as createTextVNode, aa as toDisplayString } from "./vue-vendor-C3i0i51a.js";
import { a as PermissionService } from "./permission-DIgwFTWF.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { Q as QSpin } from "./spin-DFBmYiCr.js";
import { u as useAntdToken } from "./index-BheweVra.js";
import { u as useI18n, a as useRequest } from "./index-x-LQkY-F.js";
import { O as OpenStatus } from "./status-DAOyfLNd.js";
import { h as api, F as Flex, B as Button, aj as Form, ak as FormItem, al as Input, S as Switch } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
const isPermissionExistName = (permissionTableTree, name) => {
  return permissionTableTree.some((permission) => {
    if (permission.name === name) return true;
    return permission.children && isPermissionExistName(permission.children, name);
  });
};
const isPermissionExistCode = (permissionTableTree, code) => {
  return permissionTableTree.some((permission) => {
    if (permission.code === code) return true;
    return permission.children && isPermissionExistName(permission.children, code);
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "permission-modal",
  props: /* @__PURE__ */ mergeModels({
    permissionId: {},
    isEdit: { type: Boolean },
    permissionTree: {}
  }, {
    "open": { default: false },
    "openModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["success"], ["update:open"]),
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "73032a2e": `${unref(token).marginLG}px`,
      "516a68fd": `${unref(token).paddingLG}px`,
      "30fcc644": `${unref(token).borderRadiusLG}px`,
      "13677b70": unref(token).colorBgContainer
    }));
    const modalStatus = useModel(__props, "open");
    const props = __props;
    const formRef = ref();
    const emits = __emit;
    const permissionForm = reactive({
      id: 0,
      name: "",
      code: "",
      description: "",
      enVisible: 0,
      type: 0,
      pid: 1
    });
    const { t } = useI18n();
    const modalTitle = computed(
      () => props.isEdit ? t("permission.modal.title.edit") : t("permission.modal.title.add")
    );
    const closeModal = () => {
      var _a;
      modalStatus.value = false;
      (_a = formRef.value) == null ? void 0 : _a.resetFields();
    };
    const isOpenPermission = computed(() => permissionForm.enVisible === OpenStatus.OPENED);
    const handleChangeIsOpenPermission = () => {
      permissionForm.enVisible = permissionForm.enVisible === OpenStatus.OPENED ? OpenStatus.CLOSED : OpenStatus.OPENED;
    };
    const permissionFormRules = {
      name: [
        { required: true, message: t("permission.modal.form.rules.name.required"), trigger: "blur" },
        {
          validator: async (_, value) => {
            return new Promise((resolve, reject) => {
              if (props.isEdit) return resolve();
              const isExist = isPermissionExistName(props.permissionTree, value);
              if (isExist) reject(t("permission.modal.form.rules.name.exists"));
              return resolve();
            });
          },
          trigger: "blur"
        },
        {
          max: 50,
          min: 2,
          message: t("permission.modal.form.rules.name.length"),
          trigger: "blur"
        }
      ],
      code: [
        { required: true, message: t("permission.modal.form.rules.code.required"), trigger: "blur" },
        {
          validator: async (_, value) => {
            return new Promise((resolve, reject) => {
              if (props.isEdit) return resolve();
              const isExist = isPermissionExistCode(props.permissionTree, value);
              if (isExist) reject(t("permission.modal.form.rules.code.exists"));
              resolve();
            });
          },
          trigger: "blur"
        },
        {
          max: 50,
          min: 2,
          message: t("permission.modal.form.rules.code.length"),
          trigger: "blur"
        }
      ]
    };
    const { run: updatePermission, loading: updatePermissionLoading } = useRequest(
      PermissionService.updatePermission,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("permission.messages.editSuccess"));
          closeModal();
          emits("success");
        },
        onError: (error) => {
          api.error(error.message || t("permission.messages.editError"));
        },
        onFinally: () => {
          closeModal();
        }
      }
    );
    const { run: getPermissionById, loading: getPermissionByIdLoading } = useRequest(
      PermissionService.getPermissionById,
      {
        manual: true,
        onSuccess: ({ data }) => {
          Object.assign(permissionForm, data);
        }
      }
    );
    const { run: addPermission, loading: addPermissionLoading } = useRequest(
      PermissionService.addPermission,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("permission.messages.addSuccess"));
          closeModal();
          emits("success");
        },
        onError: (error) => {
          api.error(error.message || t("permission.messages.addError"));
        }
      }
    );
    const handleConfirm = async () => {
      if (!formRef.value) return;
      formRef.value.validate().then(async (res) => {
        if (props.isEdit) {
          await updatePermission({ ...permissionForm });
        } else {
          const { id, ...rest } = permissionForm;
          await addPermission({ ...rest, pid: props.permissionId });
        }
      });
    };
    const handleCancel = () => closeModal();
    const loading = computed(() => addPermissionLoading.value || updatePermissionLoading.value);
    watch([modalStatus, () => props.permissionId], ([modalStatus2, permissionId]) => {
      props.isEdit && modalStatus2 && permissionId && getPermissionById(permissionId);
    });
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        mask: "",
        open: modalStatus.value,
        "onUpdate:open": _cache[3] || (_cache[3] = ($event) => modalStatus.value = $event),
        onCancel: handleCancel,
        title: modalTitle.value,
        closable: ""
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), {
            justify: "center",
            gap: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleConfirm,
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("permission.modal.buttons.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("permission.modal.buttons.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(QSpin), { spinning: unref(getPermissionByIdLoading) }, {
            default: withCtx(() => [
              createVNode(unref(Form), {
                layout: "vertical",
                ref_key: "formRef",
                ref: formRef,
                class: "permission-form",
                rules: permissionFormRules,
                model: permissionForm
              }, {
                default: withCtx(() => [
                  createVNode(unref(FormItem), {
                    label: unref(t)("permission.modal.form.fields.name"),
                    name: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: permissionForm.name,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => permissionForm.name = $event),
                        placeholder: unref(t)("permission.modal.form.placeholder.name")
                      }, null, 8, ["value", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("permission.modal.form.fields.code"),
                    name: "code"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: permissionForm.code,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => permissionForm.code = $event),
                        placeholder: unref(t)("permission.modal.form.placeholder.code")
                      }, null, 8, ["value", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("permission.modal.form.fields.description"),
                    name: "description"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Input), {
                        value: permissionForm.description,
                        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => permissionForm.description = $event),
                        placeholder: unref(t)("permission.modal.form.placeholder.description")
                      }, null, 8, ["value", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(unref(FormItem), {
                    label: unref(t)("permission.modal.form.fields.enable"),
                    name: "enVisible"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Switch), {
                        checked: isOpenPermission.value,
                        onChange: handleChangeIsOpenPermission
                      }, null, 8, ["checked"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          }, 8, ["spinning"])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
const permissionModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2f25a05"]]);
export {
  permissionModal as default
};
