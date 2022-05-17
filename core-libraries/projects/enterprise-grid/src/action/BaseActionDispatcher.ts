import { ActionDispatcher } from "./ActionDispatcher";
import { Injectable } from "@angular/core";
import { PageStore } from './PageStore';

/** BaseActionDispatcher class is used for dispatching actions from grid library to the host app.
 *  The action is dispatched by sending the action-token to the dispatchAction() method which then matches with whichever class has extended/used BaseActionDispatcher.
 */
@Injectable({
  providedIn: 'root',
})
export class BaseActionDispatcher implements ActionDispatcher {

  constructor() { }

  /**
   * Get the action token convert it to camel case string(which is a method name) and invokes the requested method.
   * token : action type
   * ...args : payload
   */
  dispatchAction(token: string,...args): any {
    
    let pageStore = new PageStore();
    pageStore.addPageState(token, args);

    const tokenArray = token.split("-");
    let transformedToken = [];
    for (let i = 0; i < tokenArray.length; i++) {
      if (i !== 0) {
        transformedToken.push(tokenArray[i].charAt(0).toUpperCase() + tokenArray[i].slice(1));
      } else {
        transformedToken.push(tokenArray[i]);
      }
    }
    const methodName = transformedToken.join("");
    return this[methodName].apply(this,args);
  }

}