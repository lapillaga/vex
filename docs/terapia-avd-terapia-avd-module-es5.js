function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terapia-avd-terapia-avd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppsTerapiaTerapiaAvdTerapiaAvdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-page-layout class=\"p-gutter container\">\r\n\r\n  <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n    <div class=\"w-full flex justify-between\">\r\n      <div>\r\n        <h1 class=\"title mt-0 mb-1\">Adultos Mayores</h1>\r\n        <vex-breadcrumbs [crumbs]=\"['Terapia', 'Terapia maletín AVD']\"></vex-breadcrumbs>\r\n      </div>\r\n    </div>\r\n  </vex-page-layout-header>\r\n  <vex-page-layout-content class=\"-mt-6\">\r\n\r\n    <div class=\"card overflow-auto -mt-16\">\r\n      <div class=\"bg-app-bar px-6 h-16 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <h2 class=\"title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l\" fxFlex=\"none\" fxHide.xs>\r\n          <span *ngIf=\"selection.isEmpty()\">Adulto Mayor</span>\r\n          <span *ngIf=\"selection.hasValue()\">{{ selection.selected.length }}\r\n            antecedente<span *ngIf=\"selection.selected.length > 1\">s seleccionados</span><span *ngIf=\"selection.selected.length == 1\"> seleccionado</span></span>\r\n        </h2>\r\n\r\n        <div *ngIf=\"selection.hasValue()\" class=\"mr-4 pr-4 border-r\" fxFlex=\"none\">\r\n          <button (click)=\"openDialog(selection.selected)\"\r\n                  color=\"primary\"\r\n                  mat-icon-button\r\n                  matTooltip=\"Delete selected\"\r\n                  type=\"button\">\r\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"bg-card rounded-full border px-4\"\r\n             fxFlex=\"400px\"\r\n             fxFlex.lt-md=\"auto\"\r\n             fxHide.xs\r\n             fxLayout=\"row\"\r\n             fxLayoutAlign=\"start center\">\r\n          <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\r\n          <input [formControl]=\"searchCtrl\"\r\n                 class=\"px-4 py-3 border-0 outline-none w-full bg-transparent\"\r\n                 placeholder=\"Buscar...\"\r\n                 type=\"search\">\r\n        </div>\r\n\r\n        <span fxFlex></span>\r\n\r\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\r\n          <mat-icon [icIcon]=\"icSearch\"></mat-icon>\r\n        </button>\r\n\r\n        <button [matMenuTriggerFor]=\"columnFilterMenu\"\r\n                class=\"ml-4\"\r\n                fxFlex=\"none\"\r\n                mat-icon-button\r\n                matTooltip=\"Filtrar Columnas\"\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\r\n        </button>\r\n\r\n        <button (click)=\"createCajaAvd()\"\r\n                class=\"ml-4\"\r\n                color=\"primary\"\r\n                fxFlex=\"none\"\r\n                mat-mini-fab\r\n                matTooltip=\"Agregar Terapia\"\r\n                type=\"button\">\r\n          <mat-icon [icIcon]=\"icAdd\"></mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <table @stagger [dataSource]=\"dataSource\" class=\"w-full\" mat-table matSort>\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n        <!-- Checkbox Column -->\r\n\r\n        <ng-container matColumnDef=\"checkbox\">\r\n          <th *matHeaderCellDef mat-header-cell>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                          color=\"primary\">\r\n            </mat-checkbox>\r\n          </th>\r\n          <td *matCellDef=\"let row\" class=\"w-4\" mat-cell>\r\n            <mat-checkbox (change)=\"$event ? selection.toggle(row) : null\"\r\n                          (click)=\"$event.stopPropagation()\"\r\n                          [checked]=\"selection.isSelected(row)\"\r\n                          color=\"primary\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Text Columns -->\r\n        <ng-container *ngFor=\"let column of columns; trackBy: trackByProperty\">\r\n          <ng-container *ngIf=\"column.type === 'text'\" [matColumnDef]=\"column.property\">\r\n            <th *matHeaderCellDef class=\"uppercase\" mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>{{ row[column.property] }}</td>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th *matHeaderCellDef mat-header-cell mat-sort-header></th>\r\n          <td *matCellDef=\"let row\" class=\"w-10 text-secondary\" mat-cell>\r\n            <button (click)=\"$event.stopPropagation() \"\r\n                    [matMenuTriggerData]=\"{ caja: row }\"\r\n                    [matMenuTriggerFor]=\"actionsMenu\"\r\n                    mat-icon-button\r\n                    type=\"button\">\r\n              <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr *matHeaderRowDef=\"visibleColumns\" mat-header-row></tr>\r\n        <tr (click)=\"updateCaja(row)\"\r\n            *matRowDef=\"let row; columns: visibleColumns;\"\r\n            @fadeInUp\r\n            class=\"hover:bg-hover trans-ease-out cursor-pointer\"\r\n            mat-row></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [pageSize]=\"pageSize\" class=\"sticky left-0\"></mat-paginator>\r\n    </div>\r\n\r\n  </vex-page-layout-content>\r\n\r\n\r\n\r\n\r\n</vex-page-layout>\r\n<mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button (click)=\"toggleColumnVisibility(column, $event)\" *ngFor=\"let column of columns\"\r\n          class=\"checkbox-item mat-menu-item\">\r\n    <mat-checkbox (click)=\"$event.stopPropagation()\" [(ngModel)]=\"column.visible\" color=\"primary\">\r\n      {{ column.label }}\r\n    </mat-checkbox>\r\n  </button>\r\n</mat-menu>\r\n<mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <ng-template let-caja=\"caja\" matMenuContent>\r\n    <button (click)=\"updateCaja(caja)\" mat-menu-item>\r\n      <mat-icon [icIcon]=\"icEdit\"></mat-icon>\r\n      <span>Modificar</span>\r\n    </button>\r\n    <button (click)=\"openDialog(null, caja)\" mat-menu-item>\r\n      <mat-icon [icIcon]=\"icDelete\"></mat-icon>\r\n      <span>Eliminar</span>\r\n    </button>\r\n  </ng-template>\r\n</mat-menu>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/apps/terapia/terapia-avd/terapia-avd-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/apps/terapia/terapia-avd/terapia-avd-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: TerapiaAvdRoutingModule */

  /***/
  function srcAppPagesAppsTerapiaTerapiaAvdTerapiaAvdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerapiaAvdRoutingModule", function () {
      return TerapiaAvdRoutingModule;
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


    var _terapia_avd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terapia-avd.component */
    "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.ts");

    var routes = [{
      path: '',
      component: _terapia_avd_component__WEBPACK_IMPORTED_MODULE_3__["TerapiaAvdComponent"],
      data: {
        toolbarShadowEnabled: true
      }
    }];

    var TerapiaAvdRoutingModule = function TerapiaAvdRoutingModule() {
      _classCallCheck(this, TerapiaAvdRoutingModule);
    };

    TerapiaAvdRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TerapiaAvdRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppsTerapiaTerapiaAvdTerapiaAvdComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvdGVyYXBpYS90ZXJhcGlhLWF2ZC90ZXJhcGlhLWF2ZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TerapiaAvdComponent, DialogComponent */

  /***/
  function srcAppPagesAppsTerapiaTerapiaAvdTerapiaAvdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerapiaAvdComponent", function () {
      return TerapiaAvdComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
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


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-edit */
    "./node_modules/@iconify/icons-ic/twotone-edit.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete */
    "./node_modules/@iconify/icons-ic/twotone-delete.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-filter-list */
    "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-folder */
    "./node_modules/@iconify/icons-ic/twotone-folder.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _service_cajaAvd_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../service/cajaAvd.service */
    "./src/app/service/cajaAvd.service.ts");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var _terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./terapia-avd-create-update/terapia-avd-create-update.component */
    "./src/app/pages/apps/terapia/terapia-avd/terapia-avd-create-update/terapia-avd-create-update.component.ts");

    var TerapiaAvdComponent =
    /*#__PURE__*/
    function () {
      function TerapiaAvdComponent(cajaAvdService, snackbar, dialog) {
        _classCallCheck(this, TerapiaAvdComponent);

        this.cajaAvdService = cajaAvdService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icFolder = _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.columns = [{
          label: 'Checkbox',
          property: 'checkbox',
          type: 'checkbox',
          visible: true
        }, {
          label: 'Código de Persona',
          property: 'codigo',
          type: 'text',
          visible: true
        }, {
          label: 'Ejercicio',
          property: 'ejercicio',
          type: 'text',
          visible: true
        }, {
          label: 'Desarrollo',
          property: 'ejercitaciones',
          type: 'text',
          visible: true
        }, {
          label: 'Fecha',
          property: 'fecha',
          type: 'text',
          visible: true
        }, {
          label: 'Actions',
          property: 'actions',
          type: 'button',
          visible: true
        }];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
      }

      _createClass(TerapiaAvdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableDataSource"]();
          this.getCajas();
          this.searchCtrl.valueChanges.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_17__["untilDestroyed"])(this)).subscribe(function (value) {
            return _this.onFilterChange(value);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "onFilterChange",
        value: function onFilterChange(value) {
          if (!this.dataSource) {
            return;
          }

          value = value.trim();
          value = value.toLowerCase();
          this.dataSource.filter = value;
        }
      }, {
        key: "getCajas",
        value: function getCajas() {
          var _this2 = this;

          this.cajaAvdService.getCajas().snapshotChanges().subscribe(function (item) {
            _this2.cajasAvd = [];
            item.forEach(function (element) {
              var x = element.payload.toJSON();
              x["$key"] = element.key;

              _this2.cajasAvd.push(x);

              console.log(_this2.cajasAvd);
              _this2.dataSource.data = _this2.cajasAvd;
            });
          });
        }
      }, {
        key: "toggleColumnVisibility",
        value: function toggleColumnVisibility(column, event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          column.visible = !column.visible;
        }
      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this3 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this3.selection.select(row);
          });
        }
      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      }, {
        key: "trackByProperty",
        value: function trackByProperty(column) {
          return column.property;
        }
      }, {
        key: "showNotification",
        value: function showNotification(message, action) {
          this.snackbar.open(message, action, {
            duration: 5000
          });
        }
      }, {
        key: "createCajaAvd",
        value: function createCajaAvd() {
          var _this4 = this;

          this.dialog.open(_terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_18__["TerapiaAvdCreateUpdateComponent"]).afterClosed().subscribe(function (caja) {
            if (caja) {
              if (_this4.cajaAvdService.insertCaja(caja)) {
                _this4.showNotification('Terapia creado EXITOSAMENTE', 'OK');
              } else {
                _this4.showNotification('ERROR al crear el Terapia', 'CERRAR');
              }
            }
          });
        }
      }, {
        key: "updateCaja",
        value: function updateCaja(caja) {
          var _this5 = this;

          console.log(caja);
          this.dialog.open(_terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_18__["TerapiaAvdCreateUpdateComponent"], {
            data: caja
          }).afterClosed().subscribe(function (updated) {
            var id = caja.$key;
            console.log(id);

            if (updated) {
              if (_this5.cajaAvdService.updateCaja(updated, id)) {
                _this5.ngOnInit();

                _this5.showNotification('Registro actualizado exitosamente', 'Ok');
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "openDialog",
        value: function openDialog(listCajas, cajaAvd) {
          var _this6 = this;

          var message = 'Estas seguro de eliminar este registro?';

          if (cajaAvd) {
            listCajas = new Array();
            listCajas.push(cajaAvd);
          } else if (listCajas.length > 1) {
            message = 'Estas seguro de eliminar ' + listCajas.length + ' registros?';
          }

          this.dialog.open(DialogComponent, {
            data: message,
            disableClose: false,
            width: '400px'
          }).afterClosed().subscribe(function (result) {
            if (result === 'si') {
              _this6.delateCaja(listCajas);
            }
          });
        }
      }, {
        key: "delateCaja",
        value: function delateCaja(cajas) {
          var _this7 = this;

          var tamaño = cajas.length;
          var promise = new Promise(function (resolve, reject) {
            cajas.forEach(function (caja) {
              var id = caja.$key;

              if (_this7.cajaAvdService.deleteCaja(id)) {
                _this7.selection.deselect(caja);

                _this7.dataSource.connect().next(_this7.cajasAvd);
              }
            });
            resolve();
          });
          promise.then(function () {
            _this7.selection.clear();

            if (tamaño > 1) {
              _this7.showNotification('Registros eliminados exitosamente', 'Ok');
            } else {
              _this7.showNotification('Registro eliminado exitosamente', 'Ok');
            }
          });
        }
      }, {
        key: "visibleColumns",
        get: function get() {
          return this.columns.filter(function (column) {
            return column.visible;
          }).map(function (column) {
            return column.property;
          });
        }
      }]);

      return TerapiaAvdComponent;
    }();

    TerapiaAvdComponent.ctorParameters = function () {
      return [{
        type: _service_cajaAvd_service__WEBPACK_IMPORTED_MODULE_16__["CajaAvdService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TerapiaAvdComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], {
      static: true
    })], TerapiaAvdComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSort"], {
      static: true
    })], TerapiaAvdComponent.prototype, "sort", void 0);
    TerapiaAvdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-terapia-avd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terapia-avd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.html")).default,
      animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'standard'
        }
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terapia-avd.component.scss */
      "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.scss")).default]
    })], TerapiaAvdComponent);

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(defaults, dialogRef) {
        _classCallCheck(this, DialogComponent);

        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default.a;
      }

      _createClass(DialogComponent, [{
        key: "close",
        value: function close(answer) {
          this.dialogRef.close(answer);
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = this.defaults;
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogRef"]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-components-dialog',
      template: "\n      <div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <div>ALERTA</div>\n          <button type=\"button\" mat-icon-button (click)=\"close('null')\" tabindex=\"-1\">\n              <mat-icon [icIcon]=\"icClose\"></mat-icon>\n          </button>\n      </div>\n\n      <mat-dialog-content>\n          <p>{{message}}</p>\n      </mat-dialog-content>\n\n\n      <mat-dialog-actions align=\"end\">\n          <button mat-button (click)=\"close('no')\">NO</button>\n          <button mat-button color=\"primary\" (click)=\"close('si')\">SI</button>\n      </mat-dialog-actions>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DATA"]))], DialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/apps/terapia/terapia-avd/terapia-avd.module.ts ***!
    \**********************************************************************/

  /*! exports provided: TerapiaAvdModule */

  /***/
  function srcAppPagesAppsTerapiaTerapiaAvdTerapiaAvdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerapiaAvdModule", function () {
      return TerapiaAvdModule;
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


    var _service_pedalera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../service/pedalera.service */
    "./src/app/service/pedalera.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../@vex/pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _terapia_avd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./terapia-avd.component */
    "./src/app/pages/apps/terapia/terapia-avd/terapia-avd.component.ts");
    /* harmony import */


    var _terapia_avd_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./terapia-avd-routing.module */
    "./src/app/pages/apps/terapia/terapia-avd/terapia-avd-routing.module.ts");
    /* harmony import */


    var _terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./terapia-avd-create-update/terapia-avd-create-update.component */
    "./src/app/pages/apps/terapia/terapia-avd/terapia-avd-create-update/terapia-avd-create-update.component.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js"); // servicios


    var TerapiaAvdModule = function TerapiaAvdModule() {
      _classCallCheck(this, TerapiaAvdModule);
    };

    TerapiaAvdModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_terapia_avd_component__WEBPACK_IMPORTED_MODULE_11__["TerapiaAvdComponent"], _terapia_avd_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_13__["TerapiaAvdCreateUpdateComponent"]],
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terapia_avd_routing_module__WEBPACK_IMPORTED_MODULE_12__["TerapiaAvdRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_23__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_9__["ColorFadeModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"]],
      providers: [_service_pedalera_service__WEBPACK_IMPORTED_MODULE_3__["PedaleraService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      entryComponents: [_terapia_avd_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_13__["TerapiaAvdCreateUpdateComponent"]],
      exports: [_terapia_avd_create_update_terapia_avd_create_update_component__WEBPACK_IMPORTED_MODULE_13__["TerapiaAvdCreateUpdateComponent"]]
    })], TerapiaAvdModule);
    /***/
  }
}]);
//# sourceMappingURL=terapia-avd-terapia-avd-module-es5.js.map