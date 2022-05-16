exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 1112:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": function() { return /* reexport */ SeoHead; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/atoms/SeoHead/SeoHead.tsx




const SeoHead = ({
  title,
  description,
  author = 'Jacob Herper',
  keywords,
  image = 'https://res.cloudinary.com/jacobherper/image/upload/c_fill,g_north,h_1080,w_1920/v1587315694/herper-io.png ',
  meta
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: author
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:url",
      content: "https://frieren.my.id/"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:card",
      content: "summary"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:creator",
      content: author
    }), meta && meta.length > 0 && meta.map(({
      name,
      content
    }) => /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: name,
      content: content
    }, name)), image && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "og:image",
      content: image
    }), image && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:image",
      content: image
    }), keywords && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: `{"@context":"http://schema.org","@type":"WebSite","name":"","alternateName":"Jacob Herper","url":"https://jacobherper.com/","description":"Front-End Software Engineer with a focus on React.js and TypeScript. I have more than 10 years experience working in software engineering.","image":"${image}"}`
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/jacobherper/image/upload/v1587315576/jacob_herper.jpg","name":"Jacob Herper","alternateName":"JakeHerp","url":"https://herper.io/","jobTitle":["Senior Software Engineer","Frontend Engineer", "Front-End Developer", "Web Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Software Engineer","occupationLocation":{"@type":"City","name":"London"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","duration":"P1H","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/jacobherper","http://twitter.com/jakeherp","https://github.com/jakeherp","https://www.facebook.com/jakeherp","https://instagram.com/jakeherp"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Front-End Engineer"},{"@type":"Brand","name":"JakeHerp","alternateName":"Jacob Herper"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://www.dennis.co.uk/","name":"Dennis Digital","alternateName":"Dennis"}],"homeLocation":{"@type":"City","name":"London"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Herper","jobTitle":"Chef","birthDate":"1967-08-22"},{"name":"Anne-Kristin Herper","birthDate":"1968-02-26"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1990-09-19","nationality":{"@type":"Country","name":"Mexico"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Mexico"}}}}`
      }
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/atoms/SeoHead/index.ts


/***/ })

};
;