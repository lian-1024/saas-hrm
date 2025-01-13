import { d as defineComponent, h, a3 as createBlock, ab as normalizeProps, ac as guardReactiveProps, u as unref, a2 as openBlock } from "./vue-vendor-C3i0i51a.js";
import { U as UserOutlined, ai as Avatar } from "./antd-vendor-D4nQN1Zz.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "QAvatar"
  },
  __name: "avatar",
  props: {
    isOther: { type: Boolean },
    prefixCls: {},
    shape: {},
    size: {},
    src: {},
    srcset: {},
    icon: { default: h(UserOutlined) },
    alt: { default: "avatar" },
    gap: {},
    draggable: { type: Boolean },
    crossOrigin: {},
    loadError: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Avatar), normalizeProps(guardReactiveProps(props)), null, 16);
    };
  }
});
export {
  _sfc_main as _
};
