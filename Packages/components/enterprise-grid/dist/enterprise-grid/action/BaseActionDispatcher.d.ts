import { ActionDispatcher } from "./ActionDispatcher";
export declare class BaseActionDispatcher implements ActionDispatcher {
    constructor();
    /**
     * Get the token convert it and call the method requested .
     */
    dispatchAction(token: string, ...args: any[]): any;
}
