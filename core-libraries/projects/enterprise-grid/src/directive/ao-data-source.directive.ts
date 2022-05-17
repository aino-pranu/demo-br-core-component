import { Directive, Input, OnInit } from '@angular/core';
import { EnterpriseGridComponent } from '../public-api';

@Directive({
  selector: '[ao-data-source]'
})
export class AoDataSourceDirective implements OnInit {

  // input variable where grid configurations are set by the host app through the directive. This directive variable is used in host app's library tag.
  @Input() dataSource;

  constructor(private enterpGridComp: EnterpriseGridComponent) { }

  ngOnInit(): void {
    console.log(this.dataSource);
    this.enterpGridComp.setDataSource = this.dataSource;
  }
} 