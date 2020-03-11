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

/***/ "./src/blocks/newsletter/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/newsletter/script.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/newsletter/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".newsletterSubmit").submit(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      type: "post",
      url: guteblock.ajaxurl,
      data: {
        action: "guteblock_newsletter_submit",
        email: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter__input").val(),
        double_optin: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter input[name='double_optin']").val()
      },
      success: function success(response) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter__popup-window").addClass("wp-block-guteblock-newsletter__popup-windowAfter");
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter__popup-window").empty(response);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter__popup-window").append(response);
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-newsletter__popup-window").removeClass("wp-block-guteblock-newsletter__popup-windowAfter");
          document.getElementById("newsletterMyForm").reset();
        }, 2000);
      }
    });
    return false;
  });
});

/***/ }),

/***/ "./src/blocks/newsletter/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/newsletter/style.scss ***!
  \******************************************/
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


grecaptcha.ready(function () {
  grecaptcha.execute(guteblock.recaptcha_site_key, {
    action: ""
  }).then(function (token) {
    var recaptchaResponse = document.getElementById("recaptchaResponse");
    recaptchaResponse.value = token;
  });
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".quickContactFormSubmit").submit(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      type: "post",
      url: guteblock.ajaxurl,
      data: {
        action: "guteblock_quick_contact_submit",
        nameField: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='quick_contact_form_name_field']").val(),
        emailField: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='quick_contact_form_email_field']").val(),
        phoneField: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='quick_contact_form_phone_field']").val(),
        websiteField: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='quick_contact_form_website_field']").val(),
        messageField: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact textarea[name='quick_contact_form_message_field']").val(),
        authorEmailId: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='quick_contact_form_authorEmailId_field']").val(),
        recaptchaResponse: jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact input[name='recaptcha_response']").val()
      },
      success: function success(response) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact__popup-window").addClass("wp-block-guteblock-quick-contact__popup-windowAfter");
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact__popup-window").empty(response);
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact__popup-window").append(response);
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(".wp-block-guteblock-quick-contact__popup-window").removeClass("wp-block-guteblock-quick-contact__popup-windowAfter");
          document.getElementById("quickContactMyForm").reset();
        }, 2000);
      }
    });
    return false;
  });
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
/* harmony import */ var _blocks_newsletter_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/newsletter/script */ "./src/blocks/newsletter/script.js");
/* harmony import */ var _blocks_quick_contact_script__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/quick-contact/script */ "./src/blocks/quick-contact/script.js");
















 //import "./blocks/accordion/script";
//import "./blocks/count-up/script";
//import "./blocks/card/script";
// Pro

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXV0aG9yLXByb2ZpbGUvc3R5bGUuc2Nzcz8yNDViIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2txdW90ZS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9ja3F1b3RlL3N0eWxlLnNjc3M/MmY2OSIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idXR0b24vc3R5bGUuc2Nzcz9hZTNjIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udGFpbmVyL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhaW5lci9zdHlsZS5zY3NzPzBmZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jdGEvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY3RhL3N0eWxlLnNjc3M/ZDQxNiIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Ryb3AtY2FwL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Ryb3AtY2FwL3N0eWxlLnNjc3M/MjYxNCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZlYXR1cmUtZ3JpZC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mZWF0dXJlLWdyaWQvc3R5bGUuc2Nzcz8yMzU5Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbi1saXN0L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ljb24tbGlzdC9zdHlsZS5zY3NzP2RjOGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9uZXdzbGV0dGVyL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL25ld3NsZXR0ZXIvc3R5bGUuc2Nzcz9lNGJjIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvbm90aWZpY2F0aW9uL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL25vdGlmaWNhdGlvbi9zdHlsZS5zY3NzPzE4MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9udW1iZXItYm94L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL251bWJlci1ib3gvc3R5bGUuc2Nzcz8wZTU4Iiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcG9zdC1ncmlkL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Bvc3QtZ3JpZC9zdHlsZS5zY3NzP2U3ZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9xdWljay1jb250YWN0L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3F1aWNrLWNvbnRhY3Qvc3R5bGUuc2Nzcz80YWQwIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2VwYXJhdG9yL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NlcGFyYXRvci9zdHlsZS5zY3NzP2M4M2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zaGFyZS1pY29ucy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zaGFyZS1pY29ucy9zdHlsZS5zY3NzPzRkYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zcGFjZXItZGl2aWRlci9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zcGFjZXItZGl2aWRlci9zdHlsZS5zY3NzPzYxODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWFtLW1lbWJlci9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWFtLW1lbWJlci9zdHlsZS5zY3NzPzkwOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXN0aW1vbmlhbC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXN0aW1vbmlhbC9zdHlsZS5zY3NzPzdhYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHQuanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi5uZXdzbGV0dGVyU3VibWl0XCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgdXJsOiBndXRlYmxvY2suYWpheHVybCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aW9uOiBcImd1dGVibG9ja19uZXdzbGV0dGVyX3N1Ym1pdFwiLFxuICAgICAgICBlbWFpbDogJChcIi53cC1ibG9jay1ndXRlYmxvY2stbmV3c2xldHRlcl9faW5wdXRcIikudmFsKCksXG4gICAgICAgIGRvdWJsZV9vcHRpbjogJChcIi53cC1ibG9jay1ndXRlYmxvY2stbmV3c2xldHRlciBpbnB1dFtuYW1lPSdkb3VibGVfb3B0aW4nXVwiKS52YWwoKVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgJChcIi53cC1ibG9jay1ndXRlYmxvY2stbmV3c2xldHRlcl9fcG9wdXAtd2luZG93XCIpLmFkZENsYXNzKFwid3AtYmxvY2stZ3V0ZWJsb2NrLW5ld3NsZXR0ZXJfX3BvcHVwLXdpbmRvd0FmdGVyXCIpO1xuICAgICAgICAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1uZXdzbGV0dGVyX19wb3B1cC13aW5kb3dcIikuZW1wdHkocmVzcG9uc2UpO1xuICAgICAgICAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1uZXdzbGV0dGVyX19wb3B1cC13aW5kb3dcIikuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChcIi53cC1ibG9jay1ndXRlYmxvY2stbmV3c2xldHRlcl9fcG9wdXAtd2luZG93XCIpLnJlbW92ZUNsYXNzKFwid3AtYmxvY2stZ3V0ZWJsb2NrLW5ld3NsZXR0ZXJfX3BvcHVwLXdpbmRvd0FmdGVyXCIpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3c2xldHRlck15Rm9ybVwiKS5yZXNldCgpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLW5vdGlmaWNhdGlvbl9fY2xvc2VCdG5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdChcIi53cC1ibG9jay1ndXRlYmxvY2stbm90aWZpY2F0aW9uXCIpLnNsaWRlVXAoKTtcbiAgfSk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmdyZWNhcHRjaGEucmVhZHkoZnVuY3Rpb24gKCkge1xuICBncmVjYXB0Y2hhLmV4ZWN1dGUoZ3V0ZWJsb2NrLnJlY2FwdGNoYV9zaXRlX2tleSwge1xuICAgIGFjdGlvbjogXCJcIlxuICB9KS50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciByZWNhcHRjaGFSZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjYXB0Y2hhUmVzcG9uc2VcIik7XG4gICAgcmVjYXB0Y2hhUmVzcG9uc2UudmFsdWUgPSB0b2tlbjtcbiAgfSk7XG59KTtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcIi5xdWlja0NvbnRhY3RGb3JtU3VibWl0XCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgdXJsOiBndXRlYmxvY2suYWpheHVybCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aW9uOiBcImd1dGVibG9ja19xdWlja19jb250YWN0X3N1Ym1pdFwiLFxuICAgICAgICBuYW1lRmllbGQ6ICQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLXF1aWNrLWNvbnRhY3QgaW5wdXRbbmFtZT0ncXVpY2tfY29udGFjdF9mb3JtX25hbWVfZmllbGQnXVwiKS52YWwoKSxcbiAgICAgICAgZW1haWxGaWVsZDogJChcIi53cC1ibG9jay1ndXRlYmxvY2stcXVpY2stY29udGFjdCBpbnB1dFtuYW1lPSdxdWlja19jb250YWN0X2Zvcm1fZW1haWxfZmllbGQnXVwiKS52YWwoKSxcbiAgICAgICAgcGhvbmVGaWVsZDogJChcIi53cC1ibG9jay1ndXRlYmxvY2stcXVpY2stY29udGFjdCBpbnB1dFtuYW1lPSdxdWlja19jb250YWN0X2Zvcm1fcGhvbmVfZmllbGQnXVwiKS52YWwoKSxcbiAgICAgICAgd2Vic2l0ZUZpZWxkOiAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1xdWljay1jb250YWN0IGlucHV0W25hbWU9J3F1aWNrX2NvbnRhY3RfZm9ybV93ZWJzaXRlX2ZpZWxkJ11cIikudmFsKCksXG4gICAgICAgIG1lc3NhZ2VGaWVsZDogJChcIi53cC1ibG9jay1ndXRlYmxvY2stcXVpY2stY29udGFjdCB0ZXh0YXJlYVtuYW1lPSdxdWlja19jb250YWN0X2Zvcm1fbWVzc2FnZV9maWVsZCddXCIpLnZhbCgpLFxuICAgICAgICBhdXRob3JFbWFpbElkOiAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1xdWljay1jb250YWN0IGlucHV0W25hbWU9J3F1aWNrX2NvbnRhY3RfZm9ybV9hdXRob3JFbWFpbElkX2ZpZWxkJ11cIikudmFsKCksXG4gICAgICAgIHJlY2FwdGNoYVJlc3BvbnNlOiAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1xdWljay1jb250YWN0IGlucHV0W25hbWU9J3JlY2FwdGNoYV9yZXNwb25zZSddXCIpLnZhbCgpXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1xdWljay1jb250YWN0X19wb3B1cC13aW5kb3dcIikuYWRkQ2xhc3MoXCJ3cC1ibG9jay1ndXRlYmxvY2stcXVpY2stY29udGFjdF9fcG9wdXAtd2luZG93QWZ0ZXJcIik7XG4gICAgICAgICQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLXF1aWNrLWNvbnRhY3RfX3BvcHVwLXdpbmRvd1wiKS5lbXB0eShyZXNwb25zZSk7XG4gICAgICAgICQoXCIud3AtYmxvY2stZ3V0ZWJsb2NrLXF1aWNrLWNvbnRhY3RfX3BvcHVwLXdpbmRvd1wiKS5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKFwiLndwLWJsb2NrLWd1dGVibG9jay1xdWljay1jb250YWN0X19wb3B1cC13aW5kb3dcIikucmVtb3ZlQ2xhc3MoXCJ3cC1ibG9jay1ndXRlYmxvY2stcXVpY2stY29udGFjdF9fcG9wdXAtd2luZG93QWZ0ZXJcIik7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWlja0NvbnRhY3RNeUZvcm1cIikucmVzZXQoKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vYmxvY2tzL2NvbnRhaW5lci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3RlYW0tbWVtYmVyL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvdGVzdGltb25pYWwvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9zZXBhcmF0b3Ivc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9udW1iZXItYm94L3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvcG9zdC1ncmlkL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvZHJvcC1jYXAvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9ub3RpZmljYXRpb24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9zaGFyZS1pY29ucy9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2F1dGhvci1wcm9maWxlL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvY3RhL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3Mvc3BhY2VyLWRpdmlkZXIvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9mZWF0dXJlLWdyaWQvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9ibG9ja3F1b3RlL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvaWNvbi1saXN0L3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvYnV0dG9uL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvbmV3c2xldHRlci9zY3JpcHRcIjsgLy9pbXBvcnQgXCIuL2Jsb2Nrcy9hY2NvcmRpb24vc2NyaXB0XCI7XG4vL2ltcG9ydCBcIi4vYmxvY2tzL2NvdW50LXVwL3NjcmlwdFwiO1xuLy9pbXBvcnQgXCIuL2Jsb2Nrcy9jYXJkL3NjcmlwdFwiO1xuLy8gUHJvXG5cbmltcG9ydCBcIi4vYmxvY2tzL3F1aWNrLWNvbnRhY3Qvc2NyaXB0XCI7IC8vaW1wb3J0IFwiLi9ibG9ja3MvcGF5cGFsLWRvbmF0aW9uL3NjcmlwdFwiOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9