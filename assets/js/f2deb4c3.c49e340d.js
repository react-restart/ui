exports.ids = [13];
exports.modules = {

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "frontMatter", function() { return /* binding */ frontMatter; });
__webpack_require__.d(__webpack_exports__, "metadata", function() { return /* binding */ metadata; });
__webpack_require__.d(__webpack_exports__, "toc", function() { return /* binding */ toc; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MDXContent; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js
var interopRequireWildcard = __webpack_require__(310);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(292);

// EXTERNAL MODULE: ../node_modules/@4c/docusaurus-preset/lib/theme/ImportContext.js
var ImportContext = __webpack_require__(305);
var ImportContext_default = /*#__PURE__*/__webpack_require__.n(ImportContext);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCallbackRef.js
var useCallbackRef = __webpack_require__(287);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useCommittedRef.js
var useCommittedRef = __webpack_require__(303);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventListener.js
var useEventListener = __webpack_require__(306);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useGlobalListener.js
var useGlobalListener = __webpack_require__(307);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useInterval.js


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
  var fnRef = Object(useCommittedRef["a" /* default */])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = Object(useCommittedRef["a" /* default */])(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  Object(react["useEffect"])(function () {
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

/* harmony default export */ var esm_useInterval = (useInterval);
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useRafInterval.js



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = Object(useCommittedRef["a" /* default */])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = Object(useCommittedRef["a" /* default */])(paused);

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

  Object(react["useEffect"])(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ var esm_useRafInterval = (useRafInterval);
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useMergeState.js
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
function useMergeState(initialState) {
  var _useState = Object(react["useState"])(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = Object(react["useCallback"])(function (update) {
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
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useMergeStateFromProps.js

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = useMergeState(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(290);

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/usePrevious.js
var usePrevious = __webpack_require__(289);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useImage.js


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
  var _useState = Object(react["useState"])({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react["useEffect"])(function () {
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
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var useIsomorphicEffect = __webpack_require__(366);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useResizeObserver.js


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
  var _useState = Object(react["useState"])(null),
      rect = _useState[0],
      setRect = _useState[1];

  Object(useIsomorphicEffect["a" /* default */])(function () {
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
// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/index.js














// EXTERNAL MODULE: ../src/useWaypoint.tsx + 2 modules
var useWaypoint = __webpack_require__(368);

// CONCATENATED MODULE: ../src/Waypoint.tsx
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






const defaultRenderComponent = ref => /*#__PURE__*/react["createElement"]("span", {
  ref: ref,
  style: {
    fontSize: 0
  }
});
/**
 * A component that tracks when it enters or leaves the viewport. Implemented
 * using IntersectionObserver, polyfill may be required for older browsers.
 */


function Waypoint(_ref) {
  let {
    renderComponent = defaultRenderComponent,
    onPositionChange
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, ["renderComponent", "onPositionChange"]);

  const [element, setElement] = Object(useCallbackRef["a" /* default */])();
  Object(useWaypoint["default"])(element, onPositionChange, options);
  return renderComponent(setElement);
}

/* harmony default export */ var src_Waypoint = (Waypoint);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(274);

// CONCATENATED MODULE: ./src/WaypointExample.tsx





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
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])('flex items-center justify-center text-4xl', horizontal && 'min-w-[30%]')
  }, /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      lineHeight: '100px'
    },
    className: Object(clsx_m["default"])(horizontal && 'transform -rotate-90')
  }, "\u25BC"));
}

function Overlay({
  horizontal
}) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])('absolute border-black border-2 inset-0'),
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

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, top != null && /*#__PURE__*/react_default.a.createElement("div", {
    className: "absolute inset-0 z-10 bg-yellow-200 bg-opacity-50",
    style: {
      top: `${top < 0 ? VIEWPORT : VIEWPORT - top}px`,
      bottom: 'auto',
      height: Math.abs(top),
      right: 17
    }
  }), bottom != null && /*#__PURE__*/react_default.a.createElement("div", {
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
  const [root, attachRef] = Object(useCallbackRef["a" /* default */])();
  const [message, setMessage] = Object(react["useState"])('');
  Object(useIsomorphicEffect["a" /* default */])(() => {
    if (!scrollIntoView || !root) return;
    root.querySelector('.docs-example-waypoint').scrollIntoView({
      block: 'center'
    }); // root.scrollTop = root.scrollHeight / 2;
  }, [root]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "relative overflow-hidden mb-4"
  }, message && /*#__PURE__*/react_default.a.createElement("div", {
    className: Object(clsx_m["default"])('bg-black bg-opacity-50 text-white p-4 left-1/2 top-1/2 text-center z-10 transform -translate-y-1/2 -translate-x-1/2 absolute w-64')
  }, message), /*#__PURE__*/react_default.a.createElement(Overlay, {
    horizontal: horizontal
  }), margins && /*#__PURE__*/react_default.a.createElement(Margins, {
    margins: margins
  }), /*#__PURE__*/react_default.a.createElement("div", {
    ref: attachRef,
    className: Object(clsx_m["default"])('flex relative overflow-auto border rounded', !horizontal && 'flex-col'),
    style: {
      minHeight: 200,
      maxHeight: 400
    }
  }, /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(src_Waypoint, {
    root: "scrollParent",
    rootMargin: normalizeMargins(margins),
    scrollDirection: horizontal ? 'horizontal' : 'vertical',
    renderComponent: ref => /*#__PURE__*/react_default.a.createElement("div", {
      ref: ref,
      className: Object(clsx_m["default"])('docs-example-waypoint', 'border-dashed border-primary', horizontal ? 'border-l-4' : 'border-t-4')
    }),
    onPositionChange: ({
      position
    }) => {
      if (position === useWaypoint["Position"].BEFORE || position === useWaypoint["Position"].AFTER) {
        setMessage(`Exited (${useWaypoint["Position"][position].toLowerCase()})`);
      }

      if (position === useWaypoint["Position"].INSIDE) {
        setMessage('Entered');
      }
    }
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  }), /*#__PURE__*/react_default.a.createElement(Spacer, {
    horizontal: horizontal
  })));
}

/* harmony default export */ var src_WaypointExample = (WaypointExample);
// CONCATENATED MODULE: ./docs/Waypoint.mdx
const frontMatter={};const metadata={"unversionedId":"Waypoint","id":"Waypoint","isDocsHomePage":false,"title":"Waypoint","description":"A component (and related hook) to provide a high level interface","source":"@site/docs/Waypoint.mdx","slug":"/Waypoint","permalink":"/ui/Waypoint","version":"current","sidebar":"docs","previous":{"title":"Portal","permalink":"/ui/Portal"},"next":{"title":"usePopper","permalink":"/ui/usePopper"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'How it works',id:'how-it-works',children:[]},{value:'Scroll direction',id:'scroll-direction',children:[]},{value:'Specifying the scroll parent',id:'specifying-the-scroll-parent',children:[]},{value:'Margins',id:'margins',children:[]},{value:'<code>useWaypoint</code>',id:'usewaypoint',children:[]}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent({components,...props}){return Object(esm["b" /* mdx */])(MDXLayout,Object(esm_extends["a" /* default */])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm["b" /* mdx */])("p",null,`A component (and related hook) to provide a high level interface
over `,Object(esm["b" /* mdx */])("a",{parentName:"p","href":"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},Object(esm["b" /* mdx */])("inlineCode",{parentName:"a"},`IntersectionObserver`)),`
designed to detect when a component enters and exits a viewport.`),Object(esm["b" /* mdx */])("p",null,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`Waypoint`),` provides a good basis for building other components like infinite lists,
"scroll spy" style navigation, lazy loading images, and more.`),Object(esm["b" /* mdx */])("h2",{"id":"how-it-works"},`How it works`),Object(esm["b" /* mdx */])("p",null,`Waypoint renders a "sentinel" element that you place in a scrollable
area. Using an `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`IntersectionObserver`),`, the waypoint fires a callback when it
"intersects" with the visible area of the scroll view. Waypoint will fire a callback
when this happens with details about where the waypoint is in relation to the visible
area.`),Object(esm["b" /* mdx */])("p",null,`The example below adds visible styling to waypoint for clarity. By default a
waypoint renders an invisible zero-height element.`),Object(esm["b" /* mdx */])(src_WaypointExample,{scrollIntoView:true,mdxType:"WaypointExample"}),Object(esm["b" /* mdx */])("h2",{"id":"scroll-direction"},`Scroll direction`),Object(esm["b" /* mdx */])("p",null,`For simplicity, scroll detection with waypoints is limited to a single direction at one time.
By default that direction is "vertical", but can configured to "horizontal".`),Object(esm["b" /* mdx */])("pre",null,Object(esm["b" /* mdx */])("code",{parentName:"pre","className":"language-tsx"},`<Waypoint scrollDirection="horizontal" />
`)),Object(esm["b" /* mdx */])(src_WaypointExample,{horizontal:true,mdxType:"WaypointExample"}),Object(esm["b" /* mdx */])("h2",{"id":"specifying-the-scroll-parent"},`Specifying the scroll parent`),Object(esm["b" /* mdx */])("p",null,`By default waypoint observes scrolling on the device viewport, generally the `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`window`),`.
You can also specify a specific element as the root by providing a DOM element
to the `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`root`),` prop.`),Object(esm["b" /* mdx */])("pre",null,Object(esm["b" /* mdx */])("code",{parentName:"pre","className":"language-tsx"},`function ScrollArea({ items, onPositionChange }) {
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
`)),Object(esm["b" /* mdx */])("h2",{"id":"margins"},`Margins`),Object(esm["b" /* mdx */])("p",null,`You can adjust the functional shape of the viewport by providing a `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`rootMargin`),`
prop, which is passed to the underlying `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`IntersectionObserver`),`. As a convenience,
Waypoint accepts an object with inset properties as well as a valid CSS margin property
value.`),Object(esm["b" /* mdx */])("p",null,`Positive margins grow the overall size of the viewport causing waypoints to enter
before they are actually in view. Negative values shrink the viewport, and delays
the waypoint from entering by the specified pixel amount. Margins are illustrated
by the yellow blocks in the example below.`),Object(esm["b" /* mdx */])("p",null,`Here is an example of positive margins:`),Object(esm["b" /* mdx */])("pre",null,Object(esm["b" /* mdx */])("code",{parentName:"pre","className":"language-tsx"},`<Waypoint rootMargin={{ top: 20, bottom: 20 }} />
`)),Object(esm["b" /* mdx */])(src_WaypointExample,{margins:{top:20,bottom:20},mdxType:"WaypointExample"}),Object(esm["b" /* mdx */])("p",null,"And the effect with negative margins"),Object(esm["b" /* mdx */])("pre",null,Object(esm["b" /* mdx */])("code",{parentName:"pre","className":"language-tsx"},`<Waypoint rootMargin={{ top: -20, bottom: -20 }} />
`)),Object(esm["b" /* mdx */])(src_WaypointExample,{margins:{top:-20,bottom:-20},mdxType:"WaypointExample"}),Object(esm["b" /* mdx */])("h2",{"id":"usewaypoint"},Object(esm["b" /* mdx */])("inlineCode",{parentName:"h2"},`useWaypoint`)),Object(esm["b" /* mdx */])("p",null,`The underlying hook powering the Waypoint component. Leverage `,Object(esm["b" /* mdx */])("inlineCode",{parentName:"p"},`useWaypoint`),`
to turn any component into a waypoint. Using the hook directly is helpful
when you want an individual component to respond`),Object(esm["b" /* mdx */])(ImportContext_default.a,{imports:()=>Object(ImportContext["allValues"])({"dom-helpers/scrollParent":Promise.resolve().then(()=>Object(interopRequireWildcard["a" /* default */])(__webpack_require__(370))),"@restart/ui/useWaypoint":Promise.resolve().then(()=>Object(interopRequireWildcard["a" /* default */])(__webpack_require__(368)))}),mdxType:"ImportContext"},Object(esm["b" /* mdx */])("pre",null,Object(esm["b" /* mdx */])("code",{parentName:"pre","className":"language-tsx","metastring":"live","live":true},`import getScrollParent from "dom-helpers/scrollParent";
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

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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

/* harmony default export */ __webpack_exports__["a"] = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Position", function() { return /* binding */ Position; });

// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(271);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useStableMemo.js


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
  var valueRef = Object(react["useRef"])(); // initial hook call

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
// EXTERNAL MODULE: ../node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var useIsomorphicEffect = __webpack_require__(366);

// CONCATENATED MODULE: ../node_modules/@restart/hooks/esm/useIntersectionObserver.js




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

  var _useState = Object(react["useState"])(null),
      entries = _useState[0],
      setEntry = _useState[1];

  var handler = Object(useEventCallback["a" /* default */])(callback || setEntry); // We wait for element to exist before constructing

  var observer = useStableMemo(function () {
    return root !== null && typeof IntersectionObserver !== 'undefined' && new IntersectionObserver(handler, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    });
  }, [handler, root, rootMargin, threshold && JSON.stringify(threshold)]);
  Object(useIsomorphicEffect["a" /* default */])(function () {
    if (!element || !observer) return;
    observer.observe(element);
    return function () {
      observer.unobserve(element);
    };
  }, [observer, element]);
  return callback ? undefined : entries || [];
}

/* harmony default export */ var esm_useIntersectionObserver = (useIntersectionObserver);
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/scrollParent.js + 5 modules
var esm_scrollParent = __webpack_require__(370);

// CONCATENATED MODULE: ../src/useWaypoint.tsx




let Position;

(function (Position) {
  Position[Position["BEFORE"] = 1] = "BEFORE";
  Position[Position["INSIDE"] = 2] = "INSIDE";
  Position[Position["AFTER"] = 3] = "AFTER";
})(Position || (Position = {}));

function toCss(margin) {
  if (!margin || typeof margin === 'string') return margin;
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0
  } = margin;
  return `${top}px ${right}px ${bottom}px ${left}px`;
}

function useWaypoint(element, callback, options = {}) {
  const {
    root,
    rootMargin,
    threshold,
    scrollDirection = 'vertical'
  } = options;
  const handler = Object(useEventCallback["a" /* default */])(callback);
  const prevPositionRef = Object(react["useRef"])(null);
  const findScrollParent = root === 'scrollParent';
  const scrollParent = Object(react["useMemo"])(() => element && findScrollParent && Object(esm_scrollParent["default"])(element, true) || null, [element, findScrollParent]);
  const realRoot = root === 'scrollParent' ? scrollParent : root;
  esm_useIntersectionObserver( // We change the meaning of explicit null to "not provided yet"
  // this is to allow easier synchronizing between element and roots derived
  // from it. Otherwise if the root updates later an observer will be created
  // for the document and then for the root
  element, ([entry], observer) => {
    var _entry$rootBounds, _entry$rootBounds2;

    if (!entry) return;
    const [start, end, point] = scrollDirection === 'vertical' ? ['top', 'bottom', 'y'] : ['left', 'right', 'x'];
    const {
      [point]: coord
    } = entry.boundingClientRect;
    const rootStart = ((_entry$rootBounds = entry.rootBounds) == null ? void 0 : _entry$rootBounds[start]) || 0;
    const rootEnd = ((_entry$rootBounds2 = entry.rootBounds) == null ? void 0 : _entry$rootBounds2[end]) || 0;
    let position = Position.INSIDE;

    if (entry.isIntersecting) {
      position = Position.INSIDE;
    } else if (coord > rootEnd) {
      position = Position.AFTER;
    } else if (coord < rootStart) {
      position = Position.BEFORE;
    }

    const previousPosition = prevPositionRef.current;

    if (previousPosition === position) {
      return;
    }

    handler({
      position,
      previousPosition
    }, entry, observer);
    prevPositionRef.current = position;
  }, {
    threshold,
    root: realRoot,
    rootMargin: toCss(rootMargin)
  });
}

/* harmony default export */ var src_useWaypoint = __webpack_exports__["default"] = (useWaypoint);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ scrollParent; });

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(315);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/isWindow.js
var isWindow = __webpack_require__(308);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/contains.js
var contains = __webpack_require__(291);

// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__(273);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/getScrollAccessor.js

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = Object(isWindow["a" /* default */])(node);

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
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollLeft.js

/* harmony default export */ var scrollLeft = (getscrollAccessor('pageXOffset'));
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollTop.js

/* harmony default export */ var scrollTop = (getscrollAccessor('pageYOffset'));
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/offset.js




function offset_offset(node) {
  var doc = Object(ownerDocument["a" /* default */])(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !Object(contains["a" /* default */])(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/height.js


function height(node, client) {
  var win = Object(isWindow["a" /* default */])(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset_offset(node).height;
}
// EXTERNAL MODULE: ../node_modules/dom-helpers/esm/isDocument.js
var isDocument = __webpack_require__(309);

// CONCATENATED MODULE: ../node_modules/dom-helpers/esm/scrollParent.js
/* eslint-disable no-cond-assign, no-continue */



/**
 * Find the first scrollable parent of an element.
 *
 * @param element Starting element
 * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
 */

function scrollParent(element, firstPossible) {
  var position = Object(css["a" /* default */])(element, 'position');
  var excludeStatic = position === 'absolute';
  var ownerDoc = element.ownerDocument;
  if (position === 'fixed') return ownerDoc || document; // @ts-ignore

  while ((element = element.parentNode) && !Object(isDocument["a" /* default */])(element)) {
    var isStatic = excludeStatic && Object(css["a" /* default */])(element, 'position') === 'static';
    var style = (Object(css["a" /* default */])(element, 'overflow') || '') + (Object(css["a" /* default */])(element, 'overflow-y') || '') + Object(css["a" /* default */])(element, 'overflow-x');
    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && (firstPossible || height(element) < element.scrollHeight)) {
      return element;
    }
  }

  return ownerDoc || document;
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VSYWZJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VNZXJnZVN0YXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlU3RhdGVGcm9tUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlUmVzaXplT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9XYXlwb2ludC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1dheXBvaW50RXhhbXBsZS50c3giLCJ3ZWJwYWNrOi8vLy4vZG9jcy9XYXlwb2ludC5tZHgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9vd25lckRvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVByZXZpb3VzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1vdW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvZGlzdC9lc20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQDRjL2RvY3VzYXVydXMtcHJlc2V0L2xpYi90aGVtZS9JbXBvcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlR2xvYmFsTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vb3duZXJXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oeXBoZW5hdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaHlwaGVuYXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUlzb21vcnBoaWNFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlU3RhYmxlTWVtby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VJbnRlcnNlY3Rpb25PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VzZVdheXBvaW50LnRzeCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9nZXRTY3JvbGxBY2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3Njcm9sbFRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGVpZ2h0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3Njcm9sbFBhcmVudC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmVuZGVyQ29tcG9uZW50IiwicmVmIiwiZm9udFNpemUiLCJyZW5kZXJDb21wb25lbnQiLCJvblBvc2l0aW9uQ2hhbmdlIiwib3B0aW9ucyIsInVzZUNhbGxiYWNrUmVmIiwidXNlV2F5cG9pbnQiLCJWSUVXUE9SVCIsImRlZmF1bHRNYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJTcGFjZXIiLCJob3Jpem9udGFsIiwiY2xzeCIsImxpbmVIZWlnaHQiLCJPdmVybGF5IiwiYm94U2hhZG93IiwiTWFyZ2lucyIsIm1hcmdpbnMiLCJoZWlnaHQiLCJNYXRoIiwiYWJzIiwibm9ybWFsaXplTWFyZ2lucyIsIm5leHQiLCJXYXlwb2ludEV4YW1wbGUiLCJzY3JvbGxJbnRvVmlldyIsInJvb3QiLCJhdHRhY2hSZWYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwidXNlSXNvbW9ycGhpY0VmZmVjdCIsInF1ZXJ5U2VsZWN0b3IiLCJibG9jayIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInBvc2l0aW9uIiwiUG9zaXRpb24iLCJCRUZPUkUiLCJBRlRFUiIsInRvTG93ZXJDYXNlIiwiSU5TSURFIiwiZnJvbnRNYXR0ZXIiLCJtZXRhZGF0YSIsInRvYyIsInZhbHVlIiwiaWQiLCJjaGlsZHJlbiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImFsbFZhbHVlcyIsImlzTURYQ29tcG9uZW50IiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQ29udGV4dCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwia2V5cyIsIk9iamVjdCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJrIiwidGhlbiIsInZhbHVlcyIsImZvckVhY2giLCJpIiwiY3JlYXRlQ29udGV4dCIsIl9kZWZhdWx0IiwiaW1wb3J0cyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsInNjcm9sbERpcmVjdGlvbiIsImhhbmRsZXIiLCJ1c2VFdmVudENhbGxiYWNrIiwicHJldlBvc2l0aW9uUmVmIiwidXNlUmVmIiwiZmluZFNjcm9sbFBhcmVudCIsInNjcm9sbFBhcmVudCIsInVzZU1lbW8iLCJlbGVtZW50IiwiZ2V0U2Nyb2xsUGFyZW50IiwicmVhbFJvb3QiLCJ1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNvb3JkIiwiZW50cnkiLCJyb290U3RhcnQiLCJyb290RW5kIiwicHJldmlvdXNQb3NpdGlvbiIsInJvb3RNYXJnaW4iLCJ0b0NzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywwQ0FBZSxLQUFLO0FBQ2xDOztBQUVBLGtCQUFrQiwwQ0FBZTs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsMEJBQVM7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLCtEQUFXLEU7O0FDekRRO0FBQ2M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDBDQUFlLEtBQUs7QUFDbEM7O0FBRUEsa0JBQWtCLDBDQUFlOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwwQkFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHFFQUFjLEU7O0FDckM3QixxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFN1E7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhrQztBQUNuQjtBQUNmOztBQUVBO0FBQ0EsY0FBYyxtQ0FBUTs7QUFFdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7QUNuQm9EO0FBQ3JDLGdFQUFpQixlQUFlLEU7O0FDREs7QUFDckMsK0RBQWlCLGVBQWUsRTs7QUNEYjtBQUNVO0FBQ047QUFDRjtBQUNyQixTQUFTLGFBQU07QUFDOUIsWUFBWSx3Q0FBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDLG1CQUFtQixtQ0FBUTtBQUMzQjtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOztBQ3ZCbUM7QUFDTDtBQUNmO0FBQ2YsWUFBWSxtQ0FBUztBQUNyQiw4REFBOEQsYUFBTTtBQUNwRSxDOzs7OztBQ0xBO0FBQ3dCO0FBQ007QUFDUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixpQkFBaUIsOEJBQUc7QUFDcEI7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQsNENBQTRDLHFDQUFVO0FBQ3RELG9DQUFvQyw4QkFBRztBQUN2QyxpQkFBaUIsOEJBQUcsZ0NBQWdDLDhCQUFHLGlDQUFpQyw4QkFBRztBQUMzRjs7QUFFQSx5REFBeUQsTUFBTTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6ImFzc2V0cy9qcy9mMmRlYjRjMy5jNDllMzQwZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuLyoqXG4gKiBDcmVhdGVzIGEgYHNldEludGVydmFsYCB0aGF0IGlzIHByb3Blcmx5IGNsZWFuZWQgdXAgd2hlbiBhIGNvbXBvbmVudCB1bm1vdW50ZWRcbiAqXG4gKiBgYGB0c3hcbiAqICBmdW5jdGlvbiBUaW1lcigpIHtcbiAqICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMClcbiAqICAgIHVzZUludGVydmFsKCgpID0+IHNldFRpbWVyKGkgPT4gaSArIDEpLCAxMDAwKVxuICpcbiAqICAgIHJldHVybiA8c3Bhbj57dGltZXJ9IHNlY29uZHMgcGFzdDwvc3Bhbj5cbiAqICB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZm4gYW4gZnVuY3Rpb24gcnVuIG9uIGVhY2ggaW50ZXJ2YWxcbiAqIEBwYXJhbSBtcyBUaGUgbWlsbGlzZWNvbmRzIGR1cmF0aW9uIG9mIHRoZSBpbnRlcnZhbFxuICovXG5cbmZ1bmN0aW9uIHVzZUludGVydmFsKGZuLCBtcywgcGF1c2VkLCBydW5JbW1lZGlhdGVseSkge1xuICBpZiAocGF1c2VkID09PSB2b2lkIDApIHtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChydW5JbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7XG4gICAgcnVuSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBoYW5kbGU7XG4gIHZhciBmblJlZiA9IHVzZUNvbW1pdHRlZFJlZihmbik7IC8vIHRoaXMgcmVmIGlzIG5lY2Vzc2FyeSBiL2MgdXNlRWZmZWN0IHdpbGwgc29tZXRpbWVzIG1pc3MgYSBwYXVzZWQgdG9nZ2xlXG4gIC8vIG9ycGhhbmluZyBhIHNldFRpbWVvdXQgY2hhaW4gaW4gdGhlIGFldGhlciwgc28gcmVseWluZyBvbiBpdCdzIHJlZnJlc2ggbG9naWMgaXMgbm90IHJlbGlhYmxlLlxuXG4gIHZhciBwYXVzZWRSZWYgPSB1c2VDb21taXR0ZWRSZWYocGF1c2VkKTtcblxuICB2YXIgdGljayA9IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgaWYgKHBhdXNlZFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgZm5SZWYuY3VycmVudCgpO1xuICAgIHNjaGVkdWxlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgfTtcblxuICB2YXIgc2NoZWR1bGUgPSBmdW5jdGlvbiBzY2hlZHVsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICBoYW5kbGUgPSBzZXRUaW1lb3V0KHRpY2ssIG1zKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChydW5JbW1lZGlhdGVseSkge1xuICAgICAgdGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgfTtcbiAgfSwgW3BhdXNlZCwgcnVuSW1tZWRpYXRlbHldKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJ2YWw7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNvbW1pdHRlZFJlZiBmcm9tICcuL3VzZUNvbW1pdHRlZFJlZic7XG5cbmZ1bmN0aW9uIHVzZVJhZkludGVydmFsKGZuLCBtcywgcGF1c2VkKSB7XG4gIGlmIChwYXVzZWQgPT09IHZvaWQgMCkge1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhbmRsZTtcbiAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBmblJlZiA9IHVzZUNvbW1pdHRlZFJlZihmbik7IC8vIHRoaXMgcmVmIGlzIG5lY2Vzc2FyeSBiL2MgdXNlRWZmZWN0IHdpbGwgc29tZXRpbWVzIG1pc3MgYSBwYXVzZWQgdG9nZ2xlXG4gIC8vIG9ycGhhbmluZyBhIHNldFRpbWVvdXQgY2hhaW4gaW4gdGhlIGFldGhlciwgc28gcmVseWluZyBvbiBpdCdzIHJlZnJlc2ggbG9naWMgaXMgbm90IHJlbGlhYmxlLlxuXG4gIHZhciBwYXVzZWRSZWYgPSB1c2VDb21taXR0ZWRSZWYocGF1c2VkKTtcblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGRlbHRhID0gY3VycmVudCAtIHN0YXJ0O1xuICAgIGlmIChwYXVzZWRSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKGRlbHRhID49IG1zICYmIGZuUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZuUmVmLmN1cnJlbnQoKTtcbiAgICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgfTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSYWZJbnRlcnZhbDsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogTWltaWNzIGEgUmVhY3QgY2xhc3MgY29tcG9uZW50J3Mgc3RhdGUgbW9kZWwsIG9mIGhhdmluZyBhIHNpbmdsZSB1bmlmaWVkXG4gKiBgc3RhdGVgIG9iamVjdCBhbmQgYW4gdXBkYXRlciB0aGF0IG1lcmdlcyB1cGRhdGVzIGludG8gdGhlIGV4aXN0aW5nIHN0YXRlLCBhc1xuICogb3Bwb3NlZCB0byByZXBsYWNpbmcgaXQuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlTWVyZ2VTdGF0ZSh7IG5hbWU6ICdCZXRzeScsIGFnZTogMjQgfSlcbiAqXG4gKiBzZXRTdGF0ZSh7IG5hbWU6ICdKb2hhbicgfSkgLy8geyBuYW1lOiAnSm9oYW4nLCBhZ2U6IDI0IH1cbiAqXG4gKiBzZXRTdGF0ZShzdGF0ZSA9PiAoeyBhZ2U6IHN0YXRlLmFnZSArIDEwIH0pKSAvLyB7IG5hbWU6ICdKb2hhbicsIGFnZTogMzQgfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVyZ2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB1cGRhdGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUgPT09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHVwZGF0ZShzdGF0ZSk7XG4gICAgICAgIHJldHVybiBuZXh0U3RhdGUgPT0gbnVsbCA/IHN0YXRlIDogX2V4dGVuZHMoe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB1cGRhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2V0U3RhdGVdKTtcbiAgcmV0dXJuIFtzdGF0ZSwgdXBkYXRlcl07XG59IiwiaW1wb3J0IHVzZU1lcmdlU3RhdGUgZnJvbSAnLi91c2VNZXJnZVN0YXRlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1lcmdlU3RhdGVGcm9tUHJvcHMocHJvcHMsIGdEU0ZQLCBpbml0aWFsU3RhdGUpIHtcbiAgdmFyIF91c2VNZXJnZVN0YXRlID0gdXNlTWVyZ2VTdGF0ZShpbml0aWFsU3RhdGUpLFxuICAgICAgc3RhdGUgPSBfdXNlTWVyZ2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZU1lcmdlU3RhdGVbMV07XG5cbiAgdmFyIG5leHRTdGF0ZSA9IGdEU0ZQKHByb3BzLCBzdGF0ZSk7XG4gIGlmIChuZXh0U3RhdGUgIT09IG51bGwpIHNldFN0YXRlKG5leHRTdGF0ZSk7XG4gIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXTtcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEZldGNoIGFuZCBsb2FkIGFuIGltYWdlIGZvciBwcm9ncmFtYXRpYyB1c2Ugc3VjaCBhcyBpbiBhIGA8Y2FudmFzPmAgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gaW1hZ2VPclVybCBUaGUgYEh0bWxJbWFnZUVsZW1lbnRgIG9yIGltYWdlIHVybCB0byBsb2FkXG4gKiBAcGFyYW0gY3Jvc3NPcmlnaW4gVGhlIGBjcm9zc29yaWdpbmAgYXR0cmlidXRlIHRvIHNldFxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB7IGltYWdlLCBlcnJvciB9ID0gdXNlSW1hZ2UoJy9zdGF0aWMva2l0dGVucy5wbmcnKVxuICogY29uc3QgcmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PigpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgY29uc3QgY3R4ID0gcmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICpcbiAqICAgaWYgKGltYWdlKSB7XG4gKiAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMClcbiAqICAgfVxuICogfSwgW3JlZiwgaW1hZ2VdKVxuICpcbiAqIHJldHVybiAoXG4gKiAgIDw+XG4gKiAgICAge2Vycm9yICYmIFwidGhlcmUgd2FzIGEgcHJvYmxlbSBsb2FkaW5nIHRoZSBpbWFnZVwifVxuICogICAgIDxjYW52YXMgcmVmPXtyZWZ9IC8+XG4gKiAgIDwvPlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUltYWdlKGltYWdlT3JVcmwsIGNyb3NzT3JpZ2luKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgaW1hZ2U6IG51bGwsXG4gICAgZXJyb3I6IG51bGxcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpbWFnZU9yVXJsKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBpbWFnZTtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2VPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpZiAoY3Jvc3NPcmlnaW4pIGltYWdlLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZU9yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IGltYWdlT3JVcmw7XG5cbiAgICAgIGlmIChpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsSGVpZ2h0ID4gMCkge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgfTtcbiAgfSwgW2ltYWdlT3JVcmwsIGNyb3NzT3JpZ2luXSk7XG4gIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljRWZmZWN0JztcbnZhciB0YXJnZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHJlc2l6ZU9ic2VydmVyO1xuXG5mdW5jdGlvbiBnZXRSZXNpemVPYnNlcnZlcigpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ25cbiAgcmV0dXJuIHJlc2l6ZU9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXIgfHwgbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGFyZ2V0TWFwLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIoZW50cnkuY29udGVudFJlY3QpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8qKlxuICogRWZmaWNpZW50bHkgb2JzZXJ2ZSBzaXplIGNoYW5nZXMgb24gYW4gZWxlbWVudC4gRGVwZW5kcyBvbiB0aGUgYFJlc2l6ZU9ic2VydmVyYCBhcGksXG4gKiBhbmQgcG9seWZpbGxzIGFyZSBuZWVkZWQgaW4gb2xkZXIgYnJvd3NlcnMuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtyZWYsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZihudWxsKTtcbiAqXG4gKiBjb25zdCByZWN0ID0gdXNlUmVzaXplT2JzZXJ2ZXIocmVmKTtcbiAqXG4gKiByZXR1cm4gKFxuICogIDxkaXYgcmVmPXthdHRhY2hSZWZ9PlxuICogICAge0pTT04uc3RyaW5naWZ5KHJlY3QpfVxuICogIDwvZGl2PlxuICogKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmVcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKGVsZW1lbnQpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgcmVjdCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFJlY3QgPSBfdXNlU3RhdGVbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICBnZXRSZXNpemVPYnNlcnZlcigpLm9ic2VydmUoZWxlbWVudCk7XG4gICAgc2V0UmVjdChlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB0YXJnZXRNYXAuc2V0KGVsZW1lbnQsIGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICBzZXRSZWN0KHJlY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0YXJnZXRNYXAuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtlbGVtZW50XSk7XG4gIHJldHVybiByZWN0O1xufSIsImltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICcuL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgdXNlR2xvYmFsTGlzdGVuZXIgZnJvbSAnLi91c2VHbG9iYWxMaXN0ZW5lcic7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5pbXBvcnQgdXNlUmFmSW50ZXJ2YWwgZnJvbSAnLi91c2VSYWZJbnRlcnZhbCc7XG5pbXBvcnQgdXNlTWVyZ2VTdGF0ZSBmcm9tICcuL3VzZU1lcmdlU3RhdGUnO1xuaW1wb3J0IHVzZU1lcmdlU3RhdGVGcm9tUHJvcHMgZnJvbSAnLi91c2VNZXJnZVN0YXRlRnJvbVByb3BzJztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnLi91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlSW1hZ2UgZnJvbSAnLi91c2VJbWFnZSc7XG5pbXBvcnQgdXNlUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi91c2VSZXNpemVPYnNlcnZlcic7XG5leHBvcnQgeyB1c2VDYWxsYmFja1JlZiwgdXNlQ29tbWl0dGVkUmVmLCB1c2VFdmVudENhbGxiYWNrLCB1c2VFdmVudExpc3RlbmVyLCB1c2VHbG9iYWxMaXN0ZW5lciwgdXNlSW50ZXJ2YWwsIHVzZVJhZkludGVydmFsLCB1c2VNZXJnZVN0YXRlLCB1c2VNZXJnZVN0YXRlRnJvbVByb3BzLCB1c2VNb3VudGVkLCB1c2VQcmV2aW91cywgdXNlSW1hZ2UsIHVzZVJlc2l6ZU9ic2VydmVyIH07IiwiaW1wb3J0IHVzZUNhbGxiYWNrUmVmIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVdheXBvaW50LCB7XG4gIFdheXBvaW50T3B0aW9ucyxcbiAgV2F5cG9pbnRFdmVudCxcbiAgUG9zaXRpb24sXG59IGZyb20gJy4vdXNlV2F5cG9pbnQnO1xuXG5leHBvcnQgeyBQb3NpdGlvbiB9O1xuZXhwb3J0IHR5cGUgeyBXYXlwb2ludEV2ZW50IH07XG5cbmNvbnN0IGRlZmF1bHRSZW5kZXJDb21wb25lbnQgPSAocmVmOiBSZWFjdC5SZWZDYWxsYmFjazxhbnk+KSA9PiAoXG4gIDxzcGFuIHJlZj17cmVmfSBzdHlsZT17eyBmb250U2l6ZTogMCB9fSAvPlxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBXYXlwb2ludFByb3BzIGV4dGVuZHMgV2F5cG9pbnRPcHRpb25zIHtcbiAgcmVuZGVyQ29tcG9uZW50PzogKHJlZjogUmVhY3QuUmVmQ2FsbGJhY2s8YW55PikgPT4gUmVhY3QuUmVhY3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIHdheXBvaW50J3MgcG9zaXRpb24gaXMgdXBkYXRlZC4gVGhpcyBnZW5lcmFsbHlcbiAgICogZmlyZXMgYXMgYSB3YXlwb2ludCBlbnRlcnMgb3IgZXhpdHMgdGhlIHZpZXdwb3J0IGJ1dCB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAqIG9uIG1vdW50LlxuICAgKi9cbiAgb25Qb3NpdGlvbkNoYW5nZTogKFxuICAgIGRldGFpbHM6IFdheXBvaW50RXZlbnQsXG4gICAgZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnksXG4gICkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHRyYWNrcyB3aGVuIGl0IGVudGVycyBvciBsZWF2ZXMgdGhlIHZpZXdwb3J0LiBJbXBsZW1lbnRlZFxuICogdXNpbmcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsIHBvbHlmaWxsIG1heSBiZSByZXF1aXJlZCBmb3Igb2xkZXIgYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIFdheXBvaW50KHtcbiAgcmVuZGVyQ29tcG9uZW50ID0gZGVmYXVsdFJlbmRlckNvbXBvbmVudCxcbiAgb25Qb3NpdGlvbkNoYW5nZSxcbiAgLi4ub3B0aW9uc1xufTogV2F5cG9pbnRQcm9wcykge1xuICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VDYWxsYmFja1JlZjxFbGVtZW50PigpO1xuXG4gIHVzZVdheXBvaW50KGVsZW1lbnQsIG9uUG9zaXRpb25DaGFuZ2UsIG9wdGlvbnMpO1xuXG4gIHJldHVybiByZW5kZXJDb21wb25lbnQoc2V0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdheXBvaW50O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tICdAcmVzdGFydC9ob29rcyc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0VmZmVjdCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VJc29tb3JwaGljRWZmZWN0JztcbmltcG9ydCBXYXlwb2ludCwgeyBQb3NpdGlvbiB9IGZyb20gJ0ByZXN0YXJ0L3VpL1dheXBvaW50JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBob3Jpem9udGFsPzogYm9vbGVhbjtcbiAgc2Nyb2xsSW50b1ZpZXc/OiBib29sZWFuO1xuICBtYXJnaW5zPzogYW55O1xufVxuXG5jb25zdCBWSUVXUE9SVCA9IDYwO1xuY29uc3QgZGVmYXVsdE1hcmdpbiA9IHtcbiAgdG9wOiAtVklFV1BPUlQsXG4gIHJpZ2h0OiAtVklFV1BPUlQsXG4gIGJvdHRvbTogLVZJRVdQT1JULFxuICBsZWZ0OiAtVklFV1BPUlQsXG59O1xuZnVuY3Rpb24gU3BhY2VyKHsgaG9yaXpvbnRhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC00eGwnLFxuICAgICAgICBob3Jpem9udGFsICYmICdtaW4tdy1bMzAlXScsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcxMDBweCcgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGhvcml6b250YWwgJiYgJ3RyYW5zZm9ybSAtcm90YXRlLTkwJyl9XG4gICAgICA+XG4gICAgICAgIOKWvFxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBPdmVybGF5KHsgaG9yaXpvbnRhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhYnNvbHV0ZSBib3JkZXItYmxhY2sgYm9yZGVyLTIgaW5zZXQtMCcpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgJHtWSUVXUE9SVH1weCByZ2JhKDAsIDAsIDAsIC40KWAsXG4gICAgICAgIC4uLihob3Jpem9udGFsXG4gICAgICAgICAgPyB7IGxlZnQ6IGAke1ZJRVdQT1JUfXB4YCwgcmlnaHQ6IGAke1ZJRVdQT1JUfXB4YCB9XG4gICAgICAgICAgOiB7IHRvcDogYCR7VklFV1BPUlR9cHhgLCBib3R0b206IGAke1ZJRVdQT1JUfXB4YCB9KSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFyZ2lucyh7IG1hcmdpbnMgfSkge1xuICBjb25zdCB7IHRvcCwgYm90dG9tIH0gPSBtYXJnaW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9wICE9IG51bGwgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGJnLXllbGxvdy0yMDAgYmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRvcDogYCR7dG9wIDwgMCA/IFZJRVdQT1JUIDogVklFV1BPUlQgLSB0b3B9cHhgLFxuICAgICAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRvcCksXG4gICAgICAgICAgICByaWdodDogMTcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Ym90dG9tICE9IG51bGwgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGJnLXllbGxvdy0yMDAgYmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tOiBgJHtib3R0b20gPCAwID8gVklFV1BPUlQgOiBWSUVXUE9SVCAtIGJvdHRvbX1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGJvdHRvbSksXG4gICAgICAgICAgICByaWdodDogMTcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcmdpbnMobWFyZ2lucykge1xuICBpZiAoIW1hcmdpbnMpIHJldHVybiBkZWZhdWx0TWFyZ2luO1xuICBjb25zdCBuZXh0ID0geyAuLi5kZWZhdWx0TWFyZ2luIH07XG4gIGlmIChtYXJnaW5zLnRvcCAhPSBudWxsKSBuZXh0LnRvcCArPSBtYXJnaW5zLnRvcDtcbiAgaWYgKG1hcmdpbnMuYm90dG9tICE9IG51bGwpIG5leHQuYm90dG9tICs9IG1hcmdpbnMuYm90dG9tO1xuXG4gIHJldHVybiBuZXh0O1xufVxuZnVuY3Rpb24gV2F5cG9pbnRFeGFtcGxlKHsgaG9yaXpvbnRhbCwgc2Nyb2xsSW50b1ZpZXcsIG1hcmdpbnMgfTogUHJvcHMpIHtcbiAgY29uc3QgW3Jvb3QsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUlzb21vcnBoaWNFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsSW50b1ZpZXcgfHwgIXJvb3QpIHJldHVybjtcblxuICAgIHJvb3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZG9jcy1leGFtcGxlLXdheXBvaW50JylcbiAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnY2VudGVyJyB9KTtcbiAgICAvLyByb290LnNjcm9sbFRvcCA9IHJvb3Quc2Nyb2xsSGVpZ2h0IC8gMjtcbiAgfSwgW3Jvb3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG1iLTRcIj5cbiAgICAgIHttZXNzYWdlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICdiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgcC00IGxlZnQtMS8yIHRvcC0xLzIgdGV4dC1jZW50ZXIgei0xMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGFic29sdXRlIHctNjQnLFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPE92ZXJsYXkgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgIHttYXJnaW5zICYmIDxNYXJnaW5zIG1hcmdpbnM9e21hcmdpbnN9IC8+fVxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2F0dGFjaFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICdmbGV4IHJlbGF0aXZlIG92ZXJmbG93LWF1dG8gYm9yZGVyIHJvdW5kZWQnLFxuICAgICAgICAgICFob3Jpem9udGFsICYmICdmbGV4LWNvbCcsXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMjAwLCBtYXhIZWlnaHQ6IDQwMCB9fVxuICAgICAgPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFdheXBvaW50XG4gICAgICAgICAgcm9vdD1cInNjcm9sbFBhcmVudFwiXG4gICAgICAgICAgcm9vdE1hcmdpbj17bm9ybWFsaXplTWFyZ2lucyhtYXJnaW5zKX1cbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb249e2hvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnfVxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudD17KHJlZikgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICdkb2NzLWV4YW1wbGUtd2F5cG9pbnQnLFxuICAgICAgICAgICAgICAgICdib3JkZXItZGFzaGVkIGJvcmRlci1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsID8gJ2JvcmRlci1sLTQnIDogJ2JvcmRlci10LTQnLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9eyh7IHBvc2l0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uQkVGT1JFIHx8IHBvc2l0aW9uID09PSBQb3NpdGlvbi5BRlRFUikge1xuICAgICAgICAgICAgICBzZXRNZXNzYWdlKGBFeGl0ZWQgKCR7UG9zaXRpb25bcG9zaXRpb25dLnRvTG93ZXJDYXNlKCl9KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSBQb3NpdGlvbi5JTlNJREUpIHtcbiAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnRW50ZXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgICA8U3BhY2VyIGhvcml6b250YWw9e2hvcml6b250YWx9IC8+XG4gICAgICAgIDxTcGFjZXIgaG9yaXpvbnRhbD17aG9yaXpvbnRhbH0gLz5cbiAgICAgICAgPFNwYWNlciBob3Jpem9udGFsPXtob3Jpem9udGFsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdheXBvaW50RXhhbXBsZTtcbiIsIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0JztcblxuICBleHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiV2F5cG9pbnRcIixcbiAgXCJpZFwiOiBcIldheXBvaW50XCIsXG4gIFwiaXNEb2NzSG9tZVBhZ2VcIjogZmFsc2UsXG4gIFwidGl0bGVcIjogXCJXYXlwb2ludFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBjb21wb25lbnQgKGFuZCByZWxhdGVkIGhvb2spIHRvIHByb3ZpZGUgYSBoaWdoIGxldmVsIGludGVyZmFjZVwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvV2F5cG9pbnQubWR4XCIsXG4gIFwic2x1Z1wiOiBcIi9XYXlwb2ludFwiLFxuICBcInBlcm1hbGlua1wiOiBcIi91aS9XYXlwb2ludFwiLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwic2lkZWJhclwiOiBcImRvY3NcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlBvcnRhbFwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL1BvcnRhbFwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZVBvcHBlclwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3VpL3VzZVBvcHBlclwiXG4gIH1cbn07XG4gIC8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgSW1wb3J0Q29udGV4dCwgeyBhbGxWYWx1ZXMgfSBmcm9tIFwiQHRoZW1lL0ltcG9ydENvbnRleHRcIjtcbmltcG9ydCBXYXlwb2ludEV4YW1wbGUgZnJvbSBcIi4uL3NyYy9XYXlwb2ludEV4YW1wbGVcIjtcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0hvdyBpdCB3b3JrcycsXG4gIGlkOiAnaG93LWl0LXdvcmtzJyxcbiAgY2hpbGRyZW46IFtdXG59LCB7XG4gIHZhbHVlOiAnU2Nyb2xsIGRpcmVjdGlvbicsXG4gIGlkOiAnc2Nyb2xsLWRpcmVjdGlvbicsXG4gIGNoaWxkcmVuOiBbXVxufSwge1xuICB2YWx1ZTogJ1NwZWNpZnlpbmcgdGhlIHNjcm9sbCBwYXJlbnQnLFxuICBpZDogJ3NwZWNpZnlpbmctdGhlLXNjcm9sbC1wYXJlbnQnLFxuICBjaGlsZHJlbjogW11cbn0sIHtcbiAgdmFsdWU6ICdNYXJnaW5zJyxcbiAgaWQ6ICdtYXJnaW5zJyxcbiAgY2hpbGRyZW46IFtdXG59LCB7XG4gIHZhbHVlOiAnPGNvZGU+dXNlV2F5cG9pbnQ8L2NvZGU+JyxcbiAgaWQ6ICd1c2V3YXlwb2ludCcsXG4gIGNoaWxkcmVuOiBbXVxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPHA+e2BBIGNvbXBvbmVudCAoYW5kIHJlbGF0ZWQgaG9vaykgdG8gcHJvdmlkZSBhIGhpZ2ggbGV2ZWwgaW50ZXJmYWNlXG5vdmVyIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uX09ic2VydmVyX0FQSVwiXG4gICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgfTwvaW5saW5lQ29kZT48L2E+e2BcbmRlc2lnbmVkIHRvIGRldGVjdCB3aGVuIGEgY29tcG9uZW50IGVudGVycyBhbmQgZXhpdHMgYSB2aWV3cG9ydC5gfTwvcD5cbiAgICA8cD48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgV2F5cG9pbnRgfTwvaW5saW5lQ29kZT57YCBwcm92aWRlcyBhIGdvb2QgYmFzaXMgZm9yIGJ1aWxkaW5nIG90aGVyIGNvbXBvbmVudHMgbGlrZSBpbmZpbml0ZSBsaXN0cyxcblwic2Nyb2xsIHNweVwiIHN0eWxlIG5hdmlnYXRpb24sIGxhenkgbG9hZGluZyBpbWFnZXMsIGFuZCBtb3JlLmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImhvdy1pdC13b3Jrc1wiXG4gICAgfX0+e2BIb3cgaXQgd29ya3NgfTwvaDI+XG4gICAgPHA+e2BXYXlwb2ludCByZW5kZXJzIGEgXCJzZW50aW5lbFwiIGVsZW1lbnQgdGhhdCB5b3UgcGxhY2UgaW4gYSBzY3JvbGxhYmxlXG5hcmVhLiBVc2luZyBhbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BJbnRlcnNlY3Rpb25PYnNlcnZlcmB9PC9pbmxpbmVDb2RlPntgLCB0aGUgd2F5cG9pbnQgZmlyZXMgYSBjYWxsYmFjayB3aGVuIGl0XG5cImludGVyc2VjdHNcIiB3aXRoIHRoZSB2aXNpYmxlIGFyZWEgb2YgdGhlIHNjcm9sbCB2aWV3LiBXYXlwb2ludCB3aWxsIGZpcmUgYSBjYWxsYmFja1xud2hlbiB0aGlzIGhhcHBlbnMgd2l0aCBkZXRhaWxzIGFib3V0IHdoZXJlIHRoZSB3YXlwb2ludCBpcyBpbiByZWxhdGlvbiB0byB0aGUgdmlzaWJsZVxuYXJlYS5gfTwvcD5cbiAgICA8cD57YFRoZSBleGFtcGxlIGJlbG93IGFkZHMgdmlzaWJsZSBzdHlsaW5nIHRvIHdheXBvaW50IGZvciBjbGFyaXR5LiBCeSBkZWZhdWx0IGFcbndheXBvaW50IHJlbmRlcnMgYW4gaW52aXNpYmxlIHplcm8taGVpZ2h0IGVsZW1lbnQuYH08L3A+XG4gICAgPFdheXBvaW50RXhhbXBsZSBzY3JvbGxJbnRvVmlldyBtZHhUeXBlPVwiV2F5cG9pbnRFeGFtcGxlXCIgLz5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzY3JvbGwtZGlyZWN0aW9uXCJcbiAgICB9fT57YFNjcm9sbCBkaXJlY3Rpb25gfTwvaDI+XG4gICAgPHA+e2BGb3Igc2ltcGxpY2l0eSwgc2Nyb2xsIGRldGVjdGlvbiB3aXRoIHdheXBvaW50cyBpcyBsaW1pdGVkIHRvIGEgc2luZ2xlIGRpcmVjdGlvbiBhdCBvbmUgdGltZS5cbkJ5IGRlZmF1bHQgdGhhdCBkaXJlY3Rpb24gaXMgXCJ2ZXJ0aWNhbFwiLCBidXQgY2FuIGNvbmZpZ3VyZWQgdG8gXCJob3Jpem9udGFsXCIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c3hcIlxuICAgICAgfX0+e2A8V2F5cG9pbnQgc2Nyb2xsRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIC8+XG5gfTwvY29kZT48L3ByZT5cbiAgICA8V2F5cG9pbnRFeGFtcGxlIGhvcml6b250YWwgbWR4VHlwZT1cIldheXBvaW50RXhhbXBsZVwiIC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic3BlY2lmeWluZy10aGUtc2Nyb2xsLXBhcmVudFwiXG4gICAgfX0+e2BTcGVjaWZ5aW5nIHRoZSBzY3JvbGwgcGFyZW50YH08L2gyPlxuICAgIDxwPntgQnkgZGVmYXVsdCB3YXlwb2ludCBvYnNlcnZlcyBzY3JvbGxpbmcgb24gdGhlIGRldmljZSB2aWV3cG9ydCwgZ2VuZXJhbGx5IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3dgfTwvaW5saW5lQ29kZT57YC5cbllvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgc3BlY2lmaWMgZWxlbWVudCBhcyB0aGUgcm9vdCBieSBwcm92aWRpbmcgYSBET00gZWxlbWVudFxudG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJvb3RgfTwvaW5saW5lQ29kZT57YCBwcm9wLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgZnVuY3Rpb24gU2Nyb2xsQXJlYSh7IGl0ZW1zLCBvblBvc2l0aW9uQ2hhbmdlIH0pIHtcbiAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGU8SFRNTERpdkVsZW1lbnQ+KFxuICAgIG51bGxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzZXRFbGVtZW50fSBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICB7aXRlbXN9XG4gICAgICA8V2F5cG9pbnRcbiAgICAgICAgcm9vdD17ZWxlbWVudH1cbiAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17b25Qb3NpdGlvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJtYXJnaW5zXCJcbiAgICB9fT57YE1hcmdpbnNgfTwvaDI+XG4gICAgPHA+e2BZb3UgY2FuIGFkanVzdCB0aGUgZnVuY3Rpb25hbCBzaGFwZSBvZiB0aGUgdmlld3BvcnQgYnkgcHJvdmlkaW5nIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcm9vdE1hcmdpbmB9PC9pbmxpbmVDb2RlPntgXG5wcm9wLCB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIHVuZGVybHlpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgfTwvaW5saW5lQ29kZT57YC4gQXMgYSBjb252ZW5pZW5jZSxcbldheXBvaW50IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggaW5zZXQgcHJvcGVydGllcyBhcyB3ZWxsIGFzIGEgdmFsaWQgQ1NTIG1hcmdpbiBwcm9wZXJ0eVxudmFsdWUuYH08L3A+XG4gICAgPHA+e2BQb3NpdGl2ZSBtYXJnaW5zIGdyb3cgdGhlIG92ZXJhbGwgc2l6ZSBvZiB0aGUgdmlld3BvcnQgY2F1c2luZyB3YXlwb2ludHMgdG8gZW50ZXJcbmJlZm9yZSB0aGV5IGFyZSBhY3R1YWxseSBpbiB2aWV3LiBOZWdhdGl2ZSB2YWx1ZXMgc2hyaW5rIHRoZSB2aWV3cG9ydCwgYW5kIGRlbGF5c1xudGhlIHdheXBvaW50IGZyb20gZW50ZXJpbmcgYnkgdGhlIHNwZWNpZmllZCBwaXhlbCBhbW91bnQuIE1hcmdpbnMgYXJlIGlsbHVzdHJhdGVkXG5ieSB0aGUgeWVsbG93IGJsb2NrcyBpbiB0aGUgZXhhbXBsZSBiZWxvdy5gfTwvcD5cbiAgICA8cD57YEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBwb3NpdGl2ZSBtYXJnaW5zOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgPFdheXBvaW50IHJvb3RNYXJnaW49e3sgdG9wOiAyMCwgYm90dG9tOiAyMCB9fSAvPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPFdheXBvaW50RXhhbXBsZSBtYXJnaW5zPXt7XG4gICAgICB0b3A6IDIwLFxuICAgICAgYm90dG9tOiAyMFxuICAgIH19IG1keFR5cGU9XCJXYXlwb2ludEV4YW1wbGVcIiAvPlxuICAgIDxwPkFuZCB0aGUgZWZmZWN0IHdpdGggbmVnYXRpdmUgbWFyZ2luczwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiXG4gICAgICB9fT57YDxXYXlwb2ludCByb290TWFyZ2luPXt7IHRvcDogLTIwLCBib3R0b206IC0yMCB9fSAvPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPFdheXBvaW50RXhhbXBsZSBtYXJnaW5zPXt7XG4gICAgICB0b3A6IC0yMCxcbiAgICAgIGJvdHRvbTogLTIwXG4gICAgfX0gbWR4VHlwZT1cIldheXBvaW50RXhhbXBsZVwiIC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNld2F5cG9pbnRcIlxuICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJoMlwiPntgdXNlV2F5cG9pbnRgfTwvaW5saW5lQ29kZT48L2gyPlxuICAgIDxwPntgVGhlIHVuZGVybHlpbmcgaG9vayBwb3dlcmluZyB0aGUgV2F5cG9pbnQgY29tcG9uZW50LiBMZXZlcmFnZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1c2VXYXlwb2ludGB9PC9pbmxpbmVDb2RlPntgXG50byB0dXJuIGFueSBjb21wb25lbnQgaW50byBhIHdheXBvaW50LiBVc2luZyB0aGUgaG9vayBkaXJlY3RseSBpcyBoZWxwZnVsXG53aGVuIHlvdSB3YW50IGFuIGluZGl2aWR1YWwgY29tcG9uZW50IHRvIHJlc3BvbmRgfTwvcD5cbiAgICA8SW1wb3J0Q29udGV4dCBpbXBvcnRzPXsoKSA9PiBhbGxWYWx1ZXMoe1xuICAgICAgXCJkb20taGVscGVycy9zY3JvbGxQYXJlbnRcIjogaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJleGFtcGxlcy0tZG9jcy1XYXlwb2ludC5tZHhcIiAqL1xuICAgICAgJ2RvbS1oZWxwZXJzL3Njcm9sbFBhcmVudCcpLFxuICAgICAgXCJAcmVzdGFydC91aS91c2VXYXlwb2ludFwiOiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4YW1wbGVzLS1kb2NzLVdheXBvaW50Lm1keFwiICovXG4gICAgICAnQHJlc3RhcnQvdWkvdXNlV2F5cG9pbnQnKVxuICAgIH0pfSBtZHhUeXBlPVwiSW1wb3J0Q29udGV4dFwiPlxuICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmVcIixcbiAgICAgICAgICBcImxpdmVcIjogdHJ1ZVxuICAgICAgICB9fT57YGltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcImRvbS1oZWxwZXJzL3Njcm9sbFBhcmVudFwiO1xuaW1wb3J0IHVzZVdheXBvaW50LCB7XG4gIFBvc2l0aW9uLFxufSBmcm9tIFwiQHJlc3RhcnQvdWkvdXNlV2F5cG9pbnRcIjtcblxuZnVuY3Rpb24gTGF6eUltYWdlKHsgc3JjIH0pIHtcbiAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hhc0JlZW5TZWVuLCBzZXRTZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3YXlwb2ludFJlZiA9IHVzZVdheXBvaW50KFxuICAgIGVsZW1lbnQsXG4gICAgKHsgcG9zaXRpb24sIHByZXZpb3VzUG9zaXRpb24gfSwgZW50cnksIG9ic2VydmVyKSA9PiB7XG4gICAgICBpZiAoaGFzQmVlblNlZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRTZWVuKHBvc2l0aW9uID09PSBQb3NpdGlvbi5JTlNJREUpO1xuICAgIH0sXG4gICAge1xuICAgICAgcm9vdDogXCJzY3JvbGxQYXJlbnRcIixcbiAgICAgIHNjcm9sbERpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICByb290TWFyZ2luOiB7IHJpZ2h0OiAtODAgfSxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICByZWY9e2F0dGFjaFJlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogMTYwLFxuICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgfX1cbiAgICAgIC8vIHN3YXAgb3V0IGZvciB0aGUgcmVhbCBpbWFnZSB3aGVuIGl0J3MgYmVlbiBzZWVuXG4gICAgICBzcmM9e2hhc0JlZW5TZWVuID8gc3JjIDogXCJcIn1cbiAgICAvPlxuICApO1xufVxuXG48ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTRcIj5cbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvcmRlci1ibGFjayBib3JkZXItMiBwb2ludGVyLWV2ZW50cy1ub25lIFwiXG4gICAgc3R5bGU9e3sgdG9wOiAwLCBib3R0b206IDQwLCBsZWZ0OiAwLCByaWdodDogODAgfX1cbiAgLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LXNjcm9sbCBoLTU2IGdyaWQgZ3JpZC1mbG93LWNvbCBhdXRvLWNvbHMtWzE2MHB4XVwiPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8xNjAvMTYwXCIgLz5cbiAgICA8TGF6eUltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xNTMvMTYwLzE2MFwiIC8+XG4gICAgPExhenlJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTI1LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzc0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzUwLzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzM0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEyLzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY0LzE2MC8xNjBcIiAvPlxuICAgIDxMYXp5SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzE4LzE2MC8xNjBcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PjtcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvSW1wb3J0Q29udGV4dD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuICAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VDb21taXR0ZWRSZWYgZnJvbSAnLi91c2VDb21taXR0ZWRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlQ29tbWl0dGVkUmVmKGZuKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuICB9LCBbcmVmXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGhvb2sgYXJvdW5kIGB1c2VTdGF0ZWAgZGVzaWduZWQgdG8gYmUgcGFpcmVkIHdpdGhcbiAqIHRoZSBjb21wb25lbnQgW2NhbGxiYWNrIHJlZl0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzKSBhcGkuXG4gKiBDYWxsYmFjayByZWZzIGFyZSB1c2VmdWwgb3ZlciBgdXNlUmVmKClgIHdoZW4geW91IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVmIGJlaW5nIHNldFxuICogaW5zdGVhZCBvZiBsYXppbHkgYWNjZXNzaW5nIGl0IGluIGFuIGVmZmVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGlmICghZWxlbWVudCkgcmV0dXJuXG4gKlxuICogICBjb25zdCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoZWxlbWVudClcbiAqXG4gKiAgIHJldHVybiAoKSA9PiB7XG4gKiAgICAgY2FsZW5kYXIuZGVzdHJveSgpXG4gKiAgIH1cbiAqIH0sIFtlbGVtZW50XSlcbiAqXG4gKiByZXR1cm4gPGRpdiByZWY9e2F0dGFjaFJlZn0gLz5cbiAqIGBgYFxuICpcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoKSB7XG4gIHJldHVybiB1c2VTdGF0ZShudWxsKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogU3RvcmUgdGhlIGxhc3Qgb2Ygc29tZSB2YWx1ZS4gVHJhY2tlZCB2aWEgYSBgUmVmYCBvbmx5IHVwZGF0aW5nIGl0XG4gKiBhZnRlciB0aGUgY29tcG9uZW50IHJlbmRlcnMuXG4gKlxuICogSGVscGZ1bCBpZiB5b3UgbmVlZCB0byBjb21wYXJlIGEgcHJvcCB2YWx1ZSB0byBpdCdzIHByZXZpb3VzIHZhbHVlIGR1cmluZyByZW5kZXIuXG4gKlxuICogYGBgdHNcbiAqIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xuICogICBjb25zdCBsYXN0UHJvcHMgPSB1c2VQcmV2aW91cyhwcm9wcylcbiAqXG4gKiAgIGlmIChsYXN0UHJvcHMuZm9vICE9PSBwcm9wcy5mb28pXG4gKiAgICAgcmVzZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcy5mb28pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHRyYWNrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufSIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBUcmFjayB3aGV0aGVyIGEgY29tcG9uZW50IGlzIGN1cnJlbnQgbW91bnRlZC4gR2VuZXJhbGx5IGxlc3MgcHJlZmVyYWJsZSB0aGFuXG4gKiBwcm9wZXJsbHkgY2FuY2VsaW5nIGVmZmVjdHMgc28gdGhleSBkb24ndCBydW4gYWZ0ZXIgYSBjb21wb25lbnQgaXMgdW5tb3VudGVkLFxuICogYnV0IGhlbHBmdWwgaW4gY2FzZXMgd2hlcmUgdGhhdCBpc24ndCBmZWFzaWJsZSwgc3VjaCBhcyBhIGBQcm9taXNlYCByZXNvbHV0aW9uLlxuICpcbiAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGlzTW91bnRlZCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gKiBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkKClcbiAqXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xuICogICBmZXRjaGRhdGEoKS50aGVuKChuZXdEYXRhKSA9PiB7XG4gKiAgICAgIGlmIChpc01vdW50ZWQoKSkge1xuICogICAgICAgIHNldERhdGEobmV3RGF0YSk7XG4gKiAgICAgIH1cbiAqICAgfSlcbiAqIH0pXG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNb3VudGVkKCkge1xuICB2YXIgbW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZVJlZihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1vdW50ZWQuY3VycmVudDtcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGlzTW91bnRlZC5jdXJyZW50O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UsIG5vLWNvbmQtYXNzaWduICovXG4vLyBIVE1MIERPTSBhbmQgU1ZHIERPTSBtYXkgaGF2ZSBkaWZmZXJlbnQgc3VwcG9ydCBsZXZlbHMsXG4vLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIG9uIGNvbnRleHQgaW5zdGVhZCBvZiBhIGRvY3VtZW50IHJvb3QgZWxlbWVudC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKGNvbnRleHQsIG5vZGUpIHtcbiAgaWYgKGNvbnRleHQuY29udGFpbnMpIHJldHVybiBjb250ZXh0LmNvbnRhaW5zKG5vZGUpO1xuICBpZiAoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikgcmV0dXJuIGNvbnRleHQgPT09IG5vZGUgfHwgISEoY29udGV4dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlKSAmIDE2KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIE1EWENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgd2l0aE1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB3aXRoTURYQ29tcG9uZW50cyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudHM6IGFsbENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHVzZU1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgdmFyIGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KTtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSBjb250ZXh0Q29tcG9uZW50cztcblxuICBpZiAoY29tcG9uZW50cykge1xuICAgIGFsbENvbXBvbmVudHMgPSBpc0Z1bmN0aW9uKGNvbXBvbmVudHMpID8gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cykgOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGV4dENvbXBvbmVudHMpLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBhbGxDb21wb25lbnRzO1xufTtcbnZhciBNRFhQcm92aWRlciA9IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWxsQ29tcG9uZW50c1xuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG52YXIgVFlQRV9QUk9QX05BTUUgPSAnbWR4VHlwZSc7XG52YXIgREVGQVVMVFMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgd3JhcHBlcjogZnVuY3Rpb24gd3JhcHBlcihfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCBjaGlsZHJlbik7XG4gIH1cbn07XG52YXIgTURYQ3JlYXRlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcm9wQ29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBtZHhUeXBlID0gcHJvcHMubWR4VHlwZSxcbiAgICAgIG9yaWdpbmFsVHlwZSA9IHByb3BzLm9yaWdpbmFsVHlwZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgZXRjID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjb21wb25lbnRzXCIsIFwibWR4VHlwZVwiLCBcIm9yaWdpbmFsVHlwZVwiLCBcInBhcmVudE5hbWVcIl0pO1xuXG4gIHZhciBjb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wQ29tcG9uZW50cyk7XG4gIHZhciB0eXBlID0gbWR4VHlwZTtcbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudHNbXCJcIi5jb25jYXQocGFyZW50TmFtZSwgXCIuXCIpLmNvbmNhdCh0eXBlKV0gfHwgY29tcG9uZW50c1t0eXBlXSB8fCBERUZBVUxUU1t0eXBlXSB8fCBvcmlnaW5hbFR5cGU7XG5cbiAgaWYgKHByb3BDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBldGMpLCB7fSwge1xuICAgICAgY29tcG9uZW50czogcHJvcENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmVmOiByZWZcbiAgfSwgZXRjKSk7XG59KTtcbk1EWENyZWF0ZUVsZW1lbnQuZGlzcGxheU5hbWUgPSAnTURYQ3JlYXRlRWxlbWVudCc7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIG1keFR5cGUgPSBwcm9wcyAmJiBwcm9wcy5tZHhUeXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgbWR4VHlwZSkge1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBNRFhDcmVhdGVFbGVtZW50O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQcm9wcy5vcmlnaW5hbFR5cGUgPSB0eXBlO1xuICAgIG5ld1Byb3BzW1RZUEVfUFJPUF9OQU1FXSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgOiBtZHhUeXBlO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG5leHBvcnQgeyBNRFhDb250ZXh0LCBNRFhQcm92aWRlciwgY3JlYXRlRWxlbWVudCBhcyBtZHgsIHVzZU1EWENvbXBvbmVudHMsIHdpdGhNRFhDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWZgIHdob3NlIHZhbHVlIGlzIHVwZGF0ZWQgaW4gYW4gZWZmZWN0LCBlbnN1cmluZyB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlIGlzIHRoZSBvbmUgcmVuZGVyZWQgd2l0aC4gR2VuZXJhbGx5IG9ubHkgcmVxdWlyZWQgZm9yIENvbmN1cnJlbnQgbW9kZSB1c2FnZVxuICogd2hlcmUgcHJldmlvdXMgd29yayBpbiBgcmVuZGVyKClgIG1heSBiZSBkaXNjYXJkZWQgYmVmb3IgYmVpbmcgdXNlZC5cbiAqXG4gKiBUaGlzIGlzIHNhZmUgdG8gYWNjZXNzIGluIGFuIGV2ZW50IGhhbmRsZXIuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBgUmVmYCB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbW1pdHRlZFJlZih2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIHJlZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tbWl0dGVkUmVmOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5Db250ZXh0ID0gZXhwb3J0cy5hbGxWYWx1ZXMgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IGFsbFZhbHVlcyA9IG9iaiA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5cy5tYXAoayA9PiBvYmpba10pKS50aGVuKHZhbHVlcyA9PiB7XG4gICAgY29uc3QgbmV4dCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoaywgaSkgPT4ge1xuICAgICAgbmV4dFtrXSA9IHZhbHVlc1tpXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmFsbFZhbHVlcyA9IGFsbFZhbHVlcztcblxuY29uc3QgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5cblxuZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcblxudmFyIF9kZWZhdWx0ID0gKHtcbiAgaW1wb3J0cyxcbiAgY2hpbGRyZW5cbn0pID0+IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGltcG9ydHNcbn0sIGNoaWxkcmVuKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi91c2VFdmVudENhbGxiYWNrJztcblxuLyoqXG4gKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIG91dHNpZGUgZGlyZWN0bHkgdG8gc3BlY2lmaWVkIERPTSBlbGVtZW50XG4gKiBieXBhc3NpbmcgdGhlIHJlYWN0IHN5bnRoZXRpYyBldmVudCBzeXN0ZW0uXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgVGhlIHRhcmdldCB0byBsaXN0ZW4gZm9yIGV2ZW50cyBvblxuICogQHBhcmFtIGV2ZW50IFRoZSBET00gZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZXIgQW4gZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIGNhcHR1cmUgV2hldGhlciBvciBub3QgdG8gbGlzdGVuIGR1cmluZyB0aGUgY2FwdHVyZSBldmVudCBwaGFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgaWYgKGNhcHR1cmUgPT09IHZvaWQgMCkge1xuICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gdXNlRXZlbnRDYWxsYmFjayhsaXN0ZW5lcik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhcmdldCA9IHR5cGVvZiBldmVudFRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50VGFyZ2V0KCkgOiBldmVudFRhcmdldDtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgfTtcbiAgfSwgW2V2ZW50VGFyZ2V0XSk7XG59IiwiaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi91c2VFdmVudExpc3RlbmVyJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgb3V0c2lkZSBkaXJlY3RseSB0byB0aGUgYGRvY3VtZW50YCxcbiAqIGJ5cGFzc2luZyB0aGUgcmVhY3Qgc3ludGhldGljIGV2ZW50IHN5c3RlbS5cbiAqXG4gKiBgYGB0c1xuICogdXNlR2xvYmFsTGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAqICBjb25zb2xlLmxvZyhldmVudC5rZXkpXG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIGV2ZW50IFRoZSBET00gZXZlbnQgbmFtZVxuICogQHBhcmFtIGhhbmRsZXIgQW4gZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIGNhcHR1cmUgV2hldGhlciBvciBub3QgdG8gbGlzdGVuIGR1cmluZyB0aGUgY2FwdHVyZSBldmVudCBwaGFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHbG9iYWxMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICBpZiAoY2FwdHVyZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FwdHVyZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50VGFyZ2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfSwgW10pO1xuICByZXR1cm4gdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudFRhcmdldCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xufSIsImltcG9ydCBpc0RvY3VtZW50IGZyb20gJy4vaXNEb2N1bWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dpbmRvdyhub2RlKSB7XG4gIGlmICgnd2luZG93JyBpbiBub2RlICYmIG5vZGUud2luZG93ID09PSBub2RlKSByZXR1cm4gbm9kZTtcbiAgaWYgKGlzRG9jdW1lbnQobm9kZSkpIHJldHVybiBub2RlLmRlZmF1bHRWaWV3IHx8IGZhbHNlO1xuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEb2N1bWVudChlbGVtZW50KSB7XG4gIHJldHVybiAnbm9kZVR5cGUnIGluIGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gZG9jdW1lbnQuRE9DVU1FTlRfTk9ERTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MgJiYgZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi9vd25lcldpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBzdWVkb0VsZW1lbnQpIHtcbiAgcmV0dXJuIG93bmVyV2luZG93KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcHN1ZWRvRWxlbWVudCk7XG59IiwidmFyIHJVcHBlciA9IC8oW0EtWl0pL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAqL1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZSc7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59IiwidmFyIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QodmFsdWUpKTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tICcuL2dldENvbXB1dGVkU3R5bGUnO1xuaW1wb3J0IGh5cGhlbmF0ZSBmcm9tICcuL2h5cGhlbmF0ZVN0eWxlJztcbmltcG9ydCBpc1RyYW5zZm9ybSBmcm9tICcuL2lzVHJhbnNmb3JtJztcblxuZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHkpIHtcbiAgdmFyIGNzcyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtcyA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShoeXBoZW5hdGUocHJvcGVydHkpKSB8fCBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKHByb3BlcnR5KSk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wZXJ0eSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydHlba2V5XTtcblxuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoaHlwaGVuYXRlKGtleSkpO1xuICAgIH0gZWxzZSBpZiAoaXNUcmFuc2Zvcm0oa2V5KSkge1xuICAgICAgdHJhbnNmb3JtcyArPSBrZXkgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3MgKz0gaHlwaGVuYXRlKGtleSkgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtcyArIFwiO1wiO1xuICB9XG5cbiAgbm9kZS5zdHlsZS5jc3NUZXh0ICs9IFwiO1wiICsgY3NzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgLy8gQHRzLWlnbm9yZVxuZ2xvYmFsLm5hdmlnYXRvciAmJiAvLyBAdHMtaWdub3JlXG5nbG9iYWwubmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgaXNET00gPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuLyoqXG4gKiBJcyBgdXNlTGF5b3V0RWZmZWN0YCBpbiBhIERPTSBvciBSZWFjdCBOYXRpdmUgZW52aXJvbm1lbnQsIG90aGVyd2lzZSByZXNvbHZlcyB0byB1c2VFZmZlY3RcbiAqIE9ubHkgdXNlZnVsIHRvIGF2b2lkIHRoZSBjb25zb2xlIHdhcm5pbmcuXG4gKlxuICogUFJFRkVSIGB1c2VFZmZlY3RgIFVOTEVTUyBZT1UgS05PVyBXSEFUIFlPVSBBUkUgRE9JTkcuXG4gKlxuICogQGNhdGVnb3J5IGVmZmVjdHNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBpc0RPTSB8fCBpc1JlYWN0TmF0aXZlID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0OyIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIElkZW50aWNhbCB0byBgdXNlTWVtb2AgX2V4Y2VwdF8gdGhhdCBpdCBwcm92aWRlcyBhIHNlbWFudGljIGd1YXJhbnRlZSB0aGF0XG4gKiB2YWx1ZXMgd2lsbCBub3QgYmUgaW52YWxpZGF0ZWQgdW5sZXNzIHRoZSBkZXBlbmRlbmNpZXMgY2hhbmdlLiBUaGlzIGlzIHVubGlrZVxuICogdGhlIGJ1aWx0IGluIGB1c2VNZW1vYCB3aGljaCBtYXkgZGlzY2FyZCBtZW1vaXplZCB2YWx1ZXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKlxuICogQHBhcmFtIGZhY3RvcnkgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB2YWx1ZSB0byBiZSBtZW1vaXplZFxuICogQHBhcmFtIGRlcHMgQSBkZXBlbmRlbmN5IGFycmF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0YWJsZU1lbW8oZmFjdG9yeSwgZGVwcykge1xuICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gIHZhciB2YWx1ZVJlZiA9IHVzZVJlZigpOyAvLyBpbml0aWFsIGhvb2sgY2FsbFxuXG4gIGlmICghdmFsdWVSZWYuY3VycmVudCkge1xuICAgIHZhbHVlUmVmLmN1cnJlbnQgPSB7XG4gICAgICBkZXBzOiBkZXBzLFxuICAgICAgcmVzdWx0OiBmYWN0b3J5KClcbiAgICB9OyAvLyBzdWJzZXF1ZW50IGNhbGxzXG4gIH0gZWxzZSB7XG4gICAgaXNWYWxpZCA9ICEhKGRlcHMgJiYgdmFsdWVSZWYuY3VycmVudC5kZXBzICYmIGlzRXF1YWwoZGVwcywgdmFsdWVSZWYuY3VycmVudC5kZXBzKSk7XG4gIH1cblxuICB2YXIgY2FjaGUgPSBpc1ZhbGlkID8gdmFsdWVSZWYuY3VycmVudCA6IHtcbiAgICBkZXBzOiBkZXBzLFxuICAgIHJlc3VsdDogZmFjdG9yeSgpXG4gIH07IC8vIG11c3QgdXBkYXRlIGltbWVkaWF0ZWx5IHNvIGFueSBzeW5jIHJlbmRlcnMgaGVyZSBkb24ndCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wXG5cbiAgdmFsdWVSZWYuY3VycmVudCA9IGNhY2hlO1xuICByZXR1cm4gY2FjaGUucmVzdWx0O1xufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0YWJsZU1lbW8gZnJvbSAnLi91c2VTdGFibGVNZW1vJztcbmltcG9ydCB1c2VFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljRWZmZWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4vdXNlRXZlbnRDYWxsYmFjayc7XG4vKipcbiAqIFNldHVwIGFuIFtgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIG9uXG4gKiBhIERPTSBFbGVtZW50IHRoYXQgcmV0dXJucyBpdCdzIGVudHJpZXMgYXMgdGhleSBhcnJpdmUuXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmVcbiAqIEBwYXJhbSBpbml0IEludGVyc2VjdGlvbk9ic2VydmVyIG9wdGlvbnMgd2l0aCBhIG5vdGFibGUgY2hhbmdlLFxuICogdW5saWtlIGEgcGxhaW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYHJvb3Q6IG51bGxgIG1lYW5zIFwibm90IHByb3ZpZGVkIFlFVFwiLFxuICogYW5kIHRoZSBob29rIHdpbGwgd2FpdCB1bnRpbCBpdCByZWNlaXZlcyBhIG5vbi1udWxsIHZhbHVlIHRvIHNldCB1cCB0aGUgb2JzZXJ2ZXIuXG4gKiBUaGlzIGNoYW5nZSBhbGxvd3MgZm9yIGVhc2llciBzeW5jaW5nIG9mIGVsZW1lbnQgYW5kIHJvb3QgdmFsdWVzIGluIGEgUmVhY3RcbiAqIGNvbnRleHQuXG4gKi9cblxuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZWxlbWVudCwgY2FsbGJhY2tPck9wdGlvbnMsIG1heWJlT3B0aW9ucykge1xuICB2YXIgY2FsbGJhY2s7XG4gIHZhciBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2tPck9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrT3JPcHRpb25zO1xuICAgIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgfHwge307XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IGNhbGxiYWNrT3JPcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHRocmVzaG9sZCA9IF9vcHRpb25zLnRocmVzaG9sZCxcbiAgICAgIHJvb3QgPSBfb3B0aW9ucy5yb290LFxuICAgICAgcm9vdE1hcmdpbiA9IF9vcHRpb25zLnJvb3RNYXJnaW47XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgZW50cmllcyA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldEVudHJ5ID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBoYW5kbGVyID0gdXNlRXZlbnRDYWxsYmFjayhjYWxsYmFjayB8fCBzZXRFbnRyeSk7IC8vIFdlIHdhaXQgZm9yIGVsZW1lbnQgdG8gZXhpc3QgYmVmb3JlIGNvbnN0cnVjdGluZ1xuXG4gIHZhciBvYnNlcnZlciA9IHVzZVN0YWJsZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByb290ICE9PSBudWxsICYmIHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXIsIHtcbiAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkLFxuICAgICAgcm9vdDogcm9vdCxcbiAgICAgIHJvb3RNYXJnaW46IHJvb3RNYXJnaW5cbiAgICB9KTtcbiAgfSwgW2hhbmRsZXIsIHJvb3QsIHJvb3RNYXJnaW4sIHRocmVzaG9sZCAmJiBKU09OLnN0cmluZ2lmeSh0aHJlc2hvbGQpXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFvYnNlcnZlcikgcmV0dXJuO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9O1xuICB9LCBbb2JzZXJ2ZXIsIGVsZW1lbnRdKTtcbiAgcmV0dXJuIGNhbGxiYWNrID8gdW5kZWZpbmVkIDogZW50cmllcyB8fCBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7IiwiaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICdkb20taGVscGVycy9zY3JvbGxQYXJlbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdheXBvaW50RXZlbnQge1xuICBwb3NpdGlvbjogUG9zaXRpb247XG4gIHByZXZpb3VzUG9zaXRpb246IFBvc2l0aW9uIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcbiAgdG9wPzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG4gIGxlZnQ/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBXYXlwb2ludENhbGxiYWNrID0gKFxuICBkZXRhaWxzOiBXYXlwb2ludEV2ZW50LFxuICBlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSxcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyLFxuKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBSb290RWxlbWVudCA9IEVsZW1lbnQgfCBEb2N1bWVudCB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbi8qKiBBY2NlcHRzIGFsbCBvcHRpb25zIGFuIEludGVyc2VjdGlvbk9ic2VydmVyIGFjY2VwdHMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2F5cG9pbnRPcHRpb25zXG4gIGV4dGVuZHMgT21pdDxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJyB8ICdyb290Jz4ge1xuICByb290PzogUm9vdEVsZW1lbnQgfCAnc2Nyb2xsUGFyZW50JztcblxuICAvKipcbiAgICogQSB2YWxpZCBDU1MgYG1hcmdpbmAgcHJvcGVydHkgb3Igb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNwZWNpZmljIFwidG9wXCIsIFwibGVmdFwiLCBldGMgcHJvcGVydGllcy5cbiAgICogVGhlIHJvb3QgbWFyZ2luIGZ1bmN0aW9uYWxseSBhZGp1c3RzIHRoZSBcInNpemVcIiBvZiB0aGUgdmlld3BvcnQgd2hlbiBjb25zaWRlcmluZyB0aGUgd2F5cG9pbnQnc1xuICAgKiBwb3NpdGlvbi4gQSBwb3NpdGl2ZSBtYXJnaW4gd2lsbCBjYXVzZSB0aGUgd2F5cG9pbnQgdG8gXCJlbnRlclwiIHRoZSB3YXlwb2ludCBlYXJseSB3aGlsZSBhXG4gICAqIG5lZ2F0aXZlIG1hcmdpbiB3aWxsIGhhdmUgdGhlIG9wcG9zaXRlIGVmZmVjdC5cbiAgICovXG4gIHJvb3RNYXJnaW4/OiBzdHJpbmcgfCBSZWN0O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2Nyb2xsIHRvIGNvbnNpZGVyIHdoZW4gdHJhY2tpbmcgdGhlIHdheXBvaW50J3MgcG9zaXRpb25cbiAgICovXG4gIHNjcm9sbERpcmVjdGlvbj86ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCc7XG59XG5cbmV4cG9ydCBlbnVtIFBvc2l0aW9uIHtcbiAgQkVGT1JFID0gMSxcbiAgSU5TSURFLFxuICBBRlRFUixcbn1cblxuZnVuY3Rpb24gdG9Dc3MobWFyZ2luPzogc3RyaW5nIHwgUmVjdCkge1xuICBpZiAoIW1hcmdpbiB8fCB0eXBlb2YgbWFyZ2luID09PSAnc3RyaW5nJykgcmV0dXJuIG1hcmdpbjtcblxuICBjb25zdCB7IHRvcCA9IDAsIHJpZ2h0ID0gMCwgYm90dG9tID0gMCwgbGVmdCA9IDAgfSA9IG1hcmdpbjtcblxuICByZXR1cm4gYCR7dG9wfXB4ICR7cmlnaHR9cHggJHtib3R0b219cHggJHtsZWZ0fXB4YDtcbn1cblxuZnVuY3Rpb24gdXNlV2F5cG9pbnQoXG4gIGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsLFxuICBjYWxsYmFjazogV2F5cG9pbnRDYWxsYmFjayxcbiAgb3B0aW9uczogV2F5cG9pbnRPcHRpb25zID0ge30sXG4pOiB2b2lkIHtcbiAgY29uc3QgeyByb290LCByb290TWFyZ2luLCB0aHJlc2hvbGQsIHNjcm9sbERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCcgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VFdmVudENhbGxiYWNrKGNhbGxiYWNrKTtcblxuICBjb25zdCBwcmV2UG9zaXRpb25SZWYgPSB1c2VSZWY8UG9zaXRpb24gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBmaW5kU2Nyb2xsUGFyZW50ID0gcm9vdCA9PT0gJ3Njcm9sbFBhcmVudCc7XG4gIGNvbnN0IHNjcm9sbFBhcmVudCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIChlbGVtZW50ICYmIGZpbmRTY3JvbGxQYXJlbnQgJiYgZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQgYXMgYW55LCB0cnVlKSkgfHxcbiAgICAgIG51bGwsXG4gICAgW2VsZW1lbnQsIGZpbmRTY3JvbGxQYXJlbnRdLFxuICApO1xuXG4gIGNvbnN0IHJlYWxSb290ID0gcm9vdCA9PT0gJ3Njcm9sbFBhcmVudCcgPyBzY3JvbGxQYXJlbnQgOiByb290O1xuXG4gIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIC8vIFdlIGNoYW5nZSB0aGUgbWVhbmluZyBvZiBleHBsaWNpdCBudWxsIHRvIFwibm90IHByb3ZpZGVkIHlldFwiXG4gICAgLy8gdGhpcyBpcyB0byBhbGxvdyBlYXNpZXIgc3luY2hyb25pemluZyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHJvb3RzIGRlcml2ZWRcbiAgICAvLyBmcm9tIGl0LiBPdGhlcndpc2UgaWYgdGhlIHJvb3QgdXBkYXRlcyBsYXRlciBhbiBvYnNlcnZlciB3aWxsIGJlIGNyZWF0ZWRcbiAgICAvLyBmb3IgdGhlIGRvY3VtZW50IGFuZCB0aGVuIGZvciB0aGUgcm9vdFxuICAgIGVsZW1lbnQsXG4gICAgKFtlbnRyeV0sIG9ic2VydmVyKSA9PiB7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kLCBwb2ludF0gPVxuICAgICAgICBzY3JvbGxEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICA/IChbJ3RvcCcsICdib3R0b20nLCAneSddIGFzIGNvbnN0KVxuICAgICAgICAgIDogKFsnbGVmdCcsICdyaWdodCcsICd4J10gYXMgY29uc3QpO1xuXG4gICAgICBjb25zdCB7IFtwb2ludF06IGNvb3JkIH0gPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3Q7XG5cbiAgICAgIGNvbnN0IHJvb3RTdGFydCA9IGVudHJ5LnJvb3RCb3VuZHM/LltzdGFydF0gfHwgMDtcbiAgICAgIGNvbnN0IHJvb3RFbmQgPSBlbnRyeS5yb290Qm91bmRzPy5bZW5kXSB8fCAwO1xuXG4gICAgICBsZXQgcG9zaXRpb246IFBvc2l0aW9uID0gUG9zaXRpb24uSU5TSURFO1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uSU5TSURFO1xuICAgICAgfSBlbHNlIGlmIChjb29yZCA+IHJvb3RFbmQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5BRlRFUjtcbiAgICAgIH0gZWxzZSBpZiAoY29vcmQgPCByb290U3RhcnQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5CRUZPUkU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZpb3VzUG9zaXRpb24gPSBwcmV2UG9zaXRpb25SZWYuY3VycmVudDtcblxuICAgICAgaWYgKHByZXZpb3VzUG9zaXRpb24gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlcih7IHBvc2l0aW9uLCBwcmV2aW91c1Bvc2l0aW9uIH0sIGVudHJ5LCBvYnNlcnZlcik7XG5cbiAgICAgIHByZXZQb3NpdGlvblJlZi5jdXJyZW50ID0gcG9zaXRpb247XG4gICAgfSxcbiAgICB7XG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290OiByZWFsUm9vdCxcbiAgICAgIHJvb3RNYXJnaW46IHRvQ3NzKHJvb3RNYXJnaW4pLFxuICAgIH0sXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdheXBvaW50O1xuIiwiaW1wb3J0IGlzV2luZG93IGZyb20gJy4vaXNXaW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0c2Nyb2xsQWNjZXNzb3Iob2Zmc2V0KSB7XG4gIHZhciBwcm9wID0gb2Zmc2V0ID09PSAncGFnZVhPZmZzZXQnID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCc7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsQWNjZXNzb3Iobm9kZSwgdmFsKSB7XG4gICAgdmFyIHdpbiA9IGlzV2luZG93KG5vZGUpO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gd2luID8gd2luW29mZnNldF0gOiBub2RlW3Byb3BdO1xuICAgIH1cblxuICAgIGlmICh3aW4pIHtcbiAgICAgIHdpbi5zY3JvbGxUbyh3aW5bb2Zmc2V0XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZVtwcm9wXSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsQWNjZXNzb3I7XG59IiwiaW1wb3J0IGdldFNjcm9sbEFjY2Vzc29yIGZyb20gJy4vZ2V0U2Nyb2xsQWNjZXNzb3InO1xuZXhwb3J0IGRlZmF1bHQgZ2V0U2Nyb2xsQWNjZXNzb3IoJ3BhZ2VYT2Zmc2V0Jyk7IiwiaW1wb3J0IGdldFNjcm9sbEFjY2Vzc29yIGZyb20gJy4vZ2V0U2Nyb2xsQWNjZXNzb3InO1xuZXhwb3J0IGRlZmF1bHQgZ2V0U2Nyb2xsQWNjZXNzb3IoJ3BhZ2VZT2Zmc2V0Jyk7IiwiaW1wb3J0IGNvbnRhaW5zIGZyb20gJy4vY29udGFpbnMnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmltcG9ydCBzY3JvbGxMZWZ0IGZyb20gJy4vc2Nyb2xsTGVmdCc7XG5pbXBvcnQgc2Nyb2xsVG9wIGZyb20gJy4vc2Nyb2xsVG9wJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9mZnNldChub2RlKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGUpO1xuICB2YXIgYm94ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50OyAvLyBNYWtlIHN1cmUgaXQncyBub3QgYSBkaXNjb25uZWN0ZWQgRE9NIG5vZGVcblxuICBpZiAoIWRvY0VsZW0gfHwgIWNvbnRhaW5zKGRvY0VsZW0sIG5vZGUpKSByZXR1cm4gYm94O1xuICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHVuZGVmaW5lZCkgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgYm94ID0ge1xuICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcChkb2NFbGVtKSAtIChkb2NFbGVtLmNsaWVudFRvcCB8fCAwKSxcbiAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQoZG9jRWxlbSkgLSAoZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDApLFxuICAgIHdpZHRoOiBib3gud2lkdGgsXG4gICAgaGVpZ2h0OiBib3guaGVpZ2h0XG4gIH07XG4gIHJldHVybiBib3g7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2lzV2luZG93JztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVpZ2h0KG5vZGUsIGNsaWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICByZXR1cm4gd2luID8gd2luLmlubmVySGVpZ2h0IDogY2xpZW50ID8gbm9kZS5jbGllbnRIZWlnaHQgOiBvZmZzZXQobm9kZSkuaGVpZ2h0O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduLCBuby1jb250aW51ZSAqL1xuaW1wb3J0IGNzcyBmcm9tICcuL2Nzcyc7XG5pbXBvcnQgaGVpZ2h0IGZyb20gJy4vaGVpZ2h0JztcbmltcG9ydCBpc0RvY3VtZW50IGZyb20gJy4vaXNEb2N1bWVudCc7XG4vKipcbiAqIEZpbmQgdGhlIGZpcnN0IHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgU3RhcnRpbmcgZWxlbWVudFxuICogQHBhcmFtIGZpcnN0UG9zc2libGUgU3RvcCBhdCB0aGUgZmlyc3Qgc2Nyb2xsYWJsZSBwYXJlbnQsIGV2ZW4gaWYgaXQncyBub3QgY3VycmVudGx5IHNjcm9sbGFibGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxQYXJlbnQoZWxlbWVudCwgZmlyc3RQb3NzaWJsZSkge1xuICB2YXIgcG9zaXRpb24gPSBjc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gIHZhciBleGNsdWRlU3RhdGljID0gcG9zaXRpb24gPT09ICdhYnNvbHV0ZSc7XG4gIHZhciBvd25lckRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gb3duZXJEb2MgfHwgZG9jdW1lbnQ7IC8vIEB0cy1pZ25vcmVcblxuICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpICYmICFpc0RvY3VtZW50KGVsZW1lbnQpKSB7XG4gICAgdmFyIGlzU3RhdGljID0gZXhjbHVkZVN0YXRpYyAmJiBjc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnO1xuICAgIHZhciBzdHlsZSA9IChjc3MoZWxlbWVudCwgJ292ZXJmbG93JykgfHwgJycpICsgKGNzcyhlbGVtZW50LCAnb3ZlcmZsb3cteScpIHx8ICcnKSArIGNzcyhlbGVtZW50LCAnb3ZlcmZsb3cteCcpO1xuICAgIGlmIChpc1N0YXRpYykgY29udGludWU7XG5cbiAgICBpZiAoLyhhdXRvfHNjcm9sbCkvLnRlc3Qoc3R5bGUpICYmIChmaXJzdFBvc3NpYmxlIHx8IGhlaWdodChlbGVtZW50KSA8IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG93bmVyRG9jIHx8IGRvY3VtZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0=