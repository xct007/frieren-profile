(function() {
var exports = {};
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 9231:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const education = [{
    institute: 'Institut Teknologi Pagar Alam',
    website: 'https://itpa.ac.id/',
    course: 'Programmer',
    startDate: '2021-08-28',
    endDate: '2021-08-28',
    place: 'boarding school',
    technologies: ['C++', 'JavaScript', 'HTML', 'PHP', 'Python']
  }];
  res.status(200).json({
    education
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9231));
module.exports = __webpack_exports__;

})();