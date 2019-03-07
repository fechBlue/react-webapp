module.exports =
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _mobxReact = __webpack_require__(4);

var _router = __webpack_require__(5);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

(0, _mobxReact.useStaticRendering)(true);

var _default = function _default(stores, routerContext, url) {
  return _react2.default.createElement(
    _mobxReact.Provider,
    stores,
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: routerContext, location: url },
      _react2.default.createElement(_router2.default, null)
    )
  );
};

exports.default = _default;
exports.createStoreMap = _store.createStoreMap;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\server.entry.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(13);

var _index4 = _interopRequireDefault(_index3);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _index5 = __webpack_require__(15);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routers = function (_Component) {
  _inherits(Routers, _Component);

  function Routers() {
    _classCallCheck(this, Routers);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Routers.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  Routers.prototype.render = function render() {
    return _react2.default.createElement(
      _App2.default,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render() {
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/list' });
          }, exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/list', component: _index2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _index4.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _index6.default })
      )
    );
  };

  // @ts-ignore
  Routers.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Routers;
}(_react.Component);

exports.default = Routers;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Routers, 'Routers', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\config\\router.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(4);

var _reactHelmet = __webpack_require__(7);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicList = (_dec = (0, _mobxReact.inject)('appState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(TopicList, _Component);

  function TopicList() {
    var _temp, _this, _ret;

    _classCallCheck(this, TopicList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.changeName = function (event) {
      _this.props.appState.changeName(event.target.value);
    }, _this.bootstrap = function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this.props.appState.count = 3;
          resolve(true);
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TopicList.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  TopicList.prototype.render = function render() {
    var appState = this.props.appState;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'this is a topiclist page.'
        ),
        _react2.default.createElement('meta', { name: 'topicList', description: '666' })
      ),
      _react2.default.createElement('input', { type: 'text', onChange: this.changeName }),
      appState.msg
    );
  };

  // @ts-ignore
  TopicList.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return TopicList;
}(_react.Component)) || _class) || _class);


TopicList.propTypes = {
  appState: _propTypes2.default.instanceOf(_app2.default)
};

var _default = TopicList;
exports.default = _default;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicList, 'TopicList', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\views\\topic-list\\index.jsx');
  reactHotLoader.register(_default, 'default', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\views\\topic-list\\index.jsx');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(10);

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AppState = (_class = function () {
  function AppState() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0, name: 'blue' },
        count = _ref.count,
        name = _ref.name;

    _classCallCheck(this, AppState);

    _initDefineProp(this, 'count', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    this.toJson = function () {
      return {
        count: _this.count,
        name: _this.name
      };
    };

    this.count = count;
    this.name = name;
  }

  AppState.prototype.add = function add() {
    this.count += 1;
  };

  AppState.prototype.changeName = function changeName(name) {
    this.name = name;
  };

  // @ts-ignore
  AppState.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  _createClass(AppState, [{
    key: 'msg',
    get: function get() {
      return this.name + ' is calling to ' + this.count;
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'count', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeName', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'changeName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'msg'), _class.prototype)), _class);
exports.default = AppState;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\store\\app.state.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(12);
} else { var jsFeaturesPresent, evalAllowed; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(2));function AppContainer(e){return React.Children.only(e.children)}var hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicDetail = function (_Component) {
  _inherits(TopicDetail, _Component);

  function TopicDetail() {
    _classCallCheck(this, TopicDetail);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TopicDetail.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  TopicDetail.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      'this is a TopicDetail page.'
    );
  };

  // @ts-ignore
  TopicDetail.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return TopicDetail;
}(_react.Component);

exports.default = TopicDetail;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicDetail, 'TopicDetail', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\views\\topic-detail\\index.jsx');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.componentDidMount = function componentDidMount() {
    // do something here
  };

  App.prototype.render = function render() {
    var children = this.props.children;

    return _react2.default.createElement(
      'div',
      null,
      children
    );
  };

  // @ts-ignore
  App.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  children: _propTypes2.default.element.isRequired
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\views\\App.jsx');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.topics = function () {
      _axios2.default.get('/api/topics').then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.error(err);
      });
    }, _this.login = function () {
      _axios2.default.post('/api/user/login', {
        accessToken: 'f7e9e4d4-738c-4ceb-a73d-b88d66c130d1'
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.error(err);
      });
    }, _this.markAll = function () {
      _axios2.default.get('/api/message/count?needAccessToken=true').then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.error(err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Test.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { onClick: this.topics, type: 'button' },
        'topics'
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.login, type: 'button' },
        'login'
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.markAll, type: 'button' },
        'markAll'
      )
    );
  };

  // @ts-ignore
  Test.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Test;
}(_react.Component);

exports.default = Test;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Test, 'Test', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\views\\test\\index.jsx');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = exports.AppState = undefined;

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).enterModule;
  enterModule && enterModule(module);
})();

var AppState = exports.AppState = _app2.default;

var _default = {
  AppState: AppState
};
exports.default = _default;
var createStoreMap = exports.createStoreMap = function createStoreMap() {
  return {
    appState: new AppState()
  };
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\store\\store.js');
  reactHotLoader.register(createStoreMap, 'createStoreMap', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\store\\store.js');
  reactHotLoader.register(_default, 'default', 'D:\\learn\\React\\React\u5168\u6808+\u670D\u52A1\u5668\u6E32\u67D3\uFF08ssr\uFF09\u6253\u9020\u793E\u533AWebapp\\code\\react-webapp\\client\\store\\store.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(11)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ })
/******/ ]);