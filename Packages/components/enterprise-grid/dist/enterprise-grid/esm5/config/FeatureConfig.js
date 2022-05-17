/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeatureConfig = /** @class */ (function () {
    /**
     *
     * @param name feature name
     * @param enable boolean value to show or hide the feature
     */
    function FeatureConfig(name, enable) {
        this.name = name;
        this.enable = enable;
    }
    Object.defineProperty(FeatureConfig.prototype, "getName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "setName", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureConfig.prototype, "getEnable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.enable = value;
        },
        enumerable: true,
        configurable: true
    });
    return FeatureConfig;
}());
export { FeatureConfig };
if (false) {
    /** @type {?} */
    FeatureConfig.prototype.name;
    /** @type {?} */
    FeatureConfig.prototype.enable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VudGVycHJpc2UtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbmZpZy9GZWF0dXJlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUtJOzs7O09BSUc7SUFDSCx1QkFBbUIsSUFBWSxFQUFFLE1BQWU7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFXLGtDQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsa0NBQU87Ozs7O1FBQWxCLFVBQW1CLEtBQWE7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxvQ0FBUzs7OztRQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFJTCxvQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7SUF6QkcsNkJBQW9COztJQUNwQiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmVhdHVyZUNvbmZpZyB7XG5cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmFtZSBmZWF0dXJlIG5hbWVcbiAgICAgKiBAcGFyYW0gZW5hYmxlIGJvb2xlYW4gdmFsdWUgdG8gc2hvdyBvciBoaWRlIHRoZSBmZWF0dXJlXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZW5hYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBnZXRFbmFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuYWJsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBnZXRFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB2YWx1ZTtcbiAgICB9XG59Il19