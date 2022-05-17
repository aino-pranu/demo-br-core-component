/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActionsAndToolsConfig } from './ActionsAndToolsConfig';
import { Injectable } from '@angular/core';
import { LeafColumnConfig } from './LeafColumnConfig';
import * as i0 from "@angular/core";
export class TreeConfig {
    constructor() {
        this.actionsAndToolsArr = new Array();
        this.leafColumnConfigArr = new Array();
    }
    /**
     * @return {?}
     */
    get getTreeHeader() {
        return this.treeHeader;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setTreeHeader(value) {
        this.treeHeader = value;
    }
    /**
     * @return {?}
     */
    get getTotalLevels() {
        return this.totalLevels;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setTotalLevels(value) {
        this.totalLevels = value;
    }
    /**
     * @return {?}
     */
    get getRootLevelNode() {
        return this.rootLevelNode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setRootLevelNode(value) {
        this.rootLevelNode = value;
    }
    /**
     * @param {?} name
     * @param {?} enable
     * @param {?} token
     * @param {?=} level
     * @param {?=} type
     * @param {?=} isIcon
     * @param {?=} nodeName
     * @param {?=} isApp
     * @return {?}
     */
    addActionsAndToolConfig(name, enable, token, level, type, isIcon, nodeName, isApp) {
        this.actionsAndToolsArr.push(new ActionsAndToolsConfig(name, enable, token, level, type, isIcon, nodeName, isApp));
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
    get getLeafNodeTitle() {
        return this.leafNodeTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLeafNodeTitle(value) {
        this.leafNodeTitle = value;
    }
    /**
     * @return {?}
     */
    get getLeafNodeName() {
        return this.leafNodeName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLeafNodeName(value) {
        this.leafNodeName = value;
    }
    /**
     * @return {?}
     */
    get getLeafNodeColumnConfig() {
        return this.leafColumnConfigArr;
    }
    /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    addLeafNodeColumnConfig(name, item, position) {
        this.leafColumnConfigArr.push(new LeafColumnConfig(name, item, position));
    }
}
TreeConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TreeConfig.ctorParameters = () => [];
/** @nocollapse */ TreeConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TreeConfig_Factory() { return new TreeConfig(); }, token: TreeConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    TreeConfig.prototype.treeHeader;
    /** @type {?} */
    TreeConfig.prototype.totalLevels;
    /** @type {?} */
    TreeConfig.prototype.rootLevelNode;
    /** @type {?} */
    TreeConfig.prototype.actionsAndToolsArr;
    /** @type {?} */
    TreeConfig.prototype.pageSize;
    /** @type {?} */
    TreeConfig.prototype.leafNodeTitle;
    /** @type {?} */
    TreeConfig.prototype.leafNodeName;
    /** @type {?} */
    TreeConfig.prototype.leafColumnConfigArr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImNvbmZpZy9UcmVlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUt0RCxNQUFNLE9BQU8sVUFBVTtJQVduQjtRQU5PLHVCQUFrQixHQUE0QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBSTFELHdCQUFtQixHQUF1QixJQUFJLEtBQUssRUFBRSxDQUFDO0lBSTdELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBVyxjQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxLQUFjLEVBQUUsSUFBYSxFQUFFLE1BQWdCLEVBQUUsUUFBaUIsRUFBRSxLQUFlO1FBQzVKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDOzs7O0lBRUQsSUFBVyxXQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQUs7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELElBQVcsZ0JBQWdCLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBVyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELElBQVcsZUFBZSxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQVcsdUJBQXVCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBM0VKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7OztJQUdHLGdDQUEwQjs7SUFDMUIsaUNBQTJCOztJQUMzQixtQ0FBOEI7O0lBQzlCLHdDQUFpRTs7SUFDakUsOEJBQXdCOztJQUN4QixtQ0FBNkI7O0lBQzdCLGtDQUE0Qjs7SUFDNUIseUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uc0FuZFRvb2xzQ29uZmlnIH0gZnJvbSAnLi9BY3Rpb25zQW5kVG9vbHNDb25maWcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZkNvbHVtbkNvbmZpZyB9IGZyb20gJy4vTGVhZkNvbHVtbkNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbmZpZyB7XG5cbiAgICBwdWJsaWMgdHJlZUhlYWRlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0b3RhbExldmVsczogbnVtYmVyO1xuICAgIHB1YmxpYyByb290TGV2ZWxOb2RlIDogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3Rpb25zQW5kVG9vbHNBcnI6IEFjdGlvbnNBbmRUb29sc0NvbmZpZ1tdID0gbmV3IEFycmF5KCk7XG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gICAgcHVibGljIGxlYWZOb2RlVGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgbGVhZk5vZGVOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGxlYWZDb2x1bW5Db25maWdBcnI6IExlYWZDb2x1bW5Db25maWdbXSA9IG5ldyBBcnJheSgpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRUcmVlSGVhZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWVIZWFkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXRUcmVlSGVhZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50cmVlSGVhZGVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRUb3RhbExldmVscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbExldmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldFRvdGFsTGV2ZWxzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0Um9vdExldmVsTm9kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2V0Um9vdExldmVsTm9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm9vdExldmVsTm9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBY3Rpb25zQW5kVG9vbENvbmZpZyhuYW1lOiBzdHJpbmcsIGVuYWJsZTogYm9vbGVhbiwgdG9rZW46IHN0cmluZywgbGV2ZWw/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIGlzSWNvbj86IGJvb2xlYW4sIG5vZGVOYW1lPzogc3RyaW5nLCBpc0FwcD86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zQW5kVG9vbHNBcnIucHVzaChuZXcgQWN0aW9uc0FuZFRvb2xzQ29uZmlnKG5hbWUsIGVuYWJsZSwgdG9rZW4sIGxldmVsLCB0eXBlLCBpc0ljb24sIG5vZGVOYW1lLCBpc0FwcCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0UGFnZVNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VTaXplO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNldFBhZ2VTaXplKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldExlYWZOb2RlVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlYWZOb2RlVGl0bGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXRMZWFmTm9kZVRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubGVhZk5vZGVUaXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0TGVhZk5vZGVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWFmTm9kZU5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXRMZWFmTm9kZU5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sZWFmTm9kZU5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldExlYWZOb2RlQ29sdW1uQ29uZmlnKCk6IExlYWZDb2x1bW5Db25maWdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlYWZDb2x1bW5Db25maWdBcnI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExlYWZOb2RlQ29sdW1uQ29uZmlnKG5hbWU6IHN0cmluZywgaXRlbTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGVhZkNvbHVtbkNvbmZpZ0Fyci5wdXNoKG5ldyBMZWFmQ29sdW1uQ29uZmlnKG5hbWUsIGl0ZW0sIHBvc2l0aW9uKSk7XG4gICAgfVxufSJdfQ==