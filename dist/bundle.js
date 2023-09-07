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
  background-color: grey;
}

.about-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
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
}`, "",{"version":3,"sources":["webpack://./src/assests/style.css"],"names":[],"mappings":"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","sourcesContent":["\n\n@font-face {\n  font-family: 'Rubik';\n  src: url('./fonts/Rubik-SemiBoldItalic.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('./fonts/Roboto-Medium.ttf') format('truetype');\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100dvh;\n  line-height: 1.5;\n  font-size: 1rem;\n  color:black;\n  background-color: #fff7ec;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n:root {\n  --font-color: rgba(10, 10, 7, 0.6);\n  --font-style: sans-serif;\n  --text-block-font: 'Roboto';\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\na:hover, .mobile-nav-icon:hover {\n    cursor: pointer;\n}\n\n.header {\n    max-width: 100dvw;\n    max-height: 10dvw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-weight: bolder;\n    font-family: 'Rubik';\n    color: var(bold --font-color);\n    padding: 0em 2em 0em 2em;\n\n}\n\n.header-logo {\n  margin: 0.8rem;\n}\n\n.header-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.desktop-header-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 3rem;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 2em;\n}\n\n.mobile-header-right{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.mobile-nav-icon, .mobile-nav-close {\n    margin: 1em;\n    padding: 0.6em 0.25em 0.6em 0.25em;\n}\n\n.mobile-nav {\n    min-height: 100dvh;\n    min-width: 100dvw;\n    background-color: #090808f7;\n    color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 5rem;\n    position: absolute;\n    right:0;\n    visibility: hidden;\n}\n\n.mobile-nav-animation {\n    -webkit-animation: slide-in 1000ms;\n            animation: slide-in 1000ms;\n}\n\n.active {\n    -webkit-text-decoration: 2px underline;\n            text-decoration: 2px underline;\n}\n  \n.mobile-nav > a:first-child {\n    margin-top: 3rem;\n}\n\n.home-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: left;\n  /* background possibility (van with palm trees) on home page */\n  background-repeat: no-repeat;\n  background-size: 54%;\n  background-position: right;\n}\n\n.main-left, .main-right {\n  height: 89dvh;\n  width: 100dvw;\n}\n\n.main-right {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.socials-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 3rem;\n  gap: 2rem; \n}\n\n\n.home-welcome-div {\n  word-break: break-word;\n  padding: 3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* gap: 2rem; */\n  /* height: 60dvh; */\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-title, .home-content-header, .header, .home-title-bottom, .link-item {\n  font-family: 'Rubik';\n}\n\n.home-title {\n  font-size: 4rem;\n}\n\n.home-title-bottom {\n  font-size: 3rem;\n  color: #629436;\n}\n\n.home-content-header {\n  margin: 2rem 0em 2rem 0em;\n  letter-spacing: 1rem;\n  font-size: 1.25rem;\n  color: #111827\n}\n\n.home-content-text {\n  font-size: 1.15rem;\n  color: rgb(22, 22, 22);\n  font-family: var(--text-block-font);\n}\n\n.call-now-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 21dvw;\n  font-size: 1.25rem;\n  font-family: rubik;\n  margin-top: 2rem;\n  border-radius: 8px;\n  border: 2px solid black;\n  cursor: pointer;\n  padding: 0.25rem;\n  background-color: #e9d1ac;\n  -webkit-transition: ease-out 0.4s;\n  -o-transition: ease-out 0.4s;\n  transition: ease-out 0.4s;\n  color: black;\n}\n\n.call-now-btn:hover {\n  -webkit-box-shadow: inset 400px 0 0 0 #629436;\n          box-shadow: inset 400px 0 0 0 #629436;\n  color:white;\n}\n\n\n.about-div{\n  background-color: grey;\n}\n\n.about-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100dvh;\n  width: 100dvw;\n}\n\n.picture-div-one, .picture-div-two, .text-div-one, .text-div-two {\n  width:50dvw;\n  height:50dvh;\n  background-color: grey;\n}\n\n@media (max-width: 700px)  {\n  .mobile-nav {\n    height: 100dvh;\n    width: 100dvw;\n  }\n  \n  .call-now-btn:active {\n    -webkit-transform: scale(0.90);\n        -ms-transform: scale(0.90);\n            transform: scale(0.90);\n  } \n\n  .call-now-btn:hover {\n    pointer-events: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color:black;\n  }\n\n  .home-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0.5rem; \n    word-break: break-word;\n    /* if bg stays same */\n    background-position: top;\n    background-size: 54%;\n  }\n\n  .home-welcome-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 1.25rem;\n    text-align: center;\n    margin-bottom: 1rem;\n    padding: 0rem;\n  }\n\n  .call-now-btn {\n    max-width: 92dvw;\n    -webkit-transition: all 0.2s;\n    -o-transition: all 0.2s;\n    transition: all 0.2s;\n  }\n\n  .header {\n    padding: 0rem;\n    max-height: 9dvh;\n    position: sticky;\n    background-color: #fff7ed;\n    top: 0;\n  }\n\n  .socials-div {\n    visibility: hidden;\n    padding: 0rem;\n    margin: 0;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 4rem;\n  }\n\n  .home-title, .home-title-bottom, .home-content-header, .home-content-text {\n    font-size: 1rem;\n  } \n\n  .home-content-header {\n    letter-spacing: 0.8rem;\n  }\n\n  .home-title-bottom {\n    font-size: 1.6rem;\n  }\n  \n  .home-title {\n    font-size: 2.5rem;\n  }\n\n  .home-content-text {\n  font-size: 1.05rem;\n    max-width: 91dvw;\n  }\n\n  .header-logo-text{\n    visibility: hidden;\n  }\n\n  .main-left {\n    /* if bg stays same */\n    margin-top: 8rem;\n  }\n\n  /* not sure about below but working on ideas */\n  .main-right {\n    display: none;\n  }\n\n  .picture-div-one, .picture-div-two, .text-div-one, .text-div-two { \n    width: 100dvw;\n    height: 50dvh;\n  }\n}\n\n\n@-webkit-keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n@keyframes slide-in {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(0%);\n              transform: translateX(0%);\n    }\n  }\n\n  @-webkit-keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}\n\n  @keyframes bounce-4 {\n    0%   { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    10%  { -webkit-transform: scale(1.1,.9) translateY(0); transform: scale(1.1,.9) translateY(0); }\n    30%  { -webkit-transform: scale(.9,1.1) translateY(-10px); transform: scale(.9,1.1) translateY(-10px); }\n    50%  { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n    100% { -webkit-transform: scale(1,1)    translateY(0); transform: scale(1,1)    translateY(0); }\n}"],"sourceRoot":""}]);
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
  callNowButtonText.setAttribute('href', 'tel:1228-863-9096');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMscUpBQW1EO0FBQy9GLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsb0RBQW9EO0FBQy9ELFdBQVcsZ0RBQWdEO0FBQzNELFdBQVcsZ0RBQWdEO0FBQzNEOztBQUVBO0FBQ0EsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxvREFBb0Q7QUFDL0QsV0FBVyxnREFBZ0Q7QUFDM0QsV0FBVyxnREFBZ0Q7QUFDM0QsQ0FBQyxPQUFPLHFGQUFxRixLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxRQUFRLFlBQVksYUFBYSxPQUFPLFlBQVksZUFBZSxVQUFVLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLE9BQU8sWUFBWSxTQUFTLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNWO0FBQzJCO0FBQ1A7O0FBRWpELHNEQUFZO0FBQ1osMERBQXlCO0FBQ3pCLDBEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvYXNzZXN0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvYXNzZXN0cy9zdHlsZS5jc3M/NGNmNyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL2V2ZW50cy9uYXYtZXZlbnRzLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvYWN0aXZlLWF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL2NhbGwtYnV0dG9uLmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvZGVza3RvcC1uYXYtbWVudS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL2RvbS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL21vYmlsZS1uYXYtbWVudS5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL25hdi1saW5rcy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vLi9zcmMvdWkvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi8uL3NyYy91aS9wYWdlcy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL3VpL3NvY2lhbHMuanMiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2d1bGYtaGF2ZW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ3VsZi1oYXZlbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ndWxmLWhhdmVuLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUnViaWstU2VtaUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjpibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbjpyb290IHtcbiAgLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcbiAgLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuICAtLXRleHQtYmxvY2stZm9udDogJ1JvYm90byc7XG59XG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsIC5tb2JpbGUtbmF2LWljb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgbWF4LXdpZHRoOiAxMDBkdnc7XG4gICAgbWF4LWhlaWdodDogMTBkdnc7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XG4gICAgY29sb3I6IHZhcihib2xkIC0tZm9udC1jb2xvcik7XG4gICAgcGFkZGluZzogMGVtIDJlbSAwZW0gMmVtO1xuXG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIG1hcmdpbjogMC44cmVtO1xufVxuXG4uaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXNrdG9wLWhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNyZW07XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbi5tb2JpbGUtaGVhZGVyLXJpZ2h0e1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vYmlsZS1uYXYtaWNvbiwgLm1vYmlsZS1uYXYtY2xvc2Uge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuMjVlbSAwLjZlbSAwLjI1ZW07XG59XG5cbi5tb2JpbGUtbmF2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XG4gICAgbWluLXdpZHRoOiAxMDBkdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDgwOGY3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5tb2JpbGUtbmF2LWFuaW1hdGlvbiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xufVxuXG4uYWN0aXZlIHtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcbn1cbiAgXG4ubW9iaWxlLW5hdiA+IGE6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5ob21lLWNvbnRlbnQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogYmFja2dyb3VuZCBwb3NzaWJpbGl0eSAodmFuIHdpdGggcGFsbSB0cmVlcykgb24gaG9tZSBwYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTQlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbn1cblxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xuICBoZWlnaHQ6IDg5ZHZoO1xuICB3aWR0aDogMTAwZHZ3O1xufVxuXG4ubWFpbi1yaWdodCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNvY2lhbHMtZGl2IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIGdhcDogMnJlbTsgXG59XG5cblxuLmhvbWUtd2VsY29tZS1kaXYge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAzZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGdhcDogMnJlbTsgKi9cbiAgLyogaGVpZ2h0OiA2MGR2aDsgKi9cbn1cblxuaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUtdGl0bGUsIC5ob21lLWNvbnRlbnQtaGVhZGVyLCAuaGVhZGVyLCAuaG9tZS10aXRsZS1ib3R0b20sIC5saW5rLWl0ZW0ge1xuICBmb250LWZhbWlseTogJ1J1YmlrJztcbn1cblxuLmhvbWUtdGl0bGUge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi5ob21lLXRpdGxlLWJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICM2Mjk0MzY7XG59XG5cbi5ob21lLWNvbnRlbnQtaGVhZGVyIHtcbiAgbWFyZ2luOiAycmVtIDBlbSAycmVtIDBlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMxMTE4Mjdcbn1cblxuLmhvbWUtY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1ibG9jay1mb250KTtcbn1cblxuLmNhbGwtbm93LWJ0biB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIxZHZ3O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBydWJpaztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlkMWFjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhbGwtbm93LWJ0bjpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzYyOTQzNjtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuXG4uYWJvdXQtZGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIHdpZHRoOiAxMDBkdnc7XG59XG5cbi5waWN0dXJlLWRpdi1vbmUsIC5waWN0dXJlLWRpdi10d28sIC50ZXh0LWRpdi1vbmUsIC50ZXh0LWRpdi10d28ge1xuICB3aWR0aDo1MGR2dztcbiAgaGVpZ2h0OjUwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpICB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICB3aWR0aDogMTAwZHZ3O1xuICB9XG4gIFxuICAuY2FsbC1ub3ctYnRuOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTApO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MCk7XG4gIH0gXG5cbiAgLmNhbGwtbm93LWJ0bjpob3ZlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuXG4gIC5ob21lLWNvbnRlbnQge1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07IFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgLyogaWYgYmcgc3RheXMgc2FtZSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU0JTtcbiAgfVxuXG4gIC5ob21lLXdlbGNvbWUtZGl2IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgfVxuXG4gIC5jYWxsLW5vdy1idG4ge1xuICAgIG1heC13aWR0aDogOTJkdnc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgbWF4LWhlaWdodDogOWR2aDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWQ7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnNvY2lhbHMtZGl2IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUsIC5ob21lLXRpdGxlLWJvdHRvbSwgLmhvbWUtY29udGVudC1oZWFkZXIsIC5ob21lLWNvbnRlbnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9IFxuXG4gIC5ob21lLWNvbnRlbnQtaGVhZGVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0bGUtYm90dG9tIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBcbiAgLmhvbWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgLmhvbWUtY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIG1heC13aWR0aDogOTFkdnc7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28tdGV4dHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFpbi1sZWZ0IHtcbiAgICAvKiBpZiBiZyBzdGF5cyBzYW1lICovXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxuXG4gIC8qIG5vdCBzdXJlIGFib3V0IGJlbG93IGJ1dCB3b3JraW5nIG9uIGlkZWFzICovXG4gIC5tYWluLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnBpY3R1cmUtZGl2LW9uZSwgLnBpY3R1cmUtZGl2LXR3bywgLnRleHQtZGl2LW9uZSwgLnRleHQtZGl2LXR3byB7IFxuICAgIHdpZHRoOiAxMDBkdnc7XG4gICAgaGVpZ2h0OiA1MGR2aDtcbiAgfVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtNCB7XG4gICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XG4gICAgMzAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZS00IHtcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAzMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2VzdHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUF3RDtBQUMxRDs7QUFFQSxxQkFBcUI7QUFDckI7OztFQUdFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ks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Zm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvUnViaWstU2VtaUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOmJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogcmdiYSgxMCwgMTAsIDcsIDAuNik7XFxuICAtLWZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XFxuICAtLXRleHQtYmxvY2stZm9udDogJ1JvYm90byc7XFxufVxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmE6aG92ZXIsIC5tb2JpbGUtbmF2LWljb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMGR2dztcXG4gICAgbWF4LWhlaWdodDogMTBkdnc7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gICAgY29sb3I6IHZhcihib2xkIC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDBlbSAyZW0gMGVtIDJlbTtcXG5cXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gIG1hcmdpbjogMC44cmVtO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXNrdG9wLWhlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuLm1vYmlsZS1oZWFkZXItcmlnaHR7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9iaWxlLW5hdi1pY29uLCAubW9iaWxlLW5hdi1jbG9zZSB7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjI1ZW0gMC42ZW0gMC4yNWVtO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gICAgbWluLXdpZHRoOiAxMDBkdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTA4MDhmNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubW9iaWxlLW5hdi1hbmltYXRpb24ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IDJweCB1bmRlcmxpbmU7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xcbn1cXG4gIFxcbi5tb2JpbGUtbmF2ID4gYTpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICAvKiBiYWNrZ3JvdW5kIHBvc3NpYmlsaXR5ICh2YW4gd2l0aCBwYWxtIHRyZWVzKSBvbiBob21lIHBhZ2UgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDU0JTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbn1cXG5cXG4ubWFpbi1sZWZ0LCAubWFpbi1yaWdodCB7XFxuICBoZWlnaHQ6IDg5ZHZoO1xcbiAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLm1haW4tcmlnaHQge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zb2NpYWxzLWRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gIGdhcDogMnJlbTsgXFxufVxcblxcblxcbi5ob21lLXdlbGNvbWUtZGl2IHtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBwYWRkaW5nOiAzZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogZ2FwOiAycmVtOyAqL1xcbiAgLyogaGVpZ2h0OiA2MGR2aDsgKi9cXG59XFxuXFxuaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lLXRpdGxlLCAuaG9tZS1jb250ZW50LWhlYWRlciwgLmhlYWRlciwgLmhvbWUtdGl0bGUtYm90dG9tLCAubGluay1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbn1cXG5cXG4uaG9tZS10aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5ob21lLXRpdGxlLWJvdHRvbSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogIzYyOTQzNjtcXG59XFxuXFxuLmhvbWUtY29udGVudC1oZWFkZXIge1xcbiAgbWFyZ2luOiAycmVtIDBlbSAycmVtIDBlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6ICMxMTE4MjdcXG59XFxuXFxuLmhvbWUtY29udGVudC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1ibG9jay1mb250KTtcXG59XFxuXFxuLmNhbGwtbm93LWJ0biB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAyMWR2dztcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBydWJpaztcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlkMWFjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjRzO1xcbiAgLW8tdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuNHM7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jYWxsLW5vdy1idG46aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCAjNjI5NDM2O1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcblxcbi5hYm91dC1kaXZ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxuICB3aWR0aDogMTAwZHZ3O1xcbn1cXG5cXG4ucGljdHVyZS1kaXYtb25lLCAucGljdHVyZS1kaXYtdHdvLCAudGV4dC1kaXYtb25lLCAudGV4dC1kaXYtdHdvIHtcXG4gIHdpZHRoOjUwZHZ3O1xcbiAgaGVpZ2h0OjUwZHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSAge1xcbiAgLm1vYmlsZS1uYXYge1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gIH1cXG4gIFxcbiAgLmNhbGwtbm93LWJ0bjphY3RpdmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MCk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTApO1xcbiAgfSBcXG5cXG4gIC5jYWxsLW5vdy1idG46aG92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgfVxcblxcbiAgLmhvbWUtY29udGVudCB7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMC41cmVtOyBcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgLyogaWYgYmcgc3RheXMgc2FtZSAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTQlO1xcbiAgfVxcblxcbiAgLmhvbWUtd2VsY29tZS1kaXYge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjI1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmc6IDByZW07XFxuICB9XFxuXFxuICAuY2FsbC1ub3ctYnRuIHtcXG4gICAgbWF4LXdpZHRoOiA5MmR2dztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDByZW07XFxuICAgIG1heC1oZWlnaHQ6IDlkdmg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWQ7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIC5zb2NpYWxzLWRpdiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMHJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICB9XFxuXFxuICAuaG9tZS10aXRsZSwgLmhvbWUtdGl0bGUtYm90dG9tLCAuaG9tZS1jb250ZW50LWhlYWRlciwgLmhvbWUtY29udGVudC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfSBcXG5cXG4gIC5ob21lLWNvbnRlbnQtaGVhZGVyIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIC5ob21lLXRpdGxlLWJvdHRvbSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbiAgXFxuICAuaG9tZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtY29udGVudC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gICAgbWF4LXdpZHRoOiA5MWR2dztcXG4gIH1cXG5cXG4gIC5oZWFkZXItbG9nby10ZXh0e1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICAubWFpbi1sZWZ0IHtcXG4gICAgLyogaWYgYmcgc3RheXMgc2FtZSAqL1xcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgfVxcblxcbiAgLyogbm90IHN1cmUgYWJvdXQgYmVsb3cgYnV0IHdvcmtpbmcgb24gaWRlYXMgKi9cXG4gIC5tYWluLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5waWN0dXJlLWRpdi1vbmUsIC5waWN0dXJlLWRpdi10d28sIC50ZXh0LWRpdi1vbmUsIC50ZXh0LWRpdi10d28geyBcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgaGVpZ2h0OiA1MGR2aDtcXG4gIH1cXG59XFxuXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2UtNCB7XFxuICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAxMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMzAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTBweCk7IH1cXG4gICAgNTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbn1cXG5cXG4gIEBrZXlmcmFtZXMgYm91bmNlLTQge1xcbiAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsLjkpIHRyYW5zbGF0ZVkoMCk7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDMwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMHB4KTsgdHJhbnNmb3JtOiBzY2FsZSguOSwxLjEpIHRyYW5zbGF0ZVkoLTEwcHgpOyB9XFxuICAgIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRNb2JpbGVOYXYgZnJvbSAnLi4vdWkvbW9iaWxlLW5hdi1tZW51JztcbmltcG9ydCBidWlsZERlc2t0b3BOYXZNZW51IGZyb20gJy4uL3VpL2Rlc2t0b3AtbmF2LW1lbnUnO1xuXG4vLyBydW5zIHdoZW4gc2NyZWVuIHNpemUgaXMgYWRqdXN0ZWQgdG8gc2VlIGlmIHdlIG5lZWQgdG8gdXBkYXRlIGRpc3BsYXkgb3Igbm90XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1NjcmVlblNpemVBZGp1c3RtZW50KCkge1xuICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSBlLnRhcmdldC5vdXRlckhlaWdodDtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGUudGFyZ2V0Lm91dGVyV2lkdGg7XG5cbiAgICBpZiAod2luZG93SGVpZ2h0IDw9IDEwMDAgJiYgd2luZG93V2lkdGggPD0gNzAwKSB7XG4gICAgICBidWlsZE1vYmlsZU5hdigpO1xuICAgIH0gZWxzZSBpZiAod2luZG93SGVpZ2h0ID49IDcwMCAmJiB3aW5kb3dXaWR0aCA+PSA3MDEpIHtcbiAgICAgIGJ1aWxkRGVza3RvcE5hdk1lbnUoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgYWRkQWN0aXZlQXR0cmlidXRlLFxuICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSxcbn0gZnJvbSAnLi4vdWkvYWN0aXZlLWF0dHJpYnV0ZSc7XG5pbXBvcnQgbG9hZEFib3V0UGFnZSBmcm9tICcuLi91aS9wYWdlcy9hYm91dCc7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gJy4uL3VpL3BhZ2VzL2NvbnRhY3QnO1xuaW1wb3J0IGxvYWRTZXJ2aWNlc1BhZ2UgZnJvbSAnLi4vdWkvcGFnZXMvc2VydmljZXMnO1xuaW1wb3J0IHdpcGVEb21Db250ZW50IGZyb20gJy4uL3VpL2RvbSc7XG5pbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4uL3VpL3BhZ2VzL2hvbWUnO1xuXG5mdW5jdGlvbiBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSkge1xuICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSAnQUJPVVQnOlxuICAgICAgbG9hZEFib3V0UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09OVEFDVCc6XG4gICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgbG9hZEhvbWVQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTRVJWSUNFUyc6XG4gICAgICBsb2FkU2VydmljZXNQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmF2RXZlbnRzKCkge1xuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWl0ZW0nKTtcblxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShuYXZMaW5rcyk7XG4gICAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgICAgY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTmF2RXZlbnRzKCkge1xuICBjb25zdCBtb2JpbGVOYXZEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYnKTtcbiAgY29uc3QgbW9iaWxlSGVhZGVyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWhlYWRlci1yaWdodCcpO1xuXG4gIGlmIChtb2JpbGVIZWFkZXJSaWdodCkge1xuICAgIG1vYmlsZUhlYWRlclJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gaWYgdmlzaWJsZSBhbmQgWCBpcyBjbGlja2VkLCBoaWRlIG5hdiBtZW51XG4gICAgICBpZiAobW9iaWxlTmF2RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgbW9iaWxlTmF2RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW5hdi1hbmltYXRpb24nKTtcblxuICAgICAgICAvLyBjaGFuZ2UgWCBpY29uIGJhY2sgdG8gbW9iaWxlIG5hdiBiYXJzXG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2LWNsb3NlJyk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAnZmEtc29saWQgZmEtYmFycy1zdGFnZ2VyZWQgZmEteGwnXG4gICAgICAgICk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWljb24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vYmlsZU5hdkRpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgbW9iaWxlTmF2RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWFuaW1hdGlvbicpO1xuICAgICAgICAvLyBjaGFuZ2UgbW9iaWxlIG5hdiBiYXIgaWNvbiB0byBYXG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkJhckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi1pY29uJyk7XG4gICAgICAgIG1vYmlsZU5hdkJhckljb24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICBtb2JpbGVOYXZCYXJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEteCBmYS14bCcpO1xuICAgICAgICBtb2JpbGVOYXZCYXJJY29uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1uYXYtY2xvc2UnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBuYXZFdmVudHMgfTtcbiIsImZ1bmN0aW9uIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShsaW5rQXJyYXkpIHtcbiAgbGlua0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZEFjdGl2ZUF0dHJpYnV0ZSwgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ2FsbFRvQm9va0J1dHRvbih0aXRsZUFuZFdlbGNvbWVEaXYpIHtcbiAgY29uc3QgY2FsbE5vd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYWxsTm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbGwtbm93LWJ0bicpO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoY2FsbE5vd0J1dHRvbik7XG5cbiAgY29uc3QgY2FsbE5vd0J1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNhbGxOb3dCdXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2NhbGwtbm93LWJ0bi10ZXh0Jyk7XG4gIGNhbGxOb3dCdXR0b25UZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsICd0ZWw6MTIyOC04NjMtOTA5NicpO1xuICBjYWxsTm93QnV0dG9uVGV4dC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgY2FsbE5vd0J1dHRvblRleHQudGV4dENvbnRlbnQgPSAnQ2FsbCBub3cgdG8gcmVzZXJ2ZSEnO1xuICBjYWxsTm93QnV0dG9uLmFwcGVuZENoaWxkKGNhbGxOb3dCdXR0b25UZXh0KTtcblxuICBjb25zdCBjYWxsQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2FsbEJ0bkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1waG9uZS12b2x1bWUnKTtcbiAgY2FsbE5vd0J1dHRvbi5hcHBlbmRDaGlsZChjYWxsQnRuSWNvbik7XG59XG4iLCJpbXBvcnQgYnVpbGROYXZMaW5rcyBmcm9tICcuL25hdi1saW5rcyc7XG5cbmZ1bmN0aW9uIGNoZWNrSWZEZXNrdG9wSGVhZGVyRXhpc3RzKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2t0b3AtaGVhZGVyLXJpZ2h0JykpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZNb2JpbGVIZWFkZXJFeGlzdHMoaGVhZGVyRGl2LCBib2R5LCBtb2JpbGVOYXYpIHtcbiAgY29uc3QgbW9iaWxlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1oZWFkZXItcmlnaHQnKTtcblxuICBpZiAobW9iaWxlSGVhZGVyKSB7XG4gICAgaGVhZGVyRGl2LnJlbW92ZUNoaWxkKG1vYmlsZUhlYWRlcik7XG4gICAgYm9keS5yZW1vdmVDaGlsZChtb2JpbGVOYXYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRGVza3RvcE5hdk1lbnUoKSB7XG4gIC8vIGlmIGhlYWRlciBuYXYgZXhpc3RzIHdoZW4gYmVpbmcgY2FsbGVkIGJlIGEgcmVzaXplIGV2ZW50LCBqdXN0IHJldHVyblxuICBjb25zdCBoZWFkZXJDaGVjayA9IGNoZWNrSWZEZXNrdG9wSGVhZGVyRXhpc3RzKCk7XG4gIGlmIChoZWFkZXJDaGVjaykgcmV0dXJuO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2Jyk7XG5cbiAgLy8gaWYgbW9iaWxlIGhlYWRlciBleGlzdHMgd2hpbGUgcmVzaXppbmcgd2luZG93LCByZW1vdmUgZnJvbSB3aW5kb3dcbiAgY2hlY2tJZk1vYmlsZUhlYWRlckV4aXN0cyhoZWFkZXJEaXYsIGJvZHksIG1vYmlsZU5hdik7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyUmlnaHQuY2xhc3NMaXN0LmFkZCgnZGVza3RvcC1oZWFkZXItcmlnaHQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcblxuICBidWlsZE5hdkxpbmtzKGhlYWRlclJpZ2h0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpcGVEb21Db250ZW50KCkge1xuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwYXJlbnRDb250YWluZXI7XG4gIGNvbnN0IGNoaWxkQXJyYXkgPSBbLi4uY2hpbGRyZW5dO1xuXG4gIC8vIHdpbGwgZWl0aGVyIG5lZWQgdG8gY2hhbmdlIGhvbWUtY29udGVudCBvciBhZGQgZXZlcnkgcGFnZSBoZXJlIGJlY2F1c2UgZWFjaCBwYWdlXG4gIC8vIHdpbGwgYmUgbmFtZWQgeC1jb250ZW50IHRvIHN0eWxlIHRoZW0gZGlmZmVyZW50bHlcbiAgY2hpbGRBcnJheS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGNoaWxkLmNsYXNzTGlzdFswXSA9PT0gJ2hvbWUtY29udGVudCcgfHxcbiAgICAgIGNoaWxkLmNsYXNzTGlzdFswXSA9PT0gJ2Fib3V0LWNvbnRlbnQnIHx8XG4gICAgICBjaGlsZC5jbGFzc0xpc3RbMF0gPT09ICdzZXJ2aWNlLWNvbnRlbnQnIHx8XG4gICAgICBjaGlsZC5jbGFzc0xpc3RbMF0gPT09ICdjb250YWN0LWNvbnRlbnQnXG4gICAgKSB7XG4gICAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9hc3Nlc3RzL2ltYWdlcy9ndWxmLWhhdmVuLWxvZ28ucG5nJztcbmltcG9ydCBidWlsZERlc2t0b3BOYXZNZW51IGZyb20gJy4vZGVza3RvcC1uYXYtbWVudSc7XG5pbXBvcnQgYnVpbGRNb2JpbGVOYXYgZnJvbSAnLi9tb2JpbGUtbmF2LW1lbnUnO1xuaW1wb3J0IG1vYmlsZU5hdkV2ZW50cywgeyBuYXZFdmVudHMgfSBmcm9tICcuLi9ldmVudHMvbmF2LWV2ZW50cyc7XG5cbi8vIHJ1bnMgb24gbG9hZCB0byBkZXRlcm1pbmUgaWYgd2UgbG9hZCBhIGRlc2t0b3Agb3IgbW9iaWxlIHZpZXdcbmZ1bmN0aW9uIGNoZWNrU2NyZWVuU2l6ZSgpIHtcbiAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG5cbiAgLy8gaWYgc2NyZWVuIHNpemUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBob25lIHNpemVzICYgaXBhZFxuICBpZiAod2luZG93SGVpZ2h0IDw9IDEwODAgJiYgd2luZG93V2lkdGggPD0gODEwKSB7XG4gICAgYnVpbGRNb2JpbGVOYXYoKTtcbiAgICBtb2JpbGVOYXZFdmVudHMoKTtcbiAgICBuYXZFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZERlc2t0b3BOYXZNZW51KCk7XG4gICAgbmF2RXZlbnRzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJMZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sZWZ0Jyk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KTtcblxuICBjb25zdCBydkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHJ2TG9nby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNhcmF2YW4gZmEteGwnKTtcbiAgcnZMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQocnZMb2dvKTtcblxuICAvLyBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIC8vIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgLy8gaGVhZGVyTG9nby5zcmMgPSB0ZXN0O1xuICAvLyBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuXG4gIGNvbnN0IGhlYWRlckxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoZWFkZXJMb2dvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nby10ZXh0Jyk7XG4gIGhlYWRlckxvZ29UZXh0LnRleHRDb250ZW50ID0gJ0dVTEYgSEFWRU4gUlYnO1xuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ29UZXh0KTtcblxuICBjaGVja1NjcmVlblNpemUoKTtcbn1cblxuZXhwb3J0IHsgY2hlY2tTY3JlZW5TaXplIH07XG4iLCJpbXBvcnQgYnVpbGROYXZMaW5rcyBmcm9tICcuL25hdi1saW5rcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkTW9iaWxlTmF2TGlua3MoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdicpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vYmlsZU5hdik7XG5cbiAgYnVpbGROYXZMaW5rcyhtb2JpbGVOYXYpO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmTW9iaWxlTmF2RXhpc3RzKCkge1xuICBjb25zdCBtb2JpbGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWhlYWRlci1yaWdodCcpO1xuICBpZiAobW9iaWxlSGVhZGVyKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZEZXNrdG9wSGVhZGVyRXhpc3RzKGhlYWRlckRpdikge1xuICBjb25zdCBkZXNrdG9wSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2t0b3AtaGVhZGVyLXJpZ2h0Jyk7XG4gIGlmIChkZXNrdG9wSGVhZGVyKSB7XG4gICAgaGVhZGVyRGl2LnJlbW92ZUNoaWxkKGRlc2t0b3BIZWFkZXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9iaWxlTmF2SWNvbigpIHtcbiAgLy8gaWYgbW9iaWxlIG5hdiBleGlzdHMgd2hlbiBiZWluZyBjYWxsZWQgYnkgYSByZXNpemUgZXZlbnQsIGp1c3QgcmV0dXJuXG4gIGNvbnN0IGhlYWRlckNoZWNrID0gY2hlY2tJZk1vYmlsZU5hdkV4aXN0cygpO1xuICBpZiAoaGVhZGVyQ2hlY2spIHJldHVybjtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIC8vIGlmIGRlc2t0b3AgaGVhZGVyIGV4aXN0cyB3aGlsZSByZXNpemluZyB3aW5kb3csIHJlbW92ZSBmcm9tIHdpbmRvd1xuICBjaGVja0lmRGVza3RvcEhlYWRlckV4aXN0cyhoZWFkZXJEaXYpO1xuXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1oZWFkZXItcmlnaHQnKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcblxuICBjb25zdCBuYXZJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBuYXZJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtYmFycy1zdGFnZ2VyZWQgZmEteGwnKTtcbiAgbmF2SWNvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbmF2LWljb24nKTtcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQobmF2SWNvbik7XG4gIGJ1aWxkTW9iaWxlTmF2TGlua3MoKTtcbn1cblxuZXhwb3J0IHsgYnVpbGRNb2JpbGVOYXZMaW5rcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGROYXZMaW5rcyhlbGVtZW50KSB7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBob21lTGluay5jbGFzc0xpc3QuYWRkKCdob21lLWxpbmsnKTtcbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIC8vIHdlIHdhbnQgaG9tZSB0byBiZSB0aGUgcGFnZSB0aGUgc2l0ZSBvcGVucyB1cCB0b1xuICBob21lTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWxpbmsnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBhYm91dExpbmsudGV4dENvbnRlbnQgPSAnQUJPVVQnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGFib3V0TGluayk7XG5cbiAgY29uc3Qgc2VydmljZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBzZXJ2aWNlc0xpbmsuY2xhc3NMaXN0LmFkZCgnc2VydmljZXMtbGluaycpO1xuICBzZXJ2aWNlc0xpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNlcnZpY2VzTGluay50ZXh0Q29udGVudCA9ICdTRVJWSUNFUyc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VydmljZXNMaW5rKTtcblxuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1saW5rJyk7XG4gIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG59XG4iLCJmdW5jdGlvbiBidWlsZEFib3V0RGl2cygpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1jb250ZW50Jyk7XG5cbiAgY29uc3QgcGljdHVyZURpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwaWN0dXJlRGl2T25lLmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUtZGl2LW9uZScpO1xuICBwaWN0dXJlRGl2T25lLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWRpdicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBpY3R1cmVEaXZPbmUpO1xuXG4gIGNvbnN0IHRleHREaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dERpdk9uZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRpdi1vbmUnKTtcbiAgdGV4dERpdk9uZS5jbGFzc0xpc3QuYWRkKCdhYm91dC1kaXYnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RGl2T25lKTtcblxuICBjb25zdCBwaWN0dXJlRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY3R1cmVEaXZUd28uY2xhc3NMaXN0LmFkZCgncGljdHVyZS1kaXYtdHdvJyk7XG4gIHBpY3R1cmVEaXZUd28uY2xhc3NMaXN0LmFkZCgnYWJvdXQtZGl2Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGljdHVyZURpdlR3byk7XG5cbiAgY29uc3QgdGV4dERpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RGl2VHdvLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGl2LXR3bycpO1xuICB0ZXh0RGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWRpdicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHREaXZUd28pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFib3V0Q29udGVudERpdigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgYnVpbGRBYm91dERpdnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0UGFnZSgpIHtcbiAgYnVpbGRBYm91dENvbnRlbnREaXYoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHt9XG4iLCJpbXBvcnQgdGVzdEJnIGZyb20gJy4uLy4uL2Fzc2VzdHMvaW1hZ2VzL3Rlc3QucG5nJztcbmltcG9ydCBidWlsZENhbGxUb0Jvb2tCdXR0b24gZnJvbSAnLi4vY2FsbC1idXR0b24nO1xuaW1wb3J0IGJ1aWxkU29jaWFsc0RpdiBmcm9tICcuLi9zb2NpYWxzJztcblxuZnVuY3Rpb24gYnVpbGRIb21lTWFpbkxlZnREaXYoaG9tZUNvbnRlbnQpIHtcbiAgY29uc3QgbWFpbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxlZnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1sZWZ0Jyk7XG4gIG1haW5MZWZ0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluTGVmdCk7XG5cbiAgY29uc3QgdGl0bGVBbmRXZWxjb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlQW5kV2VsY29tZURpdi5jbGFzc0xpc3QuYWRkKCdob21lLXdlbGNvbWUtZGl2Jyk7XG4gIG1haW5MZWZ0LmFwcGVuZENoaWxkKHRpdGxlQW5kV2VsY29tZURpdik7XG5cbiAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZScpO1xuICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnQk9PSyBBIEJFQUNIIEJSRUFLJztcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgY29uc3QgaG9tZVRpdGxlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lVGl0bGVCb3R0b20uY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZS1ib3R0b20nKTtcbiAgaG9tZVRpdGxlQm90dG9tLnRleHRDb250ZW50ID0gJ0NPTUUgU1RPUCBCWSEnO1xuICB0aXRsZUFuZFdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlQm90dG9tKTtcblxuICBjb25zdCBob21lTGVmdENvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVMZWZ0Q29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQtaGVhZGVyJyk7XG4gIGhvbWVMZWZ0Q29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdHVUxGIEhBVkVOIFJWIFJFU09SVCc7XG4gIHRpdGxlQW5kV2VsY29tZURpdi5hcHBlbmRDaGlsZChob21lTGVmdENvbnRlbnRIZWFkZXIpO1xuXG4gIGNvbnN0IGhvbWVMZWZ0VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVMZWZ0VGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250ZW50LXRleHQnKTtcbiAgaG9tZUxlZnRUZXh0Q29udGVudC50ZXh0Q29udGVudCA9XG4gICAgJ0xvY2F0ZWQganVzdCBvZmYgSGlnaHdheSA5MCAoQmVhY2ggQmx2ZCkgaW4gR3VsZnBvcnQgR3VsZiBIYXZlbiBDYW1wZ3JvdW5kIGZlYXR1cmVzIFJWIGhvb2stdXBzLCBwdWxsLXRocm91Z2ggc3BhY2VzLCBXaS1GaSBhY2Nlc3MgYW5kIGNhYmxlIGNvbm5lY3Rpb25zIGF0IGV2ZXJ5IHNpdGUsIHBhbG0gdHJlZXMsIGZsb3dlciBiZWRzLCBhbmQgbXVjaCBtb3JlLiBUaGUgb2ZmaWNlIGhvdXNlcyBub3Qgb25seSB0aGUgb2ZmaWNlLCBidXQgdGhlIHNob3dlcnMgYW5kIHJlc3Ryb29tcy4gQSB3cmFwYXJvdW5kIHBvcmNoIGVxdWlwcGVkIHdpdGggcm9ja2luZyBjaGFpcnMgb3Zlcmxvb2tzIHRoZSBiZWF1dGlmdWwgR3VsZiBvZiBNZXhpY28hJztcbiAgdGl0bGVBbmRXZWxjb21lRGl2LmFwcGVuZENoaWxkKGhvbWVMZWZ0VGV4dENvbnRlbnQpO1xuXG4gIGJ1aWxkQ2FsbFRvQm9va0J1dHRvbih0aXRsZUFuZFdlbGNvbWVEaXYpO1xuICBidWlsZFNvY2lhbHNEaXYobWFpbkxlZnQpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvbWVNYWluUmlnaHREaXYoaG9tZUNvbnRlbnQpIHtcbiAgY29uc3QgbWFpblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbWFpblJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21haW4tcmlnaHQnKTtcbiAgLy8gbWFpblJpZ2h0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttYWluUmlnaHRCR30pYDtcbiAgbWFpblJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluUmlnaHQpO1xufVxuXG5mdW5jdGlvbiBidWlsZEhvbWVDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgaG9tZUNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Rlc3RCZ30pYDtcbiAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gIGJ1aWxkSG9tZU1haW5MZWZ0RGl2KGhvbWVDb250ZW50KTtcbiAgYnVpbGRIb21lTWFpblJpZ2h0RGl2KGhvbWVDb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlT25Mb2FkKCkge1xuICBidWlsZEhvbWVDb250ZW50RGl2KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2VydmljZXNQYWdlKCkge31cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU29jaWFsc0RpdihtYWluTGVmdCkge1xuICBjb25zdCBzb2NpYWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNvY2lhbHNEaXYuY2xhc3NMaXN0LmFkZCgnc29jaWFscy1kaXYnKTtcbiAgbWFpbkxlZnQuYXBwZW5kQ2hpbGQoc29jaWFsc0Rpdik7XG5cbiAgY29uc3Qgc29jaWFsRmFjZWJvb2tMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBzb2NpYWxGYWNlYm9va0xpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1icmFuZHMgZmEtZmFjZWJvb2sgZmEtMnhsJyk7XG4gIHNvY2lhbEZhY2Vib29rTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0ZhY2Vib29rJyk7XG4gIHNvY2lhbEZhY2Vib29rTGluay5jbGFzc0xpc3QuYWRkKCdmYWNlYm9vay1saW5rJyk7XG4gIHNvY2lhbHNEaXYuYXBwZW5kQ2hpbGQoc29jaWFsRmFjZWJvb2tMaW5rKTtcblxuICAvLyAgIGNvbnN0IHNvY2lhbEluc3RhZ3JhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vICAgc29jaWFsSW5zdGFncmFtTGluay5zZXRBdHRyaWJ1dGUoXG4gIC8vICAgICAnY2xhc3MnLFxuICAvLyAgICAgJ2ZhLWJyYW5kcyBmYS1zcXVhcmUtaW5zdGFncmFtIGZhLTJ4bCdcbiAgLy8gICApO1xuICAvLyAgIHNvY2lhbEluc3RhZ3JhbUxpbmsuY2xhc3NMaXN0LmFkZCgnaW5zdGFncmFtLWxpbmsnKTtcbiAgLy8gICBzb2NpYWxzRGl2LmFwcGVuZENoaWxkKHNvY2lhbEluc3RhZ3JhbUxpbmspO1xuXG4gIGNvbnN0IHNvY2lhbEd1bGZDb2FzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHNvY2lhbEd1bGZDb2FzdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1zdW4gZmEtMnhsJyk7XG4gIHNvY2lhbEd1bGZDb2FzdExpbmsuY2xhc3NMaXN0LmFkZCgnbXMtZ3VsZi1jb2FzdC1saW5rJyk7XG4gIHNvY2lhbHNEaXYuYXBwZW5kQ2hpbGQoc29jaWFsR3VsZkNvYXN0TGluayk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi91aS9oZWFkZXInO1xuaW1wb3J0ICcuL2Fzc2VzdHMvc3R5bGUuY3NzJztcbmltcG9ydCBjaGVja1NjcmVlblNpemVBZGp1c3RtZW50IGZyb20gJy4vZXZlbnRzL2V2ZW50cyc7XG5pbXBvcnQgbG9hZEhvbWVQYWdlT25Mb2FkIGZyb20gJy4vdWkvcGFnZXMvaG9tZSc7XG5cbmNyZWF0ZUhlYWRlcigpO1xuY2hlY2tTY3JlZW5TaXplQWRqdXN0bWVudCgpO1xubG9hZEhvbWVQYWdlT25Mb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=