(function() {
var exports = {};
exports.id = 34;
exports.ids = [34];
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

/***/ 9041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogPost; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next-mdx-remote"
var external_next_mdx_remote_ = __webpack_require__(6534);
// EXTERNAL MODULE: external "next-mdx-remote/serialize"
var serialize_ = __webpack_require__(2581);
// EXTERNAL MODULE: ./src/utils/shimmer.ts
var shimmer = __webpack_require__(281);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utils/api.ts
var api = __webpack_require__(6837);
;// CONCATENATED MODULE: ./src/components/atoms/Button/styles.ts

const StyledButton = external_styled_components_default().button.withConfig({
  displayName: "styles__StyledButton",
  componentId: "a6av32-0"
})(["display:inline-block;margin:2rem auto;border:2px solid ", ";color:", ";padding:0.5rem 3rem;border-radius:5px;background:transparent;"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text);
const StyledLink = external_styled_components_default().a.withConfig({
  displayName: "styles__StyledLink",
  componentId: "a6av32-1"
})(["display:inline-block;margin:2rem auto;border:2px solid ", ";color:", ";padding:0.5rem 3rem;border-radius:5px;background:transparent;text-decoration:none;&:hover{border:2px solid ", ";color:", ";}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline, ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/components/atoms/Button/Button.tsx



const Button = ({
  children,
  href,
  target,
  onClick
}) => {
  if (href) return /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
    href: href,
    target: target,
    children: children
  });
  return /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
    onClick: onClick,
    children: children
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/Button/index.ts

// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
// EXTERNAL MODULE: ./src/components/atoms/List/index.ts + 2 modules
var List = __webpack_require__(9147);
// EXTERNAL MODULE: ./src/components/atoms/SeoHead/index.ts + 1 modules
var SeoHead = __webpack_require__(1112);
;// CONCATENATED MODULE: ./src/pages/portfolio/[slug].tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function BlogPost({
  item,
  mdxSource
}) {
  const {
    title,
    link,
    type,
    technologies,
    slug
  } = item;
  const components = {
    img: props => /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, props), {}, {
      width: 1920,
      height: 1080,
      objectFit: "cover"
    }))
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoHead/* SeoHead */.f, {
      title: `${title} - Jacob Herper's Portfolio - Front-End Software Engineer`,
      description: `Project ${title} developed by Jacob Herper using ${technologies.join(', ')}.`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: `/portfolio/${slug}.jpg`,
        width: 1920,
        height: 1080,
        objectFit: "cover",
        alt: `Screenshot of ${title}`,
        placeholder: "blur",
        blurDataURL: (0,shimmer/* shimmer */.f)(1920, 1080)
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx(Headline, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: type
      }), /*#__PURE__*/jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, _objectSpread(_objectSpread({}, mdxSource), {}, {
        components: components
      })), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Technologies used:"
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* List */.a, {
        children: technologies.map(tech => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: tech
        }, tech))
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        href: link,
        target: "_blank",
        children: "Visit project"
      })]
    })]
  });
}
async function getStaticProps({
  params
}) {
  const item = (0,api/* getBySlug */.Wc)('PORTFOLIO', params.slug, ['title', 'slug', 'link', 'type', 'technologies', 'content']);
  if (!(item !== null && item !== void 0 && item.content)) return {};
  const mdxSource = await (0,serialize_.serialize)(item.content);
  return {
    props: {
      item,
      mdxSource
    }
  };
}
async function getStaticPaths() {
  const items = (0,api/* getAllDocuments */.HR)('PORTFOLIO', ['slug']);
  return {
    paths: items.map(item => {
      return {
        params: _objectSpread({}, item)
      };
    }),
    fallback: false
  };
}
const Headline = external_styled_components_default().h2.withConfig({
  displayName: "slug__Headline",
  componentId: "vu7p8z-0"
})(["font-size:2rem;margin-bottom:0;& + h3{margin:0;}@media screen and (min-width:768px){font-size:3rem;}"]);

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
var __webpack_exports__ = __webpack_require__.X(0, [999,675,112,206,281], function() { return __webpack_exec__(9041); });
module.exports = __webpack_exports__;

})();