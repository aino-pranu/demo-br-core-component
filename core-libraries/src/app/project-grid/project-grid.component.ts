import { GridConfig } from 'projects/enterprise-grid/src/config/GridConfig';
import { Component, Inject, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project.service';
import { ProjectActionDispatcher } from 'src/action-dispatcher/ProjectActionDispatcher';
import { FeatureConfig } from 'projects/enterprise-grid/src/public-api';
import { DataSource } from 'projects/enterprise-grid/src/action/DataSource';
import { actionConfig, columnConfig, featureConfig, pagingConfig, gridConfig } from 'src/assets/js/configuration';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css'],
})
export class ProjectGridComponent implements OnInit, DataSource {

  dataSource: DataSource = this;
  gridConfig;
  featureConfig;
  projectActionDispatcher = new ProjectActionDispatcher()

  constructor(@Inject(ProjectService) private projectService: ProjectService) {
    this.gridConfig = new GridConfig();
    this.gridConfig = gridConfig;
    this.featureConfig = new FeatureConfig(featureConfig, columnConfig, actionConfig, pagingConfig);
  }

  ngOnInit() { }

  getFirstPage(pageNumber: number, pageSize: number): Promise<any> {
    let promise = this.projectService.getAllProjects().toPromise();
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


  getNextPage(pageNumber: number, pageSize: number): Promise<any> {
    let promise = this.projectService.getProjectsByPaging(pageNumber, pageSize).toPromise();
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

  onGridDataLoad(data: any): void {
    throw new Error('Method not implemented.');
  }
}
