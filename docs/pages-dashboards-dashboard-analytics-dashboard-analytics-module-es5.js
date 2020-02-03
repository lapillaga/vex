function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboards-dashboard-analytics-dashboard-analytics-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/help-outline.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/help-outline.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcHelpOutlineJs(module, exports) {
    var data = {
      "body": "<path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\" fill=\"currentColor\"/>",
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
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-assistant/widget-assistant.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-assistant/widget-assistant.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetAssistantWidgetAssistantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card bg-primary-500\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <div class=\"p-4 ml-4\" fxFlex=\"none\" fxFlexAlign=\"center\">\r\n    <img src=\"assets/img/illustrations/checklist.svg\" style=\"height: 168px; width: 152px\">\r\n  </div>\r\n\r\n  <div class=\"p-6 text-primary-contrast-500\" fxFlex=\"auto\">\r\n    <h2 class=\"headline m-0\">Good Job, David!</h2>\r\n    <p class=\"caption m-0 opacity-50\">You've finished all of your tasks for this week.</p>\r\n\r\n    <div class=\"mt-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icCheckCircle\" class=\"mr-2\" size=\"24px\"></ic-icon>\r\n      <span class=\"body-2 cursor-pointer\">Finish Dashboard Design</span>\r\n    </div>\r\n\r\n    <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icCheckCircle\" class=\"mr-2\" size=\"24px\"></ic-icon>\r\n      <span class=\"body-2 cursor-pointer\">Fix Issue #74</span>\r\n    </div>\r\n\r\n    <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <ic-icon [icon]=\"icCheckCircle\" class=\"mr-2\" size=\"24px\"></ic-icon>\r\n      <span class=\"body-2 cursor-pointer\">Publish version 2.3.3</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\r\n  <div class=\"border-b py-4 px-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <h2 class=\"m-0 title\" fxFlex=\"auto\">Terapia pedalera </h2>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icCloudDownload\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMoreHoriz\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"pt-3 pb-1 pr-6\">\r\n    <vex-chart [options]=\"options\" [series]=\"series\"></vex-chart>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetLargeGoalChartWidgetLargeGoalChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\r\n  <div class=\"border-b py-4 px-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <h2 class=\"m-0 title\" fxFlex=\"auto\">Sales Overview</h2>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icCloudDownload\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMoreHoriz\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"py-6 px-6\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <div class=\"pb-6 pt-4 px-6\" fxFlex=\"auto\" fxLayout=\"column\">\r\n      <h2 class=\"display-2 font-bold m-0\">{{ total }}</h2>\r\n      <h3 class=\"title font-medium mt-2 mb-0\">Sales this month</h3>\r\n\r\n      <div class=\"mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n        <div [style.background-color]=\"theme.colors.green['500'] | colorFade:0.9\"\r\n             [style.color]=\"theme.colors.green['500']\"\r\n             class=\"w-8 h-8 rounded\"\r\n             fxFlex=\"none\"\r\n             fxLayout=\"row\"\r\n             fxLayoutAlign=\"center center\">\r\n          <ic-icon [icon]=\"faCaretUp\" height=\"20px\" inline=\"true\" width=\"20px\"></ic-icon>\r\n        </div>\r\n\r\n        <p class=\"text-secondary m-0\"><span class=\"font-medium text-green-500\">11% more sales</span> in comparison to\r\n          last\r\n          month.</p>\r\n      </div>\r\n\r\n      <div class=\"mt-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n        <div [style.background-color]=\"theme.colors.red['500'] | colorFade:0.9\"\r\n             [style.color]=\"theme.colors.red['500']\"\r\n             class=\"w-8 h-8 rounded\"\r\n             fxFlex=\"none\"\r\n             fxLayout=\"row\"\r\n             fxLayoutAlign=\"center center\">\r\n          <ic-icon [icon]=\"faCaretDown\" height=\"20px\" inline=\"true\" width=\"20px\"></ic-icon>\r\n        </div>\r\n\r\n        <p class=\"text-secondary m-0\"><span class=\"font-medium text-red-500\">-2% revenue per sale</span> in comparison\r\n          to\r\n          last month.</p>\r\n      </div>\r\n\r\n      <div class=\"mt-6\" fxFlex=\"auto\" fxLayout=\"column\" fxLayoutAlign=\"end\">\r\n        <button color=\"primary\" mat-raised-button type=\"button\">\r\n          VIEW DETAILS\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"50%\" fxFlexOffset=\"48px\">\r\n      <vex-chart [options]=\"options\" [series]=\"series\"></vex-chart>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetQuickValueCenterWidgetQuickValueCenterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (mouseenter)=\"showButton = true\"\r\n     (mouseleave)=\"showButton = false\"\r\n     class=\"card p-6 relative hover:shadow-16 trans-shadow\"\r\n     fxLayout=\"column\"\r\n     fxLayoutAlign=\"start center\">\r\n  <div *ngIf=\"color\"\r\n       [style.background-color]=\"color['500'] | colorFade:0.9\"\r\n       [style.color]=\"color['500']\"\r\n       class=\"rounded-full w-12 h-12 flex items-center justify-center\">\r\n    <mat-icon [icIcon]=\"icon\"></mat-icon>\r\n  </div>\r\n\r\n  <h2 class=\"display-2 font-bold mt-4 mb-2\">{{ value }}</h2>\r\n  <h3 class=\"subheading-2 font-medium text-secondary m-0\">{{ label }}</h3>\r\n\r\n  <h4 [class.text-green-500]=\"change > 0\"\r\n      [class.text-red-500]=\"change <= 0\"\r\n      class=\"subheading-1 font-medium mt-4 mb-0\">\r\n    <ic-icon *ngIf=\"change > 0\"\r\n             [icon]=\"faCaretUp\"\r\n             [inline]=\"true\"\r\n             height=\"20px\"\r\n             width=\"20px\"></ic-icon>\r\n    <ic-icon *ngIf=\"change <= 0\"\r\n             [icon]=\"faCaretDown\"\r\n             [inline]=\"true\"\r\n             height=\"20px\"\r\n             width=\"20px\"></ic-icon>\r\n    <span>{{ change }}%</span>\r\n  </h4>\r\n\r\n  <button *ngIf=\"helpText\"\r\n          [matTooltip]=\"helpText\"\r\n          class=\"absolute top-0 left-0 mt-2 ml-2 text-hint\"\r\n          mat-icon-button\r\n          matTooltipPosition=\"after\"\r\n          type=\"button\">\r\n    <mat-icon [icIcon]=\"icHelp\" height=\"18px\" width=\"18px\"></mat-icon>\r\n  </button>\r\n\r\n  <button (click)=\"openSheet()\"\r\n          *ngIf=\"showButton\"\r\n          @scaleInOut\r\n          class=\"absolute -top-3 -right-3 bg-card shadow-8\"\r\n          color=\"primary\"\r\n          mat-icon-button\r\n          type=\"button\">\r\n    <mat-icon [icIcon]=\"icShare\" height=\"24px\" width=\"24px\"></mat-icon>\r\n  </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetQuickValueStartWidgetQuickValueStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (mouseenter)=\"showButton = true\"\r\n     (mouseleave)=\"showButton = false\"\r\n     class=\"card p-6 relative hover:shadow-16 trans-shadow\"\r\n     fxLayout=\"column\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <h3 class=\"subheading-2 font-medium text-secondary m-0\">{{ label }}</h3>\r\n\r\n    <div class=\"rounded-full bg-primary-50 w-12 h-12 flex items-center justify-center\">\r\n      <mat-icon [icIcon]=\"icon\" class=\"text-primary-500\"></mat-icon>\r\n    </div>\r\n  </div>\r\n\r\n  <h2 class=\"display-2 font-bold mt-4 mb-2\">{{ value }}</h2>\r\n\r\n\r\n  <h4 [style.color]=\"change > 0 ? green : red\"\r\n      class=\"subheading-1 font-medium mt-4 mb-0\">\r\n    <ic-icon *ngIf=\"change > 0\"\r\n             [icon]=\"icTrendingUp\"\r\n             [inline]=\"true\"\r\n             height=\"20px\"\r\n             width=\"20px\"></ic-icon>\r\n    <ic-icon *ngIf=\"change <= 0\"\r\n             [icon]=\"icTrendingDown\"\r\n             [inline]=\"true\"\r\n             height=\"20px\"\r\n             width=\"20px\"></ic-icon>\r\n    <span class=\"ml-1\">{{ change }}</span>\r\n    <span class=\"ml-2 text-secondary font-normal\">{{ changeSuffix }}</span>\r\n  </h4>\r\n\r\n  <button *ngIf=\"helpText\"\r\n          [matTooltip]=\"helpText\"\r\n          class=\"absolute top-0 left-0 mt-2 ml-2 text-hint\"\r\n          mat-icon-button\r\n          matTooltipPosition=\"after\"\r\n          type=\"button\">\r\n    <mat-icon [icIcon]=\"icHelp\" height=\"18px\" width=\"18px\"></mat-icon>\r\n  </button>\r\n\r\n  <button (click)=\"openSheet()\"\r\n          *ngIf=\"showButton\"\r\n          @scaleInOut\r\n          class=\"absolute -top-3 -right-3 bg-card shadow-8\"\r\n          color=\"primary\"\r\n          mat-icon-button\r\n          type=\"button\">\r\n    <mat-icon [icIcon]=\"icShare\" height=\"24px\" width=\"24px\"></mat-icon>\r\n  </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-table/widget-table.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-table/widget-table.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsWidgetsWidgetTableWidgetTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card overflow-auto w-full\" fxLayout=\"column\">\r\n  <div class=\"border-b py-4 px-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <h2 class=\"m-0 title\" fxFlex=\"auto\">Recent Sales</h2>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icCloudDownload\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n\r\n    <button mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icMoreHoriz\" class=\"text-secondary\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <table [dataSource]=\"dataSource\" class=\"w-full overflow-auto\" mat-table matSort>\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Model Properties Column -->\r\n    <ng-container *ngFor=\"let column of columns\">\r\n      <ng-container *ngIf=\"column.type === 'text'\" [matColumnDef]=\"column.property\">\r\n        <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n        <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>{{ row[column.property] }}</td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"column.type === 'badge'\" [matColumnDef]=\"column.property\">\r\n        <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\r\n        <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\r\n          <div *ngIf=\"row[column.property] === 'ready'\"\r\n               class=\"w-3 h-3 rounded-full bg-green-500 cursor-pointer\"\r\n               matTooltip=\"Ready to ship\"></div>\r\n          <div *ngIf=\"row[column.property] === 'pending'\"\r\n               class=\"w-3 h-3 rounded-full bg-orange-500 cursor-pointer\"\r\n               matTooltip=\"Pending Payment\"></div>\r\n          <div *ngIf=\"row[column.property] === 'warn'\"\r\n               class=\"w-3 h-3 rounded-full bg-red-500 cursor-pointer\"\r\n               matTooltip=\"Missing Payment\"></div>\r\n        </td>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <tr *matHeaderRowDef=\"visibleColumns\" mat-header-row></tr>\r\n    <!--suppress UnnecessaryLabelJS -->\r\n    <tr *matRowDef=\"let row; columns: visibleColumns;\" mat-row></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSize]=\"pageSize\" class=\"paginator\"></mat-paginator>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardsDashboardAnalyticsDashboardAnalyticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<vex-secondary-toolbar current=\"Dashboard\">\r\n  <vex-breadcrumbs [crumbs]=\"['Dashboards', 'Analytics']\" class=\"flex-auto\"></vex-breadcrumbs>\r\n\r\n  <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\r\n    <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\r\n  </button>\r\n</vex-secondary-toolbar>\r\n\r\n<div class=\"p-gutter\"\r\n     gdColumns=\"1fr 1fr 1fr 1fr\"\r\n     gdColumns.lt-md=\"1fr 1fr\"\r\n     gdColumns.lt-sm=\"1fr\"\r\n     gdGap=\"16px\"\r\n     vexContainer>\r\n  <vex-widget-assistant gdColumn=\"1 / 3\" gdColumn.lt-md=\"1 / -1\" gdColumn.lt-sm=\"1\"></vex-widget-assistant>\r\n\r\n  <vex-widget-quick-line-chart [icon]=\"icPageView\"\r\n                               [series]=\"pageViewsSeries\"\r\n                               [color]=\"theme.colors.primary\"\r\n                               gdColumn.lt-sm=\"1\"\r\n                               label=\"Page Views\"\r\n                               value=\"92.4k\"></vex-widget-quick-line-chart>\r\n\r\n  <vex-widget-quick-line-chart [icon]=\"icGroup\"\r\n                               [options]=\"uniqueUsersOptions\"\r\n                               [series]=\"uniqueUsersSeries\"\r\n                               [color]=\"theme.colors.orange\"\r\n                               gdColumn.lt-sm=\"1\"\r\n                               label=\"Unique Users\"\r\n                               value=\"67.2k\"></vex-widget-quick-line-chart>\r\n\r\n  <vex-widget-large-chart [series]=\"userSessionsSeries\"\r\n                          gdColumn=\"1 / 3\"\r\n                          gdColumn.lt-md=\"1 / -1\"\r\n                          gdColumn.lt-sm=\"1\"></vex-widget-large-chart>\r\n\r\n  <vex-widget-table [columns]=\"tableColumns\"\r\n                    [data]=\"tableData\"\r\n                    class=\"w-full overflow-auto shadow\" gdColumn=\"3 / -1\"\r\n                    gdColumn.lt-md=\"1 / -1\"\r\n                    gdColumn.lt-sm=\"1\"></vex-widget-table>\r\n\r\n  <vex-widget-quick-value-center [change]=\"124.4\"\r\n                                 [icon]=\"icGroup\"\r\n                                 [color]=\"theme.colors.primary\"\r\n                                 gdColumn.lt-sm=\"1\"\r\n                                 label=\"Users\"\r\n                                 value=\"67.4k\"></vex-widget-quick-value-center>\r\n  <vex-widget-quick-value-center [change]=\"-23.7\"\r\n                                 [icon]=\"icPageView\"\r\n                                 [color]=\"theme.colors.orange\"\r\n                                 gdColumn.lt-sm=\"1\"\r\n                                 helpText=\"Additional information\"\r\n                                 label=\"Sessions\"\r\n                                 value=\"96.2k\"></vex-widget-quick-value-center>\r\n  <vex-widget-quick-value-center [change]=\"23.2\"\r\n                                 [icon]=\"icCloudOff\"\r\n                                 [color]=\"theme.colors['deep-orange']\"\r\n                                 gdColumn.lt-sm=\"1\"\r\n                                 helpText=\"Explain something\"\r\n                                 label=\"Bounce Rate\"\r\n                                 value=\"6.92%\"></vex-widget-quick-value-center>\r\n  <vex-widget-quick-value-center [change]=\"34.5\"\r\n                                 [icon]=\"icTimer\"\r\n                                 [color]=\"theme.colors.teal\"\r\n                                 gdColumn.lt-sm=\"1\"\r\n                                 label=\"Session Duration\"\r\n                                 value=\"16m 48s\"></vex-widget-quick-value-center>\r\n\r\n  <vex-widget-large-goal-chart [series]=\"salesSeries\"\r\n                               gdColumn=\"1 / -1\"\r\n                               gdColumn.lt-sm=\"1\"\r\n                               total=\"4,374\"></vex-widget-large-goal-chart>\r\n\r\n</div>\r\n";
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
  "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-assistant/widget-assistant.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsWidgetsWidgetAssistantWidgetAssistantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3dpZGdldHMvd2lkZ2V0LWFzc2lzdGFudC93aWRnZXQtYXNzaXN0YW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts ***!
    \************************************************************************************/

  /*! exports provided: WidgetAssistantComponent */

  /***/
  function srcVexComponentsWidgetsWidgetAssistantWidgetAssistantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetAssistantComponent", function () {
      return WidgetAssistantComponent;
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


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-check-circle */
    "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_2__);

    var WidgetAssistantComponent =
    /*#__PURE__*/
    function () {
      function WidgetAssistantComponent() {
        _classCallCheck(this, WidgetAssistantComponent);

        this.icCheckCircle = _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(WidgetAssistantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetAssistantComponent;
    }();

    WidgetAssistantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-assistant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-assistant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-assistant/widget-assistant.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./widget-assistant.component.scss */
      "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.scss")).default]
    })], WidgetAssistantComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: WidgetAssistantModule */

  /***/
  function srcVexComponentsWidgetsWidgetAssistantWidgetAssistantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetAssistantModule", function () {
      return WidgetAssistantModule;
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


    var _widget_assistant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-assistant.component */
    "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var WidgetAssistantModule = function WidgetAssistantModule() {
      _classCallCheck(this, WidgetAssistantModule);
    };

    WidgetAssistantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_3__["WidgetAssistantComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"]],
      exports: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_3__["WidgetAssistantComponent"]]
    })], WidgetAssistantModule);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3dpZGdldHMvd2lkZ2V0LWxhcmdlLWNoYXJ0L3dpZGdldC1sYXJnZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: WidgetLargeChartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeChartComponent", function () {
      return WidgetLargeChartComponent;
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


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _utils_default_chart_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _utils_create_date_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../utils/create-date-array */
    "./src/@vex/utils/create-date-array.ts");

    var WidgetLargeChartComponent =
    /*#__PURE__*/
    function () {
      function WidgetLargeChartComponent() {
        _classCallCheck(this, WidgetLargeChartComponent);

        this.options = Object(_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_4__["defaultChartOptions"])({
          grid: {
            show: true,
            strokeDashArray: 3,
            padding: {
              left: 16
            }
          },
          chart: {
            type: 'area',
            height: 384,
            sparkline: {
              enabled: false
            },
            zoom: {
              enabled: false
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 0.9,
              opacityFrom: 0.7,
              opacityTo: 0.5,
              stops: [0, 90, 100]
            }
          },
          colors: ['#008ffb', '#ff9800'],
          labels: Object(_utils_create_date_array__WEBPACK_IMPORTED_MODULE_5__["createDateArray"])(5),
          xaxis: {
            type: 'datetime',
            labels: {
              show: true
            }
          },
          yaxis: {
            labels: {
              show: true
            }
          },
          legend: {
            show: true
          }
        });
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(WidgetLargeChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetLargeChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetLargeChartComponent.prototype, "series", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetLargeChartComponent.prototype, "options", void 0);
    WidgetLargeChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-large-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-large-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./widget-large-chart.component.scss */
      "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.scss")).default]
    })], WidgetLargeChartComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: WidgetLargeChartModule */

  /***/
  function srcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeChartModule", function () {
      return WidgetLargeChartModule;
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


    var _widget_large_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-large-chart.component */
    "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");

    var WidgetLargeChartModule = function WidgetLargeChartModule() {
      _classCallCheck(this, WidgetLargeChartModule);
    };

    WidgetLargeChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_3__["WidgetLargeChartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__["ChartModule"]],
      exports: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_3__["WidgetLargeChartComponent"]]
    })], WidgetLargeChartModule);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: WidgetLargeGoalChartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetLargeGoalChartWidgetLargeGoalChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeGoalChartComponent", function () {
      return WidgetLargeGoalChartComponent;
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


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-up */
    "./node_modules/@iconify/icons-fa-solid/caret-up.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-down */
    "./node_modules/@iconify/icons-fa-solid/caret-down.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _utils_default_chart_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _utils_create_date_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../utils/create-date-array */
    "./src/@vex/utils/create-date-array.ts");
    /* harmony import */


    var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var WidgetLargeGoalChartComponent =
    /*#__PURE__*/
    function () {
      function WidgetLargeGoalChartComponent() {
        _classCallCheck(this, WidgetLargeGoalChartComponent);

        this.options = Object(_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_6__["defaultChartOptions"])({
          grid: {
            show: true,
            strokeDashArray: 3,
            padding: {
              left: 16
            }
          },
          chart: {
            type: 'line',
            height: 300,
            sparkline: {
              enabled: false
            },
            zoom: {
              enabled: false
            }
          },
          stroke: {
            width: 4
          },
          labels: Object(_utils_create_date_array__WEBPACK_IMPORTED_MODULE_7__["createDateArray"])(12),
          xaxis: {
            type: 'datetime',
            labels: {
              show: true
            }
          },
          yaxis: {
            labels: {
              show: true
            }
          }
        });
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.faCaretUp = _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.faCaretDown = _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.theme = _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_8__["default"];
      }

      _createClass(WidgetLargeGoalChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetLargeGoalChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetLargeGoalChartComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetLargeGoalChartComponent.prototype, "series", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetLargeGoalChartComponent.prototype, "options", void 0);
    WidgetLargeGoalChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-large-goal-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-large-goal-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.html")).default
    })], WidgetLargeGoalChartComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: WidgetLargeGoalChartModule */

  /***/
  function srcVexComponentsWidgetsWidgetLargeGoalChartWidgetLargeGoalChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeGoalChartModule", function () {
      return WidgetLargeGoalChartModule;
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


    var _widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-large-goal-chart.component */
    "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");
    /* harmony import */


    var _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");

    var WidgetLargeGoalChartModule = function WidgetLargeGoalChartModule() {
      _classCallCheck(this, WidgetLargeGoalChartModule);
    };

    WidgetLargeGoalChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_3__["WidgetLargeGoalChartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_8__["ChartModule"], _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_9__["ColorFadeModule"]],
      exports: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_3__["WidgetLargeGoalChartComponent"]]
    })], WidgetLargeGoalChartModule);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: WidgetQuickValueCenterComponent */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueCenterWidgetQuickValueCenterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueCenterComponent", function () {
      return WidgetQuickValueCenterComponent;
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


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-up */
    "./node_modules/@iconify/icons-fa-solid/caret-up.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-down */
    "./node_modules/@iconify/icons-fa-solid/caret-down.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/help-outline */
    "./node_modules/@iconify/icons-ic/help-outline.js");
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-share */
    "./node_modules/@iconify/icons-ic/twotone-share.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../animations/scale-in-out.animation */
    "./src/@vex/animations/scale-in-out.animation.ts");

    var WidgetQuickValueCenterComponent =
    /*#__PURE__*/
    function () {
      function WidgetQuickValueCenterComponent(_bottomSheet) {
        _classCallCheck(this, WidgetQuickValueCenterComponent);

        this._bottomSheet = _bottomSheet;
        this.faCaretUp = _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.faCaretDown = _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icHelp = _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_5___default.a;
      }

      _createClass(WidgetQuickValueCenterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSheet",
        value: function openSheet() {
          this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__["ShareBottomSheetComponent"]);
        }
      }]);

      return WidgetQuickValueCenterComponent;
    }();

    WidgetQuickValueCenterComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "helpText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueCenterComponent.prototype, "color", void 0);
    WidgetQuickValueCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-quick-value-center',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-quick-value-center.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_8__["scaleInOutAnimation"]]
    })], WidgetQuickValueCenterComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: WidgetQuickValueCenterModule */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueCenterWidgetQuickValueCenterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueCenterModule", function () {
      return WidgetQuickValueCenterModule;
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


    var _widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-quick-value-center.component */
    "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.module */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts");
    /* harmony import */


    var _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");

    var WidgetQuickValueCenterModule = function WidgetQuickValueCenterModule() {
      _classCallCheck(this, WidgetQuickValueCenterModule);
    };

    WidgetQuickValueCenterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_3__["WidgetQuickValueCenterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_9__["ShareBottomSheetModule"], _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_10__["ColorFadeModule"]],
      exports: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_3__["WidgetQuickValueCenterComponent"]]
    })], WidgetQuickValueCenterModule);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: WidgetQuickValueStartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueStartWidgetQuickValueStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueStartComponent", function () {
      return WidgetQuickValueStartComponent;
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


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/help-outline */
    "./node_modules/@iconify/icons-ic/help-outline.js");
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-share */
    "./node_modules/@iconify/icons-ic/twotone-share.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-trending-up */
    "./node_modules/@iconify/icons-ic/twotone-trending-up.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-trending-down */
    "./node_modules/@iconify/icons-ic/twotone-trending-down.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../animations/scale-in-out.animation */
    "./src/@vex/animations/scale-in-out.animation.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var WidgetQuickValueStartComponent =
    /*#__PURE__*/
    function () {
      function WidgetQuickValueStartComponent(_bottomSheet) {
        _classCallCheck(this, WidgetQuickValueStartComponent);

        this._bottomSheet = _bottomSheet;
        this.icTrendingUp = _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icTrendingDown = _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icHelp = _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.green = _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_9__["default"].colors.green['500'];
        this.red = _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_9__["default"].colors.red['500'];
      }

      _createClass(WidgetQuickValueStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSheet",
        value: function openSheet() {
          this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetComponent"]);
        }
      }]);

      return WidgetQuickValueStartComponent;
    }();

    WidgetQuickValueStartComponent.ctorParameters = function () {
      return [{
        type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "changeSuffix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetQuickValueStartComponent.prototype, "helpText", void 0);
    WidgetQuickValueStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-quick-value-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-quick-value-start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.html")).default,
      animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_6__["scaleInOutAnimation"]]
    })], WidgetQuickValueStartComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: WidgetQuickValueStartModule */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueStartWidgetQuickValueStartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueStartModule", function () {
      return WidgetQuickValueStartModule;
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


    var _widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-quick-value-start.component */
    "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.module */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts");

    var WidgetQuickValueStartModule = function WidgetQuickValueStartModule() {
      _classCallCheck(this, WidgetQuickValueStartModule);
    };

    WidgetQuickValueStartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_3__["WidgetQuickValueStartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_9__["ShareBottomSheetModule"]],
      exports: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_3__["WidgetQuickValueStartComponent"]]
    })], WidgetQuickValueStartModule);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-table/widget-table.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-table/widget-table.component.ts ***!
    \****************************************************************************/

  /*! exports provided: WidgetTableComponent */

  /***/
  function srcVexComponentsWidgetsWidgetTableWidgetTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetTableComponent", function () {
      return WidgetTableComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__);

    var WidgetTableComponent =
    /*#__PURE__*/
    function () {
      function WidgetTableComponent() {
        _classCallCheck(this, WidgetTableComponent);

        this.pageSize = 6;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6___default.a;
      }

      _createClass(WidgetTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columns) {
            this.visibleColumns = this.columns.map(function (column) {
              return column.property;
            });
          }

          if (changes.data) {
            this.dataSource.data = this.data;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return WidgetTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetTableComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetTableComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WidgetTableComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    })], WidgetTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      static: true
    })], WidgetTableComponent.prototype, "sort", void 0);
    WidgetTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-widget-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/widgets/widget-table/widget-table.component.html")).default
    })], WidgetTableComponent);
    /***/
  },

  /***/
  "./src/@vex/components/widgets/widget-table/widget-table.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-table/widget-table.module.ts ***!
    \*************************************************************************/

  /*! exports provided: WidgetTableModule */

  /***/
  function srcVexComponentsWidgetsWidgetTableWidgetTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetTableModule", function () {
      return WidgetTableModule;
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


    var _widget_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./widget-table.component */
    "./src/@vex/components/widgets/widget-table/widget-table.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
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

    var WidgetTableModule = function WidgetTableModule() {
      _classCallCheck(this, WidgetTableModule);
    };

    WidgetTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_widget_table_component__WEBPACK_IMPORTED_MODULE_3__["WidgetTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"]],
      exports: [_widget_table_component__WEBPACK_IMPORTED_MODULE_3__["WidgetTableComponent"]]
    })], WidgetTableModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: DashboardAnalyticsRoutingModule */

  /***/
  function srcAppPagesDashboardsDashboardAnalyticsDashboardAnalyticsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsRoutingModule", function () {
      return DashboardAnalyticsRoutingModule;
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


    var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-analytics.component */
    "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAnalyticsComponent"]
    }];

    var DashboardAnalyticsRoutingModule = function DashboardAnalyticsRoutingModule() {
      _classCallCheck(this, DashboardAnalyticsRoutingModule);
    };

    DashboardAnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardAnalyticsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardsDashboardAnalyticsDashboardAnalyticsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DashboardAnalyticsComponent */

  /***/
  function srcAppPagesDashboardsDashboardAnalyticsDashboardAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsComponent", function () {
      return DashboardAnalyticsComponent;
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


    var _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-group */
    "./node_modules/@iconify/icons-ic/twotone-group.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-pageview */
    "./node_modules/@iconify/icons-ic/twotone-pageview.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-off */
    "./node_modules/@iconify/icons-ic/twotone-cloud-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-timer */
    "./node_modules/@iconify/icons-ic/twotone-timer.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _vex_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@vex/utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _static_data_table_sales_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../static-data/table-sales-data */
    "./src/static-data/table-sales-data.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../@vex/utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var DashboardAnalyticsComponent =
    /*#__PURE__*/
    function () {
      function DashboardAnalyticsComponent(cd) {
        _classCallCheck(this, DashboardAnalyticsComponent);

        this.cd = cd;
        this.tableColumns = [{
          label: '',
          property: 'status',
          type: 'badge'
        }, {
          label: 'PRODUCT',
          property: 'name',
          type: 'text'
        }, {
          label: '$ PRICE',
          property: 'price',
          type: 'text',
          cssClasses: ['font-medium']
        }, {
          label: 'DATE',
          property: 'timestamp',
          type: 'text',
          cssClasses: ['text-secondary']
        }];
        this.tableData = _static_data_table_sales_data__WEBPACK_IMPORTED_MODULE_7__["tableSalesData"];
        this.series = [{
          name: 'Subscribers',
          data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
        }];
        this.userSessionsSeries = [{
          name: 'Users',
          data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
        }, {
          name: 'Sessions',
          data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
        }];
        this.salesSeries = [{
          name: 'Sales',
          data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
        }];
        this.pageViewsSeries = [{
          name: 'Page Views',
          data: [405, 800, 200, 600, 105, 788, 600, 204]
        }];
        this.uniqueUsersSeries = [{
          name: 'Unique Users',
          data: [356, 806, 600, 754, 432, 854, 555, 1004]
        }];
        this.uniqueUsersOptions = Object(_vex_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_6__["defaultChartOptions"])({
          chart: {
            type: 'area',
            height: 100
          },
          colors: ['#ff9800']
        });
        this.icGroup = _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPageView = _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icCloudOff = _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icTimer = _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_9__["default"];
      }

      _createClass(DashboardAnalyticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            var temp = [{
              name: 'Subscribers',
              data: [55, 213, 55, 0, 213, 55, 33, 55]
            }, {
              name: ''
            }];
          }, 3000);
        }
      }]);

      return DashboardAnalyticsComponent;
    }();

    DashboardAnalyticsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    DashboardAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-dashboard-analytics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-analytics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-analytics.component.scss */
      "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.scss")).default]
    })], DashboardAnalyticsComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts ***!
    \************************************************************************************/

  /*! exports provided: DashboardAnalyticsModule */

  /***/
  function srcAppPagesDashboardsDashboardAnalyticsDashboardAnalyticsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsModule", function () {
      return DashboardAnalyticsModule;
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


    var _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-analytics-routing.module */
    "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts");
    /* harmony import */


    var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-analytics.component */
    "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@vex/components/chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module */
    "./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module.ts");
    /* harmony import */


    var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module */
    "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts");
    /* harmony import */


    var _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module */
    "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts");
    /* harmony import */


    var _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module */
    "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-assistant/widget-assistant.module */
    "./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts");
    /* harmony import */


    var _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module */
    "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts");
    /* harmony import */


    var _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../@vex/components/widgets/widget-table/widget-table.module */
    "./src/@vex/components/widgets/widget-table/widget-table.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var DashboardAnalyticsModule = function DashboardAnalyticsModule() {
      _classCallCheck(this, DashboardAnalyticsModule);
    };

    DashboardAnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_4__["DashboardAnalyticsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardAnalyticsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_8__["WidgetQuickLineChartModule"], _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_9__["WidgetQuickValueCenterModule"], _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_10__["WidgetQuickValueStartModule"], _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_11__["WidgetLargeGoalChartModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"], _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_13__["WidgetAssistantModule"], _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_14__["WidgetLargeChartModule"], _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_15__["WidgetTableModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_16__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_19__["PageLayoutModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"]]
    })], DashboardAnalyticsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboards-dashboard-analytics-dashboard-analytics-module-es5.js.map