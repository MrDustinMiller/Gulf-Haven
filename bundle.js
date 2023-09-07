/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assests/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assests/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rubik-SemiBoldItalic.ttf */ "./src/assests/fonts/Rubik-SemiBoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Medium.ttf */ "./src/assests/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Rubik';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

/* Box sizing rules */
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100dvh;
  line-height: 1.5;
  font-size: 1rem;
  color:black;
  background-color: #fff7ec;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

:root {
  --font-color: rgba(10, 10, 7, 0.6);
  --font-style: sans-serif;
  --text-block-font: 'Roboto';
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover, .mobile-nav-icon:hover {
    cursor: pointer;
}

.header {
    max-width: 100dvw;
    max-height: 10dvw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    font-weight: bolder;
    font-family: 'Rubik';
    color: var(bold --font-color);
    padding: 0em 2em 0em 2em;

}

.header-logo {
  margin: 0.8rem;
}

.header-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.desktop-header-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 3rem;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 2em;
}

.mobile-header-right{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.mobile-nav-icon, .mobile-nav-close {
    margin: 1em;
    padding: 0.6em 0.25em 0.6em 0.25em;
}

.mobile-nav {
    min-height: 100dvh;
    min-width: 100dvw;
    background-color: #090808f7;
    color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 5rem;
    position: absolute;
    right:0;
    visibility: hidden;
}

.mobile-nav-animation {
    -webkit-animation: slide-in 1000ms;
            animation: slide-in 1000ms;
}

.active {
    -webkit-text-decoration: 2px underline;
            text-decoration: 2px underline;
}
  
.mobile-nav > a:first-child {
    margin-top: 3rem;
}

.home-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  text-align: left;
  /* background possibility (van with palm trees) on home page */
  background-repeat: no-repeat;
  background-size: 54%;
  background-position: right;
}

.main-left, .main-right {
  height: 89dvh;
  width: 100dvw;
}

.main-right {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.socials-div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 3rem;
  gap: 2rem; 
}


.home-welcome-div {
  word-break: break-word;
  padding: 3em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  /* gap: 2rem; */
  /* height: 60dvh; */
}

i:hover {
  cursor: pointer;
}

.home-title, .home-content-header, .header, .home-title-bottom, .link-item {
  font-family: 'Rubik';
}

.home-title {
  font-size: 4rem;
}

.home-title-bottom {
  font-size: 3rem;
  color: #629436;
}

.home-content-header {
  margin: 2rem 0em 2rem 0em;
  letter-spacing: 1rem;
  font-size: 1.25rem;
  color: #111827
}

.home-content-text {
  font-size: 1.15rem;
  color: rgb(22, 22, 22);
  font-family: var(--text-block-font);
}

.call-now-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  max-width: 21dvw;
  font-size: 1.25rem;
  font-family: rubik;
  margin-top: 2rem;
  border-radius: 8px;
  border: 2px solid black;
  cursor: pointer;
  padding: 0.25rem;
  background-color: #e9d1ac;
  -webkit-transition: ease-out 0.4s;
  -o-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  color: black;
}

.call-now-btn:hover {
  -webkit-box-shadow: inset 400px 0 0 0 #629436;
          box-shadow: inset 400px 0 0 0 #629436;
  color:white;
}


.about-div{
  background-color: grey;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  height: 100dvh;
  width: 100dvw;
}

.picture-div-one, .picture-div-two, .text-div-one, .text-div-two {
  width:50dvw;
  height:50dvh;
  background-color: grey;
}

@media (max-width: 700px)  {
  .mobile-nav {
    height: 100dvh;
    width: 100dvw;
  }
  
  .call-now-btn:active {
    -webkit-box-shadow: inset 400px 0 0 0 #629436;
    box-shadow: inset 400px 0 0 0 #629436;
    color:white;
    transition: none;
  }

  .call-now-btn:hover {
    pointer-events: none;
  }

  .home-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 0.5rem; 
    word-break: break-word;
    /* if bg stays same */
    background-position: top;
    background-size: 54%;
  }

  .home-welcome-div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 1.25rem;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0rem;
  }

  .call-now-btn {
    max-width: 92dvw;
    transition: all 0.2s;
    transition-delay: 300ms;
  }

  .header {
    padding: 0rem;
    max-height: 9dvh;
    position: sticky;
    background-color: #fff7ed;
    top: 0;
  }

  .socials-div {
    visibility: hidden;
    padding: 0rem;
    margin: 0;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
    margin-top: 4rem;
  }

  .home-title, .home-title-bottom, .home-content-header, .home-content-text {
    font-size: 1rem;
  } 

  .home-content-header {
    letter-spacing: 0.8rem;
  }

  .home-title-bottom {
    font-size: 1.6rem;
  }
  
  .home-title {
    font-size: 2.5rem;
  }

  .home-content-text {
  font-size: 1.05rem;
    max-width: 91dvw;
  }

  .header-logo-text{
    visibility: hidden;
  }

  .main-left {
    /* if bg stays same */
    margin-top: 8rem;
  }

  /* not sure about below but working on ideas */
  .main-right {
    display: none;
  }

  .picture-div-one, .picture-div-two, .text-div-one, .text-div-two { 
    width: 100dvw;
    height: 50dvh;
  }
}


@-webkit-keyframes slide-in {
    from {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
    to {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
    }
  }

@keyframes slide-in {
    from {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
    to {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
    }
  }

  @-webkit-keyframes bounce-4 {
    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }
    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }
    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
}

  @keyframes bounce-4 {
    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }
    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }
    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }
}`, "",{"version":3,"sources":["webpack://./src/assests/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Rubik';\n  src: url('./fonts/Rubik-SemiBoldItalic.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('./fonts/Roboto-Medium.ttf') format('truetype');\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100dvh;\n  line-height: 1.5;\n  font-size: 1rem;\n  color:black;\n  background-color: #fff7ec;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n:root {\n  --font-color: rgba(10, 10, 7, 0.6);\n  --font-style: sans-serif;\n  --text-block-font: 'Roboto';\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\na:hover, .mobile-nav-icon:hover {\n    cursor: pointer;\n}\n\n.header {\n    max-width: 100dvw;\n    max-height: 10dvw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-weight: bolder;\n    font-family: 'Rubik';\n    color: var(bold --font-color);\n    padding: 0em 2em 0em 2em;\n\n}\n\n.header-logo {\n  margin: 0.8rem;\n}\n\n.header-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.desktop-header-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 3rem;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 2em;\n}\n\n.mobile-header-right{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.mobile-nav-icon, .mobile-nav-close {\n    margin: 1em;\n    padding: 0.6em 0.25em 0.6em 0.25em;\n}\n\n.mobile-nav {\n    min-height: 100dvh;\n    min-width: 100dvw;\n    background-color: #090808f7;\n    color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 5rem;\n    position: absolute;\n    right:0;\n    visibility: hidden;\n}\n\n.mobile-nav-animation {\n    -webkit-animation: slide-in 1000ms;\n            animation: slide-in 1000ms;\n}\n\n.active {\n    -webkit-text-decoration: 2px underline;\n            text-decoration: 2px underline;\n}\n  \n.mobile-nav > a:first-child {\n    margin-top: 3rem;\n}\n\n.home-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: left;\n  /* background possibility (van with palm trees) on home page */\n  background-repeat: no-repeat;\n  background-size: 54%;\n  background-position: right;\n}\n\n.main-left, .main-right {\n  height: 89dvh;\n  width: 100dvw;\n}\n\n.main-right {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.socials-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 3rem;\n  gap: 2rem; \n}\n\n\n.home-welcome-div {\n  word-break: break-word;\n  padding: 3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* gap: 2rem; */\n  /* height: 60dvh; */\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-title, .home-content-header, .header, .home-title-bottom, .link-item {\n  font-family: 'Rubik';\n}\n\n.home-title {\n  font-size: 4rem;\n}\n\n.home-title-bottom {\n  font-size: 3rem;\n  color: #629436;\n}\n\n.home-content-header {\n  margin: 2rem 0em 2rem 0em;\n  letter-spacing: 1rem;\n  font-size: 1.25rem;\n  color: #111827\n}\n\n.home-content-text {\n  font-size: 1.15rem;\n  color: rgb(22, 22, 22);\n  font-family: var(--text-block-font);\n}\n\n.call-now-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 21dvw;\n  font-size: 1.25rem;\n  font-family: rubik;\n  margin-top: 2rem;\n  border-radius: 8px;\n  border: 2px solid black;\n  cursor: pointer;\n  padding: 0.25rem;\n  background-color: #e9d1ac;\n  -webkit-transition: ease-out 0.4s;\n  -o-transition: ease-out 0.4s;\n  transition: ease-out 0.4s;\n  color: black;\n}\n\n.call-now-btn:hover {\n  -webkit-box-shadow: inset 400px 0 0 0 #629436;\n          box-shadow: inset 400px 0 0 0 #629436;\n  color:white;\n}\n\n\n.about-div{\n  background-color: grey;\n}\n\n.about-content {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100dvh;\n  width: 100dvw;\n}\n\n.picture-div-one, .picture-div-two, .text-div-one, .text-div-two {\n  width:50dvw;\n  height:50dvh;\n  background-color: grey;\n}\n\n@media (max-width: 700px)  {\n  .mobile-nav {\n    height: 100dvh;\n    width: 100dvw;\n  }\n  \n  .call-now-btn:active {\n    -webkit-box-shadow: inset 400px 0 0 0 #629436;\n    box-shadow: inset 400px 0 0 0 #629436;\n    color:white;\n    transition: none;\n  }\n\n  .call-now-btn:hover {\n    pointer-events: none;\n  }\n\n  .home-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0.5rem; \n    word-break: break-word;\n    /* if bg stays same */\n    background-position: top;\n    background-size: 54%;\n  }\n\n  .home-welcome-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 1.25rem;\n    text-align: center;\n    margin-bottom: 1rem;\n    padding: 0rem;\n  }\n\n  .call-now-btn {\n    max-width: 92dvw;\n    transition: all 0.2s;\n    transition-delay: 300ms;\n  }\n\n  .header {\n    padding: 0rem;\n    max-height: 9dvh;\n    position: sticky;\n    background-color: #fff7ed;\n    top: 0;\n  }\n\n  .socials-div {\n    visibility: hidden;\n    padding: 0rem;\n    margin: 0;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 4rem;\n  }\n\n  .home-title, .home-title-bottom, .home-content-header, .home-content-text {\n    font-size: 1rem;\n  } \n\n  .home-content-header {\n    letter-spacing: 0.8rem;\n  }\n\n  .home-title-bottom {\n    font-size: 1.6rem;\n  }\n  \n  .home-title {\n    font-size: 2.5rem;\n  }\n\n  .home-content-text {\n  font-size: 1.05rem;\n    max-width: 91dvw;\n  }\n\n  .header-logo-text{\n    visibility: hidden;\n  }\n\n  .main-left {\n    /* if bg stays same */\n    margin-top: 8rem;\n  }\n\n  /* not sure about below but working on ideas */\n  .main-right {\n    display: none;\n  }\n\n  .picture-div-one, .picture-div-two, .text-div-one, .text-div-two { \n    width: 100dvw;\n    height: 50dvh;\n  }\n}\n\n\n@-webkit-keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n@keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n  @-webkit-keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}\n\n  @keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assests/style.css":
/*!*******************************!*\
  !*** ./src/assests/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assests/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events/events.js":
/*!******************************!*\
  !*** ./src/events/events.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkScreenSizeAdjustment)
/* harmony export */ });
/* harmony import */ var _ui_mobile_nav_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/mobile-nav-menu */ "./src/ui/mobile-nav-menu.js");
/* harmony import */ var _ui_desktop_nav_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/desktop-nav-menu */ "./src/ui/desktop-nav-menu.js");



// runs when screen size is adjusted to see if we need to update display or not
function checkScreenSizeAdjustment() {
  const window = document.defaultView;

  window.addEventListener('resize', (e) => {
    const windowHeight = e.target.outerHeight;
    const windowWidth = e.target.outerWidth;

    if (windowHeight <= 1000 && windowWidth <= 700) {
      (0,_ui_mobile_nav_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    } else if (windowHeight >= 700 && windowWidth >= 701) {
      (0,_ui_desktop_nav_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
}


/***/ }),

/***/ "./src/events/nav-events.js":
/*!**********************************!*\
  !*** ./src/events/nav-events.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mobileNavEvents),
/* harmony export */   navEvents: () => (/* binding */ navEvents)
/* harmony export */ });
/* harmony import */ var _ui_active_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/active-attribute */ "./src/ui/active-attribute.js");
/* harmony import */ var _ui_pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/about */ "./src/ui/pages/about.js");
/* harmony import */ var _ui_pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/pages/contact */ "./src/ui/pages/contact.js");
/* harmony import */ var _ui_pages_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/pages/services */ "./src/ui/pages/services.js");
/* harmony import */ var _ui_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/dom */ "./src/ui/dom.js");
/* harmony import */ var _ui_pages_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/pages/home */ "./src/ui/pages/home.js");







function checkWhichSidebarLinkIsClicked(e) {
  switch (e.target.textContent) {
    case 'ABOUT':
      (0,_ui_pages_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
    case 'CONTACT':
      (0,_ui_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
    case 'HOME':
      (0,_ui_pages_home__WEBPACK_IMPORTED_MODULE_5__["default"])();
      break;
    case 'SERVICES':
      (0,_ui_pages_services__WEBPACK_IMPORTED_MODULE_3__["default"])();
      break;
    default:
      break;
  }
}

function navEvents() {
  const navLinks = document.querySelectorAll('.link-item');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      (0,_ui_active_attribute__WEBPACK_IMPORTED_MODULE_0__.checkForActiveAttribute)(navLinks);
      (0,_ui_dom__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_ui_active_attribute__WEBPACK_IMPORTED_MODULE_0__.addActiveAttribute)(e);
      checkWhichSidebarLinkIsClicked(e);
    });
  });
}

function mobileNavEvents() {
  const mobileNavDisplay = document.querySelector('.mobile-nav');
  const mobileHeaderRight = document.querySelector('.mobile-header-right');

  if (mobileHeaderRight) {
    mobileHeaderRight.addEventListener('click', () => {
      // if visible and X is clicked, hide nav menu
      if (mobileNavDisplay.style.visibility === 'visible') {
        mobileNavDisplay.style.visibility = 'hidden';
        mobileNavDisplay.classList.remove('mobile-nav-animation');

        // change X icon back to mobile nav bars
        const mobileNavCloseIcon = document.querySelector('.mobile-nav-close');
        mobileNavCloseIcon.removeAttribute('class');
        mobileNavCloseIcon.setAttribute(
          'class',
          'fa-solid fa-bars-staggered fa-xl'
        );
        mobileNavCloseIcon.classList.add('mobile-nav-icon');
      } else {
        mobileNavDisplay.style.visibility = 'visible';
        mobileNavDisplay.classList.add('mobile-nav-animation');
        // change mobile nav bar icon to X
        const mobileNavBarIcon = document.querySelector('.mobile-nav-icon');
        mobileNavBarIcon.removeAttribute('class');
        mobileNavBarIcon.setAttribute('class', 'fa-solid fa-x fa-xl');
        mobileNavBarIcon.classList.add('mobile-nav-close');
      }
    });
  }
}




/***/ }),

/***/ "./src/ui/active-attribute.js":
/*!************************************!*\
  !*** ./src/ui/active-attribute.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addActiveAttribute: () => (/* binding */ addActiveAttribute),
/* harmony export */   checkForActiveAttribute: () => (/* binding */ checkForActiveAttribute)
/* harmony export */ });
function addActiveAttribute(e) {
  e.target.classList.add('active');
}

function checkForActiveAttribute(linkArray) {
  linkArray.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
}




/***/ }),

/***/ "./src/ui/call-button.js":
/*!*******************************!*\
  !*** ./src/ui/call-button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildCallToBookButton)
/* harmony export */ });
function buildCallToBookButton(titleAndWelcomeDiv) {
  const callNowButton = document.createElement('button');
  callNowButton.classList.add('call-now-btn');
  titleAndWelcomeDiv.appendChild(callNowButton);

  const callNowButtonText = document.createElement('a');
  callNowButtonText.classList.add('call-now-btn-text');
  callNowButtonText.setAttribute('href', 'tel:12288639096');
  callNowButtonText.setAttribute('target', '_blank');
  callNowButtonText.textContent = 'Call now to reserve!';
  callNowButton.appendChild(callNowButtonText);

  const callBtnIcon = document.createElement('i');
  callBtnIcon.setAttribute('class', 'fa-solid fa-phone-volume');
  callNowButton.appendChild(callBtnIcon);
}


/***/ }),

/***/ "./src/ui/desktop-nav-menu.js":
/*!************************************!*\
  !*** ./src/ui/desktop-nav-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildDesktopNavMenu)
/* harmony export */ });
/* harmony import */ var _nav_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-links */ "./src/ui/nav-links.js");


function checkIfDesktopHeaderExists() {
  if (document.querySelector('.desktop-header-right')) return true;
  return false;
}

function checkIfMobileHeaderExists(headerDiv, body, mobileNav) {
  const mobileHeader = document.querySelector('.mobile-header-right');

  if (mobileHeader) {
    headerDiv.removeChild(mobileHeader);
    body.removeChild(mobileNav);
  }
}

function buildDesktopNavMenu() {
  // if header nav exists when being called be a resize event, just return
  const headerCheck = checkIfDesktopHeaderExists();
  if (headerCheck) return;

  const headerDiv = document.querySelector('.header');
  const body = document.querySelector('.content');
  const mobileNav = document.querySelector('.mobile-nav');

  // if mobile header exists while resizing window, remove from window
  checkIfMobileHeaderExists(headerDiv, body, mobileNav);

  const headerRight = document.createElement('div');
  headerRight.classList.add('desktop-header-right');
  headerDiv.appendChild(headerRight);

  (0,_nav_links__WEBPACK_IMPORTED_MODULE_0__["default"])(headerRight);
}


/***/ }),

/***/ "./src/ui/dom.js":
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wipeDomContent)
/* harmony export */ });
function wipeDomContent() {
  const parentContainer = document.querySelector('.content');
  const { children } = parentContainer;
  const childArray = [...children];

  // will either need to change home-content or add every page here because each page
  // will be named x-content to style them differently
  childArray.forEach((child) => {
    if (
      child.classList[0] === 'home-content' ||
      child.classList[0] === 'about-content' ||
      child.classList[0] === 'service-content' ||
      child.classList[0] === 'contact-content'
    ) {
      parentContainer.removeChild(child);
    }
  });
}


/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkScreenSize: () => (/* binding */ checkScreenSize),
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _desktop_nav_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-nav-menu */ "./src/ui/desktop-nav-menu.js");
/* harmony import */ var _mobile_nav_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-nav-menu */ "./src/ui/mobile-nav-menu.js");
/* harmony import */ var _events_nav_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/nav-events */ "./src/events/nav-events.js");
// import test from '../assests/images/gulf-haven-logo.png';




// runs on load to determine if we load a desktop or mobile view
function checkScreenSize() {
  const window = document.defaultView;
  const windowHeight = window.screen.height;
  const windowWidth = window.screen.width;

  // if screen size less than or equal to phone sizes & ipad
  if (windowHeight <= 1080 && windowWidth <= 810) {
    (0,_mobile_nav_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_events_nav_events__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_events_nav_events__WEBPACK_IMPORTED_MODULE_2__.navEvents)();
  } else {
    (0,_desktop_nav_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_events_nav_events__WEBPACK_IMPORTED_MODULE_2__.navEvents)();
  }
}

function createHeader() {
  const body = document.querySelector('.content');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  body.appendChild(headerDiv);

  const headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  headerDiv.appendChild(headerLeft);

  const rvLogo = document.createElement('i');
  rvLogo.setAttribute('class', 'fa-solid fa-caravan fa-xl');
  rvLogo.classList.add('header-logo');
  headerLeft.appendChild(rvLogo);

  // const headerLogo = document.createElement('img');
  // headerLogo.classList.add('header-logo');
  // headerLogo.src = test;
  // headerLeft.appendChild(headerLogo);

  const headerLogoText = document.createElement('p');
  headerLogoText.classList.add('header-logo-text');
  headerLogoText.textContent = 'GULF HAVEN RV';
  headerLeft.appendChild(headerLogoText);

  checkScreenSize();
}




/***/ }),

/***/ "./src/ui/mobile-nav-menu.js":
/*!***********************************!*\
  !*** ./src/ui/mobile-nav-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMobileNavLinks: () => (/* binding */ buildMobileNavLinks),
/* harmony export */   "default": () => (/* binding */ buildMobileNavIcon)
/* harmony export */ });
/* harmony import */ var _nav_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-links */ "./src/ui/nav-links.js");


function buildMobileNavLinks() {
  const body = document.querySelector('.content');

  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');
  body.appendChild(mobileNav);

  (0,_nav_links__WEBPACK_IMPORTED_MODULE_0__["default"])(mobileNav);
}

function checkIfMobileNavExists() {
  const mobileHeader = document.querySelector('.mobile-header-right');
  if (mobileHeader) return true;

  return false;
}

function checkIfDesktopHeaderExists(headerDiv) {
  const desktopHeader = document.querySelector('.desktop-header-right');
  if (desktopHeader) {
    headerDiv.removeChild(desktopHeader);
  }
}

function buildMobileNavIcon() {
  // if mobile nav exists when being called by a resize event, just return
  const headerCheck = checkIfMobileNavExists();
  if (headerCheck) return;

  const headerDiv = document.querySelector('.header');
  // if desktop header exists while resizing window, remove from window
  checkIfDesktopHeaderExists(headerDiv);

  const headerRight = document.createElement('div');
  headerRight.classList.add('mobile-header-right');
  headerDiv.appendChild(headerRight);

  const navIcon = document.createElement('i');
  navIcon.setAttribute('class', 'fa-solid fa-bars-staggered fa-xl');
  navIcon.classList.add('mobile-nav-icon');
  headerRight.appendChild(navIcon);
  buildMobileNavLinks();
}




/***/ }),

/***/ "./src/ui/nav-links.js":
/*!*****************************!*\
  !*** ./src/ui/nav-links.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildNavLinks)
/* harmony export */ });
function buildNavLinks(element) {
  const homeLink = document.createElement('a');
  homeLink.classList.add('home-link');
  homeLink.classList.add('link-item');
  // we want home to be the page the site opens up to
  homeLink.classList.add('active');
  homeLink.textContent = 'HOME';
  element.appendChild(homeLink);

  const aboutLink = document.createElement('a');
  aboutLink.classList.add('about-link');
  aboutLink.classList.add('link-item');
  aboutLink.textContent = 'ABOUT';
  element.appendChild(aboutLink);

  const servicesLink = document.createElement('a');
  servicesLink.classList.add('services-link');
  servicesLink.classList.add('link-item');
  servicesLink.textContent = 'SERVICES';
  element.appendChild(servicesLink);

  const contactLink = document.createElement('a');
  contactLink.classList.add('contact-link');
  contactLink.classList.add('link-item');
  contactLink.textContent = 'CONTACT';
  element.appendChild(contactLink);
}


/***/ }),

/***/ "./src/ui/pages/about.js":
/*!*******************************!*\
  !*** ./src/ui/pages/about.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAboutPage)
/* harmony export */ });
function buildAboutDivs() {
  const content = document.querySelector('.about-content');

  const pictureDivOne = document.createElement('div');
  pictureDivOne.classList.add('picture-div-one');
  pictureDivOne.classList.add('about-div');
  content.appendChild(pictureDivOne);

  const textDivOne = document.createElement('div');
  textDivOne.classList.add('text-div-one');
  textDivOne.classList.add('about-div');
  content.appendChild(textDivOne);

  const pictureDivTwo = document.createElement('div');
  pictureDivTwo.classList.add('picture-div-two');
  pictureDivTwo.classList.add('about-div');
  content.appendChild(pictureDivTwo);

  const textDivTwo = document.createElement('div');
  textDivTwo.classList.add('text-div-two');
  textDivTwo.classList.add('about-div');
  content.appendChild(textDivTwo);
}

function buildAboutContentDiv() {
  const main = document.querySelector('.content');
  const homeContent = document.createElement('div');

  homeContent.classList.add('about-content');
  main.appendChild(homeContent);
  buildAboutDivs();
}

function loadAboutPage() {
  buildAboutContentDiv();
}


/***/ }),

/***/ "./src/ui/pages/contact.js":
/*!*********************************!*\
  !*** ./src/ui/pages/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });
function loadContactPage() {}


/***/ }),

/***/ "./src/ui/pages/home.js":
/*!******************************!*\
  !*** ./src/ui/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePageOnLoad)
/* harmony export */ });
/* harmony import */ var _assests_images_test_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assests/images/test.png */ "./src/assests/images/test.png");
/* harmony import */ var _call_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../call-button */ "./src/ui/call-button.js");
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socials */ "./src/ui/socials.js");




function buildHomeMainLeftDiv(homeContent) {
  const mainLeft = document.createElement('div');
  mainLeft.classList.add('main-left');
  mainLeft.classList.add('home-page');
  homeContent.appendChild(mainLeft);

  const titleAndWelcomeDiv = document.createElement('div');
  titleAndWelcomeDiv.classList.add('home-welcome-div');
  mainLeft.appendChild(titleAndWelcomeDiv);

  const homeTitle = document.createElement('p');
  homeTitle.classList.add('home-title');
  homeTitle.textContent = 'BOOK A BEACH BREAK';
  titleAndWelcomeDiv.appendChild(homeTitle);

  const homeTitleBottom = document.createElement('p');
  homeTitleBottom.classList.add('home-title-bottom');
  homeTitleBottom.textContent = 'COME STOP BY!';
  titleAndWelcomeDiv.appendChild(homeTitleBottom);

  const homeLeftContentHeader = document.createElement('p');
  homeLeftContentHeader.classList.add('home-content-header');
  homeLeftContentHeader.textContent = 'GULF HAVEN RV RESORT';
  titleAndWelcomeDiv.appendChild(homeLeftContentHeader);

  const homeLeftTextContent = document.createElement('p');
  homeLeftTextContent.classList.add('home-content-text');
  homeLeftTextContent.textContent =
    'Located just off Highway 90 (Beach Blvd) in Gulfport Gulf Haven Campground features RV hook-ups, pull-through spaces, Wi-Fi access and cable connections at every site, palm trees, flower beds, and much more. The office houses not only the office, but the showers and restrooms. A wraparound porch equipped with rocking chairs overlooks the beautiful Gulf of Mexico!';
  titleAndWelcomeDiv.appendChild(homeLeftTextContent);

  (0,_call_button__WEBPACK_IMPORTED_MODULE_1__["default"])(titleAndWelcomeDiv);
  (0,_socials__WEBPACK_IMPORTED_MODULE_2__["default"])(mainLeft);
}

function buildHomeMainRightDiv(homeContent) {
  const mainRight = document.createElement('div');

  mainRight.classList.add('main-right');
  // mainRight.style.backgroundImage = `url(${mainRightBG})`;
  mainRight.classList.add('home-page');
  homeContent.appendChild(mainRight);
}

function buildHomeContentDiv() {
  const main = document.querySelector('.content');
  const homeContent = document.createElement('div');

  homeContent.classList.add('home-content');
  homeContent.style.backgroundImage = `url(${_assests_images_test_png__WEBPACK_IMPORTED_MODULE_0__})`;
  main.appendChild(homeContent);
  buildHomeMainLeftDiv(homeContent);
  buildHomeMainRightDiv(homeContent);
}

function loadHomePageOnLoad() {
  buildHomeContentDiv();
}


/***/ }),

/***/ "./src/ui/pages/services.js":
/*!**********************************!*\
  !*** ./src/ui/pages/services.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadServicesPage)
/* harmony export */ });
function loadServicesPage() {}


/***/ }),

/***/ "./src/ui/socials.js":
/*!***************************!*\
  !*** ./src/ui/socials.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildSocialsDiv)
/* harmony export */ });
function buildSocialsDiv(mainLeft) {
  const socialsDiv = document.createElement('div');
  socialsDiv.classList.add('socials-div');
  mainLeft.appendChild(socialsDiv);

  const socialFacebookLink = document.createElement('i');
  socialFacebookLink.setAttribute('class', 'fa-brands fa-facebook fa-2xl');
  socialFacebookLink.setAttribute('title', 'Facebook');
  socialFacebookLink.classList.add('facebook-link');
  socialsDiv.appendChild(socialFacebookLink);

  //   const socialInstagramLink = document.createElement('i');
  //   socialInstagramLink.setAttribute(
  //     'class',
  //     'fa-brands fa-square-instagram fa-2xl'
  //   );
  //   socialInstagramLink.classList.add('instagram-link');
  //   socialsDiv.appendChild(socialInstagramLink);

  const socialGulfCoastLink = document.createElement('i');
  socialGulfCoastLink.setAttribute('class', 'fa-solid fa-sun fa-2xl');
  socialGulfCoastLink.classList.add('ms-gulf-coast-link');
  socialsDiv.appendChild(socialGulfCoastLink);
}


/***/ }),

/***/ "./src/assests/fonts/Roboto-Medium.ttf":
/*!*********************************************!*\
  !*** ./src/assests/fonts/Roboto-Medium.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/assests/fonts/Rubik-SemiBoldItalic.ttf":
/*!****************************************************!*\
  !*** ./src/assests/fonts/Rubik-SemiBoldItalic.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dbd4a6bacf93f30b483.ttf";

/***/ }),

/***/ "./src/assests/images/test.png":
/*!*************************************!*\
  !*** ./src/assests/images/test.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d2246ff6902a3b28cea.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/header */ "./src/ui/header.js");
/* harmony import */ var _assests_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/style.css */ "./src/assests/style.css");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/events */ "./src/events/events.js");
/* harmony import */ var _ui_pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/pages/home */ "./src/ui/pages/home.js");





(0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_events_events__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_ui_pages_home__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMscUpBQW1EO0FBQy9GLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsb0RBQW9EO0FBQy9ELFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsZ0RBQWdEO0FBQzNEOztBQUVBO0FBQ0EsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxvREFBb0Q7QUFDL0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0QsQ0FBQyxPQUFPLHdGQUF3RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksUUFBUSxZQUFZLGFBQWEsT0FBTyxZQUFZLGVBQWUsVUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0s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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDVjtBQUMyQjtBQUNQOztBQUVqRCxzREFBWTtBQUNaLDBEQUF5QjtBQUN6QiwwREFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL2Fzc2VzdHMvc3R5bGUuY3NzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL2Fzc2VzdHMvc3R5bGUuY3NzPzRjZjciLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9ldmVudHMvbmF2LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL2FjdGl2ZS1hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9jYWxsLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL2Rlc2t0b3AtbmF2LW1lbnUuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9kb20uanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9tb2JpbGUtbmF2LW1lbnUuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9uYXYtbGlua3MuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvcGFnZXMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9zb2NpYWxzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1J1YmlrLVNlbWlCb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjpibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbjpyb290IHtcbiAgLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcbiAgLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuICAtLXRleHQtYmxvY2stZm9udDogJ1JvYm90byc7XG59XG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsIC5tb2JpbGUtbmF2LWljb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgbWF4LXdpZHRoOiAxMDBkdnc7XG4gICAgbWF4LWhlaWdodDogMTBkdnc7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XG4gICAgY29sb3I6IHZhcihib2xkIC0tZm9udC1jb2xvcik7XG4gICAgcGFkZGluZzogMGVtIDJlbSAwZW0gMmVtO1xuXG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIG1hcmdpbjogMC44cmVtO1xufVxuXG4uaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXNrdG9wLWhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNyZW07XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbi5tb2JpbGUtaGVhZGVyLXJpZ2h0e1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vYmlsZS1uYXYtaWNvbiwgLm1vYmlsZS1uYXYtY2xvc2Uge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuMjVlbSAwLjZlbSAwLjI1ZW07XG59XG5cbi5tb2JpbGUtbmF2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XG4gICAgbWluLXdpZHRoOiAxMDBkdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDgwOGY3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5tb2JpbGUtbmF2LWFuaW1hdGlvbiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xufVxuXG4uYWN0aXZlIHtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcbn1cbiAgXG4ubW9iaWxlLW5hdiA+IGE6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5ob21lLWNvbnRlbnQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogYmFja2dyb3VuZCBwb3NzaWJpbGl0eSAodmFuIHdpdGggcGFsbSB0cmVlcykgb24gaG9tZSBwYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTQlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbn1cblxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xuICBoZWlnaHQ6IDg5ZHZoO1xuICB3aWR0aDogMTAwZHZ3O1xufVxuXG4ubWFpbi1yaWdodCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNvY2lhbHMtZGl2IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIGdhcDogMnJlbTsgXG59XG5cblxuLmhvbWUtd2VsY29tZS1kaXYge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAzZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGdhcDogMnJlbTsgKi9cbiAgLyogaGVpZ2h0OiA2MGR2aDsgKi9cbn1cblxuaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUtdGl0bGUsIC5ob21lLWNvbnRlbnQtaGVhZGVyLCAuaGVhZGVyLCAuaG9tZS10aXRsZS1ib3R0b20sIC5saW5rLWl0ZW0ge1xuICBmb250LWZhbWlseTogJ1J1YmlrJztcbn1cblxuLmhvbWUtdGl0bGUge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi5ob21lLXRpdGxlLWJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICM2Mjk0MzY7XG59XG5cbi5ob21lLWNvbnRlbnQtaGVhZGVyIHtcbiAgbWFyZ2luOiAycmVtIDBlbSAycmVtIDBlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMxMTE4Mjdcbn1cblxuLmhvbWUtY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1ibG9jay1mb250KTtcbn1cblxuLmNhbGwtbm93LWJ0biB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIxZHZ3O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBydWJpaztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlkMWFjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhbGwtbm93LWJ0bjpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuXG4uYWJvdXQtZGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIHdpZHRoOiAxMDBkdnc7XG59XG5cbi5waWN0dXJlLWRpdi1vbmUsIC5waWN0dXJlLWRpdi10d28sIC50ZXh0LWRpdi1vbmUsIC50ZXh0LWRpdi10d28ge1xuICB3aWR0aDo1MGR2dztcbiAgaGVpZ2h0OjUwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpICB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICB3aWR0aDogMTAwZHZ3O1xuICB9XG4gIFxuICAuY2FsbC1ub3ctYnRuOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDQwMHB4IDAgMCAwICM2Mjk0MzY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5jYWxsLW5vdy1idG46aG92ZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmhvbWUtY29udGVudCB7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAuNXJlbTsgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAvKiBpZiBiZyBzdGF5cyBzYW1lICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTQlO1xuICB9XG5cbiAgLmhvbWUtd2VsY29tZS1kaXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICB9XG5cbiAgLmNhbGwtbm93LWJ0biB7XG4gICAgbWF4LXdpZHRoOiA5MmR2dztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgbWF4LWhlaWdodDogOWR2aDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWQ7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnNvY2lhbHMtZGl2IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5ob21lLWNvbnRlbnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9IFxuXG4gIC5ob21lLWNvbnRlbnQtaGVhZGVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUtYm90dG9tIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBcbiAgLmhvbWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgLmhvbWUtY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIG1heC13aWR0aDogOTFkdnc7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28tdGV4dHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFpbi1sZWZ0IHtcbiAgICAvKiBpZiBiZyBzdGF5cyBzYW1lICovXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxuXG4gIC8qIG5vdCBzdXJlIGFib3V0IGJlbG93IGJ1dCB3b3JraW5nIG9uIGlkZWFzICovXG4gIC5tYWluLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7IFxuICAgIHdpZHRoOiAxMDBkdnc7XG4gICAgaGVpZ2h0OiA1MGR2aDtcbiAgfVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtNCB7XG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XG4gICAgMzAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZS00IHtcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAzMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2VzdHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrREFBd0Q7QUFDMUQ7O0FBRUEscUJBQXFCO0FBQ3JCOzs7RUFHRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IseUJBQXlCO1FBQ3JCLHNCQUFzQjtZQUNsQiw4QkFBOEI7SUFDdEMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0Isd0JBQXdCOztBQUU1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix5QkFBeUI7UUFDckIsc0JBQXNCO1lBQ2xCLG1CQUFtQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixv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QjtJQUNyQztJQUNBO01BQ0UsaUNBQWlDO2NBQ3pCLHlCQUF5QjtJQUNuQztFQUNGOztBQUVGO0lBQ0k7TUFDRSxtQ0FBbUM7Y0FDM0IsMkJBQTJCO0lBQ3JDO0lBQ0E7TUFDRSxpQ0FBaUM7Y0FDekIseUJBQXlCO0lBQ25DO0VBQ0Y7O0VBRUE7SUFDRSxPQUFPLDhDQUE4QyxFQUFFLHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7SUFDL0YsT0FBTyxrREFBa0QsRUFBRSwwQ0FBMEMsRUFBRTtJQUN2RyxPQUFPLDhDQUE4QyxFQUFFLHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7QUFDbkc7O0VBRUU7SUFDRSxPQUFPLDhDQUE4QyxFQUFFLHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7SUFDL0YsT0FBTyxrREFBa0QsRUFBRSwwQ0FBMEMsRUFBRTtJQUN2RyxPQUFPLDhDQUE4QyxFQUFFLHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7QUFDbkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1J1YmlrLVNlbWlCb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjpibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWM7XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6IHJnYmEoMTAsIDEwLCA3LCAwLjYpO1xcbiAgLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xcbiAgLS10ZXh0LWJsb2NrLWZvbnQ6ICdSb2JvdG8nO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyLCAubW9iaWxlLW5hdi1pY29uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDBkdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwZHZ3O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICAgIGNvbG9yOiB2YXIoYm9sZCAtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAyZW07XFxuXFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBtYXJnaW46IDAuOHJlbTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVza3RvcC1oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5tb2JpbGUtaGVhZGVyLXJpZ2h0e1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vYmlsZS1uYXYtaWNvbiwgLm1vYmlsZS1uYXYtY2xvc2Uge1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgcGFkZGluZzogMC42ZW0gMC4yNWVtIDAuNmVtIDAuMjVlbTtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICAgIG1pbi13aWR0aDogMTAwZHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwODA4Zjc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vYmlsZS1uYXYtYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcXG59XFxuICBcXG4ubW9iaWxlLW5hdiA+IGE6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgLyogYmFja2dyb3VuZCBwb3NzaWJpbGl0eSAodmFuIHdpdGggcGFsbSB0cmVlcykgb24gaG9tZSBwYWdlICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA1NCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG59XFxuXFxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xcbiAgaGVpZ2h0OiA4OWR2aDtcXG4gIHdpZHRoOiAxMDBkdnc7XFxufVxcblxcbi5tYWluLXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc29jaWFscy1kaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBnYXA6IDJyZW07IFxcbn1cXG5cXG5cXG4uaG9tZS13ZWxjb21lLWRpdiB7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGdhcDogMnJlbTsgKi9cXG4gIC8qIGhlaWdodDogNjBkdmg7ICovXFxufVxcblxcbmk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS10aXRsZSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5oZWFkZXIsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmxpbmstaXRlbSB7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG59XFxuXFxuLmhvbWUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaG9tZS10aXRsZS1ib3R0b20ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICM2Mjk0MzY7XFxufVxcblxcbi5ob21lLWNvbnRlbnQtaGVhZGVyIHtcXG4gIG1hcmdpbjogMnJlbSAwZW0gMnJlbSAwZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjMTExODI3XFxufVxcblxcbi5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtYmxvY2stZm9udCk7XFxufVxcblxcbi5jYWxsLW5vdy1idG4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjFkdnc7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LWZhbWlseTogcnViaWs7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZDFhYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcXG4gIC1vLXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjRzO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY2FsbC1ub3ctYnRuOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG5cXG4uYWJvdXQtZGl2e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7XFxuICB3aWR0aDo1MGR2dztcXG4gIGhlaWdodDo1MGR2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgIHtcXG4gIC5tb2JpbGUtbmF2IHtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICB9XFxuICBcXG4gIC5jYWxsLW5vdy1idG46YWN0aXZlIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5jYWxsLW5vdy1idG46aG92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gIC5ob21lLWNvbnRlbnQge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTsgXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIC8qIGlmIGJnIHN0YXlzIHNhbWUgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU0JTtcXG4gIH1cXG5cXG4gIC5ob21lLXdlbGNvbWUtZGl2IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgfVxcblxcbiAgLmNhbGwtbm93LWJ0biB7XFxuICAgIG1heC13aWR0aDogOTJkdnc7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA5ZHZoO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VkO1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAuc29jaWFscy1kaXYge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDByZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtdGl0bGUsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAuaG9tZS1jb250ZW50LWhlYWRlciB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhyZW07XFxuICB9XFxuXFxuICAuaG9tZS10aXRsZS1ib3R0b20ge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG4gIFxcbiAgLmhvbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICAgIG1heC13aWR0aDogOTFkdnc7XFxuICB9XFxuXFxuICAuaGVhZGVyLWxvZ28tdGV4dHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLm1haW4tbGVmdCB7XFxuICAgIC8qIGlmIGJnIHN0YXlzIHNhbWUgKi9cXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIH1cXG5cXG4gIC8qIG5vdCBzdXJlIGFib3V0IGJlbG93IGJ1dCB3b3JraW5nIG9uIGlkZWFzICovXFxuICAubWFpbi1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucGljdHVyZS1kaXYtb25lLCAucGljdHVyZS1kaXYtdHdvLCAudGV4dC1kaXYtb25lLCAudGV4dC1kaXYtdHdvIHsgXFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIGhlaWdodDogNTBkdmg7XFxuICB9XFxufVxcblxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlLTQge1xcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDMwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB9XFxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXFxuICBAa2V5ZnJhbWVzIGJvdW5jZS00IHtcXG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDEwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAzMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgfVxcbiAgICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJ1aWxkTW9iaWxlTmF2IGZyb20gJy4uL3VpL21vYmlsZS1uYXYtbWVudSc7XG5pbXBvcnQgYnVpbGREZXNrdG9wTmF2TWVudSBmcm9tICcuLi91aS9kZXNrdG9wLW5hdi1tZW51JztcblxuLy8gcnVucyB3aGVuIHNjcmVlbiBzaXplIGlzIGFkanVzdGVkIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBkaXNwbGF5IG9yIG5vdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tTY3JlZW5TaXplQWRqdXN0bWVudCgpIHtcbiAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gZS50YXJnZXQub3V0ZXJIZWlnaHQ7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBlLnRhcmdldC5vdXRlcldpZHRoO1xuXG4gICAgaWYgKHdpbmRvd0hlaWdodCA8PSAxMDAwICYmIHdpbmRvd1dpZHRoIDw9IDcwMCkge1xuICAgICAgYnVpbGRNb2JpbGVOYXYoKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd0hlaWdodCA+PSA3MDAgJiYgd2luZG93V2lkdGggPj0gNzAxKSB7XG4gICAgICBidWlsZERlc2t0b3BOYXZNZW51KCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4uL3VpL2FjdGl2ZS1hdHRyaWJ1dGUnO1xuaW1wb3J0IGxvYWRBYm91dFBhZ2UgZnJvbSAnLi4vdWkvcGFnZXMvYWJvdXQnO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuLi91aS9wYWdlcy9jb250YWN0JztcbmltcG9ydCBsb2FkU2VydmljZXNQYWdlIGZyb20gJy4uL3VpL3BhZ2VzL3NlcnZpY2VzJztcbmltcG9ydCB3aXBlRG9tQ29udGVudCBmcm9tICcuLi91aS9kb20nO1xuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuLi91aS9wYWdlcy9ob21lJztcblxuZnVuY3Rpb24gY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpIHtcbiAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ0FCT1VUJzpcbiAgICAgIGxvYWRBYm91dFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdIT01FJzpcbiAgICAgIGxvYWRIb21lUGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU0VSVklDRVMnOlxuICAgICAgbG9hZFNlcnZpY2VzUGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdkV2ZW50cygpIHtcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1pdGVtJyk7XG5cbiAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobmF2TGlua3MpO1xuICAgICAgd2lwZURvbUNvbnRlbnQoKTtcbiAgICAgIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKTtcbiAgICAgIGNoZWNrV2hpY2hTaWRlYmFyTGlua0lzQ2xpY2tlZChlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdkV2ZW50cygpIHtcbiAgY29uc3QgbW9iaWxlTmF2RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2Jyk7XG4gIGNvbnN0IG1vYmlsZUhlYWRlclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1oZWFkZXItcmlnaHQnKTtcblxuICBpZiAobW9iaWxlSGVhZGVyUmlnaHQpIHtcbiAgICBtb2JpbGVIZWFkZXJSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGlmIHZpc2libGUgYW5kIFggaXMgY2xpY2tlZCwgaGlkZSBuYXYgbWVudVxuICAgICAgaWYgKG1vYmlsZU5hdkRpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBtb2JpbGVOYXZEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vYmlsZS1uYXYtYW5pbWF0aW9uJyk7XG5cbiAgICAgICAgLy8gY2hhbmdlIFggaWNvbiBiYWNrIHRvIG1vYmlsZSBuYXYgYmFyc1xuICAgICAgICBjb25zdCBtb2JpbGVOYXZDbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi1jbG9zZScpO1xuICAgICAgICBtb2JpbGVOYXZDbG9zZUljb24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICBtb2JpbGVOYXZDbG9zZUljb24uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgJ2ZhLXNvbGlkIGZhLWJhcnMtc3RhZ2dlcmVkIGZhLXhsJ1xuICAgICAgICApO1xuICAgICAgICBtb2JpbGVOYXZDbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdi1pY29uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2JpbGVOYXZEaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdi1hbmltYXRpb24nKTtcbiAgICAgICAgLy8gY2hhbmdlIG1vYmlsZSBuYXYgYmFyIGljb24gdG8gWFxuICAgICAgICBjb25zdCBtb2JpbGVOYXZCYXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtaWNvbicpO1xuICAgICAgICBtb2JpbGVOYXZCYXJJY29uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgbW9iaWxlTmF2QmFySWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXggZmEteGwnKTtcbiAgICAgICAgbW9iaWxlTmF2QmFySWNvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWNsb3NlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgbmF2RXZlbnRzIH07XG4iLCJmdW5jdGlvbiBhZGRBY3RpdmVBdHRyaWJ1dGUoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobGlua0FycmF5KSB7XG4gIGxpbmtBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBY3RpdmVBdHRyaWJ1dGUsIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENhbGxUb0Jvb2tCdXR0b24odGl0bGVBbmRXZWxjb21lRGl2KSB7XG4gIGNvbnN0IGNhbGxOb3dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FsbE5vd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYWxsLW5vdy1idG4nKTtcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGNhbGxOb3dCdXR0b24pO1xuXG4gIGNvbnN0IGNhbGxOb3dCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjYWxsTm93QnV0dG9uVGV4dC5jbGFzc0xpc3QuYWRkKCdjYWxsLW5vdy1idG4tdGV4dCcpO1xuICBjYWxsTm93QnV0dG9uVGV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndGVsOjEyMjg4NjM5MDk2Jyk7XG4gIGNhbGxOb3dCdXR0b25UZXh0LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICBjYWxsTm93QnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICdDYWxsIG5vdyB0byByZXNlcnZlISc7XG4gIGNhbGxOb3dCdXR0b24uYXBwZW5kQ2hpbGQoY2FsbE5vd0J1dHRvblRleHQpO1xuXG4gIGNvbnN0IGNhbGxCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjYWxsQnRuSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXBob25lLXZvbHVtZScpO1xuICBjYWxsTm93QnV0dG9uLmFwcGVuZENoaWxkKGNhbGxCdG5JY29uKTtcbn1cbiIsImltcG9ydCBidWlsZE5hdkxpbmtzIGZyb20gJy4vbmF2LWxpbmtzJztcblxuZnVuY3Rpb24gY2hlY2tJZkRlc2t0b3BIZWFkZXJFeGlzdHMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcC1oZWFkZXItcmlnaHQnKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZk1vYmlsZUhlYWRlckV4aXN0cyhoZWFkZXJEaXYsIGJvZHksIG1vYmlsZU5hdikge1xuICBjb25zdCBtb2JpbGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWhlYWRlci1yaWdodCcpO1xuXG4gIGlmIChtb2JpbGVIZWFkZXIpIHtcbiAgICBoZWFkZXJEaXYucmVtb3ZlQ2hpbGQobW9iaWxlSGVhZGVyKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKG1vYmlsZU5hdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGREZXNrdG9wTmF2TWVudSgpIHtcbiAgLy8gaWYgaGVhZGVyIG5hdiBleGlzdHMgd2hlbiBiZWluZyBjYWxsZWQgYmUgYSByZXNpemUgZXZlbnQsIGp1c3QgcmV0dXJuXG4gIGNvbnN0IGhlYWRlckNoZWNrID0gY2hlY2tJZkRlc2t0b3BIZWFkZXJFeGlzdHMoKTtcbiAgaWYgKGhlYWRlckNoZWNrKSByZXR1cm47XG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYnKTtcblxuICAvLyBpZiBtb2JpbGUgaGVhZGVyIGV4aXN0cyB3aGlsZSByZXNpemluZyB3aW5kb3csIHJlbW92ZSBmcm9tIHdpbmRvd1xuICBjaGVja0lmTW9iaWxlSGVhZGVyRXhpc3RzKGhlYWRlckRpdiwgYm9keSwgbW9iaWxlTmF2KTtcblxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wLWhlYWRlci1yaWdodCcpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpO1xuXG4gIGJ1aWxkTmF2TGlua3MoaGVhZGVyUmlnaHQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2lwZURvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHBhcmVudENvbnRhaW5lcjtcbiAgY29uc3QgY2hpbGRBcnJheSA9IFsuLi5jaGlsZHJlbl07XG5cbiAgLy8gd2lsbCBlaXRoZXIgbmVlZCB0byBjaGFuZ2UgaG9tZS1jb250ZW50IG9yIGFkZCBldmVyeSBwYWdlIGhlcmUgYmVjYXVzZSBlYWNoIHBhZ2VcbiAgLy8gd2lsbCBiZSBuYW1lZCB4LWNvbnRlbnQgdG8gc3R5bGUgdGhlbSBkaWZmZXJlbnRseVxuICBjaGlsZEFycmF5LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKFxuICAgICAgY2hpbGQuY2xhc3NMaXN0WzBdID09PSAnaG9tZS1jb250ZW50JyB8fFxuICAgICAgY2hpbGQuY2xhc3NMaXN0WzBdID09PSAnYWJvdXQtY29udGVudCcgfHxcbiAgICAgIGNoaWxkLmNsYXNzTGlzdFswXSA9PT0gJ3NlcnZpY2UtY29udGVudCcgfHxcbiAgICAgIGNoaWxkLmNsYXNzTGlzdFswXSA9PT0gJ2NvbnRhY3QtY29udGVudCdcbiAgICApIHtcbiAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vIGltcG9ydCB0ZXN0IGZyb20gJy4uL2Fzc2VzdHMvaW1hZ2VzL2d1bGYtaGF2ZW4tbG9nby5wbmcnO1xuaW1wb3J0IGJ1aWxkRGVza3RvcE5hdk1lbnUgZnJvbSAnLi9kZXNrdG9wLW5hdi1tZW51JztcbmltcG9ydCBidWlsZE1vYmlsZU5hdiBmcm9tICcuL21vYmlsZS1uYXYtbWVudSc7XG5pbXBvcnQgbW9iaWxlTmF2RXZlbnRzLCB7IG5hdkV2ZW50cyB9IGZyb20gJy4uL2V2ZW50cy9uYXYtZXZlbnRzJztcblxuLy8gcnVucyBvbiBsb2FkIHRvIGRldGVybWluZSBpZiB3ZSBsb2FkIGEgZGVza3RvcCBvciBtb2JpbGUgdmlld1xuZnVuY3Rpb24gY2hlY2tTY3JlZW5TaXplKCkge1xuICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcblxuICAvLyBpZiBzY3JlZW4gc2l6ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGhvbmUgc2l6ZXMgJiBpcGFkXG4gIGlmICh3aW5kb3dIZWlnaHQgPD0gMTA4MCAmJiB3aW5kb3dXaWR0aCA8PSA4MTApIHtcbiAgICBidWlsZE1vYmlsZU5hdigpO1xuICAgIG1vYmlsZU5hdkV2ZW50cygpO1xuICAgIG5hdkV2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGJ1aWxkRGVza3RvcE5hdk1lbnUoKTtcbiAgICBuYXZFdmVudHMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckxlZnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxlZnQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckxlZnQpO1xuXG4gIGNvbnN0IHJ2TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcnZMb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtY2FyYXZhbiBmYS14bCcpO1xuICBydkxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChydkxvZ28pO1xuXG4gIC8vIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuICAvLyBoZWFkZXJMb2dvLnNyYyA9IHRlc3Q7XG4gIC8vIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG5cbiAgY29uc3QgaGVhZGVyTG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhlYWRlckxvZ29UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvLXRleHQnKTtcbiAgaGVhZGVyTG9nb1RleHQudGV4dENvbnRlbnQgPSAnR1VMRiBIQVZFTiBSVic7XG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nb1RleHQpO1xuXG4gIGNoZWNrU2NyZWVuU2l6ZSgpO1xufVxuXG5leHBvcnQgeyBjaGVja1NjcmVlblNpemUgfTtcbiIsImltcG9ydCBidWlsZE5hdkxpbmtzIGZyb20gJy4vbmF2LWxpbmtzJztcblxuZnVuY3Rpb24gYnVpbGRNb2JpbGVOYXZMaW5rcygpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2Jyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9iaWxlTmF2KTtcblxuICBidWlsZE5hdkxpbmtzKG1vYmlsZU5hdik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZNb2JpbGVOYXZFeGlzdHMoKSB7XG4gIGNvbnN0IG1vYmlsZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtaGVhZGVyLXJpZ2h0Jyk7XG4gIGlmIChtb2JpbGVIZWFkZXIpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZkRlc2t0b3BIZWFkZXJFeGlzdHMoaGVhZGVyRGl2KSB7XG4gIGNvbnN0IGRlc2t0b3BIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcC1oZWFkZXItcmlnaHQnKTtcbiAgaWYgKGRlc2t0b3BIZWFkZXIpIHtcbiAgICBoZWFkZXJEaXYucmVtb3ZlQ2hpbGQoZGVza3RvcEhlYWRlcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNb2JpbGVOYXZJY29uKCkge1xuICAvLyBpZiBtb2JpbGUgbmF2IGV4aXN0cyB3aGVuIGJlaW5nIGNhbGxlZCBieSBhIHJlc2l6ZSBldmVudCwganVzdCByZXR1cm5cbiAgY29uc3QgaGVhZGVyQ2hlY2sgPSBjaGVja0lmTW9iaWxlTmF2RXhpc3RzKCk7XG4gIGlmIChoZWFkZXJDaGVjaykgcmV0dXJuO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgLy8gaWYgZGVza3RvcCBoZWFkZXIgZXhpc3RzIHdoaWxlIHJlc2l6aW5nIHdpbmRvdywgcmVtb3ZlIGZyb20gd2luZG93XG4gIGNoZWNrSWZEZXNrdG9wSGVhZGVyRXhpc3RzKGhlYWRlckRpdik7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLWhlYWRlci1yaWdodCcpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpO1xuXG4gIGNvbnN0IG5hdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5hdkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1iYXJzLXN0YWdnZXJlZCBmYS14bCcpO1xuICBuYXZJY29uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYtaWNvbicpO1xuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChuYXZJY29uKTtcbiAgYnVpbGRNb2JpbGVOYXZMaW5rcygpO1xufVxuXG5leHBvcnQgeyBidWlsZE1vYmlsZU5hdkxpbmtzIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE5hdkxpbmtzKGVsZW1lbnQpIHtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2hvbWUtbGluaycpO1xuICBob21lTGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgLy8gd2Ugd2FudCBob21lIHRvIGJlIHRoZSBwYWdlIHRoZSBzaXRlIG9wZW5zIHVwIHRvXG4gIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBob21lTGluay50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lTGluayk7XG5cbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnYWJvdXQtbGluaycpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdBQk9VVCc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcblxuICBjb25zdCBzZXJ2aWNlc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHNlcnZpY2VzTGluay5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlcy1saW5rJyk7XG4gIHNlcnZpY2VzTGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgc2VydmljZXNMaW5rLnRleHRDb250ZW50ID0gJ1NFUlZJQ0VTJztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzZXJ2aWNlc0xpbmspO1xuXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWxpbmsnKTtcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbn1cbiIsImZ1bmN0aW9uIGJ1aWxkQWJvdXREaXZzKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWNvbnRlbnQnKTtcblxuICBjb25zdCBwaWN0dXJlRGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY3R1cmVEaXZPbmUuY2xhc3NMaXN0LmFkZCgncGljdHVyZS1kaXYtb25lJyk7XG4gIHBpY3R1cmVEaXZPbmUuY2xhc3NMaXN0LmFkZCgnYWJvdXQtZGl2Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGljdHVyZURpdk9uZSk7XG5cbiAgY29uc3QgdGV4dERpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RGl2T25lLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGl2LW9uZScpO1xuICB0ZXh0RGl2T25lLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWRpdicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHREaXZPbmUpO1xuXG4gIGNvbnN0IHBpY3R1cmVEaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGljdHVyZURpdlR3by5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlLWRpdi10d28nKTtcbiAgcGljdHVyZURpdlR3by5jbGFzc0xpc3QuYWRkKCdhYm91dC1kaXYnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwaWN0dXJlRGl2VHdvKTtcblxuICBjb25zdCB0ZXh0RGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHREaXZUd28uY2xhc3NMaXN0LmFkZCgndGV4dC1kaXYtdHdvJyk7XG4gIHRleHREaXZUd28uY2xhc3NMaXN0LmFkZCgnYWJvdXQtZGl2Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdlR3byk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWJvdXRDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICBidWlsZEFib3V0RGl2cygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXRQYWdlKCkge1xuICBidWlsZEFib3V0Q29udGVudERpdigpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge31cbiIsImltcG9ydCB0ZXN0QmcgZnJvbSAnLi4vLi4vYXNzZXN0cy9pbWFnZXMvdGVzdC5wbmcnO1xuaW1wb3J0IGJ1aWxkQ2FsbFRvQm9va0J1dHRvbiBmcm9tICcuLi9jYWxsLWJ1dHRvbic7XG5pbXBvcnQgYnVpbGRTb2NpYWxzRGl2IGZyb20gJy4uL3NvY2lhbHMnO1xuXG5mdW5jdGlvbiBidWlsZEhvbWVNYWluTGVmdERpdihob21lQ29udGVudCkge1xuICBjb25zdCBtYWluTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTGVmdC5jbGFzc0xpc3QuYWRkKCdtYWluLWxlZnQnKTtcbiAgbWFpbkxlZnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5MZWZ0KTtcblxuICBjb25zdCB0aXRsZUFuZFdlbGNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtd2VsY29tZS1kaXYnKTtcbiAgbWFpbkxlZnQuYXBwZW5kQ2hpbGQodGl0bGVBbmRXZWxjb21lRGl2KTtcblxuICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlJyk7XG4gIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCT09LIEEgQkVBQ0ggQlJFQUsnO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblxuICBjb25zdCBob21lVGl0bGVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVUaXRsZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlLWJvdHRvbScpO1xuICBob21lVGl0bGVCb3R0b20udGV4dENvbnRlbnQgPSAnQ09NRSBTVE9QIEJZISc7XG4gIHRpdGxlQW5kV2VsY29tZURpdi5hcHBlbmRDaGlsZChob21lVGl0bGVCb3R0b20pO1xuXG4gIGNvbnN0IGhvbWVMZWZ0Q29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG9tZUxlZnRDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudC1oZWFkZXInKTtcbiAgaG9tZUxlZnRDb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ0dVTEYgSEFWRU4gUlYgUkVTT1JUJztcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGhvbWVMZWZ0Q29udGVudEhlYWRlcik7XG5cbiAgY29uc3QgaG9tZUxlZnRUZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG9tZUxlZnRUZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQtdGV4dCcpO1xuICBob21lTGVmdFRleHRDb250ZW50LnRleHRDb250ZW50ID1cbiAgICAnTG9jYXRlZCBqdXN0IG9mZiBIaWdod2F5IDkwIChCZWFjaCBCbHZkKSBpbiBHdWxmcG9ydCBHdWxmIEhhdmVuIENhbXBncm91bmQgZmVhdHVyZXMgUlYgaG9vay11cHMsIHB1bGwtdGhyb3VnaCBzcGFjZXMsIFdpLUZpIGFjY2VzcyBhbmQgY2FibGUgY29ubmVjdGlvbnMgYXQgZXZlcnkgc2l0ZSwgcGFsbSB0cmVlcywgZmxvd2VyIGJlZHMsIGFuZCBtdWNoIG1vcmUuIFRoZSBvZmZpY2UgaG91c2VzIG5vdCBvbmx5IHRoZSBvZmZpY2UsIGJ1dCB0aGUgc2hvd2VycyBhbmQgcmVzdHJvb21zLiBBIHdyYXBhcm91bmQgcG9yY2ggZXF1aXBwZWQgd2l0aCByb2NraW5nIGNoYWlycyBvdmVybG9va3MgdGhlIGJlYXV0aWZ1bCBHdWxmIG9mIE1leGljbyEnO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUxlZnRUZXh0Q29udGVudCk7XG5cbiAgYnVpbGRDYWxsVG9Cb29rQnV0dG9uKHRpdGxlQW5kV2VsY29tZURpdik7XG4gIGJ1aWxkU29jaWFsc0RpdihtYWluTGVmdCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSG9tZU1haW5SaWdodERpdihob21lQ29udGVudCkge1xuICBjb25zdCBtYWluUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBtYWluUmlnaHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1yaWdodCcpO1xuICAvLyBtYWluUmlnaHQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21haW5SaWdodEJHfSlgO1xuICBtYWluUmlnaHQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5SaWdodCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSG9tZUNvbnRlbnREaXYoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xuICBob21lQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGVzdEJnfSlgO1xuICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgYnVpbGRIb21lTWFpbkxlZnREaXYoaG9tZUNvbnRlbnQpO1xuICBidWlsZEhvbWVNYWluUmlnaHREaXYoaG9tZUNvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2VPbkxvYWQoKSB7XG4gIGJ1aWxkSG9tZUNvbnRlbnREaXYoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTZXJ2aWNlc1BhZ2UoKSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRTb2NpYWxzRGl2KG1haW5MZWZ0KSB7XG4gIGNvbnN0IHNvY2lhbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc29jaWFsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzb2NpYWxzLWRpdicpO1xuICBtYWluTGVmdC5hcHBlbmRDaGlsZChzb2NpYWxzRGl2KTtcblxuICBjb25zdCBzb2NpYWxGYWNlYm9va0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHNvY2lhbEZhY2Vib29rTGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLWJyYW5kcyBmYS1mYWNlYm9vayBmYS0yeGwnKTtcbiAgc29jaWFsRmFjZWJvb2tMaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRmFjZWJvb2snKTtcbiAgc29jaWFsRmFjZWJvb2tMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rLWxpbmsnKTtcbiAgc29jaWFsc0Rpdi5hcHBlbmRDaGlsZChzb2NpYWxGYWNlYm9va0xpbmspO1xuXG4gIC8vICAgY29uc3Qgc29jaWFsSW5zdGFncmFtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgLy8gICBzb2NpYWxJbnN0YWdyYW1MaW5rLnNldEF0dHJpYnV0ZShcbiAgLy8gICAgICdjbGFzcycsXG4gIC8vICAgICAnZmEtYnJhbmRzIGZhLXNxdWFyZS1pbnN0YWdyYW0gZmEtMnhsJ1xuICAvLyAgICk7XG4gIC8vICAgc29jaWFsSW5zdGFncmFtTGluay5jbGFzc0xpc3QuYWRkKCdpbnN0YWdyYW0tbGluaycpO1xuICAvLyAgIHNvY2lhbHNEaXYuYXBwZW5kQ2hpbGQoc29jaWFsSW5zdGFncmFtTGluayk7XG5cbiAgY29uc3Qgc29jaWFsR3VsZkNvYXN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgc29jaWFsR3VsZkNvYXN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXN1biBmYS0yeGwnKTtcbiAgc29jaWFsR3VsZkNvYXN0TGluay5jbGFzc0xpc3QuYWRkKCdtcy1ndWxmLWNvYXN0LWxpbmsnKTtcbiAgc29jaWFsc0Rpdi5hcHBlbmRDaGlsZChzb2NpYWxHdWxmQ29hc3RMaW5rKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL3VpL2hlYWRlcic7XG5pbXBvcnQgJy4vYXNzZXN0cy9zdHlsZS5jc3MnO1xuaW1wb3J0IGNoZWNrU2NyZWVuU2l6ZUFkanVzdG1lbnQgZnJvbSAnLi9ldmVudHMvZXZlbnRzJztcbmltcG9ydCBsb2FkSG9tZVBhZ2VPbkxvYWQgZnJvbSAnLi91aS9wYWdlcy9ob21lJztcblxuY3JlYXRlSGVhZGVyKCk7XG5jaGVja1NjcmVlblNpemVBZGp1c3RtZW50KCk7XG5sb2FkSG9tZVBhZ2VPbkxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==