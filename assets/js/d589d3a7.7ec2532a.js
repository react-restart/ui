exports.ids = [10];
exports.modules = {

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
const frontMatter={title:'Getting Started',slug:'/'};const metadata={"unversionedId":"getting-started","id":"getting-started","isDocsHomePage":false,"title":"Getting Started","description":"Installation","source":"@site/docs/getting-started.md","slug":"/","permalink":"/ui/","version":"current","sidebar":"docs","next":{"title":"Animation and Transitions","permalink":"/ui/transitions"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Installation',id:'installation',children:[]},{value:'Usage',id:'usage',children:[]},{value:'Styling',id:'styling',children:[]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])(MDXLayout,Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"installation"},`Installation`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-sh"},`npm install react-overlays
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Or with yarn`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-sh"},`yarn add react-overlays
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"usage"},`Usage`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`Components can be imported from the main package or directly like:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-js"},`import Dropdown from "react-overlays/Dropdown";
`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("h2",{"id":"styling"},`Styling`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`React Overlays is a toolkit for creating functional overlays, tooltips, modals, and dropdowns.
It is not a UI framework but is meant to be incorporated `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("em",{parentName:"p"},`into`),` frameworks. To make those integrations
possible, React Overlays is style-agnostic and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("strong",{parentName:"p"},`does not`),` come with any CSS.
You should provide your own styles, and the documentation provides some simple examples
for how to do that. For more complex integrations, check out `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("a",{parentName:"p","href":"https://github.com/react-bootstrap/react-bootstrap"},`React Bootstrap`),`.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("p",null,`There are a few places where inline `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`style`),`s are applied, however. They are functionally
required and very minimal. Specifically `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`PopperJs`),` injects it's own styles in order
to position overlays and dropdowns, and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Modal`),` applies `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`overflow: hidden`),` to the
document body. These can technically be overridden but it's very unlikely to be
required.`));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2dldHRpbmctc3RhcnRlZC5tZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyJdLCJuYW1lcyI6WyJmcm9udE1hdHRlciIsInRpdGxlIiwic2x1ZyIsIm1ldGFkYXRhIiwidG9jIiwidmFsdWUiLCJpZCIsImNoaWxkcmVuIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUyxLQUFNQSxZQUFXLENBQUcsQ0FDNUJDLEtBQUssQ0FBRSxpQkFEcUIsQ0FFNUJDLElBQUksQ0FBRSxHQUZzQixDQUFwQixDQUlGLEtBQU1DLFNBQVEsQ0FBRyxDQUN0QixnQkFBaUIsaUJBREssQ0FFdEIsS0FBTSxpQkFGZ0IsQ0FHdEIsaUJBQWtCLEtBSEksQ0FJdEIsUUFBUyxpQkFKYSxDQUt0QixjQUFlLGNBTE8sQ0FNdEIsU0FBVSwrQkFOWSxDQU90QixPQUFRLEdBUGMsQ0FRdEIsWUFBYSxNQVJTLENBU3RCLFVBQVcsU0FUVyxDQVV0QixVQUFXLE1BVlcsQ0FXdEIsT0FBUSxDQUNOLFFBQVMsMkJBREgsQ0FFTixZQUFhLGlCQUZQLENBWGMsQ0FBakIsQ0FnQkwseUIsQ0FDRixjQUVPLEtBQU1DLElBQUcsQ0FBRyxDQUFDLENBQ2xCQyxLQUFLLENBQUUsY0FEVyxDQUVsQkMsRUFBRSxDQUFFLGNBRmMsQ0FHbEJDLFFBQVEsQ0FBRSxFQUhRLENBQUQsQ0FJaEIsQ0FDREYsS0FBSyxDQUFFLE9BRE4sQ0FFREMsRUFBRSxDQUFFLE9BRkgsQ0FHREMsUUFBUSxDQUFFLEVBSFQsQ0FKZ0IsQ0FRaEIsQ0FDREYsS0FBSyxDQUFFLFNBRE4sQ0FFREMsRUFBRSxDQUFFLFNBRkgsQ0FHREMsUUFBUSxDQUFFLEVBSFQsQ0FSZ0IsQ0FBWixDQWNQLEtBQU1DLFlBQVcsQ0FBRyxDQUNsQkosR0FEa0IsQ0FBcEIsQ0FHQSxLQUFNSyxVQUFTLENBQUcsU0FBbEIsQ0FDZSxRQUFTQyxXQUFULENBQW9CLENBQ2pDQyxVQURpQyxDQUVqQyxHQUFHQyxLQUY4QixDQUFwQixDQUdaLENBQ0QsTUFBTyxtRUFBQyxTQUFELHFJQUFlSixXQUFmLENBQWdDSSxLQUFoQyxFQUF1QyxVQUFVLENBQUVELFVBQW5ELENBQStELE9BQU8sQ0FBQyxXQUF2RSxHQUVMLHdFQUNFLEtBQU0sY0FEUixFQUVLLGNBRkwsQ0FGSyxDQUtMLDZFQUFLLDBFQUFNLFVBQVUsQ0FBQyxLQUFqQixDQUNELFlBQWEsYUFEWixFQUVFO0FBQ1gsQ0FIUyxDQUFMLENBTEssQ0FTTCwyRUFBSyxjQUFMLENBVEssQ0FVTCw2RUFBSywwRUFBTSxVQUFVLENBQUMsS0FBakIsQ0FDRCxZQUFhLGFBRFosRUFFRTtBQUNYLENBSFMsQ0FBTCxDQVZLLENBY0wsd0VBQ0UsS0FBTSxPQURSLEVBRUssT0FGTCxDQWRLLENBaUJMLDJFQUFLLG9FQUFMLENBakJLLENBa0JMLDZFQUFLLDBFQUFNLFVBQVUsQ0FBQyxLQUFqQixDQUNELFlBQWEsYUFEWixFQUVFO0FBQ1gsQ0FIUyxDQUFMLENBbEJLLENBc0JMLHdFQUNFLEtBQU0sU0FEUixFQUVLLFNBRkwsQ0F0QkssQ0F5QkwsMkVBQUs7QUFDVCwwREFESSxDQUN1RCx3RUFBSSxVQUFVLENBQUMsR0FBZixFQUFxQixNQUFyQixDQUR2RCxDQUN5RjtBQUM3RixnREFGSSxDQUU2Qyw0RUFBUSxVQUFVLENBQUMsR0FBbkIsRUFBeUIsVUFBekIsQ0FGN0MsQ0FFMkY7QUFDL0Y7QUFDQSw4REFKSSxDQUkyRCx1RUFBRyxVQUFVLENBQUMsR0FBZCxDQUN2RCxPQUFRLG9EQUQrQyxFQUVwRCxpQkFGb0QsQ0FKM0QsQ0FNOEIsR0FOOUIsQ0F6QkssQ0FnQ0wsMkVBQUssc0NBQUwsQ0FBMkMsZ0ZBQVksVUFBVSxDQUFDLEdBQXZCLEVBQTZCLE9BQTdCLENBQTNDLENBQThGO0FBQ2xHLHlDQURJLENBQ3NDLGdGQUFZLFVBQVUsQ0FBQyxHQUF2QixFQUE2QixVQUE3QixDQUR0QyxDQUM0RjtBQUNoRyx5Q0FGSSxDQUVzQyxnRkFBWSxVQUFVLENBQUMsR0FBdkIsRUFBNkIsT0FBN0IsQ0FGdEMsQ0FFeUYsV0FGekYsQ0FFb0csZ0ZBQVksVUFBVSxDQUFDLEdBQXZCLEVBQTZCLGtCQUE3QixDQUZwRyxDQUVrSztBQUN0SztBQUNBLFVBSkksQ0FoQ0ssQ0FBUCxDQXNDRCxDQUVELENBQ0FELFVBQVUsQ0FBQ0csY0FBWCxDQUE0QixJQUE1QixDOzs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qiw0Q0FBSyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLLHFDQUFxQztBQUNsRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7O0FBRUE7QUFDQSw2R0FBNkc7QUFDN0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSyxlQUFlLDRDQUFLLGFBQWE7QUFDOUQ7QUFDQTtBQUNBLG9DQUFvQyw0Q0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBLEtBQUssVUFBVTtBQUNmO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQiw0Q0FBSztBQUMzQjtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7O0FBRUEsV0FBVyw0Q0FBSztBQUNoQjs7QUFFQSxTQUFTLDRDQUFLO0FBQ2Q7O0FBRThGIiwiZmlsZSI6ImFzc2V0cy9qcy9kNTg5ZDNhNy43ZWMyNTMyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0JztcblxuICBleHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7XG5cdHRpdGxlOiAnR2V0dGluZyBTdGFydGVkJyxcblx0c2x1ZzogJy8nXG59O1xuZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICBcInVudmVyc2lvbmVkSWRcIjogXCJnZXR0aW5nLXN0YXJ0ZWRcIixcbiAgXCJpZFwiOiBcImdldHRpbmctc3RhcnRlZFwiLFxuICBcImlzRG9jc0hvbWVQYWdlXCI6IGZhbHNlLFxuICBcInRpdGxlXCI6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsYXRpb25cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2dldHRpbmctc3RhcnRlZC5tZFwiLFxuICBcInNsdWdcIjogXCIvXCIsXG4gIFwicGVybWFsaW5rXCI6IFwiL3VpL1wiLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJuZXh0XCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQW5pbWF0aW9uIGFuZCBUcmFuc2l0aW9uc1wiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3RyYW5zaXRpb25zXCJcbiAgfVxufTtcbiAgLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cblxuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnSW5zdGFsbGF0aW9uJyxcbiAgaWQ6ICdpbnN0YWxsYXRpb24nLFxuICBjaGlsZHJlbjogW11cbn0sIHtcbiAgdmFsdWU6ICdVc2FnZScsXG4gIGlkOiAndXNhZ2UnLFxuICBjaGlsZHJlbjogW11cbn0sIHtcbiAgdmFsdWU6ICdTdHlsaW5nJyxcbiAgaWQ6ICdzdHlsaW5nJyxcbiAgY2hpbGRyZW46IFtdXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImluc3RhbGxhdGlvblwiXG4gICAgfX0+e2BJbnN0YWxsYXRpb25gfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YG5wbSBpbnN0YWxsIHJlYWN0LW92ZXJsYXlzXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE9yIHdpdGggeWFybmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2B5YXJuIGFkZCByZWFjdC1vdmVybGF5c1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNhZ2VcIlxuICAgIH19PntgVXNhZ2VgfTwvaDI+XG4gICAgPHA+e2BDb21wb25lbnRzIGNhbiBiZSBpbXBvcnRlZCBmcm9tIHRoZSBtYWluIHBhY2thZ2Ugb3IgZGlyZWN0bHkgbGlrZTpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IERyb3Bkb3duIGZyb20gXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93blwiO1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic3R5bGluZ1wiXG4gICAgfX0+e2BTdHlsaW5nYH08L2gyPlxuICAgIDxwPntgUmVhY3QgT3ZlcmxheXMgaXMgYSB0b29sa2l0IGZvciBjcmVhdGluZyBmdW5jdGlvbmFsIG92ZXJsYXlzLCB0b29sdGlwcywgbW9kYWxzLCBhbmQgZHJvcGRvd25zLlxuSXQgaXMgbm90IGEgVUkgZnJhbWV3b3JrIGJ1dCBpcyBtZWFudCB0byBiZSBpbmNvcnBvcmF0ZWQgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YGludG9gfTwvZW0+e2AgZnJhbWV3b3Jrcy4gVG8gbWFrZSB0aG9zZSBpbnRlZ3JhdGlvbnNcbnBvc3NpYmxlLCBSZWFjdCBPdmVybGF5cyBpcyBzdHlsZS1hZ25vc3RpYyBhbmQgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2Bkb2VzIG5vdGB9PC9zdHJvbmc+e2AgY29tZSB3aXRoIGFueSBDU1MuXG5Zb3Ugc2hvdWxkIHByb3ZpZGUgeW91ciBvd24gc3R5bGVzLCBhbmQgdGhlIGRvY3VtZW50YXRpb24gcHJvdmlkZXMgc29tZSBzaW1wbGUgZXhhbXBsZXNcbmZvciBob3cgdG8gZG8gdGhhdC4gRm9yIG1vcmUgY29tcGxleCBpbnRlZ3JhdGlvbnMsIGNoZWNrIG91dCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXBcIlxuICAgICAgfX0+e2BSZWFjdCBCb290c3RyYXBgfTwvYT57YC5gfTwvcD5cbiAgICA8cD57YFRoZXJlIGFyZSBhIGZldyBwbGFjZXMgd2hlcmUgaW5saW5lIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0eWxlYH08L2lubGluZUNvZGU+e2BzIGFyZSBhcHBsaWVkLCBob3dldmVyLiBUaGV5IGFyZSBmdW5jdGlvbmFsbHlcbnJlcXVpcmVkIGFuZCB2ZXJ5IG1pbmltYWwuIFNwZWNpZmljYWxseSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQb3BwZXJKc2B9PC9pbmxpbmVDb2RlPntgIGluamVjdHMgaXQncyBvd24gc3R5bGVzIGluIG9yZGVyXG50byBwb3NpdGlvbiBvdmVybGF5cyBhbmQgZHJvcGRvd25zLCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTW9kYWxgfTwvaW5saW5lQ29kZT57YCBhcHBsaWVzIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG92ZXJmbG93OiBoaWRkZW5gfTwvaW5saW5lQ29kZT57YCB0byB0aGVcbmRvY3VtZW50IGJvZHkuIFRoZXNlIGNhbiB0ZWNobmljYWxseSBiZSBvdmVycmlkZGVuIGJ1dCBpdCdzIHZlcnkgdW5saWtlbHkgdG8gYmVcbnJlcXVpcmVkLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=