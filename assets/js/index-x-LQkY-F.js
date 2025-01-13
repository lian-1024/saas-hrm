const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/default-R6_Itqgs.js","assets/js/vue-vendor-C3i0i51a.js","assets/js/index-BheweVra.js","assets/js/antd-vendor-D4nQN1Zz.js","assets/js/lodash-vendor-DpYuFiFB.js","assets/js/_plugin-vue_export-helper-1tPrXgE0.js","assets/js/message-DvY9wwDO.js","assets/js/spin-DFBmYiCr.js","assets/js/avatar.vue_vue_type_script_setup_true_lang-ByGzOMG-.js","assets/js/skeleton-LDWoY3Lm.js","assets/js/generate-menu-item-EqEeHg1E.js","assets/js/index-CdyXGYYq.js","assets/js/axios-vendor-Bmyqv9Cn.js","assets/js/index-CSx_oHto.js","assets/js/department.service-BHm1UbAi.js","assets/js/vue3-count-to.esm-lrySgJno.js","assets/js/index-DOijP3kG.js","assets/js/echarts-vendor-B_inlWhk.js","assets/js/index-Bwrc2ID2.js","assets/js/department-BQT5hIqY.js","assets/js/index-BKi6ckzo.js","assets/js/employee.service-8UfBD8Jx.js","assets/js/index-BnxA952M.js","assets/js/index-DMvN4Oba.js","assets/js/permission-DIgwFTWF.js","assets/js/index-DwnFT4H9.js","assets/js/role.service-u1e2vSi7.js","assets/js/index-CZugj-Bx.js","assets/js/404-BlBbUYPt.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as defineComponent, h, j as computed, w as watch, F as Fragment, R as effectScope, i as inject, o as onMounted, f as onUnmounted, H as isRef, g as getCurrentInstance, r as ref, s as shallowRef, c as createVNode, T as Text, z as toRef$1, S as readonly, U as customRef, l as onBeforeUnmount, V as toValue, M as getCurrentScope, N as onScopeDispose, n as nextTick, W as hasInjectionContext, k as watchEffect, X as defineStore, Y as createPinia, Z as useRoute, _ as createRouter, $ as createWebHistory, p as provide, J as toRaw, a0 as storeToRefs, a1 as resolveComponent, a2 as openBlock, a3 as createBlock, a4 as withCtx, u as unref, Q as createApp } from "./vue-vendor-C3i0i51a.js";
import { C as CalendarOutlined, D as DashboardOutlined, A as ApartmentOutlined, T as TeamOutlined, K as KeyOutlined, U as UserOutlined, h as api, _ as _extends, P as Pagination, l as localeValues$1, j as getDefaultExportFromCjs, t as theme, k as App, m as ConfigProvider, r as requireDayjs_min, n as dayjs, o as customParseFormat } from "./antd-vendor-D4nQN1Zz.js";
import { a as axios } from "./axios-vendor-Bmyqv9Cn.js";
import "./lodash-vendor-DpYuFiFB.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/*!
  * shared v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = typeof window !== "undefined";
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale2, key, source) => friendlyJSONstringify({ l: locale2, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
const _create = Object.create;
const create = (obj = null) => _create(obj);
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isObject$1(src2[key]) && !isObject$1(des2[key])) {
        des2[key] = Array.isArray(src2[key]) ? [] : create();
      }
      if (isNotObjectOrIsArray(des2[key]) || isNotObjectOrIsArray(src2[key])) {
        des2[key] = src2[key];
      } else {
        stack.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
};
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
function createCompileError(code, loc, options = {}) {
  const { domain, messages: messages2, args } = options;
  const msg = code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
  const isLF = (index2) => _buf[index2] === CHAR_LF;
  const isPS = (index2) => _buf[index2] === CHAR_PS;
  const isLS = (index2) => _buf[index2] === CHAR_LS;
  const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    13
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 7) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 7 || currentType === 11)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "") => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return hasSpace;
      } else if (ch === "@" || !ch) {
        return hasSpace;
      } else if (ch === "|") {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 4 || context2.currentType === 5 || context2.currentType === 6)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 4, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 6, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 12, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 11, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 10, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        13
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 11) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 9) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 4:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 7: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 13 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 13) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 13) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
  }
  delete node.type;
}
function createCodeGenerator(ast, options) {
  const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  const sourceMap = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code, map } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
/*!
  * core-base v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function initFeatureFlags$1() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(
      0
      /* NodeTypes.Resource */
    );
  }
  const type = resolveType(body);
  if (type === 1) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages2, c) => [
      ...messages2,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
const PROPS_BODY = ["b", "body"];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === "text" ? static_ : ctx.normalize([static_]);
  } else {
    const messages2 = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages2);
  }
}
const PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3: {
      return resolveValue$1(node, type);
    }
    case 9: {
      return resolveValue$1(node, type);
    }
    case 4: {
      const named = node;
      if (hasOwn$1(named, "k") && named.k) {
        return ctx.interpolate(ctx.named(named.k));
      }
      if (hasOwn$1(named, "key") && named.key) {
        return ctx.interpolate(ctx.named(named.key));
      }
      throw createUnhandleNodeError(type);
    }
    case 5: {
      const list = node;
      if (hasOwn$1(list, "i") && isNumber(list.i)) {
        return ctx.interpolate(ctx.list(list.i));
      }
      if (hasOwn$1(list, "index") && isNumber(list.index)) {
        return ctx.interpolate(ctx.list(list.index));
      }
      throw createUnhandleNodeError(type);
    }
    case 6: {
      const linked = node;
      const modifier = resolveLinkedModifier(linked);
      const key = resolveLinkedKey(linked);
      return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      return resolveValue$1(node, type);
    }
    case 8: {
      return resolveValue$1(node, type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const PROPS_TYPE = ["t", "type"];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(
      6
      /* NodeTypes.Linked */
    );
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (hasOwn$1(node, prop) && node[prop] != null) {
      return node[prop];
    }
  }
  return defaultValue;
}
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
const defaultOnCacheKey = (message) => message;
let compileCache = create();
function isMessageAST(val) {
  return isObject$1(val) && resolveType(val) === 0 && (hasOwn$1(val, "b") || hasOwn$1(val, "body"));
}
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
// @__NO_SIDE_EFFECTS__
function compile(message, context) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && isString(message)) {
    isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: false,
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n2, version, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: i18n2,
    version,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: COMPILE_ERROR_CODES_EXTEND_POINT,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return createCompileError(code, null, void 0);
}
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale2) {
  if (isString(locale2)) {
    return locale2;
  } else {
    if (isFunction(locale2)) {
      if (locale2.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale2.constructor.name === "Function") {
        const resolve = locale2();
        if (isPromise(resolve)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject$1(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE$1;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale2 = block[i];
    if (isString(locale2)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale2, blocks) {
  let follow;
  const tokens = locale2.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale2 = target.replace(/!/g, "");
      chain.push(locale2);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale2]) {
        follow = blocks[locale2];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b2 = str.charCodeAt(str.length - 1);
  return a === b2 && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return ch;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$1(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    if (isFunction(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const VERSION$1 = "10.0.5";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE$1 = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject$1(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version = isString(options.version) ? options.version : VERSION$1;
  const locale2 = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE$1;
  const _locale = isFunction(locale2) ? DEFAULT_LOCALE$1 : locale2;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages2 = isPlainObject(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || create();
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject$1(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale: locale2,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
const createResources = (locale2) => ({ [locale2]: create() });
function handleMissing(context, key, locale2, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale2, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale2, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale2);
}
function isAlmostSameLocale(locale2, compareLocale) {
  if (locale2 === compareLocale)
    return false;
  return locale2.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index = locales.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale2, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale2}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale2, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale2}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale2 = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$1(options.pluralRules) && isString(locale2) && isFunction(options.pluralRules[locale2]) ? options.pluralRules[locale2] : pluralDefault;
  const orgPluralRule = isObject$1(options.pluralRules) && isString(locale2) && isFunction(options.pluralRules[locale2]) ? pluralDefault : void 0;
  const plural = (messages2) => {
    return messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || create();
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key, useLinked) {
    const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject$1(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject$1(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key, true)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign(create(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
  const locale2 = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale2, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale2,
    messages2[locale2] || create()
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject$1(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale2, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale2);
  let message = create();
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages2[targetLocale] || create();
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format2 = missingRet;
      }
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = create();
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale2, key, source, warnHtmlMessage, onError) {
  return {
    locale: locale2,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale2, key, source2)
  };
}
function getMessageContextOptions(context, locale2, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue2(message, key);
    if (val == null && (fallbackContext || useLinked)) {
      const [, , message2] = resolveMessageFormat(
        fallbackContext || context,
        // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
        key,
        locale2,
        fallbackLocale,
        fallbackWarn,
        missingWarn
      );
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale2, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale: locale2,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
{
  initFeatureFlags$1();
}
/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "10.0.5";
function initFeatureFlags() {
  if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") {
    getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
  }
  if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") {
    getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") {
    getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: CORE_ERROR_CODES_EXTEND_POINT,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function createI18nError(code, ...args) {
  return createCompileError(code, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn$1(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$1(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = create();
        }
        if (!isObject$1(currentObj[subKeys[i]])) {
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale2, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? create() : { [locale2]: create() };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale22, resource } = custom;
        if (locale22) {
          ret[locale22] = ret[locale22] || create();
          deepCopy(resource, ret[locale22]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn$1(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance2) {
  return instance2.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages2 = isObject$1(options.messages) ? options.messages : create();
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(gl.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale2) => {
      gl.mergeLocaleMessage(locale2, messages2[locale2]);
    });
  }
  {
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeDateTimeFormat(locale2, options.datetimeFormats[locale2]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeNumberFormat(locale2, options.numberFormats[locale2]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale2, key, type) => {
    return missing(locale2, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance2 = getCurrentInstance();
  let meta = null;
  return instance2 && (meta = getComponentOptions(instance2)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = inBrowser ? ref : shallowRef;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE$1
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale2 = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if (__INTLIFY_PROD_DEVTOOLS__) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (__INTLIFY_PROD_DEVTOOLS__) ;
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale22) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale22) ? locale22 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
    }, () => [key], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key, locale22]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages22 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages22 = messageValue;
        break;
      }
    }
    return messages22;
  }
  function tm(key) {
    const messages22 = resolveMessages(key);
    return messages22 != null ? messages22 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale22) {
    return _messages.value[locale22] || {};
  }
  function setLocaleMessage(locale22, message) {
    if (flatJson) {
      const _message = { [locale22]: message };
      for (const key in _message) {
        if (hasOwn$1(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale22];
    }
    _messages.value[locale22] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale22, message) {
    _messages.value[locale22] = _messages.value[locale22] || {};
    const _message = { [locale22]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn$1(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale22];
    deepCopy(message, _messages.value[locale22]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale22) {
    return _datetimeFormats.value[locale22] || {};
  }
  function setDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function mergeDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = assign(_datetimeFormats.value[locale22] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function getNumberFormat(locale22) {
    return _numberFormats.value[locale22] || {};
  }
  function setNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  function mergeNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = assign(_numberFormats.value[locale22] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale: locale2,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te2;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale2 = isString(options.locale) ? options.locale : DEFAULT_LOCALE$1;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale2;
  const missing = isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  let messages2 = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages22, locale22) => {
      const message = messages22[locale22] || (messages22[locale22] = {});
      assign(message, sharedMessages[locale22]);
      return messages22;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale: locale2,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}) {
  const composer = createComposer(convertComposerOptions(options));
  const { __extender } = options;
  const vueI18n = {
    // id
    id: composer.id,
    // locale
    get locale() {
      return composer.locale.value;
    },
    set locale(val) {
      composer.locale.value = val;
    },
    // fallbackLocale
    get fallbackLocale() {
      return composer.fallbackLocale.value;
    },
    set fallbackLocale(val) {
      composer.fallbackLocale.value = val;
    },
    // messages
    get messages() {
      return composer.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return composer.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return composer.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return composer.availableLocales;
    },
    // missing
    get missing() {
      return composer.getMissingHandler();
    },
    set missing(handler) {
      composer.setMissingHandler(handler);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
    },
    set silentTranslationWarn(val) {
      composer.missingWarn = isBoolean(val) ? !val : val;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
    },
    set silentFallbackWarn(val) {
      composer.fallbackWarn = isBoolean(val) ? !val : val;
    },
    // modifiers
    get modifiers() {
      return composer.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return composer.fallbackFormat;
    },
    set formatFallbackMessages(val) {
      composer.fallbackFormat = val;
    },
    // postTranslation
    get postTranslation() {
      return composer.getPostTranslationHandler();
    },
    set postTranslation(handler) {
      composer.setPostTranslationHandler(handler);
    },
    // sync
    get sync() {
      return composer.inheritLocale;
    },
    set sync(val) {
      composer.inheritLocale = val;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return composer.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(val) {
      composer.warnHtmlMessage = val !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return composer.escapeParameter;
    },
    set escapeParameterHtml(val) {
      composer.escapeParameter = val;
    },
    // pluralizationRules
    get pluralizationRules() {
      return composer.pluralRules || {};
    },
    // for internal
    __composer: composer,
    // t
    t(...args) {
      return Reflect.apply(composer.t, composer, [...args]);
    },
    // rt
    rt(...args) {
      return Reflect.apply(composer.rt, composer, [...args]);
    },
    // tc
    tc(...args) {
      const [arg1, arg2, arg3] = args;
      const options2 = { plural: 1 };
      let list = null;
      let named = null;
      if (!isString(arg1)) {
        throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
      }
      const key = arg1;
      if (isString(arg2)) {
        options2.locale = arg2;
      } else if (isNumber(arg2)) {
        options2.plural = arg2;
      } else if (isArray(arg2)) {
        list = arg2;
      } else if (isPlainObject(arg2)) {
        named = arg2;
      }
      if (isString(arg3)) {
        options2.locale = arg3;
      } else if (isArray(arg3)) {
        list = arg3;
      } else if (isPlainObject(arg3)) {
        named = arg3;
      }
      return Reflect.apply(composer.t, composer, [
        key,
        list || named || {},
        options2
      ]);
    },
    // te
    te(key, locale2) {
      return composer.te(key, locale2);
    },
    // tm
    tm(key) {
      return composer.tm(key);
    },
    // getLocaleMessage
    getLocaleMessage(locale2) {
      return composer.getLocaleMessage(locale2);
    },
    // setLocaleMessage
    setLocaleMessage(locale2, message) {
      composer.setLocaleMessage(locale2, message);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(locale2, message) {
      composer.mergeLocaleMessage(locale2, message);
    },
    // d
    d(...args) {
      return Reflect.apply(composer.d, composer, [...args]);
    },
    // getDateTimeFormat
    getDateTimeFormat(locale2) {
      return composer.getDateTimeFormat(locale2);
    },
    // setDateTimeFormat
    setDateTimeFormat(locale2, format2) {
      composer.setDateTimeFormat(locale2, format2);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(locale2, format2) {
      composer.mergeDateTimeFormat(locale2, format2);
    },
    // n
    n(...args) {
      return Reflect.apply(composer.n, composer, [...args]);
    },
    // getNumberFormat
    getNumberFormat(locale2) {
      return composer.getNumberFormat(locale2);
    },
    // setNumberFormat
    setNumberFormat(locale2, format2) {
      composer.setNumberFormat(locale2, format2);
    },
    // mergeNumberFormat
    mergeNumberFormat(locale2, format2) {
      composer.mergeNumberFormat(locale2, format2);
    }
  };
  vueI18n.__extender = __extender;
  return vueI18n;
}
function defineMixin(vuei18n, composer, i18n2) {
  return {
    beforeCreate() {
      const instance2 = getCurrentInstance();
      if (!instance2) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          optionsI18n.__extender = i18n2.__vueI18nExtend;
          this.$i18n = createVueI18n(optionsI18n);
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToGlobal(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __extender: i18n2.__vueI18nExtend,
            __root: composer
          });
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale2) => this.$i18n.te(key, locale2);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
      i18n2.__setInstance(instance2, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const instance2 = getCurrentInstance();
      if (!instance2) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const _vueI18n = this.$i18n;
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      if (_vueI18n.__disposer) {
        _vueI18n.__disposer();
        delete _vueI18n.__disposer;
        delete _vueI18n.__extender;
      }
      i18n2.__deleteInstance(instance2);
      delete this.$i18n;
    }
  };
}
function mergeToGlobal(g, options) {
  g.locale = options.locale || g.locale;
  g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
  g.missing = options.missing || g.missing;
  g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
  g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
  g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
  g.postTranslation = options.postTranslation || g.postTranslation;
  g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
  g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
  g.sync = options.sync || g.sync;
  g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
  const messages2 = getLocaleMessages(g.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale2) => g.mergeLocaleMessage(locale2, messages2[locale2]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale2) => g.mergeDateTimeFormat(locale2, options.datetimeFormats[locale2]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale2) => g.mergeNumberFormat(locale2, options.numberFormats[locale2]));
  }
  return g;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, create());
  }
}
function getFragmentableTag() {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = create();
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n2[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign(create(), attrs);
      const tag = isString(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = create();
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign(create(), options2, { [prop]: props.format[prop] }) : options2;
      }, create());
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign(create(), attrs);
    const tag = isString(props.tag) || isObject$1(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n2[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n2[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$1(i18n2, instance2) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance2) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance2);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const _process = (binding) => {
    const { instance: instance2, value } = binding;
    if (!instance2 || !instance2.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n2, instance2.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (inBrowser && i18n2.global === composer) {
      el.__i18nWatcher = watch(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = void 0;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale: locale2, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale2)) {
    options.locale = locale2;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n2, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n2));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = /* @__PURE__ */ makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance2) {
    __instances.set(component, instance2);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  const i18n2 = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
    },
    // install plugin
    async install(app, ...options2) {
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
      if (isPlainObject(options2[0])) {
        const opts = options2[0];
        i18n2.__composerExtend = opts.__composerExtend;
        i18n2.__vueI18nExtend = opts.__vueI18nExtend;
      }
      let globalReleaseHandler = null;
      if (!__legacyMode && __globalInjection) {
        globalReleaseHandler = injectGlobalFields(app, i18n2.global);
      }
      if (__VUE_I18N_FULL_INSTALL__) {
        apply(app, i18n2, ...options2);
      }
      if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
        app.mixin(defineMixin(__global, __global.__composer, i18n2));
      }
      const unmountApp = app.unmount;
      app.unmount = () => {
        globalReleaseHandler && globalReleaseHandler();
        i18n2.dispose();
        unmountApp();
      };
    },
    // global accessor
    get global() {
      return __global;
    },
    dispose() {
      globalScope.stop();
    },
    // @internal
    __instances,
    // @internal
    __getInstance,
    // @internal
    __setInstance,
    // @internal
    __deleteInstance
  };
  return i18n2;
}
function useI18n(options = {}) {
  const instance2 = getCurrentInstance();
  if (instance2 == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance2.isCE && instance2.appContext.app != null && !instance2.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n2 = getI18nInstance(instance2);
  const gl = getGlobalComposer(i18n2);
  const componentOptions = getComponentOptions(instance2);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance2, options.__useComponent);
    if (composer2 == null) {
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance2);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance2, composer);
    i18nInternal.__setInstance(instance2, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
  if (obj == null) {
    throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
  }
  return [scope, obj];
}
function getI18nInstance(instance2) {
  const i18n2 = inject(!instance2.isCE ? instance2.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
  if (!i18n2) {
    throw createI18nError(!instance2.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
  }
  return i18n2;
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n2) {
  return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      if (__VUE_I18N_LEGACY_API__) {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOptionSymbol]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
function setupLifeCycle(i18n2, target, composer) {
  onMounted(() => {
  }, target);
  onUnmounted(() => {
    const _composer = composer;
    i18n2.__deleteInstance(target);
    const dispose = _composer[DisposeSymbol];
    if (dispose) {
      dispose();
      delete _composer[DisposeSymbol];
    }
  }, target);
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  initFeatureFlags();
}
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const en = {
  common: {
    confirm: "Confirm",
    cancel: "Cancel",
    enable: {
      enable: "Enabled",
      disable: "Disabled"
    },
    message: {
      level: {
        notification: "Notification",
        tips: "Tips",
        important: "Important",
        urgent: "Urgent"
      }
    },
    title: {
      prefix: "IHRM",
      dashboard: "Dashboard",
      employee: "Employee Management",
      employeeDetail: "Employee Detail",
      department: "Department Management",
      role: "Role Management",
      permission: "Permission Management",
      attendance: "Attendance Management",
      settings: "Settings",
      signIn: "Sign In",
      result: {
        404: "404"
      }
    },
    notification: {
      empty: "No Messages",
      unread: "Unread",
      read: "Read",
      markAsRead: "Mark as Read",
      delete: "Delete",
      messages: {
        markAsReadSuccess: "Marked as read successfully",
        markAsReadError: "Failed to mark as read",
        deleteSuccess: "Message deleted successfully",
        deleteError: "Failed to delete message"
      }
    }
  },
  nav: {
    dashboard: "Dashboard",
    employee: "Employee",
    employeeDetail: "Employee Detail",
    department: "Department",
    role: "Role",
    permission: "Permission",
    attendance: "Attendance"
  },
  dashboard: {
    companyName: "Beijing Bytedance Technology Company Limited",
    employeeTotal: "Total Employees",
    regularEmployeeTotal: "Regular Employees",
    contractSignTotal: "Pending Contracts",
    toBeEmployed: "Pending Onboard",
    toBeConfirmed: "Pending Conversion",
    interfaceAccessTotal: "Total API Calls",
    quick: {
      title: "Quick Access",
      leaveApproval: "Leave Approval",
      attendance: "Attendance",
      roleManagement: "Role Management",
      salarySettings: "Salary Settings",
      addPermission: "Add Permission"
    },
    declare: {
      socialInsurance: "Social Declare Total",
      providentFund: "Housing Fund Declare Total",
      total: "Declare Total",
      declaredTotal: "Declared Total",
      declaringTotal: "Declaring Total",
      toDeclareTotal: "To Declare Total"
    },
    helpLink: {
      title: "Help Links",
      gettingStarted: "Getting Started",
      onlineHelpManual: "Online Help Manual",
      contactSupport: "Contact Support",
      addLink: "Add Link"
    },
    notification: {
      title: "Notification",
      published: "published"
    }
  },
  department: {
    operations: {
      title: "Operation",
      addChild: "Add Sub-department",
      edit: "Edit",
      delete: "Delete",
      operationMessage: {
        addSuccess: "Add department successfully",
        addError: "Add department failed",
        editSuccess: "Edit department successfully",
        editError: "Edit department failed",
        deleteSuccess: "Delete department successfully",
        deleteError: "Delete department failed",
        selectDepartment: "Please select the department",
        deleteConfirmContent: "Are you sure you want to delete this department?",
        deleteConfirmTitle: "Delete department",
        confirmDelete: "Confirm delete",
        cancelDelete: "Cancel delete"
      }
    },
    form: {
      rules: {
        name: {
          required: "Please enter the department name",
          min: "Department name length is 2-10 characters"
        },
        code: {
          required: "Please enter the department code",
          min: "Department code length is 2-10 characters"
        },
        managerId: {
          required: "Please select the department manager"
        },
        introduce: {
          required: "Please enter the department introduction",
          max: "Department introduction is up to 100 characters"
        }
      },
      fields: {
        name: "Department Name",
        code: "Department Code",
        managerId: "Department Manager",
        introduce: "Department Introduction"
      },
      placeholder: {
        name: "Please enter department name",
        code: "Please enter department code",
        managerId: "Please select department manager",
        introduce: "Please enter department introduction"
      }
    }
  },
  role: {
    table: {
      columns: {
        key: "No.",
        role: "Role",
        status: "Enable",
        description: "Description",
        actions: "Operation"
      },
      actions: {
        addRole: "Add Role",
        givePermission: "Assign Permissions",
        edit: "Edit",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete"
      },
      operationMessage: {
        deleteConfirmTitle: "Delete Role",
        deleteConfirmContent: "Are you sure you want to delete this role?",
        confirmDelete: "Confirm delete",
        cancelDelete: "Cancel delete",
        deleteRoleSuccess: "Delete role successfully",
        deleteRoleError: "Delete role failed",
        addRoleSuccess: "Add role successfully",
        addRoleError: "Add role failed",
        editRoleSuccess: "Edit role successfully",
        editRoleError: "Edit role failed",
        cancelConfirmTitle: "Are you sure you want to cancel the edit?"
      }
    },
    form: {
      title: "New Role",
      fields: {
        name: "Role Name",
        description: "Role Description",
        status: "Enable"
      },
      placeholder: {
        name: "Please enter role name",
        description: "Please enter role description"
      },
      rules: {
        name: {
          required: "Please enter role name"
        },
        description: {
          required: "Please enter role description"
        }
      }
    }
  },
  employee: {
    table: {
      columns: {
        staffPhoto: "Avatar",
        username: "Name",
        mobile: "Mobile",
        workNumber: "Work ID",
        formOfEmployment: "Employment Type",
        departmentName: "Department",
        timeOfEntry: "Entry Time",
        operations: "Operations"
      },
      actions: {
        view: "View",
        role: "Role",
        delete: "Delete",
        deleteConfirm: "Are you sure you want to delete?"
      },
      pagination: {
        total: "Total {total} items"
      },
      formalOfEmployment: {
        formal: "Formal",
        informal: "Informal"
      }
    },
    actions: {
      sendNotification: "Send Notification",
      addEmployee: "Add Employee",
      importExcel: "Import Excel",
      exportExcel: "Export Excel"
    },
    search: {
      placeholder: "Search employee name"
    },
    messages: {
      noSelectedEmployee: "Please select employees",
      deleteSuccess: "Employee deleted successfully",
      deleteError: "Failed to delete employee",
      updateSuccess: "Update employee successfully",
      updateError: "Failed to update employee",
      addSuccess: "Add employee successfully",
      addError: "Failed to add employee",
      massNotificationSuccess: "Mass notification sent successfully",
      massNotificationError: "Failed to send mass notification"
    },
    detail: {
      title: "Employee Detail",
      form: {
        fields: {
          username: "Name",
          workNumber: "Work ID",
          mobile: "Mobile",
          department: "Department",
          formOfEmployment: "Employment Type",
          timeOfEntry: "Entry Time",
          correctionTime: "Correction Time",
          staffPhoto: "Photo"
        },
        placeholder: {
          username: "Please enter employee full name",
          department: "Please select department",
          formOfEmployment: "Please select employment type"
        },
        rules: {
          username: {
            required: "Please enter employee name",
            length: "Name length should be 1-4 characters"
          },
          mobile: {
            required: "Please enter mobile number",
            format: "Invalid mobile number format"
          },
          timeOfEntry: {
            required: "Please select entry time",
            format: "Invalid entry time format"
          },
          correctionTime: {
            required: "Please select correction time",
            format: "Invalid correction time format"
          },
          department: {
            required: "Please select department"
          },
          formOfEmployment: {
            required: "Please select employment type"
          }
        },
        buttons: {
          save: "Save",
          update: "Update"
        }
      },
      upload: {
        text: "Upload",
        error: {
          type: "You can only upload JPG file!",
          size: "Image must be smaller than 2MB!",
          upload: "Upload error"
        }
      }
    },
    roleModal: {
      title: "Assign Roles",
      success: "Roles assigned successfully",
      error: "Failed to assign roles",
      confirm: "Confirm",
      cancel: "Cancel"
    },
    importModal: {
      title: "Import Employees",
      downloadTemplate: "Download Template",
      dragText: "Drag file here or",
      clickToUpload: "click to upload",
      success: "Import successful",
      error: "Import failed",
      fileType: {
        error: "Only Excel files are allowed!"
      },
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      }
    },
    massNotification: {
      title: "Mass Notification",
      messageLevel: "Message Level",
      content: "Content",
      rules: {
        messageLevel: "Please select message level",
        content: "Please enter notification content"
      }
    }
  },
  permission: {
    table: {
      columns: {
        name: "Name",
        key: "Key",
        description: "Description",
        operations: "Operations"
      },
      actions: {
        add: "Add",
        edit: "Edit",
        delete: "Delete"
      }
    },
    actions: {
      addPermission: "Add Permission"
    },
    modal: {
      title: {
        add: "Add Permission",
        edit: "Edit Permission"
      },
      form: {
        fields: {
          name: "Permission Name",
          code: "Permission Key",
          description: "Description",
          enable: "Enable"
        },
        placeholder: {
          name: "Please enter permission name",
          code: "Please enter permission key",
          description: "Please enter permission description"
        },
        rules: {
          name: {
            required: "Please enter permission name",
            exists: "Permission name already exists",
            length: "Permission name should be 2-50 characters"
          },
          code: {
            required: "Please enter permission key",
            exists: "Permission key already exists",
            length: "Permission key should be 2-50 characters"
          }
        }
      },
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      }
    },
    messages: {
      deleteConfirm: "Are you sure you want to delete this permission?",
      deleteSuccess: "Delete permission successfully",
      deleteError: "Failed to delete permission",
      editSuccess: "Edit permission successfully",
      editError: "Failed to edit permission",
      addSuccess: "Add permission successfully",
      addError: "Failed to add permission"
    }
  },
  attendance: {
    table: {
      columns: {
        key: "No.",
        username: "Name",
        workNumber: "Work ID",
        departmentName: "Department",
        mobile: "Mobile"
      },
      pagination: {
        total: "Total {total} items"
      }
    },
    drawer: {
      title: "Clock-in Range Settings",
      radius: "Radius",
      radiusTip: "Can clock in within {distance}",
      buttons: {
        cancel: "Cancel",
        batchSave: "Batch Save"
      },
      messages: {
        updateSuccess: "Update successful",
        updateError: "Update failed"
      }
    },
    setting: {
      title: "Settings",
      tabs: {
        attendance: "Attendance Settings",
        leave: "Leave Settings",
        deduction: "Deduction Settings",
        overtime: "Overtime Settings"
      },
      buttons: {
        saveUpdate: "Save Update",
        cancel: "Cancel"
      }
    },
    updateModal: {
      title: "{date} (Actual Attendance Plan)",
      note: "Note: Abnormal status takes precedence over normal status",
      buttons: {
        confirm: "Confirm",
        cancel: "Cancel"
      },
      messages: {
        updateSuccess: "Update attendance status successful",
        updateError: "Update attendance status failed"
      }
    },
    popover: {
      checkInTime: "Check-in Time",
      checkOutTime: "Check-out Time",
      checkInPlace: "Check-in Place",
      checkOutPlace: "Check-out Place"
    },
    top: {
      unprocessed: "Unprocessed"
    },
    actions: {
      clockInRange: "Clock-in Range",
      settings: "Settings"
    },
    filter: {
      department: "Department"
    },
    status: {
      1: "Normal",
      2: "Absent",
      3: "Late",
      4: "Early Leave",
      5: "Out",
      6: "Business Trip",
      7: "Annual Leave",
      8: "Personal Leave",
      9: "Sick Leave",
      10: "Marriage Leave",
      11: "Bereavement Leave",
      12: "Maternity Leave",
      13: "Reward Maternity Leave",
      14: "Paternity Leave",
      15: "Home Leave",
      16: "Work Injury Leave",
      17: "Time Off",
      18: "Prenatal Leave",
      19: "Miscarriage Leave",
      20: "Long-term Sick Leave",
      21: "Supplementary Sign",
      22: "Rest",
      99: "-"
    },
    settings: {
      attendance: {
        department: "Department",
        attendanceTime: "Attendance Time",
        rules: {
          selectDepartment: "Please select department",
          selectDate: "Please select date"
        },
        messages: {
          updateSuccess: "Update attendance settings successful",
          updateError: "Update attendance settings failed"
        }
      },
      leave: {
        department: "Department",
        leaveType: "Leave Type",
        name: "Name",
        isEnabled: "Enabled",
        messages: {
          updateSuccess: "Update leave settings successful",
          updateError: "Update leave settings failed"
        }
      },
      deduction: {
        department: "Department",
        deductionType: {
          beLate: "Late",
          leaveEarly: "Early Leave",
          absenteeism: "Absent"
        },
        deduction: "Deduction",
        minutes: "Minutes",
        times: "Times",
        perTime: "Per Time",
        yuan: "Yuan",
        days: "Days",
        messages: {
          updateSuccess: "Update deduction rules successful",
          updateError: "Update deduction rules failed"
        }
      },
      overtime: {
        department: "Department",
        overtimeRules: "Overtime Rules",
        workday: "Can apply for overtime on workdays",
        restDay: "Can apply for overtime on rest days",
        holiday: "Can apply for overtime on statutory holidays",
        timeOff: "Time Off",
        clockValidation: "Clock Validation",
        clockRequired: "Clock-in required for overtime",
        enableCompensation: "Enable Compensation",
        timeOffSettings: "Time Off Settings",
        latestEffectiveDate: "Latest Effective Date: Next Year",
        minimumUnit: "Minimum Unit",
        day: "Day",
        messages: {
          updateSuccess: "Update overtime settings successful",
          updateError: "Update overtime settings failed"
        }
      }
    },
    record: {
      title: "{username}'s Attendance Record for {date}"
    }
  },
  user: {
    signIn: {
      title: {
        mobile: "Mobile Login",
        qrcode: "QR Code Login"
      },
      switchType: {
        mobile: "Use QR Code Login",
        qrcode: "Use Mobile Login"
      },
      messages: {
        loginSuccess: "Login successful",
        loginError: "Login failed"
      }
    },
    mobileForm: {
      placeholder: {
        mobile: "Please enter mobile number",
        password: "Please enter password"
      },
      rules: {
        mobile: {
          required: "Please enter mobile number",
          format: "Invalid mobile number format"
        },
        password: {
          required: "Please enter password",
          minLength: "Password must be at least 6 characters"
        },
        agreement: {
          required: "Please read and agree to the User Platform Agreement"
        }
      },
      agreement: {
        text: "I have read and agree to",
        link: "User Platform Agreement"
      },
      button: {
        login: "Login"
      }
    },
    qrcodeForm: {
      tip: "Please scan QR code with mobile app",
      button: {
        refresh: "Refresh QR Code"
      }
    },
    updateModal: {
      title: {
        password: "Change Password",
        avatar: "Change Avatar"
      },
      password: {
        label: {
          old: "Old Password",
          new: "New Password",
          confirm: "Confirm Password"
        },
        placeholder: {
          old: "Please enter old password",
          new: "Please enter new password",
          confirm: "Please confirm new password"
        },
        rules: {
          old: {
            required: "Please enter old password"
          },
          new: {
            required: "Please enter new password",
            minLength: "Password must be at least 6 characters"
          },
          confirm: {
            required: "Please confirm new password",
            match: "The two passwords do not match"
          }
        },
        messages: {
          success: "Password changed successfully",
          error: "Failed to change password"
        }
      },
      avatar: {
        messages: {
          success: "Avatar uploaded successfully",
          error: "Failed to upload avatar",
          warning: "Please select an avatar first"
        }
      }
    },
    dropdown: {
      menu: {
        dashboard: "Dashboard",
        password: "Change Password",
        avatar: "Change Avatar",
        logout: "Logout"
      }
    }
  },
  result: {
    404: {
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: "Back Home"
    }
  }
};
const zhCN = {
  common: {
    confirm: "确定",
    cancel: "取消",
    enable: {
      enable: "已启用",
      disable: "未启用"
    },
    message: {
      level: {
        notification: "通知消息",
        tips: "提示消息",
        important: "重要消息",
        urgent: "紧急消息"
      }
    },
    title: {
      prefix: "IHRM",
      dashboard: "仪表盘",
      employee: "员工管理",
      employeeDetail: "员工详情",
      department: "部门管理",
      role: "角色管理",
      permission: "权限管理",
      attendance: "考勤管理",
      settings: "设置",
      signIn: "登录",
      result: {
        404: "404"
      }
    },
    notification: {
      empty: "暂无消息",
      unread: "未读",
      read: "已读",
      markAsRead: "标记已读",
      delete: "删除",
      messages: {
        markAsReadSuccess: "标记已读成功",
        markAsReadError: "标记已读失败",
        deleteSuccess: "删除消息成功",
        deleteError: "删除消息失败"
      }
    }
  },
  nav: {
    dashboard: "仪表盘",
    employee: "员工管理",
    employeeDetail: "员工详情",
    department: "部门管理",
    role: "角色管理",
    permission: "权限管理",
    attendance: "考勤管理"
  },
  dashboard: {
    companyName: "北京字节跳动科技有限公司",
    employeeTotal: "组织总人数",
    regularEmployeeTotal: "正式员工",
    contractSignTotal: "合同待签署",
    toBeEmployed: "待入职",
    toBeConfirmed: "待转正",
    interfaceAccessTotal: "接口总访问数",
    quick: {
      title: "快捷入口",
      leaveApproval: "假期审批",
      attendance: "考勤打卡",
      roleManagement: "角色管理",
      salarySettings: "薪资设置",
      addPermission: "添加权限"
    },
    declare: {
      socialInsurance: "社保申报人数",
      providentFund: "公积金申报人数",
      total: "申报人数",
      declaredTotal: "已申报人数",
      declaringTotal: "申报中人数",
      toDeclareTotal: "待申报人数"
    },
    helpLink: {
      title: "帮助链接",
      gettingStarted: "入门指南",
      onlineHelpManual: "在线帮助手册",
      contactSupport: "联系技术支持",
      addLink: "添加链接"
    },
    notification: {
      title: "通知公告",
      published: "发布了"
    }
  },
  department: {
    operations: {
      title: "操作",
      addChild: "添加子部门",
      edit: "编辑",
      delete: "删除",
      operationMessage: {
        addSuccess: "新增部门成功",
        addError: "新增部门失败",
        editSuccess: "编辑部门成功",
        editError: "编辑部门失败",
        deleteSuccess: "删除部门成功",
        deleteError: "删除部门失败",
        selectDepartment: "请选择部门",
        deleteConfirmContent: "确定要删除该部门吗？",
        deleteConfirmTitle: "删除部门",
        confirmDelete: "确定删除",
        cancelDelete: "取消删除"
      }
    },
    form: {
      rules: {
        name: {
          required: "请输入部门名称",
          min: "部门名称长度为2-10个字符"
        },
        code: {
          required: "请输入部门编码",
          min: "部门编码长度为2-10个字符"
        },
        managerId: {
          required: "请选择部门负责人"
        },
        introduce: {
          required: "请输入部门介绍",
          max: "部门介绍最多100个字符"
        }
      },
      fields: {
        name: "部门名称",
        code: "部门编码",
        managerId: "部门负责人",
        introduce: "部门介绍"
      },
      placeholder: {
        name: "请输入部门名称",
        code: "请输入部门编码",
        managerId: "请选择部门负责人",
        introduce: "请输入部门介绍"
      }
    }
  },
  role: {
    table: {
      columns: {
        key: "序号",
        role: "角色",
        status: "启用",
        description: "描述",
        actions: "操作"
      },
      actions: {
        addRole: "添加角色",
        givePermission: "分配权限",
        edit: "编辑",
        save: "保存",
        cancel: "取消",
        delete: "删除"
      },
      operationMessage: {
        deleteConfirmTitle: "删除角色",
        deleteConfirmContent: "确定要删除该角色吗？",
        confirmDelete: "确定删除",
        cancelDelete: "取消删除",
        deleteRoleSuccess: "删除角色成功",
        deleteRoleError: "删除角色失败",
        addRoleSuccess: "新增角色成功",
        addRoleError: "新增角色失败",
        editRoleSuccess: "编辑角色成功",
        editRoleError: "编辑角色失败",
        cancelConfirmTitle: "确定要取消编辑吗?"
      }
    },
    form: {
      title: "新建角色",
      fields: {
        name: "角色名称",
        description: "角色描述",
        status: "启用"
      },
      placeholder: {
        name: "请输入角色名称",
        description: "请输入角色描述"
      },
      rules: {
        name: {
          required: "请输入角色名称"
        },
        description: {
          required: "请输入角色描述"
        }
      }
    }
  },
  employee: {
    table: {
      columns: {
        staffPhoto: "头像",
        username: "昵称",
        mobile: "手机号",
        workNumber: "工号",
        formOfEmployment: "聘用形式",
        departmentName: "部门",
        timeOfEntry: "入职时间",
        operations: "操作"
      },
      actions: {
        view: "查看",
        role: "角色",
        delete: "删除",
        deleteConfirm: "确定要删除吗？"
      },
      pagination: {
        total: "共 {total} 条数据"
      },
      formalOfEmployment: {
        formal: "正式",
        informal: "非正式"
      }
    },
    actions: {
      sendNotification: "群发通知",
      addEmployee: "添加员工",
      importExcel: "excel导入",
      exportExcel: "excel导出"
    },
    search: {
      placeholder: "请输入员工姓名全员搜索"
    },
    messages: {
      noSelectedEmployee: "请选择员工",
      deleteSuccess: "删除员工成功",
      deleteError: "删除员工失败",
      updateSuccess: "更新员工成功",
      updateError: "更新员工失败",
      addSuccess: "添加员工成功",
      addError: "添加员工失败",
      massNotificationSuccess: "群发通知成功",
      massNotificationError: "群发通知失败"
    },
    detail: {
      title: "员工详情",
      form: {
        fields: {
          username: "姓名",
          workNumber: "工号",
          mobile: "手机",
          department: "部门",
          formOfEmployment: "聘用形式",
          timeOfEntry: "入职时间",
          correctionTime: "转正时间",
          staffPhoto: "员工头像"
        },
        placeholder: {
          username: "请输入员工姓名全称",
          department: "请选择部门",
          formOfEmployment: "请选择聘用形式"
        },
        rules: {
          username: {
            required: "请输入员工姓名",
            length: "员工名字长度为2-4位字符"
          },
          mobile: {
            required: "请输入手机号",
            format: "手机号格式不正确"
          },
          timeOfEntry: {
            required: "请选择入职日期",
            format: "入职日期格式不正确"
          },
          correctionTime: {
            required: "请选择转正日期",
            format: "转正日期格式不正确"
          },
          department: {
            required: "请选择部门"
          },
          formOfEmployment: {
            required: "请选择聘用形式"
          }
        },
        buttons: {
          save: "保存",
          update: "更新"
        }
      },
      upload: {
        text: "上传",
        error: {
          type: "只能上传JPG文件!",
          size: "图片必须小于2MB!",
          upload: "上传失败"
        }
      }
    },
    roleModal: {
      title: "分配角色",
      success: "分配角色成功",
      error: "分配角色失败",
      confirm: "确定",
      cancel: "取消"
    },
    importModal: {
      title: "员工导入",
      downloadTemplate: "下载导入模版",
      dragText: "将文件拖到此处或",
      clickToUpload: "点击上传",
      success: "导入成功",
      error: "导入失败",
      fileType: {
        error: "只能上传 Excel 文件!"
      },
      buttons: {
        confirm: "确定",
        cancel: "取消"
      }
    },
    massNotification: {
      title: "群发通知",
      messageLevel: "消息等级",
      content: "通知内容",
      rules: {
        messageLevel: "请选择消息等级",
        content: "请输入通知内容"
      }
    }
  },
  permission: {
    table: {
      columns: {
        name: "名称",
        key: "标识",
        description: "描述",
        operations: "操作"
      },
      actions: {
        add: "添加",
        edit: "编辑",
        delete: "删除"
      }
    },
    actions: {
      addPermission: "添加权限"
    },
    modal: {
      title: {
        add: "新增权限点",
        edit: "编辑权限点"
      },
      form: {
        fields: {
          name: "权限名称",
          code: "权限标识",
          description: "权限描述",
          enable: "开启"
        },
        placeholder: {
          name: "请输入权限名称",
          code: "请输入权限标识",
          description: "请输入权限描述"
        },
        rules: {
          name: {
            required: "请输入权限名称",
            exists: "权限名称已存在",
            length: "权限名称长度应为2-50个字符"
          },
          code: {
            required: "请输入权限标识",
            exists: "权限标识已存在",
            length: "权限标识长度应为2-50个字符"
          }
        }
      },
      buttons: {
        confirm: "确定",
        cancel: "取消"
      }
    },
    messages: {
      deleteConfirm: "确认删除该数据吗?",
      deleteSuccess: "删除权限成功",
      deleteError: "删除权限失败",
      editSuccess: "编辑权限点成功",
      editError: "编辑权限点失败",
      addSuccess: "新增权限点成功",
      addError: "新增权限点失败"
    }
  },
  attendance: {
    table: {
      columns: {
        key: "序号",
        username: "姓名",
        workNumber: "工号",
        departmentName: "部门",
        mobile: "手机"
      },
      pagination: {
        total: "共 {total} 条数据"
      }
    },
    drawer: {
      title: "打卡范围设置",
      radius: "半径",
      radiusTip: "{distance}内可打卡",
      buttons: {
        cancel: "取消",
        batchSave: "批量保存"
      },
      messages: {
        updateSuccess: "更新成功",
        updateError: "更新失败"
      }
    },
    setting: {
      title: "设置",
      tabs: {
        attendance: "出勤设置",
        leave: "请假设置",
        deduction: "扣款设置",
        overtime: "加班设置"
      },
      buttons: {
        saveUpdate: "保存更新",
        cancel: "取消"
      }
    },
    updateModal: {
      title: "{date} (实际考勤方案)",
      note: "注: 统计考勤时，异常状态优先正常状态",
      buttons: {
        confirm: "确定",
        cancel: "取消"
      },
      messages: {
        updateSuccess: "更新考勤状态成功",
        updateError: "更新考勤状态失败"
      }
    },
    popover: {
      checkInTime: "上班时间",
      checkOutTime: "下班时间",
      checkInPlace: "上班地点",
      checkOutPlace: "下班地点"
    },
    top: {
      unprocessed: "未处理"
    },
    actions: {
      clockInRange: "打卡范围",
      settings: "设置"
    },
    filter: {
      department: "部门"
    },
    status: {
      1: "正常",
      2: "旷工",
      3: "迟到",
      4: "早退",
      5: "外出",
      6: "出差",
      7: "年假",
      8: "事假",
      9: "病假",
      10: "婚假",
      11: "丧假",
      12: "产假",
      13: "奖励产假",
      14: "陪产假",
      15: "探亲假",
      16: "工伤假",
      17: "调休",
      18: "产检假",
      19: "流产假",
      20: "长期病假",
      21: "补签",
      22: "休息",
      99: "-"
    },
    settings: {
      attendance: {
        department: "部门",
        attendanceTime: "出勤时间",
        rules: {
          selectDepartment: "请选择部门",
          selectDate: "请选择日期"
        },
        messages: {
          updateSuccess: "更新考勤设置成功",
          updateError: "更新考勤设置失败"
        }
      },
      leave: {
        department: "部门",
        leaveType: "请假类型",
        name: "名称",
        isEnabled: "是否可用",
        messages: {
          updateSuccess: "更新请假设置成功",
          updateError: "更新请假设置失败"
        }
      },
      deduction: {
        department: "部门",
        deductionType: {
          beLate: "迟到",
          leaveEarly: "早退",
          absenteeism: "旷工"
        },
        deduction: "扣款",
        minutes: "分钟",
        times: "次",
        perTime: "每次",
        yuan: "元",
        days: "天",
        messages: {
          updateSuccess: "更新考勤规则成功",
          updateError: "更新考勤规则失败"
        }
      },
      overtime: {
        department: "部门",
        overtimeRules: "加班规则",
        workday: "工作日可申请加班",
        restDay: "休息日可申请加班",
        holiday: "法定节假日可申请加班",
        timeOff: "调休假",
        clockValidation: "打卡验证",
        clockRequired: "加班需要有打卡记录",
        enableCompensation: "开启补偿",
        timeOffSettings: "调休假设置",
        latestEffectiveDate: "最晚有效期:次年",
        minimumUnit: "请假最小单位",
        day: "天",
        messages: {
          updateSuccess: "更新加班设置成功",
          updateError: "更新加班设置失败"
        }
      }
    },
    record: {
      title: "{username}-{date}-考勤记录"
    }
  },
  user: {
    signIn: {
      title: {
        mobile: "手机号登录",
        qrcode: "扫码登录"
      },
      switchType: {
        mobile: "使用扫码登录",
        qrcode: "使用手机号登录"
      },
      messages: {
        loginSuccess: "登录成功",
        loginError: "登录失败"
      }
    },
    mobileForm: {
      placeholder: {
        mobile: "请输入手机号",
        password: "请输入密码"
      },
      rules: {
        mobile: {
          required: "请输入手机号",
          format: "手机号格式不正确"
        },
        password: {
          required: "请输入密码",
          minLength: "密码不能少于6位"
        },
        agreement: {
          required: "请阅读并同意用户平台使用协议"
        }
      },
      agreement: {
        text: "我已阅读并同意",
        link: "《用户平台使用协议》"
      },
      button: {
        login: "登录"
      }
    },
    qrcodeForm: {
      tip: "请使用移动端扫码登录",
      button: {
        refresh: "刷新二维码"
      }
    },
    updateModal: {
      title: {
        password: "修改密码",
        avatar: "修改头像"
      },
      password: {
        label: {
          old: "原密码",
          new: "新密码",
          confirm: "确认密码"
        },
        placeholder: {
          old: "请输入原密码",
          new: "请输入新密码",
          confirm: "请确认新密码"
        },
        rules: {
          old: {
            required: "请输入原密码"
          },
          new: {
            required: "请输入新密码",
            minLength: "密码不能少于6位"
          },
          confirm: {
            required: "请确认新密码",
            match: "两次输入的密码不一致"
          }
        },
        messages: {
          success: "修改密码成功",
          error: "修改密码失败"
        }
      },
      avatar: {
        messages: {
          success: "上传头像成功",
          error: "上传头像失败",
          warning: "请先选择头像"
        }
      }
    },
    dropdown: {
      menu: {
        dashboard: "首页",
        password: "修改密码",
        avatar: "修改头像",
        logout: "退出登录"
      }
    }
  },
  result: {
    404: {
      title: "404",
      subTitle: "你是不是走错路了？",
      extra: "返回首页"
    }
  }
};
const SUPPORT_LOCALES = ["zh-CN", "en"];
const language = (navigator.language || "zh-CN").toLocaleLowerCase();
const messages = {
  "zh-CN": zhCN,
  en
};
const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: "en",
  messages
});
const setupI18n = (app) => {
  app.use(i18n);
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/admin-ihrm/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const attendance = {
  path: "/",
  redirect: "/dashboard",
  name: "attendance",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/attendance",
      component: () => __vitePreload(() => import("./index-CSx_oHto.js").then((n) => n.i), true ? __vite__mapDeps([13,1,9,3,4,7,2,14,15,5]) : void 0),
      meta: {
        index: 5,
        name: "attendance",
        title: "nav.attendance",
        icon: h(CalendarOutlined)
      }
    }
  ]
};
const dashboard = {
  path: "/",
  redirect: "/dashboard",
  name: "dashboard",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/dashboard",
      component: () => __vitePreload(() => import("./index-DOijP3kG.js"), true ? __vite__mapDeps([16,1,3,4,2,5,17,9,15,8,12]) : void 0),
      meta: {
        index: 0,
        name: "dashboard",
        title: "nav.dashboard",
        icon: h(DashboardOutlined)
      }
    }
  ]
};
const department = {
  path: "/",
  redirect: "/dashboard",
  name: "department",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/department",
      component: () => __vitePreload(() => import("./index-Bwrc2ID2.js"), true ? __vite__mapDeps([18,1,9,3,4,2,14,19,5,12]) : void 0),
      meta: {
        index: 1,
        name: "department",
        title: "nav.department",
        icon: h(ApartmentOutlined)
      }
    }
  ]
};
const employee = {
  path: "/",
  redirect: "/dashboard",
  name: "employee",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/employee",
      component: () => __vitePreload(() => import("./index-BKi6ckzo.js").then((n) => n.i), true ? __vite__mapDeps([20,1,8,3,4,9,7,2,14,21,19,5]) : void 0),
      meta: {
        name: "employee",
        index: 3,
        title: "nav.employee",
        icon: h(TeamOutlined)
      }
    },
    {
      path: "/employee/detail/:id?",
      component: () => __vitePreload(() => import("./index-BnxA952M.js"), true ? __vite__mapDeps([22,1,14,21,7,3,4,2,19,5,12]) : void 0),
      meta: {
        name: "employeeDetail",
        title: "nav.employeeDetail",
        hidden: true,
        parentKey: "employee"
      }
    }
  ]
};
const permission = {
  path: "/",
  redirect: "/dashboard",
  name: "permission",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/permission",
      component: () => __vitePreload(() => import("./index-DMvN4Oba.js"), true ? __vite__mapDeps([23,1,7,3,4,2,24,5,12]) : void 0),
      meta: {
        name: "permission",
        index: 4,
        title: "nav.permission",
        icon: h(KeyOutlined)
      }
    }
  ]
};
const role = {
  path: "/",
  redirect: "/dashboard",
  name: "role",
  component: () => __vitePreload(() => import("./default-R6_Itqgs.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0),
  children: [
    {
      path: "/role",
      component: () => __vitePreload(() => import("./index-DwnFT4H9.js"), true ? __vite__mapDeps([25,1,7,3,4,2,26,5,12]) : void 0),
      meta: {
        name: "role",
        index: 2,
        title: "nav.role",
        icon: h(UserOutlined)
      }
    }
  ]
};
const user = {
  path: "/sign-in",
  component: () => __vitePreload(() => import("./index-CZugj-Bx.js"), true ? __vite__mapDeps([27,1,2,3,4,5,11,12]) : void 0),
  meta: {
    name: "signIn",
    title: "nav.signIn",
    hidden: true
  }
};
const constantRoutes = [dashboard, user];
const dynamicRoutes = [attendance, department, employee, role, permission];
const resultRoutes = [
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => __vitePreload(() => import("./404-BlBbUYPt.js"), true ? __vite__mapDeps([28,2,3,1,4,12]) : void 0),
    meta: {
      title: "nav.error.404",
      hidden: true
    }
  }
];
const isRoutesGenerated = ref(false);
const useRouter = () => {
  const setIsRoutesGenerated2 = (value) => {
    isRoutesGenerated.value = value;
  };
  const getIsRoutesGenerated = () => {
    return isRoutesGenerated.value;
  };
  const resetRoutes2 = () => {
    const routes = router.getRoutes();
    routes.forEach((route) => {
      if (route.name) {
        router.removeRoute(route.name);
      }
    });
    constantRoutes.forEach((route) => {
      router.addRoute(route);
    });
    isRoutesGenerated.value = false;
  };
  const addResultRoute2 = () => {
    resultRoutes.forEach((route) => {
      if (!router.hasRoute(route.name)) {
        router.addRoute(route);
      }
    });
  };
  const generateRoutesByRules = (rules) => {
    return dynamicRoutes.filter((route) => rules.includes(route.name));
  };
  const registerRoutes2 = (rules) => {
    const routes = generateRoutesByRules(rules);
    addRoutes(routes);
    isRoutesGenerated.value = true;
  };
  const getRoutes = () => {
    return router.getRoutes();
  };
  const getRouteByMetaName = (routes, name) => {
    return routes.find((route) => {
      var _a;
      if (((_a = route.meta) == null ? void 0 : _a.name) === name) {
        return route;
      }
      if (route.children) {
        return getRouteByMetaName(route.children, name);
      }
    });
  };
  const addRoute = (route) => {
    router.addRoute(route);
  };
  const addRoutes = (routes) => {
    routes.forEach((route) => {
      if (!router.hasRoute(route.name)) {
        router.addRoute(route);
      }
    });
  };
  const removeRoute = (name) => {
    router.removeRoute(name);
  };
  return {
    resetRoutes: resetRoutes2,
    registerRoutes: registerRoutes2,
    generateRoutesByRules,
    getRoutes,
    addRoute,
    addRoutes,
    removeRoute,
    setIsRoutesGenerated: setIsRoutesGenerated2,
    getIsRoutesGenerated,
    getRouteByMetaName,
    addResultRoute: addResultRoute2
  };
};
const registerPiniaPersistPlugin = async (pinia2) => {
  const { createPersistedState } = await __vitePreload(async () => {
    const { createPersistedState: createPersistedState2 } = await import("./index-CgLzFPKp.js");
    return { createPersistedState: createPersistedState2 };
  }, true ? [] : void 0);
  pinia2.use(
    createPersistedState({
      // 配置全局存储key
      key: (id) => `__admin__ihrm__${id}`,
      storage: localStorage
    })
  );
};
const RequestMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};
var HttpStatus = /* @__PURE__ */ ((HttpStatus2) => {
  HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
  HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
  HttpStatus2[HttpStatus2["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatus2[HttpStatus2["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatus2[HttpStatus2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatus2[HttpStatus2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatus2[HttpStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatus2[HttpStatus2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatus2[HttpStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  return HttpStatus2;
})(HttpStatus || {});
const HTTP_ERROR_MESSAGES = {
  [HttpStatus.BAD_REQUEST]: "请求参数错误",
  [HttpStatus.UNAUTHORIZED]: "登录已过期，请重新登录",
  [HttpStatus.FORBIDDEN]: "没有权限访问",
  [HttpStatus.NOT_FOUND]: "请求的资源不存在",
  [HttpStatus.METHOD_NOT_ALLOWED]: "请求方法不允许",
  [HttpStatus.REQUEST_TIMEOUT]: "请求超时",
  [HttpStatus.INTERNAL_SERVER_ERROR]: "服务器内部错误",
  [HttpStatus.BAD_GATEWAY]: "网关错误",
  [HttpStatus.SERVICE_UNAVAILABLE]: "服务不可用",
  [HttpStatus.GATEWAY_TIMEOUT]: "网关超时"
};
const NETWORK_ERROR_MESSAGE = "网络连接失败，请检查网络";
const DEFAULT_ERROR_MESSAGE = "请求失败";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const clear = () => {
    fns.clear();
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger,
    clear
  };
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance2 = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance2 == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance2 && localProvidedStateMap.has(instance2) && key in localProvidedStateMap.get(instance2))
    return localProvidedStateMap.get(instance2)[key];
  return inject(...args);
};
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnBeforeUnmount(fn, target) {
  const instance2 = getLifeCycleTarget();
  if (instance2)
    onBeforeUnmount(fn, target);
}
function tryOnMounted(fn, sync = true, target) {
  const instance2 = getLifeCycleTarget();
  if (instance2)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance2 = getLifeCycleTarget();
  if (instance2)
    onUnmounted(fn, target);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  events2 = toArray(events2);
  listeners = toArray(listeners);
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  const instance2 = getCurrentInstance();
  if (instance2) {
    onMounted(() => {
      isMounted.value = true;
    }, instance2);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = ref(typeof ssrWidth === "number");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return computed(() => matches.value);
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  const keyComputed = computed(() => toValue(key));
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  watch(keyComputed, () => update(), { flush });
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      if (storage instanceof Storage)
        useEventListener(window2, "storage", update, { passive: true });
      else
        useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v2) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v2 == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v2);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
const CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window2 == null ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      const classesToAdd = /* @__PURE__ */ new Set();
      const classesToRemove = /* @__PURE__ */ new Set();
      let attributeToChange = null;
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v2) => {
          if (current.includes(v2))
            classesToAdd.add(v2);
          else
            classesToRemove.add(v2);
        });
      } else {
        attributeToChange = { key: attribute2, value };
      }
      if (classesToAdd.size === 0 && classesToRemove.size === 0 && attributeToChange === null)
        return;
      let style;
      if (disableTransition) {
        style = window2.document.createElement("style");
        style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
        window2.document.head.appendChild(style);
      }
      for (const c of classesToAdd) {
        el.classList.add(c);
      }
      for (const c of classesToRemove) {
        el.classList.remove(c);
      }
      if (attributeToChange) {
        el.setAttribute(attributeToChange.key, attributeToChange.value);
      }
      if (disableTransition) {
        window2.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v2) {
      store.value = v2;
    }
  });
  return Object.assign(auto, { store, system, state });
}
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = ""
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => mode.system.value);
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v2) {
      const modeVal = v2 ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  });
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*",
  reset: false,
  directory: false
};
function useFileDialog(options = {}) {
  const {
    document: document2 = defaultDocument
  } = options;
  const files = ref(null);
  const { on: onChange, trigger: changeTrigger } = createEventHook();
  const { on: onCancel, trigger: cancelTrigger } = createEventHook();
  let input;
  if (document2) {
    input = document2.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
      changeTrigger(files.value);
    };
    input.oncancel = () => {
      cancelTrigger();
    };
  }
  const reset = () => {
    files.value = null;
    if (input && input.value) {
      input.value = "";
      changeTrigger(null);
    }
  };
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = {
      ...DEFAULT_OPTIONS,
      ...options,
      ...localOptions
    };
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    input.webkitdirectory = _options.directory;
    if (hasOwn(_options, "capture"))
      input.capture = _options.capture;
    if (_options.reset)
      reset();
    input.click();
  };
  return {
    files: readonly(files),
    open,
    reset,
    onCancel,
    onChange
  };
}
function useTitle(newTitle = null, options = {}) {
  var _a, _b, _c;
  const {
    document: document2 = defaultDocument,
    restoreOnUnmount = (t) => t
  } = options;
  const originalTitle = (_a = document2 == null ? void 0 : document2.title) != null ? _a : "";
  const title = toRef((_b = newTitle != null ? newTitle : document2 == null ? void 0 : document2.title) != null ? _b : null);
  const isReadonly2 = newTitle && typeof newTitle === "function";
  function format2(t) {
    if (!("titleTemplate" in options))
      return t;
    const template = options.titleTemplate || "%s";
    return typeof template === "function" ? template(t) : toValue(template).replace(/%s/g, t);
  }
  watch(
    title,
    (t, o) => {
      if (t !== o && document2)
        document2.title = format2(typeof t === "string" ? t : "");
    },
    { immediate: true }
  );
  if (options.observe && !options.titleTemplate && document2 && !isReadonly2) {
    useMutationObserver(
      (_c = document2.head) == null ? void 0 : _c.querySelector("title"),
      () => {
        if (document2 && document2.title !== title.value)
          title.value = format2(document2.title);
      },
      { childList: true }
    );
  }
  tryOnBeforeUnmount(() => {
    if (restoreOnUnmount) {
      const restoredTitle = restoreOnUnmount(originalTitle, title.value || "");
      if (restoredTitle != null && document2)
        document2.title = restoredTitle;
    }
  });
  return title;
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
const throttledErrorMessage = (ms = 500) => useThrottleFn((error) => {
  api.error(error);
}, ms);
class RequestCancel {
  constructor() {
    // 存储请求取消的map
    __publicField(this, "pendingMap", /* @__PURE__ */ new Map());
    this.pendingMap = /* @__PURE__ */ new Map();
  }
  /**
   * 生成请求唯一标识
   * @param config 请求配置
   * @returns 请求key
   */
  generateRequestKey(config) {
    const { url, method, params, data } = config;
    return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
  }
  /**
   * 添加请求取消
   * @param config 请求配置
   */
  addPending(config) {
    const requestKey = this.generateRequestKey(config);
    if (!this.pendingMap.has(requestKey)) {
      const controller = new AbortController();
      this.pendingMap.set(requestKey, controller);
    }
  }
  /**
   * 移除请求取消
   * @param config 请求配置
   */
  removePending(config) {
    const requestKey = this.generateRequestKey(config);
    if (this.pendingMap.has(requestKey)) {
      this.pendingMap.delete(requestKey);
    }
  }
  /**
   * 清除所有请求取消
   */
  clearPending() {
    this.pendingMap.forEach((controller) => {
      controller.abort();
    });
    this.pendingMap.clear();
  }
}
const requestCancel = new RequestCancel();
const throttled = throttledErrorMessage();
const setRequestInterceptor = (instance2) => {
  instance2.interceptors.request.use(
    (config) => handleRequestFulfilled(config),
    (error) => handleRequestRejected(error)
  );
};
const setResponseInterceptor = (instance2) => {
  instance2.interceptors.response.use(
    (response) => handleResponseFulfilled(response),
    (error) => handleResponseRejected(error)
  );
};
const handleRequestFulfilled = (config) => {
  const userStore = useUserStore();
  const token = userStore.token;
  requestCancel.addPending(config);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
const handleRequestRejected = (error) => {
  return Promise.reject(error);
};
const handleResponseFulfilled = (response) => {
  requestCancel.removePending(response.config);
  if (response.headers["content-type"].includes("application/json")) {
    return response.data;
  } else {
    return response;
  }
};
const handleResponseRejected = (error) => {
  const userStore = useUserStore();
  if (error.response) {
    const { status } = error.response;
    const errorMessage = HTTP_ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE;
    throttled(errorMessage);
    if (status === HttpStatus.UNAUTHORIZED) {
      userStore.logout();
    }
  } else if (error.request) {
    throttled(NETWORK_ERROR_MESSAGE);
  } else {
    throttled(DEFAULT_ERROR_MESSAGE);
  }
  return Promise.reject(error);
};
const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 2e4,
  headers: {
    "Content-Type": "application/json",
    responseType: "blob"
  }
});
setRequestInterceptor(axiosInstance);
setResponseInterceptor(axiosInstance);
class AxiosAdapter {
  // 私有属性，存储axios实例
  constructor(axiosInstance2) {
    __publicField(this, "axios");
    this.axios = axiosInstance2;
  }
  async request(config) {
    try {
      const response = await this.axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
class Request {
  // 私有属性，存储请求适配器实例
  constructor(adapter) {
    __publicField(this, "adapter");
    if ("request" in adapter) {
      this.adapter = adapter;
    } else {
      this.adapter = new AxiosAdapter(adapter);
    }
  }
  // 通用请求方法，接收URL和配置，返回响应
  async request(url, config) {
    return this.adapter.request({ url, ...config });
  }
  // GET请求方法，接收URL和配置，返回响应
  async get(url, config = {}) {
    return this.request(url, { ...config, method: RequestMethods.GET });
  }
  // POST请求方法，接收URL和配置，返回响应
  async post(url, config = {}) {
    return this.request(url, { ...config, method: RequestMethods.POST });
  }
  // PUT请求方法，接收URL和配置，返回响应
  async put(url, config = {}) {
    return this.request(url, { ...config, method: RequestMethods.PUT });
  }
  // DELETE请求方法，接收URL和配置，返回响应
  async delete(url, config = {}) {
    return this.request(url, { ...config, method: RequestMethods.DELETE });
  }
}
const instance = new Request(axiosInstance);
class UserService {
  static async getUserInfoByToken() {
    return instance.get("/sys/profile");
  }
}
__publicField(UserService, "login", (data) => {
  return instance.post("/sys/login", {
    data
  });
});
__publicField(UserService, "updatePassword", (data) => {
  return instance.put("/sys/user/updatePass", {
    data
  });
});
__publicField(UserService, "updateAvatar", (data) => {
  return instance.put("/sys/updateStaffPhoto", {
    data
  });
});
__publicField(UserService, "getQRCodeKey", () => {
  return instance.get("/sys/qrcodeKey");
});
__publicField(UserService, "getQRCodeStatus", (qrcodeKey) => {
  return instance.get("/sys/qrcodeState", {
    params: {
      qrcode_key: qrcodeKey
    }
  });
});
__publicField(UserService, "getUserNotification", () => {
  return instance.get("/sys/message");
});
__publicField(UserService, "deleteUserNotification", (id) => {
  return instance.delete("/sys/message/" + id);
});
__publicField(UserService, "markUserNotificationAsRead", (id) => {
  return instance.put("/sys/message/" + id);
});
function useRequest(requestFn, options = {}) {
  const { manual = false, onSuccess, onError, onFinally } = options;
  const data = ref();
  const loading = ref(false);
  const error = ref(null);
  const run = async (...args) => {
    loading.value = true;
    error.value = null;
    try {
      const res = await requestFn(...args);
      data.value = res;
      if (res.success !== void 0) {
        if (!res.success) {
          throw new Error(res.message);
        }
      }
      onSuccess == null ? void 0 : onSuccess(res);
      return res;
    } catch (err) {
      error.value = err;
      onError == null ? void 0 : onError(err);
      throw err;
    } finally {
      loading.value = false;
      onFinally == null ? void 0 : onFinally();
    }
  };
  if (!manual) {
    run();
  }
  return {
    data,
    loading,
    error,
    run
  };
}
const { resetRoutes, setIsRoutesGenerated } = useRouter();
const createUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const userInfo = ref(null);
    const { run: login, loading: loginLoading } = useRequest(UserService.login, {
      manual: true,
      onSuccess: (res) => {
        token.value = res.data;
        api.success(i18n.global.t("user.signIn.messages.loginSuccess"));
        router.push("/");
      },
      onError: (error) => {
        api.error(error.message || i18n.global.t("user.signIn.messages.loginError"));
      }
    });
    const { run: getUserInfo, loading: getUserInfoLoading } = useRequest(
      UserService.getUserInfoByToken,
      {
        manual: true,
        onSuccess: (res) => {
          userInfo.value = res.data;
        },
        onError: (error) => {
          console.log("getUserInfo error:", error);
        }
      }
    );
    const logout = () => {
      token.value = "";
      userInfo.value = null;
      resetRoutes();
      router.push("/sign-in");
    };
    return {
      token,
      userInfo,
      login,
      loginLoading,
      logout,
      getUserInfo,
      getUserInfoLoading
    };
  },
  {
    persist: true
  }
);
const useUserStore = () => {
  return createUserStore(pinia);
};
const locale$2 = {
  locale: "zh_CN",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "确定",
  timeSelect: "选择时间",
  dateSelect: "选择日期",
  weekSelect: "选择周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上个月 (翻页上键)",
  nextMonth: "下个月 (翻页下键)",
  monthSelect: "选择月份",
  yearSelect: "选择年份",
  decadeSelect: "选择年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
  previousYear: "上一年 (Control键加左方向键)",
  nextYear: "下一年 (Control键加右方向键)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世纪",
  nextCentury: "下一世纪"
};
const locale$1 = {
  placeholder: "请选择时间",
  rangePlaceholder: ["开始时间", "结束时间"]
};
const locale = {
  lang: _extends({
    placeholder: "请选择日期",
    yearPlaceholder: "请选择年份",
    quarterPlaceholder: "请选择季度",
    monthPlaceholder: "请选择月份",
    weekPlaceholder: "请选择周",
    rangePlaceholder: ["开始日期", "结束日期"],
    rangeYearPlaceholder: ["开始年份", "结束年份"],
    rangeMonthPlaceholder: ["开始月份", "结束月份"],
    rangeQuarterPlaceholder: ["开始季度", "结束季度"],
    rangeWeekPlaceholder: ["开始周", "结束周"]
  }, locale$2),
  timePickerLocale: _extends({}, locale$1)
};
locale.lang.ok = "确定";
const typeTemplate = "${label}不是一个有效的${type}";
const localeValues = {
  locale: "zh-cn",
  Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  // locales for all components
  global: {
    placeholder: "请选择"
  },
  Table: {
    filterTitle: "筛选",
    filterConfirm: "确定",
    filterReset: "重置",
    filterEmptyText: "无筛选项",
    filterCheckall: "全选",
    filterSearchPlaceholder: "在筛选项中搜索",
    selectAll: "全选当页",
    selectInvert: "反选当页",
    selectNone: "清空所有",
    selectionAll: "全选所有",
    sortTitle: "排序",
    expand: "展开行",
    collapse: "关闭行",
    triggerDesc: "点击降序",
    triggerAsc: "点击升序",
    cancelSort: "取消排序"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "结束导览"
  },
  Modal: {
    okText: "确定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Popconfirm: {
    cancelText: "取消",
    okText: "确定"
  },
  Transfer: {
    searchPlaceholder: "请输入搜索内容",
    itemUnit: "项",
    itemsUnit: "项",
    remove: "删除",
    selectCurrent: "全选当页",
    removeCurrent: "删除当页",
    selectAll: "全选所有",
    removeAll: "删除全部",
    selectInvert: "反选当页"
  },
  Upload: {
    uploading: "文件上传中",
    removeFile: "删除文件",
    uploadError: "上传错误",
    previewFile: "预览文件",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "暂无数据"
  },
  Icon: {
    icon: "图标"
  },
  Text: {
    edit: "编辑",
    copy: "复制",
    copied: "复制成功",
    expand: "展开"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    optional: "（可选）",
    defaultValidateMessages: {
      default: "字段验证错误${label}",
      required: "请输入${label}",
      enum: "${label}必须是其中一个[${enum}]",
      whitespace: "${label}不能为空字符",
      date: {
        format: "${label}日期格式无效",
        parse: "${label}不能转换为日期",
        invalid: "${label}是一个无效日期"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label}须为${len}个字符",
        min: "${label}最少${min}个字符",
        max: "${label}最多${max}个字符",
        range: "${label}须在${min}-${max}字符之间"
      },
      number: {
        len: "${label}必须等于${len}",
        min: "${label}最小值为${min}",
        max: "${label}最大值为${max}",
        range: "${label}须在${min}-${max}之间"
      },
      array: {
        len: "须为${len}个${label}",
        min: "最少${min}个${label}",
        max: "最多${max}个${label}",
        range: "${label}数量须在${min}-${max}之间"
      },
      pattern: {
        mismatch: "${label}与模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "预览"
  },
  QRCode: {
    expired: "二维码已过期",
    refresh: "点击刷新",
    scanned: "已扫描"
  }
};
const LOCALE_MESSAGES = {
  "zh-CN": {
    name: "简体中文",
    antd: localeValues
  },
  en: {
    name: "English",
    antd: localeValues$1
  }
};
const DEFAULT_LOCALE = "zh-CN";
const LOCALE_STORAGE_KEY = "locale";
const createLocaleStore = defineStore(
  "locale",
  () => {
    const currentLocale = ref(DEFAULT_LOCALE);
    const localeConfig = computed(() => LOCALE_MESSAGES[currentLocale.value]);
    const antdLocale = computed(() => localeConfig.value.antd);
    const localeOptions = computed(
      () => SUPPORT_LOCALES.map((locale2) => ({
        label: LOCALE_MESSAGES[locale2].name,
        value: locale2
      }))
    );
    const setLocale = (locale2) => {
      if (!SUPPORT_LOCALES.includes(locale2)) {
        console.warn(`Locale ${locale2} is not supported`);
        return;
      }
      currentLocale.value = locale2;
      i18n.global.locale.value = locale2;
      localStorage.setItem(LOCALE_STORAGE_KEY, locale2);
      document.documentElement.setAttribute("lang", locale2);
    };
    const initLocale = () => {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
      const browserLocale = navigator.language;
      const locale2 = SUPPORT_LOCALES.includes(savedLocale) ? savedLocale : SUPPORT_LOCALES.includes(browserLocale) ? browserLocale : DEFAULT_LOCALE;
      setLocale(locale2);
    };
    return {
      currentLocale,
      antdLocale,
      setLocale,
      initLocale,
      localeOptions
    };
  },
  {
    persist: {
      key: LOCALE_STORAGE_KEY,
      pick: ["currentLocale"]
    }
  }
);
const useLocaleStore = () => {
  return createLocaleStore(pinia);
};
let pinia;
const setupStore = async (app) => {
  pinia = createPinia();
  await registerPiniaPersistPlugin(pinia);
  app.use(pinia);
  return pinia;
};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
var nprogress = nprogress$1.exports;
var hasRequiredNprogress;
function requireNprogress() {
  if (hasRequiredNprogress) return nprogress$1.exports;
  hasRequiredNprogress = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(nprogress, function() {
      var NProgress2 = {};
      NProgress2.version = "0.2.0";
      var Settings = NProgress2.settings = {
        minimum: 0.08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      };
      NProgress2.configure = function(options) {
        var key, value;
        for (key in options) {
          value = options[key];
          if (value !== void 0 && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
      };
      NProgress2.status = null;
      NProgress2.set = function(n) {
        var started = NProgress2.isStarted();
        n = clamp(n, Settings.minimum, 1);
        NProgress2.status = n === 1 ? null : n;
        var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
        progress.offsetWidth;
        queue(function(next) {
          if (Settings.positionUsing === "") Settings.positionUsing = NProgress2.getPositioningCSS();
          css(bar, barPositionCSS(n, speed, ease));
          if (n === 1) {
            css(progress, {
              transition: "none",
              opacity: 1
            });
            progress.offsetWidth;
            setTimeout(function() {
              css(progress, {
                transition: "all " + speed + "ms linear",
                opacity: 0
              });
              setTimeout(function() {
                NProgress2.remove();
                next();
              }, speed);
            }, speed);
          } else {
            setTimeout(next, speed);
          }
        });
        return this;
      };
      NProgress2.isStarted = function() {
        return typeof NProgress2.status === "number";
      };
      NProgress2.start = function() {
        if (!NProgress2.status) NProgress2.set(0);
        var work = function() {
          setTimeout(function() {
            if (!NProgress2.status) return;
            NProgress2.trickle();
            work();
          }, Settings.trickleSpeed);
        };
        if (Settings.trickle) work();
        return this;
      };
      NProgress2.done = function(force) {
        if (!force && !NProgress2.status) return this;
        return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
      };
      NProgress2.inc = function(amount) {
        var n = NProgress2.status;
        if (!n) {
          return NProgress2.start();
        } else {
          if (typeof amount !== "number") {
            amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
          }
          n = clamp(n + amount, 0, 0.994);
          return NProgress2.set(n);
        }
      };
      NProgress2.trickle = function() {
        return NProgress2.inc(Math.random() * Settings.trickleRate);
      };
      (function() {
        var initial = 0, current = 0;
        NProgress2.promise = function($promise) {
          if (!$promise || $promise.state() === "resolved") {
            return this;
          }
          if (current === 0) {
            NProgress2.start();
          }
          initial++;
          current++;
          $promise.always(function() {
            current--;
            if (current === 0) {
              initial = 0;
              NProgress2.done();
            } else {
              NProgress2.set((initial - current) / initial);
            }
          });
          return this;
        };
      })();
      NProgress2.render = function(fromStart) {
        if (NProgress2.isRendered()) return document.getElementById("nprogress");
        addClass(document.documentElement, "nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
        css(bar, {
          transition: "all 0 linear",
          transform: "translate3d(" + perc + "%,0,0)"
        });
        if (!Settings.showSpinner) {
          spinner = progress.querySelector(Settings.spinnerSelector);
          spinner && removeElement(spinner);
        }
        if (parent != document.body) {
          addClass(parent, "nprogress-custom-parent");
        }
        parent.appendChild(progress);
        return progress;
      };
      NProgress2.remove = function() {
        removeClass(document.documentElement, "nprogress-busy");
        removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress && removeElement(progress);
      };
      NProgress2.isRendered = function() {
        return !!document.getElementById("nprogress");
      };
      NProgress2.getPositioningCSS = function() {
        var bodyStyle = document.body.style;
        var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (vendorPrefix + "Perspective" in bodyStyle) {
          return "translate3d";
        } else if (vendorPrefix + "Transform" in bodyStyle) {
          return "translate";
        } else {
          return "margin";
        }
      };
      function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
      }
      function toBarPerc(n) {
        return (-1 + n) * 100;
      }
      function barPositionCSS(n, speed, ease) {
        var barCSS;
        if (Settings.positionUsing === "translate3d") {
          barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
        } else if (Settings.positionUsing === "translate") {
          barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
        } else {
          barCSS = { "margin-left": toBarPerc(n) + "%" };
        }
        barCSS.transition = "all " + speed + "ms " + ease;
        return barCSS;
      }
      var queue = /* @__PURE__ */ function() {
        var pending = [];
        function next() {
          var fn = pending.shift();
          if (fn) {
            fn(next);
          }
        }
        return function(fn) {
          pending.push(fn);
          if (pending.length == 1) next();
        };
      }();
      var css = /* @__PURE__ */ function() {
        var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
        function camelCase(string) {
          return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
            return letter.toUpperCase();
          });
        }
        function getVendorProp(name) {
          var style = document.body.style;
          if (name in style) return name;
          var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
          while (i--) {
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style) return vendorName;
          }
          return name;
        }
        function getStyleProp(name) {
          name = camelCase(name);
          return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }
        function applyCss(element, prop, value) {
          prop = getStyleProp(prop);
          element.style[prop] = value;
        }
        return function(element, properties) {
          var args = arguments, prop, value;
          if (args.length == 2) {
            for (prop in properties) {
              value = properties[prop];
              if (value !== void 0 && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
            }
          } else {
            applyCss(element, args[1], args[2]);
          }
        };
      }();
      function hasClass(element, name) {
        var list = typeof element == "string" ? element : classList(element);
        return list.indexOf(" " + name + " ") >= 0;
      }
      function addClass(element, name) {
        var oldList = classList(element), newList = oldList + name;
        if (hasClass(oldList, name)) return;
        element.className = newList.substring(1);
      }
      function removeClass(element, name) {
        var oldList = classList(element), newList;
        if (!hasClass(element, name)) return;
        newList = oldList.replace(" " + name + " ", " ");
        element.className = newList.substring(1, newList.length - 1);
      }
      function classList(element) {
        return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
      }
      function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      return NProgress2;
    });
  })(nprogress$1);
  return nprogress$1.exports;
}
var nprogressExports = requireNprogress();
const NProgress = /* @__PURE__ */ getDefaultExportFromCjs(nprogressExports);
const whiteList = ["/sign-in"];
const { registerRoutes, addResultRoute } = useRouter();
const pageTitle = useTitle();
useRoute();
const registerGlobalRouteGuard = async (router2) => {
  router2.beforeEach(async (to, from, next) => {
    NProgress.start();
    requestCancel.clearPending();
    const userStore = useUserStore();
    const { getIsRoutesGenerated } = useRouter();
    if (!userStore.token) {
      await withSetPageTitle(to.meta.title)(handleUnauthenticated(to, next));
      return;
    }
    if (to.path === "/sign-in") {
      await withSetPageTitle(to.meta.title)(() => next({ path: "/dashboard" }));
      return;
    }
    if (!getIsRoutesGenerated()) {
      await withSetPageTitle(to.meta.title)(() => handleRouteRegistration(userStore, next, to));
      return;
    }
    setPageTitle(to.meta.title);
    next();
  });
  router2.afterEach(() => {
    NProgress.done();
  });
};
const withSetPageTitle = (name) => (func) => {
  setPageTitle(name);
  return func ? func() : null;
};
const setPageTitle = (name) => {
  if (!name) return;
  const title = name.split(".").pop();
  const t = i18n.global.t;
  const prefix = t("common.title.prefix");
  pageTitle.value = `${t(`common.title.${title}`)} | ${prefix}`;
};
const handleUnauthenticated = (to, next) => {
  if (whiteList.includes(to.path)) {
    next();
  } else {
    next({ path: "/sign-in", query: { redirect: to.fullPath } });
  }
};
const handleRouteRegistration = async (userStore, next, to) => {
  try {
    if (!userStore.userInfo) {
      const {
        data: {
          roles: { menus }
        }
      } = await userStore.getUserInfo();
      registerRoutes(menus);
    } else {
      registerRoutes(userStore.userInfo.roles.menus);
    }
    addResultRoute();
    next({ ...to, replace: true });
  } catch (error) {
    next("/sign-in");
  }
};
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});
const setupRouter = async (app) => {
  await registerGlobalRouteGuard(router);
  app.use(router);
};
var $ = Object.defineProperty;
var k = (e, a, t) => a in e ? $(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t;
var T = (e, a, t) => (k(e, typeof a != "symbol" ? a + "" : a, t), t);
var Z = false;
function O(e, a) {
  const t = {};
  Object.keys(a.attrs).forEach((n) => {
    if (n.indexOf("on") === 0) {
      const i = B(n.slice(2));
      t[i] = (...r) => a.emit(i, ...r);
    }
  }), Object.keys(t).forEach((n) => {
    e.on(n, t[n]);
  }), onUnmounted(() => {
    Object.keys(t).forEach((n) => {
      e.off(n, t[n]);
    });
  });
}
function B(e) {
  return !e || e.length === 0 ? e : e.charAt(0).toLowerCase() + e.slice(1);
}
const y = "Tlbs", L = {
  // 腾讯位置服务开发Key
  apiKey: {
    type: String,
    default: ""
  },
  // 地图附加库
  libraries: {
    type: String,
    default: "visualization,geometry,vector,tools"
  },
  // 地图中心点经纬度
  center: {
    type: Object,
    default: () => ({ lat: 40.040452, lng: 116.273486 })
  },
  // 地图缩级别
  zoom: {
    type: Number,
    default: 17
  },
  // 地图最小缩放级别
  minZoom: {
    type: Number,
    default: 3
  },
  // 地图最大缩放级别
  maxZoom: {
    type: Number,
    default: 20
  },
  // 地图控件配置
  control: {
    type: Object,
    default: () => ({ zoom: true, scale: true, rotation: true })
  },
  // 除了上述属性其他初始化属性
  options: {
    type: Object,
    default: () => ({})
  }
};
L.class = {
  type: String,
  default: ""
}, L.style = {
  type: Object,
  default: () => ({})
};
const F = defineComponent({
  name: `${y}Map`,
  inheritAttrs: Z,
  props: L,
  setup(e, a) {
    const t = ref(null), n = ref(null);
    let i;
    return onMounted(async () => {
      e.apiKey && await H(e.apiKey, e.libraries), t.value && (i = new TMap.Map(t.value, {
        ...e.options,
        center: new TMap.LatLng(e.center.lat, e.center.lng),
        zoom: e.zoom,
        minZoom: e.minZoom,
        maxZoom: e.maxZoom
      }), n.value = i, O(i, a), Object.keys(e.control).forEach((r) => {
        let u;
        switch (r) {
          case "rotation":
            u = TMap.constants.DEFAULT_CONTROL_ID.ROTATION;
            break;
          case "scale":
            u = TMap.constants.DEFAULT_CONTROL_ID.SCALE;
            break;
          case "zoom":
            u = TMap.constants.DEFAULT_CONTROL_ID.ZOOM;
            break;
        }
        if (!e.control[r]) {
          i.removeControl(u);
          return;
        }
        if (typeof e.control[r] == "object") {
          const o = i.getControl(u), { position: p, className: s, numVisible: g } = e.control[r], h2 = {
            topLeft: TMap.constants.CONTROL_POSITION.TOP_LEFT,
            topCenter: TMap.constants.CONTROL_POSITION.TOP_CENTER,
            topRight: TMap.constants.CONTROL_POSITION.TOP_RIGHT,
            centerLeft: TMap.constants.CONTROL_POSITION.CENTER_LEFT,
            center: TMap.constants.CONTROL_POSITION.CENTER,
            centerRight: TMap.constants.CONTROL_POSITION.CENTER_RIGHT,
            bottomLeft: TMap.constants.CONTROL_POSITION.BOTTOM_LEFT,
            bottomCenter: TMap.constants.CONTROL_POSITION.BOTTOM_CENTER,
            bottomRight: TMap.constants.CONTROL_POSITION.BOTTOM_RIGHT
          };
          h2[p] && o.setPosition(h2[p]), s && o.setClassName(s), g && o.setNumVisible(g);
        }
      }));
    }), onUnmounted(() => {
      i && i.destroy();
    }), watch(
      () => e.center,
      (r) => {
        i && i.setCenter(r);
      }
    ), watch(
      () => e.zoom,
      (r) => {
        i && i.setZoom(r);
      }
    ), provide("map", n), {
      map: n,
      ele: t
    };
  },
  render() {
    const e = {
      ref: "ele",
      // @ts-ignore
      class: this.class,
      // @ts-ignore
      style: this.style
    };
    return h(
      "div",
      e,
      // eslint-disable-next-line no-nested-ternary
      // @ts-ignore
      this.$slots.default && this.map ? this.$slots.default() : []
    );
  }
}), j = [];
let M;
function H(e, a) {
  return new Promise((t) => {
    if (window.TMap) {
      t();
      return;
    }
    if (j.push(t), window.initGLMap || (window.initGLMap = () => {
      j.forEach((n) => {
        n();
      });
    }), !M) {
      M = document.createElement("script");
      const n = a ? `https://map.qq.com/api/gljs?v=1.exp&key=${e}&libraries=${a}&callback=initGLMap` : `https://map.qq.com/api/gljs?v=1.exp&key=${e}&callback=initGLMap`;
      M.type = "text/javascript", M.src = n, document.body.appendChild(M);
    }
  });
}
function b(e) {
  return e.map((a) => ({
    ...a,
    position: new TMap.LatLng(a.position.lat, a.position.lng)
  }));
}
const W = defineComponent({
  name: `${y}MultiMarker`,
  props: {
    // 图层id
    id: {
      type: String,
      default: "multiMarker"
    },
    // 点标注的相关样式
    styles: {
      type: Object,
      required: true
    },
    // 点标注数据数组
    geometries: {
      type: Array,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MultiMarker({
      ...e.options,
      id: e.id,
      map: toRaw(t.value),
      styles: A(e.styles),
      geometries: b(e.geometries)
    });
    return O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.styles,
      (i) => {
        n.setStyles(A(i));
      }
    ), watch(
      () => e.geometries,
      (i) => {
        n.setGeometries(b(i));
      }
    ), {
      marker: n
    };
  },
  render() {
    return null;
  }
});
function A(e) {
  const a = {};
  return Object.keys(e).forEach((t) => {
    a[t] = new TMap.MarkerStyle(e[t]);
  }), a;
}
const U = defineComponent({
  name: `${y}MarkerCluster`,
  props: {
    id: {
      type: String,
      default: "markerCluster"
    },
    geometries: {
      type: Array,
      required: true
    },
    gridSize: {
      type: Number,
      default: 60
    },
    maxZoom: {
      type: Number,
      default: 13
    },
    minimumClusterSize: {
      type: Number,
      default: 2
    },
    zoomOnClick: {
      type: Boolean,
      default: true
    },
    averageCenter: {
      type: Boolean,
      default: false
    },
    enableDefaultStyle: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["clusterchange"],
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MarkerCluster({
      ...e.options,
      id: e.id,
      // 图层id
      map: toRaw(t.value),
      // 设置点聚合显示在哪个map对象中（创建map的段落省略）
      enableDefaultStyle: e.enableDefaultStyle,
      // 使用默认样式
      minimumClusterSize: e.minimumClusterSize,
      // 最小聚合点数：2个
      geometries: b(e.geometries),
      zoomOnClick: e.zoomOnClick,
      // 点击聚合数字放大展开
      gridSize: e.gridSize,
      // 聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，默认为60，以像素为单位
      averageCenter: e.averageCenter,
      // 每个聚和簇的中心是否应该是聚类中所有标记的平均值
      maxZoom: e.maxZoom
      // 采用聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
    });
    let i = [], r = [];
    return n.on("cluster_changed", () => {
      i = [], r = [];
      const u = n.getClusters();
      let o = [];
      u.forEach((s) => {
        s.geometries.length > 1 && o.indexOf(s.geometries.length) === -1 && o.push(s.geometries.length);
      }), o = o.sort((s, g) => s - g);
      const p = t.value.getZoom();
      u.forEach((s) => {
        const g = s.geometries.length;
        if (p >= e.maxZoom)
          r.push({
            center: s.center,
            data: s
          });
        else if (s.geometries.length > 1) {
          const h2 = o.indexOf(g), I = `${30 + h2 * 0.5 + String(g).length * 8}px`;
          i.push({
            center: s.center,
            width: I,
            height: I,
            "line-height": I,
            content: g,
            sort: h2,
            data: s
          });
        } else
          r.push({
            center: s.center,
            data: s
          });
      }), a.emit("clusterchange", r, i);
    }), O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.geometries,
      (u) => {
        n.setGeometries(b(u));
      }
    ), {
      aggregationPoints: i,
      scatteredPoints: r,
      markerCluster: n
    };
  },
  render() {
    return null;
  }
}), K = (e) => {
  const a = (t) => Array.isArray(t) ? t.map((n) => a(n)) : new TMap.LatLng(t.lat, t.lng);
  return e.map((t) => a(t));
}, C = (e) => e.map((a) => ({
  ...a,
  paths: K(a.paths)
})), V = defineComponent({
  name: `${y}MultiPolygon`,
  props: {
    // 图层id
    id: {
      type: String,
      default: "multiPolygon"
    },
    // 多边形的相关样式
    styles: {
      type: Object,
      required: true
    },
    // 多边形数据数组
    geometries: {
      type: Array,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MultiPolygon({
      ...e.options,
      id: e.id,
      map: toRaw(t.value),
      styles: S(e.styles),
      geometries: C(e.geometries)
    });
    return O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.styles,
      (i) => {
        n.setStyles(S(i));
      }
    ), watch(
      () => e.geometries,
      (i) => {
        n.setGeometries(C(i));
      }
    ), {
      polygon: n
    };
  },
  render() {
    return null;
  }
});
function S(e) {
  const a = {};
  return Object.keys(e).forEach((t) => {
    a[t] = new TMap.PolygonStyle(e[t]);
  }), a;
}
const E = (e) => {
  const a = (t) => Array.isArray(t) ? t.map((n) => a(n)) : new TMap.LatLng(t.lat, t.lng);
  return e.map((t) => a(t));
}, R = (e) => e.map((a) => a.rainbowPaths ? {
  ...a,
  rainbowPaths: a.rainbowPaths.map((t) => ({
    ...t,
    path: E(t.path)
  }))
} : {
  ...a,
  paths: E(a.paths)
  // 坐标转换
}), X = defineComponent({
  name: `${y}MultiPolyline`,
  props: {
    // 图层id
    id: {
      type: String,
      default: "multiPolyline"
    },
    // 折线的相关样式
    styles: {
      type: Object,
      required: true
    },
    // 折线数据数组
    geometries: {
      type: Array,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MultiPolyline({
      ...e.options,
      id: e.id,
      map: toRaw(t.value),
      styles: P(e.styles),
      geometries: R(e.geometries)
    });
    return O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.styles,
      (i) => {
        n.setStyles(P(i));
      }
    ), watch(
      () => e.geometries,
      (i) => {
        n.setGeometries(R(i));
      }
    ), {
      polyline: n
    };
  },
  render() {
    return null;
  }
});
function P(e) {
  const a = {};
  return Object.keys(e).forEach((t) => {
    a[t] = new TMap.PolylineStyle(e[t]);
  }), a;
}
const Y = defineComponent({
  name: `${y}MultiCircle`,
  props: {
    // 图层id
    id: {
      type: String,
      default: "multiCircle"
    },
    // 圆的相关样式
    styles: {
      type: Object,
      required: true
    },
    // 圆数据数组
    geometries: {
      type: Array,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MultiCircle({
      ...e.options,
      id: e.id,
      map: toRaw(t.value),
      styles: v(e.styles),
      geometries: N(e.geometries)
    });
    return O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.styles,
      (i) => {
        n.setStyles(v(i));
      }
    ), watch(
      () => e.geometries,
      (i) => {
        n.setGeometries(N(i));
      }
    ), {
      circle: n
    };
  },
  render() {
    return null;
  }
});
function v(e) {
  const a = {};
  return Object.keys(e).forEach((t) => {
    a[t] = new TMap.CircleStyle(e[t]);
  }), a;
}
function N(e) {
  return e.map((a) => ({
    ...a,
    center: new TMap.LatLng(a.center.lat, a.center.lng)
  }));
}
const J = defineComponent({
  name: `${y}MultiLabel`,
  props: {
    // 图层id
    id: {
      type: String,
      default: "multiLabel"
    },
    // 文本标注的相关样式
    styles: {
      type: Object,
      required: true
    },
    // 文本标注数据数组
    geometries: {
      type: Array,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.MultiLabel({
      ...e.options,
      id: e.id,
      map: toRaw(t.value),
      styles: q(e.styles),
      geometries: D(e.geometries)
    });
    return O(n, a), onUnmounted(() => {
      n.setMap(null);
    }), watch(
      () => e.styles,
      (i) => {
        n.setStyles(q(i));
      }
    ), watch(
      () => e.geometries,
      (i) => {
        n.setGeometries(D(i));
      }
    ), {
      label: n
    };
  },
  render() {
    return null;
  }
});
function q(e) {
  const a = {};
  return Object.keys(e).forEach((t) => {
    a[t] = new TMap.LabelStyle(e[t]);
  }), a;
}
function D(e) {
  return e.map((a) => ({
    ...a,
    position: new TMap.LatLng(a.position.lat, a.position.lng)
  }));
}
const Q = defineComponent({
  name: `${y}DomOverlay`,
  props: {
    // DOM覆盖物经纬度位置
    position: {
      type: Object,
      required: true
    },
    // DOM覆盖物相对中心点偏移量
    offset: {
      type: Object,
      required: false,
      default: () => ({ x: 0, y: 0 })
    },
    // 额外参数支持事件是否冒泡
    options: {
      type: Object,
      default: () => ({
        enableBubble: true
      })
    },
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    }
  },
  setup(e) {
    const a = inject("map");
    if (!a)
      return;
    const t = ref(null);
    class n extends TMap.DOMOverlay {
      constructor(o) {
        super(o);
        T(this, "map");
        T(this, "position", null);
        T(this, "offset", null);
        this.map = o.map, this.onInit(o);
      }
      // 初始化DOMOverlay
      onInit(o) {
        this.position = o.position, this.offset = o.offset, this.dom = o.dom, this.dom.style.position = "absolute";
      }
      // 创建DOM
      createDOM() {
        return this.dom;
      }
      // 缩放地图或者移动地图触发
      updateDOM() {
        nextTick(() => {
          if (this.map && this.position && this.offset) {
            const o = this.map.projectToContainer(new TMap.LatLng(this.position.lat, this.position.lng)), p = e.width || this.dom.clientWidth, s = e.height || this.dom.clientHeight, g = `${o.getX() - p / 2 + this.offset.x}px`, h2 = `${o.getY() - s / 2 + this.offset.y}px`;
            this.dom.style.left = g, this.dom.style.top = h2;
          }
        });
      }
      // 更新DOM位置
      updatePosition() {
        i.position = e.position, i.offset = e.offset, this.updateDOM();
      }
      // 销毁DOMOverlay实例
      onDestroy() {
        this.setMap(null);
      }
    }
    let i;
    return onMounted(() => {
      t.value && (i = new n({
        ...e.options,
        position: e.position,
        offset: e.offset,
        map: toRaw(a.value),
        dom: t.value
      }), e.options.enableBubble || (t.value.addEventListener("click", (r) => r.stopPropagation()), t.value.addEventListener("dblclick", (r) => r.stopPropagation()), t.value.addEventListener("mousemove", (r) => r.stopPropagation())));
    }), onUnmounted(() => {
      i.onDestroy();
    }), watch(() => [e.position, e.offset], () => {
      i.updatePosition();
    }), {
      dom: t
    };
  },
  render() {
    return h(
      "div",
      { ref: "dom" },
      this.$slots.default ? this.$slots.default() : []
    );
  }
}), ee = defineComponent({
  name: `${y}Heat`,
  props: {
    // 热力数据
    data: {
      type: Array,
      required: true
    },
    // 最大辐射半径
    radius: {
      type: Number,
      default: 50
    },
    // 峰值高度
    height: {
      type: Number,
      default: 100
    },
    // 全局透明度
    opacity: {
      type: Number,
      default: 0.8
    },
    // 热力最弱阈值
    min: {
      type: Number,
      default: 0
    },
    // 热力最强阈值
    max: {
      type: Number,
      required: false
    },
    // 渐变颜色
    gradientColor: {
      type: Object,
      required: false
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const a = inject("map");
    if (!a)
      return;
    const t = new TMap.visualization.Heat({
      ...e.options,
      radius: e.radius,
      height: e.height,
      opacity: e.opacity,
      min: e.min,
      max: e.max
    });
    return t.addTo(toRaw(a.value)), e.gradientColor && t.setGradientColor(new TMap.GradientColor(e.gradientColor)), e.max && t.setMax(e.max), t.setData(e.data), onUnmounted(() => {
      t.remove(), t.destroy();
    }), watch(() => e.gradientColor, (n) => {
      n && t.setGradientColor(new TMap.GradientColor(n));
    }), watch(() => e.data, (n) => {
      t.setData(n);
    }), watch(() => e.radius, (n) => {
      t.setRadius(n);
    }), watch(() => e.height, (n) => {
      t.setHeight(n);
    }), watch(() => e.opacity, (n) => {
      t.setOpacity(n);
    }), watch(() => e.min, (n) => {
      t.setMin(n);
    }), watch(() => e.max, (n) => {
      n && t.setMax(n);
    }), {
      heat: t
    };
  },
  render() {
    return null;
  }
}), te = {
  circleId: {
    type: String,
    default: "circle"
  },
  defaultCircleGeometries: {
    type: Array
  },
  circleStyles: {
    type: Object
  },
  circleDrawingStyleId: {
    type: String,
    default: "default"
  },
  circleSelectedStyleId: {
    type: String,
    default: "default"
  },
  polygonId: {
    type: String,
    default: "polygon"
  },
  defaultPolygonGeometries: {
    type: Array
  },
  polygonStyles: {
    type: Object
  },
  polygonDrawingStyleId: {
    type: String,
    default: "default"
  },
  polygonSelectedStyleId: {
    type: String,
    default: "default"
  },
  activeOverlayId: {
    type: String,
    default: "polygon"
  },
  actionMode: {
    type: String,
    default: "draw"
  },
  snappable: {
    type: Boolean,
    default: false
  },
  selectable: {
    type: Boolean,
    default: true
  },
  options: {
    type: Object,
    default: () => ({})
  }
}, ne = defineComponent({
  name: `${y}GeometryEditor`,
  props: te,
  emits: ["select", "update:activeOverlayId"],
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = toRaw(t.value), i = new TMap.MultiCircle({
      id: e.circleId,
      map: n,
      styles: e.circleStyles ? v(e.circleStyles) : {},
      geometries: e.defaultCircleGeometries ? N(e.defaultCircleGeometries) : []
    }), r = new TMap.MultiPolygon({
      id: e.polygonId,
      map: n,
      styles: e.polygonStyles ? S(e.polygonStyles) : {},
      geometries: e.defaultPolygonGeometries ? C(e.defaultPolygonGeometries) : []
    });
    i.on("click", (o) => {
      e.actionMode !== "draw" && (a.emit("select", o.geometry), a.emit("update:activeOverlayId", e.circleId));
    }), r.on("click", (o) => {
      e.actionMode !== "draw" && (a.emit("select", o.geometry), a.emit("update:activeOverlayId", e.polygonId));
    });
    const u = new TMap.tools.GeometryEditor({
      ...e.options,
      map: n,
      // 编辑器绑定的地图对象
      overlayList: [
        // 可编辑图层
        {
          overlay: r,
          id: e.polygonId,
          selectedStyleId: e.polygonSelectedStyleId,
          drawingStyleId: e.polygonDrawingStyleId
        },
        {
          overlay: i,
          id: e.circleId,
          selectedStyleId: e.circleSelectedStyleId,
          drawingStyleId: e.circleDrawingStyleId
        }
      ],
      actionMode: e.actionMode === "draw" ? TMap.tools.constants.EDITOR_ACTION.DRAW : TMap.tools.constants.EDITOR_ACTION.INTERACT,
      // 编辑器的工作模式
      activeOverlayId: e.activeOverlayId,
      // 激活图层
      selectable: e.selectable,
      // 开启点选功能
      snappable: e.snappable
      // 开启吸附
    });
    return O(u, a), onUnmounted(() => {
      i.setMap(null), r.setMap(null);
      try {
        u.setMap(null);
      } catch (o) {
        console.error(o);
      }
    }), watch(
      () => e.circleStyles,
      (o) => {
        o && i.setStyles(v(o));
      }
    ), watch(
      () => e.polygonStyles,
      (o) => {
        o && r.setStyles(S(o));
      }
    ), watch(() => e.activeOverlayId, (o) => o && u.setActiveOverlay(o)), watch(() => e.actionMode, (o) => o && u.setActionMode(o === "draw" ? TMap.tools.constants.EDITOR_ACTION.DRAW : TMap.tools.constants.EDITOR_ACTION.INTERACT)), {
      circle: i,
      polygon: r,
      editor: u
    };
  },
  render() {
    return null;
  }
}), ae = defineComponent({
  name: `${y}Arc`,
  props: {
    // 弧线数据
    data: {
      type: Array,
      required: true
    },
    // 弧线图样式映射函数，接收ArcLine数据返回对应样式，样式对象规范详见TMap.visualization.ArcStyle
    pickStyle: {
      type: Function,
      require: false
    },
    // 弧线模式，horizontal 代表贴地的弧线，vertical 代表弧线所在平面会垂直于底图平面，默认为vertical。
    mode: {
      type: String,
      default: "vertical"
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const a = inject("map");
    if (!a)
      return;
    const t = new TMap.visualization.Arc({
      ...e.options,
      mode: e.mode
    });
    return t.addTo(toRaw(a.value)), e.pickStyle && t.setPickStyle(e.pickStyle), t.setData(e.data), onUnmounted(() => {
      t.remove(), t.destroy();
    }), watch(() => e.pickStyle, (n) => {
      n && t.setPickStyle(n);
    }), watch(() => e.data, (n) => {
      t.setData(n);
    }), watch(() => e.mode, (n) => {
      t.setMode(n);
    }), {
      arc: t
    };
  },
  render() {
    return null;
  }
}), ie = defineComponent({
  name: `${y}Grid`,
  props: {
    // 网格数据
    data: {
      type: Array,
      required: true
    },
    sideLength: {
      type: Number,
      required: false,
      default: 1e3
    },
    extrudable: {
      type: Boolean,
      required: false,
      default: true
    },
    colorList: {
      type: Array,
      required: false,
      default: () => ["#D8AFA7", "#842610", "#641200"]
    },
    heightRange: {
      type: Array,
      required: false,
      default: () => [1, 100]
    },
    showRange: {
      type: Array,
      required: false,
      default: () => []
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    selectOptions: {
      type: Object,
      required: false,
      default: null
    }
  },
  setup(e) {
    const a = inject("map");
    if (!a)
      return;
    const t = new TMap.visualization.Grid({
      ...e.options,
      sideLength: e.sideLength,
      // 设置网格边长
      extrudable: e.extrudable,
      // 网格是否可拔起
      colorList: e.colorList,
      // 颜色层级
      heightRange: e.heightRange,
      // 高度变化区间
      showRange: e.showRange
      // 聚合数据显示区间
    });
    return t.addTo(toRaw(a.value)), t.setData(e.data), e.selectOptions && t.setSelectOptions(e.selectOptions), onUnmounted(() => {
      t.remove(), t.destroy();
    }), watch(() => e.showRange, (n) => {
      t.setShowRange(n);
    }), watch(() => e.sideLength, (n) => {
      t.setSideLength(n);
    }), watch(() => e.extrudable, (n) => {
      t.setExtrudable(n);
    }), watch(() => e.colorList, (n) => {
      t.setColorList(n);
    }), watch(() => e.heightRange, (n) => {
      t.setHeightRange(n);
    }), watch(() => e.data, (n) => {
      t.setData(n);
    }), watch(() => e.options.zIndex, (n) => {
      n !== void 0 && t.setZIndex(n);
    }), watch(() => e.options.minZoom, (n) => {
      n && t.setMinZoom(n);
    }), watch(() => e.options.maxZoom, (n) => {
      n && t.setMaxZoom(n);
    }), {
      grid: t
    };
  },
  render() {
    return null;
  }
}), le = defineComponent({
  name: `${y}Area`,
  props: {
    // 数据
    data: {
      type: Array,
      required: true
    },
    // 样式
    styles: {
      type: Object,
      required: true
    },
    selectOptions: {
      type: Object,
      required: false,
      default: () => null
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const a = inject("map");
    if (!a)
      return;
    const t = new TMap.visualization.Area({
      ...e.options,
      styles: e.styles
      // 设置网格边长
    });
    return e.selectOptions && t.setSelectOptions(e.selectOptions), t.setData(e.data), t.addTo(toRaw(a.value)), onUnmounted(() => {
      t.remove(), t.destroy();
    }), watch(() => e.styles, (n) => {
      t.setStyles(n);
    }), watch(() => e.data, (n) => {
      t.setData(n);
    }), watch(() => e.selectOptions, (n) => {
      n && t.setSelectOptions(n);
    }), watch(() => e.options.zIndex, (n) => {
      n !== void 0 && t.setZIndex(n);
    }), watch(() => e.options.minZoom, (n) => {
      n && t.setMinZoom(n);
    }), watch(() => e.options.maxZoom, (n) => {
      n && t.setMaxZoom(n);
    }), {
      area: t
    };
  },
  render() {
    return null;
  }
}), oe = defineComponent({
  name: `${y}InfoWindow`,
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    position: {
      type: Object,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    // 其他初始化配置
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, a) {
    const t = inject("map");
    if (!t)
      return;
    const n = new TMap.InfoWindow({
      ...e.options,
      map: toRaw(t.value),
      position: new TMap.LatLng(e.position.lat, e.position.lng),
      content: e.content
    });
    return e.visible ? n.open() : n.close(), O(n, a), onUnmounted(() => {
      n.destroy();
    }), watch(() => e.visible, (i) => {
      i ? n.open() : n.close();
    }), watch(() => e.position, (i) => {
      n.setPosition(new TMap.LatLng(i.lat, i.lng));
    }), watch(() => e.content, (i) => {
      n.setContent(i);
    }), {
      infoWindow: n
    };
  },
  render() {
    return null;
  }
}), re = [
  F,
  W,
  V,
  X,
  Y,
  Q,
  J,
  ee,
  ne,
  U,
  ae,
  ie,
  le,
  oe
], ce = {
  install(e) {
    re.forEach((a) => e.component(a.name, a));
  }
};
const useLocale = () => {
  const localeStore = createLocaleStore();
  const { currentLocale, antdLocale } = storeToRefs(localeStore);
  const changeLocale = (locale2) => {
    localeStore.setLocale(locale2);
  };
  return {
    currentLocale,
    antdLocale,
    changeLocale
  };
};
const { darkAlgorithm, defaultAlgorithm } = theme;
const useTheme = () => {
  const isDark = useDark();
  const themeStatus = computed(() => isDark.value ? "dark" : "light");
  const themeConfig = computed(() => ({
    inherit: false,
    algorithm: isDark.value ? darkAlgorithm : defaultAlgorithm,
    // token:{} // 这里可以自定义token
    // 这里可以自定义组件级别主题配置
    components: {}
  }));
  const toggleTheme = useToggle(isDark);
  return {
    themeConfig,
    toggleTheme,
    isDark,
    themeStatus
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const { themeConfig } = useTheme();
    const { antdLocale } = useLocale();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(unref(ConfigProvider), {
        theme: unref(themeConfig),
        locale: unref(antdLocale)
      }, {
        default: withCtx(() => [
          createVNode(unref(App), { class: "h-full" }, {
            default: withCtx(() => [
              createVNode(_component_RouterView)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme", "locale"]);
    };
  }
});
var zhCn$1 = { exports: {} };
var zhCn = zhCn$1.exports;
var hasRequiredZhCn;
function requireZhCn() {
  if (hasRequiredZhCn) return zhCn$1.exports;
  hasRequiredZhCn = 1;
  (function(module, exports) {
    !function(e, _) {
      module.exports = _(requireDayjs_min());
    }(zhCn, function(e) {
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t = _(e), d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
        return "W" === _2 ? e2 + "周" : e2 + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
      } };
      return t.default.locale(d, null, true), d;
    });
  })(zhCn$1);
  return zhCn$1.exports;
}
requireZhCn();
var isBetween$2 = { exports: {} };
var isBetween$1 = isBetween$2.exports;
var hasRequiredIsBetween;
function requireIsBetween() {
  if (hasRequiredIsBetween) return isBetween$2.exports;
  hasRequiredIsBetween = 1;
  (function(module, exports) {
    !function(e, i) {
      module.exports = i();
    }(isBetween$1, function() {
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  })(isBetween$2);
  return isBetween$2.exports;
}
var isBetweenExports = requireIsBetween();
const isBetween = /* @__PURE__ */ getDefaultExportFromCjs(isBetweenExports);
dayjs.locale("zh-cn");
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
const bootstrap = async () => {
  const app = createApp(_sfc_main);
  await setupStore(app);
  setupI18n(app);
  const localStore = useLocaleStore();
  localStore.initLocale();
  await setupRouter(app);
  app.use(ce);
  app.mount("#app");
};
bootstrap();
export {
  F,
  J,
  UserService as U,
  W,
  Y,
  __vitePreload as _,
  useRequest as a,
  useLocaleStore as b,
  useLocale as c,
  useTheme as d,
  useUserStore as e,
  useRouter as f,
  useDark as g,
  useWindowSize as h,
  instance as i,
  useDebounceFn as j,
  useTimeoutFn as k,
  useResizeObserver as l,
  useFileDialog as m,
  router as r,
  tryOnUnmounted as t,
  useI18n as u
};
