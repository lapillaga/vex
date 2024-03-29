(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-guides-guides-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-mail.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/guides/guides.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/guides/guides.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @stagger>\r\n  <div class=\"text-center p-gutter pb-24 header\">\r\n    <div class=\"container\">\r\n      <h2 @fadeInUp class=\"display-2 mt-16 mb-8\">Hello, how can we help?</h2>\r\n      <div @fadeInUp\r\n           class=\"border rounded-full bg-card py-2 pl-6 pr-3 text-secondary max-w-xl mx-auto shadow-8\"\r\n           fxLayout=\"row\"\r\n           fxLayoutAlign=\"start center\">\r\n        <ic-icon [icon]=\"icSearch\" fxFlex=\"none\" size=\"24px\"></ic-icon>\r\n        <input class=\"border-0 ml-4 placeholder:text-secondary subheading-2 outline-none font-medium w-0 bg-card\"\r\n               fxFlex=\"auto\"\r\n               placeholder=\"Search for answers...\"\r\n               type=\"text\">\r\n        <button class=\"rounded-full\" color=\"primary\" fxFlex=\"none\" mat-raised-button type=\"button\">SEARCH</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"text-left mt-24 mb-12 container\"\r\n         gdAlignColumns=\"start start\"\r\n         gdColumns=\"1fr 1fr\"\r\n         gdColumns.lt-md=\"1fr\"\r\n         gdGap=\"24px\">\r\n\r\n      <div @fadeInUp class=\"card max-w-full overflow-hidden p-3\">\r\n        <mat-nav-list>\r\n          <h3 mat-subheader>First Steps</h3>\r\n          <a (click)=\"guide.onClick(guide)\"\r\n             *ngFor=\"let guide of accountSettings; trackBy: trackById\"\r\n             class=\"rounded overflow-hidden\"\r\n             mat-list-item>\r\n            <mat-icon [icIcon]=\"guide.icon\" mat-list-icon></mat-icon>\r\n            <span matLine>{{ guide.label }}</span>\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n\r\n      <div @fadeInUp class=\"card max-w-full overflow-hidden p-3\">\r\n        <mat-nav-list>\r\n          <h3 mat-subheader>API Help</h3>\r\n          <a (click)=\"guide.onClick(guide)\"\r\n             *ngFor=\"let guide of apiHelp; trackBy: trackById\"\r\n             class=\"rounded overflow-hidden\"\r\n             mat-list-item>\r\n            <mat-icon [icIcon]=\"guide.icon\" mat-list-icon></mat-icon>\r\n            <span matLine>{{ guide.label }}</span>\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n\r\n      <div @fadeInUp class=\"card max-w-full overflow-hidden p-3\">\r\n        <mat-nav-list>\r\n          <h3 mat-subheader>Billing</h3>\r\n          <a (click)=\"guide.onClick(guide)\"\r\n             *ngFor=\"let guide of billing; trackBy: trackById\"\r\n             class=\"rounded overflow-hidden\"\r\n             mat-list-item>\r\n            <mat-icon [icIcon]=\"guide.icon\" mat-list-icon></mat-icon>\r\n            <span matLine>{{ guide.label }}</span>\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n\r\n      <div @fadeInUp class=\"card max-w-full overflow-hidden p-3\">\r\n        <mat-nav-list>\r\n          <h3 mat-subheader>First Steps</h3>\r\n          <a (click)=\"guide.onClick(guide)\"\r\n             *ngFor=\"let guide of firstSteps; trackBy: trackById\"\r\n             class=\"rounded overflow-hidden\"\r\n             mat-list-item>\r\n            <mat-icon [icIcon]=\"guide.icon\" mat-list-icon></mat-icon>\r\n            <span matLine>{{ guide.label }}</span>\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div @fadeInUp class=\"bg-card py-16 px-gutter footer\">\r\n    <h2 class=\"display-1 mt-0 mb-4 text-center\">Still have questions?</h2>\r\n    <h3 class=\"subheading-2 text-hint text-center max-w-lg mx-auto m-0\">A wonderful serenity has taken possession of my\r\n      entire\r\n      soul, like these sweet\r\n      mornings of spring which I enjoy with my whole heart.</h3>\r\n\r\n    <div class=\"mt-16 max-w-3xl mx-auto\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"24px\">\r\n      <a class=\"text-center p-6 border rounded\"\r\n         fxFlex\r\n         routerLinkActive>\r\n        <ic-icon [icon]=\"icPhoneInTalk\" class=\"text-hint\" size=\"42px\"></ic-icon>\r\n        <h3 class=\"title mb-0 mt-4\">+1 (840) 423-3404</h3>\r\n        <h4 class=\"subheading-2 m-0 text-hint\">Call us anytime for a quick solution</h4>\r\n      </a>\r\n\r\n      <a class=\"text-center p-6 border rounded\"\r\n         fxFlex\r\n         routerLinkActive>\r\n        <ic-icon [icon]=\"icMail\" class=\"text-hint\" size=\"42px\"></ic-icon>\r\n        <h3 class=\"title mb-0 mt-4\">support@example.com</h3>\r\n        <h4 class=\"subheading-2 m-0 text-hint\">Send us a mail to resolve your issue</h4>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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

/***/ "./src/app/pages/pages/guides/guides-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pages/guides/guides-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GuidesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesRoutingModule", function() { return GuidesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides.component */ "./src/app/pages/pages/guides/guides.component.ts");




const routes = [
    {
        path: '',
        component: _guides_component__WEBPACK_IMPORTED_MODULE_3__["GuidesComponent"],
        data: {
            toolbarShadowEnabled: true
        }
    }
];
let GuidesRoutingModule = class GuidesRoutingModule {
};
GuidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GuidesRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages/guides/guides.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/guides/guides.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.footer {\n  background-image: url(\"/assets/img/illustrations/it_support.svg\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: 250px;\n  padding-bottom: 250px;\n}\n\n@media (min-width: 960px) {\n  .footer {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMvZ3VpZGVzL0Q6XFxEb2N1bWVudHNcXFByb2plY3RzXFx2aW5jdWxhY2lvbi5naXRodWIuaW8vc3JjXFxhcHBcXHBhZ2VzXFxwYWdlc1xcZ3VpZGVzXFxndWlkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzL2d1aWRlcy9ndWlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLDY1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsaUVBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxvQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy9ndWlkZXMvZ3VpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2U2ZTZlNicgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTZlNmU2JyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaWxsdXN0cmF0aW9ucy9pdF9zdXBwb3J0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwMCcgaGVpZ2h0PSc0MDAnIHZpZXdCb3g9JzAgMCA4MDAgODAwJyUzRSUzQ2cgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNlNmU2ZTYnIHN0cm9rZS13aWR0aD0nMSclM0UlM0NwYXRoIGQ9J003NjkgMjI5TDEwMzcgMjYwLjlNOTI3IDg4MEw3MzEgNzM3IDUyMCA2NjAgMzA5IDUzOCA0MCA1OTkgMjk1IDc2NCAxMjYuNSA4NzkuNSA0MCA1OTktMTk3IDQ5MyAxMDIgMzgyLTMxIDIyOSAxMjYuNSA3OS41LTY5LTYzJy8lM0UlM0NwYXRoIGQ9J00tMzEgMjI5TDIzNyAyNjEgMzkwIDM4MiA2MDMgNDkzIDMwOC41IDUzNy41IDEwMS41IDM4MS41TTM3MCA5MDVMMjk1IDc2NCcvJTNFJTNDcGF0aCBkPSdNNTIwIDY2MEw1NzggODQyIDczMSA3MzcgODQwIDU5OSA2MDMgNDkzIDUyMCA2NjAgMjk1IDc2NCAzMDkgNTM4IDM5MCAzODIgNTM5IDI2OSA3NjkgMjI5IDU3Ny41IDQxLjUgMzcwIDEwNSAyOTUgLTM2IDEyNi41IDc5LjUgMjM3IDI2MSAxMDIgMzgyIDQwIDU5OSAtNjkgNzM3IDEyNyA4ODAnLyUzRSUzQ3BhdGggZD0nTTUyMC0xNDBMNTc4LjUgNDIuNSA3MzEtNjNNNjAzIDQ5M0w1MzkgMjY5IDIzNyAyNjEgMzcwIDEwNU05MDIgMzgyTDUzOSAyNjlNMzkwIDM4MkwxMDIgMzgyJy8lM0UlM0NwYXRoIGQ9J00tMjIyIDQyTDEyNi41IDc5LjUgMzcwIDEwNSA1MzkgMjY5IDU3Ny41IDQxLjUgOTI3IDgwIDc2OSAyMjkgOTAyIDM4MiA2MDMgNDkzIDczMSA3MzdNMjk1LTM2TDU3Ny41IDQxLjVNNTc4IDg0MkwyOTUgNzY0TTQwLTIwMUwxMjcgODBNMTAyIDM4MkwtMjYxIDI2OScvJTNFJTNDL2clM0UlM0NnIGZpbGw9JyUyM2U2ZTZlNiclM0UlM0NjaXJjbGUgY3g9Jzc2OScgY3k9JzIyOScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MzknIGN5PScyNjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNjAzJyBjeT0nNDkzJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzczMScgY3k9JzczNycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MjAnIGN5PSc2NjAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzA5JyBjeT0nNTM4JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzI5NScgY3k9Jzc2NCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc0MCcgY3k9JzU5OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMDInIGN5PSczODInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTI3JyBjeT0nODAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzcwJyBjeT0nMTA1JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzU3OCcgY3k9JzQyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzIzNycgY3k9JzI2MScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczOTAnIGN5PSczODInIHI9JzUnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2lsbHVzdHJhdGlvbnMvaXRfc3VwcG9ydC5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pages/guides/guides.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/pages/guides/guides.component.ts ***!
  \********************************************************/
/*! exports provided: GuidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesComponent", function() { return GuidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone-in-talk */ "./node_modules/@iconify/icons-ic/twotone-phone-in-talk.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-movie-filter */ "./node_modules/@iconify/icons-ic/twotone-movie-filter.js");
/* harmony import */ var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component */ "./src/app/pages/apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component.ts");
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides.component */ "./src/app/pages/apps/help-center/help-center-guides/help-center-guides.component.ts");
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");













let GuidesComponent = class GuidesComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.guides = [
            {
                id: 1,
                label: 'How secure is my password?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 2,
                label: 'Can I change my username?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 3,
                label: 'How do I change my email?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 4,
                label: 'Where can I change my timezone?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 5,
                label: 'How do I change my password?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 6,
                label: 'Which technologies are used?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 7,
                label: 'How do I make a request?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 8,
                label: 'What are the API Limits?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 9,
                label: 'How can I apply for the API?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 10,
                label: 'When can I start developing?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 11,
                label: 'Can I get a refund?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 12,
                label: 'How do I pay?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 13,
                label: 'Which payment methods are supported?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 14,
                label: 'Do I need to pay VAT?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 15,
                label: 'Where do I find my purchase code?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 16,
                label: 'How do I download the template?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 17,
                label: 'Installation Guide',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 18,
                label: 'Creating your first page',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_6___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 19,
                label: 'Customizing your template',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 20,
                label: 'How do I contact support?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_5___default.a,
                category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps,
                onClick: guide => this.openDialog(guide)
            }
        ];
        this.accountSettings = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].accountSettings);
        this.apiHelp = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].apiHelp);
        this.billing = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].billing);
        this.firstSteps = this.guides.filter(guide => guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_9__["GuideCategory"].firstSteps);
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_10__["trackById"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPhoneInTalk = _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4___default.a;
    }
    ngOnInit() {
    }
    openDialog(guide) {
        this.dialog.open(_apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_8__["HelpCenterGuidesGuideComponent"], {
            data: guide,
            width: '600px'
        });
    }
};
GuidesComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
GuidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-guides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/guides/guides.component.html")).default,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger60ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guides.component.scss */ "./src/app/pages/pages/guides/guides.component.scss")).default]
    })
], GuidesComponent);



/***/ }),

/***/ "./src/app/pages/pages/guides/guides.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/guides/guides.module.ts ***!
  \*****************************************************/
/*! exports provided: GuidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesModule", function() { return GuidesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _guides_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides-routing.module */ "./src/app/pages/pages/guides/guides-routing.module.ts");
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guides.component */ "./src/app/pages/pages/guides/guides.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../apps/help-center/help-center-guides/help-center-guides.module */ "./src/app/pages/apps/help-center/help-center-guides/help-center-guides.module.ts");












let GuidesModule = class GuidesModule {
};
GuidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_guides_component__WEBPACK_IMPORTED_MODULE_4__["GuidesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _guides_routing_module__WEBPACK_IMPORTED_MODULE_3__["GuidesRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_11__["HelpCenterGuidesModule"]
        ]
    })
], GuidesModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-guides-guides-module-es2015.js.map