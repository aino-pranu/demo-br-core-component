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
export class EnterpriseGridModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9lbnRlcnByaXNlLWdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWM5RSxNQUFNLE9BQU8sb0JBQW9COzs7WUFaaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDO2dCQUN2RyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLG1CQUFtQixFQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDO2dCQUNqRyxTQUFTLEVBQUUsQ0FBRSx1QkFBdUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFO29CQUNQLHNCQUFzQixFQUFFLGdCQUFnQjtpQkFDekM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudGVycHJpc2VHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9lbnRlcnByaXNlLWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlU2V0IH0gZnJvbSAnLi4vY29tbW9uL21hdGVyaWFsLW1vZHVsZSc7XHJcbmltcG9ydCB7IEFvR3JpZERhdGFEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUvYW8tZ3JpZC1kYXRhLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFvQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS9hby1hY3Rpb25zLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFvR3JpZENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS9hby1ncmlkLWNvbmZpZy5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtFbnRlcnByaXNlR3JpZENvbXBvbmVudCwgQW9HcmlkRGF0YURpcmVjdGl2ZSwgQW9BY3Rpb25zRGlyZWN0aXZlLCBBb0dyaWRDb25maWdEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdGVyaWFsTW9kdWxlU2V0LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0VudGVycHJpc2VHcmlkQ29tcG9uZW50LCBBb0dyaWREYXRhRGlyZWN0aXZlLEFvQWN0aW9uc0RpcmVjdGl2ZSwgQW9HcmlkQ29uZmlnRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFsgRW50ZXJwcmlzZUdyaWRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUFcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50ZXJwcmlzZUdyaWRNb2R1bGUgeyB9XHJcbiJdfQ==