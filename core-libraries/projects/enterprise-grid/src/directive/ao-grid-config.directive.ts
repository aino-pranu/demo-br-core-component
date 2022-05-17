import { OnInit, Directive, Input, ElementRef } from "@angular/core";
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";

/**
 * Directive to set grid configurations sent by the host-app to the grid.
 */
@Directive({
    selector: '[ao-grid-config]'
})
export class AoGridConfigDirective implements OnInit {

    // input variable where grid configurations are set by the host app through the directive. This directive variable is used in host app's library tag.
    @Input() gridConfig;

    constructor(private enterpGridComp: EnterpriseGridComponent) { }

    ngOnInit(): void {
        console.log(this.gridConfig);
        this.enterpGridComp.setGridConfig = this.gridConfig;
    }
}