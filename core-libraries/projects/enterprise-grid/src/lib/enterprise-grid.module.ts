import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EnterpriseGridComponent } from './enterprise-grid.component';
import { CommonModule } from '@angular/common';

import { MaterialModuleSet } from '../common/material-module';
import { AoActionsDirective } from '../directive/ao-actions.directive';
import { AoGridConfigDirective } from '../directive/ao-grid-config.directive';
import { AoFeatureConfigDirective } from '../directive/ao-feature-config.directive';
import { AoDataSourceDirective } from '../directive/ao-data-source.directive';

@NgModule({
  declarations: [EnterpriseGridComponent, AoActionsDirective, AoGridConfigDirective, AoFeatureConfigDirective, AoDataSourceDirective],
  imports: [
    CommonModule,
    MaterialModuleSet,
  ],
  exports: [EnterpriseGridComponent, AoActionsDirective, AoGridConfigDirective, AoFeatureConfigDirective, AoDataSourceDirective],
  providers: [EnterpriseGridComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
})
export class EnterpriseGridModule { }
