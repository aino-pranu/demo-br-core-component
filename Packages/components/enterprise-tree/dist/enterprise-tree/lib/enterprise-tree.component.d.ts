import { OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TreeData } from '../action/TreeData';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicDatabase } from './dynamic-data-source.component';
import { ActionsAndToolsConfig } from '../config/ActionsAndToolsConfig';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatTreeFlattener } from '@angular/material';
import { TreeConfig } from '../config/TreeConfig';
/**
 * Node for to-do item
 */
export declare class SearchItemNode {
    children: SearchItemNode[];
    item: string;
    code: string;
    resultObject: Object;
}
/** Flat to-do item node with expandable and level information */
export declare class SearchItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    code: string;
    resultObject: Object;
}
export declare class EnterpriseTreeComponent implements OnInit, OnDestroy {
    private database;
    private treeConfiguration;
    private ref;
    treeConfig: any[];
    treeDataList: any[];
    treeData: TreeData;
    treeHeader: string;
    searchValue: string;
    searchNameSuggestion: any[];
    clearFliter: boolean;
    filterSelectedValue: {};
    displayFilterValue: any[];
    getKey: any;
    counter: number;
    pageNumber: number;
    pageSize: number;
    rootLevelNode: string;
    totalLevels: number;
    enableActionToolbar: ActionsAndToolsConfig;
    enableSearchToolBar: ActionsAndToolsConfig;
    enableSearchPlaceholder: ActionsAndToolsConfig;
    enableSearchBar: ActionsAndToolsConfig;
    enableInitialText: ActionsAndToolsConfig;
    enableNodeDetails: ActionsAndToolsConfig;
    enableLeafNodeDetails: ActionsAndToolsConfig;
    nodeFilteration: ActionsAndToolsConfig;
    enableAppToolButton: ActionsAndToolsConfig;
    openAppSameWindow: ActionsAndToolsConfig;
    openAppNewTab: ActionsAndToolsConfig;
    currentNodeDetailList: Map<any, any>;
    currentLeafNodeDetailList: any[];
    leafColumnConfig: any[];
    treeLeafDataList: any[];
    leafNodeTitle: string;
    leafNodeName: string;
    nodeCodeList: any[];
    leafContainerElement: any;
    row: HTMLTableRowElement;
    tdElement: HTMLTableCellElement;
    thElement: HTMLTableHeaderCellElement;
    private actionDispatcher;
    flatNodeMap: Map<SearchItemFlatNode, SearchItemNode>;
    /** Map from nested node to flattened node. This helps us to keep the same object for selection */
    nestedNodeMap: Map<SearchItemNode, SearchItemFlatNode>;
    /** A selected parent node to be inserted */
    selectedParent: SearchItemFlatNode | null;
    /** The new item's name */
    newItemName: string;
    treeControl: FlatTreeControl<any>;
    dataSource: any;
    treeFlattener: MatTreeFlattener<SearchItemNode, SearchItemFlatNode>;
    getLevel: (node: SearchItemFlatNode) => number;
    isExpandable: (node: SearchItemFlatNode) => boolean;
    getChildren: (node: SearchItemNode) => SearchItemNode[];
    hasChild: (_: number, _nodeData: SearchItemFlatNode) => boolean;
    hasNoContent: (_: number, _nodeData: SearchItemFlatNode) => boolean;
    transformer: (node: SearchItemNode, level: number) => SearchItemFlatNode;
    virtualScroll: CdkVirtualScrollViewport;
    constructor(database: DynamicDatabase, treeConfiguration: TreeConfig, ref: ChangeDetectorRef);
    /** Destroys/Detaches the change detection reference. */
    ngOnDestroy(): void;
    ngOnInit(): void;
    /** Method displays the node details(other than leaf node) for the selected tree node. */
    printDetails(nodeDetailObj: any): void;
    /** Sets the tree data */
    setTreeData: any;
    /** Set action dispatcher value @param value to Data Source. */
    setActionDispatcher: any;
    /** Sets tree configurations @param data to enterprise tree respective properties. */
    setTreeConfig: any;
    /**
     * This method sorts the tree configuration.
     * @param treeConfig JSON object of tree configuration.
     */
    sortTreeConfig(treeConfig: any): void;
    /**
     * Initialize the root level tree data to @rootLevelNodes & root level node name to @rootLevelNode */
    setTreeDataToTreeView(): void;
    /**
     * Append the next batch of tree data to @rootLevelNodes */
    getNextBatchOfPage(): void;
    /** Filters the tree data with input of text type. */
    filterNodes(filterText: string): void;
    /** Creates tree view Nodes for searched data result. */
    createSearchedNodes(result: any): void;
    /**
    * Builds the search data structure tree view. The `value` is the Json object, or a sub-tree of a Json object.
    * The return value is the list of `SearchItemNode`.
    */
    buildSearchResultTree(searchDataObj: any[], level: string): SearchItemNode[];
    /** Displays the node details in the Summary details UI section for the selected node. */
    displayCurrentSearchNodeDetails(node: any): void;
    /** Clears the previously rendered data in leaf detail grid. */
    clearLeafTableData(): void;
    /** Creates leaf node grid view. */
    createLeafNodeDetailGrid(): void;
    /**
     * Creates leaf node grid headings.
    */
    createLeafTableHeading(): void;
    /**
     * Creates leaf node rows for leaf node detail grid view.
     * @param value leaf data list element counter value.
     */
    createLeafRows(value: any): void;
    /** Styles the leaf grid view cells with CSS. */
    styleLeafCells(): void;
    /** Opens the node app in the same window. */
    openAppInSameWindow(token: any, nodeName: any): void;
    /** Opens the node app in the new tab. */
    openAppInNewTab(token: any, nodeName: any): void;
    /** Closes the open-app functionality's menu-dropdown. */
    closeDropdown(): void;
    /** Expands/Opens the open-app functionality's menu-dropdown. */
    showDropdown($event: any): void;
}
