import { OnInit } from "@angular/core";
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
export declare class AoGridConfigDirective implements OnInit {
    private enterpGridComp;
    gridConfig: any;
    constructor(enterpGridComp: EnterpriseGridComponent);
    ngOnInit(): void;
}
