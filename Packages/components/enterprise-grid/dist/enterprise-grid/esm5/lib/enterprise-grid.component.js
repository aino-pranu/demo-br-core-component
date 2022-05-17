/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injectable, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { EnterpriseGridService } from './enterprise-grid.service';
import { ActionTypes } from '../config/ActionType';
import { FeatureConfig } from '../config/FeatureConfig';
import { ActionConfig } from '../config/ActionConfig';
import { ActionPosition } from '../config/ActionPosition';
import { PagingTypes } from '../config/PagingType';
import * as i0 from "@angular/core";
import * as i1 from "./enterprise-grid.service";
var EnterpriseGridComponent = /** @class */ (function () {
    function EnterpriseGridComponent(gridService, ref) {
        this.gridService = gridService;
        this.ref = ref;
        //Grid config info.
        this.featureConfig = new Array();
        //Column Config info.
        this.columnConfig = new Array();
        this.actionConfig = new Array();
        this.pagingConfig = new Array();
        this.gridDataList = new Array();
        this.gridHeader = '';
        this.selectedEntities = new Array();
        //ColumnName Suggestion
        this.columnNameSuggestion = [];
        //Clear Filter
        this.clearFliter = false;
        //Add Filter Button loop
        this.filterSelectedValue = {};
        //Display filter loop 
        this.displayFilterValue = [];
        //page size
        this.pageSize = 10;
        //pageNo
        this.pageNumber = 1;
        //coreActions
        this.coreActions = new Array();
        this.enableActionToolbar = new FeatureConfig("enableActionToolbar", false);
        this.enableSearchToolbar = new FeatureConfig("enableSearchToolbar", false);
        this.enableSearchPlaceholder = new FeatureConfig("enableSearchPlaceholder", false);
        this.enableSearchBar = new FeatureConfig("enableSearchBar", false);
        this.enableBulkActionToolbar = new FeatureConfig("enableBulkActionToolbar", false);
        this.selectRow = new FeatureConfig("selectRow", false); // To enable checkboxes
        // To enable checkboxes
        this.enableFooterToolbar = new FeatureConfig("enableFooterToolbar", false);
        this.onRowClick = new ActionConfig("onRowClick", true, "", false);
        this.filterValue = new ActionConfig("filterValue", true, "", false);
        this.counter = 0;
        this.togglePagination = false;
    }
    /**
     * @return {?}
     */
    EnterpriseGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnConfig = [];
        this.eventEmmiter = this.gridService.refresh.subscribe((/**
         * @return {?}
         */
        function () {
            _this.refresh();
        }));
        console.log(this.togglePagination);
    };
    /**
     * @return {?}
     */
    EnterpriseGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.eventEmmiter) {
            this.eventEmmiter.unsubscribe();
        }
    };
    /** Sets core actions to the grid */
    /**
     * Sets core actions to the grid
     * @private
     * @return {?}
     */
    EnterpriseGridComponent.prototype.setCoreActions = /**
     * Sets core actions to the grid
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.actionConfig), _c = _b.next(); !_c.done; _c = _b.next()) {
                var actionConfig = _c.value;
                if (actionConfig.type === ActionTypes.core && actionConfig.enable === true) {
                    this.coreActions.push(actionConfig);
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
        console.log(this.coreActions);
    };
    Object.defineProperty(EnterpriseGridComponent.prototype, "setGridData", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.gridData = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnterpriseGridComponent.prototype, "setGridConfig", {
        /**
         * Set the grid configuration for the grid.
         * @param data grid data
         */
        set: /**
         * Set the grid configuration for the grid.
         * @param {?} data grid data
         * @return {?}
         */
        function (data) {
            if (data.pageSize != undefined || data.pageSize != null) {
                this.pageSize = data.pageSize;
                // console.log(this.pageSize, "set grid config");
            }
            this.gridHeader = data.gridHeader;
            this.columnConfig = data.columnConfigArr;
            this.featureConfig = data.featureConfigArr;
            this.actionConfig = data.actionConfigArr;
            this.pagingConfig = data.pagingConfigArr;
            this.sortGridConfig(this.featureConfig);
            this.sortGridConfig(this.actionConfig);
            this.getColumnName(this.columnConfig);
            this.setCoreActions();
            this.setGridDataToGrid();
        },
        enumerable: true,
        configurable: true
    });
    /** Sets grid data to grid */
    /**
     * Sets grid data to grid
     * @return {?}
     */
    EnterpriseGridComponent.prototype.setGridDataToGrid = /**
     * Sets grid data to grid
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log(this.pageSize, "set grid data");
        this.gridData.getFirstPage(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.clearTableData();
            _this.gridDataList = result;
            _this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(error);
        }));
    };
    /**
     * This method sorts the grid configuration.
     * @param gridConfig JSON object of grid configuration.
     */
    /**
     * This method sorts the grid configuration.
     * @param {?} gridConfig JSON object of grid configuration.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.sortGridConfig = /**
     * This method sorts the grid configuration.
     * @param {?} gridConfig JSON object of grid configuration.
     * @return {?}
     */
    function (gridConfig) {
        /** @type {?} */
        var enterpGridCompKeys = Object.getOwnPropertyNames(this);
        for (var i = 0; i < enterpGridCompKeys.length; i++) {
            for (var j = 0; j < gridConfig.length; j++) {
                if (gridConfig[j].name === enterpGridCompKeys[i]) {
                    this[enterpGridCompKeys[i]] = gridConfig[j];
                    break;
                }
            }
        }
    };
    /** Calculates grid column width. */
    /**
     * Calculates grid column width.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.setWidthByColumn = /**
     * Calculates grid column width.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = 100 / this.columnConfig.length;
        return count;
    };
    /** Creates grid rows and add styles
     * @param value counter value
     */
    /**
     * Creates grid rows and add styles
     * @param {?} value counter value
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createRows = /**
     * Creates grid rows and add styles
     * @param {?} value counter value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.row = document.createElement('tr');
        if (this.onRowClick) {
            this.row.onclick = (/**
             * @return {?}
             */
            function () {
                _this.actionDispatcher.dispatchAction(_this.onRowClick.token, _this.gridDataList[value]);
            });
        }
        this.row.onmouseover = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var row = ((/** @type {?} */ ($event.currentTarget)));
            // row.style.backgroundColor = 'rgba(63,81,181,.15)';
            // row.style.color = '#3f51b5';
            /** @type {?} */
            var a = (/** @type {?} */ (row.childNodes[row.childNodes.length - 1]));
            // a.style.visibility = "visible";
            ((/** @type {?} */ (a.childNodes[0]))).style.visibility = "visible";
        });
        this.row.onmouseout = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var row = ((/** @type {?} */ ($event.currentTarget)));
            // row.style.backgroundColor = 'white';
            // row.style.color = 'black';
            /** @type {?} */
            var a = (/** @type {?} */ (row.childNodes[row.childNodes.length - 1]));
            // a.style.visibility = "hidden";
            ((/** @type {?} */ (a.childNodes[0]))).style.visibility = "hidden";
        });
        this.row.style.background = 'white';
        this.row.style.padding = '5px';
        this.row.classList.add("table-row-data");
        this.cdkVirtualViewport.appendChild(this.row);
        this.styleCells();
    };
    /** Creates grid cells and add styles to table data. */
    /**
     * Creates grid cells and add styles to table data.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.styleCells = /**
     * Creates grid cells and add styles to table data.
     * @return {?}
     */
    function () {
        for (var i = 0; i <= this.columnConfig.length; i++) {
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
            this.tdElement.style.width = this.setWidthByColumn() + '%';
            this.row.appendChild(this.tdElement);
        }
    };
    /** Create table heading */
    /**
     * Create table heading
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createTableHeading = /**
     * Create table heading
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
        if (tableHeadDiv.childElementCount == 0) {
            for (var i = 0; i < this.columnConfig.length; i++) {
                this.thElement = document.createElement('th');
                this.thElement.style.padding = '10px 0px 10px 10px';
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
                this.thElement.style.width = this.setWidthByColumn() + '%';
                if (this.columnConfig[i].name === 'checkbox') {
                    this.createCheckbox("sdas", "gridElement");
                    this.checkbox.style.marginTop = '0px';
                    this.thElement.appendChild(this.checkbox);
                    this.thElement.style.display = "none";
                    if (this.selectRow.getEnable) {
                        this.thElement.style.width = "10%";
                        this.thElement.style.display = 'table-cell';
                    }
                }
                else {
                    /** @type {?} */
                    var headName = this.columnConfig[i].name;
                    this.thElement.innerHTML = this.columnConfig[i].item;
                    this.thElement.classList.add(headName);
                }
                tableHeadDiv.appendChild(this.thElement);
            }
        }
    };
    /** Create checkboxes
     * @param value counter value
     * @param gridElement grid data object
     */
    /**
     * Create checkboxes
     * @param {?} value counter value
     * @param {?} gridElement grid data object
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createCheckbox = /**
     * Create checkboxes
     * @param {?} value counter value
     * @param {?} gridElement grid data object
     * @return {?}
     */
    function (value, gridElement) {
        var _this = this;
        this.checkbox = document.createElement("INPUT");
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.classList.add('checkbox');
        this.checkbox.style.transition = 'background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)';
        this.checkbox.style.cursor = 'pointer';
        this.checkbox.style.height = '16px';
        this.checkbox.style.margin = '6px';
        this.checkbox.style.width = '16px';
        this.checkbox.style.marginLeft = '17px';
        //Select the check box work in progress
        this.checkbox.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            // console.log((this.checkbox as HTMLElement).parentElement);
            if (gridElement === 'gridElement') {
                /** @type {?} */
                var checkboxObjList = document.getElementsByClassName('checkbox');
                for (var i = 0; i < _this.gridDataList.length; i++) {
                    if (checkboxObjList[0]['checked'] === true) {
                        if (checkboxObjList[i + 1]['checked'] === false) {
                            checkboxObjList[i + 1]['checked'] = true;
                            _this.createSelectedCheckboxesArray($event, _this.gridDataList[i]);
                        }
                    }
                    if (checkboxObjList[0]['checked'] === false) {
                        if (checkboxObjList[i + 1]['checked'] === true) {
                            checkboxObjList[i + 1]['checked'] = false;
                            _this.selectedEntities.length = 0;
                            _this.createSelectedCheckboxesArray($event, _this.gridDataList[i]);
                        }
                    }
                }
            }
            else {
                _this.createSelectedCheckboxesArray($event, gridElement);
            }
        });
    };
    /** Stores all the selected/checked grid objects into an array to perform bulk actions.
     * @param $event Mouse event
     * @param gridElement grid data object
    */
    /**
     * Stores all the selected/checked grid objects into an array to perform bulk actions.
     * @param {?} $event Mouse event
     * @param {?} gridElement grid data object
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createSelectedCheckboxesArray = /**
     * Stores all the selected/checked grid objects into an array to perform bulk actions.
     * @param {?} $event Mouse event
     * @param {?} gridElement grid data object
     * @return {?}
     */
    function ($event, gridElement) {
        var e_2, _a;
        $event.stopPropagation();
        this.enableActionToolbar.enable = false;
        this.enableBulkActionToolbar.enable = true;
        this.clearFliter = false;
        this.ref.detectChanges();
        /** If checkbox true, push element to array. */
        if ($event.target.checked) {
            this.selectedEntities.push(gridElement);
        }
        else if ($event.target.checked === false) {
            try {
                /** Removes the grid object from the array if user unchecks/deselects. */
                for (var _b = tslib_1.__values(this.selectedEntities), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var obj = _c.value;
                    if (obj.id === gridElement.id) {
                        this.selectedEntities.splice(this.selectedEntities.indexOf(obj), 1);
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
        }
        this.ref.detectChanges();
        this.createBulkActionEntities();
    };
    /**
     * Creates bulk actions, in-place and in-selector in bulk action toolbar.
     * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
     */
    /**
     * Creates bulk actions, in-place and in-selector in bulk action toolbar.
     * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createBulkActionEntities = /**
     * Creates bulk actions, in-place and in-selector in bulk action toolbar.
     * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bulkActionToolbar = (/** @type {?} */ (document.getElementsByClassName('bulk-actions-toolbar')[0]));
        if (this.selectedEntities != null && this.selectedEntities.length == 1 && bulkActionToolbar.innerHTML == '') {
            /** @type {?} */
            var selectorMenuIconCreated = 0;
            /** @type {?} */
            var dropdownContent = document.createElement("div");
            for (var i = 0; i < this.actionConfig.length; i++) {
                /** @type {?} */
                var config = this.actionConfig[i];
                if (config.type === ActionTypes.entity) {
                    if (config.isBulk === true) {
                        if (config.positionType === ActionPosition.selector) {
                            selectorMenuIconCreated++;
                            if (selectorMenuIconCreated === 1) {
                                bulkActionToolbar.appendChild(this.createActionSelectorDropdown(dropdownContent));
                            }
                            dropdownContent.appendChild(this.createDropdownMenuItems(config));
                        }
                        else if (config.positionType === ActionPosition.inplace) {
                            bulkActionToolbar.appendChild(this.addBulkActions(config));
                        }
                    }
                }
            }
        }
        if (this.selectedEntities.length === 0) {
            /** @type {?} */
            var bulkActionToolbar_1 = (/** @type {?} */ (document.getElementsByClassName('bulk-actions-toolbar')[0]));
            bulkActionToolbar_1.textContent = '';
            bulkActionToolbar_1.style.backgroundColor = 'white';
            this.enableActionToolbar.enable = true;
            this.enableBulkActionToolbar.enable = false;
            this.ref.detectChanges();
        }
    };
    /** Create actions in-selector dropdown menu.
     * @param dropdownContent dropdown content div HTMLElement
     * @return dropdown HTMLElement
     */
    /**
     * Create actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content div HTMLElement
     * @return {?} dropdown HTMLElement
     */
    EnterpriseGridComponent.prototype.createActionSelectorDropdown = /**
     * Create actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content div HTMLElement
     * @return {?} dropdown HTMLElement
     */
    function (dropdownContent) {
        var _this = this;
        /** @type {?} */
        var dropdown = document.createElement('div');
        dropdown.className = "dropdown";
        dropdown.style.position = 'relative';
        dropdown.style.display = 'inline-block';
        /** @type {?} */
        var tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.marginLeft = "18px";
        /** @type {?} */
        var menuIcon = document.createElement('span');
        menuIcon.style.marginRight = "20px";
        menuIcon.style.cursor = "pointer";
        menuIcon.style.cssFloat = "right";
        menuIcon.className = 'material-icons';
        menuIcon.innerText = 'more_vert';
        dropdownContent.className = 'dropdown-content';
        dropdownContent.style.display = 'none';
        dropdownContent.style.position = 'absolute';
        dropdownContent.style.minWidth = '160px';
        dropdownContent.style.overflow = 'auto';
        dropdownContent.style.zIndex = '1000';
        dropdownContent.style.backgroundColor = 'white';
        dropdownContent.style.borderRadius = "4px";
        dropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0, 0, 0, 0.2)';
        dropdownContent.style.top = '26px';
        dropdown.appendChild(menuIcon);
        dropdown.appendChild(dropdownContent);
        dropdown.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            _this.hideShowActionSelectorDropdown(dropdownContent);
        });
        return dropdown;
    };
    /** Create actions in-selector dropdown menu items.
     * @param config action config object
     * @return dropdownMenuItem HTMLElement
     */
    /**
     * Create actions in-selector dropdown menu items.
     * @param {?} config action config object
     * @return {?} dropdownMenuItem HTMLElement
     */
    EnterpriseGridComponent.prototype.createDropdownMenuItems = /**
     * Create actions in-selector dropdown menu items.
     * @param {?} config action config object
     * @return {?} dropdownMenuItem HTMLElement
     */
    function (config) {
        var _this = this;
        /** @type {?} */
        var dropdownMenuItem = document.createElement("a");
        dropdownMenuItem.className = 'mat-menu-item';
        dropdownMenuItem.innerText = config.iconName;
        dropdownMenuItem.style.display = 'block';
        dropdownMenuItem.style.padding = '1px 16px';
        dropdownMenuItem.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            _this.actionDispatcher.dispatchAction(config.token, _this.selectedEntities);
        });
        return dropdownMenuItem;
    };
    /** Hide and show actions in-selector dropdown menu.
     * @param dropdownContent dropdown content HTMLElement
     */
    /**
     * Hide and show actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content HTMLElement
     * @return {?}
     */
    EnterpriseGridComponent.prototype.hideShowActionSelectorDropdown = /**
     * Hide and show actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content HTMLElement
     * @return {?}
     */
    function (dropdownContent) {
        if (dropdownContent.style.display === 'none') {
            dropdownContent.style.display = 'block';
        }
        else if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    };
    /** Creates the rows and columns of the grid according to column defs and module data list */
    /**
     * Creates the rows and columns of the grid according to column defs and module data list
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createGrid = /**
     * Creates the rows and columns of the grid according to column defs and module data list
     * @return {?}
     */
    function () {
        this.cdkVirtualViewport = document.getElementsByClassName('cdk-virtual-scroll-content-wrapper')[0];
        this.cdkVirtualViewport.style.display = 'inline-table';
        //Create table heading
        this.createTableHeading();
        /** @type {?} */
        var tableDataCell = null;
        /** @type {?} */
        var tableRowData = null;
        for (; this.counter < this.gridDataList.length; this.counter++) {
            this.createRows(this.counter);
            this.createCheckbox(this.counter, this.gridDataList[this.counter]);
            for (var moduleListKey in this.gridDataList[this.counter]) {
                for (var columnConfigKey in this.columnConfig) {
                    if (this.columnConfig[columnConfigKey].name === moduleListKey) {
                        /** @type {?} */
                        var table = document.getElementsByClassName("table-row-data");
                        /** @type {?} */
                        var lastRowIndex = table.length;
                        tableRowData = (/** @type {?} */ (document.getElementsByClassName('table-row-data')[lastRowIndex - 1]));
                        tableDataCell = tableRowData.cells;
                        /** @type {?} */
                        var pos = this.columnConfig[columnConfigKey].position;
                        /** @type {?} */
                        var value = this.gridDataList[this.counter][moduleListKey];
                        tableDataCell[0].style.display = 'none';
                        tableDataCell[0].appendChild(this.checkbox);
                        if (this.selectRow.getEnable) {
                            tableDataCell[0].style.width = "10%";
                            tableDataCell[0].style.display = 'table-cell';
                        }
                        tableDataCell[pos].innerHTML = value;
                    }
                }
            }
            tableDataCell[tableDataCell.length - 1].style.right = 0 + "px";
            tableDataCell[tableDataCell.length - 1].style.width = "auto";
            tableDataCell[tableDataCell.length - 1].style.height = "40px";
            tableDataCell[tableDataCell.length - 1].style.position = "absolute";
            // tableDataCell[tableDataCell.length - 1].style.visibility = "hidden";
            tableDataCell[tableDataCell.length - 1].style.backgroundColor = "white";
            tableDataCell[tableDataCell.length - 1].appendChild(this.addEntityAction(this.counter));
        }
        this.gridData.onGridDataLoad(this.gridDataList);
    };
    /**
     * Adds entity action on grid rows, for non-bulk actions.
     * @param counter counter for the number of rows
     * @returns div element
     */
    /**
     * Adds entity action on grid rows, for non-bulk actions.
     * @private
     * @param {?} counter counter for the number of rows
     * @return {?} div element
     */
    EnterpriseGridComponent.prototype.addEntityAction = /**
     * Adds entity action on grid rows, for non-bulk actions.
     * @private
     * @param {?} counter counter for the number of rows
     * @return {?} div element
     */
    function (counter) {
        var _this = this;
        /** @type {?} */
        var tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.top = "2vh";
        var _loop_1 = function (i) {
            /** @type {?} */
            var config = this_1.actionConfig[i];
            if (config.type === ActionTypes.entity) {
                if (config.isBulk === false) {
                    tdDiv.style.visibility = 'hidden';
                    /** @type {?} */
                    var span = this_1.createActionSpanElement(config);
                    tdDiv.appendChild(span);
                    span.onclick = (/**
                     * @param {?} $event
                     * @return {?}
                     */
                    function ($event) {
                        $event.stopPropagation();
                        _this.actionDispatcher.dispatchAction(config.token, _this.gridDataList[counter]);
                    });
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.actionConfig.length; i++) {
            _loop_1(i);
        }
        return tdDiv;
    };
    /**
     * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
     * @param config Action Configuration array
     * @returns div element
     */
    /**
     * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} div element
     */
    EnterpriseGridComponent.prototype.addBulkActions = /**
     * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} div element
     */
    function (config) {
        var _this = this;
        /** @type {?} */
        var tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.marginLeft = "18px";
        tdDiv.style.fontSize = "15px";
        /** @type {?} */
        var span = this.createActionSpanElement(config);
        tdDiv.appendChild(span);
        span.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            _this.actionDispatcher.dispatchAction(config.token, _this.selectedEntities);
        });
        return tdDiv;
    };
    /**
     * Creates span element for the UI action element.
     * @param config Action Configuration array
     * @returns span element
     */
    /**
     * Creates span element for the UI action element.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} span element
     */
    EnterpriseGridComponent.prototype.createActionSpanElement = /**
     * Creates span element for the UI action element.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} span element
     */
    function (config) {
        /** @type {?} */
        var span = document.createElement("span");
        span.style.marginRight = "20px";
        span.style.cursor = "pointer";
        span.style.cssFloat = "right";
        if (config.tooltip != undefined) {
            span.setAttribute('title', config.tooltip);
        }
        if (config.isIcon === true) {
            span.classList.add("material-icons");
        }
        span.innerText = config.iconName;
        /** @type {?} */
        var spanClass = config.iconName;
        span.classList.add(spanClass.replace(/ /g, "_"));
        return span;
    };
    /** Fetches next set of grid records on scroll to bottom. */
    /**
     * Fetches next set of grid records on scroll to bottom.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.getNextBatchOfPage = /**
     * Fetches next set of grid records on scroll to bottom.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.virtualScroll.measureScrollOffset('bottom') === 0) {
            this.gridData.getNextPage(++this.pageNumber, this.pageSize).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result != null) {
                    for (var i = 0; i < result.length; i++) {
                        _this.gridDataList.push(result[i]);
                    }
                    console.log(_this.gridDataList);
                    _this.createGrid();
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.log(error);
            }));
        }
    };
    /**
     * Forward the event to dispatch action with tokens and parameters.
     */
    /**
     * Forward the event to dispatch action with tokens and parameters.
     * @param {?} token
     * @return {?}
     */
    EnterpriseGridComponent.prototype.executeCoreAction = /**
     * Forward the event to dispatch action with tokens and parameters.
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.actionDispatcher.dispatchAction(token);
    };
    Object.defineProperty(EnterpriseGridComponent.prototype, "setActionDispatcher", {
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
    /** Toggles from search placeholder to search bar/box by setting the display value
     * Also get the position and set to model popup.
     * Clear button enable.
     */
    /**
     * Toggles from search placeholder to search bar/box by setting the display value
     * Also get the position and set to model popup.
     * Clear button enable.
     * @param {?} enable
     * @return {?}
     */
    EnterpriseGridComponent.prototype.toggleToSearchBar = /**
     * Toggles from search placeholder to search bar/box by setting the display value
     * Also get the position and set to model popup.
     * Clear button enable.
     * @param {?} enable
     * @return {?}
     */
    function (enable) {
        /** @type {?} */
        var element = (/** @type {?} */ (document.querySelector(".filter-button")));
        /** @type {?} */
        var x = element.getBoundingClientRect();
        this.enableSearchBar.enable = enable;
        this.clearFliter = true;
    };
    /**
     * Get the list of column name For suggestion
     */
    /**
     * Get the list of column name For suggestion
     * @param {?} columnList
     * @return {?}
     */
    EnterpriseGridComponent.prototype.getColumnName = /**
     * Get the list of column name For suggestion
     * @param {?} columnList
     * @return {?}
     */
    function (columnList) {
        for (var i = 0; i < columnList.length; i++) {
            if (columnList[i].name === "checkbox") {
                continue;
            }
            else {
                this.columnNameSuggestion.push(columnList[i].item);
            }
        }
    };
    /**
     * Open the Filter Input
     */
    /**
     * Open the Filter Input
     * @param {?} value
     * @return {?}
     */
    EnterpriseGridComponent.prototype.openFilterInput = /**
     * Open the Filter Input
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filterName = value;
        /** @type {?} */
        var modal = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        modal.style.display = "block";
        /** @type {?} */
        var closeIcon = (/** @type {?} */ (document.getElementsByClassName('close-icon')[0]));
        closeIcon.style.display = 'contents';
        this.enableSearchBar.enable = false;
        document.querySelector(".search-label").textContent = value;
    };
    /**
     * Get the value Column Name and Filter search value
     */
    /**
     * Get the value Column Name and Filter search value
     * @param {?} searchValue
     * @return {?}
     */
    EnterpriseGridComponent.prototype.filterSubmit = /**
     * Get the value Column Name and Filter search value
     * @param {?} searchValue
     * @return {?}
     */
    function (searchValue) {
        ((/** @type {?} */ (document.getElementsByClassName("filter-info-container")[0]))).style.display = "contents";
        /** @type {?} */
        var searchInputElement = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        searchInputElement.style.display = 'none';
        /** @type {?} */
        var selectedValue = this.filterName + " : " + searchValue;
        this.displayFilterValue.push(selectedValue);
        this.getkeyFromValue(this.filterName);
        this.enableSearchBar.enable = false;
        this.filterSelectedValue[this.getKey] = searchValue;
        this.counter = 0;
        this.getFilterList(this.filterValue.token, this.filterSelectedValue);
    };
    /** Close the filter input field. */
    /**
     * Close the filter input field.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.closeFilterInput = /**
     * Close the filter input field.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var searchInputElement = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        searchInputElement.style.display = 'none';
        /** @type {?} */
        var closeIcon = (/** @type {?} */ (document.getElementsByClassName('close-icon')[0]));
        closeIcon.style.display = 'none';
    };
    /**
     * Get the key from value
     * @param value
     */
    /**
     * Get the key from value
     * @param {?} value
     * @return {?}
     */
    EnterpriseGridComponent.prototype.getkeyFromValue = /**
     * Get the key from value
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var i = 0; i < this.columnConfig.length; i++) {
            /** @type {?} */
            var val = Object.values(this.columnConfig[i]);
            if (val.includes(value)) {
                this.getKey = val[0];
                break;
            }
        }
    };
    /**
     * Clear the filter added and and show add filter button again.
     */
    /**
     * Clear the filter added and and show add filter button again.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.clearAddedFilter = /**
     * Clear the filter added and and show add filter button again.
     * @return {?}
     */
    function () {
        var _this = this;
        this.counter = 0;
        this.filterSelectedValue = {};
        this.displayFilterValue = [];
        this.clearFliter = false;
        this.enableSearchPlaceholder.enable = true;
        this.enableSearchBar.enable = true;
        this.enableSearchBar.enable = false;
        ((/** @type {?} */ (document.querySelector(".filter-info-container")))).style.display = "none";
        // this.closePopup();
        //Call the list again 
        this.clearTableData();
        this.pageNumber = 1;
        this.gridData.getFirstPage(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.gridDataList = result;
            _this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(error);
        }));
    };
    /**
     * Get filter list call through actiondispatcher.
     */
    /**
     * Get filter list call through actiondispatcher.
     * @param {?} token
     * @param {?} filterValue
     * @return {?}
     */
    EnterpriseGridComponent.prototype.getFilterList = /**
     * Get filter list call through actiondispatcher.
     * @param {?} token
     * @param {?} filterValue
     * @return {?}
     */
    function (token, filterValue) {
        var _this = this;
        this.actionDispatcher.dispatchAction(token, filterValue).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.clearTableData();
            _this.gridDataList = [];
            _this.gridDataList = result;
            _this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(error);
        }));
    };
    /** Clears grid data. */
    /**
     * Clears grid data.
     * @return {?}
     */
    EnterpriseGridComponent.prototype.clearTableData = /**
     * Clears grid data.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var table = document.getElementsByTagName("tr");
        for (var i = 0; i < table.length;) {
            ((/** @type {?} */ (table[i]))).remove();
        }
    };
    /**
     * Refresh the grid when needed
     */
    /**
     * Refresh the grid when needed
     * @return {?}
     */
    EnterpriseGridComponent.prototype.refresh = /**
     * Refresh the grid when needed
     * @return {?}
     */
    function () {
        var _this = this;
        this.gridDataList = [];
        this.counter = 0;
        this.pageNumber = 1;
        this.gridData.getFirstPage(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.clearTableData();
            _this.gridDataList = result;
            _this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(error);
        }));
    };
    /** Toggles pagination tool bar
     * @param value toggle boolean value
     */
    /**
     * Toggles pagination tool bar
     * @param {?} value toggle boolean value
     * @return {?}
     */
    EnterpriseGridComponent.prototype.togglePaginationToolbar = /**
     * Toggles pagination tool bar
     * @param {?} value toggle boolean value
     * @return {?}
     */
    function (value) {
        this.togglePagination = !value;
        /** @type {?} */
        var cdkVirtualViewport = (/** @type {?} */ (document.getElementsByClassName('cdk-virtual-scroll-content-wrapper')[0]));
        // cdkVirtualViewport.style.height = "calc(100vh - 211px)";
        console.log(cdkVirtualViewport);
        this.enableFooterToolbar.enable = this.togglePagination;
        if (this.enableFooterToolbar.enable === true) {
            for (var i = 0; i < this.pagingConfig.length; i++) {
                /** @type {?} */
                var config = this.pagingConfig[i];
                if (config.pagingType === PagingTypes.paging) {
                    this.createPagingElements(config);
                }
            }
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    EnterpriseGridComponent.prototype.createPagingElements = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        console.log(config);
        this.ref.detectChanges();
        /** @type {?} */
        var footerElement = document.getElementsByClassName('footer')[0];
        /** @type {?} */
        var div = document.createElement('div');
        div.style.marginRight = '10px';
        /** @type {?} */
        var span = document.createElement('span');
        span.className = 'material-icons';
        span.style.padding = '9px';
        span.style.borderRadius = '50%';
        span.innerText = config.iconName;
        if (config.tooltip != undefined) {
            span.setAttribute('title', config.tooltip);
        }
        span.onmouseover = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            span.style.backgroundColor = '#e0e0e0';
        });
        span.onmouseleave = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            span.style.backgroundColor = '';
        });
        span.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.stopPropagation();
            _this.actionDispatcher.dispatchAction(config.token);
        });
        div.appendChild(span);
        this.ref.detectChanges();
        footerElement.appendChild(div);
    };
    EnterpriseGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ao-enterprise-grid',
                    template: "<div class=\"gridBgColor enterp-grid-container\" id=\"enterp-grid-container\">\r\n  <mat-toolbar class=\"gridBgColor action-bar\" *ngIf=\"enableActionToolbar.enable\">\r\n    <h2>{{ gridHeader }} |</h2>\r\n    <span> Showing all {{ gridHeader + \"s\" | lowercase }}</span>\r\n\r\n    <div *ngFor=\"let coreAction of coreActions\" >\r\n      <button mat-button class=\"action-button\" (click)=\"executeCoreAction(coreAction.token)\">\r\n        {{coreAction.iconName}}\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-toolbar>\r\n\r\n  <mat-toolbar class=\"bulk-actions-toolbar\" *ngIf=\"enableBulkActionToolbar.enable\">\r\n\r\n  </mat-toolbar>\r\n\r\n  <!-- Search Tool bar -->\r\n  <mat-toolbar class=\"search-toolbar\" *ngIf=\"enableSearchToolbar.enable\">\r\n    <div class=\"button-grup\">\r\n      <!-- Show the search div after popup -->\r\n      <div class=\"filter-info-container\">\r\n        <div *ngFor=\"let name of displayFilterValue\" class=\"filter-value-div\">\r\n          <p class=\"filter-info\">{{ name }}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Column selector -->\r\n      <mat-form-field apperance=\"outline\" class=\"search-field\" *ngIf=\"enableSearchBar.enable\">\r\n        <mat-label>Select Column</mat-label>\r\n        <mat-select class=\"search-input\">\r\n          <mat-option *ngFor=\"let columnName of columnNameSuggestion\" (click)=\"openFilterInput(columnName)\" [value]=\"columnName\">\r\n            {{ columnName }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <!-- Text search -->\r\n      <div class=\"search-form-field\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label class=\"search-label\"></mat-label>\r\n          <input matInput type=\"text\" placeholder=\"Search\" #inputValue [(ngModel)]=\"searchValue\"/>\r\n          <mat-icon matPrefix>search</mat-icon>\r\n          <mat-icon matSuffix class=\"search-submit-icon\" (click)=\"filterSubmit(inputValue.value)\">arrow_forward</mat-icon>\r\n        </mat-form-field>\r\n        <mat-icon class=\"close-icon\" (click)=\"closeFilterInput();\">close</mat-icon>\r\n      </div>\r\n\r\n      <!-- Add filter button -->\r\n      <div class=\"search-placeholder\" *ngIf=\"enableSearchPlaceholder.enable\">\r\n        <button mat-button class=\"filter-button\" (click)=\"toggleToSearchBar(enableSearchPlaceholder.enable)\">\r\n          <mat-icon>add</mat-icon> Add a filter\r\n        </button>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    <!--Clear Filter button-->\r\n    <button mat-button class=\"clear-Filter\" *ngIf=\"clearFliter\" (click)=\"clearAddedFilter()\">\r\n      Clear Filter\r\n    </button>\r\n  \r\n  </mat-toolbar>\r\n\r\n  <div class=\"table-card card\">\r\n    <div class=\"th-div\"></div>\r\n\r\n    <div class=\"cdk-container\">\r\n      <cdk-virtual-scroll-viewport  itemSize=\"1\" autosize id=\"example-viewport1\" (scroll)=\"getNextBatchOfPage()\">\r\n      </cdk-virtual-scroll-viewport>\r\n    </div>\r\n    <mat-toolbar class=\"footer\" *ngIf=\"enableFooterToolbar.enable\">\r\n    \r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n",
                    styles: [".gridBgColor{background:#ebecee}.action-bar h2{margin-left:5px;color:#414c55;font-family:Questrial,sans-serif;font-weight:700;letter-spacing:1px}.action-bar span{font-weight:100;color:rgba(0,0,0,.54);font-size:15px;margin-left:2px}.action-bar .action-button{color:#3367d6}.action-bar .pagination-toggle{position:absolute;right:15px}::ng-deep .mat-slide-toggle-thumb{background-color:#5f6368}::ng-deep .mat-slide-toggle-bar{background-color:#d3d3d3}.search-toolbar{background:#fff}.search-toolbar .clear-Filter,.search-toolbar .filter-button{border:1px dashed rgba(0,0,0,.26);border-radius:34px;transition:opacity .1s cubic-bezier(.4,0,.2,1);color:rgba(0,0,0,.54)}.search-toolbar .clear-Filter{position:absolute;right:10px}.search-toolbar .search-field,.search-toolbar .search-placeholder{border:none;font-size:14px;height:40px;min-width:200px;outline:0;padding:0;margin:21px 14px}.search-toolbar .search-input{border-spacing:0 0}.search-toolbar .button-grup{position:absolute;display:flex}.search-toolbar .button-grup .filter-info-container{display:none}.search-toolbar .button-grup .filter-info-container .filter-info{background-color:#d3d3d3;border-radius:25px;font-size:15px;padding:0 5px;margin:21px 14px}.search-toolbar .button-grup .bulk-delete-icon{display:none}.search-toolbar .search-form-field{display:none;margin-top:14px;font-size:12px}.search-toolbar .search-form-field .search-submit-icon{cursor:pointer;color:#3367d6;font-size:x-large}.search-toolbar .search-form-field .close-icon{display:none;font-size:18px;cursor:pointer}.mat-toolbar-row,.mat-toolbar-single-row{height:55px}*{word-wrap:break-word;border-spacing:0 5px}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#20b2aa}.table-card{padding:11px}.table-card .th-div{width:93.58%;display:flex}.table-card #example-viewport1{height:calc(100vh - 168px);width:100%;overflow-x:hidden}.footer{background:#f0f1f3;font:400 13.3333px Arial;color:#5f6368;position:fixed;bottom:0}"]
                }] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EnterpriseGridComponent.ctorParameters = function () { return [
        { type: EnterpriseGridService },
        { type: ChangeDetectorRef }
    ]; };
    EnterpriseGridComponent.propDecorators = {
        virtualScroll: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false },] }]
    };
    /** @nocollapse */ EnterpriseGridComponent.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseGridComponent_Factory() { return new EnterpriseGridComponent(i0.ɵɵinject(i1.EnterpriseGridService), i0.ɵɵinject(i0.ChangeDetectorRef)); }, token: EnterpriseGridComponent, providedIn: "root" });
    return EnterpriseGridComponent;
}());
export { EnterpriseGridComponent };
if (false) {
    /** @type {?} */
    EnterpriseGridComponent.prototype.featureConfig;
    /** @type {?} */
    EnterpriseGridComponent.prototype.columnConfig;
    /** @type {?} */
    EnterpriseGridComponent.prototype.actionConfig;
    /** @type {?} */
    EnterpriseGridComponent.prototype.pagingConfig;
    /** @type {?} */
    EnterpriseGridComponent.prototype.gridData;
    /** @type {?} */
    EnterpriseGridComponent.prototype.gridDataList;
    /** @type {?} */
    EnterpriseGridComponent.prototype.gridHeader;
    /** @type {?} */
    EnterpriseGridComponent.prototype.searchValue;
    /** @type {?} */
    EnterpriseGridComponent.prototype.filterName;
    /** @type {?} */
    EnterpriseGridComponent.prototype.selectedEntities;
    /** @type {?} */
    EnterpriseGridComponent.prototype.columnNameSuggestion;
    /** @type {?} */
    EnterpriseGridComponent.prototype.clearFliter;
    /** @type {?} */
    EnterpriseGridComponent.prototype.filterSelectedValue;
    /** @type {?} */
    EnterpriseGridComponent.prototype.displayFilterValue;
    /** @type {?} */
    EnterpriseGridComponent.prototype.getKey;
    /** @type {?} */
    EnterpriseGridComponent.prototype.pageSize;
    /** @type {?} */
    EnterpriseGridComponent.prototype.pageNumber;
    /** @type {?} */
    EnterpriseGridComponent.prototype.coreActions;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableActionToolbar;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableSearchToolbar;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableSearchPlaceholder;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableSearchBar;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableBulkActionToolbar;
    /** @type {?} */
    EnterpriseGridComponent.prototype.selectRow;
    /** @type {?} */
    EnterpriseGridComponent.prototype.enableFooterToolbar;
    /** @type {?} */
    EnterpriseGridComponent.prototype.onRowClick;
    /** @type {?} */
    EnterpriseGridComponent.prototype.filterValue;
    /** @type {?} */
    EnterpriseGridComponent.prototype.row;
    /** @type {?} */
    EnterpriseGridComponent.prototype.cdkVirtualViewport;
    /** @type {?} */
    EnterpriseGridComponent.prototype.tdElement;
    /** @type {?} */
    EnterpriseGridComponent.prototype.thElement;
    /** @type {?} */
    EnterpriseGridComponent.prototype.checkbox;
    /**
     * @type {?}
     * @private
     */
    EnterpriseGridComponent.prototype.actionDispatcher;
    /** @type {?} */
    EnterpriseGridComponent.prototype.counter;
    /** @type {?} */
    EnterpriseGridComponent.prototype.togglePagination;
    /** @type {?} */
    EnterpriseGridComponent.prototype.virtualScroll;
    /** @type {?} */
    EnterpriseGridComponent.prototype.eventEmmiter;
    /**
     * @type {?}
     * @private
     */
    EnterpriseGridComponent.prototype.gridService;
    /**
     * @type {?}
     * @private
     */
    EnterpriseGridComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUVuRDtJQXFGRSxpQ0FBb0IsV0FBa0MsRUFBVSxHQUFzQjtRQUFsRSxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUExRXRGLGtCQUFhLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7UUFHNUIsaUJBQVksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUUzQixpQkFBWSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFLM0IsaUJBQVksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFPeEIscUJBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7UUFHL0IseUJBQW9CLEdB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LDBEQUE4RTs7SUFDOUUsa0RBQThEOztJQUM5RCwwREFBOEU7O0lBQzlFLDRDQUFrRDs7SUFFbEQsc0RBQXNFOztJQUV0RSw2Q0FBNkQ7O0lBQzdELDhDQUErRDs7SUFFL0Qsc0NBQXlCOztJQUN6QixxREFBbUI7O0lBQ25CLDRDQUFnQzs7SUFDaEMsNENBQXNDOztJQUN0QywyQ0FBUzs7Ozs7SUFFVCxtREFBMkM7O0lBRTNDLDBDQUFvQjs7SUFFcEIsbURBQXlCOztJQUV6QixnREFBZ0c7O0lBQ2hHLCtDQUFrQjs7Ozs7SUFFTiw4Q0FBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdGFibGUsIFZpZXdDaGlsZCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgR3JpZERhdGEgfSBmcm9tICcuLi9hY3Rpb24vR3JpZERhdGEnO1xyXG5pbXBvcnQgeyBFbnRlcnByaXNlR3JpZFNlcnZpY2UgfSBmcm9tICcuL2VudGVycHJpc2UtZ3JpZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9jb25maWcvQWN0aW9uVHlwZSc7XHJcbmltcG9ydCB7IEFjdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi9hY3Rpb24vQWN0aW9uRGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IEZlYXR1cmVDb25maWcgfSBmcm9tICcuLi9jb25maWcvRmVhdHVyZUNvbmZpZyc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9BY3Rpb25Db25maWcnO1xyXG5pbXBvcnQgeyBBY3Rpb25Qb3NpdGlvbiB9IGZyb20gJy4uL2NvbmZpZy9BY3Rpb25Qb3NpdGlvbic7XHJcbmltcG9ydCB7IFBhZ2luZ1R5cGVzIH0gZnJvbSAnLi4vY29uZmlnL1BhZ2luZ1R5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhby1lbnRlcnByaXNlLWdyaWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRlcnByaXNlLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VudGVycHJpc2UtZ3JpZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbnRlcnByaXNlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy9HcmlkIGNvbmZpZyBpbmZvLlxyXG4gIGZlYXR1cmVDb25maWcgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgLy9Db2x1bW4gQ29uZmlnIGluZm8uXHJcbiAgY29sdW1uQ29uZmlnID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIGFjdGlvbkNvbmZpZyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICBwYWdpbmdDb25maWcgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgLy9EYXRhIExpc3RcclxuICBncmlkRGF0YTogR3JpZERhdGE7XHJcblxyXG4gIGdyaWREYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xyXG5cclxuICBncmlkSGVhZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLy9TZWFyY2ggVmFsdWVcclxuICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBmaWx0ZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHNlbGVjdGVkRW50aXRpZXMgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgLy9Db2x1bW5OYW1lIFN1Z2dlc3Rpb25cclxuICBjb2x1bW5OYW1lU3VnZ2VzdGlvbiA9IFtdO1xyXG5cclxuICAvL0NsZWFyIEZpbHRlclxyXG4gIGNsZWFyRmxpdGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vQWRkIEZpbHRlciBCdXR0b24gbG9vcFxyXG4gIGZpbHRlclNlbGVjdGVkVmFsdWUgPSB7fTtcclxuXHJcbiAgLy9EaXNwbGF5IGZpbHRlciBsb29wIFxyXG4gIGRpc3BsYXlGaWx0ZXJWYWx1ZSA9IFtdO1xyXG5cclxuICAvL0tleSBmb3Igc2VhcmNoIGRhdGFcclxuICBnZXRLZXk7XHJcblxyXG4gIC8vcGFnZSBzaXplXHJcbiAgcGFnZVNpemUgPSAxMDtcclxuXHJcbiAgLy9wYWdlTm9cclxuICBwYWdlTnVtYmVyID0gMTtcclxuXHJcbiAgLy9jb3JlQWN0aW9uc1xyXG4gIGNvcmVBY3Rpb25zID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIGVuYWJsZUFjdGlvblRvb2xiYXIgPSBuZXcgRmVhdHVyZUNvbmZpZyhcImVuYWJsZUFjdGlvblRvb2xiYXJcIiwgZmFsc2UpO1xyXG4gIGVuYWJsZVNlYXJjaFRvb2xiYXIgPSBuZXcgRmVhdHVyZUNvbmZpZyhcImVuYWJsZVNlYXJjaFRvb2xiYXJcIiwgZmFsc2UpO1xyXG4gIGVuYWJsZVNlYXJjaFBsYWNlaG9sZGVyID0gbmV3IEZlYXR1cmVDb25maWcoXCJlbmFibGVTZWFyY2hQbGFjZWhvbGRlclwiLCBmYWxzZSk7XHJcbiAgZW5hYmxlU2VhcmNoQmFyID0gbmV3IEZlYXR1cmVDb25maWcoXCJlbmFibGVTZWFyY2hCYXJcIiwgZmFsc2UpO1xyXG4gIGVuYWJsZUJ1bGtBY3Rpb25Ub29sYmFyID0gbmV3IEZlYXR1cmVDb25maWcoXCJlbmFibGVCdWxrQWN0aW9uVG9vbGJhclwiLCBmYWxzZSk7XHJcbiAgc2VsZWN0Um93ID0gbmV3IEZlYXR1cmVDb25maWcoXCJzZWxlY3RSb3dcIiwgZmFsc2UpOyAgLy8gVG8gZW5hYmxlIGNoZWNrYm94ZXNcclxuXHJcbiAgZW5hYmxlRm9vdGVyVG9vbGJhciA9IG5ldyBGZWF0dXJlQ29uZmlnKFwiZW5hYmxlRm9vdGVyVG9vbGJhclwiLCBmYWxzZSk7XHJcblxyXG4gIG9uUm93Q2xpY2sgPSBuZXcgQWN0aW9uQ29uZmlnKFwib25Sb3dDbGlja1wiLCB0cnVlLCBcIlwiLCBmYWxzZSk7XHJcbiAgZmlsdGVyVmFsdWUgPSBuZXcgQWN0aW9uQ29uZmlnKFwiZmlsdGVyVmFsdWVcIiwgdHJ1ZSwgXCJcIiwgZmFsc2UpO1xyXG5cclxuICByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQ7XHJcbiAgY2RrVmlydHVhbFZpZXdwb3J0O1xyXG4gIHRkRWxlbWVudDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQ7XHJcbiAgdGhFbGVtZW50OiBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudDtcclxuICBjaGVja2JveDtcclxuXHJcbiAgcHJpdmF0ZSBhY3Rpb25EaXNwYXRjaGVyOiBBY3Rpb25EaXNwYXRjaGVyO1xyXG5cclxuICBjb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICB0b2dnbGVQYWdpbmF0aW9uID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogZmFsc2UgfSkgdmlydHVhbFNjcm9sbDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xyXG4gIGV2ZW50RW1taXRlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRTZXJ2aWNlOiBFbnRlcnByaXNlR3JpZFNlcnZpY2UsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBbXTtcclxuICAgIHRoaXMuZXZlbnRFbW1pdGVyID0gdGhpcy5ncmlkU2VydmljZS5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZVBhZ2luYXRpb24pO1xyXG4gIH1cclxuICBcclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmV2ZW50RW1taXRlcikge1xyXG4gICAgICB0aGlzLmV2ZW50RW1taXRlci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgY29yZSBhY3Rpb25zIHRvIHRoZSBncmlkICovXHJcbiAgcHJpdmF0ZSBzZXRDb3JlQWN0aW9ucygpOnZvaWR7XHJcbiAgICAgIGZvcihsZXQgYWN0aW9uQ29uZmlnIG9mIHRoaXMuYWN0aW9uQ29uZmlnKXtcclxuICAgICAgICAgIGlmKGFjdGlvbkNvbmZpZy50eXBlID09PSBBY3Rpb25UeXBlcy5jb3JlICYmIGFjdGlvbkNvbmZpZy5lbmFibGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmNvcmVBY3Rpb25zLnB1c2goYWN0aW9uQ29uZmlnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvcmVBY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIHNldCBzZXRHcmlkRGF0YShkYXRhOiBHcmlkRGF0YSkge1xyXG4gICAgdGhpcy5ncmlkRGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGdyaWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdyaWQuXHJcbiAgICogQHBhcmFtIGRhdGEgZ3JpZCBkYXRhXHJcbiAgICovXHJcbiAgc2V0IHNldEdyaWRDb25maWcoZGF0YSkge1xyXG5cclxuICAgIGlmIChkYXRhLnBhZ2VTaXplICE9IHVuZGVmaW5lZCB8fCBkYXRhLnBhZ2VTaXplICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IGRhdGEucGFnZVNpemU7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGFnZVNpemUsIFwic2V0IGdyaWQgY29uZmlnXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ3JpZEhlYWRlciA9IGRhdGEuZ3JpZEhlYWRlcjtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gZGF0YS5jb2x1bW5Db25maWdBcnI7XHJcbiAgICB0aGlzLmZlYXR1cmVDb25maWcgPSBkYXRhLmZlYXR1cmVDb25maWdBcnI7XHJcbiAgICB0aGlzLmFjdGlvbkNvbmZpZyA9IGRhdGEuYWN0aW9uQ29uZmlnQXJyOyBcclxuICAgIHRoaXMucGFnaW5nQ29uZmlnID0gZGF0YS5wYWdpbmdDb25maWdBcnI7XHJcblxyXG4gICAgdGhpcy5zb3J0R3JpZENvbmZpZyh0aGlzLmZlYXR1cmVDb25maWcpO1xyXG4gICAgdGhpcy5zb3J0R3JpZENvbmZpZyh0aGlzLmFjdGlvbkNvbmZpZyk7XHJcbiAgICB0aGlzLmdldENvbHVtbk5hbWUodGhpcy5jb2x1bW5Db25maWcpO1xyXG4gICAgdGhpcy5zZXRDb3JlQWN0aW9ucygpO1xyXG4gICAgdGhpcy5zZXRHcmlkRGF0YVRvR3JpZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgZ3JpZCBkYXRhIHRvIGdyaWQgKi9cclxuICBzZXRHcmlkRGF0YVRvR3JpZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGFnZVNpemUsIFwic2V0IGdyaWQgZGF0YVwiKTtcclxuICAgIHRoaXMuZ3JpZERhdGEuZ2V0Rmlyc3RQYWdlKHRoaXMucGFnZU51bWJlciwgdGhpcy5wYWdlU2l6ZSkudGhlbihcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFyVGFibGVEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkRGF0YUxpc3QgPSByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzb3J0cyB0aGUgZ3JpZCBjb25maWd1cmF0aW9uLlxyXG4gICAqIEBwYXJhbSBncmlkQ29uZmlnIEpTT04gb2JqZWN0IG9mIGdyaWQgY29uZmlndXJhdGlvbi5cclxuICAgKi9cclxuICBzb3J0R3JpZENvbmZpZyhncmlkQ29uZmlnKSB7XHJcbiAgICBsZXQgZW50ZXJwR3JpZENvbXBLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRlcnBHcmlkQ29tcEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkQ29uZmlnLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGdyaWRDb25maWdbal0ubmFtZSA9PT0gZW50ZXJwR3JpZENvbXBLZXlzW2ldKSB7XHJcbiAgICAgICAgICB0aGlzW2VudGVycEdyaWRDb21wS2V5c1tpXV0gPSBncmlkQ29uZmlnW2pdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIENhbGN1bGF0ZXMgZ3JpZCBjb2x1bW4gd2lkdGguICovXHJcbiAgc2V0V2lkdGhCeUNvbHVtbigpOiBudW1iZXIge1xyXG4gICAgY29uc3QgY291bnQgPSAxMDAgLyB0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGg7XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBncmlkIHJvd3MgYW5kIGFkZCBzdHlsZXNcclxuICAgKiBAcGFyYW0gdmFsdWUgY291bnRlciB2YWx1ZVxyXG4gICAqL1xyXG4gIGNyZWF0ZVJvd3ModmFsdWUpIHtcclxuICAgIHRoaXMucm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICBpZiAodGhpcy5vblJvd0NsaWNrKSB7XHJcbiAgICAgIHRoaXMucm93Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKHRoaXMub25Sb3dDbGljay50b2tlbiwgdGhpcy5ncmlkRGF0YUxpc3RbdmFsdWVdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb3cub25tb3VzZW92ZXIgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIGxldCByb3cgPSAoJGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAvLyByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNjMsODEsMTgxLC4xNSknO1xyXG4gICAgICAvLyByb3cuc3R5bGUuY29sb3IgPSAnIzNmNTFiNSc7XHJcbiAgICAgIGxldCBhID0gcm93LmNoaWxkTm9kZXNbcm93LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIGEuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAoYS5jaGlsZE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb3cub25tb3VzZW91dCA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgbGV0IHJvdyA9ICgkZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgIC8vIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAvLyByb3cuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICBsZXQgYSA9IHJvdy5jaGlsZE5vZGVzW3Jvdy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAvLyBhLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAoYS5jaGlsZE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcclxuICAgIHRoaXMucm93LnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuICAgIHRoaXMucm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1yb3ctZGF0YVwiKTtcclxuICAgIHRoaXMuY2RrVmlydHVhbFZpZXdwb3J0LmFwcGVuZENoaWxkKHRoaXMucm93KTtcclxuICAgIHRoaXMuc3R5bGVDZWxscygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgZ3JpZCBjZWxscyBhbmQgYWRkIHN0eWxlcyB0byB0YWJsZSBkYXRhLiAqL1xyXG4gIHN0eWxlQ2VsbHMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnRkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAnMTBweCc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnMTBweCc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjZGRkJztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlF1ZXN0cmlhbFwiLCBzYW5zLXNlcmlmJztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMzlweCc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLnNldFdpZHRoQnlDb2x1bW4oKSArICclJztcclxuICAgICAgdGhpcy5yb3cuYXBwZW5kQ2hpbGQodGhpcy50ZEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgdGFibGUgaGVhZGluZyAqL1xyXG4gIGNyZWF0ZVRhYmxlSGVhZGluZygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYmxlSGVhZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aC1kaXZcIilbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRhYmxlSGVhZERpdi5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5Db25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4IDBweCAxMHB4IDEwcHgnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNkZGQnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnXCJRdWVzdHJpYWxcIiwgc2Fucy1zZXJpZic7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9ICcxcHgnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxNnB4JztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5jb2xvciA9ICdyZ2JhKDAsMCwwLC41NCknO1xyXG4gICAgICAgIC8vIHRoaXMudGhFbGVtZW50LndoaXRlU3BhY2UgPSAnbm93cmFwJztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuc2V0V2lkdGhCeUNvbHVtbigpICsgJyUnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2x1bW5Db25maWdbaV0ubmFtZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVDaGVja2JveChcInNkYXNcIiwgXCJncmlkRWxlbWVudFwiKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tib3guc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XHJcbiAgICAgICAgICB0aGlzLnRoRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrYm94KTtcclxuICAgICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFJvdy5nZXRFbmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwJVwiO1xyXG4gICAgICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlLWNlbGwnO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmNvbHVtbkNvbmZpZ1tpXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy50aEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb2x1bW5Db25maWdbaV0uaXRlbTtcclxuICAgICAgICAgIHRoaXMudGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoaGVhZE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFibGVIZWFkRGl2LmFwcGVuZENoaWxkKHRoaXMudGhFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSBjaGVja2JveGVzXHJcbiAgICogQHBhcmFtIHZhbHVlIGNvdW50ZXIgdmFsdWVcclxuICAgKiBAcGFyYW0gZ3JpZEVsZW1lbnQgZ3JpZCBkYXRhIG9iamVjdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVDaGVja2JveCh2YWx1ZSwgZ3JpZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICB0aGlzLmNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgICB0aGlzLmNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICB0aGlzLmNoZWNrYm94LnN0eWxlLnRyYW5zaXRpb24gPSAnYmFja2dyb3VuZCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSc7XHJcbiAgICB0aGlzLmNoZWNrYm94LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIHRoaXMuY2hlY2tib3guc3R5bGUuaGVpZ2h0ID0gJzE2cHgnO1xyXG4gICAgdGhpcy5jaGVja2JveC5zdHlsZS5tYXJnaW4gPSAnNnB4JztcclxuICAgIHRoaXMuY2hlY2tib3guc3R5bGUud2lkdGggPSAnMTZweCc7XHJcbiAgICB0aGlzLmNoZWNrYm94LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTdweCc7XHJcblxyXG4gICAgLy9TZWxlY3QgdGhlIGNoZWNrIGJveCB3b3JrIGluIHByb2dyZXNzXHJcbiAgICB0aGlzLmNoZWNrYm94Lm9uY2xpY2sgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLmNoZWNrYm94IGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgIGlmKGdyaWRFbGVtZW50ID09PSAnZ3JpZEVsZW1lbnQnKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94T2JqTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrYm94Jyk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgdGhpcy5ncmlkRGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmKGNoZWNrYm94T2JqTGlzdFswXVsnY2hlY2tlZCddID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94T2JqTGlzdFtpKzFdWydjaGVja2VkJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tib3hPYmpMaXN0W2krMV1bJ2NoZWNrZWQnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RlZENoZWNrYm94ZXNBcnJheSgkZXZlbnQsIHRoaXMuZ3JpZERhdGFMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmKGNoZWNrYm94T2JqTGlzdFswXVsnY2hlY2tlZCddID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZihjaGVja2JveE9iakxpc3RbaSsxXVsnY2hlY2tlZCddID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tib3hPYmpMaXN0W2krMV1bJ2NoZWNrZWQnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0ZWRDaGVja2JveGVzQXJyYXkoJGV2ZW50LCB0aGlzLmdyaWREYXRhTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0ZWRDaGVja2JveGVzQXJyYXkoJGV2ZW50LCBncmlkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU3RvcmVzIGFsbCB0aGUgc2VsZWN0ZWQvY2hlY2tlZCBncmlkIG9iamVjdHMgaW50byBhbiBhcnJheSB0byBwZXJmb3JtIGJ1bGsgYWN0aW9ucy4gXHJcbiAgICogQHBhcmFtICRldmVudCBNb3VzZSBldmVudFxyXG4gICAqIEBwYXJhbSBncmlkRWxlbWVudCBncmlkIGRhdGEgb2JqZWN0XHJcbiAgKi9cclxuICBwdWJsaWMgY3JlYXRlU2VsZWN0ZWRDaGVja2JveGVzQXJyYXkoJGV2ZW50LCBncmlkRWxlbWVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlQWN0aW9uVG9vbGJhci5lbmFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZW5hYmxlQnVsa0FjdGlvblRvb2xiYXIuZW5hYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xlYXJGbGl0ZXIgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBcclxuICAgIC8qKiBJZiBjaGVja2JveCB0cnVlLCBwdXNoIGVsZW1lbnQgdG8gYXJyYXkuICovXHJcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdGllcy5wdXNoKGdyaWRFbGVtZW50KTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCRldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgIC8qKiBSZW1vdmVzIHRoZSBncmlkIG9iamVjdCBmcm9tIHRoZSBhcnJheSBpZiB1c2VyIHVuY2hlY2tzL2Rlc2VsZWN0cy4gKi9cclxuICAgICAgZm9yKGxldCBvYmogb2YgdGhpcy5zZWxlY3RlZEVudGl0aWVzKSB7XHJcbiAgICAgICAgaWYob2JqLmlkID09PSBncmlkRWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0aWVzLnNwbGljZSh0aGlzLnNlbGVjdGVkRW50aXRpZXMuaW5kZXhPZihvYmopLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQnVsa0FjdGlvbkVudGl0aWVzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGJ1bGsgYWN0aW9ucywgaW4tcGxhY2UgYW5kIGluLXNlbGVjdG9yIGluIGJ1bGsgYWN0aW9uIHRvb2xiYXIuIFxyXG4gICAqIFdoZW4gbXVsdGlwbGUgZ3JpZCBlbGVtZW50cyBhcmUgc2VsZWN0ZWQgdGhyb3VnaCBjaGVja2JveGVzLCB0aGlzIG1ldGhvZCBhZGRzIGJ1bGsgYWN0aW9ucyB0byBidWxrIGFjdGlvbiB0b29sYmFyLlxyXG4gICAqL1xyXG4gIGNyZWF0ZUJ1bGtBY3Rpb25FbnRpdGllcygpIHtcclxuXHJcbiAgICBsZXQgYnVsa0FjdGlvblRvb2xiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidWxrLWFjdGlvbnMtdG9vbGJhcicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGlmKHRoaXMuc2VsZWN0ZWRFbnRpdGllcyAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGggPT0gMSAmJiBidWxrQWN0aW9uVG9vbGJhci5pbm5lckhUTUwgPT0gJycpIHtcclxuXHJcbiAgICAgIGxldCBzZWxlY3Rvck1lbnVJY29uQ3JlYXRlZDogbnVtYmVyID0gMDtcclxuICAgICAgbGV0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aW9uQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuYWN0aW9uQ29uZmlnW2ldO1xyXG4gICAgICAgIGlmIChjb25maWcudHlwZSA9PT0gQWN0aW9uVHlwZXMuZW50aXR5KSB7XHJcbiAgICAgICAgICBpZihjb25maWcuaXNCdWxrID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBpZihjb25maWcucG9zaXRpb25UeXBlID09PSBBY3Rpb25Qb3NpdGlvbi5zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgIHNlbGVjdG9yTWVudUljb25DcmVhdGVkKys7XHJcblxyXG4gICAgICAgICAgICAgIGlmKHNlbGVjdG9yTWVudUljb25DcmVhdGVkID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBidWxrQWN0aW9uVG9vbGJhci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFjdGlvblNlbGVjdG9yRHJvcGRvd24oZHJvcGRvd25Db250ZW50KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEcm9wZG93bk1lbnVJdGVtcyhjb25maWcpKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbmZpZy5wb3NpdGlvblR5cGUgPT09IEFjdGlvblBvc2l0aW9uLmlucGxhY2UpIHtcclxuICAgICAgICAgICAgICBidWxrQWN0aW9uVG9vbGJhci5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ1bGtBY3Rpb25zKGNvbmZpZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5zZWxlY3RlZEVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgYnVsa0FjdGlvblRvb2xiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidWxrLWFjdGlvbnMtdG9vbGJhcicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBidWxrQWN0aW9uVG9vbGJhci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBidWxrQWN0aW9uVG9vbGJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG5cclxuICAgICAgdGhpcy5lbmFibGVBY3Rpb25Ub29sYmFyLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZW5hYmxlQnVsa0FjdGlvblRvb2xiYXIuZW5hYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIGFjdGlvbnMgaW4tc2VsZWN0b3IgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0gZHJvcGRvd25Db250ZW50IGRyb3Bkb3duIGNvbnRlbnQgZGl2IEhUTUxFbGVtZW50XHJcbiAgICogQHJldHVybiBkcm9wZG93biBIVE1MRWxlbWVudFxyXG4gICAqL1xyXG4gIGNyZWF0ZUFjdGlvblNlbGVjdG9yRHJvcGRvd24oZHJvcGRvd25Db250ZW50KSB7XHJcblxyXG4gICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93bi5jbGFzc05hbWUgPSBcImRyb3Bkb3duXCI7XHJcbiAgICBkcm9wZG93bi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcblxyXG4gICAgbGV0IHRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZERpdi5jbGFzc05hbWUgPSBcImVudGl0eS1ldmVudFwiO1xyXG4gICAgdGREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICB0ZERpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxOHB4XCI7XHJcblxyXG4gICAgbGV0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWVudUljb24uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjIwcHhcIjtcclxuICAgIG1lbnVJY29uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgbWVudUljb24uc3R5bGUuY3NzRmxvYXQgPSBcInJpZ2h0XCI7XHJcbiAgICBtZW51SWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xyXG4gICAgbWVudUljb24uaW5uZXJUZXh0ID0gJ21vcmVfdmVydCc7XHJcblxyXG4gICAgZHJvcGRvd25Db250ZW50LmNsYXNzTmFtZSA9ICdkcm9wZG93bi1jb250ZW50JztcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5taW5XaWR0aCA9ICcxNjBweCc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuekluZGV4ID0gJzEwMDAnO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI0cHhcIjtcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5ib3hTaGFkb3cgPSAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiknO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLnRvcCA9ICcyNnB4JztcclxuXHJcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChtZW51SWNvbik7XHJcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRlbnQpO1xyXG5cclxuICAgIGRyb3Bkb3duLm9uY2xpY2sgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGlkZVNob3dBY3Rpb25TZWxlY3RvckRyb3Bkb3duKGRyb3Bkb3duQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRyb3Bkb3duO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSBhY3Rpb25zIGluLXNlbGVjdG9yIGRyb3Bkb3duIG1lbnUgaXRlbXMuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBhY3Rpb24gY29uZmlnIG9iamVjdFxyXG4gICAqIEByZXR1cm4gZHJvcGRvd25NZW51SXRlbSBIVE1MRWxlbWVudFxyXG4gICAqL1xyXG4gIGNyZWF0ZURyb3Bkb3duTWVudUl0ZW1zKGNvbmZpZykge1xyXG4gICAgbGV0IGRyb3Bkb3duTWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGRyb3Bkb3duTWVudUl0ZW0uY2xhc3NOYW1lID0gJ21hdC1tZW51LWl0ZW0nO1xyXG4gICAgZHJvcGRvd25NZW51SXRlbS5pbm5lclRleHQgPSBjb25maWcuaWNvbk5hbWU7XHJcbiAgICBkcm9wZG93bk1lbnVJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZHJvcGRvd25NZW51SXRlbS5zdHlsZS5wYWRkaW5nID0gJzFweCAxNnB4JztcclxuXHJcbiAgICBkcm9wZG93bk1lbnVJdGVtLm9uY2xpY2sgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKGNvbmZpZy50b2tlbiwgdGhpcy5zZWxlY3RlZEVudGl0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHJvcGRvd25NZW51SXRlbTtcclxuICB9XHJcblxyXG4gIC8qKiBIaWRlIGFuZCBzaG93IGFjdGlvbnMgaW4tc2VsZWN0b3IgZHJvcGRvd24gbWVudS5cclxuICAgKiBAcGFyYW0gZHJvcGRvd25Db250ZW50IGRyb3Bkb3duIGNvbnRlbnQgSFRNTEVsZW1lbnRcclxuICAgKi9cclxuICBoaWRlU2hvd0FjdGlvblNlbGVjdG9yRHJvcGRvd24oZHJvcGRvd25Db250ZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmKGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIGlmKGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XHJcbiAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIHRoZSByb3dzIGFuZCBjb2x1bW5zIG9mIHRoZSBncmlkIGFjY29yZGluZyB0byBjb2x1bW4gZGVmcyBhbmQgbW9kdWxlIGRhdGEgbGlzdCAqL1xyXG4gIGNyZWF0ZUdyaWQoKSB7XHJcbiAgICB0aGlzLmNka1ZpcnR1YWxWaWV3cG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXInKVswXTtcclxuICAgIHRoaXMuY2RrVmlydHVhbFZpZXdwb3J0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLXRhYmxlJztcclxuICAgIC8vQ3JlYXRlIHRhYmxlIGhlYWRpbmdcclxuICAgIHRoaXMuY3JlYXRlVGFibGVIZWFkaW5nKCk7XHJcblxyXG4gICAgbGV0IHRhYmxlRGF0YUNlbGwgPSBudWxsO1xyXG4gICAgbGV0IHRhYmxlUm93RGF0YSA9IG51bGw7XHJcblxyXG4gICAgZm9yICg7IHRoaXMuY291bnRlciA8IHRoaXMuZ3JpZERhdGFMaXN0Lmxlbmd0aDsgdGhpcy5jb3VudGVyKyspIHtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlUm93cyh0aGlzLmNvdW50ZXIpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVDaGVja2JveCh0aGlzLmNvdW50ZXIsIHRoaXMuZ3JpZERhdGFMaXN0W3RoaXMuY291bnRlcl0pO1xyXG5cclxuICAgICAgZm9yIChsZXQgbW9kdWxlTGlzdEtleSBpbiB0aGlzLmdyaWREYXRhTGlzdFt0aGlzLmNvdW50ZXJdKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbHVtbkNvbmZpZ0tleSBpbiB0aGlzLmNvbHVtbkNvbmZpZykge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZ1tjb2x1bW5Db25maWdLZXldLm5hbWUgPT09IG1vZHVsZUxpc3RLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZS1yb3ctZGF0YVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsYXN0Um93SW5kZXggPSB0YWJsZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICB0YWJsZVJvd0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJsZS1yb3ctZGF0YScpW2xhc3RSb3dJbmRleCAtIDFdIGFzIEhUTUxUYWJsZVJvd0VsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsID0gdGFibGVSb3dEYXRhLmNlbGxzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuY29sdW1uQ29uZmlnW2NvbHVtbkNvbmZpZ0tleV0ucG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdyaWREYXRhTGlzdFt0aGlzLmNvdW50ZXJdW21vZHVsZUxpc3RLZXldO1xyXG5cclxuICAgICAgICAgICAgdGFibGVEYXRhQ2VsbFswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgdGFibGVEYXRhQ2VsbFswXS5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFJvdy5nZXRFbmFibGUpIHtcclxuICAgICAgICAgICAgICB0YWJsZURhdGFDZWxsWzBdLnN0eWxlLndpZHRoID0gXCIxMCVcIjtcclxuICAgICAgICAgICAgICB0YWJsZURhdGFDZWxsWzBdLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtY2VsbCc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsW3Bvc10uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5yaWdodCA9IDAgKyBcInB4XCI7XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xyXG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgLy8gdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQodGhpcy5hZGRFbnRpdHlBY3Rpb24odGhpcy5jb3VudGVyKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdyaWREYXRhLm9uR3JpZERhdGFMb2FkKHRoaXMuZ3JpZERhdGFMaXN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgZW50aXR5IGFjdGlvbiBvbiBncmlkIHJvd3MsIGZvciBub24tYnVsayBhY3Rpb25zLlxyXG4gICAqIEBwYXJhbSBjb3VudGVyIGNvdW50ZXIgZm9yIHRoZSBudW1iZXIgb2Ygcm93c1xyXG4gICAqIEByZXR1cm5zIGRpdiBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRFbnRpdHlBY3Rpb24oY291bnRlcjogbnVtYmVyKSB7XHJcblxyXG4gICAgbGV0IHRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZERpdi5jbGFzc05hbWUgPSBcImVudGl0eS1ldmVudFwiO1xyXG4gICAgdGREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgdGREaXYuc3R5bGUudG9wID0gXCIydmhcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY3Rpb25Db25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuYWN0aW9uQ29uZmlnW2ldO1xyXG4gICAgICBpZiAoY29uZmlnLnR5cGUgPT09IEFjdGlvblR5cGVzLmVudGl0eSkge1xyXG4gICAgICAgIGlmKGNvbmZpZy5pc0J1bGsgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0ZERpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgICAgbGV0IHNwYW4gPSB0aGlzLmNyZWF0ZUFjdGlvblNwYW5FbGVtZW50KGNvbmZpZyk7XHJcbiAgICAgICAgICB0ZERpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgIHNwYW4ub25jbGljayA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbihjb25maWcudG9rZW4sIHRoaXMuZ3JpZERhdGFMaXN0W2NvdW50ZXJdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRkRGl2O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBidWxrIGFjdGlvbnMgVUkgZWxlbWVudHMgdG8gYnVsayBhY3Rpb24gdG9vbGJhciBhbmQgYWRkcyBhIGFjdGlvbiBkaXNwYXRjaGVyIG9uIG9uY2xpY2sgZXZlbnQuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBBY3Rpb24gQ29uZmlndXJhdGlvbiBhcnJheVxyXG4gICAqIEByZXR1cm5zIGRpdiBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRCdWxrQWN0aW9ucyhjb25maWc6IEFjdGlvbkNvbmZpZykge1xyXG5cclxuICAgIGxldCB0ZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGREaXYuY2xhc3NOYW1lID0gXCJlbnRpdHktZXZlbnRcIjtcclxuICAgIHRkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgdGREaXYuc3R5bGUubWFyZ2luTGVmdCA9IFwiMThweFwiO1xyXG4gICAgdGREaXYuc3R5bGUuZm9udFNpemUgPSBcIjE1cHhcIjtcclxuXHJcbiAgICBsZXQgc3BhbiA9IHRoaXMuY3JlYXRlQWN0aW9uU3BhbkVsZW1lbnQoY29uZmlnKTtcclxuXHJcbiAgICB0ZERpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIHNwYW4ub25jbGljayA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24oY29uZmlnLnRva2VuLCB0aGlzLnNlbGVjdGVkRW50aXRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZERpdjtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIHNwYW4gZWxlbWVudCBmb3IgdGhlIFVJIGFjdGlvbiBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSBjb25maWcgQWN0aW9uIENvbmZpZ3VyYXRpb24gYXJyYXlcclxuICAgKiBAcmV0dXJucyBzcGFuIGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUFjdGlvblNwYW5FbGVtZW50KGNvbmZpZzogQWN0aW9uQ29uZmlnKSB7XHJcblxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjIwcHhcIjtcclxuICAgIHNwYW4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICBzcGFuLnN0eWxlLmNzc0Zsb2F0ID0gXCJyaWdodFwiO1xyXG4gICAgaWYoY29uZmlnLnRvb2x0aXAgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50b29sdGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLmlzSWNvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgIH1cclxuICAgIHNwYW4uaW5uZXJUZXh0ID0gY29uZmlnLmljb25OYW1lO1xyXG4gICAgY29uc3Qgc3BhbkNsYXNzID0gY29uZmlnLmljb25OYW1lO1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHNwYW5DbGFzcy5yZXBsYWNlKC8gL2csIFwiX1wiKSk7XHJcblxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICAvKiogRmV0Y2hlcyBuZXh0IHNldCBvZiBncmlkIHJlY29yZHMgb24gc2Nyb2xsIHRvIGJvdHRvbS4gKi9cclxuICBwdWJsaWMgZ2V0TmV4dEJhdGNoT2ZQYWdlKCkge1xyXG5cclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwubWVhc3VyZVNjcm9sbE9mZnNldCgnYm90dG9tJykgPT09IDApIHtcclxuXHJcbiAgICAgIHRoaXMuZ3JpZERhdGEuZ2V0TmV4dFBhZ2UoKyt0aGlzLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVNpemUpLnRoZW4oXHJcbiAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgIGlmKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ncmlkRGF0YUxpc3QucHVzaChyZXN1bHRbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZERhdGFMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVHcmlkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yd2FyZCB0aGUgZXZlbnQgdG8gZGlzcGF0Y2ggYWN0aW9uIHdpdGggdG9rZW5zIGFuZCBwYXJhbWV0ZXJzLlxyXG4gICAqL1xyXG4gIGV4ZWN1dGVDb3JlQWN0aW9uKHRva2VuKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24odG9rZW4pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXQgc2V0QWN0aW9uRGlzcGF0Y2hlcih2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBUb2dnbGVzIGZyb20gc2VhcmNoIHBsYWNlaG9sZGVyIHRvIHNlYXJjaCBiYXIvYm94IGJ5IHNldHRpbmcgdGhlIGRpc3BsYXkgdmFsdWVcclxuICAgKiBBbHNvIGdldCB0aGUgcG9zaXRpb24gYW5kIHNldCB0byBtb2RlbCBwb3B1cC5cclxuICAgKiBDbGVhciBidXR0b24gZW5hYmxlLlxyXG4gICAqL1xyXG4gIHRvZ2dsZVRvU2VhcmNoQmFyKGVuYWJsZSkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1idXR0b25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBsZXQgeCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0aGlzLmVuYWJsZVNlYXJjaEJhci5lbmFibGUgPSBlbmFibGU7XHJcbiAgICB0aGlzLmNsZWFyRmxpdGVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGlzdCBvZiBjb2x1bW4gbmFtZSBGb3Igc3VnZ2VzdGlvblxyXG4gICAqL1xyXG4gIGdldENvbHVtbk5hbWUoY29sdW1uTGlzdCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKGNvbHVtbkxpc3RbaV0ubmFtZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5OYW1lU3VnZ2VzdGlvbi5wdXNoKGNvbHVtbkxpc3RbaV0uaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gdGhlIEZpbHRlciBJbnB1dFxyXG4gICAqL1xyXG4gICBvcGVuRmlsdGVySW5wdXQodmFsdWUpIHtcclxuICAgIHRoaXMuZmlsdGVyTmFtZSA9IHZhbHVlO1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLWZvcm0tZmllbGQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBsZXQgY2xvc2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UtaWNvbicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY2xvc2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnY29udGVudHMnO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlU2VhcmNoQmFyLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtbGFiZWxcIikudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdmFsdWUgQ29sdW1uIE5hbWUgYW5kIEZpbHRlciBzZWFyY2ggdmFsdWVcclxuICAgKi9cclxuICBmaWx0ZXJTdWJtaXQoc2VhcmNoVmFsdWUpIHtcclxuXHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpbHRlci1pbmZvLWNvbnRhaW5lclwiKVswXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiY29udGVudHNcIjtcclxuXHJcbiAgICBsZXQgc2VhcmNoSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLWZvcm0tZmllbGQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHNlYXJjaElucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpbHRlck5hbWUgKyBcIiA6IFwiICsgc2VhcmNoVmFsdWU7XHJcbiAgICB0aGlzLmRpc3BsYXlGaWx0ZXJWYWx1ZS5wdXNoKHNlbGVjdGVkVmFsdWUpO1xyXG4gICAgdGhpcy5nZXRrZXlGcm9tVmFsdWUodGhpcy5maWx0ZXJOYW1lKTtcclxuXHJcbiAgICB0aGlzLmVuYWJsZVNlYXJjaEJhci5lbmFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRWYWx1ZVt0aGlzLmdldEtleV0gPSBzZWFyY2hWYWx1ZTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmdldEZpbHRlckxpc3QodGhpcy5maWx0ZXJWYWx1ZS50b2tlbiwgdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbG9zZSB0aGUgZmlsdGVyIGlucHV0IGZpZWxkLiAqL1xyXG4gIGNsb3NlRmlsdGVySW5wdXQoKSB7XHJcbiAgICBsZXQgc2VhcmNoSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLWZvcm0tZmllbGQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHNlYXJjaElucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGxldCBjbG9zZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZS1pY29uJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUga2V5IGZyb20gdmFsdWVcclxuICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICovXHJcbiAgZ2V0a2V5RnJvbVZhbHVlKHZhbHVlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB2YWwgPSBPYmplY3QudmFsdWVzKHRoaXMuY29sdW1uQ29uZmlnW2ldKVxyXG4gICAgICBpZiAodmFsLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0S2V5ID0gdmFsWzBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGZpbHRlciBhZGRlZCBhbmQgYW5kIHNob3cgYWRkIGZpbHRlciBidXR0b24gYWdhaW4uXHJcbiAgICovXHJcbiAgY2xlYXJBZGRlZEZpbHRlcigpIHtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmZpbHRlclNlbGVjdGVkVmFsdWUgPSB7fTtcclxuICAgIHRoaXMuZGlzcGxheUZpbHRlclZhbHVlID0gW107XHJcbiAgICB0aGlzLmNsZWFyRmxpdGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLmVuYWJsZVNlYXJjaFBsYWNlaG9sZGVyLmVuYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmVuYWJsZVNlYXJjaEJhci5lbmFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbmFibGVTZWFyY2hCYXIuZW5hYmxlID0gZmFsc2U7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXItaW5mby1jb250YWluZXJcIikgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIC8vIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgLy9DYWxsIHRoZSBsaXN0IGFnYWluIFxyXG4gICAgdGhpcy5jbGVhclRhYmxlRGF0YSgpO1xyXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgIHRoaXMuZ3JpZERhdGEuZ2V0Rmlyc3RQYWdlKHRoaXMucGFnZU51bWJlciwgdGhpcy5wYWdlU2l6ZSkudGhlbihcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmdyaWREYXRhTGlzdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmaWx0ZXIgbGlzdCBjYWxsIHRocm91Z2ggYWN0aW9uZGlzcGF0Y2hlci5cclxuICAgKi9cclxuICBnZXRGaWx0ZXJMaXN0KHRva2VuLCBmaWx0ZXJWYWx1ZSkge1xyXG4gICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKHRva2VuLCBmaWx0ZXJWYWx1ZSkudGhlbihcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFyVGFibGVEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkRGF0YUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmdyaWREYXRhTGlzdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbGVhcnMgZ3JpZCBkYXRhLiAqL1xyXG4gIGNsZWFyVGFibGVEYXRhKCkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOykge1xyXG4gICAgICAodGFibGVbaV0gYXMgSFRNTEVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2ggdGhlIGdyaWQgd2hlbiBuZWVkZWRcclxuICAgKi9cclxuICByZWZyZXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ncmlkRGF0YUxpc3QgPSBbXTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgdGhpcy5ncmlkRGF0YS5nZXRGaXJzdFBhZ2UodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VTaXplKS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJUYWJsZURhdGEoKTtcclxuICAgICAgICB0aGlzLmdyaWREYXRhTGlzdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBUb2dnbGVzIHBhZ2luYXRpb24gdG9vbCBiYXJcclxuICAgKiBAcGFyYW0gdmFsdWUgdG9nZ2xlIGJvb2xlYW4gdmFsdWVcclxuICAgKi9cclxuICB0b2dnbGVQYWdpbmF0aW9uVG9vbGJhcih2YWx1ZSkge1xyXG4gICAgdGhpcy50b2dnbGVQYWdpbmF0aW9uID0gIXZhbHVlO1xyXG5cclxuICAgIGxldCBjZGtWaXJ0dWFsVmlld3BvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAvLyBjZGtWaXJ0dWFsVmlld3BvcnQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMHZoIC0gMjExcHgpXCI7XHJcbiAgICBjb25zb2xlLmxvZyhjZGtWaXJ0dWFsVmlld3BvcnQpO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlRm9vdGVyVG9vbGJhci5lbmFibGUgPSB0aGlzLnRvZ2dsZVBhZ2luYXRpb247XHJcblxyXG4gICAgaWYodGhpcy5lbmFibGVGb290ZXJUb29sYmFyLmVuYWJsZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhZ2luZ0NvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLnBhZ2luZ0NvbmZpZ1tpXTtcclxuICAgICAgICBpZiAoY29uZmlnLnBhZ2luZ1R5cGUgPT09IFBhZ2luZ1R5cGVzLnBhZ2luZykge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVQYWdpbmdFbGVtZW50cyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2luZ0VsZW1lbnRzKGNvbmZpZykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBsZXQgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvb3RlcicpWzBdO1xyXG5cclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5SaWdodCA9ICcxMHB4JztcclxuICBcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xyXG4gICAgc3Bhbi5zdHlsZS5wYWRkaW5nID0gJzlweCc7XHJcbiAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBjb25maWcuaWNvbk5hbWU7XHJcbiAgICBpZihjb25maWcudG9vbHRpcCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRvb2x0aXApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ub25tb3VzZW92ZXIgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2UwZTBlMCc7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5vbm1vdXNlbGVhdmUgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5vbmNsaWNrID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbihjb25maWcudG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9XHJcblxyXG59Il19