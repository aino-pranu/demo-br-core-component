/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var BaseActionDispatcher = /** @class */ (function () {
    function BaseActionDispatcher() {
    }
    /**
     * Get the token convert it and call the method requested .
     */
    /**
     * Get the token convert it and call the method requested .
     * @param {?} token
     * @param {...?} args
     * @return {?}
     */
    BaseActionDispatcher.prototype.dispatchAction = /**
     * Get the token convert it and call the method requested .
     * @param {?} token
     * @param {...?} args
     * @return {?}
     */
    function (token) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var tokenArray = token.split("-");
        /** @type {?} */
        var transformedToken = [];
        for (var i = 0; i < tokenArray.length; i++) {
            if (i !== 0) {
                transformedToken.push(tokenArray[i].charAt(0).toUpperCase() + tokenArray[i].slice(1));
            }
            else {
                transformedToken.push(tokenArray[i]);
            }
        }
        /** @type {?} */
        var methodName = transformedToken.join("");
        return this[methodName].apply(this, args);
    };
    BaseActionDispatcher.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    BaseActionDispatcher.ctorParameters = function () { return []; };
    /** @nocollapse */ BaseActionDispatcher.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BaseActionDispatcher_Factory() { return new BaseActionDispatcher(); }, token: BaseActionDispatcher, providedIn: "root" });
    return BaseActionDispatcher;
}());
export { BaseActionDispatcher };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbkRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLXRyZWUvIiwic291cmNlcyI6WyJhY3Rpb24vQmFzZUFjdGlvbkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBSUU7SUFBZ0IsQ0FBQztJQUNqQjs7T0FFRzs7Ozs7OztJQUNILDZDQUFjOzs7Ozs7SUFBZCxVQUFlLEtBQWE7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOzs7WUFDNUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUMvQixnQkFBZ0IsR0FBRyxFQUFFO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkY7aUJBQU07Z0JBQ0wsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7O1lBQ0ssVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBTEQ7Q0F5QkMsQUF0QkQsSUFzQkM7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uRGlzcGF0Y2hlciB9IGZyb20gXCIuL0FjdGlvbkRpc3BhdGNoZXJcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFjdGlvbkRpc3BhdGNoZXIgaW1wbGVtZW50cyBBY3Rpb25EaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgLyoqXG4gICAqIEdldCB0aGUgdG9rZW4gY29udmVydCBpdCBhbmQgY2FsbCB0aGUgbWV0aG9kIHJlcXVlc3RlZCAuXG4gICAqL1xuICBkaXNwYXRjaEFjdGlvbih0b2tlbjogc3RyaW5nLC4uLmFyZ3MpOiBhbnkge1xuICAgIGNvbnN0IHRva2VuQXJyYXkgPSB0b2tlbi5zcGxpdChcIi1cIik7XG4gICAgbGV0IHRyYW5zZm9ybWVkVG9rZW4gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVG9rZW4ucHVzaCh0b2tlbkFycmF5W2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG9rZW5BcnJheVtpXS5zbGljZSgxKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm1lZFRva2VuLnB1c2godG9rZW5BcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZE5hbWUgPSB0cmFuc2Zvcm1lZFRva2VuLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcyxhcmdzKTtcbiAgfVxuXG59Il19