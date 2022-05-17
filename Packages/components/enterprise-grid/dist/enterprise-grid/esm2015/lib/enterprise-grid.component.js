/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class EnterpriseGridComponent {
    /**
     * @param {?} gridService
     * @param {?} ref
     */
    constructor(gridService, ref) {
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
    ngOnInit() {
        this.columnConfig = [];
        this.eventEmmiter = this.gridService.refresh.subscribe((/**
         * @return {?}
         */
        () => {
            this.refresh();
        }));
        console.log(this.togglePagination);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.eventEmmiter) {
            this.eventEmmiter.unsubscribe();
        }
    }
    /**
     * Sets core actions to the grid
     * @private
     * @return {?}
     */
    setCoreActions() {
        for (let actionConfig of this.actionConfig) {
            if (actionConfig.type === ActionTypes.core && actionConfig.enable === true) {
                this.coreActions.push(actionConfig);
            }
        }
        console.log(this.coreActions);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set setGridData(data) {
        this.gridData = data;
    }
    /**
     * Set the grid configuration for the grid.
     * @param {?} data grid data
     * @return {?}
     */
    set setGridConfig(data) {
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
    }
    /**
     * Sets grid data to grid
     * @return {?}
     */
    setGridDataToGrid() {
        // console.log(this.pageSize, "set grid data");
        this.gridData.getFirstPage(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.clearTableData();
            this.gridDataList = result;
            this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
        }));
    }
    /**
     * This method sorts the grid configuration.
     * @param {?} gridConfig JSON object of grid configuration.
     * @return {?}
     */
    sortGridConfig(gridConfig) {
        /** @type {?} */
        let enterpGridCompKeys = Object.getOwnPropertyNames(this);
        for (let i = 0; i < enterpGridCompKeys.length; i++) {
            for (let j = 0; j < gridConfig.length; j++) {
                if (gridConfig[j].name === enterpGridCompKeys[i]) {
                    this[enterpGridCompKeys[i]] = gridConfig[j];
                    break;
                }
            }
        }
    }
    /**
     * Calculates grid column width.
     * @return {?}
     */
    setWidthByColumn() {
        /** @type {?} */
        const count = 100 / this.columnConfig.length;
        return count;
    }
    /**
     * Creates grid rows and add styles
     * @param {?} value counter value
     * @return {?}
     */
    createRows(value) {
        this.row = document.createElement('tr');
        if (this.onRowClick) {
            this.row.onclick = (/**
             * @return {?}
             */
            () => {
                this.actionDispatcher.dispatchAction(this.onRowClick.token, this.gridDataList[value]);
            });
        }
        this.row.onmouseover = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            /** @type {?} */
            let row = ((/** @type {?} */ ($event.currentTarget)));
            // row.style.backgroundColor = 'rgba(63,81,181,.15)';
            // row.style.color = '#3f51b5';
            /** @type {?} */
            let a = (/** @type {?} */ (row.childNodes[row.childNodes.length - 1]));
            // a.style.visibility = "visible";
            ((/** @type {?} */ (a.childNodes[0]))).style.visibility = "visible";
        });
        this.row.onmouseout = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            /** @type {?} */
            let row = ((/** @type {?} */ ($event.currentTarget)));
            // row.style.backgroundColor = 'white';
            // row.style.color = 'black';
            /** @type {?} */
            let a = (/** @type {?} */ (row.childNodes[row.childNodes.length - 1]));
            // a.style.visibility = "hidden";
            ((/** @type {?} */ (a.childNodes[0]))).style.visibility = "hidden";
        });
        this.row.style.background = 'white';
        this.row.style.padding = '5px';
        this.row.classList.add("table-row-data");
        this.cdkVirtualViewport.appendChild(this.row);
        this.styleCells();
    }
    /**
     * Creates grid cells and add styles to table data.
     * @return {?}
     */
    styleCells() {
        for (let i = 0; i <= this.columnConfig.length; i++) {
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
    }
    /**
     * Create table heading
     * @return {?}
     */
    createTableHeading() {
        /** @type {?} */
        const tableHeadDiv = (/** @type {?} */ (document.getElementsByClassName("th-div")[0]));
        if (tableHeadDiv.childElementCount == 0) {
            for (let i = 0; i < this.columnConfig.length; i++) {
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
                    const headName = this.columnConfig[i].name;
                    this.thElement.innerHTML = this.columnConfig[i].item;
                    this.thElement.classList.add(headName);
                }
                tableHeadDiv.appendChild(this.thElement);
            }
        }
    }
    /**
     * Create checkboxes
     * @param {?} value counter value
     * @param {?} gridElement grid data object
     * @return {?}
     */
    createCheckbox(value, gridElement) {
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
        ($event) => {
            // console.log((this.checkbox as HTMLElement).parentElement);
            if (gridElement === 'gridElement') {
                /** @type {?} */
                let checkboxObjList = document.getElementsByClassName('checkbox');
                for (let i = 0; i < this.gridDataList.length; i++) {
                    if (checkboxObjList[0]['checked'] === true) {
                        if (checkboxObjList[i + 1]['checked'] === false) {
                            checkboxObjList[i + 1]['checked'] = true;
                            this.createSelectedCheckboxesArray($event, this.gridDataList[i]);
                        }
                    }
                    if (checkboxObjList[0]['checked'] === false) {
                        if (checkboxObjList[i + 1]['checked'] === true) {
                            checkboxObjList[i + 1]['checked'] = false;
                            this.selectedEntities.length = 0;
                            this.createSelectedCheckboxesArray($event, this.gridDataList[i]);
                        }
                    }
                }
            }
            else {
                this.createSelectedCheckboxesArray($event, gridElement);
            }
        });
    }
    /**
     * Stores all the selected/checked grid objects into an array to perform bulk actions.
     * @param {?} $event Mouse event
     * @param {?} gridElement grid data object
     * @return {?}
     */
    createSelectedCheckboxesArray($event, gridElement) {
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
            /** Removes the grid object from the array if user unchecks/deselects. */
            for (let obj of this.selectedEntities) {
                if (obj.id === gridElement.id) {
                    this.selectedEntities.splice(this.selectedEntities.indexOf(obj), 1);
                }
            }
        }
        this.ref.detectChanges();
        this.createBulkActionEntities();
    }
    /**
     * Creates bulk actions, in-place and in-selector in bulk action toolbar.
     * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
     * @return {?}
     */
    createBulkActionEntities() {
        /** @type {?} */
        let bulkActionToolbar = (/** @type {?} */ (document.getElementsByClassName('bulk-actions-toolbar')[0]));
        if (this.selectedEntities != null && this.selectedEntities.length == 1 && bulkActionToolbar.innerHTML == '') {
            /** @type {?} */
            let selectorMenuIconCreated = 0;
            /** @type {?} */
            let dropdownContent = document.createElement("div");
            for (let i = 0; i < this.actionConfig.length; i++) {
                /** @type {?} */
                let config = this.actionConfig[i];
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
            let bulkActionToolbar = (/** @type {?} */ (document.getElementsByClassName('bulk-actions-toolbar')[0]));
            bulkActionToolbar.textContent = '';
            bulkActionToolbar.style.backgroundColor = 'white';
            this.enableActionToolbar.enable = true;
            this.enableBulkActionToolbar.enable = false;
            this.ref.detectChanges();
        }
    }
    /**
     * Create actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content div HTMLElement
     * @return {?} dropdown HTMLElement
     */
    createActionSelectorDropdown(dropdownContent) {
        /** @type {?} */
        let dropdown = document.createElement('div');
        dropdown.className = "dropdown";
        dropdown.style.position = 'relative';
        dropdown.style.display = 'inline-block';
        /** @type {?} */
        let tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.marginLeft = "18px";
        /** @type {?} */
        let menuIcon = document.createElement('span');
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
        ($event) => {
            this.hideShowActionSelectorDropdown(dropdownContent);
        });
        return dropdown;
    }
    /**
     * Create actions in-selector dropdown menu items.
     * @param {?} config action config object
     * @return {?} dropdownMenuItem HTMLElement
     */
    createDropdownMenuItems(config) {
        /** @type {?} */
        let dropdownMenuItem = document.createElement("a");
        dropdownMenuItem.className = 'mat-menu-item';
        dropdownMenuItem.innerText = config.iconName;
        dropdownMenuItem.style.display = 'block';
        dropdownMenuItem.style.padding = '1px 16px';
        dropdownMenuItem.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            $event.stopPropagation();
            this.actionDispatcher.dispatchAction(config.token, this.selectedEntities);
        });
        return dropdownMenuItem;
    }
    /**
     * Hide and show actions in-selector dropdown menu.
     * @param {?} dropdownContent dropdown content HTMLElement
     * @return {?}
     */
    hideShowActionSelectorDropdown(dropdownContent) {
        if (dropdownContent.style.display === 'none') {
            dropdownContent.style.display = 'block';
        }
        else if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
    /**
     * Creates the rows and columns of the grid according to column defs and module data list
     * @return {?}
     */
    createGrid() {
        this.cdkVirtualViewport = document.getElementsByClassName('cdk-virtual-scroll-content-wrapper')[0];
        this.cdkVirtualViewport.style.display = 'inline-table';
        //Create table heading
        this.createTableHeading();
        /** @type {?} */
        let tableDataCell = null;
        /** @type {?} */
        let tableRowData = null;
        for (; this.counter < this.gridDataList.length; this.counter++) {
            this.createRows(this.counter);
            this.createCheckbox(this.counter, this.gridDataList[this.counter]);
            for (let moduleListKey in this.gridDataList[this.counter]) {
                for (let columnConfigKey in this.columnConfig) {
                    if (this.columnConfig[columnConfigKey].name === moduleListKey) {
                        /** @type {?} */
                        var table = document.getElementsByClassName("table-row-data");
                        /** @type {?} */
                        var lastRowIndex = table.length;
                        tableRowData = (/** @type {?} */ (document.getElementsByClassName('table-row-data')[lastRowIndex - 1]));
                        tableDataCell = tableRowData.cells;
                        /** @type {?} */
                        let pos = this.columnConfig[columnConfigKey].position;
                        /** @type {?} */
                        let value = this.gridDataList[this.counter][moduleListKey];
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
    }
    /**
     * Adds entity action on grid rows, for non-bulk actions.
     * @private
     * @param {?} counter counter for the number of rows
     * @return {?} div element
     */
    addEntityAction(counter) {
        /** @type {?} */
        let tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.top = "2vh";
        for (let i = 0; i < this.actionConfig.length; i++) {
            /** @type {?} */
            let config = this.actionConfig[i];
            if (config.type === ActionTypes.entity) {
                if (config.isBulk === false) {
                    tdDiv.style.visibility = 'hidden';
                    /** @type {?} */
                    let span = this.createActionSpanElement(config);
                    tdDiv.appendChild(span);
                    span.onclick = (/**
                     * @param {?} $event
                     * @return {?}
                     */
                    ($event) => {
                        $event.stopPropagation();
                        this.actionDispatcher.dispatchAction(config.token, this.gridDataList[counter]);
                    });
                }
            }
        }
        return tdDiv;
    }
    /**
     * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} div element
     */
    addBulkActions(config) {
        /** @type {?} */
        let tdDiv = document.createElement('div');
        tdDiv.className = "entity-event";
        tdDiv.style.position = "relative";
        tdDiv.style.marginLeft = "18px";
        tdDiv.style.fontSize = "15px";
        /** @type {?} */
        let span = this.createActionSpanElement(config);
        tdDiv.appendChild(span);
        span.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            $event.stopPropagation();
            this.actionDispatcher.dispatchAction(config.token, this.selectedEntities);
        });
        return tdDiv;
    }
    /**
     * Creates span element for the UI action element.
     * @private
     * @param {?} config Action Configuration array
     * @return {?} span element
     */
    createActionSpanElement(config) {
        /** @type {?} */
        let span = document.createElement("span");
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
        const spanClass = config.iconName;
        span.classList.add(spanClass.replace(/ /g, "_"));
        return span;
    }
    /**
     * Fetches next set of grid records on scroll to bottom.
     * @return {?}
     */
    getNextBatchOfPage() {
        if (this.virtualScroll.measureScrollOffset('bottom') === 0) {
            this.gridData.getNextPage(++this.pageNumber, this.pageSize).then((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                if (result != null) {
                    for (let i = 0; i < result.length; i++) {
                        this.gridDataList.push(result[i]);
                    }
                    console.log(this.gridDataList);
                    this.createGrid();
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
    /**
     * Forward the event to dispatch action with tokens and parameters.
     * @param {?} token
     * @return {?}
     */
    executeCoreAction(token) {
        this.actionDispatcher.dispatchAction(token);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setActionDispatcher(value) {
        this.actionDispatcher = value;
    }
    /**
     * Toggles from search placeholder to search bar/box by setting the display value
     * Also get the position and set to model popup.
     * Clear button enable.
     * @param {?} enable
     * @return {?}
     */
    toggleToSearchBar(enable) {
        /** @type {?} */
        let element = (/** @type {?} */ (document.querySelector(".filter-button")));
        /** @type {?} */
        let x = element.getBoundingClientRect();
        this.enableSearchBar.enable = enable;
        this.clearFliter = true;
    }
    /**
     * Get the list of column name For suggestion
     * @param {?} columnList
     * @return {?}
     */
    getColumnName(columnList) {
        for (let i = 0; i < columnList.length; i++) {
            if (columnList[i].name === "checkbox") {
                continue;
            }
            else {
                this.columnNameSuggestion.push(columnList[i].item);
            }
        }
    }
    /**
     * Open the Filter Input
     * @param {?} value
     * @return {?}
     */
    openFilterInput(value) {
        this.filterName = value;
        /** @type {?} */
        var modal = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        modal.style.display = "block";
        /** @type {?} */
        let closeIcon = (/** @type {?} */ (document.getElementsByClassName('close-icon')[0]));
        closeIcon.style.display = 'contents';
        this.enableSearchBar.enable = false;
        document.querySelector(".search-label").textContent = value;
    }
    /**
     * Get the value Column Name and Filter search value
     * @param {?} searchValue
     * @return {?}
     */
    filterSubmit(searchValue) {
        ((/** @type {?} */ (document.getElementsByClassName("filter-info-container")[0]))).style.display = "contents";
        /** @type {?} */
        let searchInputElement = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        searchInputElement.style.display = 'none';
        /** @type {?} */
        let selectedValue = this.filterName + " : " + searchValue;
        this.displayFilterValue.push(selectedValue);
        this.getkeyFromValue(this.filterName);
        this.enableSearchBar.enable = false;
        this.filterSelectedValue[this.getKey] = searchValue;
        this.counter = 0;
        this.getFilterList(this.filterValue.token, this.filterSelectedValue);
    }
    /**
     * Close the filter input field.
     * @return {?}
     */
    closeFilterInput() {
        /** @type {?} */
        let searchInputElement = (/** @type {?} */ (document.getElementsByClassName('search-form-field')[0]));
        searchInputElement.style.display = 'none';
        /** @type {?} */
        let closeIcon = (/** @type {?} */ (document.getElementsByClassName('close-icon')[0]));
        closeIcon.style.display = 'none';
    }
    /**
     * Get the key from value
     * @param {?} value
     * @return {?}
     */
    getkeyFromValue(value) {
        for (let i = 0; i < this.columnConfig.length; i++) {
            /** @type {?} */
            let val = Object.values(this.columnConfig[i]);
            if (val.includes(value)) {
                this.getKey = val[0];
                break;
            }
        }
    }
    /**
     * Clear the filter added and and show add filter button again.
     * @return {?}
     */
    clearAddedFilter() {
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
        result => {
            this.gridDataList = result;
            this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
        }));
    }
    /**
     * Get filter list call through actiondispatcher.
     * @param {?} token
     * @param {?} filterValue
     * @return {?}
     */
    getFilterList(token, filterValue) {
        this.actionDispatcher.dispatchAction(token, filterValue).then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.clearTableData();
            this.gridDataList = [];
            this.gridDataList = result;
            this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
        }));
    }
    /**
     * Clears grid data.
     * @return {?}
     */
    clearTableData() {
        /** @type {?} */
        let table = document.getElementsByTagName("tr");
        for (let i = 0; i < table.length;) {
            ((/** @type {?} */ (table[i]))).remove();
        }
    }
    /**
     * Refresh the grid when needed
     * @return {?}
     */
    refresh() {
        this.gridDataList = [];
        this.counter = 0;
        this.pageNumber = 1;
        this.gridData.getFirstPage(this.pageNumber, this.pageSize).then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.clearTableData();
            this.gridDataList = result;
            this.createGrid();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
        }));
    }
    /**
     * Toggles pagination tool bar
     * @param {?} value toggle boolean value
     * @return {?}
     */
    togglePaginationToolbar(value) {
        this.togglePagination = !value;
        /** @type {?} */
        let cdkVirtualViewport = (/** @type {?} */ (document.getElementsByClassName('cdk-virtual-scroll-content-wrapper')[0]));
        // cdkVirtualViewport.style.height = "calc(100vh - 211px)";
        console.log(cdkVirtualViewport);
        this.enableFooterToolbar.enable = this.togglePagination;
        if (this.enableFooterToolbar.enable === true) {
            for (let i = 0; i < this.pagingConfig.length; i++) {
                /** @type {?} */
                let config = this.pagingConfig[i];
                if (config.pagingType === PagingTypes.paging) {
                    this.createPagingElements(config);
                }
            }
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    createPagingElements(config) {
        console.log(config);
        this.ref.detectChanges();
        /** @type {?} */
        let footerElement = document.getElementsByClassName('footer')[0];
        /** @type {?} */
        let div = document.createElement('div');
        div.style.marginRight = '10px';
        /** @type {?} */
        let span = document.createElement('span');
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
        ($event) => {
            $event.stopPropagation();
            span.style.backgroundColor = '#e0e0e0';
        });
        span.onmouseleave = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            $event.stopPropagation();
            span.style.backgroundColor = '';
        });
        span.onclick = (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            $event.stopPropagation();
            this.actionDispatcher.dispatchAction(config.token);
        });
        div.appendChild(span);
        this.ref.detectChanges();
        footerElement.appendChild(div);
    }
}
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
EnterpriseGridComponent.ctorParameters = () => [
    { type: EnterpriseGridService },
    { type: ChangeDetectorRef }
];
EnterpriseGridComponent.propDecorators = {
    virtualScroll: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false },] }]
};
/** @nocollapse */ EnterpriseGridComponent.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnterpriseGridComponent_Factory() { return new EnterpriseGridComponent(i0.ɵɵinject(i1.EnterpriseGridService), i0.ɵɵinject(i0.ChangeDetectorRef)); }, token: EnterpriseGridComponent, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVW5ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBNkVsQyxZQUFvQixXQUFrQyxFQUFVLEdBQXNCO1FBQWxFLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTFFdEYsa0JBQWEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDOztRQUc1QixpQkFBWSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFM0IsaUJBQVksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUszQixpQkFBWSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQU94QixxQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDOztRQUcvQix5QkFBb0IsR0FBRyxFQUFFLENBQUM7O1FBRzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDOztRQUc3Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7O1FBR3pCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQzs7UUFNeEIsYUFBUSxHQUFHLEVBQUUsQ0FBQzs7UUFHZCxlQUFVLEdBQUcsQ0FBQyxDQUFDOztRQUdmLGdCQUFXLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUUxQix3QkFBbUIsR0FBRyxJQUFJLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSx3QkFBbUIsR0FBRyxJQUFJLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSw0QkFBdUIsR0FBRyxJQUFJLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RSxvQkFBZSxHQUFHLElBQUksYUFBYSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELDRCQUF1QixHQUFHLElBQUksYUFBYSxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlFLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSx1QkFBdUI7O1FBRTNFLHdCQUFtQixHQUFHLElBQUksYUFBYSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRFLGVBQVUsR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBVS9ELFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBS2lFLENBQUM7Ozs7SUFFM0YsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzFELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7OztJQUdPLGNBQWM7UUFDbEIsS0FBSSxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3RDLElBQUcsWUFBWSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFDO2dCQUN4RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyQztTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLFdBQVcsQ0FBQyxJQUFjO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQU1ELElBQUksYUFBYSxDQUFDLElBQUk7UUFFcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsaURBQWlEO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRXpDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELGlCQUFpQjtRQUNmLCtDQUErQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJOzs7O1FBQzdELE1BQU0sQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7O1FBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTUQsY0FBYyxDQUFDLFVBQVU7O1lBQ25CLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFFekQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLE1BQU07aUJBQ1A7YUFDRjtTQUNGO0lBRUgsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0I7O2NBQ1IsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDNUMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBQ3ZGLENBQUMsQ0FBQSxDQUFBO1NBQ0Y7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVc7Ozs7UUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFOztnQkFDNUIsR0FBRyxHQUFHLENBQUMsbUJBQUEsTUFBTSxDQUFDLGFBQWEsRUFBZSxDQUFDOzs7O2dCQUczQyxDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBZTtZQUNoRSxrQ0FBa0M7WUFDbEMsQ0FBQyxtQkFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNoRSxDQUFDLENBQUEsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7O2dCQUMzQixHQUFHLEdBQUcsQ0FBQyxtQkFBQSxNQUFNLENBQUMsYUFBYSxFQUFlLENBQUM7Ozs7Z0JBRzNDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFlO1lBQ2hFLGlDQUFpQztZQUNqQyxDQUFDLG1CQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQy9ELENBQUMsQ0FBQSxDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUdELFVBQVU7UUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQztZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO0lBRUgsQ0FBQzs7Ozs7SUFHRCxrQkFBa0I7O2NBQ1YsWUFBWSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUVoRixJQUFJLFlBQVksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7WUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO2dCQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztnQkFDL0Msd0NBQXdDO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxDQUFDO2dCQUUzRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztxQkFFN0M7aUJBQ0Y7cUJBQU07OzBCQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3hDO2dCQUVELFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBTU0sY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxvRkFBb0YsQ0FBQztRQUN0SCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFFeEMsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakMsNkRBQTZEO1lBRTdELElBQUcsV0FBVyxLQUFLLGFBQWEsRUFBRTs7b0JBQzVCLGVBQWUsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDO2dCQUVqRSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLElBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDekMsSUFBRyxlQUFlLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssRUFBRTs0QkFDNUMsZUFBZSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNsRTtxQkFDRjtvQkFFRCxJQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUU7d0JBQzFDLElBQUcsZUFBZSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7NEJBQzNDLGVBQWUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDOzRCQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2xFO3FCQUNGO2lCQUVGO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN6RDtRQUVILENBQUMsQ0FBQSxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQU1NLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxXQUFXO1FBQ3RELE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpCLCtDQUErQztRQUMvQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFekM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUUxQyx5RUFBeUU7WUFDekUsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3BDLElBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUMsRUFBRSxFQUFFO29CQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBTUQsd0JBQXdCOztZQUVsQixpQkFBaUIsR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUVqRyxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRTs7Z0JBRXRHLHVCQUF1QixHQUFXLENBQUM7O2dCQUNuQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDN0MsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDdEMsSUFBRyxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTt3QkFFekIsSUFBRyxNQUFNLENBQUMsWUFBWSxLQUFLLGNBQWMsQ0FBQyxRQUFRLEVBQUU7NEJBQ2xELHVCQUF1QixFQUFFLENBQUM7NEJBRTFCLElBQUcsdUJBQXVCLEtBQUssQ0FBQyxFQUFFO2dDQUNoQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7NkJBQ25GOzRCQUVELGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7eUJBRW5FOzZCQUFNLElBQUcsTUFBTSxDQUFDLFlBQVksS0FBSyxjQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN4RCxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUM1RDtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztnQkFDakMsaUJBQWlCLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7WUFDakcsaUJBQWlCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUVsRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUU1QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsNEJBQTRCLENBQUMsZUFBZTs7WUFFdEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7O1lBRXBDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6QyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDOztZQUU1QixRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDN0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUVqQyxlQUFlLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN4QyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2hELGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMzQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxxQ0FBcUMsQ0FBQztRQUN4RSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFFbkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXRDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsOEJBQThCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFBLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFNRCx1QkFBdUIsQ0FBQyxNQUFNOztZQUN4QixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNsRCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQzdDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzdDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRTVDLGdCQUFnQixDQUFDLE9BQU87Ozs7UUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFBLENBQUE7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUtELDhCQUE4QixDQUFDLGVBQTRCO1FBRXpELElBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQzNDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN6QzthQUFNLElBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQ25ELGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUN4QztJQUVILENBQUM7Ozs7O0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDdkQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztZQUV0QixhQUFhLEdBQUcsSUFBSTs7WUFDcEIsWUFBWSxHQUFHLElBQUk7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUU5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVuRSxLQUFLLElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUV6RCxLQUFLLElBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBRTdDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFOzs0QkFFekQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7NEJBRXpELFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTTt3QkFFL0IsWUFBWSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBdUIsQ0FBQzt3QkFFMUcsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7OzRCQUUvQixHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFROzs0QkFFakQsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQzt3QkFFMUQsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUV4QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTs0QkFDNUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzRCQUNyQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7eUJBRS9DO3dCQUVELGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3FCQUN0QztpQkFDRjthQUNGO1lBQ0QsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQy9ELGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzdELGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzlELGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3BFLHVFQUF1RTtZQUN2RSxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUN4RSxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN6RjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBT08sZUFBZSxDQUFDLE9BQWU7O1lBRWpDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6QyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFFbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDdEMsSUFBRyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtvQkFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDOzt3QkFFOUIsSUFBSSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7b0JBQy9DLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxPQUFPOzs7O29CQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQTt3QkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDakYsQ0FBQyxDQUFBLENBQUE7aUJBQ0Y7YUFDRjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBT08sY0FBYyxDQUFDLE1BQW9COztZQUVyQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7O1lBRTFCLElBQUksR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBRS9DLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFBLENBQUE7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUVmLENBQUM7Ozs7Ozs7SUFPTyx1QkFBdUIsQ0FBQyxNQUFvQjs7WUFFOUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOztjQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVE7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBR00sa0JBQWtCO1FBRXZCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJOzs7O1lBQzlELE1BQU0sQ0FBQyxFQUFFO2dCQUNQLElBQUcsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjtZQUNILENBQUM7Ozs7WUFDRCxLQUFLLENBQUMsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFHRCxJQUFXLG1CQUFtQixDQUFDLEtBQVU7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7Ozs7OztJQU1ELGlCQUFpQixDQUFDLE1BQU07O1lBQ2xCLE9BQU8sR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQWU7O1lBQ2pFLENBQUMsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUtELGFBQWEsQ0FBQyxVQUFVO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ3BDLFNBQVM7YUFDVjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwRDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBS0EsZUFBZSxDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O1lBQ3BCLEtBQUssR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZTtRQUNsRixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O1lBQzFCLFNBQVMsR0FBRyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDL0UsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBS0QsWUFBWSxDQUFDLFdBQVc7UUFFdEIsQ0FBQyxtQkFBQSxRQUFRLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7O1lBRXBHLGtCQUFrQixHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBQy9GLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztZQUV0QyxhQUFhLEdBQVcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsV0FBVztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBR0QsZ0JBQWdCOztZQUNWLGtCQUFrQixHQUFHLG1CQUFBLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBQy9GLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztZQUV0QyxTQUFTLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFlO1FBQy9FLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFNRCxlQUFlLENBQUMsS0FBSztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM3QyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU07YUFDUDtTQUNGO0lBRUgsQ0FBQzs7Ozs7SUFLRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsRUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDekYscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTs7OztRQUM3RCxNQUFNLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7O1FBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUtELGFBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJOzs7O1FBQzNELE1BQU0sQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxjQUFjOztZQUNSLEtBQUssR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHO1lBQ2pDLENBQUMsbUJBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBTUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7Ozs7UUFDN0QsTUFBTSxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7Ozs7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCx1QkFBdUIsQ0FBQyxLQUFLO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssQ0FBQzs7WUFFM0Isa0JBQWtCLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDaEgsMkRBQTJEO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUV4RCxJQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBRTNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtTQUNGO0lBRUgsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxNQUFNO1FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7WUFDckIsYUFBYSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTVELEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2QyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7O1lBRTNCLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLFdBQVc7Ozs7UUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUE7UUFFRCxJQUFJLENBQUMsWUFBWTs7OztRQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUEsQ0FBQTtRQUVELElBQUksQ0FBQyxPQUFPOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFBLENBQUE7UUFFRCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFqMkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw2bEdBQStDOzthQUVoRDtZQUNBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWZRLHFCQUFxQjtZQUhnQyxpQkFBaUI7Ozs0QkE2RjVFLFNBQVMsU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7O0lBdkV0RCxnREFBNEI7O0lBRzVCLCtDQUEyQjs7SUFFM0IsK0NBQTJCOztJQUUzQiwrQ0FBMkI7O0lBRzNCLDJDQUFtQjs7SUFFbkIsK0NBQTJCOztJQUUzQiw2Q0FBd0I7O0lBR3hCLDhDQUFvQjs7SUFFcEIsNkNBQW1COztJQUVuQixtREFBK0I7O0lBRy9CLHVEQUEwQjs7SUFHMUIsOENBQTZCOztJQUc3QixzREFBeUI7O0lBR3pCLHFEQUF3Qjs7SUFHeEIseUNBQU87O0lBR1AsMkNBQWM7O0lBR2QsNkNBQWU7O0lBR2YsOENBQTBCOztJQUUxQixzREFBc0U7O0lBQ3RFLHNEQUFzRTs7SUFDdEUsMERBQThFOztJQUM5RSxrREFBOEQ7O0lBQzlELDBEQUE4RTs7SUFDOUUsNENBQWtEOztJQUVsRCxzREFBc0U7O0lBRXRFLDZDQUE2RDs7SUFDN0QsOENBQStEOztJQUUvRCxzQ0FBeUI7O0lBQ3pCLHFEQUFtQjs7SUFDbkIsNENBQWdDOztJQUNoQyw0Q0FBc0M7O0lBQ3RDLDJDQUFTOzs7OztJQUVULG1EQUEyQzs7SUFFM0MsMENBQW9COztJQUVwQixtREFBeUI7O0lBRXpCLGdEQUFnRzs7SUFDaEcsK0NBQWtCOzs7OztJQUVOLDhDQUEwQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0YWJsZSwgVmlld0NoaWxkLCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBHcmlkRGF0YSB9IGZyb20gJy4uL2FjdGlvbi9HcmlkRGF0YSc7XHJcbmltcG9ydCB7IEVudGVycHJpc2VHcmlkU2VydmljZSB9IGZyb20gJy4vZW50ZXJwcmlzZS1ncmlkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2NvbmZpZy9BY3Rpb25UeXBlJztcclxuaW1wb3J0IHsgQWN0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2FjdGlvbi9BY3Rpb25EaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9GZWF0dXJlQ29uZmlnJztcclxuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL0FjdGlvbkNvbmZpZyc7XHJcbmltcG9ydCB7IEFjdGlvblBvc2l0aW9uIH0gZnJvbSAnLi4vY29uZmlnL0FjdGlvblBvc2l0aW9uJztcclxuaW1wb3J0IHsgUGFnaW5nVHlwZXMgfSBmcm9tICcuLi9jb25maWcvUGFnaW5nVHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvLWVudGVycHJpc2UtZ3JpZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGVycHJpc2UtZ3JpZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGVycHJpc2VHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvL0dyaWQgY29uZmlnIGluZm8uXHJcbiAgZmVhdHVyZUNvbmZpZyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAvL0NvbHVtbiBDb25maWcgaW5mby5cclxuICBjb2x1bW5Db25maWcgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgYWN0aW9uQ29uZmlnID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIHBhZ2luZ0NvbmZpZyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAvL0RhdGEgTGlzdFxyXG4gIGdyaWREYXRhOiBHcmlkRGF0YTtcclxuXHJcbiAgZ3JpZERhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIGdyaWRIZWFkZXI6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvL1NlYXJjaCBWYWx1ZVxyXG4gIHNlYXJjaFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGZpbHRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgc2VsZWN0ZWRFbnRpdGllcyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAvL0NvbHVtbk5hbWUgU3VnZ2VzdGlvblxyXG4gIGNvbHVtbk5hbWVTdWdnZXN0aW9uID0gW107XHJcblxyXG4gIC8vQ2xlYXIgRmlsdGVyXHJcbiAgY2xlYXJGbGl0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy9BZGQgRmlsdGVyIEJ1dHRvbiBsb29wXHJcbiAgZmlsdGVyU2VsZWN0ZWRWYWx1ZSA9IHt9O1xyXG5cclxuICAvL0Rpc3BsYXkgZmlsdGVyIGxvb3AgXHJcbiAgZGlzcGxheUZpbHRlclZhbHVlID0gW107XHJcblxyXG4gIC8vS2V5IGZvciBzZWFyY2ggZGF0YVxyXG4gIGdldEtleTtcclxuXHJcbiAgLy9wYWdlIHNpemVcclxuICBwYWdlU2l6ZSA9IDEwO1xyXG5cclxuICAvL3BhZ2VOb1xyXG4gIHBhZ2VOdW1iZXIgPSAxO1xyXG5cclxuICAvL2NvcmVBY3Rpb25zXHJcbiAgY29yZUFjdGlvbnMgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgZW5hYmxlQWN0aW9uVG9vbGJhciA9IG5ldyBGZWF0dXJlQ29uZmlnKFwiZW5hYmxlQWN0aW9uVG9vbGJhclwiLCBmYWxzZSk7XHJcbiAgZW5hYmxlU2VhcmNoVG9vbGJhciA9IG5ldyBGZWF0dXJlQ29uZmlnKFwiZW5hYmxlU2VhcmNoVG9vbGJhclwiLCBmYWxzZSk7XHJcbiAgZW5hYmxlU2VhcmNoUGxhY2Vob2xkZXIgPSBuZXcgRmVhdHVyZUNvbmZpZyhcImVuYWJsZVNlYXJjaFBsYWNlaG9sZGVyXCIsIGZhbHNlKTtcclxuICBlbmFibGVTZWFyY2hCYXIgPSBuZXcgRmVhdHVyZUNvbmZpZyhcImVuYWJsZVNlYXJjaEJhclwiLCBmYWxzZSk7XHJcbiAgZW5hYmxlQnVsa0FjdGlvblRvb2xiYXIgPSBuZXcgRmVhdHVyZUNvbmZpZyhcImVuYWJsZUJ1bGtBY3Rpb25Ub29sYmFyXCIsIGZhbHNlKTtcclxuICBzZWxlY3RSb3cgPSBuZXcgRmVhdHVyZUNvbmZpZyhcInNlbGVjdFJvd1wiLCBmYWxzZSk7ICAvLyBUbyBlbmFibGUgY2hlY2tib3hlc1xyXG5cclxuICBlbmFibGVGb290ZXJUb29sYmFyID0gbmV3IEZlYXR1cmVDb25maWcoXCJlbmFibGVGb290ZXJUb29sYmFyXCIsIGZhbHNlKTtcclxuXHJcbiAgb25Sb3dDbGljayA9IG5ldyBBY3Rpb25Db25maWcoXCJvblJvd0NsaWNrXCIsIHRydWUsIFwiXCIsIGZhbHNlKTtcclxuICBmaWx0ZXJWYWx1ZSA9IG5ldyBBY3Rpb25Db25maWcoXCJmaWx0ZXJWYWx1ZVwiLCB0cnVlLCBcIlwiLCBmYWxzZSk7XHJcblxyXG4gIHJvdzogSFRNTFRhYmxlUm93RWxlbWVudDtcclxuICBjZGtWaXJ0dWFsVmlld3BvcnQ7XHJcbiAgdGRFbGVtZW50OiBIVE1MVGFibGVDZWxsRWxlbWVudDtcclxuICB0aEVsZW1lbnQ6IEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xyXG4gIGNoZWNrYm94O1xyXG5cclxuICBwcml2YXRlIGFjdGlvbkRpc3BhdGNoZXI6IEFjdGlvbkRpc3BhdGNoZXI7XHJcblxyXG4gIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gIHRvZ2dsZVBhZ2luYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiBmYWxzZSB9KSB2aXJ0dWFsU2Nyb2xsOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XHJcbiAgZXZlbnRFbW1pdGVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZFNlcnZpY2U6IEVudGVycHJpc2VHcmlkU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IFtdO1xyXG4gICAgdGhpcy5ldmVudEVtbWl0ZXIgPSB0aGlzLmdyaWRTZXJ2aWNlLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlUGFnaW5hdGlvbik7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRFbW1pdGVyKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRFbW1pdGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyBjb3JlIGFjdGlvbnMgdG8gdGhlIGdyaWQgKi9cclxuICBwcml2YXRlIHNldENvcmVBY3Rpb25zKCk6dm9pZHtcclxuICAgICAgZm9yKGxldCBhY3Rpb25Db25maWcgb2YgdGhpcy5hY3Rpb25Db25maWcpe1xyXG4gICAgICAgICAgaWYoYWN0aW9uQ29uZmlnLnR5cGUgPT09IEFjdGlvblR5cGVzLmNvcmUgJiYgYWN0aW9uQ29uZmlnLmVuYWJsZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29yZUFjdGlvbnMucHVzaChhY3Rpb25Db25maWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29yZUFjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNldEdyaWREYXRhKGRhdGE6IEdyaWREYXRhKSB7XHJcbiAgICB0aGlzLmdyaWREYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZ3JpZCBjb25maWd1cmF0aW9uIGZvciB0aGUgZ3JpZC5cclxuICAgKiBAcGFyYW0gZGF0YSBncmlkIGRhdGFcclxuICAgKi9cclxuICBzZXQgc2V0R3JpZENvbmZpZyhkYXRhKSB7XHJcblxyXG4gICAgaWYgKGRhdGEucGFnZVNpemUgIT0gdW5kZWZpbmVkIHx8IGRhdGEucGFnZVNpemUgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnBhZ2VTaXplID0gZGF0YS5wYWdlU2l6ZTtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYWdlU2l6ZSwgXCJzZXQgZ3JpZCBjb25maWdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncmlkSGVhZGVyID0gZGF0YS5ncmlkSGVhZGVyO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBkYXRhLmNvbHVtbkNvbmZpZ0FycjtcclxuICAgIHRoaXMuZmVhdHVyZUNvbmZpZyA9IGRhdGEuZmVhdHVyZUNvbmZpZ0FycjtcclxuICAgIHRoaXMuYWN0aW9uQ29uZmlnID0gZGF0YS5hY3Rpb25Db25maWdBcnI7IFxyXG4gICAgdGhpcy5wYWdpbmdDb25maWcgPSBkYXRhLnBhZ2luZ0NvbmZpZ0FycjtcclxuXHJcbiAgICB0aGlzLnNvcnRHcmlkQ29uZmlnKHRoaXMuZmVhdHVyZUNvbmZpZyk7XHJcbiAgICB0aGlzLnNvcnRHcmlkQ29uZmlnKHRoaXMuYWN0aW9uQ29uZmlnKTtcclxuICAgIHRoaXMuZ2V0Q29sdW1uTmFtZSh0aGlzLmNvbHVtbkNvbmZpZyk7XHJcbiAgICB0aGlzLnNldENvcmVBY3Rpb25zKCk7XHJcbiAgICB0aGlzLnNldEdyaWREYXRhVG9HcmlkKCk7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyBncmlkIGRhdGEgdG8gZ3JpZCAqL1xyXG4gIHNldEdyaWREYXRhVG9HcmlkKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wYWdlU2l6ZSwgXCJzZXQgZ3JpZCBkYXRhXCIpO1xyXG4gICAgdGhpcy5ncmlkRGF0YS5nZXRGaXJzdFBhZ2UodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VTaXplKS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJUYWJsZURhdGEoKTtcclxuICAgICAgICB0aGlzLmdyaWREYXRhTGlzdCA9IHJlc3VsdDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHNvcnRzIHRoZSBncmlkIGNvbmZpZ3VyYXRpb24uXHJcbiAgICogQHBhcmFtIGdyaWRDb25maWcgSlNPTiBvYmplY3Qgb2YgZ3JpZCBjb25maWd1cmF0aW9uLlxyXG4gICAqL1xyXG4gIHNvcnRHcmlkQ29uZmlnKGdyaWRDb25maWcpIHtcclxuICAgIGxldCBlbnRlcnBHcmlkQ29tcEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudGVycEdyaWRDb21wS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRDb25maWcubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoZ3JpZENvbmZpZ1tqXS5uYW1lID09PSBlbnRlcnBHcmlkQ29tcEtleXNbaV0pIHtcclxuICAgICAgICAgIHRoaXNbZW50ZXJwR3JpZENvbXBLZXlzW2ldXSA9IGdyaWRDb25maWdbal07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKiogQ2FsY3VsYXRlcyBncmlkIGNvbHVtbiB3aWR0aC4gKi9cclxuICBzZXRXaWR0aEJ5Q29sdW1uKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBjb3VudCA9IDEwMCAvIHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aDtcclxuICAgIHJldHVybiBjb3VudDtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGdyaWQgcm93cyBhbmQgYWRkIHN0eWxlc1xyXG4gICAqIEBwYXJhbSB2YWx1ZSBjb3VudGVyIHZhbHVlXHJcbiAgICovXHJcbiAgY3JlYXRlUm93cyh2YWx1ZSkge1xyXG4gICAgdGhpcy5yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIGlmICh0aGlzLm9uUm93Q2xpY2spIHtcclxuICAgICAgdGhpcy5yb3cub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24odGhpcy5vblJvd0NsaWNrLnRva2VuLCB0aGlzLmdyaWREYXRhTGlzdFt2YWx1ZV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvdy5vbm1vdXNlb3ZlciA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgbGV0IHJvdyA9ICgkZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgIC8vIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg2Myw4MSwxODEsLjE1KSc7XHJcbiAgICAgIC8vIHJvdy5zdHlsZS5jb2xvciA9ICcjM2Y1MWI1JztcclxuICAgICAgbGV0IGEgPSByb3cuY2hpbGROb2Rlc1tyb3cuY2hpbGROb2Rlcy5sZW5ndGggLSAxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgLy8gYS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIChhLmNoaWxkTm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvdy5vbm1vdXNlb3V0ID0gKCRldmVudCkgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gKCRldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgLy8gcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgIC8vIHJvdy5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgIGxldCBhID0gcm93LmNoaWxkTm9kZXNbcm93LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIGEuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIChhLmNoaWxkTm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm93LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xyXG4gICAgdGhpcy5yb3cuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgdGhpcy5yb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlLXJvdy1kYXRhXCIpO1xyXG4gICAgdGhpcy5jZGtWaXJ0dWFsVmlld3BvcnQuYXBwZW5kQ2hpbGQodGhpcy5yb3cpO1xyXG4gICAgdGhpcy5zdHlsZUNlbGxzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBncmlkIGNlbGxzIGFuZCBhZGQgc3R5bGVzIHRvIHRhYmxlIGRhdGEuICovXHJcbiAgc3R5bGVDZWxscygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9ICcxMHB4JztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcxMHB4JztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNkZGQnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiUXVlc3RyaWFsXCIsIHNhbnMtc2VyaWYnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMudGRFbGVtZW50LnN0eWxlLmhlaWdodCA9ICczOXB4JztcclxuICAgICAgdGhpcy50ZEVsZW1lbnQuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xyXG4gICAgICB0aGlzLnRkRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuc2V0V2lkdGhCeUNvbHVtbigpICsgJyUnO1xyXG4gICAgICB0aGlzLnJvdy5hcHBlbmRDaGlsZCh0aGlzLnRkRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSB0YWJsZSBoZWFkaW5nICovXHJcbiAgY3JlYXRlVGFibGVIZWFkaW5nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFibGVIZWFkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoLWRpdlwiKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBpZiAodGFibGVIZWFkRGl2LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzEwcHggMHB4IDEwcHggMTBweCc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2RkZCc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlF1ZXN0cmlhbFwiLCBzYW5zLXNlcmlmJztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcclxuICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJzFweCc7XHJcbiAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsLjU0KSc7XHJcbiAgICAgICAgLy8gdGhpcy50aEVsZW1lbnQud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG4gICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5zZXRXaWR0aEJ5Q29sdW1uKCkgKyAnJSc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZ1tpXS5uYW1lID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94KFwic2Rhc1wiLCBcImdyaWRFbGVtZW50XCIpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcclxuICAgICAgICAgIHRoaXMudGhFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2hlY2tib3gpO1xyXG4gICAgICAgICAgdGhpcy50aEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Um93LmdldEVuYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRoRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAlXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGhFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAndGFibGUtY2VsbCc7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBoZWFkTmFtZSA9IHRoaXMuY29sdW1uQ29uZmlnW2ldLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLnRoRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNvbHVtbkNvbmZpZ1tpXS5pdGVtO1xyXG4gICAgICAgICAgdGhpcy50aEVsZW1lbnQuY2xhc3NMaXN0LmFkZChoZWFkTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZUhlYWREaXYuYXBwZW5kQ2hpbGQodGhpcy50aEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIGNoZWNrYm94ZXNcclxuICAgKiBAcGFyYW0gdmFsdWUgY291bnRlciB2YWx1ZVxyXG4gICAqIEBwYXJhbSBncmlkRWxlbWVudCBncmlkIGRhdGEgb2JqZWN0XHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZUNoZWNrYm94KHZhbHVlLCBncmlkRWxlbWVudCkge1xyXG4gICAgdGhpcy5jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgIHRoaXMuY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICAgIHRoaXMuY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIHRoaXMuY2hlY2tib3guc3R5bGUudHJhbnNpdGlvbiA9ICdiYWNrZ3JvdW5kIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpJztcclxuICAgIHRoaXMuY2hlY2tib3guc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgdGhpcy5jaGVja2JveC5zdHlsZS5oZWlnaHQgPSAnMTZweCc7XHJcbiAgICB0aGlzLmNoZWNrYm94LnN0eWxlLm1hcmdpbiA9ICc2cHgnO1xyXG4gICAgdGhpcy5jaGVja2JveC5zdHlsZS53aWR0aCA9ICcxNnB4JztcclxuICAgIHRoaXMuY2hlY2tib3guc3R5bGUubWFyZ2luTGVmdCA9ICcxN3B4JztcclxuXHJcbiAgICAvL1NlbGVjdCB0aGUgY2hlY2sgYm94IHdvcmsgaW4gcHJvZ3Jlc3NcclxuICAgIHRoaXMuY2hlY2tib3gub25jbGljayA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMuY2hlY2tib3ggYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgaWYoZ3JpZEVsZW1lbnQgPT09ICdncmlkRWxlbWVudCcpIHtcclxuICAgICAgICBsZXQgY2hlY2tib3hPYmpMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB0aGlzLmdyaWREYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYoY2hlY2tib3hPYmpMaXN0WzBdWydjaGVja2VkJ10gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYoY2hlY2tib3hPYmpMaXN0W2krMV1bJ2NoZWNrZWQnXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBjaGVja2JveE9iakxpc3RbaSsxXVsnY2hlY2tlZCddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdGVkQ2hlY2tib3hlc0FycmF5KCRldmVudCwgdGhpcy5ncmlkRGF0YUxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYoY2hlY2tib3hPYmpMaXN0WzBdWydjaGVja2VkJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94T2JqTGlzdFtpKzFdWydjaGVja2VkJ10gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBjaGVja2JveE9iakxpc3RbaSsxXVsnY2hlY2tlZCddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0aWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RlZENoZWNrYm94ZXNBcnJheSgkZXZlbnQsIHRoaXMuZ3JpZERhdGFMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RlZENoZWNrYm94ZXNBcnJheSgkZXZlbnQsIGdyaWRFbGVtZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTdG9yZXMgYWxsIHRoZSBzZWxlY3RlZC9jaGVja2VkIGdyaWQgb2JqZWN0cyBpbnRvIGFuIGFycmF5IHRvIHBlcmZvcm0gYnVsayBhY3Rpb25zLiBcclxuICAgKiBAcGFyYW0gJGV2ZW50IE1vdXNlIGV2ZW50XHJcbiAgICogQHBhcmFtIGdyaWRFbGVtZW50IGdyaWQgZGF0YSBvYmplY3RcclxuICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVTZWxlY3RlZENoZWNrYm94ZXNBcnJheSgkZXZlbnQsIGdyaWRFbGVtZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5lbmFibGVBY3Rpb25Ub29sYmFyLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbmFibGVCdWxrQWN0aW9uVG9vbGJhci5lbmFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jbGVhckZsaXRlciA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIFxyXG4gICAgLyoqIElmIGNoZWNrYm94IHRydWUsIHB1c2ggZWxlbWVudCB0byBhcnJheS4gKi9cclxuICAgIGlmICgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0aWVzLnB1c2goZ3JpZEVsZW1lbnQpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgLyoqIFJlbW92ZXMgdGhlIGdyaWQgb2JqZWN0IGZyb20gdGhlIGFycmF5IGlmIHVzZXIgdW5jaGVja3MvZGVzZWxlY3RzLiAqL1xyXG4gICAgICBmb3IobGV0IG9iaiBvZiB0aGlzLnNlbGVjdGVkRW50aXRpZXMpIHtcclxuICAgICAgICBpZihvYmouaWQgPT09IGdyaWRFbGVtZW50LmlkKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXRpZXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRFbnRpdGllcy5pbmRleE9mKG9iaiksMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVCdWxrQWN0aW9uRW50aXRpZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYnVsayBhY3Rpb25zLCBpbi1wbGFjZSBhbmQgaW4tc2VsZWN0b3IgaW4gYnVsayBhY3Rpb24gdG9vbGJhci4gXHJcbiAgICogV2hlbiBtdWx0aXBsZSBncmlkIGVsZW1lbnRzIGFyZSBzZWxlY3RlZCB0aHJvdWdoIGNoZWNrYm94ZXMsIHRoaXMgbWV0aG9kIGFkZHMgYnVsayBhY3Rpb25zIHRvIGJ1bGsgYWN0aW9uIHRvb2xiYXIuXHJcbiAgICovXHJcbiAgY3JlYXRlQnVsa0FjdGlvbkVudGl0aWVzKCkge1xyXG5cclxuICAgIGxldCBidWxrQWN0aW9uVG9vbGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1bGstYWN0aW9ucy10b29sYmFyJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaWYodGhpcy5zZWxlY3RlZEVudGl0aWVzICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEVudGl0aWVzLmxlbmd0aCA9PSAxICYmIGJ1bGtBY3Rpb25Ub29sYmFyLmlubmVySFRNTCA9PSAnJykge1xyXG5cclxuICAgICAgbGV0IHNlbGVjdG9yTWVudUljb25DcmVhdGVkOiBudW1iZXIgPSAwO1xyXG4gICAgICBsZXQgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY3Rpb25Db25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5hY3Rpb25Db25maWdbaV07XHJcbiAgICAgICAgaWYgKGNvbmZpZy50eXBlID09PSBBY3Rpb25UeXBlcy5lbnRpdHkpIHtcclxuICAgICAgICAgIGlmKGNvbmZpZy5pc0J1bGsgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy5wb3NpdGlvblR5cGUgPT09IEFjdGlvblBvc2l0aW9uLnNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0b3JNZW51SWNvbkNyZWF0ZWQrKztcclxuXHJcbiAgICAgICAgICAgICAgaWYoc2VsZWN0b3JNZW51SWNvbkNyZWF0ZWQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGtBY3Rpb25Ub29sYmFyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQWN0aW9uU2VsZWN0b3JEcm9wZG93bihkcm9wZG93bkNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURyb3Bkb3duTWVudUl0ZW1zKGNvbmZpZykpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29uZmlnLnBvc2l0aW9uVHlwZSA9PT0gQWN0aW9uUG9zaXRpb24uaW5wbGFjZSkge1xyXG4gICAgICAgICAgICAgIGJ1bGtBY3Rpb25Ub29sYmFyLmFwcGVuZENoaWxkKHRoaXMuYWRkQnVsa0FjdGlvbnMoY29uZmlnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnNlbGVjdGVkRW50aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxldCBidWxrQWN0aW9uVG9vbGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1bGstYWN0aW9ucy10b29sYmFyJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGJ1bGtBY3Rpb25Ub29sYmFyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGJ1bGtBY3Rpb25Ub29sYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcblxyXG4gICAgICB0aGlzLmVuYWJsZUFjdGlvblRvb2xiYXIuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbmFibGVCdWxrQWN0aW9uVG9vbGJhci5lbmFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgYWN0aW9ucyBpbi1zZWxlY3RvciBkcm9wZG93biBtZW51LlxyXG4gICAqIEBwYXJhbSBkcm9wZG93bkNvbnRlbnQgZHJvcGRvd24gY29udGVudCBkaXYgSFRNTEVsZW1lbnRcclxuICAgKiBAcmV0dXJuIGRyb3Bkb3duIEhUTUxFbGVtZW50XHJcbiAgICovXHJcbiAgY3JlYXRlQWN0aW9uU2VsZWN0b3JEcm9wZG93bihkcm9wZG93bkNvbnRlbnQpIHtcclxuXHJcbiAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9IFwiZHJvcGRvd25cIjtcclxuICAgIGRyb3Bkb3duLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICBsZXQgdGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRkRGl2LmNsYXNzTmFtZSA9IFwiZW50aXR5LWV2ZW50XCI7XHJcbiAgICB0ZERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIHRkRGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjE4cHhcIjtcclxuXHJcbiAgICBsZXQgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZW51SWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMjBweFwiO1xyXG4gICAgbWVudUljb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICBtZW51SWNvbi5zdHlsZS5jc3NGbG9hdCA9IFwicmlnaHRcIjtcclxuICAgIG1lbnVJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XHJcbiAgICBtZW51SWNvbi5pbm5lclRleHQgPSAnbW9yZV92ZXJ0JztcclxuXHJcbiAgICBkcm9wZG93bkNvbnRlbnQuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWNvbnRlbnQnO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLm1pbldpZHRoID0gJzE2MHB4JztcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjRweFwiO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmJveFNoYWRvdyA9ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSc7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUudG9wID0gJzI2cHgnO1xyXG5cclxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcclxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duQ29udGVudCk7XHJcblxyXG4gICAgZHJvcGRvd24ub25jbGljayA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oaWRlU2hvd0FjdGlvblNlbGVjdG9yRHJvcGRvd24oZHJvcGRvd25Db250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHJvcGRvd247XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIGFjdGlvbnMgaW4tc2VsZWN0b3IgZHJvcGRvd24gbWVudSBpdGVtcy5cclxuICAgKiBAcGFyYW0gY29uZmlnIGFjdGlvbiBjb25maWcgb2JqZWN0XHJcbiAgICogQHJldHVybiBkcm9wZG93bk1lbnVJdGVtIEhUTUxFbGVtZW50XHJcbiAgICovXHJcbiAgY3JlYXRlRHJvcGRvd25NZW51SXRlbXMoY29uZmlnKSB7XHJcbiAgICBsZXQgZHJvcGRvd25NZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZHJvcGRvd25NZW51SXRlbS5jbGFzc05hbWUgPSAnbWF0LW1lbnUtaXRlbSc7XHJcbiAgICBkcm9wZG93bk1lbnVJdGVtLmlubmVyVGV4dCA9IGNvbmZpZy5pY29uTmFtZTtcclxuICAgIGRyb3Bkb3duTWVudUl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkcm9wZG93bk1lbnVJdGVtLnN0eWxlLnBhZGRpbmcgPSAnMXB4IDE2cHgnO1xyXG5cclxuICAgIGRyb3Bkb3duTWVudUl0ZW0ub25jbGljayA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24oY29uZmlnLnRva2VuLCB0aGlzLnNlbGVjdGVkRW50aXRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkcm9wZG93bk1lbnVJdGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhpZGUgYW5kIHNob3cgYWN0aW9ucyBpbi1zZWxlY3RvciBkcm9wZG93biBtZW51LlxyXG4gICAqIEBwYXJhbSBkcm9wZG93bkNvbnRlbnQgZHJvcGRvd24gY29udGVudCBIVE1MRWxlbWVudFxyXG4gICAqL1xyXG4gIGhpZGVTaG93QWN0aW9uU2VsZWN0b3JEcm9wZG93bihkcm9wZG93bkNvbnRlbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYoZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2UgaWYoZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZXMgdGhlIHJvd3MgYW5kIGNvbHVtbnMgb2YgdGhlIGdyaWQgYWNjb3JkaW5nIHRvIGNvbHVtbiBkZWZzIGFuZCBtb2R1bGUgZGF0YSBsaXN0ICovXHJcbiAgY3JlYXRlR3JpZCgpIHtcclxuICAgIHRoaXMuY2RrVmlydHVhbFZpZXdwb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlcicpWzBdO1xyXG4gICAgdGhpcy5jZGtWaXJ0dWFsVmlld3BvcnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtdGFibGUnO1xyXG4gICAgLy9DcmVhdGUgdGFibGUgaGVhZGluZ1xyXG4gICAgdGhpcy5jcmVhdGVUYWJsZUhlYWRpbmcoKTtcclxuXHJcbiAgICBsZXQgdGFibGVEYXRhQ2VsbCA9IG51bGw7XHJcbiAgICBsZXQgdGFibGVSb3dEYXRhID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKDsgdGhpcy5jb3VudGVyIDwgdGhpcy5ncmlkRGF0YUxpc3QubGVuZ3RoOyB0aGlzLmNvdW50ZXIrKykge1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVSb3dzKHRoaXMuY291bnRlcik7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94KHRoaXMuY291bnRlciwgdGhpcy5ncmlkRGF0YUxpc3RbdGhpcy5jb3VudGVyXSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBtb2R1bGVMaXN0S2V5IGluIHRoaXMuZ3JpZERhdGFMaXN0W3RoaXMuY291bnRlcl0pIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sdW1uQ29uZmlnS2V5IGluIHRoaXMuY29sdW1uQ29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuY29sdW1uQ29uZmlnW2NvbHVtbkNvbmZpZ0tleV0ubmFtZSA9PT0gbW9kdWxlTGlzdEtleSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxlLXJvdy1kYXRhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxhc3RSb3dJbmRleCA9IHRhYmxlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlUm93RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlLXJvdy1kYXRhJylbbGFzdFJvd0luZGV4IC0gMV0gYXMgSFRNTFRhYmxlUm93RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlRGF0YUNlbGwgPSB0YWJsZVJvd0RhdGEuY2VsbHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5jb2x1bW5Db25maWdbY29sdW1uQ29uZmlnS2V5XS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ3JpZERhdGFMaXN0W3RoaXMuY291bnRlcl1bbW9kdWxlTGlzdEtleV07XHJcblxyXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICB0YWJsZURhdGFDZWxsWzBdLmFwcGVuZENoaWxkKHRoaXMuY2hlY2tib3gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Um93LmdldEVuYWJsZSkge1xyXG4gICAgICAgICAgICAgIHRhYmxlRGF0YUNlbGxbMF0uc3R5bGUud2lkdGggPSBcIjEwJVwiO1xyXG4gICAgICAgICAgICAgIHRhYmxlRGF0YUNlbGxbMF0uc3R5bGUuZGlzcGxheSA9ICd0YWJsZS1jZWxsJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhYmxlRGF0YUNlbGxbcG9zXS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLnJpZ2h0ID0gMCArIFwicHhcIjtcclxuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgICAgdGFibGVEYXRhQ2VsbFt0YWJsZURhdGFDZWxsLmxlbmd0aCAtIDFdLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAvLyB0YWJsZURhdGFDZWxsW3RhYmxlRGF0YUNlbGwubGVuZ3RoIC0gMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHRhYmxlRGF0YUNlbGxbdGFibGVEYXRhQ2VsbC5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZCh0aGlzLmFkZEVudGl0eUFjdGlvbih0aGlzLmNvdW50ZXIpKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JpZERhdGEub25HcmlkRGF0YUxvYWQodGhpcy5ncmlkRGF0YUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBlbnRpdHkgYWN0aW9uIG9uIGdyaWQgcm93cywgZm9yIG5vbi1idWxrIGFjdGlvbnMuXHJcbiAgICogQHBhcmFtIGNvdW50ZXIgY291bnRlciBmb3IgdGhlIG51bWJlciBvZiByb3dzXHJcbiAgICogQHJldHVybnMgZGl2IGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEVudGl0eUFjdGlvbihjb3VudGVyOiBudW1iZXIpIHtcclxuXHJcbiAgICBsZXQgdGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRkRGl2LmNsYXNzTmFtZSA9IFwiZW50aXR5LWV2ZW50XCI7XHJcbiAgICB0ZERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICB0ZERpdi5zdHlsZS50b3AgPSBcIjJ2aFwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGlvbkNvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY29uZmlnID0gdGhpcy5hY3Rpb25Db25maWdbaV07XHJcbiAgICAgIGlmIChjb25maWcudHlwZSA9PT0gQWN0aW9uVHlwZXMuZW50aXR5KSB7XHJcbiAgICAgICAgaWYoY29uZmlnLmlzQnVsayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRkRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICBsZXQgc3BhbiA9IHRoaXMuY3JlYXRlQWN0aW9uU3BhbkVsZW1lbnQoY29uZmlnKTtcclxuICAgICAgICAgIHRkRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgc3Bhbi5vbmNsaWNrID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKGNvbmZpZy50b2tlbiwgdGhpcy5ncmlkRGF0YUxpc3RbY291bnRlcl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGREaXY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGJ1bGsgYWN0aW9ucyBVSSBlbGVtZW50cyB0byBidWxrIGFjdGlvbiB0b29sYmFyIGFuZCBhZGRzIGEgYWN0aW9uIGRpc3BhdGNoZXIgb24gb25jbGljayBldmVudC5cclxuICAgKiBAcGFyYW0gY29uZmlnIEFjdGlvbiBDb25maWd1cmF0aW9uIGFycmF5XHJcbiAgICogQHJldHVybnMgZGl2IGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEJ1bGtBY3Rpb25zKGNvbmZpZzogQWN0aW9uQ29uZmlnKSB7XHJcblxyXG4gICAgbGV0IHRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZERpdi5jbGFzc05hbWUgPSBcImVudGl0eS1ldmVudFwiO1xyXG4gICAgdGREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICB0ZERpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxOHB4XCI7XHJcbiAgICB0ZERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMTVweFwiO1xyXG5cclxuICAgIGxldCBzcGFuID0gdGhpcy5jcmVhdGVBY3Rpb25TcGFuRWxlbWVudChjb25maWcpO1xyXG5cclxuICAgIHRkRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgc3Bhbi5vbmNsaWNrID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbihjb25maWcudG9rZW4sIHRoaXMuc2VsZWN0ZWRFbnRpdGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRkRGl2O1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgc3BhbiBlbGVtZW50IGZvciB0aGUgVUkgYWN0aW9uIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBBY3Rpb24gQ29uZmlndXJhdGlvbiBhcnJheVxyXG4gICAqIEByZXR1cm5zIHNwYW4gZWxlbWVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlQWN0aW9uU3BhbkVsZW1lbnQoY29uZmlnOiBBY3Rpb25Db25maWcpIHtcclxuXHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3Bhbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMjBweFwiO1xyXG4gICAgc3Bhbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIHNwYW4uc3R5bGUuY3NzRmxvYXQgPSBcInJpZ2h0XCI7XHJcbiAgICBpZihjb25maWcudG9vbHRpcCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRvb2x0aXApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcuaXNJY29uID09PSB0cnVlKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBjb25maWcuaWNvbk5hbWU7XHJcbiAgICBjb25zdCBzcGFuQ2xhc3MgPSBjb25maWcuaWNvbk5hbWU7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoc3BhbkNsYXNzLnJlcGxhY2UoLyAvZywgXCJfXCIpKTtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIC8qKiBGZXRjaGVzIG5leHQgc2V0IG9mIGdyaWQgcmVjb3JkcyBvbiBzY3JvbGwgdG8gYm90dG9tLiAqL1xyXG4gIHB1YmxpYyBnZXROZXh0QmF0Y2hPZlBhZ2UoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCdib3R0b20nKSA9PT0gMCkge1xyXG5cclxuICAgICAgdGhpcy5ncmlkRGF0YS5nZXROZXh0UGFnZSgrK3RoaXMucGFnZU51bWJlciwgdGhpcy5wYWdlU2l6ZSkudGhlbihcclxuICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgaWYocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLmdyaWREYXRhTGlzdC5wdXNoKHJlc3VsdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkRGF0YUxpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3J3YXJkIHRoZSBldmVudCB0byBkaXNwYXRjaCBhY3Rpb24gd2l0aCB0b2tlbnMgYW5kIHBhcmFtZXRlcnMuXHJcbiAgICovXHJcbiAgZXhlY3V0ZUNvcmVBY3Rpb24odG9rZW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlci5kaXNwYXRjaEFjdGlvbih0b2tlbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldCBzZXRBY3Rpb25EaXNwYXRjaGVyKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuYWN0aW9uRGlzcGF0Y2hlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRvZ2dsZXMgZnJvbSBzZWFyY2ggcGxhY2Vob2xkZXIgdG8gc2VhcmNoIGJhci9ib3ggYnkgc2V0dGluZyB0aGUgZGlzcGxheSB2YWx1ZVxyXG4gICAqIEFsc28gZ2V0IHRoZSBwb3NpdGlvbiBhbmQgc2V0IHRvIG1vZGVsIHBvcHVwLlxyXG4gICAqIENsZWFyIGJ1dHRvbiBlbmFibGUuXHJcbiAgICovXHJcbiAgdG9nZ2xlVG9TZWFyY2hCYXIoZW5hYmxlKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGxldCB4ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMuZW5hYmxlU2VhcmNoQmFyLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIHRoaXMuY2xlYXJGbGl0ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsaXN0IG9mIGNvbHVtbiBuYW1lIEZvciBzdWdnZXN0aW9uXHJcbiAgICovXHJcbiAgZ2V0Q29sdW1uTmFtZShjb2x1bW5MaXN0KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYoY29sdW1uTGlzdFtpXS5uYW1lID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbHVtbk5hbWVTdWdnZXN0aW9uLnB1c2goY29sdW1uTGlzdFtpXS5pdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiB0aGUgRmlsdGVyIElucHV0XHJcbiAgICovXHJcbiAgIG9wZW5GaWx0ZXJJbnB1dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5maWx0ZXJOYW1lID0gdmFsdWU7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtZm9ybS1maWVsZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGxldCBjbG9zZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZS1pY29uJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9ICdjb250ZW50cyc7XHJcblxyXG4gICAgdGhpcy5lbmFibGVTZWFyY2hCYXIuZW5hYmxlID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1sYWJlbFwiKS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB2YWx1ZSBDb2x1bW4gTmFtZSBhbmQgRmlsdGVyIHNlYXJjaCB2YWx1ZVxyXG4gICAqL1xyXG4gIGZpbHRlclN1Ym1pdChzZWFyY2hWYWx1ZSkge1xyXG5cclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmlsdGVyLWluZm8tY29udGFpbmVyXCIpWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJjb250ZW50c1wiO1xyXG5cclxuICAgIGxldCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtZm9ybS1maWVsZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgc2VhcmNoSW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkVmFsdWU6IHN0cmluZyA9IHRoaXMuZmlsdGVyTmFtZSArIFwiIDogXCIgKyBzZWFyY2hWYWx1ZTtcclxuICAgIHRoaXMuZGlzcGxheUZpbHRlclZhbHVlLnB1c2goc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB0aGlzLmdldGtleUZyb21WYWx1ZSh0aGlzLmZpbHRlck5hbWUpO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlU2VhcmNoQmFyLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlW3RoaXMuZ2V0S2V5XSA9IHNlYXJjaFZhbHVlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIHRoaXMuZ2V0RmlsdGVyTGlzdCh0aGlzLmZpbHRlclZhbHVlLnRva2VuLCB0aGlzLmZpbHRlclNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsb3NlIHRoZSBmaWx0ZXIgaW5wdXQgZmllbGQuICovXHJcbiAgY2xvc2VGaWx0ZXJJbnB1dCgpIHtcclxuICAgIGxldCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtZm9ybS1maWVsZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgc2VhcmNoSW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgbGV0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlLWljb24nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNsb3NlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBrZXkgZnJvbSB2YWx1ZVxyXG4gICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgKi9cclxuICBnZXRrZXlGcm9tVmFsdWUodmFsdWUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5Db25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHZhbCA9IE9iamVjdC52YWx1ZXModGhpcy5jb2x1bW5Db25maWdbaV0pXHJcbiAgICAgIGlmICh2YWwuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5nZXRLZXkgPSB2YWxbMF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgZmlsdGVyIGFkZGVkIGFuZCBhbmQgc2hvdyBhZGQgZmlsdGVyIGJ1dHRvbiBhZ2Fpbi5cclxuICAgKi9cclxuICBjbGVhckFkZGVkRmlsdGVyKCkge1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRWYWx1ZSA9IHt9O1xyXG4gICAgdGhpcy5kaXNwbGF5RmlsdGVyVmFsdWUgPSBbXTtcclxuICAgIHRoaXMuY2xlYXJGbGl0ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZW5hYmxlU2VhcmNoUGxhY2Vob2xkZXIuZW5hYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZW5hYmxlU2VhcmNoQmFyLmVuYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmVuYWJsZVNlYXJjaEJhci5lbmFibGUgPSBmYWxzZTtcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1pbmZvLWNvbnRhaW5lclwiKSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgLy8gdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAvL0NhbGwgdGhlIGxpc3QgYWdhaW4gXHJcbiAgICB0aGlzLmNsZWFyVGFibGVEYXRhKCk7XHJcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgdGhpcy5ncmlkRGF0YS5nZXRGaXJzdFBhZ2UodGhpcy5wYWdlTnVtYmVyLCB0aGlzLnBhZ2VTaXplKS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuZ3JpZERhdGFMaXN0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGZpbHRlciBsaXN0IGNhbGwgdGhyb3VnaCBhY3Rpb25kaXNwYXRjaGVyLlxyXG4gICAqL1xyXG4gIGdldEZpbHRlckxpc3QodG9rZW4sIGZpbHRlclZhbHVlKSB7XHJcbiAgICB0aGlzLmFjdGlvbkRpc3BhdGNoZXIuZGlzcGF0Y2hBY3Rpb24odG9rZW4sIGZpbHRlclZhbHVlKS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXJUYWJsZURhdGEoKTtcclxuICAgICAgICB0aGlzLmdyaWREYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ3JpZERhdGFMaXN0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsZWFycyBncmlkIGRhdGEuICovXHJcbiAgY2xlYXJUYWJsZURhdGEoKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZS5sZW5ndGg7KSB7XHJcbiAgICAgICh0YWJsZVtpXSBhcyBIVE1MRWxlbWVudCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaCB0aGUgZ3JpZCB3aGVuIG5lZWRlZFxyXG4gICAqL1xyXG4gIHJlZnJlc2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmdyaWREYXRhTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcbiAgICB0aGlzLmdyaWREYXRhLmdldEZpcnN0UGFnZSh0aGlzLnBhZ2VOdW1iZXIsIHRoaXMucGFnZVNpemUpLnRoZW4oXHJcbiAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhclRhYmxlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZERhdGFMaXN0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRvZ2dsZXMgcGFnaW5hdGlvbiB0b29sIGJhclxyXG4gICAqIEBwYXJhbSB2YWx1ZSB0b2dnbGUgYm9vbGVhbiB2YWx1ZVxyXG4gICAqL1xyXG4gIHRvZ2dsZVBhZ2luYXRpb25Ub29sYmFyKHZhbHVlKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVBhZ2luYXRpb24gPSAhdmFsdWU7XHJcblxyXG4gICAgbGV0IGNka1ZpcnR1YWxWaWV3cG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXInKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIC8vIGNka1ZpcnR1YWxWaWV3cG9ydC5zdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwdmggLSAyMTFweClcIjtcclxuICAgIGNvbnNvbGUubG9nKGNka1ZpcnR1YWxWaWV3cG9ydCk7XHJcblxyXG4gICAgdGhpcy5lbmFibGVGb290ZXJUb29sYmFyLmVuYWJsZSA9IHRoaXMudG9nZ2xlUGFnaW5hdGlvbjtcclxuXHJcbiAgICBpZih0aGlzLmVuYWJsZUZvb3RlclRvb2xiYXIuZW5hYmxlID09PSB0cnVlKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnaW5nQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMucGFnaW5nQ29uZmlnW2ldO1xyXG4gICAgICAgIGlmIChjb25maWcucGFnaW5nVHlwZSA9PT0gUGFnaW5nVHlwZXMucGFnaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2luZ0VsZW1lbnRzKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnaW5nRWxlbWVudHMoY29uZmlnKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGxldCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9vdGVyJylbMF07XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpblJpZ2h0ID0gJzEwcHgnO1xyXG4gIFxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XHJcbiAgICBzcGFuLnN0eWxlLnBhZGRpbmcgPSAnOXB4JztcclxuICAgIHNwYW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGNvbmZpZy5pY29uTmFtZTtcclxuICAgIGlmKGNvbmZpZy50b29sdGlwICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjb25maWcudG9vbHRpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5vbm1vdXNlb3ZlciA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm9ubW91c2VsZWF2ZSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm9uY2xpY2sgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5hY3Rpb25EaXNwYXRjaGVyLmRpc3BhdGNoQWN0aW9uKGNvbmZpZy50b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgZm9vdGVyRWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH1cclxuXHJcbn0iXX0=