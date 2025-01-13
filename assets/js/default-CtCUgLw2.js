const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index-JOsJAAXE.js","assets/js/index-BRjnmkr0.js","assets/js/vue-vendor-DA6b90QH.js","assets/js/antd-vendor-NhxykF_l.js","assets/js/lodash-vendor-B6NgBDy-.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/index-CdyXGYYq.js","assets/js/spin-DsTR0G8T.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js"])))=>i.map(i=>d[i]);
import { r as ref, j as computed, o as onMounted, f as onUnmounted, d as defineComponent, Y as useRoute, c as createVNode, a0 as resolveComponent, b as isVNode, a7 as useCssVars, a1 as openBlock, a2 as createBlock, a3 as withCtx, u as unref, v as Transition, a8 as resolveDynamicComponent, h, G as createTextVNode, a9 as toDisplayString, aa as normalizeProps, ab as guardReactiveProps, ac as defineAsyncComponent, ad as mergeModels, ae as useModel, af as createBaseVNode, a5 as createElementBlock, ag as RouterLink, w as watch } from "./vue-vendor-DA6b90QH.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { a as useRequest, U as UserService, u as useI18n, b as useLocaleStore, c as useLocale, d as useTheme, e as useUserStore, r as router, _ as __vitePreload, f as useRouter } from "./index-BRjnmkr0.js";
import { h as api, E as EnvironmentOutlined, p as Breadcrumb, F as Flex, L as LayoutContent, q as Empty, s as Typography, u as Tag, B as Button, v as Tabs, w as TabPane, x as Badge, y as BellOutlined, z as Popover, G as GlobalOutlined, M as Menu, H as Dropdown, S as Switch, D as DashboardOutlined, I as SettingOutlined, J as LogoutOutlined, N as Space, O as Text, Q as MenuUnfoldOutlined, V as MenuFoldOutlined, W as LayoutHeader, X as LayoutSider, Y as Layout } from "./antd-vendor-NhxykF_l.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { M as MESSAGE_LEVEL_TEXT, a as MESSAGE_LEVEL_COLOR } from "./message-DvY9wwDO.js";
import { Q as QSpin } from "./spin-DsTR0G8T.js";
import { _ as _sfc_main$6 } from "./avatar.vue_vue_type_script_setup_true_lang-CO2EBu4c.js";
import { Q as QSkeleton } from "./skeleton-BcvgInEH.js";
import { g as generateMenuItem } from "./generate-menu-item-EqEeHg1E.js";
import { O as OpenModalType } from "./index-CdyXGYYq.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const unread = ref([]);
const read = ref([]);
const useNotification = () => {
  const isHaveUnread = computed(() => unread.value.length > 0);
  const {
    run: getUserNotification
  } = useRequest(UserService.getUserNotification, {
    manual: true,
    onSuccess: ({ data }) => {
      unread.value = data.unread || [];
      read.value = data.read || [];
    }
  });
  const { run: markUserNotificationAsRead } = useRequest(UserService.markUserNotificationAsRead, {
    manual: true,
    onSuccess: () => {
      api.success("标记已读成功");
      getUserNotification();
    },
    onError: (error) => {
      api.error(error.message || "标记已读失败");
    }
  });
  const { run: deleteUserNotification, loading: deleteUserNotificationLoading } = useRequest(UserService.deleteUserNotification, {
    manual: true,
    onSuccess: () => {
      api.success("删除消息成功");
      getUserNotification();
    },
    onError: (error) => {
      api.error(error.message || "删除消息失败");
    }
  });
  const markAsRedById = async (id) => {
    await markUserNotificationAsRead(id).then(() => {
      const message2 = unread.value.find((item) => item.id === id);
      if (message2) {
        unread.value = unread.value.filter((item) => item.id !== id);
        read.value = [...read.value, message2];
      }
    });
  };
  const deleteById = async (id) => {
    await deleteUserNotification(id).then(
      () => unread.value = unread.value.filter((item) => item.id !== id)
    );
  };
  return {
    unread,
    read,
    getUserNotification,
    isHaveUnread,
    markAsRedById,
    deleteById
  };
};
const usePolling = (fn, options = {}) => {
  const {
    interval = 3e4,
    immediate = true,
    autoStart = true
  } = options;
  let pollingTimer = null;
  const startPolling = () => {
    if (immediate) {
      fn();
    }
    pollingTimer = setInterval(fn, interval);
  };
  const stopPolling = () => {
    if (pollingTimer) {
      clearInterval(pollingTimer);
      pollingTimer = null;
    }
  };
  onMounted(() => {
    if (autoStart) {
      startPolling();
    }
  });
  onUnmounted(() => {
    stopPolling();
  });
  return {
    startPolling,
    stopPolling
  };
};
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const QBreadcrumbs = /* @__PURE__ */ defineComponent({
  name: "QBreadcrumbs",
  setup() {
    const route = useRoute();
    const {
      t
    } = useI18n();
    const {
      token
    } = useAntdToken();
    const breadcrumbs = computed(() => {
      const items = /* @__PURE__ */ new Map();
      route.matched.forEach((route2) => {
        var _a, _b;
        if (!((_a = route2.meta) == null ? void 0 : _a.title)) return;
        if ((_b = route2.meta) == null ? void 0 : _b.parentKey) {
          const parentPath = `/${route2.meta.parentKey}`;
          if (!items.has(parentPath)) {
            const parentTitle = t(`nav.${route2.meta.parentKey}`);
            items.set(parentPath, {
              path: parentPath,
              title: parentTitle
            });
          }
        }
        items.set(route2.path, {
          path: route2.path,
          title: t(route2.meta.title)
        });
      });
      return Array.from(items.values());
    });
    const styles = computed(() => ({
      backgroundColor: token.value.colorBgContainer,
      paddingBlock: `${token.value.paddingXXS}px`,
      paddingInline: `${token.value.padding}px`,
      borderRadius: `${token.value.borderRadiusLG}px`,
      marginBottom: `${token.value.marginXXS}px`,
      maxWidth: "max-content"
    }));
    return () => {
      let _slot;
      return createVNode(Flex, {
        "gap": "small",
        "align": "center",
        "style": styles.value
      }, {
        default: () => [createVNode(EnvironmentOutlined, null, null), createVNode(Breadcrumb, null, _isSlot$2(_slot = breadcrumbs.value.map((item) => createVNode(Breadcrumb.Item, {
          "key": item.path
        }, {
          default: () => [createVNode(resolveComponent("router-link"), {
            "to": item.path,
            "class": "q-breadcrumbs-link"
          }, {
            default: () => [item.title]
          })]
        }))) ? _slot : {
          default: () => [_slot]
        })]
      });
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "QLayoutContent"
  },
  __name: "content",
  setup(__props) {
    useCssVars((_ctx) => ({
      "19441d98": unref(token).colorBgElevated
    }));
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(unref(LayoutContent), { class: "layout-content" }, {
        default: withCtx(() => [
          createVNode(unref(QBreadcrumbs)),
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component, route }) => [
              createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: route.path
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const QLayoutContent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-01097c41"]]);
const QNotificationEmpty = /* @__PURE__ */ defineComponent({
  name: "QNotificationEmpty",
  setup() {
    const {
      t
    } = useI18n();
    return () => createVNode(Empty, {
      "description": t("common.notification.empty")
    }, null);
  }
});
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const QNotificationMessage = /* @__PURE__ */ defineComponent({
  name: "QNotificationMessage",
  props: {
    type: {
      type: String,
      required: true
    },
    message: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      markAsRedById,
      deleteById
    } = useNotification();
    const {
      token
    } = useAntdToken();
    const {
      t
    } = useI18n();
    const loading = ref(false);
    const wrapperStyles = computed(() => ({
      padding: `${token.value.padding}px`
    }));
    const handleMap = {
      markAsRedById: (id) => markAsRedById(id),
      deleteById: (id) => deleteById(id)
    };
    const handleOperations = async (id, type) => {
      loading.value = true;
      await handleMap[type](id);
      loading.value = false;
    };
    const messageLevelText = computed(() => t(MESSAGE_LEVEL_TEXT[props.message.type]));
    return () => {
      let _slot, _slot2;
      return createVNode(QSpin, {
        "spinning": loading.value
      }, {
        default: () => [createVNode(Flex, {
          "vertical": true,
          "gap": "small",
          "style": wrapperStyles
        }, {
          default: () => [createVNode(Flex, {
            "justify": "space-between",
            "align": "center"
          }, {
            default: () => [createVNode(Typography.Text, null, {
              default: () => [props.message.sendUser.username]
            }), createVNode(Tag, {
              "color": MESSAGE_LEVEL_COLOR[props.message.type]
            }, {
              default: () => [messageLevelText.value]
            })]
          }), createVNode(Typography.Text, null, {
            default: () => [props.message.content]
          }), createVNode(Flex, {
            "justify": "space-between",
            "align": "center"
          }, {
            default: () => [createVNode(Typography.Text, null, {
              default: () => [props.message.create_time]
            }), createVNode(Flex, {
              "gap": "small"
            }, {
              default: () => [props.type === "unread" && createVNode(Button, {
                "type": "link",
                "size": "small",
                "onClick": () => handleOperations(props.message.id, "markAsRedById")
              }, _isSlot$1(_slot = t("common.notification.markAsRead")) ? _slot : {
                default: () => [_slot]
              }), createVNode(Button, {
                "type": "link",
                "size": "small",
                "danger": true,
                "onClick": () => handleOperations(props.message.id, "deleteById")
              }, _isSlot$1(_slot2 = t("common.notification.delete")) ? _slot2 : {
                default: () => [_slot2]
              })]
            })]
          })]
        })]
      });
    };
  }
});
const QNotificationRead = /* @__PURE__ */ defineComponent({
  name: "QNotificationRead",
  setup() {
    const {
      read: read2
    } = useNotification();
    return () => createVNode(Flex, {
      "vertical": true,
      "gap": "middle"
    }, {
      default: () => [read2.value.length ? read2.value.map((message) => createVNode(QNotificationMessage, {
        "type": "read",
        "key": message.id,
        "message": message
      }, null)) : createVNode(QNotificationEmpty, null, null)]
    });
  }
});
const QNotificationUnread = /* @__PURE__ */ defineComponent({
  name: "QNotificationUnread",
  setup() {
    const {
      unread: unread2
    } = useNotification();
    return () => createVNode(Flex, {
      "vertical": true,
      "gap": "middle"
    }, {
      default: () => [unread2.value.length ? unread2.value.map((message) => createVNode(QNotificationMessage, {
        "type": "unread",
        "key": message.id,
        "message": message
      }, null)) : createVNode(QNotificationEmpty, null, null)]
    });
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const QNotificationPopoverContent = /* @__PURE__ */ defineComponent({
  name: "QNotificationPopoverContent",
  setup() {
    const activeKey = ref("unread");
    const {
      unread: unread2,
      read: read2
    } = useNotification();
    const {
      t
    } = useI18n();
    const tabOptions = computed(() => {
      return [{
        label: `${t("common.notification.unread")}${unread2.value.length ? `(${unread2.value.length})` : ""}`,
        key: "unread",
        component: QNotificationUnread
      }, {
        label: `${t("common.notification.read")}${read2.value.length ? `(${read2.value.length})` : ""}`,
        key: "read",
        component: QNotificationRead
      }];
    });
    const styles = {
      width: "420px"
    };
    return () => {
      let _slot;
      return createVNode("div", {
        "style": styles
      }, [createVNode(Tabs, {
        "activeKey": activeKey.value,
        "onUpdate:activeKey": ($event) => activeKey.value = $event
      }, _isSlot(_slot = tabOptions.value.map((tab) => createVNode(TabPane, {
        "key": tab.key,
        "tab": tab.label
      }, {
        default: () => [createVNode(tab.component, null, null)]
      }))) ? _slot : {
        default: () => [_slot]
      })]);
    };
  }
});
const QNotificationPopover = /* @__PURE__ */ defineComponent({
  name: "QNotificationPopover",
  setup() {
    const popoverStyles = computed(() => ({
      maxHeight: "420px",
      overflowY: "auto"
    }));
    const {
      isHaveUnread
    } = useNotification();
    return () => createVNode(Popover, {
      "trigger": "click",
      "placement": "bottomRight",
      "style": popoverStyles
    }, {
      content: () => createVNode(QNotificationPopoverContent, null, null),
      default: () => createVNode(Badge, {
        "dot": isHaveUnread.value
      }, {
        default: () => [createVNode(Button, {
          "shape": "circle",
          "icon": createVNode(BellOutlined, null, null)
        }, null)]
      })
    });
  }
});
const QLocalSelect = /* @__PURE__ */ defineComponent({
  name: "QLocalSelect",
  setup() {
    const {
      localeOptions
    } = useLocaleStore();
    const {
      changeLocale,
      currentLocale
    } = useLocale();
    computed(() => ({
      width: "100px"
    }));
    const handleChangeLocale = (value) => {
      changeLocale(value);
    };
    const selectOptions = computed(() => {
      const result = localeOptions.map((item) => ({
        label: item.label,
        key: item.value
      }));
      return result;
    });
    return () => {
      return createVNode(Dropdown, {
        "trigger": ["click", "hover"],
        "overlay": createVNode(Menu, {
          "items": selectOptions.value,
          "onClick": (info) => handleChangeLocale(info.key)
        }, null)
      }, {
        default: () => [createVNode(Button, {
          "icon": createVNode(GlobalOutlined, null, null),
          "shape": "circle"
        }, null)]
      });
    };
  }
});
const QThemeSwitch = /* @__PURE__ */ defineComponent({
  name: "QThemeSwitch",
  setup() {
    const {
      isDark,
      toggleTheme
    } = useTheme();
    return () => {
      return createVNode(Switch, {
        "checked": isDark.value,
        "onChange": () => toggleTheme(),
        "checked-children": "🌙",
        "un-checked-children": "☀️"
      }, null);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "UserDropdown"
  },
  __name: "user-dropdown",
  setup(__props) {
    useCssVars((_ctx) => ({
      "83c19120": unref(token).colorText
    }));
    const { t } = useI18n();
    const UpdateModal = defineAsyncComponent(() => __vitePreload(() => import("./index-JOsJAAXE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const userStore = useUserStore();
    const WrapperStyle = {
      gap: "small",
      align: "center"
    };
    const avatarDropdownItems = [
      generateMenuItem("/dashboard", t("user.dropdown.menu.dashboard"), h(DashboardOutlined)),
      generateMenuItem("update-password", t("user.dropdown.menu.password"), h(SettingOutlined)),
      generateMenuItem("update-avatar", t("user.dropdown.menu.avatar"), h(SettingOutlined)),
      generateMenuItem("logout", t("user.dropdown.menu.logout"), h(LogoutOutlined))
    ];
    const updateModalStatus = ref(false);
    const updateModalType = ref(OpenModalType.PASSWORD);
    const showModal = (type) => {
      updateModalType.value = type;
      updateModalStatus.value = true;
    };
    const handleClickMenuItemActions = (info) => {
      switch (info.key) {
        case "logout":
          userStore.logout();
          break;
        case "update-password":
          showModal(OpenModalType.PASSWORD);
          break;
        case "update-avatar":
          showModal(OpenModalType.AVATAR);
          break;
        default:
          router.push(info.key);
          break;
      }
    };
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(QSkeleton), {
        loading: !((_a = unref(userStore).userInfo) == null ? void 0 : _a.staffPhoto),
        avatar: "",
        paragraph: false
      }, {
        default: withCtx(() => [
          createVNode(unref(Flex), normalizeProps(guardReactiveProps(WrapperStyle)), {
            default: withCtx(() => [
              createVNode(unref(Dropdown), null, {
                overlay: withCtx(() => [
                  createVNode(unref(Menu), {
                    items: avatarDropdownItems,
                    onClick: handleClickMenuItemActions
                  })
                ]),
                default: withCtx(() => [
                  createVNode(unref(Space), { gap: "middle" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(unref(Text), { class: "user-username" }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createTextVNode(toDisplayString((_a3 = unref(userStore).userInfo) == null ? void 0 : _a3.username), 1)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), {
                          size: "large",
                          src: (_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.staffPhoto
                        }, null, 8, ["src"])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(UpdateModal), {
                type: updateModalType.value,
                "onUpdate:type": _cache[0] || (_cache[0] = ($event) => updateModalType.value = $event),
                open: updateModalStatus.value,
                "onUpdate:open": _cache[1] || (_cache[1] = ($event) => updateModalStatus.value = $event)
              }, null, 8, ["type", "open"])
            ]),
            _: 1
          }, 16)
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
const QUserDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dfe23614"]]);
const _hoisted_1$1 = { class: "flex-1" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "QLayoutHeader"
  },
  __name: "header",
  props: {
    "collapsed": { default: false },
    "collapsedModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["changeCollapsed"], ["update:collapsed"]),
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "6abec788": unref(token).colorBgContainer,
      "f845e5b0": unref(token).colorBorderSecondary,
      "2f9356ad": unref(token).colorText
    }));
    const emits = __emit;
    const collapsed = useModel(__props, "collapsed");
    const LayoutHeaderFlex = {
      align: "center",
      justify: "space-between"
    };
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(LayoutHeader), { class: "layout-header" }, {
        default: withCtx(() => [
          createVNode(unref(Flex), normalizeProps(guardReactiveProps(LayoutHeaderFlex)), {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                collapsed.value ? (openBlock(), createBlock(unref(MenuUnfoldOutlined), {
                  key: 0,
                  class: "trigger layout-header-collapsed-icon",
                  onClick: _cache[0] || (_cache[0] = ($event) => emits("changeCollapsed"))
                })) : (openBlock(), createBlock(unref(MenuFoldOutlined), {
                  key: 1,
                  class: "trigger layout-header-collapsed-icon",
                  onClick: _cache[1] || (_cache[1] = ($event) => emits("changeCollapsed"))
                }))
              ]),
              createVNode(unref(Flex), {
                gap: "large",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(QThemeSwitch)),
                  createVNode(unref(QNotificationPopover)),
                  createVNode(unref(QLocalSelect)),
                  createVNode(QUserDropdown)
                ]),
                _: 1
              }),
              _cache[2] || (_cache[2] = createTextVNode(", "))
            ]),
            _: 1
          }, 16)
        ]),
        _: 1
      });
    };
  }
});
const QLayoutHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3f95218b"]]);
const _imports_0 = "/admin-ihrm/assets/png/logo-CWnL_6xh.png";
const _hoisted_1 = { class: "logo-container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "QLogo"
  },
  __name: "logo",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(RouterLink), { to: "/" }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createBaseVNode("img", {
              class: "logo",
              src: _imports_0,
              alt: "logo"
            }, null, -1)
          ])),
          _: 1
        })
      ]);
    };
  }
});
const QLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7fbc52b9"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "QLayoutSider"
  },
  __name: "sider",
  props: {
    "collapsed": { type: Boolean, ...{ default: false } },
    "collapsedModifiers": {}
  },
  emits: ["update:collapsed"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "12d09652": unref(token).colorBgContainer
    }));
    const { t } = useI18n();
    const { getRoutes } = useRouter();
    const route = useRoute();
    const collapsed = useModel(__props, "collapsed");
    const selectedKeys = computed(() => {
      var _a;
      if ((_a = route.meta) == null ? void 0 : _a.parentKey) {
        return [`/${route.meta.parentKey}`];
      }
      return [route.path];
    });
    const openKeys = ref([]);
    watch(
      () => route.path,
      (path) => {
        const matched = route.matched;
        const parentPaths = matched.slice(0, -1).map((route2) => route2.path).filter((path2) => path2 !== "/");
        if (!collapsed.value) {
          openKeys.value = parentPaths;
        }
      },
      { immediate: true }
    );
    watch(collapsed, (val) => {
      if (val) {
        openKeys.value = [];
      }
    });
    const handleClickMenuItem = ({ key }) => {
      router.push(key);
    };
    const handleOpenChange = (keys) => {
      openKeys.value = keys;
    };
    const { themeStatus } = useTheme();
    const { token } = useAntdToken();
    const menuItems = computed(() => {
      return getRoutes().filter((item) => item.meta).filter((route2) => route2.meta.title && !route2.meta.hidden).sort((a, b) => (a.meta.index ?? 0) - (b.meta.index ?? 0)).map((route2) => {
        return generateMenuItem(
          route2.path,
          t(route2.meta.title),
          typeof route2.meta.icon === "string" ? h(route2.meta.icon) : route2.meta.icon
        );
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(LayoutSider), {
        width: "150",
        class: "layout-sider",
        collapsed: collapsed.value,
        "onUpdate:collapsed": _cache[2] || (_cache[2] = ($event) => collapsed.value = $event),
        trigger: null,
        collapsible: "",
        theme: unref(themeStatus)
      }, {
        default: withCtx(() => [
          createVNode(QLogo),
          createVNode(unref(Menu), {
            theme: unref(themeStatus),
            mode: "inline",
            selectedKeys: selectedKeys.value,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => selectedKeys.value = $event),
            openKeys: openKeys.value,
            "onUpdate:openKeys": _cache[1] || (_cache[1] = ($event) => openKeys.value = $event),
            items: menuItems.value,
            onClick: handleClickMenuItem,
            onOpenChange: handleOpenChange,
            class: "layout-sider-menu"
          }, null, 8, ["theme", "selectedKeys", "openKeys", "items"])
        ]),
        _: 1
      }, 8, ["collapsed", "theme"]);
    };
  }
});
const QLayoutSider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-da2f32ad"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LayoutDefault"
  },
  __name: "default",
  setup(__props) {
    useCssVars((_ctx) => ({
      "33cec7bd": unref(token).colorBgContainer
    }));
    const collapsed = ref(true);
    const handleChangeCollapsed = (status) => {
      if (status !== void 0) {
        collapsed.value = status;
      } else {
        collapsed.value = !collapsed.value;
      }
    };
    const { token } = useAntdToken();
    const {
      getUserNotification
    } = useNotification();
    usePolling(async () => {
      await getUserNotification();
    }, {
      interval: 3e3,
      immediate: true,
      autoStart: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), { class: "layout-default" }, {
        default: withCtx(() => [
          createVNode(QLayoutSider, { collapsed: collapsed.value }, null, 8, ["collapsed"]),
          createVNode(unref(Layout), { class: "layout-main" }, {
            default: withCtx(() => [
              createVNode(QLayoutHeader, {
                collapsed: collapsed.value,
                onChangeCollapsed: handleChangeCollapsed
              }, null, 8, ["collapsed"]),
              createVNode(QLayoutContent, { class: "layout-content" })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2d730fb"]]);
export {
  _default as default
};
