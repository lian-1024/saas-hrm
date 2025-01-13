import { u as useAntdToken } from "./index-BheweVra.js";
import { d as defineComponent, ao as useSlots, a2 as openBlock, a3 as createBlock, ap as createSlots, ai as renderList, a4 as withCtx, aj as renderSlot, ab as normalizeProps, ac as guardReactiveProps, u as unref } from "./vue-vendor-C3i0i51a.js";
import { ae as Modal } from "./antd-vendor-D4nQN1Zz.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "QModal"
  },
  __name: "modal",
  props: {
    prefixCls: {},
    visible: { type: Boolean },
    open: { type: Boolean },
    confirmLoading: { type: Boolean },
    title: {},
    closable: { type: Boolean },
    closeIcon: {},
    onOk: { type: Function },
    onCancel: { type: Function },
    "onUpdate:visible": { type: Function },
    "onUpdate:open": { type: Function },
    onChange: { type: Function },
    afterClose: { type: Function },
    centered: { type: Boolean },
    width: {},
    footer: {},
    okText: {},
    okType: {},
    cancelText: {},
    icon: {},
    maskClosable: { type: Boolean },
    forceRender: { type: Boolean },
    okButtonProps: {},
    cancelButtonProps: {},
    destroyOnClose: { type: Boolean },
    wrapClassName: {},
    maskTransitionName: {},
    transitionName: {},
    getContainer: { type: [String, Boolean, Function] },
    zIndex: {},
    bodyStyle: {},
    maskStyle: {},
    mask: { type: Boolean },
    keyboard: { type: Boolean },
    wrapProps: {},
    focusTriggerAfterClose: { type: Boolean },
    modalRender: { type: Function },
    mousePosition: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Modal), normalizeProps(guardReactiveProps(props)), createSlots({ _: 2 }, [
        renderList(slots, (value, key) => {
          return {
            name: key,
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, key, normalizeProps(guardReactiveProps(scope || {})))
            ])
          };
        })
      ]), 1040);
    };
  }
});
export {
  _sfc_main as _
};
