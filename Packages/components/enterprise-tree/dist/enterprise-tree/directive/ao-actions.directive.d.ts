import { OnInit } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export declare class AoActionsDirective implements OnInit {
    private enterpTreeComp;
    actionDispatcher: any;
    constructor(enterpTreeComp: EnterpriseTreeComponent);
    ngOnInit(): void;
}
