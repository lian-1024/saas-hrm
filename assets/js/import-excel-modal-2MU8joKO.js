import { d as defineComponent, af as useModel, a2 as openBlock, a3 as createBlock, a4 as withCtx, c as createVNode, u as unref, G as createTextVNode, aa as toDisplayString, ag as createBaseVNode, ab as normalizeProps, ac as guardReactiveProps, B as withModifiers } from "./vue-vendor-C3i0i51a.js";
import { E as EmployeeService } from "./employee.service-8UfBD8Jx.js";
import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { u as useI18n, a as useRequest } from "./index-x-LQkY-F.js";
import { F as FileSaver } from "./index-BKi6ckzo.js";
import { h as api, F as Flex, B as Button, aM as UploadDragger, aN as InboxOutlined, aa as Link } from "./antd-vendor-D4nQN1Zz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-BheweVra.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
import "./avatar.vue_vue_type_script_setup_true_lang-ByGzOMG-.js";
import "./skeleton-LDWoY3Lm.js";
import "./spin-DFBmYiCr.js";
import "./department.service-BHm1UbAi.js";
import "./department-BQT5hIqY.js";
const _hoisted_1 = { class: "import-wrapper" };
const _hoisted_2 = { class: "ant-upload-drag-icon" };
const _hoisted_3 = { class: "ant-upload-hint import-click" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "import-excel-modal",
  props: {
    "open": { default: false },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props) {
    const { t } = useI18n();
    const modalStatus = useModel(__props, "open");
    const { run: getExportTemplate } = useRequest(EmployeeService.getExportTemplate, {
      manual: true,
      onSuccess: ({ data }) => {
        FileSaver.saveAs(data, "员工导入模版.xlsx");
      }
    });
    const handleUploadFile = (options) => {
      const { file, onSuccess, onError } = options;
      const formData = new FormData();
      formData.append("file", file);
      uploadEmployee(formData).then((res) => {
        onSuccess == null ? void 0 : onSuccess(res);
      }).catch((err) => {
        onError == null ? void 0 : onError(err);
      });
    };
    const uploadProps = {
      name: "file",
      multiple: false,
      accept: ".xlsx,.xls",
      showUploadList: false,
      customRequest: handleUploadFile,
      beforeUpload: (file) => {
        const isExcel = file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "application/vnd.ms-excel";
        if (!isExcel) {
          api.error(t("employee.importModal.fileType.error"));
          return false;
        }
        return true;
      }
    };
    const { run: uploadEmployee, loading: uploadEmployeeLoading } = useRequest(
      EmployeeService.uploadEmployee,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("employee.importModal.success"));
          modalStatus.value = false;
        },
        onError: (error) => {
          api.error(error.message || t("employee.importModal.error"));
        }
      }
    );
    const handleCancel = () => {
      modalStatus.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        open: modalStatus.value,
        "onUpdate:open": _cache[0] || (_cache[0] = ($event) => modalStatus.value = $event),
        title: unref(t)("employee.importModal.title"),
        mask: "",
        "mask-closable": ""
      }, {
        footer: withCtx(() => [
          createVNode(unref(Flex), {
            justify: "flex-end",
            gap: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("employee.importModal.buttons.cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), {
                type: "primary",
                loading: unref(uploadEmployeeLoading)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("employee.importModal.buttons.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(UploadDragger), normalizeProps(guardReactiveProps(uploadProps)), {
              default: withCtx(() => [
                createBaseVNode("p", _hoisted_2, [
                  createVNode(unref(InboxOutlined))
                ]),
                createVNode(unref(Link), {
                  class: "ant-upload-text",
                  onClick: withModifiers(unref(getExportTemplate), ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("employee.importModal.downloadTemplate")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createBaseVNode("p", _hoisted_3, [
                  createTextVNode(toDisplayString(unref(t)("employee.importModal.dragText")) + " ", 1),
                  createVNode(unref(Link), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("employee.importModal.clickToUpload")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }, 16)
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
const importExcelModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7701c7fb"]]);
export {
  importExcelModal as default
};
