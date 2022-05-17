import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { FlatTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable, Directive, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EnterpriseTreeService {
    constructor() { }
}
EnterpriseTreeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
EnterpriseTreeService.ctorParameters = () => [];
/** @nocollapse */ EnterpriseTreeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EnterpriseTreeService_Factory() { return new EnterpriseTreeService(); }, token: EnterpriseTreeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Flat node with expandable and level information
 */
class DynamicFlatNode {
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
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
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
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
class DynamicDataSource {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionsAndToolsConfig {
    /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?=} level
     * @param {?=} type
     * @param {?=} icon
     * @param {?=} nodePropertyName
     * @param {?=} isApp
     */
    constructor(name, enable, token, level, type, icon, nodePropertyName, isApp) {
        this.name = name;
        this.enable = enable;
        this.token = token;
        this.level = level;
        this.type = type;
        this.isIcon = icon;
        this.nodePropertyName = nodePropertyName;
        this.isApp = isApp;
    }
    /**
     * @return {?}
     */
    get getName() {
        return this.name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setName(value) {
        this.name = value;
    }
    /**
     * @return {?}
     */
    get getEnable() {
        return this.enable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setEnable(value) {
        this.enable = value;
    }
    /**
     * @return {?}
     */
    get getToken() {
        return this.token;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setToken(value) {
        this.token = value;
    }
    /**
     * @return {?}
     */
    get getLevel() {
        return this.level;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLevel(value) {
        this.level = value;
    }
    /**
     * @return {?}
     */
    get getType() {
        return this.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setType(value) {
        this.type = value;
    }
    /**
     * @return {?}
     */
    get getIcon() {
        return this.isIcon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setIcon(value) {
        this.isIcon = value;
    }
    /**
     * @return {?}
     */
    get getNodePropertyName() {
        return this.nodePropertyName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setNodePropertyName(value) {
        this.nodePropertyName = value;
    }
    /**
     * @return {?}
     */
    get getApp() {
        return this.isApp;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setApp(value) {
        this.isApp = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LeafColumnConfig {
    /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     */
    constructor(name, item, position) {
        this.name = name;
        this.item = item;
        this.position = position;
    }
    /**
     * @return {?}
     */
    get getname() {
        return this.name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setname(value) {
        this.name = value;
    }
    /**
     * @return {?}
     */
    get getitem() {
        return this.item;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setitem(value) {
        this.item = value;
    }
    /**
     * @return {?}
     */
    get getPosition() {
        return this.position;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setPosition(value) {
        this.position = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeConfig {
    constructor() {
        this.actionsAndToolsArr = new Array();
        this.leafColumnConfigArr = new Array();
    }
    /**
     * @return {?}
     */
    get getTreeHeader() {
        return this.treeHeader;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setTreeHeader(value) {
        this.treeHeader = value;
    }
    /**
     * @return {?}
     */
    get getTotalLevels() {
        return this.totalLevels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setTotalLevels(value) {
        this.totalLevels = value;
    }
    /**
     * @return {?}
     */
    get getRootLevelNode() {
        return this.rootLevelNode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setRootLevelNode(value) {
        this.rootLevelNode = value;
    }
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
    addActionsAndToolConfig(name, enable, token, level, type, isIcon, nodeName, isApp) {
        this.actionsAndToolsArr.push(new ActionsAndToolsConfig(name, enable, token, level, type, isIcon, nodeName, isApp));
    }
    /**
     * @return {?}
     */
    get getPageSize() {
        return this.pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setPageSize(value) {
        this.pageSize = value;
    }
    /**
     * @return {?}
     */
    get getLeafNodeTitle() {
        return this.leafNodeTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLeafNodeTitle(value) {
        this.leafNodeTitle = value;
    }
    /**
     * @return {?}
     */
    get getLeafNodeName() {
        return this.leafNodeName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLeafNodeName(value) {
        this.leafNodeName = value;
    }
    /**
     * @return {?}
     */
    get getLeafNodeColumnConfig() {
        return this.leafColumnConfigArr;
    }
    /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    addLeafNodeColumnConfig(name, item, position) {
        this.leafColumnConfigArr.push(new LeafColumnConfig(name, item, position));
    }
}
TreeConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TreeConfig.ctorParameters = () => [];
/** @nocollapse */ TreeConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function TreeConfig_Factory() { return new TreeConfig(); }, token: TreeConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Node for to-do item
 */
class SearchItemNode {
}
/**
 * Flat to-do item node with expandable and level information
 */
class SearchItemFlatNode {
}
class EnterpriseTreeComponent {
    /**
     * @param {?} database
     * @param {?} treeConfiguration
     * @param {?} ref
     */
    constructor(database, treeConfiguration, ref) {
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
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.level);
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expandable);
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.children);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.hasNoContent = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === '');
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nestedNodeMap.get(node);
            /** @type {?} */
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new SearchItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        });
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.ref);
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dataSource.data = data;
        }));
    }
    /**
     * Destroys/Detaches the change detection reference.
     * @return {?}
     */
    ngOnDestroy() {
        this.ref.detach();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.leafColumnConfig = [];
        /** Subscribes to the current selected node value. */
        this.database.currentSelectedNodeValue.subscribe((/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (node.item !== undefined) {
                this.enableInitialText.setEnable = false;
                this.enableNodeDetails.setEnable = true;
                if (this.enableLeafNodeDetails.enable === true) {
                    this.enableLeafNodeDetails.enable = false;
                }
                this.currentNodeDetailList.clear();
                this.clearLeafTableData();
                this.printDetails(node.resultObject);
                this.ref.detectChanges();
            }
        }));
        /** Subscribes to the current selected leaf node value. */
        this.database.currentSelectedLeafNodeValue.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result.length !== 0) {
                this.enableInitialText.setEnable = false;
                this.enableNodeDetails.setEnable = true;
                this.enableLeafNodeDetails.setEnable = true;
                this.treeLeafDataList = result;
                this.ref.detectChanges();
                this.createLeafNodeDetailGrid();
            }
        }));
    }
    /**
     * Method displays the node details(other than leaf node) for the selected tree node.
     * @param {?} nodeDetailObj
     * @return {?}
     */
    printDetails(nodeDetailObj) {
        if (this.database.filteredMode === true) {
            if (this.enableLeafNodeDetails.enable === true) {
                this.enableLeafNodeDetails.enable = false;
            }
        }
        for (const i in nodeDetailObj) {
            if (nodeDetailObj[i] instanceof Object) {
                this.printDetails(nodeDetailObj[i]);
            }
            else {
                for (const [key, value] of Object.entries(nodeDetailObj)) {
                    if (value instanceof Array) {
                        delete nodeDetailObj[key];
                    }
                    this.currentNodeDetailList.set(i, nodeDetailObj[i]);
                }
            }
        }
    }
    /**
     * Sets the tree data
     * @param {?} data
     * @return {?}
     */
    set setTreeData(data) {
        this.treeData = data;
    }
    /**
     * Set action dispatcher value \@param value to Data Source.
     * @param {?} value
     * @return {?}
     */
    set setActionDispatcher(value) {
        this.actionDispatcher = value;
        this.dataSource.setActionDispatcher = value;
    }
    /**
     * Sets tree configurations \@param data to enterprise tree respective properties.
     * @param {?} data
     * @return {?}
     */
    set setTreeConfig(data) {
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
    }
    /**
     * This method sorts the tree configuration.
     * @param {?} treeConfig JSON object of tree configuration.
     * @return {?}
     */
    sortTreeConfig(treeConfig) {
        /** @type {?} */
        let enterpTreeCompKeys = Object.getOwnPropertyNames(this);
        for (let i = 0; i < enterpTreeCompKeys.length; i++) {
            for (let j = 0; j < treeConfig.length; j++) {
                if (treeConfig[j].name === enterpTreeCompKeys[i]) {
                    this[enterpTreeCompKeys[i]] = treeConfig[j];
                    break;
                }
            }
        }
        for (let j = 0; j < treeConfig.length; j++) {
            if (treeConfig[j].type === 'node_action') {
                this.database.nodeLevelMethodConfigurations.set(treeConfig[j].level, treeConfig[j].token);
                this.database.nodePropertyNames.set(treeConfig[j].level, treeConfig[j].nodePropertyName);
            }
        }
    }
    /**
     * Initialize the root level tree data to \@rootLevelNodes & root level node name to \@rootLevelNode
     * @return {?}
     */
    setTreeDataToTreeView() {
        this.treeData.getRootNodeData(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.database.rootLevelName = this.rootLevelNode;
            this.database.rootLevelNodes = result;
            this.dataSource.data = this.database.initialData();
        }));
    }
    /**
     * Append the next batch of tree data to \@rootLevelNodes
     * @return {?}
     */
    getNextBatchOfPage() {
        if (Math.floor(this.virtualScroll.measureScrollOffset('bottom')) === 0) {
            console.log(Math.floor(this.virtualScroll.measureScrollOffset('bottom')), "getNextBatchOfPage ");
            if (this.database.pagingMode === true) {
                this.treeData.getNextPage(++this.pageNumber, this.pageSize).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    if (result != null) {
                        this.treeDataList = result;
                        this.database.rootLevelName = this.rootLevelNode;
                        for (let i = 0; i < this.treeDataList.length; i++) {
                            this.database.rootLevelNodes.push(this.treeDataList[i]);
                        }
                        this.dataSource.data = this.database.initialData();
                    }
                    else {
                        return;
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    console.log(error);
                }));
            }
        }
    }
    /**
     * Filters the tree data with input of text type.
     * @param {?} filterText
     * @return {?}
     */
    filterNodes(filterText) {
        this.database.filteredMode = true;
        this.database.pagingMode = false;
        if (filterText) {
            this.enableInitialText.setEnable = true;
            this.enableNodeDetails.setEnable = false;
            this.actionDispatcher.dispatchAction(this.nodeFilteration.token, filterText).then((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                /** Set the tree control for SearchItemFlatNodes. */
                this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
                /** Set the data Source for SearchItemFlatNodes and SearchItemNode. */
                this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
                if (result.length > 0) {
                    this.createSearchedNodes(result);
                }
            }));
        }
        if (filterText === '') {
            this.enableInitialText.setEnable = true;
            this.enableNodeDetails.setEnable = false;
            this.enableLeafNodeDetails.setEnable = false;
            this.ref.detectChanges();
            this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.ref);
            this.dataSource.setActionDispatcher = this.actionDispatcher;
            this.database.pagingMode = true;
            this.setTreeDataToTreeView();
            this.treeControl.collapseAll();
        }
        this.ref.detectChanges();
    }
    /**
     * Creates tree view Nodes for searched data result.
     * @param {?} result
     * @return {?}
     */
    createSearchedNodes(result) {
        /** Generates the hierarchy code for the searched data result. */
        this.nodeCodeList = this.treeData.getSearchResultDataHierarchyCode(result);
        this.dataSource.data = this.nodeCodeList;
        /**
         * Builds the Searched result tree along with its children nodes.
         * @type {?}
         */
        const data = this.buildSearchResultTree(this.nodeCodeList, '0');
        /** Notify the change. */
        this.database.dataChange.next(data);
        this.treeControl.expandAll();
    }
    /**
     * Builds the search data structure tree view. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `SearchItemNode`.
     * @param {?} searchDataObj
     * @param {?} level
     * @return {?}
     */
    buildSearchResultTree(searchDataObj, level) {
        return searchDataObj.filter((/**
         * @param {?} o
         * @return {?}
         */
        o => ((/** @type {?} */ (o.code))).startsWith(level + '.')
            && (o.code.match(/\./g) || []).length === (level.match(/\./g) || []).length + 1)).map((/**
         * @param {?} o
         * @return {?}
         */
        o => {
            /** @type {?} */
            const node = new SearchItemNode();
            node.item = o.item;
            node.code = o.code;
            node.resultObject = o.resultObject;
            /** @type {?} */
            const children = searchDataObj.filter((/**
             * @param {?} so
             * @return {?}
             */
            so => ((/** @type {?} */ (so.code))).startsWith(level + '.')));
            if (children && children.length > 0) {
                node.children = this.buildSearchResultTree(children, o.code);
            }
            return node;
        }));
    }
    /**
     * Displays the node details in the Summary details UI section for the selected node.
     * @param {?} node
     * @return {?}
     */
    displayCurrentSearchNodeDetails(node) {
        /** Checks whether filter mode is On. */
        if (this.database.filteredMode === true) {
            for (let i = 0; i < this.nodeCodeList.length; i++) {
                if (node.item === this.nodeCodeList[i].item) {
                    /** Checks whether the node is a leaf node. */
                    if (node.level === (this.database.nodePropertyNames.size - 1)) {
                        /** @type {?} */
                        let temp = JSON.parse(JSON.stringify(this.nodeCodeList[i]));
                        delete temp.resultObject[this.leafNodeName];
                        this.database.setCurrentSelectedNode = temp;
                        /** @type {?} */
                        let result = Object.values(this.nodeCodeList[i].resultObject[this.leafNodeName]);
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
    }
    /**
     * Clears the previously rendered data in leaf detail grid.
     * @return {?}
     */
    clearLeafTableData() {
        /** @type {?} */
        let tableHeadings = document.getElementsByTagName("th");
        /** @type {?} */
        const tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
        for (let i = 0; i < tableHeadings.length;) {
            ((/** @type {?} */ (tableHeadings[i]))).remove();
        }
        /** @type {?} */
        let tableRows = document.getElementsByTagName("tr");
        for (let i = 0; i < tableRows.length;) {
            ((/** @type {?} */ (tableRows[i]))).remove();
        }
    }
    /**
     * Creates leaf node grid view.
     * @return {?}
     */
    createLeafNodeDetailGrid() {
        this.leafContainerElement = document.getElementById('leaf-container');
        /** Creates leaf node grid headings. */
        this.createLeafTableHeading();
        /** @type {?} */
        let tableDataCell = null;
        /** @type {?} */
        let tableRowData = null;
        this.counter = 0;
        for (; this.counter < this.treeLeafDataList.length; this.counter++) {
            /** Creates leaf node rows for grid view. */
            this.createLeafRows(this.counter);
            for (let moduleListKey in this.treeLeafDataList[this.counter]) {
                for (let i = 0; i < this.leafColumnConfig.length; i++) {
                    if (this.leafColumnConfig[i].name === moduleListKey) {
                        /** @type {?} */
                        var table = document.getElementsByClassName("table-row-data");
                        /** @type {?} */
                        var lastRowIndex = table.length;
                        tableRowData = (/** @type {?} */ (document.getElementsByClassName('table-row-data')[lastRowIndex - 1]));
                        tableDataCell = tableRowData.cells;
                        /** @type {?} */
                        let pos = this.leafColumnConfig[i].position;
                        /** @type {?} */
                        let value = this.treeLeafDataList[this.counter][moduleListKey];
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
    }
    /**
     * Creates leaf node grid headings.
     * @return {?}
     */
    createLeafTableHeading() {
        /** @type {?} */
        const tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
        for (let i = 0; i < this.leafColumnConfig.length; i++) {
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
            const headName = this.leafColumnConfig[i].name;
            this.thElement.innerHTML = this.leafColumnConfig[i].item;
            this.thElement.classList.add(headName);
            tableHeadDiv.appendChild(this.thElement);
        }
    }
    /**
     * Creates leaf node rows for leaf node detail grid view.
     * @param {?} value leaf data list element counter value.
     * @return {?}
     */
    createLeafRows(value) {
        this.row = document.createElement('tr');
        this.row.style.background = 'white';
        this.row.style.padding = '5px';
        this.row.classList.add("table-row-data");
        this.leafContainerElement.appendChild(this.row);
        this.styleLeafCells();
    }
    /**
     * Styles the leaf grid view cells with CSS.
     * @return {?}
     */
    styleLeafCells() {
        for (let i = 0; i < this.leafColumnConfig.length; i++) {
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
    }
    /**
     * Opens the node app in the same window.
     * @param {?} token
     * @param {?} nodeName
     * @return {?}
     */
    openAppInSameWindow(token, nodeName) {
        this.actionDispatcher.dispatchAction(token, nodeName.toLowerCase());
        this.closeDropdown();
    }
    /**
     * Opens the node app in the new tab.
     * @param {?} token
     * @param {?} nodeName
     * @return {?}
     */
    openAppInNewTab(token, nodeName) {
        this.actionDispatcher.dispatchAction(token, nodeName.toLowerCase());
        this.closeDropdown();
    }
    /**
     * Closes the open-app functionality's menu-dropdown.
     * @return {?}
     */
    closeDropdown() {
        /** @type {?} */
        let dropdownsContents = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdownsContents.length; i++) {
            /** @type {?} */
            const openDropdown = dropdownsContents[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    /**
     * Expands/Opens the open-app functionality's menu-dropdown.
     * @param {?} $event
     * @return {?}
     */
    showDropdown($event) {
        if ($event.target.matches('.app-dropdown-button')) {
            if ($event.target.offsetParent.nextSibling != null && $event.target.offsetParent.nextSibling.matches('.dropdown-content')) {
                $event.target.offsetParent.nextSibling.classList.toggle("show");
            }
            else if ($event.target.nextSibling != null && $event.target.nextSibling.matches('.dropdown-content')) {
                $event.target.nextSibling.classList.toggle("show");
            }
        }
    }
}
EnterpriseTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ao-enterprise-tree',
                template: "<div class=\"treeBgColor enterp-tree-container\">\n    <mat-toolbar class=\"treeBgColor action-bar\" *ngIf=\"enableActionToolbar.enable\">\n        <h2>{{ treeHeader }} |</h2>\n        <span> Showing all {{ treeHeader + \"s\" | lowercase }}</span>\n    </mat-toolbar>\n\n    <mat-toolbar class=\"search-toolbar\" *ngIf=\"enableSearchToolBar.enable\">\n\n        <mat-form-field>\n            <input matInput placeholder=\"Search\" (keyup)=\"filterNodes($event.target.value)\">\n        </mat-form-field>\n\n    </mat-toolbar>\n\n    <div class=\"main-tree-container\">\n        <div class=\"tree-sidenav-card\">\n\n            <cdk-virtual-scroll-viewport CdkScrollable itemSize=\"1\" id=\"example-viewport1\"\n                (scroll)=\"getNextBatchOfPage()\">\n\n                <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n\n                    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild;\" matTreeNodePadding class=\"parent-node\"\n                        matTreeNodeToggle (click)=\"displayCurrentSearchNodeDetails(node)\">\n                        <button mat-icon-button [attr.aria-label]=\"node.item\" class=\"toggle-button\" matTreeNodeToggle>\n                            <mat-icon class=\"mat-icon-rtl-mirror\">\n                                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                            </mat-icon>\n                        </button>\n                        {{node.item}}\n\n                        <div class=\"dropdown\">\n                            <button mat-icon-button class=\"app-dropdown-button\" aria-label=\"Example icon-button with a menu\"\n                                (click)=\"showDropdown($event)\">\n                                <mat-icon class=\"app-dropdown-button\">more_vert</mat-icon>\n                            </button>\n\n                            <div class=\"dropdown-content\">\n                                <a href=\"#\" (click)=\"openAppInSameWindow(openAppSameWindow.token, node.item);\">\n                                    <mat-icon>apps</mat-icon>\n                                    <span class=\"dropdown-item\">App</span>\n                                </a>\n                                <a href=\"#\" (click)=\"openAppInNewTab(openAppNewTab.token, node.item);\">\n                                    <mat-icon>launch</mat-icon>\n                                    <span class=\"dropdown-item\">Open in new window</span>\n                                </a>\n                            </div>\n                        </div>\n\n                        <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\">\n                        </mat-progress-bar>\n                    </mat-tree-node>\n                </mat-tree>\n\n            </cdk-virtual-scroll-viewport>\n        </div>\n        <div class=\"tree-details-container\">\n            <div *ngIf=\"enableInitialText.enable\" style=\"padding: 29px;\">Select a tree node to see details.</div>\n\n            <mat-card *ngIf=\"enableNodeDetails.enable\" class=\"node-detail-card\">\n                <div class=\"node-fields\">\n                    <div class=\"detail-card-title\">Summary</div>\n                    <p *ngFor=\"let element of currentNodeDetailList | keyvalue\">{{element.key}} : {{element.value}}</p>\n                </div>\n\n                <div class=\"leaf-node-details\" *ngIf=\"enableLeafNodeDetails.enable\">\n                    <div class=\"leaf-node-title\">{{leafNodeTitle}}</div>\n                    <div id=\"leaf-container\">\n                        <div class=\"th-div\"></div>\n                    </div>\n                    <!-- <p *ngFor=\"let e of currentLeafNodeDetailList | keyvalue\">{{e.value}}</p> -->\n                </div>\n            </mat-card>\n        </div>\n    </div>\n</div>",
                providers: [DynamicDatabase],
                changeDetection: ChangeDetectionStrategy.Default,
                styles: [".example-tree-progress-bar{margin-left:30px}.treeBgColor{background:#f0f1f3}span{font-weight:100;color:rgba(0,0,0,.54);font-size:15px;margin-left:2px}h2{margin-left:5px;color:#414c55;font-family:Questrial,sans-serif;font-weight:700;letter-spacing:1px}.mat-toolbar-row,.mat-toolbar-single-row{height:55px}.search-toolbar{background:#fff}.main-tree-container{width:100%;display:inline-flex;height:74vh}.tree-sidenav-card{padding:11px;width:67vw}.tree-details-container{width:34vw;background:#fff;height:74vh;margin:11px 11px 11px 0}#example-viewport1{height:74vh;width:100%;overflow-x:hidden}.mat-tree-node{font-size:15px;padding:4px;min-height:59px}.mat-tree-node:hover{cursor:pointer}.node-detail-card{margin:3% 4%;border-radius:23px;height:-webkit-fill-available;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}.node-fields{padding:inherit}.detail-card-title,.leaf-node-title{font-family:Questrial,sans-serif;letter-spacing:1px;font-weight:700;font-size:19px}.leaf-node-title{padding-left:14px}#leaf-container{padding-left:6px}p{font-family:Questrial,sans-serif;letter-spacing:1px;font-size:15px}.search-form-field{width:100%}.mat-form-field{font-size:15px}.mat-input-element{font:icon}::-webkit-scrollbar{width:7px}::-webkit-scrollbar-track{background:#f1f1f1;border-radius:13px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:#20b2aa;border-radius:13px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.app-dropdown-button{visibility:hidden}mat-tree-node:hover .app-dropdown-button{visibility:visible}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;overflow:auto;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1000}.dropdown-content a{color:#000;padding:12px 16px;text-decoration:none;display:block}.show{display:block}"]
            }] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EnterpriseTreeComponent.ctorParameters = () => [
    { type: DynamicDatabase },
    { type: TreeConfig },
    { type: ChangeDetectorRef }
];
EnterpriseTreeComponent.propDecorators = {
    virtualScroll: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false },] }]
};
/** @nocollapse */ EnterpriseTreeComponent.ngInjectableDef = ɵɵdefineInjectable({ factory: function EnterpriseTreeComponent_Factory() { return new EnterpriseTreeComponent(ɵɵinject(DynamicDatabase), ɵɵinject(TreeConfig), ɵɵinject(ChangeDetectorRef)); }, token: EnterpriseTreeComponent, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModuleSet {
}
MaterialModuleSet.decorators = [
    { type: NgModule, args: [{
                exports: [
                    A11yModule,
                    CdkStepperModule,
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatTreeModule,
                    PortalModule,
                    ScrollingModule,
                    FormsModule, ReactiveFormsModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AoTreeDataDirective {
    /**
     * @param {?} enterpTreeComp
     */
    constructor(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.enterpTreeComp.setTreeData = this.treeData;
    }
}
AoTreeDataDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-tree-data]'
            },] }
];
/** @nocollapse */
AoTreeDataDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
];
AoTreeDataDirective.propDecorators = {
    treeData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AoActionsDirective {
    /**
     * @param {?} enterpTreeComp
     */
    constructor(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.enterpTreeComp.setActionDispatcher = this.actionDispatcher;
    }
}
AoActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-actions]'
            },] }
];
/** @nocollapse */
AoActionsDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
];
AoActionsDirective.propDecorators = {
    actionDispatcher: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AoTreeConfigDirective {
    /**
     * @param {?} enterpTreeComp
     */
    constructor(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.enterpTreeComp.setTreeConfig = this.treeConfig;
    }
}
AoTreeConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-tree-config]'
            },] }
];
/** @nocollapse */
AoTreeConfigDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
];
AoTreeConfigDirective.propDecorators = {
    treeConfig: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EnterpriseTreeModule {
}
EnterpriseTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                imports: [
                    CommonModule,
                    MaterialModuleSet,
                ],
                exports: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                providers: [EnterpriseTreeComponent],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseActionDispatcher {
    constructor() { }
    /**
     * Get the token convert it and call the method requested .
     * @param {?} token
     * @param {...?} args
     * @return {?}
     */
    dispatchAction(token, ...args) {
        /** @type {?} */
        const tokenArray = token.split("-");
        /** @type {?} */
        let transformedToken = [];
        for (let i = 0; i < tokenArray.length; i++) {
            if (i !== 0) {
                transformedToken.push(tokenArray[i].charAt(0).toUpperCase() + tokenArray[i].slice(1));
            }
            else {
                transformedToken.push(tokenArray[i]);
            }
        }
        /** @type {?} */
        const methodName = transformedToken.join("");
        return this[methodName].apply(this, args);
    }
}
BaseActionDispatcher.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BaseActionDispatcher.ctorParameters = () => [];
/** @nocollapse */ BaseActionDispatcher.ngInjectableDef = ɵɵdefineInjectable({ factory: function BaseActionDispatcher_Factory() { return new BaseActionDispatcher(); }, token: BaseActionDispatcher, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionTypes {
}
ActionTypes.node = "node_action";
ActionTypes.hover = "hover_action";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EnterpriseTreeService, SearchItemNode, SearchItemFlatNode, EnterpriseTreeComponent, EnterpriseTreeModule, BaseActionDispatcher, TreeConfig, ActionsAndToolsConfig, ActionTypes, MaterialModuleSet as ɵe, AoActionsDirective as ɵc, AoTreeConfigDirective as ɵd, AoTreeDataDirective as ɵb, DynamicDatabase as ɵa };

//# sourceMappingURL=enterprise-tree.js.map