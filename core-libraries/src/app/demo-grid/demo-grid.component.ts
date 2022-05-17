import { Component, Inject, OnInit } from '@angular/core';
import { DataSource } from 'projects/enterprise-grid/src/action/DataSource';
import { GridConfig } from 'projects/enterprise-grid/src/config/GridConfig';
import { FeatureConfig } from 'projects/enterprise-grid/src/public-api';
import { DemoActiondispatcher } from 'src/action-dispatcher/DemoActiondispatcher';
import { actionConfig, columnConfig, featureConfig, gridConfig, pagingConfig } from 'src/assets/js/demo';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.css']
})
export class DemoGridComponent implements OnInit, DataSource {

  //datasource is used for grid data
  dataSource: DataSource = this;
  gridConfig;
  featureConfig;
  demoActiondispatcher = new DemoActiondispatcher();

  constructor(@Inject(ProjectService) private projectService: ProjectService) {
    //grid configuration to set the grid name, tagname, total records, pagesize
    this.gridConfig = new GridConfig();
    this.gridConfig = gridConfig;
    //feature configuration to pass the feature & actions
    this.featureConfig = new FeatureConfig(featureConfig, columnConfig, actionConfig, pagingConfig);
  }

  ngOnInit() { }

  getFirstPage(): Promise<any> {
    let promise = this.projectService.getAllRecords().toPromise();
    promise.then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
    return promise;
  }

  getNextPage(id: number, pageSize: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

  onGridDataLoad(data: any): void {
    throw new Error('Method not implemented.');
  }
}
