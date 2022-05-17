/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
var AoTreeConfigDirective = /** @class */ (function () {
    function AoTreeConfigDirective(enterpTreeComp) {
        this.enterpTreeComp = enterpTreeComp;
    }
    /**
     * @return {?}
     */
    AoTreeConfigDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.enterpTreeComp.setTreeConfig = this.treeConfig;
    };
    AoTreeConfigDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ao-tree-config]'
                },] }
    ];
    /** @nocollapse */
    AoTreeConfigDirective.ctorParameters = function () { return [
        { type: EnterpriseTreeComponent }
    ]; };
    AoTreeConfigDirective.propDecorators = {
        treeConfig: [{ type: Input }]
    };
    return AoTreeConfigDirective;
}());
export { AoTreeConfigDirective };
if (false) {
    /** @type {?} */
    AoTreeConfigDirective.prototype.treeConfig;
    /**
     * @type {?}
     * @private
     */
    AoTreeConfigDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tdHJlZS1jb25maWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZW50ZXJwcmlzZS10cmVlLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlL2FvLXRyZWUtY29uZmlnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFM0U7SUFPRSwrQkFBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUksQ0FBQzs7OztJQUVoRSx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3RELENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKUSx1QkFBdUI7Ozs2QkFPN0IsS0FBSzs7SUFRUiw0QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLHFCQUFxQjs7O0lBRWhDLDJDQUFvQjs7Ozs7SUFFUiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVudGVycHJpc2VUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2VudGVycHJpc2UtdHJlZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW8tdHJlZS1jb25maWddJ1xufSlcbmV4cG9ydCBjbGFzcyBBb1RyZWVDb25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRyZWVDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbnRlcnBUcmVlQ29tcDogRW50ZXJwcmlzZVRyZWVDb21wb25lbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW50ZXJwVHJlZUNvbXAuc2V0VHJlZUNvbmZpZyA9IHRoaXMudHJlZUNvbmZpZztcbiAgfVxuXG59XG4iXX0=