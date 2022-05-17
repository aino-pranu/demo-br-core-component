/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class BaseActionDispatcher {
    constructor() { }
    /**
     * Get the token convert it and call the method requested .
     * @param {?} token
     * @param {...?} args
     * @return {?}
     */
    dispatchAction(token, ...args) {
        /** @type {?} */
        const tokenArray = token.split("-");
        /** @type {?} */
        let transformedToken = [];
        for (let i = 0; i < tokenArray.length; i++) {
            if (i !== 0) {
                transformedToken.push(tokenArray[i].charAt(0).toUpperCase() + tokenArray[i].slice(1));
            }
            else {
                transformedToken.push(tokenArray[i]);
            }
        }
        /** @type {?} */
        const methodName = transformedToken.join("");
        return this[methodName].apply(this, args);
    }
}
BaseActionDispatcher.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BaseActionDispatcher.ctorParameters = () => [];
/** @nocollapse */ BaseActionDispatcher.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BaseActionDispatcher_Factory() { return new BaseActionDispatcher(); }, token: BaseActionDispatcher, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbkRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLWdyaWQvIiwic291cmNlcyI6WyJhY3Rpb24vQmFzZUFjdGlvbkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsZ0JBQWdCLENBQUM7Ozs7Ozs7SUFJakIsY0FBYyxDQUFDLEtBQWEsRUFBQyxHQUFHLElBQUk7O2NBQzVCLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDL0IsZ0JBQWdCLEdBQUcsRUFBRTtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNGOztjQUNLLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkRpc3BhdGNoZXIgfSBmcm9tIFwiLi9BY3Rpb25EaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzZUFjdGlvbkRpc3BhdGNoZXIgaW1wbGVtZW50cyBBY3Rpb25EaXNwYXRjaGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdG9rZW4gY29udmVydCBpdCBhbmQgY2FsbCB0aGUgbWV0aG9kIHJlcXVlc3RlZCAuXHJcbiAgICovXHJcbiAgZGlzcGF0Y2hBY3Rpb24odG9rZW46IHN0cmluZywuLi5hcmdzKTogYW55IHtcclxuICAgIGNvbnN0IHRva2VuQXJyYXkgPSB0b2tlbi5zcGxpdChcIi1cIik7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRUb2tlbiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWRUb2tlbi5wdXNoKHRva2VuQXJyYXlbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b2tlbkFycmF5W2ldLnNsaWNlKDEpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZFRva2VuLnB1c2godG9rZW5BcnJheVtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGhvZE5hbWUgPSB0cmFuc2Zvcm1lZFRva2VuLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5hcHBseSh0aGlzLGFyZ3MpO1xyXG4gIH1cclxuXHJcbn0iXX0=