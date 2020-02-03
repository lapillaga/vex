function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-grid-contacts-grid-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-cloud-download.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-cloud-download.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneCloudDownloadJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M19.21 12.04l-1.53-.11-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z\" fill=\"currentColor\"/><path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports.default = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-filter-list.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-filter-list.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneFilterListJs(module, exports) {
    var data = {
      "body": "<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\" fill=\"currentColor\"/>",
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsContactsComponentsContactsCardContactsCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card overflow-hidden\">\r\n  <div (click)=\"openContact.emit(contact.id)\"\r\n       class=\"p-4 text-center hover:bg-hover trans-ease-out cursor-pointer relative\"\r\n       matRipple>\r\n    <img [src]=\"contact?.imageSrc\" class=\"avatar h-24 w-24 mx-auto\">\r\n\r\n    <h2 class=\"title mb-1 mt-3\">{{ contact?.name }}</h2>\r\n    <div class=\"body-2 text-secondary\">\r\n      <ic-icon [icon]=\"icBusiness\" class=\"ltr:mr-1 rtl:ml-1\" inline=\"true\"></ic-icon>\r\n      <span>{{ contact?.company }}</span>\r\n    </div>\r\n\r\n    <div class=\"body-2 text-secondary\">\r\n      <ic-icon [icon]=\"icPhone\" class=\"ltr:mr-1 rtl:ml-1\" inline=\"true\"></ic-icon>\r\n      <span>{{ contact?.phone }}</span>\r\n    </div>\r\n\r\n    <button (click)=\"emitToggleStar($event, contact?.id)\" class=\"absolute top-2 right-2\" mat-icon-button type=\"button\">\r\n      <mat-icon *ngIf=\"contact?.starred\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\r\n      <mat-icon *ngIf=\"!contact?.starred\" [icIcon]=\"icStarBorder\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"bg-app-bar p-2\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button class=\"text-secondary\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icPhone\"></mat-icon>\r\n    </button>\r\n\r\n    <button class=\"text-secondary\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMail\"></mat-icon>\r\n    </button>\r\n\r\n    <button class=\"text-secondary\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icChat\"></mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsContactsContactsGridContactsGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-full\" fxLayout=\"column\">\r\n  <div class=\"p-6 pb-0 bg-card shadow-b\" fxFlex=\"none\">\r\n    <div vexContainer>\r\n      <h1 class=\"display-1 mt-0 mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <span @scaleIn\r\n            [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\r\n            class=\"w-12 h-12 rounded-full text-primary-500 ltr:mr-4 rtl:ml-4 flex items-center justify-center\">\r\n      <ic-icon [icon]=\"icContacts\" size=\"24px\"></ic-icon>\r\n      </span>\r\n        <span @fadeInRight class=\"block\">Contacts</span>\r\n      </h1>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <nav class=\"vex-tabs border-0\" fxFlex=\"auto\" mat-tab-nav-bar>\r\n          <a #rla=\"routerLinkActive\"\r\n             *ngFor=\"let link of links\"\r\n             [active]=\"rla.isActive\"\r\n             [disabled]=\"link.disabled\"\r\n             [routerLink]=\"link.route\"\r\n             mat-tab-link\r\n             routerLinkActive>\r\n            {{ link.label }}\r\n          </a>\r\n        </nav>\r\n\r\n        <button color=\"primary\" fxFlex=\"none\" fxHide.xs mat-icon-button matTooltip=\"Search Contacts\" type=\"button\">\r\n          <mat-icon [icIcon]=\"icSearch\"></mat-icon>\r\n        </button>\r\n\r\n        <button class=\"ltr:ml-1 rtl:mr-1\"\r\n                color=\"primary\"\r\n                fxFlex=\"none\"\r\n                fxHide.xs\r\n                mat-icon-button\r\n                matTooltip=\"Export Contacts\"\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icCloudDownload\"></mat-icon>\r\n        </button>\r\n\r\n        <button class=\"ltr:ml-1 rtl:mr-1\"\r\n                color=\"primary\"\r\n                fxFlex=\"none\"\r\n                mat-icon-button\r\n                matTooltip=\"Filter Contacts\"\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\r\n        </button>\r\n\r\n        <button (click)=\"openContact()\"\r\n                class=\"ltr:ml-1 rtl:mr-1\"\r\n                color=\"primary\"\r\n                fxFlex=\"none\"\r\n                fxHide.gt-xs\r\n                mat-mini-fab\r\n                matTooltip=\"Add Contact\"\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icPersonAdd\"></mat-icon>\r\n        </button>\r\n\r\n        <button (click)=\"openContact()\"\r\n                class=\"ltr:ml-4 rtl:mr-4\"\r\n                color=\"primary\"\r\n                fxFlex=\"none\"\r\n                fxHide.xs\r\n                mat-raised-button\r\n                type=\"button\">\r\n          <ic-icon [icon]=\"icPersonAdd\"\r\n                   class=\"ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1\"\r\n                   inline=\"true\"\r\n                   size=\"20px\"></ic-icon>\r\n          <span>ADD CONTACT</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"(filteredContacts$ | async).length > 0\"\r\n       @stagger\r\n       class=\"overflow-y-auto\"\r\n       fxFlex=\"auto\">\r\n    <div class=\"p-gutter\"\r\n         vexContainer\r\n         gdColumns=\"1fr 1fr 1fr 1fr\"\r\n         gdColumns.lt-md=\"1fr 1fr\"\r\n         gdColumns.xs=\"1fr\"\r\n         gdGap=\"24px\">\r\n      <vex-contacts-card (openContact)=\"openContact($event)\"\r\n                         (toggleStar)=\"toggleStar($event)\"\r\n                         *ngFor=\"let contact of filteredContacts$ | async; trackBy: trackById\"\r\n                         @fadeInUp\r\n                         [contact]=\"contact\"></vex-contacts-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"(filteredContacts$ | async).length === 0\"\r\n       @scaleFadeIn\r\n       fxFlex=\"auto\"\r\n       fxLayout=\"column\"\r\n       fxLayoutAlign=\"center center\">\r\n    <img class=\"m-12 h-64\" src=\"assets/img/illustrations/idea.svg\">\r\n    <h2 class=\"headline m-0 text-center\">No contacts matching your filters</h2>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsContactsComponentsContactsCardContactsCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1jYXJkL2NvbnRhY3RzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ContactsCardComponent */

  /***/
  function srcAppPagesAppsContactsComponentsContactsCardContactsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsCardComponent", function () {
      return ContactsCardComponent;
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


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone */
    "./node_modules/@iconify/icons-ic/twotone-phone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-business */
    "./node_modules/@iconify/icons-ic/twotone-business.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-mail */
    "./node_modules/@iconify/icons-ic/twotone-mail.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chat */
    "./node_modules/@iconify/icons-ic/twotone-chat.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_7__);

    var ContactsCardComponent =
    /*#__PURE__*/
    function () {
      function ContactsCardComponent() {
        _classCallCheck(this, ContactsCardComponent);

        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChat = _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_7___default.a;
      }

      _createClass(ContactsCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emitToggleStar",
        value: function emitToggleStar(event, contactId) {
          event.stopPropagation();
          this.toggleStar.emit(contactId);
        }
      }]);

      return ContactsCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactsCardComponent.prototype, "contact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsCardComponent.prototype, "openContact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactsCardComponent.prototype, "toggleStar", void 0);
    ContactsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-contacts-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts-card.component.scss */
      "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.scss")).default]
    })], ContactsCardComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContactsCardModule */

  /***/
  function srcAppPagesAppsContactsComponentsContactsCardContactsCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsCardModule", function () {
      return ContactsCardModule;
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


    var _contacts_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-card.component */
    "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");

    var ContactsCardModule = function ContactsCardModule() {
      _classCallCheck(this, ContactsCardModule);
    };

    ContactsCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_3__["ContactsCardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]],
      exports: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_3__["ContactsCardComponent"]]
    })], ContactsCardModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ContactsGridRoutingModule */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridRoutingModule", function () {
      return ContactsGridRoutingModule;
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


    var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-grid.component */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'all'
    }, {
      path: ':activeCategory',
      component: _contacts_grid_component__WEBPACK_IMPORTED_MODULE_3__["ContactsGridComponent"],
      data: {
        scrollDisabled: true,
        toolbarShadowEnabled: false
      }
    }];

    var ContactsGridRoutingModule = function ContactsGridRoutingModule() {
      _classCallCheck(this, ContactsGridRoutingModule);
    };

    ContactsGridRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsGridRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtZ3JpZC9jb250YWN0cy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ContactsGridComponent */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridComponent", function () {
      return ContactsGridComponent;
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


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contacts */
    "./node_modules/@iconify/icons-ic/twotone-contacts.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person-add */
    "./node_modules/@iconify/icons-ic/twotone-person-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.component */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-filter-list */
    "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _static_data_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../static-data/contacts */
    "./src/static-data/contacts.ts");
    /* harmony import */


    var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../@vex/utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../@vex/utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var ContactsGridComponent =
    /*#__PURE__*/
    function () {
      function ContactsGridComponent(dialog, route) {
        _classCallCheck(this, ContactsGridComponent);

        this.dialog = dialog;
        this.route = route;
        this.contacts = _static_data_contacts__WEBPACK_IMPORTED_MODULE_10__["contactsData"];
        this.filteredContacts$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(function (paramMap) {
          return paramMap.get('activeCategory');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(function (activeCategory) {
          switch (activeCategory) {
            case 'all':
              {
                return _static_data_contacts__WEBPACK_IMPORTED_MODULE_10__["contactsData"];
              }

            case 'starred':
              {
                return _static_data_contacts__WEBPACK_IMPORTED_MODULE_10__["contactsData"].filter(function (c) {
                  return c.starred;
                });
              }

            default:
              {
                return [];
              }
          }
        }));
        this.links = [{
          label: 'ALL CONTACTS',
          route: '../all'
        }, {
          label: 'FREQUENTLY CONTACTED',
          route: '../frequent'
        }, {
          label: 'STARRED',
          route: '../starred'
        }];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_11__["trackById"];
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_18__["default"];
      }

      _createClass(ContactsGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openContact",
        value: function openContact(id) {
          this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
          });
        }
      }, {
        key: "toggleStar",
        value: function toggleStar(id) {
          var contact = _static_data_contacts__WEBPACK_IMPORTED_MODULE_10__["contactsData"].find(function (c) {
            return c.id === id;
          });

          if (contact) {
            contact.starred = !contact.starred;
          }
        }
      }]);

      return ContactsGridComponent;
    }();

    ContactsGridComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
      }];
    };

    ContactsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-contacts-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.html")).default,
      animations: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_14__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_15__["scaleFadeIn400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts-grid.component.scss */
      "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.scss")).default]
    })], ContactsGridComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ContactsGridModule */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridModule", function () {
      return ContactsGridModule;
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


    var _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-grid-routing.module */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts");
    /* harmony import */


    var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contacts-grid.component */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.module */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../components/contacts-card/contacts-card.module */
    "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../@vex/pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");

    var ContactsGridModule = function ContactsGridModule() {
      _classCallCheck(this, ContactsGridModule);
    };

    ContactsGridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_contacts_grid_component__WEBPACK_IMPORTED_MODULE_4__["ContactsGridComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsGridRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_10__["ContactsEditModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_13__["ContactsCardModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_14__["ContainerModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_15__["ColorFadeModule"]]
    })], ContactsGridModule);
    /***/
  }
}]);
//# sourceMappingURL=contacts-grid-contacts-grid-module-es5.js.map