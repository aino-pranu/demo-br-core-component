import { OnInit } from '@angular/core';
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";
export declare class AoActionsDirective implements OnInit {
    private enterpGridComp;
    actionDispatcher: any;
    constructor(enterpGridComp: EnterpriseGridComponent);
    ngOnInit(): void;
}
