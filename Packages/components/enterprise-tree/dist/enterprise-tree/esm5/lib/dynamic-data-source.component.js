/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
/**
 * Flat node with expandable and level information
 */
var /**
 * Flat node with expandable and level information
 */
DynamicFlatNode = /** @class */ (function () {
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
 * Flat node with expandable and level information
 */
export { DynamicFlatNode };
if (false) {
    /** @type {?} */
    DynamicFlatNode.prototype.item;
    /** @type {?} */
    DynamicFlatNode.prototype.level;
    /** @type {?} */
    DynamicFlatNode.prototype.resultObject;
    /** @type {?} */
    DynamicFlatNode.prototype.expandable;
    /** @type {?} */
    DynamicFlatNode.prototype.isLoading;
    /** @type {?} */
    DynamicFlatNode.prototype.code;
    /** @type {?} */
    DynamicFlatNode.prototype.children;
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataChange = new BehaviorSubject([]);
        this.dataMap = new Map();
        this.nodeLevelMethodConfigurations = new Map();
        this.nodePropertyNames = new Map();
        this.currentLeafNodeNames = new Array();
        this.filteredMode = false;
        this.pagingMode = true;
        this.rootLevelNodes = [];
        this.currentSelectedNode = new DynamicFlatNode();
        this.currentSelectedNodeSource = new BehaviorSubject(this.currentSelectedNode);
        this.currentSelectedNodeValue = this.currentSelectedNodeSource.asObservable();
        this.currentSelectedLeafNodeSource = new BehaviorSubject(this.currentLeafNodeNames);
        this.currentSelectedLeafNodeValue = this.currentSelectedLeafNodeSource.asObservable();
    }
    Object.defineProperty(DynamicDatabase.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "getCurrentSelectedNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentSelectedNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "setCurrentSelectedNode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.currentSelectedNode = value;
            this.currentSelectedNodeSource.next(this.currentSelectedNode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "getRootLevelNodes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rootLevelNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "setRootLevelNodes", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rootLevelNodes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "getCurrentSelectedLeafNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentLeafNodeNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDatabase.prototype, "setCurrentSelectedLeafNode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        return this.rootLevelNodes.map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return new DynamicFlatNode(result[_this.rootLevelName], 0, result, true); }));
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
        { type: Injectable }
    ];
    return DynamicDatabase;
}());
export { DynamicDatabase };
if (false) {
    /** @type {?} */
    DynamicDatabase.prototype.dataChange;
    /** @type {?} */
    DynamicDatabase.prototype.dataMap;
    /** @type {?} */
    DynamicDatabase.prototype.nodeLevelMethodConfigurations;
    /** @type {?} */
    DynamicDatabase.prototype.nodePropertyNames;
    /** @type {?} */
    DynamicDatabase.prototype.currentLeafNodeNames;
    /** @type {?} */
    DynamicDatabase.prototype.filteredMode;
    /** @type {?} */
    DynamicDatabase.prototype.pagingMode;
    /** @type {?} */
    DynamicDatabase.prototype.rootLevelName;
    /** @type {?} */
    DynamicDatabase.prototype.rootLevelNodes;
    /** @type {?} */
    DynamicDatabase.prototype.currentSelectedNode;
    /** @type {?} */
    DynamicDatabase.prototype.currentSelectedNodeSource;
    /** @type {?} */
    DynamicDatabase.prototype.currentSelectedNodeValue;
    /** @type {?} */
    DynamicDatabase.prototype.currentSelectedLeafNodeSource;
    /** @type {?} */
    DynamicDatabase.prototype.currentSelectedLeafNodeValue;
}
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
        this.dataChange = new BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataChange.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function (value) {
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
        (/** @type {?} */ (this.treeControl.expansionModel.onChange)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                _this.handleTreeControl((/** @type {?} */ (change)));
            }
        }));
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map((/**
         * @return {?}
         */
        function () { return _this.data; })));
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
            change.added.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return _this.toggleNode(node, true); }));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return _this.toggleNode(node, false); }));
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
                for (var _b = tslib_1.__values(this.database.nodeLevelMethodConfigurations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), level = _d[0], token = _d[1];
                    if (level === node.level) {
                        /** Dispatch action for leaf node. */
                        if (level === this.database.nodeLevelMethodConfigurations.size - 1) {
                            this.actionDispatcher.dispatchAction(token, node.resultObject).then((/**
                             * @param {?} result
                             * @return {?}
                             */
                            function (result) {
                                var e_2, _a;
                                /** @type {?} */
                                var currentLeafNodeNames = new Array();
                                try {
                                    for (var _b = tslib_1.__values(_this.database.nodePropertyNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var _d = tslib_1.__read(_c.value, 2), level_1 = _d[0], propName = _d[1];
                                        if (level_1 === node.level) {
                                            currentPropertyName = propName;
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    }
                                    finally { if (e_2) throw e_2.error; }
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
                            this.actionDispatcher.dispatchAction(token, node.resultObject).then((/**
                             * @param {?} result
                             * @return {?}
                             */
                            function (result) {
                                _this.populateNodeList(result, node, expand);
                            }));
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
            for (var _b = tslib_1.__values(this.database.nodePropertyNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), level = _d[0], propName = _d[1];
                if (level === node.level) {
                    currentPropertyName = propName;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
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
            var nodes = nodeList.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return new DynamicFlatNode(childNodes[i_1++], node.level + 1, result, _this.database.isExpandable(node.item)); }));
            (_a = this.data).splice.apply(_a, tslib_1.__spread([index + 1, 0], nodes));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: FlatTreeControl },
        { type: DynamicDatabase },
        { type: ChangeDetectorRef }
    ]; };
    return DynamicDataSource;
}());
export { DynamicDataSource };
if (false) {
    /** @type {?} */
    DynamicDataSource.prototype.dataChange;
    /** @type {?} */
    DynamicDataSource.prototype.operationList;
    /** @type {?} */
    DynamicDataSource.prototype.currentService;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype.actionDispatcher;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype.treeControl;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype.database;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1kYXRhLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1kYXRhLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBS3BEOzs7O0lBQ0kseUJBQ1csSUFBYSxFQUNiLEtBQWMsRUFDZCxZQUFxQixFQUNyQixVQUFvQixFQUNwQixTQUFtQixFQUNuQixJQUFhLEVBQ2IsUUFBNEI7UUFONUIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBQ25DLENBQUM7SUFDVCxzQkFBQztBQUFELENBQUMsQUFWRCxJQVVDOzs7Ozs7O0lBUk8sK0JBQW9COztJQUNwQixnQ0FBcUI7O0lBQ3JCLHVDQUE0Qjs7SUFDNUIscUNBQTJCOztJQUMzQixvQ0FBMEI7O0lBQzFCLCtCQUFvQjs7SUFDcEIsbUNBQW1DOzs7Ozs7QUFRM0M7SUFBQTtRQUVJLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBbUIsRUFBRSxDQUFDLENBQUM7UUFJdkQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBRXRDLGtDQUE2QixHQUFHLElB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QUFHLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRztZQUNsRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBbExKLFVBQVU7Ozs7Z0JBckdGLGVBQWU7Z0JBNkhpRSxlQUFlO2dCQTlIL0YsaUJBQWlCOztJQXlSMUIsd0JBQUM7Q0FBQSxBQW5MRCxJQW1MQztTQWxMWSxpQkFBaUI7OztJQUUxQix1Q0FBNEY7O0lBQzVGLDBDQUFjOztJQUNkLDJDQUF1Qjs7Ozs7SUFJdkIsNkNBQTJDOzs7OztJQWUvQix3Q0FBcUQ7Ozs7O0lBQUUscUNBQWlDOzs7OztJQUFFLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbGxlY3Rpb25WaWV3ZXIsIFNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGbGF0VHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQgeyBBY3Rpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vYWN0aW9uL0FjdGlvbkRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoSXRlbU5vZGUgfSBmcm9tICcuL2VudGVycHJpc2UtdHJlZS5jb21wb25lbnQnO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmxhdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaXRlbT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxldmVsPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgcmVzdWx0T2JqZWN0PzogT2JqZWN0LFxuICAgICAgICBwdWJsaWMgZXhwYW5kYWJsZT86IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBpc0xvYWRpbmc/OiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgY29kZT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNoaWxkcmVuPzogRHluYW1pY0ZsYXROb2RlW11cbiAgICApIHsgfVxufVxuXG4vKipcbiAqIERhdGFiYXNlIGZvciBkeW5hbWljIGRhdGEuIFdoZW4gZXhwYW5kaW5nIGEgbm9kZSBpbiB0aGUgdHJlZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbmVlZCB0byBmZXRjaFxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YWJhc2Uge1xuICAgIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNlYXJjaEl0ZW1Ob2RlW10+KFtdKTtcblxuICAgIGdldCBkYXRhKCk6IFNlYXJjaEl0ZW1Ob2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuXG4gICAgbm9kZUxldmVsTWV0aG9kQ29uZmlndXJhdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuXG4gICAgbm9kZVByb3BlcnR5TmFtZXMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuXG4gICAgY3VycmVudExlYWZOb2RlTmFtZXMgPSBuZXcgQXJyYXkoKTtcblxuICAgIGZpbHRlcmVkTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcGFnaW5nTW9kZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICByb290TGV2ZWxOYW1lO1xuXG4gICAgcm9vdExldmVsTm9kZXMgPSBbXTtcblxuICAgIGN1cnJlbnRTZWxlY3RlZE5vZGU6IER5bmFtaWNGbGF0Tm9kZSA9IG5ldyBEeW5hbWljRmxhdE5vZGUoKTtcblxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWROb2RlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGU+KHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSk7XG4gICAgY3VycmVudFNlbGVjdGVkTm9kZVZhbHVlID0gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgZ2V0IGdldEN1cnJlbnRTZWxlY3RlZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGU7XG4gICAgfVxuXG4gICAgc2V0IHNldEN1cnJlbnRTZWxlY3RlZE5vZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZVNvdXJjZS5uZXh0KHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSk7XG4gICAgfVxuXG4gICAgZ2V0IGdldFJvb3RMZXZlbE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2RlcztcbiAgICB9XG5cbiAgICBzZXQgc2V0Um9vdExldmVsTm9kZXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5yb290TGV2ZWxOb2RlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRMZWFmTm9kZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih0aGlzLmN1cnJlbnRMZWFmTm9kZU5hbWVzKTtcbiAgICBjdXJyZW50U2VsZWN0ZWRMZWFmTm9kZVZhbHVlID0gdGhpcy5jdXJyZW50U2VsZWN0ZWRMZWFmTm9kZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIGdldCBnZXRDdXJyZW50U2VsZWN0ZWRMZWFmTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExlYWZOb2RlTmFtZXM7XG4gICAgfVxuXG4gICAgc2V0IHNldEN1cnJlbnRTZWxlY3RlZExlYWZOb2RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExlYWZOb2RlTmFtZXMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRMZWFmTm9kZVNvdXJjZS5uZXh0KHRoaXMuY3VycmVudExlYWZOb2RlTmFtZXMpO1xuICAgIH1cblxuICAgIC8qKiBJbml0aWFsaXplIGRhdGEgZm9yIHJvb3QgbGV2ZWwgbm9kZXMgKi9cbiAgICBpbml0aWFsRGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdExldmVsTm9kZXMubWFwKHJlc3VsdCA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKHJlc3VsdFt0aGlzLnJvb3RMZXZlbE5hbWVdLCAwLCByZXN1bHQsIHRydWUpKTtcbiAgICB9XG5cblxuICAgIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5nZXQobm9kZSk7XG4gICAgfVxuXG4gICAgaXNFeHBhbmRhYmxlKG5vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBkYXRhQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8RHluYW1pY0ZsYXROb2RlW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4oW10pO1xuICAgIG9wZXJhdGlvbkxpc3Q7XG4gICAgY3VycmVudFNlcnZpY2U6IHN0cmluZztcblxuXG5cbiAgICBwcml2YXRlIGFjdGlvbkRpc3BhdGNoZXI6IEFjdGlvbkRpc3BhdGNoZXI7XG5cbiAgICBnZXQgZGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGRhdGEodmFsdWU6IER5bmFtaWNGbGF0Tm9kZVtdKSB7XG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldEFjdGlvbkRpc3BhdGNoZXIodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPiwgcHJpdmF0ZSBkYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwub25DaGFuZ2UhLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgICAgICAgaWYgKChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLmFkZGVkIHx8XG4gICAgICAgICAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZSwgdGhpcy5kYXRhQ2hhbmdlKS5waXBlKG1hcCgoKSA9PiB0aGlzLmRhdGEpKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqIEhhbmRsZSBleHBhbmQvY29sbGFwc2UgYmVoYXZpb3JzICovXG4gICAgaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlOiBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikge1xuXG4gICAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZS5hZGRlZC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZS5yZW1vdmVkLnNsaWNlKCkucmV2ZXJzZSgpLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgbm9kZSBmb3IgdGhlIHNlbGVjdGVkIG5vZGUsIGFuZCBtYWtlIHNlcnZlciBjYWxsIHRvIGdldCBpdCdzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIHRvZ2dsZU5vZGUobm9kZTogRHluYW1pY0ZsYXROb2RlLCBleHBhbmQ6IGJvb2xlYW4pIHtcblxuICAgICAgICBsZXQgY3VycmVudFByb3BlcnR5TmFtZTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLmZpbHRlcmVkTW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFiYXNlLmZpbHRlcmVkTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5zZXRDdXJyZW50U2VsZWN0ZWROb2RlID0gbm9kZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgW2xldmVsLCB0b2tlbl0gb2YgdGhpcy5kYXRhYmFzZS5ub2RlTGV2ZWxNZXRob2RDb25maWd1cmF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gbm9kZS5sZXZlbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKiBEaXNwYXRjaCBhY3Rpb24gZm9yIGxlYWYgbm9kZS4gKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsID09PSB0aGlzLmRhdGFiYXNlLm5vZGVMZXZlbE1ldGhvZENvbmZpZ3VyYXRpb25zLnNpemUgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0b2tlbiwgbm9kZS5yZXN1bHRPYmplY3QpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMZWFmTm9kZU5hbWVzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgW2xldmVsLCBwcm9wTmFtZV0gb2YgdGhpcy5kYXRhYmFzZS5ub2RlUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsID09PSBub2RlLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb3BlcnR5TmFtZSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZWFmTm9kZU5hbWVzLnB1c2gocmVzdWx0W2ldW2N1cnJlbnRQcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2Uuc2V0Q3VycmVudFNlbGVjdGVkTGVhZk5vZGUgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0b2tlbiwgbm9kZS5yZXN1bHRPYmplY3QpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZU5vZGVMaXN0KHJlc3VsdCwgbm9kZSwgZXhwYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiogUG9wdWxhdGUgcGFyZW50IG5vZGVzIHdpdGggdGhlaXIgY2hpbGRyZW4qL1xuICAgIHBvcHVsYXRlTm9kZUxpc3Qobm9kZUxpc3QsIG5vZGUsIGV4cGFuZCkge1xuXG4gICAgICAgIGxldCBub2RlTmFtZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgZm9yIChsZXQgW2xldmVsLCBwcm9wTmFtZV0gb2YgdGhpcy5kYXRhYmFzZS5ub2RlUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgaWYgKGxldmVsID09PSBub2RlLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb3BlcnR5TmFtZSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGVMaXN0ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbm9kZU5hbWVzLnB1c2gobm9kZUxpc3RbaV1bY3VycmVudFByb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmRhdGFNYXAuc2V0KG5vZGUuaXRlbSwgbm9kZU5hbWVzKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRDaGlsZE5vZGVzKG5vZGUsIGV4cGFuZCwgbm9kZUxpc3QsIG5vZGVOYW1lcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRXhwYW5kIGNoaWxkIG5vZGVzICovXG4gICAgZXhwYW5kQ2hpbGROb2Rlcyhub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbiwgbm9kZUxpc3QsIGNoaWxkTm9kZXMpIHtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q2hpbGRyZW4obm9kZS5pdGVtKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihub2RlKTtcblxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGluZGV4IDwgMCkgeyAvLyBJZiBubyBjaGlsZHJlbiwgb3IgY2Fubm90IGZpbmQgdGhlIG5vZGUsIG5vIG9wXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNoaWxkcmVuIHJldHVybmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHBhbmQpIHtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgICAvKiogQ3JlYXRlIG5ldyBjaGlsZCBub2RlcyAqL1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlTGlzdC5tYXAocmVzdWx0ID0+IG5ldyBEeW5hbWljRmxhdE5vZGUoY2hpbGROb2Rlc1tpKytdLCBub2RlLmxldmVsICsgMSwgcmVzdWx0LCB0aGlzLmRhdGFiYXNlLmlzRXhwYW5kYWJsZShub2RlLml0ZW0pKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCAuLi5ub2Rlcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy5kYXRhLmxlbmd0aCAmJiB0aGlzLmRhdGFbaV0ubGV2ZWwgPiBub2RlLmxldmVsOyBpKyssIGNvdW50KyspIHsgfVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBub3RpZnkgdGhlIGNoYW5nZSAqL1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgICAgICBub2RlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59Il19