import { d as defineComponent, h, a2 as createBlock, aa as normalizeProps, ab as guardReactiveProps, u as unref, a1 as openBlock } from "./vue-vendor-DA6b90QH.js";
import { U as UserOutlined, ai as Avatar } from "./antd-vendor-NhxykF_l.js";
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
