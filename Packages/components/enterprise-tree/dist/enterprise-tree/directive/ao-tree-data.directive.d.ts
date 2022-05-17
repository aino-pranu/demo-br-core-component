import { OnInit } from '@angular/core';
import { EnterpriseTreeComponent } from '../lib/enterprise-tree.component';
export declare class AoTreeDataDirective implements OnInit {
    private enterpTreeComp;
    treeData: any;
    constructor(enterpTreeComp: EnterpriseTreeComponent);
    ngOnInit(): void;
}
