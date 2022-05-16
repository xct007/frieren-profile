(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/redux/selectors.ts
const getTheme = ({
  theme
}) => theme.currentTheme;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/globalStyles.ts

const GlobalStyles = external_styled_components_.createGlobalStyle`
	html {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		font-family: 'Basier Circle', sans-serif;
	}
	body {
		margin: 0;
		background: ${({
  theme
}) => theme.body};
		color: ${({
  theme
}) => theme.text};
    transition: all 0.3s ease;
	}

	h1, h2, h3, h4, h5, h6 {
		color: ${({
  theme
}) => theme.headline};
	}

	ul {
		list-style: none;
		padding: 0;
	}

	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-regular-webfont.eot');
    src: url('/fonts/basiercircle-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-regular-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-regular-webfont.woff') format('woff'),
         url('/fonts/basiercircle-regular-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-regularitalic-webfont.eot');
    src: url('/fonts/basiercircle-regularitalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-regularitalic-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-regularitalic-webfont.woff') format('woff'),
         url('/fonts/basiercircle-regularitalic-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-bold-webfont.eot');
    src: url('/fonts/basiercircle-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-bold-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-bold-webfont.woff') format('woff'),
         url('/fonts/basiercircle-bold-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-bolditalic-webfont.eot');
    src: url('/fonts/basiercircle-bolditalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-bolditalic-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-bolditalic-webfont.woff') format('woff'),
         url('/fonts/basiercircle-bolditalic-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
	}

	main {
		display: block;
	}
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}
	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	a {
		background-color: transparent;
		color: ${({
  theme
}) => theme.primary};

		&:hover {
			text-decoration: none;
		}
	}
	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}
	b,
	strong {
		font-weight: bolder;
	}
	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	img {
		border-style: none;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}
	button,
	input {
		overflow: visible;
	}
	button,
	select {
		text-transform: none;
	}
	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
	}
	button::-moz-focus-inner,
	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	button:-moz-focusring,
	[type='button']:-moz-focusring,
	[type='reset']:-moz-focusring,
	[type='submit']:-moz-focusring {
		outline: 1px dotted ButtonText;
	}
	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}
	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}
	progress {
		vertical-align: baseline;
	}
	textarea {
		overflow: auto;
	}
	[type='checkbox'],
	[type='radio'] {
		box-sizing: border-box;
		padding: 0;
	}
	[type='number']::-webkit-inner-spin-button,
	[type='number']::-webkit-outer-spin-button {
		height: auto;
	}
	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	details {
		display: block;
	}
	summary {
		display: list-item;
	}
	template {
		display: none;
	}
	[hidden] {
		display: none;
	}
	blockquote {
		font-size: 1.1rem;
		font-style: italic;
		border-left: 3px solid ${({
  theme
}) => theme.grey};
		line-height: 1.5;
		margin: 0;
		padding: 0 1rem;
	}
	hr {
		background: ${({
  theme
}) => theme.grey};
	}

	#nprogress {
		pointer-events: none;
	}

	#nprogress .bar {
		background: ${({
  theme
}) => theme.primary};

		position: fixed;
		z-index: 1031;
		top: 0;
		left: 0;

		width: 100%;
		height: 2px;
	}

	/* Fancy blur effect */
	#nprogress .peg {
		display: block;
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100%;
		box-shadow: 0 0 10px ${({
  theme
}) => theme.primary}, 0 0 5px ${({
  theme
}) => theme.primary};
		opacity: 1.0;

		-webkit-transform: rotate(3deg) translate(0px, -4px);
				-ms-transform: rotate(3deg) translate(0px, -4px);
						transform: rotate(3deg) translate(0px, -4px);
	}

	/* Remove these to get rid of the spinner */
	#nprogress .spinner {
		display: block;
		position: fixed;
		z-index: 1031;
		top: 15px;
		right: 15px;
	}

	#nprogress .spinner-icon {
		width: 18px;
		height: 18px;
		box-sizing: border-box;

		border: solid 2px transparent;
		border-top-color: ${({
  theme
}) => theme.primary};
		border-left-color: ${({
  theme
}) => theme.primary};
		border-radius: 50%;

		-webkit-animation: nprogress-spinner 400ms linear infinite;
						animation: nprogress-spinner 400ms linear infinite;
	}

	.nprogress-custom-parent {
		overflow: hidden;
		position: relative;
	}

	.nprogress-custom-parent #nprogress .spinner,
	.nprogress-custom-parent #nprogress .bar {
		position: absolute;
	}

	@-webkit-keyframes nprogress-spinner {
		0%   { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes nprogress-spinner {
		0%   { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;
;// CONCATENATED MODULE: ./src/components/organisms/Footer/styles.ts

const StyledFooter = external_styled_components_default().footer.withConfig({
  displayName: "styles__StyledFooter",
  componentId: "razpbj-0"
})(["padding:2rem 0;"]);
const Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "razpbj-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column-reverse;@media screen and (min-width:768px){flex-direction:row;justify-content:space-between;}"]);

// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/styles.ts

const StyledSocialIcons = external_styled_components_default().ul.withConfig({
  displayName: "styles__StyledSocialIcons",
  componentId: "sc-15vq785-0"
})(["display:flex;li{width:1.5rem;margin:0 0.5rem;}a{color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}@media screen and (min-width:768px){li{margin-left:1rem;}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./public/assets/close.svg
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgClose(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.655 16.767l66.69 66.466m-66.69 0l66.69-66.466",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 9.42
  })));
}

/* harmony default export */ var assets_close = (SvgClose);
;// CONCATENATED MODULE: ./public/assets/github.svg
var github_path;

var github_excluded = ["title", "titleId"];

function github_extends() { github_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return github_extends.apply(this, arguments); }

function github_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = github_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function github_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgGithub(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = github_objectWithoutProperties(_ref, github_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", github_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, github_path || (github_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "currentColor",
    d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z"
  })));
}

/* harmony default export */ var github = (SvgGithub);
;// CONCATENATED MODULE: ./public/assets/ig.svg
var _linearGradient, ig_path, _linearGradient2, _path2, _linearGradient3, _circle;

var ig_excluded = ["title", "titleId"];

function ig_extends() { ig_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ig_extends.apply(this, arguments); }

function ig_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ig_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ig_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgIg(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = ig_objectWithoutProperties(_ref, ig_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", ig_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 551.034 551.034",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, _linearGradient || (_linearGradient = /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "ig_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 275.517,
    y1: 4.571,
    x2: 275.517,
    y2: 549.72,
    gradientTransform: "matrix(1 0 0 -1 0 554)"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0,
    stopColor: "#e09b3d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.3,
    stopColor: "#c74c4d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.6,
    stopColor: "#c21975"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#7024c4"
  }))), ig_path || (ig_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z",
    fill: "url(#ig_svg__a)"
  })), _linearGradient2 || (_linearGradient2 = /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "ig_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 275.517,
    y1: 4.571,
    x2: 275.517,
    y2: 549.72,
    gradientTransform: "matrix(1 0 0 -1 0 554)"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0,
    stopColor: "#e09b3d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.3,
    stopColor: "#c74c4d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.6,
    stopColor: "#c21975"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#7024c4"
  }))), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z",
    fill: "url(#ig_svg__b)"
  })), _linearGradient3 || (_linearGradient3 = /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "ig_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 418.306,
    y1: 4.571,
    x2: 418.306,
    y2: 549.72,
    gradientTransform: "matrix(1 0 0 -1 0 554)"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0,
    stopColor: "#e09b3d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.3,
    stopColor: "#c74c4d"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.6,
    stopColor: "#c21975"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#7024c4"
  }))), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 418.306,
    cy: 134.072,
    r: 34.149,
    fill: "url(#ig_svg__c)"
  })));
}

/* harmony default export */ var ig = (SvgIg);
;// CONCATENATED MODULE: ./public/assets/linkedin.svg
var linkedin_path;

var linkedin_excluded = ["title", "titleId"];

function linkedin_extends() { linkedin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return linkedin_extends.apply(this, arguments); }

function linkedin_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = linkedin_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function linkedin_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLinkedin(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = linkedin_objectWithoutProperties(_ref, linkedin_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", linkedin_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, linkedin_path || (linkedin_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "currentColor",
    d: "M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z"
  })));
}

/* harmony default export */ var linkedin = (SvgLinkedin);
;// CONCATENATED MODULE: ./public/assets/menu.svg
var menu_path;

var menu_excluded = ["title", "titleId"];

function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }

function menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgMenu(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = menu_objectWithoutProperties(_ref, menu_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", menu_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, menu_path || (menu_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M3 12h18M3 6h18M3 18h18"
  })));
}

/* harmony default export */ var menu = (SvgMenu);
;// CONCATENATED MODULE: ./public/assets/twitter.svg
var twitter_path;

var twitter_excluded = ["title", "titleId"];

function twitter_extends() { twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return twitter_extends.apply(this, arguments); }

function twitter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = twitter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function twitter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgTwitter(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = twitter_objectWithoutProperties(_ref, twitter_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", twitter_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, twitter_path || (twitter_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "currentColor",
    d: "M20.3 57.4c23.6 0 36.4-19.5 36.4-36.4 0-.4 0-1.1-.1-1.7 2.5-1.8 4.7-4.1 6.4-6.6-2.4 1.1-4.8 1.7-7.3 2 2.7-1.6 4.7-4.1 5.6-7.1-2.5 1.4-5.1 2.5-8.2 3.1-2.4-2.5-5.6-4.1-9.3-4.1-7.1 0-12.9 5.8-12.9 12.9 0 1 .1 2 .3 3C20.9 21.8 11.5 16.7 5.1 9c-1.1 2-1.7 4.1-1.7 6.4 0 4.5 2.3 8.3 5.8 10.6-2.1-.1-4.1-.7-5.8-1.6v.1c0 6.1 4.4 11.4 10.2 12.6-1.1.3-2.3.4-3.2.4-.8 0-1.7-.1-2.4-.3 1.7 5.1 6.4 8.8 12 8.9-4.4 3.4-9.9 5.5-15.8 5.5-1.2.2-2.2 0-3.2-.1 5.4 3.8 12.1 5.9 19.3 5.9"
  })));
}

/* harmony default export */ var twitter = (SvgTwitter);
;// CONCATENATED MODULE: ./public/assets/wa.svg
var wa_path, wa_path2;

var wa_excluded = ["title", "titleId"];

function wa_extends() { wa_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wa_extends.apply(this, arguments); }

function wa_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = wa_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function wa_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgWa(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = wa_objectWithoutProperties(_ref, wa_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", wa_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 58 58",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, wa_path || (wa_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 58l4.988-14.963A28.35 28.35 0 011 28.5C1 12.76 13.76 0 29.5 0S58 12.76 58 28.5 45.24 57 29.5 57a28.373 28.373 0 01-13.26-3.273L0 58z",
    fill: "#2cb742"
  })), wa_path2 || (wa_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M47.683 37.985c-1.316-2.487-6.169-5.331-6.169-5.331-1.098-.626-2.423-.696-3.049.42 0 0-1.577 1.891-1.978 2.163-1.832 1.241-3.529 1.193-5.242-.52l-3.981-3.981-3.981-3.981c-1.713-1.713-1.761-3.41-.52-5.242.272-.401 2.163-1.978 2.163-1.978 1.116-.627 1.046-1.951.42-3.049 0 0-2.844-4.853-5.331-6.169a2.726 2.726 0 00-3.203.482l-1.758 1.758c-5.577 5.577-2.831 11.873 2.746 17.45l5.097 5.097 5.097 5.097c5.577 5.577 11.873 8.323 17.45 2.746l1.758-1.758a2.728 2.728 0 00.481-3.204z",
    fill: "#fff"
  })));
}

/* harmony default export */ var wa = (SvgWa);
;// CONCATENATED MODULE: ./src/components/atoms/Icon/Icon.tsx



/* eslint-disable */








const Icon = ({
  icon
}) => {
  let Icon = () => /*#__PURE__*/jsx_runtime_.jsx("svg", {});

  switch (icon) {
    case 'CLOSE':
      Icon = assets_close;
      break;

    case 'GITHUB':
      Icon = github;
      break;

    case 'INSTAGRAM':
      Icon = ig;
      break;

    case 'LINKEDIN':
      Icon = linkedin;
      break;

    case 'MENU':
      Icon = menu;
      break;

    case 'TWITTER':
      Icon = twitter;
      break;

    case 'WHATSAPP':
      Icon = wa;

    default:
      break;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {})
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/Icon/index.ts

;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/SocialIcons.tsx





const SocialIcons = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledSocialIcons, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://instagram.com/david.stefen",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Instagram",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
          icon: "INSTAGRAM"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://wa.me/6282280781433",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "WhatsApp",
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
          icon: "WHATSAPP"
        })
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/SocialIcons/index.ts

;// CONCATENATED MODULE: ./src/components/organisms/Footer/Footer.tsx






const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledFooter, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* Container */.W, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Flex, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["\xA9 ", new Date().getFullYear(), " Frieren"]
        }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcons, {})]
      })
    })
  });
};


;// CONCATENATED MODULE: ./src/components/organisms/Footer/index.ts

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/organisms/Header/styles.ts

const styles_Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-14e6kmf-0"
})(["display:flex;justify-content:space-between;align-items:center;a{color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);
const Desktop = external_styled_components_default().div.withConfig({
  displayName: "styles__Desktop",
  componentId: "sc-14e6kmf-1"
})(["display:none;@media screen and (min-width:768px){display:block;}"]);
const Mobile = external_styled_components_default().div.withConfig({
  displayName: "styles__Mobile",
  componentId: "sc-14e6kmf-2"
})(["display:block;@media screen and (min-width:768px){display:none;}"]);

;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/styles.ts

const StyledMobileNavigation = external_styled_components_default().ul.withConfig({
  displayName: "styles__StyledMobileNavigation",
  componentId: "sc-14uzdzl-0"
})(["display:flex;li{width:2rem;margin-left:1rem;}"]);
const Menu = external_styled_components_default().button.withConfig({
  displayName: "styles__Menu",
  componentId: "sc-14uzdzl-1"
})(["width:2rem;height:2rem;padding:0;background:transparent;border:0;color:", ";position:absolute;z-index:100;&:hover{color:", ";}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-14uzdzl-2"
})(["position:absolute;width:100%;height:100%;top:-50%;left:0;background:", ";display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:all 0.5s ease;z-index:10;&.open{opacity:1;pointer-events:auto;top:0;}"], ({
  theme
}) => theme.body);

;// CONCATENATED MODULE: ./src/components/molecules/Navigation/styles.ts

const StyledNavigation = external_styled_components_default().nav.withConfig({
  displayName: "styles__StyledNavigation",
  componentId: "sc-16epmp-0"
})([""]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-16epmp-1"
})(["display:flex;align-items:center;flex-direction:column;font-size:2rem;line-height:2;font-weight:bold;.desktop-only{display:none;}& > li a{padding:0.5rem 1rem;color:", ";text-decoration:none;transition:0.2s;&:hover{color:", ";}}@media screen and (min-width:768px){flex-direction:row;font-size:1rem;font-weight:normal;.desktop-only{display:block;}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/styles.ts

const StyledThemeToggle = external_styled_components_default().button.withConfig({
  displayName: "styles__StyledThemeToggle",
  componentId: "sc-1dfmkyd-0"
})(["background:transparent;border:1px solid ", ";color:", ";border-radius:3px;width:2rem;height:2rem;transition:0.2s;cursor:pointer;&:hover{color:", ";}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.headline);

;// CONCATENATED MODULE: ./src/redux/actionTypes.ts
const SET_THEME = 'SET_THEME';
;// CONCATENATED MODULE: ./src/redux/actions/theme.ts

const setTheme = payload => ({
  type: SET_THEME,
  payload
});
;// CONCATENATED MODULE: external "react-redux"
var external_react_redux_namespaceObject = require("react-redux");;
;// CONCATENATED MODULE: ./public/assets/dark.svg
var dark_path;

var dark_excluded = ["title", "titleId"];

function dark_extends() { dark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dark_extends.apply(this, arguments); }

function dark_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = dark_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function dark_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgDark(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = dark_objectWithoutProperties(_ref, dark_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", dark_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "dark_svg__feather dark_svg__feather-moon",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, dark_path || (dark_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
  })));
}

/* harmony default export */ var dark = (SvgDark);
;// CONCATENATED MODULE: ./public/assets/light.svg
var light_circle, light_path;

var light_excluded = ["title", "titleId"];

function light_extends() { light_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return light_extends.apply(this, arguments); }

function light_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = light_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function light_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = light_objectWithoutProperties(_ref, light_excluded);

  return /*#__PURE__*/external_react_.createElement("svg", light_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "light_svg__feather light_svg__feather-sun",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_.createElement("title", {
    id: titleId
  }, title) : null, light_circle || (light_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 5
  })), light_path || (light_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
  })));
}

/* harmony default export */ var light = (SvgLight);
;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/ThemeToggle.tsx








const ThemeToggle = () => {
  const theme = (0,external_react_redux_namespaceObject.useSelector)(getTheme);
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  const lightTheme = theme === 'light';

  const handleToggle = () => {
    dispatch(setTheme(lightTheme ? 'dark' : 'light'));
  };

  return /*#__PURE__*/jsx_runtime_.jsx(StyledThemeToggle, {
    onClick: handleToggle,
    title: `Switch to ${lightTheme ? 'dark' : 'light'} theme`,
    children: lightTheme ? /*#__PURE__*/jsx_runtime_.jsx(dark, {}) : /*#__PURE__*/jsx_runtime_.jsx(light, {})
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/ThemeToggle/index.ts

;// CONCATENATED MODULE: ./src/components/molecules/Navigation/Navigation.tsx






const Navigation = ({
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledNavigation, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "About"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Blog"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/portfolio",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Portfolio"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "https://api-xcoders.xyz",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: onClick,
            children: "Rest APIs"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "desktop-only",
        children: /*#__PURE__*/jsx_runtime_.jsx(ThemeToggle, {})
      })]
    })
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/Navigation/index.ts

;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/MobileNavigation.tsx










const MobileNavigation = () => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const toggle = () => setOpen(prev => !prev);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMobileNavigation, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(ThemeToggle, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Menu, {
          onClick: toggle,
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
            icon: isOpen ? 'CLOSE' : 'MENU'
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {
      className: external_classnames_default()({
        open: isOpen
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
        onClick: () => setOpen(false)
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/molecules/MobileNavigation/index.ts

;// CONCATENATED MODULE: ./src/components/organisms/Header/Header.tsx








const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* Container */.W, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Flex, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "David"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Desktop, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Navigation, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Mobile, {
          children: /*#__PURE__*/jsx_runtime_.jsx(MobileNavigation, {})
        })]
      })
    })
  });
};


;// CONCATENATED MODULE: ./src/components/organisms/Header/index.ts

;// CONCATENATED MODULE: ./src/components/templates/Layout/styles.ts

const StyledLayout = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledLayout",
  componentId: "sc-14vqbs-0"
})(["min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;"]);

;// CONCATENATED MODULE: ./src/components/templates/Layout/Layout.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLayout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};


;// CONCATENATED MODULE: ./src/components/templates/Layout/index.ts

;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: ./src/redux/reducers/theme.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  currentTheme: 'light'
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_namespaceObject.HYDRATE:
      if (action.payload.app === 'init') delete action.payload.app;
      if (action.payload.page === 'init') delete action.payload.page;
      return _objectSpread(_objectSpread({}, state), action.payload);

    case SET_THEME:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentTheme: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_theme = (theme);
;// CONCATENATED MODULE: ./src/redux/reducers/index.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  theme: reducers_theme
});
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/redux/store.ts





const store = ctx => (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
const storeWrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(store, {
  debug: false
});
;// CONCATENATED MODULE: ./src/styles/themes.ts
const brandColours = {
  white: '#fff',
  offWhite: '#f9fafc',
  lightGrey: '#afb5bf',
  black: '#000',
  offBlack: '#192f39',
  primary: '#e94e1b',
  primaryDark: '#de2c05',
  secondary: '#e63946'
};
const lightTheme = {
  body: brandColours.offWhite,
  text: brandColours.offBlack,
  headline: brandColours.black,
  grey: '#666',
  primary: brandColours.primaryDark
};
const darkTheme = {
  body: brandColours.black,
  text: brandColours.lightGrey,
  headline: brandColours.white,
  grey: '#ccc',
  primary: brandColours.primary
};
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  const theme = (0,external_react_redux_namespaceObject.useSelector)(getTheme);
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();

  const handleEventListener = e => e.matches ? dispatch(setTheme('dark')) : dispatch(setTheme('light'));

  (0,external_react_.useEffect)(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setTheme('dark'));
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleEventListener);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleEventListener); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: theme === 'light' ? lightTheme : darkTheme,
      children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })]
    })
  });
}

/* harmony default export */ var _app = (storeWrapper.withRedux(MyApp));

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
var __webpack_exports__ = __webpack_require__.X(0, [999,664], function() { return __webpack_exec__(886); });
module.exports = __webpack_exports__;

})();