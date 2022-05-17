/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class SearchItemNode {
}
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
export class SearchItemFlatNode {
}
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
export class EnterpriseTreeComponent {
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
/** @nocollapse */ EnterpriseTreeComponent.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseTreeComponent_Factory() { return new EnterpriseTreeComponent(i0.ɵɵinject(i1.DynamicDatabase), i0.ɵɵinject(i2.TreeConfig), i0.ɵɵinject(i0.ChangeDetectorRef)); }, token: EnterpriseTreeComponent, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHaEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQW1CLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBS2xELE1BQU0sT0FBTyxjQUFjO0NBSzFCOzs7SUFKQyxrQ0FBMkI7O0lBQzNCLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLHNDQUFxQjs7Ozs7QUFJdkIsTUFBTSxPQUFPLGtCQUFrQjtDQU05Qjs7O0lBTEMsa0NBQWE7O0lBQ2IsbUNBQWM7O0lBQ2Qsd0NBQW9COztJQUNwQixrQ0FBYTs7SUFDYiwwQ0FBcUI7O0FBY3ZCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQXdIbEMsWUFBb0IsUUFBeUIsRUFBVSxpQkFBNkIsRUFBVSxHQUFzQjtRQUFoRyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBdEhwSCxlQUFVLEdBQUcsSUFBSSxLQUFLLEVB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O0lBQ2xGLHNEQUFrRjs7SUFDbEYsMERBQTBGOztJQUMxRixrREFBMEU7O0lBQzFFLG9EQUE4RTs7SUFDOUUsb0RBQThFOztJQUM5RSx3REFBc0Y7O0lBQ3RGLGtEQUF5RTs7SUFFekUsc0RBQWtGOztJQUNsRixvREFBOEU7O0lBQzlFLGdEQUFzRTs7SUFFdEUsd0RBQWtDOztJQUVsQyw0REFBd0M7O0lBR3hDLG1EQUErQjs7SUFHL0IsbURBQStCOztJQUcvQixnREFBbUI7O0lBR25CLCtDQUFrQjs7SUFHbEIsK0NBQWtCOztJQUVsQix1REFBcUI7O0lBQ3JCLHNDQUF5Qjs7SUFDekIsNENBQWdDOztJQUNoQyw0Q0FBc0M7Ozs7O0lBRXRDLG1EQUEyQzs7SUFFM0MsOENBQTREOzs7OztJQUc1RCxnREFBOEQ7Ozs7O0lBRzlELGlEQUFpRDs7Ozs7SUFHakQsOENBQWlCOztJQUVqQiw4Q0FBa0M7O0lBRWxDLDZDQUFXOztJQUVYLGdEQUFvRTs7SUFFcEUsMkNBQW9EOztJQUVwRCwrQ0FBNkQ7O0lBRTdELDhDQUF3RTs7SUFFeEUsMkNBQThFOztJQUU5RSwrQ0FBbUY7O0lBRW5GLDhDQVdDOztJQUVELGdEQUFnRzs7Ozs7SUFFcEYsMkNBQWlDOzs7OztJQUFFLG9EQUFxQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0YWJsZSwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZURhdGEgfSBmcm9tICcuLi9hY3Rpb24vVHJlZURhdGEnO1xuaW1wb3J0IHsgQWN0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2FjdGlvbi9BY3Rpb25EaXNwYXRjaGVyJztcbmltcG9ydCB7IEZsYXRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7IER5bmFtaWNEYXRhYmFzZSwgRHluYW1pY0ZsYXROb2RlLCBEeW5hbWljRGF0YVNvdXJjZSB9IGZyb20gJy4vZHluYW1pYy1kYXRhLXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc0FuZFRvb2xzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL0FjdGlvbnNBbmRUb29sc0NvbmZpZyc7XG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IE1hdFRyZWVGbGF0dGVuZXIsIE1hdFRyZWVGbGF0RGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRyZWVDb25maWcgfSBmcm9tICcuLi9jb25maWcvVHJlZUNvbmZpZyc7XG5cbi8qKlxuICogTm9kZSBmb3IgdG8tZG8gaXRlbVxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoSXRlbU5vZGUge1xuICBjaGlsZHJlbjogU2VhcmNoSXRlbU5vZGVbXTtcbiAgaXRlbTogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmc7XG4gIHJlc3VsdE9iamVjdDogT2JqZWN0O1xufVxuXG4vKiogRmxhdCB0by1kbyBpdGVtIG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEl0ZW1GbGF0Tm9kZSB7XG4gIGl0ZW06IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgY29kZTogc3RyaW5nO1xuICByZXN1bHRPYmplY3Q6IE9iamVjdDtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhby1lbnRlcnByaXNlLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRHluYW1pY0RhdGFiYXNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVudGVycHJpc2VUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHRyZWVDb25maWcgPSBuZXcgQXJyYXkoKTtcblxuICB0cmVlRGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcblxuICB0cmVlRGF0YTogVHJlZURhdGE7XG5cbiAgdHJlZUhlYWRlcjogc3RyaW5nID0gJyc7XG5cbiAgLy9TZWFyY2ggVmFsdWVcbiAgc2VhcmNoVmFsdWU6IHN0cmluZztcblxuICAvL1NlYXJjaCBOYW1lIFN1Z2dlc3Rpb25cbiAgc2VhcmNoTmFtZVN1Z2dlc3Rpb24gPSBbXTtcblxuICAvL0NsZWFyIEZpbHRlclxuICBjbGVhckZsaXRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vQWRkIEZpbHRlciBCdXR0b24gbG9vcFxuICBmaWx0ZXJTZWxlY3RlZFZhbHVlID0ge307XG5cbiAgLy9EaXNwbGF5IGZpbHRlciBsb29wIFxuICBkaXNwbGF5RmlsdGVyVmFsdWUgPSBbXTtcblxuICAvL0tleSBmb3Igc2VhcmNoIGRhdGFcbiAgZ2V0S2V5O1xuXG4gIGNvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgcGFnZU51bWJlcjogbnVtYmVyID0gMTtcblxuICBwYWdlU2l6ZTogbnVtYmVyID0gMTI7XG5cbiAgcm9vdExldmVsTm9kZTogc3RyaW5nID0gJyc7XG5cbiAgLy9Ub3RhbCB0cmVlIG5vZGUgbGV2ZWxzXG4gIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSAwO1xuXG4gIGVuYWJsZUFjdGlvblRvb2xiYXIgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlQWN0aW9uVG9vbGJhclwiLCBmYWxzZSwgJycpO1xuICBlbmFibGVTZWFyY2hUb29sQmFyID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcImVuYWJsZVNlYXJjaFRvb2xCYXJcIiwgZmFsc2UsICcnKTtcbiAgZW5hYmxlU2VhcmNoUGxhY2Vob2xkZXIgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlU2VhcmNoUGxhY2Vob2xkZXJcIiwgZmFsc2UsICcnKTtcbiAgZW5hYmxlU2VhcmNoQmFyID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcImVuYWJsZVNlYXJjaEJhclwiLCBmYWxzZSwgJycpO1xuICBlbmFibGVJbml0aWFsVGV4dCA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVJbml0aWFsVGV4dFwiLCBmYWxzZSwgJycpO1xuICBlbmFibGVOb2RlRGV0YWlscyA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJlbmFibGVOb2RlRGV0YWlsc1wiLCBmYWxzZSwgJycpO1xuICBlbmFibGVMZWFmTm9kZURldGFpbHMgPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlTGVhZk5vZGVEZXRhaWxzXCIsIGZhbHNlLCAnJyk7XG4gIG5vZGVGaWx0ZXJhdGlvbiA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJub2RlRmlsdGVyYXRpb25cIiwgdHJ1ZSwgJycpO1xuXG4gIGVuYWJsZUFwcFRvb2xCdXR0b24gPSBuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKFwiZW5hYmxlQXBwVG9vbEJ1dHRvblwiLCBmYWxzZSwgJycpO1xuICBvcGVuQXBwU2FtZVdpbmRvdyA9IG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcoXCJvcGVuQXBwU2FtZVdpbmRvd1wiLCBmYWxzZSwgJycpO1xuICBvcGVuQXBwTmV3VGFiID0gbmV3IEFjdGlvbnNBbmRUb29sc0NvbmZpZyhcIm9wZW5BcHBOZXdUYWJcIiwgZmFsc2UsICcnKTtcblxuICBjdXJyZW50Tm9kZURldGFpbExpc3QgPSBuZXcgTWFwKCk7XG5cbiAgY3VycmVudExlYWZOb2RlRGV0YWlsTGlzdCA9IG5ldyBBcnJheSgpO1xuXG4gIC8vTGVhZiBub2RlIGdyaWQgdmlldyBjb2x1bW4gbmFtZXNcbiAgbGVhZkNvbHVtbkNvbmZpZyA9IG5ldyBBcnJheSgpO1xuXG4gIC8vTGVhZiBub2RlIGRhdGFcbiAgdHJlZUxlYWZEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xuXG4gIC8vTGVhZiBub2RlIHRpdGxlIGluIFN1bW1hcnkgZGV0YWlsc1xuICBsZWFmTm9kZVRpdGxlID0gJyc7XG5cbiAgLy9MZWFmIG5vZGUgbmFtZSBpbiByZXN1bHQganNvbiBvYmplY3RcbiAgbGVhZk5vZGVOYW1lID0gJyc7XG5cbiAgLy9MZWFmIG5vZGUgY29kZSBsaXN0IGZvciBkaXNwbGF5aW5nIHJlc3VsdCBvYmplY3Qgb2Ygc2VhcmNoIHNlcnZpY2VzIGJ5IHRleHQoSW4gZmlsdGVyZWQgTW9kZSA9IE9uKVxuICBub2RlQ29kZUxpc3QgPSBbXTtcblxuICBsZWFmQ29udGFpbmVyRWxlbWVudDtcbiAgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50O1xuICB0ZEVsZW1lbnQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50O1xuICB0aEVsZW1lbnQ6IEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xuXG4gIHByaXZhdGUgYWN0aW9uRGlzcGF0Y2hlcjogQWN0aW9uRGlzcGF0Y2hlcjtcblxuICBmbGF0Tm9kZU1hcCA9IG5ldyBNYXA8U2VhcmNoSXRlbUZsYXROb2RlLCBTZWFyY2hJdGVtTm9kZT4oKTtcblxuICAvKiogTWFwIGZyb20gbmVzdGVkIG5vZGUgdG8gZmxhdHRlbmVkIG5vZGUuIFRoaXMgaGVscHMgdXMgdG8ga2VlcCB0aGUgc2FtZSBvYmplY3QgZm9yIHNlbGVjdGlvbiAqL1xuICBuZXN0ZWROb2RlTWFwID0gbmV3IE1hcDxTZWFyY2hJdGVtTm9kZSwgU2VhcmNoSXRlbUZsYXROb2RlPigpO1xuXG4gIC8qKiBBIHNlbGVjdGVkIHBhcmVudCBub2RlIHRvIGJlIGluc2VydGVkICovXG4gIHNlbGVjdGVkUGFyZW50OiBTZWFyY2hJdGVtRmxhdE5vZGUgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG5ldyBpdGVtJ3MgbmFtZSAqL1xuICBuZXdJdGVtTmFtZSA9ICcnO1xuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8YW55PjtcblxuICBkYXRhU291cmNlO1xuXG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8U2VhcmNoSXRlbU5vZGUsIFNlYXJjaEl0ZW1GbGF0Tm9kZT47XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogU2VhcmNoSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBTZWFyY2hJdGVtRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBTZWFyY2hJdGVtTm9kZSk6IFNlYXJjaEl0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogU2VhcmNoSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBoYXNOb0NvbnRlbnQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IFNlYXJjaEl0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09ICcnO1xuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFNlYXJjaEl0ZW1Ob2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5uZXN0ZWROb2RlTWFwLmdldChub2RlKTtcbiAgICBjb25zdCBmbGF0Tm9kZSA9IGV4aXN0aW5nTm9kZSAmJiBleGlzdGluZ05vZGUuaXRlbSA9PT0gbm9kZS5pdGVtXG4gICAgICA/IGV4aXN0aW5nTm9kZVxuICAgICAgOiBuZXcgU2VhcmNoSXRlbUZsYXROb2RlKCk7XG4gICAgZmxhdE5vZGUuaXRlbSA9IG5vZGUuaXRlbTtcbiAgICBmbGF0Tm9kZS5sZXZlbCA9IGxldmVsO1xuICAgIGZsYXROb2RlLmV4cGFuZGFibGUgPSAhIW5vZGUuY2hpbGRyZW47XG4gICAgdGhpcy5mbGF0Tm9kZU1hcC5zZXQoZmxhdE5vZGUsIG5vZGUpO1xuICAgIHRoaXMubmVzdGVkTm9kZU1hcC5zZXQobm9kZSwgZmxhdE5vZGUpO1xuICAgIHJldHVybiBmbGF0Tm9kZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogZmFsc2UgfSkgdmlydHVhbFNjcm9sbDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSwgcHJpdmF0ZSB0cmVlQ29uZmlndXJhdGlvbjogVHJlZUNvbmZpZywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRHluYW1pY0RhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy5kYXRhYmFzZSwgdGhpcy5yZWYpO1xuXG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuXG4gICAgdGhpcy5kYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBEZXN0cm95cy9EZXRhY2hlcyB0aGUgY2hhbmdlIGRldGVjdGlvbiByZWZlcmVuY2UuICovXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxlYWZDb2x1bW5Db25maWcgPSBbXTtcblxuICAgIC8qKiBTdWJzY3JpYmVzIHRvIHRoZSBjdXJyZW50IHNlbGVjdGVkIG5vZGUgdmFsdWUuICovXG4gICAgdGhpcy5kYXRhYmFzZS5jdXJyZW50U2VsZWN0ZWROb2RlVmFsdWUuc3Vic2NyaWJlKChub2RlKSA9PiB7XG5cbiAgICAgIGlmIChub2RlLml0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmVuYWJsZUluaXRpYWxUZXh0LnNldEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZU5vZGVEZXRhaWxzLnNldEVuYWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTGVhZk5vZGVEZXRhaWxzLmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlTGVhZk5vZGVEZXRhaWxzLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZURldGFpbExpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jbGVhckxlYWZUYWJsZURhdGEoKTtcblxuICAgICAgICB0aGlzLnByaW50RGV0YWlscyhub2RlLnJlc3VsdE9iamVjdCk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKiBTdWJzY3JpYmVzIHRvIHRoZSBjdXJyZW50IHNlbGVjdGVkIGxlYWYgbm9kZSB2YWx1ZS4gKi9cbiAgICB0aGlzLmRhdGFiYXNlLmN1cnJlbnRTZWxlY3RlZExlYWZOb2RlVmFsdWUuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5lbmFibGVJbml0aWFsVGV4dC5zZXRFbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVOb2RlRGV0YWlscy5zZXRFbmFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVuYWJsZUxlYWZOb2RlRGV0YWlscy5zZXRFbmFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRyZWVMZWFmRGF0YUxpc3QgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVMZWFmTm9kZURldGFpbEdyaWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZGlzcGxheXMgdGhlIG5vZGUgZGV0YWlscyhvdGhlciB0aGFuIGxlYWYgbm9kZSkgZm9yIHRoZSBzZWxlY3RlZCB0cmVlIG5vZGUuICovXG4gIHByaW50RGV0YWlscyhub2RlRGV0YWlsT2JqKSB7XG5cbiAgICBpZiAodGhpcy5kYXRhYmFzZS5maWx0ZXJlZE1vZGUgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZUxlYWZOb2RlRGV0YWlscy5lbmFibGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5lbmFibGVMZWFmTm9kZURldGFpbHMuZW5hYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpIGluIG5vZGVEZXRhaWxPYmopIHtcbiAgICAgIGlmIChub2RlRGV0YWlsT2JqW2ldIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIHRoaXMucHJpbnREZXRhaWxzKG5vZGVEZXRhaWxPYmpbaV0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhub2RlRGV0YWlsT2JqKSkge1xuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBub2RlRGV0YWlsT2JqW2tleV07XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZURldGFpbExpc3Quc2V0KGksIG5vZGVEZXRhaWxPYmpbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKiogU2V0cyB0aGUgdHJlZSBkYXRhICovXG4gIHNldCBzZXRUcmVlRGF0YShkYXRhKSB7XG4gICAgdGhpcy50cmVlRGF0YSA9IGRhdGE7XG4gIH1cblxuICAvKiogU2V0IGFjdGlvbiBkaXNwYXRjaGVyIHZhbHVlIEBwYXJhbSB2YWx1ZSB0byBEYXRhIFNvdXJjZS4gKi9cbiAgcHVibGljIHNldCBzZXRBY3Rpb25EaXNwYXRjaGVyKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aW9uRGlzcGF0Y2hlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIFNldHMgdHJlZSBjb25maWd1cmF0aW9ucyBAcGFyYW0gZGF0YSB0byBlbnRlcnByaXNlIHRyZWUgcmVzcGVjdGl2ZSBwcm9wZXJ0aWVzLiAqL1xuICBzZXQgc2V0VHJlZUNvbmZpZyhkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5wYWdlU2l6ZSAhPSB1bmRlZmluZWQgfHwgZGF0YS5wYWdlU2l6ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnBhZ2VTaXplID0gZGF0YS5wYWdlU2l6ZTtcbiAgICB9XG5cbiAgICB0aGlzLnRyZWVIZWFkZXIgPSBkYXRhLnRyZWVIZWFkZXI7XG4gICAgdGhpcy50cmVlQ29uZmlnID0gZGF0YS5hY3Rpb25zQW5kVG9vbHNBcnI7XG4gICAgdGhpcy5yb290TGV2ZWxOb2RlID0gZGF0YS5yb290TGV2ZWxOb2RlO1xuICAgIHRoaXMudG90YWxMZXZlbHMgPSBkYXRhLnRvdGFsTGV2ZWxzO1xuICAgIHRoaXMubGVhZk5vZGVUaXRsZSA9IGRhdGEubGVhZk5vZGVUaXRsZTtcbiAgICB0aGlzLmxlYWZOb2RlTmFtZSA9IGRhdGEubGVhZk5vZGVOYW1lO1xuICAgIHRoaXMudHJlZUNvbmZpZ3VyYXRpb24uc2V0VG90YWxMZXZlbHMgPSBkYXRhLnRvdGFsTGV2ZWxzO1xuICAgIHRoaXMubGVhZkNvbHVtbkNvbmZpZyA9IGRhdGEubGVhZkNvbHVtbkNvbmZpZ0FycjtcblxuICAgIHRoaXMuc29ydFRyZWVDb25maWcodGhpcy50cmVlQ29uZmlnKTtcbiAgICB0aGlzLnNldFRyZWVEYXRhVG9UcmVlVmlldygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHNvcnRzIHRoZSB0cmVlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB0cmVlQ29uZmlnIEpTT04gb2JqZWN0IG9mIHRyZWUgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHNvcnRUcmVlQ29uZmlnKHRyZWVDb25maWcpIHtcbiAgICBsZXQgZW50ZXJwVHJlZUNvbXBLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudGVycFRyZWVDb21wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cmVlQ29uZmlnLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0cmVlQ29uZmlnW2pdLm5hbWUgPT09IGVudGVycFRyZWVDb21wS2V5c1tpXSkge1xuICAgICAgICAgIHRoaXNbZW50ZXJwVHJlZUNvbXBLZXlzW2ldXSA9IHRyZWVDb25maWdbal07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyZWVDb25maWcubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh0cmVlQ29uZmlnW2pdLnR5cGUgPT09ICdub2RlX2FjdGlvbicpIHtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLm5vZGVMZXZlbE1ldGhvZENvbmZpZ3VyYXRpb25zLnNldCh0cmVlQ29uZmlnW2pdLmxldmVsLCB0cmVlQ29uZmlnW2pdLnRva2VuKTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLm5vZGVQcm9wZXJ0eU5hbWVzLnNldCh0cmVlQ29uZmlnW2pdLmxldmVsLCB0cmVlQ29uZmlnW2pdLm5vZGVQcm9wZXJ0eU5hbWUpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKiogXG4gICAqIEluaXRpYWxpemUgdGhlIHJvb3QgbGV2ZWwgdHJlZSBkYXRhIHRvIEByb290TGV2ZWxOb2RlcyAmIHJvb3QgbGV2ZWwgbm9kZSBuYW1lIHRvIEByb290TGV2ZWxOb2RlICovXG4gIHNldFRyZWVEYXRhVG9UcmVlVmlldygpIHtcblxuICAgIHRoaXMudHJlZURhdGEuZ2V0Um9vdE5vZGVEYXRhKHRoaXMucGFnZU51bWJlciwgdGhpcy5wYWdlU2l6ZSkudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2Uucm9vdExldmVsTmFtZSA9IHRoaXMucm9vdExldmVsTm9kZTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5yb290TGV2ZWxOb2RlcyA9IHJlc3VsdDtcblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgbmV4dCBiYXRjaCBvZiB0cmVlIGRhdGEgdG8gQHJvb3RMZXZlbE5vZGVzICovXG4gIGdldE5leHRCYXRjaE9mUGFnZSgpIHtcblxuICAgIGlmIChNYXRoLmZsb29yKHRoaXMudmlydHVhbFNjcm9sbC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCdib3R0b20nKSkgPT09IDApIHtcblxuICAgICAgY29uc29sZS5sb2coTWF0aC5mbG9vcih0aGlzLnZpcnR1YWxTY3JvbGwubWVhc3VyZVNjcm9sbE9mZnNldCgnYm90dG9tJykpLCBcImdldE5leHRCYXRjaE9mUGFnZSBcIik7XG5cbiAgICAgIGlmICh0aGlzLmRhdGFiYXNlLnBhZ2luZ01vZGUgPT09IHRydWUpIHtcblxuICAgICAgICB0aGlzLnRyZWVEYXRhLmdldE5leHRQYWdlKCsrdGhpcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VTaXplKS50aGVuKFxuICAgICAgICAgIHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLnRyZWVEYXRhTGlzdCA9IHJlc3VsdDtcblxuICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlLnJvb3RMZXZlbE5hbWUgPSB0aGlzLnJvb3RMZXZlbE5vZGU7XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyZWVEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2Uucm9vdExldmVsTm9kZXMucHVzaCh0aGlzLnRyZWVEYXRhTGlzdFtpXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRmlsdGVycyB0aGUgdHJlZSBkYXRhIHdpdGggaW5wdXQgb2YgdGV4dCB0eXBlLiAqL1xuICBmaWx0ZXJOb2RlcyhmaWx0ZXJUZXh0OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuZGF0YWJhc2UuZmlsdGVyZWRNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmRhdGFiYXNlLnBhZ2luZ01vZGUgPSBmYWxzZTtcblxuICAgIGlmIChmaWx0ZXJUZXh0KSB7XG4gICAgICB0aGlzLmVuYWJsZUluaXRpYWxUZXh0LnNldEVuYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmVuYWJsZU5vZGVEZXRhaWxzLnNldEVuYWJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24odGhpcy5ub2RlRmlsdGVyYXRpb24udG9rZW4sIGZpbHRlclRleHQpLnRoZW4oXG4gICAgICAgIHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAvKiogU2V0IHRoZSB0cmVlIGNvbnRyb2wgZm9yIFNlYXJjaEl0ZW1GbGF0Tm9kZXMuICovXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8U2VhcmNoSXRlbUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG5cbiAgICAgICAgICAvKiogU2V0IHRoZSBkYXRhIFNvdXJjZSBmb3IgU2VhcmNoSXRlbUZsYXROb2RlcyBhbmQgU2VhcmNoSXRlbU5vZGUuICovXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2VhcmNoZWROb2RlcyhyZXN1bHQpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpbHRlclRleHQgPT09ICcnKSB7XG4gICAgICB0aGlzLmVuYWJsZUluaXRpYWxUZXh0LnNldEVuYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmVuYWJsZU5vZGVEZXRhaWxzLnNldEVuYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmFibGVMZWFmTm9kZURldGFpbHMuc2V0RW5hYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IER5bmFtaWNEYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMuZGF0YWJhc2UsIHRoaXMucmVmKTtcblxuICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGlvbkRpc3BhdGNoZXIgPSB0aGlzLmFjdGlvbkRpc3BhdGNoZXI7XG5cbiAgICAgIHRoaXMuZGF0YWJhc2UucGFnaW5nTW9kZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2V0VHJlZURhdGFUb1RyZWVWaWV3KCk7XG4gICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XG4gICAgfVxuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIHRyZWUgdmlldyBOb2RlcyBmb3Igc2VhcmNoZWQgZGF0YSByZXN1bHQuICovXG4gIGNyZWF0ZVNlYXJjaGVkTm9kZXMocmVzdWx0KSB7XG5cbiAgICAvKiogR2VuZXJhdGVzIHRoZSBoaWVyYXJjaHkgY29kZSBmb3IgdGhlIHNlYXJjaGVkIGRhdGEgcmVzdWx0LiAqL1xuICAgIHRoaXMubm9kZUNvZGVMaXN0ID0gdGhpcy50cmVlRGF0YS5nZXRTZWFyY2hSZXN1bHREYXRhSGllcmFyY2h5Q29kZShyZXN1bHQpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLm5vZGVDb2RlTGlzdDtcblxuICAgIC8qKiBCdWlsZHMgdGhlIFNlYXJjaGVkIHJlc3VsdCB0cmVlIGFsb25nIHdpdGggaXRzIGNoaWxkcmVuIG5vZGVzLiAqL1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkU2VhcmNoUmVzdWx0VHJlZSh0aGlzLm5vZGVDb2RlTGlzdCwgJzAnKTtcblxuICAgIC8qKiBOb3RpZnkgdGhlIGNoYW5nZS4gKi9cbiAgICB0aGlzLmRhdGFiYXNlLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XG4gIH1cblxuICAvKipcbiAgKiBCdWlsZHMgdGhlIHNlYXJjaCBkYXRhIHN0cnVjdHVyZSB0cmVlIHZpZXcuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYFNlYXJjaEl0ZW1Ob2RlYC5cbiAgKi9cbiAgYnVpbGRTZWFyY2hSZXN1bHRUcmVlKHNlYXJjaERhdGFPYmo6IGFueVtdLCBsZXZlbDogc3RyaW5nKTogU2VhcmNoSXRlbU5vZGVbXSB7XG5cbiAgICByZXR1cm4gc2VhcmNoRGF0YU9iai5maWx0ZXIobyA9PlxuICAgICAgKDxzdHJpbmc+by5jb2RlKS5zdGFydHNXaXRoKGxldmVsICsgJy4nKVxuICAgICAgJiYgKG8uY29kZS5tYXRjaCgvXFwuL2cpIHx8IFtdKS5sZW5ndGggPT09IChsZXZlbC5tYXRjaCgvXFwuL2cpIHx8IFtdKS5sZW5ndGggKyAxKS5tYXAobyA9PiB7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBTZWFyY2hJdGVtTm9kZSgpO1xuICAgICAgICBub2RlLml0ZW0gPSBvLml0ZW07XG4gICAgICAgIG5vZGUuY29kZSA9IG8uY29kZTtcbiAgICAgICAgbm9kZS5yZXN1bHRPYmplY3QgPSBvLnJlc3VsdE9iamVjdDtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNlYXJjaERhdGFPYmouZmlsdGVyKHNvID0+ICg8c3RyaW5nPnNvLmNvZGUpLnN0YXJ0c1dpdGgobGV2ZWwgKyAnLicpKTtcblxuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkU2VhcmNoUmVzdWx0VHJlZShjaGlsZHJlbiwgby5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIERpc3BsYXlzIHRoZSBub2RlIGRldGFpbHMgaW4gdGhlIFN1bW1hcnkgZGV0YWlscyBVSSBzZWN0aW9uIGZvciB0aGUgc2VsZWN0ZWQgbm9kZS4gKi9cbiAgZGlzcGxheUN1cnJlbnRTZWFyY2hOb2RlRGV0YWlscyhub2RlKSB7XG5cbiAgICAvKiogQ2hlY2tzIHdoZXRoZXIgZmlsdGVyIG1vZGUgaXMgT24uICovXG4gICAgaWYgKHRoaXMuZGF0YWJhc2UuZmlsdGVyZWRNb2RlID09PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZUNvZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2RlLml0ZW0gPT09IHRoaXMubm9kZUNvZGVMaXN0W2ldLml0ZW0pIHtcblxuICAgICAgICAgIC8qKiBDaGVja3Mgd2hldGhlciB0aGUgbm9kZSBpcyBhIGxlYWYgbm9kZS4gKi9cbiAgICAgICAgICBpZiAobm9kZS5sZXZlbCA9PT0gKHRoaXMuZGF0YWJhc2Uubm9kZVByb3BlcnR5TmFtZXMuc2l6ZSAtIDEpKSB7XG5cbiAgICAgICAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm5vZGVDb2RlTGlzdFtpXSkpO1xuICAgICAgICAgICAgZGVsZXRlIHRlbXAucmVzdWx0T2JqZWN0W3RoaXMubGVhZk5vZGVOYW1lXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2Uuc2V0Q3VycmVudFNlbGVjdGVkTm9kZSA9IHRlbXA7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBPYmplY3QudmFsdWVzKHRoaXMubm9kZUNvZGVMaXN0W2ldLnJlc3VsdE9iamVjdFt0aGlzLmxlYWZOb2RlTmFtZV0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5zZXRDdXJyZW50U2VsZWN0ZWRMZWFmTm9kZSA9IHJlc3VsdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5yZXN1bHRPYmplY3QgPSB0aGlzLm5vZGVDb2RlTGlzdFtpXS5yZXN1bHRPYmplY3Q7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLnNldEN1cnJlbnRTZWxlY3RlZE5vZGUgPSBub2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFiYXNlLnNldEN1cnJlbnRTZWxlY3RlZE5vZGUgPSBub2RlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhcnMgdGhlIHByZXZpb3VzbHkgcmVuZGVyZWQgZGF0YSBpbiBsZWFmIGRldGFpbCBncmlkLiAqL1xuICBjbGVhckxlYWZUYWJsZURhdGEoKSB7XG5cbiAgICBsZXQgdGFibGVIZWFkaW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhcIik7XG4gICAgY29uc3QgdGFibGVIZWFkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoLWRpdlwiKVswXSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVIZWFkaW5ncy5sZW5ndGg7KSB7XG4gICAgICAodGFibGVIZWFkaW5nc1tpXSBhcyBIVE1MRWxlbWVudCkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHRhYmxlUm93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZVJvd3MubGVuZ3RoOykge1xuICAgICAgKHRhYmxlUm93c1tpXSBhcyBIVE1MRWxlbWVudCkucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENyZWF0ZXMgbGVhZiBub2RlIGdyaWQgdmlldy4gKi9cbiAgY3JlYXRlTGVhZk5vZGVEZXRhaWxHcmlkKCkge1xuICAgIHRoaXMubGVhZkNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZi1jb250YWluZXInKTtcblxuICAgIC8qKiBDcmVhdGVzIGxlYWYgbm9kZSBncmlkIGhlYWRpbmdzLiAqL1xuICAgIHRoaXMuY3JlYXRlTGVhZlRhYmxlSGVhZGluZygpO1xuXG4gICAgbGV0IHRhYmxlRGF0YUNlbGwgPSBudWxsO1xuICAgIGxldCB0YWJsZVJvd0RhdGEgPSBudWxsO1xuICAgIHRoaXMuY291bnRlciA9IDA7XG5cbiAgICBmb3IgKDsgdGhpcy5jb3VudGVyIDwgdGhpcy50cmVlTGVhZkRhdGFMaXN0Lmxlbmd0aDsgdGhpcy5jb3VudGVyKyspIHtcblxuICAgICAgLyoqIENyZWF0ZXMgbGVhZiBub2RlIHJvd3MgZm9yIGdyaWQgdmlldy4gKi9cbiAgICAgIHRoaXMuY3JlYXRlTGVhZlJvd3ModGhpcy5jb3VudGVyKTtcblxuICAgICAgZm9yIChsZXQgbW9kdWxlTGlzdEtleSBpbiB0aGlzLnRyZWVMZWFmRGF0YUxpc3RbdGhpcy5jb3VudGVyXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVhZkNvbHVtbkNvbmZpZy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgaWYgKHRoaXMubGVhZkNvbHVtbkNvbmZpZ1tpXS5uYW1lID09PSBtb2R1bGVMaXN0S2V5KSB7XG5cbiAgICAgICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZS1yb3ctZGF0YVwiKTtcblxuICAgICAgICAgICAgdmFyIGxhc3RSb3dJbmRleCA9IHRhYmxlLmxlbmd0aDtcblxuICAgICAgICAgICAgdGFibGVSb3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFibGUtcm93LWRhdGEnKVtsYXN0Um93SW5kZXggLSAxXSBhcyBIVE1MVGFibGVSb3dFbGVtZW50O1xuXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsID0gdGFibGVSb3dEYXRhLmNlbGxzO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5sZWFmQ29sdW1uQ29uZmlnW2ldLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnRyZWVMZWFmRGF0YUxpc3RbdGhpcy5jb3VudGVyXVttb2R1bGVMaXN0S2V5XTtcblxuICAgICAgICAgICAgdGFibGVEYXRhQ2VsbFtwb3NdLmlubmVySFRNTCA9IHZhbHVlO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5yaWdodCA9IDAgKyBcInB4XCI7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUud2lkdGggPSA1ICsgJyUnO1xuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiO1xuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUubWF4V2lkdGggPSBcIjEwMHB4XCI7XG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBsZWFmIG5vZGUgZ3JpZCBoZWFkaW5ncy5cbiAgKi9cbiAgY3JlYXRlTGVhZlRhYmxlSGVhZGluZygpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJsZUhlYWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGgtZGl2XCIpWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlYWZDb2x1bW5Db25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNkZGQnO1xuICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlF1ZXN0cmlhbFwiLCBzYW5zLXNlcmlmJztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSAnMXB4JztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxNnB4JztcbiAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsLjU0KSc7XG4gICAgICAvLyB0aGlzLnRoRWxlbWVudC53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS53aWR0aCA9IDUgKyAnJSc7XG5cbiAgICAgIGNvbnN0IGhlYWROYW1lID0gdGhpcy5sZWFmQ29sdW1uQ29uZmlnW2ldLm5hbWU7XG4gICAgICB0aGlzLnRoRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmxlYWZDb2x1bW5Db25maWdbaV0uaXRlbTtcbiAgICAgIHRoaXMudGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoaGVhZE5hbWUpO1xuXG4gICAgICB0YWJsZUhlYWREaXYuYXBwZW5kQ2hpbGQodGhpcy50aEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGxlYWYgbm9kZSByb3dzIGZvciBsZWFmIG5vZGUgZGV0YWlsIGdyaWQgdmlldy5cbiAgICogQHBhcmFtIHZhbHVlIGxlYWYgZGF0YSBsaXN0IGVsZW1lbnQgY291bnRlciB2YWx1ZS5cbiAgICovXG4gIGNyZWF0ZUxlYWZSb3dzKHZhbHVlKSB7XG4gICAgdGhpcy5yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgdGhpcy5yb3cuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgdGhpcy5yb3cuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xuICAgIHRoaXMucm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1yb3ctZGF0YVwiKTtcblxuICAgIHRoaXMubGVhZkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yb3cpO1xuICAgIHRoaXMuc3R5bGVMZWFmQ2VsbHMoKTtcbiAgfVxuXG4gIC8qKiBTdHlsZXMgdGhlIGxlYWYgZ3JpZCB2aWV3IGNlbGxzIHdpdGggQ1NTLiAqL1xuICBzdHlsZUxlYWZDZWxscygpIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZWFmQ29sdW1uQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnRkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gJzEwcHgnO1xuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcxMHB4JztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNkZGQnO1xuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlF1ZXN0cmlhbFwiLCBzYW5zLXNlcmlmJztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMzlweCc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS53aWR0aCA9IDUgKyAnJSc7XG4gICAgICB0aGlzLnJvdy5hcHBlbmRDaGlsZCh0aGlzLnRkRWxlbWVudCk7XG4gICAgfVxuXG4gIH1cblxuICAvKiogT3BlbnMgdGhlIG5vZGUgYXBwIGluIHRoZSBzYW1lIHdpbmRvdy4gKi9cbiAgb3BlbkFwcEluU2FtZVdpbmRvdyh0b2tlbiwgbm9kZU5hbWUpIHtcblxuICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0b2tlbiwgbm9kZU5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgbm9kZSBhcHAgaW4gdGhlIG5ldyB0YWIuICovXG4gIHB1YmxpYyBvcGVuQXBwSW5OZXdUYWIodG9rZW4sIG5vZGVOYW1lKSB7XG5cbiAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24odG9rZW4sIG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cblxuICAvKiogQ2xvc2VzIHRoZSBvcGVuLWFwcCBmdW5jdGlvbmFsaXR5J3MgbWVudS1kcm9wZG93bi4gKi9cbiAgY2xvc2VEcm9wZG93bigpIHtcbiAgICBsZXQgZHJvcGRvd25zQ29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1jb250ZW50Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3Bkb3duc0NvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNDb250ZW50c1tpXTtcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRXhwYW5kcy9PcGVucyB0aGUgb3Blbi1hcHAgZnVuY3Rpb25hbGl0eSdzIG1lbnUtZHJvcGRvd24uICovXG4gIHB1YmxpYyBzaG93RHJvcGRvd24oJGV2ZW50KSB7XG5cbiAgICBpZiAoJGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYXBwLWRyb3Bkb3duLWJ1dHRvbicpKSB7XG5cbiAgICAgIGlmICgkZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5uZXh0U2libGluZyAhPSBudWxsICYmICRldmVudC50YXJnZXQub2Zmc2V0UGFyZW50Lm5leHRTaWJsaW5nLm1hdGNoZXMoJy5kcm9wZG93bi1jb250ZW50JykpIHtcbiAgICAgICAgJGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG5cbiAgICAgIH0gZWxzZSBpZiAoJGV2ZW50LnRhcmdldC5uZXh0U2libGluZyAhPSBudWxsICYmICRldmVudC50YXJnZXQubmV4dFNpYmxpbmcubWF0Y2hlcygnLmRyb3Bkb3duLWNvbnRlbnQnKSkge1xuICAgICAgICAkZXZlbnQudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSAiXX0=