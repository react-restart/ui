exports.id = 621;
exports.ids = [621];
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

/***/ 5793:
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
const frontMatter={};const contentTitle=undefined;const metadata={"unversionedId":"Button","id":"Button","isDocsHomePage":false,"title":"Button","description":"An abstract button component for creating accessible buttons regardless of the HTML","source":"@site/docs/Button.mdx","sourceDirName":".","slug":"/Button","permalink":"/ui/Button","version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Getting Started","permalink":"/ui/"},"next":{"title":"Dropdown","permalink":"/ui/Dropdown"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'<code>useButtonProps</code>',id:'usebuttonprops',children:[]},{value:'Styling',id:'styling',children:[]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(MDXLayout,(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`An abstract button component for creating accessible buttons regardless of the HTML
element used to render it.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.default,{imports:()=>(0,_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.allValues)({"@restart/ui":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6352)))}),mdxType:"ImportContext"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx button-example","metastring":"live className=button-example","live":true},`import { Button } from "@restart/ui";

<Button>I'm a Button</Button>;
`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`Not very impressive on its own, but `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Button`),` does come with a few conveniences
over the plain HTML element.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`type`),` defaults to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`button`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("li",{parentName:"ul"},`Ensures that non `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`button`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`as`),` options remain accessible`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("li",{parentName:"ul"},`contextually renders an `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`<a>`),` if href or other anchor props are added.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.default,{imports:()=>(0,_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.allValues)({"@restart/ui":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6352)))}),mdxType:"ImportContext"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx button-example","metastring":"live className=button-example","live":true},`import { Button } from "@restart/ui";

<div className="space-x-4">
  <Button>I'm a Button</Button>
  <Button href="/home">I'm a link</Button>
  <Button as="span">I'm a span but also a button</Button>
</div>;
`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("h3",{"id":"usebuttonprops"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"h3"},`useButtonProps`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`Most of the heavy lifting in Button comes from the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`useButtonProps`),` hook. You
can use the hook directly to turn any component into an accessible button.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`If an explicit `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`tagName`),` isn't provided, the hook will pick between 'button' and 'a'
depending on whether any anchor specific options, like `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`href`),`, were provided.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},`import { useButtonProps } from 'Button'


function CompanyButton(props) {
  const [ariaButtonProps, { tagName: Tag }] = useButtonProps(props);

  return <Tag {...props} {...ariaButtonProps} />
}

<div className="space-x-4">
  <CompanyButton>Hey there<CompanyButton>
  <CompanyButton href="/home">I'm a link</CompanyButton>
</div>;
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("h2",{"id":"styling"},`Styling`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`Styling options are straightforward for `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Button`),` below is a minimal example using TailwindCSS.
There is one caveat around styling the button's disabled state. Styling should be based off
of `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`disabled`),` prop directly as opposed to using a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`:disabled`),` CSS selector.
This is because the button may render an HTML element that does not support
the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`disabled`),` attribute (such as an `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`<a>`),`). Alternatively, you can select for `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`[aria-disabled='true']`),`
in addition to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`:disabled`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.default,{imports:()=>(0,_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.allValues)({"@restart/ui":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6352))),"clsx":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6010)))}),mdxType:"ImportContext"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"live","live":true},`import { Button } from "@restart/ui";
import clsx from "clsx";

function StyledButton(props) {
  return (
    <Button
      {...props}
      className={clsx(
        props.className,
        "transition text-md",
        "h-10 bg-white border border-primary text-primary rounded px-8 mt-4 appearance-none text-center whitespace-no-wrap",
        "focus:outline-none focus:ring-4 ring-primary-200",
        !props.disabled &&
          "cursor-pointer hover:bg-primary hover:text-white",
        "active:bg-primary-600 active:text-white",
        props.disabled && "cursor-not-allowed opacity-60"
      )}
    />
  );
}

<div className="space-x-4">
  <StyledButton>Button</StyledButton>
  <StyledButton disabled>Disabled</StyledButton>
</div>;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzLzZkMGZjZTdhLmIxMmFkNDdiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvc3NyL2Rpc3QvbW9kdWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VDYWxsYmFja1JlZi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VFdmVudENhbGxiYWNrLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VGb3JjZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2NhblVzZURPTS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyV2luZG93LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2h5cGhlbmF0ZVN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY3NzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3F1ZXJ5U2VsZWN0b3JBbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9ob29rLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdW5jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2Rpc3QvZXNtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQDRjL2RvY3VzYXVydXMtcHJlc2V0L2xpYi90aGVtZS9JbXBvcnRDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRGF0YUtleS50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUdsb2JhbExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bk1lbnUudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duVG9nZ2xlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9OYXZDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9TZWxlY3RhYmxlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVVwZGF0ZWRSZWYuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVdpbGxVbm1vdW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL2dldFNjcm9sbGJhcldpZHRoLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsTWFuYWdlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VXYWl0Rm9yRE9NUmVmLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTWVyZ2VkUmVmcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Qb3J0YWwudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYkNvbnRleHQudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdkl0ZW0udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvTm9vcFRyYW5zaXRpb24udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9UYWJzLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RlcXVhbC9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlU2FmZVN0YXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvcG9wcGVyLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL3VzZVBvcHBlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VSb290Q2xvc2UudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL2RvY3MvQnV0dG9uLm1keCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gRGVmYXVsdCBjb250ZXh0IHZhbHVlIHRvIHVzZSBpbiBjYXNlIHRoZXJlIGlzIG5vIFNTUlByb3ZpZGVyLiBUaGlzIGlzIGZpbmUgZm9yXG4vLyBjbGllbnQtb25seSBhcHBzLiBJbiBvcmRlciB0byBzdXBwb3J0IG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIHBvdGVudGlhbGx5XG4vLyBiZWluZyBvbiB0aGUgcGFnZSBhdCBvbmNlLCB0aGUgcHJlZml4IGlzIHNldCB0byBhIHJhbmRvbSBudW1iZXIuIFNTUlByb3ZpZGVyXG4vLyB3aWxsIHJlc2V0IHRoaXMgdG8gemVybyBmb3IgY29uc2lzdGVuY3kgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCwgc28gaW4gdGhlXG4vLyBTU1IgY2FzZSBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3QgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ID0ge1xuICBwcmVmaXg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwKSxcbiAgY3VycmVudDogMFxufTtcblxuY29uc3QgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmNyZWF0ZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0KTtcblxuLyoqXG4gKiBXaGVuIHVzaW5nIFNTUiB3aXRoIFJlYWN0IEFyaWEsIGFwcGxpY2F0aW9ucyBtdXN0IGJlIHdyYXBwZWQgaW4gYW4gU1NSUHJvdmlkZXIuXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCBhdXRvIGdlbmVyYXRlZCBpZHMgYXJlIGNvbnNpc3RlbnQgYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTU1JQcm92aWRlcihwcm9wcykge1xuICBsZXQgY3VyID0gdXNlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCk7XG4gIGxldCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBTU1JQcm92aWRlciwgc2V0IHRvIHplcm8sIG90aGVyd2lzZSBpbmNyZW1lbnQuXG4gICAgcHJlZml4OiBjdXIgPT09ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCA/IDAgOiArK2N1ci5wcmVmaXgsXG4gICAgY3VycmVudDogMFxuICB9KSwgW2N1cl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5jcmVhdGVFbGVtZW50KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn1cbmxldCAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkY2FuVXNlRE9NID0gQm9vbGVhbih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuLyoqIEBwcml2YXRlICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTU1JTYWZlSWQoZGVmYXVsdElkKSB7XG4gIGxldCBjdHggPSB1c2VDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0KTsgLy8gSWYgd2UgYXJlIHJlbmRlcmluZyBpbiBhIG5vbi1ET00gZW52aXJvbm1lbnQsIGFuZCB0aGVyZSdzIG5vIFNTUlByb3ZpZGVyLFxuICAvLyBwcm92aWRlIGEgd2FybmluZyB0byBoaW50IHRvIHRoZSBkZXZlbG9wZXIgdG8gYWRkIG9uZS5cblxuICBpZiAoY3R4ID09PSAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQgJiYgISRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRjYW5Vc2VET00pIHtcbiAgICBjb25zb2xlLndhcm4oJ1doZW4gc2VydmVyIHJlbmRlcmluZywgeW91IG11c3Qgd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIGFuIDxTU1JQcm92aWRlcj4gdG8gZW5zdXJlIGNvbnNpc3RlbnQgaWRzIGFyZSBnZW5lcmF0ZWQgYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIuJyk7XG4gIH1cblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiBkZWZhdWx0SWQgfHwgXCJyZWFjdC1hcmlhLVwiICsgY3R4LnByZWZpeCArIFwiLVwiICsgKytjdHguY3VycmVudCwgW2RlZmF1bHRJZF0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBjdXJyZW50bHkgYmVpbmcgc2VydmVyIHNpZGUgcmVuZGVyZWQgb3JcbiAqIGh5ZHJhdGVkIG9uIHRoZSBjbGllbnQuIENhbiBiZSB1c2VkIHRvIGRlbGF5IGJyb3dzZXItc3BlY2lmaWMgcmVuZGVyaW5nXG4gKiB1bnRpbCBhZnRlciBoeWRyYXRpb24uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzU1NSKCkge1xuICBsZXQgY3VyID0gdXNlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCk7XG4gIGxldCBpc0luU1NSQ29udGV4dCA9IGN1ciAhPT0gJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0O1xuICBsZXQgW2lzU1NSLCBzZXRJc1NTUl0gPSB1c2VTdGF0ZShpc0luU1NSQ29udGV4dCk7IC8vIElmIG9uIHRoZSBjbGllbnQsIGFuZCB0aGUgY29tcG9uZW50IHdhcyBpbml0aWFsbHkgc2VydmVyIHJlbmRlcmVkLFxuICAvLyB0aGVuIHNjaGVkdWxlIGEgbGF5b3V0IGVmZmVjdCB0byB1cGRhdGUgdGhlIGNvbXBvbmVudCBhZnRlciBoeWRyYXRpb24uXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSW5TU1JDb250ZXh0KSB7XG4gICAgLy8gVGhpcyBpZiBzdGF0ZW1lbnQgdGVjaG5pY2FsbHkgYnJlYWtzIHRoZSBydWxlcyBvZiBob29rcywgYnV0IGlzIHNhZmVcbiAgICAvLyBiZWNhdXNlIHRoZSBjb25kaXRpb24gbmV2ZXIgY2hhbmdlcyBhZnRlciBtb3VudGluZy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0SXNTU1IoZmFsc2UpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiBpc1NTUjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGhvb2sgYXJvdW5kIGB1c2VTdGF0ZWAgZGVzaWduZWQgdG8gYmUgcGFpcmVkIHdpdGhcbiAqIHRoZSBjb21wb25lbnQgW2NhbGxiYWNrIHJlZl0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzKSBhcGkuXG4gKiBDYWxsYmFjayByZWZzIGFyZSB1c2VmdWwgb3ZlciBgdXNlUmVmKClgIHdoZW4geW91IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVmIGJlaW5nIHNldFxuICogaW5zdGVhZCBvZiBsYXppbHkgYWNjZXNzaW5nIGl0IGluIGFuIGVmZmVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGlmICghZWxlbWVudCkgcmV0dXJuXG4gKlxuICogICBjb25zdCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoZWxlbWVudClcbiAqXG4gKiAgIHJldHVybiAoKSA9PiB7XG4gKiAgICAgY2FsZW5kYXIuZGVzdHJveSgpXG4gKiAgIH1cbiAqIH0sIFtlbGVtZW50XSlcbiAqXG4gKiByZXR1cm4gPGRpdiByZWY9e2F0dGFjaFJlZn0gLz5cbiAqIGBgYFxuICpcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoKSB7XG4gIHJldHVybiB1c2VTdGF0ZShudWxsKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWZgIHdob3NlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gYW4gZWZmZWN0LCBlbnN1cmluZyB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlIGlzIHRoZSBvbmUgcmVuZGVyZWQgd2l0aC4gR2VuZXJhbGx5IG9ubHkgcmVxdWlyZWQgZm9yIENvbmN1cnJlbnQgbW9kZSB1c2FnZVxuICogd2hlcmUgcHJldmlvdXMgd29yayBpbiBgcmVuZGVyKClgIG1heSBiZSBkaXNjYXJkZWQgYmVmb3IgYmVpbmcgdXNlZC5cbiAqXG4gKiBUaGlzIGlzIHNhZmUgdG8gYWNjZXNzIGluIGFuIGV2ZW50IGhhbmRsZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBgUmVmYCB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbW1pdHRlZFJlZih2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIHJlZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tbWl0dGVkUmVmOyIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNvbW1pdHRlZFJlZiBmcm9tICcuL3VzZUNvbW1pdHRlZFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSB1c2VDb21taXR0ZWRSZWYoZm4pO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5hcHBseShyZWYsIGFyZ3VtZW50cyk7XG4gIH0sIFtyZWZdKTtcbn0iLCJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyBhIGNvbXBvbmVudCB1cGRhdGUuIHRoZSBob29rIGVxdWl2YWxlbnQgdG9cbiAqIGB0aGlzLmZvcmNlVXBkYXRlKClgIGluIGEgY2xhc3MgY29tcG9uZW50LiBJbiBtb3N0IGNhc2VzIHVzaW5nIGEgc3RhdGUgdmFsdWUgZGlyZWN0bHlcbiAqIGlzIHByZWZlcmFibGUgYnV0IG1heSBiZSByZXF1aXJlZCBpbiBzb21lIGFkdmFuY2VkIHVzYWdlcyBvZiByZWZzIGZvciBpbnRlcm9wIG9yXG4gKiB3aGVuIGRpcmVjdCBET00gbWFuaXB1bGF0aW9uIGlzIHJlcXVpcmVkLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gKlxuICogY29uc3QgdXBkYXRlT25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAqICBmb3JjZVVwZGF0ZSgpXG4gKiB9LCBbZm9yY2VVcGRhdGVdKVxuICpcbiAqIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt1cGRhdGVPbkNsaWNrfT5IaSB0aGVyZTwvYnV0dG9uPlxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gIC8vIFRoZSB0b2dnbGluZyBzdGF0ZSB2YWx1ZSBpcyBkZXNpZ25lZCB0byBkZWZlYXQgUmVhY3Qgb3B0aW1pemF0aW9ucyBmb3Igc2tpcHBpbmdcbiAgLy8gdXBkYXRlcyB3aGVuIHRoZXkgYXJlIHN0cmljdGluZyBlcXVhbCB0byB0aGUgbGFzdCBzdGF0ZSB2YWx1ZVxuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiAhc3RhdGU7XG4gIH0sIGZhbHNlKSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgcmV0dXJuIGRpc3BhdGNoO1xufSIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBUcmFjayB3aGV0aGVyIGEgY29tcG9uZW50IGlzIGN1cnJlbnQgbW91bnRlZC4gR2VuZXJhbGx5IGxlc3MgcHJlZmVyYWJsZSB0aGFuXG4gKiBwcm9wZXJsbHkgY2FuY2VsaW5nIGVmZmVjdHMgc28gdGhleSBkb24ndCBydW4gYWZ0ZXIgYSBjb21wb25lbnQgaXMgdW5tb3VudGVkLFxuICogYnV0IGhlbHBmdWwgaW4gY2FzZXMgd2hlcmUgdGhhdCBpc24ndCBmZWFzaWJsZSwgc3VjaCBhcyBhIGBQcm9taXNlYCByZXNvbHV0aW9uLlxuICpcbiAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGlzTW91bnRlZCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gKiBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkKClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBmZXRjaGRhdGEoKS50aGVuKChuZXdEYXRhKSA9PiB7XG4gKiAgICAgIGlmIChpc01vdW50ZWQoKSkge1xuICogICAgICAgIHNldERhdGEobmV3RGF0YSk7XG4gKiAgICAgIH1cbiAqICAgfSlcbiAqIH0pXG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNb3VudGVkKCkge1xuICB2YXIgbW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZVJlZihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1vdW50ZWQuY3VycmVudDtcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGlzTW91bnRlZC5jdXJyZW50O1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBTdG9yZSB0aGUgbGFzdCBvZiBzb21lIHZhbHVlLiBUcmFja2VkIHZpYSBhIGBSZWZgIG9ubHkgdXBkYXRpbmcgaXRcbiAqIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVycy5cbiAqXG4gKiBIZWxwZnVsIGlmIHlvdSBuZWVkIHRvIGNvbXBhcmUgYSBwcm9wIHZhbHVlIHRvIGl0J3MgcHJldmlvdXMgdmFsdWUgZHVyaW5nIHJlbmRlci5cbiAqXG4gKiBgYGB0c1xuICogZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gKiAgIGNvbnN0IGxhc3RQcm9wcyA9IHVzZVByZXZpb3VzKHByb3BzKVxuICpcbiAqICAgaWYgKGxhc3RQcm9wcy5mb28gIT09IHByb3BzLmZvbylcbiAqICAgICByZXNldFZhbHVlRnJvbVByb3BzKHByb3BzLmZvbylcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gdHJhY2tcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICcuL2NhblVzZURPTSc7XG5leHBvcnQgdmFyIG9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcbmV4cG9ydCB2YXIgb25jZVN1cHBvcnRlZCA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgIHJldHVybiBvcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZ2V0IG9uY2UoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbXVsdGktYXNzaWduXG4gICAgICByZXR1cm4gb25jZVN1cHBvcnRlZCA9IG9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG4gIGlmIChjYW5Vc2VET00pIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgdHJ1ZSk7XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgLyogKi9cbn1cblxuLyoqXG4gKiBBbiBgYWRkRXZlbnRMaXN0ZW5lcmAgcG9ueWZpbGwsIHN1cHBvcnRzIHRoZSBgb25jZWAgb3B0aW9uXG4gKiBcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gZXZlbnROYW1lIHRoZSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlIHRoZSBoYW5kbGVyXG4gKiBAcGFyYW0gb3B0aW9ucyBldmVudCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbicgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICB2YXIgb25jZSA9IG9wdGlvbnMub25jZSxcbiAgICAgICAgY2FwdHVyZSA9IG9wdGlvbnMuY2FwdHVyZTtcbiAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgaWYgKCFvbmNlU3VwcG9ydGVkICYmIG9uY2UpIHtcbiAgICAgIHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlci5fX29uY2UgfHwgZnVuY3Rpb24gb25jZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaGFuZGxlci5fX29uY2UgPSB3cmFwcGVkSGFuZGxlcjtcbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwcGVkSGFuZGxlciwgb3B0aW9uc1N1cHBvcnRlZCA/IG9wdGlvbnMgOiBjYXB0dXJlKTtcbiAgfVxuXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudExpc3RlbmVyOyIsImV4cG9ydCBkZWZhdWx0ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgbm8tY29uZC1hc3NpZ24gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gZWxlbWVudCBjb250YWlucyBhbm90aGVyIGdpdmVuIGVsZW1lbnQuXG4gKiBcbiAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGVsZW1lbnRcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50IHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKGNvbnRleHQsIG5vZGUpIHtcbiAgLy8gSFRNTCBET00gYW5kIFNWRyBET00gbWF5IGhhdmUgZGlmZmVyZW50IHN1cHBvcnQgbGV2ZWxzLFxuICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIG9uIGNvbnRleHQgaW5zdGVhZCBvZiBhIGRvY3VtZW50IHJvb3QgZWxlbWVudC5cbiAgaWYgKGNvbnRleHQuY29udGFpbnMpIHJldHVybiBjb250ZXh0LmNvbnRhaW5zKG5vZGUpO1xuICBpZiAoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikgcmV0dXJuIGNvbnRleHQgPT09IG5vZGUgfHwgISEoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlKSAmIDE2KTtcbn0iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBvd25lciB3aW5kb3cgb2YgYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MgJiYgZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi9vd25lcldpbmRvdyc7XG4vKipcbiAqIFJldHVybnMgb25lIG9yIGFsbCBjb21wdXRlZCBzdHlsZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQuXG4gKiBcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gcHN1ZWRvRWxlbWVudCB0aGUgc3R5bGUgcHJvcGVydHlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpIHtcbiAgcmV0dXJuIG93bmVyV2luZG93KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcHN1ZWRvRWxlbWVudCk7XG59IiwidmFyIHJVcHBlciA9IC8oW0EtWl0pL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAqL1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZSc7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59IiwidmFyIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QodmFsdWUpKTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tICcuL2dldENvbXB1dGVkU3R5bGUnO1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZVN0eWxlJztcbmltcG9ydCBpc1RyYW5zZm9ybSBmcm9tICcuL2lzVHJhbnNmb3JtJztcblxuZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHkpIHtcbiAgdmFyIGNzcyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtcyA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShoeXBoZW5hdGUocHJvcGVydHkpKSB8fCBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wZXJ0eSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydHlba2V5XTtcblxuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoaHlwaGVuYXRlKGtleSkpO1xuICAgIH0gZWxzZSBpZiAoaXNUcmFuc2Zvcm0oa2V5KSkge1xuICAgICAgdHJhbnNmb3JtcyArPSBrZXkgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3MgKz0gaHlwaGVuYXRlKGtleSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtcyArIFwiO1wiO1xuICB9XG5cbiAgbm9kZS5zdHlsZS5jc3NUZXh0ICs9IFwiO1wiICsgY3NzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZTsiLCIvKipcbiAqIEEgYHJlbW92ZUV2ZW50TGlzdGVuZXJgIHBvbnlmaWxsXG4gKiBcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gZXZlbnROYW1lIHRoZSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlIHRoZSBoYW5kbGVyXG4gKiBAcGFyYW0gb3B0aW9ucyBldmVudCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHZhciBjYXB0dXJlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5jYXB0dXJlIDogb3B0aW9ucztcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSk7XG5cbiAgaWYgKGhhbmRsZXIuX19vbmNlKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlci5fX29uY2UsIGNhcHR1cmUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUV2ZW50TGlzdGVuZXI7IiwiaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAnLi9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCByZW1vdmVFdmVudExpc3RlbmVyIGZyb20gJy4vcmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuOyIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duZXIgZG9jdW1lbnQgb2YgYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lckRvY3VtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xufSIsInZhciB0b0FycmF5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgW10uc2xpY2UpO1xuLyoqXG4gKiBSdW5zIGBxdWVyeVNlbGVjdG9yQWxsYCBvbiBhIGdpdmVuIGVsZW1lbnQuXG4gKiBcbiAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXNhKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiB0b0FycmF5KGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gcmVhZE9ubHlQcm9wVHlwZShoYW5kbGVyLCBuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXByb3BzW2hhbmRsZXJdKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJZb3UgaGF2ZSBwcm92aWRlZCBhIGBcIiArIHByb3BOYW1lICsgXCJgIHByb3AgdG8gYFwiICsgbmFtZSArIFwiYCBcIiArIChcIndpdGhvdXQgYW4gYFwiICsgaGFuZGxlciArIFwiYCBoYW5kbGVyIHByb3AuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIFwiKSArIChcIklmIHRoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYFwiICsgZGVmYXVsdEtleShwcm9wTmFtZSkgKyBcImAuIFwiKSArIChcIk90aGVyd2lzZSwgc2V0IGBcIiArIGhhbmRsZXIgKyBcImAuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmNvbnRyb2xsZWRQcm9wVHlwZXMoY29udHJvbGxlZFZhbHVlcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHByb3BUeXBlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhjb250cm9sbGVkVmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgLy8gYWRkIGRlZmF1bHQgcHJvcFR5cGVzIGZvciBmb2xrcyB0aGF0IHVzZSBydW50aW1lIGNoZWNrc1xuICAgIHByb3BUeXBlc1tkZWZhdWx0S2V5KHByb3ApXSA9IG5vb3A7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGhhbmRsZXIgPSBjb250cm9sbGVkVmFsdWVzW3Byb3BdO1xuICAgICAgISh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycgJiYgaGFuZGxlci50cmltKCkubGVuZ3RoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1VuY29udHJvbGxhYmxlIC0gWyVzXTogdGhlIHByb3AgYCVzYCBuZWVkcyBhIHZhbGlkIGhhbmRsZXIga2V5IG5hbWUgaW4gb3JkZXIgdG8gbWFrZSBpdCB1bmNvbnRyb2xsYWJsZScsIGRpc3BsYXlOYW1lLCBwcm9wKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBwcm9wVHlwZXNbcHJvcF0gPSByZWFkT25seVByb3BUeXBlKGhhbmRsZXIsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvcFR5cGVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcChwcm9wcywgcHJvcCkge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT09IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0S2V5KGtleSkge1xuICByZXR1cm4gJ2RlZmF1bHQnICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbn1cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuQWNjZXB0UmVmKGNvbXBvbmVudCkge1xuICByZXR1cm4gISFjb21wb25lbnQgJiYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdmdW5jdGlvbicgfHwgY29tcG9uZW50LnByb3RvdHlwZSAmJiBjb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cblxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIHVzZVVuY29udHJvbGxlZFByb3AocHJvcFZhbHVlLCBkZWZhdWx0VmFsdWUsIGhhbmRsZXIpIHtcbiAgdmFyIHdhc1Byb3BSZWYgPSB1c2VSZWYocHJvcFZhbHVlICE9PSB1bmRlZmluZWQpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpLFxuICAgICAgc3RhdGVWYWx1ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBpc1Byb3AgPSBwcm9wVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgdmFyIHdhc1Byb3AgPSB3YXNQcm9wUmVmLmN1cnJlbnQ7XG4gIHdhc1Byb3BSZWYuY3VycmVudCA9IGlzUHJvcDtcbiAgLyoqXG4gICAqIElmIGEgcHJvcCBzd2l0Y2hlcyBmcm9tIGNvbnRyb2xsZWQgdG8gVW5jb250cm9sbGVkXG4gICAqIHJlc2V0IGl0cyB2YWx1ZSB0byB0aGUgZGVmYXVsdFZhbHVlXG4gICAqL1xuXG4gIGlmICghaXNQcm9wICYmIHdhc1Byb3AgJiYgc3RhdGVWYWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XG4gICAgc2V0U3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBbaXNQcm9wID8gcHJvcFZhbHVlIDogc3RhdGVWYWx1ZSwgdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG4gICAgc2V0U3RhdGUodmFsdWUpO1xuICB9LCBbaGFuZGxlcl0pXTtcbn1cblxuZXhwb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVW5jb250cm9sbGVkKHByb3BzLCBjb25maWcpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZykucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZpZWxkTmFtZSkge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgX3JlZiA9IHJlc3VsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZltVdGlscy5kZWZhdWx0S2V5KGZpZWxkTmFtZSldLFxuICAgICAgICBwcm9wc1ZhbHVlID0gX3JlZltmaWVsZE5hbWVdLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1V0aWxzLmRlZmF1bHRLZXkoZmllbGROYW1lKSwgZmllbGROYW1lXS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcblxuICAgIHZhciBoYW5kbGVyTmFtZSA9IGNvbmZpZ1tmaWVsZE5hbWVdO1xuXG4gICAgdmFyIF91c2VVbmNvbnRyb2xsZWRQcm9wID0gdXNlVW5jb250cm9sbGVkUHJvcChwcm9wc1ZhbHVlLCBkZWZhdWx0VmFsdWUsIHByb3BzW2hhbmRsZXJOYW1lXSksXG4gICAgICAgIHZhbHVlID0gX3VzZVVuY29udHJvbGxlZFByb3BbMF0sXG4gICAgICAgIGhhbmRsZXIgPSBfdXNlVW5jb250cm9sbGVkUHJvcFsxXTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbZmllbGROYW1lXSA9IHZhbHVlLCBfZXh0ZW5kczJbaGFuZGxlck5hbWVdID0gaGFuZGxlciwgX2V4dGVuZHMyKSk7XG4gIH0sIHByb3BzKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbnZhciBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9qcXVlbnNlL3NyYy91bmNvbnRyb2xsYWJsZS9zcmMvdW5jb250cm9sbGFibGUuanNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5jb250cm9sbGFibGUoQ29tcG9uZW50LCBjb250cm9sbGVkVmFsdWVzLCBtZXRob2RzKSB7XG4gIGlmIChtZXRob2RzID09PSB2b2lkIDApIHtcbiAgICBtZXRob2RzID0gW107XG4gIH1cblxuICB2YXIgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIHZhciBjYW5BY2NlcHRSZWYgPSBVdGlscy5jYW5BY2NlcHRSZWYoQ29tcG9uZW50KTtcbiAgdmFyIGNvbnRyb2xsZWRQcm9wcyA9IE9iamVjdC5rZXlzKGNvbnRyb2xsZWRWYWx1ZXMpO1xuICB2YXIgUFJPUFNfVE9fT01JVCA9IGNvbnRyb2xsZWRQcm9wcy5tYXAoVXRpbHMuZGVmYXVsdEtleSk7XG4gICEoY2FuQWNjZXB0UmVmIHx8ICFtZXRob2RzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdbdW5jb250cm9sbGFibGVdIHN0YXRlbGVzcyBmdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBwYXNzIHRocm91Z2ggbWV0aG9kcyAnICsgJ2JlY2F1c2UgdGhleSBoYXZlIG5vIGFzc29jaWF0ZWQgaW5zdGFuY2VzLiBDaGVjayBjb21wb25lbnQ6ICcgKyBkaXNwbGF5TmFtZSArICcsICcgKyAnYXR0ZW1wdGluZyB0byBwYXNzIHRocm91Z2ggbWV0aG9kczogJyArIG1ldGhvZHMuam9pbignLCAnKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHZhciBVbmNvbnRyb2xsZWRDb21wb25lbnQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFVuY29udHJvbGxlZENvbXBvbmVudCgpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5oYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJOYW1lID0gY29udHJvbGxlZFZhbHVlc1twcm9wTmFtZV07XG5cbiAgICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wc1toYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgICAgICAgX3RoaXMuX25vdGlmeWluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIChfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzKVtoYW5kbGVyTmFtZV0uYXBwbHkoX3RoaXMkcHJvcHMsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKTtcblxuICAgICAgICAgICAgX3RoaXMuX25vdGlmeWluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMudW5tb3VudGVkKSBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWVzOiBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKG51bGwpLCB2YWx1ZXMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Byb3BOYW1lXSA9IHZhbHVlLCBfZXh0ZW5kczIpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVyc1toYW5kbGVyTmFtZV0gPSBoYW5kbGVDaGFuZ2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChtZXRob2RzLmxlbmd0aCkgX3RoaXMuYXR0YWNoUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICBfdGhpcy5pbm5lciA9IHJlZjtcbiAgICAgIH07XG4gICAgICB2YXIgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFsdWVzW2tleV0gPSBfdGhpcy5wcm9wc1tVdGlscy5kZWZhdWx0S2V5KGtleSldO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHByZXZQcm9wczoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgLy9sZXQgc2V0U3RhdGUgdHJpZ2dlciB0aGUgdXBkYXRlXG4gICAgICByZXR1cm4gIXRoaXMuX25vdGlmeWluZztcbiAgICB9O1xuXG4gICAgVW5jb250cm9sbGVkQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBfcmVmMi52YWx1ZXMsXG4gICAgICAgICAgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgdmFsdWVzOiBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKG51bGwpLCB2YWx1ZXMpLFxuICAgICAgICBwcmV2UHJvcHM6IHt9XG4gICAgICB9O1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBwcm9wIHN3aXRjaGVzIGZyb20gY29udHJvbGxlZCB0byBVbmNvbnRyb2xsZWRcbiAgICAgICAgICogcmVzZXQgaXRzIHZhbHVlIHRvIHRoZSBkZWZhdWx0VmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIG5leHRTdGF0ZS5wcmV2UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG5cbiAgICAgICAgaWYgKCFVdGlscy5pc1Byb3AocHJvcHMsIGtleSkgJiYgVXRpbHMuaXNQcm9wKHByZXZQcm9wcywga2V5KSkge1xuICAgICAgICAgIG5leHRTdGF0ZS52YWx1ZXNba2V5XSA9IHByb3BzW1V0aWxzLmRlZmF1bHRLZXkoa2V5KV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVubW91bnRlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczIuaW5uZXJSZWYsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgUFJPUFNfVE9fT01JVC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wXTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IF90aGlzMi5wcm9wc1twcm9wTmFtZV07XG4gICAgICAgIG5ld1Byb3BzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcFZhbHVlIDogX3RoaXMyLnN0YXRlLnZhbHVlc1twcm9wTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCBuZXdQcm9wcywgdGhpcy5oYW5kbGVycywge1xuICAgICAgICByZWY6IGlubmVyUmVmIHx8IHRoaXMuYXR0YWNoUmVmXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBVbmNvbnRyb2xsZWRDb21wb25lbnQ7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBwb2x5ZmlsbChVbmNvbnRyb2xsZWRDb21wb25lbnQpO1xuICBVbmNvbnRyb2xsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIlVuY29udHJvbGxlZChcIiArIGRpc3BsYXlOYW1lICsgXCIpXCI7XG4gIFVuY29udHJvbGxlZENvbXBvbmVudC5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7XG4gICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKCkge31cbiAgfSwgVXRpbHMudW5jb250cm9sbGVkUHJvcFR5cGVzKGNvbnRyb2xsZWRWYWx1ZXMsIGRpc3BsYXlOYW1lKSk7XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgVW5jb250cm9sbGVkQ29tcG9uZW50LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gJHByb3hpZWRNZXRob2QoKSB7XG4gICAgICB2YXIgX3RoaXMkaW5uZXI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkaW5uZXIgPSB0aGlzLmlubmVyKVttZXRob2RdLmFwcGx5KF90aGlzJGlubmVyLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IFVuY29udHJvbGxlZENvbXBvbmVudDtcblxuICBpZiAoUmVhY3QuZm9yd2FyZFJlZikge1xuICAgIFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVbmNvbnRyb2xsZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTI4XG4gICAgICAgIH0sXG4gICAgICAgIF9fc2VsZjogdGhpc1xuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIFdyYXBwZWRDb21wb25lbnQucHJvcFR5cGVzID0gVW5jb250cm9sbGVkQ29tcG9uZW50LnByb3BUeXBlcztcbiAgfVxuXG4gIFdyYXBwZWRDb21wb25lbnQuQ29udHJvbGxlZENvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgLyoqXG4gICAqIHVzZWZ1bCB3aGVuIHdyYXBwaW5nIGEgQ29tcG9uZW50IGFuZCB5b3Ugd2FudCB0byBjb250cm9sXG4gICAqIGV2ZXJ5dGhpbmdcbiAgICovXG5cbiAgV3JhcHBlZENvbXBvbmVudC5kZWZlckNvbnRyb2xUbyA9IGZ1bmN0aW9uIChuZXdDb21wb25lbnQsIGFkZGl0aW9ucywgbmV4dE1ldGhvZHMpIHtcbiAgICBpZiAoYWRkaXRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIGFkZGl0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB1bmNvbnRyb2xsYWJsZShuZXdDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb250cm9sbGVkVmFsdWVzLCBhZGRpdGlvbnMpLCBuZXh0TWV0aG9kcyk7XG4gIH07XG5cbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQ7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VVbmNvbnRyb2xsZWQsIHVzZVVuY29udHJvbGxlZFByb3AgfSBmcm9tICcuL2hvb2snO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmNvbnRyb2xsYWJsZSB9IGZyb20gJy4vdW5jb250cm9sbGFibGUnOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgfSkobm9kZUludGVyb3ApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7XG4gIGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5Db250ZXh0ID0gZXhwb3J0cy5hbGxWYWx1ZXMgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IGFsbFZhbHVlcyA9IG9iaiA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5cy5tYXAoayA9PiBvYmpba10pKS50aGVuKHZhbHVlcyA9PiB7XG4gICAgY29uc3QgbmV4dCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoaywgaSkgPT4ge1xuICAgICAgbmV4dFtrXSA9IHZhbHVlc1tpXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmFsbFZhbHVlcyA9IGFsbFZhbHVlcztcblxuY29uc3QgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5cblxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcblxudmFyIF9kZWZhdWx0ID0gKHtcbiAgaW1wb3J0cyxcbiAgY2hpbGRyZW5cbn0pID0+IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGltcG9ydHNcbn0sIGNoaWxkcmVuKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25UeXBlID0gJ2J1dHRvbicgfCAncmVzZXQnIHwgJ3N1Ym1pdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5jaG9yT3B0aW9ucyB7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJ1dHRvblByb3BzT3B0aW9ucyBleHRlbmRzIEFuY2hvck9wdGlvbnMge1xuICB0eXBlPzogQnV0dG9uVHlwZTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogUmVhY3QuRXZlbnRIYW5kbGVyPFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50PjtcbiAgdGFiSW5kZXg/OiBudW1iZXI7XG4gIHRhZ05hbWU/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaXZpYWxIcmVmKGhyZWY/OiBzdHJpbmcpIHtcbiAgcmV0dXJuICFocmVmIHx8IGhyZWYudHJpbSgpID09PSAnIyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJpYUJ1dHRvblByb3BzIHtcbiAgdHlwZT86IEJ1dHRvblR5cGUgfCB1bmRlZmluZWQ7XG4gIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICByb2xlPzogJ2J1dHRvbic7XG4gIHRhYkluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBocmVmPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB0YXJnZXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgJ2FyaWEtZGlzYWJsZWQnPzogdHJ1ZSB8IHVuZGVmaW5lZDtcbiAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gIG9uS2V5RG93bj86IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VCdXR0b25Qcm9wc01ldGFkYXRhIHtcbiAgdGFnTmFtZTogUmVhY3QuRWxlbWVudFR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCdXR0b25Qcm9wcyh7XG4gIHRhZ05hbWUsXG4gIGRpc2FibGVkLFxuICBocmVmLFxuICB0YXJnZXQsXG4gIHJlbCxcbiAgb25DbGljayxcbiAgdGFiSW5kZXggPSAwLFxuICB0eXBlLFxufTogVXNlQnV0dG9uUHJvcHNPcHRpb25zKTogW0FyaWFCdXR0b25Qcm9wcywgVXNlQnV0dG9uUHJvcHNNZXRhZGF0YV0ge1xuICBpZiAoIXRhZ05hbWUpIHtcbiAgICBpZiAoaHJlZiAhPSBudWxsIHx8IHRhcmdldCAhPSBudWxsIHx8IHJlbCAhPSBudWxsKSB7XG4gICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWdOYW1lID0gJ2J1dHRvbic7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0YTogVXNlQnV0dG9uUHJvcHNNZXRhZGF0YSA9IHsgdGFnTmFtZSB9O1xuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gW3sgdHlwZTogKHR5cGUgYXMgYW55KSB8fCAnYnV0dG9uJywgZGlzYWJsZWQgfSwgbWV0YV07XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgaXNUcml2aWFsSHJlZihocmVmKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQ2xpY2s/LihldmVudCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgIC8vIGV4cGxpY2l0bHkgdW5kZWZpbmVkIHNvIHRoYXQgaXQgb3ZlcnJpZGVzIHRoZSBwcm9wcyBkaXNhYmxlZCBpbiBhIHNwcmVhZFxuICAgICAgLy8gZS5nLiA8VGFnIHsuLi5wcm9wc30gey4uLmhvb2tQcm9wc30gLz5cbiAgICAgIGRpc2FibGVkOiB1bmRlZmluZWQsXG4gICAgICB0YWJJbmRleDogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0YWJJbmRleCxcbiAgICAgIGhyZWY6IHRhZ05hbWUgPT09ICdhJyAmJiBkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGhyZWYsXG4gICAgICB0YXJnZXQ6IHRhZ05hbWUgPT09ICdhJyA/IHRhcmdldCA6IHVuZGVmaW5lZCxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogIWRpc2FibGVkID8gdW5kZWZpbmVkIDogZGlzYWJsZWQsXG4gICAgICByZWw6IHRhZ05hbWUgPT09ICdhJyA/IHJlbCA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIH0sXG4gICAgbWV0YSxcbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQnV0dG9uUHJvcHMge1xuICAvKipcbiAgICogQ29udHJvbCB0aGUgdW5kZXJseWluZyByZW5kZXJlZCBlbGVtZW50IGRpcmVjdGx5IGJ5IHBhc3NpbmcgaW4gYSB2YWxpZFxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgYXM/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHMgfCB1bmRlZmluZWQ7XG5cbiAgLyoqIFRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgYnV0dG9uICovXG4gIGRpc2FibGVkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAvKiogT3B0aW9uYWxseSBzcGVjaWZ5IGFuIGhyZWYgdG8gcmVuZGVyIGEgYDxhPmAgdGFnIHN0eWxlZCBhcyBhIGJ1dHRvbiAqL1xuICBocmVmPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBBbmNob3IgdGFyZ2V0LCB3aGVuIHJlbmRlcmluZyBhbiBhbmNob3IgYXMgYSBidXR0b24gKi9cbiAgdGFyZ2V0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIHJlbD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIEJhc2VCdXR0b25Qcm9wcyxcbiAgICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2J1dHRvbic+IHt9XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIEJ1dHRvblByb3BzPihcbiAgKHsgYXM6IGFzUHJvcCwgZGlzYWJsZWQsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtidXR0b25Qcm9wcywgeyB0YWdOYW1lOiBDb21wb25lbnQgfV0gPSB1c2VCdXR0b25Qcm9wcyh7XG4gICAgICB0YWdOYW1lOiBhc1Byb3AsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4uYnV0dG9uUHJvcHN9IHJlZj17cmVmfSAvPjtcbiAgfSxcbik7XG5cbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJleHBvcnQgY29uc3QgQVRUUklCVVRFX1BSRUZJWCA9IGBkYXRhLXJyLXVpLWAgYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9QUkVGSVggPSBgcnJVaWAgYXMgY29uc3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXR0cjxUIGV4dGVuZHMgc3RyaW5nPihwcm9wZXJ0eTogVCkge1xuICByZXR1cm4gYCR7QVRUUklCVVRFX1BSRUZJWH0ke3Byb3BlcnR5fWAgYXMgY29uc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhUHJvcDxUIGV4dGVuZHMgc3RyaW5nPihwcm9wZXJ0eTogVCkge1xuICByZXR1cm4gYCR7UFJPUEVSVFlfUFJFRklYfSR7cHJvcGVydHl9YCBhcyBjb25zdDtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4vdXNlRXZlbnRDYWxsYmFjayc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHNwZWNpZmllZCBET00gZWxlbWVudFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIEBwYXJhbSBlbGVtZW50IFRoZSB0YXJnZXQgdG8gbGlzdGVuIGZvciBldmVudHMgb25cbiAqIEBwYXJhbSBldmVudCBUaGUgRE9NIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSBoYW5kbGVyIEFuIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSBjYXB0dXJlIFdoZXRoZXIgb3Igbm90IHRvIGxpc3RlbiBkdXJpbmcgdGhlIGNhcHR1cmUgZXZlbnQgcGhhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IHVzZUV2ZW50Q2FsbGJhY2sobGlzdGVuZXIpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YXJnZXQgPSB0eXBlb2YgZXZlbnRUYXJnZXQgPT09ICdmdW5jdGlvbicgPyBldmVudFRhcmdldCgpIDogZXZlbnRUYXJnZXQ7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgIH07XG4gIH0sIFtldmVudFRhcmdldF0pO1xufSIsImltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIG91dHNpZGUgZGlyZWN0bHkgdG8gdGhlIGBkb2N1bWVudGAsXG4gKiBieXBhc3NpbmcgdGhlIHJlYWN0IHN5bnRoZXRpYyBldmVudCBzeXN0ZW0uXG4gKlxuICogYGBgdHNcbiAqIHVzZUdsb2JhbExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gKiAgY29uc29sZS5sb2coZXZlbnQua2V5KVxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBldmVudCBUaGUgRE9NIGV2ZW50IG5hbWVcbiAqIEBwYXJhbSBoYW5kbGVyIEFuIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSBjYXB0dXJlIFdoZXRoZXIgb3Igbm90IHRvIGxpc3RlbiBkdXJpbmcgdGhlIGNhcHR1cmUgZXZlbnQgcGhhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2xvYmFsTGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgaWYgKGNhcHR1cmUgPT09IHZvaWQgMCkge1xuICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudFRhcmdldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnRUYXJnZXQsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbn0iLCJpbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAnZG9tLWhlbHBlcnMvYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB1c2VGb3JjZVVwZGF0ZSBmcm9tICdAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZSc7XG5pbXBvcnQgdXNlR2xvYmFsTGlzdGVuZXIgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlR2xvYmFsTGlzdGVuZXInO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBEcm9wZG93bkNvbnRleHQgZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuaW1wb3J0IERyb3Bkb3duTWVudSwge1xuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG59IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCBEcm9wZG93blRvZ2dsZSwge1xuICBEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuICBpc1JvbGVNZW51LFxufSBmcm9tICcuL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBEcm9wZG93bkl0ZW0sIHsgRHJvcGRvd25JdGVtUHJvcHMgfSBmcm9tICcuL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQgZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgeyBTZWxlY3RDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZGF0YUF0dHIgfSBmcm9tICcuL0RhdGFLZXknO1xuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSB7XG4gIERyb3Bkb3duTWVudVByb3BzLFxuICBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSxcbiAgVXNlRHJvcGRvd25NZW51T3B0aW9ucyxcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgRHJvcGRvd25JdGVtUHJvcHMsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5qZWN0ZWRQcm9wcyB7XG4gIG9uS2V5RG93bjogUmVhY3QuS2V5Ym9hcmRFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCB0eXBlIFRvZ2dsZUV2ZW50ID0gUmVhY3QuU3ludGhldGljRXZlbnQgfCBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudDtcblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVNZXRhZGF0YSB7XG4gIHNvdXJjZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvcmlnaW5hbEV2ZW50OiBUb2dnbGVFdmVudCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBQb3BwZXJKUyBwbGFjZW1lbnQgZm9yIHBvc2l0aW9uaW5nIHRoZSBEcm9wZG93biBtZW51IGluIHJlbGF0aW9uIHRvXG4gICAqIGl0cyBUb2dnbGUuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdib3R0b20tc3RhcnQnXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgdmlzaWJpbGl0eSBvZiB0aGUgRHJvcGRvd24uXG4gICAqL1xuICBkZWZhdWx0U2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBEcm9wZG93biBpcyB2aXNpYmxlLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uVG9nZ2xlXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGEgRHJvcGRvd25JdGVtIGhhcyBiZWVuIHNlbGVjdGVkLlxuICAgKi9cbiAgb25TZWxlY3Q/OiBTZWxlY3RDYWxsYmFjaztcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBEcm9wZG93biB3aXNoZXMgdG8gY2hhbmdlIHZpc2liaWxpdHkuIENhbGxlZCB3aXRoXG4gICAqIHRoZSByZXF1ZXN0ZWQgYHNob3dgIHZhbHVlLCB0aGUgRE9NIGV2ZW50LCBhbmQgdGhlIHNvdXJjZSB0aGF0IGZpcmVkIGl0OlxuICAgKiBgJ2NsaWNrJ2AsYCdrZXlkb3duJ2AsYCdyb290Q2xvc2UnYCwgb3IgYCdzZWxlY3QnYC5cbiAgICpcbiAgICogYGBgdHMgc3RhdGljXG4gICAqIGZ1bmN0aW9uKFxuICAgKiAgIG5leHRTaG93OiBib29sZWFuLFxuICAgKiAgIG1ldGE6IFRvZ2dsZU1ldGFkYXRhLFxuICAgKiApOiB2b2lkXG4gICAqIGBgYFxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIHNob3dcbiAgICovXG4gIG9uVG9nZ2xlPzogKG5leHRTaG93OiBib29sZWFuLCBtZXRhOiBUb2dnbGVNZXRhZGF0YSkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQSBjc3Mgc2VsZWN0b3Igc3RyaW5nIHRoYXQgd2lsbCByZXR1cm4gX19mb2N1c2FibGVfXyBtZW51IGl0ZW1zLlxuICAgKiBTZWxlY3RvcnMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBtZW51IGNvbXBvbmVudDpcbiAgICogZS5nLiBgID4gbGk6bm90KCcuZGlzYWJsZWQnKWBcbiAgICovXG4gIGl0ZW1TZWxlY3Rvcj86IHN0cmluZztcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGZvY3VzIGJlaGF2aW9yIGZvciB3aGVuIHRoZSBEcm9wZG93biBpcyBvcGVuZWQuIFNldCB0b1xuICAgKiBgdHJ1ZWAgdG8gYWx3YXlzIGZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW0sIGBrZXlib2FyZGAgdG8gZm9jdXMgb25seSB3aGVuXG4gICAqIG5hdmlnYXRpbmcgdmlhIHRoZSBrZXlib2FyZCwgb3IgYGZhbHNlYCB0byBkaXNhYmxlIGNvbXBsZXRlbHlcbiAgICpcbiAgICogVGhlIERlZmF1bHQgYmVoYXZpb3IgaXMgYGZhbHNlYCAqKnVubGVzcyoqIHRoZSBNZW51IGhhcyBhIGByb2xlPVwibWVudVwiYFxuICAgKiB3aGVyZSBpdCB3aWxsIGRlZmF1bHQgdG8gYGtleWJvYXJkYCB0byBtYXRjaCB0aGUgcmVjb21tZW5kZWQgW0FSSUEgQXV0aG9yaW5nXG4gICAqIHByYWN0aWNlc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI21lbnVidXR0b24pLlxuICAgKi9cbiAgZm9jdXNGaXJzdEl0ZW1PblNob3c/OiBib29sZWFuIHwgJ2tleWJvYXJkJztcblxuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgdGhlIHJvb3QgZHJvcGRvd24gZWxlbWVudC4gVGhlIGBwcm9wc2BcbiAgICogYXJndW1lbnQgc2hvdWxkIHNwcmVhZCB0aHJvdWdoIHRvIGFuIGVsZW1lbnQgY29udGFpbmluZyBfYm90aF8gdGhlXG4gICAqIG1lbnUgYW5kIHRvZ2dsZSBpbiBvcmRlciB0byBoYW5kbGUga2V5Ym9hcmQgZXZlbnRzIGZvciBmb2N1cyBtYW5hZ2VtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgb25LZXlEb3duOiAoU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAqICAgfSxcbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZldpdGhVcGRhdGUoKSB7XG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGF0dGFjaFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbGVtZW50OiBudWxsIHwgSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IGEgbWVudSBzZXQgdHJpZ2dlcnMgYW4gdXBkYXRlIGZvciBjb25zdW1lcnNcbiAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgfSxcbiAgICBbZm9yY2VVcGRhdGVdLFxuICApO1xuICByZXR1cm4gW3JlZiwgYXR0YWNoUmVmXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRHJvcGRvd24oe1xuICBkZWZhdWx0U2hvdyxcbiAgc2hvdzogcmF3U2hvdyxcbiAgb25TZWxlY3QsXG4gIG9uVG9nZ2xlOiByYXdPblRvZ2dsZSxcbiAgaXRlbVNlbGVjdG9yID0gYCogWyR7ZGF0YUF0dHIoJ2Ryb3Bkb3duLWl0ZW0nKX1dYCxcbiAgZm9jdXNGaXJzdEl0ZW1PblNob3csXG4gIHBsYWNlbWVudCA9ICdib3R0b20tc3RhcnQnLFxuICBjaGlsZHJlbixcbn06IERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgW3Nob3csIG9uVG9nZ2xlXSA9IHVzZVVuY29udHJvbGxlZFByb3AoXG4gICAgcmF3U2hvdyxcbiAgICBkZWZhdWx0U2hvdyEsXG4gICAgcmF3T25Ub2dnbGUsXG4gICk7XG5cbiAgLy8gV2UgdXNlIG5vcm1hbCByZWZzIGluc3RlYWQgb2YgdXNlQ2FsbGJhY2tSZWYgaW4gb3JkZXIgdG8gcG9wdWxhdGUgdGhlXG4gIC8vIHRoZSB2YWx1ZSBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLCBvdGhlcndpc2UgdGhlIGVmZmVjdCB0byBmb2N1cyB0aGUgZWxlbWVudFxuICAvLyBtYXkgcnVuIGJlZm9yZSB0aGUgc3RhdGUgdmFsdWUgaXMgc2V0XG4gIGNvbnN0IFttZW51UmVmLCBzZXRNZW51XSA9IHVzZVJlZldpdGhVcGRhdGUoKTtcbiAgY29uc3QgbWVudUVsZW1lbnQgPSBtZW51UmVmLmN1cnJlbnQ7XG5cbiAgY29uc3QgW3RvZ2dsZVJlZiwgc2V0VG9nZ2xlXSA9IHVzZVJlZldpdGhVcGRhdGUoKTtcbiAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IHRvZ2dsZVJlZi5jdXJyZW50O1xuXG4gIGNvbnN0IGxhc3RTaG93ID0gdXNlUHJldmlvdXMoc2hvdyk7XG4gIGNvbnN0IGxhc3RTb3VyY2VFdmVudCA9IHVzZVJlZjxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZm9jdXNJbkRyb3Bkb3duID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgb25TZWxlY3RDdHggPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcblxuICBjb25zdCB0b2dnbGUgPSB1c2VDYWxsYmFjayhcbiAgICAoXG4gICAgICBuZXh0U2hvdzogYm9vbGVhbixcbiAgICAgIGV2ZW50OiBUb2dnbGVFdmVudCB8IHVuZGVmaW5lZCxcbiAgICAgIHNvdXJjZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gZXZlbnQ/LnR5cGUsXG4gICAgKSA9PiB7XG4gICAgICBvblRvZ2dsZShuZXh0U2hvdywgeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgc291cmNlIH0pO1xuICAgIH0sXG4gICAgW29uVG9nZ2xlXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSB1c2VFdmVudENhbGxiYWNrKFxuICAgIChrZXk6IHN0cmluZyB8IG51bGwsIGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgb25TZWxlY3Q/LihrZXksIGV2ZW50KTtcbiAgICAgIHRvZ2dsZShmYWxzZSwgZXZlbnQsICdzZWxlY3QnKTtcblxuICAgICAgaWYgKCFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIG9uU2VsZWN0Q3R4Py4oa2V5LCBldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdG9nZ2xlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgc2hvdyxcbiAgICAgIG1lbnVFbGVtZW50LFxuICAgICAgdG9nZ2xlRWxlbWVudCxcbiAgICAgIHNldE1lbnUsXG4gICAgICBzZXRUb2dnbGUsXG4gICAgfSksXG4gICAgW3RvZ2dsZSwgcGxhY2VtZW50LCBzaG93LCBtZW51RWxlbWVudCwgdG9nZ2xlRWxlbWVudCwgc2V0TWVudSwgc2V0VG9nZ2xlXSxcbiAgKTtcblxuICBpZiAobWVudUVsZW1lbnQgJiYgbGFzdFNob3cgJiYgIXNob3cpIHtcbiAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IG1lbnVFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3QgZm9jdXNUb2dnbGUgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodG9nZ2xlRWxlbWVudCAmJiB0b2dnbGVFbGVtZW50LmZvY3VzKSB7XG4gICAgICB0b2dnbGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYXliZUZvY3VzRmlyc3QgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0eXBlID0gbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQ7XG4gICAgbGV0IGZvY3VzVHlwZSA9IGZvY3VzRmlyc3RJdGVtT25TaG93O1xuXG4gICAgaWYgKGZvY3VzVHlwZSA9PSBudWxsKSB7XG4gICAgICBmb2N1c1R5cGUgPVxuICAgICAgICBtZW51UmVmLmN1cnJlbnQgJiYgaXNSb2xlTWVudShtZW51UmVmLmN1cnJlbnQpID8gJ2tleWJvYXJkJyA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGZvY3VzVHlwZSA9PT0gZmFsc2UgfHxcbiAgICAgIChmb2N1c1R5cGUgPT09ICdrZXlib2FyZCcgJiYgIS9ea2V5LiskLy50ZXN0KHR5cGUhKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdCA9IHFzYShtZW51UmVmLmN1cnJlbnQhLCBpdGVtU2VsZWN0b3IpWzBdO1xuICAgIGlmIChmaXJzdCAmJiBmaXJzdC5mb2N1cykgZmlyc3QuZm9jdXMoKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvdykgbWF5YmVGb2N1c0ZpcnN0KCk7XG4gICAgZWxzZSBpZiAoZm9jdXNJbkRyb3Bkb3duLmN1cnJlbnQpIHtcbiAgICAgIGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBmb2N1c1RvZ2dsZSgpO1xuICAgIH1cbiAgICAvLyBvbmx5IGBzaG93YCBzaG91bGQgYmUgY2hhbmdpbmdcbiAgfSwgW3Nob3csIGZvY3VzSW5Ecm9wZG93biwgZm9jdXNUb2dnbGUsIG1heWJlRm9jdXNGaXJzdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBudWxsO1xuICB9KTtcblxuICBjb25zdCBnZXROZXh0Rm9jdXNlZENoaWxkID0gKGN1cnJlbnQ6IEhUTUxFbGVtZW50LCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgIGlmICghbWVudVJlZi5jdXJyZW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGl0ZW1zID0gcXNhKG1lbnVSZWYuY3VycmVudCwgaXRlbVNlbGVjdG9yKTtcblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoY3VycmVudCkgKyBvZmZzZXQ7XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgaXRlbXMubGVuZ3RoKSk7XG5cbiAgICByZXR1cm4gaXRlbXNbaW5kZXhdO1xuICB9O1xuXG4gIHVzZUdsb2JhbExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0IGZyb21NZW51ID0gbWVudVJlZi5jdXJyZW50Py5jb250YWlucyh0YXJnZXQpO1xuICAgIGNvbnN0IGZyb21Ub2dnbGUgPSB0b2dnbGVSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KTtcblxuICAgIC8vIFNlY29uZCBvbmx5IHRvIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzhjZmJmNjkzM2I4YTAxNDZhYzNmYmMzNjlmMTllNTIwYmQxZWJkYWMvanMvc3JjL2Ryb3Bkb3duLmpzI0w0MDBcbiAgICAvLyBpbiBpbnNjcnV0YWJpbGl0eVxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KHRhcmdldC50YWdOYW1lKTtcbiAgICBpZiAoaXNJbnB1dCAmJiAoa2V5ID09PSAnICcgfHwgKGtleSAhPT0gJ0VzY2FwZScgJiYgZnJvbU1lbnUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZnJvbU1lbnUgJiYgIWZyb21Ub2dnbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnVGFiJyAmJiAoIW1lbnVSZWYuY3VycmVudCB8fCAhc2hvdykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsYXN0U291cmNlRXZlbnQuY3VycmVudCA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3QgbWV0YSA9IHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHNvdXJjZTogZXZlbnQudHlwZSB9O1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzoge1xuICAgICAgICBjb25zdCBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIC0xKTtcbiAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5mb2N1cykgbmV4dC5mb2N1cygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghc2hvdykge1xuICAgICAgICAgIG9uVG9nZ2xlKHRydWUsIG1ldGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBnZXROZXh0Rm9jdXNlZENoaWxkKHRhcmdldCwgMSk7XG4gICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5mb2N1cykgbmV4dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIC8vIG9uIGtleWRvd24gdGhlIHRhcmdldCBpcyB0aGUgZWxlbWVudCBiZWluZyB0YWJiZWQgRlJPTSwgd2UgbmVlZCB0aGF0XG4gICAgICAgIC8vIHRvIGtub3cgaWYgdGhpcyBldmVudCBpcyByZWxldmFudCB0byB0aGlzIGRyb3Bkb3duIChlLmcuIGluIHRoaXMgbWVudSkuXG4gICAgICAgIC8vIE9uIGBrZXl1cGAgdGhlIHRhcmdldCBpcyB0aGUgZWxlbWVudCBiZWluZyB0YWdnZWQgVE8gd2hpY2ggd2UgdXNlIHRvIGNoZWNrXG4gICAgICAgIC8vIGlmIGZvY3VzIGhhcyBsZWZ0IHRoZSBtZW51XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAgICdrZXl1cCcsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKGUua2V5ID09PSAnVGFiJyAmJiAhZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAgICFtZW51UmVmLmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG9uVG9nZ2xlKGZhbHNlLCBtZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uVG9nZ2xlKGZhbHNlLCBtZXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hhbmRsZVNlbGVjdH0+XG4gICAgICA8RHJvcGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ecm9wZG93bkNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuRHJvcGRvd24uZGlzcGxheU5hbWUgPSAnRHJvcGRvd24nO1xuXG5Ecm9wZG93bi5NZW51ID0gRHJvcGRvd25NZW51O1xuRHJvcGRvd24uVG9nZ2xlID0gRHJvcGRvd25Ub2dnbGU7XG5Ecm9wZG93bi5JdGVtID0gRHJvcGRvd25JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkNvbnRleHRWYWx1ZSA9IHtcbiAgdG9nZ2xlOiAobmV4dFNob3c6IGJvb2xlYW4sIGV2ZW50PzogUmVhY3QuU3ludGhldGljRXZlbnQgfCBFdmVudCkgPT4gdm9pZDtcbiAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgdG9nZ2xlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBzZXRNZW51OiAocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQ7XG4gIHNldFRvZ2dsZTogKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkO1xuXG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbn07XG5cbmNvbnN0IERyb3Bkb3duQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8RHJvcGRvd25Db250ZXh0VmFsdWUgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25Db250ZXh0O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcblxuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcblxuaW1wb3J0IHsgRXZlbnRLZXksIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bkl0ZW1Qcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSGlnaGxpZ2h0IHRoZSBtZW51IGl0ZW0gYXMgYWN0aXZlLlxuICAgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgbWVudSBpdGVtLCBtYWtpbmcgaXQgdW5zZWxlY3RhYmxlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBWYWx1ZSBwYXNzZWQgdG8gdGhlIGBvblNlbGVjdGAgaGFuZGxlciwgdXNlZnVsIGZvciBpZGVudGlmeWluZyB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKi9cbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogSFRNTCBgaHJlZmAgYXR0cmlidXRlIGNvcnJlc3BvbmRpbmcgdG8gYGEuaHJlZmAuXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBAZGVmYXVsdCBCdXR0b24gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbn07XG5cbmludGVyZmFjZSBVc2VEcm9wZG93bkl0ZW1PcHRpb25zIHtcbiAga2V5PzogRXZlbnRLZXkgfCBudWxsO1xuICBocmVmPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkcm9wZG93biBpdGVtLiBSZXR1cm5zIGEgc2V0IG9mIHByb3BzIGZvciB0aGUgZHJvcGRvd24gaXRlbSBjb21wb25lbnRcbiAqIGluY2x1ZGluZyBhbiBgb25DbGlja2AgaGFuZGxlciB0aGF0IHByZXZlbnRzIHNlbGVjdGlvbiB3aGVuIHRoZSBpdGVtIGlzIGRpc2FibGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93bkl0ZW0oe1xuICBrZXksXG4gIGhyZWYsXG4gIGFjdGl2ZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG59OiBVc2VEcm9wZG93bkl0ZW1PcHRpb25zKSB7XG4gIGNvbnN0IG9uU2VsZWN0Q3R4ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXG4gIGNvbnN0IHsgYWN0aXZlS2V5IH0gPSBuYXZDb250ZXh0IHx8IHt9O1xuICBjb25zdCBldmVudEtleSA9IG1ha2VFdmVudEtleShrZXksIGhyZWYpO1xuXG4gIGFjdGl2ZSA9XG4gICAgYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGxcbiAgICAgID8gbWFrZUV2ZW50S2V5KGFjdGl2ZUtleSkgPT09IGV2ZW50S2V5XG4gICAgICA6IGFjdGl2ZTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBvbkNsaWNrPy4oZXZlbnQpO1xuXG4gICAgaWYgKG9uU2VsZWN0Q3R4ICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICBvblNlbGVjdEN0eChldmVudEtleSwgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgdW5kZWZpbmVkLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmUsXG4gICAgICBbZGF0YUF0dHIoJ2Ryb3Bkb3duLWl0ZW0nKV06ICcnLFxuICAgIH0sXG4gICAgeyBhY3RpdmUgfSxcbiAgXSBhcyBjb25zdDtcbn1cblxuY29uc3QgRHJvcGRvd25JdGVtOiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDxcbiAgdHlwZW9mIEJ1dHRvbixcbiAgRHJvcGRvd25JdGVtUHJvcHNcbj4gPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgZXZlbnRLZXksXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBhY3RpdmUsXG4gICAgICBhczogQ29tcG9uZW50ID0gQnV0dG9uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9OiBEcm9wZG93bkl0ZW1Qcm9wcyxcbiAgICByZWYsXG4gICkgPT4ge1xuICAgIGNvbnN0IFtkcm9wZG93bkl0ZW1Qcm9wc10gPSB1c2VEcm9wZG93bkl0ZW0oe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhyZWY6IHByb3BzLmhyZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBhY3RpdmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gXCJUUzI2MDQ6IEpTWCBlbGVtZW50IHR5cGUgJ0NvbXBvbmVudCcgZG9lcyBub3QgaGF2ZSBhbnkgY29uc3RydWN0IG9yIGNhbGwgc2lnbmF0dXJlcy5cIlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IHJlZj17cmVmfSB7Li4uZHJvcGRvd25JdGVtUHJvcHN9IC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbkRyb3Bkb3duSXRlbS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bkl0ZW0nO1xuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCBEcm9wZG93bkNvbnRleHQsIHsgRHJvcGRvd25Db250ZXh0VmFsdWUgfSBmcm9tICcuL0Ryb3Bkb3duQ29udGV4dCc7XG5pbXBvcnQgdXNlUG9wcGVyLCB7XG4gIFVzZVBvcHBlck9wdGlvbnMsXG4gIFBsYWNlbWVudCxcbiAgT2Zmc2V0LFxuICBVc2VQb3BwZXJTdGF0ZSxcbn0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSwgeyBSb290Q2xvc2VPcHRpb25zIH0gZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcgZnJvbSAnLi9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VEcm9wZG93bk1lbnVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIFBvcHBlci5qcyBgZmxpcGAgbW9kaWZpZXIsIGFsbG93aW5nIHRoZSBEcm9wZG93biB0b1xuICAgKiBhdXRvbWF0aWNhbGx5IGFkanVzdCBpdCdzIHBsYWNlbWVudCBpbiBjYXNlIG9mIG92ZXJsYXAgd2l0aCB0aGUgdmlld3BvcnQgb3JcbiAgICogdG9nZ2xlLiBTZWUgdGhlIFtmbGlwIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyL21vZGlmaWVycy9mbGlwLylcbiAgICogZm9yIG1vcmUgaW5mby5cbiAgICovXG4gIGZsaXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDb250cm9scyB0aGUgdmlzaWJsZSBzdGF0ZSBvZiB0aGUgbWVudSwgZ2VuZXJhbGx5IHRoaXMgaXMgcHJvdmlkZWQgYnkgdGhlXG4gICAqIHBhcmVudCBgRHJvcGRvd25gIGNvbXBvbmVudCwgYnV0IG1heSBhbHNvIGJlIHNwZWNpZmllZCBhcyBhIHByb3AgZGlyZWN0bHkuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVXNlIHRoZSBgZml4ZWRgIHBvc2l0aW9uaW5nIHN0cmF0ZWd5IGluIFBvcHBlci4gVGhpcyBpcyB1c2VkIGlmIHRoZVxuICAgKiBkcm9wZG93biB0b2dnbGUgaXMgaW4gYSBmaXhlZCBjb250YWluZXIuXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBQb3BwZXJKUyBwbGFjZW1lbnQgZm9yIHBvc2l0aW9uaW5nIHRoZSBEcm9wZG93biBtZW51IGluIHJlbGF0aW9uIHRvIGl0J3MgVG9nZ2xlLlxuICAgKiBHZW5lcmFsbHkgdGhpcyBpcyBwcm92aWRlZCBieSB0aGUgcGFyZW50IGBEcm9wZG93bmAgY29tcG9uZW50LFxuICAgKiBidXQgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGFzIGEgcHJvcCBkaXJlY3RseS5cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gdXNlIFBvcHBlciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUuXG4gICAqL1xuICB1c2VQb3BwZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBhZGQgc2Nyb2xsIGFuZCByZXNpemUgbGlzdGVuZXJzIHRvIHVwZGF0ZSBtZW51IHBvc2l0aW9uLlxuICAgKlxuICAgKiBTZWUgdGhlIFtldmVudCBsaXN0ZW5lcnMgZG9jc10oaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjIvbW9kaWZpZXJzL2V2ZW50LWxpc3RlbmVycy8pXG4gICAqIGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBlbmFibGVFdmVudExpc3RlbmVycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9mZnNldCBvZiB0aGUgZHJvcGRvd24gbWVudSBmcm9tIHRoZSBkcm9wZG93biB0b2dnbGUuIFNlZSB0aGVcbiAgICogW29mZnNldCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi9tb2RpZmllcnMvb2Zmc2V0LykgZm9yIG1vcmUgaW5mby5cbiAgICovXG4gIG9mZnNldD86IE9mZnNldDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgZXZlbnQgdXNlZCBieSBSb290Q2xvc2VXcmFwcGVyLlxuICAgKi9cbiAgcm9vdENsb3NlRXZlbnQ/OiBSb290Q2xvc2VPcHRpb25zWydjbGlja1RyaWdnZXInXTtcblxuICAvKipcbiAgICogQSBzZXQgb2YgcG9wcGVyIG9wdGlvbnMgYW5kIHByb3BzIHBhc3NlZCBkaXJlY3RseSB0byByZWFjdC1wb3BwZXIncyBQb3BwZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcG9wcGVyQ29uZmlnPzogT21pdDxVc2VQb3BwZXJPcHRpb25zLCAnZW5hYmxlZCcgfCAncGxhY2VtZW50Jz47XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJEcm9wZG93bk1lbnVQcm9wcyA9IFJlY29yZDxzdHJpbmcsIGFueT4gJiB7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+O1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gICdhcmlhLWxhYmVsbGVkYnknPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlckRyb3Bkb3duTWVudUFycm93UHJvcHMgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICBoYXNTaG93bjogYm9vbGVhbjtcbiAgdG9nZ2xlPzogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3RvZ2dsZSddO1xuICBwb3BwZXI6IFVzZVBvcHBlclN0YXRlIHwgbnVsbDtcbiAgYXJyb3dQcm9wczogUGFydGlhbDxVc2VyRHJvcGRvd25NZW51QXJyb3dQcm9wcz47XG59XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHt9O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZmxpcCBBdXRvbWF0aWNhbGx5IGFkanVzdCB0aGUgbWVudSBgZHJvcGAgcG9zaXRpb24gYmFzZWQgb24gdmlld3BvcnQgZWRnZSBkZXRlY3Rpb25cbiAqIEBwYXJhbSB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9ucy5vZmZzZXQgRGVmaW5lIGFuIG9mZnNldCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBNZW51IGFuZCB0aGUgVG9nZ2xlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuc2hvdyBEaXNwbGF5IHRoZSBtZW51IG1hbnVhbGx5LCBpZ25vcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgYERyb3Bkb3duYFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnVzZVBvcHBlciBvcHQgaW4vb3V0IG9mIHVzaW5nIFBvcHBlckpTIHRvIHBvc2l0aW9uIG1lbnVzLiBXaGVuIGRpc2FibGVkIHlvdSBtdXN0IHBvc2l0aW9uIGl0IHlvdXJzZWxmLlxuICogQHBhcmFtIHtzdHJpbmd9ICBvcHRpb25zLnJvb3RDbG9zZUV2ZW50IFRoZSBwb2ludGVyIGV2ZW50IHRvIGxpc3RlbiBmb3Igd2hlbiBkZXRlcm1pbmluZyBcImNsaWNrcyBvdXRzaWRlXCIgdGhlIG1lbnUgZm9yIHRyaWdnZXJpbmcgYSBjbG9zZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucy5wb3BwZXJDb25maWcgT3B0aW9ucyBwYXNzZWQgdG8gdGhlIFtgdXNlUG9wcGVyYF0oL2FwaS91c2VQb3BwZXIpIGhvb2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93bk1lbnUob3B0aW9uczogVXNlRHJvcGRvd25NZW51T3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KERyb3Bkb3duQ29udGV4dCk7XG5cbiAgY29uc3QgW2Fycm93RWxlbWVudCwgYXR0YWNoQXJyb3dSZWZdID0gdXNlQ2FsbGJhY2tSZWY8RWxlbWVudD4oKTtcblxuICBjb25zdCBoYXNTaG93blJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIGZsaXAsXG4gICAgb2Zmc2V0LFxuICAgIHJvb3RDbG9zZUV2ZW50LFxuICAgIGZpeGVkID0gZmFsc2UsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRPdmVycmlkZSxcbiAgICBwb3BwZXJDb25maWcgPSB7fSxcbiAgICBlbmFibGVFdmVudExpc3RlbmVycyA9IHRydWUsXG4gICAgdXNlUG9wcGVyOiBzaG91bGRVc2VQb3BwZXIgPSAhIWNvbnRleHQsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHNob3cgPSBjb250ZXh0Py5zaG93ID09IG51bGwgPyAhIW9wdGlvbnMuc2hvdyA6IGNvbnRleHQuc2hvdztcblxuICBpZiAoc2hvdyAmJiAhaGFzU2hvd25SZWYuY3VycmVudCkge1xuICAgIGhhc1Nob3duUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQgfCBFdmVudCkgPT4ge1xuICAgIGNvbnRleHQ/LnRvZ2dsZShmYWxzZSwgZSk7XG4gIH07XG5cbiAgY29uc3QgeyBwbGFjZW1lbnQsIHNldE1lbnUsIG1lbnVFbGVtZW50LCB0b2dnbGVFbGVtZW50IH0gPSBjb250ZXh0IHx8IHt9O1xuXG4gIGNvbnN0IHBvcHBlciA9IHVzZVBvcHBlcihcbiAgICB0b2dnbGVFbGVtZW50LFxuICAgIG1lbnVFbGVtZW50LFxuICAgIG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcoe1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRPdmVycmlkZSB8fCBwbGFjZW1lbnQgfHwgJ2JvdHRvbS1zdGFydCcsXG4gICAgICBlbmFibGVkOiBzaG91bGRVc2VQb3BwZXIsXG4gICAgICBlbmFibGVFdmVudHM6IGVuYWJsZUV2ZW50TGlzdGVuZXJzID09IG51bGwgPyBzaG93IDogZW5hYmxlRXZlbnRMaXN0ZW5lcnMsXG4gICAgICBvZmZzZXQsXG4gICAgICBmbGlwLFxuICAgICAgZml4ZWQsXG4gICAgICBhcnJvd0VsZW1lbnQsXG4gICAgICBwb3BwZXJDb25maWcsXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgbWVudVByb3BzOiBVc2VyRHJvcGRvd25NZW51UHJvcHMgPSB7XG4gICAgcmVmOiBzZXRNZW51IHx8IG5vb3AsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRvZ2dsZUVsZW1lbnQ/LmlkLFxuICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5wb3BwZXIgYXMgYW55LFxuICB9O1xuXG4gIGNvbnN0IG1ldGFkYXRhOiBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSA9IHtcbiAgICBzaG93LFxuICAgIHBsYWNlbWVudCxcbiAgICBoYXNTaG93bjogaGFzU2hvd25SZWYuY3VycmVudCxcbiAgICB0b2dnbGU6IGNvbnRleHQ/LnRvZ2dsZSxcbiAgICBwb3BwZXI6IHNob3VsZFVzZVBvcHBlciA/IHBvcHBlciA6IG51bGwsXG4gICAgYXJyb3dQcm9wczogc2hvdWxkVXNlUG9wcGVyXG4gICAgICA/IHtcbiAgICAgICAgICByZWY6IGF0dGFjaEFycm93UmVmLFxuICAgICAgICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLmFycm93LFxuICAgICAgICAgIHN0eWxlOiBwb3BwZXIuc3R5bGVzLmFycm93IGFzIGFueSxcbiAgICAgICAgfVxuICAgICAgOiB7fSxcbiAgfTtcblxuICB1c2VSb290Q2xvc2UobWVudUVsZW1lbnQsIGhhbmRsZUNsb3NlLCB7XG4gICAgY2xpY2tUcmlnZ2VyOiByb290Q2xvc2VFdmVudCxcbiAgICBkaXNhYmxlZDogIXNob3csXG4gIH0pO1xuXG4gIHJldHVybiBbbWVudVByb3BzLCBtZXRhZGF0YV0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlUG9wcGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bk1lbnVQcm9wcyBleHRlbmRzIFVzZURyb3Bkb3duTWVudU9wdGlvbnMge1xuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYSBNZW51IGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBiZSBzcHJlYWQgdGhyb3VnaCB0byAqKmEgY29tcG9uZW50IHRoYXQgY2FuIGFjY2VwdCBhIHJlZioqLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIGNsb3NlOiAoP1N5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgKiAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBmb3JjZVVwZGF0ZTogKCkgPT4gdm9pZCxcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgICAgYXJpYS1sYWJlbGxlZGJ5OiA/c3RyaW5nXG4gICAqICAgfSxcbiAgICogICBhcnJvd1Byb3BzOiB7XG4gICAqICAgICByZWY6ICg/SFRNTEVsZW1lbnQpID0+IHZvaWQsXG4gICAqICAgICBzdHlsZTogeyBbc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0sXG4gICAqICAgfSxcbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IFVzZXJEcm9wZG93bk1lbnVQcm9wcyxcbiAgICBtZXRhOiBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLk1lbnU+YCBmcm9tIGBEcm9wZG93bmAuXG4gKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duTWVudVxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGNoaWxkcmVuLCAuLi5vcHRpb25zIH06IERyb3Bkb3duTWVudVByb3BzKSB7XG4gIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VEcm9wZG93bk1lbnUob3B0aW9ucyk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHByb3BzLCBtZXRhKX08Lz47XG59XG5cbkRyb3Bkb3duTWVudS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bk1lbnUnO1xuXG5Ecm9wZG93bk1lbnUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4vKiogQGNvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25NZW51O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTU1JTYWZlSWQgfSBmcm9tICcuL3Nzcic7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0LCB7IERyb3Bkb3duQ29udGV4dFZhbHVlIH0gZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgaXNSb2xlTWVudSA9IChlbDogSFRNTEVsZW1lbnQpID0+XG4gIGVsLmdldEF0dHJpYnV0ZSgncm9sZScpPy50b0xvd2VyQ2FzZSgpID09PSAnbWVudSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25Ub2dnbGVQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIHJlZjogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3NldFRvZ2dsZSddO1xuICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcbiAgJ2FyaWEtZXhwYW5kZWQnOiBib29sZWFuO1xuICAnYXJpYS1oYXNwb3B1cCc/OiB0cnVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEge1xuICBzaG93OiBEcm9wZG93bkNvbnRleHRWYWx1ZVsnc2hvdyddO1xuICB0b2dnbGU6IERyb3Bkb3duQ29udGV4dFZhbHVlWyd0b2dnbGUnXTtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vKipcbiAqIFdpcmVzIHVwIERyb3Bkb3duIHRvZ2dsZSBmdW5jdGlvbmFsaXR5LCByZXR1cm5pbmcgYSBzZXQgYSBwcm9wcyB0byBhdHRhY2hcbiAqIHRvIHRoZSBlbGVtZW50IHRoYXQgZnVuY3Rpb25zIGFzIHRoZSBkcm9wZG93biB0b2dnbGUgKGdlbmVyYWxseSBhIGJ1dHRvbikuXG4gKlxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93blRvZ2dsZSgpOiBbXG4gIFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG5dIHtcbiAgY29uc3QgaWQgPSB1c2VTU1JTYWZlSWQoKTtcbiAgY29uc3QgeyBzaG93ID0gZmFsc2UsIHRvZ2dsZSA9IG5vb3AsIHNldFRvZ2dsZSwgbWVudUVsZW1lbnQgfSA9XG4gICAgdXNlQ29udGV4dChEcm9wZG93bkNvbnRleHQpIHx8IHt9O1xuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICB0b2dnbGUoIXNob3csIGUpO1xuICAgIH0sXG4gICAgW3Nob3csIHRvZ2dsZV0sXG4gICk7XG5cbiAgY29uc3QgcHJvcHM6IFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMgPSB7XG4gICAgaWQsXG4gICAgcmVmOiBzZXRUb2dnbGUgfHwgbm9vcCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAnYXJpYS1leHBhbmRlZCc6ICEhc2hvdyxcbiAgfTtcblxuICAvLyBUaGlzIGlzIG1heWJlIGJldHRlciBkb3duIGluIGFuIGVmZmVjdCwgYnV0XG4gIC8vIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXBkYXRlIGFueXdheSB3aGVuIHRoZSBtZW51IGVsZW1lbnRcbiAgLy8gaXMgc2V0IHNvIG1pZ2h0IHJldHVybiBuZXcgcHJvcHMuXG4gIGlmIChtZW51RWxlbWVudCAmJiBpc1JvbGVNZW51KG1lbnVFbGVtZW50KSkge1xuICAgIHByb3BzWydhcmlhLWhhc3BvcHVwJ10gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIFtwcm9wcywgeyBzaG93LCB0b2dnbGUgfV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Ub2dnbGVQcm9wcyB7XG4gIC8qKlxuICAgKiBBIHJlbmRlciBwcm9wIHRoYXQgcmV0dXJucyBhIFRvZ2dsZSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi4gVXNlXG4gICAqIHRoZSBgb25Ub2dnbGVgIGFyZ3VtZW50IHRvIHRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZFxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBwcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgYXJpYS1oYXNwb3B1cDogdHJ1ZVxuICAgKiAgICAgYXJpYS1leHBhbmRlZDogYm9vbGVhblxuICAgKiAgIH0sXG4gICAqICAgbWV0YToge1xuICAgKiAgICAgc2hvdzogYm9vbGVhbixcbiAgICogICAgIHRvZ2dsZTogKHNob3c6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAqICAgfVxuICAgKiB9KSA9PiBSZWFjdC5FbGVtZW50fVxuICAgKi9cbiAgY2hpbGRyZW46IChcbiAgICBwcm9wczogVXNlRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgICBtZXRhOiBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuICApID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuLyoqXG4gKiBBbHNvIGV4cG9ydGVkIGFzIGA8RHJvcGRvd24uVG9nZ2xlPmAgZnJvbSBgRHJvcGRvd25gLlxuICpcbiAqIEBkaXNwbGF5TmFtZSBEcm9wZG93blRvZ2dsZVxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duVG9nZ2xlKHsgY2hpbGRyZW4gfTogRHJvcGRvd25Ub2dnbGVQcm9wcykge1xuICBjb25zdCBbcHJvcHMsIG1ldGFdID0gdXNlRHJvcGRvd25Ub2dnbGUoKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW4ocHJvcHMsIG1ldGEpfTwvPjtcbn1cblxuRHJvcGRvd25Ub2dnbGUuZGlzcGxheU5hbWUgPSAnRHJvcGRvd25Ub2dnbGUnO1xuXG4vKiogQGNvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25Ub2dnbGU7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFdmVudEtleSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgTmF2Q29udGV4dFR5cGUge1xuICByb2xlPzogc3RyaW5nOyAvLyB1c2VkIGJ5IE5hdkl0ZW0gdG8gZGV0ZXJtaW5lIGl0J3Mgcm9sZVxuICBhY3RpdmVLZXk6IEV2ZW50S2V5IHwgbnVsbDtcbiAgZ2V0Q29udHJvbGxlZElkOiAoa2V5OiBFdmVudEtleSB8IG51bGwpID0+IHN0cmluZztcbiAgZ2V0Q29udHJvbGxlcklkOiAoa2V5OiBFdmVudEtleSB8IG51bGwpID0+IHN0cmluZztcbn1cblxuY29uc3QgTmF2Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TmF2Q29udGV4dFR5cGUgfCBudWxsPihudWxsKTtcbk5hdkNvbnRleHQuZGlzcGxheU5hbWUgPSAnTmF2Q29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRleHQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3RDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBTZWxlY3RhYmxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8U2VsZWN0Q2FsbGJhY2sgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGNvbnN0IG1ha2VFdmVudEtleSA9IChcbiAgZXZlbnRLZXk/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsLFxuICBocmVmOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZXZlbnRLZXkgIT0gbnVsbCkgcmV0dXJuIFN0cmluZyhldmVudEtleSk7XG4gIHJldHVybiBocmVmIHx8IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RhYmxlQ29udGV4dDtcbiIsImltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGl2ZWx5IGZvY3VzZWQgZWxlbWVudCBzYWZlbHkuXG4gKlxuICogQHBhcmFtIGRvYyB0aGUgZG9jdW1lbnQgdG8gY2hlY2tcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmVFbGVtZW50KGRvYykge1xuICBpZiAoZG9jID09PSB2b2lkIDApIHtcbiAgICBkb2MgPSBvd25lckRvY3VtZW50KCk7XG4gIH1cblxuICAvLyBTdXBwb3J0OiBJRSA5IG9ubHlcbiAgLy8gSUU5IHRocm93cyBhbiBcIlVuc3BlY2lmaWVkIGVycm9yXCIgYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgZnJvbSBhbiA8aWZyYW1lPlxuICB0cnkge1xuICAgIHZhciBhY3RpdmUgPSBkb2MuYWN0aXZlRWxlbWVudDsgLy8gSUUxMSByZXR1cm5zIGEgc2VlbWluZ2x5IGVtcHR5IG9iamVjdCBpbiBzb21lIGNhc2VzIHdoZW4gYWNjZXNzaW5nXG4gICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBmcm9tIGFuIDxpZnJhbWU+XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhYWN0aXZlLm5vZGVOYW1lKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYWN0aXZlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLyogaWUgdGhyb3dzIGlmIG5vIGFjdGl2ZSBlbGVtZW50ICovXG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmVmIHRoYXQgaXMgaW1tZWRpYXRlbHkgdXBkYXRlZCB3aXRoIHRoZSBuZXcgdmFsdWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIFJlZiB2YWx1ZVxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVcGRhdGVkUmVmKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlUmVmO1xufSIsImltcG9ydCB1c2VVcGRhdGVkUmVmIGZyb20gJy4vdXNlVXBkYXRlZFJlZic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEF0dGFjaCBhIGNhbGxiYWNrIHRoYXQgZmlyZXMgd2hlbiBhIGNvbXBvbmVudCB1bm1vdW50c1xuICpcbiAqIEBwYXJhbSBmbiBIYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2lsbFVubW91bnQoZm4pIHtcbiAgdmFyIG9uVW5tb3VudCA9IHVzZVVwZGF0ZWRSZWYoZm4pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25Vbm1vdW50LmN1cnJlbnQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG59IiwiLyoqXG4gKiBHZXQgdGhlIHdpZHRoIG9mIHRoZSB2ZXJ0aWNhbCB3aW5kb3cgc2Nyb2xsYmFyIGlmIGl0J3MgdmlzaWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb2R5U2Nyb2xsYmFyV2lkdGgoKSB7XG4gIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG59XG4iLCJpbXBvcnQgY3NzIGZyb20gJ2RvbS1oZWxwZXJzL2Nzcyc7XG5pbXBvcnQgeyBkYXRhQXR0ciB9IGZyb20gJy4vRGF0YUtleSc7XG5pbXBvcnQgZ2V0Qm9keVNjcm9sbGJhcldpZHRoIGZyb20gJy4vZ2V0U2Nyb2xsYmFyV2lkdGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSW5zdGFuY2Uge1xuICBkaWFsb2c6IEVsZW1lbnQ7XG4gIGJhY2tkcm9wOiBFbGVtZW50O1xufVxuXG5leHBvcnQgdHlwZSBDb250YWluZXJTdGF0ZSA9IHtcbiAgc2Nyb2xsQmFyV2lkdGg6IG51bWJlcjtcbiAgc3R5bGU6IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBPUEVOX0RBVEFfQVRUUklCVVRFID0gZGF0YUF0dHIoJ21vZGFsLW9wZW4nKTtcblxuLyoqXG4gKiBNYW5hZ2VzIGEgc3RhY2sgb2YgTW9kYWxzIGFzIHdlbGwgYXMgZW5zdXJpbmdcbiAqIGJvZHkgc2Nyb2xsaW5nIGlzIGlzIGRpc2FibGVkIGFuZCBwYWRkaW5nIGFjY291bnRlZCBmb3JcbiAqL1xuY2xhc3MgTW9kYWxNYW5hZ2VyIHtcbiAgcmVhZG9ubHkgaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3c6IGJvb2xlYW47XG5cbiAgcmVhZG9ubHkgaXNSVEw6IGJvb2xlYW47XG5cbiAgcmVhZG9ubHkgbW9kYWxzOiBNb2RhbEluc3RhbmNlW107XG5cbiAgcHJpdmF0ZSBzdGF0ZSE6IENvbnRhaW5lclN0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSB0cnVlLCBpc1JUTCA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSBoYW5kbGVDb250YWluZXJPdmVyZmxvdztcbiAgICB0aGlzLmlzUlRMID0gaXNSVEw7XG4gICAgdGhpcy5tb2RhbHMgPSBbXTtcbiAgfVxuXG4gIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgIHJldHVybiBnZXRCb2R5U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBzZXRNb2RhbEF0dHJpYnV0ZXMoX21vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgLy8gRm9yIG92ZXJyaWRpbmdcbiAgfVxuXG4gIHJlbW92ZU1vZGFsQXR0cmlidXRlcyhfbW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICAvLyBGb3Igb3ZlcnJpZGluZ1xuICB9XG5cbiAgc2V0Q29udGFpbmVyU3R5bGUoY29udGFpbmVyU3RhdGU6IENvbnRhaW5lclN0YXRlKSB7XG4gICAgY29uc3Qgc3R5bGU6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7IG92ZXJmbG93OiAnaGlkZGVuJyB9O1xuXG4gICAgLy8gd2UgYXJlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgYWN0dWFsIGBzdHlsZWAgaGVyZVxuICAgIC8vIGJlY2F1c2Ugd2Ugd2lsbCBvdmVycmlkZSBpdFxuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldEVsZW1lbnQoKTtcblxuICAgIGNvbnRhaW5lclN0YXRlLnN0eWxlID0ge1xuICAgICAgb3ZlcmZsb3c6IGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyxcbiAgICAgIFtwYWRkaW5nUHJvcF06IGNvbnRhaW5lci5zdHlsZVtwYWRkaW5nUHJvcF0sXG4gICAgfTtcblxuICAgIGlmIChjb250YWluZXJTdGF0ZS5zY3JvbGxCYXJXaWR0aCkge1xuICAgICAgLy8gdXNlIGNvbXB1dGVkIHN0eWxlLCBoZXJlIHRvIGdldCB0aGUgcmVhbCBwYWRkaW5nXG4gICAgICAvLyB0byBhZGQgb3VyIHNjcm9sbGJhciB3aWR0aFxuICAgICAgc3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7XG4gICAgICAgIHBhcnNlSW50KGNzcyhjb250YWluZXIsIHBhZGRpbmdQcm9wKSB8fCAnMCcsIDEwKSArXG4gICAgICAgIGNvbnRhaW5lclN0YXRlLnNjcm9sbEJhcldpZHRoXG4gICAgICB9cHhgO1xuICAgIH1cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKE9QRU5fREFUQV9BVFRSSUJVVEUsICcnKTtcblxuICAgIGNzcyhjb250YWluZXIsIHN0eWxlIGFzIGFueSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBbLi4udGhpcy5tb2RhbHNdLmZvckVhY2goKG0pID0+IHRoaXMucmVtb3ZlKG0pKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlOiBDb250YWluZXJTdGF0ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoT1BFTl9EQVRBX0FUVFJJQlVURSk7XG4gICAgT2JqZWN0LmFzc2lnbihjb250YWluZXIuc3R5bGUsIGNvbnRhaW5lclN0YXRlLnN0eWxlKTtcbiAgfVxuXG4gIGFkZChtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIGxldCBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgaWYgKG1vZGFsSWR4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG1vZGFsSWR4O1xuICAgIH1cblxuICAgIG1vZGFsSWR4ID0gdGhpcy5tb2RhbHMubGVuZ3RoO1xuICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgIHRoaXMuc2V0TW9kYWxBdHRyaWJ1dGVzKG1vZGFsKTtcbiAgICBpZiAobW9kYWxJZHggIT09IDApIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Nyb2xsQmFyV2lkdGg6IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMuc2V0Q29udGFpbmVyU3R5bGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGFsSWR4O1xuICB9XG5cbiAgcmVtb3ZlKG1vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgY29uc3QgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGFscy5zcGxpY2UobW9kYWxJZHgsIDEpO1xuXG4gICAgLy8gaWYgdGhhdCB3YXMgdGhlIGxhc3QgbW9kYWwgaW4gYSBjb250YWluZXIsXG4gICAgLy8gY2xlYW4gdXAgdGhlIGNvbnRhaW5lclxuICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoICYmIHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyU3R5bGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVNb2RhbEF0dHJpYnV0ZXMobW9kYWwpO1xuICB9XG5cbiAgaXNUb3BNb2RhbChtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIHJldHVybiAoXG4gICAgICAhIXRoaXMubW9kYWxzLmxlbmd0aCAmJiB0aGlzLm1vZGFsc1t0aGlzLm1vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsTWFuYWdlcjtcbiIsImltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgRE9NQ29udGFpbmVyPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PiA9XG4gIHwgVFxuICB8IFJlYWN0LlJlZk9iamVjdDxUPlxuICB8IG51bGxcbiAgfCAoKCkgPT4gVCB8IFJlYWN0LlJlZk9iamVjdDxUPiB8IG51bGwpO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZUNvbnRhaW5lclJlZiA9IDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxuICByZWY6IERPTUNvbnRhaW5lcjxUPiB8IHVuZGVmaW5lZCxcbik6IFQgfCBIVE1MQm9keUVsZW1lbnQgfCBudWxsID0+IHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBpZiAocmVmID09IG51bGwpIHJldHVybiBvd25lckRvY3VtZW50KCkuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSByZWYgPSByZWYoKTtcblxuICBpZiAocmVmICYmICdjdXJyZW50JyBpbiByZWYpIHJlZiA9IHJlZi5jdXJyZW50O1xuICBpZiAocmVmPy5ub2RlVHlwZSkgcmV0dXJuIHJlZiB8fCBudWxsO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2FpdEZvckRPTVJlZjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4oXG4gIHJlZjogRE9NQ29udGFpbmVyPFQ+IHwgdW5kZWZpbmVkLFxuICBvblJlc29sdmVkPzogKGVsZW1lbnQ6IFQgfCBIVE1MQm9keUVsZW1lbnQpID0+IHZvaWQsXG4pIHtcbiAgY29uc3QgW3Jlc29sdmVkUmVmLCBzZXRSZWZdID0gdXNlU3RhdGUoKCkgPT4gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpKTtcblxuICBpZiAoIXJlc29sdmVkUmVmKSB7XG4gICAgY29uc3QgZWFybHlSZWYgPSByZXNvbHZlQ29udGFpbmVyUmVmKHJlZik7XG4gICAgaWYgKGVhcmx5UmVmKSBzZXRSZWYoZWFybHlSZWYpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob25SZXNvbHZlZCAmJiByZXNvbHZlZFJlZikge1xuICAgICAgb25SZXNvbHZlZChyZXNvbHZlZFJlZik7XG4gICAgfVxuICB9LCBbb25SZXNvbHZlZCwgcmVzb2x2ZWRSZWZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5leHRSZWYgPSByZXNvbHZlQ29udGFpbmVyUmVmKHJlZik7XG4gICAgaWYgKG5leHRSZWYgIT09IHJlc29sdmVkUmVmKSB7XG4gICAgICBzZXRSZWYobmV4dFJlZik7XG4gICAgfVxuICB9LCBbcmVmLCByZXNvbHZlZFJlZl0pO1xuXG4gIHJldHVybiByZXNvbHZlZFJlZjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSwgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG5pbXBvcnQgYWN0aXZlRWxlbWVudCBmcm9tICdkb20taGVscGVycy9hY3RpdmVFbGVtZW50JztcbmltcG9ydCBjb250YWlucyBmcm9tICdkb20taGVscGVycy9jb250YWlucyc7XG5pbXBvcnQgY2FuVXNlRE9NIGZyb20gJ2RvbS1oZWxwZXJzL2NhblVzZURPTSc7XG5pbXBvcnQgbGlzdGVuIGZyb20gJ2RvbS1oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVmLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgZm9yd2FyZFJlZixcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1vdW50ZWQnO1xuaW1wb3J0IHVzZVdpbGxVbm1vdW50IGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVdpbGxVbm1vdW50JztcblxuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tICcuL01vZGFsTWFuYWdlcic7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNhbGxiYWNrcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgbWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG5leHBvcnQgdHlwZSBNb2RhbFRyYW5zaXRpb25Db21wb25lbnQgPSBSZWFjdC5Db21wb25lbnRUeXBlPFxuICB7XG4gICAgaW46IGJvb2xlYW47XG4gICAgYXBwZWFyPzogYm9vbGVhbjtcbiAgICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbiAgfSAmIFRyYW5zaXRpb25DYWxsYmFja3Ncbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyTW9kYWxEaWFsb2dQcm9wcyB7XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkO1xuICBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGFiSW5kZXg6IG51bWJlcjtcbiAgcm9sZTogc3RyaW5nO1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEVsZW1lbnQ+O1xuICAnYXJpYS1tb2RhbCc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyTW9kYWxCYWNrZHJvcFByb3BzIHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxFbGVtZW50PjtcbiAgb25DbGljazogKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcbn1cblxuLypcbiAgTW9kYWwgcHJvcHMgYXJlIHNwbGl0IGludG8gYSB2ZXJzaW9uIHdpdGggYW5kIHdpdGhvdXQgaW5kZXggc2lnbmF0dXJlIHNvIHRoYXQgeW91IGNhbiBmdWxseSB1c2UgdGhlbSBpbiBhbm90aGVyIHByb2plY3RzXG4gIFRoaXMgaXMgZHVlIHRvIFR5cGVzY3JpcHQgbm90IHBsYXlpbmcgd2VsbCB3aXRoIGluZGV4IHNpbmdhdHVyZXMgZS5nLiB3aGVuIHVzaW5nIE9taXRcbiovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNb2RhbFByb3BzIGV4dGVuZHMgVHJhbnNpdGlvbkNhbGxiYWNrcyB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICByb2xlPzogc3RyaW5nO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBNb2RhbFxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50LCBhIGByZWZgIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBNb2RhbCBpcyBhcHBlbmRlZCB0byBpdCdzIGBjb250YWluZXJgIGVsZW1lbnQuXG4gICAqXG4gICAqL1xuICBjb250YWluZXI/OiBET01Db250YWluZXI7XG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1vZGFsIGlzIG9wZW5pbmcuXG4gICAqL1xuICBvblNob3c/OiAoKSA9PiB2b2lkO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGVpdGhlciB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZCwgb3IgdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogVGhlIGBvbkhpZGVgIGNhbGxiYWNrIG9ubHkgc2lnbmFscyBpbnRlbnQgZnJvbSB0aGUgTW9kYWwsXG4gICAqIHlvdSBtdXN0IGFjdHVhbGx5IHNldCB0aGUgYHNob3dgIHByb3AgdG8gYGZhbHNlYCBmb3IgdGhlIE1vZGFsIHRvIGNsb3NlLlxuICAgKi9cbiAgb25IaWRlPzogKCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQSBNb2RhbE1hbmFnZXIgaW5zdGFuY2UgdXNlZCB0byB0cmFjayBhbmQgbWFuYWdlIHRoZSBzdGF0ZSBvZiBvcGVuXG4gICAqIE1vZGFscy4gVXNlZnVsIHdoZW4gY3VzdG9taXppbmcgaG93IG1vZGFscyBpbnRlcmFjdCB3aXRoaW4gYSBjb250YWluZXJcbiAgICovXG4gIG1hbmFnZXI/OiBNb2RhbE1hbmFnZXI7XG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgYSBiYWNrZHJvcCBjb21wb25lbnQuIEEgYHN0YXRpY2BiYWNrZHJvcFxuICAgKiB3aWxsIG5vdCB0cmlnZ2VyIGEgTW9kYWwgb25IaWRlIHdoZW4gY2xpY2tlZC5cbiAgICovXG4gIGJhY2tkcm9wPzogdHJ1ZSB8IGZhbHNlIHwgJ3N0YXRpYyc7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkaWFsb2cgY29tcG9uZW50LiBVc2VmdWwgZm9yIGN1c3RvbVxuICAgKiByZW5kZXJpbmcuICoqTm90ZToqKiB0aGUgY29tcG9uZW50IHNob3VsZCBtYWtlIHN1cmUgdG8gYXBwbHkgdGhlIHByb3ZpZGVkIHJlZi5cbiAgICpcbiAgICogYGBganMgc3RhdGljXG4gICAqIHJlbmRlckRpYWxvZz17cHJvcHMgPT4gPE15RGlhbG9nIHsuLi5wcm9wc30gLz59XG4gICAqIGBgYFxuICAgKi9cbiAgcmVuZGVyRGlhbG9nPzogKHByb3BzOiBSZW5kZXJNb2RhbERpYWxvZ1Byb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJhY2tkcm9wIGNvbXBvbmVudC4gVXNlZnVsIGZvciBjdXN0b21cbiAgICogYmFja2Ryb3AgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAgcmVuZGVyQmFja2Ryb3A9e3Byb3BzID0+IDxNeUJhY2tkcm9wIHsuLi5wcm9wc30gLz59XG4gICAqIGBgYFxuICAgKi9cbiAgcmVuZGVyQmFja2Ryb3A/OiAocHJvcHM6IFJlbmRlck1vZGFsQmFja2Ryb3BQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5LCBpZiBzcGVjaWZpZWQgaW4gYGtleWJvYXJkYCwgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogSWYgcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGtleWJvYXJkIGV2ZW50LCBjbG9zaW5nIHRoZSBtb2RhbCB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bj86IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBiYWNrZHJvcCwgaWYgc3BlY2lmaWVkLCBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25CYWNrZHJvcENsaWNrPzogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWRcbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudCB1c2VkXG4gICAqIHRvIGNvbnRyb2wgYW5pbWF0aW9ucyBmb3IgdGhlIGRpYWxvZyBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uPzogTW9kYWxUcmFuc2l0aW9uQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50IHVzZWRcbiAgICogdG8gY29udHJvbCBhbmltYXRpb25zIGZvciB0aGUgYmFja2Ryb3AgY29tcG9uZW50cy5cbiAgICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbj86IE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudDtcbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy4gVGhpcyBhbHNvXG4gICAqIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSBNb2RhbCBjaGlsZHJlbiB0aGF0IGhhdmUgdGhlIGBhdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYGZhbHNlYCBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIE1vZGFsIHdoaWxlIG9wZW4uXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYGZhbHNlYCBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBlbmZvcmNlRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogbW9kYWwgaXMgaGlkZGVuXG4gICAqL1xuICByZXN0b3JlRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIHBhc3NlZCB0byBmb2N1cyBmdW5jdGlvbiB3aGVuIGByZXN0b3JlRm9jdXNgIGlzIHNldCB0byBgdHJ1ZWBcbiAgICpcbiAgICogQGxpbmsgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1cyNQYXJhbWV0ZXJzXG4gICAqL1xuICByZXN0b3JlRm9jdXNPcHRpb25zPzoge1xuICAgIHByZXZlbnRTY3JvbGw6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcm9wcyBleHRlbmRzIEJhc2VNb2RhbFByb3BzIHtcbiAgW290aGVyOiBzdHJpbmddOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldE1hbmFnZXIoKSB7XG4gIGlmICghbWFuYWdlcikgbWFuYWdlciA9IG5ldyBNb2RhbE1hbmFnZXIoKTtcbiAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmZ1bmN0aW9uIHVzZU1vZGFsTWFuYWdlcihwcm92aWRlZD86IE1vZGFsTWFuYWdlcikge1xuICBjb25zdCBtb2RhbE1hbmFnZXIgPSBwcm92aWRlZCB8fCBnZXRNYW5hZ2VyKCk7XG5cbiAgY29uc3QgbW9kYWwgPSB1c2VSZWYoe1xuICAgIGRpYWxvZzogKG51bGwgYXMgYW55KSBhcyBIVE1MRWxlbWVudCxcbiAgICBiYWNrZHJvcDogKG51bGwgYXMgYW55KSBhcyBIVE1MRWxlbWVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obW9kYWwuY3VycmVudCwge1xuICAgIGFkZDogKCkgPT4gbW9kYWxNYW5hZ2VyLmFkZChtb2RhbC5jdXJyZW50KSxcblxuICAgIHJlbW92ZTogKCkgPT4gbW9kYWxNYW5hZ2VyLnJlbW92ZShtb2RhbC5jdXJyZW50KSxcblxuICAgIGlzVG9wTW9kYWw6ICgpID0+IG1vZGFsTWFuYWdlci5pc1RvcE1vZGFsKG1vZGFsLmN1cnJlbnQpLFxuXG4gICAgc2V0RGlhbG9nUmVmOiB1c2VDYWxsYmFjaygocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgIG1vZGFsLmN1cnJlbnQuZGlhbG9nID0gcmVmITtcbiAgICB9LCBbXSksXG5cbiAgICBzZXRCYWNrZHJvcFJlZjogdXNlQ2FsbGJhY2soKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBtb2RhbC5jdXJyZW50LmJhY2tkcm9wID0gcmVmITtcbiAgICB9LCBbXSksXG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGFuZGxlIHtcbiAgZGlhbG9nOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGJhY2tkcm9wOiBIVE1MRWxlbWVudCB8IG51bGw7XG59XG5cbmNvbnN0IE1vZGFsOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBNb2RhbFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxNb2RhbEhhbmRsZT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgc2hvdyA9IGZhbHNlLFxuICAgICAgcm9sZSA9ICdkaWFsb2cnLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGJhY2tkcm9wID0gdHJ1ZSxcbiAgICAgIGtleWJvYXJkID0gdHJ1ZSxcbiAgICAgIG9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uRXNjYXBlS2V5RG93bixcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb24sXG4gICAgICBhdXRvRm9jdXMgPSB0cnVlLFxuICAgICAgZW5mb3JjZUZvY3VzID0gdHJ1ZSxcbiAgICAgIHJlc3RvcmVGb2N1cyA9IHRydWUsXG4gICAgICByZXN0b3JlRm9jdXNPcHRpb25zLFxuICAgICAgcmVuZGVyRGlhbG9nLFxuICAgICAgcmVuZGVyQmFja2Ryb3AgPSAocHJvcHM6IFJlbmRlck1vZGFsQmFja2Ryb3BQcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+LFxuICAgICAgbWFuYWdlcjogcHJvdmlkZWRNYW5hZ2VyLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXJSZWYsXG4gICAgICBvblNob3csXG4gICAgICBvbkhpZGUgPSAoKSA9PiB7fSxcblxuICAgICAgb25FeGl0LFxuICAgICAgb25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcsXG4gICAgICBvbkVudGVyLFxuICAgICAgb25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZCxcblxuICAgICAgLi4ucmVzdFxuICAgIH06IE1vZGFsUHJvcHMsXG4gICAgcmVmOiBSZWFjdC5SZWY8TW9kYWxIYW5kbGU+LFxuICApID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKGNvbnRhaW5lclJlZik7XG4gICAgY29uc3QgbW9kYWwgPSB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWRNYW5hZ2VyKTtcblxuICAgIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKTtcbiAgICBjb25zdCBwcmV2U2hvdyA9IHVzZVByZXZpb3VzKHNob3cpO1xuICAgIGNvbnN0IFtleGl0ZWQsIHNldEV4aXRlZF0gPSB1c2VTdGF0ZSghc2hvdyk7XG4gICAgY29uc3QgbGFzdEZvY3VzUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gbW9kYWwsIFttb2RhbF0pO1xuXG4gICAgaWYgKGNhblVzZURPTSAmJiAhcHJldlNob3cgJiYgc2hvdykge1xuICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBhY3RpdmVFbGVtZW50KCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCF0cmFuc2l0aW9uICYmICFzaG93ICYmICFleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHNob3cgJiYgZXhpdGVkKSB7XG4gICAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIG1vZGFsLmFkZCgpO1xuXG4gICAgICByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYuY3VycmVudCA9IGxpc3RlbihcbiAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAna2V5ZG93bicsXG4gICAgICAgIGhhbmRsZURvY3VtZW50S2V5RG93bixcbiAgICAgICk7XG5cbiAgICAgIHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYuY3VycmVudCA9IGxpc3RlbihcbiAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAvLyB0aGUgdGltZW91dCBpcyBuZWNlc3NhcnkgYi9jIHRoaXMgd2lsbCBydW4gYmVmb3JlIHRoZSBuZXcgbW9kYWwgaXMgbW91bnRlZFxuICAgICAgICAvLyBhbmQgc28gc3RlYWxzIGZvY3VzIGZyb20gaXRcbiAgICAgICAgKCkgPT4gc2V0VGltZW91dChoYW5kbGVFbmZvcmNlRm9jdXMpLFxuICAgICAgICB0cnVlLFxuICAgICAgKTtcblxuICAgICAgaWYgKG9uU2hvdykge1xuICAgICAgICBvblNob3coKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b2ZvY3VzIGFmdGVyIG9uU2hvdyB0byBub3QgdHJpZ2dlciBhIGZvY3VzIGV2ZW50IGZvciBwcmV2aW91c1xuICAgICAgLy8gbW9kYWxzIGJlZm9yZSB0aGlzIG9uZSBpcyBzaG93bi5cbiAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50KGRvY3VtZW50KSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kYWwuZGlhbG9nICYmXG4gICAgICAgICAgY3VycmVudEFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBjdXJyZW50QWN0aXZlRWxlbWVudDtcbiAgICAgICAgICBtb2RhbC5kaWFsb2cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlSGlkZSA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG5cbiAgICAgIHJlbW92ZUtleWRvd25MaXN0ZW5lclJlZi5jdXJyZW50Py4oKTtcbiAgICAgIHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYuY3VycmVudD8uKCk7XG5cbiAgICAgIGlmIChyZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogPD1JRTExIGRvZXNuJ3Qgc3VwcG9ydCBgZm9jdXMoKWAgb24gc3ZnIGVsZW1lbnRzIChSQjogIzkxNylcbiAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQ/LmZvY3VzPy4ocmVzdG9yZUZvY3VzT3B0aW9ucyk7XG4gICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRPRE86IHRyeSBhbmQgY29tYmluZSB0aGVzZSBlZmZlY3RzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LW92ZXJsYXlzL3B1bGwvNzk0I2Rpc2N1c3Npb25fcjQwOTk1NDEyMFxuXG4gICAgLy8gU2hvdyBsb2dpYyB3aGVuOlxuICAgIC8vICAtIHNob3cgaXMgYHRydWVgIF9hbmRfIGBjb250YWluZXJgIGhhcyByZXNvbHZlZFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIXNob3cgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVTaG93KCk7XG4gICAgfSwgW3Nob3csIGNvbnRhaW5lciwgLyogc2hvdWxkIG5ldmVyIGNoYW5nZTogKi8gaGFuZGxlU2hvd10pO1xuXG4gICAgLy8gSGlkZSBjbGVhbnVwIGxvZ2ljIHdoZW46XG4gICAgLy8gIC0gYGV4aXRlZGAgc3dpdGNoZXMgdG8gdHJ1ZVxuICAgIC8vICAtIGNvbXBvbmVudCB1bm1vdW50cztcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKCFleGl0ZWQpIHJldHVybjtcblxuICAgICAgaGFuZGxlSGlkZSgpO1xuICAgIH0sIFtleGl0ZWQsIGhhbmRsZUhpZGVdKTtcblxuICAgIHVzZVdpbGxVbm1vdW50KCgpID0+IHtcbiAgICAgIGhhbmRsZUhpZGUoKTtcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdCBoYW5kbGVFbmZvcmNlRm9jdXMgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmICghZW5mb3JjZUZvY3VzIHx8ICFpc01vdW50ZWQoKSB8fCAhbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50KCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgbW9kYWwuZGlhbG9nICYmXG4gICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICFjb250YWlucyhtb2RhbC5kaWFsb2csIGN1cnJlbnRBY3RpdmVFbGVtZW50KVxuICAgICAgKSB7XG4gICAgICAgIG1vZGFsLmRpYWxvZy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uQmFja2Ryb3BDbGljaz8uKGUpO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgPT09IHRydWUpIHtcbiAgICAgICAgb25IaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVEb2N1bWVudEtleURvd24gPSB1c2VFdmVudENhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoa2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSAyNyAmJiBtb2RhbC5pc1RvcE1vZGFsKCkpIHtcbiAgICAgICAgb25Fc2NhcGVLZXlEb3duPy4oZSk7XG5cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICBvbkhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZiA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBsaXN0ZW4+IHwgbnVsbD4oKTtcbiAgICBjb25zdCByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgbGlzdGVuPiB8IG51bGw+KCk7XG5cbiAgICBjb25zdCBoYW5kbGVIaWRkZW46IFRyYW5zaXRpb25DYWxsYmFja3NbJ29uRXhpdGVkJ10gPSAoLi4uYXJncykgPT4ge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuICAgICAgb25FeGl0ZWQ/LiguLi5hcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgaWYgKCFjb250YWluZXIgfHwgIShzaG93IHx8IChUcmFuc2l0aW9uICYmICFleGl0ZWQpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGlhbG9nUHJvcHMgPSB7XG4gICAgICByb2xlLFxuICAgICAgcmVmOiBtb2RhbC5zZXREaWFsb2dSZWYsXG4gICAgICAvLyBhcHBhcmVudGx5IG9ubHkgd29ya3Mgb24gdGhlIGRpYWxvZyByb2xlIGVsZW1lbnRcbiAgICAgICdhcmlhLW1vZGFsJzogcm9sZSA9PT0gJ2RpYWxvZycgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgLi4ucmVzdCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdGFiSW5kZXg6IC0xLFxuICAgIH07XG5cbiAgICBsZXQgZGlhbG9nID0gcmVuZGVyRGlhbG9nID8gKFxuICAgICAgcmVuZGVyRGlhbG9nKGRpYWxvZ1Byb3BzKVxuICAgICkgOiAoXG4gICAgICA8ZGl2IHsuLi5kaWFsb2dQcm9wc30+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4hLCB7IHJvbGU6ICdkb2N1bWVudCcgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKFRyYW5zaXRpb24pIHtcbiAgICAgIGRpYWxvZyA9IChcbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgaW49eyEhc2hvd31cbiAgICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgICBvbkV4aXRpbmc9e29uRXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17aGFuZGxlSGlkZGVufVxuICAgICAgICAgIG9uRW50ZXI9e29uRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkaWFsb2d9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGJhY2tkcm9wRWxlbWVudCA9IG51bGw7XG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICBjb25zdCBCYWNrZHJvcFRyYW5zaXRpb24gPSBiYWNrZHJvcFRyYW5zaXRpb247XG5cbiAgICAgIGJhY2tkcm9wRWxlbWVudCA9IHJlbmRlckJhY2tkcm9wKHtcbiAgICAgICAgcmVmOiBtb2RhbC5zZXRCYWNrZHJvcFJlZixcbiAgICAgICAgb25DbGljazogaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoQmFja2Ryb3BUcmFuc2l0aW9uKSB7XG4gICAgICAgIGJhY2tkcm9wRWxlbWVudCA9IChcbiAgICAgICAgICA8QmFja2Ryb3BUcmFuc2l0aW9uIGFwcGVhciBpbj17ISFzaG93fT5cbiAgICAgICAgICAgIHtiYWNrZHJvcEVsZW1lbnR9XG4gICAgICAgICAgPC9CYWNrZHJvcFRyYW5zaXRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtiYWNrZHJvcEVsZW1lbnR9XG4gICAgICAgICAgICB7ZGlhbG9nfVxuICAgICAgICAgIDwvPixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9LFxuKTtcblxuTW9kYWwuZGlzcGxheU5hbWUgPSAnTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gIE1hbmFnZXI6IE1vZGFsTWFuYWdlcixcbn0pO1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxudmFyIHRvRm5SZWYgPSBmdW5jdGlvbiB0b0ZuUmVmKHJlZikge1xuICByZXR1cm4gIXJlZiB8fCB0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nID8gcmVmIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnMocmVmQSwgcmVmQikge1xuICB2YXIgYSA9IHRvRm5SZWYocmVmQSk7XG4gIHZhciBiID0gdG9GblJlZihyZWZCKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChhKSBhKHZhbHVlKTtcbiAgICBpZiAoYikgYih2YWx1ZSk7XG4gIH07XG59XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJucyBhIHNpbmdsZSBjYWxsYmFjayByZWYgY29tcG9zZWQgZnJvbSB0d28gb3RoZXIgUmVmcy5cbiAqXG4gKiBgYGB0c3hcbiAqIGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MQnV0dG9uRWxlbWVudD4oKTtcbiAqICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGF0dGFjaFJlZik7XG4gKlxuICogICByZXR1cm4gPGJ1dHRvbiByZWY9e21lcmdlZFJlZn0gey4uLnByb3BzfS8+XG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIHJlZkEgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQHBhcmFtIHJlZkIgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHJlZkEsIHJlZkIpIHtcbiAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZVJlZnMocmVmQSwgcmVmQik7XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1lcmdlZFJlZnM7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlQ2FsbGJhY2tSZWYgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWYnO1xuaW1wb3J0IHVzZU1lcmdlZFJlZnMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VQb3BwZXIsIHtcbiAgT2Zmc2V0LFxuICBQbGFjZW1lbnQsXG4gIFVzZVBvcHBlck9wdGlvbnMsXG4gIFVzZVBvcHBlclN0YXRlLFxufSBmcm9tICcuL3VzZVBvcHBlcic7XG5pbXBvcnQgdXNlUm9vdENsb3NlLCB7IFJvb3RDbG9zZU9wdGlvbnMgfSBmcm9tICcuL3VzZVJvb3RDbG9zZSc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNhbGxiYWNrcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcgZnJvbSAnLi9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5QXJyb3dQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheU1ldGFkYXRhIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHBvcHBlcjogVXNlUG9wcGVyU3RhdGUgfCBudWxsO1xuICBhcnJvd1Byb3BzOiBQYXJ0aWFsPE92ZXJsYXlBcnJvd1Byb3BzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5SW5qZWN0ZWRQcm9wcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gICdhcmlhLWxhYmVsbGVkYnknPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlQcm9wcyBleHRlbmRzIFRyYW5zaXRpb25DYWxsYmFja3Mge1xuICAvKipcbiAgICogRW5hYmxlcyB0aGUgUG9wcGVyLmpzIGBmbGlwYCBtb2RpZmllciwgYWxsb3dpbmcgdGhlIE92ZXJsYXkgdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yIHRvZ2dsZS5cbiAgICogUmVmZXIgdG8gdGhlIFtmbGlwIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9wb3BwZXItZG9jdW1lbnRhdGlvbi5odG1sI21vZGlmaWVycy4uZmxpcC5lbmFibGVkKSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmbGlwPzogYm9vbGVhbjtcblxuICAvKiogU3BlY2lmeSB3aGVyZSB0aGUgb3ZlcmxheSBlbGVtZW50IGlzIHBvc2l0aW9uZWQgaW4gcmVsYXRpb24gdG8gdGhlIHRhcmdldCBlbGVtZW50ICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcblxuICAvKipcbiAgICogQ29udHJvbCBvZmZzZXQgb2YgdGhlIG92ZXJsYXkgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBBIGNvbnZlbmllbmNlIHNob3J0Y3V0IHRvIHNldHRpbmcgYHBvcHBlckNvbmZpZy5tb2RmaWVycy5vZmZzZXRgXG4gICAqL1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgaG93IG11Y2ggc3BhY2UgdGhlcmUgaXMgYmV0d2VlbiB0aGUgZWRnZSBvZiB0aGUgYm91bmRhcnkgZWxlbWVudCBhbmQgb3ZlcmxheS5cbiAgICogQSBjb252ZW5pZW5jZSBzaG9ydGN1dCB0byBzZXR0aW5nIGBwb3BwZXJDb25maWcubW9kZmllcnMucHJldmVudE92ZXJmbG93LnBhZGRpbmdgXG4gICAqL1xuICBjb250YWluZXJQYWRkaW5nPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwb3BwZXIgb3B0aW9ucyBhbmQgcHJvcHMgcGFzc2VkIGRpcmVjdGx5IHRvIHJlYWN0LXBvcHBlcidzIFBvcHBlciBjb21wb25lbnQuXG4gICAqL1xuICBwb3BwZXJDb25maWc/OiBPbWl0PFVzZVBvcHBlck9wdGlvbnMsICdwbGFjZW1lbnQnPjtcblxuICAvKipcbiAgICogQSBET00gRWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIFBvcnRhbCBjaGlsZHJlblxuICAgKiBhcHBlbmRlZCB0byBpdC5cbiAgICovXG4gIGNvbnRhaW5lcj86IERPTUNvbnRhaW5lcjtcblxuICAvKipcbiAgICogQSBET00gRWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgdGFyZ2V0YCBlbGVtZW50IGlzIHdoZXJlXG4gICAqIHRoZSBvdmVybGF5IGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8uXG4gICAqL1xuICB0YXJnZXQ6IERPTUNvbnRhaW5lcjtcblxuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBPdmVybGF5XG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudFxuICAgKiB1c2VkIHRvIGFuaW1hdGUgdGhlIG92ZXJsYXkgYXMgaXQgY2hhbmdlcyB2aXNpYmlsaXR5LlxuICAgKi9cbiAgdHJhbnNpdGlvbj86IFJlYWN0LkNvbXBvbmVudFR5cGU8XG4gICAgeyBpbj86IGJvb2xlYW47IGFwcGVhcj86IGJvb2xlYW4gfSAmIFRyYW5zaXRpb25DYWxsYmFja3NcbiAgPjtcblxuICAvKipcbiAgICogQSBDYWxsYmFjayBmaXJlZCBieSB0aGUgT3ZlcmxheSB3aGVuIGl0IHdpc2hlcyB0byBiZSBoaWRkZW4uXG4gICAqXG4gICAqIF9fcmVxdWlyZWRfXyB3aGVuIGByb290Q2xvc2VgIGlzIGB0cnVlYC5cbiAgICpcbiAgICogQHR5cGUgZnVuY1xuICAgKi9cbiAgb25IaWRlPzogKGU6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHRyaWdnZXIgYG9uSGlkZWAgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgb3ZlcmxheVxuICAgKi9cbiAgcm9vdENsb3NlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmeSBkaXNhYmxlZCBmb3IgZGlzYWJsZSBSb290Q2xvc2VXcmFwcGVyXG4gICAqL1xuICByb290Q2xvc2VEaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgZXZlbnQgZm9yIHRvZ2dsaW5nIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50PzogUm9vdENsb3NlT3B0aW9uc1snY2xpY2tUcmlnZ2VyJ107XG5cbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGFuIG92ZXJsYXkgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IE92ZXJsYXlJbmplY3RlZFByb3BzLFxuICAgIG1ldGE6IE92ZXJsYXlNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQnVpbHQgb24gdG9wIG9mIGBQb3BwZXIuanNgLCB0aGUgb3ZlcmxheSBjb21wb25lbnQgaXNcbiAqIGdyZWF0IGZvciBjdXN0b20gdG9vbHRpcCBvdmVybGF5cy5cbiAqL1xuY29uc3QgT3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIE92ZXJsYXlQcm9wcz4oXG4gIChwcm9wcywgb3V0ZXJSZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBmbGlwLFxuICAgICAgb2Zmc2V0LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgY29udGFpbmVyUGFkZGluZyxcbiAgICAgIHBvcHBlckNvbmZpZyA9IHt9LFxuICAgICAgdHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBbcm9vdEVsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRWxlbWVudD4oKTtcbiAgICBjb25zdCBbYXJyb3dFbGVtZW50LCBhdHRhY2hBcnJvd1JlZl0gPSB1c2VDYWxsYmFja1JlZjxFbGVtZW50PigpO1xuICAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnM8SFRNTEVsZW1lbnQgfCBudWxsPihhdHRhY2hSZWYsIG91dGVyUmVmKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVdhaXRGb3JET01SZWYocHJvcHMuY29udGFpbmVyKTtcbiAgICBjb25zdCB0YXJnZXQgPSB1c2VXYWl0Rm9yRE9NUmVmKHByb3BzLnRhcmdldCk7XG5cbiAgICBjb25zdCBbZXhpdGVkLCBzZXRFeGl0ZWRdID0gdXNlU3RhdGUoIXByb3BzLnNob3cpO1xuXG4gICAgY29uc3QgcG9wcGVyID0gdXNlUG9wcGVyKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcm9vdEVsZW1lbnQsXG4gICAgICBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnKHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBlbmFibGVFdmVudHM6ICEhcHJvcHMuc2hvdyxcbiAgICAgICAgY29udGFpbmVyUGFkZGluZzogY29udGFpbmVyUGFkZGluZyB8fCA1LFxuICAgICAgICBmbGlwLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFycm93RWxlbWVudCxcbiAgICAgICAgcG9wcGVyQ29uZmlnLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIGlmIChwcm9wcy5zaG93KSB7XG4gICAgICBpZiAoZXhpdGVkKSBzZXRFeGl0ZWQoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIXByb3BzLnRyYW5zaXRpb24gJiYgIWV4aXRlZCkge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUhpZGRlbjogVHJhbnNpdGlvbkNhbGxiYWNrc1snb25FeGl0ZWQnXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICAgIGlmIChwcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBwcm9wcy5vbkV4aXRlZCguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRG9uJ3QgdW4tcmVuZGVyIHRoZSBvdmVybGF5IHdoaWxlIGl0J3MgdHJhbnNpdGlvbmluZyBvdXQuXG4gICAgY29uc3QgbW91bnRPdmVybGF5ID0gcHJvcHMuc2hvdyB8fCAoVHJhbnNpdGlvbiAmJiAhZXhpdGVkKTtcblxuICAgIHVzZVJvb3RDbG9zZShyb290RWxlbWVudCwgcHJvcHMub25IaWRlISwge1xuICAgICAgZGlzYWJsZWQ6ICFwcm9wcy5yb290Q2xvc2UgfHwgcHJvcHMucm9vdENsb3NlRGlzYWJsZWQsXG4gICAgICBjbGlja1RyaWdnZXI6IHByb3BzLnJvb3RDbG9zZUV2ZW50LFxuICAgIH0pO1xuXG4gICAgaWYgKCFtb3VudE92ZXJsYXkpIHtcbiAgICAgIC8vIERvbid0IGJvdGhlciBzaG93aW5nIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgdG8uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbihcbiAgICAgIHtcbiAgICAgICAgLi4ucG9wcGVyLmF0dHJpYnV0ZXMucG9wcGVyLFxuICAgICAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5wb3BwZXIgYXMgYW55LFxuICAgICAgICByZWY6IG1lcmdlZFJlZixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBvcHBlcixcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBzaG93OiAhIXByb3BzLnNob3csXG4gICAgICAgIGFycm93UHJvcHM6IHtcbiAgICAgICAgICAuLi5wb3BwZXIuYXR0cmlidXRlcy5hcnJvdyxcbiAgICAgICAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5hcnJvdyBhcyBhbnksXG4gICAgICAgICAgcmVmOiBhdHRhY2hBcnJvd1JlZixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB7IG9uRXhpdCwgb25FeGl0aW5nLCBvbkVudGVyLCBvbkVudGVyaW5nLCBvbkVudGVyZWQgfSA9IHByb3BzO1xuXG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBpbj17cHJvcHMuc2hvd31cbiAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgICBvbkV4aXRpbmc9e29uRXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17aGFuZGxlSGlkZGVufVxuICAgICAgICAgIG9uRW50ZXI9e29uRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkLCBjb250YWluZXIpIDogbnVsbDtcbiAgfSxcbik7XG5cbk92ZXJsYXkuZGlzcGxheU5hbWUgPSAnT3ZlcmxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXk7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VXYWl0Rm9yRE9NUmVmLCB7IERPTUNvbnRhaW5lciB9IGZyb20gJy4vdXNlV2FpdEZvckRPTVJlZic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgRE9NIGVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBQb3J0YWwgY2hpbGRyZW5cbiAgICogYXBwZW5kZWQgdG8gaXQuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgb25SZW5kZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgY29udGFpbmVyOiBET01Db250YWluZXI7XG4gIG9uUmVuZGVyZWQ/OiAoZWxlbWVudDogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgUG9ydGFsID0gKHsgY29udGFpbmVyLCBjaGlsZHJlbiwgb25SZW5kZXJlZCB9OiBQb3J0YWxQcm9wcykgPT4ge1xuICBjb25zdCByZXNvbHZlZENvbnRhaW5lciA9IHVzZVdhaXRGb3JET01SZWYoY29udGFpbmVyLCBvblJlbmRlcmVkKTtcblxuICByZXR1cm4gcmVzb2x2ZWRDb250YWluZXIgPyAoXG4gICAgPD57UmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCByZXNvbHZlZENvbnRhaW5lcil9PC8+XG4gICkgOiBudWxsO1xufTtcblxuUG9ydGFsLmRpc3BsYXlOYW1lID0gJ1BvcnRhbCc7XG5Qb3J0YWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFdmVudEtleSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNvbnRleHRUeXBlIHtcbiAgb25TZWxlY3Q6IGFueTtcbiAgYWN0aXZlS2V5OiBhbnk7XG4gIHRyYW5zaXRpb246IGFueTtcbiAgbW91bnRPbkVudGVyOiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0OiBib29sZWFuO1xuICBnZXRDb250cm9sbGVkSWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBhbnk7XG4gIGdldENvbnRyb2xsZXJJZDogKGtleTogRXZlbnRLZXkpID0+IGFueTtcbn1cblxuY29uc3QgVGFiQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8VGFiQ29udGV4dFR5cGUgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udGV4dDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQsIHsgbWFrZUV2ZW50S2V5IH0gZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQge1xuICBFdmVudEtleSxcbiAgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQsXG4gIFNlbGVjdENhbGxiYWNrLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGF0YUF0dHIgfSBmcm9tICcuL0RhdGFLZXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1Qcm9wc1xuICBleHRlbmRzIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCAnb25TZWxlY3QnPiB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgaHJlZj86IHN0cmluZztcbiAgdGFiSW5kZXg/OiBudW1iZXI7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgYXM6IFByb3BUeXBlcy5hbnksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgJ2FyaWEtY29udHJvbHMnOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VOYXZJdGVtT3B0aW9ucyB7XG4gIGtleT86IHN0cmluZyB8IG51bGw7XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpZD86IHN0cmluZztcbiAgcm9sZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdkl0ZW0oe1xuICBrZXksXG4gIG9uQ2xpY2ssXG4gIGFjdGl2ZSxcbiAgaWQsXG4gIHJvbGUsXG4gIGRpc2FibGVkLFxufTogVXNlTmF2SXRlbU9wdGlvbnMpIHtcbiAgY29uc3QgcGFyZW50T25TZWxlY3QgPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcbiAgY29uc3QgbmF2Q29udGV4dCA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XG5cbiAgbGV0IGlzQWN0aXZlID0gYWN0aXZlO1xuICBjb25zdCBwcm9wcyA9IHt9IGFzIGFueTtcblxuICBpZiAobmF2Q29udGV4dCkge1xuICAgIGlmICghcm9sZSAmJiBuYXZDb250ZXh0LnJvbGUgPT09ICd0YWJsaXN0JykgcHJvcHMucm9sZSA9ICd0YWInO1xuXG4gICAgY29uc3QgY29udGV4dENvbnRyb2xsZXJJZCA9IG5hdkNvbnRleHQuZ2V0Q29udHJvbGxlcklkKGtleSA/PyBudWxsKTtcbiAgICBjb25zdCBjb250ZXh0Q29udHJvbGxlZElkID0gbmF2Q29udGV4dC5nZXRDb250cm9sbGVkSWQoa2V5ID8/IG51bGwpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByb3BzW2RhdGFBdHRyKCdldmVudC1rZXknKV0gPSBrZXk7XG5cbiAgICBwcm9wcy5pZCA9IGNvbnRleHRDb250cm9sbGVySWQgfHwgaWQ7XG4gICAgcHJvcHNbJ2FyaWEtY29udHJvbHMnXSA9IGNvbnRleHRDb250cm9sbGVkSWQ7XG5cbiAgICBpc0FjdGl2ZSA9XG4gICAgICBhY3RpdmUgPT0gbnVsbCAmJiBrZXkgIT0gbnVsbCA/IG5hdkNvbnRleHQuYWN0aXZlS2V5ID09PSBrZXkgOiBhY3RpdmU7XG4gIH1cblxuICBpZiAocHJvcHMucm9sZSA9PT0gJ3RhYicpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHByb3BzLnRhYkluZGV4ID0gLTE7XG4gICAgICBwcm9wc1snYXJpYS1kaXNhYmxlZCddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBwcm9wc1snYXJpYS1zZWxlY3RlZCddID0gaXNBY3RpdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLnRhYkluZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgcHJvcHMub25DbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgIG9uQ2xpY2s/LihlKTtcblxuICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnRPblNlbGVjdCAmJiAhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICBwYXJlbnRPblNlbGVjdD8uKGtleSwgZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3Byb3BzLCB7IGlzQWN0aXZlIH1dIGFzIGNvbnN0O1xufVxuXG5jb25zdCBOYXZJdGVtOiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDxcbiAgdHlwZW9mIEJ1dHRvbixcbiAgTmF2SXRlbVByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgTmF2SXRlbVByb3BzPihcbiAgKHsgYXM6IENvbXBvbmVudCA9IEJ1dHRvbiwgZXZlbnRLZXksIGhyZWYsIC4uLm9wdGlvbnMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgW3Byb3BzLCBtZXRhXSA9IHVzZU5hdkl0ZW0oe1xuICAgICAga2V5OiBtYWtlRXZlbnRLZXkoZXZlbnRLZXksIGhyZWYpLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcm9wc1tkYXRhQXR0cignYWN0aXZlJyldID0gbWV0YS5pc0FjdGl2ZTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5vcHRpb25zfSB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPjtcbiAgfSxcbik7XG5cbk5hdkl0ZW0uZGlzcGxheU5hbWUgPSAnTmF2SXRlbSc7XG5OYXZJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiIsImltcG9ydCBxc2EgZnJvbSAnZG9tLWhlbHBlcnMvcXVlcnlTZWxlY3RvckFsbCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZU1lcmdlZFJlZnMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmcyc7XG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCB7XG4gIEV2ZW50S2V5LFxuICBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCxcbiAgU2VsZWN0Q2FsbGJhY2ssXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZGF0YUF0dHIsIGRhdGFQcm9wIH0gZnJvbSAnLi9EYXRhS2V5JztcbmltcG9ydCBOYXZJdGVtLCB7IFVzZU5hdkl0ZW1PcHRpb25zLCBOYXZJdGVtUHJvcHMgfSBmcm9tICcuL05hdkl0ZW0nO1xuXG5leHBvcnQgdHlwZSB7IFVzZU5hdkl0ZW1PcHRpb25zLCBOYXZJdGVtUHJvcHMgfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2UHJvcHNcbiAgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiwgJ29uU2VsZWN0Jz4ge1xuICBhY3RpdmVLZXk/OiBFdmVudEtleTtcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZTtcbiAgb25TZWxlY3Q/OiBTZWxlY3RDYWxsYmFjaztcbn1cblxuY29uc3QgRVZFTlRfS0VZX0FUVFIgPSBkYXRhQXR0cignZXZlbnQta2V5Jyk7XG5cbmNvbnN0IE5hdjogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8J2RpdicsIE5hdlByb3BzPiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxFbGVtZW50LFxuICBOYXZQcm9wc1xuPihcbiAgKFxuICAgIHtcbiAgICAgIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgICAgIGFzOiBDb21wb25lbnQgPSAnZGl2JyxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5LFxuICAgICAgcm9sZSxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIC4uLnByb3BzXG4gICAgfSxcbiAgICByZWYsXG4gICkgPT4ge1xuICAgIC8vIEEgcmVmIGFuZCBmb3JjZVVwZGF0ZSBmb3IgcmVmb2N1cywgYi9jIHdlIG9ubHkgd2FudCB0byB0cmlnZ2VyIHdoZW4gbmVlZGVkXG4gICAgLy8gYW5kIGRvbid0IHdhbnQgdG8gcmVzZXQgdGhlIHNldCBpbiB0aGUgZWZmZWN0XG4gICAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICAgIGNvbnN0IG5lZWRzUmVmb2N1c1JlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBwYXJlbnRPblNlbGVjdCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICAgIGNvbnN0IHRhYkNvbnRleHQgPSB1c2VDb250ZXh0KFRhYkNvbnRleHQpO1xuXG4gICAgbGV0IGdldENvbnRyb2xsZWRJZCwgZ2V0Q29udHJvbGxlcklkO1xuXG4gICAgaWYgKHRhYkNvbnRleHQpIHtcbiAgICAgIHJvbGUgPSByb2xlIHx8ICd0YWJsaXN0JztcbiAgICAgIGFjdGl2ZUtleSA9IHRhYkNvbnRleHQuYWN0aXZlS2V5O1xuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBkdXBsaWNhdGUgdGhlc2U/XG4gICAgICBnZXRDb250cm9sbGVkSWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZWRJZDtcbiAgICAgIGdldENvbnRyb2xsZXJJZCA9IHRhYkNvbnRleHQuZ2V0Q29udHJvbGxlcklkO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3ROb2RlID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcblxuICAgIGNvbnN0IGdldE5leHRBY3RpdmVUYWIgPSAob2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMaXN0Tm9kZSA9IGxpc3ROb2RlLmN1cnJlbnQ7XG4gICAgICBpZiAoIWN1cnJlbnRMaXN0Tm9kZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gcXNhKFxuICAgICAgICBjdXJyZW50TGlzdE5vZGUsXG4gICAgICAgIGBbJHtFVkVOVF9LRVlfQVRUUn1dOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSlgLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgYWN0aXZlQ2hpbGQgPSBjdXJyZW50TGlzdE5vZGUucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgICAgICdbYXJpYS1zZWxlY3RlZD10cnVlXScsXG4gICAgICApO1xuICAgICAgaWYgKCFhY3RpdmVDaGlsZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihhY3RpdmVDaGlsZCk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gbnVsbDtcblxuICAgICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgb2Zmc2V0O1xuICAgICAgaWYgKG5leHRJbmRleCA+PSBpdGVtcy5sZW5ndGgpIG5leHRJbmRleCA9IDA7XG4gICAgICBpZiAobmV4dEluZGV4IDwgMCkgbmV4dEluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiBpdGVtc1tuZXh0SW5kZXhdO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoa2V5OiBzdHJpbmcgfCBudWxsLCBldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgb25TZWxlY3Q/LihrZXksIGV2ZW50KTtcbiAgICAgIHBhcmVudE9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgICBvbktleURvd24/LihldmVudCk7XG5cbiAgICAgIGlmICghdGFiQ29udGV4dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXh0QWN0aXZlQ2hpbGQ7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlVGFiKC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgbmV4dEFjdGl2ZUNoaWxkID0gZ2V0TmV4dEFjdGl2ZVRhYigxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRBY3RpdmVDaGlsZCkgcmV0dXJuO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBoYW5kbGVTZWxlY3QoXG4gICAgICAgIG5leHRBY3RpdmVDaGlsZC5kYXRhc2V0W2RhdGFQcm9wKCdFdmVudEtleScpXSB8fCBudWxsLFxuICAgICAgICBldmVudCxcbiAgICAgICk7XG5cbiAgICAgIG5lZWRzUmVmb2N1c1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAobGlzdE5vZGUuY3VycmVudCAmJiBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBhY3RpdmVDaGlsZCA9IGxpc3ROb2RlLmN1cnJlbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgICAgICAgYFske0VWRU5UX0tFWV9BVFRSfV1bYXJpYS1zZWxlY3RlZD10cnVlXWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgYWN0aXZlQ2hpbGQ/LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIG5lZWRzUmVmb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzKHJlZiwgbGlzdE5vZGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgPE5hdkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgcm9sZSwgLy8gdXNlZCBieSBOYXZMaW5rIHRvIGRldGVybWluZSBpdCdzIHJvbGVcbiAgICAgICAgICAgIGFjdGl2ZUtleTogbWFrZUV2ZW50S2V5KGFjdGl2ZUtleSksXG4gICAgICAgICAgICBnZXRDb250cm9sbGVkSWQ6IGdldENvbnRyb2xsZWRJZCB8fCBub29wLFxuICAgICAgICAgICAgZ2V0Q29udHJvbGxlcklkOiBnZXRDb250cm9sbGVySWQgfHwgbm9vcCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgcmVmPXttZXJnZWRSZWZ9XG4gICAgICAgICAgICByb2xlPXtyb2xlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfSxcbik7XG5cbk5hdi5kaXNwbGF5TmFtZSA9ICdOYXYnO1xuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihOYXYsIHsgSXRlbTogTmF2SXRlbSB9KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIE5vb3BUcmFuc2l0aW9uKHtcbiAgY2hpbGRyZW4sXG4gIGluOiBpblByb3AsXG4gIG1vdW50T25FbnRlcixcbiAgdW5tb3VudE9uRXhpdCxcbn06IFRyYW5zaXRpb25Qcm9wcykge1xuICBjb25zdCBoYXNFbnRlcmVkUmVmID0gdXNlUmVmKGluUHJvcCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5Qcm9wKSBoYXNFbnRlcmVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbaW5Qcm9wXSk7XG5cbiAgaWYgKGluUHJvcCkgcmV0dXJuIGNoaWxkcmVuO1xuXG4gIC8vIG5vdCBpblxuICAvL1xuICAvLyBpZiAoIW1vdW50T25FbnRlciAmJiAhdW5tb3VudE9uRXhpdCkge1xuICAvLyAgIHJldHVybiBjaGlsZHJlbjtcbiAgLy8gfVxuICBpZiAodW5tb3VudE9uRXhpdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICghaGFzRW50ZXJlZFJlZi5jdXJyZW50ICYmIG1vdW50T25FbnRlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb29wVHJhbnNpdGlvbjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICcuL1RhYkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHtcbiAgRXZlbnRLZXksXG4gIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50LFxuICBUcmFuc2l0aW9uQ2FsbGJhY2tzLFxuICBUcmFuc2l0aW9uVHlwZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgTm9vcFRyYW5zaXRpb24gZnJvbSAnLi9Ob29wVHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUGFuZWxQcm9wc1xuICBleHRlbmRzIFRyYW5zaXRpb25DYWxsYmFja3MsXG4gICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgYXM6IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBldmVudEtleT86IEV2ZW50S2V5O1xuICBhY3RpdmU/OiBib29sZWFuO1xuICB0cmFuc2l0aW9uPzogVHJhbnNpdGlvblR5cGU7XG4gIG1vdW50T25FbnRlcj86IGJvb2xlYW47XG4gIHVubW91bnRPbkV4aXQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEEga2V5IHRoYXQgYXNzb2NpYXRlcyB0aGUgYFRhYlBhbmVsYCB3aXRoIGl0J3MgY29udHJvbGxpbmcgYE5hdkxpbmtgLlxuICAgKi9cbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBUYWJQYW5lbCwgdGhpcyBpcyBnZW5lcmFsbHkgY29udHJvbGxlZCBieSBhXG4gICAqIFRhYkNvbnRhaW5lci5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVzZSBhbmltYXRpb24gd2hlbiBzaG93aW5nIG9yIGhpZGluZyBgPFRhYlBhbmVsPmBzLiBEZWZhdWx0cyB0byBgPEZhZGU+YFxuICAgKiBhbmltYXRpb24sIGVsc2UgdXNlIGBmYWxzZWAgdG8gZGlzYWJsZSBvciBhIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcbiAgICogYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudC5cbiAgICovXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZWxlbWVudFR5cGVdKSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkVudGVyIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkVudGVyaW5nIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkVudGVyZWQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FeGl0IGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRXhpdGluZyBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkV4aXRlZCBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBmaXJzdCBcImVudGVyXCIgdHJhbnNpdGlvbiB0byBtb3VudCB0aGUgdGFiIChhZGQgaXQgdG8gdGhlIERPTSlcbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIHRhYiAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiBpdCBpcyBubyBsb25nZXIgdmlzaWJsZVxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEBpZ25vcmUgKiAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQGlnbm9yZSAqICovXG4gICdhcmlhLWxhYmVsbGVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZnVuY3Rpb24gdXNlVGFiQ29udGV4dChwcm9wczogVGFiUGFuZWxQcm9wcykge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUYWJDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHJldHVybiBwcm9wcztcblxuICBjb25zdCB7IGFjdGl2ZUtleSwgZ2V0Q29udHJvbGxlZElkLCBnZXRDb250cm9sbGVySWQsIC4uLnJlc3QgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHNob3VsZFRyYW5zaXRpb24gPVxuICAgIHByb3BzLnRyYW5zaXRpb24gIT09IGZhbHNlICYmIHJlc3QudHJhbnNpdGlvbiAhPT0gZmFsc2U7XG5cbiAgY29uc3Qga2V5ID0gbWFrZUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIGFjdGl2ZTpcbiAgICAgIHByb3BzLmFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICAgID8gbWFrZUV2ZW50S2V5KGFjdGl2ZUtleSkgPT09IGtleVxuICAgICAgICA6IHByb3BzLmFjdGl2ZSxcbiAgICBpZDogZ2V0Q29udHJvbGxlZElkKHByb3BzLmV2ZW50S2V5ISksXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGdldENvbnRyb2xsZXJJZChwcm9wcy5ldmVudEtleSEpLFxuICAgIHRyYW5zaXRpb246IHNob3VsZFRyYW5zaXRpb24gJiYgKHByb3BzLnRyYW5zaXRpb24gfHwgcmVzdC50cmFuc2l0aW9uKSxcbiAgICBtb3VudE9uRW50ZXI6XG4gICAgICBwcm9wcy5tb3VudE9uRW50ZXIgIT0gbnVsbCA/IHByb3BzLm1vdW50T25FbnRlciA6IHJlc3QubW91bnRPbkVudGVyLFxuICAgIHVubW91bnRPbkV4aXQ6XG4gICAgICBwcm9wcy51bm1vdW50T25FeGl0ICE9IG51bGwgPyBwcm9wcy51bm1vdW50T25FeGl0IDogcmVzdC51bm1vdW50T25FeGl0LFxuICB9O1xufVxuXG5jb25zdCBUYWJQYW5lbDogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gICdkaXYnLFxuICBUYWJQYW5lbFByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgVGFiUGFuZWxQcm9wcz4oKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBvbkVudGVyLFxuICAgIG9uRW50ZXJpbmcsXG4gICAgb25FbnRlcmVkLFxuICAgIG9uRXhpdCxcbiAgICBvbkV4aXRpbmcsXG4gICAgb25FeGl0ZWQsXG4gICAgbW91bnRPbkVudGVyLFxuICAgIHVubW91bnRPbkV4aXQsXG4gICAgdHJhbnNpdGlvbjogVHJhbnNpdGlvbiA9IE5vb3BUcmFuc2l0aW9uLFxuICAgIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gICAgZXZlbnRLZXk6IF8sXG4gICAgLi4ucmVzdFxuICB9ID0gdXNlVGFiQ29udGV4dChwcm9wcyk7XG5cbiAgaWYgKCFhY3RpdmUgJiYgIVRyYW5zaXRpb24gJiYgdW5tb3VudE9uRXhpdCkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IHBhbmUgPSAoXG4gICAgPENvbXBvbmVudFxuICAgICAgey4uLnJlc3R9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICBoaWRkZW49eyFhY3RpdmV9XG4gICAgICBhcmlhLWhpZGRlbj17IWFjdGl2ZX1cbiAgICAvPlxuICApO1xuXG4gIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgcGFuZSA9IChcbiAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgIGluPXthY3RpdmV9XG4gICAgICAgIG9uRW50ZXI9e29uRW50ZXJ9XG4gICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgIG9uRW50ZXJlZD17b25FbnRlcmVkfVxuICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgIG9uRXhpdGVkPXtvbkV4aXRlZH1cbiAgICAgICAgbW91bnRPbkVudGVyPXttb3VudE9uRW50ZXJ9XG4gICAgICAgIHVubW91bnRPbkV4aXQ9e3VubW91bnRPbkV4aXR9XG4gICAgICA+XG4gICAgICAgIHtwYW5lfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICk7XG4gIH1cbiAgLy8gV2UgcHJvdmlkZSBhbiBlbXB0eSB0aGUgVGFiQ29udGV4dCBzbyBgPE5hdj5gcyBpbiBgPFRhYlBhbmVsPmBzIGRvbid0XG4gIC8vIGNvbmZsaWN0IHdpdGggdGhlIHRvcCBsZXZlbCBvbmUuXG4gIHJldHVybiAoXG4gICAgPFRhYkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuICAgICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgICAge3BhbmV9XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvVGFiQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0pO1xuXG5UYWJQYW5lbC5kaXNwbGF5TmFtZSA9ICdUYWJQYW5lbCc7XG5UYWJQYW5lbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlBhbmVsO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuaW1wb3J0IHsgdXNlU1NSU2FmZUlkIH0gZnJvbSAnLi9zc3InO1xuXG5pbXBvcnQgVGFiQ29udGV4dCwgeyBUYWJDb250ZXh0VHlwZSB9IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQgZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgeyBFdmVudEtleSwgU2VsZWN0Q2FsbGJhY2ssIFRyYW5zaXRpb25UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgVGFiUGFuZWwsIHsgVGFiUGFuZWxQcm9wcyB9IGZyb20gJy4vVGFiUGFuZWwnO1xuXG5leHBvcnQgdHlwZSB7IFRhYlBhbmVsUHJvcHMgfTtcbmV4cG9ydCBpbnRlcmZhY2UgVGFic1Byb3BzIGV4dGVuZHMgUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48dW5rbm93bj4ge1xuICBpZD86IHN0cmluZztcbiAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xuICBtb3VudE9uRW50ZXI/OiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbiAgZ2VuZXJhdGVDaGlsZElkPzogKGV2ZW50S2V5OiBFdmVudEtleSwgdHlwZTogJ3RhYicgfCAncGFuZScpID0+IHN0cmluZztcbiAgb25TZWxlY3Q/OiBTZWxlY3RDYWxsYmFjaztcbiAgYWN0aXZlS2V5PzogRXZlbnRLZXk7XG4gIGRlZmF1bHRBY3RpdmVLZXk/OiBFdmVudEtleTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldHMgYSBkZWZhdWx0IGFuaW1hdGlvbiBzdHJhdGVneSBmb3IgYWxsIGNoaWxkcmVuIGA8VGFiUGFuZT5gcy5cbiAgICogVXNlIGEgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7e1RyYW5zaXRpb24gfCBmYWxzZX19XG4gICAqIEBkZWZhdWx0IHtGYWRlfVxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pLFxuICAgIFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgXSksXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBmaXJzdCBcImVudGVyXCIgdHJhbnNpdGlvbiB0byBtb3VudCB0YWJzIChhZGQgdGhlbSB0byB0aGUgRE9NKVxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0YWJzIChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIHRoZXkgYXJlIG5vIGxvbmdlciB2aXNpYmxlXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGBldmVudEtleWAgYW5kIGB0eXBlYCBhbmQgcmV0dXJucyBhIHVuaXF1ZSBpZCBmb3JcbiAgICogY2hpbGQgdGFiIGA8TmF2SXRlbT5gcyBhbmQgYDxUYWJQYW5lPmBzLiBUaGUgZnVuY3Rpb24gX211c3RfIGJlIGEgcHVyZVxuICAgKiBmdW5jdGlvbiwgbWVhbmluZyBpdCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgX3NhbWVfIGlkIGZvciB0aGUgc2FtZSBzZXRcbiAgICogb2YgaW5wdXRzLiBUaGUgZGVmYXVsdCB2YWx1ZSByZXF1aXJlcyB0aGF0IGFuIGBpZGAgdG8gYmUgc2V0IGZvciB0aGVcbiAgICogYDxUYWJDb250YWluZXI+YC5cbiAgICpcbiAgICogVGhlIGB0eXBlYCBhcmd1bWVudCB3aWxsIGVpdGhlciBiZSBgXCJ0YWJcImAgb3IgYFwicGFuZVwiYC5cbiAgICpcbiAgICogQGRlZmF1bHRWYWx1ZSAoZXZlbnRLZXksIHR5cGUpID0+IGAke3Byb3BzLmlkfS0ke3R5cGV9LSR7ZXZlbnRLZXl9YFxuICAgKi9cbiAgZ2VuZXJhdGVDaGlsZElkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGEgdGFiIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIGFjdGl2ZUtleVxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgYGV2ZW50S2V5YCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgb25TZWxlY3RcbiAgICovXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuY29uc3QgVGFicyA9IChwcm9wczogVGFic1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZDogdXNlcklkLFxuICAgIGdlbmVyYXRlQ2hpbGRJZDogZ2VuZXJhdGVDdXN0b21DaGlsZElkLFxuICAgIG9uU2VsZWN0OiBwcm9wc09uU2VsZWN0LFxuICAgIGFjdGl2ZUtleTogcHJvcHNBY3RpdmVLZXksXG4gICAgZGVmYXVsdEFjdGl2ZUtleSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0LFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2FjdGl2ZUtleSwgb25TZWxlY3RdID0gdXNlVW5jb250cm9sbGVkUHJvcChcbiAgICBwcm9wc0FjdGl2ZUtleSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5LFxuICAgIHByb3BzT25TZWxlY3QsXG4gICk7XG5cbiAgY29uc3QgaWQgPSB1c2VTU1JTYWZlSWQodXNlcklkKTtcblxuICBjb25zdCBnZW5lcmF0ZUNoaWxkSWQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZW5lcmF0ZUN1c3RvbUNoaWxkSWQgfHxcbiAgICAgICgoa2V5OiBFdmVudEtleSwgdHlwZTogc3RyaW5nKSA9PiAoaWQgPyBgJHtpZH0tJHt0eXBlfS0ke2tleX1gIDogbnVsbCkpLFxuICAgIFtpZCwgZ2VuZXJhdGVDdXN0b21DaGlsZElkXSxcbiAgKTtcblxuICBjb25zdCB0YWJDb250ZXh0OiBUYWJDb250ZXh0VHlwZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5LFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIG1vdW50T25FbnRlcjogbW91bnRPbkVudGVyIHx8IGZhbHNlLFxuICAgICAgdW5tb3VudE9uRXhpdDogdW5tb3VudE9uRXhpdCB8fCBmYWxzZSxcbiAgICAgIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkpID0+IGdlbmVyYXRlQ2hpbGRJZChrZXksICd0YWJwYW5lJyksXG4gICAgICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBnZW5lcmF0ZUNoaWxkSWQoa2V5LCAndGFiJyksXG4gICAgfSksXG4gICAgW1xuICAgICAgb25TZWxlY3QsXG4gICAgICBhY3RpdmVLZXksXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgbW91bnRPbkVudGVyLFxuICAgICAgdW5tb3VudE9uRXhpdCxcbiAgICAgIGdlbmVyYXRlQ2hpbGRJZCxcbiAgICBdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RhYkNvbnRleHR9PlxuICAgICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtvblNlbGVjdCB8fCBudWxsfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RhYkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5UYWJzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRhYnMuUGFuZWwgPSBUYWJQYW5lbDtcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iLCJpbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5pbXBvcnQgeyB1c2VEcm9wZG93bk1lbnUgfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1c2VEcm9wZG93blRvZ2dsZSB9IGZyb20gJy4vRHJvcGRvd25Ub2dnbGUnO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25JdGVtIH0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSBmcm9tICcuL3VzZVJvb3RDbG9zZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcbmltcG9ydCBOYXZJdGVtLCB7IHVzZU5hdkl0ZW0gfSBmcm9tICcuL05hdkl0ZW0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuaW1wb3J0IFRhYlBhbmVsIGZyb20gJy4vVGFiUGFuZWwnO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIERyb3Bkb3duLFxuICB1c2VEcm9wZG93bk1lbnUsXG4gIHVzZURyb3Bkb3duVG9nZ2xlLFxuICB1c2VEcm9wZG93bkl0ZW0sXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgdXNlTmF2SXRlbSxcbiAgTW9kYWwsXG4gIE92ZXJsYXksXG4gIFBvcnRhbCxcbiAgdXNlUm9vdENsb3NlLFxuICBUYWJzLFxuICBUYWJQYW5lbCxcbn07XG5cbmV4cG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgdHlwZSB7XG4gIERyb3Bkb3duUHJvcHMsXG4gIERyb3Bkb3duTWVudVByb3BzLFxuICBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSxcbiAgVXNlRHJvcGRvd25NZW51T3B0aW9ucyxcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgRHJvcGRvd25JdGVtUHJvcHMsXG59IGZyb20gJy4vRHJvcGRvd24nO1xuZXhwb3J0IHR5cGUgeyBOYXZJdGVtUHJvcHMsIFVzZU5hdkl0ZW1PcHRpb25zLCBOYXZQcm9wcyB9IGZyb20gJy4vTmF2JztcbmV4cG9ydCB0eXBlIHsgTW9kYWxQcm9wcyB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHR5cGUgeyBPdmVybGF5UHJvcHMgfSBmcm9tICcuL092ZXJsYXknO1xuZXhwb3J0IHR5cGUgeyBQb3J0YWxQcm9wcyB9IGZyb20gJy4vUG9ydGFsJztcbmV4cG9ydCB0eXBlIHsgVGFic1Byb3BzLCBUYWJQYW5lbFByb3BzIH0gZnJvbSAnLi9UYWJzJztcbiIsImltcG9ydCB7IFVzZVBvcHBlck9wdGlvbnMsIE9mZnNldCwgUGxhY2VtZW50LCBNb2RpZmllcnMgfSBmcm9tICcuL3VzZVBvcHBlcic7XG5cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgZmxpcD86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgYWxpZ25FbmQ/OiBib29sZWFuO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgY29udGFpbmVyUGFkZGluZz86IG51bWJlcjtcbiAgYXJyb3dFbGVtZW50PzogRWxlbWVudCB8IG51bGw7XG4gIGVuYWJsZUV2ZW50cz86IGJvb2xlYW47XG4gIG9mZnNldD86IE9mZnNldDtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICBwb3BwZXJDb25maWc/OiBVc2VQb3BwZXJPcHRpb25zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJNYXAobW9kaWZpZXJzOiBNb2RpZmllcnMgfCB1bmRlZmluZWQpIHtcbiAgY29uc3QgcmVzdWx0OiBNb2RpZmllcnMgPSB7fTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgIHJldHVybiBtb2RpZmllcnMgfHwgcmVzdWx0O1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBtb2RpZmllcnM/LmZvckVhY2goKG0pID0+IHtcbiAgICByZXN1bHRbbS5uYW1lIV0gPSBtO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJBcnJheShtYXA6IE1vZGlmaWVycyB8IHVuZGVmaW5lZCA9IHt9KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcCkpIHJldHVybiBtYXA7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtYXApLm1hcCgoaykgPT4ge1xuICAgIG1hcFtrXS5uYW1lID0gaztcbiAgICByZXR1cm4gbWFwW2tdO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gIGVuYWJsZWQsXG4gIGVuYWJsZUV2ZW50cyxcbiAgcGxhY2VtZW50LFxuICBmbGlwLFxuICBvZmZzZXQsXG4gIGZpeGVkLFxuICBjb250YWluZXJQYWRkaW5nLFxuICBhcnJvd0VsZW1lbnQsXG4gIHBvcHBlckNvbmZpZyA9IHt9LFxufTogQ29uZmlnKTogVXNlUG9wcGVyT3B0aW9ucyB7XG4gIGNvbnN0IG1vZGlmaWVycyA9IHRvTW9kaWZpZXJNYXAocG9wcGVyQ29uZmlnLm1vZGlmaWVycyk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgcGxhY2VtZW50LFxuICAgIGVuYWJsZWQsXG4gICAgc3RyYXRlZ3k6IGZpeGVkID8gJ2ZpeGVkJyA6IHBvcHBlckNvbmZpZy5zdHJhdGVneSxcbiAgICBtb2RpZmllcnM6IHRvTW9kaWZpZXJBcnJheSh7XG4gICAgICAuLi5tb2RpZmllcnMsXG4gICAgICBldmVudExpc3RlbmVyczoge1xuICAgICAgICBlbmFibGVkOiBlbmFibGVFdmVudHMsXG4gICAgICB9LFxuICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgIC4uLm1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3csXG4gICAgICAgIG9wdGlvbnM6IGNvbnRhaW5lclBhZGRpbmdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogY29udGFpbmVyUGFkZGluZyxcbiAgICAgICAgICAgICAgLi4ubW9kaWZpZXJzLnByZXZlbnRPdmVyZmxvdz8ub3B0aW9ucyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3c/Lm9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgLi4ubW9kaWZpZXJzLm9mZnNldD8ub3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICAuLi5tb2RpZmllcnMuYXJyb3csXG4gICAgICAgIGVuYWJsZWQ6ICEhYXJyb3dFbGVtZW50LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgLi4ubW9kaWZpZXJzLmFycm93Py5vcHRpb25zLFxuICAgICAgICAgIGVsZW1lbnQ6IGFycm93RWxlbWVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmbGlwOiB7XG4gICAgICAgIGVuYWJsZWQ6ICEhZmxpcCxcbiAgICAgICAgLi4ubW9kaWZpZXJzLmZsaXAsXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xufVxuIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGZpbmQoaXRlciwgdGFyLCBrZXkpIHtcblx0Zm9yIChrZXkgb2YgaXRlci5rZXlzKCkpIHtcblx0XHRpZiAoZGVxdWFsKGtleSwgdGFyKSkgcmV0dXJuIGtleTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVxdWFsKGZvbywgYmFyKSB7XG5cdHZhciBjdG9yLCBsZW4sIHRtcDtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBTZXQpIHtcblx0XHRcdGlmIChmb28uc2l6ZSAhPT0gYmFyLnNpemUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZW4gb2YgZm9vKSB7XG5cdFx0XHRcdHRtcCA9IGxlbjtcblx0XHRcdFx0aWYgKHRtcCAmJiB0eXBlb2YgdG1wID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRtcCA9IGZpbmQoYmFyLCB0bXApO1xuXHRcdFx0XHRcdGlmICghdG1wKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFiYXIuaGFzKHRtcCkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBNYXApIHtcblx0XHRcdGlmIChmb28uc2l6ZSAhPT0gYmFyLnNpemUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZW4gb2YgZm9vKSB7XG5cdFx0XHRcdHRtcCA9IGxlblswXTtcblx0XHRcdFx0aWYgKHRtcCAmJiB0eXBlb2YgdG1wID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRtcCA9IGZpbmQoYmFyLCB0bXApO1xuXHRcdFx0XHRcdGlmICghdG1wKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFkZXF1YWwobGVuWzFdLCBiYXIuZ2V0KHRtcCkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcblx0XHRcdGZvbyA9IG5ldyBVaW50OEFycmF5KGZvbyk7XG5cdFx0XHRiYXIgPSBuZXcgVWludDhBcnJheShiYXIpO1xuXHRcdH0gZWxzZSBpZiAoY3RvciA9PT0gRGF0YVZpZXcpIHtcblx0XHRcdGlmICgobGVuPWZvby5ieXRlTGVuZ3RoKSA9PT0gYmFyLmJ5dGVMZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGZvby5nZXRJbnQ4KGxlbikgPT09IGJhci5nZXRJbnQ4KGxlbikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5QnVmZmVyLmlzVmlldyhmb28pKSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb29bbGVuXSA9PT0gYmFyW2xlbl0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdG9yIHx8IHR5cGVvZiBmb28gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRsZW4gPSAwO1xuXHRcdFx0Zm9yIChjdG9yIGluIGZvbykge1xuXHRcdFx0XHRpZiAoaGFzLmNhbGwoZm9vLCBjdG9yKSAmJiArK2xlbiAmJiAhaGFzLmNhbGwoYmFyLCBjdG9yKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoIShjdG9yIGluIGJhcikgfHwgIWRlcXVhbChmb29bY3Rvcl0sIGJhcltjdG9yXSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhiYXIpLmxlbmd0aCA9PT0gbGVuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmb28gIT09IGZvbyAmJiBiYXIgIT09IGJhcjtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU1vdW50ZWQgZnJvbSAnLi91c2VNb3VudGVkJztcblxuZnVuY3Rpb24gdXNlU2FmZVN0YXRlKHN0YXRlKSB7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VNb3VudGVkKCk7XG4gIHJldHVybiBbc3RhdGVbMF0sIHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXh0U3RhdGUpIHtcbiAgICBpZiAoIWlzTW91bnRlZCgpKSByZXR1cm47XG4gICAgcmV0dXJuIHN0YXRlWzFdKG5leHRTdGF0ZSk7XG4gIH0sIFtpc01vdW50ZWQsIHN0YXRlWzFdXSldO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTYWZlU3RhdGU7IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCBhcnJvdyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2Fycm93JztcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcyc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycyc7XG5pbXBvcnQgZmxpcCBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAnO1xuaW1wb3J0IGhpZGUgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQnO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzJztcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cnO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcyc7XG5pbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IgfSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWJhc2UnO1xuXG4vLyBGb3IgdGhlIGNvbW1vbiBKUyBidWlsZCB3ZSB3aWxsIHR1cm4gdGhpcyBmaWxlIGludG8gYSBidW5kbGUgd2l0aCBubyBpbXBvcnRzLlxuLy8gVGhpcyBpcyBiL2MgdGhlIFBvcHBlciBsaWIgaXMgYWxsIGVzbSBmaWxlcywgYW5kIHdvdWxkIGJyZWFrIGluIGEgY29tbW9uIGpzIG9ubHkgZW52aXJvbm1lbnRcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3BwZXIgPSBwb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBbXG4gICAgaGlkZSxcbiAgICBwb3BwZXJPZmZzZXRzLFxuICAgIGNvbXB1dGVTdHlsZXMsXG4gICAgZXZlbnRMaXN0ZW5lcnMsXG4gICAgb2Zmc2V0LFxuICAgIGZsaXAsXG4gICAgcHJldmVudE92ZXJmbG93LFxuICAgIGFycm93LFxuICBdLFxufSk7XG5cbmV4cG9ydCB7IHBsYWNlbWVudHMgfTtcbiIsImltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSAnZGVxdWFsJztcbmltcG9ydCB1c2VTYWZlU3RhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlU2FmZVN0YXRlJztcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gJy4vcG9wcGVyJztcblxuY29uc3QgZGlzYWJsZWRBcHBseVN0eWxlc01vZGlmaWVyID0ge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiBmYWxzZSxcbiAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbn07XG5cbi8vIHVudGlsIGRvY2pzIHN1cHBvcnRzIHR5cGUgZXhwb3J0cy4uLlxuZXhwb3J0IHR5cGUgTW9kaWZpZXI8TmFtZSwgT3B0aW9ucz4gPSBQb3BwZXIuTW9kaWZpZXI8TmFtZSwgT3B0aW9ucz47XG5leHBvcnQgdHlwZSBPcHRpb25zID0gUG9wcGVyLk9wdGlvbnM7XG5leHBvcnQgdHlwZSBJbnN0YW5jZSA9IFBvcHBlci5JbnN0YW5jZTtcbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9IFBvcHBlci5QbGFjZW1lbnQ7XG5leHBvcnQgdHlwZSBWaXJ0dWFsRWxlbWVudCA9IFBvcHBlci5WaXJ0dWFsRWxlbWVudDtcbmV4cG9ydCB0eXBlIFN0YXRlID0gUG9wcGVyLlN0YXRlO1xuXG5leHBvcnQgdHlwZSBPZmZzZXRWYWx1ZSA9IFtcbiAgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbl07XG5leHBvcnQgdHlwZSBPZmZzZXRGdW5jdGlvbiA9IChkZXRhaWxzOiB7XG4gIHBvcHBlcjogUG9wcGVyLlJlY3Q7XG4gIHJlZmVyZW5jZTogUG9wcGVyLlJlY3Q7XG4gIHBsYWNlbWVudDogUGxhY2VtZW50O1xufSkgPT4gT2Zmc2V0VmFsdWU7XG5cbmV4cG9ydCB0eXBlIE9mZnNldCA9IE9mZnNldEZ1bmN0aW9uIHwgT2Zmc2V0VmFsdWU7XG5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyTWFwID0gUmVjb3JkPHN0cmluZywgUGFydGlhbDxNb2RpZmllcjxhbnksIGFueT4+PjtcbmV4cG9ydCB0eXBlIE1vZGlmaWVycyA9XG4gIHwgUG9wcGVyLk9wdGlvbnNbJ21vZGlmaWVycyddXG4gIHwgUmVjb3JkPHN0cmluZywgUGFydGlhbDxNb2RpZmllcjxhbnksIGFueT4+PjtcblxuZXhwb3J0IHR5cGUgVXNlUG9wcGVyT3B0aW9ucyA9IE9taXQ8XG4gIE9wdGlvbnMsXG4gICdtb2RpZmllcnMnIHwgJ3BsYWNlbWVudCcgfCAnc3RyYXRlZ3knXG4+ICYge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogT3B0aW9uc1sncGxhY2VtZW50J107XG4gIHN0cmF0ZWd5PzogT3B0aW9uc1snc3RyYXRlZ3knXTtcbiAgbW9kaWZpZXJzPzogT3B0aW9uc1snbW9kaWZpZXJzJ107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVBvcHBlclN0YXRlIHtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIHVwZGF0ZTogKCkgPT4gdm9pZDtcbiAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQ7XG4gIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+O1xuICBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4+O1xuICBzdGF0ZT86IFN0YXRlO1xufVxuXG5jb25zdCBhcmlhRGVzY3JpYmVkQnlNb2RpZmllcjogTW9kaWZpZXI8J2FyaWFEZXNjcmliZWRCeScsIHVuZGVmaW5lZD4gPSB7XG4gIG5hbWU6ICdhcmlhRGVzY3JpYmVkQnknLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICBlZmZlY3Q6ICh7IHN0YXRlIH0pID0+ICgpID0+IHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBzdGF0ZS5lbGVtZW50cztcbiAgICBpZiAoJ3JlbW92ZUF0dHJpYnV0ZScgaW4gcmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBpZHMgPSAocmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpIHx8ICcnKVxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAuZmlsdGVyKChpZCkgPT4gaWQudHJpbSgpICE9PSBwb3BwZXIuaWQpO1xuXG4gICAgICBpZiAoIWlkcy5sZW5ndGgpIHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIGVsc2UgcmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGlkcy5qb2luKCcsJykpO1xuICAgIH1cbiAgfSxcbiAgZm46ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBzdGF0ZS5lbGVtZW50cztcblxuICAgIGNvbnN0IHJvbGUgPSBwb3BwZXIuZ2V0QXR0cmlidXRlKCdyb2xlJyk/LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAocG9wcGVyLmlkICYmIHJvbGUgPT09ICd0b29sdGlwJyAmJiAnc2V0QXR0cmlidXRlJyBpbiByZWZlcmVuY2UpIHtcbiAgICAgIGNvbnN0IGlkcyA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIGlmIChpZHMgJiYgaWRzLnNwbGl0KCcsJykuaW5kZXhPZihwb3BwZXIuaWQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JyxcbiAgICAgICAgaWRzID8gYCR7aWRzfSwke3BvcHBlci5pZH1gIDogcG9wcGVyLmlkLFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCBFTVBUWV9NT0RJRklFUlMgPSBbXSBhcyBhbnk7XG4vKipcbiAqIFBvc2l0aW9uIGFuIGVsZW1lbnQgcmVsYXRpdmUgc29tZSByZWZlcmVuY2UgZWxlbWVudCB1c2luZyBQb3BwZXIuanNcbiAqXG4gKiBAcGFyYW0gcmVmZXJlbmNlRWxlbWVudFxuICogQHBhcmFtIHBvcHBlckVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgIG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0PX0gICAgIG9wdGlvbnMubW9kaWZpZXJzIFBvcHBlci5qcyBtb2RpZmllcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbj19ICAgIG9wdGlvbnMuZW5hYmxlZCB0b2dnbGUgdGhlIHBvcHBlciBmdW5jdGlvbmFsaXR5IG9uL29mZlxuICogQHBhcmFtIHtzdHJpbmc9fSAgICAgb3B0aW9ucy5wbGFjZW1lbnQgVGhlIHBvcHBlciBlbGVtZW50IHBsYWNlbWVudCByZWxhdGl2ZSB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nPX0gICAgIG9wdGlvbnMuc3RyYXRlZ3kgdGhlIHBvc2l0aW9uaW5nIHN0cmF0ZWd5XG4gKiBAcGFyYW0ge2Z1bmN0aW9uPX0gICBvcHRpb25zLm9uQ3JlYXRlIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZFxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vblVwZGF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWRcbiAqXG4gKiBAcmV0dXJucyB7VXNlUG9wcGVyU3RhdGV9IFRoZSBwb3BwZXIgc3RhdGVcbiAqL1xuZnVuY3Rpb24gdXNlUG9wcGVyKFxuICByZWZlcmVuY2VFbGVtZW50OiBWaXJ0dWFsRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHBvcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAge1xuICAgIGVuYWJsZWQgPSB0cnVlLFxuICAgIHBsYWNlbWVudCA9ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJyxcbiAgICBtb2RpZmllcnMgPSBFTVBUWV9NT0RJRklFUlMsXG4gICAgLi4uY29uZmlnXG4gIH06IFVzZVBvcHBlck9wdGlvbnMgPSB7fSxcbik6IFVzZVBvcHBlclN0YXRlIHtcbiAgY29uc3QgcHJldk1vZGlmaWVycyA9IHVzZVJlZjxVc2VQb3BwZXJPcHRpb25zWydtb2RpZmllcnMnXT4obW9kaWZpZXJzKTtcbiAgY29uc3QgcG9wcGVySW5zdGFuY2VSZWYgPSB1c2VSZWY8SW5zdGFuY2U+KCk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQ/LnVwZGF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudD8uZm9yY2VVcGRhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtwb3BwZXJTdGF0ZSwgc2V0U3RhdGVdID0gdXNlU2FmZVN0YXRlKFxuICAgIHVzZVN0YXRlPFVzZVBvcHBlclN0YXRlPih7XG4gICAgICBwbGFjZW1lbnQsXG4gICAgICB1cGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIHBvcHBlcjoge30sXG4gICAgICAgIGFycm93OiB7fSxcbiAgICAgIH0sXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgdXBkYXRlTW9kaWZpZXIgPSB1c2VNZW1vPE1vZGlmaWVyPCd1cGRhdGVTdGF0ZU1vZGlmaWVyJywgYW55Pj4oXG4gICAgKCkgPT4gKHtcbiAgICAgIG5hbWU6ICd1cGRhdGVTdGF0ZU1vZGlmaWVyJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ3dyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlczogVXNlUG9wcGVyU3RhdGVbJ3N0eWxlcyddID0ge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IFVzZVBvcHBlclN0YXRlWydhdHRyaWJ1dGVzJ10gPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHN0eWxlc1tlbGVtZW50XSA9IHN0YXRlLnN0eWxlc1tlbGVtZW50XTtcbiAgICAgICAgICBhdHRyaWJ1dGVzW2VsZW1lbnRdID0gc3RhdGUuYXR0cmlidXRlc1tlbGVtZW50XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHVwZGF0ZSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIFt1cGRhdGUsIGZvcmNlVXBkYXRlLCBzZXRTdGF0ZV0sXG4gICk7XG5cbiAgY29uc3QgbmV4dE1vZGlmaWVycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghZGVxdWFsKHByZXZNb2RpZmllcnMuY3VycmVudCwgbW9kaWZpZXJzKSkge1xuICAgICAgcHJldk1vZGlmaWVycy5jdXJyZW50ID0gbW9kaWZpZXJzO1xuICAgIH1cbiAgICByZXR1cm4gcHJldk1vZGlmaWVycy5jdXJyZW50ITtcbiAgfSwgW21vZGlmaWVyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50IHx8ICFlbmFibGVkKSByZXR1cm47XG5cbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50LnNldE9wdGlvbnMoe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4ubmV4dE1vZGlmaWVycyxcbiAgICAgICAgdXBkYXRlTW9kaWZpZXIsXG4gICAgICAgIGRpc2FibGVkQXBwbHlTdHlsZXNNb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSk7XG4gIH0sIFtzdHJhdGVneSwgcGxhY2VtZW50LCB1cGRhdGVNb2RpZmllciwgZW5hYmxlZCwgbmV4dE1vZGlmaWVyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbmFibGVkIHx8IHJlZmVyZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBwb3BwZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1vZGlmaWVyczogWy4uLm5leHRNb2RpZmllcnMsIGFyaWFEZXNjcmliZWRCeU1vZGlmaWVyLCB1cGRhdGVNb2RpZmllcl0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgICAuLi5zLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgIHN0eWxlczogeyBwb3BwZXI6IHt9IH0sXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoaXMgaXMgb25seSBydW4gb25jZSB0byBfY3JlYXRlXyB0aGUgcG9wcGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZW5hYmxlZCwgcmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudF0pO1xuXG4gIHJldHVybiBwb3BwZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUG9wcGVyO1xuIiwiaW1wb3J0IGNvbnRhaW5zIGZyb20gJ2RvbS1oZWxwZXJzL2NvbnRhaW5zJztcbmltcG9ydCBsaXN0ZW4gZnJvbSAnZG9tLWhlbHBlcnMvbGlzdGVuJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJ2RvbS1oZWxwZXJzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG5jb25zdCBlc2NhcGVLZXlDb2RlID0gMjc7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnRzID0ge1xuICBbSyBpbiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBdOiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBbS10gZXh0ZW5kcyBNb3VzZUV2ZW50XG4gICAgPyBLXG4gICAgOiBuZXZlcjtcbn1ba2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwXTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudDogTW91c2VFdmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jb25zdCBnZXRSZWZUYXJnZXQgPSAoXG4gIHJlZjogUmVhY3QuUmVmT2JqZWN0PEVsZW1lbnQ+IHwgRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4pID0+IHJlZiAmJiAoJ2N1cnJlbnQnIGluIHJlZiA/IHJlZi5jdXJyZW50IDogcmVmKTtcblxuZXhwb3J0IGludGVyZmFjZSBSb290Q2xvc2VPcHRpb25zIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjbGlja1RyaWdnZXI/OiBNb3VzZUV2ZW50cztcbn1cbi8qKlxuICogVGhlIGB1c2VSb290Q2xvc2VgIGhvb2sgcmVnaXN0ZXJzIHlvdXIgY2FsbGJhY2sgb24gdGhlIGRvY3VtZW50XG4gKiB3aGVuIHJlbmRlcmVkLiBQb3dlcnMgdGhlIGA8T3ZlcmxheS8+YCBjb21wb25lbnQuIFRoaXMgaXMgdXNlZCBhY2hpZXZlIG1vZGFsXG4gKiBzdHlsZSBiZWhhdmlvciB3aGVyZSB5b3VyIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHRyaWVzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCBvciBoaXRzIHRoZSBgZXNjYCBrZXkuXG4gKlxuICogQHBhcmFtIHtSZWY8SFRNTEVsZW1lbnQ+fCBIVE1MRWxlbWVudH0gcmVmICBUaGUgZWxlbWVudCBib3VuZGFyeVxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25Sb290Q2xvc2VcbiAqIEBwYXJhbSB7b2JqZWN0PX0gIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMuZGlzYWJsZWRcbiAqIEBwYXJhbSB7c3RyaW5nPX0gIG9wdGlvbnMuY2xpY2tUcmlnZ2VyIFRoZSBET00gZXZlbnQgbmFtZSAoY2xpY2ssIG1vdXNlZG93biwgZXRjKSB0byBhdHRhY2ggbGlzdGVuZXJzIG9uXG4gKi9cbmZ1bmN0aW9uIHVzZVJvb3RDbG9zZShcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8RWxlbWVudD4gfCBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgb25Sb290Q2xvc2U6IChlOiBFdmVudCkgPT4gdm9pZCxcbiAgeyBkaXNhYmxlZCwgY2xpY2tUcmlnZ2VyID0gJ2NsaWNrJyB9OiBSb290Q2xvc2VPcHRpb25zID0ge30sXG4pIHtcbiAgY29uc3QgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgb25DbG9zZSA9IG9uUm9vdENsb3NlIHx8IG5vb3A7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VDYXB0dXJlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBnZXRSZWZUYXJnZXQocmVmKTtcblxuICAgICAgd2FybmluZyhcbiAgICAgICAgISFjdXJyZW50VGFyZ2V0LFxuICAgICAgICAnUm9vdENsb3NlIGNhcHR1cmVkIGEgY2xvc2UgZXZlbnQgYnV0IGRvZXMgbm90IGhhdmUgYSByZWYgdG8gY29tcGFyZSBpdCB0by4gJyArXG4gICAgICAgICAgJ3VzZVJvb3RDbG9zZSgpLCBzaG91bGQgYmUgcGFzc2VkIGEgcmVmIHRoYXQgcmVzb2x2ZXMgdG8gYSBET00gbm9kZScsXG4gICAgICApO1xuXG4gICAgICBwcmV2ZW50TW91c2VSb290Q2xvc2VSZWYuY3VycmVudCA9XG4gICAgICAgICFjdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgIGlzTW9kaWZpZWRFdmVudChlKSB8fFxuICAgICAgICAhaXNMZWZ0Q2xpY2tFdmVudChlKSB8fFxuICAgICAgICAhIWNvbnRhaW5zKGN1cnJlbnRUYXJnZXQsIGUudGFyZ2V0KTtcbiAgICB9LFxuICAgIFtyZWZdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlID0gdXNlRXZlbnRDYWxsYmFjaygoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQpIHtcbiAgICAgIG9uQ2xvc2UoZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVLZXlVcCA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBlc2NhcGVLZXlDb2RlKSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgcmVmID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBldmVudCB0byBhdm9pZCB0cmlnZ2VyaW5nIGhhbmRsZXJzIGltbWVkaWF0ZWx5XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDA3NFxuICAgIGxldCBjdXJyZW50RXZlbnQgPSB3aW5kb3cuZXZlbnQ7XG5cbiAgICBjb25zdCBkb2MgPSBvd25lckRvY3VtZW50KGdldFJlZlRhcmdldChyZWYpISk7XG5cbiAgICAvLyBVc2UgY2FwdHVyZSBmb3IgdGhpcyBsaXN0ZW5lciBzbyBpdCBmaXJlcyBiZWZvcmUgUmVhY3QncyBsaXN0ZW5lciwgdG9cbiAgICAvLyBhdm9pZCBmYWxzZSBwb3NpdGl2ZXMgaW4gdGhlIGNvbnRhaW5zKCkgY2hlY2sgYmVsb3cgaWYgdGhlIHRhcmdldCBET01cbiAgICAvLyBlbGVtZW50IGlzIHJlbW92ZWQgaW4gdGhlIFJlYWN0IG1vdXNlIGNhbGxiYWNrLlxuICAgIGNvbnN0IHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyID0gbGlzdGVuKFxuICAgICAgZG9jIGFzIGFueSxcbiAgICAgIGNsaWNrVHJpZ2dlcixcbiAgICAgIGhhbmRsZU1vdXNlQ2FwdHVyZSxcbiAgICAgIHRydWUsXG4gICAgKTtcblxuICAgIGNvbnN0IHJlbW92ZU1vdXNlTGlzdGVuZXIgPSBsaXN0ZW4oZG9jIGFzIGFueSwgY2xpY2tUcmlnZ2VyLCAoZSkgPT4ge1xuICAgICAgLy8gc2tpcCBpZiB0aGlzIGV2ZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcnVubmluZyB3aGVuIHdlIGFkZGVkIHRoZSBoYW5kbGVyc1xuICAgICAgaWYgKGUgPT09IGN1cnJlbnRFdmVudCkge1xuICAgICAgICBjdXJyZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZU1vdXNlKGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlS2V5dXBMaXN0ZW5lciA9IGxpc3Rlbihkb2MgYXMgYW55LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgLy8gc2tpcCBpZiB0aGlzIGV2ZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcnVubmluZyB3aGVuIHdlIGFkZGVkIHRoZSBoYW5kbGVyc1xuICAgICAgaWYgKGUgPT09IGN1cnJlbnRFdmVudCkge1xuICAgICAgICBjdXJyZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZUtleVVwKGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXSBhcyBBcnJheTwoKSA9PiB2b2lkPjtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgbW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycyA9IFtdLnNsaWNlXG4gICAgICAgIC5jYWxsKGRvYy5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAubWFwKChlbCkgPT4gbGlzdGVuKGVsLCAnbW91c2Vtb3ZlJywgbm9vcCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lcigpO1xuICAgICAgcmVtb3ZlTW91c2VMaXN0ZW5lcigpO1xuICAgICAgcmVtb3ZlS2V5dXBMaXN0ZW5lcigpO1xuICAgICAgbW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycy5mb3JFYWNoKChyZW1vdmUpID0+IHJlbW92ZSgpKTtcbiAgICB9O1xuICB9LCBbXG4gICAgcmVmLFxuICAgIGRpc2FibGVkLFxuICAgIGNsaWNrVHJpZ2dlcixcbiAgICBoYW5kbGVNb3VzZUNhcHR1cmUsXG4gICAgaGFuZGxlTW91c2UsXG4gICAgaGFuZGxlS2V5VXAsXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb290Q2xvc2U7XG4iLCJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbiAgXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcIkJ1dHRvblwiLFxuICBcImlkXCI6IFwiQnV0dG9uXCIsXG4gIFwiaXNEb2NzSG9tZVBhZ2VcIjogZmFsc2UsXG4gIFwidGl0bGVcIjogXCJCdXR0b25cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGFic3RyYWN0IGJ1dHRvbiBjb21wb25lbnQgZm9yIGNyZWF0aW5nIGFjY2Vzc2libGUgYnV0dG9ucyByZWdhcmRsZXNzIG9mIHRoZSBIVE1MXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy9CdXR0b24ubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcIi5cIixcbiAgXCJzbHVnXCI6IFwiL0J1dHRvblwiLFxuICBcInBlcm1hbGlua1wiOiBcIi91aS9CdXR0b25cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHt9LFxuICBcInNpZGViYXJcIjogXCJkb2NzXCIsXG4gIFwicHJldmlvdXNcIjoge1xuICAgIFwidGl0bGVcIjogXCJHZXR0aW5nIFN0YXJ0ZWRcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi91aS9cIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJEcm9wZG93blwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL0Ryb3Bkb3duXCJcbiAgfVxufTtcbiAgLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBJbXBvcnRDb250ZXh0LCB7IGFsbFZhbHVlcyB9IGZyb20gXCJAdGhlbWUvSW1wb3J0Q29udGV4dFwiO1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnPGNvZGU+dXNlQnV0dG9uUHJvcHM8L2NvZGU+JyxcbiAgaWQ6ICd1c2VidXR0b25wcm9wcycsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ1N0eWxpbmcnLFxuICBpZDogJ3N0eWxpbmcnLFxuICBjaGlsZHJlbjogW11cbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8cD57YEFuIGFic3RyYWN0IGJ1dHRvbiBjb21wb25lbnQgZm9yIGNyZWF0aW5nIGFjY2Vzc2libGUgYnV0dG9ucyByZWdhcmRsZXNzIG9mIHRoZSBIVE1MXG5lbGVtZW50IHVzZWQgdG8gcmVuZGVyIGl0LmB9PC9wPlxuICAgIDxJbXBvcnRDb250ZXh0IGltcG9ydHM9eygpID0+IGFsbFZhbHVlcyh7XG4gICAgICBcIkByZXN0YXJ0L3VpXCI6IGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZXhhbXBsZXMtLWRvY3MtQnV0dG9uLm1keFwiICovXG4gICAgICAnQHJlc3RhcnQvdWknKVxuICAgIH0pfSBtZHhUeXBlPVwiSW1wb3J0Q29udGV4dFwiPlxuICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeCBidXR0b24tZXhhbXBsZVwiLFxuICAgICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmUgY2xhc3NOYW1lPWJ1dHRvbi1leGFtcGxlXCIsXG4gICAgICAgICAgXCJsaXZlXCI6IHRydWVcbiAgICAgICAgfX0+e2BpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQHJlc3RhcnQvdWlcIjtcblxuPEJ1dHRvbj5JJ20gYSBCdXR0b248L0J1dHRvbj47XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L0ltcG9ydENvbnRleHQ+XG4gICAgPHA+e2BOb3QgdmVyeSBpbXByZXNzaXZlIG9uIGl0cyBvd24sIGJ1dCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BCdXR0b25gfTwvaW5saW5lQ29kZT57YCBkb2VzIGNvbWUgd2l0aCBhIGZldyBjb252ZW5pZW5jZXNcbm92ZXIgdGhlIHBsYWluIEhUTUwgZWxlbWVudC5gfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B0eXBlYH08L2lubGluZUNvZGU+e2AgZGVmYXVsdHMgdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGJ1dHRvbmB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BFbnN1cmVzIHRoYXQgbm9uIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BidXR0b25gfTwvaW5saW5lQ29kZT57YCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgYXNgfTwvaW5saW5lQ29kZT57YCBvcHRpb25zIHJlbWFpbiBhY2Nlc3NpYmxlYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgY29udGV4dHVhbGx5IHJlbmRlcnMgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YDxhPmB9PC9pbmxpbmVDb2RlPntgIGlmIGhyZWYgb3Igb3RoZXIgYW5jaG9yIHByb3BzIGFyZSBhZGRlZC5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJAcmVzdGFydC91aVwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLUJ1dHRvbi5tZHhcIiAqL1xuICAgICAgJ0ByZXN0YXJ0L3VpJylcbiAgICB9KX0gbWR4VHlwZT1cIkltcG9ydENvbnRleHRcIj5cbiAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3ggYnV0dG9uLWV4YW1wbGVcIixcbiAgICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIGNsYXNzTmFtZT1idXR0b24tZXhhbXBsZVwiLFxuICAgICAgICAgIFwibGl2ZVwiOiB0cnVlXG4gICAgICAgIH19PntgaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkByZXN0YXJ0L3VpXCI7XG5cbjxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XG4gIDxCdXR0b24+SSdtIGEgQnV0dG9uPC9CdXR0b24+XG4gIDxCdXR0b24gaHJlZj1cIi9ob21lXCI+SSdtIGEgbGluazwvQnV0dG9uPlxuICA8QnV0dG9uIGFzPVwic3BhblwiPkknbSBhIHNwYW4gYnV0IGFsc28gYSBidXR0b248L0J1dHRvbj5cbjwvZGl2PjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvSW1wb3J0Q29udGV4dD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJ1c2VidXR0b25wcm9wc1wiXG4gICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImgzXCI+e2B1c2VCdXR0b25Qcm9wc2B9PC9pbmxpbmVDb2RlPjwvaDM+XG4gICAgPHA+e2BNb3N0IG9mIHRoZSBoZWF2eSBsaWZ0aW5nIGluIEJ1dHRvbiBjb21lcyBmcm9tIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1c2VCdXR0b25Qcm9wc2B9PC9pbmxpbmVDb2RlPntgIGhvb2suIFlvdVxuY2FuIHVzZSB0aGUgaG9vayBkaXJlY3RseSB0byB0dXJuIGFueSBjb21wb25lbnQgaW50byBhbiBhY2Nlc3NpYmxlIGJ1dHRvbi5gfTwvcD5cbiAgICA8cD57YElmIGFuIGV4cGxpY2l0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRhZ05hbWVgfTwvaW5saW5lQ29kZT57YCBpc24ndCBwcm92aWRlZCwgdGhlIGhvb2sgd2lsbCBwaWNrIGJldHdlZW4gJ2J1dHRvbicgYW5kICdhJ1xuZGVwZW5kaW5nIG9uIHdoZXRoZXIgYW55IGFuY2hvciBzcGVjaWZpYyBvcHRpb25zLCBsaWtlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGhyZWZgfTwvaW5saW5lQ29kZT57YCwgd2VyZSBwcm92aWRlZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiXG4gICAgICB9fT57YGltcG9ydCB7IHVzZUJ1dHRvblByb3BzIH0gZnJvbSAnQnV0dG9uJ1xuXG5cbmZ1bmN0aW9uIENvbXBhbnlCdXR0b24ocHJvcHMpIHtcbiAgY29uc3QgW2FyaWFCdXR0b25Qcm9wcywgeyB0YWdOYW1lOiBUYWcgfV0gPSB1c2VCdXR0b25Qcm9wcyhwcm9wcyk7XG5cbiAgcmV0dXJuIDxUYWcgey4uLnByb3BzfSB7Li4uYXJpYUJ1dHRvblByb3BzfSAvPlxufVxuXG48ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxuICA8Q29tcGFueUJ1dHRvbj5IZXkgdGhlcmU8Q29tcGFueUJ1dHRvbj5cbiAgPENvbXBhbnlCdXR0b24gaHJlZj1cIi9ob21lXCI+SSdtIGEgbGluazwvQ29tcGFueUJ1dHRvbj5cbjwvZGl2PjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInN0eWxpbmdcIlxuICAgIH19PntgU3R5bGluZ2B9PC9oMj5cbiAgICA8cD57YFN0eWxpbmcgb3B0aW9ucyBhcmUgc3RyYWlnaHRmb3J3YXJkIGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BCdXR0b25gfTwvaW5saW5lQ29kZT57YCBiZWxvdyBpcyBhIG1pbmltYWwgZXhhbXBsZSB1c2luZyBUYWlsd2luZENTUy5cblRoZXJlIGlzIG9uZSBjYXZlYXQgYXJvdW5kIHN0eWxpbmcgdGhlIGJ1dHRvbidzIGRpc2FibGVkIHN0YXRlLiBTdHlsaW5nIHNob3VsZCBiZSBiYXNlZCBvZmZcbm9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRpc2FibGVkYH08L2lubGluZUNvZGU+e2AgcHJvcCBkaXJlY3RseSBhcyBvcHBvc2VkIHRvIHVzaW5nIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgOmRpc2FibGVkYH08L2lubGluZUNvZGU+e2AgQ1NTIHNlbGVjdG9yLlxuVGhpcyBpcyBiZWNhdXNlIHRoZSBidXR0b24gbWF5IHJlbmRlciBhbiBIVE1MIGVsZW1lbnQgdGhhdCBkb2VzIG5vdCBzdXBwb3J0XG50aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGlzYWJsZWRgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgKHN1Y2ggYXMgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGE+YH08L2lubGluZUNvZGU+e2ApLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHNlbGVjdCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgW2FyaWEtZGlzYWJsZWQ9J3RydWUnXWB9PC9pbmxpbmVDb2RlPntgXG5pbiBhZGRpdGlvbiB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A6ZGlzYWJsZWRgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJAcmVzdGFydC91aVwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLUJ1dHRvbi5tZHhcIiAqL1xuICAgICAgJ0ByZXN0YXJ0L3VpJyksXG4gICAgICBcImNsc3hcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1CdXR0b24ubWR4XCIgKi9cbiAgICAgICdjbHN4JylcbiAgICB9KX0gbWR4VHlwZT1cIkltcG9ydENvbnRleHRcIj5cbiAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIixcbiAgICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlXCIsXG4gICAgICAgICAgXCJsaXZlXCI6IHRydWVcbiAgICAgICAgfX0+e2BpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQHJlc3RhcnQvdWlcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmZ1bmN0aW9uIFN0eWxlZEJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBcInRyYW5zaXRpb24gdGV4dC1tZFwiLFxuICAgICAgICBcImgtMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSByb3VuZGVkIHB4LTggbXQtNCBhcHBlYXJhbmNlLW5vbmUgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1uby13cmFwXCIsXG4gICAgICAgIFwiZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctNCByaW5nLXByaW1hcnktMjAwXCIsXG4gICAgICAgICFwcm9wcy5kaXNhYmxlZCAmJlxuICAgICAgICAgIFwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlXCIsXG4gICAgICAgIFwiYWN0aXZlOmJnLXByaW1hcnktNjAwIGFjdGl2ZTp0ZXh0LXdoaXRlXCIsXG4gICAgICAgIHByb3BzLmRpc2FibGVkICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNjBcIlxuICAgICAgKX1cbiAgICAvPlxuICApO1xufVxuXG48ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxuICA8U3R5bGVkQnV0dG9uPkJ1dHRvbjwvU3R5bGVkQnV0dG9uPlxuICA8U3R5bGVkQnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9TdHlsZWRCdXR0b24+XG48L2Rpdj47XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L0ltcG9ydENvbnRleHQ+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiAgIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbT1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxyPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24geShhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1pZighYWEpdGhyb3cgRXJyb3IoeSgyMjcpKTt2YXIgYmE9bmV3IFNldCxjYT17fTtmdW5jdGlvbiBkYShhLGIpe2VhKGEsYik7ZWEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGVhKGEsYil7Y2FbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWJhLmFkZChiW2FdKX1cbnZhciBmYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksaGE9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGlhPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5qYT17fSxrYT17fTtmdW5jdGlvbiBsYShhKXtpZihpYS5jYWxsKGthLGEpKXJldHVybiEwO2lmKGlhLmNhbGwoamEsYSkpcmV0dXJuITE7aWYoaGEudGVzdChhKSlyZXR1cm4ga2FbYV09ITA7amFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gbWEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBuYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxtYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEIoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciBEPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0RbYl09bmV3IEIoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgb2E9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBwYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxcbnBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbkQueGxpbmtIcmVmPW5ldyBCKFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHFhKGEsYixjLGQpe3ZhciBlPUQuaGFzT3duUHJvcGVydHkoYik/RFtiXTpudWxsO3ZhciBmPW51bGwhPT1lPzA9PT1lLnR5cGU6ZD8hMTohKDI8Yi5sZW5ndGgpfHxcIm9cIiE9PWJbMF0mJlwiT1wiIT09YlswXXx8XCJuXCIhPT1iWzFdJiZcIk5cIiE9PWJbMV0/ITE6ITA7Znx8KG5hKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9sYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSkpfVxudmFyIHJhPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHNhPTYwMTAzLHRhPTYwMTA2LHVhPTYwMTA3LHdhPTYwMTA4LHhhPTYwMTE0LHlhPTYwMTA5LHphPTYwMTEwLEFhPTYwMTEyLEJhPTYwMTEzLENhPTYwMTIwLERhPTYwMTE1LEVhPTYwMTE2LEZhPTYwMTIxLEdhPTYwMTI4LEhhPTYwMTI5LElhPTYwMTMwLEphPTYwMTMxO1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIEU9U3ltYm9sLmZvcjtzYT1FKFwicmVhY3QuZWxlbWVudFwiKTt0YT1FKFwicmVhY3QucG9ydGFsXCIpO3VhPUUoXCJyZWFjdC5mcmFnbWVudFwiKTt3YT1FKFwicmVhY3Quc3RyaWN0X21vZGVcIik7eGE9RShcInJlYWN0LnByb2ZpbGVyXCIpO3lhPUUoXCJyZWFjdC5wcm92aWRlclwiKTt6YT1FKFwicmVhY3QuY29udGV4dFwiKTtBYT1FKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7QmE9RShcInJlYWN0LnN1c3BlbnNlXCIpO0NhPUUoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO0RhPUUoXCJyZWFjdC5tZW1vXCIpO0VhPUUoXCJyZWFjdC5sYXp5XCIpO0ZhPUUoXCJyZWFjdC5ibG9ja1wiKTtFKFwicmVhY3Quc2NvcGVcIik7R2E9RShcInJlYWN0Lm9wYXF1ZS5pZFwiKTtIYT1FKFwicmVhY3QuZGVidWdfdHJhY2VfbW9kZVwiKTtJYT1FKFwicmVhY3Qub2Zmc2NyZWVuXCIpO0phPUUoXCJyZWFjdC5sZWdhY3lfaGlkZGVuXCIpfVxudmFyIEthPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBMYShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9S2EmJmFbS2FdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9dmFyIE1hO2Z1bmN0aW9uIE5hKGEpe2lmKHZvaWQgMD09PU1hKXRyeXt0aHJvdyBFcnJvcigpO31jYXRjaChjKXt2YXIgYj1jLnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO01hPWImJmJbMV18fFwiXCJ9cmV0dXJuXCJcXG5cIitNYSthfXZhciBPYT0hMTtcbmZ1bmN0aW9uIFBhKGEsYil7aWYoIWF8fE9hKXJldHVyblwiXCI7T2E9ITA7dmFyIGM9RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9dm9pZCAwO3RyeXtpZihiKWlmKGI9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO30sT2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwicHJvcHNcIix7c2V0OmZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9fSksXCJvYmplY3RcIj09PXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmNvbnN0cnVjdCl7dHJ5e1JlZmxlY3QuY29uc3RydWN0KGIsW10pfWNhdGNoKGspe3ZhciBkPWt9UmVmbGVjdC5jb25zdHJ1Y3QoYSxbXSxiKX1lbHNle3RyeXtiLmNhbGwoKX1jYXRjaChrKXtkPWt9YS5jYWxsKGIucHJvdG90eXBlKX1lbHNle3RyeXt0aHJvdyBFcnJvcigpO31jYXRjaChrKXtkPWt9YSgpfX1jYXRjaChrKXtpZihrJiZkJiZcInN0cmluZ1wiPT09dHlwZW9mIGsuc3RhY2spe2Zvcih2YXIgZT1rLnN0YWNrLnNwbGl0KFwiXFxuXCIpLFxuZj1kLnN0YWNrLnNwbGl0KFwiXFxuXCIpLGc9ZS5sZW5ndGgtMSxoPWYubGVuZ3RoLTE7MTw9ZyYmMDw9aCYmZVtnXSE9PWZbaF07KWgtLTtmb3IoOzE8PWcmJjA8PWg7Zy0tLGgtLSlpZihlW2ddIT09ZltoXSl7aWYoMSE9PWd8fDEhPT1oKXtkbyBpZihnLS0saC0tLDA+aHx8ZVtnXSE9PWZbaF0pcmV0dXJuXCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTt3aGlsZSgxPD1nJiYwPD1oKX1icmVha319fWZpbmFsbHl7T2E9ITEsRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9Y31yZXR1cm4oYT1hP2EuZGlzcGxheU5hbWV8fGEubmFtZTpcIlwiKT9OYShhKTpcIlwifVxuZnVuY3Rpb24gUWEoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDU6cmV0dXJuIE5hKGEudHlwZSk7Y2FzZSAxNjpyZXR1cm4gTmEoXCJMYXp5XCIpO2Nhc2UgMTM6cmV0dXJuIE5hKFwiU3VzcGVuc2VcIik7Y2FzZSAxOTpyZXR1cm4gTmEoXCJTdXNwZW5zZUxpc3RcIik7Y2FzZSAwOmNhc2UgMjpjYXNlIDE1OnJldHVybiBhPVBhKGEudHlwZSwhMSksYTtjYXNlIDExOnJldHVybiBhPVBhKGEudHlwZS5yZW5kZXIsITEpLGE7Y2FzZSAyMjpyZXR1cm4gYT1QYShhLnR5cGUuX3JlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9UGEoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBSYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHVhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHRhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSB4YTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB3YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEJhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIENhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHphOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIHlhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIEFhOnZhciBiPWEucmVuZGVyO2I9Yi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxcIlwiO1xucmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcIilcIjpcIkZvcndhcmRSZWZcIik7Y2FzZSBEYTpyZXR1cm4gUmEoYS50eXBlKTtjYXNlIEZhOnJldHVybiBSYShhLl9yZW5kZXIpO2Nhc2UgRWE6Yj1hLl9wYXlsb2FkO2E9YS5faW5pdDt0cnl7cmV0dXJuIFJhKGEoYikpfWNhdGNoKGMpe319cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJ1bmRlZmluZWRcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fWZ1bmN0aW9uIFRhKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBVYShhKXt2YXIgYj1UYShhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gVmEoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVVhKGEpKX1mdW5jdGlvbiBXYShhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9VGEoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX1mdW5jdGlvbiBYYShhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19XG5mdW5jdGlvbiBZYShhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbSh7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9U2EobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiAkYShhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnFhKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBhYihhLGIpeyRhKGEsYik7dmFyIGM9U2EoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/YmIoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmYmIoYSxiLnR5cGUsU2EoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSEhYS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkO1wiXCIhPT1jJiYoYS5uYW1lPWMpfVxuZnVuY3Rpb24gYmIoYSxiLGMpe2lmKFwibnVtYmVyXCIhPT1ifHxYYShhLm93bmVyRG9jdW1lbnQpIT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9ZnVuY3Rpb24gZGIoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZWIoYSxiKXthPW0oe2NoaWxkcmVuOnZvaWQgMH0sYik7aWYoYj1kYihiLmNoaWxkcmVuKSlhLmNoaWxkcmVuPWI7cmV0dXJuIGF9XG5mdW5jdGlvbiBmYihhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrU2EoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGdiKGEsYil7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl0aHJvdyBFcnJvcih5KDkxKSk7cmV0dXJuIG0oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gaGIoYSxiKXt2YXIgYz1iLnZhbHVlO2lmKG51bGw9PWMpe2M9Yi5jaGlsZHJlbjtiPWIuZGVmYXVsdFZhbHVlO2lmKG51bGwhPWMpe2lmKG51bGwhPWIpdGhyb3cgRXJyb3IoeSg5MikpO2lmKEFycmF5LmlzQXJyYXkoYykpe2lmKCEoMT49Yy5sZW5ndGgpKXRocm93IEVycm9yKHkoOTMpKTtjPWNbMF19Yj1jfW51bGw9PWImJihiPVwiXCIpO2M9Yn1hLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTpTYShjKX19XG5mdW5jdGlvbiBpYihhLGIpe3ZhciBjPVNhKGIudmFsdWUpLGQ9U2EoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBqYihhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiZcIlwiIT09YiYmbnVsbCE9PWImJihhLnZhbHVlPWIpfXZhciBrYj17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBsYihhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIG1iKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9sYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBuYixvYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1rYi5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXtuYj1uYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1uYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBwYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHFiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHJiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhxYikuZm9yRWFjaChmdW5jdGlvbihhKXtyYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3FiW2JdPXFiW2FdfSl9KTtmdW5jdGlvbiBzYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cWIuaGFzT3duUHJvcGVydHkoYSkmJnFiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHRiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXNiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHViPW0oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB2YihhLGIpe2lmKGIpe2lmKHViW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IoeSg2MCkpO2lmKCEoXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IoeSg2MikpO319XG5mdW5jdGlvbiB3YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcih5KDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYihhLGIsYyxkLGUpe3JldHVybiBhKGIsYyxkLGUpfWZ1bmN0aW9uIEliKCl7fXZhciBKYj1HYixLYj0hMSxMYj0hMTtmdW5jdGlvbiBNYigpe2lmKG51bGwhPT16Ynx8bnVsbCE9PUFiKUliKCksRmIoKX1cbmZ1bmN0aW9uIE5iKGEsYixjKXtpZihMYilyZXR1cm4gYShiLGMpO0xiPSEwO3RyeXtyZXR1cm4gSmIoYSxiLGMpfWZpbmFsbHl7TGI9ITEsTWIoKX19XG5mdW5jdGlvbiBPYihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKG51bGw9PT1jKXJldHVybiBudWxsO3ZhciBkPURiKGMpO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjpjYXNlIFwib25Nb3VzZUVudGVyXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtpZihjJiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBjKXRocm93IEVycm9yKHkoMjMxLGIsdHlwZW9mIGMpKTtyZXR1cm4gY312YXIgUGI9ITE7aWYoZmEpdHJ5e3ZhciBRYj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoUWIsXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe1BiPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYil9Y2F0Y2goYSl7UGI9ITF9ZnVuY3Rpb24gUmIoYSxiLGMsZCxlLGYsZyxoLGspe3ZhciBsPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGwpfWNhdGNoKG4pe3RoaXMub25FcnJvcihuKX19dmFyIFNiPSExLFRiPW51bGwsVWI9ITEsVmI9bnVsbCxXYj17b25FcnJvcjpmdW5jdGlvbihhKXtTYj0hMDtUYj1hfX07ZnVuY3Rpb24gWGIoYSxiLGMsZCxlLGYsZyxoLGspe1NiPSExO1RiPW51bGw7UmIuYXBwbHkoV2IsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIFliKGEsYixjLGQsZSxmLGcsaCxrKXtYYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoU2Ipe2lmKFNiKXt2YXIgbD1UYjtTYj0hMTtUYj1udWxsfWVsc2UgdGhyb3cgRXJyb3IoeSgxOTgpKTtVYnx8KFViPSEwLFZiPWwpfX1mdW5jdGlvbiBaYihhKXt2YXIgYj1hLGM9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7YT1iO2RvIGI9YSwwIT09KGIuZmxhZ3MmMTAyNikmJihjPWIucmV0dXJuKSxhPWIucmV0dXJuO3doaWxlKGEpfXJldHVybiAzPT09Yi50YWc/YzpudWxsfWZ1bmN0aW9uICRiKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09YiYmKGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihiPWEubWVtb2l6ZWRTdGF0ZSkpO2lmKG51bGwhPT1iKXJldHVybiBiLmRlaHlkcmF0ZWR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYWMoYSl7aWYoWmIoYSkhPT1hKXRocm93IEVycm9yKHkoMTg4KSk7fVxuZnVuY3Rpb24gYmMoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpe2I9WmIoYSk7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYiE9PWE/bnVsbDphfWZvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybjtpZihudWxsPT09ZSlicmVhazt2YXIgZj1lLmFsdGVybmF0ZTtpZihudWxsPT09Zil7ZD1lLnJldHVybjtpZihudWxsIT09ZCl7Yz1kO2NvbnRpbnVlfWJyZWFrfWlmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IoZj1lLmNoaWxkO2Y7KXtpZihmPT09YylyZXR1cm4gYWMoZSksYTtpZihmPT09ZClyZXR1cm4gYWMoZSksYjtmPWYuc2libGluZ310aHJvdyBFcnJvcih5KDE4OCkpO31pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtmb3IodmFyIGc9ITEsaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1cbmMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXRocm93IEVycm9yKHkoMTg5KSk7fX1pZihjLmFsdGVybmF0ZSE9PWQpdGhyb3cgRXJyb3IoeSgxOTApKTt9aWYoMyE9PWMudGFnKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBjYyhhKXthPWJjKGEpO2lmKCFhKXJldHVybiBudWxsO2Zvcih2YXIgYj1hOzspe2lmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXJldHVybiBiO2lmKGIuY2hpbGQpYi5jaGlsZC5yZXR1cm49YixiPWIuY2hpbGQ7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoOyFiLnNpYmxpbmc7KXtpZighYi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gZGMoYSxiKXtmb3IodmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWI7KXtpZihiPT09YXx8Yj09PWMpcmV0dXJuITA7Yj1iLnJldHVybn1yZXR1cm4hMX12YXIgZWMsZmMsZ2MsaGMsaWM9ITEsamM9W10sa2M9bnVsbCxsYz1udWxsLG1jPW51bGwsbmM9bmV3IE1hcCxvYz1uZXcgTWFwLHBjPVtdLHFjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIHJjKGEsYixjLGQsZSl7cmV0dXJue2Jsb2NrZWRPbjphLGRvbUV2ZW50TmFtZTpiLGV2ZW50U3lzdGVtRmxhZ3M6Y3wxNixuYXRpdmVFdmVudDplLHRhcmdldENvbnRhaW5lcnM6W2RdfX1mdW5jdGlvbiBzYyhhLGIpe3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmNhc2UgXCJmb2N1c291dFwiOmtjPW51bGw7YnJlYWs7Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnbGVhdmVcIjpsYz1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwibW91c2VvdXRcIjptYz1udWxsO2JyZWFrO2Nhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVyb3V0XCI6bmMuZGVsZXRlKGIucG9pbnRlcklkKTticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6b2MuZGVsZXRlKGIucG9pbnRlcklkKX19XG5mdW5jdGlvbiB0YyhhLGIsYyxkLGUsZil7aWYobnVsbD09PWF8fGEubmF0aXZlRXZlbnQhPT1mKXJldHVybiBhPXJjKGIsYyxkLGUsZiksbnVsbCE9PWImJihiPUNiKGIpLG51bGwhPT1iJiZmYyhiKSksYTthLmV2ZW50U3lzdGVtRmxhZ3N8PWQ7Yj1hLnRhcmdldENvbnRhaW5lcnM7bnVsbCE9PWUmJi0xPT09Yi5pbmRleE9mKGUpJiZiLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB1YyhhLGIsYyxkLGUpe3N3aXRjaChiKXtjYXNlIFwiZm9jdXNpblwiOnJldHVybiBrYz10YyhrYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJkcmFnZW50ZXJcIjpyZXR1cm4gbGM9dGMobGMsYSxiLGMsZCxlKSwhMDtjYXNlIFwibW91c2VvdmVyXCI6cmV0dXJuIG1jPXRjKG1jLGEsYixjLGQsZSksITA7Y2FzZSBcInBvaW50ZXJvdmVyXCI6dmFyIGY9ZS5wb2ludGVySWQ7bmMuc2V0KGYsdGMobmMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpO3JldHVybiEwO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOnJldHVybiBmPWUucG9pbnRlcklkLG9jLnNldChmLHRjKG9jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIHZjKGEpe3ZhciBiPXdjKGEudGFyZ2V0KTtpZihudWxsIT09Yil7dmFyIGM9WmIoYik7aWYobnVsbCE9PWMpaWYoYj1jLnRhZywxMz09PWIpe2lmKGI9JGIoYyksbnVsbCE9PWIpe2EuYmxvY2tlZE9uPWI7aGMoYS5sYW5lUHJpb3JpdHksZnVuY3Rpb24oKXtyLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShhLnByaW9yaXR5LGZ1bmN0aW9uKCl7Z2MoYyl9KX0pO3JldHVybn19ZWxzZSBpZigzPT09YiYmYy5zdGF0ZU5vZGUuaHlkcmF0ZSl7YS5ibG9ja2VkT249Mz09PWMudGFnP2Muc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtyZXR1cm59fWEuYmxvY2tlZE9uPW51bGx9XG5mdW5jdGlvbiB4YyhhKXtpZihudWxsIT09YS5ibG9ja2VkT24pcmV0dXJuITE7Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJmZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIHpjKGEsYixjKXt4YyhhKSYmYy5kZWxldGUoYil9XG5mdW5jdGlvbiBBYygpe2ZvcihpYz0hMTswPGpjLmxlbmd0aDspe3ZhciBhPWpjWzBdO2lmKG51bGwhPT1hLmJsb2NrZWRPbil7YT1DYihhLmJsb2NrZWRPbik7bnVsbCE9PWEmJmVjKGEpO2JyZWFrfWZvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXthLmJsb2NrZWRPbj1jO2JyZWFrfWIuc2hpZnQoKX1udWxsPT09YS5ibG9ja2VkT24mJmpjLnNoaWZ0KCl9bnVsbCE9PWtjJiZ4YyhrYykmJihrYz1udWxsKTtudWxsIT09bGMmJnhjKGxjKSYmKGxjPW51bGwpO251bGwhPT1tYyYmeGMobWMpJiYobWM9bnVsbCk7bmMuZm9yRWFjaCh6Yyk7b2MuZm9yRWFjaCh6Yyl9XG5mdW5jdGlvbiBCYyhhLGIpe2EuYmxvY2tlZE9uPT09YiYmKGEuYmxvY2tlZE9uPW51bGwsaWN8fChpYz0hMCxyLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxBYykpKX1cbmZ1bmN0aW9uIENjKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIEJjKGIsYSl9aWYoMDxqYy5sZW5ndGgpe0JjKGpjWzBdLGEpO2Zvcih2YXIgYz0xO2M8amMubGVuZ3RoO2MrKyl7dmFyIGQ9amNbY107ZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCl9fW51bGwhPT1rYyYmQmMoa2MsYSk7bnVsbCE9PWxjJiZCYyhsYyxhKTtudWxsIT09bWMmJkJjKG1jLGEpO25jLmZvckVhY2goYik7b2MuZm9yRWFjaChiKTtmb3IoYz0wO2M8cGMubGVuZ3RoO2MrKylkPXBjW2NdLGQuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpO2Zvcig7MDxwYy5sZW5ndGgmJihjPXBjWzBdLG51bGw9PT1jLmJsb2NrZWRPbik7KXZjKGMpLG51bGw9PT1jLmJsb2NrZWRPbiYmcGMuc2hpZnQoKX1cbmZ1bmN0aW9uIERjKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIEVjPXthbmltYXRpb25lbmQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpEYyhcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LEZjPXt9LEdjPXt9O1xuZmEmJihHYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBFYy5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBFYy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIEhjKGEpe2lmKEZjW2FdKXJldHVybiBGY1thXTtpZighRWNbYV0pcmV0dXJuIGE7dmFyIGI9RWNbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gR2MpcmV0dXJuIEZjW2FdPWJbY107cmV0dXJuIGF9XG52YXIgSWM9SGMoXCJhbmltYXRpb25lbmRcIiksSmM9SGMoXCJhbmltYXRpb25pdGVyYXRpb25cIiksS2M9SGMoXCJhbmltYXRpb25zdGFydFwiKSxMYz1IYyhcInRyYW5zaXRpb25lbmRcIiksTWM9bmV3IE1hcCxOYz1uZXcgTWFwLE9jPVtcImFib3J0XCIsXCJhYm9ydFwiLEljLFwiYW5pbWF0aW9uRW5kXCIsSmMsXCJhbmltYXRpb25JdGVyYXRpb25cIixLYyxcImFuaW1hdGlvblN0YXJ0XCIsXCJjYW5wbGF5XCIsXCJjYW5QbGF5XCIsXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIixcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiLFwiZW1wdGllZFwiLFwiZW1wdGllZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmNyeXB0ZWRcIixcImVuZGVkXCIsXCJlbmRlZFwiLFwiZXJyb3JcIixcImVycm9yXCIsXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIixcImxvYWRcIixcImxvYWRcIixcImxvYWRlZGRhdGFcIixcImxvYWRlZERhdGFcIixcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiLFwibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIixcblwibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIixcInBsYXlpbmdcIixcInBsYXlpbmdcIixcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiLFwic2Vla2luZ1wiLFwic2Vla2luZ1wiLFwic3RhbGxlZFwiLFwic3RhbGxlZFwiLFwic3VzcGVuZFwiLFwic3VzcGVuZFwiLFwidGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiLExjLFwidHJhbnNpdGlvbkVuZFwiLFwid2FpdGluZ1wiLFwid2FpdGluZ1wiXTtmdW5jdGlvbiBQYyhhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7Yys9Mil7dmFyIGQ9YVtjXSxlPWFbYysxXTtlPVwib25cIisoZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSkpO05jLnNldChkLGIpO01jLnNldChkLGUpO2RhKGUsW2RdKX19dmFyIFFjPXIudW5zdGFibGVfbm93O1FjKCk7dmFyIEY9ODtcbmZ1bmN0aW9uIFJjKGEpe2lmKDAhPT0oMSZhKSlyZXR1cm4gRj0xNSwxO2lmKDAhPT0oMiZhKSlyZXR1cm4gRj0xNCwyO2lmKDAhPT0oNCZhKSlyZXR1cm4gRj0xMyw0O3ZhciBiPTI0JmE7aWYoMCE9PWIpcmV0dXJuIEY9MTIsYjtpZigwIT09KGEmMzIpKXJldHVybiBGPTExLDMyO2I9MTkyJmE7aWYoMCE9PWIpcmV0dXJuIEY9MTAsYjtpZigwIT09KGEmMjU2KSlyZXR1cm4gRj05LDI1NjtiPTM1ODQmYTtpZigwIT09YilyZXR1cm4gRj04LGI7aWYoMCE9PShhJjQwOTYpKXJldHVybiBGPTcsNDA5NjtiPTQxODYxMTImYTtpZigwIT09YilyZXR1cm4gRj02LGI7Yj02MjkxNDU2MCZhO2lmKDAhPT1iKXJldHVybiBGPTUsYjtpZihhJjY3MTA4ODY0KXJldHVybiBGPTQsNjcxMDg4NjQ7aWYoMCE9PShhJjEzNDIxNzcyOCkpcmV0dXJuIEY9MywxMzQyMTc3Mjg7Yj04MDUzMDYzNjgmYTtpZigwIT09YilyZXR1cm4gRj0yLGI7aWYoMCE9PSgxMDczNzQxODI0JmEpKXJldHVybiBGPTEsMTA3Mzc0MTgyNDtcbkY9ODtyZXR1cm4gYX1mdW5jdGlvbiBTYyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gMTU7Y2FzZSA5ODpyZXR1cm4gMTA7Y2FzZSA5NzpjYXNlIDk2OnJldHVybiA4O2Nhc2UgOTU6cmV0dXJuIDI7ZGVmYXVsdDpyZXR1cm4gMH19ZnVuY3Rpb24gVGMoYSl7c3dpdGNoKGEpe2Nhc2UgMTU6Y2FzZSAxNDpyZXR1cm4gOTk7Y2FzZSAxMzpjYXNlIDEyOmNhc2UgMTE6Y2FzZSAxMDpyZXR1cm4gOTg7Y2FzZSA5OmNhc2UgODpjYXNlIDc6Y2FzZSA2OmNhc2UgNDpjYXNlIDU6cmV0dXJuIDk3O2Nhc2UgMzpjYXNlIDI6Y2FzZSAxOnJldHVybiA5NTtjYXNlIDA6cmV0dXJuIDkwO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzNTgsYSkpO319XG5mdW5jdGlvbiBVYyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiBGPTA7dmFyIGQ9MCxlPTAsZj1hLmV4cGlyZWRMYW5lcyxnPWEuc3VzcGVuZGVkTGFuZXMsaD1hLnBpbmdlZExhbmVzO2lmKDAhPT1mKWQ9ZixlPUY9MTU7ZWxzZSBpZihmPWMmMTM0MjE3NzI3LDAhPT1mKXt2YXIgaz1mJn5nOzAhPT1rPyhkPVJjKGspLGU9Rik6KGgmPWYsMCE9PWgmJihkPVJjKGgpLGU9RikpfWVsc2UgZj1jJn5nLDAhPT1mPyhkPVJjKGYpLGU9Rik6MCE9PWgmJihkPVJjKGgpLGU9Rik7aWYoMD09PWQpcmV0dXJuIDA7ZD0zMS1WYyhkKTtkPWMmKCgwPmQ/MDoxPDxkKTw8MSktMTtpZigwIT09YiYmYiE9PWQmJjA9PT0oYiZnKSl7UmMoYik7aWYoZTw9RilyZXR1cm4gYjtGPWV9Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1WYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIFdjKGEpe2E9YS5wZW5kaW5nTGFuZXMmLTEwNzM3NDE4MjU7cmV0dXJuIDAhPT1hP2E6YSYxMDczNzQxODI0PzEwNzM3NDE4MjQ6MH1mdW5jdGlvbiBYYyhhLGIpe3N3aXRjaChhKXtjYXNlIDE1OnJldHVybiAxO2Nhc2UgMTQ6cmV0dXJuIDI7Y2FzZSAxMjpyZXR1cm4gYT1ZYygyNCZ+YiksMD09PWE/WGMoMTAsYik6YTtjYXNlIDEwOnJldHVybiBhPVljKDE5MiZ+YiksMD09PWE/WGMoOCxiKTphO2Nhc2UgODpyZXR1cm4gYT1ZYygzNTg0Jn5iKSwwPT09YSYmKGE9WWMoNDE4NjExMiZ+YiksMD09PWEmJihhPTUxMikpLGE7Y2FzZSAyOnJldHVybiBiPVljKDgwNTMwNjM2OCZ+YiksMD09PWImJihiPTI2ODQzNTQ1NiksYn10aHJvdyBFcnJvcih5KDM1OCxhKSk7fWZ1bmN0aW9uIFljKGEpe3JldHVybiBhJi1hfWZ1bmN0aW9uIFpjKGEpe2Zvcih2YXIgYj1bXSxjPTA7MzE+YztjKyspYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24gJGMoYSxiLGMpe2EucGVuZGluZ0xhbmVzfD1iO3ZhciBkPWItMTthLnN1c3BlbmRlZExhbmVzJj1kO2EucGluZ2VkTGFuZXMmPWQ7YT1hLmV2ZW50VGltZXM7Yj0zMS1WYyhiKTthW2JdPWN9dmFyIFZjPU1hdGguY2x6MzI/TWF0aC5jbHozMjphZCxiZD1NYXRoLmxvZyxjZD1NYXRoLkxOMjtmdW5jdGlvbiBhZChhKXtyZXR1cm4gMD09PWE/MzI6MzEtKGJkKGEpL2NkfDApfDB9dmFyIGRkPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksZWQ9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksZmQ9ITA7ZnVuY3Rpb24gZ2QoYSxiLGMsZCl7S2J8fEliKCk7dmFyIGU9aGQsZj1LYjtLYj0hMDt0cnl7SGIoZSxhLGIsYyxkKX1maW5hbGx5eyhLYj1mKXx8TWIoKX19ZnVuY3Rpb24gaWQoYSxiLGMsZCl7ZWQoZGQsaGQuYmluZChudWxsLGEsYixjLGQpKX1cbmZ1bmN0aW9uIGhkKGEsYixjLGQpe2lmKGZkKXt2YXIgZTtpZigoZT0wPT09KGImNCkpJiYwPGpjLmxlbmd0aCYmLTE8cWMuaW5kZXhPZihhKSlhPXJjKG51bGwsYSxiLGMsZCksamMucHVzaChhKTtlbHNle3ZhciBmPXljKGEsYixjLGQpO2lmKG51bGw9PT1mKWUmJnNjKGEsZCk7ZWxzZXtpZihlKXtpZigtMTxxYy5pbmRleE9mKGEpKXthPXJjKGYsYSxiLGMsZCk7amMucHVzaChhKTtyZXR1cm59aWYodWMoZixhLGIsYyxkKSlyZXR1cm47c2MoYSxkKX1qZChhLGIsZCxudWxsLGMpfX19fVxuZnVuY3Rpb24geWMoYSxiLGMsZCl7dmFyIGU9eGIoZCk7ZT13YyhlKTtpZihudWxsIT09ZSl7dmFyIGY9WmIoZSk7aWYobnVsbD09PWYpZT1udWxsO2Vsc2V7dmFyIGc9Zi50YWc7aWYoMTM9PT1nKXtlPSRiKGYpO2lmKG51bGwhPT1lKXJldHVybiBlO2U9bnVsbH1lbHNlIGlmKDM9PT1nKXtpZihmLnN0YXRlTm9kZS5oeWRyYXRlKXJldHVybiAzPT09Zi50YWc/Zi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO2U9bnVsbH1lbHNlIGYhPT1lJiYoZT1udWxsKX19amQoYSxiLGQsZSxjKTtyZXR1cm4gbnVsbH12YXIga2Q9bnVsbCxsZD1udWxsLG1kPW51bGw7XG5mdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9ZnVuY3Rpb24gb2QoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9ZnVuY3Rpb24gcGQoKXtyZXR1cm4hMH1mdW5jdGlvbiBxZCgpe3JldHVybiExfVxuZnVuY3Rpb24gcmQoYSl7ZnVuY3Rpb24gYihiLGQsZSxmLGcpe3RoaXMuX3JlYWN0TmFtZT1iO3RoaXMuX3RhcmdldEluc3Q9ZTt0aGlzLnR5cGU9ZDt0aGlzLm5hdGl2ZUV2ZW50PWY7dGhpcy50YXJnZXQ9Zzt0aGlzLmN1cnJlbnRUYXJnZXQ9bnVsbDtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYj1hW2NdLHRoaXNbY109Yj9iKGYpOmZbY10pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1mLmRlZmF1bHRQcmV2ZW50ZWQ/Zi5kZWZhdWx0UHJldmVudGVkOiExPT09Zi5yZXR1cm5WYWx1ZSk/cGQ6cWQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1xZDtyZXR1cm4gdGhpc31tKGIucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiZcbihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wZCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1wZCl9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt9LGlzUGVyc2lzdGVudDpwZH0pO3JldHVybiBifVxudmFyIHNkPXtldmVudFBoYXNlOjAsYnViYmxlczowLGNhbmNlbGFibGU6MCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOjAsaXNUcnVzdGVkOjB9LHRkPXJkKHNkKSx1ZD1tKHt9LHNkLHt2aWV3OjAsZGV0YWlsOjB9KSx2ZD1yZCh1ZCksd2QseGQseWQsQWQ9bSh7fSx1ZCx7c2NyZWVuWDowLHNjcmVlblk6MCxjbGllbnRYOjAsY2xpZW50WTowLHBhZ2VYOjAscGFnZVk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxidXR0b246MCxidXR0b25zOjAscmVsYXRlZFRhcmdldDpmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YS5yZWxhdGVkVGFyZ2V0P2EuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudDphLnJlbGF0ZWRUYXJnZXR9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW5cbmEpcmV0dXJuIGEubW92ZW1lbnRYO2EhPT15ZCYmKHlkJiZcIm1vdXNlbW92ZVwiPT09YS50eXBlPyh3ZD1hLnNjcmVlblgteWQuc2NyZWVuWCx4ZD1hLnNjcmVlblkteWQuc2NyZWVuWSk6eGQ9d2Q9MCx5ZD1hKTtyZXR1cm4gd2R9LG1vdmVtZW50WTpmdW5jdGlvbihhKXtyZXR1cm5cIm1vdmVtZW50WVwiaW4gYT9hLm1vdmVtZW50WTp4ZH19KSxCZD1yZChBZCksQ2Q9bSh7fSxBZCx7ZGF0YVRyYW5zZmVyOjB9KSxEZD1yZChDZCksRWQ9bSh7fSx1ZCx7cmVsYXRlZFRhcmdldDowfSksRmQ9cmQoRWQpLEdkPW0oe30sc2Qse2FuaW1hdGlvbk5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLEhkPXJkKEdkKSxJZD1tKHt9LHNkLHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksSmQ9cmQoSWQpLEtkPW0oe30sc2Qse2RhdGE6MH0pLExkPXJkKEtkKSxNZD17RXNjOlwiRXNjYXBlXCIsXG5TcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSxOZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIiwxMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIixcbjExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0sT2Q9e0FsdDpcImFsdEtleVwiLENvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFBkKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9T2RbYV0pPyEhYlthXTohMX1mdW5jdGlvbiB6ZCgpe3JldHVybiBQZH1cbnZhciBRZD1tKHt9LHVkLHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPU1kW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPW9kKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9OZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGNvZGU6MCxsb2NhdGlvbjowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxyZXBlYXQ6MCxsb2NhbGU6MCxnZXRNb2RpZmllclN0YXRlOnpkLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9vZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP29kKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSksUmQ9cmQoUWQpLFNkPW0oe30sQWQse3BvaW50ZXJJZDowLHdpZHRoOjAsaGVpZ2h0OjAscHJlc3N1cmU6MCx0YW5nZW50aWFsUHJlc3N1cmU6MCx0aWx0WDowLHRpbHRZOjAsdHdpc3Q6MCxwb2ludGVyVHlwZTowLGlzUHJpbWFyeTowfSksVGQ9cmQoU2QpLFVkPW0oe30sdWQse3RvdWNoZXM6MCx0YXJnZXRUb3VjaGVzOjAsY2hhbmdlZFRvdWNoZXM6MCxhbHRLZXk6MCxtZXRhS2V5OjAsY3RybEtleTowLHNoaWZ0S2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZH0pLFZkPXJkKFVkKSxXZD1tKHt9LHNkLHtwcm9wZXJ0eU5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLFhkPXJkKFdkKSxZZD1tKHt9LEFkLHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW4gYT8tYS53aGVlbERlbHRhWDowfSxcbmRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjowLGRlbHRhTW9kZTowfSksWmQ9cmQoWWQpLCRkPVs5LDEzLDI3LDMyXSxhZT1mYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csYmU9bnVsbDtmYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYoYmU9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTt2YXIgY2U9ZmEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFiZSxkZT1mYSYmKCFhZXx8YmUmJjg8YmUmJjExPj1iZSksZWU9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksZmU9ITE7XG5mdW5jdGlvbiBnZShhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PSRkLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJmb2N1c291dFwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIGhlKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIGllPSExO2Z1bmN0aW9uIGplKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBoZShiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7ZmU9ITA7cmV0dXJuIGVlO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PWVlJiZmZT9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBrZShhLGIpe2lmKGllKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFhZSYmZ2UoYSxiKT8oYT1uZCgpLG1kPWxkPWtkPW51bGwsaWU9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGRlJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBsZT17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBtZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIWxlW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1mdW5jdGlvbiBuZShhLGIsYyxkKXtFYihkKTtiPW9lKGIsXCJvbkNoYW5nZVwiKTswPGIubGVuZ3RoJiYoYz1uZXcgdGQoXCJvbkNoYW5nZVwiLFwiY2hhbmdlXCIsbnVsbCxjLGQpLGEucHVzaCh7ZXZlbnQ6YyxsaXN0ZW5lcnM6Yn0pKX12YXIgcGU9bnVsbCxxZT1udWxsO2Z1bmN0aW9uIHJlKGEpe3NlKGEsMCl9ZnVuY3Rpb24gdGUoYSl7dmFyIGI9dWUoYSk7aWYoV2EoYikpcmV0dXJuIGF9XG5mdW5jdGlvbiB2ZShhLGIpe2lmKFwiY2hhbmdlXCI9PT1hKXJldHVybiBifXZhciB3ZT0hMTtpZihmYSl7dmFyIHhlO2lmKGZhKXt2YXIgeWU9XCJvbmlucHV0XCJpbiBkb2N1bWVudDtpZigheWUpe3ZhciB6ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3plLnNldEF0dHJpYnV0ZShcIm9uaW5wdXRcIixcInJldHVybjtcIik7eWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHplLm9uaW5wdXR9eGU9eWV9ZWxzZSB4ZT0hMTt3ZT14ZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKX1mdW5jdGlvbiBBZSgpe3BlJiYocGUuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpLHFlPXBlPW51bGwpfWZ1bmN0aW9uIEJlKGEpe2lmKFwidmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZ0ZShxZSkpe3ZhciBiPVtdO25lKGIscWUsYSx4YihhKSk7YT1yZTtpZihLYilhKGIpO2Vsc2V7S2I9ITA7dHJ5e0diKGEsYil9ZmluYWxseXtLYj0hMSxNYigpfX19fVxuZnVuY3Rpb24gQ2UoYSxiLGMpe1wiZm9jdXNpblwiPT09YT8oQWUoKSxwZT1iLHFlPWMscGUuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpKTpcImZvY3Vzb3V0XCI9PT1hJiZBZSgpfWZ1bmN0aW9uIERlKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIHRlKHFlKX1mdW5jdGlvbiBFZShhLGIpe2lmKFwiY2xpY2tcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEZlKGEsYil7aWYoXCJpbnB1dFwiPT09YXx8XCJjaGFuZ2VcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEdlKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgSGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6R2UsSWU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIEplKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFJZS5jYWxsKGIsY1tkXSl8fCFIZShhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEtlKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIExlKGEsYil7dmFyIGM9S2UoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9S2UoYyl9fWZ1bmN0aW9uIE1lKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TWUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTmUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gT2UoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbnZhciBQZT1mYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFFlPW51bGwsUmU9bnVsbCxTZT1udWxsLFRlPSExO1xuZnVuY3Rpb24gVWUoYSxiLGMpe3ZhciBkPWMud2luZG93PT09Yz9jLmRvY3VtZW50Ojk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50O1RlfHxudWxsPT1RZXx8UWUhPT1YYShkKXx8KGQ9UWUsXCJzZWxlY3Rpb25TdGFydFwiaW4gZCYmT2UoZCk/ZD17c3RhcnQ6ZC5zZWxlY3Rpb25TdGFydCxlbmQ6ZC5zZWxlY3Rpb25FbmR9OihkPShkLm93bmVyRG9jdW1lbnQmJmQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxkPXthbmNob3JOb2RlOmQuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6ZC5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmQuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmQuZm9jdXNPZmZzZXR9KSxTZSYmSmUoU2UsZCl8fChTZT1kLGQ9b2UoUmUsXCJvblNlbGVjdFwiKSwwPGQubGVuZ3RoJiYoYj1uZXcgdGQoXCJvblNlbGVjdFwiLFwic2VsZWN0XCIsbnVsbCxiLGMpLGEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6ZH0pLGIudGFyZ2V0PVFlKSkpfVxuUGMoXCJjYW5jZWwgY2FuY2VsIGNsaWNrIGNsaWNrIGNsb3NlIGNsb3NlIGNvbnRleHRtZW51IGNvbnRleHRNZW51IGNvcHkgY29weSBjdXQgY3V0IGF1eGNsaWNrIGF1eENsaWNrIGRibGNsaWNrIGRvdWJsZUNsaWNrIGRyYWdlbmQgZHJhZ0VuZCBkcmFnc3RhcnQgZHJhZ1N0YXJ0IGRyb3AgZHJvcCBmb2N1c2luIGZvY3VzIGZvY3Vzb3V0IGJsdXIgaW5wdXQgaW5wdXQgaW52YWxpZCBpbnZhbGlkIGtleWRvd24ga2V5RG93biBrZXlwcmVzcyBrZXlQcmVzcyBrZXl1cCBrZXlVcCBtb3VzZWRvd24gbW91c2VEb3duIG1vdXNldXAgbW91c2VVcCBwYXN0ZSBwYXN0ZSBwYXVzZSBwYXVzZSBwbGF5IHBsYXkgcG9pbnRlcmNhbmNlbCBwb2ludGVyQ2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJEb3duIHBvaW50ZXJ1cCBwb2ludGVyVXAgcmF0ZWNoYW5nZSByYXRlQ2hhbmdlIHJlc2V0IHJlc2V0IHNlZWtlZCBzZWVrZWQgc3VibWl0IHN1Ym1pdCB0b3VjaGNhbmNlbCB0b3VjaENhbmNlbCB0b3VjaGVuZCB0b3VjaEVuZCB0b3VjaHN0YXJ0IHRvdWNoU3RhcnQgdm9sdW1lY2hhbmdlIHZvbHVtZUNoYW5nZVwiLnNwbGl0KFwiIFwiKSxcbjApO1BjKFwiZHJhZyBkcmFnIGRyYWdlbnRlciBkcmFnRW50ZXIgZHJhZ2V4aXQgZHJhZ0V4aXQgZHJhZ2xlYXZlIGRyYWdMZWF2ZSBkcmFnb3ZlciBkcmFnT3ZlciBtb3VzZW1vdmUgbW91c2VNb3ZlIG1vdXNlb3V0IG1vdXNlT3V0IG1vdXNlb3ZlciBtb3VzZU92ZXIgcG9pbnRlcm1vdmUgcG9pbnRlck1vdmUgcG9pbnRlcm91dCBwb2ludGVyT3V0IHBvaW50ZXJvdmVyIHBvaW50ZXJPdmVyIHNjcm9sbCBzY3JvbGwgdG9nZ2xlIHRvZ2dsZSB0b3VjaG1vdmUgdG91Y2hNb3ZlIHdoZWVsIHdoZWVsXCIuc3BsaXQoXCIgXCIpLDEpO1BjKE9jLDIpO2Zvcih2YXIgVmU9XCJjaGFuZ2Ugc2VsZWN0aW9uY2hhbmdlIHRleHRJbnB1dCBjb21wb3NpdGlvbnN0YXJ0IGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9udXBkYXRlXCIuc3BsaXQoXCIgXCIpLFdlPTA7V2U8VmUubGVuZ3RoO1dlKyspTmMuc2V0KFZlW1dlXSwwKTtlYShcIm9uTW91c2VFbnRlclwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO1xuZWEoXCJvbk1vdXNlTGVhdmVcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtlYShcIm9uUG9pbnRlckVudGVyXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2VhKFwib25Qb2ludGVyTGVhdmVcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZGEoXCJvbkNoYW5nZVwiLFwiY2hhbmdlIGNsaWNrIGZvY3VzaW4gZm9jdXNvdXQgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25TZWxlY3RcIixcImZvY3Vzb3V0IGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXNpbiBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkJlZm9yZUlucHV0XCIsW1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdKTtkYShcIm9uQ29tcG9zaXRpb25FbmRcIixcImNvbXBvc2l0aW9uZW5kIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtcbmRhKFwib25Db21wb3NpdGlvblN0YXJ0XCIsXCJjb21wb3NpdGlvbnN0YXJ0IGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixcImNvbXBvc2l0aW9udXBkYXRlIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTt2YXIgWGU9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLFllPW5ldyBTZXQoXCJjYW5jZWwgY2xvc2UgaW52YWxpZCBsb2FkIHNjcm9sbCB0b2dnbGVcIi5zcGxpdChcIiBcIikuY29uY2F0KFhlKSk7XG5mdW5jdGlvbiBaZShhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9YztZYihkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfVxuZnVuY3Rpb24gc2UoYSxiKXtiPTAhPT0oYiY0KTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuZXZlbnQ7ZD1kLmxpc3RlbmVyczthOnt2YXIgZj12b2lkIDA7aWYoYilmb3IodmFyIGc9ZC5sZW5ndGgtMTswPD1nO2ctLSl7dmFyIGg9ZFtnXSxrPWguaW5zdGFuY2UsbD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfWVsc2UgZm9yKGc9MDtnPGQubGVuZ3RoO2crKyl7aD1kW2ddO2s9aC5pbnN0YW5jZTtsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9fX1pZihVYil0aHJvdyBhPVZiLFViPSExLFZiPW51bGwsYTt9XG5mdW5jdGlvbiBHKGEsYil7dmFyIGM9JGUoYiksZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KGFmKGIsYSwyLCExKSxjLmFkZChkKSl9dmFyIGJmPVwiX3JlYWN0TGlzdGVuaW5nXCIrTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7ZnVuY3Rpb24gY2YoYSl7YVtiZl18fChhW2JmXT0hMCxiYS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1llLmhhcyhiKXx8ZGYoYiwhMSxhLG51bGwpO2RmKGIsITAsYSxudWxsKX0pKX1cbmZ1bmN0aW9uIGRmKGEsYixjLGQpe3ZhciBlPTQ8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLGY9YztcInNlbGVjdGlvbmNoYW5nZVwiPT09YSYmOSE9PWMubm9kZVR5cGUmJihmPWMub3duZXJEb2N1bWVudCk7aWYobnVsbCE9PWQmJiFiJiZZZS5oYXMoYSkpe2lmKFwic2Nyb2xsXCIhPT1hKXJldHVybjtlfD0yO2Y9ZH12YXIgZz0kZShmKSxoPWErXCJfX1wiKyhiP1wiY2FwdHVyZVwiOlwiYnViYmxlXCIpO2cuaGFzKGgpfHwoYiYmKGV8PTQpLGFmKGYsYSxlLGIpLGcuYWRkKGgpKX1cbmZ1bmN0aW9uIGFmKGEsYixjLGQpe3ZhciBlPU5jLmdldChiKTtzd2l0Y2godm9pZCAwPT09ZT8yOmUpe2Nhc2UgMDplPWdkO2JyZWFrO2Nhc2UgMTplPWlkO2JyZWFrO2RlZmF1bHQ6ZT1oZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshUGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gamQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz13YyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59TmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPU1jLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCx4PWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOng9XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6eD1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgSWM6Y2FzZSBKYzpjYXNlIEtjOms9SGQ7YnJlYWs7Y2FzZSBMYzprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB3PTAhPT0oYiY0KSx6PSF3JiZcInNjcm9sbFwiPT09YSx1PXc/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dz1bXTtmb3IodmFyIHQ9ZCxxO251bGwhPT1cbnQ7KXtxPXQ7dmFyIHY9cS5zdGF0ZU5vZGU7NT09PXEudGFnJiZudWxsIT09diYmKHE9dixudWxsIT09dSYmKHY9T2IodCx1KSxudWxsIT12JiZ3LnB1c2goZWYodCx2LHEpKSkpO2lmKHopYnJlYWs7dD10LnJldHVybn0wPHcubGVuZ3RoJiYoaD1uZXcgayhoLHgsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6d30pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJjA9PT0oYiYxNikmJih4PWMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCkmJih3Yyh4KXx8eFtmZl0pKWJyZWFrIGE7aWYoa3x8aCl7aD1lLndpbmRvdz09PWU/ZTooaD1lLm93bmVyRG9jdW1lbnQpP2guZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93OndpbmRvdztpZihrKXtpZih4PWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQsaz1kLHg9eD93Yyh4KTpudWxsLG51bGwhPT1cbngmJih6PVpiKHgpLHghPT16fHw1IT09eC50YWcmJjYhPT14LnRhZykpeD1udWxsfWVsc2Ugaz1udWxsLHg9ZDtpZihrIT09eCl7dz1CZDt2PVwib25Nb3VzZUxlYXZlXCI7dT1cIm9uTW91c2VFbnRlclwiO3Q9XCJtb3VzZVwiO2lmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSl3PVRkLHY9XCJvblBvaW50ZXJMZWF2ZVwiLHU9XCJvblBvaW50ZXJFbnRlclwiLHQ9XCJwb2ludGVyXCI7ej1udWxsPT1rP2g6dWUoayk7cT1udWxsPT14P2g6dWUoeCk7aD1uZXcgdyh2LHQrXCJsZWF2ZVwiLGssYyxlKTtoLnRhcmdldD16O2gucmVsYXRlZFRhcmdldD1xO3Y9bnVsbDt3YyhlKT09PWQmJih3PW5ldyB3KHUsdCtcImVudGVyXCIseCxjLGUpLHcudGFyZ2V0PXEsdy5yZWxhdGVkVGFyZ2V0PXosdj13KTt6PXY7aWYoayYmeCliOnt3PWs7dT14O3Q9MDtmb3IocT13O3E7cT1nZihxKSl0Kys7cT0wO2Zvcih2PXU7djt2PWdmKHYpKXErKztmb3IoOzA8dC1xOyl3PWdmKHcpLHQtLTtmb3IoOzA8cS10Oyl1PVxuZ2YodSkscS0tO2Zvcig7dC0tOyl7aWYodz09PXV8fG51bGwhPT11JiZ3PT09dS5hbHRlcm5hdGUpYnJlYWsgYjt3PWdmKHcpO3U9Z2YodSl9dz1udWxsfWVsc2Ugdz1udWxsO251bGwhPT1rJiZoZihnLGgsayx3LCExKTtudWxsIT09eCYmbnVsbCE9PXomJmhmKGcseix4LHcsITApfX19YTp7aD1kP3VlKGQpOndpbmRvdztrPWgubm9kZU5hbWUmJmgubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihcInNlbGVjdFwiPT09a3x8XCJpbnB1dFwiPT09ayYmXCJmaWxlXCI9PT1oLnR5cGUpdmFyIEo9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSlKPUZlO2Vsc2V7Sj1EZTt2YXIgSz1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKEo9RWUpO2lmKEomJihKPUooYSxkKSkpe25lKGcsSixjLGUpO2JyZWFrIGF9SyYmSyhhLGgsZCk7XCJmb2N1c291dFwiPT09YSYmKEs9aC5fd3JhcHBlclN0YXRlKSYmXG5LLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmJiKGgsXCJudW1iZXJcIixoLnZhbHVlKX1LPWQ/dWUoZCk6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmlmKG1lKEspfHxcInRydWVcIj09PUsuY29udGVudEVkaXRhYmxlKVFlPUssUmU9ZCxTZT1udWxsO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOlNlPVJlPVFlPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOlRlPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpUZT0hMTtVZShnLGMsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFBlKWJyZWFrO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6VWUoZyxjLGUpfXZhciBRO2lmKGFlKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOnZhciBMPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpMPVwib25Db21wb3NpdGlvbkVuZFwiO2JyZWFrIGI7XG5jYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjpMPVwib25Db21wb3NpdGlvblVwZGF0ZVwiO2JyZWFrIGJ9TD12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoTD1cIm9uQ29tcG9zaXRpb25FbmRcIik6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihMPVwib25Db21wb3NpdGlvblN0YXJ0XCIpO0wmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PUw/XCJvbkNvbXBvc2l0aW9uRW5kXCI9PT1MJiZpZSYmKFE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSxLPW9lKGQsTCksMDxLLmxlbmd0aCYmKEw9bmV3IExkKEwsYSxudWxsLGMsZSksZy5wdXNoKHtldmVudDpMLGxpc3RlbmVyczpLfSksUT9MLmRhdGE9UTooUT1oZShjKSxudWxsIT09USYmKEwuZGF0YT1RKSkpKTtpZihRPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLDA8ZC5sZW5ndGgmJihlPW5ldyBMZChcIm9uQmVmb3JlSW5wdXRcIixcblwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPVEpfXNlKGcsYil9KX1mdW5jdGlvbiBlZihhLGIsYyl7cmV0dXJue2luc3RhbmNlOmEsbGlzdGVuZXI6YixjdXJyZW50VGFyZ2V0OmN9fWZ1bmN0aW9uIG9lKGEsYil7Zm9yKHZhciBjPWIrXCJDYXB0dXJlXCIsZD1bXTtudWxsIT09YTspe3ZhciBlPWEsZj1lLnN0YXRlTm9kZTs1PT09ZS50YWcmJm51bGwhPT1mJiYoZT1mLGY9T2IoYSxjKSxudWxsIT1mJiZkLnVuc2hpZnQoZWYoYSxmLGUpKSxmPU9iKGEsYiksbnVsbCE9ZiYmZC5wdXNoKGVmKGEsZixlKSkpO2E9YS5yZXR1cm59cmV0dXJuIGR9ZnVuY3Rpb24gZ2YoYSl7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1cbmZ1bmN0aW9uIGhmKGEsYixjLGQsZSl7Zm9yKHZhciBmPWIuX3JlYWN0TmFtZSxnPVtdO251bGwhPT1jJiZjIT09ZDspe3ZhciBoPWMsaz1oLmFsdGVybmF0ZSxsPWguc3RhdGVOb2RlO2lmKG51bGwhPT1rJiZrPT09ZClicmVhazs1PT09aC50YWcmJm51bGwhPT1sJiYoaD1sLGU/KGs9T2IoYyxmKSxudWxsIT1rJiZnLnVuc2hpZnQoZWYoYyxrLGgpKSk6ZXx8KGs9T2IoYyxmKSxudWxsIT1rJiZnLnB1c2goZWYoYyxrLGgpKSkpO2M9Yy5yZXR1cm59MCE9PWcubGVuZ3RoJiZhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmd9KX1mdW5jdGlvbiBqZigpe312YXIga2Y9bnVsbCxsZj1udWxsO2Z1bmN0aW9uIG1mKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1cbmZ1bmN0aW9uIG5mKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH12YXIgb2Y9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAscGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwO2Z1bmN0aW9uIHFmKGEpezE9PT1hLm5vZGVUeXBlP2EudGV4dENvbnRlbnQ9XCJcIjo5PT09YS5ub2RlVHlwZSYmKGE9YS5ib2R5LG51bGwhPWEmJihhLnRleHRDb250ZW50PVwiXCIpKX1cbmZ1bmN0aW9uIHJmKGEpe2Zvcig7bnVsbCE9YTthPWEubmV4dFNpYmxpbmcpe3ZhciBiPWEubm9kZVR5cGU7aWYoMT09PWJ8fDM9PT1iKWJyZWFrfXJldHVybiBhfWZ1bmN0aW9uIHNmKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciB0Zj0wO2Z1bmN0aW9uIHVmKGEpe3JldHVybnskJHR5cGVvZjpHYSx0b1N0cmluZzphLHZhbHVlT2Y6YX19dmFyIHZmPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLHdmPVwiX19yZWFjdEZpYmVyJFwiK3ZmLHhmPVwiX19yZWFjdFByb3BzJFwiK3ZmLGZmPVwiX19yZWFjdENvbnRhaW5lciRcIit2Zix5Zj1cIl9fcmVhY3RFdmVudHMkXCIrdmY7XG5mdW5jdGlvbiB3YyhhKXt2YXIgYj1hW3dmXTtpZihiKXJldHVybiBiO2Zvcih2YXIgYz1hLnBhcmVudE5vZGU7Yzspe2lmKGI9Y1tmZl18fGNbd2ZdKXtjPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1iLmNoaWxkfHxudWxsIT09YyYmbnVsbCE9PWMuY2hpbGQpZm9yKGE9c2YoYSk7bnVsbCE9PWE7KXtpZihjPWFbd2ZdKXJldHVybiBjO2E9c2YoYSl9cmV0dXJuIGJ9YT1jO2M9YS5wYXJlbnROb2RlfXJldHVybiBudWxsfWZ1bmN0aW9uIENiKGEpe2E9YVt3Zl18fGFbZmZdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZyYmMTMhPT1hLnRhZyYmMyE9PWEudGFnP251bGw6YX1mdW5jdGlvbiB1ZShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7dGhyb3cgRXJyb3IoeSgzMykpO31mdW5jdGlvbiBEYihhKXtyZXR1cm4gYVt4Zl18fG51bGx9XG5mdW5jdGlvbiAkZShhKXt2YXIgYj1hW3lmXTt2b2lkIDA9PT1iJiYoYj1hW3lmXT1uZXcgU2V0KTtyZXR1cm4gYn12YXIgemY9W10sQWY9LTE7ZnVuY3Rpb24gQmYoYSl7cmV0dXJue2N1cnJlbnQ6YX19ZnVuY3Rpb24gSChhKXswPkFmfHwoYS5jdXJyZW50PXpmW0FmXSx6ZltBZl09bnVsbCxBZi0tKX1mdW5jdGlvbiBJKGEsYil7QWYrKzt6ZltBZl09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBDZj17fSxNPUJmKENmKSxOPUJmKCExKSxEZj1DZjtcbmZ1bmN0aW9uIEVmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gQ2Y7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gRmYoYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiBHZigpe0goTik7SChNKX1mdW5jdGlvbiBIZihhLGIsYyl7aWYoTS5jdXJyZW50IT09Q2YpdGhyb3cgRXJyb3IoeSgxNjgpKTtJKE0sYik7SShOLGMpfVxuZnVuY3Rpb24gSWYoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWlmKCEoZSBpbiBhKSl0aHJvdyBFcnJvcih5KDEwOCxSYShiKXx8XCJVbmtub3duXCIsZSkpO3JldHVybiBtKHt9LGMsZCl9ZnVuY3Rpb24gSmYoYSl7YT0oYT1hLnN0YXRlTm9kZSkmJmEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fENmO0RmPU0uY3VycmVudDtJKE0sYSk7SShOLE4uY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gS2YoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHkoMTY5KSk7Yz8oYT1JZihhLGIsRGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxIKE4pLEgoTSksSShNLGEpKTpIKE4pO0koTixjKX1cbnZhciBMZj1udWxsLE1mPW51bGwsTmY9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksT2Y9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLFBmPXIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2ssUWY9ci51bnN0YWJsZV9zaG91bGRZaWVsZCxSZj1yLnVuc3RhYmxlX3JlcXVlc3RQYWludCxTZj1yLnVuc3RhYmxlX25vdyxUZj1yLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLFVmPXIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksVmY9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxXZj1yLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LFhmPXIudW5zdGFibGVfTG93UHJpb3JpdHksWWY9ci51bnN0YWJsZV9JZGxlUHJpb3JpdHksWmY9e30sJGY9dm9pZCAwIT09UmY/UmY6ZnVuY3Rpb24oKXt9LGFnPW51bGwsYmc9bnVsbCxjZz0hMSxkZz1TZigpLE89MUU0PmRnP1NmOmZ1bmN0aW9uKCl7cmV0dXJuIFNmKCktZGd9O1xuZnVuY3Rpb24gZWcoKXtzd2l0Y2goVGYoKSl7Y2FzZSBVZjpyZXR1cm4gOTk7Y2FzZSBWZjpyZXR1cm4gOTg7Y2FzZSBXZjpyZXR1cm4gOTc7Y2FzZSBYZjpyZXR1cm4gOTY7Y2FzZSBZZjpyZXR1cm4gOTU7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZmcoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIFVmO2Nhc2UgOTg6cmV0dXJuIFZmO2Nhc2UgOTc6cmV0dXJuIFdmO2Nhc2UgOTY6cmV0dXJuIFhmO2Nhc2UgOTU6cmV0dXJuIFlmO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGdnKGEsYil7YT1mZyhhKTtyZXR1cm4gTmYoYSxiKX1mdW5jdGlvbiBoZyhhLGIsYyl7YT1mZyhhKTtyZXR1cm4gT2YoYSxiLGMpfWZ1bmN0aW9uIGlnKCl7aWYobnVsbCE9PWJnKXt2YXIgYT1iZztiZz1udWxsO1BmKGEpfWpnKCl9XG5mdW5jdGlvbiBqZygpe2lmKCFjZyYmbnVsbCE9PWFnKXtjZz0hMDt2YXIgYT0wO3RyeXt2YXIgYj1hZztnZyg5OSxmdW5jdGlvbigpe2Zvcig7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07ZG8gYz1jKCEwKTt3aGlsZShudWxsIT09Yyl9fSk7YWc9bnVsbH1jYXRjaChjKXt0aHJvdyBudWxsIT09YWcmJihhZz1hZy5zbGljZShhKzEpKSxPZihVZixpZyksYzt9ZmluYWxseXtjZz0hMX19fXZhciBrZz1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZztmdW5jdGlvbiBsZyhhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW0oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKTtyZXR1cm4gYn1yZXR1cm4gYn12YXIgbWc9QmYobnVsbCksbmc9bnVsbCxvZz1udWxsLHBnPW51bGw7ZnVuY3Rpb24gcWcoKXtwZz1vZz1uZz1udWxsfVxuZnVuY3Rpb24gcmcoYSl7dmFyIGI9bWcuY3VycmVudDtIKG1nKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHNnKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKChhLmNoaWxkTGFuZXMmYik9PT1iKWlmKG51bGw9PT1jfHwoYy5jaGlsZExhbmVzJmIpPT09YilicmVhaztlbHNlIGMuY2hpbGRMYW5lc3w9YjtlbHNlIGEuY2hpbGRMYW5lc3w9YixudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9Yik7YT1hLnJldHVybn19ZnVuY3Rpb24gdGcoYSxiKXtuZz1hO3BnPW9nPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoMCE9PShhLmxhbmVzJmIpJiYodWc9ITApLGEuZmlyc3RDb250ZXh0PW51bGwpfVxuZnVuY3Rpb24gdmcoYSxiKXtpZihwZyE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpcGc9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07aWYobnVsbD09PW9nKXtpZihudWxsPT09bmcpdGhyb3cgRXJyb3IoeSgzMDgpKTtvZz1iO25nLmRlcGVuZGVuY2llcz17bGFuZXM6MCxmaXJzdENvbnRleHQ6YixyZXNwb25kZXJzOm51bGx9fWVsc2Ugb2c9b2cubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyIHdnPSExO2Z1bmN0aW9uIHhnKGEpe2EudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLm1lbW9pemVkU3RhdGUsZmlyc3RCYXNlVXBkYXRlOm51bGwsbGFzdEJhc2VVcGRhdGU6bnVsbCxzaGFyZWQ6e3BlbmRpbmc6bnVsbH0sZWZmZWN0czpudWxsfX1cbmZ1bmN0aW9uIHlnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9PT1hJiYoYi51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTphLmZpcnN0QmFzZVVwZGF0ZSxsYXN0QmFzZVVwZGF0ZTphLmxhc3RCYXNlVXBkYXRlLHNoYXJlZDphLnNoYXJlZCxlZmZlY3RzOmEuZWZmZWN0c30pfWZ1bmN0aW9uIHpnKGEsYil7cmV0dXJue2V2ZW50VGltZTphLGxhbmU6Yix0YWc6MCxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGx9fWZ1bmN0aW9uIEFnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hKXthPWEuc2hhcmVkO3ZhciBjPWEucGVuZGluZztudWxsPT09Yz9iLm5leHQ9YjooYi5uZXh0PWMubmV4dCxjLm5leHQ9Yik7YS5wZW5kaW5nPWJ9fVxuZnVuY3Rpb24gQmcoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlLGQ9YS5hbHRlcm5hdGU7aWYobnVsbCE9PWQmJihkPWQudXBkYXRlUXVldWUsYz09PWQpKXt2YXIgZT1udWxsLGY9bnVsbDtjPWMuZmlyc3RCYXNlVXBkYXRlO2lmKG51bGwhPT1jKXtkb3t2YXIgZz17ZXZlbnRUaW1lOmMuZXZlbnRUaW1lLGxhbmU6Yy5sYW5lLHRhZzpjLnRhZyxwYXlsb2FkOmMucGF5bG9hZCxjYWxsYmFjazpjLmNhbGxiYWNrLG5leHQ6bnVsbH07bnVsbD09PWY/ZT1mPWc6Zj1mLm5leHQ9ZztjPWMubmV4dH13aGlsZShudWxsIT09Yyk7bnVsbD09PWY/ZT1mPWI6Zj1mLm5leHQ9Yn1lbHNlIGU9Zj1iO2M9e2Jhc2VTdGF0ZTpkLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6ZSxsYXN0QmFzZVVwZGF0ZTpmLHNoYXJlZDpkLnNoYXJlZCxlZmZlY3RzOmQuZWZmZWN0c307YS51cGRhdGVRdWV1ZT1jO3JldHVybn1hPWMubGFzdEJhc2VVcGRhdGU7bnVsbD09PWE/Yy5maXJzdEJhc2VVcGRhdGU9YjphLm5leHQ9XG5iO2MubGFzdEJhc2VVcGRhdGU9Yn1cbmZ1bmN0aW9uIENnKGEsYixjLGQpe3ZhciBlPWEudXBkYXRlUXVldWU7d2c9ITE7dmFyIGY9ZS5maXJzdEJhc2VVcGRhdGUsZz1lLmxhc3RCYXNlVXBkYXRlLGg9ZS5zaGFyZWQucGVuZGluZztpZihudWxsIT09aCl7ZS5zaGFyZWQucGVuZGluZz1udWxsO3ZhciBrPWgsbD1rLm5leHQ7ay5uZXh0PW51bGw7bnVsbD09PWc/Zj1sOmcubmV4dD1sO2c9azt2YXIgbj1hLmFsdGVybmF0ZTtpZihudWxsIT09bil7bj1uLnVwZGF0ZVF1ZXVlO3ZhciBBPW4ubGFzdEJhc2VVcGRhdGU7QSE9PWcmJihudWxsPT09QT9uLmZpcnN0QmFzZVVwZGF0ZT1sOkEubmV4dD1sLG4ubGFzdEJhc2VVcGRhdGU9ayl9fWlmKG51bGwhPT1mKXtBPWUuYmFzZVN0YXRlO2c9MDtuPWw9az1udWxsO2Rve2g9Zi5sYW5lO3ZhciBwPWYuZXZlbnRUaW1lO2lmKChkJmgpPT09aCl7bnVsbCE9PW4mJihuPW4ubmV4dD17ZXZlbnRUaW1lOnAsbGFuZTowLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLFxubmV4dDpudWxsfSk7YTp7dmFyIEM9YSx4PWY7aD1iO3A9Yztzd2l0Y2goeC50YWcpe2Nhc2UgMTpDPXgucGF5bG9hZDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyl7QT1DLmNhbGwocCxBLGgpO2JyZWFrIGF9QT1DO2JyZWFrIGE7Y2FzZSAzOkMuZmxhZ3M9Qy5mbGFncyYtNDA5N3w2NDtjYXNlIDA6Qz14LnBheWxvYWQ7aD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQz9DLmNhbGwocCxBLGgpOkM7aWYobnVsbD09PWh8fHZvaWQgMD09PWgpYnJlYWsgYTtBPW0oe30sQSxoKTticmVhayBhO2Nhc2UgMjp3Zz0hMH19bnVsbCE9PWYuY2FsbGJhY2smJihhLmZsYWdzfD0zMixoPWUuZWZmZWN0cyxudWxsPT09aD9lLmVmZmVjdHM9W2ZdOmgucHVzaChmKSl9ZWxzZSBwPXtldmVudFRpbWU6cCxsYW5lOmgsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssbmV4dDpudWxsfSxudWxsPT09bj8obD1uPXAsaz1BKTpuPW4ubmV4dD1wLGd8PWg7Zj1mLm5leHQ7aWYobnVsbD09PVxuZilpZihoPWUuc2hhcmVkLnBlbmRpbmcsbnVsbD09PWgpYnJlYWs7ZWxzZSBmPWgubmV4dCxoLm5leHQ9bnVsbCxlLmxhc3RCYXNlVXBkYXRlPWgsZS5zaGFyZWQucGVuZGluZz1udWxsfXdoaWxlKDEpO251bGw9PT1uJiYoaz1BKTtlLmJhc2VTdGF0ZT1rO2UuZmlyc3RCYXNlVXBkYXRlPWw7ZS5sYXN0QmFzZVVwZGF0ZT1uO0RnfD1nO2EubGFuZXM9ZzthLm1lbW9pemVkU3RhdGU9QX19ZnVuY3Rpb24gRWcoYSxiLGMpe2E9Yi5lZmZlY3RzO2IuZWZmZWN0cz1udWxsO2lmKG51bGwhPT1hKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT1kLmNhbGxiYWNrO2lmKG51bGwhPT1lKXtkLmNhbGxiYWNrPW51bGw7ZD1jO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlKXRocm93IEVycm9yKHkoMTkxLGUpKTtlLmNhbGwoZCl9fX12YXIgRmc9KG5ldyBhYS5Db21wb25lbnQpLnJlZnM7XG5mdW5jdGlvbiBHZyhhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bSh7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jOzA9PT1hLmxhbmVzJiYoYS51cGRhdGVRdWV1ZS5iYXNlU3RhdGU9Yyl9XG52YXIgS2c9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFscyk/WmIoYSk9PT1hOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnRhZz0xO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsczt2YXIgYz1IZygpLGQ9SWcoYSksZT16ZyhjLGQpO2UudGFnPTI7dm9pZCAwIT09YiYmbnVsbCE9PWImJihlLmNhbGxiYWNrPVxuYik7QWcoYSxlKTtKZyhhLGQsYyl9fTtmdW5jdGlvbiBMZyhhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFKZShjLGQpfHwhSmUoZSxmKTohMH1cbmZ1bmN0aW9uIE1nKGEsYixjKXt2YXIgZD0hMSxlPUNmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPXZnKGYpOihlPUZmKGIpP0RmOk0uY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP0VmKGEsZSk6Q2YpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj1LZzthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxzPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIE5nKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIE9nKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9Rmc7eGcoYSk7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD12ZyhmKTooZj1GZihiKT9EZjpNLmN1cnJlbnQsZS5jb250ZXh0PUVmKGEsZikpO0NnKGEsYyxlLGQpO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihHZyhhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHxcbihiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxDZyhhLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmZsYWdzfD00KX12YXIgUGc9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIFFnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjtpZihjKXtpZigxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgzMDkpKTt2YXIgZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyBFcnJvcih5KDE0NyxhKSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1GZyYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcih5KDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcih5KDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gUmcoYSxiKXtpZihcInRleHRhcmVhXCIhPT1hLnR5cGUpdGhyb3cgRXJyb3IoeSgzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIpKTt9XG5mdW5jdGlvbiBTZyhhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmZsYWdzPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXthPVRnKGEsYik7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmZsYWdzPTIsXG5jKTpkO2IuZmxhZ3M9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZmxhZ3M9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPVVnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMpLGQucmVmPVFnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1WZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1RZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09Yy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1cbldnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBuKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1YZyhjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIEEoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPVVnKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjPVZnKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPVFnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSB0YTpyZXR1cm4gYj1XZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoUGcoYil8fExhKGIpKXJldHVybiBiPVhnKGIsXG5hLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7UmcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBwKGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09dWE/bihhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmsoYSxiLGMsZCk6bnVsbDtjYXNlIHRhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsfWlmKFBnKGMpfHxMYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDpuKGEsYixjLGQsbnVsbCk7UmcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDKGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9YS5nZXQoYyl8fFxubnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PXVhP24oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6ayhiLGEsZCxlKTtjYXNlIHRhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpfWlmKFBnKGQpfHxMYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxuKGIsYSxkLGUsbnVsbCk7UmcoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB4KGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLHQ9bnVsbCx1PWcsej1nPTAscT1udWxsO251bGwhPT11JiZ6PGgubGVuZ3RoO3orKyl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgbj1wKGUsdSxoW3pdLGspO2lmKG51bGw9PT1uKXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PVxubi5hbHRlcm5hdGUmJmIoZSx1KTtnPWYobixnLHopO251bGw9PT10P2w9bjp0LnNpYmxpbmc9bjt0PW47dT1xfWlmKHo9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7ejxoLmxlbmd0aDt6KyspdT1BKGUsaFt6XSxrKSxudWxsIT09dSYmKGc9Zih1LGcseiksbnVsbD09PXQ/bD11OnQuc2libGluZz11LHQ9dSk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpO3o8aC5sZW5ndGg7eisrKXE9Qyh1LGUseixoW3pdLGspLG51bGwhPT1xJiYoYSYmbnVsbCE9PXEuYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09cS5rZXk/ejpxLmtleSksZz1mKHEsZyx6KSxudWxsPT09dD9sPXE6dC5zaWJsaW5nPXEsdD1xKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfWZ1bmN0aW9uIHcoZSxnLGgsayl7dmFyIGw9TGEoaCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGwpdGhyb3cgRXJyb3IoeSgxNTApKTtoPWwuY2FsbChoKTtpZihudWxsPT1cbmgpdGhyb3cgRXJyb3IoeSgxNTEpKTtmb3IodmFyIHQ9bD1udWxsLHU9Zyx6PWc9MCxxPW51bGwsbj1oLm5leHQoKTtudWxsIT09dSYmIW4uZG9uZTt6Kyssbj1oLm5leHQoKSl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgdz1wKGUsdSxuLnZhbHVlLGspO2lmKG51bGw9PT13KXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PXcuYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKHcsZyx6KTtudWxsPT09dD9sPXc6dC5zaWJsaW5nPXc7dD13O3U9cX1pZihuLmRvbmUpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1BKGUsbi52YWx1ZSxrKSxudWxsIT09biYmKGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1DKHUsZSx6LG4udmFsdWUsayksbnVsbCE9PW4mJihhJiZudWxsIT09bi5hbHRlcm5hdGUmJlxudS5kZWxldGUobnVsbD09PW4ua2V5P3o6bi5rZXkpLGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09dWEmJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2Ugc2E6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKXtzd2l0Y2goay50YWcpe2Nhc2UgNzppZihmLnR5cGU9PT11YSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi5wcm9wcy5jaGlsZHJlbik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1icmVhaztkZWZhdWx0OmlmKGsuZWxlbWVudFR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO1xuZD1lKGssZi5wcm9wcyk7ZC5yZWY9UWcoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9fWMoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPWsuc2libGluZ31mLnR5cGU9PT11YT8oZD1YZyhmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9VmcoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9UWcoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIHRhOmE6e2ZvcihrPWYua2V5O251bGwhPT1kOyl7aWYoZC5rZXk9PT1rKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPVxuV2coZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYpLGQucmV0dXJuPWEsYT1kKTooYyhhLGQpLGQ9VWcoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoUGcoZikpcmV0dXJuIHgoYSxkLGYsaCk7aWYoTGEoZikpcmV0dXJuIHcoYSxkLGYsaCk7bCYmUmcoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMjI6Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aHJvdyBFcnJvcih5KDE1MixSYShhLnR5cGUpfHxcIkNvbXBvbmVudFwiKSk7fXJldHVybiBjKGEsZCl9fXZhciBZZz1TZyghMCksWmc9U2coITEpLCRnPXt9LGFoPUJmKCRnKSxiaD1CZigkZyksY2g9QmYoJGcpO1xuZnVuY3Rpb24gZGgoYSl7aWYoYT09PSRnKXRocm93IEVycm9yKHkoMTc0KSk7cmV0dXJuIGF9ZnVuY3Rpb24gZWgoYSxiKXtJKGNoLGIpO0koYmgsYSk7SShhaCwkZyk7YT1iLm5vZGVUeXBlO3N3aXRjaChhKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTptYihudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6YT04PT09YT9iLnBhcmVudE5vZGU6YixiPWEubmFtZXNwYWNlVVJJfHxudWxsLGE9YS50YWdOYW1lLGI9bWIoYixhKX1IKGFoKTtJKGFoLGIpfWZ1bmN0aW9uIGZoKCl7SChhaCk7SChiaCk7SChjaCl9ZnVuY3Rpb24gZ2goYSl7ZGgoY2guY3VycmVudCk7dmFyIGI9ZGgoYWguY3VycmVudCk7dmFyIGM9bWIoYixhLnR5cGUpO2IhPT1jJiYoSShiaCxhKSxJKGFoLGMpKX1mdW5jdGlvbiBoaChhKXtiaC5jdXJyZW50PT09YSYmKEgoYWgpLEgoYmgpKX12YXIgUD1CZigwKTtcbmZ1bmN0aW9uIGloKGEpe2Zvcih2YXIgYj1hO251bGwhPT1iOyl7aWYoMTM9PT1iLnRhZyl7dmFyIGM9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbD09PWN8fFwiJD9cIj09PWMuZGF0YXx8XCIkIVwiPT09Yy5kYXRhKSlyZXR1cm4gYn1lbHNlIGlmKDE5PT09Yi50YWcmJnZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5yZXZlYWxPcmRlcil7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9dmFyIGpoPW51bGwsa2g9bnVsbCxsaD0hMTtcbmZ1bmN0aW9uIG1oKGEsYil7dmFyIGM9bmgoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZmxhZ3M9ODtudWxsIT09YS5sYXN0RWZmZWN0PyhhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGEubGFzdEVmZmVjdD1jKTphLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1jfWZ1bmN0aW9uIG9oKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgMTM6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBwaChhKXtpZihsaCl7dmFyIGI9a2g7aWYoYil7dmFyIGM9YjtpZighb2goYSxiKSl7Yj1yZihjLm5leHRTaWJsaW5nKTtpZighYnx8IW9oKGEsYikpe2EuZmxhZ3M9YS5mbGFncyYtMTAyNXwyO2xoPSExO2poPWE7cmV0dXJufW1oKGpoLGMpfWpoPWE7a2g9cmYoYi5maXJzdENoaWxkKX1lbHNlIGEuZmxhZ3M9YS5mbGFncyYtMTAyNXwyLGxoPSExLGpoPWF9fWZ1bmN0aW9uIHFoKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTMhPT1hLnRhZzspYT1hLnJldHVybjtqaD1hfVxuZnVuY3Rpb24gcmgoYSl7aWYoYSE9PWpoKXJldHVybiExO2lmKCFsaClyZXR1cm4gcWgoYSksbGg9ITAsITE7dmFyIGI9YS50eXBlO2lmKDUhPT1hLnRhZ3x8XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiFuZihiLGEubWVtb2l6ZWRQcm9wcykpZm9yKGI9a2g7YjspbWgoYSxiKSxiPXJmKGIubmV4dFNpYmxpbmcpO3FoKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IoeSgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7a2g9cmYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ31raD1udWxsfX1lbHNlIGtoPWpoP3JmKGEuc3RhdGVOb2RlLm5leHRTaWJsaW5nKTpudWxsO3JldHVybiEwfVxuZnVuY3Rpb24gc2goKXtraD1qaD1udWxsO2xoPSExfXZhciB0aD1bXTtmdW5jdGlvbiB1aCgpe2Zvcih2YXIgYT0wO2E8dGgubGVuZ3RoO2ErKyl0aFthXS5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1udWxsO3RoLmxlbmd0aD0wfXZhciB2aD1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHdoPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLHhoPTAsUj1udWxsLFM9bnVsbCxUPW51bGwseWg9ITEsemg9ITE7ZnVuY3Rpb24gQWgoKXt0aHJvdyBFcnJvcih5KDMyMSkpO31mdW5jdGlvbiBCaChhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFIZShhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gQ2goYSxiLGMsZCxlLGYpe3hoPWY7Uj1iO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtiLmxhbmVzPTA7dmguY3VycmVudD1udWxsPT09YXx8bnVsbD09PWEubWVtb2l6ZWRTdGF0ZT9EaDpFaDthPWMoZCxlKTtpZih6aCl7Zj0wO2Rve3poPSExO2lmKCEoMjU+ZikpdGhyb3cgRXJyb3IoeSgzMDEpKTtmKz0xO1Q9Uz1udWxsO2IudXBkYXRlUXVldWU9bnVsbDt2aC5jdXJyZW50PUZoO2E9YyhkLGUpfXdoaWxlKHpoKX12aC5jdXJyZW50PUdoO2I9bnVsbCE9PVMmJm51bGwhPT1TLm5leHQ7eGg9MDtUPVM9Uj1udWxsO3loPSExO2lmKGIpdGhyb3cgRXJyb3IoeSgzMDApKTtyZXR1cm4gYX1mdW5jdGlvbiBIaCgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwsYmFzZVF1ZXVlOm51bGwscXVldWU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YTtyZXR1cm4gVH1cbmZ1bmN0aW9uIEloKCl7aWYobnVsbD09PVMpe3ZhciBhPVIuYWx0ZXJuYXRlO2E9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGx9ZWxzZSBhPVMubmV4dDt2YXIgYj1udWxsPT09VD9SLm1lbW9pemVkU3RhdGU6VC5uZXh0O2lmKG51bGwhPT1iKVQ9YixTPWE7ZWxzZXtpZihudWxsPT09YSl0aHJvdyBFcnJvcih5KDMxMCkpO1M9YTthPXttZW1vaXplZFN0YXRlOlMubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Uy5iYXNlU3RhdGUsYmFzZVF1ZXVlOlMuYmFzZVF1ZXVlLHF1ZXVlOlMucXVldWUsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWF9cmV0dXJuIFR9ZnVuY3Rpb24gSmgoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBLaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPVMsZT1kLmJhc2VRdWV1ZSxmPWMucGVuZGluZztpZihudWxsIT09Zil7aWYobnVsbCE9PWUpe3ZhciBnPWUubmV4dDtlLm5leHQ9Zi5uZXh0O2YubmV4dD1nfWQuYmFzZVF1ZXVlPWU9ZjtjLnBlbmRpbmc9bnVsbH1pZihudWxsIT09ZSl7ZT1lLm5leHQ7ZD1kLmJhc2VTdGF0ZTt2YXIgaD1nPWY9bnVsbCxrPWU7ZG97dmFyIGw9ay5sYW5lO2lmKCh4aCZsKT09PWwpbnVsbCE9PWgmJihoPWgubmV4dD17bGFuZTowLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfSksZD1rLmVhZ2VyUmVkdWNlcj09PWE/ay5lYWdlclN0YXRlOmEoZCxrLmFjdGlvbik7ZWxzZXt2YXIgbj17bGFuZTpsLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsXG5lYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9O251bGw9PT1oPyhnPWg9bixmPWQpOmg9aC5uZXh0PW47Ui5sYW5lc3w9bDtEZ3w9bH1rPWsubmV4dH13aGlsZShudWxsIT09ayYmayE9PWUpO251bGw9PT1oP2Y9ZDpoLm5leHQ9ZztIZShkLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWQ7Yi5iYXNlU3RhdGU9ZjtiLmJhc2VRdWV1ZT1oO2MubGFzdFJlbmRlcmVkU3RhdGU9ZH1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gTGgoYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1jLmRpc3BhdGNoLGU9Yy5wZW5kaW5nLGY9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lKXtjLnBlbmRpbmc9bnVsbDt2YXIgZz1lPWUubmV4dDtkbyBmPWEoZixnLmFjdGlvbiksZz1nLm5leHQ7d2hpbGUoZyE9PWUpO0hlKGYsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtudWxsPT09Yi5iYXNlUXVldWUmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2YsZF19XG5mdW5jdGlvbiBNaChhLGIsYyl7dmFyIGQ9Yi5fZ2V0VmVyc2lvbjtkPWQoYi5fc291cmNlKTt2YXIgZT1iLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5O2lmKG51bGwhPT1lKWE9ZT09PWQ7ZWxzZSBpZihhPWEubXV0YWJsZVJlYWRMYW5lcyxhPSh4aCZhKT09PWEpYi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1kLHRoLnB1c2goYik7aWYoYSlyZXR1cm4gYyhiLl9zb3VyY2UpO3RoLnB1c2goYik7dGhyb3cgRXJyb3IoeSgzNTApKTt9XG5mdW5jdGlvbiBOaChhLGIsYyxkKXt2YXIgZT1VO2lmKG51bGw9PT1lKXRocm93IEVycm9yKHkoMzQ5KSk7dmFyIGY9Yi5fZ2V0VmVyc2lvbixnPWYoYi5fc291cmNlKSxoPXZoLmN1cnJlbnQsaz1oLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIE1oKGUsYixjKX0pLGw9a1sxXSxuPWtbMF07az1UO3ZhciBBPWEubWVtb2l6ZWRTdGF0ZSxwPUEucmVmcyxDPXAuZ2V0U25hcHNob3QseD1BLnNvdXJjZTtBPUEuc3Vic2NyaWJlO3ZhciB3PVI7YS5tZW1vaXplZFN0YXRlPXtyZWZzOnAsc291cmNlOmIsc3Vic2NyaWJlOmR9O2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cC5nZXRTbmFwc2hvdD1jO3Auc2V0U25hcHNob3Q9bDt2YXIgYT1mKGIuX3NvdXJjZSk7aWYoIUhlKGcsYSkpe2E9YyhiLl9zb3VyY2UpO0hlKG4sYSl8fChsKGEpLGE9SWcodyksZS5tdXRhYmxlUmVhZExhbmVzfD1hJmUucGVuZGluZ0xhbmVzKTthPWUubXV0YWJsZVJlYWRMYW5lcztlLmVudGFuZ2xlZExhbmVzfD1hO2Zvcih2YXIgZD1cbmUuZW50YW5nbGVtZW50cyxoPWE7MDxoOyl7dmFyIGs9MzEtVmMoaCksdj0xPDxrO2Rba118PWE7aCY9fnZ9fX0sW2MsYixkXSk7aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gZChiLl9zb3VyY2UsZnVuY3Rpb24oKXt2YXIgYT1wLmdldFNuYXBzaG90LGM9cC5zZXRTbmFwc2hvdDt0cnl7YyhhKGIuX3NvdXJjZSkpO3ZhciBkPUlnKHcpO2UubXV0YWJsZVJlYWRMYW5lc3w9ZCZlLnBlbmRpbmdMYW5lc31jYXRjaChxKXtjKGZ1bmN0aW9uKCl7dGhyb3cgcTt9KX19KX0sW2IsZF0pO0hlKEMsYykmJkhlKHgsYikmJkhlKEEsZCl8fChhPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOm59LGEuZGlzcGF0Y2g9bD1PaC5iaW5kKG51bGwsUixhKSxrLnF1ZXVlPWEsay5iYXNlUXVldWU9bnVsbCxuPU1oKGUsYixjKSxrLm1lbW9pemVkU3RhdGU9ay5iYXNlU3RhdGU9bik7cmV0dXJuIG59XG5mdW5jdGlvbiBQaChhLGIsYyl7dmFyIGQ9SWgoKTtyZXR1cm4gTmgoZCxhLGIsYyl9ZnVuY3Rpb24gUWgoYSl7dmFyIGI9SGgoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6YX07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19XG5mdW5jdGlvbiBSaChhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07Yj1SLnVwZGF0ZVF1ZXVlO251bGw9PT1iPyhiPXtsYXN0RWZmZWN0Om51bGx9LFIudXBkYXRlUXVldWU9YixiLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihjPWIubGFzdEVmZmVjdCxudWxsPT09Yz9iLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGQ9Yy5uZXh0LGMubmV4dD1hLGEubmV4dD1kLGIubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gU2goYSl7dmFyIGI9SGgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX1mdW5jdGlvbiBUaCgpe3JldHVybiBJaCgpLm1lbW9pemVkU3RhdGV9ZnVuY3Rpb24gVWgoYSxiLGMsZCl7dmFyIGU9SGgoKTtSLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gVmgoYSxiLGMsZCl7dmFyIGU9SWgoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Uyl7dmFyIGc9Uy5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZCaChkLGcuZGVwcykpe1JoKGIsYyxmLGQpO3JldHVybn19Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsZixkKX1mdW5jdGlvbiBXaChhLGIpe3JldHVybiBVaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFhoKGEsYil7cmV0dXJuIFZoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWWgoYSxiKXtyZXR1cm4gVmgoNCwyLGEsYil9ZnVuY3Rpb24gWmgoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1cbmZ1bmN0aW9uICRoKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVmgoNCwyLFpoLmJpbmQobnVsbCxiLGEpLGMpfWZ1bmN0aW9uIGFpKCl7fWZ1bmN0aW9uIGJpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfWZ1bmN0aW9uIGNpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gZGkoYSxiKXt2YXIgYz1lZygpO2dnKDk4PmM/OTg6YyxmdW5jdGlvbigpe2EoITApfSk7Z2coOTc8Yz85NzpjLGZ1bmN0aW9uKCl7dmFyIGM9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2EoITEpLGIoKX1maW5hbGx5e3doLnRyYW5zaXRpb249Y319KX1cbmZ1bmN0aW9uIE9oKGEsYixjKXt2YXIgZD1IZygpLGU9SWcoYSksZj17bGFuZTplLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LGc9Yi5wZW5kaW5nO251bGw9PT1nP2YubmV4dD1mOihmLm5leHQ9Zy5uZXh0LGcubmV4dD1mKTtiLnBlbmRpbmc9ZjtnPWEuYWx0ZXJuYXRlO2lmKGE9PT1SfHxudWxsIT09ZyYmZz09PVIpemg9eWg9ITA7ZWxzZXtpZigwPT09YS5sYW5lcyYmKG51bGw9PT1nfHwwPT09Zy5sYW5lcykmJihnPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZykpdHJ5e3ZhciBoPWIubGFzdFJlbmRlcmVkU3RhdGUsaz1nKGgsYyk7Zi5lYWdlclJlZHVjZXI9ZztmLmVhZ2VyU3RhdGU9aztpZihIZShrLGgpKXJldHVybn1jYXRjaChsKXt9ZmluYWxseXt9SmcoYSxlLGQpfX1cbnZhciBHaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6QWgsdXNlQ29udGV4dDpBaCx1c2VFZmZlY3Q6QWgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpBaCx1c2VMYXlvdXRFZmZlY3Q6QWgsdXNlTWVtbzpBaCx1c2VSZWR1Y2VyOkFoLHVzZVJlZjpBaCx1c2VTdGF0ZTpBaCx1c2VEZWJ1Z1ZhbHVlOkFoLHVzZURlZmVycmVkVmFsdWU6QWgsdXNlVHJhbnNpdGlvbjpBaCx1c2VNdXRhYmxlU291cmNlOkFoLHVzZU9wYXF1ZUlkZW50aWZpZXI6QWgsdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxEaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtIaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpXaCx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVWgoNCwyLFpoLmJpbmQobnVsbCxcbmIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBVaCg0LDIsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPUhoKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPWQucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOlNoLHVzZVN0YXRlOlFoLHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1RaChhKSxjPWJbMF0sZD1iWzFdO1doKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjtcbndoLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1RaCghMSksYj1hWzBdO2E9ZGkuYmluZChudWxsLGFbMV0pO1NoKGEpO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2QubWVtb2l6ZWRTdGF0ZT17cmVmczp7Z2V0U25hcHNob3Q6YixzZXRTbmFwc2hvdDpudWxsfSxzb3VyY2U6YSxzdWJzY3JpYmU6Y307cmV0dXJuIE5oKGQsYSxiLGMpfSx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7aWYobGgpe3ZhciBhPSExLGI9dWYoZnVuY3Rpb24oKXthfHwoYT0hMCxjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKSk7dGhyb3cgRXJyb3IoeSgzNTUpKTt9KSxjPVFoKGIpWzFdOzA9PT0oUi5tb2RlJjIpJiYoUi5mbGFnc3w9NTE2LFJoKDUsZnVuY3Rpb24oKXtjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKX0sXG52b2lkIDAsbnVsbCkpO3JldHVybiBifWI9XCJyOlwiKyh0ZisrKS50b1N0cmluZygzNik7UWgoYik7cmV0dXJuIGJ9LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRWg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpLaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9S2goSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1LaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEZoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6TGgsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUxoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9TGgoSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxlaT1yYS5SZWFjdEN1cnJlbnRPd25lcix1Zz0hMTtmdW5jdGlvbiBmaShhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP1pnKGIsbnVsbCxjLGQpOllnKGIsYS5jaGlsZCxjLGQpfWZ1bmN0aW9uIGdpKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjt0ZyhiLGUpO2Q9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaWkoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hKXt2YXIgZz1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJiFqaShnKSYmdm9pZCAwPT09Zy5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZyxraShhLGIsZyxkLGUsZik7YT1WZyhjLnR5cGUsbnVsbCxkLGIsYi5tb2RlLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1nPWEuY2hpbGQ7aWYoMD09PShlJmYpJiYoZT1nLm1lbW9pemVkUHJvcHMsYz1jLmNvbXBhcmUsYz1udWxsIT09Yz9jOkplLGMoZSxkKSYmYS5yZWY9PT1iLnJlZikpcmV0dXJuIGhpKGEsYixmKTtiLmZsYWdzfD0xO2E9VGcoZyxkKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBraShhLGIsYyxkLGUsZil7aWYobnVsbCE9PWEmJkplKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZilpZih1Zz0hMSwwIT09KGYmZSkpMCE9PShhLmZsYWdzJjE2Mzg0KSYmKHVnPSEwKTtlbHNlIHJldHVybiBiLmxhbmVzPWEubGFuZXMsaGkoYSxiLGYpO3JldHVybiBsaShhLGIsYyxkLGYpfVxuZnVuY3Rpb24gbWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbixmPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO2lmKFwiaGlkZGVuXCI9PT1kLm1vZGV8fFwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIj09PWQubW9kZSlpZigwPT09KGIubW9kZSY0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLGMpO2Vsc2UgaWYoMCE9PShjJjEwNzM3NDE4MjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsbnVsbCE9PWY/Zi5iYXNlTGFuZXM6Yyk7ZWxzZSByZXR1cm4gYT1udWxsIT09Zj9mLmJhc2VMYW5lc3xjOmMsYi5sYW5lcz1iLmNoaWxkTGFuZXM9MTA3Mzc0MTgyNCxiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczphfSxuaShiLGEpLG51bGw7ZWxzZSBudWxsIT09Zj8oZD1mLmJhc2VMYW5lc3xjLGIubWVtb2l6ZWRTdGF0ZT1udWxsKTpkPWMsbmkoYixkKTtmaShhLGIsZSxjKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIG9pKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZmxhZ3N8PTEyOH1mdW5jdGlvbiBsaShhLGIsYyxkLGUpe3ZhciBmPUZmKGMpP0RmOk0uY3VycmVudDtmPUVmKGIsZik7dGcoYixlKTtjPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHBpKGEsYixjLGQsZSl7aWYoRmYoYykpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTt0ZyhiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSludWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxNZyhiLGMsZCksT2coYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGs9Zy5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9dmcobCk6KGw9RmYoYyk/RGY6TS5jdXJyZW50LGw9RWYoYixsKSk7dmFyIG49Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7QXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxrIT09bCkmJk5nKGIsZyxkLGwpO3dnPSExO3ZhciBwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7az1iLm1lbW9pemVkU3RhdGU7aCE9PWR8fHAhPT1rfHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbiYmKEdnKGIsYyxuLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoaD13Z3x8TGcoYixjLGgsZCxwLGssbCkpPyhBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PVxudHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxkPSExKX1lbHNle2c9Yi5zdGF0ZU5vZGU7eWcoYSxiKTtoPWIubWVtb2l6ZWRQcm9wcztsPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpsZyhiLnR5cGUsaCk7Zy5wcm9wcz1sO0E9Yi5wZW5kaW5nUHJvcHM7cD1nLmNvbnRleHQ7az1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az12ZyhrKTooaz1GZihjKT9EZjpNLmN1cnJlbnQsaz1FZihiLGspKTt2YXIgQz1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczsobj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQ3x8XG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PUF8fHAhPT1rKSYmTmcoYixnLGQsayk7d2c9ITE7cD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO3ZhciB4PWIubWVtb2l6ZWRTdGF0ZTtoIT09QXx8cCE9PXh8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDJiYoR2coYixjLEMsZCkseD1iLm1lbW9pemVkU3RhdGUpLChsPXdnfHxMZyhiLGMsbCxkLHAseCxrKSk/KG58fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsXG54LGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQseCxrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmZsYWdzfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT14KSxnLnByb3BzPWQsZy5zdGF0ZT14LGcuY29udGV4dD1rLGQ9bCk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8XG5oPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGQ9ITEpfXJldHVybiBxaShhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBxaShhLGIsYyxkLGUsZil7b2koYSxiKTt2YXIgZz0wIT09KGIuZmxhZ3MmNjQpO2lmKCFkJiYhZylyZXR1cm4gZSYmS2YoYixjLCExKSxoaShhLGIsZik7ZD1iLnN0YXRlTm9kZTtlaS5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmZsYWdzfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPVlnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9WWcoYixudWxsLGgsZikpOmZpKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJktmKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gcmkoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9IZihhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZIZihhLGIuY29udGV4dCwhMSk7ZWgoYSxiLmNvbnRhaW5lckluZm8pfVxudmFyIHNpPXtkZWh5ZHJhdGVkOm51bGwscmV0cnlMYW5lOjB9O1xuZnVuY3Rpb24gdGkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9UC5jdXJyZW50LGY9ITEsZzsoZz0wIT09KGIuZmxhZ3MmNjQpKXx8KGc9bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGU/ITE6MCE9PShlJjIpKTtnPyhmPSEwLGIuZmxhZ3MmPS02NSk6bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGV8fHZvaWQgMD09PWQuZmFsbGJhY2t8fCEwPT09ZC51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8KGV8PTEpO0koUCxlJjEpO2lmKG51bGw9PT1hKXt2b2lkIDAhPT1kLmZhbGxiYWNrJiZwaChiKTthPWQuY2hpbGRyZW47ZT1kLmZhbGxiYWNrO2lmKGYpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sYi5tZW1vaXplZFN0YXRlPXNpLGE7aWYoXCJudW1iZXJcIj09PXR5cGVvZiBkLnVuc3RhYmxlX2V4cGVjdGVkTG9hZFRpbWUpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sXG5iLm1lbW9pemVkU3RhdGU9c2ksYi5sYW5lcz0zMzU1NDQzMixhO2M9dmkoe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46YX0sYi5tb2RlLGMsbnVsbCk7Yy5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1jfWlmKG51bGwhPT1hLm1lbW9pemVkU3RhdGUpe2lmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306e2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTpcbntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWZ1bmN0aW9uIHVpKGEsYixjLGQpe3ZhciBlPWEubW9kZSxmPWEuY2hpbGQ7Yj17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmJ9OzA9PT0oZSYyKSYmbnVsbCE9PWY/KGYuY2hpbGRMYW5lcz0wLGYucGVuZGluZ1Byb3BzPWIpOmY9dmkoYixlLDAsbnVsbCk7Yz1YZyhjLGUsZCxudWxsKTtmLnJldHVybj1hO2MucmV0dXJuPWE7Zi5zaWJsaW5nPWM7YS5jaGlsZD1mO3JldHVybiBjfVxuZnVuY3Rpb24geGkoYSxiLGMsZCl7dmFyIGU9YS5jaGlsZDthPWUuc2libGluZztjPVRnKGUse21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46Y30pOzA9PT0oYi5tb2RlJjIpJiYoYy5sYW5lcz1kKTtjLnJldHVybj1iO2Muc2libGluZz1udWxsO251bGwhPT1hJiYoYS5uZXh0RWZmZWN0PW51bGwsYS5mbGFncz04LGIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWEpO3JldHVybiBiLmNoaWxkPWN9XG5mdW5jdGlvbiB3aShhLGIsYyxkLGUpe3ZhciBmPWIubW9kZSxnPWEuY2hpbGQ7YT1nLnNpYmxpbmc7dmFyIGg9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpjfTswPT09KGYmMikmJmIuY2hpbGQhPT1nPyhjPWIuY2hpbGQsYy5jaGlsZExhbmVzPTAsYy5wZW5kaW5nUHJvcHM9aCxnPWMubGFzdEVmZmVjdCxudWxsIT09Zz8oYi5maXJzdEVmZmVjdD1jLmZpcnN0RWZmZWN0LGIubGFzdEVmZmVjdD1nLGcubmV4dEVmZmVjdD1udWxsKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsKTpjPVRnKGcsaCk7bnVsbCE9PWE/ZD1UZyhhLGQpOihkPVhnKGQsZixlLG51bGwpLGQuZmxhZ3N8PTIpO2QucmV0dXJuPWI7Yy5yZXR1cm49YjtjLnNpYmxpbmc9ZDtiLmNoaWxkPWM7cmV0dXJuIGR9ZnVuY3Rpb24geWkoYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7c2coYS5yZXR1cm4sYil9XG5mdW5jdGlvbiB6aShhLGIsYyxkLGUsZil7dmFyIGc9YS5tZW1vaXplZFN0YXRlO251bGw9PT1nP2EubWVtb2l6ZWRTdGF0ZT17aXNCYWNrd2FyZHM6YixyZW5kZXJpbmc6bnVsbCxyZW5kZXJpbmdTdGFydFRpbWU6MCxsYXN0OmQsdGFpbDpjLHRhaWxNb2RlOmUsbGFzdEVmZmVjdDpmfTooZy5pc0JhY2t3YXJkcz1iLGcucmVuZGVyaW5nPW51bGwsZy5yZW5kZXJpbmdTdGFydFRpbWU9MCxnLmxhc3Q9ZCxnLnRhaWw9YyxnLnRhaWxNb2RlPWUsZy5sYXN0RWZmZWN0PWYpfVxuZnVuY3Rpb24gQWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5yZXZlYWxPcmRlcixmPWQudGFpbDtmaShhLGIsZC5jaGlsZHJlbixjKTtkPVAuY3VycmVudDtpZigwIT09KGQmMikpZD1kJjF8MixiLmZsYWdzfD02NDtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmeWkoYSxjKTtlbHNlIGlmKDE5PT09YS50YWcpeWkoYSxjKTtlbHNlIGlmKG51bGwhPT1hLmNoaWxkKXthLmNoaWxkLnJldHVybj1hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YilicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8YS5yZXR1cm49PT1iKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWQmPTF9SShQLGQpO2lmKDA9PT0oYi5tb2RlJjIpKWIubWVtb2l6ZWRTdGF0ZT1cbm51bGw7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcImZvcndhcmRzXCI6Yz1iLmNoaWxkO2ZvcihlPW51bGw7bnVsbCE9PWM7KWE9Yy5hbHRlcm5hdGUsbnVsbCE9PWEmJm51bGw9PT1paChhKSYmKGU9YyksYz1jLnNpYmxpbmc7Yz1lO251bGw9PT1jPyhlPWIuY2hpbGQsYi5jaGlsZD1udWxsKTooZT1jLnNpYmxpbmcsYy5zaWJsaW5nPW51bGwpO3ppKGIsITEsZSxjLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PWloKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX16aShiLCEwLGMsbnVsbCxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6emkoYiwhMSxudWxsLG51bGwsdm9pZCAwLGIubGFzdEVmZmVjdCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhpKGEsYixjKXtudWxsIT09YSYmKGIuZGVwZW5kZW5jaWVzPWEuZGVwZW5kZW5jaWVzKTtEZ3w9Yi5sYW5lcztpZigwIT09KGMmYi5jaGlsZExhbmVzKSl7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IEVycm9yKHkoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVRnKGEsYS5wZW5kaW5nUHJvcHMpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1UZyhhLGEucGVuZGluZ1Byb3BzKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfXJldHVybiBudWxsfXZhciBCaSxDaSxEaSxFaTtcbkJpPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtDaT1mdW5jdGlvbigpe307XG5EaT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLm1lbW9pemVkUHJvcHM7aWYoZSE9PWQpe2E9Yi5zdGF0ZU5vZGU7ZGgoYWguY3VycmVudCk7dmFyIGY9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6ZT1ZYShhLGUpO2Q9WWEoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZSk7ZD1lYihhLGQpO2Y9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmU9bSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtkPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7Zj1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjplPWdiKGEsZSk7ZD1nYihhLGQpO2Y9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX12YihjLGQpO3ZhciBnO2M9bnVsbDtmb3IobCBpbiBlKWlmKCFkLmhhc093blByb3BlcnR5KGwpJiZlLmhhc093blByb3BlcnR5KGwpJiZudWxsIT1lW2xdKWlmKFwic3R5bGVcIj09PVxubCl7dmFyIGg9ZVtsXTtmb3IoZyBpbiBoKWguaGFzT3duUHJvcGVydHkoZykmJihjfHwoYz17fSksY1tnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmXCJjaGlsZHJlblwiIT09bCYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpP2Z8fChmPVtdKTooZj1mfHxbXSkucHVzaChsLG51bGwpKTtmb3IobCBpbiBkKXt2YXIgaz1kW2xdO2g9bnVsbCE9ZT9lW2xdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGwpJiZrIT09aCYmKG51bGwhPWt8fG51bGwhPWgpKWlmKFwic3R5bGVcIj09PWwpaWYoaCl7Zm9yKGcgaW4gaCkhaC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGN8fChjPXt9KSxjW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmaFtnXSE9PWtbZ10mJihjfHxcbihjPXt9KSxjW2ddPWtbZ10pfWVsc2UgY3x8KGZ8fChmPVtdKSxmLnB1c2gobCxjKSksYz1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGg9aD9oLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmaCE9PWsmJihmPWZ8fFtdKS5wdXNoKGwsaykpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChmPWZ8fFtdKS5wdXNoKGwsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT8obnVsbCE9ayYmXCJvblNjcm9sbFwiPT09bCYmRyhcInNjcm9sbFwiLGEpLGZ8fGg9PT1rfHwoZj1bXSkpOlwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWsmJmsuJCR0eXBlb2Y9PT1HYT9rLnRvU3RyaW5nKCk6KGY9Znx8W10pLnB1c2gobCxrKSl9YyYmKGY9Znx8W10pLnB1c2goXCJzdHlsZVwiLFxuYyk7dmFyIGw9ZjtpZihiLnVwZGF0ZVF1ZXVlPWwpYi5mbGFnc3w9NH19O0VpPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiYoYi5mbGFnc3w9NCl9O2Z1bmN0aW9uIEZpKGEsYil7aWYoIWxoKXN3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBHaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6Y2FzZSAxNjpjYXNlIDE1OmNhc2UgMDpjYXNlIDExOmNhc2UgNzpjYXNlIDg6Y2FzZSAxMjpjYXNlIDk6Y2FzZSAxNDpyZXR1cm4gbnVsbDtjYXNlIDE6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtkPWIuc3RhdGVOb2RlO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1hfHxudWxsPT09YS5jaGlsZClyaChiKT9iLmZsYWdzfD00OmQuaHlkcmF0ZXx8KGIuZmxhZ3N8PTI1Nik7Q2koYik7cmV0dXJuIG51bGw7Y2FzZSA1OmhoKGIpO3ZhciBlPWRoKGNoLmN1cnJlbnQpO2M9Yi50eXBlO2lmKG51bGwhPT1hJiZudWxsIT1iLnN0YXRlTm9kZSlEaShhLGIsYyxkLGUpLGEucmVmIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpO2Vsc2V7aWYoIWQpe2lmKG51bGw9PT1cbmIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7cmV0dXJuIG51bGx9YT1kaChhaC5jdXJyZW50KTtpZihyaChiKSl7ZD1iLnN0YXRlTm9kZTtjPWIudHlwZTt2YXIgZj1iLm1lbW9pemVkUHJvcHM7ZFt3Zl09YjtkW3hmXT1mO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGQpO0coXCJjbG9zZVwiLGQpO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoYT0wO2E8WGUubGVuZ3RoO2ErKylHKFhlW2FdLGQpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixkKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixkKTtHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGQpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGQsZik7RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZC5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhZi5tdWx0aXBsZX07RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihkLGYpLEcoXCJpbnZhbGlkXCIsZCl9dmIoYyxmKTthPW51bGw7Zm9yKHZhciBnIGluIGYpZi5oYXNPd25Qcm9wZXJ0eShnKSYmKGU9ZltnXSxcImNoaWxkcmVuXCI9PT1nP1wic3RyaW5nXCI9PT10eXBlb2YgZT9kLnRleHRDb250ZW50IT09ZSYmKGE9W1wiY2hpbGRyZW5cIixlXSk6XCJudW1iZXJcIj09PXR5cGVvZiBlJiZkLnRleHRDb250ZW50IT09XCJcIitlJiYoYT1bXCJjaGlsZHJlblwiLFwiXCIrZV0pOmNhLmhhc093blByb3BlcnR5KGcpJiZudWxsIT1lJiZcIm9uU2Nyb2xsXCI9PT1nJiZHKFwic2Nyb2xsXCIsZCkpO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShkKTtjYihkLGYsITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGQpO2piKGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5vbkNsaWNrJiYoZC5vbmNsaWNrPVxuamYpfWQ9YTtiLnVwZGF0ZVF1ZXVlPWQ7bnVsbCE9PWQmJihiLmZsYWdzfD00KX1lbHNle2c9OT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQ7YT09PWtiLmh0bWwmJihhPWxiKGMpKTthPT09a2IuaHRtbD9cInNjcmlwdFwiPT09Yz8oYT1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixhPWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBkLmlzP2E9Zy5jcmVhdGVFbGVtZW50KGMse2lzOmQuaXN9KTooYT1nLmNyZWF0ZUVsZW1lbnQoYyksXCJzZWxlY3RcIj09PWMmJihnPWEsZC5tdWx0aXBsZT9nLm11bHRpcGxlPSEwOmQuc2l6ZSYmKGcuc2l6ZT1kLnNpemUpKSk6YT1nLmNyZWF0ZUVsZW1lbnROUyhhLGMpO2Fbd2ZdPWI7YVt4Zl09ZDtCaShhLGIsITEsITEpO2Iuc3RhdGVOb2RlPWE7Zz13YihjLGQpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGEpO0coXCJjbG9zZVwiLGEpO1xuZT1kO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPFhlLmxlbmd0aDtlKyspRyhYZVtlXSxhKTtlPWQ7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixhKTtHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoYSxkKTtlPVlhKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZC5tdWx0aXBsZX07ZT1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoYSxkKTtlPVxuZ2IoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2RlZmF1bHQ6ZT1kfXZiKGMsZSk7dmFyIGg9ZTtmb3IoZiBpbiBoKWlmKGguaGFzT3duUHJvcGVydHkoZikpe3ZhciBrPWhbZl07XCJzdHlsZVwiPT09Zj90YihhLGspOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWY/KGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmb2IoYSxrKSk6XCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGs/KFwidGV4dGFyZWFcIiE9PWN8fFwiXCIhPT1rKSYmcGIoYSxrKTpcIm51bWJlclwiPT09dHlwZW9mIGsmJnBiKGEsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ZiYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWYmJlwiYXV0b0ZvY3VzXCIhPT1mJiYoY2EuaGFzT3duUHJvcGVydHkoZik/bnVsbCE9ayYmXCJvblNjcm9sbFwiPT09ZiYmRyhcInNjcm9sbFwiLGEpOm51bGwhPWsmJnFhKGEsZixrLGcpKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoYSk7Y2IoYSxkLCExKTtcbmJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGEpO2piKGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1kLnZhbHVlJiZhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitTYShkLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEubXVsdGlwbGU9ISFkLm11bHRpcGxlO2Y9ZC52YWx1ZTtudWxsIT1mP2ZiKGEsISFkLm11bHRpcGxlLGYsITEpOm51bGwhPWQuZGVmYXVsdFZhbHVlJiZmYihhLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX1tZihjLGQpJiYoYi5mbGFnc3w9NCl9bnVsbCE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KX1yZXR1cm4gbnVsbDtjYXNlIDY6aWYoYSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRWkoYSxiLGEubWVtb2l6ZWRQcm9wcyxkKTtlbHNle2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZCYmbnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7XG5jPWRoKGNoLmN1cnJlbnQpO2RoKGFoLmN1cnJlbnQpO3JoKGIpPyhkPWIuc3RhdGVOb2RlLGM9Yi5tZW1vaXplZFByb3BzLGRbd2ZdPWIsZC5ub2RlVmFsdWUhPT1jJiYoYi5mbGFnc3w9NCkpOihkPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZCksZFt3Zl09YixiLnN0YXRlTm9kZT1kKX1yZXR1cm4gbnVsbDtjYXNlIDEzOkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYi5sYW5lcz1jLGI7ZD1udWxsIT09ZDtjPSExO251bGw9PT1hP3ZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5mYWxsYmFjayYmcmgoYik6Yz1udWxsIT09YS5tZW1vaXplZFN0YXRlO2lmKGQmJiFjJiYwIT09KGIubW9kZSYyKSlpZihudWxsPT09YSYmITAhPT1iLm1lbW9pemVkUHJvcHMudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fDAhPT0oUC5jdXJyZW50JjEpKTA9PT1WJiYoVj0zKTtlbHNle2lmKDA9PT1WfHwzPT09VilWPVxuNDtudWxsPT09VXx8MD09PShEZyYxMzQyMTc3MjcpJiYwPT09KEhpJjEzNDIxNzcyNyl8fElpKFUsVyl9aWYoZHx8YyliLmZsYWdzfD00O3JldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxDaShiKSxudWxsPT09YSYmY2YoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksbnVsbDtjYXNlIDEwOnJldHVybiByZyhiKSxudWxsO2Nhc2UgMTc6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDE5OkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Zj0wIT09KGIuZmxhZ3MmNjQpO2c9ZC5yZW5kZXJpbmc7aWYobnVsbD09PWcpaWYoZilGaShkLCExKTtlbHNle2lmKDAhPT1WfHxudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7Zz1paChhKTtpZihudWxsIT09Zyl7Yi5mbGFnc3w9NjQ7RmkoZCwhMSk7Zj1nLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoYi51cGRhdGVRdWV1ZT1mLGIuZmxhZ3N8PTQpO1xubnVsbD09PWQubGFzdEVmZmVjdCYmKGIuZmlyc3RFZmZlY3Q9bnVsbCk7Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdDtkPWM7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZj1jLGE9ZCxmLmZsYWdzJj0yLGYubmV4dEVmZmVjdD1udWxsLGYuZmlyc3RFZmZlY3Q9bnVsbCxmLmxhc3RFZmZlY3Q9bnVsbCxnPWYuYWx0ZXJuYXRlLG51bGw9PT1nPyhmLmNoaWxkTGFuZXM9MCxmLmxhbmVzPWEsZi5jaGlsZD1udWxsLGYubWVtb2l6ZWRQcm9wcz1udWxsLGYubWVtb2l6ZWRTdGF0ZT1udWxsLGYudXBkYXRlUXVldWU9bnVsbCxmLmRlcGVuZGVuY2llcz1udWxsLGYuc3RhdGVOb2RlPW51bGwpOihmLmNoaWxkTGFuZXM9Zy5jaGlsZExhbmVzLGYubGFuZXM9Zy5sYW5lcyxmLmNoaWxkPWcuY2hpbGQsZi5tZW1vaXplZFByb3BzPWcubWVtb2l6ZWRQcm9wcyxmLm1lbW9pemVkU3RhdGU9Zy5tZW1vaXplZFN0YXRlLGYudXBkYXRlUXVldWU9Zy51cGRhdGVRdWV1ZSxmLnR5cGU9Zy50eXBlLGE9Zy5kZXBlbmRlbmNpZXMsXG5mLmRlcGVuZGVuY2llcz1udWxsPT09YT9udWxsOntsYW5lczphLmxhbmVzLGZpcnN0Q29udGV4dDphLmZpcnN0Q29udGV4dH0pLGM9Yy5zaWJsaW5nO0koUCxQLmN1cnJlbnQmMXwyKTtyZXR1cm4gYi5jaGlsZH1hPWEuc2libGluZ31udWxsIT09ZC50YWlsJiZPKCk+SmkmJihiLmZsYWdzfD02NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpfWVsc2V7aWYoIWYpaWYoYT1paChnKSxudWxsIT09YSl7aWYoYi5mbGFnc3w9NjQsZj0hMCxjPWEudXBkYXRlUXVldWUsbnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5mbGFnc3w9NCksRmkoZCwhMCksbnVsbD09PWQudGFpbCYmXCJoaWRkZW5cIj09PWQudGFpbE1vZGUmJiFnLmFsdGVybmF0ZSYmIWxoKXJldHVybiBiPWIubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3QsbnVsbCE9PWImJihiLm5leHRFZmZlY3Q9bnVsbCksbnVsbH1lbHNlIDIqTygpLWQucmVuZGVyaW5nU3RhcnRUaW1lPkppJiYxMDczNzQxODI0IT09YyYmKGIuZmxhZ3N8PVxuNjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKTtkLmlzQmFja3dhcmRzPyhnLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWcpOihjPWQubGFzdCxudWxsIT09Yz9jLnNpYmxpbmc9ZzpiLmNoaWxkPWcsZC5sYXN0PWcpfXJldHVybiBudWxsIT09ZC50YWlsPyhjPWQudGFpbCxkLnJlbmRlcmluZz1jLGQudGFpbD1jLnNpYmxpbmcsZC5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCxkLnJlbmRlcmluZ1N0YXJ0VGltZT1PKCksYy5zaWJsaW5nPW51bGwsYj1QLmN1cnJlbnQsSShQLGY/YiYxfDI6YiYxKSxjKTpudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSE9PShudWxsIT09Yi5tZW1vaXplZFN0YXRlKSYmXCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiIT09ZC5tb2RlJiYoYi5mbGFnc3w9NCksbnVsbH10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO31cbmZ1bmN0aW9uIExpKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOkZmKGEudHlwZSkmJkdmKCk7dmFyIGI9YS5mbGFncztyZXR1cm4gYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtiPWEuZmxhZ3M7aWYoMCE9PShiJjY0KSl0aHJvdyBFcnJvcih5KDI4NSkpO2EuZmxhZ3M9YiYtNDA5N3w2NDtyZXR1cm4gYTtjYXNlIDU6cmV0dXJuIGhoKGEpLG51bGw7Y2FzZSAxMzpyZXR1cm4gSChQKSxiPWEuZmxhZ3MsYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDE5OnJldHVybiBIKFApLG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYSksbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIE1pKGEsYil7dHJ5e3ZhciBjPVwiXCIsZD1iO2RvIGMrPVFhKGQpLGQ9ZC5yZXR1cm47d2hpbGUoZCk7dmFyIGU9Y31jYXRjaChmKXtlPVwiXFxuRXJyb3IgZ2VuZXJhdGluZyBzdGFjazogXCIrZi5tZXNzYWdlK1wiXFxuXCIrZi5zdGFja31yZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazplfX1mdW5jdGlvbiBOaShhLGIpe3RyeXtjb25zb2xlLmVycm9yKGIudmFsdWUpfWNhdGNoKGMpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBjO30pfX12YXIgT2k9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gUGkoYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9MztjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7UWl8fChRaT0hMCxSaT1kKTtOaShhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIFNpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtOaShhLGIpO3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09VGk/VGk9bmV3IFNldChbdGhpc10pOlRpLmFkZCh0aGlzKSxOaShhLGIpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY312YXIgVWk9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQ7XG5mdW5jdGlvbiBWaShhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09YilpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYil0cnl7YihudWxsKX1jYXRjaChjKXtXaShhLGMpfWVsc2UgYi5jdXJyZW50PW51bGx9ZnVuY3Rpb24gWGkoYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpyZXR1cm47Y2FzZSAxOmlmKGIuZmxhZ3MmMjU2JiZudWxsIT09YSl7dmFyIGM9YS5tZW1vaXplZFByb3BzLGQ9YS5tZW1vaXplZFN0YXRlO2E9Yi5zdGF0ZU5vZGU7Yj1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/YzpsZyhiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifXJldHVybjtjYXNlIDM6Yi5mbGFncyYyNTYmJnFmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO3JldHVybjtjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIFlpKGEsYixjKXtzd2l0Y2goYy50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpiPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3tpZigzPT09KGEudGFnJjMpKXt2YXIgZD1hLmNyZWF0ZTthLmRlc3Ryb3k9ZCgpfWE9YS5uZXh0fXdoaWxlKGEhPT1iKX1iPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3t2YXIgZT1hO2Q9ZS5uZXh0O2U9ZS50YWc7MCE9PShlJjQpJiYwIT09KGUmMSkmJihaaShjLGEpLCRpKGMsYSkpO2E9ZH13aGlsZShhIT09Yil9cmV0dXJuO2Nhc2UgMTphPWMuc3RhdGVOb2RlO2MuZmxhZ3MmNCYmKG51bGw9PT1iP2EuY29tcG9uZW50RGlkTW91bnQoKTooZD1jLmVsZW1lbnRUeXBlPT09Yy50eXBlP2IubWVtb2l6ZWRQcm9wczpsZyhjLnR5cGUsYi5tZW1vaXplZFByb3BzKSxhLmNvbXBvbmVudERpZFVwZGF0ZShkLFxuYi5tZW1vaXplZFN0YXRlLGEuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpKSk7Yj1jLnVwZGF0ZVF1ZXVlO251bGwhPT1iJiZFZyhjLGIsYSk7cmV0dXJuO2Nhc2UgMzpiPWMudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2E9bnVsbDtpZihudWxsIT09Yy5jaGlsZClzd2l0Y2goYy5jaGlsZC50YWcpe2Nhc2UgNTphPWMuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTphPWMuY2hpbGQuc3RhdGVOb2RlfUVnKGMsYixhKX1yZXR1cm47Y2FzZSA1OmE9Yy5zdGF0ZU5vZGU7bnVsbD09PWImJmMuZmxhZ3MmNCYmbWYoYy50eXBlLGMubWVtb2l6ZWRQcm9wcykmJmEuZm9jdXMoKTtyZXR1cm47Y2FzZSA2OnJldHVybjtjYXNlIDQ6cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbD09PWMubWVtb2l6ZWRTdGF0ZSYmKGM9Yy5hbHRlcm5hdGUsbnVsbCE9PWMmJihjPWMubWVtb2l6ZWRTdGF0ZSxudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGwhPT1jJiZDYyhjKSkpKTtcbnJldHVybjtjYXNlIDE5OmNhc2UgMTc6Y2FzZSAyMDpjYXNlIDIxOmNhc2UgMjM6Y2FzZSAyNDpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBhaihhLGIpe2Zvcih2YXIgYz1hOzspe2lmKDU9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoYilkPWQuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuc2V0UHJvcGVydHk/ZC5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpkLmRpc3BsYXk9XCJub25lXCI7ZWxzZXtkPWMuc3RhdGVOb2RlO3ZhciBlPWMubWVtb2l6ZWRQcm9wcy5zdHlsZTtlPXZvaWQgMCE9PWUmJm51bGwhPT1lJiZlLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9lLmRpc3BsYXk6bnVsbDtkLnN0eWxlLmRpc3BsYXk9c2IoXCJkaXNwbGF5XCIsZSl9fWVsc2UgaWYoNj09PWMudGFnKWMuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iP1wiXCI6Yy5tZW1vaXplZFByb3BzO2Vsc2UgaWYoKDIzIT09Yy50YWcmJjI0IT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fGM9PT1hKSYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1cbmEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBiaihhLGIpe2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclVubW91bnQpdHJ5e01mLm9uQ29tbWl0RmliZXJVbm1vdW50KExmLGIpfWNhdGNoKGYpe31zd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOmE9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YSYmKGE9YS5sYXN0RWZmZWN0LG51bGwhPT1hKSl7dmFyIGM9YT1hLm5leHQ7ZG97dmFyIGQ9YyxlPWQuZGVzdHJveTtkPWQudGFnO2lmKHZvaWQgMCE9PWUpaWYoMCE9PShkJjQpKVppKGIsYyk7ZWxzZXtkPWI7dHJ5e2UoKX1jYXRjaChmKXtXaShkLGYpfX1jPWMubmV4dH13aGlsZShjIT09YSl9YnJlYWs7Y2FzZSAxOlZpKGIpO2E9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2EucHJvcHM9Yi5tZW1vaXplZFByb3BzLGEuc3RhdGU9Yi5tZW1vaXplZFN0YXRlLGEuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChmKXtXaShiLFxuZil9YnJlYWs7Y2FzZSA1OlZpKGIpO2JyZWFrO2Nhc2UgNDpjaihhLGIpfX1mdW5jdGlvbiBkaihhKXthLmFsdGVybmF0ZT1udWxsO2EuY2hpbGQ9bnVsbDthLmRlcGVuZGVuY2llcz1udWxsO2EuZmlyc3RFZmZlY3Q9bnVsbDthLmxhc3RFZmZlY3Q9bnVsbDthLm1lbW9pemVkUHJvcHM9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2EucmV0dXJuPW51bGw7YS51cGRhdGVRdWV1ZT1udWxsfWZ1bmN0aW9uIGVqKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24gZmooYSl7YTp7Zm9yKHZhciBiPWEucmV0dXJuO251bGwhPT1iOyl7aWYoZWooYikpYnJlYWsgYTtiPWIucmV0dXJufXRocm93IEVycm9yKHkoMTYwKSk7fXZhciBjPWI7Yj1jLnN0YXRlTm9kZTtzd2l0Y2goYy50YWcpe2Nhc2UgNTp2YXIgZD0hMTticmVhaztjYXNlIDM6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztjYXNlIDQ6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMTYxKSk7fWMuZmxhZ3MmMTYmJihwYihiLFwiXCIpLGMuZmxhZ3MmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxlaihjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NSE9PWMudGFnJiY2IT09Yy50YWcmJjE4IT09Yy50YWc7KXtpZihjLmZsYWdzJjIpY29udGludWUgYjtpZihudWxsPT09XG5jLmNoaWxkfHw0PT09Yy50YWcpY29udGludWUgYjtlbHNlIGMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkfWlmKCEoYy5mbGFncyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1kP2dqKGEsYyxiKTpoaihhLGMsYil9XG5mdW5jdGlvbiBnaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj84PT09Yy5ub2RlVHlwZT9jLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsYik6Yy5pbnNlcnRCZWZvcmUoYSxiKTooOD09PWMubm9kZVR5cGU/KGI9Yy5wYXJlbnROb2RlLGIuaW5zZXJ0QmVmb3JlKGEsYykpOihiPWMsYi5hcHBlbmRDaGlsZChhKSksYz1jLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWMmJnZvaWQgMCE9PWN8fG51bGwhPT1iLm9uY2xpY2t8fChiLm9uY2xpY2s9amYpKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoZ2ooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylnaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBoaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj9jLmluc2VydEJlZm9yZShhLGIpOmMuYXBwZW5kQ2hpbGQoYSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGhqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspaGooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gY2ooYSxiKXtmb3IodmFyIGM9YixkPSExLGUsZjs7KXtpZighZCl7ZD1jLnJldHVybjthOmZvcig7Oyl7aWYobnVsbD09PWQpdGhyb3cgRXJyb3IoeSgxNjApKTtlPWQuc3RhdGVOb2RlO3N3aXRjaChkLnRhZyl7Y2FzZSA1OmY9ITE7YnJlYWsgYTtjYXNlIDM6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhO2Nhc2UgNDplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGF9ZD1kLnJldHVybn1kPSEwfWlmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKXthOmZvcih2YXIgZz1hLGg9YyxrPWg7OylpZihiaihnLGspLG51bGwhPT1rLmNoaWxkJiY0IT09ay50YWcpay5jaGlsZC5yZXR1cm49ayxrPWsuY2hpbGQ7ZWxzZXtpZihrPT09aClicmVhayBhO2Zvcig7bnVsbD09PWsuc2libGluZzspe2lmKG51bGw9PT1rLnJldHVybnx8ay5yZXR1cm49PT1oKWJyZWFrIGE7az1rLnJldHVybn1rLnNpYmxpbmcucmV0dXJuPWsucmV0dXJuO2s9ay5zaWJsaW5nfWY/KGc9ZSxoPWMuc3RhdGVOb2RlLFxuOD09PWcubm9kZVR5cGU/Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGgpOmcucmVtb3ZlQ2hpbGQoaCkpOmUucmVtb3ZlQ2hpbGQoYy5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWMudGFnKXtpZihudWxsIT09Yy5jaGlsZCl7ZT1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Y9ITA7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYoYmooYSxjKSxudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm47ND09PWMudGFnJiYoZD0hMSl9Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBpaihhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6dmFyIGM9Yi51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkbyAzPT09KGQudGFnJjMpJiYoYT1kLmRlc3Ryb3ksZC5kZXN0cm95PXZvaWQgMCx2b2lkIDAhPT1hJiZhKCkpLGQ9ZC5uZXh0O3doaWxlKGQhPT1jKX1yZXR1cm47Y2FzZSAxOnJldHVybjtjYXNlIDU6Yz1iLnN0YXRlTm9kZTtpZihudWxsIT1jKXtkPWIubWVtb2l6ZWRQcm9wczt2YXIgZT1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6ZDthPWIudHlwZTt2YXIgZj1iLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9bnVsbDtpZihudWxsIT09Zil7Y1t4Zl09ZDtcImlucHV0XCI9PT1hJiZcInJhZGlvXCI9PT1kLnR5cGUmJm51bGwhPWQubmFtZSYmJGEoYyxkKTt3YihhLGUpO2I9d2IoYSxkKTtmb3IoZT0wO2U8Zi5sZW5ndGg7ZSs9XG4yKXt2YXIgZz1mW2VdLGg9ZltlKzFdO1wic3R5bGVcIj09PWc/dGIoYyxoKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1nP29iKGMsaCk6XCJjaGlsZHJlblwiPT09Zz9wYihjLGgpOnFhKGMsZyxoLGIpfXN3aXRjaChhKXtjYXNlIFwiaW5wdXRcIjphYihjLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGMsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmE9Yy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlLGMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWQubXVsdGlwbGUsZj1kLnZhbHVlLG51bGwhPWY/ZmIoYywhIWQubXVsdGlwbGUsZiwhMSk6YSE9PSEhZC5tdWx0aXBsZSYmKG51bGwhPWQuZGVmYXVsdFZhbHVlP2ZiKGMsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTpmYihjLCEhZC5tdWx0aXBsZSxkLm11bHRpcGxlP1tdOlwiXCIsITEpKX19fXJldHVybjtjYXNlIDY6aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTYyKSk7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPVxuYi5tZW1vaXplZFByb3BzO3JldHVybjtjYXNlIDM6Yz1iLnN0YXRlTm9kZTtjLmh5ZHJhdGUmJihjLmh5ZHJhdGU9ITEsQ2MoYy5jb250YWluZXJJbmZvKSk7cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSYmKGpqPU8oKSxhaihiLmNoaWxkLCEwKSk7a2ooYik7cmV0dXJuO2Nhc2UgMTk6a2ooYik7cmV0dXJuO2Nhc2UgMTc6cmV0dXJuO2Nhc2UgMjM6Y2FzZSAyNDphaihiLG51bGwhPT1iLm1lbW9pemVkU3RhdGUpO3JldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31mdW5jdGlvbiBraihhKXt2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbD09PWMmJihjPWEuc3RhdGVOb2RlPW5ldyBVaSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWxqLmJpbmQobnVsbCxhLGIpO2MuaGFzKGIpfHwoYy5hZGQoYiksYi50aGVuKGQsZCkpfSl9fVxuZnVuY3Rpb24gbWooYSxiKXtyZXR1cm4gbnVsbCE9PWEmJihhPWEubWVtb2l6ZWRTdGF0ZSxudWxsPT09YXx8bnVsbCE9PWEuZGVoeWRyYXRlZCk/KGI9Yi5tZW1vaXplZFN0YXRlLG51bGwhPT1iJiZudWxsPT09Yi5kZWh5ZHJhdGVkKTohMX12YXIgbmo9TWF0aC5jZWlsLG9qPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIscGo9cmEuUmVhY3RDdXJyZW50T3duZXIsWD0wLFU9bnVsbCxZPW51bGwsVz0wLHFqPTAscmo9QmYoMCksVj0wLHNqPW51bGwsdGo9MCxEZz0wLEhpPTAsdWo9MCx2aj1udWxsLGpqPTAsSmk9SW5maW5pdHk7ZnVuY3Rpb24gd2ooKXtKaT1PKCkrNTAwfXZhciBaPW51bGwsUWk9ITEsUmk9bnVsbCxUaT1udWxsLHhqPSExLHlqPW51bGwsemo9OTAsQWo9W10sQmo9W10sQ2o9bnVsbCxEaj0wLEVqPW51bGwsRmo9LTEsR2o9MCxIaj0wLElqPW51bGwsSmo9ITE7ZnVuY3Rpb24gSGcoKXtyZXR1cm4gMCE9PShYJjQ4KT9PKCk6LTEhPT1Gaj9GajpGaj1PKCl9XG5mdW5jdGlvbiBJZyhhKXthPWEubW9kZTtpZigwPT09KGEmMikpcmV0dXJuIDE7aWYoMD09PShhJjQpKXJldHVybiA5OT09PWVnKCk/MToyOzA9PT1HaiYmKEdqPXRqKTtpZigwIT09a2cudHJhbnNpdGlvbil7MCE9PUhqJiYoSGo9bnVsbCE9PXZqP3ZqLnBlbmRpbmdMYW5lczowKTthPUdqO3ZhciBiPTQxODYxMTImfkhqO2ImPS1iOzA9PT1iJiYoYT00MTg2MTEyJn5hLGI9YSYtYSwwPT09YiYmKGI9ODE5MikpO3JldHVybiBifWE9ZWcoKTswIT09KFgmNCkmJjk4PT09YT9hPVhjKDEyLEdqKTooYT1TYyhhKSxhPVhjKGEsR2opKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpnKGEsYixjKXtpZig1MDxEail0aHJvdyBEaj0wLEVqPW51bGwsRXJyb3IoeSgxODUpKTthPUtqKGEsYik7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7JGMoYSxiLGMpO2E9PT1VJiYoSGl8PWIsND09PVYmJklpKGEsVykpO3ZhciBkPWVnKCk7MT09PWI/MCE9PShYJjgpJiYwPT09KFgmNDgpP0xqKGEpOihNaihhLGMpLDA9PT1YJiYod2ooKSxpZygpKSk6KDA9PT0oWCY0KXx8OTghPT1kJiY5OSE9PWR8fChudWxsPT09Q2o/Q2o9bmV3IFNldChbYV0pOkNqLmFkZChhKSksTWooYSxjKSk7dmo9YX1mdW5jdGlvbiBLaihhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtjPWE7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWE7KWEuY2hpbGRMYW5lc3w9YixjPWEuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKSxjPWEsYT1hLnJldHVybjtyZXR1cm4gMz09PWMudGFnP2Muc3RhdGVOb2RlOm51bGx9XG5mdW5jdGlvbiBNaihhLGIpe2Zvcih2YXIgYz1hLmNhbGxiYWNrTm9kZSxkPWEuc3VzcGVuZGVkTGFuZXMsZT1hLnBpbmdlZExhbmVzLGY9YS5leHBpcmF0aW9uVGltZXMsZz1hLnBlbmRpbmdMYW5lczswPGc7KXt2YXIgaD0zMS1WYyhnKSxrPTE8PGgsbD1mW2hdO2lmKC0xPT09bCl7aWYoMD09PShrJmQpfHwwIT09KGsmZSkpe2w9YjtSYyhrKTt2YXIgbj1GO2ZbaF09MTA8PW4/bCsyNTA6Njw9bj9sKzVFMzotMX19ZWxzZSBsPD1iJiYoYS5leHBpcmVkTGFuZXN8PWspO2cmPX5rfWQ9VWMoYSxhPT09VT9XOjApO2I9RjtpZigwPT09ZCludWxsIT09YyYmKGMhPT1aZiYmUGYoYyksYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrUHJpb3JpdHk9MCk7ZWxzZXtpZihudWxsIT09Yyl7aWYoYS5jYWxsYmFja1ByaW9yaXR5PT09YilyZXR1cm47YyE9PVpmJiZQZihjKX0xNT09PWI/KGM9TGouYmluZChudWxsLGEpLG51bGw9PT1hZz8oYWc9W2NdLGJnPU9mKFVmLGpnKSk6YWcucHVzaChjKSxcbmM9WmYpOjE0PT09Yj9jPWhnKDk5LExqLmJpbmQobnVsbCxhKSk6KGM9VGMoYiksYz1oZyhjLE5qLmJpbmQobnVsbCxhKSkpO2EuY2FsbGJhY2tQcmlvcml0eT1iO2EuY2FsbGJhY2tOb2RlPWN9fVxuZnVuY3Rpb24gTmooYSl7Rmo9LTE7SGo9R2o9MDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGI9YS5jYWxsYmFja05vZGU7aWYoT2ooKSYmYS5jYWxsYmFja05vZGUhPT1iKXJldHVybiBudWxsO3ZhciBjPVVjKGEsYT09PVU/VzowKTtpZigwPT09YylyZXR1cm4gbnVsbDt2YXIgZD1jO3ZhciBlPVg7WHw9MTY7dmFyIGY9UGooKTtpZihVIT09YXx8VyE9PWQpd2ooKSxRaihhLGQpO2RvIHRyeXtSaigpO2JyZWFrfWNhdGNoKGgpe1NqKGEsaCl9d2hpbGUoMSk7cWcoKTtvai5jdXJyZW50PWY7WD1lO251bGwhPT1ZP2Q9MDooVT1udWxsLFc9MCxkPVYpO2lmKDAhPT0odGomSGkpKVFqKGEsMCk7ZWxzZSBpZigwIT09ZCl7Mj09PWQmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYz1XYyhhKSwwIT09YyYmKGQ9VGooYSxjKSkpO2lmKDE9PT1kKXRocm93IGI9c2osUWooYSwwKSxJaShhLGMpLE1qKGEsTygpKSxiO2EuZmluaXNoZWRXb3JrPVxuYS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9Yztzd2l0Y2goZCl7Y2FzZSAwOmNhc2UgMTp0aHJvdyBFcnJvcih5KDM0NSkpO2Nhc2UgMjpVaihhKTticmVhaztjYXNlIDM6SWkoYSxjKTtpZigoYyY2MjkxNDU2MCk9PT1jJiYoZD1qais1MDAtTygpLDEwPGQpKXtpZigwIT09VWMoYSwwKSlicmVhaztlPWEuc3VzcGVuZGVkTGFuZXM7aWYoKGUmYykhPT1jKXtIZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmZTticmVha31hLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGQpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNDpJaShhLGMpO2lmKChjJjQxODYxMTIpPT09YylicmVhaztkPWEuZXZlbnRUaW1lcztmb3IoZT0tMTswPGM7KXt2YXIgZz0zMS1WYyhjKTtmPTE8PGc7Zz1kW2ddO2c+ZSYmKGU9Zyk7YyY9fmZ9Yz1lO2M9TygpLWM7Yz0oMTIwPmM/MTIwOjQ4MD5jPzQ4MDoxMDgwPmM/MTA4MDoxOTIwPmM/MTkyMDozRTM+Yz8zRTM6NDMyMD5cbmM/NDMyMDoxOTYwKm5qKGMvMTk2MCkpLWM7aWYoMTA8Yyl7YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxjKTticmVha31VaihhKTticmVhaztjYXNlIDU6VWooYSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMyOSkpO319TWooYSxPKCkpO3JldHVybiBhLmNhbGxiYWNrTm9kZT09PWI/TmouYmluZChudWxsLGEpOm51bGx9ZnVuY3Rpb24gSWkoYSxiKXtiJj1+dWo7YiY9fkhpO2Euc3VzcGVuZGVkTGFuZXN8PWI7YS5waW5nZWRMYW5lcyY9fmI7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxiOyl7dmFyIGM9MzEtVmMoYiksZD0xPDxjO2FbY109LTE7YiY9fmR9fVxuZnVuY3Rpb24gTGooYSl7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO09qKCk7aWYoYT09PVUmJjAhPT0oYS5leHBpcmVkTGFuZXMmVykpe3ZhciBiPVc7dmFyIGM9VGooYSxiKTswIT09KHRqJkhpKSYmKGI9VWMoYSxiKSxjPVRqKGEsYikpfWVsc2UgYj1VYyhhLDApLGM9VGooYSxiKTswIT09YS50YWcmJjI9PT1jJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGI9V2MoYSksMCE9PWImJihjPVRqKGEsYikpKTtpZigxPT09Yyl0aHJvdyBjPXNqLFFqKGEsMCksSWkoYSxiKSxNaihhLE8oKSksYzthLmZpbmlzaGVkV29yaz1hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1iO1VqKGEpO01qKGEsTygpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFZqKCl7aWYobnVsbCE9PUNqKXt2YXIgYT1DajtDaj1udWxsO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmV4cGlyZWRMYW5lc3w9MjQmYS5wZW5kaW5nTGFuZXM7TWooYSxPKCkpfSl9aWcoKX1mdW5jdGlvbiBXaihhLGIpe3ZhciBjPVg7WHw9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBYaihhLGIpe3ZhciBjPVg7WCY9LTI7WHw9ODt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBuaShhLGIpe0kocmoscWopO3FqfD1iO3RqfD1ifWZ1bmN0aW9uIEtpKCl7cWo9cmouY3VycmVudDtIKHJqKX1cbmZ1bmN0aW9uIFFqKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLHBmKGMpKTtpZihudWxsIT09WSlmb3IoYz1ZLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7c3dpdGNoKGQudGFnKXtjYXNlIDE6ZD1kLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWQmJnZvaWQgMCE9PWQmJkdmKCk7YnJlYWs7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7YnJlYWs7Y2FzZSA1OmhoKGQpO2JyZWFrO2Nhc2UgNDpmaCgpO2JyZWFrO2Nhc2UgMTM6SChQKTticmVhaztjYXNlIDE5OkgoUCk7YnJlYWs7Y2FzZSAxMDpyZyhkKTticmVhaztjYXNlIDIzOmNhc2UgMjQ6S2koKX1jPWMucmV0dXJufVU9YTtZPVRnKGEuY3VycmVudCxudWxsKTtXPXFqPXRqPWI7Vj0wO3NqPW51bGw7dWo9SGk9RGc9MH1cbmZ1bmN0aW9uIFNqKGEsYil7ZG97dmFyIGM9WTt0cnl7cWcoKTt2aC5jdXJyZW50PUdoO2lmKHloKXtmb3IodmFyIGQ9Ui5tZW1vaXplZFN0YXRlO251bGwhPT1kOyl7dmFyIGU9ZC5xdWV1ZTtudWxsIT09ZSYmKGUucGVuZGluZz1udWxsKTtkPWQubmV4dH15aD0hMX14aD0wO1Q9Uz1SPW51bGw7emg9ITE7cGouY3VycmVudD1udWxsO2lmKG51bGw9PT1jfHxudWxsPT09Yy5yZXR1cm4pe1Y9MTtzaj1iO1k9bnVsbDticmVha31hOnt2YXIgZj1hLGc9Yy5yZXR1cm4saD1jLGs9YjtiPVc7aC5mbGFnc3w9MjA0ODtoLmZpcnN0RWZmZWN0PWgubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1rJiZcIm9iamVjdFwiPT09dHlwZW9mIGsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLnRoZW4pe3ZhciBsPWs7aWYoMD09PShoLm1vZGUmMikpe3ZhciBuPWguYWx0ZXJuYXRlO24/KGgudXBkYXRlUXVldWU9bi51cGRhdGVRdWV1ZSxoLm1lbW9pemVkU3RhdGU9bi5tZW1vaXplZFN0YXRlLGgubGFuZXM9bi5sYW5lcyk6XG4oaC51cGRhdGVRdWV1ZT1udWxsLGgubWVtb2l6ZWRTdGF0ZT1udWxsKX12YXIgQT0wIT09KFAuY3VycmVudCYxKSxwPWc7ZG97dmFyIEM7aWYoQz0xMz09PXAudGFnKXt2YXIgeD1wLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PXgpQz1udWxsIT09eC5kZWh5ZHJhdGVkPyEwOiExO2Vsc2V7dmFyIHc9cC5tZW1vaXplZFByb3BzO0M9dm9pZCAwPT09dy5mYWxsYmFjaz8hMTohMCE9PXcudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2s/ITA6QT8hMTohMH19aWYoQyl7dmFyIHo9cC51cGRhdGVRdWV1ZTtpZihudWxsPT09eil7dmFyIHU9bmV3IFNldDt1LmFkZChsKTtwLnVwZGF0ZVF1ZXVlPXV9ZWxzZSB6LmFkZChsKTtpZigwPT09KHAubW9kZSYyKSl7cC5mbGFnc3w9NjQ7aC5mbGFnc3w9MTYzODQ7aC5mbGFncyY9LTI5ODE7aWYoMT09PWgudGFnKWlmKG51bGw9PT1oLmFsdGVybmF0ZSloLnRhZz0xNztlbHNle3ZhciB0PXpnKC0xLDEpO3QudGFnPTI7QWcoaCx0KX1oLmxhbmVzfD0xO2JyZWFrIGF9az1cbnZvaWQgMDtoPWI7dmFyIHE9Zi5waW5nQ2FjaGU7bnVsbD09PXE/KHE9Zi5waW5nQ2FjaGU9bmV3IE9pLGs9bmV3IFNldCxxLnNldChsLGspKTooaz1xLmdldChsKSx2b2lkIDA9PT1rJiYoaz1uZXcgU2V0LHEuc2V0KGwsaykpKTtpZighay5oYXMoaCkpe2suYWRkKGgpO3ZhciB2PVlqLmJpbmQobnVsbCxmLGwsaCk7bC50aGVuKHYsdil9cC5mbGFnc3w9NDA5NjtwLmxhbmVzPWI7YnJlYWsgYX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKTtrPUVycm9yKChSYShoLnR5cGUpfHxcIkEgUmVhY3QgY29tcG9uZW50XCIpK1wiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIpfTUhPT1WJiYoVj0yKTtrPU1pKGssaCk7cD1cbmc7ZG97c3dpdGNoKHAudGFnKXtjYXNlIDM6Zj1rO3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgSj1QaShwLGYsYik7QmcocCxKKTticmVhayBhO2Nhc2UgMTpmPWs7dmFyIEs9cC50eXBlLFE9cC5zdGF0ZU5vZGU7aWYoMD09PShwLmZsYWdzJjY0KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBLLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PVEmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBRLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKFEpKSkpe3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgTD1TaShwLGYsYik7QmcocCxMKTticmVhayBhfX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKX1aaihjKX1jYXRjaCh2YSl7Yj12YTtZPT09YyYmbnVsbCE9PWMmJihZPWM9Yy5yZXR1cm4pO2NvbnRpbnVlfWJyZWFrfXdoaWxlKDEpfVxuZnVuY3Rpb24gUGooKXt2YXIgYT1vai5jdXJyZW50O29qLmN1cnJlbnQ9R2g7cmV0dXJuIG51bGw9PT1hP0doOmF9ZnVuY3Rpb24gVGooYSxiKXt2YXIgYz1YO1h8PTE2O3ZhciBkPVBqKCk7VT09PWEmJlc9PT1ifHxRaihhLGIpO2RvIHRyeXthaygpO2JyZWFrfWNhdGNoKGUpe1NqKGEsZSl9d2hpbGUoMSk7cWcoKTtYPWM7b2ouY3VycmVudD1kO2lmKG51bGwhPT1ZKXRocm93IEVycm9yKHkoMjYxKSk7VT1udWxsO1c9MDtyZXR1cm4gVn1mdW5jdGlvbiBhaygpe2Zvcig7bnVsbCE9PVk7KWJrKFkpfWZ1bmN0aW9uIFJqKCl7Zm9yKDtudWxsIT09WSYmIVFmKCk7KWJrKFkpfWZ1bmN0aW9uIGJrKGEpe3ZhciBiPWNrKGEuYWx0ZXJuYXRlLGEscWopO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09Yj9aaihhKTpZPWI7cGouY3VycmVudD1udWxsfVxuZnVuY3Rpb24gWmooYSl7dmFyIGI9YTtkb3t2YXIgYz1iLmFsdGVybmF0ZTthPWIucmV0dXJuO2lmKDA9PT0oYi5mbGFncyYyMDQ4KSl7Yz1HaShjLGIscWopO2lmKG51bGwhPT1jKXtZPWM7cmV0dXJufWM9YjtpZigyNCE9PWMudGFnJiYyMyE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHwwIT09KHFqJjEwNzM3NDE4MjQpfHwwPT09KGMubW9kZSY0KSl7Zm9yKHZhciBkPTAsZT1jLmNoaWxkO251bGwhPT1lOylkfD1lLmxhbmVzfGUuY2hpbGRMYW5lcyxlPWUuc2libGluZztjLmNoaWxkTGFuZXM9ZH1udWxsIT09YSYmMD09PShhLmZsYWdzJjIwNDgpJiYobnVsbD09PWEuZmlyc3RFZmZlY3QmJihhLmZpcnN0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLG51bGwhPT1iLmxhc3RFZmZlY3QmJihudWxsIT09YS5sYXN0RWZmZWN0JiYoYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9Yi5maXJzdEVmZmVjdCksYS5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCksMTxiLmZsYWdzJiYobnVsbCE9PVxuYS5sYXN0RWZmZWN0P2EubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWI6YS5maXJzdEVmZmVjdD1iLGEubGFzdEVmZmVjdD1iKSl9ZWxzZXtjPUxpKGIpO2lmKG51bGwhPT1jKXtjLmZsYWdzJj0yMDQ3O1k9YztyZXR1cm59bnVsbCE9PWEmJihhLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1udWxsLGEuZmxhZ3N8PTIwNDgpfWI9Yi5zaWJsaW5nO2lmKG51bGwhPT1iKXtZPWI7cmV0dXJufVk9Yj1hfXdoaWxlKG51bGwhPT1iKTswPT09ViYmKFY9NSl9ZnVuY3Rpb24gVWooYSl7dmFyIGI9ZWcoKTtnZyg5OSxkay5iaW5kKG51bGwsYSxiKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkayhhLGIpe2RvIE9qKCk7d2hpbGUobnVsbCE9PXlqKTtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGM9YS5maW5pc2hlZFdvcms7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHkoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDt2YXIgZD1jLmxhbmVzfGMuY2hpbGRMYW5lcyxlPWQsZj1hLnBlbmRpbmdMYW5lcyZ+ZTthLnBlbmRpbmdMYW5lcz1lO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWU7YS5tdXRhYmxlUmVhZExhbmVzJj1lO2EuZW50YW5nbGVkTGFuZXMmPWU7ZT1hLmVudGFuZ2xlbWVudHM7Zm9yKHZhciBnPWEuZXZlbnRUaW1lcyxoPWEuZXhwaXJhdGlvblRpbWVzOzA8Zjspe3ZhciBrPTMxLVZjKGYpLGw9MTw8aztlW2tdPTA7Z1trXT0tMTtoW2tdPS0xO2YmPX5sfW51bGwhPT1cbkNqJiYwPT09KGQmMjQpJiZDai5oYXMoYSkmJkNqLmRlbGV0ZShhKTthPT09VSYmKFk9VT1udWxsLFc9MCk7MTxjLmZsYWdzP251bGwhPT1jLmxhc3RFZmZlY3Q/KGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsZD1jLmZpcnN0RWZmZWN0KTpkPWM6ZD1jLmZpcnN0RWZmZWN0O2lmKG51bGwhPT1kKXtlPVg7WHw9MzI7cGouY3VycmVudD1udWxsO2tmPWZkO2c9TmUoKTtpZihPZShnKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gZyloPXtzdGFydDpnLnNlbGVjdGlvblN0YXJ0LGVuZDpnLnNlbGVjdGlvbkVuZH07ZWxzZSBhOmlmKGg9KGg9Zy5vd25lckRvY3VtZW50KSYmaC5kZWZhdWx0Vmlld3x8d2luZG93LChsPWguZ2V0U2VsZWN0aW9uJiZoLmdldFNlbGVjdGlvbigpKSYmMCE9PWwucmFuZ2VDb3VudCl7aD1sLmFuY2hvck5vZGU7Zj1sLmFuY2hvck9mZnNldDtrPWwuZm9jdXNOb2RlO2w9bC5mb2N1c09mZnNldDt0cnl7aC5ub2RlVHlwZSxrLm5vZGVUeXBlfWNhdGNoKHZhKXtoPW51bGw7XG5icmVhayBhfXZhciBuPTAsQT0tMSxwPS0xLEM9MCx4PTAsdz1nLHo9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB1Ozspe3chPT1ofHwwIT09ZiYmMyE9PXcubm9kZVR5cGV8fChBPW4rZik7dyE9PWt8fDAhPT1sJiYzIT09dy5ub2RlVHlwZXx8KHA9bitsKTszPT09dy5ub2RlVHlwZSYmKG4rPXcubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PSh1PXcuZmlyc3RDaGlsZCkpYnJlYWs7ej13O3c9dX1mb3IoOzspe2lmKHc9PT1nKWJyZWFrIGI7ej09PWgmJisrQz09PWYmJihBPW4pO3o9PT1rJiYrK3g9PT1sJiYocD1uKTtpZihudWxsIT09KHU9dy5uZXh0U2libGluZykpYnJlYWs7dz16O3o9dy5wYXJlbnROb2RlfXc9dX1oPS0xPT09QXx8LTE9PT1wP251bGw6e3N0YXJ0OkEsZW5kOnB9fWVsc2UgaD1udWxsO2g9aHx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgaD1udWxsO2xmPXtmb2N1c2VkRWxlbTpnLHNlbGVjdGlvblJhbmdlOmh9O2ZkPSExO0lqPW51bGw7Smo9ITE7Wj1kO2RvIHRyeXtlaygpfWNhdGNoKHZhKXtpZihudWxsPT09XG5aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO0lqPW51bGw7Wj1kO2RvIHRyeXtmb3IoZz1hO251bGwhPT1aOyl7dmFyIHQ9Wi5mbGFnczt0JjE2JiZwYihaLnN0YXRlTm9kZSxcIlwiKTtpZih0JjEyOCl7dmFyIHE9Wi5hbHRlcm5hdGU7aWYobnVsbCE9PXEpe3ZhciB2PXEucmVmO251bGwhPT12JiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHY/dihudWxsKTp2LmN1cnJlbnQ9bnVsbCl9fXN3aXRjaCh0JjEwMzgpe2Nhc2UgMjpmaihaKTtaLmZsYWdzJj0tMzticmVhaztjYXNlIDY6ZmooWik7Wi5mbGFncyY9LTM7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSAxMDI0OlouZmxhZ3MmPS0xMDI1O2JyZWFrO2Nhc2UgMTAyODpaLmZsYWdzJj0tMTAyNTtpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDQ6aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA4Omg9WjtjaihnLGgpO3ZhciBKPWguYWx0ZXJuYXRlO2RqKGgpO251bGwhPT1cbkomJmRqKEopfVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7dj1sZjtxPU5lKCk7dD12LmZvY3VzZWRFbGVtO2c9di5zZWxlY3Rpb25SYW5nZTtpZihxIT09dCYmdCYmdC5vd25lckRvY3VtZW50JiZNZSh0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHQpKXtudWxsIT09ZyYmT2UodCkmJihxPWcuc3RhcnQsdj1nLmVuZCx2b2lkIDA9PT12JiYodj1xKSxcInNlbGVjdGlvblN0YXJ0XCJpbiB0Pyh0LnNlbGVjdGlvblN0YXJ0PXEsdC5zZWxlY3Rpb25FbmQ9TWF0aC5taW4odix0LnZhbHVlLmxlbmd0aCkpOih2PShxPXQub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZxLmRlZmF1bHRWaWV3fHx3aW5kb3csdi5nZXRTZWxlY3Rpb24mJih2PXYuZ2V0U2VsZWN0aW9uKCksaD10LnRleHRDb250ZW50Lmxlbmd0aCxKPU1hdGgubWluKGcuc3RhcnQsaCksZz12b2lkIDA9PT1cbmcuZW5kP0o6TWF0aC5taW4oZy5lbmQsaCksIXYuZXh0ZW5kJiZKPmcmJihoPWcsZz1KLEo9aCksaD1MZSh0LEopLGY9TGUodCxnKSxoJiZmJiYoMSE9PXYucmFuZ2VDb3VudHx8di5hbmNob3JOb2RlIT09aC5ub2RlfHx2LmFuY2hvck9mZnNldCE9PWgub2Zmc2V0fHx2LmZvY3VzTm9kZSE9PWYubm9kZXx8di5mb2N1c09mZnNldCE9PWYub2Zmc2V0KSYmKHE9cS5jcmVhdGVSYW5nZSgpLHEuc2V0U3RhcnQoaC5ub2RlLGgub2Zmc2V0KSx2LnJlbW92ZUFsbFJhbmdlcygpLEo+Zz8odi5hZGRSYW5nZShxKSx2LmV4dGVuZChmLm5vZGUsZi5vZmZzZXQpKToocS5zZXRFbmQoZi5ub2RlLGYub2Zmc2V0KSx2LmFkZFJhbmdlKHEpKSkpKSk7cT1bXTtmb3Iodj10O3Y9di5wYXJlbnROb2RlOykxPT09di5ub2RlVHlwZSYmcS5wdXNoKHtlbGVtZW50OnYsbGVmdDp2LnNjcm9sbExlZnQsdG9wOnYuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIHQuZm9jdXMmJnQuZm9jdXMoKTtmb3IodD1cbjA7dDxxLmxlbmd0aDt0Kyspdj1xW3RdLHYuZWxlbWVudC5zY3JvbGxMZWZ0PXYubGVmdCx2LmVsZW1lbnQuc2Nyb2xsVG9wPXYudG9wfWZkPSEha2Y7bGY9a2Y9bnVsbDthLmN1cnJlbnQ9YztaPWQ7ZG8gdHJ5e2Zvcih0PWE7bnVsbCE9PVo7KXt2YXIgSz1aLmZsYWdzO0smMzYmJllpKHQsWi5hbHRlcm5hdGUsWik7aWYoSyYxMjgpe3E9dm9pZCAwO3ZhciBRPVoucmVmO2lmKG51bGwhPT1RKXt2YXIgTD1aLnN0YXRlTm9kZTtzd2l0Y2goWi50YWcpe2Nhc2UgNTpxPUw7YnJlYWs7ZGVmYXVsdDpxPUx9XCJmdW5jdGlvblwiPT09dHlwZW9mIFE/UShxKTpRLmN1cnJlbnQ9cX19Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtaPW51bGw7JGYoKTtYPWV9ZWxzZSBhLmN1cnJlbnQ9YztpZih4ail4aj0hMSx5aj1hLHpqPWI7ZWxzZSBmb3IoWj1kO251bGwhPT1aOyliPVxuWi5uZXh0RWZmZWN0LFoubmV4dEVmZmVjdD1udWxsLFouZmxhZ3MmOCYmKEs9WixLLnNpYmxpbmc9bnVsbCxLLnN0YXRlTm9kZT1udWxsKSxaPWI7ZD1hLnBlbmRpbmdMYW5lczswPT09ZCYmKFRpPW51bGwpOzE9PT1kP2E9PT1Faj9EaisrOihEaj0wLEVqPWEpOkRqPTA7Yz1jLnN0YXRlTm9kZTtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJSb290KXRyeXtNZi5vbkNvbW1pdEZpYmVyUm9vdChMZixjLHZvaWQgMCw2ND09PShjLmN1cnJlbnQuZmxhZ3MmNjQpKX1jYXRjaCh2YSl7fU1qKGEsTygpKTtpZihRaSl0aHJvdyBRaT0hMSxhPVJpLFJpPW51bGwsYTtpZigwIT09KFgmOCkpcmV0dXJuIG51bGw7aWcoKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGVrKCl7Zm9yKDtudWxsIT09Wjspe3ZhciBhPVouYWx0ZXJuYXRlO0pqfHxudWxsPT09SWp8fCgwIT09KFouZmxhZ3MmOCk/ZGMoWixJaikmJihKaj0hMCk6MTM9PT1aLnRhZyYmbWooYSxaKSYmZGMoWixJaikmJihKaj0hMCkpO3ZhciBiPVouZmxhZ3M7MCE9PShiJjI1NikmJlhpKGEsWik7MD09PShiJjUxMil8fHhqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpO1o9Wi5uZXh0RWZmZWN0fX1mdW5jdGlvbiBPaigpe2lmKDkwIT09emope3ZhciBhPTk3PHpqPzk3OnpqO3pqPTkwO3JldHVybiBnZyhhLGZrKX1yZXR1cm4hMX1mdW5jdGlvbiAkaShhLGIpe0FqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1mdW5jdGlvbiBaaShhLGIpe0JqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1cbmZ1bmN0aW9uIGZrKCl7aWYobnVsbD09PXlqKXJldHVybiExO3ZhciBhPXlqO3lqPW51bGw7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMzMSkpO3ZhciBiPVg7WHw9MzI7dmFyIGM9Qmo7Qmo9W107Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKz0yKXt2YXIgZT1jW2RdLGY9Y1tkKzFdLGc9ZS5kZXN0cm95O2UuZGVzdHJveT12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcpdHJ5e2coKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWM9QWo7QWo9W107Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrPTIpe2U9Y1tkXTtmPWNbZCsxXTt0cnl7dmFyIGg9ZS5jcmVhdGU7ZS5kZXN0cm95PWgoKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWZvcihoPWEuY3VycmVudC5maXJzdEVmZmVjdDtudWxsIT09aDspYT1oLm5leHRFZmZlY3QsaC5uZXh0RWZmZWN0PW51bGwsaC5mbGFncyY4JiYoaC5zaWJsaW5nPVxubnVsbCxoLnN0YXRlTm9kZT1udWxsKSxoPWE7WD1iO2lnKCk7cmV0dXJuITB9ZnVuY3Rpb24gZ2soYSxiLGMpe2I9TWkoYyxiKTtiPVBpKGEsYiwxKTtBZyhhLGIpO2I9SGcoKTthPUtqKGEsMSk7bnVsbCE9PWEmJigkYyhhLDEsYiksTWooYSxiKSl9XG5mdW5jdGlvbiBXaShhLGIpe2lmKDM9PT1hLnRhZylnayhhLGEsYik7ZWxzZSBmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtpZigzPT09Yy50YWcpe2drKGMsYSxiKTticmVha31lbHNlIGlmKDE9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl7YT1NaShiLGEpO3ZhciBlPVNpKGMsYSwxKTtBZyhjLGUpO2U9SGcoKTtjPUtqKGMsMSk7aWYobnVsbCE9PWMpJGMoYywxLGUpLE1qKGMsZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpdHJ5e2QuY29tcG9uZW50RGlkQ2F0Y2goYixhKX1jYXRjaChmKXt9YnJlYWt9fWM9Yy5yZXR1cm59fVxuZnVuY3Rpb24gWWooYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtiPUhnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZjO1U9PT1hJiYoVyZjKT09PWMmJig0PT09Vnx8Mz09PVYmJihXJjYyOTE0NTYwKT09PVcmJjUwMD5PKCktamo/UWooYSwwKTp1anw9Yyk7TWooYSxiKX1mdW5jdGlvbiBsaihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO251bGwhPT1jJiZjLmRlbGV0ZShiKTtiPTA7MD09PWImJihiPWEubW9kZSwwPT09KGImMik/Yj0xOjA9PT0oYiY0KT9iPTk5PT09ZWcoKT8xOjI6KDA9PT1HaiYmKEdqPXRqKSxiPVljKDYyOTE0NTYwJn5HaiksMD09PWImJihiPTQxOTQzMDQpKSk7Yz1IZygpO2E9S2ooYSxiKTtudWxsIT09YSYmKCRjKGEsYixjKSxNaihhLGMpKX12YXIgY2s7XG5jaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yi5sYW5lcztpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8Ti5jdXJyZW50KXVnPSEwO2Vsc2UgaWYoMCE9PShjJmQpKXVnPTAhPT0oYS5mbGFncyYxNjM4NCk/ITA6ITE7ZWxzZXt1Zz0hMTtzd2l0Y2goYi50YWcpe2Nhc2UgMzpyaShiKTtzaCgpO2JyZWFrO2Nhc2UgNTpnaChiKTticmVhaztjYXNlIDE6RmYoYi50eXBlKSYmSmYoYik7YnJlYWs7Y2FzZSA0OmVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDpkPWIubWVtb2l6ZWRQcm9wcy52YWx1ZTt2YXIgZT1iLnR5cGUuX2NvbnRleHQ7SShtZyxlLl9jdXJyZW50VmFsdWUpO2UuX2N1cnJlbnRWYWx1ZT1kO2JyZWFrO2Nhc2UgMTM6aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSl7aWYoMCE9PShjJmIuY2hpbGQuY2hpbGRMYW5lcykpcmV0dXJuIHRpKGEsYixjKTtJKFAsUC5jdXJyZW50JjEpO2I9aGkoYSxiLGMpO3JldHVybiBudWxsIT09XG5iP2Iuc2libGluZzpudWxsfUkoUCxQLmN1cnJlbnQmMSk7YnJlYWs7Y2FzZSAxOTpkPTAhPT0oYyZiLmNoaWxkTGFuZXMpO2lmKDAhPT0oYS5mbGFncyY2NCkpe2lmKGQpcmV0dXJuIEFpKGEsYixjKTtiLmZsYWdzfD02NH1lPWIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGUucmVuZGVyaW5nPW51bGwsZS50YWlsPW51bGwsZS5sYXN0RWZmZWN0PW51bGwpO0koUCxQLmN1cnJlbnQpO2lmKGQpYnJlYWs7ZWxzZSByZXR1cm4gbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIGIubGFuZXM9MCxtaShhLGIsYyl9cmV0dXJuIGhpKGEsYixjKX1lbHNlIHVnPSExO2IubGFuZXM9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPWIudHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTthPWIucGVuZGluZ1Byb3BzO2U9RWYoYixNLmN1cnJlbnQpO3RnKGIsYyk7ZT1DaChudWxsLGIsZCxhLGUsYyk7Yi5mbGFnc3w9MTtpZihcIm9iamVjdFwiPT09XG50eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZil7Yi50YWc9MTtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYoRmYoZCkpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsO3hnKGIpO3ZhciBnPWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiZHZyhiLGQsZyxhKTtlLnVwZGF0ZXI9S2c7Yi5zdGF0ZU5vZGU9ZTtlLl9yZWFjdEludGVybmFscz1iO09nKGIsZCxhLGMpO2I9cWkobnVsbCxiLGQsITAsZixjKX1lbHNlIGIudGFnPTAsZmkobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO2E6e251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO1xuYT1iLnBlbmRpbmdQcm9wcztmPWUuX2luaXQ7ZT1mKGUuX3BheWxvYWQpO2IudHlwZT1lO2Y9Yi50YWc9aGsoZSk7YT1sZyhlLGEpO3N3aXRjaChmKXtjYXNlIDA6Yj1saShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxOmI9cGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTE6Yj1naShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxNDpiPWlpKG51bGwsYixlLGxnKGUudHlwZSxhKSxkLGMpO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgzMDYsZSxcIlwiKSk7fXJldHVybiBiO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxsaShhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxwaShhLGIsZCxlLGMpO2Nhc2UgMzpyaShiKTtkPWIudXBkYXRlUXVldWU7aWYobnVsbD09PWF8fG51bGw9PT1kKXRocm93IEVycm9yKHkoMjgyKSk7XG5kPWIucGVuZGluZ1Byb3BzO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7eWcoYSxiKTtDZyhiLGQsbnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKXNoKCksYj1oaShhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGY9ZS5oeWRyYXRlKWtoPXJmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8uZmlyc3RDaGlsZCksamg9YixmPWxoPSEwO2lmKGYpe2E9ZS5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhO2lmKG51bGwhPWEpZm9yKGU9MDtlPGEubGVuZ3RoO2UrPTIpZj1hW2VdLGYuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9YVtlKzFdLHRoLnB1c2goZik7Yz1aZyhiLG51bGwsZCxjKTtmb3IoYi5jaGlsZD1jO2M7KWMuZmxhZ3M9Yy5mbGFncyYtM3wxMDI0LGM9Yy5zaWJsaW5nfWVsc2UgZmkoYSxiLGQsYyksc2goKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBnaChiKSxudWxsPT09YSYmXG5waChiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsZz1lLmNoaWxkcmVuLG5mKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZuZihkLGYpJiYoYi5mbGFnc3w9MTYpLG9pKGEsYiksZmkoYSxiLGcsYyksYi5jaGlsZDtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZwaChiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIHRpKGEsYixjKTtjYXNlIDQ6cmV0dXJuIGVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPVlnKGIsbnVsbCxkLGMpOmZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxnaShhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sXG5jKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7dmFyIGg9Yi50eXBlLl9jb250ZXh0O0kobWcsaC5fY3VycmVudFZhbHVlKTtoLl9jdXJyZW50VmFsdWU9ZjtpZihudWxsIT09ZylpZihoPWcudmFsdWUsZj1IZShoLGYpPzA6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLl9jYWxjdWxhdGVDaGFuZ2VkQml0cz9kLl9jYWxjdWxhdGVDaGFuZ2VkQml0cyhoLGYpOjEwNzM3NDE4MjMpfDAsMD09PWYpe2lmKGcuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhTi5jdXJyZW50KXtiPWhpKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihoPWIuY2hpbGQsbnVsbCE9PWgmJihoLnJldHVybj1iKTtudWxsIT09aDspe3ZhciBrPWguZGVwZW5kZW5jaWVzO2lmKG51bGwhPT1rKXtnPWguY2hpbGQ7Zm9yKHZhciBsPVxuay5maXJzdENvbnRleHQ7bnVsbCE9PWw7KXtpZihsLmNvbnRleHQ9PT1kJiYwIT09KGwub2JzZXJ2ZWRCaXRzJmYpKXsxPT09aC50YWcmJihsPXpnKC0xLGMmLWMpLGwudGFnPTIsQWcoaCxsKSk7aC5sYW5lc3w9YztsPWguYWx0ZXJuYXRlO251bGwhPT1sJiYobC5sYW5lc3w9Yyk7c2coaC5yZXR1cm4sYyk7ay5sYW5lc3w9YzticmVha31sPWwubmV4dH19ZWxzZSBnPTEwPT09aC50YWc/aC50eXBlPT09Yi50eXBlP251bGw6aC5jaGlsZDpoLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWg7ZWxzZSBmb3IoZz1oO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31oPWcuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Zy5yZXR1cm47Zz1oO2JyZWFrfWc9Zy5yZXR1cm59aD1nfWZpKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGY9Yi5wZW5kaW5nUHJvcHMsZD1mLmNoaWxkcmVuLHRnKGIsYyksZT12ZyhlLFxuZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmZsYWdzfD0xLGZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1sZyhlLGIucGVuZGluZ1Byb3BzKSxmPWxnKGUudHlwZSxmKSxpaShhLGIsZSxmLGQsYyk7Y2FzZSAxNTpyZXR1cm4ga2koYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxkLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksYi50YWc9MSxGZihkKT8oYT0hMCxKZihiKSk6YT0hMSx0ZyhiLGMpLE1nKGIsZCxlKSxPZyhiLGQsZSxjKSxxaShudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIEFpKGEsYixjKTtjYXNlIDIzOnJldHVybiBtaShhLGIsYyk7Y2FzZSAyNDpyZXR1cm4gbWkoYSxiLGMpfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7XG59O2Z1bmN0aW9uIGlrKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5kZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5mbGFncz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRMYW5lcz10aGlzLmxhbmVzPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBuaChhLGIsYyxkKXtyZXR1cm4gbmV3IGlrKGEsYixjLGQpfWZ1bmN0aW9uIGppKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9XG5mdW5jdGlvbiBoayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gamkoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PUFhKXJldHVybiAxMTtpZihhPT09RGEpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gVGcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1uaChhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLnR5cGU9YS50eXBlLGMuZmxhZ3M9MCxjLm5leHRFZmZlY3Q9bnVsbCxjLmZpcnN0RWZmZWN0PW51bGwsYy5sYXN0RWZmZWN0PW51bGwpO2MuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXM7Yy5sYW5lcz1hLmxhbmVzO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2I9YS5kZXBlbmRlbmNpZXM7Yy5kZXBlbmRlbmNpZXM9bnVsbD09PWI/bnVsbDp7bGFuZXM6Yi5sYW5lcyxmaXJzdENvbnRleHQ6Yi5maXJzdENvbnRleHR9O1xuYy5zaWJsaW5nPWEuc2libGluZztjLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBWZyhhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpamkoYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuIFhnKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgSGE6Zz04O2V8PTE2O2JyZWFrO2Nhc2Ugd2E6Zz04O2V8PTE7YnJlYWs7Y2FzZSB4YTpyZXR1cm4gYT1uaCgxMixjLGIsZXw4KSxhLmVsZW1lbnRUeXBlPXhhLGEudHlwZT14YSxhLmxhbmVzPWYsYTtjYXNlIEJhOnJldHVybiBhPW5oKDEzLGMsYixlKSxhLnR5cGU9QmEsYS5lbGVtZW50VHlwZT1CYSxhLmxhbmVzPWYsYTtjYXNlIENhOnJldHVybiBhPW5oKDE5LGMsYixlKSxhLmVsZW1lbnRUeXBlPUNhLGEubGFuZXM9ZixhO2Nhc2UgSWE6cmV0dXJuIHZpKGMsZSxmLGIpO2Nhc2UgSmE6cmV0dXJuIGE9bmgoMjQsYyxiLGUpLGEuZWxlbWVudFR5cGU9SmEsYS5sYW5lcz1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09XG50eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgeWE6Zz0xMDticmVhayBhO2Nhc2UgemE6Zz05O2JyZWFrIGE7Y2FzZSBBYTpnPTExO2JyZWFrIGE7Y2FzZSBEYTpnPTE0O2JyZWFrIGE7Y2FzZSBFYTpnPTE2O2Q9bnVsbDticmVhayBhO2Nhc2UgRmE6Zz0yMjticmVhayBhfXRocm93IEVycm9yKHkoMTMwLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKSk7fWI9bmgoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IubGFuZXM9ZjtyZXR1cm4gYn1mdW5jdGlvbiBYZyhhLGIsYyxkKXthPW5oKDcsYSxkLGIpO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiB2aShhLGIsYyxkKXthPW5oKDIzLGEsZCxiKTthLmVsZW1lbnRUeXBlPUlhO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiBVZyhhLGIsYyl7YT1uaCg2LGEsbnVsbCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBXZyhhLGIsYyl7Yj1uaCg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5sYW5lcz1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGprKGEsYixjKXt0aGlzLnRhZz1iO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMuZmluaXNoZWRXb3JrPXRoaXMucGluZ0NhY2hlPXRoaXMuY3VycmVudD10aGlzLnBlbmRpbmdDaGlsZHJlbj1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuaHlkcmF0ZT1jO3RoaXMuY2FsbGJhY2tOb2RlPW51bGw7dGhpcy5jYWxsYmFja1ByaW9yaXR5PTA7dGhpcy5ldmVudFRpbWVzPVpjKDApO3RoaXMuZXhwaXJhdGlvblRpbWVzPVpjKC0xKTt0aGlzLmVudGFuZ2xlZExhbmVzPXRoaXMuZmluaXNoZWRMYW5lcz10aGlzLm11dGFibGVSZWFkTGFuZXM9dGhpcy5leHBpcmVkTGFuZXM9dGhpcy5waW5nZWRMYW5lcz10aGlzLnN1c3BlbmRlZExhbmVzPXRoaXMucGVuZGluZ0xhbmVzPTA7dGhpcy5lbnRhbmdsZW1lbnRzPVpjKDApO3RoaXMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1udWxsfVxuZnVuY3Rpb24ga2soYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjp0YSxrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbmZ1bmN0aW9uIGxrKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPUhnKCksZz1JZyhlKTthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbHM7Yjp7aWYoWmIoYykhPT1jfHwxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxNzApKTt2YXIgaD1jO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSAzOmg9aC5zdGF0ZU5vZGUuY29udGV4dDticmVhayBiO2Nhc2UgMTppZihGZihoLnR5cGUpKXtoPWguc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpO3Rocm93IEVycm9yKHkoMTcxKSk7fWlmKDE9PT1jLnRhZyl7dmFyIGs9Yy50eXBlO2lmKEZmKGspKXtjPUlmKGMsayxoKTticmVhayBhfX1jPWh9ZWxzZSBjPUNmO251bGw9PT1iLmNvbnRleHQ/Yi5jb250ZXh0PWM6Yi5wZW5kaW5nQ29udGV4dD1jO2I9emcoZixnKTtiLnBheWxvYWQ9e2VsZW1lbnQ6YX07ZD12b2lkIDA9PT1kP251bGw6ZDtudWxsIT09XG5kJiYoYi5jYWxsYmFjaz1kKTtBZyhlLGIpO0pnKGUsZyxmKTtyZXR1cm4gZ31mdW5jdGlvbiBtayhhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIG5rKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe3ZhciBjPWEucmV0cnlMYW5lO2EucmV0cnlMYW5lPTAhPT1jJiZjPGI/YzpifX1mdW5jdGlvbiBvayhhLGIpe25rKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZuayhhLGIpfWZ1bmN0aW9uIHBrKCl7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBxayhhLGIsYyl7dmFyIGQ9bnVsbCE9YyYmbnVsbCE9Yy5oeWRyYXRpb25PcHRpb25zJiZjLmh5ZHJhdGlvbk9wdGlvbnMubXV0YWJsZVNvdXJjZXN8fG51bGw7Yz1uZXcgamsoYSxiLG51bGwhPWMmJiEwPT09Yy5oeWRyYXRlKTtiPW5oKDMsbnVsbCxudWxsLDI9PT1iPzc6MT09PWI/MzowKTtjLmN1cnJlbnQ9YjtiLnN0YXRlTm9kZT1jO3hnKGIpO2FbZmZdPWMuY3VycmVudDtjZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKXtiPWRbYV07dmFyIGU9Yi5fZ2V0VmVyc2lvbjtlPWUoYi5fc291cmNlKTtudWxsPT1jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE/Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPVtiLGVdOmMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YS5wdXNoKGIsZSl9dGhpcy5faW50ZXJuYWxSb290PWN9XG5xay5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe2xrKGEsdGhpcy5faW50ZXJuYWxSb290LG51bGwsbnVsbCl9O3FrLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5faW50ZXJuYWxSb290LGI9YS5jb250YWluZXJJbmZvO2xrKG51bGwsYSxudWxsLGZ1bmN0aW9uKCl7YltmZl09bnVsbH0pfTtmdW5jdGlvbiByayhhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9XG5mdW5jdGlvbiBzayhhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IHFrKGEsMCxiP3toeWRyYXRlOiEwfTp2b2lkIDApfVxuZnVuY3Rpb24gdGsoYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7dmFyIGc9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtoLmNhbGwoYSl9fWxrKGIsZyxhLGUpfWVsc2V7Zj1jLl9yZWFjdFJvb3RDb250YWluZXI9c2soYyxkKTtnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGs9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7ay5jYWxsKGEpfX1YaihmdW5jdGlvbigpe2xrKGIsZyxhLGUpfSl9cmV0dXJuIG1rKGcpfWVjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw0LGIpO29rKGEsNCl9fTtmYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNjcxMDg4NjQsYik7b2soYSw2NzEwODg2NCl9fTtcbmdjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCksYz1JZyhhKTtKZyhhLGMsYik7b2soYSxjKX19O2hjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIoKX07XG55Yj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOmFiKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1EYihkKTtpZighZSl0aHJvdyBFcnJvcih5KDkwKSk7V2EoZCk7YWIoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZmYihhLCEhYy5tdWx0aXBsZSxiLCExKX19O0diPVdqO1xuSGI9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1YO1h8PTQ7dHJ5e3JldHVybiBnZyg5OCxhLmJpbmQobnVsbCxiLGMsZCxlKSl9ZmluYWxseXtYPWYsMD09PVgmJih3aigpLGlnKCkpfX07SWI9ZnVuY3Rpb24oKXswPT09KFgmNDkpJiYoVmooKSxPaigpKX07SmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO1h8PTI7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19O2Z1bmN0aW9uIHVrKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIGtrKGEsYixudWxsLGMpfXZhciB2az17RXZlbnRzOltDYix1ZSxEYixFYixGYixPaix7Y3VycmVudDohMX1dfSx3az17ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2MsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNy4wLjJcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9O1xudmFyIHhrPXtidW5kbGVUeXBlOndrLmJ1bmRsZVR5cGUsdmVyc2lvbjp3ay52ZXJzaW9uLHJlbmRlcmVyUGFja2FnZU5hbWU6d2sucmVuZGVyZXJQYWNrYWdlTmFtZSxyZW5kZXJlckNvbmZpZzp3ay5yZW5kZXJlckNvbmZpZyxvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlSG9va1N0YXRlRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlSG9va1N0YXRlUmVuYW1lUGF0aDpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxvdmVycmlkZVByb3BzRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlUHJvcHNSZW5hbWVQYXRoOm51bGwsc2V0U3VzcGVuc2VIYW5kbGVyOm51bGwsc2NoZWR1bGVVcGRhdGU6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjpyYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9Y2MoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndrLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlfHxcbnBrLGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGx9O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXt2YXIgeWs9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKCF5ay5pc0Rpc2FibGVkJiZ5ay5zdXBwb3J0c0ZpYmVyKXRyeXtMZj15ay5pbmplY3QoeGspLE1mPXlrfWNhdGNoKGEpe319ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD12aztleHBvcnRzLmNyZWF0ZVBvcnRhbD11aztcbmV4cG9ydHMuZmluZERPTU5vZGU9ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFscztpZih2b2lkIDA9PT1iKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXIpdGhyb3cgRXJyb3IoeSgxODgpKTt0aHJvdyBFcnJvcih5KDI2OCxPYmplY3Qua2V5cyhhKSkpO31hPWNjKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO2lmKDAhPT0oYyY0OCkpcmV0dXJuIGEoYik7WHw9MTt0cnl7aWYoYSlyZXR1cm4gZ2coOTksYS5iaW5kKG51bGwsYikpfWZpbmFsbHl7WD1jLGlnKCl9fTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCExLGMpfTtleHBvcnRzLnVubW91bnRDb21wb25lbnRBdE5vZGU9ZnVuY3Rpb24oYSl7aWYoIXJrKGEpKXRocm93IEVycm9yKHkoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhYaihmdW5jdGlvbigpe3RrKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGw7YVtmZl09bnVsbH0pfSksITApOiExfTtleHBvcnRzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzPVdqO2V4cG9ydHMudW5zdGFibGVfY3JlYXRlUG9ydGFsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHVrKGEsYiwyPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCl9O1xuZXhwb3J0cy51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyxkKXtpZighcmsoYykpdGhyb3cgRXJyb3IoeSgyMDApKTtpZihudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFscyl0aHJvdyBFcnJvcih5KDM4KSk7cmV0dXJuIHRrKGEsYixjLCExLGQpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4yMC4yXG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBmLGcsaCxrO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBsPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIGwubm93KCl9fWVsc2V7dmFyIHA9RGF0ZSxxPXAubm93KCk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gcC5ub3coKS1xfX1cbmlmKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciB0PW51bGwsdT1udWxsLHc9ZnVuY3Rpb24oKXtpZihudWxsIT09dCl0cnl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0KCEwLGEpO3Q9bnVsbH1jYXRjaChiKXt0aHJvdyBzZXRUaW1lb3V0KHcsMCksYjt9fTtmPWZ1bmN0aW9uKGEpe251bGwhPT10P3NldFRpbWVvdXQoZiwwLGEpOih0PWEsc2V0VGltZW91dCh3LDApKX07Zz1mdW5jdGlvbihhLGIpe3U9c2V0VGltZW91dChhLGIpfTtoPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpfTtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2s9ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbigpe319ZWxzZXt2YXIgeD13aW5kb3cuc2V0VGltZW91dCx5PXdpbmRvdy5jbGVhclRpbWVvdXQ7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXt2YXIgej1cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB6JiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKX12YXIgQT0hMSxCPW51bGwsQz0tMSxEPTUsRT0wO2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKT49XG5FfTtrPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZFwiKTpEPTA8YT9NYXRoLmZsb29yKDFFMy9hKTo1fTt2YXIgRj1uZXcgTWVzc2FnZUNoYW5uZWwsRz1GLnBvcnQyO0YucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7aWYobnVsbCE9PUIpe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7RT1hK0Q7dHJ5e0IoITAsYSk/Ry5wb3N0TWVzc2FnZShudWxsKTooQT0hMSxCPW51bGwpfWNhdGNoKGIpe3Rocm93IEcucG9zdE1lc3NhZ2UobnVsbCksYjt9fWVsc2UgQT0hMX07Zj1mdW5jdGlvbihhKXtCPWE7QXx8KEE9ITAsRy5wb3N0TWVzc2FnZShudWxsKSl9O2c9ZnVuY3Rpb24oYSxiKXtDPVxueChmdW5jdGlvbigpe2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LGIpfTtoPWZ1bmN0aW9uKCl7eShDKTtDPS0xfX1mdW5jdGlvbiBIKGEsYil7dmFyIGM9YS5sZW5ndGg7YS5wdXNoKGIpO2E6Zm9yKDs7KXt2YXIgZD1jLTE+Pj4xLGU9YVtkXTtpZih2b2lkIDAhPT1lJiYwPEkoZSxiKSlhW2RdPWIsYVtjXT1lLGM9ZDtlbHNlIGJyZWFrIGF9fWZ1bmN0aW9uIEooYSl7YT1hWzBdO3JldHVybiB2b2lkIDA9PT1hP251bGw6YX1cbmZ1bmN0aW9uIEsoYSl7dmFyIGI9YVswXTtpZih2b2lkIDAhPT1iKXt2YXIgYz1hLnBvcCgpO2lmKGMhPT1iKXthWzBdPWM7YTpmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTspe3ZhciBtPTIqKGQrMSktMSxuPWFbbV0sdj1tKzEscj1hW3ZdO2lmKHZvaWQgMCE9PW4mJjA+SShuLGMpKXZvaWQgMCE9PXImJjA+SShyLG4pPyhhW2RdPXIsYVt2XT1jLGQ9dik6KGFbZF09bixhW21dPWMsZD1tKTtlbHNlIGlmKHZvaWQgMCE9PXImJjA+SShyLGMpKWFbZF09cixhW3ZdPWMsZD12O2Vsc2UgYnJlYWsgYX19cmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gSShhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH12YXIgTD1bXSxNPVtdLE49MSxPPW51bGwsUD0zLFE9ITEsUj0hMSxTPSExO1xuZnVuY3Rpb24gVChhKXtmb3IodmFyIGI9SihNKTtudWxsIT09Yjspe2lmKG51bGw9PT1iLmNhbGxiYWNrKUsoTSk7ZWxzZSBpZihiLnN0YXJ0VGltZTw9YSlLKE0pLGIuc29ydEluZGV4PWIuZXhwaXJhdGlvblRpbWUsSChMLGIpO2Vsc2UgYnJlYWs7Yj1KKE0pfX1mdW5jdGlvbiBVKGEpe1M9ITE7VChhKTtpZighUilpZihudWxsIT09SihMKSlSPSEwLGYoVik7ZWxzZXt2YXIgYj1KKE0pO251bGwhPT1iJiZnKFUsYi5zdGFydFRpbWUtYSl9fVxuZnVuY3Rpb24gVihhLGIpe1I9ITE7UyYmKFM9ITEsaCgpKTtRPSEwO3ZhciBjPVA7dHJ5e1QoYik7Zm9yKE89SihMKTtudWxsIT09TyYmKCEoTy5leHBpcmF0aW9uVGltZT5iKXx8YSYmIWV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQoKSk7KXt2YXIgZD1PLmNhbGxiYWNrO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXtPLmNhbGxiYWNrPW51bGw7UD1PLnByaW9yaXR5TGV2ZWw7dmFyIGU9ZChPLmV4cGlyYXRpb25UaW1lPD1iKTtiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGU/Ty5jYWxsYmFjaz1lOk89PT1KKEwpJiZLKEwpO1QoYil9ZWxzZSBLKEwpO089SihMKX1pZihudWxsIT09Tyl2YXIgbT0hMDtlbHNle3ZhciBuPUooTSk7bnVsbCE9PW4mJmcoVSxuLnN0YXJ0VGltZS1iKTttPSExfXJldHVybiBtfWZpbmFsbHl7Tz1udWxsLFA9YyxRPSExfX12YXIgVz1rO2V4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZz1udWxsO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe2EuY2FsbGJhY2s9bnVsbH07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe1J8fFF8fChSPSEwLGYoVikpfTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIFB9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gSihMKX07XG5leHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKFApe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPVB9dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtQPWN9fTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1XO2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9UDtQPWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXtQPWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6TisrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsSChNLGEpLG51bGw9PT1KKEwpJiZhPT09SihNKSYmKFM/aCgpOlM9ITAsZyhVLGMtZCkpKTooYS5zb3J0SW5kZXg9ZSxIKEwsYSksUnx8UXx8KFI9ITAsZihWKSkpO3JldHVybiBhfTtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPVA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e1A9Y319fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7OztBQ3ZEQTs7QTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBOzs7QTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFEQTtBQUNBO0FBR0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFrQkE7QUFDQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQXdDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQVJBO0FBWUE7QUFFQTs7QTs7Ozs7Ozs7Ozs7QUN6SUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQVJBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBVkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQTVDQTtBQUFBO0FBeEJBO0FBd0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QTs7Ozs7Ozs7OztBQ3pWQTtBQWNBO0FBRUE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFJQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUF2QkE7QUErQkE7QUFDQTtBQUVBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUErRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBTkE7QUFlQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7OztBQ25HQTtBQVVBO0FBQ0E7QUFFQTs7QTs7Ozs7Ozs7Ozs7QUNiQTtBQUdBO0FBRUE7QUFHQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFMQTtBQVFBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUlBOzs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTs7OztBQWhIQTtBQUNBO0FBcUhBOztBQzNJQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBVkE7QUFhQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUNBOzs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFvSkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFzQkE7QUFDQTtBQURBO0FBcUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFNQTtBQUlBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQVhBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUlBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWdCQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBaFBBO0FBOFBBO0FBRUE7QUFDQTtBQURBOzs7O0FDamRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUEwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWVBO0FBQ0E7QUFEQTtBQWxHQTtBQXNHQTtBQUVBOzs7OztBQ3BPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFhQTtBQUVBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFiQTtBQXlCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBWkE7QUFjQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQWJBO0FBaUJBO0FBQ0E7QUFFQTs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFvQkE7QUFFQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQUFBO0FBQ0E7QUFXQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBOUJBO0FBQ0E7QUFnQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFUQTtBQVlBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUpBO0FBMUhBO0FBc0lBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7OztBQ3JMQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFtRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWEE7QUFnQkE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBdERBO0FBNkRBO0FBQ0E7QUFFQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBT0E7QUFBQTtBQVBBO0FBQUE7QUFEQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBbERBO0FBQ0E7QUF3REE7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQVVBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUZBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQURBO0FBNUJBO0FBTEE7QUF1Q0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSUE7QUFDQTtBQUNBO0FBQ0EsaUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdIQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUdBO0FBVkE7QUFKQTtBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFLQTtBQS9CQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBREE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFkQTtBQUFBO0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFNQTtBQVhBO0FBYUE7QUF6QkE7QUE0QkE7QUFHQTtBQUNBO0FBREE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFNQTtBQVZBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTkE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQTVDQTtBQTREQTtBQUNBO0FBREE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFxREE7QUFXQTtBQUNBO0FBQ0E7QUFHQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7QUN4U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FFQTs7O0E7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FFQTs7O0E7OztBIiwic291cmNlUm9vdCI6IiJ9