import { _ as _sfc_main$1 } from "./modal.vue_vue_type_script_setup_true_lang-Ce1UU0sW.js";
import { Q as QSkeleton } from "./skeleton-LDWoY3Lm.js";
import { a as useRequest, u as useI18n } from "./index-x-LQkY-F.js";
import { a as AttendanceService } from "./index-CSx_oHto.js";
import { h as api, O as Text, N as Space, B as Button, aG as Radio, n as dayjs } from "./antd-vendor-D4nQN1Zz.js";
import { d as defineComponent, ae as mergeModels, af as useModel, r as ref, w as watch, a2 as openBlock, a3 as createBlock, a4 as withCtx, c as createVNode, u as unref, G as createTextVNode, aa as toDisplayString, ag as createBaseVNode, a6 as createElementBlock, F as Fragment, ai as renderList } from "./vue-vendor-C3i0i51a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-BheweVra.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
import "./spin-DFBmYiCr.js";
import "./department.service-BHm1UbAi.js";
import "./vue3-count-to.esm-lrySgJno.js";
const _hoisted_1 = { class: "attendance-status" };
const _hoisted_2 = { class: "status-note" };
const _hoisted_3 = { class: "attendance-status-radio-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "update-attendance",
  props: /* @__PURE__ */ mergeModels({
    day: {},
    adtStatu: {},
    userId: {},
    departmentId: {}
  }, {
    "open": { default: false },
    "openModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update"], ["update:open"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const openStatus = useModel(__props, "open");
    const selectedStatus = ref(0);
    watch(
      () => props.adtStatu,
      (newValue) => {
        selectedStatus.value = newValue;
      }
    );
    const statusRadioList = ref([]);
    const flatAttendanceAdtStatusList = (data) => {
      return data.map((item) => Object.entries(item)).flat().map((item) => {
        const [value, label] = item;
        return {
          label,
          value: Number(value)
        };
      });
    };
    const { run: getAttendancesAdtStatuList, loading: getAttendancesAdtStatuListLoading } = useRequest(
      AttendanceService.getAttendancesAdtStatuList,
      {
        manual: true,
        onSuccess: ({ data }) => {
          statusRadioList.value = flatAttendanceAdtStatusList(data);
        }
      }
    );
    const { t } = useI18n();
    const { run: updateAttendance2, loading: updateAttendanceLoading } = useRequest(
      AttendanceService.updateAttendance,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("attendance.updateModal.messages.updateSuccess"));
          openStatus.value = false;
          emits("update");
        },
        onError: () => {
          api.error(t("attendance.updateModal.messages.updateError"));
        }
      }
    );
    watch(
      () => props.userId,
      (newValue) => {
        console.log("newValue", newValue);
        if (newValue) {
          getAttendancesAdtStatuList(newValue);
        }
      }
    );
    const handleConfirm = () => {
      updateAttendance2(props.userId, {
        adtStatu: selectedStatus.value,
        day: dayjs(props.day).format("YYYYMMDD"),
        departmentId: props.departmentId,
        userId: props.userId
      });
    };
    const handleCancel = () => {
      openStatus.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        open: openStatus.value,
        "onUpdate:open": _cache[1] || (_cache[1] = ($event) => openStatus.value = $event),
        mask: ""
      }, {
        title: withCtx(() => [
          createVNode(unref(Text), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("attendance.updateModal.title", { date: _ctx.day })), 1)
            ]),
            _: 1
          })
        ]),
        footer: withCtx(() => [
          createVNode(unref(Space), null, {
            default: withCtx(() => [
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.updateModal.buttons.cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), {
                type: "primary",
                loading: unref(updateAttendanceLoading),
                onClick: handleConfirm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.updateModal.buttons.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("p", _hoisted_2, toDisplayString(unref(t)("attendance.updateModal.note")), 1),
            createVNode(unref(QSkeleton), {
              loading: unref(getAttendancesAdtStatuListLoading),
              active: "",
              title: false,
              paragraph: {
                rows: 8
              }
            }, {
              default: withCtx(() => [
                createVNode(unref(Radio).Group, {
                  value: selectedStatus.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => selectedStatus.value = $event)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(statusRadioList.value, (item) => {
                        return openBlock(), createBlock(unref(Radio), {
                          key: item.value,
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const updateAttendance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93efe109"]]);
export {
  updateAttendance as default
};
