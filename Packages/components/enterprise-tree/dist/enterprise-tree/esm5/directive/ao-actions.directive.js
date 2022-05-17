/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
var AoActionsDirective = /** @class */ (function () {
    function AoActionsDirective(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    AoActionsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpTreeComp.setActionDispatcher = this.actionDispatcher;
    };
    AoActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-actions]'
                },] }
    ];
    /** @nocollapse */
    AoActionsDirective.ctorParameters = function () { return [
        { type: EnterpriseTreeComponent }
    ]; };
    AoActionsDirective.propDecorators = {
        actionDispatcher: [{ type: Input }]
    };
    return AoActionsDirective;
}());
export { AoActionsDirective };
if (false) {
    /** @type {?} */
    AoActionsDirective.prototype.actionDispatcher;
    /**
     * @type {?}
     * @private
     */
    AoActionsDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tYWN0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTNFO0lBT0UsNEJBQW9CLGNBQXVDO1FBQXZDLG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtJQUFJLENBQUM7Ozs7SUFFaEUscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbEUsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFKUSx1QkFBdUI7OzttQ0FPN0IsS0FBSzs7SUFRUix5QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLGtCQUFrQjs7O0lBRTdCLDhDQUEwQjs7Ozs7SUFFZCw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VBY3Rpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vYWN0aW9uL0Jhc2VBY3Rpb25EaXNwYXRjaGVyJztcbmltcG9ydCB7IEVudGVycHJpc2VUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2VudGVycHJpc2UtdHJlZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW8tYWN0aW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIEFvQWN0aW9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoKSBhY3Rpb25EaXNwYXRjaGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50ZXJwVHJlZUNvbXA6IEVudGVycHJpc2VUcmVlQ29tcG9uZW50KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVudGVycFRyZWVDb21wLnNldEFjdGlvbkRpc3BhdGNoZXIgPSB0aGlzLmFjdGlvbkRpc3BhdGNoZXI7XG4gIH1cblxufVxuIl19