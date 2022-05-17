export declare class ActionConfig {
    name: string;
    enable: boolean;
    token: string;
    isBulk: boolean;
    type: string;
    positionType: string;
    isIcon: boolean;
    iconName: string;
    tooltip: string;
    /**
     *
     * @param name action name
     * @param enable action enable boolean value
     * @param token action token e.g. on-button-click
     * @param type action type (hover or core)
     * @param positionType action position type (whether in-place or in-selector)
     * @param icon whether icon action, boolean value
     * @param iconName action icon name/text to be displayed.
     * @param tooltip tooltip string
     */
    constructor(name: string, enable: boolean, token: string, isBulk: boolean, type?: string, positionType?: string, icon?: boolean, iconName?: string, tooltip?: string);
    readonly getName: string;
    setName: string;
    getEnable: boolean;
    readonly getToken: string;
    setToken: string;
    readonly getIsBulk: boolean;
    setIsBulk: boolean;
    readonly getType: string;
    setType: string;
    readonly getPositionType: string;
    setPositionType: string;
    readonly getIcon: boolean;
    setIcon: boolean;
    readonly getIconName: string;
    setIconName: string;
    readonly getTooltip: string;
    setTooltip: string;
}
