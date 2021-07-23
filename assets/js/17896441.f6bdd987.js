exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 3692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3727);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2263);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3919);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(412);
/* harmony import */ var _LinksCollector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2286);
/* harmony import */ var _useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4996);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8780);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["isNavLink", "to", "href", "activeClassName", "isActive", "data-noBrokenLinkCheck", "autoAddBaseUrl"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







 // TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix

const shouldAddBaseUrlAutomatically = to => to.startsWith('/');

function Link(_ref) {
  let {
    isNavLink,
    to,
    href,
    activeClassName,
    isActive,
    'data-noBrokenLinkCheck': noBrokenLinkCheck,
    autoAddBaseUrl = true
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _a;

  const {
    siteConfig: {
      trailingSlash,
      baseUrl
    }
  } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__.default)();
  const {
    withBaseUrl
  } = (0,_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .useBaseUrlUtils */ .C)();
  const linksCollector = (0,_LinksCollector__WEBPACK_IMPORTED_MODULE_3__/* .useLinksCollector */ .mo)(); // IMPORTANT: using to or href should not change anything
  // For example, MDX links will ALWAYS give us the href props
  // Using one prop or the other should not be used to distinguish
  // internal links (/docs/myDoc) from external links (https://github.com)

  const targetLinkUnprefixed = to || href;

  function maybeAddBaseUrl(str) {
    return autoAddBaseUrl && shouldAddBaseUrlAutomatically(str) ? withBaseUrl(str) : str;
  }

  const isInternal = (0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(targetLinkUnprefixed); // pathname:// is a special "protocol" we use to tell Docusaurus link
  // that a link is not "internal" and that we shouldn't use history.push()
  // this is not ideal but a good enough escape hatch for now
  // see https://github.com/facebook/docusaurus/issues/3309
  // note: we want baseUrl to be appended (see issue for details)
  // TODO read routes and automatically detect internal/external links?

  const targetLinkWithoutPathnameProtocol = targetLinkUnprefixed === null || targetLinkUnprefixed === void 0 ? void 0 : targetLinkUnprefixed.replace('pathname://', ''); // TODO we should use ReactRouter basename feature instead!
  // Automatically apply base url in links that start with /

  let targetLink = typeof targetLinkWithoutPathnameProtocol !== 'undefined' ? maybeAddBaseUrl(targetLinkWithoutPathnameProtocol) : undefined;

  if (targetLink && isInternal) {
    targetLink = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__.applyTrailingSlash)(targetLink, {
      trailingSlash,
      baseUrl
    });
  }

  const preloaded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const LinkComponent = isNavLink ? react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .NavLink */ .OL : react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .rU;
  const IOSupported = _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* .default.canUseIntersectionObserver */ .Z.canUseIntersectionObserver;
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
        if (targetLink != null) {
          window.docusaurus.prefetch(targetLink);
        }
      });
    }
  };

  const onMouseEnter = () => {
    if (!preloaded.current && targetLink != null) {
      window.docusaurus.preload(targetLink);
      preloaded.current = true;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // If IO is not supported. We prefetch by default (only once).
    if (!IOSupported && isInternal) {
      if (targetLink != null) {
        window.docusaurus.prefetch(targetLink);
      }
    } // When unmounting, stop intersection observer from watching.


    return () => {
      if (IOSupported && io) {
        io.disconnect();
      }
    };
  }, [targetLink, IOSupported, isInternal]);
  const isAnchorLink = (_a = targetLink === null || targetLink === void 0 ? void 0 : targetLink.startsWith('#')) !== null && _a !== void 0 ? _a : false;
  const isRegularHtmlLink = !targetLink || !isInternal || isAnchorLink;

  if (targetLink && isInternal && !isAnchorLink && !noBrokenLinkCheck) {
    linksCollector.collectLink(targetLink);
  }

  return isRegularHtmlLink ?
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({
    href: targetLink
  }, targetLinkUnprefixed && !isInternal && {
    target: '_blank',
    rel: 'noopener noreferrer'
  }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkComponent, Object.assign({}, props, {
    onMouseEnter: onMouseEnter,
    innerRef: handleRef,
    to: targetLink || ''
  }, isNavLink && {
    isActive,
    activeClassName
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ 4973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Translate),
  "I": () => (/* binding */ translate)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
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
      const element = /*#__PURE__*/react.isValidElement(value) ? value : // For non-React elements: basic primitive->string conversion
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
      return [...array, /*#__PURE__*/react.createElement(react.Fragment, {
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
var codeTranslations = __webpack_require__(4644);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
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
  return /*#__PURE__*/react.createElement(Interpolate, {
    values: values
  }, localizedMessage);
}

/***/ }),

/***/ 3919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ hasProtocol),
/* harmony export */   "Z": () => (/* binding */ isInternalUrl)
/* harmony export */ });
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

/***/ 8143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VK),
/* harmony export */   "HashRouter": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UT),
/* harmony export */   "Link": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rU),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VA),
/* harmony export */   "NavLink": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.OL),
/* harmony export */   "Prompt": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NL),
/* harmony export */   "Redirect": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.l_),
/* harmony export */   "Route": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.AW),
/* harmony export */   "Router": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.F0),
/* harmony export */   "StaticRouter": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.gx),
/* harmony export */   "Switch": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rs),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Gn),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.LX),
/* harmony export */   "useHistory": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.k6),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.TH),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UO),
/* harmony export */   "useRouteMatch": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.$B),
/* harmony export */   "withRouter": () => (/* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.EN)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3727);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


/***/ }),

/***/ 4996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useBaseUrlUtils),
/* harmony export */   "Z": () => (/* binding */ useBaseUrl)
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3919);
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


  if ((0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__/* .hasProtocol */ .b)(url)) {
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
  } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__.default)();
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

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGlobalData),
/* harmony export */   "useAllPluginInstancesData": () => (/* binding */ useAllPluginInstancesData),
/* harmony export */   "usePluginData": () => (/* binding */ usePluginData)
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
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
  } = (0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__.default)();

  if (!globalData) {
    throw new Error('Docusaurus global data not found.');
  }

  return globalData;
}
function useAllPluginInstancesData(pluginName) {
  const globalData = useGlobalData();
  const pluginGlobalData = globalData[pluginName];

  if (!pluginGlobalData) {
    throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin.`);
  }

  return pluginGlobalData;
}
function usePluginData(pluginName, pluginId = DEFAULT_PLUGIN_ID) {
  const pluginGlobalData = useAllPluginInstancesData(pluginName);
  const pluginInstanceGlobalData = pluginGlobalData[pluginId];

  if (!pluginInstanceGlobalData) {
    throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);
  }

  return pluginInstanceGlobalData;
}

/***/ }),

/***/ 8408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDocVersionSuggestions = exports.getActiveDocContext = exports.getActiveVersion = exports.getLatestVersion = exports.getActivePlugin = void 0;

const router_1 = __webpack_require__(8143);

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
    throw new Error(`Can't find active docs plugin for "${pathname}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginDatas).map(plugin => plugin.path).join(', ')}`);
  }

  return activePlugin;
}

exports.getActivePlugin = getActivePlugin;

const getLatestVersion = data => {
  return data.versions.find(version => version.isLast);
};

exports.getLatestVersion = getLatestVersion; // Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active

const getActiveVersion = (data, pathname) => {
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

exports.getActiveVersion = getActiveVersion;

const getActiveDocContext = (data, pathname) => {
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

exports.getActiveDocContext = getActiveDocContext;

const getDocVersionSuggestions = (data, pathname) => {
  const latestVersion = exports.getLatestVersion(data);
  const activeDocContext = exports.getActiveDocContext(data, pathname);
  const latestDocSuggestion = activeDocContext === null || activeDocContext === void 0 ? void 0 : activeDocContext.alternateDocVersions[latestVersion.name];
  return {
    latestDocSuggestion,
    latestVersionSuggestion: latestVersion
  };
};

exports.getDocVersionSuggestions = getDocVersionSuggestions;

/***/ }),

/***/ 6730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDocVersionSuggestions = exports.useActiveDocContext = exports.useActiveVersion = exports.useLatestVersion = exports.useVersions = exports.useActivePluginAndVersion = exports.useActivePlugin = exports.useDocsData = exports.useAllDocsData = void 0;

const tslib_1 = __webpack_require__(655);

const router_1 = __webpack_require__(8143);

const useGlobalData_1 = tslib_1.__importStar(__webpack_require__(7417));

const docsClientUtils_1 = __webpack_require__(8408); // Important to use a constant object to avoid React useEffect executions etc...,
// see https://github.com/facebook/docusaurus/issues/5089


const StableEmptyObject = {}; // Not using useAllPluginInstancesData() because in blog-only mode, docs hooks are still used by the theme
// We need a fail-safe fallback when the docs plugin is not in use

const useAllDocsData = () => {
  var _a; // useAllPluginInstancesData('docusaurus-plugin-content-docs');


  return (_a = useGlobalData_1.default()['docusaurus-plugin-content-docs']) !== null && _a !== void 0 ? _a : StableEmptyObject;
};

exports.useAllDocsData = useAllDocsData;

const useDocsData = pluginId => useGlobalData_1.usePluginData('docusaurus-plugin-content-docs', pluginId);

exports.useDocsData = useDocsData;

const useActivePlugin = (options = {}) => {
  const data = exports.useAllDocsData();
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActivePlugin(data, pathname, options);
};

exports.useActivePlugin = useActivePlugin;

const useActivePluginAndVersion = (options = {}) => {
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
};

exports.useActivePluginAndVersion = useActivePluginAndVersion; // versions are returned ordered (most recent first)

const useVersions = pluginId => {
  const data = exports.useDocsData(pluginId);
  return data.versions;
};

exports.useVersions = useVersions;

const useLatestVersion = pluginId => {
  const data = exports.useDocsData(pluginId);
  return docsClientUtils_1.getLatestVersion(data);
};

exports.useLatestVersion = useLatestVersion; // Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active

const useActiveVersion = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActiveVersion(data, pathname);
};

exports.useActiveVersion = useActiveVersion;

const useActiveDocContext = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getActiveDocContext(data, pathname);
};

exports.useActiveDocContext = useActiveDocContext; // Useful to say "hey, you are not on the latest docs version, please switch"

const useDocVersionSuggestions = pluginId => {
  const data = exports.useDocsData(pluginId);
  const {
    pathname
  } = router_1.useLocation();
  return docsClientUtils_1.getDocVersionSuggestions(data, pathname);
};

exports.useDocVersionSuggestions = useDocVersionSuggestions;

/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3692);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function DocPaginator(props) {
  const {
    metadata
  } = props;
  return /*#__PURE__*/react.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0,Translate/* translate */.I)({
      id: 'theme.docs.paginator.navAriaLabel',
      message: 'Docs pages navigation',
      description: 'The ARIA label for the docs pagination'
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__item"
  }, metadata.previous && /*#__PURE__*/react.createElement(Link/* default */.Z, {
    className: "pagination-nav__link",
    to: metadata.previous.permalink
  }, /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.docs.paginator.previous",
    description: "The label used to navigate to the previous doc"
  }, "Previous")), /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__label"
  }, "\xAB ", metadata.previous.title))), /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__item pagination-nav__item--next"
  }, metadata.next && /*#__PURE__*/react.createElement(Link/* default */.Z, {
    className: "pagination-nav__link",
    to: metadata.next.permalink
  }, /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.docs.paginator.next",
    description: "The label used to navigate to the next doc"
  }, "Next")), /*#__PURE__*/react.createElement("div", {
    className: "pagination-nav__label"
  }, metadata.next.title, " \xBB"))));
}

/* harmony default export */ const theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(907);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 17 modules
var lib = __webpack_require__(9306);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function UnreleasedVersionLabel({
  siteTitle,
  versionMetadata
}) {
  return /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react.createElement("b", null, versionMetadata.label)
    }
  }, 'This is unreleased documentation for {siteTitle} {versionLabel} version.');
}

function UnmaintainedVersionLabel({
  siteTitle,
  versionMetadata
}) {
  return /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react.createElement("b", null, versionMetadata.label)
    }
  }, 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');
}

const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};

function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /*#__PURE__*/react.createElement(BannerLabelComponent, props);
}

function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick
}) {
  return /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label used to tell the user to check the latest version",
    values: {
      versionLabel,
      latestVersionLink: /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Link/* default */.Z, {
        to: to,
        onClick: onClick
      }, /*#__PURE__*/react.createElement(Translate/* default */.Z, {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');
}

function DocVersionBannerEnabled({
  versionMetadata
}) {
  const {
    siteConfig: {
      title: siteTitle
    }
  } = (0,useDocusaurusContext.default)();
  const {
    pluginId
  } = (0,useDocs/* useActivePlugin */.gA)({
    failfast: true
  });

  const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId);

  const {
    savePreferredVersionName
  } = (0,lib/* useDocsPreferredVersion */.J)(pluginId);
  const {
    latestDocSuggestion,
    latestVersionSuggestion
  } = (0,useDocs/* useDocVersionSuggestions */.Jo)(pluginId); // try to link to same doc in latest version (not always possible)
  // fallback to main doc of latest version

  const latestVersionSuggestedDoc = latestDocSuggestion != null ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
  return /*#__PURE__*/react.createElement("div", {
    className: "alert alert--warning margin-bottom--md",
    role: "alert"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(BannerLabel, {
    siteTitle: siteTitle,
    versionMetadata: versionMetadata
  })), /*#__PURE__*/react.createElement("div", {
    className: "margin-top--md"
  }, /*#__PURE__*/react.createElement(LatestVersionSuggestionLabel, {
    versionLabel: latestVersionSuggestion.label,
    to: latestVersionSuggestedDoc.path,
    onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
  })));
}

function DocVersionBanner({
  versionMetadata
}) {
  if (versionMetadata.banner === 'none') {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  } else {
    return /*#__PURE__*/react.createElement(DocVersionBannerEnabled, {
      versionMetadata: versionMetadata
    });
  }
}

/* harmony default export */ const theme_DocVersionBanner = (DocVersionBanner);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1217);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function LastUpdatedAtDate({
  lastUpdatedAt,
  formattedLastUpdatedAt
}) {
  return /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement("time", {
        dateTime: new Date(lastUpdatedAt * 1000).toISOString()
      }, formattedLastUpdatedAt))
    }
  }, ' on {date}');
}

function LastUpdatedByUser({
  lastUpdatedBy
}) {
  return /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /*#__PURE__*/react.createElement("b", null, lastUpdatedBy)
    }
  }, ' by {user}');
}

function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy
}) {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt && formattedLastUpdatedAt ? /*#__PURE__*/react.createElement(LastUpdatedAtDate, {
        lastUpdatedAt: lastUpdatedAt,
        formattedLastUpdatedAt: formattedLastUpdatedAt
      }) : '',
      byUser: lastUpdatedBy ? /*#__PURE__*/react.createElement(LastUpdatedByUser, {
        lastUpdatedBy: lastUpdatedBy
      }) : ''
    }
  }, 'Last updated{atDate}{byUser}'),  false && /*#__PURE__*/0);
}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function useTOCHighlight(linkClassName, linkActiveClassName, topOffset) {
  const [lastActiveLink, setLastActiveLink] = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    function setActiveLink() {
      function getActiveHeaderAnchor() {
        const headersAnchors = Array.from(document.getElementsByClassName('anchor'));
        const firstAnchorUnderViewportTop = headersAnchors.find(anchor => {
          const {
            top
          } = anchor.getBoundingClientRect();
          return top >= topOffset;
        });

        if (firstAnchorUnderViewportTop) {
          // If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
          // In such case, the active anchor is the previous one (if it exists), that may be above the viewport
          if (firstAnchorUnderViewportTop.getBoundingClientRect().top >= topOffset) {
            const previousAnchor = headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop) - 1];
            return previousAnchor != null ? previousAnchor : firstAnchorUnderViewportTop;
          } // If the anchor is at the top of the viewport, we consider it's the first anchor
          else {
            return firstAnchorUnderViewportTop;
          }
        } // no anchor under viewport top? (ie we are at the bottom of the page)
        else {
          // highlight the last anchor found
          return headersAnchors[headersAnchors.length - 1];
        }
      }

      const activeHeaderAnchor = getActiveHeaderAnchor();

      if (activeHeaderAnchor) {
        let index = 0;
        let itemHighlighted = false; // @ts-expect-error: Must be <a> tags.

        const links = document.getElementsByClassName(linkClassName);

        while (index < links.length && !itemHighlighted) {
          const link = links[index];
          const {
            href
          } = link;
          const anchorValue = decodeURIComponent(href.substring(href.indexOf('#') + 1));

          if (activeHeaderAnchor.id === anchorValue) {
            if (lastActiveLink) {
              lastActiveLink.classList.remove(linkActiveClassName);
            }

            link.classList.add(linkActiveClassName);
            setLastActiveLink(link);
            itemHighlighted = true;
          }

          index += 1;
        }
      }
    }

    document.addEventListener('scroll', setActiveLink);
    document.addEventListener('resize', setActiveLink);
    setActiveLink();
    return () => {
      document.removeEventListener('scroll', setActiveLink);
      document.removeEventListener('resize', setActiveLink);
    };
  });
}

/* harmony default export */ const hooks_useTOCHighlight = (useTOCHighlight);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"tableOfContents": "tableOfContents_35-E",
	"docItemContainer": "docItemContainer_gpai"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;
/* eslint-disable jsx-a11y/control-has-associated-label */

function Headings({
  toc,
  isChild
}) {
  if (!toc.length) {
    return null;
  }

  return /*#__PURE__*/react.createElement("ul", {
    className: isChild ? '' : 'table-of-contents table-of-contents__left-border'
  }, toc.map(heading => /*#__PURE__*/react.createElement("li", {
    key: heading.id
  }, /*#__PURE__*/react.createElement("a", {
    href: `#${heading.id}`,
    className: LINK_CLASS_NAME // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: heading.value
    }
  }), /*#__PURE__*/react.createElement(Headings, {
    isChild: true,
    toc: heading.children
  }))));
}

function TOC({
  toc
}) {
  hooks_useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)(styles_module.tableOfContents, 'thin-scrollbar')
  }, /*#__PURE__*/react.createElement(Headings, {
    toc: toc
  }));
}

/* harmony default export */ const theme_TOC = (TOC);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// Exports
/* harmony default export */ const IconEdit_styles_module = ({
	"iconEdit": "iconEdit_2_ui"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
const _excluded = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const IconEdit = _ref => {
  let {
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/react.createElement("svg", _extends({
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 40 40",
    className: (0,clsx_m.default)(IconEdit_styles_module.iconEdit, className),
    "aria-hidden": "true"
  }, restProps), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
};

/* harmony default export */ const theme_IconEdit = (IconEdit);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function EditThisPage({
  editUrl
}) {
  return /*#__PURE__*/react.createElement("a", {
    href: editUrl,
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/react.createElement(theme_IconEdit, null), /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(363);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// Exports
/* harmony default export */ const DocItem_styles_module = ({
	"docItemContainer": "docItemContainer_33ec",
	"lastUpdated": "lastUpdated_3DPF",
	"docItemCol": "docItemCol_3FnS"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */












function DocItem(props) {
  const {
    content: DocContent,
    versionMetadata
  } = props;
  const {
    metadata,
    frontMatter
  } = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents
  } = frontMatter;
  const {
    description,
    title,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy
  } = metadata;
  const {
    pluginId
  } = (0,useDocs/* useActivePlugin */.gA)({
    failfast: true
  });
  const versions = (0,useDocs/* useVersions */.gB)(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // We only add a title if:
  // - user asks to hide it with frontmatter
  // - the markdown content does not already contain a top-level h1 heading

  const shouldAddTitle = !hideTitle && typeof DocContent.contentTitle === 'undefined';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Seo/* default */.Z, {
    title,
    description,
    keywords,
    image
  }), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('col', {
      [DocItem_styles_module.docItemCol]: !hideTableOfContents
    })
  }, /*#__PURE__*/react.createElement(theme_DocVersionBanner, {
    versionMetadata: versionMetadata
  }), /*#__PURE__*/react.createElement("div", {
    className: DocItem_styles_module.docItemContainer
  }, /*#__PURE__*/react.createElement("article", null, showVersionBadge && /*#__PURE__*/react.createElement("span", {
    className: "badge badge--secondary"
  }, "Version: ", versionMetadata.label), /*#__PURE__*/react.createElement("div", {
    className: "markdown"
  }, shouldAddTitle && /*#__PURE__*/react.createElement(Heading/* MainHeading */.N, null, title), /*#__PURE__*/react.createElement(DocContent, null)), (editUrl || lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/react.createElement("footer", {
    className: "row docusaurus-mt-lg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col"
  }, editUrl && /*#__PURE__*/react.createElement(EditThisPage, {
    editUrl: editUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('col', DocItem_styles_module.lastUpdated)
  }, (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/react.createElement(LastUpdated, {
    lastUpdatedAt: lastUpdatedAt,
    formattedLastUpdatedAt: formattedLastUpdatedAt,
    lastUpdatedBy: lastUpdatedBy
  })))), /*#__PURE__*/react.createElement(theme_DocPaginator, {
    metadata: metadata
  }))), !hideTableOfContents && DocContent.toc && /*#__PURE__*/react.createElement("div", {
    className: "col col--3"
  }, /*#__PURE__*/react.createElement(theme_TOC, {
    toc: DocContent.toc
  }))));
}

/* harmony default export */ const theme_DocItem = (DocItem);

/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ MainHeading),
  "Z": () => (/* binding */ theme_Heading)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 17 modules
var lib = __webpack_require__(9306);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"enhancedAnchor": "enhancedAnchor_2LWZ",
	"h1Heading": "h1Heading_27L5"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
const _excluded = ["id"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */






const MainHeading = function MainHeading(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react.createElement("header", null, /*#__PURE__*/react.createElement("h1", _extends({}, props, {
    id: undefined // h1 headings do not need an id because they don't appear in the TOC
    ,
    className: styles_module.h1Heading
  }), props.children));
};

const createAnchorHeading = Tag => function TargetComponent(_ref2) {
  let {
    id
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  const {
    navbar: {
      hideOnScroll
    }
  } = (0,lib/* useThemeConfig */.LU)();

  if (!id) {
    return /*#__PURE__*/react.createElement(Tag, props);
  }

  return /*#__PURE__*/react.createElement(Tag, props, /*#__PURE__*/react.createElement("a", {
    "aria-hidden": "true",
    tabIndex: -1,
    className: (0,clsx_m.default)('anchor', {
      [styles_module.enhancedAnchor]: !hideOnScroll
    }),
    id: id
  }), props.children, /*#__PURE__*/react.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0,Translate/* translate */.I)({
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to heading',
      description: 'Title for link to heading'
    })
  }, "#"));
};

const Heading = headingType => {
  return headingType === 'h1' ? MainHeading : createAnchorHeading(headingType);
};

/* harmony default export */ const theme_Heading = (Heading);

/***/ }),

/***/ 1217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5742);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4996);
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
  const {
    image: defaultImage
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .LU)();
  const pageTitle = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useTitleFormatter */ .pe)(title);
  const pageImage = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(image || defaultImage, {
    absolute: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, pageTitle), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: pageTitle
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: description
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: description
  }), keywords && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "keywords",
    content: Array.isArray(keywords) ? keywords.join(',') : keywords
  }), pageImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: pageImage
  }), pageImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: pageImage
  }));
}

/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iw": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useActiveDocContext),
/* harmony export */   "gA": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useActivePlugin),
/* harmony export */   "zu": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useActiveVersion),
/* harmony export */   "_r": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useAllDocsData),
/* harmony export */   "Jo": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useDocVersionSuggestions),
/* harmony export */   "zh": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useDocsData),
/* harmony export */   "yW": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useLatestVersion),
/* harmony export */   "gB": () => (/* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.useVersions)
/* harmony export */ });
/* harmony import */ var _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6730);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Re-expose useDocs
// Ensure it's always statically available even if user is not using the docs plugin
// Problem reported for the blog-only mode: https://github.com/facebook/docusaurus/issues/3360


/***/ }),

/***/ 9306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pl": () => (/* reexport */ AnnouncementBarProvider),
  "HX": () => (/* reexport */ DEFAULT_SEARCH_TAG),
  "L5": () => (/* reexport */ DocsPreferredVersionContextProvider),
  "kM": () => (/* reexport */ ThemeClassNames),
  "WA": () => (/* reexport */ createStorageSlot),
  "os": () => (/* reexport */ docVersionSearchTag),
  "Mg": () => (/* reexport */ isSamePath),
  "_f": () => (/* reexport */ listStorageKeys),
  "bc": () => (/* reexport */ parseCodeBlockTitle),
  "l5": () => (/* reexport */ useAlternatePageUtils),
  "nT": () => (/* reexport */ useAnnouncementBar),
  "J": () => (/* reexport */ useDocsPreferredVersion),
  "SL": () => (/* reexport */ useLocationChange),
  "D9": () => (/* reexport */ usePrevious),
  "LU": () => (/* reexport */ useThemeConfig),
  "pe": () => (/* reexport */ useTitleFormatter)
});

// UNUSED EXPORTS: isDocsPluginEnabled, useDocsPreferredVersionByPluginId, usePluralForm

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var exports_useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function useThemeConfig() {
  return (0,exports_useDocusaurusContext.default)().siteConfig.themeConfig;
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const StorageTypes = (/* unused pure expression or super */ null && (['localStorage', 'sessionStorage', 'none']));
const DefaultStorageType = 'localStorage'; // Will return null browser storage is unavailable (like running Docusaurus in iframe)
// See https://github.com/facebook/docusaurus/pull/4501

function getBrowserStorage(storageType = DefaultStorageType) {
  if (typeof window === 'undefined') {
    throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');
  }

  if (storageType === 'none') {
    return null;
  } else {
    try {
      return window[storageType];
    } catch (e) {
      logOnceBrowserStorageNotAvailableWarning(e);
      return null;
    }
  }
}
/**
 * Poor man's memoization to avoid logging multiple times the same warning
 * Sometimes, localStorage/sessionStorage is unavailable due to browser policies
 */


let hasLoggedBrowserStorageNotAvailableWarning = false;

function logOnceBrowserStorageNotAvailableWarning(error) {
  if (!hasLoggedBrowserStorageNotAvailableWarning) {
    console.warn(`Docusaurus browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`, error);
    hasLoggedBrowserStorageNotAvailableWarning = true;
  }
}

const NoopStorageSlot = {
  get: () => null,
  set: () => {},
  del: () => {}
}; //  Fail-fast, as storage APIs should not be used during the SSR process

function createServerStorageSlot(key) {
  function throwError() {
    throw new Error(`Illegal storage API usage for storage key "${key}".
Docusaurus storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`);
  }

  return {
    get: throwError,
    set: throwError,
    del: throwError
  };
}
/**
 * Creates an object for accessing a particular key in localStorage.
 */


const createStorageSlot = (key, options) => {
  if (typeof window === 'undefined') {
    return createServerStorageSlot(key);
  }

  const browserStorage = getBrowserStorage(options === null || options === void 0 ? void 0 : options.persistence);

  if (browserStorage === null) {
    return NoopStorageSlot;
  }

  return {
    get: () => browserStorage.getItem(key),
    set: value => browserStorage.setItem(key, value),
    del: () => browserStorage.removeItem(key)
  };
};
/**
 * Returns a list of all the keys currently stored in browser storage
 * or an empty list if browser storage can't be accessed.
 */

function listStorageKeys(storageType = DefaultStorageType) {
  const browserStorage = getBrowserStorage(storageType);

  if (!browserStorage) {
    return [];
  }

  const keys = [];

  for (let i = 0; i < browserStorage.length; i += 1) {
    const key = browserStorage.key(i);

    if (key !== null) {
      keys.push(key);
    }
  }

  return keys;
}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // Permits to obtain the url of the current page in another locale
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
  } = (0,exports_useDocusaurusContext.default)();
  const {
    pathname
  } = (0,react_router/* useLocation */.TH)();
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const codeBlockTitleRegex = /title=(["'])(.*?)\1/;
function parseCodeBlockTitle(metastring) {
  var _a, _b;

  return (_b = (_a = metastring === null || metastring === void 0 ? void 0 : metastring.match(codeBlockTitleRegex)) === null || _a === void 0 ? void 0 : _a[2]) !== null && _b !== void 0 ? _b : '';
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DEFAULT_SEARCH_TAG = 'default';
function docVersionSearchTag(pluginId, versionName) {
  return `docs-${pluginId}-${versionName}`;
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(907);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 // TODO not ideal, see also "useDocs"

const isDocsPluginEnabled = !!useDocs/* useAllDocsData */._r;
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/pathUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Compare the 2 paths, ignoring trailing /
const isSamePath = (path1, path2) => {
  const normalize = pathname => {
    return !pathname || (pathname === null || pathname === void 0 ? void 0 : pathname.endsWith('/')) ? pathname : `${pathname}/`;
  };

  return normalize(path1) === normalize(path2);
};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useTitleFormatter = title => {
  const {
    siteConfig = {}
  } = (0,exports_useDocusaurusContext.default)();
  const {
    title: siteTitle,
    titleDelimiter = '|'
  } = siteConfig;
  return title && title.trim().length ? `${title.trim()} ${titleDelimiter} ${siteTitle}` : siteTitle;
};
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // We want to ensurer a stable plural form order in all cases
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
  } = useDocusaurusContext();
  return useMemo(() => {
    // @ts-expect-error checking Intl.PluralRules in case browser doesn't have it (e.g Safari 12-)
    if (Intl.PluralRules) {
      try {
        return createLocalePluralForms(currentLocale);
      } catch (e) {
        console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePrevious.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function usePrevious(value) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function useLocationChange(onLocationChange) {
  const location = (0,react_router/* useLocation */.TH)();
  const previousLocation = usePrevious(location);
  const isFirst = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    // Prevent first effect to trigger the listener on mount
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    onLocationChange({
      location,
      previousLocation
    });
  }, [location]);
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionStorage.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const storageKey = pluginId => `docs-preferred-version-${pluginId}`;

const DocsPreferredVersionStorage = {
  save: (pluginId, persistence, versionName) => {
    createStorageSlot(storageKey(pluginId), {
      persistence
    }).set(versionName);
  },
  read: (pluginId, persistence) => {
    return createStorageSlot(storageKey(pluginId), {
      persistence
    }).get();
  },
  clear: (pluginId, persistence) => {
    createStorageSlot(storageKey(pluginId), {
      persistence
    }).del();
  }
};
/* harmony default export */ const docsPreferredVersion_DocsPreferredVersionStorage = (DocsPreferredVersionStorage);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




 // Initial state is always null as we can't read localstorage from node SSR

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
    const preferredVersionNameUnsafe = docsPreferredVersion_DocsPreferredVersionStorage.read(pluginId, versionPersistence);
    const pluginData = allDocsData[pluginId];
    const versionExists = pluginData.versions.some(version => version.name === preferredVersionNameUnsafe);

    if (versionExists) {
      return {
        preferredVersionName: preferredVersionNameUnsafe
      };
    } else {
      docsPreferredVersion_DocsPreferredVersionStorage.clear(pluginId, versionPersistence);
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
  return useThemeConfig().docs.versionPersistence;
} // Value that  will be accessible through context: [state,api]


function useContextValue() {
  const allDocsData = (0,useDocs/* useAllDocsData */._r)();
  const versionPersistence = useVersionPersistence();
  const pluginIds = (0,react.useMemo)(() => Object.keys(allDocsData), [allDocsData]); // Initial state is empty, as  we can't read browser storage in node/SSR

  const [state, setState] = (0,react.useState)(() => getInitialState(pluginIds)); // On mount, we set the state read from browser storage

  (0,react.useEffect)(() => {
    setState(readStorageState({
      allDocsData,
      versionPersistence,
      pluginIds
    }));
  }, [allDocsData, versionPersistence, pluginIds]); // The API that we expose to consumer hooks (memo for constant object)

  const api = (0,react.useMemo)(() => {
    function savePreferredVersion(pluginId, versionName) {
      docsPreferredVersion_DocsPreferredVersionStorage.save(pluginId, versionPersistence, versionName);
      setState(s => Object.assign({}, s, {
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

const Context = /*#__PURE__*/(0,react.createContext)(null);
function DocsPreferredVersionContextProvider({
  children
}) {
  if (isDocsPluginEnabled) {
    return /*#__PURE__*/react.createElement(DocsPreferredVersionContextProviderUnsafe, null, children);
  } else {
    return /*#__PURE__*/react.createElement(react.Fragment, null, children);
  }
}

function DocsPreferredVersionContextProviderUnsafe({
  children
}) {
  const contextValue = useContextValue();
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

function DocsPreferredVersionProvider_useDocsPreferredVersionContext() {
  const value = (0,react.useContext)(Context);

  if (!value) {
    throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');
  }

  return value;
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



 // TODO improve typing
// Note, the preferredVersion attribute will always be null before mount

function useDocsPreferredVersion(pluginId = DEFAULT_PLUGIN_ID) {
  const docsData = (0,useDocs/* useDocsData */.zh)(pluginId);
  const [state, api] = DocsPreferredVersionProvider_useDocsPreferredVersionContext();
  const {
    preferredVersionName
  } = state[pluginId];
  const preferredVersion = preferredVersionName ? docsData.versions.find(version => version.name === preferredVersionName) : null;
  const savePreferredVersionName = (0,react.useCallback)(versionName => {
    api.savePreferredVersion(pluginId, versionName);
  }, [api]);
  return {
    preferredVersion,
    savePreferredVersionName
  };
}
function useDocsPreferredVersionByPluginId() {
  const allDocsData = useAllDocsData();
  const [state] = useDocsPreferredVersionContext();

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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// These class names are used to style page layouts in Docusaurus
const ThemeClassNames = {
  page: {
    blogListPage: 'blog-list-page',
    blogPostPage: 'blog-post-page',
    blogTagsListPage: 'blog-tags-list-page',
    blogTagsPostPage: 'blog-tags-post-page',
    docPage: 'doc-page',
    mdxPage: 'mdx-page'
  },
  wrapper: {
    main: 'main-wrapper',
    blogPages: 'blog-wrapper',
    docPages: 'docs-wrapper',
    mdxPages: 'mdx-wrapper'
  }
};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/announcementBarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const AnnouncementBarDismissStorageKey = 'docusaurus.announcement.dismiss';
const AnnouncementBarIdStorageKey = 'docusaurus.announcement.id';
const AnnouncementBarDismissStorage = createStorageSlot(AnnouncementBarDismissStorageKey);
const IdStorage = createStorageSlot(AnnouncementBarIdStorageKey);

const isDismissedInStorage = () => AnnouncementBarDismissStorage.get() === 'true';

const setDismissedInStorage = bool => AnnouncementBarDismissStorage.set(String(bool));

const useAnnouncementBarContextValue = () => {
  const {
    announcementBar
  } = useThemeConfig();
  const {
    isClient
  } = (0,exports_useDocusaurusContext.default)();
  const [isClosed, setClosed] = (0,react.useState)(() => {
    return isClient ? // On client navigation: init with localstorage value
    isDismissedInStorage() : // On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
    false;
  }); // Update state after hydration

  (0,react.useEffect)(() => {
    setClosed(isDismissedInStorage());
  }, []);
  const handleClose = (0,react.useCallback)(() => {
    setDismissedInStorage(true);
    setClosed(true);
  }, []);
  (0,react.useEffect)(() => {
    if (!announcementBar) {
      return;
    }

    const {
      id
    } = announcementBar;
    let viewedId = IdStorage.get(); // retrocompatibility due to spelling mistake of default id
    // see https://github.com/facebook/docusaurus/issues/3338

    if (viewedId === 'annoucement-bar') {
      viewedId = 'announcement-bar';
    }

    const isNewAnnouncement = id !== viewedId;
    IdStorage.set(id);

    if (isNewAnnouncement) {
      setDismissedInStorage(false);
    }

    if (isNewAnnouncement || !isDismissedInStorage()) {
      setClosed(false);
    }
  }, []);
  return (0,react.useMemo)(() => {
    return {
      isClosed,
      close: handleClose
    };
  }, [isClosed]);
};

const AnnouncementBarContext = /*#__PURE__*/(0,react.createContext)(null);
const AnnouncementBarProvider = ({
  children
}) => {
  const value = useAnnouncementBarContextValue();
  return /*#__PURE__*/react.createElement(AnnouncementBarContext.Provider, {
    value: value
  }, children);
};
const useAnnouncementBar = () => {
  const api = (0,react.useContext)(AnnouncementBarContext);

  if (!api) {
    throw new Error('useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree');
  }

  return api;
};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
















/***/ }),

/***/ 8802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
})); // Trailing slash handling depends in some site configuration options

function applyTrailingSlash(path, options) {
  const {
    trailingSlash,
    baseUrl
  } = options;

  if (path.startsWith('#')) {
    // Never apply trailing slash to an anchor link
    return path;
  } // TODO deduplicate: also present in @docusaurus/utils


  function addTrailingSlash(str) {
    return str.endsWith('/') ? str : `${str}/`;
  }

  function removeTrailingSlash(str) {
    return str.endsWith('/') ? str.slice(0, -1) : str;
  }

  function handleTrailingSlash(str, trailing) {
    return trailing ? addTrailingSlash(str) : removeTrailingSlash(str);
  } // undefined = legacy retrocompatible behavior


  if (typeof trailingSlash === 'undefined') {
    return path;
  } // The trailing slash should be handled before the ?search#hash !


  const [pathname] = path.split(/[#?]/); // Never transform '/' to ''
  // Never remove the baseUrl trailing slash!
  // If baseUrl = /myBase/, we want to emit /myBase/index.html and not /myBase.html !
  // See https://github.com/facebook/docusaurus/issues/5077

  const shouldNotApply = pathname === '/' || pathname === baseUrl;
  const newPathname = shouldNotApply ? pathname : handleTrailingSlash(pathname, trailingSlash);
  return path.replace(pathname, newPathname);
}

exports.default = applyTrailingSlash;

/***/ }),

/***/ 8780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uniq = exports.applyTrailingSlash = void 0;

var applyTrailingSlash_1 = __webpack_require__(8802);

Object.defineProperty(exports, "applyTrailingSlash", ({
  enumerable: true,
  get: function () {
    return __importDefault(applyTrailingSlash_1).default;
  }
}));

var uniq_1 = __webpack_require__(9964);

Object.defineProperty(exports, "uniq", ({
  enumerable: true,
  get: function () {
    return __importDefault(uniq_1).default;
  }
}));

/***/ }),

/***/ 9964:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
})); // Remove duplicate array items (similar to _.uniq)

function uniq(array) {
  // Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
  return Array.from(new Set(array));
}

exports.default = uniq;

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

/***/ 3727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VA": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.VA),
/* harmony export */   "NL": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.NL),
/* harmony export */   "l_": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.l_),
/* harmony export */   "AW": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.AW),
/* harmony export */   "F0": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.F0),
/* harmony export */   "gx": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.gx),
/* harmony export */   "rs": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.rs),
/* harmony export */   "Gn": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Gn),
/* harmony export */   "LX": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.LX),
/* harmony export */   "k6": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.k6),
/* harmony export */   "TH": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.TH),
/* harmony export */   "UO": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.UO),
/* harmony export */   "$B": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.$B),
/* harmony export */   "EN": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.EN),
/* harmony export */   "VK": () => (/* binding */ BrowserRouter),
/* harmony export */   "UT": () => (/* binding */ HashRouter),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "OL": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5977);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3552);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9756);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2177);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_4__/* .createBrowserHistory */ .lX)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_4__/* .createHashHistory */ .q_)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_4__/* .createLocation */ .ob)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .LX)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzLzE3ODk2NDQxLjc3ZWYwYWNiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9MaW5rLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvSW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9UcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9pc0ludGVybmFsVXJsLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvcm91dGVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvdXNlQmFzZVVybC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL3VzZUdsb2JhbERhdGEuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9wbHVnaW4tY29udGVudC1kb2NzL2xpYi9jbGllbnQvZG9jc0NsaWVudFV0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvcGx1Z2luLWNvbnRlbnQtZG9jcy9saWIvdGhlbWUvaG9va3MvdXNlRG9jcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvRG9jUGFnaW5hdG9yL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Eb2NWZXJzaW9uQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9MYXN0VXBkYXRlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlVE9DSGlnaGxpZ2h0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UT0Mvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1RPQy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvSWNvbkVkaXQvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25FZGl0L2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9FZGl0VGhpc1BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0RvY0l0ZW0vc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0RvY0l0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0hlYWRpbmcvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0hlYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1Nlby9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlRG9jcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvdXNlVGhlbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3N0b3JhZ2VVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvdXNlQWx0ZXJuYXRlUGFnZVV0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9jb2RlQmxvY2tVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvc2VhcmNoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2RvY3NVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvcGF0aFV0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9nZW5lcmFsVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3VzZVBsdXJhbEZvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3VzZVByZXZpb3VzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VMb2NhdGlvbkNoYW5nZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9kb2NzUHJlZmVycmVkVmVyc2lvbi9Eb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9kb2NzUHJlZmVycmVkVmVyc2lvbi91c2VEb2NzUHJlZmVycmVkVmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvVGhlbWVDbGFzc05hbWVzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9hbm5vdW5jZW1lbnRCYXJVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy91dGlscy1jb21tb24vbGliL2FwcGx5VHJhaWxpbmdTbGFzaC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3V0aWxzLWNvbW1vbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy91dGlscy1jb21tb24vbGliL3VuaXEuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIGFzIFJSTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IGlzSW50ZXJuYWxVcmwgZnJvbSAnLi9pc0ludGVybmFsVXJsJztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICcuL0V4ZWN1dGlvbkVudmlyb25tZW50JztcbmltcG9ydCB7IHVzZUxpbmtzQ29sbGVjdG9yIH0gZnJvbSAnLi4vTGlua3NDb2xsZWN0b3InO1xuaW1wb3J0IHsgdXNlQmFzZVVybFV0aWxzIH0gZnJvbSAnLi91c2VCYXNlVXJsJztcbmltcG9ydCB7IGFwcGx5VHJhaWxpbmdTbGFzaCB9IGZyb20gJ0Bkb2N1c2F1cnVzL3V0aWxzLWNvbW1vbic7XG4vLyBUT0RPIGFsbCB0aGlzIHdvdWxkbid0IGJlIG5lY2Vzc2FyeSBpZiB3ZSB1c2VkIFJlYWN0Um91dGVyIGJhc2VuYW1lIGZlYXR1cmVcbi8vIFdlIGRvbid0IGF1dG9tYXRpY2FsbHkgYWRkIGJhc2UgdXJscyB0byBhbGwgbGlua3MsXG4vLyBvbmx5IHRoZSBcInNhZmVcIiBvbmVzLCBzdGFydGluZyB3aXRoIC8gKGxpa2UgL2RvY3MvaW50cm9kdWN0aW9uKVxuLy8gdGhpcyBpcyBiZWNhdXNlIHVzZUJhc2VVcmwoKSBhY3R1YWxseSB0cmFuc2Zvcm1zIHJlbGF0aXZlIGxpbmtzXG4vLyBsaWtlIFwiaW50cm9kdWN0aW9uXCIgdG8gXCIvYmFzZVVybC9pbnRyb2R1Y3Rpb25cIiA9PiBiYWQgYmVoYXZpb3IgdG8gZml4XG5jb25zdCBzaG91bGRBZGRCYXNlVXJsQXV0b21hdGljYWxseSA9ICh0bykgPT4gdG8uc3RhcnRzV2l0aCgnLycpO1xuZnVuY3Rpb24gTGluayh7IGlzTmF2TGluaywgdG8sIGhyZWYsIGFjdGl2ZUNsYXNzTmFtZSwgaXNBY3RpdmUsICdkYXRhLW5vQnJva2VuTGlua0NoZWNrJzogbm9Ccm9rZW5MaW5rQ2hlY2ssIGF1dG9BZGRCYXNlVXJsID0gdHJ1ZSwgLi4ucHJvcHMgfSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7IHNpdGVDb25maWc6IHsgdHJhaWxpbmdTbGFzaCwgYmFzZVVybCB9LCB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBjb25zdCB7IHdpdGhCYXNlVXJsIH0gPSB1c2VCYXNlVXJsVXRpbHMoKTtcbiAgICBjb25zdCBsaW5rc0NvbGxlY3RvciA9IHVzZUxpbmtzQ29sbGVjdG9yKCk7XG4gICAgLy8gSU1QT1JUQU5UOiB1c2luZyB0byBvciBocmVmIHNob3VsZCBub3QgY2hhbmdlIGFueXRoaW5nXG4gICAgLy8gRm9yIGV4YW1wbGUsIE1EWCBsaW5rcyB3aWxsIEFMV0FZUyBnaXZlIHVzIHRoZSBocmVmIHByb3BzXG4gICAgLy8gVXNpbmcgb25lIHByb3Agb3IgdGhlIG90aGVyIHNob3VsZCBub3QgYmUgdXNlZCB0byBkaXN0aW5ndWlzaFxuICAgIC8vIGludGVybmFsIGxpbmtzICgvZG9jcy9teURvYykgZnJvbSBleHRlcm5hbCBsaW5rcyAoaHR0cHM6Ly9naXRodWIuY29tKVxuICAgIGNvbnN0IHRhcmdldExpbmtVbnByZWZpeGVkID0gdG8gfHwgaHJlZjtcbiAgICBmdW5jdGlvbiBtYXliZUFkZEJhc2VVcmwoc3RyKSB7XG4gICAgICAgIHJldHVybiBhdXRvQWRkQmFzZVVybCAmJiBzaG91bGRBZGRCYXNlVXJsQXV0b21hdGljYWxseShzdHIpXG4gICAgICAgICAgICA/IHdpdGhCYXNlVXJsKHN0cilcbiAgICAgICAgICAgIDogc3RyO1xuICAgIH1cbiAgICBjb25zdCBpc0ludGVybmFsID0gaXNJbnRlcm5hbFVybCh0YXJnZXRMaW5rVW5wcmVmaXhlZCk7XG4gICAgLy8gcGF0aG5hbWU6Ly8gaXMgYSBzcGVjaWFsIFwicHJvdG9jb2xcIiB3ZSB1c2UgdG8gdGVsbCBEb2N1c2F1cnVzIGxpbmtcbiAgICAvLyB0aGF0IGEgbGluayBpcyBub3QgXCJpbnRlcm5hbFwiIGFuZCB0aGF0IHdlIHNob3VsZG4ndCB1c2UgaGlzdG9yeS5wdXNoKClcbiAgICAvLyB0aGlzIGlzIG5vdCBpZGVhbCBidXQgYSBnb29kIGVub3VnaCBlc2NhcGUgaGF0Y2ggZm9yIG5vd1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzMwOVxuICAgIC8vIG5vdGU6IHdlIHdhbnQgYmFzZVVybCB0byBiZSBhcHBlbmRlZCAoc2VlIGlzc3VlIGZvciBkZXRhaWxzKVxuICAgIC8vIFRPRE8gcmVhZCByb3V0ZXMgYW5kIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IGludGVybmFsL2V4dGVybmFsIGxpbmtzP1xuICAgIGNvbnN0IHRhcmdldExpbmtXaXRob3V0UGF0aG5hbWVQcm90b2NvbCA9IHRhcmdldExpbmtVbnByZWZpeGVkID09PSBudWxsIHx8IHRhcmdldExpbmtVbnByZWZpeGVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXRMaW5rVW5wcmVmaXhlZC5yZXBsYWNlKCdwYXRobmFtZTovLycsICcnKTtcbiAgICAvLyBUT0RPIHdlIHNob3VsZCB1c2UgUmVhY3RSb3V0ZXIgYmFzZW5hbWUgZmVhdHVyZSBpbnN0ZWFkIVxuICAgIC8vIEF1dG9tYXRpY2FsbHkgYXBwbHkgYmFzZSB1cmwgaW4gbGlua3MgdGhhdCBzdGFydCB3aXRoIC9cbiAgICBsZXQgdGFyZ2V0TGluayA9IHR5cGVvZiB0YXJnZXRMaW5rV2l0aG91dFBhdGhuYW1lUHJvdG9jb2wgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbWF5YmVBZGRCYXNlVXJsKHRhcmdldExpbmtXaXRob3V0UGF0aG5hbWVQcm90b2NvbClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRhcmdldExpbmsgJiYgaXNJbnRlcm5hbCkge1xuICAgICAgICB0YXJnZXRMaW5rID0gYXBwbHlUcmFpbGluZ1NsYXNoKHRhcmdldExpbmssIHsgdHJhaWxpbmdTbGFzaCwgYmFzZVVybCB9KTtcbiAgICB9XG4gICAgY29uc3QgcHJlbG9hZGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBMaW5rQ29tcG9uZW50ID0gaXNOYXZMaW5rID8gTmF2TGluayA6IFJSTGluaztcbiAgICBjb25zdCBJT1N1cHBvcnRlZCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZUludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGxldCBpbztcbiAgICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb24gPSAoZWwsIGNiKSA9PiB7XG4gICAgICAgIGlvID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gZW50cnkudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQsIHN0b3AgbGlzdGVuaW5nL29ic2VydmluZyBhbmQgcnVuIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpby51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIGVsZW1lbnQgdG8gdGhlIG9ic2VydmVyLlxuICAgICAgICBpby5vYnNlcnZlKGVsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgaWYgKElPU3VwcG9ydGVkICYmIHJlZiAmJiBpc0ludGVybmFsKSB7XG4gICAgICAgICAgICAvLyBJZiBJTyBzdXBwb3J0ZWQgYW5kIGVsZW1lbnQgcmVmZXJlbmNlIGZvdW5kLCBzZXR1cCBPYnNlcnZlciBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgICAgaGFuZGxlSW50ZXJzZWN0aW9uKHJlZiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRMaW5rICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRvY3VzYXVydXMucHJlZmV0Y2godGFyZ2V0TGluayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFwcmVsb2FkZWQuY3VycmVudCAmJiB0YXJnZXRMaW5rICE9IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1c2F1cnVzLnByZWxvYWQodGFyZ2V0TGluayk7XG4gICAgICAgICAgICBwcmVsb2FkZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIElmIElPIGlzIG5vdCBzdXBwb3J0ZWQuIFdlIHByZWZldGNoIGJ5IGRlZmF1bHQgKG9ubHkgb25jZSkuXG4gICAgICAgIGlmICghSU9TdXBwb3J0ZWQgJiYgaXNJbnRlcm5hbCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldExpbmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1c2F1cnVzLnByZWZldGNoKHRhcmdldExpbmspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgc3RvcCBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgZnJvbSB3YXRjaGluZy5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChJT1N1cHBvcnRlZCAmJiBpbykge1xuICAgICAgICAgICAgICAgIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0TGluaywgSU9TdXBwb3J0ZWQsIGlzSW50ZXJuYWxdKTtcbiAgICBjb25zdCBpc0FuY2hvckxpbmsgPSAoX2EgPSB0YXJnZXRMaW5rID09PSBudWxsIHx8IHRhcmdldExpbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldExpbmsuc3RhcnRzV2l0aCgnIycpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcbiAgICBjb25zdCBpc1JlZ3VsYXJIdG1sTGluayA9ICF0YXJnZXRMaW5rIHx8ICFpc0ludGVybmFsIHx8IGlzQW5jaG9yTGluaztcbiAgICBpZiAodGFyZ2V0TGluayAmJiBpc0ludGVybmFsICYmICFpc0FuY2hvckxpbmsgJiYgIW5vQnJva2VuTGlua0NoZWNrKSB7XG4gICAgICAgIGxpbmtzQ29sbGVjdG9yLmNvbGxlY3RMaW5rKHRhcmdldExpbmspO1xuICAgIH1cbiAgICByZXR1cm4gaXNSZWd1bGFySHRtbExpbmsgPyAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogdGFyZ2V0TGluaywgLi4uKHRhcmdldExpbmtVbnByZWZpeGVkICYmXG4gICAgICAgICAgICAhaXNJbnRlcm5hbCAmJiB7IHRhcmdldDogJ19ibGFuaycsIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInIH0pLCAuLi5wcm9wcyB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rQ29tcG9uZW50LCB7IC4uLnByb3BzLCBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlciwgaW5uZXJSZWY6IGhhbmRsZVJlZiwgdG86IHRhcmdldExpbmsgfHwgJycsIC4uLihpc05hdkxpbmsgJiYgeyBpc0FjdGl2ZSwgYWN0aXZlQ2xhc3NOYW1lIH0pIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLypcbk1pbmltYWwgaW1wbGVtZW50YXRpb24gb2YgYSBSZWFjdCBpbnRlcnBvbGF0ZSBjb21wb25lbnQuXG5XZSBkb24ndCBzaGlwIGEgbWFya2Rvd24gcGFyc2VyIG5vciBhIGZlYXR1cmUtY29tcGxldGUgaTE4biBsaWJyYXJ5IG9uIHB1cnBvc2UuXG5Nb3JlIGRldGFpbHMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvcHVsbC80Mjk1XG4qL1xuY29uc3QgVmFsdWVSZWdleHAgPSAve1xcdyt9L2c7XG5jb25zdCBWYWx1ZUZvdW5kTWFya2VyID0gJ3t9JzsgLy8gZG9lcyBub3QgY2FyZSBtdWNoXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUodGV4dCwgdmFsdWVzKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICBjb25zdCBwcm9jZXNzZWRUZXh0ID0gdGV4dC5yZXBsYWNlKFZhbHVlUmVnZXhwLCAobWF0Y2gpID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIHt7IGFuZCB9fSBhcm91bmQgdGhlIHBsYWNlaG9sZGVyXG4gICAgICAgIGNvbnN0IGtleSA9IG1hdGNoLnN1YnN0cigxLCBtYXRjaC5sZW5ndGggLSAyKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXMgPT09IG51bGwgfHwgdmFsdWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5pc1ZhbGlkRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgOiAvLyBGb3Igbm9uLVJlYWN0IGVsZW1lbnRzOiBiYXNpYyBwcmltaXRpdmUtPnN0cmluZyBjb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlRm91bmRNYXJrZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIG5vIG1hdGNoPyBhZGQgd2FybmluZz9cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE5vIGludGVycG9sYXRpb24gdG8gYmUgZG9uZToganVzdCByZXR1cm4gdGhlIHRleHRcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICAvLyBCYXNpYyBzdHJpbmcgaW50ZXJwb2xhdGlvbjogcmV0dXJucyBpbnRlcnBvbGF0ZWQgc3RyaW5nXG4gICAgZWxzZSBpZiAoZWxlbWVudHMuZXZlcnkoKGVsKSA9PiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFxuICAgICAgICAgICAgLnNwbGl0KFZhbHVlRm91bmRNYXJrZXIpXG4gICAgICAgICAgICAucmVkdWNlKChzdHIsIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5jb25jYXQodmFsdWUpLmNvbmNhdCgoX2EgPSBlbGVtZW50c1tpbmRleF0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbiAgICAvLyBKU1ggaW50ZXJwb2xhdGlvbjogcmV0dXJucyBSZWFjdE5vZGVcbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFRleHRcbiAgICAgICAgICAgIC5zcGxpdChWYWx1ZUZvdW5kTWFya2VyKVxuICAgICAgICAgICAgLnJlZHVjZSgoYXJyYXksIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5hcnJheSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XSksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJwb2xhdGUoeyBjaGlsZHJlbiwgdmFsdWVzLCB9KSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlKGNoaWxkcmVuLCB2YWx1ZXMpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnRlcnBvbGF0ZSwgeyBpbnRlcnBvbGF0ZSwgfSBmcm9tICdAZG9jdXNhdXJ1cy9JbnRlcnBvbGF0ZSc7XG4vLyBDYW4ndCByZWFkIGl0IGZyb20gY29udGV4dCwgZHVlIHRvIGV4cG9zaW5nIGltcGVyYXRpdmUgQVBJXG5pbXBvcnQgY29kZVRyYW5zbGF0aW9ucyBmcm9tICdAZ2VuZXJhdGVkL2NvZGVUcmFuc2xhdGlvbnMnO1xuZnVuY3Rpb24gZ2V0TG9jYWxpemVkTWVzc2FnZSh7IGlkLCBtZXNzYWdlLCB9KSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBjb2RlVHJhbnNsYXRpb25zW2lkICE9PSBudWxsICYmIGlkICE9PSB2b2lkIDAgPyBpZCA6IG1lc3NhZ2VdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBtZXNzYWdlO1xufVxuLy8gSW1wZXJhdGl2ZSB0cmFuc2xhdGlvbiBBUEkgaXMgdXNlZnVsIGZvciBzb21lIGVkZ2UtY2FzZXM6XG4vLyAtIHRyYW5zbGF0aW5nIHBhZ2UgdGl0bGVzIChtZXRhKVxuLy8gLSB0cmFuc2xhdGluZyBzdHJpbmcgcHJvcHMgKGlucHV0IHBsYWNlaG9sZGVycywgaW1hZ2UgYWx0LCBhcmlhIGxhYmVscy4uLilcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoeyBtZXNzYWdlLCBpZCB9LCB2YWx1ZXMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9jYWxpemVkTWVzc2FnZSA9IChfYSA9IGdldExvY2FsaXplZE1lc3NhZ2UoeyBtZXNzYWdlLCBpZCB9KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWVzc2FnZTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGUobG9jYWxpemVkTWVzc2FnZSwgdmFsdWVzKTtcbn1cbi8vIE1heWJlIHdlJ2xsIHdhbnQgdG8gaW1wcm92ZSB0aGlzIGNvbXBvbmVudCB3aXRoIGFkZGl0aW9uYWwgZmVhdHVyZXNcbi8vIExpa2UgdG9nZ2xpbmcgYSB0cmFuc2xhdGlvbiBtb2RlIHRoYXQgYWRkcyBhIGxpdHRsZSB0cmFuc2xhdGlvbiBidXR0b24gbmVhciB0aGUgdGV4dD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zbGF0ZSh7IGNoaWxkcmVuLCBpZCwgdmFsdWVzLCB9KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvY2FsaXplZE1lc3NhZ2UgPSAoX2EgPSBnZXRMb2NhbGl6ZWRNZXNzYWdlKHsgbWVzc2FnZTogY2hpbGRyZW4sIGlkIH0pKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjaGlsZHJlbjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcnBvbGF0ZSwgeyB2YWx1ZXM6IHZhbHVlcyB9LCBsb2NhbGl6ZWRNZXNzYWdlKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcm90b2NvbCh1cmwpIHtcbiAgICByZXR1cm4gL14oXFx3Kjp8XFwvXFwvKS8udGVzdCh1cmwpID09PSB0cnVlO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJbnRlcm5hbFVybCh1cmwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHVybCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWhhc1Byb3RvY29sKHVybCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgKiBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICcuL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmltcG9ydCB7IGhhc1Byb3RvY29sIH0gZnJvbSAnLi9pc0ludGVybmFsVXJsJztcbmZ1bmN0aW9uIGFkZEJhc2VVcmwoc2l0ZVVybCwgYmFzZVVybCwgdXJsLCB7IGZvcmNlUHJlcGVuZEJhc2VVcmwgPSBmYWxzZSwgYWJzb2x1dGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyBpdCBuZXZlciBtYWtlcyBzZW5zZSB0byBhZGQgYSBiYXNlIHVybCB0byBhIGxvY2FsIGFuY2hvciB1cmxcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyBpdCBuZXZlciBtYWtlcyBzZW5zZSB0byBhZGQgYSBiYXNlIHVybCB0byBhbiB1cmwgd2l0aCBhIHByb3RvY29sXG4gICAgaWYgKGhhc1Byb3RvY29sKHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgaWYgKGZvcmNlUHJlcGVuZEJhc2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VVcmwgKyB1cmw7XG4gICAgfVxuICAgIC8vIFdlIHNob3VsZCBhdm9pZCBhZGRpbmcgdGhlIGJhc2V1cmwgdHdpY2UgaWYgaXQncyBhbHJlYWR5IHRoZXJlXG4gICAgY29uc3Qgc2hvdWxkQWRkQmFzZVVybCA9ICF1cmwuc3RhcnRzV2l0aChiYXNlVXJsKTtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHNob3VsZEFkZEJhc2VVcmwgPyBiYXNlVXJsICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykgOiB1cmw7XG4gICAgcmV0dXJuIGFic29sdXRlID8gc2l0ZVVybCArIGJhc2VQYXRoIDogYmFzZVBhdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVVybFV0aWxzKCkge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZzogeyBiYXNlVXJsID0gJy8nLCB1cmw6IHNpdGVVcmwgfSA9IHt9LCB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aXRoQmFzZVVybDogKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEJhc2VVcmwoc2l0ZVVybCwgYmFzZVVybCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFzZVVybCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgd2l0aEJhc2VVcmwgfSA9IHVzZUJhc2VVcmxVdGlscygpO1xuICAgIHJldHVybiB3aXRoQmFzZVVybCh1cmwsIG9wdGlvbnMpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuLy8gVE9ETyBhbm5veWluZyBjb25zdGFudCBkdXBsaWNhdGlvblxuLy8gaWYgd2UgaW1wb3J0IHNvbWV0aGluZyBmcm9tIG91dHNpZGUgdGhlIC9jbGllbnQgZm9sZGVyLFxuLy8gdGhlIHRzYyBkaXJlY3Rvcnkgc3RydWN0dXJlIGlzIGFmZmVjdGVkXG4vLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHbG9iYWxEYXRhKCkge1xuICAgIGNvbnN0IHsgZ2xvYmFsRGF0YSB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBpZiAoIWdsb2JhbERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2N1c2F1cnVzIGdsb2JhbCBkYXRhIG5vdCBmb3VuZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdsb2JhbERhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YShwbHVnaW5OYW1lKSB7XG4gICAgY29uc3QgZ2xvYmFsRGF0YSA9IHVzZUdsb2JhbERhdGEoKTtcbiAgICBjb25zdCBwbHVnaW5HbG9iYWxEYXRhID0gZ2xvYmFsRGF0YVtwbHVnaW5OYW1lXTtcbiAgICBpZiAoIXBsdWdpbkdsb2JhbERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb2N1c2F1cnVzIHBsdWdpbiBnbG9iYWwgZGF0YSBub3QgZm91bmQgZm9yIFwiJHtwbHVnaW5OYW1lfVwiIHBsdWdpbi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdWdpbkdsb2JhbERhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlUGx1Z2luRGF0YShwbHVnaW5OYW1lLCBwbHVnaW5JZCA9IERFRkFVTFRfUExVR0lOX0lEKSB7XG4gICAgY29uc3QgcGx1Z2luR2xvYmFsRGF0YSA9IHVzZUFsbFBsdWdpbkluc3RhbmNlc0RhdGEocGx1Z2luTmFtZSk7XG4gICAgY29uc3QgcGx1Z2luSW5zdGFuY2VHbG9iYWxEYXRhID0gcGx1Z2luR2xvYmFsRGF0YVtwbHVnaW5JZF07XG4gICAgaWYgKCFwbHVnaW5JbnN0YW5jZUdsb2JhbERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb2N1c2F1cnVzIHBsdWdpbiBnbG9iYWwgZGF0YSBub3QgZm91bmQgZm9yIFwiJHtwbHVnaW5OYW1lfVwiIHBsdWdpbiB3aXRoIGlkIFwiJHtwbHVnaW5JZH1cIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdWdpbkluc3RhbmNlR2xvYmFsRGF0YTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXREb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSBleHBvcnRzLmdldEFjdGl2ZURvY0NvbnRleHQgPSBleHBvcnRzLmdldEFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLmdldExhdGVzdFZlcnNpb24gPSBleHBvcnRzLmdldEFjdGl2ZVBsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IHJvdXRlcl8xID0gcmVxdWlyZShcIkBkb2N1c2F1cnVzL3JvdXRlclwiKTtcbmZ1bmN0aW9uIGdldEFjdGl2ZVBsdWdpbihhbGxQbHVnaW5EYXRhcywgcGF0aG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGFjdGl2ZUVudHJ5ID0gT2JqZWN0LmVudHJpZXMoYWxsUGx1Z2luRGF0YXMpLmZpbmQoKFtfaWQsIHBsdWdpbkRhdGFdKSA9PiB7XG4gICAgICAgIHJldHVybiAhIXJvdXRlcl8xLm1hdGNoUGF0aChwYXRobmFtZSwge1xuICAgICAgICAgICAgcGF0aDogcGx1Z2luRGF0YS5wYXRoLFxuICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWN0aXZlUGx1Z2luID0gYWN0aXZlRW50cnlcbiAgICAgICAgPyB7IHBsdWdpbklkOiBhY3RpdmVFbnRyeVswXSwgcGx1Z2luRGF0YTogYWN0aXZlRW50cnlbMV0gfVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWFjdGl2ZVBsdWdpbiAmJiBvcHRpb25zLmZhaWxmYXN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZmluZCBhY3RpdmUgZG9jcyBwbHVnaW4gZm9yIFwiJHtwYXRobmFtZX1cIiBwYXRobmFtZSwgd2hpbGUgaXQgd2FzIGV4cGVjdGVkIHRvIGJlIGZvdW5kLiBNYXliZSB5b3UgdHJpZWQgdG8gdXNlIGEgZG9jcyBmZWF0dXJlIHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIGRvY3MtcmVsYXRlZCBwYWdlPyBFeGlzdGluZyBkb2NzIHBsdWdpbiBwYXRocyBhcmU6ICR7T2JqZWN0LnZhbHVlcyhhbGxQbHVnaW5EYXRhcylcbiAgICAgICAgICAgIC5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLnBhdGgpXG4gICAgICAgICAgICAuam9pbignLCAnKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVBsdWdpbjtcbn1cbmV4cG9ydHMuZ2V0QWN0aXZlUGx1Z2luID0gZ2V0QWN0aXZlUGx1Z2luO1xuY29uc3QgZ2V0TGF0ZXN0VmVyc2lvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGRhdGEudmVyc2lvbnMuZmluZCgodmVyc2lvbikgPT4gdmVyc2lvbi5pc0xhc3QpO1xufTtcbmV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbiA9IGdldExhdGVzdFZlcnNpb247XG4vLyBOb3RlOiByZXR1cm4gdW5kZWZpbmVkIG9uIGRvYy11bnJlbGF0ZWQgcGFnZXMsXG4vLyBiZWNhdXNlIHRoZXJlJ3Mgbm8gdmVyc2lvbiBjdXJyZW50bHkgY29uc2lkZXJlZCBhcyBhY3RpdmVcbmNvbnN0IGdldEFjdGl2ZVZlcnNpb24gPSAoZGF0YSwgcGF0aG5hbWUpID0+IHtcbiAgICBjb25zdCBsYXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICAvLyBMYXN0IHZlcnNpb24gaXMgYSByb3V0ZSBsaWtlIC9kb2NzLyosXG4gICAgLy8gd2UgbmVlZCB0byB0cnkgdG8gbWF0Y2ggaXQgbGFzdCBvciBpdCB3b3VsZCBtYXRjaCAvZG9jcy92ZXJzaW9uLTEuMC8qIGFzIHdlbGxcbiAgICBjb25zdCBvcmRlcmVkVmVyc2lvbnNNZXRhZGF0YSA9IFtcbiAgICAgICAgLi4uZGF0YS52ZXJzaW9ucy5maWx0ZXIoKHZlcnNpb24pID0+IHZlcnNpb24gIT09IGxhc3RWZXJzaW9uKSxcbiAgICAgICAgbGFzdFZlcnNpb24sXG4gICAgXTtcbiAgICByZXR1cm4gb3JkZXJlZFZlcnNpb25zTWV0YWRhdGEuZmluZCgodmVyc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgICAgIHBhdGg6IHZlcnNpb24ucGF0aCxcbiAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuZ2V0QWN0aXZlVmVyc2lvbiA9IGdldEFjdGl2ZVZlcnNpb247XG5jb25zdCBnZXRBY3RpdmVEb2NDb250ZXh0ID0gKGRhdGEsIHBhdGhuYW1lKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IGV4cG9ydHMuZ2V0QWN0aXZlVmVyc2lvbihkYXRhLCBwYXRobmFtZSk7XG4gICAgY29uc3QgYWN0aXZlRG9jID0gYWN0aXZlVmVyc2lvbiA9PT0gbnVsbCB8fCBhY3RpdmVWZXJzaW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVWZXJzaW9uLmRvY3MuZmluZCgoZG9jKSA9PiAhIXJvdXRlcl8xLm1hdGNoUGF0aChwYXRobmFtZSwge1xuICAgICAgICBwYXRoOiBkb2MucGF0aCxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgfSkpO1xuICAgIGZ1bmN0aW9uIGdldEFsdGVybmF0ZVZlcnNpb25Eb2NzKGRvY0lkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBkYXRhLnZlcnNpb25zLmZvckVhY2goKHZlcnNpb24pID0+IHtcbiAgICAgICAgICAgIHZlcnNpb24uZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jLmlkID09PSBkb2NJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbdmVyc2lvbi5uYW1lXSA9IGRvYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IGFsdGVybmF0ZVZlcnNpb25Eb2NzID0gYWN0aXZlRG9jXG4gICAgICAgID8gZ2V0QWx0ZXJuYXRlVmVyc2lvbkRvY3MoYWN0aXZlRG9jLmlkKVxuICAgICAgICA6IHt9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZVZlcnNpb24sXG4gICAgICAgIGFjdGl2ZURvYyxcbiAgICAgICAgYWx0ZXJuYXRlRG9jVmVyc2lvbnM6IGFsdGVybmF0ZVZlcnNpb25Eb2NzLFxuICAgIH07XG59O1xuZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0ID0gZ2V0QWN0aXZlRG9jQ29udGV4dDtcbmNvbnN0IGdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyA9IChkYXRhLCBwYXRobmFtZSkgPT4ge1xuICAgIGNvbnN0IGxhdGVzdFZlcnNpb24gPSBleHBvcnRzLmdldExhdGVzdFZlcnNpb24oZGF0YSk7XG4gICAgY29uc3QgYWN0aXZlRG9jQ29udGV4dCA9IGV4cG9ydHMuZ2V0QWN0aXZlRG9jQ29udGV4dChkYXRhLCBwYXRobmFtZSk7XG4gICAgY29uc3QgbGF0ZXN0RG9jU3VnZ2VzdGlvbiA9IGFjdGl2ZURvY0NvbnRleHQgPT09IG51bGwgfHwgYWN0aXZlRG9jQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlRG9jQ29udGV4dC5hbHRlcm5hdGVEb2NWZXJzaW9uc1tsYXRlc3RWZXJzaW9uLm5hbWVdO1xuICAgIHJldHVybiB7IGxhdGVzdERvY1N1Z2dlc3Rpb24sIGxhdGVzdFZlcnNpb25TdWdnZXN0aW9uOiBsYXRlc3RWZXJzaW9uIH07XG59O1xuZXhwb3J0cy5nZXREb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSBnZXREb2NWZXJzaW9uU3VnZ2VzdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gZXhwb3J0cy51c2VBY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy51c2VBY3RpdmVWZXJzaW9uID0gZXhwb3J0cy51c2VMYXRlc3RWZXJzaW9uID0gZXhwb3J0cy51c2VWZXJzaW9ucyA9IGV4cG9ydHMudXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiA9IGV4cG9ydHMudXNlQWN0aXZlUGx1Z2luID0gZXhwb3J0cy51c2VEb2NzRGF0YSA9IGV4cG9ydHMudXNlQWxsRG9jc0RhdGEgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwiQGRvY3VzYXVydXMvcm91dGVyXCIpO1xuY29uc3QgdXNlR2xvYmFsRGF0YV8xID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcIkBkb2N1c2F1cnVzL3VzZUdsb2JhbERhdGFcIikpO1xuY29uc3QgZG9jc0NsaWVudFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L2RvY3NDbGllbnRVdGlsc1wiKTtcbi8vIEltcG9ydGFudCB0byB1c2UgYSBjb25zdGFudCBvYmplY3QgdG8gYXZvaWQgUmVhY3QgdXNlRWZmZWN0IGV4ZWN1dGlvbnMgZXRjLi4uLFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy81MDg5XG5jb25zdCBTdGFibGVFbXB0eU9iamVjdCA9IHt9O1xuLy8gTm90IHVzaW5nIHVzZUFsbFBsdWdpbkluc3RhbmNlc0RhdGEoKSBiZWNhdXNlIGluIGJsb2ctb25seSBtb2RlLCBkb2NzIGhvb2tzIGFyZSBzdGlsbCB1c2VkIGJ5IHRoZSB0aGVtZVxuLy8gV2UgbmVlZCBhIGZhaWwtc2FmZSBmYWxsYmFjayB3aGVuIHRoZSBkb2NzIHBsdWdpbiBpcyBub3QgaW4gdXNlXG5jb25zdCB1c2VBbGxEb2NzRGF0YSA9ICgpID0+IHsgdmFyIF9hOyBcbi8vIHVzZUFsbFBsdWdpbkluc3RhbmNlc0RhdGEoJ2RvY3VzYXVydXMtcGx1Z2luLWNvbnRlbnQtZG9jcycpO1xucmV0dXJuIChfYSA9IHVzZUdsb2JhbERhdGFfMS5kZWZhdWx0KClbJ2RvY3VzYXVydXMtcGx1Z2luLWNvbnRlbnQtZG9jcyddKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBTdGFibGVFbXB0eU9iamVjdDsgfTtcbmV4cG9ydHMudXNlQWxsRG9jc0RhdGEgPSB1c2VBbGxEb2NzRGF0YTtcbmNvbnN0IHVzZURvY3NEYXRhID0gKHBsdWdpbklkKSA9PiB1c2VHbG9iYWxEYXRhXzEudXNlUGx1Z2luRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJywgcGx1Z2luSWQpO1xuZXhwb3J0cy51c2VEb2NzRGF0YSA9IHVzZURvY3NEYXRhO1xuY29uc3QgdXNlQWN0aXZlUGx1Z2luID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZUFsbERvY3NEYXRhKCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gZG9jc0NsaWVudFV0aWxzXzEuZ2V0QWN0aXZlUGx1Z2luKGRhdGEsIHBhdGhuYW1lLCBvcHRpb25zKTtcbn07XG5leHBvcnRzLnVzZUFjdGl2ZVBsdWdpbiA9IHVzZUFjdGl2ZVBsdWdpbjtcbmNvbnN0IHVzZUFjdGl2ZVBsdWdpbkFuZFZlcnNpb24gPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUGx1Z2luID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4ob3B0aW9ucyk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICBpZiAoYWN0aXZlUGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZlcnNpb24gPSBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVWZXJzaW9uKGFjdGl2ZVBsdWdpbi5wbHVnaW5EYXRhLCBwYXRobmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmVQbHVnaW4sXG4gICAgICAgICAgICBhY3RpdmVWZXJzaW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmV4cG9ydHMudXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiA9IHVzZUFjdGl2ZVBsdWdpbkFuZFZlcnNpb247XG4vLyB2ZXJzaW9ucyBhcmUgcmV0dXJuZWQgb3JkZXJlZCAobW9zdCByZWNlbnQgZmlyc3QpXG5jb25zdCB1c2VWZXJzaW9ucyA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucztcbn07XG5leHBvcnRzLnVzZVZlcnNpb25zID0gdXNlVmVyc2lvbnM7XG5jb25zdCB1c2VMYXRlc3RWZXJzaW9uID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRMYXRlc3RWZXJzaW9uKGRhdGEpO1xufTtcbmV4cG9ydHMudXNlTGF0ZXN0VmVyc2lvbiA9IHVzZUxhdGVzdFZlcnNpb247XG4vLyBOb3RlOiByZXR1cm4gdW5kZWZpbmVkIG9uIGRvYy11bnJlbGF0ZWQgcGFnZXMsXG4vLyBiZWNhdXNlIHRoZXJlJ3Mgbm8gdmVyc2lvbiBjdXJyZW50bHkgY29uc2lkZXJlZCBhcyBhY3RpdmVcbmNvbnN0IHVzZUFjdGl2ZVZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gZG9jc0NsaWVudFV0aWxzXzEuZ2V0QWN0aXZlVmVyc2lvbihkYXRhLCBwYXRobmFtZSk7XG59O1xuZXhwb3J0cy51c2VBY3RpdmVWZXJzaW9uID0gdXNlQWN0aXZlVmVyc2lvbjtcbmNvbnN0IHVzZUFjdGl2ZURvY0NvbnRleHQgPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gZG9jc0NsaWVudFV0aWxzXzEuZ2V0QWN0aXZlRG9jQ29udGV4dChkYXRhLCBwYXRobmFtZSk7XG59O1xuZXhwb3J0cy51c2VBY3RpdmVEb2NDb250ZXh0ID0gdXNlQWN0aXZlRG9jQ29udGV4dDtcbi8vIFVzZWZ1bCB0byBzYXkgXCJoZXksIHlvdSBhcmUgbm90IG9uIHRoZSBsYXRlc3QgZG9jcyB2ZXJzaW9uLCBwbGVhc2Ugc3dpdGNoXCJcbmNvbnN0IHVzZURvY1ZlcnNpb25TdWdnZXN0aW9ucyA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXREb2NWZXJzaW9uU3VnZ2VzdGlvbnMoZGF0YSwgcGF0aG5hbWUpO1xufTtcbmV4cG9ydHMudXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gdXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0Bkb2N1c2F1cnVzL0xpbmsnO1xuaW1wb3J0IFRyYW5zbGF0ZSwge3RyYW5zbGF0ZX0gZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcblxuZnVuY3Rpb24gRG9jUGFnaW5hdG9yKHByb3BzKSB7XG4gIGNvbnN0IHttZXRhZGF0YX0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdiBkb2N1c2F1cnVzLW10LWxnXCJcbiAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSh7XG4gICAgICAgIGlkOiAndGhlbWUuZG9jcy5wYWdpbmF0b3IubmF2QXJpYUxhYmVsJyxcbiAgICAgICAgbWVzc2FnZTogJ0RvY3MgcGFnZXMgbmF2aWdhdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIEFSSUEgbGFiZWwgZm9yIHRoZSBkb2NzIHBhZ2luYXRpb24nLFxuICAgICAgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9faXRlbVwiPlxuICAgICAgICB7bWV0YWRhdGEucHJldmlvdXMgJiYgKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9fbGlua1wiXG4gICAgICAgICAgICB0bz17bWV0YWRhdGEucHJldmlvdXMucGVybWFsaW5rfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1uYXZfX3N1YmxhYmVsXCI+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLmRvY3MucGFnaW5hdG9yLnByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBsYWJlbCB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBkb2NcIj5cbiAgICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgJmxhcXVvOyB7bWV0YWRhdGEucHJldmlvdXMudGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1uYXZfX2l0ZW0gcGFnaW5hdGlvbi1uYXZfX2l0ZW0tLW5leHRcIj5cbiAgICAgICAge21ldGFkYXRhLm5leHQgJiYgKFxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmF2X19saW5rXCIgdG89e21ldGFkYXRhLm5leHQucGVybWFsaW5rfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1uYXZfX3N1YmxhYmVsXCI+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLmRvY3MucGFnaW5hdG9yLm5leHRcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGxhYmVsIHVzZWQgdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgZG9jXCI+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9fbGFiZWxcIj5cbiAgICAgICAgICAgICAge21ldGFkYXRhLm5leHQudGl0bGV9ICZyYXF1bztcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEb2NQYWdpbmF0b3I7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJ0Bkb2N1c2F1cnVzL0xpbmsnO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuaW1wb3J0IHt1c2VBY3RpdmVQbHVnaW4sIHVzZURvY1ZlcnNpb25TdWdnZXN0aW9uc30gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IHt1c2VEb2NzUHJlZmVycmVkVmVyc2lvbn0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcblxuZnVuY3Rpb24gVW5yZWxlYXNlZFZlcnNpb25MYWJlbCh7c2l0ZVRpdGxlLCB2ZXJzaW9uTWV0YWRhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5kb2NzLnZlcnNpb25zLnVucmVsZWFzZWRWZXJzaW9uTGFiZWxcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCB0byB0ZWxsIHRoZSB1c2VyIHRoYXQgaGUncyBicm93c2luZyBhbiB1bnJlbGVhc2VkIGRvYyB2ZXJzaW9uXCJcbiAgICAgIHZhbHVlcz17e1xuICAgICAgICBzaXRlVGl0bGUsXG4gICAgICAgIHZlcnNpb25MYWJlbDogPGI+e3ZlcnNpb25NZXRhZGF0YS5sYWJlbH08L2I+LFxuICAgICAgfX0+XG4gICAgICB7XG4gICAgICAgICdUaGlzIGlzIHVucmVsZWFzZWQgZG9jdW1lbnRhdGlvbiBmb3Ige3NpdGVUaXRsZX0ge3ZlcnNpb25MYWJlbH0gdmVyc2lvbi4nXG4gICAgICB9XG4gICAgPC9UcmFuc2xhdGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFVubWFpbnRhaW5lZFZlcnNpb25MYWJlbCh7c2l0ZVRpdGxlLCB2ZXJzaW9uTWV0YWRhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5kb2NzLnZlcnNpb25zLnVubWFpbnRhaW5lZFZlcnNpb25MYWJlbFwiXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoZSBsYWJlbCB1c2VkIHRvIHRlbGwgdGhlIHVzZXIgdGhhdCBoZSdzIGJyb3dzaW5nIGFuIHVubWFpbnRhaW5lZCBkb2MgdmVyc2lvblwiXG4gICAgICB2YWx1ZXM9e3tcbiAgICAgICAgc2l0ZVRpdGxlLFxuICAgICAgICB2ZXJzaW9uTGFiZWw6IDxiPnt2ZXJzaW9uTWV0YWRhdGEubGFiZWx9PC9iPixcbiAgICAgIH19PlxuICAgICAge1xuICAgICAgICAnVGhpcyBpcyBkb2N1bWVudGF0aW9uIGZvciB7c2l0ZVRpdGxlfSB7dmVyc2lvbkxhYmVsfSwgd2hpY2ggaXMgbm8gbG9uZ2VyIGFjdGl2ZWx5IG1haW50YWluZWQuJ1xuICAgICAgfVxuICAgIDwvVHJhbnNsYXRlPlxuICApO1xufVxuXG5jb25zdCBCYW5uZXJMYWJlbENvbXBvbmVudHMgPSB7XG4gIHVucmVsZWFzZWQ6IFVucmVsZWFzZWRWZXJzaW9uTGFiZWwsXG4gIHVubWFpbnRhaW5lZDogVW5tYWludGFpbmVkVmVyc2lvbkxhYmVsLFxufTtcblxuZnVuY3Rpb24gQmFubmVyTGFiZWwocHJvcHMpIHtcbiAgY29uc3QgQmFubmVyTGFiZWxDb21wb25lbnQgPVxuICAgIEJhbm5lckxhYmVsQ29tcG9uZW50c1twcm9wcy52ZXJzaW9uTWV0YWRhdGEuYmFubmVyXTtcbiAgcmV0dXJuIDxCYW5uZXJMYWJlbENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBMYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbkxhYmVsKHt2ZXJzaW9uTGFiZWwsIHRvLCBvbkNsaWNrfSkge1xuICByZXR1cm4gKFxuICAgIDxUcmFuc2xhdGVcbiAgICAgIGlkPVwidGhlbWUuZG9jcy52ZXJzaW9ucy5sYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbkxhYmVsXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGxhYmVsIHVzZWQgdG8gdGVsbCB0aGUgdXNlciB0byBjaGVjayB0aGUgbGF0ZXN0IHZlcnNpb25cIlxuICAgICAgdmFsdWVzPXt7XG4gICAgICAgIHZlcnNpb25MYWJlbCxcbiAgICAgICAgbGF0ZXN0VmVyc2lvbkxpbms6IChcbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXt0b30gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLmRvY3MudmVyc2lvbnMubGF0ZXN0VmVyc2lvbkxpbmtMYWJlbFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uIHN1Z2dlc3Rpb24gbGluayBsYWJlbFwiPlxuICAgICAgICAgICAgICAgIGxhdGVzdCB2ZXJzaW9uXG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvYj5cbiAgICAgICAgKSxcbiAgICAgIH19PlxuICAgICAge1xuICAgICAgICAnRm9yIHVwLXRvLWRhdGUgZG9jdW1lbnRhdGlvbiwgc2VlIHRoZSB7bGF0ZXN0VmVyc2lvbkxpbmt9ICh7dmVyc2lvbkxhYmVsfSkuJ1xuICAgICAgfVxuICAgIDwvVHJhbnNsYXRlPlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2NWZXJzaW9uQmFubmVyRW5hYmxlZCh7dmVyc2lvbk1ldGFkYXRhfSkge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge3RpdGxlOiBzaXRlVGl0bGV9LFxuICB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgY29uc3Qge3BsdWdpbklkfSA9IHVzZUFjdGl2ZVBsdWdpbih7XG4gICAgZmFpbGZhc3Q6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZlcnNpb25NYWluRG9jID0gKHZlcnNpb24pID0+XG4gICAgdmVyc2lvbi5kb2NzLmZpbmQoKGRvYykgPT4gZG9jLmlkID09PSB2ZXJzaW9uLm1haW5Eb2NJZCk7XG5cbiAgY29uc3Qge3NhdmVQcmVmZXJyZWRWZXJzaW9uTmFtZX0gPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCk7XG4gIGNvbnN0IHtcbiAgICBsYXRlc3REb2NTdWdnZXN0aW9uLFxuICAgIGxhdGVzdFZlcnNpb25TdWdnZXN0aW9uLFxuICB9ID0gdXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zKHBsdWdpbklkKTsgLy8gdHJ5IHRvIGxpbmsgdG8gc2FtZSBkb2MgaW4gbGF0ZXN0IHZlcnNpb24gKG5vdCBhbHdheXMgcG9zc2libGUpXG4gIC8vIGZhbGxiYWNrIHRvIG1haW4gZG9jIG9mIGxhdGVzdCB2ZXJzaW9uXG5cbiAgY29uc3QgbGF0ZXN0VmVyc2lvblN1Z2dlc3RlZERvYyA9XG4gICAgbGF0ZXN0RG9jU3VnZ2VzdGlvbiA/PyBnZXRWZXJzaW9uTWFpbkRvYyhsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC0td2FybmluZyBtYXJnaW4tYm90dG9tLS1tZFwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhbm5lckxhYmVsIHNpdGVUaXRsZT17c2l0ZVRpdGxlfSB2ZXJzaW9uTWV0YWRhdGE9e3ZlcnNpb25NZXRhZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tdG9wLS1tZFwiPlxuICAgICAgICA8TGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb25MYWJlbFxuICAgICAgICAgIHZlcnNpb25MYWJlbD17bGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb24ubGFiZWx9XG4gICAgICAgICAgdG89e2xhdGVzdFZlcnNpb25TdWdnZXN0ZWREb2MucGF0aH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUobGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb24ubmFtZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jVmVyc2lvbkJhbm5lcih7dmVyc2lvbk1ldGFkYXRhfSkge1xuICBpZiAodmVyc2lvbk1ldGFkYXRhLmJhbm5lciA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8RG9jVmVyc2lvbkJhbm5lckVuYWJsZWQgdmVyc2lvbk1ldGFkYXRhPXt2ZXJzaW9uTWV0YWRhdGF9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY1ZlcnNpb25CYW5uZXI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuXG5mdW5jdGlvbiBMYXN0VXBkYXRlZEF0RGF0ZSh7bGFzdFVwZGF0ZWRBdCwgZm9ybWF0dGVkTGFzdFVwZGF0ZWRBdH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNsYXRlXG4gICAgICBpZD1cInRoZW1lLmxhc3RVcGRhdGVkLmF0RGF0ZVwiXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3b3JkcyB1c2VkIHRvIGRlc2NyaWJlIG9uIHdoaWNoIGRhdGUgYSBwYWdlIGhhcyBiZWVuIGxhc3QgdXBkYXRlZFwiXG4gICAgICB2YWx1ZXM9e3tcbiAgICAgICAgZGF0ZTogKFxuICAgICAgICAgIDxiPlxuICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9e25ldyBEYXRlKGxhc3RVcGRhdGVkQXQgKiAxMDAwKS50b0lTT1N0cmluZygpfT5cbiAgICAgICAgICAgICAge2Zvcm1hdHRlZExhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgPC9iPlxuICAgICAgICApLFxuICAgICAgfX0+XG4gICAgICB7JyBvbiB7ZGF0ZX0nfVxuICAgIDwvVHJhbnNsYXRlPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXN0VXBkYXRlZEJ5VXNlcih7bGFzdFVwZGF0ZWRCeX0pIHtcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNsYXRlXG4gICAgICBpZD1cInRoZW1lLmxhc3RVcGRhdGVkLmJ5VXNlclwiXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3b3JkcyB1c2VkIHRvIGRlc2NyaWJlIGJ5IHdobyB0aGUgcGFnZSBoYXMgYmVlbiBsYXN0IHVwZGF0ZWRcIlxuICAgICAgdmFsdWVzPXt7XG4gICAgICAgIHVzZXI6IDxiPntsYXN0VXBkYXRlZEJ5fTwvYj4sXG4gICAgICB9fT5cbiAgICAgIHsnIGJ5IHt1c2VyfSd9XG4gICAgPC9UcmFuc2xhdGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhc3RVcGRhdGVkKHtcbiAgbGFzdFVwZGF0ZWRBdCxcbiAgZm9ybWF0dGVkTGFzdFVwZGF0ZWRBdCxcbiAgbGFzdFVwZGF0ZWRCeSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICBpZD1cInRoZW1lLmxhc3RVcGRhdGVkLmxhc3RVcGRhdGVkQXRCeVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHNlbnRlbmNlIHVzZWQgdG8gZGlzcGxheSB3aGVuIGEgcGFnZSBoYXMgYmVlbiBsYXN0IHVwZGF0ZWQsIGFuZCBieSB3aG9cIlxuICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICBhdERhdGU6XG4gICAgICAgICAgICBsYXN0VXBkYXRlZEF0ICYmIGZvcm1hdHRlZExhc3RVcGRhdGVkQXQgPyAoXG4gICAgICAgICAgICAgIDxMYXN0VXBkYXRlZEF0RGF0ZVxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkQXQ9e2xhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTGFzdFVwZGF0ZWRBdD17Zm9ybWF0dGVkTGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGJ5VXNlcjogbGFzdFVwZGF0ZWRCeSA/IChcbiAgICAgICAgICAgIDxMYXN0VXBkYXRlZEJ5VXNlciBsYXN0VXBkYXRlZEJ5PXtsYXN0VXBkYXRlZEJ5fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICksXG4gICAgICAgIH19PlxuICAgICAgICB7J0xhc3QgdXBkYXRlZHthdERhdGV9e2J5VXNlcn0nfVxuICAgICAgPC9UcmFuc2xhdGU+XG4gICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzbWFsbD4gKFNpbXVsYXRlZCBkdXJpbmcgZGV2IGZvciBiZXR0ZXIgcGVyZik8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlVE9DSGlnaGxpZ2h0KGxpbmtDbGFzc05hbWUsIGxpbmtBY3RpdmVDbGFzc05hbWUsIHRvcE9mZnNldCkge1xuICBjb25zdCBbbGFzdEFjdGl2ZUxpbmssIHNldExhc3RBY3RpdmVMaW5rXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlTGluaygpIHtcbiAgICAgIGZ1bmN0aW9uIGdldEFjdGl2ZUhlYWRlckFuY2hvcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyc0FuY2hvcnMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuY2hvcicpLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBmaXJzdEFuY2hvclVuZGVyVmlld3BvcnRUb3AgPSBoZWFkZXJzQW5jaG9ycy5maW5kKChhbmNob3IpID0+IHtcbiAgICAgICAgICBjb25zdCB7dG9wfSA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICByZXR1cm4gdG9wID49IHRvcE9mZnNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpcnN0QW5jaG9yVW5kZXJWaWV3cG9ydFRvcCkge1xuICAgICAgICAgIC8vIElmIGZpcnN0IGFuY2hvciBpbiB2aWV3cG9ydCBpcyB1bmRlciBhIGNlcnRhaW4gdGhyZXNob2xkLCB3ZSBjb25zaWRlciBpdCdzIG5vdCB0aGUgYWN0aXZlIGFuY2hvci5cbiAgICAgICAgICAvLyBJbiBzdWNoIGNhc2UsIHRoZSBhY3RpdmUgYW5jaG9yIGlzIHRoZSBwcmV2aW91cyBvbmUgKGlmIGl0IGV4aXN0cyksIHRoYXQgbWF5IGJlIGFib3ZlIHRoZSB2aWV3cG9ydFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGZpcnN0QW5jaG9yVW5kZXJWaWV3cG9ydFRvcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gdG9wT2Zmc2V0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0FuY2hvciA9XG4gICAgICAgICAgICAgIGhlYWRlcnNBbmNob3JzW1xuICAgICAgICAgICAgICAgIGhlYWRlcnNBbmNob3JzLmluZGV4T2YoZmlyc3RBbmNob3JVbmRlclZpZXdwb3J0VG9wKSAtIDFcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0FuY2hvciA/PyBmaXJzdEFuY2hvclVuZGVyVmlld3BvcnRUb3A7XG4gICAgICAgICAgfSAvLyBJZiB0aGUgYW5jaG9yIGlzIGF0IHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0LCB3ZSBjb25zaWRlciBpdCdzIHRoZSBmaXJzdCBhbmNob3JcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEFuY2hvclVuZGVyVmlld3BvcnRUb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIG5vIGFuY2hvciB1bmRlciB2aWV3cG9ydCB0b3A/IChpZSB3ZSBhcmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBsYXN0IGFuY2hvciBmb3VuZFxuICAgICAgICAgIHJldHVybiBoZWFkZXJzQW5jaG9yc1toZWFkZXJzQW5jaG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3RpdmVIZWFkZXJBbmNob3IgPSBnZXRBY3RpdmVIZWFkZXJBbmNob3IoKTtcblxuICAgICAgaWYgKGFjdGl2ZUhlYWRlckFuY2hvcikge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbUhpZ2hsaWdodGVkID0gZmFsc2U7IC8vIEB0cy1leHBlY3QtZXJyb3I6IE11c3QgYmUgPGE+IHRhZ3MuXG5cbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxpbmtDbGFzc05hbWUpO1xuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxpbmtzLmxlbmd0aCAmJiAhaXRlbUhpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCB7aHJlZn0gPSBsaW5rO1xuICAgICAgICAgIGNvbnN0IGFuY2hvclZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKCcjJykgKyAxKSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGFjdGl2ZUhlYWRlckFuY2hvci5pZCA9PT0gYW5jaG9yVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChsYXN0QWN0aXZlTGluaykge1xuICAgICAgICAgICAgICBsYXN0QWN0aXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKGxpbmtBY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQobGlua0FjdGl2ZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICBzZXRMYXN0QWN0aXZlTGluayhsaW5rKTtcbiAgICAgICAgICAgIGl0ZW1IaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEFjdGl2ZUxpbmspO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEFjdGl2ZUxpbmspO1xuICAgIHNldEFjdGl2ZUxpbmsoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0QWN0aXZlTGluayk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRBY3RpdmVMaW5rKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVE9DSGlnaGxpZ2h0O1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcInRhYmxlT2ZDb250ZW50c1wiOiBcInRhYmxlT2ZDb250ZW50c18zNS1FXCIsXG5cdFwiZG9jSXRlbUNvbnRhaW5lclwiOiBcImRvY0l0ZW1Db250YWluZXJfZ3BhaVwiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHVzZVRPQ0hpZ2hsaWdodCBmcm9tICdAdGhlbWUvaG9va3MvdXNlVE9DSGlnaGxpZ2h0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5jb25zdCBMSU5LX0NMQVNTX05BTUUgPSAndGFibGUtb2YtY29udGVudHNfX2xpbmsnO1xuY29uc3QgQUNUSVZFX0xJTktfQ0xBU1NfTkFNRSA9ICd0YWJsZS1vZi1jb250ZW50c19fbGluay0tYWN0aXZlJztcbmNvbnN0IFRPUF9PRkZTRVQgPSAxMDA7XG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jb250cm9sLWhhcy1hc3NvY2lhdGVkLWxhYmVsICovXG5cbmZ1bmN0aW9uIEhlYWRpbmdzKHt0b2MsIGlzQ2hpbGR9KSB7XG4gIGlmICghdG9jLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIGlzQ2hpbGQgPyAnJyA6ICd0YWJsZS1vZi1jb250ZW50cyB0YWJsZS1vZi1jb250ZW50c19fbGVmdC1ib3JkZXInXG4gICAgICB9PlxuICAgICAge3RvYy5tYXAoKGhlYWRpbmcpID0+IChcbiAgICAgICAgPGxpIGtleT17aGVhZGluZy5pZH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2AjJHtoZWFkaW5nLmlkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e0xJTktfQ0xBU1NfTkFNRX0gLy8gRGV2ZWxvcGVyIHByb3ZpZGVkIHRoZSBIVE1MLCBzbyBhc3N1bWUgaXQncyBzYWZlLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBoZWFkaW5nLnZhbHVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIZWFkaW5ncyBpc0NoaWxkIHRvYz17aGVhZGluZy5jaGlsZHJlbn0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFRPQyh7dG9jfSkge1xuICB1c2VUT0NIaWdobGlnaHQoTElOS19DTEFTU19OQU1FLCBBQ1RJVkVfTElOS19DTEFTU19OQU1FLCBUT1BfT0ZGU0VUKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudGFibGVPZkNvbnRlbnRzLCAndGhpbi1zY3JvbGxiYXInKX0+XG4gICAgICA8SGVhZGluZ3MgdG9jPXt0b2N9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRPQztcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJpY29uRWRpdFwiOiBcImljb25FZGl0XzJfdWlcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEljb25FZGl0ID0gKHtjbGFzc05hbWUsIC4uLnJlc3RQcm9wc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgdmlld0JveD1cIjAgMCA0MCA0MFwiXG4gICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmljb25FZGl0LCBjbGFzc05hbWUpfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJtMzQuNSAxMS43bC0zIDMuMS02LjMtNi4zIDMuMS0zcTAuNS0wLjUgMS4yLTAuNXQxLjEgMC41bDMuOSAzLjlxMC41IDAuNCAwLjUgMS4xdC0wLjUgMS4yeiBtLTI5LjUgMTcuMWwxOC40LTE4LjUgNi4zIDYuMy0xOC40IDE4LjRoLTYuM3YtNi4yelwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uRWRpdDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gJ0Bkb2N1c2F1cnVzL1RyYW5zbGF0ZSc7XG5pbXBvcnQgSWNvbkVkaXQgZnJvbSAnQHRoZW1lL0ljb25FZGl0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUaGlzUGFnZSh7ZWRpdFVybH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtlZGl0VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XG4gICAgICA8SWNvbkVkaXQgLz5cbiAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgaWQ9XCJ0aGVtZS5jb21tb24uZWRpdFRoaXNQYWdlXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGluayBsYWJlbCB0byBlZGl0IHRoZSBjdXJyZW50IHBhZ2VcIj5cbiAgICAgICAgRWRpdCB0aGlzIHBhZ2VcbiAgICAgIDwvVHJhbnNsYXRlPlxuICAgIDwvYT5cbiAgKTtcbn1cbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJkb2NJdGVtQ29udGFpbmVyXCI6IFwiZG9jSXRlbUNvbnRhaW5lcl8zM2VjXCIsXG5cdFwibGFzdFVwZGF0ZWRcIjogXCJsYXN0VXBkYXRlZF8zRFBGXCIsXG5cdFwiZG9jSXRlbUNvbFwiOiBcImRvY0l0ZW1Db2xfM0ZuU1wiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb2NQYWdpbmF0b3IgZnJvbSAnQHRoZW1lL0RvY1BhZ2luYXRvcic7XG5pbXBvcnQgRG9jVmVyc2lvbkJhbm5lciBmcm9tICdAdGhlbWUvRG9jVmVyc2lvbkJhbm5lcic7XG5pbXBvcnQgU2VvIGZyb20gJ0B0aGVtZS9TZW8nO1xuaW1wb3J0IExhc3RVcGRhdGVkIGZyb20gJ0B0aGVtZS9MYXN0VXBkYXRlZCc7XG5pbXBvcnQgVE9DIGZyb20gJ0B0aGVtZS9UT0MnO1xuaW1wb3J0IEVkaXRUaGlzUGFnZSBmcm9tICdAdGhlbWUvRWRpdFRoaXNQYWdlJztcbmltcG9ydCB7TWFpbkhlYWRpbmd9IGZyb20gJ0B0aGVtZS9IZWFkaW5nJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7dXNlQWN0aXZlUGx1Z2luLCB1c2VWZXJzaW9uc30gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuXG5mdW5jdGlvbiBEb2NJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHtjb250ZW50OiBEb2NDb250ZW50LCB2ZXJzaW9uTWV0YWRhdGF9ID0gcHJvcHM7XG4gIGNvbnN0IHttZXRhZGF0YSwgZnJvbnRNYXR0ZXJ9ID0gRG9jQ29udGVudDtcbiAgY29uc3Qge1xuICAgIGltYWdlLFxuICAgIGtleXdvcmRzLFxuICAgIGhpZGVfdGl0bGU6IGhpZGVUaXRsZSxcbiAgICBoaWRlX3RhYmxlX29mX2NvbnRlbnRzOiBoaWRlVGFibGVPZkNvbnRlbnRzLFxuICB9ID0gZnJvbnRNYXR0ZXI7XG4gIGNvbnN0IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0aXRsZSxcbiAgICBlZGl0VXJsLFxuICAgIGxhc3RVcGRhdGVkQXQsXG4gICAgZm9ybWF0dGVkTGFzdFVwZGF0ZWRBdCxcbiAgICBsYXN0VXBkYXRlZEJ5LFxuICB9ID0gbWV0YWRhdGE7XG4gIGNvbnN0IHtwbHVnaW5JZH0gPSB1c2VBY3RpdmVQbHVnaW4oe1xuICAgIGZhaWxmYXN0OiB0cnVlLFxuICB9KTtcbiAgY29uc3QgdmVyc2lvbnMgPSB1c2VWZXJzaW9ucyhwbHVnaW5JZCk7IC8vIElmIHNpdGUgaXMgbm90IHZlcnNpb25lZCBvciBvbmx5IG9uZSB2ZXJzaW9uIGlzIGluY2x1ZGVkXG4gIC8vIHdlIGRvbid0IHNob3cgdGhlIHZlcnNpb24gYmFkZ2VcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzYyXG5cbiAgY29uc3Qgc2hvd1ZlcnNpb25CYWRnZSA9IHZlcnNpb25zLmxlbmd0aCA+IDE7IC8vIFdlIG9ubHkgYWRkIGEgdGl0bGUgaWY6XG4gIC8vIC0gdXNlciBhc2tzIHRvIGhpZGUgaXQgd2l0aCBmcm9udG1hdHRlclxuICAvLyAtIHRoZSBtYXJrZG93biBjb250ZW50IGRvZXMgbm90IGFscmVhZHkgY29udGFpbiBhIHRvcC1sZXZlbCBoMSBoZWFkaW5nXG5cbiAgY29uc3Qgc2hvdWxkQWRkVGl0bGUgPVxuICAgICFoaWRlVGl0bGUgJiYgdHlwZW9mIERvY0NvbnRlbnQuY29udGVudFRpdGxlID09PSAndW5kZWZpbmVkJztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlb1xuICAgICAgICB7Li4ue1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGtleXdvcmRzLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29sJywge1xuICAgICAgICAgICAgW3N0eWxlcy5kb2NJdGVtQ29sXTogIWhpZGVUYWJsZU9mQ29udGVudHMsXG4gICAgICAgICAgfSl9PlxuICAgICAgICAgIDxEb2NWZXJzaW9uQmFubmVyIHZlcnNpb25NZXRhZGF0YT17dmVyc2lvbk1ldGFkYXRhfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jSXRlbUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAge3Nob3dWZXJzaW9uQmFkZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLS1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIFZlcnNpb246IHt2ZXJzaW9uTWV0YWRhdGEubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cbiAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICBUaXRsZSBjYW4gYmUgZGVjbGFyZWQgaW5zaWRlIG1kIGNvbnRlbnQgb3IgZGVjbGFyZWQgdGhyb3VnaCBmcm9udG1hdHRlciBhbmQgYWRkZWQgbWFudWFsbHlcbiAgICAgICAgICAgICAgICBUbyBtYWtlIGJvdGggY2FzZXMgY29uc2lzdGVudCwgdGhlIGFkZGVkIHRpdGxlIGlzIGFkZGVkIHVuZGVyIHRoZSBzYW1lIGRpdi5tYXJrZG93biBibG9ja1xuICAgICAgICAgICAgICAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9wdWxsLzQ4ODIjaXNzdWVjb21tZW50LTg1MzAyMTEyMFxuICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgIHtzaG91bGRBZGRUaXRsZSAmJiA8TWFpbkhlYWRpbmc+e3RpdGxlfTwvTWFpbkhlYWRpbmc+fVxuXG4gICAgICAgICAgICAgICAgPERvY0NvbnRlbnQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgeyhlZGl0VXJsIHx8IGxhc3RVcGRhdGVkQXQgfHwgbGFzdFVwZGF0ZWRCeSkgJiYgKFxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicm93IGRvY3VzYXVydXMtbXQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIHtlZGl0VXJsICYmIDxFZGl0VGhpc1BhZ2UgZWRpdFVybD17ZWRpdFVybH0gLz59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2NvbCcsIHN0eWxlcy5sYXN0VXBkYXRlZCl9PlxuICAgICAgICAgICAgICAgICAgICB7KGxhc3RVcGRhdGVkQXQgfHwgbGFzdFVwZGF0ZWRCeSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxMYXN0VXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWRBdD17bGFzdFVwZGF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZExhc3RVcGRhdGVkQXQ9e2Zvcm1hdHRlZExhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZEJ5PXtsYXN0VXBkYXRlZEJ5fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICAgICAgPERvY1BhZ2luYXRvciBtZXRhZGF0YT17bWV0YWRhdGF9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IWhpZGVUYWJsZU9mQ29udGVudHMgJiYgRG9jQ29udGVudC50b2MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0tM1wiPlxuICAgICAgICAgICAgPFRPQyB0b2M9e0RvY0NvbnRlbnQudG9jfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY0l0ZW07XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwiZW5oYW5jZWRBbmNob3JcIjogXCJlbmhhbmNlZEFuY2hvcl8yTFdaXCIsXG5cdFwiaDFIZWFkaW5nXCI6IFwiaDFIZWFkaW5nXzI3TDVcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50LCBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuaW1wb3J0IHt1c2VUaGVtZUNvbmZpZ30gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5leHBvcnQgY29uc3QgTWFpbkhlYWRpbmcgPSBmdW5jdGlvbiBNYWluSGVhZGluZyh7Li4ucHJvcHN9KSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGlkPXt1bmRlZmluZWR9IC8vIGgxIGhlYWRpbmdzIGRvIG5vdCBuZWVkIGFuIGlkIGJlY2F1c2UgdGhleSBkb24ndCBhcHBlYXIgaW4gdGhlIFRPQ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oMUhlYWRpbmd9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2gxPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuY29uc3QgY3JlYXRlQW5jaG9ySGVhZGluZyA9IChUYWcpID0+XG4gIGZ1bmN0aW9uIFRhcmdldENvbXBvbmVudCh7aWQsIC4uLnByb3BzfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hdmJhcjoge2hpZGVPblNjcm9sbH0sXG4gICAgfSA9IHVzZVRoZW1lQ29uZmlnKCk7XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gPFRhZyB7Li4ucHJvcHN9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGFnIHsuLi5wcm9wc30+XG4gICAgICAgIDxhXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhbmNob3InLCB7XG4gICAgICAgICAgICBbc3R5bGVzLmVuaGFuY2VkQW5jaG9yXTogIWhpZGVPblNjcm9sbCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgIC8+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJoYXNoLWxpbmtcIlxuICAgICAgICAgIGhyZWY9e2AjJHtpZH1gfVxuICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoe1xuICAgICAgICAgICAgaWQ6ICd0aGVtZS5jb21tb24uaGVhZGluZ0xpbmtUaXRsZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRGlyZWN0IGxpbmsgdG8gaGVhZGluZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciBsaW5rIHRvIGhlYWRpbmcnLFxuICAgICAgICAgIH0pfT5cbiAgICAgICAgICAjXG4gICAgICAgIDwvYT5cbiAgICAgIDwvVGFnPlxuICAgICk7XG4gIH07XG5cbmNvbnN0IEhlYWRpbmcgPSAoaGVhZGluZ1R5cGUpID0+IHtcbiAgcmV0dXJuIGhlYWRpbmdUeXBlID09PSAnaDEnID8gTWFpbkhlYWRpbmcgOiBjcmVhdGVBbmNob3JIZWFkaW5nKGhlYWRpbmdUeXBlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnQGRvY3VzYXVydXMvSGVhZCc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnLCB1c2VUaXRsZUZvcm1hdHRlcn0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCB1c2VCYXNlVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL3VzZUJhc2VVcmwnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VvKHt0aXRsZSwgZGVzY3JpcHRpb24sIGtleXdvcmRzLCBpbWFnZX0pIHtcbiAgY29uc3Qge2ltYWdlOiBkZWZhdWx0SW1hZ2V9ID0gdXNlVGhlbWVDb25maWcoKTtcbiAgY29uc3QgcGFnZVRpdGxlID0gdXNlVGl0bGVGb3JtYXR0ZXIodGl0bGUpO1xuICBjb25zdCBwYWdlSW1hZ2UgPSB1c2VCYXNlVXJsKGltYWdlIHx8IGRlZmF1bHRJbWFnZSwge1xuICAgIGFic29sdXRlOiB0cnVlLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIHt0aXRsZSAmJiA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPn1cbiAgICAgIHt0aXRsZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPn1cblxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+fVxuXG4gICAgICB7a2V5d29yZHMgJiYgKFxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgY29udGVudD17QXJyYXkuaXNBcnJheShrZXl3b3JkcykgPyBrZXl3b3Jkcy5qb2luKCcsJykgOiBrZXl3b3Jkc31cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtwYWdlSW1hZ2UgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3BhZ2VJbWFnZX0gLz59XG4gICAgICB7cGFnZUltYWdlICYmIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cGFnZUltYWdlfSAvPn1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vLyBSZS1leHBvc2UgdXNlRG9jc1xuLy8gRW5zdXJlIGl0J3MgYWx3YXlzIHN0YXRpY2FsbHkgYXZhaWxhYmxlIGV2ZW4gaWYgdXNlciBpcyBub3QgdXNpbmcgdGhlIGRvY3MgcGx1Z2luXG4vLyBQcm9ibGVtIHJlcG9ydGVkIGZvciB0aGUgYmxvZy1vbmx5IG1vZGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzYwXG5leHBvcnQgKiBmcm9tICdAZG9jdXNhdXJ1cy9wbHVnaW4tY29udGVudC1kb2NzL2xpYi90aGVtZS9ob29rcy91c2VEb2NzJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGhlbWVDb25maWcoKSB7XG4gICAgcmV0dXJuIHVzZURvY3VzYXVydXNDb250ZXh0KCkuc2l0ZUNvbmZpZy50aGVtZUNvbmZpZztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmNvbnN0IFN0b3JhZ2VUeXBlcyA9IFsnbG9jYWxTdG9yYWdlJywgJ3Nlc3Npb25TdG9yYWdlJywgJ25vbmUnXTtcbmNvbnN0IERlZmF1bHRTdG9yYWdlVHlwZSA9ICdsb2NhbFN0b3JhZ2UnO1xuLy8gV2lsbCByZXR1cm4gbnVsbCBicm93c2VyIHN0b3JhZ2UgaXMgdW5hdmFpbGFibGUgKGxpa2UgcnVubmluZyBEb2N1c2F1cnVzIGluIGlmcmFtZSlcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9wdWxsLzQ1MDFcbmZ1bmN0aW9uIGdldEJyb3dzZXJTdG9yYWdlKHN0b3JhZ2VUeXBlID0gRGVmYXVsdFN0b3JhZ2VUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlciBzdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgb24gTm9kZS5qcy9Eb2N1c2F1cnVzIFNTUiBwcm9jZXNzLicpO1xuICAgIH1cbiAgICBpZiAoc3RvcmFnZVR5cGUgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3N0b3JhZ2VUeXBlXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nT25jZUJyb3dzZXJTdG9yYWdlTm90QXZhaWxhYmxlV2FybmluZyhlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBQb29yIG1hbidzIG1lbW9pemF0aW9uIHRvIGF2b2lkIGxvZ2dpbmcgbXVsdGlwbGUgdGltZXMgdGhlIHNhbWUgd2FybmluZ1xuICogU29tZXRpbWVzLCBsb2NhbFN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2UgaXMgdW5hdmFpbGFibGUgZHVlIHRvIGJyb3dzZXIgcG9saWNpZXNcbiAqL1xubGV0IGhhc0xvZ2dlZEJyb3dzZXJTdG9yYWdlTm90QXZhaWxhYmxlV2FybmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gbG9nT25jZUJyb3dzZXJTdG9yYWdlTm90QXZhaWxhYmxlV2FybmluZyhlcnJvcikge1xuICAgIGlmICghaGFzTG9nZ2VkQnJvd3NlclN0b3JhZ2VOb3RBdmFpbGFibGVXYXJuaW5nKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRG9jdXNhdXJ1cyBicm93c2VyIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZS5cblBvc3NpYmxlIHJlYXNvbnM6IHJ1bm5pbmcgRG9jdXNhdXJ1cyBpbiBhbiBpZnJhbWUsIGluIGFuIGluY29nbml0byBicm93c2VyIHNlc3Npb24sIG9yIHVzaW5nIHRvbyBzdHJpY3QgYnJvd3NlciBwcml2YWN5IHNldHRpbmdzLmAsIGVycm9yKTtcbiAgICAgICAgaGFzTG9nZ2VkQnJvd3NlclN0b3JhZ2VOb3RBdmFpbGFibGVXYXJuaW5nID0gdHJ1ZTtcbiAgICB9XG59XG5jb25zdCBOb29wU3RvcmFnZVNsb3QgPSB7XG4gICAgZ2V0OiAoKSA9PiBudWxsLFxuICAgIHNldDogKCkgPT4geyB9LFxuICAgIGRlbDogKCkgPT4geyB9LFxufTtcbi8vICBGYWlsLWZhc3QsIGFzIHN0b3JhZ2UgQVBJcyBzaG91bGQgbm90IGJlIHVzZWQgZHVyaW5nIHRoZSBTU1IgcHJvY2Vzc1xuZnVuY3Rpb24gY3JlYXRlU2VydmVyU3RvcmFnZVNsb3Qoa2V5KSB7XG4gICAgZnVuY3Rpb24gdGhyb3dFcnJvcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIHN0b3JhZ2UgQVBJIHVzYWdlIGZvciBzdG9yYWdlIGtleSBcIiR7a2V5fVwiLlxuRG9jdXNhdXJ1cyBzdG9yYWdlIEFQSXMgYXJlIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb24gdGhlIHNlcnZlci1yZW5kZXJpbmcgcHJvY2Vzcy5cblBsZWFzZSBvbmx5IGNhbGwgc3RvcmFnZSBBUElzIGluIGVmZmVjdHMgYW5kIGV2ZW50IGhhbmRsZXJzLmApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IHRocm93RXJyb3IsXG4gICAgICAgIHNldDogdGhyb3dFcnJvcixcbiAgICAgICAgZGVsOiB0aHJvd0Vycm9yLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGZvciBhY2Nlc3NpbmcgYSBwYXJ0aWN1bGFyIGtleSBpbiBsb2NhbFN0b3JhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9yYWdlU2xvdCA9IChrZXksIG9wdGlvbnMpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNlcnZlclN0b3JhZ2VTbG90KGtleSk7XG4gICAgfVxuICAgIGNvbnN0IGJyb3dzZXJTdG9yYWdlID0gZ2V0QnJvd3NlclN0b3JhZ2Uob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnBlcnNpc3RlbmNlKTtcbiAgICBpZiAoYnJvd3NlclN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIE5vb3BTdG9yYWdlU2xvdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBicm93c2VyU3RvcmFnZS5nZXRJdGVtKGtleSksXG4gICAgICAgIHNldDogKHZhbHVlKSA9PiBicm93c2VyU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpLFxuICAgICAgICBkZWw6ICgpID0+IGJyb3dzZXJTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KSxcbiAgICB9O1xufTtcbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBrZXlzIGN1cnJlbnRseSBzdG9yZWQgaW4gYnJvd3NlciBzdG9yYWdlXG4gKiBvciBhbiBlbXB0eSBsaXN0IGlmIGJyb3dzZXIgc3RvcmFnZSBjYW4ndCBiZSBhY2Nlc3NlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RTdG9yYWdlS2V5cyhzdG9yYWdlVHlwZSA9IERlZmF1bHRTdG9yYWdlVHlwZSkge1xuICAgIGNvbnN0IGJyb3dzZXJTdG9yYWdlID0gZ2V0QnJvd3NlclN0b3JhZ2Uoc3RvcmFnZVR5cGUpO1xuICAgIGlmICghYnJvd3NlclN0b3JhZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicm93c2VyU3RvcmFnZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBicm93c2VyU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbi8vIFBlcm1pdHMgdG8gb2J0YWluIHRoZSB1cmwgb2YgdGhlIGN1cnJlbnQgcGFnZSBpbiBhbm90aGVyIGxvY2FsZVxuLy8gVXNlZnVsIHRvIGdlbmVyYXRlIGhyZWZsYW5nIG1ldGEgaGVhZGVycyBldGMuLi5cbi8vIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9zZWFyY2gvZG9jcy9hZHZhbmNlZC9jcmF3bGluZy9sb2NhbGl6ZWQtdmVyc2lvbnNcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbHRlcm5hdGVQYWdlVXRpbHMoKSB7XG4gICAgY29uc3QgeyBzaXRlQ29uZmlnOiB7IGJhc2VVcmwsIHVybCB9LCBpMThuOiB7IGRlZmF1bHRMb2NhbGUsIGN1cnJlbnRMb2NhbGUgfSwgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCBiYXNlVXJsVW5sb2NhbGl6ZWQgPSBjdXJyZW50TG9jYWxlID09PSBkZWZhdWx0TG9jYWxlXG4gICAgICAgID8gYmFzZVVybFxuICAgICAgICA6IGJhc2VVcmwucmVwbGFjZShgLyR7Y3VycmVudExvY2FsZX0vYCwgJy8nKTtcbiAgICBjb25zdCBwYXRobmFtZVN1ZmZpeCA9IHBhdGhuYW1lLnJlcGxhY2UoYmFzZVVybCwgJycpO1xuICAgIGZ1bmN0aW9uIGdldExvY2FsaXplZEJhc2VVcmwobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgID8gYCR7YmFzZVVybFVubG9jYWxpemVkfWBcbiAgICAgICAgICAgIDogYCR7YmFzZVVybFVubG9jYWxpemVkfSR7bG9jYWxlfS9gO1xuICAgIH1cbiAgICAvLyBUT0RPIHN1cHBvcnQgY29ycmVjdCBhbHRlcm5hdGUgdXJsIHdoZW4gbG9jYWxpemVkIHNpdGUgaXMgZGVwbG95ZWQgb24gYW5vdGhlciBkb21haW5cbiAgICBmdW5jdGlvbiBjcmVhdGVVcmwoeyBsb2NhbGUsIGZ1bGx5UXVhbGlmaWVkLCB9KSB7XG4gICAgICAgIHJldHVybiBgJHtmdWxseVF1YWxpZmllZCA/IHVybCA6ICcnfSR7Z2V0TG9jYWxpemVkQmFzZVVybChsb2NhbGUpfSR7cGF0aG5hbWVTdWZmaXh9YDtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3JlYXRlVXJsIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5jb25zdCBjb2RlQmxvY2tUaXRsZVJlZ2V4ID0gL3RpdGxlPShbXCInXSkoLio/KVxcMS87XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb2RlQmxvY2tUaXRsZShtZXRhc3RyaW5nKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKF9iID0gKF9hID0gbWV0YXN0cmluZyA9PT0gbnVsbCB8fCBtZXRhc3RyaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXRhc3RyaW5nLm1hdGNoKGNvZGVCbG9ja1RpdGxlUmVnZXgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMl0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VBUkNIX1RBRyA9ICdkZWZhdWx0JztcbmV4cG9ydCBmdW5jdGlvbiBkb2NWZXJzaW9uU2VhcmNoVGFnKHBsdWdpbklkLCB2ZXJzaW9uTmFtZSkge1xuICAgIHJldHVybiBgZG9jcy0ke3BsdWdpbklkfS0ke3ZlcnNpb25OYW1lfWA7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgeyB1c2VBbGxEb2NzRGF0YSB9IGZyb20gJ0B0aGVtZS9ob29rcy91c2VEb2NzJztcbi8vIFRPRE8gbm90IGlkZWFsLCBzZWUgYWxzbyBcInVzZURvY3NcIlxuZXhwb3J0IGNvbnN0IGlzRG9jc1BsdWdpbkVuYWJsZWQgPSAhIXVzZUFsbERvY3NEYXRhO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLy8gQ29tcGFyZSB0aGUgMiBwYXRocywgaWdub3JpbmcgdHJhaWxpbmcgL1xuZXhwb3J0IGNvbnN0IGlzU2FtZVBhdGggPSAocGF0aDEsIHBhdGgyKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplID0gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAhcGF0aG5hbWUgfHwgKHBhdGhuYW1lID09PSBudWxsIHx8IHBhdGhuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXRobmFtZS5lbmRzV2l0aCgnLycpKSA/IHBhdGhuYW1lIDogYCR7cGF0aG5hbWV9L2A7XG4gICAgfTtcbiAgICByZXR1cm4gbm9ybWFsaXplKHBhdGgxKSA9PT0gbm9ybWFsaXplKHBhdGgyKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuZXhwb3J0IGNvbnN0IHVzZVRpdGxlRm9ybWF0dGVyID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgeyBzaXRlQ29uZmlnID0ge30gfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gICAgY29uc3QgeyB0aXRsZTogc2l0ZVRpdGxlLCB0aXRsZURlbGltaXRlciA9ICd8JyB9ID0gc2l0ZUNvbmZpZztcbiAgICByZXR1cm4gdGl0bGUgJiYgdGl0bGUudHJpbSgpLmxlbmd0aFxuICAgICAgICA/IGAke3RpdGxlLnRyaW0oKX0gJHt0aXRsZURlbGltaXRlcn0gJHtzaXRlVGl0bGV9YFxuICAgICAgICA6IHNpdGVUaXRsZTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0Jztcbi8vIFdlIHdhbnQgdG8gZW5zdXJlciBhIHN0YWJsZSBwbHVyYWwgZm9ybSBvcmRlciBpbiBhbGwgY2FzZXNcbi8vIEl0IGlzIG1vcmUgY29udmVuaWVudCBhbmQgbmF0dXJhbCB0byBoYW5kbGUgXCJzbWFsbCB2YWx1ZXNcIiBmaXJzdFxuLy8gU2VlIGh0dHBzOi8vdHdpdHRlci5jb20vc2ViYXN0aWVubG9yYmVyL3N0YXR1cy8xMzY2ODIwNjYzMjYxMDc3NTEwXG5jb25zdCBPcmRlcmVkUGx1cmFsRm9ybXMgPSBbXG4gICAgJ3plcm8nLFxuICAgICdvbmUnLFxuICAgICd0d28nLFxuICAgICdmZXcnLFxuICAgICdtYW55JyxcbiAgICAnb3RoZXInLFxuXTtcbmZ1bmN0aW9uIHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxGb3Jtcykge1xuICAgIHJldHVybiBPcmRlcmVkUGx1cmFsRm9ybXMuZmlsdGVyKChwZikgPT4gcGx1cmFsRm9ybXMuaW5jbHVkZXMocGYpKTtcbn1cbi8vIEhhcmRjb2RlZCBlbmdsaXNoL2ZhbGxiYWNrIGltcGxlbWVudGF0aW9uXG5jb25zdCBFbmdsaXNoUGx1cmFsRm9ybXMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHBsdXJhbEZvcm1zOiBzb3J0UGx1cmFsRm9ybXMoWydvbmUnLCAnb3RoZXInXSksXG4gICAgc2VsZWN0OiAoY291bnQpID0+IChjb3VudCA9PT0gMSA/ICdvbmUnIDogJ290aGVyJyksXG59O1xuZnVuY3Rpb24gY3JlYXRlTG9jYWxlUGx1cmFsRm9ybXMobG9jYWxlKSB7XG4gICAgY29uc3QgcGx1cmFsUnVsZXMgPSBuZXcgSW50bC5QbHVyYWxSdWxlcyhsb2NhbGUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcGx1cmFsRm9ybXM6IHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxSdWxlcy5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzKSxcbiAgICAgICAgc2VsZWN0OiAoY291bnQpID0+IHBsdXJhbFJ1bGVzLnNlbGVjdChjb3VudCksXG4gICAgfTtcbn1cbi8vIFBvb3IgbWFuJ3MgUGx1cmFsU2VsZWN0b3IgaW1wbGVtZW50YXRpb24sIHVzaW5nIGFuIGVuZ2xpc2ggZmFsbGJhY2suXG4vLyBXZSB3YW50IGEgbGlnaHR3ZWlnaHQsIGZ1dHVyZS1wcm9vZiBhbmQgZ29vZC1lbm91Z2ggc29sdXRpb24uXG4vLyBXZSBkb24ndCB3YW50IGEgcGVyZmVjdCBhbmQgaGVhdnkgc29sdXRpb24uXG4vL1xuLy8gRG9jdXNhdXJ1cyBjbGFzc2ljIHRoZW1lIGhhcyBvbmx5IDIgZGVlcGx5IG5lc3RlZCBsYWJlbHMgcmVxdWlyaW5nIGNvbXBsZXggcGx1cmFsIHJ1bGVzXG4vLyBXZSBkb24ndCB3YW50IHRvIHVzZSBJbnRsICsgUGx1cmFsUnVsZXMgcG9seWZpbGxzICsgZnVsbCBJQ1Ugc3ludGF4IChyZWFjdC1pbnRsKSBqdXN0IGZvciB0aGF0LlxuLy9cbi8vIE5vdGVzOlxuLy8gLSAyMDIxOiA5MislIEJyb3dzZXJzIHN1cHBvcnQgSW50bC5QbHVyYWxSdWxlcywgYW5kIHN1cHBvcnQgd2lsbCBpbmNyZWFzZSBpbiB0aGUgZnV0dXJlXG4vLyAtIE5vZGVKUyA+PSAxMyBoYXMgZnVsbCBJQ1Ugc3VwcG9ydCBieSBkZWZhdWx0XG4vLyAtIEluIGNhc2Ugb2YgXCJtaXNtYXRjaFwiIGJldHdlZW4gU1NSIGFuZCBCcm93c2VyIElDVSBzdXBwb3J0LCBSZWFjdCBrZWVwcyB3b3JraW5nIVxuZnVuY3Rpb24gdXNlTG9jYWxlUGx1cmFsRm9ybXMoKSB7XG4gICAgY29uc3QgeyBpMThuOiB7IGN1cnJlbnRMb2NhbGUgfSwgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNoZWNraW5nIEludGwuUGx1cmFsUnVsZXMgaW4gY2FzZSBicm93c2VyIGRvZXNuJ3QgaGF2ZSBpdCAoZS5nIFNhZmFyaSAxMi0pXG4gICAgICAgIGlmIChJbnRsLlBsdXJhbFJ1bGVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbGVQbHVyYWxGb3JtcyhjdXJyZW50TG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHVzZSBJbnRsLlBsdXJhbFJ1bGVzIGZvciBsb2NhbGUgXCIke2N1cnJlbnRMb2NhbGV9XCIuXG5Eb2N1c2F1cnVzIHdpbGwgZmFsbGJhY2sgdG8gYSBkZWZhdWx0L2ZhbGxiYWNrIChFbmdsaXNoKSBJbnRsLlBsdXJhbFJ1bGVzIGltcGxlbWVudGF0aW9uLlxuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVuZ2xpc2hQbHVyYWxGb3JtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludGwuUGx1cmFsUnVsZXMgbm90IGF2YWlsYWJsZSFcbkRvY3VzYXVydXMgd2lsbCBmYWxsYmFjayB0byBhIGRlZmF1bHQvZmFsbGJhY2sgKEVuZ2xpc2gpIEludGwuUGx1cmFsUnVsZXMgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIGApO1xuICAgICAgICAgICAgcmV0dXJuIEVuZ2xpc2hQbHVyYWxGb3JtcztcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50TG9jYWxlXSk7XG59XG5mdW5jdGlvbiBzZWxlY3RQbHVyYWxNZXNzYWdlKHBsdXJhbE1lc3NhZ2VzLCBjb3VudCwgbG9jYWxlUGx1cmFsRm9ybXMpIHtcbiAgICBjb25zdCBzZXBhcmF0b3IgPSAnfCc7XG4gICAgY29uc3QgcGFydHMgPSBwbHVyYWxNZXNzYWdlcy5zcGxpdChzZXBhcmF0b3IpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IGxvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRm9yIGxvY2FsZT0ke2xvY2FsZVBsdXJhbEZvcm1zLmxvY2FsZX0sIGEgbWF4aW11bSBvZiAke2xvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zLmxlbmd0aH0gcGx1cmFsIGZvcm1zIGFyZSBleHBlY3RlZCAoJHtsb2NhbGVQbHVyYWxGb3Jtcy5wbHVyYWxGb3Jtc30pLCBidXQgdGhlIG1lc3NhZ2UgY29udGFpbnMgJHtwYXJ0cy5sZW5ndGh9IHBsdXJhbCBmb3JtczogJHtwbHVyYWxNZXNzYWdlc30gYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGx1cmFsRm9ybSA9IGxvY2FsZVBsdXJhbEZvcm1zLnNlbGVjdChjb3VudCk7XG4gICAgICAgIGNvbnN0IHBsdXJhbEZvcm1JbmRleCA9IGxvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zLmluZGV4T2YocGx1cmFsRm9ybSk7XG4gICAgICAgIC8vIEluIGNhc2Ugb2Ygbm90IGVub3VnaCBwbHVyYWwgZm9ybSBtZXNzYWdlcywgd2UgdGFrZSB0aGUgbGFzdCBvbmUgKG90aGVyKSBpbnN0ZWFkIG9mIHJldHVybmluZyB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHBhcnRzW01hdGgubWluKHBsdXJhbEZvcm1JbmRleCwgcGFydHMubGVuZ3RoIC0gMSldO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQbHVyYWxGb3JtKCkge1xuICAgIGNvbnN0IGxvY2FsZVBsdXJhbEZvcm0gPSB1c2VMb2NhbGVQbHVyYWxGb3JtcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdE1lc3NhZ2U6IChjb3VudCwgcGx1cmFsTWVzc2FnZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RQbHVyYWxNZXNzYWdlKHBsdXJhbE1lc3NhZ2VzLCBjb3VudCwgbG9jYWxlUGx1cmFsRm9ybSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAnLi91c2VQcmV2aW91cyc7XG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYXRpb25DaGFuZ2Uob25Mb2NhdGlvbkNoYW5nZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCBwcmV2aW91c0xvY2F0aW9uID0gdXNlUHJldmlvdXMobG9jYXRpb24pO1xuICAgIGNvbnN0IGlzRmlyc3QgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCBmaXJzdCBlZmZlY3QgdG8gdHJpZ2dlciB0aGUgbGlzdGVuZXIgb24gbW91bnRcbiAgICAgICAgaWYgKGlzRmlyc3QuY3VycmVudCkge1xuICAgICAgICAgICAgaXNGaXJzdC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2NhdGlvbkNoYW5nZSh7XG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIHByZXZpb3VzTG9jYXRpb24sXG4gICAgICAgIH0pO1xuICAgIH0sIFtsb2NhdGlvbl0pO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHsgY3JlYXRlU3RvcmFnZVNsb3QgfSBmcm9tICcuLi9zdG9yYWdlVXRpbHMnO1xuY29uc3Qgc3RvcmFnZUtleSA9IChwbHVnaW5JZCkgPT4gYGRvY3MtcHJlZmVycmVkLXZlcnNpb24tJHtwbHVnaW5JZH1gO1xuY29uc3QgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlID0ge1xuICAgIHNhdmU6IChwbHVnaW5JZCwgcGVyc2lzdGVuY2UsIHZlcnNpb25OYW1lKSA9PiB7XG4gICAgICAgIGNyZWF0ZVN0b3JhZ2VTbG90KHN0b3JhZ2VLZXkocGx1Z2luSWQpLCB7IHBlcnNpc3RlbmNlIH0pLnNldCh2ZXJzaW9uTmFtZSk7XG4gICAgfSxcbiAgICByZWFkOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTdG9yYWdlU2xvdChzdG9yYWdlS2V5KHBsdWdpbklkKSwgeyBwZXJzaXN0ZW5jZSB9KS5nZXQoKTtcbiAgICB9LFxuICAgIGNsZWFyOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlKSA9PiB7XG4gICAgICAgIGNyZWF0ZVN0b3JhZ2VTbG90KHN0b3JhZ2VLZXkocGx1Z2luSWQpLCB7IHBlcnNpc3RlbmNlIH0pLmRlbCgpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWVDb25maWcgfSBmcm9tICcuLi91c2VUaGVtZUNvbmZpZyc7XG5pbXBvcnQgeyBpc0RvY3NQbHVnaW5FbmFibGVkIH0gZnJvbSAnLi4vZG9jc1V0aWxzJztcbmltcG9ydCB7IHVzZUFsbERvY3NEYXRhIH0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZSBmcm9tICcuL0RvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZSc7XG4vLyBJbml0aWFsIHN0YXRlIGlzIGFsd2F5cyBudWxsIGFzIHdlIGNhbid0IHJlYWQgbG9jYWxzdG9yYWdlIGZyb20gbm9kZSBTU1JcbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpIHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBwbHVnaW5JZHMuZm9yRWFjaCgocGx1Z2luSWQpID0+IHtcbiAgICAgICAgaW5pdGlhbFN0YXRlW3BsdWdpbklkXSA9IHtcbiAgICAgICAgICAgIHByZWZlcnJlZFZlcnNpb25OYW1lOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG4vLyBSZWFkIHN0b3JhZ2UgZm9yIGFsbCBkb2NzIHBsdWdpbnNcbi8vIEFzc2lnbiB0byBlYWNoIGRvYyBwbHVnaW4gYSBwcmVmZXJyZWQgdmVyc2lvbiAoaWYgZm91bmQpXG5mdW5jdGlvbiByZWFkU3RvcmFnZVN0YXRlKHsgcGx1Z2luSWRzLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIGFsbERvY3NEYXRhLCB9KSB7XG4gICAgLy8gVGhlIHN0b3JhZ2UgdmFsdWUgd2UgcmVhZCBtaWdodCBiZSBzdGFsZSxcbiAgICAvLyBhbmQgYmVsb25nIHRvIGEgdmVyc2lvbiB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSBzaXRlIGFueW1vcmVcbiAgICAvLyBJbiBzdWNoIGNhc2UsIHdlIHJlbW92ZSB0aGUgc3RvcmFnZSB2YWx1ZSB0byBhdm9pZCBkb3duc3RyZWFtIGVycm9yc1xuICAgIGZ1bmN0aW9uIHJlc3RvcmVQbHVnaW5TdGF0ZShwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSA9IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZS5yZWFkKHBsdWdpbklkLCB2ZXJzaW9uUGVyc2lzdGVuY2UpO1xuICAgICAgICBjb25zdCBwbHVnaW5EYXRhID0gYWxsRG9jc0RhdGFbcGx1Z2luSWRdO1xuICAgICAgICBjb25zdCB2ZXJzaW9uRXhpc3RzID0gcGx1Z2luRGF0YS52ZXJzaW9ucy5zb21lKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLm5hbWUgPT09IHByZWZlcnJlZFZlcnNpb25OYW1lVW5zYWZlKTtcbiAgICAgICAgaWYgKHZlcnNpb25FeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHByZWZlcnJlZFZlcnNpb25OYW1lOiBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlLmNsZWFyKHBsdWdpbklkLCB2ZXJzaW9uUGVyc2lzdGVuY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHsgcHJlZmVycmVkVmVyc2lvbk5hbWU6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBwbHVnaW5JZHMuZm9yRWFjaCgocGx1Z2luSWQpID0+IHtcbiAgICAgICAgaW5pdGlhbFN0YXRlW3BsdWdpbklkXSA9IHJlc3RvcmVQbHVnaW5TdGF0ZShwbHVnaW5JZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cbmZ1bmN0aW9uIHVzZVZlcnNpb25QZXJzaXN0ZW5jZSgpIHtcbiAgICByZXR1cm4gdXNlVGhlbWVDb25maWcoKS5kb2NzLnZlcnNpb25QZXJzaXN0ZW5jZTtcbn1cbi8vIFZhbHVlIHRoYXQgIHdpbGwgYmUgYWNjZXNzaWJsZSB0aHJvdWdoIGNvbnRleHQ6IFtzdGF0ZSxhcGldXG5mdW5jdGlvbiB1c2VDb250ZXh0VmFsdWUoKSB7XG4gICAgY29uc3QgYWxsRG9jc0RhdGEgPSB1c2VBbGxEb2NzRGF0YSgpO1xuICAgIGNvbnN0IHZlcnNpb25QZXJzaXN0ZW5jZSA9IHVzZVZlcnNpb25QZXJzaXN0ZW5jZSgpO1xuICAgIGNvbnN0IHBsdWdpbklkcyA9IHVzZU1lbW8oKCkgPT4gT2JqZWN0LmtleXMoYWxsRG9jc0RhdGEpLCBbYWxsRG9jc0RhdGFdKTtcbiAgICAvLyBJbml0aWFsIHN0YXRlIGlzIGVtcHR5LCBhcyAgd2UgY2FuJ3QgcmVhZCBicm93c2VyIHN0b3JhZ2UgaW4gbm9kZS9TU1JcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpKTtcbiAgICAvLyBPbiBtb3VudCwgd2Ugc2V0IHRoZSBzdGF0ZSByZWFkIGZyb20gYnJvd3NlciBzdG9yYWdlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhdGUocmVhZFN0b3JhZ2VTdGF0ZSh7IGFsbERvY3NEYXRhLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIHBsdWdpbklkcyB9KSk7XG4gICAgfSwgW2FsbERvY3NEYXRhLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIHBsdWdpbklkc10pO1xuICAgIC8vIFRoZSBBUEkgdGhhdCB3ZSBleHBvc2UgdG8gY29uc3VtZXIgaG9va3MgKG1lbW8gZm9yIGNvbnN0YW50IG9iamVjdClcbiAgICBjb25zdCBhcGkgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQsIHZlcnNpb25OYW1lKSB7XG4gICAgICAgICAgICBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2Uuc2F2ZShwbHVnaW5JZCwgdmVyc2lvblBlcnNpc3RlbmNlLCB2ZXJzaW9uTmFtZSk7XG4gICAgICAgICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgICAgIFtwbHVnaW5JZF06IHsgcHJlZmVycmVkVmVyc2lvbk5hbWU6IHZlcnNpb25OYW1lIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNhdmVQcmVmZXJyZWRWZXJzaW9uLFxuICAgICAgICB9O1xuICAgIH0sIFtzZXRTdGF0ZV0pO1xuICAgIHJldHVybiBbc3RhdGUsIGFwaV07XG59XG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCB9KSB7XG4gICAgaWYgKGlzRG9jc1BsdWdpbkVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyVW5zYWZlLCBudWxsLCBjaGlsZHJlbikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG59XG5mdW5jdGlvbiBEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlclVuc2FmZSh7IGNoaWxkcmVuLCB9KSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dFZhbHVlKCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGZpbmQgZG9jcyBwcmVmZXJyZWQgY29udGV4dCwgbWF5YmUgeW91IGZvcmdvdCB0byB1c2UgdGhlIFwiRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJcIj8nKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLypcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmV4cG9ydCB7XG4gIC8vIGNvbnN0YW50cyB3ZXJlIG9ubHkgYXZhaWxhYmxlIG9uIG5vZGVcbiAgLy8gdGhpcyBtYWtlcyBzb21lIHVzZWZ1bCBjb25zdGFudHMgYXZhaWxhYmxlIHRvIGZyb250ZW5kL3RoZW1lcyB0b29cbiAgLy8gaW1wb3J0IHtERUZBVUxUX1BMVUdJTl9JRH0gJ0Bkb2N1c2F1cnVzL2NvbnN0YW50cydcbiAgREVGQVVMVF9QTFVHSU5fSUQsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG4gKi9cbi8vIE5vdCBkdXBsaWNhdGluZyB0aGUgY29uc3RhbnRzIHNlZW1zIHRvIHByb2R1Y2Vcbi8vIHdlaXJkIFRTIGNvbXBpbGF0aW9uIHNpZGUtZWZmZWN0c1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUExVR0lOX0lEID0gJ2RlZmF1bHQnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQgfSBmcm9tICcuL0RvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlQWxsRG9jc0RhdGEsIHVzZURvY3NEYXRhIH0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IHsgREVGQVVMVF9QTFVHSU5fSUQgfSBmcm9tICdAZG9jdXNhdXJ1cy9jb25zdGFudHMnO1xuLy8gVE9ETyBpbXByb3ZlIHR5cGluZ1xuLy8gTm90ZSwgdGhlIHByZWZlcnJlZFZlcnNpb24gYXR0cmlidXRlIHdpbGwgYWx3YXlzIGJlIG51bGwgYmVmb3JlIG1vdW50XG5leHBvcnQgZnVuY3Rpb24gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQgPSBERUZBVUxUX1BMVUdJTl9JRCkge1xuICAgIGNvbnN0IGRvY3NEYXRhID0gdXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IFtzdGF0ZSwgYXBpXSA9IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCgpO1xuICAgIGNvbnN0IHsgcHJlZmVycmVkVmVyc2lvbk5hbWUgfSA9IHN0YXRlW3BsdWdpbklkXTtcbiAgICBjb25zdCBwcmVmZXJyZWRWZXJzaW9uID0gcHJlZmVycmVkVmVyc2lvbk5hbWVcbiAgICAgICAgPyBkb2NzRGF0YS52ZXJzaW9ucy5maW5kKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLm5hbWUgPT09IHByZWZlcnJlZFZlcnNpb25OYW1lKVxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3Qgc2F2ZVByZWZlcnJlZFZlcnNpb25OYW1lID0gdXNlQ2FsbGJhY2soKHZlcnNpb25OYW1lKSA9PiB7XG4gICAgICAgIGFwaS5zYXZlUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCwgdmVyc2lvbk5hbWUpO1xuICAgIH0sIFthcGldKTtcbiAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uLCBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQoKSB7XG4gICAgY29uc3QgYWxsRG9jc0RhdGEgPSB1c2VBbGxEb2NzRGF0YSgpO1xuICAgIGNvbnN0IFtzdGF0ZV0gPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQoKTtcbiAgICBmdW5jdGlvbiBnZXRQbHVnaW5JZFByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQpIHtcbiAgICAgICAgY29uc3QgZG9jc0RhdGEgPSBhbGxEb2NzRGF0YVtwbHVnaW5JZF07XG4gICAgICAgIGNvbnN0IHsgcHJlZmVycmVkVmVyc2lvbk5hbWUgfSA9IHN0YXRlW3BsdWdpbklkXTtcbiAgICAgICAgcmV0dXJuIHByZWZlcnJlZFZlcnNpb25OYW1lXG4gICAgICAgICAgICA/IGRvY3NEYXRhLnZlcnNpb25zLmZpbmQoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSA9PT0gcHJlZmVycmVkVmVyc2lvbk5hbWUpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHBsdWdpbklkcyA9IE9iamVjdC5rZXlzKGFsbERvY3NEYXRhKTtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBwbHVnaW5JZHMuZm9yRWFjaCgocGx1Z2luSWQpID0+IHtcbiAgICAgICAgcmVzdWx0W3BsdWdpbklkXSA9IGdldFBsdWdpbklkUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8vIFRoZXNlIGNsYXNzIG5hbWVzIGFyZSB1c2VkIHRvIHN0eWxlIHBhZ2UgbGF5b3V0cyBpbiBEb2N1c2F1cnVzXG5leHBvcnQgY29uc3QgVGhlbWVDbGFzc05hbWVzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgYmxvZ0xpc3RQYWdlOiAnYmxvZy1saXN0LXBhZ2UnLFxuICAgICAgICBibG9nUG9zdFBhZ2U6ICdibG9nLXBvc3QtcGFnZScsXG4gICAgICAgIGJsb2dUYWdzTGlzdFBhZ2U6ICdibG9nLXRhZ3MtbGlzdC1wYWdlJyxcbiAgICAgICAgYmxvZ1RhZ3NQb3N0UGFnZTogJ2Jsb2ctdGFncy1wb3N0LXBhZ2UnLFxuICAgICAgICBkb2NQYWdlOiAnZG9jLXBhZ2UnLFxuICAgICAgICBtZHhQYWdlOiAnbWR4LXBhZ2UnLFxuICAgIH0sXG4gICAgd3JhcHBlcjoge1xuICAgICAgICBtYWluOiAnbWFpbi13cmFwcGVyJyxcbiAgICAgICAgYmxvZ1BhZ2VzOiAnYmxvZy13cmFwcGVyJyxcbiAgICAgICAgZG9jUGFnZXM6ICdkb2NzLXdyYXBwZXInLFxuICAgICAgICBtZHhQYWdlczogJ21keC13cmFwcGVyJyxcbiAgICB9LFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmFnZVNsb3QgfSBmcm9tICcuL3N0b3JhZ2VVdGlscyc7XG5pbXBvcnQgeyB1c2VUaGVtZUNvbmZpZyB9IGZyb20gJy4vdXNlVGhlbWVDb25maWcnO1xuZXhwb3J0IGNvbnN0IEFubm91bmNlbWVudEJhckRpc21pc3NTdG9yYWdlS2V5ID0gJ2RvY3VzYXVydXMuYW5ub3VuY2VtZW50LmRpc21pc3MnO1xuY29uc3QgQW5ub3VuY2VtZW50QmFySWRTdG9yYWdlS2V5ID0gJ2RvY3VzYXVydXMuYW5ub3VuY2VtZW50LmlkJztcbmNvbnN0IEFubm91bmNlbWVudEJhckRpc21pc3NTdG9yYWdlID0gY3JlYXRlU3RvcmFnZVNsb3QoQW5ub3VuY2VtZW50QmFyRGlzbWlzc1N0b3JhZ2VLZXkpO1xuY29uc3QgSWRTdG9yYWdlID0gY3JlYXRlU3RvcmFnZVNsb3QoQW5ub3VuY2VtZW50QmFySWRTdG9yYWdlS2V5KTtcbmNvbnN0IGlzRGlzbWlzc2VkSW5TdG9yYWdlID0gKCkgPT4gQW5ub3VuY2VtZW50QmFyRGlzbWlzc1N0b3JhZ2UuZ2V0KCkgPT09ICd0cnVlJztcbmNvbnN0IHNldERpc21pc3NlZEluU3RvcmFnZSA9IChib29sKSA9PiBBbm5vdW5jZW1lbnRCYXJEaXNtaXNzU3RvcmFnZS5zZXQoU3RyaW5nKGJvb2wpKTtcbmNvbnN0IHVzZUFubm91bmNlbWVudEJhckNvbnRleHRWYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFubm91bmNlbWVudEJhciB9ID0gdXNlVGhlbWVDb25maWcoKTtcbiAgICBjb25zdCB7IGlzQ2xpZW50IH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICAgIGNvbnN0IFtpc0Nsb3NlZCwgc2V0Q2xvc2VkXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlzQ2xpZW50XG4gICAgICAgICAgICA/IC8vIE9uIGNsaWVudCBuYXZpZ2F0aW9uOiBpbml0IHdpdGggbG9jYWxzdG9yYWdlIHZhbHVlXG4gICAgICAgICAgICAgICAgaXNEaXNtaXNzZWRJblN0b3JhZ2UoKVxuICAgICAgICAgICAgOiAvLyBPbiBzZXJ2ZXIvaHlkcmF0aW9uOiBhbHdheXMgdmlzaWJsZSB0byBwcmV2ZW50IGxheW91dCBzaGlmdHMgKHdpbGwgYmUgaGlkZGVuIHdpdGggY3NzIGlmIG5lZWRlZClcbiAgICAgICAgICAgICAgICBmYWxzZTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGUgc3RhdGUgYWZ0ZXIgaHlkcmF0aW9uXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2xvc2VkKGlzRGlzbWlzc2VkSW5TdG9yYWdlKCkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0RGlzbWlzc2VkSW5TdG9yYWdlKHRydWUpO1xuICAgICAgICBzZXRDbG9zZWQodHJ1ZSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghYW5ub3VuY2VtZW50QmFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gYW5ub3VuY2VtZW50QmFyO1xuICAgICAgICBsZXQgdmlld2VkSWQgPSBJZFN0b3JhZ2UuZ2V0KCk7XG4gICAgICAgIC8vIHJldHJvY29tcGF0aWJpbGl0eSBkdWUgdG8gc3BlbGxpbmcgbWlzdGFrZSBvZiBkZWZhdWx0IGlkXG4gICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzMzOFxuICAgICAgICBpZiAodmlld2VkSWQgPT09ICdhbm5vdWNlbWVudC1iYXInKSB7XG4gICAgICAgICAgICB2aWV3ZWRJZCA9ICdhbm5vdW5jZW1lbnQtYmFyJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc05ld0Fubm91bmNlbWVudCA9IGlkICE9PSB2aWV3ZWRJZDtcbiAgICAgICAgSWRTdG9yYWdlLnNldChpZCk7XG4gICAgICAgIGlmIChpc05ld0Fubm91bmNlbWVudCkge1xuICAgICAgICAgICAgc2V0RGlzbWlzc2VkSW5TdG9yYWdlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZXdBbm5vdW5jZW1lbnQgfHwgIWlzRGlzbWlzc2VkSW5TdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHNldENsb3NlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNDbG9zZWQsXG4gICAgICAgICAgICBjbG9zZTogaGFuZGxlQ2xvc2UsXG4gICAgICAgIH07XG4gICAgfSwgW2lzQ2xvc2VkXSk7XG59O1xuY29uc3QgQW5ub3VuY2VtZW50QmFyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgY29uc3QgQW5ub3VuY2VtZW50QmFyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VBbm5vdW5jZW1lbnRCYXJDb250ZXh0VmFsdWUoKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5ub3VuY2VtZW50QmFyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdmFsdWUgfSwgY2hpbGRyZW4pKTtcbn07XG5leHBvcnQgY29uc3QgdXNlQW5ub3VuY2VtZW50QmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaSA9IHVzZUNvbnRleHQoQW5ub3VuY2VtZW50QmFyQ29udGV4dCk7XG4gICAgaWYgKCFhcGkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBbm5vdW5jZW1lbnRCYXIoKTogQW5ub3VuY2VtZW50QmFyIG5vdCBmb3VuZCBpbiBSZWFjdCBjb250ZXh0OiBtYWtlIHN1cmUgdG8gdXNlIHRoZSBBbm5vdW5jZW1lbnRCYXJQcm92aWRlciBvbiB0b3Agb2YgdGhlIHRyZWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgeyB1c2VUaGVtZUNvbmZpZyB9IGZyb20gJy4vdXRpbHMvdXNlVGhlbWVDb25maWcnO1xuZXhwb3J0IHsgY3JlYXRlU3RvcmFnZVNsb3QsIGxpc3RTdG9yYWdlS2V5cyB9IGZyb20gJy4vdXRpbHMvc3RvcmFnZVV0aWxzJztcbmV4cG9ydCB7IHVzZUFsdGVybmF0ZVBhZ2VVdGlscyB9IGZyb20gJy4vdXRpbHMvdXNlQWx0ZXJuYXRlUGFnZVV0aWxzJztcbmV4cG9ydCB7IHBhcnNlQ29kZUJsb2NrVGl0bGUgfSBmcm9tICcuL3V0aWxzL2NvZGVCbG9ja1V0aWxzJztcbmV4cG9ydCB7IGRvY1ZlcnNpb25TZWFyY2hUYWcsIERFRkFVTFRfU0VBUkNIX1RBRyB9IGZyb20gJy4vdXRpbHMvc2VhcmNoVXRpbHMnO1xuZXhwb3J0IHsgaXNEb2NzUGx1Z2luRW5hYmxlZCB9IGZyb20gJy4vdXRpbHMvZG9jc1V0aWxzJztcbmV4cG9ydCB7IGlzU2FtZVBhdGggfSBmcm9tICcuL3V0aWxzL3BhdGhVdGlscyc7XG5leHBvcnQgeyB1c2VUaXRsZUZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMvZ2VuZXJhbFV0aWxzJztcbmV4cG9ydCB7IHVzZVBsdXJhbEZvcm0gfSBmcm9tICcuL3V0aWxzL3VzZVBsdXJhbEZvcm0nO1xuZXhwb3J0IHsgdXNlTG9jYXRpb25DaGFuZ2UgfSBmcm9tICcuL3V0aWxzL3VzZUxvY2F0aW9uQ2hhbmdlJztcbmV4cG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAnLi91dGlscy91c2VQcmV2aW91cyc7XG5leHBvcnQgeyB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbiwgdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25CeVBsdWdpbklkLCB9IGZyb20gJy4vdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24nO1xuZXhwb3J0IHsgRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL0RvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXInO1xuZXhwb3J0IHsgVGhlbWVDbGFzc05hbWVzIH0gZnJvbSAnLi91dGlscy9UaGVtZUNsYXNzTmFtZXMnO1xuZXhwb3J0IHsgQW5ub3VuY2VtZW50QmFyUHJvdmlkZXIsIHVzZUFubm91bmNlbWVudEJhciwgfSBmcm9tICcuL3V0aWxzL2Fubm91bmNlbWVudEJhclV0aWxzJztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gVHJhaWxpbmcgc2xhc2ggaGFuZGxpbmcgZGVwZW5kcyBpbiBzb21lIHNpdGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG5mdW5jdGlvbiBhcHBseVRyYWlsaW5nU2xhc2gocGF0aCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgdHJhaWxpbmdTbGFzaCwgYmFzZVVybCB9ID0gb3B0aW9ucztcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgLy8gTmV2ZXIgYXBwbHkgdHJhaWxpbmcgc2xhc2ggdG8gYW4gYW5jaG9yIGxpbmtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIC8vIFRPRE8gZGVkdXBsaWNhdGU6IGFsc28gcHJlc2VudCBpbiBAZG9jdXNhdXJ1cy91dGlsc1xuICAgIGZ1bmN0aW9uIGFkZFRyYWlsaW5nU2xhc2goc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIuZW5kc1dpdGgoJy8nKSA/IHN0ciA6IGAke3N0cn0vYDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5lbmRzV2l0aCgnLycpID8gc3RyLnNsaWNlKDAsIC0xKSA6IHN0cjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlVHJhaWxpbmdTbGFzaChzdHIsIHRyYWlsaW5nKSB7XG4gICAgICAgIHJldHVybiB0cmFpbGluZyA/IGFkZFRyYWlsaW5nU2xhc2goc3RyKSA6IHJlbW92ZVRyYWlsaW5nU2xhc2goc3RyKTtcbiAgICB9XG4gICAgLy8gdW5kZWZpbmVkID0gbGVnYWN5IHJldHJvY29tcGF0aWJsZSBiZWhhdmlvclxuICAgIGlmICh0eXBlb2YgdHJhaWxpbmdTbGFzaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIC8vIFRoZSB0cmFpbGluZyBzbGFzaCBzaG91bGQgYmUgaGFuZGxlZCBiZWZvcmUgdGhlID9zZWFyY2gjaGFzaCAhXG4gICAgY29uc3QgW3BhdGhuYW1lXSA9IHBhdGguc3BsaXQoL1sjP10vKTtcbiAgICAvLyBOZXZlciB0cmFuc2Zvcm0gJy8nIHRvICcnXG4gICAgLy8gTmV2ZXIgcmVtb3ZlIHRoZSBiYXNlVXJsIHRyYWlsaW5nIHNsYXNoIVxuICAgIC8vIElmIGJhc2VVcmwgPSAvbXlCYXNlLywgd2Ugd2FudCB0byBlbWl0IC9teUJhc2UvaW5kZXguaHRtbCBhbmQgbm90IC9teUJhc2UuaHRtbCAhXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy81MDc3XG4gICAgY29uc3Qgc2hvdWxkTm90QXBwbHkgPSBwYXRobmFtZSA9PT0gJy8nIHx8IHBhdGhuYW1lID09PSBiYXNlVXJsO1xuICAgIGNvbnN0IG5ld1BhdGhuYW1lID0gc2hvdWxkTm90QXBwbHlcbiAgICAgICAgPyBwYXRobmFtZVxuICAgICAgICA6IGhhbmRsZVRyYWlsaW5nU2xhc2gocGF0aG5hbWUsIHRyYWlsaW5nU2xhc2gpO1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UocGF0aG5hbWUsIG5ld1BhdGhuYW1lKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGFwcGx5VHJhaWxpbmdTbGFzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51bmlxID0gZXhwb3J0cy5hcHBseVRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG52YXIgYXBwbHlUcmFpbGluZ1NsYXNoXzEgPSByZXF1aXJlKFwiLi9hcHBseVRyYWlsaW5nU2xhc2hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVRyYWlsaW5nU2xhc2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChhcHBseVRyYWlsaW5nU2xhc2hfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciB1bmlxXzEgPSByZXF1aXJlKFwiLi91bmlxXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidW5pcVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KHVuaXFfMSkuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gUmVtb3ZlIGR1cGxpY2F0ZSBhcnJheSBpdGVtcyAoc2ltaWxhciB0byBfLnVuaXEpXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XG4gICAgLy8gTm90ZTogaGFkIHByb2JsZW1zIHdpdGggWy4uLm5ldyBTZXQoKV06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy80OTcyI2lzc3VlY29tbWVudC04NjM4OTUwNjFcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1bmlxO1xuIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIsIF9fUm91dGVyQ29udGV4dCwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgUHJvbXB0LCBSZWRpcmVjdCwgUm91dGUsIFJvdXRlciwgU3RhdGljUm91dGVyLCBTd2l0Y2gsIGdlbmVyYXRlUGF0aCwgbWF0Y2hQYXRoLCB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiwgdXNlUGFyYW1zLCB1c2VSb3V0ZU1hdGNoLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxudmFyIHJlc29sdmVUb0xvY2F0aW9uID0gZnVuY3Rpb24gcmVzb2x2ZVRvTG9jYXRpb24odG8sIGN1cnJlbnRMb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIHRvID09PSBcImZ1bmN0aW9uXCIgPyB0byhjdXJyZW50TG9jYXRpb24pIDogdG87XG59O1xudmFyIG5vcm1hbGl6ZVRvTG9jYXRpb24gPSBmdW5jdGlvbiBub3JtYWxpemVUb0xvY2F0aW9uKHRvLCBjdXJyZW50TG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjdXJyZW50TG9jYXRpb24pIDogdG87XG59O1xuXG52YXIgZm9yd2FyZFJlZlNoaW0gPSBmdW5jdGlvbiBmb3J3YXJkUmVmU2hpbShDKSB7XG4gIHJldHVybiBDO1xufTtcblxudmFyIGZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmO1xuXG5pZiAodHlwZW9mIGZvcndhcmRSZWYgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiA9IGZvcndhcmRSZWZTaGltO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG52YXIgTGlua0FuY2hvciA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgbmF2aWdhdGUgPSBfcmVmLm5hdmlnYXRlLFxuICAgICAgX29uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiaW5uZXJSZWZcIiwgXCJuYXZpZ2F0ZVwiLCBcIm9uQ2xpY2tcIl0pO1xuXG4gIHZhciB0YXJnZXQgPSByZXN0LnRhcmdldDtcblxuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfb25DbGljaykgX29uQ2xpY2soZXZlbnQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhyb3cgZXg7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAgICF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICAgKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBuYXZpZ2F0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICB9KTsgLy8gUmVhY3QgMTUgY29tcGF0XG5cblxuICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcbiAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gIH0gZWxzZSB7XG4gICAgcHJvcHMucmVmID0gaW5uZXJSZWY7XG4gIH1cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudCAqL1xuXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHByb3BzKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExpbmtBbmNob3IuZGlzcGxheU5hbWUgPSBcIkxpbmtBbmNob3JcIjtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmMiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmMiRjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQsXG4gICAgICBjb21wb25lbnQgPSBfcmVmMiRjb21wb25lbnQgPT09IHZvaWQgMCA/IExpbmtBbmNob3IgOiBfcmVmMiRjb21wb25lbnQsXG4gICAgICByZXBsYWNlID0gX3JlZjIucmVwbGFjZSxcbiAgICAgIHRvID0gX3JlZjIudG8sXG4gICAgICBpbm5lclJlZiA9IF9yZWYyLmlubmVyUmVmLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJjb21wb25lbnRcIiwgXCJyZXBsYWNlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgaGlzdG9yeSA9IGNvbnRleHQuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVUb0xvY2F0aW9uKHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKSwgY29udGV4dC5sb2NhdGlvbik7XG4gICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcGxhY2UgPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XG4gICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICB9XG4gICAgfSk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcbiAgICAgIHByb3BzLnJlZiA9IGZvcndhcmRlZFJlZiB8fCBpbm5lclJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKTtcbiAgfSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKTtcbiAgdmFyIHJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbiAgTGluay5wcm9wVHlwZXMgPSB7XG4gICAgaW5uZXJSZWY6IHJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgZm9yd2FyZFJlZlNoaW0kMSA9IGZ1bmN0aW9uIGZvcndhcmRSZWZTaGltKEMpIHtcbiAgcmV0dXJuIEM7XG59O1xuXG52YXIgZm9yd2FyZFJlZiQxID0gUmVhY3QuZm9yd2FyZFJlZjtcblxuaWYgKHR5cGVvZiBmb3J3YXJkUmVmJDEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiQxID0gZm9yd2FyZFJlZlNoaW0kMTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxudmFyIE5hdkxpbmsgPSBmb3J3YXJkUmVmJDEoZnVuY3Rpb24gKF9yZWYsIGZvcndhcmRlZFJlZikge1xuICB2YXIgX3JlZiRhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWYkYXJpYUN1cnJlbnQgPT09IHZvaWQgMCA/IFwicGFnZVwiIDogX3JlZiRhcmlhQ3VycmVudCxcbiAgICAgIF9yZWYkYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9PT0gdm9pZCAwID8gXCJhY3RpdmVcIiA6IF9yZWYkYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZXhhY3QgPSBfcmVmLmV4YWN0LFxuICAgICAgaXNBY3RpdmVQcm9wID0gX3JlZi5pc0FjdGl2ZSxcbiAgICAgIGxvY2F0aW9uUHJvcCA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzZW5zaXRpdmUgPSBfcmVmLnNlbnNpdGl2ZSxcbiAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgc3R5bGVQcm9wID0gX3JlZi5zdHlsZSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhcmlhLWN1cnJlbnRcIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJhY3RpdmVTdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcImV4YWN0XCIsIFwiaXNBY3RpdmVcIiwgXCJsb2NhdGlvblwiLCBcInNlbnNpdGl2ZVwiLCBcInN0cmljdFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TmF2TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb25Qcm9wIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgdmFyIHRvTG9jYXRpb24gPSBub3JtYWxpemVUb0xvY2F0aW9uKHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjdXJyZW50TG9jYXRpb24pLCBjdXJyZW50TG9jYXRpb24pO1xuICAgIHZhciBwYXRoID0gdG9Mb2NhdGlvbi5wYXRobmFtZTsgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcblxuICAgIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gICAgdmFyIG1hdGNoID0gZXNjYXBlZFBhdGggPyBtYXRjaFBhdGgoY3VycmVudExvY2F0aW9uLnBhdGhuYW1lLCB7XG4gICAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICAgIGV4YWN0OiBleGFjdCxcbiAgICAgIHNlbnNpdGl2ZTogc2Vuc2l0aXZlLFxuICAgICAgc3RyaWN0OiBzdHJpY3RcbiAgICB9KSA6IG51bGw7XG4gICAgdmFyIGlzQWN0aXZlID0gISEoaXNBY3RpdmVQcm9wID8gaXNBY3RpdmVQcm9wKG1hdGNoLCBjdXJyZW50TG9jYXRpb24pIDogbWF0Y2gpO1xuICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgIHZhciBzdHlsZSA9IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlUHJvcCwge30sIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRvOiB0b0xvY2F0aW9uXG4gICAgfSwgcmVzdCk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgICBpZiAoZm9yd2FyZFJlZlNoaW0kMSAhPT0gZm9yd2FyZFJlZiQxKSB7XG4gICAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLmlubmVyUmVmID0gaW5uZXJSZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgcHJvcHMpO1xuICB9KTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNlbnNpdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RyaWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtcm91dGVyLWRvbS5qcy5tYXBcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgZnJvbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFHQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0E7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QTs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0E7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBUUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFIQTtBQXNCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFIQTtBQUhBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBWEE7QUFIQTtBQTRCQTs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFXQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRkE7QUFHQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBV0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFUQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBOzs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FlQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7O0EiLCJzb3VyY2VSb290IjoiIn0=