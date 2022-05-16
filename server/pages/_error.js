(function() {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Atoms_SeoHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1112);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);






function Error({
  statusCode
}) {
  let errorMessage = '';

  switch (statusCode) {
    case 400:
      errorMessage = 'Bad Request';
      break;

    case 401:
      errorMessage = 'Unauthorised';
      break;

    case 403:
      errorMessage = 'Forbidden';
      break;

    case 404:
      errorMessage = 'Page Not Found';
      break;

    case 405:
      errorMessage = 'Method Not Allowed';
      break;

    case 500:
      errorMessage = 'Internal Server Error';
      break;

    case 502:
      errorMessage = 'Bad Gateway';
      break;

    case 503:
      errorMessage = 'Service Unavailable';
      break;

    default:
      errorMessage = 'Internal Server Error';
      break;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Atoms_SeoHead__WEBPACK_IMPORTED_MODULE_1__/* .SeoHead */ .f, {
      title: `${statusCode} ${errorMessage} - Jacob Herper - Front-End Software Engineer`,
      description: "",
      meta: [{
        name: 'robots',
        content: 'noindex'
      }]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: statusCode
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Description, {
        children: [errorMessage, "."]
      })]
    })]
  });
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "_error__Container",
  componentId: "sc-1k876ld-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;h1{font-weight:normal;}"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "_error__Description",
  componentId: "sc-1k876ld-1"
})(["margin-left:1rem;padding:1rem 0 1rem 1rem;border-left:1px solid ", ";"], ({
  theme
}) => theme.text);
/* harmony default export */ __webpack_exports__["default"] = (Error);

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
var __webpack_exports__ = __webpack_require__.X(0, [112], function() { return __webpack_exec__(6336); });
module.exports = __webpack_exports__;

})();