import { ActionsAndToolsConfig } from './ActionsAndToolsConfig';
import { LeafColumnConfig } from './LeafColumnConfig';
export declare class TreeConfig {
    treeHeader: string;
    totalLevels: number;
    rootLevelNode: string;
    actionsAndToolsArr: ActionsAndToolsConfig[];
    pageSize: number;
    leafNodeTitle: string;
    leafNodeName: string;
    leafColumnConfigArr: LeafColumnConfig[];
    constructor();
    readonly getTreeHeader: string;
    setTreeHeader: string;
    readonly getTotalLevels: number;
    setTotalLevels: number;
    readonly getRootLevelNode: string;
    setRootLevelNode: string;
    addActionsAndToolConfig(name: string, enable: boolean, token: string, level?: number, type?: string, isIcon?: boolean, nodeName?: string, isApp?: boolean): void;
    readonly getPageSize: number;
    setPageSize: any;
    readonly getLeafNodeTitle: string;
    setLeafNodeTitle: any;
    readonly getLeafNodeName: string;
    setLeafNodeName: any;
    readonly getLeafNodeColumnConfig: LeafColumnConfig[];
    addLeafNodeColumnConfig(name: string, item: string, position: number): void;
}
