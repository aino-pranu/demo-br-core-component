/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export class AoTreeConfigDirective {
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
        this.enterpTreeComp.setTreeConfig = this.treeConfig;
    }
}
AoTreeConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-tree-config]'
            },] }
];
/** @nocollapse */
AoTreeConfigDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
];
AoTreeConfigDirective.propDecorators = {
    treeConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AoTreeConfigDirective.prototype.treeConfig;
    /**
     * @type {?}
     * @private
     */
    AoTreeConfigDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tdHJlZS1jb25maWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW50ZXJwcmlzZS10cmVlLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlL2FvLXRyZWUtY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLM0UsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBSSxDQUFDOzs7O0lBRWhFLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3RELENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSlEsdUJBQXVCOzs7eUJBTzdCLEtBQUs7Ozs7SUFBTiwyQ0FBb0I7Ozs7O0lBRVIsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbnRlcnByaXNlVHJlZUNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9lbnRlcnByaXNlLXRyZWUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FvLXRyZWUtY29uZmlnXSdcbn0pXG5leHBvcnQgY2xhc3MgQW9UcmVlQ29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0cmVlQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50ZXJwVHJlZUNvbXA6IEVudGVycHJpc2VUcmVlQ29tcG9uZW50KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVudGVycFRyZWVDb21wLnNldFRyZWVDb25maWcgPSB0aGlzLnRyZWVDb25maWc7XG4gIH1cblxufVxuIl19