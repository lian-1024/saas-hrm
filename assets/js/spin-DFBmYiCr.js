import { aK as spinProps, aL as Spin } from "./antd-vendor-D4nQN1Zz.js";
import { d as defineComponent, c as createVNode } from "./vue-vendor-C3i0i51a.js";
const QSpin = /* @__PURE__ */ defineComponent({
  name: "QSpin",
  props: spinProps(),
  setup(props, {
    slots,
    attrs
  }) {
    const defaultProps = {
      delay: 300
    };
    return () => {
      const mergedProps = {
        ...defaultProps,
        ...props
      };
      return createVNode(Spin, mergedProps, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
export {
  QSpin as Q
};
