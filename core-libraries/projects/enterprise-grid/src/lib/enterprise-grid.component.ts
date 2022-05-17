import { Component, OnInit, Injectable, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { EnterpriseGridService } from './enterprise-grid.service';
import { ActionTypes } from '../config/ActionType';
import { ActionDispatcher } from '../action/ActionDispatcher';
import { FeatureConfig } from '../config/FeatureConfig';
import { ActionConfig } from '../config/ActionConfig';
import { ActionPosition } from '../config/ActionPosition';
import { PagingTypes } from '../config/PagingType';
import { GridStateStoreService } from '../state-store/grid-state-store.service';
import { DataSource } from '../action/DataSource';

@Component({
  selector: 'ao-enterprise-grid',
  templateUrl: './enterprise-grid.component.html',
  styleUrls: ['./enterprise-grid.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class EnterpriseGridComponent implements OnInit, OnDestroy {

  //Grid config info.
  featureConfig = new Array();

  //Column Config info.
  columnConfig = new Array();

  //Action Config info.
  actionConfig = new Array();

  //Paging Config info.
  pagingConfig = new Array();

  //Grid Data interface
  dataSource: DataSource;

  //Grid data list
  gridDataList = new Array();

  //Grid header
  gridHeader: string = '';

  //Grid component tag
  gridComponentTag: string = '';

  //Search Value
  searchValue: string;

  //Input filter name
  filterName: string;

  //Selected entities or rows.
  selectedEntities = new Array();

  //ColumnName Suggestion
  columnNameSuggestion = [];

  //Clear Filter
  clearFliter: boolean = false;

  //Add Filter Button loop
  filterSelectedValue = {};

  //Display filter loop 
  displayFilterValue = [];

  //Key for search data
  getKey;

  //page size
  pageSize = 10;

  //Total number of records.
  totalRecords = null;

  //Paging flag
  pagingFlag = false;

  //pageNo
  pageNumber = 1;

  //coreActions
  coreActions = new Array();

  //object of selectRow
  selectRowObject;

  //store grid header name
  headerName;

  //component tag name
  tagName;

  enableActionToolbar = new FeatureConfig({ "name": "enableActionToolbar", "enable": false }, {}, {}, {});
  enableSearchToolbar = new FeatureConfig({ "name": "enableSearchToolbar", "enable": false }, {}, {}, {});
  enableSearchPlaceholder = new FeatureConfig({ "name": "enableSearchPlaceholder", "enable": false }, {}, {}, {});
  enableSearchBar = new FeatureConfig({ "name": "enableSearchBar", "enable": false }, {}, {}, {});
  enableBulkActionToolbar = new FeatureConfig({ "name": "enableBulkActionToolbar", "enable": false }, {}, {}, {});
  selectRow = new FeatureConfig({ "name": "selectRow", "enable": false }, {}, {}, {});  // To enable checkboxes
  enableFooterToolbar = new FeatureConfig({ "name": "enableFooterToolbar", "enable": false }, [], [], []);
  onRowClick = new ActionConfig("onRowClick", true, "", false);
  getFilteredList = new ActionConfig("getFilteredList", true, "", false);
  getDataByPage = new ActionConfig("getDataByPage", true, "", false);
  filterValue = new ActionConfig("filterValue", true, "", false);

  // grid row element
  row: HTMLTableRowElement;

  // material cdk virtual viewport

  cdkVirtualViewport;

  // grid td element
  tdElement: HTMLTableCellElement;

  // grid th element
  thElement: HTMLTableHeaderCellElement;

  // grid checkbox element
  checkbox;

  // grid action dispatcher
  private actionDispatcher: ActionDispatcher;

  // grid data list counter variable
  counter: number = 0;

  //cdk virtual viewport view child variable
  @ViewChild(CdkVirtualScrollViewport, { static: false }) virtualScroll: CdkVirtualScrollViewport;

  // grid service event emitter
  eventEmmiter: any;

  constructor(private gridService: EnterpriseGridService, private ref: ChangeDetectorRef, private gridStateStoreService: GridStateStoreService) {
    this.gridStateStoreService.states$.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.columnConfig = [];
    this.eventEmmiter = this.gridService.refresh.subscribe(() => {
      this.refresh();
    });
  }

  ngOnDestroy(): void {
    if (this.eventEmmiter) {
      this.eventEmmiter.unsubscribe();
    }
  }

  /** Sets core actions to the grid */
  private setCoreActions(): void {
    for (let actionConfig of this.actionConfig) {
      if (actionConfig.type === ActionTypes.core && actionConfig.enable === true) {
        this.coreActions.push(actionConfig);
      }
    }
  }

  /** Sets paging actions to the footer toolbar. */
  private setPagingActions(): void {
    if (this.enableFooterToolbar.enable === true) {
      this.pagingFlag = true;
      for (let pagingConfig of this.pagingConfig) {
        if (pagingConfig.pagingType === PagingTypes.paging && pagingConfig.enable === true) {
          this.createPaginationActions(pagingConfig);
        }
      }
    }
  }

  /**
   * Set the grid configuration for the grid.
   * @param data grid data
   */
  set setGridConfig(data) {
    console.log(data)
    if (data.pageSize != undefined || data.pageSize != null) {
      this.pageSize = data.pageSize;
      this.totalRecords = data.totalRecords;
    }

    this.headerName = Object.values(data)[0]
    this.tagName = Object.values(data)[1]
    this.gridHeader = this.headerName;
    this.gridComponentTag = this.tagName;
    console.log(this.gridComponentTag)
    // this.gridHeader = data.gridHeader;
    // this.gridComponentTag = data.gridComponentTag
  }


  /**
   * Set the grid configuration for the grid.
   * @param data grid data
   */
  set setFeatureConfig(data) {
    console.log(data)
    this.columnConfig = data.columnConfigArr;
    this.featureConfig = data.featureConfigArr;
    this.actionConfig = data.actionConfigArr;
    this.pagingConfig = data.pagingConfigArr;
    this.sortGridConfig(this.featureConfig);
    this.sortGridConfig(this.actionConfig);
    this.sortGridConfig(this.pagingConfig);
    this.getColumnName(this.columnConfig);
    this.setCoreActions();
    this.setPagingActions();
  }

  /**
   * Set the datasource to the grid.
   * @param data dataSource
   */
  set setDataSource(data: DataSource) {
    this.dataSource = data;
    this.setGridDataToGrid();
  }


  /** Sets grid data to grid */
  setGridDataToGrid() {
    this.dataSource.getFirstPage(this.pageNumber, this.pageSize).then(
      result => {
        this.clearTableData();
        this.gridDataList = result;
        this.createGrid();
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * This method sorts the grid configuration.
   * @param gridConfig JSON object of grid configuration.
   */
  sortGridConfig(gridConfig) {
    console.log(gridConfig)
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

  /** Calculates grid column width. */
  setWidthByColumn(): number {
    const count = 100 / this.columnConfig.length;
    return count;
  }

  /** Creates grid rows and add styles
   * @param value counter value
   */
  createRows(value) {

    this.row = document.createElement('tr');

    if (this.onRowClick) {
      this.row.onclick = () => {
        this.actionDispatcher.dispatchAction(this.onRowClick.token, this.gridDataList[value])
      }
    }

    this.row.onmouseover = ($event) => {

      let row = ($event.currentTarget as HTMLElement);
      // row.style.backgroundColor = 'rgba(63,81,181,.15)';
      // row.style.color = '#3f51b5';
      var a = row.childNodes[row.childNodes.length - 1] as HTMLElement;
      // a.style.visibility = "visible";
      (a.childNodes[0] as HTMLElement).style.visibility = "visible";
    };

    this.row.onmouseout = ($event) => {
      let row = ($event.currentTarget as HTMLElement);
      // row.style.backgroundColor = 'white';
      // row.style.color = 'black';
      let a = row.childNodes[row.childNodes.length - 1] as HTMLElement;
      // a.style.visibility = "hidden";
      (a.childNodes[0] as HTMLElement).style.visibility = "hidden";
    }

    this.row.style.background = 'white';
    this.row.style.padding = '5px';
    this.row.classList.add("table-row-data");

    this.cdkVirtualViewport.appendChild(this.row);
    this.styleCells();
  }

  /** Creates grid cells and add styles to table data. */
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

  /** Create table heading */
  createTableHeading(): void {
    //component tag name
    const componentTagName = document.getElementsByTagName(this.gridComponentTag)[0] as HTMLElement;
    //access table header from current component tag name
    const tableHeadDiv = componentTagName.getElementsByClassName('th-div')[0]

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

          this.selectRowObject = Object.values(this.selectRow)
          if (this.selectRowObject[1]) {
            this.thElement.style.width = "10%";
            this.thElement.style.display = 'table-cell';
          }

        } else {
          const headName = this.columnConfig[i].name;
          this.thElement.innerHTML = this.columnConfig[i].item;
          this.thElement.classList.add(headName);
        }
        tableHeadDiv.appendChild(this.thElement);
      }
    }

  }
  /** Create checkboxes
   * @param value counter value
   * @param gridElement grid data object
   */
  public createCheckbox(value, gridElement) {
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
    this.checkbox.onclick = ($event) => {

      if (gridElement === 'gridElement') {
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
      } else {
        this.createSelectedCheckboxesArray($event, gridElement);
      }

    }
  }

  /** Stores all the selected/checked grid objects into an array to perform bulk actions. 
   * @param $event Mouse event
   * @param gridElement grid data object
  */
  public createSelectedCheckboxesArray($event, gridElement) {
    $event.stopPropagation();

    this.enableSearchToolbar.enable = false;
    this.enableBulkActionToolbar.enable = true;
    this.clearFliter = false;

    this.ref.detectChanges();

    /** If checkbox true, push element to array. */
    if ($event.target.checked) {
      this.selectedEntities.push(gridElement);

    } else if ($event.target.checked === false) {

      /** Removes the grid object from the array if user unchecks/deselects. */
      for (let obj of this.selectedEntities) {
        if (obj.id === gridElement.id) {
          this.selectedEntities.splice(this.selectedEntities.indexOf(obj), 1);
        }
      }
    }
    this.ref.detectChanges();

    if (this.selectedEntities != null && this.selectedEntities.length == 1) {
      let bulkActionToolbar = document.getElementsByClassName('bulk-actions-toolbar')[0] as HTMLElement;

      for (let i = 0; i < this.actionConfig.length; i++) {
        let config = this.actionConfig[i];
        if (config.type === ActionTypes.entity) {
          if (config.isBulk === true) {
            bulkActionToolbar.appendChild(this.addBulkActions(config));
          }
        }
      }
    }

    if (this.selectedEntities === null && this.selectedEntities.length < 1) {
      this.enableSearchToolbar.enable = true;
      this.enableBulkActionToolbar.enable = false;

      this.ref.detectChanges();
    }

    this.createBulkActionEntities();
  }

  /**
   * Creates bulk actions, in-place and in-selector in bulk action toolbar. 
   * When multiple grid elements are selected through checkboxes, this method adds bulk actions to bulk action toolbar.
   */
  createBulkActionEntities() {

    let bulkActionToolbar = document.getElementsByClassName('bulk-actions-toolbar')[0] as HTMLElement;

    if (this.selectedEntities != null && this.selectedEntities.length == 1 && bulkActionToolbar.innerHTML == '') {

      let selectorMenuIconCreated: number = 0;
      let dropdownContent = document.createElement("div");

      for (let i = 0; i < this.actionConfig.length; i++) {
        let config = this.actionConfig[i];
        if (config.type === ActionTypes.entity) {
          if (config.isBulk === true) {

            if (config.positionType === ActionPosition.selector) {
              selectorMenuIconCreated++;

              if (selectorMenuIconCreated === 1) {
                bulkActionToolbar.appendChild(this.createActionSelectorDropdown(dropdownContent));
              }

              dropdownContent.appendChild(this.createDropdownMenuItems(config));

            } else if (config.positionType === ActionPosition.inplace) {
              bulkActionToolbar.appendChild(this.addBulkActions(config));
            }
          }
        }
      }
    }

    if (this.selectedEntities.length === 0) {
      let bulkActionToolbar = document.getElementsByClassName('bulk-actions-toolbar')[0] as HTMLElement;
      bulkActionToolbar.textContent = '';
      bulkActionToolbar.style.backgroundColor = 'white';

      this.enableActionToolbar.enable = true;
      this.enableBulkActionToolbar.enable = false;

      this.ref.detectChanges();
    }
  }

  /** Create actions in-selector dropdown menu.
   * @param dropdownContent dropdown content div HTMLElement
   * @return dropdown HTMLElement
   */
  createActionSelectorDropdown(dropdownContent) {

    let dropdown = document.createElement('div');
    dropdown.className = "dropdown";
    dropdown.style.position = 'relative';
    dropdown.style.display = 'inline-block';

    let tdDiv = document.createElement('div');
    tdDiv.className = "entity-event";
    tdDiv.style.position = "relative";
    tdDiv.style.marginLeft = "18px";

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

    dropdown.onclick = ($event) => {
      this.hideShowActionSelectorDropdown(dropdownContent);
    }

    return dropdown;
  }

  /** Create actions in-selector dropdown menu items.
   * @param config action config object
   * @return dropdownMenuItem HTMLElement
   */
  createDropdownMenuItems(config) {
    let dropdownMenuItem = document.createElement("a");
    dropdownMenuItem.className = 'mat-menu-item';
    dropdownMenuItem.innerText = config.iconName;
    dropdownMenuItem.style.display = 'block';
    dropdownMenuItem.style.padding = '1px 16px';

    dropdownMenuItem.onclick = ($event) => {
      $event.stopPropagation();
      this.actionDispatcher.dispatchAction(config.token, this.selectedEntities);
    }

    return dropdownMenuItem;
  }

  /** Hide and show actions in-selector dropdown menu.
   * @param dropdownContent dropdown content HTMLElement
   */
  hideShowActionSelectorDropdown(dropdownContent: HTMLElement) {

    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
    } else if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    }

  }

  /** Creates the rows and columns of the grid according to column defs and module data list */
  createGrid() {
    //component tag name
    const componentTagName = document.getElementsByTagName(this.gridComponentTag)[0] as HTMLElement;
    //access cdk-virtual-scroll-viewport from current component tag name
    this.cdkVirtualViewport = componentTagName.getElementsByClassName('cdk-virtual-scroll-content-wrapper')[0];
    this.cdkVirtualViewport.style.display = 'inline-table';

    // Create table heading
    this.createTableHeading();

    let tableDataCell = null;
    let tableRowData = null;

    for (; this.counter < this.gridDataList.length; this.counter++) {
      this.createRows(this.counter);

      this.createCheckbox(this.counter, this.gridDataList[this.counter]);

      for (let moduleListKey in this.gridDataList[this.counter]) {

        for (let columnConfigKey in this.columnConfig) {
          if (this.columnConfig[columnConfigKey].name === moduleListKey) {
            this.ref.detectChanges();
            var table = document.getElementsByClassName("table-row-data");

            var lastRowIndex = table.length;

            tableRowData = document.getElementsByClassName('table-row-data')[lastRowIndex - 1] as HTMLTableRowElement;


            tableDataCell = tableRowData.cells;

            let pos = this.columnConfig[columnConfigKey].position;

            let value = this.gridDataList[this.counter][moduleListKey];

            tableDataCell[0].style.display = 'none';

            tableDataCell[0].appendChild(this.checkbox);

            this.selectRowObject = Object.values(this.selectRow)
            if (this.selectRowObject[1]) {
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
  }

  /**
   * Adds entity action on grid rows, for non-bulk actions.
   * @param counter counter for the number of rows
   * @returns div element
   */
  private addEntityAction(counter: number) {

    let tdDiv = document.createElement('div');
    tdDiv.className = "entity-event";
    tdDiv.style.position = "relative";

    tdDiv.style.top = "2vh";
    for (let i = 0; i < this.actionConfig.length; i++) {
      let config = this.actionConfig[i];
      if (config.type === ActionTypes.entity) {
        if (config.isBulk === false) {
          tdDiv.style.visibility = 'hidden';

          let span = this.createActionSpanElement(config);
          tdDiv.appendChild(span);
          span.onclick = ($event) => {
            $event.stopPropagation()
            this.actionDispatcher.dispatchAction(config.token, this.gridDataList[counter]);
          }
        }
      }
    }

    return tdDiv;
  }

  /**
   * Adds bulk actions UI elements to bulk action toolbar and adds a action dispatcher on onclick event.
   * @param config Action Configuration array
   * @returns div element
   */
  private addBulkActions(config: ActionConfig) {

    let tdDiv = document.createElement('div');
    tdDiv.className = "entity-event";
    tdDiv.style.position = "relative";
    tdDiv.style.marginLeft = "18px";
    tdDiv.style.fontSize = "15px";

    let span = this.createActionSpanElement(config);

    tdDiv.appendChild(span);
    span.onclick = ($event) => {
      $event.stopPropagation();
      this.actionDispatcher.dispatchAction(config.token, this.selectedEntities);
    }

    return tdDiv;

  }

  /**
   * Creates span element for the UI action element.
   * @param config Action Configuration array
   * @returns span element
   */
  private createActionSpanElement(config: ActionConfig) {

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
    const spanClass = config.iconName;
    span.classList.add(spanClass.replace(/ /g, "_"));

    return span;
  }

  /** Fetches next set of grid records on scroll to bottom. */
  public getNextBatchOfPage() {

    if (this.pagingFlag === false) {
      if (this.virtualScroll.measureScrollOffset('bottom') === 0) {

        this.dataSource.getNextPage(++this.pageNumber, this.pageSize).then(
          result => {
            if (result != null) {
              for (let i = 0; i < result.length; i++) {
                this.gridDataList.push(result[i]);
              }
              console.log(this.gridDataList);
              this.createGrid();
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  /**
   * Forward the event to dispatch action with tokens and parameters.
   * @param token action token
   */
  executeCoreAction(token): void {
    this.actionDispatcher.dispatchAction(token);
  }

  /** Sets the host-app's action dispatcher instance passed through the ao-action directive var. */
  public set setActionDispatcher(value: any) {
    this.actionDispatcher = value;
  }

  /** Toggles from search placeholder to search bar/box by setting the display value
   * Also get the position and set to model popup.
   * Clear button enable.
   * @param enable enable boolean value
   */
  toggleToSearchBar(enable) {
    let element = document.querySelector(".filter-button") as HTMLElement;
    let x = element.getBoundingClientRect();
    this.enableSearchBar.enable = enable;
    this.clearFliter = true;
  }

  /**
   * Get the list of column name For suggestion
   * @param columnList column list
   */
  getColumnName(columnList) {
    for (let i = 0; i < columnList.length; i++) {
      if (columnList[i].name === "checkbox") {
        continue;
      } else {
        this.columnNameSuggestion.push(columnList[i].item);
      }
    }
  }

  /**
   * Open the Filter Input
   * @param value filter input value
   */
  openFilterInput(value) {
    console.log("Inside openFilterInput", value);
    this.filterName = value;
    var modal = document.getElementsByClassName('search-form-field')[0] as HTMLElement;
    modal.style.display = "block";
    let closeIcon = document.getElementsByClassName('close-icon')[0] as HTMLElement;
    closeIcon.style.display = 'contents';

    this.enableSearchBar.enable = false;
    document.querySelector(".search-label").textContent = value;
  }

  /**
   * Get the value Column Name and Filter search value
   * @param searchValue search value to be filtered
   */
  filterSubmit(searchValue) {
    console.log(searchValue, this.filterName);
    (document.getElementsByClassName("filter-info-container")[0] as HTMLElement).style.display = "contents";

    let searchInputElement = document.getElementsByClassName('search-form-field')[0] as HTMLElement;
    searchInputElement.style.display = 'none';

    let selectedValue: string = this.filterName + " : " + searchValue;
    this.displayFilterValue.push(selectedValue);
    this.getkeyFromValue(this.filterName);

    this.enableSearchBar.enable = false;
    this.filterSelectedValue[this.getKey] = searchValue;
    this.counter = 0;
    this.getFilterList(this.filterValue.token, this.filterSelectedValue);
  }

  /** Close the filter input field. */
  closeFilterInput() {
    let searchInputElement = document.getElementsByClassName('search-form-field')[0] as HTMLElement;
    searchInputElement.style.display = 'none';

    let closeIcon = document.getElementsByClassName('close-icon')[0] as HTMLElement;
    closeIcon.style.display = 'none';
  }

  /**
   * Get the key from value
   * @param value column value
   */
  getkeyFromValue(value) {
    for (let i = 0; i < this.columnConfig.length; i++) {
      let val = Object.values(this.columnConfig[i])
      if (val.includes(value)) {
        this.getKey = val[0];
        break;
      }
    }

  }

  /**
   * Clear the filter added and and show add filter button again.
   */
  clearAddedFilter() {
    this.counter = 0;
    this.filterSelectedValue = {};
    this.displayFilterValue = [];
    this.clearFliter = false;
    this.enableSearchPlaceholder.enable = true;
    this.enableSearchBar.enable = true;
    this.enableSearchBar.enable = false;
    (document.querySelector(".filter-info-container") as HTMLElement).style.display = "none";
    // this.closePopup();
    //Call the list again 
    this.clearTableData();
    this.pageNumber = 1;

    this.dataSource.getFirstPage(this.pageNumber, this.pageSize).then(
      result => {
        this.gridDataList = result;
        this.createGrid();
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * Get filter list call through actiondispatcher.
   * @param token action token
   * @param filterValue filter value
   */
  getFilterList(token, filterValue) {
    console.log(token, filterValue);
    this.actionDispatcher.dispatchAction(token, filterValue).then(
      result => {
        this.clearTableData();
        this.gridDataList = [];
        this.gridDataList = result;
        this.createGrid();
      }, error => {
        console.log(error);
      }
    );
  }

  /** Clears grid data. */
  clearTableData() {
    //component tag name
    const componentTagName = document.getElementsByTagName(this.gridComponentTag)[0] as HTMLElement;
    //access table-row(tr) from current component tag name
    let table = componentTagName.getElementsByTagName("tr");
    for (let i = 0; i < table.length;) {
      (table[i] as HTMLElement).remove();
    }
  }


  /**
   * Refresh the grid when needed
   */
  refresh(): void {
    this.gridDataList = [];
    this.counter = 0;
    this.pageNumber = 1;

    this.dataSource.getFirstPage(this.pageNumber, this.pageSize).then(
      result => {
        this.clearTableData();
        this.gridDataList = result;
        this.createGrid();
      },
      error => {
        console.log(error);
      }
    );
  }

  /** Create pagination UI actions in footer toolbar.
   * @param config paging config
   */
  public createPaginationActions(config): void {

    let cdkVirtualViewport = document.getElementById('example-viewport1') as HTMLElement;
    cdkVirtualViewport.style.height = "72vh";

    this.createPagingElements(config);
  }

  /** Creates paging type UI elements in footer toolbar.
   * @param config paging config
   */
  public createPagingElements(config): void {

    this.ref.detectChanges();
    let footerElement = document.getElementsByClassName('footer')[0];

    if (this.pagingConfig.indexOf(config) === 0) {
      this.createRowsPerPageWidget(footerElement);
    }

    let div = document.createElement('div');
    div.style.marginLeft = '20px';
    div.style.cursor = 'pointer';

    let span = document.createElement('span');
    span.className = 'material-icons';
    span.style.padding = '9px';
    span.style.borderRadius = '50%';
    span.innerText = config.iconName;
    if (config.tooltip != undefined) {
      span.setAttribute('title', config.tooltip);
    }

    span.onmouseover = ($event) => {
      $event.stopPropagation();
      span.style.backgroundColor = '#e0e0e0';
    }

    span.onmouseleave = ($event) => {
      $event.stopPropagation();

      span.style.backgroundColor = '';
    }

    span.onclick = ($event) => {
      $event.stopPropagation();

      this.actionDispatcher.dispatchAction(config.token, ++this.pageNumber, this.pageSize).then(
        result => {

          if (result != null) {
            this.clearTableData();
            this.counter = 0;
            this.gridDataList = [];
            this.gridDataList = result;
            console.log(this.gridDataList);
            this.createGrid();
          }
        }, error => {
          console.log(error);
        }
      );
    }

    div.appendChild(span);
    this.ref.detectChanges();
    footerElement.appendChild(div);
  }

  /**
   * Creates rows per page widget
   * @param footerElement footer HTMLElement
   */
  public createRowsPerPageWidget(footerElement): void {
    let pElement = document.createElement('p');
    pElement.innerText = "Rows per page";

    let selectElement = document.createElement('select');

    let optionElement = document.createElement('option');
    optionElement.innerText = this.pageSize.toString();

    selectElement.appendChild(optionElement);
    pElement.appendChild(selectElement);

    footerElement.appendChild(pElement);
  }

}