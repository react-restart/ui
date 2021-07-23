exports.id = 162;
exports.ids = [162];
exports.modules = {

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

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function TabItem({
  children,
  hidden,
  className
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    role: "tabpanel",
    hidden,
    className
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabItem);

/***/ }),

/***/ 2114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(9443);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function useUserPreferencesContext() {
  const context = (0,react.useContext)(UserPreferencesContext/* default */.Z);

  if (context == null) {
    throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');
  }

  return context;
}

/* harmony default export */ const hooks_useUserPreferencesContext = (useUserPreferencesContext);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"tabItem": "tabItem_1uMI",
	"tabItemActive": "tabItemActive_2DSg",
	"blink": "blink_XB8L"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function isInViewport(element) {
  const {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return top >= 0 && right <= innerWidth && bottom <= innerHeight && left >= 0;
}

const keys = {
  left: 37,
  right: 39
};

function Tabs(props) {
  const {
    lazy,
    block,
    defaultValue,
    values,
    groupId,
    className
  } = props;
  const {
    tabGroupChoices,
    setTabGroupChoices
  } = hooks_useUserPreferencesContext();
  const [selectedValue, setSelectedValue] = (0,react.useState)(defaultValue);
  const children = react.Children.toArray(props.children);
  const tabRefs = [];

  if (groupId != null) {
    const relevantTabGroupChoice = tabGroupChoices[groupId];

    if (relevantTabGroupChoice != null && relevantTabGroupChoice !== selectedValue && values.some(value => value.value === relevantTabGroupChoice)) {
      setSelectedValue(relevantTabGroupChoice);
    }
  }

  const handleTabChange = event => {
    const selectedTab = event.currentTarget;
    const selectedTabIndex = tabRefs.indexOf(selectedTab);
    const selectedTabValue = values[selectedTabIndex].value;
    setSelectedValue(selectedTabValue);

    if (groupId != null) {
      setTabGroupChoices(groupId, selectedTabValue);
      setTimeout(() => {
        if (isInViewport(selectedTab)) {
          return;
        }

        selectedTab.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
        selectedTab.classList.add(styles_module.tabItemActive);
        setTimeout(() => selectedTab.classList.remove(styles_module.tabItemActive), 2000);
      }, 150);
    }
  };

  const handleKeydown = event => {
    var _focusElement;

    let focusElement;

    switch (event.keyCode) {
      case keys.right:
        {
          const nextTab = tabRefs.indexOf(event.target) + 1;
          focusElement = tabRefs[nextTab] || tabRefs[0];
          break;
        }

      case keys.left:
        {
          const prevTab = tabRefs.indexOf(event.target) - 1;
          focusElement = tabRefs[prevTab] || tabRefs[tabRefs.length - 1];
          break;
        }

      default:
        break;
    }

    (_focusElement = focusElement) == null ? void 0 : _focusElement.focus();
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "tabs-container"
  }, /*#__PURE__*/react.createElement("ul", {
    role: "tablist",
    "aria-orientation": "horizontal",
    className: (0,clsx_m.default)('tabs', {
      'tabs--block': block
    }, className)
  }, values.map(({
    value,
    label
  }) => /*#__PURE__*/react.createElement("li", {
    role: "tab",
    tabIndex: selectedValue === value ? 0 : -1,
    "aria-selected": selectedValue === value,
    className: (0,clsx_m.default)('tabs__item', styles_module.tabItem, {
      'tabs__item--active': selectedValue === value
    }),
    key: value,
    ref: tabControl => tabRefs.push(tabControl),
    onKeyDown: handleKeydown,
    onFocus: handleTabChange,
    onClick: handleTabChange
  }, label))), lazy ? /*#__PURE__*/(0,react.cloneElement)(children.filter(tabItem => tabItem.props.value === selectedValue)[0], {
    className: 'margin-vert--md'
  }) : /*#__PURE__*/react.createElement("div", {
    className: "margin-vert--md"
  }, children.map((tabItem, i) => /*#__PURE__*/(0,react.cloneElement)(tabItem, {
    key: i,
    hidden: tabItem.props.value !== selectedValue
  }))));
}

/* harmony default export */ const theme_Tabs = (Tabs);

/***/ }),

/***/ 9443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const UserPreferencesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPreferencesContext);

/***/ }),

/***/ 6227:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2114);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8215);
const frontMatter={title:'Getting Started',slug:'/'};const contentTitle=undefined;const metadata={"unversionedId":"getting-started","id":"getting-started","isDocsHomePage":false,"title":"Getting Started","description":"Restart UI is a set of full featured, extensible, and accessible UI components, designed to integrate into any styling","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/","permalink":"/ui/","version":"current","frontMatter":{"title":"Getting Started","slug":"/"},"sidebar":"docs","next":{"title":"Button","permalink":"/ui/Button"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Installation',id:'installation',children:[]},{value:'Usage',id:'usage',children:[]},{value:'Styling',id:'styling',children:[]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Restart UI is a set of full featured, extensible, and accessible UI components, designed to integrate into any styling
framework or system. Restart components, are "headless", meaning they don't provide any styles. Components encapsulate
the complicated logic and and state without being prescriptive about their look and feel.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"installation"},`Installation`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,{defaultValue:"npm",values:[{label:'npm',value:'npm'},{label:'Yarn',value:'yarn'}],mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z,{value:"npm",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`npm install @restart/ui
`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z,{value:"yarn",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`yarn add @restart/ui
`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"usage"},`Usage`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Components can be imported from the main package or directly like:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},`import Dropdown from "@restart/ui/Dropdown";
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"styling"},`Styling`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Restart UI is a "headless" framework, meaning each component encapsulates logic and markup but not styling.
Restart UI is intended as a basis for building design systems using which styling technology you like.
You should provide your own styles, and the documentation provides some simple examples
for how to do that. For more complex integrations, check out `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/react-bootstrap/react-bootstrap"},`React Bootstrap`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`There are a few places where inline `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`style`),`s are applied, however. They are functionally
required and very minimal. Specifically `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`PopperJs`),` injects it's own styles in order
to position overlays and dropdowns, and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Modal`),` applies `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`overflow: hidden`),` to the
document body. These can technically be overridden but you probably won't need to.`));};MDXContent.isMDXComponent=true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2Q1ODlkM2E3LjVlM2M4OWExLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2Rpc3QvZXNtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UYWJJdGVtL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UYWJzL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UYWJzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Vc2VyUHJlZmVyZW5jZXNDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9kb2NzL2dldHRpbmctc3RhcnRlZC5tZCIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gVGFiSXRlbSh7Y2hpbGRyZW4sIGhpZGRlbiwgY2xhc3NOYW1lfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICB7Li4ue1xuICAgICAgICBoaWRkZW4sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJJdGVtO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclByZWZlcmVuY2VzQ29udGV4dCBmcm9tICdAdGhlbWUvVXNlclByZWZlcmVuY2VzQ29udGV4dCc7XG5cbmZ1bmN0aW9uIHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJQcmVmZXJlbmNlc0NvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnXCJ1c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0XCIgaXMgdXNlZCBvdXRzaWRlIG9mIFwiTGF5b3V0XCIgY29tcG9uZW50LicsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0O1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcInRhYkl0ZW1cIjogXCJ0YWJJdGVtXzF1TUlcIixcblx0XCJ0YWJJdGVtQWN0aXZlXCI6IFwidGFiSXRlbUFjdGl2ZV8yRFNnXCIsXG5cdFwiYmxpbmtcIjogXCJibGlua19YQjhMXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgY2xvbmVFbGVtZW50LCBDaGlsZHJlbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCkge1xuICBjb25zdCB7dG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0fSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHtpbm5lckhlaWdodCwgaW5uZXJXaWR0aH0gPSB3aW5kb3c7XG4gIHJldHVybiB0b3AgPj0gMCAmJiByaWdodCA8PSBpbm5lcldpZHRoICYmIGJvdHRvbSA8PSBpbm5lckhlaWdodCAmJiBsZWZ0ID49IDA7XG59XG5cbmNvbnN0IGtleXMgPSB7XG4gIGxlZnQ6IDM3LFxuICByaWdodDogMzksXG59O1xuXG5mdW5jdGlvbiBUYWJzKHByb3BzKSB7XG4gIGNvbnN0IHtsYXp5LCBibG9jaywgZGVmYXVsdFZhbHVlLCB2YWx1ZXMsIGdyb3VwSWQsIGNsYXNzTmFtZX0gPSBwcm9wcztcbiAgY29uc3Qge3RhYkdyb3VwQ2hvaWNlcywgc2V0VGFiR3JvdXBDaG9pY2VzfSA9IHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQoKTtcbiAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcbiAgY29uc3QgdGFiUmVmcyA9IFtdO1xuXG4gIGlmIChncm91cElkICE9IG51bGwpIHtcbiAgICBjb25zdCByZWxldmFudFRhYkdyb3VwQ2hvaWNlID0gdGFiR3JvdXBDaG9pY2VzW2dyb3VwSWRdO1xuXG4gICAgaWYgKFxuICAgICAgcmVsZXZhbnRUYWJHcm91cENob2ljZSAhPSBudWxsICYmXG4gICAgICByZWxldmFudFRhYkdyb3VwQ2hvaWNlICE9PSBzZWxlY3RlZFZhbHVlICYmXG4gICAgICB2YWx1ZXMuc29tZSgodmFsdWUpID0+IHZhbHVlLnZhbHVlID09PSByZWxldmFudFRhYkdyb3VwQ2hvaWNlKVxuICAgICkge1xuICAgICAgc2V0U2VsZWN0ZWRWYWx1ZShyZWxldmFudFRhYkdyb3VwQ2hvaWNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWJJbmRleCA9IHRhYlJlZnMuaW5kZXhPZihzZWxlY3RlZFRhYik7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWJWYWx1ZSA9IHZhbHVlc1tzZWxlY3RlZFRhYkluZGV4XS52YWx1ZTtcbiAgICBzZXRTZWxlY3RlZFZhbHVlKHNlbGVjdGVkVGFiVmFsdWUpO1xuXG4gICAgaWYgKGdyb3VwSWQgIT0gbnVsbCkge1xuICAgICAgc2V0VGFiR3JvdXBDaG9pY2VzKGdyb3VwSWQsIHNlbGVjdGVkVGFiVmFsdWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0luVmlld3BvcnQoc2VsZWN0ZWRUYWIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWRUYWIuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJsb2NrOiAnY2VudGVyJyxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QuYWRkKHN0eWxlcy50YWJJdGVtQWN0aXZlKTtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAoKSA9PiBzZWxlY3RlZFRhYi5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy50YWJJdGVtQWN0aXZlKSxcbiAgICAgICAgICAyMDAwLFxuICAgICAgICApO1xuICAgICAgfSwgMTUwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgIGxldCBmb2N1c0VsZW1lbnQ7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2Uga2V5cy5yaWdodDoge1xuICAgICAgICBjb25zdCBuZXh0VGFiID0gdGFiUmVmcy5pbmRleE9mKGV2ZW50LnRhcmdldCkgKyAxO1xuICAgICAgICBmb2N1c0VsZW1lbnQgPSB0YWJSZWZzW25leHRUYWJdIHx8IHRhYlJlZnNbMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIGtleXMubGVmdDoge1xuICAgICAgICBjb25zdCBwcmV2VGFiID0gdGFiUmVmcy5pbmRleE9mKGV2ZW50LnRhcmdldCkgLSAxO1xuICAgICAgICBmb2N1c0VsZW1lbnQgPSB0YWJSZWZzW3ByZXZUYWJdIHx8IHRhYlJlZnNbdGFiUmVmcy5sZW5ndGggLSAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvY3VzRWxlbWVudD8uZm9jdXMoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXJcIj5cbiAgICAgIDx1bFxuICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgIGFyaWEtb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICd0YWJzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGFicy0tYmxvY2snOiBibG9jayxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX0+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh7dmFsdWUsIGxhYmVsfSkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICB0YWJJbmRleD17c2VsZWN0ZWRWYWx1ZSA9PT0gdmFsdWUgPyAwIDogLTF9XG4gICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtzZWxlY3RlZFZhbHVlID09PSB2YWx1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgndGFic19faXRlbScsIHN0eWxlcy50YWJJdGVtLCB7XG4gICAgICAgICAgICAgICd0YWJzX19pdGVtLS1hY3RpdmUnOiBzZWxlY3RlZFZhbHVlID09PSB2YWx1ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgIHJlZj17KHRhYkNvbnRyb2wpID0+IHRhYlJlZnMucHVzaCh0YWJDb250cm9sKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5ZG93bn1cbiAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZVRhYkNoYW5nZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhYkNoYW5nZX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICB7bGF6eSA/IChcbiAgICAgICAgY2xvbmVFbGVtZW50KFxuICAgICAgICAgIGNoaWxkcmVuLmZpbHRlcihcbiAgICAgICAgICAgICh0YWJJdGVtKSA9PiB0YWJJdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgIClbMF0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWFyZ2luLXZlcnQtLW1kJyxcbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi12ZXJ0LS1tZFwiPlxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHRhYkl0ZW0sIGkpID0+XG4gICAgICAgICAgICBjbG9uZUVsZW1lbnQodGFiSXRlbSwge1xuICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgIGhpZGRlbjogdGFiSXRlbS5wcm9wcy52YWx1ZSAhPT0gc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuY29uc3QgVXNlclByZWZlcmVuY2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcmVmZXJlbmNlc0NvbnRleHQ7XG4iLCJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbiAgXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7XG5cdHRpdGxlOiAnR2V0dGluZyBTdGFydGVkJyxcblx0c2x1ZzogJy8nXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiZ2V0dGluZy1zdGFydGVkXCIsXG4gIFwiaWRcIjogXCJnZXR0aW5nLXN0YXJ0ZWRcIixcbiAgXCJpc0RvY3NIb21lUGFnZVwiOiBmYWxzZSxcbiAgXCJ0aXRsZVwiOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUmVzdGFydCBVSSBpcyBhIHNldCBvZiBmdWxsIGZlYXR1cmVkLCBleHRlbnNpYmxlLCBhbmQgYWNjZXNzaWJsZSBVSSBjb21wb25lbnRzLCBkZXNpZ25lZCB0byBpbnRlZ3JhdGUgaW50byBhbnkgc3R5bGluZ1wiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvZ2V0dGluZy1zdGFydGVkLm1kXCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcIi5cIixcbiAgXCJzbHVnXCI6IFwiL1wiLFxuICBcInBlcm1hbGlua1wiOiBcIi91aS9cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgXCJzbHVnXCI6IFwiL1wiXG4gIH0sXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJuZXh0XCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQnV0dG9uXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvdWkvQnV0dG9uXCJcbiAgfVxufTtcbiAgLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBUYWJzIGZyb20gXCJAdGhlbWUvVGFic1wiO1xuaW1wb3J0IFRhYkl0ZW0gZnJvbSBcIkB0aGVtZS9UYWJJdGVtXCI7XG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdJbnN0YWxsYXRpb24nLFxuICBpZDogJ2luc3RhbGxhdGlvbicsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ1VzYWdlJyxcbiAgaWQ6ICd1c2FnZScsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ1N0eWxpbmcnLFxuICBpZDogJ3N0eWxpbmcnLFxuICBjaGlsZHJlbjogW11cbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8cD57YFJlc3RhcnQgVUkgaXMgYSBzZXQgb2YgZnVsbCBmZWF0dXJlZCwgZXh0ZW5zaWJsZSwgYW5kIGFjY2Vzc2libGUgVUkgY29tcG9uZW50cywgZGVzaWduZWQgdG8gaW50ZWdyYXRlIGludG8gYW55IHN0eWxpbmdcbmZyYW1ld29yayBvciBzeXN0ZW0uIFJlc3RhcnQgY29tcG9uZW50cywgYXJlIFwiaGVhZGxlc3NcIiwgbWVhbmluZyB0aGV5IGRvbid0IHByb3ZpZGUgYW55IHN0eWxlcy4gQ29tcG9uZW50cyBlbmNhcHN1bGF0ZVxudGhlIGNvbXBsaWNhdGVkIGxvZ2ljIGFuZCBhbmQgc3RhdGUgd2l0aG91dCBiZWluZyBwcmVzY3JpcHRpdmUgYWJvdXQgdGhlaXIgbG9vayBhbmQgZmVlbC5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJpbnN0YWxsYXRpb25cIlxuICAgIH19PntgSW5zdGFsbGF0aW9uYH08L2gyPlxuICAgIDxUYWJzIGRlZmF1bHRWYWx1ZT1cIm5wbVwiIHZhbHVlcz17W3tcbiAgICAgIGxhYmVsOiAnbnBtJyxcbiAgICAgIHZhbHVlOiAnbnBtJ1xuICAgIH0sIHtcbiAgICAgIGxhYmVsOiAnWWFybicsXG4gICAgICB2YWx1ZTogJ3lhcm4nXG4gICAgfV19IG1keFR5cGU9XCJUYWJzXCI+XG4gICAgICA8VGFiSXRlbSB2YWx1ZT1cIm5wbVwiIG1keFR5cGU9XCJUYWJJdGVtXCI+XG4gICAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgICAgIH19PntgbnBtIGluc3RhbGwgQHJlc3RhcnQvdWlcbmB9PC9jb2RlPjwvcHJlPlxuICAgICAgPC9UYWJJdGVtPlxuICAgICAgPFRhYkl0ZW0gdmFsdWU9XCJ5YXJuXCIgbWR4VHlwZT1cIlRhYkl0ZW1cIj5cbiAgICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtYmFzaFwiXG4gICAgICAgICAgfX0+e2B5YXJuIGFkZCBAcmVzdGFydC91aVxuYH08L2NvZGU+PC9wcmU+XG4gICAgICA8L1RhYkl0ZW0+XG4gICAgPC9UYWJzPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInVzYWdlXCJcbiAgICB9fT57YFVzYWdlYH08L2gyPlxuICAgIDxwPntgQ29tcG9uZW50cyBjYW4gYmUgaW1wb3J0ZWQgZnJvbSB0aGUgbWFpbiBwYWNrYWdlIG9yIGRpcmVjdGx5IGxpa2U6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCBEcm9wZG93biBmcm9tIFwiQHJlc3RhcnQvdWkvRHJvcGRvd25cIjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInN0eWxpbmdcIlxuICAgIH19PntgU3R5bGluZ2B9PC9oMj5cbiAgICA8cD57YFJlc3RhcnQgVUkgaXMgYSBcImhlYWRsZXNzXCIgZnJhbWV3b3JrLCBtZWFuaW5nIGVhY2ggY29tcG9uZW50IGVuY2Fwc3VsYXRlcyBsb2dpYyBhbmQgbWFya3VwIGJ1dCBub3Qgc3R5bGluZy5cblJlc3RhcnQgVUkgaXMgaW50ZW5kZWQgYXMgYSBiYXNpcyBmb3IgYnVpbGRpbmcgZGVzaWduIHN5c3RlbXMgdXNpbmcgd2hpY2ggc3R5bGluZyB0ZWNobm9sb2d5IHlvdSBsaWtlLlxuWW91IHNob3VsZCBwcm92aWRlIHlvdXIgb3duIHN0eWxlcywgYW5kIHRoZSBkb2N1bWVudGF0aW9uIHByb3ZpZGVzIHNvbWUgc2ltcGxlIGV4YW1wbGVzXG5mb3IgaG93IHRvIGRvIHRoYXQuIEZvciBtb3JlIGNvbXBsZXggaW50ZWdyYXRpb25zLCBjaGVjayBvdXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwXCJcbiAgICAgIH19PntgUmVhY3QgQm9vdHN0cmFwYH08L2E+e2AuYH08L3A+XG4gICAgPHA+e2BUaGVyZSBhcmUgYSBmZXcgcGxhY2VzIHdoZXJlIGlubGluZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdHlsZWB9PC9pbmxpbmVDb2RlPntgcyBhcmUgYXBwbGllZCwgaG93ZXZlci4gVGhleSBhcmUgZnVuY3Rpb25hbGx5XG5yZXF1aXJlZCBhbmQgdmVyeSBtaW5pbWFsLiBTcGVjaWZpY2FsbHkgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUG9wcGVySnNgfTwvaW5saW5lQ29kZT57YCBpbmplY3RzIGl0J3Mgb3duIHN0eWxlcyBpbiBvcmRlclxudG8gcG9zaXRpb24gb3ZlcmxheXMgYW5kIGRyb3Bkb3ducywgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YE1vZGFsYH08L2lubGluZUNvZGU+e2AgYXBwbGllcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvdmVyZmxvdzogaGlkZGVuYH08L2lubGluZUNvZGU+e2AgdG8gdGhlXG5kb2N1bWVudCBib2R5LiBUaGVzZSBjYW4gdGVjaG5pY2FsbHkgYmUgb3ZlcnJpZGRlbiBidXQgeW91IHByb2JhYmx5IHdvbid0IG5lZWQgdG8uYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiAgIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUxBO0FBVUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBdUJBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBNERBO0FBQ0E7QUFlQTtBQU1BO0FBVUE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==