import { OnInit } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export declare class AoTreeConfigDirective implements OnInit {
    private enterpTreeComp;
    treeConfig: any;
    constructor(enterpTreeComp: EnterpriseTreeComponent);
    ngOnInit(): void;
}
