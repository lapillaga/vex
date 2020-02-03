(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-forms-form-wizard-form-wizard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\r\n\r\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\r\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\r\n     fxLayout=\"row\">\r\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n    <h1 *ngIf=\"current\"\r\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\r\n        fxFlex.xs=\"auto\">{{ current }}</h1>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-secondary-toolbar current=\"Form Wizard\">\r\n  <vex-breadcrumbs [crumbs]=\"['Forms', 'Form Wizard']\" fxFlex=\"auto\"></vex-breadcrumbs>\r\n\r\n  <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\r\n    <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n  </button>\r\n</vex-secondary-toolbar>\r\n\r\n<div @stagger class=\"p-gutter\" vexContainer>\r\n\r\n  <h2 class=\"title mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <span @scaleIn\r\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\r\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\r\n      <ic-icon [icon]=\"icDescription\" height=\"20px\" width=\"20px\"></ic-icon>\r\n    </span>\r\n    <span @fadeInRight class=\"block\">Horizontal Form Wizard</span>\r\n  </h2>\r\n\r\n  <div @fadeInUp class=\"card overflow-hidden\">\r\n    <mat-horizontal-stepper #stepper=\"matHorizontalStepper\" [linear]=\"true\">\r\n      <ng-template matStepperIcon=\"edit\">\r\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\r\n      </ng-template>\r\n\r\n      <ng-template matStepperIcon=\"done\">\r\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\r\n      </ng-template>\r\n\r\n      <mat-step [stepControl]=\"accountFormGroup\">\r\n        <form [formGroup]=\"accountFormGroup\">\r\n          <ng-template matStepLabel>Create Account</ng-template>\r\n\r\n          <h2 class=\"title m-0\">Create Account</h2>\r\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Account Username</mat-label>\r\n              <input formControlName=\"username\" matInput required>\r\n              <mat-hint>This will be your unique login name.</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Name</mat-label>\r\n              <input formControlName=\"name\" matInput required>\r\n              <mat-hint>How may we call you?</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\r\n              <mat-form-field fxFlex=\"auto\">\r\n                <mat-label>E-Mail</mat-label>\r\n                <input formControlName=\"email\" matInput required>\r\n                <mat-hint align=\"end\">example@example.com</mat-hint>\r\n              </mat-form-field>\r\n\r\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\r\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\r\n                  <mat-label>Code</mat-label>\r\n                  <mat-select formControlName=\"phonePrefix\">\r\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\r\n                  <mat-label>Phone Number</mat-label>\r\n                  <input formControlName=\"phone\" matInput>\r\n                  <mat-hint align=\"end\"></mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button (click)=\"stepper.reset()\" [disabled]=\"accountFormGroup.pristine\" color=\"primary\" mat-button\r\n                    type=\"button\">RESET\r\n            </button>\r\n            <button [disabled]=\"accountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"passwordFormGroup\">\r\n        <form [formGroup]=\"passwordFormGroup\">\r\n          <ng-template matStepLabel>Select a Password</ng-template>\r\n\r\n          <h2 class=\"title m-0\">Select a Password</h2>\r\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Password</mat-label>\r\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\r\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\r\n              </button>\r\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n              </button>\r\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Confirm Password</mat-label>\r\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\r\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\r\n              </button>\r\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n              </button>\r\n              <mat-hint>Please type in your password again.</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\r\n            <button [disabled]=\"passwordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"confirmFormGroup\">\r\n        <form [formGroup]=\"confirmFormGroup\">\r\n          <ng-template matStepLabel>Confirm Creation</ng-template>\r\n\r\n          <div class=\"title m-0\">You're almost there!</div>\r\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\r\n          </div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\r\n              I agree to the terms of service and the usual stuff. *\r\n            </mat-checkbox>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\r\n            <button (click)=\"submit()\" [disabled]=\"confirmFormGroup.invalid\" color=\"primary\" mat-raised-button\r\n                    matStepperNext>\r\n              CREATE ACCOUNT\r\n            </button>\r\n          </div>\r\n        </form>\r\n\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </div>\r\n\r\n  <h2 class=\"title mt-6 mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <span @scaleIn\r\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\r\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\r\n      <ic-icon [icon]=\"icVerticalSplit\" height=\"20px\" width=\"20px\"></ic-icon>\r\n    </span>\r\n    <span @fadeInRight class=\"block\">Vertical Form Wizard</span>\r\n  </h2>\r\n\r\n  <div @fadeInUp class=\"card overflow-hidden\">\r\n    <mat-vertical-stepper #verticalStepper=\"matVerticalStepper\" [linear]=\"true\">\r\n      <ng-template matStepperIcon=\"edit\">\r\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\r\n      </ng-template>\r\n\r\n      <ng-template matStepperIcon=\"done\">\r\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\r\n      </ng-template>\r\n\r\n      <mat-step [stepControl]=\"verticalAccountFormGroup\">\r\n        <form [formGroup]=\"verticalAccountFormGroup\">\r\n          <ng-template matStepLabel>Create Account</ng-template>\r\n\r\n          <div class=\"title m-0\">Create Account</div>\r\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Account Username</mat-label>\r\n              <input formControlName=\"username\" matInput required>\r\n              <mat-hint>This will be your unique login name.</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Name</mat-label>\r\n              <input formControlName=\"name\" matInput required>\r\n              <mat-hint>How may we call you?</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\r\n              <mat-form-field fxFlex=\"auto\">\r\n                <mat-label>E-Mail</mat-label>\r\n                <input formControlName=\"email\" matInput required>\r\n                <mat-hint align=\"end\">example@example.com</mat-hint>\r\n              </mat-form-field>\r\n\r\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\r\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\r\n                  <mat-label>Code</mat-label>\r\n                  <mat-select formControlName=\"phonePrefix\">\r\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\r\n                  <mat-label>Phone Number</mat-label>\r\n                  <input formControlName=\"phone\" matInput>\r\n                  <mat-hint align=\"end\"></mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button (click)=\"verticalStepper.reset()\" [disabled]=\"verticalAccountFormGroup.pristine\" color=\"primary\"\r\n                    mat-button\r\n                    type=\"button\">RESET\r\n            </button>\r\n            <button [disabled]=\"verticalAccountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\r\n              NEXT\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"verticalPasswordFormGroup\">\r\n        <form [formGroup]=\"verticalPasswordFormGroup\">\r\n          <ng-template matStepLabel>Select a Password</ng-template>\r\n\r\n          <div class=\"title m-0\">Select a Password</div>\r\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Password</mat-label>\r\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\r\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\r\n              </button>\r\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n              </button>\r\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex=\"auto\">\r\n              <mat-label>Confirm Password</mat-label>\r\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\r\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\r\n              </button>\r\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n              </button>\r\n              <mat-hint>Please type in your password again.</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\r\n            <button [disabled]=\"verticalPasswordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\r\n              NEXT\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"verticalConfirmFormGroup\">\r\n        <form [formGroup]=\"verticalConfirmFormGroup\">\r\n          <ng-template matStepLabel>Confirm Creation</ng-template>\r\n\r\n          <div class=\"title m-0\">You're almost there!</div>\r\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\r\n          </div>\r\n\r\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\r\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\r\n              I agree to the terms of service and the usual stuff. *\r\n            </mat-checkbox>\r\n          </div>\r\n\r\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\r\n            <button (click)=\"submit()\" [disabled]=\"verticalConfirmFormGroup.invalid\" color=\"primary\" mat-raised-button\r\n                    matStepperNext>\r\n              CREATE ACCOUNT\r\n            </button>\r\n          </div>\r\n        </form>\r\n\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/@vex/animations/fade-in-right.animation.ts":
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/*! exports provided: fadeInRightAnimation, fadeInRight400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return fadeInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function() { return fadeInRight400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInRightAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/scale-in.animation.ts":
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/*! exports provided: scaleInAnimation, scaleIn400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function() { return scaleInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function() { return scaleIn400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function scaleInAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'scale(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss":
/*!********************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2Vjb25kYXJ5LXRvb2xiYXIvRDpcXERvY3VtZW50c1xcUHJvamVjdHNcXHZpbmN1bGFjaW9uLmdpdGh1Yi5pby9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHNlY29uZGFyeS10b29sYmFyXFxzZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvc2Vjb25kYXJ5LXRvb2xiYXIvc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0RBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRhcnktdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KSAqIC0xKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLmZpeGVkIHtcbiAgd2lkdGg6IHZhcigtLXRvb2xiYXItd2lkdGgpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXItcGxhY2Vob2xkZXIge1xuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XG59XG5cbjo6bmctZGVlcCAuaXMtbW9iaWxlIC5maXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgYm9keSAuZml4ZWQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZW5hdi13aWR0aCkpO1xufVxuXG46Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIDo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SecondaryToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function() { return SecondaryToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SecondaryToolbarComponent = class SecondaryToolbarComponent {
    constructor(configService) {
        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(config => config.toolbar.fixed));
    }
    ngOnInit() {
    }
};
SecondaryToolbarComponent.ctorParameters = () => [
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryToolbarComponent.prototype, "current", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryToolbarComponent.prototype, "crumbs", void 0);
SecondaryToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-secondary-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondary-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secondary-toolbar.component.scss */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss")).default]
    })
], SecondaryToolbarComponent);



/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts":
/*!***************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
  \***************************************************************************/
/*! exports provided: SecondaryToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function() { return SecondaryToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-toolbar.component */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");











let SecondaryToolbarModule = class SecondaryToolbarModule {
};
SecondaryToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]
        ],
        exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]]
    })
], SecondaryToolbarModule);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormWizardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardRoutingModule", function() { return FormWizardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard.component */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");




const routes = [
    {
        path: '',
        component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
    }
];
let FormWizardRoutingModule = class FormWizardRoutingModule {
};
FormWizardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormWizardRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2Zvcm1zL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function() { return FormWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-vertical-split */ "./node_modules/@iconify/icons-ic/twotone-vertical-split.js");
/* harmony import */ var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility */ "./node_modules/@iconify/icons-ic/twotone-visibility.js");
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility-off */ "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done-all */ "./node_modules/@iconify/icons-ic/twotone-done-all.js");
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");















let FormWizardComponent = class FormWizardComponent {
    constructor(fb, cd, snackbar) {
        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
        this.passwordInputType = 'password';
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icVerticalSplit = _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__["default"];
    }
    ngOnInit() {
        /**
         * Horizontal Stepper
         * @type {FormGroup}
         */
        this.accountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: [],
        });
        this.passwordFormGroup = this.fb.group({
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
                ])
            ],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.confirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        });
        /**
         * Vertical Stepper
         * @type {FormGroup}
         */
        this.verticalAccountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: [],
        });
        this.verticalPasswordFormGroup = this.fb.group({
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
                ])
            ],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.verticalConfirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        });
    }
    showPassword() {
        this.passwordInputType = 'text';
        this.cd.markForCheck();
    }
    hidePassword() {
        this.passwordInputType = 'password';
        this.cd.markForCheck();
    }
    submit() {
        this.snackbar.open('Hooray! You successfully created your account.', null, {
            duration: 5000
        });
    }
};
FormWizardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-form-wizard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-wizard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger80ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInRight400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-wizard.component.scss */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss")).default]
    })
], FormWizardComponent);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts ***!
  \******************************************************************/
/*! exports provided: FormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardModule", function() { return FormWizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard-routing.module */ "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts");
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-wizard.component */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
/* harmony import */ var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../@vex/pipes/color/color-fade.module */ "./src/@vex/pipes/color/color-fade.module.ts");



















let FormWizardModule = class FormWizardModule {
};
FormWizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_4__["FormWizardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormWizardRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"],
            _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__["ColorFadeModule"]
        ]
    })
], FormWizardModule);



/***/ })

}]);
//# sourceMappingURL=pages-ui-forms-form-wizard-form-wizard-module-es2015.js.map