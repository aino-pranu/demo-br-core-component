import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Router } from '@angular/router';

interface JobNode {
  name?: string,
  route: string,
  children?: any[]
}

// const TREE_DATA: JobNode[] = pluginDescriptor;

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  private _transformer = (node: JobNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      route: node.route,
      level: level,
    };
  }

  list = [
    { name: 'Enterprise grid', route: 'grid', children: [] },
    { name: 'Enterprise tree', route: 'tree', children: [] }
  ];

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  currSelectedModule = null;
  prevSelectedModule = null;

  constructor(private router: Router) {
    let tempList = JSON.parse(JSON.stringify(this.list));

    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].children) {
        for (let j = 0; j < tempList[i].children.length; j++) {
          if (tempList[i].children[j].display.includes("Settings")) {
            tempList[i].children.splice(j, 1);
          }
        }
      }
    }

    this.dataSource.data = tempList;
  }

  ngOnInit() {
  }

  public setTreeNodesStyleBlock() {
    let matTreeNode = document.getElementsByClassName("mat-tree-node");
    for (let i = 0; i < matTreeNode.length; i++) {
      let matTreeChildNode = matTreeNode[i] as HTMLElement;
      matTreeChildNode.style.display = "block";
    }
  }

  public currentSelectedModule(nodeName: string) {
    // console.log(nodeName);

    this.prevSelectedModule = this.currSelectedModule;

    // console.log(this.currSelectedModule, " ", this.prevSelectedModule);

    let moduleButtons = document.getElementsByClassName("mat-line");

    for (let i = 0; i < moduleButtons.length; i++) {
      let moduleName;

      if (moduleButtons[i]) {
        moduleName = moduleButtons[i].innerHTML;
      }

      if (moduleName != null && moduleName === nodeName) {

        this.currSelectedModule = nodeName;

        let parentElement = moduleButtons[i].parentElement.parentElement as HTMLElement;
        parentElement.style.background = "rgba(0,0,0,0.12)";
      }

      if (this.prevSelectedModule != null) {
        if (moduleName != null && moduleName === this.prevSelectedModule) {

          let parentElement = moduleButtons[i].parentElement.parentElement as HTMLElement;
          parentElement.style.background = "none";
        }
      }
    }
  }

  public loadModule(value) {
    // console.log(value);
    switch (value) {
      case 'grid':
        this.router.navigate(['/grid']);
        break;
      case 'tree':
        this.router.navigate(['/tree']);
        break;
    }
  }
}
