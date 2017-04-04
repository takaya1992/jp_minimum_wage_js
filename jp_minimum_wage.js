/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.jp_minimum_wage = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var JP_MINIMUM_WAGE_CACHE = void 0;

  var JpMinimumWage = function () {
    function JpMinimumWage() {
      _classCallCheck(this, JpMinimumWage);
    }

    _createClass(JpMinimumWage, [{
      key: 'jsonp',
      value: function jsonp(callback) {
        window['$jpMinimumWageCallback'] = function (data) {
          return callback(data);
        };
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'UTF-8');
        script.setAttribute('src', JpMinimumWage.URL);
        document.head.appendChild(script);
      }
    }, {
      key: 'getData',
      value: function getData(callback) {
        if (JP_MINIMUM_WAGE_CACHE) {
          callback(JP_MINIMUM_WAGE_CACHE);
        } else {
          this.jsonp(function (data) {
            JP_MINIMUM_WAGE_CACHE = data;
            callback(data);
          });
        }
      }
    }], [{
      key: 'findByName',
      value: function findByName(name, callback) {
        var jpMinimumWage = new JpMinimumWage();
        jpMinimumWage.getData(function (data) {
          var minimumWage = data.find(function (elm) {
            return elm.prefecture_name === name;
          });
          callback(minimumWage);
        });
      }
    }, {
      key: 'findByCode',
      value: function findByCode(code, callback) {
        var jpMinimumWage = new JpMinimumWage();
        jpMinimumWage.getData(function (data) {
          var minimumWage = data.find(function (elm) {
            return elm.prefecture_code === code;
          });
          callback(minimumWage);
        });
      }
    }, {
      key: 'all',
      value: function all(callback) {
        var jpMinimumWage = new JpMinimumWage();
        jpMinimumWage.getData(function (data) {
          callback(data);
        });
      }
    }, {
      key: 'version',
      get: function get() {
        return '0.0.1';
      }
    }, {
      key: 'URL',
      get: function get() {
        return 'http://takaya1992.com/jp_minimum_wage_data/minimum_wage.jsonp';
      }
    }]);

    return JpMinimumWage;
  }();

  exports.default = JpMinimumWage;

  window.JpMinimumWage = JpMinimumWage;
});

/***/ })
/******/ ]);
//# sourceMappingURL=jp_minimum_wage.js.map