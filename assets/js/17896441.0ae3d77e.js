exports.ids = [1];
exports.modules = {

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(317);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
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
  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "pagination-nav",
    "aria-label": Object(Translate["b" /* translate */])({
      id: 'theme.docs.paginator.navAriaLabel',
      message: 'Docs pages navigation',
      description: 'The ARIA label for the docs pagination'
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__item"
  }, metadata.previous && /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
    className: "pagination-nav__link",
    to: metadata.previous.permalink
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__sublabel"
  }, /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.docs.paginator.previous",
    description: "The label used to navigate to the previous doc"
  }, "Previous")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__label"
  }, "\xAB ", metadata.previous.title))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__item pagination-nav__item--next"
  }, metadata.next && /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
    className: "pagination-nav__link",
    to: metadata.next.permalink
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__sublabel"
  }, /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.docs.paginator.next",
    description: "The label used to navigate to the next doc"
  }, "Next")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pagination-nav__label"
  }, metadata.next.title, " \xBB"))));
}

/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(275);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionSuggestions/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







function UnreleasedVersionLabel({
  siteTitle,
  versionLabel
}) {
  return /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react_default.a.createElement("strong", null, versionLabel)
    }
  }, 'This is unreleased documentation for {siteTitle} {versionLabel} version.');
}

function UnmaintainedVersionLabel({
  siteTitle,
  versionLabel
}) {
  return /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /*#__PURE__*/react_default.a.createElement("strong", null, versionLabel)
    }
  }, 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');
}

function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick
}) {
  return /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label userd to tell the user that he's browsing an unmaintained doc version",
    values: {
      versionLabel,
      latestVersionLink: /*#__PURE__*/react_default.a.createElement("strong", null, /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
        to: to,
        onClick: onClick
      }, /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');
}

const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId);

function DocVersionSuggestions() {
  const {
    siteConfig: {
      title: siteTitle
    }
  } = Object(useDocusaurusContext["default"])();
  const {
    pluginId
  } = Object(useDocs["useActivePlugin"])({
    failfast: true
  });
  const {
    savePreferredVersionName
  } = Object(lib["useDocsPreferredVersion"])(pluginId);
  const activeVersion = Object(useDocs["useActiveVersion"])(pluginId);
  const {
    latestDocSuggestion,
    latestVersionSuggestion
  } = Object(useDocs["useDocVersionSuggestions"])(pluginId); // No suggestion to be made

  if (!latestVersionSuggestion) {
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);
  } // try to link to same doc in latest version (not always possible)
  // fallback to main doc of latest version


  const latestVersionSuggestedDoc = latestDocSuggestion != null ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "alert alert--warning margin-bottom--md",
    role: "alert"
  }, /*#__PURE__*/react_default.a.createElement("div", null, activeVersion.name === 'current' ? /*#__PURE__*/react_default.a.createElement(UnreleasedVersionLabel, {
    siteTitle: siteTitle,
    versionLabel: activeVersion.label
  }) : /*#__PURE__*/react_default.a.createElement(UnmaintainedVersionLabel, {
    siteTitle: siteTitle,
    versionLabel: activeVersion.label
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "margin-top--md"
  }, /*#__PURE__*/react_default.a.createElement(LatestVersionSuggestionLabel, {
    versionLabel: latestVersionSuggestion.label,
    to: latestVersionSuggestedDoc.path,
    onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
  })));
}

/* harmony default export */ var theme_DocVersionSuggestions = (DocVersionSuggestions);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(346);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/styles.module.css
// Exports
/* harmony default export */ var styles_module = ({
	"lastUpdatedDate": "lastUpdatedDate_1WI_"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
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
  return /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /*#__PURE__*/react_default.a.createElement("time", {
        dateTime: new Date(lastUpdatedAt * 1000).toISOString(),
        className: styles_module.lastUpdatedDate
      }, formattedLastUpdatedAt)
    }
  }, ' on {date}');
}

function LastUpdatedByUser({
  lastUpdatedBy
}) {
  return /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /*#__PURE__*/react_default.a.createElement("strong", null, lastUpdatedBy)
    }
  }, ' by {user}');
}

function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy
}) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "col text--right"
  }, /*#__PURE__*/react_default.a.createElement("em", null, /*#__PURE__*/react_default.a.createElement("small", null, /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt && formattedLastUpdatedAt ? /*#__PURE__*/react_default.a.createElement(LastUpdatedAtDate, {
        lastUpdatedAt: lastUpdatedAt,
        formattedLastUpdatedAt: formattedLastUpdatedAt
      }) : '',
      byUser: lastUpdatedBy ? /*#__PURE__*/react_default.a.createElement(LastUpdatedByUser, {
        lastUpdatedBy: lastUpdatedBy
      }) : ''
    }
  }, 'Last updated{atDate}{byUser}'),  false && /*#__PURE__*/false)));
}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function useTOCHighlight(linkClassName, linkActiveClassName, topOffset) {
  const [lastActiveLink, setLastActiveLink] = Object(react["useState"])(undefined);
  Object(react["useEffect"])(() => {
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

/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// Exports
/* harmony default export */ var TOC_styles_module = ({
	"tableOfContents": "tableOfContents_35-E",
	"docItemContainer": "docItemContainer_gpai"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
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

  return /*#__PURE__*/react_default.a.createElement("ul", {
    className: isChild ? '' : 'table-of-contents table-of-contents__left-border'
  }, toc.map(heading => /*#__PURE__*/react_default.a.createElement("li", {
    key: heading.id
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: `#${heading.id}`,
    className: LINK_CLASS_NAME // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: heading.value
    }
  }), /*#__PURE__*/react_default.a.createElement(Headings, {
    isChild: true,
    toc: heading.children
  }))));
}

function TOC({
  toc
}) {
  hooks_useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])(TOC_styles_module.tableOfContents, 'thin-scrollbar')
  }, /*#__PURE__*/react_default.a.createElement(Headings, {
    toc: toc
  }));
}

/* harmony default export */ var theme_TOC = (TOC);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// Exports
/* harmony default export */ var IconEdit_styles_module = ({
	"iconEdit": "iconEdit_2_ui"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




const IconEdit = (_ref) => {
  let {
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, ["className"]);

  return /*#__PURE__*/react_default.a.createElement("svg", _extends({
    fill: "currentColor",
    height: "1.2em",
    width: "1.2em",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 40 40",
    className: Object(clsx_m["default"])(IconEdit_styles_module.iconEdit, className),
    "aria-label": "Edit page"
  }, restProps), /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
};

/* harmony default export */ var theme_IconEdit = (IconEdit);
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function EditThisPage({
  editUrl
}) {
  return /*#__PURE__*/react_default.a.createElement("a", {
    href: editUrl,
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/react_default.a.createElement(theme_IconEdit, null), /*#__PURE__*/react_default.a.createElement(Translate["a" /* default */], {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}
// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// Exports
/* harmony default export */ var DocItem_styles_module = ({
	"docTitle": "docTitle_3a4h",
	"docItemContainer": "docItemContainer_33ec",
	"docItemCol": "docItemCol_3FnS"
});

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */











function DocItem(props) {
  const {
    content: DocContent
  } = props;
  const {
    metadata,
    frontMatter: {
      image,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents
    }
  } = DocContent;
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
  } = Object(useDocs["useActivePlugin"])({
    failfast: true
  });
  const versions = Object(useDocs["useVersions"])(pluginId);
  const version = Object(useDocs["useActiveVersion"])(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Seo["a" /* default */], {
    title,
    description,
    keywords,
    image
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])('col', {
      [DocItem_styles_module.docItemCol]: !hideTableOfContents
    })
  }, /*#__PURE__*/react_default.a.createElement(theme_DocVersionSuggestions, null), /*#__PURE__*/react_default.a.createElement("div", {
    className: DocItem_styles_module.docItemContainer
  }, /*#__PURE__*/react_default.a.createElement("article", null, showVersionBadge && /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge badge--secondary"
  }, "Version: ", version.label)), !hideTitle && /*#__PURE__*/react_default.a.createElement("header", null, /*#__PURE__*/react_default.a.createElement("h1", {
    className: DocItem_styles_module.docTitle
  }, title)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react_default.a.createElement(DocContent, null))), (editUrl || lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "margin-vert--xl"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col"
  }, editUrl && /*#__PURE__*/react_default.a.createElement(EditThisPage, {
    editUrl: editUrl
  })), (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/react_default.a.createElement(LastUpdated, {
    lastUpdatedAt: lastUpdatedAt,
    formattedLastUpdatedAt: formattedLastUpdatedAt,
    lastUpdatedBy: lastUpdatedBy
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "margin-vert--lg"
  }, /*#__PURE__*/react_default.a.createElement(theme_DocPaginator, {
    metadata: metadata
  })))), !hideTableOfContents && DocContent.toc && /*#__PURE__*/react_default.a.createElement("div", {
    className: "col col--3"
  }, /*#__PURE__*/react_default.a.createElement(theme_TOC, {
    toc: DocContent.toc
  }))));
}

/* harmony default export */ var theme_DocItem = __webpack_exports__["default"] = (DocItem);

/***/ }),

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Eb2NQYWdpbmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvRG9jVmVyc2lvblN1Z2dlc3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xhc3RVcGRhdGVkL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0xhc3RVcGRhdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL2hvb2tzL3VzZVRPQ0hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9UT0Mvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvVE9DL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25FZGl0L3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0ljb25FZGl0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0VkaXRUaGlzUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY2xhc3NpYy9saWItbmV4dC90aGVtZS9Eb2NJdGVtL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jbGFzc2ljL2xpYi1uZXh0L3RoZW1lL0RvY0l0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvaG9va3MvdXNlRG9jcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvdXNlQmFzZVVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvSW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL2NvcmUvbGliL2NsaWVudC9leHBvcnRzL1RyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvY29yZS9saWIvY2xpZW50L2V4cG9ydHMvaXNJbnRlcm5hbFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VUaGVtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9kb2NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy91c2VBbHRlcm5hdGVQYWdlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvc2VhcmNoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9wbHVnaW4tY29udGVudC1kb2NzL2xpYi90aGVtZS9ob29rcy91c2VEb2NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy91c2VHbG9iYWxEYXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvcGx1Z2luLWNvbnRlbnQtZG9jcy9saWIvY2xpZW50L2RvY3NDbGllbnRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uL2xpYi91dGlscy9wYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZ2VuZXJhbFV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy90aGVtZS1jb21tb24vbGliL3V0aWxzL3VzZVBsdXJhbEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbi9saWIvdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZG9jdXNhdXJ1cy9jb3JlL2xpYi9jbGllbnQvZXhwb3J0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bkb2N1c2F1cnVzL3RoZW1lLWNsYXNzaWMvbGliLW5leHQvdGhlbWUvU2VvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRvY1BhZ2luYXRvciIsInByb3BzIiwibWV0YWRhdGEiLCJ0cmFuc2xhdGUiLCJpZCIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsInByZXZpb3VzIiwicGVybWFsaW5rIiwidGl0bGUiLCJuZXh0IiwiVW5yZWxlYXNlZFZlcnNpb25MYWJlbCIsInNpdGVUaXRsZSIsInZlcnNpb25MYWJlbCIsIlVubWFpbnRhaW5lZFZlcnNpb25MYWJlbCIsIkxhdGVzdFZlcnNpb25TdWdnZXN0aW9uTGFiZWwiLCJ0byIsIm9uQ2xpY2siLCJsYXRlc3RWZXJzaW9uTGluayIsImdldFZlcnNpb25NYWluRG9jIiwidmVyc2lvbiIsImRvY3MiLCJmaW5kIiwiZG9jIiwibWFpbkRvY0lkIiwiRG9jVmVyc2lvblN1Z2dlc3Rpb25zIiwic2l0ZUNvbmZpZyIsInVzZURvY3VzYXVydXNDb250ZXh0IiwicGx1Z2luSWQiLCJ1c2VBY3RpdmVQbHVnaW4iLCJmYWlsZmFzdCIsInNhdmVQcmVmZXJyZWRWZXJzaW9uTmFtZSIsInVzZURvY3NQcmVmZXJyZWRWZXJzaW9uIiwiYWN0aXZlVmVyc2lvbiIsInVzZUFjdGl2ZVZlcnNpb24iLCJsYXRlc3REb2NTdWdnZXN0aW9uIiwibGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb24iLCJ1c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMiLCJsYXRlc3RWZXJzaW9uU3VnZ2VzdGVkRG9jIiwibmFtZSIsImxhYmVsIiwicGF0aCIsIkxhc3RVcGRhdGVkQXREYXRlIiwibGFzdFVwZGF0ZWRBdCIsImZvcm1hdHRlZExhc3RVcGRhdGVkQXQiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3R5bGVzIiwibGFzdFVwZGF0ZWREYXRlIiwiTGFzdFVwZGF0ZWRCeVVzZXIiLCJsYXN0VXBkYXRlZEJ5IiwidXNlciIsIkxhc3RVcGRhdGVkIiwiYXREYXRlIiwiYnlVc2VyIiwicHJvY2VzcyIsInVzZVRPQ0hpZ2hsaWdodCIsImxpbmtDbGFzc05hbWUiLCJsaW5rQWN0aXZlQ2xhc3NOYW1lIiwidG9wT2Zmc2V0IiwibGFzdEFjdGl2ZUxpbmsiLCJzZXRMYXN0QWN0aXZlTGluayIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0Iiwic2V0QWN0aXZlTGluayIsImdldEFjdGl2ZUhlYWRlckFuY2hvciIsImhlYWRlcnNBbmNob3JzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZmlyc3RBbmNob3JVbmRlclZpZXdwb3J0VG9wIiwiYW5jaG9yIiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicHJldmlvdXNBbmNob3IiLCJpbmRleE9mIiwibGVuZ3RoIiwiYWN0aXZlSGVhZGVyQW5jaG9yIiwiaW5kZXgiLCJpdGVtSGlnaGxpZ2h0ZWQiLCJsaW5rcyIsImxpbmsiLCJocmVmIiwiYW5jaG9yVmFsdWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzdWJzdHJpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkxJTktfQ0xBU1NfTkFNRSIsIkFDVElWRV9MSU5LX0NMQVNTX05BTUUiLCJUT1BfT0ZGU0VUIiwiSGVhZGluZ3MiLCJ0b2MiLCJpc0NoaWxkIiwibWFwIiwiaGVhZGluZyIsIl9faHRtbCIsInZhbHVlIiwiY2hpbGRyZW4iLCJUT0MiLCJjbHN4IiwidGFibGVPZkNvbnRlbnRzIiwiSWNvbkVkaXQiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJpY29uRWRpdCIsIkVkaXRUaGlzUGFnZSIsImVkaXRVcmwiLCJEb2NJdGVtIiwiY29udGVudCIsIkRvY0NvbnRlbnQiLCJmcm9udE1hdHRlciIsImltYWdlIiwia2V5d29yZHMiLCJoaWRlX3RpdGxlIiwiaGlkZVRpdGxlIiwiaGlkZV90YWJsZV9vZl9jb250ZW50cyIsImhpZGVUYWJsZU9mQ29udGVudHMiLCJ2ZXJzaW9ucyIsInVzZVZlcnNpb25zIiwic2hvd1ZlcnNpb25CYWRnZSIsImRvY0l0ZW1Db2wiLCJkb2NJdGVtQ29udGFpbmVyIiwiZG9jVGl0bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ1c2VUaGVtZUNvbmZpZ18xIiwicmVxdWlyZSIsImVudW1lcmFibGUiLCJnZXQiLCJ1c2VUaGVtZUNvbmZpZyIsInVzZUFsdGVybmF0ZVBhZ2VVdGlsc18xIiwidXNlQWx0ZXJuYXRlUGFnZVV0aWxzIiwic2VhcmNoVXRpbHNfMSIsImRvY1ZlcnNpb25TZWFyY2hUYWciLCJERUZBVUxUX1NFQVJDSF9UQUciLCJkb2NzVXRpbHNfMSIsImlzRG9jc1BsdWdpbkVuYWJsZWQiLCJwYXRoVXRpbHNfMSIsImlzU2FtZVBhdGgiLCJnZW5lcmFsVXRpbHNfMSIsInVzZVRpdGxlRm9ybWF0dGVyIiwidXNlUGx1cmFsRm9ybV8xIiwidXNlUGx1cmFsRm9ybSIsInVzZURvY3NQcmVmZXJyZWRWZXJzaW9uXzEiLCJ1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQiLCJEb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyXzEiLCJEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlciIsIm1vZHVsZSIsImUiLCJFbXB0eSIsInVzZUFsbERvY3NEYXRhIiwidXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiIsImFkZEJhc2VVcmwiLCJzaXRlVXJsIiwiYmFzZVVybCIsInVybCIsImZvcmNlUHJlcGVuZEJhc2VVcmwiLCJhYnNvbHV0ZSIsInN0YXJ0c1dpdGgiLCJoYXNQcm90b2NvbCIsInNob3VsZEFkZEJhc2VVcmwiLCJiYXNlUGF0aCIsInJlcGxhY2UiLCJ1c2VCYXNlVXJsVXRpbHMiLCJ3aXRoQmFzZVVybCIsIm9wdGlvbnMiLCJ1c2VCYXNlVXJsIiwiVmFsdWVSZWdleHAiLCJWYWx1ZUZvdW5kTWFya2VyIiwiaW50ZXJwb2xhdGUiLCJ0ZXh0IiwidmFsdWVzIiwiZWxlbWVudHMiLCJwcm9jZXNzZWRUZXh0IiwibWF0Y2giLCJrZXkiLCJzdWJzdHIiLCJlbGVtZW50IiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsIlN0cmluZyIsInB1c2giLCJldmVyeSIsImVsIiwic3BsaXQiLCJyZWR1Y2UiLCJzdHIiLCJfYSIsImNvbmNhdCIsImFycmF5IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSW50ZXJwb2xhdGUiLCJnZXRMb2NhbGl6ZWRNZXNzYWdlIiwiY29kZVRyYW5zbGF0aW9ucyIsImxvY2FsaXplZE1lc3NhZ2UiLCJUcmFuc2xhdGUiLCJfX3Jlc3QiLCJzIiwidCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJzaG91bGRBZGRCYXNlVXJsQXV0b21hdGljYWxseSIsIkxpbmsiLCJfYiIsImlzTmF2TGluayIsImFjdGl2ZUNsYXNzTmFtZSIsImlzQWN0aXZlIiwibm9Ccm9rZW5MaW5rQ2hlY2siLCJhdXRvQWRkQmFzZVVybCIsImxpbmtzQ29sbGVjdG9yIiwidXNlTGlua3NDb2xsZWN0b3IiLCJ0YXJnZXRMaW5rVW5wcmVmaXhlZCIsIm1heWJlQWRkQmFzZVVybCIsImlzSW50ZXJuYWwiLCJpc0ludGVybmFsVXJsIiwidGFyZ2V0TGlua1dpdGhvdXRQYXRobmFtZVByb3RvY29sIiwidGFyZ2V0TGluayIsInByZWxvYWRlZCIsInVzZVJlZiIsIkxpbmtDb21wb25lbnQiLCJOYXZMaW5rIiwiUlJMaW5rIiwiSU9TdXBwb3J0ZWQiLCJFeGVjdXRpb25FbnZpcm9ubWVudCIsImNhblVzZUludGVyc2VjdGlvbk9ic2VydmVyIiwiaW8iLCJoYW5kbGVJbnRlcnNlY3Rpb24iLCJjYiIsIndpbmRvdyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImhhbmRsZVJlZiIsInJlZiIsImRvY3VzYXVydXMiLCJwcmVmZXRjaCIsIm9uTW91c2VFbnRlciIsImN1cnJlbnQiLCJwcmVsb2FkIiwiaXNBbmNob3JMaW5rIiwiaXNSZWd1bGFySHRtbExpbmsiLCJjb2xsZWN0TGluayIsImFzc2lnbiIsInJlbCIsImlubmVyUmVmIiwidGVzdCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJ1c2VEb2N1c2F1cnVzQ29udGV4dF8xIiwiZGVmYXVsdCIsInRoZW1lQ29uZmlnIiwidXNlRG9jc18xIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJfX3NldE1vZHVsZURlZmF1bHQiLCJ2IiwiX19pbXBvcnRTdGFyIiwicmVzdWx0IiwidXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0IiwicmVhY3RfMSIsIkRvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xIiwiZ2V0SW5pdGlhbFN0YXRlIiwicGx1Z2luSWRzIiwiaW5pdGlhbFN0YXRlIiwicHJlZmVycmVkVmVyc2lvbk5hbWUiLCJyZWFkU3RvcmFnZVN0YXRlIiwidmVyc2lvblBlcnNpc3RlbmNlIiwiYWxsRG9jc0RhdGEiLCJyZXN0b3JlUGx1Z2luU3RhdGUiLCJwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSIsInJlYWQiLCJwbHVnaW5EYXRhIiwidmVyc2lvbkV4aXN0cyIsInNvbWUiLCJjbGVhciIsInVzZVZlcnNpb25QZXJzaXN0ZW5jZSIsInVzZUNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJrZXlzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFwaSIsInNhdmVQcmVmZXJyZWRWZXJzaW9uIiwidmVyc2lvbk5hbWUiLCJzYXZlIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlclVuc2FmZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIkVycm9yIiwicm91dGVyXzEiLCJpMThuIiwiZGVmYXVsdExvY2FsZSIsImN1cnJlbnRMb2NhbGUiLCJwYXRobmFtZSIsInVzZUxvY2F0aW9uIiwiYmFzZVVybFVubG9jYWxpemVkIiwicGF0aG5hbWVTdWZmaXgiLCJnZXRMb2NhbGl6ZWRCYXNlVXJsIiwibG9jYWxlIiwiY3JlYXRlVXJsIiwiZnVsbHlRdWFsaWZpZWQiLCJ1c2VBY3RpdmVEb2NDb250ZXh0IiwidXNlTGF0ZXN0VmVyc2lvbiIsInVzZURvY3NEYXRhIiwidXNlR2xvYmFsRGF0YV8xIiwiZG9jc0NsaWVudFV0aWxzXzEiLCJ1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhIiwidXNlUGx1Z2luRGF0YSIsImRhdGEiLCJnZXRBY3RpdmVQbHVnaW4iLCJhY3RpdmVQbHVnaW4iLCJnZXRBY3RpdmVWZXJzaW9uIiwiZ2V0TGF0ZXN0VmVyc2lvbiIsImdldEFjdGl2ZURvY0NvbnRleHQiLCJnZXREb2NWZXJzaW9uU3VnZ2VzdGlvbnMiLCJERUZBVUxUX1BMVUdJTl9JRCIsInVzZUdsb2JhbERhdGEiLCJnbG9iYWxEYXRhIiwicGx1Z2luTmFtZSIsInBsdWdpbkdsb2JhbERhdGEiLCJwbHVnaW5JbnN0YW5jZUdsb2JhbERhdGEiLCJhbGxQbHVnaW5EYXRhcyIsImFjdGl2ZUVudHJ5IiwiX2lkIiwibWF0Y2hQYXRoIiwiZXhhY3QiLCJzdHJpY3QiLCJwbHVnaW4iLCJqb2luIiwiaXNMYXN0IiwibGFzdFZlcnNpb24iLCJvcmRlcmVkVmVyc2lvbnNNZXRhZGF0YSIsImZpbHRlciIsImFjdGl2ZURvYyIsImdldEFsdGVybmF0ZVZlcnNpb25Eb2NzIiwiZG9jSWQiLCJhbHRlcm5hdGVWZXJzaW9uRG9jcyIsImFsdGVybmF0ZURvY1ZlcnNpb25zIiwibGF0ZXN0VmVyc2lvbiIsImFjdGl2ZURvY0NvbnRleHQiLCJpc05vdE9uTGF0ZXN0VmVyc2lvbiIsInBhdGgxIiwicGF0aDIiLCJub3JtYWxpemUiLCJlbmRzV2l0aCIsInRpdGxlRGVsaW1pdGVyIiwidHJpbSIsIk9yZGVyZWRQbHVyYWxGb3JtcyIsInNvcnRQbHVyYWxGb3JtcyIsInBsdXJhbEZvcm1zIiwicGYiLCJpbmNsdWRlcyIsIkVuZ2xpc2hQbHVyYWxGb3JtcyIsInNlbGVjdCIsImNvdW50IiwiY3JlYXRlTG9jYWxlUGx1cmFsRm9ybXMiLCJwbHVyYWxSdWxlcyIsIkludGwiLCJQbHVyYWxSdWxlcyIsInJlc29sdmVkT3B0aW9ucyIsInBsdXJhbENhdGVnb3JpZXMiLCJ1c2VMb2NhbGVQbHVyYWxGb3JtcyIsImNvbnNvbGUiLCJlcnJvciIsInNlbGVjdFBsdXJhbE1lc3NhZ2UiLCJwbHVyYWxNZXNzYWdlcyIsImxvY2FsZVBsdXJhbEZvcm1zIiwic2VwYXJhdG9yIiwicGFydHMiLCJwbHVyYWxGb3JtIiwicGx1cmFsRm9ybUluZGV4IiwiTWF0aCIsIm1pbiIsImxvY2FsZVBsdXJhbEZvcm0iLCJzZWxlY3RNZXNzYWdlIiwiY29uc3RhbnRzXzEiLCJkb2NzRGF0YSIsInByZWZlcnJlZFZlcnNpb24iLCJ1c2VDYWxsYmFjayIsImdldFBsdWdpbklkUHJlZmVycmVkVmVyc2lvbiIsInN0b3JhZ2VLZXkiLCJEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2UiLCJwZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVt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LEVBQUVBO0FBQWxDLElBSmxCLEVBS0dBLFdBQVcsaUJBQUk7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFFQTtBQUF6QyxJQUxsQixFQU9HaUgsUUFBUSxpQkFDUDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsV0FBTyxFQUFFbEQsS0FBSyxDQUFDOFYsT0FBTixDQUFjNVMsUUFBZCxJQUEwQkEsUUFBUSxDQUFDOE8sSUFBVCxDQUFjLEdBQWQsQ0FBMUIsR0FBK0M5TztBQUYxRCxJQVJKLEVBY0dELEtBQUssaUJBQUk7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUU0UztBQUFuQyxJQWRaLEVBZUc1UyxLQUFLLGlCQUFJO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsV0FBTyxFQUFFNFM7QUFBcEMsSUFmWixFQWdCRzVTLEtBQUssaUJBQUk7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUM7QUFBbEMsSUFoQlosQ0FERjtBQW9CRCxDIiwiZmlsZSI6ImFzc2V0cy9qcy8xNzg5NjQ0MS4wYWUzZDc3ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdAZG9jdXNhdXJ1cy9MaW5rJztcbmltcG9ydCBUcmFuc2xhdGUsIHt0cmFuc2xhdGV9IGZyb20gJ0Bkb2N1c2F1cnVzL1RyYW5zbGF0ZSc7XG5cbmZ1bmN0aW9uIERvY1BhZ2luYXRvcihwcm9wcykge1xuICBjb25zdCB7bWV0YWRhdGF9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1uYXZcIlxuICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKHtcbiAgICAgICAgaWQ6ICd0aGVtZS5kb2NzLnBhZ2luYXRvci5uYXZBcmlhTGFiZWwnLFxuICAgICAgICBtZXNzYWdlOiAnRG9jcyBwYWdlcyBuYXZpZ2F0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgQVJJQSBsYWJlbCBmb3IgdGhlIGRvY3MgcGFnaW5hdGlvbicsXG4gICAgICB9KX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmF2X19pdGVtXCI+XG4gICAgICAgIHttZXRhZGF0YS5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmF2X19saW5rXCJcbiAgICAgICAgICAgIHRvPXttZXRhZGF0YS5wcmV2aW91cy5wZXJtYWxpbmt9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9fc3VibGFiZWxcIj5cbiAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGlkPVwidGhlbWUuZG9jcy5wYWdpbmF0b3IucHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGxhYmVsIHVzZWQgdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIGRvY1wiPlxuICAgICAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmF2X19sYWJlbFwiPlxuICAgICAgICAgICAgICAmbGFxdW87IHttZXRhZGF0YS5wcmV2aW91cy50aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9faXRlbSBwYWdpbmF0aW9uLW5hdl9faXRlbS0tbmV4dFwiPlxuICAgICAgICB7bWV0YWRhdGEubmV4dCAmJiAoXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1uYXZfX2xpbmtcIiB0bz17bWV0YWRhdGEubmV4dC5wZXJtYWxpbmt9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLW5hdl9fc3VibGFiZWxcIj5cbiAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGlkPVwidGhlbWUuZG9jcy5wYWdpbmF0b3IubmV4dFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBkb2NcIj5cbiAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbmF2X19sYWJlbFwiPlxuICAgICAgICAgICAgICB7bWV0YWRhdGEubmV4dC50aXRsZX0gJnJhcXVvO1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY1BhZ2luYXRvcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRG9jdXNhdXJ1c0NvbnRleHQgZnJvbSAnQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnQGRvY3VzYXVydXMvTGluayc7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gJ0Bkb2N1c2F1cnVzL1RyYW5zbGF0ZSc7XG5pbXBvcnQge1xuICB1c2VBY3RpdmVQbHVnaW4sXG4gIHVzZUFjdGl2ZVZlcnNpb24sXG4gIHVzZURvY1ZlcnNpb25TdWdnZXN0aW9ucyxcbn0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IHt1c2VEb2NzUHJlZmVycmVkVmVyc2lvbn0gZnJvbSAnQGRvY3VzYXVydXMvdGhlbWUtY29tbW9uJztcblxuZnVuY3Rpb24gVW5yZWxlYXNlZFZlcnNpb25MYWJlbCh7c2l0ZVRpdGxlLCB2ZXJzaW9uTGFiZWx9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5kb2NzLnZlcnNpb25zLnVucmVsZWFzZWRWZXJzaW9uTGFiZWxcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCB0byB0ZWxsIHRoZSB1c2VyIHRoYXQgaGUncyBicm93c2luZyBhbiB1bnJlbGVhc2VkIGRvYyB2ZXJzaW9uXCJcbiAgICAgIHZhbHVlcz17e1xuICAgICAgICBzaXRlVGl0bGUsXG4gICAgICAgIHZlcnNpb25MYWJlbDogPHN0cm9uZz57dmVyc2lvbkxhYmVsfTwvc3Ryb25nPixcbiAgICAgIH19PlxuICAgICAge1xuICAgICAgICAnVGhpcyBpcyB1bnJlbGVhc2VkIGRvY3VtZW50YXRpb24gZm9yIHtzaXRlVGl0bGV9IHt2ZXJzaW9uTGFiZWx9IHZlcnNpb24uJ1xuICAgICAgfVxuICAgIDwvVHJhbnNsYXRlPlxuICApO1xufVxuXG5mdW5jdGlvbiBVbm1haW50YWluZWRWZXJzaW9uTGFiZWwoe3NpdGVUaXRsZSwgdmVyc2lvbkxhYmVsfSkge1xuICByZXR1cm4gKFxuICAgIDxUcmFuc2xhdGVcbiAgICAgIGlkPVwidGhlbWUuZG9jcy52ZXJzaW9ucy51bm1haW50YWluZWRWZXJzaW9uTGFiZWxcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCB0byB0ZWxsIHRoZSB1c2VyIHRoYXQgaGUncyBicm93c2luZyBhbiB1bm1haW50YWluZWQgZG9jIHZlcnNpb25cIlxuICAgICAgdmFsdWVzPXt7XG4gICAgICAgIHNpdGVUaXRsZSxcbiAgICAgICAgdmVyc2lvbkxhYmVsOiA8c3Ryb25nPnt2ZXJzaW9uTGFiZWx9PC9zdHJvbmc+LFxuICAgICAgfX0+XG4gICAgICB7XG4gICAgICAgICdUaGlzIGlzIGRvY3VtZW50YXRpb24gZm9yIHtzaXRlVGl0bGV9IHt2ZXJzaW9uTGFiZWx9LCB3aGljaCBpcyBubyBsb25nZXIgYWN0aXZlbHkgbWFpbnRhaW5lZC4nXG4gICAgICB9XG4gICAgPC9UcmFuc2xhdGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExhdGVzdFZlcnNpb25TdWdnZXN0aW9uTGFiZWwoe3ZlcnNpb25MYWJlbCwgdG8sIG9uQ2xpY2t9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5kb2NzLnZlcnNpb25zLmxhdGVzdFZlcnNpb25TdWdnZXN0aW9uTGFiZWxcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlcmQgdG8gdGVsbCB0aGUgdXNlciB0aGF0IGhlJ3MgYnJvd3NpbmcgYW4gdW5tYWludGFpbmVkIGRvYyB2ZXJzaW9uXCJcbiAgICAgIHZhbHVlcz17e1xuICAgICAgICB2ZXJzaW9uTGFiZWwsXG4gICAgICAgIGxhdGVzdFZlcnNpb25MaW5rOiAoXG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXt0b30gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZD1cInRoZW1lLmRvY3MudmVyc2lvbnMubGF0ZXN0VmVyc2lvbkxpbmtMYWJlbFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgbGFiZWwgdXNlZCBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uIHN1Z2dlc3Rpb24gbGluayBsYWJlbFwiPlxuICAgICAgICAgICAgICAgIGxhdGVzdCB2ZXJzaW9uXG4gICAgICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICApLFxuICAgICAgfX0+XG4gICAgICB7XG4gICAgICAgICdGb3IgdXAtdG8tZGF0ZSBkb2N1bWVudGF0aW9uLCBzZWUgdGhlIHtsYXRlc3RWZXJzaW9uTGlua30gKHt2ZXJzaW9uTGFiZWx9KS4nXG4gICAgICB9XG4gICAgPC9UcmFuc2xhdGU+XG4gICk7XG59XG5cbmNvbnN0IGdldFZlcnNpb25NYWluRG9jID0gKHZlcnNpb24pID0+XG4gIHZlcnNpb24uZG9jcy5maW5kKChkb2MpID0+IGRvYy5pZCA9PT0gdmVyc2lvbi5tYWluRG9jSWQpO1xuXG5mdW5jdGlvbiBEb2NWZXJzaW9uU3VnZ2VzdGlvbnMoKSB7XG4gIGNvbnN0IHtcbiAgICBzaXRlQ29uZmlnOiB7dGl0bGU6IHNpdGVUaXRsZX0sXG4gIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICBjb25zdCB7cGx1Z2luSWR9ID0gdXNlQWN0aXZlUGx1Z2luKHtcbiAgICBmYWlsZmFzdDogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IHtzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWV9ID0gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQpO1xuICBjb25zdCBhY3RpdmVWZXJzaW9uID0gdXNlQWN0aXZlVmVyc2lvbihwbHVnaW5JZCk7XG4gIGNvbnN0IHtcbiAgICBsYXRlc3REb2NTdWdnZXN0aW9uLFxuICAgIGxhdGVzdFZlcnNpb25TdWdnZXN0aW9uLFxuICB9ID0gdXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zKHBsdWdpbklkKTsgLy8gTm8gc3VnZ2VzdGlvbiB0byBiZSBtYWRlXG5cbiAgaWYgKCFsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbikge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfSAvLyB0cnkgdG8gbGluayB0byBzYW1lIGRvYyBpbiBsYXRlc3QgdmVyc2lvbiAobm90IGFsd2F5cyBwb3NzaWJsZSlcbiAgLy8gZmFsbGJhY2sgdG8gbWFpbiBkb2Mgb2YgbGF0ZXN0IHZlcnNpb25cblxuICBjb25zdCBsYXRlc3RWZXJzaW9uU3VnZ2VzdGVkRG9jID1cbiAgICBsYXRlc3REb2NTdWdnZXN0aW9uID8/IGdldFZlcnNpb25NYWluRG9jKGxhdGVzdFZlcnNpb25TdWdnZXN0aW9uKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LS13YXJuaW5nIG1hcmdpbi1ib3R0b20tLW1kXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YWN0aXZlVmVyc2lvbi5uYW1lID09PSAnY3VycmVudCcgPyAoXG4gICAgICAgICAgPFVucmVsZWFzZWRWZXJzaW9uTGFiZWxcbiAgICAgICAgICAgIHNpdGVUaXRsZT17c2l0ZVRpdGxlfVxuICAgICAgICAgICAgdmVyc2lvbkxhYmVsPXthY3RpdmVWZXJzaW9uLmxhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFVubWFpbnRhaW5lZFZlcnNpb25MYWJlbFxuICAgICAgICAgICAgc2l0ZVRpdGxlPXtzaXRlVGl0bGV9XG4gICAgICAgICAgICB2ZXJzaW9uTGFiZWw9e2FjdGl2ZVZlcnNpb24ubGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tdG9wLS1tZFwiPlxuICAgICAgICA8TGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb25MYWJlbFxuICAgICAgICAgIHZlcnNpb25MYWJlbD17bGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb24ubGFiZWx9XG4gICAgICAgICAgdG89e2xhdGVzdFZlcnNpb25TdWdnZXN0ZWREb2MucGF0aH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUobGF0ZXN0VmVyc2lvblN1Z2dlc3Rpb24ubmFtZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jVmVyc2lvblN1Z2dlc3Rpb25zO1xuIiwiLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQge1xuXHRcImxhc3RVcGRhdGVkRGF0ZVwiOiBcImxhc3RVcGRhdGVkRGF0ZV8xV0lfXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSAnQGRvY3VzYXVydXMvVHJhbnNsYXRlJztcblxuZnVuY3Rpb24gTGFzdFVwZGF0ZWRBdERhdGUoe2xhc3RVcGRhdGVkQXQsIGZvcm1hdHRlZExhc3RVcGRhdGVkQXR9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5sYXN0VXBkYXRlZC5hdERhdGVcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgd29yZHMgdXNlZCB0byBkZXNjcmliZSBvbiB3aGljaCBkYXRlIGEgcGFnZSBoYXMgYmVlbiBsYXN0IHVwZGF0ZWRcIlxuICAgICAgdmFsdWVzPXt7XG4gICAgICAgIGRhdGU6IChcbiAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgZGF0ZVRpbWU9e25ldyBEYXRlKGxhc3RVcGRhdGVkQXQgKiAxMDAwKS50b0lTT1N0cmluZygpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFzdFVwZGF0ZWREYXRlfT5cbiAgICAgICAgICAgIHtmb3JtYXR0ZWRMYXN0VXBkYXRlZEF0fVxuICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgKSxcbiAgICAgIH19PlxuICAgICAgeycgb24ge2RhdGV9J31cbiAgICA8L1RyYW5zbGF0ZT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGFzdFVwZGF0ZWRCeVVzZXIoe2xhc3RVcGRhdGVkQnl9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zbGF0ZVxuICAgICAgaWQ9XCJ0aGVtZS5sYXN0VXBkYXRlZC5ieVVzZXJcIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgd29yZHMgdXNlZCB0byBkZXNjcmliZSBieSB3aG8gdGhlIHBhZ2UgaGFzIGJlZW4gbGFzdCB1cGRhdGVkXCJcbiAgICAgIHZhbHVlcz17e1xuICAgICAgICB1c2VyOiA8c3Ryb25nPntsYXN0VXBkYXRlZEJ5fTwvc3Ryb25nPixcbiAgICAgIH19PlxuICAgICAgeycgYnkge3VzZXJ9J31cbiAgICA8L1RyYW5zbGF0ZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFzdFVwZGF0ZWQoe1xuICBsYXN0VXBkYXRlZEF0LFxuICBmb3JtYXR0ZWRMYXN0VXBkYXRlZEF0LFxuICBsYXN0VXBkYXRlZEJ5LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtLXJpZ2h0XCI+XG4gICAgICA8ZW0+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICBpZD1cInRoZW1lLmxhc3RVcGRhdGVkLmxhc3RVcGRhdGVkQXRCeVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBzZW50ZW5jZSB1c2VkIHRvIGRpc3BsYXkgd2hlbiBhIHBhZ2UgaGFzIGJlZW4gbGFzdCB1cGRhdGVkLCBhbmQgYnkgd2hvXCJcbiAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICBhdERhdGU6XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWRBdCAmJiBmb3JtYXR0ZWRMYXN0VXBkYXRlZEF0ID8gKFxuICAgICAgICAgICAgICAgICAgPExhc3RVcGRhdGVkQXREYXRlXG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkQXQ9e2xhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZExhc3RVcGRhdGVkQXQ9e2Zvcm1hdHRlZExhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGJ5VXNlcjogbGFzdFVwZGF0ZWRCeSA/IChcbiAgICAgICAgICAgICAgICA8TGFzdFVwZGF0ZWRCeVVzZXIgbGFzdFVwZGF0ZWRCeT17bGFzdFVwZGF0ZWRCeX0gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7J0xhc3QgdXBkYXRlZHthdERhdGV9e2J5VXNlcn0nfVxuICAgICAgICAgIDwvVHJhbnNsYXRlPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGw+IChTaW11bGF0ZWQgZHVyaW5nIGRldiBmb3IgYmV0dGVyIHBlcmYpPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc21hbGw+XG4gICAgICA8L2VtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVRPQ0hpZ2hsaWdodChsaW5rQ2xhc3NOYW1lLCBsaW5rQWN0aXZlQ2xhc3NOYW1lLCB0b3BPZmZzZXQpIHtcbiAgY29uc3QgW2xhc3RBY3RpdmVMaW5rLCBzZXRMYXN0QWN0aXZlTGlua10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZUxpbmsoKSB7XG4gICAgICBmdW5jdGlvbiBnZXRBY3RpdmVIZWFkZXJBbmNob3IoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnNBbmNob3JzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbmNob3InKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZmlyc3RBbmNob3JVbmRlclZpZXdwb3J0VG9wID0gaGVhZGVyc0FuY2hvcnMuZmluZCgoYW5jaG9yKSA9PiB7XG4gICAgICAgICAgY29uc3Qge3RvcH0gPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcmV0dXJuIHRvcCA+PSB0b3BPZmZzZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXJzdEFuY2hvclVuZGVyVmlld3BvcnRUb3ApIHtcbiAgICAgICAgICAvLyBJZiBmaXJzdCBhbmNob3IgaW4gdmlld3BvcnQgaXMgdW5kZXIgYSBjZXJ0YWluIHRocmVzaG9sZCwgd2UgY29uc2lkZXIgaXQncyBub3QgdGhlIGFjdGl2ZSBhbmNob3IuXG4gICAgICAgICAgLy8gSW4gc3VjaCBjYXNlLCB0aGUgYWN0aXZlIGFuY2hvciBpcyB0aGUgcHJldmlvdXMgb25lIChpZiBpdCBleGlzdHMpLCB0aGF0IG1heSBiZSBhYm92ZSB0aGUgdmlld3BvcnRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmaXJzdEFuY2hvclVuZGVyVmlld3BvcnRUb3AuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IHRvcE9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNBbmNob3IgPVxuICAgICAgICAgICAgICBoZWFkZXJzQW5jaG9yc1tcbiAgICAgICAgICAgICAgICBoZWFkZXJzQW5jaG9ycy5pbmRleE9mKGZpcnN0QW5jaG9yVW5kZXJWaWV3cG9ydFRvcCkgLSAxXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNBbmNob3IgPz8gZmlyc3RBbmNob3JVbmRlclZpZXdwb3J0VG9wO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIGFuY2hvciBpcyBhdCB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCwgd2UgY29uc2lkZXIgaXQncyB0aGUgZmlyc3QgYW5jaG9yXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RBbmNob3JVbmRlclZpZXdwb3J0VG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBubyBhbmNob3IgdW5kZXIgdmlld3BvcnQgdG9wPyAoaWUgd2UgYXJlIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGhpZ2hsaWdodCB0aGUgbGFzdCBhbmNob3IgZm91bmRcbiAgICAgICAgICByZXR1cm4gaGVhZGVyc0FuY2hvcnNbaGVhZGVyc0FuY2hvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZlSGVhZGVyQW5jaG9yID0gZ2V0QWN0aXZlSGVhZGVyQW5jaG9yKCk7XG5cbiAgICAgIGlmIChhY3RpdmVIZWFkZXJBbmNob3IpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1IaWdobGlnaHRlZCA9IGZhbHNlOyAvLyBAdHMtZXhwZWN0LWVycm9yOiBNdXN0IGJlIDxhPiB0YWdzLlxuXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsaW5rQ2xhc3NOYW1lKTtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsaW5rcy5sZW5ndGggJiYgIWl0ZW1IaWdobGlnaHRlZCkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpbmRleF07XG4gICAgICAgICAgY29uc3Qge2hyZWZ9ID0gbGluaztcbiAgICAgICAgICBjb25zdCBhbmNob3JWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgIGhyZWYuc3Vic3RyaW5nKGhyZWYuaW5kZXhPZignIycpICsgMSksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChhY3RpdmVIZWFkZXJBbmNob3IuaWQgPT09IGFuY2hvclZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobGFzdEFjdGl2ZUxpbmspIHtcbiAgICAgICAgICAgICAgbGFzdEFjdGl2ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZShsaW5rQWN0aXZlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKGxpbmtBY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0TGFzdEFjdGl2ZUxpbmsobGluayk7XG4gICAgICAgICAgICBpdGVtSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRBY3RpdmVMaW5rKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRBY3RpdmVMaW5rKTtcbiAgICBzZXRBY3RpdmVMaW5rKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEFjdGl2ZUxpbmspO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0QWN0aXZlTGluayk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRPQ0hpZ2hsaWdodDtcbiIsIi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHtcblx0XCJ0YWJsZU9mQ29udGVudHNcIjogXCJ0YWJsZU9mQ29udGVudHNfMzUtRVwiLFxuXHRcImRvY0l0ZW1Db250YWluZXJcIjogXCJkb2NJdGVtQ29udGFpbmVyX2dwYWlcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB1c2VUT0NIaWdobGlnaHQgZnJvbSAnQHRoZW1lL2hvb2tzL3VzZVRPQ0hpZ2hsaWdodCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuY29uc3QgTElOS19DTEFTU19OQU1FID0gJ3RhYmxlLW9mLWNvbnRlbnRzX19saW5rJztcbmNvbnN0IEFDVElWRV9MSU5LX0NMQVNTX05BTUUgPSAndGFibGUtb2YtY29udGVudHNfX2xpbmstLWFjdGl2ZSc7XG5jb25zdCBUT1BfT0ZGU0VUID0gMTAwO1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY29udHJvbC1oYXMtYXNzb2NpYXRlZC1sYWJlbCAqL1xuXG5mdW5jdGlvbiBIZWFkaW5ncyh7dG9jLCBpc0NoaWxkfSkge1xuICBpZiAoIXRvYy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBpc0NoaWxkID8gJycgOiAndGFibGUtb2YtY29udGVudHMgdGFibGUtb2YtY29udGVudHNfX2xlZnQtYm9yZGVyJ1xuICAgICAgfT5cbiAgICAgIHt0b2MubWFwKChoZWFkaW5nKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2hlYWRpbmcuaWR9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgIyR7aGVhZGluZy5pZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtMSU5LX0NMQVNTX05BTUV9IC8vIERldmVsb3BlciBwcm92aWRlZCB0aGUgSFRNTCwgc28gYXNzdW1lIGl0J3Mgc2FmZS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogaGVhZGluZy52YWx1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SGVhZGluZ3MgaXNDaGlsZCB0b2M9e2hlYWRpbmcuY2hpbGRyZW59IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5mdW5jdGlvbiBUT0Moe3RvY30pIHtcbiAgdXNlVE9DSGlnaGxpZ2h0KExJTktfQ0xBU1NfTkFNRSwgQUNUSVZFX0xJTktfQ0xBU1NfTkFNRSwgVE9QX09GRlNFVCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnRhYmxlT2ZDb250ZW50cywgJ3RoaW4tc2Nyb2xsYmFyJyl9PlxuICAgICAgPEhlYWRpbmdzIHRvYz17dG9jfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUT0M7XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwiaWNvbkVkaXRcIjogXCJpY29uRWRpdF8yX3VpXCJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJY29uRWRpdCA9ICh7Y2xhc3NOYW1lLCAuLi5yZXN0UHJvcHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBoZWlnaHQ9XCIxLjJlbVwiXG4gICAgICB3aWR0aD1cIjEuMmVtXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgdmlld0JveD1cIjAgMCA0MCA0MFwiXG4gICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmljb25FZGl0LCBjbGFzc05hbWUpfVxuICAgICAgYXJpYS1sYWJlbD1cIkVkaXQgcGFnZVwiXG4gICAgICB7Li4ucmVzdFByb3BzfT5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwibTM0LjUgMTEuN2wtMyAzLjEtNi4zLTYuMyAzLjEtM3EwLjUtMC41IDEuMi0wLjV0MS4xIDAuNWwzLjkgMy45cTAuNSAwLjQgMC41IDEuMXQtMC41IDEuMnogbS0yOS41IDE3LjFsMTguNC0xOC41IDYuMyA2LjMtMTguNCAxOC40aC02LjN2LTYuMnpcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkVkaXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tICdAZG9jdXNhdXJ1cy9UcmFuc2xhdGUnO1xuaW1wb3J0IEljb25FZGl0IGZyb20gJ0B0aGVtZS9JY29uRWRpdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VGhpc1BhZ2Uoe2VkaXRVcmx9KSB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17ZWRpdFVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgPEljb25FZGl0IC8+XG4gICAgICA8VHJhbnNsYXRlXG4gICAgICAgIGlkPVwidGhlbWUuY29tbW9uLmVkaXRUaGlzUGFnZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGxpbmsgbGFiZWwgdG8gZWRpdCB0aGUgY3VycmVudCBwYWdlXCI+XG4gICAgICAgIEVkaXQgdGhpcyBwYWdlXG4gICAgICA8L1RyYW5zbGF0ZT5cbiAgICA8L2E+XG4gICk7XG59XG4iLCIvLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCB7XG5cdFwiZG9jVGl0bGVcIjogXCJkb2NUaXRsZV8zYTRoXCIsXG5cdFwiZG9jSXRlbUNvbnRhaW5lclwiOiBcImRvY0l0ZW1Db250YWluZXJfMzNlY1wiLFxuXHRcImRvY0l0ZW1Db2xcIjogXCJkb2NJdGVtQ29sXzNGblNcIlxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jUGFnaW5hdG9yIGZyb20gJ0B0aGVtZS9Eb2NQYWdpbmF0b3InO1xuaW1wb3J0IERvY1ZlcnNpb25TdWdnZXN0aW9ucyBmcm9tICdAdGhlbWUvRG9jVmVyc2lvblN1Z2dlc3Rpb25zJztcbmltcG9ydCBTZW8gZnJvbSAnQHRoZW1lL1Nlbyc7XG5pbXBvcnQgTGFzdFVwZGF0ZWQgZnJvbSAnQHRoZW1lL0xhc3RVcGRhdGVkJztcbmltcG9ydCBUT0MgZnJvbSAnQHRoZW1lL1RPQyc7XG5pbXBvcnQgRWRpdFRoaXNQYWdlIGZyb20gJ0B0aGVtZS9FZGl0VGhpc1BhZ2UnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHtcbiAgdXNlQWN0aXZlUGx1Z2luLFxuICB1c2VWZXJzaW9ucyxcbiAgdXNlQWN0aXZlVmVyc2lvbixcbn0gZnJvbSAnQHRoZW1lL2hvb2tzL3VzZURvY3MnO1xuXG5mdW5jdGlvbiBEb2NJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHtjb250ZW50OiBEb2NDb250ZW50fSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgbWV0YWRhdGEsXG4gICAgZnJvbnRNYXR0ZXI6IHtcbiAgICAgIGltYWdlLFxuICAgICAga2V5d29yZHMsXG4gICAgICBoaWRlX3RpdGxlOiBoaWRlVGl0bGUsXG4gICAgICBoaWRlX3RhYmxlX29mX2NvbnRlbnRzOiBoaWRlVGFibGVPZkNvbnRlbnRzLFxuICAgIH0sXG4gIH0gPSBEb2NDb250ZW50O1xuICBjb25zdCB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgdGl0bGUsXG4gICAgZWRpdFVybCxcbiAgICBsYXN0VXBkYXRlZEF0LFxuICAgIGZvcm1hdHRlZExhc3RVcGRhdGVkQXQsXG4gICAgbGFzdFVwZGF0ZWRCeSxcbiAgfSA9IG1ldGFkYXRhO1xuICBjb25zdCB7cGx1Z2luSWR9ID0gdXNlQWN0aXZlUGx1Z2luKHtcbiAgICBmYWlsZmFzdDogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IHZlcnNpb25zID0gdXNlVmVyc2lvbnMocGx1Z2luSWQpO1xuICBjb25zdCB2ZXJzaW9uID0gdXNlQWN0aXZlVmVyc2lvbihwbHVnaW5JZCk7IC8vIElmIHNpdGUgaXMgbm90IHZlcnNpb25lZCBvciBvbmx5IG9uZSB2ZXJzaW9uIGlzIGluY2x1ZGVkXG4gIC8vIHdlIGRvbid0IHNob3cgdGhlIHZlcnNpb24gYmFkZ2VcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zMzYyXG5cbiAgY29uc3Qgc2hvd1ZlcnNpb25CYWRnZSA9IHZlcnNpb25zLmxlbmd0aCA+IDE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW9cbiAgICAgICAgey4uLntcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBrZXl3b3JkcyxcbiAgICAgICAgICBpbWFnZSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NvbCcsIHtcbiAgICAgICAgICAgIFtzdHlsZXMuZG9jSXRlbUNvbF06ICFoaWRlVGFibGVPZkNvbnRlbnRzLFxuICAgICAgICAgIH0pfT5cbiAgICAgICAgICA8RG9jVmVyc2lvblN1Z2dlc3Rpb25zIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2NJdGVtQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICB7c2hvd1ZlcnNpb25CYWRnZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLS1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVmVyc2lvbjoge3ZlcnNpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshaGlkZVRpdGxlICYmIChcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmRvY1RpdGxlfT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICAgICAgICAgIDxEb2NDb250ZW50IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgeyhlZGl0VXJsIHx8IGxhc3RVcGRhdGVkQXQgfHwgbGFzdFVwZGF0ZWRCeSkgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi12ZXJ0LS14bFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZWRpdFVybCAmJiA8RWRpdFRoaXNQYWdlIGVkaXRVcmw9e2VkaXRVcmx9IC8+fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7KGxhc3RVcGRhdGVkQXQgfHwgbGFzdFVwZGF0ZWRCeSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TGFzdFVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZEF0PXtsYXN0VXBkYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZExhc3RVcGRhdGVkQXQ9e2Zvcm1hdHRlZExhc3RVcGRhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWRCeT17bGFzdFVwZGF0ZWRCeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luLXZlcnQtLWxnXCI+XG4gICAgICAgICAgICAgIDxEb2NQYWdpbmF0b3IgbWV0YWRhdGE9e21ldGFkYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IWhpZGVUYWJsZU9mQ29udGVudHMgJiYgRG9jQ29udGVudC50b2MgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0tM1wiPlxuICAgICAgICAgICAgPFRPQyB0b2M9e0RvY0NvbnRlbnQudG9jfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY0l0ZW07XG4iLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHVzZVRoZW1lQ29uZmlnXzEgPSByZXF1aXJlKFwiLi91dGlscy91c2VUaGVtZUNvbmZpZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZVRoZW1lQ29uZmlnXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VUaGVtZUNvbmZpZ18xLnVzZVRoZW1lQ29uZmlnOyB9IH0pO1xudmFyIHVzZUFsdGVybmF0ZVBhZ2VVdGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXNlQWx0ZXJuYXRlUGFnZVV0aWxzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlQWx0ZXJuYXRlUGFnZVV0aWxzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VBbHRlcm5hdGVQYWdlVXRpbHNfMS51c2VBbHRlcm5hdGVQYWdlVXRpbHM7IH0gfSk7XG52YXIgc2VhcmNoVXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3NlYXJjaFV0aWxzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZG9jVmVyc2lvblNlYXJjaFRhZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VhcmNoVXRpbHNfMS5kb2NWZXJzaW9uU2VhcmNoVGFnOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiREVGQVVMVF9TRUFSQ0hfVEFHXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWFyY2hVdGlsc18xLkRFRkFVTFRfU0VBUkNIX1RBRzsgfSB9KTtcbnZhciBkb2NzVXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2RvY3NVdGlsc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRG9jc1BsdWdpbkVuYWJsZWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3NVdGlsc18xLmlzRG9jc1BsdWdpbkVuYWJsZWQ7IH0gfSk7XG52YXIgcGF0aFV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy9wYXRoVXRpbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1NhbWVQYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXRoVXRpbHNfMS5pc1NhbWVQYXRoOyB9IH0pO1xudmFyIGdlbmVyYWxVdGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvZ2VuZXJhbFV0aWxzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlVGl0bGVGb3JtYXR0ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYWxVdGlsc18xLnVzZVRpdGxlRm9ybWF0dGVyOyB9IH0pO1xudmFyIHVzZVBsdXJhbEZvcm1fMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3VzZVBsdXJhbEZvcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VQbHVyYWxGb3JtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VQbHVyYWxGb3JtXzEudXNlUGx1cmFsRm9ybTsgfSB9KTtcbnZhciB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbl8xID0gcmVxdWlyZShcIi4vdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VEb2NzUHJlZmVycmVkVmVyc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25fMS51c2VEb2NzUHJlZmVycmVkVmVyc2lvbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQnlQbHVnaW5JZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25fMS51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQ7IH0gfSk7XG52YXIgRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvZG9jc1ByZWZlcnJlZFZlcnNpb24vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBEb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyXzEuRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXI7IH0gfSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzNjBcbi8vIFRPRE8gZmluZCBhIGJldHRlciBzb2x1dGlvbiwgdGhpcyBzaG91bGRuJ3QgYmUgbmVlZGVkXG4vLyBUT0RPIHRoaXMgaXMgbm90IGlkZWFsIGFuZCBwcm9kdWNlIGEgd2FybmluZyFcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy83NzEzI2lzc3VlY29tbWVudC00Njc4ODg0Mzdcbi8vIG5vdGU6IHdhcm5pbmcgY2FuIGJlIGZpbHRlcmVkOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZG9jdXNhdXJ1cy9wdWxsLzMzODIjaXNzdWVjb21tZW50LTY4NDk2NjkyNFxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdAdGhlbWUtaW5pdC9ob29rcy91c2VEb2NzJyk7XG59IGNhdGNoIChlKSB7XG4gIC8vIEluIGNhc2UgdGhlIGRvY3MgcGx1Z2luIGlzIG5vdCBhdmFpbGFibGUsIG1pZ2h0IGJlIHVzZWZ1bCB0byBzdHViIHNvbWUgbWV0aG9kcyBoZXJlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kb2N1c2F1cnVzL2lzc3Vlcy8zOTQ3XG4gIGNvbnN0IEVtcHR5ID0ge307XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHVzZUFsbERvY3NEYXRhOiAoKSA9PiBFbXB0eSxcbiAgICB1c2VBY3RpdmVQbHVnaW5BbmRWZXJzaW9uOiAoKSA9PiB1bmRlZmluZWQsXG4gIH07XG59XG4vKlxudGhyb3cgbmV3IEVycm9yKFxuICBcIlRoZSBkb2NzIHBsdWdpbiBpcyBub3QgdXNlZCwgc28geW91IGNhbid0IHJlcXVpcmUgdGhlIHVzZURvY3MgaG9va3MuIFwiLFxuKTtcbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuaW1wb3J0IHsgaGFzUHJvdG9jb2wgfSBmcm9tICcuL2lzSW50ZXJuYWxVcmwnO1xuZnVuY3Rpb24gYWRkQmFzZVVybChzaXRlVXJsLCBiYXNlVXJsLCB1cmwsIHsgZm9yY2VQcmVwZW5kQmFzZVVybCA9IGZhbHNlLCBhYnNvbHV0ZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8vIGl0IG5ldmVyIG1ha2VzIHNlbnNlIHRvIGFkZCBhIGJhc2UgdXJsIHRvIGEgbG9jYWwgYW5jaG9yIHVybFxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8vIGl0IG5ldmVyIG1ha2VzIHNlbnNlIHRvIGFkZCBhIGJhc2UgdXJsIHRvIGFuIHVybCB3aXRoIGEgcHJvdG9jb2xcbiAgICBpZiAoaGFzUHJvdG9jb2wodXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICBpZiAoZm9yY2VQcmVwZW5kQmFzZVVybCkge1xuICAgICAgICByZXR1cm4gYmFzZVVybCArIHVybDtcbiAgICB9XG4gICAgLy8gV2Ugc2hvdWxkIGF2b2lkIGFkZGluZyB0aGUgYmFzZXVybCB0d2ljZSBpZiBpdCdzIGFscmVhZHkgdGhlcmVcbiAgICBjb25zdCBzaG91bGRBZGRCYXNlVXJsID0gIXVybC5zdGFydHNXaXRoKGJhc2VVcmwpO1xuICAgIGNvbnN0IGJhc2VQYXRoID0gc2hvdWxkQWRkQmFzZVVybCA/IGJhc2VVcmwgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKSA6IHVybDtcbiAgICByZXR1cm4gYWJzb2x1dGUgPyBzaXRlVXJsICsgYmFzZVBhdGggOiBiYXNlUGF0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlVXJsVXRpbHMoKSB7XG4gICAgY29uc3QgeyBzaXRlQ29uZmlnOiB7IGJhc2VVcmwgPSAnLycsIHVybDogc2l0ZVVybCB9ID0ge30sIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpdGhCYXNlVXJsOiAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWRkQmFzZVVybChzaXRlVXJsLCBiYXNlVXJsLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYXNlVXJsKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3aXRoQmFzZVVybCB9ID0gdXNlQmFzZVVybFV0aWxzKCk7XG4gICAgcmV0dXJuIHdpdGhCYXNlVXJsKHVybCwgb3B0aW9ucyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLypcbk1pbmltYWwgaW1wbGVtZW50YXRpb24gb2YgYSBSZWFjdCBpbnRlcnBvbGF0ZSBjb21wb25lbnQuXG5XZSBkb24ndCBzaGlwIGEgbWFya2Rvd24gcGFyc2VyIG5vciBhIGZlYXR1cmUtY29tcGxldGUgaTE4biBsaWJyYXJ5IG9uIHB1cnBvc2UuXG5Nb3JlIGRldGFpbHMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvcHVsbC80Mjk1XG4qL1xuY29uc3QgVmFsdWVSZWdleHAgPSAve1xcdyt9L2c7XG5jb25zdCBWYWx1ZUZvdW5kTWFya2VyID0gJ3t9JzsgLy8gZG9lcyBub3QgY2FyZSBtdWNoXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUodGV4dCwgdmFsdWVzKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICBjb25zdCBwcm9jZXNzZWRUZXh0ID0gdGV4dC5yZXBsYWNlKFZhbHVlUmVnZXhwLCAobWF0Y2gpID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIHt7IGFuZCB9fSBhcm91bmQgdGhlIHBsYWNlaG9sZGVyXG4gICAgICAgIGNvbnN0IGtleSA9IG1hdGNoLnN1YnN0cigxLCBtYXRjaC5sZW5ndGggLSAyKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXMgPT09IG51bGwgfHwgdmFsdWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5pc1ZhbGlkRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgOiAvLyBGb3Igbm9uLVJlYWN0IGVsZW1lbnRzOiBiYXNpYyBwcmltaXRpdmUtPnN0cmluZyBjb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlRm91bmRNYXJrZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIG5vIG1hdGNoPyBhZGQgd2FybmluZz9cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE5vIGludGVycG9sYXRpb24gdG8gYmUgZG9uZToganVzdCByZXR1cm4gdGhlIHRleHRcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICAvLyBCYXNpYyBzdHJpbmcgaW50ZXJwb2xhdGlvbjogcmV0dXJucyBpbnRlcnBvbGF0ZWQgc3RyaW5nXG4gICAgZWxzZSBpZiAoZWxlbWVudHMuZXZlcnkoKGVsKSA9PiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFxuICAgICAgICAgICAgLnNwbGl0KFZhbHVlRm91bmRNYXJrZXIpXG4gICAgICAgICAgICAucmVkdWNlKChzdHIsIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5jb25jYXQodmFsdWUpLmNvbmNhdCgoX2EgPSBlbGVtZW50c1tpbmRleF0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbiAgICAvLyBKU1ggaW50ZXJwb2xhdGlvbjogcmV0dXJucyBSZWFjdE5vZGVcbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFRleHRcbiAgICAgICAgICAgIC5zcGxpdChWYWx1ZUZvdW5kTWFya2VyKVxuICAgICAgICAgICAgLnJlZHVjZSgoYXJyYXksIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5hcnJheSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XSksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJwb2xhdGUoeyBjaGlsZHJlbiwgdmFsdWVzLCB9KSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlKGNoaWxkcmVuLCB2YWx1ZXMpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnRlcnBvbGF0ZSwgeyBpbnRlcnBvbGF0ZSwgfSBmcm9tICdAZG9jdXNhdXJ1cy9JbnRlcnBvbGF0ZSc7XG4vLyBDYW4ndCByZWFkIGl0IGZyb20gY29udGV4dCwgZHVlIHRvIGV4cG9zaW5nIGltcGVyYXRpdmUgQVBJXG5pbXBvcnQgY29kZVRyYW5zbGF0aW9ucyBmcm9tICdAZ2VuZXJhdGVkL2NvZGVUcmFuc2xhdGlvbnMnO1xuZnVuY3Rpb24gZ2V0TG9jYWxpemVkTWVzc2FnZSh7IGlkLCBtZXNzYWdlLCB9KSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBjb2RlVHJhbnNsYXRpb25zW2lkICE9PSBudWxsICYmIGlkICE9PSB2b2lkIDAgPyBpZCA6IG1lc3NhZ2VdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBtZXNzYWdlO1xufVxuLy8gSW1wZXJhdGl2ZSB0cmFuc2xhdGlvbiBBUEkgaXMgdXNlZnVsIGZvciBzb21lIGVkZ2UtY2FzZXM6XG4vLyAtIHRyYW5zbGF0aW5nIHBhZ2UgdGl0bGVzIChtZXRhKVxuLy8gLSB0cmFuc2xhdGluZyBzdHJpbmcgcHJvcHMgKGlucHV0IHBsYWNlaG9sZGVycywgaW1hZ2UgYWx0LCBhcmlhIGxhYmVscy4uLilcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoeyBtZXNzYWdlLCBpZCB9LCB2YWx1ZXMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9jYWxpemVkTWVzc2FnZSA9IChfYSA9IGdldExvY2FsaXplZE1lc3NhZ2UoeyBtZXNzYWdlLCBpZCB9KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWVzc2FnZTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGUobG9jYWxpemVkTWVzc2FnZSwgdmFsdWVzKTtcbn1cbi8vIE1heWJlIHdlJ2xsIHdhbnQgdG8gaW1wcm92ZSB0aGlzIGNvbXBvbmVudCB3aXRoIGFkZGl0aW9uYWwgZmVhdHVyZXNcbi8vIExpa2UgdG9nZ2xpbmcgYSB0cmFuc2xhdGlvbiBtb2RlIHRoYXQgYWRkcyBhIGxpdHRsZSB0cmFuc2xhdGlvbiBidXR0b24gbmVhciB0aGUgdGV4dD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zbGF0ZSh7IGNoaWxkcmVuLCBpZCwgdmFsdWVzLCB9KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvY2FsaXplZE1lc3NhZ2UgPSAoX2EgPSBnZXRMb2NhbGl6ZWRNZXNzYWdlKHsgbWVzc2FnZTogY2hpbGRyZW4sIGlkIH0pKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjaGlsZHJlbjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcnBvbGF0ZSwgeyB2YWx1ZXM6IHZhbHVlcyB9LCBsb2NhbGl6ZWRNZXNzYWdlKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgYXMgUlJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgaXNJbnRlcm5hbFVybCBmcm9tICcuL2lzSW50ZXJuYWxVcmwnO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgdXNlTGlua3NDb2xsZWN0b3IgfSBmcm9tICcuLi9MaW5rc0NvbGxlY3Rvcic7XG5pbXBvcnQgeyB1c2VCYXNlVXJsVXRpbHMgfSBmcm9tICcuL3VzZUJhc2VVcmwnO1xuLy8gVE9ETyBhbGwgdGhpcyB3b3VsZG4ndCBiZSBuZWNlc3NhcnkgaWYgd2UgdXNlZCBSZWFjdFJvdXRlciBiYXNlbmFtZSBmZWF0dXJlXG4vLyBXZSBkb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBiYXNlIHVybHMgdG8gYWxsIGxpbmtzLFxuLy8gb25seSB0aGUgXCJzYWZlXCIgb25lcywgc3RhcnRpbmcgd2l0aCAvIChsaWtlIC9kb2NzL2ludHJvZHVjdGlvbilcbi8vIHRoaXMgaXMgYmVjYXVzZSB1c2VCYXNlVXJsKCkgYWN0dWFsbHkgdHJhbnNmb3JtcyByZWxhdGl2ZSBsaW5rc1xuLy8gbGlrZSBcImludHJvZHVjdGlvblwiIHRvIFwiL2Jhc2VVcmwvaW50cm9kdWN0aW9uXCIgPT4gYmFkIGJlaGF2aW9yIHRvIGZpeFxuY29uc3Qgc2hvdWxkQWRkQmFzZVVybEF1dG9tYXRpY2FsbHkgPSAodG8pID0+IHRvLnN0YXJ0c1dpdGgoJy8nKTtcbmZ1bmN0aW9uIExpbmsoX2EpIHtcbiAgICB2YXIgX2I7XG4gICAgdmFyIHsgaXNOYXZMaW5rLCB0bywgaHJlZiwgYWN0aXZlQ2xhc3NOYW1lLCBpc0FjdGl2ZSwgJ2RhdGEtbm9Ccm9rZW5MaW5rQ2hlY2snOiBub0Jyb2tlbkxpbmtDaGVjaywgYXV0b0FkZEJhc2VVcmwgPSB0cnVlIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImlzTmF2TGlua1wiLCBcInRvXCIsIFwiaHJlZlwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImlzQWN0aXZlXCIsICdkYXRhLW5vQnJva2VuTGlua0NoZWNrJywgXCJhdXRvQWRkQmFzZVVybFwiXSk7XG4gICAgY29uc3QgeyB3aXRoQmFzZVVybCB9ID0gdXNlQmFzZVVybFV0aWxzKCk7XG4gICAgY29uc3QgbGlua3NDb2xsZWN0b3IgPSB1c2VMaW5rc0NvbGxlY3RvcigpO1xuICAgIC8vIElNUE9SVEFOVDogdXNpbmcgdG8gb3IgaHJlZiBzaG91bGQgbm90IGNoYW5nZSBhbnl0aGluZ1xuICAgIC8vIEZvciBleGFtcGxlLCBNRFggbGlua3Mgd2lsbCBBTFdBWVMgZ2l2ZSB1cyB0aGUgaHJlZiBwcm9wc1xuICAgIC8vIFVzaW5nIG9uZSBwcm9wIG9yIHRoZSBvdGhlciBzaG91bGQgbm90IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2hcbiAgICAvLyBpbnRlcm5hbCBsaW5rcyAoL2RvY3MvbXlEb2MpIGZyb20gZXh0ZXJuYWwgbGlua3MgKGh0dHBzOi8vZ2l0aHViLmNvbSlcbiAgICBjb25zdCB0YXJnZXRMaW5rVW5wcmVmaXhlZCA9IHRvIHx8IGhyZWY7XG4gICAgZnVuY3Rpb24gbWF5YmVBZGRCYXNlVXJsKHN0cikge1xuICAgICAgICByZXR1cm4gYXV0b0FkZEJhc2VVcmwgJiYgc2hvdWxkQWRkQmFzZVVybEF1dG9tYXRpY2FsbHkoc3RyKVxuICAgICAgICAgICAgPyB3aXRoQmFzZVVybChzdHIpXG4gICAgICAgICAgICA6IHN0cjtcbiAgICB9XG4gICAgY29uc3QgaXNJbnRlcm5hbCA9IGlzSW50ZXJuYWxVcmwodGFyZ2V0TGlua1VucHJlZml4ZWQpO1xuICAgIC8vIHBhdGhuYW1lOi8vIGlzIGEgc3BlY2lhbCBcInByb3RvY29sXCIgd2UgdXNlIHRvIHRlbGwgRG9jdXNhdXJ1cyBsaW5rXG4gICAgLy8gdGhhdCBhIGxpbmsgaXMgbm90IFwiaW50ZXJuYWxcIiBhbmQgdGhhdCB3ZSBzaG91bGRuJ3QgdXNlIGhpc3RvcnkucHVzaCgpXG4gICAgLy8gdGhpcyBpcyBub3QgaWRlYWwgYnV0IGEgZ29vZCBlbm91Z2ggZXNjYXBlIGhhdGNoIGZvciBub3dcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2RvY3VzYXVydXMvaXNzdWVzLzMzMDlcbiAgICAvLyBub3RlOiB3ZSB3YW50IGJhc2VVcmwgdG8gYmUgYXBwZW5kZWQgKHNlZSBpc3N1ZSBmb3IgZGV0YWlscylcbiAgICAvLyBUT0RPIHJlYWQgcm91dGVzIGFuZCBhdXRvbWF0aWNhbGx5IGRldGVjdCBpbnRlcm5hbC9leHRlcm5hbCBsaW5rcz9cbiAgICBjb25zdCB0YXJnZXRMaW5rV2l0aG91dFBhdGhuYW1lUHJvdG9jb2wgPSB0YXJnZXRMaW5rVW5wcmVmaXhlZCA9PT0gbnVsbCB8fCB0YXJnZXRMaW5rVW5wcmVmaXhlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0TGlua1VucHJlZml4ZWQucmVwbGFjZSgncGF0aG5hbWU6Ly8nLCAnJyk7XG4gICAgLy8gVE9ETyB3ZSBzaG91bGQgdXNlIFJlYWN0Um91dGVyIGJhc2VuYW1lIGZlYXR1cmUgaW5zdGVhZCFcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGFwcGx5IGJhc2UgdXJsIGluIGxpbmtzIHRoYXQgc3RhcnQgd2l0aCAvXG4gICAgY29uc3QgdGFyZ2V0TGluayA9IHR5cGVvZiB0YXJnZXRMaW5rV2l0aG91dFBhdGhuYW1lUHJvdG9jb2wgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbWF5YmVBZGRCYXNlVXJsKHRhcmdldExpbmtXaXRob3V0UGF0aG5hbWVQcm90b2NvbClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJlbG9hZGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBMaW5rQ29tcG9uZW50ID0gaXNOYXZMaW5rID8gTmF2TGluayA6IFJSTGluaztcbiAgICBjb25zdCBJT1N1cHBvcnRlZCA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZUludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGxldCBpbztcbiAgICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb24gPSAoZWwsIGNiKSA9PiB7XG4gICAgICAgIGlvID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gZW50cnkudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQsIHN0b3AgbGlzdGVuaW5nL29ic2VydmluZyBhbmQgcnVuIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpby51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIGVsZW1lbnQgdG8gdGhlIG9ic2VydmVyLlxuICAgICAgICBpby5vYnNlcnZlKGVsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgaWYgKElPU3VwcG9ydGVkICYmIHJlZiAmJiBpc0ludGVybmFsKSB7XG4gICAgICAgICAgICAvLyBJZiBJTyBzdXBwb3J0ZWQgYW5kIGVsZW1lbnQgcmVmZXJlbmNlIGZvdW5kLCBzZXR1cCBPYnNlcnZlciBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgICAgaGFuZGxlSW50ZXJzZWN0aW9uKHJlZiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1c2F1cnVzLnByZWZldGNoKHRhcmdldExpbmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFwcmVsb2FkZWQuY3VycmVudCkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VzYXVydXMucHJlbG9hZCh0YXJnZXRMaW5rKTtcbiAgICAgICAgICAgIHByZWxvYWRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gSWYgSU8gaXMgbm90IHN1cHBvcnRlZC4gV2UgcHJlZmV0Y2ggYnkgZGVmYXVsdCAob25seSBvbmNlKS5cbiAgICAgICAgaWYgKCFJT1N1cHBvcnRlZCAmJiBpc0ludGVybmFsKSB7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdXNhdXJ1cy5wcmVmZXRjaCh0YXJnZXRMaW5rKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHVubW91bnRpbmcsIHN0b3AgaW50ZXJzZWN0aW9uIG9ic2VydmVyIGZyb20gd2F0Y2hpbmcuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoSU9TdXBwb3J0ZWQgJiYgaW8pIHtcbiAgICAgICAgICAgICAgICBpby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3RhcmdldExpbmssIElPU3VwcG9ydGVkLCBpc0ludGVybmFsXSk7XG4gICAgY29uc3QgaXNBbmNob3JMaW5rID0gKF9iID0gdGFyZ2V0TGluayA9PT0gbnVsbCB8fCB0YXJnZXRMaW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXRMaW5rLnN0YXJ0c1dpdGgoJyMnKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2U7XG4gICAgY29uc3QgaXNSZWd1bGFySHRtbExpbmsgPSAhdGFyZ2V0TGluayB8fCAhaXNJbnRlcm5hbCB8fCBpc0FuY2hvckxpbms7XG4gICAgaWYgKHRhcmdldExpbmsgJiYgaXNJbnRlcm5hbCAmJiAhaXNBbmNob3JMaW5rICYmICFub0Jyb2tlbkxpbmtDaGVjaykge1xuICAgICAgICBsaW5rc0NvbGxlY3Rvci5jb2xsZWN0TGluayh0YXJnZXRMaW5rKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUmVndWxhckh0bWxMaW5rID8gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogdGFyZ2V0TGluayB9LCAodGFyZ2V0TGlua1VucHJlZml4ZWQgJiZcbiAgICAgICAgIWlzSW50ZXJuYWwgJiYgeyB0YXJnZXQ6ICdfYmxhbmsnLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJyB9KSwgcHJvcHMpKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlciwgaW5uZXJSZWY6IGhhbmRsZVJlZiwgdG86IHRhcmdldExpbmsgfHwgJycgfSwgKGlzTmF2TGluayAmJiB7IGlzQWN0aXZlLCBhY3RpdmVDbGFzc05hbWUgfSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3RvY29sKHVybCkge1xuICAgIHJldHVybiAvXihcXHcqOnxcXC9cXC8pLy50ZXN0KHVybCkgPT09IHRydWU7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ludGVybmFsVXJsKHVybCkge1xuICAgIHJldHVybiB0eXBlb2YgdXJsICE9PSAndW5kZWZpbmVkJyAmJiAhaGFzUHJvdG9jb2wodXJsKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VUaGVtZUNvbmZpZyA9IHZvaWQgMDtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmNvbnN0IHVzZURvY3VzYXVydXNDb250ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0XCIpKTtcbmZ1bmN0aW9uIHVzZVRoZW1lQ29uZmlnKCkge1xuICAgIHJldHVybiB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKS5zaXRlQ29uZmlnLnRoZW1lQ29uZmlnO1xufVxuZXhwb3J0cy51c2VUaGVtZUNvbmZpZyA9IHVzZVRoZW1lQ29uZmlnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRG9jc1BsdWdpbkVuYWJsZWQgPSB2b2lkIDA7XG5jb25zdCB1c2VEb2NzXzEgPSByZXF1aXJlKFwiQHRoZW1lL2hvb2tzL3VzZURvY3NcIik7XG4vLyBUT0RPIG5vdCBpZGVhbCwgc2VlIGFsc28gXCJ1c2VEb2NzXCJcbmV4cG9ydHMuaXNEb2NzUGx1Z2luRW5hYmxlZCA9ICEhdXNlRG9jc18xLnVzZUFsbERvY3NEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQgPSBleHBvcnRzLkRvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyID0gdm9pZCAwO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgdXNlVGhlbWVDb25maWdfMSA9IHJlcXVpcmUoXCIuLi91c2VUaGVtZUNvbmZpZ1wiKTtcbmNvbnN0IGRvY3NVdGlsc18xID0gcmVxdWlyZShcIi4uL2RvY3NVdGlsc1wiKTtcbmNvbnN0IHVzZURvY3NfMSA9IHJlcXVpcmUoXCJAdGhlbWUvaG9va3MvdXNlRG9jc1wiKTtcbmNvbnN0IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0RvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZVwiKSk7XG4vLyBJbml0aWFsIHN0YXRlIGlzIGFsd2F5cyBudWxsIGFzIHdlIGNhbid0IHJlYWQgbG9jYWxzdG9yYWdlIGZyb20gbm9kZSBTU1JcbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpIHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbiAgICBwbHVnaW5JZHMuZm9yRWFjaCgocGx1Z2luSWQpID0+IHtcbiAgICAgICAgaW5pdGlhbFN0YXRlW3BsdWdpbklkXSA9IHtcbiAgICAgICAgICAgIHByZWZlcnJlZFZlcnNpb25OYW1lOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG4vLyBSZWFkIHN0b3JhZ2UgZm9yIGFsbCBkb2NzIHBsdWdpbnNcbi8vIEFzc2lnbiB0byBlYWNoIGRvYyBwbHVnaW4gYSBwcmVmZXJyZWQgdmVyc2lvbiAoaWYgZm91bmQpXG5mdW5jdGlvbiByZWFkU3RvcmFnZVN0YXRlKHsgcGx1Z2luSWRzLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIGFsbERvY3NEYXRhLCB9KSB7XG4gICAgLy8gVGhlIHN0b3JhZ2UgdmFsdWUgd2UgcmVhZCBtaWdodCBiZSBzdGFsZSxcbiAgICAvLyBhbmQgYmVsb25nIHRvIGEgdmVyc2lvbiB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSBzaXRlIGFueW1vcmVcbiAgICAvLyBJbiBzdWNoIGNhc2UsIHdlIHJlbW92ZSB0aGUgc3RvcmFnZSB2YWx1ZSB0byBhdm9pZCBkb3duc3RyZWFtIGVycm9yc1xuICAgIGZ1bmN0aW9uIHJlc3RvcmVQbHVnaW5TdGF0ZShwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSA9IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xLmRlZmF1bHQucmVhZChwbHVnaW5JZCwgdmVyc2lvblBlcnNpc3RlbmNlKTtcbiAgICAgICAgY29uc3QgcGx1Z2luRGF0YSA9IGFsbERvY3NEYXRhW3BsdWdpbklkXTtcbiAgICAgICAgY29uc3QgdmVyc2lvbkV4aXN0cyA9IHBsdWdpbkRhdGEudmVyc2lvbnMuc29tZSgodmVyc2lvbikgPT4gdmVyc2lvbi5uYW1lID09PSBwcmVmZXJyZWRWZXJzaW9uTmFtZVVuc2FmZSk7XG4gICAgICAgIGlmICh2ZXJzaW9uRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogcHJlZmVycmVkVmVyc2lvbk5hbWVVbnNhZmUgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZV8xLmRlZmF1bHQuY2xlYXIocGx1Z2luSWQsIHZlcnNpb25QZXJzaXN0ZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4geyBwcmVmZXJyZWRWZXJzaW9uTmFtZTogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICBpbml0aWFsU3RhdGVbcGx1Z2luSWRdID0gcmVzdG9yZVBsdWdpblN0YXRlKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuZnVuY3Rpb24gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCkge1xuICAgIHJldHVybiB1c2VUaGVtZUNvbmZpZ18xLnVzZVRoZW1lQ29uZmlnKCkuZG9jcy52ZXJzaW9uUGVyc2lzdGVuY2U7XG59XG4vLyBWYWx1ZSB0aGF0ICB3aWxsIGJlIGFjY2Vzc2libGUgdGhyb3VnaCBjb250ZXh0OiBbc3RhdGUsYXBpXVxuZnVuY3Rpb24gdXNlQ29udGV4dFZhbHVlKCkge1xuICAgIGNvbnN0IGFsbERvY3NEYXRhID0gdXNlRG9jc18xLnVzZUFsbERvY3NEYXRhKCk7XG4gICAgY29uc3QgdmVyc2lvblBlcnNpc3RlbmNlID0gdXNlVmVyc2lvblBlcnNpc3RlbmNlKCk7XG4gICAgY29uc3QgcGx1Z2luSWRzID0gcmVhY3RfMS51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKGFsbERvY3NEYXRhKSwgW2FsbERvY3NEYXRhXSk7XG4gICAgLy8gSW5pdGlhbCBzdGF0ZSBpcyBlbXB0eSwgYXMgIHdlIGNhbid0IHJlYWQgYnJvd3NlciBzdG9yYWdlIGluIG5vZGUvU1NSXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSByZWFjdF8xLnVzZVN0YXRlKCgpID0+IGdldEluaXRpYWxTdGF0ZShwbHVnaW5JZHMpKTtcbiAgICAvLyBPbiBtb3VudCwgd2Ugc2V0IHRoZSBzdGF0ZSByZWFkIGZyb20gYnJvd3NlciBzdG9yYWdlXG4gICAgcmVhY3RfMS51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShyZWFkU3RvcmFnZVN0YXRlKHsgYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzIH0pKTtcbiAgICB9LCBbYWxsRG9jc0RhdGEsIHZlcnNpb25QZXJzaXN0ZW5jZSwgcGx1Z2luSWRzXSk7XG4gICAgLy8gVGhlIEFQSSB0aGF0IHdlIGV4cG9zZSB0byBjb25zdW1lciBob29rcyAobWVtbyBmb3IgY29uc3RhbnQgb2JqZWN0KVxuICAgIGNvbnN0IGFwaSA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHNhdmVQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkLCB2ZXJzaW9uTmFtZSkge1xuICAgICAgICAgICAgRG9jc1ByZWZlcnJlZFZlcnNpb25TdG9yYWdlXzEuZGVmYXVsdC5zYXZlKHBsdWdpbklkLCB2ZXJzaW9uUGVyc2lzdGVuY2UsIHZlcnNpb25OYW1lKTtcbiAgICAgICAgICAgIHNldFN0YXRlKChzKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzKSwgeyBbcGx1Z2luSWRdOiB7IHByZWZlcnJlZFZlcnNpb25OYW1lOiB2ZXJzaW9uTmFtZSB9IH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNhdmVQcmVmZXJyZWRWZXJzaW9uLFxuICAgICAgICB9O1xuICAgIH0sIFtzZXRTdGF0ZV0pO1xuICAgIHJldHVybiBbc3RhdGUsIGFwaV07XG59XG5jb25zdCBDb250ZXh0ID0gcmVhY3RfMS5jcmVhdGVDb250ZXh0KG51bGwpO1xuZnVuY3Rpb24gRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgfSkge1xuICAgIGlmIChkb2NzVXRpbHNfMS5pc0RvY3NQbHVnaW5FbmFibGVkKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUsIG51bGwsIGNoaWxkcmVuKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxufVxuZXhwb3J0cy5Eb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHRQcm92aWRlciA9IERvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dFByb3ZpZGVyO1xuZnVuY3Rpb24gRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXJVbnNhZmUoeyBjaGlsZHJlbiwgfSkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHRWYWx1ZSgpO1xuICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxuZnVuY3Rpb24gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0KCkge1xuICAgIGNvbnN0IHZhbHVlID0gcmVhY3RfMS51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBkb2NzIHByZWZlcnJlZCBjb250ZXh0LCBtYXliZSB5b3UgZm9yZ290IHRvIHVzZSB0aGUgRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0UHJvdmlkZXIgP1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQgPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkNvbnRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlQWx0ZXJuYXRlUGFnZVV0aWxzID0gdm9pZCAwO1xuY29uc3QgdXNlRG9jdXNhdXJ1c0NvbnRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHRcIikpO1xuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwiQGRvY3VzYXVydXMvcm91dGVyXCIpO1xuLy8gUGVybWl0cyB0byBvYnRhaW4gdGhlIHVybCBvZiB0aGUgY3VycmVudCBwYWdlIGluIGFub3RoZXIgbG9jYWxlXG4vLyBVc2VmdWwgdG8gZ2VuZXJhdGUgaHJlZmxhbmcgbWV0YSBoZWFkZXJzIGV0Yy4uLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3NlYXJjaC9kb2NzL2FkdmFuY2VkL2NyYXdsaW5nL2xvY2FsaXplZC12ZXJzaW9uc1xuZnVuY3Rpb24gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzKCkge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZzogeyBiYXNlVXJsLCB1cmwgfSwgaTE4bjogeyBkZWZhdWx0TG9jYWxlLCBjdXJyZW50TG9jYWxlIH0sIH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IGJhc2VVcmxVbmxvY2FsaXplZCA9IGN1cnJlbnRMb2NhbGUgPT09IGRlZmF1bHRMb2NhbGVcbiAgICAgICAgPyBiYXNlVXJsXG4gICAgICAgIDogYmFzZVVybC5yZXBsYWNlKGAvJHtjdXJyZW50TG9jYWxlfS9gLCAnLycpO1xuICAgIGNvbnN0IHBhdGhuYW1lU3VmZml4ID0gcGF0aG5hbWUucmVwbGFjZShiYXNlVXJsLCAnJyk7XG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxpemVkQmFzZVVybChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9YFxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsVW5sb2NhbGl6ZWR9JHtsb2NhbGV9L2A7XG4gICAgfVxuICAgIC8vIFRPRE8gc3VwcG9ydCBjb3JyZWN0IGFsdGVybmF0ZSB1cmwgd2hlbiBsb2NhbGl6ZWQgc2l0ZSBpcyBkZXBsb3llZCBvbiBhbm90aGVyIGRvbWFpblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVybCh7IGxvY2FsZSwgZnVsbHlRdWFsaWZpZWQsIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke2Z1bGx5UXVhbGlmaWVkID8gdXJsIDogJyd9JHtnZXRMb2NhbGl6ZWRCYXNlVXJsKGxvY2FsZSl9JHtwYXRobmFtZVN1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVVcmwgfTtcbn1cbmV4cG9ydHMudXNlQWx0ZXJuYXRlUGFnZVV0aWxzID0gdXNlQWx0ZXJuYXRlUGFnZVV0aWxzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRvY1ZlcnNpb25TZWFyY2hUYWcgPSBleHBvcnRzLkRFRkFVTFRfU0VBUkNIX1RBRyA9IHZvaWQgMDtcbmV4cG9ydHMuREVGQVVMVF9TRUFSQ0hfVEFHID0gJ2RlZmF1bHQnO1xuZnVuY3Rpb24gZG9jVmVyc2lvblNlYXJjaFRhZyhwbHVnaW5JZCwgdmVyc2lvbk5hbWUpIHtcbiAgICByZXR1cm4gYGRvY3MtJHtwbHVnaW5JZH0tJHt2ZXJzaW9uTmFtZX1gO1xufVxuZXhwb3J0cy5kb2NWZXJzaW9uU2VhcmNoVGFnID0gZG9jVmVyc2lvblNlYXJjaFRhZztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VEb2NWZXJzaW9uU3VnZ2VzdGlvbnMgPSBleHBvcnRzLnVzZUFjdGl2ZURvY0NvbnRleHQgPSBleHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLnVzZUxhdGVzdFZlcnNpb24gPSBleHBvcnRzLnVzZVZlcnNpb25zID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW5BbmRWZXJzaW9uID0gZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZURvY3NEYXRhID0gZXhwb3J0cy51c2VBbGxEb2NzRGF0YSA9IHZvaWQgMDtcbmNvbnN0IHJvdXRlcl8xID0gcmVxdWlyZShcIkBkb2N1c2F1cnVzL3JvdXRlclwiKTtcbmNvbnN0IHVzZUdsb2JhbERhdGFfMSA9IHJlcXVpcmUoXCJAZG9jdXNhdXJ1cy91c2VHbG9iYWxEYXRhXCIpO1xuY29uc3QgZG9jc0NsaWVudFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2xpZW50L2RvY3NDbGllbnRVdGlsc1wiKTtcbmV4cG9ydHMudXNlQWxsRG9jc0RhdGEgPSAoKSA9PiB1c2VHbG9iYWxEYXRhXzEudXNlQWxsUGx1Z2luSW5zdGFuY2VzRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJyk7XG5leHBvcnRzLnVzZURvY3NEYXRhID0gKHBsdWdpbklkKSA9PiB1c2VHbG9iYWxEYXRhXzEudXNlUGx1Z2luRGF0YSgnZG9jdXNhdXJ1cy1wbHVnaW4tY29udGVudC1kb2NzJywgcGx1Z2luSWQpO1xuZXhwb3J0cy51c2VBY3RpdmVQbHVnaW4gPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlQWxsRG9jc0RhdGEoKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIHJldHVybiBkb2NzQ2xpZW50VXRpbHNfMS5nZXRBY3RpdmVQbHVnaW4oZGF0YSwgcGF0aG5hbWUsIG9wdGlvbnMpO1xufTtcbmV4cG9ydHMudXNlQWN0aXZlUGx1Z2luQW5kVmVyc2lvbiA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhY3RpdmVQbHVnaW4gPSBleHBvcnRzLnVzZUFjdGl2ZVBsdWdpbihvcHRpb25zKTtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJfMS51c2VMb2NhdGlvbigpO1xuICAgIGlmIChhY3RpdmVQbHVnaW4pIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IGRvY3NDbGllbnRVdGlsc18xLmdldEFjdGl2ZVZlcnNpb24oYWN0aXZlUGx1Z2luLnBsdWdpbkRhdGEsIHBhdGhuYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZVBsdWdpbixcbiAgICAgICAgICAgIGFjdGl2ZVZlcnNpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuLy8gdmVyc2lvbnMgYXJlIHJldHVybmVkIG9yZGVyZWQgKG1vc3QgcmVjZW50IGZpcnN0KVxuZXhwb3J0cy51c2VWZXJzaW9ucyA9IChwbHVnaW5JZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBleHBvcnRzLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucztcbn07XG5leHBvcnRzLnVzZUxhdGVzdFZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldExhdGVzdFZlcnNpb24oZGF0YSk7XG59O1xuLy8gTm90ZTogcmV0dXJuIHVuZGVmaW5lZCBvbiBkb2MtdW5yZWxhdGVkIHBhZ2VzLFxuLy8gYmVjYXVzZSB0aGVyZSdzIG5vIHZlcnNpb24gY3VycmVudGx5IGNvbnNpZGVyZWQgYXMgYWN0aXZlXG5leHBvcnRzLnVzZUFjdGl2ZVZlcnNpb24gPSAocGx1Z2luSWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXhwb3J0cy51c2VEb2NzRGF0YShwbHVnaW5JZCk7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXzEudXNlTG9jYXRpb24oKTtcbiAgICByZXR1cm4gZG9jc0NsaWVudFV0aWxzXzEuZ2V0QWN0aXZlVmVyc2lvbihkYXRhLCBwYXRobmFtZSk7XG59O1xuZXhwb3J0cy51c2VBY3RpdmVEb2NDb250ZXh0ID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcl8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldEFjdGl2ZURvY0NvbnRleHQoZGF0YSwgcGF0aG5hbWUpO1xufTtcbi8vIFVzZWZ1bCB0byBzYXkgXCJoZXksIHlvdSBhcmUgbm90IG9uIHRoZSBsYXRlc3QgZG9jcyB2ZXJzaW9uLCBwbGVhc2Ugc3dpdGNoXCJcbmV4cG9ydHMudXNlRG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKHBsdWdpbklkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV4cG9ydHMudXNlRG9jc0RhdGEocGx1Z2luSWQpO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcl8xLnVzZUxvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGRvY3NDbGllbnRVdGlsc18xLmdldERvY1ZlcnNpb25TdWdnZXN0aW9ucyhkYXRhLCBwYXRobmFtZSk7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW1wb3J0IHVzZURvY3VzYXVydXNDb250ZXh0IGZyb20gJy4vdXNlRG9jdXNhdXJ1c0NvbnRleHQnO1xuLy8gVE9ETyBhbm5veWluZyBjb25zdGFudCBkdXBsaWNhdGlvblxuLy8gaWYgd2UgaW1wb3J0IHNvbWV0aGluZyBmcm9tIG91dHNpZGUgdGhlIC9jbGllbnQgZm9sZGVyLFxuLy8gdGhlIHRzYyBkaXJlY3Rvcnkgc3RydWN0dXJlIGlzIGFmZmVjdGVkXG4vLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHbG9iYWxEYXRhKCkge1xuICAgIGNvbnN0IHsgZ2xvYmFsRGF0YSB9ID0gdXNlRG9jdXNhdXJ1c0NvbnRleHQoKTtcbiAgICBpZiAoIWdsb2JhbERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2N1c2F1cnVzIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsRGF0YTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhKHBsdWdpbk5hbWUpIHtcbiAgICBjb25zdCBnbG9iYWxEYXRhID0gdXNlR2xvYmFsRGF0YSgpO1xuICAgIGNvbnN0IHBsdWdpbkdsb2JhbERhdGEgPSBnbG9iYWxEYXRhW3BsdWdpbk5hbWVdO1xuICAgIGlmICghcGx1Z2luR2xvYmFsRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERvY3VzYXVydXMgcGx1Z2luIGdsb2JhbCBkYXRhIG5vdCBmb3VuZCBmb3IgcGx1Z2luTmFtZT0ke3BsdWdpbk5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBwbHVnaW5HbG9iYWxEYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsdWdpbkRhdGEocGx1Z2luTmFtZSwgcGx1Z2luSWQgPSBERUZBVUxUX1BMVUdJTl9JRCkge1xuICAgIGNvbnN0IHBsdWdpbkdsb2JhbERhdGEgPSB1c2VBbGxQbHVnaW5JbnN0YW5jZXNEYXRhKHBsdWdpbk5hbWUpO1xuICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlR2xvYmFsRGF0YSA9IHBsdWdpbkdsb2JhbERhdGFbcGx1Z2luSWRdO1xuICAgIGlmICghcGx1Z2luSW5zdGFuY2VHbG9iYWxEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRG9jdXNhdXJ1cyBwbHVnaW4gZ2xvYmFsIGRhdGEgbm90IGZvdW5kIGZvciBwbHVnaW5OYW1lPSR7cGx1Z2luTmFtZX0gYW5kIHBsdWdpbklkPSR7cGx1Z2luSWR9YCk7XG4gICAgfVxuICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZUdsb2JhbERhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy5nZXRBY3RpdmVWZXJzaW9uID0gZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uID0gZXhwb3J0cy5nZXRBY3RpdmVQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAZG9jdXNhdXJ1cy9yb3V0ZXJcIik7XG5mdW5jdGlvbiBnZXRBY3RpdmVQbHVnaW4oYWxsUGx1Z2luRGF0YXMsIHBhdGhuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhY3RpdmVFbnRyeSA9IE9iamVjdC5lbnRyaWVzKGFsbFBsdWdpbkRhdGFzKS5maW5kKChbX2lkLCBwbHVnaW5EYXRhXSkgPT4ge1xuICAgICAgICByZXR1cm4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgICAgIHBhdGg6IHBsdWdpbkRhdGEucGF0aCxcbiAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGFjdGl2ZVBsdWdpbiA9IGFjdGl2ZUVudHJ5XG4gICAgICAgID8geyBwbHVnaW5JZDogYWN0aXZlRW50cnlbMF0sIHBsdWdpbkRhdGE6IGFjdGl2ZUVudHJ5WzFdIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFhY3RpdmVQbHVnaW4gJiYgb3B0aW9ucy5mYWlsZmFzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGZpbmQgYWN0aXZlIGRvY3MgcGx1Z2luIGZvciBwYXRobmFtZT0ke3BhdGhuYW1lfSwgd2hpbGUgaXQgd2FzIGV4cGVjdGVkIHRvIGJlIGZvdW5kLiBNYXliZSB5b3UgdHJpZWQgdG8gdXNlIGEgZG9jcyBmZWF0dXJlIHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIGRvY3MtcmVsYXRlZCBwYWdlPyBFeGlzdGluZyBkb2NzIHBsdWdpbiBwYXRocyBhcmU6ICR7T2JqZWN0LnZhbHVlcyhhbGxQbHVnaW5EYXRhcylcbiAgICAgICAgICAgIC5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLnBhdGgpXG4gICAgICAgICAgICAuam9pbignLCAnKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVBsdWdpbjtcbn1cbmV4cG9ydHMuZ2V0QWN0aXZlUGx1Z2luID0gZ2V0QWN0aXZlUGx1Z2luO1xuZXhwb3J0cy5nZXRMYXRlc3RWZXJzaW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5maW5kKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLmlzTGFzdCk7XG59O1xuLy8gTm90ZTogcmV0dXJuIHVuZGVmaW5lZCBvbiBkb2MtdW5yZWxhdGVkIHBhZ2VzLFxuLy8gYmVjYXVzZSB0aGVyZSdzIG5vIHZlcnNpb24gY3VycmVudGx5IGNvbnNpZGVyZWQgYXMgYWN0aXZlXG5leHBvcnRzLmdldEFjdGl2ZVZlcnNpb24gPSAoZGF0YSwgcGF0aG5hbWUpID0+IHtcbiAgICBjb25zdCBsYXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICAvLyBMYXN0IHZlcnNpb24gaXMgYSByb3V0ZSBsaWtlIC9kb2NzLyosXG4gICAgLy8gd2UgbmVlZCB0byB0cnkgdG8gbWF0Y2ggaXQgbGFzdCBvciBpdCB3b3VsZCBtYXRjaCAvZG9jcy92ZXJzaW9uLTEuMC8qIGFzIHdlbGxcbiAgICBjb25zdCBvcmRlcmVkVmVyc2lvbnNNZXRhZGF0YSA9IFtcbiAgICAgICAgLi4uZGF0YS52ZXJzaW9ucy5maWx0ZXIoKHZlcnNpb24pID0+IHZlcnNpb24gIT09IGxhc3RWZXJzaW9uKSxcbiAgICAgICAgbGFzdFZlcnNpb24sXG4gICAgXTtcbiAgICByZXR1cm4gb3JkZXJlZFZlcnNpb25zTWV0YWRhdGEuZmluZCgodmVyc2lvbikgPT4ge1xuICAgICAgICByZXR1cm4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgICAgIHBhdGg6IHZlcnNpb24ucGF0aCxcbiAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuZ2V0QWN0aXZlRG9jQ29udGV4dCA9IChkYXRhLCBwYXRobmFtZSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZlcnNpb24gPSBleHBvcnRzLmdldEFjdGl2ZVZlcnNpb24oZGF0YSwgcGF0aG5hbWUpO1xuICAgIGNvbnN0IGFjdGl2ZURvYyA9IGFjdGl2ZVZlcnNpb24gPT09IG51bGwgfHwgYWN0aXZlVmVyc2lvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlVmVyc2lvbi5kb2NzLmZpbmQoKGRvYykgPT4gISFyb3V0ZXJfMS5tYXRjaFBhdGgocGF0aG5hbWUsIHtcbiAgICAgICAgcGF0aDogZG9jLnBhdGgsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgIH0pKTtcbiAgICBmdW5jdGlvbiBnZXRBbHRlcm5hdGVWZXJzaW9uRG9jcyhkb2NJZCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZGF0YS52ZXJzaW9ucy5mb3JFYWNoKCh2ZXJzaW9uKSA9PiB7XG4gICAgICAgICAgICB2ZXJzaW9uLmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRvYy5pZCA9PT0gZG9jSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3ZlcnNpb24ubmFtZV0gPSBkb2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjb25zdCBhbHRlcm5hdGVWZXJzaW9uRG9jcyA9IGFjdGl2ZURvY1xuICAgICAgICA/IGdldEFsdGVybmF0ZVZlcnNpb25Eb2NzKGFjdGl2ZURvYy5pZClcbiAgICAgICAgOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVWZXJzaW9uLFxuICAgICAgICBhY3RpdmVEb2MsXG4gICAgICAgIGFsdGVybmF0ZURvY1ZlcnNpb25zOiBhbHRlcm5hdGVWZXJzaW9uRG9jcyxcbiAgICB9O1xufTtcbmV4cG9ydHMuZ2V0RG9jVmVyc2lvblN1Z2dlc3Rpb25zID0gKGRhdGEsIHBhdGhuYW1lKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IGV4cG9ydHMuZ2V0TGF0ZXN0VmVyc2lvbihkYXRhKTtcbiAgICBjb25zdCBhY3RpdmVEb2NDb250ZXh0ID0gZXhwb3J0cy5nZXRBY3RpdmVEb2NDb250ZXh0KGRhdGEsIHBhdGhuYW1lKTtcbiAgICAvLyBXZSBvbmx5IHN1Z2dlc3QgYW5vdGhlciBkb2MvdmVyc2lvbiBpZiB1c2VyIGlzIG5vdCB1c2luZyB0aGUgbGF0ZXN0IHZlcnNpb25cbiAgICBjb25zdCBpc05vdE9uTGF0ZXN0VmVyc2lvbiA9IGFjdGl2ZURvY0NvbnRleHQuYWN0aXZlVmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbjtcbiAgICBjb25zdCBsYXRlc3REb2NTdWdnZXN0aW9uID0gaXNOb3RPbkxhdGVzdFZlcnNpb25cbiAgICAgICAgPyBhY3RpdmVEb2NDb250ZXh0ID09PSBudWxsIHx8IGFjdGl2ZURvY0NvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZURvY0NvbnRleHQuYWx0ZXJuYXRlRG9jVmVyc2lvbnNbbGF0ZXN0VmVyc2lvbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbiA9IGlzTm90T25MYXRlc3RWZXJzaW9uXG4gICAgICAgID8gbGF0ZXN0VmVyc2lvblxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyBsYXRlc3REb2NTdWdnZXN0aW9uLCBsYXRlc3RWZXJzaW9uU3VnZ2VzdGlvbiB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NhbWVQYXRoID0gdm9pZCAwO1xuLy8gQ29tcGFyZSB0aGUgMiBwYXRocywgaWdub3JpbmcgdHJhaWxpbmcgL1xuZXhwb3J0cy5pc1NhbWVQYXRoID0gKHBhdGgxLCBwYXRoMikgPT4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChwYXRobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gIXBhdGhuYW1lIHx8IChwYXRobmFtZSA9PT0gbnVsbCB8fCBwYXRobmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGF0aG5hbWUuZW5kc1dpdGgoJy8nKSkgPyBwYXRobmFtZSA6IGAke3BhdGhuYW1lfS9gO1xuICAgIH07XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwYXRoMSkgPT09IG5vcm1hbGl6ZShwYXRoMik7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZVRpdGxlRm9ybWF0dGVyID0gdm9pZCAwO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuY29uc3QgdXNlRG9jdXNhdXJ1c0NvbnRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGRvY3VzYXVydXMvdXNlRG9jdXNhdXJ1c0NvbnRleHRcIikpO1xuZXhwb3J0cy51c2VUaXRsZUZvcm1hdHRlciA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHsgc2l0ZUNvbmZpZyA9IHt9IH0gPSB1c2VEb2N1c2F1cnVzQ29udGV4dF8xLmRlZmF1bHQoKTtcbiAgICBjb25zdCB7IHRpdGxlOiBzaXRlVGl0bGUsIHRpdGxlRGVsaW1pdGVyID0gJ3wnIH0gPSBzaXRlQ29uZmlnO1xuICAgIHJldHVybiB0aXRsZSAmJiB0aXRsZS50cmltKCkubGVuZ3RoXG4gICAgICAgID8gYCR7dGl0bGUudHJpbSgpfSAke3RpdGxlRGVsaW1pdGVyfSAke3NpdGVUaXRsZX1gXG4gICAgICAgIDogc2l0ZVRpdGxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VQbHVyYWxGb3JtID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IHVzZURvY3VzYXVydXNDb250ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBkb2N1c2F1cnVzL3VzZURvY3VzYXVydXNDb250ZXh0XCIpKTtcbi8vIFdlIHdhbnQgdG8gZW5zdXJlciBhIHN0YWJsZSBwbHVyYWwgZm9ybSBvcmRlciBpbiBhbGwgY2FzZXNcbi8vIEl0IGlzIG1vcmUgY29udmVuaWVudCBhbmQgbmF0dXJhbCB0byBoYW5kbGUgXCJzbWFsbCB2YWx1ZXNcIiBmaXJzdFxuLy8gU2VlIGh0dHBzOi8vdHdpdHRlci5jb20vc2ViYXN0aWVubG9yYmVyL3N0YXR1cy8xMzY2ODIwNjYzMjYxMDc3NTEwXG5jb25zdCBPcmRlcmVkUGx1cmFsRm9ybXMgPSBbXG4gICAgJ3plcm8nLFxuICAgICdvbmUnLFxuICAgICd0d28nLFxuICAgICdmZXcnLFxuICAgICdtYW55JyxcbiAgICAnb3RoZXInLFxuXTtcbmZ1bmN0aW9uIHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxGb3Jtcykge1xuICAgIHJldHVybiBPcmRlcmVkUGx1cmFsRm9ybXMuZmlsdGVyKChwZikgPT4gcGx1cmFsRm9ybXMuaW5jbHVkZXMocGYpKTtcbn1cbi8vIEhhcmRjb2RlZCBlbmdsaXNoL2ZhbGxiYWNrIGltcGxlbWVudGF0aW9uXG5jb25zdCBFbmdsaXNoUGx1cmFsRm9ybXMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHBsdXJhbEZvcm1zOiBzb3J0UGx1cmFsRm9ybXMoWydvbmUnLCAnb3RoZXInXSksXG4gICAgc2VsZWN0OiAoY291bnQpID0+IChjb3VudCA9PT0gMSA/ICdvbmUnIDogJ290aGVyJyksXG59O1xuZnVuY3Rpb24gY3JlYXRlTG9jYWxlUGx1cmFsRm9ybXMobG9jYWxlKSB7XG4gICAgY29uc3QgcGx1cmFsUnVsZXMgPSBuZXcgSW50bC5QbHVyYWxSdWxlcyhsb2NhbGUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcGx1cmFsRm9ybXM6IHNvcnRQbHVyYWxGb3JtcyhwbHVyYWxSdWxlcy5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzKSxcbiAgICAgICAgc2VsZWN0OiAoY291bnQpID0+IHBsdXJhbFJ1bGVzLnNlbGVjdChjb3VudCksXG4gICAgfTtcbn1cbi8vIFBvb3IgbWFuJ3MgUGx1cmFsU2VsZWN0b3IgaW1wbGVtZW50YXRpb24sIHVzaW5nIGFuIGVuZ2xpc2ggZmFsbGJhY2suXG4vLyBXZSB3YW50IGEgbGlnaHR3ZWlnaHQsIGZ1dHVyZS1wcm9vZiBhbmQgZ29vZC1lbm91Z2ggc29sdXRpb24uXG4vLyBXZSBkb24ndCB3YW50IGEgcGVyZmVjdCBhbmQgaGVhdnkgc29sdXRpb24uXG4vL1xuLy8gRG9jdXNhdXJ1cyBjbGFzc2ljIHRoZW1lIGhhcyBvbmx5IDIgZGVlcGx5IG5lc3RlZCBsYWJlbHMgcmVxdWlyaW5nIGNvbXBsZXggcGx1cmFsIHJ1bGVzXG4vLyBXZSBkb24ndCB3YW50IHRvIHVzZSBJbnRsICsgUGx1cmFsUnVsZXMgcG9seWZpbGxzICsgZnVsbCBJQ1Ugc3ludGF4IChyZWFjdC1pbnRsKSBqdXN0IGZvciB0aGF0LlxuLy9cbi8vIE5vdGVzOlxuLy8gLSAyMDIxOiA5MislIEJyb3dzZXJzIHN1cHBvcnQgSW50bC5QbHVyYWxSdWxlcywgYW5kIHN1cHBvcnQgd2lsbCBpbmNyZWFzZSBpbiB0aGUgZnV0dXJlXG4vLyAtIE5vZGVKUyA+PSAxMyBoYXMgZnVsbCBJQ1Ugc3VwcG9ydCBieSBkZWZhdWx0XG4vLyAtIEluIGNhc2Ugb2YgXCJtaXNtYXRjaFwiIGJldHdlZW4gU1NSIGFuZCBCcm93c2VyIElDVSBzdXBwb3J0LCBSZWFjdCBrZWVwcyB3b3JraW5nIVxuZnVuY3Rpb24gdXNlTG9jYWxlUGx1cmFsRm9ybXMoKSB7XG4gICAgY29uc3QgeyBpMThuOiB7IGN1cnJlbnRMb2NhbGUgfSwgfSA9IHVzZURvY3VzYXVydXNDb250ZXh0XzEuZGVmYXVsdCgpO1xuICAgIHJldHVybiByZWFjdF8xLnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNoZWNraW5nIEludGwuUGx1cmFsUnVsZXMgaW4gY2FzZSBicm93c2VyIGRvZXNuJ3QgaGF2ZSBpdCAoZS5nIFNhZmFyaSAxMi0pXG4gICAgICAgIGlmIChJbnRsLlBsdXJhbFJ1bGVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbGVQbHVyYWxGb3JtcyhjdXJyZW50TG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHVzZSBJbnRsLlBsdXJhbFJ1bGVzIGZvciBsb2NhbGU9JHtjdXJyZW50TG9jYWxlfS5cbkRvY3VzYXVydXMgd2lsbCBmYWxsYmFjayB0byBhIGRlZmF1bHQvZmFsbGJhY2sgKEVuZ2xpc2gpIEludGwuUGx1cmFsUnVsZXMgaW1wbGVtZW50YXRpb24uXG5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW50bC5QbHVyYWxSdWxlcyBub3QgYXZhaWxhYmxlIVxuRG9jdXNhdXJ1cyB3aWxsIGZhbGxiYWNrIHRvIGEgZGVmYXVsdC9mYWxsYmFjayAoRW5nbGlzaCkgSW50bC5QbHVyYWxSdWxlcyBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgYCk7XG4gICAgICAgICAgICByZXR1cm4gRW5nbGlzaFBsdXJhbEZvcm1zO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRMb2NhbGVdKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdFBsdXJhbE1lc3NhZ2UocGx1cmFsTWVzc2FnZXMsIGNvdW50LCBsb2NhbGVQbHVyYWxGb3Jtcykge1xuICAgIGNvbnN0IHNlcGFyYXRvciA9ICd8JztcbiAgICBjb25zdCBwYXJ0cyA9IHBsdXJhbE1lc3NhZ2VzLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGb3IgbG9jYWxlPSR7bG9jYWxlUGx1cmFsRm9ybXMubG9jYWxlfSwgYSBtYXhpbXVtIG9mICR7bG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMubGVuZ3RofSBwbHVyYWwgZm9ybXMgYXJlIGV4cGVjdGVkICgke2xvY2FsZVBsdXJhbEZvcm1zLnBsdXJhbEZvcm1zfSksIGJ1dCB0aGUgbWVzc2FnZSBjb250YWlucyAke3BhcnRzLmxlbmd0aH0gcGx1cmFsIGZvcm1zOiAke3BsdXJhbE1lc3NhZ2VzfSBgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVyYWxGb3JtID0gbG9jYWxlUGx1cmFsRm9ybXMuc2VsZWN0KGNvdW50KTtcbiAgICAgICAgY29uc3QgcGx1cmFsRm9ybUluZGV4ID0gbG9jYWxlUGx1cmFsRm9ybXMucGx1cmFsRm9ybXMuaW5kZXhPZihwbHVyYWxGb3JtKTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBub3QgZW5vdWdoIHBsdXJhbCBmb3JtIG1lc3NhZ2VzLCB3ZSB0YWtlIHRoZSBsYXN0IG9uZSAob3RoZXIpIGluc3RlYWQgb2YgcmV0dXJuaW5nIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gcGFydHNbTWF0aC5taW4ocGx1cmFsRm9ybUluZGV4LCBwYXJ0cy5sZW5ndGggLSAxKV07XG4gICAgfVxufVxuZnVuY3Rpb24gdXNlUGx1cmFsRm9ybSgpIHtcbiAgICBjb25zdCBsb2NhbGVQbHVyYWxGb3JtID0gdXNlTG9jYWxlUGx1cmFsRm9ybXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RNZXNzYWdlOiAoY291bnQsIHBsdXJhbE1lc3NhZ2VzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0UGx1cmFsTWVzc2FnZShwbHVyYWxNZXNzYWdlcywgY291bnQsIGxvY2FsZVBsdXJhbEZvcm0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnVzZVBsdXJhbEZvcm0gPSB1c2VQbHVyYWxGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQnlQbHVnaW5JZCA9IGV4cG9ydHMudXNlRG9jc1ByZWZlcnJlZFZlcnNpb24gPSB2b2lkIDA7XG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xID0gcmVxdWlyZShcIi4vRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlclwiKTtcbmNvbnN0IHVzZURvY3NfMSA9IHJlcXVpcmUoXCJAdGhlbWUvaG9va3MvdXNlRG9jc1wiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIkBkb2N1c2F1cnVzL2NvbnN0YW50c1wiKTtcbi8vIFRPRE8gaW1wcm92ZSB0eXBpbmdcbi8vIE5vdGUsIHRoZSBwcmVmZXJyZWRWZXJzaW9uIGF0dHJpYnV0ZSB3aWxsIGFsd2F5cyBiZSBudWxsIGJlZm9yZSBtb3VudFxuZnVuY3Rpb24gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQgPSBjb25zdGFudHNfMS5ERUZBVUxUX1BMVUdJTl9JRCkge1xuICAgIGNvbnN0IGRvY3NEYXRhID0gdXNlRG9jc18xLnVzZURvY3NEYXRhKHBsdWdpbklkKTtcbiAgICBjb25zdCBbc3RhdGUsIGFwaV0gPSBEb2NzUHJlZmVycmVkVmVyc2lvblByb3ZpZGVyXzEudXNlRG9jc1ByZWZlcnJlZFZlcnNpb25Db250ZXh0KCk7XG4gICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgIGNvbnN0IHByZWZlcnJlZFZlcnNpb24gPSBwcmVmZXJyZWRWZXJzaW9uTmFtZVxuICAgICAgICA/IGRvY3NEYXRhLnZlcnNpb25zLmZpbmQoKHZlcnNpb24pID0+IHZlcnNpb24ubmFtZSA9PT0gcHJlZmVycmVkVmVyc2lvbk5hbWUpXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBzYXZlUHJlZmVycmVkVmVyc2lvbk5hbWUgPSByZWFjdF8xLnVzZUNhbGxiYWNrKCh2ZXJzaW9uTmFtZSkgPT4ge1xuICAgICAgICBhcGkuc2F2ZVByZWZlcnJlZFZlcnNpb24ocGx1Z2luSWQsIHZlcnNpb25OYW1lKTtcbiAgICB9LCBbYXBpXSk7XG4gICAgcmV0dXJuIHsgcHJlZmVycmVkVmVyc2lvbiwgc2F2ZVByZWZlcnJlZFZlcnNpb25OYW1lIH07XG59XG5leHBvcnRzLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uID0gdXNlRG9jc1ByZWZlcnJlZFZlcnNpb247XG5mdW5jdGlvbiB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQoKSB7XG4gICAgY29uc3QgYWxsRG9jc0RhdGEgPSB1c2VEb2NzXzEudXNlQWxsRG9jc0RhdGEoKTtcbiAgICBjb25zdCBbc3RhdGVdID0gRG9jc1ByZWZlcnJlZFZlcnNpb25Qcm92aWRlcl8xLnVzZURvY3NQcmVmZXJyZWRWZXJzaW9uQ29udGV4dCgpO1xuICAgIGZ1bmN0aW9uIGdldFBsdWdpbklkUHJlZmVycmVkVmVyc2lvbihwbHVnaW5JZCkge1xuICAgICAgICBjb25zdCBkb2NzRGF0YSA9IGFsbERvY3NEYXRhW3BsdWdpbklkXTtcbiAgICAgICAgY29uc3QgeyBwcmVmZXJyZWRWZXJzaW9uTmFtZSB9ID0gc3RhdGVbcGx1Z2luSWRdO1xuICAgICAgICByZXR1cm4gcHJlZmVycmVkVmVyc2lvbk5hbWVcbiAgICAgICAgICAgID8gZG9jc0RhdGEudmVyc2lvbnMuZmluZCgodmVyc2lvbikgPT4gdmVyc2lvbi5uYW1lID09PSBwcmVmZXJyZWRWZXJzaW9uTmFtZSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGx1Z2luSWRzID0gT2JqZWN0LmtleXMoYWxsRG9jc0RhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHBsdWdpbklkcy5mb3JFYWNoKChwbHVnaW5JZCkgPT4ge1xuICAgICAgICByZXN1bHRbcGx1Z2luSWRdID0gZ2V0UGx1Z2luSWRQcmVmZXJyZWRWZXJzaW9uKHBsdWdpbklkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy51c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQgPSB1c2VEb2NzUHJlZmVycmVkVmVyc2lvbkJ5UGx1Z2luSWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0b3JhZ2VLZXkgPSAocGx1Z2luSWQpID0+IGBkb2NzLXByZWZlcnJlZC12ZXJzaW9uLSR7cGx1Z2luSWR9YDtcbmNvbnN0IERvY3NQcmVmZXJyZWRWZXJzaW9uU3RvcmFnZSA9IHtcbiAgICBzYXZlOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlLCB2ZXJzaW9uTmFtZSkgPT4ge1xuICAgICAgICBpZiAocGVyc2lzdGVuY2UgPT09ICdub25lJykge1xuICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkocGx1Z2luSWQpLCB2ZXJzaW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlYWQ6IChwbHVnaW5JZCwgcGVyc2lzdGVuY2UpID0+IHtcbiAgICAgICAgaWYgKHBlcnNpc3RlbmNlID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KHBsdWdpbklkKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsZWFyOiAocGx1Z2luSWQsIHBlcnNpc3RlbmNlKSA9PiB7XG4gICAgICAgIGlmIChwZXJzaXN0ZW5jZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleShwbHVnaW5JZCkpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBEb2NzUHJlZmVycmVkVmVyc2lvblN0b3JhZ2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuZXhwb3J0IHtcbiAgLy8gY29uc3RhbnRzIHdlcmUgb25seSBhdmFpbGFibGUgb24gbm9kZVxuICAvLyB0aGlzIG1ha2VzIHNvbWUgdXNlZnVsIGNvbnN0YW50cyBhdmFpbGFibGUgdG8gZnJvbnRlbmQvdGhlbWVzIHRvb1xuICAvLyBpbXBvcnQge0RFRkFVTFRfUExVR0lOX0lEfSAnQGRvY3VzYXVydXMvY29uc3RhbnRzJ1xuICBERUZBVUxUX1BMVUdJTl9JRCxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbiAqL1xuLy8gTm90IGR1cGxpY2F0aW5nIHRoZSBjb25zdGFudHMgc2VlbXMgdG8gcHJvZHVjZVxuLy8gd2VpcmQgVFMgY29tcGlsYXRpb24gc2lkZS1lZmZlY3RzXG5leHBvcnQgY29uc3QgREVGQVVMVF9QTFVHSU5fSUQgPSAnZGVmYXVsdCc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnQGRvY3VzYXVydXMvSGVhZCc7XG5pbXBvcnQgdXNlQmFzZVVybCBmcm9tICdAZG9jdXNhdXJ1cy91c2VCYXNlVXJsJztcbmltcG9ydCB7dXNlVGl0bGVGb3JtYXR0ZXJ9IGZyb20gJ0Bkb2N1c2F1cnVzL3RoZW1lLWNvbW1vbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8oe3RpdGxlLCBkZXNjcmlwdGlvbiwga2V5d29yZHMsIGltYWdlfSkge1xuICBjb25zdCBtZXRhVGl0bGUgPSB1c2VUaXRsZUZvcm1hdHRlcih0aXRsZSk7XG4gIGNvbnN0IG1ldGFJbWFnZVVybCA9IHVzZUJhc2VVcmwoaW1hZ2UsIHtcbiAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7dGl0bGUgJiYgPHRpdGxlPnttZXRhVGl0bGV9PC90aXRsZT59XG4gICAgICB7dGl0bGUgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGFUaXRsZX0gLz59XG5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz59XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cblxuICAgICAge2tleXdvcmRzICYmIChcbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxuICAgICAgICAgIGNvbnRlbnQ9e0FycmF5LmlzQXJyYXkoa2V5d29yZHMpID8ga2V5d29yZHMuam9pbignLCcpIDoga2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7aW1hZ2UgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGFJbWFnZVVybH0gLz59XG4gICAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2VVcmx9IC8+fVxuICAgICAge2ltYWdlICYmIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+fVxuICAgIDwvSGVhZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=