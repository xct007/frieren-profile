(function() {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 2479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const technologies = ['JavaScript', 'HTML', 'Python', 'English language', 'Mobile legends', 'Clash of Clans', 'Anime', 'Manga', 'BlackPink'];
  const greetings = ['mate'];
  const frameworks = ['Laravel', 'Vue.js', 'Nuxt.js'];
  const databases = ['MySQL', 'PostgreSQL', 'Firebase'];
  const cms = ['WordPress', 'Statamic'];
  const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
  const design = ['Canva', 'Gravit', 'Figma'];
  const softSkills = ['Leadership', 'Problem solving', 'Creative thinking', 'Flexible and adaptive', 'Team player'];
  const languages = [{
    language: 'Indonesian',
    level: 'bilingual',
    icon: '🇮🇩'
  }, {
    language: 'English',
    level: 'basic',
    icon: '🇬🇧'
  }];
  res.status(200).json({
    technologies,
    frameworks,
    databases,
    cms,
    various,
    design,
    softSkills,
    languages
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2479));
module.exports = __webpack_exports__;

})();