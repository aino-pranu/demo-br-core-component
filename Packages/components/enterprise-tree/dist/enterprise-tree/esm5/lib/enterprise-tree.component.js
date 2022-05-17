/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injectable, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicDatabase, DynamicDataSource } from './dynamic-data-source.component';
import { ActionsAndToolsConfig } from '../config/ActionsAndToolsConfig';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { TreeConfig } from '../config/TreeConfig';
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-data-source.component";
import * as i2 from "../config/TreeConfig";
/**
 * Node for to-do item
 */
var /**
 * Node for to-do item
 */
SearchItemNode = /** @class */ (function () {
    function SearchItemNode() {
    }
    return SearchItemNode;
}());
/**
 * Node for to-do item
 */
export { SearchItemNode };
if (false) {
    /** @type {?} */
    SearchItemNode.prototype.children;
    /** @type {?} */
    SearchItemNode.prototype.item;
    /** @type {?} */
    SearchItemNode.prototype.code;
    /** @type {?} */
    SearchItemNode.prototype.resultObject;
}
/**
 * Flat to-do item node with expandable and level information
 */
var /**
 * Flat to-do item node with expandable and level information
 */
SearchItemFlatNode = /** @class */ (function () {
    function SearchItemFlatNode() {
    }
    return SearchItemFlatNode;
}());
/**
 * Flat to-do item node with expandable and level information
 */
export { SearchItemFlatNode };
if (false) {
    /** @type {?} */
    SearchItemFlatNode.prototype.item;
    /** @type {?} */
    SearchItemFlatNode.prototype.level;
    /** @type {?} */
    SearchItemFlatNode.prototype.expandable;
    /** @type {?} */
    SearchItemFlatNode.prototype.code;
    /** @type {?} */
    SearchItemFlatNode.prototype.resultObject;
}
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
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.level; });
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.expandable; });
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.children; });
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        function (_, _nodeData) { return _nodeData.expandable; });
        this.hasNoContent = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        function (_, _nodeData) { return _nodeData.item === ''; });
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        function (node, level) {
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
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.ref);
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
        this.database.currentSelectedNodeValue.subscribe((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
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
        this.database.currentSelectedLeafNodeValue.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
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
                    for (var _b = tslib_1.__values(Object.entries(nodeDetailObj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = tslib_1.__read(_c.value, 2), key = _d[0], value = _d[1];
                        if (value instanceof Array) {
                            delete nodeDetailObj[key];
                        }
                        this.currentNodeDetailList.set(i, nodeDetailObj[i]);
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
        }
    };
    Object.defineProperty(EnterpriseTreeComponent.prototype, "setTreeData", {
        /** Sets the tree data */
        set: /**
         * Sets the tree data
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
         */
        function (value) {
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
         */
        function (data) {
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
        this.treeData.getRootNodeData(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
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
                this.treeData.getNextPage(++this.pageNumber, this.pageSize).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
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
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
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
            this.actionDispatcher.dispatchAction(this.nodeFilteration.token, filterText).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                /** Set the tree control for SearchItemFlatNodes. */
                _this.treeControl = new FlatTreeControl(_this.getLevel, _this.isExpandable);
                /** Set the data Source for SearchItemFlatNodes and SearchItemNode. */
                _this.dataSource = new MatTreeFlatDataSource(_this.treeControl, _this.treeFlattener);
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
            this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
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
        return searchDataObj.filter((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            return ((/** @type {?} */ (o.code))).startsWith(level + '.')
                && (o.code.match(/\./g) || []).length === (level.match(/\./g) || []).length + 1;
        })).map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            /** @type {?} */
            var node = new SearchItemNode();
            node.item = o.item;
            node.code = o.code;
            node.resultObject = o.resultObject;
            /** @type {?} */
            var children = searchDataObj.filter((/**
             * @param {?} so
             * @return {?}
             */
            function (so) { return ((/** @type {?} */ (so.code))).startsWith(level + '.'); }));
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
        var tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
        for (var i = 0; i < tableHeadings.length;) {
            ((/** @type {?} */ (tableHeadings[i]))).remove();
        }
        /** @type {?} */
        var tableRows = document.getElementsByTagName("tr");
        for (var i = 0; i < tableRows.length;) {
            ((/** @type {?} */ (tableRows[i]))).remove();
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
                        var table = document.getElementsByClassName("table-row-data");
                        /** @type {?} */
                        var lastRowIndex = table.length;
                        tableRowData = (/** @type {?} */ (document.getElementsByClassName('table-row-data')[lastRowIndex - 1]));
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
        var tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
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
    EnterpriseTreeComponent.ctorParameters = function () { return [
        { type: DynamicDatabase },
        { type: TreeConfig },
        { type: ChangeDetectorRef }
    ]; };
    EnterpriseTreeComponent.propDecorators = {
        virtualScroll: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false },] }]
    };
    /** @nocollapse */ EnterpriseTreeComponent.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseTreeComponent_Factory() { return new EnterpriseTreeComponent(i0.ɵɵinject(i1.DynamicDatabase), i0.ɵɵinject(i2.TreeConfig), i0.ɵɵinject(i0.ChangeDetectorRef)); }, token: EnterpriseTreeComponent, providedIn: "root" });
    return EnterpriseTreeComponent;
}());
export { EnterpriseTreeComponent };
if (false) {
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeConfig;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeDataList;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeData;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeHeader;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.searchValue;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.searchNameSuggestion;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.clearFliter;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.filterSelectedValue;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.displayFilterValue;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.getKey;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.counter;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.pageNumber;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.pageSize;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.rootLevelNode;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.totalLevels;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableActionToolbar;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableSearchToolBar;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableSearchPlaceholder;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableSearchBar;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableInitialText;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableNodeDetails;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableLeafNodeDetails;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.nodeFilteration;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.enableAppToolButton;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.openAppSameWindow;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.openAppNewTab;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.currentNodeDetailList;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.currentLeafNodeDetailList;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.leafColumnConfig;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeLeafDataList;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.leafNodeTitle;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.leafNodeName;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.nodeCodeList;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.leafContainerElement;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.row;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.tdElement;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.thElement;
    /**
     * @type {?}
     * @private
     */
    EnterpriseTreeComponent.prototype.actionDispatcher;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.flatNodeMap;
    /**
     * Map from nested node to flattened node. This helps us to keep the same object for selection
     * @type {?}
     */
    EnterpriseTreeComponent.prototype.nestedNodeMap;
    /**
     * A selected parent node to be inserted
     * @type {?}
     */
    EnterpriseTreeComponent.prototype.selectedParent;
    /**
     * The new item's name
     * @type {?}
     */
    EnterpriseTreeComponent.prototype.newItemName;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeControl;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.dataSource;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.treeFlattener;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.getLevel;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.isExpandable;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.getChildren;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.hasChild;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.hasNoContent;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.transformer;
    /** @type {?} */
    EnterpriseTreeComponent.prototype.virtualScroll;
    /**
     * @type {?}
     * @private
     */
    EnterpriseTreeComponent.prototype.database;
    /**
     * @type {?}
     * @private
     */
    EnterpriseTreeComponent.prototype.treeConfiguration;
    /**
     * @type {?}
     * @private
     */
    EnterpriseTreeComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR2hJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFtQixpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQUtsRDs7OztJQUFBO0lBS0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7Ozs7SUFKQyxrQ0FBMkI7O0lBQzNCLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLHNDQUFxQjs7Ozs7QUFJdkI7Ozs7SUFBQTtJQU1BLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7Ozs7O0lBTEMsa0NBQWE7O0lBQ2IsbUNBQWM7O0lBQ2Qsd0NBQW9COztJQUNwQixrQ0FBYTs7SUFDYiwwQ0FBcUI7O0FBSXZCO0lBa0lFLGlDQUFvQixRQUF5QixFQUFVLGlCQUE2QixFQUFVLEdBQXNCO1FBQXBILGlCQVVDO1FBVm1CLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFZO1FB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O0lBRy9CLGdEQUFtQjs7SUFHbkIsK0NBQWtCOztJQUdsQiwrQ0FBa0I7O0lBRWxCLHVEQUFxQjs7SUFDckIsc0NBQXlCOztJQUN6Qiw0Q0FBZ0M7O0lBQ2hDLDRDQUFzQzs7Ozs7SUFFdEMsbURBQTJDOztJQUUzQyw4Q0FBNEQ7Ozs7O0lBRzVELGdEQUE4RDs7Ozs7SUFHOUQsaURBQWlEOzs7OztJQUdqRCw4Q0FBaUI7O0lBRWpCLDhDQUFrQzs7SUFFbEMsNkNBQVc7O0lBRVgsZ0RBQW9FOztJQUVwRSwyQ0FBb0Q7O0lBRXBELCtDQUE2RDs7SUFFN0QsOENBQXdFOztJQUV4RSwyQ0FBOEU7O0lBRTlFLCtDQUFtRjs7SUFFbkYsOENBV0M7O0lBRUQsZ0RBQWdHOzs7OztJQUVwRiwyQ0FBaUM7Ozs7O0lBQUUsb0RBQXFDOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlRGF0YSB9IGZyb20gJy4uL2FjdGlvbi9UcmVlRGF0YSc7XG5pbXBvcnQgeyBBY3Rpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vYWN0aW9uL0FjdGlvbkRpc3BhdGNoZXInO1xuaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgRHluYW1pY0RhdGFiYXNlLCBEeW5hbWljRmxhdE5vZGUsIER5bmFtaWNEYXRhU291cmNlIH0gZnJvbSAnLi9keW5hbWljLWRhdGEtc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zQW5kVG9vbHNDb25maWcgfSBmcm9tICcuLi9jb25maWcvQWN0aW9uc0FuZFRvb2xzQ29uZmlnJztcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgTWF0VHJlZUZsYXR0ZW5lciwgTWF0VHJlZUZsYXREYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVHJlZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9UcmVlQ29uZmlnJztcblxuLyoqXG4gKiBOb2RlIGZvciB0by1kbyBpdGVtXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hJdGVtTm9kZSB7XG4gIGNoaWxkcmVuOiBTZWFyY2hJdGVtTm9kZVtdO1xuICBpdGVtOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgcmVzdWx0T2JqZWN0OiBPYmplY3Q7XG59XG5cbi8qKiBGbGF0IHRvLWRvIGl0ZW0gbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgU2VhcmNoSXRlbUZsYXROb2RlIHtcbiAgaXRlbTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBjb2RlOiBzdHJpbmc7XG4gIHJlc3VsdE9iamVjdDogT2JqZWN0O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvLWVudGVycHJpc2UtdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEeW5hbWljRGF0YWJhc2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW50ZXJwcmlzZVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgdHJlZUNvbmZpZyA9IG5ldyBBcnJheSgpO1xuXG4gIHRyZWVEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xuXG4gIHRyZWVEYXRhOiBUcmVlRGF0YTtcblxuICB0cmVlSGVhZGVyOiBzdHJpbmcgPSAnJztcblxuICAvL1NlYXJjaCBWYWx1ZVxuICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xuXG4gIC8vU2VhcmNoIE5hbWUgU3VnZ2VzdGlvblxuICBzZWFyY2hOYW1lU3VnZ2VzdGlvbiA9IFtdO1xuXG4gIC8vQ2xlYXIgRmlsdGVyXG4gIGNsZWFyRmxpdGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9BZGQgRmlsdGVyIEJ1dHRvbiBsb29wXG4gIGZpbHRlclNlbGVjdGVkVmFsdWUgPSB7fTtcblxuICAvL0Rpc3BsYXkgZmlsdGVyIGxvb3AgXG4gIGRpc3BsYXlGaWx0ZXJWYWx1ZSA9IFtdO1xuXG4gIC8vS2V5IGZvciBzZWFyY2ggZGF0YVxuICBnZXRLZXk7XG5cbiAgY291bnRlcjogbnVtYmVyID0gMDtcblxuICBwYWdlTnVtYmVyOiBudW1iZXIgPSAxO1xuXG4gIHBhZ2VTaXplOiBudW1iZXIgPSAxMjtcblxuICByb290TGV2ZWxOb2RlOiBzdHJpbmcgPSAnJztcblxuICAvL1RvdGFsIHRyZWUgbm9kZSBsZXZlbHNcbiAgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XG5cbiAgZW5hYmxlQWN0aW9uVG9vbGJhciA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVBY3Rpb25Ub29sYmFyXCIsIGZhbHNlLCAnJyk7XG4gIGVuYWJsZVNlYXJjaFRvb2xCYXIgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlU2VhcmNoVG9vbEJhclwiLCBmYWxzZSwgJycpO1xuICBlbmFibGVTZWFyY2hQbGFjZWhvbGRlciA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVTZWFyY2hQbGFjZWhvbGRlclwiLCBmYWxzZSwgJycpO1xuICBlbmFibGVTZWFyY2hCYXIgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlU2VhcmNoQmFyXCIsIGZhbHNlLCAnJyk7XG4gIGVuYWJsZUluaXRpYWxUZXh0ID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcImVuYWJsZUluaXRpYWxUZXh0XCIsIGZhbHNlLCAnJyk7XG4gIGVuYWJsZU5vZGVEZXRhaWxzID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcImVuYWJsZU5vZGVEZXRhaWxzXCIsIGZhbHNlLCAnJyk7XG4gIGVuYWJsZUxlYWZOb2RlRGV0YWlscyA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVMZWFmTm9kZURldGFpbHNcIiwgZmFsc2UsICcnKTtcbiAgbm9kZUZpbHRlcmF0aW9uID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcIm5vZGVGaWx0ZXJhdGlvblwiLCB0cnVlLCAnJyk7XG5cbiAgZW5hYmxlQXBwVG9vbEJ1dHRvbiA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVBcHBUb29sQnV0dG9uXCIsIGZhbHNlLCAnJyk7XG4gIG9wZW5BcHBTYW1lV2luZG93ID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcIm9wZW5BcHBTYW1lV2luZG93XCIsIGZhbHNlLCAnJyk7XG4gIG9wZW5BcHBOZXdUYWIgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwib3BlbkFwcE5ld1RhYlwiLCBmYWxzZSwgJycpO1xuXG4gIGN1cnJlbnROb2RlRGV0YWlsTGlzdCA9IG5ldyBNYXAoKTtcblxuICBjdXJyZW50TGVhZk5vZGVEZXRhaWxMaXN0ID0gbmV3IEFycmF5KCk7XG5cbiAgLy9MZWFmIG5vZGUgZ3JpZCB2aWV3IGNvbHVtbiBuYW1lc1xuICBsZWFmQ29sdW1uQ29uZmlnID0gbmV3IEFycmF5KCk7XG5cbiAgLy9MZWFmIG5vZGUgZGF0YVxuICB0cmVlTGVhZkRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XG5cbiAgLy9MZWFmIG5vZGUgdGl0bGUgaW4gU3VtbWFyeSBkZXRhaWxzXG4gIGxlYWZOb2RlVGl0bGUgPSAnJztcblxuICAvL0xlYWYgbm9kZSBuYW1lIGluIHJlc3VsdCBqc29uIG9iamVjdFxuICBsZWFmTm9kZU5hbWUgPSAnJztcblxuICAvL0xlYWYgbm9kZSBjb2RlIGxpc3QgZm9yIGRpc3BsYXlpbmcgcmVzdWx0IG9iamVjdCBvZiBzZWFyY2ggc2VydmljZXMgYnkgdGV4dChJbiBmaWx0ZXJlZCBNb2RlID0gT24pXG4gIG5vZGVDb2RlTGlzdCA9IFtdO1xuXG4gIGxlYWZDb250YWluZXJFbGVtZW50O1xuICByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQ7XG4gIHRkRWxlbWVudDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQ7XG4gIHRoRWxlbWVudDogSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBhY3Rpb25EaXNwYXRjaGVyOiBBY3Rpb25EaXNwYXRjaGVyO1xuXG4gIGZsYXROb2RlTWFwID0gbmV3IE1hcDxTZWFyY2hJdGVtRmxhdE5vZGUsIFNlYXJjaEl0ZW1Ob2RlPigpO1xuXG4gIC8qKiBNYXAgZnJvbSBuZXN0ZWQgbm9kZSB0byBmbGF0dGVuZWQgbm9kZS4gVGhpcyBoZWxwcyB1cyB0byBrZWVwIHRoZSBzYW1lIG9iamVjdCBmb3Igc2VsZWN0aW9uICovXG4gIG5lc3RlZE5vZGVNYXAgPSBuZXcgTWFwPFNlYXJjaEl0ZW1Ob2RlLCBTZWFyY2hJdGVtRmxhdE5vZGU+KCk7XG5cbiAgLyoqIEEgc2VsZWN0ZWQgcGFyZW50IG5vZGUgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgc2VsZWN0ZWRQYXJlbnQ6IFNlYXJjaEl0ZW1GbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbmV3IGl0ZW0ncyBuYW1lICovXG4gIG5ld0l0ZW1OYW1lID0gJyc7XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxhbnk+O1xuXG4gIGRhdGFTb3VyY2U7XG5cbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxTZWFyY2hJdGVtTm9kZSwgU2VhcmNoSXRlbUZsYXROb2RlPjtcblxuICBnZXRMZXZlbCA9IChub2RlOiBTZWFyY2hJdGVtRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IFNlYXJjaEl0ZW1GbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IFNlYXJjaEl0ZW1Ob2RlKTogU2VhcmNoSXRlbU5vZGVbXSA9PiBub2RlLmNoaWxkcmVuO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBTZWFyY2hJdGVtRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xuXG4gIGhhc05vQ29udGVudCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogU2VhcmNoSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogU2VhcmNoSXRlbU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5lc3RlZE5vZGVNYXAuZ2V0KG5vZGUpO1xuICAgIGNvbnN0IGZsYXROb2RlID0gZXhpc3RpbmdOb2RlICYmIGV4aXN0aW5nTm9kZS5pdGVtID09PSBub2RlLml0ZW1cbiAgICAgID8gZXhpc3RpbmdOb2RlXG4gICAgICA6IG5ldyBTZWFyY2hJdGVtRmxhdE5vZGUoKTtcbiAgICBmbGF0Tm9kZS5pdGVtID0gbm9kZS5pdGVtO1xuICAgIGZsYXROb2RlLmxldmVsID0gbGV2ZWw7XG4gICAgZmxhdE5vZGUuZXhwYW5kYWJsZSA9ICEhbm9kZS5jaGlsZHJlbjtcbiAgICB0aGlzLmZsYXROb2RlTWFwLnNldChmbGF0Tm9kZSwgbm9kZSk7XG4gICAgdGhpcy5uZXN0ZWROb2RlTWFwLnNldChub2RlLCBmbGF0Tm9kZSk7XG4gICAgcmV0dXJuIGZsYXROb2RlO1xuICB9XG5cbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiBmYWxzZSB9KSB2aXJ0dWFsU2Nyb2xsOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlLCBwcml2YXRlIHRyZWVDb25maWd1cmF0aW9uOiBUcmVlQ29uZmlnLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLmRhdGFiYXNlLCB0aGlzLnJlZik7XG5cbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSwgdGhpcy5nZXRDaGlsZHJlbik7XG5cbiAgICB0aGlzLmRhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERlc3Ryb3lzL0RldGFjaGVzIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHJlZmVyZW5jZS4gKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGVhZkNvbHVtbkNvbmZpZyA9IFtdO1xuXG4gICAgLyoqIFN1YnNjcmliZXMgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgbm9kZSB2YWx1ZS4gKi9cbiAgICB0aGlzLmRhdGFiYXNlLmN1cnJlbnRTZWxlY3RlZE5vZGVWYWx1ZS5zdWJzY3JpYmUoKG5vZGUpID0+IHtcblxuICAgICAgaWYgKG5vZGUuaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlSW5pdGlhbFRleHQuc2V0RW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlTm9kZURldGFpbHMuc2V0RW5hYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVMZWFmTm9kZURldGFpbHMuZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVMZWFmTm9kZURldGFpbHMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlRGV0YWlsTGlzdC5jbGVhcigpO1xuICAgICAgICB0aGlzLmNsZWFyTGVhZlRhYmxlRGF0YSgpO1xuXG4gICAgICAgIHRoaXMucHJpbnREZXRhaWxzKG5vZGUucmVzdWx0T2JqZWN0KTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqIFN1YnNjcmliZXMgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgbGVhZiBub2RlIHZhbHVlLiAqL1xuICAgIHRoaXMuZGF0YWJhc2UuY3VycmVudFNlbGVjdGVkTGVhZk5vZGVWYWx1ZS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLmVuYWJsZUluaXRpYWxUZXh0LnNldEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZU5vZGVEZXRhaWxzLnNldEVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5hYmxlTGVhZk5vZGVEZXRhaWxzLnNldEVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHJlZUxlYWZEYXRhTGlzdCA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxlYWZOb2RlRGV0YWlsR3JpZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBkaXNwbGF5cyB0aGUgbm9kZSBkZXRhaWxzKG90aGVyIHRoYW4gbGVhZiBub2RlKSBmb3IgdGhlIHNlbGVjdGVkIHRyZWUgbm9kZS4gKi9cbiAgcHJpbnREZXRhaWxzKG5vZGVEZXRhaWxPYmopIHtcblxuICAgIGlmICh0aGlzLmRhdGFiYXNlLmZpbHRlcmVkTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlTGVhZk5vZGVEZXRhaWxzLmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmVuYWJsZUxlYWZOb2RlRGV0YWlscy5lbmFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gbm9kZURldGFpbE9iaikge1xuICAgICAgaWYgKG5vZGVEZXRhaWxPYmpbaV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5wcmludERldGFpbHMobm9kZURldGFpbE9ialtpXSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG5vZGVEZXRhaWxPYmopKSB7XG4gICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuICAgICAgICAgICAgZGVsZXRlIG5vZGVEZXRhaWxPYmpba2V5XTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlRGV0YWlsTGlzdC5zZXQoaSwgbm9kZURldGFpbE9ialtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB0cmVlIGRhdGEgKi9cbiAgc2V0IHNldFRyZWVEYXRhKGRhdGEpIHtcbiAgICB0aGlzLnRyZWVEYXRhID0gZGF0YTtcbiAgfVxuXG4gIC8qKiBTZXQgYWN0aW9uIGRpc3BhdGNoZXIgdmFsdWUgQHBhcmFtIHZhbHVlIHRvIERhdGEgU291cmNlLiAqL1xuICBwdWJsaWMgc2V0IHNldEFjdGlvbkRpc3BhdGNoZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlciA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3Rpb25EaXNwYXRjaGVyID0gdmFsdWU7XG4gIH1cblxuICAvKiogU2V0cyB0cmVlIGNvbmZpZ3VyYXRpb25zIEBwYXJhbSBkYXRhIHRvIGVudGVycHJpc2UgdHJlZSByZXNwZWN0aXZlIHByb3BlcnRpZXMuICovXG4gIHNldCBzZXRUcmVlQ29uZmlnKGRhdGEpIHtcblxuICAgIGlmIChkYXRhLnBhZ2VTaXplICE9IHVuZGVmaW5lZCB8fCBkYXRhLnBhZ2VTaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMucGFnZVNpemUgPSBkYXRhLnBhZ2VTaXplO1xuICAgIH1cblxuICAgIHRoaXMudHJlZUhlYWRlciA9IGRhdGEudHJlZUhlYWRlcjtcbiAgICB0aGlzLnRyZWVDb25maWcgPSBkYXRhLmFjdGlvbnNBbmRUb29sc0FycjtcbiAgICB0aGlzLnJvb3RMZXZlbE5vZGUgPSBkYXRhLnJvb3RMZXZlbE5vZGU7XG4gICAgdGhpcy50b3RhbExldmVscyA9IGRhdGEudG90YWxMZXZlbHM7XG4gICAgdGhpcy5sZWFmTm9kZVRpdGxlID0gZGF0YS5sZWFmTm9kZVRpdGxlO1xuICAgIHRoaXMubGVhZk5vZGVOYW1lID0gZGF0YS5sZWFmTm9kZU5hbWU7XG4gICAgdGhpcy50cmVlQ29uZmlndXJhdGlvbi5zZXRUb3RhbExldmVscyA9IGRhdGEudG90YWxMZXZlbHM7XG4gICAgdGhpcy5sZWFmQ29sdW1uQ29uZmlnID0gZGF0YS5sZWFmQ29sdW1uQ29uZmlnQXJyO1xuXG4gICAgdGhpcy5zb3J0VHJlZUNvbmZpZyh0aGlzLnRyZWVDb25maWcpO1xuICAgIHRoaXMuc2V0VHJlZURhdGFUb1RyZWVWaWV3KCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc29ydHMgdGhlIHRyZWUgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIHRyZWVDb25maWcgSlNPTiBvYmplY3Qgb2YgdHJlZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgc29ydFRyZWVDb25maWcodHJlZUNvbmZpZykge1xuICAgIGxldCBlbnRlcnBUcmVlQ29tcEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50ZXJwVHJlZUNvbXBLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyZWVDb25maWcubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRyZWVDb25maWdbal0ubmFtZSA9PT0gZW50ZXJwVHJlZUNvbXBLZXlzW2ldKSB7XG4gICAgICAgICAgdGhpc1tlbnRlcnBUcmVlQ29tcEtleXNbaV1dID0gdHJlZUNvbmZpZ1tqXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJlZUNvbmZpZy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHRyZWVDb25maWdbal0udHlwZSA9PT0gJ25vZGVfYWN0aW9uJykge1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2Uubm9kZUxldmVsTWV0aG9kQ29uZmlndXJhdGlvbnMuc2V0KHRyZWVDb25maWdbal0ubGV2ZWwsIHRyZWVDb25maWdbal0udG9rZW4pO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2Uubm9kZVByb3BlcnR5TmFtZXMuc2V0KHRyZWVDb25maWdbal0ubGV2ZWwsIHRyZWVDb25maWdbal0ubm9kZVByb3BlcnR5TmFtZSk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKiBcbiAgICogSW5pdGlhbGl6ZSB0aGUgcm9vdCBsZXZlbCB0cmVlIGRhdGEgdG8gQHJvb3RMZXZlbE5vZGVzICYgcm9vdCBsZXZlbCBub2RlIG5hbWUgdG8gQHJvb3RMZXZlbE5vZGUgKi9cbiAgc2V0VHJlZURhdGFUb1RyZWVWaWV3KCkge1xuXG4gICAgdGhpcy50cmVlRGF0YS5nZXRSb290Tm9kZURhdGEodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VTaXplKS50aGVuKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5yb290TGV2ZWxOYW1lID0gdGhpcy5yb290TGV2ZWxOb2RlO1xuICAgICAgICB0aGlzLmRhdGFiYXNlLnJvb3RMZXZlbE5vZGVzID0gcmVzdWx0O1xuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhYmFzZS5pbml0aWFsRGF0YSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBuZXh0IGJhdGNoIG9mIHRyZWUgZGF0YSB0byBAcm9vdExldmVsTm9kZXMgKi9cbiAgZ2V0TmV4dEJhdGNoT2ZQYWdlKCkge1xuXG4gICAgaWYgKE1hdGguZmxvb3IodGhpcy52aXJ0dWFsU2Nyb2xsLm1lYXN1cmVTY3JvbGxPZmZzZXQoJ2JvdHRvbScpKSA9PT0gMCkge1xuXG4gICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKHRoaXMudmlydHVhbFNjcm9sbC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCdib3R0b20nKSksIFwiZ2V0TmV4dEJhdGNoT2ZQYWdlIFwiKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YWJhc2UucGFnaW5nTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgIHRoaXMudHJlZURhdGEuZ2V0TmV4dFBhZ2UoKyt0aGlzLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVNpemUpLnRoZW4oXG4gICAgICAgICAgcmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMudHJlZURhdGFMaXN0ID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2Uucm9vdExldmVsTmFtZSA9IHRoaXMucm9vdExldmVsTm9kZTtcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJlZURhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5yb290TGV2ZWxOb2Rlcy5wdXNoKHRoaXMudHJlZURhdGFMaXN0W2ldKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhYmFzZS5pbml0aWFsRGF0YSgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBGaWx0ZXJzIHRoZSB0cmVlIGRhdGEgd2l0aCBpbnB1dCBvZiB0ZXh0IHR5cGUuICovXG4gIGZpbHRlck5vZGVzKGZpbHRlclRleHQ6IHN0cmluZykge1xuXG4gICAgdGhpcy5kYXRhYmFzZS5maWx0ZXJlZE1vZGUgPSB0cnVlO1xuICAgIHRoaXMuZGF0YWJhc2UucGFnaW5nTW9kZSA9IGZhbHNlO1xuXG4gICAgaWYgKGZpbHRlclRleHQpIHtcbiAgICAgIHRoaXMuZW5hYmxlSW5pdGlhbFRleHQuc2V0RW5hYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5hYmxlTm9kZURldGFpbHMuc2V0RW5hYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0aGlzLm5vZGVGaWx0ZXJhdGlvbi50b2tlbiwgZmlsdGVyVGV4dCkudGhlbihcbiAgICAgICAgcmVzdWx0ID0+IHtcblxuICAgICAgICAgIC8qKiBTZXQgdGhlIHRyZWUgY29udHJvbCBmb3IgU2VhcmNoSXRlbUZsYXROb2Rlcy4gKi9cbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxTZWFyY2hJdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcblxuICAgICAgICAgIC8qKiBTZXQgdGhlIGRhdGEgU291cmNlIGZvciBTZWFyY2hJdGVtRmxhdE5vZGVzIGFuZCBTZWFyY2hJdGVtTm9kZS4gKi9cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZWFyY2hlZE5vZGVzKHJlc3VsdCk7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyVGV4dCA9PT0gJycpIHtcbiAgICAgIHRoaXMuZW5hYmxlSW5pdGlhbFRleHQuc2V0RW5hYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW5hYmxlTm9kZURldGFpbHMuc2V0RW5hYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmVuYWJsZUxlYWZOb2RlRGV0YWlscy5zZXRFbmFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRHluYW1pY0RhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy5kYXRhYmFzZSwgdGhpcy5yZWYpO1xuXG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aW9uRGlzcGF0Y2hlciA9IHRoaXMuYWN0aW9uRGlzcGF0Y2hlcjtcblxuICAgICAgdGhpcy5kYXRhYmFzZS5wYWdpbmdNb2RlID0gdHJ1ZTtcblxuICAgICAgdGhpcy5zZXRUcmVlRGF0YVRvVHJlZVZpZXcoKTtcbiAgICAgIHRoaXMudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgdHJlZSB2aWV3IE5vZGVzIGZvciBzZWFyY2hlZCBkYXRhIHJlc3VsdC4gKi9cbiAgY3JlYXRlU2VhcmNoZWROb2RlcyhyZXN1bHQpIHtcblxuICAgIC8qKiBHZW5lcmF0ZXMgdGhlIGhpZXJhcmNoeSBjb2RlIGZvciB0aGUgc2VhcmNoZWQgZGF0YSByZXN1bHQuICovXG4gICAgdGhpcy5ub2RlQ29kZUxpc3QgPSB0aGlzLnRyZWVEYXRhLmdldFNlYXJjaFJlc3VsdERhdGFIaWVyYXJjaHlDb2RlKHJlc3VsdCk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMubm9kZUNvZGVMaXN0O1xuXG4gICAgLyoqIEJ1aWxkcyB0aGUgU2VhcmNoZWQgcmVzdWx0IHRyZWUgYWxvbmcgd2l0aCBpdHMgY2hpbGRyZW4gbm9kZXMuICovXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRTZWFyY2hSZXN1bHRUcmVlKHRoaXMubm9kZUNvZGVMaXN0LCAnMCcpO1xuXG4gICAgLyoqIE5vdGlmeSB0aGUgY2hhbmdlLiAqL1xuICAgIHRoaXMuZGF0YWJhc2UuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuXG4gICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAqIEJ1aWxkcyB0aGUgc2VhcmNoIGRhdGEgc3RydWN0dXJlIHRyZWUgdmlldy4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICogVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbGlzdCBvZiBgU2VhcmNoSXRlbU5vZGVgLlxuICAqL1xuICBidWlsZFNlYXJjaFJlc3VsdFRyZWUoc2VhcmNoRGF0YU9iajogYW55W10sIGxldmVsOiBzdHJpbmcpOiBTZWFyY2hJdGVtTm9kZVtdIHtcblxuICAgIHJldHVybiBzZWFyY2hEYXRhT2JqLmZpbHRlcihvID0+XG4gICAgICAoPHN0cmluZz5vLmNvZGUpLnN0YXJ0c1dpdGgobGV2ZWwgKyAnLicpXG4gICAgICAmJiAoby5jb2RlLm1hdGNoKC9cXC4vZykgfHwgW10pLmxlbmd0aCA9PT0gKGxldmVsLm1hdGNoKC9cXC4vZykgfHwgW10pLmxlbmd0aCArIDEpLm1hcChvID0+IHtcblxuICAgICAgICBjb25zdCBub2RlID0gbmV3IFNlYXJjaEl0ZW1Ob2RlKCk7XG4gICAgICAgIG5vZGUuaXRlbSA9IG8uaXRlbTtcbiAgICAgICAgbm9kZS5jb2RlID0gby5jb2RlO1xuICAgICAgICBub2RlLnJlc3VsdE9iamVjdCA9IG8ucmVzdWx0T2JqZWN0O1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gc2VhcmNoRGF0YU9iai5maWx0ZXIoc28gPT4gKDxzdHJpbmc+c28uY29kZSkuc3RhcnRzV2l0aChsZXZlbCArICcuJykpO1xuXG4gICAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRTZWFyY2hSZXN1bHRUcmVlKGNoaWxkcmVuLCBvLmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogRGlzcGxheXMgdGhlIG5vZGUgZGV0YWlscyBpbiB0aGUgU3VtbWFyeSBkZXRhaWxzIFVJIHNlY3Rpb24gZm9yIHRoZSBzZWxlY3RlZCBub2RlLiAqL1xuICBkaXNwbGF5Q3VycmVudFNlYXJjaE5vZGVEZXRhaWxzKG5vZGUpIHtcblxuICAgIC8qKiBDaGVja3Mgd2hldGhlciBmaWx0ZXIgbW9kZSBpcyBPbi4gKi9cbiAgICBpZiAodGhpcy5kYXRhYmFzZS5maWx0ZXJlZE1vZGUgPT09IHRydWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlQ29kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5vZGUuaXRlbSA9PT0gdGhpcy5ub2RlQ29kZUxpc3RbaV0uaXRlbSkge1xuXG4gICAgICAgICAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBub2RlIGlzIGEgbGVhZiBub2RlLiAqL1xuICAgICAgICAgIGlmIChub2RlLmxldmVsID09PSAodGhpcy5kYXRhYmFzZS5ub2RlUHJvcGVydHlOYW1lcy5zaXplIC0gMSkpIHtcblxuICAgICAgICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubm9kZUNvZGVMaXN0W2ldKSk7XG4gICAgICAgICAgICBkZWxldGUgdGVtcC5yZXN1bHRPYmplY3RbdGhpcy5sZWFmTm9kZU5hbWVdO1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5zZXRDdXJyZW50U2VsZWN0ZWROb2RlID0gdGVtcDtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IE9iamVjdC52YWx1ZXModGhpcy5ub2RlQ29kZUxpc3RbaV0ucmVzdWx0T2JqZWN0W3RoaXMubGVhZk5vZGVOYW1lXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLnNldEN1cnJlbnRTZWxlY3RlZExlYWZOb2RlID0gcmVzdWx0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnJlc3VsdE9iamVjdCA9IHRoaXMubm9kZUNvZGVMaXN0W2ldLnJlc3VsdE9iamVjdDtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2Uuc2V0Q3VycmVudFNlbGVjdGVkTm9kZSA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YWJhc2Uuc2V0Q3VycmVudFNlbGVjdGVkTm9kZSA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFycyB0aGUgcHJldmlvdXNseSByZW5kZXJlZCBkYXRhIGluIGxlYWYgZGV0YWlsIGdyaWQuICovXG4gIGNsZWFyTGVhZlRhYmxlRGF0YSgpIHtcblxuICAgIGxldCB0YWJsZUhlYWRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aFwiKTtcbiAgICBjb25zdCB0YWJsZUhlYWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGgtZGl2XCIpWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZUhlYWRpbmdzLmxlbmd0aDspIHtcbiAgICAgICh0YWJsZUhlYWRpbmdzW2ldIGFzIEhUTUxFbGVtZW50KS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgdGFibGVSb3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlUm93cy5sZW5ndGg7KSB7XG4gICAgICAodGFibGVSb3dzW2ldIGFzIEhUTUxFbGVtZW50KS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3JlYXRlcyBsZWFmIG5vZGUgZ3JpZCB2aWV3LiAqL1xuICBjcmVhdGVMZWFmTm9kZURldGFpbEdyaWQoKSB7XG4gICAgdGhpcy5sZWFmQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFmLWNvbnRhaW5lcicpO1xuXG4gICAgLyoqIENyZWF0ZXMgbGVhZiBub2RlIGdyaWQgaGVhZGluZ3MuICovXG4gICAgdGhpcy5jcmVhdGVMZWFmVGFibGVIZWFkaW5nKCk7XG5cbiAgICBsZXQgdGFibGVEYXRhQ2VsbCA9IG51bGw7XG4gICAgbGV0IHRhYmxlUm93RGF0YSA9IG51bGw7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgIGZvciAoOyB0aGlzLmNvdW50ZXIgPCB0aGlzLnRyZWVMZWFmRGF0YUxpc3QubGVuZ3RoOyB0aGlzLmNvdW50ZXIrKykge1xuXG4gICAgICAvKiogQ3JlYXRlcyBsZWFmIG5vZGUgcm93cyBmb3IgZ3JpZCB2aWV3LiAqL1xuICAgICAgdGhpcy5jcmVhdGVMZWFmUm93cyh0aGlzLmNvdW50ZXIpO1xuXG4gICAgICBmb3IgKGxldCBtb2R1bGVMaXN0S2V5IGluIHRoaXMudHJlZUxlYWZEYXRhTGlzdFt0aGlzLmNvdW50ZXJdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZWFmQ29sdW1uQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5sZWFmQ29sdW1uQ29uZmlnW2ldLm5hbWUgPT09IG1vZHVsZUxpc3RLZXkpIHtcblxuICAgICAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxlLXJvdy1kYXRhXCIpO1xuXG4gICAgICAgICAgICB2YXIgbGFzdFJvd0luZGV4ID0gdGFibGUubGVuZ3RoO1xuXG4gICAgICAgICAgICB0YWJsZVJvd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJsZS1yb3ctZGF0YScpW2xhc3RSb3dJbmRleCAtIDFdIGFzIEhUTUxUYWJsZVJvd0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIHRhYmxlRGF0YUNlbGwgPSB0YWJsZVJvd0RhdGEuY2VsbHM7XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmxlYWZDb2x1bW5Db25maWdbaV0ucG9zaXRpb247XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudHJlZUxlYWZEYXRhTGlzdFt0aGlzLmNvdW50ZXJdW21vZHVsZUxpc3RLZXldO1xuXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsW3Bvc10uaW5uZXJIVE1MID0gdmFsdWU7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLnJpZ2h0ID0gMCArIFwicHhcIjtcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS53aWR0aCA9IDUgKyAnJSc7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwcHhcIjtcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGxlYWYgbm9kZSBncmlkIGhlYWRpbmdzLlxuICAqL1xuICBjcmVhdGVMZWFmVGFibGVIZWFkaW5nKCk6IHZvaWQge1xuICAgIGNvbnN0IHRhYmxlSGVhZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aC1kaXZcIilbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVhZkNvbHVtbkNvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50aEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2RkZCc7XG4gICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiUXVlc3RyaWFsXCIsIHNhbnMtc2VyaWYnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9ICcxcHgnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwuNTQpJztcbiAgICAgIC8vIHRoaXMudGhFbGVtZW50LndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLndpZHRoID0gNSArICclJztcblxuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmxlYWZDb2x1bW5Db25maWdbaV0ubmFtZTtcbiAgICAgIHRoaXMudGhFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGVhZkNvbHVtbkNvbmZpZ1tpXS5pdGVtO1xuICAgICAgdGhpcy50aEVsZW1lbnQuY2xhc3NMaXN0LmFkZChoZWFkTmFtZSk7XG5cbiAgICAgIHRhYmxlSGVhZERpdi5hcHBlbmRDaGlsZCh0aGlzLnRoRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbGVhZiBub2RlIHJvd3MgZm9yIGxlYWYgbm9kZSBkZXRhaWwgZ3JpZCB2aWV3LlxuICAgKiBAcGFyYW0gdmFsdWUgbGVhZiBkYXRhIGxpc3QgZWxlbWVudCBjb3VudGVyIHZhbHVlLlxuICAgKi9cbiAgY3JlYXRlTGVhZlJvd3ModmFsdWUpIHtcbiAgICB0aGlzLnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICB0aGlzLnJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICB0aGlzLnJvdy5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG4gICAgdGhpcy5yb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlLXJvdy1kYXRhXCIpO1xuXG4gICAgdGhpcy5sZWFmQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvdyk7XG4gICAgdGhpcy5zdHlsZUxlYWZDZWxscygpO1xuICB9XG5cbiAgLyoqIFN0eWxlcyB0aGUgbGVhZiBncmlkIHZpZXcgY2VsbHMgd2l0aCBDU1MuICovXG4gIHN0eWxlTGVhZkNlbGxzKCkge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlYWZDb2x1bW5Db25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudGRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAnMTBweCc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzEwcHgnO1xuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2RkZCc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiUXVlc3RyaWFsXCIsIHNhbnMtc2VyaWYnO1xuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICczOXB4JztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLndpZHRoID0gNSArICclJztcbiAgICAgIHRoaXMucm93LmFwcGVuZENoaWxkKHRoaXMudGRFbGVtZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgbm9kZSBhcHAgaW4gdGhlIHNhbWUgd2luZG93LiAqL1xuICBvcGVuQXBwSW5TYW1lV2luZG93KHRva2VuLCBub2RlTmFtZSkge1xuXG4gICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKHRva2VuLCBub2RlTmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBub2RlIGFwcCBpbiB0aGUgbmV3IHRhYi4gKi9cbiAgcHVibGljIG9wZW5BcHBJbk5ld1RhYih0b2tlbiwgbm9kZU5hbWUpIHtcblxuICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0b2tlbiwgbm9kZU5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgfVxuXG4gIC8qKiBDbG9zZXMgdGhlIG9wZW4tYXBwIGZ1bmN0aW9uYWxpdHkncyBtZW51LWRyb3Bkb3duLiAqL1xuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIGxldCBkcm9wZG93bnNDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcGRvd25zQ29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc0NvbnRlbnRzW2ldO1xuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBFeHBhbmRzL09wZW5zIHRoZSBvcGVuLWFwcCBmdW5jdGlvbmFsaXR5J3MgbWVudS1kcm9wZG93bi4gKi9cbiAgcHVibGljIHNob3dEcm9wZG93bigkZXZlbnQpIHtcblxuICAgIGlmICgkZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5hcHAtZHJvcGRvd24tYnV0dG9uJykpIHtcblxuICAgICAgaWYgKCRldmVudC50YXJnZXQub2Zmc2V0UGFyZW50Lm5leHRTaWJsaW5nICE9IG51bGwgJiYgJGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQubmV4dFNpYmxpbmcubWF0Y2hlcygnLmRyb3Bkb3duLWNvbnRlbnQnKSkge1xuICAgICAgICAkZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcblxuICAgICAgfSBlbHNlIGlmICgkZXZlbnQudGFyZ2V0Lm5leHRTaWJsaW5nICE9IG51bGwgJiYgJGV2ZW50LnRhcmdldC5uZXh0U2libGluZy5tYXRjaGVzKCcuZHJvcGRvd24tY29udGVudCcpKSB7XG4gICAgICAgICRldmVudC50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59ICJdfQ==