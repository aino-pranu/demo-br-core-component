import { Directive, OnInit, Input } from '@angular/core';
import { EnterpriseGridComponent } from "../lib/enterprise-grid.component";

/**
 * Directive class for actions, it sets the action dispatcher class of the host-app 
 * passed through the directive variable(actionDispatcher) from the host-app.
 */
@Directive({
  selector: '[ao-actions]'
})
export class AoActionsDirective implements OnInit {

  // input variable to set the action dispatcher class of the host-app. This directive variable is used in host app's library tag.
  @Input() actionDispatcher;

  constructor(private enterpGridComp: EnterpriseGridComponent) { }
 
  ngOnInit(): void {
    this.enterpGridComp.setActionDispatcher=this.actionDispatcher;
  }
}