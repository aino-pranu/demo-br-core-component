export declare class ActionsAndToolsConfig {
    name: string;
    enable: boolean;
    token: string;
    level: number;
    type: string;
    isIcon: boolean;
    nodePropertyName: string;
    isApp: boolean;
    constructor(name: string, enable: boolean, token: string, level?: number, type?: string, icon?: boolean, nodePropertyName?: string, isApp?: boolean);
    readonly getName: string;
    setName: string;
    readonly getEnable: boolean;
    setEnable: boolean;
    readonly getToken: string;
    setToken: string;
    readonly getLevel: number;
    setLevel: number;
    readonly getType: string;
    setType: string;
    readonly getIcon: boolean;
    setIcon: boolean;
    readonly getNodePropertyName: string;
    setNodePropertyName: string;
    readonly getApp: boolean;
    setApp: boolean;
}
