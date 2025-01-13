import { aO as skeletonProps, aP as Skeleton } from "./antd-vendor-NhxykF_l.js";
import { d as defineComponent, c as createVNode } from "./vue-vendor-DA6b90QH.js";
const QSkeleton = /* @__PURE__ */ defineComponent({
  name: "QSkeleton",
  props: skeletonProps(),
  setup(props, {
    slots
  }) {
    const defaultProps = {
      active: true
    };
    return () => {
      const mergeProps = {
        ...defaultProps,
        ...props
      };
      return createVNode(Skeleton, mergeProps, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
export {
  QSkeleton as Q
};
