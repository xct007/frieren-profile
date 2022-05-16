(function() {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 9147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": function() { return /* reexport */ List; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/atoms/List/styles.ts

const StyledList = external_styled_components_default().ul.withConfig({
  displayName: "styles__StyledList",
  componentId: "sze0tr-0"
})(["margin:0;list-style:square;padding-left:1rem;li{margin-bottom:0.5rem;}"]);

;// CONCATENATED MODULE: ./src/components/atoms/List/List.tsx



const List = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledList, {
    children: children
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/List/index.ts


/***/ }),

/***/ 135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogPost; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2605);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6534);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2581);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6837);
/* harmony import */ var Atoms_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7183);
/* harmony import */ var Atoms_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9147);
/* harmony import */ var Atoms_SeoHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1112);
/* harmony import */ var Utils_shimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(281);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function BlogPost({
  post,
  mdxSource
}) {
  const {
    title,
    description,
    date,
    tags
  } = post;
  const components = {
    img: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({}, props), {}, {
      width: 1920,
      height: 1080,
      objectFit: "cover",
      placeholder: "blur",
      blurDataURL: (0,Utils_shimmer__WEBPACK_IMPORTED_MODULE_9__/* .shimmer */ .f)(1920, 1080)
    })),
    ul: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Atoms_List__WEBPACK_IMPORTED_MODULE_7__/* .List */ .a, _objectSpread({}, props))
  };
  const numOfWords = mdxSource.compiledSource.split(' ').length;
  const readTime = Math.ceil(numOfWords / 250);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Atoms_SeoHead__WEBPACK_IMPORTED_MODULE_8__/* .SeoHead */ .f, {
      title: `${title} - Jacob Herper's Blog - Front-End Software Engineer`,
      description: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Atoms_Container__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Headline, {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
        children: [readTime, " minute read"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, _objectSpread(_objectSpread({}, mdxSource), {}, {
        components: components
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Flex, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
            children: ["Written on ", (0,date_fns_format__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(new Date(date), 'd MMMM yyyy')]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Text, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
            children: "Tags:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tags, {
            children: tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              children: ["#", tag]
            }, tag))
          })]
        })]
      })]
    })]
  });
}
async function getStaticProps({
  params
}) {
  const post = (0,Utils_api__WEBPACK_IMPORTED_MODULE_5__/* .getBySlug */ .Wc)('BLOG', params.slug, ['title', 'description', 'slug', 'tags', 'date', 'content']);
  if (!(post !== null && post !== void 0 && post.content)) return {};
  const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(post.content);
  return {
    props: {
      post,
      mdxSource
    }
  };
}
async function getStaticPaths() {
  const posts = (0,Utils_api__WEBPACK_IMPORTED_MODULE_5__/* .getAllDocuments */ .HR)('BLOG', ['slug']);
  return {
    paths: posts.map(post => {
      return {
        params: _objectSpread({}, post)
      };
    }),
    fallback: false
  };
}
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_4___default().h2.withConfig({
  displayName: "slug__Headline",
  componentId: "sc-1ppctjb-0"
})(["font-size:2rem;margin-bottom:0;@media screen and (min-width:768px){font-size:3rem;}"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_4___default().p.withConfig({
  displayName: "slug__Text",
  componentId: "sc-1ppctjb-1"
})(["margin-top:3rem 0;display:flex;align-items:baseline;"]);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "slug__Flex",
  componentId: "sc-1ppctjb-2"
})(["display:flex;justify-content:space-between;flex-direction:column;@media screen and (min-width:768px){flex-direction:row;}"]);
const Tags = styled_components__WEBPACK_IMPORTED_MODULE_4___default().ul.withConfig({
  displayName: "slug__Tags",
  componentId: "sc-1ppctjb-3"
})(["display:flex;flex-wrap:wrap;color:", ";li{margin-left:1rem;font-size:0.9rem;}"], ({
  theme
}) => theme.grey);

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 6534:
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote");;

/***/ }),

/***/ 2581:
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote/serialize");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,675,605,112,206,281], function() { return __webpack_exec__(135); });
module.exports = __webpack_exports__;

})();