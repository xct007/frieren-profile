(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Blog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/utils/api.ts
var api = __webpack_require__(6837);
// EXTERNAL MODULE: external "lodash.orderby"
var external_lodash_orderby_ = __webpack_require__(379);
var external_lodash_orderby_default = /*#__PURE__*/__webpack_require__.n(external_lodash_orderby_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/atoms/BlogPost/styles.ts

const StyledBlogPost = external_styled_components_default().article.withConfig({
  displayName: "styles__StyledBlogPost",
  componentId: "sc-1r22brh-0"
})(["margin:3rem 0;a{color:", ";text-decoration:none;}h1{font-size:1.5rem;margin:0;}p{margin:0;}"], ({
  theme
}) => theme.headline);
const Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-1r22brh-1"
})(["display:flex;justify-content:space-between;flex-direction:column;@media screen and (min-width:768px){flex-direction:row;}"]);
const Tags = external_styled_components_default().ul.withConfig({
  displayName: "styles__Tags",
  componentId: "sc-1r22brh-2"
})(["display:flex;flex-wrap:wrap;color:", ";margin-top:0.5rem;li{margin-right:1rem;font-size:0.9rem;}"], ({
  theme
}) => theme.grey);

;// CONCATENATED MODULE: ./src/components/atoms/BlogPost/BlogPost.tsx






const BlogPost = ({
  post: {
    title,
    description,
    slug,
    date,
    tags
  }
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledBlogPost, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/blog/${slug}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Flex, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: (0,external_date_fns_.format)(new Date(date), 'dd/MM/yyyy')
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: description
        }), /*#__PURE__*/jsx_runtime_.jsx(Tags, {
          children: tags.map(tag => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: ["#", tag]
          }, tag))
        })]
      })
    })
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/BlogPost/index.ts

// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
// EXTERNAL MODULE: ./src/components/atoms/SeoHead/index.ts + 1 modules
var SeoHead = __webpack_require__(1112);
;// CONCATENATED MODULE: ./src/pages/blog/index.tsx




/* eslint-disable */






function Blog({
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoHead/* SeoHead */.f, {
      title: "Blog",
      description: "so"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Headline, {
        children: "Blog"
      }), posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(BlogPost, {
        post: post
      }, post.slug))]
    })]
  });
}
async function getStaticProps() {
  const posts = (0,api/* getAllDocuments */.HR)('BLOG', ['title', 'description', 'slug', 'tags', 'date']);
  const sortedPosts = external_lodash_orderby_default()(posts, ['date'], ['desc']);
  return {
    props: {
      posts: sortedPosts
    }
  };
}
const Headline = external_styled_components_default().h2.withConfig({
  displayName: "blog__Headline",
  componentId: "sc-1kiykeo-0"
})(["font-size:2rem;margin-bottom:0;@media screen and (min-width:768px){font-size:3rem;}"]);

/***/ }),

/***/ 3879:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

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

/***/ 379:
/***/ (function(module) {

"use strict";
module.exports = require("lodash.orderby");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,664,112,206], function() { return __webpack_exec__(3686); });
module.exports = __webpack_exports__;

})();