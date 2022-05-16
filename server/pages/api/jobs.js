(function() {
var exports = {};
exports.id = 129;
exports.ids = [129];
exports.modules = {

/***/ 9654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const positions = [{
    company: 'BOT WhatsApp',
    website: 'https://api.whatsapp.com/send?phone=6281278380339&text=#menu',
    jobTitle: 'Test',
    startDate: '2021-06-28',
    endDate: null,
    place: 'test',
    description: `* Unkwon`,
    technologies: ['JavaScript', 'Python']
  }];
  res.status(200).json({
    positions
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9654));
module.exports = __webpack_exports__;

})();