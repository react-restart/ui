exports.id = 608;
exports.ids = [608];
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

/***/ 9600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_IconExternalLink)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"iconExternalLink": "iconExternalLink_3J9K"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const IconExternalLink = ({
  width: _width = 13.5,
  height: _height = 13.5
}) => {
  return /*#__PURE__*/react.createElement("svg", {
    width: _width,
    height: _height,
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    className: styles_module.iconExternalLink
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
  }));
};

/* harmony default export */ const theme_IconExternalLink = (IconExternalLink);

/***/ }),

/***/ 4478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const _excluded = ["width", "height", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const IconMenu = _ref => {
  let {
    width = 30,
    height = 30,
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 30 30",
    "aria-hidden": "true"
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M4 7h22M4 15h22M4 23h22"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMenu);

/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 17 modules
var lib = __webpack_require__(9306);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"skipToContent": "skipToContent_1oUP"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/index.js
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
  const containerRef = (0,react.useRef)(null);
  const {
    action
  } = (0,react_router/* useHistory */.k6)();

  const handleSkip = e => {
    e.preventDefault();
    const targetElement = document.querySelector('main:first-of-type') || document.querySelector('.main-wrapper');

    if (targetElement) {
      programmaticFocus(targetElement);
    }
  };

  (0,lib/* useLocationChange */.SL)(({
    location
  }) => {
    if (containerRef.current && !location.hash && action !== 'POP') {
      programmaticFocus(containerRef.current);
    }
  });
  return /*#__PURE__*/react.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: styles_module.skipToContent,
    onClick: handleSkip
  }, /*#__PURE__*/react.createElement(Translate/* default */.Z, {
    id: "theme.common.skipToMainContent",
    description: "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"
  }, "Skip to main content")));
}

/* harmony default export */ const theme_SkipToContent = (SkipToContent);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/styles.module.css
// Exports
/* harmony default export */ const AnnouncementBar_styles_module = ({
	"announcementBar": "announcementBar_3WsW",
	"announcementBarClose": "announcementBarClose_38nx",
	"announcementBarContent": "announcementBarContent_3EUC",
	"announcementBarCloseable": "announcementBarCloseable_3myR"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






function AnnouncementBar() {
  const {
    isClosed,
    close
  } = (0,lib/* useAnnouncementBar */.nT)();
  const {
    announcementBar
  } = (0,lib/* useThemeConfig */.LU)();

  if (!announcementBar) {
    return null;
  }

  const {
    content,
    backgroundColor,
    textColor,
    isCloseable
  } = announcementBar;

  if (!content || isCloseable && isClosed) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: AnnouncementBar_styles_module.announcementBar,
    style: {
      backgroundColor,
      color: textColor
    },
    role: "banner"
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)(AnnouncementBar_styles_module.announcementBarContent, {
      [AnnouncementBar_styles_module.announcementBarCloseable]: isCloseable
    }) // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), isCloseable ? /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: (0,clsx_m.default)(AnnouncementBar_styles_module.announcementBarClose, 'clean-btn'),
    onClick: close,
    "aria-label": (0,Translate/* translate */.I)({
      id: 'theme.AnnouncementBar.closeButtonAriaLabel',
      message: 'Close',
      description: 'The ARIA label for close button of announcement bar'
    })
  }, /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null);
}

/* harmony default export */ const theme_AnnouncementBar = (AnnouncementBar);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* harmony default export */ const Noop = (() => null);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/styles.module.css
// Exports
/* harmony default export */ const Toggle_styles_module = ({
	"toggle": "toggle_71bT"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/index.js
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
}) => /*#__PURE__*/react.createElement("span", {
  className: (0,clsx_m.default)(Toggle_styles_module.toggle, Toggle_styles_module.dark),
  style: style
}, icon);

const Light = ({
  icon,
  style
}) => /*#__PURE__*/react.createElement("span", {
  className: (0,clsx_m.default)(Toggle_styles_module.toggle, Toggle_styles_module.light),
  style: style
}, icon); // Based on react-toggle (https://github.com/aaronshaf/react-toggle/).


const Toggle = /*#__PURE__*/(0,react.memo)(({
  className,
  icons,
  checked: defaultChecked,
  disabled,
  onChange
}) => {
  const [checked, setChecked] = (0,react.useState)(defaultChecked);
  const [focused, setFocused] = (0,react.useState)(false);
  const inputRef = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)('react-toggle', className, {
      'react-toggle--checked': checked,
      'react-toggle--focus': focused,
      'react-toggle--disabled': disabled
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "react-toggle-track",
    role: "button",
    tabIndex: -1,
    onClick: () => {
      var _inputRef$current;

      return (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.click();
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "react-toggle-track-check"
  }, icons.checked), /*#__PURE__*/react.createElement("div", {
    className: "react-toggle-track-x"
  }, icons.unchecked), /*#__PURE__*/react.createElement("div", {
    className: "react-toggle-thumb"
  })), /*#__PURE__*/react.createElement("input", {
    ref: inputRef,
    checked: checked,
    type: "checkbox",
    className: "react-toggle-screenreader-only",
    "aria-label": "Switch between dark and light mode",
    onChange: onChange,
    onClick: () => setChecked(!checked),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }));
});
/* harmony default export */ function theme_Toggle(props) {
  const {
    colorMode: {
      switchConfig: {
        darkIcon,
        darkIconStyle,
        lightIcon,
        lightIconStyle
      }
    }
  } = (0,lib/* useThemeConfig */.LU)();
  const {
    isClient
  } = (0,useDocusaurusContext.default)();
  return /*#__PURE__*/react.createElement(Toggle, _extends({
    disabled: !isClient,
    icons: {
      checked: /*#__PURE__*/react.createElement(Dark, {
        icon: darkIcon,
        style: darkIconStyle
      }),
      unchecked: /*#__PURE__*/react.createElement(Light, {
        icon: lightIcon,
        style: lightIconStyle
      })
    }
  }, props));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(5350);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(7898);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const useHideableNavbar = hideOnScroll => {
  const location = (0,react_router/* useLocation */.TH)();
  const [isNavbarVisible, setIsNavbarVisible] = (0,react.useState)(hideOnScroll);
  const isFocusedAnchor = (0,react.useRef)(false);
  const [navbarHeight, setNavbarHeight] = (0,react.useState)(0);
  const navbarRef = (0,react.useCallback)(node => {
    if (node !== null) {
      setNavbarHeight(node.getBoundingClientRect().height);
    }
  }, []);
  (0,useScrollPosition/* default */.Z)(({
    scrollY: scrollTop
  }, {
    scrollY: lastScrollTop
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
  }, [navbarHeight, isFocusedAnchor]);
  (0,lib/* useLocationChange */.SL)(locationChangeEvent => {
    if (!hideOnScroll || locationChangeEvent.location.hash) {
      return;
    }

    setIsNavbarVisible(true);
  });
  (0,react.useEffect)(() => {
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

/* harmony default export */ const hooks_useHideableNavbar = (useHideableNavbar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(1839);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(3783);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(5525);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconLanguage/index.js
const _excluded = ["width", "height"];

function IconLanguage_extends() { IconLanguage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return IconLanguage_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const IconLanguage = _ref => {
  let {
    width = 20,
    height = 20
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/react.createElement("svg", IconLanguage_extends({
    viewBox: "0 0 20 20",
    width: width,
    height: height,
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"
  }));
};

/* harmony default export */ const theme_IconLanguage = (IconLanguage);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem.js
const LocaleDropdownNavbarItem_excluded = ["mobile", "dropdownItemsBefore", "dropdownItemsAfter"];

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
      props = LocaleDropdownNavbarItem_objectWithoutPropertiesLoose(_ref, LocaleDropdownNavbarItem_excluded);

  const {
    i18n: {
      currentLocale,
      locales,
      localeConfigs
    }
  } = (0,useDocusaurusContext.default)();
  const alternatePageUtils = (0,lib/* useAlternatePageUtils */.l5)();

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
      className: locale === currentLocale ? 'dropdown__link--active' : '',
      style: {
        textTransform: 'capitalize'
      }
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter]; // Mobile is handled a bit differently

  const dropdownLabel = mobile ? 'Languages' : getLocaleLabel(currentLocale);
  return /*#__PURE__*/react.createElement(DefaultNavbarItem/* default */.Z, LocaleDropdownNavbarItem_extends({}, props, {
    href: "#",
    mobile: mobile,
    label: /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(theme_IconLanguage, {
      style: {
        verticalAlign: 'text-bottom',
        marginRight: 5
      }
    }), /*#__PURE__*/react.createElement("span", null, dropdownLabel)),
    items: items
  }));
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/SearchNavbarItem.js
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

  return /*#__PURE__*/react.createElement(Noop, null);
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js
const NavbarItem_excluded = ["type"];

function NavbarItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const NavbarItemComponents = {
  default: () => DefaultNavbarItem/* default */.Z,
  localeDropdown: () => LocaleDropdownNavbarItem,
  search: () => SearchNavbarItem,
  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  docsVersion: () => // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  __webpack_require__(7250)/* .default */ .Z,
  docsVersionDropdown: () => // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  __webpack_require__(9308)/* .default */ .Z,
  doc: () => // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  __webpack_require__(1798)/* .default */ .Z
};

const getNavbarItemComponent = (type = 'default') => {
  const navbarItemComponent = NavbarItemComponents[type];

  if (!navbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }

  return navbarItemComponent();
};

function NavbarItem(_ref) {
  let {
    type
  } = _ref,
      props = NavbarItem_objectWithoutPropertiesLoose(_ref, NavbarItem_excluded);

  const NavbarItemComponent = getNavbarItemComponent(type);
  return /*#__PURE__*/react.createElement(NavbarItemComponent, props);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(4478);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/styles.module.css
// Exports
/* harmony default export */ const Navbar_styles_module = ({
	"displayOnlyInLargeViewport": "displayOnlyInLargeViewport_GrZ2",
	"navbarHideable": "navbarHideable_2qcr",
	"navbarHidden": "navbarHidden_3yey"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/index.js
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
  } = (0,lib/* useThemeConfig */.LU)();
  const [sidebarShown, setSidebarShown] = (0,react.useState)(false);
  const {
    isDarkTheme,
    setLightTheme,
    setDarkTheme
  } = (0,useThemeContext/* default */.Z)();
  const {
    navbarRef,
    isNavbarVisible
  } = hooks_useHideableNavbar(hideOnScroll);
  (0,useLockBodyScroll/* default */.Z)(sidebarShown);
  const showSidebar = (0,react.useCallback)(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = (0,react.useCallback)(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const onToggleChange = (0,react.useCallback)(e => e.target.checked ? setDarkTheme() : setLightTheme(), [setLightTheme, setDarkTheme]);
  const windowSize = (0,useWindowSize/* default */.Z)();
  (0,react.useEffect)(() => {
    if (windowSize === useWindowSize/* windowSizes.desktop */.D.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const hasSearchNavbarItem = items.some(item => item.type === 'search');
  const {
    leftItems,
    rightItems
  } = splitNavItemsByPosition(items);
  return /*#__PURE__*/react.createElement("nav", {
    ref: navbarRef,
    className: (0,clsx_m.default)('navbar', 'navbar--fixed-top', {
      'navbar--dark': style === 'dark',
      'navbar--primary': style === 'primary',
      'navbar-sidebar--show': sidebarShown,
      [Navbar_styles_module.navbarHideable]: hideOnScroll,
      [Navbar_styles_module.navbarHidden]: hideOnScroll && !isNavbarVisible
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "navbar__inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "navbar__items"
  }, items != null && items.length !== 0 && /*#__PURE__*/react.createElement("button", {
    "aria-label": "Navigation bar toggle",
    className: "navbar__toggle clean-btn",
    type: "button",
    tabIndex: 0,
    onClick: showSidebar,
    onKeyDown: showSidebar
  }, /*#__PURE__*/react.createElement(IconMenu/* default */.Z, null)), /*#__PURE__*/react.createElement(Logo/* default */.Z, {
    className: "navbar__brand",
    imageClassName: "navbar__logo",
    titleClassName: "navbar__title"
  }), leftItems.map((item, i) => /*#__PURE__*/react.createElement(NavbarItem, Navbar_extends({}, item, {
    key: i
  })))), /*#__PURE__*/react.createElement("div", {
    className: "navbar__items navbar__items--right"
  }, rightItems.map((item, i) => /*#__PURE__*/react.createElement(NavbarItem, Navbar_extends({}, item, {
    key: i
  }))), !disableColorModeSwitch && /*#__PURE__*/react.createElement(theme_Toggle, {
    className: Navbar_styles_module.displayOnlyInLargeViewport,
    checked: isDarkTheme,
    onChange: onToggleChange
  }), !hasSearchNavbarItem && /*#__PURE__*/react.createElement(Noop, null))), /*#__PURE__*/react.createElement("div", {
    role: "presentation",
    className: "navbar-sidebar__backdrop",
    onClick: hideSidebar
  }), /*#__PURE__*/react.createElement("div", {
    className: "navbar-sidebar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "navbar-sidebar__brand"
  }, /*#__PURE__*/react.createElement(Logo/* default */.Z, {
    className: "navbar__brand",
    imageClassName: "navbar__logo",
    titleClassName: "navbar__title",
    onClick: hideSidebar
  }), !disableColorModeSwitch && sidebarShown && /*#__PURE__*/react.createElement(theme_Toggle, {
    checked: isDarkTheme,
    onChange: onToggleChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "navbar-sidebar__items"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "menu__list"
  }, items.map((item, i) => /*#__PURE__*/react.createElement(NavbarItem, Navbar_extends({
    mobile: true
  }, item, {
    // TODO fix typing
    onClick: hideSidebar,
    key: i
  }))))))));
}

/* harmony default export */ const theme_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(3692);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/styles.module.css
// Exports
/* harmony default export */ const Footer_styles_module = ({
	"footerLogoLink": "footerLogoLink_MyFc"
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(8210);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(9600);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/index.js
const Footer_excluded = ["to", "href", "label", "prependBaseUrlToHref"];

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
      props = Footer_objectWithoutPropertiesLoose(_ref, Footer_excluded);

  const toUrl = (0,useBaseUrl/* default */.Z)(to);
  const normalizedHref = (0,useBaseUrl/* default */.Z)(href, {
    forcePrependBaseUrl: true
  });
  return /*#__PURE__*/react.createElement(Link/* default */.Z, Footer_extends({
    className: "footer__link-item"
  }, href ? {
    href: prependBaseUrlToHref ? normalizedHref : href
  } : {
    to: toUrl
  }, props), href && !(0,isInternalUrl/* default */.Z)(href) ? /*#__PURE__*/react.createElement("span", null, label, /*#__PURE__*/react.createElement(IconExternalLink/* default */.Z, null)) : label);
}

const FooterLogo = ({
  sources,
  alt
}) => /*#__PURE__*/react.createElement(ThemedImage/* default */.Z, {
  className: "footer__logo",
  alt: alt,
  sources: sources
});

function Footer() {
  const {
    footer
  } = (0,lib/* useThemeConfig */.LU)();
  const {
    copyright,
    links = [],
    logo = {}
  } = footer || {};
  const sources = {
    light: (0,useBaseUrl/* default */.Z)(logo.src),
    dark: (0,useBaseUrl/* default */.Z)(logo.srcDark || logo.src)
  };

  if (!footer) {
    return null;
  }

  return /*#__PURE__*/react.createElement("footer", {
    className: (0,clsx_m.default)('footer', {
      'footer--dark': footer.style === 'dark'
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, links && links.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "row footer__links"
  }, links.map((linkItem, i) => /*#__PURE__*/react.createElement("div", {
    key: i,
    className: "col footer__col"
  }, linkItem.title != null ? /*#__PURE__*/react.createElement("div", {
    className: "footer__title"
  }, linkItem.title) : null, linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? /*#__PURE__*/react.createElement("ul", {
    className: "footer__items"
  }, linkItem.items.map((item, key) => item.html ? /*#__PURE__*/react.createElement("li", {
    key: key,
    className: "footer__item" // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: item.html
    }
  }) : /*#__PURE__*/react.createElement("li", {
    key: item.href || item.to,
    className: "footer__item"
  }, /*#__PURE__*/react.createElement(FooterLink, item)))) : null))), (logo || copyright) && /*#__PURE__*/react.createElement("div", {
    className: "footer__bottom text--center"
  }, logo && (logo.src || logo.srcDark) && /*#__PURE__*/react.createElement("div", {
    className: "margin-bottom--sm"
  }, logo.href ? /*#__PURE__*/react.createElement(Link/* default */.Z, {
    href: logo.href,
    className: Footer_styles_module.footerLogoLink
  }, /*#__PURE__*/react.createElement(FooterLogo, {
    alt: logo.alt,
    sources: sources
  })) : /*#__PURE__*/react.createElement(FooterLogo, {
    alt: logo.alt,
    sources: sources
  })), copyright ? /*#__PURE__*/react.createElement("div", {
    className: "footer__copyright" // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: copyright
    }
  }) : null)));
}

/* harmony default export */ const theme_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const ThemeStorage = (0,lib/* createStorageSlot */.WA)('theme');
const themes = {
  light: 'light',
  dark: 'dark'
}; // Ensure to always return a valid theme even if input is invalid

const coerceToTheme = theme => {
  return theme === themes.dark ? themes.dark : themes.light;
};

const getInitialTheme = defaultMode => {
  if (!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM) {
    return coerceToTheme(defaultMode);
  }

  return coerceToTheme(document.documentElement.getAttribute('data-theme'));
};

const storeTheme = newTheme => {
  (0,lib/* createStorageSlot */.WA)('theme').set(coerceToTheme(newTheme));
};

const useTheme = () => {
  const {
    colorMode: {
      defaultMode,
      disableSwitch,
      respectPrefersColorScheme
    }
  } = (0,lib/* useThemeConfig */.LU)();
  const [theme, setTheme] = (0,react.useState)(getInitialTheme(defaultMode));
  const setLightTheme = (0,react.useCallback)(() => {
    setTheme(themes.light);
    storeTheme(themes.light);
  }, []);
  const setDarkTheme = (0,react.useCallback)(() => {
    setTheme(themes.dark);
    storeTheme(themes.dark);
  }, []);
  (0,react.useEffect)(() => {
    document.documentElement.setAttribute('data-theme', coerceToTheme(theme));
  }, [theme]);
  (0,react.useEffect)(() => {
    if (disableSwitch) {
      return;
    }

    try {
      const storedTheme = ThemeStorage.get();

      if (storedTheme !== null) {
        setTheme(coerceToTheme(storedTheme));
      }
    } catch (err) {
      console.error(err);
    }
  }, [setTheme]);
  (0,react.useEffect)(() => {
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

/* harmony default export */ const hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(2924);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeProvider/index.js
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
  return /*#__PURE__*/react.createElement(ThemeContext/* default.Provider */.Z.Provider, {
    value: {
      isDarkTheme,
      setLightTheme,
      setDarkTheme
    }
  }, props.children);
}

/* harmony default export */ const theme_ThemeProvider = (ThemeProvider);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const TAB_CHOICE_PREFIX = 'docusaurus.tab.';

const useTabGroupChoice = () => {
  const [tabGroupChoices, setChoices] = (0,react.useState)({});
  const setChoiceSyncWithLocalStorage = (0,react.useCallback)((groupId, newChoice) => {
    (0,lib/* createStorageSlot */.WA)(`${TAB_CHOICE_PREFIX}${groupId}`).set(newChoice);
  }, []);
  (0,react.useEffect)(() => {
    try {
      const localStorageChoices = {};
      (0,lib/* listStorageKeys */._f)().forEach(storageKey => {
        if (storageKey.startsWith(TAB_CHOICE_PREFIX)) {
          const groupId = storageKey.substring(TAB_CHOICE_PREFIX.length);
          localStorageChoices[groupId] = (0,lib/* createStorageSlot */.WA)(storageKey).get();
        }
      });
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

/* harmony default export */ const hooks_useTabGroupChoice = (useTabGroupChoice);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(9443);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesProvider/index.js
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
  return /*#__PURE__*/react.createElement(UserPreferencesContext/* default.Provider */.Z.Provider, {
    value: {
      tabGroupChoices,
      setTabGroupChoices
    }
  }, props.children);
}

/* harmony default export */ const theme_UserPreferencesProvider = (UserPreferencesProvider);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function LayoutProviders({
  children
}) {
  return /*#__PURE__*/react.createElement(theme_ThemeProvider, null, /*#__PURE__*/react.createElement(lib/* AnnouncementBarProvider */.pl, null, /*#__PURE__*/react.createElement(theme_UserPreferencesProvider, null, /*#__PURE__*/react.createElement(lib/* DocsPreferredVersionContextProvider */.L5, null, children))));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadatas/index.js
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
  return /*#__PURE__*/react.createElement(Head/* default */.Z, null, locale && /*#__PURE__*/react.createElement("meta", {
    name: "docusaurus_locale",
    content: locale
  }), version && /*#__PURE__*/react.createElement("meta", {
    name: "docusaurus_version",
    content: version
  }), tag && /*#__PURE__*/react.createElement("meta", {
    name: "docusaurus_tag",
    content: tag
  }));
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1217);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutHead/index.js
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
  } = (0,useDocusaurusContext.default)();
  const alternatePageUtils = (0,lib/* useAlternatePageUtils */.l5)(); // Note: it is fine to use both "x-default" and "en" to target the same url
  // See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/

  return /*#__PURE__*/react.createElement(Head/* default */.Z, null, locales.map(locale => /*#__PURE__*/react.createElement("link", {
    key: locale,
    rel: "alternate",
    href: alternatePageUtils.createUrl({
      locale,
      fullyQualified: true
    }),
    hrefLang: locale
  })), /*#__PURE__*/react.createElement("link", {
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
  } = (0,useDocusaurusContext.default)();
  const {
    pathname
  } = (0,react_router/* useLocation */.TH)();
  return siteUrl + (0,useBaseUrl/* default */.Z)(pathname);
}

function CanonicalUrlHeaders({
  permalink
}) {
  const {
    siteConfig: {
      url: siteUrl
    }
  } = (0,useDocusaurusContext.default)();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();
  const canonicalUrl = permalink ? `${siteUrl}${permalink}` : defaultCanonicalUrl;
  return /*#__PURE__*/react.createElement(Head/* default */.Z, null, /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: canonicalUrl
  }), /*#__PURE__*/react.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }));
}

function LayoutHead(props) {
  const {
    siteConfig: {
      favicon,
      themeConfig: {
        metadatas,
        image: defaultImage
      }
    },
    i18n: {
      currentLocale,
      localeConfigs
    }
  } = (0,useDocusaurusContext.default)();
  const {
    title,
    description,
    image,
    keywords,
    searchMetadatas
  } = props;
  const faviconUrl = (0,useBaseUrl/* default */.Z)(favicon);
  const pageTitle = (0,lib/* useTitleFormatter */.pe)(title); // See https://github.com/facebook/docusaurus/issues/3317#issuecomment-754661855
  // const htmlLang = currentLocale.split('-')[0];

  const htmlLang = currentLocale; // should we allow the user to override htmlLang with localeConfig?

  const htmlDir = localeConfigs[currentLocale].direction;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Head/* default */.Z, null, /*#__PURE__*/react.createElement("html", {
    lang: htmlLang,
    dir: htmlDir
  }), favicon && /*#__PURE__*/react.createElement("link", {
    rel: "shortcut icon",
    href: faviconUrl
  }), /*#__PURE__*/react.createElement("title", null, pageTitle), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: pageTitle
  }), image || defaultImage && /*#__PURE__*/react.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  })), /*#__PURE__*/react.createElement(Seo/* default */.Z, {
    description,
    keywords,
    image
  }), /*#__PURE__*/react.createElement(CanonicalUrlHeaders, null), /*#__PURE__*/react.createElement(AlternateLangHeaders, null), /*#__PURE__*/react.createElement(SearchMetadatas, LayoutHead_extends({
    tag: lib/* DEFAULT_SEARCH_TAG */.HX,
    locale: currentLocale
  }, searchMetadatas)), /*#__PURE__*/react.createElement(Head/* default */.Z // it's important to have an additional <Head> element here,
  // as it allows react-helmet to override values set in previous <Head>
  // ie we can override default metadatas such as "twitter:card"
  // In same Head, the same meta would appear twice instead of overriding
  // See react-helmet doc
  , null, metadatas.map((metadata, i) => /*#__PURE__*/react.createElement("meta", LayoutHead_extends({
    key: `metadata_${i}`
  }, metadata)))));
}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function useKeyboardNavigation() {
  (0,react.useEffect)(() => {
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

/* harmony default export */ const hooks_useKeyboardNavigation = (useKeyboardNavigation);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
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
    wrapperClassName,
    pageClassName
  } = props;
  hooks_useKeyboardNavigation();
  return /*#__PURE__*/react.createElement(LayoutProviders, null, /*#__PURE__*/react.createElement(LayoutHead, props), /*#__PURE__*/react.createElement(theme_SkipToContent, null), /*#__PURE__*/react.createElement(theme_AnnouncementBar, null), /*#__PURE__*/react.createElement(theme_Navbar, null), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m.default)(lib/* ThemeClassNames.wrapper.main */.kM.wrapper.main, wrapperClassName, pageClassName)
  }, children), !noFooter && /*#__PURE__*/react.createElement(theme_Footer, null));
}

/* harmony default export */ const theme_Layout = (Layout);

/***/ }),

/***/ 5537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8210);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4996);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2263);
const _excluded = ["imageClassName", "titleClassName"];

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
    siteConfig: {
      title,
      themeConfig: {
        navbar: {
          title: navbarTitle,
          logo = {
            src: ''
          }
        }
      }
    },
    isClient
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__.default)();

  const {
    imageClassName,
    titleClassName
  } = props,
        propsRest = _objectWithoutPropertiesLoose(props, _excluded);

  const logoLink = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.href || '/');
  const sources = {
    light: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.src),
    dark: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.srcDark || logo.src)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _extends({
    to: logoLink
  }, propsRest, logo.target && {
    target: logo.target
  }), logo.src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    key: isClient,
    className: imageClassName,
    sources: sources,
    alt: logo.alt || navbarTitle || title
  }), navbarTitle != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", {
    className: titleClassName
  }, navbarTitle));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6010);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5977);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var _theme_IconExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9600);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3919);
const _excluded = ["activeBasePath", "activeBaseRegex", "to", "href", "label", "activeClassName", "prependBaseUrlToHref"],
      _excluded2 = ["items", "position", "className"],
      _excluded3 = ["className"],
      _excluded4 = ["items", "className", "position"],
      _excluded5 = ["className"],
      _excluded6 = ["mobile"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








const dropdownLinkActiveClass = 'dropdown__link--active';

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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(to);
  const activeBaseUrl = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(activeBasePath);
  const normalizedHref = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(href, {
    forcePrependBaseUrl: true
  });
  const isExternalLink = label && href && !(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(href);
  const isDropdownLink = activeClassName === dropdownLinkActiveClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _extends({}, href ? {
    href: prependBaseUrlToHref ? normalizedHref : href
  } : Object.assign({
    isNavLink: true,
    activeClassName,
    to: toUrl
  }, activeBasePath || activeBaseRegex ? {
    isActive: (_match, location) => activeBaseRegex ? new RegExp(activeBaseRegex).test(location.pathname) : location.pathname.startsWith(activeBaseUrl)
  } : null), props), isExternalLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_IconExternalLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, isDropdownLink && {
    width: 12,
    height: 12
  })) : label);
}

function NavItemDesktop(_ref2) {
  var _props$children;

  let {
    items,
    position,
    className
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropdownMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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

  const navLinkClassNames = (extraClassName, isDropdownItem = false) => (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)({
    'navbar__item navbar__link': !isDropdownItem,
    dropdown__link: isDropdownItem
  }, extraClassName);

  if (!items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
      className: navLinkClassNames(className)
    }, props));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: dropdownRef,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)('navbar__item', 'dropdown', 'dropdown--hoverable', {
      'dropdown--left': position === 'left',
      'dropdown--right': position === 'right',
      'dropdown--show': showDropdown
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
    className: navLinkClassNames(className)
  }, props, {
    onClick: props.to ? undefined : e => e.preventDefault(),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setShowDropdown(!showDropdown);
      }
    }
  }), (_props$children = props.children) != null ? _props$children : props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    ref: dropdownMenuRef,
    className: "dropdown__menu"
  }, items.map((_ref3, i) => {
    let {
      className: childItemClassName
    } = _ref3,
        childItemProps = _objectWithoutPropertiesLoose(_ref3, _excluded3);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
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
      activeClassName: dropdownLinkActiveClass,
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  const menuListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    pathname
  } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_7__/* .useLocation */ .TH)();
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var _items$some;

    return (_items$some = !(items != null && items.some(item => (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .isSamePath */ .Mg)(item.to, pathname)))) != null ? _items$some : true;
  });

  const navLinkClassNames = (extraClassName, isSubList = false) => (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)('menu__link', {
    'menu__link--sublist': isSubList
  }, extraClassName);

  if (!items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "menu__list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
      className: navLinkClassNames(className)
    }, props)));
  }

  const menuListHeight = (_menuListRef$current = menuListRef.current) != null && _menuListRef$current.scrollHeight ? `${(_menuListRef$current2 = menuListRef.current) == null ? void 0 : _menuListRef$current2.scrollHeight}px` : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)('menu__list-item', {
      'menu__list-item--collapsed': collapsed
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
    role: "button",
    className: navLinkClassNames(className, true)
  }, props, {
    onClick: e => {
      e.preventDefault();
      setCollapsed(state => !state);
    }
  }), (_props$children2 = props.children) != null ? _props$children2 : props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "menu__list",
    ref: menuListRef,
    style: {
      height: !collapsed ? menuListHeight : undefined
    }
  }, items.map((_ref5, i) => {
    let {
      className: childItemClassName
    } = _ref5,
        childItemProps = _objectWithoutPropertiesLoose(_ref5, _excluded5);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "menu__list-item",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink, _extends({
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
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  const Comp = mobile ? NavItemMobile : NavItemDesktop;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, props);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultNavbarItem);

/***/ }),

/***/ 1798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DocNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5525);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(907);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6010);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8780);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["docId", "activeSidebarClassName", "label", "docsPluginId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function getDocInVersions(versions, docId) {
  // vanilla-js flatten, TODO replace soon by ES flat() / flatMap()
  const allDocs = [].concat(...versions.map(version => version.docs));
  const doc = allDocs.find(versionDoc => versionDoc.id === docId);

  if (!doc) {
    const docIds = allDocs.map(versionDoc => versionDoc.id).join('\n- ');
    throw new Error(`DocNavbarItem: couldn't find any doc with id "${docId}" in version${versions.length ? 's' : ''} ${versions.map(version => version.name).join(', ')}".
Available doc ids are:\n- ${docIds}`);
  }

  return doc;
}

function DocNavbarItem(_ref) {
  let {
    docId,
    activeSidebarClassName,
    label: staticLabel,
    docsPluginId
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    activeVersion,
    activeDoc
  } = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useActiveDocContext */ .Iw)(docsPluginId);
  const {
    preferredVersion
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId);
  const latestVersion = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useLatestVersion */ .yW)(docsPluginId); // Versions used to look for the doc to link to, ordered + no duplicate

  const versions = (0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_4__.uniq)([activeVersion, preferredVersion, latestVersion].filter(Boolean));
  const doc = getDocInVersions(versions, docId);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _extends({
    exact: true
  }, props, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(props.className, {
      [activeSidebarClassName]: activeDoc && activeDoc.sidebar === doc.sidebar
    }),
    label: staticLabel != null ? staticLabel : doc.id,
    to: doc.path
  }));
}

/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DocsVersionDropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5525);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(907);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
const _excluded = ["mobile", "docsPluginId", "dropdownActiveClassDisabled", "dropdownItemsBefore", "dropdownItemsAfter"];

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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const activeDocContext = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useActiveDocContext */ .Iw)(docsPluginId);
  const versions = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useVersions */ .gB)(docsPluginId);
  const latestVersion = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useLatestVersion */ .yW)(docsPluginId);
  const {
    preferredVersion,
    savePreferredVersionName
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId);

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

  const items = getItems();
  const dropdownVersion = (_ref2 = (_activeDocContext$act = activeDocContext.activeVersion) != null ? _activeDocContext$act : preferredVersion) != null ? _ref2 : latestVersion; // Mobile dropdown is handled a bit differently

  const dropdownLabel = mobile && items ? 'Versions' : dropdownVersion.label;
  const dropdownTo = mobile && items ? undefined : getVersionMainDoc(dropdownVersion).path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _extends({}, props, {
    mobile: mobile,
    label: dropdownLabel,
    to: dropdownTo,
    items: items,
    isActive: dropdownActiveClassDisabled ? () => false : undefined
  }));
}

/***/ }),

/***/ 7250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DocsVersionNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5525);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(907);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
const _excluded = ["label", "to", "docsPluginId"];

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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const activeVersion = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useActiveVersion */ .zu)(docsPluginId);
  const {
    preferredVersion
  } = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId);
  const latestVersion = (0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useLatestVersion */ .yW)(docsPluginId);
  const version = (_ref2 = activeVersion != null ? activeVersion : preferredVersion) != null ? _ref2 : latestVersion;
  const label = staticLabel != null ? staticLabel : version.label;
  const path = staticTo != null ? staticTo : getVersionMainDoc(version).path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _extends({}, props, {
    label: label,
    to: path
  }));
}

/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3890);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4973);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({
      id: 'theme.NotFound.title',
      message: 'Page Not Found'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "container margin-vert--xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "hero__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

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

/***/ 2924:
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

const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ 8210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_ThemedImage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(5350);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// Exports
/* harmony default export */ const styles_module = ({
	"themedImage": "themedImage_1VuW",
	"themedImage--light": "themedImage--light_3UqQ",
	"themedImage--dark": "themedImage--dark_hz6m"
});

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
const _excluded = ["sources", "className", "alt"];

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
  } = (0,useDocusaurusContext.default)();
  const {
    isDarkTheme
  } = (0,useThemeContext/* default */.Z)();

  const {
    sources,
    className,
    alt = ''
  } = props,
        propsRest = _objectWithoutPropertiesLoose(props, _excluded);

  const clientThemes = isDarkTheme ? ['dark'] : ['light'];
  const renderedSourceNames = isClient ? clientThemes // We need to render both images on the server to avoid flash
  : // See https://github.com/facebook/docusaurus/pull/3730
  ['light', 'dark'];
  return /*#__PURE__*/react.createElement(react.Fragment, null, renderedSourceNames.map(sourceName => /*#__PURE__*/react.createElement("img", _extends({
    key: sourceName,
    src: sources[sourceName],
    alt: alt,
    className: (0,clsx_m.default)(styles_module.themedImage, styles_module[`themedImage--${sourceName}`], className)
  }, propsRest))));
};

/* harmony default export */ const theme_ThemedImage = (ThemedImage);

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

/***/ 1839:
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


function useLockBodyScroll(lock = true) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = lock ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [lock]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockBodyScroll);

/***/ }),

/***/ 7898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



const getScrollPosition = () => ({
  scrollX: _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM ? window.pageXOffset : 0,
  scrollY: _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM ? window.pageYOffset : 0
});

const useScrollPosition = (effect, deps = []) => {
  const scrollPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());

  const handleScroll = () => {
    const currentScrollPosition = getScrollPosition();

    if (effect) {
      effect(currentScrollPosition, scrollPosition.current);
    }

    scrollPosition.current = currentScrollPosition;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const opts = {
      passive: true
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, opts);
    return () => window.removeEventListener('scroll', handleScroll, opts);
  }, deps);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollPosition);

/***/ }),

/***/ 5350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2924);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function useThemeContext() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);

  if (context == null) {
    throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');
  }

  return context;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeContext);

/***/ }),

/***/ 3783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ windowSizes),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
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
  const isClient = _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM;

  function getSize() {
    if (!isClient) {
      return undefined;
    }

    return window.innerWidth > desktopThresholdWidth ? windowSizes.desktop : windowSizes.mobile;
  }

  const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getSize);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzLzYwOC4wMmJhMGQzNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvTGluay5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL0ludGVycG9sYXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvVHJhbnNsYXRlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvaXNJbnRlcm5hbFVybC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL3VzZUJhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy91c2VHbG9iYWxEYXRhLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvcGx1Z2luLWNvbnRlbnQtZG9jcy9saWIvY2xpZW50L2RvY3NDbGllbnRVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3BsdWdpbi1jb250ZW50LWRvY3MvbGliL3RoZW1lL2hvb2tzL3VzZURvY3MuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25FeHRlcm5hbExpbmsvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25FeHRlcm5hbExpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25NZW51L2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Ta2lwVG9Db250ZW50L3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Ta2lwVG9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Bbm5vdW5jZW1lbnRCYXIvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0Fubm91bmNlbWVudEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL05vb3AuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1RvZ2dsZS9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVG9nZ2xlL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VIaWRlYWJsZU5hdmJhci5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvSWNvbkxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9OYXZiYXJJdGVtL0xvY2FsZURyb3Bkb3duTmF2YmFySXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFySXRlbS9TZWFyY2hOYXZiYXJJdGVtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9OYXZiYXJJdGVtL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9OYXZiYXIvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvRm9vdGVyL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UaGVtZVByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VUYWJHcm91cENob2ljZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVXNlclByZWZlcmVuY2VzUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xheW91dFByb3ZpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvU2VhcmNoTWV0YWRhdGFzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9MYXlvdXRIZWFkL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VLZXlib2FyZE5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFySXRlbS9EZWZhdWx0TmF2YmFySXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTmF2YmFySXRlbS9Eb2NOYXZiYXJJdGVtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9OYXZiYXJJdGVtL0RvY3NWZXJzaW9uRHJvcGRvd25OYXZiYXJJdGVtLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9OYXZiYXJJdGVtL0RvY3NWZXJzaW9uTmF2YmFySXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1Nlby9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UaGVtZWRJbWFnZS9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVGhlbWVkSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL1VzZXJQcmVmZXJlbmNlc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZURvY3MuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZUxvY2tCb2R5U2Nyb2xsLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VTY3JvbGxQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VUaGVtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvc3RvcmFnZVV0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VBbHRlcm5hdGVQYWdlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2NvZGVCbG9ja1V0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9zZWFyY2hVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1V0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9wYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2dlbmVyYWxVdGlscy5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvdXNlUGx1cmFsRm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3VzZUxvY2F0aW9uQ2hhbmdlLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9kb2NzUHJlZmVycmVkVmVyc2lvbi9Eb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL0RvY3NQcmVmZXJyZWRWZXJzaW9uUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2RvY3NQcmVmZXJyZWRWZXJzaW9uL3VzZURvY3NQcmVmZXJyZWRWZXJzaW9uLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9UaGVtZUNsYXNzTmFtZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL2Fubm91bmNlbWVudEJhclV0aWxzLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3V0aWxzLWNvbW1vbi9saWIvYXBwbHlUcmFpbGluZ1NsYXNoLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdXRpbHMtY29tbW9uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3V0aWxzLWNvbW1vbi9saWIvdW5pcS5qcyIsIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzIiwid2VicGFjazovL215LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgYXMgUlJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnLi91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQgaXNJbnRlcm5hbFVybCBmcm9tICcuL2lzSW50ZXJuYWxVcmwnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgdXNlTGlua3NDb2xsZWN0b3IgfSBmcm9tICcuLi9MaW5rc0NvbGxlY3Rvcic7XG5pbXBvcnQgeyB1c2VCYXNlVXJsVXRpbHMgfSBmcm9tICcuL3VzZUJhc2VVcmwnO1xuaW1wb3J0IHsgYXBwbHlUcmFpbGluZ1NsYXNoIH0gZnJvbSAnQGRvY3VzYXVydXMvdXRpbHMtY29tbW9uJztcbi8vIFRPRE8gYWxsIHRoaXMgd291bGRuJ3QgYmUgbmVjZXNzYXJ5IGlmIHdlIHVzZWQgUmVhY3RSb3V0ZXIgYmFzZW5hbWUgZmVhdHVyZVxuLy8gV2UgZG9uJ3QgYXV0b21hdGljYWxseSBhZGQgYmFzZSB1cmxzIHRvIGFsbCBsaW5rcyxcbi8vIG9ubHkgdGhlIFwic2FmZVwiIG9uZXMsIHN0YXJ0aW5nIHdpdGggLyAobGlrZSAvZG9jcy9pbnRyb2R1Y3Rpb24pXG4vLyB0aGlzIGlzIGJlY2F1c2UgdXNlQmFzZVVybCgpIGFjdHVhbGx5IHRyYW5zZm9ybXMgcmVsYXRpdmUgbGlua3Ncbi8vIGxpa2UgXCJpbnRyb2R1Y3Rpb25cIiB0byBcIi9iYXNlVXJsL2ludHJvZHVjdGlvblwiID0+IGJhZCBiZWhhdmlvciB0byBmaXhcbmNvbnN0IHNob3VsZEFkZEJhc2VVcmxBdXRvbWF0aWNhbGx5ID0gKHRvKSA9PiB0by5zdGFydHNXaXRoKCcvJyk7XG5mdW5jdGlvbiBMaW5rKHsgaXNOYXZMaW5rLCB0bywgaHJlZiwgYWN0aXZlQ2xhc3NOYW1lLCBpc0FjdGl2ZSwgJ2RhdGEtbm9Ccm9rZW5MaW5rQ2hlY2snOiBub0Jyb2tlbkxpbmtDaGVjaywgYXV0b0FkZEJhc2VVcmwgPSB0cnVlLCAuLi5wcm9wcyB9KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZzogeyB0cmFpbGluZ1NsYXNoLCBiYXNlVXJsIH0sIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICAgIGNvbnN0IHsgd2l0aEJhc2VVcmwgfSA9IHVzZUJhc2VVcmxVdGlscygpO1xuICAgIGNvbnN0IGxpbmtzQ29sbGVjdG9yID0gdXNlTGlua3NDb2xsZWN0b3IoKTtcbiAgICAvLyBJTVBPUlRBTlQ6IHVzaW5nIHRvIG9yIGhyZWYgc2hvdWxkIG5vdCBjaGFuZ2UgYW55dGhpbmdcbiAgICAvLyBGb3IgZXhhbXBsZSwgTURYIGxpbmtzIHdpbGwgQUxXQVlTIGdpdmUgdXMgdGhlIGhyZWYgcHJvcHNcbiAgICAvLyBVc2luZyBvbmUgcHJvcCBvciB0aGUgb3RoZXIgc2hvdWxkIG5vdCBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoXG4gICAgLy8gaW50ZXJuYWwgbGlua3MgKC9kb2NzL215RG9jKSBmcm9tIGV4dGVybmFsIGxpbmtzIChodHRwczovL2dpdGh1Yi5jb20pXG4gICAgY29uc3QgdGFyZ2V0TGlua1VucHJlZml4ZWQgPSB0byB8fCBocmVmO1xuICAgIGZ1bmN0aW9uIG1heWJlQWRkQmFzZVVybChzdHIpIHtcbiAgICAgICAgcmV0dXJuIGF1dG9BZGRCYXNlVXJsICYmIHNob3VsZEFkZEJhc2VVcmxBdXRvbWF0aWNhbGx5KHN0cilcbiAgICAgICAgICAgID8gd2l0aEJhc2VVcmwoc3RyKVxuICAgICAgICAgICAgOiBzdHI7XG4gICAgfVxuICAgIGNvbnN0IGlzSW50ZXJuYWwgPSBpc0ludGVybmFsVXJsKHRhcmdldExpbmtVbnByZWZpeGVkKTtcbiAgICAvLyBwYXRobmFtZTovLyBpcyBhIHNwZWNpYWwgXCJwcm90b2NvbFwiIHdlIHVzZSB0byB0ZWxsIERvY3VzYXVydXMgbGlua1xuICAgIC8vIHRoYXQgYSBsaW5rIGlzIG5vdCBcImludGVybmFsXCIgYW5kIHRoYXQgd2Ugc2hvdWxkbid0IHVzZSBoaXN0b3J5LnB1c2goKVxuICAgIC8vIHRoaXMgaXMgbm90IGlkZWFsIGJ1dCBhIGdvb2QgZW5vdWdoIGVzY2FwZSBoYXRjaCBmb3Igbm93XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzA5XG4gICAgLy8gbm90ZTogd2Ugd2FudCBiYXNlVXJsIHRvIGJlIGFwcGVuZGVkIChzZWUgaXNzdWUgZm9yIGRldGFpbHMpXG4gICAgLy8gVE9ETyByZWFkIHJvdXRlcyBhbmQgYXV0b21hdGljYWxseSBkZXRlY3QgaW50ZXJuYWwvZXh0ZXJuYWwgbGlua3M/XG4gICAgY29uc3QgdGFyZ2V0TGlua1dpdGhvdXRQYXRobmFtZVByb3RvY29sID0gdGFyZ2V0TGlua1VucHJlZml4ZWQgPT09IG51bGwgfHwgdGFyZ2V0TGlua1VucHJlZml4ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldExpbmtVbnByZWZpeGVkLnJlcGxhY2UoJ3BhdGhuYW1lOi8vJywgJycpO1xuICAgIC8vIFRPRE8gd2Ugc2hvdWxkIHVzZSBSZWFjdFJvdXRlciBiYXNlbmFtZSBmZWF0dXJlIGluc3RlYWQhXG4gICAgLy8gQXV0b21hdGljYWxseSBhcHBseSBiYXNlIHVybCBpbiBsaW5rcyB0aGF0IHN0YXJ0IHdpdGggL1xuICAgIGxldCB0YXJnZXRMaW5rID0gdHlwZW9mIHRhcmdldExpbmtXaXRob3V0UGF0aG5hbWVQcm90b2NvbCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBtYXliZUFkZEJhc2VVcmwodGFyZ2V0TGlua1dpdGhvdXRQYXRobmFtZVByb3RvY29sKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGFyZ2V0TGluayAmJiBpc0ludGVybmFsKSB7XG4gICAgICAgIHRhcmdldExpbmsgPSBhcHBseVRyYWlsaW5nU2xhc2godGFyZ2V0TGluaywgeyB0cmFpbGluZ1NsYXNoLCBiYXNlVXJsIH0pO1xuICAgIH1cbiAgICBjb25zdCBwcmVsb2FkZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IExpbmtDb21wb25lbnQgPSBpc05hdkxpbmsgPyBOYXZMaW5rIDogUlJMaW5rO1xuICAgIGNvbnN0IElPU3VwcG9ydGVkID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgbGV0IGlvO1xuICAgIGNvbnN0IGhhbmRsZUludGVyc2VjdGlvbiA9IChlbCwgY2IpID0+IHtcbiAgICAgICAgaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsID09PSBlbnRyeS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCwgc3RvcCBsaXN0ZW5pbmcvb2JzZXJ2aW5nIGFuZCBydW4gY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25fT2JzZXJ2ZXJfQVBJXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgZWxlbWVudCB0byB0aGUgb2JzZXJ2ZXIuXG4gICAgICAgIGlvLm9ic2VydmUoZWwpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVmID0gKHJlZikgPT4ge1xuICAgICAgICBpZiAoSU9TdXBwb3J0ZWQgJiYgcmVmICYmIGlzSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIC8vIElmIElPIHN1cHBvcnRlZCBhbmQgZWxlbWVudCByZWZlcmVuY2UgZm91bmQsIHNldHVwIE9ic2VydmVyIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgICAgICBoYW5kbGVJbnRlcnNlY3Rpb24ocmVmLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldExpbmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdXNhdXJ1cy5wcmVmZXRjaCh0YXJnZXRMaW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXByZWxvYWRlZC5jdXJyZW50ICYmIHRhcmdldExpbmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VzYXVydXMucHJlbG9hZCh0YXJnZXRMaW5rKTtcbiAgICAgICAgICAgIHByZWxvYWRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gSWYgSU8gaXMgbm90IHN1cHBvcnRlZC4gV2UgcHJlZmV0Y2ggYnkgZGVmYXVsdCAob25seSBvbmNlKS5cbiAgICAgICAgaWYgKCFJT1N1cHBvcnRlZCAmJiBpc0ludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0TGluayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VzYXVydXMucHJlZmV0Y2godGFyZ2V0TGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBzdG9wIGludGVyc2VjdGlvbiBvYnNlcnZlciBmcm9tIHdhdGNoaW5nLlxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKElPU3VwcG9ydGVkICYmIGlvKSB7XG4gICAgICAgICAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt0YXJnZXRMaW5rLCBJT1N1cHBvcnRlZCwgaXNJbnRlcm5hbF0pO1xuICAgIGNvbnN0IGlzQW5jaG9yTGluayA9IChfYSA9IHRhcmdldExpbmsgPT09IG51bGwgfHwgdGFyZ2V0TGluayA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0TGluay5zdGFydHNXaXRoKCcjJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xuICAgIGNvbnN0IGlzUmVndWxhckh0bWxMaW5rID0gIXRhcmdldExpbmsgfHwgIWlzSW50ZXJuYWwgfHwgaXNBbmNob3JMaW5rO1xuICAgIGlmICh0YXJnZXRMaW5rICYmIGlzSW50ZXJuYWwgJiYgIWlzQW5jaG9yTGluayAmJiAhbm9Ccm9rZW5MaW5rQ2hlY2spIHtcbiAgICAgICAgbGlua3NDb2xsZWN0b3IuY29sbGVjdExpbmsodGFyZ2V0TGluayk7XG4gICAgfVxuICAgIHJldHVybiBpc1JlZ3VsYXJIdG1sTGluayA/IChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50XG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiB0YXJnZXRMaW5rLCAuLi4odGFyZ2V0TGlua1VucHJlZml4ZWQgJiZcbiAgICAgICAgICAgICFpc0ludGVybmFsICYmIHsgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicgfSksIC4uLnByb3BzIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtDb21wb25lbnQsIHsgLi4ucHJvcHMsIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLCBpbm5lclJlZjogaGFuZGxlUmVmLCB0bzogdGFyZ2V0TGluayB8fCAnJywgLi4uKGlzTmF2TGluayAmJiB7IGlzQWN0aXZlLCBhY3RpdmVDbGFzc05hbWUgfSkgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKlxuTWluaW1hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIFJlYWN0IGludGVycG9sYXRlIGNvbXBvbmVudC5cbldlIGRvbid0IHNoaXAgYSBtYXJrZG93biBwYXJzZXIgbm9yIGEgZmVhdHVyZS1jb21wbGV0ZSBpMThuIGxpYnJhcnkgb24gcHVycG9zZS5cbk1vcmUgZGV0YWlscyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9wdWxsLzQyOTVcbiovXG5jb25zdCBWYWx1ZVJlZ2V4cCA9IC97XFx3K30vZztcbmNvbnN0IFZhbHVlRm91bmRNYXJrZXIgPSAne30nOyAvLyBkb2VzIG5vdCBjYXJlIG11Y2hcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh0ZXh0LCB2YWx1ZXMpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZFRleHQgPSB0ZXh0LnJlcGxhY2UoVmFsdWVSZWdleHAsIChtYXRjaCkgPT4ge1xuICAgICAgICAvLyByZW1vdmUge3sgYW5kIH19IGFyb3VuZCB0aGUgcGxhY2Vob2xkZXJcbiAgICAgICAgY29uc3Qga2V5ID0gbWF0Y2guc3Vic3RyKDEsIG1hdGNoLmxlbmd0aCAtIDIpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcyA9PT0gbnVsbCB8fCB2YWx1ZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IFJlYWN0LmlzVmFsaWRFbGVtZW50KHZhbHVlKVxuICAgICAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgICAgICA6IC8vIEZvciBub24tUmVhY3QgZWxlbWVudHM6IGJhc2ljIHByaW1pdGl2ZS0+c3RyaW5nIGNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWVGb3VuZE1hcmtlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDsgLy8gbm8gbWF0Y2g/IGFkZCB3YXJuaW5nP1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gTm8gaW50ZXJwb2xhdGlvbiB0byBiZSBkb25lOiBqdXN0IHJldHVybiB0aGUgdGV4dFxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIC8vIEJhc2ljIHN0cmluZyBpbnRlcnBvbGF0aW9uOiByZXR1cm5zIGludGVycG9sYXRlZCBzdHJpbmdcbiAgICBlbHNlIGlmIChlbGVtZW50cy5ldmVyeSgoZWwpID0+IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRUZXh0XG4gICAgICAgICAgICAuc3BsaXQoVmFsdWVGb3VuZE1hcmtlcilcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN0ciwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNvbmNhdCh2YWx1ZSkuY29uY2F0KChfYSA9IGVsZW1lbnRzW2luZGV4XSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuICAgIC8vIEpTWCBpbnRlcnBvbGF0aW9uOiByZXR1cm5zIFJlYWN0Tm9kZVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFxuICAgICAgICAgICAgLnNwbGl0KFZhbHVlRm91bmRNYXJrZXIpXG4gICAgICAgICAgICAucmVkdWNlKChhcnJheSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIC4uLmFycmF5LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNbaW5kZXhdKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcnBvbGF0ZSh7IGNoaWxkcmVuLCB2YWx1ZXMsIH0pIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGUoY2hpbGRyZW4sIHZhbHVlcyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludGVycG9sYXRlLCB7IGludGVycG9sYXRlLCB9IGZyb20gJ0Bkb2N1c2F1cnVzL0ludGVycG9sYXRlJztcbi8vIENhbid0IHJlYWQgaXQgZnJvbSBjb250ZXh0LCBkdWUgdG8gZXhwb3NpbmcgaW1wZXJhdGl2ZSBBUElcbmltcG9ydCBjb2RlVHJhbnNsYXRpb25zIGZyb20gJ0BnZW5lcmF0ZWQvY29kZVRyYW5zbGF0aW9ucyc7XG5mdW5jdGlvbiBnZXRMb2NhbGl6ZWRNZXNzYWdlKHsgaWQsIG1lc3NhZ2UsIH0pIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IGNvZGVUcmFuc2xhdGlvbnNbaWQgIT09IG51bGwgJiYgaWQgIT09IHZvaWQgMCA/IGlkIDogbWVzc2FnZV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG1lc3NhZ2U7XG59XG4vLyBJbXBlcmF0aXZlIHRyYW5zbGF0aW9uIEFQSSBpcyB1c2VmdWwgZm9yIHNvbWUgZWRnZS1jYXNlczpcbi8vIC0gdHJhbnNsYXRpbmcgcGFnZSB0aXRsZXMgKG1ldGEpXG4vLyAtIHRyYW5zbGF0aW5nIHN0cmluZyBwcm9wcyAoaW5wdXQgcGxhY2Vob2xkZXJzLCBpbWFnZSBhbHQsIGFyaWEgbGFiZWxzLi4uKVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSh7IG1lc3NhZ2UsIGlkIH0sIHZhbHVlcykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBsb2NhbGl6ZWRNZXNzYWdlID0gKF9hID0gZ2V0TG9jYWxpemVkTWVzc2FnZSh7IG1lc3NhZ2UsIGlkIH0pKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBtZXNzYWdlO1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZShsb2NhbGl6ZWRNZXNzYWdlLCB2YWx1ZXMpO1xufVxuLy8gTWF5YmUgd2UnbGwgd2FudCB0byBpbXByb3ZlIHRoaXMgY29tcG9uZW50IHdpdGggYWRkaXRpb25hbCBmZWF0dXJlc1xuLy8gTGlrZSB0b2dnbGluZyBhIHRyYW5zbGF0aW9uIG1vZGUgdGhhdCBhZGRzIGEgbGl0dGxlIHRyYW5zbGF0aW9uIGJ1dHRvbiBuZWFyIHRoZSB0ZXh0P1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNsYXRlKHsgY2hpbGRyZW4sIGlkLCB2YWx1ZXMsIH0pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9jYWxpemVkTWVzc2FnZSA9IChfYSA9IGdldExvY2FsaXplZE1lc3NhZ2UoeyBtZXNzYWdlOiBjaGlsZHJlbiwgaWQgfSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNoaWxkcmVuO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEludGVycG9sYXRlLCB7IHZhbHVlczogdmFsdWVzIH0sIGxvY2FsaXplZE1lc3NhZ2UpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3RvY29sKHVybCkge1xuICAgIHJldHVybiAvXihcXHcqOnxcXC9cXC8pLy50ZXN0KHVybCkgPT09IHRydWU7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ludGVybmFsVXJsKHVybCkge1xuICAgIHJldHVybiB0eXBlb2YgdXJsICE9PSAndW5kZWZpbmVkJyAmJiAhaGFzUHJvdG9jb2wodXJsKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHsgaGFzUHJvdG9jb2wgfSBmcm9tICcuL2lzSW50ZXJuYWxVcmwnO1xuZnVuY3Rpb24gYWRkQmFzZVVybChzaXRlVXJsLCBiYXNlVXJsLCB1cmwsIHsgZm9yY2VQcmVwZW5kQmFzZVVybCA9IGZhbHNlLCBhYnNvbHV0ZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8vIGl0IG5ldmVyIG1ha2VzIHNlbnNlIHRvIGFkZCBhIGJhc2UgdXJsIHRvIGEgbG9jYWwgYW5jaG9yIHVybFxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8vIGl0IG5ldmVyIG1ha2VzIHNlbnNlIHRvIGFkZCBhIGJhc2UgdXJsIHRvIGFuIHVybCB3aXRoIGEgcHJvdG9jb2xcbiAgICBpZiAoaGFzUHJvdG9jb2wodXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICBpZiAoZm9yY2VQcmVwZW5kQmFzZVVybCkge1xuICAgICAgICByZXR1cm4gYmFzZVVybCArIHVybDtcbiAgICB9XG4gICAgLy8gV2Ugc2hvdWxkIGF2b2lkIGFkZGluZyB0aGUgYmFzZXVybCB0d2ljZSBpZiBpdCdzIGFscmVhZHkgdGhlcmVcbiAgICBjb25zdCBzaG91bGRBZGRCYXNlVXJsID0gIXVybC5zdGFydHNXaXRoKGJhc2VVcmwpO1xuICAgIGNvbnN0IGJhc2VQYXRoID0gc2hvdWxkQWRkQmFzZVVybCA/IGJhc2VVcmwgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKSA6IHVybDtcbiAgICByZXR1cm4gYWJzb2x1dGUgPyBzaXRlVXJsICsgYmFzZVBhdGggOiBiYXNlUGF0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlVXJsVXRpbHMoKSB7XG4gICAgY29uc3QgeyBzaXRlQ29uZmlnOiB7IGJhc2VVcmwgPSAnLycsIHVybDogc2l0ZVVybCB9ID0ge30sIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpdGhCYXNlVXJsOiAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWRkQmFzZVVybChzaXRlVXJsLCBiYXNlVXJsLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYXNlVXJsKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3aXRoQmFzZVVybCB9ID0gdXNlQmFzZVVybFV0aWxzKCk7XG4gICAgcmV0dXJuIHdpdGhCYXNlVXJsKHVybCwgb3B0aW9ucyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnLi91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG4vLyBUT0RPIGFubm95aW5nIGNvbnN0YW50IGR1cGxpY2F0aW9uXG4vLyBpZiB3ZSBpbXBvcnQgc29tZXRoaW5nIGZyb20gb3V0c2lkZSB0aGUgL2NsaWVudCBmb2xkZXIsXG4vLyB0aGUgdHNjIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgaXMgYWZmZWN0ZWRcbi8vIGltcG9ydCB7REVGQVVMVF9QTFVHSU5fSUR9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5jb25zdCBERUZBVUxUX1BMVUdJTl9JRCA9ICdkZWZhdWx0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdsb2JhbERhdGEoKSB7XG4gICAgY29uc3QgeyBnbG9iYWxEYXRhIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICAgIGlmICghZ2xvYmFsRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvY3VzYXVydXMgZ2xvYmFsIGRhdGEgbm90IGZvdW5kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsRGF0YTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhKHBsdWdpbk5hbWUpIHtcbiAgICBjb25zdCBnbG9iYWxEYXRhID0gdXNlR2xvYmFsRGF0YSgpO1xuICAgIGNvbnN0IHBsdWdpbkdsb2JhbERhdGEgPSBnbG9iYWxEYXRhW3BsdWdpbk5hbWVdO1xuICAgIGlmICghcGx1Z2luR2xvYmFsRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvY3VzYXVydXMgcGx1Z2luIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCBmb3IgXCIke3BsdWdpbk5hbWV9XCIgcGx1Z2luLmApO1xuICAgIH1cbiAgICByZXR1cm4gcGx1Z2luR2xvYmFsRGF0YTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQbHVnaW5EYXRhKHBsdWdpbk5hbWUsIHBsdWdpbklkID0gREVGQVVMVF9QTFVHSU5fSUQpIHtcbiAgICBjb25zdCBwbHVnaW5HbG9iYWxEYXRhID0gdXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YShwbHVnaW5OYW1lKTtcbiAgICBjb25zdCBwbHVnaW5JbnN0YW5jZUdsb2JhbERhdGEgPSBwbHVnaW5HbG9iYWxEYXRhW3BsdWdpbklkXTtcbiAgICBpZiAoIXBsdWdpbkluc3RhbmNlR2xvYmFsRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvY3VzYXVydXMgcGx1Z2luIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCBmb3IgXCIke3BsdWdpbk5hbWV9XCIgcGx1Z2luIHdpdGggaWQgXCIke3BsdWdpbklkfVwiLmApO1xuICAgIH1cbiAgICByZXR1cm4gcGx1Z2luSW5zdGFuY2VHbG9iYWxEYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyA9IGV4cG9ydHMuZ2V0QWN0aXZlRG9jQ29udGV4dCA9IGV4cG9ydHMuZ2V0QWN0aXZlVmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0QWN0aXZlUGx1Z2luID0gdm9pZCAwO1xuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwiQGRvY3VzYXVydXMvcm91dGVyXCIpO1xuZnVuY3Rpb24gZ2V0QWN0aXZlUGx1Z2luKGFsbFBsdWdpbkRhdGFzLCBwYXRobmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYWN0aXZlRW50cnkgPSBPYmplY3QuZW50cmllcyhhbGxQbHVnaW5EYXRhcykuZmluZCgoW19pZCwgcGx1Z2luRGF0YV0pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcm91dGVyXzEubWF0Y2hQYXRoKHBhdGhuYW1lLCB7XG4gICAgICAgICAgICBwYXRoOiBwbHVnaW5EYXRhLnBhdGgsXG4gICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVQbHVnaW4gPSBhY3RpdmVFbnRyeVxuICAgICAgICA/IHsgcGx1Z2luSWQ6IGFjdGl2ZUVudHJ5WzBdLCBwbHVnaW5EYXRhOiBhY3RpdmVFbnRyeVsxXSB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIGlmICghYWN0aXZlUGx1Z2luICYmIG9wdGlvbnMuZmFpbGZhc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIGFjdGl2ZSBkb2NzIHBsdWdpbiBmb3IgXCIke3BhdGhuYW1lfVwiIHBhdGhuYW1lLCB3aGlsZSBpdCB3YXMgZXhwZWN0ZWQgdG8gYmUgZm91bmQuIE1heWJlIHlvdSB0cmllZCB0byB1c2UgYSBkb2NzIGZlYXR1cmUgdGhhdCBjYW4gb25seSBiZSB1c2VkIG9uIGEgZG9jcy1yZWxhdGVkIHBhZ2U/IEV4aXN0aW5nIGRvY3MgcGx1Z2luIHBhdGhzIGFyZTogJHtPYmplY3QudmFsdWVzKGFsbFBsdWdpbkRhdGFzKVxuICAgICAgICAgICAgLm1hcCgocGx1Z2luKSA9PiBwbHVnaW4ucGF0aClcbiAgICAgICAgICAgIC5qb2luKCcsICcpfWApO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlUGx1Z2luO1xufVxuZXhwb3J0cy5nZXRBY3RpdmVQbHVnaW4gPSBnZXRBY3RpdmVQbHVnaW47XG5jb25zdCBnZXRMYXRlc3RWZXJzaW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5maW5kKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLmlzTGFzdCk7XG59O1xuZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uID0gZ2V0TGF0ZXN0VmVyc2lvbjtcbi8vIE5vdGU6IHJldHVybiB1bmRlZmluZWQgb24gZG9jLXVucmVsYXRlZCBwYWdlcyxcbi8vIGJlY2F1c2UgdGhlcmUncyBubyB2ZXJzaW9uIGN1cnJlbnRseSBjb25zaWRlcmVkIGFzIGFjdGl2ZVxuY29uc3QgZ2V0QWN0aXZlVmVyc2lvbiA9IChkYXRhLCBwYXRobmFtZSkgPT4ge1xuICAgIGNvbnN0IGxhc3RWZXJzaW9uID0gZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uKGRhdGEpO1xuICAgIC8vIExhc3QgdmVyc2lvbiBpcyBhIHJvdXRlIGxpa2UgL2RvY3MvKixcbiAgICAvLyB3ZSBuZWVkIHRvIHRyeSB0byBtYXRjaCBpdCBsYXN0IG9yIGl0IHdvdWxkIG1hdGNoIC9kb2NzL3ZlcnNpb24tMS4wLyogYXMgd2VsbFxuICAgIGNvbnN0IG9yZGVyZWRWZXJzaW9uc01ldGFkYXRhID0gW1xuICAgICAgICAuLi5kYXRhLnZlcnNpb25zLmZpbHRlcigodmVyc2lvbikgPT4gdmVyc2lvbiAhPT0gbGFzdFZlcnNpb24pLFxuICAgICAgICBsYXN0VmVyc2lvbixcbiAgICBdO1xuICAgIHJldHVybiBvcmRlcmVkVmVyc2lvbnNNZXRhZGF0YS5maW5kKCh2ZXJzaW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAhIXJvdXRlcl8xLm1hdGNoUGF0aChwYXRobmFtZSwge1xuICAgICAgICAgICAgcGF0aDogdmVyc2lvbi5wYXRoLFxuICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5nZXRBY3RpdmVWZXJzaW9uID0gZ2V0QWN0aXZlVmVyc2lvbjtcbmNvbnN0IGdldEFjdGl2ZURvY0NvbnRleHQgPSAoZGF0YSwgcGF0aG5hbWUpID0+IHtcbiAgICBjb25zdCBhY3RpdmVWZXJzaW9uID0gZXhwb3J0cy5nZXRBY3RpdmVWZXJzaW9uKGRhdGEsIHBhdGhuYW1lKTtcbiAgICBjb25zdCBhY3RpdmVEb2MgPSBhY3RpdmVWZXJzaW9uID09PSBudWxsIHx8IGFjdGl2ZVZlcnNpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZVZlcnNpb24uZG9jcy5maW5kKChkb2MpID0+ICEhcm91dGVyXzEubWF0Y2hQYXRoKHBhdGhuYW1lLCB7XG4gICAgICAgIHBhdGg6IGRvYy5wYXRoLFxuICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICB9KSk7XG4gICAgZnVuY3Rpb24gZ2V0QWx0ZXJuYXRlVmVyc2lvbkRvY3MoZG9jSWQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGRhdGEudmVyc2lvbnMuZm9yRWFjaCgodmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgdmVyc2lvbi5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2MuaWQgPT09IGRvY0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFt2ZXJzaW9uLm5hbWVdID0gZG9jO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgY29uc3QgYWx0ZXJuYXRlVmVyc2lvbkRvY3MgPSBhY3RpdmVEb2NcbiAgICAgICAgPyBnZXRBbHRlcm5hdGVWZXJzaW9uRG9jcyhhY3RpdmVEb2MuaWQpXG4gICAgICAgIDoge307XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZlVmVyc2lvbixcbiAgICAgICAgYWN0aXZlRG9jLFxuICAgICAgICBhbHRlcm5hdGVEb2NWZXJzaW9uczogYWx0ZXJuYXRlVmVyc2lvbkRvY3MsXG4gICAgfTtcbn07XG5leHBvcnRzLmdldEFjdGl2ZURvY0NvbnRleHQgPSBnZXRBY3RpdmVEb2NDb250ZXh0O1xuY29uc3QgZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKGRhdGEsIHBhdGhuYW1lKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICBjb25zdCBhY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0KGRhdGEsIHBhdGhuYW1lKTtcbiAgICBjb25zdCBsYXRlc3REb2NTdWdnZXN0aW9uID0gYWN0aXZlRG9jQ29udGV4dCA9PT0gbnVsbCB8fCBhY3RpdmVEb2NDb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVEb2NDb250ZXh0LmFsdGVybmF0ZURvY1ZlcnNpb25zW2xhdGVzdFZlcnNpb24ubmFtZV07XG4gICAgcmV0dXJuIHsgbGF0ZXN0RG9jU3VnZ2VzdGlvbiwgbGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb246IGxhdGVzdFZlcnNpb24gfTtcbn07XG5leHBvcnRzLmdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyA9IGdldERvY1ZlcnNpb25TdWdnZXN0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSBleHBvcnRzLnVzZUFjdGl2ZURvY0NvbnRleHQgPSBleHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLnVzZUxhdGVzdFZlcnNpb24gPSBleHBvcnRzLnVzZVZlcnNpb25zID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW5BbmRWZXJzaW9uID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZURvY3NEYXRhID0gZXhwb3J0cy51c2VBbGxEb2NzRGF0YSA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAZG9jdXNhdXJ1cy9yb3V0ZXJcIik7XG5jb25zdCB1c2VHbG9iYWxEYXRhXzEgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiQGRvY3VzYXVydXMvdXNlR2xvYmFsRGF0YVwiKSk7XG5jb25zdCBkb2NzQ2xpZW50VXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jbGllbnQvZG9jc0NsaWVudFV0aWxzXCIpO1xuLy8gSW1wb3J0YW50IHRvIHVzZSBhIGNvbnN0YW50IG9iamVjdCB0byBhdm9pZCBSZWFjdCB1c2VFZmZlY3QgZXhlY3V0aW9ucyBldGMuLi4sXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzUwODlcbmNvbnN0IFN0YWJsZUVtcHR5T2JqZWN0ID0ge307XG4vLyBOb3QgdXNpbmcgdXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YSgpIGJlY2F1c2UgaW4gYmxvZy1vbmx5IG1vZGUsIGRvY3MgaG9va3MgYXJlIHN0aWxsIHVzZWQgYnkgdGhlIHRoZW1lXG4vLyBXZSBuZWVkIGEgZmFpbC1zYWZlIGZhbGxiYWNrIHdoZW4gdGhlIGRvY3MgcGx1Z2luIGlzIG5vdCBpbiB1c2VcbmNvbnN0IHVzZUFsbERvY3NEYXRhID0gKCkgPT4geyB2YXIgX2E7IFxuLy8gdXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJyk7XG5yZXR1cm4gKF9hID0gdXNlR2xvYmFsRGF0YV8xLmRlZmF1bHQoKVsnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJ10pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFN0YWJsZUVtcHR5T2JqZWN0OyB9O1xuZXhwb3J0cy51c2VBbGxEb2NzRGF0YSA9IHVzZUFsbERvY3NEYXRhO1xuY29uc3QgdXNlRG9jc0RhdGEgPSAocGx1Z2luSWQpID0+IHVzZUdsb2JhbERhdGFfMS51c2VQbHVnaW5EYXRhKCdkb2N1c2F1cnVzLXBsdWdpbi1jb250ZW50LWRvY3MnLCBwbHVnaW5JZCk7XG5leHBvcnRzLnVzZURvY3NEYXRhID0gdXNlRG9jc0RhdGE7XG5jb25zdCB1c2VBY3RpdmVQbHVnaW4gPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlQWxsRG9jc0RhdGEoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVQbHVnaW4oZGF0YSwgcGF0aG5hbWUsIG9wdGlvbnMpO1xufTtcbmV4cG9ydHMudXNlQWN0aXZlUGx1Z2luID0gdXNlQWN0aXZlUGx1Z2luO1xuY29uc3QgdXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZUFjdGl2ZVBsdWdpbihvcHRpb25zKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIGlmIChhY3RpdmVQbHVnaW4pIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IGRvY3NDbGllbnRVdGlsc18xLmdldEFjdGl2ZVZlcnNpb24oYWN0aXZlUGx1Z2luLnBsdWdpbkRhdGEsIHBhdGhuYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsdWdpbixcbiAgICAgICAgICAgIGFjdGl2ZVZlcnNpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuZXhwb3J0cy51c2VBY3RpdmVQbHVnaW5BbmRWZXJzaW9uID0gdXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbjtcbi8vIHZlcnNpb25zIGFyZSByZXR1cm5lZCBvcmRlcmVkIChtb3N0IHJlY2VudCBmaXJzdClcbmNvbnN0IHVzZVZlcnNpb25zID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIHJldHVybiBkYXRhLnZlcnNpb25zO1xufTtcbmV4cG9ydHMudXNlVmVyc2lvbnMgPSB1c2VWZXJzaW9ucztcbmNvbnN0IHVzZUxhdGVzdFZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldExhdGVzdFZlcnNpb24oZGF0YSk7XG59O1xuZXhwb3J0cy51c2VMYXRlc3RWZXJzaW9uID0gdXNlTGF0ZXN0VmVyc2lvbjtcbi8vIE5vdGU6IHJldHVybiB1bmRlZmluZWQgb24gZG9jLXVucmVsYXRlZCBwYWdlcyxcbi8vIGJlY2F1c2UgdGhlcmUncyBubyB2ZXJzaW9uIGN1cnJlbnRseSBjb25zaWRlcmVkIGFzIGFjdGl2ZVxuY29uc3QgdXNlQWN0aXZlVmVyc2lvbiA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVWZXJzaW9uKGRhdGEsIHBhdGhuYW1lKTtcbn07XG5leHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSB1c2VBY3RpdmVWZXJzaW9uO1xuY29uc3QgdXNlQWN0aXZlRG9jQ29udGV4dCA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVEb2NDb250ZXh0KGRhdGEsIHBhdGhuYW1lKTtcbn07XG5leHBvcnRzLnVzZUFjdGl2ZURvY0NvbnRleHQgPSB1c2VBY3RpdmVEb2NDb250ZXh0O1xuLy8gVXNlZnVsIHRvIHNheSBcImhleSwgeW91IGFyZSBub3Qgb24gdGhlIGxhdGVzdCBkb2NzIHZlcnNpb24sIHBsZWFzZSBzd2l0Y2hcIlxuY29uc3QgdXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcl8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyhkYXRhLCBwYXRobmFtZSk7XG59O1xuZXhwb3J0cy51c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSB1c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnM7XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwiaWNvbkV4dGVybmFsTGlua1wiOiBcImljb25FeHRlcm5hbExpbmtfM0o5S1wiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEljb25FeHRlcm5hbExpbmsgPSAoe3dpZHRoID0gMTMuNSwgaGVpZ2h0ID0gMTMuNX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25FeHRlcm5hbExpbmt9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGQ9XCJNMjEgMTN2MTBoLTIxdi0xOWgxMnYyaC0xMHYxNWgxN3YtOGgyem0zLTEyaC0xMC45ODhsNC4wMzUgNC02Ljk3NyA3LjA3IDIuODI4IDIuODI4IDYuOTc3LTcuMDcgNC4xMjUgNC4xNzJ2LTExelwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkV4dGVybmFsTGluaztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25NZW51ID0gKHt3aWR0aCA9IDMwLCBoZWlnaHQgPSAzMCwgY2xhc3NOYW1lLCAuLi5yZXN0UHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk00IDdoMjJNNCAxNWgyMk00IDIzaDIyXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTWVudTtcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJza2lwVG9Db250ZW50XCI6IFwic2tpcFRvQ29udGVudF8xb1VQXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcbmltcG9ydCB7dXNlTG9jYXRpb25DaGFuZ2V9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBwcm9ncmFtbWF0aWNGb2N1cyhlbCkge1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIGVsLmZvY3VzKCk7XG4gIGVsLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbn1cblxuZnVuY3Rpb24gU2tpcFRvQ29udGVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB7YWN0aW9ufSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVTa2lwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluOmZpcnN0LW9mLXR5cGUnKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td3JhcHBlcicpO1xuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHByb2dyYW1tYXRpY0ZvY3VzKHRhcmdldEVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICB1c2VMb2NhdGlvbkNoYW5nZSgoe2xvY2F0aW9ufSkgPT4ge1xuICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCAmJiAhbG9jYXRpb24uaGFzaCAmJiBhY3Rpb24gIT09ICdQT1AnKSB7XG4gICAgICBwcm9ncmFtbWF0aWNGb2N1cyhjb250YWluZXJSZWYuY3VycmVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovfVxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5za2lwVG9Db250ZW50fSBvbkNsaWNrPXtoYW5kbGVTa2lwfT5cbiAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgIGlkPVwidGhlbWUuY29tbW9uLnNraXBUb01haW5Db250ZW50XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBza2lwIHRvIGNvbnRlbnQgbGFiZWwgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSwgYWxsb3dpbmcgdG8gcmFwaWRseSBuYXZpZ2F0ZSB0byBtYWluIGNvbnRlbnQgd2l0aCBrZXlib2FyZCB0YWIvZW50ZXIgbmF2aWdhdGlvblwiPlxuICAgICAgICAgIFNraXAgdG8gbWFpbiBjb250ZW50XG4gICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lwVG9Db250ZW50O1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcImFubm91bmNlbWVudEJhclwiOiBcImFubm91bmNlbWVudEJhcl8zV3NXXCIsXG5cdFwiYW5ub3VuY2VtZW50QmFyQ2xvc2VcIjogXCJhbm5vdW5jZW1lbnRCYXJDbG9zZV8zOG54XCIsXG5cdFwiYW5ub3VuY2VtZW50QmFyQ29udGVudFwiOiBcImFubm91bmNlbWVudEJhckNvbnRlbnRfM0VVQ1wiLFxuXHRcImFubm91bmNlbWVudEJhckNsb3NlYWJsZVwiOiBcImFubm91bmNlbWVudEJhckNsb3NlYWJsZV8zbXlSXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnLCB1c2VBbm5vdW5jZW1lbnRCYXJ9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQge3RyYW5zbGF0ZX0gZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEFubm91bmNlbWVudEJhcigpIHtcbiAgY29uc3Qge2lzQ2xvc2VkLCBjbG9zZX0gPSB1c2VBbm5vdW5jZW1lbnRCYXIoKTtcbiAgY29uc3Qge2Fubm91bmNlbWVudEJhcn0gPSB1c2VUaGVtZUNvbmZpZygpO1xuXG4gIGlmICghYW5ub3VuY2VtZW50QmFyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7Y29udGVudCwgYmFja2dyb3VuZENvbG9yLCB0ZXh0Q29sb3IsIGlzQ2xvc2VhYmxlfSA9IGFubm91bmNlbWVudEJhcjtcblxuICBpZiAoIWNvbnRlbnQgfHwgKGlzQ2xvc2VhYmxlICYmIGlzQ2xvc2VkKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbm5vdW5jZW1lbnRCYXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGNvbG9yOiB0ZXh0Q29sb3IsXG4gICAgICB9fVxuICAgICAgcm9sZT1cImJhbm5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmFubm91bmNlbWVudEJhckNvbnRlbnQsIHtcbiAgICAgICAgICBbc3R5bGVzLmFubm91bmNlbWVudEJhckNsb3NlYWJsZV06IGlzQ2xvc2VhYmxlLFxuICAgICAgICB9KX0gLy8gRGV2ZWxvcGVyIHByb3ZpZGVkIHRoZSBIVE1MLCBzbyBhc3N1bWUgaXQncyBzYWZlLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBjb250ZW50LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtpc0Nsb3NlYWJsZSA/IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuYW5ub3VuY2VtZW50QmFyQ2xvc2UsICdjbGVhbi1idG4nKX1cbiAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoe1xuICAgICAgICAgICAgaWQ6ICd0aGVtZS5Bbm5vdW5jZW1lbnRCYXIuY2xvc2VCdXR0b25BcmlhTGFiZWwnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Nsb3NlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIEFSSUEgbGFiZWwgZm9yIGNsb3NlIGJ1dHRvbiBvZiBhbm5vdW5jZW1lbnQgYmFyJyxcbiAgICAgICAgICB9KX0+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFubm91bmNlbWVudEJhcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+IG51bGw7XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwidG9nZ2xlXCI6IFwidG9nZ2xlXzcxYlRcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIG1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlVGhlbWVDb25maWd9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBEYXJrID0gKHtpY29uLCBzdHlsZX0pID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy50b2dnbGUsIHN0eWxlcy5kYXJrKX0gc3R5bGU9e3N0eWxlfT5cbiAgICB7aWNvbn1cbiAgPC9zcGFuPlxuKTtcblxuY29uc3QgTGlnaHQgPSAoe2ljb24sIHN0eWxlfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnRvZ2dsZSwgc3R5bGVzLmxpZ2h0KX0gc3R5bGU9e3N0eWxlfT5cbiAgICB7aWNvbn1cbiAgPC9zcGFuPlxuKTsgLy8gQmFzZWQgb24gcmVhY3QtdG9nZ2xlIChodHRwczovL2dpdGh1Yi5jb20vYWFyb25zaGFmL3JlYWN0LXRvZ2dsZS8pLlxuXG5jb25zdCBUb2dnbGUgPSBtZW1vKFxuICAoe2NsYXNzTmFtZSwgaWNvbnMsIGNoZWNrZWQ6IGRlZmF1bHRDaGVja2VkLCBkaXNhYmxlZCwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZGVmYXVsdENoZWNrZWQpO1xuICAgIGNvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3JlYWN0LXRvZ2dsZScsIGNsYXNzTmFtZSwge1xuICAgICAgICAgICdyZWFjdC10b2dnbGUtLWNoZWNrZWQnOiBjaGVja2VkLFxuICAgICAgICAgICdyZWFjdC10b2dnbGUtLWZvY3VzJzogZm9jdXNlZCxcbiAgICAgICAgICAncmVhY3QtdG9nZ2xlLS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICB9KX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC10b2dnbGUtdHJhY2tcIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50Py5jbGljaygpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LXRvZ2dsZS10cmFjay1jaGVja1wiPntpY29ucy5jaGVja2VkfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtdG9nZ2xlLXRyYWNrLXhcIj57aWNvbnMudW5jaGVja2VkfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtdG9nZ2xlLXRodW1iXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtdG9nZ2xlLXNjcmVlbnJlYWRlci1vbmx5XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3dpdGNoIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgbW9kZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoZWNrZWQoIWNoZWNrZWQpfVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzZWQodHJ1ZSl9XG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRGb2N1c2VkKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjb2xvck1vZGU6IHtcbiAgICAgIHN3aXRjaENvbmZpZzoge2RhcmtJY29uLCBkYXJrSWNvblN0eWxlLCBsaWdodEljb24sIGxpZ2h0SWNvblN0eWxlfSxcbiAgICB9LFxuICB9ID0gdXNlVGhlbWVDb25maWcoKTtcbiAgY29uc3Qge2lzQ2xpZW50fSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPFRvZ2dsZVxuICAgICAgZGlzYWJsZWQ9eyFpc0NsaWVudH1cbiAgICAgIGljb25zPXt7XG4gICAgICAgIGNoZWNrZWQ6IDxEYXJrIGljb249e2RhcmtJY29ufSBzdHlsZT17ZGFya0ljb25TdHlsZX0gLz4sXG4gICAgICAgIHVuY2hlY2tlZDogPExpZ2h0IGljb249e2xpZ2h0SWNvbn0gc3R5bGU9e2xpZ2h0SWNvblN0eWxlfSAvPixcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tICdAdGhlbWUvaG9va3MvdXNlU2Nyb2xsUG9zaXRpb24nO1xuaW1wb3J0IHt1c2VMb2NhdGlvbkNoYW5nZX0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcblxuY29uc3QgdXNlSGlkZWFibGVOYXZiYXIgPSAoaGlkZU9uU2Nyb2xsKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgW2lzTmF2YmFyVmlzaWJsZSwgc2V0SXNOYXZiYXJWaXNpYmxlXSA9IHVzZVN0YXRlKGhpZGVPblNjcm9sbCk7XG4gIGNvbnN0IGlzRm9jdXNlZEFuY2hvciA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFtuYXZiYXJIZWlnaHQsIHNldE5hdmJhckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgbmF2YmFyUmVmID0gdXNlQ2FsbGJhY2soKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2V0TmF2YmFySGVpZ2h0KG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHtzY3JvbGxZOiBzY3JvbGxUb3B9LCB7c2Nyb2xsWTogbGFzdFNjcm9sbFRvcH0pID0+IHtcbiAgICAgIGlmICghaGlkZU9uU2Nyb2xsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA8IG5hdmJhckhlaWdodCkge1xuICAgICAgICBzZXRJc05hdmJhclZpc2libGUodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRm9jdXNlZEFuY2hvci5jdXJyZW50KSB7XG4gICAgICAgIGlzRm9jdXNlZEFuY2hvci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHNldElzTmF2YmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RTY3JvbGxUb3AgJiYgc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgIHNldElzTmF2YmFyVmlzaWJsZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gbmF2YmFySGVpZ2h0O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBpZiAobGFzdFNjcm9sbFRvcCAmJiBzY3JvbGxUb3AgPj0gbGFzdFNjcm9sbFRvcCkge1xuICAgICAgICBzZXRJc05hdmJhclZpc2libGUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQgPCBkb2N1bWVudEhlaWdodCkge1xuICAgICAgICBzZXRJc05hdmJhclZpc2libGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbbmF2YmFySGVpZ2h0LCBpc0ZvY3VzZWRBbmNob3JdLFxuICApO1xuICB1c2VMb2NhdGlvbkNoYW5nZSgobG9jYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgIGlmICghaGlkZU9uU2Nyb2xsIHx8IGxvY2F0aW9uQ2hhbmdlRXZlbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzTmF2YmFyVmlzaWJsZSh0cnVlKTtcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoaWRlT25TY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpc0ZvY3VzZWRBbmNob3IuY3VycmVudCA9IHRydWU7XG4gIH0sIFtsb2NhdGlvbi5oYXNoXSk7XG4gIHJldHVybiB7XG4gICAgbmF2YmFyUmVmLFxuICAgIGlzTmF2YmFyVmlzaWJsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhpZGVhYmxlTmF2YmFyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkxhbmd1YWdlID0gKHt3aWR0aCA9IDIwLCBoZWlnaHQgPSAyMCwgLi4ucHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGQ9XCJNMTkuNzUzIDEwLjkwOWMtLjYyNC0xLjcwNy0yLjM2Ni0yLjcyNi00LjY2MS0yLjcyNi0uMDkgMC0uMTc2LjAwMi0uMjYyLjAwNmwtLjAxNi0yLjA2MyAzLjUyNS0uNjA3Yy4xMTUtLjAxOS4xMzMtLjExOS4xMDktLjIzMS0uMDIzLS4xMTEtLjE2Ny0uODgzLS4xODgtLjk3Ni0uMDI3LS4xMzEtLjEwMi0uMTI3LS4yMDctLjEwOS0uMTA0LjAxOC0zLjI1LjQ2MS0zLjI1LjQ2MWwtLjAxMy0yLjA3OGMtLjAwMS0uMTI1LS4wNjktLjE1OC0uMTk0LS4xNTZsLTEuMDI1LjAxNmMtLjEwNS4wMDItLjE2NC4wNDktLjE2Mi4xNDhsLjAzMyAyLjMwN3MtMy4wNjEuNTI3LTMuMTQ0LjU0M2MtLjA4NC4wMTQtLjE3LjA1My0uMTUxLjE0My4wMTkuMDkuMTkgMS4wOTQuMjA4IDEuMTcyLjAxOC4wOC4wNzIuMTI5LjE4OC4xMDdsMi45MjQtLjUwNC4wMzUgMi4wMThjLTEuMDc3LjI4MS0xLjgwMS44MjQtMi4yNTYgMS4zMDMtLjc2OC44MDctMS4yMDcgMS44ODctMS4yMDcgMi45NjMgMCAxLjU4Ni45NzEgMi41MjkgMi4zMjggMi42OTUgMy4xNjIuMzg3IDUuMTE5LTMuMDYgNS43NjktNC43MTUgMS4wOTcgMS41MDYuMjU2IDQuMzU0LTIuMDk0IDUuOTgtLjA0My4wMjktLjA5OC4xMjktLjAzMy4yMDdsLjYxOS43NTZjLjA4LjA5Ni4yMDYuMDU5LjI1Ni4wMjMgMi41MS0xLjczIDMuNjYxLTQuNTE1IDIuODY5LTYuNjgzem0tNy4zODYgMy4xODhjLS45NjYtLjEyMS0uOTQ0LS45MTQtLjk0NC0xLjQ1MyAwLS43NzMuMzI3LTEuNTguODc2LTIuMTU2YTMuMjEgMy4yMSAwIDAxMS4yMjktLjc5OWwuMDgyIDQuMjc3YTIuNzczIDIuNzczIDAgMDEtMS4yNDMuMTMxem0yLjQyNy0uNTUzbC4wNDYtNC4xMDljLjA4NC0uMDA0LjE2Ni0uMDEuMjUyLS4wMS43NzMgMCAxLjQ5NC4xNDUgMS44ODUuMzYxLjM5MS4yMTctMS4wMjMgMi43MTMtMi4xODMgMy43NTh6bS04Ljk1LTcuNjY4YS4xOTYuMTk2IDAgMDAtLjE5Ni0uMTQ1aC0xLjk1YS4xOTQuMTk0IDAgMDAtLjE5NC4xNDRMLjAwOCAxNi45MTZjLS4wMTcuMDUxLS4wMTEuMDc2LjA2Mi4wNzZoMS43MzNjLjA3NSAwIC4wOTktLjAyMy4xMTQtLjA3MmwxLjAwOC0zLjMxOGgzLjQ5NmwxLjAwOCAzLjMxOGMuMDE2LjA0OS4wMzkuMDcyLjExMy4wNzJoMS43MzRjLjA3MiAwIC4wNzgtLjAyNS4wNjItLjA3Ni0uMDE0LS4wNS0zLjA4My05Ljc0MS0zLjQ5NC0xMS4wNHptLTIuNjE4IDYuMzE4bDEuNDQ3LTUuMjUgMS40NDcgNS4yNUgzLjIyNnpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25MYW5ndWFnZTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVmYXVsdE5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0vRGVmYXVsdE5hdmJhckl0ZW0nO1xuaW1wb3J0IEljb25MYW5ndWFnZSBmcm9tICdAdGhlbWUvSWNvbkxhbmd1YWdlJztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQge3VzZUFsdGVybmF0ZVBhZ2VVdGlsc30gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2FsZURyb3Bkb3duTmF2YmFySXRlbSh7XG4gIG1vYmlsZSxcbiAgZHJvcGRvd25JdGVtc0JlZm9yZSxcbiAgZHJvcGRvd25JdGVtc0FmdGVyLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCB7XG4gICAgaTE4bjoge2N1cnJlbnRMb2NhbGUsIGxvY2FsZXMsIGxvY2FsZUNvbmZpZ3N9LFxuICB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgY29uc3QgYWx0ZXJuYXRlUGFnZVV0aWxzID0gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzKCk7XG5cbiAgZnVuY3Rpb24gZ2V0TG9jYWxlTGFiZWwobG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZUNvbmZpZ3NbbG9jYWxlXS5sYWJlbDtcbiAgfVxuXG4gIGNvbnN0IGxvY2FsZUl0ZW1zID0gbG9jYWxlcy5tYXAoKGxvY2FsZSkgPT4ge1xuICAgIGNvbnN0IHRvID0gYHBhdGhuYW1lOi8vJHthbHRlcm5hdGVQYWdlVXRpbHMuY3JlYXRlVXJsKHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZ1bGx5UXVhbGlmaWVkOiBmYWxzZSxcbiAgICB9KX1gO1xuICAgIHJldHVybiB7XG4gICAgICBpc05hdkxpbms6IHRydWUsXG4gICAgICBsYWJlbDogZ2V0TG9jYWxlTGFiZWwobG9jYWxlKSxcbiAgICAgIHRvLFxuICAgICAgdGFyZ2V0OiAnX3NlbGYnLFxuICAgICAgYXV0b0FkZEJhc2VVcmw6IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBsb2NhbGUgPT09IGN1cnJlbnRMb2NhbGUgPyAnZHJvcGRvd25fX2xpbmstLWFjdGl2ZScgOiAnJyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGl0ZW1zID0gWy4uLmRyb3Bkb3duSXRlbXNCZWZvcmUsIC4uLmxvY2FsZUl0ZW1zLCAuLi5kcm9wZG93bkl0ZW1zQWZ0ZXJdOyAvLyBNb2JpbGUgaXMgaGFuZGxlZCBhIGJpdCBkaWZmZXJlbnRseVxuXG4gIGNvbnN0IGRyb3Bkb3duTGFiZWwgPSBtb2JpbGUgPyAnTGFuZ3VhZ2VzJyA6IGdldExvY2FsZUxhYmVsKGN1cnJlbnRMb2NhbGUpO1xuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TmF2YmFySXRlbVxuICAgICAgey4uLnByb3BzfVxuICAgICAgaHJlZj1cIiNcIlxuICAgICAgbW9iaWxlPXttb2JpbGV9XG4gICAgICBsYWJlbD17XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxJY29uTGFuZ3VhZ2VcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0ZXh0LWJvdHRvbScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPntkcm9wZG93bkxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgIC8+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAdGhlbWUvU2VhcmNoQmFyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaE5hdmJhckl0ZW0oe21vYmlsZX0pIHtcbiAgaWYgKG1vYmlsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxTZWFyY2hCYXIgLz47XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHROYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL0RlZmF1bHROYXZiYXJJdGVtJztcbmltcG9ydCBMb2NhbGVEcm9wZG93bk5hdmJhckl0ZW0gZnJvbSAnQHRoZW1lL05hdmJhckl0ZW0vTG9jYWxlRHJvcGRvd25OYXZiYXJJdGVtJztcbmltcG9ydCBTZWFyY2hOYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL1NlYXJjaE5hdmJhckl0ZW0nO1xuY29uc3QgTmF2YmFySXRlbUNvbXBvbmVudHMgPSB7XG4gIGRlZmF1bHQ6ICgpID0+IERlZmF1bHROYXZiYXJJdGVtLFxuICBsb2NhbGVEcm9wZG93bjogKCkgPT4gTG9jYWxlRHJvcGRvd25OYXZiYXJJdGVtLFxuICBzZWFyY2g6ICgpID0+IFNlYXJjaE5hdmJhckl0ZW0sXG4gIC8vIE5lZWQgdG8gbGF6eSBsb2FkIHRoZXNlIGl0ZW1zIGFzIHdlIGRvbid0IGtub3cgZm9yIHN1cmUgdGhlIGRvY3MgcGx1Z2luIGlzIGxvYWRlZFxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzNjBcbiAgZG9jc1ZlcnNpb246ICgpID0+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMsIGdsb2JhbC1yZXF1aXJlXG4gICAgcmVxdWlyZSgnQHRoZW1lL05hdmJhckl0ZW0vRG9jc1ZlcnNpb25OYXZiYXJJdGVtJykuZGVmYXVsdCxcbiAgZG9jc1ZlcnNpb25Ecm9wZG93bjogKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcywgZ2xvYmFsLXJlcXVpcmVcbiAgICByZXF1aXJlKCdAdGhlbWUvTmF2YmFySXRlbS9Eb2NzVmVyc2lvbkRyb3Bkb3duTmF2YmFySXRlbScpLmRlZmF1bHQsXG4gIGRvYzogKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcywgZ2xvYmFsLXJlcXVpcmVcbiAgICByZXF1aXJlKCdAdGhlbWUvTmF2YmFySXRlbS9Eb2NOYXZiYXJJdGVtJykuZGVmYXVsdCxcbn07XG5cbmNvbnN0IGdldE5hdmJhckl0ZW1Db21wb25lbnQgPSAodHlwZSA9ICdkZWZhdWx0JykgPT4ge1xuICBjb25zdCBuYXZiYXJJdGVtQ29tcG9uZW50ID0gTmF2YmFySXRlbUNvbXBvbmVudHNbdHlwZV07XG5cbiAgaWYgKCFuYXZiYXJJdGVtQ29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBOYXZiYXJJdGVtIGNvbXBvbmVudCBmb3VuZCBmb3IgdHlwZSBcIiR7dHlwZX1cIi5gKTtcbiAgfVxuXG4gIHJldHVybiBuYXZiYXJJdGVtQ29tcG9uZW50KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXJJdGVtKHt0eXBlLCAuLi5wcm9wc30pIHtcbiAgY29uc3QgTmF2YmFySXRlbUNvbXBvbmVudCA9IGdldE5hdmJhckl0ZW1Db21wb25lbnQodHlwZSk7XG4gIHJldHVybiA8TmF2YmFySXRlbUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufVxuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcImRpc3BsYXlPbmx5SW5MYXJnZVZpZXdwb3J0XCI6IFwiZGlzcGxheU9ubHlJbkxhcmdlVmlld3BvcnRfR3JaMlwiLFxuXHRcIm5hdmJhckhpZGVhYmxlXCI6IFwibmF2YmFySGlkZWFibGVfMnFjclwiLFxuXHRcIm5hdmJhckhpZGRlblwiOiBcIm5hdmJhckhpZGRlbl8zeWV5XCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ0B0aGVtZS9TZWFyY2hCYXInO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdAdGhlbWUvVG9nZ2xlJztcbmltcG9ydCB1c2VUaGVtZUNvbnRleHQgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVRoZW1lQ29udGV4dCc7XG5pbXBvcnQge3VzZVRoZW1lQ29uZmlnfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuaW1wb3J0IHVzZUhpZGVhYmxlTmF2YmFyIGZyb20gJ0B0aGVtZS9ob29rcy91c2VIaWRlYWJsZU5hdmJhcic7XG5pbXBvcnQgdXNlTG9ja0JvZHlTY3JvbGwgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZUxvY2tCb2R5U2Nyb2xsJztcbmltcG9ydCB1c2VXaW5kb3dTaXplLCB7d2luZG93U2l6ZXN9IGZyb20gJ0B0aGVtZS9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCBOYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtJztcbmltcG9ydCBMb2dvIGZyb20gJ0B0aGVtZS9Mb2dvJztcbmltcG9ydCBJY29uTWVudSBmcm9tICdAdGhlbWUvSWNvbk1lbnUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJzsgLy8gcmV0cm9jb21wYXRpYmxlIHdpdGggdjFcblxuY29uc3QgRGVmYXVsdE5hdkl0ZW1Qb3NpdGlvbiA9ICdyaWdodCc7IC8vIElmIHNwbGl0IGxpbmtzIGJ5IGxlZnQvcmlnaHRcbi8vIGlmIHBvc2l0aW9uIGlzIHVuc3BlY2lmaWVkLCBmYWxsYmFjayB0byByaWdodCAoYXMgdjEpXG5cbmZ1bmN0aW9uIHNwbGl0TmF2SXRlbXNCeVBvc2l0aW9uKGl0ZW1zKSB7XG4gIGNvbnN0IGxlZnRJdGVtcyA9IGl0ZW1zLmZpbHRlcihcbiAgICAoaXRlbSkgPT4gKGl0ZW0ucG9zaXRpb24gPz8gRGVmYXVsdE5hdkl0ZW1Qb3NpdGlvbikgPT09ICdsZWZ0JyxcbiAgKTtcbiAgY29uc3QgcmlnaHRJdGVtcyA9IGl0ZW1zLmZpbHRlcihcbiAgICAoaXRlbSkgPT4gKGl0ZW0ucG9zaXRpb24gPz8gRGVmYXVsdE5hdkl0ZW1Qb3NpdGlvbikgPT09ICdyaWdodCcsXG4gICk7XG4gIHJldHVybiB7XG4gICAgbGVmdEl0ZW1zLFxuICAgIHJpZ2h0SXRlbXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3Qge1xuICAgIG5hdmJhcjoge2l0ZW1zLCBoaWRlT25TY3JvbGwsIHN0eWxlfSxcbiAgICBjb2xvck1vZGU6IHtkaXNhYmxlU3dpdGNoOiBkaXNhYmxlQ29sb3JNb2RlU3dpdGNofSxcbiAgfSA9IHVzZVRoZW1lQ29uZmlnKCk7XG4gIGNvbnN0IFtzaWRlYmFyU2hvd24sIHNldFNpZGViYXJTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtpc0RhcmtUaGVtZSwgc2V0TGlnaHRUaGVtZSwgc2V0RGFya1RoZW1lfSA9IHVzZVRoZW1lQ29udGV4dCgpO1xuICBjb25zdCB7bmF2YmFyUmVmLCBpc05hdmJhclZpc2libGV9ID0gdXNlSGlkZWFibGVOYXZiYXIoaGlkZU9uU2Nyb2xsKTtcbiAgdXNlTG9ja0JvZHlTY3JvbGwoc2lkZWJhclNob3duKTtcbiAgY29uc3Qgc2hvd1NpZGViYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2lkZWJhclNob3duKHRydWUpO1xuICB9LCBbc2V0U2lkZWJhclNob3duXSk7XG4gIGNvbnN0IGhpZGVTaWRlYmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNpZGViYXJTaG93bihmYWxzZSk7XG4gIH0sIFtzZXRTaWRlYmFyU2hvd25dKTtcbiAgY29uc3Qgb25Ub2dnbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4gKGUudGFyZ2V0LmNoZWNrZWQgPyBzZXREYXJrVGhlbWUoKSA6IHNldExpZ2h0VGhlbWUoKSksXG4gICAgW3NldExpZ2h0VGhlbWUsIHNldERhcmtUaGVtZV0sXG4gICk7XG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1NpemUgPT09IHdpbmRvd1NpemVzLmRlc2t0b3ApIHtcbiAgICAgIHNldFNpZGViYXJTaG93bihmYWxzZSk7XG4gICAgfVxuICB9LCBbd2luZG93U2l6ZV0pO1xuICBjb25zdCBoYXNTZWFyY2hOYXZiYXJJdGVtID0gaXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS50eXBlID09PSAnc2VhcmNoJyk7XG4gIGNvbnN0IHtsZWZ0SXRlbXMsIHJpZ2h0SXRlbXN9ID0gc3BsaXROYXZJdGVtc0J5UG9zaXRpb24oaXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIHJlZj17bmF2YmFyUmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCduYXZiYXInLCAnbmF2YmFyLS1maXhlZC10b3AnLCB7XG4gICAgICAgICduYXZiYXItLWRhcmsnOiBzdHlsZSA9PT0gJ2RhcmsnLFxuICAgICAgICAnbmF2YmFyLS1wcmltYXJ5Jzogc3R5bGUgPT09ICdwcmltYXJ5JyxcbiAgICAgICAgJ25hdmJhci1zaWRlYmFyLS1zaG93Jzogc2lkZWJhclNob3duLFxuICAgICAgICBbc3R5bGVzLm5hdmJhckhpZGVhYmxlXTogaGlkZU9uU2Nyb2xsLFxuICAgICAgICBbc3R5bGVzLm5hdmJhckhpZGRlbl06IGhpZGVPblNjcm9sbCAmJiAhaXNOYXZiYXJWaXNpYmxlLFxuICAgICAgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfX2lubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtc1wiPlxuICAgICAgICAgIHtpdGVtcyAhPSBudWxsICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOYXZpZ2F0aW9uIGJhciB0b2dnbGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJfX3RvZ2dsZSBjbGVhbi1idG5cIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dTaWRlYmFyfVxuICAgICAgICAgICAgICBvbktleURvd249e3Nob3dTaWRlYmFyfT5cbiAgICAgICAgICAgICAgPEljb25NZW51IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJfX2JyYW5kXCJcbiAgICAgICAgICAgIGltYWdlQ2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NOYW1lPVwibmF2YmFyX190aXRsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7bGVmdEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPE5hdmJhckl0ZW0gey4uLml0ZW19IGtleT17aX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19pdGVtcyBuYXZiYXJfX2l0ZW1zLS1yaWdodFwiPlxuICAgICAgICAgIHtyaWdodEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPE5hdmJhckl0ZW0gey4uLml0ZW19IGtleT17aX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7IWRpc2FibGVDb2xvck1vZGVTd2l0Y2ggJiYgKFxuICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5T25seUluTGFyZ2VWaWV3cG9ydH1cbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrVGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRvZ2dsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IWhhc1NlYXJjaE5hdmJhckl0ZW0gJiYgPFNlYXJjaEJhciAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1zaWRlYmFyX19iYWNrZHJvcFwiXG4gICAgICAgIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc2lkZWJhcl9fYnJhbmRcIj5cbiAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyX19icmFuZFwiXG4gICAgICAgICAgICBpbWFnZUNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiXG4gICAgICAgICAgICB0aXRsZUNsYXNzTmFtZT1cIm5hdmJhcl9fdGl0bGVcIlxuICAgICAgICAgICAgb25DbGljaz17aGlkZVNpZGViYXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWRpc2FibGVDb2xvck1vZGVTd2l0Y2ggJiYgc2lkZWJhclNob3duICYmIChcbiAgICAgICAgICAgIDxUb2dnbGUgY2hlY2tlZD17aXNEYXJrVGhlbWV9IG9uQ2hhbmdlPXtvblRvZ2dsZUNoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc2lkZWJhcl9faXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19saXN0XCI+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TmF2YmFySXRlbVxuICAgICAgICAgICAgICAgICAgbW9iaWxlXG4gICAgICAgICAgICAgICAgICB7Li4uaXRlbX0gLy8gVE9ETyBmaXggdHlwaW5nXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRlU2lkZWJhcn1cbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJmb290ZXJMb2dvTGlua1wiOiBcImZvb3RlckxvZ29MaW5rX015RmNcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBMaW5rIGZyb20gJ0Bkb2N1c2F1cnVzL0xpbmsnO1xuaW1wb3J0IHt1c2VUaGVtZUNvbmZpZ30gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCB1c2VCYXNlVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL3VzZUJhc2VVcmwnO1xuaW1wb3J0IGlzSW50ZXJuYWxVcmwgZnJvbSAnQGRvY3VzYXVydXMvaXNJbnRlcm5hbFVybCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFRoZW1lZEltYWdlIGZyb20gJ0B0aGVtZS9UaGVtZWRJbWFnZSc7XG5pbXBvcnQgSWNvbkV4dGVybmFsTGluayBmcm9tICdAdGhlbWUvSWNvbkV4dGVybmFsTGluayc7XG5cbmZ1bmN0aW9uIEZvb3Rlckxpbmsoe3RvLCBocmVmLCBsYWJlbCwgcHJlcGVuZEJhc2VVcmxUb0hyZWYsIC4uLnByb3BzfSkge1xuICBjb25zdCB0b1VybCA9IHVzZUJhc2VVcmwodG8pO1xuICBjb25zdCBub3JtYWxpemVkSHJlZiA9IHVzZUJhc2VVcmwoaHJlZiwge1xuICAgIGZvcmNlUHJlcGVuZEJhc2VVcmw6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmstaXRlbVwiXG4gICAgICB7Li4uKGhyZWZcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBocmVmOiBwcmVwZW5kQmFzZVVybFRvSHJlZiA/IG5vcm1hbGl6ZWRIcmVmIDogaHJlZixcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgdG86IHRvVXJsLFxuICAgICAgICAgIH0pfVxuICAgICAgey4uLnByb3BzfT5cbiAgICAgIHtocmVmICYmICFpc0ludGVybmFsVXJsKGhyZWYpID8gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPEljb25FeHRlcm5hbExpbmsgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IChcbiAgICAgICAgbGFiZWxcbiAgICAgICl9XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5jb25zdCBGb290ZXJMb2dvID0gKHtzb3VyY2VzLCBhbHR9KSA9PiAoXG4gIDxUaGVtZWRJbWFnZSBjbGFzc05hbWU9XCJmb290ZXJfX2xvZ29cIiBhbHQ9e2FsdH0gc291cmNlcz17c291cmNlc30gLz5cbik7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3Qge2Zvb3Rlcn0gPSB1c2VUaGVtZUNvbmZpZygpO1xuICBjb25zdCB7Y29weXJpZ2h0LCBsaW5rcyA9IFtdLCBsb2dvID0ge319ID0gZm9vdGVyIHx8IHt9O1xuICBjb25zdCBzb3VyY2VzID0ge1xuICAgIGxpZ2h0OiB1c2VCYXNlVXJsKGxvZ28uc3JjKSxcbiAgICBkYXJrOiB1c2VCYXNlVXJsKGxvZ28uc3JjRGFyayB8fCBsb2dvLnNyYyksXG4gIH07XG5cbiAgaWYgKCFmb290ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdmb290ZXInLCB7XG4gICAgICAgICdmb290ZXItLWRhcmsnOiBmb290ZXIuc3R5bGUgPT09ICdkYXJrJyxcbiAgICAgIH0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtsaW5rcyAmJiBsaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb290ZXJfX2xpbmtzXCI+XG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rSXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sIGZvb3Rlcl9fY29sXCI+XG4gICAgICAgICAgICAgICAge2xpbmtJdGVtLnRpdGxlICE9IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fdGl0bGVcIj57bGlua0l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2xpbmtJdGVtLml0ZW1zICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGxpbmtJdGVtLml0ZW1zKSAmJlxuICAgICAgICAgICAgICAgIGxpbmtJdGVtLml0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICB7bGlua0l0ZW0uaXRlbXMubWFwKChpdGVtLCBrZXkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5odG1sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2l0ZW1cIiAvLyBEZXZlbG9wZXIgcHJvdmlkZWQgdGhlIEhUTUwsIHNvIGFzc3VtZSBpdCdzIHNhZmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGl0ZW0uaHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZiB8fCBpdGVtLnRvfSBjbGFzc05hbWU9XCJmb290ZXJfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlckxpbmsgey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7KGxvZ28gfHwgY29weXJpZ2h0KSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2JvdHRvbSB0ZXh0LS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2dvICYmIChsb2dvLnNyYyB8fCBsb2dvLnNyY0RhcmspICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tYm90dG9tLS1zbVwiPlxuICAgICAgICAgICAgICAgIHtsb2dvLmhyZWYgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsb2dvLmhyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxvZ29MaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlckxvZ28gYWx0PXtsb2dvLmFsdH0gc291cmNlcz17c291cmNlc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZvb3RlckxvZ28gYWx0PXtsb2dvLmFsdH0gc291cmNlcz17c291cmNlc30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y29weXJpZ2h0ID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyX19jb3B5cmlnaHRcIiAvLyBEZXZlbG9wZXIgcHJvdmlkZWQgdGhlIEhUTUwsIHNvIGFzc3VtZSBpdCdzIHNhZmUuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGNvcHlyaWdodCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ0Bkb2N1c2F1cnVzL0V4ZWN1dGlvbkVudmlyb25tZW50JztcbmltcG9ydCB7dXNlVGhlbWVDb25maWcsIGNyZWF0ZVN0b3JhZ2VTbG90fSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuY29uc3QgVGhlbWVTdG9yYWdlID0gY3JlYXRlU3RvcmFnZVNsb3QoJ3RoZW1lJyk7XG5jb25zdCB0aGVtZXMgPSB7XG4gIGxpZ2h0OiAnbGlnaHQnLFxuICBkYXJrOiAnZGFyaycsXG59O1xuXG4vLyBFbnN1cmUgdG8gYWx3YXlzIHJldHVybiBhIHZhbGlkIHRoZW1lIGV2ZW4gaWYgaW5wdXQgaXMgaW52YWxpZFxuY29uc3QgY29lcmNlVG9UaGVtZSA9ICh0aGVtZSkgPT4ge1xuICByZXR1cm4gdGhlbWUgPT09IHRoZW1lcy5kYXJrID8gdGhlbWVzLmRhcmsgOiB0aGVtZXMubGlnaHQ7XG59O1xuXG5jb25zdCBnZXRJbml0aWFsVGhlbWUgPSAoZGVmYXVsdE1vZGUpID0+IHtcbiAgaWYgKCFFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICByZXR1cm4gY29lcmNlVG9UaGVtZShkZWZhdWx0TW9kZSk7XG4gIH1cblxuICByZXR1cm4gY29lcmNlVG9UaGVtZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykpO1xufTtcblxuY29uc3Qgc3RvcmVUaGVtZSA9IChuZXdUaGVtZSkgPT4ge1xuICBjcmVhdGVTdG9yYWdlU2xvdCgndGhlbWUnKS5zZXQoY29lcmNlVG9UaGVtZShuZXdUaGVtZSkpO1xufTtcblxuY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xvck1vZGU6IHtkZWZhdWx0TW9kZSwgZGlzYWJsZVN3aXRjaCwgcmVzcGVjdFByZWZlcnNDb2xvclNjaGVtZX0sXG4gIH0gPSB1c2VUaGVtZUNvbmZpZygpO1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGdldEluaXRpYWxUaGVtZShkZWZhdWx0TW9kZSkpO1xuICBjb25zdCBzZXRMaWdodFRoZW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRoZW1lKHRoZW1lcy5saWdodCk7XG4gICAgc3RvcmVUaGVtZSh0aGVtZXMubGlnaHQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHNldERhcmtUaGVtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUaGVtZSh0aGVtZXMuZGFyayk7XG4gICAgc3RvcmVUaGVtZSh0aGVtZXMuZGFyayk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgY29lcmNlVG9UaGVtZSh0aGVtZSkpO1xuICB9LCBbdGhlbWVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZVN3aXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZWRUaGVtZSA9IFRoZW1lU3RvcmFnZS5nZXQoKTtcblxuICAgICAgaWYgKHN0b3JlZFRoZW1lICE9PSBudWxsKSB7XG4gICAgICAgIHNldFRoZW1lKGNvZXJjZVRvVGhlbWUoc3RvcmVkVGhlbWUpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH0sIFtzZXRUaGVtZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlU3dpdGNoICYmICFyZXNwZWN0UHJlZmVyc0NvbG9yU2NoZW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93XG4gICAgICAubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgICAuYWRkTGlzdGVuZXIoKHttYXRjaGVzfSkgPT4ge1xuICAgICAgICBzZXRUaGVtZShtYXRjaGVzID8gdGhlbWVzLmRhcmsgOiB0aGVtZXMubGlnaHQpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHtcbiAgICBpc0RhcmtUaGVtZTogdGhlbWUgPT09IHRoZW1lcy5kYXJrLFxuICAgIHNldExpZ2h0VGhlbWUsXG4gICAgc2V0RGFya1RoZW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJ0B0aGVtZS9ob29rcy91c2VUaGVtZSc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJ0B0aGVtZS9UaGVtZUNvbnRleHQnO1xuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IHtpc0RhcmtUaGVtZSwgc2V0TGlnaHRUaGVtZSwgc2V0RGFya1RoZW1lfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNEYXJrVGhlbWUsXG4gICAgICAgIHNldExpZ2h0VGhlbWUsXG4gICAgICAgIHNldERhcmtUaGVtZSxcbiAgICAgIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVTdG9yYWdlU2xvdCwgbGlzdFN0b3JhZ2VLZXlzfSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuY29uc3QgVEFCX0NIT0lDRV9QUkVGSVggPSAnZG9jdXNhdXJ1cy50YWIuJztcblxuY29uc3QgdXNlVGFiR3JvdXBDaG9pY2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWJHcm91cENob2ljZXMsIHNldENob2ljZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBzZXRDaG9pY2VTeW5jV2l0aExvY2FsU3RvcmFnZSA9IHVzZUNhbGxiYWNrKChncm91cElkLCBuZXdDaG9pY2UpID0+IHtcbiAgICBjcmVhdGVTdG9yYWdlU2xvdChgJHtUQUJfQ0hPSUNFX1BSRUZJWH0ke2dyb3VwSWR9YCkuc2V0KG5ld0Nob2ljZSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlQ2hvaWNlcyA9IHt9O1xuICAgICAgbGlzdFN0b3JhZ2VLZXlzKCkuZm9yRWFjaCgoc3RvcmFnZUtleSkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUtleS5zdGFydHNXaXRoKFRBQl9DSE9JQ0VfUFJFRklYKSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VwSWQgPSBzdG9yYWdlS2V5LnN1YnN0cmluZyhUQUJfQ0hPSUNFX1BSRUZJWC5sZW5ndGgpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZUNob2ljZXNbZ3JvdXBJZF0gPSBjcmVhdGVTdG9yYWdlU2xvdChzdG9yYWdlS2V5KS5nZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRDaG9pY2VzKGxvY2FsU3RvcmFnZUNob2ljZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4ge1xuICAgIHRhYkdyb3VwQ2hvaWNlcyxcbiAgICBzZXRUYWJHcm91cENob2ljZXM6IChncm91cElkLCBuZXdDaG9pY2UpID0+IHtcbiAgICAgIHNldENob2ljZXMoKG9sZENob2ljZXMpID0+ICh7Li4ub2xkQ2hvaWNlcywgW2dyb3VwSWRdOiBuZXdDaG9pY2V9KSk7XG4gICAgICBzZXRDaG9pY2VTeW5jV2l0aExvY2FsU3RvcmFnZShncm91cElkLCBuZXdDaG9pY2UpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUYWJHcm91cENob2ljZTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVGFiR3JvdXBDaG9pY2UgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVRhYkdyb3VwQ2hvaWNlJztcbmltcG9ydCBVc2VyUHJlZmVyZW5jZXNDb250ZXh0IGZyb20gJ0B0aGVtZS9Vc2VyUHJlZmVyZW5jZXNDb250ZXh0JztcblxuZnVuY3Rpb24gVXNlclByZWZlcmVuY2VzUHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3Qge3RhYkdyb3VwQ2hvaWNlcywgc2V0VGFiR3JvdXBDaG9pY2VzfSA9IHVzZVRhYkdyb3VwQ2hvaWNlKCk7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcmVmZXJlbmNlc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRhYkdyb3VwQ2hvaWNlcyxcbiAgICAgICAgc2V0VGFiR3JvdXBDaG9pY2VzLFxuICAgICAgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyUHJlZmVyZW5jZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJlZmVyZW5jZXNQcm92aWRlcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICdAdGhlbWUvVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgVXNlclByZWZlcmVuY2VzUHJvdmlkZXIgZnJvbSAnQHRoZW1lL1VzZXJQcmVmZXJlbmNlc1Byb3ZpZGVyJztcbmltcG9ydCB7XG4gIEFubm91bmNlbWVudEJhclByb3ZpZGVyLFxuICBEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlcixcbn0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dFByb3ZpZGVycyh7Y2hpbGRyZW59KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICA8QW5ub3VuY2VtZW50QmFyUHJvdmlkZXI+XG4gICAgICAgIDxVc2VyUHJlZmVyZW5jZXNQcm92aWRlcj5cbiAgICAgICAgICA8RG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Eb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9Vc2VyUHJlZmVyZW5jZXNQcm92aWRlcj5cbiAgICAgIDwvQW5ub3VuY2VtZW50QmFyUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ0Bkb2N1c2F1cnVzL0hlYWQnO1xuLy8gTm90ZTogd2UgZG9uJ3QgY291cGxlIHRoaXMgdG8gQWxnb2xpYS9Eb2NTZWFyY2ggb24gcHVycG9zZVxuLy8gV2UgbWF5IHdhbnQgdG8gc3VwcG9ydCBvdGhlciBzZWFyY2ggZW5naW5lIHBsdWdpbnMgdG9vXG4vLyBTZWFyY2ggcGx1Z2lucyBzaG91bGQgc3dpenpsZS9vdmVycmlkZSB0aGlzIGNvbXAgdG8gYWRkIHRoZWlyIGJlaGF2aW9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hNZXRhZGF0YXMoe2xvY2FsZSwgdmVyc2lvbiwgdGFnfSkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2xvY2FsZSAmJiA8bWV0YSBuYW1lPVwiZG9jdXNhdXJ1c19sb2NhbGVcIiBjb250ZW50PXtsb2NhbGV9IC8+fVxuICAgICAge3ZlcnNpb24gJiYgPG1ldGEgbmFtZT1cImRvY3VzYXVydXNfdmVyc2lvblwiIGNvbnRlbnQ9e3ZlcnNpb259IC8+fVxuICAgICAge3RhZyAmJiA8bWV0YSBuYW1lPVwiZG9jdXNhdXJ1c190YWdcIiBjb250ZW50PXt0YWd9IC8+fVxuICAgIDwvSGVhZD5cbiAgKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICdAZG9jdXNhdXJ1cy9IZWFkJztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQgdXNlQmFzZVVybCBmcm9tICdAZG9jdXNhdXJ1cy91c2VCYXNlVXJsJztcbmltcG9ydCBTZWFyY2hNZXRhZGF0YXMgZnJvbSAnQHRoZW1lL1NlYXJjaE1ldGFkYXRhcyc7XG5pbXBvcnQgU2VvIGZyb20gJ0B0aGVtZS9TZW8nO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9TRUFSQ0hfVEFHLFxuICB1c2VUaXRsZUZvcm1hdHRlcixcbiAgdXNlQWx0ZXJuYXRlUGFnZVV0aWxzLFxufSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJzsgLy8gVXNlZnVsIGZvciBTRU9cbi8vIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9zZWFyY2gvZG9jcy9hZHZhbmNlZC9jcmF3bGluZy9sb2NhbGl6ZWQtdmVyc2lvbnNcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9pc3N1ZXMvMzMxN1xuXG5mdW5jdGlvbiBBbHRlcm5hdGVMYW5nSGVhZGVycygpIHtcbiAgY29uc3Qge1xuICAgIGkxOG46IHtkZWZhdWx0TG9jYWxlLCBsb2NhbGVzfSxcbiAgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IGFsdGVybmF0ZVBhZ2VVdGlscyA9IHVzZUFsdGVybmF0ZVBhZ2VVdGlscygpOyAvLyBOb3RlOiBpdCBpcyBmaW5lIHRvIHVzZSBib3RoIFwieC1kZWZhdWx0XCIgYW5kIFwiZW5cIiB0byB0YXJnZXQgdGhlIHNhbWUgdXJsXG4gIC8vIFNlZSBodHRwczovL3d3dy5zZWFyY2h2aXUuY29tL2VuL211bHRpcGxlLWhyZWZsYW5nLXRhZ3Mtb25lLXVybC9cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2xvY2FsZXMubWFwKChsb2NhbGUpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICAgIGhyZWY9e2FsdGVybmF0ZVBhZ2VVdGlscy5jcmVhdGVVcmwoe1xuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgZnVsbHlRdWFsaWZpZWQ6IHRydWUsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgaHJlZkxhbmc9e2xvY2FsZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgaHJlZj17YWx0ZXJuYXRlUGFnZVV0aWxzLmNyZWF0ZVVybCh7XG4gICAgICAgICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgICAgIGZ1bGx5UXVhbGlmaWVkOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgICAgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59IC8vIERlZmF1bHQgY2Fub25pY2FsIHVybCBpbmZlcnJlZCBmcm9tIGN1cnJlbnQgcGFnZSBsb2NhdGlvbiBwYXRobmFtZVxuXG5mdW5jdGlvbiB1c2VEZWZhdWx0Q2Fub25pY2FsVXJsKCkge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge3VybDogc2l0ZVVybH0sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCB7cGF0aG5hbWV9ID0gdXNlTG9jYXRpb24oKTtcbiAgcmV0dXJuIHNpdGVVcmwgKyB1c2VCYXNlVXJsKHBhdGhuYW1lKTtcbn1cblxuZnVuY3Rpb24gQ2Fub25pY2FsVXJsSGVhZGVycyh7cGVybWFsaW5rfSkge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge3VybDogc2l0ZVVybH0sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCBkZWZhdWx0Q2Fub25pY2FsVXJsID0gdXNlRGVmYXVsdENhbm9uaWNhbFVybCgpO1xuICBjb25zdCBjYW5vbmljYWxVcmwgPSBwZXJtYWxpbmtcbiAgICA/IGAke3NpdGVVcmx9JHtwZXJtYWxpbmt9YFxuICAgIDogZGVmYXVsdENhbm9uaWNhbFVybDtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y2Fub25pY2FsVXJsfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsVXJsfSAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0SGVhZChwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge1xuICAgICAgZmF2aWNvbixcbiAgICAgIHRoZW1lQ29uZmlnOiB7bWV0YWRhdGFzLCBpbWFnZTogZGVmYXVsdEltYWdlfSxcbiAgICB9LFxuICAgIGkxOG46IHtjdXJyZW50TG9jYWxlLCBsb2NhbGVDb25maWdzfSxcbiAgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBrZXl3b3Jkcywgc2VhcmNoTWV0YWRhdGFzfSA9IHByb3BzO1xuICBjb25zdCBmYXZpY29uVXJsID0gdXNlQmFzZVVybChmYXZpY29uKTtcbiAgY29uc3QgcGFnZVRpdGxlID0gdXNlVGl0bGVGb3JtYXR0ZXIodGl0bGUpOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzMTcjaXNzdWVjb21tZW50LTc1NDY2MTg1NVxuICAvLyBjb25zdCBodG1sTGFuZyA9IGN1cnJlbnRMb2NhbGUuc3BsaXQoJy0nKVswXTtcblxuICBjb25zdCBodG1sTGFuZyA9IGN1cnJlbnRMb2NhbGU7IC8vIHNob3VsZCB3ZSBhbGxvdyB0aGUgdXNlciB0byBvdmVycmlkZSBodG1sTGFuZyB3aXRoIGxvY2FsZUNvbmZpZz9cblxuICBjb25zdCBodG1sRGlyID0gbG9jYWxlQ29uZmlnc1tjdXJyZW50TG9jYWxlXS5kaXJlY3Rpb247XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8aHRtbCBsYW5nPXtodG1sTGFuZ30gZGlyPXtodG1sRGlyfSAvPlxuICAgICAgICB7ZmF2aWNvbiAmJiA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17ZmF2aWNvblVybH0gLz59XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIHtpbWFnZSB8fFxuICAgICAgICAgIChkZWZhdWx0SW1hZ2UgJiYgKFxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFNlb1xuICAgICAgICB7Li4ue1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGtleXdvcmRzLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPENhbm9uaWNhbFVybEhlYWRlcnMgLz5cblxuICAgICAgPEFsdGVybmF0ZUxhbmdIZWFkZXJzIC8+XG5cbiAgICAgIDxTZWFyY2hNZXRhZGF0YXNcbiAgICAgICAgdGFnPXtERUZBVUxUX1NFQVJDSF9UQUd9XG4gICAgICAgIGxvY2FsZT17Y3VycmVudExvY2FsZX1cbiAgICAgICAgey4uLnNlYXJjaE1ldGFkYXRhc31cbiAgICAgIC8+XG5cbiAgICAgIDxIZWFkIC8vIGl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYW4gYWRkaXRpb25hbCA8SGVhZD4gZWxlbWVudCBoZXJlLFxuICAgICAgLy8gYXMgaXQgYWxsb3dzIHJlYWN0LWhlbG1ldCB0byBvdmVycmlkZSB2YWx1ZXMgc2V0IGluIHByZXZpb3VzIDxIZWFkPlxuICAgICAgLy8gaWUgd2UgY2FuIG92ZXJyaWRlIGRlZmF1bHQgbWV0YWRhdGFzIHN1Y2ggYXMgXCJ0d2l0dGVyOmNhcmRcIlxuICAgICAgLy8gSW4gc2FtZSBIZWFkLCB0aGUgc2FtZSBtZXRhIHdvdWxkIGFwcGVhciB0d2ljZSBpbnN0ZWFkIG9mIG92ZXJyaWRpbmdcbiAgICAgIC8vIFNlZSByZWFjdC1oZWxtZXQgZG9jXG4gICAgICA+XG4gICAgICAgIHttZXRhZGF0YXMubWFwKChtZXRhZGF0YSwgaSkgPT4gKFxuICAgICAgICAgIDxtZXRhIGtleT17YG1ldGFkYXRhXyR7aX1gfSB7Li4ubWV0YWRhdGF9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9IZWFkPlxuICAgIDwvPlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJzsgLy8gVGhpcyBob29rIGRldGVjdCBrZXlib2FyZCBmb2N1cyBpbmRpY2F0b3IgdG8gbm90IHNob3cgb3V0bGluZSBmb3IgbW91c2UgdXNlcnNcbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vaGFja2Vybm9vbi5jb20vcmVtb3ZpbmctdGhhdC11Z2x5LWZvY3VzLXJpbmctYW5kLWtlZXBpbmctaXQtdG9vLTZjODcyN2ZlZmNkMlxuXG5mdW5jdGlvbiB1c2VLZXlib2FyZE5hdmlnYXRpb24oKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qga2V5Ym9hcmRGb2N1c2VkQ2xhc3NOYW1lID0gJ25hdmlnYXRpb24td2l0aC1rZXlib2FyZCc7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVPdXRsaW5lU3R5bGVzKGUpIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGtleWJvYXJkRm9jdXNlZENsYXNzTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShrZXlib2FyZEZvY3VzZWRDbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVPdXRsaW5lU3R5bGVzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVPdXRsaW5lU3R5bGVzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGtleWJvYXJkRm9jdXNlZENsYXNzTmFtZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlT3V0bGluZVN0eWxlcyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVPdXRsaW5lU3R5bGVzKTtcbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUtleWJvYXJkTmF2aWdhdGlvbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBTa2lwVG9Db250ZW50IGZyb20gJ0B0aGVtZS9Ta2lwVG9Db250ZW50JztcbmltcG9ydCBBbm5vdW5jZW1lbnRCYXIgZnJvbSAnQHRoZW1lL0Fubm91bmNlbWVudEJhcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ0B0aGVtZS9OYXZiYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAdGhlbWUvRm9vdGVyJztcbmltcG9ydCBMYXlvdXRQcm92aWRlcnMgZnJvbSAnQHRoZW1lL0xheW91dFByb3ZpZGVycyc7XG5pbXBvcnQgTGF5b3V0SGVhZCBmcm9tICdAdGhlbWUvTGF5b3V0SGVhZCc7XG5pbXBvcnQgdXNlS2V5Ym9hcmROYXZpZ2F0aW9uIGZyb20gJ0B0aGVtZS9ob29rcy91c2VLZXlib2FyZE5hdmlnYXRpb24nO1xuaW1wb3J0IHtUaGVtZUNsYXNzTmFtZXN9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICBjb25zdCB7Y2hpbGRyZW4sIG5vRm9vdGVyLCB3cmFwcGVyQ2xhc3NOYW1lLCBwYWdlQ2xhc3NOYW1lfSA9IHByb3BzO1xuICB1c2VLZXlib2FyZE5hdmlnYXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0UHJvdmlkZXJzPlxuICAgICAgPExheW91dEhlYWQgey4uLnByb3BzfSAvPlxuXG4gICAgICA8U2tpcFRvQ29udGVudCAvPlxuXG4gICAgICA8QW5ub3VuY2VtZW50QmFyIC8+XG5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgVGhlbWVDbGFzc05hbWVzLndyYXBwZXIubWFpbixcbiAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIHBhZ2VDbGFzc05hbWUsXG4gICAgICAgICl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cblxuICAgICAgeyFub0Zvb3RlciAmJiA8Rm9vdGVyIC8+fVxuICAgIDwvTGF5b3V0UHJvdmlkZXJzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQGRvY3VzYXVydXMvTGluayc7XG5pbXBvcnQgVGhlbWVkSW1hZ2UgZnJvbSAnQHRoZW1lL1RoZW1lZEltYWdlJztcbmltcG9ydCB1c2VCYXNlVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL3VzZUJhc2VVcmwnO1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0JztcblxuY29uc3QgTG9nbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2l0ZUNvbmZpZzoge1xuICAgICAgdGl0bGUsXG4gICAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgICBuYXZiYXI6IHtcbiAgICAgICAgICB0aXRsZTogbmF2YmFyVGl0bGUsXG4gICAgICAgICAgbG9nbyA9IHtcbiAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0NsaWVudCxcbiAgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gIGNvbnN0IHtpbWFnZUNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUsIC4uLnByb3BzUmVzdH0gPSBwcm9wcztcbiAgY29uc3QgbG9nb0xpbmsgPSB1c2VCYXNlVXJsKGxvZ28uaHJlZiB8fCAnLycpO1xuICBjb25zdCBzb3VyY2VzID0ge1xuICAgIGxpZ2h0OiB1c2VCYXNlVXJsKGxvZ28uc3JjKSxcbiAgICBkYXJrOiB1c2VCYXNlVXJsKGxvZ28uc3JjRGFyayB8fCBsb2dvLnNyYyksXG4gIH07XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtsb2dvTGlua31cbiAgICAgIHsuLi5wcm9wc1Jlc3R9XG4gICAgICB7Li4uKGxvZ28udGFyZ2V0ICYmIHtcbiAgICAgICAgdGFyZ2V0OiBsb2dvLnRhcmdldCxcbiAgICAgIH0pfT5cbiAgICAgIHtsb2dvLnNyYyAmJiAoXG4gICAgICAgIDxUaGVtZWRJbWFnZVxuICAgICAgICAgIGtleT17aXNDbGllbnR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbWFnZUNsYXNzTmFtZX1cbiAgICAgICAgICBzb3VyY2VzPXtzb3VyY2VzfVxuICAgICAgICAgIGFsdD17bG9nby5hbHQgfHwgbmF2YmFyVGl0bGUgfHwgdGl0bGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge25hdmJhclRpdGxlICE9IG51bGwgJiYgPGIgY2xhc3NOYW1lPXt0aXRsZUNsYXNzTmFtZX0+e25hdmJhclRpdGxlfTwvYj59XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICdAZG9jdXNhdXJ1cy9MaW5rJztcbmltcG9ydCB1c2VCYXNlVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL3VzZUJhc2VVcmwnO1xuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAnQGRvY3VzYXVydXMvcm91dGVyJztcbmltcG9ydCB7aXNTYW1lUGF0aH0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcbmltcG9ydCBJY29uRXh0ZXJuYWxMaW5rIGZyb20gJ0B0aGVtZS9JY29uRXh0ZXJuYWxMaW5rJztcbmltcG9ydCBpc0ludGVybmFsVXJsIGZyb20gJ0Bkb2N1c2F1cnVzL2lzSW50ZXJuYWxVcmwnO1xuY29uc3QgZHJvcGRvd25MaW5rQWN0aXZlQ2xhc3MgPSAnZHJvcGRvd25fX2xpbmstLWFjdGl2ZSc7XG5cbmZ1bmN0aW9uIE5hdkxpbmsoe1xuICBhY3RpdmVCYXNlUGF0aCxcbiAgYWN0aXZlQmFzZVJlZ2V4LFxuICB0byxcbiAgaHJlZixcbiAgbGFiZWwsXG4gIGFjdGl2ZUNsYXNzTmFtZSA9ICduYXZiYXJfX2xpbmstLWFjdGl2ZScsXG4gIHByZXBlbmRCYXNlVXJsVG9IcmVmLFxuICAuLi5wcm9wc1xufSkge1xuICAvLyBUT0RPIGFsbCB0aGlzIHNlZW1zIGhhY2t5XG4gIC8vIHt0bzogJ3ZlcnNpb24nfSBzaG91bGQgcHJvYmFibHkgYmUgZm9yYmlkZGVuLCBpbiBmYXZvciBvZiB7dG86ICcvdmVyc2lvbid9XG4gIGNvbnN0IHRvVXJsID0gdXNlQmFzZVVybCh0byk7XG4gIGNvbnN0IGFjdGl2ZUJhc2VVcmwgPSB1c2VCYXNlVXJsKGFjdGl2ZUJhc2VQYXRoKTtcbiAgY29uc3Qgbm9ybWFsaXplZEhyZWYgPSB1c2VCYXNlVXJsKGhyZWYsIHtcbiAgICBmb3JjZVByZXBlbmRCYXNlVXJsOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgaXNFeHRlcm5hbExpbmsgPSBsYWJlbCAmJiBocmVmICYmICFpc0ludGVybmFsVXJsKGhyZWYpO1xuICBjb25zdCBpc0Ryb3Bkb3duTGluayA9IGFjdGl2ZUNsYXNzTmFtZSA9PT0gZHJvcGRvd25MaW5rQWN0aXZlQ2xhc3M7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHsuLi4oaHJlZlxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGhyZWY6IHByZXBlbmRCYXNlVXJsVG9IcmVmID8gbm9ybWFsaXplZEhyZWYgOiBocmVmLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBpc05hdkxpbms6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgICAgICB0bzogdG9VcmwsXG4gICAgICAgICAgICAuLi4oYWN0aXZlQmFzZVBhdGggfHwgYWN0aXZlQmFzZVJlZ2V4XG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IChfbWF0Y2gsIGxvY2F0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVCYXNlUmVnZXhcbiAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBSZWdFeHAoYWN0aXZlQmFzZVJlZ2V4KS50ZXN0KGxvY2F0aW9uLnBhdGhuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgIDogbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChhY3RpdmVCYXNlVXJsKSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbnVsbCksXG4gICAgICAgICAgfSl9XG4gICAgICB7Li4ucHJvcHN9PlxuICAgICAge2lzRXh0ZXJuYWxMaW5rID8gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPEljb25FeHRlcm5hbExpbmtcbiAgICAgICAgICAgIHsuLi4oaXNEcm9wZG93bkxpbmsgJiYge1xuICAgICAgICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgICAgICAgIGhlaWdodDogMTIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApIDogKFxuICAgICAgICBsYWJlbFxuICAgICAgKX1cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW1EZXNrdG9wKHtpdGVtcywgcG9zaXRpb24sIGNsYXNzTmFtZSwgLi4ucHJvcHN9KSB7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcm9wZG93bk1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWRyb3Bkb3duUmVmLmN1cnJlbnQgfHwgZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtkcm9wZG93blJlZl0pO1xuXG4gIGNvbnN0IG5hdkxpbmtDbGFzc05hbWVzID0gKGV4dHJhQ2xhc3NOYW1lLCBpc0Ryb3Bkb3duSXRlbSA9IGZhbHNlKSA9PlxuICAgIGNsc3goXG4gICAgICB7XG4gICAgICAgICduYXZiYXJfX2l0ZW0gbmF2YmFyX19saW5rJzogIWlzRHJvcGRvd25JdGVtLFxuICAgICAgICBkcm9wZG93bl9fbGluazogaXNEcm9wZG93bkl0ZW0sXG4gICAgICB9LFxuICAgICAgZXh0cmFDbGFzc05hbWUsXG4gICAgKTtcblxuICBpZiAoIWl0ZW1zKSB7XG4gICAgcmV0dXJuIDxOYXZMaW5rIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbmF2YmFyX19pdGVtJywgJ2Ryb3Bkb3duJywgJ2Ryb3Bkb3duLS1ob3ZlcmFibGUnLCB7XG4gICAgICAgICdkcm9wZG93bi0tbGVmdCc6IHBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICdkcm9wZG93bi0tcmlnaHQnOiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgJ2Ryb3Bkb3duLS1zaG93Jzogc2hvd0Ryb3Bkb3duLFxuICAgICAgfSl9PlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtuYXZMaW5rQ2xhc3NOYW1lcyhjbGFzc05hbWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLnRvID8gdW5kZWZpbmVkIDogKGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbiA/PyBwcm9wcy5sYWJlbH1cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDx1bCByZWY9e2Ryb3Bkb3duTWVudVJlZn0gY2xhc3NOYW1lPVwiZHJvcGRvd25fX21lbnVcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoe2NsYXNzTmFtZTogY2hpbGRJdGVtQ2xhc3NOYW1lLCAuLi5jaGlsZEl0ZW1Qcm9wc30sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaXRlbXMubGVuZ3RoIC0gMSAmJiBlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHNldFNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXh0TmF2YmFySXRlbSA9IGRyb3Bkb3duUmVmLmN1cnJlbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5hdmJhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5hdmJhckl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17ZHJvcGRvd25MaW5rQWN0aXZlQ2xhc3N9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2hpbGRJdGVtQ2xhc3NOYW1lLCB0cnVlKX1cbiAgICAgICAgICAgICAgey4uLmNoaWxkSXRlbVByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW1Nb2JpbGUoe1xuICBpdGVtcyxcbiAgY2xhc3NOYW1lLFxuICBwb3NpdGlvbjogX3Bvc2l0aW9uLFxuICAvLyBOZWVkIHRvIGRlc3RydWN0dXJlIHBvc2l0aW9uIGZyb20gcHJvcHMgc28gdGhhdCBpdCBkb2Vzbid0IGdldCBwYXNzZWQgb24uXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IG1lbnVMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB7cGF0aG5hbWV9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKFxuICAgICgpID0+ICFpdGVtcz8uc29tZSgoaXRlbSkgPT4gaXNTYW1lUGF0aChpdGVtLnRvLCBwYXRobmFtZSkpID8/IHRydWUsXG4gICk7XG5cbiAgY29uc3QgbmF2TGlua0NsYXNzTmFtZXMgPSAoZXh0cmFDbGFzc05hbWUsIGlzU3ViTGlzdCA9IGZhbHNlKSA9PlxuICAgIGNsc3goXG4gICAgICAnbWVudV9fbGluaycsXG4gICAgICB7XG4gICAgICAgICdtZW51X19saW5rLS1zdWJsaXN0JzogaXNTdWJMaXN0LFxuICAgICAgfSxcbiAgICAgIGV4dHJhQ2xhc3NOYW1lLFxuICAgICk7XG5cbiAgaWYgKCFpdGVtcykge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbGlzdC1pdGVtXCI+XG4gICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT17bmF2TGlua0NsYXNzTmFtZXMoY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgbWVudUxpc3RIZWlnaHQgPSBtZW51TGlzdFJlZi5jdXJyZW50Py5zY3JvbGxIZWlnaHRcbiAgICA/IGAke21lbnVMaXN0UmVmLmN1cnJlbnQ/LnNjcm9sbEhlaWdodH1weGBcbiAgICA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbWVudV9fbGlzdC1pdGVtJywge1xuICAgICAgICAnbWVudV9fbGlzdC1pdGVtLS1jb2xsYXBzZWQnOiBjb2xsYXBzZWQsXG4gICAgICB9KX0+XG4gICAgICA8TmF2TGlua1xuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtuYXZMaW5rQ2xhc3NOYW1lcyhjbGFzc05hbWUsIHRydWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNldENvbGxhcHNlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgICAgIH19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW4gPz8gcHJvcHMubGFiZWx9XG4gICAgICA8L05hdkxpbms+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudV9fbGlzdFwiXG4gICAgICAgIHJlZj17bWVudUxpc3RSZWZ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiAhY29sbGFwc2VkID8gbWVudUxpc3RIZWlnaHQgOiB1bmRlZmluZWQsXG4gICAgICAgIH19PlxuICAgICAgICB7aXRlbXMubWFwKCh7Y2xhc3NOYW1lOiBjaGlsZEl0ZW1DbGFzc05hbWUsIC4uLmNoaWxkSXRlbVByb3BzfSwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19saXN0LWl0ZW1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwibWVudV9fbGluay0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZMaW5rQ2xhc3NOYW1lcyhjaGlsZEl0ZW1DbGFzc05hbWUpfVxuICAgICAgICAgICAgICB7Li4uY2hpbGRJdGVtUHJvcHN9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0TmF2YmFySXRlbSh7bW9iaWxlID0gZmFsc2UsIC4uLnByb3BzfSkge1xuICBjb25zdCBDb21wID0gbW9iaWxlID8gTmF2SXRlbU1vYmlsZSA6IE5hdkl0ZW1EZXNrdG9wO1xuICByZXR1cm4gPENvbXAgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdE5hdmJhckl0ZW07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHROYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL0RlZmF1bHROYXZiYXJJdGVtJztcbmltcG9ydCB7dXNlTGF0ZXN0VmVyc2lvbiwgdXNlQWN0aXZlRG9jQ29udGV4dH0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQge3VzZURvY3NQcmVmZXJyZWRWZXJzaW9ufSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuaW1wb3J0IHt1bmlxfSBmcm9tICdAZG9jdXNhdXJ1cy91dGlscy1jb21tb24nO1xuXG5mdW5jdGlvbiBnZXREb2NJblZlcnNpb25zKHZlcnNpb25zLCBkb2NJZCkge1xuICAvLyB2YW5pbGxhLWpzIGZsYXR0ZW4sIFRPRE8gcmVwbGFjZSBzb29uIGJ5IEVTIGZsYXQoKSAvIGZsYXRNYXAoKVxuICBjb25zdCBhbGxEb2NzID0gW10uY29uY2F0KC4uLnZlcnNpb25zLm1hcCgodmVyc2lvbikgPT4gdmVyc2lvbi5kb2NzKSk7XG4gIGNvbnN0IGRvYyA9IGFsbERvY3MuZmluZCgodmVyc2lvbkRvYykgPT4gdmVyc2lvbkRvYy5pZCA9PT0gZG9jSWQpO1xuXG4gIGlmICghZG9jKSB7XG4gICAgY29uc3QgZG9jSWRzID0gYWxsRG9jcy5tYXAoKHZlcnNpb25Eb2MpID0+IHZlcnNpb25Eb2MuaWQpLmpvaW4oJ1xcbi0gJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEb2NOYXZiYXJJdGVtOiBjb3VsZG4ndCBmaW5kIGFueSBkb2Mgd2l0aCBpZCBcIiR7ZG9jSWR9XCIgaW4gdmVyc2lvbiR7XG4gICAgICB2ZXJzaW9ucy5sZW5ndGggPyAncycgOiAnJ1xuICAgIH0gJHt2ZXJzaW9ucy5tYXAoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSkuam9pbignLCAnKX1cIi5cbkF2YWlsYWJsZSBkb2MgaWRzIGFyZTpcXG4tICR7ZG9jSWRzfWApO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jTmF2YmFySXRlbSh7XG4gIGRvY0lkLFxuICBhY3RpdmVTaWRlYmFyQ2xhc3NOYW1lLFxuICBsYWJlbDogc3RhdGljTGFiZWwsXG4gIGRvY3NQbHVnaW5JZCxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3Qge2FjdGl2ZVZlcnNpb24sIGFjdGl2ZURvY30gPSB1c2VBY3RpdmVEb2NDb250ZXh0KGRvY3NQbHVnaW5JZCk7XG4gIGNvbnN0IHtwcmVmZXJyZWRWZXJzaW9ufSA9IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uKGRvY3NQbHVnaW5JZCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB1c2VMYXRlc3RWZXJzaW9uKGRvY3NQbHVnaW5JZCk7IC8vIFZlcnNpb25zIHVzZWQgdG8gbG9vayBmb3IgdGhlIGRvYyB0byBsaW5rIHRvLCBvcmRlcmVkICsgbm8gZHVwbGljYXRlXG5cbiAgY29uc3QgdmVyc2lvbnMgPSB1bmlxKFxuICAgIFthY3RpdmVWZXJzaW9uLCBwcmVmZXJyZWRWZXJzaW9uLCBsYXRlc3RWZXJzaW9uXS5maWx0ZXIoQm9vbGVhbiksXG4gICk7XG4gIGNvbnN0IGRvYyA9IGdldERvY0luVmVyc2lvbnModmVyc2lvbnMsIGRvY0lkKTtcbiAgcmV0dXJuIChcbiAgICA8RGVmYXVsdE5hdmJhckl0ZW1cbiAgICAgIGV4YWN0XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2Nsc3gocHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgIFthY3RpdmVTaWRlYmFyQ2xhc3NOYW1lXTpcbiAgICAgICAgICBhY3RpdmVEb2MgJiYgYWN0aXZlRG9jLnNpZGViYXIgPT09IGRvYy5zaWRlYmFyLFxuICAgICAgfSl9XG4gICAgICBsYWJlbD17c3RhdGljTGFiZWwgPz8gZG9jLmlkfVxuICAgICAgdG89e2RvYy5wYXRofVxuICAgIC8+XG4gICk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHROYXZiYXJJdGVtIGZyb20gJ0B0aGVtZS9OYXZiYXJJdGVtL0RlZmF1bHROYXZiYXJJdGVtJztcbmltcG9ydCB7XG4gIHVzZVZlcnNpb25zLFxuICB1c2VMYXRlc3RWZXJzaW9uLFxuICB1c2VBY3RpdmVEb2NDb250ZXh0LFxufSBmcm9tICdAdGhlbWUvaG9va3MvdXNlRG9jcyc7XG5pbXBvcnQge3VzZURvY3NQcmVmZXJyZWRWZXJzaW9ufSBmcm9tICdAZG9jdXNhdXJ1cy90aGVtZS1jb21tb24nO1xuXG5jb25zdCBnZXRWZXJzaW9uTWFpbkRvYyA9ICh2ZXJzaW9uKSA9PlxuICB2ZXJzaW9uLmRvY3MuZmluZCgoZG9jKSA9PiBkb2MuaWQgPT09IHZlcnNpb24ubWFpbkRvY0lkKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jc1ZlcnNpb25Ecm9wZG93bk5hdmJhckl0ZW0oe1xuICBtb2JpbGUsXG4gIGRvY3NQbHVnaW5JZCxcbiAgZHJvcGRvd25BY3RpdmVDbGFzc0Rpc2FibGVkLFxuICBkcm9wZG93bkl0ZW1zQmVmb3JlLFxuICBkcm9wZG93bkl0ZW1zQWZ0ZXIsXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IGFjdGl2ZURvY0NvbnRleHQgPSB1c2VBY3RpdmVEb2NDb250ZXh0KGRvY3NQbHVnaW5JZCk7XG4gIGNvbnN0IHZlcnNpb25zID0gdXNlVmVyc2lvbnMoZG9jc1BsdWdpbklkKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHVzZUxhdGVzdFZlcnNpb24oZG9jc1BsdWdpbklkKTtcbiAgY29uc3Qge3ByZWZlcnJlZFZlcnNpb24sIHNhdmVQcmVmZXJyZWRWZXJzaW9uTmFtZX0gPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbihcbiAgICBkb2NzUGx1Z2luSWQsXG4gICk7XG5cbiAgZnVuY3Rpb24gZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgdmVyc2lvbkxpbmtzID0gdmVyc2lvbnMubWFwKCh2ZXJzaW9uKSA9PiB7XG4gICAgICAvLyBXZSB0cnkgdG8gbGluayB0byB0aGUgc2FtZSBkb2MsIGluIGFub3RoZXIgdmVyc2lvblxuICAgICAgLy8gV2hlbiBub3QgcG9zc2libGUsIGZhbGxiYWNrIHRvIHRoZSBcIm1haW4gZG9jXCIgb2YgdGhlIHZlcnNpb25cbiAgICAgIGNvbnN0IHZlcnNpb25Eb2MgPVxuICAgICAgICBhY3RpdmVEb2NDb250ZXh0Py5hbHRlcm5hdGVEb2NWZXJzaW9uc1t2ZXJzaW9uLm5hbWVdIHx8XG4gICAgICAgIGdldFZlcnNpb25NYWluRG9jKHZlcnNpb24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNOYXZMaW5rOiB0cnVlLFxuICAgICAgICBsYWJlbDogdmVyc2lvbi5sYWJlbCxcbiAgICAgICAgdG86IHZlcnNpb25Eb2MucGF0aCxcbiAgICAgICAgaXNBY3RpdmU6ICgpID0+IHZlcnNpb24gPT09IGFjdGl2ZURvY0NvbnRleHQ/LmFjdGl2ZVZlcnNpb24sXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUodmVyc2lvbi5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAuLi5kcm9wZG93bkl0ZW1zQmVmb3JlLFxuICAgICAgLi4udmVyc2lvbkxpbmtzLFxuICAgICAgLi4uZHJvcGRvd25JdGVtc0FmdGVyLFxuICAgIF07IC8vIFdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIGEgdmVyc2lvbiBkcm9wZG93biB3aXRoIDAgb3IgMSBpdGVtXG4gICAgLy8gSWYgd2UgYnVpbGQgdGhlIHNpdGUgd2l0aCBhIHNpbmdsZSBkb2NzIHZlcnNpb24gKG9ubHlJbmNsdWRlVmVyc2lvbnM6IFsnMS4wLjAnXSlcbiAgICAvLyBXZSdkIHJhdGhlciByZW5kZXIgYSBidXR0b24gaW5zdGVhZCBvZiBhIGRyb3Bkb3duXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSBnZXRJdGVtcygpO1xuICBjb25zdCBkcm9wZG93blZlcnNpb24gPVxuICAgIGFjdGl2ZURvY0NvbnRleHQuYWN0aXZlVmVyc2lvbiA/PyBwcmVmZXJyZWRWZXJzaW9uID8/IGxhdGVzdFZlcnNpb247IC8vIE1vYmlsZSBkcm9wZG93biBpcyBoYW5kbGVkIGEgYml0IGRpZmZlcmVudGx5XG5cbiAgY29uc3QgZHJvcGRvd25MYWJlbCA9IG1vYmlsZSAmJiBpdGVtcyA/ICdWZXJzaW9ucycgOiBkcm9wZG93blZlcnNpb24ubGFiZWw7XG4gIGNvbnN0IGRyb3Bkb3duVG8gPVxuICAgIG1vYmlsZSAmJiBpdGVtcyA/IHVuZGVmaW5lZCA6IGdldFZlcnNpb25NYWluRG9jKGRyb3Bkb3duVmVyc2lvbikucGF0aDtcbiAgcmV0dXJuIChcbiAgICA8RGVmYXVsdE5hdmJhckl0ZW1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIG1vYmlsZT17bW9iaWxlfVxuICAgICAgbGFiZWw9e2Ryb3Bkb3duTGFiZWx9XG4gICAgICB0bz17ZHJvcGRvd25Ub31cbiAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgIGlzQWN0aXZlPXtkcm9wZG93bkFjdGl2ZUNsYXNzRGlzYWJsZWQgPyAoKSA9PiBmYWxzZSA6IHVuZGVmaW5lZH1cbiAgICAvPlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWZhdWx0TmF2YmFySXRlbSBmcm9tICdAdGhlbWUvTmF2YmFySXRlbS9EZWZhdWx0TmF2YmFySXRlbSc7XG5pbXBvcnQge3VzZUFjdGl2ZVZlcnNpb24sIHVzZUxhdGVzdFZlcnNpb259IGZyb20gJ0B0aGVtZS9ob29rcy91c2VEb2NzJztcbmltcG9ydCB7dXNlRG9jc1ByZWZlcnJlZFZlcnNpb259IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5cbmNvbnN0IGdldFZlcnNpb25NYWluRG9jID0gKHZlcnNpb24pID0+XG4gIHZlcnNpb24uZG9jcy5maW5kKChkb2MpID0+IGRvYy5pZCA9PT0gdmVyc2lvbi5tYWluRG9jSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzVmVyc2lvbk5hdmJhckl0ZW0oe1xuICBsYWJlbDogc3RhdGljTGFiZWwsXG4gIHRvOiBzdGF0aWNUbyxcbiAgZG9jc1BsdWdpbklkLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCBhY3RpdmVWZXJzaW9uID0gdXNlQWN0aXZlVmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCB7cHJlZmVycmVkVmVyc2lvbn0gPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdXNlTGF0ZXN0VmVyc2lvbihkb2NzUGx1Z2luSWQpO1xuICBjb25zdCB2ZXJzaW9uID0gYWN0aXZlVmVyc2lvbiA/PyBwcmVmZXJyZWRWZXJzaW9uID8/IGxhdGVzdFZlcnNpb247XG4gIGNvbnN0IGxhYmVsID0gc3RhdGljTGFiZWwgPz8gdmVyc2lvbi5sYWJlbDtcbiAgY29uc3QgcGF0aCA9IHN0YXRpY1RvID8/IGdldFZlcnNpb25NYWluRG9jKHZlcnNpb24pLnBhdGg7XG4gIHJldHVybiA8RGVmYXVsdE5hdmJhckl0ZW0gey4uLnByb3BzfSBsYWJlbD17bGFiZWx9IHRvPXtwYXRofSAvPjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0B0aGVtZS9MYXlvdXQnO1xuaW1wb3J0IFRyYW5zbGF0ZSwge3RyYW5zbGF0ZX0gZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcblxuZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgdGl0bGU9e3RyYW5zbGF0ZSh7XG4gICAgICAgIGlkOiAndGhlbWUuTm90Rm91bmQudGl0bGUnLFxuICAgICAgICBtZXNzYWdlOiAnUGFnZSBOb3QgRm91bmQnLFxuICAgICAgfSl9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG1hcmdpbi12ZXJ0LS14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0tNiBjb2wtLW9mZnNldC0zXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVyb19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGlkPVwidGhlbWUuTm90Rm91bmQudGl0bGVcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRpdGxlIG9mIHRoZSA0MDQgcGFnZVwiPlxuICAgICAgICAgICAgICAgIFBhZ2UgTm90IEZvdW5kXG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aGVtZS5Ob3RGb3VuZC5wMVwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZmlyc3QgcGFyYWdyYXBoIG9mIHRoZSA0MDQgcGFnZVwiPlxuICAgICAgICAgICAgICAgIFdlIGNvdWxkIG5vdCBmaW5kIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3IuXG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLk5vdEZvdW5kLnAyXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSAybmQgcGFyYWdyYXBoIG9mIHRoZSA0MDQgcGFnZVwiPlxuICAgICAgICAgICAgICAgIFBsZWFzZSBjb250YWN0IHRoZSBvd25lciBvZiB0aGUgc2l0ZSB0aGF0IGxpbmtlZCB5b3UgdG8gdGhlXG4gICAgICAgICAgICAgICAgb3JpZ2luYWwgVVJMIGFuZCBsZXQgdGhlbSBrbm93IHRoZWlyIGxpbmsgaXMgYnJva2VuLlxuICAgICAgICAgICAgICA8L1RyYW5zbGF0ZT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ0Bkb2N1c2F1cnVzL0hlYWQnO1xuaW1wb3J0IHt1c2VUaGVtZUNvbmZpZywgdXNlVGl0bGVGb3JtYXR0ZXJ9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5pbXBvcnQgdXNlQmFzZVVybCBmcm9tICdAZG9jdXNhdXJ1cy91c2VCYXNlVXJsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7dGl0bGUsIGRlc2NyaXB0aW9uLCBrZXl3b3JkcywgaW1hZ2V9KSB7XG4gIGNvbnN0IHtpbWFnZTogZGVmYXVsdEltYWdlfSA9IHVzZVRoZW1lQ29uZmlnKCk7XG4gIGNvbnN0IHBhZ2VUaXRsZSA9IHVzZVRpdGxlRm9ybWF0dGVyKHRpdGxlKTtcbiAgY29uc3QgcGFnZUltYWdlID0gdXNlQmFzZVVybChpbWFnZSB8fCBkZWZhdWx0SW1hZ2UsIHtcbiAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7dGl0bGUgJiYgPHRpdGxlPntwYWdlVGl0bGV9PC90aXRsZT59XG4gICAgICB7dGl0bGUgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz59XG5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz59XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cblxuICAgICAge2tleXdvcmRzICYmIChcbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxuICAgICAgICAgIGNvbnRlbnQ9e0FycmF5LmlzQXJyYXkoa2V5d29yZHMpID8ga2V5d29yZHMuam9pbignLCcpIDoga2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7cGFnZUltYWdlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwYWdlSW1hZ2V9IC8+fVxuICAgICAge3BhZ2VJbWFnZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3BhZ2VJbWFnZX0gLz59XG4gICAgPC9IZWFkPlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dDtcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJ0aGVtZWRJbWFnZVwiOiBcInRoZW1lZEltYWdlXzFWdVdcIixcblx0XCJ0aGVtZWRJbWFnZS0tbGlnaHRcIjogXCJ0aGVtZWRJbWFnZS0tbGlnaHRfM1VxUVwiLFxuXHRcInRoZW1lZEltYWdlLS1kYXJrXCI6IFwidGhlbWVkSW1hZ2UtLWRhcmtfaHo2bVwiXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmltcG9ydCB1c2VUaGVtZUNvbnRleHQgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVRoZW1lQ29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBUaGVtZWRJbWFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNDbGllbnR9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgY29uc3Qge2lzRGFya1RoZW1lfSA9IHVzZVRoZW1lQ29udGV4dCgpO1xuICBjb25zdCB7c291cmNlcywgY2xhc3NOYW1lLCBhbHQgPSAnJywgLi4ucHJvcHNSZXN0fSA9IHByb3BzO1xuICBjb25zdCBjbGllbnRUaGVtZXMgPSBpc0RhcmtUaGVtZSA/IFsnZGFyayddIDogWydsaWdodCddO1xuICBjb25zdCByZW5kZXJlZFNvdXJjZU5hbWVzID0gaXNDbGllbnRcbiAgICA/IGNsaWVudFRoZW1lcyAvLyBXZSBuZWVkIHRvIHJlbmRlciBib3RoIGltYWdlcyBvbiB0aGUgc2VydmVyIHRvIGF2b2lkIGZsYXNoXG4gICAgOiAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvcHVsbC8zNzMwXG4gICAgICBbJ2xpZ2h0JywgJ2RhcmsnXTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlbmRlcmVkU291cmNlTmFtZXMubWFwKChzb3VyY2VOYW1lKSA9PiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBrZXk9e3NvdXJjZU5hbWV9XG4gICAgICAgICAgc3JjPXtzb3VyY2VzW3NvdXJjZU5hbWVdfVxuICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgIHN0eWxlcy50aGVtZWRJbWFnZSxcbiAgICAgICAgICAgIHN0eWxlc1tgdGhlbWVkSW1hZ2UtLSR7c291cmNlTmFtZX1gXSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICApfVxuICAgICAgICAgIHsuLi5wcm9wc1Jlc3R9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lZEltYWdlO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5jb25zdCBVc2VyUHJlZmVyZW5jZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgVXNlclByZWZlcmVuY2VzQ29udGV4dDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8vIFJlLWV4cG9zZSB1c2VEb2NzXG4vLyBFbnN1cmUgaXQncyBhbHdheXMgc3RhdGljYWxseSBhdmFpbGFibGUgZXZlbiBpZiB1c2VyIGlzIG5vdCB1c2luZyB0aGUgZG9jcyBwbHVnaW5cbi8vIFByb2JsZW0gcmVwb3J0ZWQgZm9yIHRoZSBibG9nLW9ubHkgbW9kZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzNjBcbmV4cG9ydCAqIGZyb20gJ0Bkb2N1c2F1cnVzL3BsdWdpbi1jb250ZW50LWRvY3MvbGliL3RoZW1lL2hvb2tzL3VzZURvY3MnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlTG9ja0JvZHlTY3JvbGwobG9jayA9IHRydWUpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbG9jayA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIH07XG4gIH0sIFtsb2NrXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvY2tCb2R5U2Nyb2xsO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ0Bkb2N1c2F1cnVzL0V4ZWN1dGlvbkVudmlyb25tZW50JztcblxuY29uc3QgZ2V0U2Nyb2xsUG9zaXRpb24gPSAoKSA9PiAoe1xuICBzY3JvbGxYOiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwLFxuICBzY3JvbGxZOiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwLFxufSk7XG5cbmNvbnN0IHVzZVNjcm9sbFBvc2l0aW9uID0gKGVmZmVjdCwgZGVwcyA9IFtdKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdXNlUmVmKGdldFNjcm9sbFBvc2l0aW9uKCkpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgaWYgKGVmZmVjdCkge1xuICAgICAgZWZmZWN0KGN1cnJlbnRTY3JvbGxQb3NpdGlvbiwgc2Nyb2xsUG9zaXRpb24uY3VycmVudCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsUG9zaXRpb24uY3VycmVudCA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgIH07XG4gICAgaGFuZGxlU2Nyb2xsKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIG9wdHMpO1xuICB9LCBkZXBzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNjcm9sbFBvc2l0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJ0B0aGVtZS9UaGVtZUNvbnRleHQnO1xuXG5mdW5jdGlvbiB1c2VUaGVtZUNvbnRleHQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdcInVzZVRoZW1lQ29udGV4dFwiIGlzIHVzZWQgb3V0c2lkZSBvZiBcIkxheW91dFwiIGNvbXBvbmVudC4gUGxlYXNlIHNlZSBodHRwczovL2RvY3VzYXVydXMuaW8vZG9jcy9hcGkvdGhlbWVzL2NvbmZpZ3VyYXRpb24jdXNldGhlbWVjb250ZXh0LicsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZUNvbnRleHQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICdAZG9jdXNhdXJ1cy9FeGVjdXRpb25FbnZpcm9ubWVudCc7XG5jb25zdCBkZXNrdG9wVGhyZXNob2xkV2lkdGggPSA5OTY7XG5jb25zdCB3aW5kb3dTaXplcyA9IHtcbiAgZGVza3RvcDogJ2Rlc2t0b3AnLFxuICBtb2JpbGU6ICdtb2JpbGUnLFxufTtcblxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcbiAgY29uc3QgaXNDbGllbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET007XG5cbiAgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICBpZiAoIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRlc2t0b3BUaHJlc2hvbGRXaWR0aFxuICAgICAgPyB3aW5kb3dTaXplcy5kZXNrdG9wXG4gICAgICA6IHdpbmRvd1NpemVzLm1vYmlsZTtcbiAgfVxuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKGdldFNpemUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuICByZXR1cm4gd2luZG93U2l6ZTtcbn1cblxuZXhwb3J0IHt3aW5kb3dTaXplc307XG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJ0Bkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKS5zaXRlQ29uZmlnLnRoZW1lQ29uZmlnO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuY29uc3QgU3RvcmFnZVR5cGVzID0gWydsb2NhbFN0b3JhZ2UnLCAnc2Vzc2lvblN0b3JhZ2UnLCAnbm9uZSddO1xuY29uc3QgRGVmYXVsdFN0b3JhZ2VUeXBlID0gJ2xvY2FsU3RvcmFnZSc7XG4vLyBXaWxsIHJldHVybiBudWxsIGJyb3dzZXIgc3RvcmFnZSBpcyB1bmF2YWlsYWJsZSAobGlrZSBydW5uaW5nIERvY3VzYXVydXMgaW4gaWZyYW1lKVxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL3B1bGwvNDUwMVxuZnVuY3Rpb24gZ2V0QnJvd3NlclN0b3JhZ2Uoc3RvcmFnZVR5cGUgPSBEZWZhdWx0U3RvcmFnZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm93c2VyIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBvbiBOb2RlLmpzL0RvY3VzYXVydXMgU1NSIHByb2Nlc3MuJyk7XG4gICAgfVxuICAgIGlmIChzdG9yYWdlVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbc3RvcmFnZVR5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dPbmNlQnJvd3NlclN0b3JhZ2VOb3RBdmFpbGFibGVXYXJuaW5nKGUpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFBvb3IgbWFuJ3MgbWVtb2l6YXRpb24gdG8gYXZvaWQgbG9nZ2luZyBtdWx0aXBsZSB0aW1lcyB0aGUgc2FtZSB3YXJuaW5nXG4gKiBTb21ldGltZXMsIGxvY2FsU3RvcmFnZS9zZXNzaW9uU3RvcmFnZSBpcyB1bmF2YWlsYWJsZSBkdWUgdG8gYnJvd3NlciBwb2xpY2llc1xuICovXG5sZXQgaGFzTG9nZ2VkQnJvd3NlclN0b3JhZ2VOb3RBdmFpbGFibGVXYXJuaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBsb2dPbmNlQnJvd3NlclN0b3JhZ2VOb3RBdmFpbGFibGVXYXJuaW5nKGVycm9yKSB7XG4gICAgaWYgKCFoYXNMb2dnZWRCcm93c2VyU3RvcmFnZU5vdEF2YWlsYWJsZVdhcm5pbmcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEb2N1c2F1cnVzIGJyb3dzZXIgc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlLlxuUG9zc2libGUgcmVhc29uczogcnVubmluZyBEb2N1c2F1cnVzIGluIGFuIGlmcmFtZSwgaW4gYW4gaW5jb2duaXRvIGJyb3dzZXIgc2Vzc2lvbiwgb3IgdXNpbmcgdG9vIHN0cmljdCBicm93c2VyIHByaXZhY3kgc2V0dGluZ3MuYCwgZXJyb3IpO1xuICAgICAgICBoYXNMb2dnZWRCcm93c2VyU3RvcmFnZU5vdEF2YWlsYWJsZVdhcm5pbmcgPSB0cnVlO1xuICAgIH1cbn1cbmNvbnN0IE5vb3BTdG9yYWdlU2xvdCA9IHtcbiAgICBnZXQ6ICgpID0+IG51bGwsXG4gICAgc2V0OiAoKSA9PiB7IH0sXG4gICAgZGVsOiAoKSA9PiB7IH0sXG59O1xuLy8gIEZhaWwtZmFzdCwgYXMgc3RvcmFnZSBBUElzIHNob3VsZCBub3QgYmUgdXNlZCBkdXJpbmcgdGhlIFNTUiBwcm9jZXNzXG5mdW5jdGlvbiBjcmVhdGVTZXJ2ZXJTdG9yYWdlU2xvdChrZXkpIHtcbiAgICBmdW5jdGlvbiB0aHJvd0Vycm9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgc3RvcmFnZSBBUEkgdXNhZ2UgZm9yIHN0b3JhZ2Uga2V5IFwiJHtrZXl9XCIuXG5Eb2N1c2F1cnVzIHN0b3JhZ2UgQVBJcyBhcmUgbm90IHN1cHBvc2VkIHRvIGJlIGNhbGxlZCBvbiB0aGUgc2VydmVyLXJlbmRlcmluZyBwcm9jZXNzLlxuUGxlYXNlIG9ubHkgY2FsbCBzdG9yYWdlIEFQSXMgaW4gZWZmZWN0cyBhbmQgZXZlbnQgaGFuZGxlcnMuYCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogdGhyb3dFcnJvcixcbiAgICAgICAgc2V0OiB0aHJvd0Vycm9yLFxuICAgICAgICBkZWw6IHRocm93RXJyb3IsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgZm9yIGFjY2Vzc2luZyBhIHBhcnRpY3VsYXIga2V5IGluIGxvY2FsU3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JhZ2VTbG90ID0gKGtleSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gY3JlYXRlU2VydmVyU3RvcmFnZVNsb3Qoa2V5KTtcbiAgICB9XG4gICAgY29uc3QgYnJvd3NlclN0b3JhZ2UgPSBnZXRCcm93c2VyU3RvcmFnZShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucGVyc2lzdGVuY2UpO1xuICAgIGlmIChicm93c2VyU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gTm9vcFN0b3JhZ2VTbG90O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6ICgpID0+IGJyb3dzZXJTdG9yYWdlLmdldEl0ZW0oa2V5KSxcbiAgICAgICAgc2V0OiAodmFsdWUpID0+IGJyb3dzZXJTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSksXG4gICAgICAgIGRlbDogKCkgPT4gYnJvd3NlclN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpLFxuICAgIH07XG59O1xuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIGtleXMgY3VycmVudGx5IHN0b3JlZCBpbiBicm93c2VyIHN0b3JhZ2VcbiAqIG9yIGFuIGVtcHR5IGxpc3QgaWYgYnJvd3NlciBzdG9yYWdlIGNhbid0IGJlIGFjY2Vzc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFN0b3JhZ2VLZXlzKHN0b3JhZ2VUeXBlID0gRGVmYXVsdFN0b3JhZ2VUeXBlKSB7XG4gICAgY29uc3QgYnJvd3NlclN0b3JhZ2UgPSBnZXRCcm93c2VyU3RvcmFnZShzdG9yYWdlVHlwZSk7XG4gICAgaWYgKCFicm93c2VyU3RvcmFnZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyb3dzZXJTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGJyb3dzZXJTdG9yYWdlLmtleShpKTtcbiAgICAgICAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdAZG9jdXNhdXJ1cy9yb3V0ZXInO1xuLy8gUGVybWl0cyB0byBvYnRhaW4gdGhlIHVybCBvZiB0aGUgY3VycmVudCBwYWdlIGluIGFub3RoZXIgbG9jYWxlXG4vLyBVc2VmdWwgdG8gZ2VuZXJhdGUgaHJlZmxhbmcgbWV0YSBoZWFkZXJzIGV0Yy4uLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3NlYXJjaC9kb2NzL2FkdmFuY2VkL2NyYXdsaW5nL2xvY2FsaXplZC12ZXJzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsdGVybmF0ZVBhZ2VVdGlscygpIHtcbiAgICBjb25zdCB7IHNpdGVDb25maWc6IHsgYmFzZVVybCwgdXJsIH0sIGkxOG46IHsgZGVmYXVsdExvY2FsZSwgY3VycmVudExvY2FsZSB9LCB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IGJhc2VVcmxVbmxvY2FsaXplZCA9IGN1cnJlbnRMb2NhbGUgPT09IGRlZmF1bHRMb2NhbGVcbiAgICAgICAgPyBiYXNlVXJsXG4gICAgICAgIDogYmFzZVVybC5yZXBsYWNlKGAvJHtjdXJyZW50TG9jYWxlfS9gLCAnLycpO1xuICAgIGNvbnN0IHBhdGhuYW1lU3VmZml4ID0gcGF0aG5hbWUucmVwbGFjZShiYXNlVXJsLCAnJyk7XG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxpemVkQmFzZVVybChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9YFxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9JHtsb2NhbGV9L2A7XG4gICAgfVxuICAgIC8vIFRPRE8gc3VwcG9ydCBjb3JyZWN0IGFsdGVybmF0ZSB1cmwgd2hlbiBsb2NhbGl6ZWQgc2l0ZSBpcyBkZXBsb3llZCBvbiBhbm90aGVyIGRvbWFpblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVybCh7IGxvY2FsZSwgZnVsbHlRdWFsaWZpZWQsIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke2Z1bGx5UXVhbGlmaWVkID8gdXJsIDogJyd9JHtnZXRMb2NhbGl6ZWRCYXNlVXJsKGxvY2FsZSl9JHtwYXRobmFtZVN1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVVcmwgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmNvbnN0IGNvZGVCbG9ja1RpdGxlUmVnZXggPSAvdGl0bGU9KFtcIiddKSguKj8pXFwxLztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvZGVCbG9ja1RpdGxlKG1ldGFzdHJpbmcpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBtZXRhc3RyaW5nID09PSBudWxsIHx8IG1ldGFzdHJpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1ldGFzdHJpbmcubWF0Y2goY29kZUJsb2NrVGl0bGVSZWdleCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVsyXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRUFSQ0hfVEFHID0gJ2RlZmF1bHQnO1xuZXhwb3J0IGZ1bmN0aW9uIGRvY1ZlcnNpb25TZWFyY2hUYWcocGx1Z2luSWQsIHZlcnNpb25OYW1lKSB7XG4gICAgcmV0dXJuIGBkb2NzLSR7cGx1Z2luSWR9LSR7dmVyc2lvbk5hbWV9YDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7IHVzZUFsbERvY3NEYXRhIH0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuLy8gVE9ETyBub3QgaWRlYWwsIHNlZSBhbHNvIFwidXNlRG9jc1wiXG5leHBvcnQgY29uc3QgaXNEb2NzUGx1Z2luRW5hYmxlZCA9ICEhdXNlQWxsRG9jc0RhdGE7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vLyBDb21wYXJlIHRoZSAyIHBhdGhzLCBpZ25vcmluZyB0cmFpbGluZyAvXG5leHBvcnQgY29uc3QgaXNTYW1lUGF0aCA9IChwYXRoMSwgcGF0aDIpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemUgPSAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuICFwYXRobmFtZSB8fCAocGF0aG5hbWUgPT09IG51bGwgfHwgcGF0aG5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhdGhuYW1lLmVuZHNXaXRoKCcvJykpID8gcGF0aG5hbWUgOiBgJHtwYXRobmFtZX0vYDtcbiAgICB9O1xuICAgIHJldHVybiBub3JtYWxpemUocGF0aDEpID09PSBub3JtYWxpemUocGF0aDIpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5leHBvcnQgY29uc3QgdXNlVGl0bGVGb3JtYXR0ZXIgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCB7IHNpdGVDb25maWcgPSB7fSB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBjb25zdCB7IHRpdGxlOiBzaXRlVGl0bGUsIHRpdGxlRGVsaW1pdGVyID0gJ3wnIH0gPSBzaXRlQ29uZmlnO1xuICAgIHJldHVybiB0aXRsZSAmJiB0aXRsZS50cmltKCkubGVuZ3RoXG4gICAgICAgID8gYCR7dGl0bGUudHJpbSgpfSAke3RpdGxlRGVsaW1pdGVyfSAke3NpdGVUaXRsZX1gXG4gICAgICAgIDogc2l0ZVRpdGxlO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuLy8gV2Ugd2FudCB0byBlbnN1cmVyIGEgc3RhYmxlIHBsdXJhbCBmb3JtIG9yZGVyIGluIGFsbCBjYXNlc1xuLy8gSXQgaXMgbW9yZSBjb252ZW5pZW50IGFuZCBuYXR1cmFsIHRvIGhhbmRsZSBcInNtYWxsIHZhbHVlc1wiIGZpcnN0XG4vLyBTZWUgaHR0cHM6Ly90d2l0dGVyLmNvbS9zZWJhc3RpZW5sb3JiZXIvc3RhdHVzLzEzNjY4MjA2NjMyNjEwNzc1MTBcbmNvbnN0IE9yZGVyZWRQbHVyYWxGb3JtcyA9IFtcbiAgICAnemVybycsXG4gICAgJ29uZScsXG4gICAgJ3R3bycsXG4gICAgJ2ZldycsXG4gICAgJ21hbnknLFxuICAgICdvdGhlcicsXG5dO1xuZnVuY3Rpb24gc29ydFBsdXJhbEZvcm1zKHBsdXJhbEZvcm1zKSB7XG4gICAgcmV0dXJuIE9yZGVyZWRQbHVyYWxGb3Jtcy5maWx0ZXIoKHBmKSA9PiBwbHVyYWxGb3Jtcy5pbmNsdWRlcyhwZikpO1xufVxuLy8gSGFyZGNvZGVkIGVuZ2xpc2gvZmFsbGJhY2sgaW1wbGVtZW50YXRpb25cbmNvbnN0IEVuZ2xpc2hQbHVyYWxGb3JtcyA9IHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgcGx1cmFsRm9ybXM6IHNvcnRQbHVyYWxGb3JtcyhbJ29uZScsICdvdGhlciddKSxcbiAgICBzZWxlY3Q6IChjb3VudCkgPT4gKGNvdW50ID09PSAxID8gJ29uZScgOiAnb3RoZXInKSxcbn07XG5mdW5jdGlvbiBjcmVhdGVMb2NhbGVQbHVyYWxGb3Jtcyhsb2NhbGUpIHtcbiAgICBjb25zdCBwbHVyYWxSdWxlcyA9IG5ldyBJbnRsLlBsdXJhbFJ1bGVzKGxvY2FsZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwbHVyYWxGb3Jtczogc29ydFBsdXJhbEZvcm1zKHBsdXJhbFJ1bGVzLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMpLFxuICAgICAgICBzZWxlY3Q6IChjb3VudCkgPT4gcGx1cmFsUnVsZXMuc2VsZWN0KGNvdW50KSxcbiAgICB9O1xufVxuLy8gUG9vciBtYW4ncyBQbHVyYWxTZWxlY3RvciBpbXBsZW1lbnRhdGlvbiwgdXNpbmcgYW4gZW5nbGlzaCBmYWxsYmFjay5cbi8vIFdlIHdhbnQgYSBsaWdodHdlaWdodCwgZnV0dXJlLXByb29mIGFuZCBnb29kLWVub3VnaCBzb2x1dGlvbi5cbi8vIFdlIGRvbid0IHdhbnQgYSBwZXJmZWN0IGFuZCBoZWF2eSBzb2x1dGlvbi5cbi8vXG4vLyBEb2N1c2F1cnVzIGNsYXNzaWMgdGhlbWUgaGFzIG9ubHkgMiBkZWVwbHkgbmVzdGVkIGxhYmVscyByZXF1aXJpbmcgY29tcGxleCBwbHVyYWwgcnVsZXNcbi8vIFdlIGRvbid0IHdhbnQgdG8gdXNlIEludGwgKyBQbHVyYWxSdWxlcyBwb2x5ZmlsbHMgKyBmdWxsIElDVSBzeW50YXggKHJlYWN0LWludGwpIGp1c3QgZm9yIHRoYXQuXG4vL1xuLy8gTm90ZXM6XG4vLyAtIDIwMjE6IDkyKyUgQnJvd3NlcnMgc3VwcG9ydCBJbnRsLlBsdXJhbFJ1bGVzLCBhbmQgc3VwcG9ydCB3aWxsIGluY3JlYXNlIGluIHRoZSBmdXR1cmVcbi8vIC0gTm9kZUpTID49IDEzIGhhcyBmdWxsIElDVSBzdXBwb3J0IGJ5IGRlZmF1bHRcbi8vIC0gSW4gY2FzZSBvZiBcIm1pc21hdGNoXCIgYmV0d2VlbiBTU1IgYW5kIEJyb3dzZXIgSUNVIHN1cHBvcnQsIFJlYWN0IGtlZXBzIHdvcmtpbmchXG5mdW5jdGlvbiB1c2VMb2NhbGVQbHVyYWxGb3JtcygpIHtcbiAgICBjb25zdCB7IGkxOG46IHsgY3VycmVudExvY2FsZSB9LCB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgY2hlY2tpbmcgSW50bC5QbHVyYWxSdWxlcyBpbiBjYXNlIGJyb3dzZXIgZG9lc24ndCBoYXZlIGl0IChlLmcgU2FmYXJpIDEyLSlcbiAgICAgICAgaWYgKEludGwuUGx1cmFsUnVsZXMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsZVBsdXJhbEZvcm1zKGN1cnJlbnRMb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gdXNlIEludGwuUGx1cmFsUnVsZXMgZm9yIGxvY2FsZSBcIiR7Y3VycmVudExvY2FsZX1cIi5cbkRvY3VzYXVydXMgd2lsbCBmYWxsYmFjayB0byBhIGRlZmF1bHQvZmFsbGJhY2sgKEVuZ2xpc2gpIEludGwuUGx1cmFsUnVsZXMgaW1wbGVtZW50YXRpb24uXG5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW50bC5QbHVyYWxSdWxlcyBub3QgYXZhaWxhYmxlIVxuRG9jdXNhdXJ1cyB3aWxsIGZhbGxiYWNrIHRvIGEgZGVmYXVsdC9mYWxsYmFjayAoRW5nbGlzaCkgSW50bC5QbHVyYWxSdWxlcyBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgYCk7XG4gICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRMb2NhbGVdKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdFBsdXJhbE1lc3NhZ2UocGx1cmFsTWVzc2FnZXMsIGNvdW50LCBsb2NhbGVQbHVyYWxGb3Jtcykge1xuICAgIGNvbnN0IHNlcGFyYXRvciA9ICd8JztcbiAgICBjb25zdCBwYXJ0cyA9IHBsdXJhbE1lc3NhZ2VzLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGb3IgbG9jYWxlPSR7bG9jYWxlUGx1cmFsRm9ybXMubG9jYWxlfSwgYSBtYXhpbXVtIG9mICR7bG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RofSBwbHVyYWwgZm9ybXMgYXJlIGV4cGVjdGVkICgke2xvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zfSksIGJ1dCB0aGUgbWVzc2FnZSBjb250YWlucyAke3BhcnRzLmxlbmd0aH0gcGx1cmFsIGZvcm1zOiAke3BsdXJhbE1lc3NhZ2VzfSBgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVyYWxGb3JtID0gbG9jYWxlUGx1cmFsRm9ybXMuc2VsZWN0KGNvdW50KTtcbiAgICAgICAgY29uc3QgcGx1cmFsRm9ybUluZGV4ID0gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMuaW5kZXhPZihwbHVyYWxGb3JtKTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBub3QgZW5vdWdoIHBsdXJhbCBmb3JtIG1lc3NhZ2VzLCB3ZSB0YWtlIHRoZSBsYXN0IG9uZSAob3RoZXIpIGluc3RlYWQgb2YgcmV0dXJuaW5nIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gcGFydHNbTWF0aC5taW4ocGx1cmFsRm9ybUluZGV4LCBwYXJ0cy5sZW5ndGggLSAxKV07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsdXJhbEZvcm0oKSB7XG4gICAgY29uc3QgbG9jYWxlUGx1cmFsRm9ybSA9IHVzZUxvY2FsZVBsdXJhbEZvcm1zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0TWVzc2FnZTogKGNvdW50LCBwbHVyYWxNZXNzYWdlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdFBsdXJhbE1lc3NhZ2UocGx1cmFsTWVzc2FnZXMsIGNvdW50LCBsb2NhbGVQbHVyYWxGb3JtKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdAZG9jdXNhdXJ1cy9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICcuL3VzZVByZXZpb3VzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhdGlvbkNoYW5nZShvbkxvY2F0aW9uQ2hhbmdlKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IHByZXZpb3VzTG9jYXRpb24gPSB1c2VQcmV2aW91cyhsb2NhdGlvbik7XG4gICAgY29uc3QgaXNGaXJzdCA9IHVzZVJlZih0cnVlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50IGZpcnN0IGVmZmVjdCB0byB0cmlnZ2VyIHRoZSBsaXN0ZW5lciBvbiBtb3VudFxuICAgICAgICBpZiAoaXNGaXJzdC5jdXJyZW50KSB7XG4gICAgICAgICAgICBpc0ZpcnN0LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlKHtcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgcHJldmlvdXNMb2NhdGlvbixcbiAgICAgICAgfSk7XG4gICAgfSwgW2xvY2F0aW9uXSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgeyBjcmVhdGVTdG9yYWdlU2xvdCB9IGZyb20gJy4uL3N0b3JhZ2VVdGlscyc7XG5jb25zdCBzdG9yYWdlS2V5ID0gKHBsdWdpbklkKSA9PiBgZG9jcy1wcmVmZXJyZWQtdmVyc2lvbi0ke3BsdWdpbklkfWA7XG5jb25zdCBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2UgPSB7XG4gICAgc2F2ZTogKHBsdWdpbklkLCBwZXJzaXN0ZW5jZSwgdmVyc2lvbk5hbWUpID0+IHtcbiAgICAgICAgY3JlYXRlU3RvcmFnZVNsb3Qoc3RvcmFnZUtleShwbHVnaW5JZCksIHsgcGVyc2lzdGVuY2UgfSkuc2V0KHZlcnNpb25OYW1lKTtcbiAgICB9LFxuICAgIHJlYWQ6IChwbHVnaW5JZCwgcGVyc2lzdGVuY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JhZ2VTbG90KHN0b3JhZ2VLZXkocGx1Z2luSWQpLCB7IHBlcnNpc3RlbmNlIH0pLmdldCgpO1xuICAgIH0sXG4gICAgY2xlYXI6IChwbHVnaW5JZCwgcGVyc2lzdGVuY2UpID0+IHtcbiAgICAgICAgY3JlYXRlU3RvcmFnZVNsb3Qoc3RvcmFnZUtleShwbHVnaW5JZCksIHsgcGVyc2lzdGVuY2UgfSkuZGVsKCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUaGVtZUNvbmZpZyB9IGZyb20gJy4uL3VzZVRoZW1lQ29uZmlnJztcbmltcG9ydCB7IGlzRG9jc1BsdWdpbkVuYWJsZWQgfSBmcm9tICcuLi9kb2NzVXRpbHMnO1xuaW1wb3J0IHsgdXNlQWxsRG9jc0RhdGEgfSBmcm9tICdAdGhlbWUvaG9va3MvdXNlRG9jcyc7XG5pbXBvcnQgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlIGZyb20gJy4vRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlJztcbi8vIEluaXRpYWwgc3RhdGUgaXMgYWx3YXlzIG51bGwgYXMgd2UgY2FuJ3QgcmVhZCBsb2NhbHN0b3JhZ2UgZnJvbSBub2RlIFNTUlxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKHBsdWdpbklkcykge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICBpbml0aWFsU3RhdGVbcGx1Z2luSWRdID0ge1xuICAgICAgICAgICAgcHJlZmVycmVkVmVyc2lvbk5hbWU6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cbi8vIFJlYWQgc3RvcmFnZSBmb3IgYWxsIGRvY3MgcGx1Z2luc1xuLy8gQXNzaWduIHRvIGVhY2ggZG9jIHBsdWdpbiBhIHByZWZlcnJlZCB2ZXJzaW9uIChpZiBmb3VuZClcbmZ1bmN0aW9uIHJlYWRTdG9yYWdlU3RhdGUoeyBwbHVnaW5JZHMsIHZlcnNpb25QZXJzaXN0ZW5jZSwgYWxsRG9jc0RhdGEsIH0pIHtcbiAgICAvLyBUaGUgc3RvcmFnZSB2YWx1ZSB3ZSByZWFkIG1pZ2h0IGJlIHN0YWxlLFxuICAgIC8vIGFuZCBiZWxvbmcgdG8gYSB2ZXJzaW9uIHRoYXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHNpdGUgYW55bW9yZVxuICAgIC8vIEluIHN1Y2ggY2FzZSwgd2UgcmVtb3ZlIHRoZSBzdG9yYWdlIHZhbHVlIHRvIGF2b2lkIGRvd25zdHJlYW0gZXJyb3JzXG4gICAgZnVuY3Rpb24gcmVzdG9yZVBsdWdpblN0YXRlKHBsdWdpbklkKSB7XG4gICAgICAgIGNvbnN0IHByZWZlcnJlZFZlcnNpb25OYW1lVW5zYWZlID0gRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlLnJlYWQocGx1Z2luSWQsIHZlcnNpb25QZXJzaXN0ZW5jZSk7XG4gICAgICAgIGNvbnN0IHBsdWdpbkRhdGEgPSBhbGxEb2NzRGF0YVtwbHVnaW5JZF07XG4gICAgICAgIGNvbnN0IHZlcnNpb25FeGlzdHMgPSBwbHVnaW5EYXRhLnZlcnNpb25zLnNvbWUoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSA9PT0gcHJlZmVycmVkVmVyc2lvbk5hbWVVbnNhZmUpO1xuICAgICAgICBpZiAodmVyc2lvbkV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHsgcHJlZmVycmVkVmVyc2lvbk5hbWU6IHByZWZlcnJlZFZlcnNpb25OYW1lVW5zYWZlIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2UuY2xlYXIocGx1Z2luSWQsIHZlcnNpb25QZXJzaXN0ZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICBpbml0aWFsU3RhdGVbcGx1Z2luSWRdID0gcmVzdG9yZVBsdWdpblN0YXRlKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuZnVuY3Rpb24gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCkge1xuICAgIHJldHVybiB1c2VUaGVtZUNvbmZpZygpLmRvY3MudmVyc2lvblBlcnNpc3RlbmNlO1xufVxuLy8gVmFsdWUgdGhhdCAgd2lsbCBiZSBhY2Nlc3NpYmxlIHRocm91Z2ggY29udGV4dDogW3N0YXRlLGFwaV1cbmZ1bmN0aW9uIHVzZUNvbnRleHRWYWx1ZSgpIHtcbiAgICBjb25zdCBhbGxEb2NzRGF0YSA9IHVzZUFsbERvY3NEYXRhKCk7XG4gICAgY29uc3QgdmVyc2lvblBlcnNpc3RlbmNlID0gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCk7XG4gICAgY29uc3QgcGx1Z2luSWRzID0gdXNlTWVtbygoKSA9PiBPYmplY3Qua2V5cyhhbGxEb2NzRGF0YSksIFthbGxEb2NzRGF0YV0pO1xuICAgIC8vIEluaXRpYWwgc3RhdGUgaXMgZW1wdHksIGFzICB3ZSBjYW4ndCByZWFkIGJyb3dzZXIgc3RvcmFnZSBpbiBub2RlL1NTUlxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gZ2V0SW5pdGlhbFN0YXRlKHBsdWdpbklkcykpO1xuICAgIC8vIE9uIG1vdW50LCB3ZSBzZXQgdGhlIHN0YXRlIHJlYWQgZnJvbSBicm93c2VyIHN0b3JhZ2VcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShyZWFkU3RvcmFnZVN0YXRlKHsgYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzIH0pKTtcbiAgICB9LCBbYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzXSk7XG4gICAgLy8gVGhlIEFQSSB0aGF0IHdlIGV4cG9zZSB0byBjb25zdW1lciBob29rcyAobWVtbyBmb3IgY29uc3RhbnQgb2JqZWN0KVxuICAgIGNvbnN0IGFwaSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzYXZlUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCwgdmVyc2lvbk5hbWUpIHtcbiAgICAgICAgICAgIERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZS5zYXZlKHBsdWdpbklkLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIHZlcnNpb25OYW1lKTtcbiAgICAgICAgICAgIHNldFN0YXRlKChzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICAgICAgW3BsdWdpbklkXTogeyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogdmVyc2lvbk5hbWUgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2F2ZVByZWZlcnJlZFZlcnNpb24sXG4gICAgICAgIH07XG4gICAgfSwgW3NldFN0YXRlXSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgYXBpXTtcbn1cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGZ1bmN0aW9uIERvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4sIH0pIHtcbiAgICBpZiAoaXNEb2NzUGx1Z2luRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUsIG51bGwsIGNoaWxkcmVuKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIERvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyVW5zYWZlKHsgY2hpbGRyZW4sIH0pIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0VmFsdWUoKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgZmluZCBkb2NzIHByZWZlcnJlZCBjb250ZXh0LCBtYXliZSB5b3UgZm9yZ290IHRvIHVzZSB0aGUgXCJEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlclwiPycpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuZXhwb3J0IHtcbiAgLy8gY29uc3RhbnRzIHdlcmUgb25seSBhdmFpbGFibGUgb24gbm9kZVxuICAvLyB0aGlzIG1ha2VzIHNvbWUgdXNlZnVsIGNvbnN0YW50cyBhdmFpbGFibGUgdG8gZnJvbnRlbmQvdGhlbWVzIHRvb1xuICAvLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSAnQGRvY3VzYXVydXMvY29uc3RhbnRzJ1xuICBERUZBVUxUX1BMVUdJTl9JRCxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbiAqL1xuLy8gTm90IGR1cGxpY2F0aW5nIHRoZSBjb25zdGFudHMgc2VlbXMgdG8gcHJvZHVjZVxuLy8gd2VpcmQgVFMgY29tcGlsYXRpb24gc2lkZS1lZmZlY3RzXG5leHBvcnQgY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCB9IGZyb20gJy4vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcic7XG5pbXBvcnQgeyB1c2VBbGxEb2NzRGF0YSwgdXNlRG9jc0RhdGEgfSBmcm9tICdAdGhlbWUvaG9va3MvdXNlRG9jcyc7XG5pbXBvcnQgeyBERUZBVUxUX1BMVUdJTl9JRCB9IGZyb20gJ0Bkb2N1c2F1cnVzL2NvbnN0YW50cyc7XG4vLyBUT0RPIGltcHJvdmUgdHlwaW5nXG4vLyBOb3RlLCB0aGUgcHJlZmVycmVkVmVyc2lvbiBhdHRyaWJ1dGUgd2lsbCBhbHdheXMgYmUgbnVsbCBiZWZvcmUgbW91bnRcbmV4cG9ydCBmdW5jdGlvbiB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCA9IERFRkFVTFRfUExVR0lOX0lEKSB7XG4gICAgY29uc3QgZG9jc0RhdGEgPSB1c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgY29uc3QgW3N0YXRlLCBhcGldID0gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0KCk7XG4gICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgIGNvbnN0IHByZWZlcnJlZFZlcnNpb24gPSBwcmVmZXJyZWRWZXJzaW9uTmFtZVxuICAgICAgICA/IGRvY3NEYXRhLnZlcnNpb25zLmZpbmQoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSA9PT0gcHJlZmVycmVkVmVyc2lvbk5hbWUpXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUgPSB1c2VDYWxsYmFjaygodmVyc2lvbk5hbWUpID0+IHtcbiAgICAgICAgYXBpLnNhdmVQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkLCB2ZXJzaW9uTmFtZSk7XG4gICAgfSwgW2FwaV0pO1xuICAgIHJldHVybiB7IHByZWZlcnJlZFZlcnNpb24sIHNhdmVQcmVmZXJyZWRWZXJzaW9uTmFtZSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQnlQbHVnaW5JZCgpIHtcbiAgICBjb25zdCBhbGxEb2NzRGF0YSA9IHVzZUFsbERvY3NEYXRhKCk7XG4gICAgY29uc3QgW3N0YXRlXSA9IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCgpO1xuICAgIGZ1bmN0aW9uIGdldFBsdWdpbklkUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBkb2NzRGF0YSA9IGFsbERvY3NEYXRhW3BsdWdpbklkXTtcbiAgICAgICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgICAgICByZXR1cm4gcHJlZmVycmVkVmVyc2lvbk5hbWVcbiAgICAgICAgICAgID8gZG9jc0RhdGEudmVyc2lvbnMuZmluZCgodmVyc2lvbikgPT4gdmVyc2lvbi5uYW1lID09PSBwcmVmZXJyZWRWZXJzaW9uTmFtZSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGx1Z2luSWRzID0gT2JqZWN0LmtleXMoYWxsRG9jc0RhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICByZXN1bHRbcGx1Z2luSWRdID0gZ2V0UGx1Z2luSWRQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLy8gVGhlc2UgY2xhc3MgbmFtZXMgYXJlIHVzZWQgdG8gc3R5bGUgcGFnZSBsYXlvdXRzIGluIERvY3VzYXVydXNcbmV4cG9ydCBjb25zdCBUaGVtZUNsYXNzTmFtZXMgPSB7XG4gICAgcGFnZToge1xuICAgICAgICBibG9nTGlzdFBhZ2U6ICdibG9nLWxpc3QtcGFnZScsXG4gICAgICAgIGJsb2dQb3N0UGFnZTogJ2Jsb2ctcG9zdC1wYWdlJyxcbiAgICAgICAgYmxvZ1RhZ3NMaXN0UGFnZTogJ2Jsb2ctdGFncy1saXN0LXBhZ2UnLFxuICAgICAgICBibG9nVGFnc1Bvc3RQYWdlOiAnYmxvZy10YWdzLXBvc3QtcGFnZScsXG4gICAgICAgIGRvY1BhZ2U6ICdkb2MtcGFnZScsXG4gICAgICAgIG1keFBhZ2U6ICdtZHgtcGFnZScsXG4gICAgfSxcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIG1haW46ICdtYWluLXdyYXBwZXInLFxuICAgICAgICBibG9nUGFnZXM6ICdibG9nLXdyYXBwZXInLFxuICAgICAgICBkb2NQYWdlczogJ2RvY3Mtd3JhcHBlcicsXG4gICAgICAgIG1keFBhZ2VzOiAnbWR4LXdyYXBwZXInLFxuICAgIH0sXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VEb2N1c2F1cnVzQ29udGV4dCBmcm9tICdAZG9jdXNhdXJ1cy91c2VEb2N1c2F1cnVzQ29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yYWdlU2xvdCB9IGZyb20gJy4vc3RvcmFnZVV0aWxzJztcbmltcG9ydCB7IHVzZVRoZW1lQ29uZmlnIH0gZnJvbSAnLi91c2VUaGVtZUNvbmZpZyc7XG5leHBvcnQgY29uc3QgQW5ub3VuY2VtZW50QmFyRGlzbWlzc1N0b3JhZ2VLZXkgPSAnZG9jdXNhdXJ1cy5hbm5vdW5jZW1lbnQuZGlzbWlzcyc7XG5jb25zdCBBbm5vdW5jZW1lbnRCYXJJZFN0b3JhZ2VLZXkgPSAnZG9jdXNhdXJ1cy5hbm5vdW5jZW1lbnQuaWQnO1xuY29uc3QgQW5ub3VuY2VtZW50QmFyRGlzbWlzc1N0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlU2xvdChBbm5vdW5jZW1lbnRCYXJEaXNtaXNzU3RvcmFnZUtleSk7XG5jb25zdCBJZFN0b3JhZ2UgPSBjcmVhdGVTdG9yYWdlU2xvdChBbm5vdW5jZW1lbnRCYXJJZFN0b3JhZ2VLZXkpO1xuY29uc3QgaXNEaXNtaXNzZWRJblN0b3JhZ2UgPSAoKSA9PiBBbm5vdW5jZW1lbnRCYXJEaXNtaXNzU3RvcmFnZS5nZXQoKSA9PT0gJ3RydWUnO1xuY29uc3Qgc2V0RGlzbWlzc2VkSW5TdG9yYWdlID0gKGJvb2wpID0+IEFubm91bmNlbWVudEJhckRpc21pc3NTdG9yYWdlLnNldChTdHJpbmcoYm9vbCkpO1xuY29uc3QgdXNlQW5ub3VuY2VtZW50QmFyQ29udGV4dFZhbHVlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5ub3VuY2VtZW50QmFyIH0gPSB1c2VUaGVtZUNvbmZpZygpO1xuICAgIGNvbnN0IHsgaXNDbGllbnQgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0KCk7XG4gICAgY29uc3QgW2lzQ2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gaXNDbGllbnRcbiAgICAgICAgICAgID8gLy8gT24gY2xpZW50IG5hdmlnYXRpb246IGluaXQgd2l0aCBsb2NhbHN0b3JhZ2UgdmFsdWVcbiAgICAgICAgICAgICAgICBpc0Rpc21pc3NlZEluU3RvcmFnZSgpXG4gICAgICAgICAgICA6IC8vIE9uIHNlcnZlci9oeWRyYXRpb246IGFsd2F5cyB2aXNpYmxlIHRvIHByZXZlbnQgbGF5b3V0IHNoaWZ0cyAod2lsbCBiZSBoaWRkZW4gd2l0aCBjc3MgaWYgbmVlZGVkKVxuICAgICAgICAgICAgICAgIGZhbHNlO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBhZnRlciBoeWRyYXRpb25cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDbG9zZWQoaXNEaXNtaXNzZWRJblN0b3JhZ2UoKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXREaXNtaXNzZWRJblN0b3JhZ2UodHJ1ZSk7XG4gICAgICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhbm5vdW5jZW1lbnRCYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkIH0gPSBhbm5vdW5jZW1lbnRCYXI7XG4gICAgICAgIGxldCB2aWV3ZWRJZCA9IElkU3RvcmFnZS5nZXQoKTtcbiAgICAgICAgLy8gcmV0cm9jb21wYXRpYmlsaXR5IGR1ZSB0byBzcGVsbGluZyBtaXN0YWtlIG9mIGRlZmF1bHQgaWRcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzM4XG4gICAgICAgIGlmICh2aWV3ZWRJZCA9PT0gJ2Fubm91Y2VtZW50LWJhcicpIHtcbiAgICAgICAgICAgIHZpZXdlZElkID0gJ2Fubm91bmNlbWVudC1iYXInO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzTmV3QW5ub3VuY2VtZW50ID0gaWQgIT09IHZpZXdlZElkO1xuICAgICAgICBJZFN0b3JhZ2Uuc2V0KGlkKTtcbiAgICAgICAgaWYgKGlzTmV3QW5ub3VuY2VtZW50KSB7XG4gICAgICAgICAgICBzZXREaXNtaXNzZWRJblN0b3JhZ2UoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ld0Fubm91bmNlbWVudCB8fCAhaXNEaXNtaXNzZWRJblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgc2V0Q2xvc2VkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0Nsb3NlZCxcbiAgICAgICAgICAgIGNsb3NlOiBoYW5kbGVDbG9zZSxcbiAgICAgICAgfTtcbiAgICB9LCBbaXNDbG9zZWRdKTtcbn07XG5jb25zdCBBbm5vdW5jZW1lbnRCYXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBjb25zdCBBbm5vdW5jZW1lbnRCYXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUFubm91bmNlbWVudEJhckNvbnRleHRWYWx1ZSgpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbm5vdW5jZW1lbnRCYXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB2YWx1ZSB9LCBjaGlsZHJlbikpO1xufTtcbmV4cG9ydCBjb25zdCB1c2VBbm5vdW5jZW1lbnRCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXBpID0gdXNlQ29udGV4dChBbm5vdW5jZW1lbnRCYXJDb250ZXh0KTtcbiAgICBpZiAoIWFwaSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUFubm91bmNlbWVudEJhcigpOiBBbm5vdW5jZW1lbnRCYXIgbm90IGZvdW5kIGluIFJlYWN0IGNvbnRleHQ6IG1ha2Ugc3VyZSB0byB1c2UgdGhlIEFubm91bmNlbWVudEJhclByb3ZpZGVyIG9uIHRvcCBvZiB0aGUgdHJlZScpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmV4cG9ydCB7IHVzZVRoZW1lQ29uZmlnIH0gZnJvbSAnLi91dGlscy91c2VUaGVtZUNvbmZpZyc7XG5leHBvcnQgeyBjcmVhdGVTdG9yYWdlU2xvdCwgbGlzdFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi91dGlscy9zdG9yYWdlVXRpbHMnO1xuZXhwb3J0IHsgdXNlQWx0ZXJuYXRlUGFnZVV0aWxzIH0gZnJvbSAnLi91dGlscy91c2VBbHRlcm5hdGVQYWdlVXRpbHMnO1xuZXhwb3J0IHsgcGFyc2VDb2RlQmxvY2tUaXRsZSB9IGZyb20gJy4vdXRpbHMvY29kZUJsb2NrVXRpbHMnO1xuZXhwb3J0IHsgZG9jVmVyc2lvblNlYXJjaFRhZywgREVGQVVMVF9TRUFSQ0hfVEFHIH0gZnJvbSAnLi91dGlscy9zZWFyY2hVdGlscyc7XG5leHBvcnQgeyBpc0RvY3NQbHVnaW5FbmFibGVkIH0gZnJvbSAnLi91dGlscy9kb2NzVXRpbHMnO1xuZXhwb3J0IHsgaXNTYW1lUGF0aCB9IGZyb20gJy4vdXRpbHMvcGF0aFV0aWxzJztcbmV4cG9ydCB7IHVzZVRpdGxlRm9ybWF0dGVyIH0gZnJvbSAnLi91dGlscy9nZW5lcmFsVXRpbHMnO1xuZXhwb3J0IHsgdXNlUGx1cmFsRm9ybSB9IGZyb20gJy4vdXRpbHMvdXNlUGx1cmFsRm9ybSc7XG5leHBvcnQgeyB1c2VMb2NhdGlvbkNoYW5nZSB9IGZyb20gJy4vdXRpbHMvdXNlTG9jYXRpb25DaGFuZ2UnO1xuZXhwb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICcuL3V0aWxzL3VzZVByZXZpb3VzJztcbmV4cG9ydCB7IHVzZURvY3NQcmVmZXJyZWRWZXJzaW9uLCB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQsIH0gZnJvbSAnLi91dGlscy9kb2NzUHJlZmVycmVkVmVyc2lvbi91c2VEb2NzUHJlZmVycmVkVmVyc2lvbic7XG5leHBvcnQgeyBEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcic7XG5leHBvcnQgeyBUaGVtZUNsYXNzTmFtZXMgfSBmcm9tICcuL3V0aWxzL1RoZW1lQ2xhc3NOYW1lcyc7XG5leHBvcnQgeyBBbm5vdW5jZW1lbnRCYXJQcm92aWRlciwgdXNlQW5ub3VuY2VtZW50QmFyLCB9IGZyb20gJy4vdXRpbHMvYW5ub3VuY2VtZW50QmFyVXRpbHMnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBUcmFpbGluZyBzbGFzaCBoYW5kbGluZyBkZXBlbmRzIGluIHNvbWUgc2l0ZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbmZ1bmN0aW9uIGFwcGx5VHJhaWxpbmdTbGFzaChwYXRoLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyB0cmFpbGluZ1NsYXNoLCBiYXNlVXJsIH0gPSBvcHRpb25zO1xuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAvLyBOZXZlciBhcHBseSB0cmFpbGluZyBzbGFzaCB0byBhbiBhbmNob3IgbGlua1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgLy8gVE9ETyBkZWR1cGxpY2F0ZTogYWxzbyBwcmVzZW50IGluIEBkb2N1c2F1cnVzL3V0aWxzXG4gICAgZnVuY3Rpb24gYWRkVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5lbmRzV2l0aCgnLycpID8gc3RyIDogYCR7c3RyfS9gO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmVuZHNXaXRoKCcvJykgPyBzdHIuc2xpY2UoMCwgLTEpIDogc3RyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVUcmFpbGluZ1NsYXNoKHN0ciwgdHJhaWxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRyYWlsaW5nID8gYWRkVHJhaWxpbmdTbGFzaChzdHIpIDogcmVtb3ZlVHJhaWxpbmdTbGFzaChzdHIpO1xuICAgIH1cbiAgICAvLyB1bmRlZmluZWQgPSBsZWdhY3kgcmV0cm9jb21wYXRpYmxlIGJlaGF2aW9yXG4gICAgaWYgKHR5cGVvZiB0cmFpbGluZ1NsYXNoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgLy8gVGhlIHRyYWlsaW5nIHNsYXNoIHNob3VsZCBiZSBoYW5kbGVkIGJlZm9yZSB0aGUgP3NlYXJjaCNoYXNoICFcbiAgICBjb25zdCBbcGF0aG5hbWVdID0gcGF0aC5zcGxpdCgvWyM/XS8pO1xuICAgIC8vIE5ldmVyIHRyYW5zZm9ybSAnLycgdG8gJydcbiAgICAvLyBOZXZlciByZW1vdmUgdGhlIGJhc2VVcmwgdHJhaWxpbmcgc2xhc2ghXG4gICAgLy8gSWYgYmFzZVVybCA9IC9teUJhc2UvLCB3ZSB3YW50IHRvIGVtaXQgL215QmFzZS9pbmRleC5odG1sIGFuZCBub3QgL215QmFzZS5odG1sICFcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzUwNzdcbiAgICBjb25zdCBzaG91bGROb3RBcHBseSA9IHBhdGhuYW1lID09PSAnLycgfHwgcGF0aG5hbWUgPT09IGJhc2VVcmw7XG4gICAgY29uc3QgbmV3UGF0aG5hbWUgPSBzaG91bGROb3RBcHBseVxuICAgICAgICA/IHBhdGhuYW1lXG4gICAgICAgIDogaGFuZGxlVHJhaWxpbmdTbGFzaChwYXRobmFtZSwgdHJhaWxpbmdTbGFzaCk7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZShwYXRobmFtZSwgbmV3UGF0aG5hbWUpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXBwbHlUcmFpbGluZ1NsYXNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVuaXEgPSBleHBvcnRzLmFwcGx5VHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbnZhciBhcHBseVRyYWlsaW5nU2xhc2hfMSA9IHJlcXVpcmUoXCIuL2FwcGx5VHJhaWxpbmdTbGFzaFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFwcGx5VHJhaWxpbmdTbGFzaFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KGFwcGx5VHJhaWxpbmdTbGFzaF8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIHVuaXFfMSA9IHJlcXVpcmUoXCIuL3VuaXFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1bmlxXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQodW5pcV8xKS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBSZW1vdmUgZHVwbGljYXRlIGFycmF5IGl0ZW1zIChzaW1pbGFyIHRvIF8udW5pcSlcbmZ1bmN0aW9uIHVuaXEoYXJyYXkpIHtcbiAgICAvLyBOb3RlOiBoYWQgcHJvYmxlbXMgd2l0aCBbLi4ubmV3IFNldCgpXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzQ5NzIjaXNzdWVjb21tZW50LTg2Mzg5NTA2MVxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVuaXE7XG4iLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgTWVtb3J5Um91dGVyLCBQcm9tcHQsIFJlZGlyZWN0LCBSb3V0ZSwgUm91dGVyLCBTdGF0aWNSb3V0ZXIsIFN3aXRjaCwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMsIHVzZVJvdXRlTWF0Y2gsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTG9jYXRpb24gfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cblxudmFyIEJyb3dzZXJSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCcm93c2VyUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBCcm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9yY2VSZWZyZXNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEJyb3dzZXJSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG5cbnZhciBIYXNoUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSGFzaFJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGFzaFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc2hUeXBlOiBQcm9wVHlwZXMub25lT2YoW1wiaGFzaGJhbmdcIiwgXCJub3NsYXNoXCIsIFwic2xhc2hcIl0pXG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG52YXIgcmVzb2x2ZVRvTG9jYXRpb24gPSBmdW5jdGlvbiByZXNvbHZlVG9Mb2NhdGlvbih0bywgY3VycmVudExvY2F0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgdG8gPT09IFwiZnVuY3Rpb25cIiA/IHRvKGN1cnJlbnRMb2NhdGlvbikgOiB0bztcbn07XG52YXIgbm9ybWFsaXplVG9Mb2NhdGlvbiA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVRvTG9jYXRpb24odG8sIGN1cnJlbnRMb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gY3JlYXRlTG9jYXRpb24odG8sIG51bGwsIG51bGwsIGN1cnJlbnRMb2NhdGlvbikgOiB0bztcbn07XG5cbnZhciBmb3J3YXJkUmVmU2hpbSA9IGZ1bmN0aW9uIGZvcndhcmRSZWZTaGltKEMpIHtcbiAgcmV0dXJuIEM7XG59O1xuXG52YXIgZm9yd2FyZFJlZiA9IFJlYWN0LmZvcndhcmRSZWY7XG5cbmlmICh0eXBlb2YgZm9yd2FyZFJlZiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBmb3J3YXJkUmVmID0gZm9yd2FyZFJlZlNoaW07XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbnZhciBMaW5rQW5jaG9yID0gZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBuYXZpZ2F0ZSA9IF9yZWYubmF2aWdhdGUsXG4gICAgICBfb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJpbm5lclJlZlwiLCBcIm5hdmlnYXRlXCIsIFwib25DbGlja1wiXSk7XG5cbiAgdmFyIHRhcmdldCA9IHJlc3QudGFyZ2V0O1xuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9vbkNsaWNrKSBfb25DbGljayhldmVudCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aHJvdyBleDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICAgIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIGlnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICAgIXRhcmdldCB8fCB0YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIGlnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG5hdmlnYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBSZWFjdCAxNSBjb21wYXRcblxuXG4gIGlmIChmb3J3YXJkUmVmU2hpbSAhPT0gZm9yd2FyZFJlZikge1xuICAgIHByb3BzLnJlZiA9IGZvcndhcmRlZFJlZiB8fCBpbm5lclJlZjtcbiAgfSBlbHNlIHtcbiAgICBwcm9wcy5yZWYgPSBpbm5lclJlZjtcbiAgfVxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50ICovXG5cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgcHJvcHMpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGlua0FuY2hvci5kaXNwbGF5TmFtZSA9IFwiTGlua0FuY2hvclwiO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxuXG52YXIgTGluayA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYyLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIF9yZWYyJGNvbXBvbmVudCA9IF9yZWYyLmNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudCA9IF9yZWYyJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gTGlua0FuY2hvciA6IF9yZWYyJGNvbXBvbmVudCxcbiAgICAgIHJlcGxhY2UgPSBfcmVmMi5yZXBsYWNlLFxuICAgICAgdG8gPSBfcmVmMi50byxcbiAgICAgIGlubmVyUmVmID0gX3JlZjIuaW5uZXJSZWYsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImNvbXBvbmVudFwiLCBcInJlcGxhY2VcIiwgXCJ0b1wiLCBcImlubmVyUmVmXCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBoaXN0b3J5ID0gY29udGV4dC5oaXN0b3J5O1xuICAgIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZVRvTG9jYXRpb24ocmVzb2x2ZVRvTG9jYXRpb24odG8sIGNvbnRleHQubG9jYXRpb24pLCBjb250ZXh0LmxvY2F0aW9uKTtcbiAgICB2YXIgaHJlZiA9IGxvY2F0aW9uID8gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogaHJlZixcbiAgICAgIG5hdmlnYXRlOiBmdW5jdGlvbiBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVzb2x2ZVRvTG9jYXRpb24odG8sIGNvbnRleHQubG9jYXRpb24pO1xuICAgICAgICB2YXIgbWV0aG9kID0gcmVwbGFjZSA/IGhpc3RvcnkucmVwbGFjZSA6IGhpc3RvcnkucHVzaDtcbiAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gUmVhY3QgMTUgY29tcGF0XG5cblxuICAgIGlmIChmb3J3YXJkUmVmU2hpbSAhPT0gZm9yd2FyZFJlZikge1xuICAgICAgcHJvcHMucmVmID0gZm9yd2FyZGVkUmVmIHx8IGlubmVyUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5pbm5lclJlZiA9IGlubmVyUmVmO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpO1xuICB9KTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pO1xuICB2YXIgcmVmVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlcy5hbnlcbiAgfSldKTtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogcmVmVHlwZSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG86IHRvVHlwZS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbnZhciBmb3J3YXJkUmVmU2hpbSQxID0gZnVuY3Rpb24gZm9yd2FyZFJlZlNoaW0oQykge1xuICByZXR1cm4gQztcbn07XG5cbnZhciBmb3J3YXJkUmVmJDEgPSBSZWFjdC5mb3J3YXJkUmVmO1xuXG5pZiAodHlwZW9mIGZvcndhcmRSZWYkMSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBmb3J3YXJkUmVmJDEgPSBmb3J3YXJkUmVmU2hpbSQxO1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG52YXIgTmF2TGluayA9IGZvcndhcmRSZWYkMShmdW5jdGlvbiAoX3JlZiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmJGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZiRhcmlhQ3VycmVudCA9PT0gdm9pZCAwID8gXCJwYWdlXCIgOiBfcmVmJGFyaWFDdXJyZW50LFxuICAgICAgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB2b2lkIDAgPyBcImFjdGl2ZVwiIDogX3JlZiRhY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWVQcm9wID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBpc0FjdGl2ZVByb3AgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgbG9jYXRpb25Qcm9wID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIHNlbnNpdGl2ZSA9IF9yZWYuc2Vuc2l0aXZlLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic2Vuc2l0aXZlXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiLCBcImlubmVyUmVmXCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxOYXZMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvblByb3AgfHwgY29udGV4dC5sb2NhdGlvbjtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IG5vcm1hbGl6ZVRvTG9jYXRpb24ocmVzb2x2ZVRvTG9jYXRpb24odG8sIGN1cnJlbnRMb2NhdGlvbiksIGN1cnJlbnRMb2NhdGlvbik7XG4gICAgdmFyIHBhdGggPSB0b0xvY2F0aW9uLnBhdGhuYW1lOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gICAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICB2YXIgbWF0Y2ggPSBlc2NhcGVkUGF0aCA/IG1hdGNoUGF0aChjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUsIHtcbiAgICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgICAgZXhhY3Q6IGV4YWN0LFxuICAgICAgc2Vuc2l0aXZlOiBzZW5zaXRpdmUsXG4gICAgICBzdHJpY3Q6IHN0cmljdFxuICAgIH0pIDogbnVsbDtcbiAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGN1cnJlbnRMb2NhdGlvbikgOiBtYXRjaCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgdmFyIHN0eWxlID0gaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wLCB7fSwgYWN0aXZlU3R5bGUpIDogc3R5bGVQcm9wO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdG86IHRvTG9jYXRpb25cbiAgICB9LCByZXN0KTsgLy8gUmVhY3QgMTUgY29tcGF0XG5cblxuICAgIGlmIChmb3J3YXJkUmVmU2hpbSQxICE9PSBmb3J3YXJkUmVmJDEpIHtcbiAgICAgIHByb3BzLnJlZiA9IGZvcndhcmRlZFJlZiB8fCBpbm5lclJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBwcm9wcyk7XG4gIH0pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pO1xufVxuXG5leHBvcnQgeyBCcm93c2VyUm91dGVyLCBIYXNoUm91dGVyLCBMaW5rLCBOYXZMaW5rIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yb3V0ZXItZG9tLmpzLm1hcFxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBmcm9tKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QTs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBOzs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QTs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBU0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQVNBOzs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFKQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFTQTtBQWZBO0FBa0JBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQWFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQWFBO0FBQ0E7QUFDQTs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBOzs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQVdBOzs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSkE7QUFhQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUtBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQURBO0FBWUE7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBREE7QUFGQTtBQVdBO0FBWkE7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBREE7QUFjQTtBQUNBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBRkE7QUF1QkE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBTEE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFGQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFXQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQURBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUZBO0FBWUE7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBOzs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBV0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFUQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBOzs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FlQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7O0EiLCJzb3VyY2VSb290IjoiIn0=