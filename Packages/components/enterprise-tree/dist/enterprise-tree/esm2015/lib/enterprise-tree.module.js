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
export class EnterpriseTreeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS10cmVlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLXRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWM5RSxNQUFNLE9BQU8sb0JBQW9COzs7WUFaaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDO2dCQUN2RyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDO2dCQUNsRyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNQLHNCQUFzQixFQUFFLGdCQUFnQjtpQkFDekM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbnRlcnByaXNlVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vZW50ZXJwcmlzZS10cmVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGVTZXQgfSBmcm9tICcuLi9jb21tb24vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IEFvVHJlZURhdGFEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvYW8tdHJlZS1kYXRhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBb0FjdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvYW8tYWN0aW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQW9UcmVlQ29uZmlnRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlL2FvLXRyZWUtY29uZmlnLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VudGVycHJpc2VUcmVlQ29tcG9uZW50LCBBb1RyZWVEYXRhRGlyZWN0aXZlLCBBb0FjdGlvbnNEaXJlY3RpdmUsIEFvVHJlZUNvbmZpZ0RpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGVTZXQsXG4gIF0sXG4gIGV4cG9ydHM6IFtFbnRlcnByaXNlVHJlZUNvbXBvbmVudCwgQW9UcmVlRGF0YURpcmVjdGl2ZSwgQW9BY3Rpb25zRGlyZWN0aXZlLCBBb1RyZWVDb25maWdEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtFbnRlcnByaXNlVHJlZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRlcnByaXNlVHJlZU1vZHVsZSB7IH1cbiJdfQ==