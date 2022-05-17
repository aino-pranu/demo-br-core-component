/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export class AoActionsDirective {
    /**
     * @param {?} enterpTreeComp
     */
    constructor(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.enterpTreeComp.setActionDispatcher = this.actionDispatcher;
    }
}
AoActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-actions]'
            },] }
];
/** @nocollapse */
AoActionsDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
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
    AoActionsDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tYWN0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSzNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUksQ0FBQzs7OztJQUVoRSxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbEUsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBSlEsdUJBQXVCOzs7K0JBTzdCLEtBQUs7Ozs7SUFBTiw4Q0FBMEI7Ozs7O0lBRWQsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQWN0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uL2FjdGlvbi9CYXNlQWN0aW9uRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBFbnRlcnByaXNlVHJlZUNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FvLWFjdGlvbnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBBb0FjdGlvbnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgQElucHV0KCkgYWN0aW9uRGlzcGF0Y2hlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudGVycFRyZWVDb21wOiBFbnRlcnByaXNlVHJlZUNvbXBvbmVudCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbnRlcnBUcmVlQ29tcC5zZXRBY3Rpb25EaXNwYXRjaGVyID0gdGhpcy5hY3Rpb25EaXNwYXRjaGVyO1xuICB9XG5cbn1cbiJdfQ==