/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
var AoActionsDirective = /** @class */ (function () {
    function AoActionsDirective(enterpGridComp) {
        this.enterpGridComp = enterpGridComp;
    }
    /**
     * @return {?}
     */
    AoActionsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpGridComp.setActionDispatcher = this.actionDispatcher;
    };
    AoActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-actions]'
                },] }
    ];
    /** @nocollapse */
    AoActionsDirective.ctorParameters = function () { return [
        { type: EnterpriseGridComponent }
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
    AoActionsDirective.prototype.enterpGridComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tYWN0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLWdyaWQvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFO0lBS0UsNEJBQW9CLGNBQXVDO1FBQXZDLG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtJQUFJLENBQUM7Ozs7SUFFaEUscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsQ0FBQzs7Z0JBVEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFIUSx1QkFBdUI7OzttQ0FLN0IsS0FBSzs7SUFNUix5QkFBQztDQUFBLEFBVkQsSUFVQztTQVBZLGtCQUFrQjs7O0lBQzdCLDhDQUEwQjs7Ozs7SUFDZCw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW50ZXJwcmlzZUdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vbGliL2VudGVycHJpc2UtZ3JpZC5jb21wb25lbnRcIjtcclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYW8tYWN0aW9uc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBb0FjdGlvbnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFjdGlvbkRpc3BhdGNoZXI7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbnRlcnBHcmlkQ29tcDogRW50ZXJwcmlzZUdyaWRDb21wb25lbnQpIHsgfVxyXG4gXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVudGVycEdyaWRDb21wLnNldEFjdGlvbkRpc3BhdGNoZXI9dGhpcy5hY3Rpb25EaXNwYXRjaGVyO1xyXG4gIH1cclxufSJdfQ==