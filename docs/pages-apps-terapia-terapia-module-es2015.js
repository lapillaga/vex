(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-terapia-terapia-module"],{

/***/ "./src/app/pages/apps/terapia/terapia-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/apps/terapia/terapia-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TerapiaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiaRoutingModule", function() { return TerapiaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'terapia-avd',
                loadChildren: () => Promise.all(/*! import() | terapia-avd-terapia-avd-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~66723a0e"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~b80de49f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~736f366c"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~aaf99edc"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-person~e3c2804b"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~824a11c9"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e"), __webpack_require__.e("default~help-center-faq-help-center-faq-module~help-center-getting-started-help-center-getting-start~c6ff9090"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-person~291f9953"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~dce5749d"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~007b266b"), __webpack_require__.e("default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~94c5eb5c"), __webpack_require__.e("default~pages-apps-chat-chat-module~pages-apps-persona-persona-module~pages-apps-profile-profile-mod~ec4de4c3"), __webpack_require__.e("default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~bd660006"), __webpack_require__.e("default~terapia-avd-terapia-avd-module~terapia-pedalera-terapia-pedalera-module"), __webpack_require__.e("common"), __webpack_require__.e("terapia-avd-terapia-avd-module")]).then(__webpack_require__.bind(null, /*! ./terapia-avd/terapia-avd.module */ "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.module.ts")).then(m => m.TerapiaAvdModule)
            },
            {
                path: 'terapia-pedalera',
                loadChildren: () => Promise.all(/*! import() | terapia-pedalera-terapia-pedalera-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~66723a0e"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~b80de49f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~736f366c"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("default~contacts-grid-contacts-grid-module~contacts-table-contacts-table-module~pages-apps-calendar-~aaf99edc"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-person~e3c2804b"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~824a11c9"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e"), __webpack_require__.e("default~help-center-faq-help-center-faq-module~help-center-getting-started-help-center-getting-start~c6ff9090"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-aio-table-aio-table-module~pages-apps-person~291f9953"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~dce5749d"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~007b266b"), __webpack_require__.e("default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~94c5eb5c"), __webpack_require__.e("default~pages-apps-chat-chat-module~pages-apps-persona-persona-module~pages-apps-profile-profile-mod~ec4de4c3"), __webpack_require__.e("default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~bd660006"), __webpack_require__.e("default~terapia-avd-terapia-avd-module~terapia-pedalera-terapia-pedalera-module"), __webpack_require__.e("terapia-pedalera-terapia-pedalera-module")]).then(__webpack_require__.bind(null, /*! ./terapia-pedalera/terapia-pedalera.module */ "./src/app/pages/apps/terapia/terapia-pedalera/terapia-pedalera.module.ts")).then(m => m.TerapiaPedaleraModule)
            }
        ]
    }
];
let TerapiaRoutingModule = class TerapiaRoutingModule {
};
TerapiaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TerapiaRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/terapia/terapia.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/apps/terapia/terapia.module.ts ***!
  \******************************************************/
/*! exports provided: TerapiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiaModule", function() { return TerapiaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _terapia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terapia-routing.module */ "./src/app/pages/apps/terapia/terapia-routing.module.ts");




let TerapiaModule = class TerapiaModule {
};
TerapiaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _terapia_routing_module__WEBPACK_IMPORTED_MODULE_3__["TerapiaRoutingModule"],
        ],
    })
], TerapiaModule);



/***/ })

}]);
//# sourceMappingURL=pages-apps-terapia-terapia-module-es2015.js.map