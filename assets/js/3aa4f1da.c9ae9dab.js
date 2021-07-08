(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{79:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return p})),t.d(e,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(96)),l=t(98),i=t.n(l),s={},c={unversionedId:"Overlay",id:"Overlay",isDocsHomePage:!1,title:"Overlay",description:"A powerful and flexible overlay component for showing things over, and next to, other things.",source:"@site/docs/Overlay.mdx",slug:"/Overlay",permalink:"/ui/Overlay",version:"current",sidebar:"docs",previous:{title:"Navs and tabs",permalink:"/ui/Nav"},next:{title:"Portal",permalink:"/ui/Portal"}},p=[],d={toc:p};function u(n){var e=n.components,s=Object(r.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,s,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A powerful and flexible overlay component for showing things over, and next to, other things."),Object(a.b)(i.a,{imports:function(){return Object(l.allValues)({"@emotion/styled":Promise.all([t.e(0),t.e(5),t.e(3)]).then(t.bind(null,151)),"@restart/ui":Promise.all([t.e(0),t.e(5),t.e(3)]).then(t.bind(null,93)),"../src/Button":Promise.all([t.e(0),t.e(5),t.e(3)]).then(t.bind(null,108))})},mdxType:"ImportContext"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'import styled from "@emotion/styled";\nimport { Overlay } from "@restart/ui";\nimport Button from "../src/Button";\n\nconst Tooltip = styled("div")`\n  position: absolute;\n`;\n\nconst Arrow = styled("div")`\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  z-index: -1;\n\n  &::before {\n    content: "";\n    position: absolute;\n    transform: rotate(45deg);\n    background: #000;\n    width: 10px;\n    height: 10px;\n    top: 0;\n    left: 0;\n  }\n\n  ${(p) =>\n    ({\n      left: "right: -4px;",\n      right: "left: -4px;",\n      top: "bottom: -4px;",\n      bottom: "top: -4px;",\n    }[p.placement])}\n`;\n\nconst Body = styled("div")`\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  border-radius: 3px;\n  background-color: #000;\n`;\n\nconst PLACEMENTS = ["left", "top", "right", "bottom"];\n\nconst initialSstate = {\n  show: false,\n  placement: null,\n};\n\nfunction reducer(state, [type, payload]) {\n  switch (type) {\n    case "placement":\n      return { show: !!payload, placement: payload };\n    case "hide":\n      return { ...state, show: false, placement: null };\n    default:\n      return state;\n  }\n}\n\nfunction OverlayExample() {\n  const [{ show, placement }, dispatch] = useReducer(\n    reducer,\n    initialSstate\n  );\n  const triggerRef = useRef(null);\n  const containerRef = useRef(null);\n\n  const handleClick = () => {\n    const nextPlacement =\n      PLACEMENTS[PLACEMENTS.indexOf(placement) + 1];\n\n    dispatch(["placement", nextPlacement]);\n  };\n\n  return (\n    <div\n      className="flex flex-col items-center"\n      ref={containerRef}\n    >\n      <Button\n        className="mb-4"\n        id="overlay-toggle"\n        ref={triggerRef}\n        onClick={handleClick}\n      >\n        I am an Overlay target\n      </Button>\n      <p>Keep clicking to see the placement change.</p>\n\n      <Overlay\n        show={show}\n        rootClose\n        offset={[0, 10]}\n        onHide={() => dispatch("hide")}\n        placement={placement}\n        container={containerRef}\n        target={triggerRef}\n      >\n        {({ props, arrowProps, placement }) => (\n          <Tooltip {...props} placement={placement}>\n            <Arrow\n              {...arrowProps}\n              placement={placement}\n              style={arrowProps.style}\n            />\n            <Body>\n              I&rsquo;m placed to the{" "}\n              <strong>{placement}</strong>\n            </Body>\n          </Tooltip>\n        )}\n      </Overlay>\n    </div>\n  );\n}\n\n<OverlayExample />;\n'))))}u.isMDXComponent=!0}}]);