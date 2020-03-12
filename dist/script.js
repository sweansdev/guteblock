/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/accordion/script.js":
/*!****************************************!*\
  !*** ./src/blocks/accordion/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/accordion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".accordion-arrow").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().parent().parent().find(".wp-block-guteblock-accordion__content-outer").toggleClass("gb-accordion-open");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".accordion-arrow").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass("icontoggle");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".accordion-arrow1").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().parent().find(".wp-block-guteblock-accordion__content-outer").toggleClass("gb-accordion-open");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".accordion-arrow1").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass("icontoggle1");
  });
});

/***/ }),

/***/ "./src/blocks/accordion/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/accordion/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/author-profile/script.js":
/*!*********************************************!*\
  !*** ./src/blocks/author-profile/script.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/author-profile/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/author-profile/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/author-profile/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/blockquote/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/blockquote/script.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/blockquote/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/blockquote/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/blockquote/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/button/script.js":
/*!*************************************!*\
  !*** ./src/blocks/button/script.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/button/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/button/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/container/script.js":
/*!****************************************!*\
  !*** ./src/blocks/container/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/container/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/container/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/container/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/count-up/script.js":
/*!***************************************!*\
  !*** ./src/blocks/count-up/script.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/count-up/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  var a = 0;
  window.addEventListener('scroll', function () {
    var myElement = document.getElementsByClassName('wp-block-guteblock-count-up__container');

    if (myElement.length > 0) {
      var bounding = myElement[0].getBoundingClientRect();

      if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        var oTop = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wp-block-guteblock-count-up__container').offset().top - window.innerHeight;

        if (a == 0 && jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() > oTop) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.wp-block-guteblock-count-up__number').each(function () {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this),
                countTo = $this.attr('data-count');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()({
              countNum: 0
            }).animate({
              countNum: countTo
            }, {
              duration: 2000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      } else {
        a = 0;
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/count-up/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/count-up/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/cta/script.js":
/*!**********************************!*\
  !*** ./src/blocks/cta/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/cta/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/cta/style.scss":
/*!***********************************!*\
  !*** ./src/blocks/cta/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/drop-cap/script.js":
/*!***************************************!*\
  !*** ./src/blocks/drop-cap/script.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/drop-cap/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/drop-cap/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/drop-cap/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/feature-grid/script.js":
/*!*******************************************!*\
  !*** ./src/blocks/feature-grid/script.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/feature-grid/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/feature-grid/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/feature-grid/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/icon-list/script.js":
/*!****************************************!*\
  !*** ./src/blocks/icon-list/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/icon-list/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/icon-list/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/icon-list/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/notification/script.js":
/*!*******************************************!*\
  !*** ./src/blocks/notification/script.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/notification/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-notification__closeBtn").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest(".wp-block-guteblock-notification").slideUp();
  });
});

/***/ }),

/***/ "./src/blocks/notification/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/notification/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/number-box/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/number-box/script.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/number-box/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/number-box/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/number-box/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-grid/script.js":
/*!****************************************!*\
  !*** ./src/blocks/post-grid/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-grid/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-grid/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/post-grid/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/quick-contact/script.js":
/*!********************************************!*\
  !*** ./src/blocks/quick-contact/script.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/quick-contact/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




if ((typeof grecaptcha === "undefined" ? "undefined" : _typeof(grecaptcha)) == 'object') {
  console.log("test");
  grecaptcha.ready(function () {
    grecaptcha.execute(guteblock.recaptcha_site_key, {
      action: ""
    }).then(function (token) {
      var recaptchaResponse = document.getElementById("recaptchaResponse");
      recaptchaResponse.value = token;
    });
  });
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".gb-alert").delay(10000).slideUp();
});

/***/ }),

/***/ "./src/blocks/quick-contact/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/quick-contact/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/separator/script.js":
/*!****************************************!*\
  !*** ./src/blocks/separator/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/separator/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/separator/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/separator/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/share-icons/script.js":
/*!******************************************!*\
  !*** ./src/blocks/share-icons/script.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/share-icons/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/share-icons/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/share-icons/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/spacer-divider/script.js":
/*!*********************************************!*\
  !*** ./src/blocks/spacer-divider/script.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/spacer-divider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/spacer-divider/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/spacer-divider/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/team-member/script.js":
/*!******************************************!*\
  !*** ./src/blocks/team-member/script.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-member/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/team-member/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/team-member/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/testimonial/script.js":
/*!******************************************!*\
  !*** ./src/blocks/testimonial/script.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/testimonial/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/testimonial/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/testimonial/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_container_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/container/script */ "./src/blocks/container/script.js");
/* harmony import */ var _blocks_team_member_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/team-member/script */ "./src/blocks/team-member/script.js");
/* harmony import */ var _blocks_testimonial_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/testimonial/script */ "./src/blocks/testimonial/script.js");
/* harmony import */ var _blocks_separator_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/separator/script */ "./src/blocks/separator/script.js");
/* harmony import */ var _blocks_number_box_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/number-box/script */ "./src/blocks/number-box/script.js");
/* harmony import */ var _blocks_post_grid_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/post-grid/script */ "./src/blocks/post-grid/script.js");
/* harmony import */ var _blocks_drop_cap_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/drop-cap/script */ "./src/blocks/drop-cap/script.js");
/* harmony import */ var _blocks_notification_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/notification/script */ "./src/blocks/notification/script.js");
/* harmony import */ var _blocks_share_icons_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/share-icons/script */ "./src/blocks/share-icons/script.js");
/* harmony import */ var _blocks_author_profile_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/author-profile/script */ "./src/blocks/author-profile/script.js");
/* harmony import */ var _blocks_cta_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/cta/script */ "./src/blocks/cta/script.js");
/* harmony import */ var _blocks_spacer_divider_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/spacer-divider/script */ "./src/blocks/spacer-divider/script.js");
/* harmony import */ var _blocks_feature_grid_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/feature-grid/script */ "./src/blocks/feature-grid/script.js");
/* harmony import */ var _blocks_blockquote_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/blockquote/script */ "./src/blocks/blockquote/script.js");
/* harmony import */ var _blocks_icon_list_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/icon-list/script */ "./src/blocks/icon-list/script.js");
/* harmony import */ var _blocks_button_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/button/script */ "./src/blocks/button/script.js");
/* harmony import */ var _blocks_accordion_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/accordion/script */ "./src/blocks/accordion/script.js");
/* harmony import */ var _blocks_count_up_script__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/count-up/script */ "./src/blocks/count-up/script.js");
/* harmony import */ var _blocks_quick_contact_script__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/quick-contact/script */ "./src/blocks/quick-contact/script.js");

















 //import "./blocks/newsletter/script";
//import "./blocks/card/script";
// Upcoming

 //import "./blocks/paypal-donation/script";

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWNjb3JkaW9uL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FjY29yZGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrcXVvdGUvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2txdW90ZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnV0dG9uL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udGFpbmVyL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhaW5lci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY291bnQtdXAvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY291bnQtdXAvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2N0YS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jdGEvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Ryb3AtY2FwL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Ryb3AtY2FwL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mZWF0dXJlLWdyaWQvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZmVhdHVyZS1ncmlkL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pY29uLWxpc3Qvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbi1saXN0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ub3RpZmljYXRpb24vc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvbm90aWZpY2F0aW9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9udW1iZXItYm94L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL251bWJlci1ib3gvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Bvc3QtZ3JpZC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wb3N0LWdyaWQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3F1aWNrLWNvbnRhY3Qvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcXVpY2stY29udGFjdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2VwYXJhdG9yL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NlcGFyYXRvci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2hhcmUtaWNvbnMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2hhcmUtaWNvbnMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NwYWNlci1kaXZpZGVyL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NwYWNlci1kaXZpZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWFtLW1lbWJlci9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWFtLW1lbWJlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVzdGltb25pYWwvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVzdGltb25pYWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKFwiLmFjY29yZGlvbi1hcnJvd1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLndwLWJsb2NrLWd1dGVibG9jay1hY2NvcmRpb25fX2NvbnRlbnQtb3V0ZXJcIikudG9nZ2xlQ2xhc3MoXCJnYi1hY2NvcmRpb24tb3BlblwiKTtcbiAgfSk7XG4gICQoXCIuYWNjb3JkaW9uLWFycm93XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaWNvbnRvZ2dsZVwiKTtcbiAgfSk7XG4gICQoXCIuYWNjb3JkaW9uLWFycm93MVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLndwLWJsb2NrLWd1dGVibG9jay1hY2NvcmRpb25fX2NvbnRlbnQtb3V0ZXJcIikudG9nZ2xlQ2xhc3MoXCJnYi1hY2NvcmRpb24tb3BlblwiKTtcbiAgfSk7XG4gICQoXCIuYWNjb3JkaW9uLWFycm93MVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImljb250b2dnbGUxXCIpO1xuICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgYSA9IDA7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG15RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dwLWJsb2NrLWd1dGVibG9jay1jb3VudC11cF9fY29udGFpbmVyJyk7XG5cbiAgICBpZiAobXlFbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBib3VuZGluZyA9IG15RWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKGJvdW5kaW5nLnRvcCA+PSAwICYmIGJvdW5kaW5nLmxlZnQgPj0gMCAmJiBib3VuZGluZy5yaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBib3VuZGluZy5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHZhciBvVG9wID0gJCgnLndwLWJsb2NrLWd1dGVibG9jay1jb3VudC11cF9fY29udGFpbmVyJykub2Zmc2V0KCkudG9wIC0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGlmIChhID09IDAgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gb1RvcCkge1xuICAgICAgICAgICQoJy53cC1ibG9jay1ndXRlYmxvY2stY291bnQtdXBfX251bWJlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBjb3VudFRvID0gJHRoaXMuYXR0cignZGF0YS1jb3VudCcpO1xuICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgIGNvdW50TnVtOiAwXG4gICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgY291bnROdW06IGNvdW50VG9cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24gc3RlcCgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50ZXh0KE1hdGguZmxvb3IodGhpcy5jb3VudE51bSkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMudGV4dCh0aGlzLmNvdW50TnVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi53cC1ibG9jay1ndXRlYmxvY2stbm90aWZpY2F0aW9uX19jbG9zZUJ0blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KFwiLndwLWJsb2NrLWd1dGVibG9jay1ub3RpZmljYXRpb25cIikuc2xpZGVVcCgpO1xuICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5pZiAoKHR5cGVvZiBncmVjYXB0Y2hhID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZ3JlY2FwdGNoYSkpID09ICdvYmplY3QnKSB7XG4gIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgZ3JlY2FwdGNoYS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZ3JlY2FwdGNoYS5leGVjdXRlKGd1dGVibG9jay5yZWNhcHRjaGFfc2l0ZV9rZXksIHtcbiAgICAgIGFjdGlvbjogXCJcIlxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICB2YXIgcmVjYXB0Y2hhUmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2FwdGNoYVJlc3BvbnNlXCIpO1xuICAgICAgcmVjYXB0Y2hhUmVzcG9uc2UudmFsdWUgPSB0b2tlbjtcbiAgICB9KTtcbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi5nYi1hbGVydFwiKS5kZWxheSgxMDAwMCkuc2xpZGVVcCgpO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9ibG9ja3MvY29udGFpbmVyL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvdGVhbS1tZW1iZXIvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy90ZXN0aW1vbmlhbC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3NlcGFyYXRvci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL251bWJlci1ib3gvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9wb3N0LWdyaWQvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9kcm9wLWNhcC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL25vdGlmaWNhdGlvbi9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3NoYXJlLWljb25zL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jdGEvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9zcGFjZXItZGl2aWRlci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2ZlYXR1cmUtZ3JpZC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrcXVvdGUvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9pY29uLWxpc3Qvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9idXR0b24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9hY2NvcmRpb24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jb3VudC11cC9zY3JpcHRcIjsgLy9pbXBvcnQgXCIuL2Jsb2Nrcy9uZXdzbGV0dGVyL3NjcmlwdFwiO1xuLy9pbXBvcnQgXCIuL2Jsb2Nrcy9jYXJkL3NjcmlwdFwiO1xuLy8gVXBjb21pbmdcblxuaW1wb3J0IFwiLi9ibG9ja3MvcXVpY2stY29udGFjdC9zY3JpcHRcIjsgLy9pbXBvcnQgXCIuL2Jsb2Nrcy9wYXlwYWwtZG9uYXRpb24vc2NyaXB0XCI7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9