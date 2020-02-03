function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderTabbedPageLayoutCardLargeHeaderTabbedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout mode=\"card\">\r\n\r\n  <vex-page-layout-header fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n    <div vexContainer>\r\n      <h2 class=\"title m-0\">Card - Large Header & Tabbed</h2>\r\n      <vex-breadcrumbs [crumbs]=\"['Page Layouts', 'Card', 'Large Header & Tabbed']\"></vex-breadcrumbs>\r\n    </div>\r\n  </vex-page-layout-header>\r\n\r\n  <vex-page-layout-content vexContainer>\r\n    <div class=\"card\">\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Main Tab\">\r\n          <div class=\"p-6\">\r\n            <vex-page-layout-demo></vex-page-layout-demo>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Side Tab\">\r\n          <div class=\"p-6\">\r\n            <vex-page-layout-demo></vex-page-layout-demo>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Extra Tab\">\r\n          <div class=\"p-6\">\r\n            <vex-page-layout-demo></vex-page-layout-demo>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </vex-page-layout-content>\r\n\r\n</vex-page-layout>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts":
  /*!****************************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts ***!
    \****************************************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderTabbedRoutingModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderTabbedPageLayoutCardLargeHeaderTabbedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedRoutingModule", function () {
      return PageLayoutCardLargeHeaderTabbedRoutingModule;
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


    var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card-large-header-tabbed.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts");

    var routes = [{
      path: '',
      component: _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderTabbedComponent"]
    }];

    var PageLayoutCardLargeHeaderTabbedRoutingModule = function PageLayoutCardLargeHeaderTabbedRoutingModule() {
      _classCallCheck(this, PageLayoutCardLargeHeaderTabbedRoutingModule);
    };

    PageLayoutCardLargeHeaderTabbedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PageLayoutCardLargeHeaderTabbedRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderTabbedPageLayoutCardLargeHeaderTabbedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9jYXJkL3BhZ2UtbGF5b3V0LWNhcmQtbGFyZ2UtaGVhZGVyLXRhYmJlZC9wYWdlLWxheW91dC1jYXJkLWxhcmdlLWhlYWRlci10YWJiZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderTabbedComponent */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderTabbedPageLayoutCardLargeHeaderTabbedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedComponent", function () {
      return PageLayoutCardLargeHeaderTabbedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutCardLargeHeaderTabbedComponent =
    /*#__PURE__*/
    function () {
      function PageLayoutCardLargeHeaderTabbedComponent() {
        _classCallCheck(this, PageLayoutCardLargeHeaderTabbedComponent);
      }

      _createClass(PageLayoutCardLargeHeaderTabbedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLayoutCardLargeHeaderTabbedComponent;
    }();

    PageLayoutCardLargeHeaderTabbedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-page-layout-card-large-header-tabbed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-layout-card-large-header-tabbed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-layout-card-large-header-tabbed.component.scss */
      "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss")).default]
    })], PageLayoutCardLargeHeaderTabbedComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: PageLayoutCardLargeHeaderTabbedModule */

  /***/
  function srcAppPagesUiPageLayoutsCardPageLayoutCardLargeHeaderTabbedPageLayoutCardLargeHeaderTabbedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedModule", function () {
      return PageLayoutCardLargeHeaderTabbedModule;
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


    var _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-card-large-header-tabbed-routing.module */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts");
    /* harmony import */


    var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-card-large-header-tabbed.component */
    "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts");
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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var PageLayoutCardLargeHeaderTabbedModule = function PageLayoutCardLargeHeaderTabbedModule() {
      _classCallCheck(this, PageLayoutCardLargeHeaderTabbedModule);
    };

    PageLayoutCardLargeHeaderTabbedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutCardLargeHeaderTabbedComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderTabbedRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]]
    })], PageLayoutCardLargeHeaderTabbedModule);
    /***/
  }
}]);
//# sourceMappingURL=card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module-es5.js.map