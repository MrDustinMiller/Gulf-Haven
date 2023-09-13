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
___CSS_LOADER_EXPORT___.push([module.id, `

@font-face {
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
  /* background-color: grey; */
}

.about-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  /* height: 100dvh; */
  width: 100dvw;
}

.picture-div-one, .picture-div-two, .text-div-one, .text-div-two {
  width:50dvw;
  /* height:50dvh; */
  height: 44.5dvh;
}

.picture-div-one, .picture-div-two {
  display: flex;
  flex-wrap: wrap;
  gap:0.5rem;
  padding: 0.25rem;
}

.picture-div-one-child-top {
  flex-grow: 2;
  flex-basis: 100%;
  background-position: center;
}

.picture-div-one-child-bottom-left, .picture-div-one-child-bottom-right, .picture-div-two-child-top, .picture-div-two-child-bottom-left {
  flex-grow: 1;
}

.picture-div-child {
  background-color: #629436;
  background-repeat: no-repeat;
  background-size: cover;
}

.picture-div-two-child-bottom-right {
  flex-grow: 1;
  flex-basis: 100%;
  background-position: center;
}

@media (max-width: 700px)  {
  .mobile-nav {
    height: 100dvh;
    width: 100dvw;
  }
  
  .call-now-btn:active {
    -webkit-transform: scale(0.90);
        -ms-transform: scale(0.90);
            transform: scale(0.90);
  } 

  .call-now-btn:hover {
    pointer-events: none;
    -webkit-box-shadow: none;
            box-shadow: none;
    color:black;
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
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
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
}`, "",{"version":3,"sources":["webpack://./src/assests/style.css"],"names":[],"mappings":"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","sourcesContent":["\n\n@font-face {\n  font-family: 'Rubik';\n  src: url('./fonts/Rubik-SemiBoldItalic.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('./fonts/Roboto-Medium.ttf') format('truetype');\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100dvh;\n  line-height: 1.5;\n  font-size: 1rem;\n  color:black;\n  background-color: #fff7ec;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n:root {\n  --font-color: rgba(10, 10, 7, 0.6);\n  --font-style: sans-serif;\n  --text-block-font: 'Roboto';\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\na:hover, .mobile-nav-icon:hover {\n    cursor: pointer;\n}\n\n.header {\n    max-width: 100dvw;\n    max-height: 10dvw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-weight: bolder;\n    font-family: 'Rubik';\n    color: var(bold --font-color);\n    padding: 0em 2em 0em 2em;\n\n}\n\n.header-logo {\n  margin: 0.8rem;\n}\n\n.header-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.desktop-header-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 3rem;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 2em;\n}\n\n.mobile-header-right{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.mobile-nav-icon, .mobile-nav-close {\n    margin: 1em;\n    padding: 0.6em 0.25em 0.6em 0.25em;\n}\n\n.mobile-nav {\n    min-height: 100dvh;\n    min-width: 100dvw;\n    background-color: #090808f7;\n    color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 5rem;\n    position: absolute;\n    right:0;\n    visibility: hidden;\n}\n\n.mobile-nav-animation {\n    -webkit-animation: slide-in 1000ms;\n            animation: slide-in 1000ms;\n}\n\n.active {\n    -webkit-text-decoration: 2px underline;\n            text-decoration: 2px underline;\n}\n  \n.mobile-nav > a:first-child {\n    margin-top: 3rem;\n}\n\n.home-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: left;\n  /* background possibility (van with palm trees) on home page */\n  background-repeat: no-repeat;\n  background-size: 54%;\n  background-position: right;\n}\n\n.main-left, .main-right {\n  height: 89dvh;\n  width: 100dvw;\n}\n\n.main-right {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.socials-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 3rem;\n  gap: 2rem; \n}\n\n\n.home-welcome-div {\n  word-break: break-word;\n  padding: 3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* gap: 2rem; */\n  /* height: 60dvh; */\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-title, .home-content-header, .header, .home-title-bottom, .link-item {\n  font-family: 'Rubik';\n}\n\n.home-title {\n  font-size: 4rem;\n}\n\n.home-title-bottom {\n  font-size: 3rem;\n  color: #629436;\n}\n\n.home-content-header {\n  margin: 2rem 0em 2rem 0em;\n  letter-spacing: 1rem;\n  font-size: 1.25rem;\n  color: #111827\n}\n\n.home-content-text {\n  font-size: 1.15rem;\n  color: rgb(22, 22, 22);\n  font-family: var(--text-block-font);\n}\n\n.call-now-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 21dvw;\n  font-size: 1.25rem;\n  font-family: rubik;\n  margin-top: 2rem;\n  border-radius: 8px;\n  border: 2px solid black;\n  cursor: pointer;\n  padding: 0.25rem;\n  background-color: #e9d1ac;\n  -webkit-transition: ease-out 0.4s;\n  -o-transition: ease-out 0.4s;\n  transition: ease-out 0.4s;\n  color: black;\n}\n\n.call-now-btn:hover {\n  -webkit-box-shadow: inset 400px 0 0 0 #629436;\n          box-shadow: inset 400px 0 0 0 #629436;\n  color:white;\n}\n\n\n.about-div{\n  /* background-color: grey; */\n}\n\n.about-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  /* height: 100dvh; */\n  width: 100dvw;\n}\n\n.picture-div-one, .picture-div-two, .text-div-one, .text-div-two {\n  width:50dvw;\n  /* height:50dvh; */\n  height: 44.5dvh;\n}\n\n.picture-div-one, .picture-div-two {\n  display: flex;\n  flex-wrap: wrap;\n  gap:0.5rem;\n  padding: 0.25rem;\n}\n\n.picture-div-one-child-top {\n  flex-grow: 2;\n  flex-basis: 100%;\n  background-position: center;\n}\n\n.picture-div-one-child-bottom-left, .picture-div-one-child-bottom-right, .picture-div-two-child-top, .picture-div-two-child-bottom-left {\n  flex-grow: 1;\n}\n\n.picture-div-child {\n  background-color: #629436;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.picture-div-two-child-bottom-right {\n  flex-grow: 1;\n  flex-basis: 100%;\n  background-position: center;\n}\n\n@media (max-width: 700px)  {\n  .mobile-nav {\n    height: 100dvh;\n    width: 100dvw;\n  }\n  \n  .call-now-btn:active {\n    -webkit-transform: scale(0.90);\n        -ms-transform: scale(0.90);\n            transform: scale(0.90);\n  } \n\n  .call-now-btn:hover {\n    pointer-events: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color:black;\n  }\n\n  .home-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0.5rem; \n    word-break: break-word;\n    /* if bg stays same */\n    background-position: top;\n    background-size: 54%;\n  }\n\n  .home-welcome-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 1.25rem;\n    text-align: center;\n    margin-bottom: 1rem;\n    padding: 0rem;\n  }\n\n  .call-now-btn {\n    max-width: 92dvw;\n    -webkit-transition: all 0.2s;\n    -o-transition: all 0.2s;\n    transition: all 0.2s;\n  }\n\n  .header {\n    padding: 0rem;\n    max-height: 9dvh;\n    position: sticky;\n    background-color: #fff7ed;\n    top: 0;\n  }\n\n  .socials-div {\n    visibility: hidden;\n    padding: 0rem;\n    margin: 0;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 4rem;\n  }\n\n  .home-title, .home-title-bottom, .home-content-header, .home-content-text {\n    font-size: 1rem;\n  } \n\n  .home-content-header {\n    letter-spacing: 0.8rem;\n  }\n\n  .home-title-bottom {\n    font-size: 1.6rem;\n  }\n  \n  .home-title {\n    font-size: 2.5rem;\n  }\n\n  .home-content-text {\n  font-size: 1.05rem;\n    max-width: 91dvw;\n  }\n\n  .header-logo-text{\n    visibility: hidden;\n  }\n\n  .main-left {\n    /* if bg stays same */\n    margin-top: 8rem;\n  }\n\n  /* not sure about below but working on ideas */\n  .main-right {\n    display: none;\n  }\n\n  .picture-div-one, .picture-div-two, .text-div-one, .text-div-two { \n    width: 100dvw;\n    height: 50dvh;\n  }\n}\n\n\n@-webkit-keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n@keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n  @-webkit-keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}\n\n  @keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}"],"sourceRoot":""}]);
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

/***/ "./src/assests/text-files/div-one/about-text-one-p1.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-one/about-text-one-p1.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  In 1951 Adrian D. and Ona S. Burns moved to the Mississippi Gulf Coast. The Burns’ would proceed to make the Gulf Coast their home, buy and operate a business, and raise their children on the Mississippi Gulf Coast.\n  Mr. Burns was a bomber pilot during WWII and retired as a Colonel from the U.S. Air Force. Mr. and Mrs. Burns purchased and operated a small “Mom and Pop” cottage-type motel known as Gulf Haven Motor Court.\n  Gulf Haven Motor Court resided at the same location as the current Gulf Haven RV Resort.");

/***/ }),

/***/ "./src/assests/text-files/div-one/about-text-one-p2.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-one/about-text-one-p2.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" On August 29, 2005 Hurricane Katrina proved to be a deadly and devastating storm, which unleashed it`s fury on the Gulf Coast area. The Park was unrecognizable. Buildings, units, homes, and all of the Parks infrastructure was completely destroyed by Hurricane Katrina.\n  Cargo and merchandise that was, typically, stored at the City Port had been pushed ashore by the damaging hurricane. Containers filled with chicken and shrimp, trucks, tires, paper rolls, lumber, t-shirts, and all types of debris storms can conjure up was dumped into the Park.\n  Luckily, every person residing in the Park, at that time, was accounted for and had not sustained injuries due to Hurricane Katrina.");

/***/ }),

/***/ "./src/assests/text-files/div-one/about-text-one-p3.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-one/about-text-one-p3.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" On August 17, 1969 Hurricane Camille struck the Gulf Coast. Gulf Haven Motor Court and the Burns’ home were destroyed by the hurricane. Afterwards, the Burns’ obtained an SBA loan in order to rebuild their home and business.\n  The business then became Burnsway Trailer Park, which the couple operated together until they both passed away.");

/***/ }),

/***/ "./src/assests/text-files/div-two/about-text-two-p1.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-two/about-text-two-p1.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("FEMA was contacted regarding the site on which the Park had been located. Diane Burns Henderson and Adrian W. Burns convinced FEMA to utilize the property to house victims who had been left homeless because of the storm. FEMA was not charged rent for utilizing the\n property because they all had been left homeless. The Burns’ family felt the need to give something back to the community that had given them so much over the years.");

/***/ }),

/***/ "./src/assests/text-files/div-two/about-text-two-p2.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-two/about-text-two-p2.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("FEMA agreed to the plan and laid the infrastructure to comply with all city and state codes. So, the wonderful property became a FEMA Park! Yes, Gulf Haven Campground is proud to have been a FEMA Park during a time that so many in the area needed a place to call home!\n During the time Gulf Haven Campground was used as a FEMA Park, there were no reported incidences of crime as was common among FEMA Parks during that transitional time. FEMA withdrew all of their units on November 1, 2007 at which time the property reverted back to private use.");

/***/ }),

/***/ "./src/assests/text-files/div-two/about-text-two-p3.txt":
/*!**************************************************************!*\
  !*** ./src/assests/text-files/div-two/about-text-two-p3.txt ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("The property was updated with new RV hook-ups, pull-through spaces, Wi-Fi access and cable connection at every site, palm trees, flower beds, and much more! The office building was constructed which houses not only the office, but the showers and restrooms. A wraparound porch equipped\n with rocking chairs overlooks the beautiful Gulf of Mexico! During this period of change, a decision was made to revert back to the original name of Gulf Haven Campground… Truly a first class RV Park!");

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
  callNowButtonText.setAttribute('href', 'tel:1-228-8639-096');
  callNowButtonText.setAttribute('target', '_parent');
  callNowButtonText.textContent = '228-863-3906!';
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
/* harmony import */ var _assests_text_files_div_one_about_text_one_p1_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assests/text-files/div-one/about-text-one-p1.txt */ "./src/assests/text-files/div-one/about-text-one-p1.txt");
/* harmony import */ var _assests_text_files_div_one_about_text_one_p2_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assests/text-files/div-one/about-text-one-p2.txt */ "./src/assests/text-files/div-one/about-text-one-p2.txt");
/* harmony import */ var _assests_text_files_div_one_about_text_one_p3_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assests/text-files/div-one/about-text-one-p3.txt */ "./src/assests/text-files/div-one/about-text-one-p3.txt");
/* harmony import */ var _assests_text_files_div_two_about_text_two_p1_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assests/text-files/div-two/about-text-two-p1.txt */ "./src/assests/text-files/div-two/about-text-two-p1.txt");
/* harmony import */ var _assests_text_files_div_two_about_text_two_p2_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assests/text-files/div-two/about-text-two-p2.txt */ "./src/assests/text-files/div-two/about-text-two-p2.txt");
/* harmony import */ var _assests_text_files_div_two_about_text_two_p3_txt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assests/text-files/div-two/about-text-two-p3.txt */ "./src/assests/text-files/div-two/about-text-two-p3.txt");
/* harmony import */ var _assests_images_front_office_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assests/images/front-office.jpg */ "./src/assests/images/front-office.jpg");
/* harmony import */ var _assests_images_bench_shot_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assests/images/bench-shot.jpg */ "./src/assests/images/bench-shot.jpg");
/* harmony import */ var _assests_images_beach_shot_2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assests/images/beach-shot-2.jpg */ "./src/assests/images/beach-shot-2.jpg");
/* harmony import */ var _assests_images_after_katrina_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assests/images/after-katrina.jpg */ "./src/assests/images/after-katrina.jpg");
/* harmony import */ var _assests_images_construction_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assests/images/construction.jpg */ "./src/assests/images/construction.jpg");
/* harmony import */ var _assests_images_beach_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assests/images/beach.jpg */ "./src/assests/images/beach.jpg");













function buildPictureDivChildrenDivs(
  pictureDiv,
  pictureDivClassName,
  pictureDivChildTopImg,
  pictureDivChildBottomLeftImg,
  pictureDivChildBottomRightImg
) {
  // top
  const pictureDivChildTop = document.createElement('div');
  pictureDivChildTop.classList.add(`${pictureDivClassName}-child-top`);
  pictureDivChildTop.style.backgroundImage = `url(${pictureDivChildTopImg})`;
  pictureDivChildTop.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildTop);

  // bottom left
  const pictureDivChildBottomLeft = document.createElement('div');
  pictureDivChildBottomLeft.classList.add(
    `${pictureDivClassName}-child-bottom-left`
  );
  pictureDivChildBottomLeft.style.backgroundImage = `url(${pictureDivChildBottomLeftImg})`;
  pictureDivChildBottomLeft.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildBottomLeft);

  // bottom right
  const pictureDivChildBottomRight = document.createElement('div');
  pictureDivChildBottomRight.classList.add(
    `${pictureDivClassName}-child-bottom-right`
  );
  pictureDivChildBottomRight.style.backgroundImage = `url(${pictureDivChildBottomRightImg})`;
  pictureDivChildBottomRight.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildBottomRight);
}

function buildPictureDiv(
  content,
  pictureDivClassName,
  pictureDivChildTopImg,
  pictureDivChildBottomLeftImg,
  pictureDivChildBottomRightImg
) {
  const pictureDiv = document.createElement('div');
  pictureDiv.classList.add(`${pictureDivClassName}`);
  pictureDiv.classList.add('about-div');
  content.appendChild(pictureDiv);

  buildPictureDivChildrenDivs(
    pictureDiv,
    pictureDivClassName,
    pictureDivChildTopImg,
    pictureDivChildBottomLeftImg,
    pictureDivChildBottomRightImg
  );
}

function buildTextDiv(
  content,
  textDivClassName,
  textContentClassName,
  paragraphOne,
  paragraphTwo,
  paragraphThree
) {
  const textDivOne = document.createElement('div');
  textDivOne.classList.add(`${textDivClassName}`);
  textDivOne.classList.add('about-div');

  // paragraph 1
  const paragraphOneContent = document.createElement('p');
  paragraphOneContent.classList.add(`${textContentClassName}`);
  paragraphOneContent.textContent = `${paragraphOne}`;
  textDivOne.appendChild(paragraphOneContent);
  content.appendChild(textDivOne);

  // paragraph 2
  const paragraphTwoContent = document.createElement('p');
  paragraphTwoContent.classList.add(`${textContentClassName}`);
  paragraphTwoContent.textContent = `${paragraphTwo}`;
  textDivOne.appendChild(paragraphTwoContent);
  content.appendChild(textDivOne);

  // paragraph 3
  const paragraphThreeContent = document.createElement('p');
  paragraphThreeContent.classList.add(`${textContentClassName}`);
  paragraphThreeContent.textContent = `${paragraphThree}`;
  textDivOne.appendChild(paragraphThreeContent);
  content.appendChild(textDivOne);
}

function buildAboutDivs() {
  const content = document.querySelector('.about-content');

  buildPictureDiv(
    content,
    'picture-div-one',
    _assests_images_beach_jpg__WEBPACK_IMPORTED_MODULE_11__,
    _assests_images_after_katrina_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _assests_images_construction_jpg__WEBPACK_IMPORTED_MODULE_10__
  );
  buildTextDiv(
    content,
    'text-div-one',
    'text-div-one-text-content',
    _assests_text_files_div_one_about_text_one_p1_txt__WEBPACK_IMPORTED_MODULE_0__["default"],
    _assests_text_files_div_one_about_text_one_p2_txt__WEBPACK_IMPORTED_MODULE_1__["default"],
    _assests_text_files_div_one_about_text_one_p3_txt__WEBPACK_IMPORTED_MODULE_2__["default"]
  );
  buildTextDiv(
    content,
    'text-div-two',
    'text-div-two-text-content',
    _assests_text_files_div_two_about_text_two_p1_txt__WEBPACK_IMPORTED_MODULE_3__["default"],
    _assests_text_files_div_two_about_text_two_p2_txt__WEBPACK_IMPORTED_MODULE_4__["default"],
    _assests_text_files_div_two_about_text_two_p3_txt__WEBPACK_IMPORTED_MODULE_5__["default"]
  );
  buildPictureDiv(
    content,
    'picture-div-two',
    _assests_images_front_office_jpg__WEBPACK_IMPORTED_MODULE_6__,
    _assests_images_bench_shot_jpg__WEBPACK_IMPORTED_MODULE_7__,
    _assests_images_beach_shot_2_jpg__WEBPACK_IMPORTED_MODULE_8__
  );
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

/***/ "./src/assests/images/after-katrina.jpg":
/*!**********************************************!*\
  !*** ./src/assests/images/after-katrina.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88e98386138ff9cb311b.jpg";

/***/ }),

/***/ "./src/assests/images/beach-shot-2.jpg":
/*!*********************************************!*\
  !*** ./src/assests/images/beach-shot-2.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7eab70b3243880ddb59.jpg";

/***/ }),

/***/ "./src/assests/images/beach.jpg":
/*!**************************************!*\
  !*** ./src/assests/images/beach.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74d3513f4de3ce6a12ea.jpg";

/***/ }),

/***/ "./src/assests/images/bench-shot.jpg":
/*!*******************************************!*\
  !*** ./src/assests/images/bench-shot.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50206e8c3952d06e4404.jpg";

/***/ }),

/***/ "./src/assests/images/construction.jpg":
/*!*********************************************!*\
  !*** ./src/assests/images/construction.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a65faa8ceec1fb4abd5.jpg";

/***/ }),

/***/ "./src/assests/images/front-office.jpg":
/*!*********************************************!*\
  !*** ./src/assests/images/front-office.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c57dde4b8c87f2c0de95.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMscUpBQW1EO0FBQy9GLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxvREFBb0Q7QUFDL0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0Q7O0FBRUE7QUFDQSxXQUFXLGdEQUFnRDtBQUMzRCxXQUFXLGdEQUFnRDtBQUMzRCxXQUFXLG9EQUFvRDtBQUMvRCxXQUFXLGdEQUFnRDtBQUMzRCxXQUFXLGdEQUFnRDtBQUMzRCxDQUFDLE9BQU8scUZBQXFGLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLFFBQVEsWUFBWSxhQUFhLE9BQU8sWUFBWSxlQUFlLFVBQVUsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsT0FBTyxZQUFZLFNBQVMsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUss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Q3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ1Y7QUFDMkI7QUFDUDs7QUFFakQsc0RBQVk7QUFDWiwwREFBeUI7QUFDekIsMERBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LW9uZS9hYm91dC10ZXh0LW9uZS1wMS50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LW9uZS9hYm91dC10ZXh0LW9uZS1wMi50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LW9uZS9hYm91dC10ZXh0LW9uZS1wMy50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LXR3by9hYm91dC10ZXh0LXR3by1wMS50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LXR3by9hYm91dC10ZXh0LXR3by1wMi50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LXR3by9hYm91dC10ZXh0LXR3by1wMy50eHQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9hc3Nlc3RzL3N0eWxlLmNzcz80Y2Y3Iiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvZXZlbnRzL25hdi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9hY3RpdmUtYXR0cmlidXRlLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvY2FsbC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9kZXNrdG9wLW5hdi1tZW51LmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvZG9tLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvaGVhZGVyLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvbW9iaWxlLW5hdi1tZW51LmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvbmF2LWxpbmtzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL3BhZ2VzL3NlcnZpY2VzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvc29jaWFscy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SdWJpay1TZW1pQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1J1YmlrJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG5maWd1cmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXG51bFtyb2xlPSdsaXN0J10sXG5vbFtyb2xlPSdsaXN0J10ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOmJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VjO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuOnJvb3Qge1xuICAtLWZvbnQtY29sb3I6IHJnYmEoMTAsIDEwLCA3LCAwLjYpO1xuICAtLWZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gIC0tdGV4dC1ibG9jay1mb250OiAnUm9ib3RvJztcbn1cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciwgLm1vYmlsZS1uYXYtaWNvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMGR2dztcbiAgICBtYXgtaGVpZ2h0OiAxMGR2dztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcbiAgICBjb2xvcjogdmFyKGJvbGQgLS1mb250LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAyZW07XG5cbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgbWFyZ2luOiAwLjhyZW07XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2t0b3AtaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuLm1vYmlsZS1oZWFkZXItcmlnaHR7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9iaWxlLW5hdi1pY29uLCAubW9iaWxlLW5hdi1jbG9zZSB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC42ZW0gMC4yNWVtIDAuNmVtIDAuMjVlbTtcbn1cblxuLm1vYmlsZS1uYXYge1xuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgICBtaW4td2lkdGg6IDEwMGR2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwODA4Zjc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDowO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1vYmlsZS1uYXYtYW5pbWF0aW9uIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxMDAwbXM7XG59XG5cbi5hY3RpdmUge1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xufVxuICBcbi5tb2JpbGUtbmF2ID4gYTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmhvbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKiBiYWNrZ3JvdW5kIHBvc3NpYmlsaXR5ICh2YW4gd2l0aCBwYWxtIHRyZWVzKSBvbiBob21lIHBhZ2UgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1NCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4ubWFpbi1sZWZ0LCAubWFpbi1yaWdodCB7XG4gIGhlaWdodDogODlkdmg7XG4gIHdpZHRoOiAxMDBkdnc7XG59XG5cbi5tYWluLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc29jaWFscy1kaXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgZ2FwOiAycmVtOyBcbn1cblxuXG4uaG9tZS13ZWxjb21lLWRpdiB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDNlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogZ2FwOiAycmVtOyAqL1xuICAvKiBoZWlnaHQ6IDYwZHZoOyAqL1xufVxuXG5pOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS10aXRsZSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5oZWFkZXIsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmxpbmstaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xufVxuXG4uaG9tZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLmhvbWUtdGl0bGUtYm90dG9tIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogIzYyOTQzNjtcbn1cblxuLmhvbWUtY29udGVudC1oZWFkZXIge1xuICBtYXJnaW46IDJyZW0gMGVtIDJyZW0gMGVtO1xuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzExMTgyN1xufVxuXG4uaG9tZS1jb250ZW50LXRleHQge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWJsb2NrLWZvbnQpO1xufVxuXG4uY2FsbC1ub3ctYnRuIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjFkdnc7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IHJ1YmlrO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWQxYWM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FsbC1ub3ctYnRuOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDQwMHB4IDAgMCAwICM2Mjk0MzY7XG4gIGNvbG9yOndoaXRlO1xufVxuXG5cbi5hYm91dC1kaXZ7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAvKiBoZWlnaHQ6IDEwMGR2aDsgKi9cbiAgd2lkdGg6IDEwMGR2dztcbn1cblxuLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7XG4gIHdpZHRoOjUwZHZ3O1xuICAvKiBoZWlnaHQ6NTBkdmg7ICovXG4gIGhlaWdodDogNDQuNWR2aDtcbn1cblxuLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOjAuNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbn1cblxuLnBpY3R1cmUtZGl2LW9uZS1jaGlsZC10b3Age1xuICBmbGV4LWdyb3c6IDI7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnBpY3R1cmUtZGl2LW9uZS1jaGlsZC1ib3R0b20tbGVmdCwgLnBpY3R1cmUtZGl2LW9uZS1jaGlsZC1ib3R0b20tcmlnaHQsIC5waWN0dXJlLWRpdi10d28tY2hpbGQtdG9wLCAucGljdHVyZS1kaXYtdHdvLWNoaWxkLWJvdHRvbS1sZWZ0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucGljdHVyZS1kaXYtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI5NDM2O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGljdHVyZS1kaXYtdHdvLWNoaWxkLWJvdHRvbS1yaWdodCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpICB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICB3aWR0aDogMTAwZHZ3O1xuICB9XG4gIFxuICAuY2FsbC1ub3ctYnRuOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTApO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MCk7XG4gIH0gXG5cbiAgLmNhbGwtbm93LWJ0bjpob3ZlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuXG4gIC5ob21lLWNvbnRlbnQge1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07IFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgLyogaWYgYmcgc3RheXMgc2FtZSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU0JTtcbiAgfVxuXG4gIC5ob21lLXdlbGNvbWUtZGl2IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgfVxuXG4gIC5jYWxsLW5vdy1idG4ge1xuICAgIG1heC13aWR0aDogOTJkdnc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgbWF4LWhlaWdodDogOWR2aDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWQ7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnNvY2lhbHMtZGl2IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5ob21lLWNvbnRlbnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9IFxuXG4gIC5ob21lLWNvbnRlbnQtaGVhZGVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUtYm90dG9tIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBcbiAgLmhvbWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgLmhvbWUtY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIG1heC13aWR0aDogOTFkdnc7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28tdGV4dHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFpbi1sZWZ0IHtcbiAgICAvKiBpZiBiZyBzdGF5cyBzYW1lICovXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxuXG4gIC8qIG5vdCBzdXJlIGFib3V0IGJlbG93IGJ1dCB3b3JraW5nIG9uIGlkZWFzICovXG4gIC5tYWluLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7IFxuICAgIHdpZHRoOiAxMDBkdnc7XG4gICAgaGVpZ2h0OiA1MGR2aDtcbiAgfVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtNCB7XG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XG4gICAgMzAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZS00IHtcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAzMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2VzdHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUF3RDtBQUMxRDs7QUFFQSxxQkFBcUI7QUFDckI7OztFQUdFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7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LHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7SUFDL0YsT0FBTyxrREFBa0QsRUFBRSwwQ0FBMEMsRUFBRTtJQUN2RyxPQUFPLDhDQUE4QyxFQUFFLHNDQUFzQyxFQUFFO0lBQy9GLE9BQU8sOENBQThDLEVBQUUsc0NBQXNDLEVBQUU7QUFDbkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1J1YmlrLVNlbWlCb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjpibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWM7XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6IHJnYmEoMTAsIDEwLCA3LCAwLjYpO1xcbiAgLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xcbiAgLS10ZXh0LWJsb2NrLWZvbnQ6ICdSb2JvdG8nO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyLCAubW9iaWxlLW5hdi1pY29uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDBkdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwZHZ3O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICAgIGNvbG9yOiB2YXIoYm9sZCAtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAyZW07XFxuXFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBtYXJnaW46IDAuOHJlbTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVza3RvcC1oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5tb2JpbGUtaGVhZGVyLXJpZ2h0e1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vYmlsZS1uYXYtaWNvbiwgLm1vYmlsZS1uYXYtY2xvc2Uge1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgcGFkZGluZzogMC42ZW0gMC4yNWVtIDAuNmVtIDAuMjVlbTtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICAgIG1pbi13aWR0aDogMTAwZHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwODA4Zjc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1vYmlsZS1uYXYtYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcXG59XFxuICBcXG4ubW9iaWxlLW5hdiA+IGE6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgLyogYmFja2dyb3VuZCBwb3NzaWJpbGl0eSAodmFuIHdpdGggcGFsbSB0cmVlcykgb24gaG9tZSBwYWdlICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA1NCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG59XFxuXFxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xcbiAgaGVpZ2h0OiA4OWR2aDtcXG4gIHdpZHRoOiAxMDBkdnc7XFxufVxcblxcbi5tYWluLXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc29jaWFscy1kaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBnYXA6IDJyZW07IFxcbn1cXG5cXG5cXG4uaG9tZS13ZWxjb21lLWRpdiB7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGdhcDogMnJlbTsgKi9cXG4gIC8qIGhlaWdodDogNjBkdmg7ICovXFxufVxcblxcbmk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS10aXRsZSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5oZWFkZXIsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmxpbmstaXRlbSB7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG59XFxuXFxuLmhvbWUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaG9tZS10aXRsZS1ib3R0b20ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICM2Mjk0MzY7XFxufVxcblxcbi5ob21lLWNvbnRlbnQtaGVhZGVyIHtcXG4gIG1hcmdpbjogMnJlbSAwZW0gMnJlbSAwZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjMTExODI3XFxufVxcblxcbi5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtYmxvY2stZm9udCk7XFxufVxcblxcbi5jYWxsLW5vdy1idG4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjFkdnc7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LWZhbWlseTogcnViaWs7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZDFhYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcXG4gIC1vLXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjRzO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY2FsbC1ub3ctYnRuOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG5cXG4uYWJvdXQtZGl2e1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8qIGhlaWdodDogMTAwZHZoOyAqL1xcbiAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7XFxuICB3aWR0aDo1MGR2dztcXG4gIC8qIGhlaWdodDo1MGR2aDsgKi9cXG4gIGhlaWdodDogNDQuNWR2aDtcXG59XFxuXFxuLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOjAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbi5waWN0dXJlLWRpdi1vbmUtY2hpbGQtdG9wIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5waWN0dXJlLWRpdi1vbmUtY2hpbGQtYm90dG9tLWxlZnQsIC5waWN0dXJlLWRpdi1vbmUtY2hpbGQtYm90dG9tLXJpZ2h0LCAucGljdHVyZS1kaXYtdHdvLWNoaWxkLXRvcCwgLnBpY3R1cmUtZGl2LXR3by1jaGlsZC1ib3R0b20tbGVmdCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5waWN0dXJlLWRpdi1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI5NDM2O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5waWN0dXJlLWRpdi10d28tY2hpbGQtYm90dG9tLXJpZ2h0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgIHtcXG4gIC5tb2JpbGUtbmF2IHtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICB9XFxuICBcXG4gIC5jYWxsLW5vdy1idG46YWN0aXZlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTApO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45MCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkwKTtcXG4gIH0gXFxuXFxuICAuY2FsbC1ub3ctYnRuOmhvdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjpibGFjaztcXG4gIH1cXG5cXG4gIC5ob21lLWNvbnRlbnQge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTsgXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIC8qIGlmIGJnIHN0YXlzIHNhbWUgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU0JTtcXG4gIH1cXG5cXG4gIC5ob21lLXdlbGNvbWUtZGl2IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS4yNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgfVxcblxcbiAgLmNhbGwtbm93LWJ0biB7XFxuICAgIG1heC13aWR0aDogOTJkdnc7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA5ZHZoO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VkO1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAuc29jaWFscy1kaXYge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDByZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtdGl0bGUsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAuaG9tZS1jb250ZW50LWhlYWRlciB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhyZW07XFxuICB9XFxuXFxuICAuaG9tZS10aXRsZS1ib3R0b20ge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG4gIFxcbiAgLmhvbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5ob21lLWNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICAgIG1heC13aWR0aDogOTFkdnc7XFxuICB9XFxuXFxuICAuaGVhZGVyLWxvZ28tdGV4dHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLm1haW4tbGVmdCB7XFxuICAgIC8qIGlmIGJnIHN0YXlzIHNhbWUgKi9cXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIH1cXG5cXG4gIC8qIG5vdCBzdXJlIGFib3V0IGJlbG93IGJ1dCB3b3JraW5nIG9uIGlkZWFzICovXFxuICAubWFpbi1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucGljdHVyZS1kaXYtb25lLCAucGljdHVyZS1kaXYtdHdvLCAudGV4dC1kaXYtb25lLCAudGV4dC1kaXYtdHdvIHsgXFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuICAgIGhlaWdodDogNTBkdmg7XFxuICB9XFxufVxcblxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlLTQge1xcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDMwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB9XFxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXFxuICBAa2V5ZnJhbWVzIGJvdW5jZS00IHtcXG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDEwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAzMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgfVxcbiAgICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiICBJbiAxOTUxIEFkcmlhbiBELiBhbmQgT25hIFMuIEJ1cm5zIG1vdmVkIHRvIHRoZSBNaXNzaXNzaXBwaSBHdWxmIENvYXN0LiBUaGUgQnVybnPigJkgd291bGQgcHJvY2VlZCB0byBtYWtlIHRoZSBHdWxmIENvYXN0IHRoZWlyIGhvbWUsIGJ1eSBhbmQgb3BlcmF0ZSBhIGJ1c2luZXNzLCBhbmQgcmFpc2UgdGhlaXIgY2hpbGRyZW4gb24gdGhlIE1pc3Npc3NpcHBpIEd1bGYgQ29hc3QuXFxuICBNci4gQnVybnMgd2FzIGEgYm9tYmVyIHBpbG90IGR1cmluZyBXV0lJIGFuZCByZXRpcmVkIGFzIGEgQ29sb25lbCBmcm9tIHRoZSBVLlMuIEFpciBGb3JjZS4gTXIuIGFuZCBNcnMuIEJ1cm5zIHB1cmNoYXNlZCBhbmQgb3BlcmF0ZWQgYSBzbWFsbCDigJxNb20gYW5kIFBvcOKAnSBjb3R0YWdlLXR5cGUgbW90ZWwga25vd24gYXMgR3VsZiBIYXZlbiBNb3RvciBDb3VydC5cXG4gIEd1bGYgSGF2ZW4gTW90b3IgQ291cnQgcmVzaWRlZCBhdCB0aGUgc2FtZSBsb2NhdGlvbiBhcyB0aGUgY3VycmVudCBHdWxmIEhhdmVuIFJWIFJlc29ydC5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiBPbiBBdWd1c3QgMjksIDIwMDUgSHVycmljYW5lIEthdHJpbmEgcHJvdmVkIHRvIGJlIGEgZGVhZGx5IGFuZCBkZXZhc3RhdGluZyBzdG9ybSwgd2hpY2ggdW5sZWFzaGVkIGl0YHMgZnVyeSBvbiB0aGUgR3VsZiBDb2FzdCBhcmVhLiBUaGUgUGFyayB3YXMgdW5yZWNvZ25pemFibGUuIEJ1aWxkaW5ncywgdW5pdHMsIGhvbWVzLCBhbmQgYWxsIG9mIHRoZSBQYXJrcyBpbmZyYXN0cnVjdHVyZSB3YXMgY29tcGxldGVseSBkZXN0cm95ZWQgYnkgSHVycmljYW5lIEthdHJpbmEuXFxuICBDYXJnbyBhbmQgbWVyY2hhbmRpc2UgdGhhdCB3YXMsIHR5cGljYWxseSwgc3RvcmVkIGF0IHRoZSBDaXR5IFBvcnQgaGFkIGJlZW4gcHVzaGVkIGFzaG9yZSBieSB0aGUgZGFtYWdpbmcgaHVycmljYW5lLiBDb250YWluZXJzIGZpbGxlZCB3aXRoIGNoaWNrZW4gYW5kIHNocmltcCwgdHJ1Y2tzLCB0aXJlcywgcGFwZXIgcm9sbHMsIGx1bWJlciwgdC1zaGlydHMsIGFuZCBhbGwgdHlwZXMgb2YgZGVicmlzIHN0b3JtcyBjYW4gY29uanVyZSB1cCB3YXMgZHVtcGVkIGludG8gdGhlIFBhcmsuXFxuICBMdWNraWx5LCBldmVyeSBwZXJzb24gcmVzaWRpbmcgaW4gdGhlIFBhcmssIGF0IHRoYXQgdGltZSwgd2FzIGFjY291bnRlZCBmb3IgYW5kIGhhZCBub3Qgc3VzdGFpbmVkIGluanVyaWVzIGR1ZSB0byBIdXJyaWNhbmUgS2F0cmluYS5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiBPbiBBdWd1c3QgMTcsIDE5NjkgSHVycmljYW5lIENhbWlsbGUgc3RydWNrIHRoZSBHdWxmIENvYXN0LiBHdWxmIEhhdmVuIE1vdG9yIENvdXJ0IGFuZCB0aGUgQnVybnPigJkgaG9tZSB3ZXJlIGRlc3Ryb3llZCBieSB0aGUgaHVycmljYW5lLiBBZnRlcndhcmRzLCB0aGUgQnVybnPigJkgb2J0YWluZWQgYW4gU0JBIGxvYW4gaW4gb3JkZXIgdG8gcmVidWlsZCB0aGVpciBob21lIGFuZCBidXNpbmVzcy5cXG4gIFRoZSBidXNpbmVzcyB0aGVuIGJlY2FtZSBCdXJuc3dheSBUcmFpbGVyIFBhcmssIHdoaWNoIHRoZSBjb3VwbGUgb3BlcmF0ZWQgdG9nZXRoZXIgdW50aWwgdGhleSBib3RoIHBhc3NlZCBhd2F5LlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiRkVNQSB3YXMgY29udGFjdGVkIHJlZ2FyZGluZyB0aGUgc2l0ZSBvbiB3aGljaCB0aGUgUGFyayBoYWQgYmVlbiBsb2NhdGVkLiBEaWFuZSBCdXJucyBIZW5kZXJzb24gYW5kIEFkcmlhbiBXLiBCdXJucyBjb252aW5jZWQgRkVNQSB0byB1dGlsaXplIHRoZSBwcm9wZXJ0eSB0byBob3VzZSB2aWN0aW1zIHdobyBoYWQgYmVlbiBsZWZ0IGhvbWVsZXNzIGJlY2F1c2Ugb2YgdGhlIHN0b3JtLiBGRU1BIHdhcyBub3QgY2hhcmdlZCByZW50IGZvciB1dGlsaXppbmcgdGhlXFxuIHByb3BlcnR5IGJlY2F1c2UgdGhleSBhbGwgaGFkIGJlZW4gbGVmdCBob21lbGVzcy4gVGhlIEJ1cm5z4oCZIGZhbWlseSBmZWx0IHRoZSBuZWVkIHRvIGdpdmUgc29tZXRoaW5nIGJhY2sgdG8gdGhlIGNvbW11bml0eSB0aGF0IGhhZCBnaXZlbiB0aGVtIHNvIG11Y2ggb3ZlciB0aGUgeWVhcnMuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJGRU1BIGFncmVlZCB0byB0aGUgcGxhbiBhbmQgbGFpZCB0aGUgaW5mcmFzdHJ1Y3R1cmUgdG8gY29tcGx5IHdpdGggYWxsIGNpdHkgYW5kIHN0YXRlIGNvZGVzLiBTbywgdGhlIHdvbmRlcmZ1bCBwcm9wZXJ0eSBiZWNhbWUgYSBGRU1BIFBhcmshIFllcywgR3VsZiBIYXZlbiBDYW1wZ3JvdW5kIGlzIHByb3VkIHRvIGhhdmUgYmVlbiBhIEZFTUEgUGFyayBkdXJpbmcgYSB0aW1lIHRoYXQgc28gbWFueSBpbiB0aGUgYXJlYSBuZWVkZWQgYSBwbGFjZSB0byBjYWxsIGhvbWUhXFxuIER1cmluZyB0aGUgdGltZSBHdWxmIEhhdmVuIENhbXBncm91bmQgd2FzIHVzZWQgYXMgYSBGRU1BIFBhcmssIHRoZXJlIHdlcmUgbm8gcmVwb3J0ZWQgaW5jaWRlbmNlcyBvZiBjcmltZSBhcyB3YXMgY29tbW9uIGFtb25nIEZFTUEgUGFya3MgZHVyaW5nIHRoYXQgdHJhbnNpdGlvbmFsIHRpbWUuIEZFTUEgd2l0aGRyZXcgYWxsIG9mIHRoZWlyIHVuaXRzIG9uIE5vdmVtYmVyIDEsIDIwMDcgYXQgd2hpY2ggdGltZSB0aGUgcHJvcGVydHkgcmV2ZXJ0ZWQgYmFjayB0byBwcml2YXRlIHVzZS5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIlRoZSBwcm9wZXJ0eSB3YXMgdXBkYXRlZCB3aXRoIG5ldyBSViBob29rLXVwcywgcHVsbC10aHJvdWdoIHNwYWNlcywgV2ktRmkgYWNjZXNzIGFuZCBjYWJsZSBjb25uZWN0aW9uIGF0IGV2ZXJ5IHNpdGUsIHBhbG0gdHJlZXMsIGZsb3dlciBiZWRzLCBhbmQgbXVjaCBtb3JlISBUaGUgb2ZmaWNlIGJ1aWxkaW5nIHdhcyBjb25zdHJ1Y3RlZCB3aGljaCBob3VzZXMgbm90IG9ubHkgdGhlIG9mZmljZSwgYnV0IHRoZSBzaG93ZXJzIGFuZCByZXN0cm9vbXMuIEEgd3JhcGFyb3VuZCBwb3JjaCBlcXVpcHBlZFxcbiB3aXRoIHJvY2tpbmcgY2hhaXJzIG92ZXJsb29rcyB0aGUgYmVhdXRpZnVsIEd1bGYgb2YgTWV4aWNvISBEdXJpbmcgdGhpcyBwZXJpb2Qgb2YgY2hhbmdlLCBhIGRlY2lzaW9uIHdhcyBtYWRlIHRvIHJldmVydCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBuYW1lIG9mIEd1bGYgSGF2ZW4gQ2FtcGdyb3VuZOKApiBUcnVseSBhIGZpcnN0IGNsYXNzIFJWIFBhcmshXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRNb2JpbGVOYXYgZnJvbSAnLi4vdWkvbW9iaWxlLW5hdi1tZW51JztcbmltcG9ydCBidWlsZERlc2t0b3BOYXZNZW51IGZyb20gJy4uL3VpL2Rlc2t0b3AtbmF2LW1lbnUnO1xuXG4vLyBydW5zIHdoZW4gc2NyZWVuIHNpemUgaXMgYWRqdXN0ZWQgdG8gc2VlIGlmIHdlIG5lZWQgdG8gdXBkYXRlIGRpc3BsYXkgb3Igbm90XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1NjcmVlblNpemVBZGp1c3RtZW50KCkge1xuICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBlLnRhcmdldC5vdXRlckhlaWdodDtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGUudGFyZ2V0Lm91dGVyV2lkdGg7XG5cbiAgICBpZiAod2luZG93SGVpZ2h0IDw9IDEwMDAgJiYgd2luZG93V2lkdGggPD0gNzAwKSB7XG4gICAgICBidWlsZE1vYmlsZU5hdigpO1xuICAgIH0gZWxzZSBpZiAod2luZG93SGVpZ2h0ID49IDcwMCAmJiB3aW5kb3dXaWR0aCA+PSA3MDEpIHtcbiAgICAgIGJ1aWxkRGVza3RvcE5hdk1lbnUoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgYWRkQWN0aXZlQXR0cmlidXRlLFxuICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSxcbn0gZnJvbSAnLi4vdWkvYWN0aXZlLWF0dHJpYnV0ZSc7XG5pbXBvcnQgbG9hZEFib3V0UGFnZSBmcm9tICcuLi91aS9wYWdlcy9hYm91dCc7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gJy4uL3VpL3BhZ2VzL2NvbnRhY3QnO1xuaW1wb3J0IGxvYWRTZXJ2aWNlc1BhZ2UgZnJvbSAnLi4vdWkvcGFnZXMvc2VydmljZXMnO1xuaW1wb3J0IHdpcGVEb21Db250ZW50IGZyb20gJy4uL3VpL2RvbSc7XG5pbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4uL3VpL3BhZ2VzL2hvbWUnO1xuXG5mdW5jdGlvbiBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSkge1xuICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSAnQUJPVVQnOlxuICAgICAgbG9hZEFib3V0UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09OVEFDVCc6XG4gICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgbG9hZEhvbWVQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTRVJWSUNFUyc6XG4gICAgICBsb2FkU2VydmljZXNQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmF2RXZlbnRzKCkge1xuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWl0ZW0nKTtcblxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShuYXZMaW5rcyk7XG4gICAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgICAgY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTmF2RXZlbnRzKCkge1xuICBjb25zdCBtb2JpbGVOYXZEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYnKTtcbiAgY29uc3QgbW9iaWxlSGVhZGVyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWhlYWRlci1yaWdodCcpO1xuXG4gIGlmIChtb2JpbGVIZWFkZXJSaWdodCkge1xuICAgIG1vYmlsZUhlYWRlclJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gaWYgdmlzaWJsZSBhbmQgWCBpcyBjbGlja2VkLCBoaWRlIG5hdiBtZW51XG4gICAgICBpZiAobW9iaWxlTmF2RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgbW9iaWxlTmF2RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW5hdi1hbmltYXRpb24nKTtcblxuICAgICAgICAvLyBjaGFuZ2UgWCBpY29uIGJhY2sgdG8gbW9iaWxlIG5hdiBiYXJzXG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2LWNsb3NlJyk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAnZmEtc29saWQgZmEtYmFycy1zdGFnZ2VyZWQgZmEteGwnXG4gICAgICAgICk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWljb24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgbW9iaWxlTmF2RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWFuaW1hdGlvbicpO1xuICAgICAgICAvLyBjaGFuZ2UgbW9iaWxlIG5hdiBiYXIgaWNvbiB0byBYXG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkJhckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi1pY29uJyk7XG4gICAgICAgIG1vYmlsZU5hdkJhckljb24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICBtb2JpbGVOYXZCYXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEteCBmYS14bCcpO1xuICAgICAgICBtb2JpbGVOYXZCYXJJY29uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYtY2xvc2UnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBuYXZFdmVudHMgfTtcbiIsImZ1bmN0aW9uIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShsaW5rQXJyYXkpIHtcbiAgbGlua0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZEFjdGl2ZUF0dHJpYnV0ZSwgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ2FsbFRvQm9va0J1dHRvbih0aXRsZUFuZFdlbGNvbWVEaXYpIHtcbiAgY29uc3QgY2FsbE5vd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYWxsTm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbGwtbm93LWJ0bicpO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoY2FsbE5vd0J1dHRvbik7XG5cbiAgY29uc3QgY2FsbE5vd0J1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNhbGxOb3dCdXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2NhbGwtbm93LWJ0bi10ZXh0Jyk7XG4gIGNhbGxOb3dCdXR0b25UZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsICd0ZWw6MS0yMjgtODYzOS0wOTYnKTtcbiAgY2FsbE5vd0J1dHRvblRleHQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX3BhcmVudCcpO1xuICBjYWxsTm93QnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICcyMjgtODYzLTM5MDYhJztcbiAgY2FsbE5vd0J1dHRvbi5hcHBlbmRDaGlsZChjYWxsTm93QnV0dG9uVGV4dCk7XG5cbiAgY29uc3QgY2FsbEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNhbGxCdG5JY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtcGhvbmUtdm9sdW1lJyk7XG4gIGNhbGxOb3dCdXR0b24uYXBwZW5kQ2hpbGQoY2FsbEJ0bkljb24pO1xufVxuIiwiaW1wb3J0IGJ1aWxkTmF2TGlua3MgZnJvbSAnLi9uYXYtbGlua3MnO1xuXG5mdW5jdGlvbiBjaGVja0lmRGVza3RvcEhlYWRlckV4aXN0cygpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wLWhlYWRlci1yaWdodCcpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmTW9iaWxlSGVhZGVyRXhpc3RzKGhlYWRlckRpdiwgYm9keSwgbW9iaWxlTmF2KSB7XG4gIGNvbnN0IG1vYmlsZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtaGVhZGVyLXJpZ2h0Jyk7XG5cbiAgaWYgKG1vYmlsZUhlYWRlcikge1xuICAgIGhlYWRlckRpdi5yZW1vdmVDaGlsZChtb2JpbGVIZWFkZXIpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9iaWxlTmF2KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZERlc2t0b3BOYXZNZW51KCkge1xuICAvLyBpZiBoZWFkZXIgbmF2IGV4aXN0cyB3aGVuIGJlaW5nIGNhbGxlZCBiZSBhIHJlc2l6ZSBldmVudCwganVzdCByZXR1cm5cbiAgY29uc3QgaGVhZGVyQ2hlY2sgPSBjaGVja0lmRGVza3RvcEhlYWRlckV4aXN0cygpO1xuICBpZiAoaGVhZGVyQ2hlY2spIHJldHVybjtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdicpO1xuXG4gIC8vIGlmIG1vYmlsZSBoZWFkZXIgZXhpc3RzIHdoaWxlIHJlc2l6aW5nIHdpbmRvdywgcmVtb3ZlIGZyb20gd2luZG93XG4gIGNoZWNrSWZNb2JpbGVIZWFkZXJFeGlzdHMoaGVhZGVyRGl2LCBib2R5LCBtb2JpbGVOYXYpO1xuXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3AtaGVhZGVyLXJpZ2h0Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgYnVpbGROYXZMaW5rcyhoZWFkZXJSaWdodCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXBlRG9tQ29udGVudCgpIHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcGFyZW50Q29udGFpbmVyO1xuICBjb25zdCBjaGlsZEFycmF5ID0gWy4uLmNoaWxkcmVuXTtcblxuICAvLyB3aWxsIGVpdGhlciBuZWVkIHRvIGNoYW5nZSBob21lLWNvbnRlbnQgb3IgYWRkIGV2ZXJ5IHBhZ2UgaGVyZSBiZWNhdXNlIGVhY2ggcGFnZVxuICAvLyB3aWxsIGJlIG5hbWVkIHgtY29udGVudCB0byBzdHlsZSB0aGVtIGRpZmZlcmVudGx5XG4gIGNoaWxkQXJyYXkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBpZiAoXG4gICAgICBjaGlsZC5jbGFzc0xpc3RbMF0gPT09ICdob21lLWNvbnRlbnQnIHx8XG4gICAgICBjaGlsZC5jbGFzc0xpc3RbMF0gPT09ICdhYm91dC1jb250ZW50JyB8fFxuICAgICAgY2hpbGQuY2xhc3NMaXN0WzBdID09PSAnc2VydmljZS1jb250ZW50JyB8fFxuICAgICAgY2hpbGQuY2xhc3NMaXN0WzBdID09PSAnY29udGFjdC1jb250ZW50J1xuICAgICkge1xuICAgICAgcGFyZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vYXNzZXN0cy9pbWFnZXMvZ3VsZi1oYXZlbi1sb2dvLnBuZyc7XG5pbXBvcnQgYnVpbGREZXNrdG9wTmF2TWVudSBmcm9tICcuL2Rlc2t0b3AtbmF2LW1lbnUnO1xuaW1wb3J0IGJ1aWxkTW9iaWxlTmF2IGZyb20gJy4vbW9iaWxlLW5hdi1tZW51JztcbmltcG9ydCBtb2JpbGVOYXZFdmVudHMsIHsgbmF2RXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzL25hdi1ldmVudHMnO1xuXG4vLyBydW5zIG9uIGxvYWQgdG8gZGV0ZXJtaW5lIGlmIHdlIGxvYWQgYSBkZXNrdG9wIG9yIG1vYmlsZSB2aWV3XG5mdW5jdGlvbiBjaGVja1NjcmVlblNpemUoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuXG4gIC8vIGlmIHNjcmVlbiBzaXplIGxlc3MgdGhhbiBvciBlcXVhbCB0byBwaG9uZSBzaXplcyAmIGlwYWRcbiAgaWYgKHdpbmRvd0hlaWdodCA8PSAxMDgwICYmIHdpbmRvd1dpZHRoIDw9IDgxMCkge1xuICAgIGJ1aWxkTW9iaWxlTmF2KCk7XG4gICAgbW9iaWxlTmF2RXZlbnRzKCk7XG4gICAgbmF2RXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYnVpbGREZXNrdG9wTmF2TWVudSgpO1xuICAgIG5hdkV2ZW50cygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyTGVmdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbGVmdCcpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdCk7XG5cbiAgY29uc3QgcnZMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBydkxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1jYXJhdmFuIGZhLXhsJyk7XG4gIHJ2TG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nbycpO1xuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKHJ2TG9nbyk7XG5cbiAgLy8gY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAvLyBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG4gIC8vIGhlYWRlckxvZ28uc3JjID0gdGVzdDtcbiAgLy8gaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICBjb25zdCBoZWFkZXJMb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGVhZGVyTG9nb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28tdGV4dCcpO1xuICBoZWFkZXJMb2dvVGV4dC50ZXh0Q29udGVudCA9ICdHVUxGIEhBVkVOIFJWJztcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvVGV4dCk7XG5cbiAgY2hlY2tTY3JlZW5TaXplKCk7XG59XG5cbmV4cG9ydCB7IGNoZWNrU2NyZWVuU2l6ZSB9O1xuIiwiaW1wb3J0IGJ1aWxkTmF2TGlua3MgZnJvbSAnLi9uYXYtbGlua3MnO1xuXG5mdW5jdGlvbiBidWlsZE1vYmlsZU5hdkxpbmtzKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYnKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2JpbGVOYXYpO1xuXG4gIGJ1aWxkTmF2TGlua3MobW9iaWxlTmF2KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZk1vYmlsZU5hdkV4aXN0cygpIHtcbiAgY29uc3QgbW9iaWxlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1oZWFkZXItcmlnaHQnKTtcbiAgaWYgKG1vYmlsZUhlYWRlcikgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmRGVza3RvcEhlYWRlckV4aXN0cyhoZWFkZXJEaXYpIHtcbiAgY29uc3QgZGVza3RvcEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wLWhlYWRlci1yaWdodCcpO1xuICBpZiAoZGVza3RvcEhlYWRlcikge1xuICAgIGhlYWRlckRpdi5yZW1vdmVDaGlsZChkZXNrdG9wSGVhZGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vYmlsZU5hdkljb24oKSB7XG4gIC8vIGlmIG1vYmlsZSBuYXYgZXhpc3RzIHdoZW4gYmVpbmcgY2FsbGVkIGJ5IGEgcmVzaXplIGV2ZW50LCBqdXN0IHJldHVyblxuICBjb25zdCBoZWFkZXJDaGVjayA9IGNoZWNrSWZNb2JpbGVOYXZFeGlzdHMoKTtcbiAgaWYgKGhlYWRlckNoZWNrKSByZXR1cm47XG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAvLyBpZiBkZXNrdG9wIGhlYWRlciBleGlzdHMgd2hpbGUgcmVzaXppbmcgd2luZG93LCByZW1vdmUgZnJvbSB3aW5kb3dcbiAgY2hlY2tJZkRlc2t0b3BIZWFkZXJFeGlzdHMoaGVhZGVyRGl2KTtcblxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtaGVhZGVyLXJpZ2h0Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgY29uc3QgbmF2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbmF2SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWJhcnMtc3RhZ2dlcmVkIGZhLXhsJyk7XG4gIG5hdkljb24uY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdi1pY29uJyk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKG5hdkljb24pO1xuICBidWlsZE1vYmlsZU5hdkxpbmtzKCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkTW9iaWxlTmF2TGlua3MgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTmF2TGlua3MoZWxlbWVudCkge1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnaG9tZS1saW5rJyk7XG4gIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICAvLyB3ZSB3YW50IGhvbWUgdG8gYmUgdGhlIHBhZ2UgdGhlIHNpdGUgb3BlbnMgdXAgdG9cbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcblxuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFib3V0TGluay5jbGFzc0xpc3QuYWRkKCdhYm91dC1saW5rJyk7XG4gIGFib3V0TGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ0FCT1VUJztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChhYm91dExpbmspO1xuXG4gIGNvbnN0IHNlcnZpY2VzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgc2VydmljZXNMaW5rLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzLWxpbmsnKTtcbiAgc2VydmljZXNMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzZXJ2aWNlc0xpbmsudGV4dENvbnRlbnQgPSAnU0VSVklDRVMnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHNlcnZpY2VzTGluayk7XG5cbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGluaycpO1xuICBjb250YWN0TGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xufVxuIiwiaW1wb3J0IGFib3V0RGl2T25lUDEgZnJvbSAnLi4vLi4vYXNzZXN0cy90ZXh0LWZpbGVzL2Rpdi1vbmUvYWJvdXQtdGV4dC1vbmUtcDEudHh0JztcbmltcG9ydCBhYm91dERpdk9uZVAyIGZyb20gJy4uLy4uL2Fzc2VzdHMvdGV4dC1maWxlcy9kaXYtb25lL2Fib3V0LXRleHQtb25lLXAyLnR4dCc7XG5pbXBvcnQgYWJvdXREaXZPbmVQMyBmcm9tICcuLi8uLi9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LW9uZS9hYm91dC10ZXh0LW9uZS1wMy50eHQnO1xuaW1wb3J0IGFib3V0RGl2VHdvUDEgZnJvbSAnLi4vLi4vYXNzZXN0cy90ZXh0LWZpbGVzL2Rpdi10d28vYWJvdXQtdGV4dC10d28tcDEudHh0JztcbmltcG9ydCBhYm91dERpdlR3b1AyIGZyb20gJy4uLy4uL2Fzc2VzdHMvdGV4dC1maWxlcy9kaXYtdHdvL2Fib3V0LXRleHQtdHdvLXAyLnR4dCc7XG5pbXBvcnQgYWJvdXREaXZUd29QMyBmcm9tICcuLi8uLi9hc3Nlc3RzL3RleHQtZmlsZXMvZGl2LXR3by9hYm91dC10ZXh0LXR3by1wMy50eHQnO1xuaW1wb3J0IGZyb250T2ZmaWNlIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL2Zyb250LW9mZmljZS5qcGcnO1xuaW1wb3J0IGJlbmNoU2hvdCBmcm9tICcuLi8uLi9hc3Nlc3RzL2ltYWdlcy9iZW5jaC1zaG90LmpwZyc7XG5pbXBvcnQgYmVhY2hTaG90VHdvIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL2JlYWNoLXNob3QtMi5qcGcnO1xuaW1wb3J0IGFmdGVyS2F0cmluYSBmcm9tICcuLi8uLi9hc3Nlc3RzL2ltYWdlcy9hZnRlci1rYXRyaW5hLmpwZyc7XG5pbXBvcnQgY29uc3RydWN0aW9uIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL2NvbnN0cnVjdGlvbi5qcGcnO1xuaW1wb3J0IGJlYWNoIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL2JlYWNoLmpwZyc7XG5cbmZ1bmN0aW9uIGJ1aWxkUGljdHVyZURpdkNoaWxkcmVuRGl2cyhcbiAgcGljdHVyZURpdixcbiAgcGljdHVyZURpdkNsYXNzTmFtZSxcbiAgcGljdHVyZURpdkNoaWxkVG9wSW1nLFxuICBwaWN0dXJlRGl2Q2hpbGRCb3R0b21MZWZ0SW1nLFxuICBwaWN0dXJlRGl2Q2hpbGRCb3R0b21SaWdodEltZ1xuKSB7XG4gIC8vIHRvcFxuICBjb25zdCBwaWN0dXJlRGl2Q2hpbGRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGljdHVyZURpdkNoaWxkVG9wLmNsYXNzTGlzdC5hZGQoYCR7cGljdHVyZURpdkNsYXNzTmFtZX0tY2hpbGQtdG9wYCk7XG4gIHBpY3R1cmVEaXZDaGlsZFRvcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZURpdkNoaWxkVG9wSW1nfSlgO1xuICBwaWN0dXJlRGl2Q2hpbGRUb3AuY2xhc3NMaXN0LmFkZCgncGljdHVyZS1kaXYtY2hpbGQnKTtcbiAgcGljdHVyZURpdi5hcHBlbmRDaGlsZChwaWN0dXJlRGl2Q2hpbGRUb3ApO1xuXG4gIC8vIGJvdHRvbSBsZWZ0XG4gIGNvbnN0IHBpY3R1cmVEaXZDaGlsZEJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGljdHVyZURpdkNoaWxkQm90dG9tTGVmdC5jbGFzc0xpc3QuYWRkKFxuICAgIGAke3BpY3R1cmVEaXZDbGFzc05hbWV9LWNoaWxkLWJvdHRvbS1sZWZ0YFxuICApO1xuICBwaWN0dXJlRGl2Q2hpbGRCb3R0b21MZWZ0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwaWN0dXJlRGl2Q2hpbGRCb3R0b21MZWZ0SW1nfSlgO1xuICBwaWN0dXJlRGl2Q2hpbGRCb3R0b21MZWZ0LmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUtZGl2LWNoaWxkJyk7XG4gIHBpY3R1cmVEaXYuYXBwZW5kQ2hpbGQocGljdHVyZURpdkNoaWxkQm90dG9tTGVmdCk7XG5cbiAgLy8gYm90dG9tIHJpZ2h0XG4gIGNvbnN0IHBpY3R1cmVEaXZDaGlsZEJvdHRvbVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY3R1cmVEaXZDaGlsZEJvdHRvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoXG4gICAgYCR7cGljdHVyZURpdkNsYXNzTmFtZX0tY2hpbGQtYm90dG9tLXJpZ2h0YFxuICApO1xuICBwaWN0dXJlRGl2Q2hpbGRCb3R0b21SaWdodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZURpdkNoaWxkQm90dG9tUmlnaHRJbWd9KWA7XG4gIHBpY3R1cmVEaXZDaGlsZEJvdHRvbVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUtZGl2LWNoaWxkJyk7XG4gIHBpY3R1cmVEaXYuYXBwZW5kQ2hpbGQocGljdHVyZURpdkNoaWxkQm90dG9tUmlnaHQpO1xufVxuXG5mdW5jdGlvbiBidWlsZFBpY3R1cmVEaXYoXG4gIGNvbnRlbnQsXG4gIHBpY3R1cmVEaXZDbGFzc05hbWUsXG4gIHBpY3R1cmVEaXZDaGlsZFRvcEltZyxcbiAgcGljdHVyZURpdkNoaWxkQm90dG9tTGVmdEltZyxcbiAgcGljdHVyZURpdkNoaWxkQm90dG9tUmlnaHRJbWdcbikge1xuICBjb25zdCBwaWN0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY3R1cmVEaXYuY2xhc3NMaXN0LmFkZChgJHtwaWN0dXJlRGl2Q2xhc3NOYW1lfWApO1xuICBwaWN0dXJlRGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWRpdicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBpY3R1cmVEaXYpO1xuXG4gIGJ1aWxkUGljdHVyZURpdkNoaWxkcmVuRGl2cyhcbiAgICBwaWN0dXJlRGl2LFxuICAgIHBpY3R1cmVEaXZDbGFzc05hbWUsXG4gICAgcGljdHVyZURpdkNoaWxkVG9wSW1nLFxuICAgIHBpY3R1cmVEaXZDaGlsZEJvdHRvbUxlZnRJbWcsXG4gICAgcGljdHVyZURpdkNoaWxkQm90dG9tUmlnaHRJbWdcbiAgKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRUZXh0RGl2KFxuICBjb250ZW50LFxuICB0ZXh0RGl2Q2xhc3NOYW1lLFxuICB0ZXh0Q29udGVudENsYXNzTmFtZSxcbiAgcGFyYWdyYXBoT25lLFxuICBwYXJhZ3JhcGhUd28sXG4gIHBhcmFncmFwaFRocmVlXG4pIHtcbiAgY29uc3QgdGV4dERpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RGl2T25lLmNsYXNzTGlzdC5hZGQoYCR7dGV4dERpdkNsYXNzTmFtZX1gKTtcbiAgdGV4dERpdk9uZS5jbGFzc0xpc3QuYWRkKCdhYm91dC1kaXYnKTtcblxuICAvLyBwYXJhZ3JhcGggMVxuICBjb25zdCBwYXJhZ3JhcGhPbmVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGhPbmVDb250ZW50LmNsYXNzTGlzdC5hZGQoYCR7dGV4dENvbnRlbnRDbGFzc05hbWV9YCk7XG4gIHBhcmFncmFwaE9uZUNvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtwYXJhZ3JhcGhPbmV9YDtcbiAgdGV4dERpdk9uZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhPbmVDb250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RGl2T25lKTtcblxuICAvLyBwYXJhZ3JhcGggMlxuICBjb25zdCBwYXJhZ3JhcGhUd29Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGhUd29Db250ZW50LmNsYXNzTGlzdC5hZGQoYCR7dGV4dENvbnRlbnRDbGFzc05hbWV9YCk7XG4gIHBhcmFncmFwaFR3b0NvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtwYXJhZ3JhcGhUd299YDtcbiAgdGV4dERpdk9uZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhUd29Db250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RGl2T25lKTtcblxuICAvLyBwYXJhZ3JhcGggM1xuICBjb25zdCBwYXJhZ3JhcGhUaHJlZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmFncmFwaFRocmVlQ29udGVudC5jbGFzc0xpc3QuYWRkKGAke3RleHRDb250ZW50Q2xhc3NOYW1lfWApO1xuICBwYXJhZ3JhcGhUaHJlZUNvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtwYXJhZ3JhcGhUaHJlZX1gO1xuICB0ZXh0RGl2T25lLmFwcGVuZENoaWxkKHBhcmFncmFwaFRocmVlQ29udGVudCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dERpdk9uZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWJvdXREaXZzKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWNvbnRlbnQnKTtcblxuICBidWlsZFBpY3R1cmVEaXYoXG4gICAgY29udGVudCxcbiAgICAncGljdHVyZS1kaXYtb25lJyxcbiAgICBiZWFjaCxcbiAgICBhZnRlckthdHJpbmEsXG4gICAgY29uc3RydWN0aW9uXG4gICk7XG4gIGJ1aWxkVGV4dERpdihcbiAgICBjb250ZW50LFxuICAgICd0ZXh0LWRpdi1vbmUnLFxuICAgICd0ZXh0LWRpdi1vbmUtdGV4dC1jb250ZW50JyxcbiAgICBhYm91dERpdk9uZVAxLFxuICAgIGFib3V0RGl2T25lUDIsXG4gICAgYWJvdXREaXZPbmVQM1xuICApO1xuICBidWlsZFRleHREaXYoXG4gICAgY29udGVudCxcbiAgICAndGV4dC1kaXYtdHdvJyxcbiAgICAndGV4dC1kaXYtdHdvLXRleHQtY29udGVudCcsXG4gICAgYWJvdXREaXZUd29QMSxcbiAgICBhYm91dERpdlR3b1AyLFxuICAgIGFib3V0RGl2VHdvUDNcbiAgKTtcbiAgYnVpbGRQaWN0dXJlRGl2KFxuICAgIGNvbnRlbnQsXG4gICAgJ3BpY3R1cmUtZGl2LXR3bycsXG4gICAgZnJvbnRPZmZpY2UsXG4gICAgYmVuY2hTaG90LFxuICAgIGJlYWNoU2hvdFR3b1xuICApO1xufVxuXG5mdW5jdGlvbiBidWlsZEFib3V0Q29udGVudERpdigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgYnVpbGRBYm91dERpdnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0UGFnZSgpIHtcbiAgYnVpbGRBYm91dENvbnRlbnREaXYoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHt9XG4iLCJpbXBvcnQgdGVzdEJnIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL3Rlc3QucG5nJztcbmltcG9ydCBidWlsZENhbGxUb0Jvb2tCdXR0b24gZnJvbSAnLi4vY2FsbC1idXR0b24nO1xuaW1wb3J0IGJ1aWxkU29jaWFsc0RpdiBmcm9tICcuLi9zb2NpYWxzJztcblxuZnVuY3Rpb24gYnVpbGRIb21lTWFpbkxlZnREaXYoaG9tZUNvbnRlbnQpIHtcbiAgY29uc3QgbWFpbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxlZnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1sZWZ0Jyk7XG4gIG1haW5MZWZ0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluTGVmdCk7XG5cbiAgY29uc3QgdGl0bGVBbmRXZWxjb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlQW5kV2VsY29tZURpdi5jbGFzc0xpc3QuYWRkKCdob21lLXdlbGNvbWUtZGl2Jyk7XG4gIG1haW5MZWZ0LmFwcGVuZENoaWxkKHRpdGxlQW5kV2VsY29tZURpdik7XG5cbiAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZScpO1xuICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnQk9PSyBBIEJFQUNIIEJSRUFLJztcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgY29uc3QgaG9tZVRpdGxlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lVGl0bGVCb3R0b20uY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZS1ib3R0b20nKTtcbiAgaG9tZVRpdGxlQm90dG9tLnRleHRDb250ZW50ID0gJ0NPTUUgU1RPUCBCWSEnO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlQm90dG9tKTtcblxuICBjb25zdCBob21lTGVmdENvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVMZWZ0Q29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQtaGVhZGVyJyk7XG4gIGhvbWVMZWZ0Q29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdHVUxGIEhBVkVOIFJWIFJFU09SVCc7XG4gIHRpdGxlQW5kV2VsY29tZURpdi5hcHBlbmRDaGlsZChob21lTGVmdENvbnRlbnRIZWFkZXIpO1xuXG4gIGNvbnN0IGhvbWVMZWZ0VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVMZWZ0VGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250ZW50LXRleHQnKTtcbiAgaG9tZUxlZnRUZXh0Q29udGVudC50ZXh0Q29udGVudCA9XG4gICAgJ0xvY2F0ZWQganVzdCBvZmYgSGlnaHdheSA5MCAoQmVhY2ggQmx2ZCkgaW4gR3VsZnBvcnQgR3VsZiBIYXZlbiBDYW1wZ3JvdW5kIGZlYXR1cmVzIFJWIGhvb2stdXBzLCBwdWxsLXRocm91Z2ggc3BhY2VzLCBXaS1GaSBhY2Nlc3MgYW5kIGNhYmxlIGNvbm5lY3Rpb25zIGF0IGV2ZXJ5IHNpdGUsIHBhbG0gdHJlZXMsIGZsb3dlciBiZWRzLCBhbmQgbXVjaCBtb3JlLiBUaGUgb2ZmaWNlIGhvdXNlcyBub3Qgb25seSB0aGUgb2ZmaWNlLCBidXQgdGhlIHNob3dlcnMgYW5kIHJlc3Ryb29tcy4gQSB3cmFwYXJvdW5kIHBvcmNoIGVxdWlwcGVkIHdpdGggcm9ja2luZyBjaGFpcnMgb3Zlcmxvb2tzIHRoZSBiZWF1dGlmdWwgR3VsZiBvZiBNZXhpY28hJztcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGhvbWVMZWZ0VGV4dENvbnRlbnQpO1xuXG4gIGJ1aWxkQ2FsbFRvQm9va0J1dHRvbih0aXRsZUFuZFdlbGNvbWVEaXYpO1xuICBidWlsZFNvY2lhbHNEaXYobWFpbkxlZnQpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvbWVNYWluUmlnaHREaXYoaG9tZUNvbnRlbnQpIHtcbiAgY29uc3QgbWFpblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbWFpblJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4tcmlnaHQnKTtcbiAgLy8gbWFpblJpZ2h0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttYWluUmlnaHRCR30pYDtcbiAgbWFpblJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluUmlnaHQpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvbWVDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgaG9tZUNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Rlc3RCZ30pYDtcbiAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gIGJ1aWxkSG9tZU1haW5MZWZ0RGl2KGhvbWVDb250ZW50KTtcbiAgYnVpbGRIb21lTWFpblJpZ2h0RGl2KGhvbWVDb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlT25Mb2FkKCkge1xuICBidWlsZEhvbWVDb250ZW50RGl2KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2VydmljZXNQYWdlKCkge31cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU29jaWFsc0RpdihtYWluTGVmdCkge1xuICBjb25zdCBzb2NpYWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNvY2lhbHNEaXYuY2xhc3NMaXN0LmFkZCgnc29jaWFscy1kaXYnKTtcbiAgbWFpbkxlZnQuYXBwZW5kQ2hpbGQoc29jaWFsc0Rpdik7XG5cbiAgY29uc3Qgc29jaWFsRmFjZWJvb2tMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBzb2NpYWxGYWNlYm9va0xpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1icmFuZHMgZmEtZmFjZWJvb2sgZmEtMnhsJyk7XG4gIHNvY2lhbEZhY2Vib29rTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0ZhY2Vib29rJyk7XG4gIHNvY2lhbEZhY2Vib29rTGluay5jbGFzc0xpc3QuYWRkKCdmYWNlYm9vay1saW5rJyk7XG4gIHNvY2lhbHNEaXYuYXBwZW5kQ2hpbGQoc29jaWFsRmFjZWJvb2tMaW5rKTtcblxuICAvLyAgIGNvbnN0IHNvY2lhbEluc3RhZ3JhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vICAgc29jaWFsSW5zdGFncmFtTGluay5zZXRBdHRyaWJ1dGUoXG4gIC8vICAgICAnY2xhc3MnLFxuICAvLyAgICAgJ2ZhLWJyYW5kcyBmYS1zcXVhcmUtaW5zdGFncmFtIGZhLTJ4bCdcbiAgLy8gICApO1xuICAvLyAgIHNvY2lhbEluc3RhZ3JhbUxpbmsuY2xhc3NMaXN0LmFkZCgnaW5zdGFncmFtLWxpbmsnKTtcbiAgLy8gICBzb2NpYWxzRGl2LmFwcGVuZENoaWxkKHNvY2lhbEluc3RhZ3JhbUxpbmspO1xuXG4gIGNvbnN0IHNvY2lhbEd1bGZDb2FzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHNvY2lhbEd1bGZDb2FzdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1zdW4gZmEtMnhsJyk7XG4gIHNvY2lhbEd1bGZDb2FzdExpbmsuY2xhc3NMaXN0LmFkZCgnbXMtZ3VsZi1jb2FzdC1saW5rJyk7XG4gIHNvY2lhbHNEaXYuYXBwZW5kQ2hpbGQoc29jaWFsR3VsZkNvYXN0TGluayk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi91aS9oZWFkZXInO1xuaW1wb3J0ICcuL2Fzc2VzdHMvc3R5bGUuY3NzJztcbmltcG9ydCBjaGVja1NjcmVlblNpemVBZGp1c3RtZW50IGZyb20gJy4vZXZlbnRzL2V2ZW50cyc7XG5pbXBvcnQgbG9hZEhvbWVQYWdlT25Mb2FkIGZyb20gJy4vdWkvcGFnZXMvaG9tZSc7XG5cbmNyZWF0ZUhlYWRlcigpO1xuY2hlY2tTY3JlZW5TaXplQWRqdXN0bWVudCgpO1xubG9hZEhvbWVQYWdlT25Mb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=