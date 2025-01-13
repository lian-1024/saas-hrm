import { d as defineComponent, r as ref, a1 as openBlock, a2 as createBlock, u as unref, a7 as useCssVars, a3 as withCtx, c as createVNode, G as createTextVNode, a9 as toDisplayString, ai as renderSlot, j as computed, a5 as createElementBlock, a6 as normalizeStyle, w as watch, n as nextTick, ah as renderList, F as Fragment, h, af as createBaseVNode, a8 as resolveDynamicComponent, o as onMounted, aa as normalizeProps, ab as guardReactiveProps, aj as mergeProps, a0 as resolveComponent, ak as shallowReactive } from "./vue-vendor-DA6b90QH.js";
import { i as instance, g as useDark, h as useWindowSize, t as tryOnUnmounted, j as useDebounceFn, k as useTimeoutFn, l as useResizeObserver, c as useLocale, e as useUserStore, a as useRequest } from "./index-BRjnmkr0.js";
import { a2 as Calendar, O as Text, F as Flex, a3 as FlagTwoTone, a4 as BookTwoTone, a5 as PhoneTwoTone, a6 as PlusCircleTwoTone, u as Tag, a7 as Divider, a8 as List, a9 as ListItemMeta, aa as Link, ab as ListItem } from "./antd-vendor-NhxykF_l.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { A as Axis, C as ChartView, a as ComponentModel, b as ComponentView, S as SeriesData, M as Model, P as PRIORITY, c as SeriesModel, d as color, e as connect, f as dataTool, g as dependencies, h as disConnect, i as disconnect, j as dispose, k as env, l as extendChartView, m as extendComponentModel, n as extendComponentView, o as extendSeriesModel, p as format, q as getCoordinateSystemDimensions, r as getInstanceByDom, s as getInstanceById, t as getMap, u as graphic, v as helper, w as init, x as brushSingle, y as matrix, z as number, B as parseGeoJSON, D as registerAction, E as registerCoordinateSystem, F as registerLayout, G as registerLoading, H as registerLocale, I as registerMap, J as registerPostInit, K as registerPostUpdate, L as registerPreprocessor, N as registerProcessor, O as registerTheme, Q as registerTransform, R as registerUpdateLifecycle, T as registerVisual, U as setCanvasCreator, V as setPlatformAPI, W as throttle, X as time, Y as use, Z as util, _ as vector, $ as version, a0 as util$1, a1 as zrender, a2 as install, a3 as install$1, a4 as install$2, a5 as install$3, a6 as install$4, a7 as install$5, a8 as install$6, a9 as install$7, aa as install$8, ab as installLabelLayout, ac as installUniversalTransition, ad as install$9, ae as install$a, af as install$b } from "./echarts-vendor-BHl0u8da.js";
import { Q as QSkeleton } from "./skeleton-BcvgInEH.js";
import { C as CountTo } from "./vue3-count-to.esm-Ct424Pdd.js";
import { _ as _sfc_main$c } from "./avatar.vue_vue_type_script_setup_true_lang-CO2EBu4c.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
class HomeService {
  static async getDashboardData() {
    return instance.get("/home/data");
  }
  static async getDashboardNotice() {
    return instance.get("/home/notice");
  }
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{
    name: "QCalendar"
  },
  __name: "calendar",
  setup(__props) {
    const value = ref();
    const onPanelChange = (data, mode) => {
      console.log(value, mode);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Calendar), {
        fullscreen: false,
        value: value.value,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        onPanelChange
      }, null, 8, ["value"]);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{
    name: "QPanel"
  },
  __name: "panel",
  props: {
    title: { default: "" },
    vertical: { type: Boolean, default: true },
    gap: { default: "middle" }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "4509afaf": `${unref(token).paddingLG}px`,
      "0706c222": unref(token).colorBgContainer,
      "023cb56c": `${unref(token).borderRadiusLG}px`,
      "3351d00e": unref(token).colorBorderSecondary,
      "14359568": unref(token).colorPrimary,
      "3209b0fe": `${unref(token).fontSizeLG}px`
    }));
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "panel",
        vertical: _ctx.vertical,
        gap: _ctx.gap
      }, {
        default: withCtx(() => [
          createVNode(unref(Text), { class: "panel-title" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["vertical", "gap"]);
    };
  }
});
const QPanel = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-cc73f7a2"]]);
const convertCSSUnit = (value) => {
  if (value === 0 || value === "0") return "0";
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string") {
    const hasUnit = /^-?\d*\.?\d+(px|rem|em|%|vh|vw|vmin|vmax)$/.test(value);
    if (hasUnit) return value;
    const isNumeric = /^-?\d*\.?\d+$/.test(value);
    if (isNumeric) return `${value}px`;
  }
  return String(value);
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    name: "QEChartUI"
  },
  __name: "echarts-ui",
  props: {
    height: { default: "100%" },
    width: { default: "100%" }
  },
  setup(__props) {
    const props = __props;
    const echartSize = computed(() => {
      return {
        width: convertCSSUnit(props.width),
        height: convertCSSUnit(props.height)
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "echart-ui",
        style: normalizeStyle(echartSize.value)
      }, null, 4);
    };
  }
});
const echarts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Axis,
  ChartView,
  ComponentModel,
  ComponentView,
  List: SeriesData,
  Model,
  PRIORITY,
  SeriesModel,
  color,
  connect,
  dataTool,
  dependencies,
  disConnect,
  disconnect,
  dispose,
  env,
  extendChartView,
  extendComponentModel,
  extendComponentView,
  extendSeriesModel,
  format,
  getCoordinateSystemDimensions,
  getInstanceByDom,
  getInstanceById,
  getMap,
  graphic,
  helper,
  init,
  innerDrawElementOnCanvas: brushSingle,
  matrix,
  number,
  parseGeoJSON,
  parseGeoJson: parseGeoJSON,
  registerAction,
  registerCoordinateSystem,
  registerLayout,
  registerLoading,
  registerLocale,
  registerMap,
  registerPostInit,
  registerPostUpdate,
  registerPreprocessor,
  registerProcessor,
  registerTheme,
  registerTransform,
  registerUpdateLifecycle,
  registerVisual,
  setCanvasCreator,
  setPlatformAPI,
  throttle,
  time,
  use,
  util,
  vector,
  version,
  zrUtil: util$1,
  zrender
}, Symbol.toStringTag, { value: "Module" }));
use([
  install,
  install$1,
  install$2,
  install$3,
  install$4,
  install$5,
  install$6,
  install$7,
  install$8,
  installLabelLayout,
  installUniversalTransition,
  install$9,
  install$a,
  install$b
]);
const useECharts = (chartRef, options = {}) => {
  const { theme = null, initOptions = {}, updateOptions = {} } = options;
  let chartInstance = null;
  let cahceOptions = {};
  let resizeObserver = null;
  const isDark = useDark();
  const { width, height } = useWindowSize();
  const resizeHandler = useDebounceFn(() => resize(), 200);
  const getOptions = computed(() => {
    if (!isDark.value) return {};
    return {
      backgroundColor: "transparent"
    };
  });
  const initCharts = () => {
    var _a;
    const el = (_a = unref(chartRef)) == null ? void 0 : _a.$el;
    if (!el) return null;
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
    chartInstance = echarts.init(el, theme || (isDark.value ? "dark" : null), {
      ...initOptions
    });
    if (!resizeObserver) {
      resizeObserver = useResizeObserver(el, resizeHandler);
    }
    return chartInstance;
  };
  const renderECharts = async (renderOptions, options2 = {}) => {
    var _a;
    try {
      cahceOptions = renderOptions;
      const currentOptions = {
        ...renderOptions,
        ...getOptions.value
        // 合并暗黑模式下的配置
      };
      if (((_a = unref(chartRef)) == null ? void 0 : _a.offsetHeight) === 0) {
        await new Promise((resolve) => {
          useTimeoutFn(() => {
            renderECharts(currentOptions, options2);
            resolve(null);
          }, 30);
        });
        return;
      }
      await nextTick();
      if (!chartInstance) {
        const instance2 = initCharts();
        if (!instance2) return;
      }
      chartInstance == null ? void 0 : chartInstance.setOption(currentOptions, {
        ...updateOptions,
        ...options2
        // 合并传入的更新选项
      });
    } catch (error) {
      console.error("渲染图表失败:", error);
    }
  };
  const resize = (options2) => {
    if (!chartInstance) return;
    try {
      chartInstance.resize({
        width: options2 == null ? void 0 : options2.width,
        height: options2 == null ? void 0 : options2.height,
        animation: (options2 == null ? void 0 : options2.animation) ?? {
          duration: 300,
          // 默认动画持续时间为300ms
          easing: "quadraticIn"
          // 默认缓动函数为 quadraticIn
        }
      });
    } catch (error) {
      console.error("调整图表大小失败:", error);
    }
  };
  const getInstance = () => {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  };
  watch([width, height], () => resizeHandler());
  watch(isDark, () => {
    if (chartInstance) {
      chartInstance.dispose();
      initCharts();
      renderECharts(cahceOptions);
      resize();
    }
  });
  tryOnUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
    if (resizeObserver) {
      resizeObserver = null;
    }
  });
  return {
    renderECharts,
    resize,
    getInstance,
    echarts
  };
};
const _hoisted_1$2 = { class: "flex-1" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DeclareChart"
  },
  __name: "chart",
  props: {
    chartsData: {}
  },
  setup(__props) {
    const props = __props;
    const chartRef = ref();
    const { renderECharts } = useECharts(chartRef, { theme: "light" });
    const { currentLocale } = useLocale();
    const defaultXAxis = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const renderChartOptions = (xAxis, yAxis) => ({
      grid: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxis,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#999",
          fontSize: 12
        }
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          color: "#999",
          fontSize: 12
        }
      },
      series: [
        {
          data: yAxis,
          type: "line",
          smooth: true,
          areaStyle: {
            color: "#04c9be",
            opacity: 0.2
          },
          lineStyle: {
            color: "#04c9be"
          },
          symbol: "none"
        }
      ]
    });
    const renderChart = async ({ xAxis, yAxis }) => {
      const xAxisData = currentLocale.value == "zh-CN" ? xAxis : defaultXAxis;
      await renderECharts(renderChartOptions(xAxisData, yAxis));
    };
    watch(
      () => props.chartsData,
      (newValue) => {
        renderChart(newValue);
      },
      { immediate: true }
    );
    watch(
      () => currentLocale.value,
      (newValue) => {
        renderChart(props.chartsData);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(_sfc_main$9), {
          height: "100%",
          width: "100%",
          ref_key: "chartRef",
          ref: chartRef
        }, null, 512)
      ]);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DeclareInfo"
  },
  __name: "info",
  props: {
    info: {}
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "3dde96b4": `${unref(token).fontSizeHeading2}px`,
      "76959bb3": `${unref(token).padding}px`,
      "48d8e232": unref(token).colorPrimary,
      "d88437be": unref(token).colorBgContainer
    }));
    const { token } = useAntdToken();
    const props = __props;
    const declareTotalList = computed(() => [
      { label: "declaredTotal", value: props.info.declaredTotal || 0 },
      { label: "declaringTotal", value: props.info.declaringTotal || 0 },
      { label: "toDeclareTotal", value: props.info.toDeclareTotal || 0 }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), {
        class: "declare cursor-pointer",
        vertical: ""
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), { vertical: "" }, {
            default: withCtx(() => [
              createVNode(unref(QSkeleton), {
                loading: !_ctx.info.declarationTotal,
                active: true,
                paragraph: {
                  rows: 1
                }
              }, {
                default: withCtx(() => [
                  createVNode(unref(Text), { type: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("dashboard.declare.total")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CountTo), {
                    class: "declare-total",
                    "start-val": 0,
                    "end-val": _ctx.info.declarationTotal,
                    duration: 3e3
                  }, null, 8, ["end-val"])
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          }),
          createVNode(unref(Flex), {
            class: "declare-info",
            wrap: "wrap",
            justify: "space-between"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(declareTotalList.value, (item) => {
                return openBlock(), createBlock(unref(Flex), {
                  vertical: "",
                  key: item.label,
                  class: "declare-info-item"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(QSkeleton), {
                      loading: !_ctx.info.declarationTotal,
                      active: "",
                      block: "",
                      paragraph: {
                        rows: 1
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Text), { type: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t(`dashboard.declare.${item.label}`)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(CountTo), {
                          class: "declare-info-item-total",
                          "start-val": 0,
                          "end-val": item.value,
                          duration: 3e3
                        }, null, 8, ["end-val"])
                      ]),
                      _: 2
                    }, 1032, ["loading"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const DeclareInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-38327055"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DeclarePanel"
  },
  __name: "index",
  props: {
    info: {}
  },
  setup(__props) {
    const props = __props;
    const info = computed(() => {
      const { xAxis, yAxis, ...rest } = props.info;
      return rest;
    });
    const chartsData = computed(() => {
      const { xAxis, yAxis } = props.info;
      return {
        xAxis,
        yAxis
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPanel, {
        title: _ctx.$t(`dashboard.declare.${info.value.categoryType}`)
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), { gap: "middle" }, {
            default: withCtx(() => [
              createVNode(DeclareInfo, { info: info.value }, null, 8, ["info"]),
              createVNode(_sfc_main$8, { "charts-data": chartsData.value }, null, 8, ["charts-data"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardHelpLink"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "7b1f58e3": `${unref(token).padding}px`,
      "60adb4da": unref(token).colorBgElevated,
      "0aa6079d": `${unref(token).borderRadiusLG}px`,
      "0a4cf3bd": unref(token).colorBorderSecondary,
      "9e7ad912": unref(token).colorBorder
    }));
    const { token } = useAntdToken();
    const LinkList = [
      {
        label: "gettingStarted",
        icon: h(FlagTwoTone)
      },
      {
        label: "onlineHelpManual",
        icon: h(BookTwoTone)
      },
      {
        label: "contactSupport",
        icon: h(PhoneTwoTone)
      },
      {
        label: "addLink",
        icon: h(PlusCircleTwoTone)
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPanel, {
        title: _ctx.$t("dashboard.helpLink.title")
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            vertical: "",
            gap: "middle"
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(LinkList, (item) => {
                return createBaseVNode("div", {
                  class: "help-link-item cursor-pointer",
                  key: item.label
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon))),
                  createVNode(unref(Text), { type: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(`dashboard.helpLink.${item.label}`)), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});
const DashboardHelpLink = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0883f396"]]);
const _hoisted_1$1 = { class: "dashboard-todo-wrapper" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardInfo"
  },
  __name: "index",
  props: {
    dashboardInfoList: {}
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "e224d06c": `${unref(token).paddingLG}px`,
      "50eaaa3d": unref(token).colorBgContainer,
      "fec6b39e": `${unref(token).borderRadiusLG}px`,
      "cb039aae": unref(token).colorBorderSecondary,
      "ef2079fa": unref(token).colorPrimary,
      "24a2cc43": `${unref(token).fontSizeLG}px`,
      "196f3788": `${unref(token).fontSize}px`,
      "7f2f323a": `${unref(token).marginXXS}px`,
      "376f040c": `${unref(token).paddingXXS}px`,
      "1c961099": `${unref(token).fontSizeHeading3}px`
    }));
    const { token } = useAntdToken();
    const userStore = useUserStore();
    const { getUserInfo } = userStore;
    const WrapperAttrs = {
      vertical: true,
      gap: "large"
    };
    const UserInfoWrapperAttrs = {
      gap: "middle"
    };
    onMounted(async () => {
      await getUserInfo();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), mergeProps(WrapperAttrs, { class: "dashboard-info cursor-pointer" }), {
        default: withCtx(() => [
          createVNode(unref(Flex), normalizeProps(guardReactiveProps(UserInfoWrapperAttrs)), {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(unref(_sfc_main$c), {
                  shape: "square",
                  size: 66,
                  src: (_a = unref(userStore).userInfo) == null ? void 0 : _a.staffPhoto
                }, null, 8, ["src"]),
                createBaseVNode("div", null, [
                  createVNode(unref(Flex), {
                    gap: "middle",
                    align: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Text), {
                        class: "dashboard-info-name",
                        level: 4,
                        ellipsis: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("dashboard.companyName")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Tag), null, {
                        default: withCtx(() => _cache[0] || (_cache[0] = [
                          createTextVNode("体验版")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Flex), { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(unref(Text), {
                        class: "dashboard-info-secondary",
                        type: "secondary"
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createTextVNode(toDisplayString((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.username), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(unref(Divider), { type: "vertical" }),
                      createVNode(unref(Text), {
                        class: "dashboard-info-secondary",
                        type: "secondary"
                      }, {
                        default: withCtx(() => {
                          var _a2, _b;
                          return [
                            createTextVNode(toDisplayString((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.company) + "-" + toDisplayString((_b = unref(userStore).userInfo) == null ? void 0 : _b.departmentName), 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }),
            _: 1
          }, 16),
          createBaseVNode("div", _hoisted_1$1, [
            Boolean(_ctx.dashboardInfoList.length) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.dashboardInfoList, (item) => {
              return openBlock(), createBlock(unref(Flex), {
                vertical: "",
                class: "dashboard-todo-item",
                key: item.title
              }, {
                default: withCtx(() => [
                  createVNode(unref(Text), {
                    type: "secondary",
                    class: "dashboard-todo-title"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t(`dashboard.${item.title}`)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(CountTo), {
                    "start-val": 0,
                    "end-val": item.total,
                    duration: 3e3,
                    class: "dashboard-todo-total"
                  }, null, 8, ["end-val"])
                ]),
                _: 2
              }, 1024);
            }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(7, (item) => {
              return createVNode(unref(Flex), {
                vertical: "",
                key: item,
                gap: "small"
              }, {
                default: withCtx(() => [
                  createVNode(unref(QSkeleton), {
                    active: "",
                    paragraph: {
                      rows: 1,
                      width: "50%"
                    }
                  })
                ]),
                _: 2
              }, 1024);
            }), 64))
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});
const DashboardInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fbec23db"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardNotification"
  },
  __name: "index",
  props: {
    noticeList: { default: () => [] },
    loading: { type: Boolean }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "2bbe7b5c": `${unref(token).padding}px`
    }));
    const generateList = (length = 3) => {
      return Array.from({ length }, () => ({
        icon: "",
        notice: "",
        createTime: ""
      }));
    };
    const skeletonList = generateList();
    const computedNoticeList = computed(() => {
      return __props.noticeList.map((notice) => {
        const { notice: noticeContent, createTime } = notice;
        const [name, _, content] = noticeContent.split(" ");
        return {
          name,
          content,
          createTime
        };
      });
    });
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(QPanel, {
        title: _ctx.$t("dashboard.notification.title")
      }, {
        default: withCtx(() => [
          !_ctx.loading ? (openBlock(), createBlock(unref(List), {
            key: 0,
            "data-source": computedNoticeList.value
          }, {
            renderItem: withCtx(({ item }) => [
              createVNode(unref(ListItem), { class: "notification-item cursor-pointer" }, {
                default: withCtx(() => [
                  createVNode(unref(ListItemMeta), {
                    description: item.createTime
                  }, {
                    title: withCtx(() => [
                      createVNode(_component_RouterLink, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode(unref(Flex), { gap: "small" }, {
                            default: withCtx(() => [
                              createVNode(unref(Link), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(Text), { type: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("dashboard.notification.published")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Text), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    avatar: withCtx(() => [
                      createVNode(unref(_sfc_main$c), {
                        size: "large",
                        src: item.icon
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1032, ["description"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["data-source"])) : (openBlock(), createBlock(unref(List), {
            key: 1,
            "data-source": unref(skeletonList)
          }, {
            renderItem: withCtx(({ item }) => [
              createVNode(unref(QSkeleton), {
                active: "",
                avatar: "",
                title: false,
                class: "notification-item"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ListItem), null, {
                    default: withCtx(() => [
                      createVNode(unref(ListItemMeta), {
                        description: item.createTime
                      }, {
                        title: withCtx(() => [
                          createVNode(_component_RouterLink, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode(unref(Flex), { gap: "small" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Link), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(Text), { type: "secondary" }, {
                                    default: withCtx(() => _cache[0] || (_cache[0] = [
                                      createTextVNode("发布了")
                                    ])),
                                    _: 1
                                  }),
                                  createVNode(unref(Text), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        avatar: withCtx(() => [
                          createVNode(unref(_sfc_main$c), {
                            size: "large",
                            src: item.icon
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["description"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["data-source"]))
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});
const DashboardNotification = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-65e698b9"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardQuickItem"
  },
  __name: "quick-item",
  props: {
    iconUrl: {},
    name: {},
    path: {}
  },
  setup(__props) {
    const props = __props;
    const avatarSize = ref(42);
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, {
        to: props.path ?? "/",
        style: { "padding-top": "var(--spacing-middle)" }
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            vertical: "",
            align: "center",
            gap: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$c), {
                shape: "square",
                size: avatarSize.value,
                src: props.iconUrl
              }, null, 8, ["size", "src"]),
              createVNode(unref(Text), { type: "secondary" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.name), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardQuick"
  },
  __name: "index",
  setup(__props) {
    const quickItems = [
      {
        iconUrl: new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABTNJREFUeF7tnT9sGzcUxr93d3IKBAGSJUsWebEUZEg61GstpFs7WDLQbnIyBlVhGw1aeKnlLkaLFrVRFRkTe2uBSArQbg2kOR3iDEUsL9biJR0qNEgb68+xeJKlWLYs8e50oeTjAwwIFnkgf/zekY93fCK4tOhsbUaY4joEzQDiBkAXAfDfOFhFCJSJUBawnxm2UdzJh4puGk5OKoVnxcUJo75AwOIYwZLsIpUFUDRsc3UnT2XJSpACyODOGfUVtMCdeROgB7IgBwKMzFUXICh99hQ3SAdUFoT07kNrs1/JvgAjidoPQVFdH0jrpWxo6bTvewJsuizVcyDMDBqnIHwvBLarwoqV81Q53t+eAKfitadEuBEEONJ9FCiWcqHYQIDabfsiPeHOXQqMJqq3BOi+9KgEsmBjqZR9Z73d9Q7A6Ox/YWGYBYDCgeQi3+nKgW1Ntu+HHYBT8eoDIpqXv06gS3ZcuQmwpT5rL9BIHHb+wLYusQqbALX6HNIDIGCv7mbPpZsAI4nqnr73OYZYKWVDl6i5q2Kg4Li6rgCyEaOpxEGaYPBGgTbHBBpLNJWo5QiYdVxXVwCE/Yim5mpPSeiwzZ0eqEyRRO3v4G1VucPVo1aFAYqhXS6AF9IAPQ66BniWAF44D8RjhOlrBq6GgSuXW6H6/guB/b+AXMHGkz8F9l947PUQq4+EAhnc/EcG5j8kXDg/8DENMr/YyPxsDxGD+0spB3jlMvDTFyaik4PBHe0mqzK50lCuRqUAGd7WqtlxVac6YIiznzfw8l+nNYdXXinAtZSBeMzw1Jvfnwikvml4uoaXysoAsvoe37O8tL1TN/lVozm5qDBlAIehvjawzV9trN1XM6koA5j/3kQ07GziOE1hfC+8eUeNGysDuPNwOO7bhhqdq6vwYGiAHrErA/j4nvvly/E+P98TiN8NmAsv3zaa0ccwjEO85UzAJpHpa4Str81h8MPNO3VlEYkyF2ZymS9NfDDtbSZWqT7ug1KAvImQ/84CL6rdGO/KJFfUqU85QG5AKx52DnFnD/j0W7XwRgJgW3mpjw2kPhk8qbx8BXDksfmbDf6s2pS68PHOy8TH7yXrIwGu3faRAsiNGhShqIo4TlO6BujxHqABjgPAq2FCVPK917XP+i+ul3+UC9l2ysBzPnvks/mqQJ4U1lImOOpQYW/juYlvAL0+7xgW8H9eAfG7/q0XfQM4zB1nrzB5u5+3/f0w3wD+sWWBQ7VRMFbhdNKfDVffAA5az71tsH6tHzVAjyOpAWqAcgTGzoV5/TdKtpwZs1l4lOD52Rbf7oFagR6HTS9jNEApAr65sFagFH9dyDcFBgWtBuhxpPVRL28A+aiXPmztmqHAtj7u6poen/u3H1Ek8XoRMDlHljaHBDhvgj7y7xDa0eLNI//8D31m2A1FKpeyVut8lc6b4BwgJ2nczVq3mwAPM1TyyXVtkgTItiY5VWjniXckXlsHYUGyfqCLtdXHEDoAD1XI6Z/GJROvokGkMtlmrJ2otuudi0iiugiQXtL0GRpBdOtoXtUTL61oV+5HDxulXKgrk3HPt34i8VpB50/tBsl5VHdzoXeP4z01Ce0E1Qs6j+ohLoHigbDi0klo25S1Ozfz3J1w265oZNBU1sqripUApserAGK1lJ3o5EvtxUrqzUfOcGmTmQ5MilCBjQNhpXu5rNQ98DRVvgGJ98+gIjmd58Zr21qXAddmJKXAXkA5caNt2DME47oQCBOB34Iel0U4u2cFoG2QKFKDnrn9OYz/Ae+oLiM+43dpAAAAAElFTkSuQmCC", import.meta.url).href,
        name: "leaveApproval"
      },
      {
        iconUrl: new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABH5JREFUeF7tnUFvG0UUx/9vvMFR6cGRUqlRK9VGQgJxSCuBm5zwJnAOfIG2CK4oqThDnXulBs6VGvgCVbmCve4FJylSEgkpByQS4AJSRSyEECXrfWjWOImzjr3j2VZ29u115z3P/Oa9mdnRzN+EAR+n7pUCwrSioMSgq2DkiJAb0N0LNWNGgxT2wLyHANuAqvmzbm2QSpCR0aaXc3wscpOXRgVW3PYxsAfiWrOpljHr7sW1iwdQgzvAHTAvxXU8yuWYeDUuyL4Axza8xSDg8lmLuH4dHEYkqNy87n7Zq2xPgM6Gdy8tUXcqJOIVvzh/+7T33QGGKcsPwSj166lUvCds+WPk4prbONnergCdjeomGFdTASduIwk1vzjn9gUoaduDaJd07ojATL1yixQ9iNspaSxHzLcPZuZX2m0/Alj38hnFHgH5NIKJ3WZGw89SoT0eHgLM1L9dJaVuxnaU5oLHUrkFsO7lHcW7aWZi2nb/JZrQURgClOgzxQcg4GV/dr7cArhe3ZWxzxCiHgtn5iZI76pAsWdoLsU1gaDpklOvlKHojhAxJ6CXNJRZrzwk0Hvm5mIBxiNy1qubgHy2DRIOeseGnLXqPkZkJ3mQRj5XG72z7axX+bn+yBl3njjAhYlJ3C+8jpzjDBW6n5/9g09++RGP9p8mWq/EAX7/xluYfvl8opVMytn233/hzR+eJOUu9JM4wINiZMss0QrbOhvbSHbJKwAte0QACkAzApLCZrwipQWgALQkYGkuESgALQlYmg99BFq2b+TME18HjhwBywoLwGEDKN/Clj0iAAWgEYHEx0CJQCP+0cICUAAaEZAUNsIVLSwABaAZgaH/FpZJxKxDI6UFoAA0IiCTiBEumYUhk4hlxAhAAWhJwNJ85CLwnR19AHbw5+Opy1jIXcAXv/+Kr/84Opp248JF3JicMnY8cgBtK3z/lddwc3IKH/60g6+e/nYI7NNLeXx2qSAA+xFIPcDHf0buKPdj1vF++tz58LSrPhzZ8P3Dd/nsOK5kx4186cK2GXHyB2UhbdwFnQYCUACaERj6FJZD5mYdGim9kJvE3SuvQg/yw/ToCeij3Z3hv+YwTNBeRF3kqpcNZX3VSy5b2xDEllx3teGnr7uOfVdZ4gzds/GTWtuAl8mpf1OCyiR7/yktRPWVf91WuTNs3uP6snXz+lyhBVB0E4wJMtFqs+h+0BLe0XJ3//K+sZcUG/gBFbRU6KH0k7NWWQHRYoqZxG56O/q0wZH4mI7CZ7wr+gm9OYZjX0BuW6i2Q/5OrVWWFMmSphdCBt06rqsaUbCUVO6Bj/lzf2a+Q8n4NAlQT/RTT4DUOqrFuWuRLf2uvFuzsl5ci46qBsSo+Vl6P7YIbRuqpLOGF03b40HXV4hb66pqcbK0yeNpvX0FXj6ul9otW/sCDI20viq4TArpkAjVUZdV5W4pG28MPG0i+h8kFN4+axEZ/sODBjeuVuKAayOKF4FdgIa7OFAlEKZBlGdGflT09jUsAA0CbwVQNcX+tj/77kB/h/EffyIxyk53iLoAAAAASUVORK5CYII=", import.meta.url).href,
        name: "attendance"
      },
      {
        iconUrl: new URL("data:image/png;base64,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", import.meta.url).href,
        name: "roleManagement"
      },
      {
        iconUrl: new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABVdJREFUeF7tnT1s20YUx/+PopyiQYNkyZLFXiwVHZIuXmshHTNYMtBsTtytqAvbQIEgHhq5Q4IMQW3EnR17q4FIDpBuLaTZHeIMRS0v1pKlHSo0MBp98YpHmvqyPu7Isq7JO8CLeI/S/fi/e3fveM8EjyU5U58WMXEdgqYBcQOgywD47zyUihAoE6EsYL02LKN4sBsvevnhpGI0PiMujxmNRQKWzhEsySZSWQBFw4qtHuxSWdIIUgAZ3AWj8QAOuNAXAXomC3IkwMRsbRGCsuFT3CgdUFkQsofPza1hNYcCTGTq30VFdUMgrZVy8eVB1/sCtLssNfIgTI96TlG4LgT2a8JMlXep0tvevgAn0/VXRLgRBTjSbRQolvLx1EiAutsORXqqO3cpMJmp3RWgTemnEsmKzeVS7r01t+ktgMmZv8eFESsANB5JLvKNrlQtc8IdD1sAJ9O1Z0R0R/4+ka7Z6so2QEd95lGkkSg2vmqZV1iFNkCtPkV6AASs1cPchawNMJGpHemxTxlipZSLXyE7qmKgoGyuDUAWUjSZqWYJBgcKdFEm0FymyUw9T8CMsq02AIT1giZn669I6GWbNz1QmRKZ+p/RC1V5w9XHqsIAxb92uwjeKFCAN6cIX902kBwfGbcNBP3BkcDWjxbyheA0EhjAdIrwaCEWCBjVm375uImf94KBGBjA3SexM1NeL+DfjgTSXzdVuUvVDwzgwXNT6gf8V5WSs41AvkoD9IlVA9QA5QjoLizHaWCtSACc+6aJvV8FFj4zsHDb6IKxsWNh4wcLUx8Rtr9Vnx6FHuBfx8DUXNtTdkJ04blEf9k28cFFNUmGHiDj6AXFEPntHVaeW/qpUwZlJAD2g9gJxys8vkdkAA6C6AdeJAAeHAFPd5p4e+xojp2JW3i8+7AjILHyuXqAIvQKdD2wzHjGUZ7v76l54tAD3Hpp4dFm21kMA3l/3sCdW93TnFHgQw+wFwDH8O5vOBEUDotxeMxPCT3AN78DDzfbY+CbPwT4M9sBTACX3ncA8ni4Mh/DtatqOEMPUI+BPYJQjQeqjIFepjShVyDzf3sswEs6Lj/tiZZTYafx6ZTThS9d5G6sPh5GAmCniLUT8RnSZwUuPHa88Ma9WEuBaq6jXTtyCuSm5wvOvDCdUpvz9YMcWoAMidXmLuFUFDZ3qz02jrILLcCbXzRa871REHqv85yQY4MyJbQAH25a2H4pt4TrBcUKXJmX696hBdg7fZFRk1vn2lX56UyoAapA81o3tAC1ExkgCdmlnHYiPgFqJ+IToNcxTdUutGOgKgiv9TVAr+RO7DRADdAnAZ/m506B+hVfn0/cy96tz68caM67e0G9qR/YG6pOHI/s/duzPObwdMcK7A19bmOgAINS1P/pvvqol7+nwUe99GFrzwwF9vVxV8/0+Ny/9YISmXdLQIxzZOmiSIDzJugj/4rQOqvbR/75A31m2AtFKpdy5oST9kTnTVAmyEkaD3PmvA3wJEMln1zXRZIAWeYEpwptbWsl0vU1EBYl7SNdzVWfvRJxSZyokNM/nZdMvGf0EKlMVizlJqrt2lhNZGpLAOkpzZBHI4juduZVPbUzrbvyMHpYL+XjXZmM+27tJ9L1gs6f2g2S86ge5uMf9+IdmIR2jBoFnUf1BJdAsSrMtHQSWpey7s52nrtT3bZrNTLKlTl5VfEggunxKoBYLeXGWvlS+7GSer2JM1xaFMtGJkWowHpVmNl+XVZqDBykyjZIfBJCRXI6z/V3lrkmA85lJKXAfkA5caNlWNME47oQGCcCZ/89L5Nw7p4VgPZBokhNeu3132H8A82oqCNzznzLAAAAAElFTkSuQmCC", import.meta.url).href,
        name: "salarySettings"
      },
      {
        iconUrl: new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABmNJREFUeF7tnc9vE0cUx7+z3uBAQ3GkIIGCwEZEalQhh7YEfCjECb32xz8AVPRcQtsrwYFzRVquoAK9FiHaY3FsVKkmCVWSFilIqYhJiaBqKptSVZCsPdVbs45D1utdexbH3plLDpmZ3fnM982+ebvzzFBlUVOJvjxDWGH5Pg7WA44AYwhU2d0rbcY5skxBGpynkcc0oCS1SDRZzU0wR40mEwFVw0me44ONAsvu+DiQBuPJXE4ZRiSattvOHkACt4wz4HzQbseNXI8zftkuyIoAW8YTJ/N5Hms2xVWaYF2RYLHcgegVq7qWANXxxHmvqK4sJMZHtN6BU+X+bw5QN1l+HRx9lWbKE/9nmNJaWBT7otmXx2sKUB0fnQRHjyfg2B0kQ1Lr7Y9WBCjN1oKoiTmvUqAvFT/OFPaN3UnxYj3G+anlgwMjxthXAKYSQZ/CEwwIehGM7TFzZDU/CxnrYRGgL3XzMlOUY7Y78nLFElMuAEwlgqrC57zMxOnYtQ2snVSoA5Tqc4oPQJ4Pa5GBWAHg2OicXPscQqS18GB/O6OoChSecNhcVicC+VyUqal4DAo7I4k4J0AuDfONxa8zsA+dN5ctwHGDqWOjk4DctlUjB4rYMPX2aAYNEkmuZpCutqHItjo2yl29SJN3LgHWOMESYKMCDG9sw83ufQioao1DAM4upHFuoT470bop8OLuN3CsY3vN8KiDbE7D1l9+EtKX006aAiANumW8PpuppgK4a0MrhnashDOzWg63nmbwfWbRqbBs128qgLSmHt689uOIB8+f4ezCHK4uPrYNxm5FTwA0YLjxsGkqgLv8rRjqLJjwFp+K4IaNCL/WtkpMn83P4sLjh3YFVrFeUwC0egqTSV/c3Y2gv1WHQXW7plL6XxGlbgBJLdf27MUWAX7ghT//wNcWqqJr3Xlzf9HnFGnKdQMoYvad9HG6M4ihzpDe5NY/WRy5R0Go2otnAJIp01NatOPtGYBkxr+HI0XJiXK8PQPw0OYA4s2mwKMd20DKqKVkNQ0/ZBaRXnpm2c2lUDeObt3WPGvgp9t24MudXbWwK7at9FCgibq0u7tY/8T9GWG7krqZsMhoDJExW9NI3Uc7theda6pH27o90ykhE0eduAow4FOx09+Knk2F3QA5r8bG3g2AH7R34GKo2zLG+M7dCUz/9+/6BqhHRTpDeL+9Y81gDCfWDYDkLL+8dTNI0Vr5+fysMNM1+hWuwEoqoNknFbgBsNRZLgV362kWX8zPIv3c+kFTjSyFAqQw/Z29+8veB6ngk7kZ3MgsugKQLkwTSIEEfb1beqabK13XrSIU4Gw4Uty00w3TewqKwZnNvBsKdAuSVb/CADp1FczMrVoAxrJQbfta2gkDWBoNvrr4CCfu36t4X6Ic6W//fuyqmb4SBf711rvFJy5FOsi59UIRpsDl3pUjFF3TKVeeeOtxQoQBLFXg23cn8KtAZ3U9ghPuB5augSIjvusZntCtXOlTlbZs+3+bsIyQ0G7lWlftIf0nOQ1XFh8JfVHkZNKEmTDte8kPNL51oU37kZnJshBF+oFN82mHWYiKfDRypJ/klvWJPfcwrUMVCZD6FRVhdqI+oSZsXJjey55+8fLG7GaM2J0EaDFV5CATRONdbGlVCdCBxmljf+j1AGh9NMq5hbRu0lKBDkCaVZUAJUCdgDA3xinP8KY2fNe113SddNoXLQv0+Vo9St0A1mOwblxTAqyRqgRYM0B51Kt6hHTUSx62rp4fgCl53LUWfnTcteXn+CD3sfO19OPZtnk+zNTUj31QfPU5pdLo5OnIP41Bnhl2PpN02Dp3oD9UACjzJjgmyBm7nOuNflxIvEPp7pZ4xnEvHm6g5VmIUoUWUz+pt+MjYOykh5nYHrqhPj2YUGxFKnzO52T+BGuO+tqXZ1EjUe2q9HfK7figwqRLY4WQgx0vzau6JoOlNGULfJx/pR0cWJXJuFwK0ITMn/oSSMqj2ttfOKlTUsonoV3S82nJPKoEiyOp+dlHtpPQGoClORO8tWZbWYElNSivKiUn81p6PMq3r4APl+ZLNVsdK2Yy1xtRflXwGFPgjRShpDq/EjMzWXtrYLkH0QuQUHC42RSp/8IDgWtVRuyAMxDZU6AJUD2KA6UPDGEwFuQcwUbJt0+w6NwPA5/KQ0kqXJvWIu9V9XMY/wPspP3KCxJ49wAAAABJRU5ErkJggg==", import.meta.url).href,
        name: "addPermission"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPanel, {
        title: _ctx.$t("dashboard.quick.title")
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), {
            gap: "large",
            justify: "space-between"
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(quickItems, (item) => {
                return createVNode(_sfc_main$2, {
                  key: item.name,
                  "icon-url": item.iconUrl,
                  name: _ctx.$t(`dashboard.quick.${item.name}`)
                }, null, 8, ["icon-url", "name"]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
});
const convertDashboardInfoList = (data) => {
  const {
    employeeTotal,
    regularEmployeeTotal,
    contractSignTotal,
    toBeEmployed,
    toBeConfirmed,
    interfaceAccessTotal
  } = data;
  return [
    {
      title: "employeeTotal",
      total: employeeTotal
    },
    {
      title: "regularEmployeeTotal",
      total: regularEmployeeTotal
    },
    {
      title: "contractSignTotal",
      total: contractSignTotal
    },
    {
      title: "toBeEmployed",
      total: toBeEmployed
    },
    {
      title: "toBeConfirmed",
      total: toBeConfirmed
    },
    {
      title: "interfaceAccessTotal",
      total: interfaceAccessTotal
    }
  ];
};
const _hoisted_1 = { class: "dashboard-calendar" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DashboardPage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "16d0b852": `${unref(token).borderRadiusLG}px`,
      "d40c2f7a": unref(token).colorBorderSecondary,
      "e3c09ac6": unref(token).colorPrimary,
      "1dff82c0": `${unref(token).paddingXXS}px`,
      "55882a64": `${unref(token).paddingLG}px`
    }));
    const WrapperAttrs = {
      gap: "middle"
    };
    const LeftPanelAttrs = {
      gap: "middle",
      vertical: true
    };
    const dashboardInfoList = shallowReactive([]);
    const defaultProvidentFund = {
      categoryType: "providentFund",
      category: "公积金申报数据",
      declarationTotal: 0,
      toDeclareTotal: 0,
      declaringTotal: 0,
      declaredTotal: 0,
      xAxis: [],
      yAxis: []
    };
    const defaultSocialSecurity = {
      category: "社保申报数据",
      categoryType: "socialInsurance",
      declarationTotal: 0,
      toDeclareTotal: 0,
      declaringTotal: 0,
      declaredTotal: 0,
      xAxis: [],
      yAxis: []
    };
    const providentFund = shallowReactive(defaultProvidentFund);
    const socialSecurity = shallowReactive(defaultSocialSecurity);
    const noticeList = shallowReactive([]);
    const { run: getDashboardData, loading: getDashboardDataLoading } = useRequest(
      HomeService.getDashboardData,
      {
        manual: true,
        onSuccess: ({ data }) => {
          Object.assign(dashboardInfoList, convertDashboardInfoList(data));
          Object.assign(providentFund, data.providentFund);
          Object.assign(socialSecurity, data.socialInsurance);
        }
      }
    );
    const { run: getNotice, loading: getNoticeLoading } = useRequest(
      HomeService.getDashboardNotice,
      {
        manual: true,
        onSuccess: ({ data }) => {
          Object.assign(noticeList, data);
        }
      }
    );
    onMounted(async () => {
      await Promise.all([getDashboardData(), getNotice()]);
    });
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), normalizeProps(guardReactiveProps(WrapperAttrs)), {
        default: withCtx(() => [
          createVNode(unref(Flex), mergeProps(LeftPanelAttrs, { class: "dashboard-left" }), {
            default: withCtx(() => [
              createVNode(DashboardInfo, { "dashboard-info-list": unref(dashboardInfoList) }, null, 8, ["dashboard-info-list"]),
              createVNode(_sfc_main$1),
              createVNode(_sfc_main$6, { info: unref(providentFund) }, null, 8, ["info"]),
              createVNode(_sfc_main$6, { info: unref(socialSecurity) }, null, 8, ["info"])
            ]),
            _: 1
          }, 16),
          createVNode(unref(Flex), {
            vertical: "",
            gap: "middle",
            class: "dashboard-right"
          }, {
            default: withCtx(() => [
              createVNode(unref(Flex), { gap: "middle" }, {
                default: withCtx(() => [
                  createVNode(DashboardHelpLink, { class: "dashboard-help-link" }),
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(unref(_sfc_main$b), { class: "dashboard-calendar-inner" })
                  ])
                ]),
                _: 1
              }),
              createVNode(DashboardNotification, {
                loading: unref(getNoticeLoading),
                "notice-list": unref(noticeList)
              }, null, 8, ["loading", "notice-list"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-498a0049"]]);
export {
  index as default
};
