import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { u as useI18n } from "./index-BRjnmkr0.js";
import { d as defineComponent, a4 as useRouter, c as createVNode, b as isVNode, j as computed, a1 as openBlock, a5 as createElementBlock, u as unref, a6 as normalizeStyle } from "./vue-vendor-DA6b90QH.js";
import { B as Button, R as Result } from "./antd-vendor-NhxykF_l.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const ResultTitle = /* @__PURE__ */ defineComponent({
  name: "ResultTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  setup(props) {
    useI18n();
    useAntdToken();
    return () => createVNode("div", {
      "style": {
        color: props.color
      }
    }, [props.title]);
  }
});
const ResultSubTitle = /* @__PURE__ */ defineComponent({
  name: "ResultSubTitle",
  props: {
    subTitle: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  },
  setup(props) {
    return () => createVNode("div", {
      "style": {
        color: props.color
      }
    }, [props.subTitle]);
  }
});
const Result404 = /* @__PURE__ */ defineComponent({
  name: "Result404",
  setup() {
    const {
      t
    } = useI18n();
    const router = useRouter();
    const {
      token
    } = useAntdToken();
    return () => createVNode(Result, {
      "status": "404",
      "title": createVNode(ResultTitle, {
        "title": t("result.404.title"),
        "color": token.value.colorText
      }, null),
      "subTitle": createVNode(ResultSubTitle, {
        "subTitle": t("result.404.subTitle"),
        "color": token.value.colorTextSecondary
      }, null)
    }, {
      extra: () => {
        let _slot;
        return createVNode(Button, {
          "type": "primary",
          "onClick": () => router.push("/dashboard")
        }, _isSlot(_slot = t("result.404.extra")) ? _slot : {
          default: () => [_slot]
        });
      }
    });
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  setup(__props) {
    const { token } = useAntdToken();
    const styles = computed(() => ({
      backgroundColor: token.value.colorBgContainer,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(styles.value)
      }, [
        createVNode(unref(Result404))
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
