function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-page-layout-card-page-layout-card-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiPageLayoutsCardPageLayoutCardPageLayoutCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout mode=\"card\">\r\n  <vex-page-layout-header class=\"h-6\"></vex-page-layout-header>\r\n\r\n  <vex-page-layout-content vexContainer>\r\n    <div class=\"card p-6\">\r\n      <h2 class=\"m-0 title mb-6\">Blog Post</h2>\r\n\r\n      <vex-page-layout-demo></vex-page-layout-demo>\r\n    </div>\r\n  </vex-page-layout-content>\r\n\r\n</vex-page-layout>\r\n";
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
  "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: PageLayoutCardRoutingModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardPageLayoutCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardRoutingModule", function () {
      return PageLayoutCardRoutingModule;
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


    var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.ts");

    var routes = [{
      path: '',
      component: _page_layout_card_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardComponent"]
    }];

    var PageLayoutCardRoutingModule = function PageLayoutCardRoutingModule() {
      _classCallCheck(this, PageLayoutCardRoutingModule);
    };

    PageLayoutCardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PageLayoutCardRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardPageLayoutCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9jYXJkL3BhZ2UtbGF5b3V0LWNhcmQvcGFnZS1sYXlvdXQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PageLayoutCardComponent */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardPageLayoutCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardComponent", function () {
      return PageLayoutCardComponent;
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

    var PageLayoutCardComponent =
    /*#__PURE__*/
    function () {
      function PageLayoutCardComponent() {
        _classCallCheck(this, PageLayoutCardComponent);

        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(PageLayoutCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLayoutCardComponent;
    }();

    PageLayoutCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-page-layout-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-layout-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-layout-card.component.scss */
      "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.scss")).default]
    })], PageLayoutCardComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: PageLayoutCardModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardPageLayoutCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardModule", function () {
      return PageLayoutCardModule;
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


    var _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card-routing.module */
    "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card-routing.module.ts");
    /* harmony import */


    var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-card.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../page-layout-demo/page-layout-demo.module */
    "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var PageLayoutCardModule = function PageLayoutCardModule() {
      _classCallCheck(this, PageLayoutCardModule);
    };

    PageLayoutCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_layout_card_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutCardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_8__["SecondaryToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
    })], PageLayoutCardModule);
    /***/
  }
}]);
//# sourceMappingURL=card-page-layout-card-page-layout-card-module-es5.js.map