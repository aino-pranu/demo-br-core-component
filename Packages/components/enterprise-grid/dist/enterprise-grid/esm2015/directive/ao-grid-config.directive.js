/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from "@angular/core";
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
export class AoGridConfigDirective {
    /**
     * @param {?} enterpGridComp
     */
    constructor(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.gridConfig);
        this.enterpGridComp.setGridConfig = this.gridConfig;
    }
}
AoGridConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-grid-config]'
            },] }
];
/** @nocollapse */
AoGridConfigDirective.ctorParameters = () => [
    { type: EnterpriseGridComponent }
];
AoGridConfigDirective.propDecorators = {
    gridConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AoGridConfigDirective.prototype.gridConfig;
    /**
     * @type {?}
     * @private
     */
    AoGridConfigDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tZ3JpZC1jb25maWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW50ZXJwcmlzZS1ncmlkLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlL2FvLWdyaWQtY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLM0UsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUk5QixZQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBSSxDQUFDOzs7O0lBRWhFLFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hELENBQUM7OztZQVpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBSlEsdUJBQXVCOzs7eUJBTzNCLEtBQUs7Ozs7SUFBTiwyQ0FBb0I7Ozs7O0lBRVIsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRW50ZXJwcmlzZUdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vbGliL2VudGVycHJpc2UtZ3JpZC5jb21wb25lbnRcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYW8tZ3JpZC1jb25maWddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW9HcmlkQ29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBncmlkQ29uZmlnO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudGVycEdyaWRDb21wOiBFbnRlcnByaXNlR3JpZENvbXBvbmVudCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmVudGVycEdyaWRDb21wLnNldEdyaWRDb25maWcgPSB0aGlzLmdyaWRDb25maWc7XHJcbiAgICB9XHJcbn0iXX0=