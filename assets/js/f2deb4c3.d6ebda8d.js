exports.id = 316;
exports.ids = [316];
exports.modules = {

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

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ scrollParent)
});

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(9981);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/isDocument.js
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/isWindow.js

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/contains.js
var contains = __webpack_require__(9874);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(6783);
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/getScrollAccessor.js

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = isWindow(node);

    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }

  return scrollAccessor;
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollLeft.js

/**
 * Gets or sets the scroll left position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

/* harmony default export */ const scrollLeft = (getscrollAccessor('pageXOffset'));
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollTop.js

/**
 * Gets or sets the scroll top position of a given element.
 * 
 * @param node the element
 * @param val the position to set
 */

/* harmony default export */ const scrollTop = (getscrollAccessor('pageYOffset'));
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/offset.js




/**
 * Returns the offset of a given element, including top and left positions, width and height.
 * 
 * @param node the element
 */

function offset(node) {
  var doc = (0,ownerDocument/* default */.Z)(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !(0,contains/* default */.Z)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/height.js


/**
 * Returns the height of a given element.
 * 
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */

function height(node, client) {
  var win = isWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
}
;// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollParent.js
/* eslint-disable no-cond-assign, no-continue */



/**
 * Find the first scrollable parent of an element.
 *
 * @param element Starting element
 * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
 */

function scrollParent(element, firstPossible) {
  var position = (0,css/* default */.Z)(element, 'position');
  var excludeStatic = position === 'absolute';
  var ownerDoc = element.ownerDocument;
  if (position === 'fixed') return ownerDoc || document; // @ts-ignore

  while ((element = element.parentNode) && !isDocument(element)) {
    var isStatic = excludeStatic && (0,css/* default */.Z)(element, 'position') === 'static';
    var style = ((0,css/* default */.Z)(element, 'overflow') || '') + ((0,css/* default */.Z)(element, 'overflow-y') || '') + (0,css/* default */.Z)(element, 'overflow-x');
    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && (firstPossible || height(element) < element.scrollHeight)) {
      return element;
    }
  }

  return ownerDoc || document;
}

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

/***/ 2454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Position": () => (/* binding */ Position),
  "default": () => (/* binding */ src_useWaypoint)
});

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__(9314);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useStableMemo.js


function isEqual(a, b) {
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Identical to `useMemo` _except_ that it provides a semantic guarantee that
 * values will not be invalidated unless the dependencies change. This is unlike
 * the built in `useMemo` which may discard memoized values for performance reasons.
 *
 * @param factory A function that returns a value to be memoized
 * @param deps A dependency array
 */
function useStableMemo(factory, deps) {
  var isValid = true;
  var valueRef = (0,react.useRef)(); // initial hook call

  if (!valueRef.current) {
    valueRef.current = {
      deps: deps,
      result: factory()
    }; // subsequent calls
  } else {
    isValid = !!(deps && valueRef.current.deps && isEqual(deps, valueRef.current.deps));
  }

  var cache = isValid ? valueRef.current : {
    deps: deps,
    result: factory()
  }; // must update immediately so any sync renders here don't cause an infinite loop

  valueRef.current = cache;
  return cache.result;
}
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useIsomorphicEffect.js

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const useIsomorphicEffect = (isDOM || isReactNative ? react.useLayoutEffect : react.useEffect);
;// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useIntersectionObserver.js




/**
 * Setup an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) on
 * a DOM Element that returns it's entries as they arrive.
 *
 * @param element The DOM element to observe
 * @param init IntersectionObserver options with a notable change,
 * unlike a plain IntersectionObserver `root: null` means "not provided YET",
 * and the hook will wait until it receives a non-null value to set up the observer.
 * This change allows for easier syncing of element and root values in a React
 * context.
 */

function useIntersectionObserver(element, callbackOrOptions, maybeOptions) {
  var callback;
  var options;

  if (typeof callbackOrOptions === 'function') {
    callback = callbackOrOptions;
    options = maybeOptions || {};
  } else {
    options = callbackOrOptions || {};
  }

  var _options = options,
      threshold = _options.threshold,
      root = _options.root,
      rootMargin = _options.rootMargin;

  var _useState = (0,react.useState)(null),
      entries = _useState[0],
      setEntry = _useState[1];

  var handler = (0,useEventCallback/* default */.Z)(callback || setEntry); // We wait for element to exist before constructing

  var observer = useStableMemo(function () {
    return root !== null && typeof IntersectionObserver !== 'undefined' && new IntersectionObserver(handler, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    });
  }, [handler, root, rootMargin, threshold && JSON.stringify(threshold)]);
  useIsomorphicEffect(function () {
    if (!element || !observer) return;
    observer.observe(element);
    return function () {
      observer.unobserve(element);
    };
  }, [observer, element]);
  return callback ? undefined : entries || [];
}

/* harmony default export */ const esm_useIntersectionObserver = (useIntersectionObserver);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/scrollParent.js + 7 modules
var scrollParent = __webpack_require__(245);
;// CONCATENATED MODULE: ../src/useWaypoint.tsx




var Position;

(function (Position) {
  Position[Position["UNKNOWN"] = 0] = "UNKNOWN";
  Position[Position["BEFORE"] = 1] = "BEFORE";
  Position[Position["INSIDE"] = 2] = "INSIDE";
  Position[Position["AFTER"] = 3] = "AFTER";
})(Position || (Position = {}));

function toCss(margin) {
  if (!margin || typeof margin === 'string') return margin;
  var _margin$top = margin.top,
      top = _margin$top === void 0 ? 0 : _margin$top,
      _margin$right = margin.right,
      right = _margin$right === void 0 ? 0 : _margin$right,
      _margin$bottom = margin.bottom,
      bottom = _margin$bottom === void 0 ? 0 : _margin$bottom,
      _margin$left = margin.left,
      left = _margin$left === void 0 ? 0 : _margin$left;
  return top + "px " + right + "px " + bottom + "px " + left + "px";
}

var findRoot = function findRoot(el) {
  return (0,scrollParent.default)(el, true);
};

function useWaypoint(element, callback, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      rootMargin = _options.rootMargin,
      threshold = _options.threshold,
      _options$scrollDirect = _options.scrollDirection,
      scrollDirection = _options$scrollDirect === void 0 ? 'vertical' : _options$scrollDirect;
  var _options2 = options,
      root = _options2.root;
  var handler = (0,useEventCallback/* default */.Z)(callback);
  var prevPositionRef = (0,react.useRef)(null);

  if (root === 'scrollParent') {
    root = findRoot;
  }

  var scrollParent = (0,react.useMemo)(function () {
    return element && typeof root === 'function' ? root(element) : null;
  }, [element, root]);
  var realRoot = typeof root === 'function' ? scrollParent : root;

  if (realRoot && realRoot.nodeType === document.DOCUMENT_NODE) {
    // explicit undefined means "use the viewport", instead of `null`
    // which means "no root yet". This works around a bug in safari
    // where document is not accepted in older versions,
    // or is accepted but doesn't work (as of v14)
    realRoot = undefined;
  }

  esm_useIntersectionObserver( // We change the meaning of explicit null to "not provided yet"
  // this is to allow easier synchronizing between element and roots derived
  // from it. Otherwise if the root updates later an observer will be created
  // for the document and then for the root
  element, function (_ref, observer) {
    var _entry$rootBounds, _entry$rootBounds2;

    var entry = _ref[0];
    if (!entry) return;

    var _ref2 = scrollDirection === 'vertical' ? ['top', 'bottom', 'y'] : ['left', 'right', 'x'],
        start = _ref2[0],
        end = _ref2[1],
        point = _ref2[2];

    var coord = entry.boundingClientRect[point];
    var rootStart = ((_entry$rootBounds = entry.rootBounds) == null ? void 0 : _entry$rootBounds[start]) || 0;
    var rootEnd = ((_entry$rootBounds2 = entry.rootBounds) == null ? void 0 : _entry$rootBounds2[end]) || 0; // The position may remain UNKNOWN if the root
    // is 0 width/height or everything is hidden.

    var position = Position.UNKNOWN;

    if (entry.isIntersecting) {
      position = Position.INSIDE;
    } else if (coord > rootEnd) {
      position = Position.AFTER;
    } else if (coord < rootStart) {
      position = Position.BEFORE;
    }

    var previousPosition = prevPositionRef.current;

    if (previousPosition === position) {
      return;
    }

    handler({
      position: position,
      previousPosition: previousPosition
    }, entry, observer);
    prevPositionRef.current = position;
  }, {
    threshold: threshold,
    root: realRoot,
    rootMargin: toCss(rootMargin)
  });
}

/* harmony default export */ const src_useWaypoint = (useWaypoint);

/***/ }),

/***/ 4213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "contentTitle": () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  "frontMatter": () => (/* binding */ frontMatter),
  "metadata": () => (/* binding */ metadata),
  "toc": () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js
var interopRequireWildcard = __webpack_require__(9599);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@4c/docusaurus-preset/lib/theme/ImportContext.js
var ImportContext = __webpack_require__(8818);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCallbackRef.js

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
  return (0,react.useState)(null);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCommittedRef.js

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef_useCommittedRef(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const esm_useCommittedRef = ((/* unused pure expression or super */ null && (useCommittedRef_useCommittedRef)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback_useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventListener.js



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener_useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = useEventCallback(listener);
  useEffect(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useGlobalListener.js



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

  var documentTarget = useCallback(function () {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useInterval.js


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  useEffect(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const esm_useInterval = ((/* unused pure expression or super */ null && (useInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useRafInterval.js



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  useEffect(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const esm_useRafInterval = ((/* unused pure expression or super */ null && (useRafInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeState.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState_useMergeState(initialState) {
  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = useCallback(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : _extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return _extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeStateFromProps.js

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = useMergeState(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMounted.js

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
  var mounted = useRef(true);
  var isMounted = useRef(function () {
    return mounted.current;
  });
  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/usePrevious.js

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
  var ref = useRef(null);
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useImage.js


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = useState({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const useIsomorphicEffect = (isDOM || isReactNative ? react.useLayoutEffect : react.useEffect);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useResizeObserver.js


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = useState(null),
      rect = _useState[0],
      setRect = _useState[1];

  useEffect(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/index.js














// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9756);
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCallbackRef.js
var esm_useCallbackRef = __webpack_require__(1818);
// EXTERNAL MODULE: ../src/useWaypoint.tsx + 3 modules
var useWaypoint = __webpack_require__(2454);
;// CONCATENATED MODULE: ../src/Waypoint.tsx

var _excluded = ["renderComponent", "onPositionChange"];





var defaultRenderComponent = function defaultRenderComponent(ref) {
  return /*#__PURE__*/react.createElement("span", {
    ref: ref,
    style: {
      fontSize: 0
    }
  });
};
/**
* A component that tracks when it enters or leaves the viewport. Implemented
* using IntersectionObserver, polyfill may be required for older browsers.
*/


function Waypoint(_ref) {
  var _ref$renderComponent = _ref.renderComponent,
      renderComponent = _ref$renderComponent === void 0 ? defaultRenderComponent : _ref$renderComponent,
      onPositionChange = _ref.onPositionChange,
      options = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded);

  var _useCallbackRef = (0,esm_useCallbackRef/* default */.Z)(),
      element = _useCallbackRef[0],
      setElement = _useCallbackRef[1];

  (0,useWaypoint.default)(element, onPositionChange, options);
  return renderComponent(setElement);
}

/* harmony default export */ const src_Waypoint = (Waypoint);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./src/WaypointExample.tsx





const VIEWPORT = 60;
const defaultMargin = {
  top: -VIEWPORT,
  right: -VIEWPORT,
  bottom: -VIEWPORT,
  left: -VIEWPORT
};

function Spacer({
  horizontal
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('flex items-center justify-center text-4xl', horizontal && 'min-w-[30%]')
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      lineHeight: '100px'
    },
    className: (0,clsx_m.default)(horizontal && 'transform -rotate-90')
  }, "\u25BC"));
}

function Overlay({
  horizontal
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('absolute border-black border-2 inset-0'),
    style: Object.assign({
      boxShadow: `0 0 0 ${VIEWPORT}px rgba(0, 0, 0, .4)`
    }, horizontal ? {
      left: `${VIEWPORT}px`,
      right: `${VIEWPORT}px`
    } : {
      top: `${VIEWPORT}px`,
      bottom: `${VIEWPORT}px`
    })
  });
}

function Margins({
  margins
}) {
  const {
    top,
    bottom
  } = margins; // eslint-disable-next-line no-nested-ternary

  return /*#__PURE__*/react.createElement(react.Fragment, null, top != null && /*#__PURE__*/react.createElement("div", {
    className: "absolute inset-0 z-10 bg-yellow-200 bg-opacity-50",
    style: {
      top: `${top < 0 ? VIEWPORT : VIEWPORT - top}px`,
      bottom: 'auto',
      height: Math.abs(top),
      right: 17
    }
  }), bottom != null && /*#__PURE__*/react.createElement("div", {
    className: "absolute inset-0 z-10 bg-yellow-200 bg-opacity-50",
    style: {
      top: 'auto',
      bottom: `${bottom < 0 ? VIEWPORT : VIEWPORT - bottom}px`,
      height: Math.abs(bottom),
      right: 17
    }
  }));
}

function normalizeMargins(margins) {
  if (!margins) return defaultMargin;
  const next = Object.assign({}, defaultMargin);
  if (margins.top != null) next.top += margins.top;
  if (margins.bottom != null) next.bottom += margins.bottom;
  return next;
}

function WaypointExample({
  horizontal,
  scrollIntoView,
  margins
}) {
  const [root, attachRef] = useCallbackRef();
  const [message, setMessage] = (0,react.useState)('');
  useIsomorphicEffect(() => {
    if (!scrollIntoView || !root) return;
    root.querySelector('.docs-example-waypoint').scrollIntoView({
      block: 'center'
    }); // root.scrollTop = root.scrollHeight / 2;
  }, [root]);
  return /*#__PURE__*/react.createElement("div", {
    className: "relative overflow-hidden mb-4"
  }, message && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('bg-black bg-opacity-50 text-white p-4 left-1/2 top-1/2 text-center z-10 transform -translate-y-1/2 -translate-x-1/2 absolute w-64')
  }, message), /*#__PURE__*/react.createElement(Overlay, {
    horizontal: horizontal
  }), margins && /*#__PURE__*/react.createElement(Margins, {
    margins: margins
  }), /*#__PURE__*/react.createElement("div", {
    ref: attachRef,
    className: (0,clsx_m.default)('flex relative overflow-auto border rounded', !horizontal && 'flex-col'),
    style: {
      minHeight: 200,
      maxHeight: 400
    }
  }, /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(src_Waypoint, {
    root: "scrollParent",
    rootMargin: normalizeMargins(margins),
    scrollDirection: horizontal ? 'horizontal' : 'vertical',
    renderComponent: ref => /*#__PURE__*/react.createElement("div", {
      ref: ref,
      className: (0,clsx_m.default)('docs-example-waypoint', 'border-dashed border-primary', horizontal ? 'border-l-4' : 'border-t-4')
    }),
    onPositionChange: ({
      position
    }) => {
      if (position === useWaypoint.Position.BEFORE || position === useWaypoint.Position.AFTER) {
        setMessage(`Exited (${useWaypoint.Position[position].toLowerCase()})`);
      }

      if (position === useWaypoint.Position.INSIDE) {
        setMessage('Entered');
      }
    }
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react.createElement(Spacer, {
    horizontal: horizontal
  })));
}

/* harmony default export */ const src_WaypointExample = (WaypointExample);
;// CONCATENATED MODULE: ./docs/Waypoint.mdx
const frontMatter={};const contentTitle=undefined;const metadata={"unversionedId":"Waypoint","id":"Waypoint","isDocsHomePage":false,"title":"Waypoint","description":"A component (and related hook) to provide a high level interface","source":"@site/docs/Waypoint.mdx","sourceDirName":".","slug":"/Waypoint","permalink":"/ui/Waypoint","version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Portal","permalink":"/ui/Portal"},"next":{"title":"usePopper","permalink":"/ui/usePopper"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'How it works',id:'how-it-works',children:[]},{value:'Scroll direction',id:'scroll-direction',children:[]},{value:'Specifying the scroll parent',id:'specifying-the-scroll-parent',children:[]},{value:'Margins',id:'margins',children:[]},{value:'<code>useWaypoint</code>',id:'usewaypoint',children:[]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("p",null,`A component (and related hook) to provide a high level interface
over `,(0,esm/* mdx */.kt)("a",{parentName:"p","href":"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},(0,esm/* mdx */.kt)("inlineCode",{parentName:"a"},`IntersectionObserver`)),`
designed to detect when a component enters and exits a viewport.`),(0,esm/* mdx */.kt)("p",null,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`Waypoint`),` provides a good basis for building other components like infinite lists,
"scroll spy" style navigation, lazy loading images, and more.`),(0,esm/* mdx */.kt)("h2",{"id":"how-it-works"},`How it works`),(0,esm/* mdx */.kt)("p",null,`Waypoint renders a "sentinel" element that you place in a scrollable
area. Using an `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`IntersectionObserver`),`, the waypoint fires a callback when it
"intersects" with the visible area of the scroll view. Waypoint will fire a callback
when this happens with details about where the waypoint is in relation to the visible
area.`),(0,esm/* mdx */.kt)("p",null,`The example below adds visible styling to waypoint for clarity. By default a
waypoint renders an invisible zero-height element.`),(0,esm/* mdx */.kt)(src_WaypointExample,{scrollIntoView:true,mdxType:"WaypointExample"}),(0,esm/* mdx */.kt)("h2",{"id":"scroll-direction"},`Scroll direction`),(0,esm/* mdx */.kt)("p",null,`For simplicity, scroll detection with waypoints is limited to a single direction at one time.
By default that direction is "vertical", but can configured to "horizontal".`),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-tsx"},`<Waypoint scrollDirection="horizontal" />
`)),(0,esm/* mdx */.kt)(src_WaypointExample,{horizontal:true,mdxType:"WaypointExample"}),(0,esm/* mdx */.kt)("h2",{"id":"specifying-the-scroll-parent"},`Specifying the scroll parent`),(0,esm/* mdx */.kt)("p",null,`By default waypoint observes scrolling on the device viewport, generally the `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`window`),`.
You can also specify a specific element as the root by providing a DOM element
to the `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`root`),` prop.`),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-tsx"},`function ScrollArea({ items, onPositionChange }) {
  const [element, setElement] = useState<HTMLDivElement>(
    null
  );

  return (
    <div ref={setElement} style={{ overflow: "auto" }}>
      {items}
      <Waypoint
        root={element}
        onPositionChange={onPositionChange}
      />
    </div>
  );
}
`)),(0,esm/* mdx */.kt)("h2",{"id":"margins"},`Margins`),(0,esm/* mdx */.kt)("p",null,`You can adjust the functional shape of the viewport by providing a `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`rootMargin`),`
prop, which is passed to the underlying `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`IntersectionObserver`),`. As a convenience,
Waypoint accepts an object with inset properties as well as a valid CSS margin property
value.`),(0,esm/* mdx */.kt)("p",null,`Positive margins grow the overall size of the viewport causing waypoints to enter
before they are actually in view. Negative values shrink the viewport, and delays
the waypoint from entering by the specified pixel amount. Margins are illustrated
by the yellow blocks in the example below.`),(0,esm/* mdx */.kt)("p",null,`Here is an example of positive margins:`),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-tsx"},`<Waypoint rootMargin={{ top: 20, bottom: 20 }} />
`)),(0,esm/* mdx */.kt)(src_WaypointExample,{margins:{top:20,bottom:20},mdxType:"WaypointExample"}),(0,esm/* mdx */.kt)("p",null,"And the effect with negative margins"),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-tsx"},`<Waypoint rootMargin={{ top: -20, bottom: -20 }} />
`)),(0,esm/* mdx */.kt)(src_WaypointExample,{margins:{top:-20,bottom:-20},mdxType:"WaypointExample"}),(0,esm/* mdx */.kt)("h2",{"id":"usewaypoint"},(0,esm/* mdx */.kt)("inlineCode",{parentName:"h2"},`useWaypoint`)),(0,esm/* mdx */.kt)("p",null,`The underlying hook powering the Waypoint component. Leverage `,(0,esm/* mdx */.kt)("inlineCode",{parentName:"p"},`useWaypoint`),`
to turn any component into a waypoint. Using the hook directly is helpful
when you want an individual component to respond`),(0,esm/* mdx */.kt)(ImportContext.default,{imports:()=>(0,ImportContext.allValues)({"dom-helpers/scrollParent":Promise.resolve().then(()=>(0,interopRequireWildcard/* default */.Z)(__webpack_require__(245))),"@restart/ui/useWaypoint":Promise.resolve().then(()=>(0,interopRequireWildcard/* default */.Z)(__webpack_require__(2454)))}),mdxType:"ImportContext"},(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live","live":true},`import getScrollParent from "dom-helpers/scrollParent";
import useWaypoint, {
  Position,
} from "@restart/ui/useWaypoint";

function LazyImage({ src }) {
  const [element, attachRef] = useState(null);
  const [hasBeenSeen, setSeen] = useState(false);

  const waypointRef = useWaypoint(
    element,
    ({ position, previousPosition }, entry, observer) => {
      if (hasBeenSeen) {
        return;
      }

      setSeen(position === Position.INSIDE);
    },
    {
      root: "scrollParent",
      scrollDirection: "horizontal",
      rootMargin: { right: -80 },
    }
  );

  return (
    <img
      ref={attachRef}
      style={{
        height: 160,
        width: 160,
        display: "inline-block",
      }}
      // swap out for the real image when it's been seen
      src={hasBeenSeen ? src : ""}
    />
  );
}

<div className="relative py-4">
  <div
    className="absolute border-black border-2 pointer-events-none "
    style={{ top: 0, bottom: 40, left: 0, right: 80 }}
  />
  <div className="overflow-x-scroll h-56 grid grid-flow-col auto-cols-[160px]">
    <LazyImage src="https://picsum.photos/id/237/160/160" />
    <LazyImage src="https://picsum.photos/id/153/160/160" />
    <LazyImage src="https://picsum.photos/id/125/160/160" />
    <LazyImage src="https://picsum.photos/id/74/160/160" />
    <LazyImage src="https://picsum.photos/id/50/160/160" />
    <LazyImage src="https://picsum.photos/id/34/160/160" />
    <LazyImage src="https://picsum.photos/id/12/160/160" />
    <LazyImage src="https://picsum.photos/id/64/160/160" />
    <LazyImage src="https://picsum.photos/id/18/160/160" />
  </div>
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


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2YyZGViNGMzLjMxMWEzOTFmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VDb21taXR0ZWRSZWYuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50Q2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2NvbnRhaW5zLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9vd25lcldpbmRvdy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaHlwaGVuYXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGVTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2Nzcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2dldFNjcm9sbEFjY2Vzc29yLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxUb3AuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL29mZnNldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGVpZ2h0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2Rpc3QvZXNtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQDRjL2RvY3VzYXVydXMtcHJlc2V0L2xpYi90aGVtZS9JbXBvcnRDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VTdGFibGVNZW1vLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJc29tb3JwaGljRWZmZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJbnRlcnNlY3Rpb25PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4uL3NyYy91c2VXYXlwb2ludC50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ2FsbGJhY2tSZWYuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50Q2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VHbG9iYWxMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VSYWZJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VNZXJnZVN0YXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlU3RhdGVGcm9tUHJvcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VQcmV2aW91cy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJbWFnZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJc29tb3JwaGljRWZmZWN0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVJlc2l6ZU9ic2VydmVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi4vc3JjL1dheXBvaW50LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vc3JjL1dheXBvaW50RXhhbXBsZS50c3giLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL2RvY3MvV2F5cG9pbnQubWR4Iiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQSBjb252ZW5pZW5jZSBob29rIGFyb3VuZCBgdXNlU3RhdGVgIGRlc2lnbmVkIHRvIGJlIHBhaXJlZCB3aXRoXG4gKiB0aGUgY29tcG9uZW50IFtjYWxsYmFjayByZWZdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjY2FsbGJhY2stcmVmcykgYXBpLlxuICogQ2FsbGJhY2sgcmVmcyBhcmUgdXNlZnVsIG92ZXIgYHVzZVJlZigpYCB3aGVuIHlvdSBuZWVkIHRvIHJlc3BvbmQgdG8gdGhlIHJlZiBiZWluZyBzZXRcbiAqIGluc3RlYWQgb2YgbGF6aWx5IGFjY2Vzc2luZyBpdCBpbiBhbiBlZmZlY3QuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtlbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTERpdkVsZW1lbnQ+KClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBpZiAoIWVsZW1lbnQpIHJldHVyblxuICpcbiAqICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGVsZW1lbnQpXG4gKlxuICogICByZXR1cm4gKCkgPT4ge1xuICogICAgIGNhbGVuZGFyLmRlc3Ryb3koKVxuICogICB9XG4gKiB9LCBbZWxlbWVudF0pXG4gKlxuICogcmV0dXJuIDxkaXYgcmVmPXthdHRhY2hSZWZ9IC8+XG4gKiBgYGBcbiAqXG4gKiBAY2F0ZWdvcnkgcmVmc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKCkge1xuICByZXR1cm4gdXNlU3RhdGUobnVsbCk7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVmYCB3aG9zZSB2YWx1ZSBpcyB1cGRhdGVkIGluIGFuIGVmZmVjdCwgZW5zdXJpbmcgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZSBpcyB0aGUgb25lIHJlbmRlcmVkIHdpdGguIEdlbmVyYWxseSBvbmx5IHJlcXVpcmVkIGZvciBDb25jdXJyZW50IG1vZGUgdXNhZ2VcbiAqIHdoZXJlIHByZXZpb3VzIHdvcmsgaW4gYHJlbmRlcigpYCBtYXkgYmUgZGlzY2FyZGVkIGJlZm9yIGJlaW5nIHVzZWQuXG4gKlxuICogVGhpcyBpcyBzYWZlIHRvIGFjY2VzcyBpbiBhbiBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgYFJlZmAgdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb21taXR0ZWRSZWYodmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiByZWY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbW1pdHRlZFJlZjsiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuICB9LCBbcmVmXSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgbm8tY29uZC1hc3NpZ24gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gZWxlbWVudCBjb250YWlucyBhbm90aGVyIGdpdmVuIGVsZW1lbnQuXG4gKiBcbiAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGVsZW1lbnRcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50IHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKGNvbnRleHQsIG5vZGUpIHtcbiAgLy8gSFRNTCBET00gYW5kIFNWRyBET00gbWF5IGhhdmUgZGlmZmVyZW50IHN1cHBvcnQgbGV2ZWxzLFxuICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIG9uIGNvbnRleHQgaW5zdGVhZCBvZiBhIGRvY3VtZW50IHJvb3QgZWxlbWVudC5cbiAgaWYgKGNvbnRleHQuY29udGFpbnMpIHJldHVybiBjb250ZXh0LmNvbnRhaW5zKG5vZGUpO1xuICBpZiAoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikgcmV0dXJuIGNvbnRleHQgPT09IG5vZGUgfHwgISEoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlKSAmIDE2KTtcbn0iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBvd25lciB3aW5kb3cgb2YgYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MgJiYgZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi9vd25lcldpbmRvdyc7XG4vKipcbiAqIFJldHVybnMgb25lIG9yIGFsbCBjb21wdXRlZCBzdHlsZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnQuXG4gKiBcbiAqIEBwYXJhbSBub2RlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gcHN1ZWRvRWxlbWVudCB0aGUgc3R5bGUgcHJvcGVydHlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpIHtcbiAgcmV0dXJuIG93bmVyV2luZG93KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcHN1ZWRvRWxlbWVudCk7XG59IiwidmFyIHJVcHBlciA9IC8oW0EtWl0pL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAqL1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZSc7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59IiwidmFyIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QodmFsdWUpKTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tICcuL2dldENvbXB1dGVkU3R5bGUnO1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZVN0eWxlJztcbmltcG9ydCBpc1RyYW5zZm9ybSBmcm9tICcuL2lzVHJhbnNmb3JtJztcblxuZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHkpIHtcbiAgdmFyIGNzcyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtcyA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShoeXBoZW5hdGUocHJvcGVydHkpKSB8fCBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wZXJ0eSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydHlba2V5XTtcblxuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoaHlwaGVuYXRlKGtleSkpO1xuICAgIH0gZWxzZSBpZiAoaXNUcmFuc2Zvcm0oa2V5KSkge1xuICAgICAgdHJhbnNmb3JtcyArPSBrZXkgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3MgKz0gaHlwaGVuYXRlKGtleSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtcyArIFwiO1wiO1xuICB9XG5cbiAgbm9kZS5zdHlsZS5jc3NUZXh0ICs9IFwiO1wiICsgY3NzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZTsiLCIvKipcbiAqIFJldHVybnMgdGhlIG93bmVyIGRvY3VtZW50IG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RvY3VtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICdub2RlVHlwZScgaW4gZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSBkb2N1bWVudC5ET0NVTUVOVF9OT0RFO1xufSIsImltcG9ydCBpc0RvY3VtZW50IGZyb20gJy4vaXNEb2N1bWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dpbmRvdyhub2RlKSB7XG4gIGlmICgnd2luZG93JyBpbiBub2RlICYmIG5vZGUud2luZG93ID09PSBub2RlKSByZXR1cm4gbm9kZTtcbiAgaWYgKGlzRG9jdW1lbnQobm9kZSkpIHJldHVybiBub2RlLmRlZmF1bHRWaWV3IHx8IGZhbHNlO1xuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGlzV2luZG93IGZyb20gJy4vaXNXaW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0c2Nyb2xsQWNjZXNzb3Iob2Zmc2V0KSB7XG4gIHZhciBwcm9wID0gb2Zmc2V0ID09PSAncGFnZVhPZmZzZXQnID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCc7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsQWNjZXNzb3Iobm9kZSwgdmFsKSB7XG4gICAgdmFyIHdpbiA9IGlzV2luZG93KG5vZGUpO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gd2luID8gd2luW29mZnNldF0gOiBub2RlW3Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW4pIHtcbiAgICAgIHdpbi5zY3JvbGxUbyh3aW5bb2Zmc2V0XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZVtwcm9wXSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsQWNjZXNzb3I7XG59IiwiaW1wb3J0IGdldFNjcm9sbEFjY2Vzc29yIGZyb20gJy4vZ2V0U2Nyb2xsQWNjZXNzb3InO1xuLyoqXG4gKiBHZXRzIG9yIHNldHMgdGhlIHNjcm9sbCBsZWZ0IHBvc2l0aW9uIG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB2YWwgdGhlIHBvc2l0aW9uIHRvIHNldFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGdldFNjcm9sbEFjY2Vzc29yKCdwYWdlWE9mZnNldCcpOyIsImltcG9ydCBnZXRTY3JvbGxBY2Nlc3NvciBmcm9tICcuL2dldFNjcm9sbEFjY2Vzc29yJztcbi8qKlxuICogR2V0cyBvciBzZXRzIHRoZSBzY3JvbGwgdG9wIHBvc2l0aW9uIG9mIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB2YWwgdGhlIHBvc2l0aW9uIHRvIHNldFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGdldFNjcm9sbEFjY2Vzc29yKCdwYWdlWU9mZnNldCcpOyIsImltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgc2Nyb2xsTGVmdCBmcm9tICcuL3Njcm9sbExlZnQnO1xuaW1wb3J0IHNjcm9sbFRvcCBmcm9tICcuL3Njcm9sbFRvcCc7XG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBvZiBhIGdpdmVuIGVsZW1lbnQsIGluY2x1ZGluZyB0b3AgYW5kIGxlZnQgcG9zaXRpb25zLCB3aWR0aCBhbmQgaGVpZ2h0LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9mZnNldChub2RlKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGUpO1xuICB2YXIgYm94ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyBNYWtlIHN1cmUgaXQncyBub3QgYSBkaXNjb25uZWN0ZWQgRE9NIG5vZGVcblxuICBpZiAoIWRvY0VsZW0gfHwgIWNvbnRhaW5zKGRvY0VsZW0sIG5vZGUpKSByZXR1cm4gYm94O1xuICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHVuZGVmaW5lZCkgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgYm94ID0ge1xuICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcChkb2NFbGVtKSAtIChkb2NFbGVtLmNsaWVudFRvcCB8fCAwKSxcbiAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQoZG9jRWxlbSkgLSAoZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDApLFxuICAgIHdpZHRoOiBib3gud2lkdGgsXG4gICAgaGVpZ2h0OiBib3guaGVpZ2h0XG4gIH07XG4gIHJldHVybiBib3g7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2lzV2luZG93JztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gbm9kZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIGNsaWVudCB3aGV0aGVyIHRvIHVzZSBgY2xpZW50SGVpZ2h0YCBpZiBwb3NzaWJsZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlaWdodChub2RlLCBjbGllbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgcmV0dXJuIHdpbiA/IHdpbi5pbm5lckhlaWdodCA6IGNsaWVudCA/IG5vZGUuY2xpZW50SGVpZ2h0IDogb2Zmc2V0KG5vZGUpLmhlaWdodDtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiwgbm8tY29udGludWUgKi9cbmltcG9ydCBjc3MgZnJvbSAnLi9jc3MnO1xuaW1wb3J0IGhlaWdodCBmcm9tICcuL2hlaWdodCc7XG5pbXBvcnQgaXNEb2N1bWVudCBmcm9tICcuL2lzRG9jdW1lbnQnO1xuLyoqXG4gKiBGaW5kIHRoZSBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50IFN0YXJ0aW5nIGVsZW1lbnRcbiAqIEBwYXJhbSBmaXJzdFBvc3NpYmxlIFN0b3AgYXQgdGhlIGZpcnN0IHNjcm9sbGFibGUgcGFyZW50LCBldmVuIGlmIGl0J3Mgbm90IGN1cnJlbnRseSBzY3JvbGxhYmxlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsUGFyZW50KGVsZW1lbnQsIGZpcnN0UG9zc2libGUpIHtcbiAgdmFyIHBvc2l0aW9uID0gY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgZXhjbHVkZVN0YXRpYyA9IHBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3duZXJEb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIG93bmVyRG9jIHx8IGRvY3VtZW50OyAvLyBAdHMtaWdub3JlXG5cbiAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSAmJiAhaXNEb2N1bWVudChlbGVtZW50KSkge1xuICAgIHZhciBpc1N0YXRpYyA9IGV4Y2x1ZGVTdGF0aWMgJiYgY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJztcbiAgICB2YXIgc3R5bGUgPSAoY3NzKGVsZW1lbnQsICdvdmVyZmxvdycpIHx8ICcnKSArIChjc3MoZWxlbWVudCwgJ292ZXJmbG93LXknKSB8fCAnJykgKyBjc3MoZWxlbWVudCwgJ292ZXJmbG93LXgnKTtcbiAgICBpZiAoaXNTdGF0aWMpIGNvbnRpbnVlO1xuXG4gICAgaWYgKC8oYXV0b3xzY3JvbGwpLy50ZXN0KHN0eWxlKSAmJiAoZmlyc3RQb3NzaWJsZSB8fCBoZWlnaHQoZWxlbWVudCkgPCBlbGVtZW50LnNjcm9sbEhlaWdodCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvd25lckRvYyB8fCBkb2N1bWVudDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICAgIHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDtcbiAgfSkobm9kZUludGVyb3ApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7XG4gIGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5Db250ZXh0ID0gZXhwb3J0cy5hbGxWYWx1ZXMgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IGFsbFZhbHVlcyA9IG9iaiA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5cy5tYXAoayA9PiBvYmpba10pKS50aGVuKHZhbHVlcyA9PiB7XG4gICAgY29uc3QgbmV4dCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoaywgaSkgPT4ge1xuICAgICAgbmV4dFtrXSA9IHZhbHVlc1tpXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmFsbFZhbHVlcyA9IGFsbFZhbHVlcztcblxuY29uc3QgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5cblxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcblxudmFyIF9kZWZhdWx0ID0gKHtcbiAgaW1wb3J0cyxcbiAgY2hpbGRyZW5cbn0pID0+IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGltcG9ydHNcbn0sIGNoaWxkcmVuKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogSWRlbnRpY2FsIHRvIGB1c2VNZW1vYCBfZXhjZXB0XyB0aGF0IGl0IHByb3ZpZGVzIGEgc2VtYW50aWMgZ3VhcmFudGVlIHRoYXRcbiAqIHZhbHVlcyB3aWxsIG5vdCBiZSBpbnZhbGlkYXRlZCB1bmxlc3MgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2UuIFRoaXMgaXMgdW5saWtlXG4gKiB0aGUgYnVpbHQgaW4gYHVzZU1lbW9gIHdoaWNoIG1heSBkaXNjYXJkIG1lbW9pemVkIHZhbHVlcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqXG4gKiBAcGFyYW0gZmFjdG9yeSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlIHRvIGJlIG1lbW9pemVkXG4gKiBAcGFyYW0gZGVwcyBBIGRlcGVuZGVuY3kgYXJyYXlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RhYmxlTWVtbyhmYWN0b3J5LCBkZXBzKSB7XG4gIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgdmFyIHZhbHVlUmVmID0gdXNlUmVmKCk7IC8vIGluaXRpYWwgaG9vayBjYWxsXG5cbiAgaWYgKCF2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgdmFsdWVSZWYuY3VycmVudCA9IHtcbiAgICAgIGRlcHM6IGRlcHMsXG4gICAgICByZXN1bHQ6IGZhY3RvcnkoKVxuICAgIH07IC8vIHN1YnNlcXVlbnQgY2FsbHNcbiAgfSBlbHNlIHtcbiAgICBpc1ZhbGlkID0gISEoZGVwcyAmJiB2YWx1ZVJlZi5jdXJyZW50LmRlcHMgJiYgaXNFcXVhbChkZXBzLCB2YWx1ZVJlZi5jdXJyZW50LmRlcHMpKTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IGlzVmFsaWQgPyB2YWx1ZVJlZi5jdXJyZW50IDoge1xuICAgIGRlcHM6IGRlcHMsXG4gICAgcmVzdWx0OiBmYWN0b3J5KClcbiAgfTsgLy8gbXVzdCB1cGRhdGUgaW1tZWRpYXRlbHkgc28gYW55IHN5bmMgcmVuZGVycyBoZXJlIGRvbid0IGNhdXNlIGFuIGluZmluaXRlIGxvb3BcblxuICB2YWx1ZVJlZi5jdXJyZW50ID0gY2FjaGU7XG4gIHJldHVybiBjYWNoZS5yZXN1bHQ7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIC8vIEB0cy1pZ25vcmVcbmdsb2JhbC5uYXZpZ2F0b3IgJiYgLy8gQHRzLWlnbm9yZVxuZ2xvYmFsLm5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xudmFyIGlzRE9NID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbi8qKlxuICogSXMgYHVzZUxheW91dEVmZmVjdGAgaW4gYSBET00gb3IgUmVhY3QgTmF0aXZlIGVudmlyb25tZW50LCBvdGhlcndpc2UgcmVzb2x2ZXMgdG8gdXNlRWZmZWN0XG4gKiBPbmx5IHVzZWZ1bCB0byBhdm9pZCB0aGUgY29uc29sZSB3YXJuaW5nLlxuICpcbiAqIFBSRUZFUiBgdXNlRWZmZWN0YCBVTkxFU1MgWU9VIEtOT1cgV0hBVCBZT1UgQVJFIERPSU5HLlxuICpcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgaXNET00gfHwgaXNSZWFjdE5hdGl2ZSA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdGFibGVNZW1vIGZyb20gJy4vdXNlU3RhYmxlTWVtbyc7XG5pbXBvcnQgdXNlRWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0VmZmVjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuLyoqXG4gKiBTZXR1cCBhbiBbYEludGVyc2VjdGlvbk9ic2VydmVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbk9ic2VydmVyKSBvblxuICogYSBET00gRWxlbWVudCB0aGF0IHJldHVybnMgaXQncyBlbnRyaWVzIGFzIHRoZXkgYXJyaXZlLlxuICpcbiAqIEBwYXJhbSBlbGVtZW50IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlXG4gKiBAcGFyYW0gaW5pdCBJbnRlcnNlY3Rpb25PYnNlcnZlciBvcHRpb25zIHdpdGggYSBub3RhYmxlIGNoYW5nZSxcbiAqIHVubGlrZSBhIHBsYWluIEludGVyc2VjdGlvbk9ic2VydmVyIGByb290OiBudWxsYCBtZWFucyBcIm5vdCBwcm92aWRlZCBZRVRcIixcbiAqIGFuZCB0aGUgaG9vayB3aWxsIHdhaXQgdW50aWwgaXQgcmVjZWl2ZXMgYSBub24tbnVsbCB2YWx1ZSB0byBzZXQgdXAgdGhlIG9ic2VydmVyLlxuICogVGhpcyBjaGFuZ2UgYWxsb3dzIGZvciBlYXNpZXIgc3luY2luZyBvZiBlbGVtZW50IGFuZCByb290IHZhbHVlcyBpbiBhIFJlYWN0XG4gKiBjb250ZXh0LlxuICovXG5cbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGVsZW1lbnQsIGNhbGxiYWNrT3JPcHRpb25zLCBtYXliZU9wdGlvbnMpIHtcbiAgdmFyIGNhbGxiYWNrO1xuICB2YXIgb3B0aW9ucztcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrT3JPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFja09yT3B0aW9ucztcbiAgICBvcHRpb25zID0gbWF5YmVPcHRpb25zIHx8IHt9O1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSBjYWxsYmFja09yT3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICB0aHJlc2hvbGQgPSBfb3B0aW9ucy50aHJlc2hvbGQsXG4gICAgICByb290ID0gX29wdGlvbnMucm9vdCxcbiAgICAgIHJvb3RNYXJnaW4gPSBfb3B0aW9ucy5yb290TWFyZ2luO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIGVudHJpZXMgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFbnRyeSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlciA9IHVzZUV2ZW50Q2FsbGJhY2soY2FsbGJhY2sgfHwgc2V0RW50cnkpOyAvLyBXZSB3YWl0IGZvciBlbGVtZW50IHRvIGV4aXN0IGJlZm9yZSBjb25zdHJ1Y3RpbmdcblxuICB2YXIgb2JzZXJ2ZXIgPSB1c2VTdGFibGVNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcm9vdCAhPT0gbnVsbCAmJiB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVyLCB7XG4gICAgICB0aHJlc2hvbGQ6IHRocmVzaG9sZCxcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICByb290TWFyZ2luOiByb290TWFyZ2luXG4gICAgfSk7XG4gIH0sIFtoYW5kbGVyLCByb290LCByb290TWFyZ2luLCB0aHJlc2hvbGQgJiYgSlNPTi5zdHJpbmdpZnkodGhyZXNob2xkKV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZWxlbWVudCB8fCAhb2JzZXJ2ZXIpIHJldHVybjtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgfTtcbiAgfSwgW29ic2VydmVyLCBlbGVtZW50XSk7XG4gIHJldHVybiBjYWxsYmFjayA/IHVuZGVmaW5lZCA6IGVudHJpZXMgfHwgW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUludGVyc2VjdGlvbk9ic2VydmVyOyIsImltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUludGVyc2VjdGlvbk9ic2VydmVyJztcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnZG9tLWhlbHBlcnMvc2Nyb2xsUGFyZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBXYXlwb2ludEV2ZW50IHtcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xuICBwcmV2aW91c1Bvc2l0aW9uOiBQb3NpdGlvbiB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gIHRvcD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xuICBsZWZ0PzogbnVtYmVyO1xuICByaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgV2F5cG9pbnRDYWxsYmFjayA9IChcbiAgZGV0YWlsczogV2F5cG9pbnRFdmVudCxcbiAgZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnksXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcixcbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgUm9vdEVsZW1lbnQgPSBFbGVtZW50IHwgRG9jdW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4vKiogQWNjZXB0cyBhbGwgb3B0aW9ucyBhbiBJbnRlcnNlY3Rpb25PYnNlcnZlciBhY2NlcHRzICovXG5leHBvcnQgaW50ZXJmYWNlIFdheXBvaW50T3B0aW9uc1xuICBleHRlbmRzIE9taXQ8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbicgfCAncm9vdCc+IHtcbiAgLyoqXG4gICAqIFRoZSBcInJvb3RcIiBlbGVtZW50IHRvIG9ic2VydmUuIFRoaXMgc2hvdWxkIGJlIHRoZSBzY3JvbGxhYmxlIHZpZXcgeW91ciB3YXlwb2ludFxuICAgKiBpcyByZW5kZXJlZCBpbnRvLiBBY2NlcHRzIGEgRE9NIGVsZW1lbnQsIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIGVsZW1lbnQsIGBudWxsYFxuICAgKiBpbmRpY2F0aW5nIHRoYXQgdGhlIHJvb3QgaXMgbm90IHJlYWR5IHlldCwgb3IgdGhlIHN0cmluZyBcInNjcm9sbFBhcmVudFwiIHRvXG4gICAqIGhhdmUgdGhlIHdheXBvaW50IGNhbGN1bGF0ZSB0aGUgc2Nyb2xsIHBhcmVudCBpdHNlbGYuXG4gICAqL1xuICByb290PzogUm9vdEVsZW1lbnQgfCAnc2Nyb2xsUGFyZW50JyB8ICgoZWxlbWVudDogRWxlbWVudCkgPT4gUm9vdEVsZW1lbnQpO1xuXG4gIC8qKlxuICAgKiBBIHZhbGlkIENTUyBgbWFyZ2luYCBwcm9wZXJ0eSBvciBvYmplY3QgY29udGFpbmluZyB0aGUgc3BlY2lmaWMgXCJ0b3BcIiwgXCJsZWZ0XCIsIGV0YyBwcm9wZXJ0aWVzLlxuICAgKiBUaGUgcm9vdCBtYXJnaW4gZnVuY3Rpb25hbGx5IGFkanVzdHMgdGhlIFwic2l6ZVwiIG9mIHRoZSB2aWV3cG9ydCB3aGVuIGNvbnNpZGVyaW5nIHRoZSB3YXlwb2ludCdzXG4gICAqIHBvc2l0aW9uLiBBIHBvc2l0aXZlIG1hcmdpbiB3aWxsIGNhdXNlIHRoZSB3YXlwb2ludCB0byBcImVudGVyXCIgdGhlIHdheXBvaW50IGVhcmx5IHdoaWxlIGFcbiAgICogbmVnYXRpdmUgbWFyZ2luIHdpbGwgaGF2ZSB0aGUgb3Bwb3NpdGUgZWZmZWN0LlxuICAgKi9cbiAgcm9vdE1hcmdpbj86IHN0cmluZyB8IFJlY3Q7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGwgdG8gY29uc2lkZXIgd2hlbiB0cmFja2luZyB0aGUgd2F5cG9pbnQncyBwb3NpdGlvblxuICAgKi9cbiAgc2Nyb2xsRGlyZWN0aW9uPzogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJztcbn1cblxuZXhwb3J0IGVudW0gUG9zaXRpb24ge1xuICBVTktOT1dOID0gMCxcbiAgQkVGT1JFLFxuICBJTlNJREUsXG4gIEFGVEVSLFxufVxuXG5mdW5jdGlvbiB0b0NzcyhtYXJnaW4/OiBzdHJpbmcgfCBSZWN0KSB7XG4gIGlmICghbWFyZ2luIHx8IHR5cGVvZiBtYXJnaW4gPT09ICdzdHJpbmcnKSByZXR1cm4gbWFyZ2luO1xuXG4gIGNvbnN0IHsgdG9wID0gMCwgcmlnaHQgPSAwLCBib3R0b20gPSAwLCBsZWZ0ID0gMCB9ID0gbWFyZ2luO1xuXG4gIHJldHVybiBgJHt0b3B9cHggJHtyaWdodH1weCAke2JvdHRvbX1weCAke2xlZnR9cHhgO1xufVxuXG5jb25zdCBmaW5kUm9vdCA9IChlbDogRWxlbWVudCkgPT4gZ2V0U2Nyb2xsUGFyZW50KGVsIGFzIEhUTUxFbGVtZW50LCB0cnVlKTtcblxuZnVuY3Rpb24gdXNlV2F5cG9pbnQoXG4gIGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsLFxuICBjYWxsYmFjazogV2F5cG9pbnRDYWxsYmFjayxcbiAgb3B0aW9uczogV2F5cG9pbnRPcHRpb25zID0ge30sXG4pOiB2b2lkIHtcbiAgY29uc3QgeyByb290TWFyZ2luLCB0aHJlc2hvbGQsIHNjcm9sbERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCcgfSA9IG9wdGlvbnM7XG4gIGxldCB7IHJvb3QgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGNhbGxiYWNrKTtcblxuICBjb25zdCBwcmV2UG9zaXRpb25SZWYgPSB1c2VSZWY8UG9zaXRpb24gfCBudWxsPihudWxsKTtcblxuICBpZiAocm9vdCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICByb290ID0gZmluZFJvb3Q7XG4gIH1cblxuICBjb25zdCBzY3JvbGxQYXJlbnQgPSB1c2VNZW1vKFxuICAgICgpID0+IChlbGVtZW50ICYmIHR5cGVvZiByb290ID09PSAnZnVuY3Rpb24nID8gcm9vdChlbGVtZW50KSA6IG51bGwpLFxuXG4gICAgW2VsZW1lbnQsIHJvb3RdLFxuICApO1xuXG4gIGxldCByZWFsUm9vdCA9IHR5cGVvZiByb290ID09PSAnZnVuY3Rpb24nID8gc2Nyb2xsUGFyZW50IDogcm9vdDtcblxuICBpZiAocmVhbFJvb3QgJiYgcmVhbFJvb3Qubm9kZVR5cGUgPT09IGRvY3VtZW50LkRPQ1VNRU5UX05PREUpIHtcbiAgICAvLyBleHBsaWNpdCB1bmRlZmluZWQgbWVhbnMgXCJ1c2UgdGhlIHZpZXdwb3J0XCIsIGluc3RlYWQgb2YgYG51bGxgXG4gICAgLy8gd2hpY2ggbWVhbnMgXCJubyByb290IHlldFwiLiBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBzYWZhcmlcbiAgICAvLyB3aGVyZSBkb2N1bWVudCBpcyBub3QgYWNjZXB0ZWQgaW4gb2xkZXIgdmVyc2lvbnMsXG4gICAgLy8gb3IgaXMgYWNjZXB0ZWQgYnV0IGRvZXNuJ3Qgd29yayAoYXMgb2YgdjE0KVxuICAgIHJlYWxSb290ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgLy8gV2UgY2hhbmdlIHRoZSBtZWFuaW5nIG9mIGV4cGxpY2l0IG51bGwgdG8gXCJub3QgcHJvdmlkZWQgeWV0XCJcbiAgICAvLyB0aGlzIGlzIHRvIGFsbG93IGVhc2llciBzeW5jaHJvbml6aW5nIGJldHdlZW4gZWxlbWVudCBhbmQgcm9vdHMgZGVyaXZlZFxuICAgIC8vIGZyb20gaXQuIE90aGVyd2lzZSBpZiB0aGUgcm9vdCB1cGRhdGVzIGxhdGVyIGFuIG9ic2VydmVyIHdpbGwgYmUgY3JlYXRlZFxuICAgIC8vIGZvciB0aGUgZG9jdW1lbnQgYW5kIHRoZW4gZm9yIHRoZSByb290XG4gICAgZWxlbWVudCxcbiAgICAoW2VudHJ5XSwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgY29uc3QgW3N0YXJ0LCBlbmQsIHBvaW50XSA9XG4gICAgICAgIHNjcm9sbERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgID8gKFsndG9wJywgJ2JvdHRvbScsICd5J10gYXMgY29uc3QpXG4gICAgICAgICAgOiAoWydsZWZ0JywgJ3JpZ2h0JywgJ3gnXSBhcyBjb25zdCk7XG5cbiAgICAgIGNvbnN0IHsgW3BvaW50XTogY29vcmQgfSA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdDtcblxuICAgICAgY29uc3Qgcm9vdFN0YXJ0ID0gZW50cnkucm9vdEJvdW5kcz8uW3N0YXJ0XSB8fCAwO1xuICAgICAgY29uc3Qgcm9vdEVuZCA9IGVudHJ5LnJvb3RCb3VuZHM/LltlbmRdIHx8IDA7XG5cbiAgICAgIC8vIFRoZSBwb3NpdGlvbiBtYXkgcmVtYWluIFVOS05PV04gaWYgdGhlIHJvb3RcbiAgICAgIC8vIGlzIDAgd2lkdGgvaGVpZ2h0IG9yIGV2ZXJ5dGhpbmcgaXMgaGlkZGVuLlxuICAgICAgbGV0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IFBvc2l0aW9uLlVOS05PV047XG5cbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLklOU0lERTtcbiAgICAgIH0gZWxzZSBpZiAoY29vcmQgPiByb290RW5kKSB7XG4gICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uQUZURVI7XG4gICAgICB9IGVsc2UgaWYgKGNvb3JkIDwgcm9vdFN0YXJ0KSB7XG4gICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uQkVGT1JFO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2aW91c1Bvc2l0aW9uID0gcHJldlBvc2l0aW9uUmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChwcmV2aW91c1Bvc2l0aW9uID09PSBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIoeyBwb3NpdGlvbiwgcHJldmlvdXNQb3NpdGlvbiB9LCBlbnRyeSwgb2JzZXJ2ZXIpO1xuXG4gICAgICBwcmV2UG9zaXRpb25SZWYuY3VycmVudCA9IHBvc2l0aW9uO1xuICAgIH0sXG4gICAge1xuICAgICAgdGhyZXNob2xkLFxuICAgICAgcm9vdDogcmVhbFJvb3QsXG4gICAgICByb290TWFyZ2luOiB0b0Nzcyhyb290TWFyZ2luKSxcbiAgICB9LFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXYXlwb2ludDtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGhvb2sgYXJvdW5kIGB1c2VTdGF0ZWAgZGVzaWduZWQgdG8gYmUgcGFpcmVkIHdpdGhcbiAqIHRoZSBjb21wb25lbnQgW2NhbGxiYWNrIHJlZl0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzKSBhcGkuXG4gKiBDYWxsYmFjayByZWZzIGFyZSB1c2VmdWwgb3ZlciBgdXNlUmVmKClgIHdoZW4geW91IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVmIGJlaW5nIHNldFxuICogaW5zdGVhZCBvZiBsYXppbHkgYWNjZXNzaW5nIGl0IGluIGFuIGVmZmVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGlmICghZWxlbWVudCkgcmV0dXJuXG4gKlxuICogICBjb25zdCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoZWxlbWVudClcbiAqXG4gKiAgIHJldHVybiAoKSA9PiB7XG4gKiAgICAgY2FsZW5kYXIuZGVzdHJveSgpXG4gKiAgIH1cbiAqIH0sIFtlbGVtZW50XSlcbiAqXG4gKiByZXR1cm4gPGRpdiByZWY9e2F0dGFjaFJlZn0gLz5cbiAqIGBgYFxuICpcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoKSB7XG4gIHJldHVybiB1c2VTdGF0ZShudWxsKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWZgIHdob3NlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gYW4gZWZmZWN0LCBlbnN1cmluZyB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlIGlzIHRoZSBvbmUgcmVuZGVyZWQgd2l0aC4gR2VuZXJhbGx5IG9ubHkgcmVxdWlyZWQgZm9yIENvbmN1cnJlbnQgbW9kZSB1c2FnZVxuICogd2hlcmUgcHJldmlvdXMgd29yayBpbiBgcmVuZGVyKClgIG1heSBiZSBkaXNjYXJkZWQgYmVmb3IgYmVpbmcgdXNlZC5cbiAqXG4gKiBUaGlzIGlzIHNhZmUgdG8gYWNjZXNzIGluIGFuIGV2ZW50IGhhbmRsZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBgUmVmYCB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbW1pdHRlZFJlZih2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIHJlZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tbWl0dGVkUmVmOyIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNvbW1pdHRlZFJlZiBmcm9tICcuL3VzZUNvbW1pdHRlZFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSB1c2VDb21taXR0ZWRSZWYoZm4pO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5hcHBseShyZWYsIGFyZ3VtZW50cyk7XG4gIH0sIFtyZWZdKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgb3V0c2lkZSBkaXJlY3RseSB0byBzcGVjaWZpZWQgRE9NIGVsZW1lbnRcbiAqIGJ5cGFzc2luZyB0aGUgcmVhY3Qgc3ludGhldGljIGV2ZW50IHN5c3RlbS5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgdGFyZ2V0IHRvIGxpc3RlbiBmb3IgZXZlbnRzIG9uXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICBpZiAoY2FwdHVyZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FwdHVyZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGxpc3RlbmVyKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGV2ZW50VGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gZXZlbnRUYXJnZXQoKSA6IGV2ZW50VGFyZ2V0O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICB9O1xuICB9LCBbZXZlbnRUYXJnZXRdKTtcbn0iLCJpbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHRoZSBgZG9jdW1lbnRgLFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIGBgYHRzXG4gKiB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICogIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdsb2JhbExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRUYXJnZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9LCBbXSk7XG4gIHJldHVybiB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50VGFyZ2V0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNvbW1pdHRlZFJlZiBmcm9tICcuL3VzZUNvbW1pdHRlZFJlZic7XG4vKipcbiAqIENyZWF0ZXMgYSBgc2V0SW50ZXJ2YWxgIHRoYXQgaXMgcHJvcGVybHkgY2xlYW5lZCB1cCB3aGVuIGEgY29tcG9uZW50IHVubW91bnRlZFxuICpcbiAqIGBgYHRzeFxuICogIGZ1bmN0aW9uIFRpbWVyKCkge1xuICogICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKVxuICogICAgdXNlSW50ZXJ2YWwoKCkgPT4gc2V0VGltZXIoaSA9PiBpICsgMSksIDEwMDApXG4gKlxuICogICAgcmV0dXJuIDxzcGFuPnt0aW1lcn0gc2Vjb25kcyBwYXN0PC9zcGFuPlxuICogIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBmbiBhbiBmdW5jdGlvbiBydW4gb24gZWFjaCBpbnRlcnZhbFxuICogQHBhcmFtIG1zIFRoZSBtaWxsaXNlY29uZHMgZHVyYXRpb24gb2YgdGhlIGludGVydmFsXG4gKi9cblxuZnVuY3Rpb24gdXNlSW50ZXJ2YWwoZm4sIG1zLCBwYXVzZWQsIHJ1bkltbWVkaWF0ZWx5KSB7XG4gIGlmIChwYXVzZWQgPT09IHZvaWQgMCkge1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHJ1bkltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHtcbiAgICBydW5JbW1lZGlhdGVseSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZTtcbiAgdmFyIGZuUmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTsgLy8gdGhpcyByZWYgaXMgbmVjZXNzYXJ5IGIvYyB1c2VFZmZlY3Qgd2lsbCBzb21ldGltZXMgbWlzcyBhIHBhdXNlZCB0b2dnbGVcbiAgLy8gb3JwaGFuaW5nIGEgc2V0VGltZW91dCBjaGFpbiBpbiB0aGUgYWV0aGVyLCBzbyByZWx5aW5nIG9uIGl0J3MgcmVmcmVzaCBsb2dpYyBpcyBub3QgcmVsaWFibGUuXG5cbiAgdmFyIHBhdXNlZFJlZiA9IHVzZUNvbW1pdHRlZFJlZihwYXVzZWQpO1xuXG4gIHZhciB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAocGF1c2VkUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBmblJlZi5jdXJyZW50KCk7XG4gICAgc2NoZWR1bGUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICB9O1xuXG4gIHZhciBzY2hlZHVsZSA9IGZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgIGhhbmRsZSA9IHNldFRpbWVvdXQodGljaywgbXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJ1bkltbWVkaWF0ZWx5KSB7XG4gICAgICB0aWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICB9O1xuICB9LCBbcGF1c2VkLCBydW5JbW1lZGlhdGVseV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnRlcnZhbDsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ29tbWl0dGVkUmVmIGZyb20gJy4vdXNlQ29tbWl0dGVkUmVmJztcblxuZnVuY3Rpb24gdXNlUmFmSW50ZXJ2YWwoZm4sIG1zLCBwYXVzZWQpIHtcbiAgaWYgKHBhdXNlZCA9PT0gdm9pZCAwKSB7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaGFuZGxlO1xuICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIGZuUmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTsgLy8gdGhpcyByZWYgaXMgbmVjZXNzYXJ5IGIvYyB1c2VFZmZlY3Qgd2lsbCBzb21ldGltZXMgbWlzcyBhIHBhdXNlZCB0b2dnbGVcbiAgLy8gb3JwaGFuaW5nIGEgc2V0VGltZW91dCBjaGFpbiBpbiB0aGUgYWV0aGVyLCBzbyByZWx5aW5nIG9uIGl0J3MgcmVmcmVzaCBsb2dpYyBpcyBub3QgcmVsaWFibGUuXG5cbiAgdmFyIHBhdXNlZFJlZiA9IHVzZUNvbW1pdHRlZFJlZihwYXVzZWQpO1xuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnQ7XG4gICAgaWYgKHBhdXNlZFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBpZiAoZGVsdGEgPj0gbXMgJiYgZm5SZWYuY3VycmVudCkge1xuICAgICAgZm5SZWYuY3VycmVudCgpO1xuICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJhZkludGVydmFsOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBNaW1pY3MgYSBSZWFjdCBjbGFzcyBjb21wb25lbnQncyBzdGF0ZSBtb2RlbCwgb2YgaGF2aW5nIGEgc2luZ2xlIHVuaWZpZWRcbiAqIGBzdGF0ZWAgb2JqZWN0IGFuZCBhbiB1cGRhdGVyIHRoYXQgbWVyZ2VzIHVwZGF0ZXMgaW50byB0aGUgZXhpc3Rpbmcgc3RhdGUsIGFzXG4gKiBvcHBvc2VkIHRvIHJlcGxhY2luZyBpdC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VNZXJnZVN0YXRlKHsgbmFtZTogJ0JldHN5JywgYWdlOiAyNCB9KVxuICpcbiAqIHNldFN0YXRlKHsgbmFtZTogJ0pvaGFuJyB9KSAvLyB7IG5hbWU6ICdKb2hhbicsIGFnZTogMjQgfVxuICpcbiAqIHNldFN0YXRlKHN0YXRlID0+ICh7IGFnZTogc3RhdGUuYWdlICsgMTAgfSkpIC8vIHsgbmFtZTogJ0pvaGFuJywgYWdlOiAzNCB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZXJnZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHVwZGF0ZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB1cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgbmV4dFN0YXRlID0gdXBkYXRlKHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZSA9PSBudWxsID8gc3RhdGUgOiBfZXh0ZW5kcyh7fSwgc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHVwZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzZXRTdGF0ZV0pO1xuICByZXR1cm4gW3N0YXRlLCB1cGRhdGVyXTtcbn0iLCJpbXBvcnQgdXNlTWVyZ2VTdGF0ZSBmcm9tICcuL3VzZU1lcmdlU3RhdGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVyZ2VTdGF0ZUZyb21Qcm9wcyhwcm9wcywgZ0RTRlAsIGluaXRpYWxTdGF0ZSkge1xuICB2YXIgX3VzZU1lcmdlU3RhdGUgPSB1c2VNZXJnZVN0YXRlKGluaXRpYWxTdGF0ZSksXG4gICAgICBzdGF0ZSA9IF91c2VNZXJnZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlTWVyZ2VTdGF0ZVsxXTtcblxuICB2YXIgbmV4dFN0YXRlID0gZ0RTRlAocHJvcHMsIHN0YXRlKTtcbiAgaWYgKG5leHRTdGF0ZSAhPT0gbnVsbCkgc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGVdO1xufSIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBUcmFjayB3aGV0aGVyIGEgY29tcG9uZW50IGlzIGN1cnJlbnQgbW91bnRlZC4gR2VuZXJhbGx5IGxlc3MgcHJlZmVyYWJsZSB0aGFuXG4gKiBwcm9wZXJsbHkgY2FuY2VsaW5nIGVmZmVjdHMgc28gdGhleSBkb24ndCBydW4gYWZ0ZXIgYSBjb21wb25lbnQgaXMgdW5tb3VudGVkLFxuICogYnV0IGhlbHBmdWwgaW4gY2FzZXMgd2hlcmUgdGhhdCBpc24ndCBmZWFzaWJsZSwgc3VjaCBhcyBhIGBQcm9taXNlYCByZXNvbHV0aW9uLlxuICpcbiAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGlzTW91bnRlZCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gKiBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkKClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBmZXRjaGRhdGEoKS50aGVuKChuZXdEYXRhKSA9PiB7XG4gKiAgICAgIGlmIChpc01vdW50ZWQoKSkge1xuICogICAgICAgIHNldERhdGEobmV3RGF0YSk7XG4gKiAgICAgIH1cbiAqICAgfSlcbiAqIH0pXG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNb3VudGVkKCkge1xuICB2YXIgbW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZVJlZihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1vdW50ZWQuY3VycmVudDtcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGlzTW91bnRlZC5jdXJyZW50O1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBTdG9yZSB0aGUgbGFzdCBvZiBzb21lIHZhbHVlLiBUcmFja2VkIHZpYSBhIGBSZWZgIG9ubHkgdXBkYXRpbmcgaXRcbiAqIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVycy5cbiAqXG4gKiBIZWxwZnVsIGlmIHlvdSBuZWVkIHRvIGNvbXBhcmUgYSBwcm9wIHZhbHVlIHRvIGl0J3MgcHJldmlvdXMgdmFsdWUgZHVyaW5nIHJlbmRlci5cbiAqXG4gKiBgYGB0c1xuICogZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gKiAgIGNvbnN0IGxhc3RQcm9wcyA9IHVzZVByZXZpb3VzKHByb3BzKVxuICpcbiAqICAgaWYgKGxhc3RQcm9wcy5mb28gIT09IHByb3BzLmZvbylcbiAqICAgICByZXNldFZhbHVlRnJvbVByb3BzKHByb3BzLmZvbylcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gdHJhY2tcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBGZXRjaCBhbmQgbG9hZCBhbiBpbWFnZSBmb3IgcHJvZ3JhbWF0aWMgdXNlIHN1Y2ggYXMgaW4gYSBgPGNhbnZhcz5gIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGltYWdlT3JVcmwgVGhlIGBIdG1sSW1hZ2VFbGVtZW50YCBvciBpbWFnZSB1cmwgdG8gbG9hZFxuICogQHBhcmFtIGNyb3NzT3JpZ2luIFRoZSBgY3Jvc3NvcmlnaW5gIGF0dHJpYnV0ZSB0byBzZXRcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgeyBpbWFnZSwgZXJyb3IgfSA9IHVzZUltYWdlKCcvc3RhdGljL2tpdHRlbnMucG5nJylcbiAqIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGNvbnN0IGN0eCA9IHJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAqXG4gKiAgIGlmIChpbWFnZSkge1xuICogICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApXG4gKiAgIH1cbiAqIH0sIFtyZWYsIGltYWdlXSlcbiAqXG4gKiByZXR1cm4gKFxuICogICA8PlxuICogICAgIHtlcnJvciAmJiBcInRoZXJlIHdhcyBhIHByb2JsZW0gbG9hZGluZyB0aGUgaW1hZ2VcIn1cbiAqICAgICA8Y2FudmFzIHJlZj17cmVmfSAvPlxuICogICA8Lz5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VJbWFnZShpbWFnZU9yVXJsLCBjcm9zc09yaWdpbikge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgIGltYWdlOiBudWxsLFxuICAgIGVycm9yOiBudWxsXG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW1hZ2VPclVybCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgaW1hZ2U7XG5cbiAgICBpZiAodHlwZW9mIGltYWdlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaWYgKGNyb3NzT3JpZ2luKSBpbWFnZS5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UgPSBpbWFnZU9yVXJsO1xuXG4gICAgICBpZiAoaW1hZ2UuY29tcGxldGUgJiYgaW1hZ2UubmF0dXJhbEhlaWdodCA+IDApIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgIH07XG4gIH0sIFtpbWFnZU9yVXJsLCBjcm9zc09yaWdpbl0pO1xuICByZXR1cm4gc3RhdGU7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIC8vIEB0cy1pZ25vcmVcbmdsb2JhbC5uYXZpZ2F0b3IgJiYgLy8gQHRzLWlnbm9yZVxuZ2xvYmFsLm5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xudmFyIGlzRE9NID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbi8qKlxuICogSXMgYHVzZUxheW91dEVmZmVjdGAgaW4gYSBET00gb3IgUmVhY3QgTmF0aXZlIGVudmlyb25tZW50LCBvdGhlcndpc2UgcmVzb2x2ZXMgdG8gdXNlRWZmZWN0XG4gKiBPbmx5IHVzZWZ1bCB0byBhdm9pZCB0aGUgY29uc29sZSB3YXJuaW5nLlxuICpcbiAqIFBSRUZFUiBgdXNlRWZmZWN0YCBVTkxFU1MgWU9VIEtOT1cgV0hBVCBZT1UgQVJFIERPSU5HLlxuICpcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgaXNET00gfHwgaXNSZWFjdE5hdGl2ZSA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljRWZmZWN0JztcbnZhciB0YXJnZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHJlc2l6ZU9ic2VydmVyO1xuXG5mdW5jdGlvbiBnZXRSZXNpemVPYnNlcnZlcigpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ25cbiAgcmV0dXJuIHJlc2l6ZU9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXIgfHwgbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGFyZ2V0TWFwLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIoZW50cnkuY29udGVudFJlY3QpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8qKlxuICogRWZmaWNpZW50bHkgb2JzZXJ2ZSBzaXplIGNoYW5nZXMgb24gYW4gZWxlbWVudC4gRGVwZW5kcyBvbiB0aGUgYFJlc2l6ZU9ic2VydmVyYCBhcGksXG4gKiBhbmQgcG9seWZpbGxzIGFyZSBuZWVkZWQgaW4gb2xkZXIgYnJvd3NlcnMuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtyZWYsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZihudWxsKTtcbiAqXG4gKiBjb25zdCByZWN0ID0gdXNlUmVzaXplT2JzZXJ2ZXIocmVmKTtcbiAqXG4gKiByZXR1cm4gKFxuICogIDxkaXYgcmVmPXthdHRhY2hSZWZ9PlxuICogICAge0pTT04uc3RyaW5naWZ5KHJlY3QpfVxuICogIDwvZGl2PlxuICogKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmVcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKGVsZW1lbnQpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgcmVjdCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFJlY3QgPSBfdXNlU3RhdGVbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICBnZXRSZXNpemVPYnNlcnZlcigpLm9ic2VydmUoZWxlbWVudCk7XG4gICAgc2V0UmVjdChlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB0YXJnZXRNYXAuc2V0KGVsZW1lbnQsIGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICBzZXRSZWN0KHJlY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0YXJnZXRNYXAuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtlbGVtZW50XSk7XG4gIHJldHVybiByZWN0O1xufSIsImltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICcuL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgdXNlR2xvYmFsTGlzdGVuZXIgZnJvbSAnLi91c2VHbG9iYWxMaXN0ZW5lcic7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5pbXBvcnQgdXNlUmFmSW50ZXJ2YWwgZnJvbSAnLi91c2VSYWZJbnRlcnZhbCc7XG5pbXBvcnQgdXNlTWVyZ2VTdGF0ZSBmcm9tICcuL3VzZU1lcmdlU3RhdGUnO1xuaW1wb3J0IHVzZU1lcmdlU3RhdGVGcm9tUHJvcHMgZnJvbSAnLi91c2VNZXJnZVN0YXRlRnJvbVByb3BzJztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnLi91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlSW1hZ2UgZnJvbSAnLi91c2VJbWFnZSc7XG5pbXBvcnQgdXNlUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi91c2VSZXNpemVPYnNlcnZlcic7XG5leHBvcnQgeyB1c2VDYWxsYmFja1JlZiwgdXNlQ29tbWl0dGVkUmVmLCB1c2VFdmVudENhbGxiYWNrLCB1c2VFdmVudExpc3RlbmVyLCB1c2VHbG9iYWxMaXN0ZW5lciwgdXNlSW50ZXJ2YWwsIHVzZVJhZkludGVydmFsLCB1c2VNZXJnZVN0YXRlLCB1c2VNZXJnZVN0YXRlRnJvbVByb3BzLCB1c2VNb3VudGVkLCB1c2VQcmV2aW91cywgdXNlSW1hZ2UsIHVzZVJlc2l6ZU9ic2VydmVyIH07IiwiaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVdheXBvaW50LCB7XG4gIFdheXBvaW50T3B0aW9ucyxcbiAgV2F5cG9pbnRFdmVudCxcbiAgUG9zaXRpb24sXG59IGZyb20gJy4vdXNlV2F5cG9pbnQnO1xuXG5leHBvcnQgeyBQb3NpdGlvbiB9O1xuZXhwb3J0IHR5cGUgeyBXYXlwb2ludEV2ZW50IH07XG5cbmNvbnN0IGRlZmF1bHRSZW5kZXJDb21wb25lbnQgPSAocmVmOiBSZWFjdC5SZWZDYWxsYmFjazxhbnk+KSA9PiAoXG4gIDxzcGFuIHJlZj17cmVmfSBzdHlsZT17eyBmb250U2l6ZTogMCB9fSAvPlxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBXYXlwb2ludFByb3BzIGV4dGVuZHMgV2F5cG9pbnRPcHRpb25zIHtcbiAgcmVuZGVyQ29tcG9uZW50PzogKHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8YW55PikgPT4gUmVhY3QuUmVhY3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIHdheXBvaW50J3MgcG9zaXRpb24gaXMgdXBkYXRlZC4gVGhpcyBnZW5lcmFsbHlcbiAgICogZmlyZXMgYXMgYSB3YXlwb2ludCBlbnRlcnMgb3IgZXhpdHMgdGhlIHZpZXdwb3J0IGJ1dCB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAqIG9uIG1vdW50LlxuICAgKi9cbiAgb25Qb3NpdGlvbkNoYW5nZTogKFxuICAgIGRldGFpbHM6IFdheXBvaW50RXZlbnQsXG4gICAgZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnksXG4gICkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHRyYWNrcyB3aGVuIGl0IGVudGVycyBvciBsZWF2ZXMgdGhlIHZpZXdwb3J0LiBJbXBsZW1lbnRlZFxuICogdXNpbmcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsIHBvbHlmaWxsIG1heSBiZSByZXF1aXJlZCBmb3Igb2xkZXIgYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIFdheXBvaW50KHtcbiAgcmVuZGVyQ29tcG9uZW50ID0gZGVmYXVsdFJlbmRlckNvbXBvbmVudCxcbiAgb25Qb3NpdGlvbkNoYW5nZSxcbiAgLi4ub3B0aW9uc1xufTogV2F5cG9pbnRQcm9wcykge1xuICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VDYWxsYmFja1JlZjxFbGVtZW50PigpO1xuXG4gIHVzZVdheXBvaW50KGVsZW1lbnQsIG9uUG9zaXRpb25DaGFuZ2UsIG9wdGlvbnMpO1xuXG4gIHJldHVybiByZW5kZXJDb21wb25lbnQoc2V0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdheXBvaW50O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tICdAcmVzdGFydC9ob29rcyc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0VmZmVjdCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VJc29tb3JwaGljRWZmZWN0JztcbmltcG9ydCBXYXlwb2ludCwgeyBQb3NpdGlvbiB9IGZyb20gJ0ByZXN0YXJ0L3VpL1dheXBvaW50JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBob3Jpem9udGFsPzogYm9vbGVhbjtcbiAgc2Nyb2xsSW50b1ZpZXc/OiBib29sZWFuO1xuICBtYXJnaW5zPzogYW55O1xufVxuXG5jb25zdCBWSUVXUE9SVCA9IDYwO1xuY29uc3QgZGVmYXVsdE1hcmdpbiA9IHtcbiAgdG9wOiAtVklFV1BPUlQsXG4gIHJpZ2h0OiAtVklFV1BPUlQsXG4gIGJvdHRvbTogLVZJRVdQT1JULFxuICBsZWZ0OiAtVklFV1BPUlQsXG59O1xuZnVuY3Rpb24gU3BhY2VyKHsgaG9yaXpvbnRhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC00eGwnLFxuICAgICAgICBob3Jpem9udGFsICYmICdtaW4tdy1bMzAlXScsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcxMDBweCcgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGhvcml6b250YWwgJiYgJ3RyYW5zZm9ybSAtcm90YXRlLTkwJyl9XG4gICAgICA+XG4gICAgICAgIOKWvFxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBPdmVybGF5KHsgaG9yaXpvbnRhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhYnNvbHV0ZSBib3JkZXItYmxhY2sgYm9yZGVyLTIgaW5zZXQtMCcpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgJHtWSUVXUE9SVH1weCByZ2JhKDAsIDAsIDAsIC40KWAsXG4gICAgICAgIC4uLihob3Jpem9udGFsXG4gICAgICAgICAgPyB7IGxlZnQ6IGAke1ZJRVdQT1JUfXB4YCwgcmlnaHQ6IGAke1ZJRVdQT1JUfXB4YCB9XG4gICAgICAgICAgOiB7IHRvcDogYCR7VklFV1BPUlR9cHhgLCBib3R0b206IGAke1ZJRVdQT1JUfXB4YCB9KSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFyZ2lucyh7IG1hcmdpbnMgfSkge1xuICBjb25zdCB7IHRvcCwgYm90dG9tIH0gPSBtYXJnaW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9wICE9IG51bGwgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGJnLXllbGxvdy0yMDAgYmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRvcDogYCR7dG9wIDwgMCA/IFZJRVdQT1JUIDogVklFV1BPUlQgLSB0b3B9cHhgLFxuICAgICAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRvcCksXG4gICAgICAgICAgICByaWdodDogMTcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Ym90dG9tICE9IG51bGwgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGJnLXllbGxvdy0yMDAgYmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tOiBgJHtib3R0b20gPCAwID8gVklFV1BPUlQgOiBWSUVXUE9SVCAtIGJvdHRvbX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGJvdHRvbSksXG4gICAgICAgICAgICByaWdodDogMTcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcmdpbnMobWFyZ2lucykge1xuICBpZiAoIW1hcmdpbnMpIHJldHVybiBkZWZhdWx0TWFyZ2luO1xuICBjb25zdCBuZXh0ID0geyAuLi5kZWZhdWx0TWFyZ2luIH07XG4gIGlmIChtYXJnaW5zLnRvcCAhPSBudWxsKSBuZXh0LnRvcCArPSBtYXJnaW5zLnRvcDtcbiAgaWYgKG1hcmdpbnMuYm90dG9tICE9IG51bGwpIG5leHQuYm90dG9tICs9IG1hcmdpbnMuYm90dG9tO1xuXG4gIHJldHVybiBuZXh0O1xufVxuZnVuY3Rpb24gV2F5cG9pbnRFeGFtcGxlKHsgaG9yaXpvbnRhbCwgc2Nyb2xsSW50b1ZpZXcsIG1hcmdpbnMgfTogUHJvcHMpIHtcbiAgY29uc3QgW3Jvb3QsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUlzb21vcnBoaWNFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsSW50b1ZpZXcgfHwgIXJvb3QpIHJldHVybjtcblxuICAgIHJvb3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1leGFtcGxlLXdheXBvaW50JykhXG4gICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2NlbnRlcicgfSk7XG4gICAgLy8gcm9vdC5zY3JvbGxUb3AgPSByb290LnNjcm9sbEhlaWdodCAvIDI7XG4gIH0sIFtyb290XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBtYi00XCI+XG4gICAgICB7bWVzc2FnZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAnYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHAtNCBsZWZ0LTEvMiB0b3AtMS8yIHRleHQtY2VudGVyIHotMTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTEvMiBhYnNvbHV0ZSB3LTY0JyxcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxPdmVybGF5IGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICB7bWFyZ2lucyAmJiA8TWFyZ2lucyBtYXJnaW5zPXttYXJnaW5zfSAvPn1cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXthdHRhY2hSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAnZmxleCByZWxhdGl2ZSBvdmVyZmxvdy1hdXRvIGJvcmRlciByb3VuZGVkJyxcbiAgICAgICAgICAhaG9yaXpvbnRhbCAmJiAnZmxleC1jb2wnLFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDIwMCwgbWF4SGVpZ2h0OiA0MDAgfX1cbiAgICAgID5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxXYXlwb2ludFxuICAgICAgICAgIHJvb3Q9XCJzY3JvbGxQYXJlbnRcIlxuICAgICAgICAgIHJvb3RNYXJnaW49e25vcm1hbGl6ZU1hcmdpbnMobWFyZ2lucyl9XG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uPXtob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ31cbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ9eyhyZWYpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAnZG9jcy1leGFtcGxlLXdheXBvaW50JyxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLWRhc2hlZCBib3JkZXItcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbCA/ICdib3JkZXItbC00JyA6ICdib3JkZXItdC00JyxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXsoeyBwb3NpdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLkJFRk9SRSB8fCBwb3NpdGlvbiA9PT0gUG9zaXRpb24uQUZURVIpIHtcbiAgICAgICAgICAgICAgc2V0TWVzc2FnZShgRXhpdGVkICgke1Bvc2l0aW9uW3Bvc2l0aW9uXS50b0xvd2VyQ2FzZSgpfSlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uSU5TSURFKSB7XG4gICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ0VudGVyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYXlwb2ludEV4YW1wbGU7XG4iLCJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbiAgXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcIldheXBvaW50XCIsXG4gIFwiaWRcIjogXCJXYXlwb2ludFwiLFxuICBcImlzRG9jc0hvbWVQYWdlXCI6IGZhbHNlLFxuICBcInRpdGxlXCI6IFwiV2F5cG9pbnRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgY29tcG9uZW50IChhbmQgcmVsYXRlZCBob29rKSB0byBwcm92aWRlIGEgaGlnaCBsZXZlbCBpbnRlcmZhY2VcIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL1dheXBvaW50Lm1keFwiLFxuICBcInNvdXJjZURpck5hbWVcIjogXCIuXCIsXG4gIFwic2x1Z1wiOiBcIi9XYXlwb2ludFwiLFxuICBcInBlcm1hbGlua1wiOiBcIi91aS9XYXlwb2ludFwiLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge30sXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlBvcnRhbFwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL1BvcnRhbFwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZVBvcHBlclwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3VzZVBvcHBlclwiXG4gIH1cbn07XG4gIC8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgSW1wb3J0Q29udGV4dCwgeyBhbGxWYWx1ZXMgfSBmcm9tIFwiQHRoZW1lL0ltcG9ydENvbnRleHRcIjtcbmltcG9ydCBXYXlwb2ludEV4YW1wbGUgZnJvbSBcIi4uL3NyYy9XYXlwb2ludEV4YW1wbGVcIjtcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0hvdyBpdCB3b3JrcycsXG4gIGlkOiAnaG93LWl0LXdvcmtzJyxcbiAgY2hpbGRyZW46IFtdXG59LCB7XG4gIHZhbHVlOiAnU2Nyb2xsIGRpcmVjdGlvbicsXG4gIGlkOiAnc2Nyb2xsLWRpcmVjdGlvbicsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ1NwZWNpZnlpbmcgdGhlIHNjcm9sbCBwYXJlbnQnLFxuICBpZDogJ3NwZWNpZnlpbmctdGhlLXNjcm9sbC1wYXJlbnQnLFxuICBjaGlsZHJlbjogW11cbn0sIHtcbiAgdmFsdWU6ICdNYXJnaW5zJyxcbiAgaWQ6ICdtYXJnaW5zJyxcbiAgY2hpbGRyZW46IFtdXG59LCB7XG4gIHZhbHVlOiAnPGNvZGU+dXNlV2F5cG9pbnQ8L2NvZGU+JyxcbiAgaWQ6ICd1c2V3YXlwb2ludCcsXG4gIGNoaWxkcmVuOiBbXVxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPHA+e2BBIGNvbXBvbmVudCAoYW5kIHJlbGF0ZWQgaG9vaykgdG8gcHJvdmlkZSBhIGhpZ2ggbGV2ZWwgaW50ZXJmYWNlXG5vdmVyIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVwiXG4gICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgfTwvaW5saW5lQ29kZT48L2E+e2BcbmRlc2lnbmVkIHRvIGRldGVjdCB3aGVuIGEgY29tcG9uZW50IGVudGVycyBhbmQgZXhpdHMgYSB2aWV3cG9ydC5gfTwvcD5cbiAgICA8cD48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgV2F5cG9pbnRgfTwvaW5saW5lQ29kZT57YCBwcm92aWRlcyBhIGdvb2QgYmFzaXMgZm9yIGJ1aWxkaW5nIG90aGVyIGNvbXBvbmVudHMgbGlrZSBpbmZpbml0ZSBsaXN0cyxcblwic2Nyb2xsIHNweVwiIHN0eWxlIG5hdmlnYXRpb24sIGxhenkgbG9hZGluZyBpbWFnZXMsIGFuZCBtb3JlLmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImhvdy1pdC13b3Jrc1wiXG4gICAgfX0+e2BIb3cgaXQgd29ya3NgfTwvaDI+XG4gICAgPHA+e2BXYXlwb2ludCByZW5kZXJzIGEgXCJzZW50aW5lbFwiIGVsZW1lbnQgdGhhdCB5b3UgcGxhY2UgaW4gYSBzY3JvbGxhYmxlXG5hcmVhLiBVc2luZyBhbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbnRlcnNlY3Rpb25PYnNlcnZlcmB9PC9pbmxpbmVDb2RlPntgLCB0aGUgd2F5cG9pbnQgZmlyZXMgYSBjYWxsYmFjayB3aGVuIGl0XG5cImludGVyc2VjdHNcIiB3aXRoIHRoZSB2aXNpYmxlIGFyZWEgb2YgdGhlIHNjcm9sbCB2aWV3LiBXYXlwb2ludCB3aWxsIGZpcmUgYSBjYWxsYmFja1xud2hlbiB0aGlzIGhhcHBlbnMgd2l0aCBkZXRhaWxzIGFib3V0IHdoZXJlIHRoZSB3YXlwb2ludCBpcyBpbiByZWxhdGlvbiB0byB0aGUgdmlzaWJsZVxuYXJlYS5gfTwvcD5cbiAgICA8cD57YFRoZSBleGFtcGxlIGJlbG93IGFkZHMgdmlzaWJsZSBzdHlsaW5nIHRvIHdheXBvaW50IGZvciBjbGFyaXR5LiBCeSBkZWZhdWx0IGFcbndheXBvaW50IHJlbmRlcnMgYW4gaW52aXNpYmxlIHplcm8taGVpZ2h0IGVsZW1lbnQuYH08L3A+XG4gICAgPFdheXBvaW50RXhhbXBsZSBzY3JvbGxJbnRvVmlldyBtZHhUeXBlPVwiV2F5cG9pbnRFeGFtcGxlXCIgLz5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzY3JvbGwtZGlyZWN0aW9uXCJcbiAgICB9fT57YFNjcm9sbCBkaXJlY3Rpb25gfTwvaDI+XG4gICAgPHA+e2BGb3Igc2ltcGxpY2l0eSwgc2Nyb2xsIGRldGVjdGlvbiB3aXRoIHdheXBvaW50cyBpcyBsaW1pdGVkIHRvIGEgc2luZ2xlIGRpcmVjdGlvbiBhdCBvbmUgdGltZS5cbkJ5IGRlZmF1bHQgdGhhdCBkaXJlY3Rpb24gaXMgXCJ2ZXJ0aWNhbFwiLCBidXQgY2FuIGNvbmZpZ3VyZWQgdG8gXCJob3Jpem9udGFsXCIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c3hcIlxuICAgICAgfX0+e2A8V2F5cG9pbnQgc2Nyb2xsRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIC8+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8V2F5cG9pbnRFeGFtcGxlIGhvcml6b250YWwgbWR4VHlwZT1cIldheXBvaW50RXhhbXBsZVwiIC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic3BlY2lmeWluZy10aGUtc2Nyb2xsLXBhcmVudFwiXG4gICAgfX0+e2BTcGVjaWZ5aW5nIHRoZSBzY3JvbGwgcGFyZW50YH08L2gyPlxuICAgIDxwPntgQnkgZGVmYXVsdCB3YXlwb2ludCBvYnNlcnZlcyBzY3JvbGxpbmcgb24gdGhlIGRldmljZSB2aWV3cG9ydCwgZ2VuZXJhbGx5IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3dgfTwvaW5saW5lQ29kZT57YC5cbllvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgc3BlY2lmaWMgZWxlbWVudCBhcyB0aGUgcm9vdCBieSBwcm92aWRpbmcgYSBET00gZWxlbWVudFxudG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJvb3RgfTwvaW5saW5lQ29kZT57YCBwcm9wLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgZnVuY3Rpb24gU2Nyb2xsQXJlYSh7IGl0ZW1zLCBvblBvc2l0aW9uQ2hhbmdlIH0pIHtcbiAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGU8SFRNTERpdkVsZW1lbnQ+KFxuICAgIG51bGxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzZXRFbGVtZW50fSBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICB7aXRlbXN9XG4gICAgICA8V2F5cG9pbnRcbiAgICAgICAgcm9vdD17ZWxlbWVudH1cbiAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17b25Qb3NpdGlvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJtYXJnaW5zXCJcbiAgICB9fT57YE1hcmdpbnNgfTwvaDI+XG4gICAgPHA+e2BZb3UgY2FuIGFkanVzdCB0aGUgZnVuY3Rpb25hbCBzaGFwZSBvZiB0aGUgdmlld3BvcnQgYnkgcHJvdmlkaW5nIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcm9vdE1hcmdpbmB9PC9pbmxpbmVDb2RlPntgXG5wcm9wLCB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIHVuZGVybHlpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgfTwvaW5saW5lQ29kZT57YC4gQXMgYSBjb252ZW5pZW5jZSxcbldheXBvaW50IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggaW5zZXQgcHJvcGVydGllcyBhcyB3ZWxsIGFzIGEgdmFsaWQgQ1NTIG1hcmdpbiBwcm9wZXJ0eVxudmFsdWUuYH08L3A+XG4gICAgPHA+e2BQb3NpdGl2ZSBtYXJnaW5zIGdyb3cgdGhlIG92ZXJhbGwgc2l6ZSBvZiB0aGUgdmlld3BvcnQgY2F1c2luZyB3YXlwb2ludHMgdG8gZW50ZXJcbmJlZm9yZSB0aGV5IGFyZSBhY3R1YWxseSBpbiB2aWV3LiBOZWdhdGl2ZSB2YWx1ZXMgc2hyaW5rIHRoZSB2aWV3cG9ydCwgYW5kIGRlbGF5c1xudGhlIHdheXBvaW50IGZyb20gZW50ZXJpbmcgYnkgdGhlIHNwZWNpZmllZCBwaXhlbCBhbW91bnQuIE1hcmdpbnMgYXJlIGlsbHVzdHJhdGVkXG5ieSB0aGUgeWVsbG93IGJsb2NrcyBpbiB0aGUgZXhhbXBsZSBiZWxvdy5gfTwvcD5cbiAgICA8cD57YEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBwb3NpdGl2ZSBtYXJnaW5zOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgPFdheXBvaW50IHJvb3RNYXJnaW49e3sgdG9wOiAyMCwgYm90dG9tOiAyMCB9fSAvPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPFdheXBvaW50RXhhbXBsZSBtYXJnaW5zPXt7XG4gICAgICB0b3A6IDIwLFxuICAgICAgYm90dG9tOiAyMFxuICAgIH19IG1keFR5cGU9XCJXYXlwb2ludEV4YW1wbGVcIiAvPlxuICAgIDxwPkFuZCB0aGUgZWZmZWN0IHdpdGggbmVnYXRpdmUgbWFyZ2luczwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiXG4gICAgICB9fT57YDxXYXlwb2ludCByb290TWFyZ2luPXt7IHRvcDogLTIwLCBib3R0b206IC0yMCB9fSAvPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPFdheXBvaW50RXhhbXBsZSBtYXJnaW5zPXt7XG4gICAgICB0b3A6IC0yMCxcbiAgICAgIGJvdHRvbTogLTIwXG4gICAgfX0gbWR4VHlwZT1cIldheXBvaW50RXhhbXBsZVwiIC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNld2F5cG9pbnRcIlxuICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJoMlwiPntgdXNlV2F5cG9pbnRgfTwvaW5saW5lQ29kZT48L2gyPlxuICAgIDxwPntgVGhlIHVuZGVybHlpbmcgaG9vayBwb3dlcmluZyB0aGUgV2F5cG9pbnQgY29tcG9uZW50LiBMZXZlcmFnZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1c2VXYXlwb2ludGB9PC9pbmxpbmVDb2RlPntgXG50byB0dXJuIGFueSBjb21wb25lbnQgaW50byBhIHdheXBvaW50LiBVc2luZyB0aGUgaG9vayBkaXJlY3RseSBpcyBoZWxwZnVsXG53aGVuIHlvdSB3YW50IGFuIGluZGl2aWR1YWwgY29tcG9uZW50IHRvIHJlc3BvbmRgfTwvcD5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJkb20taGVscGVycy9zY3JvbGxQYXJlbnRcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1XYXlwb2ludC5tZHhcIiAqL1xuICAgICAgJ2RvbS1oZWxwZXJzL3Njcm9sbFBhcmVudCcpLFxuICAgICAgXCJAcmVzdGFydC91aS91c2VXYXlwb2ludFwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLVdheXBvaW50Lm1keFwiICovXG4gICAgICAnQHJlc3RhcnQvdWkvdXNlV2F5cG9pbnQnKVxuICAgIH0pfSBtZHhUeXBlPVwiSW1wb3J0Q29udGV4dFwiPlxuICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmVcIixcbiAgICAgICAgICBcImxpdmVcIjogdHJ1ZVxuICAgICAgICB9fT57YGltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcImRvbS1oZWxwZXJzL3Njcm9sbFBhcmVudFwiO1xuaW1wb3J0IHVzZVdheXBvaW50LCB7XG4gIFBvc2l0aW9uLFxufSBmcm9tIFwiQHJlc3RhcnQvdWkvdXNlV2F5cG9pbnRcIjtcblxuZnVuY3Rpb24gTGF6eUltYWdlKHsgc3JjIH0pIHtcbiAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hhc0JlZW5TZWVuLCBzZXRTZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3YXlwb2ludFJlZiA9IHVzZVdheXBvaW50KFxuICAgIGVsZW1lbnQsXG4gICAgKHsgcG9zaXRpb24sIHByZXZpb3VzUG9zaXRpb24gfSwgZW50cnksIG9ic2VydmVyKSA9PiB7XG4gICAgICBpZiAoaGFzQmVlblNlZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRTZWVuKHBvc2l0aW9uID09PSBQb3NpdGlvbi5JTlNJREUpO1xuICAgIH0sXG4gICAge1xuICAgICAgcm9vdDogXCJzY3JvbGxQYXJlbnRcIixcbiAgICAgIHNjcm9sbERpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICByb290TWFyZ2luOiB7IHJpZ2h0OiAtODAgfSxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICByZWY9e2F0dGFjaFJlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogMTYwLFxuICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgfX1cbiAgICAgIC8vIHN3YXAgb3V0IGZvciB0aGUgcmVhbCBpbWFnZSB3aGVuIGl0J3MgYmVlbiBzZWVuXG4gICAgICBzcmM9e2hhc0JlZW5TZWVuID8gc3JjIDogXCJcIn1cbiAgICAvPlxuICApO1xufVxuXG48ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTRcIj5cbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvcmRlci1ibGFjayBib3JkZXItMiBwb2ludGVyLWV2ZW50cy1ub25lIFwiXG4gICAgc3R5bGU9e3sgdG9wOiAwLCBib3R0b206IDQwLCBsZWZ0OiAwLCByaWdodDogODAgfX1cbiAgLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LXNjcm9sbCBoLTU2IGdyaWQgZ3JpZC1mbG93LWNvbCBhdXRvLWNvbHMtWzE2MHB4XVwiPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8xNjAvMTYwXCIgLz5cbiAgICA8TGF6eUltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xNTMvMTYwLzE2MFwiIC8+XG4gICAgPExhenlJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTI1LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzc0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzUwLzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzM0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEyLzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzE4LzE2MC8xNjBcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvSW1wb3J0Q29udGV4dD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuICAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQURBO0FBQ0E7QUFHQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBK0NBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQXZDQTtBQTBDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFEQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBREE7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOztBQ2xLQTtBQW1FQTtBQUdBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFJQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQVNBO0FBU0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==