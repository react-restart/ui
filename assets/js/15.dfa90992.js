exports.ids = [15];
exports.modules = {

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useThemeConfig_1 = __webpack_require__(324);

Object.defineProperty(exports, "useThemeConfig", {
  enumerable: true,
  get: function () {
    return useThemeConfig_1.useThemeConfig;
  }
});

var useAlternatePageUtils_1 = __webpack_require__(334);

Object.defineProperty(exports, "useAlternatePageUtils", {
  enumerable: true,
  get: function () {
    return useAlternatePageUtils_1.useAlternatePageUtils;
  }
});

var searchUtils_1 = __webpack_require__(335);

Object.defineProperty(exports, "docVersionSearchTag", {
  enumerable: true,
  get: function () {
    return searchUtils_1.docVersionSearchTag;
  }
});
Object.defineProperty(exports, "DEFAULT_SEARCH_TAG", {
  enumerable: true,
  get: function () {
    return searchUtils_1.DEFAULT_SEARCH_TAG;
  }
});

var docsUtils_1 = __webpack_require__(325);

Object.defineProperty(exports, "isDocsPluginEnabled", {
  enumerable: true,
  get: function () {
    return docsUtils_1.isDocsPluginEnabled;
  }
});

var pathUtils_1 = __webpack_require__(339);

Object.defineProperty(exports, "isSamePath", {
  enumerable: true,
  get: function () {
    return pathUtils_1.isSamePath;
  }
});

var generalUtils_1 = __webpack_require__(340);

Object.defineProperty(exports, "useTitleFormatter", {
  enumerable: true,
  get: function () {
    return generalUtils_1.useTitleFormatter;
  }
});

var usePluralForm_1 = __webpack_require__(341);

Object.defineProperty(exports, "usePluralForm", {
  enumerable: true,
  get: function () {
    return usePluralForm_1.usePluralForm;
  }
});

var useDocsPreferredVersion_1 = __webpack_require__(342);

Object.defineProperty(exports, "useDocsPreferredVersion", {
  enumerable: true,
  get: function () {
    return useDocsPreferredVersion_1.useDocsPreferredVersion;
  }
});
Object.defineProperty(exports, "useDocsPreferredVersionByPluginId", {
  enumerable: true,
  get: function () {
    return useDocsPreferredVersion_1.useDocsPreferredVersionByPluginId;
  }
});

var DocsPreferredVersionProvider_1 = __webpack_require__(326);

Object.defineProperty(exports, "DocsPreferredVersionContextProvider", {
  enumerable: true,
  get: function () {
    return DocsPreferredVersionProvider_1.DocsPreferredVersionContextProvider;
  }
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// See https://github.com/facebook/docusaurus/issues/3360
// TODO find a better solution, this shouldn't be needed
// TODO this is not ideal and produce a warning!
// see https://github.com/webpack/webpack/issues/7713#issuecomment-467888437
// note: warning can be filtered: https://github.com/facebook/docusaurus/pull/3382#issuecomment-684966924
try {
  module.exports = __webpack_require__(336);
} catch (e) {
  // In case the docs plugin is not available, might be useful to stub some methods here
  // https://github.com/facebook/docusaurus/issues/3947
  const Empty = {};
  module.exports = {
    useAllDocsData: () => Empty,
    useActivePluginAndVersion: () => undefined
  };
}
/*
throw new Error(
  "The docs plugin is not used, so you can't require the useDocs hooks. ",
);
 */

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBaseUrlUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseUrl; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(323);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function addBaseUrl(siteUrl, baseUrl, url, {
  forcePrependBaseUrl = false,
  absolute = false
} = {}) {
  if (!url) {
    return url;
  } // it never makes sense to add a base url to a local anchor url


  if (url.startsWith('#')) {
    return url;
  } // it never makes sense to add a base url to an url with a protocol


  if (Object(_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__[/* hasProtocol */ "b"])(url)) {
    return url;
  }

  if (forcePrependBaseUrl) {
    return baseUrl + url;
  } // We should avoid adding the baseurl twice if it's already there


  const shouldAddBaseUrl = !url.startsWith(baseUrl);
  const basePath = shouldAddBaseUrl ? baseUrl + url.replace(/^\//, '') : url;
  return absolute ? siteUrl + basePath : basePath;
}

function useBaseUrlUtils() {
  const {
    siteConfig: {
      baseUrl = '/',
      url: siteUrl
    } = {}
  } = Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return {
    withBaseUrl: (url, options) => {
      return addBaseUrl(siteUrl, baseUrl, url, options);
    }
  };
}
function useBaseUrl(url, options = {}) {
  const {
    withBaseUrl
  } = useBaseUrlUtils();
  return withBaseUrl(url, options);
}

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ translate; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Translate; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
Minimal implementation of a React interpolate component.
We don't ship a markdown parser nor a feature-complete i18n library on purpose.
More details here: https://github.com/facebook/docusaurus/pull/4295
*/

const ValueRegexp = /{\w+}/g;
const ValueFoundMarker = '{}'; // does not care much

function interpolate(text, values) {
  const elements = [];
  const processedText = text.replace(ValueRegexp, match => {
    // remove {{ and }} around the placeholder
    const key = match.substr(1, match.length - 2);
    const value = values === null || values === void 0 ? void 0 : values[key];

    if (typeof value !== 'undefined') {
      const element = /*#__PURE__*/react_default.a.isValidElement(value) ? value : // For non-React elements: basic primitive->string conversion
      String(value);
      elements.push(element);
      return ValueFoundMarker;
    } else {
      return match; // no match? add warning?
    }
  }); // No interpolation to be done: just return the text

  if (elements.length === 0) {
    return text;
  } // Basic string interpolation: returns interpolated string
  else if (elements.every(el => typeof el === 'string')) {
      return processedText.split(ValueFoundMarker).reduce((str, value, index) => {
        var _a;

        return str.concat(value).concat((_a = elements[index]) !== null && _a !== void 0 ? _a : '');
      }, '');
    } // JSX interpolation: returns ReactNode
    else {
        return processedText.split(ValueFoundMarker).reduce((array, value, index) => {
          return [...array, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, {
            key: index
          }, value, elements[index])];
        }, []);
      }
}
function Interpolate({
  children,
  values
}) {
  return interpolate(children, values);
}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // Can't read it from context, due to exposing imperative API



function getLocalizedMessage({
  id,
  message
}) {
  var _a;

  return (_a = codeTranslations[id !== null && id !== void 0 ? id : message]) !== null && _a !== void 0 ? _a : message;
} // Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)


function translate({
  message,
  id
}, values) {
  var _a;

  const localizedMessage = (_a = getLocalizedMessage({
    message,
    id
  })) !== null && _a !== void 0 ? _a : message;
  return interpolate(localizedMessage, values);
} // Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near the text?

function Translate({
  children,
  id,
  values
}) {
  var _a;

  const localizedMessage = (_a = getLocalizedMessage({
    message: children,
    id
  })) !== null && _a !== void 0 ? _a : children;
  return /*#__PURE__*/react_default.a.createElement(Interpolate, {
    values: values
  }, localizedMessage);
}

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _LinksCollector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(316);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






 // TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix

const shouldAddBaseUrlAutomatically = to => to.startsWith('/');

function Link(_a) {
  var _b;

  var {
    isNavLink,
    to,
    href,
    activeClassName,
    isActive,
    'data-noBrokenLinkCheck': noBrokenLinkCheck,
    autoAddBaseUrl = true
  } = _a,
      props = __rest(_a, ["isNavLink", "to", "href", "activeClassName", "isActive", 'data-noBrokenLinkCheck', "autoAddBaseUrl"]);

  const {
    withBaseUrl
  } = Object(_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* useBaseUrlUtils */ "b"])();
  const linksCollector = Object(_LinksCollector__WEBPACK_IMPORTED_MODULE_4__[/* useLinksCollector */ "c"])(); // IMPORTANT: using to or href should not change anything
  // For example, MDX links will ALWAYS give us the href props
  // Using one prop or the other should not be used to distinguish
  // internal links (/docs/myDoc) from external links (https://github.com)

  const targetLinkUnprefixed = to || href;

  function maybeAddBaseUrl(str) {
    return autoAddBaseUrl && shouldAddBaseUrlAutomatically(str) ? withBaseUrl(str) : str;
  }

  const isInternal = Object(_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(targetLinkUnprefixed); // pathname:// is a special "protocol" we use to tell Docusaurus link
  // that a link is not "internal" and that we shouldn't use history.push()
  // this is not ideal but a good enough escape hatch for now
  // see https://github.com/facebook/docusaurus/issues/3309
  // note: we want baseUrl to be appended (see issue for details)
  // TODO read routes and automatically detect internal/external links?

  const targetLinkWithoutPathnameProtocol = targetLinkUnprefixed === null || targetLinkUnprefixed === void 0 ? void 0 : targetLinkUnprefixed.replace('pathname://', ''); // TODO we should use ReactRouter basename feature instead!
  // Automatically apply base url in links that start with /

  const targetLink = typeof targetLinkWithoutPathnameProtocol !== 'undefined' ? maybeAddBaseUrl(targetLinkWithoutPathnameProtocol) : undefined;
  const preloaded = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const LinkComponent = isNavLink ? react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ "e"] : react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "c"];
  const IOSupported = _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].canUseIntersectionObserver;
  let io;

  const handleIntersection = (el, cb) => {
    io = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (el === entry.target) {
          // If element is in viewport, stop listening/observing and run callback.
          // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(el);
            io.disconnect();
            cb();
          }
        }
      });
    }); // Add element to the observer.

    io.observe(el);
  };

  const handleRef = ref => {
    if (IOSupported && ref && isInternal) {
      // If IO supported and element reference found, setup Observer functionality.
      handleIntersection(ref, () => {
        window.docusaurus.prefetch(targetLink);
      });
    }
  };

  const onMouseEnter = () => {
    if (!preloaded.current) {
      window.docusaurus.preload(targetLink);
      preloaded.current = true;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // If IO is not supported. We prefetch by default (only once).
    if (!IOSupported && isInternal) {
      window.docusaurus.prefetch(targetLink);
    } // When unmounting, stop intersection observer from watching.


    return () => {
      if (IOSupported && io) {
        io.disconnect();
      }
    };
  }, [targetLink, IOSupported, isInternal]);
  const isAnchorLink = (_b = targetLink === null || targetLink === void 0 ? void 0 : targetLink.startsWith('#')) !== null && _b !== void 0 ? _b : false;
  const isRegularHtmlLink = !targetLink || !isInternal || isAnchorLink;

  if (targetLink && isInternal && !isAnchorLink && !noBrokenLinkCheck) {
    linksCollector.collectLink(targetLink);
  }

  return isRegularHtmlLink ?
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", Object.assign({
    href: targetLink
  }, targetLinkUnprefixed && !isInternal && {
    target: '_blank',
    rel: 'noopener noreferrer'
  }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkComponent, Object.assign({}, props, {
    onMouseEnter: onMouseEnter,
    innerRef: handleRef,
    to: targetLink || ''
  }, isNavLink && {
    isActive,
    activeClassName
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(316);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function NavLink(_ref) {
  let {
    activeBasePath,
    activeBaseRegex,
    to,
    href,
    label,
    activeClassName = 'navbar__link--active',
    prependBaseUrlToHref
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["activeBasePath", "activeBaseRegex", "to", "href", "label", "activeClassName", "prependBaseUrlToHref"]);

  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(to);
  const activeBaseUrl = Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(activeBasePath);
  const normalizedHref = Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(href, {
    forcePrependBaseUrl: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({}, href ? {
    href: prependBaseUrlToHref ? normalizedHref : href
  } : Object.assign({
    isNavLink: true,
    activeClassName,
    to: toUrl
  }, activeBasePath || activeBaseRegex ? {
    isActive: (_match, location) => activeBaseRegex ? new RegExp(activeBaseRegex).test(location.pathname) : location.pathname.startsWith(activeBaseUrl)
  } : null), props), label);
}

function NavItemDesktop(_ref2) {
  var _props$children;

  let {
    items,
    position,
    className
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, ["items", "position", "className"]);

  const dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const dropdownMenuRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [showDropdown, setShowDropdown] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleClickOutside = event => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }

      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  const navLinkClassNames = (extraClassName, isDropdownItem = false) => Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'navbar__item navbar__link': !isDropdownItem,
    dropdown__link: isDropdownItem
  }, extraClassName);

  if (!items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      className: navLinkClassNames(className)
    }, props));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: dropdownRef,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('navbar__item', 'dropdown', 'dropdown--hoverable', {
      'dropdown--left': position === 'left',
      'dropdown--right': position === 'right',
      'dropdown--show': showDropdown
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
    className: navLinkClassNames(className)
  }, props, {
    onClick: props.to ? undefined : e => e.preventDefault(),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setShowDropdown(!showDropdown);
      }
    }
  }), (_props$children = props.children) != null ? _props$children : props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    ref: dropdownMenuRef,
    className: "dropdown__menu"
  }, items.map((_ref3, i) => {
    let {
      className: childItemClassName
    } = _ref3,
        childItemProps = _objectWithoutPropertiesLoose(_ref3, ["className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      onKeyDown: e => {
        if (i === items.length - 1 && e.key === 'Tab') {
          e.preventDefault();
          setShowDropdown(false);
          const nextNavbarItem = dropdownRef.current.nextElementSibling;

          if (nextNavbarItem) {
            nextNavbarItem.focus();
          }
        }
      },
      activeClassName: "dropdown__link--active",
      className: navLinkClassNames(childItemClassName, true)
    }, childItemProps)));
  })));
}

function NavItemMobile(_ref4) {
  var _menuListRef$current, _menuListRef$current2, _props$children2;

  let {
    items,
    className
  } = _ref4,
      props = _objectWithoutPropertiesLoose(_ref4, ["items", "className", "position"]);

  const menuListRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    pathname
  } = Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  const [collapsed, setCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    var _items$some;

    return (_items$some = !(items != null && items.some(item => Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__["isSamePath"])(item.to, pathname)))) != null ? _items$some : true;
  });

  const navLinkClassNames = (extraClassName, isSubList = false) => Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('menu__link', {
    'menu__link--sublist': isSubList
  }, extraClassName);

  if (!items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu__list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      className: navLinkClassNames(className)
    }, props)));
  }

  const menuListHeight = (_menuListRef$current = menuListRef.current) != null && _menuListRef$current.scrollHeight ? `${(_menuListRef$current2 = menuListRef.current) == null ? void 0 : _menuListRef$current2.scrollHeight}px` : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('menu__list-item', {
      'menu__list-item--collapsed': collapsed
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
    role: "button",
    className: navLinkClassNames(className, true)
  }, props, {
    onClick: e => {
      e.preventDefault();
      setCollapsed(state => !state);
    }
  }), (_props$children2 = props.children) != null ? _props$children2 : props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu__list",
    ref: menuListRef,
    style: {
      height: !collapsed ? menuListHeight : undefined
    }
  }, items.map((_ref5, i) => {
    let {
      className: childItemClassName
    } = _ref5,
        childItemProps = _objectWithoutPropertiesLoose(_ref5, ["className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu__list-item",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      activeClassName: "menu__link--active",
      className: navLinkClassNames(childItemClassName)
    }, childItemProps, {
      onClick: props.onClick
    })));
  })));
}

function DefaultNavbarItem(_ref6) {
  let {
    mobile = false
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, ["mobile"]);

  const Comp = mobile ? NavItemMobile : NavItemDesktop;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props);
}

/* harmony default export */ __webpack_exports__["a"] = (DefaultNavbarItem);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isInternalUrl; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function hasProtocol(url) {
  return /^(\w*:|\/\/)/.test(url) === true;
}
function isInternalUrl(url) {
  return typeof url !== 'undefined' && !hasProtocol(url);
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThemeConfig = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useDocusaurusContext_1 = __importDefault(__webpack_require__(44));

function useThemeConfig() {
  return useDocusaurusContext_1.default().siteConfig.themeConfig;
}

exports.useThemeConfig = useThemeConfig;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDocsPluginEnabled = void 0;

const useDocs_1 = __webpack_require__(304); // TODO not ideal, see also "useDocs"


exports.isDocsPluginEnabled = !!useDocs_1.useAllDocsData;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDocsPreferredVersionContext = exports.DocsPreferredVersionContextProvider = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const react_1 = __importStar(__webpack_require__(0));

const useThemeConfig_1 = __webpack_require__(324);

const docsUtils_1 = __webpack_require__(325);

const useDocs_1 = __webpack_require__(304);

const DocsPreferredVersionStorage_1 = __importDefault(__webpack_require__(343)); // Initial state is always null as we can't read localstorage from node SSR


function getInitialState(pluginIds) {
  const initialState = {};
  pluginIds.forEach(pluginId => {
    initialState[pluginId] = {
      preferredVersionName: null
    };
  });
  return initialState;
} // Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)


function readStorageState({
  pluginIds,
  versionPersistence,
  allDocsData
}) {
  // The storage value we read might be stale,
  // and belong to a version that does not exist in the site anymore
  // In such case, we remove the storage value to avoid downstream errors
  function restorePluginState(pluginId) {
    const preferredVersionNameUnsafe = DocsPreferredVersionStorage_1.default.read(pluginId, versionPersistence);
    const pluginData = allDocsData[pluginId];
    const versionExists = pluginData.versions.some(version => version.name === preferredVersionNameUnsafe);

    if (versionExists) {
      return {
        preferredVersionName: preferredVersionNameUnsafe
      };
    } else {
      DocsPreferredVersionStorage_1.default.clear(pluginId, versionPersistence);
      return {
        preferredVersionName: null
      };
    }
  }

  const initialState = {};
  pluginIds.forEach(pluginId => {
    initialState[pluginId] = restorePluginState(pluginId);
  });
  return initialState;
}

function useVersionPersistence() {
  return useThemeConfig_1.useThemeConfig().docs.versionPersistence;
} // Value that  will be accessible through context: [state,api]


function useContextValue() {
  const allDocsData = useDocs_1.useAllDocsData();
  const versionPersistence = useVersionPersistence();
  const pluginIds = react_1.useMemo(() => Object.keys(allDocsData), [allDocsData]); // Initial state is empty, as  we can't read browser storage in node/SSR

  const [state, setState] = react_1.useState(() => getInitialState(pluginIds)); // On mount, we set the state read from browser storage

  react_1.useEffect(() => {
    setState(readStorageState({
      allDocsData,
      versionPersistence,
      pluginIds
    }));
  }, [allDocsData, versionPersistence, pluginIds]); // The API that we expose to consumer hooks (memo for constant object)

  const api = react_1.useMemo(() => {
    function savePreferredVersion(pluginId, versionName) {
      DocsPreferredVersionStorage_1.default.save(pluginId, versionPersistence, versionName);
      setState(s => Object.assign(Object.assign({}, s), {
        [pluginId]: {
          preferredVersionName: versionName
        }
      }));
    }

    return {
      savePreferredVersion
    };
  }, [setState]);
  return [state, api];
}

const Context = react_1.createContext(null);

function DocsPreferredVersionContextProvider({
  children
}) {
  if (docsUtils_1.isDocsPluginEnabled) {
    return react_1.default.createElement(DocsPreferredVersionContextProviderUnsafe, null, children);
  } else {
    return react_1.default.createElement(react_1.default.Fragment, null, children);
  }
}

exports.DocsPreferredVersionContextProvider = DocsPreferredVersionContextProvider;

function DocsPreferredVersionContextProviderUnsafe({
  children
}) {
  const contextValue = useContextValue();
  return react_1.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

function useDocsPreferredVersionContext() {
  const value = react_1.useContext(Context);

  if (!value) {
    throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");
  }

  return value;
}

exports.useDocsPreferredVersionContext = useDocsPreferredVersionContext;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const UserPreferencesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["a"] = (UserPreferencesContext);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(330);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function useUserPreferencesContext() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

  if (context == null) {
    throw new Error('`useUserPreferencesContext` is used outside of `Layout` Component.');
  }

  return context;
}

/* harmony default export */ __webpack_exports__["a"] = (useUserPreferencesContext);

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(345);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function useThemeContext() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

  if (context == null) {
    throw new Error('`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.');
  }

  return context;
}

/* harmony default export */ __webpack_exports__["a"] = (useThemeContext);

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAlternatePageUtils = void 0;

const useDocusaurusContext_1 = __importDefault(__webpack_require__(44));

const router_1 = __webpack_require__(65); // Permits to obtain the url of the current page in another locale
// Useful to generate hreflang meta headers etc...
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions


function useAlternatePageUtils() {
  const {
    siteConfig: {
      baseUrl,
      url
    },
    i18n: {
      defaultLocale,
      currentLocale
    }
  } = useDocusaurusContext_1.default();
  const {
    pathname
  } = router_1.useLocation();
  const baseUrlUnlocalized = currentLocale === defaultLocale ? baseUrl : baseUrl.replace(`/${currentLocale}/`, '/');
  const pathnameSuffix = pathname.replace(baseUrl, '');

  function getLocalizedBaseUrl(locale) {
    return locale === defaultLocale ? `${baseUrlUnlocalized}` : `${baseUrlUnlocalized}${locale}/`;
  } // TODO support correct alternate url when localized site is deployed on another domain


  function createUrl({
    locale,
    fullyQualified
  }) {
    return `${fullyQualified ? url : ''}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;
  }

  return {
    createUrl
  };
}

exports.useAlternatePageUtils = useAlternatePageUtils;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docVersionSearchTag = exports.DEFAULT_SEARCH_TAG = void 0;
exports.DEFAULT_SEARCH_TAG = 'default';

function docVersionSearchTag(pluginId, versionName) {
  return `docs-${pluginId}-${versionName}`;
}

exports.docVersionSearchTag = docVersionSearchTag;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDocVersionSuggestions = exports.useActiveDocContext = exports.useActiveVersion = exports.useLatestVersion = exports.useVersions = exports.useActivePluginAndVersion = exports.useActivePlugin = exports.useDocsData = exports.useAllDocsData = void 0;

const router_1 = __webpack_require__(65);

const useGlobalData_1 = __webpack_require__(337);

const docsClientUtils_1 = __webpack_require__(338);

exports.useAllDocsData = () => useGlobalData_1.useAllPluginInstancesData('docusaurus-plugin-content-docs');

exports.useDocsData = pluginId => useGlobalData_1.usePluginData('docusaurus-plugin-content-docs', pluginId);

exports.useActivePlugin = (options = {}) => {
  const data = exports.useAllDocsData();
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActivePlugin(data, pathname, options);
};

exports.useActivePluginAndVersion = (options = {}) => {
  const activePlugin = exports.useActivePlugin(options);
  const {
    pathname
  } = router_1.useLocation();

  if (activePlugin) {
    const activeVersion = docsClientUtils_1.getActiveVersion(activePlugin.pluginData, pathname);
    return {
      activePlugin,
      activeVersion
    };
  }

  return undefined;
}; // versions are returned ordered (most recent first)


exports.useVersions = pluginId => {
  const data = exports.useDocsData(pluginId);
  return data.versions;
};

exports.useLatestVersion = pluginId => {
  const data = exports.useDocsData(pluginId);
  return docsClientUtils_1.getLatestVersion(data);
}; // Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active


exports.useActiveVersion = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActiveVersion(data, pathname);
};

exports.useActiveDocContext = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActiveDocContext(data, pathname);
}; // Useful to say "hey, you are not on the latest docs version, please switch"


exports.useDocVersionSuggestions = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getDocVersionSuggestions(data, pathname);
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGlobalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPluginInstancesData", function() { return useAllPluginInstancesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePluginData", function() { return usePluginData; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 // TODO annoying constant duplication
// if we import something from outside the /client folder,
// the tsc directory structure is affected
// import {DEFAULT_PLUGIN_ID} from '../../constants';

const DEFAULT_PLUGIN_ID = 'default';
function useGlobalData() {
  const {
    globalData
  } = Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (!globalData) {
    throw new Error('Docusaurus global data not found');
  }

  return globalData;
}
function useAllPluginInstancesData(pluginName) {
  const globalData = useGlobalData();
  const pluginGlobalData = globalData[pluginName];

  if (!pluginGlobalData) {
    throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName}`);
  }

  return pluginGlobalData;
}
function usePluginData(pluginName, pluginId = DEFAULT_PLUGIN_ID) {
  const pluginGlobalData = useAllPluginInstancesData(pluginName);
  const pluginInstanceGlobalData = pluginGlobalData[pluginId];

  if (!pluginInstanceGlobalData) {
    throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName} and pluginId=${pluginId}`);
  }

  return pluginInstanceGlobalData;
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocVersionSuggestions = exports.getActiveDocContext = exports.getActiveVersion = exports.getLatestVersion = exports.getActivePlugin = void 0;

const router_1 = __webpack_require__(65);

function getActivePlugin(allPluginDatas, pathname, options = {}) {
  const activeEntry = Object.entries(allPluginDatas).find(([_id, pluginData]) => {
    return !!router_1.matchPath(pathname, {
      path: pluginData.path,
      exact: false,
      strict: false
    });
  });
  const activePlugin = activeEntry ? {
    pluginId: activeEntry[0],
    pluginData: activeEntry[1]
  } : undefined;

  if (!activePlugin && options.failfast) {
    throw new Error(`Can't find active docs plugin for pathname=${pathname}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginDatas).map(plugin => plugin.path).join(', ')}`);
  }

  return activePlugin;
}

exports.getActivePlugin = getActivePlugin;

exports.getLatestVersion = data => {
  return data.versions.find(version => version.isLast);
}; // Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active


exports.getActiveVersion = (data, pathname) => {
  const lastVersion = exports.getLatestVersion(data); // Last version is a route like /docs/*,
  // we need to try to match it last or it would match /docs/version-1.0/* as well

  const orderedVersionsMetadata = [...data.versions.filter(version => version !== lastVersion), lastVersion];
  return orderedVersionsMetadata.find(version => {
    return !!router_1.matchPath(pathname, {
      path: version.path,
      exact: false,
      strict: false
    });
  });
};

exports.getActiveDocContext = (data, pathname) => {
  const activeVersion = exports.getActiveVersion(data, pathname);
  const activeDoc = activeVersion === null || activeVersion === void 0 ? void 0 : activeVersion.docs.find(doc => !!router_1.matchPath(pathname, {
    path: doc.path,
    exact: true,
    strict: false
  }));

  function getAlternateVersionDocs(docId) {
    const result = {};
    data.versions.forEach(version => {
      version.docs.forEach(doc => {
        if (doc.id === docId) {
          result[version.name] = doc;
        }
      });
    });
    return result;
  }

  const alternateVersionDocs = activeDoc ? getAlternateVersionDocs(activeDoc.id) : {};
  return {
    activeVersion,
    activeDoc,
    alternateDocVersions: alternateVersionDocs
  };
};

exports.getDocVersionSuggestions = (data, pathname) => {
  const latestVersion = exports.getLatestVersion(data);
  const activeDocContext = exports.getActiveDocContext(data, pathname); // We only suggest another doc/version if user is not using the latest version

  const isNotOnLatestVersion = activeDocContext.activeVersion !== latestVersion;
  const latestDocSuggestion = isNotOnLatestVersion ? activeDocContext === null || activeDocContext === void 0 ? void 0 : activeDocContext.alternateDocVersions[latestVersion.name] : undefined;
  const latestVersionSuggestion = isNotOnLatestVersion ? latestVersion : undefined;
  return {
    latestDocSuggestion,
    latestVersionSuggestion
  };
};

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSamePath = void 0; // Compare the 2 paths, ignoring trailing /

exports.isSamePath = (path1, path2) => {
  const normalize = pathname => {
    return !pathname || (pathname === null || pathname === void 0 ? void 0 : pathname.endsWith('/')) ? pathname : `${pathname}/`;
  };

  return normalize(path1) === normalize(path2);
};

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTitleFormatter = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useDocusaurusContext_1 = __importDefault(__webpack_require__(44));

exports.useTitleFormatter = title => {
  const {
    siteConfig = {}
  } = useDocusaurusContext_1.default();
  const {
    title: siteTitle,
    titleDelimiter = '|'
  } = siteConfig;
  return title && title.trim().length ? `${title.trim()} ${titleDelimiter} ${siteTitle}` : siteTitle;
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePluralForm = void 0;

const react_1 = __webpack_require__(0);

const useDocusaurusContext_1 = __importDefault(__webpack_require__(44)); // We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510


const OrderedPluralForms = ['zero', 'one', 'two', 'few', 'many', 'other'];

function sortPluralForms(pluralForms) {
  return OrderedPluralForms.filter(pf => pluralForms.includes(pf));
} // Hardcoded english/fallback implementation


const EnglishPluralForms = {
  locale: 'en',
  pluralForms: sortPluralForms(['one', 'other']),
  select: count => count === 1 ? 'one' : 'other'
};

function createLocalePluralForms(locale) {
  const pluralRules = new Intl.PluralRules(locale);
  return {
    locale,
    pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
    select: count => pluralRules.select(count)
  };
} // Poor man's PluralSelector implementation, using an english fallback.
// We want a lightweight, future-proof and good-enough solution.
// We don't want a perfect and heavy solution.
//
// Docusaurus classic theme has only 2 deeply nested labels requiring complex plural rules
// We don't want to use Intl + PluralRules polyfills + full ICU syntax (react-intl) just for that.
//
// Notes:
// - 2021: 92+% Browsers support Intl.PluralRules, and support will increase in the future
// - NodeJS >= 13 has full ICU support by default
// - In case of "mismatch" between SSR and Browser ICU support, React keeps working!


function useLocalePluralForms() {
  const {
    i18n: {
      currentLocale
    }
  } = useDocusaurusContext_1.default();
  return react_1.useMemo(() => {
    // @ts-expect-error checking Intl.PluralRules in case browser doesn't have it (e.g Safari 12-)
    if (Intl.PluralRules) {
      try {
        return createLocalePluralForms(currentLocale);
      } catch (e) {
        console.error(`Failed to use Intl.PluralRules for locale=${currentLocale}.
Docusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.
`);
        return EnglishPluralForms;
      }
    } else {
      console.error(`Intl.PluralRules not available!
Docusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.
        `);
      return EnglishPluralForms;
    }
  }, [currentLocale]);
}

function selectPluralMessage(pluralMessages, count, localePluralForms) {
  const separator = '|';
  const parts = pluralMessages.split(separator);

  if (parts.length === 1) {
    return parts[0];
  } else {
    if (parts.length > localePluralForms.pluralForms.length) {
      console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms}), but the message contains ${parts.length} plural forms: ${pluralMessages} `);
    }

    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm); // In case of not enough plural form messages, we take the last one (other) instead of returning undefined

    return parts[Math.min(pluralFormIndex, parts.length - 1)];
  }
}

function usePluralForm() {
  const localePluralForm = useLocalePluralForms();
  return {
    selectMessage: (count, pluralMessages) => {
      return selectPluralMessage(pluralMessages, count, localePluralForm);
    }
  };
}

exports.usePluralForm = usePluralForm;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDocsPreferredVersionByPluginId = exports.useDocsPreferredVersion = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const react_1 = __webpack_require__(0);

const DocsPreferredVersionProvider_1 = __webpack_require__(326);

const useDocs_1 = __webpack_require__(304);

const constants_1 = __webpack_require__(344); // TODO improve typing
// Note, the preferredVersion attribute will always be null before mount


function useDocsPreferredVersion(pluginId = constants_1.DEFAULT_PLUGIN_ID) {
  const docsData = useDocs_1.useDocsData(pluginId);
  const [state, api] = DocsPreferredVersionProvider_1.useDocsPreferredVersionContext();
  const {
    preferredVersionName
  } = state[pluginId];
  const preferredVersion = preferredVersionName ? docsData.versions.find(version => version.name === preferredVersionName) : null;
  const savePreferredVersionName = react_1.useCallback(versionName => {
    api.savePreferredVersion(pluginId, versionName);
  }, [api]);
  return {
    preferredVersion,
    savePreferredVersionName
  };
}

exports.useDocsPreferredVersion = useDocsPreferredVersion;

function useDocsPreferredVersionByPluginId() {
  const allDocsData = useDocs_1.useAllDocsData();
  const [state] = DocsPreferredVersionProvider_1.useDocsPreferredVersionContext();

  function getPluginIdPreferredVersion(pluginId) {
    const docsData = allDocsData[pluginId];
    const {
      preferredVersionName
    } = state[pluginId];
    return preferredVersionName ? docsData.versions.find(version => version.name === preferredVersionName) : null;
  }

  const pluginIds = Object.keys(allDocsData);
  const result = {};
  pluginIds.forEach(pluginId => {
    result[pluginId] = getPluginIdPreferredVersion(pluginId);
  });
  return result;
}

exports.useDocsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

const storageKey = pluginId => `docs-preferred-version-${pluginId}`;

const DocsPreferredVersionStorage = {
  save: (pluginId, persistence, versionName) => {
    if (persistence === 'none') {// noop
    } else {
      window.localStorage.setItem(storageKey(pluginId), versionName);
    }
  },
  read: (pluginId, persistence) => {
    if (persistence === 'none') {
      return null;
    } else {
      return window.localStorage.getItem(storageKey(pluginId));
    }
  },
  clear: (pluginId, persistence) => {
    if (persistence === 'none') {// noop
    } else {
      window.localStorage.removeItem(storageKey(pluginId));
    }
  }
};
exports.default = DocsPreferredVersionStorage;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PLUGIN_ID", function() { return DEFAULT_PLUGIN_ID; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
// eslint-disable-next-line no-restricted-imports
export {
  // constants were only available on node
  // this makes some useful constants available to frontend/themes too
  // import {DEFAULT_PLUGIN_ID} '@docusaurus/constants'
  DEFAULT_PLUGIN_ID,
} from '../../constants';
 */
// Not duplicating the constants seems to produce
// weird TS compilation side-effects
const DEFAULT_PLUGIN_ID = 'default';

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
/* harmony default export */ __webpack_exports__["a"] = (ThemeContext);

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(316);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function Seo({
  title,
  description,
  keywords,
  image
}) {
  const metaTitle = Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__["useTitleFormatter"])(title);
  const metaImageUrl = Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(image, {
    absolute: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, metaTitle), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: metaTitle
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: description
  }), keywords && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: Array.isArray(keywords) ? keywords.join(',') : keywords
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: metaImageUrl
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: metaImageUrl
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }));
}

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(333);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// Exports
/* harmony default export */ var styles_module = ({
	"themedImage": "themedImage_1VuW",
	"themedImage--light": "themedImage--light_3UqQ",
	"themedImage--dark": "themedImage--dark_hz6m"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






const ThemedImage = props => {
  const {
    isClient
  } = Object(useDocusaurusContext["default"])();
  const {
    isDarkTheme
  } = Object(useThemeContext["a" /* default */])();

  const {
    sources,
    className,
    alt = ''
  } = props,
        propsRest = _objectWithoutPropertiesLoose(props, ["sources", "className", "alt"]);

  const renderedSourceNames = isClient ? isDarkTheme ? ['dark'] : ['light'] // We need to render both images on the server to avoid flash
  : // See https://github.com/facebook/docusaurus/pull/3730
  ['light', 'dark'];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, renderedSourceNames.map(sourceName => /*#__PURE__*/react_default.a.createElement("img", _extends({
    key: sourceName,
    src: sources[sourceName],
    alt: alt,
    className: Object(clsx_m["default"])(styles_module.themedImage, styles_module[`themedImage--${sourceName}`], className)
  }, propsRest))));
};

/* harmony default export */ var theme_ThemedImage = __webpack_exports__["a"] = (ThemedImage);

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const getScrollPosition = () => ({
  scrollX: _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM ? window.pageXOffset : 0,
  scrollY: _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM ? window.pageYOffset : 0
});

const useScrollPosition = (effect, deps = []) => {
  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getScrollPosition());

  const handleScroll = () => {
    const currentScrollPosition = getScrollPosition();
    setScrollPosition(currentScrollPosition);

    if (effect) {
      effect(currentScrollPosition);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const opts = {
      passive: true
    };
    window.addEventListener('scroll', handleScroll, opts);
    return () => window.removeEventListener('scroll', handleScroll, opts);
  }, deps);
  return scrollPosition;
};

/* harmony default export */ __webpack_exports__["a"] = (useScrollPosition);

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function useLockBodyScroll(lock = true) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.overflow = lock ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [lock]);
}

/* harmony default export */ __webpack_exports__["a"] = (useLockBodyScroll);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return windowSizes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const desktopThresholdWidth = 996;
const windowSizes = {
  desktop: 'desktop',
  mobile: 'mobile'
};

function useWindowSize() {
  const isClient = _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM;

  function getSize() {
    if (!isClient) {
      return undefined;
    }

    return window.innerWidth > desktopThresholdWidth ? windowSizes.desktop : windowSizes.mobile;
  }

  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return undefined;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}


/* harmony default export */ __webpack_exports__["a"] = (useWindowSize);

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(316);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







const Logo = props => {
  const {
    isClient
  } = Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    navbar: {
      title,
      logo = {
        src: ''
      }
    }
  } = Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__["useThemeConfig"])();

  const {
    imageClassName,
    titleClassName
  } = props,
        propsRest = _objectWithoutPropertiesLoose(props, ["imageClassName", "titleClassName"]);

  const logoLink = Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(logo.href || '/');
  const sources = {
    light: Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(logo.src),
    dark: Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(logo.srcDark || logo.src)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
    to: logoLink
  }, propsRest, logo.target && {
    target: logo.target
  }), logo.src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    key: isClient,
    className: imageClassName,
    sources: sources,
    alt: logo.alt || title || 'Logo'
  }), title != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: titleClassName
  }, title));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const IconMenu = (_ref) => {
  let {
    width = 30,
    height = 30,
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, ["width", "height", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    "aria-label": "Menu",
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 30 30",
    role: "img",
    focusable: "false"
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M4 7h22M4 15h22M4 23h22"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (IconMenu);

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/styles.module.css
// Exports
/* harmony default export */ var styles_module = ({
	"skipToContent": "skipToContent_1oUP"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function programmaticFocus(el) {
  el.setAttribute('tabindex', '-1');
  el.focus();
  el.removeAttribute('tabindex');
}

function SkipToContent() {
  const containerRef = Object(react["useRef"])(null);
  const location = Object(router["useLocation"])();

  const handleSkip = e => {
    e.preventDefault();
    const targetElement = document.querySelector('main:first-of-type') || document.querySelector('.main-wrapper');

    if (targetElement) {
      programmaticFocus(targetElement);
    }
  };

  Object(react["useEffect"])(() => {
    if (!location.hash) {
      programmaticFocus(containerRef.current);
    }
  }, [location.pathname]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#main",
    className: styles_module.skipToContent,
    onClick: handleSkip
  }, /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.common.skipToMainContent",
    description: "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"
  }, "Skip to main content")));
}

/* harmony default export */ var theme_SkipToContent = (SkipToContent);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(275);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(332);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/styles.module.css
// Exports
/* harmony default export */ var AnnouncementBar_styles_module = ({
	"announcementBar": "announcementBar_3WsW",
	"announcementBarClose": "announcementBarClose_38nx",
	"announcementBarContent": "announcementBarContent_3EUC",
	"announcementBarCloseable": "announcementBarCloseable_3myR"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function AnnouncementBar() {
  const {
    isAnnouncementBarClosed,
    closeAnnouncementBar
  } = Object(useUserPreferencesContext["a" /* default */])();
  const {
    announcementBar
  } = Object(lib["useThemeConfig"])();

  if (!announcementBar) {
    return null;
  }

  const {
    content,
    backgroundColor,
    textColor,
    isCloseable
  } = announcementBar;

  if (!content || isCloseable && isAnnouncementBarClosed) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: AnnouncementBar_styles_module.announcementBar,
    style: {
      backgroundColor,
      color: textColor
    },
    role: "banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])(AnnouncementBar_styles_module.announcementBarContent, {
      [AnnouncementBar_styles_module.announcementBarCloseable]: isCloseable
    }) // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), isCloseable ? /*#__PURE__*/react_default.a.createElement("button", {
    type: "button",
    className: AnnouncementBar_styles_module.announcementBarClose,
    onClick: closeAnnouncementBar,
    "aria-label": Object(Translate["b" /* translate */])({
      id: 'theme.AnnouncementBar.closeButtonAriaLabel',
      message: 'Close',
      description: 'The ARIA label for close button of announcement bar'
    })
  }, /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null);
}

/* harmony default export */ var theme_AnnouncementBar = (AnnouncementBar);
// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* harmony default export */ var Noop = (() => null);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SearchBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this file, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

// EXTERNAL MODULE: ./node_modules/react-toggle/dist/component/index.js
var component = __webpack_require__(355);
var component_default = /*#__PURE__*/__webpack_require__.n(component);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/styles.module.css
// Exports
/* harmony default export */ var Toggle_styles_module = ({
	"toggle": "toggle_71bT"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







const Dark = ({
  icon,
  style
}) => /*#__PURE__*/react_default.a.createElement("span", {
  className: Object(clsx_m["default"])(Toggle_styles_module.toggle, Toggle_styles_module.dark),
  style: style
}, icon);

const Light = ({
  icon,
  style
}) => /*#__PURE__*/react_default.a.createElement("span", {
  className: Object(clsx_m["default"])(Toggle_styles_module.toggle, Toggle_styles_module.light),
  style: style
}, icon);

/* harmony default export */ var Toggle = (function (props) {
  const {
    colorMode: {
      switchConfig: {
        darkIcon,
        darkIconStyle,
        lightIcon,
        lightIconStyle
      }
    }
  } = Object(lib["useThemeConfig"])();
  const {
    isClient
  } = Object(useDocusaurusContext["default"])();
  return /*#__PURE__*/react_default.a.createElement(component_default.a, _extends({
    disabled: !isClient,
    icons: {
      checked: /*#__PURE__*/react_default.a.createElement(Dark, {
        icon: darkIcon,
        style: darkIconStyle
      }),
      unchecked: /*#__PURE__*/react_default.a.createElement(Light, {
        icon: lightIcon,
        style: lightIconStyle
      })
    }
  }, props));
});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(348);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const useHideableNavbar = hideOnScroll => {
  const location = Object(router["useLocation"])();
  const [isNavbarVisible, setIsNavbarVisible] = Object(react["useState"])(hideOnScroll);
  const isFocusedAnchor = Object(react["useRef"])(false);
  const [lastScrollTop, setLastScrollTop] = Object(react["useState"])(0);
  const [navbarHeight, setNavbarHeight] = Object(react["useState"])(0);
  const navbarRef = Object(react["useCallback"])(node => {
    if (node !== null) {
      setNavbarHeight(node.getBoundingClientRect().height);
    }
  }, []);
  Object(useScrollPosition["a" /* default */])(({
    scrollY: scrollTop
  }) => {
    if (!hideOnScroll) {
      return;
    }

    if (scrollTop < navbarHeight) {
      setIsNavbarVisible(true);
      return;
    }

    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
      setIsNavbarVisible(false);
      setLastScrollTop(scrollTop);
      return;
    }

    if (lastScrollTop && scrollTop === 0) {
      setIsNavbarVisible(true);
    }

    const documentHeight = document.documentElement.scrollHeight - navbarHeight;
    const windowHeight = window.innerHeight;

    if (lastScrollTop && scrollTop >= lastScrollTop) {
      setIsNavbarVisible(false);
    } else if (scrollTop + windowHeight < documentHeight) {
      setIsNavbarVisible(true);
    }

    setLastScrollTop(scrollTop);
  }, [lastScrollTop, navbarHeight, isFocusedAnchor]);
  Object(react["useEffect"])(() => {
    if (!hideOnScroll) {
      return;
    }

    if (!lastScrollTop) {
      return;
    }

    setIsNavbarVisible(true);
  }, [location.pathname]);
  Object(react["useEffect"])(() => {
    if (!hideOnScroll) {
      return;
    }

    if (!location.hash) {
      return;
    }

    isFocusedAnchor.current = true;
  }, [location.hash]);
  return {
    navbarRef,
    isNavbarVisible
  };
};

/* harmony default export */ var hooks_useHideableNavbar = (useHideableNavbar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(349);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(322);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconLanguage/index.js
function IconLanguage_extends() { IconLanguage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return IconLanguage_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const IconLanguage = (_ref) => {
  let {
    width = 20,
    height = 20
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/react_default.a.createElement("svg", IconLanguage_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: width,
    height: height
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "currentColor",
    d: "M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"
  }));
};

/* harmony default export */ var theme_IconLanguage = (IconLanguage);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem.js
function LocaleDropdownNavbarItem_extends() { LocaleDropdownNavbarItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LocaleDropdownNavbarItem_extends.apply(this, arguments); }

function LocaleDropdownNavbarItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function LocaleDropdownNavbarItem(_ref) {
  let {
    mobile,
    dropdownItemsBefore,
    dropdownItemsAfter
  } = _ref,
      props = LocaleDropdownNavbarItem_objectWithoutPropertiesLoose(_ref, ["mobile", "dropdownItemsBefore", "dropdownItemsAfter"]);

  const {
    i18n: {
      currentLocale,
      locales,
      localeConfigs
    }
  } = Object(useDocusaurusContext["default"])();
  const alternatePageUtils = Object(lib["useAlternatePageUtils"])();

  function getLocaleLabel(locale) {
    return localeConfigs[locale].label;
  }

  const localeItems = locales.map(locale => {
    const to = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false
    })}`;
    return {
      isNavLink: true,
      label: getLocaleLabel(locale),
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className: locale === currentLocale ? 'dropdown__link--active' : ''
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter]; // Mobile is handled a bit differently

  const dropdownLabel = mobile ? 'Languages' : getLocaleLabel(currentLocale);
  return /*#__PURE__*/react_default.a.createElement(DefaultNavbarItem["a" /* default */], LocaleDropdownNavbarItem_extends({}, props, {
    href: "#",
    mobile: mobile,
    label: /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(theme_IconLanguage, {
      style: {
        verticalAlign: 'text-bottom',
        marginRight: 5
      }
    }), /*#__PURE__*/react_default.a.createElement("span", null, dropdownLabel)),
    items: items
  }));
}
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/styles.module.css
// Exports
/* harmony default export */ var NavbarItem_styles_module = ({
	"searchWrapper": "searchWrapper_3rmH"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function SearchNavbarItem({
  mobile
}) {
  if (mobile) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: NavbarItem_styles_module.searchWrapper
  }, /*#__PURE__*/react_default.a.createElement(Noop, null));
}
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js
function NavbarItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const NavbarItemComponents = {
  default: () => DefaultNavbarItem["a" /* default */],
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,
  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  docsVersion: () => // eslint-disable-next-line @typescript-eslint/no-var-requires
  __webpack_require__(360).default,
  docsVersionDropdown: () => // eslint-disable-next-line @typescript-eslint/no-var-requires
  __webpack_require__(361).default,
  doc: () => // eslint-disable-next-line @typescript-eslint/no-var-requires
  __webpack_require__(362).default
};

const getNavbarItemComponent = (type = 'default') => {
  const navbarItemComponent = NavbarItemComponents[type];

  if (!navbarItemComponent) {
    throw new Error(`No NavbarItem component found for type=${type}.`);
  }

  return navbarItemComponent();
};

function NavbarItem(_ref) {
  let {
    type
  } = _ref,
      props = NavbarItem_objectWithoutPropertiesLoose(_ref, ["type"]);

  const NavbarItemComponent = getNavbarItemComponent(type);
  return /*#__PURE__*/react_default.a.createElement(NavbarItemComponent, props);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(351);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(352);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/styles.module.css
// Exports
/* harmony default export */ var Navbar_styles_module = ({
	"displayOnlyInLargeViewport": "displayOnlyInLargeViewport_GrZ2",
	"navbarHideable": "navbarHideable_2qcr",
	"navbarHidden": "navbarHidden_3yey"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/index.js
function Navbar_extends() { Navbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Navbar_extends.apply(this, arguments); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */












 // retrocompatible with v1

const DefaultNavItemPosition = 'right'; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(item => {
    var _item$position;

    return ((_item$position = item.position) != null ? _item$position : DefaultNavItemPosition) === 'left';
  });
  const rightItems = items.filter(item => {
    var _item$position2;

    return ((_item$position2 = item.position) != null ? _item$position2 : DefaultNavItemPosition) === 'right';
  });
  return {
    leftItems,
    rightItems
  };
}

function Navbar() {
  const {
    navbar: {
      items,
      hideOnScroll,
      style
    },
    colorMode: {
      disableSwitch: disableColorModeSwitch
    }
  } = Object(lib["useThemeConfig"])();
  const [sidebarShown, setSidebarShown] = Object(react["useState"])(false);
  const {
    isDarkTheme,
    setLightTheme,
    setDarkTheme
  } = Object(useThemeContext["a" /* default */])();
  const {
    navbarRef,
    isNavbarVisible
  } = hooks_useHideableNavbar(hideOnScroll);
  Object(useLockBodyScroll["a" /* default */])(sidebarShown);
  const showSidebar = Object(react["useCallback"])(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = Object(react["useCallback"])(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const onToggleChange = Object(react["useCallback"])(e => e.target.checked ? setDarkTheme() : setLightTheme(), [setLightTheme, setDarkTheme]);
  const windowSize = Object(useWindowSize["a" /* default */])();
  Object(react["useEffect"])(() => {
    if (windowSize === useWindowSize["b" /* windowSizes */].desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const hasSearchNavbarItem = items.some(item => item.type === 'search');
  const {
    leftItems,
    rightItems
  } = splitNavItemsByPosition(items);
  return /*#__PURE__*/react_default.a.createElement("nav", {
    ref: navbarRef,
    className: Object(clsx_m["default"])('navbar', 'navbar--fixed-top', {
      'navbar--dark': style === 'dark',
      'navbar--primary': style === 'primary',
      'navbar-sidebar--show': sidebarShown,
      [Navbar_styles_module.navbarHideable]: hideOnScroll,
      [Navbar_styles_module.navbarHidden]: hideOnScroll && !isNavbarVisible
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar__inner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar__items"
  }, items != null && items.length !== 0 && /*#__PURE__*/react_default.a.createElement("button", {
    "aria-label": "Navigation bar toggle",
    className: "navbar__toggle",
    type: "button",
    tabIndex: 0,
    onClick: showSidebar,
    onKeyDown: showSidebar
  }, /*#__PURE__*/react_default.a.createElement(IconMenu["a" /* default */], null)), /*#__PURE__*/react_default.a.createElement(Logo["a" /* default */], {
    className: "navbar__brand",
    imageClassName: "navbar__logo",
    titleClassName: Object(clsx_m["default"])('navbar__title')
  }), leftItems.map((item, i) => /*#__PURE__*/react_default.a.createElement(NavbarItem, Navbar_extends({}, item, {
    key: i
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar__items navbar__items--right"
  }, rightItems.map((item, i) => /*#__PURE__*/react_default.a.createElement(NavbarItem, Navbar_extends({}, item, {
    key: i
  }))), !disableColorModeSwitch && /*#__PURE__*/react_default.a.createElement(Toggle, {
    className: Navbar_styles_module.displayOnlyInLargeViewport,
    "aria-label": "Dark mode toggle",
    checked: isDarkTheme,
    onChange: onToggleChange
  }), !hasSearchNavbarItem && /*#__PURE__*/react_default.a.createElement(Noop, null))), /*#__PURE__*/react_default.a.createElement("div", {
    role: "presentation",
    className: "navbar-sidebar__backdrop",
    onClick: hideSidebar
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-sidebar"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-sidebar__brand"
  }, /*#__PURE__*/react_default.a.createElement(Logo["a" /* default */], {
    className: "navbar__brand",
    imageClassName: "navbar__logo",
    titleClassName: "navbar__title",
    onClick: hideSidebar
  }), !disableColorModeSwitch && sidebarShown && /*#__PURE__*/react_default.a.createElement(Toggle, {
    "aria-label": "Dark mode toggle in sidebar",
    checked: isDarkTheme,
    onChange: onToggleChange
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "navbar-sidebar__items"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "menu__list"
  }, items.map((item, i) => /*#__PURE__*/react_default.a.createElement(NavbarItem, Navbar_extends({
    mobile: true
  }, item, {
    // TODO fix typing
    onClick: hideSidebar,
    key: i
  }))))))));
}

/* harmony default export */ var theme_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(316);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/styles.module.css
// Exports
/* harmony default export */ var Footer_styles_module = ({
	"footerLogoLink": "footerLogoLink_MyFc"
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/index.js
function Footer_extends() { Footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Footer_extends.apply(this, arguments); }

function Footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








function FooterLink(_ref) {
  let {
    to,
    href,
    label,
    prependBaseUrlToHref
  } = _ref,
      props = Footer_objectWithoutPropertiesLoose(_ref, ["to", "href", "label", "prependBaseUrlToHref"]);

  const toUrl = Object(useBaseUrl["a" /* default */])(to);
  const normalizedHref = Object(useBaseUrl["a" /* default */])(href, {
    forcePrependBaseUrl: true
  });
  return /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], Footer_extends({
    className: "footer__link-item"
  }, href ? {
    href: prependBaseUrlToHref ? normalizedHref : href
  } : {
    to: toUrl
  }, props), label);
}

const FooterLogo = ({
  sources,
  alt
}) => /*#__PURE__*/react_default.a.createElement(ThemedImage["a" /* default */], {
  className: "footer__logo",
  alt: alt,
  sources: sources
});

function Footer() {
  const {
    footer
  } = Object(lib["useThemeConfig"])();
  const {
    copyright,
    links = [],
    logo = {}
  } = footer || {};
  const sources = {
    light: Object(useBaseUrl["a" /* default */])(logo.src),
    dark: Object(useBaseUrl["a" /* default */])(logo.srcDark || logo.src)
  };

  if (!footer) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("footer", {
    className: Object(clsx_m["default"])('footer', {
      'footer--dark': footer.style === 'dark'
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, links && links.length > 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "row footer__links"
  }, links.map((linkItem, i) => /*#__PURE__*/react_default.a.createElement("div", {
    key: i,
    className: "col footer__col"
  }, linkItem.title != null ? /*#__PURE__*/react_default.a.createElement("h4", {
    className: "footer__title"
  }, linkItem.title) : null, linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? /*#__PURE__*/react_default.a.createElement("ul", {
    className: "footer__items"
  }, linkItem.items.map((item, key) => item.html ? /*#__PURE__*/react_default.a.createElement("li", {
    key: key,
    className: "footer__item" // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: item.html
    }
  }) : /*#__PURE__*/react_default.a.createElement("li", {
    key: item.href || item.to,
    className: "footer__item"
  }, /*#__PURE__*/react_default.a.createElement(FooterLink, item)))) : null))), (logo || copyright) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer__bottom text--center"
  }, logo && (logo.src || logo.srcDark) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "margin-bottom--sm"
  }, logo.href ? /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
    href: logo.href,
    className: Footer_styles_module.footerLogoLink
  }, /*#__PURE__*/react_default.a.createElement(FooterLogo, {
    alt: logo.alt,
    sources: sources
  })) : /*#__PURE__*/react_default.a.createElement(FooterLogo, {
    alt: logo.alt,
    sources: sources
  })), copyright ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer__copyright" // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: copyright
    }
  }) : null)));
}

/* harmony default export */ var theme_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const themes = {
  light: 'light',
  dark: 'dark'
}; // Ensure to always return a valid theme even if input is invalid

const coerceToTheme = theme => {
  return theme === themes.dark ? themes.dark : themes.light;
};

const getInitialTheme = defaultMode => {
  if (!ExecutionEnvironment["a" /* default */].canUseDOM) {
    return coerceToTheme(defaultMode);
  }

  return coerceToTheme(document.documentElement.getAttribute('data-theme'));
};

const storeTheme = newTheme => {
  try {
    localStorage.setItem('theme', coerceToTheme(newTheme));
  } catch (err) {
    console.error(err);
  }
};

const useTheme = () => {
  const {
    colorMode: {
      defaultMode,
      disableSwitch,
      respectPrefersColorScheme
    }
  } = Object(lib["useThemeConfig"])();
  const [theme, setTheme] = Object(react["useState"])(getInitialTheme(defaultMode));
  const setLightTheme = Object(react["useCallback"])(() => {
    setTheme(themes.light);
    storeTheme(themes.light);
  }, []);
  const setDarkTheme = Object(react["useCallback"])(() => {
    setTheme(themes.dark);
    storeTheme(themes.dark);
  }, []);
  Object(react["useEffect"])(() => {
    document.documentElement.setAttribute('data-theme', coerceToTheme(theme));
  }, [theme]);
  Object(react["useEffect"])(() => {
    if (disableSwitch) {
      return;
    }

    try {
      const localStorageTheme = localStorage.getItem('theme');

      if (localStorageTheme !== null) {
        setTheme(coerceToTheme(localStorageTheme));
      }
    } catch (err) {
      console.error(err);
    }
  }, [setTheme]);
  Object(react["useEffect"])(() => {
    if (disableSwitch && !respectPrefersColorScheme) {
      return;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener(({
      matches
    }) => {
      setTheme(matches ? themes.dark : themes.light);
    });
  }, []);
  return {
    isDarkTheme: theme === themes.dark,
    setLightTheme,
    setDarkTheme
  };
};

/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function ThemeProvider(props) {
  const {
    isDarkTheme,
    setLightTheme,
    setDarkTheme
  } = hooks_useTheme();
  return /*#__PURE__*/react_default.a.createElement(ThemeContext["a" /* default */].Provider, {
    value: {
      isDarkTheme,
      setLightTheme,
      setDarkTheme
    }
  }, props.children);
}

/* harmony default export */ var theme_ThemeProvider = (ThemeProvider);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const TAB_CHOICE_PREFIX = 'docusaurus.tab.';

const useTabGroupChoice = () => {
  const [tabGroupChoices, setChoices] = Object(react["useState"])({});
  const setChoiceSyncWithLocalStorage = Object(react["useCallback"])((groupId, newChoice) => {
    try {
      localStorage.setItem(`${TAB_CHOICE_PREFIX}${groupId}`, newChoice);
    } catch (err) {
      console.error(err);
    }
  }, []);
  Object(react["useEffect"])(() => {
    try {
      const localStorageChoices = {};

      for (let i = 0; i < localStorage.length; i += 1) {
        const storageKey = localStorage.key(i);

        if (storageKey.startsWith(TAB_CHOICE_PREFIX)) {
          const groupId = storageKey.substring(TAB_CHOICE_PREFIX.length);
          localStorageChoices[groupId] = localStorage.getItem(storageKey);
        }
      }

      setChoices(localStorageChoices);
    } catch (err) {
      console.error(err);
    }
  }, []);
  return {
    tabGroupChoices,
    setTabGroupChoices: (groupId, newChoice) => {
      setChoices(oldChoices => Object.assign({}, oldChoices, {
        [groupId]: newChoice
      }));
      setChoiceSyncWithLocalStorage(groupId, newChoice);
    }
  };
};

/* harmony default export */ var hooks_useTabGroupChoice = (useTabGroupChoice);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useAnnouncementBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const STORAGE_DISMISS_KEY = 'docusaurus.announcement.dismiss';
const STORAGE_ID_KEY = 'docusaurus.announcement.id';

const useAnnouncementBar = () => {
  const {
    announcementBar
  } = Object(lib["useThemeConfig"])();
  const [isClosed, setClosed] = Object(react["useState"])(true);
  const handleClose = Object(react["useCallback"])(() => {
    localStorage.setItem(STORAGE_DISMISS_KEY, 'true');
    setClosed(true);
  }, []);
  Object(react["useEffect"])(() => {
    if (!announcementBar) {
      return;
    }

    const {
      id
    } = announcementBar;
    let viewedId = localStorage.getItem(STORAGE_ID_KEY); // retrocompatibility due to spelling mistake of default id
    // see https://github.com/facebook/docusaurus/issues/3338

    if (viewedId === 'annoucement-bar') {
      viewedId = 'announcement-bar';
    }

    const isNewAnnouncement = id !== viewedId;
    localStorage.setItem(STORAGE_ID_KEY, id);

    if (isNewAnnouncement) {
      localStorage.setItem(STORAGE_DISMISS_KEY, 'false');
    }

    if (isNewAnnouncement || localStorage.getItem(STORAGE_DISMISS_KEY) === 'false') {
      setClosed(false);
    }
  }, []);
  return {
    isAnnouncementBarClosed: isClosed,
    closeAnnouncementBar: handleClose
  };
};

/* harmony default export */ var hooks_useAnnouncementBar = (useAnnouncementBar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(330);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function UserPreferencesProvider(props) {
  const {
    tabGroupChoices,
    setTabGroupChoices
  } = hooks_useTabGroupChoice();
  const {
    isAnnouncementBarClosed,
    closeAnnouncementBar
  } = hooks_useAnnouncementBar();
  return /*#__PURE__*/react_default.a.createElement(UserPreferencesContext["a" /* default */].Provider, {
    value: {
      tabGroupChoices,
      setTabGroupChoices,
      isAnnouncementBarClosed,
      closeAnnouncementBar
    }
  }, props.children);
}

/* harmony default export */ var theme_UserPreferencesProvider = (UserPreferencesProvider);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function LayoutProviders({
  children
}) {
  return /*#__PURE__*/react_default.a.createElement(theme_ThemeProvider, null, /*#__PURE__*/react_default.a.createElement(theme_UserPreferencesProvider, null, /*#__PURE__*/react_default.a.createElement(lib["DocsPreferredVersionContextProvider"], null, children)));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadatas/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // Note: we don't couple this to Algolia/DocSearch on purpose
// We may want to support other search engine plugins too
// Search plugins should swizzle/override this comp to add their behavior

function SearchMetadatas({
  locale,
  version,
  tag
}) {
  return /*#__PURE__*/react_default.a.createElement(Head["a" /* default */], null, locale && /*#__PURE__*/react_default.a.createElement("meta", {
    name: "docusaurus_locale",
    content: `${locale}`
  }), version && /*#__PURE__*/react_default.a.createElement("meta", {
    name: "docusaurus_version",
    content: version
  }), tag && /*#__PURE__*/react_default.a.createElement("meta", {
    name: "docusaurus_tag",
    content: tag
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(346);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutHead/index.js
function LayoutHead_extends() { LayoutHead_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LayoutHead_extends.apply(this, arguments); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







 // Useful for SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317

function AlternateLangHeaders() {
  const {
    i18n: {
      defaultLocale,
      locales
    }
  } = Object(useDocusaurusContext["default"])();
  const alternatePageUtils = Object(lib["useAlternatePageUtils"])(); // Note: it is fine to use both "x-default" and "en" to target the same url
  // See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/

  return /*#__PURE__*/react_default.a.createElement(Head["a" /* default */], null, locales.map(locale => /*#__PURE__*/react_default.a.createElement("link", {
    key: locale,
    rel: "alternate",
    href: alternatePageUtils.createUrl({
      locale,
      fullyQualified: true
    }),
    hrefLang: locale
  })), /*#__PURE__*/react_default.a.createElement("link", {
    rel: "alternate",
    href: alternatePageUtils.createUrl({
      locale: defaultLocale,
      fullyQualified: true
    }),
    hrefLang: "x-default"
  }));
} // Default canonical url inferred from current page location pathname


function useDefaultCanonicalUrl() {
  const {
    siteConfig: {
      url: siteUrl
    }
  } = Object(useDocusaurusContext["default"])();
  const {
    pathname
  } = Object(router["useLocation"])();
  return siteUrl + Object(useBaseUrl["a" /* default */])(pathname);
}

function CanonicalUrlHeaders({
  permalink
}) {
  const {
    siteConfig: {
      url: siteUrl
    }
  } = Object(useDocusaurusContext["default"])();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();
  const canonicalUrl = permalink ? `${siteUrl}${permalink}` : defaultCanonicalUrl;
  return /*#__PURE__*/react_default.a.createElement(Head["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:url",
    content: canonicalUrl
  }), /*#__PURE__*/react_default.a.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }));
}

function LayoutHead(props) {
  const {
    siteConfig,
    i18n: {
      currentLocale,
      localeConfigs
    }
  } = Object(useDocusaurusContext["default"])();
  const {
    favicon,
    themeConfig: {
      image: defaultImage,
      metadatas
    }
  } = siteConfig;
  const {
    title,
    description,
    image,
    keywords,
    searchMetadatas
  } = props;
  const faviconUrl = Object(useBaseUrl["a" /* default */])(favicon); // See https://github.com/facebook/docusaurus/issues/3317#issuecomment-754661855
  // const htmlLang = currentLocale.split('-')[0];

  const htmlLang = currentLocale; // should we allow the user to override htmlLang with localeConfig?

  const htmlDir = localeConfigs[currentLocale].direction;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Head["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("html", {
    lang: htmlLang,
    dir: htmlDir
  }), favicon && /*#__PURE__*/react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: faviconUrl
  })), /*#__PURE__*/react_default.a.createElement(Seo["a" /* default */], {
    title,
    description,
    keywords,
    image: image || defaultImage
  }), /*#__PURE__*/react_default.a.createElement(CanonicalUrlHeaders, null), /*#__PURE__*/react_default.a.createElement(AlternateLangHeaders, null), /*#__PURE__*/react_default.a.createElement(SearchMetadatas, LayoutHead_extends({
    tag: lib["DEFAULT_SEARCH_TAG"],
    locale: currentLocale
  }, searchMetadatas)), /*#__PURE__*/react_default.a.createElement(Head["a" /* default */] // it's important to have an additional <Head> element here,
  // as it allows react-helmet to override values set in previous <Head>
  // ie we can override default metadatas such as "twitter:card"
  // In same Head, the same meta would appear twice instead of overriding
  // See react-helmet doc
  , null, metadatas.map((metadata, i) => /*#__PURE__*/react_default.a.createElement("meta", LayoutHead_extends({
    key: `metadata_${i}`
  }, metadata)))));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/styles.css
var styles = __webpack_require__(363);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function useKeyboardNavigation() {
  Object(react["useEffect"])(() => {
    const keyboardFocusedClassName = 'navigation-with-keyboard';

    function handleOutlineStyles(e) {
      if (e.type === 'keydown' && e.key === 'Tab') {
        document.body.classList.add(keyboardFocusedClassName);
      }

      if (e.type === 'mousedown') {
        document.body.classList.remove(keyboardFocusedClassName);
      }
    }

    document.addEventListener('keydown', handleOutlineStyles);
    document.addEventListener('mousedown', handleOutlineStyles);
    return () => {
      document.body.classList.remove(keyboardFocusedClassName);
      document.removeEventListener('keydown', handleOutlineStyles);
      document.removeEventListener('mousedown', handleOutlineStyles);
    };
  }, []);
}

/* harmony default export */ var hooks_useKeyboardNavigation = (useKeyboardNavigation);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/styles.css
var Layout_styles = __webpack_require__(364);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */











function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName
  } = props;
  hooks_useKeyboardNavigation();
  return /*#__PURE__*/react_default.a.createElement(LayoutProviders, null, /*#__PURE__*/react_default.a.createElement(LayoutHead, props), /*#__PURE__*/react_default.a.createElement(theme_SkipToContent, null), /*#__PURE__*/react_default.a.createElement(theme_AnnouncementBar, null), /*#__PURE__*/react_default.a.createElement(theme_Navbar, null), /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])('main-wrapper', wrapperClassName)
  }, children), !noFooter && /*#__PURE__*/react_default.a.createElement(theme_Footer, null));
}

/* harmony default export */ var theme_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(356);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _check = __webpack_require__(357);

var _check2 = _interopRequireDefault(_check);

var _x = __webpack_require__(358);

var _x2 = _interopRequireDefault(_x);

var _util = __webpack_require__(359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        // Disable linting rule here since this usage of setState inside
        // componentDidUpdate is OK; see
        // https://reactjs.org/docs/react-component.html#componentdidupdate
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ checked: !!this.props.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      if (this.props.disabled) {
        return;
      }
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      var checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

      this.setState({ checked: checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      if (this.props.disabled) {
        return;
      }
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      var onFocus = this.props.onFocus;


      if (onFocus) {
        onFocus(event);
      }

      this.setState({ hasFocus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;


      if (onBlur) {
        onBlur(event);
      }

      this.setState({ hasFocus: false });
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('react-toggle', {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'react-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

exports.default = Toggle;


Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_check2.default, null),
    unchecked: _react2.default.createElement(_x2.default, null)
  }
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  'aria-labelledby': _propTypes2.default.string,
  'aria-label': _propTypes2.default.string,
  icons: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    checked: _propTypes2.default.node,
    unchecked: _propTypes2.default.node
  })])
};

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '14', height: '11', viewBox: '0 0 14 11' },
    _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '10', height: '10', viewBox: '0 0 10 10' },
    _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointerCoord = pointerCoord;
// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    var changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      var touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    var pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionNavbarItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId);

function DocsVersionNavbarItem(_ref) {
  var _ref2;

  let {
    label: staticLabel,
    to: staticTo,
    docsPluginId
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "to", "docsPluginId"]);

  const activeVersion = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useActiveVersion"])(docsPluginId);
  const {
    preferredVersion
  } = Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__["useDocsPreferredVersion"])(docsPluginId);
  const latestVersion = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useLatestVersion"])(docsPluginId);
  const version = (_ref2 = activeVersion != null ? activeVersion : preferredVersion) != null ? _ref2 : latestVersion;
  const label = staticLabel != null ? staticLabel : version.label;
  const path = staticTo != null ? staticTo : getVersionMainDoc(version).path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({}, props, {
    label: label,
    to: path
  }));
}

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionDropdownNavbarItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId);

function DocsVersionDropdownNavbarItem(_ref) {
  var _ref2, _activeDocContext$act;

  let {
    mobile,
    docsPluginId,
    dropdownActiveClassDisabled,
    dropdownItemsBefore,
    dropdownItemsAfter
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["mobile", "docsPluginId", "dropdownActiveClassDisabled", "dropdownItemsBefore", "dropdownItemsAfter"]);

  const activeDocContext = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useActiveDocContext"])(docsPluginId);
  const versions = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useVersions"])(docsPluginId);
  const latestVersion = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useLatestVersion"])(docsPluginId);
  const {
    preferredVersion,
    savePreferredVersionName
  } = Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__["useDocsPreferredVersion"])(docsPluginId);

  function getItems() {
    const versionLinks = versions.map(version => {
      // We try to link to the same doc, in another version
      // When not possible, fallback to the "main doc" of the version
      const versionDoc = (activeDocContext == null ? void 0 : activeDocContext.alternateDocVersions[version.name]) || getVersionMainDoc(version);
      return {
        isNavLink: true,
        label: version.label,
        to: versionDoc.path,
        isActive: () => version === (activeDocContext == null ? void 0 : activeDocContext.activeVersion),
        onClick: () => {
          savePreferredVersionName(version.name);
        }
      };
    });
    const items = [...dropdownItemsBefore, ...versionLinks, ...dropdownItemsAfter]; // We don't want to render a version dropdown with 0 or 1 item
    // If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
    // We'd rather render a button instead of a dropdown

    if (items.length <= 1) {
      return undefined;
    }

    return items;
  }

  const dropdownVersion = (_ref2 = (_activeDocContext$act = activeDocContext.activeVersion) != null ? _activeDocContext$act : preferredVersion) != null ? _ref2 : latestVersion; // Mobile is handled a bit differently

  const dropdownLabel = mobile ? 'Versions' : dropdownVersion.label;
  const dropdownTo = mobile ? undefined : getVersionMainDoc(dropdownVersion).path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({}, props, {
    mobile: mobile,
    label: dropdownLabel,
    to: dropdownTo,
    items: getItems(),
    isActive: dropdownActiveClassDisabled ? () => false : undefined
  }));
}

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocNavbarItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(274);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(275);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function DocNavbarItem(_ref) {
  var _ref2;

  let {
    docId,
    activeSidebarClassName,
    label: staticLabel,
    docsPluginId
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["docId", "activeSidebarClassName", "label", "docsPluginId"]);

  const {
    activeVersion,
    activeDoc
  } = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useActiveDocContext"])(docsPluginId);
  const {
    preferredVersion
  } = Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__["useDocsPreferredVersion"])(docsPluginId);
  const latestVersion = Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__["useLatestVersion"])(docsPluginId);
  const version = (_ref2 = activeVersion != null ? activeVersion : preferredVersion) != null ? _ref2 : latestVersion;
  const doc = version.docs.find(versionDoc => versionDoc.id === docId);

  if (!doc) {
    throw new Error(`DocNavbarItem: couldn't find any doc with id=${docId} in version ${version.name}.
Available docIds=\n- ${version.docs.join('\n- ')}`);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
    exact: true
  }, props, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(props.className, {
      [activeSidebarClassName]: activeDoc && activeDoc.sidebar === doc.sidebar
    }),
    label: staticLabel != null ? staticLabel : doc.id,
    to: doc.path
  }));
}

/***/ }),

/***/ 363:
/***/ (function(module, exports) {



/***/ }),

/***/ 364:
/***/ (function(module, exports) {



/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(353);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Page Not Found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "container margin-vert--xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "hero__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VEb2NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy91c2VCYXNlVXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9JbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvVHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9MaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vRGVmYXVsdE5hdmJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL2lzSW50ZXJuYWxVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvdXNlVGhlbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL0RvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVXNlclByZWZlcmVuY2VzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZVRoZW1lQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VBbHRlcm5hdGVQYWdlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvc2VhcmNoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9wbHVnaW4tY29udGVudC1kb2NzL2xpYi90aGVtZS9ob29rcy91c2VEb2NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy91c2VHbG9iYWxEYXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvcGx1Z2luLWNvbnRlbnQtZG9jcy9saWIvY2xpZW50L2RvY3NDbGllbnRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9wYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZ2VuZXJhbFV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3VzZVBsdXJhbEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1Nlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UaGVtZWRJbWFnZS9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UaGVtZWRJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VTY3JvbGxQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VMb2NrQm9keVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xvZ28vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvSWNvbk1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvU2tpcFRvQ29udGVudC9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Ta2lwVG9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0Fubm91bmNlbWVudEJhci9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Bbm5vdW5jZW1lbnRCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL05vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1RvZ2dsZS9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Ub2dnbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlSGlkZWFibGVOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvSWNvbkxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vTG9jYWxlRHJvcGRvd25OYXZiYXJJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFySXRlbS9TZWFyY2hOYXZiYXJJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFyL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Gb290ZXIvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1RoZW1lUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlVGFiR3JvdXBDaG9pY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlQW5ub3VuY2VtZW50QmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1VzZXJQcmVmZXJlbmNlc1Byb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xheW91dFByb3ZpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9TZWFyY2hNZXRhZGF0YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTGF5b3V0SGVhZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VLZXlib2FyZE5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10b2dnbGUvZGlzdC9jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvZ2dsZS9kaXN0L2NvbXBvbmVudC9jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9nZ2xlL2Rpc3QvY29tcG9uZW50L3guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvZ2dsZS9kaXN0L2NvbXBvbmVudC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vRG9jc1ZlcnNpb25OYXZiYXJJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhckl0ZW0vRG9jc1ZlcnNpb25Ecm9wZG93bk5hdmJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFySXRlbS9Eb2NOYXZiYXJJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05vdEZvdW5kLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidXNlVGhlbWVDb25maWdfMSIsInJlcXVpcmUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwidXNlVGhlbWVDb25maWciLCJ1c2VBbHRlcm5hdGVQYWdlVXRpbHNfMSIsInVzZUFsdGVybmF0ZVBhZ2VVdGlscyIsInNlYXJjaFV0aWxzXzEiLCJkb2NWZXJzaW9uU2VhcmNoVGFnIiwiREVGQVVMVF9TRUFSQ0hfVEFHIiwiZG9jc1V0aWxzXzEiLCJpc0RvY3NQbHVnaW5FbmFibGVkIiwicGF0aFV0aWxzXzEiLCJpc1NhbWVQYXRoIiwiZ2VuZXJhbFV0aWxzXzEiLCJ1c2VUaXRsZUZvcm1hdHRlciIsInVzZVBsdXJhbEZvcm1fMSIsInVzZVBsdXJhbEZvcm0iLCJ1c2VEb2NzUHJlZmVycmVkVmVyc2lvbl8xIiwidXNlRG9jc1ByZWZlcnJlZFZlcnNpb24iLCJ1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQiLCJEb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyXzEiLCJEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlciIsIm1vZHVsZSIsImUiLCJFbXB0eSIsInVzZUFsbERvY3NEYXRhIiwidXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiIsInVuZGVmaW5lZCIsImFkZEJhc2VVcmwiLCJzaXRlVXJsIiwiYmFzZVVybCIsInVybCIsImZvcmNlUHJlcGVuZEJhc2VVcmwiLCJhYnNvbHV0ZSIsInN0YXJ0c1dpdGgiLCJoYXNQcm90b2NvbCIsInNob3VsZEFkZEJhc2VVcmwiLCJiYXNlUGF0aCIsInJlcGxhY2UiLCJ1c2VCYXNlVXJsVXRpbHMiLCJzaXRlQ29uZmlnIiwidXNlRG9jdXNhdXJ1c0NvbnRleHQiLCJ3aXRoQmFzZVVybCIsIm9wdGlvbnMiLCJ1c2VCYXNlVXJsIiwiVmFsdWVSZWdleHAiLCJWYWx1ZUZvdW5kTWFya2VyIiwiaW50ZXJwb2xhdGUiLCJ0ZXh0IiwidmFsdWVzIiwiZWxlbWVudHMiLCJwcm9jZXNzZWRUZXh0IiwibWF0Y2giLCJrZXkiLCJzdWJzdHIiLCJsZW5ndGgiLCJlbGVtZW50IiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsIlN0cmluZyIsInB1c2giLCJldmVyeSIsImVsIiwic3BsaXQiLCJyZWR1Y2UiLCJzdHIiLCJpbmRleCIsIl9hIiwiY29uY2F0IiwiYXJyYXkiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbnRlcnBvbGF0ZSIsImNoaWxkcmVuIiwiZ2V0TG9jYWxpemVkTWVzc2FnZSIsImlkIiwibWVzc2FnZSIsImNvZGVUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJsb2NhbGl6ZWRNZXNzYWdlIiwiVHJhbnNsYXRlIiwiX19yZXN0IiwicyIsInQiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInNob3VsZEFkZEJhc2VVcmxBdXRvbWF0aWNhbGx5IiwidG8iLCJMaW5rIiwiX2IiLCJpc05hdkxpbmsiLCJocmVmIiwiYWN0aXZlQ2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJub0Jyb2tlbkxpbmtDaGVjayIsImF1dG9BZGRCYXNlVXJsIiwicHJvcHMiLCJsaW5rc0NvbGxlY3RvciIsInVzZUxpbmtzQ29sbGVjdG9yIiwidGFyZ2V0TGlua1VucHJlZml4ZWQiLCJtYXliZUFkZEJhc2VVcmwiLCJpc0ludGVybmFsIiwiaXNJbnRlcm5hbFVybCIsInRhcmdldExpbmtXaXRob3V0UGF0aG5hbWVQcm90b2NvbCIsInRhcmdldExpbmsiLCJwcmVsb2FkZWQiLCJ1c2VSZWYiLCJMaW5rQ29tcG9uZW50IiwiTmF2TGluayIsIlJSTGluayIsIklPU3VwcG9ydGVkIiwiRXhlY3V0aW9uRW52aXJvbm1lbnQiLCJjYW5Vc2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlvIiwiaGFuZGxlSW50ZXJzZWN0aW9uIiwiY2IiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJoYW5kbGVSZWYiLCJyZWYiLCJkb2N1c2F1cnVzIiwicHJlZmV0Y2giLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50IiwicHJlbG9hZCIsInVzZUVmZmVjdCIsImlzQW5jaG9yTGluayIsImlzUmVndWxhckh0bWxMaW5rIiwiY29sbGVjdExpbmsiLCJhc3NpZ24iLCJyZWwiLCJpbm5lclJlZiIsImFjdGl2ZUJhc2VQYXRoIiwiYWN0aXZlQmFzZVJlZ2V4IiwibGFiZWwiLCJwcmVwZW5kQmFzZVVybFRvSHJlZiIsInRvVXJsIiwiYWN0aXZlQmFzZVVybCIsIm5vcm1hbGl6ZWRIcmVmIiwiX21hdGNoIiwibG9jYXRpb24iLCJSZWdFeHAiLCJ0ZXN0IiwicGF0aG5hbWUiLCJOYXZJdGVtRGVza3RvcCIsIml0ZW1zIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJkcm9wZG93blJlZiIsImRyb3Bkb3duTWVudVJlZiIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsInVzZVN0YXRlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZMaW5rQ2xhc3NOYW1lcyIsImV4dHJhQ2xhc3NOYW1lIiwiaXNEcm9wZG93bkl0ZW0iLCJjbHN4IiwiZHJvcGRvd25fX2xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsImNoaWxkSXRlbUNsYXNzTmFtZSIsImNoaWxkSXRlbVByb3BzIiwibmV4dE5hdmJhckl0ZW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1cyIsIk5hdkl0ZW1Nb2JpbGUiLCJtZW51TGlzdFJlZiIsInVzZUxvY2F0aW9uIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwic29tZSIsIml0ZW0iLCJpc1N1Ykxpc3QiLCJtZW51TGlzdEhlaWdodCIsInNjcm9sbEhlaWdodCIsInN0YXRlIiwiaGVpZ2h0Iiwib25DbGljayIsIkRlZmF1bHROYXZiYXJJdGVtIiwibW9iaWxlIiwiQ29tcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJ1c2VEb2N1c2F1cnVzQ29udGV4dF8xIiwiZGVmYXVsdCIsInRoZW1lQ29uZmlnIiwidXNlRG9jc18xIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJfX3NldE1vZHVsZURlZmF1bHQiLCJ2IiwiX19pbXBvcnRTdGFyIiwicmVzdWx0IiwidXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0IiwicmVhY3RfMSIsIkRvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xIiwiZ2V0SW5pdGlhbFN0YXRlIiwicGx1Z2luSWRzIiwiaW5pdGlhbFN0YXRlIiwicGx1Z2luSWQiLCJwcmVmZXJyZWRWZXJzaW9uTmFtZSIsInJlYWRTdG9yYWdlU3RhdGUiLCJ2ZXJzaW9uUGVyc2lzdGVuY2UiLCJhbGxEb2NzRGF0YSIsInJlc3RvcmVQbHVnaW5TdGF0ZSIsInByZWZlcnJlZFZlcnNpb25OYW1lVW5zYWZlIiwicmVhZCIsInBsdWdpbkRhdGEiLCJ2ZXJzaW9uRXhpc3RzIiwidmVyc2lvbnMiLCJ2ZXJzaW9uIiwibmFtZSIsImNsZWFyIiwidXNlVmVyc2lvblBlcnNpc3RlbmNlIiwiZG9jcyIsInVzZUNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJrZXlzIiwic2V0U3RhdGUiLCJhcGkiLCJzYXZlUHJlZmVycmVkVmVyc2lvbiIsInZlcnNpb25OYW1lIiwic2F2ZSIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInVzZUNvbnRleHQiLCJFcnJvciIsIlVzZXJQcmVmZXJlbmNlc0NvbnRleHQiLCJ1c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0IiwiY29udGV4dCIsInVzZVRoZW1lQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInJvdXRlcl8xIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJjdXJyZW50TG9jYWxlIiwiYmFzZVVybFVubG9jYWxpemVkIiwicGF0aG5hbWVTdWZmaXgiLCJnZXRMb2NhbGl6ZWRCYXNlVXJsIiwibG9jYWxlIiwiY3JlYXRlVXJsIiwiZnVsbHlRdWFsaWZpZWQiLCJ1c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMiLCJ1c2VBY3RpdmVEb2NDb250ZXh0IiwidXNlQWN0aXZlVmVyc2lvbiIsInVzZUxhdGVzdFZlcnNpb24iLCJ1c2VWZXJzaW9ucyIsInVzZUFjdGl2ZVBsdWdpbiIsInVzZURvY3NEYXRhIiwidXNlR2xvYmFsRGF0YV8xIiwiZG9jc0NsaWVudFV0aWxzXzEiLCJ1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhIiwidXNlUGx1Z2luRGF0YSIsImRhdGEiLCJnZXRBY3RpdmVQbHVnaW4iLCJhY3RpdmVQbHVnaW4iLCJhY3RpdmVWZXJzaW9uIiwiZ2V0QWN0aXZlVmVyc2lvbiIsImdldExhdGVzdFZlcnNpb24iLCJnZXRBY3RpdmVEb2NDb250ZXh0IiwiZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zIiwiREVGQVVMVF9QTFVHSU5fSUQiLCJ1c2VHbG9iYWxEYXRhIiwiZ2xvYmFsRGF0YSIsInBsdWdpbk5hbWUiLCJwbHVnaW5HbG9iYWxEYXRhIiwicGx1Z2luSW5zdGFuY2VHbG9iYWxEYXRhIiwiYWxsUGx1Z2luRGF0YXMiLCJhY3RpdmVFbnRyeSIsImZpbmQiLCJfaWQiLCJtYXRjaFBhdGgiLCJwYXRoIiwiZXhhY3QiLCJzdHJpY3QiLCJmYWlsZmFzdCIsInBsdWdpbiIsImpvaW4iLCJpc0xhc3QiLCJsYXN0VmVyc2lvbiIsIm9yZGVyZWRWZXJzaW9uc01ldGFkYXRhIiwiZmlsdGVyIiwiYWN0aXZlRG9jIiwiZG9jIiwiZ2V0QWx0ZXJuYXRlVmVyc2lvbkRvY3MiLCJkb2NJZCIsImFsdGVybmF0ZVZlcnNpb25Eb2NzIiwiYWx0ZXJuYXRlRG9jVmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiYWN0aXZlRG9jQ29udGV4dCIsImlzTm90T25MYXRlc3RWZXJzaW9uIiwibGF0ZXN0RG9jU3VnZ2VzdGlvbiIsImxhdGVzdFZlcnNpb25TdWdnZXN0aW9uIiwicGF0aDEiLCJwYXRoMiIsIm5vcm1hbGl6ZSIsImVuZHNXaXRoIiwidGl0bGUiLCJzaXRlVGl0bGUiLCJ0aXRsZURlbGltaXRlciIsInRyaW0iLCJPcmRlcmVkUGx1cmFsRm9ybXMiLCJzb3J0UGx1cmFsRm9ybXMiLCJwbHVyYWxGb3JtcyIsInBmIiwiaW5jbHVkZXMiLCJFbmdsaXNoUGx1cmFsRm9ybXMiLCJzZWxlY3QiLCJjb3VudCIsImNyZWF0ZUxvY2FsZVBsdXJhbEZvcm1zIiwicGx1cmFsUnVsZXMiLCJJbnRsIiwiUGx1cmFsUnVsZXMiLCJyZXNvbHZlZE9wdGlvbnMiLCJwbHVyYWxDYXRlZ29yaWVzIiwidXNlTG9jYWxlUGx1cmFsRm9ybXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzZWxlY3RQbHVyYWxNZXNzYWdlIiwicGx1cmFsTWVzc2FnZXMiLCJsb2NhbGVQbHVyYWxGb3JtcyIsInNlcGFyYXRvciIsInBhcnRzIiwicGx1cmFsRm9ybSIsInBsdXJhbEZvcm1JbmRleCIsIk1hdGgiLCJtaW4iLCJsb2NhbGVQbHVyYWxGb3JtIiwic2VsZWN0TWVzc2FnZSIsImNvbnN0YW50c18xIiwiZG9jc0RhdGEiLCJwcmVmZXJyZWRWZXJzaW9uIiwic2F2ZVByZWZlcnJlZFZlcnNpb25OYW1lIiwidXNlQ2FsbGJhY2siLCJnZXRQbHVnaW5JZFByZWZlcnJlZFZlcnNpb24iLCJzdG9yYWdlS2V5IiwiRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlIiwicGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJTZW8iLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiaW1hZ2UiLCJtZXRhVGl0bGUiLCJtZXRhSW1hZ2VVcmwiLCJBcnJheSIsImlzQXJyYXkiLCJUaGVtZWRJbWFnZSIsImlzQ2xpZW50IiwiaXNEYXJrVGhlbWUiLCJzb3VyY2VzIiwiYWx0IiwicHJvcHNSZXN0IiwicmVuZGVyZWRTb3VyY2VOYW1lcyIsInNvdXJjZU5hbWUiLCJzdHlsZXMiLCJ0aGVtZWRJbWFnZSIsImdldFNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsWCIsImNhblVzZURPTSIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidXNlU2Nyb2xsUG9zaXRpb24iLCJlZmZlY3QiLCJkZXBzIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxQb3NpdGlvbiIsIm9wdHMiLCJwYXNzaXZlIiwidXNlTG9ja0JvZHlTY3JvbGwiLCJsb2NrIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJkZXNrdG9wVGhyZXNob2xkV2lkdGgiLCJ3aW5kb3dTaXplcyIsImRlc2t0b3AiLCJ1c2VXaW5kb3dTaXplIiwiZ2V0U2l6ZSIsImlubmVyV2lkdGgiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsIkxvZ28iLCJuYXZiYXIiLCJsb2dvIiwic3JjIiwiaW1hZ2VDbGFzc05hbWUiLCJ0aXRsZUNsYXNzTmFtZSIsImxvZ29MaW5rIiwibGlnaHQiLCJkYXJrIiwic3JjRGFyayIsIkljb25NZW51Iiwid2lkdGgiLCJyZXN0UHJvcHMiLCJwcm9ncmFtbWF0aWNGb2N1cyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlNraXBUb0NvbnRlbnQiLCJjb250YWluZXJSZWYiLCJoYW5kbGVTa2lwIiwidGFyZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNoIiwic2tpcFRvQ29udGVudCIsIkFubm91bmNlbWVudEJhciIsImlzQW5ub3VuY2VtZW50QmFyQ2xvc2VkIiwiY2xvc2VBbm5vdW5jZW1lbnRCYXIiLCJhbm5vdW5jZW1lbnRCYXIiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiaXNDbG9zZWFibGUiLCJjb2xvciIsImFubm91bmNlbWVudEJhckNvbnRlbnQiLCJhbm5vdW5jZW1lbnRCYXJDbG9zZWFibGUiLCJfX2h0bWwiLCJhbm5vdW5jZW1lbnRCYXJDbG9zZSIsIkRhcmsiLCJpY29uIiwidG9nZ2xlIiwiTGlnaHQiLCJjb2xvck1vZGUiLCJzd2l0Y2hDb25maWciLCJkYXJrSWNvbiIsImRhcmtJY29uU3R5bGUiLCJsaWdodEljb24iLCJsaWdodEljb25TdHlsZSIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJ1c2VIaWRlYWJsZU5hdmJhciIsImhpZGVPblNjcm9sbCIsImlzTmF2YmFyVmlzaWJsZSIsInNldElzTmF2YmFyVmlzaWJsZSIsImlzRm9jdXNlZEFuY2hvciIsImxhc3RTY3JvbGxUb3AiLCJzZXRMYXN0U2Nyb2xsVG9wIiwibmF2YmFySGVpZ2h0Iiwic2V0TmF2YmFySGVpZ2h0IiwibmF2YmFyUmVmIiwibm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFRvcCIsImRvY3VtZW50SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJJY29uTGFuZ3VhZ2UiLCJMb2NhbGVEcm9wZG93bk5hdmJhckl0ZW0iLCJkcm9wZG93bkl0ZW1zQmVmb3JlIiwiZHJvcGRvd25JdGVtc0FmdGVyIiwibG9jYWxlcyIsImxvY2FsZUNvbmZpZ3MiLCJhbHRlcm5hdGVQYWdlVXRpbHMiLCJnZXRMb2NhbGVMYWJlbCIsImxvY2FsZUl0ZW1zIiwiZHJvcGRvd25MYWJlbCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5SaWdodCIsIlNlYXJjaE5hdmJhckl0ZW0iLCJzZWFyY2hXcmFwcGVyIiwiTmF2YmFySXRlbUNvbXBvbmVudHMiLCJsb2NhbGVEcm9wZG93biIsInNlYXJjaCIsImRvY3NWZXJzaW9uIiwiZG9jc1ZlcnNpb25Ecm9wZG93biIsImdldE5hdmJhckl0ZW1Db21wb25lbnQiLCJ0eXBlIiwibmF2YmFySXRlbUNvbXBvbmVudCIsIk5hdmJhckl0ZW0iLCJOYXZiYXJJdGVtQ29tcG9uZW50IiwiRGVmYXVsdE5hdkl0ZW1Qb3NpdGlvbiIsInNwbGl0TmF2SXRlbXNCeVBvc2l0aW9uIiwibGVmdEl0ZW1zIiwicmlnaHRJdGVtcyIsIk5hdmJhciIsImRpc2FibGVTd2l0Y2giLCJkaXNhYmxlQ29sb3JNb2RlU3dpdGNoIiwic2lkZWJhclNob3duIiwic2V0U2lkZWJhclNob3duIiwic2V0TGlnaHRUaGVtZSIsInNldERhcmtUaGVtZSIsInNob3dTaWRlYmFyIiwiaGlkZVNpZGViYXIiLCJvblRvZ2dsZUNoYW5nZSIsImhhc1NlYXJjaE5hdmJhckl0ZW0iLCJuYXZiYXJIaWRlYWJsZSIsIm5hdmJhckhpZGRlbiIsImRpc3BsYXlPbmx5SW5MYXJnZVZpZXdwb3J0IiwiRm9vdGVyTGluayIsIkZvb3RlckxvZ28iLCJGb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJsaW5rcyIsImxpbmtJdGVtIiwiaHRtbCIsImZvb3RlckxvZ29MaW5rIiwidGhlbWVzIiwiY29lcmNlVG9UaGVtZSIsInRoZW1lIiwiZ2V0SW5pdGlhbFRoZW1lIiwiZGVmYXVsdE1vZGUiLCJnZXRBdHRyaWJ1dGUiLCJzdG9yZVRoZW1lIiwibmV3VGhlbWUiLCJlcnIiLCJ1c2VUaGVtZSIsInJlc3BlY3RQcmVmZXJzQ29sb3JTY2hlbWUiLCJzZXRUaGVtZSIsImxvY2FsU3RvcmFnZVRoZW1lIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwibWF0Y2hlcyIsIlRoZW1lUHJvdmlkZXIiLCJUQUJfQ0hPSUNFX1BSRUZJWCIsInVzZVRhYkdyb3VwQ2hvaWNlIiwidGFiR3JvdXBDaG9pY2VzIiwic2V0Q2hvaWNlcyIsInNldENob2ljZVN5bmNXaXRoTG9jYWxTdG9yYWdlIiwiZ3JvdXBJZCIsIm5ld0Nob2ljZSIsImxvY2FsU3RvcmFnZUNob2ljZXMiLCJzdWJzdHJpbmciLCJzZXRUYWJHcm91cENob2ljZXMiLCJvbGRDaG9pY2VzIiwiU1RPUkFHRV9ESVNNSVNTX0tFWSIsIlNUT1JBR0VfSURfS0VZIiwidXNlQW5ub3VuY2VtZW50QmFyIiwiaXNDbG9zZWQiLCJzZXRDbG9zZWQiLCJoYW5kbGVDbG9zZSIsInZpZXdlZElkIiwiaXNOZXdBbm5vdW5jZW1lbnQiLCJVc2VyUHJlZmVyZW5jZXNQcm92aWRlciIsIkxheW91dFByb3ZpZGVycyIsIlNlYXJjaE1ldGFkYXRhcyIsInRhZyIsIkFsdGVybmF0ZUxhbmdIZWFkZXJzIiwidXNlRGVmYXVsdENhbm9uaWNhbFVybCIsIkNhbm9uaWNhbFVybEhlYWRlcnMiLCJwZXJtYWxpbmsiLCJkZWZhdWx0Q2Fub25pY2FsVXJsIiwiY2Fub25pY2FsVXJsIiwiTGF5b3V0SGVhZCIsImZhdmljb24iLCJkZWZhdWx0SW1hZ2UiLCJtZXRhZGF0YXMiLCJzZWFyY2hNZXRhZGF0YXMiLCJmYXZpY29uVXJsIiwiaHRtbExhbmciLCJodG1sRGlyIiwiZGlyZWN0aW9uIiwibWV0YWRhdGEiLCJ1c2VLZXlib2FyZE5hdmlnYXRpb24iLCJrZXlib2FyZEZvY3VzZWRDbGFzc05hbWUiLCJoYW5kbGVPdXRsaW5lU3R5bGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiTGF5b3V0Iiwibm9Gb290ZXIiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZ2V0VmVyc2lvbk1haW5Eb2MiLCJtYWluRG9jSWQiLCJEb2NzVmVyc2lvbk5hdmJhckl0ZW0iLCJzdGF0aWNMYWJlbCIsInN0YXRpY1RvIiwiZG9jc1BsdWdpbklkIiwiRG9jc1ZlcnNpb25Ecm9wZG93bk5hdmJhckl0ZW0iLCJkcm9wZG93bkFjdGl2ZUNsYXNzRGlzYWJsZWQiLCJnZXRJdGVtcyIsInZlcnNpb25MaW5rcyIsInZlcnNpb25Eb2MiLCJkcm9wZG93blZlcnNpb24iLCJkcm9wZG93blRvIiwiRG9jTmF2YmFySXRlbSIsImFjdGl2ZVNpZGViYXJDbGFzc05hbWUiLCJzaWRlYmFyIiwiTm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7O0FDdkNZO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLElBQUlDLGdCQUFnQixHQUFHQyxtQkFBTyxDQUFDLEdBQUQsQ0FBOUI7O0FBQ0FMLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsZ0JBQS9CLEVBQWlEO0FBQUVJLFlBQVUsRUFBRSxJQUFkO0FBQW9CQyxLQUFHLEVBQUUsWUFBWTtBQUFFLFdBQU9ILGdCQUFnQixDQUFDSSxjQUF4QjtBQUF5QztBQUFoRixDQUFqRDs7QUFDQSxJQUFJQyx1QkFBdUIsR0FBR0osbUJBQU8sQ0FBQyxHQUFELENBQXJDOztBQUNBTCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLHVCQUEvQixFQUF3RDtBQUFFSSxZQUFVLEVBQUUsSUFBZDtBQUFvQkMsS0FBRyxFQUFFLFlBQVk7QUFBRSxXQUFPRSx1QkFBdUIsQ0FBQ0MscUJBQS9CO0FBQXVEO0FBQTlGLENBQXhEOztBQUNBLElBQUlDLGFBQWEsR0FBR04sbUJBQU8sQ0FBQyxHQUFELENBQTNCOztBQUNBTCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLHFCQUEvQixFQUFzRDtBQUFFSSxZQUFVLEVBQUUsSUFBZDtBQUFvQkMsS0FBRyxFQUFFLFlBQVk7QUFBRSxXQUFPSSxhQUFhLENBQUNDLG1CQUFyQjtBQUEyQztBQUFsRixDQUF0RDtBQUNBWixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLG9CQUEvQixFQUFxRDtBQUFFSSxZQUFVLEVBQUUsSUFBZDtBQUFvQkMsS0FBRyxFQUFFLFlBQVk7QUFBRSxXQUFPSSxhQUFhLENBQUNFLGtCQUFyQjtBQUEwQztBQUFqRixDQUFyRDs7QUFDQSxJQUFJQyxXQUFXLEdBQUdULG1CQUFPLENBQUMsR0FBRCxDQUF6Qjs7QUFDQUwsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixxQkFBL0IsRUFBc0Q7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT08sV0FBVyxDQUFDQyxtQkFBbkI7QUFBeUM7QUFBaEYsQ0FBdEQ7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHWCxtQkFBTyxDQUFDLEdBQUQsQ0FBekI7O0FBQ0FMLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT1MsV0FBVyxDQUFDQyxVQUFuQjtBQUFnQztBQUF2RSxDQUE3Qzs7QUFDQSxJQUFJQyxjQUFjLEdBQUdiLG1CQUFPLENBQUMsR0FBRCxDQUE1Qjs7QUFDQUwsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixtQkFBL0IsRUFBb0Q7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT1csY0FBYyxDQUFDQyxpQkFBdEI7QUFBMEM7QUFBakYsQ0FBcEQ7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHZixtQkFBTyxDQUFDLEdBQUQsQ0FBN0I7O0FBQ0FMLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsZUFBL0IsRUFBZ0Q7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT2EsZUFBZSxDQUFDQyxhQUF2QjtBQUF1QztBQUE5RSxDQUFoRDs7QUFDQSxJQUFJQyx5QkFBeUIsR0FBR2pCLG1CQUFPLENBQUMsR0FBRCxDQUF2Qzs7QUFDQUwsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQix5QkFBL0IsRUFBMEQ7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT2UseUJBQXlCLENBQUNDLHVCQUFqQztBQUEyRDtBQUFsRyxDQUExRDtBQUNBdkIsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixtQ0FBL0IsRUFBb0U7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT2UseUJBQXlCLENBQUNFLGlDQUFqQztBQUFxRTtBQUE1RyxDQUFwRTs7QUFDQSxJQUFJQyw4QkFBOEIsR0FBR3BCLG1CQUFPLENBQUMsR0FBRCxDQUE1Qzs7QUFDQUwsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixxQ0FBL0IsRUFBc0U7QUFBRUksWUFBVSxFQUFFLElBQWQ7QUFBb0JDLEtBQUcsRUFBRSxZQUFZO0FBQUUsV0FBT2tCLDhCQUE4QixDQUFDQyxtQ0FBdEM7QUFBNEU7QUFBbkgsQ0FBdEUsRTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNGQyxRQUFNLENBQUN6QixPQUFQLEdBQWlCRyxtQkFBTyxDQUFDLEdBQUQsQ0FBeEI7QUFDRCxDQUZELENBRUUsT0FBT3VCLENBQVAsRUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBRixRQUFNLENBQUN6QixPQUFQLEdBQWlCO0FBQ2Y0QixrQkFBYyxFQUFFLE1BQU1ELEtBRFA7QUFFZkUsNkJBQXlCLEVBQUUsTUFBTUM7QUFGbEIsR0FBakI7QUFJRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCQyxPQUE3QixFQUFzQ0MsR0FBdEMsRUFBMkM7QUFBRUMscUJBQW1CLEdBQUcsS0FBeEI7QUFBK0JDLFVBQVEsR0FBRztBQUExQyxJQUFvRCxFQUEvRixFQUFtRztBQUMvRixNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNOLFdBQU9BLEdBQVA7QUFDSCxHQUg4RixDQUkvRjs7O0FBQ0EsTUFBSUEsR0FBRyxDQUFDRyxVQUFKLENBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLFdBQU9ILEdBQVA7QUFDSCxHQVA4RixDQVEvRjs7O0FBQ0EsTUFBSUksMEVBQVcsQ0FBQ0osR0FBRCxDQUFmLEVBQXNCO0FBQ2xCLFdBQU9BLEdBQVA7QUFDSDs7QUFDRCxNQUFJQyxtQkFBSixFQUF5QjtBQUNyQixXQUFPRixPQUFPLEdBQUdDLEdBQWpCO0FBQ0gsR0FkOEYsQ0FlL0Y7OztBQUNBLFFBQU1LLGdCQUFnQixHQUFHLENBQUNMLEdBQUcsQ0FBQ0csVUFBSixDQUFlSixPQUFmLENBQTFCO0FBQ0EsUUFBTU8sUUFBUSxHQUFHRCxnQkFBZ0IsR0FBR04sT0FBTyxHQUFHQyxHQUFHLENBQUNPLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLENBQWIsR0FBc0NQLEdBQXZFO0FBQ0EsU0FBT0UsUUFBUSxHQUFHSixPQUFPLEdBQUdRLFFBQWIsR0FBd0JBLFFBQXZDO0FBQ0g7O0FBQ00sU0FBU0UsZUFBVCxHQUEyQjtBQUM5QixRQUFNO0FBQUVDLGNBQVUsRUFBRTtBQUFFVixhQUFPLEdBQUcsR0FBWjtBQUFpQkMsU0FBRyxFQUFFRjtBQUF0QixRQUFrQztBQUFoRCxNQUF3RFkscUVBQW9CLEVBQWxGO0FBQ0EsU0FBTztBQUNIQyxlQUFXLEVBQUUsQ0FBQ1gsR0FBRCxFQUFNWSxPQUFOLEtBQWtCO0FBQzNCLGFBQU9mLFVBQVUsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQW1CQyxHQUFuQixFQUF3QlksT0FBeEIsQ0FBakI7QUFDSDtBQUhFLEdBQVA7QUFLSDtBQUNjLFNBQVNDLFVBQVQsQ0FBb0JiLEdBQXBCLEVBQXlCWSxPQUFPLEdBQUcsRUFBbkMsRUFBdUM7QUFDbEQsUUFBTTtBQUFFRDtBQUFGLE1BQWtCSCxlQUFlLEVBQXZDO0FBQ0EsU0FBT0csV0FBVyxDQUFDWCxHQUFELEVBQU1ZLE9BQU4sQ0FBbEI7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1FLFdBQVcsR0FBRyxRQUFwQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLElBQXpCLEMsQ0FBK0I7O0FBQ3hCLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxNQUEzQixFQUFtQztBQUN0QyxRQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxRQUFNQyxhQUFhLEdBQUdILElBQUksQ0FBQ1YsT0FBTCxDQUFhTyxXQUFiLEVBQTJCTyxLQUFELElBQVc7QUFDdkQ7QUFDQSxVQUFNQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhLENBQWIsRUFBZ0JGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQS9CLENBQVo7QUFDQSxVQUFNekQsS0FBSyxHQUFHbUQsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQ0ksR0FBRCxDQUFwRTs7QUFDQSxRQUFJLE9BQU92RCxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQzlCLFlBQU0wRCxPQUFPLEdBQUcsYUFBQUMsZUFBSyxDQUFDQyxjQUFOLENBQXFCNUQsS0FBckIsSUFDVkEsS0FEVSxHQUVWO0FBQ0U2RCxZQUFNLENBQUM3RCxLQUFELENBSGQ7QUFJQW9ELGNBQVEsQ0FBQ1UsSUFBVCxDQUFjSixPQUFkO0FBQ0EsYUFBT1YsZ0JBQVA7QUFDSCxLQVBELE1BUUs7QUFDRCxhQUFPTSxLQUFQLENBREMsQ0FDYTtBQUNqQjtBQUNKLEdBZnFCLENBQXRCLENBRnNDLENBa0J0Qzs7QUFDQSxNQUFJRixRQUFRLENBQUNLLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsV0FBT1AsSUFBUDtBQUNILEdBRkQsQ0FHQTtBQUhBLE9BSUssSUFBSUUsUUFBUSxDQUFDVyxLQUFULENBQWdCQyxFQUFELElBQVEsT0FBT0EsRUFBUCxLQUFjLFFBQXJDLENBQUosRUFBb0Q7QUFDckQsYUFBT1gsYUFBYSxDQUNmWSxLQURFLENBQ0lqQixnQkFESixFQUVGa0IsTUFGRSxDQUVLLENBQUNDLEdBQUQsRUFBTW5FLEtBQU4sRUFBYW9FLEtBQWIsS0FBdUI7QUFDL0IsWUFBSUMsRUFBSjs7QUFDQSxlQUFPRixHQUFHLENBQUNHLE1BQUosQ0FBV3RFLEtBQVgsRUFBa0JzRSxNQUFsQixDQUF5QixDQUFDRCxFQUFFLEdBQUdqQixRQUFRLENBQUNnQixLQUFELENBQWQsTUFBMkIsSUFBM0IsSUFBbUNDLEVBQUUsS0FBSyxLQUFLLENBQS9DLEdBQW1EQSxFQUFuRCxHQUF3RCxFQUFqRixDQUFQO0FBQ0gsT0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1ILEtBUEksQ0FRTDtBQVJLLFNBU0E7QUFDRCxlQUFPaEIsYUFBYSxDQUNmWSxLQURFLENBQ0lqQixnQkFESixFQUVGa0IsTUFGRSxDQUVLLENBQUNLLEtBQUQsRUFBUXZFLEtBQVIsRUFBZW9FLEtBQWYsS0FBeUI7QUFDakMsaUJBQU8sQ0FDSCxHQUFHRyxLQURBLGVBRUhaLGVBQUssQ0FBQ2EsYUFBTixDQUFvQmIsZUFBSyxDQUFDYyxRQUExQixFQUFvQztBQUFFbEIsZUFBRyxFQUFFYTtBQUFQLFdBQXBDLEVBQ0lwRSxLQURKLEVBRUlvRCxRQUFRLENBQUNnQixLQUFELENBRlosQ0FGRyxDQUFQO0FBTUgsU0FUTSxFQVNKLEVBVEksQ0FBUDtBQVVIO0FBQ0o7QUFDYyxTQUFTTSxXQUFULENBQXFCO0FBQUVDLFVBQUY7QUFBWXhCO0FBQVosQ0FBckIsRUFBNEM7QUFDdkQsU0FBT0YsV0FBVyxDQUFDMEIsUUFBRCxFQUFXeEIsTUFBWCxDQUFsQjtBQUNILEM7Ozs7O0FDN0REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU3lCLG1CQUFULENBQTZCO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUE3QixFQUErQztBQUMzQyxNQUFJVCxFQUFKOztBQUNBLFNBQU8sQ0FBQ0EsRUFBRSxHQUFHVSxnQkFBZ0IsQ0FBQ0YsRUFBRSxLQUFLLElBQVAsSUFBZUEsRUFBRSxLQUFLLEtBQUssQ0FBM0IsR0FBK0JBLEVBQS9CLEdBQW9DQyxPQUFyQyxDQUF0QixNQUF5RSxJQUF6RSxJQUFpRlQsRUFBRSxLQUFLLEtBQUssQ0FBN0YsR0FBaUdBLEVBQWpHLEdBQXNHUyxPQUE3RztBQUNILEMsQ0FDRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFNBQVQsQ0FBbUI7QUFBRUYsU0FBRjtBQUFXRDtBQUFYLENBQW5CLEVBQW9DMUIsTUFBcEMsRUFBNEM7QUFDL0MsTUFBSWtCLEVBQUo7O0FBQ0EsUUFBTVksZ0JBQWdCLEdBQUcsQ0FBQ1osRUFBRSxHQUFHTyxtQkFBbUIsQ0FBQztBQUFFRSxXQUFGO0FBQVdEO0FBQVgsR0FBRCxDQUF6QixNQUFnRCxJQUFoRCxJQUF3RFIsRUFBRSxLQUFLLEtBQUssQ0FBcEUsR0FBd0VBLEVBQXhFLEdBQTZFUyxPQUF0RztBQUNBLFNBQU83QixXQUFXLENBQUNnQyxnQkFBRCxFQUFtQjlCLE1BQW5CLENBQWxCO0FBQ0gsQyxDQUNEO0FBQ0E7O0FBQ2UsU0FBUytCLFNBQVQsQ0FBbUI7QUFBRVAsVUFBRjtBQUFZRSxJQUFaO0FBQWdCMUI7QUFBaEIsQ0FBbkIsRUFBOEM7QUFDekQsTUFBSWtCLEVBQUo7O0FBQ0EsUUFBTVksZ0JBQWdCLEdBQUcsQ0FBQ1osRUFBRSxHQUFHTyxtQkFBbUIsQ0FBQztBQUFFRSxXQUFPLEVBQUVILFFBQVg7QUFBcUJFO0FBQXJCLEdBQUQsQ0FBekIsTUFBMEQsSUFBMUQsSUFBa0VSLEVBQUUsS0FBSyxLQUFLLENBQTlFLEdBQWtGQSxFQUFsRixHQUF1Rk0sUUFBaEg7QUFDQSxzQkFBT2hCLGVBQUssQ0FBQ2EsYUFBTixDQUFvQkUsV0FBcEIsRUFBaUM7QUFBRXZCLFVBQU0sRUFBRUE7QUFBVixHQUFqQyxFQUFxRDhCLGdCQUFyRCxDQUFQO0FBQ0gsQzs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJRSxNQUFNLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsTUFBZCxJQUF5QixVQUFVQyxDQUFWLEVBQWEzRCxDQUFiLEVBQWdCO0FBQ2xELE1BQUk0RCxDQUFDLEdBQUcsRUFBUjs7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY0YsQ0FBZCxFQUFpQixJQUFJdkYsTUFBTSxDQUFDMEYsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxDQUFyQyxFQUF3Q0UsQ0FBeEMsS0FBOEM3RCxDQUFDLENBQUNpRSxPQUFGLENBQVVKLENBQVYsSUFBZSxDQUFqRSxFQUNiRCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPRixDQUFDLENBQUNFLENBQUQsQ0FBUjs7QUFDSixNQUFJRixDQUFDLElBQUksSUFBTCxJQUFhLE9BQU92RixNQUFNLENBQUM4RixxQkFBZCxLQUF3QyxVQUF6RCxFQUNJLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV04sQ0FBQyxHQUFHekYsTUFBTSxDQUFDOEYscUJBQVAsQ0FBNkJQLENBQTdCLENBQXBCLEVBQXFEUSxDQUFDLEdBQUdOLENBQUMsQ0FBQzdCLE1BQTNELEVBQW1FbUMsQ0FBQyxFQUFwRSxFQUF3RTtBQUNwRSxRQUFJbkUsQ0FBQyxDQUFDaUUsT0FBRixDQUFVSixDQUFDLENBQUNNLENBQUQsQ0FBWCxJQUFrQixDQUFsQixJQUF1Qi9GLE1BQU0sQ0FBQzBGLFNBQVAsQ0FBaUJNLG9CQUFqQixDQUFzQ0osSUFBdEMsQ0FBMkNMLENBQTNDLEVBQThDRSxDQUFDLENBQUNNLENBQUQsQ0FBL0MsQ0FBM0IsRUFDSVAsQ0FBQyxDQUFDQyxDQUFDLENBQUNNLENBQUQsQ0FBRixDQUFELEdBQVVSLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDTSxDQUFELENBQUYsQ0FBWDtBQUNQO0FBQ0wsU0FBT1AsQ0FBUDtBQUNILENBVkQ7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTVMsNkJBQTZCLEdBQUlDLEVBQUQsSUFBUUEsRUFBRSxDQUFDM0QsVUFBSCxDQUFjLEdBQWQsQ0FBOUM7O0FBQ0EsU0FBUzRELElBQVQsQ0FBYzNCLEVBQWQsRUFBa0I7QUFDZCxNQUFJNEIsRUFBSjs7QUFDQSxNQUFJO0FBQUVDLGFBQUY7QUFBYUgsTUFBYjtBQUFpQkksUUFBakI7QUFBdUJDLG1CQUF2QjtBQUF3Q0MsWUFBeEM7QUFBa0QsOEJBQTBCQyxpQkFBNUU7QUFBK0ZDLGtCQUFjLEdBQUc7QUFBaEgsTUFBeUhsQyxFQUE3SDtBQUFBLE1BQWlJbUMsS0FBSyxHQUFHckIsTUFBTSxDQUFDZCxFQUFELEVBQUssQ0FBQyxXQUFELEVBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixpQkFBNUIsRUFBK0MsVUFBL0MsRUFBMkQsd0JBQTNELEVBQXFGLGdCQUFyRixDQUFMLENBQS9JOztBQUNBLFFBQU07QUFBRXpCO0FBQUYsTUFBa0JILDJFQUFlLEVBQXZDO0FBQ0EsUUFBTWdFLGNBQWMsR0FBR0MsaUZBQWlCLEVBQXhDLENBSmMsQ0FLZDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR1osRUFBRSxJQUFJSSxJQUFuQzs7QUFDQSxXQUFTUyxlQUFULENBQXlCekMsR0FBekIsRUFBOEI7QUFDMUIsV0FBT29DLGNBQWMsSUFBSVQsNkJBQTZCLENBQUMzQixHQUFELENBQS9DLEdBQ0R2QixXQUFXLENBQUN1QixHQUFELENBRFYsR0FFREEsR0FGTjtBQUdIOztBQUNELFFBQU0wQyxVQUFVLEdBQUdDLHNFQUFhLENBQUNILG9CQUFELENBQWhDLENBZmMsQ0FnQmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQU1JLGlDQUFpQyxHQUFHSixvQkFBb0IsS0FBSyxJQUF6QixJQUFpQ0Esb0JBQW9CLEtBQUssS0FBSyxDQUEvRCxHQUFtRSxLQUFLLENBQXhFLEdBQTRFQSxvQkFBb0IsQ0FBQ25FLE9BQXJCLENBQTZCLGFBQTdCLEVBQTRDLEVBQTVDLENBQXRILENBdEJjLENBdUJkO0FBQ0E7O0FBQ0EsUUFBTXdFLFVBQVUsR0FBRyxPQUFPRCxpQ0FBUCxLQUE2QyxXQUE3QyxHQUNiSCxlQUFlLENBQUNHLGlDQUFELENBREYsR0FFYmxGLFNBRk47QUFHQSxRQUFNb0YsU0FBUyxHQUFHQyxvREFBTSxDQUFDLEtBQUQsQ0FBeEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdqQixTQUFTLEdBQUdrQixnRUFBSCxHQUFhQyw2REFBNUM7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLHFFQUFvQixDQUFDQywwQkFBekM7QUFDQSxNQUFJQyxFQUFKOztBQUNBLFFBQU1DLGtCQUFrQixHQUFHLENBQUMxRCxFQUFELEVBQUsyRCxFQUFMLEtBQVk7QUFDbkNGLE1BQUUsR0FBRyxJQUFJRyxNQUFNLENBQUNDLG9CQUFYLENBQWlDQyxPQUFELElBQWE7QUFDOUNBLGFBQU8sQ0FBQ0MsT0FBUixDQUFpQkMsS0FBRCxJQUFXO0FBQ3ZCLFlBQUloRSxFQUFFLEtBQUtnRSxLQUFLLENBQUNDLE1BQWpCLEVBQXlCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFJRCxLQUFLLENBQUNFLGNBQU4sSUFBd0JGLEtBQUssQ0FBQ0csaUJBQU4sR0FBMEIsQ0FBdEQsRUFBeUQ7QUFDckRWLGNBQUUsQ0FBQ1csU0FBSCxDQUFhcEUsRUFBYjtBQUNBeUQsY0FBRSxDQUFDWSxVQUFIO0FBQ0FWLGNBQUU7QUFDTDtBQUNKO0FBQ0osT0FWRDtBQVdILEtBWkksQ0FBTCxDQURtQyxDQWNuQzs7QUFDQUYsTUFBRSxDQUFDYSxPQUFILENBQVd0RSxFQUFYO0FBQ0gsR0FoQkQ7O0FBaUJBLFFBQU11RSxTQUFTLEdBQUlDLEdBQUQsSUFBUztBQUN2QixRQUFJbEIsV0FBVyxJQUFJa0IsR0FBZixJQUFzQjNCLFVBQTFCLEVBQXNDO0FBQ2xDO0FBQ0FhLHdCQUFrQixDQUFDYyxHQUFELEVBQU0sTUFBTTtBQUMxQlosY0FBTSxDQUFDYSxVQUFQLENBQWtCQyxRQUFsQixDQUEyQjFCLFVBQTNCO0FBQ0gsT0FGaUIsQ0FBbEI7QUFHSDtBQUNKLEdBUEQ7O0FBUUEsUUFBTTJCLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFFBQUksQ0FBQzFCLFNBQVMsQ0FBQzJCLE9BQWYsRUFBd0I7QUFDcEJoQixZQUFNLENBQUNhLFVBQVAsQ0FBa0JJLE9BQWxCLENBQTBCN0IsVUFBMUI7QUFDQUMsZUFBUyxDQUFDMkIsT0FBVixHQUFvQixJQUFwQjtBQUNIO0FBQ0osR0FMRDs7QUFNQUUseURBQVMsQ0FBQyxNQUFNO0FBQ1o7QUFDQSxRQUFJLENBQUN4QixXQUFELElBQWdCVCxVQUFwQixFQUFnQztBQUM1QmUsWUFBTSxDQUFDYSxVQUFQLENBQWtCQyxRQUFsQixDQUEyQjFCLFVBQTNCO0FBQ0gsS0FKVyxDQUtaOzs7QUFDQSxXQUFPLE1BQU07QUFDVCxVQUFJTSxXQUFXLElBQUlHLEVBQW5CLEVBQXVCO0FBQ25CQSxVQUFFLENBQUNZLFVBQUg7QUFDSDtBQUNKLEtBSkQ7QUFLSCxHQVhRLEVBV04sQ0FBQ3JCLFVBQUQsRUFBYU0sV0FBYixFQUEwQlQsVUFBMUIsQ0FYTSxDQUFUO0FBWUEsUUFBTWtDLFlBQVksR0FBRyxDQUFDOUMsRUFBRSxHQUFHZSxVQUFVLEtBQUssSUFBZixJQUF1QkEsVUFBVSxLQUFLLEtBQUssQ0FBM0MsR0FBK0MsS0FBSyxDQUFwRCxHQUF3REEsVUFBVSxDQUFDNUUsVUFBWCxDQUFzQixHQUF0QixDQUE5RCxNQUE4RixJQUE5RixJQUFzRzZELEVBQUUsS0FBSyxLQUFLLENBQWxILEdBQXNIQSxFQUF0SCxHQUEySCxLQUFoSjtBQUNBLFFBQU0rQyxpQkFBaUIsR0FBRyxDQUFDaEMsVUFBRCxJQUFlLENBQUNILFVBQWhCLElBQThCa0MsWUFBeEQ7O0FBQ0EsTUFBSS9CLFVBQVUsSUFBSUgsVUFBZCxJQUE0QixDQUFDa0MsWUFBN0IsSUFBNkMsQ0FBQ3pDLGlCQUFsRCxFQUFxRTtBQUNqRUcsa0JBQWMsQ0FBQ3dDLFdBQWYsQ0FBMkJqQyxVQUEzQjtBQUNIOztBQUNELFNBQU9nQyxpQkFBaUI7QUFBQTtBQUN4QjtBQUNBckYsOENBQUssQ0FBQ2EsYUFBTixDQUFvQixHQUFwQixFQUF5QjNFLE1BQU0sQ0FBQ3FKLE1BQVAsQ0FBYztBQUFFL0MsUUFBSSxFQUFFYTtBQUFSLEdBQWQsRUFBcUNMLG9CQUFvQixJQUM5RSxDQUFDRSxVQUR5RCxJQUMzQztBQUFFb0IsVUFBTSxFQUFFLFFBQVY7QUFBb0JrQixPQUFHLEVBQUU7QUFBekIsR0FETSxFQUM2QzNDLEtBRDdDLENBQXpCLENBRndCLGdCQUcwRDdDLDRDQUFLLENBQUNhLGFBQU4sQ0FBb0IyQyxhQUFwQixFQUFtQ3RILE1BQU0sQ0FBQ3FKLE1BQVAsQ0FBYyxFQUFkLEVBQWtCMUMsS0FBbEIsRUFBeUI7QUFBRW1DLGdCQUFZLEVBQUVBLFlBQWhCO0FBQThCUyxZQUFRLEVBQUViLFNBQXhDO0FBQW1EeEMsTUFBRSxFQUFFaUIsVUFBVSxJQUFJO0FBQXJFLEdBQXpCLEVBQXFHZCxTQUFTLElBQUk7QUFBRUcsWUFBRjtBQUFZRDtBQUFaLEdBQWxILENBQW5DLENBSGxGO0FBSUg7O0FBQ2NKLDZEQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTb0IsT0FBVCxPQVNHO0FBQUEsTUFUYztBQUNmaUMsa0JBRGU7QUFFZkMsbUJBRmU7QUFHZnZELE1BSGU7QUFJZkksUUFKZTtBQUtmb0QsU0FMZTtBQU1mbkQsbUJBQWUsR0FBRyxzQkFOSDtBQU9mb0Q7QUFQZSxHQVNkO0FBQUEsTUFERWhELEtBQ0Y7O0FBQ0Q7QUFDQTtBQUNBLFFBQU1pRCxLQUFLLEdBQUczRyw4RUFBVSxDQUFDaUQsRUFBRCxDQUF4QjtBQUNBLFFBQU0yRCxhQUFhLEdBQUc1Ryw4RUFBVSxDQUFDdUcsY0FBRCxDQUFoQztBQUNBLFFBQU1NLGNBQWMsR0FBRzdHLDhFQUFVLENBQUNxRCxJQUFELEVBQU87QUFDdENqRSx1QkFBbUIsRUFBRTtBQURpQixHQUFQLENBQWpDO0FBR0Esc0JBQ0UsMkRBQUMsZ0VBQUQsZUFDT2lFLElBQUksR0FDTDtBQUNFQSxRQUFJLEVBQUVxRCxvQkFBb0IsR0FBR0csY0FBSCxHQUFvQnhEO0FBRGhELEdBREs7QUFLSEQsYUFBUyxFQUFFLElBTFI7QUFNSEUsbUJBTkc7QUFPSEwsTUFBRSxFQUFFMEQ7QUFQRCxLQVFDSixjQUFjLElBQUlDLGVBQWxCLEdBQ0E7QUFDRWpELFlBQVEsRUFBRSxDQUFDdUQsTUFBRCxFQUFTQyxRQUFULEtBQ1JQLGVBQWUsR0FDWCxJQUFJUSxNQUFKLENBQVdSLGVBQVgsRUFBNEJTLElBQTVCLENBQWlDRixRQUFRLENBQUNHLFFBQTFDLENBRFcsR0FFWEgsUUFBUSxDQUFDRyxRQUFULENBQWtCNUgsVUFBbEIsQ0FBNkJzSCxhQUE3QjtBQUpSLEdBREEsR0FPQSxJQWZELENBRFgsRUFrQk1sRCxLQWxCTixHQW1CRytDLEtBbkJILENBREY7QUF1QkQ7O0FBRUQsU0FBU1UsY0FBVCxRQUFnRTtBQUFBOztBQUFBLE1BQXhDO0FBQUNDLFNBQUQ7QUFBUUMsWUFBUjtBQUFrQkM7QUFBbEIsR0FBd0M7QUFBQSxNQUFSNUQsS0FBUTs7QUFDOUQsUUFBTTZELFdBQVcsR0FBR25ELG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLFFBQU1vRCxlQUFlLEdBQUdwRCxvREFBTSxDQUFDLElBQUQsQ0FBOUI7QUFDQSxRQUFNLENBQUNxRCxZQUFELEVBQWVDLGVBQWYsSUFBa0NDLHNEQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBM0IseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTTRCLGtCQUFrQixHQUFJQyxLQUFELElBQVc7QUFDcEMsVUFBSSxDQUFDTixXQUFXLENBQUN6QixPQUFiLElBQXdCeUIsV0FBVyxDQUFDekIsT0FBWixDQUFvQmdDLFFBQXBCLENBQTZCRCxLQUFLLENBQUMxQyxNQUFuQyxDQUE1QixFQUF3RTtBQUN0RTtBQUNEOztBQUVEdUMscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxLQU5EOztBQVFBSyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDSixrQkFBdkM7QUFDQUcsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q0osa0JBQXhDO0FBQ0EsV0FBTyxNQUFNO0FBQ1hHLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENMLGtCQUExQztBQUNBRyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDTCxrQkFBM0M7QUFDRCxLQUhEO0FBSUQsR0FmUSxFQWVOLENBQUNMLFdBQUQsQ0FmTSxDQUFUOztBQWlCQSxRQUFNVyxpQkFBaUIsR0FBRyxDQUFDQyxjQUFELEVBQWlCQyxjQUFjLEdBQUcsS0FBbEMsS0FDeEJDLG9EQUFJLENBQ0Y7QUFDRSxpQ0FBNkIsQ0FBQ0QsY0FEaEM7QUFFRUUsa0JBQWMsRUFBRUY7QUFGbEIsR0FERSxFQUtGRCxjQUxFLENBRE47O0FBU0EsTUFBSSxDQUFDZixLQUFMLEVBQVk7QUFDVix3QkFBTywyREFBQyxPQUFEO0FBQVMsZUFBUyxFQUFFYyxpQkFBaUIsQ0FBQ1osU0FBRDtBQUFyQyxPQUFzRDVELEtBQXRELEVBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUNFLE9BQUcsRUFBRTZELFdBRFA7QUFFRSxhQUFTLEVBQUVjLG9EQUFJLENBQUMsY0FBRCxFQUFpQixVQUFqQixFQUE2QixxQkFBN0IsRUFBb0Q7QUFDakUsd0JBQWtCaEIsUUFBUSxLQUFLLE1BRGtDO0FBRWpFLHlCQUFtQkEsUUFBUSxLQUFLLE9BRmlDO0FBR2pFLHdCQUFrQkk7QUFIK0MsS0FBcEQ7QUFGakIsa0JBT0UsMkRBQUMsT0FBRDtBQUNFLGFBQVMsRUFBRVMsaUJBQWlCLENBQUNaLFNBQUQ7QUFEOUIsS0FFTTVELEtBRk47QUFHRSxXQUFPLEVBQUVBLEtBQUssQ0FBQ1QsRUFBTixHQUFXbEUsU0FBWCxHQUF3QkosQ0FBRCxJQUFPQSxDQUFDLENBQUM0SixjQUFGLEVBSHpDO0FBSUUsYUFBUyxFQUFHNUosQ0FBRCxJQUFPO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQzhCLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCOUIsU0FBQyxDQUFDNEosY0FBRjtBQUNBYix1QkFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtBQUNEO0FBQ0Y7QUFUSCx5QkFVRy9ELEtBQUssQ0FBQzdCLFFBVlQsOEJBVXFCNkIsS0FBSyxDQUFDK0MsS0FWM0IsQ0FQRixlQW1CRTtBQUFJLE9BQUcsRUFBRWUsZUFBVDtBQUEwQixhQUFTLEVBQUM7QUFBcEMsS0FDR0osS0FBSyxDQUFDb0IsR0FBTixDQUFVLFFBQXFEMUYsQ0FBckQ7QUFBQSxRQUFDO0FBQUN3RSxlQUFTLEVBQUVtQjtBQUFaLEtBQUQ7QUFBQSxRQUFvQ0MsY0FBcEM7O0FBQUEsd0JBQ1Q7QUFBSSxTQUFHLEVBQUU1RjtBQUFULG9CQUNFLDJEQUFDLE9BQUQ7QUFDRSxlQUFTLEVBQUduRSxDQUFELElBQU87QUFDaEIsWUFBSW1FLENBQUMsS0FBS3NFLEtBQUssQ0FBQ3pHLE1BQU4sR0FBZSxDQUFyQixJQUEwQmhDLENBQUMsQ0FBQzhCLEdBQUYsS0FBVSxLQUF4QyxFQUErQztBQUM3QzlCLFdBQUMsQ0FBQzRKLGNBQUY7QUFDQWIseUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQSxnQkFBTWlCLGNBQWMsR0FBR3BCLFdBQVcsQ0FBQ3pCLE9BQVosQ0FBb0I4QyxrQkFBM0M7O0FBRUEsY0FBSUQsY0FBSixFQUFvQjtBQUNsQkEsMEJBQWMsQ0FBQ0UsS0FBZjtBQUNEO0FBQ0Y7QUFDRixPQVhIO0FBWUUscUJBQWUsRUFBQyx3QkFabEI7QUFhRSxlQUFTLEVBQUVYLGlCQUFpQixDQUFDTyxrQkFBRCxFQUFxQixJQUFyQjtBQWI5QixPQWNNQyxjQWROLEVBREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQW5CRixDQURGO0FBNENEOztBQUVELFNBQVNJLGFBQVQsUUFNRztBQUFBOztBQUFBLE1BTm9CO0FBQ3JCMUIsU0FEcUI7QUFFckJFO0FBRnFCLEdBTXBCO0FBQUEsTUFERTVELEtBQ0Y7O0FBQ0QsUUFBTXFGLFdBQVcsR0FBRzNFLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLFFBQU07QUFBQzhDO0FBQUQsTUFBYThCLHNFQUFXLEVBQTlCO0FBQ0EsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJ2QixzREFBUSxDQUN4QztBQUFBOztBQUFBLDBCQUFNLEVBQUNQLEtBQUQsWUFBQ0EsS0FBSyxDQUFFK0IsSUFBUCxDQUFhQyxJQUFELElBQVVwTCwyRUFBVSxDQUFDb0wsSUFBSSxDQUFDbkcsRUFBTixFQUFVaUUsUUFBVixDQUFoQyxDQUFELENBQU4sMEJBQStELElBQS9EO0FBQUEsR0FEd0MsQ0FBMUM7O0FBSUEsUUFBTWdCLGlCQUFpQixHQUFHLENBQUNDLGNBQUQsRUFBaUJrQixTQUFTLEdBQUcsS0FBN0IsS0FDeEJoQixvREFBSSxDQUNGLFlBREUsRUFFRjtBQUNFLDJCQUF1QmdCO0FBRHpCLEdBRkUsRUFLRmxCLGNBTEUsQ0FETjs7QUFTQSxNQUFJLENBQUNmLEtBQUwsRUFBWTtBQUNWLHdCQUNFO0FBQUksZUFBUyxFQUFDO0FBQWQsb0JBQ0UsMkRBQUMsT0FBRDtBQUFTLGVBQVMsRUFBRWMsaUJBQWlCLENBQUNaLFNBQUQ7QUFBckMsT0FBc0Q1RCxLQUF0RCxFQURGLENBREY7QUFLRDs7QUFFRCxRQUFNNEYsY0FBYyxHQUFHLHdCQUFBUCxXQUFXLENBQUNqRCxPQUFaLGtDQUFxQnlELFlBQXJCLEdBQ2xCLEdBQUQseUJBQUdSLFdBQVcsQ0FBQ2pELE9BQWYscUJBQUcsc0JBQXFCeUQsWUFBYSxJQURsQixHQUVuQnhLLFNBRko7QUFHQSxzQkFDRTtBQUNFLGFBQVMsRUFBRXNKLG9EQUFJLENBQUMsaUJBQUQsRUFBb0I7QUFDakMsb0NBQThCWTtBQURHLEtBQXBCO0FBRGpCLGtCQUlFLDJEQUFDLE9BQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRWYsaUJBQWlCLENBQUNaLFNBQUQsRUFBWSxJQUFaO0FBRjlCLEtBR001RCxLQUhOO0FBSUUsV0FBTyxFQUFHL0UsQ0FBRCxJQUFPO0FBQ2RBLE9BQUMsQ0FBQzRKLGNBQUY7QUFDQVcsa0JBQVksQ0FBRU0sS0FBRCxJQUFXLENBQUNBLEtBQWIsQ0FBWjtBQUNEO0FBUEgsMEJBUUc5RixLQUFLLENBQUM3QixRQVJULCtCQVFxQjZCLEtBQUssQ0FBQytDLEtBUjNCLENBSkYsZUFjRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsT0FBRyxFQUFFc0MsV0FGUDtBQUdFLFNBQUssRUFBRTtBQUNMVSxZQUFNLEVBQUUsQ0FBQ1IsU0FBRCxHQUFhSyxjQUFiLEdBQThCdks7QUFEakM7QUFIVCxLQU1HcUksS0FBSyxDQUFDb0IsR0FBTixDQUFVLFFBQXFEMUYsQ0FBckQ7QUFBQSxRQUFDO0FBQUN3RSxlQUFTLEVBQUVtQjtBQUFaLEtBQUQ7QUFBQSxRQUFvQ0MsY0FBcEM7O0FBQUEsd0JBQ1Q7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBZ0MsU0FBRyxFQUFFNUY7QUFBckMsb0JBQ0UsMkRBQUMsT0FBRDtBQUNFLHFCQUFlLEVBQUMsb0JBRGxCO0FBRUUsZUFBUyxFQUFFb0YsaUJBQWlCLENBQUNPLGtCQUFEO0FBRjlCLE9BR01DLGNBSE47QUFJRSxhQUFPLEVBQUVoRixLQUFLLENBQUNnRztBQUpqQixPQURGLENBRFM7QUFBQSxHQUFWLENBTkgsQ0FkRixDQURGO0FBa0NEOztBQUVELFNBQVNDLGlCQUFULFFBQXVEO0FBQUEsTUFBNUI7QUFBQ0MsVUFBTSxHQUFHO0FBQVYsR0FBNEI7QUFBQSxNQUFSbEcsS0FBUTs7QUFDckQsUUFBTW1HLElBQUksR0FBR0QsTUFBTSxHQUFHZCxhQUFILEdBQW1CM0IsY0FBdEM7QUFDQSxzQkFBTywyREFBQyxJQUFELEVBQVV6RCxLQUFWLENBQVA7QUFDRDs7QUFFY2lHLDBFQUFmLEU7Ozs7Ozs7O0FDak5BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTcEssV0FBVCxDQUFxQkosR0FBckIsRUFBMEI7QUFDN0IsU0FBTyxlQUFlOEgsSUFBZixDQUFvQjlILEdBQXBCLE1BQTZCLElBQXBDO0FBQ0g7QUFDYyxTQUFTNkUsYUFBVCxDQUF1QjdFLEdBQXZCLEVBQTRCO0FBQ3ZDLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFdBQWYsSUFBOEIsQ0FBQ0ksV0FBVyxDQUFDSixHQUFELENBQWpEO0FBQ0gsQzs7Ozs7Ozs7QUNYWTs7QUFDYixJQUFJMkssZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FoTixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELE9BQU8sQ0FBQ00sY0FBUixHQUF5QixLQUFLLENBQTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU0wTSxzQkFBc0IsR0FBR0gsZUFBZSxDQUFDMU0sbUJBQU8sQ0FBQyxFQUFELENBQVIsQ0FBOUM7O0FBQ0EsU0FBU0csY0FBVCxHQUEwQjtBQUN0QixTQUFPME0sc0JBQXNCLENBQUNDLE9BQXZCLEdBQWlDdEssVUFBakMsQ0FBNEN1SyxXQUFuRDtBQUNIOztBQUNEbE4sT0FBTyxDQUFDTSxjQUFSLEdBQXlCQSxjQUF6QixDOzs7Ozs7OztBQ2hCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVIsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNhLG1CQUFSLEdBQThCLEtBQUssQ0FBbkM7O0FBQ0EsTUFBTXNNLFNBQVMsR0FBR2hOLG1CQUFPLENBQUMsR0FBRCxDQUF6QixDLENBQ0E7OztBQUNBSCxPQUFPLENBQUNhLG1CQUFSLEdBQThCLENBQUMsQ0FBQ3NNLFNBQVMsQ0FBQ3ZMLGNBQTFDLEM7Ozs7Ozs7O0FDWGE7O0FBQ2IsSUFBSXdMLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUN0TixNQUFNLENBQUN1TixNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUszTCxTQUFYLEVBQXNCMkwsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCMU4sUUFBTSxDQUFDQyxjQUFQLENBQXNCdU4sQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVyTixjQUFVLEVBQUUsSUFBZDtBQUFvQkMsT0FBRyxFQUFFLFlBQVc7QUFBRSxhQUFPa04sQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBYztBQUFwRCxHQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUszTCxTQUFYLEVBQXNCMkwsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixHQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlFLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0M1TixNQUFNLENBQUN1TixNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUssQ0FBWixFQUFlO0FBQzNGN04sUUFBTSxDQUFDQyxjQUFQLENBQXNCdU4sQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7QUFBRWxOLGNBQVUsRUFBRSxJQUFkO0FBQW9CSCxTQUFLLEVBQUUwTjtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNMLENBQVQsRUFBWUssQ0FBWixFQUFlO0FBQ2hCTCxHQUFDLENBQUMsU0FBRCxDQUFELEdBQWVLLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJQyxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVkLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUllLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSWYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVSxDQUFULElBQWNWLEdBQWQsRUFBbUIsSUFBSVUsQ0FBQyxLQUFLLFNBQU4sSUFBbUIxTixNQUFNLENBQUMyRixjQUFQLENBQXNCQyxJQUF0QixDQUEyQm9ILEdBQTNCLEVBQWdDVSxDQUFoQyxDQUF2QixFQUEyREosZUFBZSxDQUFDUyxNQUFELEVBQVNmLEdBQVQsRUFBY1UsQ0FBZCxDQUFmOztBQUMvRkUsb0JBQWtCLENBQUNHLE1BQUQsRUFBU2YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPZSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJaEIsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FoTixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELE9BQU8sQ0FBQzhOLDhCQUFSLEdBQXlDOU4sT0FBTyxDQUFDd0IsbUNBQVIsR0FBOEMsS0FBSyxDQUE1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNdU0sT0FBTyxHQUFHSCxZQUFZLENBQUN6TixtQkFBTyxDQUFDLENBQUQsQ0FBUixDQUE1Qjs7QUFDQSxNQUFNRCxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyxHQUFELENBQWhDOztBQUNBLE1BQU1TLFdBQVcsR0FBR1QsbUJBQU8sQ0FBQyxHQUFELENBQTNCOztBQUNBLE1BQU1nTixTQUFTLEdBQUdoTixtQkFBTyxDQUFDLEdBQUQsQ0FBekI7O0FBQ0EsTUFBTTZOLDZCQUE2QixHQUFHbkIsZUFBZSxDQUFDMU0sbUJBQU8sQ0FBQyxHQUFELENBQVIsQ0FBckQsQyxDQUNBOzs7QUFDQSxTQUFTOE4sZUFBVCxDQUF5QkMsU0FBekIsRUFBb0M7QUFDaEMsUUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0FELFdBQVMsQ0FBQ2xHLE9BQVYsQ0FBbUJvRyxRQUFELElBQWM7QUFDNUJELGdCQUFZLENBQUNDLFFBQUQsQ0FBWixHQUF5QjtBQUNyQkMsMEJBQW9CLEVBQUU7QUFERCxLQUF6QjtBQUdILEdBSkQ7QUFLQSxTQUFPRixZQUFQO0FBQ0gsQyxDQUNEO0FBQ0E7OztBQUNBLFNBQVNHLGdCQUFULENBQTBCO0FBQUVKLFdBQUY7QUFBYUssb0JBQWI7QUFBaUNDO0FBQWpDLENBQTFCLEVBQTJFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLFdBQVNDLGtCQUFULENBQTRCTCxRQUE1QixFQUFzQztBQUNsQyxVQUFNTSwwQkFBMEIsR0FBR1YsNkJBQTZCLENBQUNmLE9BQTlCLENBQXNDMEIsSUFBdEMsQ0FBMkNQLFFBQTNDLEVBQXFERyxrQkFBckQsQ0FBbkM7QUFDQSxVQUFNSyxVQUFVLEdBQUdKLFdBQVcsQ0FBQ0osUUFBRCxDQUE5QjtBQUNBLFVBQU1TLGFBQWEsR0FBR0QsVUFBVSxDQUFDRSxRQUFYLENBQW9CNUMsSUFBcEIsQ0FBMEI2QyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQk4sMEJBQXZELENBQXRCOztBQUNBLFFBQUlHLGFBQUosRUFBbUI7QUFDZixhQUFPO0FBQUVSLDRCQUFvQixFQUFFSztBQUF4QixPQUFQO0FBQ0gsS0FGRCxNQUdLO0FBQ0RWLG1DQUE2QixDQUFDZixPQUE5QixDQUFzQ2dDLEtBQXRDLENBQTRDYixRQUE1QyxFQUFzREcsa0JBQXREO0FBQ0EsYUFBTztBQUFFRiw0QkFBb0IsRUFBRTtBQUF4QixPQUFQO0FBQ0g7QUFDSjs7QUFDRCxRQUFNRixZQUFZLEdBQUcsRUFBckI7QUFDQUQsV0FBUyxDQUFDbEcsT0FBVixDQUFtQm9HLFFBQUQsSUFBYztBQUM1QkQsZ0JBQVksQ0FBQ0MsUUFBRCxDQUFaLEdBQXlCSyxrQkFBa0IsQ0FBQ0wsUUFBRCxDQUEzQztBQUNILEdBRkQ7QUFHQSxTQUFPRCxZQUFQO0FBQ0g7O0FBQ0QsU0FBU2UscUJBQVQsR0FBaUM7QUFDN0IsU0FBT2hQLGdCQUFnQixDQUFDSSxjQUFqQixHQUFrQzZPLElBQWxDLENBQXVDWixrQkFBOUM7QUFDSCxDLENBQ0Q7OztBQUNBLFNBQVNhLGVBQVQsR0FBMkI7QUFDdkIsUUFBTVosV0FBVyxHQUFHckIsU0FBUyxDQUFDdkwsY0FBVixFQUFwQjtBQUNBLFFBQU0yTSxrQkFBa0IsR0FBR1cscUJBQXFCLEVBQWhEO0FBQ0EsUUFBTWhCLFNBQVMsR0FBR0gsT0FBTyxDQUFDc0IsT0FBUixDQUFnQixNQUFNdlAsTUFBTSxDQUFDd1AsSUFBUCxDQUFZZCxXQUFaLENBQXRCLEVBQWdELENBQUNBLFdBQUQsQ0FBaEQsQ0FBbEIsQ0FIdUIsQ0FJdkI7O0FBQ0EsUUFBTSxDQUFDakMsS0FBRCxFQUFRZ0QsUUFBUixJQUFvQnhCLE9BQU8sQ0FBQ3JELFFBQVIsQ0FBaUIsTUFBTXVELGVBQWUsQ0FBQ0MsU0FBRCxDQUF0QyxDQUExQixDQUx1QixDQU12Qjs7QUFDQUgsU0FBTyxDQUFDaEYsU0FBUixDQUFrQixNQUFNO0FBQ3BCd0csWUFBUSxDQUFDakIsZ0JBQWdCLENBQUM7QUFBRUUsaUJBQUY7QUFBZUQsd0JBQWY7QUFBbUNMO0FBQW5DLEtBQUQsQ0FBakIsQ0FBUjtBQUNILEdBRkQsRUFFRyxDQUFDTSxXQUFELEVBQWNELGtCQUFkLEVBQWtDTCxTQUFsQyxDQUZILEVBUHVCLENBVXZCOztBQUNBLFFBQU1zQixHQUFHLEdBQUd6QixPQUFPLENBQUNzQixPQUFSLENBQWdCLE1BQU07QUFDOUIsYUFBU0ksb0JBQVQsQ0FBOEJyQixRQUE5QixFQUF3Q3NCLFdBQXhDLEVBQXFEO0FBQ2pEMUIsbUNBQTZCLENBQUNmLE9BQTlCLENBQXNDMEMsSUFBdEMsQ0FBMkN2QixRQUEzQyxFQUFxREcsa0JBQXJELEVBQXlFbUIsV0FBekU7QUFDQUgsY0FBUSxDQUFFbEssQ0FBRCxJQUFRdkYsTUFBTSxDQUFDcUosTUFBUCxDQUFjckosTUFBTSxDQUFDcUosTUFBUCxDQUFjLEVBQWQsRUFBa0I5RCxDQUFsQixDQUFkLEVBQW9DO0FBQUUsU0FBQytJLFFBQUQsR0FBWTtBQUFFQyw4QkFBb0IsRUFBRXFCO0FBQXhCO0FBQWQsT0FBcEMsQ0FBVCxDQUFSO0FBQ0g7O0FBQ0QsV0FBTztBQUNIRDtBQURHLEtBQVA7QUFHSCxHQVJXLEVBUVQsQ0FBQ0YsUUFBRCxDQVJTLENBQVo7QUFTQSxTQUFPLENBQUNoRCxLQUFELEVBQVFpRCxHQUFSLENBQVA7QUFDSDs7QUFDRCxNQUFNSSxPQUFPLEdBQUc3QixPQUFPLENBQUM4QixhQUFSLENBQXNCLElBQXRCLENBQWhCOztBQUNBLFNBQVNyTyxtQ0FBVCxDQUE2QztBQUFFb0Q7QUFBRixDQUE3QyxFQUE0RDtBQUN4RCxNQUFJaEUsV0FBVyxDQUFDQyxtQkFBaEIsRUFBcUM7QUFDakMsV0FBUWtOLE9BQU8sQ0FBQ2QsT0FBUixDQUFnQnhJLGFBQWhCLENBQThCcUwseUNBQTlCLEVBQXlFLElBQXpFLEVBQStFbEwsUUFBL0UsQ0FBUjtBQUNILEdBRkQsTUFHSztBQUNELFdBQU9tSixPQUFPLENBQUNkLE9BQVIsQ0FBZ0J4SSxhQUFoQixDQUE4QnNKLE9BQU8sQ0FBQ2QsT0FBUixDQUFnQnZJLFFBQTlDLEVBQXdELElBQXhELEVBQThERSxRQUE5RCxDQUFQO0FBQ0g7QUFDSjs7QUFDRDVFLE9BQU8sQ0FBQ3dCLG1DQUFSLEdBQThDQSxtQ0FBOUM7O0FBQ0EsU0FBU3NPLHlDQUFULENBQW1EO0FBQUVsTDtBQUFGLENBQW5ELEVBQWtFO0FBQzlELFFBQU1tTCxZQUFZLEdBQUdYLGVBQWUsRUFBcEM7QUFDQSxTQUFPckIsT0FBTyxDQUFDZCxPQUFSLENBQWdCeEksYUFBaEIsQ0FBOEJtTCxPQUFPLENBQUNJLFFBQXRDLEVBQWdEO0FBQUUvUCxTQUFLLEVBQUU4UDtBQUFULEdBQWhELEVBQXlFbkwsUUFBekUsQ0FBUDtBQUNIOztBQUNELFNBQVNrSiw4QkFBVCxHQUEwQztBQUN0QyxRQUFNN04sS0FBSyxHQUFHOE4sT0FBTyxDQUFDa0MsVUFBUixDQUFtQkwsT0FBbkIsQ0FBZDs7QUFDQSxNQUFJLENBQUMzUCxLQUFMLEVBQVk7QUFDUixVQUFNLElBQUlpUSxLQUFKLENBQVUsc0dBQVYsQ0FBTjtBQUNIOztBQUNELFNBQU9qUSxLQUFQO0FBQ0g7O0FBQ0RELE9BQU8sQ0FBQzhOLDhCQUFSLEdBQXlDQSw4QkFBekMsQzs7Ozs7Ozs7QUNySEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTXFDLHNCQUFzQixnQkFBR04sMkRBQWEsQ0FBQy9OLFNBQUQsQ0FBNUM7QUFDZXFPLCtFQUFmLEU7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyx5QkFBVCxHQUFxQztBQUNuQyxRQUFNQyxPQUFPLEdBQUdKLHdEQUFVLENBQUNFLDZFQUFELENBQTFCOztBQUVBLE1BQUlFLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ25CLFVBQU0sSUFBSUgsS0FBSixDQUNKLG9FQURJLENBQU47QUFHRDs7QUFFRCxTQUFPRyxPQUFQO0FBQ0Q7O0FBRWNELGtGQUFmLEU7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsZUFBVCxHQUEyQjtBQUN6QixRQUFNRCxPQUFPLEdBQUdKLHdEQUFVLENBQUNNLG1FQUFELENBQTFCOztBQUVBLE1BQUlGLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ25CLFVBQU0sSUFBSUgsS0FBSixDQUNKLHNJQURJLENBQU47QUFHRDs7QUFFRCxTQUFPRyxPQUFQO0FBQ0Q7O0FBRWNDLHdFQUFmLEU7Ozs7Ozs7O0FDckJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUl6RCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQWhOLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDUSxxQkFBUixHQUFnQyxLQUFLLENBQXJDOztBQUNBLE1BQU13TSxzQkFBc0IsR0FBR0gsZUFBZSxDQUFDMU0sbUJBQU8sQ0FBQyxFQUFELENBQVIsQ0FBOUM7O0FBQ0EsTUFBTXFRLFFBQVEsR0FBR3JRLG1CQUFPLENBQUMsRUFBRCxDQUF4QixDLENBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxxQkFBVCxHQUFpQztBQUM3QixRQUFNO0FBQUVtQyxjQUFVLEVBQUU7QUFBRVYsYUFBRjtBQUFXQztBQUFYLEtBQWQ7QUFBZ0N1TyxRQUFJLEVBQUU7QUFBRUMsbUJBQUY7QUFBaUJDO0FBQWpCO0FBQXRDLE1BQTRFM0Qsc0JBQXNCLENBQUNDLE9BQXZCLEVBQWxGO0FBQ0EsUUFBTTtBQUFFaEQ7QUFBRixNQUFldUcsUUFBUSxDQUFDekUsV0FBVCxFQUFyQjtBQUNBLFFBQU02RSxrQkFBa0IsR0FBR0QsYUFBYSxLQUFLRCxhQUFsQixHQUNyQnpPLE9BRHFCLEdBRXJCQSxPQUFPLENBQUNRLE9BQVIsQ0FBaUIsSUFBR2tPLGFBQWMsR0FBbEMsRUFBc0MsR0FBdEMsQ0FGTjtBQUdBLFFBQU1FLGNBQWMsR0FBRzVHLFFBQVEsQ0FBQ3hILE9BQVQsQ0FBaUJSLE9BQWpCLEVBQTBCLEVBQTFCLENBQXZCOztBQUNBLFdBQVM2TyxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakMsV0FBT0EsTUFBTSxLQUFLTCxhQUFYLEdBQ0EsR0FBRUUsa0JBQW1CLEVBRHJCLEdBRUEsR0FBRUEsa0JBQW1CLEdBQUVHLE1BQU8sR0FGckM7QUFHSCxHQVg0QixDQVk3Qjs7O0FBQ0EsV0FBU0MsU0FBVCxDQUFtQjtBQUFFRCxVQUFGO0FBQVVFO0FBQVYsR0FBbkIsRUFBZ0Q7QUFDNUMsV0FBUSxHQUFFQSxjQUFjLEdBQUcvTyxHQUFILEdBQVMsRUFBRyxHQUFFNE8sbUJBQW1CLENBQUNDLE1BQUQsQ0FBUyxHQUFFRixjQUFlLEVBQW5GO0FBQ0g7O0FBQ0QsU0FBTztBQUFFRztBQUFGLEdBQVA7QUFDSDs7QUFDRGhSLE9BQU8sQ0FBQ1EscUJBQVIsR0FBZ0NBLHFCQUFoQyxDOzs7Ozs7OztBQ25DYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVYsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNVLG1CQUFSLEdBQThCVixPQUFPLENBQUNXLGtCQUFSLEdBQTZCLEtBQUssQ0FBaEU7QUFDQVgsT0FBTyxDQUFDVyxrQkFBUixHQUE2QixTQUE3Qjs7QUFDQSxTQUFTRCxtQkFBVCxDQUE2QjBOLFFBQTdCLEVBQXVDc0IsV0FBdkMsRUFBb0Q7QUFDaEQsU0FBUSxRQUFPdEIsUUFBUyxJQUFHc0IsV0FBWSxFQUF2QztBQUNIOztBQUNEMVAsT0FBTyxDQUFDVSxtQkFBUixHQUE4QkEsbUJBQTlCLEM7Ozs7Ozs7O0FDYmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FaLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDa1Isd0JBQVIsR0FBbUNsUixPQUFPLENBQUNtUixtQkFBUixHQUE4Qm5SLE9BQU8sQ0FBQ29SLGdCQUFSLEdBQTJCcFIsT0FBTyxDQUFDcVIsZ0JBQVIsR0FBMkJyUixPQUFPLENBQUNzUixXQUFSLEdBQXNCdFIsT0FBTyxDQUFDNkIseUJBQVIsR0FBb0M3QixPQUFPLENBQUN1UixlQUFSLEdBQTBCdlIsT0FBTyxDQUFDd1IsV0FBUixHQUFzQnhSLE9BQU8sQ0FBQzRCLGNBQVIsR0FBeUIsS0FBSyxDQUEvUDs7QUFDQSxNQUFNNE8sUUFBUSxHQUFHclEsbUJBQU8sQ0FBQyxFQUFELENBQXhCOztBQUNBLE1BQU1zUixlQUFlLEdBQUd0UixtQkFBTyxDQUFDLEdBQUQsQ0FBL0I7O0FBQ0EsTUFBTXVSLGlCQUFpQixHQUFHdlIsbUJBQU8sQ0FBQyxHQUFELENBQWpDOztBQUNBSCxPQUFPLENBQUM0QixjQUFSLEdBQXlCLE1BQU02UCxlQUFlLENBQUNFLHlCQUFoQixDQUEwQyxnQ0FBMUMsQ0FBL0I7O0FBQ0EzUixPQUFPLENBQUN3UixXQUFSLEdBQXVCcEQsUUFBRCxJQUFjcUQsZUFBZSxDQUFDRyxhQUFoQixDQUE4QixnQ0FBOUIsRUFBZ0V4RCxRQUFoRSxDQUFwQzs7QUFDQXBPLE9BQU8sQ0FBQ3VSLGVBQVIsR0FBMEIsQ0FBQ3pPLE9BQU8sR0FBRyxFQUFYLEtBQWtCO0FBQ3hDLFFBQU0rTyxJQUFJLEdBQUc3UixPQUFPLENBQUM0QixjQUFSLEVBQWI7QUFDQSxRQUFNO0FBQUVxSTtBQUFGLE1BQWV1RyxRQUFRLENBQUN6RSxXQUFULEVBQXJCO0FBQ0EsU0FBTzJGLGlCQUFpQixDQUFDSSxlQUFsQixDQUFrQ0QsSUFBbEMsRUFBd0M1SCxRQUF4QyxFQUFrRG5ILE9BQWxELENBQVA7QUFDSCxDQUpEOztBQUtBOUMsT0FBTyxDQUFDNkIseUJBQVIsR0FBb0MsQ0FBQ2lCLE9BQU8sR0FBRyxFQUFYLEtBQWtCO0FBQ2xELFFBQU1pUCxZQUFZLEdBQUcvUixPQUFPLENBQUN1UixlQUFSLENBQXdCek8sT0FBeEIsQ0FBckI7QUFDQSxRQUFNO0FBQUVtSDtBQUFGLE1BQWV1RyxRQUFRLENBQUN6RSxXQUFULEVBQXJCOztBQUNBLE1BQUlnRyxZQUFKLEVBQWtCO0FBQ2QsVUFBTUMsYUFBYSxHQUFHTixpQkFBaUIsQ0FBQ08sZ0JBQWxCLENBQW1DRixZQUFZLENBQUNuRCxVQUFoRCxFQUE0RDNFLFFBQTVELENBQXRCO0FBQ0EsV0FBTztBQUNIOEgsa0JBREc7QUFFSEM7QUFGRyxLQUFQO0FBSUg7O0FBQ0QsU0FBT2xRLFNBQVA7QUFDSCxDQVhELEMsQ0FZQTs7O0FBQ0E5QixPQUFPLENBQUNzUixXQUFSLEdBQXVCbEQsUUFBRCxJQUFjO0FBQ2hDLFFBQU15RCxJQUFJLEdBQUc3UixPQUFPLENBQUN3UixXQUFSLENBQW9CcEQsUUFBcEIsQ0FBYjtBQUNBLFNBQU95RCxJQUFJLENBQUMvQyxRQUFaO0FBQ0gsQ0FIRDs7QUFJQTlPLE9BQU8sQ0FBQ3FSLGdCQUFSLEdBQTRCakQsUUFBRCxJQUFjO0FBQ3JDLFFBQU15RCxJQUFJLEdBQUc3UixPQUFPLENBQUN3UixXQUFSLENBQW9CcEQsUUFBcEIsQ0FBYjtBQUNBLFNBQU9zRCxpQkFBaUIsQ0FBQ1EsZ0JBQWxCLENBQW1DTCxJQUFuQyxDQUFQO0FBQ0gsQ0FIRCxDLENBSUE7QUFDQTs7O0FBQ0E3UixPQUFPLENBQUNvUixnQkFBUixHQUE0QmhELFFBQUQsSUFBYztBQUNyQyxRQUFNeUQsSUFBSSxHQUFHN1IsT0FBTyxDQUFDd1IsV0FBUixDQUFvQnBELFFBQXBCLENBQWI7QUFDQSxRQUFNO0FBQUVuRTtBQUFGLE1BQWV1RyxRQUFRLENBQUN6RSxXQUFULEVBQXJCO0FBQ0EsU0FBTzJGLGlCQUFpQixDQUFDTyxnQkFBbEIsQ0FBbUNKLElBQW5DLEVBQXlDNUgsUUFBekMsQ0FBUDtBQUNILENBSkQ7O0FBS0FqSyxPQUFPLENBQUNtUixtQkFBUixHQUErQi9DLFFBQUQsSUFBYztBQUN4QyxRQUFNeUQsSUFBSSxHQUFHN1IsT0FBTyxDQUFDd1IsV0FBUixDQUFvQnBELFFBQXBCLENBQWI7QUFDQSxRQUFNO0FBQUVuRTtBQUFGLE1BQWV1RyxRQUFRLENBQUN6RSxXQUFULEVBQXJCO0FBQ0EsU0FBTzJGLGlCQUFpQixDQUFDUyxtQkFBbEIsQ0FBc0NOLElBQXRDLEVBQTRDNUgsUUFBNUMsQ0FBUDtBQUNILENBSkQsQyxDQUtBOzs7QUFDQWpLLE9BQU8sQ0FBQ2tSLHdCQUFSLEdBQW9DOUMsUUFBRCxJQUFjO0FBQzdDLFFBQU15RCxJQUFJLEdBQUc3UixPQUFPLENBQUN3UixXQUFSLENBQW9CcEQsUUFBcEIsQ0FBYjtBQUNBLFFBQU07QUFBRW5FO0FBQUYsTUFBZXVHLFFBQVEsQ0FBQ3pFLFdBQVQsRUFBckI7QUFDQSxTQUFPMkYsaUJBQWlCLENBQUNVLHdCQUFsQixDQUEyQ1AsSUFBM0MsRUFBaUQ1SCxRQUFqRCxDQUFQO0FBQ0gsQ0FKRCxDOzs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTW9JLGlCQUFpQixHQUFHLFNBQTFCO0FBQ2UsU0FBU0MsYUFBVCxHQUF5QjtBQUNwQyxRQUFNO0FBQUVDO0FBQUYsTUFBaUIzUCxxRUFBb0IsRUFBM0M7O0FBQ0EsTUFBSSxDQUFDMlAsVUFBTCxFQUFpQjtBQUNiLFVBQU0sSUFBSXJDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT3FDLFVBQVA7QUFDSDtBQUNNLFNBQVNaLHlCQUFULENBQW1DYSxVQUFuQyxFQUErQztBQUNsRCxRQUFNRCxVQUFVLEdBQUdELGFBQWEsRUFBaEM7QUFDQSxRQUFNRyxnQkFBZ0IsR0FBR0YsVUFBVSxDQUFDQyxVQUFELENBQW5DOztBQUNBLE1BQUksQ0FBQ0MsZ0JBQUwsRUFBdUI7QUFDbkIsVUFBTSxJQUFJdkMsS0FBSixDQUFXLDBEQUF5RHNDLFVBQVcsRUFBL0UsQ0FBTjtBQUNIOztBQUNELFNBQU9DLGdCQUFQO0FBQ0g7QUFDTSxTQUFTYixhQUFULENBQXVCWSxVQUF2QixFQUFtQ3BFLFFBQVEsR0FBR2lFLGlCQUE5QyxFQUFpRTtBQUNwRSxRQUFNSSxnQkFBZ0IsR0FBR2QseUJBQXlCLENBQUNhLFVBQUQsQ0FBbEQ7QUFDQSxRQUFNRSx3QkFBd0IsR0FBR0QsZ0JBQWdCLENBQUNyRSxRQUFELENBQWpEOztBQUNBLE1BQUksQ0FBQ3NFLHdCQUFMLEVBQStCO0FBQzNCLFVBQU0sSUFBSXhDLEtBQUosQ0FBVywwREFBeURzQyxVQUFXLGlCQUFnQnBFLFFBQVMsRUFBeEcsQ0FBTjtBQUNIOztBQUNELFNBQU9zRSx3QkFBUDtBQUNILEM7Ozs7Ozs7O0FDbENZO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBNVMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNvUyx3QkFBUixHQUFtQ3BTLE9BQU8sQ0FBQ21TLG1CQUFSLEdBQThCblMsT0FBTyxDQUFDaVMsZ0JBQVIsR0FBMkJqUyxPQUFPLENBQUNrUyxnQkFBUixHQUEyQmxTLE9BQU8sQ0FBQzhSLGVBQVIsR0FBMEIsS0FBSyxDQUF0Sjs7QUFDQSxNQUFNdEIsUUFBUSxHQUFHclEsbUJBQU8sQ0FBQyxFQUFELENBQXhCOztBQUNBLFNBQVMyUixlQUFULENBQXlCYSxjQUF6QixFQUF5QzFJLFFBQXpDLEVBQW1EbkgsT0FBTyxHQUFHLEVBQTdELEVBQWlFO0FBQzdELFFBQU04UCxXQUFXLEdBQUc5UyxNQUFNLENBQUNpSSxPQUFQLENBQWU0SyxjQUFmLEVBQStCRSxJQUEvQixDQUFvQyxDQUFDLENBQUNDLEdBQUQsRUFBTWxFLFVBQU4sQ0FBRCxLQUF1QjtBQUMzRSxXQUFPLENBQUMsQ0FBQzRCLFFBQVEsQ0FBQ3VDLFNBQVQsQ0FBbUI5SSxRQUFuQixFQUE2QjtBQUNsQytJLFVBQUksRUFBRXBFLFVBQVUsQ0FBQ29FLElBRGlCO0FBRWxDQyxXQUFLLEVBQUUsS0FGMkI7QUFHbENDLFlBQU0sRUFBRTtBQUgwQixLQUE3QixDQUFUO0FBS0gsR0FObUIsQ0FBcEI7QUFPQSxRQUFNbkIsWUFBWSxHQUFHYSxXQUFXLEdBQzFCO0FBQUV4RSxZQUFRLEVBQUV3RSxXQUFXLENBQUMsQ0FBRCxDQUF2QjtBQUE0QmhFLGNBQVUsRUFBRWdFLFdBQVcsQ0FBQyxDQUFEO0FBQW5ELEdBRDBCLEdBRTFCOVEsU0FGTjs7QUFHQSxNQUFJLENBQUNpUSxZQUFELElBQWlCalAsT0FBTyxDQUFDcVEsUUFBN0IsRUFBdUM7QUFDbkMsVUFBTSxJQUFJakQsS0FBSixDQUFXLDhDQUE2Q2pHLFFBQVMsNEpBQTJKbkssTUFBTSxDQUFDc0QsTUFBUCxDQUFjdVAsY0FBZCxFQUM3TnBILEdBRDZOLENBQ3hONkgsTUFBRCxJQUFZQSxNQUFNLENBQUNKLElBRHNNLEVBRTdOSyxJQUY2TixDQUV4TixJQUZ3TixDQUVsTixFQUZWLENBQU47QUFHSDs7QUFDRCxTQUFPdEIsWUFBUDtBQUNIOztBQUNEL1IsT0FBTyxDQUFDOFIsZUFBUixHQUEwQkEsZUFBMUI7O0FBQ0E5UixPQUFPLENBQUNrUyxnQkFBUixHQUE0QkwsSUFBRCxJQUFVO0FBQ2pDLFNBQU9BLElBQUksQ0FBQy9DLFFBQUwsQ0FBYytELElBQWQsQ0FBb0I5RCxPQUFELElBQWFBLE9BQU8sQ0FBQ3VFLE1BQXhDLENBQVA7QUFDSCxDQUZELEMsQ0FHQTtBQUNBOzs7QUFDQXRULE9BQU8sQ0FBQ2lTLGdCQUFSLEdBQTJCLENBQUNKLElBQUQsRUFBTzVILFFBQVAsS0FBb0I7QUFDM0MsUUFBTXNKLFdBQVcsR0FBR3ZULE9BQU8sQ0FBQ2tTLGdCQUFSLENBQXlCTCxJQUF6QixDQUFwQixDQUQyQyxDQUUzQztBQUNBOztBQUNBLFFBQU0yQix1QkFBdUIsR0FBRyxDQUM1QixHQUFHM0IsSUFBSSxDQUFDL0MsUUFBTCxDQUFjMkUsTUFBZCxDQUFzQjFFLE9BQUQsSUFBYUEsT0FBTyxLQUFLd0UsV0FBOUMsQ0FEeUIsRUFFNUJBLFdBRjRCLENBQWhDO0FBSUEsU0FBT0MsdUJBQXVCLENBQUNYLElBQXhCLENBQThCOUQsT0FBRCxJQUFhO0FBQzdDLFdBQU8sQ0FBQyxDQUFDeUIsUUFBUSxDQUFDdUMsU0FBVCxDQUFtQjlJLFFBQW5CLEVBQTZCO0FBQ2xDK0ksVUFBSSxFQUFFakUsT0FBTyxDQUFDaUUsSUFEb0I7QUFFbENDLFdBQUssRUFBRSxLQUYyQjtBQUdsQ0MsWUFBTSxFQUFFO0FBSDBCLEtBQTdCLENBQVQ7QUFLSCxHQU5NLENBQVA7QUFPSCxDQWZEOztBQWdCQWxULE9BQU8sQ0FBQ21TLG1CQUFSLEdBQThCLENBQUNOLElBQUQsRUFBTzVILFFBQVAsS0FBb0I7QUFDOUMsUUFBTStILGFBQWEsR0FBR2hTLE9BQU8sQ0FBQ2lTLGdCQUFSLENBQXlCSixJQUF6QixFQUErQjVILFFBQS9CLENBQXRCO0FBQ0EsUUFBTXlKLFNBQVMsR0FBRzFCLGFBQWEsS0FBSyxJQUFsQixJQUEwQkEsYUFBYSxLQUFLLEtBQUssQ0FBakQsR0FBcUQsS0FBSyxDQUExRCxHQUE4REEsYUFBYSxDQUFDN0MsSUFBZCxDQUFtQjBELElBQW5CLENBQXlCYyxHQUFELElBQVMsQ0FBQyxDQUFDbkQsUUFBUSxDQUFDdUMsU0FBVCxDQUFtQjlJLFFBQW5CLEVBQTZCO0FBQzVJK0ksUUFBSSxFQUFFVyxHQUFHLENBQUNYLElBRGtJO0FBRTVJQyxTQUFLLEVBQUUsSUFGcUk7QUFHNUlDLFVBQU0sRUFBRTtBQUhvSSxHQUE3QixDQUFuQyxDQUFoRjs7QUFLQSxXQUFTVSx1QkFBVCxDQUFpQ0MsS0FBakMsRUFBd0M7QUFDcEMsVUFBTWhHLE1BQU0sR0FBRyxFQUFmO0FBQ0FnRSxRQUFJLENBQUMvQyxRQUFMLENBQWM5RyxPQUFkLENBQXVCK0csT0FBRCxJQUFhO0FBQy9CQSxhQUFPLENBQUNJLElBQVIsQ0FBYW5ILE9BQWIsQ0FBc0IyTCxHQUFELElBQVM7QUFDMUIsWUFBSUEsR0FBRyxDQUFDN08sRUFBSixLQUFXK08sS0FBZixFQUFzQjtBQUNsQmhHLGdCQUFNLENBQUNrQixPQUFPLENBQUNDLElBQVQsQ0FBTixHQUF1QjJFLEdBQXZCO0FBQ0g7QUFDSixPQUpEO0FBS0gsS0FORDtBQU9BLFdBQU85RixNQUFQO0FBQ0g7O0FBQ0QsUUFBTWlHLG9CQUFvQixHQUFHSixTQUFTLEdBQ2hDRSx1QkFBdUIsQ0FBQ0YsU0FBUyxDQUFDNU8sRUFBWCxDQURTLEdBRWhDLEVBRk47QUFHQSxTQUFPO0FBQ0hrTixpQkFERztBQUVIMEIsYUFGRztBQUdISyx3QkFBb0IsRUFBRUQ7QUFIbkIsR0FBUDtBQUtILENBMUJEOztBQTJCQTlULE9BQU8sQ0FBQ29TLHdCQUFSLEdBQW1DLENBQUNQLElBQUQsRUFBTzVILFFBQVAsS0FBb0I7QUFDbkQsUUFBTStKLGFBQWEsR0FBR2hVLE9BQU8sQ0FBQ2tTLGdCQUFSLENBQXlCTCxJQUF6QixDQUF0QjtBQUNBLFFBQU1vQyxnQkFBZ0IsR0FBR2pVLE9BQU8sQ0FBQ21TLG1CQUFSLENBQTRCTixJQUE1QixFQUFrQzVILFFBQWxDLENBQXpCLENBRm1ELENBR25EOztBQUNBLFFBQU1pSyxvQkFBb0IsR0FBR0QsZ0JBQWdCLENBQUNqQyxhQUFqQixLQUFtQ2dDLGFBQWhFO0FBQ0EsUUFBTUcsbUJBQW1CLEdBQUdELG9CQUFvQixHQUMxQ0QsZ0JBQWdCLEtBQUssSUFBckIsSUFBNkJBLGdCQUFnQixLQUFLLEtBQUssQ0FBdkQsR0FBMkQsS0FBSyxDQUFoRSxHQUFvRUEsZ0JBQWdCLENBQUNGLG9CQUFqQixDQUFzQ0MsYUFBYSxDQUFDaEYsSUFBcEQsQ0FEMUIsR0FDc0ZsTixTQUR0STtBQUVBLFFBQU1zUyx1QkFBdUIsR0FBR0Ysb0JBQW9CLEdBQzlDRixhQUQ4QyxHQUU5Q2xTLFNBRk47QUFHQSxTQUFPO0FBQUVxUyx1QkFBRjtBQUF1QkM7QUFBdkIsR0FBUDtBQUNILENBWEQsQzs7Ozs7Ozs7QUM3RWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F0VSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELE9BQU8sQ0FBQ2UsVUFBUixHQUFxQixLQUFLLENBQTFCLEMsQ0FDQTs7QUFDQWYsT0FBTyxDQUFDZSxVQUFSLEdBQXFCLENBQUNzVCxLQUFELEVBQVFDLEtBQVIsS0FBa0I7QUFDbkMsUUFBTUMsU0FBUyxHQUFJdEssUUFBRCxJQUFjO0FBQzVCLFdBQU8sQ0FBQ0EsUUFBRCxLQUFjQSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDdUssUUFBVCxDQUFrQixHQUFsQixDQUFsRSxJQUE0RnZLLFFBQTVGLEdBQXdHLEdBQUVBLFFBQVMsR0FBMUg7QUFDSCxHQUZEOztBQUdBLFNBQU9zSyxTQUFTLENBQUNGLEtBQUQsQ0FBVCxLQUFxQkUsU0FBUyxDQUFDRCxLQUFELENBQXJDO0FBQ0gsQ0FMRCxDOzs7Ozs7OztBQ1ZhOztBQUNiLElBQUl6SCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQWhOLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDaUIsaUJBQVIsR0FBNEIsS0FBSyxDQUFqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNK0wsc0JBQXNCLEdBQUdILGVBQWUsQ0FBQzFNLG1CQUFPLENBQUMsRUFBRCxDQUFSLENBQTlDOztBQUNBSCxPQUFPLENBQUNpQixpQkFBUixHQUE2QndULEtBQUQsSUFBVztBQUNuQyxRQUFNO0FBQUU5UixjQUFVLEdBQUc7QUFBZixNQUFzQnFLLHNCQUFzQixDQUFDQyxPQUF2QixFQUE1QjtBQUNBLFFBQU07QUFBRXdILFNBQUssRUFBRUMsU0FBVDtBQUFvQkMsa0JBQWMsR0FBRztBQUFyQyxNQUE2Q2hTLFVBQW5EO0FBQ0EsU0FBTzhSLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxJQUFOLEdBQWFsUixNQUF0QixHQUNBLEdBQUUrUSxLQUFLLENBQUNHLElBQU4sRUFBYSxJQUFHRCxjQUFlLElBQUdELFNBQVUsRUFEOUMsR0FFREEsU0FGTjtBQUdILENBTkQsQzs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJN0gsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FoTixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELE9BQU8sQ0FBQ21CLGFBQVIsR0FBd0IsS0FBSyxDQUE3Qjs7QUFDQSxNQUFNNE0sT0FBTyxHQUFHNU4sbUJBQU8sQ0FBQyxDQUFELENBQXZCOztBQUNBLE1BQU02TSxzQkFBc0IsR0FBR0gsZUFBZSxDQUFDMU0sbUJBQU8sQ0FBQyxFQUFELENBQVIsQ0FBOUMsQyxDQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTBVLGtCQUFrQixHQUFHLENBQ3ZCLE1BRHVCLEVBRXZCLEtBRnVCLEVBR3ZCLEtBSHVCLEVBSXZCLEtBSnVCLEVBS3ZCLE1BTHVCLEVBTXZCLE9BTnVCLENBQTNCOztBQVFBLFNBQVNDLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXNDO0FBQ2xDLFNBQU9GLGtCQUFrQixDQUFDcEIsTUFBbkIsQ0FBMkJ1QixFQUFELElBQVFELFdBQVcsQ0FBQ0UsUUFBWixDQUFxQkQsRUFBckIsQ0FBbEMsQ0FBUDtBQUNILEMsQ0FDRDs7O0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUc7QUFDdkJuRSxRQUFNLEVBQUUsSUFEZTtBQUV2QmdFLGFBQVcsRUFBRUQsZUFBZSxDQUFDLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBRCxDQUZMO0FBR3ZCSyxRQUFNLEVBQUdDLEtBQUQsSUFBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxLQUFkLEdBQXNCO0FBSG5CLENBQTNCOztBQUtBLFNBQVNDLHVCQUFULENBQWlDdEUsTUFBakMsRUFBeUM7QUFDckMsUUFBTXVFLFdBQVcsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFdBQVQsQ0FBcUJ6RSxNQUFyQixDQUFwQjtBQUNBLFNBQU87QUFDSEEsVUFERztBQUVIZ0UsZUFBVyxFQUFFRCxlQUFlLENBQUNRLFdBQVcsQ0FBQ0csZUFBWixHQUE4QkMsZ0JBQS9CLENBRnpCO0FBR0hQLFVBQU0sRUFBR0MsS0FBRCxJQUFXRSxXQUFXLENBQUNILE1BQVosQ0FBbUJDLEtBQW5CO0FBSGhCLEdBQVA7QUFLSCxDLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU08sb0JBQVQsR0FBZ0M7QUFDNUIsUUFBTTtBQUFFbEYsUUFBSSxFQUFFO0FBQUVFO0FBQUY7QUFBUixNQUErQjNELHNCQUFzQixDQUFDQyxPQUF2QixFQUFyQztBQUNBLFNBQU9jLE9BQU8sQ0FBQ3NCLE9BQVIsQ0FBZ0IsTUFBTTtBQUN6QjtBQUNBLFFBQUlrRyxJQUFJLENBQUNDLFdBQVQsRUFBc0I7QUFDbEIsVUFBSTtBQUNBLGVBQU9ILHVCQUF1QixDQUFDMUUsYUFBRCxDQUE5QjtBQUNILE9BRkQsQ0FHQSxPQUFPalAsQ0FBUCxFQUFVO0FBQ05rVSxlQUFPLENBQUNDLEtBQVIsQ0FBZSw2Q0FBNENsRixhQUFjO0FBQ3pGO0FBQ0EsQ0FGZ0I7QUFHQSxlQUFPdUUsa0JBQVA7QUFDSDtBQUNKLEtBVkQsTUFXSztBQUNEVSxhQUFPLENBQUNDLEtBQVIsQ0FBZTtBQUMzQjtBQUNBLFNBRlk7QUFHQSxhQUFPWCxrQkFBUDtBQUNIO0FBQ0osR0FuQk0sRUFtQkosQ0FBQ3ZFLGFBQUQsQ0FuQkksQ0FBUDtBQW9CSDs7QUFDRCxTQUFTbUYsbUJBQVQsQ0FBNkJDLGNBQTdCLEVBQTZDWCxLQUE3QyxFQUFvRFksaUJBQXBELEVBQXVFO0FBQ25FLFFBQU1DLFNBQVMsR0FBRyxHQUFsQjtBQUNBLFFBQU1DLEtBQUssR0FBR0gsY0FBYyxDQUFDN1IsS0FBZixDQUFxQitSLFNBQXJCLENBQWQ7O0FBQ0EsTUFBSUMsS0FBSyxDQUFDeFMsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQixXQUFPd1MsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNILEdBRkQsTUFHSztBQUNELFFBQUlBLEtBQUssQ0FBQ3hTLE1BQU4sR0FBZXNTLGlCQUFpQixDQUFDakIsV0FBbEIsQ0FBOEJyUixNQUFqRCxFQUF5RDtBQUNyRGtTLGFBQU8sQ0FBQ0MsS0FBUixDQUFlLGNBQWFHLGlCQUFpQixDQUFDakYsTUFBTyxrQkFBaUJpRixpQkFBaUIsQ0FBQ2pCLFdBQWxCLENBQThCclIsTUFBTywrQkFBOEJzUyxpQkFBaUIsQ0FBQ2pCLFdBQVksK0JBQThCbUIsS0FBSyxDQUFDeFMsTUFBTyxrQkFBaUJxUyxjQUFlLEdBQWxQO0FBQ0g7O0FBQ0QsVUFBTUksVUFBVSxHQUFHSCxpQkFBaUIsQ0FBQ2IsTUFBbEIsQ0FBeUJDLEtBQXpCLENBQW5CO0FBQ0EsVUFBTWdCLGVBQWUsR0FBR0osaUJBQWlCLENBQUNqQixXQUFsQixDQUE4QnBQLE9BQTlCLENBQXNDd1EsVUFBdEMsQ0FBeEIsQ0FMQyxDQU1EOztBQUNBLFdBQU9ELEtBQUssQ0FBQ0csSUFBSSxDQUFDQyxHQUFMLENBQVNGLGVBQVQsRUFBMEJGLEtBQUssQ0FBQ3hTLE1BQU4sR0FBZSxDQUF6QyxDQUFELENBQVo7QUFDSDtBQUNKOztBQUNELFNBQVN2QyxhQUFULEdBQXlCO0FBQ3JCLFFBQU1vVixnQkFBZ0IsR0FBR1osb0JBQW9CLEVBQTdDO0FBQ0EsU0FBTztBQUNIYSxpQkFBYSxFQUFFLENBQUNwQixLQUFELEVBQVFXLGNBQVIsS0FBMkI7QUFDdEMsYUFBT0QsbUJBQW1CLENBQUNDLGNBQUQsRUFBaUJYLEtBQWpCLEVBQXdCbUIsZ0JBQXhCLENBQTFCO0FBQ0g7QUFIRSxHQUFQO0FBS0g7O0FBQ0R2VyxPQUFPLENBQUNtQixhQUFSLEdBQXdCQSxhQUF4QixDOzs7Ozs7OztBQ3BHYTs7QUFDYnJCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDc0IsaUNBQVIsR0FBNEN0QixPQUFPLENBQUNxQix1QkFBUixHQUFrQyxLQUFLLENBQW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU0wTSxPQUFPLEdBQUc1TixtQkFBTyxDQUFDLENBQUQsQ0FBdkI7O0FBQ0EsTUFBTW9CLDhCQUE4QixHQUFHcEIsbUJBQU8sQ0FBQyxHQUFELENBQTlDOztBQUNBLE1BQU1nTixTQUFTLEdBQUdoTixtQkFBTyxDQUFDLEdBQUQsQ0FBekI7O0FBQ0EsTUFBTXNXLFdBQVcsR0FBR3RXLG1CQUFPLENBQUMsR0FBRCxDQUEzQixDLENBQ0E7QUFDQTs7O0FBQ0EsU0FBU2tCLHVCQUFULENBQWlDK00sUUFBUSxHQUFHcUksV0FBVyxDQUFDcEUsaUJBQXhELEVBQTJFO0FBQ3ZFLFFBQU1xRSxRQUFRLEdBQUd2SixTQUFTLENBQUNxRSxXQUFWLENBQXNCcEQsUUFBdEIsQ0FBakI7QUFDQSxRQUFNLENBQUM3QixLQUFELEVBQVFpRCxHQUFSLElBQWVqTyw4QkFBOEIsQ0FBQ3VNLDhCQUEvQixFQUFyQjtBQUNBLFFBQU07QUFBRU87QUFBRixNQUEyQjlCLEtBQUssQ0FBQzZCLFFBQUQsQ0FBdEM7QUFDQSxRQUFNdUksZ0JBQWdCLEdBQUd0SSxvQkFBb0IsR0FDdkNxSSxRQUFRLENBQUM1SCxRQUFULENBQWtCK0QsSUFBbEIsQ0FBd0I5RCxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQlgsb0JBQXJELENBRHVDLEdBRXZDLElBRk47QUFHQSxRQUFNdUksd0JBQXdCLEdBQUc3SSxPQUFPLENBQUM4SSxXQUFSLENBQXFCbkgsV0FBRCxJQUFpQjtBQUNsRUYsT0FBRyxDQUFDQyxvQkFBSixDQUF5QnJCLFFBQXpCLEVBQW1Dc0IsV0FBbkM7QUFDSCxHQUZnQyxFQUU5QixDQUFDRixHQUFELENBRjhCLENBQWpDO0FBR0EsU0FBTztBQUFFbUgsb0JBQUY7QUFBb0JDO0FBQXBCLEdBQVA7QUFDSDs7QUFDRDVXLE9BQU8sQ0FBQ3FCLHVCQUFSLEdBQWtDQSx1QkFBbEM7O0FBQ0EsU0FBU0MsaUNBQVQsR0FBNkM7QUFDekMsUUFBTWtOLFdBQVcsR0FBR3JCLFNBQVMsQ0FBQ3ZMLGNBQVYsRUFBcEI7QUFDQSxRQUFNLENBQUMySyxLQUFELElBQVVoTCw4QkFBOEIsQ0FBQ3VNLDhCQUEvQixFQUFoQjs7QUFDQSxXQUFTZ0osMkJBQVQsQ0FBcUMxSSxRQUFyQyxFQUErQztBQUMzQyxVQUFNc0ksUUFBUSxHQUFHbEksV0FBVyxDQUFDSixRQUFELENBQTVCO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQTJCOUIsS0FBSyxDQUFDNkIsUUFBRCxDQUF0QztBQUNBLFdBQU9DLG9CQUFvQixHQUNyQnFJLFFBQVEsQ0FBQzVILFFBQVQsQ0FBa0IrRCxJQUFsQixDQUF3QjlELE9BQUQsSUFBYUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCWCxvQkFBckQsQ0FEcUIsR0FFckIsSUFGTjtBQUdIOztBQUNELFFBQU1ILFNBQVMsR0FBR3BPLE1BQU0sQ0FBQ3dQLElBQVAsQ0FBWWQsV0FBWixDQUFsQjtBQUNBLFFBQU1YLE1BQU0sR0FBRyxFQUFmO0FBQ0FLLFdBQVMsQ0FBQ2xHLE9BQVYsQ0FBbUJvRyxRQUFELElBQWM7QUFDNUJQLFVBQU0sQ0FBQ08sUUFBRCxDQUFOLEdBQW1CMEksMkJBQTJCLENBQUMxSSxRQUFELENBQTlDO0FBQ0gsR0FGRDtBQUdBLFNBQU9QLE1BQVA7QUFDSDs7QUFDRDdOLE9BQU8sQ0FBQ3NCLGlDQUFSLEdBQTRDQSxpQ0FBNUMsQzs7Ozs7Ozs7QUM3Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F4QixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU04VyxVQUFVLEdBQUkzSSxRQUFELElBQWUsMEJBQXlCQSxRQUFTLEVBQXBFOztBQUNBLE1BQU00SSwyQkFBMkIsR0FBRztBQUNoQ3JILE1BQUksRUFBRSxDQUFDdkIsUUFBRCxFQUFXNkksV0FBWCxFQUF3QnZILFdBQXhCLEtBQXdDO0FBQzFDLFFBQUl1SCxXQUFXLEtBQUssTUFBcEIsRUFBNEIsQ0FDeEI7QUFDSCxLQUZELE1BR0s7QUFDRHBQLFlBQU0sQ0FBQ3FQLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSixVQUFVLENBQUMzSSxRQUFELENBQXRDLEVBQWtEc0IsV0FBbEQ7QUFDSDtBQUNKLEdBUitCO0FBU2hDZixNQUFJLEVBQUUsQ0FBQ1AsUUFBRCxFQUFXNkksV0FBWCxLQUEyQjtBQUM3QixRQUFJQSxXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFDeEIsYUFBTyxJQUFQO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBT3BQLE1BQU0sQ0FBQ3FQLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCTCxVQUFVLENBQUMzSSxRQUFELENBQXRDLENBQVA7QUFDSDtBQUNKLEdBaEIrQjtBQWlCaENhLE9BQUssRUFBRSxDQUFDYixRQUFELEVBQVc2SSxXQUFYLEtBQTJCO0FBQzlCLFFBQUlBLFdBQVcsS0FBSyxNQUFwQixFQUE0QixDQUN4QjtBQUNILEtBRkQsTUFHSztBQUNEcFAsWUFBTSxDQUFDcVAsWUFBUCxDQUFvQkcsVUFBcEIsQ0FBK0JOLFVBQVUsQ0FBQzNJLFFBQUQsQ0FBekM7QUFDSDtBQUNKO0FBeEIrQixDQUFwQztBQTBCQXBPLE9BQU8sQ0FBQ2lOLE9BQVIsR0FBa0IrSiwyQkFBbEIsQzs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTTNFLGlCQUFpQixHQUFHLFNBQTFCLEM7Ozs7Ozs7O0FDakJQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU05QixZQUFZLGdCQUFHM00sNENBQUssQ0FBQ2lNLGFBQU4sQ0FBb0IvTixTQUFwQixDQUFyQjtBQUNleU8scUVBQWYsRTs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBUytHLEdBQVQsQ0FBYTtBQUFDN0MsT0FBRDtBQUFROEMsYUFBUjtBQUFxQkMsVUFBckI7QUFBK0JDO0FBQS9CLENBQWIsRUFBb0Q7QUFDakUsUUFBTUMsU0FBUyxHQUFHelcsa0ZBQWlCLENBQUN3VCxLQUFELENBQW5DO0FBQ0EsUUFBTWtELFlBQVksR0FBRzVVLDhFQUFVLENBQUMwVSxLQUFELEVBQVE7QUFDckNyVixZQUFRLEVBQUU7QUFEMkIsR0FBUixDQUEvQjtBQUdBLHNCQUNFLDJEQUFDLGdFQUFELFFBQ0dxUyxLQUFLLGlCQUFJLDBFQUFRaUQsU0FBUixDQURaLEVBRUdqRCxLQUFLLGlCQUFJO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFaUQ7QUFBbkMsSUFGWixFQUlHSCxXQUFXLGlCQUFJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQTtBQUFsQyxJQUpsQixFQUtHQSxXQUFXLGlCQUFJO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRUE7QUFBekMsSUFMbEIsRUFPR0MsUUFBUSxpQkFDUDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsV0FBTyxFQUFFSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsUUFBZCxJQUEwQkEsUUFBUSxDQUFDbkUsSUFBVCxDQUFjLEdBQWQsQ0FBMUIsR0FBK0NtRTtBQUYxRCxJQVJKLEVBY0dDLEtBQUssaUJBQUk7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVFO0FBQW5DLElBZFosRUFlR0YsS0FBSyxpQkFBSTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBRUU7QUFBcEMsSUFmWixFQWdCR0YsS0FBSyxpQkFBSTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQztBQUFsQyxJQWhCWixDQURGO0FBb0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7QUNMRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFdBQVcsR0FBSXJSLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQUNzUjtBQUFELE1BQWFuVix1Q0FBb0IsRUFBdkM7QUFDQSxRQUFNO0FBQUNvVjtBQUFELE1BQWdCMUgsMENBQWUsRUFBckM7O0FBQ0EsUUFBTTtBQUFDMkgsV0FBRDtBQUFVNU4sYUFBVjtBQUFxQjZOLE9BQUcsR0FBRztBQUEzQixNQUErQ3pSLEtBQXJEO0FBQUEsUUFBd0MwUixTQUF4QyxpQ0FBcUQxUixLQUFyRDs7QUFDQSxRQUFNMlIsbUJBQW1CLEdBQUdMLFFBQVEsR0FDaENDLFdBQVcsR0FDVCxDQUFDLE1BQUQsQ0FEUyxHQUVULENBQUMsT0FBRCxDQUg4QixDQUdwQjtBQUhvQixJQUloQztBQUNBLEdBQUMsT0FBRCxFQUFVLE1BQVYsQ0FMSjtBQU1BLHNCQUNFLDhEQUNHSSxtQkFBbUIsQ0FBQzdNLEdBQXBCLENBQXlCOE0sVUFBRCxpQkFDdkI7QUFDRSxPQUFHLEVBQUVBLFVBRFA7QUFFRSxPQUFHLEVBQUVKLE9BQU8sQ0FBQ0ksVUFBRCxDQUZkO0FBR0UsT0FBRyxFQUFFSCxHQUhQO0FBSUUsYUFBUyxFQUFFOU0seUJBQUksQ0FDYmtOLGFBQU0sQ0FBQ0MsV0FETSxFQUViRCxhQUFNLENBQUUsZ0JBQWVELFVBQVcsRUFBNUIsQ0FGTyxFQUdiaE8sU0FIYTtBQUpqQixLQVNNOE4sU0FUTixFQURELENBREgsQ0FERjtBQWlCRCxDQTNCRDs7QUE2QmVMLDRGQUFmLEU7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVUsaUJBQWlCLEdBQUcsT0FBTztBQUMvQkMsU0FBTyxFQUFFalIsZ0ZBQW9CLENBQUNrUixTQUFyQixHQUFpQzdRLE1BQU0sQ0FBQzhRLFdBQXhDLEdBQXNELENBRGhDO0FBRS9CQyxTQUFPLEVBQUVwUixnRkFBb0IsQ0FBQ2tSLFNBQXJCLEdBQWlDN1EsTUFBTSxDQUFDZ1IsV0FBeEMsR0FBc0Q7QUFGaEMsQ0FBUCxDQUExQjs7QUFLQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDQyxNQUFELEVBQVNDLElBQUksR0FBRyxFQUFoQixLQUF1QjtBQUMvQyxRQUFNLENBQUNDLGNBQUQsRUFBaUJDLGlCQUFqQixJQUFzQ3hPLHNEQUFRLENBQUM4TixpQkFBaUIsRUFBbEIsQ0FBcEQ7O0FBRUEsUUFBTVcsWUFBWSxHQUFHLE1BQU07QUFDekIsVUFBTUMscUJBQXFCLEdBQUdaLGlCQUFpQixFQUEvQztBQUNBVSxxQkFBaUIsQ0FBQ0UscUJBQUQsQ0FBakI7O0FBRUEsUUFBSUwsTUFBSixFQUFZO0FBQ1ZBLFlBQU0sQ0FBQ0sscUJBQUQsQ0FBTjtBQUNEO0FBQ0YsR0FQRDs7QUFTQXJRLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1zUSxJQUFJLEdBQUc7QUFDWEMsYUFBTyxFQUFFO0FBREUsS0FBYjtBQUdBelIsVUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NvTyxZQUFsQyxFQUFnREUsSUFBaEQ7QUFDQSxXQUFPLE1BQU14UixNQUFNLENBQUNtRCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ21PLFlBQXJDLEVBQW1ERSxJQUFuRCxDQUFiO0FBQ0QsR0FOUSxFQU1OTCxJQU5NLENBQVQ7QUFPQSxTQUFPQyxjQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JlSCwwRUFBZixFOzs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1MsaUJBQVQsQ0FBMkJDLElBQUksR0FBRyxJQUFsQyxFQUF3QztBQUN0Q3pRLHlEQUFTLENBQUMsTUFBTTtBQUNkK0IsWUFBUSxDQUFDMk8sSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQkgsSUFBSSxHQUFHLFFBQUgsR0FBYyxTQUFqRDtBQUNBLFdBQU8sTUFBTTtBQUNYMU8sY0FBUSxDQUFDMk8sSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixTQUEvQjtBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ0gsSUFBRCxDQUxNLENBQVQ7QUFNRDs7QUFFY0QsMEVBQWYsRTs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUsscUJBQXFCLEdBQUcsR0FBOUI7QUFDQSxNQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFNBQU8sRUFBRSxTQURTO0FBRWxCbk4sUUFBTSxFQUFFO0FBRlUsQ0FBcEI7O0FBS0EsU0FBU29OLGFBQVQsR0FBeUI7QUFDdkIsUUFBTWhDLFFBQVEsR0FBR3ZRLGdGQUFvQixDQUFDa1IsU0FBdEM7O0FBRUEsV0FBU3NCLE9BQVQsR0FBbUI7QUFDakIsUUFBSSxDQUFDakMsUUFBTCxFQUFlO0FBQ2IsYUFBT2pXLFNBQVA7QUFDRDs7QUFFRCxXQUFPK0YsTUFBTSxDQUFDb1MsVUFBUCxHQUFvQkwscUJBQXBCLEdBQ0hDLFdBQVcsQ0FBQ0MsT0FEVCxHQUVIRCxXQUFXLENBQUNsTixNQUZoQjtBQUdEOztBQUVELFFBQU0sQ0FBQ3VOLFVBQUQsRUFBYUMsYUFBYixJQUE4QnpQLHNEQUFRLENBQUNzUCxPQUFELENBQTVDO0FBQ0FqUix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNnUCxRQUFMLEVBQWU7QUFDYixhQUFPalcsU0FBUDtBQUNEOztBQUVELGFBQVNzWSxZQUFULEdBQXdCO0FBQ3RCRCxtQkFBYSxDQUFDSCxPQUFPLEVBQVIsQ0FBYjtBQUNEOztBQUVEblMsVUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NxUCxZQUFsQztBQUNBLFdBQU8sTUFBTXZTLE1BQU0sQ0FBQ21ELG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDb1AsWUFBckMsQ0FBYjtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFZQSxTQUFPRixVQUFQO0FBQ0Q7O0FBRUQ7QUFDZUgsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1NLElBQUksR0FBSTVULEtBQUQsSUFBVztBQUN0QixRQUFNO0FBQUNzUjtBQUFELE1BQWFuVixnRkFBb0IsRUFBdkM7QUFDQSxRQUFNO0FBQ0owWCxVQUFNLEVBQUU7QUFDTjdGLFdBRE07QUFFTjhGLFVBQUksR0FBRztBQUNMQyxXQUFHLEVBQUU7QUFEQTtBQUZEO0FBREosTUFPRmxhLCtFQUFjLEVBUGxCOztBQVFBLFFBQU07QUFBQ21hLGtCQUFEO0FBQWlCQztBQUFqQixNQUFpRGpVLEtBQXZEO0FBQUEsUUFBMEMwUixTQUExQyxpQ0FBdUQxUixLQUF2RDs7QUFDQSxRQUFNa1UsUUFBUSxHQUFHNVgsOEVBQVUsQ0FBQ3dYLElBQUksQ0FBQ25VLElBQUwsSUFBYSxHQUFkLENBQTNCO0FBQ0EsUUFBTTZSLE9BQU8sR0FBRztBQUNkMkMsU0FBSyxFQUFFN1gsOEVBQVUsQ0FBQ3dYLElBQUksQ0FBQ0MsR0FBTixDQURIO0FBRWRLLFFBQUksRUFBRTlYLDhFQUFVLENBQUN3WCxJQUFJLENBQUNPLE9BQUwsSUFBZ0JQLElBQUksQ0FBQ0MsR0FBdEI7QUFGRixHQUFoQjtBQUlBLHNCQUNFLDJEQUFDLGdFQUFEO0FBQ0UsTUFBRSxFQUFFRztBQUROLEtBRU14QyxTQUZOLEVBR09vQyxJQUFJLENBQUNyUyxNQUFMLElBQWU7QUFDbEJBLFVBQU0sRUFBRXFTLElBQUksQ0FBQ3JTO0FBREssR0FIdEIsR0FNR3FTLElBQUksQ0FBQ0MsR0FBTCxpQkFDQywyREFBQyxrRUFBRDtBQUNFLE9BQUcsRUFBRXpDLFFBRFA7QUFFRSxhQUFTLEVBQUUwQyxjQUZiO0FBR0UsV0FBTyxFQUFFeEMsT0FIWDtBQUlFLE9BQUcsRUFBRXNDLElBQUksQ0FBQ3JDLEdBQUwsSUFBWXpELEtBQVosSUFBcUI7QUFKNUIsSUFQSixFQWNHQSxLQUFLLElBQUksSUFBVCxpQkFBaUI7QUFBUSxhQUFTLEVBQUVpRztBQUFuQixLQUFvQ2pHLEtBQXBDLENBZHBCLENBREY7QUFrQkQsQ0FsQ0Q7O0FBb0NlNEYsNkRBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVUsUUFBUSxHQUFHLFVBQXdEO0FBQUEsTUFBdkQ7QUFBQ0MsU0FBSyxHQUFHLEVBQVQ7QUFBYXhPLFVBQU0sR0FBRyxFQUF0QjtBQUEwQm5DO0FBQTFCLEdBQXVEO0FBQUEsTUFBZjRRLFNBQWU7O0FBQ3ZFLHNCQUNFO0FBQ0Usa0JBQVcsTUFEYjtBQUVFLGFBQVMsRUFBRTVRLFNBRmI7QUFHRSxTQUFLLEVBQUUyUSxLQUhUO0FBSUUsVUFBTSxFQUFFeE8sTUFKVjtBQUtFLFdBQU8sRUFBQyxXQUxWO0FBTUUsUUFBSSxFQUFDLEtBTlA7QUFPRSxhQUFTLEVBQUM7QUFQWixLQVFNeU8sU0FSTixnQkFTRSxpRkFURixlQVVFO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxpQkFBYSxFQUFDLE9BRmhCO0FBR0Usb0JBQWdCLEVBQUMsSUFIbkI7QUFJRSxlQUFXLEVBQUMsR0FKZDtBQUtFLEtBQUMsRUFBQztBQUxKLElBVkYsQ0FERjtBQW9CRCxDQXJCRDs7QUF1QmVGLGlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ2U7QUFDZjtBQUNBLENBQUMsRUFBQzs7O0FDSEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csaUJBQVQsQ0FBMkJqWCxFQUEzQixFQUErQjtBQUM3QkEsSUFBRSxDQUFDa1gsWUFBSCxDQUFnQixVQUFoQixFQUE0QixJQUE1QjtBQUNBbFgsSUFBRSxDQUFDMkgsS0FBSDtBQUNBM0gsSUFBRSxDQUFDbVgsZUFBSCxDQUFtQixVQUFuQjtBQUNEOztBQUVELFNBQVNDLGFBQVQsR0FBeUI7QUFDdkIsUUFBTUMsWUFBWSxHQUFHblUsdUJBQU0sQ0FBQyxJQUFELENBQTNCO0FBQ0EsUUFBTTJDLFFBQVEsR0FBR2lDLDZCQUFXLEVBQTVCOztBQUVBLFFBQU13UCxVQUFVLEdBQUk3WixDQUFELElBQU87QUFDeEJBLEtBQUMsQ0FBQzRKLGNBQUY7QUFDQSxVQUFNa1EsYUFBYSxHQUNqQjFRLFFBQVEsQ0FBQzJRLGFBQVQsQ0FBdUIsb0JBQXZCLEtBQ0EzUSxRQUFRLENBQUMyUSxhQUFULENBQXVCLGVBQXZCLENBRkY7O0FBSUEsUUFBSUQsYUFBSixFQUFtQjtBQUNqQk4sdUJBQWlCLENBQUNNLGFBQUQsQ0FBakI7QUFDRDtBQUNGLEdBVEQ7O0FBV0F6Uyw0QkFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNlLFFBQVEsQ0FBQzRSLElBQWQsRUFBb0I7QUFDbEJSLHVCQUFpQixDQUFDSSxZQUFZLENBQUN6UyxPQUFkLENBQWpCO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ2lCLFFBQVEsQ0FBQ0csUUFBVixDQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFLLE9BQUcsRUFBRXFSO0FBQVYsa0JBQ0U7QUFBRyxRQUFJLEVBQUMsT0FBUjtBQUFnQixhQUFTLEVBQUVoRCxhQUFNLENBQUNxRCxhQUFsQztBQUFpRCxXQUFPLEVBQUVKO0FBQTFELGtCQUNFLDhCQUFDLDRCQUFEO0FBQ0UsTUFBRSxFQUFDLGdDQURMO0FBRUUsZUFBVyxFQUFDO0FBRmQsNEJBREYsQ0FERixDQURGO0FBV0Q7O0FBRWNGLHFFQUFmLEU7Ozs7Ozs7O0FDbERBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7O0FDTkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNPLGVBQVQsR0FBMkI7QUFDekIsUUFBTTtBQUNKQywyQkFESTtBQUVKQztBQUZJLE1BR0YxTCxvREFBeUIsRUFIN0I7QUFJQSxRQUFNO0FBQUMyTDtBQUFELE1BQW9CemIsNkJBQWMsRUFBeEM7O0FBRUEsTUFBSSxDQUFDeWIsZUFBTCxFQUFzQjtBQUNwQixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNO0FBQUNDLFdBQUQ7QUFBVUMsbUJBQVY7QUFBMkJDLGFBQTNCO0FBQXNDQztBQUF0QyxNQUFxREosZUFBM0Q7O0FBRUEsTUFBSSxDQUFDQyxPQUFELElBQWFHLFdBQVcsSUFBSU4sdUJBQWhDLEVBQTBEO0FBQ3hELFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFFdkQsNkJBQU0sQ0FBQ3lELGVBRHBCO0FBRUUsU0FBSyxFQUFFO0FBQ0xFLHFCQURLO0FBRUxHLFdBQUssRUFBRUY7QUFGRixLQUZUO0FBTUUsUUFBSSxFQUFDO0FBTlAsa0JBT0U7QUFDRSxhQUFTLEVBQUU5USx5QkFBSSxDQUFDa04sNkJBQU0sQ0FBQytELHNCQUFSLEVBQWdDO0FBQzdDLE9BQUMvRCw2QkFBTSxDQUFDZ0Usd0JBQVIsR0FBbUNIO0FBRFUsS0FBaEMsQ0FEakIsQ0FHTTtBQUNKO0FBSkY7QUFLRSwyQkFBdUIsRUFBRTtBQUN2QkksWUFBTSxFQUFFUDtBQURlO0FBTDNCLElBUEYsRUFnQkdHLFdBQVcsZ0JBQ1Y7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRTdELDZCQUFNLENBQUNrRSxvQkFGcEI7QUFHRSxXQUFPLEVBQUVWLG9CQUhYO0FBSUUsa0JBQVk3VyxzQ0FBUyxDQUFDO0FBQ3BCSCxRQUFFLEVBQUUsNENBRGdCO0FBRXBCQyxhQUFPLEVBQUUsT0FGVztBQUdwQndTLGlCQUFXLEVBQUU7QUFITyxLQUFEO0FBSnZCLGtCQVNFO0FBQU0sbUJBQVk7QUFBbEIsWUFURixDQURVLEdBWVIsSUE1Qk4sQ0FERjtBQWdDRDs7QUFFY3FFLHlFQUFmLEU7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLCtDQUFNLElBQXJCLEU7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNlO0FBQ2Y7QUFDQSxDQUFDLEVBQUM7Ozs7O0FDSEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1hLElBQUksR0FBRyxDQUFDO0FBQUNDLE1BQUQ7QUFBT2hEO0FBQVAsQ0FBRCxrQkFDWDtBQUFNLFdBQVMsRUFBRXRPLHlCQUFJLENBQUNrTixvQkFBTSxDQUFDcUUsTUFBUixFQUFnQnJFLG9CQUFNLENBQUN1QyxJQUF2QixDQUFyQjtBQUFtRCxPQUFLLEVBQUVuQjtBQUExRCxHQUNHZ0QsSUFESCxDQURGOztBQU1BLE1BQU1FLEtBQUssR0FBRyxDQUFDO0FBQUNGLE1BQUQ7QUFBT2hEO0FBQVAsQ0FBRCxrQkFDWjtBQUFNLFdBQVMsRUFBRXRPLHlCQUFJLENBQUNrTixvQkFBTSxDQUFDcUUsTUFBUixFQUFnQnJFLG9CQUFNLENBQUNzQyxLQUF2QixDQUFyQjtBQUFvRCxPQUFLLEVBQUVsQjtBQUEzRCxHQUNHZ0QsSUFESCxDQURGOztBQU1lLHFEQUFValcsS0FBVixFQUFpQjtBQUM5QixRQUFNO0FBQ0pvVyxhQUFTLEVBQUU7QUFDVEMsa0JBQVksRUFBRTtBQUFDQyxnQkFBRDtBQUFXQyxxQkFBWDtBQUEwQkMsaUJBQTFCO0FBQXFDQztBQUFyQztBQURMO0FBRFAsTUFJRjVjLDZCQUFjLEVBSmxCO0FBS0EsUUFBTTtBQUFDeVg7QUFBRCxNQUFhblYsdUNBQW9CLEVBQXZDO0FBQ0Esc0JBQ0UsOEJBQUMsbUJBQUQ7QUFDRSxZQUFRLEVBQUUsQ0FBQ21WLFFBRGI7QUFFRSxTQUFLLEVBQUU7QUFDTG9GLGFBQU8sZUFBRSw4QkFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFSixRQUFaO0FBQXNCLGFBQUssRUFBRUM7QUFBN0IsUUFESjtBQUVMSSxlQUFTLGVBQUUsOEJBQUMsS0FBRDtBQUFPLFlBQUksRUFBRUgsU0FBYjtBQUF3QixhQUFLLEVBQUVDO0FBQS9CO0FBRk47QUFGVCxLQU1NelcsS0FOTixFQURGO0FBVUQsQzs7Ozs7Ozs7QUMxQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU00VyxpQkFBaUIsR0FBSUMsWUFBRCxJQUFrQjtBQUMxQyxRQUFNeFQsUUFBUSxHQUFHaUMsNkJBQVcsRUFBNUI7QUFDQSxRQUFNLENBQUN3UixlQUFELEVBQWtCQyxrQkFBbEIsSUFBd0M5Uyx5QkFBUSxDQUFDNFMsWUFBRCxDQUF0RDtBQUNBLFFBQU1HLGVBQWUsR0FBR3RXLHVCQUFNLENBQUMsS0FBRCxDQUE5QjtBQUNBLFFBQU0sQ0FBQ3VXLGFBQUQsRUFBZ0JDLGdCQUFoQixJQUFvQ2pULHlCQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBLFFBQU0sQ0FBQ2tULFlBQUQsRUFBZUMsZUFBZixJQUFrQ25ULHlCQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUNBLFFBQU1vVCxTQUFTLEdBQUdqSCw0QkFBVyxDQUFFa0gsSUFBRCxJQUFVO0FBQ3RDLFFBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCRixxQkFBZSxDQUFDRSxJQUFJLENBQUNDLHFCQUFMLEdBQTZCeFIsTUFBOUIsQ0FBZjtBQUNEO0FBQ0YsR0FKNEIsRUFJMUIsRUFKMEIsQ0FBN0I7QUFLQXNNLDhDQUFpQixDQUNmLENBQUM7QUFBQ0YsV0FBTyxFQUFFcUY7QUFBVixHQUFELEtBQTBCO0FBQ3hCLFFBQUksQ0FBQ1gsWUFBTCxFQUFtQjtBQUNqQjtBQUNEOztBQUVELFFBQUlXLFNBQVMsR0FBR0wsWUFBaEIsRUFBOEI7QUFDNUJKLHdCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQTtBQUNEOztBQUVELFFBQUlDLGVBQWUsQ0FBQzVVLE9BQXBCLEVBQTZCO0FBQzNCNFUscUJBQWUsQ0FBQzVVLE9BQWhCLEdBQTBCLEtBQTFCO0FBQ0EyVSx3QkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBQ0FHLHNCQUFnQixDQUFDTSxTQUFELENBQWhCO0FBQ0E7QUFDRDs7QUFFRCxRQUFJUCxhQUFhLElBQUlPLFNBQVMsS0FBSyxDQUFuQyxFQUFzQztBQUNwQ1Qsd0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNEOztBQUVELFVBQU1VLGNBQWMsR0FDbEJwVCxRQUFRLENBQUNxVCxlQUFULENBQXlCN1IsWUFBekIsR0FBd0NzUixZQUQxQztBQUVBLFVBQU1RLFlBQVksR0FBR3ZXLE1BQU0sQ0FBQ3dXLFdBQTVCOztBQUVBLFFBQUlYLGFBQWEsSUFBSU8sU0FBUyxJQUFJUCxhQUFsQyxFQUFpRDtBQUMvQ0Ysd0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNELEtBRkQsTUFFTyxJQUFJUyxTQUFTLEdBQUdHLFlBQVosR0FBMkJGLGNBQS9CLEVBQStDO0FBQ3BEVix3QkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRURHLG9CQUFnQixDQUFDTSxTQUFELENBQWhCO0FBQ0QsR0FqQ2MsRUFrQ2YsQ0FBQ1AsYUFBRCxFQUFnQkUsWUFBaEIsRUFBOEJILGVBQTlCLENBbENlLENBQWpCO0FBb0NBMVUsNEJBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDdVUsWUFBTCxFQUFtQjtBQUNqQjtBQUNEOztBQUVELFFBQUksQ0FBQ0ksYUFBTCxFQUFvQjtBQUNsQjtBQUNEOztBQUVERixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FWUSxFQVVOLENBQUMxVCxRQUFRLENBQUNHLFFBQVYsQ0FWTSxDQUFUO0FBV0FsQiw0QkFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUN1VSxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDeFQsUUFBUSxDQUFDNFIsSUFBZCxFQUFvQjtBQUNsQjtBQUNEOztBQUVEK0IsbUJBQWUsQ0FBQzVVLE9BQWhCLEdBQTBCLElBQTFCO0FBQ0QsR0FWUSxFQVVOLENBQUNpQixRQUFRLENBQUM0UixJQUFWLENBVk0sQ0FBVDtBQVdBLFNBQU87QUFDTG9DLGFBREs7QUFFTFA7QUFGSyxHQUFQO0FBSUQsQ0F6RUQ7O0FBMkVlRiw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWlCLFlBQVksR0FBRyxVQUF5QztBQUFBLE1BQXhDO0FBQUN0RCxTQUFLLEdBQUcsRUFBVDtBQUFheE8sVUFBTSxHQUFHO0FBQXRCLEdBQXdDO0FBQUEsTUFBWC9GLEtBQVc7O0FBQzVELHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUV1VSxLQUhUO0FBSUUsVUFBTSxFQUFFeE87QUFKVixLQUtNL0YsS0FMTixnQkFNRTtBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsS0FBQyxFQUFDO0FBRkosSUFORixDQURGO0FBYUQsQ0FkRDs7QUFnQmU2WCxtRUFBZixFOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNDLHdCQUFULE9BS1o7QUFBQSxNQUw4QztBQUMvQzVSLFVBRCtDO0FBRS9DNlIsdUJBRitDO0FBRy9DQztBQUgrQyxHQUs5QztBQUFBLE1BREVoWSxLQUNGOztBQUNELFFBQU07QUFDSmdLLFFBQUksRUFBRTtBQUFDRSxtQkFBRDtBQUFnQitOLGFBQWhCO0FBQXlCQztBQUF6QjtBQURGLE1BRUYvYix1Q0FBb0IsRUFGeEI7QUFHQSxRQUFNZ2Msa0JBQWtCLEdBQUdwZSxvQ0FBcUIsRUFBaEQ7O0FBRUEsV0FBU3FlLGNBQVQsQ0FBd0I5TixNQUF4QixFQUFnQztBQUM5QixXQUFPNE4sYUFBYSxDQUFDNU4sTUFBRCxDQUFiLENBQXNCdkgsS0FBN0I7QUFDRDs7QUFFRCxRQUFNc1YsV0FBVyxHQUFHSixPQUFPLENBQUNuVCxHQUFSLENBQWF3RixNQUFELElBQVk7QUFDMUMsVUFBTS9LLEVBQUUsR0FBSSxjQUFhNFksa0JBQWtCLENBQUM1TixTQUFuQixDQUE2QjtBQUNwREQsWUFEb0Q7QUFFcERFLG9CQUFjLEVBQUU7QUFGb0MsS0FBN0IsQ0FHdEIsRUFISDtBQUlBLFdBQU87QUFDTDlLLGVBQVMsRUFBRSxJQUROO0FBRUxxRCxXQUFLLEVBQUVxVixjQUFjLENBQUM5TixNQUFELENBRmhCO0FBR0wvSyxRQUhLO0FBSUxrQyxZQUFNLEVBQUUsT0FKSDtBQUtMMUIsb0JBQWMsRUFBRSxLQUxYO0FBTUw2RCxlQUFTLEVBQUUwRyxNQUFNLEtBQUtKLGFBQVgsR0FBMkIsd0JBQTNCLEdBQXNEO0FBTjVELEtBQVA7QUFRRCxHQWJtQixDQUFwQjtBQWNBLFFBQU14RyxLQUFLLEdBQUcsQ0FBQyxHQUFHcVUsbUJBQUosRUFBeUIsR0FBR00sV0FBNUIsRUFBeUMsR0FBR0wsa0JBQTVDLENBQWQsQ0F4QkMsQ0F3QjhFOztBQUUvRSxRQUFNTSxhQUFhLEdBQUdwUyxNQUFNLEdBQUcsV0FBSCxHQUFpQmtTLGNBQWMsQ0FBQ2xPLGFBQUQsQ0FBM0Q7QUFDQSxzQkFDRSw4QkFBQyxvQ0FBRCx1Q0FDTWxLLEtBRE47QUFFRSxRQUFJLEVBQUMsR0FGUDtBQUdFLFVBQU0sRUFBRWtHLE1BSFY7QUFJRSxTQUFLLGVBQ0gseURBQ0UsOEJBQUMsa0JBQUQ7QUFDRSxXQUFLLEVBQUU7QUFDTHFTLHFCQUFhLEVBQUUsYUFEVjtBQUVMQyxtQkFBVyxFQUFFO0FBRlI7QUFEVCxNQURGLGVBT0UsNENBQU9GLGFBQVAsQ0FQRixDQUxKO0FBZUUsU0FBSyxFQUFFNVU7QUFmVCxLQURGO0FBbUJELEM7O0FDOUREO0FBQ2U7QUFDZjtBQUNBLENBQUMsRUFBQzs7O0FDSEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBUytVLGdCQUFULENBQTBCO0FBQUN2UztBQUFELENBQTFCLEVBQW9DO0FBQ2pELE1BQUlBLE1BQUosRUFBWTtBQUNWLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFMkwsd0JBQU0sQ0FBQzZHO0FBQXZCLGtCQUNFLDhCQUFDLElBQUQsT0FERixDQURGO0FBS0QsQzs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLG9CQUFvQixHQUFHO0FBQzNCblMsU0FBTyxFQUFFLE1BQU1QLG9DQURZO0FBRTNCMlMsZ0JBQWMsRUFBRSxNQUFNZCx3QkFGSztBQUczQmUsUUFBTSxFQUFFLE1BQU1KLGdCQUhhO0FBSTNCO0FBQ0E7QUFDQUssYUFBVyxFQUFFLE1BQ1g7QUFDQXBmLHFCQUFPLENBQUMsR0FBRCxDQUFQLENBQW1EOE0sT0FSMUI7QUFTM0J1UyxxQkFBbUIsRUFBRSxNQUNuQjtBQUNBcmYscUJBQU8sQ0FBQyxHQUFELENBQVAsQ0FBMkQ4TSxPQVhsQztBQVkzQjBHLEtBQUcsRUFBRSxNQUNIO0FBQ0F4VCxxQkFBTyxDQUFDLEdBQUQsQ0FBUCxDQUEyQzhNO0FBZGxCLENBQTdCOztBQWlCQSxNQUFNd1Msc0JBQXNCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLFNBQVIsS0FBc0I7QUFDbkQsUUFBTUMsbUJBQW1CLEdBQUdQLG9CQUFvQixDQUFDTSxJQUFELENBQWhEOztBQUVBLE1BQUksQ0FBQ0MsbUJBQUwsRUFBMEI7QUFDeEIsVUFBTSxJQUFJelAsS0FBSixDQUFXLDBDQUF5Q3dQLElBQUssR0FBekQsQ0FBTjtBQUNEOztBQUVELFNBQU9DLG1CQUFtQixFQUExQjtBQUNELENBUkQ7O0FBVWUsU0FBU0MsVUFBVCxPQUFzQztBQUFBLE1BQWxCO0FBQUNGO0FBQUQsR0FBa0I7QUFBQSxNQUFSalosS0FBUTs7QUFDbkQsUUFBTW9aLG1CQUFtQixHQUFHSixzQkFBc0IsQ0FBQ0MsSUFBRCxDQUFsRDtBQUNBLHNCQUFPLDhCQUFDLG1CQUFELEVBQXlCalosS0FBekIsQ0FBUDtBQUNELEM7Ozs7Ozs7O0FDeENEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7O0FDTEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQzBDOztBQUUxQyxNQUFNcVosc0JBQXNCLEdBQUcsT0FBL0IsQyxDQUF3QztBQUN4Qzs7QUFFQSxTQUFTQyx1QkFBVCxDQUFpQzVWLEtBQWpDLEVBQXdDO0FBQ3RDLFFBQU02VixTQUFTLEdBQUc3VixLQUFLLENBQUNzSixNQUFOLENBQ2Z0SCxJQUFEO0FBQUE7O0FBQUEsV0FBVSxtQkFBQ0EsSUFBSSxDQUFDL0IsUUFBTiw2QkFBa0IwVixzQkFBbEIsTUFBOEMsTUFBeEQ7QUFBQSxHQURnQixDQUFsQjtBQUdBLFFBQU1HLFVBQVUsR0FBRzlWLEtBQUssQ0FBQ3NKLE1BQU4sQ0FDaEJ0SCxJQUFEO0FBQUE7O0FBQUEsV0FBVSxvQkFBQ0EsSUFBSSxDQUFDL0IsUUFBTiw4QkFBa0IwVixzQkFBbEIsTUFBOEMsT0FBeEQ7QUFBQSxHQURpQixDQUFuQjtBQUdBLFNBQU87QUFDTEUsYUFESztBQUVMQztBQUZLLEdBQVA7QUFJRDs7QUFFRCxTQUFTQyxNQUFULEdBQWtCO0FBQ2hCLFFBQU07QUFDSjVGLFVBQU0sRUFBRTtBQUFDblEsV0FBRDtBQUFRbVQsa0JBQVI7QUFBc0I1RDtBQUF0QixLQURKO0FBRUptRCxhQUFTLEVBQUU7QUFBQ3NELG1CQUFhLEVBQUVDO0FBQWhCO0FBRlAsTUFHRjlmLDZCQUFjLEVBSGxCO0FBSUEsUUFBTSxDQUFDK2YsWUFBRCxFQUFlQyxlQUFmLElBQWtDNVYseUJBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFDc04sZUFBRDtBQUFjdUksaUJBQWQ7QUFBNkJDO0FBQTdCLE1BQTZDbFEsMENBQWUsRUFBbEU7QUFDQSxRQUFNO0FBQUN3TixhQUFEO0FBQVlQO0FBQVosTUFBK0JGLHVCQUFpQixDQUFDQyxZQUFELENBQXREO0FBQ0EvRCw4Q0FBaUIsQ0FBQzhHLFlBQUQsQ0FBakI7QUFDQSxRQUFNSSxXQUFXLEdBQUc1Siw0QkFBVyxDQUFDLE1BQU07QUFDcEN5SixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBRjhCLEVBRTVCLENBQUNBLGVBQUQsQ0FGNEIsQ0FBL0I7QUFHQSxRQUFNSSxXQUFXLEdBQUc3Siw0QkFBVyxDQUFDLE1BQU07QUFDcEN5SixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBRjhCLEVBRTVCLENBQUNBLGVBQUQsQ0FGNEIsQ0FBL0I7QUFHQSxRQUFNSyxjQUFjLEdBQUc5Siw0QkFBVyxDQUMvQm5WLENBQUQsSUFBUUEsQ0FBQyxDQUFDd0csTUFBRixDQUFTaVYsT0FBVCxHQUFtQnFELFlBQVksRUFBL0IsR0FBb0NELGFBQWEsRUFEekIsRUFFaEMsQ0FBQ0EsYUFBRCxFQUFnQkMsWUFBaEIsQ0FGZ0MsQ0FBbEM7QUFJQSxRQUFNdEcsVUFBVSxHQUFHSCx3Q0FBYSxFQUFoQztBQUNBaFIsNEJBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSW1SLFVBQVUsS0FBS0wsb0NBQVcsQ0FBQ0MsT0FBL0IsRUFBd0M7QUFDdEN3RyxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNwRyxVQUFELENBSk0sQ0FBVDtBQUtBLFFBQU0wRyxtQkFBbUIsR0FBR3pXLEtBQUssQ0FBQytCLElBQU4sQ0FBWUMsSUFBRCxJQUFVQSxJQUFJLENBQUN1VCxJQUFMLEtBQWMsUUFBbkMsQ0FBNUI7QUFDQSxRQUFNO0FBQUNNLGFBQUQ7QUFBWUM7QUFBWixNQUEwQkYsdUJBQXVCLENBQUM1VixLQUFELENBQXZEO0FBQ0Esc0JBQ0U7QUFDRSxPQUFHLEVBQUUyVCxTQURQO0FBRUUsYUFBUyxFQUFFMVMseUJBQUksQ0FBQyxRQUFELEVBQVcsbUJBQVgsRUFBZ0M7QUFDN0Msc0JBQWdCc08sS0FBSyxLQUFLLE1BRG1CO0FBRTdDLHlCQUFtQkEsS0FBSyxLQUFLLFNBRmdCO0FBRzdDLDhCQUF3QjJHLFlBSHFCO0FBSTdDLE9BQUMvSCxvQkFBTSxDQUFDdUksY0FBUixHQUF5QnZELFlBSm9CO0FBSzdDLE9BQUNoRixvQkFBTSxDQUFDd0ksWUFBUixHQUF1QnhELFlBQVksSUFBSSxDQUFDQztBQUxLLEtBQWhDO0FBRmpCLGtCQVNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHcFQsS0FBSyxJQUFJLElBQVQsSUFBaUJBLEtBQUssQ0FBQ3pHLE1BQU4sS0FBaUIsQ0FBbEMsaUJBQ0M7QUFDRSxrQkFBVyx1QkFEYjtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsWUFBUSxFQUFFLENBSlo7QUFLRSxXQUFPLEVBQUUrYyxXQUxYO0FBTUUsYUFBUyxFQUFFQTtBQU5iLGtCQU9FLDhCQUFDLDJCQUFELE9BUEYsQ0FGSixlQVlFLDhCQUFDLHVCQUFEO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxrQkFBYyxFQUFDLGNBRmpCO0FBR0Usa0JBQWMsRUFBRXJWLHlCQUFJLENBQUMsZUFBRDtBQUh0QixJQVpGLEVBaUJHNFUsU0FBUyxDQUFDelUsR0FBVixDQUFjLENBQUNZLElBQUQsRUFBT3RHLENBQVAsa0JBQ2IsOEJBQUMsVUFBRCxxQkFBZ0JzRyxJQUFoQjtBQUFzQixPQUFHLEVBQUV0RztBQUEzQixLQURELENBakJILENBREYsZUFzQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHb2EsVUFBVSxDQUFDMVUsR0FBWCxDQUFlLENBQUNZLElBQUQsRUFBT3RHLENBQVAsa0JBQ2QsOEJBQUMsVUFBRCxxQkFBZ0JzRyxJQUFoQjtBQUFzQixPQUFHLEVBQUV0RztBQUEzQixLQURELENBREgsRUFJRyxDQUFDdWEsc0JBQUQsaUJBQ0MsOEJBQUMsTUFBRDtBQUNFLGFBQVMsRUFBRTlILG9CQUFNLENBQUN5SSwwQkFEcEI7QUFFRSxrQkFBVyxrQkFGYjtBQUdFLFdBQU8sRUFBRS9JLFdBSFg7QUFJRSxZQUFRLEVBQUUySTtBQUpaLElBTEosRUFZRyxDQUFDQyxtQkFBRCxpQkFBd0IsOEJBQUMsSUFBRCxPQVozQixDQXRCRixDQVRGLGVBOENFO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFTLEVBQUMsMEJBRlo7QUFHRSxXQUFPLEVBQUVGO0FBSFgsSUE5Q0YsZUFtREU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDhCQUFDLHVCQUFEO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxrQkFBYyxFQUFDLGNBRmpCO0FBR0Usa0JBQWMsRUFBQyxlQUhqQjtBQUlFLFdBQU8sRUFBRUE7QUFKWCxJQURGLEVBT0csQ0FBQ04sc0JBQUQsSUFBMkJDLFlBQTNCLGlCQUNDLDhCQUFDLE1BQUQ7QUFDRSxrQkFBVyw2QkFEYjtBQUVFLFdBQU8sRUFBRXJJLFdBRlg7QUFHRSxZQUFRLEVBQUUySTtBQUhaLElBUkosQ0FERixlQWdCRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNHeFcsS0FBSyxDQUFDb0IsR0FBTixDQUFVLENBQUNZLElBQUQsRUFBT3RHLENBQVAsa0JBQ1QsOEJBQUMsVUFBRDtBQUNFLFVBQU07QUFEUixLQUVNc0csSUFGTjtBQUVZO0FBQ1YsV0FBTyxFQUFFdVUsV0FIWDtBQUlFLE9BQUcsRUFBRTdhO0FBSlAsS0FERCxDQURILENBREYsQ0FERixDQWhCRixDQW5ERixDQURGO0FBcUZEOztBQUVjcWEsdURBQWYsRTs7Ozs7Ozs7QUN0SkE7QUFDZTtBQUNmO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7O0FDSEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2MsVUFBVCxPQUF1RTtBQUFBLE1BQW5EO0FBQUNoYixNQUFEO0FBQUtJLFFBQUw7QUFBV29ELFNBQVg7QUFBa0JDO0FBQWxCLEdBQW1EO0FBQUEsTUFBUmhELEtBQVE7O0FBQ3JFLFFBQU1pRCxLQUFLLEdBQUczRyxxQ0FBVSxDQUFDaUQsRUFBRCxDQUF4QjtBQUNBLFFBQU00RCxjQUFjLEdBQUc3RyxxQ0FBVSxDQUFDcUQsSUFBRCxFQUFPO0FBQ3RDakUsdUJBQW1CLEVBQUU7QUFEaUIsR0FBUCxDQUFqQztBQUdBLHNCQUNFLDhCQUFDLHVCQUFEO0FBQ0UsYUFBUyxFQUFDO0FBRFosS0FFT2lFLElBQUksR0FDTDtBQUNFQSxRQUFJLEVBQUVxRCxvQkFBb0IsR0FBR0csY0FBSCxHQUFvQnhEO0FBRGhELEdBREssR0FJTDtBQUNFSixNQUFFLEVBQUUwRDtBQUROLEdBTk4sRUFTTWpELEtBVE4sR0FVRytDLEtBVkgsQ0FERjtBQWNEOztBQUVELE1BQU15WCxVQUFVLEdBQUcsQ0FBQztBQUFDaEosU0FBRDtBQUFVQztBQUFWLENBQUQsa0JBQ2pCLDhCQUFDLDhCQUFEO0FBQWEsV0FBUyxFQUFDLGNBQXZCO0FBQXNDLEtBQUcsRUFBRUEsR0FBM0M7QUFBZ0QsU0FBTyxFQUFFRDtBQUF6RCxFQURGOztBQUlBLFNBQVNpSixNQUFULEdBQWtCO0FBQ2hCLFFBQU07QUFBQ0M7QUFBRCxNQUFXN2dCLDZCQUFjLEVBQS9CO0FBQ0EsUUFBTTtBQUFDOGdCLGFBQUQ7QUFBWUMsU0FBSyxHQUFHLEVBQXBCO0FBQXdCOUcsUUFBSSxHQUFHO0FBQS9CLE1BQXFDNEcsTUFBTSxJQUFJLEVBQXJEO0FBQ0EsUUFBTWxKLE9BQU8sR0FBRztBQUNkMkMsU0FBSyxFQUFFN1gscUNBQVUsQ0FBQ3dYLElBQUksQ0FBQ0MsR0FBTixDQURIO0FBRWRLLFFBQUksRUFBRTlYLHFDQUFVLENBQUN3WCxJQUFJLENBQUNPLE9BQUwsSUFBZ0JQLElBQUksQ0FBQ0MsR0FBdEI7QUFGRixHQUFoQjs7QUFLQSxNQUFJLENBQUMyRyxNQUFMLEVBQWE7QUFDWCxXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUNFLGFBQVMsRUFBRS9WLHlCQUFJLENBQUMsUUFBRCxFQUFXO0FBQ3hCLHNCQUFnQitWLE1BQU0sQ0FBQ3pILEtBQVAsS0FBaUI7QUFEVCxLQUFYO0FBRGpCLGtCQUlFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRzJILEtBQUssSUFBSUEsS0FBSyxDQUFDM2QsTUFBTixHQUFlLENBQXhCLGlCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRzJkLEtBQUssQ0FBQzlWLEdBQU4sQ0FBVSxDQUFDK1YsUUFBRCxFQUFXemIsQ0FBWCxrQkFDVDtBQUFLLE9BQUcsRUFBRUEsQ0FBVjtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNHeWIsUUFBUSxDQUFDN00sS0FBVCxJQUFrQixJQUFsQixnQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQStCNk0sUUFBUSxDQUFDN00sS0FBeEMsQ0FERCxHQUVHLElBSE4sRUFJRzZNLFFBQVEsQ0FBQ25YLEtBQVQsSUFBa0IsSUFBbEIsSUFDRHlOLEtBQUssQ0FBQ0MsT0FBTixDQUFjeUosUUFBUSxDQUFDblgsS0FBdkIsQ0FEQyxJQUVEbVgsUUFBUSxDQUFDblgsS0FBVCxDQUFlekcsTUFBZixHQUF3QixDQUZ2QixnQkFHQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0c0ZCxRQUFRLENBQUNuWCxLQUFULENBQWVvQixHQUFmLENBQW1CLENBQUNZLElBQUQsRUFBTzNJLEdBQVAsS0FDbEIySSxJQUFJLENBQUNvVixJQUFMLGdCQUNFO0FBQ0UsT0FBRyxFQUFFL2QsR0FEUDtBQUVFLGFBQVMsRUFBQyxjQUZaLENBRTJCO0FBQ3pCO0FBSEY7QUFJRSwyQkFBdUIsRUFBRTtBQUN2QitZLFlBQU0sRUFBRXBRLElBQUksQ0FBQ29WO0FBRFU7QUFKM0IsSUFERixnQkFVRTtBQUFJLE9BQUcsRUFBRXBWLElBQUksQ0FBQy9GLElBQUwsSUFBYStGLElBQUksQ0FBQ25HLEVBQTNCO0FBQStCLGFBQVMsRUFBQztBQUF6QyxrQkFDRSw4QkFBQyxVQUFELEVBQWdCbUcsSUFBaEIsQ0FERixDQVhILENBREgsQ0FIRCxHQXFCRyxJQXpCTixDQURELENBREgsQ0FGSixFQWtDRyxDQUFDb08sSUFBSSxJQUFJNkcsU0FBVCxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0c3RyxJQUFJLEtBQUtBLElBQUksQ0FBQ0MsR0FBTCxJQUFZRCxJQUFJLENBQUNPLE9BQXRCLENBQUosaUJBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHUCxJQUFJLENBQUNuVSxJQUFMLGdCQUNDLDhCQUFDLHVCQUFEO0FBQU0sUUFBSSxFQUFFbVUsSUFBSSxDQUFDblUsSUFBakI7QUFBdUIsYUFBUyxFQUFFa1Msb0JBQU0sQ0FBQ2tKO0FBQXpDLGtCQUNFLDhCQUFDLFVBQUQ7QUFBWSxPQUFHLEVBQUVqSCxJQUFJLENBQUNyQyxHQUF0QjtBQUEyQixXQUFPLEVBQUVEO0FBQXBDLElBREYsQ0FERCxnQkFLQyw4QkFBQyxVQUFEO0FBQVksT0FBRyxFQUFFc0MsSUFBSSxDQUFDckMsR0FBdEI7QUFBMkIsV0FBTyxFQUFFRDtBQUFwQyxJQU5KLENBRkosRUFZR21KLFNBQVMsZ0JBQ1I7QUFDRSxhQUFTLEVBQUMsbUJBRFosQ0FDZ0M7QUFDOUI7QUFGRjtBQUdFLDJCQUF1QixFQUFFO0FBQ3ZCN0UsWUFBTSxFQUFFNkU7QUFEZTtBQUgzQixJQURRLEdBUU4sSUFwQk4sQ0FuQ0osQ0FKRixDQURGO0FBa0VEOztBQUVjRix1REFBZixFOzs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNTyxNQUFNLEdBQUc7QUFDYjdHLE9BQUssRUFBRSxPQURNO0FBRWJDLE1BQUksRUFBRTtBQUZPLENBQWYsQyxDQUdHOztBQUVILE1BQU02RyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQixTQUFPQSxLQUFLLEtBQUtGLE1BQU0sQ0FBQzVHLElBQWpCLEdBQXdCNEcsTUFBTSxDQUFDNUcsSUFBL0IsR0FBc0M0RyxNQUFNLENBQUM3RyxLQUFwRDtBQUNELENBRkQ7O0FBSUEsTUFBTWdILGVBQWUsR0FBSUMsV0FBRCxJQUFpQjtBQUN2QyxNQUFJLENBQUNyYSx1Q0FBb0IsQ0FBQ2tSLFNBQTFCLEVBQXFDO0FBQ25DLFdBQU9nSixhQUFhLENBQUNHLFdBQUQsQ0FBcEI7QUFDRDs7QUFFRCxTQUFPSCxhQUFhLENBQUM1VyxRQUFRLENBQUNxVCxlQUFULENBQXlCMkQsWUFBekIsQ0FBc0MsWUFBdEMsQ0FBRCxDQUFwQjtBQUNELENBTkQ7O0FBUUEsTUFBTUMsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFDL0IsTUFBSTtBQUNGOUssZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QnVLLGFBQWEsQ0FBQ00sUUFBRCxDQUEzQztBQUNELEdBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDWnJNLFdBQU8sQ0FBQ0MsS0FBUixDQUFjb00sR0FBZDtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNO0FBQ0pyRixhQUFTLEVBQUU7QUFBQ2dGLGlCQUFEO0FBQWMxQixtQkFBZDtBQUE2QmdDO0FBQTdCO0FBRFAsTUFFRjdoQiw2QkFBYyxFQUZsQjtBQUdBLFFBQU0sQ0FBQ3FoQixLQUFELEVBQVFTLFFBQVIsSUFBb0IxWCx5QkFBUSxDQUFDa1gsZUFBZSxDQUFDQyxXQUFELENBQWhCLENBQWxDO0FBQ0EsUUFBTXRCLGFBQWEsR0FBRzFKLDRCQUFXLENBQUMsTUFBTTtBQUN0Q3VMLFlBQVEsQ0FBQ1gsTUFBTSxDQUFDN0csS0FBUixDQUFSO0FBQ0FtSCxjQUFVLENBQUNOLE1BQU0sQ0FBQzdHLEtBQVIsQ0FBVjtBQUNELEdBSGdDLEVBRzlCLEVBSDhCLENBQWpDO0FBSUEsUUFBTTRGLFlBQVksR0FBRzNKLDRCQUFXLENBQUMsTUFBTTtBQUNyQ3VMLFlBQVEsQ0FBQ1gsTUFBTSxDQUFDNUcsSUFBUixDQUFSO0FBQ0FrSCxjQUFVLENBQUNOLE1BQU0sQ0FBQzVHLElBQVIsQ0FBVjtBQUNELEdBSCtCLEVBRzdCLEVBSDZCLENBQWhDO0FBSUE5Uiw0QkFBUyxDQUFDLE1BQU07QUFDZCtCLFlBQVEsQ0FBQ3FULGVBQVQsQ0FBeUJoRCxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRHVHLGFBQWEsQ0FBQ0MsS0FBRCxDQUFqRTtBQUNELEdBRlEsRUFFTixDQUFDQSxLQUFELENBRk0sQ0FBVDtBQUdBNVksNEJBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSW9YLGFBQUosRUFBbUI7QUFDakI7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsWUFBTWtDLGlCQUFpQixHQUFHbkwsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLENBQTFCOztBQUVBLFVBQUlpTCxpQkFBaUIsS0FBSyxJQUExQixFQUFnQztBQUM5QkQsZ0JBQVEsQ0FBQ1YsYUFBYSxDQUFDVyxpQkFBRCxDQUFkLENBQVI7QUFDRDtBQUNGLEtBTkQsQ0FNRSxPQUFPSixHQUFQLEVBQVk7QUFDWnJNLGFBQU8sQ0FBQ0MsS0FBUixDQUFjb00sR0FBZDtBQUNEO0FBQ0YsR0FkUSxFQWNOLENBQUNHLFFBQUQsQ0FkTSxDQUFUO0FBZUFyWiw0QkFBUyxDQUFDLE1BQU07QUFDZCxRQUFJb1gsYUFBYSxJQUFJLENBQUNnQyx5QkFBdEIsRUFBaUQ7QUFDL0M7QUFDRDs7QUFFRHRhLFVBQU0sQ0FDSHlhLFVBREgsQ0FDYyw4QkFEZCxFQUVHQyxXQUZILENBRWUsQ0FBQztBQUFDQztBQUFELEtBQUQsS0FBZTtBQUMxQkosY0FBUSxDQUFDSSxPQUFPLEdBQUdmLE1BQU0sQ0FBQzVHLElBQVYsR0FBaUI0RyxNQUFNLENBQUM3RyxLQUFoQyxDQUFSO0FBQ0QsS0FKSDtBQUtELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFXQSxTQUFPO0FBQ0w1QyxlQUFXLEVBQUUySixLQUFLLEtBQUtGLE1BQU0sQ0FBQzVHLElBRHpCO0FBRUwwRixpQkFGSztBQUdMQztBQUhLLEdBQVA7QUFLRCxDQS9DRDs7QUFpRGUwQiwyREFBZixFOzs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sYUFBVCxDQUF1QmhjLEtBQXZCLEVBQThCO0FBQzVCLFFBQU07QUFBQ3VSLGVBQUQ7QUFBY3VJLGlCQUFkO0FBQTZCQztBQUE3QixNQUE2QzBCLGNBQVEsRUFBM0Q7QUFDQSxzQkFDRSw4QkFBQywrQkFBRCxDQUFjLFFBQWQ7QUFDRSxTQUFLLEVBQUU7QUFDTGxLLGlCQURLO0FBRUx1SSxtQkFGSztBQUdMQztBQUhLO0FBRFQsS0FNRy9aLEtBQUssQ0FBQzdCLFFBTlQsQ0FERjtBQVVEOztBQUVjNmQscUVBQWYsRTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxpQkFBMUI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixRQUFNLENBQUNDLGVBQUQsRUFBa0JDLFVBQWxCLElBQWdDblkseUJBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTW9ZLDZCQUE2QixHQUFHak0sNEJBQVcsQ0FBQyxDQUFDa00sT0FBRCxFQUFVQyxTQUFWLEtBQXdCO0FBQ3hFLFFBQUk7QUFDRjlMLGtCQUFZLENBQUNDLE9BQWIsQ0FBc0IsR0FBRXVMLGlCQUFrQixHQUFFSyxPQUFRLEVBQXBELEVBQXVEQyxTQUF2RDtBQUNELEtBRkQsQ0FFRSxPQUFPZixHQUFQLEVBQVk7QUFDWnJNLGFBQU8sQ0FBQ0MsS0FBUixDQUFjb00sR0FBZDtBQUNEO0FBQ0YsR0FOZ0QsRUFNOUMsRUFOOEMsQ0FBakQ7QUFPQWxaLDRCQUFTLENBQUMsTUFBTTtBQUNkLFFBQUk7QUFDRixZQUFNa2EsbUJBQW1CLEdBQUcsRUFBNUI7O0FBRUEsV0FBSyxJQUFJcGQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FSLFlBQVksQ0FBQ3hULE1BQWpDLEVBQXlDbUMsQ0FBQyxJQUFJLENBQTlDLEVBQWlEO0FBQy9DLGNBQU1rUixVQUFVLEdBQUdHLFlBQVksQ0FBQzFULEdBQWIsQ0FBaUJxQyxDQUFqQixDQUFuQjs7QUFFQSxZQUFJa1IsVUFBVSxDQUFDMVUsVUFBWCxDQUFzQnFnQixpQkFBdEIsQ0FBSixFQUE4QztBQUM1QyxnQkFBTUssT0FBTyxHQUFHaE0sVUFBVSxDQUFDbU0sU0FBWCxDQUFxQlIsaUJBQWlCLENBQUNoZixNQUF2QyxDQUFoQjtBQUNBdWYsNkJBQW1CLENBQUNGLE9BQUQsQ0FBbkIsR0FBK0I3TCxZQUFZLENBQUNFLE9BQWIsQ0FBcUJMLFVBQXJCLENBQS9CO0FBQ0Q7QUFDRjs7QUFFRDhMLGdCQUFVLENBQUNJLG1CQUFELENBQVY7QUFDRCxLQWJELENBYUUsT0FBT2hCLEdBQVAsRUFBWTtBQUNack0sYUFBTyxDQUFDQyxLQUFSLENBQWNvTSxHQUFkO0FBQ0Q7QUFDRixHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBa0JBLFNBQU87QUFDTFcsbUJBREs7QUFFTE8sc0JBQWtCLEVBQUUsQ0FBQ0osT0FBRCxFQUFVQyxTQUFWLEtBQXdCO0FBQzFDSCxnQkFBVSxDQUFFTyxVQUFELHNCQUFxQkEsVUFBckI7QUFBaUMsU0FBQ0wsT0FBRCxHQUFXQztBQUE1QyxRQUFELENBQVY7QUFDQUYsbUNBQTZCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixDQUE3QjtBQUNEO0FBTEksR0FBUDtBQU9ELENBbENEOztBQW9DZUwsNkVBQWYsRTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1VLG1CQUFtQixHQUFHLGlDQUE1QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyw0QkFBdkI7O0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixRQUFNO0FBQUN4SDtBQUFELE1BQW9CemIsNkJBQWMsRUFBeEM7QUFDQSxRQUFNLENBQUNrakIsUUFBRCxFQUFXQyxTQUFYLElBQXdCL1kseUJBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTWdaLFdBQVcsR0FBRzdNLDRCQUFXLENBQUMsTUFBTTtBQUNwQ0ssZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQmtNLG1CQUFyQixFQUEwQyxNQUExQztBQUNBSSxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FIOEIsRUFHNUIsRUFINEIsQ0FBL0I7QUFJQTFhLDRCQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ2dULGVBQUwsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxVQUFNO0FBQUNqWDtBQUFELFFBQU9pWCxlQUFiO0FBQ0EsUUFBSTRILFFBQVEsR0FBR3pNLFlBQVksQ0FBQ0UsT0FBYixDQUFxQmtNLGNBQXJCLENBQWYsQ0FOYyxDQU11QztBQUNyRDs7QUFFQSxRQUFJSyxRQUFRLEtBQUssaUJBQWpCLEVBQW9DO0FBQ2xDQSxjQUFRLEdBQUcsa0JBQVg7QUFDRDs7QUFFRCxVQUFNQyxpQkFBaUIsR0FBRzllLEVBQUUsS0FBSzZlLFFBQWpDO0FBQ0F6TSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCbU0sY0FBckIsRUFBcUN4ZSxFQUFyQzs7QUFFQSxRQUFJOGUsaUJBQUosRUFBdUI7QUFDckIxTSxrQkFBWSxDQUFDQyxPQUFiLENBQXFCa00sbUJBQXJCLEVBQTBDLE9BQTFDO0FBQ0Q7O0FBRUQsUUFDRU8saUJBQWlCLElBQ2pCMU0sWUFBWSxDQUFDRSxPQUFiLENBQXFCaU0sbUJBQXJCLE1BQThDLE9BRmhELEVBR0U7QUFDQUksZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0ExQlEsRUEwQk4sRUExQk0sQ0FBVDtBQTJCQSxTQUFPO0FBQ0w1SCwyQkFBdUIsRUFBRTJILFFBRHBCO0FBRUwxSCx3QkFBb0IsRUFBRTRIO0FBRmpCLEdBQVA7QUFJRCxDQXRDRDs7QUF3Q2VILCtFQUFmLEU7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNNLHVCQUFULENBQWlDcGQsS0FBakMsRUFBd0M7QUFDdEMsUUFBTTtBQUFDbWMsbUJBQUQ7QUFBa0JPO0FBQWxCLE1BQXdDUix1QkFBaUIsRUFBL0Q7QUFDQSxRQUFNO0FBQUM5RywyQkFBRDtBQUEwQkM7QUFBMUIsTUFBa0R5SCx3QkFBa0IsRUFBMUU7QUFDQSxzQkFDRSw4QkFBQyx5Q0FBRCxDQUF3QixRQUF4QjtBQUNFLFNBQUssRUFBRTtBQUNMWCxxQkFESztBQUVMTyx3QkFGSztBQUdMdEgsNkJBSEs7QUFJTEM7QUFKSztBQURULEtBT0dyVixLQUFLLENBQUM3QixRQVBULENBREY7QUFXRDs7QUFFY2lmLHlGQUFmLEU7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0MsZUFBVCxDQUF5QjtBQUFDbGY7QUFBRCxDQUF6QixFQUFxQztBQUNsRCxzQkFDRSw4QkFBQyxtQkFBRCxxQkFDRSw4QkFBQyw2QkFBRCxxQkFDRSw4QkFBQywwQ0FBRCxRQUNHQSxRQURILENBREYsQ0FERixDQURGO0FBU0QsQzs7Ozs7QUNwQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU21mLGVBQVQsQ0FBeUI7QUFBQ2hULFFBQUQ7QUFBU2hDLFNBQVQ7QUFBa0JpVjtBQUFsQixDQUF6QixFQUFpRDtBQUM5RCxzQkFDRSw4QkFBQyx1QkFBRCxRQUNHalQsTUFBTSxpQkFBSTtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUErQixXQUFPLEVBQUcsR0FBRUEsTUFBTztBQUFsRCxJQURiLEVBRUdoQyxPQUFPLGlCQUFJO0FBQU0sUUFBSSxFQUFDLG9CQUFYO0FBQWdDLFdBQU8sRUFBRUE7QUFBekMsSUFGZCxFQUdHaVYsR0FBRyxpQkFBSTtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLElBSFYsQ0FERjtBQU9ELEM7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJZ0Q7QUFDaEQ7QUFDQTs7QUFFQSxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QixRQUFNO0FBQ0p4VCxRQUFJLEVBQUU7QUFBQ0MsbUJBQUQ7QUFBZ0JnTztBQUFoQjtBQURGLE1BRUY5Yix1Q0FBb0IsRUFGeEI7QUFHQSxRQUFNZ2Msa0JBQWtCLEdBQUdwZSxvQ0FBcUIsRUFBaEQsQ0FKOEIsQ0FJc0I7QUFDcEQ7O0FBRUEsc0JBQ0UsOEJBQUMsdUJBQUQsUUFDR2tlLE9BQU8sQ0FBQ25ULEdBQVIsQ0FBYXdGLE1BQUQsaUJBQ1g7QUFDRSxPQUFHLEVBQUVBLE1BRFA7QUFFRSxPQUFHLEVBQUMsV0FGTjtBQUdFLFFBQUksRUFBRTZOLGtCQUFrQixDQUFDNU4sU0FBbkIsQ0FBNkI7QUFDakNELFlBRGlDO0FBRWpDRSxvQkFBYyxFQUFFO0FBRmlCLEtBQTdCLENBSFI7QUFPRSxZQUFRLEVBQUVGO0FBUFosSUFERCxDQURILGVBWUU7QUFDRSxPQUFHLEVBQUMsV0FETjtBQUVFLFFBQUksRUFBRTZOLGtCQUFrQixDQUFDNU4sU0FBbkIsQ0FBNkI7QUFDakNELFlBQU0sRUFBRUwsYUFEeUI7QUFFakNPLG9CQUFjLEVBQUU7QUFGaUIsS0FBN0IsQ0FGUjtBQU1FLFlBQVEsRUFBQztBQU5YLElBWkYsQ0FERjtBQXVCRCxDLENBQUM7OztBQUVGLFNBQVNpVCxzQkFBVCxHQUFrQztBQUNoQyxRQUFNO0FBQ0p2aEIsY0FBVSxFQUFFO0FBQUNULFNBQUcsRUFBRUY7QUFBTjtBQURSLE1BRUZZLHVDQUFvQixFQUZ4QjtBQUdBLFFBQU07QUFBQ3FIO0FBQUQsTUFBYThCLDZCQUFXLEVBQTlCO0FBQ0EsU0FBTy9KLE9BQU8sR0FBR2UscUNBQVUsQ0FBQ2tILFFBQUQsQ0FBM0I7QUFDRDs7QUFFRCxTQUFTa2EsbUJBQVQsQ0FBNkI7QUFBQ0M7QUFBRCxDQUE3QixFQUEwQztBQUN4QyxRQUFNO0FBQ0p6aEIsY0FBVSxFQUFFO0FBQUNULFNBQUcsRUFBRUY7QUFBTjtBQURSLE1BRUZZLHVDQUFvQixFQUZ4QjtBQUdBLFFBQU15aEIsbUJBQW1CLEdBQUdILHNCQUFzQixFQUFsRDtBQUNBLFFBQU1JLFlBQVksR0FBR0YsU0FBUyxHQUN6QixHQUFFcGlCLE9BQVEsR0FBRW9pQixTQUFVLEVBREcsR0FFMUJDLG1CQUZKO0FBR0Esc0JBQ0UsOEJBQUMsdUJBQUQscUJBQ0U7QUFBTSxZQUFRLEVBQUMsUUFBZjtBQUF3QixXQUFPLEVBQUVDO0FBQWpDLElBREYsZUFFRTtBQUFNLE9BQUcsRUFBQyxXQUFWO0FBQXNCLFFBQUksRUFBRUE7QUFBNUIsSUFGRixDQURGO0FBTUQ7O0FBRWMsU0FBU0MsVUFBVCxDQUFvQjlkLEtBQXBCLEVBQTJCO0FBQ3hDLFFBQU07QUFDSjlELGNBREk7QUFFSjhOLFFBQUksRUFBRTtBQUFDRSxtQkFBRDtBQUFnQmdPO0FBQWhCO0FBRkYsTUFHRi9iLHVDQUFvQixFQUh4QjtBQUlBLFFBQU07QUFDSjRoQixXQURJO0FBRUp0WCxlQUFXLEVBQUU7QUFBQ3VLLFdBQUssRUFBRWdOLFlBQVI7QUFBc0JDO0FBQXRCO0FBRlQsTUFHRi9oQixVQUhKO0FBSUEsUUFBTTtBQUFDOFIsU0FBRDtBQUFROEMsZUFBUjtBQUFxQkUsU0FBckI7QUFBNEJELFlBQTVCO0FBQXNDbU47QUFBdEMsTUFBeURsZSxLQUEvRDtBQUNBLFFBQU1tZSxVQUFVLEdBQUc3aEIscUNBQVUsQ0FBQ3loQixPQUFELENBQTdCLENBVndDLENBVUE7QUFDeEM7O0FBRUEsUUFBTUssUUFBUSxHQUFHbFUsYUFBakIsQ0Fid0MsQ0FhUjs7QUFFaEMsUUFBTW1VLE9BQU8sR0FBR25HLGFBQWEsQ0FBQ2hPLGFBQUQsQ0FBYixDQUE2Qm9VLFNBQTdDO0FBQ0Esc0JBQ0UsMkVBQ0UsOEJBQUMsdUJBQUQscUJBQ0U7QUFBTSxRQUFJLEVBQUVGLFFBQVo7QUFBc0IsT0FBRyxFQUFFQztBQUEzQixJQURGLEVBRUdOLE9BQU8saUJBQUk7QUFBTSxPQUFHLEVBQUMsZUFBVjtBQUEwQixRQUFJLEVBQUVJO0FBQWhDLElBRmQsQ0FERixlQU1FLDhCQUFDLHNCQUFEO0FBRUluUSxTQUZKO0FBR0k4QyxlQUhKO0FBSUlDLFlBSko7QUFLSUMsU0FBSyxFQUFFQSxLQUFLLElBQUlnTjtBQUxwQixJQU5GLGVBZUUsOEJBQUMsbUJBQUQsT0FmRixlQWlCRSw4QkFBQyxvQkFBRCxPQWpCRixlQW1CRSw4QkFBQyxlQUFEO0FBQ0UsT0FBRyxFQUFFOWpCLHlCQURQO0FBRUUsVUFBTSxFQUFFZ1E7QUFGVixLQUdNZ1UsZUFITixFQW5CRixlQXlCRSw4QkFBQyx1QkFBRCxDQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFKQSxVQU1HRCxTQUFTLENBQUNuWixHQUFWLENBQWMsQ0FBQ3laLFFBQUQsRUFBV25mLENBQVgsa0JBQ2I7QUFBTSxPQUFHLEVBQUcsWUFBV0EsQ0FBRTtBQUF6QixLQUFnQ21mLFFBQWhDLEVBREQsQ0FOSCxDQXpCRixDQURGO0FBc0NELEM7Ozs7O0FDbElEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ3VCO0FBQ3ZCOztBQUVBLFNBQVNDLHFCQUFULEdBQWlDO0FBQy9CbGMsNEJBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTW1jLHdCQUF3QixHQUFHLDBCQUFqQzs7QUFFQSxhQUFTQyxtQkFBVCxDQUE2QnpqQixDQUE3QixFQUFnQztBQUM5QixVQUFJQSxDQUFDLENBQUNnZSxJQUFGLEtBQVcsU0FBWCxJQUF3QmhlLENBQUMsQ0FBQzhCLEdBQUYsS0FBVSxLQUF0QyxFQUE2QztBQUMzQ3NILGdCQUFRLENBQUMyTyxJQUFULENBQWMyTCxTQUFkLENBQXdCQyxHQUF4QixDQUE0Qkgsd0JBQTVCO0FBQ0Q7O0FBRUQsVUFBSXhqQixDQUFDLENBQUNnZSxJQUFGLEtBQVcsV0FBZixFQUE0QjtBQUMxQjVVLGdCQUFRLENBQUMyTyxJQUFULENBQWMyTCxTQUFkLENBQXdCRSxNQUF4QixDQUErQkosd0JBQS9CO0FBQ0Q7QUFDRjs7QUFFRHBhLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNvYSxtQkFBckM7QUFDQXJhLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNvYSxtQkFBdkM7QUFDQSxXQUFPLE1BQU07QUFDWHJhLGNBQVEsQ0FBQzJPLElBQVQsQ0FBYzJMLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCSix3QkFBL0I7QUFDQXBhLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NtYSxtQkFBeEM7QUFDQXJhLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENtYSxtQkFBMUM7QUFDRCxLQUpEO0FBS0QsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVDtBQXFCRDs7QUFFY0YscUZBQWYsRTs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sTUFBVCxDQUFnQjllLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQU07QUFBQzdCLFlBQUQ7QUFBVzRnQixZQUFYO0FBQXFCQztBQUFyQixNQUF5Q2hmLEtBQS9DO0FBQ0F3ZSw2QkFBcUI7QUFDckIsc0JBQ0UsOEJBQUMsZUFBRCxxQkFDRSw4QkFBQyxVQUFELEVBQWdCeGUsS0FBaEIsQ0FERixlQUdFLDhCQUFDLG1CQUFELE9BSEYsZUFLRSw4QkFBQyxxQkFBRCxPQUxGLGVBT0UsOEJBQUMsWUFBRCxPQVBGLGVBU0U7QUFBSyxhQUFTLEVBQUUyRSx5QkFBSSxDQUFDLGNBQUQsRUFBaUJxYSxnQkFBakI7QUFBcEIsS0FBeUQ3Z0IsUUFBekQsQ0FURixFQVdHLENBQUM0Z0IsUUFBRCxpQkFBYSw4QkFBQyxZQUFELE9BWGhCLENBREY7QUFlRDs7QUFFY0Qsa0ZBQWYsRTs7Ozs7Ozs7QUNyQ2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyxDQUFPOztBQUU1Qjs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyxHQUFZOztBQUV0Qzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFZOztBQUVyQzs7QUFFQSxhQUFhLG1CQUFPLENBQUMsR0FBUzs7QUFFOUI7O0FBRUEsU0FBUyxtQkFBTyxDQUFDLEdBQUs7O0FBRXRCOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxHQUFROztBQUU1QixzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQztBQUM3QztBQUNBO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9DQUFvQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0NBQWtDO0FBQ2hGLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7O0FDekRZOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGFBQWEsbUJBQU8sQ0FBQyxDQUFPOztBQUU1Qjs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrREFBa0Q7QUFDdkQsMkNBQTJDLGlIQUFpSDtBQUM1SjtBQUNBLEU7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGFBQWEsbUJBQU8sQ0FBQyxDQUFPOztBQUU1Qjs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrREFBa0Q7QUFDdkQsMkNBQTJDLGlLQUFpSztBQUM1TTtBQUNBLEU7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLGlCQUFpQixHQUFJM1csT0FBRCxJQUN4QkEsT0FBTyxDQUFDSSxJQUFSLENBQWEwRCxJQUFiLENBQW1CYyxHQUFELElBQVNBLEdBQUcsQ0FBQzdPLEVBQUosS0FBV2lLLE9BQU8sQ0FBQzRXLFNBQTlDLENBREY7O0FBR2UsU0FBU0MscUJBQVQsT0FLWjtBQUFBOztBQUFBLE1BTDJDO0FBQzVDcGMsU0FBSyxFQUFFcWMsV0FEcUM7QUFFNUM3ZixNQUFFLEVBQUU4ZixRQUZ3QztBQUc1Q0M7QUFINEMsR0FLM0M7QUFBQSxNQURFdGYsS0FDRjs7QUFDRCxRQUFNdUwsYUFBYSxHQUFHWiw2RUFBZ0IsQ0FBQzJVLFlBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUNwUDtBQUFELE1BQXFCdFYsd0ZBQXVCLENBQUMwa0IsWUFBRCxDQUFsRDtBQUNBLFFBQU0vUixhQUFhLEdBQUczQyw2RUFBZ0IsQ0FBQzBVLFlBQUQsQ0FBdEM7QUFDQSxRQUFNaFgsT0FBTyxZQUFHaUQsYUFBSCxXQUFHQSxhQUFILEdBQW9CMkUsZ0JBQXBCLG9CQUF3QzNDLGFBQXJEO0FBQ0EsUUFBTXhLLEtBQUssR0FBR3FjLFdBQUgsV0FBR0EsV0FBSCxHQUFrQjlXLE9BQU8sQ0FBQ3ZGLEtBQXJDO0FBQ0EsUUFBTXdKLElBQUksR0FBRzhTLFFBQUgsV0FBR0EsUUFBSCxHQUFlSixpQkFBaUIsQ0FBQzNXLE9BQUQsQ0FBakIsQ0FBMkJpRSxJQUFwRDtBQUNBLHNCQUFPLDJEQUFDLG1GQUFELGVBQXVCdk0sS0FBdkI7QUFBOEIsU0FBSyxFQUFFK0MsS0FBckM7QUFBNEMsTUFBRSxFQUFFd0o7QUFBaEQsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxNQUFNMFMsaUJBQWlCLEdBQUkzVyxPQUFELElBQ3hCQSxPQUFPLENBQUNJLElBQVIsQ0FBYTBELElBQWIsQ0FBbUJjLEdBQUQsSUFBU0EsR0FBRyxDQUFDN08sRUFBSixLQUFXaUssT0FBTyxDQUFDNFcsU0FBOUMsQ0FERjs7QUFHZSxTQUFTSyw2QkFBVCxPQU9aO0FBQUE7O0FBQUEsTUFQbUQ7QUFDcERyWixVQURvRDtBQUVwRG9aLGdCQUZvRDtBQUdwREUsK0JBSG9EO0FBSXBEekgsdUJBSm9EO0FBS3BEQztBQUxvRCxHQU9uRDtBQUFBLE1BREVoWSxLQUNGOztBQUNELFFBQU13TixnQkFBZ0IsR0FBRzlDLGdGQUFtQixDQUFDNFUsWUFBRCxDQUE1QztBQUNBLFFBQU1qWCxRQUFRLEdBQUd3Qyx3RUFBVyxDQUFDeVUsWUFBRCxDQUE1QjtBQUNBLFFBQU0vUixhQUFhLEdBQUczQyw2RUFBZ0IsQ0FBQzBVLFlBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUNwUCxvQkFBRDtBQUFtQkM7QUFBbkIsTUFBK0N2Vix3RkFBdUIsQ0FDMUUwa0IsWUFEMEUsQ0FBNUU7O0FBSUEsV0FBU0csUUFBVCxHQUFvQjtBQUNsQixVQUFNQyxZQUFZLEdBQUdyWCxRQUFRLENBQUN2RCxHQUFULENBQWN3RCxPQUFELElBQWE7QUFDN0M7QUFDQTtBQUNBLFlBQU1xWCxVQUFVLEdBQ2QsQ0FBQW5TLGdCQUFnQixRQUFoQixZQUFBQSxnQkFBZ0IsQ0FBRUYsb0JBQWxCLENBQXVDaEYsT0FBTyxDQUFDQyxJQUEvQyxNQUNBMFcsaUJBQWlCLENBQUMzVyxPQUFELENBRm5CO0FBR0EsYUFBTztBQUNMNUksaUJBQVMsRUFBRSxJQUROO0FBRUxxRCxhQUFLLEVBQUV1RixPQUFPLENBQUN2RixLQUZWO0FBR0x4RCxVQUFFLEVBQUVvZ0IsVUFBVSxDQUFDcFQsSUFIVjtBQUlMMU0sZ0JBQVEsRUFBRSxNQUFNeUksT0FBTyxNQUFLa0YsZ0JBQUwsb0JBQUtBLGdCQUFnQixDQUFFakMsYUFBdkIsQ0FKbEI7QUFLTHZGLGVBQU8sRUFBRSxNQUFNO0FBQ2JtSyxrQ0FBd0IsQ0FBQzdILE9BQU8sQ0FBQ0MsSUFBVCxDQUF4QjtBQUNEO0FBUEksT0FBUDtBQVNELEtBZm9CLENBQXJCO0FBZ0JBLFVBQU03RSxLQUFLLEdBQUcsQ0FDWixHQUFHcVUsbUJBRFMsRUFFWixHQUFHMkgsWUFGUyxFQUdaLEdBQUcxSCxrQkFIUyxDQUFkLENBakJrQixDQXFCZjtBQUNIO0FBQ0E7O0FBRUEsUUFBSXRVLEtBQUssQ0FBQ3pHLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsYUFBTzVCLFNBQVA7QUFDRDs7QUFFRCxXQUFPcUksS0FBUDtBQUNEOztBQUVELFFBQU1rYyxlQUFlLHFDQUNuQnBTLGdCQUFnQixDQUFDakMsYUFERSxvQ0FDZTJFLGdCQURmLG9CQUNtQzNDLGFBRHhELENBeENDLENBeUNzRTs7QUFFdkUsUUFBTStLLGFBQWEsR0FBR3BTLE1BQU0sR0FBRyxVQUFILEdBQWdCMFosZUFBZSxDQUFDN2MsS0FBNUQ7QUFDQSxRQUFNOGMsVUFBVSxHQUFHM1osTUFBTSxHQUNyQjdLLFNBRHFCLEdBRXJCNGpCLGlCQUFpQixDQUFDVyxlQUFELENBQWpCLENBQW1DclQsSUFGdkM7QUFHQSxzQkFDRSwyREFBQyxtRkFBRCxlQUNNdk0sS0FETjtBQUVFLFVBQU0sRUFBRWtHLE1BRlY7QUFHRSxTQUFLLEVBQUVvUyxhQUhUO0FBSUUsTUFBRSxFQUFFdUgsVUFKTjtBQUtFLFNBQUssRUFBRUosUUFBUSxFQUxqQjtBQU1FLFlBQVEsRUFBRUQsMkJBQTJCLEdBQUcsTUFBTSxLQUFULEdBQWlCbmtCO0FBTnhELEtBREY7QUFVRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTeWtCLGFBQVQsT0FNWjtBQUFBOztBQUFBLE1BTm1DO0FBQ3BDMVMsU0FEb0M7QUFFcEMyUywwQkFGb0M7QUFHcENoZCxTQUFLLEVBQUVxYyxXQUg2QjtBQUlwQ0U7QUFKb0MsR0FNbkM7QUFBQSxNQURFdGYsS0FDRjs7QUFDRCxRQUFNO0FBQUN1TCxpQkFBRDtBQUFnQjBCO0FBQWhCLE1BQTZCdkMsZ0ZBQW1CLENBQUM0VSxZQUFELENBQXREO0FBQ0EsUUFBTTtBQUFDcFA7QUFBRCxNQUFxQnRWLHdGQUF1QixDQUFDMGtCLFlBQUQsQ0FBbEQ7QUFDQSxRQUFNL1IsYUFBYSxHQUFHM0MsNkVBQWdCLENBQUMwVSxZQUFELENBQXRDO0FBQ0EsUUFBTWhYLE9BQU8sWUFBR2lELGFBQUgsV0FBR0EsYUFBSCxHQUFvQjJFLGdCQUFwQixvQkFBd0MzQyxhQUFyRDtBQUNBLFFBQU1MLEdBQUcsR0FBRzVFLE9BQU8sQ0FBQ0ksSUFBUixDQUFhMEQsSUFBYixDQUFtQnVULFVBQUQsSUFBZ0JBLFVBQVUsQ0FBQ3RoQixFQUFYLEtBQWtCK08sS0FBcEQsQ0FBWjs7QUFFQSxNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNSLFVBQU0sSUFBSXpELEtBQUosQ0FBVyxnREFBK0MyRCxLQUFNLGVBQ3BFOUUsT0FBTyxDQUFDQyxJQUNUO0FBQ0wsdUJBQXVCRCxPQUFPLENBQUNJLElBQVIsQ0FBYWtFLElBQWIsQ0FBa0IsTUFBbEIsQ0FBMEIsRUFIdkMsQ0FBTjtBQUlEOztBQUVELHNCQUNFLDJEQUFDLG1GQUFEO0FBQ0UsU0FBSztBQURQLEtBRU01TSxLQUZOO0FBR0UsYUFBUyxFQUFFMkUsb0RBQUksQ0FBQzNFLEtBQUssQ0FBQzRELFNBQVAsRUFBa0I7QUFDL0IsT0FBQ21jLHNCQUFELEdBQ0U5UyxTQUFTLElBQUlBLFNBQVMsQ0FBQytTLE9BQVYsS0FBc0I5UyxHQUFHLENBQUM4UztBQUZWLEtBQWxCLENBSGpCO0FBT0UsU0FBSyxFQUFFWixXQUFGLFdBQUVBLFdBQUYsR0FBaUJsUyxHQUFHLENBQUM3TyxFQVA1QjtBQVFFLE1BQUUsRUFBRTZPLEdBQUcsQ0FBQ1g7QUFSVixLQURGO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMwVCxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFLDJEQUFDLDZEQUFEO0FBQVEsU0FBSyxFQUFDO0FBQWQsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0UsMkRBQUMscUVBQUQ7QUFDRSxNQUFFLEVBQUMsc0JBREw7QUFFRSxlQUFXLEVBQUM7QUFGZCxzQkFERixDQURGLGVBUUUsbUZBQ0UsMkRBQUMscUVBQUQ7QUFDRSxNQUFFLEVBQUMsbUJBREw7QUFFRSxlQUFXLEVBQUM7QUFGZCxvREFERixDQVJGLGVBZUUsbUZBQ0UsMkRBQUMscUVBQUQ7QUFDRSxNQUFFLEVBQUMsbUJBREw7QUFFRSxlQUFXLEVBQUM7QUFGZCx3SEFERixDQWZGLENBREYsQ0FERixDQURGLENBREY7QUFnQ0Q7O0FBRWNBLHVFQUFmLEUiLCJmaWxlIjoiYXNzZXRzL2pzLzE1LmRmYTkwOTkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1c2VUaGVtZUNvbmZpZ18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXNlVGhlbWVDb25maWdcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VUaGVtZUNvbmZpZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlVGhlbWVDb25maWdfMS51c2VUaGVtZUNvbmZpZzsgfSB9KTtcbnZhciB1c2VBbHRlcm5hdGVQYWdlVXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3VzZUFsdGVybmF0ZVBhZ2VVdGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZUFsdGVybmF0ZVBhZ2VVdGlsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzXzEudXNlQWx0ZXJuYXRlUGFnZVV0aWxzOyB9IH0pO1xudmFyIHNlYXJjaFV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy9zZWFyY2hVdGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRvY1ZlcnNpb25TZWFyY2hUYWdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlYXJjaFV0aWxzXzEuZG9jVmVyc2lvblNlYXJjaFRhZzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRFRkFVTFRfU0VBUkNIX1RBR1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VhcmNoVXRpbHNfMS5ERUZBVUxUX1NFQVJDSF9UQUc7IH0gfSk7XG52YXIgZG9jc1V0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy9kb2NzVXRpbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0RvY3NQbHVnaW5FbmFibGVkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2NzVXRpbHNfMS5pc0RvY3NQbHVnaW5FbmFibGVkOyB9IH0pO1xudmFyIHBhdGhVdGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvcGF0aFV0aWxzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNTYW1lUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGF0aFV0aWxzXzEuaXNTYW1lUGF0aDsgfSB9KTtcbnZhciBnZW5lcmFsVXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2dlbmVyYWxVdGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZVRpdGxlRm9ybWF0dGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmFsVXRpbHNfMS51c2VUaXRsZUZvcm1hdHRlcjsgfSB9KTtcbnZhciB1c2VQbHVyYWxGb3JtXzEgPSByZXF1aXJlKFwiLi91dGlscy91c2VQbHVyYWxGb3JtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlUGx1cmFsRm9ybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlUGx1cmFsRm9ybV8xLnVzZVBsdXJhbEZvcm07IH0gfSk7XG52YXIgdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL3VzZURvY3NQcmVmZXJyZWRWZXJzaW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlRG9jc1ByZWZlcnJlZFZlcnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uXzEudXNlRG9jc1ByZWZlcnJlZFZlcnNpb247IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uXzEudXNlRG9jc1ByZWZlcnJlZFZlcnNpb25CeVBsdWdpbklkOyB9IH0pO1xudmFyIERvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL0RvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xLkRvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyOyB9IH0pO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzYwXG4vLyBUT0RPIGZpbmQgYSBiZXR0ZXIgc29sdXRpb24sIHRoaXMgc2hvdWxkbid0IGJlIG5lZWRlZFxuLy8gVE9ETyB0aGlzIGlzIG5vdCBpZGVhbCBhbmQgcHJvZHVjZSBhIHdhcm5pbmchXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvNzcxMyNpc3N1ZWNvbW1lbnQtNDY3ODg4NDM3XG4vLyBub3RlOiB3YXJuaW5nIGNhbiBiZSBmaWx0ZXJlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvcHVsbC8zMzgyI2lzc3VlY29tbWVudC02ODQ5NjY5MjRcbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnQHRoZW1lLWluaXQvaG9va3MvdXNlRG9jcycpO1xufSBjYXRjaCAoZSkge1xuICAvLyBJbiBjYXNlIHRoZSBkb2NzIHBsdWdpbiBpcyBub3QgYXZhaWxhYmxlLCBtaWdodCBiZSB1c2VmdWwgdG8gc3R1YiBzb21lIG1ldGhvZHMgaGVyZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzk0N1xuICBjb25zdCBFbXB0eSA9IHt9O1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB1c2VBbGxEb2NzRGF0YTogKCkgPT4gRW1wdHksXG4gICAgdXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbjogKCkgPT4gdW5kZWZpbmVkLFxuICB9O1xufVxuLypcbnRocm93IG5ldyBFcnJvcihcbiAgXCJUaGUgZG9jcyBwbHVnaW4gaXMgbm90IHVzZWQsIHNvIHlvdSBjYW4ndCByZXF1aXJlIHRoZSB1c2VEb2NzIGhvb2tzLiBcIixcbik7XG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICcuL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmltcG9ydCB7IGhhc1Byb3RvY29sIH0gZnJvbSAnLi9pc0ludGVybmFsVXJsJztcbmZ1bmN0aW9uIGFkZEJhc2VVcmwoc2l0ZVVybCwgYmFzZVVybCwgdXJsLCB7IGZvcmNlUHJlcGVuZEJhc2VVcmwgPSBmYWxzZSwgYWJzb2x1dGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyBpdCBuZXZlciBtYWtlcyBzZW5zZSB0byBhZGQgYSBiYXNlIHVybCB0byBhIGxvY2FsIGFuY2hvciB1cmxcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyBpdCBuZXZlciBtYWtlcyBzZW5zZSB0byBhZGQgYSBiYXNlIHVybCB0byBhbiB1cmwgd2l0aCBhIHByb3RvY29sXG4gICAgaWYgKGhhc1Byb3RvY29sKHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgaWYgKGZvcmNlUHJlcGVuZEJhc2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VVcmwgKyB1cmw7XG4gICAgfVxuICAgIC8vIFdlIHNob3VsZCBhdm9pZCBhZGRpbmcgdGhlIGJhc2V1cmwgdHdpY2UgaWYgaXQncyBhbHJlYWR5IHRoZXJlXG4gICAgY29uc3Qgc2hvdWxkQWRkQmFzZVVybCA9ICF1cmwuc3RhcnRzV2l0aChiYXNlVXJsKTtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHNob3VsZEFkZEJhc2VVcmwgPyBiYXNlVXJsICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykgOiB1cmw7XG4gICAgcmV0dXJuIGFic29sdXRlID8gc2l0ZVVybCArIGJhc2VQYXRoIDogYmFzZVBhdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVVybFV0aWxzKCkge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZzogeyBiYXNlVXJsID0gJy8nLCB1cmw6IHNpdGVVcmwgfSA9IHt9LCB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aXRoQmFzZVVybDogKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEJhc2VVcmwoc2l0ZVVybCwgYmFzZVVybCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFzZVVybCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgd2l0aEJhc2VVcmwgfSA9IHVzZUJhc2VVcmxVdGlscygpO1xuICAgIHJldHVybiB3aXRoQmFzZVVybCh1cmwsIG9wdGlvbnMpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qXG5NaW5pbWFsIGltcGxlbWVudGF0aW9uIG9mIGEgUmVhY3QgaW50ZXJwb2xhdGUgY29tcG9uZW50LlxuV2UgZG9uJ3Qgc2hpcCBhIG1hcmtkb3duIHBhcnNlciBub3IgYSBmZWF0dXJlLWNvbXBsZXRlIGkxOG4gbGlicmFyeSBvbiBwdXJwb3NlLlxuTW9yZSBkZXRhaWxzIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL3B1bGwvNDI5NVxuKi9cbmNvbnN0IFZhbHVlUmVnZXhwID0gL3tcXHcrfS9nO1xuY29uc3QgVmFsdWVGb3VuZE1hcmtlciA9ICd7fSc7IC8vIGRvZXMgbm90IGNhcmUgbXVjaFxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKHRleHQsIHZhbHVlcykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkVGV4dCA9IHRleHQucmVwbGFjZShWYWx1ZVJlZ2V4cCwgKG1hdGNoKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSB7eyBhbmQgfX0gYXJvdW5kIHRoZSBwbGFjZWhvbGRlclxuICAgICAgICBjb25zdCBrZXkgPSBtYXRjaC5zdWJzdHIoMSwgbWF0Y2gubGVuZ3RoIC0gMik7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzID09PSBudWxsIHx8IHZhbHVlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gUmVhY3QuaXNWYWxpZEVsZW1lbnQodmFsdWUpXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICAgIDogLy8gRm9yIG5vbi1SZWFjdCBlbGVtZW50czogYmFzaWMgcHJpbWl0aXZlLT5zdHJpbmcgY29udmVyc2lvblxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZUZvdW5kTWFya2VyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoOyAvLyBubyBtYXRjaD8gYWRkIHdhcm5pbmc/XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBObyBpbnRlcnBvbGF0aW9uIHRvIGJlIGRvbmU6IGp1c3QgcmV0dXJuIHRoZSB0ZXh0XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgLy8gQmFzaWMgc3RyaW5nIGludGVycG9sYXRpb246IHJldHVybnMgaW50ZXJwb2xhdGVkIHN0cmluZ1xuICAgIGVsc2UgaWYgKGVsZW1lbnRzLmV2ZXJ5KChlbCkgPT4gdHlwZW9mIGVsID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFRleHRcbiAgICAgICAgICAgIC5zcGxpdChWYWx1ZUZvdW5kTWFya2VyKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3RyLCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBzdHIuY29uY2F0KHZhbHVlKS5jb25jYXQoKF9hID0gZWxlbWVudHNbaW5kZXhdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG4gICAgLy8gSlNYIGludGVycG9sYXRpb246IHJldHVybnMgUmVhY3ROb2RlXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRUZXh0XG4gICAgICAgICAgICAuc3BsaXQoVmFsdWVGb3VuZE1hcmtlcilcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFycmF5LCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgLi4uYXJyYXksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1tpbmRleF0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVycG9sYXRlKHsgY2hpbGRyZW4sIHZhbHVlcywgfSkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZShjaGlsZHJlbiwgdmFsdWVzKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50ZXJwb2xhdGUsIHsgaW50ZXJwb2xhdGUsIH0gZnJvbSAnQGRvY3VzYXVydXMvSW50ZXJwb2xhdGUnO1xuLy8gQ2FuJ3QgcmVhZCBpdCBmcm9tIGNvbnRleHQsIGR1ZSB0byBleHBvc2luZyBpbXBlcmF0aXZlIEFQSVxuaW1wb3J0IGNvZGVUcmFuc2xhdGlvbnMgZnJvbSAnQGdlbmVyYXRlZC9jb2RlVHJhbnNsYXRpb25zJztcbmZ1bmN0aW9uIGdldExvY2FsaXplZE1lc3NhZ2UoeyBpZCwgbWVzc2FnZSwgfSkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gY29kZVRyYW5zbGF0aW9uc1tpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdm9pZCAwID8gaWQgOiBtZXNzYWdlXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWVzc2FnZTtcbn1cbi8vIEltcGVyYXRpdmUgdHJhbnNsYXRpb24gQVBJIGlzIHVzZWZ1bCBmb3Igc29tZSBlZGdlLWNhc2VzOlxuLy8gLSB0cmFuc2xhdGluZyBwYWdlIHRpdGxlcyAobWV0YSlcbi8vIC0gdHJhbnNsYXRpbmcgc3RyaW5nIHByb3BzIChpbnB1dCBwbGFjZWhvbGRlcnMsIGltYWdlIGFsdCwgYXJpYSBsYWJlbHMuLi4pXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKHsgbWVzc2FnZSwgaWQgfSwgdmFsdWVzKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvY2FsaXplZE1lc3NhZ2UgPSAoX2EgPSBnZXRMb2NhbGl6ZWRNZXNzYWdlKHsgbWVzc2FnZSwgaWQgfSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG1lc3NhZ2U7XG4gICAgcmV0dXJuIGludGVycG9sYXRlKGxvY2FsaXplZE1lc3NhZ2UsIHZhbHVlcyk7XG59XG4vLyBNYXliZSB3ZSdsbCB3YW50IHRvIGltcHJvdmUgdGhpcyBjb21wb25lbnQgd2l0aCBhZGRpdGlvbmFsIGZlYXR1cmVzXG4vLyBMaWtlIHRvZ2dsaW5nIGEgdHJhbnNsYXRpb24gbW9kZSB0aGF0IGFkZHMgYSBsaXR0bGUgdHJhbnNsYXRpb24gYnV0dG9uIG5lYXIgdGhlIHRleHQ/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2xhdGUoeyBjaGlsZHJlbiwgaWQsIHZhbHVlcywgfSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBsb2NhbGl6ZWRNZXNzYWdlID0gKF9hID0gZ2V0TG9jYWxpemVkTWVzc2FnZSh7IG1lc3NhZ2U6IGNoaWxkcmVuLCBpZCB9KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogY2hpbGRyZW47XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJwb2xhdGUsIHsgdmFsdWVzOiB2YWx1ZXMgfSwgbG9jYWxpemVkTWVzc2FnZSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIGFzIFJSTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGlzSW50ZXJuYWxVcmwgZnJvbSAnLi9pc0ludGVybmFsVXJsJztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICcuL0V4ZWN1dGlvbkVudmlyb25tZW50JztcbmltcG9ydCB7IHVzZUxpbmtzQ29sbGVjdG9yIH0gZnJvbSAnLi4vTGlua3NDb2xsZWN0b3InO1xuaW1wb3J0IHsgdXNlQmFzZVVybFV0aWxzIH0gZnJvbSAnLi91c2VCYXNlVXJsJztcbi8vIFRPRE8gYWxsIHRoaXMgd291bGRuJ3QgYmUgbmVjZXNzYXJ5IGlmIHdlIHVzZWQgUmVhY3RSb3V0ZXIgYmFzZW5hbWUgZmVhdHVyZVxuLy8gV2UgZG9uJ3QgYXV0b21hdGljYWxseSBhZGQgYmFzZSB1cmxzIHRvIGFsbCBsaW5rcyxcbi8vIG9ubHkgdGhlIFwic2FmZVwiIG9uZXMsIHN0YXJ0aW5nIHdpdGggLyAobGlrZSAvZG9jcy9pbnRyb2R1Y3Rpb24pXG4vLyB0aGlzIGlzIGJlY2F1c2UgdXNlQmFzZVVybCgpIGFjdHVhbGx5IHRyYW5zZm9ybXMgcmVsYXRpdmUgbGlua3Ncbi8vIGxpa2UgXCJpbnRyb2R1Y3Rpb25cIiB0byBcIi9iYXNlVXJsL2ludHJvZHVjdGlvblwiID0+IGJhZCBiZWhhdmlvciB0byBmaXhcbmNvbnN0IHNob3VsZEFkZEJhc2VVcmxBdXRvbWF0aWNhbGx5ID0gKHRvKSA9PiB0by5zdGFydHNXaXRoKCcvJyk7XG5mdW5jdGlvbiBMaW5rKF9hKSB7XG4gICAgdmFyIF9iO1xuICAgIHZhciB7IGlzTmF2TGluaywgdG8sIGhyZWYsIGFjdGl2ZUNsYXNzTmFtZSwgaXNBY3RpdmUsICdkYXRhLW5vQnJva2VuTGlua0NoZWNrJzogbm9Ccm9rZW5MaW5rQ2hlY2ssIGF1dG9BZGRCYXNlVXJsID0gdHJ1ZSB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJpc05hdkxpbmtcIiwgXCJ0b1wiLCBcImhyZWZcIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJpc0FjdGl2ZVwiLCAnZGF0YS1ub0Jyb2tlbkxpbmtDaGVjaycsIFwiYXV0b0FkZEJhc2VVcmxcIl0pO1xuICAgIGNvbnN0IHsgd2l0aEJhc2VVcmwgfSA9IHVzZUJhc2VVcmxVdGlscygpO1xuICAgIGNvbnN0IGxpbmtzQ29sbGVjdG9yID0gdXNlTGlua3NDb2xsZWN0b3IoKTtcbiAgICAvLyBJTVBPUlRBTlQ6IHVzaW5nIHRvIG9yIGhyZWYgc2hvdWxkIG5vdCBjaGFuZ2UgYW55dGhpbmdcbiAgICAvLyBGb3IgZXhhbXBsZSwgTURYIGxpbmtzIHdpbGwgQUxXQVlTIGdpdmUgdXMgdGhlIGhyZWYgcHJvcHNcbiAgICAvLyBVc2luZyBvbmUgcHJvcCBvciB0aGUgb3RoZXIgc2hvdWxkIG5vdCBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoXG4gICAgLy8gaW50ZXJuYWwgbGlua3MgKC9kb2NzL215RG9jKSBmcm9tIGV4dGVybmFsIGxpbmtzIChodHRwczovL2dpdGh1Yi5jb20pXG4gICAgY29uc3QgdGFyZ2V0TGlua1VucHJlZml4ZWQgPSB0byB8fCBocmVmO1xuICAgIGZ1bmN0aW9uIG1heWJlQWRkQmFzZVVybChzdHIpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9BZGRCYXNlVXJsICYmIHNob3VsZEFkZEJhc2VVcmxBdXRvbWF0aWNhbGx5KHN0cilcbiAgICAgICAgICAgID8gd2l0aEJhc2VVcmwoc3RyKVxuICAgICAgICAgICAgOiBzdHI7XG4gICAgfVxuICAgIGNvbnN0IGlzSW50ZXJuYWwgPSBpc0ludGVybmFsVXJsKHRhcmdldExpbmtVbnByZWZpeGVkKTtcbiAgICAvLyBwYXRobmFtZTovLyBpcyBhIHNwZWNpYWwgXCJwcm90b2NvbFwiIHdlIHVzZSB0byB0ZWxsIERvY3VzYXVydXMgbGlua1xuICAgIC8vIHRoYXQgYSBsaW5rIGlzIG5vdCBcImludGVybmFsXCIgYW5kIHRoYXQgd2Ugc2hvdWxkbid0IHVzZSBoaXN0b3J5LnB1c2goKVxuICAgIC8vIHRoaXMgaXMgbm90IGlkZWFsIGJ1dCBhIGdvb2QgZW5vdWdoIGVzY2FwZSBoYXRjaCBmb3Igbm93XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzA5XG4gICAgLy8gbm90ZTogd2Ugd2FudCBiYXNlVXJsIHRvIGJlIGFwcGVuZGVkIChzZWUgaXNzdWUgZm9yIGRldGFpbHMpXG4gICAgLy8gVE9ETyByZWFkIHJvdXRlcyBhbmQgYXV0b21hdGljYWxseSBkZXRlY3QgaW50ZXJuYWwvZXh0ZXJuYWwgbGlua3M/XG4gICAgY29uc3QgdGFyZ2V0TGlua1dpdGhvdXRQYXRobmFtZVByb3RvY29sID0gdGFyZ2V0TGlua1VucHJlZml4ZWQgPT09IG51bGwgfHwgdGFyZ2V0TGlua1VucHJlZml4ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldExpbmtVbnByZWZpeGVkLnJlcGxhY2UoJ3BhdGhuYW1lOi8vJywgJycpO1xuICAgIC8vIFRPRE8gd2Ugc2hvdWxkIHVzZSBSZWFjdFJvdXRlciBiYXNlbmFtZSBmZWF0dXJlIGluc3RlYWQhXG4gICAgLy8gQXV0b21hdGljYWxseSBhcHBseSBiYXNlIHVybCBpbiBsaW5rcyB0aGF0IHN0YXJ0IHdpdGggL1xuICAgIGNvbnN0IHRhcmdldExpbmsgPSB0eXBlb2YgdGFyZ2V0TGlua1dpdGhvdXRQYXRobmFtZVByb3RvY29sICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IG1heWJlQWRkQmFzZVVybCh0YXJnZXRMaW5rV2l0aG91dFBhdGhuYW1lUHJvdG9jb2wpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByZWxvYWRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgTGlua0NvbXBvbmVudCA9IGlzTmF2TGluayA/IE5hdkxpbmsgOiBSUkxpbms7XG4gICAgY29uc3QgSU9TdXBwb3J0ZWQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBsZXQgaW87XG4gICAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uID0gKGVsLCBjYikgPT4ge1xuICAgICAgICBpbyA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGVudHJ5LnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIGluIHZpZXdwb3J0LCBzdG9wIGxpc3RlbmluZy9vYnNlcnZpbmcgYW5kIHJ1biBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbl9PYnNlcnZlcl9BUElcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW8udW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZCBlbGVtZW50IHRvIHRoZSBvYnNlcnZlci5cbiAgICAgICAgaW8ub2JzZXJ2ZShlbCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZWYgPSAocmVmKSA9PiB7XG4gICAgICAgIGlmIChJT1N1cHBvcnRlZCAmJiByZWYgJiYgaXNJbnRlcm5hbCkge1xuICAgICAgICAgICAgLy8gSWYgSU8gc3VwcG9ydGVkIGFuZCBlbGVtZW50IHJlZmVyZW5jZSBmb3VuZCwgc2V0dXAgT2JzZXJ2ZXIgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgICAgIGhhbmRsZUludGVyc2VjdGlvbihyZWYsICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdXNhdXJ1cy5wcmVmZXRjaCh0YXJnZXRMaW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghcHJlbG9hZGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1c2F1cnVzLnByZWxvYWQodGFyZ2V0TGluayk7XG4gICAgICAgICAgICBwcmVsb2FkZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIElmIElPIGlzIG5vdCBzdXBwb3J0ZWQuIFdlIHByZWZldGNoIGJ5IGRlZmF1bHQgKG9ubHkgb25jZSkuXG4gICAgICAgIGlmICghSU9TdXBwb3J0ZWQgJiYgaXNJbnRlcm5hbCkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VzYXVydXMucHJlZmV0Y2godGFyZ2V0TGluayk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBzdG9wIGludGVyc2VjdGlvbiBvYnNlcnZlciBmcm9tIHdhdGNoaW5nLlxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKElPU3VwcG9ydGVkICYmIGlvKSB7XG4gICAgICAgICAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt0YXJnZXRMaW5rLCBJT1N1cHBvcnRlZCwgaXNJbnRlcm5hbF0pO1xuICAgIGNvbnN0IGlzQW5jaG9yTGluayA9IChfYiA9IHRhcmdldExpbmsgPT09IG51bGwgfHwgdGFyZ2V0TGluayA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0TGluay5zdGFydHNXaXRoKCcjJykpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlO1xuICAgIGNvbnN0IGlzUmVndWxhckh0bWxMaW5rID0gIXRhcmdldExpbmsgfHwgIWlzSW50ZXJuYWwgfHwgaXNBbmNob3JMaW5rO1xuICAgIGlmICh0YXJnZXRMaW5rICYmIGlzSW50ZXJuYWwgJiYgIWlzQW5jaG9yTGluayAmJiAhbm9Ccm9rZW5MaW5rQ2hlY2spIHtcbiAgICAgICAgbGlua3NDb2xsZWN0b3IuY29sbGVjdExpbmsodGFyZ2V0TGluayk7XG4gICAgfVxuICAgIHJldHVybiBpc1JlZ3VsYXJIdG1sTGluayA/IChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50XG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IHRhcmdldExpbmsgfSwgKHRhcmdldExpbmtVbnByZWZpeGVkICYmXG4gICAgICAgICFpc0ludGVybmFsICYmIHsgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicgfSksIHByb3BzKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua0NvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsIGlubmVyUmVmOiBoYW5kbGVSZWYsIHRvOiB0YXJnZXRMaW5rIHx8ICcnIH0sIChpc05hdkxpbmsgJiYgeyBpc0FjdGl2ZSwgYWN0aXZlQ2xhc3NOYW1lIH0pKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICdAZG9jdXNhdXJ1cy9MaW5rJztcbmltcG9ydCB1c2VCYXNlVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL3VzZUJhc2VVcmwnO1xuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbmltcG9ydCB7aXNTYW1lUGF0aH0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcblxuZnVuY3Rpb24gTmF2TGluayh7XG4gIGFjdGl2ZUJhc2VQYXRoLFxuICBhY3RpdmVCYXNlUmVnZXgsXG4gIHRvLFxuICBocmVmLFxuICBsYWJlbCxcbiAgYWN0aXZlQ2xhc3NOYW1lID0gJ25hdmJhcl9fbGluay0tYWN0aXZlJyxcbiAgcHJlcGVuZEJhc2VVcmxUb0hyZWYsXG4gIC4uLnByb3BzXG59KSB7XG4gIC8vIFRPRE8gYWxsIHRoaXMgc2VlbXMgaGFja3lcbiAgLy8ge3RvOiAndmVyc2lvbid9IHNob3VsZCBwcm9iYWJseSBiZSBmb3JiaWRkZW4sIGluIGZhdm9yIG9mIHt0bzogJy92ZXJzaW9uJ31cbiAgY29uc3QgdG9VcmwgPSB1c2VCYXNlVXJsKHRvKTtcbiAgY29uc3QgYWN0aXZlQmFzZVVybCA9IHVzZUJhc2VVcmwoYWN0aXZlQmFzZVBhdGgpO1xuICBjb25zdCBub3JtYWxpemVkSHJlZiA9IHVzZUJhc2VVcmwoaHJlZiwge1xuICAgIGZvcmNlUHJlcGVuZEJhc2VVcmw6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB7Li4uKGhyZWZcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBocmVmOiBwcmVwZW5kQmFzZVVybFRvSHJlZiA/IG5vcm1hbGl6ZWRIcmVmIDogaHJlZixcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgaXNOYXZMaW5rOiB0cnVlLFxuICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdG86IHRvVXJsLFxuICAgICAgICAgICAgLi4uKGFjdGl2ZUJhc2VQYXRoIHx8IGFjdGl2ZUJhc2VSZWdleFxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAoX21hdGNoLCBsb2NhdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmFzZVJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgPyBuZXcgUmVnRXhwKGFjdGl2ZUJhc2VSZWdleCkudGVzdChsb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoYWN0aXZlQmFzZVVybCksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IG51bGwpLFxuICAgICAgICAgIH0pfVxuICAgICAgey4uLnByb3BzfT5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW1EZXNrdG9wKHtpdGVtcywgcG9zaXRpb24sIGNsYXNzTmFtZSwgLi4ucHJvcHN9KSB7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcm9wZG93bk1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWRyb3Bkb3duUmVmLmN1cnJlbnQgfHwgZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtkcm9wZG93blJlZl0pO1xuXG4gIGNvbnN0IG5hdkxpbmtDbGFzc05hbWVzID0gKGV4dHJhQ2xhc3NOYW1lLCBpc0Ryb3Bkb3duSXRlbSA9IGZhbHNlKSA9PlxuICAgIGNsc3goXG4gICAgICB7XG4gICAgICAgICduYXZiYXJfX2l0ZW0gbmF2YmFyX19saW5rJzogIWlzRHJvcGRvd25JdGVtLFxuICAgICAgICBkcm9wZG93bl9fbGluazogaXNEcm9wZG93bkl0ZW0sXG4gICAgICB9LFxuICAgICAgZXh0cmFDbGFzc05hbWUsXG4gICAgKTtcblxuICBpZiAoIWl0ZW1zKSB7XG4gICAgcmV0dXJuIDxOYXZMaW5rIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbmF2YmFyX19pdGVtJywgJ2Ryb3Bkb3duJywgJ2Ryb3Bkb3duLS1ob3ZlcmFibGUnLCB7XG4gICAgICAgICdkcm9wZG93bi0tbGVmdCc6IHBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICdkcm9wZG93bi0tcmlnaHQnOiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgJ2Ryb3Bkb3duLS1zaG93Jzogc2hvd0Ryb3Bkb3duLFxuICAgICAgfSl9PlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtuYXZMaW5rQ2xhc3NOYW1lcyhjbGFzc05hbWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLnRvID8gdW5kZWZpbmVkIDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbiA/PyBwcm9wcy5sYWJlbH1cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDx1bCByZWY9e2Ryb3Bkb3duTWVudVJlZn0gY2xhc3NOYW1lPVwiZHJvcGRvd25fX21lbnVcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoe2NsYXNzTmFtZTogY2hpbGRJdGVtQ2xhc3NOYW1lLCAuLi5jaGlsZEl0ZW1Qcm9wc30sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaXRlbXMubGVuZ3RoIC0gMSAmJiBlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHNldFNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXh0TmF2YmFySXRlbSA9IGRyb3Bkb3duUmVmLmN1cnJlbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5hdmJhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5hdmJhckl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImRyb3Bkb3duX19saW5rLS1hY3RpdmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e25hdkxpbmtDbGFzc05hbWVzKGNoaWxkSXRlbUNsYXNzTmFtZSwgdHJ1ZSl9XG4gICAgICAgICAgICAgIHsuLi5jaGlsZEl0ZW1Qcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBOYXZJdGVtTW9iaWxlKHtcbiAgaXRlbXMsXG4gIGNsYXNzTmFtZSxcbiAgcG9zaXRpb246IF9wb3NpdGlvbixcbiAgLy8gTmVlZCB0byBkZXN0cnVjdHVyZSBwb3NpdGlvbiBmcm9tIHByb3BzIHNvIHRoYXQgaXQgZG9lc24ndCBnZXQgcGFzc2VkIG9uLlxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCBtZW51TGlzdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qge3BhdGhuYW1lfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiAhaXRlbXM/LnNvbWUoKGl0ZW0pID0+IGlzU2FtZVBhdGgoaXRlbS50bywgcGF0aG5hbWUpKSA/PyB0cnVlLFxuICApO1xuXG4gIGNvbnN0IG5hdkxpbmtDbGFzc05hbWVzID0gKGV4dHJhQ2xhc3NOYW1lLCBpc1N1Ykxpc3QgPSBmYWxzZSkgPT5cbiAgICBjbHN4KFxuICAgICAgJ21lbnVfX2xpbmsnLFxuICAgICAge1xuICAgICAgICAnbWVudV9fbGluay0tc3VibGlzdCc6IGlzU3ViTGlzdCxcbiAgICAgIH0sXG4gICAgICBleHRyYUNsYXNzTmFtZSxcbiAgICApO1xuXG4gIGlmICghaXRlbXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3QtaXRlbVwiPlxuICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e25hdkxpbmtDbGFzc05hbWVzKGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVMaXN0SGVpZ2h0ID0gbWVudUxpc3RSZWYuY3VycmVudD8uc2Nyb2xsSGVpZ2h0XG4gICAgPyBgJHttZW51TGlzdFJlZi5jdXJyZW50Py5zY3JvbGxIZWlnaHR9cHhgXG4gICAgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ21lbnVfX2xpc3QtaXRlbScsIHtcbiAgICAgICAgJ21lbnVfX2xpc3QtaXRlbS0tY29sbGFwc2VkJzogY29sbGFwc2VkLFxuICAgICAgfSl9PlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2xhc3NOYW1lLCB0cnVlKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZXRDb2xsYXBzZWQoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgICAgICB9fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVuID8/IHByb3BzLmxhYmVsfVxuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3RcIlxuICAgICAgICByZWY9e21lbnVMaXN0UmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogIWNvbGxhcHNlZCA/IG1lbnVMaXN0SGVpZ2h0IDogdW5kZWZpbmVkLFxuICAgICAgICB9fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoe2NsYXNzTmFtZTogY2hpbGRJdGVtQ2xhc3NOYW1lLCAuLi5jaGlsZEl0ZW1Qcm9wc30sIGkpID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbGlzdC1pdGVtXCIga2V5PXtpfT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cIm1lbnVfX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2hpbGRJdGVtQ2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgey4uLmNoaWxkSXRlbVByb3BzfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRGVmYXVsdE5hdmJhckl0ZW0oe21vYmlsZSA9IGZhbHNlLCAuLi5wcm9wc30pIHtcbiAgY29uc3QgQ29tcCA9IG1vYmlsZSA/IE5hdkl0ZW1Nb2JpbGUgOiBOYXZJdGVtRGVza3RvcDtcbiAgcmV0dXJuIDxDb21wIHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHROYXZiYXJJdGVtO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3RvY29sKHVybCkge1xuICAgIHJldHVybiAvXihcXHcqOnxcXC9cXC8pLy50ZXN0KHVybCkgPT09IHRydWU7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ludGVybmFsVXJsKHVybCkge1xuICAgIHJldHVybiB0eXBlb2YgdXJsICE9PSAndW5kZWZpbmVkJyAmJiAhaGFzUHJvdG9jb2wodXJsKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VUaGVtZUNvbmZpZyA9IHZvaWQgMDtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmNvbnN0IHVzZURvY3VzYXVydXNDb250ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0XCIpKTtcbmZ1bmN0aW9uIHVzZVRoZW1lQ29uZmlnKCkge1xuICAgIHJldHVybiB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKS5zaXRlQ29uZmlnLnRoZW1lQ29uZmlnO1xufVxuZXhwb3J0cy51c2VUaGVtZUNvbmZpZyA9IHVzZVRoZW1lQ29uZmlnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRG9jc1BsdWdpbkVuYWJsZWQgPSB2b2lkIDA7XG5jb25zdCB1c2VEb2NzXzEgPSByZXF1aXJlKFwiQHRoZW1lL2hvb2tzL3VzZURvY3NcIik7XG4vLyBUT0RPIG5vdCBpZGVhbCwgc2VlIGFsc28gXCJ1c2VEb2NzXCJcbmV4cG9ydHMuaXNEb2NzUGx1Z2luRW5hYmxlZCA9ICEhdXNlRG9jc18xLnVzZUFsbERvY3NEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQgPSBleHBvcnRzLkRvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyID0gdm9pZCAwO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgdXNlVGhlbWVDb25maWdfMSA9IHJlcXVpcmUoXCIuLi91c2VUaGVtZUNvbmZpZ1wiKTtcbmNvbnN0IGRvY3NVdGlsc18xID0gcmVxdWlyZShcIi4uL2RvY3NVdGlsc1wiKTtcbmNvbnN0IHVzZURvY3NfMSA9IHJlcXVpcmUoXCJAdGhlbWUvaG9va3MvdXNlRG9jc1wiKTtcbmNvbnN0IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZVwiKSk7XG4vLyBJbml0aWFsIHN0YXRlIGlzIGFsd2F5cyBudWxsIGFzIHdlIGNhbid0IHJlYWQgbG9jYWxzdG9yYWdlIGZyb20gbm9kZSBTU1JcbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpIHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBwbHVnaW5JZHMuZm9yRWFjaCgocGx1Z2luSWQpID0+IHtcbiAgICAgICAgaW5pdGlhbFN0YXRlW3BsdWdpbklkXSA9IHtcbiAgICAgICAgICAgIHByZWZlcnJlZFZlcnNpb25OYW1lOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG4vLyBSZWFkIHN0b3JhZ2UgZm9yIGFsbCBkb2NzIHBsdWdpbnNcbi8vIEFzc2lnbiB0byBlYWNoIGRvYyBwbHVnaW4gYSBwcmVmZXJyZWQgdmVyc2lvbiAoaWYgZm91bmQpXG5mdW5jdGlvbiByZWFkU3RvcmFnZVN0YXRlKHsgcGx1Z2luSWRzLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIGFsbERvY3NEYXRhLCB9KSB7XG4gICAgLy8gVGhlIHN0b3JhZ2UgdmFsdWUgd2UgcmVhZCBtaWdodCBiZSBzdGFsZSxcbiAgICAvLyBhbmQgYmVsb25nIHRvIGEgdmVyc2lvbiB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSBzaXRlIGFueW1vcmVcbiAgICAvLyBJbiBzdWNoIGNhc2UsIHdlIHJlbW92ZSB0aGUgc3RvcmFnZSB2YWx1ZSB0byBhdm9pZCBkb3duc3RyZWFtIGVycm9yc1xuICAgIGZ1bmN0aW9uIHJlc3RvcmVQbHVnaW5TdGF0ZShwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSA9IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xLmRlZmF1bHQucmVhZChwbHVnaW5JZCwgdmVyc2lvblBlcnNpc3RlbmNlKTtcbiAgICAgICAgY29uc3QgcGx1Z2luRGF0YSA9IGFsbERvY3NEYXRhW3BsdWdpbklkXTtcbiAgICAgICAgY29uc3QgdmVyc2lvbkV4aXN0cyA9IHBsdWdpbkRhdGEudmVyc2lvbnMuc29tZSgodmVyc2lvbikgPT4gdmVyc2lvbi5uYW1lID09PSBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSk7XG4gICAgICAgIGlmICh2ZXJzaW9uRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogcHJlZmVycmVkVmVyc2lvbk5hbWVVbnNhZmUgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xLmRlZmF1bHQuY2xlYXIocGx1Z2luSWQsIHZlcnNpb25QZXJzaXN0ZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICBpbml0aWFsU3RhdGVbcGx1Z2luSWRdID0gcmVzdG9yZVBsdWdpblN0YXRlKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuZnVuY3Rpb24gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCkge1xuICAgIHJldHVybiB1c2VUaGVtZUNvbmZpZ18xLnVzZVRoZW1lQ29uZmlnKCkuZG9jcy52ZXJzaW9uUGVyc2lzdGVuY2U7XG59XG4vLyBWYWx1ZSB0aGF0ICB3aWxsIGJlIGFjY2Vzc2libGUgdGhyb3VnaCBjb250ZXh0OiBbc3RhdGUsYXBpXVxuZnVuY3Rpb24gdXNlQ29udGV4dFZhbHVlKCkge1xuICAgIGNvbnN0IGFsbERvY3NEYXRhID0gdXNlRG9jc18xLnVzZUFsbERvY3NEYXRhKCk7XG4gICAgY29uc3QgdmVyc2lvblBlcnNpc3RlbmNlID0gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCk7XG4gICAgY29uc3QgcGx1Z2luSWRzID0gcmVhY3RfMS51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKGFsbERvY3NEYXRhKSwgW2FsbERvY3NEYXRhXSk7XG4gICAgLy8gSW5pdGlhbCBzdGF0ZSBpcyBlbXB0eSwgYXMgIHdlIGNhbid0IHJlYWQgYnJvd3NlciBzdG9yYWdlIGluIG5vZGUvU1NSXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSByZWFjdF8xLnVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpKTtcbiAgICAvLyBPbiBtb3VudCwgd2Ugc2V0IHRoZSBzdGF0ZSByZWFkIGZyb20gYnJvd3NlciBzdG9yYWdlXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShyZWFkU3RvcmFnZVN0YXRlKHsgYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzIH0pKTtcbiAgICB9LCBbYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzXSk7XG4gICAgLy8gVGhlIEFQSSB0aGF0IHdlIGV4cG9zZSB0byBjb25zdW1lciBob29rcyAobWVtbyBmb3IgY29uc3RhbnQgb2JqZWN0KVxuICAgIGNvbnN0IGFwaSA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHNhdmVQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkLCB2ZXJzaW9uTmFtZSkge1xuICAgICAgICAgICAgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlXzEuZGVmYXVsdC5zYXZlKHBsdWdpbklkLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIHZlcnNpb25OYW1lKTtcbiAgICAgICAgICAgIHNldFN0YXRlKChzKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzKSwgeyBbcGx1Z2luSWRdOiB7IHByZWZlcnJlZFZlcnNpb25OYW1lOiB2ZXJzaW9uTmFtZSB9IH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNhdmVQcmVmZXJyZWRWZXJzaW9uLFxuICAgICAgICB9O1xuICAgIH0sIFtzZXRTdGF0ZV0pO1xuICAgIHJldHVybiBbc3RhdGUsIGFwaV07XG59XG5jb25zdCBDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KG51bGwpO1xuZnVuY3Rpb24gRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgfSkge1xuICAgIGlmIChkb2NzVXRpbHNfMS5pc0RvY3NQbHVnaW5FbmFibGVkKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUsIG51bGwsIGNoaWxkcmVuKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxufVxuZXhwb3J0cy5Eb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlciA9IERvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyO1xuZnVuY3Rpb24gRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUoeyBjaGlsZHJlbiwgfSkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHRWYWx1ZSgpO1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxuZnVuY3Rpb24gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0KCkge1xuICAgIGNvbnN0IHZhbHVlID0gcmVhY3RfMS51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBkb2NzIHByZWZlcnJlZCBjb250ZXh0LCBtYXliZSB5b3UgZm9yZ290IHRvIHVzZSB0aGUgRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXIgP1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQgPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFVzZXJQcmVmZXJlbmNlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5leHBvcnQgZGVmYXVsdCBVc2VyUHJlZmVyZW5jZXNDb250ZXh0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclByZWZlcmVuY2VzQ29udGV4dCBmcm9tICdAdGhlbWUvVXNlclByZWZlcmVuY2VzQ29udGV4dCc7XG5cbmZ1bmN0aW9uIHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJQcmVmZXJlbmNlc0NvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHRgIGlzIHVzZWQgb3V0c2lkZSBvZiBgTGF5b3V0YCBDb21wb25lbnQuJyxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVzZXJQcmVmZXJlbmNlc0NvbnRleHQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnQHRoZW1lL1RoZW1lQ29udGV4dCc7XG5cbmZ1bmN0aW9uIHVzZVRoZW1lQ29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2B1c2VUaGVtZUNvbnRleHRgIGlzIHVzZWQgb3V0c2lkZSBvZiBgTGF5b3V0YCBDb21wb25lbnQuIFNlZSBodHRwczovL3YyLmRvY3VzYXVydXMuaW8vZG9jcy9hcGkvdGhlbWVzL2NvbmZpZ3VyYXRpb24jdXNldGhlbWVjb250ZXh0LicsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZUNvbnRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlQWx0ZXJuYXRlUGFnZVV0aWxzID0gdm9pZCAwO1xuY29uc3QgdXNlRG9jdXNhdXJ1c0NvbnRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHRcIikpO1xuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwiQGRvY3VzYXVydXMvcm91dGVyXCIpO1xuLy8gUGVybWl0cyB0byBvYnRhaW4gdGhlIHVybCBvZiB0aGUgY3VycmVudCBwYWdlIGluIGFub3RoZXIgbG9jYWxlXG4vLyBVc2VmdWwgdG8gZ2VuZXJhdGUgaHJlZmxhbmcgbWV0YSBoZWFkZXJzIGV0Yy4uLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3NlYXJjaC9kb2NzL2FkdmFuY2VkL2NyYXdsaW5nL2xvY2FsaXplZC12ZXJzaW9uc1xuZnVuY3Rpb24gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzKCkge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZzogeyBiYXNlVXJsLCB1cmwgfSwgaTE4bjogeyBkZWZhdWx0TG9jYWxlLCBjdXJyZW50TG9jYWxlIH0sIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IGJhc2VVcmxVbmxvY2FsaXplZCA9IGN1cnJlbnRMb2NhbGUgPT09IGRlZmF1bHRMb2NhbGVcbiAgICAgICAgPyBiYXNlVXJsXG4gICAgICAgIDogYmFzZVVybC5yZXBsYWNlKGAvJHtjdXJyZW50TG9jYWxlfS9gLCAnLycpO1xuICAgIGNvbnN0IHBhdGhuYW1lU3VmZml4ID0gcGF0aG5hbWUucmVwbGFjZShiYXNlVXJsLCAnJyk7XG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxpemVkQmFzZVVybChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9YFxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9JHtsb2NhbGV9L2A7XG4gICAgfVxuICAgIC8vIFRPRE8gc3VwcG9ydCBjb3JyZWN0IGFsdGVybmF0ZSB1cmwgd2hlbiBsb2NhbGl6ZWQgc2l0ZSBpcyBkZXBsb3llZCBvbiBhbm90aGVyIGRvbWFpblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVybCh7IGxvY2FsZSwgZnVsbHlRdWFsaWZpZWQsIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke2Z1bGx5UXVhbGlmaWVkID8gdXJsIDogJyd9JHtnZXRMb2NhbGl6ZWRCYXNlVXJsKGxvY2FsZSl9JHtwYXRobmFtZVN1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVVcmwgfTtcbn1cbmV4cG9ydHMudXNlQWx0ZXJuYXRlUGFnZVV0aWxzID0gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRvY1ZlcnNpb25TZWFyY2hUYWcgPSBleHBvcnRzLkRFRkFVTFRfU0VBUkNIX1RBRyA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9TRUFSQ0hfVEFHID0gJ2RlZmF1bHQnO1xuZnVuY3Rpb24gZG9jVmVyc2lvblNlYXJjaFRhZyhwbHVnaW5JZCwgdmVyc2lvbk5hbWUpIHtcbiAgICByZXR1cm4gYGRvY3MtJHtwbHVnaW5JZH0tJHt2ZXJzaW9uTmFtZX1gO1xufVxuZXhwb3J0cy5kb2NWZXJzaW9uU2VhcmNoVGFnID0gZG9jVmVyc2lvblNlYXJjaFRhZztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSBleHBvcnRzLnVzZUFjdGl2ZURvY0NvbnRleHQgPSBleHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLnVzZUxhdGVzdFZlcnNpb24gPSBleHBvcnRzLnVzZVZlcnNpb25zID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW5BbmRWZXJzaW9uID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZURvY3NEYXRhID0gZXhwb3J0cy51c2VBbGxEb2NzRGF0YSA9IHZvaWQgMDtcbmNvbnN0IHJvdXRlcl8xID0gcmVxdWlyZShcIkBkb2N1c2F1cnVzL3JvdXRlclwiKTtcbmNvbnN0IHVzZUdsb2JhbERhdGFfMSA9IHJlcXVpcmUoXCJAZG9jdXNhdXJ1cy91c2VHbG9iYWxEYXRhXCIpO1xuY29uc3QgZG9jc0NsaWVudFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L2RvY3NDbGllbnRVdGlsc1wiKTtcbmV4cG9ydHMudXNlQWxsRG9jc0RhdGEgPSAoKSA9PiB1c2VHbG9iYWxEYXRhXzEudXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJyk7XG5leHBvcnRzLnVzZURvY3NEYXRhID0gKHBsdWdpbklkKSA9PiB1c2VHbG9iYWxEYXRhXzEudXNlUGx1Z2luRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJywgcGx1Z2luSWQpO1xuZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4gPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlQWxsRG9jc0RhdGEoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVQbHVnaW4oZGF0YSwgcGF0aG5hbWUsIG9wdGlvbnMpO1xufTtcbmV4cG9ydHMudXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZUFjdGl2ZVBsdWdpbihvcHRpb25zKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIGlmIChhY3RpdmVQbHVnaW4pIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IGRvY3NDbGllbnRVdGlsc18xLmdldEFjdGl2ZVZlcnNpb24oYWN0aXZlUGx1Z2luLnBsdWdpbkRhdGEsIHBhdGhuYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsdWdpbixcbiAgICAgICAgICAgIGFjdGl2ZVZlcnNpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuLy8gdmVyc2lvbnMgYXJlIHJldHVybmVkIG9yZGVyZWQgKG1vc3QgcmVjZW50IGZpcnN0KVxuZXhwb3J0cy51c2VWZXJzaW9ucyA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucztcbn07XG5leHBvcnRzLnVzZUxhdGVzdFZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldExhdGVzdFZlcnNpb24oZGF0YSk7XG59O1xuLy8gTm90ZTogcmV0dXJuIHVuZGVmaW5lZCBvbiBkb2MtdW5yZWxhdGVkIHBhZ2VzLFxuLy8gYmVjYXVzZSB0aGVyZSdzIG5vIHZlcnNpb24gY3VycmVudGx5IGNvbnNpZGVyZWQgYXMgYWN0aXZlXG5leHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gZG9jc0NsaWVudFV0aWxzXzEuZ2V0QWN0aXZlVmVyc2lvbihkYXRhLCBwYXRobmFtZSk7XG59O1xuZXhwb3J0cy51c2VBY3RpdmVEb2NDb250ZXh0ID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcl8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldEFjdGl2ZURvY0NvbnRleHQoZGF0YSwgcGF0aG5hbWUpO1xufTtcbi8vIFVzZWZ1bCB0byBzYXkgXCJoZXksIHlvdSBhcmUgbm90IG9uIHRoZSBsYXRlc3QgZG9jcyB2ZXJzaW9uLCBwbGVhc2Ugc3dpdGNoXCJcbmV4cG9ydHMudXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcl8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyhkYXRhLCBwYXRobmFtZSk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuLy8gVE9ETyBhbm5veWluZyBjb25zdGFudCBkdXBsaWNhdGlvblxuLy8gaWYgd2UgaW1wb3J0IHNvbWV0aGluZyBmcm9tIG91dHNpZGUgdGhlIC9jbGllbnQgZm9sZGVyLFxuLy8gdGhlIHRzYyBkaXJlY3Rvcnkgc3RydWN0dXJlIGlzIGFmZmVjdGVkXG4vLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHbG9iYWxEYXRhKCkge1xuICAgIGNvbnN0IHsgZ2xvYmFsRGF0YSB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBpZiAoIWdsb2JhbERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2N1c2F1cnVzIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsRGF0YTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhKHBsdWdpbk5hbWUpIHtcbiAgICBjb25zdCBnbG9iYWxEYXRhID0gdXNlR2xvYmFsRGF0YSgpO1xuICAgIGNvbnN0IHBsdWdpbkdsb2JhbERhdGEgPSBnbG9iYWxEYXRhW3BsdWdpbk5hbWVdO1xuICAgIGlmICghcGx1Z2luR2xvYmFsRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvY3VzYXVydXMgcGx1Z2luIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCBmb3IgcGx1Z2luTmFtZT0ke3BsdWdpbk5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBwbHVnaW5HbG9iYWxEYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsdWdpbkRhdGEocGx1Z2luTmFtZSwgcGx1Z2luSWQgPSBERUZBVUxUX1BMVUdJTl9JRCkge1xuICAgIGNvbnN0IHBsdWdpbkdsb2JhbERhdGEgPSB1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhKHBsdWdpbk5hbWUpO1xuICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlR2xvYmFsRGF0YSA9IHBsdWdpbkdsb2JhbERhdGFbcGx1Z2luSWRdO1xuICAgIGlmICghcGx1Z2luSW5zdGFuY2VHbG9iYWxEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRG9jdXNhdXJ1cyBwbHVnaW4gZ2xvYmFsIGRhdGEgbm90IGZvdW5kIGZvciBwbHVnaW5OYW1lPSR7cGx1Z2luTmFtZX0gYW5kIHBsdWdpbklkPSR7cGx1Z2luSWR9YCk7XG4gICAgfVxuICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZUdsb2JhbERhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy5nZXRBY3RpdmVWZXJzaW9uID0gZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uID0gZXhwb3J0cy5nZXRBY3RpdmVQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAZG9jdXNhdXJ1cy9yb3V0ZXJcIik7XG5mdW5jdGlvbiBnZXRBY3RpdmVQbHVnaW4oYWxsUGx1Z2luRGF0YXMsIHBhdGhuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhY3RpdmVFbnRyeSA9IE9iamVjdC5lbnRyaWVzKGFsbFBsdWdpbkRhdGFzKS5maW5kKChbX2lkLCBwbHVnaW5EYXRhXSkgPT4ge1xuICAgICAgICByZXR1cm4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgICAgIHBhdGg6IHBsdWdpbkRhdGEucGF0aCxcbiAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGFjdGl2ZVBsdWdpbiA9IGFjdGl2ZUVudHJ5XG4gICAgICAgID8geyBwbHVnaW5JZDogYWN0aXZlRW50cnlbMF0sIHBsdWdpbkRhdGE6IGFjdGl2ZUVudHJ5WzFdIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFhY3RpdmVQbHVnaW4gJiYgb3B0aW9ucy5mYWlsZmFzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGZpbmQgYWN0aXZlIGRvY3MgcGx1Z2luIGZvciBwYXRobmFtZT0ke3BhdGhuYW1lfSwgd2hpbGUgaXQgd2FzIGV4cGVjdGVkIHRvIGJlIGZvdW5kLiBNYXliZSB5b3UgdHJpZWQgdG8gdXNlIGEgZG9jcyBmZWF0dXJlIHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIGRvY3MtcmVsYXRlZCBwYWdlPyBFeGlzdGluZyBkb2NzIHBsdWdpbiBwYXRocyBhcmU6ICR7T2JqZWN0LnZhbHVlcyhhbGxQbHVnaW5EYXRhcylcbiAgICAgICAgICAgIC5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLnBhdGgpXG4gICAgICAgICAgICAuam9pbignLCAnKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVBsdWdpbjtcbn1cbmV4cG9ydHMuZ2V0QWN0aXZlUGx1Z2luID0gZ2V0QWN0aXZlUGx1Z2luO1xuZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5maW5kKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLmlzTGFzdCk7XG59O1xuLy8gTm90ZTogcmV0dXJuIHVuZGVmaW5lZCBvbiBkb2MtdW5yZWxhdGVkIHBhZ2VzLFxuLy8gYmVjYXVzZSB0aGVyZSdzIG5vIHZlcnNpb24gY3VycmVudGx5IGNvbnNpZGVyZWQgYXMgYWN0aXZlXG5leHBvcnRzLmdldEFjdGl2ZVZlcnNpb24gPSAoZGF0YSwgcGF0aG5hbWUpID0+IHtcbiAgICBjb25zdCBsYXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICAvLyBMYXN0IHZlcnNpb24gaXMgYSByb3V0ZSBsaWtlIC9kb2NzLyosXG4gICAgLy8gd2UgbmVlZCB0byB0cnkgdG8gbWF0Y2ggaXQgbGFzdCBvciBpdCB3b3VsZCBtYXRjaCAvZG9jcy92ZXJzaW9uLTEuMC8qIGFzIHdlbGxcbiAgICBjb25zdCBvcmRlcmVkVmVyc2lvbnNNZXRhZGF0YSA9IFtcbiAgICAgICAgLi4uZGF0YS52ZXJzaW9ucy5maWx0ZXIoKHZlcnNpb24pID0+IHZlcnNpb24gIT09IGxhc3RWZXJzaW9uKSxcbiAgICAgICAgbGFzdFZlcnNpb24sXG4gICAgXTtcbiAgICByZXR1cm4gb3JkZXJlZFZlcnNpb25zTWV0YWRhdGEuZmluZCgodmVyc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgICAgIHBhdGg6IHZlcnNpb24ucGF0aCxcbiAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuZ2V0QWN0aXZlRG9jQ29udGV4dCA9IChkYXRhLCBwYXRobmFtZSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLmdldEFjdGl2ZVZlcnNpb24oZGF0YSwgcGF0aG5hbWUpO1xuICAgIGNvbnN0IGFjdGl2ZURvYyA9IGFjdGl2ZVZlcnNpb24gPT09IG51bGwgfHwgYWN0aXZlVmVyc2lvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlVmVyc2lvbi5kb2NzLmZpbmQoKGRvYykgPT4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgcGF0aDogZG9jLnBhdGgsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgIH0pKTtcbiAgICBmdW5jdGlvbiBnZXRBbHRlcm5hdGVWZXJzaW9uRG9jcyhkb2NJZCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZGF0YS52ZXJzaW9ucy5mb3JFYWNoKCh2ZXJzaW9uKSA9PiB7XG4gICAgICAgICAgICB2ZXJzaW9uLmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRvYy5pZCA9PT0gZG9jSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3ZlcnNpb24ubmFtZV0gPSBkb2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjb25zdCBhbHRlcm5hdGVWZXJzaW9uRG9jcyA9IGFjdGl2ZURvY1xuICAgICAgICA/IGdldEFsdGVybmF0ZVZlcnNpb25Eb2NzKGFjdGl2ZURvYy5pZClcbiAgICAgICAgOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVWZXJzaW9uLFxuICAgICAgICBhY3RpdmVEb2MsXG4gICAgICAgIGFsdGVybmF0ZURvY1ZlcnNpb25zOiBhbHRlcm5hdGVWZXJzaW9uRG9jcyxcbiAgICB9O1xufTtcbmV4cG9ydHMuZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKGRhdGEsIHBhdGhuYW1lKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICBjb25zdCBhY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0KGRhdGEsIHBhdGhuYW1lKTtcbiAgICAvLyBXZSBvbmx5IHN1Z2dlc3QgYW5vdGhlciBkb2MvdmVyc2lvbiBpZiB1c2VyIGlzIG5vdCB1c2luZyB0aGUgbGF0ZXN0IHZlcnNpb25cbiAgICBjb25zdCBpc05vdE9uTGF0ZXN0VmVyc2lvbiA9IGFjdGl2ZURvY0NvbnRleHQuYWN0aXZlVmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbjtcbiAgICBjb25zdCBsYXRlc3REb2NTdWdnZXN0aW9uID0gaXNOb3RPbkxhdGVzdFZlcnNpb25cbiAgICAgICAgPyBhY3RpdmVEb2NDb250ZXh0ID09PSBudWxsIHx8IGFjdGl2ZURvY0NvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZURvY0NvbnRleHQuYWx0ZXJuYXRlRG9jVmVyc2lvbnNbbGF0ZXN0VmVyc2lvbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbiA9IGlzTm90T25MYXRlc3RWZXJzaW9uXG4gICAgICAgID8gbGF0ZXN0VmVyc2lvblxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyBsYXRlc3REb2NTdWdnZXN0aW9uLCBsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbiB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NhbWVQYXRoID0gdm9pZCAwO1xuLy8gQ29tcGFyZSB0aGUgMiBwYXRocywgaWdub3JpbmcgdHJhaWxpbmcgL1xuZXhwb3J0cy5pc1NhbWVQYXRoID0gKHBhdGgxLCBwYXRoMikgPT4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChwYXRobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gIXBhdGhuYW1lIHx8IChwYXRobmFtZSA9PT0gbnVsbCB8fCBwYXRobmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGF0aG5hbWUuZW5kc1dpdGgoJy8nKSkgPyBwYXRobmFtZSA6IGAke3BhdGhuYW1lfS9gO1xuICAgIH07XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwYXRoMSkgPT09IG5vcm1hbGl6ZShwYXRoMik7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZVRpdGxlRm9ybWF0dGVyID0gdm9pZCAwO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuY29uc3QgdXNlRG9jdXNhdXJ1c0NvbnRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHRcIikpO1xuZXhwb3J0cy51c2VUaXRsZUZvcm1hdHRlciA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZyA9IHt9IH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKTtcbiAgICBjb25zdCB7IHRpdGxlOiBzaXRlVGl0bGUsIHRpdGxlRGVsaW1pdGVyID0gJ3wnIH0gPSBzaXRlQ29uZmlnO1xuICAgIHJldHVybiB0aXRsZSAmJiB0aXRsZS50cmltKCkubGVuZ3RoXG4gICAgICAgID8gYCR7dGl0bGUudHJpbSgpfSAke3RpdGxlRGVsaW1pdGVyfSAke3NpdGVUaXRsZX1gXG4gICAgICAgIDogc2l0ZVRpdGxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VQbHVyYWxGb3JtID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IHVzZURvY3VzYXVydXNDb250ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0XCIpKTtcbi8vIFdlIHdhbnQgdG8gZW5zdXJlciBhIHN0YWJsZSBwbHVyYWwgZm9ybSBvcmRlciBpbiBhbGwgY2FzZXNcbi8vIEl0IGlzIG1vcmUgY29udmVuaWVudCBhbmQgbmF0dXJhbCB0byBoYW5kbGUgXCJzbWFsbCB2YWx1ZXNcIiBmaXJzdFxuLy8gU2VlIGh0dHBzOi8vdHdpdHRlci5jb20vc2ViYXN0aWVubG9yYmVyL3N0YXR1cy8xMzY2ODIwNjYzMjYxMDc3NTEwXG5jb25zdCBPcmRlcmVkUGx1cmFsRm9ybXMgPSBbXG4gICAgJ3plcm8nLFxuICAgICdvbmUnLFxuICAgICd0d28nLFxuICAgICdmZXcnLFxuICAgICdtYW55JyxcbiAgICAnb3RoZXInLFxuXTtcbmZ1bmN0aW9uIHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxGb3Jtcykge1xuICAgIHJldHVybiBPcmRlcmVkUGx1cmFsRm9ybXMuZmlsdGVyKChwZikgPT4gcGx1cmFsRm9ybXMuaW5jbHVkZXMocGYpKTtcbn1cbi8vIEhhcmRjb2RlZCBlbmdsaXNoL2ZhbGxiYWNrIGltcGxlbWVudGF0aW9uXG5jb25zdCBFbmdsaXNoUGx1cmFsRm9ybXMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHBsdXJhbEZvcm1zOiBzb3J0UGx1cmFsRm9ybXMoWydvbmUnLCAnb3RoZXInXSksXG4gICAgc2VsZWN0OiAoY291bnQpID0+IChjb3VudCA9PT0gMSA/ICdvbmUnIDogJ290aGVyJyksXG59O1xuZnVuY3Rpb24gY3JlYXRlTG9jYWxlUGx1cmFsRm9ybXMobG9jYWxlKSB7XG4gICAgY29uc3QgcGx1cmFsUnVsZXMgPSBuZXcgSW50bC5QbHVyYWxSdWxlcyhsb2NhbGUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcGx1cmFsRm9ybXM6IHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxSdWxlcy5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzKSxcbiAgICAgICAgc2VsZWN0OiAoY291bnQpID0+IHBsdXJhbFJ1bGVzLnNlbGVjdChjb3VudCksXG4gICAgfTtcbn1cbi8vIFBvb3IgbWFuJ3MgUGx1cmFsU2VsZWN0b3IgaW1wbGVtZW50YXRpb24sIHVzaW5nIGFuIGVuZ2xpc2ggZmFsbGJhY2suXG4vLyBXZSB3YW50IGEgbGlnaHR3ZWlnaHQsIGZ1dHVyZS1wcm9vZiBhbmQgZ29vZC1lbm91Z2ggc29sdXRpb24uXG4vLyBXZSBkb24ndCB3YW50IGEgcGVyZmVjdCBhbmQgaGVhdnkgc29sdXRpb24uXG4vL1xuLy8gRG9jdXNhdXJ1cyBjbGFzc2ljIHRoZW1lIGhhcyBvbmx5IDIgZGVlcGx5IG5lc3RlZCBsYWJlbHMgcmVxdWlyaW5nIGNvbXBsZXggcGx1cmFsIHJ1bGVzXG4vLyBXZSBkb24ndCB3YW50IHRvIHVzZSBJbnRsICsgUGx1cmFsUnVsZXMgcG9seWZpbGxzICsgZnVsbCBJQ1Ugc3ludGF4IChyZWFjdC1pbnRsKSBqdXN0IGZvciB0aGF0LlxuLy9cbi8vIE5vdGVzOlxuLy8gLSAyMDIxOiA5MislIEJyb3dzZXJzIHN1cHBvcnQgSW50bC5QbHVyYWxSdWxlcywgYW5kIHN1cHBvcnQgd2lsbCBpbmNyZWFzZSBpbiB0aGUgZnV0dXJlXG4vLyAtIE5vZGVKUyA+PSAxMyBoYXMgZnVsbCBJQ1Ugc3VwcG9ydCBieSBkZWZhdWx0XG4vLyAtIEluIGNhc2Ugb2YgXCJtaXNtYXRjaFwiIGJldHdlZW4gU1NSIGFuZCBCcm93c2VyIElDVSBzdXBwb3J0LCBSZWFjdCBrZWVwcyB3b3JraW5nIVxuZnVuY3Rpb24gdXNlTG9jYWxlUGx1cmFsRm9ybXMoKSB7XG4gICAgY29uc3QgeyBpMThuOiB7IGN1cnJlbnRMb2NhbGUgfSwgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0XzEuZGVmYXVsdCgpO1xuICAgIHJldHVybiByZWFjdF8xLnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNoZWNraW5nIEludGwuUGx1cmFsUnVsZXMgaW4gY2FzZSBicm93c2VyIGRvZXNuJ3QgaGF2ZSBpdCAoZS5nIFNhZmFyaSAxMi0pXG4gICAgICAgIGlmIChJbnRsLlBsdXJhbFJ1bGVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbGVQbHVyYWxGb3JtcyhjdXJyZW50TG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHVzZSBJbnRsLlBsdXJhbFJ1bGVzIGZvciBsb2NhbGU9JHtjdXJyZW50TG9jYWxlfS5cbkRvY3VzYXVydXMgd2lsbCBmYWxsYmFjayB0byBhIGRlZmF1bHQvZmFsbGJhY2sgKEVuZ2xpc2gpIEludGwuUGx1cmFsUnVsZXMgaW1wbGVtZW50YXRpb24uXG5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW50bC5QbHVyYWxSdWxlcyBub3QgYXZhaWxhYmxlIVxuRG9jdXNhdXJ1cyB3aWxsIGZhbGxiYWNrIHRvIGEgZGVmYXVsdC9mYWxsYmFjayAoRW5nbGlzaCkgSW50bC5QbHVyYWxSdWxlcyBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgYCk7XG4gICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRMb2NhbGVdKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdFBsdXJhbE1lc3NhZ2UocGx1cmFsTWVzc2FnZXMsIGNvdW50LCBsb2NhbGVQbHVyYWxGb3Jtcykge1xuICAgIGNvbnN0IHNlcGFyYXRvciA9ICd8JztcbiAgICBjb25zdCBwYXJ0cyA9IHBsdXJhbE1lc3NhZ2VzLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGb3IgbG9jYWxlPSR7bG9jYWxlUGx1cmFsRm9ybXMubG9jYWxlfSwgYSBtYXhpbXVtIG9mICR7bG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RofSBwbHVyYWwgZm9ybXMgYXJlIGV4cGVjdGVkICgke2xvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zfSksIGJ1dCB0aGUgbWVzc2FnZSBjb250YWlucyAke3BhcnRzLmxlbmd0aH0gcGx1cmFsIGZvcm1zOiAke3BsdXJhbE1lc3NhZ2VzfSBgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVyYWxGb3JtID0gbG9jYWxlUGx1cmFsRm9ybXMuc2VsZWN0KGNvdW50KTtcbiAgICAgICAgY29uc3QgcGx1cmFsRm9ybUluZGV4ID0gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMuaW5kZXhPZihwbHVyYWxGb3JtKTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBub3QgZW5vdWdoIHBsdXJhbCBmb3JtIG1lc3NhZ2VzLCB3ZSB0YWtlIHRoZSBsYXN0IG9uZSAob3RoZXIpIGluc3RlYWQgb2YgcmV0dXJuaW5nIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gcGFydHNbTWF0aC5taW4ocGx1cmFsRm9ybUluZGV4LCBwYXJ0cy5sZW5ndGggLSAxKV07XG4gICAgfVxufVxuZnVuY3Rpb24gdXNlUGx1cmFsRm9ybSgpIHtcbiAgICBjb25zdCBsb2NhbGVQbHVyYWxGb3JtID0gdXNlTG9jYWxlUGx1cmFsRm9ybXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RNZXNzYWdlOiAoY291bnQsIHBsdXJhbE1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0UGx1cmFsTWVzc2FnZShwbHVyYWxNZXNzYWdlcywgY291bnQsIGxvY2FsZVBsdXJhbEZvcm0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnVzZVBsdXJhbEZvcm0gPSB1c2VQbHVyYWxGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQnlQbHVnaW5JZCA9IGV4cG9ydHMudXNlRG9jc1ByZWZlcnJlZFZlcnNpb24gPSB2b2lkIDA7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xID0gcmVxdWlyZShcIi4vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlclwiKTtcbmNvbnN0IHVzZURvY3NfMSA9IHJlcXVpcmUoXCJAdGhlbWUvaG9va3MvdXNlRG9jc1wiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIkBkb2N1c2F1cnVzL2NvbnN0YW50c1wiKTtcbi8vIFRPRE8gaW1wcm92ZSB0eXBpbmdcbi8vIE5vdGUsIHRoZSBwcmVmZXJyZWRWZXJzaW9uIGF0dHJpYnV0ZSB3aWxsIGFsd2F5cyBiZSBudWxsIGJlZm9yZSBtb3VudFxuZnVuY3Rpb24gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQgPSBjb25zdGFudHNfMS5ERUZBVUxUX1BMVUdJTl9JRCkge1xuICAgIGNvbnN0IGRvY3NEYXRhID0gdXNlRG9jc18xLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICBjb25zdCBbc3RhdGUsIGFwaV0gPSBEb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyXzEudXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0KCk7XG4gICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgIGNvbnN0IHByZWZlcnJlZFZlcnNpb24gPSBwcmVmZXJyZWRWZXJzaW9uTmFtZVxuICAgICAgICA/IGRvY3NEYXRhLnZlcnNpb25zLmZpbmQoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSA9PT0gcHJlZmVycmVkVmVyc2lvbk5hbWUpXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCh2ZXJzaW9uTmFtZSkgPT4ge1xuICAgICAgICBhcGkuc2F2ZVByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQsIHZlcnNpb25OYW1lKTtcbiAgICB9LCBbYXBpXSk7XG4gICAgcmV0dXJuIHsgcHJlZmVycmVkVmVyc2lvbiwgc2F2ZVByZWZlcnJlZFZlcnNpb25OYW1lIH07XG59XG5leHBvcnRzLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uID0gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb247XG5mdW5jdGlvbiB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQoKSB7XG4gICAgY29uc3QgYWxsRG9jc0RhdGEgPSB1c2VEb2NzXzEudXNlQWxsRG9jc0RhdGEoKTtcbiAgICBjb25zdCBbc3RhdGVdID0gRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCgpO1xuICAgIGZ1bmN0aW9uIGdldFBsdWdpbklkUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBkb2NzRGF0YSA9IGFsbERvY3NEYXRhW3BsdWdpbklkXTtcbiAgICAgICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgICAgICByZXR1cm4gcHJlZmVycmVkVmVyc2lvbk5hbWVcbiAgICAgICAgICAgID8gZG9jc0RhdGEudmVyc2lvbnMuZmluZCgodmVyc2lvbikgPT4gdmVyc2lvbi5uYW1lID09PSBwcmVmZXJyZWRWZXJzaW9uTmFtZSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGx1Z2luSWRzID0gT2JqZWN0LmtleXMoYWxsRG9jc0RhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICByZXN1bHRbcGx1Z2luSWRdID0gZ2V0UGx1Z2luSWRQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQgPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0b3JhZ2VLZXkgPSAocGx1Z2luSWQpID0+IGBkb2NzLXByZWZlcnJlZC12ZXJzaW9uLSR7cGx1Z2luSWR9YDtcbmNvbnN0IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZSA9IHtcbiAgICBzYXZlOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlLCB2ZXJzaW9uTmFtZSkgPT4ge1xuICAgICAgICBpZiAocGVyc2lzdGVuY2UgPT09ICdub25lJykge1xuICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkocGx1Z2luSWQpLCB2ZXJzaW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlYWQ6IChwbHVnaW5JZCwgcGVyc2lzdGVuY2UpID0+IHtcbiAgICAgICAgaWYgKHBlcnNpc3RlbmNlID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KHBsdWdpbklkKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlKSA9PiB7XG4gICAgICAgIGlmIChwZXJzaXN0ZW5jZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleShwbHVnaW5JZCkpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuZXhwb3J0IHtcbiAgLy8gY29uc3RhbnRzIHdlcmUgb25seSBhdmFpbGFibGUgb24gbm9kZVxuICAvLyB0aGlzIG1ha2VzIHNvbWUgdXNlZnVsIGNvbnN0YW50cyBhdmFpbGFibGUgdG8gZnJvbnRlbmQvdGhlbWVzIHRvb1xuICAvLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSAnQGRvY3VzYXVydXMvY29uc3RhbnRzJ1xuICBERUZBVUxUX1BMVUdJTl9JRCxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbiAqL1xuLy8gTm90IGR1cGxpY2F0aW5nIHRoZSBjb25zdGFudHMgc2VlbXMgdG8gcHJvZHVjZVxuLy8gd2VpcmQgVFMgY29tcGlsYXRpb24gc2lkZS1lZmZlY3RzXG5leHBvcnQgY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ0Bkb2N1c2F1cnVzL0hlYWQnO1xuaW1wb3J0IHVzZUJhc2VVcmwgZnJvbSAnQGRvY3VzYXVydXMvdXNlQmFzZVVybCc7XG5pbXBvcnQge3VzZVRpdGxlRm9ybWF0dGVyfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VvKHt0aXRsZSwgZGVzY3JpcHRpb24sIGtleXdvcmRzLCBpbWFnZX0pIHtcbiAgY29uc3QgbWV0YVRpdGxlID0gdXNlVGl0bGVGb3JtYXR0ZXIodGl0bGUpO1xuICBjb25zdCBtZXRhSW1hZ2VVcmwgPSB1c2VCYXNlVXJsKGltYWdlLCB7XG4gICAgYWJzb2x1dGU6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge3RpdGxlICYmIDx0aXRsZT57bWV0YVRpdGxlfTwvdGl0bGU+fVxuICAgICAge3RpdGxlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhVGl0bGV9IC8+fVxuXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+fVxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz59XG5cbiAgICAgIHtrZXl3b3JkcyAmJiAoXG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PXtBcnJheS5pc0FycmF5KGtleXdvcmRzKSA/IGtleXdvcmRzLmpvaW4oJywnKSA6IGtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2ltYWdlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2VVcmx9IC8+fVxuICAgICAge2ltYWdlICYmIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17bWV0YUltYWdlVXJsfSAvPn1cbiAgICAgIHtpbWFnZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPn1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwidGhlbWVkSW1hZ2VcIjogXCJ0aGVtZWRJbWFnZV8xVnVXXCIsXG5cdFwidGhlbWVkSW1hZ2UtLWxpZ2h0XCI6IFwidGhlbWVkSW1hZ2UtLWxpZ2h0XzNVcVFcIixcblx0XCJ0aGVtZWRJbWFnZS0tZGFya1wiOiBcInRoZW1lZEltYWdlLS1kYXJrX2h6Nm1cIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQgdXNlVGhlbWVDb250ZXh0IGZyb20gJ0B0aGVtZS9ob29rcy91c2VUaGVtZUNvbnRleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxuY29uc3QgVGhlbWVkSW1hZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2lzQ2xpZW50fSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IHtpc0RhcmtUaGVtZX0gPSB1c2VUaGVtZUNvbnRleHQoKTtcbiAgY29uc3Qge3NvdXJjZXMsIGNsYXNzTmFtZSwgYWx0ID0gJycsIC4uLnByb3BzUmVzdH0gPSBwcm9wcztcbiAgY29uc3QgcmVuZGVyZWRTb3VyY2VOYW1lcyA9IGlzQ2xpZW50XG4gICAgPyBpc0RhcmtUaGVtZVxuICAgICAgPyBbJ2RhcmsnXVxuICAgICAgOiBbJ2xpZ2h0J10gLy8gV2UgbmVlZCB0byByZW5kZXIgYm90aCBpbWFnZXMgb24gdGhlIHNlcnZlciB0byBhdm9pZCBmbGFzaFxuICAgIDogLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL3B1bGwvMzczMFxuICAgICAgWydsaWdodCcsICdkYXJrJ107XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJlZFNvdXJjZU5hbWVzLm1hcCgoc291cmNlTmFtZSkgPT4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAga2V5PXtzb3VyY2VOYW1lfVxuICAgICAgICAgIHNyYz17c291cmNlc1tzb3VyY2VOYW1lXX1cbiAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICBzdHlsZXMudGhlbWVkSW1hZ2UsXG4gICAgICAgICAgICBzdHlsZXNbYHRoZW1lZEltYWdlLS0ke3NvdXJjZU5hbWV9YF0sXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Li4ucHJvcHNSZXN0fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZWRJbWFnZTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ0Bkb2N1c2F1cnVzL0V4ZWN1dGlvbkVudmlyb25tZW50JztcblxuY29uc3QgZ2V0U2Nyb2xsUG9zaXRpb24gPSAoKSA9PiAoe1xuICBzY3JvbGxYOiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwLFxuICBzY3JvbGxZOiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwLFxufSk7XG5cbmNvbnN0IHVzZVNjcm9sbFBvc2l0aW9uID0gKGVmZmVjdCwgZGVwcyA9IFtdKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoZ2V0U2Nyb2xsUG9zaXRpb24oKSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24oY3VycmVudFNjcm9sbFBvc2l0aW9uKTtcblxuICAgIGlmIChlZmZlY3QpIHtcbiAgICAgIGVmZmVjdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIG9wdHMpO1xuICB9LCBkZXBzKTtcbiAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU2Nyb2xsUG9zaXRpb247XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VMb2NrQm9keVNjcm9sbChsb2NrID0gdHJ1ZSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBsb2NrID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgfTtcbiAgfSwgW2xvY2tdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9ja0JvZHlTY3JvbGw7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICdAZG9jdXNhdXJ1cy9FeGVjdXRpb25FbnZpcm9ubWVudCc7XG5jb25zdCBkZXNrdG9wVGhyZXNob2xkV2lkdGggPSA5OTY7XG5jb25zdCB3aW5kb3dTaXplcyA9IHtcbiAgZGVza3RvcDogJ2Rlc2t0b3AnLFxuICBtb2JpbGU6ICdtb2JpbGUnLFxufTtcblxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcbiAgY29uc3QgaXNDbGllbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET007XG5cbiAgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICBpZiAoIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRlc2t0b3BUaHJlc2hvbGRXaWR0aFxuICAgICAgPyB3aW5kb3dTaXplcy5kZXNrdG9wXG4gICAgICA6IHdpbmRvd1NpemVzLm1vYmlsZTtcbiAgfVxuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKGdldFNpemUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuICByZXR1cm4gd2luZG93U2l6ZTtcbn1cblxuZXhwb3J0IHt3aW5kb3dTaXplc307XG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0Bkb2N1c2F1cnVzL0xpbmsnO1xuaW1wb3J0IFRoZW1lZEltYWdlIGZyb20gJ0B0aGVtZS9UaGVtZWRJbWFnZSc7XG5pbXBvcnQgdXNlQmFzZVVybCBmcm9tICdAZG9jdXNhdXJ1cy91c2VCYXNlVXJsJztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuXG5jb25zdCBMb2dvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpc0NsaWVudH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCB7XG4gICAgbmF2YmFyOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGxvZ28gPSB7XG4gICAgICAgIHNyYzogJycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSB1c2VUaGVtZUNvbmZpZygpO1xuICBjb25zdCB7aW1hZ2VDbGFzc05hbWUsIHRpdGxlQ2xhc3NOYW1lLCAuLi5wcm9wc1Jlc3R9ID0gcHJvcHM7XG4gIGNvbnN0IGxvZ29MaW5rID0gdXNlQmFzZVVybChsb2dvLmhyZWYgfHwgJy8nKTtcbiAgY29uc3Qgc291cmNlcyA9IHtcbiAgICBsaWdodDogdXNlQmFzZVVybChsb2dvLnNyYyksXG4gICAgZGFyazogdXNlQmFzZVVybChsb2dvLnNyY0RhcmsgfHwgbG9nby5zcmMpLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17bG9nb0xpbmt9XG4gICAgICB7Li4ucHJvcHNSZXN0fVxuICAgICAgey4uLihsb2dvLnRhcmdldCAmJiB7XG4gICAgICAgIHRhcmdldDogbG9nby50YXJnZXQsXG4gICAgICB9KX0+XG4gICAgICB7bG9nby5zcmMgJiYgKFxuICAgICAgICA8VGhlbWVkSW1hZ2VcbiAgICAgICAgICBrZXk9e2lzQ2xpZW50fVxuICAgICAgICAgIGNsYXNzTmFtZT17aW1hZ2VDbGFzc05hbWV9XG4gICAgICAgICAgc291cmNlcz17c291cmNlc31cbiAgICAgICAgICBhbHQ9e2xvZ28uYWx0IHx8IHRpdGxlIHx8ICdMb2dvJ31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7dGl0bGUgIT0gbnVsbCAmJiA8c3Ryb25nIGNsYXNzTmFtZT17dGl0bGVDbGFzc05hbWV9Pnt0aXRsZX08L3N0cm9uZz59XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25NZW51ID0gKHt3aWR0aCA9IDMwLCBoZWlnaHQgPSAzMCwgY2xhc3NOYW1lLCAuLi5yZXN0UHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICB7Li4ucmVzdFByb3BzfT5cbiAgICAgIDx0aXRsZT5NZW51PC90aXRsZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgIGQ9XCJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lbnU7XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwic2tpcFRvQ29udGVudFwiOiBcInNraXBUb0NvbnRlbnRfMW9VUFwiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcbmltcG9ydCB7dXNlTG9jYXRpb259IGZyb20gJ0Bkb2N1c2F1cnVzL3JvdXRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBwcm9ncmFtbWF0aWNGb2N1cyhlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIGVsLmZvY3VzKCk7XG4gIGVsLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbn1cblxuZnVuY3Rpb24gU2tpcFRvQ29udGVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlU2tpcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbjpmaXJzdC1vZi10eXBlJykgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKTtcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICBwcm9ncmFtbWF0aWNGb2N1cyh0YXJnZXRFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHByb2dyYW1tYXRpY0ZvY3VzKGNvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbi5wYXRobmFtZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2tpcFRvQ29udGVudH0gb25DbGljaz17aGFuZGxlU2tpcH0+XG4gICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICBpZD1cInRoZW1lLmNvbW1vbi5za2lwVG9NYWluQ29udGVudFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgc2tpcCB0byBjb250ZW50IGxhYmVsIHVzZWQgZm9yIGFjY2Vzc2liaWxpdHksIGFsbG93aW5nIHRvIHJhcGlkbHkgbmF2aWdhdGUgdG8gbWFpbiBjb250ZW50IHdpdGgga2V5Ym9hcmQgdGFiL2VudGVyIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICBTa2lwIHRvIG1haW4gY29udGVudFxuICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpcFRvQ29udGVudDtcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJhbm5vdW5jZW1lbnRCYXJcIjogXCJhbm5vdW5jZW1lbnRCYXJfM1dzV1wiLFxuXHRcImFubm91bmNlbWVudEJhckNsb3NlXCI6IFwiYW5ub3VuY2VtZW50QmFyQ2xvc2VfMzhueFwiLFxuXHRcImFubm91bmNlbWVudEJhckNvbnRlbnRcIjogXCJhbm5vdW5jZW1lbnRCYXJDb250ZW50XzNFVUNcIixcblx0XCJhbm5vdW5jZW1lbnRCYXJDbG9zZWFibGVcIjogXCJhbm5vdW5jZW1lbnRCYXJDbG9zZWFibGVfM215UlwiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHt1c2VUaGVtZUNvbmZpZ30gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCB1c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0IGZyb20gJ0B0aGVtZS9ob29rcy91c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0JztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQW5ub3VuY2VtZW50QmFyKCkge1xuICBjb25zdCB7XG4gICAgaXNBbm5vdW5jZW1lbnRCYXJDbG9zZWQsXG4gICAgY2xvc2VBbm5vdW5jZW1lbnRCYXIsXG4gIH0gPSB1c2VVc2VyUHJlZmVyZW5jZXNDb250ZXh0KCk7XG4gIGNvbnN0IHthbm5vdW5jZW1lbnRCYXJ9ID0gdXNlVGhlbWVDb25maWcoKTtcblxuICBpZiAoIWFubm91bmNlbWVudEJhcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qge2NvbnRlbnQsIGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yLCBpc0Nsb3NlYWJsZX0gPSBhbm5vdW5jZW1lbnRCYXI7XG5cbiAgaWYgKCFjb250ZW50IHx8IChpc0Nsb3NlYWJsZSAmJiBpc0Fubm91bmNlbWVudEJhckNsb3NlZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5ub3VuY2VtZW50QmFyfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBjb2xvcjogdGV4dENvbG9yLFxuICAgICAgfX1cbiAgICAgIHJvbGU9XCJiYW5uZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5hbm5vdW5jZW1lbnRCYXJDb250ZW50LCB7XG4gICAgICAgICAgW3N0eWxlcy5hbm5vdW5jZW1lbnRCYXJDbG9zZWFibGVdOiBpc0Nsb3NlYWJsZSxcbiAgICAgICAgfSl9IC8vIERldmVsb3BlciBwcm92aWRlZCB0aGUgSFRNTCwgc28gYXNzdW1lIGl0J3Mgc2FmZS5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogY29udGVudCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7aXNDbG9zZWFibGUgPyAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbm5vdW5jZW1lbnRCYXJDbG9zZX1cbiAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFubm91bmNlbWVudEJhcn1cbiAgICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoe1xuICAgICAgICAgICAgaWQ6ICd0aGVtZS5Bbm5vdW5jZW1lbnRCYXIuY2xvc2VCdXR0b25BcmlhTGFiZWwnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Nsb3NlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIEFSSUEgbGFiZWwgZm9yIGNsb3NlIGJ1dHRvbiBvZiBhbm5vdW5jZW1lbnQgYmFyJyxcbiAgICAgICAgICB9KX0+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFubm91bmNlbWVudEJhcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+IG51bGw7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vLyBCeSBkZWZhdWx0LCB0aGUgY2xhc3NpYyB0aGVtZSBkb2VzIG5vdCBwcm92aWRlIGFueSBTZWFyY2hCYXIgaW1wbGVtZW50YXRpb25cbi8vIElmIHlvdSBzd2l6emxlZCB0aGlzIGZpbGUsIGl0IGlzIHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvblxuLy8gVGlwOiBzd2l6emxlIHRoZSBTZWFyY2hCYXIgZnJvbSB0aGUgQWxnb2xpYSB0aGVtZSBmb3IgaW5zcGlyYXRpb246XG4vLyBucG0gcnVuIHN3aXp6bGUgQGRvY3VzYXVydXMvdGhlbWUtc2VhcmNoLWFsZ29saWEgU2VhcmNoQmFyXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJ0Bkb2N1c2F1cnVzL05vb3AnO1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcInRvZ2dsZVwiOiBcInRvZ2dsZV83MWJUXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdyZWFjdC10b2dnbGUnO1xuaW1wb3J0IHt1c2VUaGVtZUNvbmZpZ30gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IERhcmsgPSAoe2ljb24sIHN0eWxlfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnRvZ2dsZSwgc3R5bGVzLmRhcmspfSBzdHlsZT17c3R5bGV9PlxuICAgIHtpY29ufVxuICA8L3NwYW4+XG4pO1xuXG5jb25zdCBMaWdodCA9ICh7aWNvbiwgc3R5bGV9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudG9nZ2xlLCBzdHlsZXMubGlnaHQpfSBzdHlsZT17c3R5bGV9PlxuICAgIHtpY29ufVxuICA8L3NwYW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNvbG9yTW9kZToge1xuICAgICAgc3dpdGNoQ29uZmlnOiB7ZGFya0ljb24sIGRhcmtJY29uU3R5bGUsIGxpZ2h0SWNvbiwgbGlnaHRJY29uU3R5bGV9LFxuICAgIH0sXG4gIH0gPSB1c2VUaGVtZUNvbmZpZygpO1xuICBjb25zdCB7aXNDbGllbnR9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlXG4gICAgICBkaXNhYmxlZD17IWlzQ2xpZW50fVxuICAgICAgaWNvbnM9e3tcbiAgICAgICAgY2hlY2tlZDogPERhcmsgaWNvbj17ZGFya0ljb259IHN0eWxlPXtkYXJrSWNvblN0eWxlfSAvPixcbiAgICAgICAgdW5jaGVja2VkOiA8TGlnaHQgaWNvbj17bGlnaHRJY29ufSBzdHlsZT17bGlnaHRJY29uU3R5bGV9IC8+LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUxvY2F0aW9ufSBmcm9tICdAZG9jdXNhdXJ1cy9yb3V0ZXInO1xuaW1wb3J0IHVzZVNjcm9sbFBvc2l0aW9uIGZyb20gJ0B0aGVtZS9ob29rcy91c2VTY3JvbGxQb3NpdGlvbic7XG5cbmNvbnN0IHVzZUhpZGVhYmxlTmF2YmFyID0gKGhpZGVPblNjcm9sbCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IFtpc05hdmJhclZpc2libGUsIHNldElzTmF2YmFyVmlzaWJsZV0gPSB1c2VTdGF0ZShoaWRlT25TY3JvbGwpO1xuICBjb25zdCBpc0ZvY3VzZWRBbmNob3IgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBbbGFzdFNjcm9sbFRvcCwgc2V0TGFzdFNjcm9sbFRvcF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25hdmJhckhlaWdodCwgc2V0TmF2YmFySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBuYXZiYXJSZWYgPSB1c2VDYWxsYmFjaygobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBzZXROYXZiYXJIZWlnaHQobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgIH1cbiAgfSwgW10pO1xuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoe3Njcm9sbFk6IHNjcm9sbFRvcH0pID0+IHtcbiAgICAgIGlmICghaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA8IG5hdmJhckhlaWdodCkge1xuICAgICAgICBzZXRJc05hdmJhclZpc2libGUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRm9jdXNlZEFuY2hvci5jdXJyZW50KSB7XG4gICAgICAgIGlzRm9jdXNlZEFuY2hvci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHNldElzTmF2YmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHNldExhc3RTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFzdFNjcm9sbFRvcCAmJiBzY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgc2V0SXNOYXZiYXJWaXNpYmxlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBuYXZiYXJIZWlnaHQ7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGlmIChsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbFRvcCA+PSBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgIHNldElzTmF2YmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCA8IGRvY3VtZW50SGVpZ2h0KSB7XG4gICAgICAgIHNldElzTmF2YmFyVmlzaWJsZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgc2V0TGFzdFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sXG4gICAgW2xhc3RTY3JvbGxUb3AsIG5hdmJhckhlaWdodCwgaXNGb2N1c2VkQW5jaG9yXSxcbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhpZGVPblNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbGFzdFNjcm9sbFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzTmF2YmFyVmlzaWJsZSh0cnVlKTtcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoaWRlT25TY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpc0ZvY3VzZWRBbmNob3IuY3VycmVudCA9IHRydWU7XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG4gIHJldHVybiB7XG4gICAgbmF2YmFyUmVmLFxuICAgIGlzTmF2YmFyVmlzaWJsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhpZGVhYmxlTmF2YmFyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkxhbmd1YWdlID0gKHt3aWR0aCA9IDIwLCBoZWlnaHQgPSAyMCwgLi4ucHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTE5Ljc1MyAxMC45MDljLS42MjQtMS43MDctMi4zNjYtMi43MjYtNC42NjEtMi43MjYtLjA5IDAtLjE3Ni4wMDItLjI2Mi4wMDZsLS4wMTYtMi4wNjMgMy41MjUtLjYwN2MuMTE1LS4wMTkuMTMzLS4xMTkuMTA5LS4yMzEtLjAyMy0uMTExLS4xNjctLjg4My0uMTg4LS45NzYtLjAyNy0uMTMxLS4xMDItLjEyNy0uMjA3LS4xMDktLjEwNC4wMTgtMy4yNS40NjEtMy4yNS40NjFsLS4wMTMtMi4wNzhjLS4wMDEtLjEyNS0uMDY5LS4xNTgtLjE5NC0uMTU2bC0xLjAyNS4wMTZjLS4xMDUuMDAyLS4xNjQuMDQ5LS4xNjIuMTQ4bC4wMzMgMi4zMDdzLTMuMDYxLjUyNy0zLjE0NC41NDNjLS4wODQuMDE0LS4xNy4wNTMtLjE1MS4xNDMuMDE5LjA5LjE5IDEuMDk0LjIwOCAxLjE3Mi4wMTguMDguMDcyLjEyOS4xODguMTA3bDIuOTI0LS41MDQuMDM1IDIuMDE4Yy0xLjA3Ny4yODEtMS44MDEuODI0LTIuMjU2IDEuMzAzLS43NjguODA3LTEuMjA3IDEuODg3LTEuMjA3IDIuOTYzIDAgMS41ODYuOTcxIDIuNTI5IDIuMzI4IDIuNjk1IDMuMTYyLjM4NyA1LjExOS0zLjA2IDUuNzY5LTQuNzE1IDEuMDk3IDEuNTA2LjI1NiA0LjM1NC0yLjA5NCA1Ljk4LS4wNDMuMDI5LS4wOTguMTI5LS4wMzMuMjA3bC42MTkuNzU2Yy4wOC4wOTYuMjA2LjA1OS4yNTYuMDIzIDIuNTEtMS43MyAzLjY2MS00LjUxNSAyLjg2OS02LjY4M3ptLTcuMzg2IDMuMTg4Yy0uOTY2LS4xMjEtLjk0NC0uOTE0LS45NDQtMS40NTMgMC0uNzczLjMyNy0xLjU4Ljg3Ni0yLjE1NmEzLjIxIDMuMjEgMCAwMTEuMjI5LS43OTlsLjA4MiA0LjI3N2EyLjc3MyAyLjc3MyAwIDAxLTEuMjQzLjEzMXptMi40MjctLjU1M2wuMDQ2LTQuMTA5Yy4wODQtLjAwNC4xNjYtLjAxLjI1Mi0uMDEuNzczIDAgMS40OTQuMTQ1IDEuODg1LjM2MS4zOTEuMjE3LTEuMDIzIDIuNzEzLTIuMTgzIDMuNzU4em0tOC45NS03LjY2OGEuMTk2LjE5NiAwIDAwLS4xOTYtLjE0NWgtMS45NWEuMTk0LjE5NCAwIDAwLS4xOTQuMTQ0TC4wMDggMTYuOTE2Yy0uMDE3LjA1MS0uMDExLjA3Ni4wNjIuMDc2aDEuNzMzYy4wNzUgMCAuMDk5LS4wMjMuMTE0LS4wNzJsMS4wMDgtMy4zMThoMy40OTZsMS4wMDggMy4zMThjLjAxNi4wNDkuMDM5LjA3Mi4xMTMuMDcyaDEuNzM0Yy4wNzIgMCAuMDc4LS4wMjUuMDYyLS4wNzYtLjAxNC0uMDUtMy4wODMtOS43NDEtMy40OTQtMTEuMDR6bS0yLjYxOCA2LjMxOGwxLjQ0Ny01LjI1IDEuNDQ3IDUuMjVIMy4yMjZ6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTGFuZ3VhZ2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHROYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL0RlZmF1bHROYXZiYXJJdGVtJztcbmltcG9ydCBJY29uTGFuZ3VhZ2UgZnJvbSAnQHRoZW1lL0ljb25MYW5ndWFnZSc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHt1c2VBbHRlcm5hdGVQYWdlVXRpbHN9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhbGVEcm9wZG93bk5hdmJhckl0ZW0oe1xuICBtb2JpbGUsXG4gIGRyb3Bkb3duSXRlbXNCZWZvcmUsXG4gIGRyb3Bkb3duSXRlbXNBZnRlcixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3Qge1xuICAgIGkxOG46IHtjdXJyZW50TG9jYWxlLCBsb2NhbGVzLCBsb2NhbGVDb25maWdzfSxcbiAgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IGFsdGVybmF0ZVBhZ2VVdGlscyA9IHVzZUFsdGVybmF0ZVBhZ2VVdGlscygpO1xuXG4gIGZ1bmN0aW9uIGdldExvY2FsZUxhYmVsKGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGVDb25maWdzW2xvY2FsZV0ubGFiZWw7XG4gIH1cblxuICBjb25zdCBsb2NhbGVJdGVtcyA9IGxvY2FsZXMubWFwKChsb2NhbGUpID0+IHtcbiAgICBjb25zdCB0byA9IGBwYXRobmFtZTovLyR7YWx0ZXJuYXRlUGFnZVV0aWxzLmNyZWF0ZVVybCh7XG4gICAgICBsb2NhbGUsXG4gICAgICBmdWxseVF1YWxpZmllZDogZmFsc2UsXG4gICAgfSl9YDtcbiAgICByZXR1cm4ge1xuICAgICAgaXNOYXZMaW5rOiB0cnVlLFxuICAgICAgbGFiZWw6IGdldExvY2FsZUxhYmVsKGxvY2FsZSksXG4gICAgICB0byxcbiAgICAgIHRhcmdldDogJ19zZWxmJyxcbiAgICAgIGF1dG9BZGRCYXNlVXJsOiBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogbG9jYWxlID09PSBjdXJyZW50TG9jYWxlID8gJ2Ryb3Bkb3duX19saW5rLS1hY3RpdmUnIDogJycsXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGl0ZW1zID0gWy4uLmRyb3Bkb3duSXRlbXNCZWZvcmUsIC4uLmxvY2FsZUl0ZW1zLCAuLi5kcm9wZG93bkl0ZW1zQWZ0ZXJdOyAvLyBNb2JpbGUgaXMgaGFuZGxlZCBhIGJpdCBkaWZmZXJlbnRseVxuXG4gIGNvbnN0IGRyb3Bkb3duTGFiZWwgPSBtb2JpbGUgPyAnTGFuZ3VhZ2VzJyA6IGdldExvY2FsZUxhYmVsKGN1cnJlbnRMb2NhbGUpO1xuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TmF2YmFySXRlbVxuICAgICAgey4uLnByb3BzfVxuICAgICAgaHJlZj1cIiNcIlxuICAgICAgbW9iaWxlPXttb2JpbGV9XG4gICAgICBsYWJlbD17XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxJY29uTGFuZ3VhZ2VcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0ZXh0LWJvdHRvbScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPntkcm9wZG93bkxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgIC8+XG4gICk7XG59XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwic2VhcmNoV3JhcHBlclwiOiBcInNlYXJjaFdyYXBwZXJfM3JtSFwiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQHRoZW1lL1NlYXJjaEJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoTmF2YmFySXRlbSh7bW9iaWxlfSkge1xuICBpZiAobW9iaWxlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoV3JhcHBlcn0+XG4gICAgICA8U2VhcmNoQmFyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHROYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL0RlZmF1bHROYXZiYXJJdGVtJztcbmltcG9ydCBMb2NhbGVEcm9wZG93bk5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0vTG9jYWxlRHJvcGRvd25OYXZiYXJJdGVtJztcbmltcG9ydCBTZWFyY2hOYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL1NlYXJjaE5hdmJhckl0ZW0nO1xuY29uc3QgTmF2YmFySXRlbUNvbXBvbmVudHMgPSB7XG4gIGRlZmF1bHQ6ICgpID0+IERlZmF1bHROYXZiYXJJdGVtLFxuICBsb2NhbGVEcm9wZG93bjogKCkgPT4gTG9jYWxlRHJvcGRvd25OYXZiYXJJdGVtLFxuICBzZWFyY2g6ICgpID0+IFNlYXJjaE5hdmJhckl0ZW0sXG4gIC8vIE5lZWQgdG8gbGF6eSBsb2FkIHRoZXNlIGl0ZW1zIGFzIHdlIGRvbid0IGtub3cgZm9yIHN1cmUgdGhlIGRvY3MgcGx1Z2luIGlzIGxvYWRlZFxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzNjBcbiAgZG9jc1ZlcnNpb246ICgpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICByZXF1aXJlKCdAdGhlbWUvTmF2YmFySXRlbS9Eb2NzVmVyc2lvbk5hdmJhckl0ZW0nKS5kZWZhdWx0LFxuICBkb2NzVmVyc2lvbkRyb3Bkb3duOiAoKSA9PlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG4gICAgcmVxdWlyZSgnQHRoZW1lL05hdmJhckl0ZW0vRG9jc1ZlcnNpb25Ecm9wZG93bk5hdmJhckl0ZW0nKS5kZWZhdWx0LFxuICBkb2M6ICgpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgICByZXF1aXJlKCdAdGhlbWUvTmF2YmFySXRlbS9Eb2NOYXZiYXJJdGVtJykuZGVmYXVsdCxcbn07XG5cbmNvbnN0IGdldE5hdmJhckl0ZW1Db21wb25lbnQgPSAodHlwZSA9ICdkZWZhdWx0JykgPT4ge1xuICBjb25zdCBuYXZiYXJJdGVtQ29tcG9uZW50ID0gTmF2YmFySXRlbUNvbXBvbmVudHNbdHlwZV07XG5cbiAgaWYgKCFuYXZiYXJJdGVtQ29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBOYXZiYXJJdGVtIGNvbXBvbmVudCBmb3VuZCBmb3IgdHlwZT0ke3R5cGV9LmApO1xuICB9XG5cbiAgcmV0dXJuIG5hdmJhckl0ZW1Db21wb25lbnQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhckl0ZW0oe3R5cGUsIC4uLnByb3BzfSkge1xuICBjb25zdCBOYXZiYXJJdGVtQ29tcG9uZW50ID0gZ2V0TmF2YmFySXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgcmV0dXJuIDxOYXZiYXJJdGVtQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwiZGlzcGxheU9ubHlJbkxhcmdlVmlld3BvcnRcIjogXCJkaXNwbGF5T25seUluTGFyZ2VWaWV3cG9ydF9HcloyXCIsXG5cdFwibmF2YmFySGlkZWFibGVcIjogXCJuYXZiYXJIaWRlYWJsZV8ycWNyXCIsXG5cdFwibmF2YmFySGlkZGVuXCI6IFwibmF2YmFySGlkZGVuXzN5ZXlcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQHRoZW1lL1NlYXJjaEJhcic7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJ0B0aGVtZS9Ub2dnbGUnO1xuaW1wb3J0IHVzZVRoZW1lQ29udGV4dCBmcm9tICdAdGhlbWUvaG9va3MvdXNlVGhlbWVDb250ZXh0JztcbmltcG9ydCB7dXNlVGhlbWVDb25maWd9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQgdXNlSGlkZWFibGVOYXZiYXIgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZUhpZGVhYmxlTmF2YmFyJztcbmltcG9ydCB1c2VMb2NrQm9keVNjcm9sbCBmcm9tICdAdGhlbWUvaG9va3MvdXNlTG9ja0JvZHlTY3JvbGwnO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUsIHt3aW5kb3dTaXplc30gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IE5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0nO1xuaW1wb3J0IExvZ28gZnJvbSAnQHRoZW1lL0xvZ28nO1xuaW1wb3J0IEljb25NZW51IGZyb20gJ0B0aGVtZS9JY29uTWVudSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnOyAvLyByZXRyb2NvbXBhdGlibGUgd2l0aCB2MVxuXG5jb25zdCBEZWZhdWx0TmF2SXRlbVBvc2l0aW9uID0gJ3JpZ2h0JzsgLy8gSWYgc3BsaXQgbGlua3MgYnkgbGVmdC9yaWdodFxuLy8gaWYgcG9zaXRpb24gaXMgdW5zcGVjaWZpZWQsIGZhbGxiYWNrIHRvIHJpZ2h0IChhcyB2MSlcblxuZnVuY3Rpb24gc3BsaXROYXZJdGVtc0J5UG9zaXRpb24oaXRlbXMpIHtcbiAgY29uc3QgbGVmdEl0ZW1zID0gaXRlbXMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiAoaXRlbS5wb3NpdGlvbiA/PyBEZWZhdWx0TmF2SXRlbVBvc2l0aW9uKSA9PT0gJ2xlZnQnLFxuICApO1xuICBjb25zdCByaWdodEl0ZW1zID0gaXRlbXMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiAoaXRlbS5wb3NpdGlvbiA/PyBEZWZhdWx0TmF2SXRlbVBvc2l0aW9uKSA9PT0gJ3JpZ2h0JyxcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0SXRlbXMsXG4gICAgcmlnaHRJdGVtcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7XG4gICAgbmF2YmFyOiB7aXRlbXMsIGhpZGVPblNjcm9sbCwgc3R5bGV9LFxuICAgIGNvbG9yTW9kZToge2Rpc2FibGVTd2l0Y2g6IGRpc2FibGVDb2xvck1vZGVTd2l0Y2h9LFxuICB9ID0gdXNlVGhlbWVDb25maWcoKTtcbiAgY29uc3QgW3NpZGViYXJTaG93biwgc2V0U2lkZWJhclNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge2lzRGFya1RoZW1lLCBzZXRMaWdodFRoZW1lLCBzZXREYXJrVGhlbWV9ID0gdXNlVGhlbWVDb250ZXh0KCk7XG4gIGNvbnN0IHtuYXZiYXJSZWYsIGlzTmF2YmFyVmlzaWJsZX0gPSB1c2VIaWRlYWJsZU5hdmJhcihoaWRlT25TY3JvbGwpO1xuICB1c2VMb2NrQm9keVNjcm9sbChzaWRlYmFyU2hvd24pO1xuICBjb25zdCBzaG93U2lkZWJhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaWRlYmFyU2hvd24odHJ1ZSk7XG4gIH0sIFtzZXRTaWRlYmFyU2hvd25dKTtcbiAgY29uc3QgaGlkZVNpZGViYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2lkZWJhclNob3duKGZhbHNlKTtcbiAgfSwgW3NldFNpZGViYXJTaG93bl0pO1xuICBjb25zdCBvblRvZ2dsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiAoZS50YXJnZXQuY2hlY2tlZCA/IHNldERhcmtUaGVtZSgpIDogc2V0TGlnaHRUaGVtZSgpKSxcbiAgICBbc2V0TGlnaHRUaGVtZSwgc2V0RGFya1RoZW1lXSxcbiAgKTtcbiAgY29uc3Qgd2luZG93U2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93U2l6ZSA9PT0gd2luZG93U2l6ZXMuZGVza3RvcCkge1xuICAgICAgc2V0U2lkZWJhclNob3duKGZhbHNlKTtcbiAgICB9XG4gIH0sIFt3aW5kb3dTaXplXSk7XG4gIGNvbnN0IGhhc1NlYXJjaE5hdmJhckl0ZW0gPSBpdGVtcy5zb21lKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09ICdzZWFyY2gnKTtcbiAgY29uc3Qge2xlZnRJdGVtcywgcmlnaHRJdGVtc30gPSBzcGxpdE5hdkl0ZW1zQnlQb3NpdGlvbihpdGVtcyk7XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgcmVmPXtuYXZiYXJSZWZ9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ25hdmJhcicsICduYXZiYXItLWZpeGVkLXRvcCcsIHtcbiAgICAgICAgJ25hdmJhci0tZGFyayc6IHN0eWxlID09PSAnZGFyaycsXG4gICAgICAgICduYXZiYXItLXByaW1hcnknOiBzdHlsZSA9PT0gJ3ByaW1hcnknLFxuICAgICAgICAnbmF2YmFyLXNpZGViYXItLXNob3cnOiBzaWRlYmFyU2hvd24sXG4gICAgICAgIFtzdHlsZXMubmF2YmFySGlkZWFibGVdOiBoaWRlT25TY3JvbGwsXG4gICAgICAgIFtzdHlsZXMubmF2YmFySGlkZGVuXTogaGlkZU9uU2Nyb2xsICYmICFpc05hdmJhclZpc2libGUsXG4gICAgICB9KX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW1zXCI+XG4gICAgICAgICAge2l0ZW1zICE9IG51bGwgJiYgaXRlbXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRpb24gYmFyIHRvZ2dsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhcl9fdG9nZ2xlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93U2lkZWJhcn1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtzaG93U2lkZWJhcn0+XG4gICAgICAgICAgICAgIDxJY29uTWVudSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyX19icmFuZFwiXG4gICAgICAgICAgICBpbWFnZUNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiXG4gICAgICAgICAgICB0aXRsZUNsYXNzTmFtZT17Y2xzeCgnbmF2YmFyX190aXRsZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2xlZnRJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtIHsuLi5pdGVtfSBrZXk9e2l9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9faXRlbXMgbmF2YmFyX19pdGVtcy0tcmlnaHRcIj5cbiAgICAgICAgICB7cmlnaHRJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtIHsuLi5pdGVtfSBrZXk9e2l9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgeyFkaXNhYmxlQ29sb3JNb2RlU3dpdGNoICYmIChcbiAgICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheU9ubHlJbkxhcmdlVmlld3BvcnR9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEYXJrIG1vZGUgdG9nZ2xlXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrVGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRvZ2dsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IWhhc1NlYXJjaE5hdmJhckl0ZW0gJiYgPFNlYXJjaEJhciAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1zaWRlYmFyX19iYWNrZHJvcFwiXG4gICAgICAgIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc2lkZWJhcl9fYnJhbmRcIj5cbiAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyX19icmFuZFwiXG4gICAgICAgICAgICBpbWFnZUNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiXG4gICAgICAgICAgICB0aXRsZUNsYXNzTmFtZT1cIm5hdmJhcl9fdGl0bGVcIlxuICAgICAgICAgICAgb25DbGljaz17aGlkZVNpZGViYXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWRpc2FibGVDb2xvck1vZGVTd2l0Y2ggJiYgc2lkZWJhclNob3duICYmIChcbiAgICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRhcmsgbW9kZSB0b2dnbGUgaW4gc2lkZWJhclwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2lzRGFya1RoZW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Ub2dnbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zaWRlYmFyX19pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3RcIj5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZiYXJJdGVtXG4gICAgICAgICAgICAgICAgICBtb2JpbGVcbiAgICAgICAgICAgICAgICAgIHsuLi5pdGVtfSAvLyBUT0RPIGZpeCB0eXBpbmdcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcImZvb3RlckxvZ29MaW5rXCI6IFwiZm9vdGVyTG9nb0xpbmtfTXlGY1wiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnQGRvY3VzYXVydXMvTGluayc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuaW1wb3J0IHVzZUJhc2VVcmwgZnJvbSAnQGRvY3VzYXVydXMvdXNlQmFzZVVybCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFRoZW1lZEltYWdlIGZyb20gJ0B0aGVtZS9UaGVtZWRJbWFnZSc7XG5cbmZ1bmN0aW9uIEZvb3Rlckxpbmsoe3RvLCBocmVmLCBsYWJlbCwgcHJlcGVuZEJhc2VVcmxUb0hyZWYsIC4uLnByb3BzfSkge1xuICBjb25zdCB0b1VybCA9IHVzZUJhc2VVcmwodG8pO1xuICBjb25zdCBub3JtYWxpemVkSHJlZiA9IHVzZUJhc2VVcmwoaHJlZiwge1xuICAgIGZvcmNlUHJlcGVuZEJhc2VVcmw6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmstaXRlbVwiXG4gICAgICB7Li4uKGhyZWZcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBocmVmOiBwcmVwZW5kQmFzZVVybFRvSHJlZiA/IG5vcm1hbGl6ZWRIcmVmIDogaHJlZixcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgdG86IHRvVXJsLFxuICAgICAgICAgIH0pfVxuICAgICAgey4uLnByb3BzfT5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmNvbnN0IEZvb3RlckxvZ28gPSAoe3NvdXJjZXMsIGFsdH0pID0+IChcbiAgPFRoZW1lZEltYWdlIGNsYXNzTmFtZT1cImZvb3Rlcl9fbG9nb1wiIGFsdD17YWx0fSBzb3VyY2VzPXtzb3VyY2VzfSAvPlxuKTtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCB7Zm9vdGVyfSA9IHVzZVRoZW1lQ29uZmlnKCk7XG4gIGNvbnN0IHtjb3B5cmlnaHQsIGxpbmtzID0gW10sIGxvZ28gPSB7fX0gPSBmb290ZXIgfHwge307XG4gIGNvbnN0IHNvdXJjZXMgPSB7XG4gICAgbGlnaHQ6IHVzZUJhc2VVcmwobG9nby5zcmMpLFxuICAgIGRhcms6IHVzZUJhc2VVcmwobG9nby5zcmNEYXJrIHx8IGxvZ28uc3JjKSxcbiAgfTtcblxuICBpZiAoIWZvb3Rlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2Zvb3RlcicsIHtcbiAgICAgICAgJ2Zvb3Rlci0tZGFyayc6IGZvb3Rlci5zdHlsZSA9PT0gJ2RhcmsnLFxuICAgICAgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2xpbmtzICYmIGxpbmtzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvb3Rlcl9fbGlua3NcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmtJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wgZm9vdGVyX19jb2xcIj5cbiAgICAgICAgICAgICAgICB7bGlua0l0ZW0udGl0bGUgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX3RpdGxlXCI+e2xpbmtJdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2xpbmtJdGVtLml0ZW1zICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGxpbmtJdGVtLml0ZW1zKSAmJlxuICAgICAgICAgICAgICAgIGxpbmtJdGVtLml0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICB7bGlua0l0ZW0uaXRlbXMubWFwKChpdGVtLCBrZXkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5odG1sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2l0ZW1cIiAvLyBEZXZlbG9wZXIgcHJvdmlkZWQgdGhlIEhUTUwsIHNvIGFzc3VtZSBpdCdzIHNhZmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGl0ZW0uaHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZiB8fCBpdGVtLnRvfSBjbGFzc05hbWU9XCJmb290ZXJfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlckxpbmsgey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7KGxvZ28gfHwgY29weXJpZ2h0KSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2JvdHRvbSB0ZXh0LS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2dvICYmIChsb2dvLnNyYyB8fCBsb2dvLnNyY0RhcmspICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tYm90dG9tLS1zbVwiPlxuICAgICAgICAgICAgICAgIHtsb2dvLmhyZWYgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsb2dvLmhyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxvZ29MaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlckxvZ28gYWx0PXtsb2dvLmFsdH0gc291cmNlcz17c291cmNlc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZvb3RlckxvZ28gYWx0PXtsb2dvLmFsdH0gc291cmNlcz17c291cmNlc30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y29weXJpZ2h0ID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyX19jb3B5cmlnaHRcIiAvLyBEZXZlbG9wZXIgcHJvdmlkZWQgdGhlIEhUTUwsIHNvIGFzc3VtZSBpdCdzIHNhZmUuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGNvcHlyaWdodCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ0Bkb2N1c2F1cnVzL0V4ZWN1dGlvbkVudmlyb25tZW50JztcbmltcG9ydCB7dXNlVGhlbWVDb25maWd9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5jb25zdCB0aGVtZXMgPSB7XG4gIGxpZ2h0OiAnbGlnaHQnLFxuICBkYXJrOiAnZGFyaycsXG59OyAvLyBFbnN1cmUgdG8gYWx3YXlzIHJldHVybiBhIHZhbGlkIHRoZW1lIGV2ZW4gaWYgaW5wdXQgaXMgaW52YWxpZFxuXG5jb25zdCBjb2VyY2VUb1RoZW1lID0gKHRoZW1lKSA9PiB7XG4gIHJldHVybiB0aGVtZSA9PT0gdGhlbWVzLmRhcmsgPyB0aGVtZXMuZGFyayA6IHRoZW1lcy5saWdodDtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxUaGVtZSA9IChkZWZhdWx0TW9kZSkgPT4ge1xuICBpZiAoIUV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICAgIHJldHVybiBjb2VyY2VUb1RoZW1lKGRlZmF1bHRNb2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb2VyY2VUb1RoZW1lKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSk7XG59O1xuXG5jb25zdCBzdG9yZVRoZW1lID0gKG5ld1RoZW1lKSA9PiB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgY29lcmNlVG9UaGVtZShuZXdUaGVtZSkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbmNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3JNb2RlOiB7ZGVmYXVsdE1vZGUsIGRpc2FibGVTd2l0Y2gsIHJlc3BlY3RQcmVmZXJzQ29sb3JTY2hlbWV9LFxuICB9ID0gdXNlVGhlbWVDb25maWcoKTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShnZXRJbml0aWFsVGhlbWUoZGVmYXVsdE1vZGUpKTtcbiAgY29uc3Qgc2V0TGlnaHRUaGVtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUaGVtZSh0aGVtZXMubGlnaHQpO1xuICAgIHN0b3JlVGhlbWUodGhlbWVzLmxpZ2h0KTtcbiAgfSwgW10pO1xuICBjb25zdCBzZXREYXJrVGhlbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VGhlbWUodGhlbWVzLmRhcmspO1xuICAgIHN0b3JlVGhlbWUodGhlbWVzLmRhcmspO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGNvZXJjZVRvVGhlbWUodGhlbWUpKTtcbiAgfSwgW3RoZW1lXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVTd2l0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcblxuICAgICAgaWYgKGxvY2FsU3RvcmFnZVRoZW1lICE9PSBudWxsKSB7XG4gICAgICAgIHNldFRoZW1lKGNvZXJjZVRvVGhlbWUobG9jYWxTdG9yYWdlVGhlbWUpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH0sIFtzZXRUaGVtZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlU3dpdGNoICYmICFyZXNwZWN0UHJlZmVyc0NvbG9yU2NoZW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93XG4gICAgICAubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgICAuYWRkTGlzdGVuZXIoKHttYXRjaGVzfSkgPT4ge1xuICAgICAgICBzZXRUaGVtZShtYXRjaGVzID8gdGhlbWVzLmRhcmsgOiB0aGVtZXMubGlnaHQpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHtcbiAgICBpc0RhcmtUaGVtZTogdGhlbWUgPT09IHRoZW1lcy5kYXJrLFxuICAgIHNldExpZ2h0VGhlbWUsXG4gICAgc2V0RGFya1RoZW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJ0B0aGVtZS9ob29rcy91c2VUaGVtZSc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJ0B0aGVtZS9UaGVtZUNvbnRleHQnO1xuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IHtpc0RhcmtUaGVtZSwgc2V0TGlnaHRUaGVtZSwgc2V0RGFya1RoZW1lfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNEYXJrVGhlbWUsXG4gICAgICAgIHNldExpZ2h0VGhlbWUsXG4gICAgICAgIHNldERhcmtUaGVtZSxcbiAgICAgIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuY29uc3QgVEFCX0NIT0lDRV9QUkVGSVggPSAnZG9jdXNhdXJ1cy50YWIuJztcblxuY29uc3QgdXNlVGFiR3JvdXBDaG9pY2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWJHcm91cENob2ljZXMsIHNldENob2ljZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBzZXRDaG9pY2VTeW5jV2l0aExvY2FsU3RvcmFnZSA9IHVzZUNhbGxiYWNrKChncm91cElkLCBuZXdDaG9pY2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7VEFCX0NIT0lDRV9QUkVGSVh9JHtncm91cElkfWAsIG5ld0Nob2ljZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUNob2ljZXMgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgaWYgKHN0b3JhZ2VLZXkuc3RhcnRzV2l0aChUQUJfQ0hPSUNFX1BSRUZJWCkpIHtcbiAgICAgICAgICBjb25zdCBncm91cElkID0gc3RvcmFnZUtleS5zdWJzdHJpbmcoVEFCX0NIT0lDRV9QUkVGSVgubGVuZ3RoKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VDaG9pY2VzW2dyb3VwSWRdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0Q2hvaWNlcyhsb2NhbFN0b3JhZ2VDaG9pY2VzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHtcbiAgICB0YWJHcm91cENob2ljZXMsXG4gICAgc2V0VGFiR3JvdXBDaG9pY2VzOiAoZ3JvdXBJZCwgbmV3Q2hvaWNlKSA9PiB7XG4gICAgICBzZXRDaG9pY2VzKChvbGRDaG9pY2VzKSA9PiAoey4uLm9sZENob2ljZXMsIFtncm91cElkXTogbmV3Q2hvaWNlfSkpO1xuICAgICAgc2V0Q2hvaWNlU3luY1dpdGhMb2NhbFN0b3JhZ2UoZ3JvdXBJZCwgbmV3Q2hvaWNlKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGFiR3JvdXBDaG9pY2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuY29uc3QgU1RPUkFHRV9ESVNNSVNTX0tFWSA9ICdkb2N1c2F1cnVzLmFubm91bmNlbWVudC5kaXNtaXNzJztcbmNvbnN0IFNUT1JBR0VfSURfS0VZID0gJ2RvY3VzYXVydXMuYW5ub3VuY2VtZW50LmlkJztcblxuY29uc3QgdXNlQW5ub3VuY2VtZW50QmFyID0gKCkgPT4ge1xuICBjb25zdCB7YW5ub3VuY2VtZW50QmFyfSA9IHVzZVRoZW1lQ29uZmlnKCk7XG4gIGNvbnN0IFtpc0Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0RJU01JU1NfS0VZLCAndHJ1ZScpO1xuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYW5ub3VuY2VtZW50QmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2lkfSA9IGFubm91bmNlbWVudEJhcjtcbiAgICBsZXQgdmlld2VkSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0lEX0tFWSk7IC8vIHJldHJvY29tcGF0aWJpbGl0eSBkdWUgdG8gc3BlbGxpbmcgbWlzdGFrZSBvZiBkZWZhdWx0IGlkXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzM4XG5cbiAgICBpZiAodmlld2VkSWQgPT09ICdhbm5vdWNlbWVudC1iYXInKSB7XG4gICAgICB2aWV3ZWRJZCA9ICdhbm5vdW5jZW1lbnQtYmFyJztcbiAgICB9XG5cbiAgICBjb25zdCBpc05ld0Fubm91bmNlbWVudCA9IGlkICE9PSB2aWV3ZWRJZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0lEX0tFWSwgaWQpO1xuXG4gICAgaWYgKGlzTmV3QW5ub3VuY2VtZW50KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0RJU01JU1NfS0VZLCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBpc05ld0Fubm91bmNlbWVudCB8fFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9ESVNNSVNTX0tFWSkgPT09ICdmYWxzZSdcbiAgICApIHtcbiAgICAgIHNldENsb3NlZChmYWxzZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiB7XG4gICAgaXNBbm5vdW5jZW1lbnRCYXJDbG9zZWQ6IGlzQ2xvc2VkLFxuICAgIGNsb3NlQW5ub3VuY2VtZW50QmFyOiBoYW5kbGVDbG9zZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFubm91bmNlbWVudEJhcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVGFiR3JvdXBDaG9pY2UgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVRhYkdyb3VwQ2hvaWNlJztcbmltcG9ydCB1c2VBbm5vdW5jZW1lbnRCYXIgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZUFubm91bmNlbWVudEJhcic7XG5pbXBvcnQgVXNlclByZWZlcmVuY2VzQ29udGV4dCBmcm9tICdAdGhlbWUvVXNlclByZWZlcmVuY2VzQ29udGV4dCc7XG5cbmZ1bmN0aW9uIFVzZXJQcmVmZXJlbmNlc1Byb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IHt0YWJHcm91cENob2ljZXMsIHNldFRhYkdyb3VwQ2hvaWNlc30gPSB1c2VUYWJHcm91cENob2ljZSgpO1xuICBjb25zdCB7aXNBbm5vdW5jZW1lbnRCYXJDbG9zZWQsIGNsb3NlQW5ub3VuY2VtZW50QmFyfSA9IHVzZUFubm91bmNlbWVudEJhcigpO1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJlZmVyZW5jZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0YWJHcm91cENob2ljZXMsXG4gICAgICAgIHNldFRhYkdyb3VwQ2hvaWNlcyxcbiAgICAgICAgaXNBbm5vdW5jZW1lbnRCYXJDbG9zZWQsXG4gICAgICAgIGNsb3NlQW5ub3VuY2VtZW50QmFyLFxuICAgICAgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyUHJlZmVyZW5jZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJlZmVyZW5jZXNQcm92aWRlcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICdAdGhlbWUvVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgVXNlclByZWZlcmVuY2VzUHJvdmlkZXIgZnJvbSAnQHRoZW1lL1VzZXJQcmVmZXJlbmNlc1Byb3ZpZGVyJztcbmltcG9ydCB7RG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJ9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRQcm92aWRlcnMoe2NoaWxkcmVufSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPFVzZXJQcmVmZXJlbmNlc1Byb3ZpZGVyPlxuICAgICAgICA8RG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPC9Vc2VyUHJlZmVyZW5jZXNQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnQGRvY3VzYXVydXMvSGVhZCc7XG4vLyBOb3RlOiB3ZSBkb24ndCBjb3VwbGUgdGhpcyB0byBBbGdvbGlhL0RvY1NlYXJjaCBvbiBwdXJwb3NlXG4vLyBXZSBtYXkgd2FudCB0byBzdXBwb3J0IG90aGVyIHNlYXJjaCBlbmdpbmUgcGx1Z2lucyB0b29cbi8vIFNlYXJjaCBwbHVnaW5zIHNob3VsZCBzd2l6emxlL292ZXJyaWRlIHRoaXMgY29tcCB0byBhZGQgdGhlaXIgYmVoYXZpb3JcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaE1ldGFkYXRhcyh7bG9jYWxlLCB2ZXJzaW9uLCB0YWd9KSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7bG9jYWxlICYmIDxtZXRhIG5hbWU9XCJkb2N1c2F1cnVzX2xvY2FsZVwiIGNvbnRlbnQ9e2Ake2xvY2FsZX1gfSAvPn1cbiAgICAgIHt2ZXJzaW9uICYmIDxtZXRhIG5hbWU9XCJkb2N1c2F1cnVzX3ZlcnNpb25cIiBjb250ZW50PXt2ZXJzaW9ufSAvPn1cbiAgICAgIHt0YWcgJiYgPG1ldGEgbmFtZT1cImRvY3VzYXVydXNfdGFnXCIgY29udGVudD17dGFnfSAvPn1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnQGRvY3VzYXVydXMvSGVhZCc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHVzZUJhc2VVcmwgZnJvbSAnQGRvY3VzYXVydXMvdXNlQmFzZVVybCc7XG5pbXBvcnQgU2VhcmNoTWV0YWRhdGFzIGZyb20gJ0B0aGVtZS9TZWFyY2hNZXRhZGF0YXMnO1xuaW1wb3J0IFNlbyBmcm9tICdAdGhlbWUvU2VvJztcbmltcG9ydCB7XG4gIERFRkFVTFRfU0VBUkNIX1RBRyxcbiAgdXNlQWx0ZXJuYXRlUGFnZVV0aWxzLFxufSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJzsgLy8gVXNlZnVsIGZvciBTRU9cbi8vIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9zZWFyY2gvZG9jcy9hZHZhbmNlZC9jcmF3bGluZy9sb2NhbGl6ZWQtdmVyc2lvbnNcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzMxN1xuXG5mdW5jdGlvbiBBbHRlcm5hdGVMYW5nSGVhZGVycygpIHtcbiAgY29uc3Qge1xuICAgIGkxOG46IHtkZWZhdWx0TG9jYWxlLCBsb2NhbGVzfSxcbiAgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IGFsdGVybmF0ZVBhZ2VVdGlscyA9IHVzZUFsdGVybmF0ZVBhZ2VVdGlscygpOyAvLyBOb3RlOiBpdCBpcyBmaW5lIHRvIHVzZSBib3RoIFwieC1kZWZhdWx0XCIgYW5kIFwiZW5cIiB0byB0YXJnZXQgdGhlIHNhbWUgdXJsXG4gIC8vIFNlZSBodHRwczovL3d3dy5zZWFyY2h2aXUuY29tL2VuL211bHRpcGxlLWhyZWZsYW5nLXRhZ3Mtb25lLXVybC9cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2xvY2FsZXMubWFwKChsb2NhbGUpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICAgIGhyZWY9e2FsdGVybmF0ZVBhZ2VVdGlscy5jcmVhdGVVcmwoe1xuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgZnVsbHlRdWFsaWZpZWQ6IHRydWUsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgaHJlZkxhbmc9e2xvY2FsZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgaHJlZj17YWx0ZXJuYXRlUGFnZVV0aWxzLmNyZWF0ZVVybCh7XG4gICAgICAgICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgICAgIGZ1bGx5UXVhbGlmaWVkOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgICAgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59IC8vIERlZmF1bHQgY2Fub25pY2FsIHVybCBpbmZlcnJlZCBmcm9tIGN1cnJlbnQgcGFnZSBsb2NhdGlvbiBwYXRobmFtZVxuXG5mdW5jdGlvbiB1c2VEZWZhdWx0Q2Fub25pY2FsVXJsKCkge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge3VybDogc2l0ZVVybH0sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCB7cGF0aG5hbWV9ID0gdXNlTG9jYXRpb24oKTtcbiAgcmV0dXJuIHNpdGVVcmwgKyB1c2VCYXNlVXJsKHBhdGhuYW1lKTtcbn1cblxuZnVuY3Rpb24gQ2Fub25pY2FsVXJsSGVhZGVycyh7cGVybWFsaW5rfSkge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge3VybDogc2l0ZVVybH0sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCBkZWZhdWx0Q2Fub25pY2FsVXJsID0gdXNlRGVmYXVsdENhbm9uaWNhbFVybCgpO1xuICBjb25zdCBjYW5vbmljYWxVcmwgPSBwZXJtYWxpbmtcbiAgICA/IGAke3NpdGVVcmx9JHtwZXJtYWxpbmt9YFxuICAgIDogZGVmYXVsdENhbm9uaWNhbFVybDtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y2Fub25pY2FsVXJsfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsVXJsfSAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0SGVhZChwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZyxcbiAgICBpMThuOiB7Y3VycmVudExvY2FsZSwgbG9jYWxlQ29uZmlnc30sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCB7XG4gICAgZmF2aWNvbixcbiAgICB0aGVtZUNvbmZpZzoge2ltYWdlOiBkZWZhdWx0SW1hZ2UsIG1ldGFkYXRhc30sXG4gIH0gPSBzaXRlQ29uZmlnO1xuICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwga2V5d29yZHMsIHNlYXJjaE1ldGFkYXRhc30gPSBwcm9wcztcbiAgY29uc3QgZmF2aWNvblVybCA9IHVzZUJhc2VVcmwoZmF2aWNvbik7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzMxNyNpc3N1ZWNvbW1lbnQtNzU0NjYxODU1XG4gIC8vIGNvbnN0IGh0bWxMYW5nID0gY3VycmVudExvY2FsZS5zcGxpdCgnLScpWzBdO1xuXG4gIGNvbnN0IGh0bWxMYW5nID0gY3VycmVudExvY2FsZTsgLy8gc2hvdWxkIHdlIGFsbG93IHRoZSB1c2VyIHRvIG92ZXJyaWRlIGh0bWxMYW5nIHdpdGggbG9jYWxlQ29uZmlnP1xuXG4gIGNvbnN0IGh0bWxEaXIgPSBsb2NhbGVDb25maWdzW2N1cnJlbnRMb2NhbGVdLmRpcmVjdGlvbjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxodG1sIGxhbmc9e2h0bWxMYW5nfSBkaXI9e2h0bWxEaXJ9IC8+XG4gICAgICAgIHtmYXZpY29uICYmIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtmYXZpY29uVXJsfSAvPn1cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFNlb1xuICAgICAgICB7Li4ue1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGtleXdvcmRzLFxuICAgICAgICAgIGltYWdlOiBpbWFnZSB8fCBkZWZhdWx0SW1hZ2UsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8Q2Fub25pY2FsVXJsSGVhZGVycyAvPlxuXG4gICAgICA8QWx0ZXJuYXRlTGFuZ0hlYWRlcnMgLz5cblxuICAgICAgPFNlYXJjaE1ldGFkYXRhc1xuICAgICAgICB0YWc9e0RFRkFVTFRfU0VBUkNIX1RBR31cbiAgICAgICAgbG9jYWxlPXtjdXJyZW50TG9jYWxlfVxuICAgICAgICB7Li4uc2VhcmNoTWV0YWRhdGFzfVxuICAgICAgLz5cblxuICAgICAgPEhlYWQgLy8gaXQncyBpbXBvcnRhbnQgdG8gaGF2ZSBhbiBhZGRpdGlvbmFsIDxIZWFkPiBlbGVtZW50IGhlcmUsXG4gICAgICAvLyBhcyBpdCBhbGxvd3MgcmVhY3QtaGVsbWV0IHRvIG92ZXJyaWRlIHZhbHVlcyBzZXQgaW4gcHJldmlvdXMgPEhlYWQ+XG4gICAgICAvLyBpZSB3ZSBjYW4gb3ZlcnJpZGUgZGVmYXVsdCBtZXRhZGF0YXMgc3VjaCBhcyBcInR3aXR0ZXI6Y2FyZFwiXG4gICAgICAvLyBJbiBzYW1lIEhlYWQsIHRoZSBzYW1lIG1ldGEgd291bGQgYXBwZWFyIHR3aWNlIGluc3RlYWQgb2Ygb3ZlcnJpZGluZ1xuICAgICAgLy8gU2VlIHJlYWN0LWhlbG1ldCBkb2NcbiAgICAgID5cbiAgICAgICAge21ldGFkYXRhcy5tYXAoKG1ldGFkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgPG1ldGEga2V5PXtgbWV0YWRhdGFfJHtpfWB9IHsuLi5tZXRhZGF0YX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0hlYWQ+XG4gICAgPC8+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnOyAvLyBUaGlzIGhvb2sgZGV0ZWN0IGtleWJvYXJkIGZvY3VzIGluZGljYXRvciB0byBub3Qgc2hvdyBvdXRsaW5lIGZvciBtb3VzZSB1c2Vyc1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9yZW1vdmluZy10aGF0LXVnbHktZm9jdXMtcmluZy1hbmQta2VlcGluZy1pdC10b28tNmM4NzI3ZmVmY2QyXG5cbmZ1bmN0aW9uIHVzZUtleWJvYXJkTmF2aWdhdGlvbigpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlib2FyZEZvY3VzZWRDbGFzc05hbWUgPSAnbmF2aWdhdGlvbi13aXRoLWtleWJvYXJkJztcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU91dGxpbmVTdHlsZXMoZSkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nICYmIGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoa2V5Ym9hcmRGb2N1c2VkQ2xhc3NOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGtleWJvYXJkRm9jdXNlZENsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZU91dGxpbmVTdHlsZXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU91dGxpbmVTdHlsZXMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoa2V5Ym9hcmRGb2N1c2VkQ2xhc3NOYW1lKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVPdXRsaW5lU3R5bGVzKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU91dGxpbmVTdHlsZXMpO1xuICAgIH07XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlS2V5Ym9hcmROYXZpZ2F0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFNraXBUb0NvbnRlbnQgZnJvbSAnQHRoZW1lL1NraXBUb0NvbnRlbnQnO1xuaW1wb3J0IEFubm91bmNlbWVudEJhciBmcm9tICdAdGhlbWUvQW5ub3VuY2VtZW50QmFyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnQHRoZW1lL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0B0aGVtZS9Gb290ZXInO1xuaW1wb3J0IExheW91dFByb3ZpZGVycyBmcm9tICdAdGhlbWUvTGF5b3V0UHJvdmlkZXJzJztcbmltcG9ydCBMYXlvdXRIZWFkIGZyb20gJ0B0aGVtZS9MYXlvdXRIZWFkJztcbmltcG9ydCB1c2VLZXlib2FyZE5hdmlnYXRpb24gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZUtleWJvYXJkTmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICBjb25zdCB7Y2hpbGRyZW4sIG5vRm9vdGVyLCB3cmFwcGVyQ2xhc3NOYW1lfSA9IHByb3BzO1xuICB1c2VLZXlib2FyZE5hdmlnYXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0UHJvdmlkZXJzPlxuICAgICAgPExheW91dEhlYWQgey4uLnByb3BzfSAvPlxuXG4gICAgICA8U2tpcFRvQ29udGVudCAvPlxuXG4gICAgICA8QW5ub3VuY2VtZW50QmFyIC8+XG5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ21haW4td3JhcHBlcicsIHdyYXBwZXJDbGFzc05hbWUpfT57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIHshbm9Gb290ZXIgJiYgPEZvb3RlciAvPn1cbiAgICA8L0xheW91dFByb3ZpZGVycz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jaGVjayA9IHJlcXVpcmUoJy4vY2hlY2snKTtcblxudmFyIF9jaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVjayk7XG5cbnZhciBfeCA9IHJlcXVpcmUoJy4veCcpO1xuXG52YXIgX3gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfeCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRvZ2dsZSA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9nZ2xlLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9nZ2xlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvZ2dsZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVG9nZ2xlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVG9nZ2xlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuaGFuZGxlQ2xpY2sgPSBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVGb2N1cyA9IF90aGlzLmhhbmRsZUZvY3VzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUJsdXIgPSBfdGhpcy5oYW5kbGVCbHVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnByZXZpb3VzbHlDaGVja2VkID0gISEocHJvcHMuY2hlY2tlZCB8fCBwcm9wcy5kZWZhdWx0Q2hlY2tlZCk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiAhIShwcm9wcy5jaGVja2VkIHx8IHByb3BzLmRlZmF1bHRDaGVja2VkKSxcbiAgICAgIGhhc0ZvY3VzOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvZ2dsZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAocHJldlByb3BzLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICAvLyBEaXNhYmxlIGxpbnRpbmcgcnVsZSBoZXJlIHNpbmNlIHRoaXMgdXNhZ2Ugb2Ygc2V0U3RhdGUgaW5zaWRlXG4gICAgICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBpcyBPSzsgc2VlXG4gICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCNjb21wb25lbnRkaWR1cGRhdGVcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiAhIXRoaXMucHJvcHMuY2hlY2tlZCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2hlY2tib3ggPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gY2hlY2tib3ggJiYgIXRoaXMubW92ZWQpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c2x5Q2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNoZWNrYm94LmZvY3VzKCk7XG4gICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgPyB0aGlzLnByb3BzLmNoZWNrZWQgOiBjaGVja2JveC5jaGVja2VkO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogY2hlY2tlZCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydFggPSAoMCwgX3V0aWwucG9pbnRlckNvb3JkKShldmVudCkueDtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHJldHVybjtcbiAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5zdGFydFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gKDAsIF91dGlsLnBvaW50ZXJDb29yZCkoZXZlbnQpLng7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrZWQgJiYgY3VycmVudFggKyAxNSA8IHRoaXMuc3RhcnRYKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHRoaXMuc3RhcnRYID0gY3VycmVudFg7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRYIC0gMTUgPiB0aGlzLnN0YXJ0WCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiB0cnVlIH0pO1xuICAgICAgICAgIHRoaXMuc3RhcnRYID0gY3VycmVudFg7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBjdXJyZW50WCA8IHRoaXMuc3RhcnRYICsgNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRvdWNoRW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5tb3ZlZCkgcmV0dXJuO1xuICAgICAgdmFyIGNoZWNrYm94ID0gdGhpcy5pbnB1dDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0WCkge1xuICAgICAgICB2YXIgZW5kWCA9ICgwLCBfdXRpbC5wb2ludGVyQ29vcmQpKGV2ZW50KS54O1xuICAgICAgICBpZiAodGhpcy5wcmV2aW91c2x5Q2hlY2tlZCA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXJ0WCArIDQgPiBlbmRYKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNseUNoZWNrZWQgIT09IHRoaXMuc3RhdGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c2x5Q2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRYIC0gNCA8IGVuZFgpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c2x5Q2hlY2tlZCAhPT0gdGhpcy5zdGF0ZS5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNseUNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWQ7XG4gICAgICAgICAgICBjaGVja2JveC5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAgIHZhciBvbkZvY3VzID0gdGhpcy5wcm9wcy5vbkZvY3VzO1xuXG5cbiAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRm9jdXM6IHRydWUgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlQmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAgIHZhciBvbkJsdXIgPSB0aGlzLnByb3BzLm9uQmx1cjtcblxuXG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1cihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNGb2N1czogZmFsc2UgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SWNvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEljb24odHlwZSkge1xuICAgICAgdmFyIGljb25zID0gdGhpcy5wcm9wcy5pY29ucztcblxuICAgICAgaWYgKCFpY29ucykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpY29uc1t0eXBlXSA9PT0gdW5kZWZpbmVkID8gVG9nZ2xlLmRlZmF1bHRQcm9wcy5pY29uc1t0eXBlXSA6IGljb25zW3R5cGVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIF9pY29ucyA9IF9wcm9wcy5pY29ucyxcbiAgICAgICAgICBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAnaWNvbnMnXSk7XG5cbiAgICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgncmVhY3QtdG9nZ2xlJywge1xuICAgICAgICAncmVhY3QtdG9nZ2xlLS1jaGVja2VkJzogdGhpcy5zdGF0ZS5jaGVja2VkLFxuICAgICAgICAncmVhY3QtdG9nZ2xlLS1mb2N1cyc6IHRoaXMuc3RhdGUuaGFzRm9jdXMsXG4gICAgICAgICdyZWFjdC10b2dnbGUtLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgfSwgY2xhc3NOYW1lKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICBvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JlYWN0LXRvZ2dsZS10cmFjaycgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyZWFjdC10b2dnbGUtdHJhY2stY2hlY2snIH0sXG4gICAgICAgICAgICB0aGlzLmdldEljb24oJ2NoZWNrZWQnKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncmVhY3QtdG9nZ2xlLXRyYWNrLXgnIH0sXG4gICAgICAgICAgICB0aGlzLmdldEljb24oJ3VuY2hlY2tlZCcpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdyZWFjdC10b2dnbGUtdGh1bWInIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIF90aGlzMi5pbnB1dCA9IF9yZWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlYWN0LXRvZ2dsZS1zY3JlZW5yZWFkZXItb25seScsXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyB9KSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvZ2dsZTtcbn0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGU7XG5cblxuVG9nZ2xlLmRpc3BsYXlOYW1lID0gJ1RvZ2dsZSc7XG5cblRvZ2dsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb25zOiB7XG4gICAgY2hlY2tlZDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NoZWNrMi5kZWZhdWx0LCBudWxsKSxcbiAgICB1bmNoZWNrZWQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF94Mi5kZWZhdWx0LCBudWxsKVxuICB9XG59O1xuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgJ2FyaWEtbGFiZWxsZWRieSc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAnYXJpYS1sYWJlbCc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBpY29uczogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAgIHVuY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG4gIH0pXSlcbn07IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3N2ZycsXG4gICAgeyB3aWR0aDogJzE0JywgaGVpZ2h0OiAnMTEnLCB2aWV3Qm94OiAnMCAwIDE0IDExJyB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTExLjI2NCAwTDUuMjYgNi4wMDQgMi4xMDMgMi44NDcgMCA0Ljk1bDUuMjYgNS4yNiA4LjEwOC04LjEwN0wxMS4yNjQgMCcsIGZpbGw6ICcjZmZmJywgZmlsbFJ1bGU6ICdldmVub2RkJyB9KVxuICApO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3N2ZycsXG4gICAgeyB3aWR0aDogJzEwJywgaGVpZ2h0OiAnMTAnLCB2aWV3Qm94OiAnMCAwIDEwIDEwJyB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTkuOSAyLjEyTDcuNzggMCA0Ljk1IDIuODI4IDIuMTIgMCAwIDIuMTJsMi44MyAyLjgzTDAgNy43NzYgMi4xMjMgOS45IDQuOTUgNy4wNyA3Ljc4IDkuOSA5LjkgNy43NzYgNy4wNzIgNC45NSA5LjkgMi4xMicsIGZpbGw6ICcjZmZmJywgZmlsbFJ1bGU6ICdldmVub2RkJyB9KVxuICApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucG9pbnRlckNvb3JkID0gcG9pbnRlckNvb3JkO1xuLy8gQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBEcmlmdHkgQ28uXG4vLyBodHRwOi8vZHJpZnR5LmNvbS9cbi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9kcmlmdHljby9pb25pYy9ibG9iL21hc3Rlci9zcmMvdXRpbC9kb20udHNcblxuZnVuY3Rpb24gcG9pbnRlckNvb3JkKGV2ZW50KSB7XG4gIC8vIGdldCBjb29yZGluYXRlcyBmb3IgZWl0aGVyIGEgbW91c2UgY2xpY2tcbiAgLy8gb3IgYSB0b3VjaCBkZXBlbmRpbmcgb24gdGhlIGdpdmVuIGV2ZW50XG4gIGlmIChldmVudCkge1xuICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuICAgIGlmIChjaGFuZ2VkVG91Y2hlcyAmJiBjaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdG91Y2ggPSBjaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIHJldHVybiB7IHg6IHRvdWNoLmNsaWVudFgsIHk6IHRvdWNoLmNsaWVudFkgfTtcbiAgICB9XG4gICAgdmFyIHBhZ2VYID0gZXZlbnQucGFnZVg7XG4gICAgaWYgKHBhZ2VYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7IHg6IHBhZ2VYLCB5OiBldmVudC5wYWdlWSB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWZhdWx0TmF2YmFySXRlbSBmcm9tICdAdGhlbWUvTmF2YmFySXRlbS9EZWZhdWx0TmF2YmFySXRlbSc7XG5pbXBvcnQge3VzZUFjdGl2ZVZlcnNpb24sIHVzZUxhdGVzdFZlcnNpb259IGZyb20gJ0B0aGVtZS9ob29rcy91c2VEb2NzJztcbmltcG9ydCB7dXNlRG9jc1ByZWZlcnJlZFZlcnNpb259IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5cbmNvbnN0IGdldFZlcnNpb25NYWluRG9jID0gKHZlcnNpb24pID0+XG4gIHZlcnNpb24uZG9jcy5maW5kKChkb2MpID0+IGRvYy5pZCA9PT0gdmVyc2lvbi5tYWluRG9jSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzVmVyc2lvbk5hdmJhckl0ZW0oe1xuICBsYWJlbDogc3RhdGljTGFiZWwsXG4gIHRvOiBzdGF0aWNUbyxcbiAgZG9jc1BsdWdpbklkLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCBhY3RpdmVWZXJzaW9uID0gdXNlQWN0aXZlVmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCB7cHJlZmVycmVkVmVyc2lvbn0gPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdXNlTGF0ZXN0VmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCB2ZXJzaW9uID0gYWN0aXZlVmVyc2lvbiA/PyBwcmVmZXJyZWRWZXJzaW9uID8/IGxhdGVzdFZlcnNpb247XG4gIGNvbnN0IGxhYmVsID0gc3RhdGljTGFiZWwgPz8gdmVyc2lvbi5sYWJlbDtcbiAgY29uc3QgcGF0aCA9IHN0YXRpY1RvID8/IGdldFZlcnNpb25NYWluRG9jKHZlcnNpb24pLnBhdGg7XG4gIHJldHVybiA8RGVmYXVsdE5hdmJhckl0ZW0gey4uLnByb3BzfSBsYWJlbD17bGFiZWx9IHRvPXtwYXRofSAvPjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVmYXVsdE5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0vRGVmYXVsdE5hdmJhckl0ZW0nO1xuaW1wb3J0IHtcbiAgdXNlVmVyc2lvbnMsXG4gIHVzZUxhdGVzdFZlcnNpb24sXG4gIHVzZUFjdGl2ZURvY0NvbnRleHQsXG59IGZyb20gJ0B0aGVtZS9ob29rcy91c2VEb2NzJztcbmltcG9ydCB7dXNlRG9jc1ByZWZlcnJlZFZlcnNpb259IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5cbmNvbnN0IGdldFZlcnNpb25NYWluRG9jID0gKHZlcnNpb24pID0+XG4gIHZlcnNpb24uZG9jcy5maW5kKChkb2MpID0+IGRvYy5pZCA9PT0gdmVyc2lvbi5tYWluRG9jSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzVmVyc2lvbkRyb3Bkb3duTmF2YmFySXRlbSh7XG4gIG1vYmlsZSxcbiAgZG9jc1BsdWdpbklkLFxuICBkcm9wZG93bkFjdGl2ZUNsYXNzRGlzYWJsZWQsXG4gIGRyb3Bkb3duSXRlbXNCZWZvcmUsXG4gIGRyb3Bkb3duSXRlbXNBZnRlcixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3QgYWN0aXZlRG9jQ29udGV4dCA9IHVzZUFjdGl2ZURvY0NvbnRleHQoZG9jc1BsdWdpbklkKTtcbiAgY29uc3QgdmVyc2lvbnMgPSB1c2VWZXJzaW9ucyhkb2NzUGx1Z2luSWQpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdXNlTGF0ZXN0VmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCB7cHJlZmVycmVkVmVyc2lvbiwgc2F2ZVByZWZlcnJlZFZlcnNpb25OYW1lfSA9IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uKFxuICAgIGRvY3NQbHVnaW5JZCxcbiAgKTtcblxuICBmdW5jdGlvbiBnZXRJdGVtcygpIHtcbiAgICBjb25zdCB2ZXJzaW9uTGlua3MgPSB2ZXJzaW9ucy5tYXAoKHZlcnNpb24pID0+IHtcbiAgICAgIC8vIFdlIHRyeSB0byBsaW5rIHRvIHRoZSBzYW1lIGRvYywgaW4gYW5vdGhlciB2ZXJzaW9uXG4gICAgICAvLyBXaGVuIG5vdCBwb3NzaWJsZSwgZmFsbGJhY2sgdG8gdGhlIFwibWFpbiBkb2NcIiBvZiB0aGUgdmVyc2lvblxuICAgICAgY29uc3QgdmVyc2lvbkRvYyA9XG4gICAgICAgIGFjdGl2ZURvY0NvbnRleHQ/LmFsdGVybmF0ZURvY1ZlcnNpb25zW3ZlcnNpb24ubmFtZV0gfHxcbiAgICAgICAgZ2V0VmVyc2lvbk1haW5Eb2ModmVyc2lvbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc05hdkxpbms6IHRydWUsXG4gICAgICAgIGxhYmVsOiB2ZXJzaW9uLmxhYmVsLFxuICAgICAgICB0bzogdmVyc2lvbkRvYy5wYXRoLFxuICAgICAgICBpc0FjdGl2ZTogKCkgPT4gdmVyc2lvbiA9PT0gYWN0aXZlRG9jQ29udGV4dD8uYWN0aXZlVmVyc2lvbixcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIHNhdmVQcmVmZXJyZWRWZXJzaW9uTmFtZSh2ZXJzaW9uLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIC4uLmRyb3Bkb3duSXRlbXNCZWZvcmUsXG4gICAgICAuLi52ZXJzaW9uTGlua3MsXG4gICAgICAuLi5kcm9wZG93bkl0ZW1zQWZ0ZXIsXG4gICAgXTsgLy8gV2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgYSB2ZXJzaW9uIGRyb3Bkb3duIHdpdGggMCBvciAxIGl0ZW1cbiAgICAvLyBJZiB3ZSBidWlsZCB0aGUgc2l0ZSB3aXRoIGEgc2luZ2xlIGRvY3MgdmVyc2lvbiAob25seUluY2x1ZGVWZXJzaW9uczogWycxLjAuMCddKVxuICAgIC8vIFdlJ2QgcmF0aGVyIHJlbmRlciBhIGJ1dHRvbiBpbnN0ZWFkIG9mIGEgZHJvcGRvd25cblxuICAgIGlmIChpdGVtcy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBjb25zdCBkcm9wZG93blZlcnNpb24gPVxuICAgIGFjdGl2ZURvY0NvbnRleHQuYWN0aXZlVmVyc2lvbiA/PyBwcmVmZXJyZWRWZXJzaW9uID8/IGxhdGVzdFZlcnNpb247IC8vIE1vYmlsZSBpcyBoYW5kbGVkIGEgYml0IGRpZmZlcmVudGx5XG5cbiAgY29uc3QgZHJvcGRvd25MYWJlbCA9IG1vYmlsZSA/ICdWZXJzaW9ucycgOiBkcm9wZG93blZlcnNpb24ubGFiZWw7XG4gIGNvbnN0IGRyb3Bkb3duVG8gPSBtb2JpbGVcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogZ2V0VmVyc2lvbk1haW5Eb2MoZHJvcGRvd25WZXJzaW9uKS5wYXRoO1xuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TmF2YmFySXRlbVxuICAgICAgey4uLnByb3BzfVxuICAgICAgbW9iaWxlPXttb2JpbGV9XG4gICAgICBsYWJlbD17ZHJvcGRvd25MYWJlbH1cbiAgICAgIHRvPXtkcm9wZG93blRvfVxuICAgICAgaXRlbXM9e2dldEl0ZW1zKCl9XG4gICAgICBpc0FjdGl2ZT17ZHJvcGRvd25BY3RpdmVDbGFzc0Rpc2FibGVkID8gKCkgPT4gZmFsc2UgOiB1bmRlZmluZWR9XG4gICAgLz5cbiAgKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVmYXVsdE5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0vRGVmYXVsdE5hdmJhckl0ZW0nO1xuaW1wb3J0IHt1c2VMYXRlc3RWZXJzaW9uLCB1c2VBY3RpdmVEb2NDb250ZXh0fSBmcm9tICdAdGhlbWUvaG9va3MvdXNlRG9jcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7dXNlRG9jc1ByZWZlcnJlZFZlcnNpb259IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NOYXZiYXJJdGVtKHtcbiAgZG9jSWQsXG4gIGFjdGl2ZVNpZGViYXJDbGFzc05hbWUsXG4gIGxhYmVsOiBzdGF0aWNMYWJlbCxcbiAgZG9jc1BsdWdpbklkLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCB7YWN0aXZlVmVyc2lvbiwgYWN0aXZlRG9jfSA9IHVzZUFjdGl2ZURvY0NvbnRleHQoZG9jc1BsdWdpbklkKTtcbiAgY29uc3Qge3ByZWZlcnJlZFZlcnNpb259ID0gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24oZG9jc1BsdWdpbklkKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHVzZUxhdGVzdFZlcnNpb24oZG9jc1BsdWdpbklkKTtcbiAgY29uc3QgdmVyc2lvbiA9IGFjdGl2ZVZlcnNpb24gPz8gcHJlZmVycmVkVmVyc2lvbiA/PyBsYXRlc3RWZXJzaW9uO1xuICBjb25zdCBkb2MgPSB2ZXJzaW9uLmRvY3MuZmluZCgodmVyc2lvbkRvYykgPT4gdmVyc2lvbkRvYy5pZCA9PT0gZG9jSWQpO1xuXG4gIGlmICghZG9jKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEb2NOYXZiYXJJdGVtOiBjb3VsZG4ndCBmaW5kIGFueSBkb2Mgd2l0aCBpZD0ke2RvY0lkfSBpbiB2ZXJzaW9uICR7XG4gICAgICB2ZXJzaW9uLm5hbWVcbiAgICB9LlxuQXZhaWxhYmxlIGRvY0lkcz1cXG4tICR7dmVyc2lvbi5kb2NzLmpvaW4oJ1xcbi0gJyl9YCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TmF2YmFySXRlbVxuICAgICAgZXhhY3RcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChwcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgW2FjdGl2ZVNpZGViYXJDbGFzc05hbWVdOlxuICAgICAgICAgIGFjdGl2ZURvYyAmJiBhY3RpdmVEb2Muc2lkZWJhciA9PT0gZG9jLnNpZGViYXIsXG4gICAgICB9KX1cbiAgICAgIGxhYmVsPXtzdGF0aWNMYWJlbCA/PyBkb2MuaWR9XG4gICAgICB0bz17ZG9jLnBhdGh9XG4gICAgLz5cbiAgKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0B0aGVtZS9MYXlvdXQnO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuXG5mdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiUGFnZSBOb3QgRm91bmRcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXJnaW4tdmVydC0teGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtLTYgY29sLS1vZmZzZXQtM1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLk5vdEZvdW5kLnRpdGxlXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB0aXRsZSBvZiB0aGUgNDA0IHBhZ2VcIj5cbiAgICAgICAgICAgICAgICBQYWdlIE5vdCBGb3VuZFxuICAgICAgICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGlkPVwidGhlbWUuTm90Rm91bmQucDFcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGZpcnN0IHBhcmFncmFwaCBvZiB0aGUgNDA0IHBhZ2VcIj5cbiAgICAgICAgICAgICAgICBXZSBjb3VsZCBub3QgZmluZCB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yLlxuICAgICAgICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aGVtZS5Ob3RGb3VuZC5wMlwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgMm5kIHBhcmFncmFwaCBvZiB0aGUgNDA0IHBhZ2VcIj5cbiAgICAgICAgICAgICAgICBQbGVhc2UgY29udGFjdCB0aGUgb3duZXIgb2YgdGhlIHNpdGUgdGhhdCBsaW5rZWQgeW91IHRvIHRoZVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsIFVSTCBhbmQgbGV0IHRoZW0ga25vdyB0aGVpciBsaW5rIGlzIGJyb2tlbi5cbiAgICAgICAgICAgICAgPC9UcmFuc2xhdGU+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=