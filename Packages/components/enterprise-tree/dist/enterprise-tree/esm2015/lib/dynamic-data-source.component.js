/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
/**
 * Flat node with expandable and level information
 */
export class DynamicFlatNode {
    /**
     * @param {?=} item
     * @param {?=} level
     * @param {?=} resultObject
     * @param {?=} expandable
     * @param {?=} isLoading
     * @param {?=} code
     * @param {?=} children
     */
    constructor(item, level, resultObject, expandable, isLoading, code, children) {
        this.item = item;
        this.level = level;
        this.resultObject = resultObject;
        this.expandable = expandable;
        this.isLoading = isLoading;
        this.code = code;
        this.children = children;
    }
}
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
export class DynamicDatabase {
    constructor() {
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
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    get getCurrentSelectedNode() {
        return this.currentSelectedNode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setCurrentSelectedNode(value) {
        this.currentSelectedNode = value;
        this.currentSelectedNodeSource.next(this.currentSelectedNode);
    }
    /**
     * @return {?}
     */
    get getRootLevelNodes() {
        return this.rootLevelNodes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setRootLevelNodes(value) {
        this.rootLevelNodes = value;
    }
    /**
     * @return {?}
     */
    get getCurrentSelectedLeafNode() {
        return this.currentLeafNodeNames;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setCurrentSelectedLeafNode(value) {
        this.currentLeafNodeNames = value;
        this.currentSelectedLeafNodeSource.next(this.currentLeafNodeNames);
    }
    /**
     * Initialize data for root level nodes
     * @return {?}
     */
    initialData() {
        return this.rootLevelNodes.map((/**
         * @param {?} result
         * @return {?}
         */
        result => new DynamicFlatNode(result[this.rootLevelName], 0, result, true)));
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getChildren(node) {
        return this.dataMap.get(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
DynamicDatabase.decorators = [
    { type: Injectable }
];
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
export class DynamicDataSource {
    /**
     * @param {?} treeControl
     * @param {?} database
     * @param {?} changeDetectorRef
     */
    constructor(treeControl, database, changeDetectorRef) {
        this.treeControl = treeControl;
        this.database = database;
        this.changeDetectorRef = changeDetectorRef;
        this.dataChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get data() {
        return this.dataChange.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setActionDispatcher(value) {
        this.actionDispatcher = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changeDetectorRef.detach();
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        (/** @type {?} */ (this.treeControl.expansionModel.onChange)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                this.handleTreeControl((/** @type {?} */ (change)));
            }
        }));
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map((/**
         * @return {?}
         */
        () => this.data)));
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    disconnect(collectionViewer) {
        this.dataChange.complete();
    }
    /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, true)));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, false)));
        }
    }
    /**
     * Toggle the node for the selected node, and make server call to get it's children.
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    toggleNode(node, expand) {
        /** @type {?} */
        let currentPropertyName;
        this.database.filteredMode = false;
        if (this.database.filteredMode === false) {
            this.database.setCurrentSelectedNode = node;
            for (let [level, token] of this.database.nodeLevelMethodConfigurations) {
                if (level === node.level) {
                    /** Dispatch action for leaf node. */
                    if (level === this.database.nodeLevelMethodConfigurations.size - 1) {
                        this.actionDispatcher.dispatchAction(token, node.resultObject).then((/**
                         * @param {?} result
                         * @return {?}
                         */
                        result => {
                            /** @type {?} */
                            let currentLeafNodeNames = new Array();
                            for (let [level, propName] of this.database.nodePropertyNames) {
                                if (level === node.level) {
                                    currentPropertyName = propName;
                                }
                            }
                            if (result != null) {
                                for (let i = 0; i < result.length; i++) {
                                    currentLeafNodeNames.push(result[i][currentPropertyName]);
                                }
                            }
                            this.database.setCurrentSelectedLeafNode = result;
                        }));
                    }
                    else {
                        node.isLoading = true;
                        this.actionDispatcher.dispatchAction(token, node.resultObject).then((/**
                         * @param {?} result
                         * @return {?}
                         */
                        result => {
                            this.populateNodeList(result, node, expand);
                        }));
                    }
                }
            }
        }
    }
    /**
     * Populate parent nodes with their children
     * @param {?} nodeList
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    populateNodeList(nodeList, node, expand) {
        /** @type {?} */
        let nodeNames = new Array();
        /** @type {?} */
        let currentPropertyName;
        for (let [level, propName] of this.database.nodePropertyNames) {
            if (level === node.level) {
                currentPropertyName = propName;
            }
        }
        if (nodeList != null) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeNames.push(nodeList[i][currentPropertyName]);
            }
            this.database.dataMap.set(node.item, nodeNames);
            this.expandChildNodes(node, expand, nodeList, nodeNames);
        }
        else {
            node.isLoading = false;
            return;
        }
    }
    /**
     * Expand child nodes
     * @param {?} node
     * @param {?} expand
     * @param {?} nodeList
     * @param {?} childNodes
     * @return {?}
     */
    expandChildNodes(node, expand, nodeList, childNodes) {
        /** @type {?} */
        const children = this.database.getChildren(node.item);
        /** @type {?} */
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            console.log("no children returning");
            return;
        }
        if (expand) {
            /** @type {?} */
            let i = 0;
            /**
             * Create new child nodes
             * @type {?}
             */
            const nodes = nodeList.map((/**
             * @param {?} result
             * @return {?}
             */
            result => new DynamicFlatNode(childNodes[i++], node.level + 1, result, this.database.isExpandable(node.item))));
            this.data.splice(index + 1, 0, ...nodes);
        }
        else {
            /** @type {?} */
            let count = 0;
            for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
            this.data.splice(index + 1, count);
        }
        /** notify the change */
        this.dataChange.next(this.data);
        node.isLoading = false;
        this.changeDetectorRef.detectChanges();
    }
}
DynamicDataSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DynamicDataSource.ctorParameters = () => [
    { type: FlatTreeControl },
    { type: DynamicDatabase },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1kYXRhLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1kYXRhLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7Ozs7SUFDeEIsWUFDVyxJQUFhLEVBQ2IsS0FBYyxFQUNkLFlBQXFCLEVBQ3JCLFVBQW9CLEVBQ3BCLFNBQW1CLEVBQ25CLElBQWEsRUFDYixRQUE0QjtRQU41QixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFDbkMsQ0FBQztDQUNSOzs7SUFSTywrQkFBb0I7O0lBQ3BCLGdDQUFxQjs7SUFDckIsdUNBQTRCOztJQUM1QixxQ0FBMkI7O0lBQzNCLG9DQUEwQjs7SUFDMUIsK0JBQW9COztJQUNwQixtQ0FBbUM7Ozs7OztBQVMzQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVJLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBbUIsRUFBRSxDQUFDLENBQUM7UUFJdkQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1FBRXRDLGtDQUE2QixH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MkM7Ozs7O0lBZS9CLHdDQUFxRDs7Ozs7SUFBRSxxQ0FBaUM7Ozs7O0lBQUUsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvblZpZXdlciwgU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcCc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsYXRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7IEFjdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9hY3Rpb24vQWN0aW9uRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZWFyY2hJdGVtTm9kZSB9IGZyb20gJy4vZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudCc7XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNGbGF0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpdGVtPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGV2ZWw/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyByZXN1bHRPYmplY3Q/OiBPYmplY3QsXG4gICAgICAgIHB1YmxpYyBleHBhbmRhYmxlPzogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGlzTG9hZGluZz86IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBjb2RlPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY2hpbGRyZW4/OiBEeW5hbWljRmxhdE5vZGVbXVxuICAgICkgeyB9XG59XG5cbi8qKlxuICogRGF0YWJhc2UgZm9yIGR5bmFtaWMgZGF0YS4gV2hlbiBleHBhbmRpbmcgYSBub2RlIGluIHRoZSB0cmVlLCB0aGUgZGF0YSBzb3VyY2Ugd2lsbCBuZWVkIHRvIGZldGNoXG4gKiB0aGUgZGVzY2VuZGFudHMgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gICAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2VhcmNoSXRlbU5vZGVbXT4oW10pO1xuXG4gICAgZ2V0IGRhdGEoKTogU2VhcmNoSXRlbU5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cblxuICAgIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cbiAgICBub2RlTGV2ZWxNZXRob2RDb25maWd1cmF0aW9ucyA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG5cbiAgICBub2RlUHJvcGVydHlOYW1lcyA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG5cbiAgICBjdXJyZW50TGVhZk5vZGVOYW1lcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgZmlsdGVyZWRNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWdpbmdNb2RlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHJvb3RMZXZlbE5hbWU7XG5cbiAgICByb290TGV2ZWxOb2RlcyA9IFtdO1xuXG4gICAgY3VycmVudFNlbGVjdGVkTm9kZTogRHluYW1pY0ZsYXROb2RlID0gbmV3IER5bmFtaWNGbGF0Tm9kZSgpO1xuXG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZE5vZGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZT4odGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlKTtcbiAgICBjdXJyZW50U2VsZWN0ZWROb2RlVmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBnZXQgZ2V0Q3VycmVudFNlbGVjdGVkTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZTtcbiAgICB9XG5cbiAgICBzZXQgc2V0Q3VycmVudFNlbGVjdGVkTm9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlU291cmNlLm5leHQodGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlKTtcbiAgICB9XG5cbiAgICBnZXQgZ2V0Um9vdExldmVsTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RMZXZlbE5vZGVzO1xuICAgIH1cblxuICAgIHNldCBzZXRSb290TGV2ZWxOb2Rlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJvb3RMZXZlbE5vZGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZExlYWZOb2RlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHRoaXMuY3VycmVudExlYWZOb2RlTmFtZXMpO1xuICAgIGN1cnJlbnRTZWxlY3RlZExlYWZOb2RlVmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZExlYWZOb2RlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgZ2V0IGdldEN1cnJlbnRTZWxlY3RlZExlYWZOb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGVhZk5vZGVOYW1lcztcbiAgICB9XG5cbiAgICBzZXQgc2V0Q3VycmVudFNlbGVjdGVkTGVhZk5vZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVhZk5vZGVOYW1lcyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZExlYWZOb2RlU291cmNlLm5leHQodGhpcy5jdXJyZW50TGVhZk5vZGVOYW1lcyk7XG4gICAgfVxuXG4gICAgLyoqIEluaXRpYWxpemUgZGF0YSBmb3Igcm9vdCBsZXZlbCBub2RlcyAqL1xuICAgIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAocmVzdWx0ID0+IG5ldyBEeW5hbWljRmxhdE5vZGUocmVzdWx0W3RoaXMucm9vdExldmVsTmFtZV0sIDAsIHJlc3VsdCwgdHJ1ZSkpO1xuICAgIH1cblxuXG4gICAgZ2V0Q2hpbGRyZW4obm9kZTogc3RyaW5nKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgICB9XG5cbiAgICBpc0V4cGFuZGFibGUobm9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXAuaGFzKG5vZGUpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIEZpbGUgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdCBmcm9tIHN0cmluZy5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgZmlsZSBvciBhIGRpcmVjdG9yeS4gRm9yIGEgZmlsZSwgaXQgaGFzIGZpbGVuYW1lIGFuZCB0eXBlLlxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxuICogVGhlIGlucHV0IHdpbGwgYmUgYSBqc29uIG9iamVjdCBzdHJpbmcsIGFuZCB0aGUgb3V0cHV0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YVNvdXJjZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGRhdGFDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG4gICAgb3BlcmF0aW9uTGlzdDtcbiAgICBjdXJyZW50U2VydmljZTogc3RyaW5nO1xuXG5cblxuICAgIHByaXZhdGUgYWN0aW9uRGlzcGF0Y2hlcjogQWN0aW9uRGlzcGF0Y2hlcjtcblxuICAgIGdldCBkYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGF0YSh2YWx1ZTogRHluYW1pY0ZsYXROb2RlW10pIHtcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2V0QWN0aW9uRGlzcGF0Y2hlcih2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+LCBwcml2YXRlIGRhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8RHluYW1pY0ZsYXROb2RlW10+IHtcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbnNpb25Nb2RlbC5vbkNoYW5nZSEuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICAgICAgICBpZiAoKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikuYWRkZWQgfHxcbiAgICAgICAgICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5yZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmVlQ29udHJvbChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWVyZ2UoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLCB0aGlzLmRhdGFDaGFuZ2UpLnBpcGUobWFwKCgpID0+IHRoaXMuZGF0YSkpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKiogSGFuZGxlIGV4cGFuZC9jb2xsYXBzZSBiZWhhdmlvcnMgKi9cbiAgICBoYW5kbGVUcmVlQ29udHJvbChjaGFuZ2U6IFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KSB7XG5cbiAgICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICAgICAgY2hhbmdlLmFkZGVkLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICAgICAgY2hhbmdlLnJlbW92ZWQuc2xpY2UoKS5yZXZlcnNlKCkuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBub2RlIGZvciB0aGUgc2VsZWN0ZWQgbm9kZSwgYW5kIG1ha2Ugc2VydmVyIGNhbGwgdG8gZ2V0IGl0J3MgY2hpbGRyZW4uXG4gICAgICovXG4gICAgdG9nZ2xlTm9kZShub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbikge1xuXG4gICAgICAgIGxldCBjdXJyZW50UHJvcGVydHlOYW1lO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZmlsdGVyZWRNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YWJhc2UuZmlsdGVyZWRNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLnNldEN1cnJlbnRTZWxlY3RlZE5vZGUgPSBub2RlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBbbGV2ZWwsIHRva2VuXSBvZiB0aGlzLmRhdGFiYXNlLm5vZGVMZXZlbE1ldGhvZENvbmZpZ3VyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID09PSBub2RlLmxldmVsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqIERpc3BhdGNoIGFjdGlvbiBmb3IgbGVhZiBub2RlLiAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT09IHRoaXMuZGF0YWJhc2Uubm9kZUxldmVsTWV0aG9kQ29uZmlndXJhdGlvbnMuc2l6ZSAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKHRva2VuLCBub2RlLnJlc3VsdE9iamVjdCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExlYWZOb2RlTmFtZXMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBbbGV2ZWwsIHByb3BOYW1lXSBvZiB0aGlzLmRhdGFiYXNlLm5vZGVQcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT09IG5vZGUubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvcGVydHlOYW1lID0gcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExlYWZOb2RlTmFtZXMucHVzaChyZXN1bHRbaV1bY3VycmVudFByb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5zZXRDdXJyZW50U2VsZWN0ZWRMZWFmTm9kZSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKHRva2VuLCBub2RlLnJlc3VsdE9iamVjdCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlTm9kZUxpc3QocmVzdWx0LCBub2RlLCBleHBhbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKiBQb3B1bGF0ZSBwYXJlbnQgbm9kZXMgd2l0aCB0aGVpciBjaGlsZHJlbiovXG4gICAgcG9wdWxhdGVOb2RlTGlzdChub2RlTGlzdCwgbm9kZSwgZXhwYW5kKSB7XG5cbiAgICAgICAgbGV0IG5vZGVOYW1lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBsZXQgY3VycmVudFByb3BlcnR5TmFtZTtcblxuICAgICAgICBmb3IgKGxldCBbbGV2ZWwsIHByb3BOYW1lXSBvZiB0aGlzLmRhdGFiYXNlLm5vZGVQcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IG5vZGUubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvcGVydHlOYW1lID0gcHJvcE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZUxpc3QgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBub2RlTmFtZXMucHVzaChub2RlTGlzdFtpXVtjdXJyZW50UHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZGF0YU1hcC5zZXQobm9kZS5pdGVtLCBub2RlTmFtZXMpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkTm9kZXMobm9kZSwgZXhwYW5kLCBub2RlTGlzdCwgbm9kZU5hbWVzKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBFeHBhbmQgY2hpbGQgbm9kZXMgKi9cbiAgICBleHBhbmRDaGlsZE5vZGVzKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSwgZXhwYW5kOiBib29sZWFuLCBub2RlTGlzdCwgY2hpbGROb2Rlcykge1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKG5vZGUpO1xuXG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgaW5kZXggPCAwKSB7IC8vIElmIG5vIGNoaWxkcmVuLCBvciBjYW5ub3QgZmluZCB0aGUgbm9kZSwgbm8gb3BcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gY2hpbGRyZW4gcmV0dXJuaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cGFuZCkge1xuXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgICAgIC8qKiBDcmVhdGUgbmV3IGNoaWxkIG5vZGVzICovXG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IG5vZGVMaXN0Lm1hcChyZXN1bHQgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShjaGlsZE5vZGVzW2krK10sIG5vZGUubGV2ZWwgKyAxLCByZXN1bHQsIHRoaXMuZGF0YWJhc2UuaXNFeHBhbmRhYmxlKG5vZGUuaXRlbSkpKTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIDAsIC4uLm5vZGVzKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCB0aGlzLmRhdGEubGVuZ3RoICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7IGkrKywgY291bnQrKykgeyB9XG4gICAgICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgY291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIG5vdGlmeSB0aGUgY2hhbmdlICovXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICAgIG5vZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn0iXX0=