exports.ids = [4];
exports.modules = {

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toc", function() { return toc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(310);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
/* harmony import */ var _theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(305);
/* harmony import */ var _theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__);
const frontMatter={title:'Navs and tabs'};const metadata={"unversionedId":"Nav","id":"Nav","isDocsHomePage":false,"title":"Navs and tabs","description":"Create flexible navigation elements like tabs, navbars, and menus.","source":"@site/docs/Nav.mdx","slug":"/Nav","permalink":"/ui/Nav","version":"current","sidebar":"docs","previous":{"title":"Modal","permalink":"/ui/Modal"},"next":{"title":"Overlay","permalink":"/ui/Overlay"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Styling',id:'styling',children:[]},{value:'Dropdowns',id:'dropdowns',children:[]},{value:'Tabs',id:'tabs',children:[{value:'Acessibility',id:'acessibility',children:[]}]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,`Create flexible navigation elements like tabs, navbars, and menus.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default.a,{imports:()=>Object(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__["allValues"])({"@restart/ui":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(288)))}),mdxType:"ImportContext"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-jsx","metastring":"live","live":true},`import { Nav, NavItem } from "@restart/ui";

<Nav className="flex space-x-4" activeKey="/home">
  <NavItem href="/home">Active</NavItem>

  <NavItem eventKey="link-1">Link</NavItem>

  <NavItem eventKey="link-2">Link</NavItem>

  <NavItem eventKey="disabled" disabled>
    Disabled
  </NavItem>
</Nav>;
`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"styling"},`Styling`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`NavItem`),`s implement a few bits of state that likely need visual styling to use.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`disabled`),` whether the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`NavItem`),` is actionable or not.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`active`),` whether the nav item is "selected", this may be because the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`activeKey`),`
on `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`Nav`),` matches the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`NavItem`),`'s key, or because the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},`active`),` prop was passed to it.`)),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default.a,{imports:()=>Object(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__["allValues"])({"clsx":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(274))),"@restart/ui":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(288)))}),mdxType:"ImportContext"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-jsx","metastring":"live","live":true},`import clsx from "clsx";
import { Nav, useNavItem } from "@restart/ui";

function NavLink({ href, disabled, children }) {
  const [navItemProps, meta] = useNavItem({
    key: href,
    disabled,
  });

  return (
    <a
      href={href}
      {...navItemProps}
      className={clsx(
        "py-3 px-4 rounded",
        disabled && "opacity-50 cursor-not-allowed",
        meta.isActive
          ? "bg-primary !text-white"
          : "hover:text-primary hover:bg-gray-200"
      )}
    >
      {children}
    </a>
  );
}

function Example() {
  const [activeKey, setActiveKey] = useState("/home");

  return (
    <Nav
      className="flex"
      activeKey={activeKey}
      onSelect={setActiveKey}
    >
      <NavLink href="/home">Home</NavLink>

      <NavLink href="/about">About</NavLink>

      <NavLink href="orderd" disabled>
        Orders
      </NavLink>
    </Nav>
  );
}
`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"dropdowns"},`Dropdowns`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,`Dropdown components can be used in `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Nav`),`s as well:`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default.a,{imports:()=>Object(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__["allValues"])({"clsx":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(274))),"@restart/ui":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(288))),"../src/Dropdown":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(386)))}),mdxType:"ImportContext"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-jsx","metastring":"live","live":true},`import clsx from "clsx";
import {
  Nav,
  useNavItem,
  useDropdownToggle,
} from "@restart/ui";

import Dropdown from "../src/Dropdown";

const NavLink = React.forwardRef(
  ({ href, disabled, children, onClick }, ref) => {
    const [navItemProps, meta] = useNavItem({
      key: href,
      onClick,
      disabled,
    });

    return (
      <a
        ref={ref}
        href={href}
        {...navItemProps}
        className={clsx(
          "py-3 px-4 rounded",
          disabled && "opacity-50 cursor-not-allowed",
          meta.isActive
            ? "bg-primary !text-white"
            : "hover:text-primary hover:bg-gray-200"
        )}
      >
        {children}
      </a>
    );
  }
);

function Example() {
  const [activeKey, setActiveKey] = useState("/home");

  return (
    <Nav
      className="flex"
      activeKey={activeKey}
      onSelect={setActiveKey}
    >
      <NavLink href="/home">Home</NavLink>

      <NavLink href="/about">About</NavLink>

      <NavLink href="orderd" disabled>
        Orders
      </NavLink>
      <Dropdown>
        <Dropdown.Toggle as={NavLink}>More</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="4.1">
            Action
          </Dropdown.Item>
          <Dropdown.Item eventKey="4.2">
            Another action
          </Dropdown.Item>
          <Dropdown.Item eventKey="4.3">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}
`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"tabs"},`Tabs`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,`Create dynamic tabbed interfaces from a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Nav`),`, as described in the WAI-ARIA Authoring Practices.
Note that tabbed UIs have specific behavior that sets them apart from a navigation menu, even
when styled similarly.`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4___default.a,{imports:()=>Object(_theme_ImportContext__WEBPACK_IMPORTED_MODULE_4__["allValues"])({"clsx":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(274))),"@restart/ui":Promise.resolve().then(()=>Object(_Users_jquense_src_ui_www_node_modules_babel_runtime_helpers_esm_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(__webpack_require__(288)))}),mdxType:"ImportContext"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",{parentName:"pre","className":"language-jsx","metastring":"live","live":true},`import clsx from "clsx";

import {
  Button,
  Tabs,
  TabPanel,
  Nav,
  useNavItem,
} from "@restart/ui";

function Tab({ eventKey, ...props }) {
  const [navItemProps, meta] = useNavItem({
    key: eventKey,
  });

  return (
    <Button
      {...props}
      {...navItemProps}
      className={clsx(
        "-mb-px py-2 px-4",
        "hover:bg-gray-200 cursor-pointer rounded-t border",
        meta.isActive
          ? "border-gray-200"
          : "border-transparent"
      )}
      style={
        meta.isActive
          ? { borderBottomColor: "white" }
          : undefined
      }
    />
  );
}

<Tabs defaultActiveKey="1">
  <Nav className="flex border-b">
    <Tab eventKey="1">One</Tab>
    <Tab eventKey="2">Two</Tab>
    <Tab eventKey="3">Three</Tab>
  </Nav>
  <div className="p-6">
    <TabPanel eventKey="1">
      <p>one!</p>
    </TabPanel>
    <TabPanel eventKey="2">
      <p>two!</p>
    </TabPanel>
    <TabPanel eventKey="3">
      <p>three!</p>
    </TabPanel>
  </div>
</Tabs>;
`))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"acessibility"},`Acessibility`),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,`In the context of a `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Tabs`),` component the `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`Nav`),` and `,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},`NavItem`),`s will contextually
apply the correct ARIA roles, as well as implement the required keyboard navigation.`));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return placements; });
/* unused harmony export beforeRead */
/* unused harmony export read */
/* unused harmony export afterRead */
/* unused harmony export beforeMain */
/* unused harmony export main */
/* unused harmony export afterMain */
/* unused harmony export beforeWrite */
/* unused harmony export write */
/* unused harmony export afterWrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
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

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(318)();
}


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["a"] = (SelectableContext);

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useButtonProps */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

function useButtonProps({
  tagName = 'button',
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0
}) {
  if (tagName === 'button') return {
    disabled
  };

  const handleClick = event => {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return {
    role: 'button',
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
}
const propTypes = {
  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['button', 'reset', 'submit', null]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
};
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    type,
    as: Component
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["type", "as"]);

  const tagName = // eslint-disable-next-line no-nested-ternary
  typeof Component === 'string' ? Component : props.href ? 'a' : 'button';
  const buttonProps = useButtonProps(Object.assign({
    tagName
  }, props));
  Component = Component || tagName;

  if (tagName === 'button' && !type) {
    type = 'button';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({}, props, buttonProps, {
    ref: ref,
    type: type
  }));
});
Button.displayName = 'Button';
Button.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ATTRIBUTE_PREFIX */
/* unused harmony export PROPERTY_PREFIX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataProp; });
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(302);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(320);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);






const escapeKeyCode = 27;

const noop = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);
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


function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  const onClose = onRootClose || noop;
  const handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(e => {
    const currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_5___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(currentTarget, e.target);
  }, [ref]);
  const handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(e => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = window.event;
    const doc = Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    const removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    const removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(el, 'mousemove', noop));
    }

    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["a"] = (useRootClose);

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ popper_createPopper; });

// UNUSED EXPORTS: placements

// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


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


// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/contains.js

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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]));
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
  var isVertical = [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
  var maxProp = axis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
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


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js






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
  var sideX = enums["f" /* left */];
  var sideY = enums["m" /* top */];
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

    if (placement === enums["m" /* top */]) {
      sideY = enums["c" /* bottom */]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === enums["f" /* left */]) {
      sideX = enums["k" /* right */]; // $FlowFixMe[prop-missing]

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


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
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


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















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
  return clippingParent === enums["o" /* viewport */] ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeOffsets.js




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
    case enums["m" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case enums["c" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case enums["k" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case enums["f" /* left */]:
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
      case enums["l" /* start */]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case enums["e" /* end */]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums["d" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? enums["o" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums["i" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, enums["b" /* basePlacements */]));
  var altContext = elementContext === enums["i" /* popper */] ? enums["j" /* reference */] : enums["i" /* popper */];
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
  var elementClientRect = elementContext === enums["i" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums["i" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [enums["k" /* right */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




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
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums["h" /* placements */] : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? enums["n" /* variationPlacements */] : enums["n" /* variationPlacements */].filter(function (placement) {
    return getVariation(placement) === variation;
  }) : enums["b" /* basePlacements */];
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === enums["a" /* auto */]) {
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
    return acc.concat(getBasePlacement(placement) === enums["a" /* auto */] ? computeAutoPlacement(state, {
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

    var isStartVariation = getVariation(placement) === enums["l" /* start */];
    var isVertical = [enums["m" /* top */], enums["c" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? enums["k" /* right */] : enums["f" /* left */] : isStartVariation ? enums["c" /* bottom */] : enums["m" /* top */];

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


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/hide.js



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
  return [enums["m" /* top */], enums["k" /* right */], enums["c" /* bottom */], enums["f" /* left */]].some(function (side) {
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


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [enums["f" /* left */], enums["m" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [enums["f" /* left */], enums["k" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums["h" /* placements */].reduce(function (acc, placement) {
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


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
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


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












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
    var mainSide = mainAxis === 'y' ? enums["m" /* top */] : enums["f" /* left */];
    var altSide = mainAxis === 'y' ? enums["c" /* bottom */] : enums["k" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === enums["l" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === enums["l" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
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
      var _mainSide = mainAxis === 'x' ? enums["m" /* top */] : enums["f" /* left */];

      var _altSide = mainAxis === 'x' ? enums["c" /* bottom */] : enums["k" /* right */];

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


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/orderModifiers.js
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

  return enums["g" /* modifierPhases */].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/debounce.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergeByName.js
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
// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/createPopper.js














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
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ../src/popper.ts









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const popper_createPopper = popperGenerator({
  defaultModifiers: [modifiers_hide, modifiers_popperOffsets, modifiers_computeStyles, eventListeners, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow]
});


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

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
  module.exports = __webpack_require__(312);
} else {}


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["a"] = (DropdownContext);

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownMenu; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(287);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(300);
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(278);
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(297);
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(269);
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











const noop = () => {};
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


function useDropdownMenu(options = {}) {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const [arrowElement, attachArrowRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  const hasShownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = e => {
    context == null ? void 0 : context.toggle(false, e);
  };

  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(toggleElement, menuElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_popper__WEBPACK_IMPORTED_MODULE_7__[/* placements */ "h"]),

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  usePopper: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
const defaultProps = {
  usePopper: true
};
/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */

function DropdownMenu(_ref) {
  let {
    children
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, ["children"]);

  const [props, meta] = useDropdownMenu(options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children(props, meta));
}

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownToggle; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(298);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);






const noop = () => {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  const id = Object(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__[/* useSSRSafeId */ "a"])();
  const {
    show = false,
    toggle = noop,
    setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]) || {};
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    toggle(!show, e);
  }, [show, toggle]);
  return [{
    id,
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show,
    toggle
  }];
}
const propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */

function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, children(props, meta));
}

DropdownToggle.displayName = 'DropdownToggle';
DropdownToggle.propTypes = propTypes;
/** @component */

/* harmony default export */ __webpack_exports__["a"] = (DropdownToggle);

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDropdownItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(272);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(286);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(276);
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(277);
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









const propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** @default Button */
  as: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType
};
/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */

function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const navContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  const {
    activeKey
  } = navContext || {};
  const eventKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* makeEventKey */ "b"])(key, href);
  active = active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__[/* makeEventKey */ "b"])(activeKey) === eventKey : active;
  const handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(event => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': active,
    [Object(_DataKey__WEBPACK_IMPORTED_MODULE_6__[/* dataAttr */ "a"])('dropdown-item')]: ''
  }, {
    active
  }];
}
const DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"]((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["eventKey", "disabled", "onClick", "active", "as"]);

  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, _extends({}, props, {
      ref: ref
    }, dropdownItemProps))
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (DropdownItem);

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
NavContext.displayName = 'NavContext';
/* harmony default export */ __webpack_exports__["a"] = (NavContext);

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ Button["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ Dropdown["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownMenu", function() { return /* reexport */ DropdownMenu["b" /* useDropdownMenu */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownToggle", function() { return /* reexport */ DropdownToggle["b" /* useDropdownToggle */]; });
__webpack_require__.d(__webpack_exports__, "useDropdownItem", function() { return /* reexport */ DropdownItem["b" /* useDropdownItem */]; });
__webpack_require__.d(__webpack_exports__, "Nav", function() { return /* reexport */ src_Nav; });
__webpack_require__.d(__webpack_exports__, "NavItem", function() { return /* reexport */ src_NavItem; });
__webpack_require__.d(__webpack_exports__, "useNavItem", function() { return /* reexport */ useNavItem; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ src_Modal; });
__webpack_require__.d(__webpack_exports__, "Overlay", function() { return /* reexport */ src_Overlay; });
__webpack_require__.d(__webpack_exports__, "Portal", function() { return /* reexport */ src_Portal; });
__webpack_require__.d(__webpack_exports__, "useRootClose", function() { return /* reexport */ useRootClose["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ src_Tabs; });
__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return /* reexport */ src_TabPanel; });

// EXTERNAL MODULE: ../src/Dropdown.tsx + 1 modules
var Dropdown = __webpack_require__(301);

// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(283);

// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(284);

// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(285);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(273);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/activeElement.js

/**
 * Return the actively focused element safely.
 *
 * @param doc the document to checl
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = Object(ownerDocument["a" /* default */])();
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
var contains = __webpack_require__(291);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM = __webpack_require__(281);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/listen.js + 1 modules
var listen = __webpack_require__(302);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(270);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(280);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(290);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  Object(react["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(289);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/addClass.js

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(315);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollbarSize.js

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM["a" /* default */]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/isWindow.js
var isWindow = __webpack_require__(308);

// CONCATENATED MODULE: ../src/isOverflowing.ts



function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  const doc = Object(isWindow["a" /* default */])(node) ? Object(ownerDocument["a" /* default */])() : Object(ownerDocument["a" /* default */])(node);
  const win = Object(isWindow["a" /* default */])(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  const win = Object(isWindow["a" /* default */])(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
// CONCATENATED MODULE: ../src/manageAriaHidden.ts
const BLACKLIST = ['template', 'script', 'style'];

const isHidable = ({
  nodeType,
  tagName
}) => nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;

const siblings = (container, exclude, cb) => {
  [].forEach.call(container.children, node => {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(hide, node) {
  if (!node) return;

  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, {
  dialog,
  backdrop
}) {
  siblings(container, [dialog, backdrop], node => ariaHidden(true, node));
}
function showSiblings(container, {
  dialog,
  backdrop
}) {
  siblings(container, [dialog, backdrop], node => ariaHidden(false, node));
}
// CONCATENATED MODULE: ../src/ModalManager.ts







function findIndexOf(arr, cb) {
  let idx = -1;
  arr.some((d, i) => {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}
/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


class ModalManager_ModalManager {
  constructor({
    hideSiblingNodes = true,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = scrollbarSize();
  }

  isContainerOverflowing(modal) {
    const data = this.data[this.containerIndexFromModal(modal)];
    return data ? data.overflowing : false;
  }

  containerIndexFromModal(modal) {
    return findIndexOf(this.data, d => d.modals.indexOf(modal) !== -1);
  }

  setContainerStyle(containerState, container) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt(Object(css["a" /* default */])(container, paddingProp) || '0', 10) + this.scrollbarSize}px`;
    }

    Object(css["a" /* default */])(container, style);
  }

  removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  }

  add(modal, container, className) {
    let modalIdx = this.modals.indexOf(modal);
    const containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      hideSiblings(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    const data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: isOverflowing(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    const containerIdx = this.containerIndexFromModal(modal);
    const data = this.data[containerIdx];
    const container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        showSiblings(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      const {
        backdrop,
        dialog
      } = data.modals[data.modals.length - 1];
      ariaHidden(false, dialog);
      ariaHidden(false, backdrop);
    }
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

/* harmony default export */ var src_ModalManager = (ModalManager_ModalManager);
// CONCATENATED MODULE: ../src/useWaitForDOMRef.ts


const resolveContainerRef = ref => {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return Object(ownerDocument["a" /* default */])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const [resolvedRef, setRef] = Object(react["useState"])(() => resolveContainerRef(ref));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  Object(react["useEffect"])(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(react["useEffect"])(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
// CONCATENATED MODULE: ../src/Modal.tsx
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
/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */
















let manager;

function getManager() {
  if (!manager) manager = new src_ModalManager();
  return manager;
}

function useModalManager(provided) {
  const modalManager = provided || getManager();
  const modal = Object(react["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: (container, className) => modalManager.add(modal.current, container, className),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: Object(react["useCallback"])(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: Object(react["useCallback"])(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/Object(react["forwardRef"])((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/react["createElement"]("div", props),
    manager: providedManager,
    container: containerRef,
    containerClassName,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = Object(useMounted["a" /* default */])();
  const prevShow = Object(usePrevious["a" /* default */])(show);
  const [exited, setExited] = Object(react["useState"])(!show);
  const lastFocusRef = Object(react["useRef"])(null);
  Object(react["useImperativeHandle"])(ref, () => modal, [modal]);

  if (canUseDOM["a" /* default */] && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = Object(useEventCallback["a" /* default */])(() => {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = Object(listen["a" /* default */])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = Object(listen["a" /* default */])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !Object(contains["a" /* default */])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = Object(useEventCallback["a" /* default */])(() => {
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

  Object(react["useEffect"])(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  Object(react["useEffect"])(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = Object(useEventCallback["a" /* default */])(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !Object(contains["a" /* default */])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = Object(useEventCallback["a" /* default */])(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = Object(useEventCallback["a" /* default */])(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = Object(react["useRef"])();
  const removeKeydownListenerRef = Object(react["useRef"])();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/react["createElement"]("div", dialogProps, /*#__PURE__*/react["cloneElement"](children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/react["createElement"](Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/react["createElement"](BackdropTransition, {
        appear: true,
        in: !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react_dom_default.a.createPortal( /*#__PURE__*/react["createElement"](react["Fragment"], null, backdropElement, dialog), container));
});
const propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: prop_types_default.a.bool,

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: prop_types_default.a.any,

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: prop_types_default.a.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: prop_types_default.a.func,

  /**
   * Include a backdrop component.
   */
  backdrop: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: prop_types_default.a.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: prop_types_default.a.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: prop_types_default.a.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: prop_types_default.a.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: prop_types_default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: prop_types_default.a.elementType,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: prop_types_default.a.elementType,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: prop_types_default.a.shape({
    preventScroll: prop_types_default.a.bool
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: prop_types_default.a.instanceOf(src_ModalManager)
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
/* harmony default export */ var src_Modal = (Object.assign(Modal, {
  Manager: src_ModalManager
}));
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCallbackRef.js
var useCallbackRef = __webpack_require__(287);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useMergedRefs.js


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
  return Object(react["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ var esm_useMergedRefs = (useMergedRefs);
// EXTERNAL MODULE: ../src/usePopper.ts + 2 modules
var usePopper = __webpack_require__(300);

// EXTERNAL MODULE: ../src/useRootClose.ts
var useRootClose = __webpack_require__(278);

// EXTERNAL MODULE: ../src/mergeOptionsWithPopperConfig.ts
var mergeOptionsWithPopperConfig = __webpack_require__(297);

// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../src/Overlay.tsx
function Overlay_objectWithoutPropertiesLoose(source, excluded) {
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












/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */

const Overlay = /*#__PURE__*/react["forwardRef"]((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding = 5,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = Object(useCallbackRef["a" /* default */])();
  const [arrowElement, attachArrowRef] = Object(useCallbackRef["a" /* default */])();
  const mergedRef = esm_useMergedRefs(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = Object(react["useState"])(!props.show);

  const _usePopper = Object(usePopper["a" /* default */])(target, rootElement, Object(mergeOptionsWithPopperConfig["a" /* default */])({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  })),
        {
    styles,
    attributes
  } = _usePopper,
        popper = Overlay_objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  Object(useRootClose["a" /* default */])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper, {
    show: !!props.show,
    props: Object.assign({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: Object.assign({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/react["createElement"](Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/react_dom_default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types_default.a.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types_default.a.oneOf(enums["h" /* placements */]),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: prop_types_default.a.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types_default.a.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types_default.a.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: prop_types_default.a.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: prop_types_default.a.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types_default.a.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: prop_types_default.a.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: prop_types_default.a.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide(props, ...args) {
    if (props.rootClose) {
      return prop_types_default.a.func.isRequired(props, ...args);
    }

    return prop_types_default.a.func(props, ...args);
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: prop_types_default.a.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types_default.a.func
};
/* harmony default export */ var src_Overlay = (Overlay);
// CONCATENATED MODULE: ../src/Portal.tsx




const Portal_propTypes = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types_default.a.any,
  onRendered: prop_types_default.a.func
};
/**
 * @public
 */

const Portal = ({
  container,
  children,
  onRendered
}) => {
  const resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react_dom_default.a.createPortal(children, resolvedContainer)) : null;
};

Portal.displayName = 'Portal';
Portal.propTypes = Portal_propTypes;
/* harmony default export */ var src_Portal = (Portal);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(293);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(296);

// EXTERNAL MODULE: ../src/NavContext.tsx
var NavContext = __webpack_require__(286);

// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(272);

// CONCATENATED MODULE: ../src/TabContext.tsx

const TabContext = /*#__PURE__*/react["createContext"](null);
/* harmony default export */ var src_TabContext = (TabContext);
// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(277);

// EXTERNAL MODULE: ../src/Button.tsx
var Button = __webpack_require__(276);

// CONCATENATED MODULE: ../src/NavItem.tsx
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

function NavItem_objectWithoutPropertiesLoose(source, excluded) {
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









const NavItem_propTypes = {
  id: prop_types_default.a.string,
  active: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  href: prop_types_default.a.string,
  tabIndex: prop_types_default.a.number,
  eventKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  as: prop_types_default.a.any,
  onClick: prop_types_default.a.func,
  onSelect: prop_types_default.a.func,
  'aria-controls': prop_types_default.a.string
};
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const navContext = Object(react["useContext"])(NavContext["a" /* default */]);
  let isActive = active;
  const props = {};

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[Object(DataKey["a" /* dataAttr */])('event-key')] = key;
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

  props.onClick = Object(useEventCallback["a" /* default */])(e => {
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
    isActive
  }];
}
const NavItem = /*#__PURE__*/react["forwardRef"]((_ref, ref) => {
  let {
    as: Component = Button["a" /* default */],
    eventKey,
    href
  } = _ref,
      options = NavItem_objectWithoutPropertiesLoose(_ref, ["as", "eventKey", "href"]);

  const [props, meta] = useNavItem(Object.assign({
    key: Object(SelectableContext["b" /* makeEventKey */])(eventKey, href)
  }, options)); // @ts-ignore

  props[Object(DataKey["a" /* dataAttr */])('active')] = meta.isActive;
  return /*#__PURE__*/react["createElement"](Component, _extends({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
NavItem.propTypes = NavItem_propTypes;
/* harmony default export */ var src_NavItem = (NavItem);
// CONCATENATED MODULE: ../src/Nav.tsx
function Nav_extends() {
  Nav_extends = Object.assign || function (target) {
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

  return Nav_extends.apply(this, arguments);
}

function Nav_objectWithoutPropertiesLoose(source, excluded) {
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











 // eslint-disable-next-line @typescript-eslint/no-empty-function

const noop = () => {};

const Nav_propTypes = {
  onSelect: prop_types_default.a.func,
  as: prop_types_default.a.elementType,
  role: prop_types_default.a.string,

  /** @private */
  onKeyDown: prop_types_default.a.func,

  /** @private */
  activeKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
};
const EVENT_KEY_ATTR = Object(DataKey["a" /* dataAttr */])('event-key');
const Nav = /*#__PURE__*/react["forwardRef"]((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = Nav_objectWithoutPropertiesLoose(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]); // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect


  const forceUpdate = Object(useForceUpdate["a" /* default */])();
  const needsRefocusRef = Object(react["useRef"])(false);
  const parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const tabContext = Object(react["useContext"])(src_TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = Object(react["useRef"])(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = Object(querySelectorAll["a" /* default */])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

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
    handleSelect(nextActiveChild.dataset[Object(DataKey["b" /* dataProp */])('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  Object(react["useEffect"])(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = esm_useMergedRefs(ref, listNode);
  return /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/react["createElement"](NavContext["a" /* default */].Provider, {
    value: {
      role,
      // used by NavLink to determine it's role
      activeKey: Object(SelectableContext["b" /* makeEventKey */])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/react["createElement"](Component, Nav_extends({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
Nav.displayName = 'Nav';
Nav.propTypes = Nav_propTypes;
/* harmony default export */ var src_Nav = (Object.assign(Nav, {
  Item: src_NavItem
}));
// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 8 modules
var esm = __webpack_require__(299);

// EXTERNAL MODULE: ../node_modules/@react-aria/ssr/dist/module.js
var dist_module = __webpack_require__(298);

// CONCATENATED MODULE: ../src/NoopTransition.tsx


function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = Object(react["useRef"])(inProp);
  Object(react["useEffect"])(() => {
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

/* harmony default export */ var src_NoopTransition = (NoopTransition);
// CONCATENATED MODULE: ../src/TabPanel.tsx
function TabPanel_extends() {
  TabPanel_extends = Object.assign || function (target) {
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

  return TabPanel_extends.apply(this, arguments);
}

function TabPanel_objectWithoutPropertiesLoose(source, excluded) {
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







const TabPanel_propTypes = {
  as: prop_types_default.a.elementType,

  /**
   * A key that associates the `TabPanel` with it's controlling `NavLink`.
   */
  eventKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /**
   * Toggles the active state of the TabPanel, this is generally controlled by a
   * TabContainer.
   */
  active: prop_types_default.a.bool,

  /**
   * Use animation when showing or hiding `<TabPanel>`s. Defaults to `<Fade>`
   * animation, else use `false` to disable or a react-transition-group
   * `<Transition/>` component.
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.elementType]),

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: prop_types_default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: prop_types_default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: prop_types_default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: prop_types_default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: prop_types_default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

  /** @ignore * */
  id: prop_types_default.a.string,

  /** @ignore * */
  'aria-labelledby': prop_types_default.a.string
};

function useTabContext(props) {
  const context = Object(react["useContext"])(src_TabContext);
  if (!context) return props;

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = TabPanel_objectWithoutPropertiesLoose(context, ["activeKey", "getControlledId", "getControllerId"]);

  const shouldTransition = props.transition !== false && rest.transition !== false;
  const key = Object(SelectableContext["b" /* makeEventKey */])(props.eventKey);
  return Object.assign({}, props, {
    active: props.active == null && key != null ? Object(SelectableContext["b" /* makeEventKey */])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

const TabPanel = /*#__PURE__*/react["forwardRef"]((props, ref) => {
  const _useTabContext = useTabContext(props),
        {
    active,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = src_NoopTransition,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div'
  } = _useTabContext,
        rest = TabPanel_objectWithoutPropertiesLoose(_useTabContext, ["active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  if (!active && !Transition && unmountOnExit) return null;
  let pane = /*#__PURE__*/react["createElement"](Component, TabPanel_extends({}, rest, {
    ref: ref,
    role: "tabpanel",
    hidden: !active,
    "aria-hidden": !active
  }));

  if (Transition) {
    pane = /*#__PURE__*/react["createElement"](Transition, {
      in: active,
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


  return /*#__PURE__*/react["createElement"](src_TabContext.Provider, {
    value: null
  }, /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: null
  }, pane));
});
TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = TabPanel_propTypes;
/* harmony default export */ var src_TabPanel = (TabPanel);
// CONCATENATED MODULE: ../src/Tabs.tsx








/* eslint-disable react/no-unused-prop-types */

const Tabs_propTypes = {
  /**
   * Sets a default animation strategy for all children `<TabPane>`s.
   * Use a react-transition-group `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.oneOf([false]), prop_types_default.a.elementType]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

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
  generateChildId: prop_types_default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
};

const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = Object(esm["a" /* useUncontrolledProp */])(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = Object(dist_module["a" /* useSSRSafeId */])(userId);
  const generateChildId = Object(react["useMemo"])(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = Object(react["useMemo"])(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/react["createElement"](src_TabContext.Provider, {
    value: tabContext
  }, /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: onSelect || null
  }, children));
};

Tabs.propTypes = Tabs_propTypes;
Tabs.Panel = src_TabPanel;
/* harmony default export */ var src_Tabs = (Tabs);
// CONCATENATED MODULE: ../src/index.ts















/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contains; });
/* eslint-disable no-bitwise, no-cond-assign */
// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

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




/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qsa; });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export optionsSupported */
/* unused harmony export onceSupported */
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
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

  if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
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

/* harmony default export */ __webpack_exports__["a"] = (addEventListener);

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toModifierMap */
/* unused harmony export toModifierArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeOptionsWithPopperConfig; });
function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
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
          offset
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SSRProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSSRSafeId; });
/* unused harmony export useIsSSR */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);

/**
 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
 * This ensures that auto generated ids are consistent between the client and server.
 */
function SSRProvider(props) {
  let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    // If this is the first SSRProvider, set to zero, otherwise increment.
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? 0 : ++cur.prefix,
    current: 0
  }), [cur]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value: value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
}
//# sourceMappingURL=module.js.map


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useUncontrolledProp; });

// UNUSED EXPORTS: useUncontrolled, uncontrollable

// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js
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
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/invariant/invariant.js
var invariant = __webpack_require__(295);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/utils.js


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
function utils_isProp(props, prop) {
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

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = Object(react["useRef"])(propValue !== undefined);

  var _useState = Object(react["useState"])(defaultValue),
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

  return [isProp ? propValue : stateValue, Object(react["useCallback"])(function (value) {
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
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
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

function polyfill(Component) {
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



// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? undefined : invariant_default()(false) : void 0;

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
        values[key] = _this.props[defaultKey(key)];
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

        if (!utils_isProp(props, key) && utils_isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
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
      return react_default.a.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react_default.a.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react_default.a.forwardRef) {
    WrappedComponent = react_default.a.forwardRef(function (props, ref) {
      return react_default.a.createElement(UncontrolledComponent, _extends({}, props, {
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
// CONCATENATED MODULE: ../node_modules/uncontrollable/lib/esm/index.js



/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/dequal/dist/index.mjs
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
var useMounted = __webpack_require__(290);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useSafeState.js



function useSafeState(state) {
  var isMounted = Object(useMounted["a" /* default */])();
  return [state[0], Object(react["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ var esm_useSafeState = (useSafeState);
// EXTERNAL MODULE: ../src/popper.ts + 49 modules
var popper = __webpack_require__(279);

// CONCATENATED MODULE: ../src/usePopper.ts
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





const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite'
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
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

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = _objectWithoutPropertiesLoose(_ref, ["enabled", "placement", "strategy", "modifiers"]);

  const prevModifiers = Object(react["useRef"])(modifiers);
  const popperInstanceRef = Object(react["useRef"])();
  const update = Object(react["useCallback"])(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = Object(react["useCallback"])(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = esm_useSafeState(Object(react["useState"])({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = Object(react["useMemo"])(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = Object(react["useMemo"])(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  Object(react["useEffect"])(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  Object(react["useEffect"])(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(popper["a" /* createPopper */])(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ var src_usePopper = __webpack_exports__["a"] = (usePopper);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/matches.js
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(293);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(294);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(270);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/uncontrollable/lib/esm/index.js + 8 modules
var esm = __webpack_require__(299);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(289);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__(296);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useGlobalListener.js
var useGlobalListener = __webpack_require__(307);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// EXTERNAL MODULE: ../src/DropdownContext.ts
var DropdownContext = __webpack_require__(282);

// EXTERNAL MODULE: ../src/DropdownMenu.tsx
var DropdownMenu = __webpack_require__(283);

// EXTERNAL MODULE: ../src/DropdownToggle.tsx
var DropdownToggle = __webpack_require__(284);

// EXTERNAL MODULE: ../src/DropdownItem.tsx
var DropdownItem = __webpack_require__(285);

// EXTERNAL MODULE: ../src/SelectableContext.tsx
var SelectableContext = __webpack_require__(272);

// EXTERNAL MODULE: ../src/DataKey.tsx
var DataKey = __webpack_require__(277);

// EXTERNAL MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(269);

// CONCATENATED MODULE: ../src/Dropdown.tsx


















const propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: prop_types_default.a.node,

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   *
   * @default 'bottom-start'
   */
  placement: prop_types_default.a.oneOf(enums["h" /* placements */]),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: prop_types_default.a.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: prop_types_default.a.string,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: prop_types_default.a.bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: prop_types_default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: prop_types_default.a.func
};

function useRefWithUpdate() {
  const forceUpdate = Object(useForceUpdate["a" /* default */])();
  const ref = Object(react["useRef"])(null);
  const attachRef = Object(react["useCallback"])(element => {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${Object(DataKey["a" /* dataAttr */])('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children
}) {
  const [show, onToggle] = Object(esm["a" /* useUncontrolledProp */])(rawShow, defaultShow, rawOnToggle); // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set

  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = Object(usePrevious["a" /* default */])(show);
  const lastSourceEvent = Object(react["useRef"])(null);
  const focusInDropdown = Object(react["useRef"])(false);
  const onSelectCtx = Object(react["useContext"])(SelectableContext["a" /* default */]);
  const toggle = Object(react["useCallback"])((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = Object(useEventCallback["a" /* default */])((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);

    if (!event.isDefaultPrevented()) {
      toggle(false, event, 'select');
    }

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = Object(react["useMemo"])(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  const focusToggle = Object(useEventCallback["a" /* default */])(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = Object(useEventCallback["a" /* default */])(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && matches(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    const first = Object(querySelectorAll["a" /* default */])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  Object(react["useEffect"])(() => {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  Object(react["useEffect"])(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current) return null;
    const items = Object(querySelectorAll["a" /* default */])(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  Object(useGlobalListener["a" /* default */])('keydown', event => {
    var _menuRef$current, _toggleRef$current;

    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    const isInput = /input|textarea/i.test(target.tagName);

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
    const meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        Object(addEventListener["a" /* default */])(document, 'keyup', e => {
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
  return /*#__PURE__*/react["createElement"](SelectableContext["a" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/react["createElement"](DropdownContext["a" /* default */].Provider, {
    value: context
  }, children));
}

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = propTypes;
Dropdown.Menu = DropdownMenu["a" /* default */];
Dropdown.Toggle = DropdownToggle["a" /* default */];
Dropdown.Item = DropdownItem["a" /* default */];
/* harmony default export */ var src_Dropdown = __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__(294);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ var esm_removeEventListener = (removeEventListener);
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/listen.js



function listen(node, eventName, handler, options) {
  Object(addEventListener["a" /* default */])(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}

/* harmony default export */ var esm_listen = __webpack_exports__["a"] = (listen);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["a"] = (useCommittedRef);

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.Context = exports.allValues = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);



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

  var handler = Object(_useEventCallback__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGlobalListener; });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



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

  var documentTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return document;
  }, []);
  return Object(_useEventListener__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isWindow; });
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (Object(_isDocument__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node)) return node.defaultView || false;
  return false;
}

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDocument; });
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _interopRequireWildcard; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
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

/***/ 311:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

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
var aa=__webpack_require__(0),m=__webpack_require__(66),r=__webpack_require__(313);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(314);
} else {}


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(273);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/ownerWindow.js

function ownerWindow(node) {
  var doc = Object(ownerDocument["a" /* default */])(node);
  return doc && doc.defaultView || window;
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/getComputedStyle.js

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/css.js




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

/* harmony default export */ var esm_css = __webpack_exports__["a"] = (style);

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(319);

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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_restart_ui__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
  ref: ref
}, props, {
  className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(props.className, 'transition text-md', 'h-10 cursor-pointer bg-white border border-primary text-primary rounded px-8 mt-4 appearance-none text-center whitespace-no-wrap', 'focus:outline-none focus:ring-4 ring-brand-200', 'hover:bg-primary hover:text-white', 'active:bg-brand-600 active:text-white', props.disabled && 'cursor-not-allowed opacity-60')
})));
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(283);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(285);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(276);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(284);
/* harmony import */ var _restart_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(301);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(331);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DropdownMenu = (_ref) => {
  let {
    role
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["role"]);

  const [menuProps, {
    show
  }] = Object(_restart_ui__WEBPACK_IMPORTED_MODULE_2__[/* useDropdownMenu */ "b"])({
    flip: true,
    offset: [0, 8]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, props, menuProps, {
    role: role,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(show ? 'flex ' : 'invisible opacity-0', 'w-48 py-2 flex-col shadow-lg border-gray-200 border bg-white z-10 rounded absolute', 'transition-all')
  }));
};

const DropdownItem = (_ref2) => {
  let {
    eventKey
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, ["eventKey"]);

  const [itemProps, {
    active
  }] = Object(_restart_ui__WEBPACK_IMPORTED_MODULE_3__[/* useDropdownItem */ "b"])(Object.assign({
    key: eventKey
  }, props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_restart_ui__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _extends({}, props, itemProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('text-left hover:bg-brand-100 px-6 py-2 focus:ring-2 focus:outline-none', active && 'bg-primary')
  }));
};

const DropdownToggle = (_ref3) => {
  let {
    as: Tag = _Button__WEBPACK_IMPORTED_MODULE_7__["default"]
  } = _ref3,
      props = _objectWithoutPropertiesLoose(_ref3, ["as"]);

  const [itemProps] = Object(_restart_ui__WEBPACK_IMPORTED_MODULE_5__[/* useDropdownToggle */ "b"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, _extends({}, props, itemProps));
};

const Dropdown = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_restart_ui__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], props);

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL05hdi5tZHgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50Q2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9TZWxlY3RhYmxlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9EYXRhS2V5LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL3VzZVJvb3RDbG9zZS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BvcHBlci50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jYW5Vc2VET00uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93bkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Ecm9wZG93bk1lbnUudHN4Iiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd25Ub2dnbGUudHN4Iiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05hdkNvbnRleHQudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FjdGl2ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlVXBkYXRlZFJlZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VXaWxsVW5tb3VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxiYXJTaXplLmpzIiwid2VicGFjazovLy8uLi9zcmMvaXNPdmVyZmxvd2luZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hbmFnZUFyaWFIaWRkZW4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Nb2RhbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91c2VXYWl0Rm9yRE9NUmVmLnRzIiwid2VicGFjazovLy8uLi9zcmMvTW9kYWwudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlZFJlZnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1BvcnRhbC50c3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9UYWJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05hdkl0ZW0udHN4Iiwid2VicGFjazovLy8uLi9zcmMvTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL05vb3BUcmFuc2l0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL1RhYnMudHN4Iiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTW91bnRlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9xdWVyeVNlbGVjdG9yQWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUZvcmNlVXBkYXRlLmpzIiwid2VicGFjazovLy8uLi9zcmMvbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3Nzci9kaXN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvZXNtL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbGliL2VzbS9ob29rLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5jb250cm9sbGFibGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi9lc20vdW5jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVxdWFsL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVNhZmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VzZVBvcHBlci50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9tYXRjaGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvRHJvcGRvd24udHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vbGlzdGVuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNvbW1pdHRlZFJlZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0A0Yy9kb2N1c2F1cnVzLXByZXNldC9saWIvdGhlbWUvSW1wb3J0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUdsb2JhbExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2lzV2luZG93LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2lzRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9vd25lcldpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9pc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9Ecm9wZG93bi50c3giXSwibmFtZXMiOlsiZnJvbnRNYXR0ZXIiLCJ0aXRsZSIsIm1ldGFkYXRhIiwidG9jIiwidmFsdWUiLCJpZCIsImNoaWxkcmVuIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiYWxsVmFsdWVzIiwiaXNNRFhDb21wb25lbnQiLCJTZWxlY3RhYmxlQ29udGV4dCIsIlJlYWN0IiwibWFrZUV2ZW50S2V5IiwiaHJlZiIsImV2ZW50S2V5IiwiU3RyaW5nIiwidGFnTmFtZSIsInRhYkluZGV4IiwiZGlzYWJsZWQiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiaXNUcml2aWFsSHJlZiIsIm9uQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwicm9sZSIsInRhcmdldCIsInJlbCIsIm9uS2V5RG93biIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInR5cGUiLCJhcyIsImVsZW1lbnRUeXBlIiwiQnV0dG9uIiwiQ29tcG9uZW50IiwiYnV0dG9uUHJvcHMiLCJ1c2VCdXR0b25Qcm9wcyIsIkFUVFJJQlVURV9QUkVGSVgiLCJQUk9QRVJUWV9QUkVGSVgiLCJwcm9wZXJ0eSIsImVzY2FwZUtleUNvZGUiLCJub29wIiwiZ2V0UmVmVGFyZ2V0IiwicmVmIiwiY2xpY2tUcmlnZ2VyIiwicHJldmVudE1vdXNlUm9vdENsb3NlUmVmIiwidXNlUmVmIiwib25DbG9zZSIsIm9uUm9vdENsb3NlIiwiaGFuZGxlTW91c2VDYXB0dXJlIiwidXNlQ2FsbGJhY2siLCJlIiwiY3VycmVudFRhcmdldCIsIndhcm5pbmciLCJpc01vZGlmaWVkRXZlbnQiLCJpc0xlZnRDbGlja0V2ZW50IiwiY29udGFpbnMiLCJoYW5kbGVNb3VzZSIsInVzZUV2ZW50Q2FsbGJhY2siLCJoYW5kbGVLZXlVcCIsInVzZUVmZmVjdCIsImN1cnJlbnRFdmVudCIsIndpbmRvdyIsImRvYyIsIm93bmVyRG9jdW1lbnQiLCJyZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lciIsImxpc3RlbiIsInJlbW92ZU1vdXNlTGlzdGVuZXIiLCJyZW1vdmVLZXl1cExpc3RlbmVyIiwibW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycyIsImVsIiwicmVtb3ZlIiwiY3JlYXRlUG9wcGVyIiwicG9wcGVyR2VuZXJhdG9yIiwiZGVmYXVsdE1vZGlmaWVycyIsIkRyb3Bkb3duQ29udGV4dCIsIm9wdGlvbnMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrUmVmIiwiaGFzU2hvd25SZWYiLCJmaXhlZCIsInBsYWNlbWVudCIsInBvcHBlckNvbmZpZyIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwidXNlUG9wcGVyIiwic2hvdWxkVXNlUG9wcGVyIiwic2hvdyIsImhhbmRsZUNsb3NlIiwidG9nZ2xlRWxlbWVudCIsInBvcHBlciIsIm1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWciLCJwbGFjZW1lbnRPdmVycmlkZSIsImVuYWJsZWQiLCJlbmFibGVFdmVudHMiLCJtZW51UHJvcHMiLCJzZXRNZW51Iiwic3R5bGUiLCJoYXNTaG93biIsInRvZ2dsZSIsImFycm93UHJvcHMiLCJhdHRhY2hBcnJvd1JlZiIsImFycm93IiwidXNlUm9vdENsb3NlIiwiZmxpcCIsInJvb3RDbG9zZUV2ZW50Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidXNlRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51IiwidXNlU1NSU2FmZUlkIiwic2V0VG9nZ2xlIiwiaXNSZXF1aXJlZCIsInVzZURyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25Ub2dnbGUiLCJhY3RpdmUiLCJvblNlbGVjdEN0eCIsIm5hdkNvbnRleHQiLCJhY3RpdmVLZXkiLCJrZXkiLCJkYXRhQXR0ciIsIkRyb3Bkb3duSXRlbSIsInVzZURyb3Bkb3duSXRlbSIsIk5hdkNvbnRleHQiLCJub2RlIiwiaXNXaW5kb3ciLCJ3aW4iLCJpc0JvZHkiLCJib2R5SXNPdmVyZmxvd2luZyIsImNvbnRhaW5lciIsIkJMQUNLTElTVCIsImlzSGlkYWJsZSIsIm5vZGVUeXBlIiwic2libGluZ3MiLCJleGNsdWRlIiwiY2IiLCJiYWNrZHJvcCIsImFyaWFIaWRkZW4iLCJpZHgiLCJhcnIiLCJjb25zdHJ1Y3RvciIsImhpZGVTaWJsaW5nTm9kZXMiLCJoYW5kbGVDb250YWluZXJPdmVyZmxvdyIsImlzUlRMIiwiZ2V0U2Nyb2xsYmFyU2l6ZSIsImlzQ29udGFpbmVyT3ZlcmZsb3dpbmciLCJkYXRhIiwiY29udGFpbmVySW5kZXhGcm9tTW9kYWwiLCJmaW5kSW5kZXhPZiIsImQiLCJzZXRDb250YWluZXJTdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1Byb3AiLCJjb250YWluZXJTdGF0ZSIsInBhcnNlSW50IiwiY3NzIiwic2Nyb2xsYmFyU2l6ZSIsInJlbW92ZUNvbnRhaW5lclN0eWxlIiwiT2JqZWN0IiwiYWRkIiwibW9kYWxJZHgiLCJjb250YWluZXJJZHgiLCJoaWRlU2libGluZ3MiLCJtb2RhbHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwib3ZlcmZsb3dpbmciLCJpc092ZXJmbG93aW5nIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNob3dTaWJsaW5ncyIsImRpYWxvZyIsImlzVG9wTW9kYWwiLCJyZXNvbHZlQ29udGFpbmVyUmVmIiwidXNlU3RhdGUiLCJlYXJseVJlZiIsInNldFJlZiIsIm9uUmVzb2x2ZWQiLCJuZXh0UmVmIiwibWFuYWdlciIsIm1vZGFsTWFuYWdlciIsInByb3ZpZGVkIiwiZ2V0TWFuYWdlciIsIm1vZGFsIiwic2V0RGlhbG9nUmVmIiwic2V0QmFja2Ryb3BSZWYiLCJNb2RhbCIsImZvcndhcmRSZWYiLCJrZXlib2FyZCIsImF1dG9Gb2N1cyIsImVuZm9yY2VGb2N1cyIsInJlc3RvcmVGb2N1cyIsInJlbmRlckJhY2tkcm9wIiwib25IaWRlIiwib25FbnRlcmVkIiwicmVzdCIsInVzZVdhaXRGb3JET01SZWYiLCJ1c2VNb2RhbE1hbmFnZXIiLCJpc01vdW50ZWQiLCJ1c2VNb3VudGVkIiwicHJldlNob3ciLCJ1c2VQcmV2aW91cyIsImxhc3RGb2N1c1JlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjYW5Vc2VET00iLCJhY3RpdmVFbGVtZW50Iiwic2V0RXhpdGVkIiwiaGFuZGxlU2hvdyIsInJlbW92ZUtleWRvd25MaXN0ZW5lclJlZiIsInJlbW92ZUZvY3VzTGlzdGVuZXJSZWYiLCJzZXRUaW1lb3V0Iiwib25TaG93IiwiY3VycmVudEFjdGl2ZUVsZW1lbnQiLCJoYW5kbGVIaWRlIiwidXNlV2lsbFVubW91bnQiLCJoYW5kbGVFbmZvcmNlRm9jdXMiLCJoYW5kbGVCYWNrZHJvcENsaWNrIiwib25CYWNrZHJvcENsaWNrIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwib25Fc2NhcGVLZXlEb3duIiwiaGFuZGxlSGlkZGVuIiwib25FeGl0ZWQiLCJUcmFuc2l0aW9uIiwiZGlhbG9nUHJvcHMiLCJ1bmRlZmluZWQiLCJyZW5kZXJEaWFsb2ciLCJiYWNrZHJvcEVsZW1lbnQiLCJCYWNrZHJvcFRyYW5zaXRpb24iLCJSZWFjdERPTSIsImNvbnRhaW5lckNsYXNzTmFtZSIsInRyYW5zaXRpb24iLCJiYWNrZHJvcFRyYW5zaXRpb24iLCJyZXN0b3JlRm9jdXNPcHRpb25zIiwicHJldmVudFNjcm9sbCIsImJvb2wiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uRXhpdCIsIm9uRXhpdGluZyIsIk1hbmFnZXIiLCJNb2RhbE1hbmFnZXIiLCJPdmVybGF5IiwiY29udGFpbmVyUGFkZGluZyIsIm1lcmdlZFJlZiIsInVzZU1lcmdlZFJlZnMiLCJhdHRyaWJ1dGVzIiwibW91bnRPdmVybGF5IiwiY2hpbGQiLCJzdHlsZXMiLCJyb290Q2xvc2UiLCJyb290Q2xvc2VEaXNhYmxlZCIsImZ1bmMiLCJvblJlbmRlcmVkIiwiUG9ydGFsIiwicmVzb2x2ZWRDb250YWluZXIiLCJUYWJDb250ZXh0Iiwib25TZWxlY3QiLCJwYXJlbnRPblNlbGVjdCIsImlzQWN0aXZlIiwiY29udGV4dENvbnRyb2xsZXJJZCIsImNvbnRleHRDb250cm9sbGVkSWQiLCJOYXZJdGVtIiwidXNlTmF2SXRlbSIsIm1ldGEiLCJFVkVOVF9LRVlfQVRUUiIsIk5hdiIsImZvcmNlVXBkYXRlIiwidXNlRm9yY2VVcGRhdGUiLCJuZWVkc1JlZm9jdXNSZWYiLCJ0YWJDb250ZXh0IiwiZ2V0Q29udHJvbGxlZElkIiwiZ2V0Q29udHJvbGxlcklkIiwibGlzdE5vZGUiLCJnZXROZXh0QWN0aXZlVGFiIiwib2Zmc2V0IiwiY3VycmVudExpc3ROb2RlIiwiaXRlbXMiLCJxc2EiLCJhY3RpdmVDaGlsZCIsImluZGV4IiwibmV4dEluZGV4IiwiaGFuZGxlU2VsZWN0IiwibmV4dEFjdGl2ZUNoaWxkIiwiZGF0YVByb3AiLCJJdGVtIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwiaGFzRW50ZXJlZFJlZiIsIm1vdW50T25FbnRlciIsInNob3VsZFRyYW5zaXRpb24iLCJUYWJQYW5lbCIsInVzZVRhYkNvbnRleHQiLCJwYW5lIiwiZ2VuZXJhdGVDaGlsZElkIiwiVGFicyIsInVzZVVuY29udHJvbGxlZFByb3AiLCJ1c2VNZW1vIiwiZ2VuZXJhdGVDdXN0b21DaGlsZElkIiwicmVzdWx0IiwiQXJyYXkiLCJtb2RpZmllcnMiLCJtIiwibWFwIiwiayIsInRvTW9kaWZpZXJNYXAiLCJzdHJhdGVneSIsInRvTW9kaWZpZXJBcnJheSIsImV2ZW50TGlzdGVuZXJzIiwicHJldmVudE92ZXJmbG93IiwicGFkZGluZyIsImVsZW1lbnQiLCJhcnJvd0VsZW1lbnQiLCJkaXNhYmxlZEFwcGx5U3R5bGVzTW9kaWZpZXIiLCJuYW1lIiwicGhhc2UiLCJhcmlhRGVzY3JpYmVkQnlNb2RpZmllciIsImVmZmVjdCIsInN0YXRlIiwiaWRzIiwicmVmZXJlbmNlIiwiZm4iLCJFTVBUWV9NT0RJRklFUlMiLCJjb25maWciLCJwcmV2TW9kaWZpZXJzIiwicG9wcGVySW5zdGFuY2VSZWYiLCJ1cGRhdGUiLCJ1c2VTYWZlU3RhdGUiLCJ1cGRhdGVNb2RpZmllciIsInJlcXVpcmVzIiwic2V0U3RhdGUiLCJuZXh0TW9kaWZpZXJzIiwiZGVxdWFsIiwicmVmZXJlbmNlRWxlbWVudCIsInBvcHBlckVsZW1lbnQiLCJzIiwiZm9jdXNGaXJzdEl0ZW1PblNob3ciLCJpdGVtU2VsZWN0b3IiLCJkZWZhdWx0U2hvdyIsIm9uVG9nZ2xlIiwiYXR0YWNoUmVmIiwidXNlUmVmV2l0aFVwZGF0ZSIsIm1lbnVFbGVtZW50IiwibWVudVJlZiIsInRvZ2dsZVJlZiIsImxhc3RTaG93IiwibGFzdFNvdXJjZUV2ZW50IiwiZm9jdXNJbkRyb3Bkb3duIiwic291cmNlIiwib3JpZ2luYWxFdmVudCIsImRvY3VtZW50IiwiZm9jdXNUb2dnbGUiLCJtYXliZUZvY3VzRmlyc3QiLCJmb2N1c1R5cGUiLCJtYXRjaGVzIiwiZmlyc3QiLCJnZXROZXh0Rm9jdXNlZENoaWxkIiwiTWF0aCIsInVzZUdsb2JhbExpc3RlbmVyIiwiZnJvbU1lbnUiLCJmcm9tVG9nZ2xlIiwiaXNJbnB1dCIsIm5leHQiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsIkRyb3Bkb3duIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQ29udGV4dCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwia2V5cyIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidmFsdWVzIiwiZm9yRWFjaCIsImkiLCJjcmVhdGVDb250ZXh0IiwiX2RlZmF1bHQiLCJpbXBvcnRzIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiY2xzeCIsIml0ZW1Qcm9wcyIsIlRhZyIsIlN0eWxlZEJ1dHRvbiIsIlRvZ2dsZSIsIk1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUyxLQUFNQSxZQUFXLENBQUcsQ0FDNUJDLEtBQUssQ0FBRSxlQURxQixDQUFwQixDQUdGLEtBQU1DLFNBQVEsQ0FBRyxDQUN0QixnQkFBaUIsS0FESyxDQUV0QixLQUFNLEtBRmdCLENBR3RCLGlCQUFrQixLQUhJLENBSXRCLFFBQVMsZUFKYSxDQUt0QixjQUFlLG9FQUxPLENBTXRCLFNBQVUsb0JBTlksQ0FPdEIsT0FBUSxNQVBjLENBUXRCLFlBQWEsU0FSUyxDQVN0QixVQUFXLFNBVFcsQ0FVdEIsVUFBVyxNQVZXLENBV3RCLFdBQVksQ0FDVixRQUFTLE9BREMsQ0FFVixZQUFhLFdBRkgsQ0FYVSxDQWV0QixPQUFRLENBQ04sUUFBUyxTQURILENBRU4sWUFBYSxhQUZQLENBZmMsQ0FBakIsQ0FvQkwseUIsQ0FDRixjQUVPLEtBQU1DLElBQUcsQ0FBRyxDQUFDLENBQ2xCQyxLQUFLLENBQUUsU0FEVyxDQUVsQkMsRUFBRSxDQUFFLFNBRmMsQ0FHbEJDLFFBQVEsQ0FBRSxFQUhRLENBQUQsQ0FJaEIsQ0FDREYsS0FBSyxDQUFFLFdBRE4sQ0FFREMsRUFBRSxDQUFFLFdBRkgsQ0FHREMsUUFBUSxDQUFFLEVBSFQsQ0FKZ0IsQ0FRaEIsQ0FDREYsS0FBSyxDQUFFLE1BRE4sQ0FFREMsRUFBRSxDQUFFLE1BRkgsQ0FHREMsUUFBUSxDQUFFLENBQUMsQ0FDVEYsS0FBSyxDQUFFLGNBREUsQ0FFVEMsRUFBRSxDQUFFLGNBRkssQ0FHVEMsUUFBUSxDQUFFLEVBSEQsQ0FBRCxDQUhULENB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QUFaUCxLQUFZOztBQUMvQyxRQUFNLENBQUMyWCxTQUFELEVBQVk7QUFBRS9RO0FBQUYsR0FBWixJQUEwQk8sMkVBQWU7QUFDN0NILE9BQUcsRUFBRXpHO0FBRHdDLEtBRTFDUCxLQUYwQyxFQUEvQztBQUtBLHNCQUNFLDJEQUFDLDJEQUFELGVBQ01BLEtBRE4sRUFFTTJYLFNBRk47QUFHRSxhQUFTLEVBQUVELG9EQUFJLENBQ2Isd0VBRGEsRUFFYjlRLE1BQU0sSUFBSSxZQUZHO0FBSGpCLEtBREY7QUFVRCxDQWhCRDs7QUFrQkEsTUFBTUQsY0FBYyxHQUFHLFdBQTBDO0FBQUEsTUFBekM7QUFBRW5GLE1BQUUsRUFBRW9XLEdBQUcsR0FBR0MsK0NBQVlBO0FBQXhCLEdBQXlDO0FBQUEsTUFBWjdYLEtBQVk7O0FBQy9ELFFBQU0sQ0FBQzJYLFNBQUQsSUFBY2pSLDZFQUFpQixFQUFyQztBQUVBLHNCQUFPLDJEQUFDLEdBQUQsZUFBUzFHLEtBQVQsRUFBb0IyWCxTQUFwQixFQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNdEIsUUFBUSxHQUFJclcsS0FBRCxpQkFBMEIsMkRBQUMsMkRBQUQsRUFBa0JBLEtBQWxCLENBQTNDOztBQUVBcVcsUUFBUSxDQUFDeUIsTUFBVCxHQUFrQm5SLGNBQWxCO0FBQ0EwUCxRQUFRLENBQUMwQixJQUFULEdBQWdCelIsWUFBaEI7QUFDQStQLFFBQVEsQ0FBQ2hGLElBQVQsR0FBZ0JuSyxZQUFoQjtBQUVlbVAsdUVBQWYsRSIsImZpbGUiOiJhc3NldHMvanMvMmQxM2EwM2EuNDY2M2IwZjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbiAgZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHR0aXRsZTogJ05hdnMgYW5kIHRhYnMnXG59O1xuZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICBcInVudmVyc2lvbmVkSWRcIjogXCJOYXZcIixcbiAgXCJpZFwiOiBcIk5hdlwiLFxuICBcImlzRG9jc0hvbWVQYWdlXCI6IGZhbHNlLFxuICBcInRpdGxlXCI6IFwiTmF2cyBhbmQgdGFic1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JlYXRlIGZsZXhpYmxlIG5hdmlnYXRpb24gZWxlbWVudHMgbGlrZSB0YWJzLCBuYXZiYXJzLCBhbmQgbWVudXMuXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy9OYXYubWR4XCIsXG4gIFwic2x1Z1wiOiBcIi9OYXZcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvdWkvTmF2XCIsXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJzaWRlYmFyXCI6IFwiZG9jc1wiLFxuICBcInByZXZpb3VzXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiTW9kYWxcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi91aS9Nb2RhbFwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIk92ZXJsYXlcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi91aS9PdmVybGF5XCJcbiAgfVxufTtcbiAgLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBJbXBvcnRDb250ZXh0LCB7IGFsbFZhbHVlcyB9IGZyb20gXCJAdGhlbWUvSW1wb3J0Q29udGV4dFwiO1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnU3R5bGluZycsXG4gIGlkOiAnc3R5bGluZycsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ0Ryb3Bkb3ducycsXG4gIGlkOiAnZHJvcGRvd25zJyxcbiAgY2hpbGRyZW46IFtdXG59LCB7XG4gIHZhbHVlOiAnVGFicycsXG4gIGlkOiAndGFicycsXG4gIGNoaWxkcmVuOiBbe1xuICAgIHZhbHVlOiAnQWNlc3NpYmlsaXR5JyxcbiAgICBpZDogJ2FjZXNzaWJpbGl0eScsXG4gICAgY2hpbGRyZW46IFtdXG4gIH1dXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHA+e2BDcmVhdGUgZmxleGlibGUgbmF2aWdhdGlvbiBlbGVtZW50cyBsaWtlIHRhYnMsIG5hdmJhcnMsIGFuZCBtZW51cy5gfTwvcD5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJAcmVzdGFydC91aVwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLU5hdi5tZHhcIiAqL1xuICAgICAgJ0ByZXN0YXJ0L3VpJylcbiAgICB9KX0gbWR4VHlwZT1cIkltcG9ydENvbnRleHRcIj5cbiAgICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc3hcIixcbiAgICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlXCIsXG4gICAgICAgICAgXCJsaXZlXCI6IHRydWVcbiAgICAgICAgfX0+e2BpbXBvcnQgeyBOYXYsIE5hdkl0ZW0gfSBmcm9tIFwiQHJlc3RhcnQvdWlcIjtcblxuPE5hdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiIGFjdGl2ZUtleT1cIi9ob21lXCI+XG4gIDxOYXZJdGVtIGhyZWY9XCIvaG9tZVwiPkFjdGl2ZTwvTmF2SXRlbT5cblxuICA8TmF2SXRlbSBldmVudEtleT1cImxpbmstMVwiPkxpbms8L05hdkl0ZW0+XG5cbiAgPE5hdkl0ZW0gZXZlbnRLZXk9XCJsaW5rLTJcIj5MaW5rPC9OYXZJdGVtPlxuXG4gIDxOYXZJdGVtIGV2ZW50S2V5PVwiZGlzYWJsZWRcIiBkaXNhYmxlZD5cbiAgICBEaXNhYmxlZFxuICA8L05hdkl0ZW0+XG48L05hdj47XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L0ltcG9ydENvbnRleHQ+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic3R5bGluZ1wiXG4gICAgfX0+e2BTdHlsaW5nYH08L2gyPlxuICAgIDxwPjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BOYXZJdGVtYH08L2lubGluZUNvZGU+e2BzIGltcGxlbWVudCBhIGZldyBiaXRzIG9mIHN0YXRlIHRoYXQgbGlrZWx5IG5lZWQgdmlzdWFsIHN0eWxpbmcgdG8gdXNlLmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGRpc2FibGVkYH08L2lubGluZUNvZGU+e2Agd2hldGhlciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YE5hdkl0ZW1gfTwvaW5saW5lQ29kZT57YCBpcyBhY3Rpb25hYmxlIG9yIG5vdC5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BhY3RpdmVgfTwvaW5saW5lQ29kZT57YCB3aGV0aGVyIHRoZSBuYXYgaXRlbSBpcyBcInNlbGVjdGVkXCIsIHRoaXMgbWF5IGJlIGJlY2F1c2UgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BhY3RpdmVLZXlgfTwvaW5saW5lQ29kZT57YFxub24gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YE5hdmB9PC9pbmxpbmVDb2RlPntgIG1hdGNoZXMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BOYXZJdGVtYH08L2lubGluZUNvZGU+e2AncyBrZXksIG9yIGJlY2F1c2UgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BhY3RpdmVgfTwvaW5saW5lQ29kZT57YCBwcm9wIHdhcyBwYXNzZWQgdG8gaXQuYH08L2xpPlxuICAgIDwvdWw+XG4gICAgPEltcG9ydENvbnRleHQgaW1wb3J0cz17KCkgPT4gYWxsVmFsdWVzKHtcbiAgICAgIFwiY2xzeFwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLU5hdi5tZHhcIiAqL1xuICAgICAgJ2Nsc3gnKSxcbiAgICAgIFwiQHJlc3RhcnQvdWlcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1OYXYubWR4XCIgKi9cbiAgICAgICdAcmVzdGFydC91aScpXG4gICAgfSl9IG1keFR5cGU9XCJJbXBvcnRDb250ZXh0XCI+XG4gICAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanN4XCIsXG4gICAgICAgICAgXCJtZXRhc3RyaW5nXCI6IFwibGl2ZVwiLFxuICAgICAgICAgIFwibGl2ZVwiOiB0cnVlXG4gICAgICAgIH19PntgaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IE5hdiwgdXNlTmF2SXRlbSB9IGZyb20gXCJAcmVzdGFydC91aVwiO1xuXG5mdW5jdGlvbiBOYXZMaW5rKHsgaHJlZiwgZGlzYWJsZWQsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW25hdkl0ZW1Qcm9wcywgbWV0YV0gPSB1c2VOYXZJdGVtKHtcbiAgICBrZXk6IGhyZWYsXG4gICAgZGlzYWJsZWQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICB7Li4ubmF2SXRlbVByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBcInB5LTMgcHgtNCByb3VuZGVkXCIsXG4gICAgICAgIGRpc2FibGVkICYmIFwib3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWRcIixcbiAgICAgICAgbWV0YS5pc0FjdGl2ZVxuICAgICAgICAgID8gXCJiZy1wcmltYXJ5ICF0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA6IFwiaG92ZXI6dGV4dC1wcmltYXJ5IGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgY29uc3QgW2FjdGl2ZUtleSwgc2V0QWN0aXZlS2V5XSA9IHVzZVN0YXRlKFwiL2hvbWVcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgIGFjdGl2ZUtleT17YWN0aXZlS2V5fVxuICAgICAgb25TZWxlY3Q9e3NldEFjdGl2ZUtleX1cbiAgICA+XG4gICAgICA8TmF2TGluayBocmVmPVwiL2hvbWVcIj5Ib21lPC9OYXZMaW5rPlxuXG4gICAgICA8TmF2TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdkxpbms+XG5cbiAgICAgIDxOYXZMaW5rIGhyZWY9XCJvcmRlcmRcIiBkaXNhYmxlZD5cbiAgICAgICAgT3JkZXJzXG4gICAgICA8L05hdkxpbms+XG4gICAgPC9OYXY+XG4gICk7XG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L0ltcG9ydENvbnRleHQ+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZHJvcGRvd25zXCJcbiAgICB9fT57YERyb3Bkb3duc2B9PC9oMj5cbiAgICA8cD57YERyb3Bkb3duIGNvbXBvbmVudHMgY2FuIGJlIHVzZWQgaW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTmF2YH08L2lubGluZUNvZGU+e2BzIGFzIHdlbGw6YH08L3A+XG4gICAgPEltcG9ydENvbnRleHQgaW1wb3J0cz17KCkgPT4gYWxsVmFsdWVzKHtcbiAgICAgIFwiY2xzeFwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLU5hdi5tZHhcIiAqL1xuICAgICAgJ2Nsc3gnKSxcbiAgICAgIFwiQHJlc3RhcnQvdWlcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1OYXYubWR4XCIgKi9cbiAgICAgICdAcmVzdGFydC91aScpLFxuICAgICAgXCIuLi9zcmMvRHJvcGRvd25cIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1OYXYubWR4XCIgKi9cbiAgICAgICcuLi9zcmMvRHJvcGRvd24nKVxuICAgIH0pfSBtZHhUeXBlPVwiSW1wb3J0Q29udGV4dFwiPlxuICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzeFwiLFxuICAgICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmVcIixcbiAgICAgICAgICBcImxpdmVcIjogdHJ1ZVxuICAgICAgICB9fT57YGltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge1xuICBOYXYsXG4gIHVzZU5hdkl0ZW0sXG4gIHVzZURyb3Bkb3duVG9nZ2xlLFxufSBmcm9tIFwiQHJlc3RhcnQvdWlcIjtcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9zcmMvRHJvcGRvd25cIjtcblxuY29uc3QgTmF2TGluayA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGhyZWYsIGRpc2FibGVkLCBjaGlsZHJlbiwgb25DbGljayB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbbmF2SXRlbVByb3BzLCBtZXRhXSA9IHVzZU5hdkl0ZW0oe1xuICAgICAga2V5OiBocmVmLFxuICAgICAgb25DbGljayxcbiAgICAgIGRpc2FibGVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICB7Li4ubmF2SXRlbVByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJweS0zIHB4LTQgcm91bmRlZFwiLFxuICAgICAgICAgIGRpc2FibGVkICYmIFwib3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWRcIixcbiAgICAgICAgICBtZXRhLmlzQWN0aXZlXG4gICAgICAgICAgICA/IFwiYmctcHJpbWFyeSAhdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA6IFwiaG92ZXI6dGV4dC1wcmltYXJ5IGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbik7XG5cbmZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIGNvbnN0IFthY3RpdmVLZXksIHNldEFjdGl2ZUtleV0gPSB1c2VTdGF0ZShcIi9ob21lXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICBhY3RpdmVLZXk9e2FjdGl2ZUtleX1cbiAgICAgIG9uU2VsZWN0PXtzZXRBY3RpdmVLZXl9XG4gICAgPlxuICAgICAgPE5hdkxpbmsgaHJlZj1cIi9ob21lXCI+SG9tZTwvTmF2TGluaz5cblxuICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXZMaW5rPlxuXG4gICAgICA8TmF2TGluayBocmVmPVwib3JkZXJkXCIgZGlzYWJsZWQ+XG4gICAgICAgIE9yZGVyc1xuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPERyb3Bkb3duPlxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXZMaW5rfT5Nb3JlPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGV2ZW50S2V5PVwiNC4xXCI+XG4gICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCI0LjJcIj5cbiAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGV2ZW50S2V5PVwiNC4zXCI+XG4gICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIDwvTmF2PlxuICApO1xufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9JbXBvcnRDb250ZXh0PlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInRhYnNcIlxuICAgIH19PntgVGFic2B9PC9oMj5cbiAgICA8cD57YENyZWF0ZSBkeW5hbWljIHRhYmJlZCBpbnRlcmZhY2VzIGZyb20gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BOYXZgfTwvaW5saW5lQ29kZT57YCwgYXMgZGVzY3JpYmVkIGluIHRoZSBXQUktQVJJQSBBdXRob3JpbmcgUHJhY3RpY2VzLlxuTm90ZSB0aGF0IHRhYmJlZCBVSXMgaGF2ZSBzcGVjaWZpYyBiZWhhdmlvciB0aGF0IHNldHMgdGhlbSBhcGFydCBmcm9tIGEgbmF2aWdhdGlvbiBtZW51LCBldmVuXG53aGVuIHN0eWxlZCBzaW1pbGFybHkuYH08L3A+XG4gICAgPEltcG9ydENvbnRleHQgaW1wb3J0cz17KCkgPT4gYWxsVmFsdWVzKHtcbiAgICAgIFwiY2xzeFwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLU5hdi5tZHhcIiAqL1xuICAgICAgJ2Nsc3gnKSxcbiAgICAgIFwiQHJlc3RhcnQvdWlcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1OYXYubWR4XCIgKi9cbiAgICAgICdAcmVzdGFydC91aScpXG4gICAgfSl9IG1keFR5cGU9XCJJbXBvcnRDb250ZXh0XCI+XG4gICAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanN4XCIsXG4gICAgICAgICAgXCJtZXRhc3RyaW5nXCI6IFwibGl2ZVwiLFxuICAgICAgICAgIFwibGl2ZVwiOiB0cnVlXG4gICAgICAgIH19PntgaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBUYWJzLFxuICBUYWJQYW5lbCxcbiAgTmF2LFxuICB1c2VOYXZJdGVtLFxufSBmcm9tIFwiQHJlc3RhcnQvdWlcIjtcblxuZnVuY3Rpb24gVGFiKHsgZXZlbnRLZXksIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgW25hdkl0ZW1Qcm9wcywgbWV0YV0gPSB1c2VOYXZJdGVtKHtcbiAgICBrZXk6IGV2ZW50S2V5LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHsuLi5uYXZJdGVtUHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIFwiLW1iLXB4IHB5LTIgcHgtNFwiLFxuICAgICAgICBcImhvdmVyOmJnLWdyYXktMjAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtdCBib3JkZXJcIixcbiAgICAgICAgbWV0YS5pc0FjdGl2ZVxuICAgICAgICAgID8gXCJib3JkZXItZ3JheS0yMDBcIlxuICAgICAgICAgIDogXCJib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgKX1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAgbWV0YS5pc0FjdGl2ZVxuICAgICAgICAgID8geyBib3JkZXJCb3R0b21Db2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIC8+XG4gICk7XG59XG5cbjxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XG4gIDxOYXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYlwiPlxuICAgIDxUYWIgZXZlbnRLZXk9XCIxXCI+T25lPC9UYWI+XG4gICAgPFRhYiBldmVudEtleT1cIjJcIj5Ud288L1RhYj5cbiAgICA8VGFiIGV2ZW50S2V5PVwiM1wiPlRocmVlPC9UYWI+XG4gIDwvTmF2PlxuICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgIDxUYWJQYW5lbCBldmVudEtleT1cIjFcIj5cbiAgICAgIDxwPm9uZSE8L3A+XG4gICAgPC9UYWJQYW5lbD5cbiAgICA8VGFiUGFuZWwgZXZlbnRLZXk9XCIyXCI+XG4gICAgICA8cD50d28hPC9wPlxuICAgIDwvVGFiUGFuZWw+XG4gICAgPFRhYlBhbmVsIGV2ZW50S2V5PVwiM1wiPlxuICAgICAgPHA+dGhyZWUhPC9wPlxuICAgIDwvVGFiUGFuZWw+XG4gIDwvZGl2PlxuPC9UYWJzPjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvSW1wb3J0Q29udGV4dD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJhY2Vzc2liaWxpdHlcIlxuICAgIH19PntgQWNlc3NpYmlsaXR5YH08L2gzPlxuICAgIDxwPntgSW4gdGhlIGNvbnRleHQgb2YgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BUYWJzYH08L2lubGluZUNvZGU+e2AgY29tcG9uZW50IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BOYXZgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTmF2SXRlbWB9PC9pbmxpbmVDb2RlPntgcyB3aWxsIGNvbnRleHR1YWxseVxuYXBwbHkgdGhlIGNvcnJlY3QgQVJJQSByb2xlcywgYXMgd2VsbCBhcyBpbXBsZW1lbnQgdGhlIHJlcXVpcmVkIGtleWJvYXJkIG5hdmlnYXRpb24uYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiAgIiwiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuICB9LCBbcmVmXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgU2VsZWN0YWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFNlbGVjdENhbGxiYWNrIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCBtYWtlRXZlbnRLZXkgPSAoXG4gIGV2ZW50S2V5Pzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCxcbiAgaHJlZjogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGV2ZW50S2V5ICE9IG51bGwpIHJldHVybiBTdHJpbmcoZXZlbnRLZXkpO1xuICByZXR1cm4gaHJlZiB8fCBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0YWJsZUNvbnRleHQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lckRvY3VtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xufSIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdidXR0b24nIHwgJ3Jlc2V0JyB8ICdzdWJtaXQnIHwgc3RyaW5nO1xuXG5pbnRlcmZhY2UgVXNlQnV0dG9uUHJvcHNPcHRpb25zIHtcbiAgdHlwZT86IEJ1dHRvblR5cGU7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICByZWw/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiBSZWFjdC5FdmVudEhhbmRsZXI8UmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQ+O1xuICB0YWJJbmRleD86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaXNUcml2aWFsSHJlZihocmVmPzogc3RyaW5nKSB7XG4gIHJldHVybiAhaHJlZiB8fCBocmVmLnRyaW0oKSA9PT0gJyMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uUHJvcHMoe1xuICB0YWdOYW1lID0gJ2J1dHRvbicsXG4gIGRpc2FibGVkLFxuICBocmVmLFxuICB0YXJnZXQsXG4gIHJlbCxcbiAgb25DbGljayxcbiAgdGFiSW5kZXggPSAwLFxufTogVXNlQnV0dG9uUHJvcHNPcHRpb25zICYgeyB0YWdOYW1lOiBzdHJpbmcgfSkge1xuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHJldHVybiB7IGRpc2FibGVkIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IGlzVHJpdmlhbEhyZWYoaHJlZikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNsaWNrPy4oZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcm9sZTogJ2J1dHRvbicsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGFiSW5kZXgsXG4gICAgaHJlZjogdGFnTmFtZSA9PT0gJ2EnICYmIGRpc2FibGVkID8gdW5kZWZpbmVkIDogaHJlZixcbiAgICB0YXJnZXQ6IHRhZ05hbWUgPT09ICdhJyA/IHRhcmdldCA6IHVuZGVmaW5lZCxcbiAgICAnYXJpYS1kaXNhYmxlZCc6ICFkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGRpc2FibGVkLFxuICAgIHJlbDogdGFnTmFtZSA9PT0gJ2EnID8gcmVsIDogdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCAnb25DbGljayc+LFxuICAgIFVzZUJ1dHRvblByb3BzT3B0aW9ucyB7XG4gIGFzPzogUmVhY3QuRWxlbWVudFR5cGU7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBCdXR0b24sIHByZXZlbnRpbmcgbW91c2UgZXZlbnRzLFxuICAgKiBldmVuIGlmIHRoZSB1bmRlcmx5aW5nIGNvbXBvbmVudCBpcyBhbiBgPGE+YCBlbGVtZW50XG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFByb3ZpZGluZyBhIGBocmVmYCB3aWxsIHJlbmRlciBhbiBgPGE+YCBlbGVtZW50LCBfc3R5bGVkXyBhcyBhIGJ1dHRvbi4gKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGVmaW5lcyBIVE1MIGJ1dHRvbiB0eXBlIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ2J1dHRvbidcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdyZXNldCcsICdzdWJtaXQnLCBudWxsXSksXG5cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbn07XG5cbmNvbnN0IEJ1dHRvbjogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gICdidXR0b24nLFxuICBCdXR0b25Qcm9wc1xuPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPihcbiAgKHsgdHlwZSwgYXM6IENvbXBvbmVudCwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgdGFnTmFtZSA9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnID8gQ29tcG9uZW50IDogcHJvcHMuaHJlZiA/ICdhJyA6ICdidXR0b24nO1xuXG4gICAgY29uc3QgYnV0dG9uUHJvcHMgPSB1c2VCdXR0b25Qcm9wcyh7IHRhZ05hbWUsIC4uLnByb3BzIH0pO1xuXG4gICAgQ29tcG9uZW50ID0gQ29tcG9uZW50IHx8IHRhZ05hbWU7XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicgJiYgIXR5cGUpIHtcbiAgICAgIHR5cGUgPSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5idXR0b25Qcm9wc30gcmVmPXtyZWZ9IHR5cGU9e3R5cGV9IC8+O1xuICB9LFxuKTtcblxuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJleHBvcnQgY29uc3QgQVRUUklCVVRFX1BSRUZJWCA9IGBkYXRhLXJyLXVpLWAgYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9QUkVGSVggPSBgcnJVaWAgYXMgY29uc3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXR0cjxUIGV4dGVuZHMgc3RyaW5nPihwcm9wZXJ0eTogVCkge1xuICByZXR1cm4gYCR7QVRUUklCVVRFX1BSRUZJWH0ke3Byb3BlcnR5fWAgYXMgY29uc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhUHJvcDxUIGV4dGVuZHMgc3RyaW5nPihwcm9wZXJ0eTogVCkge1xuICByZXR1cm4gYCR7UFJPUEVSVFlfUFJFRklYfSR7cHJvcGVydHl9YCBhcyBjb25zdDtcbn1cbiIsImltcG9ydCBjb250YWlucyBmcm9tICdkb20taGVscGVycy9jb250YWlucyc7XG5pbXBvcnQgbGlzdGVuIGZyb20gJ2RvbS1oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxuY29uc3QgZXNjYXBlS2V5Q29kZSA9IDI3O1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50cyA9IHtcbiAgW0sgaW4ga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwXTogR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwW0tdIGV4dGVuZHMgTW91c2VFdmVudFxuICAgID8gS1xuICAgIDogbmV2ZXI7XG59W2tleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcF07XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY29uc3QgZ2V0UmVmVGFyZ2V0ID0gKFxuICByZWY6IFJlYWN0LlJlZk9iamVjdDxFbGVtZW50PiB8IEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuKSA9PiByZWYgJiYgKCdjdXJyZW50JyBpbiByZWYgPyByZWYuY3VycmVudCA6IHJlZik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdENsb3NlT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2xpY2tUcmlnZ2VyPzogTW91c2VFdmVudHM7XG59XG4vKipcbiAqIFRoZSBgdXNlUm9vdENsb3NlYCBob29rIHJlZ2lzdGVycyB5b3VyIGNhbGxiYWNrIG9uIHRoZSBkb2N1bWVudFxuICogd2hlbiByZW5kZXJlZC4gUG93ZXJzIHRoZSBgPE92ZXJsYXkvPmAgY29tcG9uZW50LiBUaGlzIGlzIHVzZWQgYWNoaWV2ZSBtb2RhbFxuICogc3R5bGUgYmVoYXZpb3Igd2hlcmUgeW91ciBjYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciB0cmllcyB0b1xuICogaW50ZXJhY3Qgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgb3IgaGl0cyB0aGUgYGVzY2Aga2V5LlxuICpcbiAqIEBwYXJhbSB7UmVmPEhUTUxFbGVtZW50PnwgSFRNTEVsZW1lbnR9IHJlZiAgVGhlIGVsZW1lbnQgYm91bmRhcnlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUm9vdENsb3NlXG4gKiBAcGFyYW0ge29iamVjdD19ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLmRpc2FibGVkXG4gKiBAcGFyYW0ge3N0cmluZz19ICBvcHRpb25zLmNsaWNrVHJpZ2dlciBUaGUgRE9NIGV2ZW50IG5hbWUgKGNsaWNrLCBtb3VzZWRvd24sIGV0YykgdG8gYXR0YWNoIGxpc3RlbmVycyBvblxuICovXG5mdW5jdGlvbiB1c2VSb290Q2xvc2UoXG4gIHJlZjogUmVhY3QuUmVmT2JqZWN0PEVsZW1lbnQ+IHwgRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9uUm9vdENsb3NlOiAoZTogRXZlbnQpID0+IHZvaWQsXG4gIHsgZGlzYWJsZWQsIGNsaWNrVHJpZ2dlciA9ICdjbGljaycgfTogUm9vdENsb3NlT3B0aW9ucyA9IHt9LFxuKSB7XG4gIGNvbnN0IHByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uQ2xvc2UgPSBvblJvb3RDbG9zZSB8fCBub29wO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlQ2FwdHVyZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZ2V0UmVmVGFyZ2V0KHJlZik7XG5cbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICEhY3VycmVudFRhcmdldCxcbiAgICAgICAgJ1Jvb3RDbG9zZSBjYXB0dXJlZCBhIGNsb3NlIGV2ZW50IGJ1dCBkb2VzIG5vdCBoYXZlIGEgcmVmIHRvIGNvbXBhcmUgaXQgdG8uICcgK1xuICAgICAgICAgICd1c2VSb290Q2xvc2UoKSwgc2hvdWxkIGJlIHBhc3NlZCBhIHJlZiB0aGF0IHJlc29sdmVzIHRvIGEgRE9NIG5vZGUnLFxuICAgICAgKTtcblxuICAgICAgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQgPVxuICAgICAgICAhY3VycmVudFRhcmdldCB8fFxuICAgICAgICBpc01vZGlmaWVkRXZlbnQoZSkgfHxcbiAgICAgICAgIWlzTGVmdENsaWNrRXZlbnQoZSkgfHxcbiAgICAgICAgISFjb250YWlucyhjdXJyZW50VGFyZ2V0LCBlLnRhcmdldCk7XG4gICAgfSxcbiAgICBbcmVmXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZSA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5VXAgPSB1c2VFdmVudENhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gZXNjYXBlS2V5Q29kZSkge1xuICAgICAgb25DbG9zZShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlZiA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgZXZlbnQgdG8gYXZvaWQgdHJpZ2dlcmluZyBoYW5kbGVycyBpbW1lZGlhdGVseVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjAwNzRcbiAgICBsZXQgY3VycmVudEV2ZW50ID0gd2luZG93LmV2ZW50O1xuXG4gICAgY29uc3QgZG9jID0gb3duZXJEb2N1bWVudChnZXRSZWZUYXJnZXQocmVmKSEpO1xuXG4gICAgLy8gVXNlIGNhcHR1cmUgZm9yIHRoaXMgbGlzdGVuZXIgc28gaXQgZmlyZXMgYmVmb3JlIFJlYWN0J3MgbGlzdGVuZXIsIHRvXG4gICAgLy8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIGluIHRoZSBjb250YWlucygpIGNoZWNrIGJlbG93IGlmIHRoZSB0YXJnZXQgRE9NXG4gICAgLy8gZWxlbWVudCBpcyByZW1vdmVkIGluIHRoZSBSZWFjdCBtb3VzZSBjYWxsYmFjay5cbiAgICBjb25zdCByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lciA9IGxpc3RlbihcbiAgICAgIGRvYyBhcyBhbnksXG4gICAgICBjbGlja1RyaWdnZXIsXG4gICAgICBoYW5kbGVNb3VzZUNhcHR1cmUsXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICBjb25zdCByZW1vdmVNb3VzZUxpc3RlbmVyID0gbGlzdGVuKGRvYyBhcyBhbnksIGNsaWNrVHJpZ2dlciwgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVNb3VzZShlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUtleXVwTGlzdGVuZXIgPSBsaXN0ZW4oZG9jIGFzIGFueSwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIC8vIHNraXAgaWYgdGhpcyBldmVudCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHJ1bm5pbmcgd2hlbiB3ZSBhZGRlZCB0aGUgaGFuZGxlcnNcbiAgICAgIGlmIChlID09PSBjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgY3VycmVudEV2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVLZXlVcChlKTtcbiAgICB9KTtcblxuICAgIGxldCBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW10gYXMgQXJyYXk8KCkgPT4gdm9pZD47XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXS5zbGljZVxuICAgICAgICAuY2FsbChkb2MuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLm1hcCgoZWwpID0+IGxpc3RlbihlbCwgJ21vdXNlbW92ZScsIG5vb3ApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVtb3ZlTW91c2VDYXB0dXJlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZUtleXVwTGlzdGVuZXIoKTtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMuZm9yRWFjaCgocmVtb3ZlKSA9PiByZW1vdmUoKSk7XG4gICAgfTtcbiAgfSwgW1xuICAgIHJlZixcbiAgICBkaXNhYmxlZCxcbiAgICBjbGlja1RyaWdnZXIsXG4gICAgaGFuZGxlTW91c2VDYXB0dXJlLFxuICAgIGhhbmRsZU1vdXNlLFxuICAgIGhhbmRsZUtleVVwLFxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUm9vdENsb3NlO1xuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgYXJyb3cgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdyc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGZsaXAgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwJztcbmltcG9ydCBoaWRlIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZSc7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0JztcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93JztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvZW51bXMnO1xuaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1iYXNlJztcblxuLy8gRm9yIHRoZSBjb21tb24gSlMgYnVpbGQgd2Ugd2lsbCB0dXJuIHRoaXMgZmlsZSBpbnRvIGEgYnVuZGxlIHdpdGggbm8gaW1wb3J0cy5cbi8vIFRoaXMgaXMgYi9jIHRoZSBQb3BwZXIgbGliIGlzIGFsbCBlc20gZmlsZXMsIGFuZCB3b3VsZCBicmVhayBpbiBhIGNvbW1vbiBqcyBvbmx5IGVudmlyb25tZW50XG5leHBvcnQgY29uc3QgY3JlYXRlUG9wcGVyID0gcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogW1xuICAgIGhpZGUsXG4gICAgcG9wcGVyT2Zmc2V0cyxcbiAgICBjb21wdXRlU3R5bGVzLFxuICAgIGV2ZW50TGlzdGVuZXJzLFxuICAgIG9mZnNldCxcbiAgICBmbGlwLFxuICAgIHByZXZlbnRPdmVyZmxvdyxcbiAgICBhcnJvdyxcbiAgXSxcbn0pO1xuXG5leHBvcnQgeyBwbGFjZW1lbnRzIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSBEcm9wZG93bkNvbnRleHRWYWx1ZSA9IHtcbiAgdG9nZ2xlOiAobmV4dFNob3c6IGJvb2xlYW4sIGV2ZW50PzogUmVhY3QuU3ludGhldGljRXZlbnQgfCBFdmVudCkgPT4gdm9pZDtcbiAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgdG9nZ2xlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBzZXRNZW51OiAocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQ7XG4gIHNldFRvZ2dsZTogKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkO1xuXG4gIHNob3c6IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbn07XG5cbmNvbnN0IERyb3Bkb3duQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8RHJvcGRvd25Db250ZXh0VmFsdWUgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25Db250ZXh0O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICdAcmVzdGFydC9ob29rcy91c2VDYWxsYmFja1JlZic7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0LCB7IERyb3Bkb3duQ29udGV4dFZhbHVlIH0gZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuaW1wb3J0IHVzZVBvcHBlciwge1xuICBVc2VQb3BwZXJPcHRpb25zLFxuICBQbGFjZW1lbnQsXG4gIE9mZnNldCxcbiAgVXNlUG9wcGVyU3RhdGUsXG59IGZyb20gJy4vdXNlUG9wcGVyJztcbmltcG9ydCB1c2VSb290Q2xvc2UsIHsgUm9vdENsb3NlT3B0aW9ucyB9IGZyb20gJy4vdXNlUm9vdENsb3NlJztcbmltcG9ydCBtZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnIGZyb20gJy4vbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyc7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wb3BwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duTWVudU9wdGlvbnMge1xuICBmbGlwPzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICB1c2VQb3BwZXI/OiBib29sZWFuO1xuICBlbmFibGVFdmVudExpc3RlbmVycz86IGJvb2xlYW47XG4gIG9mZnNldD86IE9mZnNldDtcbiAgcm9vdENsb3NlRXZlbnQ/OiBSb290Q2xvc2VPcHRpb25zWydjbGlja1RyaWdnZXInXTtcbiAgcG9wcGVyQ29uZmlnPzogT21pdDxVc2VQb3BwZXJPcHRpb25zLCAnZW5hYmxlZCcgfCAncGxhY2VtZW50Jz47XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJEcm9wZG93bk1lbnVQcm9wcyA9IFJlY29yZDxzdHJpbmcsIGFueT4gJiB7XG4gIHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+O1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gICdhcmlhLWxhYmVsbGVkYnknPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlckRyb3Bkb3duTWVudUFycm93UHJvcHMgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICBoYXNTaG93bjogYm9vbGVhbjtcbiAgdG9nZ2xlPzogRHJvcGRvd25Db250ZXh0VmFsdWVbJ3RvZ2dsZSddO1xuICBwb3BwZXI6IFVzZVBvcHBlclN0YXRlIHwgbnVsbDtcbiAgYXJyb3dQcm9wczogUGFydGlhbDxVc2VyRHJvcGRvd25NZW51QXJyb3dQcm9wcz47XG59XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHt9O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZmxpcCBBdXRvbWF0aWNhbGx5IGFkanVzdCB0aGUgbWVudSBgZHJvcGAgcG9zaXRpb24gYmFzZWQgb24gdmlld3BvcnQgZWRnZSBkZXRlY3Rpb25cbiAqIEBwYXJhbSB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9ucy5vZmZzZXQgRGVmaW5lIGFuIG9mZnNldCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBNZW51IGFuZCB0aGUgVG9nZ2xlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuc2hvdyBEaXNwbGF5IHRoZSBtZW51IG1hbnVhbGx5LCBpZ25vcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgYERyb3Bkb3duYFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnVzZVBvcHBlciBvcHQgaW4vb3V0IG9mIHVzaW5nIFBvcHBlckpTIHRvIHBvc2l0aW9uIG1lbnVzLiBXaGVuIGRpc2FibGVkIHlvdSBtdXN0IHBvc2l0aW9uIGl0IHlvdXJzZWxmLlxuICogQHBhcmFtIHtzdHJpbmd9ICBvcHRpb25zLnJvb3RDbG9zZUV2ZW50IFRoZSBwb2ludGVyIGV2ZW50IHRvIGxpc3RlbiBmb3Igd2hlbiBkZXRlcm1pbmluZyBcImNsaWNrcyBvdXRzaWRlXCIgdGhlIG1lbnUgZm9yIHRyaWdnZXJpbmcgYSBjbG9zZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucy5wb3BwZXJDb25maWcgT3B0aW9ucyBwYXNzZWQgdG8gdGhlIFtgdXNlUG9wcGVyYF0oL2FwaS91c2VQb3BwZXIpIGhvb2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93bk1lbnUob3B0aW9uczogVXNlRHJvcGRvd25NZW51T3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KERyb3Bkb3duQ29udGV4dCk7XG5cbiAgY29uc3QgW2Fycm93RWxlbWVudCwgYXR0YWNoQXJyb3dSZWZdID0gdXNlQ2FsbGJhY2tSZWY8RWxlbWVudD4oKTtcblxuICBjb25zdCBoYXNTaG93blJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIGZsaXAsXG4gICAgb2Zmc2V0LFxuICAgIHJvb3RDbG9zZUV2ZW50LFxuICAgIGZpeGVkID0gZmFsc2UsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRPdmVycmlkZSxcbiAgICBwb3BwZXJDb25maWcgPSB7fSxcbiAgICBlbmFibGVFdmVudExpc3RlbmVycyA9IHRydWUsXG4gICAgdXNlUG9wcGVyOiBzaG91bGRVc2VQb3BwZXIgPSAhIWNvbnRleHQsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHNob3cgPSBjb250ZXh0Py5zaG93ID09IG51bGwgPyAhIW9wdGlvbnMuc2hvdyA6IGNvbnRleHQuc2hvdztcblxuICBpZiAoc2hvdyAmJiAhaGFzU2hvd25SZWYuY3VycmVudCkge1xuICAgIGhhc1Nob3duUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQgfCBFdmVudCkgPT4ge1xuICAgIGNvbnRleHQ/LnRvZ2dsZShmYWxzZSwgZSk7XG4gIH07XG5cbiAgY29uc3QgeyBwbGFjZW1lbnQsIHNldE1lbnUsIG1lbnVFbGVtZW50LCB0b2dnbGVFbGVtZW50IH0gPSBjb250ZXh0IHx8IHt9O1xuXG4gIGNvbnN0IHBvcHBlciA9IHVzZVBvcHBlcihcbiAgICB0b2dnbGVFbGVtZW50LFxuICAgIG1lbnVFbGVtZW50LFxuICAgIG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcoe1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRPdmVycmlkZSB8fCBwbGFjZW1lbnQgfHwgJ2JvdHRvbS1zdGFydCcsXG4gICAgICBlbmFibGVkOiBzaG91bGRVc2VQb3BwZXIsXG4gICAgICBlbmFibGVFdmVudHM6IGVuYWJsZUV2ZW50TGlzdGVuZXJzID09IG51bGwgPyBzaG93IDogZW5hYmxlRXZlbnRMaXN0ZW5lcnMsXG4gICAgICBvZmZzZXQsXG4gICAgICBmbGlwLFxuICAgICAgZml4ZWQsXG4gICAgICBhcnJvd0VsZW1lbnQsXG4gICAgICBwb3BwZXJDb25maWcsXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgbWVudVByb3BzOiBVc2VyRHJvcGRvd25NZW51UHJvcHMgPSB7XG4gICAgcmVmOiBzZXRNZW51IHx8IG5vb3AsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRvZ2dsZUVsZW1lbnQ/LmlkLFxuICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICBzdHlsZTogcG9wcGVyLnN0eWxlcy5wb3BwZXIgYXMgYW55LFxuICB9O1xuXG4gIGNvbnN0IG1ldGFkYXRhOiBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSA9IHtcbiAgICBzaG93LFxuICAgIHBsYWNlbWVudCxcbiAgICBoYXNTaG93bjogaGFzU2hvd25SZWYuY3VycmVudCxcbiAgICB0b2dnbGU6IGNvbnRleHQ/LnRvZ2dsZSxcbiAgICBwb3BwZXI6IHNob3VsZFVzZVBvcHBlciA/IHBvcHBlciA6IG51bGwsXG4gICAgYXJyb3dQcm9wczogc2hvdWxkVXNlUG9wcGVyXG4gICAgICA/IHtcbiAgICAgICAgICByZWY6IGF0dGFjaEFycm93UmVmLFxuICAgICAgICAgIC4uLnBvcHBlci5hdHRyaWJ1dGVzLmFycm93LFxuICAgICAgICAgIHN0eWxlOiBwb3BwZXIuc3R5bGVzLmFycm93IGFzIGFueSxcbiAgICAgICAgfVxuICAgICAgOiB7fSxcbiAgfTtcblxuICB1c2VSb290Q2xvc2UobWVudUVsZW1lbnQsIGhhbmRsZUNsb3NlLCB7XG4gICAgY2xpY2tUcmlnZ2VyOiByb290Q2xvc2VFdmVudCxcbiAgICBkaXNhYmxlZDogIXNob3csXG4gIH0pO1xuXG4gIHJldHVybiBbbWVudVByb3BzLCBtZXRhZGF0YV0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGEgTWVudSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgc2hvdzogYm9vbGVhbixcbiAgICogICBjbG9zZTogKD9TeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICogICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICogICB1cGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIGFyaWEtbGFiZWxsZWRieTogP3N0cmluZ1xuICAgKiAgIH0sXG4gICAqICAgYXJyb3dQcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIHZpc2libGUgc3RhdGUgb2YgdGhlIG1lbnUsIGdlbmVyYWxseSB0aGlzIGlzXG4gICAqIHByb3ZpZGVkIGJ5IHRoZSBwYXJlbnQgYERyb3Bkb3duYCBjb21wb25lbnQsXG4gICAqIGJ1dCBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYXMgYSBwcm9wIGRpcmVjdGx5LlxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBQb3BwZXJKUyBwbGFjZW1lbnQgZm9yIHBvc2l0aW9uaW5nIHRoZSBEcm9wZG93biBtZW51IGluIHJlbGF0aW9uIHRvIGl0J3MgVG9nZ2xlLlxuICAgKiBHZW5lcmFsbHkgdGhpcyBpcyBwcm92aWRlZCBieSB0aGUgcGFyZW50IGBEcm9wZG93bmAgY29tcG9uZW50LFxuICAgKiBidXQgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGFzIGEgcHJvcCBkaXJlY3RseS5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKHBsYWNlbWVudHMpLFxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBQb3BwZXIuanMgYGZsaXBgIG1vZGlmaWVyLCBhbGxvd2luZyB0aGUgRHJvcGRvd24gdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yIHRvZ2dsZS5cbiAgICogUmVmZXIgdG8gdGhlIFtmbGlwIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9wb3BwZXItZG9jdW1lbnRhdGlvbi5odG1sI21vZGlmaWVycy4uZmxpcC5lbmFibGVkKSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmbGlwOiBQcm9wVHlwZXMuYm9vbCxcblxuICB1c2VQb3BwZXI6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgZmFsc2VdKSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgcG9wcGVyIG9wdGlvbnMgYW5kIHByb3BzIHBhc3NlZCBkaXJlY3RseSB0byByZWFjdC1wb3BwZXIncyBQb3BwZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcG9wcGVyQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBldmVudCB1c2VkIGJ5IFJvb3RDbG9zZVdyYXBwZXIuXG4gICAqL1xuICByb290Q2xvc2VFdmVudDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlUG9wcGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bk1lbnVQcm9wcyBleHRlbmRzIFVzZURyb3Bkb3duTWVudU9wdGlvbnMge1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBVc2VyRHJvcGRvd25NZW51UHJvcHMsXG4gICAgbWV0YTogVXNlRHJvcGRvd25NZW51TWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEFsc28gZXhwb3J0ZWQgYXMgYDxEcm9wZG93bi5NZW51PmAgZnJvbSBgRHJvcGRvd25gLlxuICpcbiAqIEBkaXNwbGF5TmFtZSBEcm9wZG93bk1lbnVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBjaGlsZHJlbiwgLi4ub3B0aW9ucyB9OiBEcm9wZG93bk1lbnVQcm9wcykge1xuICBjb25zdCBbcHJvcHMsIG1ldGFdID0gdXNlRHJvcGRvd25NZW51KG9wdGlvbnMpO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbihwcm9wcywgbWV0YSl9PC8+O1xufVxuXG5Ecm9wZG93bk1lbnUuZGlzcGxheU5hbWUgPSAnRHJvcGRvd25NZW51JztcblxuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkRyb3Bkb3duTWVudS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbi8qKiBAY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnU7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VTU1JTYWZlSWQgfSBmcm9tICdAcmVhY3QtYXJpYS9zc3InO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0LCB7IERyb3Bkb3duQ29udGV4dFZhbHVlIH0gZnJvbSAnLi9Ecm9wZG93bkNvbnRleHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICBpZDogc3RyaW5nO1xuICByZWY6IERyb3Bkb3duQ29udGV4dFZhbHVlWydzZXRUb2dnbGUnXTtcbiAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG4gICdhcmlhLWhhc3BvcHVwJzogYm9vbGVhbjtcbiAgJ2FyaWEtZXhwYW5kZWQnOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEge1xuICBzaG93OiBEcm9wZG93bkNvbnRleHRWYWx1ZVsnc2hvdyddO1xuICB0b2dnbGU6IERyb3Bkb3duQ29udGV4dFZhbHVlWyd0b2dnbGUnXTtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vKipcbiAqIFdpcmVzIHVwIERyb3Bkb3duIHRvZ2dsZSBmdW5jdGlvbmFsaXR5LCByZXR1cm5pbmcgYSBzZXQgYSBwcm9wcyB0byBhdHRhY2hcbiAqIHRvIHRoZSBlbGVtZW50IHRoYXQgZnVuY3Rpb25zIGFzIHRoZSBkcm9wZG93biB0b2dnbGUgKGdlbmVyYWxseSBhIGJ1dHRvbikuXG4gKlxuICogQG1lbWJlck9mIERyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93blRvZ2dsZSgpOiBbXG4gIFVzZURyb3Bkb3duVG9nZ2xlUHJvcHMsXG4gIFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG5dIHtcbiAgY29uc3QgaWQgPSB1c2VTU1JTYWZlSWQoKTtcbiAgY29uc3QgeyBzaG93ID0gZmFsc2UsIHRvZ2dsZSA9IG5vb3AsIHNldFRvZ2dsZSB9ID1cbiAgICB1c2VDb250ZXh0KERyb3Bkb3duQ29udGV4dCkgfHwge307XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHRvZ2dsZSghc2hvdywgZSk7XG4gICAgfSxcbiAgICBbc2hvdywgdG9nZ2xlXSxcbiAgKTtcblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkLFxuICAgICAgcmVmOiBzZXRUb2dnbGUgfHwgbm9vcCxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiAhIXNob3csXG4gICAgfSxcbiAgICB7IHNob3csIHRvZ2dsZSB9LFxuICBdO1xufVxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIHJlbmRlciBwcm9wIHRoYXQgcmV0dXJucyBhIFRvZ2dsZSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi4gVXNlXG4gICAqIHRoZSBgb25Ub2dnbGVgIGFyZ3VtZW50IHRvIHRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZFxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIHRvZ2dsZTogKHNob3c6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIGFyaWEtaGFzcG9wdXA6IHRydWVcbiAgICogICAgIGFyaWEtZXhwYW5kZWQ6IGJvb2xlYW5cbiAgICogICB9LFxuICAgKiB9KSA9PiBSZWFjdC5FbGVtZW50fVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duVG9nZ2xlUHJvcHMge1xuICBjaGlsZHJlbjogKFxuICAgIHByb3BzOiBVc2VEcm9wZG93blRvZ2dsZVByb3BzLFxuICAgIG1ldGE6IFVzZURyb3Bkb3duVG9nZ2xlTWV0YWRhdGEsXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIEFsc28gZXhwb3J0ZWQgYXMgYDxEcm9wZG93bi5Ub2dnbGU+YCBmcm9tIGBEcm9wZG93bmAuXG4gKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duVG9nZ2xlXG4gKiBAbWVtYmVyT2YgRHJvcGRvd25cbiAqL1xuZnVuY3Rpb24gRHJvcGRvd25Ub2dnbGUoeyBjaGlsZHJlbiB9OiBEcm9wZG93blRvZ2dsZVByb3BzKSB7XG4gIGNvbnN0IFtwcm9wcywgbWV0YV0gPSB1c2VEcm9wZG93blRvZ2dsZSgpO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbihwcm9wcywgbWV0YSl9PC8+O1xufVxuXG5Ecm9wZG93blRvZ2dsZS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93blRvZ2dsZSc7XG5Ecm9wZG93blRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbi8qKiBAY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blRvZ2dsZTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5cbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5cbmltcG9ydCB7IEV2ZW50S2V5LCBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkYXRhQXR0ciB9IGZyb20gJy4vRGF0YUtleSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JdGVtUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEhpZ2hsaWdodCB0aGUgbWVudSBpdGVtIGFzIGFjdGl2ZS5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIG1lbnUgaXRlbSwgbWFraW5nIGl0IHVuc2VsZWN0YWJsZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVmFsdWUgcGFzc2VkIHRvIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIsIHVzZWZ1bCBmb3IgaWRlbnRpZnlpbmcgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbS5cbiAgICovXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEhUTUwgYGhyZWZgIGF0dHJpYnV0ZSBjb3JyZXNwb25kaW5nIHRvIGBhLmhyZWZgLlxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQGRlZmF1bHQgQnV0dG9uICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG59O1xuXG5pbnRlcmZhY2UgVXNlRHJvcGRvd25JdGVtT3B0aW9ucyB7XG4gIGtleT86IEV2ZW50S2V5IHwgbnVsbDtcbiAgaHJlZj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZHJvcGRvd24gaXRlbS4gUmV0dXJucyBhIHNldCBvZiBwcm9wcyBmb3IgdGhlIGRyb3Bkb3duIGl0ZW0gY29tcG9uZW50XG4gKiBpbmNsdWRpbmcgYW4gYG9uQ2xpY2tgIGhhbmRsZXIgdGhhdCBwcmV2ZW50cyBzZWxlY3Rpb24gd2hlbiB0aGUgaXRlbSBpcyBkaXNhYmxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcGRvd25JdGVtKHtcbiAga2V5LFxuICBocmVmLFxuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufTogVXNlRHJvcGRvd25JdGVtT3B0aW9ucykge1xuICBjb25zdCBvblNlbGVjdEN0eCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcblxuICBjb25zdCB7IGFjdGl2ZUtleSB9ID0gbmF2Q29udGV4dCB8fCB7fTtcbiAgY29uc3QgZXZlbnRLZXkgPSBtYWtlRXZlbnRLZXkoa2V5LCBocmVmKTtcblxuICBhY3RpdmUgPVxuICAgIGFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsXG4gICAgICA/IG1ha2VFdmVudEtleShhY3RpdmVLZXkpID09PSBldmVudEtleVxuICAgICAgOiBhY3RpdmU7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VFdmVudENhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgb25DbGljaz8uKGV2ZW50KTtcblxuICAgIGlmIChvblNlbGVjdEN0eCAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgb25TZWxlY3RDdHgoZXZlbnRLZXksIGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHVuZGVmaW5lZCxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogYWN0aXZlLFxuICAgICAgW2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyldOiAnJyxcbiAgICB9LFxuICAgIHsgYWN0aXZlIH0sXG4gIF0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IERyb3Bkb3duSXRlbTogRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQ8XG4gIHR5cGVvZiBCdXR0b24sXG4gIERyb3Bkb3duSXRlbVByb3BzXG4+ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGV2ZW50S2V5LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgICAgYXM6IENvbXBvbmVudCA9IEJ1dHRvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfTogRHJvcGRvd25JdGVtUHJvcHMsXG4gICAgcmVmLFxuICApID0+IHtcbiAgICBjb25zdCBbZHJvcGRvd25JdGVtUHJvcHNdID0gdXNlRHJvcGRvd25JdGVtKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgYWN0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIFwiVFMyNjA0OiBKU1ggZWxlbWVudCB0eXBlICdDb21wb25lbnQnIGRvZXMgbm90IGhhdmUgYW55IGNvbnN0cnVjdCBvciBjYWxsIHNpZ25hdHVyZXMuXCJcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSByZWY9e3JlZn0gey4uLmRyb3Bkb3duSXRlbVByb3BzfSAvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5Ecm9wZG93bkl0ZW0uZGlzcGxheU5hbWUgPSAnRHJvcGRvd25JdGVtJztcbkRyb3Bkb3duSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50S2V5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBOYXZDb250ZXh0VHlwZSB7XG4gIHJvbGU/OiBzdHJpbmc7IC8vIHVzZWQgYnkgTmF2SXRlbSB0byBkZXRlcm1pbmUgaXQncyByb2xlXG4gIGFjdGl2ZUtleTogRXZlbnRLZXkgfCBudWxsO1xuICBnZXRDb250cm9sbGVkSWQ6IChrZXk6IEV2ZW50S2V5IHwgbnVsbCkgPT4gc3RyaW5nO1xuICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5IHwgbnVsbCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBOYXZDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxOYXZDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuTmF2Q29udGV4dC5kaXNwbGF5TmFtZSA9ICdOYXZDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgTmF2Q29udGV4dDtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGhvb2sgYXJvdW5kIGB1c2VTdGF0ZWAgZGVzaWduZWQgdG8gYmUgcGFpcmVkIHdpdGhcbiAqIHRoZSBjb21wb25lbnQgW2NhbGxiYWNrIHJlZl0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzKSBhcGkuXG4gKiBDYWxsYmFjayByZWZzIGFyZSB1c2VmdWwgb3ZlciBgdXNlUmVmKClgIHdoZW4geW91IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVmIGJlaW5nIHNldFxuICogaW5zdGVhZCBvZiBsYXppbHkgYWNjZXNzaW5nIGl0IGluIGFuIGVmZmVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGlmICghZWxlbWVudCkgcmV0dXJuXG4gKlxuICogICBjb25zdCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoZWxlbWVudClcbiAqXG4gKiAgIHJldHVybiAoKSA9PiB7XG4gKiAgICAgY2FsZW5kYXIuZGVzdHJveSgpXG4gKiAgIH1cbiAqIH0sIFtlbGVtZW50XSlcbiAqXG4gKiByZXR1cm4gPGRpdiByZWY9e2F0dGFjaFJlZn0gLz5cbiAqIGBgYFxuICpcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoKSB7XG4gIHJldHVybiB1c2VTdGF0ZShudWxsKTtcbn0iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuLyoqXG4gKiBSZXR1cm4gdGhlIGFjdGl2ZWx5IGZvY3VzZWQgZWxlbWVudCBzYWZlbHkuXG4gKlxuICogQHBhcmFtIGRvYyB0aGUgZG9jdW1lbnQgdG8gY2hlY2xcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmVFbGVtZW50KGRvYykge1xuICBpZiAoZG9jID09PSB2b2lkIDApIHtcbiAgICBkb2MgPSBvd25lckRvY3VtZW50KCk7XG4gIH1cblxuICAvLyBTdXBwb3J0OiBJRSA5IG9ubHlcbiAgLy8gSUU5IHRocm93cyBhbiBcIlVuc3BlY2lmaWVkIGVycm9yXCIgYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgZnJvbSBhbiA8aWZyYW1lPlxuICB0cnkge1xuICAgIHZhciBhY3RpdmUgPSBkb2MuYWN0aXZlRWxlbWVudDsgLy8gSUUxMSByZXR1cm5zIGEgc2VlbWluZ2x5IGVtcHR5IG9iamVjdCBpbiBzb21lIGNhc2VzIHdoZW4gYWNjZXNzaW5nXG4gICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBmcm9tIGFuIDxpZnJhbWU+XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhYWN0aXZlLm5vZGVOYW1lKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYWN0aXZlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLyogaWUgdGhyb3dzIGlmIG5vIGFjdGl2ZSBlbGVtZW50ICovXG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmVmIHRoYXQgaXMgaW1tZWRpYXRlbHkgdXBkYXRlZCB3aXRoIHRoZSBuZXcgdmFsdWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIFJlZiB2YWx1ZVxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVcGRhdGVkUmVmKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlUmVmO1xufSIsImltcG9ydCB1c2VVcGRhdGVkUmVmIGZyb20gJy4vdXNlVXBkYXRlZFJlZic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEF0dGFjaCBhIGNhbGxiYWNrIHRoYXQgZmlyZXMgd2hlbiBhIGNvbXBvbmVudCB1bm1vdW50c1xuICpcbiAqIEBwYXJhbSBmbiBIYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2lsbFVubW91bnQoZm4pIHtcbiAgdmFyIG9uVW5tb3VudCA9IHVzZVVwZGF0ZWRSZWYoZm4pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25Vbm1vdW50LmN1cnJlbnQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59IiwiaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyBcIiBcIiArIGNsYXNzTmFtZSk7XG59IiwiZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGNsYXNzVG9SZW1vdmUgKyBcIig/OlxcXFxzfCQpXCIsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xuICB9XG59IiwiaW1wb3J0IGNhblVzZURPTSBmcm9tICcuL2NhblVzZURPTSc7XG52YXIgc2l6ZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbGJhclNpemUocmVjYWxjKSB7XG4gIGlmICghc2l6ZSAmJiBzaXplICE9PSAwIHx8IHJlY2FsYykge1xuICAgIGlmIChjYW5Vc2VET00pIHtcbiAgICAgIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICAgICAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgICAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2l6ZTtcbn0iLCJpbXBvcnQgaXNXaW5kb3cgZnJvbSAnZG9tLWhlbHBlcnMvaXNXaW5kb3cnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudCc7XG5cbmZ1bmN0aW9uIGlzQm9keShub2RlOiBFbGVtZW50KTogbm9kZSBpcyBIVE1MQm9keUVsZW1lbnQge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2JvZHknO1xufVxuXG5mdW5jdGlvbiBib2R5SXNPdmVyZmxvd2luZyhub2RlOiBFbGVtZW50IHwgRG9jdW1lbnQgfCBXaW5kb3cpIHtcbiAgY29uc3QgZG9jID0gaXNXaW5kb3cobm9kZSkgPyBvd25lckRvY3VtZW50KCkgOiBvd25lckRvY3VtZW50KG5vZGUgYXMgRWxlbWVudCk7XG4gIGNvbnN0IHdpbiA9IGlzV2luZG93KG5vZGUpIHx8IGRvYy5kZWZhdWx0VmlldyE7XG5cbiAgcmV0dXJuIGRvYy5ib2R5LmNsaWVudFdpZHRoIDwgd2luLmlubmVyV2lkdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyOiBFbGVtZW50KSB7XG4gIGNvbnN0IHdpbiA9IGlzV2luZG93KGNvbnRhaW5lcik7XG4gIHJldHVybiB3aW4gfHwgaXNCb2R5KGNvbnRhaW5lcilcbiAgICA/IGJvZHlJc092ZXJmbG93aW5nKGNvbnRhaW5lcilcbiAgICA6IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xufVxuIiwiY29uc3QgQkxBQ0tMSVNUID0gWyd0ZW1wbGF0ZScsICdzY3JpcHQnLCAnc3R5bGUnXTtcblxuY29uc3QgaXNIaWRhYmxlID0gKHsgbm9kZVR5cGUsIHRhZ05hbWUgfTogRWxlbWVudCkgPT5cbiAgbm9kZVR5cGUgPT09IDEgJiYgQkxBQ0tMSVNULmluZGV4T2YodGFnTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTE7XG5cbmNvbnN0IHNpYmxpbmdzID0gKFxuICBjb250YWluZXI6IEVsZW1lbnQsXG4gIGV4Y2x1ZGU6IEVsZW1lbnRbXSxcbiAgY2I6IChlbDogRWxlbWVudCkgPT4gYW55LFxuKSA9PiB7XG4gIFtdLmZvckVhY2guY2FsbChjb250YWluZXIuY2hpbGRyZW4sIChub2RlKSA9PiB7XG4gICAgaWYgKGV4Y2x1ZGUuaW5kZXhPZihub2RlKSA9PT0gLTEgJiYgaXNIaWRhYmxlKG5vZGUpKSB7XG4gICAgICBjYihub2RlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyaWFIaWRkZW4oaGlkZTogYm9vbGVhbiwgbm9kZTogRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgaWYgKCFub2RlKSByZXR1cm47XG4gIGlmIChoaWRlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgU2libGluZ0V4Y2x1c2lvbnMge1xuICBkaWFsb2c6IEVsZW1lbnQ7XG4gIGJhY2tkcm9wOiBFbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVTaWJsaW5ncyhcbiAgY29udGFpbmVyOiBFbGVtZW50LFxuICB7IGRpYWxvZywgYmFja2Ryb3AgfTogU2libGluZ0V4Y2x1c2lvbnMsXG4pIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBbZGlhbG9nLCBiYWNrZHJvcF0sIChub2RlKSA9PiBhcmlhSGlkZGVuKHRydWUsIG5vZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWJsaW5ncyhcbiAgY29udGFpbmVyOiBFbGVtZW50LFxuICB7IGRpYWxvZywgYmFja2Ryb3AgfTogU2libGluZ0V4Y2x1c2lvbnMsXG4pIHtcbiAgc2libGluZ3MoY29udGFpbmVyLCBbZGlhbG9nLCBiYWNrZHJvcF0sIChub2RlKSA9PiBhcmlhSGlkZGVuKGZhbHNlLCBub2RlKSk7XG59XG4iLCJpbXBvcnQgYWRkQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL3JlbW92ZUNsYXNzJztcbmltcG9ydCBjc3MgZnJvbSAnZG9tLWhlbHBlcnMvY3NzJztcbmltcG9ydCBnZXRTY3JvbGxiYXJTaXplIGZyb20gJ2RvbS1oZWxwZXJzL3Njcm9sbGJhclNpemUnO1xuXG5pbXBvcnQgaXNPdmVyZmxvd2luZyBmcm9tICcuL2lzT3ZlcmZsb3dpbmcnO1xuaW1wb3J0IHsgYXJpYUhpZGRlbiwgaGlkZVNpYmxpbmdzLCBzaG93U2libGluZ3MgfSBmcm9tICcuL21hbmFnZUFyaWFIaWRkZW4nO1xuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZjxUPihhcnI6IFRbXSwgY2I6IChpdGVtOiBULCBpZHg6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICBsZXQgaWR4ID0gLTE7XG4gIGFyci5zb21lKChkLCBpKSA9PiB7XG4gICAgaWYgKGNiKGQsIGkpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxJbnN0YW5jZSB7XG4gIGRpYWxvZzogRWxlbWVudDtcbiAgYmFja2Ryb3A6IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbnRhaW5lclN0YXRlID0gUmVjb3JkPHN0cmluZywgYW55PiAmIHtcbiAgaXNPdmVyZmxvd2luZz86IGJvb2xlYW47XG4gIHN0eWxlPzogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjtcbiAgbW9kYWxzOiBNb2RhbEluc3RhbmNlW107XG59O1xuLyoqXG4gKiBQcm9wZXIgc3RhdGUgbWFuYWdlbWVudCBmb3IgY29udGFpbmVycyBhbmQgdGhlIG1vZGFscyBpbiB0aG9zZSBjb250YWluZXJzLlxuICpcbiAqIEBpbnRlcm5hbCBVc2VkIGJ5IHRoZSBNb2RhbCB0byBlbnN1cmUgcHJvcGVyIHN0eWxpbmcgb2YgY29udGFpbmVycy5cbiAqL1xuY2xhc3MgTW9kYWxNYW5hZ2VyIHtcbiAgcmVhZG9ubHkgaGlkZVNpYmxpbmdOb2RlczogYm9vbGVhbjtcblxuICByZWFkb25seSBoYW5kbGVDb250YWluZXJPdmVyZmxvdzogYm9vbGVhbjtcblxuICByZWFkb25seSBpc1JUTDogYm9vbGVhbjtcblxuICByZWFkb25seSBtb2RhbHM6IE1vZGFsSW5zdGFuY2VbXTtcblxuICByZWFkb25seSBjb250YWluZXJzOiBIVE1MRWxlbWVudFtdO1xuXG4gIHJlYWRvbmx5IGRhdGE6IENvbnRhaW5lclN0YXRlW107XG5cbiAgcmVhZG9ubHkgc2Nyb2xsYmFyU2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBoaWRlU2libGluZ05vZGVzID0gdHJ1ZSxcbiAgICBoYW5kbGVDb250YWluZXJPdmVyZmxvdyA9IHRydWUsXG4gICAgaXNSVEwgPSBmYWxzZSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5oaWRlU2libGluZ05vZGVzID0gaGlkZVNpYmxpbmdOb2RlcztcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3c7XG4gICAgdGhpcy5pc1JUTCA9IGlzUlRMO1xuICAgIHRoaXMubW9kYWxzID0gW107XG4gICAgdGhpcy5jb250YWluZXJzID0gW107XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zY3JvbGxiYXJTaXplID0gZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICB9XG5cbiAgaXNDb250YWluZXJPdmVyZmxvd2luZyhtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbdGhpcy5jb250YWluZXJJbmRleEZyb21Nb2RhbChtb2RhbCldO1xuICAgIHJldHVybiBkYXRhID8gZGF0YS5vdmVyZmxvd2luZyA6IGZhbHNlO1xuICB9XG5cbiAgY29udGFpbmVySW5kZXhGcm9tTW9kYWwobW9kYWw6IE1vZGFsSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmluZEluZGV4T2YodGhpcy5kYXRhLCAoZCkgPT4gZC5tb2RhbHMuaW5kZXhPZihtb2RhbCkgIT09IC0xKTtcbiAgfVxuXG4gIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlOiBDb250YWluZXJTdGF0ZSwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHN0eWxlOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+ID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAgIC8vIHdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIGFjdHVhbCBgc3R5bGVgIGhlcmVcbiAgICAvLyBiZWNhdXNlIHdlIHdpbGwgb3ZlcnJpZGUgaXRcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG5cbiAgICBjb250YWluZXJTdGF0ZS5zdHlsZSA9IHtcbiAgICAgIG92ZXJmbG93OiBjb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBbcGFkZGluZ1Byb3BdOiBjb250YWluZXIuc3R5bGVbcGFkZGluZ1Byb3BdLFxuICAgIH07XG5cbiAgICBpZiAoY29udGFpbmVyU3RhdGUub3ZlcmZsb3dpbmcpIHtcbiAgICAgIC8vIHVzZSBjb21wdXRlZCBzdHlsZSwgaGVyZSB0byBnZXQgdGhlIHJlYWwgcGFkZGluZ1xuICAgICAgLy8gdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGhcbiAgICAgIHN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke1xuICAgICAgICBwYXJzZUludChjc3MoY29udGFpbmVyLCBwYWRkaW5nUHJvcCkgfHwgJzAnLCAxMCkgKyB0aGlzLnNjcm9sbGJhclNpemVcbiAgICAgIH1weGA7XG4gICAgfVxuXG4gICAgY3NzKGNvbnRhaW5lciwgc3R5bGUgYXMgYW55KTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlOiBDb250YWluZXJTdGF0ZSwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCBjb250YWluZXJTdGF0ZS5zdHlsZSk7XG4gIH1cblxuICBhZGQobW9kYWw6IE1vZGFsSW5zdGFuY2UsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZT86IHN0cmluZykge1xuICAgIGxldCBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuICAgIGNvbnN0IGNvbnRhaW5lcklkeCA9IHRoaXMuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XG5cbiAgICBpZiAobW9kYWxJZHggIT09IC0xKSB7XG4gICAgICByZXR1cm4gbW9kYWxJZHg7XG4gICAgfVxuXG4gICAgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5sZW5ndGg7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG5cbiAgICBpZiAodGhpcy5oaWRlU2libGluZ05vZGVzKSB7XG4gICAgICBoaWRlU2libGluZ3MoY29udGFpbmVyLCBtb2RhbCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lcklkeCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZGF0YVtjb250YWluZXJJZHhdLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbW9kYWxzOiBbbW9kYWxdLFxuICAgICAgLy8gcmlnaHQgbm93IG9ubHkgdGhlIGZpcnN0IG1vZGFsIG9mIGEgY29udGFpbmVyIHdpbGwgaGF2ZSBpdHMgY2xhc3NlcyBhcHBsaWVkXG4gICAgICBjbGFzc2VzOiBjbGFzc05hbWUgPyBjbGFzc05hbWUuc3BsaXQoL1xccysvKSA6IFtdLFxuICAgICAgb3ZlcmZsb3dpbmc6IGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMuc2V0Q29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBkYXRhLmNsYXNzZXMuZm9yRWFjaChhZGRDbGFzcy5iaW5kKG51bGwsIGNvbnRhaW5lcikpO1xuXG4gICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICB0aGlzLmRhdGEucHVzaChkYXRhKTtcblxuICAgIHJldHVybiBtb2RhbElkeDtcbiAgfVxuXG4gIHJlbW92ZShtb2RhbDogTW9kYWxJbnN0YW5jZSkge1xuICAgIGNvbnN0IG1vZGFsSWR4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cbiAgICBpZiAobW9kYWxJZHggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVySWR4ID0gdGhpcy5jb250YWluZXJJbmRleEZyb21Nb2RhbChtb2RhbCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtjb250YWluZXJJZHhdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJZHhdO1xuXG4gICAgZGF0YS5tb2RhbHMuc3BsaWNlKGRhdGEubW9kYWxzLmluZGV4T2YobW9kYWwpLCAxKTtcblxuICAgIHRoaXMubW9kYWxzLnNwbGljZShtb2RhbElkeCwgMSk7XG5cbiAgICAvLyBpZiB0aGF0IHdhcyB0aGUgbGFzdCBtb2RhbCBpbiBhIGNvbnRhaW5lcixcbiAgICAvLyBjbGVhbiB1cCB0aGUgY29udGFpbmVyXG4gICAgaWYgKGRhdGEubW9kYWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGF0YS5jbGFzc2VzLmZvckVhY2gocmVtb3ZlQ2xhc3MuYmluZChudWxsLCBjb250YWluZXIpKTtcblxuICAgICAgaWYgKHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXJTdHlsZShkYXRhLCBjb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oaWRlU2libGluZ05vZGVzKSB7XG4gICAgICAgIHNob3dTaWJsaW5ncyhjb250YWluZXIsIG1vZGFsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICAgIHRoaXMuZGF0YS5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGlkZVNpYmxpbmdOb2Rlcykge1xuICAgICAgLy8gb3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIFNSXG4gICAgICBjb25zdCB7IGJhY2tkcm9wLCBkaWFsb2cgfSA9IGRhdGEubW9kYWxzW2RhdGEubW9kYWxzLmxlbmd0aCAtIDFdO1xuICAgICAgYXJpYUhpZGRlbihmYWxzZSwgZGlhbG9nKTtcbiAgICAgIGFyaWFIaWRkZW4oZmFsc2UsIGJhY2tkcm9wKTtcbiAgICB9XG4gIH1cblxuICBpc1RvcE1vZGFsKG1vZGFsOiBNb2RhbEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhdGhpcy5tb2RhbHMubGVuZ3RoICYmIHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxNYW5hZ2VyO1xuIiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBET01Db250YWluZXI8VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+ID1cbiAgfCBUXG4gIHwgUmVhY3QuUmVmT2JqZWN0PFQ+XG4gIHwgbnVsbFxuICB8ICgoKSA9PiBUIHwgUmVhY3QuUmVmT2JqZWN0PFQ+IHwgbnVsbCk7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlQ29udGFpbmVyUmVmID0gPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oXG4gIHJlZjogRE9NQ29udGFpbmVyPFQ+IHwgdW5kZWZpbmVkLFxuKTogVCB8IEhUTUxCb2R5RWxlbWVudCB8IG51bGwgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGlmIChyZWYgPT0gbnVsbCkgcmV0dXJuIG93bmVyRG9jdW1lbnQoKS5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudDtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHJlZiA9IHJlZigpO1xuXG4gIGlmIChyZWYgJiYgJ2N1cnJlbnQnIGluIHJlZikgcmVmID0gcmVmLmN1cnJlbnQ7XG4gIGlmIChyZWY/Lm5vZGVUeXBlKSByZXR1cm4gcmVmIHx8IG51bGw7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXYWl0Rm9yRE9NUmVmPFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PihcbiAgcmVmOiBET01Db250YWluZXI8VD4gfCB1bmRlZmluZWQsXG4gIG9uUmVzb2x2ZWQ/OiAoZWxlbWVudDogVCB8IEhUTUxCb2R5RWxlbWVudCkgPT4gdm9pZCxcbikge1xuICBjb25zdCBbcmVzb2x2ZWRSZWYsIHNldFJlZl0gPSB1c2VTdGF0ZSgoKSA9PiByZXNvbHZlQ29udGFpbmVyUmVmKHJlZikpO1xuXG4gIGlmICghcmVzb2x2ZWRSZWYpIHtcbiAgICBjb25zdCBlYXJseVJlZiA9IHJlc29sdmVDb250YWluZXJSZWYocmVmKTtcbiAgICBpZiAoZWFybHlSZWYpIHNldFJlZihlYXJseVJlZik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvblJlc29sdmVkICYmIHJlc29sdmVkUmVmKSB7XG4gICAgICBvblJlc29sdmVkKHJlc29sdmVkUmVmKTtcbiAgICB9XG4gIH0sIFtvblJlc29sdmVkLCByZXNvbHZlZFJlZl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV4dFJlZiA9IHJlc29sdmVDb250YWluZXJSZWYocmVmKTtcbiAgICBpZiAobmV4dFJlZiAhPT0gcmVzb2x2ZWRSZWYpIHtcbiAgICAgIHNldFJlZihuZXh0UmVmKTtcbiAgICB9XG4gIH0sIFtyZWYsIHJlc29sdmVkUmVmXSk7XG5cbiAgcmV0dXJuIHJlc29sdmVkUmVmO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9wcm9wLXR5cGVzICovXG5cbmltcG9ydCBhY3RpdmVFbGVtZW50IGZyb20gJ2RvbS1oZWxwZXJzL2FjdGl2ZUVsZW1lbnQnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ2RvbS1oZWxwZXJzL2NvbnRhaW5zJztcbmltcG9ydCBjYW5Vc2VET00gZnJvbSAnZG9tLWhlbHBlcnMvY2FuVXNlRE9NJztcbmltcG9ydCBsaXN0ZW4gZnJvbSAnZG9tLWhlbHBlcnMvbGlzdGVuJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICB1c2VTdGF0ZSxcbiAgdXNlUmVmLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgZm9yd2FyZFJlZixcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZU1vdW50ZWQnO1xuaW1wb3J0IHVzZVdpbGxVbm1vdW50IGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVdpbGxVbm1vdW50JztcblxuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tICcuL01vZGFsTWFuYWdlcic7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNhbGxiYWNrcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgbWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG5leHBvcnQgdHlwZSBNb2RhbFRyYW5zaXRpb25Db21wb25lbnQgPSBSZWFjdC5Db21wb25lbnRUeXBlPFxuICB7XG4gICAgaW46IGJvb2xlYW47XG4gICAgYXBwZWFyPzogYm9vbGVhbjtcbiAgICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbiAgfSAmIFRyYW5zaXRpb25DYWxsYmFja3Ncbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyTW9kYWxEaWFsb2dQcm9wcyB7XG4gIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkO1xuICBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdGFiSW5kZXg6IG51bWJlcjtcbiAgcm9sZTogc3RyaW5nO1xuICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEVsZW1lbnQ+O1xuICAnYXJpYS1tb2RhbCc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyTW9kYWxCYWNrZHJvcFByb3BzIHtcbiAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxFbGVtZW50PjtcbiAgb25DbGljazogKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcbn1cblxuLypcbiAgTW9kYWwgcHJvcHMgYXJlIHNwbGl0IGludG8gYSB2ZXJzaW9uIHdpdGggYW5kIHdpdGhvdXQgaW5kZXggc2lnbmF0dXJlIHNvIHRoYXQgeW91IGNhbiBmdWxseSB1c2UgdGhlbSBpbiBhbm90aGVyIHByb2plY3RzXG4gIFRoaXMgaXMgZHVlIHRvIFR5cGVzY3JpcHQgbm90IHBsYXlpbmcgd2VsbCB3aXRoIGluZGV4IHNpbmdhdHVyZXMgZS5nLiB3aGVuIHVzaW5nIE9taXRcbiovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNb2RhbFByb3BzIGV4dGVuZHMgVHJhbnNpdGlvbkNhbGxiYWNrcyB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICByb2xlPzogc3RyaW5nO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICBzaG93PzogYm9vbGVhbjtcbiAgY29udGFpbmVyPzogRE9NQ29udGFpbmVyO1xuICBvblNob3c/OiAoKSA9PiB2b2lkO1xuICBvbkhpZGU/OiAoKSA9PiB2b2lkO1xuICBtYW5hZ2VyPzogTW9kYWxNYW5hZ2VyO1xuICBiYWNrZHJvcD86IHRydWUgfCBmYWxzZSB8ICdzdGF0aWMnO1xuXG4gIHJlbmRlckRpYWxvZz86IChwcm9wczogUmVuZGVyTW9kYWxEaWFsb2dQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlO1xuICByZW5kZXJCYWNrZHJvcD86IChwcm9wczogUmVuZGVyTW9kYWxCYWNrZHJvcFByb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG5cbiAgb25Fc2NhcGVLZXlEb3duPzogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gIG9uQmFja2Ryb3BDbGljaz86IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcbiAgY29udGFpbmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBrZXlib2FyZD86IGJvb2xlYW47XG4gIHRyYW5zaXRpb24/OiBNb2RhbFRyYW5zaXRpb25Db21wb25lbnQ7XG4gIGJhY2tkcm9wVHJhbnNpdGlvbj86IE1vZGFsVHJhbnNpdGlvbkNvbXBvbmVudDtcbiAgYXV0b0ZvY3VzPzogYm9vbGVhbjtcbiAgZW5mb3JjZUZvY3VzPzogYm9vbGVhbjtcbiAgcmVzdG9yZUZvY3VzPzogYm9vbGVhbjtcbiAgcmVzdG9yZUZvY3VzT3B0aW9ucz86IHtcbiAgICBwcmV2ZW50U2Nyb2xsOiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJvcHMgZXh0ZW5kcyBCYXNlTW9kYWxQcm9wcyB7XG4gIFtvdGhlcjogc3RyaW5nXTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICBpZiAoIW1hbmFnZXIpIG1hbmFnZXIgPSBuZXcgTW9kYWxNYW5hZ2VyKCk7XG4gIHJldHVybiBtYW5hZ2VyO1xufVxuXG5mdW5jdGlvbiB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWQ/OiBNb2RhbE1hbmFnZXIpIHtcbiAgY29uc3QgbW9kYWxNYW5hZ2VyID0gcHJvdmlkZWQgfHwgZ2V0TWFuYWdlcigpO1xuXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVmKHtcbiAgICBkaWFsb2c6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gICAgYmFja2Ryb3A6IChudWxsIGFzIGFueSkgYXMgSFRNTEVsZW1lbnQsXG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGFsLmN1cnJlbnQsIHtcbiAgICBhZGQ6IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU/OiBzdHJpbmcpID0+XG4gICAgICBtb2RhbE1hbmFnZXIuYWRkKG1vZGFsLmN1cnJlbnQsIGNvbnRhaW5lciwgY2xhc3NOYW1lKSxcblxuICAgIHJlbW92ZTogKCkgPT4gbW9kYWxNYW5hZ2VyLnJlbW92ZShtb2RhbC5jdXJyZW50KSxcblxuICAgIGlzVG9wTW9kYWw6ICgpID0+IG1vZGFsTWFuYWdlci5pc1RvcE1vZGFsKG1vZGFsLmN1cnJlbnQpLFxuXG4gICAgc2V0RGlhbG9nUmVmOiB1c2VDYWxsYmFjaygocmVmOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgIG1vZGFsLmN1cnJlbnQuZGlhbG9nID0gcmVmITtcbiAgICB9LCBbXSksXG5cbiAgICBzZXRCYWNrZHJvcFJlZjogdXNlQ2FsbGJhY2soKHJlZjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBtb2RhbC5jdXJyZW50LmJhY2tkcm9wID0gcmVmITtcbiAgICB9LCBbXSksXG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGFuZGxlIHtcbiAgZGlhbG9nOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGJhY2tkcm9wOiBIVE1MRWxlbWVudCB8IG51bGw7XG59XG5cbmNvbnN0IE1vZGFsOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBNb2RhbFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxNb2RhbEhhbmRsZT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgc2hvdyA9IGZhbHNlLFxuICAgICAgcm9sZSA9ICdkaWFsb2cnLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGJhY2tkcm9wID0gdHJ1ZSxcbiAgICAgIGtleWJvYXJkID0gdHJ1ZSxcbiAgICAgIG9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uRXNjYXBlS2V5RG93bixcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb24sXG4gICAgICBhdXRvRm9jdXMgPSB0cnVlLFxuICAgICAgZW5mb3JjZUZvY3VzID0gdHJ1ZSxcbiAgICAgIHJlc3RvcmVGb2N1cyA9IHRydWUsXG4gICAgICByZXN0b3JlRm9jdXNPcHRpb25zLFxuICAgICAgcmVuZGVyRGlhbG9nLFxuICAgICAgcmVuZGVyQmFja2Ryb3AgPSAocHJvcHM6IFJlbmRlck1vZGFsQmFja2Ryb3BQcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9IC8+LFxuICAgICAgbWFuYWdlcjogcHJvdmlkZWRNYW5hZ2VyLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXJSZWYsXG4gICAgICBjb250YWluZXJDbGFzc05hbWUsXG4gICAgICBvblNob3csXG4gICAgICBvbkhpZGUgPSAoKSA9PiB7fSxcblxuICAgICAgb25FeGl0LFxuICAgICAgb25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcsXG4gICAgICBvbkVudGVyLFxuICAgICAgb25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZCxcblxuICAgICAgLi4ucmVzdFxuICAgIH06IE1vZGFsUHJvcHMsXG4gICAgcmVmOiBSZWFjdC5SZWY8TW9kYWxIYW5kbGU+LFxuICApID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKGNvbnRhaW5lclJlZik7XG4gICAgY29uc3QgbW9kYWwgPSB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWRNYW5hZ2VyKTtcblxuICAgIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKTtcbiAgICBjb25zdCBwcmV2U2hvdyA9IHVzZVByZXZpb3VzKHNob3cpO1xuICAgIGNvbnN0IFtleGl0ZWQsIHNldEV4aXRlZF0gPSB1c2VTdGF0ZSghc2hvdyk7XG4gICAgY29uc3QgbGFzdEZvY3VzUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gbW9kYWwsIFttb2RhbF0pO1xuXG4gICAgaWYgKGNhblVzZURPTSAmJiAhcHJldlNob3cgJiYgc2hvdykge1xuICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBhY3RpdmVFbGVtZW50KCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCF0cmFuc2l0aW9uICYmICFzaG93ICYmICFleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHNob3cgJiYgZXhpdGVkKSB7XG4gICAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIG1vZGFsLmFkZChjb250YWluZXIhLCBjb250YWluZXJDbGFzc05hbWUpO1xuXG4gICAgICByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYuY3VycmVudCA9IGxpc3RlbihcbiAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAna2V5ZG93bicsXG4gICAgICAgIGhhbmRsZURvY3VtZW50S2V5RG93bixcbiAgICAgICk7XG5cbiAgICAgIHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYuY3VycmVudCA9IGxpc3RlbihcbiAgICAgICAgZG9jdW1lbnQgYXMgYW55LFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAvLyB0aGUgdGltZW91dCBpcyBuZWNlc3NhcnkgYi9jIHRoaXMgd2lsbCBydW4gYmVmb3JlIHRoZSBuZXcgbW9kYWwgaXMgbW91bnRlZFxuICAgICAgICAvLyBhbmQgc28gc3RlYWxzIGZvY3VzIGZyb20gaXRcbiAgICAgICAgKCkgPT4gc2V0VGltZW91dChoYW5kbGVFbmZvcmNlRm9jdXMpLFxuICAgICAgICB0cnVlLFxuICAgICAgKTtcblxuICAgICAgaWYgKG9uU2hvdykge1xuICAgICAgICBvblNob3coKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b2ZvY3VzIGFmdGVyIG9uU2hvdyB0byBub3QgdHJpZ2dlciBhIGZvY3VzIGV2ZW50IGZvciBwcmV2aW91c1xuICAgICAgLy8gbW9kYWxzIGJlZm9yZSB0aGlzIG9uZSBpcyBzaG93bi5cbiAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50KGRvY3VtZW50KSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kYWwuZGlhbG9nICYmXG4gICAgICAgICAgY3VycmVudEFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBjdXJyZW50QWN0aXZlRWxlbWVudDtcbiAgICAgICAgICBtb2RhbC5kaWFsb2cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlSGlkZSA9IHVzZUV2ZW50Q2FsbGJhY2soKCkgPT4ge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG5cbiAgICAgIHJlbW92ZUtleWRvd25MaXN0ZW5lclJlZi5jdXJyZW50Py4oKTtcbiAgICAgIHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYuY3VycmVudD8uKCk7XG5cbiAgICAgIGlmIChyZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogPD1JRTExIGRvZXNuJ3Qgc3VwcG9ydCBgZm9jdXMoKWAgb24gc3ZnIGVsZW1lbnRzIChSQjogIzkxNylcbiAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQ/LmZvY3VzPy4ocmVzdG9yZUZvY3VzT3B0aW9ucyk7XG4gICAgICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRPRE86IHRyeSBhbmQgY29tYmluZSB0aGVzZSBlZmZlY3RzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LW92ZXJsYXlzL3B1bGwvNzk0I2Rpc2N1c3Npb25fcjQwOTk1NDEyMFxuXG4gICAgLy8gU2hvdyBsb2dpYyB3aGVuOlxuICAgIC8vICAtIHNob3cgaXMgYHRydWVgIF9hbmRfIGBjb250YWluZXJgIGhhcyByZXNvbHZlZFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIXNob3cgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVTaG93KCk7XG4gICAgfSwgW3Nob3csIGNvbnRhaW5lciwgLyogc2hvdWxkIG5ldmVyIGNoYW5nZTogKi8gaGFuZGxlU2hvd10pO1xuXG4gICAgLy8gSGlkZSBjbGVhbnVwIGxvZ2ljIHdoZW46XG4gICAgLy8gIC0gYGV4aXRlZGAgc3dpdGNoZXMgdG8gdHJ1ZVxuICAgIC8vICAtIGNvbXBvbmVudCB1bm1vdW50cztcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKCFleGl0ZWQpIHJldHVybjtcblxuICAgICAgaGFuZGxlSGlkZSgpO1xuICAgIH0sIFtleGl0ZWQsIGhhbmRsZUhpZGVdKTtcblxuICAgIHVzZVdpbGxVbm1vdW50KCgpID0+IHtcbiAgICAgIGhhbmRsZUhpZGUoKTtcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdCBoYW5kbGVFbmZvcmNlRm9jdXMgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmICghZW5mb3JjZUZvY3VzIHx8ICFpc01vdW50ZWQoKSB8fCAhbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50KCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgbW9kYWwuZGlhbG9nICYmXG4gICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgICFjb250YWlucyhtb2RhbC5kaWFsb2csIGN1cnJlbnRBY3RpdmVFbGVtZW50KVxuICAgICAgKSB7XG4gICAgICAgIG1vZGFsLmRpYWxvZy5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQmFja2Ryb3BDbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uQmFja2Ryb3BDbGljaz8uKGUpO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgPT09IHRydWUpIHtcbiAgICAgICAgb25IaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVEb2N1bWVudEtleURvd24gPSB1c2VFdmVudENhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoa2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSAyNyAmJiBtb2RhbC5pc1RvcE1vZGFsKCkpIHtcbiAgICAgICAgb25Fc2NhcGVLZXlEb3duPy4oZSk7XG5cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICBvbkhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZiA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBsaXN0ZW4+IHwgbnVsbD4oKTtcbiAgICBjb25zdCByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgbGlzdGVuPiB8IG51bGw+KCk7XG5cbiAgICBjb25zdCBoYW5kbGVIaWRkZW46IFRyYW5zaXRpb25DYWxsYmFja3NbJ29uRXhpdGVkJ10gPSAoLi4uYXJncykgPT4ge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuICAgICAgb25FeGl0ZWQ/LiguLi5hcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgaWYgKCFjb250YWluZXIgfHwgIShzaG93IHx8IChUcmFuc2l0aW9uICYmICFleGl0ZWQpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGlhbG9nUHJvcHMgPSB7XG4gICAgICByb2xlLFxuICAgICAgcmVmOiBtb2RhbC5zZXREaWFsb2dSZWYsXG4gICAgICAvLyBhcHBhcmVudGx5IG9ubHkgd29ya3Mgb24gdGhlIGRpYWxvZyByb2xlIGVsZW1lbnRcbiAgICAgICdhcmlhLW1vZGFsJzogcm9sZSA9PT0gJ2RpYWxvZycgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgLi4ucmVzdCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdGFiSW5kZXg6IC0xLFxuICAgIH07XG5cbiAgICBsZXQgZGlhbG9nID0gcmVuZGVyRGlhbG9nID8gKFxuICAgICAgcmVuZGVyRGlhbG9nKGRpYWxvZ1Byb3BzKVxuICAgICkgOiAoXG4gICAgICA8ZGl2IHsuLi5kaWFsb2dQcm9wc30+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4hLCB7IHJvbGU6ICdkb2N1bWVudCcgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKFRyYW5zaXRpb24pIHtcbiAgICAgIGRpYWxvZyA9IChcbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgaW49eyEhc2hvd31cbiAgICAgICAgICBvbkV4aXQ9e29uRXhpdH1cbiAgICAgICAgICBvbkV4aXRpbmc9e29uRXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17aGFuZGxlSGlkZGVufVxuICAgICAgICAgIG9uRW50ZXI9e29uRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgICBvbkVudGVyZWQ9e29uRW50ZXJlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkaWFsb2d9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGJhY2tkcm9wRWxlbWVudCA9IG51bGw7XG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICBjb25zdCBCYWNrZHJvcFRyYW5zaXRpb24gPSBiYWNrZHJvcFRyYW5zaXRpb247XG5cbiAgICAgIGJhY2tkcm9wRWxlbWVudCA9IHJlbmRlckJhY2tkcm9wKHtcbiAgICAgICAgcmVmOiBtb2RhbC5zZXRCYWNrZHJvcFJlZixcbiAgICAgICAgb25DbGljazogaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoQmFja2Ryb3BUcmFuc2l0aW9uKSB7XG4gICAgICAgIGJhY2tkcm9wRWxlbWVudCA9IChcbiAgICAgICAgICA8QmFja2Ryb3BUcmFuc2l0aW9uIGFwcGVhciBpbj17ISFzaG93fT5cbiAgICAgICAgICAgIHtiYWNrZHJvcEVsZW1lbnR9XG4gICAgICAgICAgPC9CYWNrZHJvcFRyYW5zaXRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtiYWNrZHJvcEVsZW1lbnR9XG4gICAgICAgICAgICB7ZGlhbG9nfVxuICAgICAgICAgIDwvPixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9LFxuKTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBNb2RhbFxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgRE9NIGVsZW1lbnQsIGEgYHJlZmAgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIE1vZGFsIGlzIGFwcGVuZGVkIHRvIGl0J3MgYGNvbnRhaW5lcmAgZWxlbWVudC5cbiAgICpcbiAgICogRm9yIHRoZSBzYWtlIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIHRoZSBjb250YWluZXIgc2hvdWxkIHVzdWFsbHkgYmUgdGhlIGRvY3VtZW50IGJvZHksIHNvIHRoYXQgdGhlIHJlc3Qgb2YgdGhlXG4gICAqIHBhZ2UgY29udGVudCBjYW4gYmUgcGxhY2VkIGJlaGluZCBhIHZpcnR1YWwgYmFja2Ryb3AgYXMgd2VsbCBhcyBhIHZpc3VhbCBvbmUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTW9kYWwgaXMgb3BlbmluZy5cbiAgICovXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBlaXRoZXIgdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQsIG9yIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIFRoZSBgb25IaWRlYCBjYWxsYmFjayBvbmx5IHNpZ25hbHMgaW50ZW50IGZyb20gdGhlIE1vZGFsLFxuICAgKiB5b3UgbXVzdCBhY3R1YWxseSBzZXQgdGhlIGBzaG93YCBwcm9wIHRvIGBmYWxzZWAgZm9yIHRoZSBNb2RhbCB0byBjbG9zZS5cbiAgICovXG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgYSBiYWNrZHJvcCBjb21wb25lbnQuXG4gICAqL1xuICBiYWNrZHJvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYyddKV0pLFxuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGlhbG9nIGNvbXBvbmVudC4gVXNlZnVsIGZvciBjdXN0b21cbiAgICogcmVuZGVyaW5nLiAqKk5vdGU6KiogdGhlIGNvbXBvbmVudCBzaG91bGQgbWFrZSBzdXJlIHRvIGFwcGx5IHRoZSBwcm92aWRlZCByZWYuXG4gICAqXG4gICAqIGBgYGpzIHN0YXRpY1xuICAgKiByZW5kZXJEaWFsb2c9e3Byb3BzID0+IDxNeURpYWxvZyB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckRpYWxvZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYmFja2Ryb3AgY29tcG9uZW50LiBVc2VmdWwgZm9yIGN1c3RvbVxuICAgKiBiYWNrZHJvcCByZW5kZXJpbmcuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqICByZW5kZXJCYWNrZHJvcD17cHJvcHMgPT4gPE15QmFja2Ryb3Agey4uLnByb3BzfSAvPn1cbiAgICogYGBgXG4gICAqL1xuICByZW5kZXJCYWNrZHJvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSwgaWYgc3BlY2lmaWVkIGluIGBrZXlib2FyZGAsIGlzIHByZXNzZWQuXG4gICAqXG4gICAqIElmIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBrZXlib2FyZCBldmVudCwgY2xvc2luZyB0aGUgbW9kYWwgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wLCBpZiBzcGVjaWZpZWQsIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBvciBzZXQgb2YgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBjb250YWluZXIgd2hlbiB0aGUgbW9kYWwgaXMgb3BlbixcbiAgICogYW5kIHJlbW92ZWQgd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAqL1xuICBjb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZFxuICAgKi9cbiAga2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50IHVzZWRcbiAgICogdG8gY29udHJvbCBhbmltYXRpb25zIGZvciB0aGUgZGlhbG9nIGNvbXBvbmVudC5cbiAgICovXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cEAyLjAuMGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudCB1c2VkXG4gICAqIHRvIGNvbnRyb2wgYW5pbWF0aW9ucyBmb3IgdGhlIGJhY2tkcm9wIGNvbXBvbmVudHMuXG4gICAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb246IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgYXV0b21hdGljYWxseSBzaGlmdCBmb2N1cyB0byBpdHNlbGYgd2hlbiBpdCBvcGVucywgYW5kXG4gICAqIHJlcGxhY2UgaXQgdG8gdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gaXQgY2xvc2VzLiBUaGlzIGFsc29cbiAgICogd29ya3MgY29ycmVjdGx5IHdpdGggYW55IE1vZGFsIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGF1dG9Gb2N1c2AgcHJvcC5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgZmFsc2VgIGFzIGl0IG1ha2VzIHRoZSBNb2RhbCBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBNb2RhbCB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlblxuICAgKi9cbiAgcmVzdG9yZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3B0aW9ucyBwYXNzZWQgdG8gZm9jdXMgZnVuY3Rpb24gd2hlbiBgcmVzdG9yZUZvY3VzYCBpcyBzZXQgdG8gYHRydWVgXG4gICAqXG4gICAqIEBsaW5rICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvZm9jdXMjUGFyYW1ldGVyc1xuICAgKi9cbiAgcmVzdG9yZUZvY3VzT3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwcmV2ZW50U2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTW9kYWwgdHJhbnNpdGlvbnMgaW5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhcyB0aGUgTW9kYWwgYmVnaW5zIHRvIHRyYW5zaXRpb24gaW5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgTW9kYWwgZmluaXNoZXMgdHJhbnNpdGlvbmluZyBpblxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSBNb2RhbCB0cmFuc2l0aW9ucyBvdXRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFzIHRoZSBNb2RhbCBiZWdpbnMgdG8gdHJhbnNpdGlvbiBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBNb2RhbCBmaW5pc2hlcyB0cmFuc2l0aW9uaW5nIG91dFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIE1vZGFsTWFuYWdlciBpbnN0YW5jZSB1c2VkIHRvIHRyYWNrIGFuZCBtYW5hZ2UgdGhlIHN0YXRlIG9mIG9wZW5cbiAgICogTW9kYWxzLiBVc2VmdWwgd2hlbiBjdXN0b21pemluZyBob3cgbW9kYWxzIGludGVyYWN0IHdpdGhpbiBhIGNvbnRhaW5lclxuICAgKi9cbiAgbWFuYWdlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoTW9kYWxNYW5hZ2VyKSxcbn07XG5cbk1vZGFsLmRpc3BsYXlOYW1lID0gJ01vZGFsJztcbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyBhcyBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oTW9kYWwsIHtcbiAgTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG52YXIgdG9GblJlZiA9IGZ1bmN0aW9uIHRvRm5SZWYocmVmKSB7XG4gIHJldHVybiAhcmVmIHx8IHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicgPyByZWYgOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUmVmcyhyZWZBLCByZWZCKSB7XG4gIHZhciBhID0gdG9GblJlZihyZWZBKTtcbiAgdmFyIGIgPSB0b0ZuUmVmKHJlZkIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGEpIGEodmFsdWUpO1xuICAgIGlmIChiKSBiKHZhbHVlKTtcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm5zIGEgc2luZ2xlIGNhbGxiYWNrIHJlZiBjb21wb3NlZCBmcm9tIHR3byBvdGhlciBSZWZzLlxuICpcbiAqIGBgYHRzeFxuICogY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICogICBjb25zdCBbZWxlbWVudCwgYXR0YWNoUmVmXSA9IHVzZUNhbGxiYWNrUmVmPEhUTUxCdXR0b25FbGVtZW50PigpO1xuICogICBjb25zdCBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzKHJlZiwgYXR0YWNoUmVmKTtcbiAqXG4gKiAgIHJldHVybiA8YnV0dG9uIHJlZj17bWVyZ2VkUmVmfSB7Li4ucHJvcHN9Lz5cbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gcmVmQSBBIENhbGxiYWNrIG9yIG11dGFibGUgUmVmXG4gKiBAcGFyYW0gcmVmQiBBIENhbGxiYWNrIG9yIG11dGFibGUgUmVmXG4gKiBAY2F0ZWdvcnkgcmVmc1xuICovXG5cbmZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMocmVmQSwgcmVmQikge1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lcmdlUmVmcyhyZWZBLCByZWZCKTtcbiAgfSwgW3JlZkEsIHJlZkJdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTWVyZ2VkUmVmczsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlQ2FsbGJhY2tSZWYgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWYnO1xuaW1wb3J0IHVzZU1lcmdlZFJlZnMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VQb3BwZXIsIHtcbiAgT2Zmc2V0LFxuICBQbGFjZW1lbnQsXG4gIFN0YXRlLFxuICBVc2VQb3BwZXJPcHRpb25zLFxufSBmcm9tICcuL3VzZVBvcHBlcic7XG5pbXBvcnQgdXNlUm9vdENsb3NlLCB7IFJvb3RDbG9zZU9wdGlvbnMgfSBmcm9tICcuL3VzZVJvb3RDbG9zZSc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiwgeyBET01Db250YWluZXIgfSBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNhbGxiYWNrcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcgZnJvbSAnLi9tZXJnZU9wdGlvbnNXaXRoUG9wcGVyQ29uZmlnJztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL3BvcHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVByb3BzIGV4dGVuZHMgVHJhbnNpdGlvbkNhbGxiYWNrcyB7XG4gIGZsaXA/OiBib29sZWFuO1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnQ7XG4gIG9mZnNldD86IE9mZnNldDtcbiAgY29udGFpbmVyUGFkZGluZz86IG51bWJlcjtcbiAgcG9wcGVyQ29uZmlnPzogT21pdDxVc2VQb3BwZXJPcHRpb25zLCAncGxhY2VtZW50Jz47XG4gIGNvbnRhaW5lcj86IERPTUNvbnRhaW5lcjtcbiAgdGFyZ2V0OiBET01Db250YWluZXI7XG4gIHNob3c/OiBib29sZWFuO1xuICB0cmFuc2l0aW9uPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcbiAgICB7IGluPzogYm9vbGVhbjsgYXBwZWFyPzogYm9vbGVhbiB9ICYgVHJhbnNpdGlvbkNhbGxiYWNrc1xuICA+O1xuICBvbkhpZGU/OiAoZTogRXZlbnQpID0+IHZvaWQ7XG4gIHJvb3RDbG9zZT86IGJvb2xlYW47XG4gIHJvb3RDbG9zZURpc2FibGVkPzogYm9vbGVhbjtcbiAgcm9vdENsb3NlRXZlbnQ/OiBSb290Q2xvc2VPcHRpb25zWydjbGlja1RyaWdnZXInXTtcbiAgY2hpbGRyZW46ICh2YWx1ZToge1xuICAgIHNob3c6IGJvb2xlYW47XG4gICAgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gICAgdXBkYXRlOiAoKSA9PiB2b2lkO1xuICAgIGZvcmNlVXBkYXRlOiAoKSA9PiB2b2lkO1xuICAgIHN0YXRlPzogU3RhdGU7XG4gICAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gJiB7XG4gICAgICByZWY6IFJlYWN0LlJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PjtcbiAgICAgIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBhcnJvd1Byb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ICYge1xuICAgICAgcmVmOiBSZWFjdC5SZWZDYWxsYmFjazxIVE1MRWxlbWVudD47XG4gICAgICBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgICB9O1xuICB9KSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbi8qKlxuICogQnVpbHQgb24gdG9wIG9mIGBQb3BwZXIuanNgLCB0aGUgb3ZlcmxheSBjb21wb25lbnQgaXNcbiAqIGdyZWF0IGZvciBjdXN0b20gdG9vbHRpcCBvdmVybGF5cy5cbiAqL1xuY29uc3QgT3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEVsZW1lbnQsIE92ZXJsYXlQcm9wcz4oXG4gIChwcm9wcywgb3V0ZXJSZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBmbGlwLFxuICAgICAgb2Zmc2V0LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgY29udGFpbmVyUGFkZGluZyA9IDUsXG4gICAgICBwb3BwZXJDb25maWcgPSB7fSxcbiAgICAgIHRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgW3Jvb3RFbGVtZW50LCBhdHRhY2hSZWZdID0gdXNlQ2FsbGJhY2tSZWY8SFRNTEVsZW1lbnQ+KCk7XG4gICAgY29uc3QgW2Fycm93RWxlbWVudCwgYXR0YWNoQXJyb3dSZWZdID0gdXNlQ2FsbGJhY2tSZWY8RWxlbWVudD4oKTtcbiAgICBjb25zdCBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzPEhUTUxFbGVtZW50IHwgbnVsbD4oYXR0YWNoUmVmLCBvdXRlclJlZik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB1c2VXYWl0Rm9yRE9NUmVmKHByb3BzLmNvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0ID0gdXNlV2FpdEZvckRPTVJlZihwcm9wcy50YXJnZXQpO1xuXG4gICAgY29uc3QgW2V4aXRlZCwgc2V0RXhpdGVkXSA9IHVzZVN0YXRlKCFwcm9wcy5zaG93KTtcblxuICAgIGNvbnN0IHsgc3R5bGVzLCBhdHRyaWJ1dGVzLCAuLi5wb3BwZXIgfSA9IHVzZVBvcHBlcihcbiAgICAgIHRhcmdldCxcbiAgICAgIHJvb3RFbGVtZW50LFxuICAgICAgbWVyZ2VPcHRpb25zV2l0aFBvcHBlckNvbmZpZyh7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgZW5hYmxlRXZlbnRzOiAhIXByb3BzLnNob3csXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcgfHwgNSxcbiAgICAgICAgZmxpcCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhcnJvd0VsZW1lbnQsXG4gICAgICAgIHBvcHBlckNvbmZpZyxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgaWYgKGV4aXRlZCkgc2V0RXhpdGVkKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCFwcm9wcy50cmFuc2l0aW9uICYmICFleGl0ZWQpIHtcbiAgICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVIaWRkZW46IFRyYW5zaXRpb25DYWxsYmFja3NbJ29uRXhpdGVkJ10gPSAoLi4uYXJncykgPT4ge1xuICAgICAgc2V0RXhpdGVkKHRydWUpO1xuXG4gICAgICBpZiAocHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgcHJvcHMub25FeGl0ZWQoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERvbid0IHVuLXJlbmRlciB0aGUgb3ZlcmxheSB3aGlsZSBpdCdzIHRyYW5zaXRpb25pbmcgb3V0LlxuICAgIGNvbnN0IG1vdW50T3ZlcmxheSA9IHByb3BzLnNob3cgfHwgKFRyYW5zaXRpb24gJiYgIWV4aXRlZCk7XG5cbiAgICB1c2VSb290Q2xvc2Uocm9vdEVsZW1lbnQsIHByb3BzLm9uSGlkZSEsIHtcbiAgICAgIGRpc2FibGVkOiAhcHJvcHMucm9vdENsb3NlIHx8IHByb3BzLnJvb3RDbG9zZURpc2FibGVkLFxuICAgICAgY2xpY2tUcmlnZ2VyOiBwcm9wcy5yb290Q2xvc2VFdmVudCxcbiAgICB9KTtcblxuICAgIGlmICghbW91bnRPdmVybGF5KSB7XG4gICAgICAvLyBEb24ndCBib3RoZXIgc2hvd2luZyBhbnl0aGluZyBpZiB3ZSBkb24ndCBoYXZlIHRvLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW4oe1xuICAgICAgLi4ucG9wcGVyLFxuICAgICAgc2hvdzogISFwcm9wcy5zaG93LFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4uYXR0cmlidXRlcy5wb3BwZXIsXG4gICAgICAgIHN0eWxlOiBzdHlsZXMucG9wcGVyIGFzIGFueSxcbiAgICAgICAgcmVmOiBtZXJnZWRSZWYsXG4gICAgICB9LFxuICAgICAgYXJyb3dQcm9wczoge1xuICAgICAgICAuLi5hdHRyaWJ1dGVzLmFycm93LFxuICAgICAgICBzdHlsZTogc3R5bGVzLmFycm93IGFzIGFueSxcbiAgICAgICAgcmVmOiBhdHRhY2hBcnJvd1JlZixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoVHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgeyBvbkV4aXQsIG9uRXhpdGluZywgb25FbnRlciwgb25FbnRlcmluZywgb25FbnRlcmVkIH0gPSBwcm9wcztcblxuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgaW49e3Byb3BzLnNob3d9XG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgb25FeGl0PXtvbkV4aXR9XG4gICAgICAgICAgb25FeGl0aW5nPXtvbkV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e2hhbmRsZUhpZGRlbn1cbiAgICAgICAgICBvbkVudGVyPXtvbkVudGVyfVxuICAgICAgICAgIG9uRW50ZXJpbmc9e29uRW50ZXJpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgY29udGFpbmVyKSA6IG51bGw7XG4gIH0sXG4pO1xuXG5PdmVybGF5LmRpc3BsYXlOYW1lID0gJ092ZXJsYXknO1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgT3ZlcmxheVxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFNwZWNpZnkgd2hlcmUgdGhlIG92ZXJsYXkgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGluIHJlbGF0aW9uIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihwbGFjZW1lbnRzKSxcblxuICAvKipcbiAgICogQSBET00gRWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgdGFyZ2V0YCBlbGVtZW50IGlzIHdoZXJlXG4gICAqIHRoZSBvdmVybGF5IGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8uXG4gICAqL1xuICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEEgRE9NIEVsZW1lbnQsIFJlZiB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBQb3J0YWwgY2hpbGRyZW5cbiAgICogYXBwZW5kZWQgdG8gaXQuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIFBvcHBlci5qcyBgZmxpcGAgbW9kaWZpZXIsIGFsbG93aW5nIHRoZSBPdmVybGF5IHRvXG4gICAqIGF1dG9tYXRpY2FsbHkgYWRqdXN0IGl0J3MgcGxhY2VtZW50IGluIGNhc2Ugb2Ygb3ZlcmxhcCB3aXRoIHRoZSB2aWV3cG9ydCBvciB0b2dnbGUuXG4gICAqIFJlZmVyIHRvIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnMuLmZsaXAuZW5hYmxlZCkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmxpcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGFuIGVsZW1lbnQgdG8gb3ZlcmxheSBhbmQgcG9zaXRpb24uIFNlZVxuICAgKiB0aGUgW3JlYWN0LXBvcHBlciBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3JlYWN0LXBvcHBlciNjaGlsZHJlbikgZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgc2hvdzogYm9vbGVhbixcbiAgICogICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICogICB1cGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgZm9yY2VVcGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIGFyaWEtbGFiZWxsZWRieTogP3N0cmluZ1xuICAgKiAgICAgW3N0cmluZ106IHN0cmluZyB8IG51bWJlcixcbiAgICogICB9LFxuICAgKiAgIGFycm93UHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIsXG4gICAqICAgfSxcbiAgICogfSkgPT4gUmVhY3QuRWxlbWVudH1cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGhvdyBtdWNoIHNwYWNlIHRoZXJlIGlzIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIGJvdW5kYXJ5IGVsZW1lbnQgYW5kIG92ZXJsYXkuXG4gICAqIEEgY29udmVuaWVuY2Ugc2hvcnRjdXQgdG8gc2V0dGluZyBgcG9wcGVyQ29uZmlnLm1vZGZpZXJzLnByZXZlbnRPdmVyZmxvdy5wYWRkaW5nYFxuICAgKi9cbiAgY29udGFpbmVyUGFkZGluZzogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQSBzZXQgb2YgcG9wcGVyIG9wdGlvbnMgYW5kIHByb3BzIHBhc3NlZCBkaXJlY3RseSB0byByZWFjdC1wb3BwZXIncyBQb3BwZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcG9wcGVyQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHRyaWdnZXIgYG9uSGlkZWAgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgb3ZlcmxheVxuICAgKi9cbiAgcm9vdENsb3NlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogU3BlY2lmeSBldmVudCBmb3IgdG9nZ2xpbmcgb3ZlcmxheVxuICAgKi9cbiAgcm9vdENsb3NlRXZlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ21vdXNlZG93biddKSxcblxuICAvKipcbiAgICogU3BlY2lmeSBkaXNhYmxlZCBmb3IgZGlzYWJsZSBSb290Q2xvc2VXcmFwcGVyXG4gICAqL1xuICByb290Q2xvc2VEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBBIENhbGxiYWNrIGZpcmVkIGJ5IHRoZSBPdmVybGF5IHdoZW4gaXQgd2lzaGVzIHRvIGJlIGhpZGRlbi5cbiAgICpcbiAgICogX19yZXF1aXJlZF9fIHdoZW4gYHJvb3RDbG9zZWAgaXMgYHRydWVgLlxuICAgKlxuICAgKiBAdHlwZSBmdW5jXG4gICAqL1xuICBvbkhpZGUocHJvcHMsIC4uLmFyZ3MpIHtcbiAgICBpZiAocHJvcHMucm9vdENsb3NlKSB7XG4gICAgICByZXR1cm4gUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZChwcm9wcywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb3BUeXBlcy5mdW5jKHByb3BzLCAuLi5hcmdzKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBgcmVhY3QtdHJhbnNpdGlvbi1ncm91cEAyLjAuMGAgYDxUcmFuc2l0aW9uLz5gIGNvbXBvbmVudFxuICAgKiB1c2VkIHRvIGFuaW1hdGUgdGhlIG92ZXJsYXkgYXMgaXQgY2hhbmdlcyB2aXNpYmlsaXR5LlxuICAgKi9cbiAgLy8gQHRzLWlnbm9yZVxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgT3ZlcmxheSB0cmFuc2l0aW9ucyBpblxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFzIHRoZSBPdmVybGF5IGJlZ2lucyB0byB0cmFuc2l0aW9uIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIE92ZXJsYXkgZmluaXNoZXMgdHJhbnNpdGlvbmluZyBpblxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSBPdmVybGF5IHRyYW5zaXRpb25zIG91dFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE92ZXJsYXkgYmVnaW5zIHRvIHRyYW5zaXRpb24gb3V0XG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgT3ZlcmxheSBmaW5pc2hlcyB0cmFuc2l0aW9uaW5nIG91dFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVdhaXRGb3JET01SZWYsIHsgRE9NQ29udGFpbmVyIH0gZnJvbSAnLi91c2VXYWl0Rm9yRE9NUmVmJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBET00gZWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIFBvcnRhbCBjaGlsZHJlblxuICAgKiBhcHBlbmRlZCB0byBpdC5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcblxuICBvblJlbmRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBjb250YWluZXI6IERPTUNvbnRhaW5lcjtcbiAgb25SZW5kZXJlZD86IChlbGVtZW50OiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQHB1YmxpY1xuICovXG5jb25zdCBQb3J0YWwgPSAoeyBjb250YWluZXIsIGNoaWxkcmVuLCBvblJlbmRlcmVkIH06IFBvcnRhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHJlc29sdmVkQ29udGFpbmVyID0gdXNlV2FpdEZvckRPTVJlZihjb250YWluZXIsIG9uUmVuZGVyZWQpO1xuXG4gIHJldHVybiByZXNvbHZlZENvbnRhaW5lciA/IChcbiAgICA8PntSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHJlc29sdmVkQ29udGFpbmVyKX08Lz5cbiAgKSA6IG51bGw7XG59O1xuXG5Qb3J0YWwuZGlzcGxheU5hbWUgPSAnUG9ydGFsJztcblBvcnRhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50S2V5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiQ29udGV4dFR5cGUge1xuICBvblNlbGVjdDogYW55O1xuICBhY3RpdmVLZXk6IGFueTtcbiAgdHJhbnNpdGlvbjogYW55O1xuICBtb3VudE9uRW50ZXI6IGJvb2xlYW47XG4gIHVubW91bnRPbkV4aXQ6IGJvb2xlYW47XG4gIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkpID0+IGFueTtcbiAgZ2V0Q29udHJvbGxlcklkOiAoa2V5OiBFdmVudEtleSkgPT4gYW55O1xufVxuXG5jb25zdCBUYWJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxUYWJDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJDb250ZXh0O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICdAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrJztcblxuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSAnLi9OYXZDb250ZXh0JztcbmltcG9ydCBTZWxlY3RhYmxlQ29udGV4dCwgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7XG4gIEV2ZW50S2V5LFxuICBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudCxcbiAgU2VsZWN0Q2FsbGJhY2ssXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkYXRhQXR0ciB9IGZyb20gJy4vRGF0YUtleSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByb3BzXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sICdvblNlbGVjdCc+IHtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgYXM/OiBSZWFjdC5FbGVtZW50VHlwZTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBldmVudEtleT86IEV2ZW50S2V5O1xuICBocmVmPzogc3RyaW5nO1xuICB0YWJJbmRleD86IG51bWJlcjtcbiAgb25TZWxlY3Q/OiBTZWxlY3RDYWxsYmFjaztcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICBhczogUHJvcFR5cGVzLmFueSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAnYXJpYS1jb250cm9scyc6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZU5hdkl0ZW1PcHRpb25zIHtcbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xuICByb2xlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2SXRlbSh7XG4gIGtleSxcbiAgb25DbGljayxcbiAgYWN0aXZlLFxuICBpZCxcbiAgcm9sZSxcbiAgZGlzYWJsZWQsXG59OiBVc2VOYXZJdGVtT3B0aW9ucykge1xuICBjb25zdCBwYXJlbnRPblNlbGVjdCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICBjb25zdCBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcblxuICBsZXQgaXNBY3RpdmUgPSBhY3RpdmU7XG4gIGNvbnN0IHByb3BzID0ge30gYXMgYW55O1xuXG4gIGlmIChuYXZDb250ZXh0KSB7XG4gICAgaWYgKCFyb2xlICYmIG5hdkNvbnRleHQucm9sZSA9PT0gJ3RhYmxpc3QnKSBwcm9wcy5yb2xlID0gJ3RhYic7XG5cbiAgICBjb25zdCBjb250ZXh0Q29udHJvbGxlcklkID0gbmF2Q29udGV4dC5nZXRDb250cm9sbGVySWQoa2V5ID8/IG51bGwpO1xuICAgIGNvbnN0IGNvbnRleHRDb250cm9sbGVkSWQgPSBuYXZDb250ZXh0LmdldENvbnRyb2xsZWRJZChrZXkgPz8gbnVsbCk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJvcHNbZGF0YUF0dHIoJ2V2ZW50LWtleScpXSA9IGtleTtcblxuICAgIHByb3BzLmlkID0gY29udGV4dENvbnRyb2xsZXJJZCB8fCBpZDtcbiAgICBwcm9wc1snYXJpYS1jb250cm9scyddID0gY29udGV4dENvbnRyb2xsZWRJZDtcblxuICAgIGlzQWN0aXZlID1cbiAgICAgIGFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsID8gbmF2Q29udGV4dC5hY3RpdmVLZXkgPT09IGtleSA6IGFjdGl2ZTtcbiAgfVxuXG4gIGlmIChwcm9wcy5yb2xlID09PSAndGFiJykge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICAgIHByb3BzWydhcmlhLWRpc2FibGVkJ10gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHByb3BzWydhcmlhLXNlbGVjdGVkJ10gPSBpc0FjdGl2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBwcm9wcy5vbkNsaWNrID0gdXNlRXZlbnRDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgb25DbGljaz8uKGUpO1xuXG4gICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE9uU2VsZWN0ICYmICFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgIHBhcmVudE9uU2VsZWN0Py4oa2V5LCBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbcHJvcHMsIHsgaXNBY3RpdmUgfV0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IE5hdkl0ZW06IER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50PFxuICB0eXBlb2YgQnV0dG9uLFxuICBOYXZJdGVtUHJvcHNcbj4gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBOYXZJdGVtUHJvcHM+KFxuICAoeyBhczogQ29tcG9uZW50ID0gQnV0dG9uLCBldmVudEtleSwgaHJlZiwgLi4ub3B0aW9ucyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbcHJvcHMsIG1ldGFdID0gdXNlTmF2SXRlbSh7XG4gICAgICBrZXk6IG1ha2VFdmVudEtleShldmVudEtleSwgaHJlZiksXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByb3BzW2RhdGFBdHRyKCdhY3RpdmUnKV0gPSBtZXRhLmlzQWN0aXZlO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLm9wdGlvbnN9IHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+O1xuICB9LFxuKTtcblxuTmF2SXRlbS5kaXNwbGF5TmFtZSA9ICdOYXZJdGVtJztcbk5hdkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtO1xuIiwiaW1wb3J0IHFzYSBmcm9tICdkb20taGVscGVycy9xdWVyeVNlbGVjdG9yQWxsJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGb3JjZVVwZGF0ZSBmcm9tICdAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZSc7XG5pbXBvcnQgdXNlTWVyZ2VkUmVmcyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNZXJnZWRSZWZzJztcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQsIHsgbWFrZUV2ZW50S2V5IH0gZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICcuL1RhYkNvbnRleHQnO1xuaW1wb3J0IHtcbiAgRXZlbnRLZXksXG4gIER5bmFtaWNSZWZGb3J3YXJkaW5nQ29tcG9uZW50LFxuICBTZWxlY3RDYWxsYmFjayxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkYXRhQXR0ciwgZGF0YVByb3AgfSBmcm9tICcuL0RhdGFLZXknO1xuaW1wb3J0IE5hdkl0ZW0sIHsgVXNlTmF2SXRlbU9wdGlvbnMsIE5hdkl0ZW1Qcm9wcyB9IGZyb20gJy4vTmF2SXRlbSc7XG5cbmV4cG9ydCB0eXBlIHsgVXNlTmF2SXRlbU9wdGlvbnMsIE5hdkl0ZW1Qcm9wcyB9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIEBwcml2YXRlICovXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZQcm9wc1xuICBleHRlbmRzIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCAnb25TZWxlY3QnPiB7XG4gIGFjdGl2ZUtleT86IEV2ZW50S2V5O1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xufVxuXG5jb25zdCBFVkVOVF9LRVlfQVRUUiA9IGRhdGFBdHRyKCdldmVudC1rZXknKTtcblxuY29uc3QgTmF2OiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDwnZGl2JywgTmF2UHJvcHM+ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEVsZW1lbnQsXG4gIE5hdlByb3BzXG4+KFxuICAoXG4gICAge1xuICAgICAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICAgICAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAgICAgb25TZWxlY3QsXG4gICAgICBhY3RpdmVLZXksXG4gICAgICByb2xlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZixcbiAgKSA9PiB7XG4gICAgLy8gQSByZWYgYW5kIGZvcmNlVXBkYXRlIGZvciByZWZvY3VzLCBiL2Mgd2Ugb25seSB3YW50IHRvIHRyaWdnZXIgd2hlbiBuZWVkZWRcbiAgICAvLyBhbmQgZG9uJ3Qgd2FudCB0byByZXNldCB0aGUgc2V0IGluIHRoZSBlZmZlY3RcbiAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gICAgY29uc3QgbmVlZHNSZWZvY3VzUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICAgIGNvbnN0IHBhcmVudE9uU2VsZWN0ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gICAgY29uc3QgdGFiQ29udGV4dCA9IHVzZUNvbnRleHQoVGFiQ29udGV4dCk7XG5cbiAgICBsZXQgZ2V0Q29udHJvbGxlZElkLCBnZXRDb250cm9sbGVySWQ7XG5cbiAgICBpZiAodGFiQ29udGV4dCkge1xuICAgICAgcm9sZSA9IHJvbGUgfHwgJ3RhYmxpc3QnO1xuICAgICAgYWN0aXZlS2V5ID0gdGFiQ29udGV4dC5hY3RpdmVLZXk7XG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGR1cGxpY2F0ZSB0aGVzZT9cbiAgICAgIGdldENvbnRyb2xsZWRJZCA9IHRhYkNvbnRleHQuZ2V0Q29udHJvbGxlZElkO1xuICAgICAgZ2V0Q29udHJvbGxlcklkID0gdGFiQ29udGV4dC5nZXRDb250cm9sbGVySWQ7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdE5vZGUgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgY29uc3QgZ2V0TmV4dEFjdGl2ZVRhYiA9IChvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudExpc3ROb2RlID0gbGlzdE5vZGUuY3VycmVudDtcbiAgICAgIGlmICghY3VycmVudExpc3ROb2RlKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgaXRlbXMgPSBxc2EoXG4gICAgICAgIGN1cnJlbnRMaXN0Tm9kZSxcbiAgICAgICAgYFske0VWRU5UX0tFWV9BVFRSfV06bm90KFthcmlhLWRpc2FibGVkPXRydWVdKWAsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBhY3RpdmVDaGlsZCA9IGN1cnJlbnRMaXN0Tm9kZS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcbiAgICAgICAgJ1thcmlhLXNlbGVjdGVkPXRydWVdJyxcbiAgICAgICk7XG4gICAgICBpZiAoIWFjdGl2ZUNoaWxkKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKGFjdGl2ZUNoaWxkKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyBvZmZzZXQ7XG4gICAgICBpZiAobmV4dEluZGV4ID49IGl0ZW1zLmxlbmd0aCkgbmV4dEluZGV4ID0gMDtcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwKSBuZXh0SW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgcmV0dXJuIGl0ZW1zW25leHRJbmRleF07XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChrZXk6IHN0cmluZyB8IG51bGwsIGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgaWYgKGtleSA9PSBudWxsKSByZXR1cm47XG4gICAgICBvblNlbGVjdD8uKGtleSwgZXZlbnQpO1xuICAgICAgcGFyZW50T25TZWxlY3Q/LihrZXksIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgIG9uS2V5RG93bj8uKGV2ZW50KTtcblxuICAgICAgaWYgKCF0YWJDb250ZXh0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5leHRBY3RpdmVDaGlsZDtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIG5leHRBY3RpdmVDaGlsZCA9IGdldE5leHRBY3RpdmVUYWIoLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlVGFiKDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dEFjdGl2ZUNoaWxkKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGhhbmRsZVNlbGVjdChcbiAgICAgICAgbmV4dEFjdGl2ZUNoaWxkLmRhdGFzZXRbZGF0YVByb3AoJ0V2ZW50S2V5JyldIHx8IG51bGwsXG4gICAgICAgIGV2ZW50LFxuICAgICAgKTtcblxuICAgICAgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChsaXN0Tm9kZS5jdXJyZW50ICYmIG5lZWRzUmVmb2N1c1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNoaWxkID0gbGlzdE5vZGUuY3VycmVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcbiAgICAgICAgICBgWyR7RVZFTlRfS0VZX0FUVFJ9XVthcmlhLXNlbGVjdGVkPXRydWVdYCxcbiAgICAgICAgKTtcblxuICAgICAgICBhY3RpdmVDaGlsZD8uZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lcmdlZFJlZiA9IHVzZU1lcmdlZFJlZnMocmVmLCBsaXN0Tm9kZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICA8TmF2Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICByb2xlLCAvLyB1c2VkIGJ5IE5hdkxpbmsgdG8gZGV0ZXJtaW5lIGl0J3Mgcm9sZVxuICAgICAgICAgICAgYWN0aXZlS2V5OiBtYWtlRXZlbnRLZXkoYWN0aXZlS2V5KSxcbiAgICAgICAgICAgIGdldENvbnRyb2xsZWRJZDogZ2V0Q29udHJvbGxlZElkIHx8IG5vb3AsXG4gICAgICAgICAgICBnZXRDb250cm9sbGVySWQ6IGdldENvbnRyb2xsZXJJZCB8fCBub29wLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICByZWY9e21lcmdlZFJlZn1cbiAgICAgICAgICAgIHJvbGU9e3JvbGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9OYXZDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9LFxuKTtcblxuTmF2LmRpc3BsYXlOYW1lID0gJ05hdic7XG5OYXYucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKE5hdiwgeyBJdGVtOiBOYXZJdGVtIH0pO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gTm9vcFRyYW5zaXRpb24oe1xuICBjaGlsZHJlbixcbiAgaW46IGluUHJvcCxcbiAgbW91bnRPbkVudGVyLFxuICB1bm1vdW50T25FeGl0LFxufTogVHJhbnNpdGlvblByb3BzKSB7XG4gIGNvbnN0IGhhc0VudGVyZWRSZWYgPSB1c2VSZWYoaW5Qcm9wKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblByb3ApIGhhc0VudGVyZWRSZWYuY3VycmVudCA9IHRydWU7XG4gIH0sIFtpblByb3BdKTtcblxuICBpZiAoaW5Qcm9wKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgLy8gbm90IGluXG4gIC8vXG4gIC8vIGlmICghbW91bnRPbkVudGVyICYmICF1bm1vdW50T25FeGl0KSB7XG4gIC8vICAgcmV0dXJuIGNoaWxkcmVuO1xuICAvLyB9XG4gIGlmICh1bm1vdW50T25FeGl0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFoYXNFbnRlcmVkUmVmLmN1cnJlbnQgJiYgbW91bnRPbkVudGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vb3BUcmFuc2l0aW9uO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQsIHsgbWFrZUV2ZW50S2V5IH0gZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQge1xuICBFdmVudEtleSxcbiAgRHluYW1pY1JlZkZvcndhcmRpbmdDb21wb25lbnQsXG4gIFRyYW5zaXRpb25DYWxsYmFja3MsXG4gIFRyYW5zaXRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBOb29wVHJhbnNpdGlvbiBmcm9tICcuL05vb3BUcmFuc2l0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJQYW5lbFByb3BzXG4gIGV4dGVuZHMgVHJhbnNpdGlvbkNhbGxiYWNrcyxcbiAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBhczogUmVhY3QuRWxlbWVudFR5cGU7XG4gIGV2ZW50S2V5PzogRXZlbnRLZXk7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHRyYW5zaXRpb24/OiBUcmFuc2l0aW9uVHlwZTtcbiAgbW91bnRPbkVudGVyPzogYm9vbGVhbjtcbiAgdW5tb3VudE9uRXhpdD86IGJvb2xlYW47XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQSBrZXkgdGhhdCBhc3NvY2lhdGVzIHRoZSBgVGFiUGFuZWxgIHdpdGggaXQncyBjb250cm9sbGluZyBgTmF2TGlua2AuXG4gICAqL1xuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIFRhYlBhbmVsLCB0aGlzIGlzIGdlbmVyYWxseSBjb250cm9sbGVkIGJ5IGFcbiAgICogVGFiQ29udGFpbmVyLlxuICAgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVXNlIGFuaW1hdGlvbiB3aGVuIHNob3dpbmcgb3IgaGlkaW5nIGA8VGFiUGFuZWw+YHMuIERlZmF1bHRzIHRvIGA8RmFkZT5gXG4gICAqIGFuaW1hdGlvbiwgZWxzZSB1c2UgYGZhbHNlYCB0byBkaXNhYmxlIG9yIGEgcmVhY3QtdHJhbnNpdGlvbi1ncm91cFxuICAgKiBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5lbGVtZW50VHlwZV0pLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRW50ZXIgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRW50ZXJpbmcgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRW50ZXJlZCBjYWxsYmFjayB3aGVuIGFuaW1hdGlvbiBpcyBub3QgYGZhbHNlYFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbiBvbkV4aXQgY2FsbGJhY2sgd2hlbiBhbmltYXRpb24gaXMgbm90IGBmYWxzZWBcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gb25FeGl0aW5nIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG9uRXhpdGVkIGNhbGxiYWNrIHdoZW4gYW5pbWF0aW9uIGlzIG5vdCBgZmFsc2VgXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIGZpcnN0IFwiZW50ZXJcIiB0cmFuc2l0aW9uIHRvIG1vdW50IHRoZSB0YWIgKGFkZCBpdCB0byB0aGUgRE9NKVxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0aGUgdGFiIChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIG5vIGxvbmdlciB2aXNpYmxlXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQGlnbm9yZSAqICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICogKi9cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5mdW5jdGlvbiB1c2VUYWJDb250ZXh0KHByb3BzOiBUYWJQYW5lbFByb3BzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRhYkNvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkgcmV0dXJuIHByb3BzO1xuXG4gIGNvbnN0IHsgYWN0aXZlS2V5LCBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZCwgLi4ucmVzdCB9ID0gY29udGV4dDtcbiAgY29uc3Qgc2hvdWxkVHJhbnNpdGlvbiA9XG4gICAgcHJvcHMudHJhbnNpdGlvbiAhPT0gZmFsc2UgJiYgcmVzdC50cmFuc2l0aW9uICE9PSBmYWxzZTtcblxuICBjb25zdCBrZXkgPSBtYWtlRXZlbnRLZXkocHJvcHMuZXZlbnRLZXkpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgYWN0aXZlOlxuICAgICAgcHJvcHMuYWN0aXZlID09IG51bGwgJiYga2V5ICE9IG51bGxcbiAgICAgICAgPyBtYWtlRXZlbnRLZXkoYWN0aXZlS2V5KSA9PT0ga2V5XG4gICAgICAgIDogcHJvcHMuYWN0aXZlLFxuICAgIGlkOiBnZXRDb250cm9sbGVkSWQocHJvcHMuZXZlbnRLZXkhKSxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogZ2V0Q29udHJvbGxlcklkKHByb3BzLmV2ZW50S2V5ISksXG4gICAgdHJhbnNpdGlvbjogc2hvdWxkVHJhbnNpdGlvbiAmJiAocHJvcHMudHJhbnNpdGlvbiB8fCByZXN0LnRyYW5zaXRpb24pLFxuICAgIG1vdW50T25FbnRlcjpcbiAgICAgIHByb3BzLm1vdW50T25FbnRlciAhPSBudWxsID8gcHJvcHMubW91bnRPbkVudGVyIDogcmVzdC5tb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdDpcbiAgICAgIHByb3BzLnVubW91bnRPbkV4aXQgIT0gbnVsbCA/IHByb3BzLnVubW91bnRPbkV4aXQgOiByZXN0LnVubW91bnRPbkV4aXQsXG4gIH07XG59XG5cbmNvbnN0IFRhYlBhbmVsOiBEeW5hbWljUmVmRm9yd2FyZGluZ0NvbXBvbmVudDxcbiAgJ2RpdicsXG4gIFRhYlBhbmVsUHJvcHNcbj4gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBUYWJQYW5lbFByb3BzPigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIG9uRW50ZXIsXG4gICAgb25FbnRlcmluZyxcbiAgICBvbkVudGVyZWQsXG4gICAgb25FeGl0LFxuICAgIG9uRXhpdGluZyxcbiAgICBvbkV4aXRlZCxcbiAgICBtb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdCxcbiAgICB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uID0gTm9vcFRyYW5zaXRpb24sXG4gICAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICAgIGFzOiBDb21wb25lbnQgPSAnZGl2JyxcbiAgICBldmVudEtleTogXyxcbiAgICAuLi5yZXN0XG4gIH0gPSB1c2VUYWJDb250ZXh0KHByb3BzKTtcblxuICBpZiAoIWFjdGl2ZSAmJiAhVHJhbnNpdGlvbiAmJiB1bm1vdW50T25FeGl0KSByZXR1cm4gbnVsbDtcblxuICBsZXQgcGFuZSA9IChcbiAgICA8Q29tcG9uZW50XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17IWFjdGl2ZX1cbiAgICAgIGFyaWEtaGlkZGVuPXshYWN0aXZlfVxuICAgIC8+XG4gICk7XG5cbiAgaWYgKFRyYW5zaXRpb24pIHtcbiAgICBwYW5lID0gKFxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgaW49e2FjdGl2ZX1cbiAgICAgICAgb25FbnRlcj17b25FbnRlcn1cbiAgICAgICAgb25FbnRlcmluZz17b25FbnRlcmluZ31cbiAgICAgICAgb25FbnRlcmVkPXtvbkVudGVyZWR9XG4gICAgICAgIG9uRXhpdD17b25FeGl0fVxuICAgICAgICBvbkV4aXRpbmc9e29uRXhpdGluZ31cbiAgICAgICAgb25FeGl0ZWQ9e29uRXhpdGVkfVxuICAgICAgICBtb3VudE9uRW50ZXI9e21vdW50T25FbnRlcn1cbiAgICAgICAgdW5tb3VudE9uRXhpdD17dW5tb3VudE9uRXhpdH1cbiAgICAgID5cbiAgICAgICAge3BhbmV9XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgKTtcbiAgfVxuICAvLyBXZSBwcm92aWRlIGFuIGVtcHR5IHRoZSBUYWJDb250ZXh0IHNvIGA8TmF2PmBzIGluIGA8VGFiUGFuZWw+YHMgZG9uJ3RcbiAgLy8gY29uZmxpY3Qgd2l0aCB0aGUgdG9wIGxldmVsIG9uZS5cbiAgcmV0dXJuIChcbiAgICA8VGFiQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICA8U2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuICAgICAgICB7cGFuZX1cbiAgICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UYWJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSk7XG5cblRhYlBhbmVsLmRpc3BsYXlOYW1lID0gJ1RhYlBhbmVsJztcblRhYlBhbmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgVGFiUGFuZWw7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVVuY29udHJvbGxlZFByb3AgfSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5pbXBvcnQgeyB1c2VTU1JTYWZlSWQgfSBmcm9tICdAcmVhY3QtYXJpYS9zc3InO1xuXG5pbXBvcnQgVGFiQ29udGV4dCwgeyBUYWJDb250ZXh0VHlwZSB9IGZyb20gJy4vVGFiQ29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQgZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgeyBFdmVudEtleSwgU2VsZWN0Q2FsbGJhY2ssIFRyYW5zaXRpb25UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgVGFiUGFuZWwsIHsgVGFiUGFuZWxQcm9wcyB9IGZyb20gJy4vVGFiUGFuZWwnO1xuXG5leHBvcnQgdHlwZSB7IFRhYlBhbmVsUHJvcHMgfTtcbmV4cG9ydCBpbnRlcmZhY2UgVGFic1Byb3BzIGV4dGVuZHMgUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48dW5rbm93bj4ge1xuICBpZD86IHN0cmluZztcbiAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25UeXBlO1xuICBtb3VudE9uRW50ZXI/OiBib29sZWFuO1xuICB1bm1vdW50T25FeGl0PzogYm9vbGVhbjtcbiAgZ2VuZXJhdGVDaGlsZElkPzogKGV2ZW50S2V5OiBFdmVudEtleSwgdHlwZTogJ3RhYicgfCAncGFuZScpID0+IHN0cmluZztcbiAgb25TZWxlY3Q/OiBTZWxlY3RDYWxsYmFjaztcbiAgYWN0aXZlS2V5PzogRXZlbnRLZXk7XG4gIGRlZmF1bHRBY3RpdmVLZXk/OiBFdmVudEtleTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldHMgYSBkZWZhdWx0IGFuaW1hdGlvbiBzdHJhdGVneSBmb3IgYWxsIGNoaWxkcmVuIGA8VGFiUGFuZT5gcy5cbiAgICogVXNlIGEgcmVhY3QtdHJhbnNpdGlvbi1ncm91cCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7e1RyYW5zaXRpb24gfCBmYWxzZX19XG4gICAqIEBkZWZhdWx0IHtGYWRlfVxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pLFxuICAgIFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgXSksXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBmaXJzdCBcImVudGVyXCIgdHJhbnNpdGlvbiB0byBtb3VudCB0YWJzIChhZGQgdGhlbSB0byB0aGUgRE9NKVxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0YWJzIChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIHRoZXkgYXJlIG5vIGxvbmdlciB2aXNpYmxlXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGBldmVudEtleWAgYW5kIGB0eXBlYCBhbmQgcmV0dXJucyBhIHVuaXF1ZSBpZCBmb3JcbiAgICogY2hpbGQgdGFiIGA8TmF2SXRlbT5gcyBhbmQgYDxUYWJQYW5lPmBzLiBUaGUgZnVuY3Rpb24gX211c3RfIGJlIGEgcHVyZVxuICAgKiBmdW5jdGlvbiwgbWVhbmluZyBpdCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgX3NhbWVfIGlkIGZvciB0aGUgc2FtZSBzZXRcbiAgICogb2YgaW5wdXRzLiBUaGUgZGVmYXVsdCB2YWx1ZSByZXF1aXJlcyB0aGF0IGFuIGBpZGAgdG8gYmUgc2V0IGZvciB0aGVcbiAgICogYDxUYWJDb250YWluZXI+YC5cbiAgICpcbiAgICogVGhlIGB0eXBlYCBhcmd1bWVudCB3aWxsIGVpdGhlciBiZSBgXCJ0YWJcImAgb3IgYFwicGFuZVwiYC5cbiAgICpcbiAgICogQGRlZmF1bHRWYWx1ZSAoZXZlbnRLZXksIHR5cGUpID0+IGAke3Byb3BzLmlkfS0ke3R5cGV9LSR7ZXZlbnRLZXl9YFxuICAgKi9cbiAgZ2VuZXJhdGVDaGlsZElkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGEgdGFiIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIGFjdGl2ZUtleVxuICAgKi9cbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgYGV2ZW50S2V5YCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgb25TZWxlY3RcbiAgICovXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuY29uc3QgVGFicyA9IChwcm9wczogVGFic1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZDogdXNlcklkLFxuICAgIGdlbmVyYXRlQ2hpbGRJZDogZ2VuZXJhdGVDdXN0b21DaGlsZElkLFxuICAgIG9uU2VsZWN0OiBwcm9wc09uU2VsZWN0LFxuICAgIGFjdGl2ZUtleTogcHJvcHNBY3RpdmVLZXksXG4gICAgZGVmYXVsdEFjdGl2ZUtleSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0LFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2FjdGl2ZUtleSwgb25TZWxlY3RdID0gdXNlVW5jb250cm9sbGVkUHJvcChcbiAgICBwcm9wc0FjdGl2ZUtleSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5LFxuICAgIHByb3BzT25TZWxlY3QsXG4gICk7XG5cbiAgY29uc3QgaWQgPSB1c2VTU1JTYWZlSWQodXNlcklkKTtcblxuICBjb25zdCBnZW5lcmF0ZUNoaWxkSWQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZW5lcmF0ZUN1c3RvbUNoaWxkSWQgfHxcbiAgICAgICgoa2V5OiBFdmVudEtleSwgdHlwZTogc3RyaW5nKSA9PiAoaWQgPyBgJHtpZH0tJHt0eXBlfS0ke2tleX1gIDogbnVsbCkpLFxuICAgIFtpZCwgZ2VuZXJhdGVDdXN0b21DaGlsZElkXSxcbiAgKTtcblxuICBjb25zdCB0YWJDb250ZXh0OiBUYWJDb250ZXh0VHlwZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5LFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIG1vdW50T25FbnRlcjogbW91bnRPbkVudGVyIHx8IGZhbHNlLFxuICAgICAgdW5tb3VudE9uRXhpdDogdW5tb3VudE9uRXhpdCB8fCBmYWxzZSxcbiAgICAgIGdldENvbnRyb2xsZWRJZDogKGtleTogRXZlbnRLZXkpID0+IGdlbmVyYXRlQ2hpbGRJZChrZXksICd0YWJwYW5lJyksXG4gICAgICBnZXRDb250cm9sbGVySWQ6IChrZXk6IEV2ZW50S2V5KSA9PiBnZW5lcmF0ZUNoaWxkSWQoa2V5LCAndGFiJyksXG4gICAgfSksXG4gICAgW1xuICAgICAgb25TZWxlY3QsXG4gICAgICBhY3RpdmVLZXksXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgbW91bnRPbkVudGVyLFxuICAgICAgdW5tb3VudE9uRXhpdCxcbiAgICAgIGdlbmVyYXRlQ2hpbGRJZCxcbiAgICBdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RhYkNvbnRleHR9PlxuICAgICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtvblNlbGVjdCB8fCBudWxsfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TZWxlY3RhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RhYkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5UYWJzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRhYnMuUGFuZWwgPSBUYWJQYW5lbDtcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iLCJpbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5pbXBvcnQgeyB1c2VEcm9wZG93bk1lbnUgfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1c2VEcm9wZG93blRvZ2dsZSB9IGZyb20gJy4vRHJvcGRvd25Ub2dnbGUnO1xuaW1wb3J0IHsgdXNlRHJvcGRvd25JdGVtIH0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSBmcm9tICcuL3VzZVJvb3RDbG9zZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcbmltcG9ydCBOYXZJdGVtLCB7IHVzZU5hdkl0ZW0gfSBmcm9tICcuL05hdkl0ZW0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuaW1wb3J0IFRhYlBhbmVsIGZyb20gJy4vVGFiUGFuZWwnO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIERyb3Bkb3duLFxuICB1c2VEcm9wZG93bk1lbnUsXG4gIHVzZURyb3Bkb3duVG9nZ2xlLFxuICB1c2VEcm9wZG93bkl0ZW0sXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgdXNlTmF2SXRlbSxcbiAgTW9kYWwsXG4gIE92ZXJsYXksXG4gIFBvcnRhbCxcbiAgdXNlUm9vdENsb3NlLFxuICBUYWJzLFxuICBUYWJQYW5lbCxcbn07XG5cbmV4cG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgdHlwZSB7XG4gIERyb3Bkb3duUHJvcHMsXG4gIERyb3Bkb3duTWVudVByb3BzLFxuICBVc2VEcm9wZG93bk1lbnVNZXRhZGF0YSxcbiAgVXNlRHJvcGRvd25NZW51T3B0aW9ucyxcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbiAgRHJvcGRvd25JdGVtUHJvcHMsXG59IGZyb20gJy4vRHJvcGRvd24nO1xuZXhwb3J0IHR5cGUgeyBOYXZJdGVtUHJvcHMsIFVzZU5hdkl0ZW1PcHRpb25zLCBOYXZQcm9wcyB9IGZyb20gJy4vTmF2JztcbmV4cG9ydCB0eXBlIHsgTW9kYWxQcm9wcyB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHR5cGUgeyBPdmVybGF5UHJvcHMgfSBmcm9tICcuL092ZXJsYXknO1xuZXhwb3J0IHR5cGUgeyBQb3J0YWxQcm9wcyB9IGZyb20gJy4vUG9ydGFsJztcbmV4cG9ydCB0eXBlIHsgVGFic1Byb3BzLCBUYWJQYW5lbFByb3BzIH0gZnJvbSAnLi9UYWJzJztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBTdG9yZSB0aGUgbGFzdCBvZiBzb21lIHZhbHVlLiBUcmFja2VkIHZpYSBhIGBSZWZgIG9ubHkgdXBkYXRpbmcgaXRcbiAqIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVycy5cbiAqXG4gKiBIZWxwZnVsIGlmIHlvdSBuZWVkIHRvIGNvbXBhcmUgYSBwcm9wIHZhbHVlIHRvIGl0J3MgcHJldmlvdXMgdmFsdWUgZHVyaW5nIHJlbmRlci5cbiAqXG4gKiBgYGB0c1xuICogZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gKiAgIGNvbnN0IGxhc3RQcm9wcyA9IHVzZVByZXZpb3VzKHByb3BzKVxuICpcbiAqICAgaWYgKGxhc3RQcm9wcy5mb28gIT09IHByb3BzLmZvbylcbiAqICAgICByZXNldFZhbHVlRnJvbVByb3BzKHByb3BzLmZvbylcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gdHJhY2tcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFRyYWNrIHdoZXRoZXIgYSBjb21wb25lbnQgaXMgY3VycmVudCBtb3VudGVkLiBHZW5lcmFsbHkgbGVzcyBwcmVmZXJhYmxlIHRoYW5cbiAqIHByb3BlcmxseSBjYW5jZWxpbmcgZWZmZWN0cyBzbyB0aGV5IGRvbid0IHJ1biBhZnRlciBhIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsXG4gKiBidXQgaGVscGZ1bCBpbiBjYXNlcyB3aGVyZSB0aGF0IGlzbid0IGZlYXNpYmxlLCBzdWNoIGFzIGEgYFByb21pc2VgIHJlc29sdXRpb24uXG4gKlxuICogQHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgaXNNb3VudGVkIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAqIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGZldGNoZGF0YSgpLnRoZW4oKG5ld0RhdGEpID0+IHtcbiAqICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gKiAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcbiAqICAgICAgfVxuICogICB9KVxuICogfSlcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50ZWQoKSB7XG4gIHZhciBtb3VudGVkID0gdXNlUmVmKHRydWUpO1xuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW91bnRlZC5jdXJyZW50O1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gaXNNb3VudGVkLmN1cnJlbnQ7XG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgbm8tY29uZC1hc3NpZ24gKi9cbi8vIEhUTUwgRE9NIGFuZCBTVkcgRE9NIG1heSBoYXZlIGRpZmZlcmVudCBzdXBwb3J0IGxldmVscyxcbi8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgb24gY29udGV4dCBpbnN0ZWFkIG9mIGEgZG9jdW1lbnQgcm9vdCBlbGVtZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMoY29udGV4dCwgbm9kZSkge1xuICBpZiAoY29udGV4dC5jb250YWlucykgcmV0dXJuIGNvbnRleHQuY29udGFpbnMobm9kZSk7XG4gIGlmIChjb250ZXh0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSByZXR1cm4gY29udGV4dCA9PT0gbm9kZSB8fCAhIShjb250ZXh0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUpICYgMTYpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiIsInZhciB0b0FycmF5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgW10uc2xpY2UpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXNhKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiB0b0FycmF5KGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBjYW5Vc2VET00gZnJvbSAnLi9jYW5Vc2VET00nO1xuZXhwb3J0IHZhciBvcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5leHBvcnQgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGdldCBvbmNlKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgcmV0dXJuIG9uY2VTdXBwb3J0ZWQgPSBvcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIHRydWUpO1xuICB9XG59IGNhdGNoIChlKSB7XG4gIC8qICovXG59XG5cbi8qKlxuICogQW4gYGFkZEV2ZW50TGlzdGVuZXJgIHBvbnlmaWxsLCBzdXBwb3J0cyB0aGUgYG9uY2VgIG9wdGlvblxuICovXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nICYmICFvbmNlU3VwcG9ydGVkKSB7XG4gICAgdmFyIG9uY2UgPSBvcHRpb25zLm9uY2UsXG4gICAgICAgIGNhcHR1cmUgPSBvcHRpb25zLmNhcHR1cmU7XG4gICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIGlmICghb25jZVN1cHBvcnRlZCAmJiBvbmNlKSB7XG4gICAgICB3cmFwcGVkSGFuZGxlciA9IGhhbmRsZXIuX19vbmNlIHx8IGZ1bmN0aW9uIG9uY2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZXIuX19vbmNlID0gd3JhcHBlZEhhbmRsZXI7XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcHBlZEhhbmRsZXIsIG9wdGlvbnNTdXBwb3J0ZWQgPyBvcHRpb25zIDogY2FwdHVyZSk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lcjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgYSBjb21wb25lbnQgdXBkYXRlLiB0aGUgaG9vayBlcXVpdmFsZW50IHRvXG4gKiBgdGhpcy5mb3JjZVVwZGF0ZSgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudC4gSW4gbW9zdCBjYXNlcyB1c2luZyBhIHN0YXRlIHZhbHVlIGRpcmVjdGx5XG4gKiBpcyBwcmVmZXJhYmxlIGJ1dCBtYXkgYmUgcmVxdWlyZWQgaW4gc29tZSBhZHZhbmNlZCB1c2FnZXMgb2YgcmVmcyBmb3IgaW50ZXJvcCBvclxuICogd2hlbiBkaXJlY3QgRE9NIG1hbmlwdWxhdGlvbiBpcyByZXF1aXJlZC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICpcbiAqIGNvbnN0IHVwZGF0ZU9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gKiAgZm9yY2VVcGRhdGUoKVxuICogfSwgW2ZvcmNlVXBkYXRlXSlcbiAqXG4gKiByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dXBkYXRlT25DbGlja30+SGkgdGhlcmU8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICAvLyBUaGUgdG9nZ2xpbmcgc3RhdGUgdmFsdWUgaXMgZGVzaWduZWQgdG8gZGVmZWF0IFJlYWN0IG9wdGltaXphdGlvbnMgZm9yIHNraXBwaW5nXG4gIC8vIHVwZGF0ZXMgd2hlbiB0aGV5IGFyZSBzdHJpY3RpbmcgZXF1YWwgdG8gdGhlIGxhc3Qgc3RhdGUgdmFsdWVcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gIXN0YXRlO1xuICB9LCBmYWxzZSksXG4gICAgICBkaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHJldHVybiBkaXNwYXRjaDtcbn0iLCJpbXBvcnQgeyBVc2VQb3BwZXJPcHRpb25zLCBPZmZzZXQsIFBsYWNlbWVudCwgTW9kaWZpZXJzIH0gZnJvbSAnLi91c2VQb3BwZXInO1xuXG5leHBvcnQgdHlwZSBDb25maWcgPSB7XG4gIGZsaXA/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIGFsaWduRW5kPzogYm9vbGVhbjtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBudW1iZXI7XG4gIGFycm93RWxlbWVudD86IEVsZW1lbnQgfCBudWxsO1xuICBlbmFibGVFdmVudHM/OiBib29sZWFuO1xuICBvZmZzZXQ/OiBPZmZzZXQ7XG4gIHBsYWNlbWVudD86IFBsYWNlbWVudDtcbiAgcG9wcGVyQ29uZmlnPzogVXNlUG9wcGVyT3B0aW9ucztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyTWFwKG1vZGlmaWVyczogTW9kaWZpZXJzIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHJlc3VsdDogTW9kaWZpZXJzID0ge307XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzIHx8IHJlc3VsdDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgbW9kaWZpZXJzPy5mb3JFYWNoKChtKSA9PiB7XG4gICAgcmVzdWx0W20ubmFtZSFdID0gbTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b01vZGlmaWVyQXJyYXkobWFwOiBNb2RpZmllcnMgfCB1bmRlZmluZWQgPSB7fSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXApKSByZXR1cm4gbWFwO1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5tYXAoKGspID0+IHtcbiAgICBtYXBba10ubmFtZSA9IGs7XG4gICAgcmV0dXJuIG1hcFtrXTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlT3B0aW9uc1dpdGhQb3BwZXJDb25maWcoe1xuICBlbmFibGVkLFxuICBlbmFibGVFdmVudHMsXG4gIHBsYWNlbWVudCxcbiAgZmxpcCxcbiAgb2Zmc2V0LFxuICBmaXhlZCxcbiAgY29udGFpbmVyUGFkZGluZyxcbiAgYXJyb3dFbGVtZW50LFxuICBwb3BwZXJDb25maWcgPSB7fSxcbn06IENvbmZpZyk6IFVzZVBvcHBlck9wdGlvbnMge1xuICBjb25zdCBtb2RpZmllcnMgPSB0b01vZGlmaWVyTWFwKHBvcHBlckNvbmZpZy5tb2RpZmllcnMpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucG9wcGVyQ29uZmlnLFxuICAgIHBsYWNlbWVudCxcbiAgICBlbmFibGVkLFxuICAgIHN0cmF0ZWd5OiBmaXhlZCA/ICdmaXhlZCcgOiBwb3BwZXJDb25maWcuc3RyYXRlZ3ksXG4gICAgbW9kaWZpZXJzOiB0b01vZGlmaWVyQXJyYXkoe1xuICAgICAgLi4ubW9kaWZpZXJzLFxuICAgICAgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlRXZlbnRzLFxuICAgICAgfSxcbiAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAuLi5tb2RpZmllcnMucHJldmVudE92ZXJmbG93LFxuICAgICAgICBvcHRpb25zOiBjb250YWluZXJQYWRkaW5nXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IGNvbnRhaW5lclBhZGRpbmcsXG4gICAgICAgICAgICAgIC4uLm1vZGlmaWVycy5wcmV2ZW50T3ZlcmZsb3c/Lm9wdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBtb2RpZmllcnMucHJldmVudE92ZXJmbG93Py5vcHRpb25zLFxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIC4uLm1vZGlmaWVycy5vZmZzZXQ/Lm9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgLi4ubW9kaWZpZXJzLmFycm93LFxuICAgICAgICBlbmFibGVkOiAhIWFycm93RWxlbWVudCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLm1vZGlmaWVycy5hcnJvdz8ub3B0aW9ucyxcbiAgICAgICAgICBlbGVtZW50OiBhcnJvd0VsZW1lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmxpcDoge1xuICAgICAgICBlbmFibGVkOiAhIWZsaXAsXG4gICAgICAgIC4uLm1vZGlmaWVycy5mbGlwLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbn1cbiIsImltcG9ydCBfcmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gRGVmYXVsdCBjb250ZXh0IHZhbHVlIHRvIHVzZSBpbiBjYXNlIHRoZXJlIGlzIG5vIFNTUlByb3ZpZGVyLiBUaGlzIGlzIGZpbmUgZm9yXG4vLyBjbGllbnQtb25seSBhcHBzLiBJbiBvcmRlciB0byBzdXBwb3J0IG11bHRpcGxlIGNvcGllcyBvZiBSZWFjdCBBcmlhIHBvdGVudGlhbGx5XG4vLyBiZWluZyBvbiB0aGUgcGFnZSBhdCBvbmNlLCB0aGUgcHJlZml4IGlzIHNldCB0byBhIHJhbmRvbSBudW1iZXIuIFNTUlByb3ZpZGVyXG4vLyB3aWxsIHJlc2V0IHRoaXMgdG8gemVybyBmb3IgY29uc2lzdGVuY3kgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCwgc28gaW4gdGhlXG4vLyBTU1IgY2FzZSBtdWx0aXBsZSBjb3BpZXMgb2YgUmVhY3QgQXJpYSBpcyBub3Qgc3VwcG9ydGVkLlxuY29uc3QgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ID0ge1xuICBwcmVmaXg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwKSxcbiAgY3VycmVudDogMFxufTtcblxuY29uc3QgJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQgPSBfcmVhY3QuY3JlYXRlQ29udGV4dCgkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQpO1xuXG4vKipcbiAqIFdoZW4gdXNpbmcgU1NSIHdpdGggUmVhY3QgQXJpYSwgYXBwbGljYXRpb25zIG11c3QgYmUgd3JhcHBlZCBpbiBhbiBTU1JQcm92aWRlci5cbiAqIFRoaXMgZW5zdXJlcyB0aGF0IGF1dG8gZ2VuZXJhdGVkIGlkcyBhcmUgY29uc2lzdGVudCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNTUlByb3ZpZGVyKHByb3BzKSB7XG4gIGxldCBjdXIgPSB1c2VDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0KTtcbiAgbGV0IHZhbHVlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IFNTUlByb3ZpZGVyLCBzZXQgdG8gemVybywgb3RoZXJ3aXNlIGluY3JlbWVudC5cbiAgICBwcmVmaXg6IGN1ciA9PT0gJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGRlZmF1bHRDb250ZXh0ID8gMCA6ICsrY3VyLnByZWZpeCxcbiAgICBjdXJyZW50OiAwXG4gIH0pLCBbY3VyXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmNyZWF0ZUVsZW1lbnQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufVxubGV0ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRjYW5Vc2VET00gPSBCb29sZWFuKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG4vKiogQHByaXZhdGUgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNTUlNhZmVJZChkZWZhdWx0SWQpIHtcbiAgbGV0IGN0eCA9IHVzZUNvbnRleHQoJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJFNTUkNvbnRleHQpOyAvLyBJZiB3ZSBhcmUgcmVuZGVyaW5nIGluIGEgbm9uLURPTSBlbnZpcm9ubWVudCwgYW5kIHRoZXJlJ3Mgbm8gU1NSUHJvdmlkZXIsXG4gIC8vIHByb3ZpZGUgYSB3YXJuaW5nIHRvIGhpbnQgdG8gdGhlIGRldmVsb3BlciB0byBhZGQgb25lLlxuXG4gIGlmIChjdHggPT09ICRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRkZWZhdWx0Q29udGV4dCAmJiAhJGYwMWExODNjYzdiZGZmNzc4NDllNDlhZDI2ZWI5MDQkdmFyJGNhblVzZURPTSkge1xuICAgIGNvbnNvbGUud2FybignV2hlbiBzZXJ2ZXIgcmVuZGVyaW5nLCB5b3UgbXVzdCB3cmFwIHlvdXIgYXBwbGljYXRpb24gaW4gYW4gPFNTUlByb3ZpZGVyPiB0byBlbnN1cmUgY29uc2lzdGVudCBpZHMgYXJlIGdlbmVyYXRlZCBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHNlcnZlci4nKTtcbiAgfVxuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGRlZmF1bHRJZCB8fCBcInJlYWN0LWFyaWEtXCIgKyBjdHgucHJlZml4ICsgXCItXCIgKyArK2N0eC5jdXJyZW50LCBbZGVmYXVsdElkXSk7XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGN1cnJlbnRseSBiZWluZyBzZXJ2ZXIgc2lkZSByZW5kZXJlZCBvclxuICogaHlkcmF0ZWQgb24gdGhlIGNsaWVudC4gQ2FuIGJlIHVzZWQgdG8gZGVsYXkgYnJvd3Nlci1zcGVjaWZpYyByZW5kZXJpbmdcbiAqIHVudGlsIGFmdGVyIGh5ZHJhdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNTU1IoKSB7XG4gIGxldCBjdXIgPSB1c2VDb250ZXh0KCRmMDFhMTgzY2M3YmRmZjc3ODQ5ZTQ5YWQyNmViOTA0JHZhciRTU1JDb250ZXh0KTtcbiAgbGV0IGlzSW5TU1JDb250ZXh0ID0gY3VyICE9PSAkZjAxYTE4M2NjN2JkZmY3Nzg0OWU0OWFkMjZlYjkwNCR2YXIkZGVmYXVsdENvbnRleHQ7XG4gIGxldCBbaXNTU1IsIHNldElzU1NSXSA9IHVzZVN0YXRlKGlzSW5TU1JDb250ZXh0KTsgLy8gSWYgb24gdGhlIGNsaWVudCwgYW5kIHRoZSBjb21wb25lbnQgd2FzIGluaXRpYWxseSBzZXJ2ZXIgcmVuZGVyZWQsXG4gIC8vIHRoZW4gc2NoZWR1bGUgYSBsYXlvdXQgZWZmZWN0IHRvIHVwZGF0ZSB0aGUgY29tcG9uZW50IGFmdGVyIGh5ZHJhdGlvbi5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJblNTUkNvbnRleHQpIHtcbiAgICAvLyBUaGlzIGlmIHN0YXRlbWVudCB0ZWNobmljYWxseSBicmVha3MgdGhlIHJ1bGVzIG9mIGhvb2tzLCBidXQgaXMgc2FmZVxuICAgIC8vIGJlY2F1c2UgdGhlIGNvbmRpdGlvbiBuZXZlciBjaGFuZ2VzIGFmdGVyIG1vdW50aW5nLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRJc1NTUihmYWxzZSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIGlzU1NSO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiByZWFkT25seVByb3BUeXBlKGhhbmRsZXIsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghcHJvcHNbaGFuZGxlcl0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIllvdSBoYXZlIHByb3ZpZGVkIGEgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCB0byBgXCIgKyBuYW1lICsgXCJgIFwiICsgKFwid2l0aG91dCBhbiBgXCIgKyBoYW5kbGVyICsgXCJgIGhhbmRsZXIgcHJvcC4gVGhpcyB3aWxsIHJlbmRlciBhIHJlYWQtb25seSBmaWVsZC4gXCIpICsgKFwiSWYgdGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgXCIgKyBkZWZhdWx0S2V5KHByb3BOYW1lKSArIFwiYC4gXCIpICsgKFwiT3RoZXJ3aXNlLCBzZXQgYFwiICsgaGFuZGxlciArIFwiYC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuY29udHJvbGxlZFByb3BUeXBlcyhjb250cm9sbGVkVmFsdWVzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgcHJvcFR5cGVzID0ge307XG4gIE9iamVjdC5rZXlzKGNvbnRyb2xsZWRWYWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAvLyBhZGQgZGVmYXVsdCBwcm9wVHlwZXMgZm9yIGZvbGtzIHRoYXQgdXNlIHJ1bnRpbWUgY2hlY2tzXG4gICAgcHJvcFR5cGVzW2RlZmF1bHRLZXkocHJvcCldID0gbm9vcDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IGNvbnRyb2xsZWRWYWx1ZXNbcHJvcF07XG4gICAgICAhKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJyAmJiBoYW5kbGVyLnRyaW0oKS5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnVW5jb250cm9sbGFibGUgLSBbJXNdOiB0aGUgcHJvcCBgJXNgIG5lZWRzIGEgdmFsaWQgaGFuZGxlciBrZXkgbmFtZSBpbiBvcmRlciB0byBtYWtlIGl0IHVuY29udHJvbGxhYmxlJywgZGlzcGxheU5hbWUsIHByb3ApIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHByb3BUeXBlc1twcm9wXSA9IHJlYWRPbmx5UHJvcFR5cGUoaGFuZGxlciwgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9wVHlwZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wKHByb3BzLCBwcm9wKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRLZXkoa2V5KSB7XG4gIHJldHVybiAnZGVmYXVsdCcgKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xufVxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5BY2NlcHRSZWYoY29tcG9uZW50KSB7XG4gIHJldHVybiAhIWNvbXBvbmVudCAmJiAodHlwZW9mIGNvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyB8fCBjb21wb25lbnQucHJvdG90eXBlICYmIGNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcblxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gdXNlVW5jb250cm9sbGVkUHJvcChwcm9wVmFsdWUsIGRlZmF1bHRWYWx1ZSwgaGFuZGxlcikge1xuICB2YXIgd2FzUHJvcFJlZiA9IHVzZVJlZihwcm9wVmFsdWUgIT09IHVuZGVmaW5lZCk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksXG4gICAgICBzdGF0ZVZhbHVlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIGlzUHJvcCA9IHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgd2FzUHJvcCA9IHdhc1Byb3BSZWYuY3VycmVudDtcbiAgd2FzUHJvcFJlZi5jdXJyZW50ID0gaXNQcm9wO1xuICAvKipcbiAgICogSWYgYSBwcm9wIHN3aXRjaGVzIGZyb20gY29udHJvbGxlZCB0byBVbmNvbnRyb2xsZWRcbiAgICogcmVzZXQgaXRzIHZhbHVlIHRvIHRoZSBkZWZhdWx0VmFsdWVcbiAgICovXG5cbiAgaWYgKCFpc1Byb3AgJiYgd2FzUHJvcCAmJiBzdGF0ZVZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcbiAgICBzZXRTdGF0ZShkZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIFtpc1Byb3AgPyBwcm9wVmFsdWUgOiBzdGF0ZVZhbHVlLCB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlcikgaGFuZGxlci5hcHBseSh2b2lkIDAsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKTtcbiAgICBzZXRTdGF0ZSh2YWx1ZSk7XG4gIH0sIFtoYW5kbGVyXSldO1xufVxuXG5leHBvcnQgeyB1c2VVbmNvbnRyb2xsZWRQcm9wIH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWQocHJvcHMsIGNvbmZpZykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgZmllbGROYW1lKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHZhciBfcmVmID0gcmVzdWx0LFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmW1V0aWxzLmRlZmF1bHRLZXkoZmllbGROYW1lKV0sXG4gICAgICAgIHByb3BzVmFsdWUgPSBfcmVmW2ZpZWxkTmFtZV0sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbVXRpbHMuZGVmYXVsdEtleShmaWVsZE5hbWUpLCBmaWVsZE5hbWVdLm1hcChfdG9Qcm9wZXJ0eUtleSkpO1xuXG4gICAgdmFyIGhhbmRsZXJOYW1lID0gY29uZmlnW2ZpZWxkTmFtZV07XG5cbiAgICB2YXIgX3VzZVVuY29udHJvbGxlZFByb3AgPSB1c2VVbmNvbnRyb2xsZWRQcm9wKHByb3BzVmFsdWUsIGRlZmF1bHRWYWx1ZSwgcHJvcHNbaGFuZGxlck5hbWVdKSxcbiAgICAgICAgdmFsdWUgPSBfdXNlVW5jb250cm9sbGVkUHJvcFswXSxcbiAgICAgICAgaGFuZGxlciA9IF91c2VVbmNvbnRyb2xsZWRQcm9wWzFdO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltmaWVsZE5hbWVdID0gdmFsdWUsIF9leHRlbmRzMltoYW5kbGVyTmFtZV0gPSBoYW5kbGVyLCBfZXh0ZW5kczIpKTtcbiAgfSwgcHJvcHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG52YXIgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvanF1ZW5zZS9zcmMvdW5jb250cm9sbGFibGUvc3JjL3VuY29udHJvbGxhYmxlLmpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuY29udHJvbGxhYmxlKENvbXBvbmVudCwgY29udHJvbGxlZFZhbHVlcywgbWV0aG9kcykge1xuICBpZiAobWV0aG9kcyA9PT0gdm9pZCAwKSB7XG4gICAgbWV0aG9kcyA9IFtdO1xuICB9XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICB2YXIgY2FuQWNjZXB0UmVmID0gVXRpbHMuY2FuQWNjZXB0UmVmKENvbXBvbmVudCk7XG4gIHZhciBjb250cm9sbGVkUHJvcHMgPSBPYmplY3Qua2V5cyhjb250cm9sbGVkVmFsdWVzKTtcbiAgdmFyIFBST1BTX1RPX09NSVQgPSBjb250cm9sbGVkUHJvcHMubWFwKFV0aWxzLmRlZmF1bHRLZXkpO1xuICAhKGNhbkFjY2VwdFJlZiB8fCAhbWV0aG9kcy5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnW3VuY29udHJvbGxhYmxlXSBzdGF0ZWxlc3MgZnVuY3Rpb24gY29tcG9uZW50cyBjYW5ub3QgcGFzcyB0aHJvdWdoIG1ldGhvZHMgJyArICdiZWNhdXNlIHRoZXkgaGF2ZSBubyBhc3NvY2lhdGVkIGluc3RhbmNlcy4gQ2hlY2sgY29tcG9uZW50OiAnICsgZGlzcGxheU5hbWUgKyAnLCAnICsgJ2F0dGVtcHRpbmcgdG8gcGFzcyB0aHJvdWdoIG1ldGhvZHM6ICcgKyBtZXRob2RzLmpvaW4oJywgJykpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgVW5jb250cm9sbGVkQ29tcG9uZW50ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb21wb25lbnQoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuaGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGNvbnRyb2xsZWRWYWx1ZXNbcHJvcE5hbWVdO1xuXG4gICAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHNbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcylbaGFuZGxlck5hbWVdLmFwcGx5KF90aGlzJHByb3BzLCBbdmFsdWVdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIV90aGlzLnVubW91bnRlZCkgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltwcm9wTmFtZV0gPSB2YWx1ZSwgX2V4dGVuZHMyKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlcnNbaGFuZGxlck5hbWVdID0gaGFuZGxlQ2hhbmdlO1xuICAgICAgfSk7XG4gICAgICBpZiAobWV0aG9kcy5sZW5ndGgpIF90aGlzLmF0dGFjaFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgX3RoaXMuaW5uZXIgPSByZWY7XG4gICAgICB9O1xuICAgICAgdmFyIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250cm9sbGVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhbHVlc1trZXldID0gX3RoaXMucHJvcHNbVXRpbHMuZGVmYXVsdEtleShrZXkpXTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICBwcmV2UHJvcHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgIC8vbGV0IHNldFN0YXRlIHRyaWdnZXIgdGhlIHVwZGF0ZVxuICAgICAgcmV0dXJuICF0aGlzLl9ub3RpZnlpbmc7XG4gICAgfTtcblxuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgdmFsdWVzID0gX3JlZjIudmFsdWVzLFxuICAgICAgICAgIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcztcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHZhbHVlczogX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShudWxsKSwgdmFsdWVzKSxcbiAgICAgICAgcHJldlByb3BzOiB7fVxuICAgICAgfTtcbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgcHJvcCBzd2l0Y2hlcyBmcm9tIGNvbnRyb2xsZWQgdG8gVW5jb250cm9sbGVkXG4gICAgICAgICAqIHJlc2V0IGl0cyB2YWx1ZSB0byB0aGUgZGVmYXVsdFZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0U3RhdGUucHJldlByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuXG4gICAgICAgIGlmICghVXRpbHMuaXNQcm9wKHByb3BzLCBrZXkpICYmIFV0aWxzLmlzUHJvcChwcmV2UHJvcHMsIGtleSkpIHtcbiAgICAgICAgICBuZXh0U3RhdGUudmFsdWVzW2tleV0gPSBwcm9wc1tVdGlscy5kZWZhdWx0S2V5KGtleSldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bm1vdW50ZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIFBST1BTX1RPX09NSVQuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBfdGhpczIucHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICBuZXdQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BWYWx1ZSA6IF90aGlzMi5zdGF0ZS52YWx1ZXNbcHJvcE5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgbmV3UHJvcHMsIHRoaXMuaGFuZGxlcnMsIHtcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCB0aGlzLmF0dGFjaFJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVW5jb250cm9sbGVkQ29tcG9uZW50O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgcG9seWZpbGwoVW5jb250cm9sbGVkQ29tcG9uZW50KTtcbiAgVW5jb250cm9sbGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJVbmNvbnRyb2xsZWQoXCIgKyBkaXNwbGF5TmFtZSArIFwiKVwiO1xuICBVbmNvbnRyb2xsZWRDb21wb25lbnQucHJvcFR5cGVzID0gX2V4dGVuZHMoe1xuICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZigpIHt9XG4gIH0sIFV0aWxzLnVuY29udHJvbGxlZFByb3BUeXBlcyhjb250cm9sbGVkVmFsdWVzLCBkaXNwbGF5TmFtZSkpO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIFVuY29udHJvbGxlZENvbXBvbmVudC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICRwcm94aWVkTWV0aG9kKCkge1xuICAgICAgdmFyIF90aGlzJGlubmVyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJGlubmVyID0gdGhpcy5pbm5lcilbbWV0aG9kXS5hcHBseShfdGhpcyRpbm5lciwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBVbmNvbnRyb2xsZWRDb21wb25lbnQ7XG5cbiAgaWYgKFJlYWN0LmZvcndhcmRSZWYpIHtcbiAgICBXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVW5jb250cm9sbGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDEyOFxuICAgICAgICB9LFxuICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBXcmFwcGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IFVuY29udHJvbGxlZENvbXBvbmVudC5wcm9wVHlwZXM7XG4gIH1cblxuICBXcmFwcGVkQ29tcG9uZW50LkNvbnRyb2xsZWRDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gIC8qKlxuICAgKiB1c2VmdWwgd2hlbiB3cmFwcGluZyBhIENvbXBvbmVudCBhbmQgeW91IHdhbnQgdG8gY29udHJvbFxuICAgKiBldmVyeXRoaW5nXG4gICAqL1xuXG4gIFdyYXBwZWRDb21wb25lbnQuZGVmZXJDb250cm9sVG8gPSBmdW5jdGlvbiAobmV3Q29tcG9uZW50LCBhZGRpdGlvbnMsIG5leHRNZXRob2RzKSB7XG4gICAgaWYgKGFkZGl0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBhZGRpdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5jb250cm9sbGFibGUobmV3Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgY29udHJvbGxlZFZhbHVlcywgYWRkaXRpb25zKSwgbmV4dE1ldGhvZHMpO1xuICB9O1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVW5jb250cm9sbGVkLCB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAnLi9ob29rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5jb250cm9sbGFibGUgfSBmcm9tICcuL3VuY29udHJvbGxhYmxlJzsiLCJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZmluZChpdGVyLCB0YXIsIGtleSkge1xuXHRmb3IgKGtleSBvZiBpdGVyLmtleXMoKSkge1xuXHRcdGlmIChkZXF1YWwoa2V5LCB0YXIpKSByZXR1cm4ga2V5O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbiwgdG1wO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IFNldCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWJhci5oYXModG1wKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IE1hcCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuWzBdO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRlcXVhbChsZW5bMV0sIGJhci5nZXQodG1wKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuXHRcdFx0Zm9vID0gbmV3IFVpbnQ4QXJyYXkoZm9vKTtcblx0XHRcdGJhciA9IG5ldyBVaW50OEFycmF5KGJhcik7XG5cdFx0fSBlbHNlIGlmIChjdG9yID09PSBEYXRhVmlldykge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vLmdldEludDgobGVuKSA9PT0gYmFyLmdldEludDgobGVuKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZvbykpIHtcblx0XHRcdGlmICgobGVuPWZvby5ieXRlTGVuZ3RoKSA9PT0gYmFyLmJ5dGVMZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGZvb1tsZW5dID09PSBiYXJbbGVuXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIWN0b3IgfHwgdHlwZW9mIGZvbyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGxlbiA9IDA7XG5cdFx0XHRmb3IgKGN0b3IgaW4gZm9vKSB7XG5cdFx0XHRcdGlmIChoYXMuY2FsbChmb28sIGN0b3IpICYmICsrbGVuICYmICFoYXMuY2FsbChiYXIsIGN0b3IpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICghKGN0b3IgaW4gYmFyKSB8fCAhZGVxdWFsKGZvb1tjdG9yXSwgYmFyW2N0b3JdKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGJhcikubGVuZ3RoID09PSBsZW47XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvbyAhPT0gZm9vICYmIGJhciAhPT0gYmFyO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTW91bnRlZCBmcm9tICcuL3VzZU1vdW50ZWQnO1xuXG5mdW5jdGlvbiB1c2VTYWZlU3RhdGUoc3RhdGUpIHtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKTtcbiAgcmV0dXJuIFtzdGF0ZVswXSwgdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5leHRTdGF0ZSkge1xuICAgIGlmICghaXNNb3VudGVkKCkpIHJldHVybjtcbiAgICByZXR1cm4gc3RhdGVbMV0obmV4dFN0YXRlKTtcbiAgfSwgW2lzTW91bnRlZCwgc3RhdGVbMV1dKV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNhZmVTdGF0ZTsiLCJpbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gJ2RlcXVhbCc7XG5pbXBvcnQgdXNlU2FmZVN0YXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVNhZmVTdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tICcuL3BvcHBlcic7XG5cbmNvbnN0IGRpc2FibGVkQXBwbHlTdHlsZXNNb2RpZmllciA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogZmFsc2UsXG4gIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG59O1xuXG4vLyB1bnRpbCBkb2NqcyBzdXBwb3J0cyB0eXBlIGV4cG9ydHMuLi5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+ID0gUG9wcGVyLk1vZGlmaWVyPE5hbWUsIE9wdGlvbnM+O1xuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IFBvcHBlci5PcHRpb25zO1xuZXhwb3J0IHR5cGUgSW5zdGFuY2UgPSBQb3BwZXIuSW5zdGFuY2U7XG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBQb3BwZXIuUGxhY2VtZW50O1xuZXhwb3J0IHR5cGUgVmlydHVhbEVsZW1lbnQgPSBQb3BwZXIuVmlydHVhbEVsZW1lbnQ7XG5leHBvcnQgdHlwZSBTdGF0ZSA9IFBvcHBlci5TdGF0ZTtcblxuZXhwb3J0IHR5cGUgT2Zmc2V0VmFsdWUgPSBbXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG5dO1xuZXhwb3J0IHR5cGUgT2Zmc2V0RnVuY3Rpb24gPSAoZGV0YWlsczoge1xuICBwb3BwZXI6IFBvcHBlci5SZWN0O1xuICByZWZlcmVuY2U6IFBvcHBlci5SZWN0O1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbn0pID0+IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBPZmZzZXQgPSBPZmZzZXRGdW5jdGlvbiB8IE9mZnNldFZhbHVlO1xuXG5leHBvcnQgdHlwZSBNb2RpZmllck1hcCA9IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5leHBvcnQgdHlwZSBNb2RpZmllcnMgPVxuICB8IFBvcHBlci5PcHRpb25zWydtb2RpZmllcnMnXVxuICB8IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8TW9kaWZpZXI8YW55LCBhbnk+Pj47XG5cbmV4cG9ydCB0eXBlIFVzZVBvcHBlck9wdGlvbnMgPSBPbWl0PFxuICBPcHRpb25zLFxuICAnbW9kaWZpZXJzJyB8ICdwbGFjZW1lbnQnIHwgJ3N0cmF0ZWd5J1xuPiAmIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHBsYWNlbWVudD86IE9wdGlvbnNbJ3BsYWNlbWVudCddO1xuICBzdHJhdGVneT86IE9wdGlvbnNbJ3N0cmF0ZWd5J107XG4gIG1vZGlmaWVycz86IE9wdGlvbnNbJ21vZGlmaWVycyddO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VQb3BwZXJTdGF0ZSB7XG4gIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICB1cGRhdGU6ICgpID0+IHZvaWQ7XG4gIGZvcmNlVXBkYXRlOiAoKSA9PiB2b2lkO1xuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PjtcbiAgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+PjtcbiAgc3RhdGU/OiBTdGF0ZTtcbn1cblxuY29uc3QgYXJpYURlc2NyaWJlZEJ5TW9kaWZpZXI6IE1vZGlmaWVyPCdhcmlhRGVzY3JpYmVkQnknLCB1bmRlZmluZWQ+ID0ge1xuICBuYW1lOiAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgZWZmZWN0OiAoeyBzdGF0ZSB9KSA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHBvcHBlciB9ID0gc3RhdGUuZWxlbWVudHM7XG4gICAgaWYgKCdyZW1vdmVBdHRyaWJ1dGUnIGluIHJlZmVyZW5jZSkge1xuICAgICAgY29uc3QgaWRzID0gKHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSB8fCAnJylcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLmZpbHRlcigoaWQpID0+IGlkLnRyaW0oKSAhPT0gcG9wcGVyLmlkKTtcblxuICAgICAgaWYgKCFpZHMubGVuZ3RoKSByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBlbHNlIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpZHMuam9pbignLCcpKTtcbiAgICB9XG4gIH0sXG4gIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gc3RhdGUuZWxlbWVudHM7XG5cbiAgICBjb25zdCByb2xlID0gcG9wcGVyLmdldEF0dHJpYnV0ZSgncm9sZScpPy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHBvcHBlci5pZCAmJiByb2xlID09PSAndG9vbHRpcCcgJiYgJ3NldEF0dHJpYnV0ZScgaW4gcmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBpZHMgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICBpZiAoaWRzICYmIGlkcy5zcGxpdCgnLCcpLmluZGV4T2YocG9wcGVyLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWZlcmVuY2Uuc2V0QXR0cmlidXRlKFxuICAgICAgICAnYXJpYS1kZXNjcmliZWRieScsXG4gICAgICAgIGlkcyA/IGAke2lkc30sJHtwb3BwZXIuaWR9YCA6IHBvcHBlci5pZCxcbiAgICAgICk7XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgRU1QVFlfTU9ESUZJRVJTID0gW10gYXMgYW55O1xuLyoqXG4gKiBQb3NpdGlvbiBhbiBlbGVtZW50IHJlbGF0aXZlIHNvbWUgcmVmZXJlbmNlIGVsZW1lbnQgdXNpbmcgUG9wcGVyLmpzXG4gKlxuICogQHBhcmFtIHJlZmVyZW5jZUVsZW1lbnRcbiAqIEBwYXJhbSBwb3BwZXJFbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdD19ICAgICBvcHRpb25zLm1vZGlmaWVycyBQb3BwZXIuanMgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSAgICBvcHRpb25zLmVuYWJsZWQgdG9nZ2xlIHRoZSBwb3BwZXIgZnVuY3Rpb25hbGl0eSBvbi9vZmZcbiAqIEBwYXJhbSB7c3RyaW5nPX0gICAgIG9wdGlvbnMucGxhY2VtZW50IFRoZSBwb3BwZXIgZWxlbWVudCBwbGFjZW1lbnQgcmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZz19ICAgICBvcHRpb25zLnN0cmF0ZWd5IHRoZSBwb3NpdGlvbmluZyBzdHJhdGVneVxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vbkNyZWF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSAgIG9wdGlvbnMub25VcGRhdGUgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkXG4gKlxuICogQHJldHVybnMge1VzZVBvcHBlclN0YXRlfSBUaGUgcG9wcGVyIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHVzZVBvcHBlcihcbiAgcmVmZXJlbmNlRWxlbWVudDogVmlydHVhbEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBwb3BwZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHtcbiAgICBlbmFibGVkID0gdHJ1ZSxcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzID0gRU1QVFlfTU9ESUZJRVJTLFxuICAgIC4uLmNvbmZpZ1xuICB9OiBVc2VQb3BwZXJPcHRpb25zID0ge30sXG4pOiBVc2VQb3BwZXJTdGF0ZSB7XG4gIGNvbnN0IHByZXZNb2RpZmllcnMgPSB1c2VSZWY8VXNlUG9wcGVyT3B0aW9uc1snbW9kaWZpZXJzJ10+KG1vZGlmaWVycyk7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlUmVmID0gdXNlUmVmPEluc3RhbmNlPigpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50Py51cGRhdGUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQ/LmZvcmNlVXBkYXRlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbcG9wcGVyU3RhdGUsIHNldFN0YXRlXSA9IHVzZVNhZmVTdGF0ZShcbiAgICB1c2VTdGF0ZTxVc2VQb3BwZXJTdGF0ZT4oe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgdXBkYXRlLFxuICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBwb3BwZXI6IHt9LFxuICAgICAgICBhcnJvdzoge30sXG4gICAgICB9LFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IHVwZGF0ZU1vZGlmaWVyID0gdXNlTWVtbzxNb2RpZmllcjwndXBkYXRlU3RhdGVNb2RpZmllcicsIGFueT4+KFxuICAgICgpID0+ICh7XG4gICAgICBuYW1lOiAndXBkYXRlU3RhdGVNb2RpZmllcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICd3cml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbjogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXM6IFVzZVBvcHBlclN0YXRlWydzdHlsZXMnXSA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzOiBVc2VQb3BwZXJTdGF0ZVsnYXR0cmlidXRlcyddID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBzdHlsZXNbZWxlbWVudF0gPSBzdGF0ZS5zdHlsZXNbZWxlbWVudF07XG4gICAgICAgICAgYXR0cmlidXRlc1tlbGVtZW50XSA9IHN0YXRlLmF0dHJpYnV0ZXNbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICB1cGRhdGUsXG4gICAgICAgICAgZm9yY2VVcGRhdGUsXG4gICAgICAgICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBbdXBkYXRlLCBmb3JjZVVwZGF0ZSwgc2V0U3RhdGVdLFxuICApO1xuXG4gIGNvbnN0IG5leHRNb2RpZmllcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWRlcXVhbChwcmV2TW9kaWZpZXJzLmN1cnJlbnQsIG1vZGlmaWVycykpIHtcbiAgICAgIHByZXZNb2RpZmllcnMuY3VycmVudCA9IG1vZGlmaWVycztcbiAgICB9XG4gICAgcmV0dXJuIHByZXZNb2RpZmllcnMuY3VycmVudCE7XG4gIH0sIFttb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCB8fCAhZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5zZXRPcHRpb25zKHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLm5leHRNb2RpZmllcnMsXG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyLFxuICAgICAgICBkaXNhYmxlZEFwcGx5U3R5bGVzTW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0pO1xuICB9LCBbc3RyYXRlZ3ksIHBsYWNlbWVudCwgdXBkYXRlTW9kaWZpZXIsIGVuYWJsZWQsIG5leHRNb2RpZmllcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCByZWZlcmVuY2VFbGVtZW50ID09IG51bGwgfHwgcG9wcGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFsuLi5uZXh0TW9kaWZpZXJzLCBhcmlhRGVzY3JpYmVkQnlNb2RpZmllciwgdXBkYXRlTW9kaWZpZXJdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgICAgLi4ucyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICBzdHlsZXM6IHsgcG9wcGVyOiB7fSB9LFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBUaGlzIGlzIG9ubHkgcnVuIG9uY2UgdG8gX2NyZWF0ZV8gdGhlIHBvcHBlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2VuYWJsZWQsIHJlZmVyZW5jZUVsZW1lbnQsIHBvcHBlckVsZW1lbnRdKTtcblxuICByZXR1cm4gcG9wcGVyU3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBvcHBlcjtcbiIsInZhciBtYXRjaGVzSW1wbDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hdGNoZXMobm9kZSwgc2VsZWN0b3IpIHtcbiAgaWYgKCFtYXRjaGVzSW1wbCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgbmF0aXZlTWF0Y2ggPSBib2R5Lm1hdGNoZXMgfHwgYm9keS5tYXRjaGVzU2VsZWN0b3IgfHwgYm9keS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgYm9keS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgYm9keS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIG1hdGNoZXNJbXBsID0gZnVuY3Rpb24gbWF0Y2hlc0ltcGwobiwgcykge1xuICAgICAgcmV0dXJuIG5hdGl2ZU1hdGNoLmNhbGwobiwgcyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzSW1wbChub2RlLCBzZWxlY3Rvcik7XG59IiwiaW1wb3J0IG1hdGNoZXMgZnJvbSAnZG9tLWhlbHBlcnMvbWF0Y2hlcyc7XG5pbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAnZG9tLWhlbHBlcnMvYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkUHJvcCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZUdsb2JhbExpc3RlbmVyIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUdsb2JhbExpc3RlbmVyJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG5pbXBvcnQgRHJvcGRvd25Db250ZXh0IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcbmltcG9ydCBEcm9wZG93bk1lbnUsIHtcbiAgRHJvcGRvd25NZW51UHJvcHMsXG4gIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhLFxuICBVc2VEcm9wZG93bk1lbnVPcHRpb25zLFxufSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgRHJvcGRvd25Ub2dnbGUsIHtcbiAgRHJvcGRvd25Ub2dnbGVQcm9wcyxcbiAgVXNlRHJvcGRvd25Ub2dnbGVNZXRhZGF0YSxcbn0gZnJvbSAnLi9Ecm9wZG93blRvZ2dsZSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtLCB7IERyb3Bkb3duSXRlbVByb3BzIH0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xuaW1wb3J0IHsgU2VsZWN0Q2FsbGJhY2sgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGFBdHRyIH0gZnJvbSAnLi9EYXRhS2V5JztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJy4vdXNlUG9wcGVyJztcbmltcG9ydCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL3BvcHBlcic7XG5cbmV4cG9ydCB0eXBlIHtcbiAgRHJvcGRvd25NZW51UHJvcHMsXG4gIFVzZURyb3Bkb3duTWVudU1ldGFkYXRhLFxuICBVc2VEcm9wZG93bk1lbnVPcHRpb25zLFxuICBEcm9wZG93blRvZ2dsZVByb3BzLFxuICBVc2VEcm9wZG93blRvZ2dsZU1ldGFkYXRhLFxuICBEcm9wZG93bkl0ZW1Qcm9wcyxcbn07XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIHRoZSByb290IGRyb3Bkb3duIGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byBhbiBlbGVtZW50IGNvbnRhaW5pbmcgX2JvdGhfIHRoZVxuICAgKiBtZW51IGFuZCB0b2dnbGUgaW4gb3JkZXIgdG8gaGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgZm9jdXMgbWFuYWdlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIG9uS2V5RG93bjogKFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBQb3BwZXJKUyBwbGFjZW1lbnQgZm9yIHBvc2l0aW9uaW5nIHRoZSBEcm9wZG93biBtZW51IGluIHJlbGF0aW9uIHRvIGl0J3MgVG9nZ2xlLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnYm90dG9tLXN0YXJ0J1xuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YocGxhY2VtZW50cyksXG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBmb2N1cyBiZWhhdmlvciBmb3Igd2hlbiB0aGUgRHJvcGRvd24gaXMgb3BlbmVkLiBTZXQgdG9cbiAgICogYHRydWVgIHRvIGFsd2F5cyBmb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtLCBga2V5Ym9hcmRgIHRvIGZvY3VzIG9ubHkgd2hlblxuICAgKiBuYXZpZ2F0aW5nIHZpYSB0aGUga2V5Ym9hcmQsIG9yIGBmYWxzZWAgdG8gZGlzYWJsZSBjb21wbGV0ZWx5XG4gICAqXG4gICAqIFRoZSBEZWZhdWx0IGJlaGF2aW9yIGlzIGBmYWxzZWAgKip1bmxlc3MqKiB0aGUgTWVudSBoYXMgYSBgcm9sZT1cIm1lbnVcImBcbiAgICogd2hlcmUgaXQgd2lsbCBkZWZhdWx0IHRvIGBrZXlib2FyZGAgdG8gbWF0Y2ggdGhlIHJlY29tbWVuZGVkIFtBUklBIEF1dGhvcmluZyBwcmFjdGljZXNdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMtMS4xLyNtZW51YnV0dG9uKS5cbiAgICovXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93OiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCB0cnVlLCAna2V5Ym9hcmQnXSksXG5cbiAgLyoqXG4gICAqIEEgY3NzIHNsZWN0b3Igc3RyaW5nIHRoYXQgd2lsbCByZXR1cm4gX19mb2N1c2FibGVfXyBtZW51IGl0ZW1zLlxuICAgKiBTZWxlY3RvcnMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBtZW51IGNvbXBvbmVudDpcbiAgICogZS5nLiBgID4gbGk6bm90KCcuZGlzYWJsZWQnKWBcbiAgICovXG4gIGl0ZW1TZWxlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIERyb3Bkb3duIGlzIHZpc2libGUuXG4gICAqXG4gICAqIEBjb250cm9sbGFibGUgb25Ub2dnbGVcbiAgICovXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbml0aWFsIHNob3cgcG9zaXRpb24gb2YgdGhlIERyb3Bkb3duLlxuICAgKi9cbiAgZGVmYXVsdFNob3c6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIERyb3Bkb3duIHdpc2hlcyB0byBjaGFuZ2UgdmlzaWJpbGl0eS4gQ2FsbGVkIHdpdGggdGhlIHJlcXVlc3RlZFxuICAgKiBgc2hvd2AgdmFsdWUsIHRoZSBET00gZXZlbnQsIGFuZCB0aGUgc291cmNlIHRoYXQgZmlyZWQgaXQ6IGAnY2xpY2snYCxgJ2tleWRvd24nYCxgJ3Jvb3RDbG9zZSdgLCBvciBgJ3NlbGVjdCdgLlxuICAgKlxuICAgKiBgYGB0cyBzdGF0aWNcbiAgICogZnVuY3Rpb24oXG4gICAqICAgaXNPcGVuOiBib29sZWFuLFxuICAgKiAgIGV2ZW50OiBTeW50aGV0aWNFdmVudCxcbiAgICogKTogdm9pZFxuICAgKiBgYGBcbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBzaG93XG4gICAqL1xuICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5qZWN0ZWRQcm9wcyB7XG4gIG9uS2V5RG93bjogUmVhY3QuS2V5Ym9hcmRFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlTWV0YWRhdGEge1xuICBzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb3JpZ2luYWxFdmVudDogUmVhY3QuU3ludGhldGljRXZlbnQgfCBFdmVudCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50O1xuICBkZWZhdWx0U2hvdz86IGJvb2xlYW47XG4gIHNob3c/OiBib29sZWFuO1xuICBvblNlbGVjdD86IFNlbGVjdENhbGxiYWNrO1xuICBvblRvZ2dsZT86IChuZXh0U2hvdzogYm9vbGVhbiwgbWV0YTogVG9nZ2xlTWV0YWRhdGEpID0+IHZvaWQ7XG4gIGl0ZW1TZWxlY3Rvcj86IHN0cmluZztcbiAgZm9jdXNGaXJzdEl0ZW1PblNob3c/OiBmYWxzZSB8IHRydWUgfCAna2V5Ym9hcmQnO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWZXaXRoVXBkYXRlKCkge1xuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBhdHRhY2hSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWxlbWVudDogbnVsbCB8IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICByZWYuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAvLyBlbnN1cmUgdGhhdCBhIG1lbnUgc2V0IHRyaWdnZXJzIGFuIHVwZGF0ZSBmb3IgY29uc3VtZXJzXG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH0sXG4gICAgW2ZvcmNlVXBkYXRlXSxcbiAgKTtcbiAgcmV0dXJuIFtyZWYsIGF0dGFjaFJlZl0gYXMgY29uc3Q7XG59XG5cbi8qKlxuICogQGRpc3BsYXlOYW1lIERyb3Bkb3duXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIERyb3Bkb3duKHtcbiAgZGVmYXVsdFNob3csXG4gIHNob3c6IHJhd1Nob3csXG4gIG9uU2VsZWN0LFxuICBvblRvZ2dsZTogcmF3T25Ub2dnbGUsXG4gIGl0ZW1TZWxlY3RvciA9IGAqIFske2RhdGFBdHRyKCdkcm9wZG93bi1pdGVtJyl9XWAsXG4gIGZvY3VzRmlyc3RJdGVtT25TaG93LFxuICBwbGFjZW1lbnQgPSAnYm90dG9tLXN0YXJ0JyxcbiAgY2hpbGRyZW4sXG59OiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IFtzaG93LCBvblRvZ2dsZV0gPSB1c2VVbmNvbnRyb2xsZWRQcm9wKFxuICAgIHJhd1Nob3csXG4gICAgZGVmYXVsdFNob3chLFxuICAgIHJhd09uVG9nZ2xlLFxuICApO1xuXG4gIC8vIFdlIHVzZSBub3JtYWwgcmVmcyBpbnN0ZWFkIG9mIHVzZUNhbGxiYWNrUmVmIGluIG9yZGVyIHRvIHBvcHVsYXRlIHRoZVxuICAvLyB0aGUgdmFsdWUgYXMgcXVpY2tseSBhcyBwb3NzaWJsZSwgb3RoZXJ3aXNlIHRoZSBlZmZlY3QgdG8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgLy8gbWF5IHJ1biBiZWZvcmUgdGhlIHN0YXRlIHZhbHVlIGlzIHNldFxuICBjb25zdCBbbWVudVJlZiwgc2V0TWVudV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IG1lbnVFbGVtZW50ID0gbWVudVJlZi5jdXJyZW50O1xuXG4gIGNvbnN0IFt0b2dnbGVSZWYsIHNldFRvZ2dsZV0gPSB1c2VSZWZXaXRoVXBkYXRlKCk7XG4gIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSB0b2dnbGVSZWYuY3VycmVudDtcblxuICBjb25zdCBsYXN0U2hvdyA9IHVzZVByZXZpb3VzKHNob3cpO1xuICBjb25zdCBsYXN0U291cmNlRXZlbnQgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZvY3VzSW5Ecm9wZG93biA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IG9uU2VsZWN0Q3R4ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG5cbiAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgbmV4dFNob3c6IGJvb2xlYW4sXG4gICAgICBldmVudD86IEV2ZW50IHwgUmVhY3QuU3ludGhldGljRXZlbnQsXG4gICAgICBzb3VyY2UgPSBldmVudD8udHlwZSxcbiAgICApID0+IHtcbiAgICAgIG9uVG9nZ2xlKG5leHRTaG93LCB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBzb3VyY2UgfSk7XG4gICAgfSxcbiAgICBbb25Ub2dnbGVdLFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUV2ZW50Q2FsbGJhY2soXG4gICAgKGtleTogc3RyaW5nIHwgbnVsbCwgZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICBvblNlbGVjdD8uKGtleSwgZXZlbnQpO1xuXG4gICAgICBpZiAoIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHRvZ2dsZShmYWxzZSwgZXZlbnQsICdzZWxlY3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIG9uU2VsZWN0Q3R4Py4oa2V5LCBldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdG9nZ2xlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgc2hvdyxcbiAgICAgIG1lbnVFbGVtZW50LFxuICAgICAgdG9nZ2xlRWxlbWVudCxcbiAgICAgIHNldE1lbnUsXG4gICAgICBzZXRUb2dnbGUsXG4gICAgfSksXG4gICAgW3RvZ2dsZSwgcGxhY2VtZW50LCBzaG93LCBtZW51RWxlbWVudCwgdG9nZ2xlRWxlbWVudCwgc2V0TWVudSwgc2V0VG9nZ2xlXSxcbiAgKTtcblxuICBpZiAobWVudUVsZW1lbnQgJiYgbGFzdFNob3cgJiYgIXNob3cpIHtcbiAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IG1lbnVFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3QgZm9jdXNUb2dnbGUgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodG9nZ2xlRWxlbWVudCAmJiB0b2dnbGVFbGVtZW50LmZvY3VzKSB7XG4gICAgICB0b2dnbGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYXliZUZvY3VzRmlyc3QgPSB1c2VFdmVudENhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0eXBlID0gbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQ7XG4gICAgbGV0IGZvY3VzVHlwZSA9IGZvY3VzRmlyc3RJdGVtT25TaG93O1xuXG4gICAgaWYgKGZvY3VzVHlwZSA9PSBudWxsKSB7XG4gICAgICBmb2N1c1R5cGUgPVxuICAgICAgICBtZW51UmVmLmN1cnJlbnQgJiYgbWF0Y2hlcyhtZW51UmVmLmN1cnJlbnQsICdbcm9sZT1tZW51XScpXG4gICAgICAgICAgPyAna2V5Ym9hcmQnXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBmb2N1c1R5cGUgPT09IGZhbHNlIHx8XG4gICAgICAoZm9jdXNUeXBlID09PSAna2V5Ym9hcmQnICYmICEvXmtleS4rJC8udGVzdCh0eXBlISkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3QgPSBxc2EobWVudVJlZi5jdXJyZW50ISwgaXRlbVNlbGVjdG9yKVswXTtcbiAgICBpZiAoZmlyc3QgJiYgZmlyc3QuZm9jdXMpIGZpcnN0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3cpIG1heWJlRm9jdXNGaXJzdCgpO1xuICAgIGVsc2UgaWYgKGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50KSB7XG4gICAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgZm9jdXNUb2dnbGUoKTtcbiAgICB9XG4gICAgLy8gb25seSBgc2hvd2Agc2hvdWxkIGJlIGNoYW5naW5nXG4gIH0sIFtzaG93LCBmb2N1c0luRHJvcGRvd24sIGZvY3VzVG9nZ2xlLCBtYXliZUZvY3VzRmlyc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxhc3RTb3VyY2VFdmVudC5jdXJyZW50ID0gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0TmV4dEZvY3VzZWRDaGlsZCA9IChjdXJyZW50OiBIVE1MRWxlbWVudCwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW1lbnVSZWYuY3VycmVudCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpdGVtcyA9IHFzYShtZW51UmVmLmN1cnJlbnQsIGl0ZW1TZWxlY3Rvcik7XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGN1cnJlbnQpICsgb2Zmc2V0O1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGl0ZW1zLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zW2luZGV4XTtcbiAgfTtcblxuICB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBmcm9tTWVudSA9IG1lbnVSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KTtcbiAgICBjb25zdCBmcm9tVG9nZ2xlID0gdG9nZ2xlUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICAvLyBTZWNvbmQgb25seSB0byBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi84Y2ZiZjY5MzNiOGEwMTQ2YWMzZmJjMzY5ZjE5ZTUyMGJkMWViZGFjL2pzL3NyYy9kcm9wZG93bi5qcyNMNDAwXG4gICAgLy8gaW4gaW5zY3J1dGFiaWxpdHlcbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSk7XG4gICAgaWYgKGlzSW5wdXQgJiYgKGtleSA9PT0gJyAnIHx8IChrZXkgIT09ICdFc2NhcGUnICYmIGZyb21NZW51KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWZyb21NZW51ICYmICFmcm9tVG9nZ2xlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ1RhYicgJiYgKCFtZW51UmVmLmN1cnJlbnQgfHwgIXNob3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBldmVudC50eXBlO1xuICAgIGNvbnN0IG1ldGEgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBzb3VyY2U6IGV2ZW50LnR5cGUgfTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGdldE5leHRGb2N1c2VkQ2hpbGQodGFyZ2V0LCAtMSk7XG4gICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICBvblRvZ2dsZSh0cnVlLCBtZXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIDEpO1xuICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQuZm9jdXMpIG5leHQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICAvLyBvbiBrZXlkb3duIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFiYmVkIEZST00sIHdlIG5lZWQgdGhhdFxuICAgICAgICAvLyB0byBrbm93IGlmIHRoaXMgZXZlbnQgaXMgcmVsZXZhbnQgdG8gdGhpcyBkcm9wZG93biAoZS5nLiBpbiB0aGlzIG1lbnUpLlxuICAgICAgICAvLyBPbiBga2V5dXBgIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgYmVpbmcgdGFnZ2VkIFRPIHdoaWNoIHdlIHVzZSB0byBjaGVja1xuICAgICAgICAvLyBpZiBmb2N1cyBoYXMgbGVmdCB0aGUgbWVudVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGRvY3VtZW50IGFzIGFueSxcbiAgICAgICAgICAna2V5dXAnLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChlLmtleSA9PT0gJ1RhYicgJiYgIWUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAhbWVudVJlZi5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblRvZ2dsZShmYWxzZSwgbWV0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgPERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvU2VsZWN0YWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbkRyb3Bkb3duLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duJztcblxuRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5Ecm9wZG93bi5NZW51ID0gRHJvcGRvd25NZW51O1xuRHJvcGRvd24uVG9nZ2xlID0gRHJvcGRvd25Ub2dnbGU7XG5Ecm9wZG93bi5JdGVtID0gRHJvcGRvd25JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHZhciBjYXB0dXJlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5jYXB0dXJlIDogb3B0aW9ucztcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSk7XG5cbiAgaWYgKGhhbmRsZXIuX19vbmNlKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlci5fX29uY2UsIGNhcHR1cmUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUV2ZW50TGlzdGVuZXI7IiwiaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAnLi9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCByZW1vdmVFdmVudExpc3RlbmVyIGZyb20gJy4vcmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlZmAgd2hvc2UgdmFsdWUgaXMgdXBkYXRlZCBpbiBhbiBlZmZlY3QsIGVuc3VyaW5nIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWUgaXMgdGhlIG9uZSByZW5kZXJlZCB3aXRoLiBHZW5lcmFsbHkgb25seSByZXF1aXJlZCBmb3IgQ29uY3VycmVudCBtb2RlIHVzYWdlXG4gKiB3aGVyZSBwcmV2aW91cyB3b3JrIGluIGByZW5kZXIoKWAgbWF5IGJlIGRpc2NhcmRlZCBiZWZvciBiZWluZyB1c2VkLlxuICpcbiAqIFRoaXMgaXMgc2FmZSB0byBhY2Nlc3MgaW4gYW4gZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGBSZWZgIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29tbWl0dGVkUmVmKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYodmFsdWUpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gcmVmO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDb21taXR0ZWRSZWY7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLkNvbnRleHQgPSBleHBvcnRzLmFsbFZhbHVlcyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3QgYWxsVmFsdWVzID0gb2JqID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIHJldHVybiBQcm9taXNlLmFsbChrZXlzLm1hcChrID0+IG9ialtrXSkpLnRoZW4odmFsdWVzID0+IHtcbiAgICBjb25zdCBuZXh0ID0ge307XG4gICAga2V5cy5mb3JFYWNoKChrLCBpKSA9PiB7XG4gICAgICBuZXh0W2tdID0gdmFsdWVzW2ldO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuYWxsVmFsdWVzID0gYWxsVmFsdWVzO1xuXG5jb25zdCBDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcblxuXG5leHBvcnRzLkNvbnRleHQgPSBDb250ZXh0O1xuXG52YXIgX2RlZmF1bHQgPSAoe1xuICBpbXBvcnRzLFxuICBjaGlsZHJlblxufSkgPT4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICB2YWx1ZTogaW1wb3J0c1xufSwgY2hpbGRyZW4pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgb3V0c2lkZSBkaXJlY3RseSB0byBzcGVjaWZpZWQgRE9NIGVsZW1lbnRcbiAqIGJ5cGFzc2luZyB0aGUgcmVhY3Qgc3ludGhldGljIGV2ZW50IHN5c3RlbS5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgdGFyZ2V0IHRvIGxpc3RlbiBmb3IgZXZlbnRzIG9uXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICBpZiAoY2FwdHVyZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FwdHVyZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGxpc3RlbmVyKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGV2ZW50VGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gZXZlbnRUYXJnZXQoKSA6IGV2ZW50VGFyZ2V0O1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICB9O1xuICB9LCBbZXZlbnRUYXJnZXRdKTtcbn0iLCJpbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBvdXRzaWRlIGRpcmVjdGx5IHRvIHRoZSBgZG9jdW1lbnRgLFxuICogYnlwYXNzaW5nIHRoZSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc3lzdGVtLlxuICpcbiAqIGBgYHRzXG4gKiB1c2VHbG9iYWxMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICogIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZXZlbnQgVGhlIERPTSBldmVudCBuYW1lXG4gKiBAcGFyYW0gaGFuZGxlciBBbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0gY2FwdHVyZSBXaGV0aGVyIG9yIG5vdCB0byBsaXN0ZW4gZHVyaW5nIHRoZSBjYXB0dXJlIGV2ZW50IHBoYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdsb2JhbExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIGlmIChjYXB0dXJlID09PSB2b2lkIDApIHtcbiAgICBjYXB0dXJlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRUYXJnZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9LCBbXSk7XG4gIHJldHVybiB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50VGFyZ2V0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG59IiwiaW1wb3J0IGlzRG9jdW1lbnQgZnJvbSAnLi9pc0RvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2luZG93KG5vZGUpIHtcbiAgaWYgKCd3aW5kb3cnIGluIG5vZGUgJiYgbm9kZS53aW5kb3cgPT09IG5vZGUpIHJldHVybiBub2RlO1xuICBpZiAoaXNEb2N1bWVudChub2RlKSkgcmV0dXJuIG5vZGUuZGVmYXVsdFZpZXcgfHwgZmFsc2U7XG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RvY3VtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICdub2RlVHlwZScgaW4gZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSBkb2N1bWVudC5ET0NVTUVOVF9OT0RFO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbT1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxyPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24geShhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1pZighYWEpdGhyb3cgRXJyb3IoeSgyMjcpKTt2YXIgYmE9bmV3IFNldCxjYT17fTtmdW5jdGlvbiBkYShhLGIpe2VhKGEsYik7ZWEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGVhKGEsYil7Y2FbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWJhLmFkZChiW2FdKX1cbnZhciBmYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksaGE9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGlhPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5qYT17fSxrYT17fTtmdW5jdGlvbiBsYShhKXtpZihpYS5jYWxsKGthLGEpKXJldHVybiEwO2lmKGlhLmNhbGwoamEsYSkpcmV0dXJuITE7aWYoaGEudGVzdChhKSlyZXR1cm4ga2FbYV09ITA7amFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gbWEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBuYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxtYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEIoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciBEPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0RbYl09bmV3IEIoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgb2E9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBwYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxcbnBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbkQueGxpbmtIcmVmPW5ldyBCKFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHFhKGEsYixjLGQpe3ZhciBlPUQuaGFzT3duUHJvcGVydHkoYik/RFtiXTpudWxsO3ZhciBmPW51bGwhPT1lPzA9PT1lLnR5cGU6ZD8hMTohKDI8Yi5sZW5ndGgpfHxcIm9cIiE9PWJbMF0mJlwiT1wiIT09YlswXXx8XCJuXCIhPT1iWzFdJiZcIk5cIiE9PWJbMV0/ITE6ITA7Znx8KG5hKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9sYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSkpfVxudmFyIHJhPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHNhPTYwMTAzLHRhPTYwMTA2LHVhPTYwMTA3LHdhPTYwMTA4LHhhPTYwMTE0LHlhPTYwMTA5LHphPTYwMTEwLEFhPTYwMTEyLEJhPTYwMTEzLENhPTYwMTIwLERhPTYwMTE1LEVhPTYwMTE2LEZhPTYwMTIxLEdhPTYwMTI4LEhhPTYwMTI5LElhPTYwMTMwLEphPTYwMTMxO1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIEU9U3ltYm9sLmZvcjtzYT1FKFwicmVhY3QuZWxlbWVudFwiKTt0YT1FKFwicmVhY3QucG9ydGFsXCIpO3VhPUUoXCJyZWFjdC5mcmFnbWVudFwiKTt3YT1FKFwicmVhY3Quc3RyaWN0X21vZGVcIik7eGE9RShcInJlYWN0LnByb2ZpbGVyXCIpO3lhPUUoXCJyZWFjdC5wcm92aWRlclwiKTt6YT1FKFwicmVhY3QuY29udGV4dFwiKTtBYT1FKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7QmE9RShcInJlYWN0LnN1c3BlbnNlXCIpO0NhPUUoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO0RhPUUoXCJyZWFjdC5tZW1vXCIpO0VhPUUoXCJyZWFjdC5sYXp5XCIpO0ZhPUUoXCJyZWFjdC5ibG9ja1wiKTtFKFwicmVhY3Quc2NvcGVcIik7R2E9RShcInJlYWN0Lm9wYXF1ZS5pZFwiKTtIYT1FKFwicmVhY3QuZGVidWdfdHJhY2VfbW9kZVwiKTtJYT1FKFwicmVhY3Qub2Zmc2NyZWVuXCIpO0phPUUoXCJyZWFjdC5sZWdhY3lfaGlkZGVuXCIpfVxudmFyIEthPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBMYShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9S2EmJmFbS2FdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9dmFyIE1hO2Z1bmN0aW9uIE5hKGEpe2lmKHZvaWQgMD09PU1hKXRyeXt0aHJvdyBFcnJvcigpO31jYXRjaChjKXt2YXIgYj1jLnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO01hPWImJmJbMV18fFwiXCJ9cmV0dXJuXCJcXG5cIitNYSthfXZhciBPYT0hMTtcbmZ1bmN0aW9uIFBhKGEsYil7aWYoIWF8fE9hKXJldHVyblwiXCI7T2E9ITA7dmFyIGM9RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9dm9pZCAwO3RyeXtpZihiKWlmKGI9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO30sT2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwicHJvcHNcIix7c2V0OmZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9fSksXCJvYmplY3RcIj09PXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmNvbnN0cnVjdCl7dHJ5e1JlZmxlY3QuY29uc3RydWN0KGIsW10pfWNhdGNoKGspe3ZhciBkPWt9UmVmbGVjdC5jb25zdHJ1Y3QoYSxbXSxiKX1lbHNle3RyeXtiLmNhbGwoKX1jYXRjaChrKXtkPWt9YS5jYWxsKGIucHJvdG90eXBlKX1lbHNle3RyeXt0aHJvdyBFcnJvcigpO31jYXRjaChrKXtkPWt9YSgpfX1jYXRjaChrKXtpZihrJiZkJiZcInN0cmluZ1wiPT09dHlwZW9mIGsuc3RhY2spe2Zvcih2YXIgZT1rLnN0YWNrLnNwbGl0KFwiXFxuXCIpLFxuZj1kLnN0YWNrLnNwbGl0KFwiXFxuXCIpLGc9ZS5sZW5ndGgtMSxoPWYubGVuZ3RoLTE7MTw9ZyYmMDw9aCYmZVtnXSE9PWZbaF07KWgtLTtmb3IoOzE8PWcmJjA8PWg7Zy0tLGgtLSlpZihlW2ddIT09ZltoXSl7aWYoMSE9PWd8fDEhPT1oKXtkbyBpZihnLS0saC0tLDA+aHx8ZVtnXSE9PWZbaF0pcmV0dXJuXCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTt3aGlsZSgxPD1nJiYwPD1oKX1icmVha319fWZpbmFsbHl7T2E9ITEsRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9Y31yZXR1cm4oYT1hP2EuZGlzcGxheU5hbWV8fGEubmFtZTpcIlwiKT9OYShhKTpcIlwifVxuZnVuY3Rpb24gUWEoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDU6cmV0dXJuIE5hKGEudHlwZSk7Y2FzZSAxNjpyZXR1cm4gTmEoXCJMYXp5XCIpO2Nhc2UgMTM6cmV0dXJuIE5hKFwiU3VzcGVuc2VcIik7Y2FzZSAxOTpyZXR1cm4gTmEoXCJTdXNwZW5zZUxpc3RcIik7Y2FzZSAwOmNhc2UgMjpjYXNlIDE1OnJldHVybiBhPVBhKGEudHlwZSwhMSksYTtjYXNlIDExOnJldHVybiBhPVBhKGEudHlwZS5yZW5kZXIsITEpLGE7Y2FzZSAyMjpyZXR1cm4gYT1QYShhLnR5cGUuX3JlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9UGEoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBSYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHVhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHRhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSB4YTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB3YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEJhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIENhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHphOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIHlhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIEFhOnZhciBiPWEucmVuZGVyO2I9Yi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxcIlwiO1xucmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcIilcIjpcIkZvcndhcmRSZWZcIik7Y2FzZSBEYTpyZXR1cm4gUmEoYS50eXBlKTtjYXNlIEZhOnJldHVybiBSYShhLl9yZW5kZXIpO2Nhc2UgRWE6Yj1hLl9wYXlsb2FkO2E9YS5faW5pdDt0cnl7cmV0dXJuIFJhKGEoYikpfWNhdGNoKGMpe319cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJ1bmRlZmluZWRcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fWZ1bmN0aW9uIFRhKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBVYShhKXt2YXIgYj1UYShhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gVmEoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVVhKGEpKX1mdW5jdGlvbiBXYShhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9VGEoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX1mdW5jdGlvbiBYYShhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19XG5mdW5jdGlvbiBZYShhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbSh7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9U2EobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiAkYShhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnFhKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBhYihhLGIpeyRhKGEsYik7dmFyIGM9U2EoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/YmIoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmYmIoYSxiLnR5cGUsU2EoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSEhYS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkO1wiXCIhPT1jJiYoYS5uYW1lPWMpfVxuZnVuY3Rpb24gYmIoYSxiLGMpe2lmKFwibnVtYmVyXCIhPT1ifHxYYShhLm93bmVyRG9jdW1lbnQpIT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9ZnVuY3Rpb24gZGIoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZWIoYSxiKXthPW0oe2NoaWxkcmVuOnZvaWQgMH0sYik7aWYoYj1kYihiLmNoaWxkcmVuKSlhLmNoaWxkcmVuPWI7cmV0dXJuIGF9XG5mdW5jdGlvbiBmYihhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrU2EoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGdiKGEsYil7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl0aHJvdyBFcnJvcih5KDkxKSk7cmV0dXJuIG0oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gaGIoYSxiKXt2YXIgYz1iLnZhbHVlO2lmKG51bGw9PWMpe2M9Yi5jaGlsZHJlbjtiPWIuZGVmYXVsdFZhbHVlO2lmKG51bGwhPWMpe2lmKG51bGwhPWIpdGhyb3cgRXJyb3IoeSg5MikpO2lmKEFycmF5LmlzQXJyYXkoYykpe2lmKCEoMT49Yy5sZW5ndGgpKXRocm93IEVycm9yKHkoOTMpKTtjPWNbMF19Yj1jfW51bGw9PWImJihiPVwiXCIpO2M9Yn1hLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTpTYShjKX19XG5mdW5jdGlvbiBpYihhLGIpe3ZhciBjPVNhKGIudmFsdWUpLGQ9U2EoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBqYihhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiZcIlwiIT09YiYmbnVsbCE9PWImJihhLnZhbHVlPWIpfXZhciBrYj17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBsYihhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIG1iKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9sYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBuYixvYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1rYi5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXtuYj1uYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1uYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBwYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHFiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHJiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhxYikuZm9yRWFjaChmdW5jdGlvbihhKXtyYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3FiW2JdPXFiW2FdfSl9KTtmdW5jdGlvbiBzYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cWIuaGFzT3duUHJvcGVydHkoYSkmJnFiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHRiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXNiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHViPW0oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB2YihhLGIpe2lmKGIpe2lmKHViW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IoeSg2MCkpO2lmKCEoXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IoeSg2MikpO319XG5mdW5jdGlvbiB3YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcih5KDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYihhLGIsYyxkLGUpe3JldHVybiBhKGIsYyxkLGUpfWZ1bmN0aW9uIEliKCl7fXZhciBKYj1HYixLYj0hMSxMYj0hMTtmdW5jdGlvbiBNYigpe2lmKG51bGwhPT16Ynx8bnVsbCE9PUFiKUliKCksRmIoKX1cbmZ1bmN0aW9uIE5iKGEsYixjKXtpZihMYilyZXR1cm4gYShiLGMpO0xiPSEwO3RyeXtyZXR1cm4gSmIoYSxiLGMpfWZpbmFsbHl7TGI9ITEsTWIoKX19XG5mdW5jdGlvbiBPYihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKG51bGw9PT1jKXJldHVybiBudWxsO3ZhciBkPURiKGMpO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjpjYXNlIFwib25Nb3VzZUVudGVyXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtpZihjJiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBjKXRocm93IEVycm9yKHkoMjMxLGIsdHlwZW9mIGMpKTtyZXR1cm4gY312YXIgUGI9ITE7aWYoZmEpdHJ5e3ZhciBRYj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoUWIsXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe1BiPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYil9Y2F0Y2goYSl7UGI9ITF9ZnVuY3Rpb24gUmIoYSxiLGMsZCxlLGYsZyxoLGspe3ZhciBsPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGwpfWNhdGNoKG4pe3RoaXMub25FcnJvcihuKX19dmFyIFNiPSExLFRiPW51bGwsVWI9ITEsVmI9bnVsbCxXYj17b25FcnJvcjpmdW5jdGlvbihhKXtTYj0hMDtUYj1hfX07ZnVuY3Rpb24gWGIoYSxiLGMsZCxlLGYsZyxoLGspe1NiPSExO1RiPW51bGw7UmIuYXBwbHkoV2IsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIFliKGEsYixjLGQsZSxmLGcsaCxrKXtYYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoU2Ipe2lmKFNiKXt2YXIgbD1UYjtTYj0hMTtUYj1udWxsfWVsc2UgdGhyb3cgRXJyb3IoeSgxOTgpKTtVYnx8KFViPSEwLFZiPWwpfX1mdW5jdGlvbiBaYihhKXt2YXIgYj1hLGM9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7YT1iO2RvIGI9YSwwIT09KGIuZmxhZ3MmMTAyNikmJihjPWIucmV0dXJuKSxhPWIucmV0dXJuO3doaWxlKGEpfXJldHVybiAzPT09Yi50YWc/YzpudWxsfWZ1bmN0aW9uICRiKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09YiYmKGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihiPWEubWVtb2l6ZWRTdGF0ZSkpO2lmKG51bGwhPT1iKXJldHVybiBiLmRlaHlkcmF0ZWR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYWMoYSl7aWYoWmIoYSkhPT1hKXRocm93IEVycm9yKHkoMTg4KSk7fVxuZnVuY3Rpb24gYmMoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpe2I9WmIoYSk7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYiE9PWE/bnVsbDphfWZvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybjtpZihudWxsPT09ZSlicmVhazt2YXIgZj1lLmFsdGVybmF0ZTtpZihudWxsPT09Zil7ZD1lLnJldHVybjtpZihudWxsIT09ZCl7Yz1kO2NvbnRpbnVlfWJyZWFrfWlmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IoZj1lLmNoaWxkO2Y7KXtpZihmPT09YylyZXR1cm4gYWMoZSksYTtpZihmPT09ZClyZXR1cm4gYWMoZSksYjtmPWYuc2libGluZ310aHJvdyBFcnJvcih5KDE4OCkpO31pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtmb3IodmFyIGc9ITEsaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1cbmMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXRocm93IEVycm9yKHkoMTg5KSk7fX1pZihjLmFsdGVybmF0ZSE9PWQpdGhyb3cgRXJyb3IoeSgxOTApKTt9aWYoMyE9PWMudGFnKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBjYyhhKXthPWJjKGEpO2lmKCFhKXJldHVybiBudWxsO2Zvcih2YXIgYj1hOzspe2lmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXJldHVybiBiO2lmKGIuY2hpbGQpYi5jaGlsZC5yZXR1cm49YixiPWIuY2hpbGQ7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoOyFiLnNpYmxpbmc7KXtpZighYi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gZGMoYSxiKXtmb3IodmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWI7KXtpZihiPT09YXx8Yj09PWMpcmV0dXJuITA7Yj1iLnJldHVybn1yZXR1cm4hMX12YXIgZWMsZmMsZ2MsaGMsaWM9ITEsamM9W10sa2M9bnVsbCxsYz1udWxsLG1jPW51bGwsbmM9bmV3IE1hcCxvYz1uZXcgTWFwLHBjPVtdLHFjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIHJjKGEsYixjLGQsZSl7cmV0dXJue2Jsb2NrZWRPbjphLGRvbUV2ZW50TmFtZTpiLGV2ZW50U3lzdGVtRmxhZ3M6Y3wxNixuYXRpdmVFdmVudDplLHRhcmdldENvbnRhaW5lcnM6W2RdfX1mdW5jdGlvbiBzYyhhLGIpe3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmNhc2UgXCJmb2N1c291dFwiOmtjPW51bGw7YnJlYWs7Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnbGVhdmVcIjpsYz1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwibW91c2VvdXRcIjptYz1udWxsO2JyZWFrO2Nhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVyb3V0XCI6bmMuZGVsZXRlKGIucG9pbnRlcklkKTticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6b2MuZGVsZXRlKGIucG9pbnRlcklkKX19XG5mdW5jdGlvbiB0YyhhLGIsYyxkLGUsZil7aWYobnVsbD09PWF8fGEubmF0aXZlRXZlbnQhPT1mKXJldHVybiBhPXJjKGIsYyxkLGUsZiksbnVsbCE9PWImJihiPUNiKGIpLG51bGwhPT1iJiZmYyhiKSksYTthLmV2ZW50U3lzdGVtRmxhZ3N8PWQ7Yj1hLnRhcmdldENvbnRhaW5lcnM7bnVsbCE9PWUmJi0xPT09Yi5pbmRleE9mKGUpJiZiLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB1YyhhLGIsYyxkLGUpe3N3aXRjaChiKXtjYXNlIFwiZm9jdXNpblwiOnJldHVybiBrYz10YyhrYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJkcmFnZW50ZXJcIjpyZXR1cm4gbGM9dGMobGMsYSxiLGMsZCxlKSwhMDtjYXNlIFwibW91c2VvdmVyXCI6cmV0dXJuIG1jPXRjKG1jLGEsYixjLGQsZSksITA7Y2FzZSBcInBvaW50ZXJvdmVyXCI6dmFyIGY9ZS5wb2ludGVySWQ7bmMuc2V0KGYsdGMobmMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpO3JldHVybiEwO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOnJldHVybiBmPWUucG9pbnRlcklkLG9jLnNldChmLHRjKG9jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIHZjKGEpe3ZhciBiPXdjKGEudGFyZ2V0KTtpZihudWxsIT09Yil7dmFyIGM9WmIoYik7aWYobnVsbCE9PWMpaWYoYj1jLnRhZywxMz09PWIpe2lmKGI9JGIoYyksbnVsbCE9PWIpe2EuYmxvY2tlZE9uPWI7aGMoYS5sYW5lUHJpb3JpdHksZnVuY3Rpb24oKXtyLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShhLnByaW9yaXR5LGZ1bmN0aW9uKCl7Z2MoYyl9KX0pO3JldHVybn19ZWxzZSBpZigzPT09YiYmYy5zdGF0ZU5vZGUuaHlkcmF0ZSl7YS5ibG9ja2VkT249Mz09PWMudGFnP2Muc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtyZXR1cm59fWEuYmxvY2tlZE9uPW51bGx9XG5mdW5jdGlvbiB4YyhhKXtpZihudWxsIT09YS5ibG9ja2VkT24pcmV0dXJuITE7Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJmZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIHpjKGEsYixjKXt4YyhhKSYmYy5kZWxldGUoYil9XG5mdW5jdGlvbiBBYygpe2ZvcihpYz0hMTswPGpjLmxlbmd0aDspe3ZhciBhPWpjWzBdO2lmKG51bGwhPT1hLmJsb2NrZWRPbil7YT1DYihhLmJsb2NrZWRPbik7bnVsbCE9PWEmJmVjKGEpO2JyZWFrfWZvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXthLmJsb2NrZWRPbj1jO2JyZWFrfWIuc2hpZnQoKX1udWxsPT09YS5ibG9ja2VkT24mJmpjLnNoaWZ0KCl9bnVsbCE9PWtjJiZ4YyhrYykmJihrYz1udWxsKTtudWxsIT09bGMmJnhjKGxjKSYmKGxjPW51bGwpO251bGwhPT1tYyYmeGMobWMpJiYobWM9bnVsbCk7bmMuZm9yRWFjaCh6Yyk7b2MuZm9yRWFjaCh6Yyl9XG5mdW5jdGlvbiBCYyhhLGIpe2EuYmxvY2tlZE9uPT09YiYmKGEuYmxvY2tlZE9uPW51bGwsaWN8fChpYz0hMCxyLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxBYykpKX1cbmZ1bmN0aW9uIENjKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIEJjKGIsYSl9aWYoMDxqYy5sZW5ndGgpe0JjKGpjWzBdLGEpO2Zvcih2YXIgYz0xO2M8amMubGVuZ3RoO2MrKyl7dmFyIGQ9amNbY107ZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCl9fW51bGwhPT1rYyYmQmMoa2MsYSk7bnVsbCE9PWxjJiZCYyhsYyxhKTtudWxsIT09bWMmJkJjKG1jLGEpO25jLmZvckVhY2goYik7b2MuZm9yRWFjaChiKTtmb3IoYz0wO2M8cGMubGVuZ3RoO2MrKylkPXBjW2NdLGQuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpO2Zvcig7MDxwYy5sZW5ndGgmJihjPXBjWzBdLG51bGw9PT1jLmJsb2NrZWRPbik7KXZjKGMpLG51bGw9PT1jLmJsb2NrZWRPbiYmcGMuc2hpZnQoKX1cbmZ1bmN0aW9uIERjKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIEVjPXthbmltYXRpb25lbmQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpEYyhcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LEZjPXt9LEdjPXt9O1xuZmEmJihHYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBFYy5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBFYy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIEhjKGEpe2lmKEZjW2FdKXJldHVybiBGY1thXTtpZighRWNbYV0pcmV0dXJuIGE7dmFyIGI9RWNbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gR2MpcmV0dXJuIEZjW2FdPWJbY107cmV0dXJuIGF9XG52YXIgSWM9SGMoXCJhbmltYXRpb25lbmRcIiksSmM9SGMoXCJhbmltYXRpb25pdGVyYXRpb25cIiksS2M9SGMoXCJhbmltYXRpb25zdGFydFwiKSxMYz1IYyhcInRyYW5zaXRpb25lbmRcIiksTWM9bmV3IE1hcCxOYz1uZXcgTWFwLE9jPVtcImFib3J0XCIsXCJhYm9ydFwiLEljLFwiYW5pbWF0aW9uRW5kXCIsSmMsXCJhbmltYXRpb25JdGVyYXRpb25cIixLYyxcImFuaW1hdGlvblN0YXJ0XCIsXCJjYW5wbGF5XCIsXCJjYW5QbGF5XCIsXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIixcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiLFwiZW1wdGllZFwiLFwiZW1wdGllZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmNyeXB0ZWRcIixcImVuZGVkXCIsXCJlbmRlZFwiLFwiZXJyb3JcIixcImVycm9yXCIsXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIixcImxvYWRcIixcImxvYWRcIixcImxvYWRlZGRhdGFcIixcImxvYWRlZERhdGFcIixcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiLFwibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIixcblwibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIixcInBsYXlpbmdcIixcInBsYXlpbmdcIixcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiLFwic2Vla2luZ1wiLFwic2Vla2luZ1wiLFwic3RhbGxlZFwiLFwic3RhbGxlZFwiLFwic3VzcGVuZFwiLFwic3VzcGVuZFwiLFwidGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiLExjLFwidHJhbnNpdGlvbkVuZFwiLFwid2FpdGluZ1wiLFwid2FpdGluZ1wiXTtmdW5jdGlvbiBQYyhhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7Yys9Mil7dmFyIGQ9YVtjXSxlPWFbYysxXTtlPVwib25cIisoZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSkpO05jLnNldChkLGIpO01jLnNldChkLGUpO2RhKGUsW2RdKX19dmFyIFFjPXIudW5zdGFibGVfbm93O1FjKCk7dmFyIEY9ODtcbmZ1bmN0aW9uIFJjKGEpe2lmKDAhPT0oMSZhKSlyZXR1cm4gRj0xNSwxO2lmKDAhPT0oMiZhKSlyZXR1cm4gRj0xNCwyO2lmKDAhPT0oNCZhKSlyZXR1cm4gRj0xMyw0O3ZhciBiPTI0JmE7aWYoMCE9PWIpcmV0dXJuIEY9MTIsYjtpZigwIT09KGEmMzIpKXJldHVybiBGPTExLDMyO2I9MTkyJmE7aWYoMCE9PWIpcmV0dXJuIEY9MTAsYjtpZigwIT09KGEmMjU2KSlyZXR1cm4gRj05LDI1NjtiPTM1ODQmYTtpZigwIT09YilyZXR1cm4gRj04LGI7aWYoMCE9PShhJjQwOTYpKXJldHVybiBGPTcsNDA5NjtiPTQxODYxMTImYTtpZigwIT09YilyZXR1cm4gRj02LGI7Yj02MjkxNDU2MCZhO2lmKDAhPT1iKXJldHVybiBGPTUsYjtpZihhJjY3MTA4ODY0KXJldHVybiBGPTQsNjcxMDg4NjQ7aWYoMCE9PShhJjEzNDIxNzcyOCkpcmV0dXJuIEY9MywxMzQyMTc3Mjg7Yj04MDUzMDYzNjgmYTtpZigwIT09YilyZXR1cm4gRj0yLGI7aWYoMCE9PSgxMDczNzQxODI0JmEpKXJldHVybiBGPTEsMTA3Mzc0MTgyNDtcbkY9ODtyZXR1cm4gYX1mdW5jdGlvbiBTYyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gMTU7Y2FzZSA5ODpyZXR1cm4gMTA7Y2FzZSA5NzpjYXNlIDk2OnJldHVybiA4O2Nhc2UgOTU6cmV0dXJuIDI7ZGVmYXVsdDpyZXR1cm4gMH19ZnVuY3Rpb24gVGMoYSl7c3dpdGNoKGEpe2Nhc2UgMTU6Y2FzZSAxNDpyZXR1cm4gOTk7Y2FzZSAxMzpjYXNlIDEyOmNhc2UgMTE6Y2FzZSAxMDpyZXR1cm4gOTg7Y2FzZSA5OmNhc2UgODpjYXNlIDc6Y2FzZSA2OmNhc2UgNDpjYXNlIDU6cmV0dXJuIDk3O2Nhc2UgMzpjYXNlIDI6Y2FzZSAxOnJldHVybiA5NTtjYXNlIDA6cmV0dXJuIDkwO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzNTgsYSkpO319XG5mdW5jdGlvbiBVYyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiBGPTA7dmFyIGQ9MCxlPTAsZj1hLmV4cGlyZWRMYW5lcyxnPWEuc3VzcGVuZGVkTGFuZXMsaD1hLnBpbmdlZExhbmVzO2lmKDAhPT1mKWQ9ZixlPUY9MTU7ZWxzZSBpZihmPWMmMTM0MjE3NzI3LDAhPT1mKXt2YXIgaz1mJn5nOzAhPT1rPyhkPVJjKGspLGU9Rik6KGgmPWYsMCE9PWgmJihkPVJjKGgpLGU9RikpfWVsc2UgZj1jJn5nLDAhPT1mPyhkPVJjKGYpLGU9Rik6MCE9PWgmJihkPVJjKGgpLGU9Rik7aWYoMD09PWQpcmV0dXJuIDA7ZD0zMS1WYyhkKTtkPWMmKCgwPmQ/MDoxPDxkKTw8MSktMTtpZigwIT09YiYmYiE9PWQmJjA9PT0oYiZnKSl7UmMoYik7aWYoZTw9RilyZXR1cm4gYjtGPWV9Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1WYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIFdjKGEpe2E9YS5wZW5kaW5nTGFuZXMmLTEwNzM3NDE4MjU7cmV0dXJuIDAhPT1hP2E6YSYxMDczNzQxODI0PzEwNzM3NDE4MjQ6MH1mdW5jdGlvbiBYYyhhLGIpe3N3aXRjaChhKXtjYXNlIDE1OnJldHVybiAxO2Nhc2UgMTQ6cmV0dXJuIDI7Y2FzZSAxMjpyZXR1cm4gYT1ZYygyNCZ+YiksMD09PWE/WGMoMTAsYik6YTtjYXNlIDEwOnJldHVybiBhPVljKDE5MiZ+YiksMD09PWE/WGMoOCxiKTphO2Nhc2UgODpyZXR1cm4gYT1ZYygzNTg0Jn5iKSwwPT09YSYmKGE9WWMoNDE4NjExMiZ+YiksMD09PWEmJihhPTUxMikpLGE7Y2FzZSAyOnJldHVybiBiPVljKDgwNTMwNjM2OCZ+YiksMD09PWImJihiPTI2ODQzNTQ1NiksYn10aHJvdyBFcnJvcih5KDM1OCxhKSk7fWZ1bmN0aW9uIFljKGEpe3JldHVybiBhJi1hfWZ1bmN0aW9uIFpjKGEpe2Zvcih2YXIgYj1bXSxjPTA7MzE+YztjKyspYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24gJGMoYSxiLGMpe2EucGVuZGluZ0xhbmVzfD1iO3ZhciBkPWItMTthLnN1c3BlbmRlZExhbmVzJj1kO2EucGluZ2VkTGFuZXMmPWQ7YT1hLmV2ZW50VGltZXM7Yj0zMS1WYyhiKTthW2JdPWN9dmFyIFZjPU1hdGguY2x6MzI/TWF0aC5jbHozMjphZCxiZD1NYXRoLmxvZyxjZD1NYXRoLkxOMjtmdW5jdGlvbiBhZChhKXtyZXR1cm4gMD09PWE/MzI6MzEtKGJkKGEpL2NkfDApfDB9dmFyIGRkPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksZWQ9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksZmQ9ITA7ZnVuY3Rpb24gZ2QoYSxiLGMsZCl7S2J8fEliKCk7dmFyIGU9aGQsZj1LYjtLYj0hMDt0cnl7SGIoZSxhLGIsYyxkKX1maW5hbGx5eyhLYj1mKXx8TWIoKX19ZnVuY3Rpb24gaWQoYSxiLGMsZCl7ZWQoZGQsaGQuYmluZChudWxsLGEsYixjLGQpKX1cbmZ1bmN0aW9uIGhkKGEsYixjLGQpe2lmKGZkKXt2YXIgZTtpZigoZT0wPT09KGImNCkpJiYwPGpjLmxlbmd0aCYmLTE8cWMuaW5kZXhPZihhKSlhPXJjKG51bGwsYSxiLGMsZCksamMucHVzaChhKTtlbHNle3ZhciBmPXljKGEsYixjLGQpO2lmKG51bGw9PT1mKWUmJnNjKGEsZCk7ZWxzZXtpZihlKXtpZigtMTxxYy5pbmRleE9mKGEpKXthPXJjKGYsYSxiLGMsZCk7amMucHVzaChhKTtyZXR1cm59aWYodWMoZixhLGIsYyxkKSlyZXR1cm47c2MoYSxkKX1qZChhLGIsZCxudWxsLGMpfX19fVxuZnVuY3Rpb24geWMoYSxiLGMsZCl7dmFyIGU9eGIoZCk7ZT13YyhlKTtpZihudWxsIT09ZSl7dmFyIGY9WmIoZSk7aWYobnVsbD09PWYpZT1udWxsO2Vsc2V7dmFyIGc9Zi50YWc7aWYoMTM9PT1nKXtlPSRiKGYpO2lmKG51bGwhPT1lKXJldHVybiBlO2U9bnVsbH1lbHNlIGlmKDM9PT1nKXtpZihmLnN0YXRlTm9kZS5oeWRyYXRlKXJldHVybiAzPT09Zi50YWc/Zi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO2U9bnVsbH1lbHNlIGYhPT1lJiYoZT1udWxsKX19amQoYSxiLGQsZSxjKTtyZXR1cm4gbnVsbH12YXIga2Q9bnVsbCxsZD1udWxsLG1kPW51bGw7XG5mdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9ZnVuY3Rpb24gb2QoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9ZnVuY3Rpb24gcGQoKXtyZXR1cm4hMH1mdW5jdGlvbiBxZCgpe3JldHVybiExfVxuZnVuY3Rpb24gcmQoYSl7ZnVuY3Rpb24gYihiLGQsZSxmLGcpe3RoaXMuX3JlYWN0TmFtZT1iO3RoaXMuX3RhcmdldEluc3Q9ZTt0aGlzLnR5cGU9ZDt0aGlzLm5hdGl2ZUV2ZW50PWY7dGhpcy50YXJnZXQ9Zzt0aGlzLmN1cnJlbnRUYXJnZXQ9bnVsbDtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYj1hW2NdLHRoaXNbY109Yj9iKGYpOmZbY10pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1mLmRlZmF1bHRQcmV2ZW50ZWQ/Zi5kZWZhdWx0UHJldmVudGVkOiExPT09Zi5yZXR1cm5WYWx1ZSk/cGQ6cWQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1xZDtyZXR1cm4gdGhpc31tKGIucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiZcbihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wZCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1wZCl9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt9LGlzUGVyc2lzdGVudDpwZH0pO3JldHVybiBifVxudmFyIHNkPXtldmVudFBoYXNlOjAsYnViYmxlczowLGNhbmNlbGFibGU6MCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOjAsaXNUcnVzdGVkOjB9LHRkPXJkKHNkKSx1ZD1tKHt9LHNkLHt2aWV3OjAsZGV0YWlsOjB9KSx2ZD1yZCh1ZCksd2QseGQseWQsQWQ9bSh7fSx1ZCx7c2NyZWVuWDowLHNjcmVlblk6MCxjbGllbnRYOjAsY2xpZW50WTowLHBhZ2VYOjAscGFnZVk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxidXR0b246MCxidXR0b25zOjAscmVsYXRlZFRhcmdldDpmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YS5yZWxhdGVkVGFyZ2V0P2EuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudDphLnJlbGF0ZWRUYXJnZXR9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW5cbmEpcmV0dXJuIGEubW92ZW1lbnRYO2EhPT15ZCYmKHlkJiZcIm1vdXNlbW92ZVwiPT09YS50eXBlPyh3ZD1hLnNjcmVlblgteWQuc2NyZWVuWCx4ZD1hLnNjcmVlblkteWQuc2NyZWVuWSk6eGQ9d2Q9MCx5ZD1hKTtyZXR1cm4gd2R9LG1vdmVtZW50WTpmdW5jdGlvbihhKXtyZXR1cm5cIm1vdmVtZW50WVwiaW4gYT9hLm1vdmVtZW50WTp4ZH19KSxCZD1yZChBZCksQ2Q9bSh7fSxBZCx7ZGF0YVRyYW5zZmVyOjB9KSxEZD1yZChDZCksRWQ9bSh7fSx1ZCx7cmVsYXRlZFRhcmdldDowfSksRmQ9cmQoRWQpLEdkPW0oe30sc2Qse2FuaW1hdGlvbk5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLEhkPXJkKEdkKSxJZD1tKHt9LHNkLHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksSmQ9cmQoSWQpLEtkPW0oe30sc2Qse2RhdGE6MH0pLExkPXJkKEtkKSxNZD17RXNjOlwiRXNjYXBlXCIsXG5TcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSxOZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIiwxMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIixcbjExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0sT2Q9e0FsdDpcImFsdEtleVwiLENvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFBkKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9T2RbYV0pPyEhYlthXTohMX1mdW5jdGlvbiB6ZCgpe3JldHVybiBQZH1cbnZhciBRZD1tKHt9LHVkLHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPU1kW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPW9kKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9OZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGNvZGU6MCxsb2NhdGlvbjowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxyZXBlYXQ6MCxsb2NhbGU6MCxnZXRNb2RpZmllclN0YXRlOnpkLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9vZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP29kKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSksUmQ9cmQoUWQpLFNkPW0oe30sQWQse3BvaW50ZXJJZDowLHdpZHRoOjAsaGVpZ2h0OjAscHJlc3N1cmU6MCx0YW5nZW50aWFsUHJlc3N1cmU6MCx0aWx0WDowLHRpbHRZOjAsdHdpc3Q6MCxwb2ludGVyVHlwZTowLGlzUHJpbWFyeTowfSksVGQ9cmQoU2QpLFVkPW0oe30sdWQse3RvdWNoZXM6MCx0YXJnZXRUb3VjaGVzOjAsY2hhbmdlZFRvdWNoZXM6MCxhbHRLZXk6MCxtZXRhS2V5OjAsY3RybEtleTowLHNoaWZ0S2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZH0pLFZkPXJkKFVkKSxXZD1tKHt9LHNkLHtwcm9wZXJ0eU5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLFhkPXJkKFdkKSxZZD1tKHt9LEFkLHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW4gYT8tYS53aGVlbERlbHRhWDowfSxcbmRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjowLGRlbHRhTW9kZTowfSksWmQ9cmQoWWQpLCRkPVs5LDEzLDI3LDMyXSxhZT1mYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csYmU9bnVsbDtmYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYoYmU9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTt2YXIgY2U9ZmEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFiZSxkZT1mYSYmKCFhZXx8YmUmJjg8YmUmJjExPj1iZSksZWU9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksZmU9ITE7XG5mdW5jdGlvbiBnZShhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PSRkLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJmb2N1c291dFwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIGhlKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIGllPSExO2Z1bmN0aW9uIGplKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBoZShiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7ZmU9ITA7cmV0dXJuIGVlO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PWVlJiZmZT9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBrZShhLGIpe2lmKGllKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFhZSYmZ2UoYSxiKT8oYT1uZCgpLG1kPWxkPWtkPW51bGwsaWU9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGRlJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBsZT17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBtZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIWxlW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1mdW5jdGlvbiBuZShhLGIsYyxkKXtFYihkKTtiPW9lKGIsXCJvbkNoYW5nZVwiKTswPGIubGVuZ3RoJiYoYz1uZXcgdGQoXCJvbkNoYW5nZVwiLFwiY2hhbmdlXCIsbnVsbCxjLGQpLGEucHVzaCh7ZXZlbnQ6YyxsaXN0ZW5lcnM6Yn0pKX12YXIgcGU9bnVsbCxxZT1udWxsO2Z1bmN0aW9uIHJlKGEpe3NlKGEsMCl9ZnVuY3Rpb24gdGUoYSl7dmFyIGI9dWUoYSk7aWYoV2EoYikpcmV0dXJuIGF9XG5mdW5jdGlvbiB2ZShhLGIpe2lmKFwiY2hhbmdlXCI9PT1hKXJldHVybiBifXZhciB3ZT0hMTtpZihmYSl7dmFyIHhlO2lmKGZhKXt2YXIgeWU9XCJvbmlucHV0XCJpbiBkb2N1bWVudDtpZigheWUpe3ZhciB6ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3plLnNldEF0dHJpYnV0ZShcIm9uaW5wdXRcIixcInJldHVybjtcIik7eWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHplLm9uaW5wdXR9eGU9eWV9ZWxzZSB4ZT0hMTt3ZT14ZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKX1mdW5jdGlvbiBBZSgpe3BlJiYocGUuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpLHFlPXBlPW51bGwpfWZ1bmN0aW9uIEJlKGEpe2lmKFwidmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZ0ZShxZSkpe3ZhciBiPVtdO25lKGIscWUsYSx4YihhKSk7YT1yZTtpZihLYilhKGIpO2Vsc2V7S2I9ITA7dHJ5e0diKGEsYil9ZmluYWxseXtLYj0hMSxNYigpfX19fVxuZnVuY3Rpb24gQ2UoYSxiLGMpe1wiZm9jdXNpblwiPT09YT8oQWUoKSxwZT1iLHFlPWMscGUuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpKTpcImZvY3Vzb3V0XCI9PT1hJiZBZSgpfWZ1bmN0aW9uIERlKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIHRlKHFlKX1mdW5jdGlvbiBFZShhLGIpe2lmKFwiY2xpY2tcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEZlKGEsYil7aWYoXCJpbnB1dFwiPT09YXx8XCJjaGFuZ2VcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEdlKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgSGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6R2UsSWU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIEplKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFJZS5jYWxsKGIsY1tkXSl8fCFIZShhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEtlKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIExlKGEsYil7dmFyIGM9S2UoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9S2UoYyl9fWZ1bmN0aW9uIE1lKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TWUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTmUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gT2UoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbnZhciBQZT1mYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFFlPW51bGwsUmU9bnVsbCxTZT1udWxsLFRlPSExO1xuZnVuY3Rpb24gVWUoYSxiLGMpe3ZhciBkPWMud2luZG93PT09Yz9jLmRvY3VtZW50Ojk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50O1RlfHxudWxsPT1RZXx8UWUhPT1YYShkKXx8KGQ9UWUsXCJzZWxlY3Rpb25TdGFydFwiaW4gZCYmT2UoZCk/ZD17c3RhcnQ6ZC5zZWxlY3Rpb25TdGFydCxlbmQ6ZC5zZWxlY3Rpb25FbmR9OihkPShkLm93bmVyRG9jdW1lbnQmJmQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxkPXthbmNob3JOb2RlOmQuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6ZC5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmQuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmQuZm9jdXNPZmZzZXR9KSxTZSYmSmUoU2UsZCl8fChTZT1kLGQ9b2UoUmUsXCJvblNlbGVjdFwiKSwwPGQubGVuZ3RoJiYoYj1uZXcgdGQoXCJvblNlbGVjdFwiLFwic2VsZWN0XCIsbnVsbCxiLGMpLGEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6ZH0pLGIudGFyZ2V0PVFlKSkpfVxuUGMoXCJjYW5jZWwgY2FuY2VsIGNsaWNrIGNsaWNrIGNsb3NlIGNsb3NlIGNvbnRleHRtZW51IGNvbnRleHRNZW51IGNvcHkgY29weSBjdXQgY3V0IGF1eGNsaWNrIGF1eENsaWNrIGRibGNsaWNrIGRvdWJsZUNsaWNrIGRyYWdlbmQgZHJhZ0VuZCBkcmFnc3RhcnQgZHJhZ1N0YXJ0IGRyb3AgZHJvcCBmb2N1c2luIGZvY3VzIGZvY3Vzb3V0IGJsdXIgaW5wdXQgaW5wdXQgaW52YWxpZCBpbnZhbGlkIGtleWRvd24ga2V5RG93biBrZXlwcmVzcyBrZXlQcmVzcyBrZXl1cCBrZXlVcCBtb3VzZWRvd24gbW91c2VEb3duIG1vdXNldXAgbW91c2VVcCBwYXN0ZSBwYXN0ZSBwYXVzZSBwYXVzZSBwbGF5IHBsYXkgcG9pbnRlcmNhbmNlbCBwb2ludGVyQ2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJEb3duIHBvaW50ZXJ1cCBwb2ludGVyVXAgcmF0ZWNoYW5nZSByYXRlQ2hhbmdlIHJlc2V0IHJlc2V0IHNlZWtlZCBzZWVrZWQgc3VibWl0IHN1Ym1pdCB0b3VjaGNhbmNlbCB0b3VjaENhbmNlbCB0b3VjaGVuZCB0b3VjaEVuZCB0b3VjaHN0YXJ0IHRvdWNoU3RhcnQgdm9sdW1lY2hhbmdlIHZvbHVtZUNoYW5nZVwiLnNwbGl0KFwiIFwiKSxcbjApO1BjKFwiZHJhZyBkcmFnIGRyYWdlbnRlciBkcmFnRW50ZXIgZHJhZ2V4aXQgZHJhZ0V4aXQgZHJhZ2xlYXZlIGRyYWdMZWF2ZSBkcmFnb3ZlciBkcmFnT3ZlciBtb3VzZW1vdmUgbW91c2VNb3ZlIG1vdXNlb3V0IG1vdXNlT3V0IG1vdXNlb3ZlciBtb3VzZU92ZXIgcG9pbnRlcm1vdmUgcG9pbnRlck1vdmUgcG9pbnRlcm91dCBwb2ludGVyT3V0IHBvaW50ZXJvdmVyIHBvaW50ZXJPdmVyIHNjcm9sbCBzY3JvbGwgdG9nZ2xlIHRvZ2dsZSB0b3VjaG1vdmUgdG91Y2hNb3ZlIHdoZWVsIHdoZWVsXCIuc3BsaXQoXCIgXCIpLDEpO1BjKE9jLDIpO2Zvcih2YXIgVmU9XCJjaGFuZ2Ugc2VsZWN0aW9uY2hhbmdlIHRleHRJbnB1dCBjb21wb3NpdGlvbnN0YXJ0IGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9udXBkYXRlXCIuc3BsaXQoXCIgXCIpLFdlPTA7V2U8VmUubGVuZ3RoO1dlKyspTmMuc2V0KFZlW1dlXSwwKTtlYShcIm9uTW91c2VFbnRlclwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO1xuZWEoXCJvbk1vdXNlTGVhdmVcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtlYShcIm9uUG9pbnRlckVudGVyXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2VhKFwib25Qb2ludGVyTGVhdmVcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZGEoXCJvbkNoYW5nZVwiLFwiY2hhbmdlIGNsaWNrIGZvY3VzaW4gZm9jdXNvdXQgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25TZWxlY3RcIixcImZvY3Vzb3V0IGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXNpbiBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkJlZm9yZUlucHV0XCIsW1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdKTtkYShcIm9uQ29tcG9zaXRpb25FbmRcIixcImNvbXBvc2l0aW9uZW5kIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtcbmRhKFwib25Db21wb3NpdGlvblN0YXJ0XCIsXCJjb21wb3NpdGlvbnN0YXJ0IGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixcImNvbXBvc2l0aW9udXBkYXRlIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTt2YXIgWGU9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLFllPW5ldyBTZXQoXCJjYW5jZWwgY2xvc2UgaW52YWxpZCBsb2FkIHNjcm9sbCB0b2dnbGVcIi5zcGxpdChcIiBcIikuY29uY2F0KFhlKSk7XG5mdW5jdGlvbiBaZShhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9YztZYihkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfVxuZnVuY3Rpb24gc2UoYSxiKXtiPTAhPT0oYiY0KTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuZXZlbnQ7ZD1kLmxpc3RlbmVyczthOnt2YXIgZj12b2lkIDA7aWYoYilmb3IodmFyIGc9ZC5sZW5ndGgtMTswPD1nO2ctLSl7dmFyIGg9ZFtnXSxrPWguaW5zdGFuY2UsbD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfWVsc2UgZm9yKGc9MDtnPGQubGVuZ3RoO2crKyl7aD1kW2ddO2s9aC5pbnN0YW5jZTtsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9fX1pZihVYil0aHJvdyBhPVZiLFViPSExLFZiPW51bGwsYTt9XG5mdW5jdGlvbiBHKGEsYil7dmFyIGM9JGUoYiksZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KGFmKGIsYSwyLCExKSxjLmFkZChkKSl9dmFyIGJmPVwiX3JlYWN0TGlzdGVuaW5nXCIrTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7ZnVuY3Rpb24gY2YoYSl7YVtiZl18fChhW2JmXT0hMCxiYS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1llLmhhcyhiKXx8ZGYoYiwhMSxhLG51bGwpO2RmKGIsITAsYSxudWxsKX0pKX1cbmZ1bmN0aW9uIGRmKGEsYixjLGQpe3ZhciBlPTQ8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLGY9YztcInNlbGVjdGlvbmNoYW5nZVwiPT09YSYmOSE9PWMubm9kZVR5cGUmJihmPWMub3duZXJEb2N1bWVudCk7aWYobnVsbCE9PWQmJiFiJiZZZS5oYXMoYSkpe2lmKFwic2Nyb2xsXCIhPT1hKXJldHVybjtlfD0yO2Y9ZH12YXIgZz0kZShmKSxoPWErXCJfX1wiKyhiP1wiY2FwdHVyZVwiOlwiYnViYmxlXCIpO2cuaGFzKGgpfHwoYiYmKGV8PTQpLGFmKGYsYSxlLGIpLGcuYWRkKGgpKX1cbmZ1bmN0aW9uIGFmKGEsYixjLGQpe3ZhciBlPU5jLmdldChiKTtzd2l0Y2godm9pZCAwPT09ZT8yOmUpe2Nhc2UgMDplPWdkO2JyZWFrO2Nhc2UgMTplPWlkO2JyZWFrO2RlZmF1bHQ6ZT1oZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshUGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gamQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz13YyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59TmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPU1jLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCx4PWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOng9XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6eD1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgSWM6Y2FzZSBKYzpjYXNlIEtjOms9SGQ7YnJlYWs7Y2FzZSBMYzprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB3PTAhPT0oYiY0KSx6PSF3JiZcInNjcm9sbFwiPT09YSx1PXc/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dz1bXTtmb3IodmFyIHQ9ZCxxO251bGwhPT1cbnQ7KXtxPXQ7dmFyIHY9cS5zdGF0ZU5vZGU7NT09PXEudGFnJiZudWxsIT09diYmKHE9dixudWxsIT09dSYmKHY9T2IodCx1KSxudWxsIT12JiZ3LnB1c2goZWYodCx2LHEpKSkpO2lmKHopYnJlYWs7dD10LnJldHVybn0wPHcubGVuZ3RoJiYoaD1uZXcgayhoLHgsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6d30pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJjA9PT0oYiYxNikmJih4PWMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCkmJih3Yyh4KXx8eFtmZl0pKWJyZWFrIGE7aWYoa3x8aCl7aD1lLndpbmRvdz09PWU/ZTooaD1lLm93bmVyRG9jdW1lbnQpP2guZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93OndpbmRvdztpZihrKXtpZih4PWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQsaz1kLHg9eD93Yyh4KTpudWxsLG51bGwhPT1cbngmJih6PVpiKHgpLHghPT16fHw1IT09eC50YWcmJjYhPT14LnRhZykpeD1udWxsfWVsc2Ugaz1udWxsLHg9ZDtpZihrIT09eCl7dz1CZDt2PVwib25Nb3VzZUxlYXZlXCI7dT1cIm9uTW91c2VFbnRlclwiO3Q9XCJtb3VzZVwiO2lmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSl3PVRkLHY9XCJvblBvaW50ZXJMZWF2ZVwiLHU9XCJvblBvaW50ZXJFbnRlclwiLHQ9XCJwb2ludGVyXCI7ej1udWxsPT1rP2g6dWUoayk7cT1udWxsPT14P2g6dWUoeCk7aD1uZXcgdyh2LHQrXCJsZWF2ZVwiLGssYyxlKTtoLnRhcmdldD16O2gucmVsYXRlZFRhcmdldD1xO3Y9bnVsbDt3YyhlKT09PWQmJih3PW5ldyB3KHUsdCtcImVudGVyXCIseCxjLGUpLHcudGFyZ2V0PXEsdy5yZWxhdGVkVGFyZ2V0PXosdj13KTt6PXY7aWYoayYmeCliOnt3PWs7dT14O3Q9MDtmb3IocT13O3E7cT1nZihxKSl0Kys7cT0wO2Zvcih2PXU7djt2PWdmKHYpKXErKztmb3IoOzA8dC1xOyl3PWdmKHcpLHQtLTtmb3IoOzA8cS10Oyl1PVxuZ2YodSkscS0tO2Zvcig7dC0tOyl7aWYodz09PXV8fG51bGwhPT11JiZ3PT09dS5hbHRlcm5hdGUpYnJlYWsgYjt3PWdmKHcpO3U9Z2YodSl9dz1udWxsfWVsc2Ugdz1udWxsO251bGwhPT1rJiZoZihnLGgsayx3LCExKTtudWxsIT09eCYmbnVsbCE9PXomJmhmKGcseix4LHcsITApfX19YTp7aD1kP3VlKGQpOndpbmRvdztrPWgubm9kZU5hbWUmJmgubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihcInNlbGVjdFwiPT09a3x8XCJpbnB1dFwiPT09ayYmXCJmaWxlXCI9PT1oLnR5cGUpdmFyIEo9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSlKPUZlO2Vsc2V7Sj1EZTt2YXIgSz1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKEo9RWUpO2lmKEomJihKPUooYSxkKSkpe25lKGcsSixjLGUpO2JyZWFrIGF9SyYmSyhhLGgsZCk7XCJmb2N1c291dFwiPT09YSYmKEs9aC5fd3JhcHBlclN0YXRlKSYmXG5LLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmJiKGgsXCJudW1iZXJcIixoLnZhbHVlKX1LPWQ/dWUoZCk6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmlmKG1lKEspfHxcInRydWVcIj09PUsuY29udGVudEVkaXRhYmxlKVFlPUssUmU9ZCxTZT1udWxsO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOlNlPVJlPVFlPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOlRlPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpUZT0hMTtVZShnLGMsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFBlKWJyZWFrO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6VWUoZyxjLGUpfXZhciBRO2lmKGFlKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOnZhciBMPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpMPVwib25Db21wb3NpdGlvbkVuZFwiO2JyZWFrIGI7XG5jYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjpMPVwib25Db21wb3NpdGlvblVwZGF0ZVwiO2JyZWFrIGJ9TD12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoTD1cIm9uQ29tcG9zaXRpb25FbmRcIik6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihMPVwib25Db21wb3NpdGlvblN0YXJ0XCIpO0wmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PUw/XCJvbkNvbXBvc2l0aW9uRW5kXCI9PT1MJiZpZSYmKFE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSxLPW9lKGQsTCksMDxLLmxlbmd0aCYmKEw9bmV3IExkKEwsYSxudWxsLGMsZSksZy5wdXNoKHtldmVudDpMLGxpc3RlbmVyczpLfSksUT9MLmRhdGE9UTooUT1oZShjKSxudWxsIT09USYmKEwuZGF0YT1RKSkpKTtpZihRPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLDA8ZC5sZW5ndGgmJihlPW5ldyBMZChcIm9uQmVmb3JlSW5wdXRcIixcblwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPVEpfXNlKGcsYil9KX1mdW5jdGlvbiBlZihhLGIsYyl7cmV0dXJue2luc3RhbmNlOmEsbGlzdGVuZXI6YixjdXJyZW50VGFyZ2V0OmN9fWZ1bmN0aW9uIG9lKGEsYil7Zm9yKHZhciBjPWIrXCJDYXB0dXJlXCIsZD1bXTtudWxsIT09YTspe3ZhciBlPWEsZj1lLnN0YXRlTm9kZTs1PT09ZS50YWcmJm51bGwhPT1mJiYoZT1mLGY9T2IoYSxjKSxudWxsIT1mJiZkLnVuc2hpZnQoZWYoYSxmLGUpKSxmPU9iKGEsYiksbnVsbCE9ZiYmZC5wdXNoKGVmKGEsZixlKSkpO2E9YS5yZXR1cm59cmV0dXJuIGR9ZnVuY3Rpb24gZ2YoYSl7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1cbmZ1bmN0aW9uIGhmKGEsYixjLGQsZSl7Zm9yKHZhciBmPWIuX3JlYWN0TmFtZSxnPVtdO251bGwhPT1jJiZjIT09ZDspe3ZhciBoPWMsaz1oLmFsdGVybmF0ZSxsPWguc3RhdGVOb2RlO2lmKG51bGwhPT1rJiZrPT09ZClicmVhazs1PT09aC50YWcmJm51bGwhPT1sJiYoaD1sLGU/KGs9T2IoYyxmKSxudWxsIT1rJiZnLnVuc2hpZnQoZWYoYyxrLGgpKSk6ZXx8KGs9T2IoYyxmKSxudWxsIT1rJiZnLnB1c2goZWYoYyxrLGgpKSkpO2M9Yy5yZXR1cm59MCE9PWcubGVuZ3RoJiZhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmd9KX1mdW5jdGlvbiBqZigpe312YXIga2Y9bnVsbCxsZj1udWxsO2Z1bmN0aW9uIG1mKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1cbmZ1bmN0aW9uIG5mKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH12YXIgb2Y9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAscGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwO2Z1bmN0aW9uIHFmKGEpezE9PT1hLm5vZGVUeXBlP2EudGV4dENvbnRlbnQ9XCJcIjo5PT09YS5ub2RlVHlwZSYmKGE9YS5ib2R5LG51bGwhPWEmJihhLnRleHRDb250ZW50PVwiXCIpKX1cbmZ1bmN0aW9uIHJmKGEpe2Zvcig7bnVsbCE9YTthPWEubmV4dFNpYmxpbmcpe3ZhciBiPWEubm9kZVR5cGU7aWYoMT09PWJ8fDM9PT1iKWJyZWFrfXJldHVybiBhfWZ1bmN0aW9uIHNmKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciB0Zj0wO2Z1bmN0aW9uIHVmKGEpe3JldHVybnskJHR5cGVvZjpHYSx0b1N0cmluZzphLHZhbHVlT2Y6YX19dmFyIHZmPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLHdmPVwiX19yZWFjdEZpYmVyJFwiK3ZmLHhmPVwiX19yZWFjdFByb3BzJFwiK3ZmLGZmPVwiX19yZWFjdENvbnRhaW5lciRcIit2Zix5Zj1cIl9fcmVhY3RFdmVudHMkXCIrdmY7XG5mdW5jdGlvbiB3YyhhKXt2YXIgYj1hW3dmXTtpZihiKXJldHVybiBiO2Zvcih2YXIgYz1hLnBhcmVudE5vZGU7Yzspe2lmKGI9Y1tmZl18fGNbd2ZdKXtjPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1iLmNoaWxkfHxudWxsIT09YyYmbnVsbCE9PWMuY2hpbGQpZm9yKGE9c2YoYSk7bnVsbCE9PWE7KXtpZihjPWFbd2ZdKXJldHVybiBjO2E9c2YoYSl9cmV0dXJuIGJ9YT1jO2M9YS5wYXJlbnROb2RlfXJldHVybiBudWxsfWZ1bmN0aW9uIENiKGEpe2E9YVt3Zl18fGFbZmZdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZyYmMTMhPT1hLnRhZyYmMyE9PWEudGFnP251bGw6YX1mdW5jdGlvbiB1ZShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7dGhyb3cgRXJyb3IoeSgzMykpO31mdW5jdGlvbiBEYihhKXtyZXR1cm4gYVt4Zl18fG51bGx9XG5mdW5jdGlvbiAkZShhKXt2YXIgYj1hW3lmXTt2b2lkIDA9PT1iJiYoYj1hW3lmXT1uZXcgU2V0KTtyZXR1cm4gYn12YXIgemY9W10sQWY9LTE7ZnVuY3Rpb24gQmYoYSl7cmV0dXJue2N1cnJlbnQ6YX19ZnVuY3Rpb24gSChhKXswPkFmfHwoYS5jdXJyZW50PXpmW0FmXSx6ZltBZl09bnVsbCxBZi0tKX1mdW5jdGlvbiBJKGEsYil7QWYrKzt6ZltBZl09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBDZj17fSxNPUJmKENmKSxOPUJmKCExKSxEZj1DZjtcbmZ1bmN0aW9uIEVmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gQ2Y7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gRmYoYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiBHZigpe0goTik7SChNKX1mdW5jdGlvbiBIZihhLGIsYyl7aWYoTS5jdXJyZW50IT09Q2YpdGhyb3cgRXJyb3IoeSgxNjgpKTtJKE0sYik7SShOLGMpfVxuZnVuY3Rpb24gSWYoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWlmKCEoZSBpbiBhKSl0aHJvdyBFcnJvcih5KDEwOCxSYShiKXx8XCJVbmtub3duXCIsZSkpO3JldHVybiBtKHt9LGMsZCl9ZnVuY3Rpb24gSmYoYSl7YT0oYT1hLnN0YXRlTm9kZSkmJmEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fENmO0RmPU0uY3VycmVudDtJKE0sYSk7SShOLE4uY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gS2YoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHkoMTY5KSk7Yz8oYT1JZihhLGIsRGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxIKE4pLEgoTSksSShNLGEpKTpIKE4pO0koTixjKX1cbnZhciBMZj1udWxsLE1mPW51bGwsTmY9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksT2Y9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLFBmPXIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2ssUWY9ci51bnN0YWJsZV9zaG91bGRZaWVsZCxSZj1yLnVuc3RhYmxlX3JlcXVlc3RQYWludCxTZj1yLnVuc3RhYmxlX25vdyxUZj1yLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLFVmPXIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksVmY9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxXZj1yLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LFhmPXIudW5zdGFibGVfTG93UHJpb3JpdHksWWY9ci51bnN0YWJsZV9JZGxlUHJpb3JpdHksWmY9e30sJGY9dm9pZCAwIT09UmY/UmY6ZnVuY3Rpb24oKXt9LGFnPW51bGwsYmc9bnVsbCxjZz0hMSxkZz1TZigpLE89MUU0PmRnP1NmOmZ1bmN0aW9uKCl7cmV0dXJuIFNmKCktZGd9O1xuZnVuY3Rpb24gZWcoKXtzd2l0Y2goVGYoKSl7Y2FzZSBVZjpyZXR1cm4gOTk7Y2FzZSBWZjpyZXR1cm4gOTg7Y2FzZSBXZjpyZXR1cm4gOTc7Y2FzZSBYZjpyZXR1cm4gOTY7Y2FzZSBZZjpyZXR1cm4gOTU7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZmcoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIFVmO2Nhc2UgOTg6cmV0dXJuIFZmO2Nhc2UgOTc6cmV0dXJuIFdmO2Nhc2UgOTY6cmV0dXJuIFhmO2Nhc2UgOTU6cmV0dXJuIFlmO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGdnKGEsYil7YT1mZyhhKTtyZXR1cm4gTmYoYSxiKX1mdW5jdGlvbiBoZyhhLGIsYyl7YT1mZyhhKTtyZXR1cm4gT2YoYSxiLGMpfWZ1bmN0aW9uIGlnKCl7aWYobnVsbCE9PWJnKXt2YXIgYT1iZztiZz1udWxsO1BmKGEpfWpnKCl9XG5mdW5jdGlvbiBqZygpe2lmKCFjZyYmbnVsbCE9PWFnKXtjZz0hMDt2YXIgYT0wO3RyeXt2YXIgYj1hZztnZyg5OSxmdW5jdGlvbigpe2Zvcig7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07ZG8gYz1jKCEwKTt3aGlsZShudWxsIT09Yyl9fSk7YWc9bnVsbH1jYXRjaChjKXt0aHJvdyBudWxsIT09YWcmJihhZz1hZy5zbGljZShhKzEpKSxPZihVZixpZyksYzt9ZmluYWxseXtjZz0hMX19fXZhciBrZz1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZztmdW5jdGlvbiBsZyhhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW0oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKTtyZXR1cm4gYn1yZXR1cm4gYn12YXIgbWc9QmYobnVsbCksbmc9bnVsbCxvZz1udWxsLHBnPW51bGw7ZnVuY3Rpb24gcWcoKXtwZz1vZz1uZz1udWxsfVxuZnVuY3Rpb24gcmcoYSl7dmFyIGI9bWcuY3VycmVudDtIKG1nKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHNnKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKChhLmNoaWxkTGFuZXMmYik9PT1iKWlmKG51bGw9PT1jfHwoYy5jaGlsZExhbmVzJmIpPT09YilicmVhaztlbHNlIGMuY2hpbGRMYW5lc3w9YjtlbHNlIGEuY2hpbGRMYW5lc3w9YixudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9Yik7YT1hLnJldHVybn19ZnVuY3Rpb24gdGcoYSxiKXtuZz1hO3BnPW9nPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoMCE9PShhLmxhbmVzJmIpJiYodWc9ITApLGEuZmlyc3RDb250ZXh0PW51bGwpfVxuZnVuY3Rpb24gdmcoYSxiKXtpZihwZyE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpcGc9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07aWYobnVsbD09PW9nKXtpZihudWxsPT09bmcpdGhyb3cgRXJyb3IoeSgzMDgpKTtvZz1iO25nLmRlcGVuZGVuY2llcz17bGFuZXM6MCxmaXJzdENvbnRleHQ6YixyZXNwb25kZXJzOm51bGx9fWVsc2Ugb2c9b2cubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyIHdnPSExO2Z1bmN0aW9uIHhnKGEpe2EudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLm1lbW9pemVkU3RhdGUsZmlyc3RCYXNlVXBkYXRlOm51bGwsbGFzdEJhc2VVcGRhdGU6bnVsbCxzaGFyZWQ6e3BlbmRpbmc6bnVsbH0sZWZmZWN0czpudWxsfX1cbmZ1bmN0aW9uIHlnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9PT1hJiYoYi51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTphLmZpcnN0QmFzZVVwZGF0ZSxsYXN0QmFzZVVwZGF0ZTphLmxhc3RCYXNlVXBkYXRlLHNoYXJlZDphLnNoYXJlZCxlZmZlY3RzOmEuZWZmZWN0c30pfWZ1bmN0aW9uIHpnKGEsYil7cmV0dXJue2V2ZW50VGltZTphLGxhbmU6Yix0YWc6MCxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGx9fWZ1bmN0aW9uIEFnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hKXthPWEuc2hhcmVkO3ZhciBjPWEucGVuZGluZztudWxsPT09Yz9iLm5leHQ9YjooYi5uZXh0PWMubmV4dCxjLm5leHQ9Yik7YS5wZW5kaW5nPWJ9fVxuZnVuY3Rpb24gQmcoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlLGQ9YS5hbHRlcm5hdGU7aWYobnVsbCE9PWQmJihkPWQudXBkYXRlUXVldWUsYz09PWQpKXt2YXIgZT1udWxsLGY9bnVsbDtjPWMuZmlyc3RCYXNlVXBkYXRlO2lmKG51bGwhPT1jKXtkb3t2YXIgZz17ZXZlbnRUaW1lOmMuZXZlbnRUaW1lLGxhbmU6Yy5sYW5lLHRhZzpjLnRhZyxwYXlsb2FkOmMucGF5bG9hZCxjYWxsYmFjazpjLmNhbGxiYWNrLG5leHQ6bnVsbH07bnVsbD09PWY/ZT1mPWc6Zj1mLm5leHQ9ZztjPWMubmV4dH13aGlsZShudWxsIT09Yyk7bnVsbD09PWY/ZT1mPWI6Zj1mLm5leHQ9Yn1lbHNlIGU9Zj1iO2M9e2Jhc2VTdGF0ZTpkLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6ZSxsYXN0QmFzZVVwZGF0ZTpmLHNoYXJlZDpkLnNoYXJlZCxlZmZlY3RzOmQuZWZmZWN0c307YS51cGRhdGVRdWV1ZT1jO3JldHVybn1hPWMubGFzdEJhc2VVcGRhdGU7bnVsbD09PWE/Yy5maXJzdEJhc2VVcGRhdGU9YjphLm5leHQ9XG5iO2MubGFzdEJhc2VVcGRhdGU9Yn1cbmZ1bmN0aW9uIENnKGEsYixjLGQpe3ZhciBlPWEudXBkYXRlUXVldWU7d2c9ITE7dmFyIGY9ZS5maXJzdEJhc2VVcGRhdGUsZz1lLmxhc3RCYXNlVXBkYXRlLGg9ZS5zaGFyZWQucGVuZGluZztpZihudWxsIT09aCl7ZS5zaGFyZWQucGVuZGluZz1udWxsO3ZhciBrPWgsbD1rLm5leHQ7ay5uZXh0PW51bGw7bnVsbD09PWc/Zj1sOmcubmV4dD1sO2c9azt2YXIgbj1hLmFsdGVybmF0ZTtpZihudWxsIT09bil7bj1uLnVwZGF0ZVF1ZXVlO3ZhciBBPW4ubGFzdEJhc2VVcGRhdGU7QSE9PWcmJihudWxsPT09QT9uLmZpcnN0QmFzZVVwZGF0ZT1sOkEubmV4dD1sLG4ubGFzdEJhc2VVcGRhdGU9ayl9fWlmKG51bGwhPT1mKXtBPWUuYmFzZVN0YXRlO2c9MDtuPWw9az1udWxsO2Rve2g9Zi5sYW5lO3ZhciBwPWYuZXZlbnRUaW1lO2lmKChkJmgpPT09aCl7bnVsbCE9PW4mJihuPW4ubmV4dD17ZXZlbnRUaW1lOnAsbGFuZTowLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLFxubmV4dDpudWxsfSk7YTp7dmFyIEM9YSx4PWY7aD1iO3A9Yztzd2l0Y2goeC50YWcpe2Nhc2UgMTpDPXgucGF5bG9hZDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyl7QT1DLmNhbGwocCxBLGgpO2JyZWFrIGF9QT1DO2JyZWFrIGE7Y2FzZSAzOkMuZmxhZ3M9Qy5mbGFncyYtNDA5N3w2NDtjYXNlIDA6Qz14LnBheWxvYWQ7aD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQz9DLmNhbGwocCxBLGgpOkM7aWYobnVsbD09PWh8fHZvaWQgMD09PWgpYnJlYWsgYTtBPW0oe30sQSxoKTticmVhayBhO2Nhc2UgMjp3Zz0hMH19bnVsbCE9PWYuY2FsbGJhY2smJihhLmZsYWdzfD0zMixoPWUuZWZmZWN0cyxudWxsPT09aD9lLmVmZmVjdHM9W2ZdOmgucHVzaChmKSl9ZWxzZSBwPXtldmVudFRpbWU6cCxsYW5lOmgsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssbmV4dDpudWxsfSxudWxsPT09bj8obD1uPXAsaz1BKTpuPW4ubmV4dD1wLGd8PWg7Zj1mLm5leHQ7aWYobnVsbD09PVxuZilpZihoPWUuc2hhcmVkLnBlbmRpbmcsbnVsbD09PWgpYnJlYWs7ZWxzZSBmPWgubmV4dCxoLm5leHQ9bnVsbCxlLmxhc3RCYXNlVXBkYXRlPWgsZS5zaGFyZWQucGVuZGluZz1udWxsfXdoaWxlKDEpO251bGw9PT1uJiYoaz1BKTtlLmJhc2VTdGF0ZT1rO2UuZmlyc3RCYXNlVXBkYXRlPWw7ZS5sYXN0QmFzZVVwZGF0ZT1uO0RnfD1nO2EubGFuZXM9ZzthLm1lbW9pemVkU3RhdGU9QX19ZnVuY3Rpb24gRWcoYSxiLGMpe2E9Yi5lZmZlY3RzO2IuZWZmZWN0cz1udWxsO2lmKG51bGwhPT1hKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT1kLmNhbGxiYWNrO2lmKG51bGwhPT1lKXtkLmNhbGxiYWNrPW51bGw7ZD1jO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlKXRocm93IEVycm9yKHkoMTkxLGUpKTtlLmNhbGwoZCl9fX12YXIgRmc9KG5ldyBhYS5Db21wb25lbnQpLnJlZnM7XG5mdW5jdGlvbiBHZyhhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bSh7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jOzA9PT1hLmxhbmVzJiYoYS51cGRhdGVRdWV1ZS5iYXNlU3RhdGU9Yyl9XG52YXIgS2c9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFscyk/WmIoYSk9PT1hOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnRhZz0xO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsczt2YXIgYz1IZygpLGQ9SWcoYSksZT16ZyhjLGQpO2UudGFnPTI7dm9pZCAwIT09YiYmbnVsbCE9PWImJihlLmNhbGxiYWNrPVxuYik7QWcoYSxlKTtKZyhhLGQsYyl9fTtmdW5jdGlvbiBMZyhhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFKZShjLGQpfHwhSmUoZSxmKTohMH1cbmZ1bmN0aW9uIE1nKGEsYixjKXt2YXIgZD0hMSxlPUNmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPXZnKGYpOihlPUZmKGIpP0RmOk0uY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP0VmKGEsZSk6Q2YpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj1LZzthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxzPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIE5nKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIE9nKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9Rmc7eGcoYSk7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD12ZyhmKTooZj1GZihiKT9EZjpNLmN1cnJlbnQsZS5jb250ZXh0PUVmKGEsZikpO0NnKGEsYyxlLGQpO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihHZyhhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHxcbihiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxDZyhhLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmZsYWdzfD00KX12YXIgUGc9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIFFnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjtpZihjKXtpZigxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgzMDkpKTt2YXIgZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyBFcnJvcih5KDE0NyxhKSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1GZyYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcih5KDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcih5KDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gUmcoYSxiKXtpZihcInRleHRhcmVhXCIhPT1hLnR5cGUpdGhyb3cgRXJyb3IoeSgzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIpKTt9XG5mdW5jdGlvbiBTZyhhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmZsYWdzPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXthPVRnKGEsYik7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmZsYWdzPTIsXG5jKTpkO2IuZmxhZ3M9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZmxhZ3M9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPVVnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMpLGQucmVmPVFnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1WZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1RZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09Yy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1cbldnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBuKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1YZyhjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIEEoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPVVnKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjPVZnKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPVFnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSB0YTpyZXR1cm4gYj1XZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoUGcoYil8fExhKGIpKXJldHVybiBiPVhnKGIsXG5hLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7UmcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBwKGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09dWE/bihhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmsoYSxiLGMsZCk6bnVsbDtjYXNlIHRhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsfWlmKFBnKGMpfHxMYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDpuKGEsYixjLGQsbnVsbCk7UmcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDKGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9YS5nZXQoYyl8fFxubnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PXVhP24oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6ayhiLGEsZCxlKTtjYXNlIHRhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpfWlmKFBnKGQpfHxMYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxuKGIsYSxkLGUsbnVsbCk7UmcoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB4KGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLHQ9bnVsbCx1PWcsej1nPTAscT1udWxsO251bGwhPT11JiZ6PGgubGVuZ3RoO3orKyl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgbj1wKGUsdSxoW3pdLGspO2lmKG51bGw9PT1uKXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PVxubi5hbHRlcm5hdGUmJmIoZSx1KTtnPWYobixnLHopO251bGw9PT10P2w9bjp0LnNpYmxpbmc9bjt0PW47dT1xfWlmKHo9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7ejxoLmxlbmd0aDt6KyspdT1BKGUsaFt6XSxrKSxudWxsIT09dSYmKGc9Zih1LGcseiksbnVsbD09PXQ/bD11OnQuc2libGluZz11LHQ9dSk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpO3o8aC5sZW5ndGg7eisrKXE9Qyh1LGUseixoW3pdLGspLG51bGwhPT1xJiYoYSYmbnVsbCE9PXEuYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09cS5rZXk/ejpxLmtleSksZz1mKHEsZyx6KSxudWxsPT09dD9sPXE6dC5zaWJsaW5nPXEsdD1xKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfWZ1bmN0aW9uIHcoZSxnLGgsayl7dmFyIGw9TGEoaCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGwpdGhyb3cgRXJyb3IoeSgxNTApKTtoPWwuY2FsbChoKTtpZihudWxsPT1cbmgpdGhyb3cgRXJyb3IoeSgxNTEpKTtmb3IodmFyIHQ9bD1udWxsLHU9Zyx6PWc9MCxxPW51bGwsbj1oLm5leHQoKTtudWxsIT09dSYmIW4uZG9uZTt6Kyssbj1oLm5leHQoKSl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgdz1wKGUsdSxuLnZhbHVlLGspO2lmKG51bGw9PT13KXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PXcuYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKHcsZyx6KTtudWxsPT09dD9sPXc6dC5zaWJsaW5nPXc7dD13O3U9cX1pZihuLmRvbmUpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1BKGUsbi52YWx1ZSxrKSxudWxsIT09biYmKGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1DKHUsZSx6LG4udmFsdWUsayksbnVsbCE9PW4mJihhJiZudWxsIT09bi5hbHRlcm5hdGUmJlxudS5kZWxldGUobnVsbD09PW4ua2V5P3o6bi5rZXkpLGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09dWEmJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2Ugc2E6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKXtzd2l0Y2goay50YWcpe2Nhc2UgNzppZihmLnR5cGU9PT11YSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi5wcm9wcy5jaGlsZHJlbik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1icmVhaztkZWZhdWx0OmlmKGsuZWxlbWVudFR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO1xuZD1lKGssZi5wcm9wcyk7ZC5yZWY9UWcoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9fWMoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPWsuc2libGluZ31mLnR5cGU9PT11YT8oZD1YZyhmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9VmcoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9UWcoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIHRhOmE6e2ZvcihrPWYua2V5O251bGwhPT1kOyl7aWYoZC5rZXk9PT1rKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPVxuV2coZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYpLGQucmV0dXJuPWEsYT1kKTooYyhhLGQpLGQ9VWcoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoUGcoZikpcmV0dXJuIHgoYSxkLGYsaCk7aWYoTGEoZikpcmV0dXJuIHcoYSxkLGYsaCk7bCYmUmcoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMjI6Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aHJvdyBFcnJvcih5KDE1MixSYShhLnR5cGUpfHxcIkNvbXBvbmVudFwiKSk7fXJldHVybiBjKGEsZCl9fXZhciBZZz1TZyghMCksWmc9U2coITEpLCRnPXt9LGFoPUJmKCRnKSxiaD1CZigkZyksY2g9QmYoJGcpO1xuZnVuY3Rpb24gZGgoYSl7aWYoYT09PSRnKXRocm93IEVycm9yKHkoMTc0KSk7cmV0dXJuIGF9ZnVuY3Rpb24gZWgoYSxiKXtJKGNoLGIpO0koYmgsYSk7SShhaCwkZyk7YT1iLm5vZGVUeXBlO3N3aXRjaChhKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTptYihudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6YT04PT09YT9iLnBhcmVudE5vZGU6YixiPWEubmFtZXNwYWNlVVJJfHxudWxsLGE9YS50YWdOYW1lLGI9bWIoYixhKX1IKGFoKTtJKGFoLGIpfWZ1bmN0aW9uIGZoKCl7SChhaCk7SChiaCk7SChjaCl9ZnVuY3Rpb24gZ2goYSl7ZGgoY2guY3VycmVudCk7dmFyIGI9ZGgoYWguY3VycmVudCk7dmFyIGM9bWIoYixhLnR5cGUpO2IhPT1jJiYoSShiaCxhKSxJKGFoLGMpKX1mdW5jdGlvbiBoaChhKXtiaC5jdXJyZW50PT09YSYmKEgoYWgpLEgoYmgpKX12YXIgUD1CZigwKTtcbmZ1bmN0aW9uIGloKGEpe2Zvcih2YXIgYj1hO251bGwhPT1iOyl7aWYoMTM9PT1iLnRhZyl7dmFyIGM9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbD09PWN8fFwiJD9cIj09PWMuZGF0YXx8XCIkIVwiPT09Yy5kYXRhKSlyZXR1cm4gYn1lbHNlIGlmKDE5PT09Yi50YWcmJnZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5yZXZlYWxPcmRlcil7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9dmFyIGpoPW51bGwsa2g9bnVsbCxsaD0hMTtcbmZ1bmN0aW9uIG1oKGEsYil7dmFyIGM9bmgoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZmxhZ3M9ODtudWxsIT09YS5sYXN0RWZmZWN0PyhhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGEubGFzdEVmZmVjdD1jKTphLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1jfWZ1bmN0aW9uIG9oKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgMTM6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBwaChhKXtpZihsaCl7dmFyIGI9a2g7aWYoYil7dmFyIGM9YjtpZighb2goYSxiKSl7Yj1yZihjLm5leHRTaWJsaW5nKTtpZighYnx8IW9oKGEsYikpe2EuZmxhZ3M9YS5mbGFncyYtMTAyNXwyO2xoPSExO2poPWE7cmV0dXJufW1oKGpoLGMpfWpoPWE7a2g9cmYoYi5maXJzdENoaWxkKX1lbHNlIGEuZmxhZ3M9YS5mbGFncyYtMTAyNXwyLGxoPSExLGpoPWF9fWZ1bmN0aW9uIHFoKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTMhPT1hLnRhZzspYT1hLnJldHVybjtqaD1hfVxuZnVuY3Rpb24gcmgoYSl7aWYoYSE9PWpoKXJldHVybiExO2lmKCFsaClyZXR1cm4gcWgoYSksbGg9ITAsITE7dmFyIGI9YS50eXBlO2lmKDUhPT1hLnRhZ3x8XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiFuZihiLGEubWVtb2l6ZWRQcm9wcykpZm9yKGI9a2g7YjspbWgoYSxiKSxiPXJmKGIubmV4dFNpYmxpbmcpO3FoKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IoeSgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7a2g9cmYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ31raD1udWxsfX1lbHNlIGtoPWpoP3JmKGEuc3RhdGVOb2RlLm5leHRTaWJsaW5nKTpudWxsO3JldHVybiEwfVxuZnVuY3Rpb24gc2goKXtraD1qaD1udWxsO2xoPSExfXZhciB0aD1bXTtmdW5jdGlvbiB1aCgpe2Zvcih2YXIgYT0wO2E8dGgubGVuZ3RoO2ErKyl0aFthXS5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1udWxsO3RoLmxlbmd0aD0wfXZhciB2aD1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHdoPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLHhoPTAsUj1udWxsLFM9bnVsbCxUPW51bGwseWg9ITEsemg9ITE7ZnVuY3Rpb24gQWgoKXt0aHJvdyBFcnJvcih5KDMyMSkpO31mdW5jdGlvbiBCaChhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFIZShhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gQ2goYSxiLGMsZCxlLGYpe3hoPWY7Uj1iO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtiLmxhbmVzPTA7dmguY3VycmVudD1udWxsPT09YXx8bnVsbD09PWEubWVtb2l6ZWRTdGF0ZT9EaDpFaDthPWMoZCxlKTtpZih6aCl7Zj0wO2Rve3poPSExO2lmKCEoMjU+ZikpdGhyb3cgRXJyb3IoeSgzMDEpKTtmKz0xO1Q9Uz1udWxsO2IudXBkYXRlUXVldWU9bnVsbDt2aC5jdXJyZW50PUZoO2E9YyhkLGUpfXdoaWxlKHpoKX12aC5jdXJyZW50PUdoO2I9bnVsbCE9PVMmJm51bGwhPT1TLm5leHQ7eGg9MDtUPVM9Uj1udWxsO3loPSExO2lmKGIpdGhyb3cgRXJyb3IoeSgzMDApKTtyZXR1cm4gYX1mdW5jdGlvbiBIaCgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwsYmFzZVF1ZXVlOm51bGwscXVldWU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YTtyZXR1cm4gVH1cbmZ1bmN0aW9uIEloKCl7aWYobnVsbD09PVMpe3ZhciBhPVIuYWx0ZXJuYXRlO2E9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGx9ZWxzZSBhPVMubmV4dDt2YXIgYj1udWxsPT09VD9SLm1lbW9pemVkU3RhdGU6VC5uZXh0O2lmKG51bGwhPT1iKVQ9YixTPWE7ZWxzZXtpZihudWxsPT09YSl0aHJvdyBFcnJvcih5KDMxMCkpO1M9YTthPXttZW1vaXplZFN0YXRlOlMubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Uy5iYXNlU3RhdGUsYmFzZVF1ZXVlOlMuYmFzZVF1ZXVlLHF1ZXVlOlMucXVldWUsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWF9cmV0dXJuIFR9ZnVuY3Rpb24gSmgoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBLaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPVMsZT1kLmJhc2VRdWV1ZSxmPWMucGVuZGluZztpZihudWxsIT09Zil7aWYobnVsbCE9PWUpe3ZhciBnPWUubmV4dDtlLm5leHQ9Zi5uZXh0O2YubmV4dD1nfWQuYmFzZVF1ZXVlPWU9ZjtjLnBlbmRpbmc9bnVsbH1pZihudWxsIT09ZSl7ZT1lLm5leHQ7ZD1kLmJhc2VTdGF0ZTt2YXIgaD1nPWY9bnVsbCxrPWU7ZG97dmFyIGw9ay5sYW5lO2lmKCh4aCZsKT09PWwpbnVsbCE9PWgmJihoPWgubmV4dD17bGFuZTowLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfSksZD1rLmVhZ2VyUmVkdWNlcj09PWE/ay5lYWdlclN0YXRlOmEoZCxrLmFjdGlvbik7ZWxzZXt2YXIgbj17bGFuZTpsLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsXG5lYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9O251bGw9PT1oPyhnPWg9bixmPWQpOmg9aC5uZXh0PW47Ui5sYW5lc3w9bDtEZ3w9bH1rPWsubmV4dH13aGlsZShudWxsIT09ayYmayE9PWUpO251bGw9PT1oP2Y9ZDpoLm5leHQ9ZztIZShkLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWQ7Yi5iYXNlU3RhdGU9ZjtiLmJhc2VRdWV1ZT1oO2MubGFzdFJlbmRlcmVkU3RhdGU9ZH1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gTGgoYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1jLmRpc3BhdGNoLGU9Yy5wZW5kaW5nLGY9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lKXtjLnBlbmRpbmc9bnVsbDt2YXIgZz1lPWUubmV4dDtkbyBmPWEoZixnLmFjdGlvbiksZz1nLm5leHQ7d2hpbGUoZyE9PWUpO0hlKGYsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtudWxsPT09Yi5iYXNlUXVldWUmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2YsZF19XG5mdW5jdGlvbiBNaChhLGIsYyl7dmFyIGQ9Yi5fZ2V0VmVyc2lvbjtkPWQoYi5fc291cmNlKTt2YXIgZT1iLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5O2lmKG51bGwhPT1lKWE9ZT09PWQ7ZWxzZSBpZihhPWEubXV0YWJsZVJlYWRMYW5lcyxhPSh4aCZhKT09PWEpYi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1kLHRoLnB1c2goYik7aWYoYSlyZXR1cm4gYyhiLl9zb3VyY2UpO3RoLnB1c2goYik7dGhyb3cgRXJyb3IoeSgzNTApKTt9XG5mdW5jdGlvbiBOaChhLGIsYyxkKXt2YXIgZT1VO2lmKG51bGw9PT1lKXRocm93IEVycm9yKHkoMzQ5KSk7dmFyIGY9Yi5fZ2V0VmVyc2lvbixnPWYoYi5fc291cmNlKSxoPXZoLmN1cnJlbnQsaz1oLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIE1oKGUsYixjKX0pLGw9a1sxXSxuPWtbMF07az1UO3ZhciBBPWEubWVtb2l6ZWRTdGF0ZSxwPUEucmVmcyxDPXAuZ2V0U25hcHNob3QseD1BLnNvdXJjZTtBPUEuc3Vic2NyaWJlO3ZhciB3PVI7YS5tZW1vaXplZFN0YXRlPXtyZWZzOnAsc291cmNlOmIsc3Vic2NyaWJlOmR9O2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cC5nZXRTbmFwc2hvdD1jO3Auc2V0U25hcHNob3Q9bDt2YXIgYT1mKGIuX3NvdXJjZSk7aWYoIUhlKGcsYSkpe2E9YyhiLl9zb3VyY2UpO0hlKG4sYSl8fChsKGEpLGE9SWcodyksZS5tdXRhYmxlUmVhZExhbmVzfD1hJmUucGVuZGluZ0xhbmVzKTthPWUubXV0YWJsZVJlYWRMYW5lcztlLmVudGFuZ2xlZExhbmVzfD1hO2Zvcih2YXIgZD1cbmUuZW50YW5nbGVtZW50cyxoPWE7MDxoOyl7dmFyIGs9MzEtVmMoaCksdj0xPDxrO2Rba118PWE7aCY9fnZ9fX0sW2MsYixkXSk7aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gZChiLl9zb3VyY2UsZnVuY3Rpb24oKXt2YXIgYT1wLmdldFNuYXBzaG90LGM9cC5zZXRTbmFwc2hvdDt0cnl7YyhhKGIuX3NvdXJjZSkpO3ZhciBkPUlnKHcpO2UubXV0YWJsZVJlYWRMYW5lc3w9ZCZlLnBlbmRpbmdMYW5lc31jYXRjaChxKXtjKGZ1bmN0aW9uKCl7dGhyb3cgcTt9KX19KX0sW2IsZF0pO0hlKEMsYykmJkhlKHgsYikmJkhlKEEsZCl8fChhPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOm59LGEuZGlzcGF0Y2g9bD1PaC5iaW5kKG51bGwsUixhKSxrLnF1ZXVlPWEsay5iYXNlUXVldWU9bnVsbCxuPU1oKGUsYixjKSxrLm1lbW9pemVkU3RhdGU9ay5iYXNlU3RhdGU9bik7cmV0dXJuIG59XG5mdW5jdGlvbiBQaChhLGIsYyl7dmFyIGQ9SWgoKTtyZXR1cm4gTmgoZCxhLGIsYyl9ZnVuY3Rpb24gUWgoYSl7dmFyIGI9SGgoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6YX07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19XG5mdW5jdGlvbiBSaChhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07Yj1SLnVwZGF0ZVF1ZXVlO251bGw9PT1iPyhiPXtsYXN0RWZmZWN0Om51bGx9LFIudXBkYXRlUXVldWU9YixiLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihjPWIubGFzdEVmZmVjdCxudWxsPT09Yz9iLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGQ9Yy5uZXh0LGMubmV4dD1hLGEubmV4dD1kLGIubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gU2goYSl7dmFyIGI9SGgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX1mdW5jdGlvbiBUaCgpe3JldHVybiBJaCgpLm1lbW9pemVkU3RhdGV9ZnVuY3Rpb24gVWgoYSxiLGMsZCl7dmFyIGU9SGgoKTtSLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gVmgoYSxiLGMsZCl7dmFyIGU9SWgoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Uyl7dmFyIGc9Uy5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZCaChkLGcuZGVwcykpe1JoKGIsYyxmLGQpO3JldHVybn19Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsZixkKX1mdW5jdGlvbiBXaChhLGIpe3JldHVybiBVaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFhoKGEsYil7cmV0dXJuIFZoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWWgoYSxiKXtyZXR1cm4gVmgoNCwyLGEsYil9ZnVuY3Rpb24gWmgoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1cbmZ1bmN0aW9uICRoKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVmgoNCwyLFpoLmJpbmQobnVsbCxiLGEpLGMpfWZ1bmN0aW9uIGFpKCl7fWZ1bmN0aW9uIGJpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfWZ1bmN0aW9uIGNpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gZGkoYSxiKXt2YXIgYz1lZygpO2dnKDk4PmM/OTg6YyxmdW5jdGlvbigpe2EoITApfSk7Z2coOTc8Yz85NzpjLGZ1bmN0aW9uKCl7dmFyIGM9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2EoITEpLGIoKX1maW5hbGx5e3doLnRyYW5zaXRpb249Y319KX1cbmZ1bmN0aW9uIE9oKGEsYixjKXt2YXIgZD1IZygpLGU9SWcoYSksZj17bGFuZTplLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LGc9Yi5wZW5kaW5nO251bGw9PT1nP2YubmV4dD1mOihmLm5leHQ9Zy5uZXh0LGcubmV4dD1mKTtiLnBlbmRpbmc9ZjtnPWEuYWx0ZXJuYXRlO2lmKGE9PT1SfHxudWxsIT09ZyYmZz09PVIpemg9eWg9ITA7ZWxzZXtpZigwPT09YS5sYW5lcyYmKG51bGw9PT1nfHwwPT09Zy5sYW5lcykmJihnPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZykpdHJ5e3ZhciBoPWIubGFzdFJlbmRlcmVkU3RhdGUsaz1nKGgsYyk7Zi5lYWdlclJlZHVjZXI9ZztmLmVhZ2VyU3RhdGU9aztpZihIZShrLGgpKXJldHVybn1jYXRjaChsKXt9ZmluYWxseXt9SmcoYSxlLGQpfX1cbnZhciBHaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6QWgsdXNlQ29udGV4dDpBaCx1c2VFZmZlY3Q6QWgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpBaCx1c2VMYXlvdXRFZmZlY3Q6QWgsdXNlTWVtbzpBaCx1c2VSZWR1Y2VyOkFoLHVzZVJlZjpBaCx1c2VTdGF0ZTpBaCx1c2VEZWJ1Z1ZhbHVlOkFoLHVzZURlZmVycmVkVmFsdWU6QWgsdXNlVHJhbnNpdGlvbjpBaCx1c2VNdXRhYmxlU291cmNlOkFoLHVzZU9wYXF1ZUlkZW50aWZpZXI6QWgsdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxEaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtIaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpXaCx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVWgoNCwyLFpoLmJpbmQobnVsbCxcbmIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBVaCg0LDIsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPUhoKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPWQucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOlNoLHVzZVN0YXRlOlFoLHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1RaChhKSxjPWJbMF0sZD1iWzFdO1doKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjtcbndoLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1RaCghMSksYj1hWzBdO2E9ZGkuYmluZChudWxsLGFbMV0pO1NoKGEpO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2QubWVtb2l6ZWRTdGF0ZT17cmVmczp7Z2V0U25hcHNob3Q6YixzZXRTbmFwc2hvdDpudWxsfSxzb3VyY2U6YSxzdWJzY3JpYmU6Y307cmV0dXJuIE5oKGQsYSxiLGMpfSx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7aWYobGgpe3ZhciBhPSExLGI9dWYoZnVuY3Rpb24oKXthfHwoYT0hMCxjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKSk7dGhyb3cgRXJyb3IoeSgzNTUpKTt9KSxjPVFoKGIpWzFdOzA9PT0oUi5tb2RlJjIpJiYoUi5mbGFnc3w9NTE2LFJoKDUsZnVuY3Rpb24oKXtjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKX0sXG52b2lkIDAsbnVsbCkpO3JldHVybiBifWI9XCJyOlwiKyh0ZisrKS50b1N0cmluZygzNik7UWgoYik7cmV0dXJuIGJ9LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRWg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpLaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9S2goSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1LaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEZoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6TGgsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUxoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9TGgoSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxlaT1yYS5SZWFjdEN1cnJlbnRPd25lcix1Zz0hMTtmdW5jdGlvbiBmaShhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP1pnKGIsbnVsbCxjLGQpOllnKGIsYS5jaGlsZCxjLGQpfWZ1bmN0aW9uIGdpKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjt0ZyhiLGUpO2Q9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaWkoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hKXt2YXIgZz1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJiFqaShnKSYmdm9pZCAwPT09Zy5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZyxraShhLGIsZyxkLGUsZik7YT1WZyhjLnR5cGUsbnVsbCxkLGIsYi5tb2RlLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1nPWEuY2hpbGQ7aWYoMD09PShlJmYpJiYoZT1nLm1lbW9pemVkUHJvcHMsYz1jLmNvbXBhcmUsYz1udWxsIT09Yz9jOkplLGMoZSxkKSYmYS5yZWY9PT1iLnJlZikpcmV0dXJuIGhpKGEsYixmKTtiLmZsYWdzfD0xO2E9VGcoZyxkKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBraShhLGIsYyxkLGUsZil7aWYobnVsbCE9PWEmJkplKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZilpZih1Zz0hMSwwIT09KGYmZSkpMCE9PShhLmZsYWdzJjE2Mzg0KSYmKHVnPSEwKTtlbHNlIHJldHVybiBiLmxhbmVzPWEubGFuZXMsaGkoYSxiLGYpO3JldHVybiBsaShhLGIsYyxkLGYpfVxuZnVuY3Rpb24gbWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbixmPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO2lmKFwiaGlkZGVuXCI9PT1kLm1vZGV8fFwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIj09PWQubW9kZSlpZigwPT09KGIubW9kZSY0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLGMpO2Vsc2UgaWYoMCE9PShjJjEwNzM3NDE4MjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsbnVsbCE9PWY/Zi5iYXNlTGFuZXM6Yyk7ZWxzZSByZXR1cm4gYT1udWxsIT09Zj9mLmJhc2VMYW5lc3xjOmMsYi5sYW5lcz1iLmNoaWxkTGFuZXM9MTA3Mzc0MTgyNCxiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczphfSxuaShiLGEpLG51bGw7ZWxzZSBudWxsIT09Zj8oZD1mLmJhc2VMYW5lc3xjLGIubWVtb2l6ZWRTdGF0ZT1udWxsKTpkPWMsbmkoYixkKTtmaShhLGIsZSxjKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIG9pKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZmxhZ3N8PTEyOH1mdW5jdGlvbiBsaShhLGIsYyxkLGUpe3ZhciBmPUZmKGMpP0RmOk0uY3VycmVudDtmPUVmKGIsZik7dGcoYixlKTtjPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHBpKGEsYixjLGQsZSl7aWYoRmYoYykpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTt0ZyhiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSludWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxNZyhiLGMsZCksT2coYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGs9Zy5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9dmcobCk6KGw9RmYoYyk/RGY6TS5jdXJyZW50LGw9RWYoYixsKSk7dmFyIG49Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7QXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxrIT09bCkmJk5nKGIsZyxkLGwpO3dnPSExO3ZhciBwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7az1iLm1lbW9pemVkU3RhdGU7aCE9PWR8fHAhPT1rfHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbiYmKEdnKGIsYyxuLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoaD13Z3x8TGcoYixjLGgsZCxwLGssbCkpPyhBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PVxudHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxkPSExKX1lbHNle2c9Yi5zdGF0ZU5vZGU7eWcoYSxiKTtoPWIubWVtb2l6ZWRQcm9wcztsPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpsZyhiLnR5cGUsaCk7Zy5wcm9wcz1sO0E9Yi5wZW5kaW5nUHJvcHM7cD1nLmNvbnRleHQ7az1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az12ZyhrKTooaz1GZihjKT9EZjpNLmN1cnJlbnQsaz1FZihiLGspKTt2YXIgQz1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczsobj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQ3x8XG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PUF8fHAhPT1rKSYmTmcoYixnLGQsayk7d2c9ITE7cD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO3ZhciB4PWIubWVtb2l6ZWRTdGF0ZTtoIT09QXx8cCE9PXh8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDJiYoR2coYixjLEMsZCkseD1iLm1lbW9pemVkU3RhdGUpLChsPXdnfHxMZyhiLGMsbCxkLHAseCxrKSk/KG58fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsXG54LGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQseCxrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmZsYWdzfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT14KSxnLnByb3BzPWQsZy5zdGF0ZT14LGcuY29udGV4dD1rLGQ9bCk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8XG5oPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGQ9ITEpfXJldHVybiBxaShhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBxaShhLGIsYyxkLGUsZil7b2koYSxiKTt2YXIgZz0wIT09KGIuZmxhZ3MmNjQpO2lmKCFkJiYhZylyZXR1cm4gZSYmS2YoYixjLCExKSxoaShhLGIsZik7ZD1iLnN0YXRlTm9kZTtlaS5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmZsYWdzfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPVlnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9WWcoYixudWxsLGgsZikpOmZpKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJktmKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gcmkoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9IZihhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZIZihhLGIuY29udGV4dCwhMSk7ZWgoYSxiLmNvbnRhaW5lckluZm8pfVxudmFyIHNpPXtkZWh5ZHJhdGVkOm51bGwscmV0cnlMYW5lOjB9O1xuZnVuY3Rpb24gdGkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9UC5jdXJyZW50LGY9ITEsZzsoZz0wIT09KGIuZmxhZ3MmNjQpKXx8KGc9bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGU/ITE6MCE9PShlJjIpKTtnPyhmPSEwLGIuZmxhZ3MmPS02NSk6bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGV8fHZvaWQgMD09PWQuZmFsbGJhY2t8fCEwPT09ZC51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8KGV8PTEpO0koUCxlJjEpO2lmKG51bGw9PT1hKXt2b2lkIDAhPT1kLmZhbGxiYWNrJiZwaChiKTthPWQuY2hpbGRyZW47ZT1kLmZhbGxiYWNrO2lmKGYpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sYi5tZW1vaXplZFN0YXRlPXNpLGE7aWYoXCJudW1iZXJcIj09PXR5cGVvZiBkLnVuc3RhYmxlX2V4cGVjdGVkTG9hZFRpbWUpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sXG5iLm1lbW9pemVkU3RhdGU9c2ksYi5sYW5lcz0zMzU1NDQzMixhO2M9dmkoe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46YX0sYi5tb2RlLGMsbnVsbCk7Yy5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1jfWlmKG51bGwhPT1hLm1lbW9pemVkU3RhdGUpe2lmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306e2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTpcbntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWZ1bmN0aW9uIHVpKGEsYixjLGQpe3ZhciBlPWEubW9kZSxmPWEuY2hpbGQ7Yj17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmJ9OzA9PT0oZSYyKSYmbnVsbCE9PWY/KGYuY2hpbGRMYW5lcz0wLGYucGVuZGluZ1Byb3BzPWIpOmY9dmkoYixlLDAsbnVsbCk7Yz1YZyhjLGUsZCxudWxsKTtmLnJldHVybj1hO2MucmV0dXJuPWE7Zi5zaWJsaW5nPWM7YS5jaGlsZD1mO3JldHVybiBjfVxuZnVuY3Rpb24geGkoYSxiLGMsZCl7dmFyIGU9YS5jaGlsZDthPWUuc2libGluZztjPVRnKGUse21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46Y30pOzA9PT0oYi5tb2RlJjIpJiYoYy5sYW5lcz1kKTtjLnJldHVybj1iO2Muc2libGluZz1udWxsO251bGwhPT1hJiYoYS5uZXh0RWZmZWN0PW51bGwsYS5mbGFncz04LGIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWEpO3JldHVybiBiLmNoaWxkPWN9XG5mdW5jdGlvbiB3aShhLGIsYyxkLGUpe3ZhciBmPWIubW9kZSxnPWEuY2hpbGQ7YT1nLnNpYmxpbmc7dmFyIGg9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpjfTswPT09KGYmMikmJmIuY2hpbGQhPT1nPyhjPWIuY2hpbGQsYy5jaGlsZExhbmVzPTAsYy5wZW5kaW5nUHJvcHM9aCxnPWMubGFzdEVmZmVjdCxudWxsIT09Zz8oYi5maXJzdEVmZmVjdD1jLmZpcnN0RWZmZWN0LGIubGFzdEVmZmVjdD1nLGcubmV4dEVmZmVjdD1udWxsKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsKTpjPVRnKGcsaCk7bnVsbCE9PWE/ZD1UZyhhLGQpOihkPVhnKGQsZixlLG51bGwpLGQuZmxhZ3N8PTIpO2QucmV0dXJuPWI7Yy5yZXR1cm49YjtjLnNpYmxpbmc9ZDtiLmNoaWxkPWM7cmV0dXJuIGR9ZnVuY3Rpb24geWkoYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7c2coYS5yZXR1cm4sYil9XG5mdW5jdGlvbiB6aShhLGIsYyxkLGUsZil7dmFyIGc9YS5tZW1vaXplZFN0YXRlO251bGw9PT1nP2EubWVtb2l6ZWRTdGF0ZT17aXNCYWNrd2FyZHM6YixyZW5kZXJpbmc6bnVsbCxyZW5kZXJpbmdTdGFydFRpbWU6MCxsYXN0OmQsdGFpbDpjLHRhaWxNb2RlOmUsbGFzdEVmZmVjdDpmfTooZy5pc0JhY2t3YXJkcz1iLGcucmVuZGVyaW5nPW51bGwsZy5yZW5kZXJpbmdTdGFydFRpbWU9MCxnLmxhc3Q9ZCxnLnRhaWw9YyxnLnRhaWxNb2RlPWUsZy5sYXN0RWZmZWN0PWYpfVxuZnVuY3Rpb24gQWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5yZXZlYWxPcmRlcixmPWQudGFpbDtmaShhLGIsZC5jaGlsZHJlbixjKTtkPVAuY3VycmVudDtpZigwIT09KGQmMikpZD1kJjF8MixiLmZsYWdzfD02NDtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmeWkoYSxjKTtlbHNlIGlmKDE5PT09YS50YWcpeWkoYSxjKTtlbHNlIGlmKG51bGwhPT1hLmNoaWxkKXthLmNoaWxkLnJldHVybj1hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YilicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8YS5yZXR1cm49PT1iKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWQmPTF9SShQLGQpO2lmKDA9PT0oYi5tb2RlJjIpKWIubWVtb2l6ZWRTdGF0ZT1cbm51bGw7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcImZvcndhcmRzXCI6Yz1iLmNoaWxkO2ZvcihlPW51bGw7bnVsbCE9PWM7KWE9Yy5hbHRlcm5hdGUsbnVsbCE9PWEmJm51bGw9PT1paChhKSYmKGU9YyksYz1jLnNpYmxpbmc7Yz1lO251bGw9PT1jPyhlPWIuY2hpbGQsYi5jaGlsZD1udWxsKTooZT1jLnNpYmxpbmcsYy5zaWJsaW5nPW51bGwpO3ppKGIsITEsZSxjLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PWloKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX16aShiLCEwLGMsbnVsbCxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6emkoYiwhMSxudWxsLG51bGwsdm9pZCAwLGIubGFzdEVmZmVjdCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhpKGEsYixjKXtudWxsIT09YSYmKGIuZGVwZW5kZW5jaWVzPWEuZGVwZW5kZW5jaWVzKTtEZ3w9Yi5sYW5lcztpZigwIT09KGMmYi5jaGlsZExhbmVzKSl7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IEVycm9yKHkoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVRnKGEsYS5wZW5kaW5nUHJvcHMpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1UZyhhLGEucGVuZGluZ1Byb3BzKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfXJldHVybiBudWxsfXZhciBCaSxDaSxEaSxFaTtcbkJpPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtDaT1mdW5jdGlvbigpe307XG5EaT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLm1lbW9pemVkUHJvcHM7aWYoZSE9PWQpe2E9Yi5zdGF0ZU5vZGU7ZGgoYWguY3VycmVudCk7dmFyIGY9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6ZT1ZYShhLGUpO2Q9WWEoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZSk7ZD1lYihhLGQpO2Y9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmU9bSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtkPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7Zj1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjplPWdiKGEsZSk7ZD1nYihhLGQpO2Y9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX12YihjLGQpO3ZhciBnO2M9bnVsbDtmb3IobCBpbiBlKWlmKCFkLmhhc093blByb3BlcnR5KGwpJiZlLmhhc093blByb3BlcnR5KGwpJiZudWxsIT1lW2xdKWlmKFwic3R5bGVcIj09PVxubCl7dmFyIGg9ZVtsXTtmb3IoZyBpbiBoKWguaGFzT3duUHJvcGVydHkoZykmJihjfHwoYz17fSksY1tnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmXCJjaGlsZHJlblwiIT09bCYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpP2Z8fChmPVtdKTooZj1mfHxbXSkucHVzaChsLG51bGwpKTtmb3IobCBpbiBkKXt2YXIgaz1kW2xdO2g9bnVsbCE9ZT9lW2xdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGwpJiZrIT09aCYmKG51bGwhPWt8fG51bGwhPWgpKWlmKFwic3R5bGVcIj09PWwpaWYoaCl7Zm9yKGcgaW4gaCkhaC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGN8fChjPXt9KSxjW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmaFtnXSE9PWtbZ10mJihjfHxcbihjPXt9KSxjW2ddPWtbZ10pfWVsc2UgY3x8KGZ8fChmPVtdKSxmLnB1c2gobCxjKSksYz1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGg9aD9oLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmaCE9PWsmJihmPWZ8fFtdKS5wdXNoKGwsaykpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChmPWZ8fFtdKS5wdXNoKGwsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT8obnVsbCE9ayYmXCJvblNjcm9sbFwiPT09bCYmRyhcInNjcm9sbFwiLGEpLGZ8fGg9PT1rfHwoZj1bXSkpOlwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWsmJmsuJCR0eXBlb2Y9PT1HYT9rLnRvU3RyaW5nKCk6KGY9Znx8W10pLnB1c2gobCxrKSl9YyYmKGY9Znx8W10pLnB1c2goXCJzdHlsZVwiLFxuYyk7dmFyIGw9ZjtpZihiLnVwZGF0ZVF1ZXVlPWwpYi5mbGFnc3w9NH19O0VpPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiYoYi5mbGFnc3w9NCl9O2Z1bmN0aW9uIEZpKGEsYil7aWYoIWxoKXN3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBHaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6Y2FzZSAxNjpjYXNlIDE1OmNhc2UgMDpjYXNlIDExOmNhc2UgNzpjYXNlIDg6Y2FzZSAxMjpjYXNlIDk6Y2FzZSAxNDpyZXR1cm4gbnVsbDtjYXNlIDE6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtkPWIuc3RhdGVOb2RlO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1hfHxudWxsPT09YS5jaGlsZClyaChiKT9iLmZsYWdzfD00OmQuaHlkcmF0ZXx8KGIuZmxhZ3N8PTI1Nik7Q2koYik7cmV0dXJuIG51bGw7Y2FzZSA1OmhoKGIpO3ZhciBlPWRoKGNoLmN1cnJlbnQpO2M9Yi50eXBlO2lmKG51bGwhPT1hJiZudWxsIT1iLnN0YXRlTm9kZSlEaShhLGIsYyxkLGUpLGEucmVmIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpO2Vsc2V7aWYoIWQpe2lmKG51bGw9PT1cbmIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7cmV0dXJuIG51bGx9YT1kaChhaC5jdXJyZW50KTtpZihyaChiKSl7ZD1iLnN0YXRlTm9kZTtjPWIudHlwZTt2YXIgZj1iLm1lbW9pemVkUHJvcHM7ZFt3Zl09YjtkW3hmXT1mO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGQpO0coXCJjbG9zZVwiLGQpO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoYT0wO2E8WGUubGVuZ3RoO2ErKylHKFhlW2FdLGQpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixkKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixkKTtHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGQpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGQsZik7RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZC5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhZi5tdWx0aXBsZX07RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihkLGYpLEcoXCJpbnZhbGlkXCIsZCl9dmIoYyxmKTthPW51bGw7Zm9yKHZhciBnIGluIGYpZi5oYXNPd25Qcm9wZXJ0eShnKSYmKGU9ZltnXSxcImNoaWxkcmVuXCI9PT1nP1wic3RyaW5nXCI9PT10eXBlb2YgZT9kLnRleHRDb250ZW50IT09ZSYmKGE9W1wiY2hpbGRyZW5cIixlXSk6XCJudW1iZXJcIj09PXR5cGVvZiBlJiZkLnRleHRDb250ZW50IT09XCJcIitlJiYoYT1bXCJjaGlsZHJlblwiLFwiXCIrZV0pOmNhLmhhc093blByb3BlcnR5KGcpJiZudWxsIT1lJiZcIm9uU2Nyb2xsXCI9PT1nJiZHKFwic2Nyb2xsXCIsZCkpO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShkKTtjYihkLGYsITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGQpO2piKGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5vbkNsaWNrJiYoZC5vbmNsaWNrPVxuamYpfWQ9YTtiLnVwZGF0ZVF1ZXVlPWQ7bnVsbCE9PWQmJihiLmZsYWdzfD00KX1lbHNle2c9OT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQ7YT09PWtiLmh0bWwmJihhPWxiKGMpKTthPT09a2IuaHRtbD9cInNjcmlwdFwiPT09Yz8oYT1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixhPWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBkLmlzP2E9Zy5jcmVhdGVFbGVtZW50KGMse2lzOmQuaXN9KTooYT1nLmNyZWF0ZUVsZW1lbnQoYyksXCJzZWxlY3RcIj09PWMmJihnPWEsZC5tdWx0aXBsZT9nLm11bHRpcGxlPSEwOmQuc2l6ZSYmKGcuc2l6ZT1kLnNpemUpKSk6YT1nLmNyZWF0ZUVsZW1lbnROUyhhLGMpO2Fbd2ZdPWI7YVt4Zl09ZDtCaShhLGIsITEsITEpO2Iuc3RhdGVOb2RlPWE7Zz13YihjLGQpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGEpO0coXCJjbG9zZVwiLGEpO1xuZT1kO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPFhlLmxlbmd0aDtlKyspRyhYZVtlXSxhKTtlPWQ7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixhKTtHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoYSxkKTtlPVlhKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZC5tdWx0aXBsZX07ZT1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoYSxkKTtlPVxuZ2IoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2RlZmF1bHQ6ZT1kfXZiKGMsZSk7dmFyIGg9ZTtmb3IoZiBpbiBoKWlmKGguaGFzT3duUHJvcGVydHkoZikpe3ZhciBrPWhbZl07XCJzdHlsZVwiPT09Zj90YihhLGspOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWY/KGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmb2IoYSxrKSk6XCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGs/KFwidGV4dGFyZWFcIiE9PWN8fFwiXCIhPT1rKSYmcGIoYSxrKTpcIm51bWJlclwiPT09dHlwZW9mIGsmJnBiKGEsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ZiYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWYmJlwiYXV0b0ZvY3VzXCIhPT1mJiYoY2EuaGFzT3duUHJvcGVydHkoZik/bnVsbCE9ayYmXCJvblNjcm9sbFwiPT09ZiYmRyhcInNjcm9sbFwiLGEpOm51bGwhPWsmJnFhKGEsZixrLGcpKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoYSk7Y2IoYSxkLCExKTtcbmJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGEpO2piKGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1kLnZhbHVlJiZhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitTYShkLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEubXVsdGlwbGU9ISFkLm11bHRpcGxlO2Y9ZC52YWx1ZTtudWxsIT1mP2ZiKGEsISFkLm11bHRpcGxlLGYsITEpOm51bGwhPWQuZGVmYXVsdFZhbHVlJiZmYihhLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX1tZihjLGQpJiYoYi5mbGFnc3w9NCl9bnVsbCE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KX1yZXR1cm4gbnVsbDtjYXNlIDY6aWYoYSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRWkoYSxiLGEubWVtb2l6ZWRQcm9wcyxkKTtlbHNle2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZCYmbnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7XG5jPWRoKGNoLmN1cnJlbnQpO2RoKGFoLmN1cnJlbnQpO3JoKGIpPyhkPWIuc3RhdGVOb2RlLGM9Yi5tZW1vaXplZFByb3BzLGRbd2ZdPWIsZC5ub2RlVmFsdWUhPT1jJiYoYi5mbGFnc3w9NCkpOihkPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZCksZFt3Zl09YixiLnN0YXRlTm9kZT1kKX1yZXR1cm4gbnVsbDtjYXNlIDEzOkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYi5sYW5lcz1jLGI7ZD1udWxsIT09ZDtjPSExO251bGw9PT1hP3ZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5mYWxsYmFjayYmcmgoYik6Yz1udWxsIT09YS5tZW1vaXplZFN0YXRlO2lmKGQmJiFjJiYwIT09KGIubW9kZSYyKSlpZihudWxsPT09YSYmITAhPT1iLm1lbW9pemVkUHJvcHMudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fDAhPT0oUC5jdXJyZW50JjEpKTA9PT1WJiYoVj0zKTtlbHNle2lmKDA9PT1WfHwzPT09VilWPVxuNDtudWxsPT09VXx8MD09PShEZyYxMzQyMTc3MjcpJiYwPT09KEhpJjEzNDIxNzcyNyl8fElpKFUsVyl9aWYoZHx8YyliLmZsYWdzfD00O3JldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxDaShiKSxudWxsPT09YSYmY2YoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksbnVsbDtjYXNlIDEwOnJldHVybiByZyhiKSxudWxsO2Nhc2UgMTc6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDE5OkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Zj0wIT09KGIuZmxhZ3MmNjQpO2c9ZC5yZW5kZXJpbmc7aWYobnVsbD09PWcpaWYoZilGaShkLCExKTtlbHNle2lmKDAhPT1WfHxudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7Zz1paChhKTtpZihudWxsIT09Zyl7Yi5mbGFnc3w9NjQ7RmkoZCwhMSk7Zj1nLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoYi51cGRhdGVRdWV1ZT1mLGIuZmxhZ3N8PTQpO1xubnVsbD09PWQubGFzdEVmZmVjdCYmKGIuZmlyc3RFZmZlY3Q9bnVsbCk7Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdDtkPWM7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZj1jLGE9ZCxmLmZsYWdzJj0yLGYubmV4dEVmZmVjdD1udWxsLGYuZmlyc3RFZmZlY3Q9bnVsbCxmLmxhc3RFZmZlY3Q9bnVsbCxnPWYuYWx0ZXJuYXRlLG51bGw9PT1nPyhmLmNoaWxkTGFuZXM9MCxmLmxhbmVzPWEsZi5jaGlsZD1udWxsLGYubWVtb2l6ZWRQcm9wcz1udWxsLGYubWVtb2l6ZWRTdGF0ZT1udWxsLGYudXBkYXRlUXVldWU9bnVsbCxmLmRlcGVuZGVuY2llcz1udWxsLGYuc3RhdGVOb2RlPW51bGwpOihmLmNoaWxkTGFuZXM9Zy5jaGlsZExhbmVzLGYubGFuZXM9Zy5sYW5lcyxmLmNoaWxkPWcuY2hpbGQsZi5tZW1vaXplZFByb3BzPWcubWVtb2l6ZWRQcm9wcyxmLm1lbW9pemVkU3RhdGU9Zy5tZW1vaXplZFN0YXRlLGYudXBkYXRlUXVldWU9Zy51cGRhdGVRdWV1ZSxmLnR5cGU9Zy50eXBlLGE9Zy5kZXBlbmRlbmNpZXMsXG5mLmRlcGVuZGVuY2llcz1udWxsPT09YT9udWxsOntsYW5lczphLmxhbmVzLGZpcnN0Q29udGV4dDphLmZpcnN0Q29udGV4dH0pLGM9Yy5zaWJsaW5nO0koUCxQLmN1cnJlbnQmMXwyKTtyZXR1cm4gYi5jaGlsZH1hPWEuc2libGluZ31udWxsIT09ZC50YWlsJiZPKCk+SmkmJihiLmZsYWdzfD02NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpfWVsc2V7aWYoIWYpaWYoYT1paChnKSxudWxsIT09YSl7aWYoYi5mbGFnc3w9NjQsZj0hMCxjPWEudXBkYXRlUXVldWUsbnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5mbGFnc3w9NCksRmkoZCwhMCksbnVsbD09PWQudGFpbCYmXCJoaWRkZW5cIj09PWQudGFpbE1vZGUmJiFnLmFsdGVybmF0ZSYmIWxoKXJldHVybiBiPWIubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3QsbnVsbCE9PWImJihiLm5leHRFZmZlY3Q9bnVsbCksbnVsbH1lbHNlIDIqTygpLWQucmVuZGVyaW5nU3RhcnRUaW1lPkppJiYxMDczNzQxODI0IT09YyYmKGIuZmxhZ3N8PVxuNjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKTtkLmlzQmFja3dhcmRzPyhnLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWcpOihjPWQubGFzdCxudWxsIT09Yz9jLnNpYmxpbmc9ZzpiLmNoaWxkPWcsZC5sYXN0PWcpfXJldHVybiBudWxsIT09ZC50YWlsPyhjPWQudGFpbCxkLnJlbmRlcmluZz1jLGQudGFpbD1jLnNpYmxpbmcsZC5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCxkLnJlbmRlcmluZ1N0YXJ0VGltZT1PKCksYy5zaWJsaW5nPW51bGwsYj1QLmN1cnJlbnQsSShQLGY/YiYxfDI6YiYxKSxjKTpudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSE9PShudWxsIT09Yi5tZW1vaXplZFN0YXRlKSYmXCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiIT09ZC5tb2RlJiYoYi5mbGFnc3w9NCksbnVsbH10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO31cbmZ1bmN0aW9uIExpKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOkZmKGEudHlwZSkmJkdmKCk7dmFyIGI9YS5mbGFncztyZXR1cm4gYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtiPWEuZmxhZ3M7aWYoMCE9PShiJjY0KSl0aHJvdyBFcnJvcih5KDI4NSkpO2EuZmxhZ3M9YiYtNDA5N3w2NDtyZXR1cm4gYTtjYXNlIDU6cmV0dXJuIGhoKGEpLG51bGw7Y2FzZSAxMzpyZXR1cm4gSChQKSxiPWEuZmxhZ3MsYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDE5OnJldHVybiBIKFApLG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYSksbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIE1pKGEsYil7dHJ5e3ZhciBjPVwiXCIsZD1iO2RvIGMrPVFhKGQpLGQ9ZC5yZXR1cm47d2hpbGUoZCk7dmFyIGU9Y31jYXRjaChmKXtlPVwiXFxuRXJyb3IgZ2VuZXJhdGluZyBzdGFjazogXCIrZi5tZXNzYWdlK1wiXFxuXCIrZi5zdGFja31yZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazplfX1mdW5jdGlvbiBOaShhLGIpe3RyeXtjb25zb2xlLmVycm9yKGIudmFsdWUpfWNhdGNoKGMpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBjO30pfX12YXIgT2k9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gUGkoYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9MztjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7UWl8fChRaT0hMCxSaT1kKTtOaShhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIFNpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtOaShhLGIpO3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09VGk/VGk9bmV3IFNldChbdGhpc10pOlRpLmFkZCh0aGlzKSxOaShhLGIpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY312YXIgVWk9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQ7XG5mdW5jdGlvbiBWaShhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09YilpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYil0cnl7YihudWxsKX1jYXRjaChjKXtXaShhLGMpfWVsc2UgYi5jdXJyZW50PW51bGx9ZnVuY3Rpb24gWGkoYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpyZXR1cm47Y2FzZSAxOmlmKGIuZmxhZ3MmMjU2JiZudWxsIT09YSl7dmFyIGM9YS5tZW1vaXplZFByb3BzLGQ9YS5tZW1vaXplZFN0YXRlO2E9Yi5zdGF0ZU5vZGU7Yj1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/YzpsZyhiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifXJldHVybjtjYXNlIDM6Yi5mbGFncyYyNTYmJnFmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO3JldHVybjtjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIFlpKGEsYixjKXtzd2l0Y2goYy50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpiPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3tpZigzPT09KGEudGFnJjMpKXt2YXIgZD1hLmNyZWF0ZTthLmRlc3Ryb3k9ZCgpfWE9YS5uZXh0fXdoaWxlKGEhPT1iKX1iPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3t2YXIgZT1hO2Q9ZS5uZXh0O2U9ZS50YWc7MCE9PShlJjQpJiYwIT09KGUmMSkmJihaaShjLGEpLCRpKGMsYSkpO2E9ZH13aGlsZShhIT09Yil9cmV0dXJuO2Nhc2UgMTphPWMuc3RhdGVOb2RlO2MuZmxhZ3MmNCYmKG51bGw9PT1iP2EuY29tcG9uZW50RGlkTW91bnQoKTooZD1jLmVsZW1lbnRUeXBlPT09Yy50eXBlP2IubWVtb2l6ZWRQcm9wczpsZyhjLnR5cGUsYi5tZW1vaXplZFByb3BzKSxhLmNvbXBvbmVudERpZFVwZGF0ZShkLFxuYi5tZW1vaXplZFN0YXRlLGEuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpKSk7Yj1jLnVwZGF0ZVF1ZXVlO251bGwhPT1iJiZFZyhjLGIsYSk7cmV0dXJuO2Nhc2UgMzpiPWMudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2E9bnVsbDtpZihudWxsIT09Yy5jaGlsZClzd2l0Y2goYy5jaGlsZC50YWcpe2Nhc2UgNTphPWMuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTphPWMuY2hpbGQuc3RhdGVOb2RlfUVnKGMsYixhKX1yZXR1cm47Y2FzZSA1OmE9Yy5zdGF0ZU5vZGU7bnVsbD09PWImJmMuZmxhZ3MmNCYmbWYoYy50eXBlLGMubWVtb2l6ZWRQcm9wcykmJmEuZm9jdXMoKTtyZXR1cm47Y2FzZSA2OnJldHVybjtjYXNlIDQ6cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbD09PWMubWVtb2l6ZWRTdGF0ZSYmKGM9Yy5hbHRlcm5hdGUsbnVsbCE9PWMmJihjPWMubWVtb2l6ZWRTdGF0ZSxudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGwhPT1jJiZDYyhjKSkpKTtcbnJldHVybjtjYXNlIDE5OmNhc2UgMTc6Y2FzZSAyMDpjYXNlIDIxOmNhc2UgMjM6Y2FzZSAyNDpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBhaihhLGIpe2Zvcih2YXIgYz1hOzspe2lmKDU9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoYilkPWQuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuc2V0UHJvcGVydHk/ZC5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpkLmRpc3BsYXk9XCJub25lXCI7ZWxzZXtkPWMuc3RhdGVOb2RlO3ZhciBlPWMubWVtb2l6ZWRQcm9wcy5zdHlsZTtlPXZvaWQgMCE9PWUmJm51bGwhPT1lJiZlLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9lLmRpc3BsYXk6bnVsbDtkLnN0eWxlLmRpc3BsYXk9c2IoXCJkaXNwbGF5XCIsZSl9fWVsc2UgaWYoNj09PWMudGFnKWMuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iP1wiXCI6Yy5tZW1vaXplZFByb3BzO2Vsc2UgaWYoKDIzIT09Yy50YWcmJjI0IT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fGM9PT1hKSYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1cbmEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBiaihhLGIpe2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclVubW91bnQpdHJ5e01mLm9uQ29tbWl0RmliZXJVbm1vdW50KExmLGIpfWNhdGNoKGYpe31zd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOmE9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YSYmKGE9YS5sYXN0RWZmZWN0LG51bGwhPT1hKSl7dmFyIGM9YT1hLm5leHQ7ZG97dmFyIGQ9YyxlPWQuZGVzdHJveTtkPWQudGFnO2lmKHZvaWQgMCE9PWUpaWYoMCE9PShkJjQpKVppKGIsYyk7ZWxzZXtkPWI7dHJ5e2UoKX1jYXRjaChmKXtXaShkLGYpfX1jPWMubmV4dH13aGlsZShjIT09YSl9YnJlYWs7Y2FzZSAxOlZpKGIpO2E9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2EucHJvcHM9Yi5tZW1vaXplZFByb3BzLGEuc3RhdGU9Yi5tZW1vaXplZFN0YXRlLGEuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChmKXtXaShiLFxuZil9YnJlYWs7Y2FzZSA1OlZpKGIpO2JyZWFrO2Nhc2UgNDpjaihhLGIpfX1mdW5jdGlvbiBkaihhKXthLmFsdGVybmF0ZT1udWxsO2EuY2hpbGQ9bnVsbDthLmRlcGVuZGVuY2llcz1udWxsO2EuZmlyc3RFZmZlY3Q9bnVsbDthLmxhc3RFZmZlY3Q9bnVsbDthLm1lbW9pemVkUHJvcHM9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2EucmV0dXJuPW51bGw7YS51cGRhdGVRdWV1ZT1udWxsfWZ1bmN0aW9uIGVqKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24gZmooYSl7YTp7Zm9yKHZhciBiPWEucmV0dXJuO251bGwhPT1iOyl7aWYoZWooYikpYnJlYWsgYTtiPWIucmV0dXJufXRocm93IEVycm9yKHkoMTYwKSk7fXZhciBjPWI7Yj1jLnN0YXRlTm9kZTtzd2l0Y2goYy50YWcpe2Nhc2UgNTp2YXIgZD0hMTticmVhaztjYXNlIDM6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztjYXNlIDQ6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMTYxKSk7fWMuZmxhZ3MmMTYmJihwYihiLFwiXCIpLGMuZmxhZ3MmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxlaihjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NSE9PWMudGFnJiY2IT09Yy50YWcmJjE4IT09Yy50YWc7KXtpZihjLmZsYWdzJjIpY29udGludWUgYjtpZihudWxsPT09XG5jLmNoaWxkfHw0PT09Yy50YWcpY29udGludWUgYjtlbHNlIGMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkfWlmKCEoYy5mbGFncyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1kP2dqKGEsYyxiKTpoaihhLGMsYil9XG5mdW5jdGlvbiBnaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj84PT09Yy5ub2RlVHlwZT9jLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsYik6Yy5pbnNlcnRCZWZvcmUoYSxiKTooOD09PWMubm9kZVR5cGU/KGI9Yy5wYXJlbnROb2RlLGIuaW5zZXJ0QmVmb3JlKGEsYykpOihiPWMsYi5hcHBlbmRDaGlsZChhKSksYz1jLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWMmJnZvaWQgMCE9PWN8fG51bGwhPT1iLm9uY2xpY2t8fChiLm9uY2xpY2s9amYpKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoZ2ooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylnaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBoaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj9jLmluc2VydEJlZm9yZShhLGIpOmMuYXBwZW5kQ2hpbGQoYSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGhqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspaGooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gY2ooYSxiKXtmb3IodmFyIGM9YixkPSExLGUsZjs7KXtpZighZCl7ZD1jLnJldHVybjthOmZvcig7Oyl7aWYobnVsbD09PWQpdGhyb3cgRXJyb3IoeSgxNjApKTtlPWQuc3RhdGVOb2RlO3N3aXRjaChkLnRhZyl7Y2FzZSA1OmY9ITE7YnJlYWsgYTtjYXNlIDM6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhO2Nhc2UgNDplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGF9ZD1kLnJldHVybn1kPSEwfWlmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKXthOmZvcih2YXIgZz1hLGg9YyxrPWg7OylpZihiaihnLGspLG51bGwhPT1rLmNoaWxkJiY0IT09ay50YWcpay5jaGlsZC5yZXR1cm49ayxrPWsuY2hpbGQ7ZWxzZXtpZihrPT09aClicmVhayBhO2Zvcig7bnVsbD09PWsuc2libGluZzspe2lmKG51bGw9PT1rLnJldHVybnx8ay5yZXR1cm49PT1oKWJyZWFrIGE7az1rLnJldHVybn1rLnNpYmxpbmcucmV0dXJuPWsucmV0dXJuO2s9ay5zaWJsaW5nfWY/KGc9ZSxoPWMuc3RhdGVOb2RlLFxuOD09PWcubm9kZVR5cGU/Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGgpOmcucmVtb3ZlQ2hpbGQoaCkpOmUucmVtb3ZlQ2hpbGQoYy5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWMudGFnKXtpZihudWxsIT09Yy5jaGlsZCl7ZT1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Y9ITA7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYoYmooYSxjKSxudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm47ND09PWMudGFnJiYoZD0hMSl9Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBpaihhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6dmFyIGM9Yi51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkbyAzPT09KGQudGFnJjMpJiYoYT1kLmRlc3Ryb3ksZC5kZXN0cm95PXZvaWQgMCx2b2lkIDAhPT1hJiZhKCkpLGQ9ZC5uZXh0O3doaWxlKGQhPT1jKX1yZXR1cm47Y2FzZSAxOnJldHVybjtjYXNlIDU6Yz1iLnN0YXRlTm9kZTtpZihudWxsIT1jKXtkPWIubWVtb2l6ZWRQcm9wczt2YXIgZT1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6ZDthPWIudHlwZTt2YXIgZj1iLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9bnVsbDtpZihudWxsIT09Zil7Y1t4Zl09ZDtcImlucHV0XCI9PT1hJiZcInJhZGlvXCI9PT1kLnR5cGUmJm51bGwhPWQubmFtZSYmJGEoYyxkKTt3YihhLGUpO2I9d2IoYSxkKTtmb3IoZT0wO2U8Zi5sZW5ndGg7ZSs9XG4yKXt2YXIgZz1mW2VdLGg9ZltlKzFdO1wic3R5bGVcIj09PWc/dGIoYyxoKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1nP29iKGMsaCk6XCJjaGlsZHJlblwiPT09Zz9wYihjLGgpOnFhKGMsZyxoLGIpfXN3aXRjaChhKXtjYXNlIFwiaW5wdXRcIjphYihjLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGMsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmE9Yy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlLGMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWQubXVsdGlwbGUsZj1kLnZhbHVlLG51bGwhPWY/ZmIoYywhIWQubXVsdGlwbGUsZiwhMSk6YSE9PSEhZC5tdWx0aXBsZSYmKG51bGwhPWQuZGVmYXVsdFZhbHVlP2ZiKGMsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTpmYihjLCEhZC5tdWx0aXBsZSxkLm11bHRpcGxlP1tdOlwiXCIsITEpKX19fXJldHVybjtjYXNlIDY6aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTYyKSk7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPVxuYi5tZW1vaXplZFByb3BzO3JldHVybjtjYXNlIDM6Yz1iLnN0YXRlTm9kZTtjLmh5ZHJhdGUmJihjLmh5ZHJhdGU9ITEsQ2MoYy5jb250YWluZXJJbmZvKSk7cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSYmKGpqPU8oKSxhaihiLmNoaWxkLCEwKSk7a2ooYik7cmV0dXJuO2Nhc2UgMTk6a2ooYik7cmV0dXJuO2Nhc2UgMTc6cmV0dXJuO2Nhc2UgMjM6Y2FzZSAyNDphaihiLG51bGwhPT1iLm1lbW9pemVkU3RhdGUpO3JldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31mdW5jdGlvbiBraihhKXt2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbD09PWMmJihjPWEuc3RhdGVOb2RlPW5ldyBVaSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWxqLmJpbmQobnVsbCxhLGIpO2MuaGFzKGIpfHwoYy5hZGQoYiksYi50aGVuKGQsZCkpfSl9fVxuZnVuY3Rpb24gbWooYSxiKXtyZXR1cm4gbnVsbCE9PWEmJihhPWEubWVtb2l6ZWRTdGF0ZSxudWxsPT09YXx8bnVsbCE9PWEuZGVoeWRyYXRlZCk/KGI9Yi5tZW1vaXplZFN0YXRlLG51bGwhPT1iJiZudWxsPT09Yi5kZWh5ZHJhdGVkKTohMX12YXIgbmo9TWF0aC5jZWlsLG9qPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIscGo9cmEuUmVhY3RDdXJyZW50T3duZXIsWD0wLFU9bnVsbCxZPW51bGwsVz0wLHFqPTAscmo9QmYoMCksVj0wLHNqPW51bGwsdGo9MCxEZz0wLEhpPTAsdWo9MCx2aj1udWxsLGpqPTAsSmk9SW5maW5pdHk7ZnVuY3Rpb24gd2ooKXtKaT1PKCkrNTAwfXZhciBaPW51bGwsUWk9ITEsUmk9bnVsbCxUaT1udWxsLHhqPSExLHlqPW51bGwsemo9OTAsQWo9W10sQmo9W10sQ2o9bnVsbCxEaj0wLEVqPW51bGwsRmo9LTEsR2o9MCxIaj0wLElqPW51bGwsSmo9ITE7ZnVuY3Rpb24gSGcoKXtyZXR1cm4gMCE9PShYJjQ4KT9PKCk6LTEhPT1Gaj9GajpGaj1PKCl9XG5mdW5jdGlvbiBJZyhhKXthPWEubW9kZTtpZigwPT09KGEmMikpcmV0dXJuIDE7aWYoMD09PShhJjQpKXJldHVybiA5OT09PWVnKCk/MToyOzA9PT1HaiYmKEdqPXRqKTtpZigwIT09a2cudHJhbnNpdGlvbil7MCE9PUhqJiYoSGo9bnVsbCE9PXZqP3ZqLnBlbmRpbmdMYW5lczowKTthPUdqO3ZhciBiPTQxODYxMTImfkhqO2ImPS1iOzA9PT1iJiYoYT00MTg2MTEyJn5hLGI9YSYtYSwwPT09YiYmKGI9ODE5MikpO3JldHVybiBifWE9ZWcoKTswIT09KFgmNCkmJjk4PT09YT9hPVhjKDEyLEdqKTooYT1TYyhhKSxhPVhjKGEsR2opKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpnKGEsYixjKXtpZig1MDxEail0aHJvdyBEaj0wLEVqPW51bGwsRXJyb3IoeSgxODUpKTthPUtqKGEsYik7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7JGMoYSxiLGMpO2E9PT1VJiYoSGl8PWIsND09PVYmJklpKGEsVykpO3ZhciBkPWVnKCk7MT09PWI/MCE9PShYJjgpJiYwPT09KFgmNDgpP0xqKGEpOihNaihhLGMpLDA9PT1YJiYod2ooKSxpZygpKSk6KDA9PT0oWCY0KXx8OTghPT1kJiY5OSE9PWR8fChudWxsPT09Q2o/Q2o9bmV3IFNldChbYV0pOkNqLmFkZChhKSksTWooYSxjKSk7dmo9YX1mdW5jdGlvbiBLaihhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtjPWE7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWE7KWEuY2hpbGRMYW5lc3w9YixjPWEuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKSxjPWEsYT1hLnJldHVybjtyZXR1cm4gMz09PWMudGFnP2Muc3RhdGVOb2RlOm51bGx9XG5mdW5jdGlvbiBNaihhLGIpe2Zvcih2YXIgYz1hLmNhbGxiYWNrTm9kZSxkPWEuc3VzcGVuZGVkTGFuZXMsZT1hLnBpbmdlZExhbmVzLGY9YS5leHBpcmF0aW9uVGltZXMsZz1hLnBlbmRpbmdMYW5lczswPGc7KXt2YXIgaD0zMS1WYyhnKSxrPTE8PGgsbD1mW2hdO2lmKC0xPT09bCl7aWYoMD09PShrJmQpfHwwIT09KGsmZSkpe2w9YjtSYyhrKTt2YXIgbj1GO2ZbaF09MTA8PW4/bCsyNTA6Njw9bj9sKzVFMzotMX19ZWxzZSBsPD1iJiYoYS5leHBpcmVkTGFuZXN8PWspO2cmPX5rfWQ9VWMoYSxhPT09VT9XOjApO2I9RjtpZigwPT09ZCludWxsIT09YyYmKGMhPT1aZiYmUGYoYyksYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrUHJpb3JpdHk9MCk7ZWxzZXtpZihudWxsIT09Yyl7aWYoYS5jYWxsYmFja1ByaW9yaXR5PT09YilyZXR1cm47YyE9PVpmJiZQZihjKX0xNT09PWI/KGM9TGouYmluZChudWxsLGEpLG51bGw9PT1hZz8oYWc9W2NdLGJnPU9mKFVmLGpnKSk6YWcucHVzaChjKSxcbmM9WmYpOjE0PT09Yj9jPWhnKDk5LExqLmJpbmQobnVsbCxhKSk6KGM9VGMoYiksYz1oZyhjLE5qLmJpbmQobnVsbCxhKSkpO2EuY2FsbGJhY2tQcmlvcml0eT1iO2EuY2FsbGJhY2tOb2RlPWN9fVxuZnVuY3Rpb24gTmooYSl7Rmo9LTE7SGo9R2o9MDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGI9YS5jYWxsYmFja05vZGU7aWYoT2ooKSYmYS5jYWxsYmFja05vZGUhPT1iKXJldHVybiBudWxsO3ZhciBjPVVjKGEsYT09PVU/VzowKTtpZigwPT09YylyZXR1cm4gbnVsbDt2YXIgZD1jO3ZhciBlPVg7WHw9MTY7dmFyIGY9UGooKTtpZihVIT09YXx8VyE9PWQpd2ooKSxRaihhLGQpO2RvIHRyeXtSaigpO2JyZWFrfWNhdGNoKGgpe1NqKGEsaCl9d2hpbGUoMSk7cWcoKTtvai5jdXJyZW50PWY7WD1lO251bGwhPT1ZP2Q9MDooVT1udWxsLFc9MCxkPVYpO2lmKDAhPT0odGomSGkpKVFqKGEsMCk7ZWxzZSBpZigwIT09ZCl7Mj09PWQmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYz1XYyhhKSwwIT09YyYmKGQ9VGooYSxjKSkpO2lmKDE9PT1kKXRocm93IGI9c2osUWooYSwwKSxJaShhLGMpLE1qKGEsTygpKSxiO2EuZmluaXNoZWRXb3JrPVxuYS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9Yztzd2l0Y2goZCl7Y2FzZSAwOmNhc2UgMTp0aHJvdyBFcnJvcih5KDM0NSkpO2Nhc2UgMjpVaihhKTticmVhaztjYXNlIDM6SWkoYSxjKTtpZigoYyY2MjkxNDU2MCk9PT1jJiYoZD1qais1MDAtTygpLDEwPGQpKXtpZigwIT09VWMoYSwwKSlicmVhaztlPWEuc3VzcGVuZGVkTGFuZXM7aWYoKGUmYykhPT1jKXtIZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmZTticmVha31hLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGQpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNDpJaShhLGMpO2lmKChjJjQxODYxMTIpPT09YylicmVhaztkPWEuZXZlbnRUaW1lcztmb3IoZT0tMTswPGM7KXt2YXIgZz0zMS1WYyhjKTtmPTE8PGc7Zz1kW2ddO2c+ZSYmKGU9Zyk7YyY9fmZ9Yz1lO2M9TygpLWM7Yz0oMTIwPmM/MTIwOjQ4MD5jPzQ4MDoxMDgwPmM/MTA4MDoxOTIwPmM/MTkyMDozRTM+Yz8zRTM6NDMyMD5cbmM/NDMyMDoxOTYwKm5qKGMvMTk2MCkpLWM7aWYoMTA8Yyl7YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxjKTticmVha31VaihhKTticmVhaztjYXNlIDU6VWooYSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMyOSkpO319TWooYSxPKCkpO3JldHVybiBhLmNhbGxiYWNrTm9kZT09PWI/TmouYmluZChudWxsLGEpOm51bGx9ZnVuY3Rpb24gSWkoYSxiKXtiJj1+dWo7YiY9fkhpO2Euc3VzcGVuZGVkTGFuZXN8PWI7YS5waW5nZWRMYW5lcyY9fmI7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxiOyl7dmFyIGM9MzEtVmMoYiksZD0xPDxjO2FbY109LTE7YiY9fmR9fVxuZnVuY3Rpb24gTGooYSl7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO09qKCk7aWYoYT09PVUmJjAhPT0oYS5leHBpcmVkTGFuZXMmVykpe3ZhciBiPVc7dmFyIGM9VGooYSxiKTswIT09KHRqJkhpKSYmKGI9VWMoYSxiKSxjPVRqKGEsYikpfWVsc2UgYj1VYyhhLDApLGM9VGooYSxiKTswIT09YS50YWcmJjI9PT1jJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGI9V2MoYSksMCE9PWImJihjPVRqKGEsYikpKTtpZigxPT09Yyl0aHJvdyBjPXNqLFFqKGEsMCksSWkoYSxiKSxNaihhLE8oKSksYzthLmZpbmlzaGVkV29yaz1hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1iO1VqKGEpO01qKGEsTygpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFZqKCl7aWYobnVsbCE9PUNqKXt2YXIgYT1DajtDaj1udWxsO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmV4cGlyZWRMYW5lc3w9MjQmYS5wZW5kaW5nTGFuZXM7TWooYSxPKCkpfSl9aWcoKX1mdW5jdGlvbiBXaihhLGIpe3ZhciBjPVg7WHw9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBYaihhLGIpe3ZhciBjPVg7WCY9LTI7WHw9ODt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBuaShhLGIpe0kocmoscWopO3FqfD1iO3RqfD1ifWZ1bmN0aW9uIEtpKCl7cWo9cmouY3VycmVudDtIKHJqKX1cbmZ1bmN0aW9uIFFqKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLHBmKGMpKTtpZihudWxsIT09WSlmb3IoYz1ZLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7c3dpdGNoKGQudGFnKXtjYXNlIDE6ZD1kLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWQmJnZvaWQgMCE9PWQmJkdmKCk7YnJlYWs7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7YnJlYWs7Y2FzZSA1OmhoKGQpO2JyZWFrO2Nhc2UgNDpmaCgpO2JyZWFrO2Nhc2UgMTM6SChQKTticmVhaztjYXNlIDE5OkgoUCk7YnJlYWs7Y2FzZSAxMDpyZyhkKTticmVhaztjYXNlIDIzOmNhc2UgMjQ6S2koKX1jPWMucmV0dXJufVU9YTtZPVRnKGEuY3VycmVudCxudWxsKTtXPXFqPXRqPWI7Vj0wO3NqPW51bGw7dWo9SGk9RGc9MH1cbmZ1bmN0aW9uIFNqKGEsYil7ZG97dmFyIGM9WTt0cnl7cWcoKTt2aC5jdXJyZW50PUdoO2lmKHloKXtmb3IodmFyIGQ9Ui5tZW1vaXplZFN0YXRlO251bGwhPT1kOyl7dmFyIGU9ZC5xdWV1ZTtudWxsIT09ZSYmKGUucGVuZGluZz1udWxsKTtkPWQubmV4dH15aD0hMX14aD0wO1Q9Uz1SPW51bGw7emg9ITE7cGouY3VycmVudD1udWxsO2lmKG51bGw9PT1jfHxudWxsPT09Yy5yZXR1cm4pe1Y9MTtzaj1iO1k9bnVsbDticmVha31hOnt2YXIgZj1hLGc9Yy5yZXR1cm4saD1jLGs9YjtiPVc7aC5mbGFnc3w9MjA0ODtoLmZpcnN0RWZmZWN0PWgubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1rJiZcIm9iamVjdFwiPT09dHlwZW9mIGsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLnRoZW4pe3ZhciBsPWs7aWYoMD09PShoLm1vZGUmMikpe3ZhciBuPWguYWx0ZXJuYXRlO24/KGgudXBkYXRlUXVldWU9bi51cGRhdGVRdWV1ZSxoLm1lbW9pemVkU3RhdGU9bi5tZW1vaXplZFN0YXRlLGgubGFuZXM9bi5sYW5lcyk6XG4oaC51cGRhdGVRdWV1ZT1udWxsLGgubWVtb2l6ZWRTdGF0ZT1udWxsKX12YXIgQT0wIT09KFAuY3VycmVudCYxKSxwPWc7ZG97dmFyIEM7aWYoQz0xMz09PXAudGFnKXt2YXIgeD1wLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PXgpQz1udWxsIT09eC5kZWh5ZHJhdGVkPyEwOiExO2Vsc2V7dmFyIHc9cC5tZW1vaXplZFByb3BzO0M9dm9pZCAwPT09dy5mYWxsYmFjaz8hMTohMCE9PXcudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2s/ITA6QT8hMTohMH19aWYoQyl7dmFyIHo9cC51cGRhdGVRdWV1ZTtpZihudWxsPT09eil7dmFyIHU9bmV3IFNldDt1LmFkZChsKTtwLnVwZGF0ZVF1ZXVlPXV9ZWxzZSB6LmFkZChsKTtpZigwPT09KHAubW9kZSYyKSl7cC5mbGFnc3w9NjQ7aC5mbGFnc3w9MTYzODQ7aC5mbGFncyY9LTI5ODE7aWYoMT09PWgudGFnKWlmKG51bGw9PT1oLmFsdGVybmF0ZSloLnRhZz0xNztlbHNle3ZhciB0PXpnKC0xLDEpO3QudGFnPTI7QWcoaCx0KX1oLmxhbmVzfD0xO2JyZWFrIGF9az1cbnZvaWQgMDtoPWI7dmFyIHE9Zi5waW5nQ2FjaGU7bnVsbD09PXE/KHE9Zi5waW5nQ2FjaGU9bmV3IE9pLGs9bmV3IFNldCxxLnNldChsLGspKTooaz1xLmdldChsKSx2b2lkIDA9PT1rJiYoaz1uZXcgU2V0LHEuc2V0KGwsaykpKTtpZighay5oYXMoaCkpe2suYWRkKGgpO3ZhciB2PVlqLmJpbmQobnVsbCxmLGwsaCk7bC50aGVuKHYsdil9cC5mbGFnc3w9NDA5NjtwLmxhbmVzPWI7YnJlYWsgYX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKTtrPUVycm9yKChSYShoLnR5cGUpfHxcIkEgUmVhY3QgY29tcG9uZW50XCIpK1wiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIpfTUhPT1WJiYoVj0yKTtrPU1pKGssaCk7cD1cbmc7ZG97c3dpdGNoKHAudGFnKXtjYXNlIDM6Zj1rO3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgSj1QaShwLGYsYik7QmcocCxKKTticmVhayBhO2Nhc2UgMTpmPWs7dmFyIEs9cC50eXBlLFE9cC5zdGF0ZU5vZGU7aWYoMD09PShwLmZsYWdzJjY0KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBLLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PVEmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBRLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKFEpKSkpe3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgTD1TaShwLGYsYik7QmcocCxMKTticmVhayBhfX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKX1aaihjKX1jYXRjaCh2YSl7Yj12YTtZPT09YyYmbnVsbCE9PWMmJihZPWM9Yy5yZXR1cm4pO2NvbnRpbnVlfWJyZWFrfXdoaWxlKDEpfVxuZnVuY3Rpb24gUGooKXt2YXIgYT1vai5jdXJyZW50O29qLmN1cnJlbnQ9R2g7cmV0dXJuIG51bGw9PT1hP0doOmF9ZnVuY3Rpb24gVGooYSxiKXt2YXIgYz1YO1h8PTE2O3ZhciBkPVBqKCk7VT09PWEmJlc9PT1ifHxRaihhLGIpO2RvIHRyeXthaygpO2JyZWFrfWNhdGNoKGUpe1NqKGEsZSl9d2hpbGUoMSk7cWcoKTtYPWM7b2ouY3VycmVudD1kO2lmKG51bGwhPT1ZKXRocm93IEVycm9yKHkoMjYxKSk7VT1udWxsO1c9MDtyZXR1cm4gVn1mdW5jdGlvbiBhaygpe2Zvcig7bnVsbCE9PVk7KWJrKFkpfWZ1bmN0aW9uIFJqKCl7Zm9yKDtudWxsIT09WSYmIVFmKCk7KWJrKFkpfWZ1bmN0aW9uIGJrKGEpe3ZhciBiPWNrKGEuYWx0ZXJuYXRlLGEscWopO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09Yj9aaihhKTpZPWI7cGouY3VycmVudD1udWxsfVxuZnVuY3Rpb24gWmooYSl7dmFyIGI9YTtkb3t2YXIgYz1iLmFsdGVybmF0ZTthPWIucmV0dXJuO2lmKDA9PT0oYi5mbGFncyYyMDQ4KSl7Yz1HaShjLGIscWopO2lmKG51bGwhPT1jKXtZPWM7cmV0dXJufWM9YjtpZigyNCE9PWMudGFnJiYyMyE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHwwIT09KHFqJjEwNzM3NDE4MjQpfHwwPT09KGMubW9kZSY0KSl7Zm9yKHZhciBkPTAsZT1jLmNoaWxkO251bGwhPT1lOylkfD1lLmxhbmVzfGUuY2hpbGRMYW5lcyxlPWUuc2libGluZztjLmNoaWxkTGFuZXM9ZH1udWxsIT09YSYmMD09PShhLmZsYWdzJjIwNDgpJiYobnVsbD09PWEuZmlyc3RFZmZlY3QmJihhLmZpcnN0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLG51bGwhPT1iLmxhc3RFZmZlY3QmJihudWxsIT09YS5sYXN0RWZmZWN0JiYoYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9Yi5maXJzdEVmZmVjdCksYS5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCksMTxiLmZsYWdzJiYobnVsbCE9PVxuYS5sYXN0RWZmZWN0P2EubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWI6YS5maXJzdEVmZmVjdD1iLGEubGFzdEVmZmVjdD1iKSl9ZWxzZXtjPUxpKGIpO2lmKG51bGwhPT1jKXtjLmZsYWdzJj0yMDQ3O1k9YztyZXR1cm59bnVsbCE9PWEmJihhLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1udWxsLGEuZmxhZ3N8PTIwNDgpfWI9Yi5zaWJsaW5nO2lmKG51bGwhPT1iKXtZPWI7cmV0dXJufVk9Yj1hfXdoaWxlKG51bGwhPT1iKTswPT09ViYmKFY9NSl9ZnVuY3Rpb24gVWooYSl7dmFyIGI9ZWcoKTtnZyg5OSxkay5iaW5kKG51bGwsYSxiKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkayhhLGIpe2RvIE9qKCk7d2hpbGUobnVsbCE9PXlqKTtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGM9YS5maW5pc2hlZFdvcms7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHkoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDt2YXIgZD1jLmxhbmVzfGMuY2hpbGRMYW5lcyxlPWQsZj1hLnBlbmRpbmdMYW5lcyZ+ZTthLnBlbmRpbmdMYW5lcz1lO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWU7YS5tdXRhYmxlUmVhZExhbmVzJj1lO2EuZW50YW5nbGVkTGFuZXMmPWU7ZT1hLmVudGFuZ2xlbWVudHM7Zm9yKHZhciBnPWEuZXZlbnRUaW1lcyxoPWEuZXhwaXJhdGlvblRpbWVzOzA8Zjspe3ZhciBrPTMxLVZjKGYpLGw9MTw8aztlW2tdPTA7Z1trXT0tMTtoW2tdPS0xO2YmPX5sfW51bGwhPT1cbkNqJiYwPT09KGQmMjQpJiZDai5oYXMoYSkmJkNqLmRlbGV0ZShhKTthPT09VSYmKFk9VT1udWxsLFc9MCk7MTxjLmZsYWdzP251bGwhPT1jLmxhc3RFZmZlY3Q/KGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsZD1jLmZpcnN0RWZmZWN0KTpkPWM6ZD1jLmZpcnN0RWZmZWN0O2lmKG51bGwhPT1kKXtlPVg7WHw9MzI7cGouY3VycmVudD1udWxsO2tmPWZkO2c9TmUoKTtpZihPZShnKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gZyloPXtzdGFydDpnLnNlbGVjdGlvblN0YXJ0LGVuZDpnLnNlbGVjdGlvbkVuZH07ZWxzZSBhOmlmKGg9KGg9Zy5vd25lckRvY3VtZW50KSYmaC5kZWZhdWx0Vmlld3x8d2luZG93LChsPWguZ2V0U2VsZWN0aW9uJiZoLmdldFNlbGVjdGlvbigpKSYmMCE9PWwucmFuZ2VDb3VudCl7aD1sLmFuY2hvck5vZGU7Zj1sLmFuY2hvck9mZnNldDtrPWwuZm9jdXNOb2RlO2w9bC5mb2N1c09mZnNldDt0cnl7aC5ub2RlVHlwZSxrLm5vZGVUeXBlfWNhdGNoKHZhKXtoPW51bGw7XG5icmVhayBhfXZhciBuPTAsQT0tMSxwPS0xLEM9MCx4PTAsdz1nLHo9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB1Ozspe3chPT1ofHwwIT09ZiYmMyE9PXcubm9kZVR5cGV8fChBPW4rZik7dyE9PWt8fDAhPT1sJiYzIT09dy5ub2RlVHlwZXx8KHA9bitsKTszPT09dy5ub2RlVHlwZSYmKG4rPXcubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PSh1PXcuZmlyc3RDaGlsZCkpYnJlYWs7ej13O3c9dX1mb3IoOzspe2lmKHc9PT1nKWJyZWFrIGI7ej09PWgmJisrQz09PWYmJihBPW4pO3o9PT1rJiYrK3g9PT1sJiYocD1uKTtpZihudWxsIT09KHU9dy5uZXh0U2libGluZykpYnJlYWs7dz16O3o9dy5wYXJlbnROb2RlfXc9dX1oPS0xPT09QXx8LTE9PT1wP251bGw6e3N0YXJ0OkEsZW5kOnB9fWVsc2UgaD1udWxsO2g9aHx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgaD1udWxsO2xmPXtmb2N1c2VkRWxlbTpnLHNlbGVjdGlvblJhbmdlOmh9O2ZkPSExO0lqPW51bGw7Smo9ITE7Wj1kO2RvIHRyeXtlaygpfWNhdGNoKHZhKXtpZihudWxsPT09XG5aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO0lqPW51bGw7Wj1kO2RvIHRyeXtmb3IoZz1hO251bGwhPT1aOyl7dmFyIHQ9Wi5mbGFnczt0JjE2JiZwYihaLnN0YXRlTm9kZSxcIlwiKTtpZih0JjEyOCl7dmFyIHE9Wi5hbHRlcm5hdGU7aWYobnVsbCE9PXEpe3ZhciB2PXEucmVmO251bGwhPT12JiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHY/dihudWxsKTp2LmN1cnJlbnQ9bnVsbCl9fXN3aXRjaCh0JjEwMzgpe2Nhc2UgMjpmaihaKTtaLmZsYWdzJj0tMzticmVhaztjYXNlIDY6ZmooWik7Wi5mbGFncyY9LTM7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSAxMDI0OlouZmxhZ3MmPS0xMDI1O2JyZWFrO2Nhc2UgMTAyODpaLmZsYWdzJj0tMTAyNTtpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDQ6aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA4Omg9WjtjaihnLGgpO3ZhciBKPWguYWx0ZXJuYXRlO2RqKGgpO251bGwhPT1cbkomJmRqKEopfVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7dj1sZjtxPU5lKCk7dD12LmZvY3VzZWRFbGVtO2c9di5zZWxlY3Rpb25SYW5nZTtpZihxIT09dCYmdCYmdC5vd25lckRvY3VtZW50JiZNZSh0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHQpKXtudWxsIT09ZyYmT2UodCkmJihxPWcuc3RhcnQsdj1nLmVuZCx2b2lkIDA9PT12JiYodj1xKSxcInNlbGVjdGlvblN0YXJ0XCJpbiB0Pyh0LnNlbGVjdGlvblN0YXJ0PXEsdC5zZWxlY3Rpb25FbmQ9TWF0aC5taW4odix0LnZhbHVlLmxlbmd0aCkpOih2PShxPXQub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZxLmRlZmF1bHRWaWV3fHx3aW5kb3csdi5nZXRTZWxlY3Rpb24mJih2PXYuZ2V0U2VsZWN0aW9uKCksaD10LnRleHRDb250ZW50Lmxlbmd0aCxKPU1hdGgubWluKGcuc3RhcnQsaCksZz12b2lkIDA9PT1cbmcuZW5kP0o6TWF0aC5taW4oZy5lbmQsaCksIXYuZXh0ZW5kJiZKPmcmJihoPWcsZz1KLEo9aCksaD1MZSh0LEopLGY9TGUodCxnKSxoJiZmJiYoMSE9PXYucmFuZ2VDb3VudHx8di5hbmNob3JOb2RlIT09aC5ub2RlfHx2LmFuY2hvck9mZnNldCE9PWgub2Zmc2V0fHx2LmZvY3VzTm9kZSE9PWYubm9kZXx8di5mb2N1c09mZnNldCE9PWYub2Zmc2V0KSYmKHE9cS5jcmVhdGVSYW5nZSgpLHEuc2V0U3RhcnQoaC5ub2RlLGgub2Zmc2V0KSx2LnJlbW92ZUFsbFJhbmdlcygpLEo+Zz8odi5hZGRSYW5nZShxKSx2LmV4dGVuZChmLm5vZGUsZi5vZmZzZXQpKToocS5zZXRFbmQoZi5ub2RlLGYub2Zmc2V0KSx2LmFkZFJhbmdlKHEpKSkpKSk7cT1bXTtmb3Iodj10O3Y9di5wYXJlbnROb2RlOykxPT09di5ub2RlVHlwZSYmcS5wdXNoKHtlbGVtZW50OnYsbGVmdDp2LnNjcm9sbExlZnQsdG9wOnYuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIHQuZm9jdXMmJnQuZm9jdXMoKTtmb3IodD1cbjA7dDxxLmxlbmd0aDt0Kyspdj1xW3RdLHYuZWxlbWVudC5zY3JvbGxMZWZ0PXYubGVmdCx2LmVsZW1lbnQuc2Nyb2xsVG9wPXYudG9wfWZkPSEha2Y7bGY9a2Y9bnVsbDthLmN1cnJlbnQ9YztaPWQ7ZG8gdHJ5e2Zvcih0PWE7bnVsbCE9PVo7KXt2YXIgSz1aLmZsYWdzO0smMzYmJllpKHQsWi5hbHRlcm5hdGUsWik7aWYoSyYxMjgpe3E9dm9pZCAwO3ZhciBRPVoucmVmO2lmKG51bGwhPT1RKXt2YXIgTD1aLnN0YXRlTm9kZTtzd2l0Y2goWi50YWcpe2Nhc2UgNTpxPUw7YnJlYWs7ZGVmYXVsdDpxPUx9XCJmdW5jdGlvblwiPT09dHlwZW9mIFE/UShxKTpRLmN1cnJlbnQ9cX19Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtaPW51bGw7JGYoKTtYPWV9ZWxzZSBhLmN1cnJlbnQ9YztpZih4ail4aj0hMSx5aj1hLHpqPWI7ZWxzZSBmb3IoWj1kO251bGwhPT1aOyliPVxuWi5uZXh0RWZmZWN0LFoubmV4dEVmZmVjdD1udWxsLFouZmxhZ3MmOCYmKEs9WixLLnNpYmxpbmc9bnVsbCxLLnN0YXRlTm9kZT1udWxsKSxaPWI7ZD1hLnBlbmRpbmdMYW5lczswPT09ZCYmKFRpPW51bGwpOzE9PT1kP2E9PT1Faj9EaisrOihEaj0wLEVqPWEpOkRqPTA7Yz1jLnN0YXRlTm9kZTtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJSb290KXRyeXtNZi5vbkNvbW1pdEZpYmVyUm9vdChMZixjLHZvaWQgMCw2ND09PShjLmN1cnJlbnQuZmxhZ3MmNjQpKX1jYXRjaCh2YSl7fU1qKGEsTygpKTtpZihRaSl0aHJvdyBRaT0hMSxhPVJpLFJpPW51bGwsYTtpZigwIT09KFgmOCkpcmV0dXJuIG51bGw7aWcoKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGVrKCl7Zm9yKDtudWxsIT09Wjspe3ZhciBhPVouYWx0ZXJuYXRlO0pqfHxudWxsPT09SWp8fCgwIT09KFouZmxhZ3MmOCk/ZGMoWixJaikmJihKaj0hMCk6MTM9PT1aLnRhZyYmbWooYSxaKSYmZGMoWixJaikmJihKaj0hMCkpO3ZhciBiPVouZmxhZ3M7MCE9PShiJjI1NikmJlhpKGEsWik7MD09PShiJjUxMil8fHhqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpO1o9Wi5uZXh0RWZmZWN0fX1mdW5jdGlvbiBPaigpe2lmKDkwIT09emope3ZhciBhPTk3PHpqPzk3OnpqO3pqPTkwO3JldHVybiBnZyhhLGZrKX1yZXR1cm4hMX1mdW5jdGlvbiAkaShhLGIpe0FqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1mdW5jdGlvbiBaaShhLGIpe0JqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1cbmZ1bmN0aW9uIGZrKCl7aWYobnVsbD09PXlqKXJldHVybiExO3ZhciBhPXlqO3lqPW51bGw7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMzMSkpO3ZhciBiPVg7WHw9MzI7dmFyIGM9Qmo7Qmo9W107Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKz0yKXt2YXIgZT1jW2RdLGY9Y1tkKzFdLGc9ZS5kZXN0cm95O2UuZGVzdHJveT12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcpdHJ5e2coKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWM9QWo7QWo9W107Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrPTIpe2U9Y1tkXTtmPWNbZCsxXTt0cnl7dmFyIGg9ZS5jcmVhdGU7ZS5kZXN0cm95PWgoKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWZvcihoPWEuY3VycmVudC5maXJzdEVmZmVjdDtudWxsIT09aDspYT1oLm5leHRFZmZlY3QsaC5uZXh0RWZmZWN0PW51bGwsaC5mbGFncyY4JiYoaC5zaWJsaW5nPVxubnVsbCxoLnN0YXRlTm9kZT1udWxsKSxoPWE7WD1iO2lnKCk7cmV0dXJuITB9ZnVuY3Rpb24gZ2soYSxiLGMpe2I9TWkoYyxiKTtiPVBpKGEsYiwxKTtBZyhhLGIpO2I9SGcoKTthPUtqKGEsMSk7bnVsbCE9PWEmJigkYyhhLDEsYiksTWooYSxiKSl9XG5mdW5jdGlvbiBXaShhLGIpe2lmKDM9PT1hLnRhZylnayhhLGEsYik7ZWxzZSBmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtpZigzPT09Yy50YWcpe2drKGMsYSxiKTticmVha31lbHNlIGlmKDE9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl7YT1NaShiLGEpO3ZhciBlPVNpKGMsYSwxKTtBZyhjLGUpO2U9SGcoKTtjPUtqKGMsMSk7aWYobnVsbCE9PWMpJGMoYywxLGUpLE1qKGMsZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpdHJ5e2QuY29tcG9uZW50RGlkQ2F0Y2goYixhKX1jYXRjaChmKXt9YnJlYWt9fWM9Yy5yZXR1cm59fVxuZnVuY3Rpb24gWWooYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtiPUhnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZjO1U9PT1hJiYoVyZjKT09PWMmJig0PT09Vnx8Mz09PVYmJihXJjYyOTE0NTYwKT09PVcmJjUwMD5PKCktamo/UWooYSwwKTp1anw9Yyk7TWooYSxiKX1mdW5jdGlvbiBsaihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO251bGwhPT1jJiZjLmRlbGV0ZShiKTtiPTA7MD09PWImJihiPWEubW9kZSwwPT09KGImMik/Yj0xOjA9PT0oYiY0KT9iPTk5PT09ZWcoKT8xOjI6KDA9PT1HaiYmKEdqPXRqKSxiPVljKDYyOTE0NTYwJn5HaiksMD09PWImJihiPTQxOTQzMDQpKSk7Yz1IZygpO2E9S2ooYSxiKTtudWxsIT09YSYmKCRjKGEsYixjKSxNaihhLGMpKX12YXIgY2s7XG5jaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yi5sYW5lcztpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8Ti5jdXJyZW50KXVnPSEwO2Vsc2UgaWYoMCE9PShjJmQpKXVnPTAhPT0oYS5mbGFncyYxNjM4NCk/ITA6ITE7ZWxzZXt1Zz0hMTtzd2l0Y2goYi50YWcpe2Nhc2UgMzpyaShiKTtzaCgpO2JyZWFrO2Nhc2UgNTpnaChiKTticmVhaztjYXNlIDE6RmYoYi50eXBlKSYmSmYoYik7YnJlYWs7Y2FzZSA0OmVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDpkPWIubWVtb2l6ZWRQcm9wcy52YWx1ZTt2YXIgZT1iLnR5cGUuX2NvbnRleHQ7SShtZyxlLl9jdXJyZW50VmFsdWUpO2UuX2N1cnJlbnRWYWx1ZT1kO2JyZWFrO2Nhc2UgMTM6aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSl7aWYoMCE9PShjJmIuY2hpbGQuY2hpbGRMYW5lcykpcmV0dXJuIHRpKGEsYixjKTtJKFAsUC5jdXJyZW50JjEpO2I9aGkoYSxiLGMpO3JldHVybiBudWxsIT09XG5iP2Iuc2libGluZzpudWxsfUkoUCxQLmN1cnJlbnQmMSk7YnJlYWs7Y2FzZSAxOTpkPTAhPT0oYyZiLmNoaWxkTGFuZXMpO2lmKDAhPT0oYS5mbGFncyY2NCkpe2lmKGQpcmV0dXJuIEFpKGEsYixjKTtiLmZsYWdzfD02NH1lPWIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGUucmVuZGVyaW5nPW51bGwsZS50YWlsPW51bGwsZS5sYXN0RWZmZWN0PW51bGwpO0koUCxQLmN1cnJlbnQpO2lmKGQpYnJlYWs7ZWxzZSByZXR1cm4gbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIGIubGFuZXM9MCxtaShhLGIsYyl9cmV0dXJuIGhpKGEsYixjKX1lbHNlIHVnPSExO2IubGFuZXM9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPWIudHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTthPWIucGVuZGluZ1Byb3BzO2U9RWYoYixNLmN1cnJlbnQpO3RnKGIsYyk7ZT1DaChudWxsLGIsZCxhLGUsYyk7Yi5mbGFnc3w9MTtpZihcIm9iamVjdFwiPT09XG50eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZil7Yi50YWc9MTtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYoRmYoZCkpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsO3hnKGIpO3ZhciBnPWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiZHZyhiLGQsZyxhKTtlLnVwZGF0ZXI9S2c7Yi5zdGF0ZU5vZGU9ZTtlLl9yZWFjdEludGVybmFscz1iO09nKGIsZCxhLGMpO2I9cWkobnVsbCxiLGQsITAsZixjKX1lbHNlIGIudGFnPTAsZmkobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO2E6e251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO1xuYT1iLnBlbmRpbmdQcm9wcztmPWUuX2luaXQ7ZT1mKGUuX3BheWxvYWQpO2IudHlwZT1lO2Y9Yi50YWc9aGsoZSk7YT1sZyhlLGEpO3N3aXRjaChmKXtjYXNlIDA6Yj1saShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxOmI9cGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTE6Yj1naShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxNDpiPWlpKG51bGwsYixlLGxnKGUudHlwZSxhKSxkLGMpO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgzMDYsZSxcIlwiKSk7fXJldHVybiBiO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxsaShhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxwaShhLGIsZCxlLGMpO2Nhc2UgMzpyaShiKTtkPWIudXBkYXRlUXVldWU7aWYobnVsbD09PWF8fG51bGw9PT1kKXRocm93IEVycm9yKHkoMjgyKSk7XG5kPWIucGVuZGluZ1Byb3BzO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7eWcoYSxiKTtDZyhiLGQsbnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKXNoKCksYj1oaShhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGY9ZS5oeWRyYXRlKWtoPXJmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8uZmlyc3RDaGlsZCksamg9YixmPWxoPSEwO2lmKGYpe2E9ZS5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhO2lmKG51bGwhPWEpZm9yKGU9MDtlPGEubGVuZ3RoO2UrPTIpZj1hW2VdLGYuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9YVtlKzFdLHRoLnB1c2goZik7Yz1aZyhiLG51bGwsZCxjKTtmb3IoYi5jaGlsZD1jO2M7KWMuZmxhZ3M9Yy5mbGFncyYtM3wxMDI0LGM9Yy5zaWJsaW5nfWVsc2UgZmkoYSxiLGQsYyksc2goKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBnaChiKSxudWxsPT09YSYmXG5waChiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsZz1lLmNoaWxkcmVuLG5mKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZuZihkLGYpJiYoYi5mbGFnc3w9MTYpLG9pKGEsYiksZmkoYSxiLGcsYyksYi5jaGlsZDtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZwaChiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIHRpKGEsYixjKTtjYXNlIDQ6cmV0dXJuIGVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPVlnKGIsbnVsbCxkLGMpOmZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxnaShhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sXG5jKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7dmFyIGg9Yi50eXBlLl9jb250ZXh0O0kobWcsaC5fY3VycmVudFZhbHVlKTtoLl9jdXJyZW50VmFsdWU9ZjtpZihudWxsIT09ZylpZihoPWcudmFsdWUsZj1IZShoLGYpPzA6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLl9jYWxjdWxhdGVDaGFuZ2VkQml0cz9kLl9jYWxjdWxhdGVDaGFuZ2VkQml0cyhoLGYpOjEwNzM3NDE4MjMpfDAsMD09PWYpe2lmKGcuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhTi5jdXJyZW50KXtiPWhpKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihoPWIuY2hpbGQsbnVsbCE9PWgmJihoLnJldHVybj1iKTtudWxsIT09aDspe3ZhciBrPWguZGVwZW5kZW5jaWVzO2lmKG51bGwhPT1rKXtnPWguY2hpbGQ7Zm9yKHZhciBsPVxuay5maXJzdENvbnRleHQ7bnVsbCE9PWw7KXtpZihsLmNvbnRleHQ9PT1kJiYwIT09KGwub2JzZXJ2ZWRCaXRzJmYpKXsxPT09aC50YWcmJihsPXpnKC0xLGMmLWMpLGwudGFnPTIsQWcoaCxsKSk7aC5sYW5lc3w9YztsPWguYWx0ZXJuYXRlO251bGwhPT1sJiYobC5sYW5lc3w9Yyk7c2coaC5yZXR1cm4sYyk7ay5sYW5lc3w9YzticmVha31sPWwubmV4dH19ZWxzZSBnPTEwPT09aC50YWc/aC50eXBlPT09Yi50eXBlP251bGw6aC5jaGlsZDpoLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWg7ZWxzZSBmb3IoZz1oO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31oPWcuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Zy5yZXR1cm47Zz1oO2JyZWFrfWc9Zy5yZXR1cm59aD1nfWZpKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGY9Yi5wZW5kaW5nUHJvcHMsZD1mLmNoaWxkcmVuLHRnKGIsYyksZT12ZyhlLFxuZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmZsYWdzfD0xLGZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1sZyhlLGIucGVuZGluZ1Byb3BzKSxmPWxnKGUudHlwZSxmKSxpaShhLGIsZSxmLGQsYyk7Y2FzZSAxNTpyZXR1cm4ga2koYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxkLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksYi50YWc9MSxGZihkKT8oYT0hMCxKZihiKSk6YT0hMSx0ZyhiLGMpLE1nKGIsZCxlKSxPZyhiLGQsZSxjKSxxaShudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIEFpKGEsYixjKTtjYXNlIDIzOnJldHVybiBtaShhLGIsYyk7Y2FzZSAyNDpyZXR1cm4gbWkoYSxiLGMpfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7XG59O2Z1bmN0aW9uIGlrKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5kZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5mbGFncz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRMYW5lcz10aGlzLmxhbmVzPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBuaChhLGIsYyxkKXtyZXR1cm4gbmV3IGlrKGEsYixjLGQpfWZ1bmN0aW9uIGppKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9XG5mdW5jdGlvbiBoayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gamkoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PUFhKXJldHVybiAxMTtpZihhPT09RGEpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gVGcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1uaChhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLnR5cGU9YS50eXBlLGMuZmxhZ3M9MCxjLm5leHRFZmZlY3Q9bnVsbCxjLmZpcnN0RWZmZWN0PW51bGwsYy5sYXN0RWZmZWN0PW51bGwpO2MuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXM7Yy5sYW5lcz1hLmxhbmVzO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2I9YS5kZXBlbmRlbmNpZXM7Yy5kZXBlbmRlbmNpZXM9bnVsbD09PWI/bnVsbDp7bGFuZXM6Yi5sYW5lcyxmaXJzdENvbnRleHQ6Yi5maXJzdENvbnRleHR9O1xuYy5zaWJsaW5nPWEuc2libGluZztjLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBWZyhhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpamkoYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuIFhnKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgSGE6Zz04O2V8PTE2O2JyZWFrO2Nhc2Ugd2E6Zz04O2V8PTE7YnJlYWs7Y2FzZSB4YTpyZXR1cm4gYT1uaCgxMixjLGIsZXw4KSxhLmVsZW1lbnRUeXBlPXhhLGEudHlwZT14YSxhLmxhbmVzPWYsYTtjYXNlIEJhOnJldHVybiBhPW5oKDEzLGMsYixlKSxhLnR5cGU9QmEsYS5lbGVtZW50VHlwZT1CYSxhLmxhbmVzPWYsYTtjYXNlIENhOnJldHVybiBhPW5oKDE5LGMsYixlKSxhLmVsZW1lbnRUeXBlPUNhLGEubGFuZXM9ZixhO2Nhc2UgSWE6cmV0dXJuIHZpKGMsZSxmLGIpO2Nhc2UgSmE6cmV0dXJuIGE9bmgoMjQsYyxiLGUpLGEuZWxlbWVudFR5cGU9SmEsYS5sYW5lcz1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09XG50eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgeWE6Zz0xMDticmVhayBhO2Nhc2UgemE6Zz05O2JyZWFrIGE7Y2FzZSBBYTpnPTExO2JyZWFrIGE7Y2FzZSBEYTpnPTE0O2JyZWFrIGE7Y2FzZSBFYTpnPTE2O2Q9bnVsbDticmVhayBhO2Nhc2UgRmE6Zz0yMjticmVhayBhfXRocm93IEVycm9yKHkoMTMwLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKSk7fWI9bmgoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IubGFuZXM9ZjtyZXR1cm4gYn1mdW5jdGlvbiBYZyhhLGIsYyxkKXthPW5oKDcsYSxkLGIpO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiB2aShhLGIsYyxkKXthPW5oKDIzLGEsZCxiKTthLmVsZW1lbnRUeXBlPUlhO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiBVZyhhLGIsYyl7YT1uaCg2LGEsbnVsbCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBXZyhhLGIsYyl7Yj1uaCg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5sYW5lcz1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGprKGEsYixjKXt0aGlzLnRhZz1iO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMuZmluaXNoZWRXb3JrPXRoaXMucGluZ0NhY2hlPXRoaXMuY3VycmVudD10aGlzLnBlbmRpbmdDaGlsZHJlbj1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuaHlkcmF0ZT1jO3RoaXMuY2FsbGJhY2tOb2RlPW51bGw7dGhpcy5jYWxsYmFja1ByaW9yaXR5PTA7dGhpcy5ldmVudFRpbWVzPVpjKDApO3RoaXMuZXhwaXJhdGlvblRpbWVzPVpjKC0xKTt0aGlzLmVudGFuZ2xlZExhbmVzPXRoaXMuZmluaXNoZWRMYW5lcz10aGlzLm11dGFibGVSZWFkTGFuZXM9dGhpcy5leHBpcmVkTGFuZXM9dGhpcy5waW5nZWRMYW5lcz10aGlzLnN1c3BlbmRlZExhbmVzPXRoaXMucGVuZGluZ0xhbmVzPTA7dGhpcy5lbnRhbmdsZW1lbnRzPVpjKDApO3RoaXMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1udWxsfVxuZnVuY3Rpb24ga2soYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjp0YSxrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbmZ1bmN0aW9uIGxrKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPUhnKCksZz1JZyhlKTthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbHM7Yjp7aWYoWmIoYykhPT1jfHwxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxNzApKTt2YXIgaD1jO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSAzOmg9aC5zdGF0ZU5vZGUuY29udGV4dDticmVhayBiO2Nhc2UgMTppZihGZihoLnR5cGUpKXtoPWguc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpO3Rocm93IEVycm9yKHkoMTcxKSk7fWlmKDE9PT1jLnRhZyl7dmFyIGs9Yy50eXBlO2lmKEZmKGspKXtjPUlmKGMsayxoKTticmVhayBhfX1jPWh9ZWxzZSBjPUNmO251bGw9PT1iLmNvbnRleHQ/Yi5jb250ZXh0PWM6Yi5wZW5kaW5nQ29udGV4dD1jO2I9emcoZixnKTtiLnBheWxvYWQ9e2VsZW1lbnQ6YX07ZD12b2lkIDA9PT1kP251bGw6ZDtudWxsIT09XG5kJiYoYi5jYWxsYmFjaz1kKTtBZyhlLGIpO0pnKGUsZyxmKTtyZXR1cm4gZ31mdW5jdGlvbiBtayhhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIG5rKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe3ZhciBjPWEucmV0cnlMYW5lO2EucmV0cnlMYW5lPTAhPT1jJiZjPGI/YzpifX1mdW5jdGlvbiBvayhhLGIpe25rKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZuayhhLGIpfWZ1bmN0aW9uIHBrKCl7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBxayhhLGIsYyl7dmFyIGQ9bnVsbCE9YyYmbnVsbCE9Yy5oeWRyYXRpb25PcHRpb25zJiZjLmh5ZHJhdGlvbk9wdGlvbnMubXV0YWJsZVNvdXJjZXN8fG51bGw7Yz1uZXcgamsoYSxiLG51bGwhPWMmJiEwPT09Yy5oeWRyYXRlKTtiPW5oKDMsbnVsbCxudWxsLDI9PT1iPzc6MT09PWI/MzowKTtjLmN1cnJlbnQ9YjtiLnN0YXRlTm9kZT1jO3hnKGIpO2FbZmZdPWMuY3VycmVudDtjZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKXtiPWRbYV07dmFyIGU9Yi5fZ2V0VmVyc2lvbjtlPWUoYi5fc291cmNlKTtudWxsPT1jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE/Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPVtiLGVdOmMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YS5wdXNoKGIsZSl9dGhpcy5faW50ZXJuYWxSb290PWN9XG5xay5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe2xrKGEsdGhpcy5faW50ZXJuYWxSb290LG51bGwsbnVsbCl9O3FrLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5faW50ZXJuYWxSb290LGI9YS5jb250YWluZXJJbmZvO2xrKG51bGwsYSxudWxsLGZ1bmN0aW9uKCl7YltmZl09bnVsbH0pfTtmdW5jdGlvbiByayhhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9XG5mdW5jdGlvbiBzayhhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IHFrKGEsMCxiP3toeWRyYXRlOiEwfTp2b2lkIDApfVxuZnVuY3Rpb24gdGsoYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7dmFyIGc9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtoLmNhbGwoYSl9fWxrKGIsZyxhLGUpfWVsc2V7Zj1jLl9yZWFjdFJvb3RDb250YWluZXI9c2soYyxkKTtnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGs9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7ay5jYWxsKGEpfX1YaihmdW5jdGlvbigpe2xrKGIsZyxhLGUpfSl9cmV0dXJuIG1rKGcpfWVjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw0LGIpO29rKGEsNCl9fTtmYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNjcxMDg4NjQsYik7b2soYSw2NzEwODg2NCl9fTtcbmdjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCksYz1JZyhhKTtKZyhhLGMsYik7b2soYSxjKX19O2hjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIoKX07XG55Yj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOmFiKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1EYihkKTtpZighZSl0aHJvdyBFcnJvcih5KDkwKSk7V2EoZCk7YWIoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZmYihhLCEhYy5tdWx0aXBsZSxiLCExKX19O0diPVdqO1xuSGI9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1YO1h8PTQ7dHJ5e3JldHVybiBnZyg5OCxhLmJpbmQobnVsbCxiLGMsZCxlKSl9ZmluYWxseXtYPWYsMD09PVgmJih3aigpLGlnKCkpfX07SWI9ZnVuY3Rpb24oKXswPT09KFgmNDkpJiYoVmooKSxPaigpKX07SmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO1h8PTI7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19O2Z1bmN0aW9uIHVrKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIGtrKGEsYixudWxsLGMpfXZhciB2az17RXZlbnRzOltDYix1ZSxEYixFYixGYixPaix7Y3VycmVudDohMX1dfSx3az17ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2MsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNy4wLjJcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9O1xudmFyIHhrPXtidW5kbGVUeXBlOndrLmJ1bmRsZVR5cGUsdmVyc2lvbjp3ay52ZXJzaW9uLHJlbmRlcmVyUGFja2FnZU5hbWU6d2sucmVuZGVyZXJQYWNrYWdlTmFtZSxyZW5kZXJlckNvbmZpZzp3ay5yZW5kZXJlckNvbmZpZyxvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlSG9va1N0YXRlRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlSG9va1N0YXRlUmVuYW1lUGF0aDpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxvdmVycmlkZVByb3BzRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlUHJvcHNSZW5hbWVQYXRoOm51bGwsc2V0U3VzcGVuc2VIYW5kbGVyOm51bGwsc2NoZWR1bGVVcGRhdGU6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjpyYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9Y2MoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndrLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlfHxcbnBrLGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGx9O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXt2YXIgeWs9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKCF5ay5pc0Rpc2FibGVkJiZ5ay5zdXBwb3J0c0ZpYmVyKXRyeXtMZj15ay5pbmplY3QoeGspLE1mPXlrfWNhdGNoKGEpe319ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD12aztleHBvcnRzLmNyZWF0ZVBvcnRhbD11aztcbmV4cG9ydHMuZmluZERPTU5vZGU9ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFscztpZih2b2lkIDA9PT1iKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXIpdGhyb3cgRXJyb3IoeSgxODgpKTt0aHJvdyBFcnJvcih5KDI2OCxPYmplY3Qua2V5cyhhKSkpO31hPWNjKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO2lmKDAhPT0oYyY0OCkpcmV0dXJuIGEoYik7WHw9MTt0cnl7aWYoYSlyZXR1cm4gZ2coOTksYS5iaW5kKG51bGwsYikpfWZpbmFsbHl7WD1jLGlnKCl9fTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCExLGMpfTtleHBvcnRzLnVubW91bnRDb21wb25lbnRBdE5vZGU9ZnVuY3Rpb24oYSl7aWYoIXJrKGEpKXRocm93IEVycm9yKHkoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhYaihmdW5jdGlvbigpe3RrKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGw7YVtmZl09bnVsbH0pfSksITApOiExfTtleHBvcnRzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzPVdqO2V4cG9ydHMudW5zdGFibGVfY3JlYXRlUG9ydGFsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHVrKGEsYiwyPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCl9O1xuZXhwb3J0cy51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyxkKXtpZighcmsoYykpdGhyb3cgRXJyb3IoeSgyMDApKTtpZihudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFscyl0aHJvdyBFcnJvcih5KDM4KSk7cmV0dXJuIHRrKGEsYixjLCExLGQpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMjAuMlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZixnLGgsaztpZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgdD1udWxsLHU9bnVsbCx3PWZ1bmN0aW9uKCl7aWYobnVsbCE9PXQpdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dCghMCxhKTt0PW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dCh3LDApLGI7fX07Zj1mdW5jdGlvbihhKXtudWxsIT09dD9zZXRUaW1lb3V0KGYsMCxhKToodD1hLHNldFRpbWVvdXQodywwKSl9O2c9ZnVuY3Rpb24oYSxiKXt1PXNldFRpbWVvdXQoYSxiKX07aD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KX07ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiExfTtrPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHg9d2luZG93LnNldFRpbWVvdXQseT13aW5kb3cuY2xlYXJUaW1lb3V0O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIHo9XG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgeiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIil9dmFyIEE9ITEsQj1udWxsLEM9LTEsRD01LEU9MDtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PVxuRX07az1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6RD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEY9bmV3IE1lc3NhZ2VDaGFubmVsLEc9Ri5wb3J0MjtGLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG51bGwhPT1CKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO0U9YStEO3RyeXtCKCEwLGEpP0cucG9zdE1lc3NhZ2UobnVsbCk6KEE9ITEsQj1udWxsKX1jYXRjaChiKXt0aHJvdyBHLnBvc3RNZXNzYWdlKG51bGwpLGI7fX1lbHNlIEE9ITF9O2Y9ZnVuY3Rpb24oYSl7Qj1hO0F8fChBPSEwLEcucG9zdE1lc3NhZ2UobnVsbCkpfTtnPWZ1bmN0aW9uKGEsYil7Qz1cbngoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3koQyk7Qz0tMX19ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxJKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBKKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBLKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPkkobixjKSl2b2lkIDAhPT1yJiYwPkkocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPkkocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEkoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIEw9W10sTT1bXSxOPTEsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSl7Zm9yKHZhciBiPUooTSk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylLKE0pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpSyhNKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEgoTCxiKTtlbHNlIGJyZWFrO2I9SihNKX19ZnVuY3Rpb24gVShhKXtTPSExO1QoYSk7aWYoIVIpaWYobnVsbCE9PUooTCkpUj0hMCxmKFYpO2Vsc2V7dmFyIGI9SihNKTtudWxsIT09YiYmZyhVLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFYoYSxiKXtSPSExO1MmJihTPSExLGgoKSk7UT0hMDt2YXIgYz1QO3RyeXtUKGIpO2ZvcihPPUooTCk7bnVsbCE9PU8mJighKE8uZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCkpOyl7dmFyIGQ9Ty5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7Ty5jYWxsYmFjaz1udWxsO1A9Ty5wcmlvcml0eUxldmVsO3ZhciBlPWQoTy5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP08uY2FsbGJhY2s9ZTpPPT09SihMKSYmSyhMKTtUKGIpfWVsc2UgSyhMKTtPPUooTCl9aWYobnVsbCE9PU8pdmFyIG09ITA7ZWxzZXt2YXIgbj1KKE0pO251bGwhPT1uJiZnKFUsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e089bnVsbCxQPWMsUT0hMX19dmFyIFc9aztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtSfHxRfHwoUj0hMCxmKFYpKX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIEooTCl9O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9VztleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOk4rKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLEgoTSxhKSxudWxsPT09SihMKSYmYT09PUooTSkmJihTP2goKTpTPSEwLGcoVSxjLWQpKSk6KGEuc29ydEluZGV4PWUsSChMLGEpLFJ8fFF8fChSPSEwLGYoVikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07XG4iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJXaW5kb3cobm9kZSkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChub2RlKTtcbiAgcmV0dXJuIGRvYyAmJiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xufSIsImltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuL293bmVyV2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUobm9kZSwgcHN1ZWRvRWxlbWVudCkge1xuICByZXR1cm4gb3duZXJXaW5kb3cobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwc3VlZG9FbGVtZW50KTtcbn0iLCJ2YXIgclVwcGVyID0gLyhbQS1aXSkvZztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJVcHBlciwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzJhZWI4YTJhNmJlYjAwNjE3YTQyMTdmN2Y4Mjg0OTI0ZmEyYWQ4MTkvc3JjL3ZlbmRvci9jb3JlL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuICovXG5pbXBvcnQgaHlwaGVuYXRlIGZyb20gJy4vaHlwaGVuYXRlJztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBoeXBoZW5hdGUoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn0iLCJ2YXIgc3VwcG9ydGVkVHJhbnNmb3JtcyA9IC9eKCh0cmFuc2xhdGV8cm90YXRlfHNjYWxlKShYfFl8WnwzZCk/fG1hdHJpeCgzZCk/fHBlcnNwZWN0aXZlfHNrZXcoWHxZKT8pJC9pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHN1cHBvcnRlZFRyYW5zZm9ybXMudGVzdCh2YWx1ZSkpO1xufSIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gJy4vZ2V0Q29tcHV0ZWRTdHlsZSc7XG5pbXBvcnQgaHlwaGVuYXRlIGZyb20gJy4vaHlwaGVuYXRlU3R5bGUnO1xuaW1wb3J0IGlzVHJhbnNmb3JtIGZyb20gJy4vaXNUcmFuc2Zvcm0nO1xuXG5mdW5jdGlvbiBzdHlsZShub2RlLCBwcm9wZXJ0eSkge1xuICB2YXIgY3NzID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1zID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGh5cGhlbmF0ZShwcm9wZXJ0eSkpIHx8IGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZShoeXBoZW5hdGUocHJvcGVydHkpKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb3BlcnR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eVtrZXldO1xuXG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShoeXBoZW5hdGUoa2V5KSk7XG4gICAgfSBlbHNlIGlmIChpc1RyYW5zZm9ybShrZXkpKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IGtleSArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzcyArPSBoeXBoZW5hdGUoa2V5KSArIFwiOiBcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhbnNmb3Jtcykge1xuICAgIGNzcyArPSBcInRyYW5zZm9ybTogXCIgKyB0cmFuc2Zvcm1zICsgXCI7XCI7XG4gIH1cblxuICBub2RlLnN0eWxlLmNzc1RleHQgKz0gXCI7XCIgKyBjc3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEJhc2VCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSAnQHJlc3RhcnQvdWknO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBCdXR0b25Qcm9wcywgcmVmKSA9PiAoXG4gIDxCYXNlQnV0dG9uXG4gICAgcmVmPXtyZWZ9XG4gICAgey4uLnByb3BzfVxuICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgIHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICd0cmFuc2l0aW9uIHRleHQtbWQnLFxuICAgICAgJ2gtMTAgY3Vyc29yLXBvaW50ZXIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSByb3VuZGVkIHB4LTggbXQtNCBhcHBlYXJhbmNlLW5vbmUgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1uby13cmFwJyxcbiAgICAgICdmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy00IHJpbmctYnJhbmQtMjAwJyxcbiAgICAgICdob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUnLFxuICAgICAgJ2FjdGl2ZTpiZy1icmFuZC02MDAgYWN0aXZlOnRleHQtd2hpdGUnLFxuICAgICAgcHJvcHMuZGlzYWJsZWQgJiYgJ2N1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTYwJyxcbiAgICApfVxuICAvPlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgdXNlRHJvcGRvd25NZW51LFxuICB1c2VEcm9wZG93blRvZ2dsZSxcbiAgdXNlRHJvcGRvd25JdGVtLFxuICBEcm9wZG93biBhcyBCYXNlRHJvcGRvd24sXG4gIERyb3Bkb3duUHJvcHMsXG59IGZyb20gJ0ByZXN0YXJ0L3VpJztcbmltcG9ydCBTdHlsZWRCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5jb25zdCBEcm9wZG93bk1lbnUgPSAoeyByb2xlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFttZW51UHJvcHMsIHsgc2hvdyB9XSA9IHVzZURyb3Bkb3duTWVudSh7XG4gICAgZmxpcDogdHJ1ZSxcbiAgICBvZmZzZXQ6IFswLCA4XSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICB7Li4ubWVudVByb3BzfVxuICAgICAgcm9sZT17cm9sZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgc2hvdyA/ICdmbGV4ICcgOiAnaW52aXNpYmxlIG9wYWNpdHktMCcsXG4gICAgICAgICd3LTQ4IHB5LTIgZmxleC1jb2wgc2hhZG93LWxnIGJvcmRlci1ncmF5LTIwMCBib3JkZXIgYmctd2hpdGUgei0xMCByb3VuZGVkIGFic29sdXRlJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tYWxsJyxcbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9ICh7IGV2ZW50S2V5LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtpdGVtUHJvcHMsIHsgYWN0aXZlIH1dID0gdXNlRHJvcGRvd25JdGVtKHtcbiAgICBrZXk6IGV2ZW50S2V5LFxuICAgIC4uLnByb3BzLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHsuLi5pdGVtUHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICd0ZXh0LWxlZnQgaG92ZXI6YmctYnJhbmQtMTAwIHB4LTYgcHktMiBmb2N1czpyaW5nLTIgZm9jdXM6b3V0bGluZS1ub25lJyxcbiAgICAgICAgYWN0aXZlICYmICdiZy1wcmltYXJ5JyxcbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IERyb3Bkb3duVG9nZ2xlID0gKHsgYXM6IFRhZyA9IFN0eWxlZEJ1dHRvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbaXRlbVByb3BzXSA9IHVzZURyb3Bkb3duVG9nZ2xlKCk7XG5cbiAgcmV0dXJuIDxUYWcgey4uLnByb3BzfSB7Li4uaXRlbVByb3BzfSAvPjtcbn07XG5cbmNvbnN0IERyb3Bkb3duID0gKHByb3BzOiBEcm9wZG93blByb3BzKSA9PiA8QmFzZURyb3Bkb3duIHsuLi5wcm9wc30gLz47XG5cbkRyb3Bkb3duLlRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlO1xuRHJvcGRvd24uTWVudSA9IERyb3Bkb3duTWVudTtcbkRyb3Bkb3duLkl0ZW0gPSBEcm9wZG93bkl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==