/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from "@angular/core";
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
var AoGridConfigDirective = /** @class */ (function () {
    function AoGridConfigDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoGridConfigDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.gridConfig);
        this.enterpGridComp.setGridConfig = this.gridConfig;
    };
    AoGridConfigDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-grid-config]'
                },] }
    ];
    /** @nocollapse */
    AoGridConfigDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
    ]; };
    AoGridConfigDirective.propDecorators = {
        gridConfig: [{ type: Input }]
    };
    return AoGridConfigDirective;
}());
export { AoGridConfigDirective };
if (false) {
    /** @type {?} */
    AoGridConfigDirective.prototype.gridConfig;
    /**
     * @type {?}
     * @private
     */
    AoGridConfigDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tZ3JpZC1jb25maWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW50ZXJwcmlzZS1ncmlkLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlL2FvLWdyaWQtY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFM0U7SUFPSSwrQkFBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUksQ0FBQzs7OztJQUVoRSx3Q0FBUTs7O0lBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hELENBQUM7O2dCQVpKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFKUSx1QkFBdUI7Ozs2QkFPM0IsS0FBSzs7SUFRViw0QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLHFCQUFxQjs7O0lBRTlCLDJDQUFvQjs7Ozs7SUFFUiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFbnRlcnByaXNlR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi9saWIvZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1thby1ncmlkLWNvbmZpZ10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBb0dyaWRDb25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGdyaWRDb25maWc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50ZXJwR3JpZENvbXA6IEVudGVycHJpc2VHcmlkQ29tcG9uZW50KSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRDb25maWcpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJwR3JpZENvbXAuc2V0R3JpZENvbmZpZyA9IHRoaXMuZ3JpZENvbmZpZztcclxuICAgIH1cclxufSJdfQ==