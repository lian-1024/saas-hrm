import { d as defineComponent, a1 as openBlock, a5 as createElementBlock, af as createBaseVNode, r as ref, a as reactive, a2 as createBlock, a3 as withCtx, c as createVNode, u as unref, G as createTextVNode, a9 as toDisplayString, aj as mergeProps, o as onMounted, f as onUnmounted, a7 as useCssVars, a8 as resolveDynamicComponent } from "./vue-vendor-DA6b90QH.js";
import { u as useAntdToken } from "./index-Bc78yVQl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useI18n, e as useUserStore, a as useRequest, U as UserService } from "./index-BRjnmkr0.js";
import { al as Input, aj as Form, a1 as Checkbox, aa as Link, B as Button, ax as QRCode, F as Flex, Z as Title } from "./antd-vendor-NhxykF_l.js";
import { Q as QRCodeStatus } from "./index-CdyXGYYq.js";
import "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-B6NgBDy-.js";
const _imports_0 = "/admin-ihrm/assets/png/login_back-BLUAlTsq.png";
const _hoisted_1$2 = { class: "hero" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "SignInHero"
  },
  __name: "hero",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, _cache[0] || (_cache[0] = [
        createBaseVNode("img", {
          class: "hero-img",
          src: _imports_0,
          alt: "hero"
        }, null, -1)
      ]));
    };
  }
});
const SignInHero = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7d0e3b65"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "mobile-form",
  setup(__props) {
    const { t } = useI18n();
    const formRef = ref();
    const formState = reactive({
      mobile: "13800000002",
      password: "hm#qd@23!",
      isAgree: true
    });
    const rules = {
      mobile: [
        { required: true, message: t("user.mobileForm.rules.mobile.required") },
        { pattern: /^1[3-9]\d{9}$/, message: t("user.mobileForm.rules.mobile.format") }
      ],
      password: [
        { required: true, message: t("user.mobileForm.rules.password.required") },
        { min: 6, message: t("user.mobileForm.rules.password.minLength") }
      ],
      isAgree: [
        {
          validator: (_, value) => {
            if (!value) {
              return Promise.reject(t("user.mobileForm.rules.agreement.required"));
            }
            return Promise.resolve();
          }
        }
      ]
    };
    const userStore = useUserStore();
    const handleFinish = async (values) => {
      await userStore.login(values);
    };
    const formLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Form), mergeProps({
        ref_key: "formRef",
        ref: formRef,
        model: formState,
        rules
      }, formLayout, { onFinish: handleFinish }), {
        default: withCtx(() => [
          createVNode(unref(Form).Item, { name: "mobile" }, {
            default: withCtx(() => [
              createVNode(unref(Input), {
                value: formState.mobile,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formState.mobile = $event),
                size: "large",
                placeholder: unref(t)("user.mobileForm.placeholder.mobile")
              }, {
                prefix: withCtx(() => _cache[3] || (_cache[3] = [
                  createBaseVNode("span", { class: "anticon" }, [
                    createBaseVNode("i", { class: "iconfont icon-phone" })
                  ], -1)
                ])),
                _: 1
              }, 8, ["value", "placeholder"])
            ]),
            _: 1
          }),
          createVNode(unref(Form).Item, { name: "password" }, {
            default: withCtx(() => [
              createVNode(unref(Input).Password, {
                value: formState.password,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formState.password = $event),
                size: "large",
                placeholder: unref(t)("user.mobileForm.placeholder.password")
              }, {
                prefix: withCtx(() => _cache[4] || (_cache[4] = [
                  createBaseVNode("span", { class: "anticon" }, [
                    createBaseVNode("i", { class: "iconfont icon-lock" })
                  ], -1)
                ])),
                _: 1
              }, 8, ["value", "placeholder"])
            ]),
            _: 1
          }),
          createVNode(unref(Form).Item, { name: "isAgree" }, {
            default: withCtx(() => [
              createVNode(unref(Checkbox), {
                checked: formState.isAgree,
                "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => formState.isAgree = $event)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("user.mobileForm.agreement.text")) + " ", 1),
                  createVNode(unref(Link), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("user.mobileForm.agreement.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["checked"])
            ]),
            _: 1
          }),
          createVNode(unref(Form).Item, null, {
            default: withCtx(() => [
              createVNode(unref(Button), {
                loading: unref(userStore).loginLoading,
                type: "primary",
                "html-type": "submit",
                block: "",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("user.mobileForm.button.login")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["model"]);
    };
  }
});
const _hoisted_1$1 = { class: "qrcode-form" };
const _hoisted_2$1 = { class: "qrcode-wrapper" };
const _hoisted_3$1 = { class: "qrcode-tip" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "qrcode-form",
  setup(__props) {
    const { t } = useI18n();
    const qrcodeKey = ref("");
    const pollingTimer = ref();
    const userStore = useUserStore();
    const qrcodeStatus = ref();
    const qrcodeStatusMap = {
      [QRCodeStatus.UN_SCAN]: "active",
      [QRCodeStatus.SCANED]: "scanned",
      [QRCodeStatus.SUCCESS]: "scanned",
      [QRCodeStatus.EXPIRED]: "expired",
      [QRCodeStatus.CANCEL]: "expired"
    };
    const { run: getQRCodeKey, loading: getQRCodeKeyLoading } = useRequest(UserService.getQRCodeKey, {
      manual: true,
      onSuccess: ({ data }) => {
        qrcodeKey.value = data;
        startPolling();
      }
    });
    const { run: getQRCodeStatus } = useRequest(UserService.getQRCodeStatus, {
      manual: true,
      onSuccess: ({ data }) => {
        qrcodeStatus.value = qrcodeStatusMap[data.status];
        if (Number(data.status) === QRCodeStatus.SUCCESS) {
          stopPolling();
          userStore.login(data);
        }
      }
    });
    const startPolling = () => {
      stopPolling();
      pollingTimer.value = setInterval(() => {
        if (qrcodeKey.value) {
          getQRCodeStatus(qrcodeKey.value);
        }
      }, 3e3);
    };
    const stopPolling = () => {
      if (pollingTimer.value) {
        clearInterval(pollingTimer.value);
        pollingTimer.value = void 0;
      }
    };
    const handleRefresh = () => {
      getQRCodeKey();
    };
    onMounted(async () => {
      qrcodeStatus.value = "loading";
      await getQRCodeKey();
      qrcodeStatus.value = "active";
    });
    onUnmounted(() => {
      stopPolling();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(QRCode), {
            value: qrcodeKey.value,
            status: qrcodeStatus.value
          }, null, 8, ["value", "status"]),
          createBaseVNode("p", _hoisted_3$1, toDisplayString(unref(t)("user.qrcodeForm.tip")), 1)
        ]),
        createVNode(unref(Button), {
          type: "primary",
          loading: unref(getQRCodeKeyLoading),
          block: "",
          size: "large",
          onClick: handleRefresh
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("user.qrcodeForm.button.refresh")), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
const QrcodeForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2cee7779"]]);
const _hoisted_1 = { class: "sign-in-form" };
const _hoisted_2 = { class: "sign-in-form-wrapper" };
const _hoisted_3 = { class: "sign-in-form-component" };
const _hoisted_4 = { class: "sign-in-form-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SignInPage"
  },
  __name: "index",
  setup(__props) {
    useCssVars((_ctx) => ({
      "11d56c69": unref(token).colorBgContainer
    }));
    const { t } = useI18n();
    const loginType = ref("mobile");
    const toggleLoginType = () => {
      loginType.value = loginType.value === "mobile" ? "qrcode" : "mobile";
    };
    const { token } = useAntdToken();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Flex), { class: "sign-in" }, {
        default: withCtx(() => [
          createVNode(SignInHero, { class: "sign-in-hero" }),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(Title), {
                level: 3,
                class: "sign-in-form-title"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)(`user.signIn.title.${loginType.value}`)), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3, [
                (openBlock(), createBlock(resolveDynamicComponent(loginType.value === "mobile" ? _sfc_main$2 : QrcodeForm)))
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("a", { onClick: toggleLoginType }, toDisplayString(unref(t)(`user.signIn.switchType.${loginType.value}`)), 1)
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1df84bc5"]]);
export {
  index as default
};
