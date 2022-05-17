export declare class PagingConfig {
    name: string;
    enable: boolean;
    token: string;
    pagingType: string;
    isIcon: boolean;
    iconName: string;
    tooltip: string;
    constructor(name: string, enable: boolean, token: string, pagingType: string, icon?: boolean, iconName?: string, tooltip?: string);
    readonly getName: string;
    setName: string;
    getEnable: boolean;
    readonly getToken: string;
    setToken: string;
    readonly getPagingType: string;
    setPagingType: string;
    readonly getIcon: boolean;
    setIcon: boolean;
    readonly getIconName: string;
    setIconName: string;
    readonly getTooltip: string;
    setTooltip: string;
}
