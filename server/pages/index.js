(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7183:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": function() { return /* reexport */ Container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/atoms/Container/styles.ts

const StyledContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledContainer",
  componentId: "mepagl-0"
})(["width:94%;max-width:55rem;margin:0 auto;"]);

;// CONCATENATED MODULE: ./src/components/atoms/Container/Container.tsx



const Container = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledContainer, {
    children: children
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/Container/index.ts


/***/ }),

/***/ 6608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next-absolute-url"
var external_next_absolute_url_ = __webpack_require__(1185);
var external_next_absolute_url_default = /*#__PURE__*/__webpack_require__.n(external_next_absolute_url_);
// EXTERNAL MODULE: ./src/utils/fetcher.ts
var fetcher = __webpack_require__(4397);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-typed"
var external_react_typed_namespaceObject = require("react-typed");;
var external_react_typed_default = /*#__PURE__*/__webpack_require__.n(external_react_typed_namespaceObject);
// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
// EXTERNAL MODULE: ./src/components/atoms/SeoHead/index.ts + 1 modules
var SeoHead = __webpack_require__(1112);
;// CONCATENATED MODULE: ./src/pages/index.tsx




/* eslint-disable */







function Home({
  skills
}) {
  const {
    technologies,
    frameworks
  } = skills;
  const talkAbout = [...technologies];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoHead/* SeoHead */.f, {
      title: "Frieren",
      description: "My first Website"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Headline, {
        children: ["Oit,", /*#__PURE__*/jsx_runtime_.jsx("wbr", {}), " Welcome", ' ', /*#__PURE__*/jsx_runtime_.jsx((external_react_typed_default()), {
          typeSpeed: 300,
          backSpeed: 20,
          strings: ['Mate'],
          smartBackspace: true,
          backDelay: 1000,
          loopCount: 0,
          showCursor: true,
          cursorChar: "|"
        }), "."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["My Name Is David Stefen Alvianus.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "You can ask me about", ' ', /*#__PURE__*/jsx_runtime_.jsx((external_react_typed_default()), {
          loop: true,
          typeSpeed: 100,
          backSpeed: 20,
          strings: talkAbout,
          smartBackspace: true,
          backDelay: 1000,
          loopCount: 0,
          showCursor: true,
          cursorChar: "|"
        }), "."]
      })]
    })]
  });
}

const getServerSideProps = async ({
  req
}) => {
  const {
    origin
  } = external_next_absolute_url_default()(req);
  const skills = await (0,fetcher/* fetcher */._)(`${origin}/api/skills`);
  return {
    props: {
      skills
    }
  };
};
const Headline = external_styled_components_default().h2.withConfig({
  displayName: "pages__Headline",
  componentId: "sc-1skyy1d-0"
})(["font-size:2rem;span{display:none;}@media screen and (min-width:768px){font-size:3rem;span{display:inline-block;}@keyframes wave{0%{transform:rotate(0);}50%{transform:rotate(-10deg);}100%{transform:rotate(10deg);}}&:hover span{animation:wave 0.5s ease infinite;}}"]);
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 4397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ fetcher; }
/* harmony export */ });
const fetcher = async (input, init) => {
  const res = await fetch(input, init);
  return res.json();
};

/***/ }),

/***/ 1185:
/***/ (function(module) {

"use strict";
module.exports = require("next-absolute-url");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [112], function() { return __webpack_exec__(6608); });
module.exports = __webpack_exports__;

})();