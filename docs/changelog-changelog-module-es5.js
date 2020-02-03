function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changelog-changelog-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDocumentationChangelogChangelogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout>\r\n\r\n  <vex-secondary-toolbar current=\"Documentation\">\r\n    <vex-breadcrumbs [crumbs]=\"['Documentation', 'Changelog']\" fxFlex=\"auto\"></vex-breadcrumbs>\r\n\r\n    <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n    </button>\r\n  </vex-secondary-toolbar>\r\n\r\n  <vex-page-layout-content vexContainer>\r\n    <div class=\"card p-gutter relative\">\r\n      <showdown src=\"/CHANGELOG.md\"></showdown>\r\n    </div>\r\n  </vex-page-layout-content>\r\n</vex-page-layout>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/documentation/changelog/changelog-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/documentation/changelog/changelog-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ChangelogRoutingModule */

  /***/
  function srcAppPagesDocumentationChangelogChangelogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangelogRoutingModule", function () {
      return ChangelogRoutingModule;
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


    var _changelog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./changelog.component */
    "./src/app/pages/documentation/changelog/changelog.component.ts");

    var routes = [{
      path: '',
      component: _changelog_component__WEBPACK_IMPORTED_MODULE_3__["ChangelogComponent"]
    }];

    var ChangelogRoutingModule = function ChangelogRoutingModule() {
      _classCallCheck(this, ChangelogRoutingModule);
    };

    ChangelogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangelogRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/documentation/changelog/changelog.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/documentation/changelog/changelog.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDocumentationChangelogChangelogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep vex-changelog vex-secondary-toolbar h1, ::ng-deep vex-changelog vex-secondary-toolbar h2 {\n  border: none;\n  margin: 0;\n}\n\n::ng-deep vex-changelog showdown a {\n  color: #5c77ff;\n}\n\n::ng-deep vex-changelog showdown > *:first-child {\n  margin-top: 0 !important;\n}\n\n::ng-deep vex-changelog h1, ::ng-deep vex-changelog h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n\n::ng-deep vex-changelog h1, ::ng-deep vex-changelog h2, ::ng-deep vex-changelog h3, ::ng-deep vex-changelog h4, ::ng-deep vex-changelog h5, ::ng-deep vex-changelog h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n\n::ng-deep vex-changelog p, ::ng-deep vex-changelog ul, ::ng-deep vex-changelog li {\n  font-size: 15px !important;\n  line-height: 1.5 !important;\n}\n\n::ng-deep vex-changelog strong {\n  font-weight: 500;\n}\n\n::ng-deep vex-changelog code.typescript {\n  display: block;\n}\n\n::ng-deep vex-changelog table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n\n::ng-deep vex-changelog table tr {\n  background-color: var(--background-card);\n  border-top: 1px solid var(--foreground-divider);\n}\n\n::ng-deep vex-changelog table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n\n::ng-deep vex-changelog table td, ::ng-deep vex-changelog table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n\n::ng-deep vex-changelog table td:first-child, ::ng-deep vex-changelog table th:first-child {\n  border-left: none;\n}\n\n::ng-deep vex-changelog table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvRDpcXERvY3VtZW50c1xcUHJvamVjdHNcXHZpbmN1bGFjaW9uLmdpdGh1Yi5pby9zcmNcXGFwcFxccGFnZXNcXGRvY3VtZW50YXRpb25cXGNoYW5nZWxvZ1xcY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kb2N1bWVudGF0aW9uL2NoYW5nZWxvZy9jaGFuZ2Vsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0VBQ0EsK0NBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnREFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50YXRpb24vY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHZleC1zZWNvbmRhcnktdG9vbGJhciBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdmV4LXNlY29uZGFyeS10b29sYmFyIGgyIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHNob3dkb3duIGEge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgc2hvd2Rvd24gPiAqOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDIsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgzLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDUsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHAsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHVsLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBsaSB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGNvZGUudHlwZXNjcmlwdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ZCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGgge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTIpIHZhcigtLXBhZGRpbmctMTYpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ZDpmaXJzdC1jaGlsZCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGgge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn0iLCI6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB2ZXgtc2Vjb25kYXJ5LXRvb2xiYXIgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHZleC1zZWNvbmRhcnktdG9vbGJhciBoMiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzaG93ZG93biBhIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHNob3dkb3duID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgyLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMywgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg1LCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBwLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB1bCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgbGkge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBjb2RlLnR5cGVzY3JpcHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGQ6Zmlyc3QtY2hpbGQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/documentation/changelog/changelog.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/documentation/changelog/changelog.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ChangelogComponent */

  /***/
  function srcAppPagesDocumentationChangelogChangelogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function () {
      return ChangelogComponent;
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

    var ChangelogComponent =
    /*#__PURE__*/
    function () {
      function ChangelogComponent() {
        _classCallCheck(this, ChangelogComponent);

        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(ChangelogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangelogComponent;
    }();

    ChangelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-changelog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./changelog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentation/changelog/changelog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./changelog.component.scss */
      "./src/app/pages/documentation/changelog/changelog.component.scss")).default]
    })], ChangelogComponent);
    /***/
  },

  /***/
  "./src/app/pages/documentation/changelog/changelog.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/documentation/changelog/changelog.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ChangelogModule */

  /***/
  function srcAppPagesDocumentationChangelogChangelogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangelogModule", function () {
      return ChangelogModule;
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


    var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./changelog-routing.module */
    "./src/app/pages/documentation/changelog/changelog-routing.module.ts");
    /* harmony import */


    var _changelog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./changelog.component */
    "./src/app/pages/documentation/changelog/changelog.component.ts");
    /* harmony import */


    var _markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../markdown.module */
    "./src/app/pages/documentation/markdown.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ChangelogModule = function ChangelogModule() {
      _classCallCheck(this, ChangelogModule);
    };

    ChangelogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_4__["ChangelogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChangelogRoutingModule"], _markdown_module__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
    })], ChangelogModule);
    /***/
  }
}]);
//# sourceMappingURL=changelog-changelog-module-es5.js.map