export declare class FeatureConfig {
    name: string;
    enable: boolean;
    /**
     *
     * @param name feature name
     * @param enable boolean value to show or hide the feature
     */
    constructor(name: string, enable: boolean);
    readonly getName: string;
    setName: string;
    getEnable: boolean;
}
