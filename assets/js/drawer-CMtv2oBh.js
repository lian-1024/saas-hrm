const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/map-CYgl_xr5.js","assets/js/index-BRjnmkr0.js","assets/js/vue-vendor-DA6b90QH.js","assets/js/antd-vendor-NhxykF_l.js","assets/js/lodash-vendor-B6NgBDy-.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/skeleton-BcvgInEH.js","assets/js/index-Bc78yVQl.js","assets/js/index-BIbZ-NlI.js","assets/js/spin-DsTR0G8T.js","assets/js/department.service-BtZcd_gd.js","assets/js/vue3-count-to.esm-Ct424Pdd.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js","assets/js/generate-menu-item-EqEeHg1E.js"])))=>i.map(i=>d[i]);
import { a as useRequest, u as useI18n, _ as __vitePreload } from "./index-BRjnmkr0.js";
import { d as defineComponent, a7 as useCssVars, u as unref, ae as useModel, s as shallowRef, a as reactive, r as ref, j as computed, o as onMounted, a1 as openBlock, a2 as createBlock, a3 as withCtx, c as createVNode, a6 as normalizeStyle, af as createBaseVNode, G as createTextVNode, a9 as toDisplayString, ac as defineAsyncComponent } from "./vue-vendor-DA6b90QH.js";
import { Q as QSkeleton } from "./skeleton-BcvgInEH.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { a as AttendanceService } from "./index-BIbZ-NlI.js";
import { g as generateMenuItem } from "./generate-menu-item-EqEeHg1E.js";
import { h as api, aH as CloseOutlined, F as Flex, M as Menu, O as Text, aI as Slider, B as Button, aJ as Drawer } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const convertDistance = (value) => {
  switch (true) {
    case value < 1e3:
      return `${value}米`;
    case (value >= 1e3 && value < 1e6):
      return `${(value / 1e3).toFixed(2)}公里`;
    default:
      return `${(value / 1e6).toFixed(2)}百万公里`;
  }
};
const _hoisted_1 = { class: "flex-1 h-full" };
const _hoisted_2 = { class: "attendance-scope-company-list flex-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "drawer",
  props: {
    "open": { type: Boolean, ...{ required: false } },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "0b6b676b": `${unref(token).borderRadiusLG}px`,
      "373ae67a": unref(token).colorBgContainer
    }));
    const ScopedMap = defineAsyncComponent(() => __vitePreload(() => import("./map-CYgl_xr5.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
    const drawerStatus = useModel(__props, "open");
    const closeDrawer = () => {
      drawerStatus.value = false;
    };
    const formatSliderTip = (value = 0) => t("attendance.drawer.radiusTip", { distance: convertDistance(value) });
    const companyMenuItems = shallowRef();
    const convertCompanyListToMenuItems = (list) => list.map((item) => generateMenuItem(item.id.toString(), item.name));
    const companyList = shallowRef([]);
    const selectedCompany = reactive({
      address: "",
      id: 0,
      phone: "",
      name: "",
      point: [],
      radius: 0
    });
    const { run: getCompanyList, loading: getCompanyListLoading } = useRequest(
      AttendanceService.getCompanyList,
      {
        manual: true,
        onSuccess: ({ data }) => {
          companyList.value = data;
          companyMenuItems.value = convertCompanyListToMenuItems(data);
          Object.assign(selectedCompany, data[0]);
        }
      }
    );
    const selectedCompanyIds = ref();
    const getCompanyById = (id) => {
      return companyList.value.filter((item) => item.id === Number(id))[0];
    };
    const saveCompanyToCompanyList = (source, targetCompanyId) => {
      const target = getCompanyById(targetCompanyId);
      Object.assign(target, source);
    };
    const handleSelectedCompany = (info) => {
      Object.assign(selectedCompany, getCompanyById(info.key));
    };
    const handleSliderAfterChange = (value) => {
      saveCompanyToCompanyList(selectedCompany, selectedCompany.id);
    };
    const convertScopedCenter = computed(() => ({
      lat: selectedCompany.point[1],
      lng: selectedCompany.point[0]
    }));
    const { run: updateCompanyList, loading: updateCompanyListLoading } = useRequest(
      AttendanceService.updateCompanyList,
      {
        manual: true,
        onSuccess: () => {
          api.success(t("attendance.drawer.messages.updateSuccess"));
          closeDrawer();
        },
        onError: ({ message: message2 }) => {
          message2.error(message2 || t("attendance.drawer.messages.updateError"));
        }
      }
    );
    const handleBatchSaveCompanyPoint = () => {
      updateCompanyList({ list: companyList.value });
    };
    onMounted(async () => {
      await getCompanyList();
    });
    const { token } = useAntdToken();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Drawer), {
        height: "100vh",
        onClose: closeDrawer,
        title: unref(t)("attendance.drawer.title"),
        open: drawerStatus.value,
        placement: "top",
        closable: false
      }, {
        extra: withCtx(() => [
          createVNode(unref(CloseOutlined), {
            onClick: closeDrawer,
            style: normalizeStyle({ color: unref(token).colorText })
          }, null, 8, ["style"])
        ]),
        default: withCtx(() => [
          createVNode(unref(Flex), {
            class: "h-full",
            gap: "middle"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(ScopedMap), {
                  "scoped-radius": selectedCompany.radius,
                  "scoped-center": convertScopedCenter.value
                }, null, 8, ["scoped-radius", "scoped-center"])
              ]),
              createVNode(unref(Flex), {
                class: "attendance-scope-right",
                vertical: "",
                gap: "middle"
              }, {
                default: withCtx(() => [
                  createVNode(unref(QSkeleton), {
                    loading: unref(getCompanyListLoading),
                    active: "",
                    title: false,
                    paragraph: {
                      rows: 8
                    }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(unref(Menu), {
                          class: "attendance-scope-company-list-inner",
                          selectedKeys: selectedCompanyIds.value,
                          "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => selectedCompanyIds.value = $event),
                          items: companyMenuItems.value,
                          onClick: handleSelectedCompany
                        }, null, 8, ["selectedKeys", "items"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createBaseVNode("div", null, [
                    createVNode(unref(Text), { type: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("attendance.drawer.radius")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Slider), {
                      onAfterChange: handleSliderAfterChange,
                      max: 1e3,
                      value: selectedCompany.radius,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => selectedCompany.radius = $event),
                      "tip-formatter": formatSliderTip
                    }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        footer: withCtx(() => [
          createVNode(unref(Flex), {
            justify: "end",
            gap: "middle"
          }, {
            default: withCtx(() => [
              createVNode(unref(Button), { onClick: closeDrawer }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.drawer.buttons.cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleBatchSaveCompanyPoint,
                loading: unref(updateCompanyListLoading)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("attendance.drawer.buttons.batchSave")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title", "open"]);
    };
  }
});
const drawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e5a1437"]]);
const drawer$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: drawer
}, Symbol.toStringTag, { value: "Module" }));
export {
  convertDistance as c,
  drawer$1 as d
};
