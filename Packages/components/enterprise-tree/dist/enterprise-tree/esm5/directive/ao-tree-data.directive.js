/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
var AoTreeDataDirective = /** @class */ (function () {
    function AoTreeDataDirective(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    AoTreeDataDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpTreeComp.setTreeData = this.treeData;
    };
    AoTreeDataDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-tree-data]'
                },] }
    ];
    /** @nocollapse */
    AoTreeDataDirective.ctorParameters = function () { return [
        { type: EnterpriseTreeComponent }
    ]; };
    AoTreeDataDirective.propDecorators = {
        treeData: [{ type: Input }]
    };
    return AoTreeDataDirective;
}());
export { AoTreeDataDirective };
if (false) {
    /** @type {?} */
    AoTreeDataDirective.prototype.treeData;
    /**
     * @type {?}
     * @private
     */
    AoTreeDataDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tdHJlZS1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9hby10cmVlLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUzRTtJQU9FLDZCQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBSSxDQUFDOzs7O0lBRWhFLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQUpRLHVCQUF1Qjs7OzJCQU83QixLQUFLOztJQVFSLDBCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksbUJBQW1COzs7SUFFOUIsdUNBQWtCOzs7OztJQUVOLDZDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZVRyZWVDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thby10cmVlLWRhdGFdJ1xufSlcbmV4cG9ydCBjbGFzcyBBb1RyZWVEYXRhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0cmVlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudGVycFRyZWVDb21wOiBFbnRlcnByaXNlVHJlZUNvbXBvbmVudCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbnRlcnBUcmVlQ29tcC5zZXRUcmVlRGF0YSA9IHRoaXMudHJlZURhdGE7XG4gIH1cblxufVxuIl19