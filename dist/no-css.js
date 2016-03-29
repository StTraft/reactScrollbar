(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_38__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ScrollAreaJsx = __webpack_require__(2);
	
	var _ScrollAreaJsx2 = _interopRequireDefault(_ScrollAreaJsx);

	exports['default'] = _ScrollAreaJsx2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Scrollbar = __webpack_require__(39);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	var _utils = __webpack_require__(57);
	
	var _lineHeight = __webpack_require__(58);
	
	var _lineHeight2 = _interopRequireDefault(_lineHeight);
	
	var _reactMotion = __webpack_require__(40);
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove'
	};
	
	var ScrollArea = (function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        var _this = this;
	
	        _classCallCheck(this, ScrollArea);
	
	        _get(Object.getPrototypeOf(ScrollArea.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0
	        };
	
	        this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        this.bindedHandleWindowResize = this.handleWindowResize.bind(this);
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight2['default'])((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var contentClassName = _props.contentClassName;
	            var ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd);
	
	            var scrollbarY = this.canScrollY() ? _react2['default'].createElement(_Scrollbar2['default'], {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2['default'].createElement(_Scrollbar2['default'], {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2['default'].createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, this.props.contentStyle, springifiedContentStyle) },
	                function (style) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { ref: function (x) {
	                                return _this2.wrapper = x;
	                            }, style: _this2.props.style, className: classes, onWheel: _this2.handleWheel.bind(_this2) },
	                        _react2['default'].createElement(
	                            'div',
	                            { ref: function (x) {
	                                    return _this2.content = x;
	                                },
	                                style: style,
	                                className: contentClasses,
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2) },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$0 = touches[0];
	                var clientX = _touches$0.clientX;
	                var clientY = _touches$0.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            e.preventDefault();
	
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$02 = touches[0];
	                var clientX = _touches$02.clientX;
	                var clientY = _touches$02.clientY;
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues = this.eventPreviousValues;
	            var deltaX = _eventPreviousValues.deltaX;
	            var deltaY = _eventPreviousValues.deltaY;
	            var timestamp = _eventPreviousValues.timestamp;
	
	            if (typeof deltaX === 'undefined') deltaX = 0;
	            if (typeof deltaY === 'undefined') deltaY = 0;
	            if (Date.now() - timestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition) {
	                e.preventDefault();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }]);
	
	    return ScrollArea;
	})(_react2['default'].Component);
	
	exports['default'] = ScrollArea;
	
	ScrollArea.childContextTypes = {
	    scrollArea: _react2['default'].PropTypes.object
	};
	
	ScrollArea.propTypes = {
	    className: _react2['default'].PropTypes.string,
	    style: _react2['default'].PropTypes.object,
	    speed: _react2['default'].PropTypes.number,
	    contentClassName: _react2['default'].PropTypes.string,
	    contentStyle: _react2['default'].PropTypes.object,
	    vertical: _react2['default'].PropTypes.bool,
	    verticalContainerStyle: _react2['default'].PropTypes.object,
	    verticalScrollbarStyle: _react2['default'].PropTypes.object,
	    horizontal: _react2['default'].PropTypes.bool,
	    horizontalContainerStyle: _react2['default'].PropTypes.object,
	    horizontalScrollbarStyle: _react2['default'].PropTypes.object,
	    onScroll: _react2['default'].PropTypes.func,
	    contentWindow: _react2['default'].PropTypes.any,
	    ownerDocument: _react2['default'].PropTypes.any,
	    smoothScrolling: _react2['default'].PropTypes.bool,
	    minScrollSize: _react2['default'].PropTypes.number,
	    swapWheelAxes: _react2['default'].PropTypes.bool
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: typeof window === "object" ? window : undefined,
	    ownerDocument: typeof document === "object" ? document : undefined
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(4)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(7);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(8);
	
	__webpack_require__(12)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(9)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(20)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(22)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(25).set});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(26)
	  , anObject = __webpack_require__(27);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(29)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(33)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(36)});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(6)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(9);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(18)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(40);
	
	var _utils = __webpack_require__(57);
	
	var ScrollBar = (function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        _get(Object.getPrototypeOf(ScrollBar.prototype), 'constructor', this).call(this, props);
	        var newState = this.calculateState(props);
	        this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            this.bindedHandleMouseMove = this.handleMouseMoveForVertical.bind(this);
	        } else {
	            this.bindedHandleMouseMove = this.handleMouseMoveForHorizontal.bind(this);
	        }
	
	        this.bindedHandleMouseUp = this.handleMouseUp.bind(this);
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            var _props = this.props;
	            var smoothScrolling = _props.smoothScrolling;
	            var isDragging = _props.isDragging;
	            var type = _props.type;
	            var scrollbarStyle = _props.scrollbarStyle;
	            var containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2['default'].createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, scrollbarStyle, springifiedScrollStyles) },
	                function (style) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this.handleScrollBarContainerClick.bind(_this),
	                            ref: function (x) {
	                                _this.scrollbarContainer = x;
	                            } },
	                        _react2['default'].createElement('div', { className: 'scrollbar',
	                            style: style,
	                            onMouseDown: _this.handleMouseDown.bind(_this)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$getBoundingClientRect = this.scrollbarContainer.getBoundingClientRect();
	
	            var top = _scrollbarContainer$getBoundingClientRect.top;
	            var left = _scrollbarContainer$getBoundingClientRect.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            e.preventDefault();
	            this.setState({ isDragging: false });
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	})(_react2['default'].Component);
	
	ScrollBar.propTypes = {
	    onMove: _react2['default'].PropTypes.func,
	    onPositionChange: _react2['default'].PropTypes.func,
	    realSize: _react2['default'].PropTypes.number,
	    containerSize: _react2['default'].PropTypes.number,
	    position: _react2['default'].PropTypes.number,
	    containerStyle: _react2['default'].PropTypes.object,
	    scrollbarStyle: _react2['default'].PropTypes.object,
	    type: _react2['default'].PropTypes.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _react2['default'].PropTypes.any,
	    smoothScrolling: _react2['default'].PropTypes.bool,
	    minScrollSize: _react2['default'].PropTypes.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	exports['default'] = ScrollBar;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components2 = __webpack_require__(41);
	
	var _components3 = _interopRequireDefault(_components2);
	
	var _reorderKeys = __webpack_require__(56);
	
	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);
	
	var _components = _components3['default'](_react2['default']);
	
	var Spring = _components.Spring;
	var TransitionSpring = _components.TransitionSpring;
	var Motion = _components.Motion;
	var StaggeredMotion = _components.StaggeredMotion;
	var TransitionMotion = _components.TransitionMotion;
	exports.Spring = Spring;
	exports.TransitionSpring = TransitionSpring;
	exports.Motion = Motion;
	exports.StaggeredMotion = StaggeredMotion;
	exports.TransitionMotion = TransitionMotion;
	
	var _spring2 = __webpack_require__(52);
	
	var _spring3 = _interopRequireDefault(_spring2);
	
	exports.spring = _spring3['default'];
	
	var _presets2 = __webpack_require__(53);
	
	var _presets3 = _interopRequireDefault(_presets2);
	
	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = components;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _noVelocity = __webpack_require__(42);
	
	var _noVelocity2 = _interopRequireDefault(_noVelocity);
	
	var _hasReachedStyle = __webpack_require__(43);
	
	var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);
	
	var _mergeDiff = __webpack_require__(44);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _animationLoop = __webpack_require__(45);
	
	var _animationLoop2 = _interopRequireDefault(_animationLoop);
	
	var _zero = __webpack_require__(49);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _updateTree = __webpack_require__(50);
	
	var _deprecatedSprings2 = __webpack_require__(54);
	
	var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);
	
	var _stripStyle = __webpack_require__(55);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var startAnimation = _animationLoop2['default']();
	
	function mapObject(f, obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = f(obj[key], key);
	  }
	  return ret;
	}
	
	function everyObj(f, obj) {
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!f(obj[key], key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function components(React) {
	  var PropTypes = React.PropTypes;
	
	  var Motion = React.createClass({
	    displayName: 'Motion',
	
	    propTypes: {
	      // TOOD: warn against putting a config in here
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: PropTypes.object,
	      style: PropTypes.object.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var defaultStyle = _props.defaultStyle;
	      var style = _props.style;
	
	      var currentStyle = defaultStyle || style;
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: mapObject(_zero2['default'], currentStyle)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyle = state.currentStyle;
	      var currentVelocity = state.currentVelocity;
	      var style = this.props.style;
	
	      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
	      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);
	
	      // TOOD: this isn't necessary anymore. It was used only against endValue func
	      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `style` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // unmounts Motion
	      if (!this.hasUnmounted) {
	        this.setState({
	          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
	          currentVelocity: nextState.currentVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var StaggeredMotion = React.createClass({
	    displayName: 'StaggeredMotion',
	
	    propTypes: {
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.arrayOf(PropTypes.object),
	      styles: PropTypes.func.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var styles = _props2.styles;
	      var defaultStyles = _props2.defaultStyles;
	
	      var currentStyles = defaultStyles ? defaultStyles : styles();
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: currentStyles.map(function (s) {
	          return mapObject(_zero2['default'], s);
	        })
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	
	      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));
	
	      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	
	      // TODO: is this right?
	      if (currentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }) && newCurrentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      })) {
	        this.stopAnimation();
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = nextState.currentStyles.map(function (style, i) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
	        });
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var TransitionMotion = React.createClass({
	    displayName: 'TransitionMotion',
	
	    propTypes: {
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.objectOf(PropTypes.any),
	      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	      // TOOD: warn against putting configs in here
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	      children: PropTypes.func.isRequired
	    },
	
	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      var _props3 = this.props;
	      var styles = _props3.styles;
	      var defaultStyles = _props3.defaultStyles;
	
	      var currentStyles = undefined;
	      if (defaultStyles == null) {
	        if (typeof styles === 'function') {
	          currentStyles = styles();
	        } else {
	          currentStyles = styles;
	        }
	      } else {
	        currentStyles = defaultStyles;
	      }
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: mapObject(function (s) {
	          return mapObject(_zero2['default'], s);
	        }, currentStyles)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	      var _props4 = this.props;
	      var styles = _props4.styles;
	      var willEnter = _props4.willEnter;
	      var willLeave = _props4.willLeave;
	
	      if (typeof styles === 'function') {
	        styles = styles(currentStyles);
	      }
	
	      // TODO: huh?
	      var mergedStyles = styles; // set mergedStyles to styles as the default
	      var hasNewKey = false;
	
	      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
	      // TODO: stop allocating like crazy in this whole code path
	      function (key) {
	        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
	        if (res == null) {
	          // For legacy reason. We won't allow returning null soon
	          // TODO: remove, after next release
	          return null;
	        }
	
	        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
	          return null;
	        }
	        return res;
	      });
	
	      Object.keys(mergedStyles).filter(function (key) {
	        return !currentStyles.hasOwnProperty(key);
	      }).forEach(function (key) {
	        var _extends2, _extends3;
	
	        hasNewKey = true;
	        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);
	
	        // We can mutate this here because mergeDiff returns a new Obj
	        mergedStyles[key] = enterStyle;
	
	        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
	        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
	      });
	
	      var newCurrentStyles = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	
	      if (!hasNewKey && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }, currentVelocities) && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      }, newCurrentVelocities)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = mapObject(function (style, key) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
	        }, nextState.currentStyles);
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var _deprecatedSprings = _deprecatedSprings3['default'](React);
	
	  var Spring = _deprecatedSprings.Spring;
	  var TransitionSpring = _deprecatedSprings.TransitionSpring;
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
	}
	
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	
	// currentStyle keeps the info about whether a prop is configured as a spring
	// or if it's just a random prop that happens to be present on the style
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = noVelocity;
	
	function noVelocity(currentVelocity, currentStyle) {
	  for (var key in currentVelocity) {
	    if (!currentVelocity.hasOwnProperty(key)) {
	      continue;
	    }
	    if (currentStyle[key] != null && currentStyle[key].config && currentVelocity[key] !== 0) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = hasReachedStyle;
	
	function hasReachedStyle(currentStyle, style) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    var currentValue = currentStyle[key];
	    var destValue = style[key];
	    if (destValue == null || !destValue.config) {
	      // not a spring config
	      continue;
	    }
	    if (currentValue.config && currentValue.val !== destValue.val) {
	      return false;
	    }
	    if (!currentValue.config && currentValue !== destValue.val) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	
	
	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;
	
	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;
	
	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }
	
	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}
	
	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = configAnimation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _performanceNow = __webpack_require__(46);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;
	
	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;
	
	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta
	
	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;
	
	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }
	
	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var animationStep = _animRunning$i.animationStep;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;
	
	      if (!active) {
	        continue;
	      }
	
	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution below is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }
	
	    accumulatedTime = accumulatedTime - frameNumber * timeStep;
	
	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	      var animationRender = _animRunning$i2.animationRender;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;
	
	      // Might mutate animRunning........
	      animationRender(alpha, nextState, prevState);
	    }
	
	    animRunning = animRunning.filter(function (_ref2) {
	      var active = _ref2.active;
	      return active;
	    });
	
	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }
	
	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }
	
	  return function startAnimation(state, animationStep, animationRender) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.animationStep === animationStep) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }
	
	    var newAnim = {
	      animationStep: animationStep,
	      animationRender: animationRender,
	      prevState: state,
	      nextState: state,
	      active: true
	    };
	
	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);
	
	    start();
	
	    return newAnim.stop;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(46)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports) {

	
	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = zero;
	
	function zero() {
	  return 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	
	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	'use strict';
	
	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrentStyle = updateCurrentStyle;
	exports.updateCurrentVelocity = updateCurrentVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stepper = __webpack_require__(51);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	var _spring = __webpack_require__(52);
	
	var _spring2 = _interopRequireDefault(_spring);
	
	function interpolateValue(alpha, nextStyle, prevStyle) {
	  // might be used by a TransitionMotion, where prevStyle might not exist anymore
	  if (!prevStyle) {
	    return nextStyle;
	  }
	
	  var ret = {};
	  for (var key in nextStyle) {
	    if (!nextStyle.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (nextStyle[key] == null || !nextStyle[key].config) {
	      ret[key] = nextStyle[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
	    ret[key] = _spring2['default'](nextStyle[key].val * alpha + prevValue * (1 - alpha), nextStyle[key].config);
	  }
	
	  return ret;
	}
	
	// TODO: refactor common logic with updateCurrentVelocity
	
	function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      ret[key] = style[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var _style$key$config = style[key].config;
	    var k = _style$key$config[0];
	    var b = _style$key$config[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
	    ret[key] = _spring2['default'](val, style[key].config);
	  }
	  return ret;
	}
	
	function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      // not a spring config, not something we want to interpolate
	      ret[key] = 0;
	      continue;
	    }
	    var _style$key$config2 = style[key].config;
	    var k = _style$key$config2[0];
	    var b = _style$key$config2[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
	    ret[key] = val;
	  }
	  return ret;
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var errorMargin = 0.0001;
	
	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;
	
	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }
	
	  return [newX, newV];
	}
	
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(53);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	function spring(val) {
	  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];
	
	  return { val: val, config: config };
	}
	
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	
	// [stiffness, damping]
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecatedSprings;
	var hasWarnedForSpring = {};
	var hasWarnedForTransitionSpring = {};
	
	function deprecatedSprings(React) {
	  var Spring = React.createClass({
	    displayName: 'Spring',
	
	    componentWillMount: function componentWillMount() {
	      if (process.env.NODE_ENV === 'development') {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForSpring[ownerName]) {
	          hasWarnedForSpring[ownerName] = true;
	          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',
	
	    componentWillMount: function componentWillMount() {
	      if (process.env.NODE_ENV === 'development') {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForTransitionSpring[ownerName]) {
	          hasWarnedForTransitionSpring[ownerName] = true;
	          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, config: [1, 2]}, y: 2} generated by
	// `{x: spring(1, [1, 2]), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = style[key] == null || style[key].val == null ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reorderKeys;
	
	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }
	
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var react13 = isReact13(_react2['default']);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2['default'].findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(59);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ },
/* 59 */
/***/ function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZTA5YmIyNzE3M2IxYWY4MjYxYyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhvdXRDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Njcm9sbEFyZWEuanN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tb2JqZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JvbGxiYXIuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL25vVmVsb2NpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2hhc1JlYWNoZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9hbmltYXRpb25Mb29wLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi96ZXJvLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi91cGRhdGVUcmVlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zdGVwcGVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZW9yZGVyS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9saW5lLWhlaWdodC9+L2NvbXB1dGVkLXN0eWxlL2Rpc3QvY29tcHV0ZWRTdHlsZS5jb21tb25qcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzswQ0N0Q3VCLENBQWtCOzs7Ozs7Ozs7OztBQ0F6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDUmtCLEVBQU87Ozs7c0NBQ0gsRUFBYTs7OztrQ0FDdUUsRUFBUzs7dUNBQzVGLEVBQWE7Ozs7d0NBQ1AsRUFBYzs7QUFFM0MsS0FBTSxVQUFVLEdBQUU7QUFDZCxVQUFLLEVBQUUsT0FBTztBQUNkLFFBQUcsRUFBRSxLQUFLO0FBQ1YsVUFBSyxFQUFFLE9BQU87QUFDZCxhQUFRLEVBQUUsVUFBVTtBQUNwQixjQUFTLEVBQUUsV0FBVztFQUN6QixDQUFDOztLQUVtQixVQUFVO2VBQVYsVUFBVTs7QUFDaEIsY0FETSxVQUFVLENBQ2YsS0FBSyxFQUFDOzs7K0JBREQsVUFBVTs7QUFFdkIsb0NBRmEsVUFBVSw2Q0FFakIsS0FBSyxFQUFFO0FBQ2Is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QUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBbUMsZ0NBQWdDO0FBQ25FLHdDQUF1QyxvQ0FBb0M7QUFDM0UsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxXQUFVO0FBQ1Y7O0FBRUEscUM7Ozs7Ozs7QUNwY0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUM5R0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUMvSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7QUMvQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Qjs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBIiwiZmlsZSI6ImZlMDliYjI3MTczYjFhZjgyNjFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2Nyb2xsQXJlYVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTY3JvbGxBcmVhXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zOF9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmZTA5YmIyNzE3M2IxYWY4MjYxY1xuICoqLyIsImltcG9ydCBTY3JvbGxBcmVhIGZyb20gJy4vU2Nyb2xsQXJlYS5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWFXaXRob3V0Q3NzLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnLi9TY3JvbGxiYXInO1xuaW1wb3J0IHtmaW5kRE9NTm9kZSwgd2FybkFib3V0RnVuY3Rpb25DaGlsZCwgd2FybkFib3V0RWxlbWVudENoaWxkLCBwb3NpdGl2ZU9yWmVybywgbW9kaWZ5T2JqVmFsdWVzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBsaW5lSGVpZ2h0IGZyb20gJ2xpbmUtaGVpZ2h0JztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IGV2ZW50VHlwZXM9IHtcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICBhcGk6ICdhcGknLFxuICAgIHRvdWNoOiAndG91Y2gnLFxuICAgIHRvdWNoRW5kOiAndG91Y2hFbmQnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b3BQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IDAsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgICByZWFsV2lkdGg6IDAsXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQXJlYSA9IHtcbiAgICAgICAgICAgIHJlZnJlc2g6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsQm90dG9tOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxZVG86IChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsWVRvKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsUmlnaHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsWFRvOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFhUbyhwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2bnRzUHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUgPSB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldENoaWxkQ29udGV4dCgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2Nyb2xsQXJlYTogdGhpcy5zY3JvbGxBcmVhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50V2luZG93KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVIZWlnaHRQeCA9IGxpbmVIZWlnaHQoZmluZERPTU5vZGUodGhpcy5jb250ZW50KSk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50V2luZG93KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjbGFzc05hbWUsIGNvbnRlbnRDbGFzc05hbWUsIG93bmVyRG9jdW1lbnR9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgd2l0aE1vdGlvbiA9IHRoaXMucHJvcHMuc21vb3RoU2Nyb2xsaW5nICYmIFxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLndoZWVsIHx8IHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLmFwaSB8fCB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy50b3VjaEVuZCk7XG5cbiAgICAgICAgbGV0IHNjcm9sbGJhclkgPSB0aGlzLmNhblNjcm9sbFkoKT8gKFxuICAgICAgICAgICAgPFNjcm9sbEJhclxuXHRcdFx0XHRvd25lckRvY3VtZW50PXtvd25lckRvY3VtZW50fVxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxIZWlnaHR9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUudG9wUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLmhhbmRsZVNjcm9sbGJhck1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLnZlcnRpY2FsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMudmVydGljYWxTY3JvbGxiYXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc9e3dpdGhNb3Rpb259XG4gICAgICAgICAgICAgICAgbWluU2Nyb2xsU2l6ZT17dGhpcy5wcm9wcy5taW5TY3JvbGxTaXplfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cbiAgICAgICAgKTogbnVsbDtcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyWCA9IHRoaXMuY2FuU2Nyb2xsWCgpPyAoXG4gICAgICAgICAgICA8U2Nyb2xsQmFyXG5cdFx0XHRcdG93bmVyRG9jdW1lbnQ9e293bmVyRG9jdW1lbnR9XG4gICAgICAgICAgICAgICAgcmVhbFNpemU9e3RoaXMuc3RhdGUucmVhbFdpZHRofVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU9e3RoaXMuc3RhdGUuY29udGFpbmVyV2lkdGh9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUubGVmdFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy5ob3Jpem9udGFsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMuaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlfVxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbGluZz17d2l0aE1vdGlvbn1cbiAgICAgICAgICAgICAgICBtaW5TY3JvbGxTaXplPXt0aGlzLnByb3BzLm1pblNjcm9sbFNpemV9XG4gICAgICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWxcIi8+XG4gICAgICAgICk6IG51bGw7XG5cbiAgICAgICAgaWYodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSAnc2Nyb2xsYXJlYSAnICsgKGNsYXNzTmFtZSB8fCAnJyk7XG4gICAgICAgIGxldCBjb250ZW50Q2xhc3NlcyA9ICdzY3JvbGxhcmVhLWNvbnRlbnQgJyArIChjb250ZW50Q2xhc3NOYW1lIHx8ICcnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50U3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC10aGlzLnN0YXRlLnRvcFBvc2l0aW9uLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXRoaXMuc3RhdGUubGVmdFBvc2l0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzcHJpbmdpZmllZENvbnRlbnRTdHlsZSA9IHdpdGhNb3Rpb24gPyBtb2RpZnlPYmpWYWx1ZXMoY29udGVudFN0eWxlLCB4ID0+IHNwcmluZyh4KSkgOiBjb250ZW50U3R5bGU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17ey4uLnRoaXMucHJvcHMuY29udGVudFN0eWxlLCAuLi5zcHJpbmdpZmllZENvbnRlbnRTdHlsZX19PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt4ID0+IHRoaXMud3JhcHBlciA9IHh9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17eCA9PiB0aGlzLmNvbnRlbnQgPSB4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJZfVxuICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJYfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Nb3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0U3RhdGVGcm9tRXZlbnQobmV3U3RhdGUsIGV2ZW50VHlwZSl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25TY3JvbGwpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNjcm9sbChuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4ubmV3U3RhdGUsIGV2ZW50VHlwZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoU3RhcnQoZSl7XG4gICAgICAgIGxldCB7dG91Y2hlc30gPSBlO1xuICAgICAgICBpZih0b3VjaGVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gdG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoTW92ZShlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XG4gICAgICAgIGlmKHRvdWNoZXMubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSB0b3VjaGVzWzBdO1xuXG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLmNsaWVudFkgLSBjbGllbnRZO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRYIC0gY2xpZW50WDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyxcbiAgICAgICAgICAgICAgICBkZWx0YVksXG4gICAgICAgICAgICAgICAgZGVsdGFYLFxuICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5jb21wb3NlTmV3U3RhdGUoLWRlbHRhWCwgLWRlbHRhWSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hFbmQoZSl7XG4gICAgICAgIGxldCB7IGRlbHRhWCwgZGVsdGFZLCB0aW1lc3RhbXAgfSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcztcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnKSBkZWx0YVggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIGRlbHRhWSA9PT0gJ3VuZGVmaW5lZCcpIGRlbHRhWSA9IDA7XG4gICAgICAgIGlmKERhdGUubm93KCkgLSB0aW1lc3RhbXAgPCAyMDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYICogMTAsIC1kZWx0YVkgKiAxMCksIGV2ZW50VHlwZXMudG91Y2hFbmQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDBcbiAgICAgICAgfTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU2Nyb2xsYmFyTW92ZShkZWx0YVksIGRlbHRhWCl7XG4gICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSk7ICAgXG4gICAgfVxuICAgIFxuICAgIGhhbmRsZVNjcm9sbGJhclhQb3NpdGlvbkNoYW5nZShwb3NpdGlvbil7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU2Nyb2xsYmFyWVBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVdoZWVsKGUpe1xuICAgICAgICBsZXQgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGxldCBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3dhcFdoZWVsQXhlcyl7XG4gICAgICAgICAgICBbZGVsdGFZLCBkZWx0YVhdID0gW2RlbHRhWCwgZGVsdGFZXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdoZWVsRXZlbnQuZGVsdGFNb2RlIGNhbiBkaWZmZXIgYmV0d2VlbiBicm93c2VycyBhbmQgbXVzdCBiZSBub3JtYWxpemVkXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAwOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gcGl4ZWxzXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAxOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gbGluZXNcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQvZGVsdGFNb2RlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgIGRlbHRhWSA9IGRlbHRhWSAqIHRoaXMubGluZUhlaWdodFB4O1xuICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5saW5lSGVpZ2h0UHg7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLnByb3BzLnNwZWVkO1xuICAgICAgICBkZWx0YVggPSBkZWx0YVggKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpO1xuXG4gICAgICAgIGlmKChuZXdTdGF0ZS50b3BQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLnRvcFBvc2l0aW9uICE9PSBuZXdTdGF0ZS50b3BQb3NpdGlvbikgfHxcbiAgICAgICAgICAgKG5ld1N0YXRlLmxlZnRQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlcy53aGVlbCk7XG4gICAgfVxuXG4gICAgaGFuZGxlV2luZG93UmVzaXplKCl7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKXtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpe1xuICAgICAgICAgICAgbmV3U3RhdGUudG9wUG9zaXRpb24gPSB0aGlzLmNvbXB1dGVUb3BQb3NpdGlvbihkZWx0YVksIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZUxlZnRQb3NpdGlvbihkZWx0YVgsIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjb21wdXRlVG9wUG9zaXRpb24oZGVsdGFZLCBzaXplcyl7XG4gICAgICAgIGxldCBuZXdUb3BQb3NpdGlvbiA9IHRoaXMuc3RhdGUudG9wUG9zaXRpb24gLSBkZWx0YVk7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUxlZnRQb3NpdGlvbihkZWx0YVgsIHNpemVzKXtcbiAgICAgICAgbGV0IG5ld0xlZnRQb3NpdGlvbiA9IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uIC0gZGVsdGFYO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuICAgIFxuICAgIG5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyl7ICAgIFxuICAgICAgICBpZihuZXdUb3BQb3NpdGlvbiA+IHNpemVzLnJlYWxIZWlnaHQgLSBzaXplcy5jb250YWluZXJIZWlnaHQpe1xuICAgICAgICAgICAgbmV3VG9wUG9zaXRpb24gPSBzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmKG5ld1RvcFBvc2l0aW9uIDwgMCl7XG4gICAgICAgICAgICBuZXdUb3BQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RvcFBvc2l0aW9uO1xuICAgIH1cbiAgICBcbiAgICBub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyl7XG4gICAgICAgIGlmKG5ld0xlZnRQb3NpdGlvbiA+IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoKXtcbiAgICAgICAgICAgIG5ld0xlZnRQb3NpdGlvbiA9IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYobmV3TGVmdFBvc2l0aW9uIDwgMCl7XG4gICAgICAgICAgICBuZXdMZWZ0UG9zaXRpb24gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0xlZnRQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjb21wdXRlU2l6ZXMoKXtcbiAgICAgICAgbGV0IHJlYWxIZWlnaHQgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IHJlYWxXaWR0aCA9IHRoaXMuY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFsSGVpZ2h0OiByZWFsSGVpZ2h0LFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiBjb250YWluZXJIZWlnaHQsXG4gICAgICAgICAgICByZWFsV2lkdGg6IHJlYWxXaWR0aCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBjb250YWluZXJXaWR0aFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFNpemVzVG9TdGF0ZSgpe1xuICAgICAgICBsZXQgc2l6ZXMgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICBpZihzaXplcy5yZWFsSGVpZ2h0ICE9PSB0aGlzLnN0YXRlLnJlYWxIZWlnaHQgfHwgc2l6ZXMucmVhbFdpZHRoICE9PSB0aGlzLnN0YXRlLnJlYWxXaWR0aCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZChzaXplcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9wKCl7XG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKDApO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbSgpe1xuICAgICAgICB0aGlzLnNjcm9sbFlUbygodGhpcy5zdGF0ZS5yZWFsSGVpZ2h0IC0gdGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHQpKTtcbiAgICB9XG4gICAgXG4gICAgc2Nyb2xsTGVmdCgpe1xuICAgICAgICB0aGlzLnNjcm9sbFhUbygwKTtcbiAgICB9XG5cbiAgICBzY3JvbGxSaWdodCgpe1xuICAgICAgICB0aGlzLnNjcm9sbFhUbygodGhpcy5zdGF0ZS5yZWFsV2lkdGggLSB0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsWVRvKHRvcFBvc2l0aW9uKXtcbiAgICAgICAgaWYodGhpcy5jYW5TY3JvbGxZKCkpe1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemVUb3BQb3NpdGlvbih0b3BQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHt0b3BQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2Nyb2xsWFRvKGxlZnRQb3NpdGlvbil7XG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWCgpKXtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplTGVmdFBvc2l0aW9uKGxlZnRQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHtsZWZ0UG9zaXRpb246IHBvc2l0aW9ufSwgZXZlbnRUeXBlcy5hcGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuU2Nyb2xsWShzdGF0ZSA9IHRoaXMuc3RhdGUpe1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZVkgPSBzdGF0ZS5yZWFsSGVpZ2h0ID4gc3RhdGUuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVkgJiYgdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBjYW5TY3JvbGxYKHN0YXRlID0gdGhpcy5zdGF0ZSl7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWCA9IHN0YXRlLnJlYWxXaWR0aCA+IHN0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIGdldE1vZGlmaWVkUG9zaXRpb25zSWZOZWVkZWQobmV3U3RhdGUpe1xuICAgICAgICBsZXQgYm90dG9tUG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsSGVpZ2h0IC0gbmV3U3RhdGUuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBpZih0aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKSA/IHBvc2l0aXZlT3JaZXJvKGJvdHRvbVBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmlnaHRQb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxXaWR0aCAtIG5ld1N0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiA+PSByaWdodFBvc2l0aW9uKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhyaWdodFBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxufVxuXG5TY3JvbGxBcmVhLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHNjcm9sbEFyZWE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cblNjcm9sbEFyZWEucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzcGVlZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnRTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJ0aWNhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdmVydGljYWxDb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGhvcml6b250YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGhvcml6b250YWxDb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb25TY3JvbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbnRlbnRXaW5kb3c6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgb3duZXJEb2N1bWVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzbW9vdGhTY3JvbGxpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG1pblNjcm9sbFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc3dhcFdoZWVsQXhlczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblNjcm9sbEFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIHNwZWVkOiAxLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBzd2FwV2hlZWxBeGVzOiBmYWxzZSxcbiAgICBjb250ZW50V2luZG93OiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgPyB3aW5kb3cgOiB1bmRlZmluZWQsXG4gICAgb3duZXJEb2N1bWVudDogKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIikgPyBkb2N1bWVudCA6IHVuZGVmaW5lZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWEuanN4XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBfYWdhaW4gPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfeCA9IHBhcmVudDtcbiAgICAgICAgX3gyID0gcHJvcGVydHk7XG4gICAgICAgIF94MyA9IHJlY2VpdmVyO1xuICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJC5nZXREZXNjKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gX09iamVjdCRjcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9PYmplY3Qkc2V0UHJvdG90eXBlT2YgPyBfT2JqZWN0JHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCBnZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM4X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuaW1wb3J0IHttb2RpZnlPYmpWYWx1ZXN9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBTY3JvbGxCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNhbGN1bGF0ZVN0YXRlKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdTdGF0ZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHNjcm9sbFNpemU6IG5ld1N0YXRlLnNjcm9sbFNpemUsXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RDbGllbnRQb3NpdGlvbjogMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlRm9yVmVydGljYWwuYmluZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5jYWxjdWxhdGVTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUZyYWN0aW9uYWxQb3NpdGlvbihyZWFsQ29udGVudFNpemUsIGNvbnRhaW5lclNpemUsIGNvbnRlbnRQb3NpdGlvbil7XG4gICAgICAgIGxldCByZWxhdGl2ZVNpemUgPSByZWFsQ29udGVudFNpemUgLSBjb250YWluZXJTaXplO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIDEgLSAoKHJlbGF0aXZlU2l6ZSAtIGNvbnRlbnRQb3NpdGlvbikgLyByZWxhdGl2ZVNpemUpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN0YXRlKHByb3BzKXtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHByb3BzLnJlYWxTaXplLCBwcm9wcy5jb250YWluZXJTaXplLCBwcm9wcy5wb3NpdGlvbik7IFxuICAgICAgICBsZXQgcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSA9IHByb3BzLmNvbnRhaW5lclNpemUgKiBwcm9wcy5jb250YWluZXJTaXplIC8gcHJvcHMucmVhbFNpemU7XG4gICAgICAgIGxldCBzY3JvbGxTaXplID0gcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSA8IHByb3BzLm1pblNjcm9sbFNpemUgPyBwcm9wcy5taW5TY3JvbGxTaXplIDogcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZTtcblxuICAgICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSAocHJvcHMuY29udGFpbmVyU2l6ZSAtIHNjcm9sbFNpemUpICogZnJhY3Rpb25hbFBvc2l0aW9uOyAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcm9sbFNpemU6IHNjcm9sbFNpemUsXG4gICAgICAgICAgICBwb3NpdGlvbjogTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHtzbW9vdGhTY3JvbGxpbmcsIGlzRHJhZ2dpbmcsIHR5cGUsIHNjcm9sbGJhclN0eWxlLCBjb250YWluZXJTdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaXNWb3JpemlvbnRhbCA9IHR5cGUgPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgbGV0IGlzVmVydGljYWwgPSB0eXBlID09PSAndmVydGljYWwnO1xuICAgICAgICBsZXQgc2Nyb2xsU3R5bGVzID0gdGhpcy5jcmVhdGVTY3JvbGxTdHlsZXMoKTtcbiAgICAgICAgbGV0IHNwcmluZ2lmaWVkU2Nyb2xsU3R5bGVzID0gc21vb3RoU2Nyb2xsaW5nID8gbW9kaWZ5T2JqVmFsdWVzKHNjcm9sbFN0eWxlcywgeCA9PiBzcHJpbmcoeCkpIDogc2Nyb2xsU3R5bGVzO1xuXG4gICAgICAgIGxldCBzY3JvbGxiYXJDbGFzc2VzID0gYHNjcm9sbGJhci1jb250YWluZXIgJHtpc0RyYWdnaW5nID8gJ2FjdGl2ZScgOiAnJ30gJHtpc1Zvcml6aW9udGFsID8gJ2hvcml6b250YWwnIDogJyd9ICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnJ31gOyBcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17ey4uLnNjcm9sbGJhclN0eWxlLCAuLi5zcHJpbmdpZmllZFNjcm9sbFN0eWxlc319PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzY3JvbGxiYXJDbGFzc2VzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgeCA9PiB7IHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyID0geH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU2Nyb2xsQmFyQ29udGFpbmVyQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICBcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG4gICAgICAgIGxldCBjbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZIDogZS5jbGllbnRYO1xuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY2xpZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IHRvcCA6IGxlZnQ7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGNsaWVudFBvc2l0aW9uIC0gY2xpZW50U2Nyb2xsUG9zaXRpb247XG4gICAgICAgIGxldCBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplID0gdGhpcy5wcm9wcy5jb250YWluZXJTaXplICogdGhpcy5wcm9wcy5jb250YWluZXJTaXplIC8gdGhpcy5wcm9wcy5yZWFsU2l6ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogY2xpZW50UG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25Qb3NpdGlvbkNoYW5nZSgocG9zaXRpb24gLSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIC8gMikgLyBtdWx0aXBsaWVyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsKGUpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNEcmFnZ2luZyl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gdGhpcy5zdGF0ZS5sYXN0Q2xpZW50UG9zaXRpb24gLSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdENsaWVudFBvc2l0aW9uOiBlLmNsaWVudFggfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSgwLCBkZWx0YVggLyBtdWx0aXBsaWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsKGUpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNEcmFnZ2luZyl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gdGhpcy5zdGF0ZS5sYXN0Q2xpZW50UG9zaXRpb24gLSBlLmNsaWVudFk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdENsaWVudFBvc2l0aW9uOiBlLmNsaWVudFkgfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZShkZWx0YVkgLyBtdWx0aXBsaWVyLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRG93bihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgbGFzdENsaWVudFBvc2l0aW9uID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyBlLmNsaWVudFk6IGUuY2xpZW50WDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogdHJ1ZSwgbGFzdENsaWVudFBvc2l0aW9uOiBsYXN0Q2xpZW50UG9zaXRpb24gfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VVcChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY3JvbGxTdHlsZXMoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50eXBlID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLnNjcm9sbFNpemUsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnBvc2l0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUucG9zaXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcHV0ZU11bHRpcGxpZXIoKXtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbnRhaW5lclNpemUpIC8gdGhpcy5wcm9wcy5yZWFsU2l6ZTtcbiAgICB9XG4gICAgXG4gICAgaXNWZXJ0aWNhbCgpe1xuICAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCc7XG4gICAgfVxufVxuXG5TY3JvbGxCYXIucHJvcFR5cGVzID0ge1xuICAgIG9uTW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Qb3NpdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVhbFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGFpbmVyU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzY3JvbGxiYXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG93bmVyRG9jdW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG5TY3JvbGxCYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGUgOiAndmVydGljYWwnLFxuICAgIHNtb290aFNjcm9sbGluZzogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9TY3JvbGxiYXIuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jb21wb25lbnRzMiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuXG52YXIgX2NvbXBvbmVudHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50czIpO1xuXG52YXIgX3Jlb3JkZXJLZXlzID0gcmVxdWlyZSgnLi9yZW9yZGVyS2V5cycpO1xuXG52YXIgX3Jlb3JkZXJLZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlb3JkZXJLZXlzKTtcblxudmFyIF9jb21wb25lbnRzID0gX2NvbXBvbmVudHMzWydkZWZhdWx0J10oX3JlYWN0MlsnZGVmYXVsdCddKTtcblxudmFyIFNwcmluZyA9IF9jb21wb25lbnRzLlNwcmluZztcbnZhciBUcmFuc2l0aW9uU3ByaW5nID0gX2NvbXBvbmVudHMuVHJhbnNpdGlvblNwcmluZztcbnZhciBNb3Rpb24gPSBfY29tcG9uZW50cy5Nb3Rpb247XG52YXIgU3RhZ2dlcmVkTW90aW9uID0gX2NvbXBvbmVudHMuU3RhZ2dlcmVkTW90aW9uO1xudmFyIFRyYW5zaXRpb25Nb3Rpb24gPSBfY29tcG9uZW50cy5UcmFuc2l0aW9uTW90aW9uO1xuZXhwb3J0cy5TcHJpbmcgPSBTcHJpbmc7XG5leHBvcnRzLlRyYW5zaXRpb25TcHJpbmcgPSBUcmFuc2l0aW9uU3ByaW5nO1xuZXhwb3J0cy5Nb3Rpb24gPSBNb3Rpb247XG5leHBvcnRzLlN0YWdnZXJlZE1vdGlvbiA9IFN0YWdnZXJlZE1vdGlvbjtcbmV4cG9ydHMuVHJhbnNpdGlvbk1vdGlvbiA9IFRyYW5zaXRpb25Nb3Rpb247XG5cbnZhciBfc3ByaW5nMiA9IHJlcXVpcmUoJy4vc3ByaW5nJyk7XG5cbnZhciBfc3ByaW5nMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwcmluZzIpO1xuXG5leHBvcnRzLnNwcmluZyA9IF9zcHJpbmczWydkZWZhdWx0J107XG5cbnZhciBfcHJlc2V0czIgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMyKTtcblxuZXhwb3J0cy5wcmVzZXRzID0gX3ByZXNldHMzWydkZWZhdWx0J107XG52YXIgdXRpbHMgPSB7XG4gIHJlb3JkZXJLZXlzOiBfcmVvcmRlcktleXMyWydkZWZhdWx0J11cbn07XG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb21wb25lbnRzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbm9WZWxvY2l0eSA9IHJlcXVpcmUoJy4vbm9WZWxvY2l0eScpO1xuXG52YXIgX25vVmVsb2NpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9WZWxvY2l0eSk7XG5cbnZhciBfaGFzUmVhY2hlZFN0eWxlID0gcmVxdWlyZSgnLi9oYXNSZWFjaGVkU3R5bGUnKTtcblxudmFyIF9oYXNSZWFjaGVkU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzUmVhY2hlZFN0eWxlKTtcblxudmFyIF9tZXJnZURpZmYgPSByZXF1aXJlKCcuL21lcmdlRGlmZicpO1xuXG52YXIgX21lcmdlRGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZURpZmYpO1xuXG52YXIgX2FuaW1hdGlvbkxvb3AgPSByZXF1aXJlKCcuL2FuaW1hdGlvbkxvb3AnKTtcblxudmFyIF9hbmltYXRpb25Mb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbkxvb3ApO1xuXG52YXIgX3plcm8gPSByZXF1aXJlKCcuL3plcm8nKTtcblxudmFyIF96ZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3plcm8pO1xuXG52YXIgX3VwZGF0ZVRyZWUgPSByZXF1aXJlKCcuL3VwZGF0ZVRyZWUnKTtcblxudmFyIF9kZXByZWNhdGVkU3ByaW5nczIgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZWRTcHJpbmdzJyk7XG5cbnZhciBfZGVwcmVjYXRlZFNwcmluZ3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlZFNwcmluZ3MyKTtcblxudmFyIF9zdHJpcFN0eWxlID0gcmVxdWlyZSgnLi9zdHJpcFN0eWxlJyk7XG5cbnZhciBfc3RyaXBTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcFN0eWxlKTtcblxudmFyIHN0YXJ0QW5pbWF0aW9uID0gX2FuaW1hdGlvbkxvb3AyWydkZWZhdWx0J10oKTtcblxuZnVuY3Rpb24gbWFwT2JqZWN0KGYsIG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBmKG9ialtrZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5T2JqKGYsIG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghZihvYmpba2V5XSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50cyhSZWFjdCkge1xuICB2YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHZhciBNb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdNb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTcHJpbmdcXCdzIGBkZWZhdWx0VmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYGRlZmF1bHRTdHlsZWAuICcgKyAnSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSBjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbmRWYWx1ZTogZnVuY3Rpb24gZW5kVmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU3ByaW5nXFwncyBgZW5kVmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYHN0eWxlYC4gSXRzIGZvcm1hdCAnICsgJ3JlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGRlZmF1bHRTdHlsZSA9IF9wcm9wcy5kZWZhdWx0U3R5bGU7XG4gICAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICAgIHZhciBjdXJyZW50U3R5bGUgPSBkZWZhdWx0U3R5bGUgfHwgc3R5bGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGU6IGN1cnJlbnRTdHlsZSxcbiAgICAgICAgY3VycmVudFZlbG9jaXR5OiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIGN1cnJlbnRTdHlsZSlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3RlcDogZnVuY3Rpb24gYW5pbWF0aW9uU3RlcCh0aW1lc3RlcCwgc3RhdGUpIHtcbiAgICAgIHZhciBjdXJyZW50U3R5bGUgPSBzdGF0ZS5jdXJyZW50U3R5bGU7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0gc3RhdGUuY3VycmVudFZlbG9jaXR5O1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcblxuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRTdHlsZSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdHkgPSBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50VmVsb2NpdHkodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSk7XG5cbiAgICAgIC8vIFRPT0Q6IHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IGFueW1vcmUuIEl0IHdhcyB1c2VkIG9ubHkgYWdhaW5zdCBlbmRWYWx1ZSBmdW5jXG4gICAgICBpZiAoX25vVmVsb2NpdHkyWydkZWZhdWx0J10oY3VycmVudFZlbG9jaXR5LCBuZXdDdXJyZW50U3R5bGUpICYmIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKG5ld0N1cnJlbnRWZWxvY2l0eSwgbmV3Q3VycmVudFN0eWxlKSkge1xuICAgICAgICAvLyBjaGVjayBleHBsYW5hdGlvbiBpbiBgTW90aW9uLmFuaW1hdGlvblJlbmRlcmBcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IC8vIE5hc3R5IHNpZGUgZWZmZWN0cy4uLi5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlOiBuZXdDdXJyZW50U3R5bGUsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eTogbmV3Q3VycmVudFZlbG9jaXR5XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIC8vIElzIHNtYXJ0IGVub3VnaCB0byBub3Qgc3RhcnQgaXQgdHdpY2VcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIGB0aGlzLmhhc1VubW91bnRlZGAgbWlnaHQgYmUgdHJ1ZSBpbiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbjpcbiAgICAgIC8vIHVzZXIgZG9lcyBzb21lIGNoZWNrcyBpbiBgc3R5bGVgIGFuZCBjYWxscyBhbiBvd25lciBoYW5kbGVyXG4gICAgICAvLyBvd25lciBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjaywgdHJpZ2dlcmluZyBhIHJlLXJlbmRlclxuICAgICAgLy8gdW5tb3VudHMgTW90aW9uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZTogX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0YXRlLmN1cnJlbnRTdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZSksXG4gICAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gX3N0cmlwU3R5bGUyWydkZWZhdWx0J10odGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUpO1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHN0cmlwcGVkU3R5bGUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBTdGFnZ2VyZWRNb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTdGFnZ2VyZWRNb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0U3R5bGU6IGZ1bmN0aW9uIGRlZmF1bHRTdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFN0YWdnZXJlZE1vdGlvbmBcXCdzIGBkZWZhdWx0U3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFN0YWdnZXJlZE1vdGlvbmBcXCdzIGBzdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgY29uZmlncyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICAgIHN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0eWxlcyA9IF9wcm9wczIuc3R5bGVzO1xuICAgICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMyLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcyA/IGRlZmF1bHRTdHlsZXMgOiBzdHlsZXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIHMpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBzdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gc3RhdGUuY3VycmVudFZlbG9jaXRpZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSB0aGlzLnByb3BzLnN0eWxlcyhjdXJyZW50U3R5bGVzLm1hcChfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSkpO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50U3R5bGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRTdHlsZSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdGllc1tpXSwgc3R5bGVzW2ldKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKGN1cnJlbnRTdHlsZSwgaSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldLCBzdHlsZXNbaV0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRPRE86IGlzIHRoaXMgcmlnaHQ/XG4gICAgICBpZiAoY3VycmVudFZlbG9jaXRpZXMuZXZlcnkoZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIGN1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSkgJiYgbmV3Q3VycmVudFZlbG9jaXRpZXMuZXZlcnkoZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIG5ld0N1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBTZWUgY29tbWVudCBpbiBNb3Rpb24uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gbmV4dFN0YXRlLmN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChzdHlsZSwgaSkge1xuICAgICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBzdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZXNbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV4dFN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLm1hcChfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFRyYW5zaXRpb25Nb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uTW90aW9uJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVHJhbnNpdGlvblNwcmluZ1xcJ3MgYGRlZmF1bHRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byAnICsgJ2BkZWZhdWx0U3R5bGVzYC4gSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSAnICsgJ2NoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZFZhbHVlOiBmdW5jdGlvbiBlbmRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUcmFuc2l0aW9uU3ByaW5nXFwncyBgZW5kVmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYHN0eWxlc2AuICcgKyAnSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSBjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0U3R5bGU6IGZ1bmN0aW9uIGRlZmF1bHRTdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFRyYW5zaXRpb25Nb3Rpb25gXFwncyBgZGVmYXVsdFN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHlsZTogZnVuY3Rpb24gc3R5bGUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGZvcmdvdCB0aGUgXCJzXCIgZm9yIGBUcmFuc2l0aW9uTW90aW9uYFxcJ3MgYHN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBjb25maWdzIGluIGhlcmVcbiAgICAgIGRlZmF1bHRTdHlsZXM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIHN0eWxlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQpXSkuaXNSZXF1aXJlZCxcbiAgICAgIHdpbGxMZWF2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGNvbmZpZ3MgaW4gaGVyZVxuICAgICAgd2lsbEVudGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWxsRW50ZXI6IGZ1bmN0aW9uIHdpbGxFbnRlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICB3aWxsTGVhdmU6IGZ1bmN0aW9uIHdpbGxMZWF2ZSgpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzMy5zdHlsZXM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczMuZGVmYXVsdFN0eWxlcztcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoZGVmYXVsdFN0eWxlcyA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3VycmVudFN0eWxlcyA9IHN0eWxlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXMgPSBzdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG1hcE9iamVjdChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIHMpO1xuICAgICAgICB9LCBjdXJyZW50U3R5bGVzKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBzdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gc3RhdGUuY3VycmVudFZlbG9jaXRpZXM7XG4gICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzNC5zdHlsZXM7XG4gICAgICB2YXIgd2lsbEVudGVyID0gX3Byb3BzNC53aWxsRW50ZXI7XG4gICAgICB2YXIgd2lsbExlYXZlID0gX3Byb3BzNC53aWxsTGVhdmU7XG5cbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlcyA9IHN0eWxlcyhjdXJyZW50U3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogaHVoP1xuICAgICAgdmFyIG1lcmdlZFN0eWxlcyA9IHN0eWxlczsgLy8gc2V0IG1lcmdlZFN0eWxlcyB0byBzdHlsZXMgYXMgdGhlIGRlZmF1bHRcbiAgICAgIHZhciBoYXNOZXdLZXkgPSBmYWxzZTtcblxuICAgICAgbWVyZ2VkU3R5bGVzID0gX21lcmdlRGlmZjJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzLCBzdHlsZXMsXG4gICAgICAvLyBUT0RPOiBzdG9wIGFsbG9jYXRpbmcgbGlrZSBjcmF6eSBpbiB0aGlzIHdob2xlIGNvZGUgcGF0aFxuICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcmVzID0gd2lsbExlYXZlKGtleSwgY3VycmVudFN0eWxlc1trZXldLCBzdHlsZXMsIGN1cnJlbnRTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzKTtcbiAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gRm9yIGxlZ2FjeSByZWFzb24uIFdlIHdvbid0IGFsbG93IHJldHVybmluZyBudWxsIHNvb25cbiAgICAgICAgICAvLyBUT0RPOiByZW1vdmUsIGFmdGVyIG5leHQgcmVsZWFzZVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIGN1cnJlbnRTdHlsZXNba2V5XSkgJiYgX2hhc1JlYWNoZWRTdHlsZTJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzW2tleV0sIHJlcykpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG1lcmdlZFN0eWxlcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50U3R5bGVzLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMiwgX2V4dGVuZHMzO1xuXG4gICAgICAgIGhhc05ld0tleSA9IHRydWU7XG4gICAgICAgIHZhciBlbnRlclN0eWxlID0gd2lsbEVudGVyKGtleSwgbWVyZ2VkU3R5bGVzW2tleV0sIHN0eWxlcywgY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXMpO1xuXG4gICAgICAgIC8vIFdlIGNhbiBtdXRhdGUgdGhpcyBoZXJlIGJlY2F1c2UgbWVyZ2VEaWZmIHJldHVybnMgYSBuZXcgT2JqXG4gICAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gZW50ZXJTdHlsZTtcblxuICAgICAgICBjdXJyZW50U3R5bGVzID0gX2V4dGVuZHMoe30sIGN1cnJlbnRTdHlsZXMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSBlbnRlclN0eWxlLCBfZXh0ZW5kczIpKTtcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZlbG9jaXRpZXMsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2tleV0gPSBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIGVudGVyU3R5bGUpLCBfZXh0ZW5kczMpKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IG1hcE9iamVjdChmdW5jdGlvbiAobWVyZ2VkU3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGVzW2tleV0sIGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIG1lcmdlZFN0eWxlKTtcbiAgICAgIH0sIG1lcmdlZFN0eWxlcyk7XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBtYXBPYmplY3QoZnVuY3Rpb24gKG1lcmdlZFN0eWxlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSh0aW1lc3RlcCwgY3VycmVudFN0eWxlc1trZXldLCBjdXJyZW50VmVsb2NpdGllc1trZXldLCBtZXJnZWRTdHlsZSk7XG4gICAgICB9LCBtZXJnZWRTdHlsZXMpO1xuXG4gICAgICBpZiAoIWhhc05ld0tleSAmJiBldmVyeU9iaihmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgY3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9LCBjdXJyZW50VmVsb2NpdGllcykgJiYgZXZlcnlPYmooZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIG5ld0N1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSwgbmV3Q3VycmVudFZlbG9jaXRpZXMpKSB7XG4gICAgICAgIC8vIGNoZWNrIGV4cGxhbmF0aW9uIGluIGBNb3Rpb24uYW5pbWF0aW9uUmVuZGVyYFxuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTsgLy8gTmFzdHkgc2lkZSBlZmZlY3RzLi4uLlxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBuZXdDdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV3Q3VycmVudFZlbG9jaXRpZXNcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuaGFzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gU2VlIGNvbW1lbnQgaW4gTW90aW9uLlxuICAgICAgaWYgKCF0aGlzLmhhc1VubW91bnRlZCkge1xuICAgICAgICB2YXIgY3VycmVudFN0eWxlcyA9IG1hcE9iamVjdChmdW5jdGlvbiAoc3R5bGUsIGtleSkge1xuICAgICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBzdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZXNba2V5XSk7XG4gICAgICAgIH0sIG5leHRTdGF0ZS5jdXJyZW50U3R5bGVzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV4dFN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gbWFwT2JqZWN0KF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddLCB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHN0cmlwcGVkU3R5bGUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBfZGVwcmVjYXRlZFNwcmluZ3MgPSBfZGVwcmVjYXRlZFNwcmluZ3MzWydkZWZhdWx0J10oUmVhY3QpO1xuXG4gIHZhciBTcHJpbmcgPSBfZGVwcmVjYXRlZFNwcmluZ3MuU3ByaW5nO1xuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IF9kZXByZWNhdGVkU3ByaW5ncy5UcmFuc2l0aW9uU3ByaW5nO1xuXG4gIHJldHVybiB7IFNwcmluZzogU3ByaW5nLCBUcmFuc2l0aW9uU3ByaW5nOiBUcmFuc2l0aW9uU3ByaW5nLCBNb3Rpb246IE1vdGlvbiwgU3RhZ2dlcmVkTW90aW9uOiBTdGFnZ2VyZWRNb3Rpb24sIFRyYW5zaXRpb25Nb3Rpb246IFRyYW5zaXRpb25Nb3Rpb24gfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9jb21wb25lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gY3VycmVudFN0eWxlIGtlZXBzIHRoZSBpbmZvIGFib3V0IHdoZXRoZXIgYSBwcm9wIGlzIGNvbmZpZ3VyZWQgYXMgYSBzcHJpbmdcbi8vIG9yIGlmIGl0J3MganVzdCBhIHJhbmRvbSBwcm9wIHRoYXQgaGFwcGVucyB0byBiZSBwcmVzZW50IG9uIHRoZSBzdHlsZVxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBub1ZlbG9jaXR5O1xuXG5mdW5jdGlvbiBub1ZlbG9jaXR5KGN1cnJlbnRWZWxvY2l0eSwgY3VycmVudFN0eWxlKSB7XG4gIGZvciAodmFyIGtleSBpbiBjdXJyZW50VmVsb2NpdHkpIHtcbiAgICBpZiAoIWN1cnJlbnRWZWxvY2l0eS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldICE9IG51bGwgJiYgY3VycmVudFN0eWxlW2tleV0uY29uZmlnICYmIGN1cnJlbnRWZWxvY2l0eVtrZXldICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL25vVmVsb2NpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaGFzUmVhY2hlZFN0eWxlO1xuXG5mdW5jdGlvbiBoYXNSZWFjaGVkU3R5bGUoY3VycmVudFN0eWxlLCBzdHlsZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFN0eWxlW2tleV07XG4gICAgdmFyIGRlc3RWYWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKGRlc3RWYWx1ZSA9PSBudWxsIHx8ICFkZXN0VmFsdWUuY29uZmlnKSB7XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlLnZhbCAhPT0gZGVzdFZhbHVlLnZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlICE9PSBkZXN0VmFsdWUudmFsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvaGFzUmVhY2hlZFN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIGFsbG9jYXRpb24tbGVzcyB0aGFua3MgdG8gYmFiZWwsIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHRhaWxcbi8vIGNhbGxzIGludG8gbG9vcHNcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1lcmdlRGlmZjtcbmZ1bmN0aW9uIG1lcmdlRGlmZkFycihfeCwgX3gyLCBfeDMsIF94NCwgX3g1LCBfeDYsIF94Nykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgYXJyQSA9IF94LFxuICAgICAgICBhcnJCID0gX3gyLFxuICAgICAgICBjb2xsQiA9IF94MyxcbiAgICAgICAgaW5kZXhBID0gX3g0LFxuICAgICAgICBpbmRleEIgPSBfeDUsXG4gICAgICAgIG9uUmVtb3ZlID0gX3g2LFxuICAgICAgICBhY2N1bSA9IF94NztcbiAgICBlbmRBID0gZW5kQiA9IGtleUEgPSBrZXlCID0gZmlsbCA9IGZpbGwgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG5cbiAgICB2YXIgZW5kQSA9IGluZGV4QSA9PT0gYXJyQS5sZW5ndGg7XG4gICAgdmFyIGVuZEIgPSBpbmRleEIgPT09IGFyckIubGVuZ3RoO1xuICAgIHZhciBrZXlBID0gYXJyQVtpbmRleEFdO1xuICAgIHZhciBrZXlCID0gYXJyQltpbmRleEJdO1xuICAgIGlmIChlbmRBICYmIGVuZEIpIHtcbiAgICAgIC8vIHJldHVybmluZyBudWxsIGhlcmUsIG90aGVyd2lzZSBsaW50IGNvbXBsYWlucyB0aGF0IHdlJ3JlIG5vdCBleHBlY3RpbmdcbiAgICAgIC8vIGEgcmV0dXJuIHZhbHVlIGluIHN1YnNlcXVlbnQgY2FsbHMuIFdlIGtub3cgd2hhdCB3ZSdyZSBkb2luZy5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbmRBKSB7XG4gICAgICBhY2N1bVtrZXlCXSA9IGNvbGxCW2tleUJdO1xuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmIChlbmRCKSB7XG4gICAgICB2YXIgZmlsbCA9IG9uUmVtb3ZlKGtleUEpO1xuICAgICAgaWYgKGZpbGwgIT0gbnVsbCkge1xuICAgICAgICBhY2N1bVtrZXlBXSA9IGZpbGw7XG4gICAgICB9XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGtleUEgPT09IGtleUIpIHtcbiAgICAgIGFjY3VtW2tleUFdID0gY29sbEJba2V5QV07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmICghY29sbEIuaGFzT3duUHJvcGVydHkoa2V5QSkpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBfeCA9IGFyckE7XG4gICAgX3gyID0gYXJyQjtcbiAgICBfeDMgPSBjb2xsQjtcbiAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgIF94NSA9IGluZGV4QjtcbiAgICBfeDYgPSBvblJlbW92ZTtcbiAgICBfeDcgPSBhY2N1bTtcbiAgICBfYWdhaW4gPSB0cnVlO1xuICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZURpZmYoYSwgYiwgb25SZW1vdmUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICAvLyBpZiBhbnlvbmUgY2FuIG1ha2UgdGhpcyB3b3JrIHdpdGhvdXQgYWxsb2NhdGluZyB0aGUgYXJyYXlzIGhlcmUsIHdlJ2xsXG4gIC8vIGdpdmUgeW91IGEgbWVkYWxcbiAgbWVyZ2VEaWZmQXJyKE9iamVjdC5rZXlzKGEpLCBPYmplY3Qua2V5cyhiKSwgYiwgMCwgMCwgb25SZW1vdmUsIHJldCk7XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbmZpZ0FuaW1hdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3BlcmZvcm1hbmNlTm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93Jyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyZm9ybWFuY2VOb3cpO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG5mdW5jdGlvbiBjb25maWdBbmltYXRpb24oKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIF9jb25maWckdGltZVN0ZXAgPSBjb25maWcudGltZVN0ZXA7XG4gIHZhciB0aW1lU3RlcCA9IF9jb25maWckdGltZVN0ZXAgPT09IHVuZGVmaW5lZCA/IDEgLyA2MCAqIDEwMDAgOiBfY29uZmlnJHRpbWVTdGVwO1xuICB2YXIgX2NvbmZpZyR0aW1lU2NhbGUgPSBjb25maWcudGltZVNjYWxlO1xuICB2YXIgdGltZVNjYWxlID0gX2NvbmZpZyR0aW1lU2NhbGUgPT09IHVuZGVmaW5lZCA/IDEgOiBfY29uZmlnJHRpbWVTY2FsZTtcbiAgdmFyIF9jb25maWckbWF4U3RlcHMgPSBjb25maWcubWF4U3RlcHM7XG4gIHZhciBtYXhTdGVwcyA9IF9jb25maWckbWF4U3RlcHMgPT09IHVuZGVmaW5lZCA/IDEwIDogX2NvbmZpZyRtYXhTdGVwcztcbiAgdmFyIF9jb25maWckcmFmID0gY29uZmlnLnJhZjtcbiAgdmFyIHJhZiA9IF9jb25maWckcmFmID09PSB1bmRlZmluZWQgPyBfcmFmMlsnZGVmYXVsdCddIDogX2NvbmZpZyRyYWY7XG4gIHZhciBfY29uZmlnJG5vdyA9IGNvbmZpZy5ub3c7XG4gIHZhciBub3cgPSBfY29uZmlnJG5vdyA9PT0gdW5kZWZpbmVkID8gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddIDogX2NvbmZpZyRub3c7XG5cbiAgdmFyIGFuaW1SdW5uaW5nID0gW107XG4gIHZhciBydW5uaW5nID0gZmFsc2U7XG4gIHZhciBwcmV2VGltZSA9IDA7XG4gIHZhciBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgdmFyIGN1cnJlbnRUaW1lID0gbm93KCk7XG4gICAgdmFyIGZyYW1lVGltZSA9IGN1cnJlbnRUaW1lIC0gcHJldlRpbWU7IC8vIGRlbHRhXG5cbiAgICBwcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIGFjY3VtdWxhdGVkVGltZSArPSBmcmFtZVRpbWUgKiB0aW1lU2NhbGU7XG5cbiAgICBpZiAoYWNjdW11bGF0ZWRUaW1lID4gdGltZVN0ZXAgKiBtYXhTdGVwcykge1xuICAgICAgYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgZnJhbWVOdW1iZXIgPSBNYXRoLmNlaWwoYWNjdW11bGF0ZWRUaW1lIC8gdGltZVN0ZXApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaSA9IGFuaW1SdW5uaW5nW2ldO1xuICAgICAgdmFyIGFjdGl2ZSA9IF9hbmltUnVubmluZyRpLmFjdGl2ZTtcbiAgICAgIHZhciBhbmltYXRpb25TdGVwID0gX2FuaW1SdW5uaW5nJGkuYW5pbWF0aW9uU3RlcDtcbiAgICAgIHZhciBwcmV2UHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkucHJldlN0YXRlO1xuICAgICAgdmFyIHByZXZOZXh0U3RhdGUgPSBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGU7XG5cbiAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWVtcyBsaWtlIGJlY2F1c2UgdGhlIFRTIHNldHMgZGVzdFZhbHMgYXMgZW50ZXJWYWxzIGZvciB0aGUgZmlyc3RcbiAgICAgIC8vIHRpY2ssIHdlIG1pZ2h0IHJlbmRlciB0aGF0IHZhbHVlIHR3aWNlLiBXZSByZW5kZXIgaXQgb25jZSwgY3VyclZhbHVlIGlzXG4gICAgICAvLyBlbnRlclZhbCBhbmQgZGVzdFZhbCBpcyBlbnRlclZhbC4gVGhlIG5leHQgdGljayBpcyBmYXN0ZXIgdGhhbiAxNm1zLFxuICAgICAgLy8gc28gYWNjdW11bGF0ZWRUaW1lICh3aGljaCB3b3VsZCBiZSBhYm91dCAtMTZtcyBmcm9tIHRoZSBwcmV2aW91cyB0aWNrKVxuICAgICAgLy8gaXMgbmVnYXRpdmUgKC0xNm1zICsgYW55IG51bWJlciBsZXNzIHRoYW4gMTZtcyA8IDApLiBTbyB3ZSBqdXN0IHJlbmRlclxuICAgICAgLy8gcGFydCB3YXlzIHRvd2FyZHMgdGhlIG5leHRTdGF0ZSwgYnV0IHRoYXQncyBlbnRlclZhbCBzdGlsbC4gV2UgcmVuZGVyXG4gICAgICAvLyBzYXkgNzUlIGJldHdlZW4gY3VyclZhbHVlICg9PT0gZW50ZXJWYWwpIGFuZCBkZXN0VmFsdWUgKD09PSBlbnRlclZhbCkuXG4gICAgICAvLyBTbyB3ZSByZW5kZXIgdGhlIHNhbWUgdmFsdWUgYSBzZWNvbmQgdGltZS5cbiAgICAgIC8vIFRoZSBzb2x1dGlvbiBiZWxvdyBpcyB0byByZWNhbGN1bGF0ZSB0aGUgZGVzdGluYXRpb24gc3RhdGUgZXZlbiB3aGVuXG4gICAgICAvLyB5b3UncmUgbW92aW5nIHBhcnRpYWxseSB0b3dhcmRzIGl0LlxuICAgICAgaWYgKGFjY3VtdWxhdGVkVGltZSA8PSAwKSB7XG4gICAgICAgIGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZSA9IGFuaW1hdGlvblN0ZXAodGltZVN0ZXAgLyAxMDAwLCBwcmV2UHJldlN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnJhbWVOdW1iZXI7IGorKykge1xuICAgICAgICAgIGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZSA9IGFuaW1hdGlvblN0ZXAodGltZVN0ZXAgLyAxMDAwLCBwcmV2TmV4dFN0YXRlKTtcbiAgICAgICAgICB2YXIgX3JlZiA9IFtwcmV2TmV4dFN0YXRlLCBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGVdO1xuICAgICAgICAgIGFuaW1SdW5uaW5nW2ldLnByZXZTdGF0ZSA9IF9yZWZbMF07XG4gICAgICAgICAgcHJldk5leHRTdGF0ZSA9IF9yZWZbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY2N1bXVsYXRlZFRpbWUgPSBhY2N1bXVsYXRlZFRpbWUgLSBmcmFtZU51bWJlciAqIHRpbWVTdGVwO1xuXG4gICAgLy8gUmVuZGVyIGFuZCBmaWx0ZXIgaW4gb25lIGl0ZXJhdGlvbi5cbiAgICB2YXIgYWxwaGEgPSAxICsgYWNjdW11bGF0ZWRUaW1lIC8gdGltZVN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9hbmltUnVubmluZyRpMiA9IGFuaW1SdW5uaW5nW2ldO1xuICAgICAgdmFyIGFuaW1hdGlvblJlbmRlciA9IF9hbmltUnVubmluZyRpMi5hbmltYXRpb25SZW5kZXI7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLm5leHRTdGF0ZTtcbiAgICAgIHZhciBwcmV2U3RhdGUgPSBfYW5pbVJ1bm5pbmckaTIucHJldlN0YXRlO1xuXG4gICAgICAvLyBNaWdodCBtdXRhdGUgYW5pbVJ1bm5pbmcuLi4uLi4uLlxuICAgICAgYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSk7XG4gICAgfVxuXG4gICAgYW5pbVJ1bm5pbmcgPSBhbmltUnVubmluZy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgYWN0aXZlID0gX3JlZjIuYWN0aXZlO1xuICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICB9KTtcblxuICAgIGlmIChhbmltUnVubmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFmKGxvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghcnVubmluZykge1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICBwcmV2VGltZSA9IG5vdygpO1xuICAgICAgYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgIHJhZihsb29wKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oc3RhdGUsIGFuaW1hdGlvblN0ZXAsIGFuaW1hdGlvblJlbmRlcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWwgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIGlmICh2YWwuYW5pbWF0aW9uU3RlcCA9PT0gYW5pbWF0aW9uU3RlcCkge1xuICAgICAgICB2YWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFsLnByZXZTdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzdGFydCgpO1xuICAgICAgICByZXR1cm4gdmFsLnN0b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG5ld0FuaW0gPSB7XG4gICAgICBhbmltYXRpb25TdGVwOiBhbmltYXRpb25TdGVwLFxuICAgICAgYW5pbWF0aW9uUmVuZGVyOiBhbmltYXRpb25SZW5kZXIsXG4gICAgICBwcmV2U3RhdGU6IHN0YXRlLFxuICAgICAgbmV4dFN0YXRlOiBzdGF0ZSxcbiAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgIH07XG5cbiAgICBuZXdBbmltLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3QW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuICAgIGFuaW1SdW5uaW5nLnB1c2gobmV3QW5pbSk7XG5cbiAgICBzdGFydCgpO1xuXG4gICAgcmV0dXJuIG5ld0FuaW0uc3RvcDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9hbmltYXRpb25Mb29wLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vLyB1c2VkIGJ5IHRoZSB0cmVlLXdhbGtpbmcgdXBkYXRlcyBhbmQgc3ByaW5ncy4gQXZvaWRzIHNvbWUgYWxsb2NhdGlvbnNcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB6ZXJvO1xuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJWYWx1ZSBhbmQgdXBkYXRlQ3VyclZlbG9jaXR5XG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmludGVycG9sYXRlVmFsdWUgPSBpbnRlcnBvbGF0ZVZhbHVlO1xuZXhwb3J0cy51cGRhdGVDdXJyZW50U3R5bGUgPSB1cGRhdGVDdXJyZW50U3R5bGU7XG5leHBvcnRzLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSA9IHVwZGF0ZUN1cnJlbnRWZWxvY2l0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3N0ZXBwZXIgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIpO1xuXG52YXIgX3NwcmluZyA9IHJlcXVpcmUoJy4vc3ByaW5nJyk7XG5cbnZhciBfc3ByaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwcmluZyk7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRTdHlsZSwgcHJldlN0eWxlKSB7XG4gIC8vIG1pZ2h0IGJlIHVzZWQgYnkgYSBUcmFuc2l0aW9uTW90aW9uLCB3aGVyZSBwcmV2U3R5bGUgbWlnaHQgbm90IGV4aXN0IGFueW1vcmVcbiAgaWYgKCFwcmV2U3R5bGUpIHtcbiAgICByZXR1cm4gbmV4dFN0eWxlO1xuICB9XG5cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gbmV4dFN0eWxlKSB7XG4gICAgaWYgKCFuZXh0U3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdHlsZVtrZXldID09IG51bGwgfHwgIW5leHRTdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBuZXh0U3R5bGVba2V5XTtcbiAgICAgIC8vIG5vdCBhIHNwcmluZyBjb25maWcsIG5vdCBzb21ldGhpbmcgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBwcmV2VmFsdWUgPSBwcmV2U3R5bGVba2V5XS5jb25maWcgPyBwcmV2U3R5bGVba2V5XS52YWwgOiBwcmV2U3R5bGVba2V5XTtcbiAgICByZXRba2V5XSA9IF9zcHJpbmcyWydkZWZhdWx0J10obmV4dFN0eWxlW2tleV0udmFsICogYWxwaGEgKyBwcmV2VmFsdWUgKiAoMSAtIGFscGhhKSwgbmV4dFN0eWxlW2tleV0uY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50U3R5bGUoZnJhbWVSYXRlLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc3R5bGVba2V5XSA9PSBudWxsIHx8ICFzdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZywgbm90IHNvbWV0aGluZyB3ZSB3YW50IHRvIGludGVycG9sYXRlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIF9zdHlsZSRrZXkkY29uZmlnID0gc3R5bGVba2V5XS5jb25maWc7XG4gICAgdmFyIGsgPSBfc3R5bGUka2V5JGNvbmZpZ1swXTtcbiAgICB2YXIgYiA9IF9zdHlsZSRrZXkkY29uZmlnWzFdO1xuXG4gICAgdmFyIHZhbCA9IF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSxcbiAgICAvLyBtaWdodCBoYXZlIGJlZW4gYSBub24tc3ByaW5nZWQgcHJvcCB0aGF0IGp1c3QgYmVjYW1lIG9uZVxuICAgIGN1cnJlbnRTdHlsZVtrZXldLnZhbCA9PSBudWxsID8gY3VycmVudFN0eWxlW2tleV0gOiBjdXJyZW50U3R5bGVba2V5XS52YWwsIGN1cnJlbnRWZWxvY2l0eVtrZXldLCBzdHlsZVtrZXldLnZhbCwgaywgYilbMF07XG4gICAgcmV0W2tleV0gPSBfc3ByaW5nMlsnZGVmYXVsdCddKHZhbCwgc3R5bGVba2V5XS5jb25maWcpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChzdHlsZVtrZXldID09IG51bGwgfHwgIXN0eWxlW2tleV0uY29uZmlnKSB7XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnLCBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGVcbiAgICAgIHJldFtrZXldID0gMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgX3N0eWxlJGtleSRjb25maWcyID0gc3R5bGVba2V5XS5jb25maWc7XG4gICAgdmFyIGsgPSBfc3R5bGUka2V5JGNvbmZpZzJbMF07XG4gICAgdmFyIGIgPSBfc3R5bGUka2V5JGNvbmZpZzJbMV07XG5cbiAgICB2YXIgdmFsID0gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLFxuICAgIC8vIG1pZ2h0IGhhdmUgYmVlbiBhIG5vbi1zcHJpbmdlZCBwcm9wIHRoYXQganVzdCBiZWNhbWUgb25lXG4gICAgY3VycmVudFN0eWxlW2tleV0udmFsID09IG51bGwgPyBjdXJyZW50U3R5bGVba2V5XSA6IGN1cnJlbnRTdHlsZVtrZXldLnZhbCwgY3VycmVudFZlbG9jaXR5W2tleV0sIHN0eWxlW2tleV0udmFsLCBrLCBiKVsxXTtcbiAgICByZXRba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RlcHBlcjtcblxudmFyIGVycm9yTWFyZ2luID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBzdGVwcGVyKGZyYW1lUmF0ZSwgeCwgdiwgZGVzdFgsIGssIGIpIHtcbiAgLy8gU3ByaW5nIHN0aWZmbmVzcywgaW4ga2cgLyBzXjJcblxuICAvLyBmb3IgYW5pbWF0aW9ucywgZGVzdFggaXMgcmVhbGx5IHNwcmluZyBsZW5ndGggKHNwcmluZyBhdCByZXN0KS4gaW5pdGlhbFxuICAvLyBwb3NpdGlvbiBpcyBjb25zaWRlcmVkIGFzIHRoZSBzdHJldGNoZWQvY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBhIHNwcmluZ1xuICB2YXIgRnNwcmluZyA9IC1rICogKHggLSBkZXN0WCk7XG5cbiAgLy8gRGFtcGluZywgaW4ga2cgLyBzXG4gIHZhciBGZGFtcGVyID0gLWIgKiB2O1xuXG4gIC8vIHVzdWFsbHkgd2UgcHV0IG1hc3MgaGVyZSwgYnV0IGZvciBhbmltYXRpb24gcHVycG9zZXMsIHNwZWNpZnlpbmcgbWFzcyBpcyBhXG4gIC8vIGJpdCByZWR1bmRhbnQuIHlvdSBjb3VsZCBzaW1wbHkgYWRqdXN0IGsgYW5kIGIgYWNjb3JkaW5nbHlcbiAgLy8gbGV0IGEgPSAoRnNwcmluZyArIEZkYW1wZXIpIC8gbWFzcztcbiAgdmFyIGEgPSBGc3ByaW5nICsgRmRhbXBlcjtcblxuICB2YXIgbmV3ViA9IHYgKyBhICogZnJhbWVSYXRlO1xuICB2YXIgbmV3WCA9IHggKyBuZXdWICogZnJhbWVSYXRlO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWIC0gdikgPCBlcnJvck1hcmdpbiAmJiBNYXRoLmFicyhuZXdYIC0geCkgPCBlcnJvck1hcmdpbikge1xuICAgIHJldHVybiBbZGVzdFgsIDBdO1xuICB9XG5cbiAgcmV0dXJuIFtuZXdYLCBuZXdWXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ByaW5nO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0cyk7XG5cbmZ1bmN0aW9uIHNwcmluZyh2YWwpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlIDogYXJndW1lbnRzWzFdO1xuXG4gIHJldHVybiB7IHZhbDogdmFsLCBjb25maWc6IGNvbmZpZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3NwcmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIFtzdGlmZm5lc3MsIGRhbXBpbmddXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBub1dvYmJsZTogWzE3MCwgMjZdLCAvLyB0aGUgZGVmYXVsdFxuICBnZW50bGU6IFsxMjAsIDE0XSxcbiAgd29iYmx5OiBbMTgwLCAxMl0sXG4gIHN0aWZmOiBbMjEwLCAyMF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGVkU3ByaW5ncztcbnZhciBoYXNXYXJuZWRGb3JTcHJpbmcgPSB7fTtcbnZhciBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWRTcHJpbmdzKFJlYWN0KSB7XG4gIHZhciBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JTcHJpbmdbb3duZXJOYW1lXSkge1xuICAgICAgICAgIGhhc1dhcm5lZEZvclNwcmluZ1tvd25lck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvIE1vdGlvbi4gJyArICdQbGVhc2Ugc2VlIHRoZSByZWxlYXNlIG5vdGUgZm9yIHRoZSB1cGdyYWRlIHBhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25TcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb25TcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvICcgKyAnVHJhbnNpdGlvbk1vdGlvbi4gUGxlYXNlIHNlZSB0aGUgcmVsZWFzZSBub3RlIGZvciB0aGUgdXBncmFkZSAnICsgJ3BhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBTcHJpbmc6IFNwcmluZywgVHJhbnNpdGlvblNwcmluZzogVHJhbnNpdGlvblNwcmluZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gdHVybiB7eDoge3ZhbDogMSwgY29uZmlnOiBbMSwgMl19LCB5OiAyfSBnZW5lcmF0ZWQgYnlcbi8vIGB7eDogc3ByaW5nKDEsIFsxLCAyXSksIHk6IDJ9YCBpbnRvIHt4OiAxLCB5OiAyfVxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzdHJpcFN0eWxlO1xuXG5mdW5jdGlvbiBzdHJpcFN0eWxlKHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBzdHlsZVtrZXldID09IG51bGwgfHwgc3R5bGVba2V5XS52YWwgPT0gbnVsbCA/IHN0eWxlW2tleV0gOiBzdHlsZVtrZXldLnZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0cmlwU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlb3JkZXJLZXlzO1xuXG5mdW5jdGlvbiByZW9yZGVyS2V5cyhvYmosIGYpIHtcbiAgdmFyIG5ld0tleXMgPSBmKE9iamVjdC5rZXlzKG9iaikpO1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3S2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBuZXdLZXlzW2ldO1xuICAgIHJldFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVhY3QxMyA9IGlzUmVhY3QxMyhSZWFjdCk7XG52YXIgZGlkV2FybkFib3V0Q2hpbGQgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRET01Ob2RlKGNvbXBvbmVudCl7XG4gICAgaWYoIXJlYWN0MTMpe1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuQWJvdXRGdW5jdGlvbkNoaWxkKCkge1xuICAgIGlmIChkaWRXYXJuQWJvdXRDaGlsZCB8fCByZWFjdDEzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dpdGggUmVhY3QgMC4xNCBhbmQgbGF0ZXIgdmVyc2lvbnMsIHlvdSBubyBsb25nZXIgbmVlZCB0byB3cmFwIDxTY3JvbGxBcmVhPiBjaGlsZCBpbnRvIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpIHtcbiAgICBpZiAoZGlkV2FybkFib3V0Q2hpbGQgfHwgIXJlYWN0MTMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xuICAgIGNvbnNvbGUuZXJyb3IoICdXaXRoIFJlYWN0IDAuMTMsIHlvdSBuZWVkIHRvIHdyYXAgPFNjcm9sbEFyZWE+IGNoaWxkIGludG8gYSBmdW5jdGlvbi4nICk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aXZlT3JaZXJvKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAwIDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZ5T2JqVmFsdWVzIChvYmosIG1vZGlmaWVyID0geCA9PiB4KXtcbiAgICBsZXQgbW9kaWZpZWRPYmogPSB7fTtcbiAgICBmb3IobGV0IGtleSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgbW9kaWZpZWRPYmpba2V5XSA9IG1vZGlmaWVyKG9ialtrZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG1vZGlmaWVkT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFjdDEzKFJlYWN0KSB7XG4gICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBSZWFjdDtcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIGNvbnN0IG1ham9yID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcbiAgICBjb25zdCBtaW5vciA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG5cbiAgICByZXR1cm4gbWFqb3IgPT09IDAgJiYgbWlub3IgPT09IDEzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdXRpbHMuanNcbiAqKi8iLCIvLyBMb2FkIGluIGRlcGVuZGVuY2llc1xudmFyIGNvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCdjb21wdXRlZC1zdHlsZScpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgYGxpbmUtaGVpZ2h0YCBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBjYWxjdWxhdGUgbGluZSBoZWlnaHQgb2YuIE11c3QgYmUgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGBsaW5lLWhlaWdodGAgb2YgdGhlIGVsZW1lbnQgaW4gcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGxpbmVIZWlnaHQobm9kZSkge1xuICAvLyBHcmFiIHRoZSBsaW5lLWhlaWdodCB2aWEgc3R5bGVcbiAgdmFyIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKSxcbiAgICAgIGxuSGVpZ2h0ID0gcGFyc2VGbG9hdChsbkhlaWdodFN0ciwgMTApO1xuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGRpZCBub3QgY29udGFpbiBhIHVuaXQgKGkuZS4gaXQgd2FzIG51bWVyaWMpLCBjb252ZXJ0IGl0IHRvIGVtcyAoZS5nLiAnMi4zJyA9PT0gJzIuM2VtJylcbiAgaWYgKGxuSGVpZ2h0U3RyID09PSBsbkhlaWdodCArICcnKSB7XG4gICAgLy8gU2F2ZSB0aGUgb2xkIGxpbmVIZWlnaHQgc3R5bGUgYW5kIHVwZGF0ZSB0aGUgZW0gdW5pdCB0byB0aGUgZWxlbWVudFxuICAgIHZhciBfbG5IZWlnaHRTdHlsZSA9IG5vZGUuc3R5bGUubGluZUhlaWdodDtcbiAgICBub2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBsbkhlaWdodFN0ciArICdlbSc7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVtIGJhc2VkIGhlaWdodFxuICAgIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKTtcbiAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAgIC8vIFJldmVydCB0aGUgbGluZUhlaWdodCBzdHlsZVxuICAgIGlmIChfbG5IZWlnaHRTdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gX2xuSGVpZ2h0U3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHB0YCwgY29udmVydCBpdCB0byBwaXhlbHMgKDRweCBmb3IgM3B0KVxuICAvLyBERVY6IGBlbWAgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBgcHRgIGluIElFNlxuICAvLyBDb252ZXJzaW9uIHJhdGlvIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aFxuICBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZigncHQnKSAhPT0gLTEpIHtcbiAgICBsbkhlaWdodCAqPSA0O1xuICAgIGxuSGVpZ2h0IC89IDM7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignbW0nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgbW1gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMjUuNG1tKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDI1LjQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignY20nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgY21gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMi41NGNtKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDIuNTQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignaW4nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgaW5gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMWluKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3BjJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHBjYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDEycHQgZm9yIDFwYylcbiAgICBsbkhlaWdodCAqPSAxNjtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIG91ciBjb21wdXRhdGlvblxuICBsbkhlaWdodCA9IE1hdGgucm91bmQobG5IZWlnaHQpO1xuXG4gIC8vIElmIHRoZSBsaW5lLWhlaWdodCBpcyBcIm5vcm1hbFwiLCBjYWxjdWxhdGUgYnkgZm9udC1zaXplXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gJ25vcm1hbCcpIHtcbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgbm9kZVxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUsXG4gICAgICAgIF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgX25vZGUuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG5cbiAgICAvLyBTZXQgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgIHZhciBmb250U2l6ZVN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2ZvbnQtc2l6ZScpO1xuICAgIF9ub2RlLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVTdHI7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChfbm9kZSk7XG5cbiAgICAvLyBBc3N1bWUgdGhlIGxpbmUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHRoZSBoZWlnaHRcbiAgICB2YXIgaGVpZ2h0ID0gX25vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxuSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLy8gUmVtb3ZlIG91ciBjaGlsZCBmcm9tIHRoZSBET01cbiAgICBib2R5LnJlbW92ZUNoaWxkKF9ub2RlKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHRcbiAgcmV0dXJuIGxuSGVpZ2h0O1xufVxuXG4vLyBFeHBvcnQgbGluZUhlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBsaW5lSGVpZ2h0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xpbmUtaGVpZ2h0L2xpYi9saW5lLWhlaWdodC5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGlzIGNvZGUgaGFzIGJlZW4gcmVmYWN0b3JlZCBmb3IgMTQwIGJ5dGVzXG4vLyBZb3UgY2FuIHNlZSB0aGUgb3JpZ2luYWwgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3R3b2xmc29uL2NvbXB1dGVkU3R5bGUvYmxvYi8wNGNkMWRhMmUzMGZhNDU4NDRmOTVmNWNiMWFjODk4ZTliOWVmMDUwL2xpYi9jb21wdXRlZFN0eWxlLmpzXG52YXIgY29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIChlbCwgcHJvcCwgZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG5cbiAgLy8gSW4gb25lIGZlbGwgc3dvb3BcbiAgcmV0dXJuIChcbiAgICAvLyBJZiB3ZSBoYXZlIGdldENvbXB1dGVkU3R5bGVcbiAgICBnZXRDb21wdXRlZFN0eWxlID9cbiAgICAgIC8vIFF1ZXJ5IGl0XG4gICAgICAvLyBUT0RPOiBGcm9tIENTUy1RdWVyeSBub3Rlcywgd2UgbWlnaHQgbmVlZCAobm9kZSwgbnVsbCkgZm9yIEZGXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKGVsKSA6XG5cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSBpbiBJRSBhbmQgdXNlIGN1cnJlbnRTdHlsZVxuICAgICAgZWwuY3VycmVudFN0eWxlXG4gIClbXG4gICAgLy8gU3dpdGNoIHRvIGNhbWVsQ2FzZSBmb3IgQ1NTT01cbiAgICAvLyBERVY6IEdyYWJiZWQgZnJvbSBqUXVlcnlcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2Nzcy5qcyNMMTkxLUwxOTRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2NvcmUuanMjTDU5My1MNTk3XG4gICAgcHJvcC5yZXBsYWNlKC8tKFxcdykvZ2ksIGZ1bmN0aW9uICh3b3JkLCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KVxuICBdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wdXRlZFN0eWxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbGluZS1oZWlnaHQvfi9jb21wdXRlZC1zdHlsZS9kaXN0L2NvbXB1dGVkU3R5bGUuY29tbW9uanMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==