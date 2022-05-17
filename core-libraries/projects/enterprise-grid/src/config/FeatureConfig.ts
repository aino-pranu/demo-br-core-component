import { ActionConfig } from "./ActionConfig";
import { ColumnConfig } from "./ColumnConfig";
import { PagingConfig } from "./PagingConfig";

/**
 * Class for configuring(enable/disable) the features of the grid, features like toolbar/searchbar/footer.
 * Feature Configuration class for configuring basic grid features and actions.
 * These configurations are provided by host-app for grid to configure.
 */
export class FeatureConfig {

    public name: string;
    public enable: boolean;

    // grid column configuration array
    private columnConfigArr: ColumnConfig[];

    //action configuration array
    private actionConfigArr: ActionConfig[];

    // feature  configuration array
    private featureConfigArr: FeatureConfig[];

    // paging configuration array
    private pagingConfigArr: PagingConfig[];

    /**
     * 
     * @param featureConfigArr get the feature configuration from the host application
     * @param columnConfigArr get the column configArr from the host application
     * @param actionConfigArr get the action configArr from the host application
     * @param pagingConfigArr get the paging configArr from the host application
     */
    public constructor(featureConfigArr: {}, columnConfigArr: {}, actionConfigArr: {}, pagingConfigArr: {}) {

        this.actionConfigArr = new Array();
        this.featureConfigArr = new Array();
        this.pagingConfigArr = new Array();
        this.columnConfigArr = new Array();
        this.columnConfigArr.push(new ColumnConfig("checkbox", "", 0));

        this.addColumnConfig(columnConfigArr);
        this.actionConfig(actionConfigArr);
        this.featureConfig(featureConfigArr);
        this.pagingConfig(pagingConfigArr);

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

    public get getColumnConfigArr(): ColumnConfig[] {
        return this.columnConfigArr;
    }


    public addColumnConfig(columnConfigObj: any) {
        for (let i = 0; i < columnConfigObj.length; i++) {
            this.columnConfigArr.push(columnConfigObj[i]);
        }
    }

    public actionConfig(actionConfigObj: any) {
        for (let i = 0; i < actionConfigObj.length; i++) {
            this.actionConfigArr.push(actionConfigObj[i]);
        }
    }

    public featureConfig(featureConfigObj: any) {
        for (let i = 0; i < featureConfigObj.length; i++) {
            this.featureConfigArr.push(featureConfigObj[i]);
        }
    }

    public pagingConfig(pagingConfigObj: any) {
        for (let i = 0; i < pagingConfigObj.length; i++) {
            this.pagingConfigArr.push(pagingConfigObj[i]);
        }
    }
}