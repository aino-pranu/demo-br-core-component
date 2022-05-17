export interface ActionDispatcher {
    dispatchAction(token: string, ...args: any[]): any;
}
