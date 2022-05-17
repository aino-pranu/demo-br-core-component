/**
 * Class for configuring pagination action elements, for grid paging toolbar.
 */
export class PagingConfig {

    // paging config name
    public name: string;

    // paging enable boolean value
    public enable: boolean;

    // paging action token
    public token: string;

    // paging type (whether scroll or footer)
    public pagingType: string;

    // paging widget icon or not (boolean value)
    public isIcon: boolean;

    // paging icon name
    public iconName: string;

    // widget tooltip
    public tooltip: string;

    /**
     * 
     * @param name paging config name
     * @param enable paging enable boolean value
     * @param token paging action token
     * @param pagingType paging type (whether scroll or footer)
     * @param icon paging widget icon or not (boolean value)
     * @param iconName paging icon name
     * @param tooltip widget tooltip
     */
    public constructor(name: string, enable: boolean, token: string, pagingType: string, icon?: boolean, iconName?: string, tooltip?: string) {
        this.name = name;
        this.enable = enable;
        this.token = token;
        this.pagingType = pagingType;
        this.isIcon = icon;
        this.iconName = iconName;
        this.tooltip = tooltip;
    }

    public get getName(): string {
        return this.name;
    }
    public set setName(value: string) {
        this.name = value;
    }
    public get getEnable(): boolean {
        return this.enable;
    }
    public set getEnable(value: boolean) {
        this.enable = value;
    }
    public get getToken(): string {
        return this.token;
    }
    public set setToken(value: string) {
        this.token = value;
    }
    public get getPagingType(): string {
        return this.pagingType;
    }
    public set setPagingType(value: string) {
        this.pagingType = value;
    }
    public get getIcon(): boolean {
        return this.isIcon;
    }
    public set setIcon(value: boolean) {
        this.isIcon = value;
    }
    public get getIconName(): string {
        return this.iconName;
    }
    public set setIconName(value: string) {
        this.iconName = value;
    }
    public get getTooltip(): string {
        return this.tooltip;
    }
    public set setTooltip(value: string) {
        this.tooltip = value;
    }

}