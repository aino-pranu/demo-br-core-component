/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActionsAndToolsConfig } from './ActionsAndToolsConfig';
import { Injectable } from '@angular/core';
import { LeafColumnConfig } from './LeafColumnConfig';
import * as i0 from "@angular/core";
var TreeConfig = /** @class */ (function () {
    function TreeConfig() {
        this.actionsAndToolsArr = new Array();
        this.leafColumnConfigArr = new Array();
    }
    Object.defineProperty(TreeConfig.prototype, "getTreeHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this.treeHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setTreeHeader", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.treeHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "getTotalLevels", {
        get: /**
         * @return {?}
         */
        function () {
            return this.totalLevels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setTotalLevels", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.totalLevels = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "getRootLevelNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rootLevelNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setRootLevelNode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rootLevelNode = value;
        },
        enumerable: true,
        configurable: true
    });
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
    TreeConfig.prototype.addActionsAndToolConfig = /**
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
    function (name, enable, token, level, type, isIcon, nodeName, isApp) {
        this.actionsAndToolsArr.push(new ActionsAndToolsConfig(name, enable, token, level, type, isIcon, nodeName, isApp));
    };
    Object.defineProperty(TreeConfig.prototype, "getPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setPageSize", {
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
    Object.defineProperty(TreeConfig.prototype, "getLeafNodeTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.leafNodeTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setLeafNodeTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.leafNodeTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "getLeafNodeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.leafNodeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "setLeafNodeName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.leafNodeName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeConfig.prototype, "getLeafNodeColumnConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.leafColumnConfigArr;
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
    TreeConfig.prototype.addLeafNodeColumnConfig = /**
     * @param {?} name
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    function (name, item, position) {
        this.leafColumnConfigArr.push(new LeafColumnConfig(name, item, position));
    };
    TreeConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TreeConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ TreeConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TreeConfig_Factory() { return new TreeConfig(); }, token: TreeConfig, providedIn: "root" });
    return TreeConfig;
}());
export { TreeConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImNvbmZpZy9UcmVlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV0RDtJQWNJO1FBTk8sdUJBQWtCLEdBQTRCLElBQUksS0FBSyxFQUFFLENBQUM7UUFJMUQsd0JBQW1CLEdBQXVCLElBQUksS0FBSyxFQUFFLENBQUM7SUFJN0QsQ0FBQztJQUVELHNCQUFXLHFDQUFhOzs7O1FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcscUNBQWE7Ozs7O1FBQXhCLFVBQXlCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQ0FBYzs7OztRQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFjOzs7OztRQUF6QixVQUEwQixLQUFhO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0NBQWdCOzs7O1FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0NBQWdCOzs7OztRQUEzQixVQUE0QixLQUFhO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7Ozs7Ozs7Ozs7SUFFTSw0Q0FBdUI7Ozs7Ozs7Ozs7O0lBQTlCLFVBQStCLElBQVksRUFBRSxNQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWMsRUFBRSxJQUFhLEVBQUUsTUFBZ0IsRUFBRSxRQUFpQixFQUFFLEtBQWU7UUFDNUosSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUFFRCxzQkFBVyxtQ0FBVzs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLG1DQUFXOzs7OztRQUF0QixVQUF1QixLQUFLO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0NBQWdCOzs7O1FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0NBQWdCOzs7OztRQUEzQixVQUE0QixLQUFLO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUNBQWU7Ozs7UUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBZTs7Ozs7UUFBMUIsVUFBMkIsS0FBSztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtDQUF1Qjs7OztRQUFsQztZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBOzs7Ozs7O0lBRU0sNENBQXVCOzs7Ozs7SUFBOUIsVUFBK0IsSUFBWSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUN2RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQTNFSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7OztxQkFORDtDQWdGQyxBQTVFRCxJQTRFQztTQXpFWSxVQUFVOzs7SUFFbkIsZ0NBQTBCOztJQUMxQixpQ0FBMkI7O0lBQzNCLG1DQUE4Qjs7SUFDOUIsd0NBQWlFOztJQUNqRSw4QkFBd0I7O0lBQ3hCLG1DQUE2Qjs7SUFDN0Isa0NBQTRCOztJQUM1Qix5Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zQW5kVG9vbHNDb25maWcgfSBmcm9tICcuL0FjdGlvbnNBbmRUb29sc0NvbmZpZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFmQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi9MZWFmQ29sdW1uQ29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29uZmlnIHtcblxuICAgIHB1YmxpYyB0cmVlSGVhZGVyOiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsTGV2ZWxzOiBudW1iZXI7XG4gICAgcHVibGljIHJvb3RMZXZlbE5vZGUgOiBzdHJpbmc7XG4gICAgcHVibGljIGFjdGlvbnNBbmRUb29sc0FycjogQWN0aW9uc0FuZFRvb2xzQ29uZmlnW10gPSBuZXcgQXJyYXkoKTtcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgbGVhZk5vZGVUaXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsZWFmTm9kZU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGVhZkNvbHVtbkNvbmZpZ0FycjogTGVhZkNvbHVtbkNvbmZpZ1tdID0gbmV3IEFycmF5KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldFRyZWVIZWFkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZUhlYWRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldFRyZWVIZWFkZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRyZWVIZWFkZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldFRvdGFsTGV2ZWxzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsTGV2ZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2V0VG90YWxMZXZlbHModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRSb290TGV2ZWxOb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RMZXZlbE5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZXRSb290TGV2ZWxOb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb290TGV2ZWxOb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEFjdGlvbnNBbmRUb29sQ29uZmlnKG5hbWU6IHN0cmluZywgZW5hYmxlOiBib29sZWFuLCB0b2tlbjogc3RyaW5nLCBsZXZlbD86IG51bWJlciwgdHlwZT86IHN0cmluZywgaXNJY29uPzogYm9vbGVhbiwgbm9kZU5hbWU/OiBzdHJpbmcsIGlzQXBwPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFjdGlvbnNBbmRUb29sc0Fyci5wdXNoKG5ldyBBY3Rpb25zQW5kVG9vbHNDb25maWcobmFtZSwgZW5hYmxlLCB0b2tlbiwgbGV2ZWwsIHR5cGUsIGlzSWNvbiwgbm9kZU5hbWUsIGlzQXBwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRQYWdlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVNpemU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2V0UGFnZVNpemUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0TGVhZk5vZGVUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVhZk5vZGVUaXRsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldExlYWZOb2RlVGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sZWFmTm9kZVRpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnZXRMZWFmTm9kZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlYWZOb2RlTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNldExlYWZOb2RlTmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxlYWZOb2RlTmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0TGVhZk5vZGVDb2x1bW5Db25maWcoKTogTGVhZkNvbHVtbkNvbmZpZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVhZkNvbHVtbkNvbmZpZ0FycjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGVhZk5vZGVDb2x1bW5Db25maWcobmFtZTogc3RyaW5nLCBpdGVtOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sZWFmQ29sdW1uQ29uZmlnQXJyLnB1c2gobmV3IExlYWZDb2x1bW5Db25maWcobmFtZSwgaXRlbSwgcG9zaXRpb24pKTtcbiAgICB9XG59Il19