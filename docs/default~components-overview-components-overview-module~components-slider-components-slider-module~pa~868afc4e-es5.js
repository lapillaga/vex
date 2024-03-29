function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e"], {
  /***/
  "./node_modules/@angular/material/esm2015/slider.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/slider.js ***!
    \**********************************************************/

  /*! exports provided: MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider */

  /***/
  function node_modulesAngularMaterialEsm2015SliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return MatSliderModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return MAT_SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return MatSliderChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return MatSlider;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
     * the default separation we chose.
     * @type {?}
     */


    var MIN_AUTO_TICK_SEPARATION = 30;
    /**
     * The thumb gap size for a disabled slider.
     * @type {?}
     */

    var DISABLED_THUMB_GAP = 7;
    /**
     * The thumb gap size for a non-active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
    /**
     * The thumb gap size for an active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
    /**
     * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)] and [formControl].
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlider;
      }),
      multi: true
    };
    /**
     * A simple change event emitted by the MatSlider component.
     */

    var MatSliderChange = function MatSliderChange() {
      _classCallCheck(this, MatSliderChange);
    }; // Boilerplate for applying mixins to MatSlider.

    /**
     * \@docs-private
     */


    var MatSliderBase =
    /**
     * @param {?} _elementRef
     */
    function MatSliderBase(_elementRef) {
      _classCallCheck(this, MatSliderBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatSliderBase), 'accent'));
    /**
     * Allows users to select from a range of values by moving the slider thumb. It is similar in
     * behavior to the native `<input type="range">` element.
     */


    var MatSlider =
    /*#__PURE__*/
    function (_MatSliderMixinBase2) {
      _inherits(MatSlider, _MatSliderMixinBase2);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} tabIndex
       * @param {?=} _animationMode
       */
      function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode) {
        var _this;

        _classCallCheck(this, MatSlider);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MatSlider).call(this, elementRef));
        _this._focusMonitor = _focusMonitor;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this._animationMode = _animationMode;
        _this._invert = false;
        _this._max = 100;
        _this._min = 0;
        _this._step = 1;
        _this._thumbLabel = false;
        _this._tickInterval = 0;
        _this._value = null;
        _this._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */

        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */

        _this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */

        _this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */

        _this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */

        _this._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */

        _this._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */

        _this._sliderDimensions = null;

        _this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Subscription to the Directionality change EventEmitter.
         */


        _this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
      }
      /**
       * Whether the slider is inverted.
       * @return {?}
       */


      _createClass(MatSlider, [{
        key: "focus",

        /**
         * set focus to the host element
         * @param {?=} options
         * @return {?}
         */
        value: function focus(options) {
          this._focusHostElement(options);
        }
        /**
         * blur the host element
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */

      }, {
        key: "_shouldInvertMouseCoords",

        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @return {?}
         */
        value: function _shouldInvertMouseCoords() {
          return this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            _this2._isActive = !!origin && origin !== 'keyboard';

            _this2._changeDetectorRef.detectChanges();
          });

          if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this2._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onMouseenter",
        value: function _onMouseenter() {
          if (this.disabled) {
            return;
          } // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.


          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onMousedown",
        value: function _onMousedown(event) {
          // Don't do anything if the slider is disabled or the
          // user is using anything other than the main mouse button.
          if (this.disabled || event.button !== 0) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;
          this._isSliding = false;

          this._focusHostElement();

          this._updateValueFromPosition({
            x: event.clientX,
            y: event.clientY
          }); // Emit a change and input event if the value changed.


          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onSlide",
        value: function _onSlide(event) {
          if (this.disabled) {
            return;
          } // The slide start event sometimes fails to fire on iOS, so if we're not already in the sliding
          // state, call the slide start handler manually.


          if (!this._isSliding) {
            this._onSlideStart(null);
          } // Prevent the slide from selecting anything else.


          event.preventDefault();
          /** @type {?} */

          var oldValue = this.value;

          this._updateValueFromPosition({
            x: event.center.x,
            y: event.center.y
          }); // Native range elements always emit `input` events when the value changed while sliding.


          if (oldValue != this.value) {
            this._emitInputEvent();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onSlideStart",
        value: function _onSlideStart(event) {
          if (this.disabled || this._isSliding) {
            return;
          } // Simulate mouseenter in case this is a mobile device.


          this._onMouseenter();

          this._isSliding = true;

          this._focusHostElement();

          this._valueOnSlideStart = this.value;

          if (event) {
            this._updateValueFromPosition({
              x: event.center.x,
              y: event.center.y
            });

            event.preventDefault();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onSlideEnd",
        value: function _onSlideEnd() {
          this._isSliding = false;

          if (this._valueOnSlideStart != this.value && !this.disabled) {
            this._emitChangeEvent();
          }

          this._valueOnSlideStart = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.
          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event)) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
              this._increment(10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
              this._increment(-10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
              this.value = this.max;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
              this.value = this.min;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
              // inverted slider the thumb moves in that direction. However for a blind user, nothing
              // about the slider indicates that it is inverted. They will expect left to be decrement,
              // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
              // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
              // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
              // sighted users, therefore we do not swap the meaning.
              this._increment(this._getDirection() == 'rtl' ? 1 : -1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              this._increment(1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
              this._increment(this._getDirection() == 'rtl' ? -1 : 1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              this._increment(-1);

              break;

            default:
              // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
              // it.
              return;
          }

          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }

          this._isSliding = true;
          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onKeyup",
        value: function _onKeyup() {
          this._isSliding = false;
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */

      }, {
        key: "_increment",
        value: function _increment(numSteps) {
          this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_updateValueFromPosition",
        value: function _updateValueFromPosition(pos) {
          if (!this._sliderDimensions) {
            return;
          }
          /** @type {?} */


          var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
          /** @type {?} */

          var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
          /** @type {?} */

          var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

          /** @type {?} */

          var percent = this._clamp((posComponent - offset) / size);

          if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
          } // Since the steps may not divide cleanly into the max value, if the user
          // slid to 0 or 100 percent, we jump to the min/max value. This approach
          // is slightly more intuitive than using `Math.ceil` below, because it
          // follows the user's pointer closer.


          if (percent === 0) {
            this.value = this.min;
          } else if (percent === 1) {
            this.value = this.max;
          } else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.

            /** @type {?} */


            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

            this.value = this._clamp(closestValue, this.min, this.max);
          }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.value);

          this.valueChange.emit(this.value);
          this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitInputEvent",
        value: function _emitInputEvent() {
          this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTickIntervalPercent",
        value: function _updateTickIntervalPercent() {
          if (!this.tickInterval || !this._sliderDimensions) {
            return;
          }

          if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */

            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */

            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */

            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
          } else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
          }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

          /** @type {?} */
          var event = new MatSliderChange();
          event.source = this;
          event.value = value;
          return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_calculatePercentage",
        value: function _calculatePercentage(value) {
          return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */

      }, {
        key: "_calculateValue",
        value: function _calculateValue(percentage) {
          return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "_clamp",
        value: function _clamp(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSliderDimensions",
        value: function _getSliderDimensions() {
          return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusHostElement",
        value: function _focusHostElement(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */

      }, {
        key: "_blurHostElement",
        value: function _blurHostElement() {
          this._elementRef.nativeElement.blur();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "invert",
        get: function get() {
          return this._invert;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._max);
          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

          if (this._value === null) {
            this.value = this._min;
          }

          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */

      }, {
        key: "step",
        get: function get() {
          return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._step);

          if (this._step % 1 !== 0) {
            this._roundToDecimal =
            /** @type {?} */
            this._step.toString().split('.').pop().length;
          } // Since this could modify the label, we need to notify the change detection.


          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */

      }, {
        key: "thumbLabel",
        get: function get() {
          return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */

      }, {
        key: "tickInterval",
        get: function get() {
          return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value === 'auto') {
            this._tickInterval = 'auto';
          } else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value,
            /** @type {?} */
            this._tickInterval);
          } else {
            this._tickInterval = 0;
          }
        }
        /**
         * Value of the slider.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          // If the value needs to be read and it is still uninitialized, initialize it to the min.
          if (this._value === null) {
            this.value = this._min;
          }

          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._value) {
            /** @type {?} */
            var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.

            if (this._roundToDecimal) {
              value = parseFloat(value.toFixed(this._roundToDecimal));
            }

            this._value = value;
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the slider is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */

      }, {
        key: "displayValue",
        get: function get() {
          if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(
            /** @type {?} */
            this.value);
          } // Note that this could be improved further by rounding something like 0.999 to 1 or
          // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
          // every change detection cycle.


          if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
          }

          return this.value || 0;
        }
      }, {
        key: "percent",
        get: function get() {
          return this._clamp(this._percent);
        }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */

      }, {
        key: "_invertAxis",
        get: function get() {
          // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
          // top. However from a y-axis standpoint this is inverted.
          return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */

      }, {
        key: "_isMinValue",
        get: function get() {
          return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */

      }, {
        key: "_thumbGap",
        get: function get() {
          if (this.disabled) {
            return DISABLED_THUMB_GAP;
          }

          if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
          }

          return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */

      }, {
        key: "_trackBackgroundStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '-' : '';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */

      }, {
        key: "_trackFillStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(this.percent, ", 1") : "".concat(this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '' : '-';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */

      }, {
        key: "_ticksContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
          /** @type {?} */

          var offset = this._tickIntervalPercent / 2 * 100;
          return {
            'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
          };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */

      }, {
        key: "_ticksStyles",
        get: function get() {
          /** @type {?} */
          var tickSize = this._tickIntervalPercent * 100;
          /** @type {?} */

          var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
          // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
          // ticks 180 degrees so we're really cutting off the end edge abd not the start.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
          /** @type {?} */

          var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
          /** @type {?} */

          var styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
          };

          if (this._isMinValue && this._thumbGap) {
            /** @type {?} */
            var side = this.vertical ? this._invertAxis ? 'Bottom' : 'Top' : this._invertAxis ? 'Right' : 'Left';
            styles["padding".concat(side)] = "".concat(this._thumbGap, "px");
          }

          return styles;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_thumbContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
          /** @type {?} */

          var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
          return {
            'transform': "translate".concat(axis, "(-").concat(offset, "%)")
          };
        }
      }]);

      return MatSlider;
    }(_MatSliderMixinBase);

    MatSlider.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-slider',
        exportAs: 'matSlider',
        providers: [MAT_SLIDER_VALUE_ACCESSOR],
        host: {
          '(focus)': '_onFocus()',
          '(blur)': '_onBlur()',
          '(mousedown)': '_onMousedown($event)',
          '(keydown)': '_onKeydown($event)',
          '(keyup)': '_onKeyup()',
          '(mouseenter)': '_onMouseenter()',
          '(slide)': '_onSlide($event)',
          '(slideend)': '_onSlideEnd()',
          '(slidestart)': '_onSlideStart($event)',
          // On Safari starting to slide temporarily triggers text selection mode which
          // show the wrong cursor. We prevent it by stopping the `selectstart` event.
          '(selectstart)': '$event.preventDefault()',
          'class': 'mat-slider',
          'role': 'slider',
          '[tabIndex]': 'tabIndex',
          '[attr.aria-disabled]': 'disabled',
          '[attr.aria-valuemax]': 'max',
          '[attr.aria-valuemin]': 'min',
          '[attr.aria-valuenow]': 'value',
          '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
          '[class.mat-slider-disabled]': 'disabled',
          '[class.mat-slider-has-ticks]': 'tickInterval',
          '[class.mat-slider-horizontal]': '!vertical',
          '[class.mat-slider-axis-inverted]': '_invertAxis',
          // Class binding which is only used by the test harness as there is no other
          // way for the harness to detect if mouse coordinates need to be inverted.
          '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
          '[class.mat-slider-sliding]': '_isSliding',
          '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
          '[class.mat-slider-vertical]': 'vertical',
          '[class.mat-slider-min-value]': '_isMinValue',
          '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
        },
        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper><div class=\"mat-slider-track-wrapper\"><div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div><div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div></div><div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\"><div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div></div><div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\"><div class=\"mat-slider-focus-ring\"></div><div class=\"mat-slider-thumb\"></div><div class=\"mat-slider-thumb-label\"><span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span></div></div></div>",
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider.mat-slider-sliding:not(.mat-slider-disabled),.mat-slider:not(.mat-slider-disabled):active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"],
        inputs: ['disabled', 'color', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatSlider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatSlider.propDecorators = {
      invert: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      thumbLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      tickInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _sliderWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['sliderWrapper', {
          static: false
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSliderModule = function MatSliderModule() {
      _classCallCheck(this, MatSliderModule);
    };

    MatSliderModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
        exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
        declarations: [MatSlider],
        providers: [{
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"],
          useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"]
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=slider.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e-es5.js.map