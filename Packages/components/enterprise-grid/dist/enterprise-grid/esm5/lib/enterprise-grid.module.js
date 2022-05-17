/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EnterpriseGridComponent } from './enterprise-grid.component';
import { CommonModule } from '@angular/common';
import { MaterialModuleSet } from '../common/material-module';
import { AoGridDataDirective } from '../directive/ao-grid-data.directive';
import { AoActionsDirective } from '../directive/ao-actions.directive';
import { AoGridConfigDirective } from '../directive/ao-grid-config.directive';
var EnterpriseGridModule = /** @class */ (function () {
    function EnterpriseGridModule() {
    }
    EnterpriseGridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EnterpriseGridComponent, AoGridDataDirective, AoActionsDirective, AoGridConfigDirective],
                    imports: [
                        CommonModule,
                        MaterialModuleSet,
                    ],
                    exports: [EnterpriseGridComponent, AoGridDataDirective, AoActionsDirective, AoGridConfigDirective],
                    providers: [EnterpriseGridComponent],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
                    ],
                },] }
    ];
    return EnterpriseGridModule;
}());
export { EnterpriseGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLWdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU5RTtJQUFBO0lBWW9DLENBQUM7O2dCQVpwQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7b0JBQ3ZHLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7b0JBQ2pHLFNBQVMsRUFBRSxDQUFFLHVCQUF1QixDQUFDO29CQUNyQyxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCLEVBQUUsZ0JBQWdCO3FCQUN6QztpQkFDRjs7SUFDbUMsMkJBQUM7Q0FBQSxBQVpyQyxJQVlxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnRlcnByaXNlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vZW50ZXJwcmlzZS1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZVNldCB9IGZyb20gJy4uL2NvbW1vbi9tYXRlcmlhbC1tb2R1bGUnO1xyXG5pbXBvcnQgeyBBb0dyaWREYXRhRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlL2FvLWdyaWQtZGF0YS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBb0FjdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBb0dyaWRDb25maWdEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvYW8tZ3JpZC1jb25maWcuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRW50ZXJwcmlzZUdyaWRDb21wb25lbnQsIEFvR3JpZERhdGFEaXJlY3RpdmUsIEFvQWN0aW9uc0RpcmVjdGl2ZSwgQW9HcmlkQ29uZmlnRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1vZHVsZVNldCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtFbnRlcnByaXNlR3JpZENvbXBvbmVudCwgQW9HcmlkRGF0YURpcmVjdGl2ZSxBb0FjdGlvbnNEaXJlY3RpdmUsIEFvR3JpZENvbmZpZ0RpcmVjdGl2ZV0sXHJcbiAgcHJvdmlkZXJzOiBbIEVudGVycHJpc2VHcmlkQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGVycHJpc2VHcmlkTW9kdWxlIHsgfVxyXG4iXX0=