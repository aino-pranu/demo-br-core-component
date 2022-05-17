import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleSet } from '../material-module';

@NgModule({
  declarations: [],
  
  exports:[CommonModule, MaterialModuleSet]
})
export class SharedModule { }
