/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export class AoTreeDataDirective {
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
        this.enterpTreeComp.setTreeData = this.treeData;
    }
}
AoTreeDataDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ao-tree-data]'
            },] }
];
/** @nocollapse */
AoTreeDataDirective.ctorParameters = () => [
    { type: EnterpriseTreeComponent }
];
AoTreeDataDirective.propDecorators = {
    treeData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AoTreeDataDirective.prototype.treeData;
    /**
     * @type {?}
     * @private
     */
    AoTreeDataDirective.prototype.enterpTreeComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW8tdHJlZS1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZS9hby10cmVlLWRhdGEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUszRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTlCLFlBQW9CLGNBQXVDO1FBQXZDLG1CQUFjLEdBQWQsY0FBYyxDQUF5QjtJQUFJLENBQUM7Ozs7SUFFaEUsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFKUSx1QkFBdUI7Ozt1QkFPN0IsS0FBSzs7OztJQUFOLHVDQUFrQjs7Ozs7SUFFTiw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVudGVycHJpc2VUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2VudGVycHJpc2UtdHJlZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW8tdHJlZS1kYXRhXSdcbn0pXG5leHBvcnQgY2xhc3MgQW9UcmVlRGF0YURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdHJlZURhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbnRlcnBUcmVlQ29tcDogRW50ZXJwcmlzZVRyZWVDb21wb25lbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW50ZXJwVHJlZUNvbXAuc2V0VHJlZURhdGEgPSB0aGlzLnRyZWVEYXRhO1xuICB9XG5cbn1cbiJdfQ==