/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
export class AoActionsDirective {
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
        this.enterpGridComp.setActionDispatcher = this.actionDispatcher;
    }
}
AoActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-actions]'
            },] }
];
/** @nocollapse */
AoActionsDirective.ctorParameters = () => [
    { type: EnterpriseGridComponent }
];
AoActionsDirective.propDecorators = {
    actionDispatcher: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AoActionsDirective.prototype.actionDispatcher;
    /**
     * @type {?}
     * @private
     */
    AoActionsDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tYWN0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLWdyaWQvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSTNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFN0IsWUFBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUksQ0FBQzs7OztJQUVoRSxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBSFEsdUJBQXVCOzs7K0JBSzdCLEtBQUs7Ozs7SUFBTiw4Q0FBMEI7Ozs7O0lBQ2QsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudGVycHJpc2VHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uL2xpYi9lbnRlcnByaXNlLWdyaWQuY29tcG9uZW50XCI7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FvLWFjdGlvbnNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW9BY3Rpb25zRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBhY3Rpb25EaXNwYXRjaGVyO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50ZXJwR3JpZENvbXA6IEVudGVycHJpc2VHcmlkQ29tcG9uZW50KSB7IH1cclxuIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbnRlcnBHcmlkQ29tcC5zZXRBY3Rpb25EaXNwYXRjaGVyPXRoaXMuYWN0aW9uRGlzcGF0Y2hlcjtcclxuICB9XHJcbn0iXX0=