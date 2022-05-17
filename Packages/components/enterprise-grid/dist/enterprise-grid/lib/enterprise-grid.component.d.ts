import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { GridData } from '../action/GridData';
import { EnterpriseGridService } from './enterprise-grid.service';
import { FeatureConfig } from '../config/FeatureConfig';
import { ActionConfig } from '../config/ActionConfig';
export declare class EnterpriseGridComponent implements OnInit, OnDestroy {
    private gridService;
    private ref;
    featureConfig: any[];
    columnConfig: any[];
    actionConfig: any[];
    pagingConfig: any[];
    gridData: GridData;
    gridDataList: any[];
    gridHeader: string;
    searchValue: string;
    filterName: string;
    selectedEntities: any[];
    columnNameSuggestion: any[];
    clearFliter: boolean;
    filterSelectedValue: {};
    displayFilterValue: any[];
    getKey: any;
    pageSize: number;
    pageNumber: number;
    coreActions: any[];
    enableActionToolbar: FeatureConfig;
    enableSearchToolbar: FeatureConfig;
    enableSearchPlaceholder: FeatureConfig;
    enableSearchBar: FeatureConfig;
    enableBulkActionToolbar: FeatureConfig;
    selectRow: FeatureConfig;
    enableFooterToolbar: FeatureConfig;
    onRowClick: ActionConfig;
    filterValue: ActionConfig;
    row: HTMLTableRowElement;
    cdkVirtualViewport: any;
    tdElement: HTMLTableCellElement;
    thElement: HTMLTableHeaderCellElement;
    checkbox: any;
    private actionDispatcher;
    counter: number;
    togglePagination: boolean;
    virtualScroll: CdkVirtualScrollViewport;
    eventEmmiter: any;
    constructor(gridService: EnterpriseGridService, ref: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Sets core actions to the grid */
    private setCoreActions;
    setGridData: GridData;
    /**
     * Set the grid configuration for the grid.
     * @param data grid data
     */
    setGridConfig: any;
    /** Sets grid data to grid */
    setGridDataToGrid(): void;
    /**
     * This method sorts the grid configuration.
     * @param gridConfig JSON object of grid configuration.
     */
    sortGridConfig(gridConfig: any): void;
    /** Calculates grid column width. */
    setWidthByColumn(): number;
    /** Creates grid rows and add styles
     * @param value counter value
     */
    createRows(value: any): void;
    /** Creates grid cells and add styles to table data. */
    styleCells(): void;
    /** Create table heading */
    createTableHeading(): void;
    /** Create checkboxes
     * @param value counter value
     * @param gridElement grid data object
     */
    createCheckbox(value: any, gridElement: any): void;
    /** Stores all the selected/checked grid objects into an array to perform bulk actions.
     * @param $event Mouse event
     * @param gridElement grid data object
    */
    createSelectedCheckboxesArray($event: any, gridElement: any): void;
    /**
     * Creates bulk actions, in-place and in-selector in bulk action toolbar.
     * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
     */
    createBulkActionEntities(): void;
    /** Create actions in-selector dropdown menu.
     * @param dropdownContent dropdown content div HTMLElement
     * @return dropdown HTMLElement
     */
    createActionSelectorDropdown(dropdownContent: any): HTMLDivElement;
    /** Create actions in-selector dropdown menu items.
     * @param config action config object
     * @return dropdownMenuItem HTMLElement
     */
    createDropdownMenuItems(config: any): HTMLAnchorElement;
    /** Hide and show actions in-selector dropdown menu.
     * @param dropdownContent dropdown content HTMLElement
     */
    hideShowActionSelectorDropdown(dropdownContent: HTMLElement): void;
    /** Creates the rows and columns of the grid according to column defs and module data list */
    createGrid(): void;
    /**
     * Adds entity action on grid rows, for non-bulk actions.
     * @param counter counter for the number of rows
     * @returns div element
     */
    private addEntityAction;
    /**
     * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
     * @param config Action Configuration array
     * @returns div element
     */
    private addBulkActions;
    /**
     * Creates span element for the UI action element.
     * @param config Action Configuration array
     * @returns span element
     */
    private createActionSpanElement;
    /** Fetches next set of grid records on scroll to bottom. */
    getNextBatchOfPage(): void;
    /**
     * Forward the event to dispatch action with tokens and parameters.
     */
    executeCoreAction(token: any): void;
    setActionDispatcher: any;
    /** Toggles from search placeholder to search bar/box by setting the display value
     * Also get the position and set to model popup.
     * Clear button enable.
     */
    toggleToSearchBar(enable: any): void;
    /**
     * Get the list of column name For suggestion
     */
    getColumnName(columnList: any): void;
    /**
     * Open the Filter Input
     */
    openFilterInput(value: any): void;
    /**
     * Get the value Column Name and Filter search value
     */
    filterSubmit(searchValue: any): void;
    /** Close the filter input field. */
    closeFilterInput(): void;
    /**
     * Get the key from value
     * @param value
     */
    getkeyFromValue(value: any): void;
    /**
     * Clear the filter added and and show add filter button again.
     */
    clearAddedFilter(): void;
    /**
     * Get filter list call through actiondispatcher.
     */
    getFilterList(token: any, filterValue: any): void;
    /** Clears grid data. */
    clearTableData(): void;
    /**
     * Refresh the grid when needed
     */
    refresh(): void;
    /** Toggles pagination tool bar
     * @param value toggle boolean value
     */
    togglePaginationToolbar(value: any): void;
    createPagingElements(config: any): void;
}
