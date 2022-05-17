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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFjdGlvbkRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbnRlcnByaXNlLWdyaWQvIiwic291cmNlcyI6WyJhY3Rpb24vQmFzZUFjdGlvbkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBQzNDO0lBSUU7SUFBZ0IsQ0FBQztJQUNqQjs7T0FFRzs7Ozs7OztJQUNILDZDQUFjOzs7Ozs7SUFBZCxVQUFlLEtBQWE7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOzs7WUFDNUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUMvQixnQkFBZ0IsR0FBRyxFQUFFO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkY7aUJBQU07Z0JBQ0wsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7O1lBQ0ssVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBSkQ7Q0F3QkMsQUF0QkQsSUFzQkM7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uRGlzcGF0Y2hlciB9IGZyb20gXCIuL0FjdGlvbkRpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlQWN0aW9uRGlzcGF0Y2hlciBpbXBsZW1lbnRzIEFjdGlvbkRpc3BhdGNoZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0b2tlbiBjb252ZXJ0IGl0IGFuZCBjYWxsIHRoZSBtZXRob2QgcmVxdWVzdGVkIC5cclxuICAgKi9cclxuICBkaXNwYXRjaEFjdGlvbih0b2tlbjogc3RyaW5nLC4uLmFyZ3MpOiBhbnkge1xyXG4gICAgY29uc3QgdG9rZW5BcnJheSA9IHRva2VuLnNwbGl0KFwiLVwiKTtcclxuICAgIGxldCB0cmFuc2Zvcm1lZFRva2VuID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZFRva2VuLnB1c2godG9rZW5BcnJheVtpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRva2VuQXJyYXlbaV0uc2xpY2UoMSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkVG9rZW4ucHVzaCh0b2tlbkFycmF5W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IHRyYW5zZm9ybWVkVG9rZW4uam9pbihcIlwiKTtcclxuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsYXJncyk7XHJcbiAgfVxyXG5cclxufSJdfQ==