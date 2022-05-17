/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EnterpriseTreeComponent } from './enterprise-tree.component';
import { CommonModule } from '@angular/common';
import { MaterialModuleSet } from '../common/material-module';
import { AoTreeDataDirective } from '../directive/ao-tree-data.directive';
import { AoActionsDirective } from '../directive/ao-actions.directive';
import { AoTreeConfigDirective } from '../directive/ao-tree-config.directive';
var EnterpriseTreeModule = /** @class */ (function () {
    function EnterpriseTreeModule() {
    }
    EnterpriseTreeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                    imports: [
                        CommonModule,
                        MaterialModuleSet,
                    ],
                    exports: [EnterpriseTreeComponent, AoTreeDataDirective, AoActionsDirective, AoTreeConfigDirective],
                    providers: [EnterpriseTreeComponent],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,
                    ],
                },] }
    ];
    return EnterpriseTreeModule;
}());
export { EnterpriseTreeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS10cmVlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLXRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU5RTtJQUFBO0lBWW9DLENBQUM7O2dCQVpwQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7b0JBQ3ZHLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7b0JBQ2xHLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCLEVBQUUsZ0JBQWdCO3FCQUN6QztpQkFDRjs7SUFDbUMsMkJBQUM7Q0FBQSxBQVpyQyxJQVlxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZVRyZWVDb21wb25lbnQgfSBmcm9tICcuL2VudGVycHJpc2UtdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlU2V0IH0gZnJvbSAnLi4vY29tbW9uL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBBb1RyZWVEYXRhRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlL2FvLXRyZWUtZGF0YS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQW9BY3Rpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlL2FvLWFjdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFvVHJlZUNvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS9hby10cmVlLWNvbmZpZy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbnRlcnByaXNlVHJlZUNvbXBvbmVudCwgQW9UcmVlRGF0YURpcmVjdGl2ZSwgQW9BY3Rpb25zRGlyZWN0aXZlLCBBb1RyZWVDb25maWdEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlU2V0LFxuICBdLFxuICBleHBvcnRzOiBbRW50ZXJwcmlzZVRyZWVDb21wb25lbnQsIEFvVHJlZURhdGFEaXJlY3RpdmUsIEFvQWN0aW9uc0RpcmVjdGl2ZSwgQW9UcmVlQ29uZmlnRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbRW50ZXJwcmlzZVRyZWVDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRW50ZXJwcmlzZVRyZWVNb2R1bGUgeyB9XG4iXX0=