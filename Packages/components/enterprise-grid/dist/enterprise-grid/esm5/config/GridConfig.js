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
    /** @nocollapse */ GridConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GridConfig_Factory() { return new GridConfig(); }, token: GridConfig, providedIn: "root" });
    return GridConfig;
}());
export { GridConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbmZpZy9HcmlkQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFOUM7SUFhSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0JBQVcscUNBQWE7Ozs7UUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxxQ0FBYTs7Ozs7UUFBeEIsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1DQUFXOzs7O1FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsbUNBQVc7Ozs7O1FBQXRCLFVBQXVCLEtBQUs7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBZTs7OztRQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLHVDQUFlOzs7OztRQUExQixVQUEyQixLQUFLO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQWtCOzs7O1FBQTdCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBOzs7Ozs7O0lBRU0sb0NBQWU7Ozs7OztJQUF0QixVQUF1QixJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQy9ELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLE1BQU0sdUNBQXVDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQUVNLGlDQUFZOzs7Ozs7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBWSxFQUFFLE1BQWUsRUFBRSxLQUFhLEVBQUUsTUFBZSxFQUFFLElBQWEsRUFBRSxZQUFxQixFQUFFLE1BQWdCLEVBQUUsUUFBaUIsRUFBRSxPQUFnQjtRQUMxSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUgsQ0FBQzs7Ozs7O0lBRU0sa0NBQWE7Ozs7O0lBQXBCLFVBQXFCLElBQVksRUFBRSxNQUFlO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7Ozs7SUFFTSxpQ0FBWTs7Ozs7Ozs7OztJQUFuQixVQUFvQixJQUFZLEVBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLElBQWMsRUFBRSxRQUFpQixFQUFFLE9BQWdCO1FBQ3JJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQzs7Z0JBL0RKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7O3FCQVJEO0NBc0VDLEFBaEVELElBZ0VDO1NBN0RZLFVBQVU7Ozs7OztJQUVuQixnQ0FBMkI7Ozs7O0lBQzNCLDhCQUF3Qjs7Ozs7SUFDeEIsa0NBQTZCOzs7OztJQUM3QixxQ0FBd0M7Ozs7O0lBQ3hDLHFDQUF3Qzs7Ozs7SUFDeEMsc0NBQTBDOzs7OztJQUMxQyxxQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tIFwiLi9Db2x1bW5Db25maWdcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZyB9IGZyb20gJy4vRmVhdHVyZUNvbmZpZyc7XG5pbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi9BY3Rpb25Db25maWdcIjtcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4vUGFnaW5nQ29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlnIHtcblxuICAgIHByaXZhdGUgZ3JpZEhlYWRlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFnZVNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgdG90YWxSZWNvcmRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjb2x1bW5Db25maWdBcnI6IENvbHVtbkNvbmZpZ1tdO1xuICAgIHByaXZhdGUgYWN0aW9uQ29uZmlnQXJyOiBBY3Rpb25Db25maWdbXTtcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdBcnI6IEZlYXR1cmVDb25maWdbXTtcbiAgICBwcml2YXRlIHBhZ2luZ0NvbmZpZ0FycjogUGFnaW5nQ29uZmlnW107XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25Db25maWdBcnIgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMucGFnaW5nQ29uZmlnQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnQXJyLnB1c2gobmV3IENvbHVtbkNvbmZpZyhcImNoZWNrYm94XCIsIFwiXCIsIDApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldEdyaWRIZWFkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZEhlYWRlcjtcbiAgICB9XG4gICAgcHVibGljIHNldCBzZXRHcmlkSGVhZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ncmlkSGVhZGVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRQYWdlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVNpemU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2V0UGFnZVNpemUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0VG90YWxSZWNvcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbFJlY29yZHM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2V0VG90YWxSZWNvcmRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldENvbHVtbkNvbmZpZ0FycigpOiBDb2x1bW5Db25maWdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbkNvbmZpZ0FycjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ29sdW1uQ29uZmlnKG5hbWU6IHN0cmluZywgaXRlbTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlRoZSBDb2x1bW4gcG9zaXRpb24gbXVzdCBzdGFydCBmcm9tIDFcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZ0Fyci5wdXNoKG5ldyBDb2x1bW5Db25maWcobmFtZSwgaXRlbSwgcG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0aW9uQ29uZmlnKG5hbWU6IHN0cmluZywgZW5hYmxlOiBib29sZWFuLCB0b2tlbjogc3RyaW5nLCBpc0J1bGs6IGJvb2xlYW4sIHR5cGU/OiBzdHJpbmcsIHBvc2l0aW9uVHlwZT86IHN0cmluZywgaXNJY29uPzogYm9vbGVhbiwgaWNvbk5hbWU/OiBzdHJpbmcsIHRvb2x0aXA/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25Db25maWdBcnIucHVzaChuZXcgQWN0aW9uQ29uZmlnKG5hbWUsIGVuYWJsZSwgdG9rZW4sIGlzQnVsaywgdHlwZSwgcG9zaXRpb25UeXBlLCBpc0ljb24sIGljb25OYW1lLCB0b29sdGlwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZlYXR1cmVDb25maWcobmFtZTogc3RyaW5nLCBlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnQXJyLnB1c2gobmV3IEZlYXR1cmVDb25maWcobmFtZSwgZW5hYmxlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZ2luZ0NvbmZpZyhuYW1lOiBzdHJpbmcsIGVuYWJsZTogYm9vbGVhbiwgdG9rZW46IHN0cmluZywgcGFnaW5nVHlwZTogc3RyaW5nLCBpY29uPzogYm9vbGVhbiwgaWNvbk5hbWU/OiBzdHJpbmcsIHRvb2x0aXA/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYWdpbmdDb25maWdBcnIucHVzaChuZXcgUGFnaW5nQ29uZmlnKG5hbWUsIGVuYWJsZSwgdG9rZW4sIHBhZ2luZ1R5cGUsIGljb24sIGljb25OYW1lLCB0b29sdGlwKSk7XG4gICAgfVxufSJdfQ==