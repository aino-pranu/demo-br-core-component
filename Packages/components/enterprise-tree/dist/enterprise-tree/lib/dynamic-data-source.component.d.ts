import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SearchItemNode } from './enterprise-tree.component';
/** Flat node with expandable and level information */
export declare class DynamicFlatNode {
    item?: string;
    level?: number;
    resultObject?: Object;
    expandable?: boolean;
    isLoading?: boolean;
    code?: string;
    children?: DynamicFlatNode[];
    constructor(item?: string, level?: number, resultObject?: Object, expandable?: boolean, isLoading?: boolean, code?: string, children?: DynamicFlatNode[]);
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export declare class DynamicDatabase {
    dataChange: BehaviorSubject<SearchItemNode[]>;
    readonly data: SearchItemNode[];
    dataMap: Map<string, string[]>;
    nodeLevelMethodConfigurations: Map<number, string>;
    nodePropertyNames: Map<number, string>;
    currentLeafNodeNames: any[];
    filteredMode: boolean;
    pagingMode: boolean;
    rootLevelName: any;
    rootLevelNodes: any[];
    currentSelectedNode: DynamicFlatNode;
    currentSelectedNodeSource: BehaviorSubject<DynamicFlatNode>;
    currentSelectedNodeValue: Observable<DynamicFlatNode>;
    readonly getCurrentSelectedNode: DynamicFlatNode;
    setCurrentSelectedNode: any;
    readonly getRootLevelNodes: any[];
    setRootLevelNodes: any;
    currentSelectedLeafNodeSource: BehaviorSubject<any>;
    currentSelectedLeafNodeValue: Observable<any>;
    readonly getCurrentSelectedLeafNode: any[];
    setCurrentSelectedLeafNode: any;
    /** Initialize data for root level nodes */
    initialData(): DynamicFlatNode[];
    getChildren(node: string): string[] | undefined;
    isExpandable(node: string): boolean;
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export declare class DynamicDataSource implements OnInit, OnDestroy {
    private treeControl;
    private database;
    private changeDetectorRef;
    dataChange: BehaviorSubject<DynamicFlatNode[]>;
    operationList: any;
    currentService: string;
    private actionDispatcher;
    data: DynamicFlatNode[];
    setActionDispatcher: any;
    constructor(treeControl: FlatTreeControl<DynamicFlatNode>, database: DynamicDatabase, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]>;
    disconnect(collectionViewer: CollectionViewer): void;
    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>): void;
    /**
     * Toggle the node for the selected node, and make server call to get it's children.
     */
    toggleNode(node: DynamicFlatNode, expand: boolean): void;
    /** Populate parent nodes with their children*/
    populateNodeList(nodeList: any, node: any, expand: any): void;
    /** Expand child nodes */
    expandChildNodes(node: DynamicFlatNode, expand: boolean, nodeList: any, childNodes: any): void;
}
