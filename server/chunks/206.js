exports.id = 206;
exports.ids = [206];
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

/***/ 6837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wc": function() { return /* binding */ getBySlug; },
/* harmony export */   "HR": function() { return /* binding */ getAllDocuments; }
/* harmony export */ });
/* unused harmony export getSlugs */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const blogPostsDirectory = 'src/blog';
const portfolioDirectory = 'src/portfolio';
const pagesDirectory = 'src/mdx-pages';
function getSlugs(type) {
  let dir;

  switch (type) {
    case 'BLOG':
      dir = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), blogPostsDirectory);
      break;

    case 'PORTFOLIO':
      dir = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), portfolioDirectory);
      break;

    case 'PAGES':
      dir = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), pagesDirectory);
      break;
  }

  return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir);
}
function getBySlug(type, slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  let fullPath = '';

  switch (type) {
    case 'BLOG':
      fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(blogPostsDirectory, `${realSlug}.mdx`);
      break;

    case 'PORTFOLIO':
      fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(portfolioDirectory, `${realSlug}.mdx`);
      break;

    case 'PAGES':
      fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(pagesDirectory, `${realSlug}.mdx`);
      break;
  }

  try {
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
    const {
      data,
      content
    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    fields.forEach(field => {
      if (field === 'slug') {
        items[field] = realSlug;
      }

      if (field === 'content') {
        items[field] = content;
      }

      if (data[field]) {
        items[field] = data[field];
      }
    });
    return items;
  } catch {
    return null;
  }
}
function getAllDocuments(type, fields = []) {
  const slugs = getSlugs(type);
  const documents = slugs.map(slug => getBySlug(type, slug, fields));
  return documents;
}

/***/ })

};
;