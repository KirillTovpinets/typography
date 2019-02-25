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

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,\"__esModule\",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=6)}([function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i={modal:\"awn-modal\",toast:\"awn-toast\",btn:\"awn-btn\",confirm:\"awn-confirm\"};t.tConsts={prefix:i.toast,klass:{label:i.toast+\"-label\",content:i.toast+\"-content\",icon:i.toast+\"-icon\",progressBar:i.toast+\"-progress-bar\",progressBarPause:i.toast+\"-progress-bar-paused\"},ids:{container:i.toast+\"-container\"}},t.mConsts={prefix:i.modal,klass:{buttons:\"awn-buttons\",button:i.btn,successBtn:i.btn+\"-success\",cancelBtn:i.btn+\"-cancel\",title:i.modal+\"-title\",body:i.modal+\"-body\",content:i.modal+\"-content\",dotAnimation:i.modal+\"-loading-dots\"},ids:{wrapper:i.modal+\"-wrapper\",confirmOk:i.confirm+\"-ok\",confirmCancel:i.confirm+\"-cancel\"}},t.eConsts={klass:{hiding:\"awn-hiding\"},lib:\"awn\"}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0);var r=function(){function e(t,n,i,o,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:\"div\";!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.newNode=document.createElement(s),n&&(this.newNode.id=n),i&&(this.newNode.className=i),r&&(this.newNode.innerHTML=r),o&&(this.newNode.style.cssText=o),this.parent=t,this.options={}}return i(e,[{key:\"fire\",value:function(e){return e?e.replace(this.newNode,this.type):this.insert()}},{key:\"beforeInsert\",value:function(){}},{key:\"insert\",value:function(){this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert()}},{key:\"replace\",value:function(e,t){var n=this;if(this.getElement())return this.beforeDelete().then(function(){n.type=t,n.parent.replaceChild(e,n.el),n.el=document.getElementById(e.id),n.afterInsert()})}},{key:\"afterInsert\",value:function(){}},{key:\"beforeDelete\",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return new Promise(function(n,i){t.classList.add(o.eConsts.klass.hiding),setTimeout(n,e.options.animationDuration||300)})}},{key:\"delete\",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(t)?this.beforeDelete(t).then(function(){return e.parent.removeChild(t)}):null}},{key:\"getElement\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return document.getElementById(e.id)}},{key:\"addEvent\",value:function(e,t){this.el.addEventListener(e,t)}},{key:\"addClass\",value:function(e){this.el.classList.add(e)}},{key:\"removeClass\",value:function(e){this.el.classList.remove(e)}}]),e}();t.default=r},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1),s=(i=r)&&i.__esModule?i:{default:i},a=n(0);var u=function(e){function t(e,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,document.body,a.mConsts.ids.wrapper,null,\"animation-duration: \"+i.getSecs(\"animationDuration\")+\";\"));return o.options=i,o.type=n,o.setInnerHtml(e),o.insert(),o}return function(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),o(t,[{key:\"setInnerHtml\",value:function(e){var t=this.options.applyReplacements(e,this.type);switch(this.type){case\"confirm\":t=\"\\n          \"+this.options.icon(this.type)+\"\\n          <div class='\"+a.mConsts.klass.title+\"'>\\n            \"+this.options.label(this.type)+'\\n          </div>\\n          <div class=\"'+a.mConsts.klass.content+'\">'+t+\"</div>\\n          <div class='\"+a.mConsts.klass.buttons+\"'>\\n            <button class='\"+a.mConsts.klass.button+\" \"+a.mConsts.klass.successBtn+\"' id='\"+a.mConsts.ids.confirmOk+\"'>\"+this.options.modal.okLabel+\"</button>\\n            <button class='\"+a.mConsts.klass.button+\" \"+a.mConsts.klass.cancelBtn+\"' id='\"+a.mConsts.ids.confirmCancel+\"'>\"+this.options.modal.cancelLabel+\"</button>\\n          </div>\\n       \";break;case\"async-block\":t=t+'<div class=\"'+a.mConsts.klass.dotAnimation+'\"></div>'}this.newNode.innerHTML='\\n      <div class=\"'+a.mConsts.klass.body+\" \"+a.mConsts.prefix+\"-\"+this.type+'\" style=\"max-width: '+this.options.modal.maxWidth+';\">\\n        '+t+\"\\n      </div>\\n     \"}},{key:\"hideAsync\",value:function(e){var t=this,n=Date.now()-e;return new Promise(function(e,i){n>=t.options.asyncBlockMinDuration?(t.delete(),e()):setTimeout(function(){t.delete(),e()},t.options.asyncBlockMinDuration-n)})}}]),t}();t.default=u},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.callback=t,this.remaining=n,this.resume()}return i(e,[{key:\"pause\",value:function(){window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:\"resume\",value:function(){var e=this;this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(function(){window.clearTimeout(e.timerId),e.callback()},this.remaining)}}]),e}();t.default=o},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=a(n(1)),r=a(n(3)),s=n(0);function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o,s.tConsts.prefix+\"-\"+Math.floor(Date.now()-100*Math.random()),s.tConsts.prefix+\" \"+s.tConsts.prefix+\"-\"+n,\"animation-duration: \"+i.getSecs(\"animationDuration\")+\";\"));return r.options=i,r.type=n,r.setInnerHtml(e),r}return function(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:\"setInnerHtml\",value:function(e){e=this.options.applyReplacements(e,this.type);var t=\"\";\"async\"!==this.type&&(t=\"<div class='\"+s.tConsts.klass.progressBar+\"' style=\\\"animation-duration:\"+this.options.getSecs(\"duration\")+';\"></div>'),this.newNode.innerHTML=\"\\n    \"+t+\"\\n    \"+this.getLabel()+'\\n    <div class=\"'+s.tConsts.klass.content+'\">'+e+'</div>\\n    <span class=\"'+s.tConsts.klass.icon+'\">'+this.options.icon(this.type)+\"</span>\\n    \"}},{key:\"beforeInsert\",value:function(){var e=this;if(this.parent.childElementCount>=this.options.maxNotifications){var t=Array.from(this.parent.getElementsByClassName(s.tConsts.prefix));this.delete(t.find(function(t){return!e.isDeleted(t)}))}}},{key:\"afterInsert\",value:function(){var e=this;\"async\"!=this.type&&(this.timer=new r.default(function(){return e.delete()},this.options.duration),this.addEvent(\"click\",function(){return e.delete()}),this.addEvent(\"mouseenter\",function(){e.isDeleted()||(e.addClass(s.tConsts.klass.progressBarPause),e.timer.pause())}),this.addEvent(\"mouseleave\",function(){e.isDeleted()||(e.removeClass(s.tConsts.klass.progressBarPause),e.timer.resume())}))}},{key:\"isDeleted\",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el).classList.contains(s.eConsts.klass.hiding)}},{key:\"getLabel\",value:function(){return'<b class=\"'+s.tConsts.klass.label+'\">'+this.options.label(this.type)+\"</b>\"}}]),t}();t.default=u},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e};var r={labels:{tip:\"Tip\",info:\"Info\",success:\"Success\",warning:\"Attention\",alert:\"Error\",async:\"Loading\",confirm:\"Confirmation required\"},icons:{tip:\"question-circle\",info:\"info-circle\",success:\"check-circle\",warning:\"exclamation-circle\",alert:\"warning\",async:\"cog fa-spin\",confirm:\"warning\",prefix:\"<i class='fa fa-fw fa-\",suffix:\"'></i>\",enabled:!0},replacements:{tip:\"\",info:\"\",success:\"\",warning:\"\",alert:\"\",async:\"\",\"async-block\":\"\",modal:\"\",confirm:\"\",general:{\"<script>\":\"\",\"<\\/script>\":\"\"}},modal:{okLabel:\"OK\",cancelLabel:\"Cancel\",maxWidth:\"500px\"},messages:{async:\"Please, wait...\",\"async-block\":\"Loading\"},handleReject:function(e){if(\"string\"!=typeof e)throw Error(\"promise.reject() returning value should be a string, Given \"+(void 0===e?\"undefined\":o(e))+\" \"+e);return e},maxNotifications:10,animationDuration:300,asyncBlockMinDuration:500,position:\"bottom-right\",duration:5e3},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),Object.assign(this,function e(t,n){var i={};for(var r in t)n.hasOwnProperty(r)?\"object\"===o(t[r])?i[r]=e(t[r],n[r]):i[r]=n[r]:i[r]=t[r];return i}(r,t))}return i(e,[{key:\"icon\",value:function(e){return this.icons.enabled?\"\"+this.icons.prefix+this.icons[e]+this.icons.suffix:\"\"}},{key:\"label\",value:function(e){return this.labels[e]}},{key:\"getSecs\",value:function(e){return this[e]/1e3+\"s\"}},{key:\"applyReplacements\",value:function(e,t){if(!e)return this.messages[t]||\"\";for(var n in this.replacements.general)e=e.replace(n,this.replacements.general[n]);if(this.replacements[t])for(var i in this.replacements[t])e=e.replace(i,this.replacements[t][i]);return e}}]),e}();t.default=s},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var i=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=l(n(5)),s=l(n(4)),a=l(n(2)),u=l(n(1)),c=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.options=new r.default(t)}return o(e,[{key:\"_err\",value:function(e){throw Error(e)}},{key:\"tip\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\");this.notify(e,\"tip\")}},{key:\"info\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\");this.notify(e,\"info\")}},{key:\"success\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\");this.notify(e,\"success\")}},{key:\"warning\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\");this.notify(e,\"warning\")}},{key:\"alert\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\");this.notify(e,\"alert\")}},{key:\"async\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'promise' parameter\"),t=arguments[1],n=this,i=arguments[2],o=arguments[3],r=this.notify(o,\"async\");return e.then(function(e){return n._runFunction(!0,t,e,r)},function(e){return Promise.reject(n._runFunction(!1,i,e,r))})}},{key:\"notify\",value:function(e,t,n){var i=new s.default(e,t,this.options,this._getContainer());return i.fire(n),i}},{key:\"confirm\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\"),t=this,n=arguments[1],i=arguments[2],o=new a.default(e,\"confirm\",this.options);o.addEvent(\"click\",function(e){if(\"BUTTON\"!==e.target.nodeName)return!1;switch(o.delete(),e.target.id){case c.mConsts.ids.confirmOk:return t._runFunction(!0,n);case c.mConsts.ids.confirmCancel:return t._runFunction(!0,i)}})}},{key:\"asyncBlock\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'promise' parameter\"),t=arguments[1],n=this,i=arguments[2],o=arguments[3],r=new a.default(o,\"async-block\",this.options),s=Date.now();return e.then(function(e){return r.hideAsync(s).then(function(){return n._runFunction(!0,t,e)})},function(e){return r.hideAsync(s).then(function(){return Promise.reject(n._runFunction(!1,i,e))})})}},{key:\"modal\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err(\"missing 'html' parameter\"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._err(\"missing className parameter\"),n=new a.default(e,t,this.options);n.addEvent(\"click\",function(e){e.target.id===n.el.id&&n.delete()})}},{key:\"_getContainer\",value:function(){return this.container||(this.container=document.getElementById(c.tConsts.ids.container)||this._createContainer()),this.container}},{key:\"_createContainer\",value:function(){var e=this.options.position.split(\"-\"),t=\"top\"===e[0]?c.eConsts.lib+\"-top\":\"\";\"left\"===e[1]&&(t=t+\" \"+c.eConsts.lib+\"-left\");var n=new u.default(document.body,c.tConsts.ids.container,t);return n.insert(),n.el}},{key:\"_runFunction\",value:function(e,t,n,o){switch(void 0===t?\"undefined\":i(t)){case\"function\":return o&&o.delete(),t(n);case\"string\":return this.notify(t,e?\"success\":\"alert\",o),n}return e?o&&o.delete():this.notify(this.options.handleReject(n),\"alert\",o),n}}]),e}();t.default=f}])});\n\n//# sourceURL=webpack:///./node_modules/awesome-notifications/dist/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! awesome-notifications */ \"./node_modules/awesome-notifications/dist/index.js\");\n/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n$(document).ready(function() {\r\n\t// let options = {\r\n\t// \tlabels: {\r\n\t// \t\ttip: \"Your custom tip box label\"\r\n\t// \t}\r\n\t// }\r\n\t// let notifier = new AWN(options);\r\n\t// notifier.success('Success message');\r\n\tymaps.ready(init);\r\n\tfunction init() {\r\n\t\tconst map = new ymaps.Map('map', {\r\n\t\t\t\tcenter: [53.912732780101635, 27.569198115906357],\r\n\t\t\t\tzoom: 15\r\n\t\t});\r\n\t\tmap.geoObjects.add(new ymaps.Placemark([53.912732780101635, 27.569198115906357], {\r\n\t\t\t\ticonCaption: 'Мы находимся здесь',\r\n\t\t}, {\r\n\t\t\t\tpreset: 'islands#dotIcon',\r\n\t\t\t\ticonColor: '#735184'\r\n\t\t}))\r\n\t}\r\n\t$('#needAdv, #callback-form').submit(function(event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tconst req = $.ajax({\r\n\t\t\turl: '/mail.php',\r\n\t\t\ttype: 'post',\r\n\t\t\tdata: $(this).serialize()\r\n\t\t})\r\n\t\treq.done((data) => {\r\n\t\t\tlet options = {\r\n\t\t\t\tlabels: {\r\n\t\t\t\t\ttip: \"Your custom tip box label\"\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tlet notifier = new awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default.a(options);\r\n\t\t\tnotifier.success('Ваше сообщение успешно отправлено');\r\n\t\t\t$(this)[0].reset();\r\n\t\t})\r\n\t})\r\n\t$(\".nav-link, .scroll-top\").click(function(e) {\r\n\t\tlet target = $(this).attr('href');\r\n\t\tlet from = $(target).offset().top;\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: from\r\n\t\t}, 1000);\r\n\t\treturn false;\r\n\t})\r\n\t\r\n\t$('#flash').addClass('fadeOut');\r\n\tsetTimeout(() => {\r\n\t\t$('#flash').hide();\r\n\t\t$('.adv-item').addClass('fadeInUp')\r\n\t\t$('.contact-form').addClass('fadeInRight')\r\n\t}, 1000);\r\n\t$('[data-tooltip=\"true\"]').tooltip({ boundary: 'window' })\r\n\r\n\t$(window).scroll(function(e){\r\n\t\tlet scrolled = $('html').scrollTop();\r\n\t\tlet width = $('html').outerWidth();\r\n\t\tif(width < 992) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\t\tif (scrolled > 300){\r\n\t\t\t\t$('#services .title.animated').addClass('fadeInUp')\r\n\t\t\t\t$('#services .service.animated').addClass('fadeInUp')\r\n\t\t\t}\r\n\t\t\tif (scrolled > 800){\r\n\t\t\t\t$('#pricelist .title.animated').addClass('fadeInUp')\r\n\t\t\t\t$('#pricelist .price-container.animated').addClass('fadeInUp')\r\n\t\t\t}\r\n\t\t\tif (scrolled > 1400){\r\n\t\t\t\t$('#make-order .title.animated').addClass('fadeInUp')\r\n\t\t\t\t$('#make-order .steps-container .animated').addClass('fadeInUp')\r\n\t\t\t}\r\n\t\t\tif (scrolled > 2600){\r\n\t\t\t\t$('#skills .title.animated').addClass('fadeInUp')\r\n\t\t\t\t$('#skills .skill-item.animated').addClass('fadeInUp')\r\n\t\t\t}\r\n\t\t\tif (scrolled > 3500){\r\n\t\t\t\t$('#partners .title.animated').addClass('fadeInUp')\r\n\t\t\t\t$('#partners .partner.animated').addClass('fadeIn')\r\n\t\t\t}\r\n\t})\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

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