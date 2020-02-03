(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-table-contacts-table-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-edit.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-edit.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M5 18.08V19h.92l9.06-9.06-.92-.92z\" fill=\"currentColor\"/><path d=\"M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full relative\" vexScrollbar>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n    <table [@stagger]=\"dataSource.filteredData\"\r\n           [dataSource]=\"dataSource\"\r\n           class=\"w-full\"\r\n           fxFlex=\"auto\"\r\n           mat-table\r\n           matSort>\r\n\r\n      <!--- Note that these columns can be defined in any order.\r\n            The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n      <!-- Model Properties Column -->\r\n      <ng-container *ngFor=\"let column of columns\">\r\n        <ng-container *ngIf=\"column.type === 'text'\" [matColumnDef]=\"column.property\">\r\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>{{ row[column.property] }}</td>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"column.type === 'checkbox'\" [matColumnDef]=\"column.property\">\r\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" [checked]=\"row[column.property]\"></mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"column.type === 'image'\" [matColumnDef]=\"column.property\">\r\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\r\n            <img [src]=\"row[column.property]\" class=\"avatar h-9 w-9 align-middle my-2\">\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"column.type === 'button'\" [matColumnDef]=\"column.property\">\r\n          <ng-container *ngIf=\"column.property === 'starred'\">\r\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\r\n              <button (click)=\"emitToggleStar($event, row.id)\" mat-icon-button type=\"button\">\r\n                <mat-icon *ngIf=\"row[column.property]\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\r\n                <mat-icon *ngIf=\"!row[column.property]\" [icIcon]=\"icStarBorder\"></mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"column.property === 'menu'\">\r\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\r\n              <button (click)=\"$event.stopPropagation()\"\r\n                      [matMenuTriggerFor]=\"contactMenu\"\r\n                      mat-icon-button\r\n                      type=\"button\">\r\n                <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n\r\n      <tr *matHeaderRowDef=\"visibleColumns; sticky: true\" mat-header-row></tr>\r\n      <!--suppress UnnecessaryLabelJS -->\r\n      <tr (click)=\"openContact.emit(row.id)\"\r\n          *matRowDef=\"let row; columns: visibleColumns;\"\r\n          @fadeInUp\r\n          class=\"hover:bg-hover cursor-pointer\"\r\n          mat-row></tr>\r\n    </table>\r\n\r\n    <div *ngIf=\"dataSource.filteredData.length === 0\"\r\n         @scaleFadeIn\r\n         fxFlex=\"auto\"\r\n         fxLayout=\"column\"\r\n         fxLayoutAlign=\"center center\">\r\n      <img class=\"m-12 h-64\" src=\"assets/img/illustrations/idea.svg\">\r\n      <h2 class=\"headline m-0 text-center\">No contacts matching your filters</h2>\r\n    </div>\r\n\r\n    <mat-paginator [fxHide]=\"dataSource.filteredData.length === 0\"\r\n                   [pageSize]=\"pageSize\"\r\n                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                   class=\"sticky bottom-0 left-0 right-0 border-t\"\r\n                   fxFlex=\"none\"></mat-paginator>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #contactMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\r\n    <span>Edit Contact</span>\r\n  </button>\r\n\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icDeleteForever\"></mat-icon>\r\n    <span>Delete Contact</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @stagger class=\"max-w-xxxs w-full\">\r\n  <div class=\"h-14 mb-6 flex bg-primary-500 px-gutter sm:px-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <button (click)=\"openAddNew.emit()\" class=\"flex-auto\" mat-raised-button type=\"button\">\r\n      <ic-icon [icon]=\"icPersonAdd\" class=\"ltr:mr-3 rtl:ml-3\" inline=\"true\" size=\"18px\"></ic-icon>\r\n      <span>ADD CONTACT</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"px-gutter sm:px-0\">\r\n    <ng-container *ngFor=\"let item of items\">\r\n      <a (click)=\"setFilter(item.id)\"\r\n         *ngIf=\"item.type === 'link'\"\r\n         @fadeInRight\r\n         [class.bg-hover]=\"isActive(item.id)\"\r\n         [class.text-primary-500]=\"isActive(item.id)\"\r\n         class=\"list-item mt-2 no-underline flex items-center\"\r\n         matRipple>\r\n        <ic-icon [icon]=\"item.icon\" [ngClass]=\"item.classes?.icon\" class=\"ltr:mr-3 rtl:ml-3\" size=\"24px\"></ic-icon>\r\n        <span>{{ item.label }}</span>\r\n      </a>\r\n\r\n      <h3 *ngIf=\"item.type === 'subheading'\"\r\n          @fadeInRight\r\n          class=\"caption text-secondary uppercase font-medium mb-0 mt-6\">{{ item.label }}</h3>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full h-full flex flex-col\">\r\n  <div class=\"px-gutter pt-6 pb-20 bg-primary-500 flex-none\">\r\n    <div class=\"flex items-center\" vexContainer>\r\n      <button (click)=\"openMenu()\" @scaleIn class=\"sm:hidden text-primary-contrast-500\" mat-icon-button type=\"button\">\r\n        <mat-icon [icIcon]=\"icMenu\"></mat-icon>\r\n      </button>\r\n      <h2 class=\"headline text-primary-contrast-500 m-0 flex items-center w-full max-w-xxxs mr-6\">\r\n        <ic-icon @scaleIn [icon]=\"icContacts\" class=\"hidden sm:block\"></ic-icon>\r\n        <span @fadeInRight class=\"ml-4 block\">Contacts</span>\r\n      </h2>\r\n\r\n      <div class=\"hidden sm:flex items-center bg-card rounded-full overflow-hidden relative ltr:pl-5 rtl:pr-5 h-12 max-w-md w-full shadow-8 mx-auto\">\r\n        <ic-icon [icon]=\"icSearch\" class=\"text-secondary flex-none\" size=\"24px\"></ic-icon>\r\n        <input [formControl]=\"searchCtrl\"\r\n               class=\"border-0 h-12 outline-none ltr:pl-4 rtl:pr-4 placeholder:text-secondary bg-card flex-auto\"\r\n               placeholder=\"Search Contacts...\"\r\n               type=\"text\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"-mt-14 pt-0 overflow-hidden flex\" vexContainer>\r\n\r\n    <mat-drawer-container class=\"bg-transparent flex-auto flex\">\r\n      <mat-drawer [(opened)]=\"menuOpen\" mode=\"over\">\r\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\r\n                                 (openAddNew)=\"openContact()\"\r\n                                 class=\"sm:hidden\"></vex-contacts-table-menu>\r\n      </mat-drawer>\r\n      <mat-drawer-content class=\"p-gutter pt-0 flex-auto flex items-start\">\r\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\r\n                                 (openAddNew)=\"openContact()\"\r\n                                 class=\"hidden sm:block mr-6\"></vex-contacts-table-menu>\r\n\r\n        <div class=\"card h-full overflow-hidden flex-auto\">\r\n          <vex-contacts-data-table (openContact)=\"openContact($event)\"\r\n                                   (toggleStar)=\"toggleStar($event)\"\r\n                                   [columns]=\"tableColumns\"\r\n                                   [data]=\"tableData\"\r\n                                   [searchStr]=\"searchStr$ | async\"></vex-contacts-data-table>\r\n        </div>\r\n      </mat-drawer-content>\r\n\r\n    </mat-drawer-container>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtdGFibGUvY29udGFjdHMtZGF0YS10YWJsZS9jb250YWN0cy1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContactsDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDataTableComponent", function() { return ContactsDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ "./node_modules/@iconify/icons-ic/twotone-star-border.js");
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete-forever */ "./node_modules/@iconify/icons-ic/twotone-delete-forever.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../@vex/animations/scale-fade-in.animation */ "./src/@vex/animations/scale-fade-in.animation.ts");














let ContactsDataTableComponent = class ContactsDataTableComponent {
    constructor() {
        this.pageSize = 20;
        this.pageSizeOptions = [10, 20, 50];
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.columns) {
            this.visibleColumns = this.columns.map(column => column.property);
        }
        if (changes.data) {
            this.dataSource.data = this.data;
        }
        if (changes.searchStr) {
            this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
        }
    }
    emitToggleStar(event, id) {
        event.stopPropagation();
        this.toggleStar.emit(id);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "pageSizeOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "searchStr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsDataTableComponent.prototype, "toggleStar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsDataTableComponent.prototype, "openContact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ContactsDataTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], ContactsDataTableComponent.prototype, "sort", void 0);
ContactsDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-data-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-data-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html")).default,
        providers: [
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
                useValue: {
                    appearance: 'standard'
                }
            }
        ],
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger20ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"],
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__["scaleFadeIn400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-data-table.component.scss */ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss")).default]
    })
], ContactsDataTableComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContactsTableMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableMenuComponent", function() { return ContactsTableMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-view-headline */ "./node_modules/@iconify/icons-ic/twotone-view-headline.js");
/* harmony import */ var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../static-data/contacts */ "./src/static-data/contacts.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-history */ "./node_modules/@iconify/icons-ic/twotone-history.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-label */ "./node_modules/@iconify/icons-ic/twotone-label.js");
/* harmony import */ var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");










let ContactsTableMenuComponent = class ContactsTableMenuComponent {
    constructor() {
        this.items = [
            {
                type: 'link',
                id: 'all',
                icon: _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default.a,
                label: 'All Contacts'
            },
            {
                type: 'link',
                id: 'frequently',
                icon: _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default.a,
                label: 'Frequently contacted'
            },
            {
                type: 'link',
                id: 'starred',
                icon: _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default.a,
                label: 'Starred'
            },
            {
                type: 'subheading',
                label: 'Labels'
            },
            {
                type: 'link',
                id: 'family',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Family',
                classes: {
                    icon: 'text-primary-500'
                }
            },
            {
                type: 'link',
                id: 'friends',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Friends',
                classes: {
                    icon: 'text-green-500'
                }
            },
            {
                type: 'link',
                id: 'colleagues',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Colleagues',
                classes: {
                    icon: 'text-amber-500'
                }
            },
            {
                type: 'link',
                id: 'business',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Business',
                classes: {
                    icon: 'text-gray-500'
                }
            },
        ];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openAddNew = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeCategory = 'all';
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() {
    }
    setFilter(category) {
        this.activeCategory = category;
        if (category === 'starred') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"].filter(c => c.starred));
        }
        if (category === 'all') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"]);
        }
        if (category === 'frequently'
            || category === 'family'
            || category === 'friends'
            || category === 'colleagues'
            || category === 'business') {
            return this.filterChange.emit([]);
        }
    }
    isActive(category) {
        return this.activeCategory === category;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsTableMenuComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsTableMenuComponent.prototype, "filterChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsTableMenuComponent.prototype, "openAddNew", void 0);
ContactsTableMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-table-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-table-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html")).default,
        animations: [_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger40ms"]]
    })
], ContactsTableMenuComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ContactsTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableRoutingModule", function() { return ContactsTableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");




const routes = [
    {
        path: '',
        component: _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__["ContactsTableComponent"],
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        }
    }
];
let ContactsTableRoutingModule = class ContactsTableRoutingModule {
};
ContactsTableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactsTableRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableComponent", function() { return ContactsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contacts */ "./node_modules/@iconify/icons-ic/twotone-contacts.js");
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../static-data/contacts */ "./src/static-data/contacts.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.component */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__);














let ContactsTableComponent = class ContactsTableComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.searchStr$ = this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(10));
        this.menuOpen = false;
        this.activeCategory = 'all';
        this.tableData = _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__["contactsData"];
        this.tableColumns = [
            {
                label: '',
                property: 'selected',
                type: 'checkbox',
                cssClasses: ['w-6']
            },
            {
                label: '',
                property: 'imageSrc',
                type: 'image',
                cssClasses: ['min-w-9']
            },
            {
                label: 'NAME',
                property: 'name',
                type: 'text',
                cssClasses: ['font-medium']
            },
            {
                label: 'EMAIL',
                property: 'email',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: 'PHONE',
                property: 'phone',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: '',
                property: 'starred',
                type: 'button',
                cssClasses: ['text-secondary', 'w-10']
            },
            {
                label: '',
                property: 'menu',
                type: 'button',
                cssClasses: ['text-secondary', 'w-10']
            },
        ];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default.a;
    }
    ngOnInit() {
    }
    openContact(id) {
        this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
        });
    }
    toggleStar(id) {
        const contact = this.tableData.find(c => c.id === id);
        if (contact) {
            contact.starred = !contact.starred;
        }
    }
    setData(data) {
        this.tableData = data;
        this.menuOpen = false;
    }
    openMenu() {
        this.menuOpen = true;
    }
};
ContactsTableComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
ContactsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html")).default,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInRight400ms"]
        ]
    })
], ContactsTableComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableModule", function() { return ContactsTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-table-routing.module */ "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../@vex/components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _contacts_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");
/* harmony import */ var _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts-data-table/contacts-data-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts");
/* harmony import */ var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.module */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
/* harmony import */ var _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contacts-table-menu/contacts-table-menu.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");























let ContactsTableModule = class ContactsTableModule {
};
ContactsTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_table_component__WEBPACK_IMPORTED_MODULE_16__["ContactsTableComponent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__["ContactsDataTableComponent"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__["ContactsTableMenuComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsTableRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__["ScrollbarModule"],
            _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__["ContactsEditModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"]
        ]
    })
], ContactsTableModule);



/***/ })

}]);
//# sourceMappingURL=contacts-table-contacts-table-module-es2015.js.map