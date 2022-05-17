/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseGridComponent } from '../lib/enterprise-grid.component';
var AoGridDataDirective = /** @class */ (function () {
    function AoGridDataDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoGridDataDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpGridComp.setGridData = this.gridData;
        // console.log("Data Directive");
    };
    AoGridDataDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-grid-data]'
                },] }
    ];
    /** @nocollapse */
    AoGridDataDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
    ]; };
    AoGridDataDirective.propDecorators = {
        gridData: [{ type: Input }]
    };
    return AoGridDataDirective;
}());
export { AoGridDataDirective };
if (false) {
    /** @type {?} */
    AoGridDataDirective.prototype.gridData;
    /**
     * @type {?}
     * @private
     */
    AoGridDataDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tZ3JpZC1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9hby1ncmlkLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHM0U7SUFPRSw2QkFBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUksQ0FBQzs7OztJQUVoRSxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELGlDQUFpQztJQUNuQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTFEsdUJBQXVCOzs7MkJBUTdCLEtBQUs7O0lBU1IsMEJBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxtQkFBbUI7OztJQUU5Qix1Q0FBMkI7Ozs7O0lBRWYsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW50ZXJwcmlzZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdyaWREYXRhIH0gZnJvbSAnLi4vYWN0aW9uL0dyaWREYXRhJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FvLWdyaWQtZGF0YV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBb0dyaWREYXRhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBASW5wdXQoKSBncmlkRGF0YTpHcmlkRGF0YTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbnRlcnBHcmlkQ29tcDogRW50ZXJwcmlzZUdyaWRDb21wb25lbnQpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW50ZXJwR3JpZENvbXAuc2V0R3JpZERhdGEgPSB0aGlzLmdyaWREYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJEYXRhIERpcmVjdGl2ZVwiKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==