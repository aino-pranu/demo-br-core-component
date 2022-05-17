import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleSet } from 'src/common/material-module';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { EnterpriseGridModule } from 'projects/enterprise-grid/src/lib/enterprise-grid.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-memory-data.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { DemoGridComponent } from './demo-grid/demo-grid.component';
import { GridParentComponent } from './grid-parent/grid-parent.component';

export const routes: Routes = [
  { path: 'grid', component: GridParentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectGridComponent,
    SideNavComponent,
    MainContainerComponent,
    DemoGridComponent,
    GridParentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleSet,
    EnterpriseGridModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {

}