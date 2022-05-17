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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbkRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJhY3Rpb24vQmFzZUFjdGlvbkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsZ0JBQWdCLENBQUM7Ozs7Ozs7SUFJakIsY0FBYyxDQUFDLEtBQWEsRUFBQyxHQUFHLElBQUk7O2NBQzVCLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDL0IsZ0JBQWdCLEdBQUcsRUFBRTtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNGOztjQUNLLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkRpc3BhdGNoZXIgfSBmcm9tIFwiLi9BY3Rpb25EaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VBY3Rpb25EaXNwYXRjaGVyIGltcGxlbWVudHMgQWN0aW9uRGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHRva2VuIGNvbnZlcnQgaXQgYW5kIGNhbGwgdGhlIG1ldGhvZCByZXF1ZXN0ZWQgLlxuICAgKi9cbiAgZGlzcGF0Y2hBY3Rpb24odG9rZW46IHN0cmluZywuLi5hcmdzKTogYW55IHtcbiAgICBjb25zdCB0b2tlbkFycmF5ID0gdG9rZW4uc3BsaXQoXCItXCIpO1xuICAgIGxldCB0cmFuc2Zvcm1lZFRva2VuID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1lZFRva2VuLnB1c2godG9rZW5BcnJheVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRva2VuQXJyYXlbaV0uc2xpY2UoMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtZWRUb2tlbi5wdXNoKHRva2VuQXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtZXRob2ROYW1lID0gdHJhbnNmb3JtZWRUb2tlbi5qb2luKFwiXCIpO1xuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsYXJncyk7XG4gIH1cblxufSJdfQ==