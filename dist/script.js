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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWNjb3JkaW9uL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FjY29yZGlvbi9zdHlsZS5zY3NzPzI5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRob3ItcHJvZmlsZS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hdXRob3ItcHJvZmlsZS9zdHlsZS5zY3NzPzI0NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9ja3F1b3RlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2NrcXVvdGUvc3R5bGUuc2Nzcz8yZjY5Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnV0dG9uL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9zdHlsZS5zY3NzP2FlM2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb250YWluZXIvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udGFpbmVyL3N0eWxlLnNjc3M/MGZmZSIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvdW50LXVwL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvdW50LXVwL3N0eWxlLnNjc3M/NDY5YSIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2N0YS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jdGEvc3R5bGUuc2Nzcz9kNDE2Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZHJvcC1jYXAvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZHJvcC1jYXAvc3R5bGUuc2Nzcz8yNjE0Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZmVhdHVyZS1ncmlkL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZlYXR1cmUtZ3JpZC9zdHlsZS5zY3NzPzIzNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pY29uLWxpc3Qvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbi1saXN0L3N0eWxlLnNjc3M/ZGM4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL25vdGlmaWNhdGlvbi9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ub3RpZmljYXRpb24vc3R5bGUuc2Nzcz8xODIxIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbnVtYmVyLWJveC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9udW1iZXItYm94L3N0eWxlLnNjc3M/MGU1OCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Bvc3QtZ3JpZC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wb3N0LWdyaWQvc3R5bGUuc2Nzcz9lN2Y2Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcXVpY2stY29udGFjdC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9xdWljay1jb250YWN0L3N0eWxlLnNjc3M/NGFkMCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NlcGFyYXRvci9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZXBhcmF0b3Ivc3R5bGUuc2Nzcz9jODNmIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2hhcmUtaWNvbnMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2hhcmUtaWNvbnMvc3R5bGUuc2Nzcz80ZGExIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc3BhY2VyLWRpdmlkZXIvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc3BhY2VyLWRpdmlkZXIvc3R5bGUuc2Nzcz82MTg1Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVhbS1tZW1iZXIvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVhbS1tZW1iZXIvc3R5bGUuc2Nzcz85MDk3Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVzdGltb25pYWwvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGVzdGltb25pYWwvc3R5bGUuc2Nzcz83YWJhIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoXCIuYWNjb3JkaW9uLWFycm93XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLWFjY29yZGlvbl9fY29udGVudC1vdXRlclwiKS50b2dnbGVDbGFzcyhcImdiLWFjY29yZGlvbi1vcGVuXCIpO1xuICB9KTtcbiAgJChcIi5hY2NvcmRpb24tYXJyb3dcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJpY29udG9nZ2xlXCIpO1xuICB9KTtcbiAgJChcIi5hY2NvcmRpb24tYXJyb3cxXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLWFjY29yZGlvbl9fY29udGVudC1vdXRlclwiKS50b2dnbGVDbGFzcyhcImdiLWFjY29yZGlvbi1vcGVuXCIpO1xuICB9KTtcbiAgJChcIi5hY2NvcmRpb24tYXJyb3cxXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaWNvbnRvZ2dsZTFcIik7XG4gIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciBhID0gMDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3AtYmxvY2stZ3V0ZWJsb2NrLWNvdW50LXVwX19jb250YWluZXInKTtcblxuICAgIGlmIChteUVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGJvdW5kaW5nID0gbXlFbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoYm91bmRpbmcudG9wID49IDAgJiYgYm91bmRpbmcubGVmdCA+PSAwICYmIGJvdW5kaW5nLnJpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoICYmIGJvdW5kaW5nLmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdmFyIG9Ub3AgPSAkKCcud3AtYmxvY2stZ3V0ZWJsb2NrLWNvdW50LXVwX19jb250YWluZXInKS5vZmZzZXQoKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGEgPT0gMCAmJiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBvVG9wKSB7XG4gICAgICAgICAgJCgnLndwLWJsb2NrLWd1dGVibG9jay1jb3VudC11cF9fbnVtYmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIGNvdW50VG8gPSAkdGhpcy5hdHRyKCdkYXRhLWNvdW50Jyk7XG4gICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgY291bnROdW06IDBcbiAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBjb3VudE51bTogY291bnRUb1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiBzdGVwKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLnRleHQoTWF0aC5mbG9vcih0aGlzLmNvdW50TnVtKSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50ZXh0KHRoaXMuY291bnROdW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhID0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1ub3RpZmljYXRpb25fX2Nsb3NlQnRuXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLW5vdGlmaWNhdGlvblwiKS5zbGlkZVVwKCk7XG4gIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmlmICgodHlwZW9mIGdyZWNhcHRjaGEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihncmVjYXB0Y2hhKSkgPT0gJ29iamVjdCcpIHtcbiAgZ3JlY2FwdGNoYS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZ3JlY2FwdGNoYS5leGVjdXRlKGd1dGVibG9jay5yZWNhcHRjaGFfc2l0ZV9rZXksIHtcbiAgICAgIGFjdGlvbjogXCJcIlxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICB2YXIgcmVjYXB0Y2hhUmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2FwdGNoYVJlc3BvbnNlXCIpO1xuICAgICAgcmVjYXB0Y2hhUmVzcG9uc2UudmFsdWUgPSB0b2tlbjtcbiAgICB9KTtcbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi5nYi1hbGVydFwiKS5kZWxheSgxMDAwMCkuc2xpZGVVcCgpO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9ibG9ja3MvY29udGFpbmVyL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvdGVhbS1tZW1iZXIvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy90ZXN0aW1vbmlhbC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3NlcGFyYXRvci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL251bWJlci1ib3gvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9wb3N0LWdyaWQvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9kcm9wLWNhcC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL25vdGlmaWNhdGlvbi9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3NoYXJlLWljb25zL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jdGEvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9zcGFjZXItZGl2aWRlci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2ZlYXR1cmUtZ3JpZC9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrcXVvdGUvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9pY29uLWxpc3Qvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9idXR0b24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9hY2NvcmRpb24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jb3VudC11cC9zY3JpcHRcIjsgLy9pbXBvcnQgXCIuL2Jsb2Nrcy9uZXdzbGV0dGVyL3NjcmlwdFwiO1xuLy9pbXBvcnQgXCIuL2Jsb2Nrcy9jYXJkL3NjcmlwdFwiO1xuLy8gVXBjb21pbmdcblxuaW1wb3J0IFwiLi9ibG9ja3MvcXVpY2stY29udGFjdC9zY3JpcHRcIjsgLy9pbXBvcnQgXCIuL2Jsb2Nrcy9wYXlwYWwtZG9uYXRpb24vc2NyaXB0XCI7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==