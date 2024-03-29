function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-documentation-documentation-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-home.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneHomeJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports.default = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMoreVertJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports.default = data;
    /***/
  },

  /***/
  "./node_modules/ngx-showdown/fesm2015/ngx-showdown.js":
  /*!************************************************************!*\
    !*** ./node_modules/ngx-showdown/fesm2015/ngx-showdown.js ***!
    \************************************************************/

  /*! exports provided: ShowdownComponent, ShowdownConfig, ShowdownConverter, ShowdownModule, ShowdownPipe, SourceDirective, ɵ0 */

  /***/
  function node_modulesNgxShowdownFesm2015NgxShowdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowdownComponent", function () {
      return ShowdownComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowdownConfig", function () {
      return ShowdownConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowdownConverter", function () {
      return ShowdownConverter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowdownModule", function () {
      return ShowdownModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowdownPipe", function () {
      return ShowdownPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceDirective", function () {
      return SourceDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! showdown */
    "./node_modules/showdown/dist/showdown.js");
    /* harmony import */


    var showdown__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
     * @internal
     */


    var _ref = {},
        hasOwnProperty = _ref.hasOwnProperty;
    /**
     * A config provider
     *
     * ### Example
     *
     * Set custom config provider.
     * ```typescript
     * import { NgModel } from '@angular/core';
     * import { ShowdownModule, ShowdownConfig } from 'ngx-showdown';
     *
     * export class MyShowdownConfig extends ShowdownConfig {
     *   emoji = true;
     *   underscore = false;
     *   flavor = 'github';
     * }
     *
     * @NgModel({
     *   imports: [ ShowdownModule ],
     *   providers: [ {provide: ShowdownConfig, useClass: MyConverterOptions} ]
     * })
     * export class AppModule {}
     * ```
     */

    var ShowdownConfig =
    /*#__PURE__*/
    function () {
      function ShowdownConfig(options) {
        _classCallCheck(this, ShowdownConfig);

        this.merge(options);
      }
      /**
       * Merge options
       *
       * @param options - A options object to merge.
       */


      _createClass(ShowdownConfig, [{
        key: "merge",
        value: function merge(options) {
          for (var key in options) {
            if (hasOwnProperty.call(options, key)) {
              this[key] = options[key];
            }
          }
        }
      }]);

      return ShowdownConfig;
    }();

    ShowdownConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ShowdownConfig);
    /**
     * @internal
     */

    var _ref2 = {},
        hasOwnProperty$1 = _ref2.hasOwnProperty;
    /**
     * ### Example
     *
     * Setup as standalone
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownConverter } from 'ngx-showdown';
     *
     * @NgModule({
     *   providers: [ ShowdownConverter ];
     * })
     * export class AppModule {}
     * ```
     *
     * Use the converter instance.
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { ShowdownConverter } from 'ngx-showdown';
     *
     * @Injectable()
     * export class SomeService {
     *   constructor(showdownConverter: ShowdownConverter) {
     *     let markdown: string = "**Some**";
     *     let html: string = showdownConverter.makeHtml(markdown);
     *     console.log(`some:\nmarkdown: ${markdown)\nhtml: ${html}\n`);
     *   }
     * }
     * ```
     */

    var ShowdownConverter =
    /*#__PURE__*/
    function (_showdown__WEBPACK_IM) {
      _inherits(ShowdownConverter, _showdown__WEBPACK_IM);

      function ShowdownConverter(config) {
        var _this;

        _classCallCheck(this, ShowdownConverter);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ShowdownConverter).call(this, config && {
          extensions: config.extensions
        }));

        _this.setFlavor(config && config.flavor || 'vanilla');

        _this.setOptions(config);

        return _this;
      }
      /**
       * Set options to the converter.
       *
       * @param options - A options object to set.
       */


      _createClass(ShowdownConverter, [{
        key: "setOptions",
        value: function setOptions(options) {
          for (var key in options) {
            if (hasOwnProperty$1.call(options, key)) {
              this.setOption(key, options[key]);
            }
          }
        }
      }]);

      return ShowdownConverter;
    }(showdown__WEBPACK_IMPORTED_MODULE_2__["Converter"]);

    ShowdownConverter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ShowdownConfig])], ShowdownConverter);
    /**
     * @internal
     */

    var MAP_OPTION = {
      '': true,
      true: true,
      false: false
    };
    /**
     * @internal
     */

    var _toOption = function _toOption(value) {
      return MAP_OPTION.hasOwnProperty(value) ? MAP_OPTION[value] : value;
    };

    var ɵ0 = _toOption;
    /**
     * The options keys for the dynamic properties set
     * @internal
     */

    var OPTIONS_PROPERTIES_KEYS = Object.keys(Object(showdown__WEBPACK_IMPORTED_MODULE_2__["getDefaultOptions"])());
    /**
     * A angular component for render `Markdown` to `HTML`.
     *
     * ### Example
     *
     * Setup as standalone
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownComponent } from 'ngx-showdown';
     *
     * @NgModule({
     *   declarations: [ ShowdownComponent ];
     * })
     * export class AppModule {}
     * ```
     *
     * Bind markdown value and options object
     * ```typescript
     * import { Component } from '@angular/core';
     * import * as Showdown from 'showdown';
     *
     * @Component({
     *   selector: 'some',
     *   template: '<showdown [value]="text" [options]="options"></showdown>'
     * })
     * export class SomeComponent {
     *   text: string = `
     *     # Some header
     *     ---
     *     **Some bold**
     *   `;
     *   options: Showdown.ShowdownOptions = { smartIndentationFix: true };
     *   // ...
     * }
     * ```
     * Bind single option (it have properties for all showdown options).
     * ```html
     * <showdown emoji="true"  noHeaderId># Some text :+1:</showdown>
     * ```
     *
     * Set static markdown value.
     * ```html
     * <showdown value="___Some static value___" underline></showdown>
     * ```
     *
     * Use as directive on anther element.
     * ```html
     * <div showdown="# Div Element" headerLevelStart="2"></div>
     * ```
     *
     * Static markdown value in the element content.
     * ```html
     * <div>
     *    <showdown smartIndentationFix>
     *       # List:
     *       * a
     *            * A
     *       * b
     *    </showdown>
     * </div>
     * ```
     *
     * Set template reference variable.
     * ```html
     * <showdown #sd></showdown>
     * ```
     * Or
     * ```html
     * <div showdown #sd="showdown"></div>
     * ```
     */

    var ShowdownComponent =
    /*#__PURE__*/
    function (_ShowdownConverter) {
      _inherits(ShowdownComponent, _ShowdownConverter);

      function ShowdownComponent(_elementRef, _domSanitizer, config) {
        var _this2;

        _classCallCheck(this, ShowdownComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ShowdownComponent).call(this, config));
        _this2._elementRef = _elementRef;
        _this2._domSanitizer = _domSanitizer;
        return _this2;
      }
      /**
       * Input alias to `value`.
       *
       * __Example :__
       *
       * ```html
       * <div [showdown]="# Some Header"></div>
       * ```
       *
       * Equivalent to
       * ```html
       * <showdown [value]="# Some Header"></showdown>
       * ```
       */


      _createClass(ShowdownComponent, [{
        key: "ngOnInit",

        /**
         * A angular lifecycle method, Use on init to check if it `content` type and load the element `content` to `value`.
         * @internal
         */
        value: function ngOnInit() {
          if (this.value === undefined && this._elementRef.nativeElement.innerHTML.trim() !== '') {
            this.render(this._elementRef.nativeElement.innerHTML);
          }
        }
        /**
         * A angular lifecycle method, Use to call to render method after changes.
         * @internal
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.render();
        }
        /**
         * Convert the markdown value of {@link ShowdownComponent#value} to html and set the html result to the element content.
         *
         * __Example :__
         *
         * ```html
         * <textarea #textarea (change)="showdown.render(textarea.value)"/># Some Header</textarea>
         * <showdown #showdown></showdown>
         * ```
         * @param value - A markdown value to render (it will override the current value of `ShowdownComponent#value`)
         */

      }, {
        key: "render",
        value: function render(value) {
          if (typeof value === 'string') {
            this.value = value;
          }

          if (typeof this.value === 'string') {
            var result = this.makeHtml(this.value);

            if (this._sanitize) {
              result = this._domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, result);
            }

            this._elementRef.nativeElement.innerHTML = result;
          }
        }
      }, {
        key: "showdown",
        set: function set(value) {
          this.value = value;
        }
        /**
         * The showdown options of the converter.
         *
         * __Example :__
         *
         * Bind options
         * ```typescript
         * import { Component } from '@angular/core';
         * import * as Showdown from 'showdown';
         *
         * @Component({
         *   selector: `some`,
         *   template: `<showdown [options]="options"># Some Header<showdown>`
         * })
         * export class SomeComponent {
         *   options: Showdown.ShowdownOptions = {headerLevelStart: 3};
         *   // ...
         * }
         * ```
         * Or
         * ```html
         * <showdown [options]="{smartIndentationFix: true}"> # Indentation Fix<showdown>
         * ```
         */

      }, {
        key: "options",
        get: function get() {
          return this.getOptions();
        },
        set: function set(options) {
          this.setOptions(options);
        }
        /**
         * Enables html sanitize, it will sanitize the converter html output by [`DomSanitizer`](https://angular.io/api/platform-browser/DomSanitizer#sanitize).
         *
         * __Example :__
         *
         * ```typescript
         * import { Component } from '@angular/core';
         *
         * @Component({
         *   selector: 'some',
         *   styles: [`.box { width: 95%; padding: 5px; border: 1px solid black;}`],
         *   template: `
         *     <h3>Input</h3>
         *     <textarea class="box" [(ngModel)]="text"></textarea>
         *     <input type="checkbox" [(ngModel)]="sanitize"/> <b>Sanitize</b>
         *     <h3>Markdown</h3>
         *     <pre class="box"><code>{{ text }}</code></pre>
         *     <h3>Preview</h3>
         *     <div class="box">
         *       <showdown #sd [value]="text" [sanitize]="sanitize"></showdown>
         *     </div>
         *   `;
         * })
         * export class SomeComponent {
         *    text: string = `# A cool link
         * <a href="javascript:alert('Hello!')">click me</a>`;
         * }
         * ```
         */

      }, {
        key: "sanitize",
        set: function set(sanitize) {
          this._sanitize = _toOption(sanitize);
        }
      }]);

      return ShowdownComponent;
    }(ShowdownConverter);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ShowdownComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], ShowdownComponent.prototype, "showdown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ShowdownComponent.prototype, "options", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], ShowdownComponent.prototype, "sanitize", null);
    ShowdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'showdown,[showdown]',
      template: '<ng-content></ng-content>',
      exportAs: 'showdown',
      inputs: OPTIONS_PROPERTIES_KEYS
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], ShowdownConfig])], ShowdownComponent); // Define options properties setter for angular directive and direct access

    var _loop = function _loop() {
      var key = _OPTIONS_PROPERTIES_K[_i];
      Object.defineProperty(ShowdownComponent.prototype, key, {
        set: function set(value) {
          this.setOption(key, _toOption(value));
        },
        configurable: true
      });
    };

    for (var _i = 0, _OPTIONS_PROPERTIES_K = OPTIONS_PROPERTIES_KEYS; _i < _OPTIONS_PROPERTIES_K.length; _i++) {
      _loop();
    }
    /**
     * A angular directive to `ShowdownComponent` for make http request of markdown content.
     *
     * ### Example
     *
     * Setup as standalone
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { HttpClientModule } from '@angular/common/http';
     * import { ShowdownComponent, SourceDirective } from 'ngx-showdown';
     *
     * @NgModule({
     *    declarations: [ ShowdownComponent, SourceDirective ],
     *    imports: [ HttpClientModule ]
     * })
     * export class AppModule {}
     * ```
     *
     * Bind url `src` directive
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *     selector: 'some',
     *     template: '<showdown [src]="url" smartIndentationFix>**Loading...**</showdown>
     * })
     * class SomeComponent {
     *     url: string = 'https://unpkg.com/ngx-showdown/README.md';
     *     // ...
     * }
     * ```
     *
     * Set static url
     * ```html
     * <showdown src="README.md" [options]="{noHeaderId: true}"></showdown>
     * ```
     *
     * Set template reference variable
     * ```html
     * <showdown #source="source" src="README.md"></showdown>
     * ```
     *
     * Listening to `error` events.
     * ```html
     * <showdown #sd src="http://url.error" (error)="sd.render('# '+$event.message)"></showdown>
     * ```
     */


    var SourceDirective =
    /*#__PURE__*/
    function () {
      function SourceDirective(_showdownComponent, _http) {
        _classCallCheck(this, SourceDirective);

        this._showdownComponent = _showdownComponent;
        this._http = _http;
        /**
         * On error occur.
         *
         * __Example :__
         *
         * ```html
         * <input type="text" placeholder="url" [(ngModel)]="url"/>
         * <showdown [src]="url" (error)="sd.render('# Error\n> '+$event.message)">**Loading...**</showdown>
         * ```
         */

        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * A angular lifecycle method, Use to call to `load` method on src init/changes
       * @internal
       */


      _createClass(SourceDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.load();
        }
        /**
         * Load the markdown content of {@link SourceDirective#src} url to {@link ShowdownComponent#value}.
         *
         * __Example :__
         *
         * ```html
         * <input type="text" #url value="source.src" placeholder="Url" />
         * <button (click)="source.load(url.value)">Load</button>
         * <showdown #source="source" src="https://unpkg.com/ngx-showdown/README.md"></showdown>
         * ```
         * @param url - A url of markdown content to load (it will override the current url of `SourceDirective#src`)
         */

      }, {
        key: "load",
        value: function load(url) {
          var _this3 = this;

          if (url) {
            this.src = url;
          }

          if (this.src) {
            this._http.get(this.src, {
              responseType: 'text'
            }).subscribe(function (response) {
              _this3._showdownComponent.render(response);
            }, function (error) {
              _this3.error.emit(error);
            });
          }
        }
      }]);

      return SourceDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SourceDirective.prototype, "src", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SourceDirective.prototype, "error", void 0);
    SourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'showdown[src],[showdown][src]',
      exportAs: 'source'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ShowdownComponent, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], SourceDirective);
    /**
     * A angular pipe to transform `Markdown` to `HTML`.
     *
     * ### Example
     *
     * Setup as standalone
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownPipe } from 'ngx-showdown';
     *
     * @NgModule({
     *   declarations: [ ShowdownPipe ];
     * })
     * export class AppModule {}
     * ```
     *
     * Transform markdown value to html.
     * ```html
     * <input type="text" placeholder="Name" [(ngModel)]="name"/>
     * <div [innerHTML]="'**Hello '+(name || 'nobody')+'!**' | showdown">
     * ```
     *
     * Transform markdown value to html with `options`.
     * ```typescript
     * import * as Showdown from 'showdown';
     *
     * @Component({
     *   selector: 'some',
     *   template: `<div innerHTML="{{ text | showdown: options }}"></div>`
     * })
     * export class SomeComponent {
     *   text: string = "__Some Underline__";
     *   options: Showdown.ShowdownOptions = { underline: true };
     *   // ...
     * }
     * ```
     */

    var ShowdownPipe =
    /*#__PURE__*/
    function (_ShowdownConverter2) {
      _inherits(ShowdownPipe, _ShowdownConverter2);

      function ShowdownPipe() {
        _classCallCheck(this, ShowdownPipe);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowdownPipe).apply(this, arguments));
      }

      _createClass(ShowdownPipe, [{
        key: "transform",

        /**
         * Transform markdown value to html.
         *
         * @param value - The markdown value to transform to html.
         * @param options - A `Showdown` converter options.
         * @returns Returns the transform result of `value` to html.
         */
        value: function transform(value, options) {
          this.setOptions(options);
          return this.makeHtml(value);
        }
      }]);

      return ShowdownPipe;
    }(ShowdownConverter);

    ShowdownPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'showdown',
      pure: false
    })], ShowdownPipe);
    var ShowdownModule_1;
    /**
     * @internal
     */

    var DECLARATIONS = [ShowdownComponent, ShowdownPipe, SourceDirective];
    /**
     * ### Example
     *
     * Add `ShowdownModule` to app `imports`.
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownModule } from 'ngx-showdown';
     *
     * @NgModule({
     *   imports: [ ShowdownModule ];
     * })
     * export class AppModule {}
     * ```
     */

    var ShowdownModule = ShowdownModule_1 =
    /*#__PURE__*/
    function () {
      function ShowdownModule() {
        _classCallCheck(this, ShowdownModule);
      }

      _createClass(ShowdownModule, null, [{
        key: "forRoot",

        /**
         * __Example :__
         *
         * Add `ShowdownModule` to app `imports` with config.
         * ```typescript
         * import { NgModule } from '@angular/core';
         * import { ShowdownModule } from 'ngx-showdown';
         *
         * @NgModule({
         *   imports: [ ShowdownModule.forRoot({
         *     smartIndentationFix: true,
         *     foo: 'bar',
         *     flavor: 'github',
         *     extensions: [ {type:'listener', listeners: {'codeBlocks.after': console.log}} ]
         *   }) ];
         * })
         * export class AppModule {}
         * ```
         * @param config - A root converter config for all converter instances.
         */
        value: function forRoot(config) {
          return {
            ngModule: ShowdownModule_1,
            providers: [{
              provide: ShowdownConfig,
              useValue: config
            }]
          };
        }
      }]);

      return ShowdownModule;
    }();

    ShowdownModule = ShowdownModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: DECLARATIONS,
      providers: [ShowdownConverter],
      exports: DECLARATIONS
    })], ShowdownModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-showdown.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSecondaryToolbarSecondaryToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\r\n\r\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\r\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\r\n     fxLayout=\"row\">\r\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n    <h1 *ngIf=\"current\"\r\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\r\n        fxFlex.xs=\"auto\">{{ current }}</h1>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/documentation.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/documentation.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDocumentationDocumentationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout>\r\n\r\n  <vex-secondary-toolbar current=\"Documentation\">\r\n    <vex-breadcrumbs [crumbs]=\"['Documentation', 'Vex']\" fxFlex=\"auto\"></vex-breadcrumbs>\r\n\r\n    <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n    </button>\r\n  </vex-secondary-toolbar>\r\n\r\n  <vex-page-layout-content vexContainer>\r\n    <div class=\"card p-gutter relative\">\r\n      <showdown src=\"/README.md\"></showdown>\r\n    </div>\r\n  </vex-page-layout-content>\r\n</vex-page-layout>\r\n";
    /***/
  },

  /***/
  "./node_modules/showdown/dist/showdown.js":
  /*!************************************************!*\
    !*** ./node_modules/showdown/dist/showdown.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesShowdownDistShowdownJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;

    ;
    /*! showdown v 1.9.1 - 02-11-2019 */

    (function () {
      /**
       * Created by Tivie on 13-07-2015.
       */
      function getDefaultOpts(simple) {
        'use strict';

        var defaultOptions = {
          omitExtraWLInCodeBlocks: {
            defaultValue: false,
            describe: 'Omit the default extra whiteline added to code blocks',
            type: 'boolean'
          },
          noHeaderId: {
            defaultValue: false,
            describe: 'Turn on/off generated header id',
            type: 'boolean'
          },
          prefixHeaderId: {
            defaultValue: false,
            describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
            type: 'string'
          },
          rawPrefixHeaderId: {
            defaultValue: false,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: 'boolean'
          },
          ghCompatibleHeaderId: {
            defaultValue: false,
            describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
            type: 'boolean'
          },
          rawHeaderId: {
            defaultValue: false,
            describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
            type: 'boolean'
          },
          headerLevelStart: {
            defaultValue: false,
            describe: 'The header blocks level start',
            type: 'integer'
          },
          parseImgDimensions: {
            defaultValue: false,
            describe: 'Turn on/off image dimension parsing',
            type: 'boolean'
          },
          simplifiedAutoLink: {
            defaultValue: false,
            describe: 'Turn on/off GFM autolink style',
            type: 'boolean'
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: false,
            describe: 'Excludes trailing punctuation from links generated with autoLinking',
            type: 'boolean'
          },
          literalMidWordUnderscores: {
            defaultValue: false,
            describe: 'Parse midword underscores as literal underscores',
            type: 'boolean'
          },
          literalMidWordAsterisks: {
            defaultValue: false,
            describe: 'Parse midword asterisks as literal asterisks',
            type: 'boolean'
          },
          strikethrough: {
            defaultValue: false,
            describe: 'Turn on/off strikethrough support',
            type: 'boolean'
          },
          tables: {
            defaultValue: false,
            describe: 'Turn on/off tables support',
            type: 'boolean'
          },
          tablesHeaderId: {
            defaultValue: false,
            describe: 'Add an id to table headers',
            type: 'boolean'
          },
          ghCodeBlocks: {
            defaultValue: true,
            describe: 'Turn on/off GFM fenced code blocks support',
            type: 'boolean'
          },
          tasklists: {
            defaultValue: false,
            describe: 'Turn on/off GFM tasklist support',
            type: 'boolean'
          },
          smoothLivePreview: {
            defaultValue: false,
            describe: 'Prevents weird effects in live previews due to incomplete input',
            type: 'boolean'
          },
          smartIndentationFix: {
            defaultValue: false,
            description: 'Tries to smartly fix indentation in es6 strings',
            type: 'boolean'
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: false,
            description: 'Disables the requirement of indenting nested sublists by 4 spaces',
            type: 'boolean'
          },
          simpleLineBreaks: {
            defaultValue: false,
            description: 'Parses simple line breaks as <br> (GFM Style)',
            type: 'boolean'
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: false,
            description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
            type: 'boolean'
          },
          ghMentions: {
            defaultValue: false,
            description: 'Enables github @mentions',
            type: 'boolean'
          },
          ghMentionsLink: {
            defaultValue: 'https://github.com/{u}',
            description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
            type: 'string'
          },
          encodeEmails: {
            defaultValue: true,
            description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
            type: 'boolean'
          },
          openLinksInNewWindow: {
            defaultValue: false,
            description: 'Open all links in new windows',
            type: 'boolean'
          },
          backslashEscapesHTMLTags: {
            defaultValue: false,
            description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
            type: 'boolean'
          },
          emoji: {
            defaultValue: false,
            description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
            type: 'boolean'
          },
          underline: {
            defaultValue: false,
            description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
            type: 'boolean'
          },
          completeHTMLDocument: {
            defaultValue: false,
            description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
            type: 'boolean'
          },
          metadata: {
            defaultValue: false,
            description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
            type: 'boolean'
          },
          splitAdjacentBlockquotes: {
            defaultValue: false,
            description: 'Split adjacent blockquote blocks',
            type: 'boolean'
          }
        };

        if (simple === false) {
          return JSON.parse(JSON.stringify(defaultOptions));
        }

        var ret = {};

        for (var opt in defaultOptions) {
          if (defaultOptions.hasOwnProperty(opt)) {
            ret[opt] = defaultOptions[opt].defaultValue;
          }
        }

        return ret;
      }

      function allOptionsOn() {
        'use strict';

        var options = getDefaultOpts(true),
            ret = {};

        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            ret[opt] = true;
          }
        }

        return ret;
      }
      /**
       * Created by Tivie on 06-01-2015.
       */
      // Private properties


      var showdown = {},
          parsers = {},
          extensions = {},
          globalOptions = getDefaultOpts(true),
          setFlavor = 'vanilla',
          flavor = {
        github: {
          omitExtraWLInCodeBlocks: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          disableForced4SpacesIndentedSublists: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghCompatibleHeaderId: true,
          ghMentions: true,
          backslashEscapesHTMLTags: true,
          emoji: true,
          splitAdjacentBlockquotes: true
        },
        original: {
          noHeaderId: true,
          ghCodeBlocks: false
        },
        ghost: {
          omitExtraWLInCodeBlocks: true,
          parseImgDimensions: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          smoothLivePreview: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghMentions: false,
          encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
      };
      /**
       * helper namespace
       * @type {{}}
       */

      showdown.helper = {};
      /**
       * TODO LEGACY SUPPORT CODE
       * @type {{}}
       */

      showdown.extensions = {};
      /**
       * Set a global option
       * @static
       * @param {string} key
       * @param {*} value
       * @returns {showdown}
       */

      showdown.setOption = function (key, value) {
        'use strict';

        globalOptions[key] = value;
        return this;
      };
      /**
       * Get a global option
       * @static
       * @param {string} key
       * @returns {*}
       */


      showdown.getOption = function (key) {
        'use strict';

        return globalOptions[key];
      };
      /**
       * Get the global options
       * @static
       * @returns {{}}
       */


      showdown.getOptions = function () {
        'use strict';

        return globalOptions;
      };
      /**
       * Reset global options to the default values
       * @static
       */


      showdown.resetOptions = function () {
        'use strict';

        globalOptions = getDefaultOpts(true);
      };
      /**
       * Set the flavor showdown should use as default
       * @param {string} name
       */


      showdown.setFlavor = function (name) {
        'use strict';

        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + ' flavor was not found');
        }

        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;

        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            globalOptions[option] = preset[option];
          }
        }
      };
      /**
       * Get the currently set flavor
       * @returns {string}
       */


      showdown.getFlavor = function () {
        'use strict';

        return setFlavor;
      };
      /**
       * Get the options of a specified flavor. Returns undefined if the flavor was not found
       * @param {string} name Name of the flavor
       * @returns {{}|undefined}
       */


      showdown.getFlavorOptions = function (name) {
        'use strict';

        if (flavor.hasOwnProperty(name)) {
          return flavor[name];
        }
      };
      /**
       * Get the default options
       * @static
       * @param {boolean} [simple=true]
       * @returns {{}}
       */


      showdown.getDefaultOptions = function (simple) {
        'use strict';

        return getDefaultOpts(simple);
      };
      /**
       * Get or set a subParser
       *
       * subParser(name)       - Get a registered subParser
       * subParser(name, func) - Register a subParser
       * @static
       * @param {string} name
       * @param {function} [func]
       * @returns {*}
       */


      showdown.subParser = function (name, func) {
        'use strict';

        if (showdown.helper.isString(name)) {
          if (typeof func !== 'undefined') {
            parsers[name] = func;
          } else {
            if (parsers.hasOwnProperty(name)) {
              return parsers[name];
            } else {
              throw Error('SubParser named ' + name + ' not registered!');
            }
          }
        }
      };
      /**
       * Gets or registers an extension
       * @static
       * @param {string} name
       * @param {object|function=} ext
       * @returns {*}
       */


      showdown.extension = function (name, ext) {
        'use strict';

        if (!showdown.helper.isString(name)) {
          throw Error('Extension \'name\' must be a string');
        }

        name = showdown.helper.stdExtName(name); // Getter

        if (showdown.helper.isUndefined(ext)) {
          if (!extensions.hasOwnProperty(name)) {
            throw Error('Extension named ' + name + ' is not registered!');
          }

          return extensions[name]; // Setter
        } else {
          // Expand extension if it's wrapped in a function
          if (typeof ext === 'function') {
            ext = ext();
          } // Ensure extension is an array


          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }

          var validExtension = validate(ext, name);

          if (validExtension.valid) {
            extensions[name] = ext;
          } else {
            throw Error(validExtension.error);
          }
        }
      };
      /**
       * Gets all extensions registered
       * @returns {{}}
       */


      showdown.getAllExtensions = function () {
        'use strict';

        return extensions;
      };
      /**
       * Remove an extension
       * @param {string} name
       */


      showdown.removeExtension = function (name) {
        'use strict';

        delete extensions[name];
      };
      /**
       * Removes all extensions
       */


      showdown.resetExtensions = function () {
        'use strict';

        extensions = {};
      };
      /**
       * Validate extension
       * @param {array} extension
       * @param {string} name
       * @returns {{valid: boolean, error: string}}
       */


      function validate(extension, name) {
        'use strict';

        var errMsg = name ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
            ret = {
          valid: true,
          error: ''
        };

        if (!showdown.helper.isArray(extension)) {
          extension = [extension];
        }

        for (var i = 0; i < extension.length; ++i) {
          var baseMsg = errMsg + ' sub-extension ' + i + ': ',
              ext = extension[i];

          if (typeof ext !== 'object') {
            ret.valid = false;
            ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
            return ret;
          }

          if (!showdown.helper.isString(ext.type)) {
            ret.valid = false;
            ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
            return ret;
          }

          var type = ext.type = ext.type.toLowerCase(); // normalize extension type

          if (type === 'language') {
            type = ext.type = 'lang';
          }

          if (type === 'html') {
            type = ext.type = 'output';
          }

          if (type !== 'lang' && type !== 'output' && type !== 'listener') {
            ret.valid = false;
            ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
            return ret;
          }

          if (type === 'listener') {
            if (showdown.helper.isUndefined(ext.listeners)) {
              ret.valid = false;
              ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
              return ret;
            }
          } else {
            if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
              ret.valid = false;
              ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
              return ret;
            }
          }

          if (ext.listeners) {
            if (typeof ext.listeners !== 'object') {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
              return ret;
            }

            for (var ln in ext.listeners) {
              if (ext.listeners.hasOwnProperty(ln)) {
                if (typeof ext.listeners[ln] !== 'function') {
                  ret.valid = false;
                  ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + ' must be a function but ' + typeof ext.listeners[ln] + ' given';
                  return ret;
                }
              }
            }
          }

          if (ext.filter) {
            if (typeof ext.filter !== 'function') {
              ret.valid = false;
              ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
              return ret;
            }
          } else if (ext.regex) {
            if (showdown.helper.isString(ext.regex)) {
              ext.regex = new RegExp(ext.regex, 'g');
            }

            if (!(ext.regex instanceof RegExp)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
              return ret;
            }

            if (showdown.helper.isUndefined(ext.replace)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
              return ret;
            }
          }
        }

        return ret;
      }
      /**
       * Validate extension
       * @param {object} ext
       * @returns {boolean}
       */


      showdown.validateExtension = function (ext) {
        'use strict';

        var validateExtension = validate(ext, null);

        if (!validateExtension.valid) {
          console.warn(validateExtension.error);
          return false;
        }

        return true;
      };
      /**
       * showdownjs helper functions
       */


      if (!showdown.hasOwnProperty('helper')) {
        showdown.helper = {};
      }
      /**
       * Check if var is string
       * @static
       * @param {string} a
       * @returns {boolean}
       */


      showdown.helper.isString = function (a) {
        'use strict';

        return typeof a === 'string' || a instanceof String;
      };
      /**
       * Check if var is a function
       * @static
       * @param {*} a
       * @returns {boolean}
       */


      showdown.helper.isFunction = function (a) {
        'use strict';

        var getType = {};
        return a && getType.toString.call(a) === '[object Function]';
      };
      /**
       * isArray helper function
       * @static
       * @param {*} a
       * @returns {boolean}
       */


      showdown.helper.isArray = function (a) {
        'use strict';

        return Array.isArray(a);
      };
      /**
       * Check if value is undefined
       * @static
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
       */


      showdown.helper.isUndefined = function (value) {
        'use strict';

        return typeof value === 'undefined';
      };
      /**
       * ForEach helper function
       * Iterates over Arrays and Objects (own properties only)
       * @static
       * @param {*} obj
       * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
       */


      showdown.helper.forEach = function (obj, callback) {
        'use strict'; // check if obj is defined

        if (showdown.helper.isUndefined(obj)) {
          throw new Error('obj param is required');
        }

        if (showdown.helper.isUndefined(callback)) {
          throw new Error('callback param is required');
        }

        if (!showdown.helper.isFunction(callback)) {
          throw new Error('callback param must be a function/closure');
        }

        if (typeof obj.forEach === 'function') {
          obj.forEach(callback);
        } else if (showdown.helper.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i, obj);
          }
        } else if (typeof obj === 'object') {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              callback(obj[prop], prop, obj);
            }
          }
        } else {
          throw new Error('obj does not seem to be an array or an iterable object');
        }
      };
      /**
       * Standardidize extension name
       * @static
       * @param {string} s extension name
       * @returns {string}
       */


      showdown.helper.stdExtName = function (s) {
        'use strict';

        return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
      };

      function escapeCharactersCallback(wholeMatch, m1) {
        'use strict';

        var charCodeToEscape = m1.charCodeAt(0);
        return '¨E' + charCodeToEscape + 'E';
      }
      /**
       * Callback used to escape characters when passing through String.replace
       * @static
       * @param {string} wholeMatch
       * @param {string} m1
       * @returns {string}
       */


      showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
      /**
       * Escape characters in a string
       * @static
       * @param {string} text
       * @param {string} charsToEscape
       * @param {boolean} afterBackslash
       * @returns {XML|string|void|*}
       */

      showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
        'use strict'; // First we have to escape the escape characters so that
        // we can build a character class out of them

        var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

        if (afterBackslash) {
          regexString = '\\\\' + regexString;
        }

        var regex = new RegExp(regexString, 'g');
        text = text.replace(regex, escapeCharactersCallback);
        return text;
      };
      /**
       * Unescape HTML entities
       * @param txt
       * @returns {string}
       */


      showdown.helper.unescapeHTMLEntities = function (txt) {
        'use strict';

        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      };

      var rgxFindMatchPos = function rgxFindMatchPos(str, left, right, flags) {
        'use strict';

        var f = flags || '',
            g = f.indexOf('g') > -1,
            x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
            l = new RegExp(left, f.replace(/g/g, '')),
            pos = [],
            t,
            s,
            m,
            start,
            end;

        do {
          t = 0;

          while (m = x.exec(str)) {
            if (l.test(m[0])) {
              if (!t++) {
                s = x.lastIndex;
                start = s - m[0].length;
              }
            } else if (t) {
              if (! --t) {
                end = m.index + m[0].length;
                var obj = {
                  left: {
                    start: start,
                    end: s
                  },
                  match: {
                    start: s,
                    end: m.index
                  },
                  right: {
                    start: m.index,
                    end: end
                  },
                  wholeMatch: {
                    start: start,
                    end: end
                  }
                };
                pos.push(obj);

                if (!g) {
                  return pos;
                }
              }
            }
          }
        } while (t && (x.lastIndex = s));

        return pos;
      };
      /**
       * matchRecursiveRegExp
       *
       * (c) 2007 Steven Levithan <stevenlevithan.com>
       * MIT License
       *
       * Accepts a string to search, a left and right format delimiter
       * as regex patterns, and optional regex flags. Returns an array
       * of matches, allowing nested instances of left/right delimiters.
       * Use the "g" flag to return all matches, otherwise only the
       * first is returned. Be careful to ensure that the left and
       * right format delimiters produce mutually exclusive matches.
       * Backreferences are not supported within the right delimiter
       * due to how it is internally combined with the left delimiter.
       * When matching strings whose format delimiters are unbalanced
       * to the left or right, the output is intentionally as a
       * conventional regex library with recursion support would
       * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
       * "<" and ">" as the delimiters (both strings contain a single,
       * balanced instance of "<x>").
       *
       * examples:
       * matchRecursiveRegExp("test", "\\(", "\\)")
       * returns: []
       * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
       * returns: ["t<<e>><s>", ""]
       * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
       * returns: ["test"]
       */


      showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
        'use strict';

        var matchPos = rgxFindMatchPos(str, left, right, flags),
            results = [];

        for (var i = 0; i < matchPos.length; ++i) {
          results.push([str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)]);
        }

        return results;
      };
      /**
       *
       * @param {string} str
       * @param {string|function} replacement
       * @param {string} left
       * @param {string} right
       * @param {string} flags
       * @returns {string}
       */


      showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
        'use strict';

        if (!showdown.helper.isFunction(replacement)) {
          var repStr = replacement;

          replacement = function replacement() {
            return repStr;
          };
        }

        var matchPos = rgxFindMatchPos(str, left, right, flags),
            finalStr = str,
            lng = matchPos.length;

        if (lng > 0) {
          var bits = [];

          if (matchPos[0].wholeMatch.start !== 0) {
            bits.push(str.slice(0, matchPos[0].wholeMatch.start));
          }

          for (var i = 0; i < lng; ++i) {
            bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));

            if (i < lng - 1) {
              bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
          }

          if (matchPos[lng - 1].wholeMatch.end < str.length) {
            bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
          }

          finalStr = bits.join('');
        }

        return finalStr;
      };
      /**
       * Returns the index within the passed String object of the first occurrence of the specified regex,
       * starting the search at fromIndex. Returns -1 if the value is not found.
       *
       * @param {string} str string to search
       * @param {RegExp} regex Regular expression to search
       * @param {int} [fromIndex = 0] Index to start the search
       * @returns {Number}
       * @throws InvalidArgumentError
       */


      showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
        'use strict';

        if (!showdown.helper.isString(str)) {
          throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
        }

        if (regex instanceof RegExp === false) {
          throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
        }

        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
      };
      /**
       * Splits the passed string object at the defined index, and returns an array composed of the two substrings
       * @param {string} str string to split
       * @param {int} index index to split string at
       * @returns {[string,string]}
       * @throws InvalidArgumentError
       */


      showdown.helper.splitAtIndex = function (str, index) {
        'use strict';

        if (!showdown.helper.isString(str)) {
          throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
        }

        return [str.substring(0, index), str.substring(index)];
      };
      /**
       * Obfuscate an e-mail address through the use of Character Entities,
       * transforming ASCII characters into their equivalent decimal or hex entities.
       *
       * Since it has a random component, subsequent calls to this function produce different results
       *
       * @param {string} mail
       * @returns {string}
       */


      showdown.helper.encodeEmailAddress = function (mail) {
        'use strict';

        var encode = [function (ch) {
          return '&#' + ch.charCodeAt(0) + ';';
        }, function (ch) {
          return '&#x' + ch.charCodeAt(0).toString(16) + ';';
        }, function (ch) {
          return ch;
        }];
        mail = mail.replace(/./g, function (ch) {
          if (ch === '@') {
            // this *must* be encoded. I insist.
            ch = encode[Math.floor(Math.random() * 2)](ch);
          } else {
            var r = Math.random(); // roughly 10% raw, 45% hex, 45% dec

            ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
          }

          return ch;
        });
        return mail;
      };
      /**
       *
       * @param str
       * @param targetLength
       * @param padString
       * @returns {string}
       */


      showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        'use strict';
        /*jshint bitwise: false*/
        // eslint-disable-next-line space-infix-ops

        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

        /*jshint bitwise: true*/

        padString = String(padString || ' ');

        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;

          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
          }

          return String(str) + padString.slice(0, targetLength);
        }
      };
      /**
       * POLYFILLS
       */
      // use this instead of builtin is undefined for IE8 compatibility


      if (typeof console === 'undefined') {
        console = {
          warn: function warn(msg) {
            'use strict';

            alert(msg);
          },
          log: function log(msg) {
            'use strict';

            alert(msg);
          },
          error: function error(msg) {
            'use strict';

            throw msg;
          }
        };
      }
      /**
       * Common regexes.
       * We declare some common regexes to improve performance
       */


      showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      };
      /**
       * EMOJIS LIST
       */

      showdown.helper.emojis = {
        '+1': "\uD83D\uDC4D",
        '-1': "\uD83D\uDC4E",
        '100': "\uD83D\uDCAF",
        '1234': "\uD83D\uDD22",
        '1st_place_medal': "\uD83E\uDD47",
        '2nd_place_medal': "\uD83E\uDD48",
        '3rd_place_medal': "\uD83E\uDD49",
        '8ball': "\uD83C\uDFB1",
        'a': "\uD83C\uDD70\uFE0F",
        'ab': "\uD83C\uDD8E",
        'abc': "\uD83D\uDD24",
        'abcd': "\uD83D\uDD21",
        'accept': "\uD83C\uDE51",
        'aerial_tramway': "\uD83D\uDEA1",
        'airplane': "\u2708\uFE0F",
        'alarm_clock': "\u23F0",
        'alembic': "\u2697\uFE0F",
        'alien': "\uD83D\uDC7D",
        'ambulance': "\uD83D\uDE91",
        'amphora': "\uD83C\uDFFA",
        'anchor': "\u2693\uFE0F",
        'angel': "\uD83D\uDC7C",
        'anger': "\uD83D\uDCA2",
        'angry': "\uD83D\uDE20",
        'anguished': "\uD83D\uDE27",
        'ant': "\uD83D\uDC1C",
        'apple': "\uD83C\uDF4E",
        'aquarius': "\u2652\uFE0F",
        'aries': "\u2648\uFE0F",
        'arrow_backward': "\u25C0\uFE0F",
        'arrow_double_down': "\u23EC",
        'arrow_double_up': "\u23EB",
        'arrow_down': "\u2B07\uFE0F",
        'arrow_down_small': "\uD83D\uDD3D",
        'arrow_forward': "\u25B6\uFE0F",
        'arrow_heading_down': "\u2935\uFE0F",
        'arrow_heading_up': "\u2934\uFE0F",
        'arrow_left': "\u2B05\uFE0F",
        'arrow_lower_left': "\u2199\uFE0F",
        'arrow_lower_right': "\u2198\uFE0F",
        'arrow_right': "\u27A1\uFE0F",
        'arrow_right_hook': "\u21AA\uFE0F",
        'arrow_up': "\u2B06\uFE0F",
        'arrow_up_down': "\u2195\uFE0F",
        'arrow_up_small': "\uD83D\uDD3C",
        'arrow_upper_left': "\u2196\uFE0F",
        'arrow_upper_right': "\u2197\uFE0F",
        'arrows_clockwise': "\uD83D\uDD03",
        'arrows_counterclockwise': "\uD83D\uDD04",
        'art': "\uD83C\uDFA8",
        'articulated_lorry': "\uD83D\uDE9B",
        'artificial_satellite': "\uD83D\uDEF0",
        'astonished': "\uD83D\uDE32",
        'athletic_shoe': "\uD83D\uDC5F",
        'atm': "\uD83C\uDFE7",
        'atom_symbol': "\u269B\uFE0F",
        'avocado': "\uD83E\uDD51",
        'b': "\uD83C\uDD71\uFE0F",
        'baby': "\uD83D\uDC76",
        'baby_bottle': "\uD83C\uDF7C",
        'baby_chick': "\uD83D\uDC24",
        'baby_symbol': "\uD83D\uDEBC",
        'back': "\uD83D\uDD19",
        'bacon': "\uD83E\uDD53",
        'badminton': "\uD83C\uDFF8",
        'baggage_claim': "\uD83D\uDEC4",
        'baguette_bread': "\uD83E\uDD56",
        'balance_scale': "\u2696\uFE0F",
        'balloon': "\uD83C\uDF88",
        'ballot_box': "\uD83D\uDDF3",
        'ballot_box_with_check': "\u2611\uFE0F",
        'bamboo': "\uD83C\uDF8D",
        'banana': "\uD83C\uDF4C",
        'bangbang': "\u203C\uFE0F",
        'bank': "\uD83C\uDFE6",
        'bar_chart': "\uD83D\uDCCA",
        'barber': "\uD83D\uDC88",
        'baseball': "\u26BE\uFE0F",
        'basketball': "\uD83C\uDFC0",
        'basketball_man': "\u26F9\uFE0F",
        'basketball_woman': "\u26F9\uFE0F&zwj;\u2640\uFE0F",
        'bat': "\uD83E\uDD87",
        'bath': "\uD83D\uDEC0",
        'bathtub': "\uD83D\uDEC1",
        'battery': "\uD83D\uDD0B",
        'beach_umbrella': "\uD83C\uDFD6",
        'bear': "\uD83D\uDC3B",
        'bed': "\uD83D\uDECF",
        'bee': "\uD83D\uDC1D",
        'beer': "\uD83C\uDF7A",
        'beers': "\uD83C\uDF7B",
        'beetle': "\uD83D\uDC1E",
        'beginner': "\uD83D\uDD30",
        'bell': "\uD83D\uDD14",
        'bellhop_bell': "\uD83D\uDECE",
        'bento': "\uD83C\uDF71",
        'biking_man': "\uD83D\uDEB4",
        'bike': "\uD83D\uDEB2",
        'biking_woman': "\uD83D\uDEB4&zwj;\u2640\uFE0F",
        'bikini': "\uD83D\uDC59",
        'biohazard': "\u2623\uFE0F",
        'bird': "\uD83D\uDC26",
        'birthday': "\uD83C\uDF82",
        'black_circle': "\u26AB\uFE0F",
        'black_flag': "\uD83C\uDFF4",
        'black_heart': "\uD83D\uDDA4",
        'black_joker': "\uD83C\uDCCF",
        'black_large_square': "\u2B1B\uFE0F",
        'black_medium_small_square': "\u25FE\uFE0F",
        'black_medium_square': "\u25FC\uFE0F",
        'black_nib': "\u2712\uFE0F",
        'black_small_square': "\u25AA\uFE0F",
        'black_square_button': "\uD83D\uDD32",
        'blonde_man': "\uD83D\uDC71",
        'blonde_woman': "\uD83D\uDC71&zwj;\u2640\uFE0F",
        'blossom': "\uD83C\uDF3C",
        'blowfish': "\uD83D\uDC21",
        'blue_book': "\uD83D\uDCD8",
        'blue_car': "\uD83D\uDE99",
        'blue_heart': "\uD83D\uDC99",
        'blush': "\uD83D\uDE0A",
        'boar': "\uD83D\uDC17",
        'boat': "\u26F5\uFE0F",
        'bomb': "\uD83D\uDCA3",
        'book': "\uD83D\uDCD6",
        'bookmark': "\uD83D\uDD16",
        'bookmark_tabs': "\uD83D\uDCD1",
        'books': "\uD83D\uDCDA",
        'boom': "\uD83D\uDCA5",
        'boot': "\uD83D\uDC62",
        'bouquet': "\uD83D\uDC90",
        'bowing_man': "\uD83D\uDE47",
        'bow_and_arrow': "\uD83C\uDFF9",
        'bowing_woman': "\uD83D\uDE47&zwj;\u2640\uFE0F",
        'bowling': "\uD83C\uDFB3",
        'boxing_glove': "\uD83E\uDD4A",
        'boy': "\uD83D\uDC66",
        'bread': "\uD83C\uDF5E",
        'bride_with_veil': "\uD83D\uDC70",
        'bridge_at_night': "\uD83C\uDF09",
        'briefcase': "\uD83D\uDCBC",
        'broken_heart': "\uD83D\uDC94",
        'bug': "\uD83D\uDC1B",
        'building_construction': "\uD83C\uDFD7",
        'bulb': "\uD83D\uDCA1",
        'bullettrain_front': "\uD83D\uDE85",
        'bullettrain_side': "\uD83D\uDE84",
        'burrito': "\uD83C\uDF2F",
        'bus': "\uD83D\uDE8C",
        'business_suit_levitating': "\uD83D\uDD74",
        'busstop': "\uD83D\uDE8F",
        'bust_in_silhouette': "\uD83D\uDC64",
        'busts_in_silhouette': "\uD83D\uDC65",
        'butterfly': "\uD83E\uDD8B",
        'cactus': "\uD83C\uDF35",
        'cake': "\uD83C\uDF70",
        'calendar': "\uD83D\uDCC6",
        'call_me_hand': "\uD83E\uDD19",
        'calling': "\uD83D\uDCF2",
        'camel': "\uD83D\uDC2B",
        'camera': "\uD83D\uDCF7",
        'camera_flash': "\uD83D\uDCF8",
        'camping': "\uD83C\uDFD5",
        'cancer': "\u264B\uFE0F",
        'candle': "\uD83D\uDD6F",
        'candy': "\uD83C\uDF6C",
        'canoe': "\uD83D\uDEF6",
        'capital_abcd': "\uD83D\uDD20",
        'capricorn': "\u2651\uFE0F",
        'car': "\uD83D\uDE97",
        'card_file_box': "\uD83D\uDDC3",
        'card_index': "\uD83D\uDCC7",
        'card_index_dividers': "\uD83D\uDDC2",
        'carousel_horse': "\uD83C\uDFA0",
        'carrot': "\uD83E\uDD55",
        'cat': "\uD83D\uDC31",
        'cat2': "\uD83D\uDC08",
        'cd': "\uD83D\uDCBF",
        'chains': "\u26D3",
        'champagne': "\uD83C\uDF7E",
        'chart': "\uD83D\uDCB9",
        'chart_with_downwards_trend': "\uD83D\uDCC9",
        'chart_with_upwards_trend': "\uD83D\uDCC8",
        'checkered_flag': "\uD83C\uDFC1",
        'cheese': "\uD83E\uDDC0",
        'cherries': "\uD83C\uDF52",
        'cherry_blossom': "\uD83C\uDF38",
        'chestnut': "\uD83C\uDF30",
        'chicken': "\uD83D\uDC14",
        'children_crossing': "\uD83D\uDEB8",
        'chipmunk': "\uD83D\uDC3F",
        'chocolate_bar': "\uD83C\uDF6B",
        'christmas_tree': "\uD83C\uDF84",
        'church': "\u26EA\uFE0F",
        'cinema': "\uD83C\uDFA6",
        'circus_tent': "\uD83C\uDFAA",
        'city_sunrise': "\uD83C\uDF07",
        'city_sunset': "\uD83C\uDF06",
        'cityscape': "\uD83C\uDFD9",
        'cl': "\uD83C\uDD91",
        'clamp': "\uD83D\uDDDC",
        'clap': "\uD83D\uDC4F",
        'clapper': "\uD83C\uDFAC",
        'classical_building': "\uD83C\uDFDB",
        'clinking_glasses': "\uD83E\uDD42",
        'clipboard': "\uD83D\uDCCB",
        'clock1': "\uD83D\uDD50",
        'clock10': "\uD83D\uDD59",
        'clock1030': "\uD83D\uDD65",
        'clock11': "\uD83D\uDD5A",
        'clock1130': "\uD83D\uDD66",
        'clock12': "\uD83D\uDD5B",
        'clock1230': "\uD83D\uDD67",
        'clock130': "\uD83D\uDD5C",
        'clock2': "\uD83D\uDD51",
        'clock230': "\uD83D\uDD5D",
        'clock3': "\uD83D\uDD52",
        'clock330': "\uD83D\uDD5E",
        'clock4': "\uD83D\uDD53",
        'clock430': "\uD83D\uDD5F",
        'clock5': "\uD83D\uDD54",
        'clock530': "\uD83D\uDD60",
        'clock6': "\uD83D\uDD55",
        'clock630': "\uD83D\uDD61",
        'clock7': "\uD83D\uDD56",
        'clock730': "\uD83D\uDD62",
        'clock8': "\uD83D\uDD57",
        'clock830': "\uD83D\uDD63",
        'clock9': "\uD83D\uDD58",
        'clock930': "\uD83D\uDD64",
        'closed_book': "\uD83D\uDCD5",
        'closed_lock_with_key': "\uD83D\uDD10",
        'closed_umbrella': "\uD83C\uDF02",
        'cloud': "\u2601\uFE0F",
        'cloud_with_lightning': "\uD83C\uDF29",
        'cloud_with_lightning_and_rain': "\u26C8",
        'cloud_with_rain': "\uD83C\uDF27",
        'cloud_with_snow': "\uD83C\uDF28",
        'clown_face': "\uD83E\uDD21",
        'clubs': "\u2663\uFE0F",
        'cocktail': "\uD83C\uDF78",
        'coffee': "\u2615\uFE0F",
        'coffin': "\u26B0\uFE0F",
        'cold_sweat': "\uD83D\uDE30",
        'comet': "\u2604\uFE0F",
        'computer': "\uD83D\uDCBB",
        'computer_mouse': "\uD83D\uDDB1",
        'confetti_ball': "\uD83C\uDF8A",
        'confounded': "\uD83D\uDE16",
        'confused': "\uD83D\uDE15",
        'congratulations': "\u3297\uFE0F",
        'construction': "\uD83D\uDEA7",
        'construction_worker_man': "\uD83D\uDC77",
        'construction_worker_woman': "\uD83D\uDC77&zwj;\u2640\uFE0F",
        'control_knobs': "\uD83C\uDF9B",
        'convenience_store': "\uD83C\uDFEA",
        'cookie': "\uD83C\uDF6A",
        'cool': "\uD83C\uDD92",
        'policeman': "\uD83D\uDC6E",
        'copyright': "\xA9\uFE0F",
        'corn': "\uD83C\uDF3D",
        'couch_and_lamp': "\uD83D\uDECB",
        'couple': "\uD83D\uDC6B",
        'couple_with_heart_woman_man': "\uD83D\uDC91",
        'couple_with_heart_man_man': "\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC68",
        'couple_with_heart_woman_woman': "\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC69",
        'couplekiss_man_man': "\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC68",
        'couplekiss_man_woman': "\uD83D\uDC8F",
        'couplekiss_woman_woman': "\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC69",
        'cow': "\uD83D\uDC2E",
        'cow2': "\uD83D\uDC04",
        'cowboy_hat_face': "\uD83E\uDD20",
        'crab': "\uD83E\uDD80",
        'crayon': "\uD83D\uDD8D",
        'credit_card': "\uD83D\uDCB3",
        'crescent_moon': "\uD83C\uDF19",
        'cricket': "\uD83C\uDFCF",
        'crocodile': "\uD83D\uDC0A",
        'croissant': "\uD83E\uDD50",
        'crossed_fingers': "\uD83E\uDD1E",
        'crossed_flags': "\uD83C\uDF8C",
        'crossed_swords': "\u2694\uFE0F",
        'crown': "\uD83D\uDC51",
        'cry': "\uD83D\uDE22",
        'crying_cat_face': "\uD83D\uDE3F",
        'crystal_ball': "\uD83D\uDD2E",
        'cucumber': "\uD83E\uDD52",
        'cupid': "\uD83D\uDC98",
        'curly_loop': "\u27B0",
        'currency_exchange': "\uD83D\uDCB1",
        'curry': "\uD83C\uDF5B",
        'custard': "\uD83C\uDF6E",
        'customs': "\uD83D\uDEC3",
        'cyclone': "\uD83C\uDF00",
        'dagger': "\uD83D\uDDE1",
        'dancer': "\uD83D\uDC83",
        'dancing_women': "\uD83D\uDC6F",
        'dancing_men': "\uD83D\uDC6F&zwj;\u2642\uFE0F",
        'dango': "\uD83C\uDF61",
        'dark_sunglasses': "\uD83D\uDD76",
        'dart': "\uD83C\uDFAF",
        'dash': "\uD83D\uDCA8",
        'date': "\uD83D\uDCC5",
        'deciduous_tree': "\uD83C\uDF33",
        'deer': "\uD83E\uDD8C",
        'department_store': "\uD83C\uDFEC",
        'derelict_house': "\uD83C\uDFDA",
        'desert': "\uD83C\uDFDC",
        'desert_island': "\uD83C\uDFDD",
        'desktop_computer': "\uD83D\uDDA5",
        'male_detective': "\uD83D\uDD75\uFE0F",
        'diamond_shape_with_a_dot_inside': "\uD83D\uDCA0",
        'diamonds': "\u2666\uFE0F",
        'disappointed': "\uD83D\uDE1E",
        'disappointed_relieved': "\uD83D\uDE25",
        'dizzy': "\uD83D\uDCAB",
        'dizzy_face': "\uD83D\uDE35",
        'do_not_litter': "\uD83D\uDEAF",
        'dog': "\uD83D\uDC36",
        'dog2': "\uD83D\uDC15",
        'dollar': "\uD83D\uDCB5",
        'dolls': "\uD83C\uDF8E",
        'dolphin': "\uD83D\uDC2C",
        'door': "\uD83D\uDEAA",
        'doughnut': "\uD83C\uDF69",
        'dove': "\uD83D\uDD4A",
        'dragon': "\uD83D\uDC09",
        'dragon_face': "\uD83D\uDC32",
        'dress': "\uD83D\uDC57",
        'dromedary_camel': "\uD83D\uDC2A",
        'drooling_face': "\uD83E\uDD24",
        'droplet': "\uD83D\uDCA7",
        'drum': "\uD83E\uDD41",
        'duck': "\uD83E\uDD86",
        'dvd': "\uD83D\uDCC0",
        'e-mail': "\uD83D\uDCE7",
        'eagle': "\uD83E\uDD85",
        'ear': "\uD83D\uDC42",
        'ear_of_rice': "\uD83C\uDF3E",
        'earth_africa': "\uD83C\uDF0D",
        'earth_americas': "\uD83C\uDF0E",
        'earth_asia': "\uD83C\uDF0F",
        'egg': "\uD83E\uDD5A",
        'eggplant': "\uD83C\uDF46",
        'eight_pointed_black_star': "\u2734\uFE0F",
        'eight_spoked_asterisk': "\u2733\uFE0F",
        'electric_plug': "\uD83D\uDD0C",
        'elephant': "\uD83D\uDC18",
        'email': "\u2709\uFE0F",
        'end': "\uD83D\uDD1A",
        'envelope_with_arrow': "\uD83D\uDCE9",
        'euro': "\uD83D\uDCB6",
        'european_castle': "\uD83C\uDFF0",
        'european_post_office': "\uD83C\uDFE4",
        'evergreen_tree': "\uD83C\uDF32",
        'exclamation': "\u2757\uFE0F",
        'expressionless': "\uD83D\uDE11",
        'eye': "\uD83D\uDC41",
        'eye_speech_bubble': "\uD83D\uDC41&zwj;\uD83D\uDDE8",
        'eyeglasses': "\uD83D\uDC53",
        'eyes': "\uD83D\uDC40",
        'face_with_head_bandage': "\uD83E\uDD15",
        'face_with_thermometer': "\uD83E\uDD12",
        'fist_oncoming': "\uD83D\uDC4A",
        'factory': "\uD83C\uDFED",
        'fallen_leaf': "\uD83C\uDF42",
        'family_man_woman_boy': "\uD83D\uDC6A",
        'family_man_boy': "\uD83D\uDC68&zwj;\uD83D\uDC66",
        'family_man_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
        'family_man_girl': "\uD83D\uDC68&zwj;\uD83D\uDC67",
        'family_man_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
        'family_man_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
        'family_man_man_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66",
        'family_man_man_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
        'family_man_man_girl': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67",
        'family_man_man_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
        'family_man_man_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
        'family_man_woman_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
        'family_man_woman_girl': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
        'family_man_woman_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
        'family_man_woman_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
        'family_woman_boy': "\uD83D\uDC69&zwj;\uD83D\uDC66",
        'family_woman_boy_boy': "\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
        'family_woman_girl': "\uD83D\uDC69&zwj;\uD83D\uDC67",
        'family_woman_girl_boy': "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
        'family_woman_girl_girl': "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
        'family_woman_woman_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66",
        'family_woman_woman_boy_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
        'family_woman_woman_girl': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
        'family_woman_woman_girl_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
        'family_woman_woman_girl_girl': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
        'fast_forward': "\u23E9",
        'fax': "\uD83D\uDCE0",
        'fearful': "\uD83D\uDE28",
        'feet': "\uD83D\uDC3E",
        'female_detective': "\uD83D\uDD75\uFE0F&zwj;\u2640\uFE0F",
        'ferris_wheel': "\uD83C\uDFA1",
        'ferry': "\u26F4",
        'field_hockey': "\uD83C\uDFD1",
        'file_cabinet': "\uD83D\uDDC4",
        'file_folder': "\uD83D\uDCC1",
        'film_projector': "\uD83D\uDCFD",
        'film_strip': "\uD83C\uDF9E",
        'fire': "\uD83D\uDD25",
        'fire_engine': "\uD83D\uDE92",
        'fireworks': "\uD83C\uDF86",
        'first_quarter_moon': "\uD83C\uDF13",
        'first_quarter_moon_with_face': "\uD83C\uDF1B",
        'fish': "\uD83D\uDC1F",
        'fish_cake': "\uD83C\uDF65",
        'fishing_pole_and_fish': "\uD83C\uDFA3",
        'fist_raised': "\u270A",
        'fist_left': "\uD83E\uDD1B",
        'fist_right': "\uD83E\uDD1C",
        'flags': "\uD83C\uDF8F",
        'flashlight': "\uD83D\uDD26",
        'fleur_de_lis': "\u269C\uFE0F",
        'flight_arrival': "\uD83D\uDEEC",
        'flight_departure': "\uD83D\uDEEB",
        'floppy_disk': "\uD83D\uDCBE",
        'flower_playing_cards': "\uD83C\uDFB4",
        'flushed': "\uD83D\uDE33",
        'fog': "\uD83C\uDF2B",
        'foggy': "\uD83C\uDF01",
        'football': "\uD83C\uDFC8",
        'footprints': "\uD83D\uDC63",
        'fork_and_knife': "\uD83C\uDF74",
        'fountain': "\u26F2\uFE0F",
        'fountain_pen': "\uD83D\uDD8B",
        'four_leaf_clover': "\uD83C\uDF40",
        'fox_face': "\uD83E\uDD8A",
        'framed_picture': "\uD83D\uDDBC",
        'free': "\uD83C\uDD93",
        'fried_egg': "\uD83C\uDF73",
        'fried_shrimp': "\uD83C\uDF64",
        'fries': "\uD83C\uDF5F",
        'frog': "\uD83D\uDC38",
        'frowning': "\uD83D\uDE26",
        'frowning_face': "\u2639\uFE0F",
        'frowning_man': "\uD83D\uDE4D&zwj;\u2642\uFE0F",
        'frowning_woman': "\uD83D\uDE4D",
        'middle_finger': "\uD83D\uDD95",
        'fuelpump': "\u26FD\uFE0F",
        'full_moon': "\uD83C\uDF15",
        'full_moon_with_face': "\uD83C\uDF1D",
        'funeral_urn': "\u26B1\uFE0F",
        'game_die': "\uD83C\uDFB2",
        'gear': "\u2699\uFE0F",
        'gem': "\uD83D\uDC8E",
        'gemini': "\u264A\uFE0F",
        'ghost': "\uD83D\uDC7B",
        'gift': "\uD83C\uDF81",
        'gift_heart': "\uD83D\uDC9D",
        'girl': "\uD83D\uDC67",
        'globe_with_meridians': "\uD83C\uDF10",
        'goal_net': "\uD83E\uDD45",
        'goat': "\uD83D\uDC10",
        'golf': "\u26F3\uFE0F",
        'golfing_man': "\uD83C\uDFCC\uFE0F",
        'golfing_woman': "\uD83C\uDFCC\uFE0F&zwj;\u2640\uFE0F",
        'gorilla': "\uD83E\uDD8D",
        'grapes': "\uD83C\uDF47",
        'green_apple': "\uD83C\uDF4F",
        'green_book': "\uD83D\uDCD7",
        'green_heart': "\uD83D\uDC9A",
        'green_salad': "\uD83E\uDD57",
        'grey_exclamation': "\u2755",
        'grey_question': "\u2754",
        'grimacing': "\uD83D\uDE2C",
        'grin': "\uD83D\uDE01",
        'grinning': "\uD83D\uDE00",
        'guardsman': "\uD83D\uDC82",
        'guardswoman': "\uD83D\uDC82&zwj;\u2640\uFE0F",
        'guitar': "\uD83C\uDFB8",
        'gun': "\uD83D\uDD2B",
        'haircut_woman': "\uD83D\uDC87",
        'haircut_man': "\uD83D\uDC87&zwj;\u2642\uFE0F",
        'hamburger': "\uD83C\uDF54",
        'hammer': "\uD83D\uDD28",
        'hammer_and_pick': "\u2692",
        'hammer_and_wrench': "\uD83D\uDEE0",
        'hamster': "\uD83D\uDC39",
        'hand': "\u270B",
        'handbag': "\uD83D\uDC5C",
        'handshake': "\uD83E\uDD1D",
        'hankey': "\uD83D\uDCA9",
        'hatched_chick': "\uD83D\uDC25",
        'hatching_chick': "\uD83D\uDC23",
        'headphones': "\uD83C\uDFA7",
        'hear_no_evil': "\uD83D\uDE49",
        'heart': "\u2764\uFE0F",
        'heart_decoration': "\uD83D\uDC9F",
        'heart_eyes': "\uD83D\uDE0D",
        'heart_eyes_cat': "\uD83D\uDE3B",
        'heartbeat': "\uD83D\uDC93",
        'heartpulse': "\uD83D\uDC97",
        'hearts': "\u2665\uFE0F",
        'heavy_check_mark': "\u2714\uFE0F",
        'heavy_division_sign': "\u2797",
        'heavy_dollar_sign': "\uD83D\uDCB2",
        'heavy_heart_exclamation': "\u2763\uFE0F",
        'heavy_minus_sign': "\u2796",
        'heavy_multiplication_x': "\u2716\uFE0F",
        'heavy_plus_sign': "\u2795",
        'helicopter': "\uD83D\uDE81",
        'herb': "\uD83C\uDF3F",
        'hibiscus': "\uD83C\uDF3A",
        'high_brightness': "\uD83D\uDD06",
        'high_heel': "\uD83D\uDC60",
        'hocho': "\uD83D\uDD2A",
        'hole': "\uD83D\uDD73",
        'honey_pot': "\uD83C\uDF6F",
        'horse': "\uD83D\uDC34",
        'horse_racing': "\uD83C\uDFC7",
        'hospital': "\uD83C\uDFE5",
        'hot_pepper': "\uD83C\uDF36",
        'hotdog': "\uD83C\uDF2D",
        'hotel': "\uD83C\uDFE8",
        'hotsprings': "\u2668\uFE0F",
        'hourglass': "\u231B\uFE0F",
        'hourglass_flowing_sand': "\u23F3",
        'house': "\uD83C\uDFE0",
        'house_with_garden': "\uD83C\uDFE1",
        'houses': "\uD83C\uDFD8",
        'hugs': "\uD83E\uDD17",
        'hushed': "\uD83D\uDE2F",
        'ice_cream': "\uD83C\uDF68",
        'ice_hockey': "\uD83C\uDFD2",
        'ice_skate': "\u26F8",
        'icecream': "\uD83C\uDF66",
        'id': "\uD83C\uDD94",
        'ideograph_advantage': "\uD83C\uDE50",
        'imp': "\uD83D\uDC7F",
        'inbox_tray': "\uD83D\uDCE5",
        'incoming_envelope': "\uD83D\uDCE8",
        'tipping_hand_woman': "\uD83D\uDC81",
        'information_source': "\u2139\uFE0F",
        'innocent': "\uD83D\uDE07",
        'interrobang': "\u2049\uFE0F",
        'iphone': "\uD83D\uDCF1",
        'izakaya_lantern': "\uD83C\uDFEE",
        'jack_o_lantern': "\uD83C\uDF83",
        'japan': "\uD83D\uDDFE",
        'japanese_castle': "\uD83C\uDFEF",
        'japanese_goblin': "\uD83D\uDC7A",
        'japanese_ogre': "\uD83D\uDC79",
        'jeans': "\uD83D\uDC56",
        'joy': "\uD83D\uDE02",
        'joy_cat': "\uD83D\uDE39",
        'joystick': "\uD83D\uDD79",
        'kaaba': "\uD83D\uDD4B",
        'key': "\uD83D\uDD11",
        'keyboard': "\u2328\uFE0F",
        'keycap_ten': "\uD83D\uDD1F",
        'kick_scooter': "\uD83D\uDEF4",
        'kimono': "\uD83D\uDC58",
        'kiss': "\uD83D\uDC8B",
        'kissing': "\uD83D\uDE17",
        'kissing_cat': "\uD83D\uDE3D",
        'kissing_closed_eyes': "\uD83D\uDE1A",
        'kissing_heart': "\uD83D\uDE18",
        'kissing_smiling_eyes': "\uD83D\uDE19",
        'kiwi_fruit': "\uD83E\uDD5D",
        'koala': "\uD83D\uDC28",
        'koko': "\uD83C\uDE01",
        'label': "\uD83C\uDFF7",
        'large_blue_circle': "\uD83D\uDD35",
        'large_blue_diamond': "\uD83D\uDD37",
        'large_orange_diamond': "\uD83D\uDD36",
        'last_quarter_moon': "\uD83C\uDF17",
        'last_quarter_moon_with_face': "\uD83C\uDF1C",
        'latin_cross': "\u271D\uFE0F",
        'laughing': "\uD83D\uDE06",
        'leaves': "\uD83C\uDF43",
        'ledger': "\uD83D\uDCD2",
        'left_luggage': "\uD83D\uDEC5",
        'left_right_arrow': "\u2194\uFE0F",
        'leftwards_arrow_with_hook': "\u21A9\uFE0F",
        'lemon': "\uD83C\uDF4B",
        'leo': "\u264C\uFE0F",
        'leopard': "\uD83D\uDC06",
        'level_slider': "\uD83C\uDF9A",
        'libra': "\u264E\uFE0F",
        'light_rail': "\uD83D\uDE88",
        'link': "\uD83D\uDD17",
        'lion': "\uD83E\uDD81",
        'lips': "\uD83D\uDC44",
        'lipstick': "\uD83D\uDC84",
        'lizard': "\uD83E\uDD8E",
        'lock': "\uD83D\uDD12",
        'lock_with_ink_pen': "\uD83D\uDD0F",
        'lollipop': "\uD83C\uDF6D",
        'loop': "\u27BF",
        'loud_sound': "\uD83D\uDD0A",
        'loudspeaker': "\uD83D\uDCE2",
        'love_hotel': "\uD83C\uDFE9",
        'love_letter': "\uD83D\uDC8C",
        'low_brightness': "\uD83D\uDD05",
        'lying_face': "\uD83E\uDD25",
        'm': "\u24C2\uFE0F",
        'mag': "\uD83D\uDD0D",
        'mag_right': "\uD83D\uDD0E",
        'mahjong': "\uD83C\uDC04\uFE0F",
        'mailbox': "\uD83D\uDCEB",
        'mailbox_closed': "\uD83D\uDCEA",
        'mailbox_with_mail': "\uD83D\uDCEC",
        'mailbox_with_no_mail': "\uD83D\uDCED",
        'man': "\uD83D\uDC68",
        'man_artist': "\uD83D\uDC68&zwj;\uD83C\uDFA8",
        'man_astronaut': "\uD83D\uDC68&zwj;\uD83D\uDE80",
        'man_cartwheeling': "\uD83E\uDD38&zwj;\u2642\uFE0F",
        'man_cook': "\uD83D\uDC68&zwj;\uD83C\uDF73",
        'man_dancing': "\uD83D\uDD7A",
        'man_facepalming': "\uD83E\uDD26&zwj;\u2642\uFE0F",
        'man_factory_worker': "\uD83D\uDC68&zwj;\uD83C\uDFED",
        'man_farmer': "\uD83D\uDC68&zwj;\uD83C\uDF3E",
        'man_firefighter': "\uD83D\uDC68&zwj;\uD83D\uDE92",
        'man_health_worker': "\uD83D\uDC68&zwj;\u2695\uFE0F",
        'man_in_tuxedo': "\uD83E\uDD35",
        'man_judge': "\uD83D\uDC68&zwj;\u2696\uFE0F",
        'man_juggling': "\uD83E\uDD39&zwj;\u2642\uFE0F",
        'man_mechanic': "\uD83D\uDC68&zwj;\uD83D\uDD27",
        'man_office_worker': "\uD83D\uDC68&zwj;\uD83D\uDCBC",
        'man_pilot': "\uD83D\uDC68&zwj;\u2708\uFE0F",
        'man_playing_handball': "\uD83E\uDD3E&zwj;\u2642\uFE0F",
        'man_playing_water_polo': "\uD83E\uDD3D&zwj;\u2642\uFE0F",
        'man_scientist': "\uD83D\uDC68&zwj;\uD83D\uDD2C",
        'man_shrugging': "\uD83E\uDD37&zwj;\u2642\uFE0F",
        'man_singer': "\uD83D\uDC68&zwj;\uD83C\uDFA4",
        'man_student': "\uD83D\uDC68&zwj;\uD83C\uDF93",
        'man_teacher': "\uD83D\uDC68&zwj;\uD83C\uDFEB",
        'man_technologist': "\uD83D\uDC68&zwj;\uD83D\uDCBB",
        'man_with_gua_pi_mao': "\uD83D\uDC72",
        'man_with_turban': "\uD83D\uDC73",
        'tangerine': "\uD83C\uDF4A",
        'mans_shoe': "\uD83D\uDC5E",
        'mantelpiece_clock': "\uD83D\uDD70",
        'maple_leaf': "\uD83C\uDF41",
        'martial_arts_uniform': "\uD83E\uDD4B",
        'mask': "\uD83D\uDE37",
        'massage_woman': "\uD83D\uDC86",
        'massage_man': "\uD83D\uDC86&zwj;\u2642\uFE0F",
        'meat_on_bone': "\uD83C\uDF56",
        'medal_military': "\uD83C\uDF96",
        'medal_sports': "\uD83C\uDFC5",
        'mega': "\uD83D\uDCE3",
        'melon': "\uD83C\uDF48",
        'memo': "\uD83D\uDCDD",
        'men_wrestling': "\uD83E\uDD3C&zwj;\u2642\uFE0F",
        'menorah': "\uD83D\uDD4E",
        'mens': "\uD83D\uDEB9",
        'metal': "\uD83E\uDD18",
        'metro': "\uD83D\uDE87",
        'microphone': "\uD83C\uDFA4",
        'microscope': "\uD83D\uDD2C",
        'milk_glass': "\uD83E\uDD5B",
        'milky_way': "\uD83C\uDF0C",
        'minibus': "\uD83D\uDE90",
        'minidisc': "\uD83D\uDCBD",
        'mobile_phone_off': "\uD83D\uDCF4",
        'money_mouth_face': "\uD83E\uDD11",
        'money_with_wings': "\uD83D\uDCB8",
        'moneybag': "\uD83D\uDCB0",
        'monkey': "\uD83D\uDC12",
        'monkey_face': "\uD83D\uDC35",
        'monorail': "\uD83D\uDE9D",
        'moon': "\uD83C\uDF14",
        'mortar_board': "\uD83C\uDF93",
        'mosque': "\uD83D\uDD4C",
        'motor_boat': "\uD83D\uDEE5",
        'motor_scooter': "\uD83D\uDEF5",
        'motorcycle': "\uD83C\uDFCD",
        'motorway': "\uD83D\uDEE3",
        'mount_fuji': "\uD83D\uDDFB",
        'mountain': "\u26F0",
        'mountain_biking_man': "\uD83D\uDEB5",
        'mountain_biking_woman': "\uD83D\uDEB5&zwj;\u2640\uFE0F",
        'mountain_cableway': "\uD83D\uDEA0",
        'mountain_railway': "\uD83D\uDE9E",
        'mountain_snow': "\uD83C\uDFD4",
        'mouse': "\uD83D\uDC2D",
        'mouse2': "\uD83D\uDC01",
        'movie_camera': "\uD83C\uDFA5",
        'moyai': "\uD83D\uDDFF",
        'mrs_claus': "\uD83E\uDD36",
        'muscle': "\uD83D\uDCAA",
        'mushroom': "\uD83C\uDF44",
        'musical_keyboard': "\uD83C\uDFB9",
        'musical_note': "\uD83C\uDFB5",
        'musical_score': "\uD83C\uDFBC",
        'mute': "\uD83D\uDD07",
        'nail_care': "\uD83D\uDC85",
        'name_badge': "\uD83D\uDCDB",
        'national_park': "\uD83C\uDFDE",
        'nauseated_face': "\uD83E\uDD22",
        'necktie': "\uD83D\uDC54",
        'negative_squared_cross_mark': "\u274E",
        'nerd_face': "\uD83E\uDD13",
        'neutral_face': "\uD83D\uDE10",
        'new': "\uD83C\uDD95",
        'new_moon': "\uD83C\uDF11",
        'new_moon_with_face': "\uD83C\uDF1A",
        'newspaper': "\uD83D\uDCF0",
        'newspaper_roll': "\uD83D\uDDDE",
        'next_track_button': "\u23ED",
        'ng': "\uD83C\uDD96",
        'no_good_man': "\uD83D\uDE45&zwj;\u2642\uFE0F",
        'no_good_woman': "\uD83D\uDE45",
        'night_with_stars': "\uD83C\uDF03",
        'no_bell': "\uD83D\uDD15",
        'no_bicycles': "\uD83D\uDEB3",
        'no_entry': "\u26D4\uFE0F",
        'no_entry_sign': "\uD83D\uDEAB",
        'no_mobile_phones': "\uD83D\uDCF5",
        'no_mouth': "\uD83D\uDE36",
        'no_pedestrians': "\uD83D\uDEB7",
        'no_smoking': "\uD83D\uDEAD",
        'non-potable_water': "\uD83D\uDEB1",
        'nose': "\uD83D\uDC43",
        'notebook': "\uD83D\uDCD3",
        'notebook_with_decorative_cover': "\uD83D\uDCD4",
        'notes': "\uD83C\uDFB6",
        'nut_and_bolt': "\uD83D\uDD29",
        'o': "\u2B55\uFE0F",
        'o2': "\uD83C\uDD7E\uFE0F",
        'ocean': "\uD83C\uDF0A",
        'octopus': "\uD83D\uDC19",
        'oden': "\uD83C\uDF62",
        'office': "\uD83C\uDFE2",
        'oil_drum': "\uD83D\uDEE2",
        'ok': "\uD83C\uDD97",
        'ok_hand': "\uD83D\uDC4C",
        'ok_man': "\uD83D\uDE46&zwj;\u2642\uFE0F",
        'ok_woman': "\uD83D\uDE46",
        'old_key': "\uD83D\uDDDD",
        'older_man': "\uD83D\uDC74",
        'older_woman': "\uD83D\uDC75",
        'om': "\uD83D\uDD49",
        'on': "\uD83D\uDD1B",
        'oncoming_automobile': "\uD83D\uDE98",
        'oncoming_bus': "\uD83D\uDE8D",
        'oncoming_police_car': "\uD83D\uDE94",
        'oncoming_taxi': "\uD83D\uDE96",
        'open_file_folder': "\uD83D\uDCC2",
        'open_hands': "\uD83D\uDC50",
        'open_mouth': "\uD83D\uDE2E",
        'open_umbrella': "\u2602\uFE0F",
        'ophiuchus': "\u26CE",
        'orange_book': "\uD83D\uDCD9",
        'orthodox_cross': "\u2626\uFE0F",
        'outbox_tray': "\uD83D\uDCE4",
        'owl': "\uD83E\uDD89",
        'ox': "\uD83D\uDC02",
        'package': "\uD83D\uDCE6",
        'page_facing_up': "\uD83D\uDCC4",
        'page_with_curl': "\uD83D\uDCC3",
        'pager': "\uD83D\uDCDF",
        'paintbrush': "\uD83D\uDD8C",
        'palm_tree': "\uD83C\uDF34",
        'pancakes': "\uD83E\uDD5E",
        'panda_face': "\uD83D\uDC3C",
        'paperclip': "\uD83D\uDCCE",
        'paperclips': "\uD83D\uDD87",
        'parasol_on_ground': "\u26F1",
        'parking': "\uD83C\uDD7F\uFE0F",
        'part_alternation_mark': "\u303D\uFE0F",
        'partly_sunny': "\u26C5\uFE0F",
        'passenger_ship': "\uD83D\uDEF3",
        'passport_control': "\uD83D\uDEC2",
        'pause_button': "\u23F8",
        'peace_symbol': "\u262E\uFE0F",
        'peach': "\uD83C\uDF51",
        'peanuts': "\uD83E\uDD5C",
        'pear': "\uD83C\uDF50",
        'pen': "\uD83D\uDD8A",
        'pencil2': "\u270F\uFE0F",
        'penguin': "\uD83D\uDC27",
        'pensive': "\uD83D\uDE14",
        'performing_arts': "\uD83C\uDFAD",
        'persevere': "\uD83D\uDE23",
        'person_fencing': "\uD83E\uDD3A",
        'pouting_woman': "\uD83D\uDE4E",
        'phone': "\u260E\uFE0F",
        'pick': "\u26CF",
        'pig': "\uD83D\uDC37",
        'pig2': "\uD83D\uDC16",
        'pig_nose': "\uD83D\uDC3D",
        'pill': "\uD83D\uDC8A",
        'pineapple': "\uD83C\uDF4D",
        'ping_pong': "\uD83C\uDFD3",
        'pisces': "\u2653\uFE0F",
        'pizza': "\uD83C\uDF55",
        'place_of_worship': "\uD83D\uDED0",
        'plate_with_cutlery': "\uD83C\uDF7D",
        'play_or_pause_button': "\u23EF",
        'point_down': "\uD83D\uDC47",
        'point_left': "\uD83D\uDC48",
        'point_right': "\uD83D\uDC49",
        'point_up': "\u261D\uFE0F",
        'point_up_2': "\uD83D\uDC46",
        'police_car': "\uD83D\uDE93",
        'policewoman': "\uD83D\uDC6E&zwj;\u2640\uFE0F",
        'poodle': "\uD83D\uDC29",
        'popcorn': "\uD83C\uDF7F",
        'post_office': "\uD83C\uDFE3",
        'postal_horn': "\uD83D\uDCEF",
        'postbox': "\uD83D\uDCEE",
        'potable_water': "\uD83D\uDEB0",
        'potato': "\uD83E\uDD54",
        'pouch': "\uD83D\uDC5D",
        'poultry_leg': "\uD83C\uDF57",
        'pound': "\uD83D\uDCB7",
        'rage': "\uD83D\uDE21",
        'pouting_cat': "\uD83D\uDE3E",
        'pouting_man': "\uD83D\uDE4E&zwj;\u2642\uFE0F",
        'pray': "\uD83D\uDE4F",
        'prayer_beads': "\uD83D\uDCFF",
        'pregnant_woman': "\uD83E\uDD30",
        'previous_track_button': "\u23EE",
        'prince': "\uD83E\uDD34",
        'princess': "\uD83D\uDC78",
        'printer': "\uD83D\uDDA8",
        'purple_heart': "\uD83D\uDC9C",
        'purse': "\uD83D\uDC5B",
        'pushpin': "\uD83D\uDCCC",
        'put_litter_in_its_place': "\uD83D\uDEAE",
        'question': "\u2753",
        'rabbit': "\uD83D\uDC30",
        'rabbit2': "\uD83D\uDC07",
        'racehorse': "\uD83D\uDC0E",
        'racing_car': "\uD83C\uDFCE",
        'radio': "\uD83D\uDCFB",
        'radio_button': "\uD83D\uDD18",
        'radioactive': "\u2622\uFE0F",
        'railway_car': "\uD83D\uDE83",
        'railway_track': "\uD83D\uDEE4",
        'rainbow': "\uD83C\uDF08",
        'rainbow_flag': "\uD83C\uDFF3\uFE0F&zwj;\uD83C\uDF08",
        'raised_back_of_hand': "\uD83E\uDD1A",
        'raised_hand_with_fingers_splayed': "\uD83D\uDD90",
        'raised_hands': "\uD83D\uDE4C",
        'raising_hand_woman': "\uD83D\uDE4B",
        'raising_hand_man': "\uD83D\uDE4B&zwj;\u2642\uFE0F",
        'ram': "\uD83D\uDC0F",
        'ramen': "\uD83C\uDF5C",
        'rat': "\uD83D\uDC00",
        'record_button': "\u23FA",
        'recycle': "\u267B\uFE0F",
        'red_circle': "\uD83D\uDD34",
        'registered': "\xAE\uFE0F",
        'relaxed': "\u263A\uFE0F",
        'relieved': "\uD83D\uDE0C",
        'reminder_ribbon': "\uD83C\uDF97",
        'repeat': "\uD83D\uDD01",
        'repeat_one': "\uD83D\uDD02",
        'rescue_worker_helmet': "\u26D1",
        'restroom': "\uD83D\uDEBB",
        'revolving_hearts': "\uD83D\uDC9E",
        'rewind': "\u23EA",
        'rhinoceros': "\uD83E\uDD8F",
        'ribbon': "\uD83C\uDF80",
        'rice': "\uD83C\uDF5A",
        'rice_ball': "\uD83C\uDF59",
        'rice_cracker': "\uD83C\uDF58",
        'rice_scene': "\uD83C\uDF91",
        'right_anger_bubble': "\uD83D\uDDEF",
        'ring': "\uD83D\uDC8D",
        'robot': "\uD83E\uDD16",
        'rocket': "\uD83D\uDE80",
        'rofl': "\uD83E\uDD23",
        'roll_eyes': "\uD83D\uDE44",
        'roller_coaster': "\uD83C\uDFA2",
        'rooster': "\uD83D\uDC13",
        'rose': "\uD83C\uDF39",
        'rosette': "\uD83C\uDFF5",
        'rotating_light': "\uD83D\uDEA8",
        'round_pushpin': "\uD83D\uDCCD",
        'rowing_man': "\uD83D\uDEA3",
        'rowing_woman': "\uD83D\uDEA3&zwj;\u2640\uFE0F",
        'rugby_football': "\uD83C\uDFC9",
        'running_man': "\uD83C\uDFC3",
        'running_shirt_with_sash': "\uD83C\uDFBD",
        'running_woman': "\uD83C\uDFC3&zwj;\u2640\uFE0F",
        'sa': "\uD83C\uDE02\uFE0F",
        'sagittarius': "\u2650\uFE0F",
        'sake': "\uD83C\uDF76",
        'sandal': "\uD83D\uDC61",
        'santa': "\uD83C\uDF85",
        'satellite': "\uD83D\uDCE1",
        'saxophone': "\uD83C\uDFB7",
        'school': "\uD83C\uDFEB",
        'school_satchel': "\uD83C\uDF92",
        'scissors': "\u2702\uFE0F",
        'scorpion': "\uD83E\uDD82",
        'scorpius': "\u264F\uFE0F",
        'scream': "\uD83D\uDE31",
        'scream_cat': "\uD83D\uDE40",
        'scroll': "\uD83D\uDCDC",
        'seat': "\uD83D\uDCBA",
        'secret': "\u3299\uFE0F",
        'see_no_evil': "\uD83D\uDE48",
        'seedling': "\uD83C\uDF31",
        'selfie': "\uD83E\uDD33",
        'shallow_pan_of_food': "\uD83E\uDD58",
        'shamrock': "\u2618\uFE0F",
        'shark': "\uD83E\uDD88",
        'shaved_ice': "\uD83C\uDF67",
        'sheep': "\uD83D\uDC11",
        'shell': "\uD83D\uDC1A",
        'shield': "\uD83D\uDEE1",
        'shinto_shrine': "\u26E9",
        'ship': "\uD83D\uDEA2",
        'shirt': "\uD83D\uDC55",
        'shopping': "\uD83D\uDECD",
        'shopping_cart': "\uD83D\uDED2",
        'shower': "\uD83D\uDEBF",
        'shrimp': "\uD83E\uDD90",
        'signal_strength': "\uD83D\uDCF6",
        'six_pointed_star': "\uD83D\uDD2F",
        'ski': "\uD83C\uDFBF",
        'skier': "\u26F7",
        'skull': "\uD83D\uDC80",
        'skull_and_crossbones': "\u2620\uFE0F",
        'sleeping': "\uD83D\uDE34",
        'sleeping_bed': "\uD83D\uDECC",
        'sleepy': "\uD83D\uDE2A",
        'slightly_frowning_face': "\uD83D\uDE41",
        'slightly_smiling_face': "\uD83D\uDE42",
        'slot_machine': "\uD83C\uDFB0",
        'small_airplane': "\uD83D\uDEE9",
        'small_blue_diamond': "\uD83D\uDD39",
        'small_orange_diamond': "\uD83D\uDD38",
        'small_red_triangle': "\uD83D\uDD3A",
        'small_red_triangle_down': "\uD83D\uDD3B",
        'smile': "\uD83D\uDE04",
        'smile_cat': "\uD83D\uDE38",
        'smiley': "\uD83D\uDE03",
        'smiley_cat': "\uD83D\uDE3A",
        'smiling_imp': "\uD83D\uDE08",
        'smirk': "\uD83D\uDE0F",
        'smirk_cat': "\uD83D\uDE3C",
        'smoking': "\uD83D\uDEAC",
        'snail': "\uD83D\uDC0C",
        'snake': "\uD83D\uDC0D",
        'sneezing_face': "\uD83E\uDD27",
        'snowboarder': "\uD83C\uDFC2",
        'snowflake': "\u2744\uFE0F",
        'snowman': "\u26C4\uFE0F",
        'snowman_with_snow': "\u2603\uFE0F",
        'sob': "\uD83D\uDE2D",
        'soccer': "\u26BD\uFE0F",
        'soon': "\uD83D\uDD1C",
        'sos': "\uD83C\uDD98",
        'sound': "\uD83D\uDD09",
        'space_invader': "\uD83D\uDC7E",
        'spades': "\u2660\uFE0F",
        'spaghetti': "\uD83C\uDF5D",
        'sparkle': "\u2747\uFE0F",
        'sparkler': "\uD83C\uDF87",
        'sparkles': "\u2728",
        'sparkling_heart': "\uD83D\uDC96",
        'speak_no_evil': "\uD83D\uDE4A",
        'speaker': "\uD83D\uDD08",
        'speaking_head': "\uD83D\uDDE3",
        'speech_balloon': "\uD83D\uDCAC",
        'speedboat': "\uD83D\uDEA4",
        'spider': "\uD83D\uDD77",
        'spider_web': "\uD83D\uDD78",
        'spiral_calendar': "\uD83D\uDDD3",
        'spiral_notepad': "\uD83D\uDDD2",
        'spoon': "\uD83E\uDD44",
        'squid': "\uD83E\uDD91",
        'stadium': "\uD83C\uDFDF",
        'star': "\u2B50\uFE0F",
        'star2': "\uD83C\uDF1F",
        'star_and_crescent': "\u262A\uFE0F",
        'star_of_david': "\u2721\uFE0F",
        'stars': "\uD83C\uDF20",
        'station': "\uD83D\uDE89",
        'statue_of_liberty': "\uD83D\uDDFD",
        'steam_locomotive': "\uD83D\uDE82",
        'stew': "\uD83C\uDF72",
        'stop_button': "\u23F9",
        'stop_sign': "\uD83D\uDED1",
        'stopwatch': "\u23F1",
        'straight_ruler': "\uD83D\uDCCF",
        'strawberry': "\uD83C\uDF53",
        'stuck_out_tongue': "\uD83D\uDE1B",
        'stuck_out_tongue_closed_eyes': "\uD83D\uDE1D",
        'stuck_out_tongue_winking_eye': "\uD83D\uDE1C",
        'studio_microphone': "\uD83C\uDF99",
        'stuffed_flatbread': "\uD83E\uDD59",
        'sun_behind_large_cloud': "\uD83C\uDF25",
        'sun_behind_rain_cloud': "\uD83C\uDF26",
        'sun_behind_small_cloud': "\uD83C\uDF24",
        'sun_with_face': "\uD83C\uDF1E",
        'sunflower': "\uD83C\uDF3B",
        'sunglasses': "\uD83D\uDE0E",
        'sunny': "\u2600\uFE0F",
        'sunrise': "\uD83C\uDF05",
        'sunrise_over_mountains': "\uD83C\uDF04",
        'surfing_man': "\uD83C\uDFC4",
        'surfing_woman': "\uD83C\uDFC4&zwj;\u2640\uFE0F",
        'sushi': "\uD83C\uDF63",
        'suspension_railway': "\uD83D\uDE9F",
        'sweat': "\uD83D\uDE13",
        'sweat_drops': "\uD83D\uDCA6",
        'sweat_smile': "\uD83D\uDE05",
        'sweet_potato': "\uD83C\uDF60",
        'swimming_man': "\uD83C\uDFCA",
        'swimming_woman': "\uD83C\uDFCA&zwj;\u2640\uFE0F",
        'symbols': "\uD83D\uDD23",
        'synagogue': "\uD83D\uDD4D",
        'syringe': "\uD83D\uDC89",
        'taco': "\uD83C\uDF2E",
        'tada': "\uD83C\uDF89",
        'tanabata_tree': "\uD83C\uDF8B",
        'taurus': "\u2649\uFE0F",
        'taxi': "\uD83D\uDE95",
        'tea': "\uD83C\uDF75",
        'telephone_receiver': "\uD83D\uDCDE",
        'telescope': "\uD83D\uDD2D",
        'tennis': "\uD83C\uDFBE",
        'tent': "\u26FA\uFE0F",
        'thermometer': "\uD83C\uDF21",
        'thinking': "\uD83E\uDD14",
        'thought_balloon': "\uD83D\uDCAD",
        'ticket': "\uD83C\uDFAB",
        'tickets': "\uD83C\uDF9F",
        'tiger': "\uD83D\uDC2F",
        'tiger2': "\uD83D\uDC05",
        'timer_clock': "\u23F2",
        'tipping_hand_man': "\uD83D\uDC81&zwj;\u2642\uFE0F",
        'tired_face': "\uD83D\uDE2B",
        'tm': "\u2122\uFE0F",
        'toilet': "\uD83D\uDEBD",
        'tokyo_tower': "\uD83D\uDDFC",
        'tomato': "\uD83C\uDF45",
        'tongue': "\uD83D\uDC45",
        'top': "\uD83D\uDD1D",
        'tophat': "\uD83C\uDFA9",
        'tornado': "\uD83C\uDF2A",
        'trackball': "\uD83D\uDDB2",
        'tractor': "\uD83D\uDE9C",
        'traffic_light': "\uD83D\uDEA5",
        'train': "\uD83D\uDE8B",
        'train2': "\uD83D\uDE86",
        'tram': "\uD83D\uDE8A",
        'triangular_flag_on_post': "\uD83D\uDEA9",
        'triangular_ruler': "\uD83D\uDCD0",
        'trident': "\uD83D\uDD31",
        'triumph': "\uD83D\uDE24",
        'trolleybus': "\uD83D\uDE8E",
        'trophy': "\uD83C\uDFC6",
        'tropical_drink': "\uD83C\uDF79",
        'tropical_fish': "\uD83D\uDC20",
        'truck': "\uD83D\uDE9A",
        'trumpet': "\uD83C\uDFBA",
        'tulip': "\uD83C\uDF37",
        'tumbler_glass': "\uD83E\uDD43",
        'turkey': "\uD83E\uDD83",
        'turtle': "\uD83D\uDC22",
        'tv': "\uD83D\uDCFA",
        'twisted_rightwards_arrows': "\uD83D\uDD00",
        'two_hearts': "\uD83D\uDC95",
        'two_men_holding_hands': "\uD83D\uDC6C",
        'two_women_holding_hands': "\uD83D\uDC6D",
        'u5272': "\uD83C\uDE39",
        'u5408': "\uD83C\uDE34",
        'u55b6': "\uD83C\uDE3A",
        'u6307': "\uD83C\uDE2F\uFE0F",
        'u6708': "\uD83C\uDE37\uFE0F",
        'u6709': "\uD83C\uDE36",
        'u6e80': "\uD83C\uDE35",
        'u7121': "\uD83C\uDE1A\uFE0F",
        'u7533': "\uD83C\uDE38",
        'u7981': "\uD83C\uDE32",
        'u7a7a': "\uD83C\uDE33",
        'umbrella': "\u2614\uFE0F",
        'unamused': "\uD83D\uDE12",
        'underage': "\uD83D\uDD1E",
        'unicorn': "\uD83E\uDD84",
        'unlock': "\uD83D\uDD13",
        'up': "\uD83C\uDD99",
        'upside_down_face': "\uD83D\uDE43",
        'v': "\u270C\uFE0F",
        'vertical_traffic_light': "\uD83D\uDEA6",
        'vhs': "\uD83D\uDCFC",
        'vibration_mode': "\uD83D\uDCF3",
        'video_camera': "\uD83D\uDCF9",
        'video_game': "\uD83C\uDFAE",
        'violin': "\uD83C\uDFBB",
        'virgo': "\u264D\uFE0F",
        'volcano': "\uD83C\uDF0B",
        'volleyball': "\uD83C\uDFD0",
        'vs': "\uD83C\uDD9A",
        'vulcan_salute': "\uD83D\uDD96",
        'walking_man': "\uD83D\uDEB6",
        'walking_woman': "\uD83D\uDEB6&zwj;\u2640\uFE0F",
        'waning_crescent_moon': "\uD83C\uDF18",
        'waning_gibbous_moon': "\uD83C\uDF16",
        'warning': "\u26A0\uFE0F",
        'wastebasket': "\uD83D\uDDD1",
        'watch': "\u231A\uFE0F",
        'water_buffalo': "\uD83D\uDC03",
        'watermelon': "\uD83C\uDF49",
        'wave': "\uD83D\uDC4B",
        'wavy_dash': "\u3030\uFE0F",
        'waxing_crescent_moon': "\uD83C\uDF12",
        'wc': "\uD83D\uDEBE",
        'weary': "\uD83D\uDE29",
        'wedding': "\uD83D\uDC92",
        'weight_lifting_man': "\uD83C\uDFCB\uFE0F",
        'weight_lifting_woman': "\uD83C\uDFCB\uFE0F&zwj;\u2640\uFE0F",
        'whale': "\uD83D\uDC33",
        'whale2': "\uD83D\uDC0B",
        'wheel_of_dharma': "\u2638\uFE0F",
        'wheelchair': "\u267F\uFE0F",
        'white_check_mark': "\u2705",
        'white_circle': "\u26AA\uFE0F",
        'white_flag': "\uD83C\uDFF3\uFE0F",
        'white_flower': "\uD83D\uDCAE",
        'white_large_square': "\u2B1C\uFE0F",
        'white_medium_small_square': "\u25FD\uFE0F",
        'white_medium_square': "\u25FB\uFE0F",
        'white_small_square': "\u25AB\uFE0F",
        'white_square_button': "\uD83D\uDD33",
        'wilted_flower': "\uD83E\uDD40",
        'wind_chime': "\uD83C\uDF90",
        'wind_face': "\uD83C\uDF2C",
        'wine_glass': "\uD83C\uDF77",
        'wink': "\uD83D\uDE09",
        'wolf': "\uD83D\uDC3A",
        'woman': "\uD83D\uDC69",
        'woman_artist': "\uD83D\uDC69&zwj;\uD83C\uDFA8",
        'woman_astronaut': "\uD83D\uDC69&zwj;\uD83D\uDE80",
        'woman_cartwheeling': "\uD83E\uDD38&zwj;\u2640\uFE0F",
        'woman_cook': "\uD83D\uDC69&zwj;\uD83C\uDF73",
        'woman_facepalming': "\uD83E\uDD26&zwj;\u2640\uFE0F",
        'woman_factory_worker': "\uD83D\uDC69&zwj;\uD83C\uDFED",
        'woman_farmer': "\uD83D\uDC69&zwj;\uD83C\uDF3E",
        'woman_firefighter': "\uD83D\uDC69&zwj;\uD83D\uDE92",
        'woman_health_worker': "\uD83D\uDC69&zwj;\u2695\uFE0F",
        'woman_judge': "\uD83D\uDC69&zwj;\u2696\uFE0F",
        'woman_juggling': "\uD83E\uDD39&zwj;\u2640\uFE0F",
        'woman_mechanic': "\uD83D\uDC69&zwj;\uD83D\uDD27",
        'woman_office_worker': "\uD83D\uDC69&zwj;\uD83D\uDCBC",
        'woman_pilot': "\uD83D\uDC69&zwj;\u2708\uFE0F",
        'woman_playing_handball': "\uD83E\uDD3E&zwj;\u2640\uFE0F",
        'woman_playing_water_polo': "\uD83E\uDD3D&zwj;\u2640\uFE0F",
        'woman_scientist': "\uD83D\uDC69&zwj;\uD83D\uDD2C",
        'woman_shrugging': "\uD83E\uDD37&zwj;\u2640\uFE0F",
        'woman_singer': "\uD83D\uDC69&zwj;\uD83C\uDFA4",
        'woman_student': "\uD83D\uDC69&zwj;\uD83C\uDF93",
        'woman_teacher': "\uD83D\uDC69&zwj;\uD83C\uDFEB",
        'woman_technologist': "\uD83D\uDC69&zwj;\uD83D\uDCBB",
        'woman_with_turban': "\uD83D\uDC73&zwj;\u2640\uFE0F",
        'womans_clothes': "\uD83D\uDC5A",
        'womans_hat': "\uD83D\uDC52",
        'women_wrestling': "\uD83E\uDD3C&zwj;\u2640\uFE0F",
        'womens': "\uD83D\uDEBA",
        'world_map': "\uD83D\uDDFA",
        'worried': "\uD83D\uDE1F",
        'wrench': "\uD83D\uDD27",
        'writing_hand': "\u270D\uFE0F",
        'x': "\u274C",
        'yellow_heart': "\uD83D\uDC9B",
        'yen': "\uD83D\uDCB4",
        'yin_yang': "\u262F\uFE0F",
        'yum': "\uD83D\uDE0B",
        'zap': "\u26A1\uFE0F",
        'zipper_mouth_face': "\uD83E\uDD10",
        'zzz': "\uD83D\uDCA4",

        /* special emojis :P */
        'octocat': '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
      };
      /**
       * Created by Estevao on 31-05-2015.
       */

      /**
       * Showdown Converter class
       * @class
       * @param {object} [converterOptions]
       * @returns {Converter}
       */

      showdown.Converter = function (converterOptions) {
        'use strict';

        var
        /**
         * Options used by this converter
         * @private
         * @type {{}}
         */
        options = {},

        /**
         * Language extensions used by this converter
         * @private
         * @type {Array}
         */
        langExtensions = [],

        /**
         * Output modifiers extensions used by this converter
         * @private
         * @type {Array}
         */
        outputModifiers = [],

        /**
         * Event listeners
         * @private
         * @type {{}}
         */
        listeners = {},

        /**
         * The flavor set in this converter
         */
        setConvFlavor = setFlavor,

        /**
         * Metadata of the document
         * @type {{parsed: {}, raw: string, format: string}}
         */
        metadata = {
          parsed: {},
          raw: '',
          format: ''
        };

        _constructor();
        /**
         * Converter constructor
         * @private
         */


        function _constructor() {
          converterOptions = converterOptions || {};

          for (var gOpt in globalOptions) {
            if (globalOptions.hasOwnProperty(gOpt)) {
              options[gOpt] = globalOptions[gOpt];
            }
          } // Merge options


          if (typeof converterOptions === 'object') {
            for (var opt in converterOptions) {
              if (converterOptions.hasOwnProperty(opt)) {
                options[opt] = converterOptions[opt];
              }
            }
          } else {
            throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions + ' was passed instead.');
          }

          if (options.extensions) {
            showdown.helper.forEach(options.extensions, _parseExtension);
          }
        }
        /**
         * Parse extension
         * @param {*} ext
         * @param {string} [name='']
         * @private
         */


        function _parseExtension(ext, name) {
          name = name || null; // If it's a string, the extension was previously loaded

          if (showdown.helper.isString(ext)) {
            ext = showdown.helper.stdExtName(ext);
            name = ext; // LEGACY_SUPPORT CODE

            if (showdown.extensions[ext]) {
              console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' + 'Please inform the developer that the extension should be updated!');
              legacyExtensionLoading(showdown.extensions[ext], ext);
              return; // END LEGACY SUPPORT CODE
            } else if (!showdown.helper.isUndefined(extensions[ext])) {
              ext = extensions[ext];
            } else {
              throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
          }

          if (typeof ext === 'function') {
            ext = ext();
          }

          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }

          var validExt = validate(ext, name);

          if (!validExt.valid) {
            throw Error(validExt.error);
          }

          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case 'lang':
                langExtensions.push(ext[i]);
                break;

              case 'output':
                outputModifiers.push(ext[i]);
                break;
            }

            if (ext[i].hasOwnProperty('listeners')) {
              for (var ln in ext[i].listeners) {
                if (ext[i].listeners.hasOwnProperty(ln)) {
                  listen(ln, ext[i].listeners[ln]);
                }
              }
            }
          }
        }
        /**
         * LEGACY_SUPPORT
         * @param {*} ext
         * @param {string} name
         */


        function legacyExtensionLoading(ext, name) {
          if (typeof ext === 'function') {
            ext = ext(new showdown.Converter());
          }

          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }

          var valid = validate(ext, name);

          if (!valid.valid) {
            throw Error(valid.error);
          }

          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case 'lang':
                langExtensions.push(ext[i]);
                break;

              case 'output':
                outputModifiers.push(ext[i]);
                break;

              default:
                // should never reach here
                throw Error('Extension loader error: Type unrecognized!!!');
            }
          }
        }
        /**
         * Listen to an event
         * @param {string} name
         * @param {function} callback
         */


        function listen(name, callback) {
          if (!showdown.helper.isString(name)) {
            throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
          }

          if (typeof callback !== 'function') {
            throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
          }

          if (!listeners.hasOwnProperty(name)) {
            listeners[name] = [];
          }

          listeners[name].push(callback);
        }

        function rTrimInputText(text) {
          var rsp = text.match(/^\s*/)[0].length,
              rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
          return text.replace(rgx, '');
        }
        /**
         * Dispatch an event
         * @private
         * @param {string} evtName Event name
         * @param {string} text Text
         * @param {{}} options Converter Options
         * @param {{}} globals
         * @returns {string}
         */


        this._dispatch = function dispatch(evtName, text, options, globals) {
          if (listeners.hasOwnProperty(evtName)) {
            for (var ei = 0; ei < listeners[evtName].length; ++ei) {
              var nText = listeners[evtName][ei](evtName, text, this, options, globals);

              if (nText && typeof nText !== 'undefined') {
                text = nText;
              }
            }
          }

          return text;
        };
        /**
         * Listen to an event
         * @param {string} name
         * @param {function} callback
         * @returns {showdown.Converter}
         */


        this.listen = function (name, callback) {
          listen(name, callback);
          return this;
        };
        /**
         * Converts a markdown string into HTML
         * @param {string} text
         * @returns {*}
         */


        this.makeHtml = function (text) {
          //check if text is not falsy
          if (!text) {
            return text;
          }

          var globals = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: langExtensions,
            outputModifiers: outputModifiers,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: '',
              format: ''
            }
          }; // This lets us use ¨ trema as an escape char to avoid md5 hashes
          // The choice of character is arbitrary; anything that isn't
          // magic in Markdown will work.

          text = text.replace(/¨/g, '¨T'); // Replace $ with ¨D
          // RegExp interprets $ as a special character
          // when it's in a replacement string

          text = text.replace(/\$/g, '¨D'); // Standardize line endings

          text = text.replace(/\r\n/g, '\n'); // DOS to Unix

          text = text.replace(/\r/g, '\n'); // Mac to Unix
          // Stardardize line spaces

          text = text.replace(/\u00A0/g, '&nbsp;');

          if (options.smartIndentationFix) {
            text = rTrimInputText(text);
          } // Make sure text begins and ends with a couple of newlines:


          text = '\n\n' + text + '\n\n'; // detab

          text = showdown.subParser('detab')(text, options, globals);
          /**
           * Strip any lines consisting only of spaces and tabs.
           * This makes subsequent regexs easier to write, because we can
           * match consecutive blank lines with /\n+/ instead of something
           * contorted like /[ \t]*\n+/
           */

          text = text.replace(/^[ \t]+$/mg, ''); //run languageExtensions

          showdown.helper.forEach(langExtensions, function (ext) {
            text = showdown.subParser('runExtension')(ext, text, options, globals);
          }); // run the sub parsers

          text = showdown.subParser('metadata')(text, options, globals);
          text = showdown.subParser('hashPreCodeTags')(text, options, globals);
          text = showdown.subParser('githubCodeBlocks')(text, options, globals);
          text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
          text = showdown.subParser('hashCodeTags')(text, options, globals);
          text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
          text = showdown.subParser('blockGamut')(text, options, globals);
          text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
          text = showdown.subParser('unescapeSpecialChars')(text, options, globals); // attacklab: Restore dollar signs

          text = text.replace(/¨D/g, '$$'); // attacklab: Restore tremas

          text = text.replace(/¨T/g, '¨'); // render a complete html document instead of a partial if the option is enabled

          text = showdown.subParser('completeHTMLDocument')(text, options, globals); // Run output modifiers

          showdown.helper.forEach(outputModifiers, function (ext) {
            text = showdown.subParser('runExtension')(ext, text, options, globals);
          }); // update metadata

          metadata = globals.metadata;
          return text;
        };
        /**
         * Converts an HTML string into a markdown string
         * @param src
         * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
         * @returns {string}
         */


        this.makeMarkdown = this.makeMd = function (src, HTMLParser) {
          // replace \r\n with \n
          src = src.replace(/\r\n/g, '\n');
          src = src.replace(/\r/g, '\n'); // old macs
          // due to an edge case, we need to find this: > <
          // to prevent removing of non silent white spaces
          // ex: <em>this is</em> <strong>sparta</strong>

          src = src.replace(/>[ \t]+</, '>¨NBSP;<');

          if (!HTMLParser) {
            if (window && window.document) {
              HTMLParser = window.document;
            } else {
              throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
            }
          }

          var doc = HTMLParser.createElement('div');
          doc.innerHTML = src;
          var globals = {
            preList: substitutePreCodeTags(doc)
          }; // remove all newlines and collapse spaces

          clean(doc); // some stuff, like accidental reference links must now be escaped
          // TODO
          // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

          var nodes = doc.childNodes,
              mdDoc = '';

          for (var i = 0; i < nodes.length; i++) {
            mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
          }

          function clean(node) {
            for (var n = 0; n < node.childNodes.length; ++n) {
              var child = node.childNodes[n];

              if (child.nodeType === 3) {
                if (!/\S/.test(child.nodeValue)) {
                  node.removeChild(child);
                  --n;
                } else {
                  child.nodeValue = child.nodeValue.split('\n').join(' ');
                  child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
                }
              } else if (child.nodeType === 1) {
                clean(child);
              }
            }
          } // find all pre tags and replace contents with placeholder
          // we need this so that we can remove all indentation from html
          // to ease up parsing


          function substitutePreCodeTags(doc) {
            var pres = doc.querySelectorAll('pre'),
                presPH = [];

            for (var i = 0; i < pres.length; ++i) {
              if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
                var content = pres[i].firstChild.innerHTML.trim(),
                    language = pres[i].firstChild.getAttribute('data-language') || ''; // if data-language attribute is not defined, then we look for class language-*

                if (language === '') {
                  var classes = pres[i].firstChild.className.split(' ');

                  for (var c = 0; c < classes.length; ++c) {
                    var matches = classes[c].match(/^language-(.+)$/);

                    if (matches !== null) {
                      language = matches[1];
                      break;
                    }
                  }
                } // unescape html entities in content


                content = showdown.helper.unescapeHTMLEntities(content);
                presPH.push(content);
                pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
              } else {
                presPH.push(pres[i].innerHTML);
                pres[i].innerHTML = '';
                pres[i].setAttribute('prenum', i.toString());
              }
            }

            return presPH;
          }

          return mdDoc;
        };
        /**
         * Set an option of this Converter instance
         * @param {string} key
         * @param {*} value
         */


        this.setOption = function (key, value) {
          options[key] = value;
        };
        /**
         * Get the option of this Converter instance
         * @param {string} key
         * @returns {*}
         */


        this.getOption = function (key) {
          return options[key];
        };
        /**
         * Get the options of this Converter instance
         * @returns {{}}
         */


        this.getOptions = function () {
          return options;
        };
        /**
         * Add extension to THIS converter
         * @param {{}} extension
         * @param {string} [name=null]
         */


        this.addExtension = function (extension, name) {
          name = name || null;

          _parseExtension(extension, name);
        };
        /**
         * Use a global registered extension with THIS converter
         * @param {string} extensionName Name of the previously registered extension
         */


        this.useExtension = function (extensionName) {
          _parseExtension(extensionName);
        };
        /**
         * Set the flavor THIS converter should use
         * @param {string} name
         */


        this.setFlavor = function (name) {
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + ' flavor was not found');
          }

          var preset = flavor[name];
          setConvFlavor = name;

          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              options[option] = preset[option];
            }
          }
        };
        /**
         * Get the currently set flavor of this converter
         * @returns {string}
         */


        this.getFlavor = function () {
          return setConvFlavor;
        };
        /**
         * Remove an extension from THIS converter.
         * Note: This is a costly operation. It's better to initialize a new converter
         * and specify the extensions you wish to use
         * @param {Array} extension
         */


        this.removeExtension = function (extension) {
          if (!showdown.helper.isArray(extension)) {
            extension = [extension];
          }

          for (var a = 0; a < extension.length; ++a) {
            var ext = extension[a];

            for (var i = 0; i < langExtensions.length; ++i) {
              if (langExtensions[i] === ext) {
                langExtensions[i].splice(i, 1);
              }
            }

            for (var ii = 0; ii < outputModifiers.length; ++i) {
              if (outputModifiers[ii] === ext) {
                outputModifiers[ii].splice(i, 1);
              }
            }
          }
        };
        /**
         * Get all extension of THIS converter
         * @returns {{language: Array, output: Array}}
         */


        this.getAllExtensions = function () {
          return {
            language: langExtensions,
            output: outputModifiers
          };
        };
        /**
         * Get the metadata of the previously parsed document
         * @param raw
         * @returns {string|{}}
         */


        this.getMetadata = function (raw) {
          if (raw) {
            return metadata.raw;
          } else {
            return metadata.parsed;
          }
        };
        /**
         * Get the metadata format of the previously parsed document
         * @returns {string}
         */


        this.getMetadataFormat = function () {
          return metadata.format;
        };
        /**
         * Private: set a single key, value metadata pair
         * @param {string} key
         * @param {string} value
         */


        this._setMetadataPair = function (key, value) {
          metadata.parsed[key] = value;
        };
        /**
         * Private: set metadata format
         * @param {string} format
         */


        this._setMetadataFormat = function (format) {
          metadata.format = format;
        };
        /**
         * Private: set metadata raw text
         * @param {string} raw
         */


        this._setMetadataRaw = function (raw) {
          metadata.raw = raw;
        };
      };
      /**
       * Turn Markdown link shortcuts into XHTML <a> tags.
       */


      showdown.subParser('anchors', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('anchors.before', text, options, globals);

        var writeAnchorTag = function writeAnchorTag(wholeMatch, linkText, linkId, url, m5, m6, title) {
          if (showdown.helper.isUndefined(title)) {
            title = '';
          }

          linkId = linkId.toLowerCase(); // Special case for explicit empty url

          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = '';
          } else if (!url) {
            if (!linkId) {
              // lower-case and turn embedded newlines into spaces
              linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
            }

            url = '#' + linkId;

            if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
              url = globals.gUrls[linkId];

              if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                title = globals.gTitles[linkId];
              }
            } else {
              return wholeMatch;
            }
          } //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance


          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<a href="' + url + '"';

          if (title !== '' && title !== null) {
            title = title.replace(/"/g, '&quot;'); //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance

            title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          } // optionLinksInNewWindow only applies
          // to external links. Hash links (#) open in same page


          if (options.openLinksInNewWindow && !/^#/.test(url)) {
            // escaped _
            result += ' rel="noopener noreferrer" target="¨E95Eblank"';
          }

          result += '>' + linkText + '</a>';
          return result;
        }; // First, handle reference-style links: [link text] [id]


        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag); // Next, inline-style links: [link text](url "optional title")
        // cases with crazy urls like ./image/cat1).png

        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag); // normal cases

        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag); // handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)

        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag); // Lastly handle GithubMentions if option is enabled

        if (options.ghMentions) {
          text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
            if (escape === '\\') {
              return st + mentions;
            } //check if options.ghMentionsLink is a string


            if (!showdown.helper.isString(options.ghMentionsLink)) {
              throw new Error('ghMentionsLink option must be a string');
            }

            var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
                target = '';

            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="¨E95Eblank"';
            }

            return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
          });
        }

        text = globals.converter._dispatch('anchors.after', text, options, globals);
        return text;
      }); // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

      var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
          simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
          delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
          simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
          delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
          replaceLink = function replaceLink(options) {
        'use strict';

        return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
          link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var lnkTxt = link,
              append = '',
              target = '',
              lmc = leadingMagicChars || '',
              tmc = trailingMagicChars || '';

          if (/^www\./i.test(link)) {
            link = link.replace(/^www\./i, 'http://www.');
          }

          if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
            append = trailingPunctuation;
          }

          if (options.openLinksInNewWindow) {
            target = ' rel="noopener noreferrer" target="¨E95Eblank"';
          }

          return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
        };
      },
          replaceMail = function replaceMail(options, globals) {
        'use strict';

        return function (wholeMatch, b, mail) {
          var href = 'mailto:';
          b = b || '';
          mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);

          if (options.encodeEmails) {
            href = showdown.helper.encodeEmailAddress(href + mail);
            mail = showdown.helper.encodeEmailAddress(mail);
          } else {
            href = href + mail;
          }

          return b + '<a href="' + href + '">' + mail + '</a>';
        };
      };

      showdown.subParser('autoLinks', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('autoLinks.before', text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch('autoLinks.after', text, options, globals);
        return text;
      });
      showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
        'use strict';

        if (!options.simplifiedAutoLink) {
          return text;
        }

        text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

        if (options.excludeTrailingPunctuationFromURLs) {
          text = text.replace(simpleURLRegex2, replaceLink(options));
        } else {
          text = text.replace(simpleURLRegex, replaceLink(options));
        }

        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);
        return text;
      });
      /**
       * These are all the transformations that form block-level
       * tags like paragraphs, headers, and list items.
       */

      showdown.subParser('blockGamut', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('blockGamut.before', text, options, globals); // we parse blockquotes first so that we can have headings and hrs
        // inside blockquotes

        text = showdown.subParser('blockQuotes')(text, options, globals);
        text = showdown.subParser('headers')(text, options, globals); // Do Horizontal Rules:

        text = showdown.subParser('horizontalRule')(text, options, globals);
        text = showdown.subParser('lists')(text, options, globals);
        text = showdown.subParser('codeBlocks')(text, options, globals);
        text = showdown.subParser('tables')(text, options, globals); // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.

        text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
        text = showdown.subParser('paragraphs')(text, options, globals);
        text = globals.converter._dispatch('blockGamut.after', text, options, globals);
        return text;
      });
      showdown.subParser('blockQuotes', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('blockQuotes.before', text, options, globals); // add a couple extra lines after the text and endtext mark

        text = text + '\n\n';
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

        if (options.splitAdjacentBlockquotes) {
          rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        }

        text = text.replace(rgx, function (bq) {
          // attacklab: hack around Konqueror 3.5.4 bug:
          // "----------bug".replace(/^-/g,"") == "bug"
          bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting
          // attacklab: clean up hack

          bq = bq.replace(/¨0/g, '');
          bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines

          bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
          bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

          bq = bq.replace(/(^|\n)/g, '$1  '); // These leading spaces screw with <pre> content, so we need to fix that:

          bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
            var pre = m1; // attacklab: hack around Konqueror 3.5.4 bug:

            pre = pre.replace(/^  /mg, '¨0');
            pre = pre.replace(/¨0/g, '');
            return pre;
          });
          return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
        });
        text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
        return text;
      });
      /**
       * Process Markdown `<pre><code>` blocks.
       */

      showdown.subParser('codeBlocks', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('codeBlocks.before', text, options, globals); // sentinel workarounds for lack of \A and \Z, safari\khtml bug

        text += '¨0';
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function (wholeMatch, m1, m2) {
          var codeblock = m1,
              nextChar = m2,
              end = '\n';
          codeblock = showdown.subParser('outdent')(codeblock, options, globals);
          codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
          codeblock = showdown.subParser('detab')(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines

          codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

          if (options.omitExtraWLInCodeBlocks) {
            end = '';
          }

          codeblock = '<pre><code>' + codeblock + end + '</code></pre>';
          return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
        }); // strip sentinel

        text = text.replace(/¨0/, '');
        text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
        return text;
      });
      /**
       *
       *   *  Backtick quotes are used for <code></code> spans.
       *
       *   *  You can use multiple backticks as the delimiters if you want to
       *     include literal backticks in the code span. So, this input:
       *
       *         Just type ``foo `bar` baz`` at the prompt.
       *
       *       Will translate to:
       *
       *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
       *
       *    There's no arbitrary limit to the number of backticks you
       *    can use as delimters. If you need three consecutive backticks
       *    in your code, use four for delimiters, etc.
       *
       *  *  You can use spaces to get literal backticks at the edges:
       *
       *         ... type `` `bar` `` ...
       *
       *       Turns to:
       *
       *         ... type <code>`bar`</code> ...
       */

      showdown.subParser('codeSpans', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('codeSpans.before', text, options, globals);

        if (typeof text === 'undefined') {
          text = '';
        }

        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (wholeMatch, m1, m2, m3) {
          var c = m3;
          c = c.replace(/^([ \t]*)/g, ''); // leading whitespace

          c = c.replace(/[ \t]*$/g, ''); // trailing whitespace

          c = showdown.subParser('encodeCode')(c, options, globals);
          c = m1 + '<code>' + c + '</code>';
          c = showdown.subParser('hashHTMLSpans')(c, options, globals);
          return c;
        });
        text = globals.converter._dispatch('codeSpans.after', text, options, globals);
        return text;
      });
      /**
       * Create a full HTML document from the processed markdown
       */

      showdown.subParser('completeHTMLDocument', function (text, options, globals) {
        'use strict';

        if (!options.completeHTMLDocument) {
          return text;
        }

        text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);
        var doctype = 'html',
            doctypeParsed = '<!DOCTYPE HTML>\n',
            title = '',
            charset = '<meta charset="utf-8">\n',
            lang = '',
            metadata = '';

        if (typeof globals.metadata.parsed.doctype !== 'undefined') {
          doctypeParsed = '<!DOCTYPE ' + globals.metadata.parsed.doctype + '>\n';
          doctype = globals.metadata.parsed.doctype.toString().toLowerCase();

          if (doctype === 'html' || doctype === 'html5') {
            charset = '<meta charset="utf-8">';
          }
        }

        for (var meta in globals.metadata.parsed) {
          if (globals.metadata.parsed.hasOwnProperty(meta)) {
            switch (meta.toLowerCase()) {
              case 'doctype':
                break;

              case 'title':
                title = '<title>' + globals.metadata.parsed.title + '</title>\n';
                break;

              case 'charset':
                if (doctype === 'html' || doctype === 'html5') {
                  charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                } else {
                  charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                }

                break;

              case 'language':
              case 'lang':
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;

              default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            }
          }
        }

        text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';
        text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
        return text;
      });
      /**
       * Convert all tabs to spaces
       */

      showdown.subParser('detab', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('detab.before', text, options, globals); // expand first n-1 tabs

        text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width
        // replace the nth with two sentinels

        text = text.replace(/\t/g, '¨A¨B'); // use the sentinel to anchor our regex so it doesn't explode

        text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
          var leadingText = m1,
              numSpaces = 4 - leadingText.length % 4; // g_tab_width
          // there *must* be a better way to do this:

          for (var i = 0; i < numSpaces; i++) {
            leadingText += ' ';
          }

          return leadingText;
        }); // clean up sentinels

        text = text.replace(/¨A/g, '    '); // g_tab_width

        text = text.replace(/¨B/g, '');
        text = globals.converter._dispatch('detab.after', text, options, globals);
        return text;
      });
      showdown.subParser('ellipsis', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('ellipsis.before', text, options, globals);
        text = text.replace(/\.\.\./g, '…');
        text = globals.converter._dispatch('ellipsis.after', text, options, globals);
        return text;
      });
      /**
       * Turn emoji codes into emojis
       *
       * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
       */

      showdown.subParser('emoji', function (text, options, globals) {
        'use strict';

        if (!options.emoji) {
          return text;
        }

        text = globals.converter._dispatch('emoji.before', text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function (wm, emojiCode) {
          if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
            return showdown.helper.emojis[emojiCode];
          }

          return wm;
        });
        text = globals.converter._dispatch('emoji.after', text, options, globals);
        return text;
      });
      /**
       * Smart processing for ampersands and angle brackets that need to be encoded.
       */

      showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals); // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        // http://bumppo.net/projects/amputator/

        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;'); // Encode naked <'s

        text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;'); // Encode <

        text = text.replace(/</g, '&lt;'); // Encode >

        text = text.replace(/>/g, '&gt;');
        text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
        return text;
      });
      /**
       * Returns the string, with after processing the following backslash escape sequences.
       *
       * attacklab: The polite way to do this is with the new escapeCharacters() function:
       *
       *    text = escapeCharacters(text,"\\",true);
       *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
       *
       * ...but we're sidestepping its use of the (slow) RegExp constructor
       * as an optimization for Firefox.  This function gets called a LOT.
       */

      showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
        return text;
      });
      /**
       * Encode/escape certain characters inside Markdown code runs.
       * The point is that in code, these characters are literals,
       * and lose their special Markdown meanings.
       */

      showdown.subParser('encodeCode', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('encodeCode.before', text, options, globals); // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.

        text = text.replace(/&/g, '&amp;') // Do the angle bracket song and dance:
        .replace(/</g, '&lt;').replace(/>/g, '&gt;') // Now, escape characters that are magic in Markdown:
        .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch('encodeCode.after', text, options, globals);
        return text;
      });
      /**
       * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
       * don't conflict with their use in Markdown for code, italics and strong.
       */

      showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals); // Build a regex to find HTML tags.

        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
            comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function (wholeMatch) {
          return wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`').replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function (wholeMatch) {
          return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
        return text;
      });
      /**
       * Handle github codeblocks prior to running HashHTML so that
       * HTML contained within the codeblock gets escaped properly
       * Example:
       * ```ruby
       *     def hello_world(x)
       *       puts "Hello, #{x}"
       *     end
       * ```
       */

      showdown.subParser('githubCodeBlocks', function (text, options, globals) {
        'use strict'; // early exit if option is not enabled

        if (!options.ghCodeBlocks) {
          return text;
        }

        text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);
        text += '¨0';
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
          var end = options.omitExtraWLInCodeBlocks ? '' : '\n'; // First parse the github code block

          codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
          codeblock = showdown.subParser('detab')(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines

          codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

          codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';
          codeblock = showdown.subParser('hashBlock')(codeblock, options, globals); // Since GHCodeblocks can be false positives, we need to
          // store the primitive text and the parsed text in a global var,
          // and then return a token

          return '\n\n¨G' + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + 'G\n\n';
        }); // attacklab: strip sentinel

        text = text.replace(/¨0/, '');
        return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
      });
      showdown.subParser('hashBlock', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('hashBlock.before', text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, '');
        text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
        text = globals.converter._dispatch('hashBlock.after', text, options, globals);
        return text;
      });
      /**
       * Hash and escape <code> elements that should not be parsed as markdown
       */

      showdown.subParser('hashCodeTags', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

        var repFunc = function repFunc(wholeMatch, match, left, right) {
          var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
          return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
        }; // Hash naked <code>


        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');
        text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
        return text;
      });
      showdown.subParser('hashElement', function (text, options, globals) {
        'use strict';

        return function (wholeMatch, m1) {
          var blockText = m1; // Undo double lines

          blockText = blockText.replace(/\n\n/g, '\n');
          blockText = blockText.replace(/^\n/, ''); // strip trailing blank lines

          blockText = blockText.replace(/\n+$/g, ''); // Replace the element text with a marker ("¨KxK" where x is its key)

          blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';
          return blockText;
        };
      });
      showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

        var blockTags = ['pre', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'table', 'dl', 'ol', 'ul', 'script', 'noscript', 'form', 'fieldset', 'iframe', 'math', 'style', 'section', 'header', 'footer', 'nav', 'article', 'aside', 'address', 'audio', 'canvas', 'figure', 'hgroup', 'output', 'video', 'p'],
            repFunc = function repFunc(wholeMatch, match, left, right) {
          var txt = wholeMatch; // check if this html element is marked as markdown
          // if so, it's contents should be parsed as markdown

          if (left.search(/\bmarkdown\b/) !== -1) {
            txt = left + globals.converter.makeHtml(match) + right;
          }

          return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
        };

        if (options.backslashEscapesHTMLTags) {
          // encode backslash escaped HTML tags
          text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
            return '&lt;' + inside + '&gt;';
          });
        } // hash HTML Blocks


        for (var i = 0; i < blockTags.length; ++i) {
          var opTagPos,
              rgx1 = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
              patLeft = '<' + blockTags[i] + '\\b[^>]*>',
              patRight = '</' + blockTags[i] + '>'; // 1. Look for the first position of the first opening HTML tag in the text

          while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
            // if the HTML tag is \ escaped, we need to escape it and break
            //2. Split the text in that position
            var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
                //3. Match recursively
            newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im'); // prevent an infinite loop

            if (newSubText1 === subTexts[1]) {
              break;
            }

            text = subTexts[0].concat(newSubText1);
          }
        } // HR SPECIAL CASE


        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals)); // Special case for standalone HTML comments

        text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
          return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
        }, '^ {0,3}<!--', '-->', 'gm'); // PHP and ASP-style processor instructions (<?...?> and <%...%>)

        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));
        text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
        return text;
      });
      /**
       * Hash span elements that should not be parsed as markdown
       */

      showdown.subParser('hashHTMLSpans', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

        function hashHTMLSpan(html) {
          return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
        } // Hash Self Closing tags


        text = text.replace(/<[^>]+?\/>/gi, function (wm) {
          return hashHTMLSpan(wm);
        }); // Hash tags without properties

        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
          return hashHTMLSpan(wm);
        }); // Hash tags with properties

        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
          return hashHTMLSpan(wm);
        }); // Hash self closing tags without />

        text = text.replace(/<[^>]+?>/gi, function (wm) {
          return hashHTMLSpan(wm);
        });
        /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

        text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
        return text;
      });
      /**
       * Unhash HTML spans
       */

      showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

        for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
          var repText = globals.gHtmlSpans[i],
              // limiter to prevent infinite loop (assume 10 as limit for recurse)
          limit = 0;

          while (/¨C(\d+)C/.test(repText)) {
            var num = RegExp.$1;
            repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);

            if (limit === 10) {
              console.error('maximum nesting of 10 spans reached!!!');
              break;
            }

            ++limit;
          }

          text = text.replace('¨C' + i + 'C', repText);
        }

        text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
        return text;
      });
      /**
       * Hash and escape <pre><code> elements that should not be parsed as markdown
       */

      showdown.subParser('hashPreCodeTags', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

        var repFunc = function repFunc(wholeMatch, match, left, right) {
          // encode html entities
          var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
          return '\n\n¨G' + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + 'G\n\n';
        }; // Hash <pre><code>


        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');
        text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
        return text;
      });
      showdown.subParser('headers', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('headers.before', text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart),
            // Set text-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function (wholeMatch, m1) {
          var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
              hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
              hLevel = headerLevelStart,
              hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
          return showdown.subParser('hashBlock')(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function (matchFound, m1) {
          var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
              hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
              hLevel = headerLevelStart + 1,
              hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
          return showdown.subParser('hashBlock')(hashBlock, options, globals);
        }); // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //

        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
          var hText = m2;

          if (options.customizedHeaderId) {
            hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
          }

          var span = showdown.subParser('spanGamut')(hText, options, globals),
              hID = options.noHeaderId ? '' : ' id="' + headerId(m2) + '"',
              hLevel = headerLevelStart - 1 + m1.length,
              header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';
          return showdown.subParser('hashBlock')(header, options, globals);
        });

        function headerId(m) {
          var title, prefix; // It is separate from other options to allow combining prefix and customized

          if (options.customizedHeaderId) {
            var match = m.match(/\{([^{]+?)}\s*$/);

            if (match && match[1]) {
              m = match[1];
            }
          }

          title = m; // Prefix id to prevent causing inadvertent pre-existing style matches.

          if (showdown.helper.isString(options.prefixHeaderId)) {
            prefix = options.prefixHeaderId;
          } else if (options.prefixHeaderId === true) {
            prefix = 'section-';
          } else {
            prefix = '';
          }

          if (!options.rawPrefixHeaderId) {
            title = prefix + title;
          }

          if (options.ghCompatibleHeaderId) {
            title = title.replace(/ /g, '-') // replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, '').replace(/¨T/g, '').replace(/¨D/g, '') // replace rest of the chars (&~$ are repeated as they might have been escaped)
            // borrowed from github's redcarpet (some they should produce similar results)
            .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '').toLowerCase();
          } else if (options.rawHeaderId) {
            title = title.replace(/ /g, '-') // replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, '&').replace(/¨T/g, '¨').replace(/¨D/g, '$') // replace " and '
            .replace(/["']/g, '-').toLowerCase();
          } else {
            title = title.replace(/[^\w]/g, '').toLowerCase();
          }

          if (options.rawPrefixHeaderId) {
            title = prefix + title;
          }

          if (globals.hashLinkCounts[title]) {
            title = title + '-' + globals.hashLinkCounts[title]++;
          } else {
            globals.hashLinkCounts[title] = 1;
          }

          return title;
        }

        text = globals.converter._dispatch('headers.after', text, options, globals);
        return text;
      });
      /**
       * Turn Markdown link shortcuts into XHTML <a> tags.
       */

      showdown.subParser('horizontalRule', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('horizontalRule.before', text, options, globals);
        var key = showdown.subParser('hashBlock')('<hr />', options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
        return text;
      });
      /**
       * Turn Markdown image shortcuts into <img> tags.
       */

      showdown.subParser('images', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('images.before', text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
            base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
            refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
          url = url.replace(/\s/g, '');
          return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }

        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
          var gUrls = globals.gUrls,
              gTitles = globals.gTitles,
              gDims = globals.gDimensions;
          linkId = linkId.toLowerCase();

          if (!title) {
            title = '';
          } // Special case for explicit empty url


          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = '';
          } else if (url === '' || url === null) {
            if (linkId === '' || linkId === null) {
              // lower-case and turn embedded newlines into spaces
              linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
            }

            url = '#' + linkId;

            if (!showdown.helper.isUndefined(gUrls[linkId])) {
              url = gUrls[linkId];

              if (!showdown.helper.isUndefined(gTitles[linkId])) {
                title = gTitles[linkId];
              }

              if (!showdown.helper.isUndefined(gDims[linkId])) {
                width = gDims[linkId].width;
                height = gDims[linkId].height;
              }
            } else {
              return wholeMatch;
            }
          }

          altText = altText.replace(/"/g, '&quot;') //altText = showdown.helper.escapeCharacters(altText, '*_', false);
          .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback); //url = showdown.helper.escapeCharacters(url, '*_', false);

          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<img src="' + url + '" alt="' + altText + '"';

          if (title && showdown.helper.isString(title)) {
            title = title.replace(/"/g, '&quot;') //title = showdown.helper.escapeCharacters(title, '*_', false);
            .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }

          if (width && height) {
            width = width === '*' ? 'auto' : width;
            height = height === '*' ? 'auto' : height;
            result += ' width="' + width + '"';
            result += ' height="' + height + '"';
          }

          result += ' />';
          return result;
        } // First, handle reference-style labeled images: ![alt text][id]


        text = text.replace(referenceRegExp, writeImageTag); // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
        // base64 encoded images

        text = text.replace(base64RegExp, writeImageTagBase64); // cases with crazy urls like ./image/cat1).png

        text = text.replace(crazyRegExp, writeImageTag); // normal cases

        text = text.replace(inlineRegExp, writeImageTag); // handle reference-style shortcuts: ![img text]

        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch('images.after', text, options, globals);
        return text;
      });
      showdown.subParser('italicsAndBold', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('italicsAndBold.before', text, options, globals); // it's faster to have 3 separate regexes for each case than have just one
        // because of backtracing, in some cases, it could lead to an exponential effect
        // called "catastrophic backtrace". Ominous!

        function parseInside(txt, left, right) {
          /*
          if (options.simplifiedAutoLink) {
            txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
          }
          */
          return left + txt + right;
        } // Parse underscores


        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
            return parseInside(txt, '<strong><em>', '</em></strong>');
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
            return parseInside(txt, '<strong>', '</strong>');
          });
          text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
            return parseInside(txt, '<em>', '</em>');
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
            return /\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
            return /\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm;
          });
          text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
            // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
            return /\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm;
          });
        } // Now parse asterisks


        if (options.literalMidWordAsterisks) {
          text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
            return parseInside(txt, lead + '<strong><em>', '</em></strong>');
          });
          text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
            return parseInside(txt, lead + '<strong>', '</strong>');
          });
          text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
            return parseInside(txt, lead + '<em>', '</em>');
          });
        } else {
          text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
            return /\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm;
          });
          text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
            return /\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm;
          });
          text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
            // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
            return /\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm;
          });
        }

        text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
        return text;
      });
      /**
       * Form HTML ordered (numbered) and unordered (bulleted) lists.
       */

      showdown.subParser('lists', function (text, options, globals) {
        'use strict';
        /**
         * Process the contents of a single ordered or unordered list, splitting it
         * into individual list items.
         * @param {string} listStr
         * @param {boolean} trimTrailing
         * @returns {string}
         */

        function processListItems(listStr, trimTrailing) {
          // The $g_list_level global keeps track of when we're inside a list.
          // Each time we enter a list, we increment it; when we leave a list,
          // we decrement. If it's zero, we're not in a list anymore.
          //
          // We do this because when we're not inside a list, we want to treat
          // something like this:
          //
          //    I recommend upgrading to version
          //    8. Oops, now this line is treated
          //    as a sub-list.
          //
          // As a single paragraph, despite the fact that the second line starts
          // with a digit-period-space sequence.
          //
          // Whereas when we're inside a list (or sub-list), that line will be
          // treated as the start of a sub-list. What a kludge, huh? This is
          // an aspect of Markdown's syntax that's hard to parse perfectly
          // without resorting to mind-reading. Perhaps the solution is to
          // change the syntax rules such that sub-lists must start with a
          // starting cardinal number; e.g. "1." or "a.".
          globals.gListLevel++; // trim trailing blank lines:

          listStr = listStr.replace(/\n{2,}$/, '\n'); // attacklab: add sentinel to emulate \z

          listStr += '¨0';
          var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
              isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr); // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
          // which is a syntax breaking change
          // activating this option reverts to old behavior

          if (options.disableForced4SpacesIndentedSublists) {
            rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
          }

          listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
            checked = checked && checked.trim() !== '';
            var item = showdown.subParser('outdent')(m4, options, globals),
                bulletStyle = ''; // Support for github tasklists

            if (taskbtn && options.tasklists) {
              bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
              item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';

                if (checked) {
                  otp += ' checked';
                }

                otp += '>';
                return otp;
              });
            } // ISSUE #312
            // This input: - - - a
            // causes trouble to the parser, since it interprets it as:
            // <ul><li><li><li>a</li></li></li></ul>
            // instead of:
            // <ul><li>- - a</li></ul>
            // So, to prevent it, we will put a marker (¨A)in the beginning of the line
            // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser


            item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
              return '¨A' + wm2;
            }); // m1 - Leading line or
            // Has a double return (multi paragraph) or
            // Has sublist

            if (m1 || item.search(/\n{2,}/) > -1) {
              item = showdown.subParser('githubCodeBlocks')(item, options, globals);
              item = showdown.subParser('blockGamut')(item, options, globals);
            } else {
              // Recursion for sub-lists:
              item = showdown.subParser('lists')(item, options, globals);
              item = item.replace(/\n$/, ''); // chomp(item)

              item = showdown.subParser('hashHTMLBlocks')(item, options, globals); // Colapse double linebreaks

              item = item.replace(/\n\n+/g, '\n\n');

              if (isParagraphed) {
                item = showdown.subParser('paragraphs')(item, options, globals);
              } else {
                item = showdown.subParser('spanGamut')(item, options, globals);
              }
            } // now we need to remove the marker (¨A)


            item = item.replace('¨A', ''); // we can finally wrap the line in list item tags

            item = '<li' + bulletStyle + '>' + item + '</li>\n';
            return item;
          }); // attacklab: strip sentinel

          listStr = listStr.replace(/¨0/g, '');
          globals.gListLevel--;

          if (trimTrailing) {
            listStr = listStr.replace(/\s+$/, '');
          }

          return listStr;
        }

        function styleStartNumber(list, listType) {
          // check if ol and starts by a number different than 1
          if (listType === 'ol') {
            var res = list.match(/^ *(\d+)\./);

            if (res && res[1] !== '1') {
              return ' start="' + res[1] + '"';
            }
          }

          return '';
        }
        /**
         * Check and parse consecutive lists (better fix for issue #142)
         * @param {string} list
         * @param {string} listType
         * @param {boolean} trimTrailing
         * @returns {string}
         */


        function parseConsecutiveLists(list, listType, trimTrailing) {
          // check if we caught 2 or more consecutive lists by mistake
          // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
          var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
              ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
              counterRxg = listType === 'ul' ? olRgx : ulRgx,
              result = '';

          if (list.search(counterRxg) !== -1) {
            (function parseCL(txt) {
              var pos = txt.search(counterRxg),
                  style = styleStartNumber(list, listType);

              if (pos !== -1) {
                // slice
                result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n'; // invert counterType and listType

                listType = listType === 'ul' ? 'ol' : 'ul';
                counterRxg = listType === 'ul' ? olRgx : ulRgx; //recurse

                parseCL(txt.slice(pos));
              } else {
                result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
              }
            })(list);
          } else {
            var style = styleStartNumber(list, listType);
            result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
          }

          return result;
        }
        /** Start of list parsing **/


        text = globals.converter._dispatch('lists.before', text, options, globals); // add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231

        text += '¨0';

        if (globals.gListLevel) {
          text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
            return parseConsecutiveLists(list, listType, true);
          });
        } else {
          text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
            return parseConsecutiveLists(list, listType, false);
          });
        } // strip sentinel


        text = text.replace(/¨0/, '');
        text = globals.converter._dispatch('lists.after', text, options, globals);
        return text;
      });
      /**
       * Parse metadata at the top of the document
       */

      showdown.subParser('metadata', function (text, options, globals) {
        'use strict';

        if (!options.metadata) {
          return text;
        }

        text = globals.converter._dispatch('metadata.before', text, options, globals);

        function parseMetadataContents(content) {
          // raw is raw so it's not changed in any way
          globals.metadata.raw = content; // escape chars forbidden in html attributes
          // double quotes

          content = content // ampersand first
          .replace(/&/g, '&amp;') // double quotes
          .replace(/"/g, '&quot;');
          content = content.replace(/\n {4}/g, ' ');
          content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
            globals.metadata.parsed[key] = value;
            return '';
          });
        }

        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
          parseMetadataContents(content);
          return '¨M';
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
          if (format) {
            globals.metadata.format = format;
          }

          parseMetadataContents(content);
          return '¨M';
        });
        text = text.replace(/¨M/g, '');
        text = globals.converter._dispatch('metadata.after', text, options, globals);
        return text;
      });
      /**
       * Remove one level of line-leading tabs or spaces
       */

      showdown.subParser('outdent', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('outdent.before', text, options, globals); // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"

        text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width
        // attacklab: clean up hack

        text = text.replace(/¨0/g, '');
        text = globals.converter._dispatch('outdent.after', text, options, globals);
        return text;
      });
      /**
       *
       */

      showdown.subParser('paragraphs', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('paragraphs.before', text, options, globals); // Strip leading and trailing lines:

        text = text.replace(/^\n+/g, '');
        text = text.replace(/\n+$/g, '');
        var grafs = text.split(/\n{2,}/g),
            grafsOut = [],
            end = grafs.length; // Wrap <p> tags

        for (var i = 0; i < end; i++) {
          var str = grafs[i]; // if this is an HTML marker, copy it

          if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
            grafsOut.push(str); // test for presence of characters to prevent empty lines being parsed
            // as paragraphs (resulting in undesired extra empty paragraphs)
          } else if (str.search(/\S/) >= 0) {
            str = showdown.subParser('spanGamut')(str, options, globals);
            str = str.replace(/^([ \t]*)/g, '<p>');
            str += '</p>';
            grafsOut.push(str);
          }
        }
        /** Unhashify HTML blocks */


        end = grafsOut.length;

        for (i = 0; i < end; i++) {
          var blockText = '',
              grafsOutIt = grafsOut[i],
              codeFlag = false; // if this is a marker for an html block...
          // use RegExp.test instead of string.search because of QML bug

          while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
            var delim = RegExp.$1,
                num = RegExp.$2;

            if (delim === 'K') {
              blockText = globals.gHtmlBlocks[num];
            } else {
              // we need to check if ghBlock is a false positive
              if (codeFlag) {
                // use encoded version of all text
                blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
              } else {
                blockText = globals.ghCodeBlocks[num].codeblock;
              }
            }

            blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

            grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText); // Check if grafsOutIt is a pre->code

            if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
              codeFlag = true;
            }
          }

          grafsOut[i] = grafsOutIt;
        }

        text = grafsOut.join('\n'); // Strip leading and trailing lines:

        text = text.replace(/^\n+/g, '');
        text = text.replace(/\n+$/g, '');
        return globals.converter._dispatch('paragraphs.after', text, options, globals);
      });
      /**
       * Run extension
       */

      showdown.subParser('runExtension', function (ext, text, options, globals) {
        'use strict';

        if (ext.filter) {
          text = ext.filter(text, globals.converter, options);
        } else if (ext.regex) {
          // TODO remove this when old extension loading mechanism is deprecated
          var re = ext.regex;

          if (!(re instanceof RegExp)) {
            re = new RegExp(re, 'g');
          }

          text = text.replace(re, ext.replace);
        }

        return text;
      });
      /**
       * These are all the transformations that occur *within* block-level
       * tags like paragraphs, headers, and list items.
       */

      showdown.subParser('spanGamut', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('spanGamut.before', text, options, globals);
        text = showdown.subParser('codeSpans')(text, options, globals);
        text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
        text = showdown.subParser('encodeBackslashEscapes')(text, options, globals); // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.

        text = showdown.subParser('images')(text, options, globals);
        text = showdown.subParser('anchors')(text, options, globals); // Make links out of things like `<http://example.com/>`
        // Must come after anchors, because you can use < and >
        // delimiters in inline links like [this](<url>).

        text = showdown.subParser('autoLinks')(text, options, globals);
        text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
        text = showdown.subParser('emoji')(text, options, globals);
        text = showdown.subParser('underline')(text, options, globals);
        text = showdown.subParser('italicsAndBold')(text, options, globals);
        text = showdown.subParser('strikethrough')(text, options, globals);
        text = showdown.subParser('ellipsis')(text, options, globals); // we need to hash HTML tags inside spans

        text = showdown.subParser('hashHTMLSpans')(text, options, globals); // now we encode amps and angles

        text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals); // Do hard breaks

        if (options.simpleLineBreaks) {
          // GFM style hard breaks
          // only add line breaks if the text does not contain a block (special case for lists)
          if (!/\n\n¨K/.test(text)) {
            text = text.replace(/\n+/g, '<br />\n');
          }
        } else {
          // Vanilla hard breaks
          text = text.replace(/  +\n/g, '<br />\n');
        }

        text = globals.converter._dispatch('spanGamut.after', text, options, globals);
        return text;
      });
      showdown.subParser('strikethrough', function (text, options, globals) {
        'use strict';

        function parseInside(txt) {
          if (options.simplifiedAutoLink) {
            txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
          }

          return '<del>' + txt + '</del>';
        }

        if (options.strikethrough) {
          text = globals.converter._dispatch('strikethrough.before', text, options, globals);
          text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) {
            return parseInside(txt);
          });
          text = globals.converter._dispatch('strikethrough.after', text, options, globals);
        }

        return text;
      });
      /**
       * Strips link definitions from text, stores the URLs and titles in
       * hash references.
       * Link defs are in the form: ^[id]: url "optional title"
       */

      showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
        'use strict';

        var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
            base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm; // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug

        text += '¨0';

        var replaceFunc = function replaceFunc(wholeMatch, linkId, url, width, height, blankLines, title) {
          linkId = linkId.toLowerCase();

          if (url.match(/^data:.+?\/.+?;base64,/)) {
            // remove newlines
            globals.gUrls[linkId] = url.replace(/\s/g, '');
          } else {
            globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals); // Link IDs are case-insensitive
          }

          if (blankLines) {
            // Oops, found blank lines, so it's not a title.
            // Put back the parenthetical statement we stole.
            return blankLines + title;
          } else {
            if (title) {
              globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
            }

            if (options.parseImgDimensions && width && height) {
              globals.gDimensions[linkId] = {
                width: width,
                height: height
              };
            }
          } // Completely remove the definition from the text


          return '';
        }; // first we try to find base64 link references


        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc); // attacklab: strip sentinel

        text = text.replace(/¨0/, '');
        return text;
      });
      showdown.subParser('tables', function (text, options, globals) {
        'use strict';

        if (!options.tables) {
          return text;
        }

        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
            //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
        singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

        function parseStyles(sLine) {
          if (/^:[ \t]*--*$/.test(sLine)) {
            return ' style="text-align:left;"';
          } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
            return ' style="text-align:right;"';
          } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
            return ' style="text-align:center;"';
          } else {
            return '';
          }
        }

        function parseHeaders(header, style) {
          var id = '';
          header = header.trim(); // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility

          if (options.tablesHeaderId || options.tableHeaderId) {
            id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
          }

          header = showdown.subParser('spanGamut')(header, options, globals);
          return '<th' + id + style + '>' + header + '</th>\n';
        }

        function parseCells(cell, style) {
          var subText = showdown.subParser('spanGamut')(cell, options, globals);
          return '<td' + style + '>' + subText + '</td>\n';
        }

        function buildTable(headers, cells) {
          var tb = '<table>\n<thead>\n<tr>\n',
              tblLgn = headers.length;

          for (var i = 0; i < tblLgn; ++i) {
            tb += headers[i];
          }

          tb += '</tr>\n</thead>\n<tbody>\n';

          for (i = 0; i < cells.length; ++i) {
            tb += '<tr>\n';

            for (var ii = 0; ii < tblLgn; ++ii) {
              tb += cells[i][ii];
            }

            tb += '</tr>\n';
          }

          tb += '</tbody>\n</table>\n';
          return tb;
        }

        function parseTable(rawTable) {
          var i,
              tableLines = rawTable.split('\n');

          for (i = 0; i < tableLines.length; ++i) {
            // strip wrong first and last column if wrapped tables are used
            if (/^ {0,3}\|/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
            }

            if (/\|[ \t]*$/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
            } // parse code spans first, but we only support one line code spans


            tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
          }

          var rawHeaders = tableLines[0].split('|').map(function (s) {
            return s.trim();
          }),
              rawStyles = tableLines[1].split('|').map(function (s) {
            return s.trim();
          }),
              rawCells = [],
              headers = [],
              styles = [],
              cells = [];
          tableLines.shift();
          tableLines.shift();

          for (i = 0; i < tableLines.length; ++i) {
            if (tableLines[i].trim() === '') {
              continue;
            }

            rawCells.push(tableLines[i].split('|').map(function (s) {
              return s.trim();
            }));
          }

          if (rawHeaders.length < rawStyles.length) {
            return rawTable;
          }

          for (i = 0; i < rawStyles.length; ++i) {
            styles.push(parseStyles(rawStyles[i]));
          }

          for (i = 0; i < rawHeaders.length; ++i) {
            if (showdown.helper.isUndefined(styles[i])) {
              styles[i] = '';
            }

            headers.push(parseHeaders(rawHeaders[i], styles[i]));
          }

          for (i = 0; i < rawCells.length; ++i) {
            var row = [];

            for (var ii = 0; ii < headers.length; ++ii) {
              if (showdown.helper.isUndefined(rawCells[i][ii])) {}

              row.push(parseCells(rawCells[i][ii], styles[ii]));
            }

            cells.push(row);
          }

          return buildTable(headers, cells);
        }

        text = globals.converter._dispatch('tables.before', text, options, globals); // find escaped pipe characters

        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback); // parse multi column tables

        text = text.replace(tableRgx, parseTable); // parse one column tables

        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch('tables.after', text, options, globals);
        return text;
      });
      showdown.subParser('underline', function (text, options, globals) {
        'use strict';

        if (!options.underline) {
          return text;
        }

        text = globals.converter._dispatch('underline.before', text, options, globals);

        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
            return '<u>' + txt + '</u>';
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
            return '<u>' + txt + '</u>';
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
            return /\S$/.test(m) ? '<u>' + m + '</u>' : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
            return /\S$/.test(m) ? '<u>' + m + '</u>' : wm;
          });
        } // escape remaining underscores to prevent them being parsed by italic and bold


        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch('underline.after', text, options, globals);
        return text;
      });
      /**
       * Swap back in all the special characters we've hidden.
       */

      showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
        'use strict';

        text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
          var charCodeToReplace = parseInt(m1);
          return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
        return text;
      });
      showdown.subParser('makeMarkdown.blockquote', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes()) {
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

            if (innerTxt === '') {
              continue;
            }

            txt += innerTxt;
          }
        } // cleanup


        txt = txt.trim();
        txt = '> ' + txt.split('\n').join('\n> ');
        return txt;
      });
      showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {
        'use strict';

        var lang = node.getAttribute('language'),
            num = node.getAttribute('precodenum');
        return '```' + lang + '\n' + globals.preList[num] + '\n```';
      });
      showdown.subParser('makeMarkdown.codeSpan', function (node) {
        'use strict';

        return '`' + node.innerHTML + '`';
      });
      showdown.subParser('makeMarkdown.emphasis', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes()) {
          txt += '*';
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }

          txt += '*';
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {
        'use strict';

        var headerMark = new Array(headerLevel + 1).join('#'),
            txt = '';

        if (node.hasChildNodes()) {
          txt = headerMark + ' ';
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.hr', function () {
        'use strict';

        return '---';
      });
      showdown.subParser('makeMarkdown.image', function (node) {
        'use strict';

        var txt = '';

        if (node.hasAttribute('src')) {
          txt += '![' + node.getAttribute('alt') + '](';
          txt += '<' + node.getAttribute('src') + '>';

          if (node.hasAttribute('width') && node.hasAttribute('height')) {
            txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
          }

          if (node.hasAttribute('title')) {
            txt += ' "' + node.getAttribute('title') + '"';
          }

          txt += ')';
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.links', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes() && node.hasAttribute('href')) {
          var children = node.childNodes,
              childrenLength = children.length;
          txt = '[';

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }

          txt += '](';
          txt += '<' + node.getAttribute('href') + '>';

          if (node.hasAttribute('title')) {
            txt += ' "' + node.getAttribute('title') + '"';
          }

          txt += ')';
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.list', function (node, globals, type) {
        'use strict';

        var txt = '';

        if (!node.hasChildNodes()) {
          return '';
        }

        var listItems = node.childNodes,
            listItemsLenght = listItems.length,
            listNum = node.getAttribute('start') || 1;

        for (var i = 0; i < listItemsLenght; ++i) {
          if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
            continue;
          } // define the bullet to use in list


          var bullet = '';

          if (type === 'ol') {
            bullet = listNum.toString() + '. ';
          } else {
            bullet = '- ';
          } // parse list item


          txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
          ++listNum;
        } // add comment at the end to prevent consecutive lists to be parsed as one


        txt += '\n<!-- -->\n';
        return txt.trim();
      });
      showdown.subParser('makeMarkdown.listItem', function (node, globals) {
        'use strict';

        var listItemTxt = '';
        var children = node.childNodes,
            childrenLenght = children.length;

        for (var i = 0; i < childrenLenght; ++i) {
          listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
        } // if it's only one liner, we need to add a newline at the end


        if (!/\n$/.test(listItemTxt)) {
          listItemTxt += '\n';
        } else {
          // it's multiparagraph, so we need to indent
          listItemTxt = listItemTxt.split('\n').join('\n    ').replace(/^ {4}$/gm, '').replace(/\n\n+/g, '\n\n');
        }

        return listItemTxt;
      });
      showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {
        'use strict';

        spansOnly = spansOnly || false;
        var txt = ''; // edge case of text without wrapper paragraph

        if (node.nodeType === 3) {
          return showdown.subParser('makeMarkdown.txt')(node, globals);
        } // HTML comment


        if (node.nodeType === 8) {
          return '<!--' + node.data + '-->\n\n';
        } // process only node elements


        if (node.nodeType !== 1) {
          return '';
        }

        var tagName = node.tagName.toLowerCase();

        switch (tagName) {
          //
          // BLOCKS
          //
          case 'h1':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n';
            }

            break;

          case 'h2':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n';
            }

            break;

          case 'h3':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n';
            }

            break;

          case 'h4':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n';
            }

            break;

          case 'h5':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n';
            }

            break;

          case 'h6':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n';
            }

            break;

          case 'p':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n';
            }

            break;

          case 'blockquote':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n';
            }

            break;

          case 'hr':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n';
            }

            break;

          case 'ol':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n';
            }

            break;

          case 'ul':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n';
            }

            break;

          case 'precode':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n';
            }

            break;

          case 'pre':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n';
            }

            break;

          case 'table':
            if (!spansOnly) {
              txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n';
            }

            break;
          //
          // SPANS
          //

          case 'code':
            txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
            break;

          case 'em':
          case 'i':
            txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
            break;

          case 'strong':
          case 'b':
            txt = showdown.subParser('makeMarkdown.strong')(node, globals);
            break;

          case 'del':
            txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
            break;

          case 'a':
            txt = showdown.subParser('makeMarkdown.links')(node, globals);
            break;

          case 'img':
            txt = showdown.subParser('makeMarkdown.image')(node, globals);
            break;

          default:
            txt = node.outerHTML + '\n\n';
        } // common normalization
        // TODO eventually


        return txt;
      });
      showdown.subParser('makeMarkdown.paragraph', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes()) {
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }
        } // some text normalization


        txt = txt.trim();
        return txt;
      });
      showdown.subParser('makeMarkdown.pre', function (node, globals) {
        'use strict';

        var num = node.getAttribute('prenum');
        return '<pre>' + globals.preList[num] + '</pre>';
      });
      showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes()) {
          txt += '~~';
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }

          txt += '~~';
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.strong', function (node, globals) {
        'use strict';

        var txt = '';

        if (node.hasChildNodes()) {
          txt += '**';
          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          }

          txt += '**';
        }

        return txt;
      });
      showdown.subParser('makeMarkdown.table', function (node, globals) {
        'use strict';

        var txt = '',
            tableArray = [[], []],
            headings = node.querySelectorAll('thead>tr>th'),
            rows = node.querySelectorAll('tbody>tr'),
            i,
            ii;

        for (i = 0; i < headings.length; ++i) {
          var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
              allign = '---';

          if (headings[i].hasAttribute('style')) {
            var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');

            switch (style) {
              case 'text-align:left;':
                allign = ':---';
                break;

              case 'text-align:right;':
                allign = '---:';
                break;

              case 'text-align:center;':
                allign = ':---:';
                break;
            }
          }

          tableArray[0][i] = headContent.trim();
          tableArray[1][i] = allign;
        }

        for (i = 0; i < rows.length; ++i) {
          var r = tableArray.push([]) - 1,
              cols = rows[i].getElementsByTagName('td');

          for (ii = 0; ii < headings.length; ++ii) {
            var cellContent = ' ';

            if (typeof cols[ii] !== 'undefined') {
              cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
            }

            tableArray[r].push(cellContent);
          }
        }

        var cellSpacesCount = 3;

        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            var strLen = tableArray[i][ii].length;

            if (strLen > cellSpacesCount) {
              cellSpacesCount = strLen;
            }
          }
        }

        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            if (i === 1) {
              if (tableArray[i][ii].slice(-1) === ':') {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
              } else {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
              }
            } else {
              tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            }
          }

          txt += '| ' + tableArray[i].join(' | ') + ' |\n';
        }

        return txt.trim();
      });
      showdown.subParser('makeMarkdown.tableCell', function (node, globals) {
        'use strict';

        var txt = '';

        if (!node.hasChildNodes()) {
          return '';
        }

        var children = node.childNodes,
            childrenLength = children.length;

        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
        }

        return txt.trim();
      });
      showdown.subParser('makeMarkdown.txt', function (node) {
        'use strict';

        var txt = node.nodeValue; // multiple spaces are collapsed

        txt = txt.replace(/ +/g, ' '); // replace the custom ¨NBSP; with a space

        txt = txt.replace(/¨NBSP;/g, ' '); // ", <, > and & should replace escaped html entities

        txt = showdown.helper.unescapeHTMLEntities(txt); // escape markdown magic characters
        // emphasis, strong and strikethrough - can appear everywhere
        // we also escape pipe (|) because of tables
        // and escape ` because of code blocks and spans

        txt = txt.replace(/([*_~|`])/g, '\\$1'); // escape > because of blockquotes

        txt = txt.replace(/^(\s*)>/g, '\\$1>'); // hash character, only troublesome at the beginning of a line because of headers

        txt = txt.replace(/^#/gm, '\\#'); // horizontal rules

        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3'); // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer

        txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.'); // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)

        txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2'); // images and links, ] followed by ( is problematic, so we escape it

        txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\('); // reference URIs must also be escaped

        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');
        return txt;
      });
      var root = this; // AMD Loader

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          'use strict';

          return showdown;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // CommonJS/nodeJS Loader
      } else {}
    }).call(this); //# sourceMappingURL=showdown.js.map

    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumb',
      template: "\n      <ng-content></ng-content>\n  ",
      host: {
        class: 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
      }
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
    \******************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-home */
    "./node_modules/@iconify/icons-ic/twotone-home.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");

    var BreadcrumbsComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);

        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbsComponent.prototype, "crumbs", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-breadcrumbs',
      template: "\n      <div class=\"flex items-center\">\n          <vex-breadcrumb>\n              <a [routerLink]=\"['/']\">\n                  <ic-icon [icon]=\"icHome\" inline=\"true\" size=\"20px\"></ic-icon>\n              </a>\n          </vex-breadcrumb>\n          <ng-container *ngFor=\"let crumb of crumbs; trackBy: trackByValue\">\n              <div class=\"w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2\"></div>\n              <vex-breadcrumb>\n                  <a [routerLink]=\"[]\">{{ crumb }}</a>\n              </vex-breadcrumb>\n          </ng-container>\n      </div>\n  "
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
    \***************************************************************/

  /*! exports provided: BreadcrumbsModule */

  /***/
  function srcVexComponentsBreadcrumbsBreadcrumbsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function () {
      return BreadcrumbsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");

    var BreadcrumbsModule = function BreadcrumbsModule() {
      _classCallCheck(this, BreadcrumbsModule);
    };

    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
      declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
      exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
    })], BreadcrumbsModule);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout-content.directive.ts":
  /*!**************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: PageLayoutContentDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function () {
      return PageLayoutContentDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutContentDirective = function PageLayoutContentDirective() {
      _classCallCheck(this, PageLayoutContentDirective);
    };

    PageLayoutContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexPageLayoutContent],vex-page-layout-content',
      host: {
        class: 'vex-page-layout-content'
      }
    })], PageLayoutContentDirective);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout-header.directive.ts":
  /*!*************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
    \*************************************************************************/

  /*! exports provided: PageLayoutHeaderDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function () {
      return PageLayoutHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutHeaderDirective = function PageLayoutHeaderDirective() {
      _classCallCheck(this, PageLayoutHeaderDirective);
    };

    PageLayoutHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexPageLayoutHeader],vex-page-layout-header',
      host: {
        class: 'vex-page-layout-header'
      }
    })], PageLayoutHeaderDirective);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.component.scss":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsPageLayoutPageLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: #5c77ff;\n  color: #FFF;\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: #FFF;\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: #FFF;\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvRDpcXERvY3VtZW50c1xcUHJvamVjdHNcXHZpbmN1bGFjaW9uLmdpdGh1Yi5pby9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHBhZ2UtbGF5b3V0XFxwYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQ0NGOztBREVBOztFQUVFLHlDQUFBO0FDQ0Y7O0FERUE7O0VBRUUsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yzc3ZmY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiAjRkZGO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iLCIudmV4LXBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtc2ltcGxlIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+ICogPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSxcbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6ICNGRkY7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageLayoutComponent */

  /***/
  function srcVexComponentsPageLayoutPageLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function () {
      return PageLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutComponent =
    /*#__PURE__*/
    function () {
      function PageLayoutComponent() {
        _classCallCheck(this, PageLayoutComponent);

        this.mode = 'simple';
      }

      _createClass(PageLayoutComponent, [{
        key: "isCard",
        get: function get() {
          return this.mode === 'card';
        }
      }, {
        key: "isSimple",
        get: function get() {
          return this.mode === 'simple';
        }
      }]);

      return PageLayoutComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageLayoutComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-card')], PageLayoutComponent.prototype, "isCard", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-simple')], PageLayoutComponent.prototype, "isSimple", null);
    PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-page-layout',
      template: '<ng-content></ng-content>',
      host: {
        class: 'vex-page-layout'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-layout.component.scss */
      "./src/@vex/components/page-layout/page-layout.component.scss")).default]
    })], PageLayoutComponent);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
    \***************************************************************/

  /*! exports provided: PageLayoutModule */

  /***/
  function srcVexComponentsPageLayoutPageLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function () {
      return PageLayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-header.directive */
    "./src/@vex/components/page-layout/page-layout-header.directive.ts");
    /* harmony import */


    var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");

    var PageLayoutModule = function PageLayoutModule() {
      _classCallCheck(this, PageLayoutModule);
    };

    PageLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]],
      exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]]
    })], PageLayoutModule);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2Vjb25kYXJ5LXRvb2xiYXIvRDpcXERvY3VtZW50c1xcUHJvamVjdHNcXHZpbmN1bGFjaW9uLmdpdGh1Yi5pby9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHNlY29uZGFyeS10b29sYmFyXFxzZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvc2Vjb25kYXJ5LXRvb2xiYXIvc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0RBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRhcnktdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KSAqIC0xKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLmZpeGVkIHtcbiAgd2lkdGg6IHZhcigtLXRvb2xiYXItd2lkdGgpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXItcGxhY2Vob2xkZXIge1xuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XG59XG5cbjo6bmctZGVlcCAuaXMtbW9iaWxlIC5maXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgYm9keSAuZml4ZWQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZW5hdi13aWR0aCkpO1xufVxuXG46Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIDo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SecondaryToolbarComponent */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function () {
      return SecondaryToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SecondaryToolbarComponent =
    /*#__PURE__*/
    function () {
      function SecondaryToolbarComponent(configService) {
        _classCallCheck(this, SecondaryToolbarComponent);

        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return config.toolbar.fixed;
        }));
      }

      _createClass(SecondaryToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondaryToolbarComponent;
    }();

    SecondaryToolbarComponent.ctorParameters = function () {
      return [{
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "current", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryToolbarComponent.prototype, "crumbs", void 0);
    SecondaryToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-secondary-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./secondary-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./secondary-toolbar.component.scss */
      "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss")).default]
    })], SecondaryToolbarComponent);
    /***/
  },

  /***/
  "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SecondaryToolbarModule */

  /***/
  function srcVexComponentsSecondaryToolbarSecondaryToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function () {
      return SecondaryToolbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var SecondaryToolbarModule = function SecondaryToolbarModule() {
      _classCallCheck(this, SecondaryToolbarModule);
    };

    SecondaryToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]],
      exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]]
    })], SecondaryToolbarModule);
    /***/
  },

  /***/
  "./src/app/pages/documentation/documentation-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/documentation/documentation-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DocumentationRoutingModule */

  /***/
  function srcAppPagesDocumentationDocumentationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationRoutingModule", function () {
      return DocumentationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./documentation.component */
    "./src/app/pages/documentation/documentation.component.ts");

    var routes = [{
      path: 'changelog',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | changelog-changelog-module */
        "changelog-changelog-module").then(__webpack_require__.bind(null,
        /*! ./changelog/changelog.module */
        "./src/app/pages/documentation/changelog/changelog.module.ts")).then(function (m) {
          return m.ChangelogModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: '',
      data: {
        containerEnabled: true
      },
      children: [{
        path: '',
        redirectTo: 'introduction'
      }, {
        path: 'introduction',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'folder-structure',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'installation',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'changing-styling-and-css-variables',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'build-for-production',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'start-development-server',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'further-help',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'configuration',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }, {
        path: 'adding-menu-items',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_3__["DocumentationComponent"]
      }]
    }];

    var DocumentationRoutingModule = function DocumentationRoutingModule() {
      _classCallCheck(this, DocumentationRoutingModule);
    };

    DocumentationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DocumentationRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/documentation/documentation.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/documentation/documentation.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDocumentationDocumentationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep vex-documentation vex-page-layout-content showdown a {\n  color: #5c77ff;\n}\n\n::ng-deep vex-documentation vex-page-layout-content showdown > *:first-child {\n  margin-top: 0 !important;\n}\n\n::ng-deep vex-documentation vex-page-layout-content h1, ::ng-deep vex-documentation vex-page-layout-content h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n\n::ng-deep vex-documentation vex-page-layout-content h1, ::ng-deep vex-documentation vex-page-layout-content h2, ::ng-deep vex-documentation vex-page-layout-content h3, ::ng-deep vex-documentation vex-page-layout-content h4, ::ng-deep vex-documentation vex-page-layout-content h5, ::ng-deep vex-documentation vex-page-layout-content h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n\n::ng-deep vex-documentation vex-page-layout-content p, ::ng-deep vex-documentation vex-page-layout-content ul, ::ng-deep vex-documentation vex-page-layout-content li {\n  font-size: 15px !important;\n  line-height: 1.5 !important;\n  margin: 1rem 0;\n}\n\n::ng-deep vex-documentation vex-page-layout-content strong {\n  font-weight: 500;\n}\n\n::ng-deep vex-documentation vex-page-layout-content code.typescript {\n  display: block;\n}\n\n::ng-deep vex-documentation vex-page-layout-content table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n\n::ng-deep vex-documentation vex-page-layout-content table tr {\n  background-color: var(--background-card);\n  border-top: 1px solid var(--foreground-divider);\n}\n\n::ng-deep vex-documentation vex-page-layout-content table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n\n::ng-deep vex-documentation vex-page-layout-content table td, ::ng-deep vex-documentation vex-page-layout-content table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n\n::ng-deep vex-documentation vex-page-layout-content table td:first-child, ::ng-deep vex-documentation vex-page-layout-content table th:first-child {\n  border-left: none;\n}\n\n::ng-deep vex-documentation vex-page-layout-content table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9EOlxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcdmluY3VsYWNpb24uZ2l0aHViLmlvL3NyY1xcYXBwXFxwYWdlc1xcZG9jdW1lbnRhdGlvblxcZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgc2hvd2Rvd24gYSB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgc2hvd2Rvd24gPiAqOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDEsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBoMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBoMSwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGgyLCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDMsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBoNCwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGg1LCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHAsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB1bCwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGxpIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBzdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgY29kZS50eXBlc2NyaXB0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB0ZCwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHRhYmxlIHRkOmZpcnN0LWNoaWxkLCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59IiwiOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHNob3dkb3duIGEge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHNob3dkb3duID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGgxLCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDEsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBoMiwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGgzLCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgaDQsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBoNSwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGg2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBwLCA6Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdWwsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCBsaSB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IGNvZGUudHlwZXNjcmlwdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWRvY3VtZW50YXRpb24gdmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgdGFibGUgdGQsIDo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB0aCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZy0xNik7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB0ZDpmaXJzdC1jaGlsZCwgOjpuZy1kZWVwIHZleC1kb2N1bWVudGF0aW9uIHZleC1wYWdlLWxheW91dC1jb250ZW50IHRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB2ZXgtZG9jdW1lbnRhdGlvbiB2ZXgtcGFnZS1sYXlvdXQtY29udGVudCB0YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/documentation/documentation.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/documentation/documentation.component.ts ***!
    \****************************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppPagesDocumentationDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__);

    var DocumentationComponent =
    /*#__PURE__*/
    function () {
      function DocumentationComponent() {
        _classCallCheck(this, DocumentationComponent);

        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(DocumentationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocumentationComponent;
    }();

    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-documentation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./documentation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/documentation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./documentation.component.scss */
      "./src/app/pages/documentation/documentation.component.scss")).default]
    })], DocumentationComponent);
    /***/
  },

  /***/
  "./src/app/pages/documentation/documentation.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/documentation/documentation.module.ts ***!
    \*************************************************************/

  /*! exports provided: DocumentationModule */

  /***/
  function srcAppPagesDocumentationDocumentationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationModule", function () {
      return DocumentationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./documentation-routing.module */
    "./src/app/pages/documentation/documentation-routing.module.ts");
    /* harmony import */


    var _documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./documentation.component */
    "./src/app/pages/documentation/documentation.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _markdown_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./markdown.module */
    "./src/app/pages/documentation/markdown.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var DocumentationModule = function DocumentationModule() {
      _classCallCheck(this, DocumentationModule);
    };

    DocumentationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _markdown_module__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
    })], DocumentationModule);
    /***/
  },

  /***/
  "./src/app/pages/documentation/markdown.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/documentation/markdown.module.ts ***!
    \********************************************************/

  /*! exports provided: MarkdownModule */

  /***/
  function srcAppPagesDocumentationMarkdownModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
      return MarkdownModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-showdown */
    "./node_modules/ngx-showdown/fesm2015/ngx-showdown.js");

    var MarkdownModule = function MarkdownModule() {
      _classCallCheck(this, MarkdownModule);
    };

    MarkdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_showdown__WEBPACK_IMPORTED_MODULE_3__["ShowdownModule"].forRoot({
        flavor: 'github',
        tables: true,
        openLinksInNewWindow: true,
        encodeEmails: true
      })],
      exports: [ngx_showdown__WEBPACK_IMPORTED_MODULE_3__["ShowdownModule"]]
    })], MarkdownModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-documentation-documentation-module-es5.js.map