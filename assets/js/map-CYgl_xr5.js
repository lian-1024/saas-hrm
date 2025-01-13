import { d as useTheme, Y, J, W, F } from "./index-BRjnmkr0.js";
import { c as convertDistance } from "./drawer-CMtv2oBh.js";
import { d as defineComponent, ad as mergeModels, ae as useModel, j as computed, r as ref, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, u as unref } from "./vue-vendor-DA6b90QH.js";
import "./antd-vendor-NhxykF_l.js";
import "./lodash-vendor-B6NgBDy-.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./skeleton-BcvgInEH.js";
import "./index-Bc78yVQl.js";
import "./index-BIbZ-NlI.js";
import "./spin-DsTR0G8T.js";
import "./department.service-BtZcd_gd.js";
import "./vue3-count-to.esm-Ct424Pdd.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./generate-menu-item-EqEeHg1E.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AttendanceScopedMap"
  },
  __name: "map",
  props: /* @__PURE__ */ mergeModels({
    scopedRadius: {},
    scopedCenter: {}
  }, {
    "scopedRadius": { default: 500 },
    "scopedRadiusModifiers": {},
    "scopedCenter": { default: { lat: 39.91799, lng: 116.397027 } },
    "scopedCenterModifiers": {}
  }),
  emits: ["update:scopedRadius", "update:scopedCenter"],
  setup(__props) {
    const { isDark } = useTheme();
    const scopedRadius = useModel(__props, "scopedRadius");
    const scopedCenter = useModel(__props, "scopedCenter");
    const scopedRadiusText = computed(() => convertDistance(scopedRadius.value));
    const mapZoom = ref(15);
    const handleClickMap = (e) => {
      console.log(e);
    };
    const mapControl = {
      scale: {},
      zoom: {
        position: "topRight"
      }
    };
    const mapOptions = {
      mapStyleId: isDark ? "style2" : "style1"
    };
    const circleStyles = {
      circle: {
        color: "rgba(41,91,255,0.16)",
        showBorder: true,
        borderColor: "rgba(41,91,255,1)",
        borderWidth: 2
      }
    };
    const circleGeometriesComputed = computed(() => [
      { styleId: "circle", radius: scopedRadius.value, center: scopedCenter.value }
    ]);
    const circleOptions = {
      zIndex: 1
    };
    const labelStyles = {
      color: "#333",
      //颜色属性
      size: 20,
      //文字大小属性
      offset: { x: 0, y: 0 },
      //文字偏移属性单位为像素
      angle: 0,
      //文字旋转属性
      alignment: "center",
      //文字水平对齐属性
      verticalAlignment: "middle",
      //文字垂直对齐属性
      backgroundColor: "#ffffff",
      padding: "15px"
    };
    const labelGeometriesComputed = computed(() => [
      {
        id: "label",
        //点图形数据的标志信息
        styleId: "label",
        //样式id
        position: scopedCenter.value,
        //标注点位置
        content: `${scopedRadiusText.value}可打卡`,
        //标注文本
        properties: {
          //标注点的属性数据
          title: "label"
        }
      }
    ]);
    const computedMarker = computed(() => ({
      geometries: [{ styleId: "marker", position: scopedCenter.value }],
      styles: {
        marker: {
          width: 20,
          height: 30,
          anchor: { x: 10, y: 30 }
        }
      },
      options: {
        minZoom: 5,
        maxZoom: 15
      }
    }));
    const mapRef = ref();
    const mapApiKey = computed(() => "OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(F), {
        ref_key: "mapRef",
        ref: mapRef,
        options: mapOptions,
        class: "h-full w-full",
        "api-key": mapApiKey.value,
        center: scopedCenter.value,
        zoom: mapZoom.value,
        control: mapControl,
        onClick: handleClickMap
      }, {
        default: withCtx(() => [
          createVNode(unref(Y), {
            geometries: circleGeometriesComputed.value,
            styles: circleStyles,
            options: circleOptions
          }, null, 8, ["geometries"]),
          createVNode(unref(J), {
            styles: labelStyles,
            geometries: labelGeometriesComputed.value
          }, null, 8, ["geometries"]),
          createVNode(unref(W), {
            geometries: computedMarker.value.geometries,
            styles: computedMarker.value.styles,
            options: computedMarker.value.options
          }, null, 8, ["geometries", "styles", "options"])
        ]),
        _: 1
      }, 8, ["api-key", "center", "zoom"]);
    };
  }
});
export {
  _sfc_main as default
};
