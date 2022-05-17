import { Injectable } from "@angular/core";

/**
 * Grid Configuration class for configuring gridHeader, gridComponentTag, pageSize and totalRecords.
 */
@Injectable({
    providedIn: 'root'
})
export class GridConfig {

    // grid header name
    private gridHeader: string;

    // grid component tag
    private gridComponentTag: string;

    // records page size
    private pageSize: number;

    // total number of records
    private totalRecords: number;

    constructor() { }

    public get getGridHeader(): string {
        return this.gridHeader;
    }
    public set setGridHeader(value: string) {
        this.gridHeader = value;
    }

    public get getGridComponentTag(): string {
        return this.gridComponentTag;
    }
    public set setGridComponentTag(value: string) {
        this.gridComponentTag = value;
    }

    public get getPageSize() {
        return this.pageSize;
    }
    public set setPageSize(value) {
        this.pageSize = value;
    }

    public get getTotalRecords() {
        return this.totalRecords;
    }
    public set setTotalRecords(value) {
        this.totalRecords = value;
    }
}