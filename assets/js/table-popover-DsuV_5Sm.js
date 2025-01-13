import { A as ATTENDANCE_STATUS } from "./index-BIbZ-NlI.js";
import { u as useI18n } from "./index-BRjnmkr0.js";
import { aC as Card, u as Tag, F as Flex, O as Text, z as Popover } from "./antd-vendor-NhxykF_l.js";
import { d as defineComponent, j as computed, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, u as unref, G as createTextVNode, a9 as toDisplayString, a6 as normalizeStyle } from "./vue-vendor-DA6b90QH.js";
import "./skeleton-BcvgInEH.js";
import "./spin-DsTR0G8T.js";
import "./index-Bc78yVQl.js";
import "./department.service-BtZcd_gd.js";
import "./vue3-count-to.esm-Ct424Pdd.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table-popover",
  props: {
    username: {},
    yearOfReport: {},
    monthOfReport: {},
    dayOfReport: {},
    adtStatu: {},
    adtInTime: { default: "-" },
    adtOutTime: { default: "-" },
    adtInPlace: { default: "-" },
    adtOutPlace: { default: "-" }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const title = computed(
      () => t("attendance.record.title", {
        username: props.username,
        date: `${props.yearOfReport}/${props.monthOfReport}/${props.dayOfReport}`
      })
    );
    const status = computed(() => {
      const status2 = ATTENDANCE_STATUS[props.adtStatu];
      return {
        text: t("attendance.status." + props.adtStatu),
        color: status2.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Popover), null, {
        content: withCtx(() => [
          createVNode(unref(Card), {
            title: title.value,
            "head-style": { padding: "var(--spacing-large)" },
            style: { "min-width": "500px" }
          }, {
            extra: withCtx(() => [
              createVNode(unref(Tag), {
                color: status.value.color
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(status.value.text), 1)
                ]),
                _: 1
              }, 8, ["color"])
            ]),
            default: withCtx(() => [
              createVNode(unref(Flex), {
                vertical: "",
                gap: "large"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Text), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.popover.checkInTime")) + "：" + toDisplayString(_ctx.adtInTime), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Text), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.popover.checkOutTime")) + "：" + toDisplayString(_ctx.adtOutTime), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Text), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.popover.checkInPlace")) + "：" + toDisplayString(_ctx.adtInPlace), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Text), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("attendance.popover.checkOutPlace")) + "：" + toDisplayString(_ctx.adtOutPlace), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        default: withCtx(() => [
          createVNode(unref(Text), {
            style: normalizeStyle({ color: status.value.color })
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(status.value.text), 1)
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
