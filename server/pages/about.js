(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
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

/***/ 6602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ about; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next-absolute-url"
var external_next_absolute_url_ = __webpack_require__(1185);
var external_next_absolute_url_default = /*#__PURE__*/__webpack_require__.n(external_next_absolute_url_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: ./src/utils/fetcher.ts
var fetcher = __webpack_require__(4397);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/atoms/Container/index.ts + 2 modules
var Container = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/components/atoms/Education/styles.ts

const StyledEducation = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledEducation",
  componentId: "sc-1irolb5-0"
})(["margin-bottom:3rem;"]);
const Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-1irolb5-1"
})(["display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0.5rem;@media screen and (min-width:768px){flex-direction:row;}"]);

;// CONCATENATED MODULE: ./src/components/atoms/Education/Education.tsx





const Education = ({
  education
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledEducation, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Flex, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: education.website ? /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: education.website,
            target: "_blank",
            rel: "noopener noreferrer",
            children: education.course
          }) : education.course
        }), ' ', "- ", education.institute]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: (0,external_date_fns_.format)(new Date(education.endDate), 'MM/yyyy')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("small", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "Course contents:"
        }), " ", education.technologies.join(', ')]
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/Education/index.ts

;// CONCATENATED MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_namespaceObject = require("markdown-to-jsx");;
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_namespaceObject);
;// CONCATENATED MODULE: ./src/components/atoms/Position/styles.ts

const StyledPosition = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledPosition",
  componentId: "sc-1clk440-0"
})([""]);
const styles_Flex = external_styled_components_default().div.withConfig({
  displayName: "styles__Flex",
  componentId: "sc-1clk440-1"
})(["display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0.5rem;@media screen and (min-width:768px){flex-direction:row;}"]);
const Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1clk440-2"
})(["margin:0.5rem 0 3rem;ul{margin:0;list-style:square;padding-left:1rem;li{margin-bottom:0.5rem;}}"]);

;// CONCATENATED MODULE: ./src/components/atoms/Position/Position.tsx






const Position = ({
  job
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledPosition, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Flex, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: job.jobTitle
        }), " -", ' ', job.website ? /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: job.website,
          target: "_blank",
          rel: "noopener noreferrer",
          children: job.company
        }) : job.company]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [(0,external_date_fns_.format)(new Date(job.startDate), 'MM/yyyy'), " -", ' ', job.endDate ? (0,external_date_fns_.format)(new Date(job.endDate), 'MM/yyyy') : 'present']
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("small", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "Technologies:"
        }), " ", job.technologies.join(', ')]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
      children: /*#__PURE__*/jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
        children: job.description
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/Position/index.ts

// EXTERNAL MODULE: ./src/components/atoms/SeoHead/index.ts + 1 modules
var SeoHead = __webpack_require__(1112);
;// CONCATENATED MODULE: ./src/pages/about.tsx




/* eslint-disable */










function About({
  jobs,
  education
}) {
  const {
    0: loadedJobs,
    1: setLoadedJobs
  } = (0,external_react_.useState)(2);

  const loadMore = () => {
    setLoadedJobs(prev => prev + 3);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SeoHead/* SeoHead */.f, {
      title: "About",
      description: "As a passionate front-end developer, I create amazing websites and web apps to make the internet a better place."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Headline, {
        children: "Hey, I'm David Stefen Alvianus"
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Programmer from Indonesia"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["I am ", (0,external_date_fns_.differenceInCalendarYears)(new Date(), new Date('2002-06-28')), "years old and become programmer for as long as I can remember. The technologies I work with are JavaScript, Python, C++, PHP. I use code not only to do my day-to-day job, but also to solve everyday problems I come across."]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "When I am not writing code I love to spend time playing games or watching movies. I speak three languages: Besemah, Indonesian, and English."
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Experience"
      }), jobs.slice(0, loadedJobs).map((job, i) => /*#__PURE__*/jsx_runtime_.jsx(Position, {
        job: job
      }, job.company + i)), /*#__PURE__*/jsx_runtime_.jsx(Center, {
        children: loadedJobs < jobs.length && /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: loadMore,
          children: "Load more"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Education"
      }), education.map(edu => /*#__PURE__*/jsx_runtime_.jsx(Education, {
        education: edu
      }, edu.course)), /*#__PURE__*/jsx_runtime_.jsx(Center, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/Curriculum Vitae.pdf",
          target: "_blank",
          children: "Download a copy of my CV"
        })
      })]
    })]
  });
}

const Headline = external_styled_components_default().h2.withConfig({
  displayName: "about__Headline",
  componentId: "sc-1xkvzty-0"
})(["font-size:2rem;margin-bottom:0;@media screen and (min-width:768px){font-size:3rem;span{display:inline-block;}@keyframes wave{0%{transform:rotate(0);}50%{transform:rotate(-10deg);}100%{transform:rotate(10deg);}}&:hover span{animation:wave 0.5s ease infinite;}}"]);
const Center = external_styled_components_default().div.withConfig({
  displayName: "about__Center",
  componentId: "sc-1xkvzty-1"
})(["text-align:center;font-weight:bold;margin-top:2rem;button{display:block;margin:2rem auto;border:2px solid ", ";color:", ";padding:0.5rem 3rem;border-radius:5px;background:transparent;}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text);
const getServerSideProps = async ({
  req
}) => {
  const {
    origin
  } = external_next_absolute_url_default()(req);
  const {
    positions
  } = await (0,fetcher/* fetcher */._)(`${origin}/api/jobs`);
  const {
    education
  } = await (0,fetcher/* fetcher */._)(`${origin}/api/education`);
  const skills = await (0,fetcher/* fetcher */._)(`${origin}/api/skills`);
  return {
    props: {
      jobs: positions,
      education,
      skills
    }
  };
};
/* harmony default export */ var about = (About);

/***/ }),

/***/ 4397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ fetcher; }
/* harmony export */ });
const fetcher = async (input, init) => {
  const res = await fetch(input, init);
  return res.json();
};

/***/ }),

/***/ 3879:
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ 1185:
/***/ (function(module) {

"use strict";
module.exports = require("next-absolute-url");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [112], function() { return __webpack_exec__(6602); });
module.exports = __webpack_exports__;

})();