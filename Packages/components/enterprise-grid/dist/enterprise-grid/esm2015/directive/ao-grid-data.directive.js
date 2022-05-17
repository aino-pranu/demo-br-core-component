/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseGridComponent } from '../lib/enterprise-grid.component';
export class AoGridDataDirective {
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
        this.enterpGridComp.setGridData = this.gridData;
        // console.log("Data Directive");
    }
}
AoGridDataDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-grid-data]'
            },] }
];
/** @nocollapse */
AoGridDataDirective.ctorParameters = () => [
    { type: EnterpriseGridComponent }
];
AoGridDataDirective.propDecorators = {
    gridData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AoGridDataDirective.prototype.gridData;
    /**
     * @type {?}
     * @private
     */
    AoGridDataDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tZ3JpZC1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9hby1ncmlkLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFNM0UsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBSSxDQUFDOzs7O0lBRWhFLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELGlDQUFpQztJQUNuQyxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUxRLHVCQUF1Qjs7O3VCQVE3QixLQUFLOzs7O0lBQU4sdUNBQTJCOzs7OztJQUVmLDZDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudGVycHJpc2VHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2VudGVycHJpc2UtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmlkRGF0YSB9IGZyb20gJy4uL2FjdGlvbi9HcmlkRGF0YSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thby1ncmlkLWRhdGFdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW9HcmlkRGF0YURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZERhdGE6R3JpZERhdGE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50ZXJwR3JpZENvbXA6IEVudGVycHJpc2VHcmlkQ29tcG9uZW50KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVudGVycEdyaWRDb21wLnNldEdyaWREYXRhID0gdGhpcy5ncmlkRGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBEaXJlY3RpdmVcIik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=