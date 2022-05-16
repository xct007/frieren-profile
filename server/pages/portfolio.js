(function() {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 5816:
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
// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/utils/shimmer.ts
var shimmer = __webpack_require__(281);
;// CONCATENATED MODULE: ./src/components/atoms/PortfolioItem/styles.ts

const StyledPortfolioItem = external_styled_components_default().article.withConfig({
  displayName: "styles__StyledPortfolioItem",
  componentId: "n6dl7r-0"
})(["margin-bottom:3rem;flex-direction:column;a{color:", " !important;text-decoration:none;}h1{margin:0;}p{margin:0;}.type{margin-bottom:1rem;font-weight:bold;}@media screen and (min-width:768px){display:flex;flex-direction:row-reverse;align-items:center;&:nth-of-type(odd){flex-direction:row;.details{padding-left:1rem;}}&:nth-of-type(even){.details{padding-right:1rem;}}& > *{width:50%;}}"], ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/components/atoms/PortfolioItem/PortfolioItem.tsx







const PortfolioItem = ({
  item
}) => {
  const {
    slug,
    title,
    type,
    technologies
  } = item;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledPortfolioItem, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/portfolio/${slug}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: `/portfolio/${slug}.jpg`,
          width: 1920,
          height: 1080,
          objectFit: "cover",
          alt: title,
          placeholder: "blur",
          blurDataURL: (0,shimmer/* shimmer */.f)(1920, 1080)
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "details",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/portfolio/${slug}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "type",
            children: type
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Technologies used:"
            }), ' ', /*#__PURE__*/jsx_runtime_.jsx("em", {
              children: technologies.join(', ')
            })]
          })]
        })
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/PortfolioItem/index.ts

// EXTERNAL MODULE: ./src/components/atoms/SeoHead/index.ts + 1 modules
var SeoHead = __webpack_require__(1112);
;// CONCATENATED MODULE: ./src/pages/portfolio/index.tsx




/* eslint-disable */






function Blog({
  portfolioItems
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoHead/* SeoHead */.f, {
      title: "Portfolio",
      description: "so"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Headline, {
        children: "Portfolio"
      }), portfolioItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(PortfolioItem, {
        item: item
      }, item.slug))]
    })]
  });
}
async function getStaticProps() {
  const portfolioItems = (0,api/* getAllDocuments */.HR)('PORTFOLIO', ['title', 'slug', 'type', 'technologies', 'sortOrder']);
  const sortedItems = external_lodash_orderby_default()(portfolioItems, ['sortOrder'], ['desc']);
  return {
    props: {
      portfolioItems: sortedItems
    }
  };
}
const Headline = external_styled_components_default().h2.withConfig({
  displayName: "portfolio__Headline",
  componentId: "xjvy94-0"
})(["font-size:2rem;margin-bottom:3rem;@media screen and (min-width:768px){font-size:3rem;}"]);

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

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [999,664,675,112,206,281], function() { return __webpack_exec__(5816); });
module.exports = __webpack_exports__;

})();