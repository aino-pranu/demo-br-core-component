import { __values } from 'tslib';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
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
import { Injectable, EventEmitter, Directive, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ɵɵdefineInjectable, Component, ChangeDetectorRef, ViewChild, ɵɵinject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EnterpriseGridService = /** @class */ (function () {
    function EnterpriseGridService() {
        this.refresh = new EventEmitter();
    }
    EnterpriseGridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EnterpriseGridService.ctorParameters = function () { return []; };
    /** @nocollapse */ EnterpriseGridService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EnterpriseGridService_Factory() { return new EnterpriseGridService(); }, token: EnterpriseGridService, providedIn: "root" });
    return EnterpriseGridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActionTypes = /** @class */ (function () {
    function ActionTypes() {
    }
    ActionTypes.entity = "entity_action";
    ActionTypes.core = "core_action";
    return ActionTypes;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeatureConfig = /** @class */ (function () {
    /**
     *
     * @param name feature name
     * @param enable boolean value to show or hide the feature
     */
    function FeatureConfig(name, enable) {
        this.name = name;
        this.enable = enable;
    }
    Object.defineProperty(FeatureConfig.prototype, "getName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "setName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "getEnable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.enable = value;
        },
        enumerable: true,
        configurable: true
    });
    return FeatureConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActionConfig = /** @class */ (function () {
    /**
     *
     * @param name action name
     * @param enable action enable boolean value
     * @param token action token e.g. on-button-click
     * @param type action type (hover or core)
     * @param positionType action position type (whether in-place or in-selector)
     * @param icon whether icon action, boolean value
     * @param iconName action icon name/text to be displayed.
     * @param tooltip tooltip string
     */
    function ActionConfig(name, enable, token, isBulk, type, positionType, icon, iconName, tooltip) {
        this.name = name;
        this.enable = enable;
        this.token = token;
        this.isBulk = isBulk;
        this.type = type;
        this.positionType = positionType;
        this.isIcon = icon;
        this.iconName = iconName;
        this.tooltip = tooltip;
    }
    Object.defineProperty(ActionConfig.prototype, "getName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getEnable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.enable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getToken", {
        get: /**
         * @return {?}
         */
        function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setToken", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getIsBulk", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isBulk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setIsBulk", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isBulk = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getPositionType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.positionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setPositionType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.positionType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setIcon", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getIconName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setIconName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "getTooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tooltip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionConfig.prototype, "setTooltip", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    return ActionConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActionPosition = /** @class */ (function () {
    function ActionPosition() {
    }
    ActionPosition.inplace = 'inplace_position';
    ActionPosition.selector = 'selector_position';
    return ActionPosition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingTypes = /** @class */ (function () {
    function PagingTypes() {
    }
    PagingTypes.scroll = "scroll";
    PagingTypes.paging = "paging";
    return PagingTypes;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _b = __values(this.actionConfig), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                for (var _b = __values(this.selectedEntities), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /** @nocollapse */ EnterpriseGridComponent.ngInjectableDef = ɵɵdefineInjectable({ factory: function EnterpriseGridComponent_Factory() { return new EnterpriseGridComponent(ɵɵinject(EnterpriseGridService), ɵɵinject(ChangeDetectorRef)); }, token: EnterpriseGridComponent, providedIn: "root" });
    return EnterpriseGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModuleSet = /** @class */ (function () {
    function MaterialModuleSet() {
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
                    ]
                },] }
    ];
    return MaterialModuleSet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AoGridDataDirective = /** @class */ (function () {
    function AoGridDataDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoGridDataDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpGridComp.setGridData = this.gridData;
        // console.log("Data Directive");
    };
    AoGridDataDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-grid-data]'
                },] }
    ];
    /** @nocollapse */
    AoGridDataDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
    ]; };
    AoGridDataDirective.propDecorators = {
        gridData: [{ type: Input }]
    };
    return AoGridDataDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AoActionsDirective = /** @class */ (function () {
    function AoActionsDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoActionsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpGridComp.setActionDispatcher = this.actionDispatcher;
    };
    AoActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-actions]'
                },] }
    ];
    /** @nocollapse */
    AoActionsDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
    ]; };
    AoActionsDirective.propDecorators = {
        actionDispatcher: [{ type: Input }]
    };
    return AoActionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AoGridConfigDirective = /** @class */ (function () {
    function AoGridConfigDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoGridConfigDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.gridConfig);
        this.enterpGridComp.setGridConfig = this.gridConfig;
    };
    AoGridConfigDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-grid-config]'
                },] }
    ];
    /** @nocollapse */
    AoGridConfigDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
    ]; };
    AoGridConfigDirective.propDecorators = {
        gridConfig: [{ type: Input }]
    };
    return AoGridConfigDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EnterpriseGridModule = /** @class */ (function () {
    function EnterpriseGridModule() {
    }
    EnterpriseGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EnterpriseGridComponent, AoGridDataDirective, AoActionsDirective, AoGridConfigDirective],
                    imports: [
                        CommonModule,
                        MaterialModuleSet,
                    ],
                    exports: [EnterpriseGridComponent, AoGridDataDirective, AoActionsDirective, AoGridConfigDirective],
                    providers: [EnterpriseGridComponent],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
                    ],
                },] }
    ];
    return EnterpriseGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    BaseActionDispatcher.ctorParameters = function () { return []; };
    /** @nocollapse */ BaseActionDispatcher.ngInjectableDef = ɵɵdefineInjectable({ factory: function BaseActionDispatcher_Factory() { return new BaseActionDispatcher(); }, token: BaseActionDispatcher, providedIn: "root" });
    return BaseActionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnConfig = /** @class */ (function () {
    /**
     *
     * @param name column attribute name
     * @param item column name to be displayed
     * @param position column position
     */
    function ColumnConfig(name, item, position) {
        this.name = name;
        this.item = item;
        this.position = position;
    }
    Object.defineProperty(ColumnConfig.prototype, "getname", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnConfig.prototype, "setname", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnConfig.prototype, "getitem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnConfig.prototype, "setitem", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.item = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnConfig.prototype, "getPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnConfig.prototype, "setPosition", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.position = value;
        },
        enumerable: true,
        configurable: true
    });
    return ColumnConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingConfig = /** @class */ (function () {
    function PagingConfig(name, enable, token, pagingType, icon, iconName, tooltip) {
        this.name = name;
        this.enable = enable;
        this.token = token;
        this.pagingType = pagingType;
        this.isIcon = icon;
        this.iconName = iconName;
        this.tooltip = tooltip;
    }
    Object.defineProperty(PagingConfig.prototype, "getName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getEnable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.enable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getToken", {
        get: /**
         * @return {?}
         */
        function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setToken", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getPagingType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pagingType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setPagingType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.pagingType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setIcon", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getIconName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setIconName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "getTooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tooltip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingConfig.prototype, "setTooltip", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    return PagingConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridConfig = /** @class */ (function () {
    function GridConfig() {
        this.actionConfigArr = new Array();
        this.featureConfigArr = new Array();
        this.pagingConfigArr = new Array();
        this.columnConfigArr = new Array();
        this.columnConfigArr.push(new ColumnConfig("checkbox", "", 0));
    }
    Object.defineProperty(GridConfig.prototype, "getGridHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this.gridHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "setGridHeader", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.gridHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "getPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "setPageSize", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "getTotalRecords", {
        get: /**
         * @return {?}
         */
        function () {
            return this.totalRecords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "setTotalRecords", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridConfig.prototype, "getColumnConfigArr", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columnConfigArr;
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
    GridConfig.prototype.addColumnConfig = /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    function (name, item, position) {
        if (position <= 0) {
            throw "The Column position must start from 1";
        }
        this.columnConfigArr.push(new ColumnConfig(name, item, position));
    };
    /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?} isBulk
     * @param {?=} type
     * @param {?=} positionType
     * @param {?=} isIcon
     * @param {?=} iconName
     * @param {?=} tooltip
     * @return {?}
     */
    GridConfig.prototype.actionConfig = /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?} isBulk
     * @param {?=} type
     * @param {?=} positionType
     * @param {?=} isIcon
     * @param {?=} iconName
     * @param {?=} tooltip
     * @return {?}
     */
    function (name, enable, token, isBulk, type, positionType, isIcon, iconName, tooltip) {
        this.actionConfigArr.push(new ActionConfig(name, enable, token, isBulk, type, positionType, isIcon, iconName, tooltip));
    };
    /**
     * @param {?} name
     * @param {?} enable
     * @return {?}
     */
    GridConfig.prototype.featureConfig = /**
     * @param {?} name
     * @param {?} enable
     * @return {?}
     */
    function (name, enable) {
        this.featureConfigArr.push(new FeatureConfig(name, enable));
    };
    /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?} pagingType
     * @param {?=} icon
     * @param {?=} iconName
     * @param {?=} tooltip
     * @return {?}
     */
    GridConfig.prototype.pagingConfig = /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?} pagingType
     * @param {?=} icon
     * @param {?=} iconName
     * @param {?=} tooltip
     * @return {?}
     */
    function (name, enable, token, pagingType, icon, iconName, tooltip) {
        this.pagingConfigArr.push(new PagingConfig(name, enable, token, pagingType, icon, iconName, tooltip));
    };
    GridConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GridConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ GridConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function GridConfig_Factory() { return new GridConfig(); }, token: GridConfig, providedIn: "root" });
    return GridConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EnterpriseGridComponent, EnterpriseGridModule, BaseActionDispatcher, ColumnConfig, GridConfig, EnterpriseGridService, ActionTypes, ActionPosition, FeatureConfig, ActionConfig, PagingTypes, PagingConfig, MaterialModuleSet as ɵd, AoActionsDirective as ɵb, AoGridConfigDirective as ɵc, AoGridDataDirective as ɵa };

//# sourceMappingURL=enterprise-grid.js.map