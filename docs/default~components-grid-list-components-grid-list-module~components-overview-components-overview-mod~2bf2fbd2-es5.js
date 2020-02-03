function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2"], {
  /***/
  "./node_modules/@angular/material/esm2015/grid-list.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/grid-list.js ***!
    \*************************************************************/

  /*! exports provided: MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, ɵa11 */

  /***/
  function node_modulesAngularMaterialEsm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa11", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridTile =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile',
        exportAs: 'matGridTile',
        host: {
          'class': 'mat-grid-tile'
        },
        template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatGridTileText =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile-header, mat-grid-tile-footer',
        template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]]
      }]
    };
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-grid-avatar], [matGridAvatar]',
        host: {
          'class': 'mat-grid-avatar'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-header',
        host: {
          'class': 'mat-grid-tile-header'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-footer',
        host: {
          'class': 'mat-grid-tile-footer'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */

    var TileCoordinator =
    /*#__PURE__*/
    function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler =
    /*#__PURE__*/
    function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler =
    /*#__PURE__*/
    function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this2;

        _classCallCheck(this, FixedTileStyler);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FixedTileStyler).call(this));
        _this2.fixedRowHeight = fixedRowHeight;
        return _this2;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler =
    /*#__PURE__*/
    function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this3;

        _classCallCheck(this, RatioTileStyler);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RatioTileStyler).call(this));

        _this3._parseRatio(value);

        return _this3;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler =
    /*#__PURE__*/
    function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _possibleConstructorReturn(this, _getPrototypeOf(FitTileStyler).apply(this, arguments));
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this4 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this4;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this4._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-list',
        exportAs: 'matGridList',
        template: "<div><ng-content></ng-content></div>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        host: {
          'class': 'mat-grid-list'
        },
        providers: [{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
        exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
        declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=grid-list.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~2bf2fbd2-es5.js.map