function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-autocomplete-components-autocomplete-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUiComponentsComponentsAutocompleteComponentsAutocompleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout @stagger>\r\n\r\n  <vex-secondary-toolbar current=\"Autocomplete\">\r\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Autocomplete']\"></vex-breadcrumbs>\r\n  </vex-secondary-toolbar>\r\n\r\n  <vex-page-layout-content vexContainer>\r\n    <vex-components-overview-autocomplete @fadeInUp class=\"block\"></vex-components-overview-autocomplete>\r\n  </vex-page-layout-content>\r\n\r\n</vex-page-layout>\r\n";
    /***/
  },

  /***/
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-autocomplete/components-autocomplete-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ComponentsAutocompleteRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsAutocompleteComponentsAutocompleteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsAutocompleteRoutingModule", function () {
      return ComponentsAutocompleteRoutingModule;
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


    var _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-autocomplete.component */
    "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.ts");

    var routes = [{
      path: '',
      component: _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsAutocompleteComponent"]
    }];

    var ComponentsAutocompleteRoutingModule = function ComponentsAutocompleteRoutingModule() {
      _classCallCheck(this, ComponentsAutocompleteRoutingModule);
    };

    ComponentsAutocompleteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComponentsAutocompleteRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUiComponentsComponentsAutocompleteComponentsAutocompleteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1hdXRvY29tcGxldGUvY29tcG9uZW50cy1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ComponentsAutocompleteComponent */

  /***/
  function srcAppPagesUiComponentsComponentsAutocompleteComponentsAutocompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsAutocompleteComponent", function () {
      return ComponentsAutocompleteComponent;
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


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-settings */
    "./node_modules/@iconify/icons-ic/twotone-settings.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6__);

    var ComponentsAutocompleteComponent =
    /*#__PURE__*/
    function () {
      function ComponentsAutocompleteComponent() {
        _classCallCheck(this, ComponentsAutocompleteComponent);

        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_6___default.a;
      }

      _createClass(ComponentsAutocompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsAutocompleteComponent;
    }();

    ComponentsAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-components-autocomplete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./components-autocomplete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.html")).default,
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./components-autocomplete.component.scss */
      "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.scss")).default]
    })], ComponentsAutocompleteComponent);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-autocomplete/components-autocomplete.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ComponentsAutocompleteModule */

  /***/
  function srcAppPagesUiComponentsComponentsAutocompleteComponentsAutocompleteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsAutocompleteModule", function () {
      return ComponentsAutocompleteModule;
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


    var _components_autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-autocomplete-routing.module */
    "./src/app/pages/ui/components/components-autocomplete/components-autocomplete-routing.module.ts");
    /* harmony import */


    var _components_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components-autocomplete.component */
    "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.component.ts");
    /* harmony import */


    var _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ComponentsAutocompleteModule = function ComponentsAutocompleteModule() {
      _classCallCheck(this, ComponentsAutocompleteModule);
    };

    ComponentsAutocompleteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsAutocompleteComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsAutocompleteRoutingModule"], _components_overview_components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsOverviewAutocompleteModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__["ContainerModule"]]
    })], ComponentsAutocompleteModule);
    /***/
  }
}]);
//# sourceMappingURL=components-autocomplete-components-autocomplete-module-es5.js.map