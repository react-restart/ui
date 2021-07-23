exports.id = 25;
exports.ids = [25];
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

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ENTERED": () => (/* binding */ ENTERED),
  "ENTERING": () => (/* binding */ ENTERING),
  "EXITED": () => (/* binding */ EXITED),
  "EXITING": () => (/* binding */ EXITING),
  "UNMOUNTED": () => (/* binding */ UNMOUNTED),
  "default": () => (/* binding */ esm_Transition)
});

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3615);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ../node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ../node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (react.createContext(null));
;// CONCATENATED MODULE: ../node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);

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

/***/ 9059:
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
const frontMatter={title:'Animation and Transitions'};const contentTitle=undefined;const metadata={"unversionedId":"transitions","id":"transitions","isDocsHomePage":false,"title":"Animation and Transitions","description":"Animation of components is handled by transition props. If","source":"@site/docs/transitions.mdx","sourceDirName":".","slug":"/transitions","permalink":"/ui/transitions","version":"current","frontMatter":{"title":"Animation and Transitions"},"sidebar":"docs","previous":{"title":"useRootClose","permalink":"/ui/useRootClose"},"next":{"title":"Server Side Rendering","permalink":"/ui/SSR"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(MDXLayout,(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("p",null,`Animation of components is handled by `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`transition`),` props. If
a component accepts a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`transition`),` prop you can provide
a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/reactjs/react-transition-group"},`react-transition-group@2.0.0`),`
compatible `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Transition`),` component and it will work. Feel free to use `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`CSSTransition`),`
specifically, or roll your own like the below example.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.default,{imports:()=>(0,_theme_ImportContext__WEBPACK_IMPORTED_MODULE_3__.allValues)({"@restart/ui":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(6352))),"react-transition-group/Transition":Promise.resolve().then(()=>(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(__webpack_require__(2745)))}),mdxType:"ImportContext"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js","metastring":"live","live":true},`import { Modal, Overlay } from "@restart/ui";
import Transition from "react-transition-group/Transition";

const FADE_DURATION = 200;

injectCss(\`
  .fade {
    opacity: 0;
    transition: opacity \${FADE_DURATION}ms linear;
  }

  .show {
    opacity: 1;
  }


  .backdrop.fade.show {
    opacity: 0.5;
  }

  .dialog {
    position: absolute;
    width: 400;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    padding: 20px;
  }
\`);

const fadeStyles = {
  entering: "show",
  entered: "show",
};

const Fade = ({ children, ...props }) => (
  <Transition {...props} timeout={FADE_DURATION}>
    {(status, innerProps) =>
      React.cloneElement(children, {
        ...innerProps,
        className: \`fade \${fadeStyles[status]} \${children.props.className}\`,
      })
    }
  </Transition>
);

function TransitionExample() {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipRef, attachRef] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="btn btn-primary mr-3"
        onClick={() => setShowModal((prev) => !prev)}
      >
        Show Animated Modal
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowTooltip((prev) => !prev)}
        ref={attachRef}
      >
        Show Tooltip
      </button>

      <Overlay
        placement="top"
        transition={Fade}
        show={showTooltip}
        target={tooltipRef}
        popperConfig={{
          modifiers: [
            {
              name: "offset",
              enabled: true,
              options: { offset: [0, 10] },
            },
          ],
        }}
      >
        {({ props: { ref, style } }) => (
          <div
            ref={ref}
            className="bg-primary-200 shadow rounded z-10 px-4"
            style={style}
          >
            Hello there
          </div>
        )}
      </Overlay>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        transition={Fade}
        backdropTransition={Fade}
        renderBackdrop={(props) => (
          <div
            {...props}
            className="backdrop absolute inset-0 bg-black z-40"
          />
        )}
        renderDialog={(props) => (
          <div
            {...props}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="dialog bg-white shadow rounded-lg pointer-events-auto">
              <h4 id="modal-label">I&apos;m fading in!</h4>
              <p>
                Anim pariatur cliche reprehenderit, enim
                eiusmod high life accusamus terry richardson
                ad squid. Nihil anim keffiyeh helvetica,
                craft beer labore wes anderson cred nesciunt
                sapiente ea proident.
              </p>
              <button
                type="button"
                className="btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}

<TransitionExample />;
`))));};MDXContent.isMDXComponent=true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2RhNGRlNGVjLmIwOTEwODM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvc3NyL2Rpc3QvbW9kdWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VDYWxsYmFja1JlZi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VFdmVudENhbGxiYWNrLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VGb3JjZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2NhblVzZURPTS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyV2luZG93LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2h5cGhlbmF0ZVN0eWxlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY3NzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL293bmVyRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3F1ZXJ5U2VsZWN0b3JBbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9ob29rLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdW5jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2Rpc3QvZXNtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQDRjL2RvY3VzYXVydXMtcHJlc2V0L2xpYi90aGVtZS9JbXBvcnRDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRGF0YUtleS50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUdsb2JhbExpc3RlbmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Ecm9wZG93bk1lbnUudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL0Ryb3Bkb3duVG9nZ2xlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9OYXZDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9TZWxlY3RhYmxlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVVwZGF0ZWRSZWYuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVdpbGxVbm1vdW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL2dldFNjcm9sbGJhcldpZHRoLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsTWFuYWdlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VXYWl0Rm9yRE9NUmVmLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL01vZGFsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTWVyZ2VkUmVmcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9Qb3J0YWwudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYkNvbnRleHQudHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdkl0ZW0udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL05hdi50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvTm9vcFRyYW5zaXRpb24udHN4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9UYWJzLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RlcXVhbC9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlU2FmZVN0YXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9zcmMvcG9wcGVyLnRzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL3VzZVBvcHBlci50cyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VSb290Q2xvc2UudHMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL2RvY3MvdHJhbnNpdGlvbnMubWR4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIERlZmF1bHQgY29udGV4dCB2YWx1ZSB0byB1c2UgaW4gY2FzZSB0aGVyZSBpcyBubyBTU1JQcm92aWRlci4gVGhpcyBpcyBmaW5lIGZvclxuLy8gY2xpZW50LW9ubHkgYXBwcy4gSW4gb3JkZXIgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBwb3RlbnRpYWxseVxuLy8gYmVpbmcgb24gdGhlIHBhZ2UgYXQgb25jZSwgdGhlIHByZWZpeCBpcyBzZXQgdG8gYSByYW5kb20gbnVtYmVyLiBTU1JQcm92aWRlclxuLy8gd2lsbCByZXNldCB0aGlzIHRvIHplcm8gZm9yIGNvbnNpc3RlbmN5IGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQsIHNvIGluIHRoZVxuLy8gU1NSIGNhc2UgbXVsdGlwbGUgY29waWVzIG9mIFJlYWN0IEFyaWEgaXMgbm90IHN1cHBvcnRlZC5cbmNvbnN0ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCA9IHtcbiAgcHJlZml4OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMCksXG4gIGN1cnJlbnQ6IDBcbn07XG5cbmNvbnN0ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5jcmVhdGVDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCk7XG5cbi8qKlxuICogV2hlbiB1c2luZyBTU1Igd2l0aCBSZWFjdCBBcmlhLCBhcHBsaWNhdGlvbnMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIFNTUlByb3ZpZGVyLlxuICogVGhpcyBlbnN1cmVzIHRoYXQgYXV0byBnZW5lcmF0ZWQgaWRzIGFyZSBjb25zaXN0ZW50IGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU1NSUHJvdmlkZXIocHJvcHMpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgU1NSUHJvdmlkZXIsIHNldCB0byB6ZXJvLCBvdGhlcndpc2UgaW5jcmVtZW50LlxuICAgIHByZWZpeDogY3VyID09PSAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQgPyAwIDogKytjdXIucHJlZml4LFxuICAgIGN1cnJlbnQ6IDBcbiAgfSksIFtjdXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuY3JlYXRlRWxlbWVudCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59XG5sZXQgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGNhblVzZURPTSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbi8qKiBAcHJpdmF0ZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU1NSU2FmZUlkKGRlZmF1bHRJZCkge1xuICBsZXQgY3R4ID0gdXNlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkU1NSQ29udGV4dCk7IC8vIElmIHdlIGFyZSByZW5kZXJpbmcgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBhbmQgdGhlcmUncyBubyBTU1JQcm92aWRlcixcbiAgLy8gcHJvdmlkZSBhIHdhcm5pbmcgdG8gaGludCB0byB0aGUgZGV2ZWxvcGVyIHRvIGFkZCBvbmUuXG5cbiAgaWYgKGN0eCA9PT0gJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ICYmICEkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkY2FuVXNlRE9NKSB7XG4gICAgY29uc29sZS53YXJuKCdXaGVuIHNlcnZlciByZW5kZXJpbmcsIHlvdSBtdXN0IHdyYXAgeW91ciBhcHBsaWNhdGlvbiBpbiBhbiA8U1NSUHJvdmlkZXI+IHRvIGVuc3VyZSBjb25zaXN0ZW50IGlkcyBhcmUgZ2VuZXJhdGVkIGJldHdlZW4gdGhlIGNsaWVudCBhbmQgc2VydmVyLicpO1xuICB9XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZGVmYXVsdElkIHx8IFwicmVhY3QtYXJpYS1cIiArIGN0eC5wcmVmaXggKyBcIi1cIiArICsrY3R4LmN1cnJlbnQsIFtkZWZhdWx0SWRdKTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgY3VycmVudGx5IGJlaW5nIHNlcnZlciBzaWRlIHJlbmRlcmVkIG9yXG4gKiBoeWRyYXRlZCBvbiB0aGUgY2xpZW50LiBDYW4gYmUgdXNlZCB0byBkZWxheSBicm93c2VyLXNwZWNpZmljIHJlbmRlcmluZ1xuICogdW50aWwgYWZ0ZXIgaHlkcmF0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1NTUigpIHtcbiAgbGV0IGN1ciA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpO1xuICBsZXQgaXNJblNTUkNvbnRleHQgPSBjdXIgIT09ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dDtcbiAgbGV0IFtpc1NTUiwgc2V0SXNTU1JdID0gdXNlU3RhdGUoaXNJblNTUkNvbnRleHQpOyAvLyBJZiBvbiB0aGUgY2xpZW50LCBhbmQgdGhlIGNvbXBvbmVudCB3YXMgaW5pdGlhbGx5IHNlcnZlciByZW5kZXJlZCxcbiAgLy8gdGhlbiBzY2hlZHVsZSBhIGxheW91dCBlZmZlY3QgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgYWZ0ZXIgaHlkcmF0aW9uLlxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luU1NSQ29udGV4dCkge1xuICAgIC8vIFRoaXMgaWYgc3RhdGVtZW50IHRlY2huaWNhbGx5IGJyZWFrcyB0aGUgcnVsZXMgb2YgaG9va3MsIGJ1dCBpcyBzYWZlXG4gICAgLy8gYmVjYXVzZSB0aGUgY29uZGl0aW9uIG5ldmVyIGNoYW5nZXMgYWZ0ZXIgbW91bnRpbmcuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHNldElzU1NSKGZhbHNlKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICByZXR1cm4gaXNTU1I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQSBjb252ZW5pZW5jZSBob29rIGFyb3VuZCBgdXNlU3RhdGVgIGRlc2lnbmVkIHRvIGJlIHBhaXJlZCB3aXRoXG4gKiB0aGUgY29tcG9uZW50IFtjYWxsYmFjayByZWZdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjY2FsbGJhY2stcmVmcykgYXBpLlxuICogQ2FsbGJhY2sgcmVmcyBhcmUgdXNlZnVsIG92ZXIgYHVzZVJlZigpYCB3aGVuIHlvdSBuZWVkIHRvIHJlc3BvbmQgdG8gdGhlIHJlZiBiZWluZyBzZXRcbiAqIGluc3RlYWQgb2YgbGF6aWx5IGFjY2Vzc2luZyBpdCBpbiBhbiBlZmZlY3QuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTERpdkVsZW1lbnQ+KClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBpZiAoIWVsZW1lbnQpIHJldHVyblxuICpcbiAqICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGVsZW1lbnQpXG4gKlxuICogICByZXR1cm4gKCkgPT4ge1xuICogICAgIGNhbGVuZGFyLmRlc3Ryb3koKVxuICogICB9XG4gKiB9LCBbZWxlbWVudF0pXG4gKlxuICogcmV0dXJuIDxkaXYgcmVmPXthdHRhY2hSZWZ9IC8+XG4gKiBgYGBcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKCkge1xuICByZXR1cm4gdXNlU3RhdGUobnVsbCk7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVmYCB3aG9zZSB2YWx1ZSBpcyB1cGRhdGVkIGluIGFuIGVmZmVjdCwgZW5zdXJpbmcgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZSBpcyB0aGUgb25lIHJlbmRlcmVkIHdpdGguIEdlbmVyYWxseSBvbmx5IHJlcXVpcmVkIGZvciBDb25jdXJyZW50IG1vZGUgdXNhZ2VcbiAqIHdoZXJlIHByZXZpb3VzIHdvcmsgaW4gYHJlbmRlcigpYCBtYXkgYmUgZGlzY2FyZGVkIGJlZm9yIGJlaW5nIHVzZWQuXG4gKlxuICogVGhpcyBpcyBzYWZlIHRvIGFjY2VzcyBpbiBhbiBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgYFJlZmAgdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb21taXR0ZWRSZWYodmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiByZWY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbW1pdHRlZFJlZjsiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuICB9LCBbcmVmXSk7XG59IiwiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgYSBjb21wb25lbnQgdXBkYXRlLiB0aGUgaG9vayBlcXVpdmFsZW50IHRvXG4gKiBgdGhpcy5mb3JjZVVwZGF0ZSgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudC4gSW4gbW9zdCBjYXNlcyB1c2luZyBhIHN0YXRlIHZhbHVlIGRpcmVjdGx5XG4gKiBpcyBwcmVmZXJhYmxlIGJ1dCBtYXkgYmUgcmVxdWlyZWQgaW4gc29tZSBhZHZhbmNlZCB1c2FnZXMgb2YgcmVmcyBmb3IgaW50ZXJvcCBvclxuICogd2hlbiBkaXJlY3QgRE9NIG1hbmlwdWxhdGlvbiBpcyByZXF1aXJlZC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICpcbiAqIGNvbnN0IHVwZGF0ZU9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gKiAgZm9yY2VVcGRhdGUoKVxuICogfSwgW2ZvcmNlVXBkYXRlXSlcbiAqXG4gKiByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dXBkYXRlT25DbGlja30+SGkgdGhlcmU8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICAvLyBUaGUgdG9nZ2xpbmcgc3RhdGUgdmFsdWUgaXMgZGVzaWduZWQgdG8gZGVmZWF0IFJlYWN0IG9wdGltaXphdGlvbnMgZm9yIHNraXBwaW5nXG4gIC8vIHVwZGF0ZXMgd2hlbiB0aGV5IGFyZSBzdHJpY3RpbmcgZXF1YWwgdG8gdGhlIGxhc3Qgc3RhdGUgdmFsdWVcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gIXN0YXRlO1xuICB9LCBmYWxzZSksXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHJldHVybiBkaXNwYXRjaDtcbn0iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogVHJhY2sgd2hldGhlciBhIGNvbXBvbmVudCBpcyBjdXJyZW50IG1vdW50ZWQuIEdlbmVyYWxseSBsZXNzIHByZWZlcmFibGUgdGhhblxuICogcHJvcGVybGx5IGNhbmNlbGluZyBlZmZlY3RzIHNvIHRoZXkgZG9uJ3QgcnVuIGFmdGVyIGEgY29tcG9uZW50IGlzIHVubW91bnRlZCxcbiAqIGJ1dCBoZWxwZnVsIGluIGNhc2VzIHdoZXJlIHRoYXQgaXNuJ3QgZmVhc2libGUsIHN1Y2ggYXMgYSBgUHJvbWlzZWAgcmVzb2x1dGlvbi5cbiAqXG4gKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBpc01vdW50ZWQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICogY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgZmV0Y2hkYXRhKCkudGhlbigobmV3RGF0YSkgPT4ge1xuICogICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAqICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiB9KVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRlZCgpIHtcbiAgdmFyIG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb3VudGVkLmN1cnJlbnQ7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBpc01vdW50ZWQuY3VycmVudDtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogU3RvcmUgdGhlIGxhc3Qgb2Ygc29tZSB2YWx1ZS4gVHJhY2tlZCB2aWEgYSBgUmVmYCBvbmx5IHVwZGF0aW5nIGl0XG4gKiBhZnRlciB0aGUgY29tcG9uZW50IHJlbmRlcnMuXG4gKlxuICogSGVscGZ1bCBpZiB5b3UgbmVlZCB0byBjb21wYXJlIGEgcHJvcCB2YWx1ZSB0byBpdCdzIHByZXZpb3VzIHZhbHVlIGR1cmluZyByZW5kZXIuXG4gKlxuICogYGBgdHNcbiAqIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xuICogICBjb25zdCBsYXN0UHJvcHMgPSB1c2VQcmV2aW91cyhwcm9wcylcbiAqXG4gKiAgIGlmIChsYXN0UHJvcHMuZm9vICE9PSBwcm9wcy5mb28pXG4gKiAgICAgcmVzZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcy5mb28pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHRyYWNrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBjYW5Vc2VET00gZnJvbSAnLi9jYW5Vc2VET00nO1xuZXhwb3J0IHZhciBvcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5leHBvcnQgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGdldCBvbmNlKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgcmV0dXJuIG9uY2VTdXBwb3J0ZWQgPSBvcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIHRydWUpO1xuICB9XG59IGNhdGNoIChlKSB7XG4gIC8qICovXG59XG5cbi8qKlxuICogQW4gYGFkZEV2ZW50TGlzdGVuZXJgIHBvbnlmaWxsLCBzdXBwb3J0cyB0aGUgYG9uY2VgIG9wdGlvblxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIGV2ZW50TmFtZSB0aGUgZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZSB0aGUgaGFuZGxlclxuICogQHBhcmFtIG9wdGlvbnMgZXZlbnQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nICYmICFvbmNlU3VwcG9ydGVkKSB7XG4gICAgdmFyIG9uY2UgPSBvcHRpb25zLm9uY2UsXG4gICAgICAgIGNhcHR1cmUgPSBvcHRpb25zLmNhcHR1cmU7XG4gICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIGlmICghb25jZVN1cHBvcnRlZCAmJiBvbmNlKSB7XG4gICAgICB3cmFwcGVkSGFuZGxlciA9IGhhbmRsZXIuX19vbmNlIHx8IGZ1bmN0aW9uIG9uY2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZXIuX19vbmNlID0gd3JhcHBlZEhhbmRsZXI7XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcHBlZEhhbmRsZXIsIG9wdGlvbnNTdXBwb3J0ZWQgPyBvcHRpb25zIDogY2FwdHVyZSk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lcjsiLCJleHBvcnQgZGVmYXVsdCAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UsIG5vLWNvbmQtYXNzaWduICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgY29udGFpbnMgYW5vdGhlciBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBlbGVtZW50XG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudCB0byBjaGVja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhjb250ZXh0LCBub2RlKSB7XG4gIC8vIEhUTUwgRE9NIGFuZCBTVkcgRE9NIG1heSBoYXZlIGRpZmZlcmVudCBzdXBwb3J0IGxldmVscyxcbiAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBvbiBjb250ZXh0IGluc3RlYWQgb2YgYSBkb2N1bWVudCByb290IGVsZW1lbnQuXG4gIGlmIChjb250ZXh0LmNvbnRhaW5zKSByZXR1cm4gY29udGV4dC5jb250YWlucyhub2RlKTtcbiAgaWYgKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHJldHVybiBjb250ZXh0ID09PSBub2RlIHx8ICEhKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNik7XG59IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50Jztcbi8qKlxuICogUmV0dXJucyB0aGUgb3duZXIgd2luZG93IG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lcldpbmRvdyhub2RlKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGUpO1xuICByZXR1cm4gZG9jICYmIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4vb3duZXJXaW5kb3cnO1xuLyoqXG4gKiBSZXR1cm5zIG9uZSBvciBhbGwgY29tcHV0ZWQgc3R5bGUgcHJvcGVydGllcyBvZiBhbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIHBzdWVkb0VsZW1lbnQgdGhlIHN0eWxlIHByb3BlcnR5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwc3VlZG9FbGVtZW50KSB7XG4gIHJldHVybiBvd25lcldpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpO1xufSIsInZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGUnO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufSIsInZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgc3VwcG9ydGVkVHJhbnNmb3Jtcy50ZXN0KHZhbHVlKSk7XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcbmltcG9ydCBoeXBoZW5hdGUgZnJvbSAnLi9oeXBoZW5hdGVTdHlsZSc7XG5pbXBvcnQgaXNUcmFuc2Zvcm0gZnJvbSAnLi9pc1RyYW5zZm9ybSc7XG5cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHByb3BlcnR5KSB7XG4gIHZhciBjc3MgPSAnJztcbiAgdmFyIHRyYW5zZm9ybXMgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKGh5cGhlbmF0ZShwcm9wZXJ0eSkpO1xuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvcGVydHkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnR5W2tleV07XG5cbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGh5cGhlbmF0ZShrZXkpKTtcbiAgICB9IGVsc2UgaWYgKGlzVHJhbnNmb3JtKGtleSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0ga2V5ICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzICs9IGh5cGhlbmF0ZShrZXkpICsgXCI6IFwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFuc2Zvcm1zKSB7XG4gICAgY3NzICs9IFwidHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybXMgKyBcIjtcIjtcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSBcIjtcIiArIGNzcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7IiwiLyoqXG4gKiBBIGByZW1vdmVFdmVudExpc3RlbmVyYCBwb255ZmlsbFxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIGV2ZW50TmFtZSB0aGUgZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZSB0aGUgaGFuZGxlclxuICogQHBhcmFtIG9wdGlvbnMgZXZlbnQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICB2YXIgY2FwdHVyZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdib29sZWFuJyA/IG9wdGlvbnMuY2FwdHVyZSA6IG9wdGlvbnM7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gIGlmIChoYW5kbGVyLl9fb25jZSkge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIuX19vbmNlLCBjYXB0dXJlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVFdmVudExpc3RlbmVyOyIsImltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJy4vYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgcmVtb3ZlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RlbjsiLCIvKipcbiAqIFJldHVybnMgdGhlIG93bmVyIGRvY3VtZW50IG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJ2YXIgdG9BcnJheSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFtdLnNsaWNlKTtcbi8qKlxuICogUnVucyBgcXVlcnlTZWxlY3RvckFsbGAgb24gYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudFxuICogQHBhcmFtIHNlbGVjdG9yIHRoZSBzZWxlY3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHFzYShlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gdG9BcnJheShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRzU2hhcGUgfSBmcm9tICcuL3V0aWxzL1Byb3BUeXBlcyc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwQ29udGV4dCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cENvbnRleHQnO1xuZXhwb3J0IHZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydCB2YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnQgdmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydCB2YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydCB2YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlKio6IGBUcmFuc2l0aW9uYCBpcyBhIHBsYXRmb3JtLWFnbm9zdGljIGJhc2UgY29tcG9uZW50LiBJZiB5b3UncmUgdXNpbmdcbiAqIHRyYW5zaXRpb25zIGluIENTUywgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8gdXNlXG4gKiBbYENTU1RyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Nzcy10cmFuc2l0aW9uKVxuICogaW5zdGVhZC4gSXQgaW5oZXJpdHMgYWxsIHRoZSBmZWF0dXJlcyBvZiBgVHJhbnNpdGlvbmAsIGJ1dCBjb250YWluc1xuICogYWRkaXRpb25hbCBmZWF0dXJlcyBuZWNlc3NhcnkgdG8gcGxheSBuaWNlIHdpdGggQ1NTIHRyYW5zaXRpb25zIChoZW5jZSB0aGVcbiAqIG5hbWUgb2YgdGhlIGNvbXBvbmVudCkuXG4gKlxuICogLS0tXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZVxuICogY29tcG9uZW50cy4gSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3JcbiAqIGV4YW1wbGUgd2UgY2FuIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqICAgZXhpdGluZzogIHsgb3BhY2l0eTogMCB9LFxuICogICBleGl0ZWQ6ICB7IG9wYWNpdHk6IDAgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAge3N0YXRlID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnRcbiAqIGJlZ2lucyB0aGUgXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb21cbiAqIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxuICogdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZSBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlXG4gKiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgKHdlJ2xsIHVzZSB0aGVcbiAqIFt1c2VTdGF0ZV0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXN0YXRlKSBob29rKTpcbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17NTAwfT5cbiAqICAgICAgICAge3N0YXRlID0+IChcbiAqICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgKX1cbiAqICAgICAgIDwvVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGVcbiAqIGFuZCBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXNcbiAqIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tXG4gKiBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICovXG5cbnZhciBUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0OyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG4gIDtcblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyOyAvLyBUT0RPOiByZW1vdmUgZmFsbGJhY2sgZm9yIG5leHQgbWFqb3JcblxuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXIgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQuYXBwZWFyIDogZW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC5pc01vdW50aW5nIDogbW91bnRpbmc7XG5cbiAgICB2YXIgX3JlZjIgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyBbYXBwZWFyaW5nXSA6IFtSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSwgYXBwZWFyaW5nXSxcbiAgICAgICAgbWF5YmVOb2RlID0gX3JlZjJbMF0sXG4gICAgICAgIG1heWJlQXBwZWFyaW5nID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG4gICAgdmFyIGVudGVyVGltZW91dCA9IGFwcGVhcmluZyA/IHRpbWVvdXRzLmFwcGVhciA6IHRpbWVvdXRzLmVudGVyOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyIHx8IGNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChlbnRlclRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBtYXliZU5vZGUgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyB1bmRlZmluZWQgOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG1heWJlTm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChtYXliZU5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobWF5YmVOb2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZCh0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobWF5YmVOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcbiAgICB2YXIgbm9kZSA9IHRoaXMucHJvcHMubm9kZVJlZiA/IHRoaXMucHJvcHMubm9kZVJlZi5jdXJyZW50IDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIgPSB0aW1lb3V0ID09IG51bGwgJiYgIXRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXI7XG5cbiAgICBpZiAoIW5vZGUgfHwgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lcikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgIHZhciBfcmVmMyA9IHRoaXMucHJvcHMubm9kZVJlZiA/IFt0aGlzLm5leHRDYWxsYmFja10gOiBbbm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2tdLFxuICAgICAgICAgIG1heWJlTm9kZSA9IF9yZWYzWzBdLFxuICAgICAgICAgIG1heWJlTmV4dENhbGxiYWNrID0gX3JlZjNbMV07XG5cbiAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobWF5YmVOb2RlLCBtYXliZU5leHRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBfaW4gPSBfdGhpcyRwcm9wcy5pbixcbiAgICAgICAgX21vdW50T25FbnRlciA9IF90aGlzJHByb3BzLm1vdW50T25FbnRlcixcbiAgICAgICAgX3VubW91bnRPbkV4aXQgPSBfdGhpcyRwcm9wcy51bm1vdW50T25FeGl0LFxuICAgICAgICBfYXBwZWFyID0gX3RoaXMkcHJvcHMuYXBwZWFyLFxuICAgICAgICBfZW50ZXIgPSBfdGhpcyRwcm9wcy5lbnRlcixcbiAgICAgICAgX2V4aXQgPSBfdGhpcyRwcm9wcy5leGl0LFxuICAgICAgICBfdGltZW91dCA9IF90aGlzJHByb3BzLnRpbWVvdXQsXG4gICAgICAgIF9hZGRFbmRMaXN0ZW5lciA9IF90aGlzJHByb3BzLmFkZEVuZExpc3RlbmVyLFxuICAgICAgICBfb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXIsXG4gICAgICAgIF9vbkVudGVyaW5nID0gX3RoaXMkcHJvcHMub25FbnRlcmluZyxcbiAgICAgICAgX29uRW50ZXJlZCA9IF90aGlzJHByb3BzLm9uRW50ZXJlZCxcbiAgICAgICAgX29uRXhpdCA9IF90aGlzJHByb3BzLm9uRXhpdCxcbiAgICAgICAgX29uRXhpdGluZyA9IF90aGlzJHByb3BzLm9uRXhpdGluZyxcbiAgICAgICAgX29uRXhpdGVkID0gX3RoaXMkcHJvcHMub25FeGl0ZWQsXG4gICAgICAgIF9ub2RlUmVmID0gX3RoaXMkcHJvcHMubm9kZVJlZixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluXCIsIFwibW91bnRPbkVudGVyXCIsIFwidW5tb3VudE9uRXhpdFwiLCBcImFwcGVhclwiLCBcImVudGVyXCIsIFwiZXhpdFwiLCBcInRpbWVvdXRcIiwgXCJhZGRFbmRMaXN0ZW5lclwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FbnRlcmVkXCIsIFwib25FeGl0XCIsIFwib25FeGl0aW5nXCIsIFwib25FeGl0ZWRcIiwgXCJub2RlUmVmXCJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpIDogUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pLCBjaGlsZFByb3BzKSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlID0gVHJhbnNpdGlvbkdyb3VwQ29udGV4dDtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBSZWFjdCByZWZlcmVuY2UgdG8gRE9NIGVsZW1lbnQgdGhhdCBuZWVkIHRvIHRyYW5zaXRpb246XG4gICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTEyNzEzMC80NjcxOTMyXG4gICAqXG4gICAqICAgLSBXaGVuIGBub2RlUmVmYCBwcm9wIGlzIHVzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgKiAgICAgIChlLmcuIGBvbkVudGVyYCkgYmVjYXVzZSB1c2VyIGFscmVhZHkgaGFzIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIG5vZGUuXG4gICAqICAgLSBXaGVuIGNoYW5naW5nIGBrZXlgIHByb3Agb2YgYFRyYW5zaXRpb25gIGluIGEgYFRyYW5zaXRpb25Hcm91cGAgYSBuZXdcbiAgICogICAgIGBub2RlUmVmYCBuZWVkIHRvIGJlIHByb3ZpZGVkIHRvIGBUcmFuc2l0aW9uYCB3aXRoIGNoYW5nZWQgYGtleWAgcHJvcFxuICAgKiAgICAgKHNlZVxuICAgKiAgICAgW3Rlc3QvQ1NTVHJhbnNpdGlvbi10ZXN0LmpzXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvMTM0MzVmODk3YjNhYjcxZjZlMTlkNzI0ZjE0NTU5NmY1OTEwNTgxYy90ZXN0L0NTU1RyYW5zaXRpb24tdGVzdC5qcyNMMzYyLUw0MzcpKS5cbiAgICovXG4gIG5vZGVSZWY6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gUHJvcFR5cGVzLmFueSA6IGZ1bmN0aW9uIChwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgdmFsdWUgPSBwcm9wVmFsdWVba2V5XTtcbiAgICAgIHJldHVybiBQcm9wVHlwZXMuaW5zdGFuY2VPZih2YWx1ZSAmJiAnb3duZXJEb2N1bWVudCcgaW4gdmFsdWUgPyB2YWx1ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LkVsZW1lbnQgOiBFbGVtZW50KShwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KTtcbiAgICB9XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gaXNcbiAgICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXMgKGAnZW50ZXJpbmcnYCwgYCdlbnRlcmVkJ2AsXG4gICAqIGAnZXhpdGluZydgLCBgJ2V4aXRlZCdgKSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgY29udGV4dFxuICAgKiBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHtzdGF0ZSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdGV9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGRvZXMgbm90IHBlcmZvcm0gdGhlIGVudGVyIHRyYW5zaXRpb24gd2hlblxuICAgKiBpdCBmaXJzdCBtb3VudHMsIHJlZ2FyZGxlc3Mgb2YgdGhlIHZhbHVlIG9mIGBpbmAuIElmIHlvdSB3YW50IHRoaXNcbiAgICogYmVoYXZpb3IsIHNldCBib3RoIGBhcHBlYXJgIGFuZCBgaW5gIHRvIGB0cnVlYC5cbiAgICpcbiAgICogPiAqKk5vdGUqKjogdGhlcmUgYXJlIG5vIHNwZWNpYWwgYXBwZWFyIHN0YXRlcyBsaWtlIGBhcHBlYXJpbmdgL2BhcHBlYXJlZGAsIHRoaXMgcHJvcFxuICAgKiA+IG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGVudGVyIHRyYW5zaXRpb24uIEhvd2V2ZXIsIGluIHRoZVxuICAgKiA+IGA8Q1NTVHJhbnNpdGlvbj5gIGNvbXBvbmVudCB0aGF0IGZpcnN0IGVudGVyIHRyYW5zaXRpb24gZG9lcyByZXN1bHQgaW5cbiAgICogPiBhZGRpdGlvbmFsIGAuYXBwZWFyLSpgIGNsYXNzZXMsIHRoYXQgd2F5IHlvdSBjYW4gY2hvb3NlIHRvIHN0eWxlIGl0XG4gICAqID4gZGlmZmVyZW50bHkuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWQuXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnM6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXs1MDB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBvciBpbmRpdmlkdWFsbHk6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBhcHBlYXI6IDUwMCxcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiAtIGBhcHBlYXJgIGRlZmF1bHRzIHRvIHRoZSB2YWx1ZSBvZiBgZW50ZXJgXG4gICAqIC0gYGVudGVyYCBkZWZhdWx0cyB0byBgMGBcbiAgICogLSBgZXhpdGAgZGVmYXVsdHMgdG8gYDBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyLCBhcHBlYXI/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSB0aW1lb3V0c1NoYXBlO1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59IDoge307IC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IFVOTU9VTlRFRDtcblRyYW5zaXRpb24uRVhJVEVEID0gRVhJVEVEO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IEVOVEVSSU5HO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gRU5URVJFRDtcblRyYW5zaXRpb24uRVhJVElORyA9IEVYSVRJTkc7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uOyIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcFR5cGUoaGFuZGxlciwgbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm9wc1toYW5kbGVyXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiWW91IGhhdmUgcHJvdmlkZWQgYSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIHRvIGBcIiArIG5hbWUgKyBcImAgXCIgKyAoXCJ3aXRob3V0IGFuIGBcIiArIGhhbmRsZXIgKyBcImAgaGFuZGxlciBwcm9wLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBcIikgKyAoXCJJZiB0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBcIiArIGRlZmF1bHRLZXkocHJvcE5hbWUpICsgXCJgLiBcIikgKyAoXCJPdGhlcndpc2UsIHNldCBgXCIgKyBoYW5kbGVyICsgXCJgLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jb250cm9sbGVkUHJvcFR5cGVzKGNvbnRyb2xsZWRWYWx1ZXMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBwcm9wVHlwZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoY29udHJvbGxlZFZhbHVlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BUeXBlcyBmb3IgZm9sa3MgdGhhdCB1c2UgcnVudGltZSBjaGVja3NcbiAgICBwcm9wVHlwZXNbZGVmYXVsdEtleShwcm9wKV0gPSBub29wO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gY29udHJvbGxlZFZhbHVlc1twcm9wXTtcbiAgICAgICEodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnICYmIGhhbmRsZXIudHJpbSgpLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdVbmNvbnRyb2xsYWJsZSAtIFslc106IHRoZSBwcm9wIGAlc2AgbmVlZHMgYSB2YWxpZCBoYW5kbGVyIGtleSBuYW1lIGluIG9yZGVyIHRvIG1ha2UgaXQgdW5jb250cm9sbGFibGUnLCBkaXNwbGF5TmFtZSwgcHJvcCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcHJvcFR5cGVzW3Byb3BdID0gcmVhZE9ubHlQcm9wVHlwZShoYW5kbGVyLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb3BUeXBlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3AocHJvcHMsIHByb3ApIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEtleShrZXkpIHtcbiAgcmV0dXJuICdkZWZhdWx0JyArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG59XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkFjY2VwdFJlZihjb21wb25lbnQpIHtcbiAgcmV0dXJuICEhY29tcG9uZW50ICYmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnZnVuY3Rpb24nIHx8IGNvbXBvbmVudC5wcm90b3R5cGUgJiYgY29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWRQcm9wKHByb3BWYWx1ZSwgZGVmYXVsdFZhbHVlLCBoYW5kbGVyKSB7XG4gIHZhciB3YXNQcm9wUmVmID0gdXNlUmVmKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKSxcbiAgICAgIHN0YXRlVmFsdWUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgaXNQcm9wID0gcHJvcFZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciB3YXNQcm9wID0gd2FzUHJvcFJlZi5jdXJyZW50O1xuICB3YXNQcm9wUmVmLmN1cnJlbnQgPSBpc1Byb3A7XG4gIC8qKlxuICAgKiBJZiBhIHByb3Agc3dpdGNoZXMgZnJvbSBjb250cm9sbGVkIHRvIFVuY29udHJvbGxlZFxuICAgKiByZXNldCBpdHMgdmFsdWUgdG8gdGhlIGRlZmF1bHRWYWx1ZVxuICAgKi9cblxuICBpZiAoIWlzUHJvcCAmJiB3YXNQcm9wICYmIHN0YXRlVmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xuICAgIHNldFN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gW2lzUHJvcCA/IHByb3BWYWx1ZSA6IHN0YXRlVmFsdWUsIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyKSBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgW3ZhbHVlXS5jb25jYXQoYXJncykpO1xuICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgfSwgW2hhbmRsZXJdKV07XG59XG5cbmV4cG9ydCB7IHVzZVVuY29udHJvbGxlZFByb3AgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVuY29udHJvbGxlZChwcm9wcywgY29uZmlnKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBmaWVsZE5hbWUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYgPSByZXN1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWZbVXRpbHMuZGVmYXVsdEtleShmaWVsZE5hbWUpXSxcbiAgICAgICAgcHJvcHNWYWx1ZSA9IF9yZWZbZmllbGROYW1lXSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtVdGlscy5kZWZhdWx0S2V5KGZpZWxkTmFtZSksIGZpZWxkTmFtZV0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICB2YXIgaGFuZGxlck5hbWUgPSBjb25maWdbZmllbGROYW1lXTtcblxuICAgIHZhciBfdXNlVW5jb250cm9sbGVkUHJvcCA9IHVzZVVuY29udHJvbGxlZFByb3AocHJvcHNWYWx1ZSwgZGVmYXVsdFZhbHVlLCBwcm9wc1toYW5kbGVyTmFtZV0pLFxuICAgICAgICB2YWx1ZSA9IF91c2VVbmNvbnRyb2xsZWRQcm9wWzBdLFxuICAgICAgICBoYW5kbGVyID0gX3VzZVVuY29udHJvbGxlZFByb3BbMV07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2ZpZWxkTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyW2hhbmRsZXJOYW1lXSA9IGhhbmRsZXIsIF9leHRlbmRzMikpO1xuICB9LCBwcm9wcyk7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG52YXIgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvanF1ZW5zZS9zcmMvdW5jb250cm9sbGFibGUvc3JjL3VuY29udHJvbGxhYmxlLmpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuY29udHJvbGxhYmxlKENvbXBvbmVudCwgY29udHJvbGxlZFZhbHVlcywgbWV0aG9kcykge1xuICBpZiAobWV0aG9kcyA9PT0gdm9pZCAwKSB7XG4gICAgbWV0aG9kcyA9IFtdO1xuICB9XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICB2YXIgY2FuQWNjZXB0UmVmID0gVXRpbHMuY2FuQWNjZXB0UmVmKENvbXBvbmVudCk7XG4gIHZhciBjb250cm9sbGVkUHJvcHMgPSBPYmplY3Qua2V5cyhjb250cm9sbGVkVmFsdWVzKTtcbiAgdmFyIFBST1BTX1RPX09NSVQgPSBjb250cm9sbGVkUHJvcHMubWFwKFV0aWxzLmRlZmF1bHRLZXkpO1xuICAhKGNhbkFjY2VwdFJlZiB8fCAhbWV0aG9kcy5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnW3VuY29udHJvbGxhYmxlXSBzdGF0ZWxlc3MgZnVuY3Rpb24gY29tcG9uZW50cyBjYW5ub3QgcGFzcyB0aHJvdWdoIG1ldGhvZHMgJyArICdiZWNhdXNlIHRoZXkgaGF2ZSBubyBhc3NvY2lhdGVkIGluc3RhbmNlcy4gQ2hlY2sgY29tcG9uZW50OiAnICsgZGlzcGxheU5hbWUgKyAnLCAnICsgJ2F0dGVtcHRpbmcgdG8gcGFzcyB0aHJvdWdoIG1ldGhvZHM6ICcgKyBtZXRob2RzLmpvaW4oJywgJykpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgVW5jb250cm9sbGVkQ29tcG9uZW50ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb21wb25lbnQoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuaGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGNvbnRyb2xsZWRWYWx1ZXNbcHJvcE5hbWVdO1xuXG4gICAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHNbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcylbaGFuZGxlck5hbWVdLmFwcGx5KF90aGlzJHByb3BzLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzLnVubW91bnRlZCkgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltwcm9wTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlcnNbaGFuZGxlck5hbWVdID0gaGFuZGxlQ2hhbmdlO1xuICAgICAgfSk7XG4gICAgICBpZiAobWV0aG9kcy5sZW5ndGgpIF90aGlzLmF0dGFjaFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgX3RoaXMuaW5uZXIgPSByZWY7XG4gICAgICB9O1xuICAgICAgdmFyIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhbHVlc1trZXldID0gX3RoaXMucHJvcHNbVXRpbHMuZGVmYXVsdEtleShrZXkpXTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICBwcmV2UHJvcHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgIC8vbGV0IHNldFN0YXRlIHRyaWdnZXIgdGhlIHVwZGF0ZVxuICAgICAgcmV0dXJuICF0aGlzLl9ub3RpZnlpbmc7XG4gICAgfTtcblxuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgdmFsdWVzID0gX3JlZjIudmFsdWVzLFxuICAgICAgICAgIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcztcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzKSxcbiAgICAgICAgcHJldlByb3BzOiB7fVxuICAgICAgfTtcbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgcHJvcCBzd2l0Y2hlcyBmcm9tIGNvbnRyb2xsZWQgdG8gVW5jb250cm9sbGVkXG4gICAgICAgICAqIHJlc2V0IGl0cyB2YWx1ZSB0byB0aGUgZGVmYXVsdFZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0U3RhdGUucHJldlByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuXG4gICAgICAgIGlmICghVXRpbHMuaXNQcm9wKHByb3BzLCBrZXkpICYmIFV0aWxzLmlzUHJvcChwcmV2UHJvcHMsIGtleSkpIHtcbiAgICAgICAgICBuZXh0U3RhdGUudmFsdWVzW2tleV0gPSBwcm9wc1tVdGlscy5kZWZhdWx0S2V5KGtleSldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bm1vdW50ZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIFBST1BTX1RPX09NSVQuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBfdGhpczIucHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICBuZXdQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BWYWx1ZSA6IF90aGlzMi5zdGF0ZS52YWx1ZXNbcHJvcE5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgbmV3UHJvcHMsIHRoaXMuaGFuZGxlcnMsIHtcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCB0aGlzLmF0dGFjaFJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVW5jb250cm9sbGVkQ29tcG9uZW50O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgcG9seWZpbGwoVW5jb250cm9sbGVkQ29tcG9uZW50KTtcbiAgVW5jb250cm9sbGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJVbmNvbnRyb2xsZWQoXCIgKyBkaXNwbGF5TmFtZSArIFwiKVwiO1xuICBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvcFR5cGVzID0gX2V4dGVuZHMoe1xuICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZigpIHt9XG4gIH0sIFV0aWxzLnVuY29udHJvbGxlZFByb3BUeXBlcyhjb250cm9sbGVkVmFsdWVzLCBkaXNwbGF5TmFtZSkpO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICRwcm94aWVkTWV0aG9kKCkge1xuICAgICAgdmFyIF90aGlzJGlubmVyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJGlubmVyID0gdGhpcy5pbm5lcilbbWV0aG9kXS5hcHBseShfdGhpcyRpbm5lciwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBVbmNvbnRyb2xsZWRDb21wb25lbnQ7XG5cbiAgaWYgKFJlYWN0LmZvcndhcmRSZWYpIHtcbiAgICBXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVW5jb250cm9sbGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOFxuICAgICAgICB9LFxuICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBXcmFwcGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IFVuY29udHJvbGxlZENvbXBvbmVudC5wcm9wVHlwZXM7XG4gIH1cblxuICBXcmFwcGVkQ29tcG9uZW50LkNvbnRyb2xsZWRDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gIC8qKlxuICAgKiB1c2VmdWwgd2hlbiB3cmFwcGluZyBhIENvbXBvbmVudCBhbmQgeW91IHdhbnQgdG8gY29udHJvbFxuICAgKiBldmVyeXRoaW5nXG4gICAqL1xuXG4gIFdyYXBwZWRDb21wb25lbnQuZGVmZXJDb250cm9sVG8gPSBmdW5jdGlvbiAobmV3Q29tcG9uZW50LCBhZGRpdGlvbnMsIG5leHRNZXRob2RzKSB7XG4gICAgaWYgKGFkZGl0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBhZGRpdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5jb250cm9sbGFibGUobmV3Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgY29udHJvbGxlZFZhbHVlcywgYWRkaXRpb25zKSwgbmV4dE1ldGhvZHMpO1xuICB9O1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVW5jb250cm9sbGVkLCB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAnLi9ob29rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5jb250cm9sbGFibGUgfSBmcm9tICcuL3VuY29udHJvbGxhYmxlJzsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgICByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7XG4gIH0pKG5vZGVJbnRlcm9wKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIE1EWENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgd2l0aE1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB3aXRoTURYQ29tcG9uZW50cyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudHM6IGFsbENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHVzZU1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgdmFyIGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KTtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSBjb250ZXh0Q29tcG9uZW50cztcblxuICBpZiAoY29tcG9uZW50cykge1xuICAgIGFsbENvbXBvbmVudHMgPSBpc0Z1bmN0aW9uKGNvbXBvbmVudHMpID8gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cykgOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGV4dENvbXBvbmVudHMpLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBhbGxDb21wb25lbnRzO1xufTtcbnZhciBNRFhQcm92aWRlciA9IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWxsQ29tcG9uZW50c1xuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG52YXIgVFlQRV9QUk9QX05BTUUgPSAnbWR4VHlwZSc7XG52YXIgREVGQVVMVFMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgd3JhcHBlcjogZnVuY3Rpb24gd3JhcHBlcihfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCBjaGlsZHJlbik7XG4gIH1cbn07XG52YXIgTURYQ3JlYXRlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcm9wQ29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBtZHhUeXBlID0gcHJvcHMubWR4VHlwZSxcbiAgICAgIG9yaWdpbmFsVHlwZSA9IHByb3BzLm9yaWdpbmFsVHlwZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgZXRjID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjb21wb25lbnRzXCIsIFwibWR4VHlwZVwiLCBcIm9yaWdpbmFsVHlwZVwiLCBcInBhcmVudE5hbWVcIl0pO1xuXG4gIHZhciBjb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wQ29tcG9uZW50cyk7XG4gIHZhciB0eXBlID0gbWR4VHlwZTtcbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudHNbXCJcIi5jb25jYXQocGFyZW50TmFtZSwgXCIuXCIpLmNvbmNhdCh0eXBlKV0gfHwgY29tcG9uZW50c1t0eXBlXSB8fCBERUZBVUxUU1t0eXBlXSB8fCBvcmlnaW5hbFR5cGU7XG5cbiAgaWYgKHByb3BDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBldGMpLCB7fSwge1xuICAgICAgY29tcG9uZW50czogcHJvcENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmVmOiByZWZcbiAgfSwgZXRjKSk7XG59KTtcbk1EWENyZWF0ZUVsZW1lbnQuZGlzcGxheU5hbWUgPSAnTURYQ3JlYXRlRWxlbWVudCc7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIG1keFR5cGUgPSBwcm9wcyAmJiBwcm9wcy5tZHhUeXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgbWR4VHlwZSkge1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBNRFhDcmVhdGVFbGVtZW50O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQcm9wcy5vcmlnaW5hbFR5cGUgPSB0eXBlO1xuICAgIG5ld1Byb3BzW1RZUEVfUFJPUF9OQU1FXSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgOiBtZHhUeXBlO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG5leHBvcnQgeyBNRFhDb250ZXh0LCBNRFhQcm92aWRlciwgY3JlYXRlRWxlbWVudCBhcyBtZHgsIHVzZU1EWENvbXBvbmVudHMsIHdpdGhNRFhDb21wb25lbnRzIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuQ29udGV4dCA9IGV4cG9ydHMuYWxsVmFsdWVzID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBhbGxWYWx1ZXMgPSBvYmogPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGtleXMubWFwKGsgPT4gb2JqW2tdKSkudGhlbih2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IG5leHQgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgIG5leHRba10gPSB2YWx1ZXNbaV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5hbGxWYWx1ZXMgPSBhbGxWYWx1ZXM7XG5cbmNvbnN0IENvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuXG5cbmV4cG9ydHMuQ29udGV4dCA9IENvbnRleHQ7XG5cbnZhciBfZGVmYXVsdCA9ICh7XG4gIGltcG9ydHMsXG4gIGNoaWxkcmVuXG59KSA9PiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gIHZhbHVlOiBpbXBvcnRzXG59LCBjaGlsZHJlbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3Jlc2V0JyB8ICdzdWJtaXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuY2hvck9wdGlvbnMge1xuICBocmVmPzogc3RyaW5nO1xuICByZWw/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VCdXR0b25Qcm9wc09wdGlvbnMgZXh0ZW5kcyBBbmNob3JPcHRpb25zIHtcbiAgdHlwZT86IEJ1dHRvblR5cGU7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljaz86IFJlYWN0LkV2ZW50SGFuZGxlcjxSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudD47XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICB0YWdOYW1lPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcml2aWFsSHJlZihocmVmPzogc3RyaW5nKSB7XG4gIHJldHVybiAhaHJlZiB8fCBocmVmLnRyaW0oKSA9PT0gJyMnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFyaWFCdXR0b25Qcm9wcyB7XG4gIHR5cGU/OiBCdXR0b25UeXBlIHwgdW5kZWZpbmVkO1xuICBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcm9sZT86ICdidXR0b24nO1xuICB0YWJJbmRleD86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICByZWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICdhcmlhLWRpc2FibGVkJz86IHRydWUgfCB1bmRlZmluZWQ7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQnV0dG9uUHJvcHNNZXRhZGF0YSB7XG4gIHRhZ05hbWU6IFJlYWN0LkVsZW1lbnRUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uUHJvcHMoe1xuICB0YWdOYW1lLFxuICBkaXNhYmxlZCxcbiAgaHJlZixcbiAgdGFyZ2V0LFxuICByZWwsXG4gIG9uQ2xpY2ssXG4gIHRhYkluZGV4ID0gMCxcbiAgdHlwZSxcbn06IFVzZUJ1dHRvblByb3BzT3B0aW9ucyk6IFtBcmlhQnV0dG9uUHJvcHMsIFVzZUJ1dHRvblByb3BzTWV0YWRhdGFdIHtcbiAgaWYgKCF0YWdOYW1lKSB7XG4gICAgaWYgKGhyZWYgIT0gbnVsbCB8fCB0YXJnZXQgIT0gbnVsbCB8fCByZWwgIT0gbnVsbCkge1xuICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnTmFtZSA9ICdidXR0b24nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGE6IFVzZUJ1dHRvblByb3BzTWV0YWRhdGEgPSB7IHRhZ05hbWUgfTtcbiAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgcmV0dXJuIFt7IHR5cGU6ICh0eXBlIGFzIGFueSkgfHwgJ2J1dHRvbicsIGRpc2FibGVkIH0sIG1ldGFdO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IGlzVHJpdmlhbEhyZWYoaHJlZikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNsaWNrPy4oZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAvLyBleHBsaWNpdGx5IHVuZGVmaW5lZCBzbyB0aGF0IGl0IG92ZXJyaWRlcyB0aGUgcHJvcHMgZGlzYWJsZWQgaW4gYSBzcHJlYWRcbiAgICAgIC8vIGUuZy4gPFRhZyB7Li4ucHJvcHN9IHsuLi5ob29rUHJvcHN9IC8+XG4gICAgICBkaXNhYmxlZDogdW5kZWZpbmVkLFxuICAgICAgdGFiSW5kZXg6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGFiSW5kZXgsXG4gICAgICBocmVmOiB0YWdOYW1lID09PSAnYScgJiYgZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBocmVmLFxuICAgICAgdGFyZ2V0OiB0YWdOYW1lID09PSAnYScgPyB0YXJnZXQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6ICFkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGRpc2FibGVkLFxuICAgICAgcmVsOiB0YWdOYW1lID09PSAnYScgPyByZWwgOiB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICB9LFxuICAgIG1ldGEsXG4gIF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUJ1dHRvblByb3BzIHtcbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIHVuZGVybHlpbmcgcmVuZGVyZWQgZWxlbWVudCBkaXJlY3RseSBieSBwYXNzaW5nIGluIGEgdmFsaWRcbiAgICogY29tcG9uZW50IHR5cGVcbiAgICovXG4gIGFzPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBUaGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGJ1dHRvbiAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqIE9wdGlvbmFsbHkgc3BlY2lmeSBhbiBocmVmIHRvIHJlbmRlciBhIGA8YT5gIHRhZyBzdHlsZWQgYXMgYSBidXR0b24gKi9cbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKiogQW5jaG9yIHRhcmdldCwgd2hlbiByZW5kZXJpbmcgYW4gYW5jaG9yIGFzIGEgYnV0dG9uICovXG4gIHRhcmdldD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICByZWw/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHNcbiAgZXh0ZW5kcyBCYXNlQnV0dG9uUHJvcHMsXG4gICAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdidXR0b24nPiB7fVxuXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBCdXR0b25Qcm9wcz4oXG4gICh7IGFzOiBhc1Byb3AsIGRpc2FibGVkLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbYnV0dG9uUHJvcHMsIHsgdGFnTmFtZTogQ29tcG9uZW50IH1dID0gdXNlQnV0dG9uUHJvcHMoe1xuICAgICAgdGFnTmFtZTogYXNQcm9wLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wcm9wcyxcbiAgICB9KTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLmJ1dHRvblByb3BzfSByZWY9e3JlZn0gLz47XG4gIH0sXG4pO1xuXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9QUkVGSVggPSBgZGF0YS1yci11aS1gIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUFJPUEVSVFlfUFJFRklYID0gYHJyVWlgIGFzIGNvbnN0O1xuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF0dHI8VCBleHRlbmRzIHN0cmluZz4ocHJvcGVydHk6IFQpIHtcbiAgcmV0dXJuIGAke0FUVFJJQlVURV9QUkVGSVh9JHtwcm9wZXJ0eX1gIGFzIGNvbnN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YVByb3A8VCBleHRlbmRzIHN0cmluZz4ocHJvcGVydHk6IFQpIHtcbiAgcmV0dXJuIGAke1BST1BFUlRZX1BSRUZJWH0ke3Byb3BlcnR5fWAgYXMgY29uc3Q7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgb3V0c2lkZSBkaXJlY3RseSB0byBzcGVjaWZpZWQgRE9NIGVsZW1lbnRcbiAqIGJ5cGFzc2luZyB0aGUgcmVhY3Qgc3ludGhldGljIGV2ZW50IHN5c3RlbS5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgdGFyZ2V0IHRvIGxpc3RlbiBmb3IgZXZlbnRzIG9uXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICBpZiAoY2FwdHVyZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FwdHVyZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGxpc3RlbmVyKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGV2ZW50VGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gZXZlbnRUYXJnZXQoKSA6IGV2ZW50VGFyZ2V0O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICB9O1xuICB9LCBbZXZlbnRUYXJnZXRdKTtcbn0iLCJpbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHRoZSBgZG9jdW1lbnRgLFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIGBgYHRzXG4gKiB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICogIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdsb2JhbExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRUYXJnZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9LCBbXSk7XG4gIHJldHVybiB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50VGFyZ2V0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG59IiwiaW1wb3J0IHFzYSBmcm9tICdkb20taGVscGVycy9xdWVyeVNlbGVjdG9yQWxsJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ2RvbS1oZWxwZXJzL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZUdsb2JhbExpc3RlbmVyIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUdsb2JhbExpc3RlbmVyJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgRHJvcGRvd25Db250ZXh0IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcbmltcG9ydCBEcm9wZG93bk1lbnUsIHtcbiAgRHJvcGRvd25NZW51UHJvcHMsXG4gIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhLFxuICBVc2VEcm9wZG93bk1lbnVPcHRpb25zLFxufSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgRHJvcGRvd25Ub2dnbGUsIHtcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgaXNSb2xlTWVudSxcbn0gZnJvbSAnLi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtLCB7IERyb3Bkb3duSXRlbVByb3BzIH0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vdXNlUG9wcGVyJztcblxuZXhwb3J0IHR5cGUge1xuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG4gIERyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gIERyb3Bkb3duSXRlbVByb3BzLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bkluamVjdGVkUHJvcHMge1xuICBvbktleURvd246IFJlYWN0LktleWJvYXJkRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgdHlwZSBUb2dnbGVFdmVudCA9IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlTWV0YWRhdGEge1xuICBzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JpZ2luYWxFdmVudDogVG9nZ2xlRXZlbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgUG9wcGVySlMgcGxhY2VtZW50IGZvciBwb3NpdGlvbmluZyB0aGUgRHJvcGRvd24gbWVudSBpbiByZWxhdGlvbiB0b1xuICAgKiBpdHMgVG9nZ2xlLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnYm90dG9tLXN0YXJ0J1xuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbml0aWFsIHZpc2liaWxpdHkgb2YgdGhlIERyb3Bkb3duLlxuICAgKi9cbiAgZGVmYXVsdFNob3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgRHJvcGRvd24gaXMgdmlzaWJsZS5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBvblRvZ2dsZVxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIERyb3Bkb3duSXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICovXG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgRHJvcGRvd24gd2lzaGVzIHRvIGNoYW5nZSB2aXNpYmlsaXR5LiBDYWxsZWQgd2l0aFxuICAgKiB0aGUgcmVxdWVzdGVkIGBzaG93YCB2YWx1ZSwgdGhlIERPTSBldmVudCwgYW5kIHRoZSBzb3VyY2UgdGhhdCBmaXJlZCBpdDpcbiAgICogYCdjbGljaydgLGAna2V5ZG93bidgLGAncm9vdENsb3NlJ2AsIG9yIGAnc2VsZWN0J2AuXG4gICAqXG4gICAqIGBgYHRzIHN0YXRpY1xuICAgKiBmdW5jdGlvbihcbiAgICogICBuZXh0U2hvdzogYm9vbGVhbixcbiAgICogICBtZXRhOiBUb2dnbGVNZXRhZGF0YSxcbiAgICogKTogdm9pZFxuICAgKiBgYGBcbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBzaG93XG4gICAqL1xuICBvblRvZ2dsZT86IChuZXh0U2hvdzogYm9vbGVhbiwgbWV0YTogVG9nZ2xlTWV0YWRhdGEpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgY3NzIHNlbGVjdG9yIHN0cmluZyB0aGF0IHdpbGwgcmV0dXJuIF9fZm9jdXNhYmxlX18gbWVudSBpdGVtcy5cbiAgICogU2VsZWN0b3JzIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgbWVudSBjb21wb25lbnQ6XG4gICAqIGUuZy4gYCA+IGxpOm5vdCgnLmRpc2FibGVkJylgXG4gICAqL1xuICBpdGVtU2VsZWN0b3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBmb2N1cyBiZWhhdmlvciBmb3Igd2hlbiB0aGUgRHJvcGRvd24gaXMgb3BlbmVkLiBTZXQgdG9cbiAgICogYHRydWVgIHRvIGFsd2F5cyBmb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtLCBga2V5Ym9hcmRgIHRvIGZvY3VzIG9ubHkgd2hlblxuICAgKiBuYXZpZ2F0aW5nIHZpYSB0aGUga2V5Ym9hcmQsIG9yIGBmYWxzZWAgdG8gZGlzYWJsZSBjb21wbGV0ZWx5XG4gICAqXG4gICAqIFRoZSBEZWZhdWx0IGJlaGF2aW9yIGlzIGBmYWxzZWAgKip1bmxlc3MqKiB0aGUgTWVudSBoYXMgYSBgcm9sZT1cIm1lbnVcImBcbiAgICogd2hlcmUgaXQgd2lsbCBkZWZhdWx0IHRvIGBrZXlib2FyZGAgdG8gbWF0Y2ggdGhlIHJlY29tbWVuZGVkIFtBUklBIEF1dGhvcmluZ1xuICAgKiBwcmFjdGljZXNdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xLyNtZW51YnV0dG9uKS5cbiAgICovXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93PzogYm9vbGVhbiB8ICdrZXlib2FyZCc7XG5cbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIHRoZSByb290IGRyb3Bkb3duIGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byBhbiBlbGVtZW50IGNvbnRhaW5pbmcgX2JvdGhfIHRoZVxuICAgKiBtZW51IGFuZCB0b2dnbGUgaW4gb3JkZXIgdG8gaGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgZm9jdXMgbWFuYWdlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIG9uS2V5RG93bjogKFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWZXaXRoVXBkYXRlKCkge1xuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdHRhY2hSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWxlbWVudDogbnVsbCB8IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICByZWYuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAvLyBlbnN1cmUgdGhhdCBhIG1lbnUgc2V0IHRyaWdnZXJzIGFuIHVwZGF0ZSBmb3IgY29uc3VtZXJzXG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH0sXG4gICAgW2ZvcmNlVXBkYXRlXSxcbiAgKTtcbiAgcmV0dXJuIFtyZWYsIGF0dGFjaFJlZl0gYXMgY29uc3Q7XG59XG5cbi8qKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duKHtcbiAgZGVmYXVsdFNob3csXG4gIHNob3c6IHJhd1Nob3csXG4gIG9uU2VsZWN0LFxuICBvblRvZ2dsZTogcmF3T25Ub2dnbGUsXG4gIGl0ZW1TZWxlY3RvciA9IGAqIFske2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyl9XWAsXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93LFxuICBwbGFjZW1lbnQgPSAnYm90dG9tLXN0YXJ0JyxcbiAgY2hpbGRyZW4sXG59OiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IFtzaG93LCBvblRvZ2dsZV0gPSB1c2VVbmNvbnRyb2xsZWRQcm9wKFxuICAgIHJhd1Nob3csXG4gICAgZGVmYXVsdFNob3chLFxuICAgIHJhd09uVG9nZ2xlLFxuICApO1xuXG4gIC8vIFdlIHVzZSBub3JtYWwgcmVmcyBpbnN0ZWFkIG9mIHVzZUNhbGxiYWNrUmVmIGluIG9yZGVyIHRvIHBvcHVsYXRlIHRoZVxuICAvLyB0aGUgdmFsdWUgYXMgcXVpY2tseSBhcyBwb3NzaWJsZSwgb3RoZXJ3aXNlIHRoZSBlZmZlY3QgdG8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgLy8gbWF5IHJ1biBiZWZvcmUgdGhlIHN0YXRlIHZhbHVlIGlzIHNldFxuICBjb25zdCBbbWVudVJlZiwgc2V0TWVudV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IG1lbnVFbGVtZW50ID0gbWVudVJlZi5jdXJyZW50O1xuXG4gIGNvbnN0IFt0b2dnbGVSZWYsIHNldFRvZ2dsZV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSB0b2dnbGVSZWYuY3VycmVudDtcblxuICBjb25zdCBsYXN0U2hvdyA9IHVzZVByZXZpb3VzKHNob3cpO1xuICBjb25zdCBsYXN0U291cmNlRXZlbnQgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZvY3VzSW5Ecm9wZG93biA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uU2VsZWN0Q3R4ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG5cbiAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgbmV4dFNob3c6IGJvb2xlYW4sXG4gICAgICBldmVudDogVG9nZ2xlRXZlbnQgfCB1bmRlZmluZWQsXG4gICAgICBzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGV2ZW50Py50eXBlLFxuICAgICkgPT4ge1xuICAgICAgb25Ub2dnbGUobmV4dFNob3csIHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHNvdXJjZSB9KTtcbiAgICB9LFxuICAgIFtvblRvZ2dsZV0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlRXZlbnRDYWxsYmFjayhcbiAgICAoa2V5OiBzdHJpbmcgfCBudWxsLCBldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgICB0b2dnbGUoZmFsc2UsIGV2ZW50LCAnc2VsZWN0Jyk7XG5cbiAgICAgIGlmICghZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICBvblNlbGVjdEN0eD8uKGtleSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHRvZ2dsZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHNob3csXG4gICAgICBtZW51RWxlbWVudCxcbiAgICAgIHRvZ2dsZUVsZW1lbnQsXG4gICAgICBzZXRNZW51LFxuICAgICAgc2V0VG9nZ2xlLFxuICAgIH0pLFxuICAgIFt0b2dnbGUsIHBsYWNlbWVudCwgc2hvdywgbWVudUVsZW1lbnQsIHRvZ2dsZUVsZW1lbnQsIHNldE1lbnUsIHNldFRvZ2dsZV0sXG4gICk7XG5cbiAgaWYgKG1lbnVFbGVtZW50ICYmIGxhc3RTaG93ICYmICFzaG93KSB7XG4gICAgZm9jdXNJbkRyb3Bkb3duLmN1cnJlbnQgPSBtZW51RWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGZvY3VzVG9nZ2xlID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHRvZ2dsZUVsZW1lbnQgJiYgdG9nZ2xlRWxlbWVudC5mb2N1cykge1xuICAgICAgdG9nZ2xlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWF5YmVGb2N1c0ZpcnN0ID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGxhc3RTb3VyY2VFdmVudC5jdXJyZW50O1xuICAgIGxldCBmb2N1c1R5cGUgPSBmb2N1c0ZpcnN0SXRlbU9uU2hvdztcblxuICAgIGlmIChmb2N1c1R5cGUgPT0gbnVsbCkge1xuICAgICAgZm9jdXNUeXBlID1cbiAgICAgICAgbWVudVJlZi5jdXJyZW50ICYmIGlzUm9sZU1lbnUobWVudVJlZi5jdXJyZW50KSA/ICdrZXlib2FyZCcgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBmb2N1c1R5cGUgPT09IGZhbHNlIHx8XG4gICAgICAoZm9jdXNUeXBlID09PSAna2V5Ym9hcmQnICYmICEvXmtleS4rJC8udGVzdCh0eXBlISkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3QgPSBxc2EobWVudVJlZi5jdXJyZW50ISwgaXRlbVNlbGVjdG9yKVswXTtcbiAgICBpZiAoZmlyc3QgJiYgZmlyc3QuZm9jdXMpIGZpcnN0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3cpIG1heWJlRm9jdXNGaXJzdCgpO1xuICAgIGVsc2UgaWYgKGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50KSB7XG4gICAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgZm9jdXNUb2dnbGUoKTtcbiAgICB9XG4gICAgLy8gb25seSBgc2hvd2Agc2hvdWxkIGJlIGNoYW5naW5nXG4gIH0sIFtzaG93LCBmb2N1c0luRHJvcGRvd24sIGZvY3VzVG9nZ2xlLCBtYXliZUZvY3VzRmlyc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhc3RTb3VyY2VFdmVudC5jdXJyZW50ID0gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0TmV4dEZvY3VzZWRDaGlsZCA9IChjdXJyZW50OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW1lbnVSZWYuY3VycmVudCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpdGVtcyA9IHFzYShtZW51UmVmLmN1cnJlbnQsIGl0ZW1TZWxlY3Rvcik7XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGN1cnJlbnQpICsgb2Zmc2V0O1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGl0ZW1zLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zW2luZGV4XTtcbiAgfTtcblxuICB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBmcm9tTWVudSA9IG1lbnVSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KTtcbiAgICBjb25zdCBmcm9tVG9nZ2xlID0gdG9nZ2xlUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICAvLyBTZWNvbmQgb25seSB0byBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi84Y2ZiZjY5MzNiOGEwMTQ2YWMzZmJjMzY5ZjE5ZTUyMGJkMWViZGFjL2pzL3NyYy9kcm9wZG93bi5qcyNMNDAwXG4gICAgLy8gaW4gaW5zY3J1dGFiaWxpdHlcbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSk7XG4gICAgaWYgKGlzSW5wdXQgJiYgKGtleSA9PT0gJyAnIHx8IChrZXkgIT09ICdFc2NhcGUnICYmIGZyb21NZW51KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWZyb21NZW51ICYmICFmcm9tVG9nZ2xlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ1RhYicgJiYgKCFtZW51UmVmLmN1cnJlbnQgfHwgIXNob3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBldmVudC50eXBlO1xuICAgIGNvbnN0IG1ldGEgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBzb3VyY2U6IGV2ZW50LnR5cGUgfTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGdldE5leHRGb2N1c2VkQ2hpbGQodGFyZ2V0LCAtMSk7XG4gICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICBvblRvZ2dsZSh0cnVlLCBtZXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIDEpO1xuICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICAvLyBvbiBrZXlkb3duIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFiYmVkIEZST00sIHdlIG5lZWQgdGhhdFxuICAgICAgICAvLyB0byBrbm93IGlmIHRoaXMgZXZlbnQgaXMgcmVsZXZhbnQgdG8gdGhpcyBkcm9wZG93biAoZS5nLiBpbiB0aGlzIG1lbnUpLlxuICAgICAgICAvLyBPbiBga2V5dXBgIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFnZ2VkIFRPIHdoaWNoIHdlIHVzZSB0byBjaGVja1xuICAgICAgICAvLyBpZiBmb2N1cyBoYXMgbGVmdCB0aGUgbWVudVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgICAna2V5dXAnLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChlLmtleSA9PT0gJ1RhYicgJiYgIWUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAhbWVudVJlZi5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgPERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbkRyb3Bkb3duLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duJztcblxuRHJvcGRvd24uTWVudSA9IERyb3Bkb3duTWVudTtcbkRyb3Bkb3duLlRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlO1xuRHJvcGRvd24uSXRlbSA9IERyb3Bkb3duSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdXNlUG9wcGVyJztcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25Db250ZXh0VmFsdWUgPSB7XG4gIHRvZ2dsZTogKG5leHRTaG93OiBib29sZWFuLCBldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgRXZlbnQpID0+IHZvaWQ7XG4gIG1lbnVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHRvZ2dsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgc2V0TWVudTogKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkO1xuICBzZXRUb2dnbGU6IChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZDtcblxuICBzaG93OiBib29sZWFuO1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG59O1xuXG5jb25zdCBEcm9wZG93bkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PERyb3Bkb3duQ29udGV4dFZhbHVlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQ29udGV4dDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5cbmltcG9ydCB7IEV2ZW50S2V5LCBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkYXRhQXR0ciB9IGZyb20gJy4vRGF0YUtleSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JdGVtUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEhpZ2hsaWdodCB0aGUgbWVudSBpdGVtIGFzIGFjdGl2ZS5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIG1lbnUgaXRlbSwgbWFraW5nIGl0IHVuc2VsZWN0YWJsZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVmFsdWUgcGFzc2VkIHRvIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIsIHVzZWZ1bCBmb3IgaWRlbnRpZnlpbmcgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbS5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEhUTUwgYGhyZWZgIGF0dHJpYnV0ZSBjb3JyZXNwb25kaW5nIHRvIGBhLmhyZWZgLlxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQGRlZmF1bHQgQnV0dG9uICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG59O1xuXG5pbnRlcmZhY2UgVXNlRHJvcGRvd25JdGVtT3B0aW9ucyB7XG4gIGtleT86IEV2ZW50S2V5IHwgbnVsbDtcbiAgaHJlZj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZHJvcGRvd24gaXRlbS4gUmV0dXJucyBhIHNldCBvZiBwcm9wcyBmb3IgdGhlIGRyb3Bkb3duIGl0ZW0gY29tcG9uZW50XG4gKiBpbmNsdWRpbmcgYW4gYG9uQ2xpY2tgIGhhbmRsZXIgdGhhdCBwcmV2ZW50cyBzZWxlY3Rpb24gd2hlbiB0aGUgaXRlbSBpcyBkaXNhYmxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25JdGVtKHtcbiAga2V5LFxuICBocmVmLFxuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufTogVXNlRHJvcGRvd25JdGVtT3B0aW9ucykge1xuICBjb25zdCBvblNlbGVjdEN0eCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcblxuICBjb25zdCB7IGFjdGl2ZUtleSB9ID0gbmF2Q29udGV4dCB8fCB7fTtcbiAgY29uc3QgZXZlbnRLZXkgPSBtYWtlRXZlbnRLZXkoa2V5LCBocmVmKTtcblxuICBhY3RpdmUgPVxuICAgIGFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBldmVudEtleVxuICAgICAgOiBhY3RpdmU7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgb25DbGljaz8uKGV2ZW50KTtcblxuICAgIGlmIChvblNlbGVjdEN0eCAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgb25TZWxlY3RDdHgoZXZlbnRLZXksIGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHVuZGVmaW5lZCxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogYWN0aXZlLFxuICAgICAgW2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyldOiAnJyxcbiAgICB9LFxuICAgIHsgYWN0aXZlIH0sXG4gIF0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IERyb3Bkb3duSXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIERyb3Bkb3duSXRlbVByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGV2ZW50S2V5LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgICAgYXM6IENvbXBvbmVudCA9IEJ1dHRvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfTogRHJvcGRvd25JdGVtUHJvcHMsXG4gICAgcmVmLFxuICApID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd25JdGVtUHJvcHNdID0gdXNlRHJvcGRvd25JdGVtKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIFwiVFMyNjA0OiBKU1ggZWxlbWVudCB0eXBlICdDb21wb25lbnQnIGRvZXMgbm90IGhhdmUgYW55IGNvbnN0cnVjdCBvciBjYWxsIHNpZ25hdHVyZXMuXCJcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSByZWY9e3JlZn0gey4uLmRyb3Bkb3duSXRlbVByb3BzfSAvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5Ecm9wZG93bkl0ZW0uZGlzcGxheU5hbWUgPSAnRHJvcGRvd25JdGVtJztcbkRyb3Bkb3duSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICdAcmVzdGFydC9ob29rcy91c2VDYWxsYmFja1JlZic7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0LCB7IERyb3Bkb3duQ29udGV4dFZhbHVlIH0gZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuaW1wb3J0IHVzZVBvcHBlciwge1xuICBVc2VQb3BwZXJPcHRpb25zLFxuICBQbGFjZW1lbnQsXG4gIE9mZnNldCxcbiAgVXNlUG9wcGVyU3RhdGUsXG59IGZyb20gJy4vdXNlUG9wcGVyJztcbmltcG9ydCB1c2VSb290Q2xvc2UsIHsgUm9vdENsb3NlT3B0aW9ucyB9IGZyb20gJy4vdXNlUm9vdENsb3NlJztcbmltcG9ydCBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnIGZyb20gJy4vbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlRHJvcGRvd25NZW51T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBQb3BwZXIuanMgYGZsaXBgIG1vZGlmaWVyLCBhbGxvd2luZyB0aGUgRHJvcGRvd24gdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yXG4gICAqIHRvZ2dsZS4gU2VlIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi9tb2RpZmllcnMvZmxpcC8pXG4gICAqIGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBmbGlwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIHZpc2libGUgc3RhdGUgb2YgdGhlIG1lbnUsIGdlbmVyYWxseSB0aGlzIGlzIHByb3ZpZGVkIGJ5IHRoZVxuICAgKiBwYXJlbnQgYERyb3Bkb3duYCBjb21wb25lbnQsIGJ1dCBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYXMgYSBwcm9wIGRpcmVjdGx5LlxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYGZpeGVkYCBwb3NpdGlvbmluZyBzdHJhdGVneSBpbiBQb3BwZXIuIFRoaXMgaXMgdXNlZCBpZiB0aGVcbiAgICogZHJvcGRvd24gdG9nZ2xlIGlzIGluIGEgZml4ZWQgY29udGFpbmVyLlxuICAgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgUG9wcGVySlMgcGxhY2VtZW50IGZvciBwb3NpdGlvbmluZyB0aGUgRHJvcGRvd24gbWVudSBpbiByZWxhdGlvbiB0byBpdCdzIFRvZ2dsZS5cbiAgICogR2VuZXJhbGx5IHRoaXMgaXMgcHJvdmlkZWQgYnkgdGhlIHBhcmVudCBgRHJvcGRvd25gIGNvbXBvbmVudCxcbiAgICogYnV0IG1heSBhbHNvIGJlIHNwZWNpZmllZCBhcyBhIHByb3AgZGlyZWN0bHkuXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBQb3BwZXIgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LlxuICAgKi9cbiAgdXNlUG9wcGVyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gYWRkIHNjcm9sbCBhbmQgcmVzaXplIGxpc3RlbmVycyB0byB1cGRhdGUgbWVudSBwb3NpdGlvbi5cbiAgICpcbiAgICogU2VlIHRoZSBbZXZlbnQgbGlzdGVuZXJzIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyL21vZGlmaWVycy9ldmVudC1saXN0ZW5lcnMvKVxuICAgKiBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgZW5hYmxlRXZlbnRMaXN0ZW5lcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgb2YgdGhlIGRyb3Bkb3duIG1lbnUgZnJvbSB0aGUgZHJvcGRvd24gdG9nZ2xlLiBTZWUgdGhlXG4gICAqIFtvZmZzZXQgZG9jc10oaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjIvbW9kaWZpZXJzL29mZnNldC8pIGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGV2ZW50IHVzZWQgYnkgUm9vdENsb3NlV3JhcHBlci5cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50PzogUm9vdENsb3NlT3B0aW9uc1snY2xpY2tUcmlnZ2VyJ107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHBvcHBlciBvcHRpb25zIGFuZCBwcm9wcyBwYXNzZWQgZGlyZWN0bHkgdG8gcmVhY3QtcG9wcGVyJ3MgUG9wcGVyIGNvbXBvbmVudC5cbiAgICovXG4gIHBvcHBlckNvbmZpZz86IE9taXQ8VXNlUG9wcGVyT3B0aW9ucywgJ2VuYWJsZWQnIHwgJ3BsYWNlbWVudCc+O1xufVxuXG5leHBvcnQgdHlwZSBVc2VyRHJvcGRvd25NZW51UHJvcHMgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAnYXJpYS1sYWJlbGxlZGJ5Jz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJEcm9wZG93bk1lbnVBcnJvd1Byb3BzID0gUmVjb3JkPHN0cmluZywgYW55PiAmIHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgaGFzU2hvd246IGJvb2xlYW47XG4gIHRvZ2dsZT86IERyb3Bkb3duQ29udGV4dFZhbHVlWyd0b2dnbGUnXTtcbiAgcG9wcGVyOiBVc2VQb3BwZXJTdGF0ZSB8IG51bGw7XG4gIGFycm93UHJvcHM6IFBhcnRpYWw8VXNlckRyb3Bkb3duTWVudUFycm93UHJvcHM+O1xufVxuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgRHJvcGRvd25cbiAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZsaXAgQXV0b21hdGljYWxseSBhZGp1c3QgdGhlIG1lbnUgYGRyb3BgIHBvc2l0aW9uIGJhc2VkIG9uIHZpZXdwb3J0IGVkZ2UgZGV0ZWN0aW9uXG4gKiBAcGFyYW0ge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbnMub2Zmc2V0IERlZmluZSBhbiBvZmZzZXQgZGlzdGFuY2UgYmV0d2VlbiB0aGUgTWVudSBhbmQgdGhlIFRvZ2dsZVxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNob3cgRGlzcGxheSB0aGUgbWVudSBtYW51YWxseSwgaWdub3JlZCBpbiB0aGUgY29udGV4dCBvZiBhIGBEcm9wZG93bmBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VQb3BwZXIgb3B0IGluL291dCBvZiB1c2luZyBQb3BwZXJKUyB0byBwb3NpdGlvbiBtZW51cy4gV2hlbiBkaXNhYmxlZCB5b3UgbXVzdCBwb3NpdGlvbiBpdCB5b3Vyc2VsZi5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgb3B0aW9ucy5yb290Q2xvc2VFdmVudCBUaGUgcG9pbnRlciBldmVudCB0byBsaXN0ZW4gZm9yIHdoZW4gZGV0ZXJtaW5pbmcgXCJjbGlja3Mgb3V0c2lkZVwiIHRoZSBtZW51IGZvciB0cmlnZ2VyaW5nIGEgY2xvc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnMucG9wcGVyQ29uZmlnIE9wdGlvbnMgcGFzc2VkIHRvIHRoZSBbYHVzZVBvcHBlcmBdKC9hcGkvdXNlUG9wcGVyKSBob29rLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25NZW51KG9wdGlvbnM6IFVzZURyb3Bkb3duTWVudU9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChEcm9wZG93bkNvbnRleHQpO1xuXG4gIGNvbnN0IFthcnJvd0VsZW1lbnQsIGF0dGFjaEFycm93UmVmXSA9IHVzZUNhbGxiYWNrUmVmPEVsZW1lbnQ+KCk7XG5cbiAgY29uc3QgaGFzU2hvd25SZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IHtcbiAgICBmbGlwLFxuICAgIG9mZnNldCxcbiAgICByb290Q2xvc2VFdmVudCxcbiAgICBmaXhlZCA9IGZhbHNlLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50T3ZlcnJpZGUsXG4gICAgcG9wcGVyQ29uZmlnID0ge30sXG4gICAgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgPSB0cnVlLFxuICAgIHVzZVBvcHBlcjogc2hvdWxkVXNlUG9wcGVyID0gISFjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBzaG93ID0gY29udGV4dD8uc2hvdyA9PSBudWxsID8gISFvcHRpb25zLnNob3cgOiBjb250ZXh0LnNob3c7XG5cbiAgaWYgKHNob3cgJiYgIWhhc1Nob3duUmVmLmN1cnJlbnQpIHtcbiAgICBoYXNTaG93blJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50IHwgRXZlbnQpID0+IHtcbiAgICBjb250ZXh0Py50b2dnbGUoZmFsc2UsIGUpO1xuICB9O1xuXG4gIGNvbnN0IHsgcGxhY2VtZW50LCBzZXRNZW51LCBtZW51RWxlbWVudCwgdG9nZ2xlRWxlbWVudCB9ID0gY29udGV4dCB8fCB7fTtcblxuICBjb25zdCBwb3BwZXIgPSB1c2VQb3BwZXIoXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgICBtZW51RWxlbWVudCxcbiAgICBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnKHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50T3ZlcnJpZGUgfHwgcGxhY2VtZW50IHx8ICdib3R0b20tc3RhcnQnLFxuICAgICAgZW5hYmxlZDogc2hvdWxkVXNlUG9wcGVyLFxuICAgICAgZW5hYmxlRXZlbnRzOiBlbmFibGVFdmVudExpc3RlbmVycyA9PSBudWxsID8gc2hvdyA6IGVuYWJsZUV2ZW50TGlzdGVuZXJzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZmxpcCxcbiAgICAgIGZpeGVkLFxuICAgICAgYXJyb3dFbGVtZW50LFxuICAgICAgcG9wcGVyQ29uZmlnLFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IG1lbnVQcm9wczogVXNlckRyb3Bkb3duTWVudVByb3BzID0ge1xuICAgIHJlZjogc2V0TWVudSB8fCBub29wLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiB0b2dnbGVFbGVtZW50Py5pZCxcbiAgICAuLi5wb3BwZXIuYXR0cmlidXRlcy5wb3BwZXIsXG4gICAgc3R5bGU6IHBvcHBlci5zdHlsZXMucG9wcGVyIGFzIGFueSxcbiAgfTtcblxuICBjb25zdCBtZXRhZGF0YTogVXNlRHJvcGRvd25NZW51TWV0YWRhdGEgPSB7XG4gICAgc2hvdyxcbiAgICBwbGFjZW1lbnQsXG4gICAgaGFzU2hvd246IGhhc1Nob3duUmVmLmN1cnJlbnQsXG4gICAgdG9nZ2xlOiBjb250ZXh0Py50b2dnbGUsXG4gICAgcG9wcGVyOiBzaG91bGRVc2VQb3BwZXIgPyBwb3BwZXIgOiBudWxsLFxuICAgIGFycm93UHJvcHM6IHNob3VsZFVzZVBvcHBlclxuICAgICAgPyB7XG4gICAgICAgICAgcmVmOiBhdHRhY2hBcnJvd1JlZixcbiAgICAgICAgICAuLi5wb3BwZXIuYXR0cmlidXRlcy5hcnJvdyxcbiAgICAgICAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5hcnJvdyBhcyBhbnksXG4gICAgICAgIH1cbiAgICAgIDoge30sXG4gIH07XG5cbiAgdXNlUm9vdENsb3NlKG1lbnVFbGVtZW50LCBoYW5kbGVDbG9zZSwge1xuICAgIGNsaWNrVHJpZ2dlcjogcm9vdENsb3NlRXZlbnQsXG4gICAgZGlzYWJsZWQ6ICFzaG93LFxuICB9KTtcblxuICByZXR1cm4gW21lbnVQcm9wcywgbWV0YWRhdGFdIGFzIGNvbnN0O1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHVzZVBvcHBlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25NZW51UHJvcHMgZXh0ZW5kcyBVc2VEcm9wZG93bk1lbnVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGEgTWVudSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgYmUgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgc2hvdzogYm9vbGVhbixcbiAgICogICBjbG9zZTogKD9TeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICogICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICogICB1cGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIGFyaWEtbGFiZWxsZWRieTogP3N0cmluZ1xuICAgKiAgIH0sXG4gICAqICAgYXJyb3dQcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBVc2VyRHJvcGRvd25NZW51UHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEFsc28gZXhwb3J0ZWQgYXMgYDxEcm9wZG93bi5NZW51PmAgZnJvbSBgRHJvcGRvd25gLlxuICpcbiAqIEBkaXNwbGF5TmFtZSBEcm9wZG93bk1lbnVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBjaGlsZHJlbiwgLi4ub3B0aW9ucyB9OiBEcm9wZG93bk1lbnVQcm9wcykge1xuICBjb25zdCBbcHJvcHMsIG1ldGFdID0gdXNlRHJvcGRvd25NZW51KG9wdGlvbnMpO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbihwcm9wcywgbWV0YSl9PC8+O1xufVxuXG5Ecm9wZG93bk1lbnUuZGlzcGxheU5hbWUgPSAnRHJvcGRvd25NZW51JztcblxuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU1NSU2FmZUlkIH0gZnJvbSAnLi9zc3InO1xuaW1wb3J0IERyb3Bkb3duQ29udGV4dCwgeyBEcm9wZG93bkNvbnRleHRWYWx1ZSB9IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcblxuZXhwb3J0IGNvbnN0IGlzUm9sZU1lbnUgPSAoZWw6IEhUTUxFbGVtZW50KSA9PlxuICBlbC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKT8udG9Mb3dlckNhc2UoKSA9PT0gJ21lbnUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICBpZDogc3RyaW5nO1xuICByZWY6IERyb3Bkb3duQ29udGV4dFZhbHVlWydzZXRUb2dnbGUnXTtcbiAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gICdhcmlhLWV4cGFuZGVkJzogYm9vbGVhbjtcbiAgJ2FyaWEtaGFzcG9wdXAnPzogdHJ1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhIHtcbiAgc2hvdzogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3Nob3cnXTtcbiAgdG9nZ2xlOiBEcm9wZG93bkNvbnRleHRWYWx1ZVsndG9nZ2xlJ107XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBXaXJlcyB1cCBEcm9wZG93biB0b2dnbGUgZnVuY3Rpb25hbGl0eSwgcmV0dXJuaW5nIGEgc2V0IGEgcHJvcHMgdG8gYXR0YWNoXG4gKiB0byB0aGUgZWxlbWVudCB0aGF0IGZ1bmN0aW9ucyBhcyB0aGUgZHJvcGRvd24gdG9nZ2xlIChnZW5lcmFsbHkgYSBidXR0b24pLlxuICpcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25Ub2dnbGUoKTogW1xuICBVc2VEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuXSB7XG4gIGNvbnN0IGlkID0gdXNlU1NSU2FmZUlkKCk7XG4gIGNvbnN0IHsgc2hvdyA9IGZhbHNlLCB0b2dnbGUgPSBub29wLCBzZXRUb2dnbGUsIG1lbnVFbGVtZW50IH0gPVxuICAgIHVzZUNvbnRleHQoRHJvcGRvd25Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgdG9nZ2xlKCFzaG93LCBlKTtcbiAgICB9LFxuICAgIFtzaG93LCB0b2dnbGVdLFxuICApO1xuXG4gIGNvbnN0IHByb3BzOiBVc2VEcm9wZG93blRvZ2dsZVByb3BzID0ge1xuICAgIGlkLFxuICAgIHJlZjogc2V0VG9nZ2xlIHx8IG5vb3AsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgJ2FyaWEtZXhwYW5kZWQnOiAhIXNob3csXG4gIH07XG5cbiAgLy8gVGhpcyBpcyBtYXliZSBiZXR0ZXIgZG93biBpbiBhbiBlZmZlY3QsIGJ1dFxuICAvLyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVwZGF0ZSBhbnl3YXkgd2hlbiB0aGUgbWVudSBlbGVtZW50XG4gIC8vIGlzIHNldCBzbyBtaWdodCByZXR1cm4gbmV3IHByb3BzLlxuICBpZiAobWVudUVsZW1lbnQgJiYgaXNSb2xlTWVudShtZW51RWxlbWVudCkpIHtcbiAgICBwcm9wc1snYXJpYS1oYXNwb3B1cCddID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBbcHJvcHMsIHsgc2hvdywgdG9nZ2xlIH1dO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYSBUb2dnbGUgZWxlbWVudC4gVGhlIGBwcm9wc2BcbiAgICogYXJndW1lbnQgc2hvdWxkIHNwcmVhZCB0aHJvdWdoIHRvICoqYSBjb21wb25lbnQgdGhhdCBjYW4gYWNjZXB0IGEgcmVmKiouIFVzZVxuICAgKiB0aGUgYG9uVG9nZ2xlYCBhcmd1bWVudCB0byB0b2dnbGUgdGhlIG1lbnUgb3BlbiBvciBjbG9zZWRcbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIGFyaWEtaGFzcG9wdXA6IHRydWVcbiAgICogICAgIGFyaWEtZXhwYW5kZWQ6IGJvb2xlYW5cbiAgICogICB9LFxuICAgKiAgIG1ldGE6IHtcbiAgICogICAgIHNob3c6IGJvb2xlYW4sXG4gICAqICAgICB0b2dnbGU6IChzaG93OiBib29sZWFuKSA9PiB2b2lkLFxuICAgKiAgIH1cbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiAoXG4gICAgcHJvcHM6IFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLlRvZ2dsZT5gIGZyb20gYERyb3Bkb3duYC5cbiAqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25Ub2dnbGVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93blRvZ2dsZSh7IGNoaWxkcmVuIH06IERyb3Bkb3duVG9nZ2xlUHJvcHMpIHtcbiAgY29uc3QgW3Byb3BzLCBtZXRhXSA9IHVzZURyb3Bkb3duVG9nZ2xlKCk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHByb3BzLCBtZXRhKX08Lz47XG59XG5cbkRyb3Bkb3duVG9nZ2xlLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duVG9nZ2xlJztcblxuLyoqIEBjb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duVG9nZ2xlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIE5hdkNvbnRleHRUeXBlIHtcbiAgcm9sZT86IHN0cmluZzsgLy8gdXNlZCBieSBOYXZJdGVtIHRvIGRldGVybWluZSBpdCdzIHJvbGVcbiAgYWN0aXZlS2V5OiBFdmVudEtleSB8IG51bGw7XG4gIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG4gIGdldENvbnRyb2xsZXJJZDogKGtleTogRXZlbnRLZXkgfCBudWxsKSA9PiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5hdkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5OYXZDb250ZXh0LmRpc3BsYXlOYW1lID0gJ05hdkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZDb250ZXh0O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgU2VsZWN0YWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFNlbGVjdENhbGxiYWNrIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCBtYWtlRXZlbnRLZXkgPSAoXG4gIGV2ZW50S2V5Pzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCxcbiAgaHJlZjogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGV2ZW50S2V5ICE9IG51bGwpIHJldHVybiBTdHJpbmcoZXZlbnRLZXkpO1xuICByZXR1cm4gaHJlZiB8fCBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0YWJsZUNvbnRleHQ7XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3RpdmVseSBmb2N1c2VkIGVsZW1lbnQgc2FmZWx5LlxuICpcbiAqIEBwYXJhbSBkb2MgdGhlIGRvY3VtZW50IHRvIGNoZWNrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZlRWxlbWVudChkb2MpIHtcbiAgaWYgKGRvYyA9PT0gdm9pZCAwKSB7XG4gICAgZG9jID0gb3duZXJEb2N1bWVudCgpO1xuICB9XG5cbiAgLy8gU3VwcG9ydDogSUUgOSBvbmx5XG4gIC8vIElFOSB0aHJvd3MgYW4gXCJVbnNwZWNpZmllZCBlcnJvclwiIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGZyb20gYW4gPGlmcmFtZT5cbiAgdHJ5IHtcbiAgICB2YXIgYWN0aXZlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7IC8vIElFMTEgcmV0dXJucyBhIHNlZW1pbmdseSBlbXB0eSBvYmplY3QgaW4gc29tZSBjYXNlcyB3aGVuIGFjY2Vzc2luZ1xuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgZnJvbSBhbiA8aWZyYW1lPlxuXG4gICAgaWYgKCFhY3RpdmUgfHwgIWFjdGl2ZS5ub2RlTmFtZSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGllIHRocm93cyBpZiBubyBhY3RpdmUgZWxlbWVudCAqL1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIHJlZiB0aGF0IGlzIGltbWVkaWF0ZWx5IHVwZGF0ZWQgd2l0aCB0aGUgbmV3IHZhbHVlXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBSZWYgdmFsdWVcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXBkYXRlZFJlZih2YWx1ZSkge1xuICB2YXIgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZVJlZjtcbn0iLCJpbXBvcnQgdXNlVXBkYXRlZFJlZiBmcm9tICcuL3VzZVVwZGF0ZWRSZWYnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0aGF0IGZpcmVzIHdoZW4gYSBjb21wb25lbnQgdW5tb3VudHNcbiAqXG4gKiBAcGFyYW0gZm4gSGFuZGxlciB0byBydW4gd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gKiBAY2F0ZWdvcnkgZWZmZWN0c1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbGxVbm1vdW50KGZuKSB7XG4gIHZhciBvblVubW91bnQgPSB1c2VVcGRhdGVkUmVmKGZuKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uVW5tb3VudC5jdXJyZW50KCk7XG4gICAgfTtcbiAgfSwgW10pO1xufSIsIi8qKlxuICogR2V0IHRoZSB3aWR0aCBvZiB0aGUgdmVydGljYWwgd2luZG93IHNjcm9sbGJhciBpZiBpdCdzIHZpc2libGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9keVNjcm9sbGJhcldpZHRoKCkge1xuICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xufVxuIiwiaW1wb3J0IGNzcyBmcm9tICdkb20taGVscGVycy9jc3MnO1xuaW1wb3J0IHsgZGF0YUF0dHIgfSBmcm9tICcuL0RhdGFLZXknO1xuaW1wb3J0IGdldEJvZHlTY3JvbGxiYXJXaWR0aCBmcm9tICcuL2dldFNjcm9sbGJhcldpZHRoJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEluc3RhbmNlIHtcbiAgZGlhbG9nOiBFbGVtZW50O1xuICBiYWNrZHJvcDogRWxlbWVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ29udGFpbmVyU3RhdGUgPSB7XG4gIHNjcm9sbEJhcldpZHRoOiBudW1iZXI7XG4gIHN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgT1BFTl9EQVRBX0FUVFJJQlVURSA9IGRhdGFBdHRyKCdtb2RhbC1vcGVuJyk7XG5cbi8qKlxuICogTWFuYWdlcyBhIHN0YWNrIG9mIE1vZGFscyBhcyB3ZWxsIGFzIGVuc3VyaW5nXG4gKiBib2R5IHNjcm9sbGluZyBpcyBpcyBkaXNhYmxlZCBhbmQgcGFkZGluZyBhY2NvdW50ZWQgZm9yXG4gKi9cbmNsYXNzIE1vZGFsTWFuYWdlciB7XG4gIHJlYWRvbmx5IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93OiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGlzUlRMOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IG1vZGFsczogTW9kYWxJbnN0YW5jZVtdO1xuXG4gIHByaXZhdGUgc3RhdGUhOiBDb250YWluZXJTdGF0ZTtcblxuICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gdHJ1ZSwgaXNSVEwgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3c7XG4gICAgdGhpcy5pc1JUTCA9IGlzUlRMO1xuICAgIHRoaXMubW9kYWxzID0gW107XG4gIH1cblxuICBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICByZXR1cm4gZ2V0Qm9keVNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc2V0TW9kYWxBdHRyaWJ1dGVzKF9tb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIC8vIEZvciBvdmVycmlkaW5nXG4gIH1cblxuICByZW1vdmVNb2RhbEF0dHJpYnV0ZXMoX21vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgLy8gRm9yIG92ZXJyaWRpbmdcbiAgfVxuXG4gIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlOiBDb250YWluZXJTdGF0ZSkge1xuICAgIGNvbnN0IHN0eWxlOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+ID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAgIC8vIHdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIGFjdHVhbCBgc3R5bGVgIGhlcmVcbiAgICAvLyBiZWNhdXNlIHdlIHdpbGwgb3ZlcnJpZGUgaXRcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRFbGVtZW50KCk7XG5cbiAgICBjb250YWluZXJTdGF0ZS5zdHlsZSA9IHtcbiAgICAgIG92ZXJmbG93OiBjb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBbcGFkZGluZ1Byb3BdOiBjb250YWluZXIuc3R5bGVbcGFkZGluZ1Byb3BdLFxuICAgIH07XG5cbiAgICBpZiAoY29udGFpbmVyU3RhdGUuc2Nyb2xsQmFyV2lkdGgpIHtcbiAgICAgIC8vIHVzZSBjb21wdXRlZCBzdHlsZSwgaGVyZSB0byBnZXQgdGhlIHJlYWwgcGFkZGluZ1xuICAgICAgLy8gdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGhcbiAgICAgIHN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke1xuICAgICAgICBwYXJzZUludChjc3MoY29udGFpbmVyLCBwYWRkaW5nUHJvcCkgfHwgJzAnLCAxMCkgK1xuICAgICAgICBjb250YWluZXJTdGF0ZS5zY3JvbGxCYXJXaWR0aFxuICAgICAgfXB4YDtcbiAgICB9XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShPUEVOX0RBVEFfQVRUUklCVVRFLCAnJyk7XG5cbiAgICBjc3MoY29udGFpbmVyLCBzdHlsZSBhcyBhbnkpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgWy4uLnRoaXMubW9kYWxzXS5mb3JFYWNoKChtKSA9PiB0aGlzLnJlbW92ZShtKSk7XG4gIH1cblxuICByZW1vdmVDb250YWluZXJTdHlsZShjb250YWluZXJTdGF0ZTogQ29udGFpbmVyU3RhdGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKE9QRU5fREFUQV9BVFRSSUJVVEUpO1xuICAgIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCBjb250YWluZXJTdGF0ZS5zdHlsZSk7XG4gIH1cblxuICBhZGQobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICBsZXQgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgIGlmIChtb2RhbElkeCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmxlbmd0aDtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgICB0aGlzLnNldE1vZGFsQXR0cmlidXRlcyhtb2RhbCk7XG4gICAgaWYgKG1vZGFsSWR4ICE9PSAwKSB7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbEJhcldpZHRoOiB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCksXG4gICAgICBzdHlsZToge30sXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICB0aGlzLnNldENvbnRhaW5lclN0eWxlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb2RhbElkeDtcbiAgfVxuXG4gIHJlbW92ZShtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIGNvbnN0IG1vZGFsSWR4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cbiAgICBpZiAobW9kYWxJZHggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSWR4LCAxKTtcblxuICAgIC8vIGlmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLFxuICAgIC8vIGNsZWFuIHVwIHRoZSBjb250YWluZXJcbiAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCAmJiB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lclN0eWxlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlTW9kYWxBdHRyaWJ1dGVzKG1vZGFsKTtcbiAgfVxuXG4gIGlzVG9wTW9kYWwobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLm1vZGFscy5sZW5ndGggJiYgdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIERPTUNvbnRhaW5lcjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4gPVxuICB8IFRcbiAgfCBSZWFjdC5SZWZPYmplY3Q8VD5cbiAgfCBudWxsXG4gIHwgKCgpID0+IFQgfCBSZWFjdC5SZWZPYmplY3Q8VD4gfCBudWxsKTtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVDb250YWluZXJSZWYgPSA8VCBleHRlbmRzIEhUTUxFbGVtZW50PihcbiAgcmVmOiBET01Db250YWluZXI8VD4gfCB1bmRlZmluZWQsXG4pOiBUIHwgSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgaWYgKHJlZiA9PSBudWxsKSByZXR1cm4gb3duZXJEb2N1bWVudCgpLmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50O1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykgcmVmID0gcmVmKCk7XG5cbiAgaWYgKHJlZiAmJiAnY3VycmVudCcgaW4gcmVmKSByZWYgPSByZWYuY3VycmVudDtcbiAgaWYgKHJlZj8ubm9kZVR5cGUpIHJldHVybiByZWYgfHwgbnVsbDtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdhaXRGb3JET01SZWY8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+KFxuICByZWY6IERPTUNvbnRhaW5lcjxUPiB8IHVuZGVmaW5lZCxcbiAgb25SZXNvbHZlZD86IChlbGVtZW50OiBUIHwgSFRNTEJvZHlFbGVtZW50KSA9PiB2b2lkLFxuKSB7XG4gIGNvbnN0IFtyZXNvbHZlZFJlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKCgpID0+IHJlc29sdmVDb250YWluZXJSZWYocmVmKSk7XG5cbiAgaWYgKCFyZXNvbHZlZFJlZikge1xuICAgIGNvbnN0IGVhcmx5UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChlYXJseVJlZikgc2V0UmVmKGVhcmx5UmVmKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9uUmVzb2x2ZWQgJiYgcmVzb2x2ZWRSZWYpIHtcbiAgICAgIG9uUmVzb2x2ZWQocmVzb2x2ZWRSZWYpO1xuICAgIH1cbiAgfSwgW29uUmVzb2x2ZWQsIHJlc29sdmVkUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXh0UmVmID0gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICAgIGlmIChuZXh0UmVmICE9PSByZXNvbHZlZFJlZikge1xuICAgICAgc2V0UmVmKG5leHRSZWYpO1xuICAgIH1cbiAgfSwgW3JlZiwgcmVzb2x2ZWRSZWZdKTtcblxuICByZXR1cm4gcmVzb2x2ZWRSZWY7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUsIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuaW1wb3J0IGFjdGl2ZUVsZW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvYWN0aXZlRWxlbWVudCc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvY29udGFpbnMnO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICdkb20taGVscGVycy9jYW5Vc2VET00nO1xuaW1wb3J0IGxpc3RlbiBmcm9tICdkb20taGVscGVycy9saXN0ZW4nO1xuaW1wb3J0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIGZvcndhcmRSZWYsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlTW91bnRlZCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNb3VudGVkJztcbmltcG9ydCB1c2VXaWxsVW5tb3VudCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VXaWxsVW5tb3VudCc7XG5cbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSAnLi9Nb2RhbE1hbmFnZXInO1xuaW1wb3J0IHVzZVdhaXRGb3JET01SZWYsIHsgRE9NQ29udGFpbmVyIH0gZnJvbSAnLi91c2VXYWl0Rm9yRE9NUmVmJztcbmltcG9ydCB7IFRyYW5zaXRpb25DYWxsYmFja3MgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IG1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuZXhwb3J0IHR5cGUgTW9kYWxUcmFuc2l0aW9uQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50VHlwZTxcbiAge1xuICAgIGluOiBib29sZWFuO1xuICAgIGFwcGVhcj86IGJvb2xlYW47XG4gICAgdW5tb3VudE9uRXhpdD86IGJvb2xlYW47XG4gIH0gJiBUcmFuc2l0aW9uQ2FsbGJhY2tzXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck1vZGFsRGlhbG9nUHJvcHMge1xuICBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZDtcbiAgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRhYkluZGV4OiBudW1iZXI7XG4gIHJvbGU6IHN0cmluZztcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxFbGVtZW50PjtcbiAgJ2FyaWEtbW9kYWwnOiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck1vZGFsQmFja2Ryb3BQcm9wcyB7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8RWxlbWVudD47XG4gIG9uQ2xpY2s6IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHZvaWQ7XG59XG5cbi8qXG4gIE1vZGFsIHByb3BzIGFyZSBzcGxpdCBpbnRvIGEgdmVyc2lvbiB3aXRoIGFuZCB3aXRob3V0IGluZGV4IHNpZ25hdHVyZSBzbyB0aGF0IHlvdSBjYW4gZnVsbHkgdXNlIHRoZW0gaW4gYW5vdGhlciBwcm9qZWN0c1xuICBUaGlzIGlzIGR1ZSB0byBUeXBlc2NyaXB0IG5vdCBwbGF5aW5nIHdlbGwgd2l0aCBpbmRleCBzaW5nYXR1cmVzIGUuZy4gd2hlbiB1c2luZyBPbWl0XG4qL1xuZXhwb3J0IGludGVyZmFjZSBCYXNlTW9kYWxQcm9wcyBleHRlbmRzIFRyYW5zaXRpb25DYWxsYmFja3Mge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcm9sZT86IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgTW9kYWxcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogQSBET00gZWxlbWVudCwgYSBgcmVmYCB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgTW9kYWwgaXMgYXBwZW5kZWQgdG8gaXQncyBgY29udGFpbmVyYCBlbGVtZW50LlxuICAgKlxuICAgKi9cbiAgY29udGFpbmVyPzogRE9NQ29udGFpbmVyO1xuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNb2RhbCBpcyBvcGVuaW5nLlxuICAgKi9cbiAgb25TaG93PzogKCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBlaXRoZXIgdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQsIG9yIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIFRoZSBgb25IaWRlYCBjYWxsYmFjayBvbmx5IHNpZ25hbHMgaW50ZW50IGZyb20gdGhlIE1vZGFsLFxuICAgKiB5b3UgbXVzdCBhY3R1YWxseSBzZXQgdGhlIGBzaG93YCBwcm9wIHRvIGBmYWxzZWAgZm9yIHRoZSBNb2RhbCB0byBjbG9zZS5cbiAgICovXG4gIG9uSGlkZT86ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgTW9kYWxNYW5hZ2VyIGluc3RhbmNlIHVzZWQgdG8gdHJhY2sgYW5kIG1hbmFnZSB0aGUgc3RhdGUgb2Ygb3BlblxuICAgKiBNb2RhbHMuIFVzZWZ1bCB3aGVuIGN1c3RvbWl6aW5nIGhvdyBtb2RhbHMgaW50ZXJhY3Qgd2l0aGluIGEgY29udGFpbmVyXG4gICAqL1xuICBtYW5hZ2VyPzogTW9kYWxNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGEgYmFja2Ryb3AgY29tcG9uZW50LiBBIGBzdGF0aWNgYmFja2Ryb3BcbiAgICogd2lsbCBub3QgdHJpZ2dlciBhIE1vZGFsIG9uSGlkZSB3aGVuIGNsaWNrZWQuXG4gICAqL1xuICBiYWNrZHJvcD86IHRydWUgfCBmYWxzZSB8ICdzdGF0aWMnO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGlhbG9nIGNvbXBvbmVudC4gVXNlZnVsIGZvciBjdXN0b21cbiAgICogcmVuZGVyaW5nLiAqKk5vdGU6KiogdGhlIGNvbXBvbmVudCBzaG91bGQgbWFrZSBzdXJlIHRvIGFwcGx5IHRoZSBwcm92aWRlZCByZWYuXG4gICAqXG4gICAqIGBgYGpzIHN0YXRpY1xuICAgKiByZW5kZXJEaWFsb2c9e3Byb3BzID0+IDxNeURpYWxvZyB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckRpYWxvZz86IChwcm9wczogUmVuZGVyTW9kYWxEaWFsb2dQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBiYWNrZHJvcCBjb21wb25lbnQuIFVzZWZ1bCBmb3IgY3VzdG9tXG4gICAqIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICpcbiAgICogYGBganNcbiAgICogIHJlbmRlckJhY2tkcm9wPXtwcm9wcyA9PiA8TXlCYWNrZHJvcCB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckJhY2tkcm9wPzogKHByb3BzOiBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSwgaWYgc3BlY2lmaWVkIGluIGBrZXlib2FyZGAsIGlzIHByZXNzZWQuXG4gICAqXG4gICAqIElmIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBrZXlib2FyZCBldmVudCwgY2xvc2luZyB0aGUgbW9kYWwgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd24/OiAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AsIGlmIHNwZWNpZmllZCwgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljaz86IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQgdXNlZFxuICAgKiB0byBjb250cm9sIGFuaW1hdGlvbnMgZm9yIHRoZSBkaWFsb2cgY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbj86IE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudDtcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudCB1c2VkXG4gICAqIHRvIGNvbnRyb2wgYW5pbWF0aW9ucyBmb3IgdGhlIGJhY2tkcm9wIGNvbXBvbmVudHMuXG4gICAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb24/OiBNb2RhbFRyYW5zaXRpb25Db21wb25lbnQ7XG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuIFRoaXMgYWxzb1xuICAgKiB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgTW9kYWwgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgYXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBNb2RhbCB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZW5mb3JjZUZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlblxuICAgKi9cbiAgcmVzdG9yZUZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3B0aW9ucyBwYXNzZWQgdG8gZm9jdXMgZnVuY3Rpb24gd2hlbiBgcmVzdG9yZUZvY3VzYCBpcyBzZXQgdG8gYHRydWVgXG4gICAqXG4gICAqIEBsaW5rICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvZm9jdXMjUGFyYW1ldGVyc1xuICAgKi9cbiAgcmVzdG9yZUZvY3VzT3B0aW9ucz86IHtcbiAgICBwcmV2ZW50U2Nyb2xsOiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJvcHMgZXh0ZW5kcyBCYXNlTW9kYWxQcm9wcyB7XG4gIFtvdGhlcjogc3RyaW5nXTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICBpZiAoIW1hbmFnZXIpIG1hbmFnZXIgPSBuZXcgTW9kYWxNYW5hZ2VyKCk7XG4gIHJldHVybiBtYW5hZ2VyO1xufVxuXG5mdW5jdGlvbiB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWQ/OiBNb2RhbE1hbmFnZXIpIHtcbiAgY29uc3QgbW9kYWxNYW5hZ2VyID0gcHJvdmlkZWQgfHwgZ2V0TWFuYWdlcigpO1xuXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVmKHtcbiAgICBkaWFsb2c6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gICAgYmFja2Ryb3A6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGFsLmN1cnJlbnQsIHtcbiAgICBhZGQ6ICgpID0+IG1vZGFsTWFuYWdlci5hZGQobW9kYWwuY3VycmVudCksXG5cbiAgICByZW1vdmU6ICgpID0+IG1vZGFsTWFuYWdlci5yZW1vdmUobW9kYWwuY3VycmVudCksXG5cbiAgICBpc1RvcE1vZGFsOiAoKSA9PiBtb2RhbE1hbmFnZXIuaXNUb3BNb2RhbChtb2RhbC5jdXJyZW50KSxcblxuICAgIHNldERpYWxvZ1JlZjogdXNlQ2FsbGJhY2soKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBtb2RhbC5jdXJyZW50LmRpYWxvZyA9IHJlZiE7XG4gICAgfSwgW10pLFxuXG4gICAgc2V0QmFja2Ryb3BSZWY6IHVzZUNhbGxiYWNrKChyZWY6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgbW9kYWwuY3VycmVudC5iYWNrZHJvcCA9IHJlZiE7XG4gICAgfSwgW10pLFxuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhhbmRsZSB7XG4gIGRpYWxvZzogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBiYWNrZHJvcDogSFRNTEVsZW1lbnQgfCBudWxsO1xufVxuXG5jb25zdCBNb2RhbDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgTW9kYWxQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8TW9kYWxIYW5kbGU+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIHNob3cgPSBmYWxzZSxcbiAgICAgIHJvbGUgPSAnZGlhbG9nJyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBiYWNrZHJvcCA9IHRydWUsXG4gICAgICBrZXlib2FyZCA9IHRydWUsXG4gICAgICBvbkJhY2tkcm9wQ2xpY2ssXG4gICAgICBvbkVzY2FwZUtleURvd24sXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uLFxuICAgICAgYXV0b0ZvY3VzID0gdHJ1ZSxcbiAgICAgIGVuZm9yY2VGb2N1cyA9IHRydWUsXG4gICAgICByZXN0b3JlRm9jdXMgPSB0cnVlLFxuICAgICAgcmVzdG9yZUZvY3VzT3B0aW9ucyxcbiAgICAgIHJlbmRlckRpYWxvZyxcbiAgICAgIHJlbmRlckJhY2tkcm9wID0gKHByb3BzOiBSZW5kZXJNb2RhbEJhY2tkcm9wUHJvcHMpID0+IDxkaXYgey4uLnByb3BzfSAvPixcbiAgICAgIG1hbmFnZXI6IHByb3ZpZGVkTWFuYWdlcixcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLFxuICAgICAgb25TaG93LFxuICAgICAgb25IaWRlID0gKCkgPT4ge30sXG5cbiAgICAgIG9uRXhpdCxcbiAgICAgIG9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQsXG5cbiAgICAgIC4uLnJlc3RcbiAgICB9OiBNb2RhbFByb3BzLFxuICAgIHJlZjogUmVhY3QuUmVmPE1vZGFsSGFuZGxlPixcbiAgKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdXNlV2FpdEZvckRPTVJlZihjb250YWluZXJSZWYpO1xuICAgIGNvbnN0IG1vZGFsID0gdXNlTW9kYWxNYW5hZ2VyKHByb3ZpZGVkTWFuYWdlcik7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkKCk7XG4gICAgY29uc3QgcHJldlNob3cgPSB1c2VQcmV2aW91cyhzaG93KTtcbiAgICBjb25zdCBbZXhpdGVkLCBzZXRFeGl0ZWRdID0gdXNlU3RhdGUoIXNob3cpO1xuICAgIGNvbnN0IGxhc3RGb2N1c1JlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IG1vZGFsLCBbbW9kYWxdKTtcblxuICAgIGlmIChjYW5Vc2VET00gJiYgIXByZXZTaG93ICYmIHNob3cpIHtcbiAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gYWN0aXZlRWxlbWVudCgpIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIGlmICghdHJhbnNpdGlvbiAmJiAhc2hvdyAmJiAhZXhpdGVkKSB7XG4gICAgICBzZXRFeGl0ZWQodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChzaG93ICYmIGV4aXRlZCkge1xuICAgICAgc2V0RXhpdGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTaG93ID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgICBtb2RhbC5hZGQoKTtcblxuICAgICAgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmLmN1cnJlbnQgPSBsaXN0ZW4oXG4gICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICBoYW5kbGVEb2N1bWVudEtleURvd24sXG4gICAgICApO1xuXG4gICAgICByZW1vdmVGb2N1c0xpc3RlbmVyUmVmLmN1cnJlbnQgPSBsaXN0ZW4oXG4gICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgLy8gdGhlIHRpbWVvdXQgaXMgbmVjZXNzYXJ5IGIvYyB0aGlzIHdpbGwgcnVuIGJlZm9yZSB0aGUgbmV3IG1vZGFsIGlzIG1vdW50ZWRcbiAgICAgICAgLy8gYW5kIHNvIHN0ZWFscyBmb2N1cyBmcm9tIGl0XG4gICAgICAgICgpID0+IHNldFRpbWVvdXQoaGFuZGxlRW5mb3JjZUZvY3VzKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChvblNob3cpIHtcbiAgICAgICAgb25TaG93KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG9mb2N1cyBhZnRlciBvblNob3cgdG8gbm90IHRyaWdnZXIgYSBmb2N1cyBldmVudCBmb3IgcHJldmlvdXNcbiAgICAgIC8vIG1vZGFscyBiZWZvcmUgdGhpcyBvbmUgaXMgc2hvd24uXG4gICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudChkb2N1bWVudCkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGFsLmRpYWxvZyAmJlxuICAgICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICAgIWNvbnRhaW5zKG1vZGFsLmRpYWxvZywgY3VycmVudEFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICkge1xuICAgICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gY3VycmVudEFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgbW9kYWwuZGlhbG9nLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUhpZGUgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgICByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYuY3VycmVudD8uKCk7XG4gICAgICByZW1vdmVGb2N1c0xpc3RlbmVyUmVmLmN1cnJlbnQ/LigpO1xuXG4gICAgICBpZiAocmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IDw9SUUxMSBkb2Vzbid0IHN1cHBvcnQgYGZvY3VzKClgIG9uIHN2ZyBlbGVtZW50cyAoUkI6ICM5MTcpXG4gICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50Py5mb2N1cz8uKHJlc3RvcmVGb2N1c09wdGlvbnMpO1xuICAgICAgICBsYXN0Rm9jdXNSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiB0cnkgYW5kIGNvbWJpbmUgdGhlc2UgZWZmZWN0czogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1vdmVybGF5cy9wdWxsLzc5NCNkaXNjdXNzaW9uX3I0MDk5NTQxMjBcblxuICAgIC8vIFNob3cgbG9naWMgd2hlbjpcbiAgICAvLyAgLSBzaG93IGlzIGB0cnVlYCBfYW5kXyBgY29udGFpbmVyYCBoYXMgcmVzb2x2ZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKCFzaG93IHx8ICFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgaGFuZGxlU2hvdygpO1xuICAgIH0sIFtzaG93LCBjb250YWluZXIsIC8qIHNob3VsZCBuZXZlciBjaGFuZ2U6ICovIGhhbmRsZVNob3ddKTtcblxuICAgIC8vIEhpZGUgY2xlYW51cCBsb2dpYyB3aGVuOlxuICAgIC8vICAtIGBleGl0ZWRgIHN3aXRjaGVzIHRvIHRydWVcbiAgICAvLyAgLSBjb21wb25lbnQgdW5tb3VudHM7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghZXhpdGVkKSByZXR1cm47XG5cbiAgICAgIGhhbmRsZUhpZGUoKTtcbiAgICB9LCBbZXhpdGVkLCBoYW5kbGVIaWRlXSk7XG5cbiAgICB1c2VXaWxsVW5tb3VudCgoKSA9PiB7XG4gICAgICBoYW5kbGVIaWRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgaGFuZGxlRW5mb3JjZUZvY3VzID0gdXNlRXZlbnRDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoIWVuZm9yY2VGb2N1cyB8fCAhaXNNb3VudGVkKCkgfHwgIW1vZGFsLmlzVG9wTW9kYWwoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG1vZGFsLmRpYWxvZyAmJlxuICAgICAgICBjdXJyZW50QWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudClcbiAgICAgICkge1xuICAgICAgICBtb2RhbC5kaWFsb2cuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvbkJhY2tkcm9wQ2xpY2s/LihlKTtcblxuICAgICAgaWYgKGJhY2tkcm9wID09PSB0cnVlKSB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlRG9jdW1lbnRLZXlEb3duID0gdXNlRXZlbnRDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcgJiYgbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICAgIG9uRXNjYXBlS2V5RG93bj8uKGUpO1xuXG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgb25IaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgbGlzdGVuPiB8IG51bGw+KCk7XG4gICAgY29uc3QgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGxpc3Rlbj4gfCBudWxsPigpO1xuXG4gICAgY29uc3QgaGFuZGxlSGlkZGVuOiBUcmFuc2l0aW9uQ2FsbGJhY2tzWydvbkV4aXRlZCddID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICAgIG9uRXhpdGVkPy4oLi4uYXJncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIGlmICghY29udGFpbmVyIHx8ICEoc2hvdyB8fCAoVHJhbnNpdGlvbiAmJiAhZXhpdGVkKSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRpYWxvZ1Byb3BzID0ge1xuICAgICAgcm9sZSxcbiAgICAgIHJlZjogbW9kYWwuc2V0RGlhbG9nUmVmLFxuICAgICAgLy8gYXBwYXJlbnRseSBvbmx5IHdvcmtzIG9uIHRoZSBkaWFsb2cgcm9sZSBlbGVtZW50XG4gICAgICAnYXJpYS1tb2RhbCc6IHJvbGUgPT09ICdkaWFsb2cnID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIC4uLnJlc3QsXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICB9O1xuXG4gICAgbGV0IGRpYWxvZyA9IHJlbmRlckRpYWxvZyA/IChcbiAgICAgIHJlbmRlckRpYWxvZyhkaWFsb2dQcm9wcylcbiAgICApIDogKFxuICAgICAgPGRpdiB7Li4uZGlhbG9nUHJvcHN9PlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuISwgeyByb2xlOiAnZG9jdW1lbnQnIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChUcmFuc2l0aW9uKSB7XG4gICAgICBkaWFsb2cgPSAoXG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgIGluPXshIXNob3d9XG4gICAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUhpZGRlbn1cbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGlhbG9nfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBiYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgY29uc3QgQmFja2Ryb3BUcmFuc2l0aW9uID0gYmFja2Ryb3BUcmFuc2l0aW9uO1xuXG4gICAgICBiYWNrZHJvcEVsZW1lbnQgPSByZW5kZXJCYWNrZHJvcCh7XG4gICAgICAgIHJlZjogbW9kYWwuc2V0QmFja2Ryb3BSZWYsXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICB9KTtcblxuICAgICAgaWYgKEJhY2tkcm9wVHJhbnNpdGlvbikge1xuICAgICAgICBiYWNrZHJvcEVsZW1lbnQgPSAoXG4gICAgICAgICAgPEJhY2tkcm9wVHJhbnNpdGlvbiBhcHBlYXIgaW49eyEhc2hvd30+XG4gICAgICAgICAgICB7YmFja2Ryb3BFbGVtZW50fVxuICAgICAgICAgIDwvQmFja2Ryb3BUcmFuc2l0aW9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7UmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7YmFja2Ryb3BFbGVtZW50fVxuICAgICAgICAgICAge2RpYWxvZ31cbiAgICAgICAgICA8Lz4sXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbk1vZGFsLmRpc3BsYXlOYW1lID0gJ01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihNb2RhbCwge1xuICBNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG59KTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbnZhciB0b0ZuUmVmID0gZnVuY3Rpb24gdG9GblJlZihyZWYpIHtcbiAgcmV0dXJuICFyZWYgfHwgdHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJyA/IHJlZiA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpIHtcbiAgdmFyIGEgPSB0b0ZuUmVmKHJlZkEpO1xuICB2YXIgYiA9IHRvRm5SZWYocmVmQik7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoYSkgYSh2YWx1ZSk7XG4gICAgaWYgKGIpIGIodmFsdWUpO1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybnMgYSBzaW5nbGUgY2FsbGJhY2sgcmVmIGNvbXBvc2VkIGZyb20gdHdvIG90aGVyIFJlZnMuXG4gKlxuICogYGBgdHN4XG4gKiBjb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XG4gKiAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnMocmVmLCBhdHRhY2hSZWYpO1xuICpcbiAqICAgcmV0dXJuIDxidXR0b24gcmVmPXttZXJnZWRSZWZ9IHsuLi5wcm9wc30vPlxuICogfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSByZWZBIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBwYXJhbSByZWZCIEEgQ2FsbGJhY2sgb3IgbXV0YWJsZSBSZWZcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcyhyZWZBLCByZWZCKSB7XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWVyZ2VSZWZzKHJlZkEsIHJlZkIpO1xuICB9LCBbcmVmQSwgcmVmQl0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNZXJnZWRSZWZzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCB1c2VNZXJnZWRSZWZzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUG9wcGVyLCB7XG4gIE9mZnNldCxcbiAgUGxhY2VtZW50LFxuICBVc2VQb3BwZXJPcHRpb25zLFxuICBVc2VQb3BwZXJTdGF0ZSxcbn0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSwgeyBSb290Q2xvc2VPcHRpb25zIH0gZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IHVzZVdhaXRGb3JET01SZWYsIHsgRE9NQ29udGFpbmVyIH0gZnJvbSAnLi91c2VXYWl0Rm9yRE9NUmVmJztcbmltcG9ydCB7IFRyYW5zaXRpb25DYWxsYmFja3MgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnIGZyb20gJy4vbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUFycm93UHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlNZXRhZGF0YSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudDogUGxhY2VtZW50IHwgdW5kZWZpbmVkO1xuICBwb3BwZXI6IFVzZVBvcHBlclN0YXRlIHwgbnVsbDtcbiAgYXJyb3dQcm9wczogUGFydGlhbDxPdmVybGF5QXJyb3dQcm9wcz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUluamVjdGVkUHJvcHMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAnYXJpYS1sYWJlbGxlZGJ5Jz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5UHJvcHMgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzIHtcbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIFBvcHBlci5qcyBgZmxpcGAgbW9kaWZpZXIsIGFsbG93aW5nIHRoZSBPdmVybGF5IHRvXG4gICAqIGF1dG9tYXRpY2FsbHkgYWRqdXN0IGl0J3MgcGxhY2VtZW50IGluIGNhc2Ugb2Ygb3ZlcmxhcCB3aXRoIHRoZSB2aWV3cG9ydCBvciB0b2dnbGUuXG4gICAqIFJlZmVyIHRvIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnMuLmZsaXAuZW5hYmxlZCkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmxpcD86IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpZnkgd2hlcmUgdGhlIG92ZXJsYXkgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGluIHJlbGF0aW9uIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgb2Zmc2V0IG9mIHRoZSBvdmVybGF5IHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQSBjb252ZW5pZW5jZSBzaG9ydGN1dCB0byBzZXR0aW5nIGBwb3BwZXJDb25maWcubW9kZmllcnMub2Zmc2V0YFxuICAgKi9cbiAgb2Zmc2V0PzogT2Zmc2V0O1xuXG4gIC8qKlxuICAgKiBDb250cm9sIGhvdyBtdWNoIHNwYWNlIHRoZXJlIGlzIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIGJvdW5kYXJ5IGVsZW1lbnQgYW5kIG92ZXJsYXkuXG4gICAqIEEgY29udmVuaWVuY2Ugc2hvcnRjdXQgdG8gc2V0dGluZyBgcG9wcGVyQ29uZmlnLm1vZGZpZXJzLnByZXZlbnRPdmVyZmxvdy5wYWRkaW5nYFxuICAgKi9cbiAgY29udGFpbmVyUGFkZGluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogQSBzZXQgb2YgcG9wcGVyIG9wdGlvbnMgYW5kIHByb3BzIHBhc3NlZCBkaXJlY3RseSB0byByZWFjdC1wb3BwZXIncyBQb3BwZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcG9wcGVyQ29uZmlnPzogT21pdDxVc2VQb3BwZXJPcHRpb25zLCAncGxhY2VtZW50Jz47XG5cbiAgLyoqXG4gICAqIEEgRE9NIEVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBQb3J0YWwgY2hpbGRyZW5cbiAgICogYXBwZW5kZWQgdG8gaXQuXG4gICAqL1xuICBjb250YWluZXI/OiBET01Db250YWluZXI7XG5cbiAgLyoqXG4gICAqIEEgRE9NIEVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYHRhcmdldGAgZWxlbWVudCBpcyB3aGVyZVxuICAgKiB0aGUgb3ZlcmxheSBpcyBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvLlxuICAgKi9cbiAgdGFyZ2V0OiBET01Db250YWluZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgT3ZlcmxheVxuICAgKi9cbiAgc2hvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnRcbiAgICogdXNlZCB0byBhbmltYXRlIHRoZSBvdmVybGF5IGFzIGl0IGNoYW5nZXMgdmlzaWJpbGl0eS5cbiAgICovXG4gIHRyYW5zaXRpb24/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxuICAgIHsgaW4/OiBib29sZWFuOyBhcHBlYXI/OiBib29sZWFuIH0gJiBUcmFuc2l0aW9uQ2FsbGJhY2tzXG4gID47XG5cbiAgLyoqXG4gICAqIEEgQ2FsbGJhY2sgZmlyZWQgYnkgdGhlIE92ZXJsYXkgd2hlbiBpdCB3aXNoZXMgdG8gYmUgaGlkZGVuLlxuICAgKlxuICAgKiBfX3JlcXVpcmVkX18gd2hlbiBgcm9vdENsb3NlYCBpcyBgdHJ1ZWAuXG4gICAqXG4gICAqIEB0eXBlIGZ1bmNcbiAgICovXG4gIG9uSGlkZT86IChlOiBFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB0cmlnZ2VyIGBvbkhpZGVgIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgZGlzYWJsZWQgZm9yIGRpc2FibGUgUm9vdENsb3NlV3JhcHBlclxuICAgKi9cbiAgcm9vdENsb3NlRGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGV2ZW50IGZvciB0b2dnbGluZyBvdmVybGF5XG4gICAqL1xuICByb290Q2xvc2VFdmVudD86IFJvb3RDbG9zZU9wdGlvbnNbJ2NsaWNrVHJpZ2dlciddO1xuXG4gIC8qKlxuICAgKiBBIHJlbmRlciBwcm9wIHRoYXQgcmV0dXJucyBhbiBvdmVybGF5IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBPdmVybGF5SW5qZWN0ZWRQcm9wcyxcbiAgICBtZXRhOiBPdmVybGF5TWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEJ1aWx0IG9uIHRvcCBvZiBgUG9wcGVyLmpzYCwgdGhlIG92ZXJsYXkgY29tcG9uZW50IGlzXG4gKiBncmVhdCBmb3IgY3VzdG9tIHRvb2x0aXAgb3ZlcmxheXMuXG4gKi9cbmNvbnN0IE92ZXJsYXkgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBPdmVybGF5UHJvcHM+KFxuICAocHJvcHMsIG91dGVyUmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZmxpcCxcbiAgICAgIG9mZnNldCxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGNvbnRhaW5lclBhZGRpbmcsXG4gICAgICBwb3BwZXJDb25maWcgPSB7fSxcbiAgICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgW3Jvb3RFbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEVsZW1lbnQ+KCk7XG4gICAgY29uc3QgW2Fycm93RWxlbWVudCwgYXR0YWNoQXJyb3dSZWZdID0gdXNlQ2FsbGJhY2tSZWY8RWxlbWVudD4oKTtcbiAgICBjb25zdCBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzPEhUTUxFbGVtZW50IHwgbnVsbD4oYXR0YWNoUmVmLCBvdXRlclJlZik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKHByb3BzLmNvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0ID0gdXNlV2FpdEZvckRPTVJlZihwcm9wcy50YXJnZXQpO1xuXG4gICAgY29uc3QgW2V4aXRlZCwgc2V0RXhpdGVkXSA9IHVzZVN0YXRlKCFwcm9wcy5zaG93KTtcblxuICAgIGNvbnN0IHBvcHBlciA9IHVzZVBvcHBlcihcbiAgICAgIHRhcmdldCxcbiAgICAgIHJvb3RFbGVtZW50LFxuICAgICAgbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgZW5hYmxlRXZlbnRzOiAhIXByb3BzLnNob3csXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcgfHwgNSxcbiAgICAgICAgZmxpcCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhcnJvd0VsZW1lbnQsXG4gICAgICAgIHBvcHBlckNvbmZpZyxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgaWYgKGV4aXRlZCkgc2V0RXhpdGVkKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCFwcm9wcy50cmFuc2l0aW9uICYmICFleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVIaWRkZW46IFRyYW5zaXRpb25DYWxsYmFja3NbJ29uRXhpdGVkJ10gPSAoLi4uYXJncykgPT4ge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuXG4gICAgICBpZiAocHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgcHJvcHMub25FeGl0ZWQoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERvbid0IHVuLXJlbmRlciB0aGUgb3ZlcmxheSB3aGlsZSBpdCdzIHRyYW5zaXRpb25pbmcgb3V0LlxuICAgIGNvbnN0IG1vdW50T3ZlcmxheSA9IHByb3BzLnNob3cgfHwgKFRyYW5zaXRpb24gJiYgIWV4aXRlZCk7XG5cbiAgICB1c2VSb290Q2xvc2Uocm9vdEVsZW1lbnQsIHByb3BzLm9uSGlkZSEsIHtcbiAgICAgIGRpc2FibGVkOiAhcHJvcHMucm9vdENsb3NlIHx8IHByb3BzLnJvb3RDbG9zZURpc2FibGVkLFxuICAgICAgY2xpY2tUcmlnZ2VyOiBwcm9wcy5yb290Q2xvc2VFdmVudCxcbiAgICB9KTtcblxuICAgIGlmICghbW91bnRPdmVybGF5KSB7XG4gICAgICAvLyBEb24ndCBib3RoZXIgc2hvd2luZyBhbnl0aGluZyBpZiB3ZSBkb24ndCBoYXZlIHRvLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW4oXG4gICAgICB7XG4gICAgICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICAgICAgc3R5bGU6IHBvcHBlci5zdHlsZXMucG9wcGVyIGFzIGFueSxcbiAgICAgICAgcmVmOiBtZXJnZWRSZWYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwb3BwZXIsXG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgc2hvdzogISFwcm9wcy5zaG93LFxuICAgICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgICAgLi4ucG9wcGVyLmF0dHJpYnV0ZXMuYXJyb3csXG4gICAgICAgICAgc3R5bGU6IHBvcHBlci5zdHlsZXMuYXJyb3cgYXMgYW55LFxuICAgICAgICAgIHJlZjogYXR0YWNoQXJyb3dSZWYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBpZiAoVHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgeyBvbkV4aXQsIG9uRXhpdGluZywgb25FbnRlciwgb25FbnRlcmluZywgb25FbnRlcmVkIH0gPSBwcm9wcztcblxuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgaW49e3Byb3BzLnNob3d9XG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUhpZGRlbn1cbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgY29udGFpbmVyKSA6IG51bGw7XG4gIH0sXG4pO1xuXG5PdmVybGF5LmRpc3BsYXlOYW1lID0gJ092ZXJsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50LCBSZWYgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgUG9ydGFsIGNoaWxkcmVuXG4gICAqIGFwcGVuZGVkIHRvIGl0LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuXG4gIG9uUmVuZGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGNvbnRhaW5lcjogRE9NQ29udGFpbmVyO1xuICBvblJlbmRlcmVkPzogKGVsZW1lbnQ6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IFBvcnRhbCA9ICh7IGNvbnRhaW5lciwgY2hpbGRyZW4sIG9uUmVuZGVyZWQgfTogUG9ydGFsUHJvcHMpID0+IHtcbiAgY29uc3QgcmVzb2x2ZWRDb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKGNvbnRhaW5lciwgb25SZW5kZXJlZCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkQ29udGFpbmVyID8gKFxuICAgIDw+e1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcmVzb2x2ZWRDb250YWluZXIpfTwvPlxuICApIDogbnVsbDtcbn07XG5cblBvcnRhbC5kaXNwbGF5TmFtZSA9ICdQb3J0YWwnO1xuUG9ydGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRLZXkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJDb250ZXh0VHlwZSB7XG4gIG9uU2VsZWN0OiBhbnk7XG4gIGFjdGl2ZUtleTogYW55O1xuICB0cmFuc2l0aW9uOiBhbnk7XG4gIG1vdW50T25FbnRlcjogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdDogYm9vbGVhbjtcbiAgZ2V0Q29udHJvbGxlZElkOiAoa2V5OiBFdmVudEtleSkgPT4gYW55O1xuICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBhbnk7XG59XG5cbmNvbnN0IFRhYkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFRhYkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRleHQ7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHtcbiAgRXZlbnRLZXksXG4gIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50LFxuICBTZWxlY3RDYWxsYmFjayxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJvcHNcbiAgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiwgJ29uU2VsZWN0Jz4ge1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xufVxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIGFzOiBQcm9wVHlwZXMuYW55LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICdhcmlhLWNvbnRyb2xzJzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTmF2SXRlbU9wdGlvbnMge1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWQ/OiBzdHJpbmc7XG4gIHJvbGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZJdGVtKHtcbiAga2V5LFxuICBvbkNsaWNrLFxuICBhY3RpdmUsXG4gIGlkLFxuICByb2xlLFxuICBkaXNhYmxlZCxcbn06IFVzZU5hdkl0ZW1PcHRpb25zKSB7XG4gIGNvbnN0IHBhcmVudE9uU2VsZWN0ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXG4gIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgY29uc3QgcHJvcHMgPSB7fSBhcyBhbnk7XG5cbiAgaWYgKG5hdkNvbnRleHQpIHtcbiAgICBpZiAoIXJvbGUgJiYgbmF2Q29udGV4dC5yb2xlID09PSAndGFibGlzdCcpIHByb3BzLnJvbGUgPSAndGFiJztcblxuICAgIGNvbnN0IGNvbnRleHRDb250cm9sbGVySWQgPSBuYXZDb250ZXh0LmdldENvbnRyb2xsZXJJZChrZXkgPz8gbnVsbCk7XG4gICAgY29uc3QgY29udGV4dENvbnRyb2xsZWRJZCA9IG5hdkNvbnRleHQuZ2V0Q29udHJvbGxlZElkKGtleSA/PyBudWxsKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcm9wc1tkYXRhQXR0cignZXZlbnQta2V5JyldID0ga2V5O1xuXG4gICAgcHJvcHMuaWQgPSBjb250ZXh0Q29udHJvbGxlcklkIHx8IGlkO1xuICAgIHByb3BzWydhcmlhLWNvbnRyb2xzJ10gPSBjb250ZXh0Q29udHJvbGxlZElkO1xuXG4gICAgaXNBY3RpdmUgPVxuICAgICAgYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGwgPyBuYXZDb250ZXh0LmFjdGl2ZUtleSA9PT0ga2V5IDogYWN0aXZlO1xuICB9XG5cbiAgaWYgKHByb3BzLnJvbGUgPT09ICd0YWInKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgcHJvcHNbJ2FyaWEtZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXSA9IGlzQWN0aXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIHByb3BzLm9uQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBvbkNsaWNrPy4oZSk7XG5cbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50T25TZWxlY3QgJiYgIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgcGFyZW50T25TZWxlY3Q/LihrZXksIGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwcm9wcywgeyBpc0FjdGl2ZSB9XSBhcyBjb25zdDtcbn1cblxuY29uc3QgTmF2SXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIE5hdkl0ZW1Qcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIE5hdkl0ZW1Qcm9wcz4oXG4gICh7IGFzOiBDb21wb25lbnQgPSBCdXR0b24sIGV2ZW50S2V5LCBocmVmLCAuLi5vcHRpb25zIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VOYXZJdGVtKHtcbiAgICAgIGtleTogbWFrZUV2ZW50S2V5KGV2ZW50S2V5LCBocmVmKSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJvcHNbZGF0YUF0dHIoJ2FjdGl2ZScpXSA9IG1ldGEuaXNBY3RpdmU7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ub3B0aW9uc30gey4uLnByb3BzfSByZWY9e3JlZn0gLz47XG4gIH0sXG4pO1xuXG5OYXZJdGVtLmRpc3BsYXlOYW1lID0gJ05hdkl0ZW0nO1xuTmF2SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iLCJpbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZvcmNlVXBkYXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUZvcmNlVXBkYXRlJztcbmltcG9ydCB1c2VNZXJnZWRSZWZzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnMnO1xuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQge1xuICBFdmVudEtleSxcbiAgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQsXG4gIFNlbGVjdENhbGxiYWNrLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyLCBkYXRhUHJvcCB9IGZyb20gJy4vRGF0YUtleSc7XG5pbXBvcnQgTmF2SXRlbSwgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH0gZnJvbSAnLi9OYXZJdGVtJztcblxuZXhwb3J0IHR5cGUgeyBVc2VOYXZJdGVtT3B0aW9ucywgTmF2SXRlbVByb3BzIH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQHByaXZhdGUgKi9cbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlByb3BzXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sICdvblNlbGVjdCc+IHtcbiAgYWN0aXZlS2V5PzogRXZlbnRLZXk7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG59XG5cbmNvbnN0IEVWRU5UX0tFWV9BVFRSID0gZGF0YUF0dHIoJ2V2ZW50LWtleScpO1xuXG5jb25zdCBOYXY6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PCdkaXYnLCBOYXZQcm9wcz4gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRWxlbWVudCxcbiAgTmF2UHJvcHNcbj4oXG4gIChcbiAgICB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHJvbGUsXG4gICAgICBvbktleURvd24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmLFxuICApID0+IHtcbiAgICAvLyBBIHJlZiBhbmQgZm9yY2VVcGRhdGUgZm9yIHJlZm9jdXMsIGIvYyB3ZSBvbmx5IHdhbnQgdG8gdHJpZ2dlciB3aGVuIG5lZWRlZFxuICAgIC8vIGFuZCBkb24ndCB3YW50IHRvIHJlc2V0IHRoZSBzZXQgaW4gdGhlIGVmZmVjdFxuICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICBjb25zdCBuZWVkc1JlZm9jdXNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgY29uc3QgcGFyZW50T25TZWxlY3QgPSB1c2VDb250ZXh0KFNlbGVjdGFibGVDb250ZXh0KTtcbiAgICBjb25zdCB0YWJDb250ZXh0ID0gdXNlQ29udGV4dChUYWJDb250ZXh0KTtcblxuICAgIGxldCBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZDtcblxuICAgIGlmICh0YWJDb250ZXh0KSB7XG4gICAgICByb2xlID0gcm9sZSB8fCAndGFibGlzdCc7XG4gICAgICBhY3RpdmVLZXkgPSB0YWJDb250ZXh0LmFjdGl2ZUtleTtcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gZHVwbGljYXRlIHRoZXNlP1xuICAgICAgZ2V0Q29udHJvbGxlZElkID0gdGFiQ29udGV4dC5nZXRDb250cm9sbGVkSWQ7XG4gICAgICBnZXRDb250cm9sbGVySWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0Tm9kZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBnZXROZXh0QWN0aXZlVGFiID0gKG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50TGlzdE5vZGUgPSBsaXN0Tm9kZS5jdXJyZW50O1xuICAgICAgaWYgKCFjdXJyZW50TGlzdE5vZGUpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpdGVtcyA9IHFzYShcbiAgICAgICAgY3VycmVudExpc3ROb2RlLFxuICAgICAgICBgWyR7RVZFTlRfS0VZX0FUVFJ9XTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pYCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNoaWxkID0gY3VycmVudExpc3ROb2RlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAnW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nLFxuICAgICAgKTtcbiAgICAgIGlmICghYWN0aXZlQ2hpbGQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoYWN0aXZlQ2hpbGQpO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIG9mZnNldDtcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gaXRlbXMubGVuZ3RoKSBuZXh0SW5kZXggPSAwO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm4gaXRlbXNbbmV4dEluZGV4XTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGtleTogc3RyaW5nIHwgbnVsbCwgZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBpZiAoa2V5ID09IG51bGwpIHJldHVybjtcbiAgICAgIG9uU2VsZWN0Py4oa2V5LCBldmVudCk7XG4gICAgICBwYXJlbnRPblNlbGVjdD8uKGtleSwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgICAgb25LZXlEb3duPy4oZXZlbnQpO1xuXG4gICAgICBpZiAoIXRhYkNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV4dEFjdGl2ZUNoaWxkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgbmV4dEFjdGl2ZUNoaWxkID0gZ2V0TmV4dEFjdGl2ZVRhYigtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIG5leHRBY3RpdmVDaGlsZCA9IGdldE5leHRBY3RpdmVUYWIoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0QWN0aXZlQ2hpbGQpIHJldHVybjtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlU2VsZWN0KFxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQuZGF0YXNldFtkYXRhUHJvcCgnRXZlbnRLZXknKV0gfHwgbnVsbCxcbiAgICAgICAgZXZlbnQsXG4gICAgICApO1xuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGxpc3ROb2RlLmN1cnJlbnQgJiYgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2hpbGQgPSBsaXN0Tm9kZS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgIGBbJHtFVkVOVF9LRVlfQVRUUn1dW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV1gLFxuICAgICAgICApO1xuXG4gICAgICAgIGFjdGl2ZUNoaWxkPy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGxpc3ROb2RlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIDxOYXZDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIHJvbGUsIC8vIHVzZWQgYnkgTmF2TGluayB0byBkZXRlcm1pbmUgaXQncyByb2xlXG4gICAgICAgICAgICBhY3RpdmVLZXk6IG1ha2VFdmVudEtleShhY3RpdmVLZXkpLFxuICAgICAgICAgICAgZ2V0Q29udHJvbGxlZElkOiBnZXRDb250cm9sbGVkSWQgfHwgbm9vcCxcbiAgICAgICAgICAgIGdldENvbnRyb2xsZXJJZDogZ2V0Q29udHJvbGxlcklkIHx8IG5vb3AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgIHJlZj17bWVyZ2VkUmVmfVxuICAgICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5OYXYuZGlzcGxheU5hbWUgPSAnTmF2Jztcbk5hdi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oTmF2LCB7IEl0ZW06IE5hdkl0ZW0gfSk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBOb29wVHJhbnNpdGlvbih7XG4gIGNoaWxkcmVuLFxuICBpbjogaW5Qcm9wLFxuICBtb3VudE9uRW50ZXIsXG4gIHVubW91bnRPbkV4aXQsXG59OiBUcmFuc2l0aW9uUHJvcHMpIHtcbiAgY29uc3QgaGFzRW50ZXJlZFJlZiA9IHVzZVJlZihpblByb3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluUHJvcCkgaGFzRW50ZXJlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW2luUHJvcF0pO1xuXG4gIGlmIChpblByb3ApIHJldHVybiBjaGlsZHJlbjtcblxuICAvLyBub3QgaW5cbiAgLy9cbiAgLy8gaWYgKCFtb3VudE9uRW50ZXIgJiYgIXVubW91bnRPbkV4aXQpIHtcbiAgLy8gICByZXR1cm4gY2hpbGRyZW47XG4gIC8vIH1cbiAgaWYgKHVubW91bnRPbkV4aXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWhhc0VudGVyZWRSZWYuY3VycmVudCAmJiBtb3VudE9uRW50ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9vcFRyYW5zaXRpb247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi9UYWJDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7XG4gIEV2ZW50S2V5LFxuICBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCxcbiAgVHJhbnNpdGlvbkNhbGxiYWNrcyxcbiAgVHJhbnNpdGlvblR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IE5vb3BUcmFuc2l0aW9uIGZyb20gJy4vTm9vcFRyYW5zaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlBhbmVsUHJvcHNcbiAgZXh0ZW5kcyBUcmFuc2l0aW9uQ2FsbGJhY2tzLFxuICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIGFzOiBSZWFjdC5FbGVtZW50VHlwZTtcbiAgZXZlbnRLZXk/OiBFdmVudEtleTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xuICBtb3VudE9uRW50ZXI/OiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBIGtleSB0aGF0IGFzc29jaWF0ZXMgdGhlIGBUYWJQYW5lbGAgd2l0aCBpdCdzIGNvbnRyb2xsaW5nIGBOYXZMaW5rYC5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgVGFiUGFuZWwsIHRoaXMgaXMgZ2VuZXJhbGx5IGNvbnRyb2xsZWQgYnkgYVxuICAgKiBUYWJDb250YWluZXIuXG4gICAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgYW5pbWF0aW9uIHdoZW4gc2hvd2luZyBvciBoaWRpbmcgYDxUYWJQYW5lbD5gcy4gRGVmYXVsdHMgdG8gYDxGYWRlPmBcbiAgICogYW5pbWF0aW9uLCBlbHNlIHVzZSBgZmFsc2VgIHRvIGRpc2FibGUgb3IgYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwXG4gICAqIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmVsZW1lbnRUeXBlXSksXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlciBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmluZyBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FbnRlcmVkIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRXhpdCBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkV4aXRpbmcgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FeGl0ZWQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgZmlyc3QgXCJlbnRlclwiIHRyYW5zaXRpb24gdG8gbW91bnQgdGhlIHRhYiAoYWRkIGl0IHRvIHRoZSBET00pXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVbm1vdW50IHRoZSB0YWIgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIHZpc2libGVcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBAaWdub3JlICogKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKiAqL1xuICAnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmZ1bmN0aW9uIHVzZVRhYkNvbnRleHQocHJvcHM6IFRhYlBhbmVsUHJvcHMpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGFiQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gcHJvcHM7XG5cbiAgY29uc3QgeyBhY3RpdmVLZXksIGdldENvbnRyb2xsZWRJZCwgZ2V0Q29udHJvbGxlcklkLCAuLi5yZXN0IH0gPSBjb250ZXh0O1xuICBjb25zdCBzaG91bGRUcmFuc2l0aW9uID1cbiAgICBwcm9wcy50cmFuc2l0aW9uICE9PSBmYWxzZSAmJiByZXN0LnRyYW5zaXRpb24gIT09IGZhbHNlO1xuXG4gIGNvbnN0IGtleSA9IG1ha2VFdmVudEtleShwcm9wcy5ldmVudEtleSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICBhY3RpdmU6XG4gICAgICBwcm9wcy5hY3RpdmUgPT0gbnVsbCAmJiBrZXkgIT0gbnVsbFxuICAgICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBrZXlcbiAgICAgICAgOiBwcm9wcy5hY3RpdmUsXG4gICAgaWQ6IGdldENvbnRyb2xsZWRJZChwcm9wcy5ldmVudEtleSEpLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiBnZXRDb250cm9sbGVySWQocHJvcHMuZXZlbnRLZXkhKSxcbiAgICB0cmFuc2l0aW9uOiBzaG91bGRUcmFuc2l0aW9uICYmIChwcm9wcy50cmFuc2l0aW9uIHx8IHJlc3QudHJhbnNpdGlvbiksXG4gICAgbW91bnRPbkVudGVyOlxuICAgICAgcHJvcHMubW91bnRPbkVudGVyICE9IG51bGwgPyBwcm9wcy5tb3VudE9uRW50ZXIgOiByZXN0Lm1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0OlxuICAgICAgcHJvcHMudW5tb3VudE9uRXhpdCAhPSBudWxsID8gcHJvcHMudW5tb3VudE9uRXhpdCA6IHJlc3QudW5tb3VudE9uRXhpdCxcbiAgfTtcbn1cblxuY29uc3QgVGFiUGFuZWw6IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PFxuICAnZGl2JyxcbiAgVGFiUGFuZWxQcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIFRhYlBhbmVsUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb25FbnRlcixcbiAgICBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZCxcbiAgICBvbkV4aXQsXG4gICAgb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkLFxuICAgIG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0LFxuICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24gPSBOb29wVHJhbnNpdGlvbixcbiAgICAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4gICAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAgIGV2ZW50S2V5OiBfLFxuICAgIC4uLnJlc3RcbiAgfSA9IHVzZVRhYkNvbnRleHQocHJvcHMpO1xuXG4gIGlmICghYWN0aXZlICYmICFUcmFuc2l0aW9uICYmIHVubW91bnRPbkV4aXQpIHJldHVybiBudWxsO1xuXG4gIGxldCBwYW5lID0gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXshYWN0aXZlfVxuICAgICAgYXJpYS1oaWRkZW49eyFhY3RpdmV9XG4gICAgLz5cbiAgKTtcblxuICBpZiAoVHJhbnNpdGlvbikge1xuICAgIHBhbmUgPSAoXG4gICAgICA8VHJhbnNpdGlvblxuICAgICAgICBpbj17YWN0aXZlfVxuICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICBvbkVudGVyaW5nPXtvbkVudGVyaW5nfVxuICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgIG9uRXhpdGluZz17b25FeGl0aW5nfVxuICAgICAgICBvbkV4aXRlZD17b25FeGl0ZWR9XG4gICAgICAgIG1vdW50T25FbnRlcj17bW91bnRPbkVudGVyfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt1bm1vdW50T25FeGl0fVxuICAgICAgPlxuICAgICAgICB7cGFuZX1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICApO1xuICB9XG4gIC8vIFdlIHByb3ZpZGUgYW4gZW1wdHkgdGhlIFRhYkNvbnRleHQgc28gYDxOYXY+YHMgaW4gYDxUYWJQYW5lbD5gcyBkb24ndFxuICAvLyBjb25mbGljdCB3aXRoIHRoZSB0b3AgbGV2ZWwgb25lLlxuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICAgIHtwYW5lfVxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RhYkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59KTtcblxuVGFiUGFuZWwuZGlzcGxheU5hbWUgPSAnVGFiUGFuZWwnO1xuVGFiUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lbDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB7IHVzZVNTUlNhZmVJZCB9IGZyb20gJy4vc3NyJztcblxuaW1wb3J0IFRhYkNvbnRleHQsIHsgVGFiQ29udGV4dFR5cGUgfSBmcm9tICcuL1RhYkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHsgRXZlbnRLZXksIFNlbGVjdENhbGxiYWNrLCBUcmFuc2l0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFRhYlBhbmVsLCB7IFRhYlBhbmVsUHJvcHMgfSBmcm9tICcuL1RhYlBhbmVsJztcblxuZXhwb3J0IHR5cGUgeyBUYWJQYW5lbFByb3BzIH07XG5leHBvcnQgaW50ZXJmYWNlIFRhYnNQcm9wcyBleHRlbmRzIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHVua25vd24+IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb24/OiBUcmFuc2l0aW9uVHlwZTtcbiAgbW91bnRPbkVudGVyPzogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdD86IGJvb2xlYW47XG4gIGdlbmVyYXRlQ2hpbGRJZD86IChldmVudEtleTogRXZlbnRLZXksIHR5cGU6ICd0YWInIHwgJ3BhbmUnKSA9PiBzdHJpbmc7XG4gIG9uU2VsZWN0PzogU2VsZWN0Q2FsbGJhY2s7XG4gIGFjdGl2ZUtleT86IEV2ZW50S2V5O1xuICBkZWZhdWx0QWN0aXZlS2V5PzogRXZlbnRLZXk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTZXRzIGEgZGVmYXVsdCBhbmltYXRpb24gc3RyYXRlZ3kgZm9yIGFsbCBjaGlsZHJlbiBgPFRhYlBhbmU+YHMuXG4gICAqIFVzZSBhIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHR5cGUge3tUcmFuc2l0aW9uIHwgZmFsc2V9fVxuICAgKiBAZGVmYXVsdCB7RmFkZX1cbiAgICovXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKSxcbiAgICBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIF0pLFxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgZmlyc3QgXCJlbnRlclwiIHRyYW5zaXRpb24gdG8gbW91bnQgdGFicyAoYWRkIHRoZW0gdG8gdGhlIERPTSlcbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGFicyAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiB0aGV5IGFyZSBubyBsb25nZXIgdmlzaWJsZVxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBgZXZlbnRLZXlgIGFuZCBgdHlwZWAgYW5kIHJldHVybnMgYSB1bmlxdWUgaWQgZm9yXG4gICAqIGNoaWxkIHRhYiBgPE5hdkl0ZW0+YHMgYW5kIGA8VGFiUGFuZT5gcy4gVGhlIGZ1bmN0aW9uIF9tdXN0XyBiZSBhIHB1cmVcbiAgICogZnVuY3Rpb24sIG1lYW5pbmcgaXQgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIF9zYW1lXyBpZCBmb3IgdGhlIHNhbWUgc2V0XG4gICAqIG9mIGlucHV0cy4gVGhlIGRlZmF1bHQgdmFsdWUgcmVxdWlyZXMgdGhhdCBhbiBgaWRgIHRvIGJlIHNldCBmb3IgdGhlXG4gICAqIGA8VGFiQ29udGFpbmVyPmAuXG4gICAqXG4gICAqIFRoZSBgdHlwZWAgYXJndW1lbnQgd2lsbCBlaXRoZXIgYmUgYFwidGFiXCJgIG9yIGBcInBhbmVcImAuXG4gICAqXG4gICAqIEBkZWZhdWx0VmFsdWUgKGV2ZW50S2V5LCB0eXBlKSA9PiBgJHtwcm9wcy5pZH0tJHt0eXBlfS0ke2V2ZW50S2V5fWBcbiAgICovXG4gIGdlbmVyYXRlQ2hpbGRJZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIHRhYiBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBhY3RpdmVLZXlcbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGBldmVudEtleWAgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uU2VsZWN0XG4gICAqL1xuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbmNvbnN0IFRhYnMgPSAocHJvcHM6IFRhYnNQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQ6IHVzZXJJZCxcbiAgICBnZW5lcmF0ZUNoaWxkSWQ6IGdlbmVyYXRlQ3VzdG9tQ2hpbGRJZCxcbiAgICBvblNlbGVjdDogcHJvcHNPblNlbGVjdCxcbiAgICBhY3RpdmVLZXk6IHByb3BzQWN0aXZlS2V5LFxuICAgIGRlZmF1bHRBY3RpdmVLZXksXG4gICAgdHJhbnNpdGlvbixcbiAgICBtb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdCxcbiAgICBjaGlsZHJlbixcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFthY3RpdmVLZXksIG9uU2VsZWN0XSA9IHVzZVVuY29udHJvbGxlZFByb3AoXG4gICAgcHJvcHNBY3RpdmVLZXksXG4gICAgZGVmYXVsdEFjdGl2ZUtleSxcbiAgICBwcm9wc09uU2VsZWN0LFxuICApO1xuXG4gIGNvbnN0IGlkID0gdXNlU1NSU2FmZUlkKHVzZXJJZCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVDaGlsZElkID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2VuZXJhdGVDdXN0b21DaGlsZElkIHx8XG4gICAgICAoKGtleTogRXZlbnRLZXksIHR5cGU6IHN0cmluZykgPT4gKGlkID8gYCR7aWR9LSR7dHlwZX0tJHtrZXl9YCA6IG51bGwpKSxcbiAgICBbaWQsIGdlbmVyYXRlQ3VzdG9tQ2hpbGRJZF0sXG4gICk7XG5cbiAgY29uc3QgdGFiQ29udGV4dDogVGFiQ29udGV4dFR5cGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBvblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBtb3VudE9uRW50ZXI6IG1vdW50T25FbnRlciB8fCBmYWxzZSxcbiAgICAgIHVubW91bnRPbkV4aXQ6IHVubW91bnRPbkV4aXQgfHwgZmFsc2UsXG4gICAgICBnZXRDb250cm9sbGVkSWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBnZW5lcmF0ZUNoaWxkSWQoa2V5LCAndGFicGFuZScpLFxuICAgICAgZ2V0Q29udHJvbGxlcklkOiAoa2V5OiBFdmVudEtleSkgPT4gZ2VuZXJhdGVDaGlsZElkKGtleSwgJ3RhYicpLFxuICAgIH0pLFxuICAgIFtcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5LFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIG1vdW50T25FbnRlcixcbiAgICAgIHVubW91bnRPbkV4aXQsXG4gICAgICBnZW5lcmF0ZUNoaWxkSWQsXG4gICAgXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0YWJDb250ZXh0fT5cbiAgICAgIDxTZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17b25TZWxlY3QgfHwgbnVsbH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UYWJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuVGFicy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UYWJzLlBhbmVsID0gVGFiUGFuZWw7XG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25NZW51IH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25Ub2dnbGUgfSBmcm9tICcuL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCB7IHVzZURyb3Bkb3duSXRlbSB9IGZyb20gJy4vRHJvcGRvd25JdGVtJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vUG9ydGFsJztcbmltcG9ydCB1c2VSb290Q2xvc2UgZnJvbSAnLi91c2VSb290Q2xvc2UnO1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG5pbXBvcnQgTmF2SXRlbSwgeyB1c2VOYXZJdGVtIH0gZnJvbSAnLi9OYXZJdGVtJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJztcbmltcG9ydCBUYWJQYW5lbCBmcm9tICcuL1RhYlBhbmVsJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uLFxuICBEcm9wZG93bixcbiAgdXNlRHJvcGRvd25NZW51LFxuICB1c2VEcm9wZG93blRvZ2dsZSxcbiAgdXNlRHJvcGRvd25JdGVtLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIHVzZU5hdkl0ZW0sXG4gIE1vZGFsLFxuICBPdmVybGF5LFxuICBQb3J0YWwsXG4gIHVzZVJvb3RDbG9zZSxcbiAgVGFicyxcbiAgVGFiUGFuZWwsXG59O1xuXG5leHBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHR5cGUge1xuICBEcm9wZG93blByb3BzLFxuICBEcm9wZG93bk1lbnVQcm9wcyxcbiAgVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gIFVzZURyb3Bkb3duTWVudU9wdGlvbnMsXG4gIERyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gIERyb3Bkb3duSXRlbVByb3BzLFxufSBmcm9tICcuL0Ryb3Bkb3duJztcbmV4cG9ydCB0eXBlIHsgTmF2SXRlbVByb3BzLCBVc2VOYXZJdGVtT3B0aW9ucywgTmF2UHJvcHMgfSBmcm9tICcuL05hdic7XG5leHBvcnQgdHlwZSB7IE1vZGFsUHJvcHMgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB0eXBlIHsgT3ZlcmxheVByb3BzIH0gZnJvbSAnLi9PdmVybGF5JztcbmV4cG9ydCB0eXBlIHsgUG9ydGFsUHJvcHMgfSBmcm9tICcuL1BvcnRhbCc7XG5leHBvcnQgdHlwZSB7IFRhYnNQcm9wcywgVGFiUGFuZWxQcm9wcyB9IGZyb20gJy4vVGFicyc7XG4iLCJpbXBvcnQgeyBVc2VQb3BwZXJPcHRpb25zLCBPZmZzZXQsIFBsYWNlbWVudCwgTW9kaWZpZXJzIH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSBDb25maWcgPSB7XG4gIGZsaXA/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIGFsaWduRW5kPzogYm9vbGVhbjtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBudW1iZXI7XG4gIGFycm93RWxlbWVudD86IEVsZW1lbnQgfCBudWxsO1xuICBlbmFibGVFdmVudHM/OiBib29sZWFuO1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgcG9wcGVyQ29uZmlnPzogVXNlUG9wcGVyT3B0aW9ucztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyTWFwKG1vZGlmaWVyczogTW9kaWZpZXJzIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHJlc3VsdDogTW9kaWZpZXJzID0ge307XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzIHx8IHJlc3VsdDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgbW9kaWZpZXJzPy5mb3JFYWNoKChtKSA9PiB7XG4gICAgcmVzdWx0W20ubmFtZSFdID0gbTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyQXJyYXkobWFwOiBNb2RpZmllcnMgfCB1bmRlZmluZWQgPSB7fSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXApKSByZXR1cm4gbWFwO1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5tYXAoKGspID0+IHtcbiAgICBtYXBba10ubmFtZSA9IGs7XG4gICAgcmV0dXJuIG1hcFtrXTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcoe1xuICBlbmFibGVkLFxuICBlbmFibGVFdmVudHMsXG4gIHBsYWNlbWVudCxcbiAgZmxpcCxcbiAgb2Zmc2V0LFxuICBmaXhlZCxcbiAgY29udGFpbmVyUGFkZGluZyxcbiAgYXJyb3dFbGVtZW50LFxuICBwb3BwZXJDb25maWcgPSB7fSxcbn06IENvbmZpZyk6IFVzZVBvcHBlck9wdGlvbnMge1xuICBjb25zdCBtb2RpZmllcnMgPSB0b01vZGlmaWVyTWFwKHBvcHBlckNvbmZpZy5tb2RpZmllcnMpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucG9wcGVyQ29uZmlnLFxuICAgIHBsYWNlbWVudCxcbiAgICBlbmFibGVkLFxuICAgIHN0cmF0ZWd5OiBmaXhlZCA/ICdmaXhlZCcgOiBwb3BwZXJDb25maWcuc3RyYXRlZ3ksXG4gICAgbW9kaWZpZXJzOiB0b01vZGlmaWVyQXJyYXkoe1xuICAgICAgLi4ubW9kaWZpZXJzLFxuICAgICAgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlRXZlbnRzLFxuICAgICAgfSxcbiAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAuLi5tb2RpZmllcnMucHJldmVudE92ZXJmbG93LFxuICAgICAgICBvcHRpb25zOiBjb250YWluZXJQYWRkaW5nXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgICAgIC4uLm1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3c/Lm9wdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBtb2RpZmllcnMucHJldmVudE92ZXJmbG93Py5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIC4uLm1vZGlmaWVycy5vZmZzZXQ/Lm9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgLi4ubW9kaWZpZXJzLmFycm93LFxuICAgICAgICBlbmFibGVkOiAhIWFycm93RWxlbWVudCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLm1vZGlmaWVycy5hcnJvdz8ub3B0aW9ucyxcbiAgICAgICAgICBlbGVtZW50OiBhcnJvd0VsZW1lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmxpcDoge1xuICAgICAgICBlbmFibGVkOiAhIWZsaXAsXG4gICAgICAgIC4uLm1vZGlmaWVycy5mbGlwLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbn1cbiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBmaW5kKGl0ZXIsIHRhciwga2V5KSB7XG5cdGZvciAoa2V5IG9mIGl0ZXIua2V5cygpKSB7XG5cdFx0aWYgKGRlcXVhbChrZXksIHRhcikpIHJldHVybiBrZXk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5cbmZ1bmN0aW9uIHVzZVNhZmVTdGF0ZShzdGF0ZSkge1xuICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICByZXR1cm4gW3N0YXRlWzBdLCB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgaWYgKCFpc01vdW50ZWQoKSkgcmV0dXJuO1xuICAgIHJldHVybiBzdGF0ZVsxXShuZXh0U3RhdGUpO1xuICB9LCBbaXNNb3VudGVkLCBzdGF0ZVsxXV0pXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2FmZVN0YXRlOyIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgYXJyb3cgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdyc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGZsaXAgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwJztcbmltcG9ydCBoaWRlIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZSc7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0JztcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93JztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvZW51bXMnO1xuaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1iYXNlJztcblxuLy8gRm9yIHRoZSBjb21tb24gSlMgYnVpbGQgd2Ugd2lsbCB0dXJuIHRoaXMgZmlsZSBpbnRvIGEgYnVuZGxlIHdpdGggbm8gaW1wb3J0cy5cbi8vIFRoaXMgaXMgYi9jIHRoZSBQb3BwZXIgbGliIGlzIGFsbCBlc20gZmlsZXMsIGFuZCB3b3VsZCBicmVhayBpbiBhIGNvbW1vbiBqcyBvbmx5IGVudmlyb25tZW50XG5leHBvcnQgY29uc3QgY3JlYXRlUG9wcGVyID0gcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogW1xuICAgIGhpZGUsXG4gICAgcG9wcGVyT2Zmc2V0cyxcbiAgICBjb21wdXRlU3R5bGVzLFxuICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIG9mZnNldCxcbiAgICBmbGlwLFxuICAgIHByZXZlbnRPdmVyZmxvdyxcbiAgICBhcnJvdyxcbiAgXSxcbn0pO1xuXG5leHBvcnQgeyBwbGFjZW1lbnRzIH07XG4iLCJpbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gJ2RlcXVhbCc7XG5pbXBvcnQgdXNlU2FmZVN0YXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVNhZmVTdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tICcuL3BvcHBlcic7XG5cbmNvbnN0IGRpc2FibGVkQXBwbHlTdHlsZXNNb2RpZmllciA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogZmFsc2UsXG4gIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG59O1xuXG4vLyB1bnRpbCBkb2NqcyBzdXBwb3J0cyB0eXBlIGV4cG9ydHMuLi5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+ID0gUG9wcGVyLk1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+O1xuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IFBvcHBlci5PcHRpb25zO1xuZXhwb3J0IHR5cGUgSW5zdGFuY2UgPSBQb3BwZXIuSW5zdGFuY2U7XG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBQb3BwZXIuUGxhY2VtZW50O1xuZXhwb3J0IHR5cGUgVmlydHVhbEVsZW1lbnQgPSBQb3BwZXIuVmlydHVhbEVsZW1lbnQ7XG5leHBvcnQgdHlwZSBTdGF0ZSA9IFBvcHBlci5TdGF0ZTtcblxuZXhwb3J0IHR5cGUgT2Zmc2V0VmFsdWUgPSBbXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG5dO1xuZXhwb3J0IHR5cGUgT2Zmc2V0RnVuY3Rpb24gPSAoZGV0YWlsczoge1xuICBwb3BwZXI6IFBvcHBlci5SZWN0O1xuICByZWZlcmVuY2U6IFBvcHBlci5SZWN0O1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbn0pID0+IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBPZmZzZXQgPSBPZmZzZXRGdW5jdGlvbiB8IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBNb2RpZmllck1hcCA9IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5leHBvcnQgdHlwZSBNb2RpZmllcnMgPVxuICB8IFBvcHBlci5PcHRpb25zWydtb2RpZmllcnMnXVxuICB8IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5cbmV4cG9ydCB0eXBlIFVzZVBvcHBlck9wdGlvbnMgPSBPbWl0PFxuICBPcHRpb25zLFxuICAnbW9kaWZpZXJzJyB8ICdwbGFjZW1lbnQnIHwgJ3N0cmF0ZWd5J1xuPiAmIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IE9wdGlvbnNbJ3BsYWNlbWVudCddO1xuICBzdHJhdGVneT86IE9wdGlvbnNbJ3N0cmF0ZWd5J107XG4gIG1vZGlmaWVycz86IE9wdGlvbnNbJ21vZGlmaWVycyddO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQb3BwZXJTdGF0ZSB7XG4gIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICB1cGRhdGU6ICgpID0+IHZvaWQ7XG4gIGZvcmNlVXBkYXRlOiAoKSA9PiB2b2lkO1xuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PjtcbiAgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+PjtcbiAgc3RhdGU/OiBTdGF0ZTtcbn1cblxuY29uc3QgYXJpYURlc2NyaWJlZEJ5TW9kaWZpZXI6IE1vZGlmaWVyPCdhcmlhRGVzY3JpYmVkQnknLCB1bmRlZmluZWQ+ID0ge1xuICBuYW1lOiAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgZWZmZWN0OiAoeyBzdGF0ZSB9KSA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHBvcHBlciB9ID0gc3RhdGUuZWxlbWVudHM7XG4gICAgaWYgKCdyZW1vdmVBdHRyaWJ1dGUnIGluIHJlZmVyZW5jZSkge1xuICAgICAgY29uc3QgaWRzID0gKHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSB8fCAnJylcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLmZpbHRlcigoaWQpID0+IGlkLnRyaW0oKSAhPT0gcG9wcGVyLmlkKTtcblxuICAgICAgaWYgKCFpZHMubGVuZ3RoKSByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBlbHNlIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpZHMuam9pbignLCcpKTtcbiAgICB9XG4gIH0sXG4gIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gc3RhdGUuZWxlbWVudHM7XG5cbiAgICBjb25zdCByb2xlID0gcG9wcGVyLmdldEF0dHJpYnV0ZSgncm9sZScpPy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHBvcHBlci5pZCAmJiByb2xlID09PSAndG9vbHRpcCcgJiYgJ3NldEF0dHJpYnV0ZScgaW4gcmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBpZHMgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBpZiAoaWRzICYmIGlkcy5zcGxpdCgnLCcpLmluZGV4T2YocG9wcGVyLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWZlcmVuY2Uuc2V0QXR0cmlidXRlKFxuICAgICAgICAnYXJpYS1kZXNjcmliZWRieScsXG4gICAgICAgIGlkcyA/IGAke2lkc30sJHtwb3BwZXIuaWR9YCA6IHBvcHBlci5pZCxcbiAgICAgICk7XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgRU1QVFlfTU9ESUZJRVJTID0gW10gYXMgYW55O1xuLyoqXG4gKiBQb3NpdGlvbiBhbiBlbGVtZW50IHJlbGF0aXZlIHNvbWUgcmVmZXJlbmNlIGVsZW1lbnQgdXNpbmcgUG9wcGVyLmpzXG4gKlxuICogQHBhcmFtIHJlZmVyZW5jZUVsZW1lbnRcbiAqIEBwYXJhbSBwb3BwZXJFbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdD19ICAgICBvcHRpb25zLm1vZGlmaWVycyBQb3BwZXIuanMgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSAgICBvcHRpb25zLmVuYWJsZWQgdG9nZ2xlIHRoZSBwb3BwZXIgZnVuY3Rpb25hbGl0eSBvbi9vZmZcbiAqIEBwYXJhbSB7c3RyaW5nPX0gICAgIG9wdGlvbnMucGxhY2VtZW50IFRoZSBwb3BwZXIgZWxlbWVudCBwbGFjZW1lbnQgcmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZz19ICAgICBvcHRpb25zLnN0cmF0ZWd5IHRoZSBwb3NpdGlvbmluZyBzdHJhdGVneVxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vbkNyZWF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSAgIG9wdGlvbnMub25VcGRhdGUgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkXG4gKlxuICogQHJldHVybnMge1VzZVBvcHBlclN0YXRlfSBUaGUgcG9wcGVyIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHVzZVBvcHBlcihcbiAgcmVmZXJlbmNlRWxlbWVudDogVmlydHVhbEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBwb3BwZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHtcbiAgICBlbmFibGVkID0gdHJ1ZSxcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzID0gRU1QVFlfTU9ESUZJRVJTLFxuICAgIC4uLmNvbmZpZ1xuICB9OiBVc2VQb3BwZXJPcHRpb25zID0ge30sXG4pOiBVc2VQb3BwZXJTdGF0ZSB7XG4gIGNvbnN0IHByZXZNb2RpZmllcnMgPSB1c2VSZWY8VXNlUG9wcGVyT3B0aW9uc1snbW9kaWZpZXJzJ10+KG1vZGlmaWVycyk7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlUmVmID0gdXNlUmVmPEluc3RhbmNlPigpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50Py51cGRhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQ/LmZvcmNlVXBkYXRlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbcG9wcGVyU3RhdGUsIHNldFN0YXRlXSA9IHVzZVNhZmVTdGF0ZShcbiAgICB1c2VTdGF0ZTxVc2VQb3BwZXJTdGF0ZT4oe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgdXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBwb3BwZXI6IHt9LFxuICAgICAgICBhcnJvdzoge30sXG4gICAgICB9LFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IHVwZGF0ZU1vZGlmaWVyID0gdXNlTWVtbzxNb2RpZmllcjwndXBkYXRlU3RhdGVNb2RpZmllcicsIGFueT4+KFxuICAgICgpID0+ICh7XG4gICAgICBuYW1lOiAndXBkYXRlU3RhdGVNb2RpZmllcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICd3cml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbjogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXM6IFVzZVBvcHBlclN0YXRlWydzdHlsZXMnXSA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBVc2VQb3BwZXJTdGF0ZVsnYXR0cmlidXRlcyddID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBzdHlsZXNbZWxlbWVudF0gPSBzdGF0ZS5zdHlsZXNbZWxlbWVudF07XG4gICAgICAgICAgYXR0cmlidXRlc1tlbGVtZW50XSA9IHN0YXRlLmF0dHJpYnV0ZXNbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICB1cGRhdGUsXG4gICAgICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbdXBkYXRlLCBmb3JjZVVwZGF0ZSwgc2V0U3RhdGVdLFxuICApO1xuXG4gIGNvbnN0IG5leHRNb2RpZmllcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWRlcXVhbChwcmV2TW9kaWZpZXJzLmN1cnJlbnQsIG1vZGlmaWVycykpIHtcbiAgICAgIHByZXZNb2RpZmllcnMuY3VycmVudCA9IG1vZGlmaWVycztcbiAgICB9XG4gICAgcmV0dXJuIHByZXZNb2RpZmllcnMuY3VycmVudCE7XG4gIH0sIFttb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCB8fCAhZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5zZXRPcHRpb25zKHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLm5leHRNb2RpZmllcnMsXG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyLFxuICAgICAgICBkaXNhYmxlZEFwcGx5U3R5bGVzTW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0pO1xuICB9LCBbc3RyYXRlZ3ksIHBsYWNlbWVudCwgdXBkYXRlTW9kaWZpZXIsIGVuYWJsZWQsIG5leHRNb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCByZWZlcmVuY2VFbGVtZW50ID09IG51bGwgfHwgcG9wcGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFsuLi5uZXh0TW9kaWZpZXJzLCBhcmlhRGVzY3JpYmVkQnlNb2RpZmllciwgdXBkYXRlTW9kaWZpZXJdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgICAgLi4ucyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICBzdHlsZXM6IHsgcG9wcGVyOiB7fSB9LFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBUaGlzIGlzIG9ubHkgcnVuIG9uY2UgdG8gX2NyZWF0ZV8gdGhlIHBvcHBlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2VuYWJsZWQsIHJlZmVyZW5jZUVsZW1lbnQsIHBvcHBlckVsZW1lbnRdKTtcblxuICByZXR1cm4gcG9wcGVyU3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBvcHBlcjtcbiIsImltcG9ydCBjb250YWlucyBmcm9tICdkb20taGVscGVycy9jb250YWlucyc7XG5pbXBvcnQgbGlzdGVuIGZyb20gJ2RvbS1oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxuY29uc3QgZXNjYXBlS2V5Q29kZSA9IDI3O1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50cyA9IHtcbiAgW0sgaW4ga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwXTogR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwW0tdIGV4dGVuZHMgTW91c2VFdmVudFxuICAgID8gS1xuICAgIDogbmV2ZXI7XG59W2tleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcF07XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY29uc3QgZ2V0UmVmVGFyZ2V0ID0gKFxuICByZWY6IFJlYWN0LlJlZk9iamVjdDxFbGVtZW50PiB8IEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuKSA9PiByZWYgJiYgKCdjdXJyZW50JyBpbiByZWYgPyByZWYuY3VycmVudCA6IHJlZik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdENsb3NlT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2xpY2tUcmlnZ2VyPzogTW91c2VFdmVudHM7XG59XG4vKipcbiAqIFRoZSBgdXNlUm9vdENsb3NlYCBob29rIHJlZ2lzdGVycyB5b3VyIGNhbGxiYWNrIG9uIHRoZSBkb2N1bWVudFxuICogd2hlbiByZW5kZXJlZC4gUG93ZXJzIHRoZSBgPE92ZXJsYXkvPmAgY29tcG9uZW50LiBUaGlzIGlzIHVzZWQgYWNoaWV2ZSBtb2RhbFxuICogc3R5bGUgYmVoYXZpb3Igd2hlcmUgeW91ciBjYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciB0cmllcyB0b1xuICogaW50ZXJhY3Qgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgb3IgaGl0cyB0aGUgYGVzY2Aga2V5LlxuICpcbiAqIEBwYXJhbSB7UmVmPEhUTUxFbGVtZW50PnwgSFRNTEVsZW1lbnR9IHJlZiAgVGhlIGVsZW1lbnQgYm91bmRhcnlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUm9vdENsb3NlXG4gKiBAcGFyYW0ge29iamVjdD19ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLmRpc2FibGVkXG4gKiBAcGFyYW0ge3N0cmluZz19ICBvcHRpb25zLmNsaWNrVHJpZ2dlciBUaGUgRE9NIGV2ZW50IG5hbWUgKGNsaWNrLCBtb3VzZWRvd24sIGV0YykgdG8gYXR0YWNoIGxpc3RlbmVycyBvblxuICovXG5mdW5jdGlvbiB1c2VSb290Q2xvc2UoXG4gIHJlZjogUmVhY3QuUmVmT2JqZWN0PEVsZW1lbnQ+IHwgRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9uUm9vdENsb3NlOiAoZTogRXZlbnQpID0+IHZvaWQsXG4gIHsgZGlzYWJsZWQsIGNsaWNrVHJpZ2dlciA9ICdjbGljaycgfTogUm9vdENsb3NlT3B0aW9ucyA9IHt9LFxuKSB7XG4gIGNvbnN0IHByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uQ2xvc2UgPSBvblJvb3RDbG9zZSB8fCBub29wO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlQ2FwdHVyZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZ2V0UmVmVGFyZ2V0KHJlZik7XG5cbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICEhY3VycmVudFRhcmdldCxcbiAgICAgICAgJ1Jvb3RDbG9zZSBjYXB0dXJlZCBhIGNsb3NlIGV2ZW50IGJ1dCBkb2VzIG5vdCBoYXZlIGEgcmVmIHRvIGNvbXBhcmUgaXQgdG8uICcgK1xuICAgICAgICAgICd1c2VSb290Q2xvc2UoKSwgc2hvdWxkIGJlIHBhc3NlZCBhIHJlZiB0aGF0IHJlc29sdmVzIHRvIGEgRE9NIG5vZGUnLFxuICAgICAgKTtcblxuICAgICAgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQgPVxuICAgICAgICAhY3VycmVudFRhcmdldCB8fFxuICAgICAgICBpc01vZGlmaWVkRXZlbnQoZSkgfHxcbiAgICAgICAgIWlzTGVmdENsaWNrRXZlbnQoZSkgfHxcbiAgICAgICAgISFjb250YWlucyhjdXJyZW50VGFyZ2V0LCBlLnRhcmdldCk7XG4gICAgfSxcbiAgICBbcmVmXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZSA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5VXAgPSB1c2VFdmVudENhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gZXNjYXBlS2V5Q29kZSkge1xuICAgICAgb25DbG9zZShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlZiA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgZXZlbnQgdG8gYXZvaWQgdHJpZ2dlcmluZyBoYW5kbGVycyBpbW1lZGlhdGVseVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjAwNzRcbiAgICBsZXQgY3VycmVudEV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG4gICAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudChnZXRSZWZUYXJnZXQocmVmKSEpO1xuXG4gICAgLy8gVXNlIGNhcHR1cmUgZm9yIHRoaXMgbGlzdGVuZXIgc28gaXQgZmlyZXMgYmVmb3JlIFJlYWN0J3MgbGlzdGVuZXIsIHRvXG4gICAgLy8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIGluIHRoZSBjb250YWlucygpIGNoZWNrIGJlbG93IGlmIHRoZSB0YXJnZXQgRE9NXG4gICAgLy8gZWxlbWVudCBpcyByZW1vdmVkIGluIHRoZSBSZWFjdCBtb3VzZSBjYWxsYmFjay5cbiAgICBjb25zdCByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lciA9IGxpc3RlbihcbiAgICAgIGRvYyBhcyBhbnksXG4gICAgICBjbGlja1RyaWdnZXIsXG4gICAgICBoYW5kbGVNb3VzZUNhcHR1cmUsXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBjb25zdCByZW1vdmVNb3VzZUxpc3RlbmVyID0gbGlzdGVuKGRvYyBhcyBhbnksIGNsaWNrVHJpZ2dlciwgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVNb3VzZShlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUtleXVwTGlzdGVuZXIgPSBsaXN0ZW4oZG9jIGFzIGFueSwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVLZXlVcChlKTtcbiAgICB9KTtcblxuICAgIGxldCBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW10gYXMgQXJyYXk8KCkgPT4gdm9pZD47XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXS5zbGljZVxuICAgICAgICAuY2FsbChkb2MuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLm1hcCgoZWwpID0+IGxpc3RlbihlbCwgJ21vdXNlbW92ZScsIG5vb3ApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVtb3ZlTW91c2VDYXB0dXJlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZUtleXVwTGlzdGVuZXIoKTtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMuZm9yRWFjaCgocmVtb3ZlKSA9PiByZW1vdmUoKSk7XG4gICAgfTtcbiAgfSwgW1xuICAgIHJlZixcbiAgICBkaXNhYmxlZCxcbiAgICBjbGlja1RyaWdnZXIsXG4gICAgaGFuZGxlTW91c2VDYXB0dXJlLFxuICAgIGhhbmRsZU1vdXNlLFxuICAgIGhhbmRsZUtleVVwLFxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUm9vdENsb3NlO1xuIiwiXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG4gIFxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHR0aXRsZTogJ0FuaW1hdGlvbiBhbmQgVHJhbnNpdGlvbnMnXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwidHJhbnNpdGlvbnNcIixcbiAgXCJpZFwiOiBcInRyYW5zaXRpb25zXCIsXG4gIFwiaXNEb2NzSG9tZVBhZ2VcIjogZmFsc2UsXG4gIFwidGl0bGVcIjogXCJBbmltYXRpb24gYW5kIFRyYW5zaXRpb25zXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbmltYXRpb24gb2YgY29tcG9uZW50cyBpcyBoYW5kbGVkIGJ5IHRyYW5zaXRpb24gcHJvcHMuIElmXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy90cmFuc2l0aW9ucy5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiLlwiLFxuICBcInNsdWdcIjogXCIvdHJhbnNpdGlvbnNcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvdWkvdHJhbnNpdGlvbnNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQW5pbWF0aW9uIGFuZCBUcmFuc2l0aW9uc1wiXG4gIH0sXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZVJvb3RDbG9zZVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3VzZVJvb3RDbG9zZVwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlNlcnZlciBTaWRlIFJlbmRlcmluZ1wiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL1NTUlwiXG4gIH1cbn07XG4gIC8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgSW1wb3J0Q29udGV4dCwgeyBhbGxWYWx1ZXMgfSBmcm9tIFwiQHRoZW1lL0ltcG9ydENvbnRleHRcIjtcbmV4cG9ydCBjb25zdCB0b2MgPSBbXTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHA+e2BBbmltYXRpb24gb2YgY29tcG9uZW50cyBpcyBoYW5kbGVkIGJ5IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRyYW5zaXRpb25gfTwvaW5saW5lQ29kZT57YCBwcm9wcy4gSWZcbmEgY29tcG9uZW50IGFjY2VwdHMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cmFuc2l0aW9uYH08L2lubGluZUNvZGU+e2AgcHJvcCB5b3UgY2FuIHByb3ZpZGVcbmEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIlxuICAgICAgfX0+e2ByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYH08L2E+e2BcbmNvbXBhdGlibGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgVHJhbnNpdGlvbmB9PC9pbmxpbmVDb2RlPntgIGNvbXBvbmVudCBhbmQgaXQgd2lsbCB3b3JrLiBGZWVsIGZyZWUgdG8gdXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YENTU1RyYW5zaXRpb25gfTwvaW5saW5lQ29kZT57YFxuc3BlY2lmaWNhbGx5LCBvciByb2xsIHlvdXIgb3duIGxpa2UgdGhlIGJlbG93IGV4YW1wbGUuYH08L3A+XG4gICAgPEltcG9ydENvbnRleHQgaW1wb3J0cz17KCkgPT4gYWxsVmFsdWVzKHtcbiAgICAgIFwiQHJlc3RhcnQvdWlcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy10cmFuc2l0aW9ucy5tZHhcIiAqL1xuICAgICAgJ0ByZXN0YXJ0L3VpJyksXG4gICAgICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLXRyYW5zaXRpb25zLm1keFwiICovXG4gICAgICAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJylcbiAgICB9KX0gbWR4VHlwZT1cIkltcG9ydENvbnRleHRcIj5cbiAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiLFxuICAgICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmVcIixcbiAgICAgICAgICBcImxpdmVcIjogdHJ1ZVxuICAgICAgICB9fT57YGltcG9ydCB7IE1vZGFsLCBPdmVybGF5IH0gZnJvbSBcIkByZXN0YXJ0L3VpXCI7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uXCI7XG5cbmNvbnN0IEZBREVfRFVSQVRJT04gPSAyMDA7XG5cbmluamVjdENzcyhcXGBcbiAgLmZhZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBcXCR7RkFERV9EVVJBVElPTn1tcyBsaW5lYXI7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG5cbiAgLmJhY2tkcm9wLmZhZGUuc2hvdyB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MDA7XG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXFxgKTtcblxuY29uc3QgZmFkZVN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IFwic2hvd1wiLFxuICBlbnRlcmVkOiBcInNob3dcIixcbn07XG5cbmNvbnN0IEZhZGUgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8VHJhbnNpdGlvbiB7Li4ucHJvcHN9IHRpbWVvdXQ9e0ZBREVfRFVSQVRJT059PlxuICAgIHsoc3RhdHVzLCBpbm5lclByb3BzKSA9PlxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIC4uLmlubmVyUHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZTogXFxgZmFkZSBcXCR7ZmFkZVN0eWxlc1tzdGF0dXNdfSBcXCR7Y2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lfVxcYCxcbiAgICAgIH0pXG4gICAgfVxuICA8L1RyYW5zaXRpb24+XG4pO1xuXG5mdW5jdGlvbiBUcmFuc2l0aW9uRXhhbXBsZSgpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b29sdGlwUmVmLCBhdHRhY2hSZWZdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItM1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCgocHJldikgPT4gIXByZXYpfVxuICAgICAgPlxuICAgICAgICBTaG93IEFuaW1hdGVkIE1vZGFsXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgcmVmPXthdHRhY2hSZWZ9XG4gICAgICA+XG4gICAgICAgIFNob3cgVG9vbHRpcFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxPdmVybGF5XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHRyYW5zaXRpb249e0ZhZGV9XG4gICAgICAgIHNob3c9e3Nob3dUb29sdGlwfVxuICAgICAgICB0YXJnZXQ9e3Rvb2x0aXBSZWZ9XG4gICAgICAgIHBvcHBlckNvbmZpZz17e1xuICAgICAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm9mZnNldFwiLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7IG9mZnNldDogWzAsIDEwXSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgcHJvcHM6IHsgcmVmLCBzdHlsZSB9IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktMjAwIHNoYWRvdyByb3VuZGVkIHotMTAgcHgtNFwiXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGVsbG8gdGhlcmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cblxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3c9e3Nob3dNb2RhbH1cbiAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICB0cmFuc2l0aW9uPXtGYWRlfVxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb249e0ZhZGV9XG4gICAgICAgIHJlbmRlckJhY2tkcm9wPXsocHJvcHMpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrZHJvcCBhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIHotNDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHJlbmRlckRpYWxvZz17KHByb3BzKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLWxnIHBvaW50ZXItZXZlbnRzLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGg0IGlkPVwibW9kYWwtbGFiZWxcIj5JJmFwb3M7bSBmYWRpbmcgaW4hPC9oND5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQW5pbSBwYXJpYXR1ciBjbGljaGUgcmVwcmVoZW5kZXJpdCwgZW5pbVxuICAgICAgICAgICAgICAgIGVpdXNtb2QgaGlnaCBsaWZlIGFjY3VzYW11cyB0ZXJyeSByaWNoYXJkc29uXG4gICAgICAgICAgICAgICAgYWQgc3F1aWQuIE5paGlsIGFuaW0ga2VmZml5ZWggaGVsdmV0aWNhLFxuICAgICAgICAgICAgICAgIGNyYWZ0IGJlZXIgbGFib3JlIHdlcyBhbmRlcnNvbiBjcmVkIG5lc2NpdW50XG4gICAgICAgICAgICAgICAgc2FwaWVudGUgZWEgcHJvaWRlbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG48VHJhbnNpdGlvbkV4YW1wbGUgLz47XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L0ltcG9ydENvbnRleHQ+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiAgIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHkoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9aWYoIWFhKXRocm93IEVycm9yKHkoMjI3KSk7dmFyIGJhPW5ldyBTZXQsY2E9e307ZnVuY3Rpb24gZGEoYSxiKXtlYShhLGIpO2VhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBlYShhLGIpe2NhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyliYS5hZGQoYlthXSl9XG52YXIgZmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGhhPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxpYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuamE9e30sa2E9e307ZnVuY3Rpb24gbGEoYSl7aWYoaWEuY2FsbChrYSxhKSlyZXR1cm4hMDtpZihpYS5jYWxsKGphLGEpKXJldHVybiExO2lmKGhhLnRlc3QoYSkpcmV0dXJuIGthW2FdPSEwO2phW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIG1hKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gbmEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIG9hPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EsXG5wYSk7RFtiXT1uZXcgQihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5ELnhsaW5rSHJlZj1uZXcgQihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiBxYShhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChuYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/bGEoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbnZhciByYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxzYT02MDEwMyx0YT02MDEwNix1YT02MDEwNyx3YT02MDEwOCx4YT02MDExNCx5YT02MDEwOSx6YT02MDExMCxBYT02MDExMixCYT02MDExMyxDYT02MDEyMCxEYT02MDExNSxFYT02MDExNixGYT02MDEyMSxHYT02MDEyOCxIYT02MDEyOSxJYT02MDEzMCxKYT02MDEzMTtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciBFPVN5bWJvbC5mb3I7c2E9RShcInJlYWN0LmVsZW1lbnRcIik7dGE9RShcInJlYWN0LnBvcnRhbFwiKTt1YT1FKFwicmVhY3QuZnJhZ21lbnRcIik7d2E9RShcInJlYWN0LnN0cmljdF9tb2RlXCIpO3hhPUUoXCJyZWFjdC5wcm9maWxlclwiKTt5YT1FKFwicmVhY3QucHJvdmlkZXJcIik7emE9RShcInJlYWN0LmNvbnRleHRcIik7QWE9RShcInJlYWN0LmZvcndhcmRfcmVmXCIpO0JhPUUoXCJyZWFjdC5zdXNwZW5zZVwiKTtDYT1FKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtEYT1FKFwicmVhY3QubWVtb1wiKTtFYT1FKFwicmVhY3QubGF6eVwiKTtGYT1FKFwicmVhY3QuYmxvY2tcIik7RShcInJlYWN0LnNjb3BlXCIpO0dhPUUoXCJyZWFjdC5vcGFxdWUuaWRcIik7SGE9RShcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7SWE9RShcInJlYWN0Lm9mZnNjcmVlblwiKTtKYT1FKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKX1cbnZhciBLYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gTGEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUthJiZhW0thXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBNYTtmdW5jdGlvbiBOYShhKXtpZih2b2lkIDA9PT1NYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtNYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTWErYX12YXIgT2E9ITE7XG5mdW5jdGlvbiBQYShhLGIpe2lmKCFhfHxPYSlyZXR1cm5cIlwiO09hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChrKXt2YXIgZD1rfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2goayl7ZD1rfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goayl7ZD1rfWEoKX19Y2F0Y2goayl7aWYoayYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBrLnN0YWNrKXtmb3IodmFyIGU9ay5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXJldHVyblwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e09hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TmEoYSk6XCJcIn1cbmZ1bmN0aW9uIFFhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBOYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE5hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBOYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE5hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1QYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1QYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMjI6cmV0dXJuIGE9UGEoYS50eXBlLl9yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPVBhKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUmEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB0YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgeGE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2Ugd2E6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBCYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBDYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB6YTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSB5YTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBBYTp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtcbnJldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgRGE6cmV0dXJuIFJhKGEudHlwZSk7Y2FzZSBGYTpyZXR1cm4gUmEoYS5fcmVuZGVyKTtjYXNlIEVhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBSYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gJGEoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZxYShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYWIoYSxiKXskYShhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2JiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmJiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGJiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfWZ1bmN0aW9uIGRiKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGViKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9ZGIoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfVxuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IoeSg5MSkpO3JldHVybiBtKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHkoOTIpKTtpZihBcnJheS5pc0FycmF5KGMpKXtpZighKDE+PWMubGVuZ3RoKSl0aHJvdyBFcnJvcih5KDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIga2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gbGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/bGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbmIsb2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09a2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bmI9bmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gcGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBxYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxyYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocWIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtxYltiXT1xYlthXX0pfSk7ZnVuY3Rpb24gc2IoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHFiLmhhc093blByb3BlcnR5KGEpJiZxYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiB0YihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1zYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB1Yj1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdmIoYSxiKXtpZihiKXtpZih1YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHkoNjApKTtpZighKFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHkoNjIpKTt9fVxuZnVuY3Rpb24gd2IoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IoeSgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtyZXR1cm4gYShiLGMsZCxlKX1mdW5jdGlvbiBJYigpe312YXIgSmI9R2IsS2I9ITEsTGI9ITE7ZnVuY3Rpb24gTWIoKXtpZihudWxsIT09emJ8fG51bGwhPT1BYilJYigpLEZiKCl9XG5mdW5jdGlvbiBOYihhLGIsYyl7aWYoTGIpcmV0dXJuIGEoYixjKTtMYj0hMDt0cnl7cmV0dXJuIEpiKGEsYixjKX1maW5hbGx5e0xiPSExLE1iKCl9fVxuZnVuY3Rpb24gT2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcih5KDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIFBiPSExO2lmKGZhKXRyeXt2YXIgUWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFFiLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtQYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpfWNhdGNoKGEpe1BiPSExfWZ1bmN0aW9uIFJiKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBTYj0hMSxUYj1udWxsLFViPSExLFZiPW51bGwsV2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7U2I9ITA7VGI9YX19O2Z1bmN0aW9uIFhiKGEsYixjLGQsZSxmLGcsaCxrKXtTYj0hMTtUYj1udWxsO1JiLmFwcGx5KFdiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBZYihhLGIsYyxkLGUsZixnLGgsayl7WGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKFNiKXtpZihTYil7dmFyIGw9VGI7U2I9ITE7VGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHkoMTk4KSk7VWJ8fChVYj0hMCxWYj1sKX19ZnVuY3Rpb24gWmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiAkYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGFjKGEpe2lmKFpiKGEpIT09YSl0aHJvdyBFcnJvcih5KDE4OCkpO31cbmZ1bmN0aW9uIGJjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVpiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGFjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGFjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IoeSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih5KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHkoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gY2MoYSl7YT1iYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRjKGEsYil7Zm9yKHZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1iOyl7aWYoYj09PWF8fGI9PT1jKXJldHVybiEwO2I9Yi5yZXR1cm59cmV0dXJuITF9dmFyIGVjLGZjLGdjLGhjLGljPSExLGpjPVtdLGtjPW51bGwsbGM9bnVsbCxtYz1udWxsLG5jPW5ldyBNYXAsb2M9bmV3IE1hcCxwYz1bXSxxYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiByYyhhLGIsYyxkLGUpe3JldHVybntibG9ja2VkT246YSxkb21FdmVudE5hbWU6YixldmVudFN5c3RlbUZsYWdzOmN8MTYsbmF0aXZlRXZlbnQ6ZSx0YXJnZXRDb250YWluZXJzOltkXX19ZnVuY3Rpb24gc2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjprYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6bGM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6bWM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOm5jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOm9jLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gdGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT1yYyhiLGMsZCxlLGYpLG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmZmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gdWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4ga2M9dGMoa2MsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIGxjPXRjKGxjLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBtYz10YyhtYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO25jLnNldChmLHRjKG5jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxvYy5zZXQoZix0YyhvYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiB2YyhhKXt2YXIgYj13YyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVpiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPSRiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO2hjKGEubGFuZVByaW9yaXR5LGZ1bmN0aW9uKCl7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoYS5wcmlvcml0eSxmdW5jdGlvbigpe2djKGMpfSl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmh5ZHJhdGUpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24geGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZmYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiB6YyhhLGIsYyl7eGMoYSkmJmMuZGVsZXRlKGIpfVxuZnVuY3Rpb24gQWMoKXtmb3IoaWM9ITE7MDxqYy5sZW5ndGg7KXt2YXIgYT1qY1swXTtpZihudWxsIT09YS5ibG9ja2VkT24pe2E9Q2IoYS5ibG9ja2VkT24pO251bGwhPT1hJiZlYyhhKTticmVha31mb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yyl7YS5ibG9ja2VkT249YzticmVha31iLnNoaWZ0KCl9bnVsbD09PWEuYmxvY2tlZE9uJiZqYy5zaGlmdCgpfW51bGwhPT1rYyYmeGMoa2MpJiYoa2M9bnVsbCk7bnVsbCE9PWxjJiZ4YyhsYykmJihsYz1udWxsKTtudWxsIT09bWMmJnhjKG1jKSYmKG1jPW51bGwpO25jLmZvckVhY2goemMpO29jLmZvckVhY2goemMpfVxuZnVuY3Rpb24gQmMoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLGljfHwoaWM9ITAsci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksQWMpKSl9XG5mdW5jdGlvbiBDYyhhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBCYyhiLGEpfWlmKDA8amMubGVuZ3RoKXtCYyhqY1swXSxhKTtmb3IodmFyIGM9MTtjPGpjLmxlbmd0aDtjKyspe3ZhciBkPWpjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09a2MmJkJjKGtjLGEpO251bGwhPT1sYyYmQmMobGMsYSk7bnVsbCE9PW1jJiZCYyhtYyxhKTtuYy5mb3JFYWNoKGIpO29jLmZvckVhY2goYik7Zm9yKGM9MDtjPHBjLmxlbmd0aDtjKyspZD1wY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8cGMubGVuZ3RoJiYoYz1wY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOyl2YyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJnBjLnNoaWZ0KCl9XG5mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBFYz17YW5pbWF0aW9uZW5kOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6RGMoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxGYz17fSxHYz17fTtcbmZhJiYoR2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgRWMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgRWMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBIYyhhKXtpZihGY1thXSlyZXR1cm4gRmNbYV07aWYoIUVjW2FdKXJldHVybiBhO3ZhciBiPUVjW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIEdjKXJldHVybiBGY1thXT1iW2NdO3JldHVybiBhfVxudmFyIEljPUhjKFwiYW5pbWF0aW9uZW5kXCIpLEpjPUhjKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLEtjPUhjKFwiYW5pbWF0aW9uc3RhcnRcIiksTGM9SGMoXCJ0cmFuc2l0aW9uZW5kXCIpLE1jPW5ldyBNYXAsTmM9bmV3IE1hcCxPYz1bXCJhYm9ydFwiLFwiYWJvcnRcIixJYyxcImFuaW1hdGlvbkVuZFwiLEpjLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCIsS2MsXCJhbmltYXRpb25TdGFydFwiLFwiY2FucGxheVwiLFwiY2FuUGxheVwiLFwiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCIsXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIixcImVtcHRpZWRcIixcImVtcHRpZWRcIixcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmRlZFwiLFwiZW5kZWRcIixcImVycm9yXCIsXCJlcnJvclwiLFwiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsXCJsb2FkXCIsXCJsb2FkXCIsXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIixcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsXG5cImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIixcInNlZWtpbmdcIixcInNlZWtpbmdcIixcInN0YWxsZWRcIixcInN0YWxsZWRcIixcInN1c3BlbmRcIixcInN1c3BlbmRcIixcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixMYyxcInRyYW5zaXRpb25FbmRcIixcIndhaXRpbmdcIixcIndhaXRpbmdcIl07ZnVuY3Rpb24gUGMoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrPTIpe3ZhciBkPWFbY10sZT1hW2MrMV07ZT1cIm9uXCIrKGVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpKTtOYy5zZXQoZCxiKTtNYy5zZXQoZCxlKTtkYShlLFtkXSl9fXZhciBRYz1yLnVuc3RhYmxlX25vdztRYygpO3ZhciBGPTg7XG5mdW5jdGlvbiBSYyhhKXtpZigwIT09KDEmYSkpcmV0dXJuIEY9MTUsMTtpZigwIT09KDImYSkpcmV0dXJuIEY9MTQsMjtpZigwIT09KDQmYSkpcmV0dXJuIEY9MTMsNDt2YXIgYj0yNCZhO2lmKDAhPT1iKXJldHVybiBGPTEyLGI7aWYoMCE9PShhJjMyKSlyZXR1cm4gRj0xMSwzMjtiPTE5MiZhO2lmKDAhPT1iKXJldHVybiBGPTEwLGI7aWYoMCE9PShhJjI1NikpcmV0dXJuIEY9OSwyNTY7Yj0zNTg0JmE7aWYoMCE9PWIpcmV0dXJuIEY9OCxiO2lmKDAhPT0oYSY0MDk2KSlyZXR1cm4gRj03LDQwOTY7Yj00MTg2MTEyJmE7aWYoMCE9PWIpcmV0dXJuIEY9NixiO2I9NjI5MTQ1NjAmYTtpZigwIT09YilyZXR1cm4gRj01LGI7aWYoYSY2NzEwODg2NClyZXR1cm4gRj00LDY3MTA4ODY0O2lmKDAhPT0oYSYxMzQyMTc3MjgpKXJldHVybiBGPTMsMTM0MjE3NzI4O2I9ODA1MzA2MzY4JmE7aWYoMCE9PWIpcmV0dXJuIEY9MixiO2lmKDAhPT0oMTA3Mzc0MTgyNCZhKSlyZXR1cm4gRj0xLDEwNzM3NDE4MjQ7XG5GPTg7cmV0dXJuIGF9ZnVuY3Rpb24gU2MoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIDE1O2Nhc2UgOTg6cmV0dXJuIDEwO2Nhc2UgOTc6Y2FzZSA5NjpyZXR1cm4gODtjYXNlIDk1OnJldHVybiAyO2RlZmF1bHQ6cmV0dXJuIDB9fWZ1bmN0aW9uIFRjKGEpe3N3aXRjaChhKXtjYXNlIDE1OmNhc2UgMTQ6cmV0dXJuIDk5O2Nhc2UgMTM6Y2FzZSAxMjpjYXNlIDExOmNhc2UgMTA6cmV0dXJuIDk4O2Nhc2UgOTpjYXNlIDg6Y2FzZSA3OmNhc2UgNjpjYXNlIDQ6Y2FzZSA1OnJldHVybiA5NztjYXNlIDM6Y2FzZSAyOmNhc2UgMTpyZXR1cm4gOTU7Y2FzZSAwOnJldHVybiA5MDtkZWZhdWx0OnRocm93IEVycm9yKHkoMzU4LGEpKTt9fVxuZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gRj0wO3ZhciBkPTAsZT0wLGY9YS5leHBpcmVkTGFuZXMsZz1hLnN1c3BlbmRlZExhbmVzLGg9YS5waW5nZWRMYW5lcztpZigwIT09ZilkPWYsZT1GPTE1O2Vsc2UgaWYoZj1jJjEzNDIxNzcyNywwIT09Zil7dmFyIGs9ZiZ+ZzswIT09az8oZD1SYyhrKSxlPUYpOihoJj1mLDAhPT1oJiYoZD1SYyhoKSxlPUYpKX1lbHNlIGY9YyZ+ZywwIT09Zj8oZD1SYyhmKSxlPUYpOjAhPT1oJiYoZD1SYyhoKSxlPUYpO2lmKDA9PT1kKXJldHVybiAwO2Q9MzEtVmMoZCk7ZD1jJigoMD5kPzA6MTw8ZCk8PDEpLTE7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZykpe1JjKGIpO2lmKGU8PUYpcmV0dXJuIGI7Rj1lfWI9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtVmMoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiBXYyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24gWGMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxNTpyZXR1cm4gMTtjYXNlIDE0OnJldHVybiAyO2Nhc2UgMTI6cmV0dXJuIGE9WWMoMjQmfmIpLDA9PT1hP1hjKDEwLGIpOmE7Y2FzZSAxMDpyZXR1cm4gYT1ZYygxOTImfmIpLDA9PT1hP1hjKDgsYik6YTtjYXNlIDg6cmV0dXJuIGE9WWMoMzU4NCZ+YiksMD09PWEmJihhPVljKDQxODYxMTImfmIpLDA9PT1hJiYoYT01MTIpKSxhO2Nhc2UgMjpyZXR1cm4gYj1ZYyg4MDUzMDYzNjgmfmIpLDA9PT1iJiYoYj0yNjg0MzU0NTYpLGJ9dGhyb3cgRXJyb3IoeSgzNTgsYSkpO31mdW5jdGlvbiBZYyhhKXtyZXR1cm4gYSYtYX1mdW5jdGlvbiBaYyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjt2YXIgZD1iLTE7YS5zdXNwZW5kZWRMYW5lcyY9ZDthLnBpbmdlZExhbmVzJj1kO2E9YS5ldmVudFRpbWVzO2I9MzEtVmMoYik7YVtiXT1jfXZhciBWYz1NYXRoLmNsejMyP01hdGguY2x6MzI6YWQsYmQ9TWF0aC5sb2csY2Q9TWF0aC5MTjI7ZnVuY3Rpb24gYWQoYSl7cmV0dXJuIDA9PT1hPzMyOjMxLShiZChhKS9jZHwwKXwwfXZhciBkZD1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGVkPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LGZkPSEwO2Z1bmN0aW9uIGdkKGEsYixjLGQpe0tifHxJYigpO3ZhciBlPWhkLGY9S2I7S2I9ITA7dHJ5e0hiKGUsYSxiLGMsZCl9ZmluYWxseXsoS2I9Zil8fE1iKCl9fWZ1bmN0aW9uIGlkKGEsYixjLGQpe2VkKGRkLGhkLmJpbmQobnVsbCxhLGIsYyxkKSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkKXtpZihmZCl7dmFyIGU7aWYoKGU9MD09PShiJjQpKSYmMDxqYy5sZW5ndGgmJi0xPHFjLmluZGV4T2YoYSkpYT1yYyhudWxsLGEsYixjLGQpLGpjLnB1c2goYSk7ZWxzZXt2YXIgZj15YyhhLGIsYyxkKTtpZihudWxsPT09ZillJiZzYyhhLGQpO2Vsc2V7aWYoZSl7aWYoLTE8cWMuaW5kZXhPZihhKSl7YT1yYyhmLGEsYixjLGQpO2pjLnB1c2goYSk7cmV0dXJufWlmKHVjKGYsYSxiLGMsZCkpcmV0dXJuO3NjKGEsZCl9amQoYSxiLGQsbnVsbCxjKX19fX1cbmZ1bmN0aW9uIHljKGEsYixjLGQpe3ZhciBlPXhiKGQpO2U9d2MoZSk7aWYobnVsbCE9PWUpe3ZhciBmPVpiKGUpO2lmKG51bGw9PT1mKWU9bnVsbDtlbHNle3ZhciBnPWYudGFnO2lmKDEzPT09Zyl7ZT0kYihmKTtpZihudWxsIT09ZSlyZXR1cm4gZTtlPW51bGx9ZWxzZSBpZigzPT09Zyl7aWYoZi5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWYudGFnP2Yuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtlPW51bGx9ZWxzZSBmIT09ZSYmKGU9bnVsbCl9fWpkKGEsYixkLGUsYyk7cmV0dXJuIG51bGx9dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO1xuZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9bShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9bSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPW0oe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPW0oe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPW0oe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1tKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9bSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1tKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9bSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1tKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1tKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9bSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9bSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9ZmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWZhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9ZmEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoZmEpe3ZhciB4ZTtpZihmYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO2E9cmU7aWYoS2IpYShiKTtlbHNle0tiPSEwO3RyeXtHYihhLGIpfWZpbmFsbHl7S2I9ITEsTWIoKX19fX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBKZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighSWUuY2FsbChiLGNbZF0pfHwhSGUoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBLZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZShhLGIpe3ZhciBjPUtlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtlKGMpfX1mdW5jdGlvbiBNZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01lKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgUGU9ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk9lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkplKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cblBjKFwiY2FuY2VsIGNhbmNlbCBjbGljayBjbGljayBjbG9zZSBjbG9zZSBjb250ZXh0bWVudSBjb250ZXh0TWVudSBjb3B5IGNvcHkgY3V0IGN1dCBhdXhjbGljayBhdXhDbGljayBkYmxjbGljayBkb3VibGVDbGljayBkcmFnZW5kIGRyYWdFbmQgZHJhZ3N0YXJ0IGRyYWdTdGFydCBkcm9wIGRyb3AgZm9jdXNpbiBmb2N1cyBmb2N1c291dCBibHVyIGlucHV0IGlucHV0IGludmFsaWQgaW52YWxpZCBrZXlkb3duIGtleURvd24ga2V5cHJlc3Mga2V5UHJlc3Mga2V5dXAga2V5VXAgbW91c2Vkb3duIG1vdXNlRG93biBtb3VzZXVwIG1vdXNlVXAgcGFzdGUgcGFzdGUgcGF1c2UgcGF1c2UgcGxheSBwbGF5IHBvaW50ZXJjYW5jZWwgcG9pbnRlckNhbmNlbCBwb2ludGVyZG93biBwb2ludGVyRG93biBwb2ludGVydXAgcG9pbnRlclVwIHJhdGVjaGFuZ2UgcmF0ZUNoYW5nZSByZXNldCByZXNldCBzZWVrZWQgc2Vla2VkIHN1Ym1pdCBzdWJtaXQgdG91Y2hjYW5jZWwgdG91Y2hDYW5jZWwgdG91Y2hlbmQgdG91Y2hFbmQgdG91Y2hzdGFydCB0b3VjaFN0YXJ0IHZvbHVtZWNoYW5nZSB2b2x1bWVDaGFuZ2VcIi5zcGxpdChcIiBcIiksXG4wKTtQYyhcImRyYWcgZHJhZyBkcmFnZW50ZXIgZHJhZ0VudGVyIGRyYWdleGl0IGRyYWdFeGl0IGRyYWdsZWF2ZSBkcmFnTGVhdmUgZHJhZ292ZXIgZHJhZ092ZXIgbW91c2Vtb3ZlIG1vdXNlTW92ZSBtb3VzZW91dCBtb3VzZU91dCBtb3VzZW92ZXIgbW91c2VPdmVyIHBvaW50ZXJtb3ZlIHBvaW50ZXJNb3ZlIHBvaW50ZXJvdXQgcG9pbnRlck91dCBwb2ludGVyb3ZlciBwb2ludGVyT3ZlciBzY3JvbGwgc2Nyb2xsIHRvZ2dsZSB0b2dnbGUgdG91Y2htb3ZlIHRvdWNoTW92ZSB3aGVlbCB3aGVlbFwiLnNwbGl0KFwiIFwiKSwxKTtQYyhPYywyKTtmb3IodmFyIFZlPVwiY2hhbmdlIHNlbGVjdGlvbmNoYW5nZSB0ZXh0SW5wdXQgY29tcG9zaXRpb25zdGFydCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnVwZGF0ZVwiLnNwbGl0KFwiIFwiKSxXZT0wO1dlPFZlLmxlbmd0aDtXZSsrKU5jLnNldChWZVtXZV0sMCk7ZWEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtcbmVhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtlYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2RhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZGEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5kYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIFhlPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxZZT1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChYZSkpO1xuZnVuY3Rpb24gWmUoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7WWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfX19aWYoVWIpdGhyb3cgYT1WYixVYj0hMSxWYj1udWxsLGE7fVxuZnVuY3Rpb24gRyhhLGIpe3ZhciBjPSRlKGIpLGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChhZihiLGEsMiwhMSksYy5hZGQoZCkpfXZhciBiZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIGNmKGEpe2FbYmZdfHwoYVtiZl09ITAsYmEuZm9yRWFjaChmdW5jdGlvbihiKXtZZS5oYXMoYil8fGRmKGIsITEsYSxudWxsKTtkZihiLCEwLGEsbnVsbCl9KSl9XG5mdW5jdGlvbiBkZihhLGIsYyxkKXt2YXIgZT00PGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxmPWM7XCJzZWxlY3Rpb25jaGFuZ2VcIj09PWEmJjkhPT1jLm5vZGVUeXBlJiYoZj1jLm93bmVyRG9jdW1lbnQpO2lmKG51bGwhPT1kJiYhYiYmWWUuaGFzKGEpKXtpZihcInNjcm9sbFwiIT09YSlyZXR1cm47ZXw9MjtmPWR9dmFyIGc9JGUoZiksaD1hK1wiX19cIisoYj9cImNhcHR1cmVcIjpcImJ1YmJsZVwiKTtnLmhhcyhoKXx8KGImJihlfD00KSxhZihmLGEsZSxiKSxnLmFkZChoKSl9XG5mdW5jdGlvbiBhZihhLGIsYyxkKXt2YXIgZT1OYy5nZXQoYik7c3dpdGNoKHZvaWQgMD09PWU/MjplKXtjYXNlIDA6ZT1nZDticmVhaztjYXNlIDE6ZT1pZDticmVhaztkZWZhdWx0OmU9aGR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IVBifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGpkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9d2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufU5iKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1NYy5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQseD1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjp4PVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOng9XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlIEljOmNhc2UgSmM6Y2FzZSBLYzprPUhkO2JyZWFrO2Nhc2UgTGM6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdz0wIT09KGImNCksej0hdyYmXCJzY3JvbGxcIj09PWEsdT13P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3c9W107Zm9yKHZhciB0PWQscTtudWxsIT09XG50Oyl7cT10O3ZhciB2PXEuc3RhdGVOb2RlOzU9PT1xLnRhZyYmbnVsbCE9PXYmJihxPXYsbnVsbCE9PXUmJih2PU9iKHQsdSksbnVsbCE9diYmdy5wdXNoKGVmKHQsdixxKSkpKTtpZih6KWJyZWFrO3Q9dC5yZXR1cm59MDx3Lmxlbmd0aCYmKGg9bmV3IGsoaCx4LG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnd9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiYwPT09KGImMTYpJiYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYod2MoeCl8fHhbZmZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCx4PXg/d2MoeCk6bnVsbCxudWxsIT09XG54JiYoej1aYih4KSx4IT09enx8NSE9PXgudGFnJiY2IT09eC50YWcpKXg9bnVsbH1lbHNlIGs9bnVsbCx4PWQ7aWYoayE9PXgpe3c9QmQ7dj1cIm9uTW91c2VMZWF2ZVwiO3U9XCJvbk1vdXNlRW50ZXJcIjt0PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdz1UZCx2PVwib25Qb2ludGVyTGVhdmVcIix1PVwib25Qb2ludGVyRW50ZXJcIix0PVwicG9pbnRlclwiO3o9bnVsbD09az9oOnVlKGspO3E9bnVsbD09eD9oOnVlKHgpO2g9bmV3IHcodix0K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9ejtoLnJlbGF0ZWRUYXJnZXQ9cTt2PW51bGw7d2MoZSk9PT1kJiYodz1uZXcgdyh1LHQrXCJlbnRlclwiLHgsYyxlKSx3LnRhcmdldD1xLHcucmVsYXRlZFRhcmdldD16LHY9dyk7ej12O2lmKGsmJngpYjp7dz1rO3U9eDt0PTA7Zm9yKHE9dztxO3E9Z2YocSkpdCsrO3E9MDtmb3Iodj11O3Y7dj1nZih2KSlxKys7Zm9yKDswPHQtcTspdz1nZih3KSx0LS07Zm9yKDswPHEtdDspdT1cbmdmKHUpLHEtLTtmb3IoO3QtLTspe2lmKHc9PT11fHxudWxsIT09dSYmdz09PXUuYWx0ZXJuYXRlKWJyZWFrIGI7dz1nZih3KTt1PWdmKHUpfXc9bnVsbH1lbHNlIHc9bnVsbDtudWxsIT09ayYmaGYoZyxoLGssdywhMSk7bnVsbCE9PXgmJm51bGwhPT16JiZoZihnLHoseCx3LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBKPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpSj1GZTtlbHNle0o9RGU7dmFyIEs9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihKPUVlKTtpZihKJiYoSj1KKGEsZCkpKXtuZShnLEosYyxlKTticmVhayBhfUsmJksoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJihLPWguX3dyYXBwZXJTdGF0ZSkmJlxuSy5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZiYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9Sz1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZShLKXx8XCJ0cnVlXCI9PT1LLmNvbnRlbnRFZGl0YWJsZSlRZT1LLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgUTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6TD1cIm9uQ29tcG9zaXRpb25FbmRcIjticmVhayBiO1xuY2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6TD1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifUw9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKEw9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtMJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1MP1wib25Db21wb3NpdGlvbkVuZFwiPT09TCYmaWUmJihRPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSksSz1vZShkLEwpLDA8Sy5sZW5ndGgmJihMPW5ldyBMZChMLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6TCxsaXN0ZW5lcnM6S30pLFE/TC5kYXRhPVE6KFE9aGUoYyksbnVsbCE9PVEmJihMLmRhdGE9USkpKSk7aWYoUT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSwwPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXG5cImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT1RKX1zZShnLGIpfSl9ZnVuY3Rpb24gZWYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPU9iKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KGVmKGEsZixlKSksZj1PYihhLGIpLG51bGwhPWYmJmQucHVzaChlZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIGdmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBoZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPU9iKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KGVmKGMsayxoKSkpOmV8fChrPU9iKGMsZiksbnVsbCE9ayYmZy5wdXNoKGVmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9ZnVuY3Rpb24gamYoKXt9dmFyIGtmPW51bGwsbGY9bnVsbDtmdW5jdGlvbiBtZihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9XG5mdW5jdGlvbiBuZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9dmFyIG9mPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHBmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMDtmdW5jdGlvbiBxZihhKXsxPT09YS5ub2RlVHlwZT9hLnRleHRDb250ZW50PVwiXCI6OT09PWEubm9kZVR5cGUmJihhPWEuYm9keSxudWxsIT1hJiYoYS50ZXh0Q29udGVudD1cIlwiKSl9XG5mdW5jdGlvbiByZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1mdW5jdGlvbiBzZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgdGY9MDtmdW5jdGlvbiB1ZihhKXtyZXR1cm57JCR0eXBlb2Y6R2EsdG9TdHJpbmc6YSx2YWx1ZU9mOmF9fXZhciB2Zj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx3Zj1cIl9fcmVhY3RGaWJlciRcIit2Zix4Zj1cIl9fcmVhY3RQcm9wcyRcIit2ZixmZj1cIl9fcmVhY3RDb250YWluZXIkXCIrdmYseWY9XCJfX3JlYWN0RXZlbnRzJFwiK3ZmO1xuZnVuY3Rpb24gd2MoYSl7dmFyIGI9YVt3Zl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbZmZdfHxjW3dmXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPXNmKGEpO251bGwhPT1hOyl7aWYoYz1hW3dmXSlyZXR1cm4gYzthPXNmKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbd2ZdfHxhW2ZmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHkoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbeGZdfHxudWxsfVxuZnVuY3Rpb24gJGUoYSl7dmFyIGI9YVt5Zl07dm9pZCAwPT09YiYmKGI9YVt5Zl09bmV3IFNldCk7cmV0dXJuIGJ9dmFyIHpmPVtdLEFmPS0xO2Z1bmN0aW9uIEJmKGEpe3JldHVybntjdXJyZW50OmF9fWZ1bmN0aW9uIEgoYSl7MD5BZnx8KGEuY3VycmVudD16ZltBZl0semZbQWZdPW51bGwsQWYtLSl9ZnVuY3Rpb24gSShhLGIpe0FmKys7emZbQWZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgQ2Y9e30sTT1CZihDZiksTj1CZighMSksRGY9Q2Y7XG5mdW5jdGlvbiBFZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIENmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEZmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gR2YoKXtIKE4pO0goTSl9ZnVuY3Rpb24gSGYoYSxiLGMpe2lmKE0uY3VycmVudCE9PUNmKXRocm93IEVycm9yKHkoMTY4KSk7SShNLGIpO0koTixjKX1cbmZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IoeSgxMDgsUmEoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIEpmKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxDZjtEZj1NLmN1cnJlbnQ7SShNLGEpO0koTixOLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIEtmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcih5KDE2OSkpO2M/KGE9SWYoYSxiLERmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsSChOKSxIKE0pLEkoTSxhKSk6SChOKTtJKE4sYyl9XG52YXIgTGY9bnVsbCxNZj1udWxsLE5mPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LE9mPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxQZj1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFFmPXIudW5zdGFibGVfc2hvdWxkWWllbGQsUmY9ci51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsU2Y9ci51bnN0YWJsZV9ub3csVGY9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxVZj1yLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFZmPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksV2Y9ci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxYZj1yLnVuc3RhYmxlX0xvd1ByaW9yaXR5LFlmPXIudW5zdGFibGVfSWRsZVByaW9yaXR5LFpmPXt9LCRmPXZvaWQgMCE9PVJmP1JmOmZ1bmN0aW9uKCl7fSxhZz1udWxsLGJnPW51bGwsY2c9ITEsZGc9U2YoKSxPPTFFND5kZz9TZjpmdW5jdGlvbigpe3JldHVybiBTZigpLWRnfTtcbmZ1bmN0aW9uIGVnKCl7c3dpdGNoKFRmKCkpe2Nhc2UgVWY6cmV0dXJuIDk5O2Nhc2UgVmY6cmV0dXJuIDk4O2Nhc2UgV2Y6cmV0dXJuIDk3O2Nhc2UgWGY6cmV0dXJuIDk2O2Nhc2UgWWY6cmV0dXJuIDk1O2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiBVZjtjYXNlIDk4OnJldHVybiBWZjtjYXNlIDk3OnJldHVybiBXZjtjYXNlIDk2OnJldHVybiBYZjtjYXNlIDk1OnJldHVybiBZZjtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBnZyhhLGIpe2E9ZmcoYSk7cmV0dXJuIE5mKGEsYil9ZnVuY3Rpb24gaGcoYSxiLGMpe2E9ZmcoYSk7cmV0dXJuIE9mKGEsYixjKX1mdW5jdGlvbiBpZygpe2lmKG51bGwhPT1iZyl7dmFyIGE9Ymc7Ymc9bnVsbDtQZihhKX1qZygpfVxuZnVuY3Rpb24gamcoKXtpZighY2cmJm51bGwhPT1hZyl7Y2c9ITA7dmFyIGE9MDt0cnl7dmFyIGI9YWc7Z2coOTksZnVuY3Rpb24oKXtmb3IoO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdO2RvIGM9YyghMCk7d2hpbGUobnVsbCE9PWMpfX0pO2FnPW51bGx9Y2F0Y2goYyl7dGhyb3cgbnVsbCE9PWFnJiYoYWc9YWcuc2xpY2UoYSsxKSksT2YoVWYsaWcpLGM7fWZpbmFsbHl7Y2c9ITF9fX12YXIga2c9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7ZnVuY3Rpb24gbGcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9dmFyIG1nPUJmKG51bGwpLG5nPW51bGwsb2c9bnVsbCxwZz1udWxsO2Z1bmN0aW9uIHFnKCl7cGc9b2c9bmc9bnVsbH1cbmZ1bmN0aW9uIHJnKGEpe3ZhciBiPW1nLmN1cnJlbnQ7SChtZyk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBzZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZigoYS5jaGlsZExhbmVzJmIpPT09YilpZihudWxsPT09Y3x8KGMuY2hpbGRMYW5lcyZiKT09PWIpYnJlYWs7ZWxzZSBjLmNoaWxkTGFuZXN8PWI7ZWxzZSBhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpO2E9YS5yZXR1cm59fWZ1bmN0aW9uIHRnKGEsYil7bmc9YTtwZz1vZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKHVnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1cbmZ1bmN0aW9uIHZnKGEsYil7aWYocGchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXBnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O2lmKG51bGw9PT1vZyl7aWYobnVsbD09PW5nKXRocm93IEVycm9yKHkoMzA4KSk7b2c9YjtuZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmIscmVzcG9uZGVyczpudWxsfX1lbHNlIG9nPW9nLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciB3Zz0hMTtmdW5jdGlvbiB4ZyhhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGx9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiB5ZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiB6ZyhhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1mdW5jdGlvbiBBZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YSl7YT1hLnNoYXJlZDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifX1cbmZ1bmN0aW9uIEJnKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBDZyhhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO3dnPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG49YS5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe249bi51cGRhdGVRdWV1ZTt2YXIgQT1uLmxhc3RCYXNlVXBkYXRlO0EhPT1nJiYobnVsbD09PUE/bi5maXJzdEJhc2VVcGRhdGU9bDpBLm5leHQ9bCxuLmxhc3RCYXNlVXBkYXRlPWspfX1pZihudWxsIT09Zil7QT1lLmJhc2VTdGF0ZTtnPTA7bj1sPWs9bnVsbDtkb3toPWYubGFuZTt2YXIgcD1mLmV2ZW50VGltZTtpZigoZCZoKT09PWgpe251bGwhPT1uJiYobj1uLm5leHQ9e2V2ZW50VGltZTpwLGxhbmU6MCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBDPWEseD1mO2g9YjtwPWM7c3dpdGNoKHgudGFnKXtjYXNlIDE6Qz14LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEMpe0E9Qy5jYWxsKHAsQSxoKTticmVhayBhfUE9QzticmVhayBhO2Nhc2UgMzpDLmZsYWdzPUMuZmxhZ3MmLTQwOTd8NjQ7Y2FzZSAwOkM9eC5wYXlsb2FkO2g9XCJmdW5jdGlvblwiPT09dHlwZW9mIEM/Qy5jYWxsKHAsQSxoKTpDO2lmKG51bGw9PT1ofHx2b2lkIDA9PT1oKWJyZWFrIGE7QT1tKHt9LEEsaCk7YnJlYWsgYTtjYXNlIDI6d2c9ITB9fW51bGwhPT1mLmNhbGxiYWNrJiYoYS5mbGFnc3w9MzIsaD1lLmVmZmVjdHMsbnVsbD09PWg/ZS5lZmZlY3RzPVtmXTpoLnB1c2goZikpfWVsc2UgcD17ZXZlbnRUaW1lOnAsbGFuZTpoLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW4/KGw9bj1wLGs9QSk6bj1uLm5leHQ9cCxnfD1oO2Y9Zi5uZXh0O2lmKG51bGw9PT1cbmYpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2UgZj1oLm5leHQsaC5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1oLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09biYmKGs9QSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bjtEZ3w9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPUF9fWZ1bmN0aW9uIEVnKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcih5KDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIEZnPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gR2coYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEtnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1piKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9SGcoKSxkPUlnKGEpLGU9emcoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1cbmIpO0FnKGEsZSk7SmcoYSxkLGMpfX07ZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSmUoYyxkKXx8IUplKGUsZik6ITB9XG5mdW5jdGlvbiBNZyhhLGIsYyl7dmFyIGQ9ITEsZT1DZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj12ZyhmKTooZT1GZihiKT9EZjpNLmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9FZihhLGUpOkNmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9S2c7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBOZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBPZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUZnO3hnKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9dmcoZik6KGY9RmYoYik/RGY6TS5jdXJyZW50LGUuY29udGV4dD1FZihhLGYpKTtDZyhhLGMsZSxkKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoR2coYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8XG4oYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksQ2coYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NCl9dmFyIFBnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBRZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHkoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IoeSgxNDcsYSkpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09RmcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IoeSgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IoeSgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIFJnKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IEVycm9yKHkoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7fVxuZnVuY3Rpb24gU2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5mbGFncz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1UZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFncz0yLFxuYyk6ZDtiLmZsYWdzPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1VZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1RZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9UWcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5XZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBBKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1VZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYz1WZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1RZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgdGE6cmV0dXJuIGI9V2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKFBnKGIpfHxMYShiKSlyZXR1cm4gYj1YZyhiLFxuYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO1JnKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PXVhP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSB0YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihQZyhjKXx8TGEoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO1JnKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxcbm51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT11YT9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSB0YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihQZyhkKXx8TGEoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO1JnKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCx0PW51bGwsdT1nLHo9Zz0wLHE9bnVsbDtudWxsIT09dSYmejxoLmxlbmd0aDt6Kyspe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIG49cChlLHUsaFt6XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT1cbm4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx6KTtudWxsPT09dD9sPW46dC5zaWJsaW5nPW47dD1uO3U9cX1pZih6PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoO3o8aC5sZW5ndGg7eisrKXU9QShlLGhbel0sayksbnVsbCE9PXUmJihnPWYodSxnLHopLG51bGw9PT10P2w9dTp0LnNpYmxpbmc9dSx0PXUpO3JldHVybiBsfWZvcih1PWQoZSx1KTt6PGgubGVuZ3RoO3orKylxPUModSxlLHosaFt6XSxrKSxudWxsIT09cSYmKGEmJm51bGwhPT1xLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXEua2V5P3o6cS5rZXkpLGc9ZihxLGcseiksbnVsbD09PXQ/bD1xOnQuc2libGluZz1xLHQ9cSk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiB3KGUsZyxoLGspe3ZhciBsPUxhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHkoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09XG5oKXRocm93IEVycm9yKHkoMTUxKSk7Zm9yKHZhciB0PWw9bnVsbCx1PWcsej1nPTAscT1udWxsLG49aC5uZXh0KCk7bnVsbCE9PXUmJiFuLmRvbmU7eisrLG49aC5uZXh0KCkpe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIHc9cChlLHUsbi52YWx1ZSxrKTtpZihudWxsPT09dyl7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHUpO2c9Zih3LGcseik7bnVsbD09PXQ/bD13OnQuc2libGluZz13O3Q9dzt1PXF9aWYobi5kb25lKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDshbi5kb25lO3orKyxuPWgubmV4dCgpKW49QShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO3JldHVybiBsfWZvcih1PWQoZSx1KTshbi5kb25lO3orKyxuPWgubmV4dCgpKW49Qyh1LGUseixuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZcbnUuZGVsZXRlKG51bGw9PT1uLmtleT96Om4ua2V5KSxnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXVhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHNhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bCl7c3dpdGNoKGsudGFnKXtjYXNlIDc6aWYoZi50eXBlPT09dWEpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YnJlYWs7ZGVmYXVsdDppZihrLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtcbmQ9ZShrLGYucHJvcHMpO2QucmVmPVFnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1jKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09dWE/KGQ9WGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVZnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVFnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB0YTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1cbldnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPVVnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKFBnKGYpKXJldHVybiB4KGEsZCxmLGgpO2lmKExhKGYpKXJldHVybiB3KGEsZCxmLGgpO2wmJlJnKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDIyOmNhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGhyb3cgRXJyb3IoeSgxNTIsUmEoYS50eXBlKXx8XCJDb21wb25lbnRcIikpO31yZXR1cm4gYyhhLGQpfX12YXIgWWc9U2coITApLFpnPVNnKCExKSwkZz17fSxhaD1CZigkZyksYmg9QmYoJGcpLGNoPUJmKCRnKTtcbmZ1bmN0aW9uIGRoKGEpe2lmKGE9PT0kZyl0aHJvdyBFcnJvcih5KDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIGVoKGEsYil7SShjaCxiKTtJKGJoLGEpO0koYWgsJGcpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bWIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPW1iKGIsYSl9SChhaCk7SShhaCxiKX1mdW5jdGlvbiBmaCgpe0goYWgpO0goYmgpO0goY2gpfWZ1bmN0aW9uIGdoKGEpe2RoKGNoLmN1cnJlbnQpO3ZhciBiPWRoKGFoLmN1cnJlbnQpO3ZhciBjPW1iKGIsYS50eXBlKTtiIT09YyYmKEkoYmgsYSksSShhaCxjKSl9ZnVuY3Rpb24gaGgoYSl7YmguY3VycmVudD09PWEmJihIKGFoKSxIKGJoKSl9dmFyIFA9QmYoMCk7XG5mdW5jdGlvbiBpaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBqaD1udWxsLGtoPW51bGwsbGg9ITE7XG5mdW5jdGlvbiBtaChhLGIpe3ZhciBjPW5oKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmZsYWdzPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBvaChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcGgoYSl7aWYobGgpe3ZhciBiPWtoO2lmKGIpe3ZhciBjPWI7aWYoIW9oKGEsYikpe2I9cmYoYy5uZXh0U2libGluZyk7aWYoIWJ8fCFvaChhLGIpKXthLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MjtsaD0hMTtqaD1hO3JldHVybn1taChqaCxjKX1qaD1hO2toPXJmKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MixsaD0hMSxqaD1hfX1mdW5jdGlvbiBxaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47amg9YX1cbmZ1bmN0aW9uIHJoKGEpe2lmKGEhPT1qaClyZXR1cm4hMTtpZighbGgpcmV0dXJuIHFoKGEpLGxoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhbmYoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWtoO2I7KW1oKGEsYiksYj1yZihiLm5leHRTaWJsaW5nKTtxaChhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHkoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe2toPXJmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9a2g9bnVsbH19ZWxzZSBraD1qaD9yZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1cbmZ1bmN0aW9uIHNoKCl7a2g9amg9bnVsbDtsaD0hMX12YXIgdGg9W107ZnVuY3Rpb24gdWgoKXtmb3IodmFyIGE9MDthPHRoLmxlbmd0aDthKyspdGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDt0aC5sZW5ndGg9MH12YXIgdmg9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcix3aD1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyx4aD0wLFI9bnVsbCxTPW51bGwsVD1udWxsLHloPSExLHpoPSExO2Z1bmN0aW9uIEFoKCl7dGhyb3cgRXJyb3IoeSgzMjEpKTt9ZnVuY3Rpb24gQmgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIENoKGEsYixjLGQsZSxmKXt4aD1mO1I9YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO3ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/RGg6RWg7YT1jKGQsZSk7aWYoemgpe2Y9MDtkb3t6aD0hMTtpZighKDI1PmYpKXRocm93IEVycm9yKHkoMzAxKSk7Zis9MTtUPVM9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7dmguY3VycmVudD1GaDthPWMoZCxlKX13aGlsZSh6aCl9dmguY3VycmVudD1HaDtiPW51bGwhPT1TJiZudWxsIT09Uy5uZXh0O3hoPTA7VD1TPVI9bnVsbDt5aD0hMTtpZihiKXRocm93IEVycm9yKHkoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWE7cmV0dXJuIFR9XG5mdW5jdGlvbiBJaCgpe2lmKG51bGw9PT1TKXt2YXIgYT1SLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1TLm5leHQ7dmFyIGI9bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlOlQubmV4dDtpZihudWxsIT09YilUPWIsUz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeSgzMTApKTtTPWE7YT17bWVtb2l6ZWRTdGF0ZTpTLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOlMuYmFzZVN0YXRlLGJhc2VRdWV1ZTpTLmJhc2VRdWV1ZSxxdWV1ZTpTLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hfXJldHVybiBUfWZ1bmN0aW9uIEpoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gS2goYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1TLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2U9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1mPW51bGwsaz1lO2Rve3ZhciBsPWsubGFuZTtpZigoeGgmbCk9PT1sKW51bGwhPT1oJiYoaD1oLm5leHQ9e2xhbmU6MCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLGVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGQsay5hY3Rpb24pO2Vsc2V7dmFyIG49e2xhbmU6bCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLFxuZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09aD8oZz1oPW4sZj1kKTpoPWgubmV4dD1uO1IubGFuZXN8PWw7RGd8PWx9az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1lKTtudWxsPT09aD9mPWQ6aC5uZXh0PWc7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWY7Yi5iYXNlUXVldWU9aDtjLmxhc3RSZW5kZXJlZFN0YXRlPWR9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIExoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfVxuZnVuY3Rpb24gTWgoYSxiLGMpe3ZhciBkPWIuX2dldFZlcnNpb247ZD1kKGIuX3NvdXJjZSk7dmFyIGU9Yi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeTtpZihudWxsIT09ZSlhPWU9PT1kO2Vsc2UgaWYoYT1hLm11dGFibGVSZWFkTGFuZXMsYT0oeGgmYSk9PT1hKWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9ZCx0aC5wdXNoKGIpO2lmKGEpcmV0dXJuIGMoYi5fc291cmNlKTt0aC5wdXNoKGIpO3Rocm93IEVycm9yKHkoMzUwKSk7fVxuZnVuY3Rpb24gTmgoYSxiLGMsZCl7dmFyIGU9VTtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih5KDM0OSkpO3ZhciBmPWIuX2dldFZlcnNpb24sZz1mKGIuX3NvdXJjZSksaD12aC5jdXJyZW50LGs9aC51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBNaChlLGIsYyl9KSxsPWtbMV0sbj1rWzBdO2s9VDt2YXIgQT1hLm1lbW9pemVkU3RhdGUscD1BLnJlZnMsQz1wLmdldFNuYXBzaG90LHg9QS5zb3VyY2U7QT1BLnN1YnNjcmliZTt2YXIgdz1SO2EubWVtb2l6ZWRTdGF0ZT17cmVmczpwLHNvdXJjZTpiLHN1YnNjcmliZTpkfTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3AuZ2V0U25hcHNob3Q9YztwLnNldFNuYXBzaG90PWw7dmFyIGE9ZihiLl9zb3VyY2UpO2lmKCFIZShnLGEpKXthPWMoYi5fc291cmNlKTtIZShuLGEpfHwobChhKSxhPUlnKHcpLGUubXV0YWJsZVJlYWRMYW5lc3w9YSZlLnBlbmRpbmdMYW5lcyk7YT1lLm11dGFibGVSZWFkTGFuZXM7ZS5lbnRhbmdsZWRMYW5lc3w9YTtmb3IodmFyIGQ9XG5lLmVudGFuZ2xlbWVudHMsaD1hOzA8aDspe3ZhciBrPTMxLVZjKGgpLHY9MTw8aztkW2tdfD1hO2gmPX52fX19LFtjLGIsZF0pO2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGQoYi5fc291cmNlLGZ1bmN0aW9uKCl7dmFyIGE9cC5nZXRTbmFwc2hvdCxjPXAuc2V0U25hcHNob3Q7dHJ5e2MoYShiLl9zb3VyY2UpKTt2YXIgZD1JZyh3KTtlLm11dGFibGVSZWFkTGFuZXN8PWQmZS5wZW5kaW5nTGFuZXN9Y2F0Y2gocSl7YyhmdW5jdGlvbigpe3Rocm93IHE7fSl9fSl9LFtiLGRdKTtIZShDLGMpJiZIZSh4LGIpJiZIZShBLGQpfHwoYT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTpufSxhLmRpc3BhdGNoPWw9T2guYmluZChudWxsLFIsYSksay5xdWV1ZT1hLGsuYmFzZVF1ZXVlPW51bGwsbj1NaChlLGIsYyksay5tZW1vaXplZFN0YXRlPWsuYmFzZVN0YXRlPW4pO3JldHVybiBufVxuZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPUloKCk7cmV0dXJuIE5oKGQsYSxiLGMpfWZ1bmN0aW9uIFFoKGEpe3ZhciBiPUhoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gUmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9Ui51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsfSxSLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKGEpe3ZhciBiPUhoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9ZnVuY3Rpb24gVGgoKXtyZXR1cm4gSWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIFVoKGEsYixjLGQpe3ZhciBlPUhoKCk7Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIFZoKGEsYixjLGQpe3ZhciBlPUloKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVMpe3ZhciBnPVMubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmQmgoZCxnLmRlcHMpKXtSaChiLGMsZixkKTtyZXR1cm59fVIuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLGYsZCl9ZnVuY3Rpb24gV2goYSxiKXtyZXR1cm4gVWgoNTE2LDQsYSxiKX1mdW5jdGlvbiBYaChhLGIpe3JldHVybiBWaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFZoKDQsMixhLGIpfWZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19XG5mdW5jdGlvbiAkaChhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFZoKDQsMixaaC5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiBhaSgpe31mdW5jdGlvbiBiaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiBjaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGRpKGEsYil7dmFyIGM9ZWcoKTtnZyg5OD5jPzk4OmMsZnVuY3Rpb24oKXthKCEwKX0pO2dnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBjPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXthKCExKSxiKCl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWN9fSl9XG5mdW5jdGlvbiBPaChhLGIsYyl7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9e2xhbmU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIucGVuZGluZztudWxsPT09Zz9mLm5leHQ9ZjooZi5uZXh0PWcubmV4dCxnLm5leHQ9Zik7Yi5wZW5kaW5nPWY7Zz1hLmFsdGVybmF0ZTtpZihhPT09Unx8bnVsbCE9PWcmJmc9PT1SKXpoPXloPSEwO2Vsc2V7aWYoMD09PWEubGFuZXMmJihudWxsPT09Z3x8MD09PWcubGFuZXMpJiYoZz1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWcpKXRyeXt2YXIgaD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZyhoLGMpO2YuZWFnZXJSZWR1Y2VyPWc7Zi5lYWdlclN0YXRlPWs7aWYoSGUoayxoKSlyZXR1cm59Y2F0Y2gobCl7fWZpbmFsbHl7fUpnKGEsZSxkKX19XG52YXIgR2g9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOkFoLHVzZUNvbnRleHQ6QWgsdXNlRWZmZWN0OkFoLHVzZUltcGVyYXRpdmVIYW5kbGU6QWgsdXNlTGF5b3V0RWZmZWN0OkFoLHVzZU1lbW86QWgsdXNlUmVkdWNlcjpBaCx1c2VSZWY6QWgsdXNlU3RhdGU6QWgsdXNlRGVidWdWYWx1ZTpBaCx1c2VEZWZlcnJlZFZhbHVlOkFoLHVzZVRyYW5zaXRpb246QWgsdXNlTXV0YWJsZVNvdXJjZTpBaCx1c2VPcGFxdWVJZGVudGlmaWVyOkFoLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRGg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7SGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6V2gsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFVoKDQsMixaaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWgoNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1IaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpTaCx1c2VTdGF0ZTpRaCx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9UWgoYSksYz1iWzBdLGQ9YlsxXTtXaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247XG53aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9UWgoITEpLGI9YVswXTthPWRpLmJpbmQobnVsbCxhWzFdKTtTaChhKTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtkLm1lbW9pemVkU3RhdGU9e3JlZnM6e2dldFNuYXBzaG90OmIsc2V0U25hcHNob3Q6bnVsbH0sc291cmNlOmEsc3Vic2NyaWJlOmN9O3JldHVybiBOaChkLGEsYixjKX0sdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe2lmKGxoKXt2YXIgYT0hMSxiPXVmKGZ1bmN0aW9uKCl7YXx8KGE9ITAsYyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSkpO3Rocm93IEVycm9yKHkoMzU1KSk7fSksYz1RaChiKVsxXTswPT09KFIubW9kZSYyKSYmKFIuZmxhZ3N8PTUxNixSaCg1LGZ1bmN0aW9uKCl7YyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSl9LFxudm9pZCAwLG51bGwpKTtyZXR1cm4gYn1iPVwicjpcIisodGYrKykudG9TdHJpbmcoMzYpO1FoKGIpO3JldHVybiBifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEVoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6S2gsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUtoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9S2goSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxGaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOkxoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBMaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1MaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUxoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBMaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sZWk9cmEuUmVhY3RDdXJyZW50T3duZXIsdWc9ITE7ZnVuY3Rpb24gZmkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9aZyhiLG51bGwsYyxkKTpZZyhiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBnaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dGcoYixlKTtkPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlpKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhamkoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsa2koYSxiLGcsZCxlLGYpO2E9VmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKDA9PT0oZSZmKSYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpKZSxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBoaShhLGIsZik7Yi5mbGFnc3w9MTthPVRnKGcsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24ga2koYSxiLGMsZCxlLGYpe2lmKG51bGwhPT1hJiZKZShhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYpaWYodWc9ITEsMCE9PShmJmUpKTAhPT0oYS5mbGFncyYxNjM4NCkmJih1Zz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLGhpKGEsYixmKTtyZXR1cm4gbGkoYSxiLGMsZCxmKX1cbmZ1bmN0aW9uIG1pKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlfHxcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixjKTtlbHNlIGlmKDAhPT0oYyYxMDczNzQxODI0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLG51bGwhPT1mP2YuYmFzZUxhbmVzOmMpO2Vsc2UgcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YX0sbmkoYixhKSxudWxsO2Vsc2UgbnVsbCE9PWY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLG5pKGIsZCk7ZmkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBvaShhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD0xMjh9ZnVuY3Rpb24gbGkoYSxiLGMsZCxlKXt2YXIgZj1GZihjKT9EZjpNLmN1cnJlbnQ7Zj1FZihiLGYpO3RnKGIsZSk7Yz1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUpe2lmKEZmKGMpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7dGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksTWcoYixjLGQpLE9nKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXZnKGwpOihsPUZmKGMpP0RmOk0uY3VycmVudCxsPUVmKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZOZyhiLGcsZCxsKTt3Zz0hMTt2YXIgcD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxwIT09a3x8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihHZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9d2d8fExnKGIsYyxoLGQscCxrLGwpKT8oQXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO3lnKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6bGcoYi50eXBlLGgpO2cucHJvcHM9bDtBPWIucGVuZGluZ1Byb3BzO3A9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9dmcoayk6KGs9RmYoYyk/RGY6TS5jdXJyZW50LGs9RWYoYixrKSk7dmFyIEM9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG49XCJmdW5jdGlvblwiPT09dHlwZW9mIEN8fFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1BfHxwIT09aykmJk5nKGIsZyxkLGspO3dnPSExO3A9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7aCE9PUF8fHAhPT14fHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyYmKEdnKGIsYyxDLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobD13Z3x8TGcoYixjLGwsZCxwLHgsaykpPyhufHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLFxueCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9eCksZy5wcm9wcz1kLGcuc3RhdGU9eCxnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fFxuaD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxkPSExKX1yZXR1cm4gcWkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gcWkoYSxiLGMsZCxlLGYpe29pKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJktmKGIsYywhMSksaGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7ZWkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1ZZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVlnKGIsbnVsbCxoLGYpKTpmaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZLZihiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/SGYoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmSGYoYSxiLmNvbnRleHQsITEpO2VoKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBzaT17ZGVoeWRyYXRlZDpudWxsLHJldHJ5TGFuZTowfTtcbmZ1bmN0aW9uIHRpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPVAuY3VycmVudCxmPSExLGc7KGc9MCE9PShiLmZsYWdzJjY0KSl8fChnPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7Zz8oZj0hMCxiLmZsYWdzJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1kLmZhbGxiYWNrfHwhMD09PWQudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChlfD0xKTtJKFAsZSYxKTtpZihudWxsPT09YSl7dm9pZCAwIT09ZC5mYWxsYmFjayYmcGgoYik7YT1kLmNoaWxkcmVuO2U9ZC5mYWxsYmFjaztpZihmKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LGIubWVtb2l6ZWRTdGF0ZT1zaSxhO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgZC51bnN0YWJsZV9leHBlY3RlZExvYWRUaW1lKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LFxuYi5tZW1vaXplZFN0YXRlPXNpLGIubGFuZXM9MzM1NTQ0MzIsYTtjPXZpKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmF9LGIubW9kZSxjLG51bGwpO2MucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9Y31pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXtpZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9OntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWlmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306XG57YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31mdW5jdGlvbiB1aShhLGIsYyxkKXt2YXIgZT1hLm1vZGUsZj1hLmNoaWxkO2I9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpifTswPT09KGUmMikmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1iKTpmPXZpKGIsZSwwLG51bGwpO2M9WGcoYyxlLGQsbnVsbCk7Zi5yZXR1cm49YTtjLnJldHVybj1hO2Yuc2libGluZz1jO2EuY2hpbGQ9ZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHhpKGEsYixjLGQpe3ZhciBlPWEuY2hpbGQ7YT1lLnNpYmxpbmc7Yz1UZyhlLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmN9KTswPT09KGIubW9kZSYyKSYmKGMubGFuZXM9ZCk7Yy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGEubmV4dEVmZmVjdD1udWxsLGEuZmxhZ3M9OCxiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1hKTtyZXR1cm4gYi5jaGlsZD1jfVxuZnVuY3Rpb24gd2koYSxiLGMsZCxlKXt2YXIgZj1iLm1vZGUsZz1hLmNoaWxkO2E9Zy5zaWJsaW5nO3ZhciBoPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Y307MD09PShmJjIpJiZiLmNoaWxkIT09Zz8oYz1iLmNoaWxkLGMuY2hpbGRMYW5lcz0wLGMucGVuZGluZ1Byb3BzPWgsZz1jLmxhc3RFZmZlY3QsbnVsbCE9PWc/KGIuZmlyc3RFZmZlY3Q9Yy5maXJzdEVmZmVjdCxiLmxhc3RFZmZlY3Q9ZyxnLm5leHRFZmZlY3Q9bnVsbCk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbCk6Yz1UZyhnLGgpO251bGwhPT1hP2Q9VGcoYSxkKTooZD1YZyhkLGYsZSxudWxsKSxkLmZsYWdzfD0yKTtkLnJldHVybj1iO2MucmV0dXJuPWI7Yy5zaWJsaW5nPWQ7Yi5jaGlsZD1jO3JldHVybiBkfWZ1bmN0aW9uIHlpKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO3NnKGEucmV0dXJuLGIpfVxuZnVuY3Rpb24gemkoYSxiLGMsZCxlLGYpe3ZhciBnPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zz9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcucmVuZGVyaW5nU3RhcnRUaW1lPTAsZy5sYXN0PWQsZy50YWlsPWMsZy50YWlsTW9kZT1lLGcubGFzdEVmZmVjdD1mKX1cbmZ1bmN0aW9uIEFpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7ZmkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnlpKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXlpKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoUCxkKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09aWgoYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt6aShiLCExLGUsYyxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1paChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9emkoYiwhMCxjLG51bGwsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOnppKGIsITEsbnVsbCxudWxsLHZvaWQgMCxiLmxhc3RFZmZlY3QpO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7RGd8PWIubGFuZXM7aWYoMCE9PShjJmIuY2hpbGRMYW5lcykpe2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcih5KDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1UZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9VGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1yZXR1cm4gbnVsbH12YXIgQmksQ2ksRGksRWk7XG5CaT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07Q2k9ZnVuY3Rpb24oKXt9O1xuRGk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO2RoKGFoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGUpO2Q9ZWIoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1qZil9dmIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1cbmwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiYoY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8XG4oYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkcoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTpcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09R2E/ay50b1N0cmluZygpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixcbmMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtFaT1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtmdW5jdGlvbiBGaShhLGIpe2lmKCFsaClzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIG51bGw7Y2FzZSAxOnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpcmgoYik/Yi5mbGFnc3w9NDpkLmh5ZHJhdGV8fChiLmZsYWdzfD0yNTYpO0NpKGIpO3JldHVybiBudWxsO2Nhc2UgNTpoaChiKTt2YXIgZT1kaChjaC5jdXJyZW50KTtjPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRGkoYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KTtlbHNle2lmKCFkKXtpZihudWxsPT09XG5iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO3JldHVybiBudWxsfWE9ZGgoYWguY3VycmVudCk7aWYocmgoYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2Rbd2ZdPWI7ZFt4Zl09Zjtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixkKTtHKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGE9MDthPFhlLmxlbmd0aDthKyspRyhYZVthXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZCk7RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxHKFwiaW52YWxpZFwiLGQpfXZiKGMsZik7YT1udWxsO2Zvcih2YXIgZyBpbiBmKWYuaGFzT3duUHJvcGVydHkoZykmJihlPWZbZ10sXCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGU/ZC50ZXh0Q29udGVudCE9PWUmJihhPVtcImNoaWxkcmVuXCIsZV0pOlwibnVtYmVyXCI9PT10eXBlb2YgZSYmZC50ZXh0Q29udGVudCE9PVwiXCIrZSYmKGE9W1wiY2hpbGRyZW5cIixcIlwiK2VdKTpjYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9ZSYmXCJvblNjcm9sbFwiPT09ZyYmRyhcInNjcm9sbFwiLGQpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7Y2IoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1cbmpmKX1kPWE7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O2E9PT1rYi5odG1sJiYoYT1sYihjKSk7YT09PWtiLmh0bWw/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW3dmXT1iO2FbeGZdPWQ7QmkoYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2c9d2IoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixhKTtHKFwiY2xvc2VcIixhKTtcbmU9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxYZS5sZW5ndGg7ZSsrKUcoWGVbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsYSk7RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1cbmdiKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH12YihjLGUpO3ZhciBoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/dGIoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm9iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1jfHxcIlwiIT09aykmJnBiKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZwYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGNhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkcoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZxYShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2NiKGEsZCwhMSk7XG5icmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1qZil9bWYoYyxkKSYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCl9cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUVpKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO1xuYz1kaChjaC5jdXJyZW50KTtkaChhaC5jdXJyZW50KTtyaChiKT8oZD1iLnN0YXRlTm9kZSxjPWIubWVtb2l6ZWRQcm9wcyxkW3dmXT1iLGQubm9kZVZhbHVlIT09YyYmKGIuZmxhZ3N8PTQpKTooZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbd2ZdPWIsYi5zdGF0ZU5vZGU9ZCl9cmV0dXJuIG51bGw7Y2FzZSAxMzpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7Yz0hMTtudWxsPT09YT92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJnJoKGIpOmM9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZihkJiYhYyYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWEmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KFAuY3VycmVudCYxKSkwPT09ViYmKFY9Myk7ZWxzZXtpZigwPT09Vnx8Mz09PVYpVj1cbjQ7bnVsbD09PVV8fDA9PT0oRGcmMTM0MjE3NzI3KSYmMD09PShIaSYxMzQyMTc3MjcpfHxJaShVLFcpfWlmKGR8fGMpYi5mbGFnc3w9NDtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksQ2koYiksbnVsbD09PWEmJmNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYiksbnVsbDtjYXNlIDE3OnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAxOTpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Y9MCE9PShiLmZsYWdzJjY0KTtnPWQucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGYpRmkoZCwhMSk7ZWxzZXtpZigwIT09Vnx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9aWgoYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTY0O0ZpKGQsITEpO2Y9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGIudXBkYXRlUXVldWU9ZixiLmZsYWdzfD00KTtcbm51bGw9PT1kLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3Q7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MixmLm5leHRFZmZlY3Q9bnVsbCxmLmZpcnN0RWZmZWN0PW51bGwsZi5sYXN0RWZmZWN0PW51bGwsZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLFxuZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztJKFAsUC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1hLnNpYmxpbmd9bnVsbCE9PWQudGFpbCYmTygpPkppJiYoYi5mbGFnc3w9NjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKX1lbHNle2lmKCFmKWlmKGE9aWgoZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTY0LGY9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEZpKGQsITApLG51bGw9PT1kLnRhaWwmJlwiaGlkZGVuXCI9PT1kLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFsaClyZXR1cm4gYj1iLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0LG51bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpLG51bGx9ZWxzZSAyKk8oKS1kLnJlbmRlcmluZ1N0YXJ0VGltZT5KaSYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD1cbjY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMik7ZC5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1kLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGQubGFzdD1nKX1yZXR1cm4gbnVsbCE9PWQudGFpbD8oYz1kLnRhaWwsZC5yZW5kZXJpbmc9YyxkLnRhaWw9Yy5zaWJsaW5nLGQubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QsZC5yZW5kZXJpbmdTdGFydFRpbWU9TygpLGMuc2libGluZz1udWxsLGI9UC5jdXJyZW50LEkoUCxmP2ImMXwyOmImMSksYyk6bnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT0obnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSkmJlwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIiE9PWQubW9kZSYmKGIuZmxhZ3N8PTQpLG51bGx9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBMaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpGZihhLnR5cGUpJiZHZigpO3ZhciBiPWEuZmxhZ3M7cmV0dXJuIGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7Yj1hLmZsYWdzO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IoeSgyODUpKTthLmZsYWdzPWImLTQwOTd8NjQ7cmV0dXJuIGE7Y2FzZSA1OnJldHVybiBoaChhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIEgoUCksYj1hLmZsYWdzLGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAxOTpyZXR1cm4gSChQKSxudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGEpLG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBNaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1RYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZX19ZnVuY3Rpb24gTmkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE9pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIFBpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe1FpfHwoUWk9ITAsUmk9ZCk7TmkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7TmkoYSxiKTtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVRpP1RpPW5ldyBTZXQoW3RoaXNdKTpUaS5hZGQodGhpcyksTmkoYSxiKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9dmFyIFVpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O1xuZnVuY3Rpb24gVmkoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7V2koYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfWZ1bmN0aW9uIFhpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6cmV0dXJuO2Nhc2UgMTppZihiLmZsYWdzJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6bGcoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1yZXR1cm47Y2FzZSAzOmIuZmxhZ3MmMjU2JiZxZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTtyZXR1cm47Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBZaShhLGIsYyl7c3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97aWYoMz09PShhLnRhZyYzKSl7dmFyIGQ9YS5jcmVhdGU7YS5kZXN0cm95PWQoKX1hPWEubmV4dH13aGlsZShhIT09Yil9Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97dmFyIGU9YTtkPWUubmV4dDtlPWUudGFnOzAhPT0oZSY0KSYmMCE9PShlJjEpJiYoWmkoYyxhKSwkaShjLGEpKTthPWR9d2hpbGUoYSE9PWIpfXJldHVybjtjYXNlIDE6YT1jLnN0YXRlTm9kZTtjLmZsYWdzJjQmJihudWxsPT09Yj9hLmNvbXBvbmVudERpZE1vdW50KCk6KGQ9Yy5lbGVtZW50VHlwZT09PWMudHlwZT9iLm1lbW9pemVkUHJvcHM6bGcoYy50eXBlLGIubWVtb2l6ZWRQcm9wcyksYS5jb21wb25lbnREaWRVcGRhdGUoZCxcbmIubWVtb2l6ZWRTdGF0ZSxhLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKSkpO2I9Yy51cGRhdGVRdWV1ZTtudWxsIT09YiYmRWcoYyxiLGEpO3JldHVybjtjYXNlIDM6Yj1jLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthPW51bGw7aWYobnVsbCE9PWMuY2hpbGQpc3dpdGNoKGMuY2hpbGQudGFnKXtjYXNlIDU6YT1jLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6YT1jLmNoaWxkLnN0YXRlTm9kZX1FZyhjLGIsYSl9cmV0dXJuO2Nhc2UgNTphPWMuc3RhdGVOb2RlO251bGw9PT1iJiZjLmZsYWdzJjQmJm1mKGMudHlwZSxjLm1lbW9pemVkUHJvcHMpJiZhLmZvY3VzKCk7cmV0dXJuO2Nhc2UgNjpyZXR1cm47Y2FzZSA0OnJldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGw9PT1jLm1lbW9pemVkU3RhdGUmJihjPWMuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYz1jLm1lbW9pemVkU3RhdGUsbnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsIT09YyYmQ2MoYykpKSk7XG5yZXR1cm47Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpjYXNlIDIzOmNhc2UgMjQ6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gYWooYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZD1kLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLnNldFByb3BlcnR5P2Quc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6ZC5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PXNiKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKCgyMyE9PWMudGFnJiYyNCE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHxjPT09YSkmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09XG5hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gYmooYSxiKXtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtNZi5vbkNvbW1pdEZpYmVyVW5tb3VudChMZixiKX1jYXRjaChmKXt9c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjphPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWEmJihhPWEubGFzdEVmZmVjdCxudWxsIT09YSkpe3ZhciBjPWE9YS5uZXh0O2Rve3ZhciBkPWMsZT1kLmRlc3Ryb3k7ZD1kLnRhZztpZih2b2lkIDAhPT1lKWlmKDAhPT0oZCY0KSlaaShiLGMpO2Vsc2V7ZD1iO3RyeXtlKCl9Y2F0Y2goZil7V2koZCxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWEpfWJyZWFrO2Nhc2UgMTpWaShiKTthPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXthLnByb3BzPWIubWVtb2l6ZWRQcm9wcyxhLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxhLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7V2koYixcbmYpfWJyZWFrO2Nhc2UgNTpWaShiKTticmVhaztjYXNlIDQ6Y2ooYSxiKX19ZnVuY3Rpb24gZGooYSl7YS5hbHRlcm5hdGU9bnVsbDthLmNoaWxkPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmZpcnN0RWZmZWN0PW51bGw7YS5sYXN0RWZmZWN0PW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnJldHVybj1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBlaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIGZqKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKGVqKGIpKWJyZWFrIGE7Yj1iLnJldHVybn10aHJvdyBFcnJvcih5KDE2MCkpO312YXIgYz1iO2I9Yy5zdGF0ZU5vZGU7c3dpdGNoKGMudGFnKXtjYXNlIDU6dmFyIGQ9ITE7YnJlYWs7Y2FzZSAzOmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDE2MSkpO31jLmZsYWdzJjE2JiYocGIoYixcIlwiKSxjLmZsYWdzJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8ZWooYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5mbGFncyYyKWNvbnRpbnVlIGI7aWYobnVsbD09PVxuYy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZmxhZ3MmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19ZD9naihhLGMsYik6aGooYSxjLGIpfVxuZnVuY3Rpb24gZ2ooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPWpmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspZ2ooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gaGooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihoaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWhqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGNqKGEsYil7Zm9yKHZhciBjPWIsZD0hMSxlLGY7Oyl7aWYoIWQpe2Q9Yy5yZXR1cm47YTpmb3IoOzspe2lmKG51bGw9PT1kKXRocm93IEVycm9yKHkoMTYwKSk7ZT1kLnN0YXRlTm9kZTtzd2l0Y2goZC50YWcpe2Nhc2UgNTpmPSExO2JyZWFrIGE7Y2FzZSAzOmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYTtjYXNlIDQ6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhfWQ9ZC5yZXR1cm59ZD0hMH1pZig1PT09Yy50YWd8fDY9PT1jLnRhZyl7YTpmb3IodmFyIGc9YSxoPWMsaz1oOzspaWYoYmooZyxrKSxudWxsIT09ay5jaGlsZCYmNCE9PWsudGFnKWsuY2hpbGQucmV0dXJuPWssaz1rLmNoaWxkO2Vsc2V7aWYoaz09PWgpYnJlYWsgYTtmb3IoO251bGw9PT1rLnNpYmxpbmc7KXtpZihudWxsPT09ay5yZXR1cm58fGsucmV0dXJuPT09aClicmVhayBhO2s9ay5yZXR1cm59ay5zaWJsaW5nLnJldHVybj1rLnJldHVybjtrPWsuc2libGluZ31mPyhnPWUsaD1jLnN0YXRlTm9kZSxcbjg9PT1nLm5vZGVUeXBlP2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKTpnLnJlbW92ZUNoaWxkKGgpKTplLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGJqKGEsYyksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gaWooYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOnZhciBjPWIudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG8gMz09PShkLnRhZyYzKSYmKGE9ZC5kZXN0cm95LGQuZGVzdHJveT12b2lkIDAsdm9pZCAwIT09YSYmYSgpKSxkPWQubmV4dDt3aGlsZShkIT09Yyl9cmV0dXJuO2Nhc2UgMTpyZXR1cm47Y2FzZSA1OmM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7ZD1iLm1lbW9pemVkUHJvcHM7dmFyIGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbeGZdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJiRhKGMsZCk7d2IoYSxlKTtiPXdiKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPVxuMil7dmFyIGc9ZltlXSxoPWZbZSsxXTtcInN0eWxlXCI9PT1nP3RiKGMsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9vYihjLGgpOlwiY2hpbGRyZW5cIj09PWc/cGIoYyxoKTpxYShjLGcsaCxiKX1zd2l0Y2goYSl7Y2FzZSBcImlucHV0XCI6YWIoYyxkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihjLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2ZiKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9mYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1yZXR1cm47Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1cbmIubWVtb2l6ZWRQcm9wcztyZXR1cm47Y2FzZSAzOmM9Yi5zdGF0ZU5vZGU7Yy5oeWRyYXRlJiYoYy5oeWRyYXRlPSExLENjKGMuY29udGFpbmVySW5mbykpO3JldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGwhPT1iLm1lbW9pemVkU3RhdGUmJihqaj1PKCksYWooYi5jaGlsZCwhMCkpO2tqKGIpO3JldHVybjtjYXNlIDE5OmtqKGIpO3JldHVybjtjYXNlIDE3OnJldHVybjtjYXNlIDIzOmNhc2UgMjQ6YWooYixudWxsIT09Yi5tZW1vaXplZFN0YXRlKTtyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgVWkpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1sai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIG1qKGEsYil7cmV0dXJuIG51bGwhPT1hJiYoYT1hLm1lbW9pemVkU3RhdGUsbnVsbD09PWF8fG51bGwhPT1hLmRlaHlkcmF0ZWQpPyhiPWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YiYmbnVsbD09PWIuZGVoeWRyYXRlZCk6ITF9dmFyIG5qPU1hdGguY2VpbCxvaj1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHBqPXJhLlJlYWN0Q3VycmVudE93bmVyLFg9MCxVPW51bGwsWT1udWxsLFc9MCxxaj0wLHJqPUJmKDApLFY9MCxzaj1udWxsLHRqPTAsRGc9MCxIaT0wLHVqPTAsdmo9bnVsbCxqaj0wLEppPUluZmluaXR5O2Z1bmN0aW9uIHdqKCl7Smk9TygpKzUwMH12YXIgWj1udWxsLFFpPSExLFJpPW51bGwsVGk9bnVsbCx4aj0hMSx5aj1udWxsLHpqPTkwLEFqPVtdLEJqPVtdLENqPW51bGwsRGo9MCxFaj1udWxsLEZqPS0xLEdqPTAsSGo9MCxJaj1udWxsLEpqPSExO2Z1bmN0aW9uIEhnKCl7cmV0dXJuIDAhPT0oWCY0OCk/TygpOi0xIT09Rmo/Rmo6Rmo9TygpfVxuZnVuY3Rpb24gSWcoYSl7YT1hLm1vZGU7aWYoMD09PShhJjIpKXJldHVybiAxO2lmKDA9PT0oYSY0KSlyZXR1cm4gOTk9PT1lZygpPzE6MjswPT09R2omJihHaj10aik7aWYoMCE9PWtnLnRyYW5zaXRpb24pezAhPT1IaiYmKEhqPW51bGwhPT12aj92ai5wZW5kaW5nTGFuZXM6MCk7YT1Hajt2YXIgYj00MTg2MTEyJn5IajtiJj0tYjswPT09YiYmKGE9NDE4NjExMiZ+YSxiPWEmLWEsMD09PWImJihiPTgxOTIpKTtyZXR1cm4gYn1hPWVnKCk7MCE9PShYJjQpJiY5OD09PWE/YT1YYygxMixHaik6KGE9U2MoYSksYT1YYyhhLEdqKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZyhhLGIsYyl7aWYoNTA8RGopdGhyb3cgRGo9MCxFaj1udWxsLEVycm9yKHkoMTg1KSk7YT1LaihhLGIpO2lmKG51bGw9PT1hKXJldHVybiBudWxsOyRjKGEsYixjKTthPT09VSYmKEhpfD1iLDQ9PT1WJiZJaShhLFcpKTt2YXIgZD1lZygpOzE9PT1iPzAhPT0oWCY4KSYmMD09PShYJjQ4KT9MaihhKTooTWooYSxjKSwwPT09WCYmKHdqKCksaWcoKSkpOigwPT09KFgmNCl8fDk4IT09ZCYmOTkhPT1kfHwobnVsbD09PUNqP0NqPW5ldyBTZXQoW2FdKTpDai5hZGQoYSkpLE1qKGEsYykpO3ZqPWF9ZnVuY3Rpb24gS2ooYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfVxuZnVuY3Rpb24gTWooYSxiKXtmb3IodmFyIGM9YS5jYWxsYmFja05vZGUsZD1hLnN1c3BlbmRlZExhbmVzLGU9YS5waW5nZWRMYW5lcyxmPWEuZXhwaXJhdGlvblRpbWVzLGc9YS5wZW5kaW5nTGFuZXM7MDxnOyl7dmFyIGg9MzEtVmMoZyksaz0xPDxoLGw9ZltoXTtpZigtMT09PWwpe2lmKDA9PT0oayZkKXx8MCE9PShrJmUpKXtsPWI7UmMoayk7dmFyIG49RjtmW2hdPTEwPD1uP2wrMjUwOjY8PW4/bCs1RTM6LTF9fWVsc2UgbDw9YiYmKGEuZXhwaXJlZExhbmVzfD1rKTtnJj1+a31kPVVjKGEsYT09PVU/VzowKTtiPUY7aWYoMD09PWQpbnVsbCE9PWMmJihjIT09WmYmJlBmKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTApO2Vsc2V7aWYobnVsbCE9PWMpe2lmKGEuY2FsbGJhY2tQcmlvcml0eT09PWIpcmV0dXJuO2MhPT1aZiYmUGYoYyl9MTU9PT1iPyhjPUxqLmJpbmQobnVsbCxhKSxudWxsPT09YWc/KGFnPVtjXSxiZz1PZihVZixqZykpOmFnLnB1c2goYyksXG5jPVpmKToxND09PWI/Yz1oZyg5OSxMai5iaW5kKG51bGwsYSkpOihjPVRjKGIpLGM9aGcoYyxOai5iaW5kKG51bGwsYSkpKTthLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIE5qKGEpe0ZqPS0xO0hqPUdqPTA7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBiPWEuY2FsbGJhY2tOb2RlO2lmKE9qKCkmJmEuY2FsbGJhY2tOb2RlIT09YilyZXR1cm4gbnVsbDt2YXIgYz1VYyhhLGE9PT1VP1c6MCk7aWYoMD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9Yzt2YXIgZT1YO1h8PTE2O3ZhciBmPVBqKCk7aWYoVSE9PWF8fFchPT1kKXdqKCksUWooYSxkKTtkbyB0cnl7UmooKTticmVha31jYXRjaChoKXtTaihhLGgpfXdoaWxlKDEpO3FnKCk7b2ouY3VycmVudD1mO1g9ZTtudWxsIT09WT9kPTA6KFU9bnVsbCxXPTAsZD1WKTtpZigwIT09KHRqJkhpKSlRaihhLDApO2Vsc2UgaWYoMCE9PWQpezI9PT1kJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGM9V2MoYSksMCE9PWMmJihkPVRqKGEsYykpKTtpZigxPT09ZCl0aHJvdyBiPXNqLFFqKGEsMCksSWkoYSxjKSxNaihhLE8oKSksYjthLmZpbmlzaGVkV29yaz1cbmEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWM7c3dpdGNoKGQpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IoeSgzNDUpKTtjYXNlIDI6VWooYSk7YnJlYWs7Y2FzZSAzOklpKGEsYyk7aWYoKGMmNjI5MTQ1NjApPT09YyYmKGQ9amorNTAwLU8oKSwxMDxkKSl7aWYoMCE9PVVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmMpIT09Yyl7SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxkKTticmVha31VaihhKTticmVhaztjYXNlIDQ6SWkoYSxjKTtpZigoYyY0MTg2MTEyKT09PWMpYnJlYWs7ZD1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxjOyl7dmFyIGc9MzEtVmMoYyk7Zj0xPDxnO2c9ZFtnXTtnPmUmJihlPWcpO2MmPX5mfWM9ZTtjPU8oKS1jO2M9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+XG5jPzQzMjA6MTk2MCpuaihjLzE5NjApKS1jO2lmKDEwPGMpe2EudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksYyk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA1OlVqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMjkpKTt9fU1qKGEsTygpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1iP05qLmJpbmQobnVsbCxhKTpudWxsfWZ1bmN0aW9uIElpKGEsYil7YiY9fnVqO2ImPX5IaTthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLVZjKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1cbmZ1bmN0aW9uIExqKGEpe2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTtPaigpO2lmKGE9PT1VJiYwIT09KGEuZXhwaXJlZExhbmVzJlcpKXt2YXIgYj1XO3ZhciBjPVRqKGEsYik7MCE9PSh0aiZIaSkmJihiPVVjKGEsYiksYz1UaihhLGIpKX1lbHNlIGI9VWMoYSwwKSxjPVRqKGEsYik7MCE9PWEudGFnJiYyPT09YyYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxiPVdjKGEpLDAhPT1iJiYoYz1UaihhLGIpKSk7aWYoMT09PWMpdGhyb3cgYz1zaixRaihhLDApLElpKGEsYiksTWooYSxPKCkpLGM7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtVaihhKTtNaihhLE8oKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaigpe2lmKG51bGwhPT1Dail7dmFyIGE9Q2o7Q2o9bnVsbDthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5leHBpcmVkTGFuZXN8PTI0JmEucGVuZGluZ0xhbmVzO01qKGEsTygpKX0pfWlnKCl9ZnVuY3Rpb24gV2ooYSxiKXt2YXIgYz1YO1h8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1YO1gmPS0yO1h8PTg7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gbmkoYSxiKXtJKHJqLHFqKTtxanw9Yjt0anw9Yn1mdW5jdGlvbiBLaSgpe3FqPXJqLmN1cnJlbnQ7SChyail9XG5mdW5jdGlvbiBRaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxwZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiZHZigpO2JyZWFrO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2JyZWFrO2Nhc2UgNTpoaChkKTticmVhaztjYXNlIDQ6ZmgoKTticmVhaztjYXNlIDEzOkgoUCk7YnJlYWs7Y2FzZSAxOTpIKFApO2JyZWFrO2Nhc2UgMTA6cmcoZCk7YnJlYWs7Y2FzZSAyMzpjYXNlIDI0OktpKCl9Yz1jLnJldHVybn1VPWE7WT1UZyhhLmN1cnJlbnQsbnVsbCk7Vz1xaj10aj1iO1Y9MDtzaj1udWxsO3VqPUhpPURnPTB9XG5mdW5jdGlvbiBTaihhLGIpe2Rve3ZhciBjPVk7dHJ5e3FnKCk7dmguY3VycmVudD1HaDtpZih5aCl7Zm9yKHZhciBkPVIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9eWg9ITF9eGg9MDtUPVM9Uj1udWxsO3poPSExO3BqLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtWPTE7c2o9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1XO2guZmxhZ3N8PTIwNDg7aC5maXJzdEVmZmVjdD1oLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rO2lmKDA9PT0oaC5tb2RlJjIpKXt2YXIgbj1oLmFsdGVybmF0ZTtuPyhoLnVwZGF0ZVF1ZXVlPW4udXBkYXRlUXVldWUsaC5tZW1vaXplZFN0YXRlPW4ubWVtb2l6ZWRTdGF0ZSxoLmxhbmVzPW4ubGFuZXMpOlxuKGgudXBkYXRlUXVldWU9bnVsbCxoLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIEE9MCE9PShQLmN1cnJlbnQmMSkscD1nO2Rve3ZhciBDO2lmKEM9MTM9PT1wLnRhZyl7dmFyIHg9cC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT14KUM9bnVsbCE9PXguZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciB3PXAubWVtb2l6ZWRQcm9wcztDPXZvaWQgMD09PXcuZmFsbGJhY2s/ITE6ITAhPT13LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOkE/ITE6ITB9fWlmKEMpe3ZhciB6PXAudXBkYXRlUXVldWU7aWYobnVsbD09PXope3ZhciB1PW5ldyBTZXQ7dS5hZGQobCk7cC51cGRhdGVRdWV1ZT11fWVsc2Ugei5hZGQobCk7aWYoMD09PShwLm1vZGUmMikpe3AuZmxhZ3N8PTY0O2guZmxhZ3N8PTE2Mzg0O2guZmxhZ3MmPS0yOTgxO2lmKDE9PT1oLnRhZylpZihudWxsPT09aC5hbHRlcm5hdGUpaC50YWc9MTc7ZWxzZXt2YXIgdD16ZygtMSwxKTt0LnRhZz0yO0FnKGgsdCl9aC5sYW5lc3w9MTticmVhayBhfWs9XG52b2lkIDA7aD1iO3ZhciBxPWYucGluZ0NhY2hlO251bGw9PT1xPyhxPWYucGluZ0NhY2hlPW5ldyBPaSxrPW5ldyBTZXQscS5zZXQobCxrKSk6KGs9cS5nZXQobCksdm9pZCAwPT09ayYmKGs9bmV3IFNldCxxLnNldChsLGspKSk7aWYoIWsuaGFzKGgpKXtrLmFkZChoKTt2YXIgdj1Zai5iaW5kKG51bGwsZixsLGgpO2wudGhlbih2LHYpfXAuZmxhZ3N8PTQwOTY7cC5sYW5lcz1iO2JyZWFrIGF9cD1wLnJldHVybn13aGlsZShudWxsIT09cCk7az1FcnJvcigoUmEoaC50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiKX01IT09ViYmKFY9Mik7az1NaShrLGgpO3A9XG5nO2Rve3N3aXRjaChwLnRhZyl7Y2FzZSAzOmY9aztwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEo9UGkocCxmLGIpO0JnKHAsSik7YnJlYWsgYTtjYXNlIDE6Zj1rO3ZhciBLPXAudHlwZSxRPXAuc3RhdGVOb2RlO2lmKDA9PT0ocC5mbGFncyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgSy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1RJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgUS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhRKSkpKXtwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEw9U2kocCxmLGIpO0JnKHAsTCk7YnJlYWsgYX19cD1wLnJldHVybn13aGlsZShudWxsIT09cCl9WmooYyl9Y2F0Y2godmEpe2I9dmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1cbmZ1bmN0aW9uIFBqKCl7dmFyIGE9b2ouY3VycmVudDtvai5jdXJyZW50PUdoO3JldHVybiBudWxsPT09YT9HaDphfWZ1bmN0aW9uIFRqKGEsYil7dmFyIGM9WDtYfD0xNjt2YXIgZD1QaigpO1U9PT1hJiZXPT09Ynx8UWooYSxiKTtkbyB0cnl7YWsoKTticmVha31jYXRjaChlKXtTaihhLGUpfXdoaWxlKDEpO3FnKCk7WD1jO29qLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcih5KDI2MSkpO1U9bnVsbDtXPTA7cmV0dXJuIFZ9ZnVuY3Rpb24gYWsoKXtmb3IoO251bGwhPT1ZOyliayhZKX1mdW5jdGlvbiBSaigpe2Zvcig7bnVsbCE9PVkmJiFRZigpOyliayhZKX1mdW5jdGlvbiBiayhhKXt2YXIgYj1jayhhLmFsdGVybmF0ZSxhLHFqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/WmooYSk6WT1iO3BqLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFpqKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMjA0OCkpe2M9R2koYyxiLHFqKTtpZihudWxsIT09Yyl7WT1jO3JldHVybn1jPWI7aWYoMjQhPT1jLnRhZyYmMjMhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8MCE9PShxaiYxMDczNzQxODI0KXx8MD09PShjLm1vZGUmNCkpe2Zvcih2YXIgZD0wLGU9Yy5jaGlsZDtudWxsIT09ZTspZHw9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZT1lLnNpYmxpbmc7Yy5jaGlsZExhbmVzPWR9bnVsbCE9PWEmJjA9PT0oYS5mbGFncyYyMDQ4KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxudWxsIT09Yi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QpLDE8Yi5mbGFncyYmKG51bGwhPT1cbmEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iOmEuZmlyc3RFZmZlY3Q9YixhLmxhc3RFZmZlY3Q9YikpfWVsc2V7Yz1MaShiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MjA0NztZPWM7cmV0dXJufW51bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmZsYWdzfD0yMDQ4KX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVYmJihWPTUpfWZ1bmN0aW9uIFVqKGEpe3ZhciBiPWVnKCk7Z2coOTksZGsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZGsoYSxiKXtkbyBPaigpO3doaWxlKG51bGwhPT15aik7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcih5KDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7dmFyIGQ9Yy5sYW5lc3xjLmNoaWxkTGFuZXMsZT1kLGY9YS5wZW5kaW5nTGFuZXMmfmU7YS5wZW5kaW5nTGFuZXM9ZTthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1lO2EubXV0YWJsZVJlYWRMYW5lcyY9ZTthLmVudGFuZ2xlZExhbmVzJj1lO2U9YS5lbnRhbmdsZW1lbnRzO2Zvcih2YXIgZz1hLmV2ZW50VGltZXMsaD1hLmV4cGlyYXRpb25UaW1lczswPGY7KXt2YXIgaz0zMS1WYyhmKSxsPTE8PGs7ZVtrXT0wO2dba109LTE7aFtrXT0tMTtmJj1+bH1udWxsIT09XG5DaiYmMD09PShkJjI0KSYmQ2ouaGFzKGEpJiZDai5kZWxldGUoYSk7YT09PVUmJihZPVU9bnVsbCxXPTApOzE8Yy5mbGFncz9udWxsIT09Yy5sYXN0RWZmZWN0PyhjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGQ9Yy5maXJzdEVmZmVjdCk6ZD1jOmQ9Yy5maXJzdEVmZmVjdDtpZihudWxsIT09ZCl7ZT1YO1h8PTMyO3BqLmN1cnJlbnQ9bnVsbDtrZj1mZDtnPU5lKCk7aWYoT2UoZykpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGcpaD17c3RhcnQ6Zy5zZWxlY3Rpb25TdGFydCxlbmQ6Zy5zZWxlY3Rpb25FbmR9O2Vsc2UgYTppZihoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdywobD1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKSkmJjAhPT1sLnJhbmdlQ291bnQpe2g9bC5hbmNob3JOb2RlO2Y9bC5hbmNob3JPZmZzZXQ7az1sLmZvY3VzTm9kZTtsPWwuZm9jdXNPZmZzZXQ7dHJ5e2gubm9kZVR5cGUsay5ub2RlVHlwZX1jYXRjaCh2YSl7aD1udWxsO1xuYnJlYWsgYX12YXIgbj0wLEE9LTEscD0tMSxDPTAseD0wLHc9Zyx6PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdTs7KXt3IT09aHx8MCE9PWYmJjMhPT13Lm5vZGVUeXBlfHwoQT1uK2YpO3chPT1rfHwwIT09bCYmMyE9PXcubm9kZVR5cGV8fChwPW4rbCk7Mz09PXcubm9kZVR5cGUmJihuKz13Lm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odT13LmZpcnN0Q2hpbGQpKWJyZWFrO3o9dzt3PXV9Zm9yKDs7KXtpZih3PT09ZylicmVhayBiO3o9PT1oJiYrK0M9PT1mJiYoQT1uKTt6PT09ayYmKyt4PT09bCYmKHA9bik7aWYobnVsbCE9PSh1PXcubmV4dFNpYmxpbmcpKWJyZWFrO3c9ejt6PXcucGFyZW50Tm9kZX13PXV9aD0tMT09PUF8fC0xPT09cD9udWxsOntzdGFydDpBLGVuZDpwfX1lbHNlIGg9bnVsbDtoPWh8fHtzdGFydDowLGVuZDowfX1lbHNlIGg9bnVsbDtsZj17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtmZD0hMTtJaj1udWxsO0pqPSExO1o9ZDtkbyB0cnl7ZWsoKX1jYXRjaCh2YSl7aWYobnVsbD09PVxuWil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtJaj1udWxsO1o9ZDtkbyB0cnl7Zm9yKGc9YTtudWxsIT09Wjspe3ZhciB0PVouZmxhZ3M7dCYxNiYmcGIoWi5zdGF0ZU5vZGUsXCJcIik7aWYodCYxMjgpe3ZhciBxPVouYWx0ZXJuYXRlO2lmKG51bGwhPT1xKXt2YXIgdj1xLnJlZjtudWxsIT09diYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YobnVsbCk6di5jdXJyZW50PW51bGwpfX1zd2l0Y2godCYxMDM4KXtjYXNlIDI6ZmooWik7Wi5mbGFncyY9LTM7YnJlYWs7Y2FzZSA2OmZqKFopO1ouZmxhZ3MmPS0zO2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgMTAyNDpaLmZsYWdzJj0tMTAyNTticmVhaztjYXNlIDEwMjg6Wi5mbGFncyY9LTEwMjU7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA0OmlqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgODpoPVo7Y2ooZyxoKTt2YXIgSj1oLmFsdGVybmF0ZTtkaihoKTtudWxsIT09XG5KJiZkaihKKX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO3Y9bGY7cT1OZSgpO3Q9di5mb2N1c2VkRWxlbTtnPXYuc2VsZWN0aW9uUmFuZ2U7aWYocSE9PXQmJnQmJnQub3duZXJEb2N1bWVudCYmTWUodC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0KSl7bnVsbCE9PWcmJk9lKHQpJiYocT1nLnN0YXJ0LHY9Zy5lbmQsdm9pZCAwPT09diYmKHY9cSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdD8odC5zZWxlY3Rpb25TdGFydD1xLHQuc2VsZWN0aW9uRW5kPU1hdGgubWluKHYsdC52YWx1ZS5sZW5ndGgpKToodj0ocT10Lm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcS5kZWZhdWx0Vmlld3x8d2luZG93LHYuZ2V0U2VsZWN0aW9uJiYodj12LmdldFNlbGVjdGlvbigpLGg9dC50ZXh0Q29udGVudC5sZW5ndGgsSj1NYXRoLm1pbihnLnN0YXJ0LGgpLGc9dm9pZCAwPT09XG5nLmVuZD9KOk1hdGgubWluKGcuZW5kLGgpLCF2LmV4dGVuZCYmSj5nJiYoaD1nLGc9SixKPWgpLGg9TGUodCxKKSxmPUxlKHQsZyksaCYmZiYmKDEhPT12LnJhbmdlQ291bnR8fHYuYW5jaG9yTm9kZSE9PWgubm9kZXx8di5hbmNob3JPZmZzZXQhPT1oLm9mZnNldHx8di5mb2N1c05vZGUhPT1mLm5vZGV8fHYuZm9jdXNPZmZzZXQhPT1mLm9mZnNldCkmJihxPXEuY3JlYXRlUmFuZ2UoKSxxLnNldFN0YXJ0KGgubm9kZSxoLm9mZnNldCksdi5yZW1vdmVBbGxSYW5nZXMoKSxKPmc/KHYuYWRkUmFuZ2UocSksdi5leHRlbmQoZi5ub2RlLGYub2Zmc2V0KSk6KHEuc2V0RW5kKGYubm9kZSxmLm9mZnNldCksdi5hZGRSYW5nZShxKSkpKSkpO3E9W107Zm9yKHY9dDt2PXYucGFyZW50Tm9kZTspMT09PXYubm9kZVR5cGUmJnEucHVzaCh7ZWxlbWVudDp2LGxlZnQ6di5zY3JvbGxMZWZ0LHRvcDp2LnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0LmZvY3VzJiZ0LmZvY3VzKCk7Zm9yKHQ9XG4wO3Q8cS5sZW5ndGg7dCsrKXY9cVt0XSx2LmVsZW1lbnQuc2Nyb2xsTGVmdD12LmxlZnQsdi5lbGVtZW50LnNjcm9sbFRvcD12LnRvcH1mZD0hIWtmO2xmPWtmPW51bGw7YS5jdXJyZW50PWM7Wj1kO2RvIHRyeXtmb3IodD1hO251bGwhPT1aOyl7dmFyIEs9Wi5mbGFncztLJjM2JiZZaSh0LFouYWx0ZXJuYXRlLFopO2lmKEsmMTI4KXtxPXZvaWQgMDt2YXIgUT1aLnJlZjtpZihudWxsIT09USl7dmFyIEw9Wi5zdGF0ZU5vZGU7c3dpdGNoKFoudGFnKXtjYXNlIDU6cT1MO2JyZWFrO2RlZmF1bHQ6cT1MfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBRP1EocSk6US5jdXJyZW50PXF9fVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7Wj1udWxsOyRmKCk7WD1lfWVsc2UgYS5jdXJyZW50PWM7aWYoeGopeGo9ITEseWo9YSx6aj1iO2Vsc2UgZm9yKFo9ZDtudWxsIT09WjspYj1cbloubmV4dEVmZmVjdCxaLm5leHRFZmZlY3Q9bnVsbCxaLmZsYWdzJjgmJihLPVosSy5zaWJsaW5nPW51bGwsSy5zdGF0ZU5vZGU9bnVsbCksWj1iO2Q9YS5wZW5kaW5nTGFuZXM7MD09PWQmJihUaT1udWxsKTsxPT09ZD9hPT09RWo/RGorKzooRGo9MCxFaj1hKTpEaj0wO2M9Yy5zdGF0ZU5vZGU7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7TWYub25Db21taXRGaWJlclJvb3QoTGYsYyx2b2lkIDAsNjQ9PT0oYy5jdXJyZW50LmZsYWdzJjY0KSl9Y2F0Y2godmEpe31NaihhLE8oKSk7aWYoUWkpdGhyb3cgUWk9ITEsYT1SaSxSaT1udWxsLGE7aWYoMCE9PShYJjgpKXJldHVybiBudWxsO2lnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBlaygpe2Zvcig7bnVsbCE9PVo7KXt2YXIgYT1aLmFsdGVybmF0ZTtKanx8bnVsbD09PUlqfHwoMCE9PShaLmZsYWdzJjgpP2RjKFosSWopJiYoSmo9ITApOjEzPT09Wi50YWcmJm1qKGEsWikmJmRjKFosSWopJiYoSmo9ITApKTt2YXIgYj1aLmZsYWdzOzAhPT0oYiYyNTYpJiZYaShhLFopOzA9PT0oYiY1MTIpfHx4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKTtaPVoubmV4dEVmZmVjdH19ZnVuY3Rpb24gT2ooKXtpZig5MCE9PXpqKXt2YXIgYT05Nzx6aj85Nzp6ajt6aj05MDtyZXR1cm4gZ2coYSxmayl9cmV0dXJuITF9ZnVuY3Rpb24gJGkoYSxiKXtBai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gWmkoYSxiKXtCai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9XG5mdW5jdGlvbiBmaygpe2lmKG51bGw9PT15ailyZXR1cm4hMTt2YXIgYT15ajt5aj1udWxsO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMzEpKTt2YXIgYj1YO1h8PTMyO3ZhciBjPUJqO0JqPVtdO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7dmFyIGU9Y1tkXSxmPWNbZCsxXSxnPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1jPUFqO0FqPVtdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKz0yKXtlPWNbZF07Zj1jW2QrMV07dHJ5e3ZhciBoPWUuY3JlYXRlO2UuZGVzdHJveT1oKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1mb3IoaD1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWg7KWE9aC5uZXh0RWZmZWN0LGgubmV4dEVmZmVjdD1udWxsLGguZmxhZ3MmOCYmKGguc2libGluZz1cbm51bGwsaC5zdGF0ZU5vZGU9bnVsbCksaD1hO1g9YjtpZygpO3JldHVybiEwfWZ1bmN0aW9uIGdrKGEsYixjKXtiPU1pKGMsYik7Yj1QaShhLGIsMSk7QWcoYSxiKTtiPUhnKCk7YT1LaihhLDEpO251bGwhPT1hJiYoJGMoYSwxLGIpLE1qKGEsYikpfVxuZnVuY3Rpb24gV2koYSxiKXtpZigzPT09YS50YWcpZ2soYSxhLGIpO2Vsc2UgZm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoMz09PWMudGFnKXtnayhjLGEsYik7YnJlYWt9ZWxzZSBpZigxPT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpe2E9TWkoYixhKTt2YXIgZT1TaShjLGEsMSk7QWcoYyxlKTtlPUhnKCk7Yz1LaihjLDEpO2lmKG51bGwhPT1jKSRjKGMsMSxlKSxNaihjLGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXRyeXtkLmNvbXBvbmVudERpZENhdGNoKGIsYSl9Y2F0Y2goZil7fWJyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIFlqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1IZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztVPT09YSYmKFcmYyk9PT1jJiYoND09PVZ8fDM9PT1WJiYoVyY2MjkxNDU2MCk9PT1XJiY1MDA+TygpLWpqP1FqKGEsMCk6dWp8PWMpO01qKGEsYil9ZnVuY3Rpb24gbGooYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj0wOzA9PT1iJiYoYj1hLm1vZGUsMD09PShiJjIpP2I9MTowPT09KGImNCk/Yj05OT09PWVnKCk/MToyOigwPT09R2omJihHaj10aiksYj1ZYyg2MjkxNDU2MCZ+R2opLDA9PT1iJiYoYj00MTk0MzA0KSkpO2M9SGcoKTthPUtqKGEsYik7bnVsbCE9PWEmJigkYyhhLGIsYyksTWooYSxjKSl9dmFyIGNrO1xuY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIubGFuZXM7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fE4uY3VycmVudCl1Zz0hMDtlbHNlIGlmKDAhPT0oYyZkKSl1Zz0wIT09KGEuZmxhZ3MmMTYzODQpPyEwOiExO2Vsc2V7dWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6cmkoYik7c2goKTticmVhaztjYXNlIDU6Z2goYik7YnJlYWs7Y2FzZSAxOkZmKGIudHlwZSkmJkpmKGIpO2JyZWFrO2Nhc2UgNDplaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6ZD1iLm1lbW9pemVkUHJvcHMudmFsdWU7dmFyIGU9Yi50eXBlLl9jb250ZXh0O0kobWcsZS5fY3VycmVudFZhbHVlKTtlLl9jdXJyZW50VmFsdWU9ZDticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiB0aShhLGIsYyk7SShQLFAuY3VycmVudCYxKTtiPWhpKGEsYixjKTtyZXR1cm4gbnVsbCE9PVxuYj9iLnNpYmxpbmc6bnVsbH1JKFAsUC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmNjQpKXtpZihkKXJldHVybiBBaShhLGIsYyk7Yi5mbGFnc3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtJKFAsUC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBiLmxhbmVzPTAsbWkoYSxiLGMpfXJldHVybiBoaShhLGIsYyl9ZWxzZSB1Zz0hMTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsTS5jdXJyZW50KTt0ZyhiLGMpO2U9Q2gobnVsbCxiLGQsYSxlLGMpO2IuZmxhZ3N8PTE7aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKEZmKGQpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt4ZyhiKTt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmR2coYixkLGcsYSk7ZS51cGRhdGVyPUtnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbHM9YjtPZyhiLGQsYSxjKTtiPXFpKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLGZpKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTthOntudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTtcbmE9Yi5wZW5kaW5nUHJvcHM7Zj1lLl9pbml0O2U9ZihlLl9wYXlsb2FkKTtiLnR5cGU9ZTtmPWIudGFnPWhrKGUpO2E9bGcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9bGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTpiPXBpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9Z2kobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1paShudWxsLGIsZSxsZyhlLnR5cGUsYSksZCxjKTticmVhayBhfXRocm93IEVycm9yKHkoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbGkoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSkscGkoYSxiLGQsZSxjKTtjYXNlIDM6cmkoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1hfHxudWxsPT09ZCl0aHJvdyBFcnJvcih5KDI4MikpO1xuZD1iLnBlbmRpbmdQcm9wcztlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lnKGEsYik7Q2coYixkLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlzaCgpLGI9aGkoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihmPWUuaHlkcmF0ZSlraD1yZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGpoPWIsZj1saD0hMDtpZihmKXthPWUubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YTtpZihudWxsIT1hKWZvcihlPTA7ZTxhLmxlbmd0aDtlKz0yKWY9YVtlXSxmLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWFbZSsxXSx0aC5wdXNoKGYpO2M9WmcoYixudWxsLGQsYyk7Zm9yKGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8MTAyNCxjPWMuc2libGluZ31lbHNlIGZpKGEsYixkLGMpLHNoKCk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gZ2goYiksbnVsbD09PWEmJlxucGgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixuZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmbmYoZCxmKSYmKGIuZmxhZ3N8PTE2KSxvaShhLGIpLGZpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmcGgoYiksbnVsbDtjYXNlIDEzOnJldHVybiB0aShhLGIsYyk7Y2FzZSA0OnJldHVybiBlaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1ZZyhiLG51bGwsZCxjKTpmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksZ2koYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO3ZhciBoPWIudHlwZS5fY29udGV4dDtJKG1nLGguX2N1cnJlbnRWYWx1ZSk7aC5fY3VycmVudFZhbHVlPWY7aWYobnVsbCE9PWcpaWYoaD1nLnZhbHVlLGY9SGUoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwLDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU4uY3VycmVudCl7Yj1oaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1cbmsuZmlyc3RDb250ZXh0O251bGwhPT1sOyl7aWYobC5jb250ZXh0PT09ZCYmMCE9PShsLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYobD16ZygtMSxjJi1jKSxsLnRhZz0yLEFnKGgsbCkpO2gubGFuZXN8PWM7bD1oLmFsdGVybmF0ZTtudWxsIT09bCYmKGwubGFuZXN8PWMpO3NnKGgucmV0dXJuLGMpO2subGFuZXN8PWM7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z31maShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix0ZyhiLGMpLGU9dmcoZSxcbmYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5mbGFnc3w9MSxmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bGcoZSxiLnBlbmRpbmdQcm9wcyksZj1sZyhlLnR5cGUsZiksaWkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIGtpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLGIudGFnPTEsRmYoZCk/KGE9ITAsSmYoYikpOmE9ITEsdGcoYixjKSxNZyhiLGQsZSksT2coYixkLGUsYykscWkobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBBaShhLGIsYyk7Y2FzZSAyMzpyZXR1cm4gbWkoYSxiLGMpO2Nhc2UgMjQ6cmV0dXJuIG1pKGEsYixjKX10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO1xufTtmdW5jdGlvbiBpayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZmxhZ3M9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gbmgoYSxiLGMsZCl7cmV0dXJuIG5ldyBpayhhLGIsYyxkKX1mdW5jdGlvbiBqaShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gaGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGppKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1BYSlyZXR1cm4gMTE7aWYoYT09PURhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9bmgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWppKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHVhOnJldHVybiBYZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIEhhOmc9ODtlfD0xNjticmVhaztjYXNlIHdhOmc9ODtlfD0xO2JyZWFrO2Nhc2UgeGE6cmV0dXJuIGE9bmgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT14YSxhLnR5cGU9eGEsYS5sYW5lcz1mLGE7Y2FzZSBCYTpyZXR1cm4gYT1uaCgxMyxjLGIsZSksYS50eXBlPUJhLGEuZWxlbWVudFR5cGU9QmEsYS5sYW5lcz1mLGE7Y2FzZSBDYTpyZXR1cm4gYT1uaCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1DYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiB2aShjLGUsZixiKTtjYXNlIEphOnJldHVybiBhPW5oKDI0LGMsYixlKSxhLmVsZW1lbnRUeXBlPUphLGEubGFuZXM9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHlhOmc9MTA7YnJlYWsgYTtjYXNlIHphOmc9OTticmVhayBhO2Nhc2UgQWE6Zz0xMTticmVhayBhO2Nhc2UgRGE6Zz0xNDticmVhayBhO2Nhc2UgRWE6Zz0xNjtkPW51bGw7YnJlYWsgYTtjYXNlIEZhOmc9MjI7YnJlYWsgYX10aHJvdyBFcnJvcih5KDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPW5oKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWGcoYSxiLGMsZCl7YT1uaCg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gdmkoYSxiLGMsZCl7YT1uaCgyMyxhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gVWcoYSxiLGMpe2E9bmgoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gV2coYSxiLGMpe2I9bmgoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBqayhhLGIsYyl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz1aYygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz1aYygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz1aYygwKTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9bnVsbH1cbmZ1bmN0aW9uIGtrKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6dGEsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBsayhhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1IZygpLGc9SWcoZSk7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxzO2I6e2lmKFpiKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHkoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoRmYoaC50eXBlKSl7aD1oLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKTt0aHJvdyBFcnJvcih5KDE3MSkpO31pZigxPT09Yy50YWcpe3ZhciBrPWMudHlwZTtpZihGZihrKSl7Yz1JZihjLGssaCk7YnJlYWsgYX19Yz1ofWVsc2UgYz1DZjtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPXpnKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PVxuZCYmKGIuY2FsbGJhY2s9ZCk7QWcoZSxiKTtKZyhlLGcsZik7cmV0dXJuIGd9ZnVuY3Rpb24gbWsoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBuayhhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gb2soYSxiKXtuayhhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmbmsoYSxiKX1mdW5jdGlvbiBwaygpe3JldHVybiBudWxsfVxuZnVuY3Rpb24gcWsoYSxiLGMpe3ZhciBkPW51bGwhPWMmJm51bGwhPWMuaHlkcmF0aW9uT3B0aW9ucyYmYy5oeWRyYXRpb25PcHRpb25zLm11dGFibGVTb3VyY2VzfHxudWxsO2M9bmV3IGprKGEsYixudWxsIT1jJiYhMD09PWMuaHlkcmF0ZSk7Yj1uaCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7Yy5jdXJyZW50PWI7Yi5zdGF0ZU5vZGU9Yzt4ZyhiKTthW2ZmXT1jLmN1cnJlbnQ7Y2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl7Yj1kW2FdO3ZhciBlPWIuX2dldFZlcnNpb247ZT1lKGIuX3NvdXJjZSk7bnVsbD09Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2MubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYixlXTpjLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChiLGUpfXRoaXMuX2ludGVybmFsUm9vdD1jfVxucWsucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtsayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLG51bGwpfTtxay5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdCxiPWEuY29udGFpbmVySW5mbztsayhudWxsLGEsbnVsbCxmdW5jdGlvbigpe2JbZmZdPW51bGx9KX07ZnVuY3Rpb24gcmsoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfVxuZnVuY3Rpb24gc2soYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBxayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHRrKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7aC5jYWxsKGEpfX1sayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXNrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2suY2FsbChhKX19WGooZnVuY3Rpb24oKXtsayhiLGcsYSxlKX0pfXJldHVybiBtayhnKX1lYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNCxiKTtvayhhLDQpfX07ZmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDY3MTA4ODY0LGIpO29rKGEsNjcxMDg4NjQpfX07XG5nYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpLGM9SWcoYSk7SmcoYSxjLGIpO29rKGEsYyl9fTtoYz1mdW5jdGlvbihhLGIpe3JldHVybiBiKCl9O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjphYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IoeSg5MCkpO1dhKGQpO2FiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1XajtcbkhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9WDtYfD00O3RyeXtyZXR1cm4gZ2coOTgsYS5iaW5kKG51bGwsYixjLGQsZSkpfWZpbmFsbHl7WD1mLDA9PT1YJiYod2ooKSxpZygpKX19O0liPWZ1bmN0aW9uKCl7MD09PShYJjQ5KSYmKFZqKCksT2ooKSl9O0piPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtYfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fTtmdW5jdGlvbiB1ayhhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiBrayhhLGIsbnVsbCxjKX12YXIgdms9e0V2ZW50czpbQ2IsdWUsRGIsRWIsRmIsT2ose2N1cnJlbnQ6ITF9XX0sd2s9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTcuMC4yXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB4az17YnVuZGxlVHlwZTp3ay5idW5kbGVUeXBlLHZlcnNpb246d2sudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOndrLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6d2sucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWNjKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3ay5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5wayxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHlrPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZigheWsuaXNEaXNhYmxlZCYmeWsuc3VwcG9ydHNGaWJlcil0cnl7TGY9eWsuaW5qZWN0KHhrKSxNZj15a31jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9dms7ZXhwb3J0cy5jcmVhdGVQb3J0YWw9dWs7XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHkoMTg4KSk7dGhyb3cgRXJyb3IoeSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1jYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtpZigwIT09KGMmNDgpKXJldHVybiBhKGIpO1h8PTE7dHJ5e2lmKGEpcmV0dXJuIGdnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1g9YyxpZygpfX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFyayhhKSl0aHJvdyBFcnJvcih5KDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oWGooZnVuY3Rpb24oKXt0ayhudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbZmZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1XajtleHBvcnRzLnVuc3RhYmxlX2NyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3JldHVybiB1ayhhLGIsMjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwpfTtcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXJrKGMpKXRocm93IEVycm9yKHkoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IoeSgzOCkpO3JldHVybiB0ayhhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMjAuMlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZixnLGgsaztpZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgdD1udWxsLHU9bnVsbCx3PWZ1bmN0aW9uKCl7aWYobnVsbCE9PXQpdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dCghMCxhKTt0PW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dCh3LDApLGI7fX07Zj1mdW5jdGlvbihhKXtudWxsIT09dD9zZXRUaW1lb3V0KGYsMCxhKToodD1hLHNldFRpbWVvdXQodywwKSl9O2c9ZnVuY3Rpb24oYSxiKXt1PXNldFRpbWVvdXQoYSxiKX07aD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KX07ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiExfTtrPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHg9d2luZG93LnNldFRpbWVvdXQseT13aW5kb3cuY2xlYXJUaW1lb3V0O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIHo9XG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgeiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIil9dmFyIEE9ITEsQj1udWxsLEM9LTEsRD01LEU9MDtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PVxuRX07az1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6RD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEY9bmV3IE1lc3NhZ2VDaGFubmVsLEc9Ri5wb3J0MjtGLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG51bGwhPT1CKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO0U9YStEO3RyeXtCKCEwLGEpP0cucG9zdE1lc3NhZ2UobnVsbCk6KEE9ITEsQj1udWxsKX1jYXRjaChiKXt0aHJvdyBHLnBvc3RNZXNzYWdlKG51bGwpLGI7fX1lbHNlIEE9ITF9O2Y9ZnVuY3Rpb24oYSl7Qj1hO0F8fChBPSEwLEcucG9zdE1lc3NhZ2UobnVsbCkpfTtnPWZ1bmN0aW9uKGEsYil7Qz1cbngoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3koQyk7Qz0tMX19ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxJKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBKKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBLKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPkkobixjKSl2b2lkIDAhPT1yJiYwPkkocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPkkocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEkoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIEw9W10sTT1bXSxOPTEsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSl7Zm9yKHZhciBiPUooTSk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylLKE0pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpSyhNKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEgoTCxiKTtlbHNlIGJyZWFrO2I9SihNKX19ZnVuY3Rpb24gVShhKXtTPSExO1QoYSk7aWYoIVIpaWYobnVsbCE9PUooTCkpUj0hMCxmKFYpO2Vsc2V7dmFyIGI9SihNKTtudWxsIT09YiYmZyhVLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFYoYSxiKXtSPSExO1MmJihTPSExLGgoKSk7UT0hMDt2YXIgYz1QO3RyeXtUKGIpO2ZvcihPPUooTCk7bnVsbCE9PU8mJighKE8uZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCkpOyl7dmFyIGQ9Ty5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7Ty5jYWxsYmFjaz1udWxsO1A9Ty5wcmlvcml0eUxldmVsO3ZhciBlPWQoTy5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP08uY2FsbGJhY2s9ZTpPPT09SihMKSYmSyhMKTtUKGIpfWVsc2UgSyhMKTtPPUooTCl9aWYobnVsbCE9PU8pdmFyIG09ITA7ZWxzZXt2YXIgbj1KKE0pO251bGwhPT1uJiZnKFUsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e089bnVsbCxQPWMsUT0hMX19dmFyIFc9aztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtSfHxRfHwoUj0hMCxmKFYpKX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIEooTCl9O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9VztleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOk4rKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLEgoTSxhKSxudWxsPT09SihMKSYmYT09PUooTSkmJihTP2goKTpTPSEwLGcoVSxjLWQpKSk6KGEuc29ydEluZGV4PWUsSChMLGEpLFJ8fFF8fChSPSEwLGYoVikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7QUN2REE7O0E7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBMExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBOzs7QTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFEQTtBQUNBO0FBR0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFrQkE7QUFDQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQXdDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQVJBO0FBWUE7QUFFQTs7QTs7Ozs7Ozs7Ozs7QUN6SUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQVJBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBVkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQTVDQTtBQUFBO0FBeEJBO0FBd0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QTs7Ozs7Ozs7OztBQ3pWQTtBQWNBO0FBRUE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFJQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUF2QkE7QUErQkE7QUFDQTtBQUVBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUErRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBTkE7QUFlQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7OztBQ25HQTtBQVVBO0FBQ0E7QUFFQTs7QTs7Ozs7Ozs7Ozs7QUNiQTtBQUdBO0FBRUE7QUFHQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFMQTtBQVFBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUlBOzs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFFQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTs7OztBQWhIQTtBQUNBO0FBcUhBOztBQzNJQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBVkE7QUFhQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQUNBOzs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFvSkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBWEE7QUFzQkE7QUFDQTtBQURBO0FBcUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFNQTtBQUlBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQVhBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUlBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWdCQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBaFBBO0FBOFBBO0FBRUE7QUFDQTtBQURBOzs7O0FDamRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUEwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWVBO0FBQ0E7QUFEQTtBQWxHQTtBQXNHQTtBQUVBOzs7OztBQ3BPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFhQTtBQUVBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFiQTtBQXlCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBWkE7QUFjQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQWJBO0FBaUJBO0FBQ0E7QUFFQTs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFvQkE7QUFFQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQUFBO0FBQ0E7QUFXQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBOUJBO0FBQ0E7QUFnQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFUQTtBQVlBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUpBO0FBMUhBO0FBc0lBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7OztBQ3JMQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFtRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWEE7QUFnQkE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBdERBO0FBNkRBO0FBQ0E7QUFFQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBT0E7QUFBQTtBQVBBO0FBQUE7QUFEQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBbERBO0FBQ0E7QUF3REE7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQVVBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUZBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQURBO0FBNUJBO0FBTEE7QUF1Q0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSUE7QUFDQTtBQUNBO0FBQ0EsaUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdIQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUdBO0FBVkE7QUFKQTtBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFLQTtBQS9CQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBREE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFkQTtBQUFBO0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFNQTtBQVhBO0FBYUE7QUF6QkE7QUE0QkE7QUFHQTtBQUNBO0FBREE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFNQTtBQVZBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTkE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQTVDQTtBQTREQTtBQUNBO0FBREE7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFpREE7QUFDQTtBQUdBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ3hTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUVBOzs7QTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUVBOzs7QTs7O0EiLCJzb3VyY2VSb290IjoiIn0=