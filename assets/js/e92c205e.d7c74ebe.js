exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 6305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gP": () => (/* binding */ useSSRSafeId)
/* harmony export */ });
/* unused harmony exports SSRProvider, useIsSSR */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);

/**
 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
 * This ensures that auto generated ids are consistent between the client and server.
 */
function SSRProvider(props) {
  let cur = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = useMemo(() => ({
    // If this is the first SSRProvider, set to zero, otherwise increment.
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? 0 : ++cur.prefix,
    current: 0
  }), [cur]);
  return /*#__PURE__*/_react.createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value: value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = useState(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
}
//# sourceMappingURL=module.js.map


/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
}

/***/ }),

/***/ 9314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useEventCallback)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useCommittedRef.js

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = (0,react.useRef)(value);
  (0,react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const esm_useCommittedRef = (useCommittedRef);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback(fn) {
  var ref = esm_useCommittedRef(fn);
  return (0,react.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ 1086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {
    return mounted.current;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ 5164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ 5072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports optionsSupported, onceSupported */
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3335);
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListener);

/***/ }),

/***/ 3335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ 9874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ contains)
/* harmony export */ });
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/***/ }),

/***/ 9981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ css)
});

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(6783);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/ownerWindow.js

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = (0,ownerDocument/* default */.Z)(node);
  return doc && doc.defaultView || window;
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/getComputedStyle.js

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/css.js




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ const css = (style);

/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_listen)
});

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(5072);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ const esm_removeEventListener = (removeEventListener);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/listen.js



function listen(node, eventName, handler, options) {
  (0,addEventListener/* default */.ZP)(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}

/* harmony default export */ const esm_listen = (listen);

/***/ }),

/***/ 6783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ownerDocument)
/* harmony export */ });
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ qsa)
/* harmony export */ });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ 7231:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 8772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(331);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 3615:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(8772)();
}


/***/ }),

/***/ 331:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 8873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$c": () => (/* reexport */ useUncontrolledProp)
});

// UNUSED EXPORTS: uncontrollable, useUncontrolled

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ../node_modules/invariant/invariant.js
var invariant_invariant = __webpack_require__(7231);
;// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,react.useRef)(propValue !== undefined);

  var _useState = (0,react.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,react.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[Utils.defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose(_ref, [Utils.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
;// CONCATENATED MODULE: ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function react_lifecycles_compat_es_polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



;// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: _extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[Utils.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!Utils.isProp(props, key) && Utils.isProp(prevProps, key)) {
          nextState.values[key] = props[Utils.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(React.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function (props, ref) {
      return React.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
;// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/index.js



/***/ }),

/***/ 1895:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 9599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _interopRequireWildcard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 8818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.default = exports.Context = exports.allValues = void 0;

var _react = _interopRequireDefault(__webpack_require__(7294));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const allValues = obj => {
  const keys = Object.keys(obj);
  return Promise.all(keys.map(k => obj[k])).then(values => {
    const next = {};
    keys.forEach((k, i) => {
      next[k] = values[i];
    });
    return next;
  });
};

exports.allValues = allValues;

const Context = /*#__PURE__*/_react.default.createContext(); // eslint-disable-next-line react/prop-types


exports.Context = Context;

var _default = ({
  imports,
  children
}) => /*#__PURE__*/_react.default.createElement(Context.Provider, {
  value: imports
}, children);

exports.default = _default;

/***/ }),

/***/ 7271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports isTrivialHref, useButtonProps */
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2122);
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


var _excluded = ["as", "disabled"];

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps(_ref) {
  var tagName = _ref.tagName,
      disabled = _ref.disabled,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      onClick = _ref.onClick,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      type = _ref.type;

  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  var meta = {
    tagName: tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled: disabled
    }, meta];
  }

  var handleClick = function handleClick(event) {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref2, ref) {
  var asProp = _ref2.as,
      disabled = _ref2.disabled,
      props = (0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(_ref2, _excluded);

  var _useButtonProps = useButtonProps(Object.assign({
    tagName: asProp,
    disabled: disabled
  }, props)),
      buttonProps = _useButtonProps[0],
      Component = _useButtonProps[1].tagName;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PB": () => (/* binding */ dataAttr),
/* harmony export */   "$F": () => (/* binding */ dataProp)
/* harmony export */ });
/* unused harmony exports ATTRIBUTE_PREFIX, PROPERTY_PREFIX */
var ATTRIBUTE_PREFIX = "data-rr-ui-";
var PROPERTY_PREFIX = "rrUi";
function dataAttr(property) {
  return "" + ATTRIBUTE_PREFIX + property;
}
function dataProp(property) {
  return "" + PROPERTY_PREFIX + property;
}

/***/ }),

/***/ 5052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_Dropdown)
});

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(2131);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(5072);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 4 modules
var esm = __webpack_require__(8873);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(5164);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(1086);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__(9314);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useEventListener.js



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = (0,useEventCallback/* default */.Z)(listener);
  (0,react.useEffect)(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useGlobalListener.js



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = (0,react.useCallback)(function () {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}
// EXTERNAL MODULE: ../src/DropdownContext.ts
var DropdownContext = __webpack_require__(293);
// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(2562);
// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(7432);
// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(8214);
// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(7019);
// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(8742);
;// CONCATENATED MODULE: ../src/Dropdown.tsx
















function useRefWithUpdate() {
  var forceUpdate = (0,useForceUpdate/* default */.Z)();
  var ref = (0,react.useRef)(null);
  var attachRef = (0,react.useCallback)(function (element) {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
* @displayName Dropdown
* @public
*/


function Dropdown(_ref) {
  var defaultShow = _ref.defaultShow,
      rawShow = _ref.show,
      onSelect = _ref.onSelect,
      rawOnToggle = _ref.onToggle,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === void 0 ? "* [" + (0,DataKey/* dataAttr */.PB)('dropdown-item') + "]" : _ref$itemSelector,
      focusFirstItemOnShow = _ref.focusFirstItemOnShow,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      children = _ref.children;

  var _useUncontrolledProp = (0,esm/* useUncontrolledProp */.$c)(rawShow, defaultShow, rawOnToggle),
      show = _useUncontrolledProp[0],
      onToggle = _useUncontrolledProp[1]; // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set


  var _useRefWithUpdate = useRefWithUpdate(),
      menuRef = _useRefWithUpdate[0],
      setMenu = _useRefWithUpdate[1];

  var menuElement = menuRef.current;

  var _useRefWithUpdate2 = useRefWithUpdate(),
      toggleRef = _useRefWithUpdate2[0],
      setToggle = _useRefWithUpdate2[1];

  var toggleElement = toggleRef.current;
  var lastShow = (0,usePrevious/* default */.Z)(show);
  var lastSourceEvent = (0,react.useRef)(null);
  var focusInDropdown = (0,react.useRef)(false);
  var onSelectCtx = (0,react.useContext)(SelectableContext/* default */.Z);
  var toggle = (0,react.useCallback)(function (nextShow, event, source) {
    if (source === void 0) {
      source = event == null ? void 0 : event.type;
    }

    onToggle(nextShow, {
      originalEvent: event,
      source: source
    });
  }, [onToggle]);
  var handleSelect = (0,useEventCallback/* default */.Z)(function (key, event) {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, 'select');

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  var context = (0,react.useMemo)(function () {
    return {
      toggle: toggle,
      placement: placement,
      show: show,
      menuElement: menuElement,
      toggleElement: toggleElement,
      setMenu: setMenu,
      setToggle: setToggle
    };
  }, [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  var focusToggle = (0,useEventCallback/* default */.Z)(function () {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = (0,useEventCallback/* default */.Z)(function () {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && (0,DropdownToggle/* isRoleMenu */.bt)(menuRef.current) ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var first = (0,querySelectorAll/* default */.Z)(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  (0,react.useEffect)(function () {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0,react.useEffect)(function () {
    lastSourceEvent.current = null;
  });

  var getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!menuRef.current) return null;
    var items = (0,querySelectorAll/* default */.Z)(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  useGlobalListener('keydown', function (event) {
    var _menuRef$current, _toggleRef$current;

    var key = event.key;
    var target = event.target;
    var fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    var fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    var isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === 'Tab' && (!menuRef.current || !show)) {
      return;
    }

    lastSourceEvent.current = event.type;
    var meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          var next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          var _next = getNextFocusedChild(target, 1);

          if (_next && _next.focus) _next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        (0,addEventListener/* default */.ZP)(document, 'keyup', function (e) {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        break;

      default:
    }
  });
  return /*#__PURE__*/react.createElement(SelectableContext/* default.Provider */.Z.Provider, {
    value: handleSelect
  }, /*#__PURE__*/react.createElement(DropdownContext/* default.Provider */.Z.Provider, {
    value: context
  }, children));
}

Dropdown.displayName = 'Dropdown';
Dropdown.Menu = DropdownMenu/* default */.Z;
Dropdown.Toggle = DropdownToggle/* default */.ZP;
Dropdown.Item = DropdownItem/* default */.Z;
/* harmony default export */ const src_Dropdown = (Dropdown);

/***/ }),

/***/ 293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownContext);

/***/ }),

/***/ 8214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useDropdownItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2122);
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9756);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3615);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9314);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7019);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7869);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7271);
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8742);


var _excluded = ["eventKey", "disabled", "onClick", "active", "as"];








var propTypes = {
  /**
  * Highlight the menu item as active.
  */
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),

  /**
  * Disable the menu item, making it unselectable.
  */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),

  /**
  * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
  */
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)]),

  /**
  * HTML `href` attribute corresponding to `a.href`.
  */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),

  /**
  * Callback fired when the menu item is clicked.
  */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),

  /** @default Button */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().elementType)
};
/**
* Create a dropdown item. Returns a set of props for the dropdown item component
* including an `onClick` handler that prevents selection when the item is disabled
*/

function useDropdownItem(_ref) {
  var _ref3;

  var key = _ref.key,
      href = _ref.href,
      active = _ref.active,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  var onSelectCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_NavContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var eventKey = (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* .makeEventKey */ .h)(key, href);
  active = active == null && key != null ? (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* .makeEventKey */ .h)(activeKey) === eventKey : active;
  var handleClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (event) {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [(_ref3 = {
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': active
  }, _ref3[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__/* .dataAttr */ .PB)('dropdown-item')] = '', _ref3), {
    active: active
  }];
}
var DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_ref4, ref) {
  var eventKey = _ref4.eventKey,
      disabled = _ref4.disabled,
      onClick = _ref4.onClick,
      active = _ref4.active,
      _ref4$as = _ref4.as,
      Component = _ref4$as === void 0 ? _Button__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP : _ref4$as,
      props = (0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_ref4, _excluded);

  var _useDropdownItem = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled: disabled,
    onClick: onClick,
    active: active
  }),
      dropdownItemProps = _useDropdownItem[0];

  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({}, props, {
      ref: ref
    }, dropdownItemProps))
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownItem);

/***/ }),

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useDropdownMenu),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1818);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(293);
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5457);
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3658);
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4826);

var _excluded = ["children"];








var noop = function noop() {};
/**
* @memberOf Dropdown
* @param {object}  options
* @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
* @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
* @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
* @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
* @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
* @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
*/


function useDropdownMenu(options) {
  if (options === void 0) {
    options = {};
  }

  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DropdownContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

  var _useCallbackRef = (0,_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(),
      arrowElement = _useCallbackRef[0],
      attachArrowRef = _useCallbackRef[1];

  var hasShownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _options = options,
      flip = _options.flip,
      offset = _options.offset,
      rootCloseEvent = _options.rootCloseEvent,
      _options$fixed = _options.fixed,
      fixed = _options$fixed === void 0 ? false : _options$fixed,
      placementOverride = _options.placement,
      _options$popperConfig = _options.popperConfig,
      popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig,
      _options$enableEventL = _options.enableEventListeners,
      enableEventListeners = _options$enableEventL === void 0 ? true : _options$enableEventL,
      _options$usePopper = _options.usePopper,
      shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  var handleClose = function handleClose(e) {
    context == null ? void 0 : context.toggle(false, e);
  };

  var _ref = context || {},
      placement = _ref.placement,
      setMenu = _ref.setMenu,
      menuElement = _ref.menuElement,
      toggleElement = _ref.toggleElement;

  var popper = (0,_usePopper__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(toggleElement, menuElement, (0,_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset: offset,
    flip: flip,
    fixed: fixed,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  }));
  var menuProps = Object.assign({
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  var metadata = {
    show: show,
    placement: placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  (0,_useRootClose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var defaultProps = {
  usePopper: true
};
/**
* Also exported as `<Dropdown.Menu>` from `Dropdown`.
*
* @displayName DropdownMenu
* @memberOf Dropdown
*/

function DropdownMenu(_ref2) {
  var children = _ref2.children,
      options = (0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(_ref2, _excluded);

  var _useDropdownMenu = useDropdownMenu(options),
      props = _useDropdownMenu[0],
      meta = _useDropdownMenu[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children(props, meta));
}

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);

/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bt": () => (/* binding */ isRoleMenu),
/* harmony export */   "Jr": () => (/* binding */ useDropdownToggle),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6305);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(293);




var isRoleMenu = function isRoleMenu(el) {
  var _el$getAttribute;

  return ((_el$getAttribute = el.getAttribute('role')) == null ? void 0 : _el$getAttribute.toLowerCase()) === 'menu';
};

var noop = function noop() {};
/**
* Wires up Dropdown toggle functionality, returning a set a props to attach
* to the element that functions as the dropdown toggle (generally a button).
*
* @memberOf Dropdown
*/


function useDropdownToggle() {
  var id = (0,_ssr__WEBPACK_IMPORTED_MODULE_1__/* .useSSRSafeId */ .gP)();

  var _ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DropdownContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z) || {},
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? noop : _ref$toggle,
      setToggle = _ref.setToggle,
      menuElement = _ref.menuElement;

  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    toggle(!show, e);
  }, [show, toggle]);
  var props = {
    id: id,
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-expanded': !!show
  }; // This is maybe better down in an effect, but
  // the component is going to update anyway when the menu element
  // is set so might return new props.

  if (menuElement && isRoleMenu(menuElement)) {
    props['aria-haspopup'] = true;
  }

  return [props, {
    show: show,
    toggle: toggle
  }];
}
/**
* Also exported as `<Dropdown.Toggle>` from `Dropdown`.
*
* @displayName DropdownToggle
* @memberOf Dropdown
*/

function DropdownToggle(_ref2) {
  var children = _ref2.children;

  var _useDropdownToggle = useDropdownToggle(),
      props = _useDropdownToggle[0],
      meta = _useDropdownToggle[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children(props, meta));
}

DropdownToggle.displayName = 'DropdownToggle';
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownToggle);

/***/ }),

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);

/***/ }),

/***/ 7019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ makeEventKey),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectableContext);

/***/ }),

/***/ 6352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Button": () => (/* reexport */ Button/* default */.ZP),
  "Dropdown": () => (/* reexport */ Dropdown/* default */.Z),
  "Modal": () => (/* reexport */ src_Modal),
  "Nav": () => (/* reexport */ src_Nav),
  "NavItem": () => (/* reexport */ src_NavItem),
  "Overlay": () => (/* reexport */ src_Overlay),
  "Portal": () => (/* reexport */ src_Portal),
  "TabPanel": () => (/* reexport */ src_TabPanel),
  "Tabs": () => (/* reexport */ src_Tabs),
  "useDropdownItem": () => (/* reexport */ DropdownItem/* useDropdownItem */.F),
  "useDropdownMenu": () => (/* reexport */ DropdownMenu/* useDropdownMenu */.d),
  "useDropdownToggle": () => (/* reexport */ DropdownToggle/* useDropdownToggle */.Jr),
  "useNavItem": () => (/* reexport */ useNavItem),
  "useRootClose": () => (/* reexport */ useRootClose/* default */.Z)
});

// EXTERNAL MODULE: ../src/Dropdown.tsx + 2 modules
var Dropdown = __webpack_require__(5052);
// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(2562);
// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(7432);
// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(8214);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9756);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(6783);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/activeElement.js

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0,ownerDocument/* default */.Z)();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/contains.js
var contains = __webpack_require__(9874);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM = __webpack_require__(3335);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/listen.js + 1 modules
var listen = __webpack_require__(839);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(9440);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = (0,react.useRef)(value);
  valueRef.current = value;
  return valueRef;
}
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  (0,react.useEffect)(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(5164);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__(9314);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(9981);
// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(8742);
;// CONCATENATED MODULE: ../src/getScrollbarWidth.ts
/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth() {
  return Math.abs(window.innerWidth - document.documentElement.clientWidth);
}
;// CONCATENATED MODULE: ../src/ModalManager.ts



var OPEN_DATA_ATTRIBUTE = (0,DataKey/* dataAttr */.PB)('modal-open');
/**
* Manages a stack of Modals as well as ensuring
* body scrolling is is disabled and padding accounted for
*/

var ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO,
        _ref$isRTL = _ref.isRTL,
        isRTL = _ref$isRTL === void 0 ? false : _ref$isRTL;

    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
  }

  var _proto = ModalManager.prototype;

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    return getBodyScrollbarWidth();
  };

  _proto.getElement = function getElement() {
    return document.body;
  };

  _proto.setModalAttributes = function setModalAttributes(_modal) {// For overriding
  };

  _proto.removeModalAttributes = function removeModalAttributes(_modal) {// For overriding
  };

  _proto.setContainerStyle = function setContainerStyle(containerState) {
    var _containerState$style;

    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    var paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    var container = this.getElement();
    containerState.style = (_containerState$style = {
      overflow: container.style.overflow
    }, _containerState$style[paddingProp] = container.style[paddingProp], _containerState$style);

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = parseInt((0,css/* default */.Z)(container, paddingProp) || '0', 10) + containerState.scrollBarWidth + "px";
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    (0,css/* default */.Z)(container, style);
  };

  _proto.reset = function reset() {
    var _this = this;

    [].concat(this.modals).forEach(function (m) {
      return _this.remove(m);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState) {
    var container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  };

  _proto.add = function add(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

/* harmony default export */ const src_ModalManager = (ModalManager);
;// CONCATENATED MODULE: ../src/useWaitForDOMRef.ts


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return (0,ownerDocument/* default */.Z)().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0,react.useState)(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0,react.useEffect)(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0,react.useEffect)(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
;// CONCATENATED MODULE: ../src/Modal.tsx

var _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */














var manager;

function getManager() {
  if (!manager) manager = new src_ModalManager();
  return manager;
}

function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = (0,react.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add() {
      return modalManager.add(modal.current);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: (0,react.useCallback)(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0,react.useCallback)(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}

var Modal = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'dialog' : _ref$role,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onBackdropClick = _ref.onBackdropClick,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      transition = _ref.transition,
      backdropTransition = _ref.backdropTransition,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      _ref$enforceFocus = _ref.enforceFocus,
      enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
      _ref$restoreFocus = _ref.restoreFocus,
      restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      renderDialog = _ref.renderDialog,
      _ref$renderBackdrop = _ref.renderBackdrop,
      renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
    return /*#__PURE__*/react.createElement("div", props);
  } : _ref$renderBackdrop,
      providedManager = _ref.manager,
      containerRef = _ref.container,
      onShow = _ref.onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      onExit = _ref.onExit,
      onExited = _ref.onExited,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded);

  var container = useWaitForDOMRef(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = (0,useMounted/* default */.Z)();
  var prevShow = (0,usePrevious/* default */.Z)(show);

  var _useState = (0,react.useState)(!show),
      exited = _useState[0],
      setExited = _useState[1];

  var lastFocusRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return modal;
  }, [modal]);

  if (canUseDOM/* default */.Z && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  var handleShow = (0,useEventCallback/* default */.Z)(function () {
    modal.add();
    removeKeydownListenerRef.current = (0,listen/* default */.Z)(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = (0,listen/* default */.Z)(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      var currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !(0,contains/* default */.Z)(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = (0,useEventCallback/* default */.Z)(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current; // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)


      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0,react.useEffect)(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0,react.useEffect)(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = (0,useEventCallback/* default */.Z)(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !(0,contains/* default */.Z)(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = (0,useEventCallback/* default */.Z)(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  var handleDocumentKeyDown = (0,useEventCallback/* default */.Z)(function (e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  var removeFocusListenerRef = (0,react.useRef)();
  var removeKeydownListenerRef = (0,react.useRef)();

  var handleHidden = function handleHidden() {
    setExited(true);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onExited == null ? void 0 : onExited.apply(void 0, args);
  };

  var Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  var dialogProps = Object.assign({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });
  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/react.createElement("div", dialogProps, /*#__PURE__*/react.cloneElement(children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/react.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  var backdropElement = null;

  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/react.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/react.createElement(react.Fragment, null, backdropElement, dialog), container));
});
Modal.displayName = 'Modal';
/* harmony default export */ const src_Modal = (Object.assign(Modal, {
  Manager: src_ModalManager
}));
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCallbackRef.js
var useCallbackRef = __webpack_require__(1818);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useMergedRefs.js


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return (0,react.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ const esm_useMergedRefs = (useMergedRefs);
// EXTERNAL MODULE: ../src/usePopper.ts + 53 modules
var usePopper = __webpack_require__(5457);
// EXTERNAL MODULE: ../src/useRootClose.ts
var useRootClose = __webpack_require__(3658);
// EXTERNAL MODULE: ../src/mergeOptionsWithPopperConfig.ts
var mergeOptionsWithPopperConfig = __webpack_require__(4826);
;// CONCATENATED MODULE: ../src/Overlay.tsx









/**
* Built on top of `Popper.js`, the overlay component is
* great for custom tooltip overlays.
*/

var Overlay = /*#__PURE__*/react.forwardRef(function (props, outerRef) {
  var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      containerPadding = props.containerPadding,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = (0,useCallbackRef/* default */.Z)(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = (0,useCallbackRef/* default */.Z)(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = esm_useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);

  var _useState = (0,react.useState)(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var popper = (0,usePopper/* default */.Z)(target, rootElement, (0,mergeOptionsWithPopperConfig/* default */.ZP)({
    placement: placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip,
    offset: offset,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  }));

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  (0,useRootClose/* default */.Z)(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper: popper,
    placement: placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/react.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/react_dom.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
/* harmony default export */ const src_Overlay = (Overlay);
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3615);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ../src/Portal.tsx




var propTypes = {
  /**
  * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
  * appended to it.
  */
  container: (prop_types_default()).any,
  onRendered: (prop_types_default()).func
};
/**
* @public
*/

var Portal = function Portal(_ref) {
  var container = _ref.container,
      children = _ref.children,
      onRendered = _ref.onRendered;
  var resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react_dom.createPortal(children, resolvedContainer)) : null;
};

Portal.displayName = 'Portal';
Portal.propTypes = propTypes;
/* harmony default export */ const src_Portal = (Portal);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2122);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(2131);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(1086);
// EXTERNAL MODULE: ../src/NavContext.tsx
var NavContext = __webpack_require__(7869);
// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(7019);
;// CONCATENATED MODULE: ../src/TabContext.tsx

var TabContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const src_TabContext = (TabContext);
// EXTERNAL MODULE: ../src/Button.tsx
var Button = __webpack_require__(7271);
;// CONCATENATED MODULE: ../src/NavItem.tsx


var NavItem_excluded = ["as", "eventKey", "href"];








var NavItem_propTypes = {
  id: (prop_types_default()).string,
  active: (prop_types_default()).bool,
  role: (prop_types_default()).string,
  href: (prop_types_default()).string,
  tabIndex: (prop_types_default()).number,
  eventKey: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  as: (prop_types_default()).any,
  onClick: (prop_types_default()).func,
  onSelect: (prop_types_default()).func,
  'aria-controls': (prop_types_default()).string
};
function useNavItem(_ref) {
  var key = _ref.key,
      onClick = _ref.onClick,
      active = _ref.active,
      id = _ref.id,
      role = _ref.role,
      disabled = _ref.disabled;
  var parentOnSelect = (0,react.useContext)(SelectableContext/* default */.Z);
  var navContext = (0,react.useContext)(NavContext/* default */.Z);
  var isActive = active;
  var props = {};

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(key != null ? key : null);
    var contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[(0,DataKey/* dataAttr */.PB)('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = (0,useEventCallback/* default */.Z)(function (e) {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect == null ? void 0 : parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive: isActive
  }];
}
var NavItem = /*#__PURE__*/react.forwardRef(function (_ref2, ref) {
  var _ref2$as = _ref2.as,
      Component = _ref2$as === void 0 ? Button/* default */.ZP : _ref2$as,
      eventKey = _ref2.eventKey,
      href = _ref2.href,
      options = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref2, NavItem_excluded);

  var _useNavItem = useNavItem(Object.assign({
    key: (0,SelectableContext/* makeEventKey */.h)(eventKey, href)
  }, options)),
      props = _useNavItem[0],
      meta = _useNavItem[1]; // @ts-ignore


  props[(0,DataKey/* dataAttr */.PB)('active')] = meta.isActive;
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
NavItem.propTypes = NavItem_propTypes;
/* harmony default export */ const src_NavItem = (NavItem);
;// CONCATENATED MODULE: ../src/Nav.tsx


var Nav_excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];










 // eslint-disable-next-line @typescript-eslint/no-empty-function

var noop = function noop() {};

var Nav_propTypes = {
  onSelect: (prop_types_default()).func,
  as: (prop_types_default()).elementType,
  role: (prop_types_default()).string,

  /** @private */
  onKeyDown: (prop_types_default()).func,

  /** @private */
  activeKey: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
var EVENT_KEY_ATTR = (0,DataKey/* dataAttr */.PB)('event-key');
var Nav = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, Nav_excluded); // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect


  var forceUpdate = (0,useForceUpdate/* default */.Z)();
  var needsRefocusRef = (0,react.useRef)(false);
  var parentOnSelect = (0,react.useContext)(SelectableContext/* default */.Z);
  var tabContext = (0,react.useContext)(src_TabContext);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = (0,react.useRef)(null);

  var getNextActiveTab = function getNextActiveTab(offset) {
    var currentListNode = listNode.current;
    if (!currentListNode) return null;
    var items = (0,querySelectorAll/* default */.Z)(currentListNode, "[" + EVENT_KEY_ATTR + "]:not([aria-disabled=true])");
    var activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[(0,DataKey/* dataProp */.$F)('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,react.useEffect)(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector("[" + EVENT_KEY_ATTR + "][aria-selected=true]");
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = esm_useMergedRefs(ref, listNode);
  return /*#__PURE__*/react.createElement(SelectableContext/* default.Provider */.Z.Provider, {
    value: handleSelect
  }, /*#__PURE__*/react.createElement(NavContext/* default.Provider */.Z.Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: (0,SelectableContext/* makeEventKey */.h)(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
Nav.displayName = 'Nav';
Nav.propTypes = Nav_propTypes;
/* harmony default export */ const src_Nav = (Object.assign(Nav, {
  Item: src_NavItem
}));
// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 4 modules
var esm = __webpack_require__(8873);
// EXTERNAL MODULE: ../node_modules/@react-aria/ssr/dist/module.js
var dist_module = __webpack_require__(6305);
;// CONCATENATED MODULE: ../src/NoopTransition.tsx


function NoopTransition(_ref) {
  var children = _ref.children,
      inProp = _ref["in"],
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit;
  var hasEnteredRef = (0,react.useRef)(inProp);
  (0,react.useEffect)(function () {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

/* harmony default export */ const src_NoopTransition = (NoopTransition);
;// CONCATENATED MODULE: ../src/TabPanel.tsx


var TabPanel_excluded = ["activeKey", "getControlledId", "getControllerId"],
    _excluded2 = ["active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"];






var TabPanel_propTypes = {
  as: (prop_types_default()).elementType,

  /**
  * A key that associates the `TabPanel` with it's controlling `NavLink`.
  */
  eventKey: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),

  /**
  * Toggles the active state of the TabPanel, this is generally controlled by a
  * TabContainer.
  */
  active: (prop_types_default()).bool,

  /**
  * Use animation when showing or hiding `<TabPanel>`s. Defaults to `<Fade>`
  * animation, else use `false` to disable or a react-transition-group
  * `<Transition/>` component.
  */
  transition: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).elementType]),

  /**
  * Transition onEnter callback when animation is not `false`
  */
  onEnter: (prop_types_default()).func,

  /**
  * Transition onEntering callback when animation is not `false`
  */
  onEntering: (prop_types_default()).func,

  /**
  * Transition onEntered callback when animation is not `false`
  */
  onEntered: (prop_types_default()).func,

  /**
  * Transition onExit callback when animation is not `false`
  */
  onExit: (prop_types_default()).func,

  /**
  * Transition onExiting callback when animation is not `false`
  */
  onExiting: (prop_types_default()).func,

  /**
  * Transition onExited callback when animation is not `false`
  */
  onExited: (prop_types_default()).func,

  /**
  * Wait until the first "enter" transition to mount the tab (add it to the DOM)
  */
  mountOnEnter: (prop_types_default()).bool,

  /**
  * Unmount the tab (remove it from the DOM) when it is no longer visible
  */
  unmountOnExit: (prop_types_default()).bool,

  /** @ignore * */
  id: (prop_types_default()).string,

  /** @ignore * */
  'aria-labelledby': (prop_types_default()).string
};

function useTabContext(props) {
  var context = (0,react.useContext)(src_TabContext);
  if (!context) return props;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(context, TabPanel_excluded);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0,SelectableContext/* makeEventKey */.h)(props.eventKey);
  return Object.assign({}, props, {
    active: props.active == null && key != null ? (0,SelectableContext/* makeEventKey */.h)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPanel = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      _useTabContext$transi = _useTabContext.transition,
      Transition = _useTabContext$transi === void 0 ? src_NoopTransition : _useTabContext$transi,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_useTabContext, _excluded2);

  if (!active && !Transition && unmountOnExit) return null;
  var pane = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, rest, {
    ref: ref,
    role: "tabpanel",
    hidden: !active,
    "aria-hidden": !active
  }));

  if (Transition) {
    pane = /*#__PURE__*/react.createElement(Transition, {
      "in": active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, pane);
  } // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.


  return /*#__PURE__*/react.createElement(src_TabContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(SelectableContext/* default.Provider */.Z.Provider, {
    value: null
  }, pane));
});
TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = TabPanel_propTypes;
/* harmony default export */ const src_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ../src/Tabs.tsx








/* eslint-disable react/no-unused-prop-types */

var Tabs_propTypes = {
  /**
  * Sets a default animation strategy for all children `<TabPane>`s.
  * Use a react-transition-group `<Transition/>` component.
  *
  * @type {{Transition | false}}
  * @default {Fade}
  */
  transition: prop_types_default().oneOfType([prop_types_default().oneOf([false]), (prop_types_default()).elementType]),

  /**
  * Wait until the first "enter" transition to mount tabs (add them to the DOM)
  */
  mountOnEnter: (prop_types_default()).bool,

  /**
  * Unmount tabs (remove it from the DOM) when they are no longer visible
  */
  unmountOnExit: (prop_types_default()).bool,

  /**
  * A function that takes an `eventKey` and `type` and returns a unique id for
  * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
  * function, meaning it should always return the _same_ id for the same set
  * of inputs. The default value requires that an `id` to be set for the
  * `<TabContainer>`.
  *
  * The `type` argument will either be `"tab"` or `"pane"`.
  *
  * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
  */
  generateChildId: (prop_types_default()).func,

  /**
  * A callback fired when a tab is selected.
  *
  * @controllable activeKey
  */
  onSelect: (prop_types_default()).func,

  /**
  * The `eventKey` of the currently active tab.
  *
  * @controllable onSelect
  */
  activeKey: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};

var Tabs = function Tabs(props) {
  var userId = props.id,
      generateCustomChildId = props.generateChildId,
      propsOnSelect = props.onSelect,
      propsActiveKey = props.activeKey,
      defaultActiveKey = props.defaultActiveKey,
      transition = props.transition,
      mountOnEnter = props.mountOnEnter,
      unmountOnExit = props.unmountOnExit,
      children = props.children;

  var _useUncontrolledProp = (0,esm/* useUncontrolledProp */.$c)(propsActiveKey, defaultActiveKey, propsOnSelect),
      activeKey = _useUncontrolledProp[0],
      onSelect = _useUncontrolledProp[1];

  var id = (0,dist_module/* useSSRSafeId */.gP)(userId);
  var generateChildId = (0,react.useMemo)(function () {
    return generateCustomChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };
  }, [id, generateCustomChildId]);
  var tabContext = (0,react.useMemo)(function () {
    return {
      onSelect: onSelect,
      activeKey: activeKey,
      transition: transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: function getControlledId(key) {
        return generateChildId(key, 'tabpane');
      },
      getControllerId: function getControllerId(key) {
        return generateChildId(key, 'tab');
      }
    };
  }, [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/react.createElement(src_TabContext.Provider, {
    value: tabContext
  }, /*#__PURE__*/react.createElement(SelectableContext/* default.Provider */.Z.Provider, {
    value: onSelect || null
  }, children));
};

Tabs.propTypes = Tabs_propTypes;
Tabs.Panel = src_TabPanel;
/* harmony default export */ const src_Tabs = (Tabs);
;// CONCATENATED MODULE: ../src/index.ts















/***/ }),

/***/ 4826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ mergeOptionsWithPopperConfig)
/* harmony export */ });
/* unused harmony exports toModifierMap, toModifierArray */
function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      fixed = _ref.fixed,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ 5457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_usePopper)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9756);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ../node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(9440);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useSafeState.js



function useSafeState(state) {
  var isMounted = (0,useMounted/* default */.Z)();
  return [state[0], (0,react.useCallback)(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ const esm_useSafeState = (useSafeState);
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? enums_top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ../src/popper.ts









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var popper_createPopper = popperGenerator({
  defaultModifiers: [modifiers_hide, modifiers_popperOffsets, modifiers_computeStyles, eventListeners, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow]
});

;// CONCATENATED MODULE: ../src/usePopper.ts

var _excluded = ["enabled", "placement", "strategy", "modifiers"];




var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite'
}; // until docjs supports type exports...

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper;

      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;

    var state = _ref2.state;
    var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
* Position an element relative some reference element using Popper.js
*
* @param referenceElement
* @param popperElement
* @param {object}      options
* @param {object=}     options.modifiers Popper.js modifiers
* @param {boolean=}    options.enabled toggle the popper functionality on/off
* @param {string=}     options.placement The popper element placement relative to the reference element
* @param {string=}     options.strategy the positioning strategy
* @param {function=}   options.onCreate called when the popper is created
* @param {function=}   options.onUpdate called when the popper is updated
*
* @returns {UsePopperState} The popper state
*/

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref3, _excluded);

  var prevModifiers = (0,react.useRef)(modifiers);
  var popperInstanceRef = (0,react.useRef)();
  var update = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);

  var _useSafeState = esm_useSafeState((0,react.useState)({
    placement: placement,
    update: update,
    forceUpdate: forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  })),
      popperState = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = (0,react.useMemo)(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  var nextModifiers = (0,react.useMemo)(function () {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  (0,react.useEffect)(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(nextModifiers, [updateModifier, disabledApplyStylesModifier])
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0,react.useEffect)(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = popper_createPopper(referenceElement, popperElement, Object.assign({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(nextModifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return Object.assign({}, s, {
            attributes: {},
            styles: {
              popper: {}
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ const src_usePopper = (usePopper);

/***/ }),

/***/ 3658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9874);
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(839);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6783);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9314);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1895);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);






var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};
/**
* The `useRootClose` hook registers your callback on the document
* when rendered. Powers the `<Overlay/>` component. This is used achieve modal
* style behavior where your callback is triggered when the user tries to
* interact with the rest of the document or hits the `esc` key.
*
* @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
* @param {function} onRootClose
* @param {object=}  options
* @param {boolean=} options.disabled
* @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
*/


function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    var currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_3___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0,dom_helpers_contains__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(currentTarget, e.target);
  }, [ref]);
  var handleMouse = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = (0,dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    var removeKeyupListener = (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return (0,dom_helpers_listen__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRootClose);

/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7271);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6010);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_restart_ui__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP, _extends({
  ref: ref
}, props, {
  className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(props.className, 'transition text-md', 'h-10 cursor-pointer bg-white border border-primary text-primary rounded px-8 mt-4 appearance-none text-center whitespace-no-wrap', 'focus:outline-none focus:ring-4 ring-primary-200', 'hover:bg-primary hover:text-white', 'active:bg-primary-600 active:text-white', props.disabled && 'cursor-not-allowed opacity-60')
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2122);
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9599);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3905);
/* harmony import */ var _theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8818);
const frontMatter={};const contentTitle=undefined;const metadata={"unversionedId":"useRootClose","id":"useRootClose","isDocsHomePage":false,"title":"useRootClose","description":"`jsx live renderAsComponent","source":"@site/docs/useRootClose.mdx","sourceDirName":".","slug":"/useRootClose","permalink":"/ui/useRootClose","version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"usePopper","permalink":"/ui/usePopper"},"next":{"title":"Animation and Transitions","permalink":"/ui/transitions"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(MDXLayout,(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.default,{imports:()=>(0,_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.allValues)({"@restart/ui":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6352))),"../src/Button":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(5733)))}),mdxType:"ImportContext"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"live renderAsComponent","live":true,"renderAsComponent":true},`import { useRootClose } from "@restart/ui";
import Button from "../src/Button";

const ref = useRef();
const [show, setShow] = useState(false);
const handleRootClose = () => setShow(false);

useRootClose(ref, handleRootClose, {
  disabled: !show,
});

return (
  <div className="flex flex-col items-center space-y-4">
    <Button type="button" onClick={() => setShow(true)}>
      Render RootCloseWrapper
    </Button>

    {show && (
      <div
        ref={ref}
        className="rounded shadow bg-white p-6"
      >
        <span>Click anywhere to dismiss me!</span>
      </div>
    )}
  </div>
);
`))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),m=__webpack_require__(7418),r=__webpack_require__(3840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2U5MmMyMDVlLmFmMmNhYjY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvc3NyL2Rpc3QvbW9kdWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VDYWxsYmFja1JlZi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VFdmVudENhbGxiYWNrLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VGb3JjZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2NhblVzZURPTS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyV2luZG93LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2h5cGhlbmF0ZVN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY3NzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3F1ZXJ5U2VsZWN0b3JBbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9ob29rLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdW5jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2Rpc3QvZXNtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQDRjL2RvY3VzYXVydXMtcHJlc2V0L2xpYi90aGVtZS9JbXBvcnRDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRGF0YUtleS50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUdsb2JhbExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bk1lbnUudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duVG9nZ2xlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9OYXZDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9TZWxlY3RhYmxlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVVwZGF0ZWRSZWYuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVdpbGxVbm1vdW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL2dldFNjcm9sbGJhcldpZHRoLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsTWFuYWdlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VXYWl0Rm9yRE9NUmVmLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTWVyZ2VkUmVmcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Qb3J0YWwudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYkNvbnRleHQudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdkl0ZW0udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvTm9vcFRyYW5zaXRpb24udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9UYWJzLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RlcXVhbC9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlU2FmZVN0YXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvcG9wcGVyLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL3VzZVBvcHBlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VSb290Q2xvc2UudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL3NyYy9CdXR0b24udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi9kb2NzL3VzZVJvb3RDbG9zZS5tZHgiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIERlZmF1bHQgY29udGV4dCB2YWx1ZSB0byB1c2UgaW4gY2FzZSB0aGVyZSBpcyBubyBTU1JQcm92aWRlci4gVGhpcyBpcyBmaW5lIGZvclxuLy8gY2xpZW50LW9ubHkgYXBwcy4gSW4gb3JkZXIgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBwb3RlbnRpYWxseVxuLy8gYmVpbmcgb24gdGhlIHBhZ2UgYXQgb25jZSwgdGhlIHByZWZpeCBpcyBzZXQgdG8gYSByYW5kb20gbnVtYmVyLiBTU1JQcm92aWRlclxuLy8gd2lsbCByZXNldCB0aGlzIHRvIHplcm8gZm9yIGNvbnNpc3RlbmN5IGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQsIHNvIGluIHRoZVxuLy8gU1NSIGNhc2UgbXVsdGlwbGUgY29waWVzIG9mIFJlYWN0IEFyaWEgaXMgbm90IHN1cHBvcnRlZC5cbmNvbnN0ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCA9IHtcbiAgcHJlZml4OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMCksXG4gIGN1cnJlbnQ6IDBcbn07XG5cbmNvbnN0ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5jcmVhdGVDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCk7XG5cbi8qKlxuICogV2hlbiB1c2luZyBTU1Igd2l0aCBSZWFjdCBBcmlhLCBhcHBsaWNhdGlvbnMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIFNTUlByb3ZpZGVyLlxuICogVGhpcyBlbnN1cmVzIHRoYXQgYXV0byBnZW5lcmF0ZWQgaWRzIGFyZSBjb25zaXN0ZW50IGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIocHJvcHMpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgU1NSUHJvdmlkZXIsIHNldCB0byB6ZXJvLCBvdGhlcndpc2UgaW5jcmVtZW50LlxuICAgIHByZWZpeDogY3VyID09PSAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQgPyAwIDogKytjdXIucHJlZml4LFxuICAgIGN1cnJlbnQ6IDBcbiAgfSksIFtjdXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuY3JlYXRlRWxlbWVudCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59XG5sZXQgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGNhblVzZURPTSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbi8qKiBAcHJpdmF0ZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU1NSU2FmZUlkKGRlZmF1bHRJZCkge1xuICBsZXQgY3R4ID0gdXNlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCk7IC8vIElmIHdlIGFyZSByZW5kZXJpbmcgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBhbmQgdGhlcmUncyBubyBTU1JQcm92aWRlcixcbiAgLy8gcHJvdmlkZSBhIHdhcm5pbmcgdG8gaGludCB0byB0aGUgZGV2ZWxvcGVyIHRvIGFkZCBvbmUuXG5cbiAgaWYgKGN0eCA9PT0gJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ICYmICEkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkY2FuVXNlRE9NKSB7XG4gICAgY29uc29sZS53YXJuKCdXaGVuIHNlcnZlciByZW5kZXJpbmcsIHlvdSBtdXN0IHdyYXAgeW91ciBhcHBsaWNhdGlvbiBpbiBhbiA8U1NSUHJvdmlkZXI+IHRvIGVuc3VyZSBjb25zaXN0ZW50IGlkcyBhcmUgZ2VuZXJhdGVkIGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLicpO1xuICB9XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZGVmYXVsdElkIHx8IFwicmVhY3QtYXJpYS1cIiArIGN0eC5wcmVmaXggKyBcIi1cIiArICsrY3R4LmN1cnJlbnQsIFtkZWZhdWx0SWRdKTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgY3VycmVudGx5IGJlaW5nIHNlcnZlciBzaWRlIHJlbmRlcmVkIG9yXG4gKiBoeWRyYXRlZCBvbiB0aGUgY2xpZW50LiBDYW4gYmUgdXNlZCB0byBkZWxheSBicm93c2VyLXNwZWNpZmljIHJlbmRlcmluZ1xuICogdW50aWwgYWZ0ZXIgaHlkcmF0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1NTUigpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgaXNJblNTUkNvbnRleHQgPSBjdXIgIT09ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dDtcbiAgbGV0IFtpc1NTUiwgc2V0SXNTU1JdID0gdXNlU3RhdGUoaXNJblNTUkNvbnRleHQpOyAvLyBJZiBvbiB0aGUgY2xpZW50LCBhbmQgdGhlIGNvbXBvbmVudCB3YXMgaW5pdGlhbGx5IHNlcnZlciByZW5kZXJlZCxcbiAgLy8gdGhlbiBzY2hlZHVsZSBhIGxheW91dCBlZmZlY3QgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgYWZ0ZXIgaHlkcmF0aW9uLlxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luU1NSQ29udGV4dCkge1xuICAgIC8vIFRoaXMgaWYgc3RhdGVtZW50IHRlY2huaWNhbGx5IGJyZWFrcyB0aGUgcnVsZXMgb2YgaG9va3MsIGJ1dCBpcyBzYWZlXG4gICAgLy8gYmVjYXVzZSB0aGUgY29uZGl0aW9uIG5ldmVyIGNoYW5nZXMgYWZ0ZXIgbW91bnRpbmcuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHNldElzU1NSKGZhbHNlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICByZXR1cm4gaXNTU1I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQSBjb252ZW5pZW5jZSBob29rIGFyb3VuZCBgdXNlU3RhdGVgIGRlc2lnbmVkIHRvIGJlIHBhaXJlZCB3aXRoXG4gKiB0aGUgY29tcG9uZW50IFtjYWxsYmFjayByZWZdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjY2FsbGJhY2stcmVmcykgYXBpLlxuICogQ2FsbGJhY2sgcmVmcyBhcmUgdXNlZnVsIG92ZXIgYHVzZVJlZigpYCB3aGVuIHlvdSBuZWVkIHRvIHJlc3BvbmQgdG8gdGhlIHJlZiBiZWluZyBzZXRcbiAqIGluc3RlYWQgb2YgbGF6aWx5IGFjY2Vzc2luZyBpdCBpbiBhbiBlZmZlY3QuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTERpdkVsZW1lbnQ+KClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBpZiAoIWVsZW1lbnQpIHJldHVyblxuICpcbiAqICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGVsZW1lbnQpXG4gKlxuICogICByZXR1cm4gKCkgPT4ge1xuICogICAgIGNhbGVuZGFyLmRlc3Ryb3koKVxuICogICB9XG4gKiB9LCBbZWxlbWVudF0pXG4gKlxuICogcmV0dXJuIDxkaXYgcmVmPXthdHRhY2hSZWZ9IC8+XG4gKiBgYGBcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKCkge1xuICByZXR1cm4gdXNlU3RhdGUobnVsbCk7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVmYCB3aG9zZSB2YWx1ZSBpcyB1cGRhdGVkIGluIGFuIGVmZmVjdCwgZW5zdXJpbmcgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZSBpcyB0aGUgb25lIHJlbmRlcmVkIHdpdGguIEdlbmVyYWxseSBvbmx5IHJlcXVpcmVkIGZvciBDb25jdXJyZW50IG1vZGUgdXNhZ2VcbiAqIHdoZXJlIHByZXZpb3VzIHdvcmsgaW4gYHJlbmRlcigpYCBtYXkgYmUgZGlzY2FyZGVkIGJlZm9yIGJlaW5nIHVzZWQuXG4gKlxuICogVGhpcyBpcyBzYWZlIHRvIGFjY2VzcyBpbiBhbiBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgYFJlZmAgdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb21taXR0ZWRSZWYodmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiByZWY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbW1pdHRlZFJlZjsiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuICB9LCBbcmVmXSk7XG59IiwiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgYSBjb21wb25lbnQgdXBkYXRlLiB0aGUgaG9vayBlcXVpdmFsZW50IHRvXG4gKiBgdGhpcy5mb3JjZVVwZGF0ZSgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudC4gSW4gbW9zdCBjYXNlcyB1c2luZyBhIHN0YXRlIHZhbHVlIGRpcmVjdGx5XG4gKiBpcyBwcmVmZXJhYmxlIGJ1dCBtYXkgYmUgcmVxdWlyZWQgaW4gc29tZSBhZHZhbmNlZCB1c2FnZXMgb2YgcmVmcyBmb3IgaW50ZXJvcCBvclxuICogd2hlbiBkaXJlY3QgRE9NIG1hbmlwdWxhdGlvbiBpcyByZXF1aXJlZC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICpcbiAqIGNvbnN0IHVwZGF0ZU9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gKiAgZm9yY2VVcGRhdGUoKVxuICogfSwgW2ZvcmNlVXBkYXRlXSlcbiAqXG4gKiByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dXBkYXRlT25DbGlja30+SGkgdGhlcmU8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICAvLyBUaGUgdG9nZ2xpbmcgc3RhdGUgdmFsdWUgaXMgZGVzaWduZWQgdG8gZGVmZWF0IFJlYWN0IG9wdGltaXphdGlvbnMgZm9yIHNraXBwaW5nXG4gIC8vIHVwZGF0ZXMgd2hlbiB0aGV5IGFyZSBzdHJpY3RpbmcgZXF1YWwgdG8gdGhlIGxhc3Qgc3RhdGUgdmFsdWVcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gIXN0YXRlO1xuICB9LCBmYWxzZSksXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHJldHVybiBkaXNwYXRjaDtcbn0iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogVHJhY2sgd2hldGhlciBhIGNvbXBvbmVudCBpcyBjdXJyZW50IG1vdW50ZWQuIEdlbmVyYWxseSBsZXNzIHByZWZlcmFibGUgdGhhblxuICogcHJvcGVybGx5IGNhbmNlbGluZyBlZmZlY3RzIHNvIHRoZXkgZG9uJ3QgcnVuIGFmdGVyIGEgY29tcG9uZW50IGlzIHVubW91bnRlZCxcbiAqIGJ1dCBoZWxwZnVsIGluIGNhc2VzIHdoZXJlIHRoYXQgaXNuJ3QgZmVhc2libGUsIHN1Y2ggYXMgYSBgUHJvbWlzZWAgcmVzb2x1dGlvbi5cbiAqXG4gKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBpc01vdW50ZWQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICogY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgZmV0Y2hkYXRhKCkudGhlbigobmV3RGF0YSkgPT4ge1xuICogICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAqICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiB9KVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRlZCgpIHtcbiAgdmFyIG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb3VudGVkLmN1cnJlbnQ7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBpc01vdW50ZWQuY3VycmVudDtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogU3RvcmUgdGhlIGxhc3Qgb2Ygc29tZSB2YWx1ZS4gVHJhY2tlZCB2aWEgYSBgUmVmYCBvbmx5IHVwZGF0aW5nIGl0XG4gKiBhZnRlciB0aGUgY29tcG9uZW50IHJlbmRlcnMuXG4gKlxuICogSGVscGZ1bCBpZiB5b3UgbmVlZCB0byBjb21wYXJlIGEgcHJvcCB2YWx1ZSB0byBpdCdzIHByZXZpb3VzIHZhbHVlIGR1cmluZyByZW5kZXIuXG4gKlxuICogYGBgdHNcbiAqIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xuICogICBjb25zdCBsYXN0UHJvcHMgPSB1c2VQcmV2aW91cyhwcm9wcylcbiAqXG4gKiAgIGlmIChsYXN0UHJvcHMuZm9vICE9PSBwcm9wcy5mb28pXG4gKiAgICAgcmVzZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcy5mb28pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHRyYWNrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBjYW5Vc2VET00gZnJvbSAnLi9jYW5Vc2VET00nO1xuZXhwb3J0IHZhciBvcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5leHBvcnQgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGdldCBvbmNlKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgcmV0dXJuIG9uY2VTdXBwb3J0ZWQgPSBvcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIHRydWUpO1xuICB9XG59IGNhdGNoIChlKSB7XG4gIC8qICovXG59XG5cbi8qKlxuICogQW4gYGFkZEV2ZW50TGlzdGVuZXJgIHBvbnlmaWxsLCBzdXBwb3J0cyB0aGUgYG9uY2VgIG9wdGlvblxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIGV2ZW50TmFtZSB0aGUgZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZSB0aGUgaGFuZGxlclxuICogQHBhcmFtIG9wdGlvbnMgZXZlbnQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nICYmICFvbmNlU3VwcG9ydGVkKSB7XG4gICAgdmFyIG9uY2UgPSBvcHRpb25zLm9uY2UsXG4gICAgICAgIGNhcHR1cmUgPSBvcHRpb25zLmNhcHR1cmU7XG4gICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIGlmICghb25jZVN1cHBvcnRlZCAmJiBvbmNlKSB7XG4gICAgICB3cmFwcGVkSGFuZGxlciA9IGhhbmRsZXIuX19vbmNlIHx8IGZ1bmN0aW9uIG9uY2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZXIuX19vbmNlID0gd3JhcHBlZEhhbmRsZXI7XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcHBlZEhhbmRsZXIsIG9wdGlvbnNTdXBwb3J0ZWQgPyBvcHRpb25zIDogY2FwdHVyZSk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lcjsiLCJleHBvcnQgZGVmYXVsdCAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UsIG5vLWNvbmQtYXNzaWduICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgY29udGFpbnMgYW5vdGhlciBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBlbGVtZW50XG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudCB0byBjaGVja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhjb250ZXh0LCBub2RlKSB7XG4gIC8vIEhUTUwgRE9NIGFuZCBTVkcgRE9NIG1heSBoYXZlIGRpZmZlcmVudCBzdXBwb3J0IGxldmVscyxcbiAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBvbiBjb250ZXh0IGluc3RlYWQgb2YgYSBkb2N1bWVudCByb290IGVsZW1lbnQuXG4gIGlmIChjb250ZXh0LmNvbnRhaW5zKSByZXR1cm4gY29udGV4dC5jb250YWlucyhub2RlKTtcbiAgaWYgKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHJldHVybiBjb250ZXh0ID09PSBub2RlIHx8ICEhKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNik7XG59IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50Jztcbi8qKlxuICogUmV0dXJucyB0aGUgb3duZXIgd2luZG93IG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lcldpbmRvdyhub2RlKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGUpO1xuICByZXR1cm4gZG9jICYmIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4vb3duZXJXaW5kb3cnO1xuLyoqXG4gKiBSZXR1cm5zIG9uZSBvciBhbGwgY29tcHV0ZWQgc3R5bGUgcHJvcGVydGllcyBvZiBhbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIHBzdWVkb0VsZW1lbnQgdGhlIHN0eWxlIHByb3BlcnR5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwc3VlZG9FbGVtZW50KSB7XG4gIHJldHVybiBvd25lcldpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpO1xufSIsInZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGUnO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufSIsInZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgc3VwcG9ydGVkVHJhbnNmb3Jtcy50ZXN0KHZhbHVlKSk7XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGVTdHlsZSc7XG5pbXBvcnQgaXNUcmFuc2Zvcm0gZnJvbSAnLi9pc1RyYW5zZm9ybSc7XG5cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHByb3BlcnR5KSB7XG4gIHZhciBjc3MgPSAnJztcbiAgdmFyIHRyYW5zZm9ybXMgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKGh5cGhlbmF0ZShwcm9wZXJ0eSkpO1xuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvcGVydHkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnR5W2tleV07XG5cbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGh5cGhlbmF0ZShrZXkpKTtcbiAgICB9IGVsc2UgaWYgKGlzVHJhbnNmb3JtKGtleSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0ga2V5ICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzICs9IGh5cGhlbmF0ZShrZXkpICsgXCI6IFwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFuc2Zvcm1zKSB7XG4gICAgY3NzICs9IFwidHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybXMgKyBcIjtcIjtcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSBcIjtcIiArIGNzcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7IiwiLyoqXG4gKiBBIGByZW1vdmVFdmVudExpc3RlbmVyYCBwb255ZmlsbFxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIGV2ZW50TmFtZSB0aGUgZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZSB0aGUgaGFuZGxlclxuICogQHBhcmFtIG9wdGlvbnMgZXZlbnQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICB2YXIgY2FwdHVyZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdib29sZWFuJyA/IG9wdGlvbnMuY2FwdHVyZSA6IG9wdGlvbnM7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gIGlmIChoYW5kbGVyLl9fb25jZSkge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIuX19vbmNlLCBjYXB0dXJlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVFdmVudExpc3RlbmVyOyIsImltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJy4vYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgcmVtb3ZlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RlbjsiLCIvKipcbiAqIFJldHVybnMgdGhlIG93bmVyIGRvY3VtZW50IG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJ2YXIgdG9BcnJheSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFtdLnNsaWNlKTtcbi8qKlxuICogUnVucyBgcXVlcnlTZWxlY3RvckFsbGAgb24gYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudFxuICogQHBhcmFtIHNlbGVjdG9yIHRoZSBzZWxlY3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHFzYShlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gdG9BcnJheShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcFR5cGUoaGFuZGxlciwgbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm9wc1toYW5kbGVyXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiWW91IGhhdmUgcHJvdmlkZWQgYSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIHRvIGBcIiArIG5hbWUgKyBcImAgXCIgKyAoXCJ3aXRob3V0IGFuIGBcIiArIGhhbmRsZXIgKyBcImAgaGFuZGxlciBwcm9wLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBcIikgKyAoXCJJZiB0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBcIiArIGRlZmF1bHRLZXkocHJvcE5hbWUpICsgXCJgLiBcIikgKyAoXCJPdGhlcndpc2UsIHNldCBgXCIgKyBoYW5kbGVyICsgXCJgLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jb250cm9sbGVkUHJvcFR5cGVzKGNvbnRyb2xsZWRWYWx1ZXMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBwcm9wVHlwZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoY29udHJvbGxlZFZhbHVlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BUeXBlcyBmb3IgZm9sa3MgdGhhdCB1c2UgcnVudGltZSBjaGVja3NcbiAgICBwcm9wVHlwZXNbZGVmYXVsdEtleShwcm9wKV0gPSBub29wO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gY29udHJvbGxlZFZhbHVlc1twcm9wXTtcbiAgICAgICEodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnICYmIGhhbmRsZXIudHJpbSgpLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdVbmNvbnRyb2xsYWJsZSAtIFslc106IHRoZSBwcm9wIGAlc2AgbmVlZHMgYSB2YWxpZCBoYW5kbGVyIGtleSBuYW1lIGluIG9yZGVyIHRvIG1ha2UgaXQgdW5jb250cm9sbGFibGUnLCBkaXNwbGF5TmFtZSwgcHJvcCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcHJvcFR5cGVzW3Byb3BdID0gcmVhZE9ubHlQcm9wVHlwZShoYW5kbGVyLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb3BUeXBlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3AocHJvcHMsIHByb3ApIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEtleShrZXkpIHtcbiAgcmV0dXJuICdkZWZhdWx0JyArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG59XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkFjY2VwdFJlZihjb21wb25lbnQpIHtcbiAgcmV0dXJuICEhY29tcG9uZW50ICYmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnZnVuY3Rpb24nIHx8IGNvbXBvbmVudC5wcm90b3R5cGUgJiYgY29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWRQcm9wKHByb3BWYWx1ZSwgZGVmYXVsdFZhbHVlLCBoYW5kbGVyKSB7XG4gIHZhciB3YXNQcm9wUmVmID0gdXNlUmVmKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKSxcbiAgICAgIHN0YXRlVmFsdWUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgaXNQcm9wID0gcHJvcFZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciB3YXNQcm9wID0gd2FzUHJvcFJlZi5jdXJyZW50O1xuICB3YXNQcm9wUmVmLmN1cnJlbnQgPSBpc1Byb3A7XG4gIC8qKlxuICAgKiBJZiBhIHByb3Agc3dpdGNoZXMgZnJvbSBjb250cm9sbGVkIHRvIFVuY29udHJvbGxlZFxuICAgKiByZXNldCBpdHMgdmFsdWUgdG8gdGhlIGRlZmF1bHRWYWx1ZVxuICAgKi9cblxuICBpZiAoIWlzUHJvcCAmJiB3YXNQcm9wICYmIHN0YXRlVmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xuICAgIHNldFN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gW2lzUHJvcCA/IHByb3BWYWx1ZSA6IHN0YXRlVmFsdWUsIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyKSBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgW3ZhbHVlXS5jb25jYXQoYXJncykpO1xuICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgfSwgW2hhbmRsZXJdKV07XG59XG5cbmV4cG9ydCB7IHVzZVVuY29udHJvbGxlZFByb3AgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVuY29udHJvbGxlZChwcm9wcywgY29uZmlnKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBmaWVsZE5hbWUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYgPSByZXN1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWZbVXRpbHMuZGVmYXVsdEtleShmaWVsZE5hbWUpXSxcbiAgICAgICAgcHJvcHNWYWx1ZSA9IF9yZWZbZmllbGROYW1lXSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtVdGlscy5kZWZhdWx0S2V5KGZpZWxkTmFtZSksIGZpZWxkTmFtZV0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICB2YXIgaGFuZGxlck5hbWUgPSBjb25maWdbZmllbGROYW1lXTtcblxuICAgIHZhciBfdXNlVW5jb250cm9sbGVkUHJvcCA9IHVzZVVuY29udHJvbGxlZFByb3AocHJvcHNWYWx1ZSwgZGVmYXVsdFZhbHVlLCBwcm9wc1toYW5kbGVyTmFtZV0pLFxuICAgICAgICB2YWx1ZSA9IF91c2VVbmNvbnRyb2xsZWRQcm9wWzBdLFxuICAgICAgICBoYW5kbGVyID0gX3VzZVVuY29udHJvbGxlZFByb3BbMV07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2ZpZWxkTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyW2hhbmRsZXJOYW1lXSA9IGhhbmRsZXIsIF9leHRlbmRzMikpO1xuICB9LCBwcm9wcyk7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG52YXIgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvanF1ZW5zZS9zcmMvdW5jb250cm9sbGFibGUvc3JjL3VuY29udHJvbGxhYmxlLmpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuY29udHJvbGxhYmxlKENvbXBvbmVudCwgY29udHJvbGxlZFZhbHVlcywgbWV0aG9kcykge1xuICBpZiAobWV0aG9kcyA9PT0gdm9pZCAwKSB7XG4gICAgbWV0aG9kcyA9IFtdO1xuICB9XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICB2YXIgY2FuQWNjZXB0UmVmID0gVXRpbHMuY2FuQWNjZXB0UmVmKENvbXBvbmVudCk7XG4gIHZhciBjb250cm9sbGVkUHJvcHMgPSBPYmplY3Qua2V5cyhjb250cm9sbGVkVmFsdWVzKTtcbiAgdmFyIFBST1BTX1RPX09NSVQgPSBjb250cm9sbGVkUHJvcHMubWFwKFV0aWxzLmRlZmF1bHRLZXkpO1xuICAhKGNhbkFjY2VwdFJlZiB8fCAhbWV0aG9kcy5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnW3VuY29udHJvbGxhYmxlXSBzdGF0ZWxlc3MgZnVuY3Rpb24gY29tcG9uZW50cyBjYW5ub3QgcGFzcyB0aHJvdWdoIG1ldGhvZHMgJyArICdiZWNhdXNlIHRoZXkgaGF2ZSBubyBhc3NvY2lhdGVkIGluc3RhbmNlcy4gQ2hlY2sgY29tcG9uZW50OiAnICsgZGlzcGxheU5hbWUgKyAnLCAnICsgJ2F0dGVtcHRpbmcgdG8gcGFzcyB0aHJvdWdoIG1ldGhvZHM6ICcgKyBtZXRob2RzLmpvaW4oJywgJykpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgVW5jb250cm9sbGVkQ29tcG9uZW50ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb21wb25lbnQoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuaGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGNvbnRyb2xsZWRWYWx1ZXNbcHJvcE5hbWVdO1xuXG4gICAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHNbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcylbaGFuZGxlck5hbWVdLmFwcGx5KF90aGlzJHByb3BzLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzLnVubW91bnRlZCkgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltwcm9wTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlcnNbaGFuZGxlck5hbWVdID0gaGFuZGxlQ2hhbmdlO1xuICAgICAgfSk7XG4gICAgICBpZiAobWV0aG9kcy5sZW5ndGgpIF90aGlzLmF0dGFjaFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgX3RoaXMuaW5uZXIgPSByZWY7XG4gICAgICB9O1xuICAgICAgdmFyIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhbHVlc1trZXldID0gX3RoaXMucHJvcHNbVXRpbHMuZGVmYXVsdEtleShrZXkpXTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICBwcmV2UHJvcHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgIC8vbGV0IHNldFN0YXRlIHRyaWdnZXIgdGhlIHVwZGF0ZVxuICAgICAgcmV0dXJuICF0aGlzLl9ub3RpZnlpbmc7XG4gICAgfTtcblxuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgdmFsdWVzID0gX3JlZjIudmFsdWVzLFxuICAgICAgICAgIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcztcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzKSxcbiAgICAgICAgcHJldlByb3BzOiB7fVxuICAgICAgfTtcbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgcHJvcCBzd2l0Y2hlcyBmcm9tIGNvbnRyb2xsZWQgdG8gVW5jb250cm9sbGVkXG4gICAgICAgICAqIHJlc2V0IGl0cyB2YWx1ZSB0byB0aGUgZGVmYXVsdFZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0U3RhdGUucHJldlByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuXG4gICAgICAgIGlmICghVXRpbHMuaXNQcm9wKHByb3BzLCBrZXkpICYmIFV0aWxzLmlzUHJvcChwcmV2UHJvcHMsIGtleSkpIHtcbiAgICAgICAgICBuZXh0U3RhdGUudmFsdWVzW2tleV0gPSBwcm9wc1tVdGlscy5kZWZhdWx0S2V5KGtleSldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bm1vdW50ZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIFBST1BTX1RPX09NSVQuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBfdGhpczIucHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICBuZXdQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BWYWx1ZSA6IF90aGlzMi5zdGF0ZS52YWx1ZXNbcHJvcE5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgbmV3UHJvcHMsIHRoaXMuaGFuZGxlcnMsIHtcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCB0aGlzLmF0dGFjaFJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVW5jb250cm9sbGVkQ29tcG9uZW50O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgcG9seWZpbGwoVW5jb250cm9sbGVkQ29tcG9uZW50KTtcbiAgVW5jb250cm9sbGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJVbmNvbnRyb2xsZWQoXCIgKyBkaXNwbGF5TmFtZSArIFwiKVwiO1xuICBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvcFR5cGVzID0gX2V4dGVuZHMoe1xuICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZigpIHt9XG4gIH0sIFV0aWxzLnVuY29udHJvbGxlZFByb3BUeXBlcyhjb250cm9sbGVkVmFsdWVzLCBkaXNwbGF5TmFtZSkpO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICRwcm94aWVkTWV0aG9kKCkge1xuICAgICAgdmFyIF90aGlzJGlubmVyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJGlubmVyID0gdGhpcy5pbm5lcilbbWV0aG9kXS5hcHBseShfdGhpcyRpbm5lciwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBVbmNvbnRyb2xsZWRDb21wb25lbnQ7XG5cbiAgaWYgKFJlYWN0LmZvcndhcmRSZWYpIHtcbiAgICBXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVW5jb250cm9sbGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOFxuICAgICAgICB9LFxuICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBXcmFwcGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IFVuY29udHJvbGxlZENvbXBvbmVudC5wcm9wVHlwZXM7XG4gIH1cblxuICBXcmFwcGVkQ29tcG9uZW50LkNvbnRyb2xsZWRDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gIC8qKlxuICAgKiB1c2VmdWwgd2hlbiB3cmFwcGluZyBhIENvbXBvbmVudCBhbmQgeW91IHdhbnQgdG8gY29udHJvbFxuICAgKiBldmVyeXRoaW5nXG4gICAqL1xuXG4gIFdyYXBwZWRDb21wb25lbnQuZGVmZXJDb250cm9sVG8gPSBmdW5jdGlvbiAobmV3Q29tcG9uZW50LCBhZGRpdGlvbnMsIG5leHRNZXRob2RzKSB7XG4gICAgaWYgKGFkZGl0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBhZGRpdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5jb250cm9sbGFibGUobmV3Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgY29udHJvbGxlZFZhbHVlcywgYWRkaXRpb25zKSwgbmV4dE1ldGhvZHMpO1xuICB9O1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVW5jb250cm9sbGVkLCB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAnLi9ob29rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5jb250cm9sbGFibGUgfSBmcm9tICcuL3VuY29udHJvbGxhYmxlJzsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgICByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7XG4gIH0pKG5vZGVJbnRlcm9wKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIE1EWENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgd2l0aE1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB3aXRoTURYQ29tcG9uZW50cyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudHM6IGFsbENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHVzZU1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgdmFyIGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KTtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSBjb250ZXh0Q29tcG9uZW50cztcblxuICBpZiAoY29tcG9uZW50cykge1xuICAgIGFsbENvbXBvbmVudHMgPSBpc0Z1bmN0aW9uKGNvbXBvbmVudHMpID8gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cykgOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGV4dENvbXBvbmVudHMpLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBhbGxDb21wb25lbnRzO1xufTtcbnZhciBNRFhQcm92aWRlciA9IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWxsQ29tcG9uZW50c1xuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG52YXIgVFlQRV9QUk9QX05BTUUgPSAnbWR4VHlwZSc7XG52YXIgREVGQVVMVFMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgd3JhcHBlcjogZnVuY3Rpb24gd3JhcHBlcihfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCBjaGlsZHJlbik7XG4gIH1cbn07XG52YXIgTURYQ3JlYXRlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcm9wQ29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBtZHhUeXBlID0gcHJvcHMubWR4VHlwZSxcbiAgICAgIG9yaWdpbmFsVHlwZSA9IHByb3BzLm9yaWdpbmFsVHlwZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgZXRjID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjb21wb25lbnRzXCIsIFwibWR4VHlwZVwiLCBcIm9yaWdpbmFsVHlwZVwiLCBcInBhcmVudE5hbWVcIl0pO1xuXG4gIHZhciBjb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wQ29tcG9uZW50cyk7XG4gIHZhciB0eXBlID0gbWR4VHlwZTtcbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudHNbXCJcIi5jb25jYXQocGFyZW50TmFtZSwgXCIuXCIpLmNvbmNhdCh0eXBlKV0gfHwgY29tcG9uZW50c1t0eXBlXSB8fCBERUZBVUxUU1t0eXBlXSB8fCBvcmlnaW5hbFR5cGU7XG5cbiAgaWYgKHByb3BDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBldGMpLCB7fSwge1xuICAgICAgY29tcG9uZW50czogcHJvcENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmVmOiByZWZcbiAgfSwgZXRjKSk7XG59KTtcbk1EWENyZWF0ZUVsZW1lbnQuZGlzcGxheU5hbWUgPSAnTURYQ3JlYXRlRWxlbWVudCc7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIG1keFR5cGUgPSBwcm9wcyAmJiBwcm9wcy5tZHhUeXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgbWR4VHlwZSkge1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBNRFhDcmVhdGVFbGVtZW50O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQcm9wcy5vcmlnaW5hbFR5cGUgPSB0eXBlO1xuICAgIG5ld1Byb3BzW1RZUEVfUFJPUF9OQU1FXSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgOiBtZHhUeXBlO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG5leHBvcnQgeyBNRFhDb250ZXh0LCBNRFhQcm92aWRlciwgY3JlYXRlRWxlbWVudCBhcyBtZHgsIHVzZU1EWENvbXBvbmVudHMsIHdpdGhNRFhDb21wb25lbnRzIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuQ29udGV4dCA9IGV4cG9ydHMuYWxsVmFsdWVzID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBhbGxWYWx1ZXMgPSBvYmogPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGtleXMubWFwKGsgPT4gb2JqW2tdKSkudGhlbih2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IG5leHQgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgIG5leHRba10gPSB2YWx1ZXNbaV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5hbGxWYWx1ZXMgPSBhbGxWYWx1ZXM7XG5cbmNvbnN0IENvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuXG5cbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG5cbnZhciBfZGVmYXVsdCA9ICh7XG4gIGltcG9ydHMsXG4gIGNoaWxkcmVuXG59KSA9PiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gIHZhbHVlOiBpbXBvcnRzXG59LCBjaGlsZHJlbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3Jlc2V0JyB8ICdzdWJtaXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvck9wdGlvbnMge1xuICBocmVmPzogc3RyaW5nO1xuICByZWw/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VCdXR0b25Qcm9wc09wdGlvbnMgZXh0ZW5kcyBBbmNob3JPcHRpb25zIHtcbiAgdHlwZT86IEJ1dHRvblR5cGU7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljaz86IFJlYWN0LkV2ZW50SGFuZGxlcjxSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudD47XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICB0YWdOYW1lPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcml2aWFsSHJlZihocmVmPzogc3RyaW5nKSB7XG4gIHJldHVybiAhaHJlZiB8fCBocmVmLnRyaW0oKSA9PT0gJyMnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFyaWFCdXR0b25Qcm9wcyB7XG4gIHR5cGU/OiBCdXR0b25UeXBlIHwgdW5kZWZpbmVkO1xuICBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcm9sZT86ICdidXR0b24nO1xuICB0YWJJbmRleD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICdhcmlhLWRpc2FibGVkJz86IHRydWUgfCB1bmRlZmluZWQ7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQnV0dG9uUHJvcHNNZXRhZGF0YSB7XG4gIHRhZ05hbWU6IFJlYWN0LkVsZW1lbnRUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uUHJvcHMoe1xuICB0YWdOYW1lLFxuICBkaXNhYmxlZCxcbiAgaHJlZixcbiAgdGFyZ2V0LFxuICByZWwsXG4gIG9uQ2xpY2ssXG4gIHRhYkluZGV4ID0gMCxcbiAgdHlwZSxcbn06IFVzZUJ1dHRvblByb3BzT3B0aW9ucyk6IFtBcmlhQnV0dG9uUHJvcHMsIFVzZUJ1dHRvblByb3BzTWV0YWRhdGFdIHtcbiAgaWYgKCF0YWdOYW1lKSB7XG4gICAgaWYgKGhyZWYgIT0gbnVsbCB8fCB0YXJnZXQgIT0gbnVsbCB8fCByZWwgIT0gbnVsbCkge1xuICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnTmFtZSA9ICdidXR0b24nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGE6IFVzZUJ1dHRvblByb3BzTWV0YWRhdGEgPSB7IHRhZ05hbWUgfTtcbiAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgcmV0dXJuIFt7IHR5cGU6ICh0eXBlIGFzIGFueSkgfHwgJ2J1dHRvbicsIGRpc2FibGVkIH0sIG1ldGFdO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IGlzVHJpdmlhbEhyZWYoaHJlZikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNsaWNrPy4oZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAvLyBleHBsaWNpdGx5IHVuZGVmaW5lZCBzbyB0aGF0IGl0IG92ZXJyaWRlcyB0aGUgcHJvcHMgZGlzYWJsZWQgaW4gYSBzcHJlYWRcbiAgICAgIC8vIGUuZy4gPFRhZyB7Li4ucHJvcHN9IHsuLi5ob29rUHJvcHN9IC8+XG4gICAgICBkaXNhYmxlZDogdW5kZWZpbmVkLFxuICAgICAgdGFiSW5kZXg6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGFiSW5kZXgsXG4gICAgICBocmVmOiB0YWdOYW1lID09PSAnYScgJiYgZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBocmVmLFxuICAgICAgdGFyZ2V0OiB0YWdOYW1lID09PSAnYScgPyB0YXJnZXQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6ICFkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGRpc2FibGVkLFxuICAgICAgcmVsOiB0YWdOYW1lID09PSAnYScgPyByZWwgOiB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICB9LFxuICAgIG1ldGEsXG4gIF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUJ1dHRvblByb3BzIHtcbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIHVuZGVybHlpbmcgcmVuZGVyZWQgZWxlbWVudCBkaXJlY3RseSBieSBwYXNzaW5nIGluIGEgdmFsaWRcbiAgICogY29tcG9uZW50IHR5cGVcbiAgICovXG4gIGFzPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBUaGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGJ1dHRvbiAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqIE9wdGlvbmFsbHkgc3BlY2lmeSBhbiBocmVmIHRvIHJlbmRlciBhIGA8YT5gIHRhZyBzdHlsZWQgYXMgYSBidXR0b24gKi9cbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKiogQW5jaG9yIHRhcmdldCwgd2hlbiByZW5kZXJpbmcgYW4gYW5jaG9yIGFzIGEgYnV0dG9uICovXG4gIHRhcmdldD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICByZWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHNcbiAgZXh0ZW5kcyBCYXNlQnV0dG9uUHJvcHMsXG4gICAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdidXR0b24nPiB7fVxuXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBCdXR0b25Qcm9wcz4oXG4gICh7IGFzOiBhc1Byb3AsIGRpc2FibGVkLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbYnV0dG9uUHJvcHMsIHsgdGFnTmFtZTogQ29tcG9uZW50IH1dID0gdXNlQnV0dG9uUHJvcHMoe1xuICAgICAgdGFnTmFtZTogYXNQcm9wLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wcm9wcyxcbiAgICB9KTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLmJ1dHRvblByb3BzfSByZWY9e3JlZn0gLz47XG4gIH0sXG4pO1xuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9QUkVGSVggPSBgZGF0YS1yci11aS1gIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUFJPUEVSVFlfUFJFRklYID0gYHJyVWlgIGFzIGNvbnN0O1xuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF0dHI8VCBleHRlbmRzIHN0cmluZz4ocHJvcGVydHk6IFQpIHtcbiAgcmV0dXJuIGAke0FUVFJJQlVURV9QUkVGSVh9JHtwcm9wZXJ0eX1gIGFzIGNvbnN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YVByb3A8VCBleHRlbmRzIHN0cmluZz4ocHJvcGVydHk6IFQpIHtcbiAgcmV0dXJuIGAke1BST1BFUlRZX1BSRUZJWH0ke3Byb3BlcnR5fWAgYXMgY29uc3Q7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgb3V0c2lkZSBkaXJlY3RseSB0byBzcGVjaWZpZWQgRE9NIGVsZW1lbnRcbiAqIGJ5cGFzc2luZyB0aGUgcmVhY3Qgc3ludGhldGljIGV2ZW50IHN5c3RlbS5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgdGFyZ2V0IHRvIGxpc3RlbiBmb3IgZXZlbnRzIG9uXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICBpZiAoY2FwdHVyZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FwdHVyZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGxpc3RlbmVyKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGV2ZW50VGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gZXZlbnRUYXJnZXQoKSA6IGV2ZW50VGFyZ2V0O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICB9O1xuICB9LCBbZXZlbnRUYXJnZXRdKTtcbn0iLCJpbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHRoZSBgZG9jdW1lbnRgLFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIGBgYHRzXG4gKiB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICogIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdsb2JhbExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRUYXJnZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9LCBbXSk7XG4gIHJldHVybiB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50VGFyZ2V0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG59IiwiaW1wb3J0IHFzYSBmcm9tICdkb20taGVscGVycy9xdWVyeVNlbGVjdG9yQWxsJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ2RvbS1oZWxwZXJzL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZUdsb2JhbExpc3RlbmVyIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUdsb2JhbExpc3RlbmVyJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgRHJvcGRvd25Db250ZXh0IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcbmltcG9ydCBEcm9wZG93bk1lbnUsIHtcbiAgRHJvcGRvd25NZW51UHJvcHMsXG4gIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhLFxuICBVc2VEcm9wZG93bk1lbnVPcHRpb25zLFxufSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgRHJvcGRvd25Ub2dnbGUsIHtcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgaXNSb2xlTWVudSxcbn0gZnJvbSAnLi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtLCB7IERyb3Bkb3duSXRlbVByb3BzIH0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vdXNlUG9wcGVyJztcblxuZXhwb3J0IHR5cGUge1xuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG4gIERyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gIERyb3Bkb3duSXRlbVByb3BzLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bkluamVjdGVkUHJvcHMge1xuICBvbktleURvd246IFJlYWN0LktleWJvYXJkRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgdHlwZSBUb2dnbGVFdmVudCA9IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlTWV0YWRhdGEge1xuICBzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JpZ2luYWxFdmVudDogVG9nZ2xlRXZlbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgUG9wcGVySlMgcGxhY2VtZW50IGZvciBwb3NpdGlvbmluZyB0aGUgRHJvcGRvd24gbWVudSBpbiByZWxhdGlvbiB0b1xuICAgKiBpdHMgVG9nZ2xlLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnYm90dG9tLXN0YXJ0J1xuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbml0aWFsIHZpc2liaWxpdHkgb2YgdGhlIERyb3Bkb3duLlxuICAgKi9cbiAgZGVmYXVsdFNob3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgRHJvcGRvd24gaXMgdmlzaWJsZS5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBvblRvZ2dsZVxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIERyb3Bkb3duSXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICovXG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgRHJvcGRvd24gd2lzaGVzIHRvIGNoYW5nZSB2aXNpYmlsaXR5LiBDYWxsZWQgd2l0aFxuICAgKiB0aGUgcmVxdWVzdGVkIGBzaG93YCB2YWx1ZSwgdGhlIERPTSBldmVudCwgYW5kIHRoZSBzb3VyY2UgdGhhdCBmaXJlZCBpdDpcbiAgICogYCdjbGljaydgLGAna2V5ZG93bidgLGAncm9vdENsb3NlJ2AsIG9yIGAnc2VsZWN0J2AuXG4gICAqXG4gICAqIGBgYHRzIHN0YXRpY1xuICAgKiBmdW5jdGlvbihcbiAgICogICBuZXh0U2hvdzogYm9vbGVhbixcbiAgICogICBtZXRhOiBUb2dnbGVNZXRhZGF0YSxcbiAgICogKTogdm9pZFxuICAgKiBgYGBcbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBzaG93XG4gICAqL1xuICBvblRvZ2dsZT86IChuZXh0U2hvdzogYm9vbGVhbiwgbWV0YTogVG9nZ2xlTWV0YWRhdGEpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgY3NzIHNlbGVjdG9yIHN0cmluZyB0aGF0IHdpbGwgcmV0dXJuIF9fZm9jdXNhYmxlX18gbWVudSBpdGVtcy5cbiAgICogU2VsZWN0b3JzIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgbWVudSBjb21wb25lbnQ6XG4gICAqIGUuZy4gYCA+IGxpOm5vdCgnLmRpc2FibGVkJylgXG4gICAqL1xuICBpdGVtU2VsZWN0b3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBmb2N1cyBiZWhhdmlvciBmb3Igd2hlbiB0aGUgRHJvcGRvd24gaXMgb3BlbmVkLiBTZXQgdG9cbiAgICogYHRydWVgIHRvIGFsd2F5cyBmb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtLCBga2V5Ym9hcmRgIHRvIGZvY3VzIG9ubHkgd2hlblxuICAgKiBuYXZpZ2F0aW5nIHZpYSB0aGUga2V5Ym9hcmQsIG9yIGBmYWxzZWAgdG8gZGlzYWJsZSBjb21wbGV0ZWx5XG4gICAqXG4gICAqIFRoZSBEZWZhdWx0IGJlaGF2aW9yIGlzIGBmYWxzZWAgKip1bmxlc3MqKiB0aGUgTWVudSBoYXMgYSBgcm9sZT1cIm1lbnVcImBcbiAgICogd2hlcmUgaXQgd2lsbCBkZWZhdWx0IHRvIGBrZXlib2FyZGAgdG8gbWF0Y2ggdGhlIHJlY29tbWVuZGVkIFtBUklBIEF1dGhvcmluZ1xuICAgKiBwcmFjdGljZXNdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xLyNtZW51YnV0dG9uKS5cbiAgICovXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93PzogYm9vbGVhbiB8ICdrZXlib2FyZCc7XG5cbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIHRoZSByb290IGRyb3Bkb3duIGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byBhbiBlbGVtZW50IGNvbnRhaW5pbmcgX2JvdGhfIHRoZVxuICAgKiBtZW51IGFuZCB0b2dnbGUgaW4gb3JkZXIgdG8gaGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgZm9jdXMgbWFuYWdlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIG9uS2V5RG93bjogKFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWZXaXRoVXBkYXRlKCkge1xuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdHRhY2hSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWxlbWVudDogbnVsbCB8IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICByZWYuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAvLyBlbnN1cmUgdGhhdCBhIG1lbnUgc2V0IHRyaWdnZXJzIGFuIHVwZGF0ZSBmb3IgY29uc3VtZXJzXG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH0sXG4gICAgW2ZvcmNlVXBkYXRlXSxcbiAgKTtcbiAgcmV0dXJuIFtyZWYsIGF0dGFjaFJlZl0gYXMgY29uc3Q7XG59XG5cbi8qKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duKHtcbiAgZGVmYXVsdFNob3csXG4gIHNob3c6IHJhd1Nob3csXG4gIG9uU2VsZWN0LFxuICBvblRvZ2dsZTogcmF3T25Ub2dnbGUsXG4gIGl0ZW1TZWxlY3RvciA9IGAqIFske2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyl9XWAsXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93LFxuICBwbGFjZW1lbnQgPSAnYm90dG9tLXN0YXJ0JyxcbiAgY2hpbGRyZW4sXG59OiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IFtzaG93LCBvblRvZ2dsZV0gPSB1c2VVbmNvbnRyb2xsZWRQcm9wKFxuICAgIHJhd1Nob3csXG4gICAgZGVmYXVsdFNob3chLFxuICAgIHJhd09uVG9nZ2xlLFxuICApO1xuXG4gIC8vIFdlIHVzZSBub3JtYWwgcmVmcyBpbnN0ZWFkIG9mIHVzZUNhbGxiYWNrUmVmIGluIG9yZGVyIHRvIHBvcHVsYXRlIHRoZVxuICAvLyB0aGUgdmFsdWUgYXMgcXVpY2tseSBhcyBwb3NzaWJsZSwgb3RoZXJ3aXNlIHRoZSBlZmZlY3QgdG8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgLy8gbWF5IHJ1biBiZWZvcmUgdGhlIHN0YXRlIHZhbHVlIGlzIHNldFxuICBjb25zdCBbbWVudVJlZiwgc2V0TWVudV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IG1lbnVFbGVtZW50ID0gbWVudVJlZi5jdXJyZW50O1xuXG4gIGNvbnN0IFt0b2dnbGVSZWYsIHNldFRvZ2dsZV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSB0b2dnbGVSZWYuY3VycmVudDtcblxuICBjb25zdCBsYXN0U2hvdyA9IHVzZVByZXZpb3VzKHNob3cpO1xuICBjb25zdCBsYXN0U291cmNlRXZlbnQgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZvY3VzSW5Ecm9wZG93biA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uU2VsZWN0Q3R4ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG5cbiAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgbmV4dFNob3c6IGJvb2xlYW4sXG4gICAgICBldmVudDogVG9nZ2xlRXZlbnQgfCB1bmRlZmluZWQsXG4gICAgICBzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGV2ZW50Py50eXBlLFxuICAgICkgPT4ge1xuICAgICAgb25Ub2dnbGUobmV4dFNob3csIHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHNvdXJjZSB9KTtcbiAgICB9LFxuICAgIFtvblRvZ2dsZV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlRXZlbnRDYWxsYmFjayhcbiAgICAoa2V5OiBzdHJpbmcgfCBudWxsLCBldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgICB0b2dnbGUoZmFsc2UsIGV2ZW50LCAnc2VsZWN0Jyk7XG5cbiAgICAgIGlmICghZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICBvblNlbGVjdEN0eD8uKGtleSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHRvZ2dsZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHNob3csXG4gICAgICBtZW51RWxlbWVudCxcbiAgICAgIHRvZ2dsZUVsZW1lbnQsXG4gICAgICBzZXRNZW51LFxuICAgICAgc2V0VG9nZ2xlLFxuICAgIH0pLFxuICAgIFt0b2dnbGUsIHBsYWNlbWVudCwgc2hvdywgbWVudUVsZW1lbnQsIHRvZ2dsZUVsZW1lbnQsIHNldE1lbnUsIHNldFRvZ2dsZV0sXG4gICk7XG5cbiAgaWYgKG1lbnVFbGVtZW50ICYmIGxhc3RTaG93ICYmICFzaG93KSB7XG4gICAgZm9jdXNJbkRyb3Bkb3duLmN1cnJlbnQgPSBtZW51RWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGZvY3VzVG9nZ2xlID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHRvZ2dsZUVsZW1lbnQgJiYgdG9nZ2xlRWxlbWVudC5mb2N1cykge1xuICAgICAgdG9nZ2xlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWF5YmVGb2N1c0ZpcnN0ID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGxhc3RTb3VyY2VFdmVudC5jdXJyZW50O1xuICAgIGxldCBmb2N1c1R5cGUgPSBmb2N1c0ZpcnN0SXRlbU9uU2hvdztcblxuICAgIGlmIChmb2N1c1R5cGUgPT0gbnVsbCkge1xuICAgICAgZm9jdXNUeXBlID1cbiAgICAgICAgbWVudVJlZi5jdXJyZW50ICYmIGlzUm9sZU1lbnUobWVudVJlZi5jdXJyZW50KSA/ICdrZXlib2FyZCcgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBmb2N1c1R5cGUgPT09IGZhbHNlIHx8XG4gICAgICAoZm9jdXNUeXBlID09PSAna2V5Ym9hcmQnICYmICEvXmtleS4rJC8udGVzdCh0eXBlISkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3QgPSBxc2EobWVudVJlZi5jdXJyZW50ISwgaXRlbVNlbGVjdG9yKVswXTtcbiAgICBpZiAoZmlyc3QgJiYgZmlyc3QuZm9jdXMpIGZpcnN0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3cpIG1heWJlRm9jdXNGaXJzdCgpO1xuICAgIGVsc2UgaWYgKGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50KSB7XG4gICAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgZm9jdXNUb2dnbGUoKTtcbiAgICB9XG4gICAgLy8gb25seSBgc2hvd2Agc2hvdWxkIGJlIGNoYW5naW5nXG4gIH0sIFtzaG93LCBmb2N1c0luRHJvcGRvd24sIGZvY3VzVG9nZ2xlLCBtYXliZUZvY3VzRmlyc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhc3RTb3VyY2VFdmVudC5jdXJyZW50ID0gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0TmV4dEZvY3VzZWRDaGlsZCA9IChjdXJyZW50OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW1lbnVSZWYuY3VycmVudCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpdGVtcyA9IHFzYShtZW51UmVmLmN1cnJlbnQsIGl0ZW1TZWxlY3Rvcik7XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGN1cnJlbnQpICsgb2Zmc2V0O1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGl0ZW1zLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zW2luZGV4XTtcbiAgfTtcblxuICB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBmcm9tTWVudSA9IG1lbnVSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KTtcbiAgICBjb25zdCBmcm9tVG9nZ2xlID0gdG9nZ2xlUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICAvLyBTZWNvbmQgb25seSB0byBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi84Y2ZiZjY5MzNiOGEwMTQ2YWMzZmJjMzY5ZjE5ZTUyMGJkMWViZGFjL2pzL3NyYy9kcm9wZG93bi5qcyNMNDAwXG4gICAgLy8gaW4gaW5zY3J1dGFiaWxpdHlcbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSk7XG4gICAgaWYgKGlzSW5wdXQgJiYgKGtleSA9PT0gJyAnIHx8IChrZXkgIT09ICdFc2NhcGUnICYmIGZyb21NZW51KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWZyb21NZW51ICYmICFmcm9tVG9nZ2xlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ1RhYicgJiYgKCFtZW51UmVmLmN1cnJlbnQgfHwgIXNob3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBldmVudC50eXBlO1xuICAgIGNvbnN0IG1ldGEgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBzb3VyY2U6IGV2ZW50LnR5cGUgfTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGdldE5leHRGb2N1c2VkQ2hpbGQodGFyZ2V0LCAtMSk7XG4gICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICBvblRvZ2dsZSh0cnVlLCBtZXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIDEpO1xuICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICAvLyBvbiBrZXlkb3duIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFiYmVkIEZST00sIHdlIG5lZWQgdGhhdFxuICAgICAgICAvLyB0byBrbm93IGlmIHRoaXMgZXZlbnQgaXMgcmVsZXZhbnQgdG8gdGhpcyBkcm9wZG93biAoZS5nLiBpbiB0aGlzIG1lbnUpLlxuICAgICAgICAvLyBPbiBga2V5dXBgIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFnZ2VkIFRPIHdoaWNoIHdlIHVzZSB0byBjaGVja1xuICAgICAgICAvLyBpZiBmb2N1cyBoYXMgbGVmdCB0aGUgbWVudVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgICAna2V5dXAnLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChlLmtleSA9PT0gJ1RhYicgJiYgIWUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAhbWVudVJlZi5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgPERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbkRyb3Bkb3duLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duJztcblxuRHJvcGRvd24uTWVudSA9IERyb3Bkb3duTWVudTtcbkRyb3Bkb3duLlRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlO1xuRHJvcGRvd24uSXRlbSA9IERyb3Bkb3duSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdXNlUG9wcGVyJztcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25Db250ZXh0VmFsdWUgPSB7XG4gIHRvZ2dsZTogKG5leHRTaG93OiBib29sZWFuLCBldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgRXZlbnQpID0+IHZvaWQ7XG4gIG1lbnVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHRvZ2dsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgc2V0TWVudTogKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkO1xuICBzZXRUb2dnbGU6IChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZDtcblxuICBzaG93OiBib29sZWFuO1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG59O1xuXG5jb25zdCBEcm9wZG93bkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PERyb3Bkb3duQ29udGV4dFZhbHVlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQ29udGV4dDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5cbmltcG9ydCB7IEV2ZW50S2V5LCBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkYXRhQXR0ciB9IGZyb20gJy4vRGF0YUtleSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JdGVtUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEhpZ2hsaWdodCB0aGUgbWVudSBpdGVtIGFzIGFjdGl2ZS5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIG1lbnUgaXRlbSwgbWFraW5nIGl0IHVuc2VsZWN0YWJsZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVmFsdWUgcGFzc2VkIHRvIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIsIHVzZWZ1bCBmb3IgaWRlbnRpZnlpbmcgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbS5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEhUTUwgYGhyZWZgIGF0dHJpYnV0ZSBjb3JyZXNwb25kaW5nIHRvIGBhLmhyZWZgLlxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQGRlZmF1bHQgQnV0dG9uICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG59O1xuXG5pbnRlcmZhY2UgVXNlRHJvcGRvd25JdGVtT3B0aW9ucyB7XG4gIGtleT86IEV2ZW50S2V5IHwgbnVsbDtcbiAgaHJlZj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZHJvcGRvd24gaXRlbS4gUmV0dXJucyBhIHNldCBvZiBwcm9wcyBmb3IgdGhlIGRyb3Bkb3duIGl0ZW0gY29tcG9uZW50XG4gKiBpbmNsdWRpbmcgYW4gYG9uQ2xpY2tgIGhhbmRsZXIgdGhhdCBwcmV2ZW50cyBzZWxlY3Rpb24gd2hlbiB0aGUgaXRlbSBpcyBkaXNhYmxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25JdGVtKHtcbiAga2V5LFxuICBocmVmLFxuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufTogVXNlRHJvcGRvd25JdGVtT3B0aW9ucykge1xuICBjb25zdCBvblNlbGVjdEN0eCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcblxuICBjb25zdCB7IGFjdGl2ZUtleSB9ID0gbmF2Q29udGV4dCB8fCB7fTtcbiAgY29uc3QgZXZlbnRLZXkgPSBtYWtlRXZlbnRLZXkoa2V5LCBocmVmKTtcblxuICBhY3RpdmUgPVxuICAgIGFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBldmVudEtleVxuICAgICAgOiBhY3RpdmU7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgb25DbGljaz8uKGV2ZW50KTtcblxuICAgIGlmIChvblNlbGVjdEN0eCAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgb25TZWxlY3RDdHgoZXZlbnRLZXksIGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHVuZGVmaW5lZCxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogYWN0aXZlLFxuICAgICAgW2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyldOiAnJyxcbiAgICB9LFxuICAgIHsgYWN0aXZlIH0sXG4gIF0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IERyb3Bkb3duSXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIERyb3Bkb3duSXRlbVByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGV2ZW50S2V5LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgICAgYXM6IENvbXBvbmVudCA9IEJ1dHRvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfTogRHJvcGRvd25JdGVtUHJvcHMsXG4gICAgcmVmLFxuICApID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd25JdGVtUHJvcHNdID0gdXNlRHJvcGRvd25JdGVtKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIFwiVFMyNjA0OiBKU1ggZWxlbWVudCB0eXBlICdDb21wb25lbnQnIGRvZXMgbm90IGhhdmUgYW55IGNvbnN0cnVjdCBvciBjYWxsIHNpZ25hdHVyZXMuXCJcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSByZWY9e3JlZn0gey4uLmRyb3Bkb3duSXRlbVByb3BzfSAvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5Ecm9wZG93bkl0ZW0uZGlzcGxheU5hbWUgPSAnRHJvcGRvd25JdGVtJztcbkRyb3Bkb3duSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICdAcmVzdGFydC9ob29rcy91c2VDYWxsYmFja1JlZic7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0LCB7IERyb3Bkb3duQ29udGV4dFZhbHVlIH0gZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuaW1wb3J0IHVzZVBvcHBlciwge1xuICBVc2VQb3BwZXJPcHRpb25zLFxuICBQbGFjZW1lbnQsXG4gIE9mZnNldCxcbiAgVXNlUG9wcGVyU3RhdGUsXG59IGZyb20gJy4vdXNlUG9wcGVyJztcbmltcG9ydCB1c2VSb290Q2xvc2UsIHsgUm9vdENsb3NlT3B0aW9ucyB9IGZyb20gJy4vdXNlUm9vdENsb3NlJztcbmltcG9ydCBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnIGZyb20gJy4vbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25NZW51T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBQb3BwZXIuanMgYGZsaXBgIG1vZGlmaWVyLCBhbGxvd2luZyB0aGUgRHJvcGRvd24gdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yXG4gICAqIHRvZ2dsZS4gU2VlIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi9tb2RpZmllcnMvZmxpcC8pXG4gICAqIGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBmbGlwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIHZpc2libGUgc3RhdGUgb2YgdGhlIG1lbnUsIGdlbmVyYWxseSB0aGlzIGlzIHByb3ZpZGVkIGJ5IHRoZVxuICAgKiBwYXJlbnQgYERyb3Bkb3duYCBjb21wb25lbnQsIGJ1dCBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYXMgYSBwcm9wIGRpcmVjdGx5LlxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYGZpeGVkYCBwb3NpdGlvbmluZyBzdHJhdGVneSBpbiBQb3BwZXIuIFRoaXMgaXMgdXNlZCBpZiB0aGVcbiAgICogZHJvcGRvd24gdG9nZ2xlIGlzIGluIGEgZml4ZWQgY29udGFpbmVyLlxuICAgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgUG9wcGVySlMgcGxhY2VtZW50IGZvciBwb3NpdGlvbmluZyB0aGUgRHJvcGRvd24gbWVudSBpbiByZWxhdGlvbiB0byBpdCdzIFRvZ2dsZS5cbiAgICogR2VuZXJhbGx5IHRoaXMgaXMgcHJvdmlkZWQgYnkgdGhlIHBhcmVudCBgRHJvcGRvd25gIGNvbXBvbmVudCxcbiAgICogYnV0IG1heSBhbHNvIGJlIHNwZWNpZmllZCBhcyBhIHByb3AgZGlyZWN0bHkuXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBQb3BwZXIgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LlxuICAgKi9cbiAgdXNlUG9wcGVyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gYWRkIHNjcm9sbCBhbmQgcmVzaXplIGxpc3RlbmVycyB0byB1cGRhdGUgbWVudSBwb3NpdGlvbi5cbiAgICpcbiAgICogU2VlIHRoZSBbZXZlbnQgbGlzdGVuZXJzIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyL21vZGlmaWVycy9ldmVudC1saXN0ZW5lcnMvKVxuICAgKiBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgZW5hYmxlRXZlbnRMaXN0ZW5lcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgb2YgdGhlIGRyb3Bkb3duIG1lbnUgZnJvbSB0aGUgZHJvcGRvd24gdG9nZ2xlLiBTZWUgdGhlXG4gICAqIFtvZmZzZXQgZG9jc10oaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjIvbW9kaWZpZXJzL29mZnNldC8pIGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGV2ZW50IHVzZWQgYnkgUm9vdENsb3NlV3JhcHBlci5cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50PzogUm9vdENsb3NlT3B0aW9uc1snY2xpY2tUcmlnZ2VyJ107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHBvcHBlciBvcHRpb25zIGFuZCBwcm9wcyBwYXNzZWQgZGlyZWN0bHkgdG8gcmVhY3QtcG9wcGVyJ3MgUG9wcGVyIGNvbXBvbmVudC5cbiAgICovXG4gIHBvcHBlckNvbmZpZz86IE9taXQ8VXNlUG9wcGVyT3B0aW9ucywgJ2VuYWJsZWQnIHwgJ3BsYWNlbWVudCc+O1xufVxuXG5leHBvcnQgdHlwZSBVc2VyRHJvcGRvd25NZW51UHJvcHMgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAnYXJpYS1sYWJlbGxlZGJ5Jz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJEcm9wZG93bk1lbnVBcnJvd1Byb3BzID0gUmVjb3JkPHN0cmluZywgYW55PiAmIHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgaGFzU2hvd246IGJvb2xlYW47XG4gIHRvZ2dsZT86IERyb3Bkb3duQ29udGV4dFZhbHVlWyd0b2dnbGUnXTtcbiAgcG9wcGVyOiBVc2VQb3BwZXJTdGF0ZSB8IG51bGw7XG4gIGFycm93UHJvcHM6IFBhcnRpYWw8VXNlckRyb3Bkb3duTWVudUFycm93UHJvcHM+O1xufVxuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgRHJvcGRvd25cbiAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZsaXAgQXV0b21hdGljYWxseSBhZGp1c3QgdGhlIG1lbnUgYGRyb3BgIHBvc2l0aW9uIGJhc2VkIG9uIHZpZXdwb3J0IGVkZ2UgZGV0ZWN0aW9uXG4gKiBAcGFyYW0ge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbnMub2Zmc2V0IERlZmluZSBhbiBvZmZzZXQgZGlzdGFuY2UgYmV0d2VlbiB0aGUgTWVudSBhbmQgdGhlIFRvZ2dsZVxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNob3cgRGlzcGxheSB0aGUgbWVudSBtYW51YWxseSwgaWdub3JlZCBpbiB0aGUgY29udGV4dCBvZiBhIGBEcm9wZG93bmBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VQb3BwZXIgb3B0IGluL291dCBvZiB1c2luZyBQb3BwZXJKUyB0byBwb3NpdGlvbiBtZW51cy4gV2hlbiBkaXNhYmxlZCB5b3UgbXVzdCBwb3NpdGlvbiBpdCB5b3Vyc2VsZi5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgb3B0aW9ucy5yb290Q2xvc2VFdmVudCBUaGUgcG9pbnRlciBldmVudCB0byBsaXN0ZW4gZm9yIHdoZW4gZGV0ZXJtaW5pbmcgXCJjbGlja3Mgb3V0c2lkZVwiIHRoZSBtZW51IGZvciB0cmlnZ2VyaW5nIGEgY2xvc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnMucG9wcGVyQ29uZmlnIE9wdGlvbnMgcGFzc2VkIHRvIHRoZSBbYHVzZVBvcHBlcmBdKC9hcGkvdXNlUG9wcGVyKSBob29rLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25NZW51KG9wdGlvbnM6IFVzZURyb3Bkb3duTWVudU9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChEcm9wZG93bkNvbnRleHQpO1xuXG4gIGNvbnN0IFthcnJvd0VsZW1lbnQsIGF0dGFjaEFycm93UmVmXSA9IHVzZUNhbGxiYWNrUmVmPEVsZW1lbnQ+KCk7XG5cbiAgY29uc3QgaGFzU2hvd25SZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IHtcbiAgICBmbGlwLFxuICAgIG9mZnNldCxcbiAgICByb290Q2xvc2VFdmVudCxcbiAgICBmaXhlZCA9IGZhbHNlLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50T3ZlcnJpZGUsXG4gICAgcG9wcGVyQ29uZmlnID0ge30sXG4gICAgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgPSB0cnVlLFxuICAgIHVzZVBvcHBlcjogc2hvdWxkVXNlUG9wcGVyID0gISFjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBzaG93ID0gY29udGV4dD8uc2hvdyA9PSBudWxsID8gISFvcHRpb25zLnNob3cgOiBjb250ZXh0LnNob3c7XG5cbiAgaWYgKHNob3cgJiYgIWhhc1Nob3duUmVmLmN1cnJlbnQpIHtcbiAgICBoYXNTaG93blJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgRXZlbnQpID0+IHtcbiAgICBjb250ZXh0Py50b2dnbGUoZmFsc2UsIGUpO1xuICB9O1xuXG4gIGNvbnN0IHsgcGxhY2VtZW50LCBzZXRNZW51LCBtZW51RWxlbWVudCwgdG9nZ2xlRWxlbWVudCB9ID0gY29udGV4dCB8fCB7fTtcblxuICBjb25zdCBwb3BwZXIgPSB1c2VQb3BwZXIoXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgICBtZW51RWxlbWVudCxcbiAgICBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnKHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50T3ZlcnJpZGUgfHwgcGxhY2VtZW50IHx8ICdib3R0b20tc3RhcnQnLFxuICAgICAgZW5hYmxlZDogc2hvdWxkVXNlUG9wcGVyLFxuICAgICAgZW5hYmxlRXZlbnRzOiBlbmFibGVFdmVudExpc3RlbmVycyA9PSBudWxsID8gc2hvdyA6IGVuYWJsZUV2ZW50TGlzdGVuZXJzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZmxpcCxcbiAgICAgIGZpeGVkLFxuICAgICAgYXJyb3dFbGVtZW50LFxuICAgICAgcG9wcGVyQ29uZmlnLFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IG1lbnVQcm9wczogVXNlckRyb3Bkb3duTWVudVByb3BzID0ge1xuICAgIHJlZjogc2V0TWVudSB8fCBub29wLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiB0b2dnbGVFbGVtZW50Py5pZCxcbiAgICAuLi5wb3BwZXIuYXR0cmlidXRlcy5wb3BwZXIsXG4gICAgc3R5bGU6IHBvcHBlci5zdHlsZXMucG9wcGVyIGFzIGFueSxcbiAgfTtcblxuICBjb25zdCBtZXRhZGF0YTogVXNlRHJvcGRvd25NZW51TWV0YWRhdGEgPSB7XG4gICAgc2hvdyxcbiAgICBwbGFjZW1lbnQsXG4gICAgaGFzU2hvd246IGhhc1Nob3duUmVmLmN1cnJlbnQsXG4gICAgdG9nZ2xlOiBjb250ZXh0Py50b2dnbGUsXG4gICAgcG9wcGVyOiBzaG91bGRVc2VQb3BwZXIgPyBwb3BwZXIgOiBudWxsLFxuICAgIGFycm93UHJvcHM6IHNob3VsZFVzZVBvcHBlclxuICAgICAgPyB7XG4gICAgICAgICAgcmVmOiBhdHRhY2hBcnJvd1JlZixcbiAgICAgICAgICAuLi5wb3BwZXIuYXR0cmlidXRlcy5hcnJvdyxcbiAgICAgICAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5hcnJvdyBhcyBhbnksXG4gICAgICAgIH1cbiAgICAgIDoge30sXG4gIH07XG5cbiAgdXNlUm9vdENsb3NlKG1lbnVFbGVtZW50LCBoYW5kbGVDbG9zZSwge1xuICAgIGNsaWNrVHJpZ2dlcjogcm9vdENsb3NlRXZlbnQsXG4gICAgZGlzYWJsZWQ6ICFzaG93LFxuICB9KTtcblxuICByZXR1cm4gW21lbnVQcm9wcywgbWV0YWRhdGFdIGFzIGNvbnN0O1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHVzZVBvcHBlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25NZW51UHJvcHMgZXh0ZW5kcyBVc2VEcm9wZG93bk1lbnVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGEgTWVudSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgYmUgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgc2hvdzogYm9vbGVhbixcbiAgICogICBjbG9zZTogKD9TeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICogICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICogICB1cGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIGFyaWEtbGFiZWxsZWRieTogP3N0cmluZ1xuICAgKiAgIH0sXG4gICAqICAgYXJyb3dQcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBVc2VyRHJvcGRvd25NZW51UHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEFsc28gZXhwb3J0ZWQgYXMgYDxEcm9wZG93bi5NZW51PmAgZnJvbSBgRHJvcGRvd25gLlxuICpcbiAqIEBkaXNwbGF5TmFtZSBEcm9wZG93bk1lbnVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBjaGlsZHJlbiwgLi4ub3B0aW9ucyB9OiBEcm9wZG93bk1lbnVQcm9wcykge1xuICBjb25zdCBbcHJvcHMsIG1ldGFdID0gdXNlRHJvcGRvd25NZW51KG9wdGlvbnMpO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbihwcm9wcywgbWV0YSl9PC8+O1xufVxuXG5Ecm9wZG93bk1lbnUuZGlzcGxheU5hbWUgPSAnRHJvcGRvd25NZW51JztcblxuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU1NSU2FmZUlkIH0gZnJvbSAnLi9zc3InO1xuaW1wb3J0IERyb3Bkb3duQ29udGV4dCwgeyBEcm9wZG93bkNvbnRleHRWYWx1ZSB9IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcblxuZXhwb3J0IGNvbnN0IGlzUm9sZU1lbnUgPSAoZWw6IEhUTUxFbGVtZW50KSA9PlxuICBlbC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKT8udG9Mb3dlckNhc2UoKSA9PT0gJ21lbnUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICBpZDogc3RyaW5nO1xuICByZWY6IERyb3Bkb3duQ29udGV4dFZhbHVlWydzZXRUb2dnbGUnXTtcbiAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gICdhcmlhLWV4cGFuZGVkJzogYm9vbGVhbjtcbiAgJ2FyaWEtaGFzcG9wdXAnPzogdHJ1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhIHtcbiAgc2hvdzogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3Nob3cnXTtcbiAgdG9nZ2xlOiBEcm9wZG93bkNvbnRleHRWYWx1ZVsndG9nZ2xlJ107XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBXaXJlcyB1cCBEcm9wZG93biB0b2dnbGUgZnVuY3Rpb25hbGl0eSwgcmV0dXJuaW5nIGEgc2V0IGEgcHJvcHMgdG8gYXR0YWNoXG4gKiB0byB0aGUgZWxlbWVudCB0aGF0IGZ1bmN0aW9ucyBhcyB0aGUgZHJvcGRvd24gdG9nZ2xlIChnZW5lcmFsbHkgYSBidXR0b24pLlxuICpcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25Ub2dnbGUoKTogW1xuICBVc2VEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuXSB7XG4gIGNvbnN0IGlkID0gdXNlU1NSU2FmZUlkKCk7XG4gIGNvbnN0IHsgc2hvdyA9IGZhbHNlLCB0b2dnbGUgPSBub29wLCBzZXRUb2dnbGUsIG1lbnVFbGVtZW50IH0gPVxuICAgIHVzZUNvbnRleHQoRHJvcGRvd25Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgdG9nZ2xlKCFzaG93LCBlKTtcbiAgICB9LFxuICAgIFtzaG93LCB0b2dnbGVdLFxuICApO1xuXG4gIGNvbnN0IHByb3BzOiBVc2VEcm9wZG93blRvZ2dsZVByb3BzID0ge1xuICAgIGlkLFxuICAgIHJlZjogc2V0VG9nZ2xlIHx8IG5vb3AsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgJ2FyaWEtZXhwYW5kZWQnOiAhIXNob3csXG4gIH07XG5cbiAgLy8gVGhpcyBpcyBtYXliZSBiZXR0ZXIgZG93biBpbiBhbiBlZmZlY3QsIGJ1dFxuICAvLyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVwZGF0ZSBhbnl3YXkgd2hlbiB0aGUgbWVudSBlbGVtZW50XG4gIC8vIGlzIHNldCBzbyBtaWdodCByZXR1cm4gbmV3IHByb3BzLlxuICBpZiAobWVudUVsZW1lbnQgJiYgaXNSb2xlTWVudShtZW51RWxlbWVudCkpIHtcbiAgICBwcm9wc1snYXJpYS1oYXNwb3B1cCddID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBbcHJvcHMsIHsgc2hvdywgdG9nZ2xlIH1dO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYSBUb2dnbGUgZWxlbWVudC4gVGhlIGBwcm9wc2BcbiAgICogYXJndW1lbnQgc2hvdWxkIHNwcmVhZCB0aHJvdWdoIHRvICoqYSBjb21wb25lbnQgdGhhdCBjYW4gYWNjZXB0IGEgcmVmKiouIFVzZVxuICAgKiB0aGUgYG9uVG9nZ2xlYCBhcmd1bWVudCB0byB0b2dnbGUgdGhlIG1lbnUgb3BlbiBvciBjbG9zZWRcbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIGFyaWEtaGFzcG9wdXA6IHRydWVcbiAgICogICAgIGFyaWEtZXhwYW5kZWQ6IGJvb2xlYW5cbiAgICogICB9LFxuICAgKiAgIG1ldGE6IHtcbiAgICogICAgIHNob3c6IGJvb2xlYW4sXG4gICAqICAgICB0b2dnbGU6IChzaG93OiBib29sZWFuKSA9PiB2b2lkLFxuICAgKiAgIH1cbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLlRvZ2dsZT5gIGZyb20gYERyb3Bkb3duYC5cbiAqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25Ub2dnbGVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93blRvZ2dsZSh7IGNoaWxkcmVuIH06IERyb3Bkb3duVG9nZ2xlUHJvcHMpIHtcbiAgY29uc3QgW3Byb3BzLCBtZXRhXSA9IHVzZURyb3Bkb3duVG9nZ2xlKCk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHByb3BzLCBtZXRhKX08Lz47XG59XG5cbkRyb3Bkb3duVG9nZ2xlLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duVG9nZ2xlJztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duVG9nZ2xlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIE5hdkNvbnRleHRUeXBlIHtcbiAgcm9sZT86IHN0cmluZzsgLy8gdXNlZCBieSBOYXZJdGVtIHRvIGRldGVybWluZSBpdCdzIHJvbGVcbiAgYWN0aXZlS2V5OiBFdmVudEtleSB8IG51bGw7XG4gIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG4gIGdldENvbnRyb2xsZXJJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5hdkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5OYXZDb250ZXh0LmRpc3BsYXlOYW1lID0gJ05hdkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZDb250ZXh0O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgU2VsZWN0YWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFNlbGVjdENhbGxiYWNrIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCBtYWtlRXZlbnRLZXkgPSAoXG4gIGV2ZW50S2V5Pzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCxcbiAgaHJlZjogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGV2ZW50S2V5ICE9IG51bGwpIHJldHVybiBTdHJpbmcoZXZlbnRLZXkpO1xuICByZXR1cm4gaHJlZiB8fCBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0YWJsZUNvbnRleHQ7XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3RpdmVseSBmb2N1c2VkIGVsZW1lbnQgc2FmZWx5LlxuICpcbiAqIEBwYXJhbSBkb2MgdGhlIGRvY3VtZW50IHRvIGNoZWNrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZlRWxlbWVudChkb2MpIHtcbiAgaWYgKGRvYyA9PT0gdm9pZCAwKSB7XG4gICAgZG9jID0gb3duZXJEb2N1bWVudCgpO1xuICB9XG5cbiAgLy8gU3VwcG9ydDogSUUgOSBvbmx5XG4gIC8vIElFOSB0aHJvd3MgYW4gXCJVbnNwZWNpZmllZCBlcnJvclwiIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGZyb20gYW4gPGlmcmFtZT5cbiAgdHJ5IHtcbiAgICB2YXIgYWN0aXZlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7IC8vIElFMTEgcmV0dXJucyBhIHNlZW1pbmdseSBlbXB0eSBvYmplY3QgaW4gc29tZSBjYXNlcyB3aGVuIGFjY2Vzc2luZ1xuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgZnJvbSBhbiA8aWZyYW1lPlxuXG4gICAgaWYgKCFhY3RpdmUgfHwgIWFjdGl2ZS5ub2RlTmFtZSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGllIHRocm93cyBpZiBubyBhY3RpdmUgZWxlbWVudCAqL1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIHJlZiB0aGF0IGlzIGltbWVkaWF0ZWx5IHVwZGF0ZWQgd2l0aCB0aGUgbmV3IHZhbHVlXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBSZWYgdmFsdWVcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXBkYXRlZFJlZih2YWx1ZSkge1xuICB2YXIgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZVJlZjtcbn0iLCJpbXBvcnQgdXNlVXBkYXRlZFJlZiBmcm9tICcuL3VzZVVwZGF0ZWRSZWYnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0aGF0IGZpcmVzIHdoZW4gYSBjb21wb25lbnQgdW5tb3VudHNcbiAqXG4gKiBAcGFyYW0gZm4gSGFuZGxlciB0byBydW4gd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gKiBAY2F0ZWdvcnkgZWZmZWN0c1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbGxVbm1vdW50KGZuKSB7XG4gIHZhciBvblVubW91bnQgPSB1c2VVcGRhdGVkUmVmKGZuKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uVW5tb3VudC5jdXJyZW50KCk7XG4gICAgfTtcbiAgfSwgW10pO1xufSIsIi8qKlxuICogR2V0IHRoZSB3aWR0aCBvZiB0aGUgdmVydGljYWwgd2luZG93IHNjcm9sbGJhciBpZiBpdCdzIHZpc2libGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9keVNjcm9sbGJhcldpZHRoKCkge1xuICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xufVxuIiwiaW1wb3J0IGNzcyBmcm9tICdkb20taGVscGVycy9jc3MnO1xuaW1wb3J0IHsgZGF0YUF0dHIgfSBmcm9tICcuL0RhdGFLZXknO1xuaW1wb3J0IGdldEJvZHlTY3JvbGxiYXJXaWR0aCBmcm9tICcuL2dldFNjcm9sbGJhcldpZHRoJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEluc3RhbmNlIHtcbiAgZGlhbG9nOiBFbGVtZW50O1xuICBiYWNrZHJvcDogRWxlbWVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ29udGFpbmVyU3RhdGUgPSB7XG4gIHNjcm9sbEJhcldpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgT1BFTl9EQVRBX0FUVFJJQlVURSA9IGRhdGFBdHRyKCdtb2RhbC1vcGVuJyk7XG5cbi8qKlxuICogTWFuYWdlcyBhIHN0YWNrIG9mIE1vZGFscyBhcyB3ZWxsIGFzIGVuc3VyaW5nXG4gKiBib2R5IHNjcm9sbGluZyBpcyBpcyBkaXNhYmxlZCBhbmQgcGFkZGluZyBhY2NvdW50ZWQgZm9yXG4gKi9cbmNsYXNzIE1vZGFsTWFuYWdlciB7XG4gIHJlYWRvbmx5IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGlzUlRMOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IG1vZGFsczogTW9kYWxJbnN0YW5jZVtdO1xuXG4gIHByaXZhdGUgc3RhdGUhOiBDb250YWluZXJTdGF0ZTtcblxuICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gdHJ1ZSwgaXNSVEwgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3c7XG4gICAgdGhpcy5pc1JUTCA9IGlzUlRMO1xuICAgIHRoaXMubW9kYWxzID0gW107XG4gIH1cblxuICBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICByZXR1cm4gZ2V0Qm9keVNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc2V0TW9kYWxBdHRyaWJ1dGVzKF9tb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIC8vIEZvciBvdmVycmlkaW5nXG4gIH1cblxuICByZW1vdmVNb2RhbEF0dHJpYnV0ZXMoX21vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgLy8gRm9yIG92ZXJyaWRpbmdcbiAgfVxuXG4gIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlOiBDb250YWluZXJTdGF0ZSkge1xuICAgIGNvbnN0IHN0eWxlOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+ID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAgIC8vIHdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIGFjdHVhbCBgc3R5bGVgIGhlcmVcbiAgICAvLyBiZWNhdXNlIHdlIHdpbGwgb3ZlcnJpZGUgaXRcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRFbGVtZW50KCk7XG5cbiAgICBjb250YWluZXJTdGF0ZS5zdHlsZSA9IHtcbiAgICAgIG92ZXJmbG93OiBjb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBbcGFkZGluZ1Byb3BdOiBjb250YWluZXIuc3R5bGVbcGFkZGluZ1Byb3BdLFxuICAgIH07XG5cbiAgICBpZiAoY29udGFpbmVyU3RhdGUuc2Nyb2xsQmFyV2lkdGgpIHtcbiAgICAgIC8vIHVzZSBjb21wdXRlZCBzdHlsZSwgaGVyZSB0byBnZXQgdGhlIHJlYWwgcGFkZGluZ1xuICAgICAgLy8gdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGhcbiAgICAgIHN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke1xuICAgICAgICBwYXJzZUludChjc3MoY29udGFpbmVyLCBwYWRkaW5nUHJvcCkgfHwgJzAnLCAxMCkgK1xuICAgICAgICBjb250YWluZXJTdGF0ZS5zY3JvbGxCYXJXaWR0aFxuICAgICAgfXB4YDtcbiAgICB9XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShPUEVOX0RBVEFfQVRUUklCVVRFLCAnJyk7XG5cbiAgICBjc3MoY29udGFpbmVyLCBzdHlsZSBhcyBhbnkpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgWy4uLnRoaXMubW9kYWxzXS5mb3JFYWNoKChtKSA9PiB0aGlzLnJlbW92ZShtKSk7XG4gIH1cblxuICByZW1vdmVDb250YWluZXJTdHlsZShjb250YWluZXJTdGF0ZTogQ29udGFpbmVyU3RhdGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKE9QRU5fREFUQV9BVFRSSUJVVEUpO1xuICAgIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCBjb250YWluZXJTdGF0ZS5zdHlsZSk7XG4gIH1cblxuICBhZGQobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICBsZXQgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmxlbmd0aDtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgICB0aGlzLnNldE1vZGFsQXR0cmlidXRlcyhtb2RhbCk7XG4gICAgaWYgKG1vZGFsSWR4ICE9PSAwKSB7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbEJhcldpZHRoOiB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCksXG4gICAgICBzdHlsZToge30sXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICB0aGlzLnNldENvbnRhaW5lclN0eWxlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb2RhbElkeDtcbiAgfVxuXG4gIHJlbW92ZShtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIGNvbnN0IG1vZGFsSWR4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cbiAgICBpZiAobW9kYWxJZHggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSWR4LCAxKTtcblxuICAgIC8vIGlmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLFxuICAgIC8vIGNsZWFuIHVwIHRoZSBjb250YWluZXJcbiAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCAmJiB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lclN0eWxlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlTW9kYWxBdHRyaWJ1dGVzKG1vZGFsKTtcbiAgfVxuXG4gIGlzVG9wTW9kYWwobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLm1vZGFscy5sZW5ndGggJiYgdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIERPTUNvbnRhaW5lcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4gPVxuICB8IFRcbiAgfCBSZWFjdC5SZWZPYmplY3Q8VD5cbiAgfCBudWxsXG4gIHwgKCgpID0+IFQgfCBSZWFjdC5SZWZPYmplY3Q8VD4gfCBudWxsKTtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVDb250YWluZXJSZWYgPSA8VCBleHRlbmRzIEhUTUxFbGVtZW50PihcbiAgcmVmOiBET01Db250YWluZXI8VD4gfCB1bmRlZmluZWQsXG4pOiBUIHwgSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgaWYgKHJlZiA9PSBudWxsKSByZXR1cm4gb3duZXJEb2N1bWVudCgpLmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50O1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykgcmVmID0gcmVmKCk7XG5cbiAgaWYgKHJlZiAmJiAnY3VycmVudCcgaW4gcmVmKSByZWYgPSByZWYuY3VycmVudDtcbiAgaWYgKHJlZj8ubm9kZVR5cGUpIHJldHVybiByZWYgfHwgbnVsbDtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdhaXRGb3JET01SZWY8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICByZWY6IERPTUNvbnRhaW5lcjxUPiB8IHVuZGVmaW5lZCxcbiAgb25SZXNvbHZlZD86IChlbGVtZW50OiBUIHwgSFRNTEJvZHlFbGVtZW50KSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IFtyZXNvbHZlZFJlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKCgpID0+IHJlc29sdmVDb250YWluZXJSZWYocmVmKSk7XG5cbiAgaWYgKCFyZXNvbHZlZFJlZikge1xuICAgIGNvbnN0IGVhcmx5UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChlYXJseVJlZikgc2V0UmVmKGVhcmx5UmVmKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9uUmVzb2x2ZWQgJiYgcmVzb2x2ZWRSZWYpIHtcbiAgICAgIG9uUmVzb2x2ZWQocmVzb2x2ZWRSZWYpO1xuICAgIH1cbiAgfSwgW29uUmVzb2x2ZWQsIHJlc29sdmVkUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXh0UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChuZXh0UmVmICE9PSByZXNvbHZlZFJlZikge1xuICAgICAgc2V0UmVmKG5leHRSZWYpO1xuICAgIH1cbiAgfSwgW3JlZiwgcmVzb2x2ZWRSZWZdKTtcblxuICByZXR1cm4gcmVzb2x2ZWRSZWY7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUsIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuaW1wb3J0IGFjdGl2ZUVsZW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvYWN0aXZlRWxlbWVudCc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvY29udGFpbnMnO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICdkb20taGVscGVycy9jYW5Vc2VET00nO1xuaW1wb3J0IGxpc3RlbiBmcm9tICdkb20taGVscGVycy9saXN0ZW4nO1xuaW1wb3J0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIGZvcndhcmRSZWYsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlTW91bnRlZCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNb3VudGVkJztcbmltcG9ydCB1c2VXaWxsVW5tb3VudCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VXaWxsVW5tb3VudCc7XG5cbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSAnLi9Nb2RhbE1hbmFnZXInO1xuaW1wb3J0IHVzZVdhaXRGb3JET01SZWYsIHsgRE9NQ29udGFpbmVyIH0gZnJvbSAnLi91c2VXYWl0Rm9yRE9NUmVmJztcbmltcG9ydCB7IFRyYW5zaXRpb25DYWxsYmFja3MgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IG1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuZXhwb3J0IHR5cGUgTW9kYWxUcmFuc2l0aW9uQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50VHlwZTxcbiAge1xuICAgIGluOiBib29sZWFuO1xuICAgIGFwcGVhcj86IGJvb2xlYW47XG4gICAgdW5tb3VudE9uRXhpdD86IGJvb2xlYW47XG4gIH0gJiBUcmFuc2l0aW9uQ2FsbGJhY2tzXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck1vZGFsRGlhbG9nUHJvcHMge1xuICBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZDtcbiAgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRhYkluZGV4OiBudW1iZXI7XG4gIHJvbGU6IHN0cmluZztcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxFbGVtZW50PjtcbiAgJ2FyaWEtbW9kYWwnOiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck1vZGFsQmFja2Ryb3BQcm9wcyB7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8RWxlbWVudD47XG4gIG9uQ2xpY2s6IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHZvaWQ7XG59XG5cbi8qXG4gIE1vZGFsIHByb3BzIGFyZSBzcGxpdCBpbnRvIGEgdmVyc2lvbiB3aXRoIGFuZCB3aXRob3V0IGluZGV4IHNpZ25hdHVyZSBzbyB0aGF0IHlvdSBjYW4gZnVsbHkgdXNlIHRoZW0gaW4gYW5vdGhlciBwcm9qZWN0c1xuICBUaGlzIGlzIGR1ZSB0byBUeXBlc2NyaXB0IG5vdCBwbGF5aW5nIHdlbGwgd2l0aCBpbmRleCBzaW5nYXR1cmVzIGUuZy4gd2hlbiB1c2luZyBPbWl0XG4qL1xuZXhwb3J0IGludGVyZmFjZSBCYXNlTW9kYWxQcm9wcyBleHRlbmRzIFRyYW5zaXRpb25DYWxsYmFja3Mge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcm9sZT86IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgTW9kYWxcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogQSBET00gZWxlbWVudCwgYSBgcmVmYCB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgTW9kYWwgaXMgYXBwZW5kZWQgdG8gaXQncyBgY29udGFpbmVyYCBlbGVtZW50LlxuICAgKlxuICAgKi9cbiAgY29udGFpbmVyPzogRE9NQ29udGFpbmVyO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNb2RhbCBpcyBvcGVuaW5nLlxuICAgKi9cbiAgb25TaG93PzogKCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBlaXRoZXIgdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQsIG9yIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIFRoZSBgb25IaWRlYCBjYWxsYmFjayBvbmx5IHNpZ25hbHMgaW50ZW50IGZyb20gdGhlIE1vZGFsLFxuICAgKiB5b3UgbXVzdCBhY3R1YWxseSBzZXQgdGhlIGBzaG93YCBwcm9wIHRvIGBmYWxzZWAgZm9yIHRoZSBNb2RhbCB0byBjbG9zZS5cbiAgICovXG4gIG9uSGlkZT86ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgTW9kYWxNYW5hZ2VyIGluc3RhbmNlIHVzZWQgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgc3RhdGUgb2Ygb3BlblxuICAgKiBNb2RhbHMuIFVzZWZ1bCB3aGVuIGN1c3RvbWl6aW5nIGhvdyBtb2RhbHMgaW50ZXJhY3Qgd2l0aGluIGEgY29udGFpbmVyXG4gICAqL1xuICBtYW5hZ2VyPzogTW9kYWxNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGEgYmFja2Ryb3AgY29tcG9uZW50LiBBIGBzdGF0aWNgYmFja2Ryb3BcbiAgICogd2lsbCBub3QgdHJpZ2dlciBhIE1vZGFsIG9uSGlkZSB3aGVuIGNsaWNrZWQuXG4gICAqL1xuICBiYWNrZHJvcD86IHRydWUgfCBmYWxzZSB8ICdzdGF0aWMnO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGlhbG9nIGNvbXBvbmVudC4gVXNlZnVsIGZvciBjdXN0b21cbiAgICogcmVuZGVyaW5nLiAqKk5vdGU6KiogdGhlIGNvbXBvbmVudCBzaG91bGQgbWFrZSBzdXJlIHRvIGFwcGx5IHRoZSBwcm92aWRlZCByZWYuXG4gICAqXG4gICAqIGBgYGpzIHN0YXRpY1xuICAgKiByZW5kZXJEaWFsb2c9e3Byb3BzID0+IDxNeURpYWxvZyB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckRpYWxvZz86IChwcm9wczogUmVuZGVyTW9kYWxEaWFsb2dQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBiYWNrZHJvcCBjb21wb25lbnQuIFVzZWZ1bCBmb3IgY3VzdG9tXG4gICAqIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICpcbiAgICogYGBganNcbiAgICogIHJlbmRlckJhY2tkcm9wPXtwcm9wcyA9PiA8TXlCYWNrZHJvcCB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckJhY2tkcm9wPzogKHByb3BzOiBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSwgaWYgc3BlY2lmaWVkIGluIGBrZXlib2FyZGAsIGlzIHByZXNzZWQuXG4gICAqXG4gICAqIElmIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBrZXlib2FyZCBldmVudCwgY2xvc2luZyB0aGUgbW9kYWwgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd24/OiAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AsIGlmIHNwZWNpZmllZCwgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljaz86IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQgdXNlZFxuICAgKiB0byBjb250cm9sIGFuaW1hdGlvbnMgZm9yIHRoZSBkaWFsb2cgY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbj86IE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudDtcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudCB1c2VkXG4gICAqIHRvIGNvbnRyb2wgYW5pbWF0aW9ucyBmb3IgdGhlIGJhY2tkcm9wIGNvbXBvbmVudHMuXG4gICAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb24/OiBNb2RhbFRyYW5zaXRpb25Db21wb25lbnQ7XG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuIFRoaXMgYWxzb1xuICAgKiB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgTW9kYWwgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgYXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBNb2RhbCB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZW5mb3JjZUZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlblxuICAgKi9cbiAgcmVzdG9yZUZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3B0aW9ucyBwYXNzZWQgdG8gZm9jdXMgZnVuY3Rpb24gd2hlbiBgcmVzdG9yZUZvY3VzYCBpcyBzZXQgdG8gYHRydWVgXG4gICAqXG4gICAqIEBsaW5rICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvZm9jdXMjUGFyYW1ldGVyc1xuICAgKi9cbiAgcmVzdG9yZUZvY3VzT3B0aW9ucz86IHtcbiAgICBwcmV2ZW50U2Nyb2xsOiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJvcHMgZXh0ZW5kcyBCYXNlTW9kYWxQcm9wcyB7XG4gIFtvdGhlcjogc3RyaW5nXTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICBpZiAoIW1hbmFnZXIpIG1hbmFnZXIgPSBuZXcgTW9kYWxNYW5hZ2VyKCk7XG4gIHJldHVybiBtYW5hZ2VyO1xufVxuXG5mdW5jdGlvbiB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWQ/OiBNb2RhbE1hbmFnZXIpIHtcbiAgY29uc3QgbW9kYWxNYW5hZ2VyID0gcHJvdmlkZWQgfHwgZ2V0TWFuYWdlcigpO1xuXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVmKHtcbiAgICBkaWFsb2c6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gICAgYmFja2Ryb3A6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGFsLmN1cnJlbnQsIHtcbiAgICBhZGQ6ICgpID0+IG1vZGFsTWFuYWdlci5hZGQobW9kYWwuY3VycmVudCksXG5cbiAgICByZW1vdmU6ICgpID0+IG1vZGFsTWFuYWdlci5yZW1vdmUobW9kYWwuY3VycmVudCksXG5cbiAgICBpc1RvcE1vZGFsOiAoKSA9PiBtb2RhbE1hbmFnZXIuaXNUb3BNb2RhbChtb2RhbC5jdXJyZW50KSxcblxuICAgIHNldERpYWxvZ1JlZjogdXNlQ2FsbGJhY2soKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBtb2RhbC5jdXJyZW50LmRpYWxvZyA9IHJlZiE7XG4gICAgfSwgW10pLFxuXG4gICAgc2V0QmFja2Ryb3BSZWY6IHVzZUNhbGxiYWNrKChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgbW9kYWwuY3VycmVudC5iYWNrZHJvcCA9IHJlZiE7XG4gICAgfSwgW10pLFxuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhhbmRsZSB7XG4gIGRpYWxvZzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBiYWNrZHJvcDogSFRNTEVsZW1lbnQgfCBudWxsO1xufVxuXG5jb25zdCBNb2RhbDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgTW9kYWxQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8TW9kYWxIYW5kbGU+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIHNob3cgPSBmYWxzZSxcbiAgICAgIHJvbGUgPSAnZGlhbG9nJyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBiYWNrZHJvcCA9IHRydWUsXG4gICAgICBrZXlib2FyZCA9IHRydWUsXG4gICAgICBvbkJhY2tkcm9wQ2xpY2ssXG4gICAgICBvbkVzY2FwZUtleURvd24sXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uLFxuICAgICAgYXV0b0ZvY3VzID0gdHJ1ZSxcbiAgICAgIGVuZm9yY2VGb2N1cyA9IHRydWUsXG4gICAgICByZXN0b3JlRm9jdXMgPSB0cnVlLFxuICAgICAgcmVzdG9yZUZvY3VzT3B0aW9ucyxcbiAgICAgIHJlbmRlckRpYWxvZyxcbiAgICAgIHJlbmRlckJhY2tkcm9wID0gKHByb3BzOiBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMpID0+IDxkaXYgey4uLnByb3BzfSAvPixcbiAgICAgIG1hbmFnZXI6IHByb3ZpZGVkTWFuYWdlcixcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLFxuICAgICAgb25TaG93LFxuICAgICAgb25IaWRlID0gKCkgPT4ge30sXG5cbiAgICAgIG9uRXhpdCxcbiAgICAgIG9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQsXG5cbiAgICAgIC4uLnJlc3RcbiAgICB9OiBNb2RhbFByb3BzLFxuICAgIHJlZjogUmVhY3QuUmVmPE1vZGFsSGFuZGxlPixcbiAgKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdXNlV2FpdEZvckRPTVJlZihjb250YWluZXJSZWYpO1xuICAgIGNvbnN0IG1vZGFsID0gdXNlTW9kYWxNYW5hZ2VyKHByb3ZpZGVkTWFuYWdlcik7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkKCk7XG4gICAgY29uc3QgcHJldlNob3cgPSB1c2VQcmV2aW91cyhzaG93KTtcbiAgICBjb25zdCBbZXhpdGVkLCBzZXRFeGl0ZWRdID0gdXNlU3RhdGUoIXNob3cpO1xuICAgIGNvbnN0IGxhc3RGb2N1c1JlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IG1vZGFsLCBbbW9kYWxdKTtcblxuICAgIGlmIChjYW5Vc2VET00gJiYgIXByZXZTaG93ICYmIHNob3cpIHtcbiAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gYWN0aXZlRWxlbWVudCgpIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIGlmICghdHJhbnNpdGlvbiAmJiAhc2hvdyAmJiAhZXhpdGVkKSB7XG4gICAgICBzZXRFeGl0ZWQodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChzaG93ICYmIGV4aXRlZCkge1xuICAgICAgc2V0RXhpdGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTaG93ID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgICBtb2RhbC5hZGQoKTtcblxuICAgICAgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmLmN1cnJlbnQgPSBsaXN0ZW4oXG4gICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICBoYW5kbGVEb2N1bWVudEtleURvd24sXG4gICAgICApO1xuXG4gICAgICByZW1vdmVGb2N1c0xpc3RlbmVyUmVmLmN1cnJlbnQgPSBsaXN0ZW4oXG4gICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgLy8gdGhlIHRpbWVvdXQgaXMgbmVjZXNzYXJ5IGIvYyB0aGlzIHdpbGwgcnVuIGJlZm9yZSB0aGUgbmV3IG1vZGFsIGlzIG1vdW50ZWRcbiAgICAgICAgLy8gYW5kIHNvIHN0ZWFscyBmb2N1cyBmcm9tIGl0XG4gICAgICAgICgpID0+IHNldFRpbWVvdXQoaGFuZGxlRW5mb3JjZUZvY3VzKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChvblNob3cpIHtcbiAgICAgICAgb25TaG93KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9mb2N1cyBhZnRlciBvblNob3cgdG8gbm90IHRyaWdnZXIgYSBmb2N1cyBldmVudCBmb3IgcHJldmlvdXNcbiAgICAgIC8vIG1vZGFscyBiZWZvcmUgdGhpcyBvbmUgaXMgc2hvd24uXG4gICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudChkb2N1bWVudCkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGFsLmRpYWxvZyAmJlxuICAgICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgIWNvbnRhaW5zKG1vZGFsLmRpYWxvZywgY3VycmVudEFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICkge1xuICAgICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gY3VycmVudEFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgbW9kYWwuZGlhbG9nLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUhpZGUgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgICByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYuY3VycmVudD8uKCk7XG4gICAgICByZW1vdmVGb2N1c0xpc3RlbmVyUmVmLmN1cnJlbnQ/LigpO1xuXG4gICAgICBpZiAocmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IDw9SUUxMSBkb2Vzbid0IHN1cHBvcnQgYGZvY3VzKClgIG9uIHN2ZyBlbGVtZW50cyAoUkI6ICM5MTcpXG4gICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50Py5mb2N1cz8uKHJlc3RvcmVGb2N1c09wdGlvbnMpO1xuICAgICAgICBsYXN0Rm9jdXNSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiB0cnkgYW5kIGNvbWJpbmUgdGhlc2UgZWZmZWN0czogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1vdmVybGF5cy9wdWxsLzc5NCNkaXNjdXNzaW9uX3I0MDk5NTQxMjBcblxuICAgIC8vIFNob3cgbG9naWMgd2hlbjpcbiAgICAvLyAgLSBzaG93IGlzIGB0cnVlYCBfYW5kXyBgY29udGFpbmVyYCBoYXMgcmVzb2x2ZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKCFzaG93IHx8ICFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgaGFuZGxlU2hvdygpO1xuICAgIH0sIFtzaG93LCBjb250YWluZXIsIC8qIHNob3VsZCBuZXZlciBjaGFuZ2U6ICovIGhhbmRsZVNob3ddKTtcblxuICAgIC8vIEhpZGUgY2xlYW51cCBsb2dpYyB3aGVuOlxuICAgIC8vICAtIGBleGl0ZWRgIHN3aXRjaGVzIHRvIHRydWVcbiAgICAvLyAgLSBjb21wb25lbnQgdW5tb3VudHM7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghZXhpdGVkKSByZXR1cm47XG5cbiAgICAgIGhhbmRsZUhpZGUoKTtcbiAgICB9LCBbZXhpdGVkLCBoYW5kbGVIaWRlXSk7XG5cbiAgICB1c2VXaWxsVW5tb3VudCgoKSA9PiB7XG4gICAgICBoYW5kbGVIaWRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgaGFuZGxlRW5mb3JjZUZvY3VzID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoIWVuZm9yY2VGb2N1cyB8fCAhaXNNb3VudGVkKCkgfHwgIW1vZGFsLmlzVG9wTW9kYWwoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG1vZGFsLmRpYWxvZyAmJlxuICAgICAgICBjdXJyZW50QWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudClcbiAgICAgICkge1xuICAgICAgICBtb2RhbC5kaWFsb2cuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvbkJhY2tkcm9wQ2xpY2s/LihlKTtcblxuICAgICAgaWYgKGJhY2tkcm9wID09PSB0cnVlKSB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlRG9jdW1lbnRLZXlEb3duID0gdXNlRXZlbnRDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcgJiYgbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICAgIG9uRXNjYXBlS2V5RG93bj8uKGUpO1xuXG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgb25IaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgbGlzdGVuPiB8IG51bGw+KCk7XG4gICAgY29uc3QgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGxpc3Rlbj4gfCBudWxsPigpO1xuXG4gICAgY29uc3QgaGFuZGxlSGlkZGVuOiBUcmFuc2l0aW9uQ2FsbGJhY2tzWydvbkV4aXRlZCddID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICAgIG9uRXhpdGVkPy4oLi4uYXJncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIGlmICghY29udGFpbmVyIHx8ICEoc2hvdyB8fCAoVHJhbnNpdGlvbiAmJiAhZXhpdGVkKSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRpYWxvZ1Byb3BzID0ge1xuICAgICAgcm9sZSxcbiAgICAgIHJlZjogbW9kYWwuc2V0RGlhbG9nUmVmLFxuICAgICAgLy8gYXBwYXJlbnRseSBvbmx5IHdvcmtzIG9uIHRoZSBkaWFsb2cgcm9sZSBlbGVtZW50XG4gICAgICAnYXJpYS1tb2RhbCc6IHJvbGUgPT09ICdkaWFsb2cnID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIC4uLnJlc3QsXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICB9O1xuXG4gICAgbGV0IGRpYWxvZyA9IHJlbmRlckRpYWxvZyA/IChcbiAgICAgIHJlbmRlckRpYWxvZyhkaWFsb2dQcm9wcylcbiAgICApIDogKFxuICAgICAgPGRpdiB7Li4uZGlhbG9nUHJvcHN9PlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuISwgeyByb2xlOiAnZG9jdW1lbnQnIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgICBkaWFsb2cgPSAoXG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgIGluPXshIXNob3d9XG4gICAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUhpZGRlbn1cbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGlhbG9nfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBiYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgY29uc3QgQmFja2Ryb3BUcmFuc2l0aW9uID0gYmFja2Ryb3BUcmFuc2l0aW9uO1xuXG4gICAgICBiYWNrZHJvcEVsZW1lbnQgPSByZW5kZXJCYWNrZHJvcCh7XG4gICAgICAgIHJlZjogbW9kYWwuc2V0QmFja2Ryb3BSZWYsXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICB9KTtcblxuICAgICAgaWYgKEJhY2tkcm9wVHJhbnNpdGlvbikge1xuICAgICAgICBiYWNrZHJvcEVsZW1lbnQgPSAoXG4gICAgICAgICAgPEJhY2tkcm9wVHJhbnNpdGlvbiBhcHBlYXIgaW49eyEhc2hvd30+XG4gICAgICAgICAgICB7YmFja2Ryb3BFbGVtZW50fVxuICAgICAgICAgIDwvQmFja2Ryb3BUcmFuc2l0aW9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7UmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7YmFja2Ryb3BFbGVtZW50fVxuICAgICAgICAgICAge2RpYWxvZ31cbiAgICAgICAgICA8Lz4sXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbk1vZGFsLmRpc3BsYXlOYW1lID0gJ01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICBNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG59KTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbnZhciB0b0ZuUmVmID0gZnVuY3Rpb24gdG9GblJlZihyZWYpIHtcbiAgcmV0dXJuICFyZWYgfHwgdHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJyA/IHJlZiA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpIHtcbiAgdmFyIGEgPSB0b0ZuUmVmKHJlZkEpO1xuICB2YXIgYiA9IHRvRm5SZWYocmVmQik7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoYSkgYSh2YWx1ZSk7XG4gICAgaWYgKGIpIGIodmFsdWUpO1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybnMgYSBzaW5nbGUgY2FsbGJhY2sgcmVmIGNvbXBvc2VkIGZyb20gdHdvIG90aGVyIFJlZnMuXG4gKlxuICogYGBgdHN4XG4gKiBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XG4gKiAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnMocmVmLCBhdHRhY2hSZWYpO1xuICpcbiAqICAgcmV0dXJuIDxidXR0b24gcmVmPXttZXJnZWRSZWZ9IHsuLi5wcm9wc30vPlxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSByZWZBIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBwYXJhbSByZWZCIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcyhyZWZBLCByZWZCKSB7XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpO1xuICB9LCBbcmVmQSwgcmVmQl0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNZXJnZWRSZWZzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCB1c2VNZXJnZWRSZWZzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUG9wcGVyLCB7XG4gIE9mZnNldCxcbiAgUGxhY2VtZW50LFxuICBVc2VQb3BwZXJPcHRpb25zLFxuICBVc2VQb3BwZXJTdGF0ZSxcbn0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSwgeyBSb290Q2xvc2VPcHRpb25zIH0gZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IHVzZVdhaXRGb3JET01SZWYsIHsgRE9NQ29udGFpbmVyIH0gZnJvbSAnLi91c2VXYWl0Rm9yRE9NUmVmJztcbmltcG9ydCB7IFRyYW5zaXRpb25DYWxsYmFja3MgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnIGZyb20gJy4vbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUFycm93UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlNZXRhZGF0YSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudDogUGxhY2VtZW50IHwgdW5kZWZpbmVkO1xuICBwb3BwZXI6IFVzZVBvcHBlclN0YXRlIHwgbnVsbDtcbiAgYXJyb3dQcm9wczogUGFydGlhbDxPdmVybGF5QXJyb3dQcm9wcz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUluamVjdGVkUHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAnYXJpYS1sYWJlbGxlZGJ5Jz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5UHJvcHMgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzIHtcbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIFBvcHBlci5qcyBgZmxpcGAgbW9kaWZpZXIsIGFsbG93aW5nIHRoZSBPdmVybGF5IHRvXG4gICAqIGF1dG9tYXRpY2FsbHkgYWRqdXN0IGl0J3MgcGxhY2VtZW50IGluIGNhc2Ugb2Ygb3ZlcmxhcCB3aXRoIHRoZSB2aWV3cG9ydCBvciB0b2dnbGUuXG4gICAqIFJlZmVyIHRvIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnMuLmZsaXAuZW5hYmxlZCkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmxpcD86IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpZnkgd2hlcmUgdGhlIG92ZXJsYXkgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGluIHJlbGF0aW9uIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgb2Zmc2V0IG9mIHRoZSBvdmVybGF5IHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQSBjb252ZW5pZW5jZSBzaG9ydGN1dCB0byBzZXR0aW5nIGBwb3BwZXJDb25maWcubW9kZmllcnMub2Zmc2V0YFxuICAgKi9cbiAgb2Zmc2V0PzogT2Zmc2V0O1xuXG4gIC8qKlxuICAgKiBDb250cm9sIGhvdyBtdWNoIHNwYWNlIHRoZXJlIGlzIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIGJvdW5kYXJ5IGVsZW1lbnQgYW5kIG92ZXJsYXkuXG4gICAqIEEgY29udmVuaWVuY2Ugc2hvcnRjdXQgdG8gc2V0dGluZyBgcG9wcGVyQ29uZmlnLm1vZGZpZXJzLnByZXZlbnRPdmVyZmxvdy5wYWRkaW5nYFxuICAgKi9cbiAgY29udGFpbmVyUGFkZGluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogQSBzZXQgb2YgcG9wcGVyIG9wdGlvbnMgYW5kIHByb3BzIHBhc3NlZCBkaXJlY3RseSB0byByZWFjdC1wb3BwZXIncyBQb3BwZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcG9wcGVyQ29uZmlnPzogT21pdDxVc2VQb3BwZXJPcHRpb25zLCAncGxhY2VtZW50Jz47XG5cbiAgLyoqXG4gICAqIEEgRE9NIEVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBQb3J0YWwgY2hpbGRyZW5cbiAgICogYXBwZW5kZWQgdG8gaXQuXG4gICAqL1xuICBjb250YWluZXI/OiBET01Db250YWluZXI7XG5cbiAgLyoqXG4gICAqIEEgRE9NIEVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYHRhcmdldGAgZWxlbWVudCBpcyB3aGVyZVxuICAgKiB0aGUgb3ZlcmxheSBpcyBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvLlxuICAgKi9cbiAgdGFyZ2V0OiBET01Db250YWluZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgT3ZlcmxheVxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnRcbiAgICogdXNlZCB0byBhbmltYXRlIHRoZSBvdmVybGF5IGFzIGl0IGNoYW5nZXMgdmlzaWJpbGl0eS5cbiAgICovXG4gIHRyYW5zaXRpb24/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxuICAgIHsgaW4/OiBib29sZWFuOyBhcHBlYXI/OiBib29sZWFuIH0gJiBUcmFuc2l0aW9uQ2FsbGJhY2tzXG4gID47XG5cbiAgLyoqXG4gICAqIEEgQ2FsbGJhY2sgZmlyZWQgYnkgdGhlIE92ZXJsYXkgd2hlbiBpdCB3aXNoZXMgdG8gYmUgaGlkZGVuLlxuICAgKlxuICAgKiBfX3JlcXVpcmVkX18gd2hlbiBgcm9vdENsb3NlYCBpcyBgdHJ1ZWAuXG4gICAqXG4gICAqIEB0eXBlIGZ1bmNcbiAgICovXG4gIG9uSGlkZT86IChlOiBFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB0cmlnZ2VyIGBvbkhpZGVgIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgZGlzYWJsZWQgZm9yIGRpc2FibGUgUm9vdENsb3NlV3JhcHBlclxuICAgKi9cbiAgcm9vdENsb3NlRGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGV2ZW50IGZvciB0b2dnbGluZyBvdmVybGF5XG4gICAqL1xuICByb290Q2xvc2VFdmVudD86IFJvb3RDbG9zZU9wdGlvbnNbJ2NsaWNrVHJpZ2dlciddO1xuXG4gIC8qKlxuICAgKiBBIHJlbmRlciBwcm9wIHRoYXQgcmV0dXJucyBhbiBvdmVybGF5IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBPdmVybGF5SW5qZWN0ZWRQcm9wcyxcbiAgICBtZXRhOiBPdmVybGF5TWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEJ1aWx0IG9uIHRvcCBvZiBgUG9wcGVyLmpzYCwgdGhlIG92ZXJsYXkgY29tcG9uZW50IGlzXG4gKiBncmVhdCBmb3IgY3VzdG9tIHRvb2x0aXAgb3ZlcmxheXMuXG4gKi9cbmNvbnN0IE92ZXJsYXkgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBPdmVybGF5UHJvcHM+KFxuICAocHJvcHMsIG91dGVyUmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZmxpcCxcbiAgICAgIG9mZnNldCxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGNvbnRhaW5lclBhZGRpbmcsXG4gICAgICBwb3BwZXJDb25maWcgPSB7fSxcbiAgICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgW3Jvb3RFbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEVsZW1lbnQ+KCk7XG4gICAgY29uc3QgW2Fycm93RWxlbWVudCwgYXR0YWNoQXJyb3dSZWZdID0gdXNlQ2FsbGJhY2tSZWY8RWxlbWVudD4oKTtcbiAgICBjb25zdCBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzPEhUTUxFbGVtZW50IHwgbnVsbD4oYXR0YWNoUmVmLCBvdXRlclJlZik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKHByb3BzLmNvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0ID0gdXNlV2FpdEZvckRPTVJlZihwcm9wcy50YXJnZXQpO1xuXG4gICAgY29uc3QgW2V4aXRlZCwgc2V0RXhpdGVkXSA9IHVzZVN0YXRlKCFwcm9wcy5zaG93KTtcblxuICAgIGNvbnN0IHBvcHBlciA9IHVzZVBvcHBlcihcbiAgICAgIHRhcmdldCxcbiAgICAgIHJvb3RFbGVtZW50LFxuICAgICAgbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgZW5hYmxlRXZlbnRzOiAhIXByb3BzLnNob3csXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcgfHwgNSxcbiAgICAgICAgZmxpcCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhcnJvd0VsZW1lbnQsXG4gICAgICAgIHBvcHBlckNvbmZpZyxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgaWYgKGV4aXRlZCkgc2V0RXhpdGVkKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCFwcm9wcy50cmFuc2l0aW9uICYmICFleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVIaWRkZW46IFRyYW5zaXRpb25DYWxsYmFja3NbJ29uRXhpdGVkJ10gPSAoLi4uYXJncykgPT4ge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuXG4gICAgICBpZiAocHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgcHJvcHMub25FeGl0ZWQoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERvbid0IHVuLXJlbmRlciB0aGUgb3ZlcmxheSB3aGlsZSBpdCdzIHRyYW5zaXRpb25pbmcgb3V0LlxuICAgIGNvbnN0IG1vdW50T3ZlcmxheSA9IHByb3BzLnNob3cgfHwgKFRyYW5zaXRpb24gJiYgIWV4aXRlZCk7XG5cbiAgICB1c2VSb290Q2xvc2Uocm9vdEVsZW1lbnQsIHByb3BzLm9uSGlkZSEsIHtcbiAgICAgIGRpc2FibGVkOiAhcHJvcHMucm9vdENsb3NlIHx8IHByb3BzLnJvb3RDbG9zZURpc2FibGVkLFxuICAgICAgY2xpY2tUcmlnZ2VyOiBwcm9wcy5yb290Q2xvc2VFdmVudCxcbiAgICB9KTtcblxuICAgIGlmICghbW91bnRPdmVybGF5KSB7XG4gICAgICAvLyBEb24ndCBib3RoZXIgc2hvd2luZyBhbnl0aGluZyBpZiB3ZSBkb24ndCBoYXZlIHRvLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW4oXG4gICAgICB7XG4gICAgICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICAgICAgc3R5bGU6IHBvcHBlci5zdHlsZXMucG9wcGVyIGFzIGFueSxcbiAgICAgICAgcmVmOiBtZXJnZWRSZWYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwb3BwZXIsXG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgc2hvdzogISFwcm9wcy5zaG93LFxuICAgICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgICAgLi4ucG9wcGVyLmF0dHJpYnV0ZXMuYXJyb3csXG4gICAgICAgICAgc3R5bGU6IHBvcHBlci5zdHlsZXMuYXJyb3cgYXMgYW55LFxuICAgICAgICAgIHJlZjogYXR0YWNoQXJyb3dSZWYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBpZiAoVHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgeyBvbkV4aXQsIG9uRXhpdGluZywgb25FbnRlciwgb25FbnRlcmluZywgb25FbnRlcmVkIH0gPSBwcm9wcztcblxuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgaW49e3Byb3BzLnNob3d9XG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUhpZGRlbn1cbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgY29udGFpbmVyKSA6IG51bGw7XG4gIH0sXG4pO1xuXG5PdmVybGF5LmRpc3BsYXlOYW1lID0gJ092ZXJsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50LCBSZWYgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgUG9ydGFsIGNoaWxkcmVuXG4gICAqIGFwcGVuZGVkIHRvIGl0LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuXG4gIG9uUmVuZGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGNvbnRhaW5lcjogRE9NQ29udGFpbmVyO1xuICBvblJlbmRlcmVkPzogKGVsZW1lbnQ6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IFBvcnRhbCA9ICh7IGNvbnRhaW5lciwgY2hpbGRyZW4sIG9uUmVuZGVyZWQgfTogUG9ydGFsUHJvcHMpID0+IHtcbiAgY29uc3QgcmVzb2x2ZWRDb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKGNvbnRhaW5lciwgb25SZW5kZXJlZCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkQ29udGFpbmVyID8gKFxuICAgIDw+e1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcmVzb2x2ZWRDb250YWluZXIpfTwvPlxuICApIDogbnVsbDtcbn07XG5cblBvcnRhbC5kaXNwbGF5TmFtZSA9ICdQb3J0YWwnO1xuUG9ydGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJDb250ZXh0VHlwZSB7XG4gIG9uU2VsZWN0OiBhbnk7XG4gIGFjdGl2ZUtleTogYW55O1xuICB0cmFuc2l0aW9uOiBhbnk7XG4gIG1vdW50T25FbnRlcjogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdDogYm9vbGVhbjtcbiAgZ2V0Q29udHJvbGxlZElkOiAoa2V5OiBFdmVudEtleSkgPT4gYW55O1xuICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBhbnk7XG59XG5cbmNvbnN0IFRhYkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFRhYkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRleHQ7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHtcbiAgRXZlbnRLZXksXG4gIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50LFxuICBTZWxlY3RDYWxsYmFjayxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJvcHNcbiAgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiwgJ29uU2VsZWN0Jz4ge1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xufVxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIGFzOiBQcm9wVHlwZXMuYW55LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICdhcmlhLWNvbnRyb2xzJzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTmF2SXRlbU9wdGlvbnMge1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWQ/OiBzdHJpbmc7XG4gIHJvbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZJdGVtKHtcbiAga2V5LFxuICBvbkNsaWNrLFxuICBhY3RpdmUsXG4gIGlkLFxuICByb2xlLFxuICBkaXNhYmxlZCxcbn06IFVzZU5hdkl0ZW1PcHRpb25zKSB7XG4gIGNvbnN0IHBhcmVudE9uU2VsZWN0ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXG4gIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgY29uc3QgcHJvcHMgPSB7fSBhcyBhbnk7XG5cbiAgaWYgKG5hdkNvbnRleHQpIHtcbiAgICBpZiAoIXJvbGUgJiYgbmF2Q29udGV4dC5yb2xlID09PSAndGFibGlzdCcpIHByb3BzLnJvbGUgPSAndGFiJztcblxuICAgIGNvbnN0IGNvbnRleHRDb250cm9sbGVySWQgPSBuYXZDb250ZXh0LmdldENvbnRyb2xsZXJJZChrZXkgPz8gbnVsbCk7XG4gICAgY29uc3QgY29udGV4dENvbnRyb2xsZWRJZCA9IG5hdkNvbnRleHQuZ2V0Q29udHJvbGxlZElkKGtleSA/PyBudWxsKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcm9wc1tkYXRhQXR0cignZXZlbnQta2V5JyldID0ga2V5O1xuXG4gICAgcHJvcHMuaWQgPSBjb250ZXh0Q29udHJvbGxlcklkIHx8IGlkO1xuICAgIHByb3BzWydhcmlhLWNvbnRyb2xzJ10gPSBjb250ZXh0Q29udHJvbGxlZElkO1xuXG4gICAgaXNBY3RpdmUgPVxuICAgICAgYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGwgPyBuYXZDb250ZXh0LmFjdGl2ZUtleSA9PT0ga2V5IDogYWN0aXZlO1xuICB9XG5cbiAgaWYgKHByb3BzLnJvbGUgPT09ICd0YWInKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgcHJvcHNbJ2FyaWEtZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXSA9IGlzQWN0aXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIHByb3BzLm9uQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBvbkNsaWNrPy4oZSk7XG5cbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50T25TZWxlY3QgJiYgIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgcGFyZW50T25TZWxlY3Q/LihrZXksIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwcm9wcywgeyBpc0FjdGl2ZSB9XSBhcyBjb25zdDtcbn1cblxuY29uc3QgTmF2SXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIE5hdkl0ZW1Qcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIE5hdkl0ZW1Qcm9wcz4oXG4gICh7IGFzOiBDb21wb25lbnQgPSBCdXR0b24sIGV2ZW50S2V5LCBocmVmLCAuLi5vcHRpb25zIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VOYXZJdGVtKHtcbiAgICAgIGtleTogbWFrZUV2ZW50S2V5KGV2ZW50S2V5LCBocmVmKSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJvcHNbZGF0YUF0dHIoJ2FjdGl2ZScpXSA9IG1ldGEuaXNBY3RpdmU7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ub3B0aW9uc30gey4uLnByb3BzfSByZWY9e3JlZn0gLz47XG4gIH0sXG4pO1xuXG5OYXZJdGVtLmRpc3BsYXlOYW1lID0gJ05hdkl0ZW0nO1xuTmF2SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iLCJpbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZvcmNlVXBkYXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUZvcmNlVXBkYXRlJztcbmltcG9ydCB1c2VNZXJnZWRSZWZzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnMnO1xuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQge1xuICBFdmVudEtleSxcbiAgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQsXG4gIFNlbGVjdENhbGxiYWNrLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyLCBkYXRhUHJvcCB9IGZyb20gJy4vRGF0YUtleSc7XG5pbXBvcnQgTmF2SXRlbSwgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH0gZnJvbSAnLi9OYXZJdGVtJztcblxuZXhwb3J0IHR5cGUgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQHByaXZhdGUgKi9cbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlByb3BzXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sICdvblNlbGVjdCc+IHtcbiAgYWN0aXZlS2V5PzogRXZlbnRLZXk7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG59XG5cbmNvbnN0IEVWRU5UX0tFWV9BVFRSID0gZGF0YUF0dHIoJ2V2ZW50LWtleScpO1xuXG5jb25zdCBOYXY6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PCdkaXYnLCBOYXZQcm9wcz4gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRWxlbWVudCxcbiAgTmF2UHJvcHNcbj4oXG4gIChcbiAgICB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHJvbGUsXG4gICAgICBvbktleURvd24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmLFxuICApID0+IHtcbiAgICAvLyBBIHJlZiBhbmQgZm9yY2VVcGRhdGUgZm9yIHJlZm9jdXMsIGIvYyB3ZSBvbmx5IHdhbnQgdG8gdHJpZ2dlciB3aGVuIG5lZWRlZFxuICAgIC8vIGFuZCBkb24ndCB3YW50IHRvIHJlc2V0IHRoZSBzZXQgaW4gdGhlIGVmZmVjdFxuICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICBjb25zdCBuZWVkc1JlZm9jdXNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgY29uc3QgcGFyZW50T25TZWxlY3QgPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcbiAgICBjb25zdCB0YWJDb250ZXh0ID0gdXNlQ29udGV4dChUYWJDb250ZXh0KTtcblxuICAgIGxldCBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZDtcblxuICAgIGlmICh0YWJDb250ZXh0KSB7XG4gICAgICByb2xlID0gcm9sZSB8fCAndGFibGlzdCc7XG4gICAgICBhY3RpdmVLZXkgPSB0YWJDb250ZXh0LmFjdGl2ZUtleTtcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gZHVwbGljYXRlIHRoZXNlP1xuICAgICAgZ2V0Q29udHJvbGxlZElkID0gdGFiQ29udGV4dC5nZXRDb250cm9sbGVkSWQ7XG4gICAgICBnZXRDb250cm9sbGVySWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0Tm9kZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBnZXROZXh0QWN0aXZlVGFiID0gKG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50TGlzdE5vZGUgPSBsaXN0Tm9kZS5jdXJyZW50O1xuICAgICAgaWYgKCFjdXJyZW50TGlzdE5vZGUpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpdGVtcyA9IHFzYShcbiAgICAgICAgY3VycmVudExpc3ROb2RlLFxuICAgICAgICBgWyR7RVZFTlRfS0VZX0FUVFJ9XTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pYCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNoaWxkID0gY3VycmVudExpc3ROb2RlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAnW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nLFxuICAgICAgKTtcbiAgICAgIGlmICghYWN0aXZlQ2hpbGQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoYWN0aXZlQ2hpbGQpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIG9mZnNldDtcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gaXRlbXMubGVuZ3RoKSBuZXh0SW5kZXggPSAwO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm4gaXRlbXNbbmV4dEluZGV4XTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGtleTogc3RyaW5nIHwgbnVsbCwgZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBpZiAoa2V5ID09IG51bGwpIHJldHVybjtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgICBwYXJlbnRPblNlbGVjdD8uKGtleSwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgICAgb25LZXlEb3duPy4oZXZlbnQpO1xuXG4gICAgICBpZiAoIXRhYkNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV4dEFjdGl2ZUNoaWxkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgbmV4dEFjdGl2ZUNoaWxkID0gZ2V0TmV4dEFjdGl2ZVRhYigtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIG5leHRBY3RpdmVDaGlsZCA9IGdldE5leHRBY3RpdmVUYWIoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0QWN0aXZlQ2hpbGQpIHJldHVybjtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlU2VsZWN0KFxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQuZGF0YXNldFtkYXRhUHJvcCgnRXZlbnRLZXknKV0gfHwgbnVsbCxcbiAgICAgICAgZXZlbnQsXG4gICAgICApO1xuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGxpc3ROb2RlLmN1cnJlbnQgJiYgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2hpbGQgPSBsaXN0Tm9kZS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgIGBbJHtFVkVOVF9LRVlfQVRUUn1dW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV1gLFxuICAgICAgICApO1xuXG4gICAgICAgIGFjdGl2ZUNoaWxkPy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGxpc3ROb2RlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIDxOYXZDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIHJvbGUsIC8vIHVzZWQgYnkgTmF2TGluayB0byBkZXRlcm1pbmUgaXQncyByb2xlXG4gICAgICAgICAgICBhY3RpdmVLZXk6IG1ha2VFdmVudEtleShhY3RpdmVLZXkpLFxuICAgICAgICAgICAgZ2V0Q29udHJvbGxlZElkOiBnZXRDb250cm9sbGVkSWQgfHwgbm9vcCxcbiAgICAgICAgICAgIGdldENvbnRyb2xsZXJJZDogZ2V0Q29udHJvbGxlcklkIHx8IG5vb3AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgIHJlZj17bWVyZ2VkUmVmfVxuICAgICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5OYXYuZGlzcGxheU5hbWUgPSAnTmF2Jztcbk5hdi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oTmF2LCB7IEl0ZW06IE5hdkl0ZW0gfSk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBOb29wVHJhbnNpdGlvbih7XG4gIGNoaWxkcmVuLFxuICBpbjogaW5Qcm9wLFxuICBtb3VudE9uRW50ZXIsXG4gIHVubW91bnRPbkV4aXQsXG59OiBUcmFuc2l0aW9uUHJvcHMpIHtcbiAgY29uc3QgaGFzRW50ZXJlZFJlZiA9IHVzZVJlZihpblByb3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluUHJvcCkgaGFzRW50ZXJlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW2luUHJvcF0pO1xuXG4gIGlmIChpblByb3ApIHJldHVybiBjaGlsZHJlbjtcblxuICAvLyBub3QgaW5cbiAgLy9cbiAgLy8gaWYgKCFtb3VudE9uRW50ZXIgJiYgIXVubW91bnRPbkV4aXQpIHtcbiAgLy8gICByZXR1cm4gY2hpbGRyZW47XG4gIC8vIH1cbiAgaWYgKHVubW91bnRPbkV4aXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWhhc0VudGVyZWRSZWYuY3VycmVudCAmJiBtb3VudE9uRW50ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9vcFRyYW5zaXRpb247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7XG4gIEV2ZW50S2V5LFxuICBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCxcbiAgVHJhbnNpdGlvbkNhbGxiYWNrcyxcbiAgVHJhbnNpdGlvblR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IE5vb3BUcmFuc2l0aW9uIGZyb20gJy4vTm9vcFRyYW5zaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlBhbmVsUHJvcHNcbiAgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzLFxuICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIGFzOiBSZWFjdC5FbGVtZW50VHlwZTtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xuICBtb3VudE9uRW50ZXI/OiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBIGtleSB0aGF0IGFzc29jaWF0ZXMgdGhlIGBUYWJQYW5lbGAgd2l0aCBpdCdzIGNvbnRyb2xsaW5nIGBOYXZMaW5rYC5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgVGFiUGFuZWwsIHRoaXMgaXMgZ2VuZXJhbGx5IGNvbnRyb2xsZWQgYnkgYVxuICAgKiBUYWJDb250YWluZXIuXG4gICAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgYW5pbWF0aW9uIHdoZW4gc2hvd2luZyBvciBoaWRpbmcgYDxUYWJQYW5lbD5gcy4gRGVmYXVsdHMgdG8gYDxGYWRlPmBcbiAgICogYW5pbWF0aW9uLCBlbHNlIHVzZSBgZmFsc2VgIHRvIGRpc2FibGUgb3IgYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwXG4gICAqIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlciBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmluZyBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmVkIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRXhpdCBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkV4aXRpbmcgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FeGl0ZWQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgZmlyc3QgXCJlbnRlclwiIHRyYW5zaXRpb24gdG8gbW91bnQgdGhlIHRhYiAoYWRkIGl0IHRvIHRoZSBET00pXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVbm1vdW50IHRoZSB0YWIgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIHZpc2libGVcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBAaWdub3JlICogKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKiAqL1xuICAnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmZ1bmN0aW9uIHVzZVRhYkNvbnRleHQocHJvcHM6IFRhYlBhbmVsUHJvcHMpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGFiQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gcHJvcHM7XG5cbiAgY29uc3QgeyBhY3RpdmVLZXksIGdldENvbnRyb2xsZWRJZCwgZ2V0Q29udHJvbGxlcklkLCAuLi5yZXN0IH0gPSBjb250ZXh0O1xuICBjb25zdCBzaG91bGRUcmFuc2l0aW9uID1cbiAgICBwcm9wcy50cmFuc2l0aW9uICE9PSBmYWxzZSAmJiByZXN0LnRyYW5zaXRpb24gIT09IGZhbHNlO1xuXG4gIGNvbnN0IGtleSA9IG1ha2VFdmVudEtleShwcm9wcy5ldmVudEtleSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICBhY3RpdmU6XG4gICAgICBwcm9wcy5hY3RpdmUgPT0gbnVsbCAmJiBrZXkgIT0gbnVsbFxuICAgICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBrZXlcbiAgICAgICAgOiBwcm9wcy5hY3RpdmUsXG4gICAgaWQ6IGdldENvbnRyb2xsZWRJZChwcm9wcy5ldmVudEtleSEpLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiBnZXRDb250cm9sbGVySWQocHJvcHMuZXZlbnRLZXkhKSxcbiAgICB0cmFuc2l0aW9uOiBzaG91bGRUcmFuc2l0aW9uICYmIChwcm9wcy50cmFuc2l0aW9uIHx8IHJlc3QudHJhbnNpdGlvbiksXG4gICAgbW91bnRPbkVudGVyOlxuICAgICAgcHJvcHMubW91bnRPbkVudGVyICE9IG51bGwgPyBwcm9wcy5tb3VudE9uRW50ZXIgOiByZXN0Lm1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0OlxuICAgICAgcHJvcHMudW5tb3VudE9uRXhpdCAhPSBudWxsID8gcHJvcHMudW5tb3VudE9uRXhpdCA6IHJlc3QudW5tb3VudE9uRXhpdCxcbiAgfTtcbn1cblxuY29uc3QgVGFiUGFuZWw6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PFxuICAnZGl2JyxcbiAgVGFiUGFuZWxQcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIFRhYlBhbmVsUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb25FbnRlcixcbiAgICBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZCxcbiAgICBvbkV4aXQsXG4gICAgb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkLFxuICAgIG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0LFxuICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24gPSBOb29wVHJhbnNpdGlvbixcbiAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAgIGV2ZW50S2V5OiBfLFxuICAgIC4uLnJlc3RcbiAgfSA9IHVzZVRhYkNvbnRleHQocHJvcHMpO1xuXG4gIGlmICghYWN0aXZlICYmICFUcmFuc2l0aW9uICYmIHVubW91bnRPbkV4aXQpIHJldHVybiBudWxsO1xuXG4gIGxldCBwYW5lID0gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXshYWN0aXZlfVxuICAgICAgYXJpYS1oaWRkZW49eyFhY3RpdmV9XG4gICAgLz5cbiAgKTtcblxuICBpZiAoVHJhbnNpdGlvbikge1xuICAgIHBhbmUgPSAoXG4gICAgICA8VHJhbnNpdGlvblxuICAgICAgICBpbj17YWN0aXZlfVxuICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICBvbkVudGVyaW5nPXtvbkVudGVyaW5nfVxuICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgIG9uRXhpdGluZz17b25FeGl0aW5nfVxuICAgICAgICBvbkV4aXRlZD17b25FeGl0ZWR9XG4gICAgICAgIG1vdW50T25FbnRlcj17bW91bnRPbkVudGVyfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt1bm1vdW50T25FeGl0fVxuICAgICAgPlxuICAgICAgICB7cGFuZX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApO1xuICB9XG4gIC8vIFdlIHByb3ZpZGUgYW4gZW1wdHkgdGhlIFRhYkNvbnRleHQgc28gYDxOYXY+YHMgaW4gYDxUYWJQYW5lbD5gcyBkb24ndFxuICAvLyBjb25mbGljdCB3aXRoIHRoZSB0b3AgbGV2ZWwgb25lLlxuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICAgIHtwYW5lfVxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RhYkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59KTtcblxuVGFiUGFuZWwuZGlzcGxheU5hbWUgPSAnVGFiUGFuZWwnO1xuVGFiUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lbDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB7IHVzZVNTUlNhZmVJZCB9IGZyb20gJy4vc3NyJztcblxuaW1wb3J0IFRhYkNvbnRleHQsIHsgVGFiQ29udGV4dFR5cGUgfSBmcm9tICcuL1RhYkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHsgRXZlbnRLZXksIFNlbGVjdENhbGxiYWNrLCBUcmFuc2l0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFRhYlBhbmVsLCB7IFRhYlBhbmVsUHJvcHMgfSBmcm9tICcuL1RhYlBhbmVsJztcblxuZXhwb3J0IHR5cGUgeyBUYWJQYW5lbFByb3BzIH07XG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHVua25vd24+IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb24/OiBUcmFuc2l0aW9uVHlwZTtcbiAgbW91bnRPbkVudGVyPzogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdD86IGJvb2xlYW47XG4gIGdlbmVyYXRlQ2hpbGRJZD86IChldmVudEtleTogRXZlbnRLZXksIHR5cGU6ICd0YWInIHwgJ3BhbmUnKSA9PiBzdHJpbmc7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG4gIGFjdGl2ZUtleT86IEV2ZW50S2V5O1xuICBkZWZhdWx0QWN0aXZlS2V5PzogRXZlbnRLZXk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTZXRzIGEgZGVmYXVsdCBhbmltYXRpb24gc3RyYXRlZ3kgZm9yIGFsbCBjaGlsZHJlbiBgPFRhYlBhbmU+YHMuXG4gICAqIFVzZSBhIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge3tUcmFuc2l0aW9uIHwgZmFsc2V9fVxuICAgKiBAZGVmYXVsdCB7RmFkZX1cbiAgICovXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKSxcbiAgICBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIF0pLFxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgZmlyc3QgXCJlbnRlclwiIHRyYW5zaXRpb24gdG8gbW91bnQgdGFicyAoYWRkIHRoZW0gdG8gdGhlIERPTSlcbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGFicyAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiB0aGV5IGFyZSBubyBsb25nZXIgdmlzaWJsZVxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBgZXZlbnRLZXlgIGFuZCBgdHlwZWAgYW5kIHJldHVybnMgYSB1bmlxdWUgaWQgZm9yXG4gICAqIGNoaWxkIHRhYiBgPE5hdkl0ZW0+YHMgYW5kIGA8VGFiUGFuZT5gcy4gVGhlIGZ1bmN0aW9uIF9tdXN0XyBiZSBhIHB1cmVcbiAgICogZnVuY3Rpb24sIG1lYW5pbmcgaXQgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIF9zYW1lXyBpZCBmb3IgdGhlIHNhbWUgc2V0XG4gICAqIG9mIGlucHV0cy4gVGhlIGRlZmF1bHQgdmFsdWUgcmVxdWlyZXMgdGhhdCBhbiBgaWRgIHRvIGJlIHNldCBmb3IgdGhlXG4gICAqIGA8VGFiQ29udGFpbmVyPmAuXG4gICAqXG4gICAqIFRoZSBgdHlwZWAgYXJndW1lbnQgd2lsbCBlaXRoZXIgYmUgYFwidGFiXCJgIG9yIGBcInBhbmVcImAuXG4gICAqXG4gICAqIEBkZWZhdWx0VmFsdWUgKGV2ZW50S2V5LCB0eXBlKSA9PiBgJHtwcm9wcy5pZH0tJHt0eXBlfS0ke2V2ZW50S2V5fWBcbiAgICovXG4gIGdlbmVyYXRlQ2hpbGRJZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIHRhYiBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBhY3RpdmVLZXlcbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGBldmVudEtleWAgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uU2VsZWN0XG4gICAqL1xuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbmNvbnN0IFRhYnMgPSAocHJvcHM6IFRhYnNQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQ6IHVzZXJJZCxcbiAgICBnZW5lcmF0ZUNoaWxkSWQ6IGdlbmVyYXRlQ3VzdG9tQ2hpbGRJZCxcbiAgICBvblNlbGVjdDogcHJvcHNPblNlbGVjdCxcbiAgICBhY3RpdmVLZXk6IHByb3BzQWN0aXZlS2V5LFxuICAgIGRlZmF1bHRBY3RpdmVLZXksXG4gICAgdHJhbnNpdGlvbixcbiAgICBtb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdCxcbiAgICBjaGlsZHJlbixcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFthY3RpdmVLZXksIG9uU2VsZWN0XSA9IHVzZVVuY29udHJvbGxlZFByb3AoXG4gICAgcHJvcHNBY3RpdmVLZXksXG4gICAgZGVmYXVsdEFjdGl2ZUtleSxcbiAgICBwcm9wc09uU2VsZWN0LFxuICApO1xuXG4gIGNvbnN0IGlkID0gdXNlU1NSU2FmZUlkKHVzZXJJZCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVDaGlsZElkID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2VuZXJhdGVDdXN0b21DaGlsZElkIHx8XG4gICAgICAoKGtleTogRXZlbnRLZXksIHR5cGU6IHN0cmluZykgPT4gKGlkID8gYCR7aWR9LSR7dHlwZX0tJHtrZXl9YCA6IG51bGwpKSxcbiAgICBbaWQsIGdlbmVyYXRlQ3VzdG9tQ2hpbGRJZF0sXG4gICk7XG5cbiAgY29uc3QgdGFiQ29udGV4dDogVGFiQ29udGV4dFR5cGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBtb3VudE9uRW50ZXI6IG1vdW50T25FbnRlciB8fCBmYWxzZSxcbiAgICAgIHVubW91bnRPbkV4aXQ6IHVubW91bnRPbkV4aXQgfHwgZmFsc2UsXG4gICAgICBnZXRDb250cm9sbGVkSWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBnZW5lcmF0ZUNoaWxkSWQoa2V5LCAndGFicGFuZScpLFxuICAgICAgZ2V0Q29udHJvbGxlcklkOiAoa2V5OiBFdmVudEtleSkgPT4gZ2VuZXJhdGVDaGlsZElkKGtleSwgJ3RhYicpLFxuICAgIH0pLFxuICAgIFtcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5LFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIG1vdW50T25FbnRlcixcbiAgICAgIHVubW91bnRPbkV4aXQsXG4gICAgICBnZW5lcmF0ZUNoaWxkSWQsXG4gICAgXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0YWJDb250ZXh0fT5cbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17b25TZWxlY3QgfHwgbnVsbH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UYWJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuVGFicy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UYWJzLlBhbmVsID0gVGFiUGFuZWw7XG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25NZW51IH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25Ub2dnbGUgfSBmcm9tICcuL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCB7IHVzZURyb3Bkb3duSXRlbSB9IGZyb20gJy4vRHJvcGRvd25JdGVtJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vUG9ydGFsJztcbmltcG9ydCB1c2VSb290Q2xvc2UgZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG5pbXBvcnQgTmF2SXRlbSwgeyB1c2VOYXZJdGVtIH0gZnJvbSAnLi9OYXZJdGVtJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJztcbmltcG9ydCBUYWJQYW5lbCBmcm9tICcuL1RhYlBhbmVsJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uLFxuICBEcm9wZG93bixcbiAgdXNlRHJvcGRvd25NZW51LFxuICB1c2VEcm9wZG93blRvZ2dsZSxcbiAgdXNlRHJvcGRvd25JdGVtLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIHVzZU5hdkl0ZW0sXG4gIE1vZGFsLFxuICBPdmVybGF5LFxuICBQb3J0YWwsXG4gIHVzZVJvb3RDbG9zZSxcbiAgVGFicyxcbiAgVGFiUGFuZWwsXG59O1xuXG5leHBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHR5cGUge1xuICBEcm9wZG93blByb3BzLFxuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG4gIERyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gIERyb3Bkb3duSXRlbVByb3BzLFxufSBmcm9tICcuL0Ryb3Bkb3duJztcbmV4cG9ydCB0eXBlIHsgTmF2SXRlbVByb3BzLCBVc2VOYXZJdGVtT3B0aW9ucywgTmF2UHJvcHMgfSBmcm9tICcuL05hdic7XG5leHBvcnQgdHlwZSB7IE1vZGFsUHJvcHMgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB0eXBlIHsgT3ZlcmxheVByb3BzIH0gZnJvbSAnLi9PdmVybGF5JztcbmV4cG9ydCB0eXBlIHsgUG9ydGFsUHJvcHMgfSBmcm9tICcuL1BvcnRhbCc7XG5leHBvcnQgdHlwZSB7IFRhYnNQcm9wcywgVGFiUGFuZWxQcm9wcyB9IGZyb20gJy4vVGFicyc7XG4iLCJpbXBvcnQgeyBVc2VQb3BwZXJPcHRpb25zLCBPZmZzZXQsIFBsYWNlbWVudCwgTW9kaWZpZXJzIH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSBDb25maWcgPSB7XG4gIGZsaXA/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIGFsaWduRW5kPzogYm9vbGVhbjtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBudW1iZXI7XG4gIGFycm93RWxlbWVudD86IEVsZW1lbnQgfCBudWxsO1xuICBlbmFibGVFdmVudHM/OiBib29sZWFuO1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgcG9wcGVyQ29uZmlnPzogVXNlUG9wcGVyT3B0aW9ucztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyTWFwKG1vZGlmaWVyczogTW9kaWZpZXJzIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHJlc3VsdDogTW9kaWZpZXJzID0ge307XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzIHx8IHJlc3VsdDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgbW9kaWZpZXJzPy5mb3JFYWNoKChtKSA9PiB7XG4gICAgcmVzdWx0W20ubmFtZSFdID0gbTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyQXJyYXkobWFwOiBNb2RpZmllcnMgfCB1bmRlZmluZWQgPSB7fSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXApKSByZXR1cm4gbWFwO1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5tYXAoKGspID0+IHtcbiAgICBtYXBba10ubmFtZSA9IGs7XG4gICAgcmV0dXJuIG1hcFtrXTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcoe1xuICBlbmFibGVkLFxuICBlbmFibGVFdmVudHMsXG4gIHBsYWNlbWVudCxcbiAgZmxpcCxcbiAgb2Zmc2V0LFxuICBmaXhlZCxcbiAgY29udGFpbmVyUGFkZGluZyxcbiAgYXJyb3dFbGVtZW50LFxuICBwb3BwZXJDb25maWcgPSB7fSxcbn06IENvbmZpZyk6IFVzZVBvcHBlck9wdGlvbnMge1xuICBjb25zdCBtb2RpZmllcnMgPSB0b01vZGlmaWVyTWFwKHBvcHBlckNvbmZpZy5tb2RpZmllcnMpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucG9wcGVyQ29uZmlnLFxuICAgIHBsYWNlbWVudCxcbiAgICBlbmFibGVkLFxuICAgIHN0cmF0ZWd5OiBmaXhlZCA/ICdmaXhlZCcgOiBwb3BwZXJDb25maWcuc3RyYXRlZ3ksXG4gICAgbW9kaWZpZXJzOiB0b01vZGlmaWVyQXJyYXkoe1xuICAgICAgLi4ubW9kaWZpZXJzLFxuICAgICAgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlRXZlbnRzLFxuICAgICAgfSxcbiAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAuLi5tb2RpZmllcnMucHJldmVudE92ZXJmbG93LFxuICAgICAgICBvcHRpb25zOiBjb250YWluZXJQYWRkaW5nXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgICAgIC4uLm1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3c/Lm9wdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBtb2RpZmllcnMucHJldmVudE92ZXJmbG93Py5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIC4uLm1vZGlmaWVycy5vZmZzZXQ/Lm9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgLi4ubW9kaWZpZXJzLmFycm93LFxuICAgICAgICBlbmFibGVkOiAhIWFycm93RWxlbWVudCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLm1vZGlmaWVycy5hcnJvdz8ub3B0aW9ucyxcbiAgICAgICAgICBlbGVtZW50OiBhcnJvd0VsZW1lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmxpcDoge1xuICAgICAgICBlbmFibGVkOiAhIWZsaXAsXG4gICAgICAgIC4uLm1vZGlmaWVycy5mbGlwLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbn1cbiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBmaW5kKGl0ZXIsIHRhciwga2V5KSB7XG5cdGZvciAoa2V5IG9mIGl0ZXIua2V5cygpKSB7XG5cdFx0aWYgKGRlcXVhbChrZXksIHRhcikpIHJldHVybiBrZXk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5cbmZ1bmN0aW9uIHVzZVNhZmVTdGF0ZShzdGF0ZSkge1xuICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICByZXR1cm4gW3N0YXRlWzBdLCB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgaWYgKCFpc01vdW50ZWQoKSkgcmV0dXJuO1xuICAgIHJldHVybiBzdGF0ZVsxXShuZXh0U3RhdGUpO1xuICB9LCBbaXNNb3VudGVkLCBzdGF0ZVsxXV0pXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2FmZVN0YXRlOyIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgYXJyb3cgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdyc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGZsaXAgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwJztcbmltcG9ydCBoaWRlIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZSc7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0JztcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93JztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvZW51bXMnO1xuaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1iYXNlJztcblxuLy8gRm9yIHRoZSBjb21tb24gSlMgYnVpbGQgd2Ugd2lsbCB0dXJuIHRoaXMgZmlsZSBpbnRvIGEgYnVuZGxlIHdpdGggbm8gaW1wb3J0cy5cbi8vIFRoaXMgaXMgYi9jIHRoZSBQb3BwZXIgbGliIGlzIGFsbCBlc20gZmlsZXMsIGFuZCB3b3VsZCBicmVhayBpbiBhIGNvbW1vbiBqcyBvbmx5IGVudmlyb25tZW50XG5leHBvcnQgY29uc3QgY3JlYXRlUG9wcGVyID0gcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogW1xuICAgIGhpZGUsXG4gICAgcG9wcGVyT2Zmc2V0cyxcbiAgICBjb21wdXRlU3R5bGVzLFxuICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIG9mZnNldCxcbiAgICBmbGlwLFxuICAgIHByZXZlbnRPdmVyZmxvdyxcbiAgICBhcnJvdyxcbiAgXSxcbn0pO1xuXG5leHBvcnQgeyBwbGFjZW1lbnRzIH07XG4iLCJpbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gJ2RlcXVhbCc7XG5pbXBvcnQgdXNlU2FmZVN0YXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVNhZmVTdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tICcuL3BvcHBlcic7XG5cbmNvbnN0IGRpc2FibGVkQXBwbHlTdHlsZXNNb2RpZmllciA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogZmFsc2UsXG4gIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG59O1xuXG4vLyB1bnRpbCBkb2NqcyBzdXBwb3J0cyB0eXBlIGV4cG9ydHMuLi5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+ID0gUG9wcGVyLk1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+O1xuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IFBvcHBlci5PcHRpb25zO1xuZXhwb3J0IHR5cGUgSW5zdGFuY2UgPSBQb3BwZXIuSW5zdGFuY2U7XG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBQb3BwZXIuUGxhY2VtZW50O1xuZXhwb3J0IHR5cGUgVmlydHVhbEVsZW1lbnQgPSBQb3BwZXIuVmlydHVhbEVsZW1lbnQ7XG5leHBvcnQgdHlwZSBTdGF0ZSA9IFBvcHBlci5TdGF0ZTtcblxuZXhwb3J0IHR5cGUgT2Zmc2V0VmFsdWUgPSBbXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG5dO1xuZXhwb3J0IHR5cGUgT2Zmc2V0RnVuY3Rpb24gPSAoZGV0YWlsczoge1xuICBwb3BwZXI6IFBvcHBlci5SZWN0O1xuICByZWZlcmVuY2U6IFBvcHBlci5SZWN0O1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbn0pID0+IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBPZmZzZXQgPSBPZmZzZXRGdW5jdGlvbiB8IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBNb2RpZmllck1hcCA9IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5leHBvcnQgdHlwZSBNb2RpZmllcnMgPVxuICB8IFBvcHBlci5PcHRpb25zWydtb2RpZmllcnMnXVxuICB8IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5cbmV4cG9ydCB0eXBlIFVzZVBvcHBlck9wdGlvbnMgPSBPbWl0PFxuICBPcHRpb25zLFxuICAnbW9kaWZpZXJzJyB8ICdwbGFjZW1lbnQnIHwgJ3N0cmF0ZWd5J1xuPiAmIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IE9wdGlvbnNbJ3BsYWNlbWVudCddO1xuICBzdHJhdGVneT86IE9wdGlvbnNbJ3N0cmF0ZWd5J107XG4gIG1vZGlmaWVycz86IE9wdGlvbnNbJ21vZGlmaWVycyddO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQb3BwZXJTdGF0ZSB7XG4gIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICB1cGRhdGU6ICgpID0+IHZvaWQ7XG4gIGZvcmNlVXBkYXRlOiAoKSA9PiB2b2lkO1xuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PjtcbiAgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+PjtcbiAgc3RhdGU/OiBTdGF0ZTtcbn1cblxuY29uc3QgYXJpYURlc2NyaWJlZEJ5TW9kaWZpZXI6IE1vZGlmaWVyPCdhcmlhRGVzY3JpYmVkQnknLCB1bmRlZmluZWQ+ID0ge1xuICBuYW1lOiAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgZWZmZWN0OiAoeyBzdGF0ZSB9KSA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHBvcHBlciB9ID0gc3RhdGUuZWxlbWVudHM7XG4gICAgaWYgKCdyZW1vdmVBdHRyaWJ1dGUnIGluIHJlZmVyZW5jZSkge1xuICAgICAgY29uc3QgaWRzID0gKHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSB8fCAnJylcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLmZpbHRlcigoaWQpID0+IGlkLnRyaW0oKSAhPT0gcG9wcGVyLmlkKTtcblxuICAgICAgaWYgKCFpZHMubGVuZ3RoKSByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBlbHNlIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpZHMuam9pbignLCcpKTtcbiAgICB9XG4gIH0sXG4gIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gc3RhdGUuZWxlbWVudHM7XG5cbiAgICBjb25zdCByb2xlID0gcG9wcGVyLmdldEF0dHJpYnV0ZSgncm9sZScpPy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHBvcHBlci5pZCAmJiByb2xlID09PSAndG9vbHRpcCcgJiYgJ3NldEF0dHJpYnV0ZScgaW4gcmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBpZHMgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBpZiAoaWRzICYmIGlkcy5zcGxpdCgnLCcpLmluZGV4T2YocG9wcGVyLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWZlcmVuY2Uuc2V0QXR0cmlidXRlKFxuICAgICAgICAnYXJpYS1kZXNjcmliZWRieScsXG4gICAgICAgIGlkcyA/IGAke2lkc30sJHtwb3BwZXIuaWR9YCA6IHBvcHBlci5pZCxcbiAgICAgICk7XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgRU1QVFlfTU9ESUZJRVJTID0gW10gYXMgYW55O1xuLyoqXG4gKiBQb3NpdGlvbiBhbiBlbGVtZW50IHJlbGF0aXZlIHNvbWUgcmVmZXJlbmNlIGVsZW1lbnQgdXNpbmcgUG9wcGVyLmpzXG4gKlxuICogQHBhcmFtIHJlZmVyZW5jZUVsZW1lbnRcbiAqIEBwYXJhbSBwb3BwZXJFbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdD19ICAgICBvcHRpb25zLm1vZGlmaWVycyBQb3BwZXIuanMgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSAgICBvcHRpb25zLmVuYWJsZWQgdG9nZ2xlIHRoZSBwb3BwZXIgZnVuY3Rpb25hbGl0eSBvbi9vZmZcbiAqIEBwYXJhbSB7c3RyaW5nPX0gICAgIG9wdGlvbnMucGxhY2VtZW50IFRoZSBwb3BwZXIgZWxlbWVudCBwbGFjZW1lbnQgcmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZz19ICAgICBvcHRpb25zLnN0cmF0ZWd5IHRoZSBwb3NpdGlvbmluZyBzdHJhdGVneVxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vbkNyZWF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSAgIG9wdGlvbnMub25VcGRhdGUgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkXG4gKlxuICogQHJldHVybnMge1VzZVBvcHBlclN0YXRlfSBUaGUgcG9wcGVyIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHVzZVBvcHBlcihcbiAgcmVmZXJlbmNlRWxlbWVudDogVmlydHVhbEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBwb3BwZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHtcbiAgICBlbmFibGVkID0gdHJ1ZSxcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzID0gRU1QVFlfTU9ESUZJRVJTLFxuICAgIC4uLmNvbmZpZ1xuICB9OiBVc2VQb3BwZXJPcHRpb25zID0ge30sXG4pOiBVc2VQb3BwZXJTdGF0ZSB7XG4gIGNvbnN0IHByZXZNb2RpZmllcnMgPSB1c2VSZWY8VXNlUG9wcGVyT3B0aW9uc1snbW9kaWZpZXJzJ10+KG1vZGlmaWVycyk7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlUmVmID0gdXNlUmVmPEluc3RhbmNlPigpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50Py51cGRhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQ/LmZvcmNlVXBkYXRlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbcG9wcGVyU3RhdGUsIHNldFN0YXRlXSA9IHVzZVNhZmVTdGF0ZShcbiAgICB1c2VTdGF0ZTxVc2VQb3BwZXJTdGF0ZT4oe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgdXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBwb3BwZXI6IHt9LFxuICAgICAgICBhcnJvdzoge30sXG4gICAgICB9LFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IHVwZGF0ZU1vZGlmaWVyID0gdXNlTWVtbzxNb2RpZmllcjwndXBkYXRlU3RhdGVNb2RpZmllcicsIGFueT4+KFxuICAgICgpID0+ICh7XG4gICAgICBuYW1lOiAndXBkYXRlU3RhdGVNb2RpZmllcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICd3cml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbjogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXM6IFVzZVBvcHBlclN0YXRlWydzdHlsZXMnXSA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBVc2VQb3BwZXJTdGF0ZVsnYXR0cmlidXRlcyddID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBzdHlsZXNbZWxlbWVudF0gPSBzdGF0ZS5zdHlsZXNbZWxlbWVudF07XG4gICAgICAgICAgYXR0cmlidXRlc1tlbGVtZW50XSA9IHN0YXRlLmF0dHJpYnV0ZXNbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICB1cGRhdGUsXG4gICAgICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbdXBkYXRlLCBmb3JjZVVwZGF0ZSwgc2V0U3RhdGVdLFxuICApO1xuXG4gIGNvbnN0IG5leHRNb2RpZmllcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWRlcXVhbChwcmV2TW9kaWZpZXJzLmN1cnJlbnQsIG1vZGlmaWVycykpIHtcbiAgICAgIHByZXZNb2RpZmllcnMuY3VycmVudCA9IG1vZGlmaWVycztcbiAgICB9XG4gICAgcmV0dXJuIHByZXZNb2RpZmllcnMuY3VycmVudCE7XG4gIH0sIFttb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCB8fCAhZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5zZXRPcHRpb25zKHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLm5leHRNb2RpZmllcnMsXG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyLFxuICAgICAgICBkaXNhYmxlZEFwcGx5U3R5bGVzTW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0pO1xuICB9LCBbc3RyYXRlZ3ksIHBsYWNlbWVudCwgdXBkYXRlTW9kaWZpZXIsIGVuYWJsZWQsIG5leHRNb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCByZWZlcmVuY2VFbGVtZW50ID09IG51bGwgfHwgcG9wcGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFsuLi5uZXh0TW9kaWZpZXJzLCBhcmlhRGVzY3JpYmVkQnlNb2RpZmllciwgdXBkYXRlTW9kaWZpZXJdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgICAgLi4ucyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICBzdHlsZXM6IHsgcG9wcGVyOiB7fSB9LFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBUaGlzIGlzIG9ubHkgcnVuIG9uY2UgdG8gX2NyZWF0ZV8gdGhlIHBvcHBlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2VuYWJsZWQsIHJlZmVyZW5jZUVsZW1lbnQsIHBvcHBlckVsZW1lbnRdKTtcblxuICByZXR1cm4gcG9wcGVyU3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBvcHBlcjtcbiIsImltcG9ydCBjb250YWlucyBmcm9tICdkb20taGVscGVycy9jb250YWlucyc7XG5pbXBvcnQgbGlzdGVuIGZyb20gJ2RvbS1oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxuY29uc3QgZXNjYXBlS2V5Q29kZSA9IDI3O1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50cyA9IHtcbiAgW0sgaW4ga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwXTogR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwW0tdIGV4dGVuZHMgTW91c2VFdmVudFxuICAgID8gS1xuICAgIDogbmV2ZXI7XG59W2tleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcF07XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY29uc3QgZ2V0UmVmVGFyZ2V0ID0gKFxuICByZWY6IFJlYWN0LlJlZk9iamVjdDxFbGVtZW50PiB8IEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuKSA9PiByZWYgJiYgKCdjdXJyZW50JyBpbiByZWYgPyByZWYuY3VycmVudCA6IHJlZik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdENsb3NlT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2xpY2tUcmlnZ2VyPzogTW91c2VFdmVudHM7XG59XG4vKipcbiAqIFRoZSBgdXNlUm9vdENsb3NlYCBob29rIHJlZ2lzdGVycyB5b3VyIGNhbGxiYWNrIG9uIHRoZSBkb2N1bWVudFxuICogd2hlbiByZW5kZXJlZC4gUG93ZXJzIHRoZSBgPE92ZXJsYXkvPmAgY29tcG9uZW50LiBUaGlzIGlzIHVzZWQgYWNoaWV2ZSBtb2RhbFxuICogc3R5bGUgYmVoYXZpb3Igd2hlcmUgeW91ciBjYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciB0cmllcyB0b1xuICogaW50ZXJhY3Qgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgb3IgaGl0cyB0aGUgYGVzY2Aga2V5LlxuICpcbiAqIEBwYXJhbSB7UmVmPEhUTUxFbGVtZW50PnwgSFRNTEVsZW1lbnR9IHJlZiAgVGhlIGVsZW1lbnQgYm91bmRhcnlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUm9vdENsb3NlXG4gKiBAcGFyYW0ge29iamVjdD19ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLmRpc2FibGVkXG4gKiBAcGFyYW0ge3N0cmluZz19ICBvcHRpb25zLmNsaWNrVHJpZ2dlciBUaGUgRE9NIGV2ZW50IG5hbWUgKGNsaWNrLCBtb3VzZWRvd24sIGV0YykgdG8gYXR0YWNoIGxpc3RlbmVycyBvblxuICovXG5mdW5jdGlvbiB1c2VSb290Q2xvc2UoXG4gIHJlZjogUmVhY3QuUmVmT2JqZWN0PEVsZW1lbnQ+IHwgRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9uUm9vdENsb3NlOiAoZTogRXZlbnQpID0+IHZvaWQsXG4gIHsgZGlzYWJsZWQsIGNsaWNrVHJpZ2dlciA9ICdjbGljaycgfTogUm9vdENsb3NlT3B0aW9ucyA9IHt9LFxuKSB7XG4gIGNvbnN0IHByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uQ2xvc2UgPSBvblJvb3RDbG9zZSB8fCBub29wO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlQ2FwdHVyZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZ2V0UmVmVGFyZ2V0KHJlZik7XG5cbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICEhY3VycmVudFRhcmdldCxcbiAgICAgICAgJ1Jvb3RDbG9zZSBjYXB0dXJlZCBhIGNsb3NlIGV2ZW50IGJ1dCBkb2VzIG5vdCBoYXZlIGEgcmVmIHRvIGNvbXBhcmUgaXQgdG8uICcgK1xuICAgICAgICAgICd1c2VSb290Q2xvc2UoKSwgc2hvdWxkIGJlIHBhc3NlZCBhIHJlZiB0aGF0IHJlc29sdmVzIHRvIGEgRE9NIG5vZGUnLFxuICAgICAgKTtcblxuICAgICAgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQgPVxuICAgICAgICAhY3VycmVudFRhcmdldCB8fFxuICAgICAgICBpc01vZGlmaWVkRXZlbnQoZSkgfHxcbiAgICAgICAgIWlzTGVmdENsaWNrRXZlbnQoZSkgfHxcbiAgICAgICAgISFjb250YWlucyhjdXJyZW50VGFyZ2V0LCBlLnRhcmdldCk7XG4gICAgfSxcbiAgICBbcmVmXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZSA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5VXAgPSB1c2VFdmVudENhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gZXNjYXBlS2V5Q29kZSkge1xuICAgICAgb25DbG9zZShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlZiA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgZXZlbnQgdG8gYXZvaWQgdHJpZ2dlcmluZyBoYW5kbGVycyBpbW1lZGlhdGVseVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjAwNzRcbiAgICBsZXQgY3VycmVudEV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG4gICAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudChnZXRSZWZUYXJnZXQocmVmKSEpO1xuXG4gICAgLy8gVXNlIGNhcHR1cmUgZm9yIHRoaXMgbGlzdGVuZXIgc28gaXQgZmlyZXMgYmVmb3JlIFJlYWN0J3MgbGlzdGVuZXIsIHRvXG4gICAgLy8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIGluIHRoZSBjb250YWlucygpIGNoZWNrIGJlbG93IGlmIHRoZSB0YXJnZXQgRE9NXG4gICAgLy8gZWxlbWVudCBpcyByZW1vdmVkIGluIHRoZSBSZWFjdCBtb3VzZSBjYWxsYmFjay5cbiAgICBjb25zdCByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lciA9IGxpc3RlbihcbiAgICAgIGRvYyBhcyBhbnksXG4gICAgICBjbGlja1RyaWdnZXIsXG4gICAgICBoYW5kbGVNb3VzZUNhcHR1cmUsXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBjb25zdCByZW1vdmVNb3VzZUxpc3RlbmVyID0gbGlzdGVuKGRvYyBhcyBhbnksIGNsaWNrVHJpZ2dlciwgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVNb3VzZShlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUtleXVwTGlzdGVuZXIgPSBsaXN0ZW4oZG9jIGFzIGFueSwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVLZXlVcChlKTtcbiAgICB9KTtcblxuICAgIGxldCBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW10gYXMgQXJyYXk8KCkgPT4gdm9pZD47XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXS5zbGljZVxuICAgICAgICAuY2FsbChkb2MuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLm1hcCgoZWwpID0+IGxpc3RlbihlbCwgJ21vdXNlbW92ZScsIG5vb3ApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVtb3ZlTW91c2VDYXB0dXJlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZUtleXVwTGlzdGVuZXIoKTtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMuZm9yRWFjaCgocmVtb3ZlKSA9PiByZW1vdmUoKSk7XG4gICAgfTtcbiAgfSwgW1xuICAgIHJlZixcbiAgICBkaXNhYmxlZCxcbiAgICBjbGlja1RyaWdnZXIsXG4gICAgaGFuZGxlTW91c2VDYXB0dXJlLFxuICAgIGhhbmRsZU1vdXNlLFxuICAgIGhhbmRsZUtleVVwLFxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUm9vdENsb3NlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEJhc2VCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSAnQHJlc3RhcnQvdWknO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBCdXR0b25Qcm9wcywgcmVmKSA9PiAoXG4gIDxCYXNlQnV0dG9uXG4gICAgcmVmPXtyZWZ9XG4gICAgey4uLnByb3BzfVxuICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgIHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICd0cmFuc2l0aW9uIHRleHQtbWQnLFxuICAgICAgJ2gtMTAgY3Vyc29yLXBvaW50ZXIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSByb3VuZGVkIHB4LTggbXQtNCBhcHBlYXJhbmNlLW5vbmUgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1uby13cmFwJyxcbiAgICAgICdmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy00IHJpbmctcHJpbWFyeS0yMDAnLFxuICAgICAgJ2hvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZScsXG4gICAgICAnYWN0aXZlOmJnLXByaW1hcnktNjAwIGFjdGl2ZTp0ZXh0LXdoaXRlJyxcbiAgICAgIHByb3BzLmRpc2FibGVkICYmICdjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS02MCcsXG4gICAgKX1cbiAgLz5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbiAgXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcInVzZVJvb3RDbG9zZVwiLFxuICBcImlkXCI6IFwidXNlUm9vdENsb3NlXCIsXG4gIFwiaXNEb2NzSG9tZVBhZ2VcIjogZmFsc2UsXG4gIFwidGl0bGVcIjogXCJ1c2VSb290Q2xvc2VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcImBqc3ggbGl2ZSByZW5kZXJBc0NvbXBvbmVudFwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvdXNlUm9vdENsb3NlLm1keFwiLFxuICBcInNvdXJjZURpck5hbWVcIjogXCIuXCIsXG4gIFwic2x1Z1wiOiBcIi91c2VSb290Q2xvc2VcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvdWkvdXNlUm9vdENsb3NlXCIsXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJmcm9udE1hdHRlclwiOiB7fSxcbiAgXCJzaWRlYmFyXCI6IFwiZG9jc1wiLFxuICBcInByZXZpb3VzXCI6IHtcbiAgICBcInRpdGxlXCI6IFwidXNlUG9wcGVyXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvdWkvdXNlUG9wcGVyXCJcbiAgfSxcbiAgXCJuZXh0XCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQW5pbWF0aW9uIGFuZCBUcmFuc2l0aW9uc1wiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3RyYW5zaXRpb25zXCJcbiAgfVxufTtcbiAgLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBJbXBvcnRDb250ZXh0LCB7IGFsbFZhbHVlcyB9IGZyb20gXCJAdGhlbWUvSW1wb3J0Q29udGV4dFwiO1xuZXhwb3J0IGNvbnN0IHRvYyA9IFtdO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJAcmVzdGFydC91aVwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLXVzZVJvb3RDbG9zZS5tZHhcIiAqL1xuICAgICAgJ0ByZXN0YXJ0L3VpJyksXG4gICAgICBcIi4uL3NyYy9CdXR0b25cIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy11c2VSb290Q2xvc2UubWR4XCIgKi9cbiAgICAgICcuLi9zcmMvQnV0dG9uJylcbiAgICB9KX0gbWR4VHlwZT1cIkltcG9ydENvbnRleHRcIj5cbiAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIixcbiAgICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIHJlbmRlckFzQ29tcG9uZW50XCIsXG4gICAgICAgICAgXCJsaXZlXCI6IHRydWUsXG4gICAgICAgICAgXCJyZW5kZXJBc0NvbXBvbmVudFwiOiB0cnVlXG4gICAgICAgIH19PntgaW1wb3J0IHsgdXNlUm9vdENsb3NlIH0gZnJvbSBcIkByZXN0YXJ0L3VpXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zcmMvQnV0dG9uXCI7XG5cbmNvbnN0IHJlZiA9IHVzZVJlZigpO1xuY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgaGFuZGxlUm9vdENsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG5cbnVzZVJvb3RDbG9zZShyZWYsIGhhbmRsZVJvb3RDbG9zZSwge1xuICBkaXNhYmxlZDogIXNob3csXG59KTtcblxucmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTRcIj5cbiAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfT5cbiAgICAgIFJlbmRlciBSb290Q2xvc2VXcmFwcGVyXG4gICAgPC9CdXR0b24+XG5cbiAgICB7c2hvdyAmJiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHNoYWRvdyBiZy13aGl0ZSBwLTZcIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj5DbGljayBhbnl3aGVyZSB0byBkaXNtaXNzIG1lITwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvZGl2PlxuKTtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvSW1wb3J0Q29udGV4dD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuICAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLHI9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiB5KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifWlmKCFhYSl0aHJvdyBFcnJvcih5KDIyNykpO3ZhciBiYT1uZXcgU2V0LGNhPXt9O2Z1bmN0aW9uIGRhKGEsYil7ZWEoYSxiKTtlYShhK1wiQ2FwdHVyZVwiLGIpfVxuZnVuY3Rpb24gZWEoYSxiKXtjYVthXT1iO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspYmEuYWRkKGJbYV0pfVxudmFyIGZhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxoYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8saWE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbmphPXt9LGthPXt9O2Z1bmN0aW9uIGxhKGEpe2lmKGlhLmNhbGwoa2EsYSkpcmV0dXJuITA7aWYoaWEuY2FsbChqYSxhKSlyZXR1cm4hMTtpZihoYS50ZXN0KGEpKXJldHVybiBrYVthXT0hMDtqYVthXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiBtYShhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIG5hKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fG1hKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gQihhLGIsYyxkLGUsZixnKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1iO3RoaXMuc2FuaXRpemVVUkw9Zjt0aGlzLnJlbW92ZUVtcHR5U3RyaW5nPWd9dmFyIEQ9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwwLCExLGEsbnVsbCwhMSwhMSl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07RFtiXT1uZXcgQihiLDEsITEsYVsxXSxudWxsLCExLCExKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEsbnVsbCwhMSwhMSl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBkaXNhYmxlUGljdHVyZUluUGljdHVyZSBkaXNhYmxlUmVtb3RlUGxheWJhY2sgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMCxhLG51bGwsITEsITEpfSk7W1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNCwhMSxhLG51bGwsITEsITEpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw2LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO3ZhciBvYT0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHBhKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLFxucGEpO0RbYl09bmV3IEIoYiwxLCExLGEsbnVsbCwhMSwhMSl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMSwhMSl9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCExLCExKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuRC54bGlua0hyZWY9bmV3IEIoXCJ4bGlua0hyZWZcIiwxLCExLFwieGxpbms6aHJlZlwiLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCEwLCExKTtbXCJzcmNcIixcImhyZWZcIixcImFjdGlvblwiLFwiZm9ybUFjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCEwLCEwKX0pO1xuZnVuY3Rpb24gcWEoYSxiLGMsZCl7dmFyIGU9RC5oYXNPd25Qcm9wZXJ0eShiKT9EW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwobmEoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP2xhKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG52YXIgcmE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsc2E9NjAxMDMsdGE9NjAxMDYsdWE9NjAxMDcsd2E9NjAxMDgseGE9NjAxMTQseWE9NjAxMDksemE9NjAxMTAsQWE9NjAxMTIsQmE9NjAxMTMsQ2E9NjAxMjAsRGE9NjAxMTUsRWE9NjAxMTYsRmE9NjAxMjEsR2E9NjAxMjgsSGE9NjAxMjksSWE9NjAxMzAsSmE9NjAxMzE7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgRT1TeW1ib2wuZm9yO3NhPUUoXCJyZWFjdC5lbGVtZW50XCIpO3RhPUUoXCJyZWFjdC5wb3J0YWxcIik7dWE9RShcInJlYWN0LmZyYWdtZW50XCIpO3dhPUUoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTt4YT1FKFwicmVhY3QucHJvZmlsZXJcIik7eWE9RShcInJlYWN0LnByb3ZpZGVyXCIpO3phPUUoXCJyZWFjdC5jb250ZXh0XCIpO0FhPUUoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtCYT1FKFwicmVhY3Quc3VzcGVuc2VcIik7Q2E9RShcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7RGE9RShcInJlYWN0Lm1lbW9cIik7RWE9RShcInJlYWN0LmxhenlcIik7RmE9RShcInJlYWN0LmJsb2NrXCIpO0UoXCJyZWFjdC5zY29wZVwiKTtHYT1FKFwicmVhY3Qub3BhcXVlLmlkXCIpO0hhPUUoXCJyZWFjdC5kZWJ1Z190cmFjZV9tb2RlXCIpO0lhPUUoXCJyZWFjdC5vZmZzY3JlZW5cIik7SmE9RShcInJlYWN0LmxlZ2FjeV9oaWRkZW5cIil9XG52YXIgS2E9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIExhKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1LYSYmYVtLYV18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH12YXIgTWE7ZnVuY3Rpb24gTmEoYSl7aWYodm9pZCAwPT09TWEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TWE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK01hK2F9dmFyIE9hPSExO1xuZnVuY3Rpb24gUGEoYSxiKXtpZighYXx8T2EpcmV0dXJuXCJcIjtPYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2goayl7dmFyIGQ9a31SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGspe2Q9a31hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGspe2Q9a31hKCl9fWNhdGNoKGspe2lmKGsmJmQmJlwic3RyaW5nXCI9PT10eXBlb2Ygay5zdGFjayl7Zm9yKHZhciBlPWsuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSlyZXR1cm5cIlxcblwiK2VbZ10ucmVwbGFjZShcIiBhdCBuZXcgXCIsXCIgYXQgXCIpO3doaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtPYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP05hKGEpOlwiXCJ9XG5mdW5jdGlvbiBRYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTmEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBOYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTmEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBOYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9UGEoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9UGEoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDIyOnJldHVybiBhPVBhKGEudHlwZS5fcmVuZGVyLCExKSxhO2Nhc2UgMTpyZXR1cm4gYT1QYShhLnR5cGUsITApLGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1cbmZ1bmN0aW9uIFJhKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgdGE6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIHhhOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIHdhOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgQmE6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgQ2E6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgemE6cmV0dXJuKGEuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Db25zdW1lclwiO2Nhc2UgeWE6cmV0dXJuKGEuX2NvbnRleHQuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Qcm92aWRlclwiO2Nhc2UgQWE6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7XG5yZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIERhOnJldHVybiBSYShhLnR5cGUpO2Nhc2UgRmE6cmV0dXJuIFJhKGEuX3JlbmRlcik7Y2FzZSBFYTpiPWEuX3BheWxvYWQ7YT1hLl9pbml0O3RyeXtyZXR1cm4gUmEoYShiKSl9Y2F0Y2goYyl7fX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBTYShhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBtKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uICRhKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmcWEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGFiKGEsYil7JGEoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9iYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZiYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGNiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBiYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX1mdW5jdGlvbiBkYihhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBlYihhLGIpe2E9bSh7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPWRiKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1cbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHkoOTEpKTtyZXR1cm4gbSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcih5KDkyKSk7aWYoQXJyYXkuaXNBcnJheShjKSl7aWYoISgxPj1jLmxlbmd0aCkpdGhyb3cgRXJyb3IoeSg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9dmFyIGtiPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIGxiKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2xiKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIG5iLG9iPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihhLm5hbWVzcGFjZVVSSSE9PWtiLnN2Z3x8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle25iPW5ifHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO25iLmlubmVySFRNTD1cIjxzdmc+XCIrYi52YWx1ZU9mKCkudG9TdHJpbmcoKStcIjwvc3ZnPlwiO2ZvcihiPW5iLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIHBiKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgcWI9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwLGZpbGxPcGFjaXR5OiEwLFxuZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0scmI9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKHFiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JiLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7cWJbYl09cWJbYV19KX0pO2Z1bmN0aW9uIHNiKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxxYi5oYXNPd25Qcm9wZXJ0eShhKSYmcWJbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gdGIoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9c2IoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgdWI9bSh7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHZiKGEsYil7aWYoYil7aWYodWJbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDEzNyxhKSk7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyBFcnJvcih5KDYwKSk7aWYoIShcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyBFcnJvcih5KDYyKSk7fX1cbmZ1bmN0aW9uIHdiKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1mdW5jdGlvbiB4YihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9dmFyIHliPW51bGwsemI9bnVsbCxBYj1udWxsO1xuZnVuY3Rpb24gQmIoYSl7aWYoYT1DYihhKSl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHliKXRocm93IEVycm9yKHkoMjgwKSk7dmFyIGI9YS5zdGF0ZU5vZGU7YiYmKGI9RGIoYikseWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpKX19ZnVuY3Rpb24gRWIoYSl7emI/QWI/QWIucHVzaChhKTpBYj1bYV06emI9YX1mdW5jdGlvbiBGYigpe2lmKHpiKXt2YXIgYT16YixiPUFiO0FiPXpiPW51bGw7QmIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKUJiKGJbYV0pfX1mdW5jdGlvbiBHYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEhiKGEsYixjLGQsZSl7cmV0dXJuIGEoYixjLGQsZSl9ZnVuY3Rpb24gSWIoKXt9dmFyIEpiPUdiLEtiPSExLExiPSExO2Z1bmN0aW9uIE1iKCl7aWYobnVsbCE9PXpifHxudWxsIT09QWIpSWIoKSxGYigpfVxuZnVuY3Rpb24gTmIoYSxiLGMpe2lmKExiKXJldHVybiBhKGIsYyk7TGI9ITA7dHJ5e3JldHVybiBKYihhLGIsYyl9ZmluYWxseXtMYj0hMSxNYigpfX1cbmZ1bmN0aW9uIE9iKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9RGIoYyk7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRW50ZXJcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGMpdGhyb3cgRXJyb3IoeSgyMzEsYix0eXBlb2YgYykpO3JldHVybiBjfXZhciBQYj0hMTtpZihmYSl0cnl7dmFyIFFiPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShRYixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7UGI9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKX1jYXRjaChhKXtQYj0hMX1mdW5jdGlvbiBSYihhLGIsYyxkLGUsZixnLGgsayl7dmFyIGw9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsbCl9Y2F0Y2gobil7dGhpcy5vbkVycm9yKG4pfX12YXIgU2I9ITEsVGI9bnVsbCxVYj0hMSxWYj1udWxsLFdiPXtvbkVycm9yOmZ1bmN0aW9uKGEpe1NiPSEwO1RiPWF9fTtmdW5jdGlvbiBYYihhLGIsYyxkLGUsZixnLGgsayl7U2I9ITE7VGI9bnVsbDtSYi5hcHBseShXYixhcmd1bWVudHMpfVxuZnVuY3Rpb24gWWIoYSxiLGMsZCxlLGYsZyxoLGspe1hiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihTYil7aWYoU2Ipe3ZhciBsPVRiO1NiPSExO1RiPW51bGx9ZWxzZSB0aHJvdyBFcnJvcih5KDE5OCkpO1VifHwoVWI9ITAsVmI9bCl9fWZ1bmN0aW9uIFpiKGEpe3ZhciBiPWEsYz1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXthPWI7ZG8gYj1hLDAhPT0oYi5mbGFncyYxMDI2KSYmKGM9Yi5yZXR1cm4pLGE9Yi5yZXR1cm47d2hpbGUoYSl9cmV0dXJuIDM9PT1iLnRhZz9jOm51bGx9ZnVuY3Rpb24gJGIoYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9YS5tZW1vaXplZFN0YXRlO251bGw9PT1iJiYoYT1hLmFsdGVybmF0ZSxudWxsIT09YSYmKGI9YS5tZW1vaXplZFN0YXRlKSk7aWYobnVsbCE9PWIpcmV0dXJuIGIuZGVoeWRyYXRlZH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBhYyhhKXtpZihaYihhKSE9PWEpdGhyb3cgRXJyb3IoeSgxODgpKTt9XG5mdW5jdGlvbiBiYyhhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYil7Yj1aYihhKTtpZihudWxsPT09Yil0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBiIT09YT9udWxsOmF9Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuO2lmKG51bGw9PT1lKWJyZWFrO3ZhciBmPWUuYWx0ZXJuYXRlO2lmKG51bGw9PT1mKXtkPWUucmV0dXJuO2lmKG51bGwhPT1kKXtjPWQ7Y29udGludWV9YnJlYWt9aWYoZS5jaGlsZD09PWYuY2hpbGQpe2ZvcihmPWUuY2hpbGQ7Zjspe2lmKGY9PT1jKXJldHVybiBhYyhlKSxhO2lmKGY9PT1kKXJldHVybiBhYyhlKSxiO2Y9Zi5zaWJsaW5nfXRocm93IEVycm9yKHkoMTg4KSk7fWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2Zvcih2YXIgZz0hMSxoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PVxuYyl7Zz0hMDtjPWY7ZD1lO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZjtjPWU7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpdGhyb3cgRXJyb3IoeSgxODkpKTt9fWlmKGMuYWx0ZXJuYXRlIT09ZCl0aHJvdyBFcnJvcih5KDE5MCkpO31pZigzIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIGNjKGEpe2E9YmMoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkYyhhLGIpe2Zvcih2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09Yjspe2lmKGI9PT1hfHxiPT09YylyZXR1cm4hMDtiPWIucmV0dXJufXJldHVybiExfXZhciBlYyxmYyxnYyxoYyxpYz0hMSxqYz1bXSxrYz1udWxsLGxjPW51bGwsbWM9bnVsbCxuYz1uZXcgTWFwLG9jPW5ldyBNYXAscGM9W10scWM9XCJtb3VzZWRvd24gbW91c2V1cCB0b3VjaGNhbmNlbCB0b3VjaGVuZCB0b3VjaHN0YXJ0IGF1eGNsaWNrIGRibGNsaWNrIHBvaW50ZXJjYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlcnVwIGRyYWdlbmQgZHJhZ3N0YXJ0IGRyb3AgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGlucHV0IHRleHRJbnB1dCBjb3B5IGN1dCBwYXN0ZSBjbGljayBjaGFuZ2UgY29udGV4dG1lbnUgcmVzZXQgc3VibWl0XCIuc3BsaXQoXCIgXCIpO1xuZnVuY3Rpb24gcmMoYSxiLGMsZCxlKXtyZXR1cm57YmxvY2tlZE9uOmEsZG9tRXZlbnROYW1lOmIsZXZlbnRTeXN0ZW1GbGFnczpjfDE2LG5hdGl2ZUV2ZW50OmUsdGFyZ2V0Q29udGFpbmVyczpbZF19fWZ1bmN0aW9uIHNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6a2M9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmxjPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOm1jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpuYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpvYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIHRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9cmMoYixjLGQsZSxmKSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJmZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIGtjPXRjKGtjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBsYz10YyhsYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gbWM9dGMobWMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtuYy5zZXQoZix0YyhuYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsb2Muc2V0KGYsdGMob2MuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gdmMoYSl7dmFyIGI9d2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1aYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj0kYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtoYyhhLmxhbmVQcmlvcml0eSxmdW5jdGlvbigpe3IudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KGEucHJpb3JpdHksZnVuY3Rpb24oKXtnYyhjKX0pfSk7cmV0dXJufX1lbHNlIGlmKDM9PT1iJiZjLnN0YXRlTm9kZS5oeWRyYXRlKXthLmJsb2NrZWRPbj0zPT09Yy50YWc/Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO3JldHVybn19YS5ibG9ja2VkT249bnVsbH1cbmZ1bmN0aW9uIHhjKGEpe2lmKG51bGwhPT1hLmJsb2NrZWRPbilyZXR1cm4hMTtmb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09YylyZXR1cm4gYj1DYihjKSxudWxsIT09YiYmZmMoYiksYS5ibG9ja2VkT249YywhMTtiLnNoaWZ0KCl9cmV0dXJuITB9ZnVuY3Rpb24gemMoYSxiLGMpe3hjKGEpJiZjLmRlbGV0ZShiKX1cbmZ1bmN0aW9uIEFjKCl7Zm9yKGljPSExOzA8amMubGVuZ3RoOyl7dmFyIGE9amNbMF07aWYobnVsbCE9PWEuYmxvY2tlZE9uKXthPUNiKGEuYmxvY2tlZE9uKTtudWxsIT09YSYmZWMoYSk7YnJlYWt9Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpe2EuYmxvY2tlZE9uPWM7YnJlYWt9Yi5zaGlmdCgpfW51bGw9PT1hLmJsb2NrZWRPbiYmamMuc2hpZnQoKX1udWxsIT09a2MmJnhjKGtjKSYmKGtjPW51bGwpO251bGwhPT1sYyYmeGMobGMpJiYobGM9bnVsbCk7bnVsbCE9PW1jJiZ4YyhtYykmJihtYz1udWxsKTtuYy5mb3JFYWNoKHpjKTtvYy5mb3JFYWNoKHpjKX1cbmZ1bmN0aW9uIEJjKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxpY3x8KGljPSEwLHIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhyLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LEFjKSkpfVxuZnVuY3Rpb24gQ2MoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gQmMoYixhKX1pZigwPGpjLmxlbmd0aCl7QmMoamNbMF0sYSk7Zm9yKHZhciBjPTE7YzxqYy5sZW5ndGg7YysrKXt2YXIgZD1qY1tjXTtkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKX19bnVsbCE9PWtjJiZCYyhrYyxhKTtudWxsIT09bGMmJkJjKGxjLGEpO251bGwhPT1tYyYmQmMobWMsYSk7bmMuZm9yRWFjaChiKTtvYy5mb3JFYWNoKGIpO2ZvcihjPTA7YzxwYy5sZW5ndGg7YysrKWQ9cGNbY10sZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCk7Zm9yKDswPHBjLmxlbmd0aCYmKGM9cGNbMF0sbnVsbD09PWMuYmxvY2tlZE9uKTspdmMoYyksbnVsbD09PWMuYmxvY2tlZE9uJiZwYy5zaGlmdCgpfVxuZnVuY3Rpb24gRGMoYSxiKXt2YXIgYz17fTtjW2EudG9Mb3dlckNhc2UoKV09Yi50b0xvd2VyQ2FzZSgpO2NbXCJXZWJraXRcIithXT1cIndlYmtpdFwiK2I7Y1tcIk1velwiK2FdPVwibW96XCIrYjtyZXR1cm4gY312YXIgRWM9e2FuaW1hdGlvbmVuZDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uRW5kXCIpLGFuaW1hdGlvbml0ZXJhdGlvbjpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uSXRlcmF0aW9uXCIpLGFuaW1hdGlvbnN0YXJ0OkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25TdGFydFwiKSx0cmFuc2l0aW9uZW5kOkRjKFwiVHJhbnNpdGlvblwiLFwiVHJhbnNpdGlvbkVuZFwiKX0sRmM9e30sR2M9e307XG5mYSYmKEdjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJBbmltYXRpb25FdmVudFwiaW4gd2luZG93fHwoZGVsZXRlIEVjLmFuaW1hdGlvbmVuZC5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbiksXCJUcmFuc2l0aW9uRXZlbnRcImluIHdpbmRvd3x8ZGVsZXRlIEVjLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbik7ZnVuY3Rpb24gSGMoYSl7aWYoRmNbYV0pcmV0dXJuIEZjW2FdO2lmKCFFY1thXSlyZXR1cm4gYTt2YXIgYj1FY1thXSxjO2ZvcihjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSYmYyBpbiBHYylyZXR1cm4gRmNbYV09YltjXTtyZXR1cm4gYX1cbnZhciBJYz1IYyhcImFuaW1hdGlvbmVuZFwiKSxKYz1IYyhcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxLYz1IYyhcImFuaW1hdGlvbnN0YXJ0XCIpLExjPUhjKFwidHJhbnNpdGlvbmVuZFwiKSxNYz1uZXcgTWFwLE5jPW5ldyBNYXAsT2M9W1wiYWJvcnRcIixcImFib3J0XCIsSWMsXCJhbmltYXRpb25FbmRcIixKYyxcImFuaW1hdGlvbkl0ZXJhdGlvblwiLEtjLFwiYW5pbWF0aW9uU3RhcnRcIixcImNhbnBsYXlcIixcImNhblBsYXlcIixcImNhbnBsYXl0aHJvdWdoXCIsXCJjYW5QbGF5VGhyb3VnaFwiLFwiZHVyYXRpb25jaGFuZ2VcIixcImR1cmF0aW9uQ2hhbmdlXCIsXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCIsXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiLFwiZW5kZWRcIixcImVuZGVkXCIsXCJlcnJvclwiLFwiZXJyb3JcIixcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJnb3RQb2ludGVyQ2FwdHVyZVwiLFwibG9hZFwiLFwibG9hZFwiLFwibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiLFwibG9hZGVkbWV0YWRhdGFcIixcImxvYWRlZE1ldGFkYXRhXCIsXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiLFxuXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiLFwicGxheWluZ1wiLFwicGxheWluZ1wiLFwicHJvZ3Jlc3NcIixcInByb2dyZXNzXCIsXCJzZWVraW5nXCIsXCJzZWVraW5nXCIsXCJzdGFsbGVkXCIsXCJzdGFsbGVkXCIsXCJzdXNwZW5kXCIsXCJzdXNwZW5kXCIsXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCIsTGMsXCJ0cmFuc2l0aW9uRW5kXCIsXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCJdO2Z1bmN0aW9uIFBjKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKz0yKXt2YXIgZD1hW2NdLGU9YVtjKzFdO2U9XCJvblwiKyhlWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSk7TmMuc2V0KGQsYik7TWMuc2V0KGQsZSk7ZGEoZSxbZF0pfX12YXIgUWM9ci51bnN0YWJsZV9ub3c7UWMoKTt2YXIgRj04O1xuZnVuY3Rpb24gUmMoYSl7aWYoMCE9PSgxJmEpKXJldHVybiBGPTE1LDE7aWYoMCE9PSgyJmEpKXJldHVybiBGPTE0LDI7aWYoMCE9PSg0JmEpKXJldHVybiBGPTEzLDQ7dmFyIGI9MjQmYTtpZigwIT09YilyZXR1cm4gRj0xMixiO2lmKDAhPT0oYSYzMikpcmV0dXJuIEY9MTEsMzI7Yj0xOTImYTtpZigwIT09YilyZXR1cm4gRj0xMCxiO2lmKDAhPT0oYSYyNTYpKXJldHVybiBGPTksMjU2O2I9MzU4NCZhO2lmKDAhPT1iKXJldHVybiBGPTgsYjtpZigwIT09KGEmNDA5NikpcmV0dXJuIEY9Nyw0MDk2O2I9NDE4NjExMiZhO2lmKDAhPT1iKXJldHVybiBGPTYsYjtiPTYyOTE0NTYwJmE7aWYoMCE9PWIpcmV0dXJuIEY9NSxiO2lmKGEmNjcxMDg4NjQpcmV0dXJuIEY9NCw2NzEwODg2NDtpZigwIT09KGEmMTM0MjE3NzI4KSlyZXR1cm4gRj0zLDEzNDIxNzcyODtiPTgwNTMwNjM2OCZhO2lmKDAhPT1iKXJldHVybiBGPTIsYjtpZigwIT09KDEwNzM3NDE4MjQmYSkpcmV0dXJuIEY9MSwxMDczNzQxODI0O1xuRj04O3JldHVybiBhfWZ1bmN0aW9uIFNjKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiAxNTtjYXNlIDk4OnJldHVybiAxMDtjYXNlIDk3OmNhc2UgOTY6cmV0dXJuIDg7Y2FzZSA5NTpyZXR1cm4gMjtkZWZhdWx0OnJldHVybiAwfX1mdW5jdGlvbiBUYyhhKXtzd2l0Y2goYSl7Y2FzZSAxNTpjYXNlIDE0OnJldHVybiA5OTtjYXNlIDEzOmNhc2UgMTI6Y2FzZSAxMTpjYXNlIDEwOnJldHVybiA5ODtjYXNlIDk6Y2FzZSA4OmNhc2UgNzpjYXNlIDY6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gOTc7Y2FzZSAzOmNhc2UgMjpjYXNlIDE6cmV0dXJuIDk1O2Nhc2UgMDpyZXR1cm4gOTA7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDM1OCxhKSk7fX1cbmZ1bmN0aW9uIFVjKGEsYil7dmFyIGM9YS5wZW5kaW5nTGFuZXM7aWYoMD09PWMpcmV0dXJuIEY9MDt2YXIgZD0wLGU9MCxmPWEuZXhwaXJlZExhbmVzLGc9YS5zdXNwZW5kZWRMYW5lcyxoPWEucGluZ2VkTGFuZXM7aWYoMCE9PWYpZD1mLGU9Rj0xNTtlbHNlIGlmKGY9YyYxMzQyMTc3MjcsMCE9PWYpe3ZhciBrPWYmfmc7MCE9PWs/KGQ9UmMoayksZT1GKTooaCY9ZiwwIT09aCYmKGQ9UmMoaCksZT1GKSl9ZWxzZSBmPWMmfmcsMCE9PWY/KGQ9UmMoZiksZT1GKTowIT09aCYmKGQ9UmMoaCksZT1GKTtpZigwPT09ZClyZXR1cm4gMDtkPTMxLVZjKGQpO2Q9YyYoKDA+ZD8wOjE8PGQpPDwxKS0xO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmcpKXtSYyhiKTtpZihlPD1GKXJldHVybiBiO0Y9ZX1iPWEuZW50YW5nbGVkTGFuZXM7aWYoMCE9PWIpZm9yKGE9YS5lbnRhbmdsZW1lbnRzLGImPWQ7MDxiOyljPTMxLVZjKGIpLGU9MTw8YyxkfD1hW2NdLGImPX5lO3JldHVybiBkfVxuZnVuY3Rpb24gV2MoYSl7YT1hLnBlbmRpbmdMYW5lcyYtMTA3Mzc0MTgyNTtyZXR1cm4gMCE9PWE/YTphJjEwNzM3NDE4MjQ/MTA3Mzc0MTgyNDowfWZ1bmN0aW9uIFhjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTU6cmV0dXJuIDE7Y2FzZSAxNDpyZXR1cm4gMjtjYXNlIDEyOnJldHVybiBhPVljKDI0Jn5iKSwwPT09YT9YYygxMCxiKTphO2Nhc2UgMTA6cmV0dXJuIGE9WWMoMTkyJn5iKSwwPT09YT9YYyg4LGIpOmE7Y2FzZSA4OnJldHVybiBhPVljKDM1ODQmfmIpLDA9PT1hJiYoYT1ZYyg0MTg2MTEyJn5iKSwwPT09YSYmKGE9NTEyKSksYTtjYXNlIDI6cmV0dXJuIGI9WWMoODA1MzA2MzY4Jn5iKSwwPT09YiYmKGI9MjY4NDM1NDU2KSxifXRocm93IEVycm9yKHkoMzU4LGEpKTt9ZnVuY3Rpb24gWWMoYSl7cmV0dXJuIGEmLWF9ZnVuY3Rpb24gWmMoYSl7Zm9yKHZhciBiPVtdLGM9MDszMT5jO2MrKyliLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiAkYyhhLGIsYyl7YS5wZW5kaW5nTGFuZXN8PWI7dmFyIGQ9Yi0xO2Euc3VzcGVuZGVkTGFuZXMmPWQ7YS5waW5nZWRMYW5lcyY9ZDthPWEuZXZlbnRUaW1lcztiPTMxLVZjKGIpO2FbYl09Y312YXIgVmM9TWF0aC5jbHozMj9NYXRoLmNsejMyOmFkLGJkPU1hdGgubG9nLGNkPU1hdGguTE4yO2Z1bmN0aW9uIGFkKGEpe3JldHVybiAwPT09YT8zMjozMS0oYmQoYSkvY2R8MCl8MH12YXIgZGQ9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxlZD1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxmZD0hMDtmdW5jdGlvbiBnZChhLGIsYyxkKXtLYnx8SWIoKTt2YXIgZT1oZCxmPUtiO0tiPSEwO3RyeXtIYihlLGEsYixjLGQpfWZpbmFsbHl7KEtiPWYpfHxNYigpfX1mdW5jdGlvbiBpZChhLGIsYyxkKXtlZChkZCxoZC5iaW5kKG51bGwsYSxiLGMsZCkpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCl7aWYoZmQpe3ZhciBlO2lmKChlPTA9PT0oYiY0KSkmJjA8amMubGVuZ3RoJiYtMTxxYy5pbmRleE9mKGEpKWE9cmMobnVsbCxhLGIsYyxkKSxqYy5wdXNoKGEpO2Vsc2V7dmFyIGY9eWMoYSxiLGMsZCk7aWYobnVsbD09PWYpZSYmc2MoYSxkKTtlbHNle2lmKGUpe2lmKC0xPHFjLmluZGV4T2YoYSkpe2E9cmMoZixhLGIsYyxkKTtqYy5wdXNoKGEpO3JldHVybn1pZih1YyhmLGEsYixjLGQpKXJldHVybjtzYyhhLGQpfWpkKGEsYixkLG51bGwsYyl9fX19XG5mdW5jdGlvbiB5YyhhLGIsYyxkKXt2YXIgZT14YihkKTtlPXdjKGUpO2lmKG51bGwhPT1lKXt2YXIgZj1aYihlKTtpZihudWxsPT09ZillPW51bGw7ZWxzZXt2YXIgZz1mLnRhZztpZigxMz09PWcpe2U9JGIoZik7aWYobnVsbCE9PWUpcmV0dXJuIGU7ZT1udWxsfWVsc2UgaWYoMz09PWcpe2lmKGYuc3RhdGVOb2RlLmh5ZHJhdGUpcmV0dXJuIDM9PT1mLnRhZz9mLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7ZT1udWxsfWVsc2UgZiE9PWUmJihlPW51bGwpfX1qZChhLGIsZCxlLGMpO3JldHVybiBudWxsfXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtcbmZ1bmN0aW9uIG5kKCl7aWYobWQpcmV0dXJuIG1kO3ZhciBhLGI9bGQsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gbWQ9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfW0oYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPW0oe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1tKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1tKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1tKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9bSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPW0oe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9bSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPW0oe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9bSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9bSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPW0oe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPW0oe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWZhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2ZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1mYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWZhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGZhKXt2YXIgeGU7aWYoZmEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTthPXJlO2lmKEtiKWEoYik7ZWxzZXtLYj0hMDt0cnl7R2IoYSxiKX1maW5hbGx5e0tiPSExLE1iKCl9fX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZSxJZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gSmUoYSxiKXtpZihIZShhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIUllLmNhbGwoYixjW2RdKXx8IUhlKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gS2UoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gTGUoYSxiKXt2YXIgYz1LZShhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1LZShjKX19ZnVuY3Rpb24gTWUoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9NZShhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBOZSgpe2Zvcih2YXIgYT13aW5kb3csYj1YYSgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1YYShhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBPZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxudmFyIFBlPWZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZPZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZKZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5QYyhcImNhbmNlbCBjYW5jZWwgY2xpY2sgY2xpY2sgY2xvc2UgY2xvc2UgY29udGV4dG1lbnUgY29udGV4dE1lbnUgY29weSBjb3B5IGN1dCBjdXQgYXV4Y2xpY2sgYXV4Q2xpY2sgZGJsY2xpY2sgZG91YmxlQ2xpY2sgZHJhZ2VuZCBkcmFnRW5kIGRyYWdzdGFydCBkcmFnU3RhcnQgZHJvcCBkcm9wIGZvY3VzaW4gZm9jdXMgZm9jdXNvdXQgYmx1ciBpbnB1dCBpbnB1dCBpbnZhbGlkIGludmFsaWQga2V5ZG93biBrZXlEb3duIGtleXByZXNzIGtleVByZXNzIGtleXVwIGtleVVwIG1vdXNlZG93biBtb3VzZURvd24gbW91c2V1cCBtb3VzZVVwIHBhc3RlIHBhc3RlIHBhdXNlIHBhdXNlIHBsYXkgcGxheSBwb2ludGVyY2FuY2VsIHBvaW50ZXJDYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlckRvd24gcG9pbnRlcnVwIHBvaW50ZXJVcCByYXRlY2hhbmdlIHJhdGVDaGFuZ2UgcmVzZXQgcmVzZXQgc2Vla2VkIHNlZWtlZCBzdWJtaXQgc3VibWl0IHRvdWNoY2FuY2VsIHRvdWNoQ2FuY2VsIHRvdWNoZW5kIHRvdWNoRW5kIHRvdWNoc3RhcnQgdG91Y2hTdGFydCB2b2x1bWVjaGFuZ2Ugdm9sdW1lQ2hhbmdlXCIuc3BsaXQoXCIgXCIpLFxuMCk7UGMoXCJkcmFnIGRyYWcgZHJhZ2VudGVyIGRyYWdFbnRlciBkcmFnZXhpdCBkcmFnRXhpdCBkcmFnbGVhdmUgZHJhZ0xlYXZlIGRyYWdvdmVyIGRyYWdPdmVyIG1vdXNlbW92ZSBtb3VzZU1vdmUgbW91c2VvdXQgbW91c2VPdXQgbW91c2VvdmVyIG1vdXNlT3ZlciBwb2ludGVybW92ZSBwb2ludGVyTW92ZSBwb2ludGVyb3V0IHBvaW50ZXJPdXQgcG9pbnRlcm92ZXIgcG9pbnRlck92ZXIgc2Nyb2xsIHNjcm9sbCB0b2dnbGUgdG9nZ2xlIHRvdWNobW92ZSB0b3VjaE1vdmUgd2hlZWwgd2hlZWxcIi5zcGxpdChcIiBcIiksMSk7UGMoT2MsMik7Zm9yKHZhciBWZT1cImNoYW5nZSBzZWxlY3Rpb25jaGFuZ2UgdGV4dElucHV0IGNvbXBvc2l0aW9uc3RhcnQgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb251cGRhdGVcIi5zcGxpdChcIiBcIiksV2U9MDtXZTxWZS5sZW5ndGg7V2UrKylOYy5zZXQoVmVbV2VdLDApO2VhKFwib25Nb3VzZUVudGVyXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7XG5lYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2VhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJMZWF2ZVwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtkYShcIm9uQ2hhbmdlXCIsXCJjaGFuZ2UgY2xpY2sgZm9jdXNpbiBmb2N1c291dCBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvblNlbGVjdFwiLFwiZm9jdXNvdXQgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1c2luIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQmVmb3JlSW5wdXRcIixbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl0pO2RhKFwib25Db21wb3NpdGlvbkVuZFwiLFwiY29tcG9zaXRpb25lbmQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZGEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO2RhKFwib25Db21wb3NpdGlvblVwZGF0ZVwiLFwiY29tcG9zaXRpb251cGRhdGUgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO3ZhciBYZT1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2Ugc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksWWU9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQoWGUpKTtcbmZ1bmN0aW9uIFplKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1liKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a319fWlmKFViKXRocm93IGE9VmIsVWI9ITEsVmI9bnVsbCxhO31cbmZ1bmN0aW9uIEcoYSxiKXt2YXIgYz0kZShiKSxkPWErXCJfX2J1YmJsZVwiO2MuaGFzKGQpfHwoYWYoYixhLDIsITEpLGMuYWRkKGQpKX12YXIgYmY9XCJfcmVhY3RMaXN0ZW5pbmdcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtmdW5jdGlvbiBjZihhKXthW2JmXXx8KGFbYmZdPSEwLGJhLmZvckVhY2goZnVuY3Rpb24oYil7WWUuaGFzKGIpfHxkZihiLCExLGEsbnVsbCk7ZGYoYiwhMCxhLG51bGwpfSkpfVxuZnVuY3Rpb24gZGYoYSxiLGMsZCl7dmFyIGU9NDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAsZj1jO1wic2VsZWN0aW9uY2hhbmdlXCI9PT1hJiY5IT09Yy5ub2RlVHlwZSYmKGY9Yy5vd25lckRvY3VtZW50KTtpZihudWxsIT09ZCYmIWImJlllLmhhcyhhKSl7aWYoXCJzY3JvbGxcIiE9PWEpcmV0dXJuO2V8PTI7Zj1kfXZhciBnPSRlKGYpLGg9YStcIl9fXCIrKGI/XCJjYXB0dXJlXCI6XCJidWJibGVcIik7Zy5oYXMoaCl8fChiJiYoZXw9NCksYWYoZixhLGUsYiksZy5hZGQoaCkpfVxuZnVuY3Rpb24gYWYoYSxiLGMsZCl7dmFyIGU9TmMuZ2V0KGIpO3N3aXRjaCh2b2lkIDA9PT1lPzI6ZSl7Y2FzZSAwOmU9Z2Q7YnJlYWs7Y2FzZSAxOmU9aWQ7YnJlYWs7ZGVmYXVsdDplPWhkfWM9ZS5iaW5kKG51bGwsYixjLGEpO2U9dm9pZCAwOyFQYnx8XCJ0b3VjaHN0YXJ0XCIhPT1iJiZcInRvdWNobW92ZVwiIT09YiYmXCJ3aGVlbFwiIT09Ynx8KGU9ITApO2Q/dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtjYXB0dXJlOiEwLHBhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITApOnZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7cGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9XG5mdW5jdGlvbiBqZChhLGIsYyxkLGUpe3ZhciBmPWQ7aWYoMD09PShiJjEpJiYwPT09KGImMikmJm51bGwhPT1kKWE6Zm9yKDs7KXtpZihudWxsPT09ZClyZXR1cm47dmFyIGc9ZC50YWc7aWYoMz09PWd8fDQ9PT1nKXt2YXIgaD1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKGg9PT1lfHw4PT09aC5ub2RlVHlwZSYmaC5wYXJlbnROb2RlPT09ZSlicmVhaztpZig0PT09Zylmb3IoZz1kLnJldHVybjtudWxsIT09Zzspe3ZhciBrPWcudGFnO2lmKDM9PT1rfHw0PT09aylpZihrPWcuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saz09PWV8fDg9PT1rLm5vZGVUeXBlJiZrLnBhcmVudE5vZGU9PT1lKXJldHVybjtnPWcucmV0dXJufWZvcig7bnVsbCE9PWg7KXtnPXdjKGgpO2lmKG51bGw9PT1nKXJldHVybjtrPWcudGFnO2lmKDU9PT1rfHw2PT09ayl7ZD1mPWc7Y29udGludWUgYX1oPWgucGFyZW50Tm9kZX19ZD1kLnJldHVybn1OYihmdW5jdGlvbigpe3ZhciBkPWYsZT14YihjKSxnPVtdO1xuYTp7dmFyIGg9TWMuZ2V0KGEpO2lmKHZvaWQgMCE9PWgpe3ZhciBrPXRkLHg9YTtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PW9kKGMpKWJyZWFrIGE7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjprPVJkO2JyZWFrO2Nhc2UgXCJmb2N1c2luXCI6eD1cImZvY3VzXCI7az1GZDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjp4PVwiYmx1clwiO2s9RmQ7YnJlYWs7Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6az1GZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pYnJlYWsgYTtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOms9QmQ7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6az1cbkRkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOms9VmQ7YnJlYWs7Y2FzZSBJYzpjYXNlIEpjOmNhc2UgS2M6az1IZDticmVhaztjYXNlIExjOms9WGQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOms9dmQ7YnJlYWs7Y2FzZSBcIndoZWVsXCI6az1aZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjprPUpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOms9VGR9dmFyIHc9MCE9PShiJjQpLHo9IXcmJlwic2Nyb2xsXCI9PT1hLHU9dz9udWxsIT09aD9oK1wiQ2FwdHVyZVwiOm51bGw6aDt3PVtdO2Zvcih2YXIgdD1kLHE7bnVsbCE9PVxudDspe3E9dDt2YXIgdj1xLnN0YXRlTm9kZTs1PT09cS50YWcmJm51bGwhPT12JiYocT12LG51bGwhPT11JiYodj1PYih0LHUpLG51bGwhPXYmJncucHVzaChlZih0LHYscSkpKSk7aWYoeilicmVhazt0PXQucmV0dXJufTA8dy5sZW5ndGgmJihoPW5ldyBrKGgseCxudWxsLGMsZSksZy5wdXNoKHtldmVudDpoLGxpc3RlbmVyczp3fSkpfX1pZigwPT09KGImNykpe2E6e2g9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWE7az1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoaCYmMD09PShiJjE2KSYmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKHdjKHgpfHx4W2ZmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQseD14P3djKHgpOm51bGwsbnVsbCE9PVxueCYmKHo9WmIoeCkseCE9PXp8fDUhPT14LnRhZyYmNiE9PXgudGFnKSl4PW51bGx9ZWxzZSBrPW51bGwseD1kO2lmKGshPT14KXt3PUJkO3Y9XCJvbk1vdXNlTGVhdmVcIjt1PVwib25Nb3VzZUVudGVyXCI7dD1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXc9VGQsdj1cIm9uUG9pbnRlckxlYXZlXCIsdT1cIm9uUG9pbnRlckVudGVyXCIsdD1cInBvaW50ZXJcIjt6PW51bGw9PWs/aDp1ZShrKTtxPW51bGw9PXg/aDp1ZSh4KTtoPW5ldyB3KHYsdCtcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PXo7aC5yZWxhdGVkVGFyZ2V0PXE7dj1udWxsO3djKGUpPT09ZCYmKHc9bmV3IHcodSx0K1wiZW50ZXJcIix4LGMsZSksdy50YXJnZXQ9cSx3LnJlbGF0ZWRUYXJnZXQ9eix2PXcpO3o9djtpZihrJiZ4KWI6e3c9azt1PXg7dD0wO2ZvcihxPXc7cTtxPWdmKHEpKXQrKztxPTA7Zm9yKHY9dTt2O3Y9Z2YodikpcSsrO2Zvcig7MDx0LXE7KXc9Z2YodyksdC0tO2Zvcig7MDxxLXQ7KXU9XG5nZih1KSxxLS07Zm9yKDt0LS07KXtpZih3PT09dXx8bnVsbCE9PXUmJnc9PT11LmFsdGVybmF0ZSlicmVhayBiO3c9Z2Yodyk7dT1nZih1KX13PW51bGx9ZWxzZSB3PW51bGw7bnVsbCE9PWsmJmhmKGcsaCxrLHcsITEpO251bGwhPT14JiZudWxsIT09eiYmaGYoZyx6LHgsdywhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgSj12ZTtlbHNlIGlmKG1lKGgpKWlmKHdlKUo9RmU7ZWxzZXtKPURlO3ZhciBLPUNlfWVsc2Uoaz1oLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09ay50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09aC50eXBlfHxcInJhZGlvXCI9PT1oLnR5cGUpJiYoSj1FZSk7aWYoSiYmKEo9SihhLGQpKSl7bmUoZyxKLGMsZSk7YnJlYWsgYX1LJiZLKGEsaCxkKTtcImZvY3Vzb3V0XCI9PT1hJiYoSz1oLl93cmFwcGVyU3RhdGUpJiZcbksuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWgudHlwZSYmYmIoaCxcIm51bWJlclwiLGgudmFsdWUpfUs9ZD91ZShkKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6aWYobWUoSyl8fFwidHJ1ZVwiPT09Sy5jb250ZW50RWRpdGFibGUpUWU9SyxSZT1kLFNlPW51bGw7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6U2U9UmU9UWU9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6VGU9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOlRlPSExO1VlKGcsYyxlKTticmVhaztjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUGUpYnJlYWs7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpVZShnLGMsZSl9dmFyIFE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIjticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOkw9XCJvbkNvbXBvc2l0aW9uRW5kXCI7YnJlYWsgYjtcbmNhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOkw9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1MPXZvaWQgMH1lbHNlIGllP2dlKGEsYykmJihMPVwib25Db21wb3NpdGlvbkVuZFwiKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7TCYmKGRlJiZcImtvXCIhPT1jLmxvY2FsZSYmKGllfHxcIm9uQ29tcG9zaXRpb25TdGFydFwiIT09TD9cIm9uQ29tcG9zaXRpb25FbmRcIj09PUwmJmllJiYoUT1uZCgpKTooa2Q9ZSxsZD1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxpZT0hMCkpLEs9b2UoZCxMKSwwPEsubGVuZ3RoJiYoTD1uZXcgTGQoTCxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OkwsbGlzdGVuZXJzOkt9KSxRP0wuZGF0YT1ROihRPWhlKGMpLG51bGwhPT1RJiYoTC5kYXRhPVEpKSkpO2lmKFE9Y2U/amUoYSxjKTprZShhLGMpKWQ9b2UoZCxcIm9uQmVmb3JlSW5wdXRcIiksMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFxuXCJiZWZvcmVpbnB1dFwiLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmUsbGlzdGVuZXJzOmR9KSxlLmRhdGE9USl9c2UoZyxiKX0pfWZ1bmN0aW9uIGVmKGEsYixjKXtyZXR1cm57aW5zdGFuY2U6YSxsaXN0ZW5lcjpiLGN1cnJlbnRUYXJnZXQ6Y319ZnVuY3Rpb24gb2UoYSxiKXtmb3IodmFyIGM9YitcIkNhcHR1cmVcIixkPVtdO251bGwhPT1hOyl7dmFyIGU9YSxmPWUuc3RhdGVOb2RlOzU9PT1lLnRhZyYmbnVsbCE9PWYmJihlPWYsZj1PYihhLGMpLG51bGwhPWYmJmQudW5zaGlmdChlZihhLGYsZSkpLGY9T2IoYSxiKSxudWxsIT1mJiZkLnB1c2goZWYoYSxmLGUpKSk7YT1hLnJldHVybn1yZXR1cm4gZH1mdW5jdGlvbiBnZihhKXtpZihudWxsPT09YSlyZXR1cm4gbnVsbDtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfVxuZnVuY3Rpb24gaGYoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yi5fcmVhY3ROYW1lLGc9W107bnVsbCE9PWMmJmMhPT1kOyl7dmFyIGg9YyxrPWguYWx0ZXJuYXRlLGw9aC5zdGF0ZU5vZGU7aWYobnVsbCE9PWsmJms9PT1kKWJyZWFrOzU9PT1oLnRhZyYmbnVsbCE9PWwmJihoPWwsZT8oaz1PYihjLGYpLG51bGwhPWsmJmcudW5zaGlmdChlZihjLGssaCkpKTplfHwoaz1PYihjLGYpLG51bGwhPWsmJmcucHVzaChlZihjLGssaCkpKSk7Yz1jLnJldHVybn0wIT09Zy5sZW5ndGgmJmEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6Z30pfWZ1bmN0aW9uIGpmKCl7fXZhciBrZj1udWxsLGxmPW51bGw7ZnVuY3Rpb24gbWYoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4hIWIuYXV0b0ZvY3VzfXJldHVybiExfVxuZnVuY3Rpb24gbmYoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfXZhciBvZj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCxwZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDA7ZnVuY3Rpb24gcWYoYSl7MT09PWEubm9kZVR5cGU/YS50ZXh0Q29udGVudD1cIlwiOjk9PT1hLm5vZGVUeXBlJiYoYT1hLmJvZHksbnVsbCE9YSYmKGEudGV4dENvbnRlbnQ9XCJcIikpfVxuZnVuY3Rpb24gcmYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWt9cmV0dXJuIGF9ZnVuY3Rpb24gc2YoYSl7YT1hLnByZXZpb3VzU2libGluZztmb3IodmFyIGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIiRcIj09PWN8fFwiJCFcIj09PWN8fFwiJD9cIj09PWMpe2lmKDA9PT1iKXJldHVybiBhO2ItLX1lbHNlXCIvJFwiPT09YyYmYisrfWE9YS5wcmV2aW91c1NpYmxpbmd9cmV0dXJuIG51bGx9dmFyIHRmPTA7ZnVuY3Rpb24gdWYoYSl7cmV0dXJueyQkdHlwZW9mOkdhLHRvU3RyaW5nOmEsdmFsdWVPZjphfX12YXIgdmY9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksd2Y9XCJfX3JlYWN0RmliZXIkXCIrdmYseGY9XCJfX3JlYWN0UHJvcHMkXCIrdmYsZmY9XCJfX3JlYWN0Q29udGFpbmVyJFwiK3ZmLHlmPVwiX19yZWFjdEV2ZW50cyRcIit2ZjtcbmZ1bmN0aW9uIHdjKGEpe3ZhciBiPWFbd2ZdO2lmKGIpcmV0dXJuIGI7Zm9yKHZhciBjPWEucGFyZW50Tm9kZTtjOyl7aWYoYj1jW2ZmXXx8Y1t3Zl0pe2M9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWIuY2hpbGR8fG51bGwhPT1jJiZudWxsIT09Yy5jaGlsZClmb3IoYT1zZihhKTtudWxsIT09YTspe2lmKGM9YVt3Zl0pcmV0dXJuIGM7YT1zZihhKX1yZXR1cm4gYn1hPWM7Yz1hLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQ2IoYSl7YT1hW3dmXXx8YVtmZl07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnJiYxMyE9PWEudGFnJiYzIT09YS50YWc/bnVsbDphfWZ1bmN0aW9uIHVlKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0aHJvdyBFcnJvcih5KDMzKSk7fWZ1bmN0aW9uIERiKGEpe3JldHVybiBhW3hmXXx8bnVsbH1cbmZ1bmN0aW9uICRlKGEpe3ZhciBiPWFbeWZdO3ZvaWQgMD09PWImJihiPWFbeWZdPW5ldyBTZXQpO3JldHVybiBifXZhciB6Zj1bXSxBZj0tMTtmdW5jdGlvbiBCZihhKXtyZXR1cm57Y3VycmVudDphfX1mdW5jdGlvbiBIKGEpezA+QWZ8fChhLmN1cnJlbnQ9emZbQWZdLHpmW0FmXT1udWxsLEFmLS0pfWZ1bmN0aW9uIEkoYSxiKXtBZisrO3pmW0FmXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIENmPXt9LE09QmYoQ2YpLE49QmYoITEpLERmPUNmO1xuZnVuY3Rpb24gRWYoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBDZjt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBGZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIEdmKCl7SChOKTtIKE0pfWZ1bmN0aW9uIEhmKGEsYixjKXtpZihNLmN1cnJlbnQhPT1DZil0aHJvdyBFcnJvcih5KDE2OCkpO0koTSxiKTtJKE4sYyl9XG5mdW5jdGlvbiBJZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7YT1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGEpKXRocm93IEVycm9yKHkoMTA4LFJhKGIpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIG0oe30sYyxkKX1mdW5jdGlvbiBKZihhKXthPShhPWEuc3RhdGVOb2RlKSYmYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8Q2Y7RGY9TS5jdXJyZW50O0koTSxhKTtJKE4sTi5jdXJyZW50KTtyZXR1cm4hMH1mdW5jdGlvbiBLZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgRXJyb3IoeSgxNjkpKTtjPyhhPUlmKGEsYixEZiksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1hLEgoTiksSChNKSxJKE0sYSkpOkgoTik7SShOLGMpfVxudmFyIExmPW51bGwsTWY9bnVsbCxOZj1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxPZj1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssUGY9ci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxRZj1yLnVuc3RhYmxlX3Nob3VsZFlpZWxkLFJmPXIudW5zdGFibGVfcmVxdWVzdFBhaW50LFNmPXIudW5zdGFibGVfbm93LFRmPXIudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsVWY9ci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxWZj1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LFdmPXIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksWGY9ci51bnN0YWJsZV9Mb3dQcmlvcml0eSxZZj1yLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxaZj17fSwkZj12b2lkIDAhPT1SZj9SZjpmdW5jdGlvbigpe30sYWc9bnVsbCxiZz1udWxsLGNnPSExLGRnPVNmKCksTz0xRTQ+ZGc/U2Y6ZnVuY3Rpb24oKXtyZXR1cm4gU2YoKS1kZ307XG5mdW5jdGlvbiBlZygpe3N3aXRjaChUZigpKXtjYXNlIFVmOnJldHVybiA5OTtjYXNlIFZmOnJldHVybiA5ODtjYXNlIFdmOnJldHVybiA5NztjYXNlIFhmOnJldHVybiA5NjtjYXNlIFlmOnJldHVybiA5NTtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBmZyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gVWY7Y2FzZSA5ODpyZXR1cm4gVmY7Y2FzZSA5NzpyZXR1cm4gV2Y7Y2FzZSA5NjpyZXR1cm4gWGY7Y2FzZSA5NTpyZXR1cm4gWWY7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZ2coYSxiKXthPWZnKGEpO3JldHVybiBOZihhLGIpfWZ1bmN0aW9uIGhnKGEsYixjKXthPWZnKGEpO3JldHVybiBPZihhLGIsYyl9ZnVuY3Rpb24gaWcoKXtpZihudWxsIT09Ymcpe3ZhciBhPWJnO2JnPW51bGw7UGYoYSl9amcoKX1cbmZ1bmN0aW9uIGpnKCl7aWYoIWNnJiZudWxsIT09YWcpe2NnPSEwO3ZhciBhPTA7dHJ5e3ZhciBiPWFnO2dnKDk5LGZ1bmN0aW9uKCl7Zm9yKDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTtkbyBjPWMoITApO3doaWxlKG51bGwhPT1jKX19KTthZz1udWxsfWNhdGNoKGMpe3Rocm93IG51bGwhPT1hZyYmKGFnPWFnLnNsaWNlKGErMSkpLE9mKFVmLGlnKSxjO31maW5hbGx5e2NnPSExfX19dmFyIGtnPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO2Z1bmN0aW9uIGxnKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9bSh7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pO3JldHVybiBifXJldHVybiBifXZhciBtZz1CZihudWxsKSxuZz1udWxsLG9nPW51bGwscGc9bnVsbDtmdW5jdGlvbiBxZygpe3BnPW9nPW5nPW51bGx9XG5mdW5jdGlvbiByZyhhKXt2YXIgYj1tZy5jdXJyZW50O0gobWcpO2EudHlwZS5fY29udGV4dC5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gc2coYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5hbHRlcm5hdGU7aWYoKGEuY2hpbGRMYW5lcyZiKT09PWIpaWYobnVsbD09PWN8fChjLmNoaWxkTGFuZXMmYik9PT1iKWJyZWFrO2Vsc2UgYy5jaGlsZExhbmVzfD1iO2Vsc2UgYS5jaGlsZExhbmVzfD1iLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKTthPWEucmV0dXJufX1mdW5jdGlvbiB0ZyhhLGIpe25nPWE7cGc9b2c9bnVsbDthPWEuZGVwZW5kZW5jaWVzO251bGwhPT1hJiZudWxsIT09YS5maXJzdENvbnRleHQmJigwIT09KGEubGFuZXMmYikmJih1Zz0hMCksYS5maXJzdENvbnRleHQ9bnVsbCl9XG5mdW5jdGlvbiB2ZyhhLGIpe2lmKHBnIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilwZz1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtpZihudWxsPT09b2cpe2lmKG51bGw9PT1uZyl0aHJvdyBFcnJvcih5KDMwOCkpO29nPWI7bmcuZGVwZW5kZW5jaWVzPXtsYW5lczowLGZpcnN0Q29udGV4dDpiLHJlc3BvbmRlcnM6bnVsbH19ZWxzZSBvZz1vZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgd2c9ITE7ZnVuY3Rpb24geGcoYSl7YS51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEubWVtb2l6ZWRTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6bnVsbCxsYXN0QmFzZVVwZGF0ZTpudWxsLHNoYXJlZDp7cGVuZGluZzpudWxsfSxlZmZlY3RzOm51bGx9fVxuZnVuY3Rpb24geWcoYSxiKXthPWEudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT09PWEmJihiLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmEuZmlyc3RCYXNlVXBkYXRlLGxhc3RCYXNlVXBkYXRlOmEubGFzdEJhc2VVcGRhdGUsc2hhcmVkOmEuc2hhcmVkLGVmZmVjdHM6YS5lZmZlY3RzfSl9ZnVuY3Rpb24gemcoYSxiKXtyZXR1cm57ZXZlbnRUaW1lOmEsbGFuZTpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbH19ZnVuY3Rpb24gQWcoYSxiKXthPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWEpe2E9YS5zaGFyZWQ7dmFyIGM9YS5wZW5kaW5nO251bGw9PT1jP2IubmV4dD1iOihiLm5leHQ9Yy5uZXh0LGMubmV4dD1iKTthLnBlbmRpbmc9Yn19XG5mdW5jdGlvbiBCZyhhLGIpe3ZhciBjPWEudXBkYXRlUXVldWUsZD1hLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmKGQ9ZC51cGRhdGVRdWV1ZSxjPT09ZCkpe3ZhciBlPW51bGwsZj1udWxsO2M9Yy5maXJzdEJhc2VVcGRhdGU7aWYobnVsbCE9PWMpe2Rve3ZhciBnPXtldmVudFRpbWU6Yy5ldmVudFRpbWUsbGFuZTpjLmxhbmUsdGFnOmMudGFnLHBheWxvYWQ6Yy5wYXlsb2FkLGNhbGxiYWNrOmMuY2FsbGJhY2ssbmV4dDpudWxsfTtudWxsPT09Zj9lPWY9ZzpmPWYubmV4dD1nO2M9Yy5uZXh0fXdoaWxlKG51bGwhPT1jKTtudWxsPT09Zj9lPWY9YjpmPWYubmV4dD1ifWVsc2UgZT1mPWI7Yz17YmFzZVN0YXRlOmQuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTplLGxhc3RCYXNlVXBkYXRlOmYsc2hhcmVkOmQuc2hhcmVkLGVmZmVjdHM6ZC5lZmZlY3RzfTthLnVwZGF0ZVF1ZXVlPWM7cmV0dXJufWE9Yy5sYXN0QmFzZVVwZGF0ZTtudWxsPT09YT9jLmZpcnN0QmFzZVVwZGF0ZT1iOmEubmV4dD1cbmI7Yy5sYXN0QmFzZVVwZGF0ZT1ifVxuZnVuY3Rpb24gQ2coYSxiLGMsZCl7dmFyIGU9YS51cGRhdGVRdWV1ZTt3Zz0hMTt2YXIgZj1lLmZpcnN0QmFzZVVwZGF0ZSxnPWUubGFzdEJhc2VVcGRhdGUsaD1lLnNoYXJlZC5wZW5kaW5nO2lmKG51bGwhPT1oKXtlLnNoYXJlZC5wZW5kaW5nPW51bGw7dmFyIGs9aCxsPWsubmV4dDtrLm5leHQ9bnVsbDtudWxsPT09Zz9mPWw6Zy5uZXh0PWw7Zz1rO3ZhciBuPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1uKXtuPW4udXBkYXRlUXVldWU7dmFyIEE9bi5sYXN0QmFzZVVwZGF0ZTtBIT09ZyYmKG51bGw9PT1BP24uZmlyc3RCYXNlVXBkYXRlPWw6QS5uZXh0PWwsbi5sYXN0QmFzZVVwZGF0ZT1rKX19aWYobnVsbCE9PWYpe0E9ZS5iYXNlU3RhdGU7Zz0wO249bD1rPW51bGw7ZG97aD1mLmxhbmU7dmFyIHA9Zi5ldmVudFRpbWU7aWYoKGQmaCk9PT1oKXtudWxsIT09biYmKG49bi5uZXh0PXtldmVudFRpbWU6cCxsYW5lOjAsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssXG5uZXh0Om51bGx9KTthOnt2YXIgQz1hLHg9ZjtoPWI7cD1jO3N3aXRjaCh4LnRhZyl7Y2FzZSAxOkM9eC5wYXlsb2FkO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDKXtBPUMuY2FsbChwLEEsaCk7YnJlYWsgYX1BPUM7YnJlYWsgYTtjYXNlIDM6Qy5mbGFncz1DLmZsYWdzJi00MDk3fDY0O2Nhc2UgMDpDPXgucGF5bG9hZDtoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDP0MuY2FsbChwLEEsaCk6QztpZihudWxsPT09aHx8dm9pZCAwPT09aClicmVhayBhO0E9bSh7fSxBLGgpO2JyZWFrIGE7Y2FzZSAyOndnPSEwfX1udWxsIT09Zi5jYWxsYmFjayYmKGEuZmxhZ3N8PTMyLGg9ZS5lZmZlY3RzLG51bGw9PT1oP2UuZWZmZWN0cz1bZl06aC5wdXNoKGYpKX1lbHNlIHA9e2V2ZW50VGltZTpwLGxhbmU6aCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxuZXh0Om51bGx9LG51bGw9PT1uPyhsPW49cCxrPUEpOm49bi5uZXh0PXAsZ3w9aDtmPWYubmV4dDtpZihudWxsPT09XG5mKWlmKGg9ZS5zaGFyZWQucGVuZGluZyxudWxsPT09aClicmVhaztlbHNlIGY9aC5uZXh0LGgubmV4dD1udWxsLGUubGFzdEJhc2VVcGRhdGU9aCxlLnNoYXJlZC5wZW5kaW5nPW51bGx9d2hpbGUoMSk7bnVsbD09PW4mJihrPUEpO2UuYmFzZVN0YXRlPWs7ZS5maXJzdEJhc2VVcGRhdGU9bDtlLmxhc3RCYXNlVXBkYXRlPW47RGd8PWc7YS5sYW5lcz1nO2EubWVtb2l6ZWRTdGF0ZT1BfX1mdW5jdGlvbiBFZyhhLGIsYyl7YT1iLmVmZmVjdHM7Yi5lZmZlY3RzPW51bGw7aWYobnVsbCE9PWEpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGQ9YVtiXSxlPWQuY2FsbGJhY2s7aWYobnVsbCE9PWUpe2QuY2FsbGJhY2s9bnVsbDtkPWM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGUpdGhyb3cgRXJyb3IoeSgxOTEsZSkpO2UuY2FsbChkKX19fXZhciBGZz0obmV3IGFhLkNvbXBvbmVudCkucmVmcztcbmZ1bmN0aW9uIEdnKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjptKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7MD09PWEubGFuZXMmJihhLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1jKX1cbnZhciBLZz17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxzKT9aYihhKT09PWE6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YudGFnPTE7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBjPUhnKCksZD1JZyhhKSxlPXpnKGMsZCk7ZS50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGUuY2FsbGJhY2s9XG5iKTtBZyhhLGUpO0pnKGEsZCxjKX19O2Z1bmN0aW9uIExnKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IUplKGMsZCl8fCFKZShlLGYpOiEwfVxuZnVuY3Rpb24gTWcoYSxiLGMpe3ZhciBkPSExLGU9Q2Y7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9dmcoZik6KGU9RmYoYik/RGY6TS5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/RWYoYSxlKTpDZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPUtnO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbHM9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gTmcoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gT2coYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1GZzt4ZyhhKTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PXZnKGYpOihmPUZmKGIpP0RmOk0uY3VycmVudCxlLmNvbnRleHQ9RWYoYSxmKSk7Q2coYSxjLGUsZCk7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKEdnKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fFxuKGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLENnKGEsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZmxhZ3N8PTQpfXZhciBQZz1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gUWcoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHkoMTQ3LGEpKTt2YXIgZT1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZSlyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1kLnJlZnM7Yj09PUZnJiYoYj1kLnJlZnM9e30pO251bGw9PT1hP2RlbGV0ZSBiW2VdOmJbZV09YX07Yi5fc3RyaW5nUmVmPWU7cmV0dXJuIGJ9aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IEVycm9yKHkoMjg0KSk7aWYoIWMuX293bmVyKXRocm93IEVycm9yKHkoMjkwLGEpKTt9cmV0dXJuIGF9XG5mdW5jdGlvbiBSZyhhLGIpe2lmKFwidGV4dGFyZWFcIiE9PWEudHlwZSl0aHJvdyBFcnJvcih5KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO31cbmZ1bmN0aW9uIFNnKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZmxhZ3M9OH19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2E9VGcoYSxiKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZmxhZ3M9MixcbmMpOmQ7Yi5mbGFncz0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmbnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5mbGFncz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9VWcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gayhhLGIsYyxkKXtpZihudWxsIT09YiYmYi5lbGVtZW50VHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyksZC5yZWY9UWcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPVZnKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPVFnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPVxuV2coYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG4oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVhnKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gQShhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9VWcoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGM9VmcoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksYy5yZWY9UWcoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIHRhOnJldHVybiBiPVdnKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZihQZyhiKXx8TGEoYikpcmV0dXJuIGI9WGcoYixcbmEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtSZyhhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHAoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT11YT9uKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6ayhhLGIsYyxkKTpudWxsO2Nhc2UgdGE6cmV0dXJuIGMua2V5PT09ZT9sKGEsYixjLGQpOm51bGx9aWYoUGcoYyl8fExhKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm4oYSxiLGMsZCxudWxsKTtSZyhhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIEMoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1hLmdldChjKXx8XG5udWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09dWE/bihiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTprKGIsYSxkLGUpO2Nhc2UgdGE6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSl9aWYoUGcoZCl8fExhKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG4oYixhLGQsZSxudWxsKTtSZyhiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIHgoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsdD1udWxsLHU9Zyx6PWc9MCxxPW51bGw7bnVsbCE9PXUmJno8aC5sZW5ndGg7eisrKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciBuPXAoZSx1LGhbel0sayk7aWYobnVsbD09PW4pe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09XG5uLmFsdGVybmF0ZSYmYihlLHUpO2c9ZihuLGcseik7bnVsbD09PXQ/bD1uOnQuc2libGluZz1uO3Q9bjt1PXF9aWYoej09PWgubGVuZ3RoKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDt6PGgubGVuZ3RoO3orKyl1PUEoZSxoW3pdLGspLG51bGwhPT11JiYoZz1mKHUsZyx6KSxudWxsPT09dD9sPXU6dC5zaWJsaW5nPXUsdD11KTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7ejxoLmxlbmd0aDt6KyspcT1DKHUsZSx6LGhbel0sayksbnVsbCE9PXEmJihhJiZudWxsIT09cS5hbHRlcm5hdGUmJnUuZGVsZXRlKG51bGw9PT1xLmtleT96OnEua2V5KSxnPWYocSxnLHopLG51bGw9PT10P2w9cTp0LnNpYmxpbmc9cSx0PXEpO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gdyhlLGcsaCxrKXt2YXIgbD1MYShoKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyBFcnJvcih5KDE1MCkpO2g9bC5jYWxsKGgpO2lmKG51bGw9PVxuaCl0aHJvdyBFcnJvcih5KDE1MSkpO2Zvcih2YXIgdD1sPW51bGwsdT1nLHo9Zz0wLHE9bnVsbCxuPWgubmV4dCgpO251bGwhPT11JiYhbi5kb25lO3orKyxuPWgubmV4dCgpKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciB3PXAoZSx1LG4udmFsdWUsayk7aWYobnVsbD09PXcpe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09dy5hbHRlcm5hdGUmJmIoZSx1KTtnPWYodyxnLHopO251bGw9PT10P2w9dzp0LnNpYmxpbmc9dzt0PXc7dT1xfWlmKG4uZG9uZSlyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUEoZSxuLnZhbHVlLGspLG51bGwhPT1uJiYoZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUModSxlLHosbi52YWx1ZSxrKSxudWxsIT09biYmKGEmJm51bGwhPT1uLmFsdGVybmF0ZSYmXG51LmRlbGV0ZShudWxsPT09bi5rZXk/ejpuLmtleSksZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixoKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT11YSYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBzYTphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpe3N3aXRjaChrLnRhZyl7Y2FzZSA3OmlmKGYudHlwZT09PXVhKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnByb3BzLmNoaWxkcmVuKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWJyZWFrO2RlZmF1bHQ6aWYoay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7XG5kPWUoayxmLnByb3BzKTtkLnJlZj1RZyhhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX19YyhhLGspO2JyZWFrfWVsc2UgYihhLGspO2s9ay5zaWJsaW5nfWYudHlwZT09PXVhPyhkPVhnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1WZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1RZyhhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgdGE6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9XG5XZyhmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZiksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1VZyhmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKTtpZihQZyhmKSlyZXR1cm4geChhLGQsZixoKTtpZihMYShmKSlyZXR1cm4gdyhhLGQsZixoKTtsJiZSZyhhLGYpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgZiYmIWspc3dpdGNoKGEudGFnKXtjYXNlIDE6Y2FzZSAyMjpjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRocm93IEVycm9yKHkoMTUyLFJhKGEudHlwZSl8fFwiQ29tcG9uZW50XCIpKTt9cmV0dXJuIGMoYSxkKX19dmFyIFlnPVNnKCEwKSxaZz1TZyghMSksJGc9e30sYWg9QmYoJGcpLGJoPUJmKCRnKSxjaD1CZigkZyk7XG5mdW5jdGlvbiBkaChhKXtpZihhPT09JGcpdGhyb3cgRXJyb3IoeSgxNzQpKTtyZXR1cm4gYX1mdW5jdGlvbiBlaChhLGIpe0koY2gsYik7SShiaCxhKTtJKGFoLCRnKTthPWIubm9kZVR5cGU7c3dpdGNoKGEpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOm1iKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDphPTg9PT1hP2IucGFyZW50Tm9kZTpiLGI9YS5uYW1lc3BhY2VVUkl8fG51bGwsYT1hLnRhZ05hbWUsYj1tYihiLGEpfUgoYWgpO0koYWgsYil9ZnVuY3Rpb24gZmgoKXtIKGFoKTtIKGJoKTtIKGNoKX1mdW5jdGlvbiBnaChhKXtkaChjaC5jdXJyZW50KTt2YXIgYj1kaChhaC5jdXJyZW50KTt2YXIgYz1tYihiLGEudHlwZSk7YiE9PWMmJihJKGJoLGEpLEkoYWgsYykpfWZ1bmN0aW9uIGhoKGEpe2JoLmN1cnJlbnQ9PT1hJiYoSChhaCksSChiaCkpfXZhciBQPUJmKDApO1xuZnVuY3Rpb24gaWgoYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXt2YXIgYz1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsPT09Y3x8XCIkP1wiPT09Yy5kYXRhfHxcIiQhXCI9PT1jLmRhdGEpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBifWVsc2UgaWYobnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ31yZXR1cm4gbnVsbH12YXIgamg9bnVsbCxraD1udWxsLGxoPSExO1xuZnVuY3Rpb24gbWgoYSxiKXt2YXIgYz1uaCg1LG51bGwsbnVsbCwwKTtjLmVsZW1lbnRUeXBlPVwiREVMRVRFRFwiO2MudHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yy5mbGFncz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24gb2goYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHBoKGEpe2lmKGxoKXt2YXIgYj1raDtpZihiKXt2YXIgYz1iO2lmKCFvaChhLGIpKXtiPXJmKGMubmV4dFNpYmxpbmcpO2lmKCFifHwhb2goYSxiKSl7YS5mbGFncz1hLmZsYWdzJi0xMDI1fDI7bGg9ITE7amg9YTtyZXR1cm59bWgoamgsYyl9amg9YTtraD1yZihiLmZpcnN0Q2hpbGQpfWVsc2UgYS5mbGFncz1hLmZsYWdzJi0xMDI1fDIsbGg9ITEsamg9YX19ZnVuY3Rpb24gcWgoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO2poPWF9XG5mdW5jdGlvbiByaChhKXtpZihhIT09amgpcmV0dXJuITE7aWYoIWxoKXJldHVybiBxaChhKSxsaD0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNSE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIW5mKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj1raDtiOyltaChhLGIpLGI9cmYoYi5uZXh0U2libGluZyk7cWgoYSk7aWYoMTM9PT1hLnRhZyl7YT1hLm1lbW9pemVkU3RhdGU7YT1udWxsIT09YT9hLmRlaHlkcmF0ZWQ6bnVsbDtpZighYSl0aHJvdyBFcnJvcih5KDMxNykpO2E6e2E9YS5uZXh0U2libGluZztmb3IoYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiLyRcIj09PWMpe2lmKDA9PT1iKXtraD1yZihhLm5leHRTaWJsaW5nKTticmVhayBhfWItLX1lbHNlXCIkXCIhPT1jJiZcIiQhXCIhPT1jJiZcIiQ/XCIhPT1jfHxiKyt9YT1hLm5leHRTaWJsaW5nfWtoPW51bGx9fWVsc2Uga2g9amg/cmYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9XG5mdW5jdGlvbiBzaCgpe2toPWpoPW51bGw7bGg9ITF9dmFyIHRoPVtdO2Z1bmN0aW9uIHVoKCl7Zm9yKHZhciBhPTA7YTx0aC5sZW5ndGg7YSsrKXRoW2FdLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PW51bGw7dGgubGVuZ3RoPTB9dmFyIHZoPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsd2g9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcseGg9MCxSPW51bGwsUz1udWxsLFQ9bnVsbCx5aD0hMSx6aD0hMTtmdW5jdGlvbiBBaCgpe3Rocm93IEVycm9yKHkoMzIxKSk7fWZ1bmN0aW9uIEJoKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIUhlKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBDaChhLGIsYyxkLGUsZil7eGg9ZjtSPWI7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2IubGFuZXM9MDt2aC5jdXJyZW50PW51bGw9PT1hfHxudWxsPT09YS5tZW1vaXplZFN0YXRlP0RoOkVoO2E9YyhkLGUpO2lmKHpoKXtmPTA7ZG97emg9ITE7aWYoISgyNT5mKSl0aHJvdyBFcnJvcih5KDMwMSkpO2YrPTE7VD1TPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO3ZoLmN1cnJlbnQ9Rmg7YT1jKGQsZSl9d2hpbGUoemgpfXZoLmN1cnJlbnQ9R2g7Yj1udWxsIT09UyYmbnVsbCE9PVMubmV4dDt4aD0wO1Q9Uz1SPW51bGw7eWg9ITE7aWYoYil0aHJvdyBFcnJvcih5KDMwMCkpO3JldHVybiBhfWZ1bmN0aW9uIEhoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxiYXNlUXVldWU6bnVsbCxxdWV1ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hO3JldHVybiBUfVxuZnVuY3Rpb24gSWgoKXtpZihudWxsPT09Uyl7dmFyIGE9Ui5hbHRlcm5hdGU7YT1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbH1lbHNlIGE9Uy5uZXh0O3ZhciBiPW51bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZTpULm5leHQ7aWYobnVsbCE9PWIpVD1iLFM9YTtlbHNle2lmKG51bGw9PT1hKXRocm93IEVycm9yKHkoMzEwKSk7Uz1hO2E9e21lbW9pemVkU3RhdGU6Uy5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpTLmJhc2VTdGF0ZSxiYXNlUXVldWU6Uy5iYXNlUXVldWUscXVldWU6Uy5xdWV1ZSxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YX1yZXR1cm4gVH1mdW5jdGlvbiBKaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIEtoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9UyxlPWQuYmFzZVF1ZXVlLGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXtpZihudWxsIT09ZSl7dmFyIGc9ZS5uZXh0O2UubmV4dD1mLm5leHQ7Zi5uZXh0PWd9ZC5iYXNlUXVldWU9ZT1mO2MucGVuZGluZz1udWxsfWlmKG51bGwhPT1lKXtlPWUubmV4dDtkPWQuYmFzZVN0YXRlO3ZhciBoPWc9Zj1udWxsLGs9ZTtkb3t2YXIgbD1rLmxhbmU7aWYoKHhoJmwpPT09bCludWxsIT09aCYmKGg9aC5uZXh0PXtsYW5lOjAsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixlYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9KSxkPWsuZWFnZXJSZWR1Y2VyPT09YT9rLmVhZ2VyU3RhdGU6YShkLGsuYWN0aW9uKTtlbHNle3ZhciBuPXtsYW5lOmwsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixcbmVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH07bnVsbD09PWg/KGc9aD1uLGY9ZCk6aD1oLm5leHQ9bjtSLmxhbmVzfD1sO0RnfD1sfWs9ay5uZXh0fXdoaWxlKG51bGwhPT1rJiZrIT09ZSk7bnVsbD09PWg/Zj1kOmgubmV4dD1nO0hlKGQsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZDtiLmJhc2VTdGF0ZT1mO2IuYmFzZVF1ZXVlPWg7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1kfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBMaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPWMuZGlzcGF0Y2gsZT1jLnBlbmRpbmcsZj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUpe2MucGVuZGluZz1udWxsO3ZhciBnPWU9ZS5uZXh0O2RvIGY9YShmLGcuYWN0aW9uKSxnPWcubmV4dDt3aGlsZShnIT09ZSk7SGUoZixiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO251bGw9PT1iLmJhc2VRdWV1ZSYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bZixkXX1cbmZ1bmN0aW9uIE1oKGEsYixjKXt2YXIgZD1iLl9nZXRWZXJzaW9uO2Q9ZChiLl9zb3VyY2UpO3ZhciBlPWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk7aWYobnVsbCE9PWUpYT1lPT09ZDtlbHNlIGlmKGE9YS5tdXRhYmxlUmVhZExhbmVzLGE9KHhoJmEpPT09YSliLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWQsdGgucHVzaChiKTtpZihhKXJldHVybiBjKGIuX3NvdXJjZSk7dGgucHVzaChiKTt0aHJvdyBFcnJvcih5KDM1MCkpO31cbmZ1bmN0aW9uIE5oKGEsYixjLGQpe3ZhciBlPVU7aWYobnVsbD09PWUpdGhyb3cgRXJyb3IoeSgzNDkpKTt2YXIgZj1iLl9nZXRWZXJzaW9uLGc9ZihiLl9zb3VyY2UpLGg9dmguY3VycmVudCxrPWgudXNlU3RhdGUoZnVuY3Rpb24oKXtyZXR1cm4gTWgoZSxiLGMpfSksbD1rWzFdLG49a1swXTtrPVQ7dmFyIEE9YS5tZW1vaXplZFN0YXRlLHA9QS5yZWZzLEM9cC5nZXRTbmFwc2hvdCx4PUEuc291cmNlO0E9QS5zdWJzY3JpYmU7dmFyIHc9UjthLm1lbW9pemVkU3RhdGU9e3JlZnM6cCxzb3VyY2U6YixzdWJzY3JpYmU6ZH07aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtwLmdldFNuYXBzaG90PWM7cC5zZXRTbmFwc2hvdD1sO3ZhciBhPWYoYi5fc291cmNlKTtpZighSGUoZyxhKSl7YT1jKGIuX3NvdXJjZSk7SGUobixhKXx8KGwoYSksYT1JZyh3KSxlLm11dGFibGVSZWFkTGFuZXN8PWEmZS5wZW5kaW5nTGFuZXMpO2E9ZS5tdXRhYmxlUmVhZExhbmVzO2UuZW50YW5nbGVkTGFuZXN8PWE7Zm9yKHZhciBkPVxuZS5lbnRhbmdsZW1lbnRzLGg9YTswPGg7KXt2YXIgaz0zMS1WYyhoKSx2PTE8PGs7ZFtrXXw9YTtoJj1+dn19fSxbYyxiLGRdKTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiBkKGIuX3NvdXJjZSxmdW5jdGlvbigpe3ZhciBhPXAuZ2V0U25hcHNob3QsYz1wLnNldFNuYXBzaG90O3RyeXtjKGEoYi5fc291cmNlKSk7dmFyIGQ9SWcodyk7ZS5tdXRhYmxlUmVhZExhbmVzfD1kJmUucGVuZGluZ0xhbmVzfWNhdGNoKHEpe2MoZnVuY3Rpb24oKXt0aHJvdyBxO30pfX0pfSxbYixkXSk7SGUoQyxjKSYmSGUoeCxiKSYmSGUoQSxkKXx8KGE9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6bn0sYS5kaXNwYXRjaD1sPU9oLmJpbmQobnVsbCxSLGEpLGsucXVldWU9YSxrLmJhc2VRdWV1ZT1udWxsLG49TWgoZSxiLGMpLGsubWVtb2l6ZWRTdGF0ZT1rLmJhc2VTdGF0ZT1uKTtyZXR1cm4gbn1cbmZ1bmN0aW9uIFBoKGEsYixjKXt2YXIgZD1JaCgpO3JldHVybiBOaChkLGEsYixjKX1mdW5jdGlvbiBRaChhKXt2YXIgYj1IaCgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX1cbmZ1bmN0aW9uIFJoKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtiPVIudXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbH0sUi51cGRhdGVRdWV1ZT1iLGIubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGM9Yi5sYXN0RWZmZWN0LG51bGw9PT1jP2IubGFzdEVmZmVjdD1hLm5leHQ9YTooZD1jLm5leHQsYy5uZXh0PWEsYS5uZXh0PWQsYi5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBTaChhKXt2YXIgYj1IaCgpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfWZ1bmN0aW9uIFRoKCl7cmV0dXJuIEloKCkubWVtb2l6ZWRTdGF0ZX1mdW5jdGlvbiBVaChhLGIsYyxkKXt2YXIgZT1IaCgpO1IuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiBWaChhLGIsYyxkKXt2YXIgZT1JaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1TKXt2YXIgZz1TLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJkJoKGQsZy5kZXBzKSl7UmgoYixjLGYsZCk7cmV0dXJufX1SLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyxmLGQpfWZ1bmN0aW9uIFdoKGEsYil7cmV0dXJuIFVoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWGgoYSxiKXtyZXR1cm4gVmgoNTE2LDQsYSxiKX1mdW5jdGlvbiBZaChhLGIpe3JldHVybiBWaCg0LDIsYSxiKX1mdW5jdGlvbiBaaChhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fVxuZnVuY3Rpb24gJGgoYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBWaCg0LDIsWmguYmluZChudWxsLGIsYSksYyl9ZnVuY3Rpb24gYWkoKXt9ZnVuY3Rpb24gYmkoYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9ZnVuY3Rpb24gY2koYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9XG5mdW5jdGlvbiBkaShhLGIpe3ZhciBjPWVnKCk7Z2coOTg+Yz85ODpjLGZ1bmN0aW9uKCl7YSghMCl9KTtnZyg5NzxjPzk3OmMsZnVuY3Rpb24oKXt2YXIgYz13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7YSghMSksYigpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1jfX0pfVxuZnVuY3Rpb24gT2goYSxiLGMpe3ZhciBkPUhnKCksZT1JZyhhKSxmPXtsYW5lOmUsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sZz1iLnBlbmRpbmc7bnVsbD09PWc/Zi5uZXh0PWY6KGYubmV4dD1nLm5leHQsZy5uZXh0PWYpO2IucGVuZGluZz1mO2c9YS5hbHRlcm5hdGU7aWYoYT09PVJ8fG51bGwhPT1nJiZnPT09Uil6aD15aD0hMDtlbHNle2lmKDA9PT1hLmxhbmVzJiYobnVsbD09PWd8fDA9PT1nLmxhbmVzKSYmKGc9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1nKSl0cnl7dmFyIGg9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxrPWcoaCxjKTtmLmVhZ2VyUmVkdWNlcj1nO2YuZWFnZXJTdGF0ZT1rO2lmKEhlKGssaCkpcmV0dXJufWNhdGNoKGwpe31maW5hbGx5e31KZyhhLGUsZCl9fVxudmFyIEdoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpBaCx1c2VDb250ZXh0OkFoLHVzZUVmZmVjdDpBaCx1c2VJbXBlcmF0aXZlSGFuZGxlOkFoLHVzZUxheW91dEVmZmVjdDpBaCx1c2VNZW1vOkFoLHVzZVJlZHVjZXI6QWgsdXNlUmVmOkFoLHVzZVN0YXRlOkFoLHVzZURlYnVnVmFsdWU6QWgsdXNlRGVmZXJyZWRWYWx1ZTpBaCx1c2VUcmFuc2l0aW9uOkFoLHVzZU11dGFibGVTb3VyY2U6QWgsdXNlT3BhcXVlSWRlbnRpZmllcjpBaCx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LERoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe0hoKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OldoLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBVaCg0LDIsWmguYmluZChudWxsLFxuYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFVoKDQsMixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9SGgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9ZC5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6U2gsdXNlU3RhdGU6UWgsdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPVFoKGEpLGM9YlswXSxkPWJbMV07V2goZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO1xud2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVFoKCExKSxiPWFbMF07YT1kaS5iaW5kKG51bGwsYVsxXSk7U2goYSk7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7ZC5tZW1vaXplZFN0YXRlPXtyZWZzOntnZXRTbmFwc2hvdDpiLHNldFNuYXBzaG90Om51bGx9LHNvdXJjZTphLHN1YnNjcmliZTpjfTtyZXR1cm4gTmgoZCxhLGIsYyl9LHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtpZihsaCl7dmFyIGE9ITEsYj11ZihmdW5jdGlvbigpe2F8fChhPSEwLGMoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpKTt0aHJvdyBFcnJvcih5KDM1NSkpO30pLGM9UWgoYilbMV07MD09PShSLm1vZGUmMikmJihSLmZsYWdzfD01MTYsUmgoNSxmdW5jdGlvbigpe2MoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpfSxcbnZvaWQgMCxudWxsKSk7cmV0dXJuIGJ9Yj1cInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KTtRaChiKTtyZXR1cm4gYn0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxFaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOktoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBLaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1LaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUtoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBLaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRmg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpMaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9TGgoSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1MaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LGVpPXJhLlJlYWN0Q3VycmVudE93bmVyLHVnPSExO2Z1bmN0aW9uIGZpKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/WmcoYixudWxsLGMsZCk6WWcoYixhLmNoaWxkLGMsZCl9ZnVuY3Rpb24gZ2koYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO3RnKGIsZSk7ZD1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaShhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBnPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmIWppKGcpJiZ2b2lkIDA9PT1nLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1nLGtpKGEsYixnLGQsZSxmKTthPVZnKGMudHlwZSxudWxsLGQsYixiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWc9YS5jaGlsZDtpZigwPT09KGUmZikmJihlPWcubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6SmUsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gaGkoYSxiLGYpO2IuZmxhZ3N8PTE7YT1UZyhnLGQpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIGtpKGEsYixjLGQsZSxmKXtpZihudWxsIT09YSYmSmUoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmKWlmKHVnPSExLDAhPT0oZiZlKSkwIT09KGEuZmxhZ3MmMTYzODQpJiYodWc9ITApO2Vsc2UgcmV0dXJuIGIubGFuZXM9YS5sYW5lcyxoaShhLGIsZik7cmV0dXJuIGxpKGEsYixjLGQsZil9XG5mdW5jdGlvbiBtaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLmNoaWxkcmVuLGY9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7aWYoXCJoaWRkZW5cIj09PWQubW9kZXx8XCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiPT09ZC5tb2RlKWlmKDA9PT0oYi5tb2RlJjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsYyk7ZWxzZSBpZigwIT09KGMmMTA3Mzc0MTgyNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixudWxsIT09Zj9mLmJhc2VMYW5lczpjKTtlbHNlIHJldHVybiBhPW51bGwhPT1mP2YuYmFzZUxhbmVzfGM6YyxiLmxhbmVzPWIuY2hpbGRMYW5lcz0xMDczNzQxODI0LGIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmF9LG5pKGIsYSksbnVsbDtlbHNlIG51bGwhPT1mPyhkPWYuYmFzZUxhbmVzfGMsYi5tZW1vaXplZFN0YXRlPW51bGwpOmQ9YyxuaShiLGQpO2ZpKGEsYixlLGMpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gb2koYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5mbGFnc3w9MTI4fWZ1bmN0aW9uIGxpKGEsYixjLGQsZSl7dmFyIGY9RmYoYyk/RGY6TS5jdXJyZW50O2Y9RWYoYixmKTt0ZyhiLGUpO2M9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gcGkoYSxiLGMsZCxlKXtpZihGZihjKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO3RnKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLE1nKGIsYyxkKSxPZyhiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD12ZyhsKToobD1GZihjKT9EZjpNLmN1cnJlbnQsbD1FZihiLGwpKTt2YXIgbj1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGshPT1sKSYmTmcoYixnLGQsbCk7d2c9ITE7dmFyIHA9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTtrPWIubWVtb2l6ZWRTdGF0ZTtoIT09ZHx8cCE9PWt8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuJiYoR2coYixjLG4sZCksaz1iLm1lbW9pemVkU3RhdGUpLChoPXdnfHxMZyhiLGMsaCxkLHAsayxsKSk/KEF8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09XG50eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9ayksZy5wcm9wcz1kLGcuc3RhdGU9ayxnLmNvbnRleHQ9bCxkPWgpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGQ9ITEpfWVsc2V7Zz1iLnN0YXRlTm9kZTt5ZyhhLGIpO2g9Yi5tZW1vaXplZFByb3BzO2w9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOmxnKGIudHlwZSxoKTtnLnByb3BzPWw7QT1iLnBlbmRpbmdQcm9wcztwPWcuY29udGV4dDtrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPXZnKGspOihrPUZmKGMpP0RmOk0uY3VycmVudCxrPUVmKGIsaykpO3ZhciBDPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyhuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDfHxcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09QXx8cCE9PWspJiZOZyhiLGcsZCxrKTt3Zz0hMTtwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7dmFyIHg9Yi5tZW1vaXplZFN0YXRlO2ghPT1BfHxwIT09eHx8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIEMmJihHZyhiLGMsQyxkKSx4PWIubWVtb2l6ZWRTdGF0ZSksKGw9d2d8fExnKGIsYyxsLGQscCx4LGspKT8obnx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCxcbngsayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCx4LGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZmxhZ3N8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPXgpLGcucHJvcHM9ZCxnLnN0YXRlPXgsZy5jb250ZXh0PWssZD1sKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxcbmg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksZD0hMSl9cmV0dXJuIHFpKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIHFpKGEsYixjLGQsZSxmKXtvaShhLGIpO3ZhciBnPTAhPT0oYi5mbGFncyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZLZihiLGMsITEpLGhpKGEsYixmKTtkPWIuc3RhdGVOb2RlO2VpLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZmxhZ3N8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9WWcoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1ZZyhiLG51bGwsaCxmKSk6ZmkoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmS2YoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiByaShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P0hmKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJkhmKGEsYi5jb250ZXh0LCExKTtlaChhLGIuY29udGFpbmVySW5mbyl9XG52YXIgc2k9e2RlaHlkcmF0ZWQ6bnVsbCxyZXRyeUxhbmU6MH07XG5mdW5jdGlvbiB0aShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1QLmN1cnJlbnQsZj0hMSxnOyhnPTAhPT0oYi5mbGFncyY2NCkpfHwoZz1udWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZT8hMTowIT09KGUmMikpO2c/KGY9ITAsYi5mbGFncyY9LTY1KTpudWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZXx8dm9pZCAwPT09ZC5mYWxsYmFja3x8ITA9PT1kLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwoZXw9MSk7SShQLGUmMSk7aWYobnVsbD09PWEpe3ZvaWQgMCE9PWQuZmFsbGJhY2smJnBoKGIpO2E9ZC5jaGlsZHJlbjtlPWQuZmFsbGJhY2s7aWYoZilyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxiLm1lbW9pemVkU3RhdGU9c2ksYTtpZihcIm51bWJlclwiPT09dHlwZW9mIGQudW5zdGFibGVfZXhwZWN0ZWRMb2FkVGltZSlyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxcbmIubWVtb2l6ZWRTdGF0ZT1zaSxiLmxhbmVzPTMzNTU0NDMyLGE7Yz12aSh7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjphfSxiLm1vZGUsYyxudWxsKTtjLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWN9aWYobnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSl7aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTp7YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31pZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9Olxue2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9ZnVuY3Rpb24gdWkoYSxiLGMsZCl7dmFyIGU9YS5tb2RlLGY9YS5jaGlsZDtiPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Yn07MD09PShlJjIpJiZudWxsIT09Zj8oZi5jaGlsZExhbmVzPTAsZi5wZW5kaW5nUHJvcHM9Yik6Zj12aShiLGUsMCxudWxsKTtjPVhnKGMsZSxkLG51bGwpO2YucmV0dXJuPWE7Yy5yZXR1cm49YTtmLnNpYmxpbmc9YzthLmNoaWxkPWY7cmV0dXJuIGN9XG5mdW5jdGlvbiB4aShhLGIsYyxkKXt2YXIgZT1hLmNoaWxkO2E9ZS5zaWJsaW5nO2M9VGcoZSx7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpjfSk7MD09PShiLm1vZGUmMikmJihjLmxhbmVzPWQpO2MucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGw7bnVsbCE9PWEmJihhLm5leHRFZmZlY3Q9bnVsbCxhLmZsYWdzPTgsYi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YSk7cmV0dXJuIGIuY2hpbGQ9Y31cbmZ1bmN0aW9uIHdpKGEsYixjLGQsZSl7dmFyIGY9Yi5tb2RlLGc9YS5jaGlsZDthPWcuc2libGluZzt2YXIgaD17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmN9OzA9PT0oZiYyKSYmYi5jaGlsZCE9PWc/KGM9Yi5jaGlsZCxjLmNoaWxkTGFuZXM9MCxjLnBlbmRpbmdQcm9wcz1oLGc9Yy5sYXN0RWZmZWN0LG51bGwhPT1nPyhiLmZpcnN0RWZmZWN0PWMuZmlyc3RFZmZlY3QsYi5sYXN0RWZmZWN0PWcsZy5uZXh0RWZmZWN0PW51bGwpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGwpOmM9VGcoZyxoKTtudWxsIT09YT9kPVRnKGEsZCk6KGQ9WGcoZCxmLGUsbnVsbCksZC5mbGFnc3w9Mik7ZC5yZXR1cm49YjtjLnJldHVybj1iO2Muc2libGluZz1kO2IuY2hpbGQ9YztyZXR1cm4gZH1mdW5jdGlvbiB5aShhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtzZyhhLnJldHVybixiKX1cbmZ1bmN0aW9uIHppKGEsYixjLGQsZSxmKXt2YXIgZz1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWc/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLHJlbmRlcmluZ1N0YXJ0VGltZTowLGxhc3Q6ZCx0YWlsOmMsdGFpbE1vZGU6ZSxsYXN0RWZmZWN0OmZ9OihnLmlzQmFja3dhcmRzPWIsZy5yZW5kZXJpbmc9bnVsbCxnLnJlbmRlcmluZ1N0YXJ0VGltZT0wLGcubGFzdD1kLGcudGFpbD1jLGcudGFpbE1vZGU9ZSxnLmxhc3RFZmZlY3Q9Zil9XG5mdW5jdGlvbiBBaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO2ZpKGEsYixkLmNoaWxkcmVuLGMpO2Q9UC5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZmxhZ3N8PTY0O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpYTpmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7aWYoMTM9PT1hLnRhZyludWxsIT09YS5tZW1vaXplZFN0YXRlJiZ5aShhLGMpO2Vsc2UgaWYoMTk9PT1hLnRhZyl5aShhLGMpO2Vsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PWIpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9ZCY9MX1JKFAsZCk7aWYoMD09PShiLm1vZGUmMikpYi5tZW1vaXplZFN0YXRlPVxubnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspYT1jLmFsdGVybmF0ZSxudWxsIT09YSYmbnVsbD09PWloKGEpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7emkoYiwhMSxlLGMsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJiYWNrd2FyZHNcIjpjPW51bGw7ZT1iLmNoaWxkO2ZvcihiLmNoaWxkPW51bGw7bnVsbCE9PWU7KXthPWUuYWx0ZXJuYXRlO2lmKG51bGwhPT1hJiZudWxsPT09aWgoYSkpe2IuY2hpbGQ9ZTticmVha31hPWUuc2libGluZztlLnNpYmxpbmc9YztjPWU7ZT1hfXppKGIsITAsYyxudWxsLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwidG9nZXRoZXJcIjp6aShiLCExLG51bGwsbnVsbCx2b2lkIDAsYi5sYXN0RWZmZWN0KTticmVhaztkZWZhdWx0OmIubWVtb2l6ZWRTdGF0ZT1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaGkoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO0RnfD1iLmxhbmVzO2lmKDAhPT0oYyZiLmNoaWxkTGFuZXMpKXtpZihudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQpdGhyb3cgRXJyb3IoeSgxNTMpKTtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9VGcoYSxhLnBlbmRpbmdQcm9wcyk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPVRnKGEsYS5wZW5kaW5nUHJvcHMpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9cmV0dXJuIG51bGx9dmFyIEJpLENpLERpLEVpO1xuQmk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O0NpPWZ1bmN0aW9uKCl7fTtcbkRpPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEubWVtb2l6ZWRQcm9wcztpZihlIT09ZCl7YT1iLnN0YXRlTm9kZTtkaChhaC5jdXJyZW50KTt2YXIgZj1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjplPVlhKGEsZSk7ZD1ZYShhLGQpO2Y9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxlKTtkPWViKGEsZCk7Zj1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6ZT1tKHt9LGUse3ZhbHVlOnZvaWQgMH0pO2Q9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtmPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmU9Z2IoYSxlKTtkPWdiKGEsZCk7Zj1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfXZiKGMsZCk7dmFyIGc7Yz1udWxsO2ZvcihsIGluIGUpaWYoIWQuaGFzT3duUHJvcGVydHkobCkmJmUuaGFzT3duUHJvcGVydHkobCkmJm51bGwhPWVbbF0paWYoXCJzdHlsZVwiPT09XG5sKXt2YXIgaD1lW2xdO2ZvcihnIGluIGgpaC5oYXNPd25Qcm9wZXJ0eShnKSYmKGN8fChjPXt9KSxjW2ddPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiZcImNoaWxkcmVuXCIhPT1sJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/Znx8KGY9W10pOihmPWZ8fFtdKS5wdXNoKGwsbnVsbCkpO2ZvcihsIGluIGQpe3ZhciBrPWRbbF07aD1udWxsIT1lP2VbbF06dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkobCkmJmshPT1oJiYobnVsbCE9a3x8bnVsbCE9aCkpaWYoXCJzdHlsZVwiPT09bClpZihoKXtmb3IoZyBpbiBoKSFoLmhhc093blByb3BlcnR5KGcpfHxrJiZrLmhhc093blByb3BlcnR5KGcpfHwoY3x8KGM9e30pLGNbZ109XCJcIik7Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiZoW2ddIT09a1tnXSYmKGN8fFxuKGM9e30pLGNbZ109a1tnXSl9ZWxzZSBjfHwoZnx8KGY9W10pLGYucHVzaChsLGMpKSxjPWs7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KGs9az9rLl9faHRtbDp2b2lkIDAsaD1oP2guX19odG1sOnZvaWQgMCxudWxsIT1rJiZoIT09ayYmKGY9Znx8W10pLnB1c2gobCxrKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiIT09dHlwZW9mIGsmJlwibnVtYmVyXCIhPT10eXBlb2Yga3x8KGY9Znx8W10pLnB1c2gobCxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpPyhudWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1sJiZHKFwic2Nyb2xsXCIsYSksZnx8aD09PWt8fChmPVtdKSk6XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09ayYmay4kJHR5cGVvZj09PUdhP2sudG9TdHJpbmcoKTooZj1mfHxbXSkucHVzaChsLGspKX1jJiYoZj1mfHxbXSkucHVzaChcInN0eWxlXCIsXG5jKTt2YXIgbD1mO2lmKGIudXBkYXRlUXVldWU9bCliLmZsYWdzfD00fX07RWk9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJihiLmZsYWdzfD00KX07ZnVuY3Rpb24gRmkoYSxiKXtpZighbGgpc3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIEdpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcztzd2l0Y2goYi50YWcpe2Nhc2UgMjpjYXNlIDE2OmNhc2UgMTU6Y2FzZSAwOmNhc2UgMTE6Y2FzZSA3OmNhc2UgODpjYXNlIDEyOmNhc2UgOTpjYXNlIDE0OnJldHVybiBudWxsO2Nhc2UgMTpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2Q9Yi5zdGF0ZU5vZGU7ZC5wZW5kaW5nQ29udGV4dCYmKGQuY29udGV4dD1kLnBlbmRpbmdDb250ZXh0LGQucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKXJoKGIpP2IuZmxhZ3N8PTQ6ZC5oeWRyYXRlfHwoYi5mbGFnc3w9MjU2KTtDaShiKTtyZXR1cm4gbnVsbDtjYXNlIDU6aGgoYik7dmFyIGU9ZGgoY2guY3VycmVudCk7Yz1iLnR5cGU7aWYobnVsbCE9PWEmJm51bGwhPWIuc3RhdGVOb2RlKURpKGEsYixjLGQsZSksYS5yZWYhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCk7ZWxzZXtpZighZCl7aWYobnVsbD09PVxuYi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtyZXR1cm4gbnVsbH1hPWRoKGFoLmN1cnJlbnQpO2lmKHJoKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi50eXBlO3ZhciBmPWIubWVtb2l6ZWRQcm9wcztkW3dmXT1iO2RbeGZdPWY7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsZCk7RyhcImNsb3NlXCIsZCk7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihhPTA7YTxYZS5sZW5ndGg7YSsrKUcoWGVbYV0sZCk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGQpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGQpO0coXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsZCk7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoZCxmKTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFmLm11bHRpcGxlfTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGQsZiksRyhcImludmFsaWRcIixkKX12YihjLGYpO2E9bnVsbDtmb3IodmFyIGcgaW4gZilmLmhhc093blByb3BlcnR5KGcpJiYoZT1mW2ddLFwiY2hpbGRyZW5cIj09PWc/XCJzdHJpbmdcIj09PXR5cGVvZiBlP2QudGV4dENvbnRlbnQhPT1lJiYoYT1bXCJjaGlsZHJlblwiLGVdKTpcIm51bWJlclwiPT09dHlwZW9mIGUmJmQudGV4dENvbnRlbnQhPT1cIlwiK2UmJihhPVtcImNoaWxkcmVuXCIsXCJcIitlXSk6Y2EuaGFzT3duUHJvcGVydHkoZykmJm51bGwhPWUmJlwib25TY3JvbGxcIj09PWcmJkcoXCJzY3JvbGxcIixkKSk7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGQpO2NiKGQsZiwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoZCk7amIoZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLm9uQ2xpY2smJihkLm9uY2xpY2s9XG5qZil9ZD1hO2IudXBkYXRlUXVldWU9ZDtudWxsIT09ZCYmKGIuZmxhZ3N8PTQpfWVsc2V7Zz05PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudDthPT09a2IuaHRtbCYmKGE9bGIoYykpO2E9PT1rYi5odG1sP1wic2NyaXB0XCI9PT1jPyhhPWcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxhLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGE9YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGQuaXM/YT1nLmNyZWF0ZUVsZW1lbnQoYyx7aXM6ZC5pc30pOihhPWcuY3JlYXRlRWxlbWVudChjKSxcInNlbGVjdFwiPT09YyYmKGc9YSxkLm11bHRpcGxlP2cubXVsdGlwbGU9ITA6ZC5zaXplJiYoZy5zaXplPWQuc2l6ZSkpKTphPWcuY3JlYXRlRWxlbWVudE5TKGEsYyk7YVt3Zl09YjthW3hmXT1kO0JpKGEsYiwhMSwhMSk7Yi5zdGF0ZU5vZGU9YTtnPXdiKGMsZCk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsYSk7RyhcImNsb3NlXCIsYSk7XG5lPWQ7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8WGUubGVuZ3RoO2UrKylHKFhlW2VdLGEpO2U9ZDticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGEpO0coXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW5wdXRcIjpaYShhLGQpO2U9WWEoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFkLm11bHRpcGxlfTtlPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihhLGQpO2U9XG5nYihhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7ZGVmYXVsdDplPWR9dmIoYyxlKTt2YXIgaD1lO2ZvcihmIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIGs9aFtmXTtcInN0eWxlXCI9PT1mP3RiKGEsayk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zj8oaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1rJiZvYihhLGspKTpcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2Ygaz8oXCJ0ZXh0YXJlYVwiIT09Y3x8XCJcIiE9PWspJiZwYihhLGspOlwibnVtYmVyXCI9PT10eXBlb2YgayYmcGIoYSxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1mJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ZiYmXCJhdXRvRm9jdXNcIiE9PWYmJihjYS5oYXNPd25Qcm9wZXJ0eShmKT9udWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1mJiZHKFwic2Nyb2xsXCIsYSk6bnVsbCE9ayYmcWEoYSxmLGssZykpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShhKTtjYihhLGQsITEpO1xuYnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoYSk7amIoYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWQudmFsdWUmJmEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK1NhKGQudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5tdWx0aXBsZT0hIWQubXVsdGlwbGU7Zj1kLnZhbHVlO251bGwhPWY/ZmIoYSwhIWQubXVsdGlwbGUsZiwhMSk6bnVsbCE9ZC5kZWZhdWx0VmFsdWUmJmZiKGEsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfW1mKGMsZCkmJihiLmZsYWdzfD00KX1udWxsIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpfXJldHVybiBudWxsO2Nhc2UgNjppZihhJiZudWxsIT1iLnN0YXRlTm9kZSlFaShhLGIsYS5tZW1vaXplZFByb3BzLGQpO2Vsc2V7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBkJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtcbmM9ZGgoY2guY3VycmVudCk7ZGgoYWguY3VycmVudCk7cmgoYik/KGQ9Yi5zdGF0ZU5vZGUsYz1iLm1lbW9pemVkUHJvcHMsZFt3Zl09YixkLm5vZGVWYWx1ZSE9PWMmJihiLmZsYWdzfD00KSk6KGQ9KDk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShkKSxkW3dmXT1iLGIuc3RhdGVOb2RlPWQpfXJldHVybiBudWxsO2Nhc2UgMTM6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBiLmxhbmVzPWMsYjtkPW51bGwhPT1kO2M9ITE7bnVsbD09PWE/dm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLmZhbGxiYWNrJiZyaChiKTpjPW51bGwhPT1hLm1lbW9pemVkU3RhdGU7aWYoZCYmIWMmJjAhPT0oYi5tb2RlJjIpKWlmKG51bGw9PT1hJiYhMCE9PWIubWVtb2l6ZWRQcm9wcy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8MCE9PShQLmN1cnJlbnQmMSkpMD09PVYmJihWPTMpO2Vsc2V7aWYoMD09PVZ8fDM9PT1WKVY9XG40O251bGw9PT1VfHwwPT09KERnJjEzNDIxNzcyNykmJjA9PT0oSGkmMTM0MjE3NzI3KXx8SWkoVSxXKX1pZihkfHxjKWIuZmxhZ3N8PTQ7cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLENpKGIpLG51bGw9PT1hJiZjZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGIpLG51bGw7Y2FzZSAxNzpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMTk6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtmPTAhPT0oYi5mbGFncyY2NCk7Zz1kLnJlbmRlcmluZztpZihudWxsPT09ZylpZihmKUZpKGQsITEpO2Vsc2V7aWYoMCE9PVZ8fG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtnPWloKGEpO2lmKG51bGwhPT1nKXtiLmZsYWdzfD02NDtGaShkLCExKTtmPWcudXBkYXRlUXVldWU7bnVsbCE9PWYmJihiLnVwZGF0ZVF1ZXVlPWYsYi5mbGFnc3w9NCk7XG5udWxsPT09ZC5sYXN0RWZmZWN0JiYoYi5maXJzdEVmZmVjdD1udWxsKTtiLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0O2Q9Yztmb3IoYz1iLmNoaWxkO251bGwhPT1jOylmPWMsYT1kLGYuZmxhZ3MmPTIsZi5uZXh0RWZmZWN0PW51bGwsZi5maXJzdEVmZmVjdD1udWxsLGYubGFzdEVmZmVjdD1udWxsLGc9Zi5hbHRlcm5hdGUsbnVsbD09PWc/KGYuY2hpbGRMYW5lcz0wLGYubGFuZXM9YSxmLmNoaWxkPW51bGwsZi5tZW1vaXplZFByb3BzPW51bGwsZi5tZW1vaXplZFN0YXRlPW51bGwsZi51cGRhdGVRdWV1ZT1udWxsLGYuZGVwZW5kZW5jaWVzPW51bGwsZi5zdGF0ZU5vZGU9bnVsbCk6KGYuY2hpbGRMYW5lcz1nLmNoaWxkTGFuZXMsZi5sYW5lcz1nLmxhbmVzLGYuY2hpbGQ9Zy5jaGlsZCxmLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGYubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZi51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGYudHlwZT1nLnR5cGUsYT1nLmRlcGVuZGVuY2llcyxcbmYuZGVwZW5kZW5jaWVzPW51bGw9PT1hP251bGw6e2xhbmVzOmEubGFuZXMsZmlyc3RDb250ZXh0OmEuZmlyc3RDb250ZXh0fSksYz1jLnNpYmxpbmc7SShQLFAuY3VycmVudCYxfDIpO3JldHVybiBiLmNoaWxkfWE9YS5zaWJsaW5nfW51bGwhPT1kLnRhaWwmJk8oKT5KaSYmKGIuZmxhZ3N8PTY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMil9ZWxzZXtpZighZilpZihhPWloKGcpLG51bGwhPT1hKXtpZihiLmZsYWdzfD02NCxmPSEwLGM9YS51cGRhdGVRdWV1ZSxudWxsIT09YyYmKGIudXBkYXRlUXVldWU9YyxiLmZsYWdzfD00KSxGaShkLCEwKSxudWxsPT09ZC50YWlsJiZcImhpZGRlblwiPT09ZC50YWlsTW9kZSYmIWcuYWx0ZXJuYXRlJiYhbGgpcmV0dXJuIGI9Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdCxudWxsIT09YiYmKGIubmV4dEVmZmVjdD1udWxsKSxudWxsfWVsc2UgMipPKCktZC5yZW5kZXJpbmdTdGFydFRpbWU+SmkmJjEwNzM3NDE4MjQhPT1jJiYoYi5mbGFnc3w9XG42NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpO2QuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGM9ZC5sYXN0LG51bGwhPT1jP2Muc2libGluZz1nOmIuY2hpbGQ9ZyxkLmxhc3Q9Zyl9cmV0dXJuIG51bGwhPT1kLnRhaWw/KGM9ZC50YWlsLGQucmVuZGVyaW5nPWMsZC50YWlsPWMuc2libGluZyxkLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0LGQucmVuZGVyaW5nU3RhcnRUaW1lPU8oKSxjLnNpYmxpbmc9bnVsbCxiPVAuY3VycmVudCxJKFAsZj9iJjF8MjpiJjEpLGMpOm51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGwhPT1hJiZudWxsIT09YS5tZW1vaXplZFN0YXRlIT09KG51bGwhPT1iLm1lbW9pemVkU3RhdGUpJiZcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCIhPT1kLm1vZGUmJihiLmZsYWdzfD00KSxudWxsfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7fVxuZnVuY3Rpb24gTGkoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDE6RmYoYS50eXBlKSYmR2YoKTt2YXIgYj1hLmZsYWdzO3JldHVybiBiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2I9YS5mbGFncztpZigwIT09KGImNjQpKXRocm93IEVycm9yKHkoMjg1KSk7YS5mbGFncz1iJi00MDk3fDY0O3JldHVybiBhO2Nhc2UgNTpyZXR1cm4gaGgoYSksbnVsbDtjYXNlIDEzOnJldHVybiBIKFApLGI9YS5mbGFncyxiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMTk6cmV0dXJuIEgoUCksbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksbnVsbDtjYXNlIDEwOnJldHVybiByZyhhKSxudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gTWkoYSxiKXt0cnl7dmFyIGM9XCJcIixkPWI7ZG8gYys9UWEoZCksZD1kLnJldHVybjt3aGlsZShkKTt2YXIgZT1jfWNhdGNoKGYpe2U9XCJcXG5FcnJvciBnZW5lcmF0aW5nIHN0YWNrOiBcIitmLm1lc3NhZ2UrXCJcXG5cIitmLnN0YWNrfXJldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmV9fWZ1bmN0aW9uIE5pKGEsYil7dHJ5e2NvbnNvbGUuZXJyb3IoYi52YWx1ZSl9Y2F0Y2goYyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGM7fSl9fXZhciBPaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBQaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtRaXx8KFFpPSEwLFJpPWQpO05pKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gU2koYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe05pKGEsYik7cmV0dXJuIGQoZSl9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1UaT9UaT1uZXcgU2V0KFt0aGlzXSk6VGkuYWRkKHRoaXMpLE5pKGEsYikpO3ZhciBjPWIuc3RhY2s7dGhpcy5jb21wb25lbnREaWRDYXRjaChiLnZhbHVlLHtjb21wb25lbnRTdGFjazpudWxsIT09Yz9jOlwiXCJ9KX0pO3JldHVybiBjfXZhciBVaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtcbmZ1bmN0aW9uIFZpKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe1dpKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1mdW5jdGlvbiBYaShhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOnJldHVybjtjYXNlIDE6aWYoYi5mbGFncyYyNTYmJm51bGwhPT1hKXt2YXIgYz1hLm1lbW9pemVkUHJvcHMsZD1hLm1lbW9pemVkU3RhdGU7YT1iLnN0YXRlTm9kZTtiPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT9jOmxnKGIudHlwZSxjKSxkKTthLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPWJ9cmV0dXJuO2Nhc2UgMzpiLmZsYWdzJjI1NiYmcWYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7cmV0dXJuO2Nhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gWWkoYSxiLGMpe3N3aXRjaChjLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOmI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve2lmKDM9PT0oYS50YWcmMykpe3ZhciBkPWEuY3JlYXRlO2EuZGVzdHJveT1kKCl9YT1hLm5leHR9d2hpbGUoYSE9PWIpfWI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve3ZhciBlPWE7ZD1lLm5leHQ7ZT1lLnRhZzswIT09KGUmNCkmJjAhPT0oZSYxKSYmKFppKGMsYSksJGkoYyxhKSk7YT1kfXdoaWxlKGEhPT1iKX1yZXR1cm47Y2FzZSAxOmE9Yy5zdGF0ZU5vZGU7Yy5mbGFncyY0JiYobnVsbD09PWI/YS5jb21wb25lbnREaWRNb3VudCgpOihkPWMuZWxlbWVudFR5cGU9PT1jLnR5cGU/Yi5tZW1vaXplZFByb3BzOmxnKGMudHlwZSxiLm1lbW9pemVkUHJvcHMpLGEuY29tcG9uZW50RGlkVXBkYXRlKGQsXG5iLm1lbW9pemVkU3RhdGUsYS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSkpKTtiPWMudXBkYXRlUXVldWU7bnVsbCE9PWImJkVnKGMsYixhKTtyZXR1cm47Y2FzZSAzOmI9Yy51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YT1udWxsO2lmKG51bGwhPT1jLmNoaWxkKXN3aXRjaChjLmNoaWxkLnRhZyl7Y2FzZSA1OmE9Yy5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOmE9Yy5jaGlsZC5zdGF0ZU5vZGV9RWcoYyxiLGEpfXJldHVybjtjYXNlIDU6YT1jLnN0YXRlTm9kZTtudWxsPT09YiYmYy5mbGFncyY0JiZtZihjLnR5cGUsYy5tZW1vaXplZFByb3BzKSYmYS5mb2N1cygpO3JldHVybjtjYXNlIDY6cmV0dXJuO2Nhc2UgNDpyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsPT09Yy5tZW1vaXplZFN0YXRlJiYoYz1jLmFsdGVybmF0ZSxudWxsIT09YyYmKGM9Yy5tZW1vaXplZFN0YXRlLG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbCE9PWMmJkNjKGMpKSkpO1xucmV0dXJuO2Nhc2UgMTk6Y2FzZSAxNzpjYXNlIDIwOmNhc2UgMjE6Y2FzZSAyMzpjYXNlIDI0OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIGFqKGEsYil7Zm9yKHZhciBjPWE7Oyl7aWYoNT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihiKWQ9ZC5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5zZXRQcm9wZXJ0eT9kLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmQuZGlzcGxheT1cIm5vbmVcIjtlbHNle2Q9Yy5zdGF0ZU5vZGU7dmFyIGU9Yy5tZW1vaXplZFByb3BzLnN0eWxlO2U9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsO2Quc3R5bGUuZGlzcGxheT1zYihcImRpc3BsYXlcIixlKX19ZWxzZSBpZig2PT09Yy50YWcpYy5zdGF0ZU5vZGUubm9kZVZhbHVlPWI/XCJcIjpjLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigoMjMhPT1jLnRhZyYmMjQhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8Yz09PWEpJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PVxuYSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGJqKGEsYil7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyVW5tb3VudCl0cnl7TWYub25Db21taXRGaWJlclVubW91bnQoTGYsYil9Y2F0Y2goZil7fXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6YT1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hJiYoYT1hLmxhc3RFZmZlY3QsbnVsbCE9PWEpKXt2YXIgYz1hPWEubmV4dDtkb3t2YXIgZD1jLGU9ZC5kZXN0cm95O2Q9ZC50YWc7aWYodm9pZCAwIT09ZSlpZigwIT09KGQmNCkpWmkoYixjKTtlbHNle2Q9Yjt0cnl7ZSgpfWNhdGNoKGYpe1dpKGQsZil9fWM9Yy5uZXh0fXdoaWxlKGMhPT1hKX1icmVhaztjYXNlIDE6VmkoYik7YT1iLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7YS5wcm9wcz1iLm1lbW9pemVkUHJvcHMsYS5zdGF0ZT1iLm1lbW9pemVkU3RhdGUsYS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGYpe1dpKGIsXG5mKX1icmVhaztjYXNlIDU6VmkoYik7YnJlYWs7Y2FzZSA0OmNqKGEsYil9fWZ1bmN0aW9uIGRqKGEpe2EuYWx0ZXJuYXRlPW51bGw7YS5jaGlsZD1udWxsO2EuZGVwZW5kZW5jaWVzPW51bGw7YS5maXJzdEVmZmVjdD1udWxsO2EubGFzdEVmZmVjdD1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO2EubWVtb2l6ZWRTdGF0ZT1udWxsO2EucGVuZGluZ1Byb3BzPW51bGw7YS5yZXR1cm49bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGx9ZnVuY3Rpb24gZWooYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBmaihhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZihlaihiKSlicmVhayBhO2I9Yi5yZXR1cm59dGhyb3cgRXJyb3IoeSgxNjApKTt9dmFyIGM9YjtiPWMuc3RhdGVOb2RlO3N3aXRjaChjLnRhZyl7Y2FzZSA1OnZhciBkPSExO2JyZWFrO2Nhc2UgMzpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgxNjEpKTt9Yy5mbGFncyYxNiYmKHBiKGIsXCJcIiksYy5mbGFncyY9LTE3KTthOmI6Zm9yKGM9YTs7KXtmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGVqKGMucmV0dXJuKSl7Yz1udWxsO2JyZWFrIGF9Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2ZvcihjPWMuc2libGluZzs1IT09Yy50YWcmJjYhPT1jLnRhZyYmMTghPT1jLnRhZzspe2lmKGMuZmxhZ3MmMiljb250aW51ZSBiO2lmKG51bGw9PT1cbmMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmZsYWdzJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWQ/Z2ooYSxjLGIpOmhqKGEsYyxiKX1cbmZ1bmN0aW9uIGdqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiPzg9PT1jLm5vZGVUeXBlP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxiKTpjLmluc2VydEJlZm9yZShhLGIpOig4PT09Yy5ub2RlVHlwZT8oYj1jLnBhcmVudE5vZGUsYi5pbnNlcnRCZWZvcmUoYSxjKSk6KGI9YyxiLmFwcGVuZENoaWxkKGEpKSxjPWMuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09YyYmdm9pZCAwIT09Y3x8bnVsbCE9PWIub25jbGlja3x8KGIub25jbGljaz1qZikpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihnaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWdqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGhqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiP2MuaW5zZXJ0QmVmb3JlKGEsYik6Yy5hcHBlbmRDaGlsZChhKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoaGooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOyloaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBjaihhLGIpe2Zvcih2YXIgYz1iLGQ9ITEsZSxmOzspe2lmKCFkKXtkPWMucmV0dXJuO2E6Zm9yKDs7KXtpZihudWxsPT09ZCl0aHJvdyBFcnJvcih5KDE2MCkpO2U9ZC5zdGF0ZU5vZGU7c3dpdGNoKGQudGFnKXtjYXNlIDU6Zj0hMTticmVhayBhO2Nhc2UgMzplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGE7Y2FzZSA0OmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYX1kPWQucmV0dXJufWQ9ITB9aWYoNT09PWMudGFnfHw2PT09Yy50YWcpe2E6Zm9yKHZhciBnPWEsaD1jLGs9aDs7KWlmKGJqKGcsayksbnVsbCE9PWsuY2hpbGQmJjQhPT1rLnRhZylrLmNoaWxkLnJldHVybj1rLGs9ay5jaGlsZDtlbHNle2lmKGs9PT1oKWJyZWFrIGE7Zm9yKDtudWxsPT09ay5zaWJsaW5nOyl7aWYobnVsbD09PWsucmV0dXJufHxrLnJldHVybj09PWgpYnJlYWsgYTtrPWsucmV0dXJufWsuc2libGluZy5yZXR1cm49ay5yZXR1cm47az1rLnNpYmxpbmd9Zj8oZz1lLGg9Yy5zdGF0ZU5vZGUsXG44PT09Zy5ub2RlVHlwZT9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaCk6Zy5yZW1vdmVDaGlsZChoKSk6ZS5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSl9ZWxzZSBpZig0PT09Yy50YWcpe2lmKG51bGwhPT1jLmNoaWxkKXtlPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87Zj0hMDtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX19ZWxzZSBpZihiaihhLGMpLG51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybjs0PT09Yy50YWcmJihkPSExKX1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGlqKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjp2YXIgYz1iLnVwZGF0ZVF1ZXVlO2M9bnVsbCE9PWM/Yy5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWMpe3ZhciBkPWM9Yy5uZXh0O2RvIDM9PT0oZC50YWcmMykmJihhPWQuZGVzdHJveSxkLmRlc3Ryb3k9dm9pZCAwLHZvaWQgMCE9PWEmJmEoKSksZD1kLm5leHQ7d2hpbGUoZCE9PWMpfXJldHVybjtjYXNlIDE6cmV0dXJuO2Nhc2UgNTpjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe2Q9Yi5tZW1vaXplZFByb3BzO3ZhciBlPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO2E9Yi50eXBlO3ZhciBmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1mKXtjW3hmXT1kO1wiaW5wdXRcIj09PWEmJlwicmFkaW9cIj09PWQudHlwZSYmbnVsbCE9ZC5uYW1lJiYkYShjLGQpO3diKGEsZSk7Yj13YihhLGQpO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKz1cbjIpe3ZhciBnPWZbZV0saD1mW2UrMV07XCJzdHlsZVwiPT09Zz90YihjLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/b2IoYyxoKTpcImNoaWxkcmVuXCI9PT1nP3BiKGMsaCk6cWEoYyxnLGgsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOmFiKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYyxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YT1jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZC5tdWx0aXBsZSxmPWQudmFsdWUsbnVsbCE9Zj9mYihjLCEhZC5tdWx0aXBsZSxmLCExKTphIT09ISFkLm11bHRpcGxlJiYobnVsbCE9ZC5kZWZhdWx0VmFsdWU/ZmIoYywhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApOmZiKGMsISFkLm11bHRpcGxlLGQubXVsdGlwbGU/W106XCJcIiwhMSkpfX19cmV0dXJuO2Nhc2UgNjppZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjIpKTtiLnN0YXRlTm9kZS5ub2RlVmFsdWU9XG5iLm1lbW9pemVkUHJvcHM7cmV0dXJuO2Nhc2UgMzpjPWIuc3RhdGVOb2RlO2MuaHlkcmF0ZSYmKGMuaHlkcmF0ZT0hMSxDYyhjLmNvbnRhaW5lckluZm8pKTtyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsIT09Yi5tZW1vaXplZFN0YXRlJiYoamo9TygpLGFqKGIuY2hpbGQsITApKTtraihiKTtyZXR1cm47Y2FzZSAxOTpraihiKTtyZXR1cm47Y2FzZSAxNzpyZXR1cm47Y2FzZSAyMzpjYXNlIDI0OmFqKGIsbnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSk7cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fWZ1bmN0aW9uIGtqKGEpe3ZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2EudXBkYXRlUXVldWU9bnVsbDt2YXIgYz1hLnN0YXRlTm9kZTtudWxsPT09YyYmKGM9YS5zdGF0ZU5vZGU9bmV3IFVpKTtiLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9bGouYmluZChudWxsLGEsYik7Yy5oYXMoYil8fChjLmFkZChiKSxiLnRoZW4oZCxkKSl9KX19XG5mdW5jdGlvbiBtaihhLGIpe3JldHVybiBudWxsIT09YSYmKGE9YS5tZW1vaXplZFN0YXRlLG51bGw9PT1hfHxudWxsIT09YS5kZWh5ZHJhdGVkKT8oYj1iLm1lbW9pemVkU3RhdGUsbnVsbCE9PWImJm51bGw9PT1iLmRlaHlkcmF0ZWQpOiExfXZhciBuaj1NYXRoLmNlaWwsb2o9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixwaj1yYS5SZWFjdEN1cnJlbnRPd25lcixYPTAsVT1udWxsLFk9bnVsbCxXPTAscWo9MCxyaj1CZigwKSxWPTAsc2o9bnVsbCx0aj0wLERnPTAsSGk9MCx1aj0wLHZqPW51bGwsamo9MCxKaT1JbmZpbml0eTtmdW5jdGlvbiB3aigpe0ppPU8oKSs1MDB9dmFyIFo9bnVsbCxRaT0hMSxSaT1udWxsLFRpPW51bGwseGo9ITEseWo9bnVsbCx6aj05MCxBaj1bXSxCaj1bXSxDaj1udWxsLERqPTAsRWo9bnVsbCxGaj0tMSxHaj0wLEhqPTAsSWo9bnVsbCxKaj0hMTtmdW5jdGlvbiBIZygpe3JldHVybiAwIT09KFgmNDgpP08oKTotMSE9PUZqP0ZqOkZqPU8oKX1cbmZ1bmN0aW9uIElnKGEpe2E9YS5tb2RlO2lmKDA9PT0oYSYyKSlyZXR1cm4gMTtpZigwPT09KGEmNCkpcmV0dXJuIDk5PT09ZWcoKT8xOjI7MD09PUdqJiYoR2o9dGopO2lmKDAhPT1rZy50cmFuc2l0aW9uKXswIT09SGomJihIaj1udWxsIT09dmo/dmoucGVuZGluZ0xhbmVzOjApO2E9R2o7dmFyIGI9NDE4NjExMiZ+SGo7YiY9LWI7MD09PWImJihhPTQxODYxMTImfmEsYj1hJi1hLDA9PT1iJiYoYj04MTkyKSk7cmV0dXJuIGJ9YT1lZygpOzAhPT0oWCY0KSYmOTg9PT1hP2E9WGMoMTIsR2opOihhPVNjKGEpLGE9WGMoYSxHaikpO3JldHVybiBhfVxuZnVuY3Rpb24gSmcoYSxiLGMpe2lmKDUwPERqKXRocm93IERqPTAsRWo9bnVsbCxFcnJvcih5KDE4NSkpO2E9S2ooYSxiKTtpZihudWxsPT09YSlyZXR1cm4gbnVsbDskYyhhLGIsYyk7YT09PVUmJihIaXw9Yiw0PT09ViYmSWkoYSxXKSk7dmFyIGQ9ZWcoKTsxPT09Yj8wIT09KFgmOCkmJjA9PT0oWCY0OCk/TGooYSk6KE1qKGEsYyksMD09PVgmJih3aigpLGlnKCkpKTooMD09PShYJjQpfHw5OCE9PWQmJjk5IT09ZHx8KG51bGw9PT1Daj9Daj1uZXcgU2V0KFthXSk6Q2ouYWRkKGEpKSxNaihhLGMpKTt2aj1hfWZ1bmN0aW9uIEtqKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO2M9YTtmb3IoYT1hLnJldHVybjtudWxsIT09YTspYS5jaGlsZExhbmVzfD1iLGM9YS5hbHRlcm5hdGUsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpLGM9YSxhPWEucmV0dXJuO3JldHVybiAzPT09Yy50YWc/Yy5zdGF0ZU5vZGU6bnVsbH1cbmZ1bmN0aW9uIE1qKGEsYil7Zm9yKHZhciBjPWEuY2FsbGJhY2tOb2RlLGQ9YS5zdXNwZW5kZWRMYW5lcyxlPWEucGluZ2VkTGFuZXMsZj1hLmV4cGlyYXRpb25UaW1lcyxnPWEucGVuZGluZ0xhbmVzOzA8Zzspe3ZhciBoPTMxLVZjKGcpLGs9MTw8aCxsPWZbaF07aWYoLTE9PT1sKXtpZigwPT09KGsmZCl8fDAhPT0oayZlKSl7bD1iO1JjKGspO3ZhciBuPUY7ZltoXT0xMDw9bj9sKzI1MDo2PD1uP2wrNUUzOi0xfX1lbHNlIGw8PWImJihhLmV4cGlyZWRMYW5lc3w9ayk7ZyY9fmt9ZD1VYyhhLGE9PT1VP1c6MCk7Yj1GO2lmKDA9PT1kKW51bGwhPT1jJiYoYyE9PVpmJiZQZihjKSxhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tQcmlvcml0eT0wKTtlbHNle2lmKG51bGwhPT1jKXtpZihhLmNhbGxiYWNrUHJpb3JpdHk9PT1iKXJldHVybjtjIT09WmYmJlBmKGMpfTE1PT09Yj8oYz1Mai5iaW5kKG51bGwsYSksbnVsbD09PWFnPyhhZz1bY10sYmc9T2YoVWYsamcpKTphZy5wdXNoKGMpLFxuYz1aZik6MTQ9PT1iP2M9aGcoOTksTGouYmluZChudWxsLGEpKTooYz1UYyhiKSxjPWhnKGMsTmouYmluZChudWxsLGEpKSk7YS5jYWxsYmFja1ByaW9yaXR5PWI7YS5jYWxsYmFja05vZGU9Y319XG5mdW5jdGlvbiBOaihhKXtGaj0tMTtIaj1Haj0wO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYj1hLmNhbGxiYWNrTm9kZTtpZihPaigpJiZhLmNhbGxiYWNrTm9kZSE9PWIpcmV0dXJuIG51bGw7dmFyIGM9VWMoYSxhPT09VT9XOjApO2lmKDA9PT1jKXJldHVybiBudWxsO3ZhciBkPWM7dmFyIGU9WDtYfD0xNjt2YXIgZj1QaigpO2lmKFUhPT1hfHxXIT09ZCl3aigpLFFqKGEsZCk7ZG8gdHJ5e1JqKCk7YnJlYWt9Y2F0Y2goaCl7U2ooYSxoKX13aGlsZSgxKTtxZygpO29qLmN1cnJlbnQ9ZjtYPWU7bnVsbCE9PVk/ZD0wOihVPW51bGwsVz0wLGQ9Vik7aWYoMCE9PSh0aiZIaSkpUWooYSwwKTtlbHNlIGlmKDAhPT1kKXsyPT09ZCYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxjPVdjKGEpLDAhPT1jJiYoZD1UaihhLGMpKSk7aWYoMT09PWQpdGhyb3cgYj1zaixRaihhLDApLElpKGEsYyksTWooYSxPKCkpLGI7YS5maW5pc2hlZFdvcms9XG5hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1jO3N3aXRjaChkKXtjYXNlIDA6Y2FzZSAxOnRocm93IEVycm9yKHkoMzQ1KSk7Y2FzZSAyOlVqKGEpO2JyZWFrO2Nhc2UgMzpJaShhLGMpO2lmKChjJjYyOTE0NTYwKT09PWMmJihkPWpqKzUwMC1PKCksMTA8ZCkpe2lmKDAhPT1VYyhhLDApKWJyZWFrO2U9YS5zdXNwZW5kZWRMYW5lcztpZigoZSZjKSE9PWMpe0hnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZlO2JyZWFrfWEudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksZCk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA0OklpKGEsYyk7aWYoKGMmNDE4NjExMik9PT1jKWJyZWFrO2Q9YS5ldmVudFRpbWVzO2ZvcihlPS0xOzA8Yzspe3ZhciBnPTMxLVZjKGMpO2Y9MTw8ZztnPWRbZ107Zz5lJiYoZT1nKTtjJj1+Zn1jPWU7Yz1PKCktYztjPSgxMjA+Yz8xMjA6NDgwPmM/NDgwOjEwODA+Yz8xMDgwOjE5MjA+Yz8xOTIwOjNFMz5jPzNFMzo0MzIwPlxuYz80MzIwOjE5NjAqbmooYy8xOTYwKSktYztpZigxMDxjKXthLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGMpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNTpVaihhKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMzI5KSk7fX1NaihhLE8oKSk7cmV0dXJuIGEuY2FsbGJhY2tOb2RlPT09Yj9Oai5iaW5kKG51bGwsYSk6bnVsbH1mdW5jdGlvbiBJaShhLGIpe2ImPX51ajtiJj1+SGk7YS5zdXNwZW5kZWRMYW5lc3w9YjthLnBpbmdlZExhbmVzJj1+Yjtmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGI7KXt2YXIgYz0zMS1WYyhiKSxkPTE8PGM7YVtjXT0tMTtiJj1+ZH19XG5mdW5jdGlvbiBMaihhKXtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7T2ooKTtpZihhPT09VSYmMCE9PShhLmV4cGlyZWRMYW5lcyZXKSl7dmFyIGI9Vzt2YXIgYz1UaihhLGIpOzAhPT0odGomSGkpJiYoYj1VYyhhLGIpLGM9VGooYSxiKSl9ZWxzZSBiPVVjKGEsMCksYz1UaihhLGIpOzAhPT1hLnRhZyYmMj09PWMmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYj1XYyhhKSwwIT09YiYmKGM9VGooYSxiKSkpO2lmKDE9PT1jKXRocm93IGM9c2osUWooYSwwKSxJaShhLGIpLE1qKGEsTygpKSxjO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWI7VWooYSk7TWooYSxPKCkpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gVmooKXtpZihudWxsIT09Q2ope3ZhciBhPUNqO0NqPW51bGw7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZXhwaXJlZExhbmVzfD0yNCZhLnBlbmRpbmdMYW5lcztNaihhLE8oKSl9KX1pZygpfWZ1bmN0aW9uIFdqKGEsYil7dmFyIGM9WDtYfD0xO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIFhqKGEsYil7dmFyIGM9WDtYJj0tMjtYfD04O3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIG5pKGEsYil7SShyaixxaik7cWp8PWI7dGp8PWJ9ZnVuY3Rpb24gS2koKXtxaj1yai5jdXJyZW50O0gocmopfVxuZnVuY3Rpb24gUWooYSxiKXthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO3ZhciBjPWEudGltZW91dEhhbmRsZTstMSE9PWMmJihhLnRpbWVvdXRIYW5kbGU9LTEscGYoYykpO2lmKG51bGwhPT1ZKWZvcihjPVkucmV0dXJuO251bGwhPT1jOyl7dmFyIGQ9Yztzd2l0Y2goZC50YWcpe2Nhc2UgMTpkPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZCYmdm9pZCAwIT09ZCYmR2YoKTticmVhaztjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTticmVhaztjYXNlIDU6aGgoZCk7YnJlYWs7Y2FzZSA0OmZoKCk7YnJlYWs7Y2FzZSAxMzpIKFApO2JyZWFrO2Nhc2UgMTk6SChQKTticmVhaztjYXNlIDEwOnJnKGQpO2JyZWFrO2Nhc2UgMjM6Y2FzZSAyNDpLaSgpfWM9Yy5yZXR1cm59VT1hO1k9VGcoYS5jdXJyZW50LG51bGwpO1c9cWo9dGo9YjtWPTA7c2o9bnVsbDt1aj1IaT1EZz0wfVxuZnVuY3Rpb24gU2ooYSxiKXtkb3t2YXIgYz1ZO3RyeXtxZygpO3ZoLmN1cnJlbnQ9R2g7aWYoeWgpe2Zvcih2YXIgZD1SLm1lbW9pemVkU3RhdGU7bnVsbCE9PWQ7KXt2YXIgZT1kLnF1ZXVlO251bGwhPT1lJiYoZS5wZW5kaW5nPW51bGwpO2Q9ZC5uZXh0fXloPSExfXhoPTA7VD1TPVI9bnVsbDt6aD0hMTtwai5jdXJyZW50PW51bGw7aWYobnVsbD09PWN8fG51bGw9PT1jLnJldHVybil7Vj0xO3NqPWI7WT1udWxsO2JyZWFrfWE6e3ZhciBmPWEsZz1jLnJldHVybixoPWMsaz1iO2I9VztoLmZsYWdzfD0yMDQ4O2guZmlyc3RFZmZlY3Q9aC5sYXN0RWZmZWN0PW51bGw7aWYobnVsbCE9PWsmJlwib2JqZWN0XCI9PT10eXBlb2YgayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsudGhlbil7dmFyIGw9aztpZigwPT09KGgubW9kZSYyKSl7dmFyIG49aC5hbHRlcm5hdGU7bj8oaC51cGRhdGVRdWV1ZT1uLnVwZGF0ZVF1ZXVlLGgubWVtb2l6ZWRTdGF0ZT1uLm1lbW9pemVkU3RhdGUsaC5sYW5lcz1uLmxhbmVzKTpcbihoLnVwZGF0ZVF1ZXVlPW51bGwsaC5tZW1vaXplZFN0YXRlPW51bGwpfXZhciBBPTAhPT0oUC5jdXJyZW50JjEpLHA9Zztkb3t2YXIgQztpZihDPTEzPT09cC50YWcpe3ZhciB4PXAubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09eClDPW51bGwhPT14LmRlaHlkcmF0ZWQ/ITA6ITE7ZWxzZXt2YXIgdz1wLm1lbW9pemVkUHJvcHM7Qz12b2lkIDA9PT13LmZhbGxiYWNrPyExOiEwIT09dy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjaz8hMDpBPyExOiEwfX1pZihDKXt2YXIgej1wLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT16KXt2YXIgdT1uZXcgU2V0O3UuYWRkKGwpO3AudXBkYXRlUXVldWU9dX1lbHNlIHouYWRkKGwpO2lmKDA9PT0ocC5tb2RlJjIpKXtwLmZsYWdzfD02NDtoLmZsYWdzfD0xNjM4NDtoLmZsYWdzJj0tMjk4MTtpZigxPT09aC50YWcpaWYobnVsbD09PWguYWx0ZXJuYXRlKWgudGFnPTE3O2Vsc2V7dmFyIHQ9emcoLTEsMSk7dC50YWc9MjtBZyhoLHQpfWgubGFuZXN8PTE7YnJlYWsgYX1rPVxudm9pZCAwO2g9Yjt2YXIgcT1mLnBpbmdDYWNoZTtudWxsPT09cT8ocT1mLnBpbmdDYWNoZT1uZXcgT2ksaz1uZXcgU2V0LHEuc2V0KGwsaykpOihrPXEuZ2V0KGwpLHZvaWQgMD09PWsmJihrPW5ldyBTZXQscS5zZXQobCxrKSkpO2lmKCFrLmhhcyhoKSl7ay5hZGQoaCk7dmFyIHY9WWouYmluZChudWxsLGYsbCxoKTtsLnRoZW4odix2KX1wLmZsYWdzfD00MDk2O3AubGFuZXM9YjticmVhayBhfXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApO2s9RXJyb3IoKFJhKGgudHlwZSl8fFwiQSBSZWFjdCBjb21wb25lbnRcIikrXCIgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIil9NSE9PVYmJihWPTIpO2s9TWkoayxoKTtwPVxuZztkb3tzd2l0Y2gocC50YWcpe2Nhc2UgMzpmPWs7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBKPVBpKHAsZixiKTtCZyhwLEopO2JyZWFrIGE7Y2FzZSAxOmY9azt2YXIgSz1wLnR5cGUsUT1wLnN0YXRlTm9kZTtpZigwPT09KHAuZmxhZ3MmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEsuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09USYmXCJmdW5jdGlvblwiPT09dHlwZW9mIFEuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoUSkpKSl7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBMPVNpKHAsZixiKTtCZyhwLEwpO2JyZWFrIGF9fXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApfVpqKGMpfWNhdGNoKHZhKXtiPXZhO1k9PT1jJiZudWxsIT09YyYmKFk9Yz1jLnJldHVybik7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9XG5mdW5jdGlvbiBQaigpe3ZhciBhPW9qLmN1cnJlbnQ7b2ouY3VycmVudD1HaDtyZXR1cm4gbnVsbD09PWE/R2g6YX1mdW5jdGlvbiBUaihhLGIpe3ZhciBjPVg7WHw9MTY7dmFyIGQ9UGooKTtVPT09YSYmVz09PWJ8fFFqKGEsYik7ZG8gdHJ5e2FrKCk7YnJlYWt9Y2F0Y2goZSl7U2ooYSxlKX13aGlsZSgxKTtxZygpO1g9Yztvai5jdXJyZW50PWQ7aWYobnVsbCE9PVkpdGhyb3cgRXJyb3IoeSgyNjEpKTtVPW51bGw7Vz0wO3JldHVybiBWfWZ1bmN0aW9uIGFrKCl7Zm9yKDtudWxsIT09WTspYmsoWSl9ZnVuY3Rpb24gUmooKXtmb3IoO251bGwhPT1ZJiYhUWYoKTspYmsoWSl9ZnVuY3Rpb24gYmsoYSl7dmFyIGI9Y2soYS5hbHRlcm5hdGUsYSxxaik7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iP1pqKGEpOlk9Yjtwai5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiBaaihhKXt2YXIgYj1hO2Rve3ZhciBjPWIuYWx0ZXJuYXRlO2E9Yi5yZXR1cm47aWYoMD09PShiLmZsYWdzJjIwNDgpKXtjPUdpKGMsYixxaik7aWYobnVsbCE9PWMpe1k9YztyZXR1cm59Yz1iO2lmKDI0IT09Yy50YWcmJjIzIT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fDAhPT0ocWomMTA3Mzc0MTgyNCl8fDA9PT0oYy5tb2RlJjQpKXtmb3IodmFyIGQ9MCxlPWMuY2hpbGQ7bnVsbCE9PWU7KWR8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGU9ZS5zaWJsaW5nO2MuY2hpbGRMYW5lcz1kfW51bGwhPT1hJiYwPT09KGEuZmxhZ3MmMjA0OCkmJihudWxsPT09YS5maXJzdEVmZmVjdCYmKGEuZmlyc3RFZmZlY3Q9Yi5maXJzdEVmZmVjdCksbnVsbCE9PWIubGFzdEVmZmVjdCYmKG51bGwhPT1hLmxhc3RFZmZlY3QmJihhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxhLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0KSwxPGIuZmxhZ3MmJihudWxsIT09XG5hLmxhc3RFZmZlY3Q/YS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YjphLmZpcnN0RWZmZWN0PWIsYS5sYXN0RWZmZWN0PWIpKX1lbHNle2M9TGkoYik7aWYobnVsbCE9PWMpe2MuZmxhZ3MmPTIwNDc7WT1jO3JldHVybn1udWxsIT09YSYmKGEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PW51bGwsYS5mbGFnc3w9MjA0OCl9Yj1iLnNpYmxpbmc7aWYobnVsbCE9PWIpe1k9YjtyZXR1cm59WT1iPWF9d2hpbGUobnVsbCE9PWIpOzA9PT1WJiYoVj01KX1mdW5jdGlvbiBVaihhKXt2YXIgYj1lZygpO2dnKDk5LGRrLmJpbmQobnVsbCxhLGIpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRrKGEsYil7ZG8gT2ooKTt3aGlsZShudWxsIT09eWopO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYz1hLmZpbmlzaGVkV29yaztpZihudWxsPT09YylyZXR1cm4gbnVsbDthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO2lmKGM9PT1hLmN1cnJlbnQpdGhyb3cgRXJyb3IoeSgxNzcpKTthLmNhbGxiYWNrTm9kZT1udWxsO3ZhciBkPWMubGFuZXN8Yy5jaGlsZExhbmVzLGU9ZCxmPWEucGVuZGluZ0xhbmVzJn5lO2EucGVuZGluZ0xhbmVzPWU7YS5zdXNwZW5kZWRMYW5lcz0wO2EucGluZ2VkTGFuZXM9MDthLmV4cGlyZWRMYW5lcyY9ZTthLm11dGFibGVSZWFkTGFuZXMmPWU7YS5lbnRhbmdsZWRMYW5lcyY9ZTtlPWEuZW50YW5nbGVtZW50cztmb3IodmFyIGc9YS5ldmVudFRpbWVzLGg9YS5leHBpcmF0aW9uVGltZXM7MDxmOyl7dmFyIGs9MzEtVmMoZiksbD0xPDxrO2Vba109MDtnW2tdPS0xO2hba109LTE7ZiY9fmx9bnVsbCE9PVxuQ2omJjA9PT0oZCYyNCkmJkNqLmhhcyhhKSYmQ2ouZGVsZXRlKGEpO2E9PT1VJiYoWT1VPW51bGwsVz0wKTsxPGMuZmxhZ3M/bnVsbCE9PWMubGFzdEVmZmVjdD8oYy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxkPWMuZmlyc3RFZmZlY3QpOmQ9YzpkPWMuZmlyc3RFZmZlY3Q7aWYobnVsbCE9PWQpe2U9WDtYfD0zMjtwai5jdXJyZW50PW51bGw7a2Y9ZmQ7Zz1OZSgpO2lmKE9lKGcpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBnKWg9e3N0YXJ0Omcuc2VsZWN0aW9uU3RhcnQsZW5kOmcuc2VsZWN0aW9uRW5kfTtlbHNlIGE6aWYoaD0oaD1nLm93bmVyRG9jdW1lbnQpJiZoLmRlZmF1bHRWaWV3fHx3aW5kb3csKGw9aC5nZXRTZWxlY3Rpb24mJmguZ2V0U2VsZWN0aW9uKCkpJiYwIT09bC5yYW5nZUNvdW50KXtoPWwuYW5jaG9yTm9kZTtmPWwuYW5jaG9yT2Zmc2V0O2s9bC5mb2N1c05vZGU7bD1sLmZvY3VzT2Zmc2V0O3RyeXtoLm5vZGVUeXBlLGsubm9kZVR5cGV9Y2F0Y2godmEpe2g9bnVsbDtcbmJyZWFrIGF9dmFyIG49MCxBPS0xLHA9LTEsQz0wLHg9MCx3PWcsej1udWxsO2I6Zm9yKDs7KXtmb3IodmFyIHU7Oyl7dyE9PWh8fDAhPT1mJiYzIT09dy5ub2RlVHlwZXx8KEE9bitmKTt3IT09a3x8MCE9PWwmJjMhPT13Lm5vZGVUeXBlfHwocD1uK2wpOzM9PT13Lm5vZGVUeXBlJiYobis9dy5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KHU9dy5maXJzdENoaWxkKSlicmVhazt6PXc7dz11fWZvcig7Oyl7aWYodz09PWcpYnJlYWsgYjt6PT09aCYmKytDPT09ZiYmKEE9bik7ej09PWsmJisreD09PWwmJihwPW4pO2lmKG51bGwhPT0odT13Lm5leHRTaWJsaW5nKSlicmVhazt3PXo7ej13LnBhcmVudE5vZGV9dz11fWg9LTE9PT1BfHwtMT09PXA/bnVsbDp7c3RhcnQ6QSxlbmQ6cH19ZWxzZSBoPW51bGw7aD1ofHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBoPW51bGw7bGY9e2ZvY3VzZWRFbGVtOmcsc2VsZWN0aW9uUmFuZ2U6aH07ZmQ9ITE7SWo9bnVsbDtKaj0hMTtaPWQ7ZG8gdHJ5e2VrKCl9Y2F0Y2godmEpe2lmKG51bGw9PT1cblopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7SWo9bnVsbDtaPWQ7ZG8gdHJ5e2ZvcihnPWE7bnVsbCE9PVo7KXt2YXIgdD1aLmZsYWdzO3QmMTYmJnBiKFouc3RhdGVOb2RlLFwiXCIpO2lmKHQmMTI4KXt2YXIgcT1aLmFsdGVybmF0ZTtpZihudWxsIT09cSl7dmFyIHY9cS5yZWY7bnVsbCE9PXYmJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygdj92KG51bGwpOnYuY3VycmVudD1udWxsKX19c3dpdGNoKHQmMTAzOCl7Y2FzZSAyOmZqKFopO1ouZmxhZ3MmPS0zO2JyZWFrO2Nhc2UgNjpmaihaKTtaLmZsYWdzJj0tMztpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDEwMjQ6Wi5mbGFncyY9LTEwMjU7YnJlYWs7Y2FzZSAxMDI4OlouZmxhZ3MmPS0xMDI1O2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgNDppaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDg6aD1aO2NqKGcsaCk7dmFyIEo9aC5hbHRlcm5hdGU7ZGooaCk7bnVsbCE9PVxuSiYmZGooSil9Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTt2PWxmO3E9TmUoKTt0PXYuZm9jdXNlZEVsZW07Zz12LnNlbGVjdGlvblJhbmdlO2lmKHEhPT10JiZ0JiZ0Lm93bmVyRG9jdW1lbnQmJk1lKHQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdCkpe251bGwhPT1nJiZPZSh0KSYmKHE9Zy5zdGFydCx2PWcuZW5kLHZvaWQgMD09PXYmJih2PXEpLFwic2VsZWN0aW9uU3RhcnRcImluIHQ/KHQuc2VsZWN0aW9uU3RhcnQ9cSx0LnNlbGVjdGlvbkVuZD1NYXRoLm1pbih2LHQudmFsdWUubGVuZ3RoKSk6KHY9KHE9dC5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJnEuZGVmYXVsdFZpZXd8fHdpbmRvdyx2LmdldFNlbGVjdGlvbiYmKHY9di5nZXRTZWxlY3Rpb24oKSxoPXQudGV4dENvbnRlbnQubGVuZ3RoLEo9TWF0aC5taW4oZy5zdGFydCxoKSxnPXZvaWQgMD09PVxuZy5lbmQ/SjpNYXRoLm1pbihnLmVuZCxoKSwhdi5leHRlbmQmJko+ZyYmKGg9ZyxnPUosSj1oKSxoPUxlKHQsSiksZj1MZSh0LGcpLGgmJmYmJigxIT09di5yYW5nZUNvdW50fHx2LmFuY2hvck5vZGUhPT1oLm5vZGV8fHYuYW5jaG9yT2Zmc2V0IT09aC5vZmZzZXR8fHYuZm9jdXNOb2RlIT09Zi5ub2RlfHx2LmZvY3VzT2Zmc2V0IT09Zi5vZmZzZXQpJiYocT1xLmNyZWF0ZVJhbmdlKCkscS5zZXRTdGFydChoLm5vZGUsaC5vZmZzZXQpLHYucmVtb3ZlQWxsUmFuZ2VzKCksSj5nPyh2LmFkZFJhbmdlKHEpLHYuZXh0ZW5kKGYubm9kZSxmLm9mZnNldCkpOihxLnNldEVuZChmLm5vZGUsZi5vZmZzZXQpLHYuYWRkUmFuZ2UocSkpKSkpKTtxPVtdO2Zvcih2PXQ7dj12LnBhcmVudE5vZGU7KTE9PT12Lm5vZGVUeXBlJiZxLnB1c2goe2VsZW1lbnQ6dixsZWZ0OnYuc2Nyb2xsTGVmdCx0b3A6di5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgdC5mb2N1cyYmdC5mb2N1cygpO2Zvcih0PVxuMDt0PHEubGVuZ3RoO3QrKyl2PXFbdF0sdi5lbGVtZW50LnNjcm9sbExlZnQ9di5sZWZ0LHYuZWxlbWVudC5zY3JvbGxUb3A9di50b3B9ZmQ9ISFrZjtsZj1rZj1udWxsO2EuY3VycmVudD1jO1o9ZDtkbyB0cnl7Zm9yKHQ9YTtudWxsIT09Wjspe3ZhciBLPVouZmxhZ3M7SyYzNiYmWWkodCxaLmFsdGVybmF0ZSxaKTtpZihLJjEyOCl7cT12b2lkIDA7dmFyIFE9Wi5yZWY7aWYobnVsbCE9PVEpe3ZhciBMPVouc3RhdGVOb2RlO3N3aXRjaChaLnRhZyl7Y2FzZSA1OnE9TDticmVhaztkZWZhdWx0OnE9TH1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUT9RKHEpOlEuY3VycmVudD1xfX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO1o9bnVsbDskZigpO1g9ZX1lbHNlIGEuY3VycmVudD1jO2lmKHhqKXhqPSExLHlqPWEsemo9YjtlbHNlIGZvcihaPWQ7bnVsbCE9PVo7KWI9XG5aLm5leHRFZmZlY3QsWi5uZXh0RWZmZWN0PW51bGwsWi5mbGFncyY4JiYoSz1aLEsuc2libGluZz1udWxsLEsuc3RhdGVOb2RlPW51bGwpLFo9YjtkPWEucGVuZGluZ0xhbmVzOzA9PT1kJiYoVGk9bnVsbCk7MT09PWQ/YT09PUVqP0RqKys6KERqPTAsRWo9YSk6RGo9MDtjPWMuc3RhdGVOb2RlO2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclJvb3QpdHJ5e01mLm9uQ29tbWl0RmliZXJSb290KExmLGMsdm9pZCAwLDY0PT09KGMuY3VycmVudC5mbGFncyY2NCkpfWNhdGNoKHZhKXt9TWooYSxPKCkpO2lmKFFpKXRocm93IFFpPSExLGE9UmksUmk9bnVsbCxhO2lmKDAhPT0oWCY4KSlyZXR1cm4gbnVsbDtpZygpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZWsoKXtmb3IoO251bGwhPT1aOyl7dmFyIGE9Wi5hbHRlcm5hdGU7Smp8fG51bGw9PT1Janx8KDAhPT0oWi5mbGFncyY4KT9kYyhaLElqKSYmKEpqPSEwKToxMz09PVoudGFnJiZtaihhLFopJiZkYyhaLElqKSYmKEpqPSEwKSk7dmFyIGI9Wi5mbGFnczswIT09KGImMjU2KSYmWGkoYSxaKTswPT09KGImNTEyKXx8eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSk7Wj1aLm5leHRFZmZlY3R9fWZ1bmN0aW9uIE9qKCl7aWYoOTAhPT16ail7dmFyIGE9OTc8emo/OTc6emo7emo9OTA7cmV0dXJuIGdnKGEsZmspfXJldHVybiExfWZ1bmN0aW9uICRpKGEsYil7QWoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfWZ1bmN0aW9uIFppKGEsYil7QmoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfVxuZnVuY3Rpb24gZmsoKXtpZihudWxsPT09eWopcmV0dXJuITE7dmFyIGE9eWo7eWo9bnVsbDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzMxKSk7dmFyIGI9WDtYfD0zMjt2YXIgYz1CajtCaj1bXTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrPTIpe3ZhciBlPWNbZF0sZj1jW2QrMV0sZz1lLmRlc3Ryb3k7ZS5kZXN0cm95PXZvaWQgMDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyl0cnl7ZygpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Yz1BajtBaj1bXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7ZT1jW2RdO2Y9Y1tkKzFdO3RyeXt2YXIgaD1lLmNyZWF0ZTtlLmRlc3Ryb3k9aCgpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Zm9yKGg9YS5jdXJyZW50LmZpcnN0RWZmZWN0O251bGwhPT1oOylhPWgubmV4dEVmZmVjdCxoLm5leHRFZmZlY3Q9bnVsbCxoLmZsYWdzJjgmJihoLnNpYmxpbmc9XG5udWxsLGguc3RhdGVOb2RlPW51bGwpLGg9YTtYPWI7aWcoKTtyZXR1cm4hMH1mdW5jdGlvbiBnayhhLGIsYyl7Yj1NaShjLGIpO2I9UGkoYSxiLDEpO0FnKGEsYik7Yj1IZygpO2E9S2ooYSwxKTtudWxsIT09YSYmKCRjKGEsMSxiKSxNaihhLGIpKX1cbmZ1bmN0aW9uIFdpKGEsYil7aWYoMz09PWEudGFnKWdrKGEsYSxiKTtlbHNlIGZvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKDM9PT1jLnRhZyl7Z2soYyxhLGIpO2JyZWFrfWVsc2UgaWYoMT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXthPU1pKGIsYSk7dmFyIGU9U2koYyxhLDEpO0FnKGMsZSk7ZT1IZygpO2M9S2ooYywxKTtpZihudWxsIT09YykkYyhjLDEsZSksTWooYyxlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl0cnl7ZC5jb21wb25lbnREaWRDYXRjaChiLGEpfWNhdGNoKGYpe31icmVha319Yz1jLnJldHVybn19XG5mdW5jdGlvbiBZaihhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2I9SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmM7VT09PWEmJihXJmMpPT09YyYmKDQ9PT1WfHwzPT09ViYmKFcmNjI5MTQ1NjApPT09VyYmNTAwPk8oKS1qaj9RaihhLDApOnVqfD1jKTtNaihhLGIpfWZ1bmN0aW9uIGxqKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9MDswPT09YiYmKGI9YS5tb2RlLDA9PT0oYiYyKT9iPTE6MD09PShiJjQpP2I9OTk9PT1lZygpPzE6MjooMD09PUdqJiYoR2o9dGopLGI9WWMoNjI5MTQ1NjAmfkdqKSwwPT09YiYmKGI9NDE5NDMwNCkpKTtjPUhnKCk7YT1LaihhLGIpO251bGwhPT1hJiYoJGMoYSxiLGMpLE1qKGEsYykpfXZhciBjaztcbmNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmxhbmVzO2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxOLmN1cnJlbnQpdWc9ITA7ZWxzZSBpZigwIT09KGMmZCkpdWc9MCE9PShhLmZsYWdzJjE2Mzg0KT8hMDohMTtlbHNle3VnPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOnJpKGIpO3NoKCk7YnJlYWs7Y2FzZSA1OmdoKGIpO2JyZWFrO2Nhc2UgMTpGZihiLnR5cGUpJiZKZihiKTticmVhaztjYXNlIDQ6ZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOmQ9Yi5tZW1vaXplZFByb3BzLnZhbHVlO3ZhciBlPWIudHlwZS5fY29udGV4dDtJKG1nLGUuX2N1cnJlbnRWYWx1ZSk7ZS5fY3VycmVudFZhbHVlPWQ7YnJlYWs7Y2FzZSAxMzppZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXtpZigwIT09KGMmYi5jaGlsZC5jaGlsZExhbmVzKSlyZXR1cm4gdGkoYSxiLGMpO0koUCxQLmN1cnJlbnQmMSk7Yj1oaShhLGIsYyk7cmV0dXJuIG51bGwhPT1cbmI/Yi5zaWJsaW5nOm51bGx9SShQLFAuY3VycmVudCYxKTticmVhaztjYXNlIDE5OmQ9MCE9PShjJmIuY2hpbGRMYW5lcyk7aWYoMCE9PShhLmZsYWdzJjY0KSl7aWYoZClyZXR1cm4gQWkoYSxiLGMpO2IuZmxhZ3N8PTY0fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCxlLmxhc3RFZmZlY3Q9bnVsbCk7SShQLFAuY3VycmVudCk7aWYoZClicmVhaztlbHNlIHJldHVybiBudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gYi5sYW5lcz0wLG1pKGEsYixjKX1yZXR1cm4gaGkoYSxiLGMpfWVsc2UgdWc9ITE7Yi5sYW5lcz0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmQ9Yi50eXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1FZihiLE0uY3VycmVudCk7dGcoYixjKTtlPUNoKG51bGwsYixkLGEsZSxjKTtiLmZsYWdzfD0xO2lmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtpZihGZihkKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7eGcoYik7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJkdnKGIsZCxnLGEpO2UudXBkYXRlcj1LZztiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxzPWI7T2coYixkLGEsYyk7Yj1xaShudWxsLGIsZCwhMCxmLGMpfWVsc2UgYi50YWc9MCxmaShudWxsLGIsZSxjKSxiPWIuY2hpbGQ7cmV0dXJuIGI7Y2FzZSAxNjplPWIuZWxlbWVudFR5cGU7YTp7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7XG5hPWIucGVuZGluZ1Byb3BzO2Y9ZS5faW5pdDtlPWYoZS5fcGF5bG9hZCk7Yi50eXBlPWU7Zj1iLnRhZz1oayhlKTthPWxnKGUsYSk7c3dpdGNoKGYpe2Nhc2UgMDpiPWxpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE6Yj1waShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxMTpiPWdpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE0OmI9aWkobnVsbCxiLGUsbGcoZS50eXBlLGEpLGQsYyk7YnJlYWsgYX10aHJvdyBFcnJvcih5KDMwNixlLFwiXCIpKTt9cmV0dXJuIGI7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGxpKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLHBpKGEsYixkLGUsYyk7Y2FzZSAzOnJpKGIpO2Q9Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09YXx8bnVsbD09PWQpdGhyb3cgRXJyb3IoeSgyODIpKTtcbmQ9Yi5wZW5kaW5nUHJvcHM7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDt5ZyhhLGIpO0NnKGIsZCxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpc2goKSxiPWhpKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZj1lLmh5ZHJhdGUpa2g9cmYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mby5maXJzdENoaWxkKSxqaD1iLGY9bGg9ITA7aWYoZil7YT1lLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE7aWYobnVsbCE9YSlmb3IoZT0wO2U8YS5sZW5ndGg7ZSs9MilmPWFbZV0sZi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1hW2UrMV0sdGgucHVzaChmKTtjPVpnKGIsbnVsbCxkLGMpO2ZvcihiLmNoaWxkPWM7YzspYy5mbGFncz1jLmZsYWdzJi0zfDEwMjQsYz1jLnNpYmxpbmd9ZWxzZSBmaShhLGIsZCxjKSxzaCgpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIGdoKGIpLG51bGw9PT1hJiZcbnBoKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW4sbmYoZCxlKT9nPW51bGw6bnVsbCE9PWYmJm5mKGQsZikmJihiLmZsYWdzfD0xNiksb2koYSxiKSxmaShhLGIsZyxjKSxiLmNoaWxkO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJnBoKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gdGkoYSxiLGMpO2Nhc2UgNDpyZXR1cm4gZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9WWcoYixudWxsLGQsYyk6ZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGdpKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixcbmMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTt2YXIgaD1iLnR5cGUuX2NvbnRleHQ7SShtZyxoLl9jdXJyZW50VmFsdWUpO2guX2N1cnJlbnRWYWx1ZT1mO2lmKG51bGwhPT1nKWlmKGg9Zy52YWx1ZSxmPUhlKGgsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGgsZik6MTA3Mzc0MTgyMyl8MCwwPT09Zil7aWYoZy5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFOLmN1cnJlbnQpe2I9aGkoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGg9Yi5jaGlsZCxudWxsIT09aCYmKGgucmV0dXJuPWIpO251bGwhPT1oOyl7dmFyIGs9aC5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWspe2c9aC5jaGlsZDtmb3IodmFyIGw9XG5rLmZpcnN0Q29udGV4dDtudWxsIT09bDspe2lmKGwuY29udGV4dD09PWQmJjAhPT0obC5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGw9emcoLTEsYyYtYyksbC50YWc9MixBZyhoLGwpKTtoLmxhbmVzfD1jO2w9aC5hbHRlcm5hdGU7bnVsbCE9PWwmJihsLmxhbmVzfD1jKTtzZyhoLnJldHVybixjKTtrLmxhbmVzfD1jO2JyZWFrfWw9bC5uZXh0fX1lbHNlIGc9MTA9PT1oLnRhZz9oLnR5cGU9PT1iLnR5cGU/bnVsbDpoLmNoaWxkOmguY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49aDtlbHNlIGZvcihnPWg7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWg9Zy5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1nLnJldHVybjtnPWg7YnJlYWt9Zz1nLnJldHVybn1oPWd9ZmkoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sdGcoYixjKSxlPXZnKGUsXG5mLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZmxhZ3N8PTEsZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPWxnKGUsYi5wZW5kaW5nUHJvcHMpLGY9bGcoZS50eXBlLGYpLGlpKGEsYixlLGYsZCxjKTtjYXNlIDE1OnJldHVybiBraShhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGQsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxiLnRhZz0xLEZmKGQpPyhhPSEwLEpmKGIpKTphPSExLHRnKGIsYyksTWcoYixkLGUpLE9nKGIsZCxlLGMpLHFpKG51bGwsYixkLCEwLGEsYyk7Y2FzZSAxOTpyZXR1cm4gQWkoYSxiLGMpO2Nhc2UgMjM6cmV0dXJuIG1pKGEsYixjKTtjYXNlIDI0OnJldHVybiBtaShhLGIsYyl9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTtcbn07ZnVuY3Rpb24gaWsoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmZsYWdzPTA7dGhpcy5sYXN0RWZmZWN0PXRoaXMuZmlyc3RFZmZlY3Q9dGhpcy5uZXh0RWZmZWN0PW51bGw7dGhpcy5jaGlsZExhbmVzPXRoaXMubGFuZXM9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIG5oKGEsYixjLGQpe3JldHVybiBuZXcgaWsoYSxiLGMsZCl9ZnVuY3Rpb24gamkoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1cbmZ1bmN0aW9uIGhrKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBqaShhKT8xOjA7aWYodm9pZCAwIT09YSYmbnVsbCE9PWEpe2E9YS4kJHR5cGVvZjtpZihhPT09QWEpcmV0dXJuIDExO2lmKGE9PT1EYSlyZXR1cm4gMTR9cmV0dXJuIDJ9XG5mdW5jdGlvbiBUZyhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGw9PT1jPyhjPW5oKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMudHlwZT1hLnR5cGUsYy5mbGFncz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcztjLmxhbmVzPWEubGFuZXM7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntsYW5lczpiLmxhbmVzLGZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dH07XG5jLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIFZnKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlqaShhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm4gWGcoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBIYTpnPTg7ZXw9MTY7YnJlYWs7Y2FzZSB3YTpnPTg7ZXw9MTticmVhaztjYXNlIHhhOnJldHVybiBhPW5oKDEyLGMsYixlfDgpLGEuZWxlbWVudFR5cGU9eGEsYS50eXBlPXhhLGEubGFuZXM9ZixhO2Nhc2UgQmE6cmV0dXJuIGE9bmgoMTMsYyxiLGUpLGEudHlwZT1CYSxhLmVsZW1lbnRUeXBlPUJhLGEubGFuZXM9ZixhO2Nhc2UgQ2E6cmV0dXJuIGE9bmgoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9Q2EsYS5sYW5lcz1mLGE7Y2FzZSBJYTpyZXR1cm4gdmkoYyxlLGYsYik7Y2FzZSBKYTpyZXR1cm4gYT1uaCgyNCxjLGIsZSksYS5lbGVtZW50VHlwZT1KYSxhLmxhbmVzPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB5YTpnPTEwO2JyZWFrIGE7Y2FzZSB6YTpnPTk7YnJlYWsgYTtjYXNlIEFhOmc9MTE7YnJlYWsgYTtjYXNlIERhOmc9MTQ7YnJlYWsgYTtjYXNlIEVhOmc9MTY7ZD1udWxsO2JyZWFrIGE7Y2FzZSBGYTpnPTIyO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgxMzAsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpKTt9Yj1uaChnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5sYW5lcz1mO3JldHVybiBifWZ1bmN0aW9uIFhnKGEsYixjLGQpe2E9bmgoNyxhLGQsYik7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIHZpKGEsYixjLGQpe2E9bmgoMjMsYSxkLGIpO2EuZWxlbWVudFR5cGU9SWE7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIFVnKGEsYixjKXthPW5oKDYsYSxudWxsLGIpO2EubGFuZXM9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFdnKGEsYixjKXtiPW5oKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmxhbmVzPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gamsoYSxiLGMpe3RoaXMudGFnPWI7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5maW5pc2hlZFdvcms9dGhpcy5waW5nQ2FjaGU9dGhpcy5jdXJyZW50PXRoaXMucGVuZGluZ0NoaWxkcmVuPW51bGw7dGhpcy50aW1lb3V0SGFuZGxlPS0xO3RoaXMucGVuZGluZ0NvbnRleHQ9dGhpcy5jb250ZXh0PW51bGw7dGhpcy5oeWRyYXRlPWM7dGhpcy5jYWxsYmFja05vZGU9bnVsbDt0aGlzLmNhbGxiYWNrUHJpb3JpdHk9MDt0aGlzLmV2ZW50VGltZXM9WmMoMCk7dGhpcy5leHBpcmF0aW9uVGltZXM9WmMoLTEpO3RoaXMuZW50YW5nbGVkTGFuZXM9dGhpcy5maW5pc2hlZExhbmVzPXRoaXMubXV0YWJsZVJlYWRMYW5lcz10aGlzLmV4cGlyZWRMYW5lcz10aGlzLnBpbmdlZExhbmVzPXRoaXMuc3VzcGVuZGVkTGFuZXM9dGhpcy5wZW5kaW5nTGFuZXM9MDt0aGlzLmVudGFuZ2xlbWVudHM9WmMoMCk7dGhpcy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPW51bGx9XG5mdW5jdGlvbiBrayhhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOnRhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuZnVuY3Rpb24gbGsoYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9SGcoKSxnPUlnKGUpO2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFscztiOntpZihaYihjKSE9PWN8fDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE3MCkpO3ZhciBoPWM7ZG97c3dpdGNoKGgudGFnKXtjYXNlIDM6aD1oLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGI7Y2FzZSAxOmlmKEZmKGgudHlwZSkpe2g9aC5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYn19aD1oLnJldHVybn13aGlsZShudWxsIT09aCk7dGhyb3cgRXJyb3IoeSgxNzEpKTt9aWYoMT09PWMudGFnKXt2YXIgaz1jLnR5cGU7aWYoRmYoaykpe2M9SWYoYyxrLGgpO2JyZWFrIGF9fWM9aH1lbHNlIGM9Q2Y7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj16ZyhmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PWQ/bnVsbDpkO251bGwhPT1cbmQmJihiLmNhbGxiYWNrPWQpO0FnKGUsYik7SmcoZSxnLGYpO3JldHVybiBnfWZ1bmN0aW9uIG1rKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gbmsoYSxiKXthPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7dmFyIGM9YS5yZXRyeUxhbmU7YS5yZXRyeUxhbmU9MCE9PWMmJmM8Yj9jOmJ9fWZ1bmN0aW9uIG9rKGEsYil7bmsoYSxiKTsoYT1hLmFsdGVybmF0ZSkmJm5rKGEsYil9ZnVuY3Rpb24gcGsoKXtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIHFrKGEsYixjKXt2YXIgZD1udWxsIT1jJiZudWxsIT1jLmh5ZHJhdGlvbk9wdGlvbnMmJmMuaHlkcmF0aW9uT3B0aW9ucy5tdXRhYmxlU291cmNlc3x8bnVsbDtjPW5ldyBqayhhLGIsbnVsbCE9YyYmITA9PT1jLmh5ZHJhdGUpO2I9bmgoMyxudWxsLG51bGwsMj09PWI/NzoxPT09Yj8zOjApO2MuY3VycmVudD1iO2Iuc3RhdGVOb2RlPWM7eGcoYik7YVtmZl09Yy5jdXJyZW50O2NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtpZihkKWZvcihhPTA7YTxkLmxlbmd0aDthKyspe2I9ZFthXTt2YXIgZT1iLl9nZXRWZXJzaW9uO2U9ZShiLl9zb3VyY2UpO251bGw9PWMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT9jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9W2IsZV06Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhLnB1c2goYixlKX10aGlzLl9pbnRlcm5hbFJvb3Q9Y31cbnFrLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7bGsoYSx0aGlzLl9pbnRlcm5hbFJvb3QsbnVsbCxudWxsKX07cWsucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9pbnRlcm5hbFJvb3QsYj1hLmNvbnRhaW5lckluZm87bGsobnVsbCxhLG51bGwsZnVuY3Rpb24oKXtiW2ZmXT1udWxsfSl9O2Z1bmN0aW9uIHJrKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1cbmZ1bmN0aW9uIHNrKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgcWsoYSwwLGI/e2h5ZHJhdGU6ITB9OnZvaWQgMCl9XG5mdW5jdGlvbiB0ayhhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXt2YXIgZz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2guY2FsbChhKX19bGsoYixnLGEsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1zayhjLGQpO2c9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtrLmNhbGwoYSl9fVhqKGZ1bmN0aW9uKCl7bGsoYixnLGEsZSl9KX1yZXR1cm4gbWsoZyl9ZWM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDQsYik7b2soYSw0KX19O2ZjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw2NzEwODg2NCxiKTtvayhhLDY3MTA4ODY0KX19O1xuZ2M9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKSxjPUlnKGEpO0pnKGEsYyxiKTtvayhhLGMpfX07aGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYigpfTtcbnliPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6YWIoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPURiKGQpO2lmKCFlKXRocm93IEVycm9yKHkoOTApKTtXYShkKTthYihkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJmZiKGEsISFjLm11bHRpcGxlLGIsITEpfX07R2I9V2o7XG5IYj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVg7WHw9NDt0cnl7cmV0dXJuIGdnKDk4LGEuYmluZChudWxsLGIsYyxkLGUpKX1maW5hbGx5e1g9ZiwwPT09WCYmKHdqKCksaWcoKSl9fTtJYj1mdW5jdGlvbigpezA9PT0oWCY0OSkmJihWaigpLE9qKCkpfTtKYj1mdW5jdGlvbihhLGIpe3ZhciBjPVg7WHw9Mjt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX07ZnVuY3Rpb24gdWsoYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4ga2soYSxiLG51bGwsYyl9dmFyIHZrPXtFdmVudHM6W0NiLHVlLERiLEViLEZiLE9qLHtjdXJyZW50OiExfV19LHdrPXtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3YyxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE3LjAuMlwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn07XG52YXIgeGs9e2J1bmRsZVR5cGU6d2suYnVuZGxlVHlwZSx2ZXJzaW9uOndrLnZlcnNpb24scmVuZGVyZXJQYWNrYWdlTmFtZTp3ay5yZW5kZXJlclBhY2thZ2VOYW1lLHJlbmRlcmVyQ29uZmlnOndrLnJlbmRlcmVyQ29uZmlnLG92ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLG92ZXJyaWRlUHJvcHNEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGg6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOnJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1jYyhhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2suZmluZEZpYmVyQnlIb3N0SW5zdGFuY2V8fFxucGssZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoOm51bGwsc2NoZWR1bGVSZWZyZXNoOm51bGwsc2NoZWR1bGVSb290Om51bGwsc2V0UmVmcmVzaEhhbmRsZXI6bnVsbCxnZXRDdXJyZW50RmliZXI6bnVsbH07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB5az1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXlrLmlzRGlzYWJsZWQmJnlrLnN1cHBvcnRzRmliZXIpdHJ5e0xmPXlrLmluamVjdCh4ayksTWY9eWt9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXZrO2V4cG9ydHMuY3JlYXRlUG9ydGFsPXVrO1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcih5KDE4OCkpO3Rocm93IEVycm9yKHkoMjY4LE9iamVjdC5rZXlzKGEpKSk7fWE9Y2MoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfTtleHBvcnRzLmZsdXNoU3luYz1mdW5jdGlvbihhLGIpe3ZhciBjPVg7aWYoMCE9PShjJjQ4KSlyZXR1cm4gYShiKTtYfD0xO3RyeXtpZihhKXJldHVybiBnZyg5OSxhLmJpbmQobnVsbCxiKSl9ZmluYWxseXtYPWMsaWcoKX19O2V4cG9ydHMuaHlkcmF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCEwLGMpfTtcbmV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITEsYyl9O2V4cG9ydHMudW5tb3VudENvbXBvbmVudEF0Tm9kZT1mdW5jdGlvbihhKXtpZighcmsoYSkpdGhyb3cgRXJyb3IoeSg0MCkpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KFhqKGZ1bmN0aW9uKCl7dGsobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbDthW2ZmXT1udWxsfSl9KSwhMCk6ITF9O2V4cG9ydHMudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM9V2o7ZXhwb3J0cy51bnN0YWJsZV9jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdWsoYSxiLDI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsKX07XG5leHBvcnRzLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyPWZ1bmN0aW9uKGEsYixjLGQpe2lmKCFyayhjKSl0aHJvdyBFcnJvcih5KDIwMCkpO2lmKG51bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxzKXRocm93IEVycm9yKHkoMzgpKTtyZXR1cm4gdGsoYSxiLGMsITEsZCl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjIwLjJcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGYsZyxoLGs7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyl7dmFyIGw9cGVyZm9ybWFuY2U7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gbC5ub3coKX19ZWxzZXt2YXIgcD1EYXRlLHE9cC5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBwLm5vdygpLXF9fVxuaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIHQ9bnVsbCx1PW51bGwsdz1mdW5jdGlvbigpe2lmKG51bGwhPT10KXRyeXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO3QoITAsYSk7dD1udWxsfWNhdGNoKGIpe3Rocm93IHNldFRpbWVvdXQodywwKSxiO319O2Y9ZnVuY3Rpb24oYSl7bnVsbCE9PXQ/c2V0VGltZW91dChmLDAsYSk6KHQ9YSxzZXRUaW1lb3V0KHcsMCkpfTtnPWZ1bmN0aW9uKGEsYil7dT1zZXRUaW1lb3V0KGEsYil9O2g9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSl9O2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4hMX07az1leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKCl7fX1lbHNle3ZhciB4PXdpbmRvdy5zZXRUaW1lb3V0LHk9d2luZG93LmNsZWFyVGltZW91dDtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe3ZhciB6PVxud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIik7XCJmdW5jdGlvblwiIT09dHlwZW9mIHomJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpfXZhciBBPSExLEI9bnVsbCxDPS0xLEQ9NSxFPTA7ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpPj1cbkV9O2s9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oYSl7MD5hfHwxMjU8YT9jb25zb2xlLmVycm9yKFwiZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsIGZvcmNpbmcgZnJhbWUgcmF0ZXMgaGlnaGVyIHRoYW4gMTI1IGZwcyBpcyBub3Qgc3VwcG9ydGVkXCIpOkQ9MDxhP01hdGguZmxvb3IoMUUzL2EpOjV9O3ZhciBGPW5ldyBNZXNzYWdlQ2hhbm5lbCxHPUYucG9ydDI7Ri5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZihudWxsIT09Qil7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtFPWErRDt0cnl7QighMCxhKT9HLnBvc3RNZXNzYWdlKG51bGwpOihBPSExLEI9bnVsbCl9Y2F0Y2goYil7dGhyb3cgRy5wb3N0TWVzc2FnZShudWxsKSxiO319ZWxzZSBBPSExfTtmPWZ1bmN0aW9uKGEpe0I9YTtBfHwoQT0hMCxHLnBvc3RNZXNzYWdlKG51bGwpKX07Zz1mdW5jdGlvbihhLGIpe0M9XG54KGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9O2g9ZnVuY3Rpb24oKXt5KEMpO0M9LTF9fWZ1bmN0aW9uIEgoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKHZvaWQgMCE9PWUmJjA8SShlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gSihhKXthPWFbMF07cmV0dXJuIHZvaWQgMD09PWE/bnVsbDphfVxuZnVuY3Rpb24gSyhhKXt2YXIgYj1hWzBdO2lmKHZvaWQgMCE9PWIpe3ZhciBjPWEucG9wKCk7aWYoYyE9PWIpe2FbMF09YzthOmZvcih2YXIgZD0wLGU9YS5sZW5ndGg7ZDxlOyl7dmFyIG09MiooZCsxKS0xLG49YVttXSx2PW0rMSxyPWFbdl07aWYodm9pZCAwIT09biYmMD5JKG4sYykpdm9pZCAwIT09ciYmMD5JKHIsbik/KGFbZF09cixhW3ZdPWMsZD12KTooYVtkXT1uLGFbbV09YyxkPW0pO2Vsc2UgaWYodm9pZCAwIT09ciYmMD5JKHIsYykpYVtkXT1yLGFbdl09YyxkPXY7ZWxzZSBicmVhayBhfX1yZXR1cm4gYn1yZXR1cm4gbnVsbH1mdW5jdGlvbiBJKGEsYil7dmFyIGM9YS5zb3J0SW5kZXgtYi5zb3J0SW5kZXg7cmV0dXJuIDAhPT1jP2M6YS5pZC1iLmlkfXZhciBMPVtdLE09W10sTj0xLE89bnVsbCxQPTMsUT0hMSxSPSExLFM9ITE7XG5mdW5jdGlvbiBUKGEpe2Zvcih2YXIgYj1KKE0pO251bGwhPT1iOyl7aWYobnVsbD09PWIuY2FsbGJhY2spSyhNKTtlbHNlIGlmKGIuc3RhcnRUaW1lPD1hKUsoTSksYi5zb3J0SW5kZXg9Yi5leHBpcmF0aW9uVGltZSxIKEwsYik7ZWxzZSBicmVhaztiPUooTSl9fWZ1bmN0aW9uIFUoYSl7Uz0hMTtUKGEpO2lmKCFSKWlmKG51bGwhPT1KKEwpKVI9ITAsZihWKTtlbHNle3ZhciBiPUooTSk7bnVsbCE9PWImJmcoVSxiLnN0YXJ0VGltZS1hKX19XG5mdW5jdGlvbiBWKGEsYil7Uj0hMTtTJiYoUz0hMSxoKCkpO1E9ITA7dmFyIGM9UDt0cnl7VChiKTtmb3IoTz1KKEwpO251bGwhPT1PJiYoIShPLmV4cGlyYXRpb25UaW1lPmIpfHxhJiYhZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZCgpKTspe3ZhciBkPU8uY2FsbGJhY2s7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe08uY2FsbGJhY2s9bnVsbDtQPU8ucHJpb3JpdHlMZXZlbDt2YXIgZT1kKE8uZXhwaXJhdGlvblRpbWU8PWIpO2I9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT9PLmNhbGxiYWNrPWU6Tz09PUooTCkmJksoTCk7VChiKX1lbHNlIEsoTCk7Tz1KKEwpfWlmKG51bGwhPT1PKXZhciBtPSEwO2Vsc2V7dmFyIG49SihNKTtudWxsIT09biYmZyhVLG4uc3RhcnRUaW1lLWIpO209ITF9cmV0dXJuIG19ZmluYWxseXtPPW51bGwsUD1jLFE9ITF9fXZhciBXPWs7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtcbmV4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7Unx8UXx8KFI9ITAsZihWKSl9O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gUH07ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBKKEwpfTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goUCl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9UH12YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e1A9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcmVxdWVzdFBhaW50PVc7ZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz1QO1A9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e1A9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWM/KGM9Yy5kZWxheSxjPVwibnVtYmVyXCI9PT10eXBlb2YgYyYmMDxjP2QrYzpkKTpjPWQ7c3dpdGNoKGEpe2Nhc2UgMTp2YXIgZT0tMTticmVhaztjYXNlIDI6ZT0yNTA7YnJlYWs7Y2FzZSA1OmU9MTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6ZT0xRTQ7YnJlYWs7ZGVmYXVsdDplPTVFM31lPWMrZTthPXtpZDpOKyssY2FsbGJhY2s6Yixwcmlvcml0eUxldmVsOmEsc3RhcnRUaW1lOmMsZXhwaXJhdGlvblRpbWU6ZSxzb3J0SW5kZXg6LTF9O2M+ZD8oYS5zb3J0SW5kZXg9YyxIKE0sYSksbnVsbD09PUooTCkmJmE9PT1KKE0pJiYoUz9oKCk6Uz0hMCxnKFUsYy1kKSkpOihhLnNvcnRJbmRleD1lLEgoTCxhKSxSfHxRfHwoUj0hMCxmKFYpKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9UDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7UD1jfX19O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7O0FDdkRBOztBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7OztBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBQ0E7QUFHQTs7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQWtCQTtBQUNBO0FBb0JBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBd0NBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBUkE7QUFZQTtBQUVBOztBOzs7Ozs7Ozs7OztBQ3pJQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBUkE7QUFDQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFWQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBNUNBO0FBQUE7QUF4QkE7QUF3RUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBOzs7Ozs7Ozs7O0FDelZBO0FBY0E7QUFFQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUlBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQXZCQTtBQStCQTtBQUNBO0FBRUE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQStFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBSkE7QUFOQTtBQWVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUFBOztBOzs7Ozs7Ozs7Ozs7OztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBOztBOzs7Ozs7Ozs7O0FDbkdBO0FBVUE7QUFDQTtBQUVBOztBOzs7Ozs7Ozs7OztBQ2JBO0FBR0E7QUFFQTtBQUdBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUxBO0FBUUE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBSUE7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUVBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7QUFHQTtBQUNBOzs7O0FBaEhBO0FBQ0E7QUFxSEE7O0FDM0lBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFWQTtBQWFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFMQTtBQU9BO0FBQ0E7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQW9KQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFYQTtBQXNCQTtBQUNBO0FBREE7QUFxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQkE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQU1BO0FBSUE7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBWEE7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBSUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZ0JBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFoUEE7QUE4UEE7QUFFQTtBQUNBO0FBREE7Ozs7QUNqZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQTBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBSkE7QUFDQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZUE7QUFDQTtBQURBO0FBbEdBO0FBc0dBO0FBRUE7Ozs7O0FDcE9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQWFBO0FBRUE7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWJBO0FBeUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBYkE7QUFpQkE7QUFDQTtBQUVBOzs7OztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQW9CQTtBQUVBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVRBO0FBQUE7QUFDQTtBQVdBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQVRBO0FBWUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBSkE7QUExSEE7QUFzSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7Ozs7O0FDckxBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRUE7QUFDQTtBQW1FQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFYQTtBQWdCQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUF0REE7QUE2REE7QUFDQTtBQUVBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFPQTtBQUFBO0FBUEE7QUFBQTtBQURBO0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFsREE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBVUE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBRkE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBREE7QUE1QkE7QUFMQTtBQXVDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFJQTtBQUNBO0FBQ0E7QUFDQSxpQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0hBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBR0E7QUFWQTtBQUpBO0FBZUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUtBO0FBL0JBO0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFEQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQWRBO0FBQUE7QUFEQTtBQTRCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQU1BO0FBWEE7QUFhQTtBQXpCQTtBQTRCQTtBQUdBO0FBQ0E7QUFEQTs7QTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQU1BO0FBVkE7QUFtQkE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFOQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBNUNBO0FBNERBO0FBQ0E7QUFEQTs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUdBO0FBSEE7QUFlQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDeFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRUE7OztBOzs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRUE7OztBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==