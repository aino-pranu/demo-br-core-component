import { OnInit } from '@angular/core';
import { EnterpriseGridComponent } from '../lib/enterprise-grid.component';
import { GridData } from '../action/GridData';
export declare class AoGridDataDirective implements OnInit {
    private enterpGridComp;
    gridData: GridData;
    constructor(enterpGridComp: EnterpriseGridComponent);
    ngOnInit(): void;
}
