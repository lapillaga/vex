function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~bd660006"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/tree.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/tree.js ***!
    \***************************************************/

  /*! exports provided: BaseTreeControl, FlatTreeControl, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTreeNodePadding, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTree, CdkTreeNode, getTreeNoValidDataSourceError, getTreeMultipleDefaultNodeDefsError, getTreeMissingMatchingNodeDefError, getTreeControlMissingError, getTreeControlFunctionsMissingError, CdkTreeModule, CdkTreeNodeToggle */

  /***/
  function node_modulesAngularCdkEsm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
      return BaseTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
      return FlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
      return NestedTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
      return CdkNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
      return CdkTreeNodeOutletContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
      return CdkTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
      return CdkTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
      return CDK_TREE_NODE_OUTLET_NODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
      return CdkTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
      return CdkTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
      return CdkTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
      return getTreeNoValidDataSourceError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
      return getTreeMultipleDefaultNodeDefsError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
      return getTreeMissingMatchingNodeDefError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
      return getTreeControlMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
      return getTreeControlFunctionsMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
      return CdkTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
      return CdkTreeNodeToggle;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
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
     * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
     * @abstract
     * @template T
     */


    var BaseTreeControl =
    /*#__PURE__*/
    function () {
      function BaseTreeControl() {
        _classCallCheck(this, BaseTreeControl);

        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
      }
      /**
       * Toggles one single data node's expanded/collapsed state.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(BaseTreeControl, [{
        key: "toggle",
        value: function toggle(dataNode) {
          this.expansionModel.toggle(dataNode);
        }
        /**
         * Expands one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(dataNode) {
          this.expansionModel.select(dataNode);
        }
        /**
         * Collapses one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(dataNode) {
          this.expansionModel.deselect(dataNode);
        }
        /**
         * Whether a given data node is expanded or not. Returns true if the data node is expanded.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "isExpanded",
        value: function isExpanded(dataNode) {
          return this.expansionModel.isSelected(dataNode);
        }
        /**
         * Toggles a subtree rooted at `node` recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "toggleDescendants",
        value: function toggleDescendants(dataNode) {
          this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
        }
        /**
         * Collapse all dataNodes in the tree.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.expansionModel.clear();
        }
        /**
         * Expands a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expandDescendants",
        value: function expandDescendants(dataNode) {
          var _this$expansionModel;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, toBeProcessed);
        }
        /**
         * Collapses a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapseDescendants",
        value: function collapseDescendants(dataNode) {
          var _this$expansionModel2;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, toBeProcessed);
        }
      }]);

      return BaseTreeControl;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
     * @template T
     */


    var FlatTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl) {
      _inherits(FlatTreeControl, _BaseTreeControl);

      /**
       * Construct with flat tree data node functions getLevel and isExpandable.
       * @param {?} getLevel
       * @param {?} isExpandable
       */
      function FlatTreeControl(getLevel, isExpandable) {
        var _this;

        _classCallCheck(this, FlatTreeControl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlatTreeControl).call(this));
        _this.getLevel = getLevel;
        _this.isExpandable = isExpandable;
        return _this;
      }
      /**
       * Gets a list of the data node's subtree of descendent data nodes.
       *
       * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
       * with correct levels.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(FlatTreeControl, [{
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var startIndex = this.dataNodes.indexOf(dataNode);
          /** @type {?} */

          var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
          // The level of descendants of a tree node must be greater than the level of the given
          // tree node.
          // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
          // If we reach a node whose level is greater than the level of the tree node, we hit a
          // sibling of an ancestor.

          for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
          }

          return results;
        }
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this$expansionModel3;

          (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes));
        }
      }]);

      return FlatTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
     * @template T
     */


    var NestedTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl2) {
      _inherits(NestedTreeControl, _BaseTreeControl2);

      /**
       * Construct with nested tree function getChildren.
       * @param {?} getChildren
       */
      function NestedTreeControl(getChildren) {
        var _this2;

        _classCallCheck(this, NestedTreeControl);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NestedTreeControl).call(this));
        _this2.getChildren = getChildren;
        return _this2;
      }
      /**
       * Expands all dataNodes in the tree.
       *
       * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
       * data nodes of the tree.
       * @return {?}
       */


      _createClass(NestedTreeControl, [{
        key: "expandAll",
        value: function expandAll() {
          var _this3 = this,
              _this$expansionModel4;

          this.expansionModel.clear();
          /** @type {?} */

          var allNodes = this.dataNodes.reduce(
          /**
          * @param {?} accumulator
          * @param {?} dataNode
          * @return {?}
          */
          function (accumulator, dataNode) {
            return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this3.getDescendants(dataNode)), [dataNode]);
          }, []);

          (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes));
        }
        /**
         * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var descendants = [];

          this._getDescendants(descendants, dataNode); // Remove the node itself


          return descendants.splice(1);
        }
        /**
         * A helper function to get descendants recursively.
         * @protected
         * @param {?} descendants
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "_getDescendants",
        value: function _getDescendants(descendants, dataNode) {
          var _this4 = this;

          descendants.push(dataNode);
          /** @type {?} */

          var childrenNodes = this.getChildren(dataNode);

          if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              return _this4._getDescendants(descendants, child);
            });
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /** @type {?} */
            Boolean)).subscribe(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var child = _step.value;

                  _this4._getDescendants(descendants, child);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        }
      }]);

      return NestedTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var CdkTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function CdkTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, CdkTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    CdkTreeNodeOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeOutlet]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TREE_NODE_OUTLET_NODE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Context provided to the tree node component.
     * @template T
     */


    var CdkTreeNodeOutletContext =
    /**
     * @param {?} data
     */
    function CdkTreeNodeOutletContext(data) {
      _classCallCheck(this, CdkTreeNodeOutletContext);

      this.$implicit = data;
    };
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     * @template T
     */


    var CdkTreeNodeDef =
    /**
     * \@docs-private
     * @param {?} template
     */
    function CdkTreeNodeDef(template) {
      _classCallCheck(this, CdkTreeNodeDef);

      this.template = template;
    };

    CdkTreeNodeDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeDef]',
        inputs: ['when: cdkTreeNodeDefWhen']
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when there is no usable data.
     * \@docs-private
     * @return {?}
     */


    function getTreeNoValidDataSourceError() {
      return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTreeMultipleDefaultNodeDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * \@docs-private
     * @return {?}
     */


    function getTreeMissingMatchingNodeDefError() {
      return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlMissingError() {
      return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlFunctionsMissingError() {
      return Error("Could not find functions for nested/flat tree in tree control.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     * @template T
     */


    var CdkTree =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       */
      function CdkTree(_differs, _changeDetectorRef) {
        _classCallCheck(this, CdkTree);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */

        this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });
      }
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       * @return {?}
       */


      _createClass(CdkTree, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._dataDiffer = this._differs.find([]).create(this.trackBy);

          if (!this.treeControl) {
            throw getTreeControlMissingError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._nodeOutlet.viewContainer.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var defaultNodeDefs = this._nodeDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
          }

          this._defaultNodeDef = defaultNodeDefs[0];

          if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
          }
        } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.

        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          } // Remove the all dataNodes if there is now no data source


          if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;

          if (this._nodeDefs) {
            this._observeRenderChanges();
          }
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this5 = this;

          /** @type {?} */
          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
          } else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            dataStream = this._dataSource;
          } else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
          }

          if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this5.renderNodeChanges(data);
            });
          } else {
            throw getTreeNoValidDataSourceError();
          }
        }
        /**
         * Check for changes made in the data and render each change (node added/removed/moved).
         * @param {?} data
         * @param {?=} dataDiffer
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "renderNodeChanges",
        value: function renderNodeChanges(data) {
          var _this6 = this;

          var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
          var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
          var parentData = arguments.length > 3 ? arguments[3] : undefined;

          /** @type {?} */
          var changes = dataDiffer.diff(data);

          if (!changes) {
            return;
          }

          changes.forEachOperation(
          /**
          * @param {?} item
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
              _this6.insertNode(data[
              /** @type {?} */
              currentIndex],
              /** @type {?} */
              currentIndex, viewContainer, parentData);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              adjustedPreviousIndex);

              _this6._levels.delete(item.item);
            } else {
              /** @type {?} */
              var view = viewContainer.get(
              /** @type {?} */
              adjustedPreviousIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          });

          this._changeDetectorRef.detectChanges();
        }
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         * @param {?} data
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getNodeDef",
        value: function _getNodeDef(data, i) {
          if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
          }
          /** @type {?} */


          var nodeDef = this._nodeDefs.find(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.when && def.when(i, data);
          }) || this._defaultNodeDef;

          if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
          }

          return nodeDef;
        }
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         * @param {?} nodeData
         * @param {?} index
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "insertNode",
        value: function insertNode(nodeData, index, viewContainer, parentData) {
          /** @type {?} */
          var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

          /** @type {?} */


          var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
          // Otherwise, use the level of parent node.

          if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
          } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level =
            /** @type {?} */
            this._levels.get(parentData) + 1;
          } else {
            context.level = 0;
          }

          this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

          /** @type {?} */


          var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
          container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
          // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
          //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

          if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
          }
        }
      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
      }]);

      return CdkTree;
    }();

    CdkTree.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'cdk-tree',
        exportAs: 'cdkTree',
        template: "<ng-container cdkTreeNodeOutlet></ng-container>",
        host: {
          'class': 'cdk-tree',
          'role': 'tree'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
        // The view for `CdkTree` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    CdkTree.propDecorators = {
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      treeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkTreeNodeOutlet, {
          static: true
        }]
      }],
      _nodeDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeDef]
      }]
    };
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     * @template T
     */

    var CdkTreeNode =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _tree
       */
      function CdkTreeNode(_elementRef, _tree) {
        _classCallCheck(this, CdkTreeNode);

        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */

        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */

        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode =
        /** @type {?} */
        this;
      }
      /**
       * The tree node's data.
       * @return {?}
       */


      _createClass(CdkTreeNode, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          // If this is the last tree node being destroyed,
          // clear out the reference to avoid leaking memory.
          if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
          }

          this._dataChanges.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Focuses the menu item. Implements for FocusableOption.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_setRoleFromData",
        value: function _setRoleFromData() {
          var _this7 = this;

          if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
          } else {
            if (!this._tree.treeControl.getChildren) {
              throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */


            var childrenNodes = this._tree.treeControl.getChildren(this._data);

            if (Array.isArray(childrenNodes)) {
              this._setRoleFromChildren(
              /** @type {?} */
              childrenNodes);
            } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                return _this7._setRoleFromChildren(children);
              });
            }
          }
        }
        /**
         * @protected
         * @param {?} children
         * @return {?}
         */

      }, {
        key: "_setRoleFromChildren",
        value: function _setRoleFromChildren(children) {
          this.role = children && children.length ? 'group' : 'treeitem';
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._data) {
            this._data = value;

            this._setRoleFromData();

            this._dataChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._tree.treeControl.isExpanded(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "level",
        get: function get() {
          return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        }
      }]);

      return CdkTreeNode;
    }();
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */


    CdkTreeNode.mostRecentTreeNode = null;
    CdkTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-tree-node',
        exportAs: 'cdkTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node'
        }
      }]
    }];
    /** @nocollapse */

    CdkTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }];
    };

    CdkTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * For example:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *     <ng-template cdkTreeNodeOutlet></ng-template>
     *   </cdk-nested-tree-node>
     *   ```
     * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
     * like this:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *      <cdk-nested-tree-node>{{child1.name}}</cdk-nested-tree-node>
     *      <cdk-nested-tree-node>{{child2.name}}</cdk-nested-tree-node>
     *   </cdk-nested-tree-node>
     *   ```
     * @template T
     */

    var CdkNestedTreeNode =
    /*#__PURE__*/
    function (_CdkTreeNode) {
      _inherits(CdkNestedTreeNode, _CdkTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       */
      function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this8;

        _classCallCheck(this, CdkNestedTreeNode);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CdkNestedTreeNode).call(this, _elementRef, _tree));
        _this8._elementRef = _elementRef;
        _this8._tree = _tree;
        _this8._differs = _differs;
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(CdkNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this9 = this;

          this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

          if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
          }
          /** @type {?} */


          var childrenNodes = this._tree.treeControl.getChildren(this.data);

          if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(
            /** @type {?} */
            childrenNodes);
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this9.updateChildrenNodes(result);
            });
          }

          this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this9.updateChildrenNodes();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._clear();

          _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Add children dataNodes to the NodeOutlet
         * @protected
         * @param {?=} children
         * @return {?}
         */

      }, {
        key: "updateChildrenNodes",
        value: function updateChildrenNodes(children) {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (children) {
            this._children = children;
          }

          if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;

            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
          } else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
          }
        }
        /**
         * Clear the children dataNodes.
         * @protected
         * @return {?}
         */

      }, {
        key: "_clear",
        value: function _clear() {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (outlet) {
            outlet.viewContainer.clear();

            this._dataDiffer.diff([]);
          }
        }
        /**
         * Gets the outlet for the current node.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNodeOutlet",
        value: function _getNodeOutlet() {
          var _this10 = this;

          /** @type {?} */
          var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
          // that we don't pick up the outlet of a child node by accident.

          return outlets && outlets.find(
          /**
          * @param {?} outlet
          * @return {?}
          */
          function (outlet) {
            return !outlet._node || outlet._node === _this10;
          });
        }
      }]);

      return CdkNestedTreeNode;
    }(CdkTreeNode);

    CdkNestedTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-nested-tree-node',
        exportAs: 'cdkNestedTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node cdk-nested-tree-node'
        },
        providers: [{
          provide: CdkTreeNode,
          useExisting: CdkNestedTreeNode
        }, {
          provide: CDK_TREE_NODE_OUTLET_NODE,
          useExisting: CdkNestedTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    CdkNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };

    CdkNestedTreeNode.propDecorators = {
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var CdkTreeNodePadding =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this11 = this;

        _classCallCheck(this, CdkTreeNodePadding);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._indent = 40;

        this._setPadding();

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this11._setPadding(true);
          });
        } // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.


        _treeNode._dataChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this11._setPadding();
        });
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(CdkTreeNodePadding, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level == null ? nodeLevel : this._level;
          return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
        }
        /**
         * @param {?=} forceChange
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var padding = this._paddingIndent();

          if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */

            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */

            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';

            this._renderer.setStyle(element, paddingProp, padding);

            this._renderer.setStyle(element, resetProp, null);

            this._currentPadding = padding;
          }
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Set to null as the fallback value so that _setPadding can fall back to the node level if the
          // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
          // they set 0 explicitly.
          this._level =
          /** @type {?} */
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return CdkTreeNodePadding;
    }();

    CdkTreeNodePadding.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodePadding]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodePadding.ctorParameters = function () {
      return [{
        type: CdkTreeNode
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Node toggle to expand/collapse the node.
     * @template T
     */

    var CdkTreeNodeToggle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _tree
       * @param {?} _treeNode
       */
      function CdkTreeNodeToggle(_tree, _treeNode) {
        _classCallCheck(this, CdkTreeNodeToggle);

        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
      }
      /**
       * Whether expand/collapse the node recursively.
       * @return {?}
       */


      _createClass(CdkTreeNodeToggle, [{
        key: "_toggle",
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _toggle(event) {
          this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
          event.stopPropagation();
        }
      }, {
        key: "recursive",
        get: function get() {
          return this._recursive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTreeNodeToggle;
    }();

    CdkTreeNodeToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeToggle]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeToggle.ctorParameters = function () {
      return [{
        type: CdkTree
      }, {
        type: CdkTreeNode
      }];
    };

    CdkTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodeToggleRecursive']
      }],
      _toggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

    var CdkTreeModule = function CdkTreeModule() {
      _classCallCheck(this, CdkTreeModule);
    };

    CdkTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS,
        providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
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
    //# sourceMappingURL=tree.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/bottom-sheet.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/bottom-sheet.js ***!
    \****************************************************************/

  /*! exports provided: MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef */

  /***/
  function node_modulesAngularMaterialEsm2015BottomSheetJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function () {
      return MatBottomSheetModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function () {
      return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function () {
      return MatBottomSheet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function () {
      return MAT_BOTTOM_SHEET_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function () {
      return MatBottomSheetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function () {
      return MatBottomSheetContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function () {
      return matBottomSheetAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function () {
      return MatBottomSheetRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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
     * Injection token that can be used to access the data that was passed in to a bottom sheet.
     * @type {?}
     */


    var MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatBottomSheetData');
    /**
     * Configuration used when opening a bottom sheet.
     * @template D
     */

    var MatBottomSheetConfig = function MatBottomSheetConfig() {
      _classCallCheck(this, MatBottomSheetConfig);

      /**
       * Data being injected into the child component.
       */
      this.data = null;
      /**
       * Whether the bottom sheet has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Whether the user can use escape or clicking outside to close the bottom sheet.
       */

      this.disableClose = false;
      /**
       * Aria label to assign to the bottom sheet element.
       */

      this.ariaLabel = null;
      /**
       * Whether the bottom sheet should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // Note that this is disabled by default, because while the a11y recommendations are to focus
      // the first focusable element, doing so prevents screen readers from reading out the
      // rest of the bottom sheet content.

      /**
       * Whether the bottom sheet should focus the first focusable element on open.
       */

      this.autoFocus = false;
      /**
       * Whether the bottom sheet should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material bottom sheet.
     * @type {?}
     */


    var matBottomSheetAnimations = {
      /**
       * Animation that shows and hides a bottom sheet.
       */
      bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(100%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].COMPLEX, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].ACCELERATION_CURVE))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].EXITING, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].DECELERATION_CURVE)))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar

    /**
     * Internal component that wraps user-provided bottom sheet content.
     * \@docs-private
     */

    var MatBottomSheetContainer =
    /*#__PURE__*/
    function (_angular_cdk_portal__) {
      _inherits(MatBottomSheetContainer, _angular_cdk_portal__);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _focusTrapFactory
       * @param {?} breakpointObserver
       * @param {?} document
       * @param {?} bottomSheetConfig
       */
      function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, bottomSheetConfig) {
        var _this12;

        _classCallCheck(this, MatBottomSheetContainer);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(MatBottomSheetContainer).call(this));
        _this12._elementRef = _elementRef;
        _this12._changeDetectorRef = _changeDetectorRef;
        _this12._focusTrapFactory = _focusTrapFactory;
        _this12.bottomSheetConfig = bottomSheetConfig;
        /**
         * The state of the bottom sheet animations.
         */

        _this12._animationState = 'void';
        /**
         * Emits whenever the state of the animation changes.
         */

        _this12._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Element that was focused before the bottom sheet was opened.
         */

        _this12._elementFocusedBeforeOpened = null;
        _this12._document = document;
        _this12._breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this12._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));

          _this12._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));

          _this12._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
        });
        return _this12;
      }
      /**
       * Attach a component portal as content to this bottom sheet container.
       * @template T
       * @param {?} portal
       * @return {?}
       */


      _createClass(MatBottomSheetContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          this._validatePortalAttached();

          this._setPanelClass();

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a template portal as content to this bottom sheet container.
         * @template C
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          this._validatePortalAttached();

          this._setPanelClass();

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Begin animation of bottom sheet entrance into view.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter() {
          if (!this._destroyed) {
            this._animationState = 'visible';

            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Begin animation of the bottom sheet exiting from view.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit() {
          if (!this._destroyed) {
            this._animationState = 'hidden';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._breakpointSubscription.unsubscribe();

          this._destroyed = true;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'hidden') {
            this._restoreFocus();
          } else if (event.toState === 'visible') {
            this._trapFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * @private
         * @param {?} cssClass
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(cssClass, add) {
          /** @type {?} */
          var classList = this._elementRef.nativeElement.classList;
          add ? classList.add(cssClass) : classList.remove(cssClass);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePortalAttached",
        value: function _validatePortalAttached() {
          if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setPanelClass",
        value: function _setPanelClass() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var panelClass = this.bottomSheetConfig.panelClass;

          if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              return element.classList.add(cssClass);
            });
          } else if (panelClass) {
            element.classList.add(panelClass);
          }
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
          }

          if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          } else {
            /** @type {?} */
            var activeElement = this._document.activeElement; // Otherwise ensure that focus is on the container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the bottom sheet already, because it's possible that the
            // consumer turned off `autoFocus` in order to move focus themselves.

            if (activeElement !== element && !element.contains(activeElement)) {
              element.focus();
            }
          }
        }
        /**
         * Restores focus to the element that was focused before the bottom sheet was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Saves a reference to the element that was focused before the bottom sheet was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          var _this13 = this;

          this._elementFocusedBeforeOpened =
          /** @type {?} */
          this._document.activeElement; // The `focus` method isn't available during server-side rendering.

          if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this13._elementRef.nativeElement.focus();
            });
          }
        }
      }]);

      return MatBottomSheetContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"]);

    MatBottomSheetContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-bottom-sheet-container',
        template: "<ng-template cdkPortalOutlet></ng-template>",
        styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}@media (-ms-high-contrast:active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium,.mat-bottom-sheet-container-xlarge{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        animations: [matBottomSheetAnimations.bottomSheetState],
        host: {
          'class': 'mat-bottom-sheet-container',
          'tabindex': '-1',
          'role': 'dialog',
          'aria-modal': 'true',
          '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
          '[@state]': '_animationState',
          '(@state.start)': '_onAnimationStart($event)',
          '(@state.done)': '_onAnimationDone($event)'
        }
      }]
    }];
    /** @nocollapse */

    MatBottomSheetContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: MatBottomSheetConfig
      }];
    };

    MatBottomSheetContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], {
          static: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatBottomSheetModule = function MatBottomSheetModule() {
      _classCallCheck(this, MatBottomSheetModule);
    };

    MatBottomSheetModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"]],
        exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        declarations: [MatBottomSheetContainer],
        entryComponents: [MatBottomSheetContainer]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to a bottom sheet dispatched from the bottom sheet service.
     * @template T, R
     */

    var MatBottomSheetRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} containerInstance
       * @param {?} _overlayRef
       * @param {?=} _location
       */
      function MatBottomSheetRef(containerInstance, _overlayRef, // @breaking-change 8.0.0 `_location` parameter to be removed.
      _location) {
        var _this14 = this;

        _classCallCheck(this, MatBottomSheetRef);

        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the bottom sheet has been dismissed.
         */

        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Subject for notifying the user that the bottom sheet has opened and appeared.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose; // Emit when opening animation completes

        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'visible';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this14._afterOpened.next();

          _this14._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'hidden';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this14._closeFallbackTimeout);

          _overlayRef.dispose();
        });

        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this14._afterDismissed.next(_this14._result);

          _this14._afterDismissed.complete();
        });

        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"];
        }))).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this14.disableClose && (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(
          /** @type {?} */
          event))) {
            event.preventDefault();

            _this14.dismiss();
          }
        });
      }
      /**
       * Dismisses the bottom sheet.
       * @param {?=} result Data to be passed back to the bottom sheet opener.
       * @return {?}
       */


      _createClass(MatBottomSheetRef, [{
        key: "dismiss",
        value: function dismiss(result) {
          var _this15 = this;

          if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return event.phaseName === 'start';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has fired.
              _this15._closeFallbackTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this15._overlayRef.dispose();
              }, event.totalTime + 100);

              _this15._overlayRef.detachBackdrop();
            });

            this._result = result;
            this.containerInstance.exit();
          }
        }
        /**
         * Gets an observable that is notified when the bottom sheet is finished closing.
         * @return {?}
         */

      }, {
        key: "afterDismissed",
        value: function afterDismissed() {
          return this._afterDismissed.asObservable();
        }
        /**
         * Gets an observable that is notified when the bottom sheet has opened and appeared.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
      }]);

      return MatBottomSheetRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify default bottom sheet options.
     * @type {?}
     */


    var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-bottom-sheet-default-options');
    /**
     * Service to trigger Material Design bottom sheets.
     */

    var MatBottomSheet =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _parentBottomSheet
       * @param {?=} _location
       * @param {?=} _defaultOptions
       */
      function MatBottomSheet(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
        _classCallCheck(this, MatBottomSheet);

        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
      }
      /**
       * Reference to the currently opened bottom sheet.
       * @return {?}
       */


      _createClass(MatBottomSheet, [{
        key: "open",

        /**
         * @template T, D, R
         * @param {?} componentOrTemplateRef
         * @param {?=} config
         * @return {?}
         */
        value: function open(componentOrTemplateRef, config) {
          var _this16 = this;

          /** @type {?} */
          var _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
          /** @type {?} */


          var overlayRef = this._createOverlay(_config);
          /** @type {?} */


          var container = this._attachContainer(overlayRef, _config);
          /** @type {?} */


          var ref = new MatBottomSheetRef(container, overlayRef, this._location);

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: _config.data,
              bottomSheetRef: ref
            }));
          } else {
            /** @type {?} */
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            /** @type {?} */

            var contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
          } // When the bottom sheet is dismissed, clear the reference to it.


          ref.afterDismissed().subscribe(
          /**
          * @return {?}
          */
          function () {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (_this16._openedBottomSheetRef == ref) {
              _this16._openedBottomSheetRef = null;
            }
          });

          if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe(
            /**
            * @return {?}
            */
            function () {
              return ref.containerInstance.enter();
            });

            this._openedBottomSheetRef.dismiss();
          } else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
          }

          this._openedBottomSheetRef = ref;
          return ref;
        }
        /**
         * Dismisses the currently-visible bottom sheet.
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
          }
        }
        /**
         * Attaches the bottom sheet container component to the overlay.
         * @private
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_attachContainer",
        value: function _attachContainer(overlayRef, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatBottomSheetConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
          /** @type {?} */

          var containerRef = overlayRef.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Creates a new overlay and places it in the correct location.
         * @private
         * @param {?} config The user-specified bottom sheet config.
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayConfig"]({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
          });

          if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
          }

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an injector to be used inside of a bottom sheet component.
         * @private
         * @template T
         * @param {?} config Config that was used to create the bottom sheet.
         * @param {?} bottomSheetRef Reference to the bottom sheet.
         * @return {?}
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, bottomSheetRef) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injectionTokens = new WeakMap([[MatBottomSheetRef, bottomSheetRef], [MAT_BOTTOM_SHEET_DATA, config.data]]);

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], {
              value: config.direction,
              change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()
            });
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, injectionTokens);
        }
      }, {
        key: "_openedBottomSheetRef",
        get: function get() {
          /** @type {?} */
          var parent = this._parentBottomSheet;
          return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
          } else {
            this._bottomSheetRefAtThisLevel = value;
          }
        }
      }]);

      return MatBottomSheet;
    }();

    MatBottomSheet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: MatBottomSheetModule
      }]
    }];
    /** @nocollapse */

    MatBottomSheet.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: MatBottomSheet,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: MatBottomSheetConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    MatBottomSheet.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatBottomSheet_Factory() {
        return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
      },
      token: MatBottomSheet,
      providedIn: MatBottomSheetModule
    });
    /**
     * Applies default options to the bottom sheet config.
     * @param {?} defaults Object containing the default values to which to fall back.
     * @param {?=} config The configuration to which the defaults will be applied.
     * @return {?} The new configuration object with defaults applied.
     */

    function _applyConfigDefaults(defaults, config) {
      return Object.assign({}, defaults, config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=bottom-sheet.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/esm2015/chips.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/chips.js ***!
    \*********************************************************/

  /*! exports provided: MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS */

  /***/
  function node_modulesAngularMaterialEsm2015ChipsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
      return MatChipsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
      return MatChipListChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
      return MatChipList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
      return MatChipSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
      return MatChipAvatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
      return MatChipTrailingIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChip", function () {
      return MatChip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
      return MatChipRemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
      return MatChipInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
      return MAT_CHIPS_DEFAULT_OPTIONS;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
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
     * Event object emitted by MatChip when selected or deselected.
     */


    var MatChipSelectionChange =
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    function MatChipSelectionChange(source, selected) {
      var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, MatChipSelectionChange);

      this.source = source;
      this.selected = selected;
      this.isUserInput = isUserInput;
    }; // Boilerplate for applying mixins to MatChip.

    /**
     * \@docs-private
     */


    var MatChipBase =
    /**
     * @param {?} _elementRef
     */
    function MatChipBase(_elementRef) {
      _classCallCheck(this, MatChipBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatChipBase)), 'primary');
    /**
     * Dummy directive to add CSS class to chip avatar.
     * \@docs-private
     */


    var MatChipAvatar = function MatChipAvatar() {
      _classCallCheck(this, MatChipAvatar);
    };

    MatChipAvatar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'mat-chip-avatar, [matChipAvatar]',
        host: {
          'class': 'mat-chip-avatar'
        }
      }]
    }];
    /**
     * Dummy directive to add CSS class to chip trailing icon.
     * \@docs-private
     */

    var MatChipTrailingIcon = function MatChipTrailingIcon() {
      _classCallCheck(this, MatChipTrailingIcon);
    };

    MatChipTrailingIcon.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
        host: {
          'class': 'mat-chip-trailing-icon'
        }
      }]
    }];
    /**
     * Material design styled Chip component. Used inside the MatChipList component.
     */

    var MatChip =
    /*#__PURE__*/
    function (_MatChipMixinBase2) {
      _inherits(MatChip, _MatChipMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?=} animationMode
       * @param {?=} _changeDetectorRef
       */
      function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
      animationMode, _changeDetectorRef) {
        var _this17;

        _classCallCheck(this, MatChip);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(MatChip).call(this, _elementRef));
        _this17._elementRef = _elementRef;
        _this17._ngZone = _ngZone;
        _this17._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */

        _this17._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */

        _this17.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */

        _this17._chipListMultiple = false;
        _this17._selected = false;
        _this17._selectable = true;
        _this17._removable = true;
        /**
         * Emits when the chip is focused.
         */

        _this17._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the chip is blured.
         */

        _this17._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */

        _this17.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */

        _this17.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */

        _this17.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();

        _this17._addHostClassName();

        _this17._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["RippleRenderer"](_assertThisInitialized(_this17), _ngZone, _elementRef, platform);

        _this17._chipRipple.setupTriggerEvents(_elementRef);

        _this17.rippleConfig = globalRippleOptions || {};
        _this17._animationsDisabled = animationMode === 'NoopAnimations';
        return _this17;
      }
      /**
       * Whether ripples are disabled on interaction
       * \@docs-private
       * @return {?}
       */


      _createClass(MatChip, [{
        key: "_addHostClassName",

        /**
         * @return {?}
         */
        value: function _addHostClassName() {
          /** @type {?} */
          var basicChipAttrName = 'mat-basic-chip';
          /** @type {?} */

          var element =
          /** @type {?} */
          this._elementRef.nativeElement;

          if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
          } else {
            element.classList.add('mat-standard-chip');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed.emit({
            chip: this
          });

          this._chipRipple._removeTriggerEvents();
        }
        /**
         * Selects the chip.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Deselects the chip.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Select this chip and emit selected event
         * @return {?}
         */

      }, {
        key: "selectViaInteraction",
        value: function selectViaInteraction() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange(true);

            this._markForCheck();
          }
        }
        /**
         * Toggles the current selected state of this chip.
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "toggleSelected",
        value: function toggleSelected() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this._selected = !this.selected;

          this._dispatchSelectionChange(isUserInput);

          this._markForCheck();

          return this.selected;
        }
        /**
         * Allows for programmatic focusing of the chip.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();

            this._onFocus.next({
              chip: this
            });
          }

          this._hasFocus = true;
        }
        /**
         * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
         * BACKSPACE keys are pressed.
         *
         * Informs any listeners of the removal request. Does not remove the chip from the DOM.
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          if (this.removable) {
            this.removed.emit({
              chip: this
            });
          }
        }
        /**
         * Handles click events on the chip.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.disabled) {
            event.preventDefault();
          } else {
            event.stopPropagation();
          }
        }
        /**
         * Handle custom key presses.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (this.disabled) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"]:
              // If we are removable, remove the focused chip
              this.remove(); // Always prevent so page navigation does not occur

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"]:
              // If we are selectable, toggle the focused chip
              if (this.selectable) {
                this.toggleSelected(true);
              } // Always prevent space from scrolling the page since the list has focus


              event.preventDefault();
              break;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this18 = this;

          // When animations are enabled, Angular may end up removing the chip from the DOM a little
          // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
          // that moves focus not the next item. To work around the issue, we defer marking the chip
          // as not focused until the next time the zone stabilizes.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this18._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this18._hasFocus = false;

              _this18._onBlur.next({
                chip: _this18
              });
            });
          });
        }
        /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_dispatchSelectionChange",
        value: function _dispatchSelectionChange() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        }
        /**
         * Whether the chip is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

          if (coercedValue !== this._selected) {
            this._selected = coercedValue;

            this._dispatchSelectionChange();
          }
        }
        /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._value = value;
        }
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable && this.chipListSelectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */

      }, {
        key: "removable",
        get: function get() {
          return this._removable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */

      }, {
        key: "ariaSelected",
        get: function get() {
          // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
          // it adds noise to NVDA users where "not selected" will be read out for each chip.
          return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
        }
      }]);

      return MatChip;
    }(_MatChipMixinBase);

    MatChip.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
        inputs: ['color', 'disabled', 'disableRipple'],
        exportAs: 'matChip',
        host: {
          'class': 'mat-chip',
          '[attr.tabindex]': 'disabled ? null : -1',
          'role': 'option',
          '[class.mat-chip-selected]': 'selected',
          '[class.mat-chip-with-avatar]': 'avatar',
          '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
          '[class.mat-chip-disabled]': 'disabled',
          '[class._mat-animation-noopable]': '_animationsDisabled',
          '[attr.disabled]': 'disabled || null',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-selected]': 'ariaSelected',
          '(click)': '_handleClick($event)',
          '(keydown)': '_handleKeydown($event)',
          '(focus)': 'focus()',
          '(blur)': '_blur()'
        }
      }]
    }];
    /** @nocollapse */

    MatChip.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    MatChip.propDecorators = {
      avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatChipAvatar, {
          static: false
        }]
      }],
      trailingIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatChipTrailingIcon, {
          static: false
        }]
      }],
      removeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatChipRemove;
        }), {
          static: false
        }]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      removable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      removed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
     * available at https://material.io/icons/#ic_cancel.
     *
     * Example:
     *
     *     `<mat-chip>
     *       <mat-icon matChipRemove>cancel</mat-icon>
     *     </mat-chip>`
     *
     * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
     * styles to properly center the icon within the chip.
     */

    var MatChipRemove =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _parentChip
       */
      function MatChipRemove(_parentChip) {
        _classCallCheck(this, MatChipRemove);

        this._parentChip = _parentChip;
      }
      /**
       * Calls the parent chip's public `remove()` method if applicable.
       * @param {?} event
       * @return {?}
       */


      _createClass(MatChipRemove, [{
        key: "_handleClick",
        value: function _handleClick(event) {
          /** @type {?} */
          var parentChip = this._parentChip;

          if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
          } // We need to stop event propagation because otherwise the event will bubble up to the
          // form field and cause the `onContainerClick` method to be invoked. This method would then
          // reset the focused chip that has been focused after chip removal. Usually the parent
          // the parent click listener of the `MatChip` would prevent propagation, but it can happen
          // that the chip is being removed before the event bubbles up.


          event.stopPropagation();
        }
      }]);

      return MatChipRemove;
    }();

    MatChipRemove.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[matChipRemove]',
        host: {
          'class': 'mat-chip-remove mat-chip-trailing-icon',
          '(click)': '_handleClick($event)'
        }
      }]
    }];
    /** @nocollapse */

    MatChipRemove.ctorParameters = function () {
      return [{
        type: MatChip
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token to be used to override the default options for the chips module.
     * @type {?}
     */


    var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-chips-default-options');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatChipList.

    /**
     * \@docs-private
     */

    var MatChipListBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatChipListBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };
    /** @type {?} */


    var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * Change event object that is emitted when the chip list value has changed.
     */

    var MatChipListChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatChipListChange(source, value) {
      _classCallCheck(this, MatChipListChange);

      this.source = source;
      this.value = value;
    };
    /**
     * A material design chips component (named ChipList for its similarity to the List component).
     */


    var MatChipList =
    /*#__PURE__*/
    function (_MatChipListMixinBase2) {
      _inherits(MatChipList, _MatChipListMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} ngControl
       */
      function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this19;

        _classCallCheck(this, MatChipList);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(MatChipList).call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl));
        _this19._elementRef = _elementRef;
        _this19._changeDetectorRef = _changeDetectorRef;
        _this19._dir = _dir;
        _this19.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this19.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */

        _this19._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */

        _this19._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Uid of the chip list
         */

        _this19._uid = "mat-chip-list-".concat(nextUniqueId++);
        /**
         * Tab index for the chip list.
         */

        _this19._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */

        _this19._userTabIndex = null;
        /**
         * Function when touched
         */

        _this19._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Function when changed
         */


        _this19._onChange =
        /**
        * @return {?}
        */
        function () {};

        _this19._multiple = false;

        _this19._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };

        _this19._required = false;
        _this19._disabled = false;
        /**
         * Orientation of the chip list.
         */

        _this19.ariaOrientation = 'horizontal';
        _this19._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */

        _this19.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this19.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();

        if (_this19.ngControl) {
          _this19.ngControl.valueAccessor = _assertThisInitialized(_this19);
        }

        return _this19;
      }
      /**
       * The array of selected chips inside chip list.
       * @return {?}
       */


      _createClass(MatChipList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this20 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} dir
            * @return {?}
            */
            function (dir) {
              return _this20._keyManager.withHorizontalOrientation(dir);
            });
          }

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this20._allowFocusEscape();
          }); // When the list changes, re-subscribe


          this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this20.disabled) {
              // Since this happens after the content has been
              // checked, we need to defer it to the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this20._syncChipsState();
              });
            }

            _this20._resetChips(); // Reset chips selected/deselected status


            _this20._initializeSelection(); // Check to see if we need to update our tab index


            _this20._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


            _this20._updateFocusForDestroyedChips();

            _this20.stateChanges.next();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](this.multiple, undefined, false);
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this.stateChanges.complete();

          this._dropSubscriptions();
        }
        /**
         * Associates an HTML input element with this chip list.
         * @param {?} inputElement
         * @return {?}
         */

      }, {
        key: "registerInput",
        value: function registerInput(inputElement) {
          this._chipInput = inputElement;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.chips) {
            this._setSelectionByValue(value, false);
          }
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick(event) {
          if (!this._originatesFromChip(event)) {
            this.focus();
          }
        }
        /**
         * Focuses the first non-disabled chip in this chip list, or the associated input when there
         * are no eligible chips.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          if (this.disabled) {
            return;
          } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
          // Focus on first element if there's no chipInput inside chip-list


          if (this._chipInput && this._chipInput.focused) {// do nothing
          } else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();

            this.stateChanges.next();
          } else {
            this._focusInput(options);

            this.stateChanges.next();
          }
        }
        /**
         * Attempt to focus an input if we have one.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusInput",
        value: function _focusInput(options) {
          if (this._chipInput) {
            this._chipInput.focus(options);
          }
        }
        /**
         * Pass events to the keyboard manager. Available here for tests.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target; // If they are on an empty input and hit backspace, focus the last chip

          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();

            event.preventDefault();
          } else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["HOME"]) {
              this._keyManager.setFirstItemActive();

              event.preventDefault();
            } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["END"]) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else {
              this._keyManager.onKeydown(event);
            }

            this.stateChanges.next();
          }
        }
        /**
         * Check the tab index as you should not be allowed to focus an empty list.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateTabIndex",
        value: function _updateTabIndex() {
          // If we have 0 chips, we should not allow keyboard focus
          this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
        }
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateFocusForDestroyedChips",
        value: function _updateFocusForDestroyedChips() {
          // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
          if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
              /** @type {?} */
              var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

              this._keyManager.setActiveItem(newChipIndex);
            } else {
              this.focus();
            }
          }

          this._lastDestroyedChipIndex = null;
        }
        /**
         * Utility to ensure all indexes are valid.
         *
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of chips.
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(index) {
          return index >= 0 && index < this.chips.length;
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isInputEmpty",
        value: function _isInputEmpty(element) {
          if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            var input =
            /** @type {?} */
            element;
            return !input.value;
          }

          return false;
        }
        /**
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this21 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          this._clearSelection();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.deselect();
          });

          if (Array.isArray(value)) {
            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this21._selectValue(currentValue, isUserInput);
            });

            this._sortValues();
          } else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.


            if (correspondingChip) {
              if (isUserInput) {
                this._keyManager.setActiveItem(correspondingChip);
              }
            }
          }
        }
        /**
         * Finds and selects the chip based on its value.
         * @private
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?} Chip that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this22 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var correspondingChip = this.chips.find(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.value != null && _this22._compareWith(chip.value, value);
          });

          if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

            this._selectionModel.select(correspondingChip);
          }

          return correspondingChip;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_initializeSelection",
        value: function _initializeSelection() {
          var _this23 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            if (_this23.ngControl || _this23._value) {
              _this23._setSelectionByValue(_this23.ngControl ? _this23.ngControl.value : _this23._value, false);

              _this23.stateChanges.next();
            }
          });
        }
        /**
         * Deselects every chip in the list.
         * @private
         * @param {?=} skip Chip that should not be deselected.
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection(skip) {
          this._selectionModel.clear();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            if (chip !== skip) {
              chip.deselect();
            }
          });
          this.stateChanges.next();
        }
        /**
         * Sorts the model values, ensuring that they keep the same
         * order that they have in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this24 = this;

          if (this._multiple) {
            this._selectionModel.clear();

            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              if (chip.selected) {
                _this24._selectionModel.select(chip);
              }
            });
            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.value;
            });
          } else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.change.emit(new MatChipListChange(this, valueToEmit));
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * When blurred, mark the field as touched when focus moved outside the chip list.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this25 = this;

          if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
          }

          if (!this.disabled) {
            if (this._chipInput) {
              // If there's a chip input, we should check whether the focus moved to chip input.
              // If the focus is not moved to chip input, mark the field as touched. If the focus moved
              // to chip input, do nothing.
              // Timeout is needed to wait for the focus() event trigger on chip input.
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                if (!_this25.focused) {
                  _this25._markAsTouched();
                }
              });
            } else {
              // If there's no chip input, then mark the field as touched.
              this._markAsTouched();
            }
          }
        }
        /**
         * Mark the field as touched
         * @return {?}
         */

      }, {
        key: "_markAsTouched",
        value: function _markAsTouched() {
          this._onTouched();

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the list from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         * @return {?}
         */

      }, {
        key: "_allowFocusEscape",
        value: function _allowFocusEscape() {
          var _this26 = this;

          if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this26._tabIndex = _this26._userTabIndex || 0;

              _this26._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_resetChips",
        value: function _resetChips() {
          this._dropSubscriptions();

          this._listenToChipsFocus();

          this._listenToChipsSelection();

          this._listenToChipsRemoved();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_dropSubscriptions",
        value: function _dropSubscriptions() {
          if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();

            this._chipFocusSubscription = null;
          }

          if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();

            this._chipBlurSubscription = null;
          }

          if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();

            this._chipSelectionSubscription = null;
          }

          if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();

            this._chipRemoveSubscription = null;
          }
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsSelection",
        value: function _listenToChipsSelection() {
          var _this27 = this;

          this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.source.selected ? _this27._selectionModel.select(event.source) : _this27._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

            if (!_this27.multiple) {
              _this27.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                if (!_this27._selectionModel.isSelected(chip) && chip.selected) {
                  chip.deselect();
                }
              });
            }

            if (event.isUserInput) {
              _this27._propagateChanges();
            }
          });
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsFocus",
        value: function _listenToChipsFocus() {
          var _this28 = this;

          this._chipFocusSubscription = this.chipFocusChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chipIndex = _this28.chips.toArray().indexOf(event.chip);

            if (_this28._isValidIndex(chipIndex)) {
              _this28._keyManager.updateActiveItemIndex(chipIndex);
            }

            _this28.stateChanges.next();
          });
          this._chipBlurSubscription = this.chipBlurChanges.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._blur();

            _this28.stateChanges.next();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsRemoved",
        value: function _listenToChipsRemoved() {
          var _this29 = this;

          this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */

            var chipIndex = _this29.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.


            if (_this29._isValidIndex(chipIndex) && chip._hasFocus) {
              _this29._lastDestroyedChipIndex = chipIndex;
            }
          });
        }
        /**
         * Checks whether an event comes from inside a chip element.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_originatesFromChip",
        value: function _originatesFromChip(event) {
          /** @type {?} */
          var currentElement =
          /** @type {?} */
          event.target;

          while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
              return true;
            }

            currentElement = currentElement.parentElement;
          }

          return false;
        }
        /**
         * Checks whether any of the chips is focused.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasFocusedChip",
        value: function _hasFocusedChip() {
          return this.chips.some(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._hasFocus;
          });
        }
        /**
         * Syncs the list's state with the individual chips.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncChipsState",
        value: function _syncChipsState() {
          var _this30 = this;

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              chip.disabled = _this30._disabled;
              chip._chipListMultiple = _this30.multiple;
            });
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */

      }, {
        key: "role",
        get: function get() {
          return this.empty ? null : 'listbox';
        }
        /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.writeValue(value);
          this._value = value;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._chipInput ? this._chipInput.id : this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return !this.empty || this.focused;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.ngControl ? !!this.ngControl.disabled : this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this31 = this;

          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.chipListSelectable = _this31._selectable;
            });
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "tabIndex",
        set: function set(value) {
          this._userTabIndex = value;
          this._tabIndex = value;
        }
        /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */

      }, {
        key: "chipSelectionChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.selectionChange;
          })));
        }
        /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */

      }, {
        key: "chipFocusChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onFocus;
          })));
        }
        /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */

      }, {
        key: "chipBlurChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onBlur;
          })));
        }
        /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */

      }, {
        key: "chipRemoveChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.destroyed;
          })));
        }
      }]);

      return MatChipList;
    }(_MatChipListMixinBase);

    MatChipList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-chip-list',
        template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
        exportAs: 'matChipList',
        host: {
          '[attr.tabindex]': 'disabled ? null : _tabIndex',
          '[attr.aria-describedby]': '_ariaDescribedby || null',
          '[attr.aria-required]': 'required.toString()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-invalid]': 'errorState',
          '[attr.aria-multiselectable]': 'multiple',
          '[attr.role]': 'role',
          '[class.mat-chip-list-disabled]': 'disabled',
          '[class.mat-chip-list-invalid]': 'errorState',
          '[class.mat-chip-list-required]': 'required',
          '[attr.aria-orientation]': 'ariaOrientation',
          'class': 'mat-chip-list',
          '(focus)': 'focus()',
          '(blur)': '_blur()',
          '(keydown)': '_keydown($event)',
          '[id]': '_uid'
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldControl"],
          useExisting: MatChipList
        }],
        styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatChipList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
        }]
      }];
    };

    MatChipList.propDecorators = {
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ariaOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-orientation']
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      chips: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatChip, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids.

    /** @type {?} */

    var nextUniqueId$1 = 0;
    /**
     * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
     * May be placed inside or outside of an `<mat-chip-list>`.
     */

    var MatChipInput =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _defaultOptions
       */
      function MatChipInput(_elementRef, _defaultOptions) {
        _classCallCheck(this, MatChipInput);

        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */

        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */

        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */

        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */

        this.placeholder = '';
        /**
         * Unique id for the input.
         */

        this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
        this._disabled = false;
        this._inputElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Register input for chip list
       * @param {?} value
       * @return {?}
       */


      _createClass(MatChipInput, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._chipList.stateChanges.next();
        }
        /**
         * Utility method to make host definition/tests more clear.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          // Allow the user's focus to escape when they're tabbing forward. Note that we don't
          // want to do this when going backwards, because focus should go back to the first chip.
          if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
          }

          this._emitChipEnd(event);
        }
        /**
         * Checks to see if the blur should emit the (chipEnd) event.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          if (this.addOnBlur) {
            this._emitChipEnd();
          }

          this.focused = false; // Blur the chip list if it is not focused

          if (!this._chipList.focused) {
            this._chipList._blur();
          }

          this._chipList.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_focus",
        value: function _focus() {
          this.focused = true;

          this._chipList.stateChanges.next();
        }
        /**
         * Checks to see if the (chipEnd) event needs to be emitted.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_emitChipEnd",
        value: function _emitChipEnd(event) {
          if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
          }

          if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({
              input: this._inputElement,
              value: this._inputElement.value
            });

            if (event) {
              event.preventDefault();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {
          // Let chip list know whenever the value changes.
          this._chipList.stateChanges.next();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._inputElement.focus(options);
        }
        /**
         * Checks whether a keycode is one of the configured separators.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_isSeparatorKey",
        value: function _isSeparatorKey(event) {
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(event)) {
            return false;
          }
          /** @type {?} */


          var separators = this.separatorKeyCodes;
          /** @type {?} */

          var keyCode = event.keyCode;
          return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
        }
      }, {
        key: "chipList",
        set: function set(value) {
          if (value) {
            this._chipList = value;

            this._chipList.registerInput(this);
          }
        }
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */

      }, {
        key: "addOnBlur",
        get: function get() {
          return this._addOnBlur;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this._chipList && this._chipList.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is empty.
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return !this._inputElement.value;
        }
      }]);

      return MatChipInput;
    }();

    MatChipInput.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'input[matChipInputFor]',
        exportAs: 'matChipInput, matChipInputFor',
        host: {
          'class': 'mat-chip-input mat-input-element',
          '(keydown)': '_keydown($event)',
          '(blur)': '_blur()',
          '(focus)': '_focus()',
          '(input)': '_onInput()',
          '[id]': 'id',
          '[attr.disabled]': 'disabled || null',
          '[attr.placeholder]': 'placeholder || null',
          '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null'
        }
      }]
    }];
    /** @nocollapse */

    MatChipInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_CHIPS_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatChipInput.propDecorators = {
      chipList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matChipInputFor']
      }],
      addOnBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matChipInputAddOnBlur']
      }],
      separatorKeyCodes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matChipInputSeparatorKeyCodes']
      }],
      chipEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
        args: ['matChipInputTokenEnd']
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
    var ɵ0 = {
      separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"]]
    };

    var MatChipsModule = function MatChipsModule() {
      _classCallCheck(this, MatChipsModule);
    };

    MatChipsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        exports: CHIP_DECLARATIONS,
        declarations: CHIP_DECLARATIONS,
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue:
          /** @type {?} */
          ɵ0
        }]
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
    //# sourceMappingURL=chips.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/material.js":
  /*!************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/material.js ***!
    \************************************************************/

  /*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin, MatBadgeModule, MatBadge, MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef, MatButtonModule, MatButton, MatAnchor, MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator, MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS, ɵa1, VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, MatMultiYearView, yearsPerPage, yearsPerRow, MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations, MatDivider, MatDividerModule, MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations, MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations, ɵa11, MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER, MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR, MatListModule, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatListOption, MatSelectionList, ɵa22, ɵb22, ɵc22, MatMenu, MAT_MENU_DEFAULT_OPTIONS, _MatMenu, _MatMenuBase, MatMenuItem, MatMenuTrigger, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_PANEL, _MatMenuDirectivesModule, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER, MatProgressBarModule, MAT_PROGRESS_BAR_LOCATION_FACTORY, MAT_PROGRESS_BAR_LOCATION, MatProgressBar, MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule, MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroup, MatRadioButton, MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent, MatSidenavModule, throwMatDuplicatedDrawerError, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations, _MatSlideToggleRequiredValidatorModule, MatSlideToggleModule, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggle, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MatSlideToggleRequiredValidator, MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations, MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations, MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon, MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource, MatTextColumn, ɵa24, ɵb24, MatTabsModule, MatInkBar, _MAT_INK_BAR_POSITIONER, MatTabBody, _MatTabBodyBase, MatTabBodyPortal, MatTabHeader, _MatTabHeaderBase, MatTabLabelWrapper, MatTab, MatTabLabel, MatTabNav, MatTabLink, _MatTabNavBase, _MatTabLinkBase, MatTabContent, MatTabChangeEvent, MAT_TABS_CONFIG, _MatTabGroupBase, MatTabGroup, matTabsAnimations, MatToolbarModule, throwToolbarMixedModesError, MatToolbarRow, MatToolbar, MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations, MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */

  /***/
  function node_modulesAngularMaterialEsm2015MaterialJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteSelectedEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocomplete"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["getMatAutocompleteMissingPanelError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_OPTION_HEIGHT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_PANEL_HEIGHT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteTrigger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteOrigin"];
    });
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
      return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
      return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadge"];
    });
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetContainer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["matBottomSheetAnimations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function () {
      return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"];
    });
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
      return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButton", function () {
      return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
      return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"];
    });
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroupMultiple"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
      return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"];
    });
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSmImage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardMdImage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardLgImage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardXlImage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCard", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitleGroup"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
      return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"];
    });
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["TransitionCheckState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCheckbox", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CLICK_ACTION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["_MatCheckboxRequiredValidatorModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_REQUIRED_VALIDATOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function () {
      return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxRequiredValidator"];
    });
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipListChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipSelectionChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipAvatar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipTrailingIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChip", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipRemove"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipInput"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
      return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MAT_CHIPS_DEFAULT_OPTIONS"];
    });
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵa1", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ɵa1"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationCurves"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationDurations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisabled"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinInitialized"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_NATIVE_DATE_FORMATS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_HAMMER_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["GestureConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["setLines"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineSetter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_countGroupLabelsBeforeOption"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_getOptionScrollPosition"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionSelectionChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptgroup"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RippleState", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["defaultRippleAnimationConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRenderer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JAN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["FEB"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["APR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AUG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["SEP"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["OCT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NOV"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DEC"];
    });
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMultiYearView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerPage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarCell"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarBody"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["matDatepickerAnimations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALIDATORS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInputEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerIntl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggleIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMonthView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
      return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatYearView"];
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["throwMatDialogContentAlreadyAttachedError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContainer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
      return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["matDialogAnimations"];
    });
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
      return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
      return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"];
    });
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelActionRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["EXPANSION_PANEL_ANIMATION_TIMING"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
      return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["matExpansionAnimations"];
    });
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldPlaceholderConflictError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldDuplicatedHintError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldMissingControlError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["matFormFieldAnimations"];
    });
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵa11", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["ɵa11"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileText"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridAvatarCssMatStyler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileHeaderCssMatStyler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileFooterCssMatStyler"];
    });
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNameNotFoundError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNoHttpProviderError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeUrlError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeLiteralError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
      return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER"];
    });
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
      return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatInput", function () {
      return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
      return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["getMatInputUnsupportedTypeError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
      return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
      return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MAT_INPUT_VALUE_ACCESSOR"];
    });
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatNavList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatList", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListAvatarCssMatStyler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListIconCssMatStyler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListSubheaderCssMatStyler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListItem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECTION_LIST_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionListChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListOption"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
      return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionList"];
    });
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵa22", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵa22"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵb22", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵb22"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵc22", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵc22"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_PANEL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuDirectivesModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["matMenuAnimations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["fadeInItems"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["transformMenu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
      return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuContent"];
    });
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["PageEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginator"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorIntl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
      return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER"];
    });
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
      return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
      return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
      return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
      return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"];
    });
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinner"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"];
    });
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRadioModule", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_DEFAULT_OPTIONS_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRadioChange", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioGroup"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRadioButton", function () {
      return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioButton"];
    });
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_MAX_HEIGHT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_PADDING_X"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_INDENT_PADDING_X"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_ITEM_HEIGHT_EM"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_MULTIPLE_PANEL_PADDING_X"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_VIEWPORT_PADDING"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectTrigger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["matSelectAnimations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "transformPanel", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["transformPanel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeInContent", function () {
      return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["fadeInContent"];
    });
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["throwMatDuplicatedDrawerError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDrawer", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContainer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSidenav", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenav"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContainer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function () {
      return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["matDrawerAnimations"];
    });
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["_MatSlideToggleRequiredValidatorModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
      return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleRequiredValidator"];
    });
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MAT_SLIDER_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSlider"];
    });
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBar", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarContainer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DATA"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarRef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["SimpleSnackBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function () {
      return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["matSnackBarAnimations"];
    });
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeaderIntl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSort"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["matSortAnimations"];
    });
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepLabel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStep"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepper"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatHorizontalStepper"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatVerticalStepper"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperNext"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperPrevious"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIntl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["matStepperAnimations"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIcon"];
    });
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCellDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCellDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCellDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatColumnDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCell"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCell"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatCell", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCell"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTable", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRowDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRowDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRowDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatRow", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableDataSource"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
      return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTextColumn"];
    });
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵa24", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["ɵa24"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵb24", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["ɵb24"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatInkBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MAT_INK_BAR_POSITIONER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBody"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabBodyBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBodyPortal"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabHeaderBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabelWrapper"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTab", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTab"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabNav"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLink"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabNavBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabLinkBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabChangeEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MAT_TABS_CONFIG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabGroupBase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabGroup"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
      return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["matTabsAnimations"];
    });
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
      return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
      return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["throwToolbarMixedModesError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
      return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
      return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbar"];
    });
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["getMatTooltipInvalidPositionError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["SCROLL_THROTTLE_MS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TOOLTIP_PANEL_CLASS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltip"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TooltipComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
      return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["matTooltipAnimations"];
    });
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNode", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNode"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeDef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatNestedTreeNode"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodePadding"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTree", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTree"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeModule", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeToggle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeOutlet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlattener"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlatDataSource"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function () {
      return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNestedDataSource"];
    });
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=material.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/esm2015/tree.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/tree.js ***!
    \********************************************************/

  /*! exports provided: MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */

  /***/
  function node_modulesAngularMaterialEsm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNode", function () {
      return MatTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function () {
      return MatTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function () {
      return MatNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function () {
      return MatTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTree", function () {
      return MatTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeModule", function () {
      return MatTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function () {
      return MatTreeNodeToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function () {
      return MatTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function () {
      return MatTreeFlattener;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function () {
      return MatTreeFlatDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function () {
      return MatTreeNestedDataSource;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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

    /** @type {?} */


    var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
    /**
     * Wrapper for the CdkTree node with Material design styles.
     * @template T
     */


    var MatTreeNode =
    /*#__PURE__*/
    function (_MatTreeNodeMixinBase2) {
      _inherits(MatTreeNode, _MatTreeNodeMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} tabIndex
       */
      function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this32;

        _classCallCheck(this, MatTreeNode);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNode).call(this, _elementRef, _tree));
        _this32._elementRef = _elementRef;
        _this32._tree = _tree;
        _this32.role = 'treeitem';
        _this32.tabIndex = Number(tabIndex) || 0;
        return _this32;
      }

      return MatTreeNode;
    }(_MatTreeNodeMixinBase);

    MatTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-tree-node',
        exportAs: 'matTreeNode',
        inputs: ['disabled', 'tabIndex'],
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'mat-tree-node'
        },
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
          useExisting: MatTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    MatTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * Wrapper for the CdkTree node definition with Material design styles.
     * @template T
     */

    var MatTreeNodeDef =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE) {
      _inherits(MatTreeNodeDef, _angular_cdk_tree__WE);

      function MatTreeNodeDef() {
        _classCallCheck(this, MatTreeNodeDef);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodeDef).apply(this, arguments));
      }

      return MatTreeNodeDef;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"]);

    MatTreeNodeDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeDef]',
        inputs: ['when: matTreeNodeDefWhen'],
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
          useExisting: MatTreeNodeDef
        }]
      }]
    }];
    MatTreeNodeDef.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNode']
      }]
    };
    /**
     * Wrapper for the CdkTree nested node with Material design styles.
     * @template T
     */

    var MatNestedTreeNode =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE2) {
      _inherits(MatNestedTreeNode, _angular_cdk_tree__WE2);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       * @param {?} tabIndex
       */
      function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this33;

        _classCallCheck(this, MatNestedTreeNode);

        _this33 = _possibleConstructorReturn(this, _getPrototypeOf(MatNestedTreeNode).call(this, _elementRef, _tree, _differs));
        _this33._elementRef = _elementRef;
        _this33._tree = _tree;
        _this33._differs = _differs;
        _this33._disabled = false;
        _this33.tabIndex = Number(tabIndex) || 0;
        return _this33;
      }
      /**
       * Whether the node is disabled.
       * @return {?}
       */


      _createClass(MatNestedTreeNode, [{
        key: "ngAfterContentInit",
        // This is a workaround for https://github.com/angular/angular/issues/23091
        // In aot mode, the lifecycle hooks from parent class are not called.
        // TODO(tinayuangao): Remove when the angular issue #23091 is fixed

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Tabindex for the node.
         * @return {?}
         */

      }, {
        key: "tabIndex",
        get: function get() {
          return this.disabled ? -1 : this._tabIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // If the specified tabIndex value is null or undefined, fall back to the default value.
          this._tabIndex = value != null ? value : 0;
        }
      }]);

      return MatNestedTreeNode;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"]);

    MatNestedTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-nested-tree-node',
        exportAs: 'matNestedTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.role]': 'role',
          'class': 'mat-nested-tree-node'
        },
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
          useExisting: MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
          useExisting: MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
          useExisting: MatNestedTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    MatNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatNestedTreeNode.propDecorators = {
      node: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matNestedTreeNode']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree padding with Material design styles.
     * @template T
     */

    var MatTreeNodePadding =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE3) {
      _inherits(MatTreeNodePadding, _angular_cdk_tree__WE3);

      function MatTreeNodePadding() {
        _classCallCheck(this, MatTreeNodePadding);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodePadding).apply(this, arguments));
      }

      return MatTreeNodePadding;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"]);

    MatTreeNodePadding.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodePadding]',
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
          useExisting: MatTreeNodePadding
        }]
      }]
    }];
    MatTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var MatTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function MatTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, MatTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    MatTreeNodeOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeOutlet]',
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
          useExisting: MatTreeNodeOutlet
        }]
      }]
    }];
    /** @nocollapse */

    MatTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var MatTree =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE4) {
      _inherits(MatTree, _angular_cdk_tree__WE4);

      function MatTree() {
        _classCallCheck(this, MatTree);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTree).apply(this, arguments));
      }

      return MatTree;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]);

    MatTree.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-tree',
        exportAs: 'matTree',
        template: "<ng-container matTreeNodeOutlet></ng-container>",
        host: {
          'class': 'mat-tree',
          'role': 'tree'
        },
        styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // See note on CdkTree for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
          useExisting: MatTree
        }]
      }]
    }];
    MatTree.propDecorators = {
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [MatTreeNodeOutlet, {
          static: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree's toggle with Material design styles.
     * @template T
     */

    var MatTreeNodeToggle =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE5) {
      _inherits(MatTreeNodeToggle, _angular_cdk_tree__WE5);

      function MatTreeNodeToggle() {
        var _this34;

        _classCallCheck(this, MatTreeNodeToggle);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNodeToggle).apply(this, arguments));
        _this34.recursive = false;
        return _this34;
      }

      return MatTreeNodeToggle;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"]);

    MatTreeNodeToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeToggle]',
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
          useExisting: MatTreeNodeToggle
        }]
      }]
    }];
    MatTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodeToggleRecursive']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

    var MatTreeModule = function MatTreeModule() {
      _classCallCheck(this, MatTreeModule);
    };

    MatTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        exports: MAT_TREE_DIRECTIVES,
        declarations: MAT_TREE_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T` to flattened nodes of type `F`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F` with additional information.
     * @template T, F
     */

    var MatTreeFlattener =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} transformFunction
       * @param {?} getLevel
       * @param {?} isExpandable
       * @param {?} getChildren
       */
      function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
        _classCallCheck(this, MatTreeFlattener);

        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
      }
      /**
       * @param {?} node
       * @param {?} level
       * @param {?} resultNodes
       * @param {?} parentMap
       * @return {?}
       */


      _createClass(MatTreeFlattener, [{
        key: "_flattenNode",
        value: function _flattenNode(node, level, resultNodes, parentMap) {
          var _this35 = this;

          /** @type {?} */
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);

          if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);

            if (childrenNodes) {
              if (Array.isArray(childrenNodes)) {
                this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
              } else {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
                /**
                * @param {?} children
                * @return {?}
                */
                function (children) {
                  _this35._flattenChildren(children, level, resultNodes, parentMap);
                });
              }
            }
          }

          return resultNodes;
        }
        /**
         * @param {?} children
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenChildren",
        value: function _flattenChildren(children, level, resultNodes, parentMap) {
          var _this36 = this;

          children.forEach(
          /**
          * @param {?} child
          * @param {?} index
          * @return {?}
          */
          function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);

            _this36._flattenNode(child, level + 1, resultNodes, childParentMap);
          });
        }
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         * @param {?} structuredData
         * @return {?}
         */

      }, {
        key: "flattenNodes",
        value: function flattenNodes(structuredData) {
          var _this37 = this;

          /** @type {?} */
          var resultNodes = [];
          structuredData.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return _this37._flattenNode(node, 0, resultNodes, []);
          });
          return resultNodes;
        }
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         * @param {?} nodes
         * @param {?} treeControl
         * @return {?}
         */

      }, {
        key: "expandFlattenedNodes",
        value: function expandFlattenedNodes(nodes, treeControl) {
          var _this38 = this;

          /** @type {?} */
          var results = [];
          /** @type {?} */

          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            /** @type {?} */
            var expand = true;

            for (var i = 0; i <= _this38.getLevel(node); i++) {
              expand = expand && currentExpand[i];
            }

            if (expand) {
              results.push(node);
            }

            if (_this38.isExpandable(node)) {
              currentExpand[_this38.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
          });
          return results;
        }
      }]);

      return MatTreeFlattener;
    }();
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `MatTree`.
     * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
     * to type `F` for `MatTree` to consume.
     * @template T, F
     */


    var MatTreeFlatDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti) {
      _inherits(MatTreeFlatDataSource, _angular_cdk_collecti);

      /**
       * @param {?} _treeControl
       * @param {?} _treeFlattener
       * @param {?=} initialData
       */
      function MatTreeFlatDataSource(_treeControl, _treeFlattener) {
        var _this39;

        var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, MatTreeFlatDataSource);

        _this39 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeFlatDataSource).call(this));
        _this39._treeControl = _treeControl;
        _this39._treeFlattener = _treeFlattener;
        _this39._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this39._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this39._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](initialData);
        return _this39;
      }
      /**
       * @return {?}
       */


      _createClass(MatTreeFlatDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this40 = this;

          /** @type {?} */
          var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.onChange, this._flattenedData];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(
          /**
          * @return {?}
          */
          function () {
            _this40._expandedData.next(_this40._treeFlattener.expandFlattenedNodes(_this40._flattenedData.value, _this40._treeControl));

            return _this40._expandedData.value;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);

          this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

          this._treeControl.dataNodes = this._flattenedData.value;
        }
      }]);

      return MatTreeFlatDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Data source for nested tree.
     *
     * The data source for nested tree doesn't have to consider node flattener, or the way to expand
     * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
     * @template T
     */


    var MatTreeNestedDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti2) {
      _inherits(MatTreeNestedDataSource, _angular_cdk_collecti2);

      function MatTreeNestedDataSource() {
        var _this41;

        _classCallCheck(this, MatTreeNestedDataSource);

        _this41 = _possibleConstructorReturn(this, _getPrototypeOf(MatTreeNestedDataSource).apply(this, arguments));
        _this41._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        return _this41;
      }
      /**
       * Data for the nested tree
       * @return {?}
       */


      _createClass(MatTreeNestedDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this42 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this42.data;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);
        }
      }]);

      return MatTreeNestedDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=tree.js.map

    /***/

  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-more-horiz.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-more-horiz.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMoreHorizJs(module, exports) {
    var data = {
      "body": "<path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports.default = data;
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout-content.directive.ts":
  /*!**************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: PageLayoutContentDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function () {
      return PageLayoutContentDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutContentDirective = function PageLayoutContentDirective() {
      _classCallCheck(this, PageLayoutContentDirective);
    };

    PageLayoutContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexPageLayoutContent],vex-page-layout-content',
      host: {
        class: 'vex-page-layout-content'
      }
    })], PageLayoutContentDirective);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout-header.directive.ts":
  /*!*************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
    \*************************************************************************/

  /*! exports provided: PageLayoutHeaderDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function () {
      return PageLayoutHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutHeaderDirective = function PageLayoutHeaderDirective() {
      _classCallCheck(this, PageLayoutHeaderDirective);
    };

    PageLayoutHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexPageLayoutHeader],vex-page-layout-header',
      host: {
        class: 'vex-page-layout-header'
      }
    })], PageLayoutHeaderDirective);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.component.scss":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsPageLayoutPageLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: #5c77ff;\n  color: #FFF;\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: #FFF;\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: #FFF;\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvRDpcXERvY3VtZW50c1xcUHJvamVjdHNcXHZpbmN1bGFjaW9uLmdpdGh1Yi5pby9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHBhZ2UtbGF5b3V0XFxwYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQ0NGOztBREVBOztFQUVFLHlDQUFBO0FDQ0Y7O0FERUE7O0VBRUUsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yzc3ZmY7XG4gIGNvbG9yOiAjRkZGO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiAjRkZGO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iLCIudmV4LXBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtc2ltcGxlIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+ICogPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSxcbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6ICNGRkY7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageLayoutComponent */

  /***/
  function srcVexComponentsPageLayoutPageLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function () {
      return PageLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLayoutComponent =
    /*#__PURE__*/
    function () {
      function PageLayoutComponent() {
        _classCallCheck(this, PageLayoutComponent);

        this.mode = 'simple';
      }

      _createClass(PageLayoutComponent, [{
        key: "isCard",
        get: function get() {
          return this.mode === 'card';
        }
      }, {
        key: "isSimple",
        get: function get() {
          return this.mode === 'simple';
        }
      }]);

      return PageLayoutComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageLayoutComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-card')], PageLayoutComponent.prototype, "isCard", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-simple')], PageLayoutComponent.prototype, "isSimple", null);
    PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-page-layout',
      template: '<ng-content></ng-content>',
      host: {
        class: 'vex-page-layout'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-layout.component.scss */
      "./src/@vex/components/page-layout/page-layout.component.scss")).default]
    })], PageLayoutComponent);
    /***/
  },

  /***/
  "./src/@vex/components/page-layout/page-layout.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
    \***************************************************************/

  /*! exports provided: PageLayoutModule */

  /***/
  function srcVexComponentsPageLayoutPageLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function () {
      return PageLayoutModule;
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


    var _page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-header.directive */
    "./src/@vex/components/page-layout/page-layout-header.directive.ts");
    /* harmony import */


    var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");

    var PageLayoutModule = function PageLayoutModule() {
      _classCallCheck(this, PageLayoutModule);
    };

    PageLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]],
      exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]]
    })], PageLayoutModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-apps-persona-persona-module~pages-apps-profile-profile-module~pages-dashboards-dashboa~bd660006-es5.js.map