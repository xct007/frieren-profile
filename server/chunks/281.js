exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 281:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ shimmer; }
/* harmony export */ });
const shimmerSvg = (width, height) => `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="20%" />
        <stop stop-color="rgba(100, 100, 100, 0.5)" offset="50%" />
        <stop stop-color="rgba(100, 100, 100, 0.2)" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="rgba(100, 100, 100, 0.2)" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = str =>  true ? Buffer.from(str).toString('base64') : 0;

const shimmer = (width, height) => {
  return `data:image/svg+xml;base64,${toBase64(shimmerSvg(width, height))}`;
};

/***/ })

};
;