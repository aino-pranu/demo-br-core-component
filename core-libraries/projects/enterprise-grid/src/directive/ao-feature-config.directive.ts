import { Directive, Input, OnInit } from '@angular/core';
import { EnterpriseGridComponent } from '../public-api';

/**
 * Directive to set feature configurations sent by the host-app to the grid.
 */
@Directive({
  selector: '[ao-feature-config]'
})
export class AoFeatureConfigDirective implements OnInit {

  // input variable where feature configurations are set by the host app through the directive. This directive variable is used in host app's library tag.
  @Input() featureConfig;

  constructor(private enterpGridComp: EnterpriseGridComponent) { }

  ngOnInit(): void {
    console.log(this.featureConfig);
    this.enterpGridComp.setFeatureConfig = this.featureConfig;
  }

}
