function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/login/login.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/login/login.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-full h-full bg-pattern\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div @fadeInUp class=\"card overflow-hidden w-full max-w-xs\">\r\n    <div class=\"p-6 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <div class=\"fill-current text-center\">\r\n        <img class=\"w-16\" src=\"assets/img/demo/logo.svg\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"text-center mt-4\">\r\n      <h2 class=\"title m-0\">Welcome back</h2>\r\n      <h4 class=\"body-2 text-secondary m-0\">Sign in with your credentials below.</h4>\r\n    </div>\r\n\r\n    <div [formGroup]=\"form\" class=\"p-6\" fxLayout=\"column\" fxLayoutGap=\"16px\">\r\n      <div fxFlex=\"auto\" fxLayout=\"column\">\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>E-Mail</mat-label>\r\n          <input formControlName=\"email\" matInput required>\r\n          <mat-error *ngIf=\"form.get('email').hasError('required')\">We need an email address to log you in</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>Password</mat-label>\r\n          <input [type]=\"inputType\" formControlName=\"password\" matInput required>\r\n          <button (click)=\"toggleVisibility()\" mat-icon-button matSuffix matTooltip=\"Toggle Visibility\" type=\"button\">\r\n            <mat-icon *ngIf=\"visible\" [icIcon]=\"icVisibility\"></mat-icon>\r\n            <mat-icon *ngIf=\"!visible\" [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n          </button>\r\n          <mat-hint>Click the eye to toggle visibility</mat-hint>\r\n          <mat-error *ngIf=\"form.get('password').hasError('required')\">We need a password to log you in</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-checkbox class=\"caption\" color=\"primary\">Remember Me</mat-checkbox>\r\n        <a [routerLink]=\"['/forgot-password']\" class=\"caption\">Forgot Password?</a>\r\n      </div>\r\n\r\n      <button (click)=\"send()\" color=\"primary\" mat-raised-button type=\"button\">\r\n        SIGN IN\r\n      </button>\r\n\r\n      <p class=\"text-secondary text-center\">\r\n        Don't have an account?<br/>\r\n        <a [routerLink]=\"['/register']\">Click here to create one</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/app/pages/pages/auth/login/login-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/pages/auth/login/login-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppPagesPagesAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/pages/auth/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pages/auth/login/login.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pages/auth/login/login.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pages/auth/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pages/auth/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesPagesAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, fb, cd, snackbar) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.inputType = 'password';
        this.visible = false;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6___default.a;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "send",
        value: function send() {
          this.router.navigate(['/']);
          this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
            duration: 10000
          });
        }
      }, {
        key: "toggleVisibility",
        value: function toggleVisibility() {
          if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
          } else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/login/login.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/pages/auth/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages/auth/login/login.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/pages/auth/login/login.module.ts ***!
    \********************************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesPagesAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/pages/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/pages/auth/login/login.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-pages-auth-login-login-module-es5.js.map