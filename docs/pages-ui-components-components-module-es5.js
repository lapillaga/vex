function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-components-components-module"], {
  /***/
  "./src/app/pages/ui/components/components-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/ui/components/components-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ComponentsRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function () {
      return ComponentsRoutingModule;
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

    var routes = [{
      path: 'overview',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-overview-components-overview-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~66723a0e"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~b80de49f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~736f366c"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~824a11c9"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~dce5749d"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~007b266b"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module"), __webpack_require__.e("common"), __webpack_require__.e("components-overview-components-overview-module")]).then(__webpack_require__.bind(null,
        /*! ./components-overview/components-overview.module */
        "./src/app/pages/ui/components/components-overview/components-overview.module.ts")).then(function (m) {
          return m.ComponentsOverviewModule;
        });
      }
    }, {
      path: 'autocomplete',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-autocomplete-components-autocomplete-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~824a11c9"), __webpack_require__.e("common"), __webpack_require__.e("components-autocomplete-components-autocomplete-module")]).then(__webpack_require__.bind(null,
        /*! ./components-autocomplete/components-autocomplete.module */
        "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.module.ts")).then(function (m) {
          return m.ComponentsAutocompleteModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'buttons',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-buttons-components-buttons-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("common"), __webpack_require__.e("components-buttons-components-buttons-module")]).then(__webpack_require__.bind(null,
        /*! ./components-buttons/components-buttons.module */
        "./src/app/pages/ui/components/components-buttons/components-buttons.module.ts")).then(function (m) {
          return m.ComponentsButtonsModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'button-group',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-button-group-components-button-group-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("common"), __webpack_require__.e("components-button-group-components-button-group-module")]).then(__webpack_require__.bind(null,
        /*! ./components-button-group/components-button-group.module */
        "./src/app/pages/ui/components/components-button-group/components-button-group.module.ts")).then(function (m) {
          return m.ComponentsButtonGroupModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'cards',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-cards-components-cards-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~15eefed4"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~007b266b"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module"), __webpack_require__.e("components-cards-components-cards-module")]).then(__webpack_require__.bind(null,
        /*! ./components-cards/components-cards.module */
        "./src/app/pages/ui/components/components-cards/components-cards.module.ts")).then(function (m) {
          return m.ComponentsCardsModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'checkbox',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-checkbox-components-checkbox-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~b80de49f"), __webpack_require__.e("common"), __webpack_require__.e("components-checkbox-components-checkbox-module")]).then(__webpack_require__.bind(null,
        /*! ./components-checkbox/components-checkbox.module */
        "./src/app/pages/ui/components/components-checkbox/components-checkbox.module.ts")).then(function (m) {
          return m.ComponentsCheckboxModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'dialogs',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-dialogs-components-dialogs-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~66723a0e"), __webpack_require__.e("common"), __webpack_require__.e("components-dialogs-components-dialogs-module")]).then(__webpack_require__.bind(null,
        /*! ./components-dialogs/components-dialogs.module */
        "./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts")).then(function (m) {
          return m.ComponentsDialogsModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'grid-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-grid-list-components-grid-list-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2"), __webpack_require__.e("common"), __webpack_require__.e("components-grid-list-components-grid-list-module")]).then(__webpack_require__.bind(null,
        /*! ./components-grid-list/components-grid-list.module */
        "./src/app/pages/ui/components/components-grid-list/components-grid-list.module.ts")).then(function (m) {
          return m.ComponentsGridListModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'input',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-input-components-input-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-input-components-input-module")]).then(__webpack_require__.bind(null,
        /*! ./components-input/components-input.module */
        "./src/app/pages/ui/components/components-input/components-input.module.ts")).then(function (m) {
          return m.ComponentsInputModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'lists',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-lists-components-lists-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-lists-components-lists-module")]).then(__webpack_require__.bind(null,
        /*! ./components-lists/components-lists.module */
        "./src/app/pages/ui/components/components-lists/components-lists.module.ts")).then(function (m) {
          return m.ComponentsListsModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-menu-components-menu-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-menu-components-menu-module")]).then(__webpack_require__.bind(null,
        /*! ./components-menu/components-menu.module */
        "./src/app/pages/ui/components/components-menu/components-menu.module.ts")).then(function (m) {
          return m.ComponentsMenuModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'progress',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-progress-components-progress-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-progress-components-progress-module")]).then(__webpack_require__.bind(null,
        /*! ./components-progress/components-progress.module */
        "./src/app/pages/ui/components/components-progress/components-progress.module.ts")).then(function (m) {
          return m.ComponentsProgressModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'progress-spinner',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-progress-spinner-components-progress-spinner-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~dce5749d"), __webpack_require__.e("common"), __webpack_require__.e("components-progress-spinner-components-progress-spinner-module")]).then(__webpack_require__.bind(null,
        /*! ./components-progress-spinner/components-progress-spinner.module */
        "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.module.ts")).then(function (m) {
          return m.ComponentsProgressSpinnerModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'radio',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-radio-components-radio-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-radio-components-radio-module")]).then(__webpack_require__.bind(null,
        /*! ./components-radio/components-radio.module */
        "./src/app/pages/ui/components/components-radio/components-radio.module.ts")).then(function (m) {
          return m.ComponentsRadioModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'slide-toggle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-slide-toggle-components-slide-toggle-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-slide-toggle-components-slide-toggle-module")]).then(__webpack_require__.bind(null,
        /*! ./components-slide-toggle/components-slide-toggle.module */
        "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts")).then(function (m) {
          return m.ComponentsSlideToggleModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'slider',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-slider-components-slider-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~868afc4e"), __webpack_require__.e("common"), __webpack_require__.e("components-slider-components-slider-module")]).then(__webpack_require__.bind(null,
        /*! ./components-slider/components-slider.module */
        "./src/app/pages/ui/components/components-slider/components-slider.module.ts")).then(function (m) {
          return m.ComponentsSliderModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'snack-bar',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-snack-bar-components-snack-bar-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~736f366c"), __webpack_require__.e("common"), __webpack_require__.e("components-snack-bar-components-snack-bar-module")]).then(__webpack_require__.bind(null,
        /*! ./components-snack-bar/components-snack-bar.module */
        "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.module.ts")).then(function (m) {
          return m.ComponentsSnackBarModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }, {
      path: 'tooltip',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-tooltip-components-tooltip-module */
        [__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~9a8eb32e"), __webpack_require__.e("common"), __webpack_require__.e("components-tooltip-components-tooltip-module")]).then(__webpack_require__.bind(null,
        /*! ./components-tooltip/components-tooltip.module */
        "./src/app/pages/ui/components/components-tooltip/components-tooltip.module.ts")).then(function (m) {
          return m.ComponentsTooltipModule;
        });
      },
      data: {
        containerEnabled: true
      }
    }];

    var ComponentsRoutingModule = function ComponentsRoutingModule() {
      _classCallCheck(this, ComponentsRoutingModule);
    };

    ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComponentsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/ui/components/components.module.ts ***!
    \**********************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppPagesUiComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _components_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-routing.module */
    "./src/app/pages/ui/components/components-routing.module.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsRoutingModule"]]
    })], ComponentsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-ui-components-components-module-es5.js.map