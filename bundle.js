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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() {\n\t$(\".nav-link, .scroll-top\").click(function(e) {\n\t\tlet target = $(this).attr('href');\n\t\tlet from = $(target).offset().top;\n\t\t$('html, body').animate({\n\t\t\tscrollTop: from\n\t\t}, 1000);\n\t\treturn false;\n\t})\n\t\n\t$('#flash').addClass('fadeOut');\n\tsetTimeout(() => {\n\t\t$('#flash').hide();\n\t\t$('.adv-item').addClass('fadeInUp')\n\t\t$('.contact-form').addClass('fadeInRight')\n\t}, 1000);\n\tconst map = new google.maps.Map(document.getElementById('map'), {\n\t\t\tcenter: {lat: 53.912732780101635, lng: 27.569198115906357},\n\t\t\tzoom: 15\n\t});\n\t$('[data-toggle=\"tooltip\"]').tooltip({ boundary: 'window' })\n\t// let marker = new google.maps.Marker({\n\t// \t\tposition: position,\n\t// \t\tmap: map,\n\t// \t\ticon: 'img/marker.png'\n\t// });\n\n\t$(window).scroll(function(e){\n\t\tlet scrolled = $('html').scrollTop();\n\t\tconsole.log(scrolled);\t\n\t\t\tif (scrolled > 300){\n\t\t\t\t$('#services .title.animated').addClass('fadeInUp')\n\t\t\t\t$('#services .service.animated').addClass('fadeInUp')\n\t\t\t}\n\t\t\tif (scrolled > 800){\n\t\t\t\t$('#pricelist .title.animated').addClass('fadeInUp')\n\t\t\t\t$('#pricelist .price-container.animated').addClass('fadeInUp')\n\t\t\t}\n\t\t\tif (scrolled > 1400){\n\t\t\t\t$('#make-order .title.animated').addClass('fadeInUp')\n\t\t\t\t$('#make-order .steps-container .animated').addClass('fadeInUp')\n\t\t\t}\n\t\t\tif (scrolled > 2600){\n\t\t\t\t$('#skills .title.animated').addClass('fadeInUp')\n\t\t\t\t$('#skills .skill-item.animated').addClass('fadeInUp')\n\t\t\t}\n\t\t\tif (scrolled > 3500){\n\t\t\t\t$('#partners .title.animated').addClass('fadeInUp')\n\t\t\t\t$('#partners .partner.animated').addClass('fadeIn')\n\t\t\t}\n\t})\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"styles/style.css\";\n\n//# sourceURL=webpack:///./src/styles/style.sass?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/js/index.js ./src/styles/style.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/style.sass */\"./src/styles/style.sass\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/styles/style.sass?");

/***/ })

/******/ });