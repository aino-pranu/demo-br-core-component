import { ColumnConfig } from "./ColumnConfig";
export declare class GridConfig {
    private gridHeader;
    private pageSize;
    private totalRecords;
    private columnConfigArr;
    private actionConfigArr;
    private featureConfigArr;
    private pagingConfigArr;
    constructor();
    readonly getGridHeader: string;
    setGridHeader: string;
    readonly getPageSize: number;
    setPageSize: any;
    readonly getTotalRecords: number;
    setTotalRecords: any;
    readonly getColumnConfigArr: ColumnConfig[];
    addColumnConfig(name: string, item: string, position: number): void;
    actionConfig(name: string, enable: boolean, token: string, isBulk: boolean, type?: string, positionType?: string, isIcon?: boolean, iconName?: string, tooltip?: string): void;
    featureConfig(name: string, enable: boolean): void;
    pagingConfig(name: string, enable: boolean, token: string, pagingType: string, icon?: boolean, iconName?: string, tooltip?: string): void;
}
