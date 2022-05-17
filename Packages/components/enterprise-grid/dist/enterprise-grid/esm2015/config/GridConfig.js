/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnConfig } from "./ColumnConfig";
import { Injectable } from "@angular/core";
import { FeatureConfig } from './FeatureConfig';
import { ActionConfig } from "./ActionConfig";
import { PagingConfig } from './PagingConfig';
import * as i0 from "@angular/core";
export class GridConfig {
    constructor() {
        this.actionConfigArr = new Array();
        this.featureConfigArr = new Array();
        this.pagingConfigArr = new Array();
        this.columnConfigArr = new Array();
        this.columnConfigArr.push(new ColumnConfig("checkbox", "", 0));
    }
    /**
     * @return {?}
     */
    get getGridHeader() {
        return this.gridHeader;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setGridHeader(value) {
        this.gridHeader = value;
    }
    /**
     * @return {?}
     */
    get getPageSize() {
        return this.pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setPageSize(value) {
        this.pageSize = value;
    }
    /**
     * @return {?}
     */
    get getTotalRecords() {
        return this.totalRecords;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setTotalRecords(value) {
        this.pageSize = value;
    }
    /**
     * @return {?}
     */
    get getColumnConfigArr() {
        return this.columnConfigArr;
    }
    /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    addColumnConfig(name, item, position) {
        if (position <= 0) {
            throw "The Column position must start from 1";
        }
        this.columnConfigArr.push(new ColumnConfig(name, item, position));
    }
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
    actionConfig(name, enable, token, isBulk, type, positionType, isIcon, iconName, tooltip) {
        this.actionConfigArr.push(new ActionConfig(name, enable, token, isBulk, type, positionType, isIcon, iconName, tooltip));
    }
    /**
     * @param {?} name
     * @param {?} enable
     * @return {?}
     */
    featureConfig(name, enable) {
        this.featureConfigArr.push(new FeatureConfig(name, enable));
    }
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
    pagingConfig(name, enable, token, pagingType, icon, iconName, tooltip) {
        this.pagingConfigArr.push(new PagingConfig(name, enable, token, pagingType, icon, iconName, tooltip));
    }
}
GridConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GridConfig.ctorParameters = () => [];
/** @nocollapse */ GridConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GridConfig_Factory() { return new GridConfig(); }, token: GridConfig, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.gridHeader;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.totalRecords;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.columnConfigArr;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.actionConfigArr;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.featureConfigArr;
    /**
     * @type {?}
     * @private
     */
    GridConfig.prototype.pagingConfigArr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbmZpZy9HcmlkQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLOUMsTUFBTSxPQUFPLFVBQVU7SUFVbkI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBSztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBVyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQVcsa0JBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBRU0sZUFBZSxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsUUFBZ0I7UUFDL0QsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2YsTUFBTSx1Q0FBdUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7Ozs7Ozs7O0lBRU0sWUFBWSxDQUFDLElBQVksRUFBRSxNQUFlLEVBQUUsS0FBYSxFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsWUFBcUIsRUFBRSxNQUFnQixFQUFFLFFBQWlCLEVBQUUsT0FBZ0I7UUFDMUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVILENBQUM7Ozs7OztJQUVNLGFBQWEsQ0FBQyxJQUFZLEVBQUUsTUFBZTtRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7Ozs7O0lBRU0sWUFBWSxDQUFDLElBQVksRUFBRSxNQUFlLEVBQUUsS0FBYSxFQUFFLFVBQWtCLEVBQUUsSUFBYyxFQUFFLFFBQWlCLEVBQUUsT0FBZ0I7UUFDckksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7WUEvREosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7Ozs7O0lBR0csZ0NBQTJCOzs7OztJQUMzQiw4QkFBd0I7Ozs7O0lBQ3hCLGtDQUE2Qjs7Ozs7SUFDN0IscUNBQXdDOzs7OztJQUN4QyxxQ0FBd0M7Ozs7O0lBQ3hDLHNDQUEwQzs7Ozs7SUFDMUMscUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSBcIi4vQ29sdW1uQ29uZmlnXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZlYXR1cmVDb25maWcgfSBmcm9tICcuL0ZlYXR1cmVDb25maWcnO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQWN0aW9uQ29uZmlnXCI7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuL1BhZ2luZ0NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZyB7XG5cbiAgICBwcml2YXRlIGdyaWRIZWFkZXI6IHN0cmluZztcbiAgICBwcml2YXRlIHBhZ2VTaXplOm51bWJlcjtcbiAgICBwcml2YXRlIHRvdGFsUmVjb3JkczogbnVtYmVyO1xuICAgIHByaXZhdGUgY29sdW1uQ29uZmlnQXJyOiBDb2x1bW5Db25maWdbXTtcbiAgICBwcml2YXRlIGFjdGlvbkNvbmZpZ0FycjogQWN0aW9uQ29uZmlnW107XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnQXJyOiBGZWF0dXJlQ29uZmlnW107XG4gICAgcHJpdmF0ZSBwYWdpbmdDb25maWdBcnI6IFBhZ2luZ0NvbmZpZ1tdO1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQ29uZmlnQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ0FyciA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnBhZ2luZ0NvbmZpZ0FyciA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZ0FyciA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZ0Fyci5wdXNoKG5ldyBDb2x1bW5Db25maWcoXCJjaGVja2JveFwiLCBcIlwiLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRHcmlkSGVhZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRIZWFkZXI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2V0R3JpZEhlYWRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JpZEhlYWRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0UGFnZVNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VTaXplO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNldFBhZ2VTaXplKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldFRvdGFsUmVjb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxSZWNvcmRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNldFRvdGFsUmVjb3Jkcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRDb2x1bW5Db25maWdBcnIoKTogQ29sdW1uQ29uZmlnW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWdBcnI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENvbHVtbkNvbmZpZyhuYW1lOiBzdHJpbmcsIGl0ZW06IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGUgQ29sdW1uIHBvc2l0aW9uIG11c3Qgc3RhcnQgZnJvbSAxXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWdBcnIucHVzaChuZXcgQ29sdW1uQ29uZmlnKG5hbWUsIGl0ZW0sIHBvc2l0aW9uKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdGlvbkNvbmZpZyhuYW1lOiBzdHJpbmcsIGVuYWJsZTogYm9vbGVhbiwgdG9rZW46IHN0cmluZywgaXNCdWxrOiBib29sZWFuLCB0eXBlPzogc3RyaW5nLCBwb3NpdGlvblR5cGU/OiBzdHJpbmcsIGlzSWNvbj86IGJvb2xlYW4sIGljb25OYW1lPzogc3RyaW5nLCB0b29sdGlwPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQ29uZmlnQXJyLnB1c2gobmV3IEFjdGlvbkNvbmZpZyhuYW1lLCBlbmFibGUsIHRva2VuLCBpc0J1bGssIHR5cGUsIHBvc2l0aW9uVHlwZSwgaXNJY29uLCBpY29uTmFtZSwgdG9vbHRpcCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmZWF0dXJlQ29uZmlnKG5hbWU6IHN0cmluZywgZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ0Fyci5wdXNoKG5ldyBGZWF0dXJlQ29uZmlnKG5hbWUsIGVuYWJsZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWdpbmdDb25maWcobmFtZTogc3RyaW5nLCBlbmFibGU6IGJvb2xlYW4sIHRva2VuOiBzdHJpbmcsIHBhZ2luZ1R5cGU6IHN0cmluZywgaWNvbj86IGJvb2xlYW4sIGljb25OYW1lPzogc3RyaW5nLCB0b29sdGlwPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFnaW5nQ29uZmlnQXJyLnB1c2gobmV3IFBhZ2luZ0NvbmZpZyhuYW1lLCBlbmFibGUsIHRva2VuLCBwYWdpbmdUeXBlLCBpY29uLCBpY29uTmFtZSwgdG9vbHRpcCkpO1xuICAgIH1cbn0iXX0=