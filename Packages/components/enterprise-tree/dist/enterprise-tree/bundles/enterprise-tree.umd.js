(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/internal/operators/map'), require('@angular/material'), require('@angular/common'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('enterprise-tree', ['exports', 'rxjs', 'rxjs/internal/operators/map', '@angular/material', '@angular/common', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/forms', '@angular/core'], factory) :
    (factory((global['enterprise-tree'] = {}),global.rxjs,global.rxjs['internal/operators/map'],global.ng.material,global.ng.common,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.forms,global.ng.core));
}(this, (function (exports,rxjs,map,material,common,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,forms,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EnterpriseTreeService = /** @class */ (function () {
        function EnterpriseTreeService() {
        }
        EnterpriseTreeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        EnterpriseTreeService.ctorParameters = function () { return []; };
        /** @nocollapse */ EnterpriseTreeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseTreeService_Factory() { return new EnterpriseTreeService(); }, token: EnterpriseTreeService, providedIn: "root" });
        return EnterpriseTreeService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Flat node with expandable and level information
     */
    var /**
     * Flat node with expandable and level information
     */ DynamicFlatNode = /** @class */ (function () {
        function DynamicFlatNode(item, level, resultObject, expandable, isLoading, code, children) {
            this.item = item;
            this.level = level;
            this.resultObject = resultObject;
            this.expandable = expandable;
            this.isLoading = isLoading;
            this.code = code;
            this.children = children;
        }
        return DynamicFlatNode;
    }());
    /**
     * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
     * the descendants data from the database.
     */
    var DynamicDatabase = /** @class */ (function () {
        function DynamicDatabase() {
            this.dataChange = new rxjs.BehaviorSubject([]);
            this.dataMap = new Map();
            this.nodeLevelMethodConfigurations = new Map();
            this.nodePropertyNames = new Map();
            this.currentLeafNodeNames = new Array();
            this.filteredMode = false;
            this.pagingMode = true;
            this.rootLevelNodes = [];
            this.currentSelectedNode = new DynamicFlatNode();
            this.currentSelectedNodeSource = new rxjs.BehaviorSubject(this.currentSelectedNode);
            this.currentSelectedNodeValue = this.currentSelectedNodeSource.asObservable();
            this.currentSelectedLeafNodeSource = new rxjs.BehaviorSubject(this.currentLeafNodeNames);
            this.currentSelectedLeafNodeValue = this.currentSelectedLeafNodeSource.asObservable();
        }
        Object.defineProperty(DynamicDatabase.prototype, "data", {
            get: /**
             * @return {?}
             */ function () { return this.dataChange.value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "getCurrentSelectedNode", {
            get: /**
             * @return {?}
             */ function () {
                return this.currentSelectedNode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "setCurrentSelectedNode", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.currentSelectedNode = value;
                this.currentSelectedNodeSource.next(this.currentSelectedNode);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "getRootLevelNodes", {
            get: /**
             * @return {?}
             */ function () {
                return this.rootLevelNodes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "setRootLevelNodes", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.rootLevelNodes = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "getCurrentSelectedLeafNode", {
            get: /**
             * @return {?}
             */ function () {
                return this.currentLeafNodeNames;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDatabase.prototype, "setCurrentSelectedLeafNode", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.currentLeafNodeNames = value;
                this.currentSelectedLeafNodeSource.next(this.currentLeafNodeNames);
            },
            enumerable: true,
            configurable: true
        });
        /** Initialize data for root level nodes */
        /**
         * Initialize data for root level nodes
         * @return {?}
         */
        DynamicDatabase.prototype.initialData = /**
         * Initialize data for root level nodes
         * @return {?}
         */
            function () {
                var _this = this;
                return this.rootLevelNodes.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) { return new DynamicFlatNode(result[_this.rootLevelName], 0, result, true); }));
            };
        /**
         * @param {?} node
         * @return {?}
         */
        DynamicDatabase.prototype.getChildren = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                return this.dataMap.get(node);
            };
        /**
         * @param {?} node
         * @return {?}
         */
        DynamicDatabase.prototype.isExpandable = /**
         * @param {?} node
         * @return {?}
         */
            function (node) {
                return this.dataMap.has(node);
            };
        DynamicDatabase.decorators = [
            { type: i0.Injectable }
        ];
        return DynamicDatabase;
    }());
    /**
     * File database, it can build a tree structured Json object from string.
     * Each node in Json object represents a file or a directory. For a file, it has filename and type.
     * For a directory, it has filename and children (a list of files or directories).
     * The input will be a json object string, and the output is a list of `FileNode` with nested
     * structure.
     */
    var DynamicDataSource = /** @class */ (function () {
        function DynamicDataSource(treeControl, database, changeDetectorRef) {
            this.treeControl = treeControl;
            this.database = database;
            this.changeDetectorRef = changeDetectorRef;
            this.dataChange = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(DynamicDataSource.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this.dataChange.value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.treeControl.dataNodes = value;
                this.dataChange.next(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDataSource.prototype, "setActionDispatcher", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.actionDispatcher = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicDataSource.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                throw new Error("Method not implemented.");
            };
        /**
         * @return {?}
         */
        DynamicDataSource.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.changeDetectorRef.detach();
            };
        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        DynamicDataSource.prototype.connect = /**
         * @param {?} collectionViewer
         * @return {?}
         */
            function (collectionViewer) {
                var _this = this;
                ( /** @type {?} */(this.treeControl.expansionModel.onChange)).subscribe(( /**
                 * @param {?} change
                 * @return {?}
                 */function (change) {
                    if ((( /** @type {?} */(change))).added ||
                        (( /** @type {?} */(change))).removed) {
                        _this.handleTreeControl(( /** @type {?} */(change)));
                    }
                }));
                return rxjs.merge(collectionViewer.viewChange, this.dataChange).pipe(map.map(( /**
                 * @return {?}
                 */function () { return _this.data; })));
            };
        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        DynamicDataSource.prototype.disconnect = /**
         * @param {?} collectionViewer
         * @return {?}
         */
            function (collectionViewer) {
                this.dataChange.complete();
            };
        /** Handle expand/collapse behaviors */
        /**
         * Handle expand/collapse behaviors
         * @param {?} change
         * @return {?}
         */
        DynamicDataSource.prototype.handleTreeControl = /**
         * Handle expand/collapse behaviors
         * @param {?} change
         * @return {?}
         */
            function (change) {
                var _this = this;
                if (change.added) {
                    change.added.forEach(( /**
                     * @param {?} node
                     * @return {?}
                     */function (node) { return _this.toggleNode(node, true); }));
                }
                if (change.removed) {
                    change.removed.slice().reverse().forEach(( /**
                     * @param {?} node
                     * @return {?}
                     */function (node) { return _this.toggleNode(node, false); }));
                }
            };
        /**
         * Toggle the node for the selected node, and make server call to get it's children.
         */
        /**
         * Toggle the node for the selected node, and make server call to get it's children.
         * @param {?} node
         * @param {?} expand
         * @return {?}
         */
        DynamicDataSource.prototype.toggleNode = /**
         * Toggle the node for the selected node, and make server call to get it's children.
         * @param {?} node
         * @param {?} expand
         * @return {?}
         */
            function (node, expand) {
                var _this = this;
                var e_1, _a;
                /** @type {?} */
                var currentPropertyName;
                this.database.filteredMode = false;
                if (this.database.filteredMode === false) {
                    this.database.setCurrentSelectedNode = node;
                    try {
                        for (var _b = __values(this.database.nodeLevelMethodConfigurations), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), level = _d[0], token = _d[1];
                            if (level === node.level) {
                                /** Dispatch action for leaf node. */
                                if (level === this.database.nodeLevelMethodConfigurations.size - 1) {
                                    this.actionDispatcher.dispatchAction(token, node.resultObject).then(( /**
                                     * @param {?} result
                                     * @return {?}
                                     */function (result) {
                                        var e_2, _a;
                                        /** @type {?} */
                                        var currentLeafNodeNames = new Array();
                                        try {
                                            for (var _b = __values(_this.database.nodePropertyNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                                                var _d = __read(_c.value, 2), level_1 = _d[0], propName = _d[1];
                                                if (level_1 === node.level) {
                                                    currentPropertyName = propName;
                                                }
                                            }
                                        }
                                        catch (e_2_1) {
                                            e_2 = { error: e_2_1 };
                                        }
                                        finally {
                                            try {
                                                if (_c && !_c.done && (_a = _b.return))
                                                    _a.call(_b);
                                            }
                                            finally {
                                                if (e_2)
                                                    throw e_2.error;
                                            }
                                        }
                                        if (result != null) {
                                            for (var i = 0; i < result.length; i++) {
                                                currentLeafNodeNames.push(result[i][currentPropertyName]);
                                            }
                                        }
                                        _this.database.setCurrentSelectedLeafNode = result;
                                    }));
                                }
                                else {
                                    node.isLoading = true;
                                    this.actionDispatcher.dispatchAction(token, node.resultObject).then(( /**
                                     * @param {?} result
                                     * @return {?}
                                     */function (result) {
                                        _this.populateNodeList(result, node, expand);
                                    }));
                                }
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
            };
        /** Populate parent nodes with their children*/
        /**
         * Populate parent nodes with their children
         * @param {?} nodeList
         * @param {?} node
         * @param {?} expand
         * @return {?}
         */
        DynamicDataSource.prototype.populateNodeList = /**
         * Populate parent nodes with their children
         * @param {?} nodeList
         * @param {?} node
         * @param {?} expand
         * @return {?}
         */
            function (nodeList, node, expand) {
                var e_3, _a;
                /** @type {?} */
                var nodeNames = new Array();
                /** @type {?} */
                var currentPropertyName;
                try {
                    for (var _b = __values(this.database.nodePropertyNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), level = _d[0], propName = _d[1];
                        if (level === node.level) {
                            currentPropertyName = propName;
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                if (nodeList != null) {
                    for (var i = 0; i < nodeList.length; i++) {
                        nodeNames.push(nodeList[i][currentPropertyName]);
                    }
                    this.database.dataMap.set(node.item, nodeNames);
                    this.expandChildNodes(node, expand, nodeList, nodeNames);
                }
                else {
                    node.isLoading = false;
                    return;
                }
            };
        /** Expand child nodes */
        /**
         * Expand child nodes
         * @param {?} node
         * @param {?} expand
         * @param {?} nodeList
         * @param {?} childNodes
         * @return {?}
         */
        DynamicDataSource.prototype.expandChildNodes = /**
         * Expand child nodes
         * @param {?} node
         * @param {?} expand
         * @param {?} nodeList
         * @param {?} childNodes
         * @return {?}
         */
            function (node, expand, nodeList, childNodes) {
                var _this = this;
                var _a;
                /** @type {?} */
                var children = this.database.getChildren(node.item);
                /** @type {?} */
                var index = this.data.indexOf(node);
                if (!children || index < 0) { // If no children, or cannot find the node, no op
                    console.log("no children returning");
                    return;
                }
                if (expand) {
                    /** @type {?} */
                    var i_1 = 0;
                    /**
                     * Create new child nodes
                     * @type {?}
                     */
                    var nodes = nodeList.map(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) { return new DynamicFlatNode(childNodes[i_1++], node.level + 1, result, _this.database.isExpandable(node.item)); }));
                    (_a = this.data).splice.apply(_a, __spread([index + 1, 0], nodes));
                }
                else {
                    /** @type {?} */
                    var count = 0;
                    for (var i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
                    this.data.splice(index + 1, count);
                }
                /** notify the change */
                this.dataChange.next(this.data);
                node.isLoading = false;
                this.changeDetectorRef.detectChanges();
            };
        DynamicDataSource.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DynamicDataSource.ctorParameters = function () {
            return [
                { type: tree.FlatTreeControl },
                { type: DynamicDatabase },
                { type: i0.ChangeDetectorRef }
            ];
        };
        return DynamicDataSource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionsAndToolsConfig = /** @class */ (function () {
        function ActionsAndToolsConfig(name, enable, token, level, type, icon$$1, nodePropertyName, isApp) {
            this.name = name;
            this.enable = enable;
            this.token = token;
            this.level = level;
            this.type = type;
            this.isIcon = icon$$1;
            this.nodePropertyName = nodePropertyName;
            this.isApp = isApp;
        }
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getName", {
            get: /**
             * @return {?}
             */ function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setName", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getEnable", {
            get: /**
             * @return {?}
             */ function () {
                return this.enable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setEnable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.enable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getToken", {
            get: /**
             * @return {?}
             */ function () {
                return this.token;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setToken", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.token = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getLevel", {
            get: /**
             * @return {?}
             */ function () {
                return this.level;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setLevel", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.level = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getType", {
            get: /**
             * @return {?}
             */ function () {
                return this.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setType", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.type = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getIcon", {
            get: /**
             * @return {?}
             */ function () {
                return this.isIcon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setIcon", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.isIcon = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getNodePropertyName", {
            get: /**
             * @return {?}
             */ function () {
                return this.nodePropertyName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setNodePropertyName", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nodePropertyName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "getApp", {
            get: /**
             * @return {?}
             */ function () {
                return this.isApp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionsAndToolsConfig.prototype, "setApp", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.isApp = value;
            },
            enumerable: true,
            configurable: true
        });
        return ActionsAndToolsConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LeafColumnConfig = /** @class */ (function () {
        function LeafColumnConfig(name, item, position) {
            this.name = name;
            this.item = item;
            this.position = position;
        }
        Object.defineProperty(LeafColumnConfig.prototype, "getname", {
            get: /**
             * @return {?}
             */ function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LeafColumnConfig.prototype, "setname", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LeafColumnConfig.prototype, "getitem", {
            get: /**
             * @return {?}
             */ function () {
                return this.item;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LeafColumnConfig.prototype, "setitem", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.item = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LeafColumnConfig.prototype, "getPosition", {
            get: /**
             * @return {?}
             */ function () {
                return this.position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LeafColumnConfig.prototype, "setPosition", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.position = value;
            },
            enumerable: true,
            configurable: true
        });
        return LeafColumnConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeConfig = /** @class */ (function () {
        function TreeConfig() {
            this.actionsAndToolsArr = new Array();
            this.leafColumnConfigArr = new Array();
        }
        Object.defineProperty(TreeConfig.prototype, "getTreeHeader", {
            get: /**
             * @return {?}
             */ function () {
                return this.treeHeader;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setTreeHeader", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.treeHeader = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "getTotalLevels", {
            get: /**
             * @return {?}
             */ function () {
                return this.totalLevels;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setTotalLevels", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.totalLevels = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "getRootLevelNode", {
            get: /**
             * @return {?}
             */ function () {
                return this.rootLevelNode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setRootLevelNode", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.rootLevelNode = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @param {?} enable
         * @param {?} token
         * @param {?=} level
         * @param {?=} type
         * @param {?=} isIcon
         * @param {?=} nodeName
         * @param {?=} isApp
         * @return {?}
         */
        TreeConfig.prototype.addActionsAndToolConfig = /**
         * @param {?} name
         * @param {?} enable
         * @param {?} token
         * @param {?=} level
         * @param {?=} type
         * @param {?=} isIcon
         * @param {?=} nodeName
         * @param {?=} isApp
         * @return {?}
         */
            function (name, enable, token, level, type, isIcon, nodeName, isApp) {
                this.actionsAndToolsArr.push(new ActionsAndToolsConfig(name, enable, token, level, type, isIcon, nodeName, isApp));
            };
        Object.defineProperty(TreeConfig.prototype, "getPageSize", {
            get: /**
             * @return {?}
             */ function () {
                return this.pageSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setPageSize", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.pageSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "getLeafNodeTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this.leafNodeTitle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setLeafNodeTitle", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.leafNodeTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "getLeafNodeName", {
            get: /**
             * @return {?}
             */ function () {
                return this.leafNodeName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "setLeafNodeName", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.leafNodeName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeConfig.prototype, "getLeafNodeColumnConfig", {
            get: /**
             * @return {?}
             */ function () {
                return this.leafColumnConfigArr;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @param {?} item
         * @param {?} position
         * @return {?}
         */
        TreeConfig.prototype.addLeafNodeColumnConfig = /**
         * @param {?} name
         * @param {?} item
         * @param {?} position
         * @return {?}
         */
            function (name, item, position) {
                this.leafColumnConfigArr.push(new LeafColumnConfig(name, item, position));
            };
        TreeConfig.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TreeConfig.ctorParameters = function () { return []; };
        /** @nocollapse */ TreeConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TreeConfig_Factory() { return new TreeConfig(); }, token: TreeConfig, providedIn: "root" });
        return TreeConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Node for to-do item
     */
    var /**
     * Node for to-do item
     */ SearchItemNode = /** @class */ (function () {
        function SearchItemNode() {
        }
        return SearchItemNode;
    }());
    /**
     * Flat to-do item node with expandable and level information
     */
    var /**
     * Flat to-do item node with expandable and level information
     */ SearchItemFlatNode = /** @class */ (function () {
        function SearchItemFlatNode() {
        }
        return SearchItemFlatNode;
    }());
    var EnterpriseTreeComponent = /** @class */ (function () {
        function EnterpriseTreeComponent(database, treeConfiguration, ref) {
            var _this = this;
            this.database = database;
            this.treeConfiguration = treeConfiguration;
            this.ref = ref;
            this.treeConfig = new Array();
            this.treeDataList = new Array();
            this.treeHeader = '';
            //Search Name Suggestion
            this.searchNameSuggestion = [];
            //Clear Filter
            this.clearFliter = false;
            //Add Filter Button loop
            this.filterSelectedValue = {};
            //Display filter loop 
            this.displayFilterValue = [];
            this.counter = 0;
            this.pageNumber = 1;
            this.pageSize = 12;
            this.rootLevelNode = '';
            //Total tree node levels
            this.totalLevels = 0;
            this.enableActionToolbar = new ActionsAndToolsConfig("enableActionToolbar", false, '');
            this.enableSearchToolBar = new ActionsAndToolsConfig("enableSearchToolBar", false, '');
            this.enableSearchPlaceholder = new ActionsAndToolsConfig("enableSearchPlaceholder", false, '');
            this.enableSearchBar = new ActionsAndToolsConfig("enableSearchBar", false, '');
            this.enableInitialText = new ActionsAndToolsConfig("enableInitialText", false, '');
            this.enableNodeDetails = new ActionsAndToolsConfig("enableNodeDetails", false, '');
            this.enableLeafNodeDetails = new ActionsAndToolsConfig("enableLeafNodeDetails", false, '');
            this.nodeFilteration = new ActionsAndToolsConfig("nodeFilteration", true, '');
            this.enableAppToolButton = new ActionsAndToolsConfig("enableAppToolButton", false, '');
            this.openAppSameWindow = new ActionsAndToolsConfig("openAppSameWindow", false, '');
            this.openAppNewTab = new ActionsAndToolsConfig("openAppNewTab", false, '');
            this.currentNodeDetailList = new Map();
            this.currentLeafNodeDetailList = new Array();
            //Leaf node grid view column names
            this.leafColumnConfig = new Array();
            //Leaf node data
            this.treeLeafDataList = new Array();
            //Leaf node title in Summary details
            this.leafNodeTitle = '';
            //Leaf node name in result json object
            this.leafNodeName = '';
            //Leaf node code list for displaying result object of search services by text(In filtered Mode = On)
            this.nodeCodeList = [];
            this.flatNodeMap = new Map();
            /**
             * Map from nested node to flattened node. This helps us to keep the same object for selection
             */
            this.nestedNodeMap = new Map();
            /**
             * A selected parent node to be inserted
             */
            this.selectedParent = null;
            /**
             * The new item's name
             */
            this.newItemName = '';
            this.getLevel = ( /**
             * @param {?} node
             * @return {?}
             */function (node) { return node.level; });
            this.isExpandable = ( /**
             * @param {?} node
             * @return {?}
             */function (node) { return node.expandable; });
            this.getChildren = ( /**
             * @param {?} node
             * @return {?}
             */function (node) { return node.children; });
            this.hasChild = ( /**
             * @param {?} _
             * @param {?} _nodeData
             * @return {?}
             */function (_, _nodeData) { return _nodeData.expandable; });
            this.hasNoContent = ( /**
             * @param {?} _
             * @param {?} _nodeData
             * @return {?}
             */function (_, _nodeData) { return _nodeData.item === ''; });
            this.transformer = ( /**
             * @param {?} node
             * @param {?} level
             * @return {?}
             */function (node, level) {
                /** @type {?} */
                var existingNode = _this.nestedNodeMap.get(node);
                /** @type {?} */
                var flatNode = existingNode && existingNode.item === node.item
                    ? existingNode
                    : new SearchItemFlatNode();
                flatNode.item = node.item;
                flatNode.level = level;
                flatNode.expandable = !!node.children;
                _this.flatNodeMap.set(flatNode, node);
                _this.nestedNodeMap.set(node, flatNode);
                return flatNode;
            });
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.ref);
            this.treeFlattener = new material.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.database.dataChange.subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                _this.dataSource.data = data;
            }));
        }
        /** Destroys/Detaches the change detection reference. */
        /**
         * Destroys/Detaches the change detection reference.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.ngOnDestroy = /**
         * Destroys/Detaches the change detection reference.
         * @return {?}
         */
            function () {
                this.ref.detach();
            };
        /**
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.leafColumnConfig = [];
                /** Subscribes to the current selected node value. */
                this.database.currentSelectedNodeValue.subscribe(( /**
                 * @param {?} node
                 * @return {?}
                 */function (node) {
                    if (node.item !== undefined) {
                        _this.enableInitialText.setEnable = false;
                        _this.enableNodeDetails.setEnable = true;
                        if (_this.enableLeafNodeDetails.enable === true) {
                            _this.enableLeafNodeDetails.enable = false;
                        }
                        _this.currentNodeDetailList.clear();
                        _this.clearLeafTableData();
                        _this.printDetails(node.resultObject);
                        _this.ref.detectChanges();
                    }
                }));
                /** Subscribes to the current selected leaf node value. */
                this.database.currentSelectedLeafNodeValue.subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result.length !== 0) {
                        _this.enableInitialText.setEnable = false;
                        _this.enableNodeDetails.setEnable = true;
                        _this.enableLeafNodeDetails.setEnable = true;
                        _this.treeLeafDataList = result;
                        _this.ref.detectChanges();
                        _this.createLeafNodeDetailGrid();
                    }
                }));
            };
        /** Method displays the node details(other than leaf node) for the selected tree node. */
        /**
         * Method displays the node details(other than leaf node) for the selected tree node.
         * @param {?} nodeDetailObj
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.printDetails = /**
         * Method displays the node details(other than leaf node) for the selected tree node.
         * @param {?} nodeDetailObj
         * @return {?}
         */
            function (nodeDetailObj) {
                var e_1, _a;
                if (this.database.filteredMode === true) {
                    if (this.enableLeafNodeDetails.enable === true) {
                        this.enableLeafNodeDetails.enable = false;
                    }
                }
                for (var i in nodeDetailObj) {
                    if (nodeDetailObj[i] instanceof Object) {
                        this.printDetails(nodeDetailObj[i]);
                    }
                    else {
                        try {
                            for (var _b = __values(Object.entries(nodeDetailObj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                                if (value instanceof Array) {
                                    delete nodeDetailObj[key];
                                }
                                this.currentNodeDetailList.set(i, nodeDetailObj[i]);
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return))
                                    _a.call(_b);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                    }
                }
            };
        Object.defineProperty(EnterpriseTreeComponent.prototype, "setTreeData", {
            /** Sets the tree data */
            set: /**
             * Sets the tree data
             * @param {?} data
             * @return {?}
             */ function (data) {
                this.treeData = data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnterpriseTreeComponent.prototype, "setActionDispatcher", {
            /** Set action dispatcher value @param value to Data Source. */
            set: /**
             * Set action dispatcher value \@param value to Data Source.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.actionDispatcher = value;
                this.dataSource.setActionDispatcher = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnterpriseTreeComponent.prototype, "setTreeConfig", {
            /** Sets tree configurations @param data to enterprise tree respective properties. */
            set: /**
             * Sets tree configurations \@param data to enterprise tree respective properties.
             * @param {?} data
             * @return {?}
             */ function (data) {
                if (data.pageSize != undefined || data.pageSize != null) {
                    this.pageSize = data.pageSize;
                }
                this.treeHeader = data.treeHeader;
                this.treeConfig = data.actionsAndToolsArr;
                this.rootLevelNode = data.rootLevelNode;
                this.totalLevels = data.totalLevels;
                this.leafNodeTitle = data.leafNodeTitle;
                this.leafNodeName = data.leafNodeName;
                this.treeConfiguration.setTotalLevels = data.totalLevels;
                this.leafColumnConfig = data.leafColumnConfigArr;
                this.sortTreeConfig(this.treeConfig);
                this.setTreeDataToTreeView();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * This method sorts the tree configuration.
         * @param treeConfig JSON object of tree configuration.
         */
        /**
         * This method sorts the tree configuration.
         * @param {?} treeConfig JSON object of tree configuration.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.sortTreeConfig = /**
         * This method sorts the tree configuration.
         * @param {?} treeConfig JSON object of tree configuration.
         * @return {?}
         */
            function (treeConfig) {
                /** @type {?} */
                var enterpTreeCompKeys = Object.getOwnPropertyNames(this);
                for (var i = 0; i < enterpTreeCompKeys.length; i++) {
                    for (var j = 0; j < treeConfig.length; j++) {
                        if (treeConfig[j].name === enterpTreeCompKeys[i]) {
                            this[enterpTreeCompKeys[i]] = treeConfig[j];
                            break;
                        }
                    }
                }
                for (var j = 0; j < treeConfig.length; j++) {
                    if (treeConfig[j].type === 'node_action') {
                        this.database.nodeLevelMethodConfigurations.set(treeConfig[j].level, treeConfig[j].token);
                        this.database.nodePropertyNames.set(treeConfig[j].level, treeConfig[j].nodePropertyName);
                    }
                }
            };
        /**
         * Initialize the root level tree data to @rootLevelNodes & root level node name to @rootLevelNode */
        /**
         * Initialize the root level tree data to \@rootLevelNodes & root level node name to \@rootLevelNode
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.setTreeDataToTreeView = /**
         * Initialize the root level tree data to \@rootLevelNodes & root level node name to \@rootLevelNode
         * @return {?}
         */
            function () {
                var _this = this;
                this.treeData.getRootNodeData(this.pageNumber, this.pageSize).then(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    _this.database.rootLevelName = _this.rootLevelNode;
                    _this.database.rootLevelNodes = result;
                    _this.dataSource.data = _this.database.initialData();
                }));
            };
        /**
         * Append the next batch of tree data to @rootLevelNodes */
        /**
         * Append the next batch of tree data to \@rootLevelNodes
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.getNextBatchOfPage = /**
         * Append the next batch of tree data to \@rootLevelNodes
         * @return {?}
         */
            function () {
                var _this = this;
                if (Math.floor(this.virtualScroll.measureScrollOffset('bottom')) === 0) {
                    console.log(Math.floor(this.virtualScroll.measureScrollOffset('bottom')), "getNextBatchOfPage ");
                    if (this.database.pagingMode === true) {
                        this.treeData.getNextPage(++this.pageNumber, this.pageSize).then(( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) {
                            if (result != null) {
                                _this.treeDataList = result;
                                _this.database.rootLevelName = _this.rootLevelNode;
                                for (var i = 0; i < _this.treeDataList.length; i++) {
                                    _this.database.rootLevelNodes.push(_this.treeDataList[i]);
                                }
                                _this.dataSource.data = _this.database.initialData();
                            }
                            else {
                                return;
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            console.log(error);
                        }));
                    }
                }
            };
        /** Filters the tree data with input of text type. */
        /**
         * Filters the tree data with input of text type.
         * @param {?} filterText
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.filterNodes = /**
         * Filters the tree data with input of text type.
         * @param {?} filterText
         * @return {?}
         */
            function (filterText) {
                var _this = this;
                this.database.filteredMode = true;
                this.database.pagingMode = false;
                if (filterText) {
                    this.enableInitialText.setEnable = true;
                    this.enableNodeDetails.setEnable = false;
                    this.actionDispatcher.dispatchAction(this.nodeFilteration.token, filterText).then(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
                        /** Set the tree control for SearchItemFlatNodes. */
                        _this.treeControl = new tree.FlatTreeControl(_this.getLevel, _this.isExpandable);
                        /** Set the data Source for SearchItemFlatNodes and SearchItemNode. */
                        _this.dataSource = new material.MatTreeFlatDataSource(_this.treeControl, _this.treeFlattener);
                        if (result.length > 0) {
                            _this.createSearchedNodes(result);
                        }
                    }));
                }
                if (filterText === '') {
                    this.enableInitialText.setEnable = true;
                    this.enableNodeDetails.setEnable = false;
                    this.enableLeafNodeDetails.setEnable = false;
                    this.ref.detectChanges();
                    this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
                    this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.ref);
                    this.dataSource.setActionDispatcher = this.actionDispatcher;
                    this.database.pagingMode = true;
                    this.setTreeDataToTreeView();
                    this.treeControl.collapseAll();
                }
                this.ref.detectChanges();
            };
        /** Creates tree view Nodes for searched data result. */
        /**
         * Creates tree view Nodes for searched data result.
         * @param {?} result
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.createSearchedNodes = /**
         * Creates tree view Nodes for searched data result.
         * @param {?} result
         * @return {?}
         */
            function (result) {
                /** Generates the hierarchy code for the searched data result. */
                this.nodeCodeList = this.treeData.getSearchResultDataHierarchyCode(result);
                this.dataSource.data = this.nodeCodeList;
                /**
                 * Builds the Searched result tree along with its children nodes.
                 * @type {?}
                 */
                var data = this.buildSearchResultTree(this.nodeCodeList, '0');
                /** Notify the change. */
                this.database.dataChange.next(data);
                this.treeControl.expandAll();
            };
        /**
        * Builds the search data structure tree view. The `value` is the Json object, or a sub-tree of a Json object.
        * The return value is the list of `SearchItemNode`.
        */
        /**
         * Builds the search data structure tree view. The `value` is the Json object, or a sub-tree of a Json object.
         * The return value is the list of `SearchItemNode`.
         * @param {?} searchDataObj
         * @param {?} level
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.buildSearchResultTree = /**
         * Builds the search data structure tree view. The `value` is the Json object, or a sub-tree of a Json object.
         * The return value is the list of `SearchItemNode`.
         * @param {?} searchDataObj
         * @param {?} level
         * @return {?}
         */
            function (searchDataObj, level) {
                var _this = this;
                return searchDataObj.filter(( /**
                 * @param {?} o
                 * @return {?}
                 */function (o) {
                    return (( /** @type {?} */(o.code))).startsWith(level + '.')
                        && (o.code.match(/\./g) || []).length === (level.match(/\./g) || []).length + 1;
                })).map(( /**
                 * @param {?} o
                 * @return {?}
                 */function (o) {
                    /** @type {?} */
                    var node = new SearchItemNode();
                    node.item = o.item;
                    node.code = o.code;
                    node.resultObject = o.resultObject;
                    /** @type {?} */
                    var children = searchDataObj.filter(( /**
                     * @param {?} so
                     * @return {?}
                     */function (so) { return (( /** @type {?} */(so.code))).startsWith(level + '.'); }));
                    if (children && children.length > 0) {
                        node.children = _this.buildSearchResultTree(children, o.code);
                    }
                    return node;
                }));
            };
        /** Displays the node details in the Summary details UI section for the selected node. */
        /**
         * Displays the node details in the Summary details UI section for the selected node.
         * @param {?} node
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.displayCurrentSearchNodeDetails = /**
         * Displays the node details in the Summary details UI section for the selected node.
         * @param {?} node
         * @return {?}
         */
            function (node) {
                /** Checks whether filter mode is On. */
                if (this.database.filteredMode === true) {
                    for (var i = 0; i < this.nodeCodeList.length; i++) {
                        if (node.item === this.nodeCodeList[i].item) {
                            /** Checks whether the node is a leaf node. */
                            if (node.level === (this.database.nodePropertyNames.size - 1)) {
                                /** @type {?} */
                                var temp = JSON.parse(JSON.stringify(this.nodeCodeList[i]));
                                delete temp.resultObject[this.leafNodeName];
                                this.database.setCurrentSelectedNode = temp;
                                /** @type {?} */
                                var result = Object.values(this.nodeCodeList[i].resultObject[this.leafNodeName]);
                                this.database.setCurrentSelectedLeafNode = result;
                            }
                            else {
                                node.resultObject = this.nodeCodeList[i].resultObject;
                                this.database.setCurrentSelectedNode = node;
                            }
                        }
                    }
                }
                else {
                    this.database.setCurrentSelectedNode = node;
                }
            };
        /** Clears the previously rendered data in leaf detail grid. */
        /**
         * Clears the previously rendered data in leaf detail grid.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.clearLeafTableData = /**
         * Clears the previously rendered data in leaf detail grid.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var tableHeadings = document.getElementsByTagName("th");
                /** @type {?} */
                var tableHeadDiv = ( /** @type {?} */(document.getElementsByClassName("th-div")[0]));
                for (var i = 0; i < tableHeadings.length;) {
                    (( /** @type {?} */(tableHeadings[i]))).remove();
                }
                /** @type {?} */
                var tableRows = document.getElementsByTagName("tr");
                for (var i = 0; i < tableRows.length;) {
                    (( /** @type {?} */(tableRows[i]))).remove();
                }
            };
        /** Creates leaf node grid view. */
        /**
         * Creates leaf node grid view.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.createLeafNodeDetailGrid = /**
         * Creates leaf node grid view.
         * @return {?}
         */
            function () {
                this.leafContainerElement = document.getElementById('leaf-container');
                /** Creates leaf node grid headings. */
                this.createLeafTableHeading();
                /** @type {?} */
                var tableDataCell = null;
                /** @type {?} */
                var tableRowData = null;
                this.counter = 0;
                for (; this.counter < this.treeLeafDataList.length; this.counter++) {
                    /** Creates leaf node rows for grid view. */
                    this.createLeafRows(this.counter);
                    for (var moduleListKey in this.treeLeafDataList[this.counter]) {
                        for (var i = 0; i < this.leafColumnConfig.length; i++) {
                            if (this.leafColumnConfig[i].name === moduleListKey) {
                                /** @type {?} */
                                var table$$1 = document.getElementsByClassName("table-row-data");
                                /** @type {?} */
                                var lastRowIndex = table$$1.length;
                                tableRowData = ( /** @type {?} */(document.getElementsByClassName('table-row-data')[lastRowIndex - 1]));
                                tableDataCell = tableRowData.cells;
                                /** @type {?} */
                                var pos = this.leafColumnConfig[i].position;
                                /** @type {?} */
                                var value = this.treeLeafDataList[this.counter][moduleListKey];
                                tableDataCell[pos].innerHTML = value;
                            }
                        }
                    }
                    tableDataCell[tableDataCell.length - 1].style.right = 0 + "px";
                    tableDataCell[tableDataCell.length - 1].style.width = 5 + '%';
                    tableDataCell[tableDataCell.length - 1].style.height = "40px";
                    tableDataCell[tableDataCell.length - 1].style.whiteSpace = 'nowrap';
                    tableDataCell[tableDataCell.length - 1].style.backgroundColor = "white";
                    tableDataCell[tableDataCell.length - 1].style.maxWidth = "100px";
                    tableDataCell[tableDataCell.length - 1].style.overflow = "hidden";
                    tableDataCell[tableDataCell.length - 1].style.textOverflow = "ellipsis";
                }
            };
        /**
         * Creates leaf node grid headings.
        */
        /**
         * Creates leaf node grid headings.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.createLeafTableHeading = /**
         * Creates leaf node grid headings.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var tableHeadDiv = ( /** @type {?} */(document.getElementsByClassName("th-div")[0]));
                for (var i = 0; i < this.leafColumnConfig.length; i++) {
                    this.thElement = document.createElement('th');
                    this.thElement.style.padding = '10px';
                    this.thElement.style.textAlign = 'left';
                    this.thElement.style.borderBottom = '1px solid #ddd';
                    this.thElement.style.fontFamily = '"Questrial", sans-serif';
                    this.thElement.style.border = 'none';
                    this.thElement.style.outline = 'none';
                    this.thElement.style.fontSize = '14px';
                    this.thElement.style.letterSpacing = '1px';
                    this.thElement.style.height = '16px';
                    this.thElement.style.color = 'rgba(0,0,0,.54)';
                    // this.thElement.whiteSpace = 'nowrap';
                    this.thElement.style.width = 5 + '%';
                    /** @type {?} */
                    var headName = this.leafColumnConfig[i].name;
                    this.thElement.innerHTML = this.leafColumnConfig[i].item;
                    this.thElement.classList.add(headName);
                    tableHeadDiv.appendChild(this.thElement);
                }
            };
        /**
         * Creates leaf node rows for leaf node detail grid view.
         * @param value leaf data list element counter value.
         */
        /**
         * Creates leaf node rows for leaf node detail grid view.
         * @param {?} value leaf data list element counter value.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.createLeafRows = /**
         * Creates leaf node rows for leaf node detail grid view.
         * @param {?} value leaf data list element counter value.
         * @return {?}
         */
            function (value) {
                this.row = document.createElement('tr');
                this.row.style.background = 'white';
                this.row.style.padding = '5px';
                this.row.classList.add("table-row-data");
                this.leafContainerElement.appendChild(this.row);
                this.styleLeafCells();
            };
        /** Styles the leaf grid view cells with CSS. */
        /**
         * Styles the leaf grid view cells with CSS.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.styleLeafCells = /**
         * Styles the leaf grid view cells with CSS.
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.leafColumnConfig.length; i++) {
                    this.tdElement = document.createElement('td');
                    this.tdElement.style.paddingTop = '10px';
                    this.tdElement.style.paddingBottom = '10px';
                    this.tdElement.style.padding = '10px';
                    this.tdElement.style.textAlign = 'left';
                    this.tdElement.style.borderBottom = '1px solid #ddd';
                    this.tdElement.style.fontFamily = '"Questrial", sans-serif';
                    this.tdElement.style.border = 'none';
                    this.tdElement.style.outline = 'none';
                    this.tdElement.style.height = '39px';
                    this.tdElement.style.verticalAlign = 'middle';
                    this.tdElement.style.width = 5 + '%';
                    this.row.appendChild(this.tdElement);
                }
            };
        /** Opens the node app in the same window. */
        /**
         * Opens the node app in the same window.
         * @param {?} token
         * @param {?} nodeName
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.openAppInSameWindow = /**
         * Opens the node app in the same window.
         * @param {?} token
         * @param {?} nodeName
         * @return {?}
         */
            function (token, nodeName) {
                this.actionDispatcher.dispatchAction(token, nodeName.toLowerCase());
                this.closeDropdown();
            };
        /** Opens the node app in the new tab. */
        /**
         * Opens the node app in the new tab.
         * @param {?} token
         * @param {?} nodeName
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.openAppInNewTab = /**
         * Opens the node app in the new tab.
         * @param {?} token
         * @param {?} nodeName
         * @return {?}
         */
            function (token, nodeName) {
                this.actionDispatcher.dispatchAction(token, nodeName.toLowerCase());
                this.closeDropdown();
            };
        /** Closes the open-app functionality's menu-dropdown. */
        /**
         * Closes the open-app functionality's menu-dropdown.
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.closeDropdown = /**
         * Closes the open-app functionality's menu-dropdown.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dropdownsContents = document.getElementsByClassName('dropdown-content');
                for (var i = 0; i < dropdownsContents.length; i++) {
                    /** @type {?} */
                    var openDropdown = dropdownsContents[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            };
        /** Expands/Opens the open-app functionality's menu-dropdown. */
        /**
         * Expands/Opens the open-app functionality's menu-dropdown.
         * @param {?} $event
         * @return {?}
         */
        EnterpriseTreeComponent.prototype.showDropdown = /**
         * Expands/Opens the open-app functionality's menu-dropdown.
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event.target.matches('.app-dropdown-button')) {
                    if ($event.target.offsetParent.nextSibling != null && $event.target.offsetParent.nextSibling.matches('.dropdown-content')) {
                        $event.target.offsetParent.nextSibling.classList.toggle("show");
                    }
                    else if ($event.target.nextSibling != null && $event.target.nextSibling.matches('.dropdown-content')) {
                        $event.target.nextSibling.classList.toggle("show");
                    }
                }
            };
        EnterpriseTreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ao-enterprise-tree',
                        template: "<div class=\"treeBgColor enterp-tree-container\">\n    <mat-toolbar class=\"treeBgColor action-bar\" *ngIf=\"enableActionToolbar.enable\">\n        <h2>{{ treeHeader }} |</h2>\n        <span> Showing all {{ treeHeader + \"s\" | lowercase }}</span>\n    </mat-toolbar>\n\n    <mat-toolbar class=\"search-toolbar\" *ngIf=\"enableSearchToolBar.enable\">\n\n        <mat-form-field>\n            <input matInput placeholder=\"Search\" (keyup)=\"filterNodes($event.target.value)\">\n        </mat-form-field>\n\n    </mat-toolbar>\n\n    <div class=\"main-tree-container\">\n        <div class=\"tree-sidenav-card\">\n\n            <cdk-virtual-scroll-viewport CdkScrollable itemSize=\"1\" id=\"example-viewport1\"\n                (scroll)=\"getNextBatchOfPage()\">\n\n                <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n\n                    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild;\" matTreeNodePadding class=\"parent-node\"\n                        matTreeNodeToggle (click)=\"displayCurrentSearchNodeDetails(node)\">\n                        <button mat-icon-button [attr.aria-label]=\"node.item\" class=\"toggle-button\" matTreeNodeToggle>\n                            <mat-icon class=\"mat-icon-rtl-mirror\">\n                                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                            </mat-icon>\n                        </button>\n                        {{node.item}}\n\n                        <div class=\"dropdown\">\n                            <button mat-icon-button class=\"app-dropdown-button\" aria-label=\"Example icon-button with a menu\"\n                                (click)=\"showDropdown($event)\">\n                                <mat-icon class=\"app-dropdown-button\">more_vert</mat-icon>\n                            </button>\n\n                            <div class=\"dropdown-content\">\n                                <a href=\"#\" (click)=\"openAppInSameWindow(openAppSameWindow.token, node.item);\">\n                                    <mat-icon>apps</mat-icon>\n                                    <span class=\"dropdown-item\">App</span>\n                                </a>\n                                <a href=\"#\" (click)=\"openAppInNewTab(openAppNewTab.token, node.item);\">\n                                    <mat-icon>launch</mat-icon>\n                                    <span class=\"dropdown-item\">Open in new window</span>\n                                </a>\n                            </div>\n                        </div>\n\n                        <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\">\n                        </mat-progress-bar>\n                    </mat-tree-node>\n                </mat-tree>\n\n            </cdk-virtual-scroll-viewport>\n        </div>\n        <div class=\"tree-details-container\">\n            <div *ngIf=\"enableInitialText.enable\" style=\"padding: 29px;\">Select a tree node to see details.</div>\n\n            <mat-card *ngIf=\"enableNodeDetails.enable\" class=\"node-detail-card\">\n                <div class=\"node-fields\">\n                    <div class=\"detail-card-title\">Summary</div>\n                    <p *ngFor=\"let element of currentNodeDetailList | keyvalue\">{{element.key}} : {{element.value}}</p>\n                </div>\n\n                <div class=\"leaf-node-details\" *ngIf=\"enableLeafNodeDetails.enable\">\n                    <div class=\"leaf-node-title\">{{leafNodeTitle}}</div>\n                    <div id=\"leaf-container\">\n                        <div class=\"th-div\"></div>\n                    </div>\n                    <!-- <p *ngFor=\"let e of currentLeafNodeDetailList | keyvalue\">{{e.value}}</p> -->\n                </div>\n            </mat-card>\n        </div>\n    </div>\n</div>",
                        providers: [DynamicDatabase],
                        changeDetection: i0.ChangeDetectionStrategy.Default,
                        styles: [".example-tree-progress-bar{margin-left:30px}.treeBgColor{background:#f0f1f3}span{font-weight:100;color:rgba(0,0,0,.54);font-size:15px;margin-left:2px}h2{margin-left:5px;color:#414c55;font-family:Questrial,sans-serif;font-weight:700;letter-spacing:1px}.mat-toolbar-row,.mat-toolbar-single-row{height:55px}.search-toolbar{background:#fff}.main-tree-container{width:100%;display:inline-flex;height:74vh}.tree-sidenav-card{padding:11px;width:67vw}.tree-details-container{width:34vw;background:#fff;height:74vh;margin:11px 11px 11px 0}#example-viewport1{height:74vh;width:100%;overflow-x:hidden}.mat-tree-node{font-size:15px;padding:4px;min-height:59px}.mat-tree-node:hover{cursor:pointer}.node-detail-card{margin:3% 4%;border-radius:23px;height:-webkit-fill-available;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}.node-fields{padding:inherit}.detail-card-title,.leaf-node-title{font-family:Questrial,sans-serif;letter-spacing:1px;font-weight:700;font-size:19px}.leaf-node-title{padding-left:14px}#leaf-container{padding-left:6px}p{font-family:Questrial,sans-serif;letter-spacing:1px;font-size:15px}.search-form-field{width:100%}.mat-form-field{font-size:15px}.mat-input-element{font:icon}::-webkit-scrollbar{width:7px}::-webkit-scrollbar-track{background:#f1f1f1;border-radius:13px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:#20b2aa;border-radius:13px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.app-dropdown-button{visibility:hidden}mat-tree-node:hover .app-dropdown-button{visibility:visible}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;overflow:auto;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1000}.dropdown-content a{color:#000;padding:12px 16px;text-decoration:none;display:block}.show{display:block}"]
                    }] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EnterpriseTreeComponent.ctorParameters = function () {
            return [
                { type: DynamicDatabase },
                { type: TreeConfig },
                { type: i0.ChangeDetectorRef }
            ];
        };
        EnterpriseTreeComponent.propDecorators = {
            virtualScroll: [{ type: i0.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: false },] }]
        };
        /** @nocollapse */ EnterpriseTreeComponent.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseTreeComponent_Factory() { return new EnterpriseTreeComponent(i0.ɵɵinject(DynamicDatabase), i0.ɵɵinject(TreeConfig), i0.ɵɵinject(i0.ChangeDetectorRef)); }, token: EnterpriseTreeComponent, providedIn: "root" });
        return EnterpriseTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModuleSet = /** @class */ (function () {
        function MaterialModuleSet() {
        }
        MaterialModuleSet.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                            forms.FormsModule, forms.ReactiveFormsModule
                        ]
                    },] }
        ];
        return MaterialModuleSet;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AoTreeDataDirective = /** @class */ (function () {
        function AoTreeDataDirective(enterpTreeComp) {
            this.enterpTreeComp = enterpTreeComp;
        }
        /**
         * @return {?}
         */
        AoTreeDataDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.enterpTreeComp.setTreeData = this.treeData;
            };
        AoTreeDataDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ao-tree-data]'
                    },] }
        ];
        /** @nocollapse */
        AoTreeDataDirective.ctorParameters = function () {
            return [
                { type: EnterpriseTreeComponent }
            ];
        };
        AoTreeDataDirective.propDecorators = {
            treeData: [{ type: i0.Input }]
        };
        return AoTreeDataDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AoActionsDirective = /** @class */ (function () {
        function AoActionsDirective(enterpTreeComp) {
            this.enterpTreeComp = enterpTreeComp;
        }
        /**
         * @return {?}
         */
        AoActionsDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.enterpTreeComp.setActionDispatcher = this.actionDispatcher;
            };
        AoActionsDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ao-actions]'
                    },] }
        ];
        /** @nocollapse */
        AoActionsDirective.ctorParameters = function () {
            return [
                { type: EnterpriseTreeComponent }
            ];
        };
        AoActionsDirective.propDecorators = {
            actionDispatcher: [{ type: i0.Input }]
        };
        return AoActionsDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AoTreeConfigDirective = /** @class */ (function () {
        function AoTreeConfigDirective(enterpTreeComp) {
            this.enterpTreeComp = enterpTreeComp;
        }
        /**
         * @return {?}
         */
        AoTreeConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.enterpTreeComp.setTreeConfig = this.treeConfig;
            };
        AoTreeConfigDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ao-tree-config]'
                    },] }
        ];
        /** @nocollapse */
        AoTreeConfigDirective.ctorParameters = function () {
            return [
                { type: EnterpriseTreeComponent }
            ];
        };
        AoTreeConfigDirective.propDecorators = {
            treeConfig: [{ type: i0.Input }]
        };
        return AoTreeConfigDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EnterpriseTreeModule = /** @class */ (function () {
        function EnterpriseTreeModule() {
        }
        EnterpriseTreeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                        imports: [
                            common.CommonModule,
                            MaterialModuleSet,
                        ],
                        exports: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                        providers: [EnterpriseTreeComponent],
                        schemas: [
                            i0.CUSTOM_ELEMENTS_SCHEMA, i0.NO_ERRORS_SCHEMA,
                        ],
                    },] }
        ];
        return EnterpriseTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseActionDispatcher = /** @class */ (function () {
        function BaseActionDispatcher() {
        }
        /**
         * Get the token convert it and call the method requested .
         */
        /**
         * Get the token convert it and call the method requested .
         * @param {?} token
         * @param {...?} args
         * @return {?}
         */
        BaseActionDispatcher.prototype.dispatchAction = /**
         * Get the token convert it and call the method requested .
         * @param {?} token
         * @param {...?} args
         * @return {?}
         */
            function (token) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var tokenArray = token.split("-");
                /** @type {?} */
                var transformedToken = [];
                for (var i = 0; i < tokenArray.length; i++) {
                    if (i !== 0) {
                        transformedToken.push(tokenArray[i].charAt(0).toUpperCase() + tokenArray[i].slice(1));
                    }
                    else {
                        transformedToken.push(tokenArray[i]);
                    }
                }
                /** @type {?} */
                var methodName = transformedToken.join("");
                return this[methodName].apply(this, args);
            };
        BaseActionDispatcher.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        BaseActionDispatcher.ctorParameters = function () { return []; };
        /** @nocollapse */ BaseActionDispatcher.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BaseActionDispatcher_Factory() { return new BaseActionDispatcher(); }, token: BaseActionDispatcher, providedIn: "root" });
        return BaseActionDispatcher;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionTypes = /** @class */ (function () {
        function ActionTypes() {
        }
        ActionTypes.node = "node_action";
        ActionTypes.hover = "hover_action";
        return ActionTypes;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.EnterpriseTreeService = EnterpriseTreeService;
    exports.SearchItemNode = SearchItemNode;
    exports.SearchItemFlatNode = SearchItemFlatNode;
    exports.EnterpriseTreeComponent = EnterpriseTreeComponent;
    exports.EnterpriseTreeModule = EnterpriseTreeModule;
    exports.BaseActionDispatcher = BaseActionDispatcher;
    exports.TreeConfig = TreeConfig;
    exports.ActionsAndToolsConfig = ActionsAndToolsConfig;
    exports.ActionTypes = ActionTypes;
    exports.ɵe = MaterialModuleSet;
    exports.ɵc = AoActionsDirective;
    exports.ɵd = AoTreeConfigDirective;
    exports.ɵb = AoTreeDataDirective;
    exports.ɵa = DynamicDatabase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=enterprise-tree.umd.js.map